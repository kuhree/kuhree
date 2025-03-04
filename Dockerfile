FROM pandoc/core:3.5 AS builder
ARG FILE=README.md
ARG UMAMI_SRC=https://cloud.umami.is/script.js
ARG UMAMI_ID=a8924939-e88e-4817-b6a9-ddca06a842a7
ARG TITLE="Khari (kuhree) Johnson"
WORKDIR /usr/src/app
COPY . .
RUN cat > scripts.html <<EOF
<script defer src="${UMAMI_SRC}" data-website-id="${DOMAIN}"></script>
EOF

RUN pandoc \
	--standalone \
	--from="gfm" \
	--to="html" \
	--output="index.html" \
	--include-in-header="scripts.html" \
	--embed-resources="true" \
	--css="https://owickstrom.github.io/the-monospace-web/src/reset.css" \
	--css="https://owickstrom.github.io/the-monospace-web/src/index.css" \
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
