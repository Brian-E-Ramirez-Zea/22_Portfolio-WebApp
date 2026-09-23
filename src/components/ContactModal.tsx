import React, { useState, useEffect } from 'react';
import { X, Mail, Copy, Check, FileText, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-crust/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg rounded-xl border border-surface1 bg-mantle shadow-2xl overflow-hidden font-sans relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface0 border-b border-surface1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red/80 border border-red/40" />
            <span className="w-3 h-3 rounded-full bg-yellow/80 border border-yellow/40" />
            <span className="w-3 h-3 rounded-full bg-green/80 border border-green/40" />
            <span className="ml-2 font-mono text-xs text-subtext0">
              connect --protocol mailto
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-subtext0 hover:text-text hover:bg-surface1 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-text">
              Let's Connect
            </h3>
            <p className="text-sm text-subtext0 mt-1 leading-relaxed">
              Seeking Software Engineering, DevOps, and Infrastructure roles for 2026/2027. Open to discussing distributed systems, Kubernetes orchestration, or career opportunities.
            </p>
          </div>

          {/* Email Card with One-Click Copy */}
          <div className="p-4 rounded-lg border border-surface1 bg-surface0/60 space-y-2">
            <div className="text-xs font-mono text-subtext0 uppercase tracking-wider">Direct Email</div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm sm:text-base font-semibold text-blue break-all">
                {PERSONAL_INFO.email}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-surface1 hover:bg-surface2 text-xs font-mono text-text transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Software%20%26%20Infrastructure%20Engineering%20Inquiry`}
                  className="flex items-center gap-1 px-3 py-1.5 rounded bg-blue text-base font-mono text-xs font-semibold hover:bg-blue/90 shadow-glow-blue transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send</span>
                </a>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-surface1 bg-surface0/40 hover:bg-surface0 hover:border-blue/50 text-text transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-blue" />
                <span>LinkedIn</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-subtext0 group-hover:text-blue transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-surface1 bg-surface0/40 hover:bg-surface0 hover:border-blue/50 text-text transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-mauve" />
                <span>GitHub</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-subtext0 group-hover:text-mauve transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-surface1 bg-surface0/40 hover:bg-surface0 hover:border-blue/50 text-text transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-green" />
                <span>Resume (PDF)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-subtext0 group-hover:text-green transition-colors" />
            </a>

            <div className="flex items-center p-3 rounded-lg border border-surface1 bg-surface0/40 text-subtext0">
              <MapPin className="w-4 h-4 text-yellow mr-2.5 shrink-0" />
              <span>Mayagüez, PR (UPRM)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-crust border-t border-surface1 flex items-center justify-between text-xs font-mono text-subtext0">
          <span>Latency: ~12ms</span>
          <button
            onClick={onClose}
            className="text-subtext0 hover:text-text transition-colors"
          >
            [Close ESC]
          </button>
        </div>
      </div>
    </div>
  );
};

