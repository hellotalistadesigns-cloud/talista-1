import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'Overview', href: '#hero', id: 'hero' },
  { name: 'Showcase', href: '#work', id: 'work' },
  { name: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { name: 'Process', href: '#process', id: 'process' },
  { name: 'Studio', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ theme, toggleTheme, onOpenPlanner }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let rAFId = null;
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 20;
      setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));

      let current = 'hero';
      for (let i = 0; i < NAV_LINKS.length; i++) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = NAV_LINKS[i].id;
          }
        }
      }
      setActiveSection((prev) => (prev !== current ? current : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rAFId = window.requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rAFId) window.cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <header className={`apple-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="layout-wrap navbar-inner">

        {/* Brand Wordmark */}
        <a href="#" className="apple-brand" aria-label="Talista Studios">
          <svg className="apple-logo-icon" width="22" height="22" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="2" width="12" height="12" rx="3" fill="currentColor" opacity="1"/>
            <rect x="18" y="2" width="12" height="12" rx="3" fill="currentColor" opacity="0.6"/>
            <rect x="2" y="18" width="12" height="12" rx="3" fill="currentColor" opacity="0.6"/>
            <rect x="18" y="18" width="12" height="12" rx="3" fill="currentColor" opacity="0.35"/>
          </svg>
          <span className="apple-brand-text">Talista</span>
        </a>

        {/* Desktop Links */}
        <nav className="apple-nav-links" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`apple-nav-item ${activeSection === link.id ? 'active' : ''}`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="apple-nav-actions">
          <button
            onClick={toggleTheme}
            className="apple-theme-btn"
            aria-label="Switch theme"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button onClick={onOpenPlanner} className="btn-primary apple-cta-btn">
            <span>Start a Project</span>
          </button>

          <button
            className="apple-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="apple-mobile-overlay">
          <nav className="apple-mobile-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="apple-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="chevron-icon" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="btn-primary"
              style={{ marginTop: '16px', width: '100%' }}
            >
              <span>Start a Project</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
