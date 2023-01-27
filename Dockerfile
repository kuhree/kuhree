FROM node as builder
WORKDIR /data/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

FROM ubuntu as runner

RUN apt-get update
RUN apt-get install nginx -y

COPY --from=builder /data/app/.vercel/output/static /var/www/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
