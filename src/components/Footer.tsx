import React, { useState, useEffect } from 'react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate minor network ping fluctuation
      setLatency(prev => Math.max(18, Math.min(32, prev + (Math.floor(Math.random() * 5) - 2))));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0e100e] text-[#baccb0] w-full pt-24 pb-12 border-t border-[#3c4b35]/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left info column */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#baccb0] text-lg">terminal</span>
              <span className="font-code text-[#dae6d0] font-bold tracking-wide">ALEX.DEV</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-[#baccb0]/70 font-light">
              Designing and building secure, performant software. Currently based in the bay area, working on the future of infrastructure.
            </p>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-16 sm:gap-20">
            <div className="space-y-4">
              <h5 className="font-code text-[10px] text-[#dae6d0] tracking-widest uppercase font-semibold">
                Navigation
              </h5>
              <ul className="space-y-2 text-xs font-code">
                <li>
                  <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-[#dae6d0] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-[#dae6d0] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')} className="hover:text-[#dae6d0] transition-colors">
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-[#dae6d0] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')} className="hover:text-[#dae6d0] transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="font-code text-[10px] text-[#dae6d0] tracking-widest uppercase font-semibold">
                Social
              </h5>
              <ul className="space-y-2 text-xs font-code">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e3b5ff] transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e3b5ff] transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e3b5ff] transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <button onClick={onOpenContact} className="hover:text-[#dae6d0] transition-colors text-left cursor-pointer">
                    Contact Form
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#3c4b35]/20 gap-6">
          <p className="text-[10px] font-code text-[#baccb0]/50 uppercase tracking-tight">
            © 2024 ALEX_ROOT // ALL_SYSTEMS_OPERATIONAL
          </p>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#baccb0] animate-pulse"></span>
            <span className="text-[10px] font-code text-[#baccb0]/60 uppercase">
              LATENCY: {latency}MS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
