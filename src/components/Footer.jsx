import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="apple-footer">
      <div className="layout-wrap apple-footer-container">

        {/* Brand wordmark */}
        <div className="footer-brand reveal">
          <a href="#" className="footer-logo-link" aria-label="Talista Studios">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="footer-logo-icon">
              <rect x="2" y="2" width="12" height="12" rx="3" fill="currentColor" opacity="1"/>
              <rect x="18" y="2" width="12" height="12" rx="3" fill="currentColor" opacity="0.6"/>
              <rect x="2" y="18" width="12" height="12" rx="3" fill="currentColor" opacity="0.6"/>
              <rect x="18" y="18" width="12" height="12" rx="3" fill="currentColor" opacity="0.35"/>
            </svg>
            <span className="footer-wordmark">Talista Studios</span>
          </a>
          <p className="footer-brand-tagline">
            Bespoke visual identity & digital design for ambitious founders worldwide.
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com/talistadesigns" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
              {/* Instagram icon — inline SVG (not in this lucide-react version) */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="mailto:hello@talista.in" className="footer-social-btn" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* Apple Footnote Disclaimer */}
        <div className="apple-footnotes reveal">
          <p>1. Average ROAS and conversion metrics are calculated across client cohorts over a 6-month trailing period post-launch.</p>
          <p>2. Studio availability is updated dynamically based on quarterly client bandwidth to guarantee direct founder oversight.</p>
        </div>

        {/* Directory Grid */}
        <div className="apple-footer-directory reveal">
          <div className="directory-column">
            <span className="directory-heading">Explore</span>
            <a href="#hero">Overview</a>
            <a href="#work">Case Studies</a>
            <a href="#capabilities">Disciplines</a>
            <a href="#process">Methodology</a>
          </div>

          <div className="directory-column">
            <span className="directory-heading">Disciplines</span>
            <a href="#capabilities">Brand Identity Systems</a>
            <a href="#capabilities">AI Video &amp; 3D Motion</a>
            <a href="#capabilities">Website Architecture</a>
            <a href="#capabilities">Packaging &amp; Unboxing</a>
          </div>

          <div className="directory-column">
            <span className="directory-heading">Studio</span>
            <a href="#about">About &amp; Philosophy</a>
            <a href="#contact">Start a Project</a>
            <a href="https://instagram.com/talistadesigns" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:hello@talista.in">hello@talista.in</a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="apple-legal-row reveal">
          <div className="legal-left">
            <span>Copyright © {new Date().getFullYear()} Talista Studios. All rights reserved. India &amp; Worldwide.</span>
          </div>

          <button onClick={scrollToTop} className="apple-scroll-top" aria-label="Back to top">
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
