FROM pandoc/core:3.5 AS builder
ARG FILE=README.md
ARG UMAMI_SRC=https://umami.kuhree.com
ARG UMAMI_ID=ca37f2de-805e-4182-8e66-71a405c9fc27
ARG TITLE="Khari (kuhree) Johnson"
WORKDIR /usr/src/app
COPY . .
RUN cat > style.html <<EOF
<style> body { max-width: 80ch; margin: 0 auto; } </style>
EOF
RUN cat > scripts.html <<EOF
<script defer src="${UMAMI_SRC}" data-website-id="${DOMAIN}"></script>
EOF

RUN pandoc \
	--standalone \
	--from="gfm" \
	--to="html" \
	--output="index.html" \
	--include-in-header="style.html" \
	--include-in-header="scripts.html" \
	--embed-resources="true" \
	--css="https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css" \
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
