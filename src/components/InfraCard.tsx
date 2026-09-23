import React, { useState } from 'react';
import { 
  Server, 
  Workflow, 
  FileCode, 
  Copy, 
  Check, 
  Box, 
  Network 
} from 'lucide-react';
import { INFRA_EXHIBIT, CLUSTER_STATUS } from '../data/portfolioData';

export const InfraCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'k8s' | 'caddy' | 'dockerfile'>('pipeline');
  const [copied, setCopied] = useState(false);

  const getCodeContent = () => {
    switch (activeTab) {
      case 'k8s':
        return INFRA_EXHIBIT.k8sManifest;
      case 'caddy':
        return INFRA_EXHIBIT.caddyConfig;
      case 'dockerfile':
        return INFRA_EXHIBIT.dockerfileConfig;
      default:
        return '';
    }
  };

  const copyCurrentSnippet = () => {
    const code = getCodeContent();
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-xl border border-surface1 bg-mantle/90 shadow-subtle-card overflow-hidden">
      
      {/* Top Banner / Infrastructure Header */}
      <div className="p-6 md:p-8 border-b border-surface1/80 bg-crust/50">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono bg-blue/10 border border-blue/30 text-blue">
                <Box className="w-3.5 h-3.5" />
                <span>Self-Referential Infrastructure Exhibit</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono bg-green/10 border border-green/30 text-green">
                <span className="w-1.5 h-1.5 rounded-full bg-green shadow-glow-green" />
                <span>Live Cluster Verified</span>
              </span>
            </div>

            <h3 className="text-2xl font-bold text-text tracking-tight">
              {INFRA_EXHIBIT.title}
            </h3>

            <p className="text-sm text-subtext0 leading-relaxed">
              {INFRA_EXHIBIT.summary}
            </p>
          </div>

          {/* Quick Metrics Badge Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 shrink-0 font-mono text-xs">
            <div className="p-2.5 rounded-lg border border-surface1 bg-surface0/60">
              <div className="text-subtext0 text-[11px]">RAM Request</div>
              <div className="text-green font-semibold text-sm mt-0.5">{INFRA_EXHIBIT.memoryQuota}</div>
            </div>
            <div className="p-2.5 rounded-lg border border-surface1 bg-surface0/60">
              <div className="text-subtext0 text-[11px]">CPU Request</div>
              <div className="text-blue font-semibold text-sm mt-0.5">{INFRA_EXHIBIT.cpuQuota}</div>
            </div>
            <div className="p-2.5 rounded-lg border border-surface1 bg-surface0/60">
              <div className="text-subtext0 text-[11px]">Network</div>
              <div className="text-mauve font-semibold text-sm mt-0.5">Tailscale Mesh</div>
            </div>
            <div className="p-2.5 rounded-lg border border-surface1 bg-surface0/60">
              <div className="text-subtext0 text-[11px]">Runtime Security</div>
              <div className="text-yellow font-semibold text-sm mt-0.5">UID 10001 (Non-Root)</div>
            </div>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-surface1/60">
          <div className="flex flex-wrap items-center gap-1.5 bg-surface0/70 p-1 rounded-lg border border-surface1 text-xs font-mono">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-blue text-base font-semibold shadow-glow-blue'
                  : 'text-subtext0 hover:text-text'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Pipeline &amp; Topology</span>
            </button>

            <button
              onClick={() => setActiveTab('k8s')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'k8s'
                  ? 'bg-blue text-base font-semibold shadow-glow-blue'
                  : 'text-subtext0 hover:text-text'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>K8s Manifest (YAML)</span>
            </button>

            <button
              onClick={() => setActiveTab('caddy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'caddy'
                  ? 'bg-blue text-base font-semibold shadow-glow-blue'
                  : 'text-subtext0 hover:text-text'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Caddyfile</span>
            </button>

            <button
              onClick={() => setActiveTab('dockerfile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'dockerfile'
                  ? 'bg-blue text-base font-semibold shadow-glow-blue'
                  : 'text-subtext0 hover:text-text'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Dockerfile</span>
            </button>
          </div>

          {activeTab !== 'pipeline' && (
            <button
              onClick={copyCurrentSnippet}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface0 hover:bg-surface1 border border-surface1 text-xs font-mono text-subtext0 hover:text-text transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-6 md:p-8">
        
        {/* Tab 1: Interactive Pipeline Flow */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            
            {/* Visual Node Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {INFRA_EXHIBIT.pipelineSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="rounded-lg border border-surface1 bg-surface0/60 p-4 flex flex-col justify-between hover:border-blue/60 transition-colors relative"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-surface1 text-subtext1 inline-block">
                      {step.badge}
                    </span>
                    <h4 className="text-sm font-semibold text-text">
                      {step.title}
                    </h4>
                    <p className="text-xs text-subtext0 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {index < INFRA_EXHIBIT.pipelineSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-surface2 font-mono text-sm z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Network Mesh Architecture Summary Card */}
            <div className="rounded-lg border border-surface1 bg-crust/60 p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-surface1/60 pb-3">
                <div className="flex items-center gap-2 text-text font-semibold">
                  <Network className="w-4 h-4 text-green" />
                  <span>Cluster Mesh Topology ({CLUSTER_STATUS.region})</span>
                </div>
                <span className="text-[11px] text-green bg-green/10 border border-green/30 px-2 py-0.5 rounded">
                  WireGuard Overlay: {CLUSTER_STATUS.tailscaleOverlay}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded border border-surface1 bg-surface0/40 space-y-1">
                  <div className="text-yellow font-medium">Control Plane (Cloud)</div>
                  <div className="text-subtext0">Oracle Cloud Infrastructure (OCI)</div>
                  <div className="text-subtext1 text-[11px]">Ashburn, VA · 100.64.0.12</div>
                </div>

                <div className="p-3 rounded border border-surface1 bg-surface0/40 space-y-1">
                  <div className="text-blue font-medium">Worker Node 01 (Edge)</div>
                  <div className="text-subtext0">Raspberry Pi 5 (8GB)</div>
                  <div className="text-subtext1 text-[11px]">Local Mesh · 100.64.0.14</div>
                </div>

                <div className="p-3 rounded border border-surface1 bg-surface0/40 space-y-1">
                  <div className="text-mauve font-medium">Resource Governance</div>
                  <div className="text-subtext0">Strict Pod Limits: 32Mi Max</div>
                  <div className="text-subtext1 text-[11px]">Guarantees Academic Co-existence</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: K8s YAML */}
        {activeTab === 'k8s' && (
          <div className="rounded-lg border border-surface1 bg-crust p-4 overflow-x-auto font-mono text-xs sm:text-[13px] text-text leading-relaxed">
            <pre className="text-subtext1">{INFRA_EXHIBIT.k8sManifest}</pre>
          </div>
        )}

        {/* Tab 3: Caddyfile */}
        {activeTab === 'caddy' && (
          <div className="rounded-lg border border-surface1 bg-crust p-4 overflow-x-auto font-mono text-xs sm:text-[13px] text-text leading-relaxed">
            <pre className="text-subtext1">{INFRA_EXHIBIT.caddyConfig}</pre>
          </div>
        )}

        {/* Tab 4: Dockerfile */}
        {activeTab === 'dockerfile' && (
          <div className="rounded-lg border border-surface1 bg-crust p-4 overflow-x-auto font-mono text-xs sm:text-[13px] text-text leading-relaxed">
            <pre className="text-subtext1">{INFRA_EXHIBIT.dockerfileConfig}</pre>
          </div>
        )}

      </div>
    </div>
  );
};

