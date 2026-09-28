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
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="footer-logo-icon">
              <rect width="32" height="32" rx="8" fill="#121214" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <defs>
                <linearGradient id="footerGreyT" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#EDEDF0" />
                  <stop offset="100%" stopColor="#A1A1AA" />
                </linearGradient>
              </defs>
              <path d="M7 7h18v4.5h-6.5v13.5h-5v-13.5H7V7z" fill="url(#footerGreyT)" />
            </svg>
            <span className="footer-wordmark">Talista Studios</span>
          </a>
          <p className="footer-brand-tagline">
            Bespoke visual identity & digital design for ambitious founders worldwide.
          </p>
          <div className="footer-social-links">
            <a 
              href="https://www.youtube.com/@TalistaStudios" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn" 
              aria-label="YouTube Channel"
              title="Talista Studios on YouTube"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
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

        {/* Directory Grid */}
        <div className="apple-footer-directory reveal">
          <div className="directory-column">
            <span className="directory-heading">Navigation</span>
            <a href="#hero">Overview</a>
            <a href="#work">Showcase</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#contact">Start a Project</a>
          </div>

          <div className="directory-column">
            <span className="directory-heading">Disciplines</span>
            <a href="#capabilities">Brand Identity</a>
            <a href="#capabilities">3D &amp; AI Video</a>
            <a href="#capabilities">Digital Flagships</a>
            <a href="#capabilities">Packaging</a>
          </div>

          <div className="directory-column">
            <span className="directory-heading">Connect</span>
            <a href="https://www.youtube.com/@TalistaStudios" target="_blank" rel="noopener noreferrer">YouTube (@TalistaStudios)</a>
            <a href="https://instagram.com/talistadesigns" target="_blank" rel="noopener noreferrer">Instagram (@talistadesigns)</a>
            <a href="mailto:hello@talista.in">hello@talista.in</a>
            <a href="#contact">Commission Inquiries</a>
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
