import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronRight, Menu, X, Command } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme, onOpenPlanner }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Showcase', href: '#work' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Process', href: '#process' },
    { name: 'Studio', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`apple-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="layout-wrap navbar-inner">
        
        {/* Brand Monogram */}
        <a href="#" className="apple-brand" aria-label="Talista Studios">
          <svg className="apple-logo-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="apple-brand-text">Talista</span>
        </a>

        {/* Desktop Links */}
        <nav className="apple-nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="apple-nav-item">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="apple-nav-actions">
          <button 
            onClick={toggleTheme} 
            className="apple-theme-btn" 
            aria-label={`Switch theme`}
            title={`Toggle Theme`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button onClick={onOpenPlanner} className="btn-primary apple-cta-btn">
            <span>Inquire</span>
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
            {navLinks.map((link) => (
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
