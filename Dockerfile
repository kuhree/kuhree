FROM oven/bun as base
WORKDIR /app

FROM base as deps

COPY package.json bun.lockb ./
RUN bun install --production --frozen-lockfile

FROM deps as builder

RUN bun install --frozen-lockfile
COPY . .

ENV ASTRO_ADAPTER=node
RUN bun --bun run build

FROM deps as runner
WORKDIR /app

COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE ${PORT:?}
CMD bun ./dist/server/entry.mjs