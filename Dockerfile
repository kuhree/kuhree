FROM pandoc/core:3.5 AS builder
WORKDIR /usr/src/app
COPY . .
RUN cat > scripts.txt <<EOF
<script defer data-domain="kuhree.com" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.js"></script>
EOF

RUN pandoc \
    --from=gfm \
    --to="html" \
    --output="index.html" \
    --standalone \
    --embed-resources="true" \
    --include-in-header="scripts.txt" \
    --css="https://owickstrom.github.io/the-monospace-web/reset.css" \
    --css="https://owickstrom.github.io/the-monospace-web/index.css" \
    --metadata title="kuhree.com" \
    README

FROM caddy:2.8-alpine AS runner
ENV PORT=8080
COPY --from=builder /usr/src/app/ /usr/share/caddy/
RUN cat > /etc/caddy/Caddyfile <<EOF
:${PORT} {
    root * /usr/share/caddy
    try_files {path} {path}.html {path}/ =404
    file_server
    encode gzip

    handle_errors {
        rewrite * /{err.status_code}.html
        file_server
    }
}
EOF

EXPOSE $PORT
