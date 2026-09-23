import React from 'react';
import { Terminal, GitCommit, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, CLUSTER_STATUS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface1 bg-crust/80 py-12 text-subtext0 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Status */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-text font-bold text-sm">
              <Terminal className="w-4 h-4 text-blue" />
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-surface2">/</span>
              <span className="text-subtext0 font-normal">{PERSONAL_INFO.role}</span>
            </div>
            <p className="text-subtext0 text-xs">
              Designed with Catppuccin Mocha · Hardened for K3s on edge &amp; OCI mesh
            </p>
          </div>

          {/* Badges & Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            
            {/* Commit SHA Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface0 border border-surface1 text-text text-[11px]">
              <GitCommit className="w-3.5 h-3.5 text-mauve" />
              <span>build: {PERSONAL_INFO.commitSha}</span>
            </div>

            {/* Mesh Status */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface0 border border-surface1 text-[11px] text-green">
              <span className="w-1.5 h-1.5 rounded-full bg-green shadow-glow-green" />
              <span>{CLUSTER_STATUS.statusText} ({CLUSTER_STATUS.clusterLatencyMs}ms)</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-surface0 hover:bg-surface1 border border-surface1 text-subtext0 hover:text-text transition-colors"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-surface1/60" />

        {/* Bottom Bar: Copyright & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#infrastructure"
              className="hover:text-text transition-colors text-blue"
            >
              Infrastructure Exhibit
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

