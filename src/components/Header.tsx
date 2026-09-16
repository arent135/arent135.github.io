import React from 'react';

interface HeaderProps {
  onOpenDrawer: () => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDrawer, onOpenContact, activeSection }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0e100e]/80 backdrop-blur-xl border-b border-[#3c4b35]/30 z-50 flex justify-between items-center px-6 md:px-16 h-20">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-8 h-8 rounded bg-[#baccb0]/10 border border-[#baccb0]/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-[#baccb0] text-lg">code</span>
        </div>
        <span className="font-code text-sm font-semibold tracking-wide text-[#dae6d0]">ALEX.DEV</span>
      </div>

      <nav className="hidden md:flex items-center gap-10">
        <a 
          className={`nav-link font-code text-[11px] tracking-widest ${activeSection === 'home' ? 'text-[#dae6d0] font-bold' : 'text-[#baccb0] hover:text-[#dae6d0]'} transition-colors`} 
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          HOME
        </a>
        <a 
          className={`nav-link font-code text-[11px] tracking-widest ${activeSection === 'about' ? 'text-[#dae6d0] font-bold' : 'text-[#baccb0] hover:text-[#dae6d0]'} transition-colors`} 
          href="#about"
          onClick={(e) => scrollToSection(e, '#about')}
        >
          ABOUT
        </a>
        <a 
          className={`nav-link font-code text-[11px] tracking-widest ${activeSection === 'skills' ? 'text-[#dae6d0] font-bold' : 'text-[#baccb0] hover:text-[#dae6d0]'} transition-colors`} 
          href="#skills"
          onClick={(e) => scrollToSection(e, '#skills')}
        >
          TECH_STACK
        </a>
        <a 
          className={`nav-link font-code text-[11px] tracking-widest ${activeSection === 'projects' ? 'text-[#dae6d0] font-bold' : 'text-[#baccb0] hover:text-[#dae6d0]'} transition-colors`} 
          href="#projects"
          onClick={(e) => scrollToSection(e, '#projects')}
        >
          PROJECTS
        </a>
        <a 
          className={`nav-link font-code text-[11px] tracking-widest ${activeSection === 'experience' ? 'text-[#dae6d0] font-bold' : 'text-[#baccb0] hover:text-[#dae6d0]'} transition-colors`} 
          href="#experience"
          onClick={(e) => scrollToSection(e, '#experience')}
        >
          EXPERIENCE
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={onOpenContact}
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-[#3c4b35] text-[#dae6d0] font-code text-xs rounded hover:bg-white/5 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#baccb0]"></span>
          <span>CONNECT</span>
        </button>
        <button 
          id="drawer-toggle"
          onClick={onOpenDrawer}
          className="material-symbols-outlined text-[#baccb0] hover:text-[#dae6d0] transition-colors cursor-pointer p-1"
          aria-label="Toggle navigation menu"
        >
          menu
        </button>
      </div>
    </header>
  );
};
