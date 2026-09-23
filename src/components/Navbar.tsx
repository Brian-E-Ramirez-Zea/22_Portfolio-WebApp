import React, { useState } from 'react';
import { Terminal, FileText, Activity, Menu, X } from 'lucide-react';
import { PERSONAL_INFO, CLUSTER_STATUS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onOpenContact: () => void;
  onScrollToInfra: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onScrollToInfra }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface1 bg-base/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand identifier */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-text hover:text-blue transition-colors group"
        >
          <div className="w-7 h-7 rounded bg-surface0 border border-surface1 flex items-center justify-center text-blue group-hover:border-blue/50 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span>
            <span className="text-subtext0">bz@</span>
            <span className="text-blue font-semibold">fermi</span>
            <span className="text-subtext0">:~ $</span>
          </span>
        </a>

        {/* Live Cluster Indicator Badge (Clickable to jump to Infra Exhibit) */}
        <button
          onClick={onScrollToInfra}
          className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-surface0/80 border border-surface1 hover:border-green/50 text-xs font-mono text-subtext0 transition-all cursor-pointer group"
          title="Click to view infrastructure architecture"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green shadow-glow-green"></span>
          </span>
          <span className="group-hover:text-text transition-colors">
            {CLUSTER_STATUS.statusText}
          </span>
          <span className="text-surface2">|</span>
          <span className="text-green text-[11px]">{CLUSTER_STATUS.clusterLatencyMs}ms</span>
        </button>

        {/* Desktop Navigation Links & Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm text-subtext0">
            <a href="#projects" className="hover:text-text transition-colors">Projects</a>
            <a href="#infrastructure" className="hover:text-text transition-colors">Infrastructure</a>
            <a href="#skills" className="hover:text-text transition-colors">Skills</a>
          </nav>

          <div className="h-4 w-px bg-surface1" />

          {/* Social and Quick Action Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-surface1 bg-surface0/60 text-subtext0 hover:text-text hover:border-surface2 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-surface1 bg-surface0/60 text-subtext0 hover:text-text hover:border-surface2 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-surface1 bg-surface0/60 text-xs font-mono font-medium text-text hover:border-blue/60 hover:text-blue transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume.pdf</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 rounded-md bg-blue text-base text-xs font-mono font-semibold hover:bg-blue/90 shadow-glow-blue transition-all"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-surface1 bg-surface0 text-subtext0 hover:text-text"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-surface1 bg-mantle px-4 py-5 space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-surface1">
            <button
              onClick={() => {
                onScrollToInfra();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs font-mono text-subtext0"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green shadow-glow-green"></span>
              </span>
              <span>{CLUSTER_STATUS.statusText}</span>
              <span className="text-green">({CLUSTER_STATUS.clusterLatencyMs}ms)</span>
            </button>
            <Activity className="w-4 h-4 text-green" />
          </div>

          <nav className="flex flex-col space-y-3 text-sm">
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-subtext0 hover:text-blue transition-colors py-1"
            >
              ~/projects
            </a>
            <a 
              href="#infrastructure" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-subtext0 hover:text-blue transition-colors py-1"
            >
              ~/infrastructure-spec
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-subtext0 hover:text-blue transition-colors py-1"
            >
              ~/skills-matrix
            </a>
          </nav>

          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded border border-surface1 bg-surface0 text-xs font-mono text-text hover:border-blue"
            >
              <FileText className="w-3.5 h-3.5 text-blue" />
              <span>Resume PDF</span>
            </a>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 px-3 rounded bg-blue text-base text-xs font-mono font-semibold"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtext0 hover:text-text"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtext0 hover:text-text"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

