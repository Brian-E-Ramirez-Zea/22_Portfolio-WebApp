import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { InfraCard } from './components/InfraCard';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/portfolioData';
import { Terminal, Server, Cpu } from 'lucide-react';

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [filterFeatured, setFilterFeatured] = useState(false);

  const scrollToInfra = () => {
    const el = document.getElementById('infrastructure');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayedProjects = filterFeatured 
    ? PROJECTS.filter(p => p.featured) 
    : PROJECTS;

  return (
    <div className="min-h-screen bg-base text-text selection:bg-surface1 selection:text-blue flex flex-col bg-grid-pattern">
      
      {/* Sticky Navigation */}
      <Navbar 
        onOpenContact={() => setContactModalOpen(true)}
        onScrollToInfra={scrollToInfra}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-16 md:space-y-28">
        
        {/* Hero Section */}
        <Hero onOpenContact={() => setContactModalOpen(true)} />

        {/* Section 1: Featured Projects */}
        <section id="projects" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-8">
            
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface1/70 pb-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-mono text-xs text-blue">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>~/systems-and-projects</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
                  Featured Engineering Systems
                </h2>
                <p className="text-sm text-subtext0 max-w-2xl">
                  Distributed cloud infrastructure, high-concurrency ingestion pipelines, and systems-level low-level emulation.
                </p>
              </div>

              {/* Filter toggle */}
              <div className="flex items-center gap-1.5 bg-mantle p-1 rounded-lg border border-surface1 font-mono text-xs shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setFilterFeatured(false)}
                  className={`px-3 py-1 rounded transition-colors ${
                    !filterFeatured 
                      ? 'bg-blue text-base font-semibold shadow-glow-blue' 
                      : 'text-subtext0 hover:text-text'
                  }`}
                >
                  All ({PROJECTS.length})
                </button>
                <button
                  onClick={() => setFilterFeatured(true)}
                  className={`px-3 py-1 rounded transition-colors ${
                    filterFeatured 
                      ? 'bg-blue text-base font-semibold shadow-glow-blue' 
                      : 'text-subtext0 hover:text-text'
                  }`}
                >
                  Featured Only ({PROJECTS.filter(p => p.featured).length})
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

          </div>
        </section>

        {/* Section 2: How This Site Works (Infrastructure Exhibit) */}
        <section id="infrastructure" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-mauve">
              <Server className="w-3.5 h-3.5" />
              <span>~/cluster-infrastructure-spec</span>
            </div>
            <InfraCard />
          </div>
        </section>

        {/* Section 3: Skills & Tooling Matrix */}
        <section id="skills" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <div className="space-y-8">
            <div className="space-y-1.5 border-b border-surface1/70 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-green">
                <Cpu className="w-3.5 h-3.5" />
                <span>~/technical-competencies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
                Skills &amp; Tooling Matrix
              </h2>
              <p className="text-sm text-subtext0 max-w-2xl">
                A verified breakdown of systems programming languages, container orchestration tools, and modern web application frameworks.
              </p>
            </div>

            <SkillsMatrix />
          </div>
        </section>

      </main>

      {/* Recruiter Quick Connect Modal */}
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default App;

