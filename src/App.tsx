import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e100e] text-[#dae6d0] relative selection:bg-[#baccb0] selection:text-[#0c1609]">
      {/* Subtle Background Radial Overlay */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(186,204,176,0.03),transparent_70%)] pointer-events-none"></div>

      {/* Top Header */}
      <Header 
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        activeSection={activeSection}
      />

      {/* Navigation Drawer */}
      <NavigationDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Container */}
      <main className="pt-32 pb-24 px-6 md:px-16 max-w-[1200px] mx-auto space-y-36 md:space-y-48">
        <Hero 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenProjects={scrollToProjects}
        />

        <AboutSection />

        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ExperienceSection />
        
        <SkillsSection />

      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectDetailModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
