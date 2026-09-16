import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section className="space-y-16" id="experience">
      <div className="space-y-4">
        <span className="font-code text-[#baccb0] tracking-[.2em] text-[10px] uppercase font-semibold">
          03 // EXPERIENCE
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-[#dae6d0] font-bold">
          Timeline
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Gradient Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-1/2"></div>

        <div className="space-y-20">
          {TIMELINE_DATA.map((entry, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedId === entry.id;

            return (
              <div 
                key={entry.id} 
                className={`relative md:flex items-center gap-12 group cursor-pointer ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
                onClick={() => toggleExpand(entry.id)}
              >
                {/* Desktop Date Column */}
                <div className={`hidden md:block w-1/2 ${isEven ? 'text-right' : 'text-left'}`}>
                  <span className="font-code text-[11px] text-[#baccb0]/70 font-semibold tracking-wider">
                    {entry.period}
                  </span>
                </div>

                {/* Timeline Dot Node */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#dae6d0] border border-[#0e100e] z-10 transition-transform group-hover:scale-150 shadow-[0_0_10px_rgba(218,230,208,0.5)]"></div>

                {/* Content Card Column */}
                <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8`}>
                  <div className="md:hidden mb-2">
                    <span className="font-code text-[10px] text-[#baccb0]/60 font-semibold">
                      {entry.period}
                    </span>
                  </div>

                  <h4 className="font-headline text-lg font-bold text-[#dae6d0] mb-1 group-hover:text-[#baccb0] transition-colors">
                    {entry.role}
                  </h4>

                  <h5 className={`text-xs font-semibold mb-3 tracking-wider uppercase ${
                    entry.organizationColor === 'secondary' ? 'text-[#e3b5ff]' : 'text-[#baccb0]'
                  }`}>
                    {entry.organization}
                  </h5>

                  <p className="text-sm text-[#baccb0]/80 leading-relaxed font-light">
                    {entry.description}
                  </p>

                  {/* Expandable Details */}
                  {entry.details && (
                    <div className="mt-3">
                      <span className="font-code text-[10px] text-[#baccb0] underline opacity-80 group-hover:opacity-100">
                        {isExpanded ? 'HIDE DETAILS ▲' : 'VIEW DETAILS ▼'}
                      </span>
                      {isExpanded && (
                        <div className="mt-3 p-4 glass-panel rounded text-left space-y-2 animate-fadeIn border border-[#3c4b35]/30">
                          {entry.details.map((detail, dIdx) => (
                            <p key={dIdx} className="font-code text-xs text-[#baccb0]/90 flex items-start gap-2">
                              <span className="text-[#e3b5ff]">❯</span>
                              <span>{detail}</span>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
