import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import WorkGallery from './components/WorkGallery';
import CapabilitiesBento from './components/CapabilitiesBento';
import About from './components/About';
import ProjectPlanner from './components/ProjectPlanner';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('talista_theme') || 'dark';
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const lenisRef = useRef(null);

  // Activate scroll-reveal IntersectionObserver for the whole page
  useScrollReveal();

  // Initialize Lenis smooth inertia scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Pause smooth scroll when modal is open
  useEffect(() => {
    if (lenisRef.current) {
      if (selectedProject) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [selectedProject]);

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
      if (lenisRef.current) {
        lenisRef.current.scrollTo(contactSection);
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
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

      {/* Main Content Sections — Streamlined, Work-First */}
      <main>
        <Hero 
          onOpenPlanner={handleOpenPlanner} 
          onSelectProject={(project) => setSelectedProject(project)} 
        />
        
        {/* Infinite 60fps Marquee Ticker */}
        <MarqueeTicker />

        {/* Core Showcase */}
        <WorkGallery onSelectProject={(project) => setSelectedProject(project)} />

        {/* Studio Disciplines */}
        <CapabilitiesBento onOpenPlanner={handleOpenPlanner} />

        {/* Minimalist Studio Overview */}
        <About />

        {/* Direct Project Inquiry */}
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
