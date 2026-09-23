# ==========================================
# STAGE 1: Cached Dependencies
# ==========================================
FROM node:22-alpine AS deps
WORKDIR /app

# Install dependencies deterministically
COPY package.json package-lock.json* ./
RUN npm ci

# ==========================================
# STAGE 2: In-Container Testing & Verification
# ==========================================
FROM deps AS test
WORKDIR /app
COPY . .

# Run strict TypeScript compilation check and production build
RUN npm run typecheck
RUN npm run build

# ==========================================
# STAGE 3: Minimal Unprivileged Caddy Runtime
# ==========================================
FROM caddy:2-alpine AS runtime

# Run as non-root user (UID 10001) for zero-trust compliance
USER 10001:10001

# Copy custom Caddy configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Copy static assets compiled in test stage
COPY --from=test --chown=10001:10001 /app/dist /srv

# Expose unprivileged high-port
EXPOSE 8080

# K3s / Container engine healthcheck probe
HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/healthz || exit 1

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]

