import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { TerminalWindow } from './TerminalWindow';

interface HeroProps {
  onOpenContact: () => void;
  onOpenProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenProjects }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 min-h-[520px]" id="home">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#baccb0]/5 border border-[#baccb0]/15 rounded">
          <div className="w-1.5 h-1.5 rounded-full bg-[#baccb0] animate-pulse"></div>
          <span className="font-code text-[10px] text-[#baccb0] tracking-widest">{HERO_DATA.status}</span>
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-5xl md:text-6xl text-[#dae6d0] leading-tight font-bold">
            Hi, I'm Alex.
          </h1>
          <p className="font-headline text-2xl md:text-3xl text-[#baccb0] font-light leading-snug">
            {HERO_DATA.headline}
          </p>
        </div>

        <p className="font-body text-[#baccb0]/80 max-w-lg leading-relaxed text-base">
          {HERO_DATA.bio}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button 
            onClick={onOpenProjects}
            className="px-8 py-3.5 bg-[#baccb0] text-[#0c1609] font-code font-bold rounded hover:bg-[#dae6d0] transition-all text-xs tracking-wider cursor-pointer shadow-lg hover:shadow-[#baccb0]/20"
          >
            VIEW PROJECTS
          </button>
          <button 
            onClick={onOpenContact}
            className="px-8 py-3.5 border border-[#3c4b35] text-[#dae6d0] font-code font-semibold rounded hover:bg-white/5 transition-all text-xs tracking-wider cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-xl">
        <TerminalWindow onOpenContact={onOpenContact} onOpenProjects={onOpenProjects} />
      </div>
    </section>
  );
};
