FROM pandoc/core:3.5 AS builder
WORKDIR /usr/src/app
COPY . .
RUN echo '<!DOCTYPE html> \
<html xmlns="http://www.w3.org/1999/xhtml" lang="$lang$" xml:lang="$lang$"$if(dir)$ dir="$dir$"$endif$> \
<head> \
    <meta charset="utf-8" /> \
    <script defer data-domain="kuhree.com" src="https://plausible.io/js/script.file-downloads.hash.outbound-links.js"></script> \
    $for(css)$ \
    <link rel="stylesheet" href="$css$" /> \
    $endfor$ \
    $for(header-includes)$ \
    $header-includes$ \
    $endfor$ \
    <title>$if(title-prefix)$$title-prefix$ – $endif$$pagetitle$</title> \
</head> \
<body> \
$body$ \
</body> \
</html>' > template.html
RUN pandoc --from gfm --to html --standalone README --output=index.html
RUN pandoc \
    --from gfm --to html --output=index.html \
    --standalone --template=template.html \
    README

FROM nginx:1.27-alpine AS srv
ENV PORT=8080
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app .
RUN echo "server { \
    listen ${PORT}; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
    } \
}" > /etc/nginx/conf.d/www.conf 
EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]
