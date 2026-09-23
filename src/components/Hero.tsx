import React from 'react';
import { ArrowDown, Mail, Shield, Award, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FastfetchCard } from './FastfetchCard';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-surface1/60">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-mauve/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Executive Identity & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Systems Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface1 bg-surface0/70 text-xs font-mono text-subtext0">
              <span className="w-2 h-2 rounded-full bg-green shadow-glow-green" />
              <span>Available for 2026/2027 Engineering Opportunities</span>
              <span className="text-surface2">·</span>
              <span className="text-blue">Mayagüez, PR</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm font-mono uppercase tracking-wider text-mauve font-semibold">
                {PERSONAL_INFO.name}
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[1.1]">
                Software &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-teal to-mauve">
                  Infrastructure
                </span>{" "}
                Engineer
              </h1>
            </div>

            {/* Core 2-Sentence Value Proposition */}
            <p className="text-base sm:text-lg text-subtext0 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Credential Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-mono">
              <div className="flex items-center gap-2 p-2 rounded border border-surface1 bg-mantle/60">
                <Award className="w-4 h-4 text-yellow shrink-0" />
                <span className="text-subtext1">UPRM Software Eng ('28)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded border border-surface1 bg-mantle/60">
                <Layers className="w-4 h-4 text-blue shrink-0" />
                <span className="text-subtext1">CodePath Systems Fellow</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded border border-surface1 bg-mantle/60">
                <Shield className="w-4 h-4 text-green shrink-0" />
                <span className="text-subtext1">CKA Candidate (KodeKloud)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue text-base font-semibold text-sm hover:bg-blue/90 shadow-glow-blue transition-all"
              >
                <span>View Systems &amp; Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface1 bg-surface0 hover:bg-surface1 hover:border-surface2 text-text font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-subtext0" />
                <span>Get in Touch</span>
              </button>
            </div>

          </div>

          {/* Right Column: Linux Fastfetch Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <FastfetchCard />
          </div>

        </div>
      </div>
    </section>
  );
};

