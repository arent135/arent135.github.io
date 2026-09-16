import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level?: string;
    description?: string;
    categoryTitle: string;
  } | null>(null);

  return (
    <section className="space-y-16" id="skills">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <span className="font-code text-[#baccb0] tracking-[.2em] text-[10px] uppercase font-semibold">
            04 // TECH_STACK
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#dae6d0] font-bold">
            Specialized Toolkit
          </h2>
        </div>
        <p className="text-[#baccb0]/70 font-code text-xs max-w-xs text-left md:text-right font-light">
          Constantly evolving and expanding my capabilities in emerging security & systems technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#3c4b35]/30 rounded overflow-hidden border border-[#3c4b35]/30">
        {SKILLS_DATA.map((cat: SkillCategory) => (
          <div 
            key={cat.id} 
            className="bg-[#0e100e] p-8 space-y-6 hover:bg-[#161916] transition-colors group relative"
          >
            <div className="flex items-center justify-between">
              <span className={`material-symbols-outlined ${cat.colorClass} opacity-60 group-hover:opacity-100 transition-opacity text-2xl`}>
                {cat.icon}
              </span>
              <span className="font-code text-[10px] text-[#baccb0]/40 uppercase tracking-widest">
                {cat.items.length} MODULES
              </span>
            </div>

            <h3 className="font-headline text-lg font-semibold text-[#dae6d0]">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-2 pt-2">
              {cat.items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSkill({ ...item, categoryTitle: cat.title })}
                  className="font-code text-[11px] text-[#baccb0] px-2.5 py-1 bg-white/5 hover:bg-[#baccb0]/20 hover:text-[#dae6d0] transition-all rounded border border-transparent hover:border-[#3c4b35] text-left cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Selected Skill Detail Callout */}
      {selectedSkill && (
        <div className="glass-panel p-6 rounded-lg border border-[#3c4b35]/40 animate-fadeIn relative">
          <button 
            onClick={() => setSelectedSkill(null)}
            className="absolute top-4 right-4 text-[#baccb0] hover:text-[#dae6d0] p-1"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
            <span className="font-code text-[10px] px-2 py-0.5 rounded bg-[#baccb0]/10 text-[#baccb0] uppercase tracking-wider">
              {selectedSkill.categoryTitle}
            </span>
            <h4 className="font-headline text-lg font-bold text-[#dae6d0]">
              {selectedSkill.name}
            </h4>
            {selectedSkill.level && (
              <span className="font-code text-xs text-[#e3b5ff] border border-[#e3b5ff]/30 px-2 py-0.5 rounded">
                Level: {selectedSkill.level}
              </span>
            )}
          </div>
          <p className="font-body text-sm text-[#baccb0]/90 leading-relaxed font-light">
            {selectedSkill.description}
          </p>
        </div>
      )}
    </section>
  );
};
