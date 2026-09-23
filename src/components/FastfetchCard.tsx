import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, Server, Cpu, HardDrive } from 'lucide-react';
import { FASTFETCH_DATA } from '../data/portfolioData';

export const FastfetchCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fastfetch' | 'k3s_nodes' | 'uname'>('fastfetch');
  const [copied, setCopied] = useState(false);

  const copyFastfetch = () => {
    const textToCopy = `User: ${FASTFETCH_DATA.user}@${FASTFETCH_DATA.host}
OS: ${FASTFETCH_DATA.os}
Kernel: ${FASTFETCH_DATA.kernel}
Uptime: ${FASTFETCH_DATA.uptime}
Tooling: ${FASTFETCH_DATA.tooling.join(', ')}
Mesh: ${FASTFETCH_DATA.architecture}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-lg border border-surface1 bg-mantle/90 shadow-subtle-card overflow-hidden font-mono text-xs sm:text-[13px] backdrop-blur-md">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-crust/90 border-b border-surface1">
        <div className="flex items-center gap-2">
          {/* Linux window buttons in Catppuccin Mocha colors */}
          <span className="w-3 h-3 rounded-full bg-red/80 inline-block border border-red/40" />
          <span className="w-3 h-3 rounded-full bg-yellow/80 inline-block border border-yellow/40" />
          <span className="w-3 h-3 rounded-full bg-green/80 inline-block border border-green/40" />
          <span className="ml-2 text-subtext0 text-xs hidden sm:inline">
            {FASTFETCH_DATA.user}@{FASTFETCH_DATA.host}: ~
          </span>
        </div>

        {/* View Switchers */}
        <div className="flex items-center gap-1 bg-surface0/60 p-0.5 rounded border border-surface1/60">
          <button
            onClick={() => setActiveTab('fastfetch')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeTab === 'fastfetch' 
                ? 'bg-surface1 text-text font-medium' 
                : 'text-subtext0 hover:text-text'
            }`}
          >
            fastfetch
          </button>
          <button
            onClick={() => setActiveTab('k3s_nodes')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeTab === 'k3s_nodes' 
                ? 'bg-surface1 text-text font-medium' 
                : 'text-subtext0 hover:text-text'
            }`}
          >
            k3s get nodes
          </button>
          <button
            onClick={() => setActiveTab('uname')}
            className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
              activeTab === 'uname' 
                ? 'bg-surface1 text-text font-medium' 
                : 'text-subtext0 hover:text-text'
            }`}
          >
            uname -a
          </button>
        </div>

        {/* Copy specs button */}
        <button
          onClick={copyFastfetch}
          className="p-1 rounded text-subtext0 hover:text-text hover:bg-surface0 transition-colors"
          title="Copy fastfetch specs"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 text-text space-y-3 leading-relaxed">
        
        {activeTab === 'fastfetch' && (
          <div className="space-y-3">
            {/* Command Header */}
            <div className="flex items-center gap-2 text-subtext0 border-b border-surface1/60 pb-2">
              <span className="text-green">➜</span>
              <span className="text-blue">~</span>
              <span className="text-subtext1">fastfetch --config systems.jsonc</span>
            </div>

            {/* Fastfetch Output Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
              
              {/* Left ASCII / Arch Logo column */}
              <div className="hidden sm:flex sm:col-span-4 flex-col items-center justify-start text-blue/90 font-bold select-none pt-1">
                <pre className="text-[11px] leading-[13px] text-blue">
{`   /\\
  /  \\
 /\\   \\
/      \\
   ,,   
  |  |  
 /'--'\\ 
`}
                </pre>
                <div className="mt-2 text-center text-[10px] text-subtext0 font-normal">
                  <span className="text-mauve font-mono">Arch</span> / <span className="text-green font-mono">Debian</span>
                </div>
              </div>

              {/* Right Fastfetch details column */}
              <div className="sm:col-span-8 space-y-1.5">
                <div>
                  <span className="text-mauve font-semibold">{FASTFETCH_DATA.user}</span>
                  <span className="text-subtext0">@</span>
                  <span className="text-blue font-semibold">{FASTFETCH_DATA.host}</span>
                </div>
                <div className="h-px w-full bg-surface1/80 my-1" />

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">OS:</span>
                  <span className="text-subtext1">{FASTFETCH_DATA.os}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">Kernel:</span>
                  <span className="text-subtext1">{FASTFETCH_DATA.kernel}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">Uptime:</span>
                  <span className="text-subtext1">{FASTFETCH_DATA.uptime}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">Shell:</span>
                  <span className="text-subtext1">{FASTFETCH_DATA.shell}</span>
                </div>

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">Focus:</span>
                  <span className="text-blue">
                    {FASTFETCH_DATA.primaryFocus.join(' · ')}
                  </span>
                </div>

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">Tooling:</span>
                  <span className="text-subtext1">
                    {FASTFETCH_DATA.tooling.join(', ')}
                  </span>
                </div>

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">Architecture:</span>
                  <span className="text-green flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 inline text-green shrink-0" />
                    <span>{FASTFETCH_DATA.architecture}</span>
                  </span>
                </div>

                <div className="flex items-start">
                  <span className="text-yellow w-28 shrink-0">Cluster:</span>
                  <span className="text-mauve">{FASTFETCH_DATA.clusterMesh}</span>
                </div>
              </div>
            </div>

            {/* Catppuccin Mocha Color Chips Bar */}
            <div className="pt-2 border-t border-surface1/60 flex items-center justify-between">
              <span className="text-[11px] text-subtext0">Colors:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-sm bg-crust border border-surface1" title="Crust" />
                <span className="w-3.5 h-3.5 rounded-sm bg-red" title="Red (#f38ba8)" />
                <span className="w-3.5 h-3.5 rounded-sm bg-green" title="Green (#a6e3a1)" />
                <span className="w-3.5 h-3.5 rounded-sm bg-yellow" title="Yellow (#f9e2af)" />
                <span className="w-3.5 h-3.5 rounded-sm bg-blue" title="Blue (#89b4fa)" />
                <span className="w-3.5 h-3.5 rounded-sm bg-mauve" title="Mauve (#cba6f7)" />
                <span className="w-3.5 h-3.5 rounded-sm bg-teal" title="Teal (#94e2d5)" />
                <span className="w-3.5 h-3.5 rounded-sm bg-text" title="Text (#cdd6f4)" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'k3s_nodes' && (
          <div className="space-y-2 text-[12px]">
            <div className="flex items-center gap-2 text-subtext0">
              <span className="text-green">➜</span>
              <span className="text-blue">~</span>
              <span className="text-subtext1">kubectl get nodes -o wide</span>
            </div>
            <div className="overflow-x-auto py-1 text-subtext1">
              <pre className="text-[11px] sm:text-[12px] leading-relaxed">
{`NAME                STATUS   ROLES                  AGE    VERSION        INTERNAL-IP
oci-ashburn-ctrl01  Ready    control-plane,master   142d   v1.30.2+k3s1   100.64.0.12
rpi5-edge-node01    Ready    worker                 142d   v1.30.2+k3s1   100.64.0.14
rpi5-edge-node02    Ready    worker                 98d    v1.30.2+k3s1   100.64.0.15`}
              </pre>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-green bg-green/10 p-2 rounded border border-green/20">
              <Server className="w-3.5 h-3.5" />
              <span>3/3 Nodes Ready · Hybrid ARM64/AMD64 Workload Scheduling Active</span>
            </div>
          </div>
        )}

        {activeTab === 'uname' && (
          <div className="space-y-2 text-[12px]">
            <div className="flex items-center gap-2 text-subtext0">
              <span className="text-green">➜</span>
              <span className="text-blue">~</span>
              <span className="text-subtext1">uname -srmo && uptime -p</span>
            </div>
            <div className="p-2.5 rounded bg-surface0/60 border border-surface1 space-y-1">
              <p className="text-text font-mono">Linux 6.12.11-hardened x86_64 GNU/Linux</p>
              <p className="text-subtext0 font-mono">up 20 weeks, 2 days, 8 hours, 24 minutes</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
              <div className="p-2 rounded bg-surface0/40 border border-surface1 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-blue" />
                <span className="text-subtext0">Kernel: Hardened AppArmor</span>
              </div>
              <div className="p-2 rounded bg-surface0/40 border border-surface1 flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-yellow" />
                <span className="text-subtext0">Root FS: ZFS Encrypted</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

