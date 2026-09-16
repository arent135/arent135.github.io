import React from 'react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ isOpen, onClose, onOpenContact }) => {
  const navItems = [
    { label: "01 // HOME", href: "#home" },
    { label: "02 // ABOUT", href: "#about" },
    { label: "03 // TECH_STACK", href: "#skills" },
    { label: "04 // PROJECTS", href: "#projects" },
    { label: "05 // EXPERIENCE", href: "#experience" },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Side Drawer */}
      <div 
        id="side-drawer"
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col p-10 h-full w-80 bg-[#161916] backdrop-blur-3xl border-r border-[#3c4b35]/30 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-[#baccb0]/10 border border-[#baccb0]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#baccb0]">person</span>
            </div>
            <div>
              <h3 className="font-headline text-base font-semibold tracking-tight text-[#dae6d0]">ALEX</h3>
              <p className="font-code text-[10px] text-[#baccb0] uppercase tracking-wider">Software Engineer</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-[#baccb0] hover:text-[#dae6d0] p-1 rounded"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="font-code text-xs text-[#dae6d0] hover:text-[#baccb0] transition-colors py-1 flex items-center justify-between group"
            >
              <span>{item.label}</span>
              <span className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </a>
          ))}
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="font-code text-xs text-[#e3b5ff] hover:text-[#dae6d0] transition-colors py-1 text-left flex items-center justify-between group"
          >
            <span>06 // CONTACT</span>
            <span className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              mail
            </span>
          </button>
        </nav>

        <div className="mt-auto space-y-4 pt-8 border-t border-[#3c4b35]/30">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#baccb0] animate-pulse"></div>
            <span className="font-code text-[11px] text-[#baccb0]">SYSTEM: ONLINE</span>
          </div>
          <div className="flex justify-between items-center text-[10px] font-code text-[#baccb0]/50">
            <span>STABLE_BUILD_2024</span>
            <span>SEC_VER_3.9</span>
          </div>
        </div>
      </div>
    </>
  );
};
