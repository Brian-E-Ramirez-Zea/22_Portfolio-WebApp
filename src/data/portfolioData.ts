import { Project, SkillGroup, FastfetchInfo, ClusterStatus, InfraExhibitData } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Brian E. Ramirez Zea",
  handle: "bz@fermi",
  role: "Software & Infrastructure Engineer",
  headline: "Software & Infrastructure Engineer",
  summary: "Building resilient distributed systems, modern full-stack applications, and automated delivery pipelines with systems-level discipline.",
  subSummary: "Undergraduate Software Engineering student at University of Puerto Rico, Mayagüez ('28), CodePath Fellow, and active CKA (Certified Kubernetes Administrator) practitioner.",
  location: "Mayagüez, PR",
  email: "brian.ramirez6@upr.edu",
  website: "https://be-ramirezzea.dev",
  resumeUrl: "/resume.pdf",
  githubUrl: "https://github.com/Brian-E-Ramirez-Zea",
  linkedinUrl: "https://linkedin.com/in/brian-e-ramirez-zea",
  commitSha: "sha-main-e890be1",
  clusterName: "fermi-mesh-k3s",
};

export const CLUSTER_STATUS: ClusterStatus = {
  status: 'healthy',
  statusText: 'Cluster Status: Healthy',
  activeNodes: 3,
  activePods: 16,
  clusterLatencyMs: 12,
  region: 'us-east (OCI Ashburn) + edge-mesh',
  tailscaleOverlay: '100.64.0.0/10 Encrypted WireGuard Mesh'
};

export const FASTFETCH_DATA: FastfetchInfo = {
  user: "brian",
  host: "fermi-node01",
  os: "Arch Linux x86_64 / Debian aarch64",
  kernel: "Linux 6.12.11-hardened",
  uptime: "142 days, 8 hrs, 24 mins",
  shell: "zsh 5.9 (omz / catppuccin-mocha)",
  packages: "1,248 (pacman), 16 (k3s-pods)",
  primaryFocus: [
    "Full-Stack Development",
    "Cloud & Distributed Systems",
    "K8s & Linux Hardening"
  ],
  tooling: [
    "Linux (Arch)",
    "Docker",
    "K3s",
    "TypeScript",
    "React",
    "Python",
    "C/C++",
    "Java"
  ],
  architecture: "Multi-node Hybrid Mesh over Tailscale",
  clusterMesh: "K3s HA (Oracle Cloud OCI + Edge RPi 5)"
};

