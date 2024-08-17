FROM oven/bun AS base
WORKDIR /app

FROM base AS deps
COPY package.json bun.lockb ./
RUN apt-get update \
  && apt-get install -y ca-certificates \
  && bun install --production --frozen-lockfile

FROM deps AS builder
COPY . .
RUN bun install --frozen-lockfile \
  && bunx astro build

FROM deps AS runner
COPY --from=builder /app/dist ./dist

ENV HOST="0.0.0.0"
ENV PORT=4321
ENV PUBLIC_SENTRY_DSN=""
ENV PUBLIC_UMAMI_ID=""
ENV PUBLIC_UMAMI_HOST="https://umami.littlevibe.net"
EXPOSE ${PORT:?}
CMD [ "bun", "run", "--bun", "--smol", "./dist/server/entry.mjs" ]
