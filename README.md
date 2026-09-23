# Brian E. Ramirez Zea — Portfolio Web App

A high-performance, modern portfolio web application engineered for a Software & Infrastructure / DevOps Engineer using **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**.

The site balances a Linux desktop "ricing" aesthetic (**Catppuccin Mocha** palette, 1px borders, subtle monospace accents) with executive-level clarity and immediate mobile responsiveness for recruiters.

---

## 🎨 Catppuccin Mocha Design Tokens

| Token | Hex | Role |
| :--- | :--- | :--- |
| `base` | `#1e1e2e` | Primary page background |
| `mantle` | `#181825` | Card and container background |
| `crust` | `#11111b` | Terminal title bars & deep contrast |
| `surface0` | `#313244` | Elevated elements & buttons |
| `surface1` | `#45475a` | 1px borders & dividers |
| `surface2` | `#585b70` | Hover states |
| `text` | `#cdd6f4` | Primary typography |
| `subtext0` | `#a6adc8` | Secondary & muted copy |
| `blue` | `#89b4fa` | Primary accent |
| `green` | `#a6e3a1` | Cluster status & healthy indicators |
| `yellow` | `#f9e2af` | Warning & problem highlights |
| `mauve` | `#cba6f7` | Badges & category pills |

---

## 🏗️ Architecture & Sections

1. **Header & Navigation (`Navbar.tsx`)**:
   - Monospace identifier (`bz@fermi:~ $`).
   - Sticky backdrop blur (`bg-base/80 backdrop-blur-md`).
   - Live cluster health badge (`Cluster Status: Healthy · 12ms`).
   - Direct Resume download, GitHub, LinkedIn, and recruiter contact modal.

2. **Hero Section (`Hero.tsx`) & Fastfetch Card (`FastfetchCard.tsx`)**:
   - Executive positioning: Software & Infrastructure Engineer.
   - 2-sentence summary of distributed systems, full-stack apps, and automated delivery pipelines.
   - Interactive fastfetch terminal window with window controls, color chips, and live switchable tabs (`fastfetch`, `k3s get nodes`, `uname -a`).

3. **Featured Projects (`ProjectCard.tsx`)**:
   - Structured engineering breakdown: **The Problem**, **Architecture & Tech Stack**, and **Impact / Measurable Outcome**.
   - Zero-trust mesh indicators for self-hosted private workloads.

4. **"How This Site Works" Infrastructure Exhibit (`InfraCard.tsx`)**:
   - Interactive exhibit detailing multi-stage container compilation, multi-arch buildx, Tailscale WireGuard mesh, and K3s orchestration.
   - Tabbed viewer for Pipeline Topology, K8s Deployment Manifest, and Caddyfile configuration.

5. **Skills & Tooling Matrix (`SkillsMatrix.tsx`)**:
   - Categorized cards for Languages & Low-Level, Infrastructure & Cloud, and Web/APIs.
   - Instant search/filtering by keyword.

6. **Footer (`Footer.tsx`)**:
   - Monospace commit SHA indicator badge (`build: sha-main · k3s-ready`).
   - Cluster latency metrics and smooth scroll to top.

---

## 🐳 Containerized Development & In-Container Testing

All dependencies and builds are strictly containerized. No host installations of Node or npm are required:

### 1. Run Automated Container Tests
Executes the in-container verification stage, compiles the unprivileged Caddy runtime, runs smoke tests on `/healthz` and `/`, and verifies memory consumption stays under 16–32MB:
```bash
./scripts/test-container.sh
```

### 2. Run Local Development Server in Container
```bash
./scripts/dev-container.sh
```
Accessible at `http://localhost:5173`.

### 3. Compile Production Bundle in Container
```bash
./scripts/build-container.sh
```

---

## ☸️ Kubernetes & K3s Edge Deployment

Deployment specifications are provided under `k8s/`:
- `k8s/deployment.yaml`: Dual replica deployment with unprivileged security context (`UID 10001`), read-only root filesystem, memory request `16Mi`, memory limit `32Mi`, and `/healthz` probes.
- `k8s/service.yaml`: ClusterIP service.
- `k8s/resourcequota.yaml`: Resource quota preventing container sprawl.

