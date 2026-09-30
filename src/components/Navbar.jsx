import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'Work', href: '#work', id: 'work' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ theme, toggleTheme, onOpenPlanner, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // 1. Zero-reflow scroll indicator (only measures scrollY threshold)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const nextScrolled = scrollY > 20;
          setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));
          // Absolute top safeguard: always reset to hero at the top of the page
          if (scrollY < 80) {
            setActiveSection('hero');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. High-performance IntersectionObserver for active section detection (zero layout thrashing)
  useEffect(() => {
    const sectionElements = NAV_LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const visibleEntries = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleEntries.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleEntries.delete(entry.target.id);
          }
        });

        // If at top of page, keep hero active
        if (window.scrollY < 80) {
          setActiveSection('hero');
          return;
        }

        // Select the active section with highest visibility in reading zone
        let highestId = null;
        let highestRatio = -1;
        visibleEntries.forEach((ratio, id) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            highestId = id;
          }
        });

        if (highestId) {
          setActiveSection(highestId);
        }
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 3. Smooth navigation handler coordinating with Lenis
  const handleLinkClick = (e, linkId) => {
    // Allow users to Cmd/Ctrl/Shift/Middle click to open in new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(linkId);
    } else {
      const el = document.getElementById(linkId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`apple-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="layout-wrap navbar-inner">

        {/* Brand Wordmark */}
        <a 
          href="#hero" 
          className="apple-brand" 
          aria-label="Talista Studios"
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          <svg className="apple-logo-icon" width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#121214" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
            <defs>
              <linearGradient id="navGreyT" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#C4C4C8" />
              </linearGradient>
            </defs>
            <text
              x="16"
              y="23.5"
              textAnchor="middle"
              className="logo-bodoni-monogram"
              fill="url(#navGreyT)"
            >
              T
            </text>
          </svg>
          <span className="apple-brand-text">Talista</span>
        </a>

        {/* Desktop Links */}
        <nav className="apple-nav-links" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`apple-nav-item btn-roll ${activeSection === link.id ? 'active' : ''}`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              <span className="roll-wrap">
                <span className="roll-text">{link.name}</span>
                <span className="roll-text clone" aria-hidden="true">{link.name}</span>
              </span>
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

          <button onClick={onOpenPlanner} className="btn-primary apple-cta-btn btn-roll">
            <span className="roll-wrap">
              <span className="roll-text">Start a Project</span>
              <span className="roll-text clone" aria-hidden="true">Start a Project</span>
            </span>
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
                onClick={(e) => handleLinkClick(e, link.id)}
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
