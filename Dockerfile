FROM pandoc/core:3.5 AS builder
ARG FILE=README.md
ARG UMAMI_SRC=https://umami.kuhree.com/script.js
ARG UMAMI_ID=4d955c4c-7bc5-48b6-98ad-1a87efee9505
ARG TITLE="Khari (kuhree) Johnson"
WORKDIR /usr/src/app
COPY . .
RUN cat > style.html <<EOF
<style> body { max-width: 80ch; margin: 0 auto; } </style>
EOF
RUN cat > scripts.html <<EOF
<script defer src="${UMAMI_SRC}" data-website-id="${UMAMI_ID}"></script>
EOF

RUN pandoc \
	--standalone \
	--metadata title="${TITLE}" \
	--include-in-header="scripts.html" \
	--include-in-header="style.html" \
	--css="https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css" \
	--embed-resources="true" \
	--from="gfm" \
	--to="html" \
	--output="index.html" \
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
