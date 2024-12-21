FROM pandoc/core:3.5 AS builder
ARG FILE=README
ARG DOMAIN=kuhree.com
ARG TITLE="Khari (kuhree) Johnson"
WORKDIR /usr/src/app
COPY . .
RUN cat > scripts.txt <<EOF
<script defer data-domain="${DOMAIN}" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.js"></script>
EOF

RUN pandoc \
    --standalone \
    --from="gfm" \
    --to="html" \
    --output="index.html" \
    # --embed-resources="true" \
    # --include-in-header="scripts.txt" \
    --css="https://owickstrom.github.io/the-monospace-web/reset.css" \
    --css="https://owickstrom.github.io/the-monospace-web/index.css" \
    --metadata title="${TITLE}" \
    ${FILE}

FROM nginx:alpine AS runner
ENV PORT=8080
COPY --from=builder /usr/src/app/ /usr/share/nginx/html/
RUN cat > /etc/nginx/conf.d/default.conf <<EOF
server {
    listen ${PORT};

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location ~* \.(html|css|js|json)$ {
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    }
}
EOF

EXPOSE $PORT