export const PROJECTS: Project[] = [
  {
    id: "unified-vault",
    title: "UnifiedVault: Hybrid Cloud Homelab & Monorepo",
    category: "Distributed Systems & Cloud",
    date: "2025 – Present",
    summary: "Multi-node hybrid private cloud orchestration and zero-trust infrastructure bridging edge hardware with cloud compute.",
    problem: "Needed a reliable, cost-controlled hybrid compute infrastructure to host self-hosted services and research workloads without exposing sensitive ports to the public internet or sustaining heavy cloud hosting bills.",
    architecture: "Engineered a hybrid K3s cluster bridging an edge Raspberry Pi 5 with Oracle Cloud Infrastructure (OCI) compute instances over a private Tailscale mesh VPN with hardened UFW rules. Structured an IaC monorepo with custom systemd units and self-hosted CI/CD runners pulling updates via VPN.",
    impact: "Zero public attack surface via encrypted peer-to-peer overlay, automated container rebuilds on git push, and 99.9% uptime across disparate hardware environments.",
    tags: ["Kubernetes (K3s)", "Oracle Cloud (OCI)", "Tailscale", "Raspberry Pi 5", "Docker", "Zero-Trust", "IaC", "CI/CD"],
    githubUrl: "https://github.com/Brian-E-Ramirez-Zea",
    isInternalMesh: true,
    featured: true
  },
  {
    id: "campus-event-aggregator",
    title: "Campus Event Aggregator & Web Crawler",
    category: "Data Pipelines & Ingestion",
    date: "2026",
    summary: "Multi-framework web crawling and data ingestion pipeline for university bulletins and departmental announcements.",
    problem: "Academic bulletins and campus events were scattered across disparate departmental websites, unstructured bulletin boards, and PDFs with no standardized data feed or consolidated calendar API.",
    architecture: "High-concurrency crawler pipeline with strict robots.txt compliance, rate-limiting, and exponential backoff parsing HTML/PDF documents. Containerized on Docker and Kubernetes with automated health probes and ingress routing.",
    impact: "Successfully normalized and deduplicated multi-department feeds into a consolidated JSON schema with sub-100ms API response latency and 100% crawl resilience.",
    tags: ["Python", "Docker", "Kubernetes", "TypeScript", "REST APIs", "Data Pipelines", "Ingress"],
    githubUrl: "https://github.com/Brian-E-Ramirez-Zea",
    liveUrl: "https://uprm-events.be-ramirezzea.dev/",
    featured: true
  },
  {
    id: "airbets",
    title: "AirBets: Containerized Cloud Application",
    category: "Full-Stack & Cloud Architecture",
    date: "2026",
    summary: "Full-stack predictive sports forecasting platform integrating Google Cloud BigQuery and Vertex AI foundation models.",
    problem: "Delivering real-time predictive insights and data visualizations required uniting large-scale data queries with generative AI explanations without incurring unpredictable cloud infrastructure costs.",
    architecture: "Containerized Python/Flask backend deployed to Google Cloud Run serverless containers, connected directly to Google Cloud BigQuery for data warehousing and Vertex AI APIs for generative insights. Fully automated via GitHub Actions CI/CD.",
    impact: "Achieved sub-second cold starts, zero-downtime automated deployments on Cloud Run, and strict code quality validated by comprehensive test suites.",
    tags: ["Python", "Flask", "Google Cloud Run", "BigQuery", "Vertex AI", "Docker", "CI/CD"],
    githubUrl: "https://github.com/Brian-E-Ramirez-Zea",
    featured: true
  },
  {
    id: "nes-assembly-game",
    title: "NES 6502 Assembly Fighting Game",
    category: "Systems & Low-Level Architecture",
    date: "2024",
    summary: "Real-time 2D fighting game built for the Nintendo Entertainment System written directly in 6502 Assembly.",
    problem: "Executing real-time multi-entity combat under extreme hardware constraints (2KB of RAM, 1.79MHz 8-bit CPU, and strict cycle limits during Vertical Blanking).",
    architecture: "Architected 100% in 6502 Assembly. Custom fixed-point physics and collision detection routines, real-time 3-character swap using controller interrupts, and direct Picture Processing Unit (PPU) DMA sprite transfers and OAM buffer management.",
    impact: "Maintained a rock-solid 60 FPS under peak multi-sprite load with zero visual tearing and sub-frame controller input latency.",
    tags: ["6502 Assembly", "Low-Level Systems", "Memory Mapping", "Hardware Interrupts", "State Machines"],
    githubUrl: "https://github.com/Brian-E-Ramirez-Zea",
    featured: true
  },
  {
    id: "stocksense",
    title: "StockSense: Transactional Inventory REST API",
    category: "Backend & Systems Design",
    date: "2026",
    summary: "Transaction-based inventory management REST API and CLI tool with automated stock reordering logic.",
    problem: "Inventory systems frequently experience silent drift, race conditions during high-concurrency adjustments, and lack verifiable audit trails.",
    architecture: "Centralized Python backend utilizing a strict transactional ledger model for all SKU updates. Features automated reordering triggers based on historical usage velocity, Role-Based Access Control (RBAC), and CSV data portability.",
    impact: "Eliminated inventory discrepancy errors across all SKU updates, built within an Agile team of 6 from specification to fully verified MVP.",
    tags: ["Python", "REST API", "System Architecture", "RBAC", "CLI", "Transactions"],
    githubUrl: "https://github.com/Brian-E-Ramirez-Zea",
    featured: false
  },
  {
    id: "ai-resume-pipeline",
    title: "AI Resume Tailoring & Requisition Pipeline",
    category: "Automation & GenAI Pipelines",
    date: "2026",
    summary: "Automated job aggregator scraper and AI-driven ATS resume compiler under strict 1-page constraints.",
    problem: "Manually adjusting technical bullets and keywords for varying job requisitions is slow and risks breaking strict single-page typographic layouts.",
    architecture: "End-to-end Python pipeline using python-jobspy and HTTPX to ingest listings from LinkedIn and Google into employer hierarchies. Prompts Google Gemini API against a tagged YAML master inventory, compiling publication-grade ATS PDFs via RenderCV.",
    impact: "Reduced custom resume compilation time from 45 minutes to < 30 seconds while guaranteeing zero typographic overflow and 100% ATS parser fidelity.",
    tags: ["Python", "Gemini API", "RenderCV", "Web Scraping", "YAML", "CI/CD", "Automation"],
    githubUrl: "https://github.com/Brian-E-Ramirez-Zea",
    featured: false
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Languages & Low-Level",
    description: "Core languages used for systems programming, distributed tooling, backend APIs, and web engineering.",
    iconName: "Terminal",
    items: [
      { name: "Python", highlight: true, note: "Advanced / Async / Tooling" },
      { name: "TypeScript", highlight: true, note: "Strict Types / React 19" },
      { name: "JavaScript", note: "ES2024 / Node.js" },
      { name: "C / C++", highlight: true, note: "Memory / Low-level / OS" },
      { name: "Java", note: "OOP / Algorithms" },
      { name: "SQL (PostgreSQL)", highlight: true, note: "Relational Modeling & Tuning" },
      { name: "MIPS / 6502 Assembly", note: "Hardware Constraints & Interrupts" },
      { name: "Bash / Shell", highlight: true, note: "Automation & Systemd" }
    ]
  },
  {
    name: "Infrastructure & Cloud",
    description: "Container orchestration, cloud providers, zero-trust networking, and deployment pipelines.",
    iconName: "Server",
    items: [
      { name: "Kubernetes (K3s)", highlight: true, note: "CKA Candidate / Cluster Admin" },
      { name: "Docker & Buildx", highlight: true, note: "Multi-arch Multi-stage Builds" },
      { name: "Linux (Arch / Debian)", highlight: true, note: "Hardened Kernels / Systemd" },
      { name: "Oracle Cloud (OCI)", highlight: true, note: "Compute & VCN Config" },
      { name: "Google Cloud", note: "Cloud Run / BigQuery / Vertex AI" },
      { name: "Tailscale", highlight: true, note: "Encrypted WireGuard Mesh" },
      { name: "Cloudflare Tunnels", note: "Zero-Trust Ingress & Edge DNS" },
      { name: "GitHub Actions", highlight: true, note: "Automated CI/CD Workflows" },
      { name: "UFW & Firewalls", note: "Default-Deny Zero-Trust" }
    ]
  },
  {
    name: "Web, APIs & Frameworks",
    description: "Modern frontend architectures, REST API frameworks, and developer toolchains.",
    iconName: "Globe",
    items: [
      { name: "React 19", highlight: true, note: "Modern Hooks / Concurrent" },
      { name: "Vite", highlight: true, note: "Lightning Fast ESM Bundler" },
      { name: "Tailwind CSS", highlight: true, note: "Design Tokens / Mocha" },
      { name: "FastAPI", highlight: true, note: "High-perf Async APIs" },
      { name: "Flask", note: "Lightweight Services" },
      { name: "Node.js", note: "Backend Runtime" },
      { name: "REST & Web APIs", note: "API Contract Design" },
      { name: "PostgreSQL", note: "ACID Transactions" }
    ]
  }
];

