import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="space-y-20" id="about">
      <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-start">
        {/* Left portrait image container */}
        <div className="w-full md:w-2/5 md:sticky md:top-32">
          <div className="relative aspect-[4/5] rounded overflow-hidden shadow-2xl group border border-[#3c4b35]/40">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={ABOUT_DATA.image}
              alt="Alex - Software Engineer"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 p-3 glass-panel rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-code text-[11px] text-[#baccb0]">Alex // Computer Science BS</span>
            </div>
          </div>
        </div>

        {/* Right content details */}
        <div className="w-full md:w-3/5 space-y-10">
          <div className="space-y-4">
            <span className="font-code text-[#baccb0] tracking-[.2em] text-[10px] uppercase font-semibold">
              {ABOUT_DATA.sectionNumber}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#dae6d0] font-bold">
              {ABOUT_DATA.heading}
            </h2>
          </div>

          <div className="space-y-8">
            <p className="font-body text-[#baccb0] leading-loose text-base md:text-lg font-light">
              {ABOUT_DATA.bio}
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#3c4b35]/30">
              <div className="space-y-4">
                <h3 className="font-code text-[11px] text-[#dae6d0] tracking-widest uppercase font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#baccb0] rounded-full"></span>
                  Focus Areas
                </h3>
                <ul className="space-y-2.5 text-[#baccb0]/80 font-code text-xs">
                  {ABOUT_DATA.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2 hover:text-[#dae6d0] transition-colors">
                      <span className="text-[#3c4b35]">❯</span> {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="space-y-4">
                <h3 className="font-code text-[11px] text-[#dae6d0] tracking-widest uppercase font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#e3b5ff] rounded-full"></span>
                  Philosophy
                </h3>
                <ul className="space-y-2.5 text-[#baccb0]/80 font-code text-xs">
                  {ABOUT_DATA.philosophy.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 hover:text-[#dae6d0] transition-colors">
                      <span className="text-[#3c4b35]">❯</span> {item}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
