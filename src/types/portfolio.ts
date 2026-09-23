export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  problem: string;
  architecture: string;
  impact: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isInternalMesh?: boolean;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  note?: string;
}

export interface SkillGroup {
  name: string;
  description: string;
  iconName: string;
  items: SkillItem[];
}

export interface FastfetchInfo {
  user: string;
  host: string;
  os: string;
  kernel: string;
  uptime: string;
  shell: string;
  packages: string;
  primaryFocus: string[];
  tooling: string[];
  architecture: string;
  clusterMesh: string;
}

export interface ClusterStatus {
  status: 'healthy' | 'degraded' | 'syncing';
  statusText: string;
  activeNodes: number;
  activePods: number;
  clusterLatencyMs: number;
  region: string;
  tailscaleOverlay: string;
}

export interface PipelineStep {
  id: string;
  title: string;
  desc: string;
  badge: string;
}

export interface InfraExhibitData {
  title: string;
  summary: string;
  memoryQuota: string;
  cpuQuota: string;
  networkTopology: string;
  pipelineSteps: PipelineStep[];
  k8sManifest: string;
  caddyConfig: string;
  dockerfileConfig: string;
}

