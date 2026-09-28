import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="apple-footer">
      <div className="layout-wrap apple-footer-container">
        
        {/* Apple Footnote Disclaimer */}
        <div className="apple-footnotes">
          <p>1. Average ROAS and conversion metrics are calculated across client cohorts over a 6-month trailing period post-launch.</p>
          <p>2. Studio availability is updated dynamically based on quarterly client bandwidth to guarantee direct founder oversight.</p>
        </div>

        {/* Directory Grid */}
        <div className="apple-footer-directory">
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
            <a href="https://instagram.com/talistadesigns" target="_blank" rel="noopener noreferrer">Instagram (@talistadesigns)</a>
            <a href="mailto:hello@talista.in">hello@talista.in</a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="apple-legal-row">
          <div className="legal-left">
            <span>Copyright © {new Date().getFullYear()} Talista Studios Inc. All rights reserved.</span>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <span className="legal-sep">|</span>
              <a href="#">Terms of Engagement</a>
              <span className="legal-sep">|</span>
              <a href="#">Studio Guidelines</a>
            </div>
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
