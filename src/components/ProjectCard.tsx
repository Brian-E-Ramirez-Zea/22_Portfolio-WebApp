import React from 'react';
import { ExternalLink, Lock, Server, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group flex flex-col justify-between rounded-lg border border-surface1 bg-mantle/80 hover:border-blue transition-all duration-200 p-6 shadow-subtle-card relative overflow-hidden">
      
      {/* Top Bar: Category badge and date */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-mauve/10 border border-mauve/30 text-mauve">
            {project.category}
          </span>
          <span className="text-xs font-mono text-subtext0">
            {project.date}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-text group-hover:text-blue transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Short Summary */}
        <p className="mt-2 text-sm text-subtext0 leading-relaxed">
          {project.summary}
        </p>

        {/* Structured Engineering Breakdown */}
        <div className="mt-5 space-y-3.5 text-xs sm:text-[13px] border-t border-surface1/70 pt-4">
          
          {/* Core Problem */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-yellow font-mono font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>The Problem</span>
            </div>
            <p className="text-subtext1 pl-5 leading-normal">
              {project.problem}
            </p>
          </div>

          {/* Architecture & Tech Stack */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-blue font-mono font-medium">
              <Server className="w-3.5 h-3.5 shrink-0" />
              <span>Architecture &amp; Tech Stack</span>
            </div>
            <p className="text-subtext1 pl-5 leading-normal">
              {project.architecture}
            </p>
          </div>

          {/* Impact / Measurable Outcome */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-green font-mono font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Impact &amp; Measurable Outcome</span>
            </div>
            <p className="text-subtext1 pl-5 leading-normal">
              {project.impact}
            </p>
          </div>

        </div>
      </div>

      {/* Footer: Tags and Action Links */}
      <div className="mt-6 pt-4 border-t border-surface1/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface0 text-subtext0 border border-surface1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2 shrink-0">
          {project.isInternalMesh && (
            <span 
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono bg-green/10 text-green border border-green/30"
              title="Workload runs inside an encrypted zero-trust Tailscale mesh"
            >
              <Lock className="w-3 h-3" />
              <span>Mesh Service</span>
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium bg-surface0 hover:bg-surface1 text-text border border-surface1 hover:border-blue transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue" />
              <span>Live Site</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium bg-surface0 hover:bg-surface1 text-text border border-surface1 hover:border-subtext0 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5 text-subtext0" />
              <span>Code</span>
            </a>
          )}
        </div>

      </div>
    </article>
  );
};

