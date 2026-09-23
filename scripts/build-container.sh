#!/usr/bin/env bash
# Runs production build inside an isolated container
set -euo pipefail
docker run --rm \
  -u 1000:1000 \
  -e HOME=/tmp \
  -v "$PWD":/app \
  -w /app \
  node:22-alpine npm run build

