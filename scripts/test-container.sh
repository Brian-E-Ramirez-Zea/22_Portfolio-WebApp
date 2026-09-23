#!/usr/bin/env bash
# ==============================================================================
# Container Test & Verification Harness
# Tests in-container verification stage, compiles unprivileged Caddy runtime,
# boots with production resource constraints, and performs HTTP smoke tests.
# ==============================================================================
set -euo pipefail

IMAGE_NAME="portfolio-webapp"
TEST_TAG="test"
RUNTIME_TAG="latest"
TEST_PORT="8088"
CONTAINER_NAME="portfolio-test-instance"

echo "============================================================"
echo " [1/4] Running In-Container Test Stage (target: test)..."
echo "============================================================"
docker build --target test -t "${IMAGE_NAME}:${TEST_TAG}" .

echo " [PASS] In-container typechecking and production build succeeded."
echo ""

echo "============================================================"
echo " [2/4] Building Minimal Unprivileged Caddy Runtime..."
echo "============================================================"
docker build -t "${IMAGE_NAME}:${RUNTIME_TAG}" .

echo " [PASS] Runtime image compiled successfully."
echo ""

echo "============================================================"
echo " [3/4] Spawning Container with Production-Parity Quotas..."
echo "       Memory Quota: 32MB | CPUs: 0.5 | Port: ${TEST_PORT}"
echo "============================================================"

# Ensure cleanup on exit
cleanup() {
    echo ""
    echo ">> Cleaning up test container..."
    docker rm -f "${CONTAINER_NAME}" >/dev/null 2>&1 || true
    echo ">> Cleanup complete."
}
trap cleanup EXIT

docker rm -f "${CONTAINER_NAME}" >/dev/null 2>&1 || true

docker run -d \
    --name "${CONTAINER_NAME}" \
    --memory="32m" \
    --cpus="0.5" \
    -p "${TEST_PORT}:8080" \
    "${IMAGE_NAME}:${RUNTIME_TAG}"

# Give Caddy a brief moment to bind
sleep 2

echo "============================================================"
echo " [4/4] Executing Smoke & Health Tests..."
echo "============================================================"

echo ">> Checking /healthz endpoint..."
HEALTH_RESPONSE=$(curl -s -w "\n%{http_code}" "http://localhost:${TEST_PORT}/healthz")
STATUS_CODE=$(echo "${HEALTH_RESPONSE}" | tail -n 1)
BODY=$(echo "${HEALTH_RESPONSE}" | head -n -1)

if [ "${STATUS_CODE}" -ne 200 ]; then
    echo " [FAIL] Health check failed with status ${STATUS_CODE}."
    docker logs "${CONTAINER_NAME}"
    exit 1
fi

if [[ "${BODY}" != *"OK"* ]]; then
    echo " [FAIL] Expected health check body to contain OK, got: ${BODY}"
    exit 1
fi
echo " [PASS] /healthz returned HTTP 200: '${BODY}'"

echo ">> Checking root SPA bundle delivery..."
ROOT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:${TEST_PORT}/")
if [ "${ROOT_STATUS}" -ne 200 ]; then
    echo " [FAIL] Root delivery failed with status ${ROOT_STATUS}."
    exit 1
fi
echo " [PASS] Root / returned HTTP 200"

echo ">> Inspecting container memory consumption..."
docker stats --no-stream "${CONTAINER_NAME}"

echo ""
echo "============================================================"
echo " ALL CONTAINER VERIFICATION CHECKS PASSED SUCCESSFULLY!"
echo " The container is hardened, tested, and ready for K3s."
echo "============================================================"
