# ==========================================
# STAGE 1: Cached Dependencies
# ==========================================
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# ==========================================
# STAGE 2: In-Container Testing & Verification
# ==========================================
FROM deps AS test
WORKDIR /app
COPY . .

RUN npm run typecheck
RUN npm run build

# ==========================================
# STAGE 3: Minimal Unprivileged Caddy Runtime
# ==========================================
FROM caddy:2-alpine AS runtime

# Remove extended file capabilities so the binary executes under drop: ALL
RUN apk add --no-cache libcap && \
    setcap -r /usr/bin/caddy && \
    apk del libcap

# Route Caddy data and config writes to the writable /tmp volume for read-only rootfs
ENV XDG_DATA_HOME=/tmp/data
ENV XDG_CONFIG_HOME=/tmp/config

USER 10001:10001

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=test --chown=10001:10001 /app/dist /srv

EXPOSE 8080

HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/healthz || exit 1

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