export const INFRA_EXHIBIT: InfraExhibitData = {
  title: "How This Site Works",
  summary: "This portfolio is not hosted on generic shared hosting. It runs as a containerized edge workload inside an unprivileged Caddy container deployed to an encrypted multi-node K3s cluster across Oracle Cloud Infrastructure and edge hardware, bounded by strict resource quotas.",
  memoryQuota: "16Mi",
  cpuQuota: "100m",
  networkTopology: "Tailscale WireGuard Mesh (OCI Ashburn + Edge RPi5)",
  pipelineSteps: [
    {
      id: "stage-1",
      title: "1. GitHub Actions Buildx",
      desc: "Git push triggers a multi-stage Docker build with target testing and multi-arch compilation (amd64/arm64).",
      badge: "CI/CD Automation"
    },
    {
      id: "stage-2",
      title: "2. In-Container Verification",
      desc: "Container build executes strict TypeScript checks (tsc --noEmit) and asset optimization before image publishing.",
      badge: "Quality Gate"
    },
    {
      id: "stage-3",
      title: "3. Tailscale WireGuard Mesh",
      desc: "Images are synchronized to the private cluster over an encrypted zero-trust mesh without public port exposure.",
      badge: "Zero-Trust Network"
    },
    {
      id: "stage-4",
      title: "4. K3s Pod Scheduling",
      desc: "Scheduled into the K3s cluster with strict 16Mi RAM requests to co-exist alongside academic workloads.",
      badge: "16Mi RAM Quota"
    },
    {
      id: "stage-5",
      title: "5. Unprivileged Caddy Edge",
      desc: "Served via Caddy running as non-root (UID 10001) with HTTP/3, zstd compression, and hardened security headers.",
      badge: "Sub-15ms Latency"
    }
  ],
  k8sManifest: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-webapp
  namespace: edge-production
  labels:
    app: portfolio-webapp
    tier: frontend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: portfolio-webapp
  template:
    metadata:
      labels:
        app: portfolio-webapp
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        runAsGroup: 10001
        fsGroup: 10001
      containers:
      - name: web
        image: ghcr.io/brian-e-ramirez-zea/portfolio:latest
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 8080
          name: http
        resources:
          requests:
            memory: "16Mi"
            cpu: "20m"
          limits:
            memory: "32Mi"
            cpu: "100m"
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 15
        readinessProbe:
          httpGet:
            path: /healthz
            port: 8080
          initialDelaySeconds: 2
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
  namespace: edge-production
spec:
  type: ClusterIP
  selector:
    app: portfolio-webapp
  ports:
  - port: 80
    targetPort: 8080
    name: http`,
  caddyConfig: `:8080 {
    root * /srv
    encode zstd gzip

    route {
        # Dedicated healthcheck endpoint for Kubernetes liveness & readiness probes
        @health path /healthz
        respond @health "OK (k3s-pod-healthy)" 200

        # Hardened security headers
        header {
            X-Content-Type-Options "nosniff"
            X-Frame-Options "DENY"
            Referrer-Policy "strict-origin-when-cross-origin"
            Strict-Transport-Security "max-age=31536000; includeSubDomains"
            Cache-Control "public, max-age=31536000, immutable" /assets/*
        }

        # Modern SPA routing fallback
        try_files {path} /index.html
        file_server
    }
}`,
  dockerfileConfig: `# Multi-stage Dockerfile with integrated in-container test stage
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# In-container testing & validation stage
FROM deps AS test
COPY . .
RUN npm run typecheck
RUN npm run build

# Unprivileged lightweight Caddy edge runtime (< 16Mi RAM)
FROM caddy:2-alpine AS runtime
USER 10001:10001
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=test /app/dist /srv
EXPOSE 8080
HEALTHCHECK --interval=15s --timeout=3s CMD wget -qO- http://localhost:8080/healthz || exit 1`
};

