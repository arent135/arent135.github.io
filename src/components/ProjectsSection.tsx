import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'AI/ML', 'SECURITY', 'WEB DEV'];

  const filteredProjects = filter === 'ALL' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category.toUpperCase() === filter || p.tags.some(t => t.toUpperCase() === filter));

  return (
    <section className="space-y-16" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <span className="font-code text-[#baccb0] tracking-[.2em] text-[10px] uppercase font-semibold">
            02 // PROJECTS
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#dae6d0] font-bold">
            Selected Works
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-code text-[10px] px-3 py-1.5 rounded transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-[#baccb0] text-[#0c1609] font-bold shadow' 
                  : 'bg-white/5 text-[#baccb0] hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group space-y-6 cursor-pointer"
            onClick={() => onSelectProject(project)}
          >
            {/* Card Image Container */}
            <div className="aspect-video rounded-lg overflow-hidden glass-panel border border-[#3c4b35]/30 relative">
              <img 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                src={project.image} 
                alt={project.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/20 text-[#dae6d0]">
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="font-code text-[10px] px-2.5 py-1 rounded bg-[#0c1609]/80 backdrop-blur text-[#e3b5ff] border border-[#e3b5ff]/20">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Card Info */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-headline text-xl font-bold text-[#dae6d0] group-hover:text-[#baccb0] transition-colors">
                  {project.title}
                </h3>
                <span className="font-code text-[11px] text-[#baccb0] font-semibold">
                  {project.year}
                </span>
              </div>

              <p className="font-body text-[#baccb0]/80 text-sm leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="font-code text-[9px] uppercase tracking-widest text-[#baccb0]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
