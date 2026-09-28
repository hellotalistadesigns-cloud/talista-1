import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import WorkGallery from './components/WorkGallery';
import CapabilitiesBento from './components/CapabilitiesBento';
import CreativeProcess from './components/CreativeProcess';
import FounderAbout from './components/FounderAbout';
import ProjectPlanner from './components/ProjectPlanner';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('talista_theme') || 'dark';
  });

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('talista_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenPlanner = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Ambient background glow */}
      <div className="ambient-glow" />

      {/* Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenPlanner={handleOpenPlanner} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenPlanner={handleOpenPlanner} />
        <Manifesto />
        <WorkGallery onSelectProject={(project) => setSelectedProject(project)} />
        <CapabilitiesBento onOpenPlanner={handleOpenPlanner} />
        <CreativeProcess />
        <FounderAbout />
        <ProjectPlanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
          onStartProject={handleOpenPlanner}
        />
      )}
    </div>
  );
}
