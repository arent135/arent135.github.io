import React from 'react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#3c4b35]/50 shadow-2xl relative p-6 sm:p-8 space-y-6 bg-[#121412] text-[#dae6d0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#baccb0] hover:text-[#dae6d0] transition-colors"
          aria-label="Close project modal"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-3">
            <span className="font-code text-[10px] text-[#e3b5ff] border border-[#e3b5ff]/30 px-2 py-0.5 rounded">
              {project.category}
            </span>
            <span className="font-code text-[11px] text-[#baccb0]">
              YEAR // {project.year}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#dae6d0]">
            {project.title}
          </h2>
        </div>

        {/* Project Image */}
        <div className="aspect-video rounded-lg overflow-hidden border border-[#3c4b35]/40 relative bg-black/50">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Description & Specs */}
        <div className="space-y-4">
          <p className="font-body text-base text-[#baccb0] leading-relaxed font-light">
            {project.longDescription || project.description}
          </p>

          {project.highlights && (
            <div className="space-y-3 pt-2">
              <h3 className="font-code text-xs text-[#dae6d0] uppercase tracking-wider font-semibold">
                Key Technical Achievements
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="font-code text-xs text-[#baccb0]/90 flex items-start gap-2">
                    <span className="text-[#baccb0] mt-0.5">❯</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2 pt-2 border-t border-[#3c4b35]/30">
          <span className="font-code text-[10px] text-[#baccb0]/60 uppercase tracking-widest">
            TECHS USED:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="font-code text-[10px] px-2.5 py-1 bg-white/5 border border-[#3c4b35]/40 text-[#baccb0] rounded uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[#3c4b35]/30">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-[#3c4b35] text-[#dae6d0] font-code text-xs rounded transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              <span>GITHUB REPO</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              onClick={(e) => {
                e.preventDefault();
                window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
              }}
              className="px-6 py-2.5 bg-[#baccb0] text-[#0c1609] font-code font-bold text-xs rounded hover:bg-[#dae6d0] transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
