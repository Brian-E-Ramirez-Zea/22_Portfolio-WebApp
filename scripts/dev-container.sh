#!/usr/bin/env bash
# Runs Vite dev server inside an isolated container
set -euo pipefail
docker run --rm -it \
  -u 1000:1000 \
  -e HOME=/tmp \
  -v "$PWD":/app \
  -w /app \
  -p 5173:5173 \
  node:22-alpine npm run dev

