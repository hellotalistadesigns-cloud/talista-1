import React from 'react';
import { Mail, Globe, ArrowUpRight, Check } from 'lucide-react';
import './FounderAbout.css';

export default function FounderAbout() {
  const highlights = [
    'Led identity & 3D motion campaigns across North America, Europe, and Asia',
    'Specialist in high-conversion direct-to-consumer design systems',
    'Direct weekly collaboration with founders and key stakeholders'
  ];

  return (
    <section className="apple-about-section" id="about">
      <div className="layout-wrap apple-about-grid">

        {/* Left Story Column */}
        <div className="about-narrative reveal">
          <span className="section-label">OUR PHILOSOPHY</span>
          <h2 className="about-main-title">
            Ideas, visuals, impact. <br />
            <span className="titanium-text">In that exact order.</span>
          </h2>
          <p className="about-lead-para">
            We start with what your brand needs to achieve commercially, then engineer the bespoke visual language to make that outcome inevitable.
          </p>
          <p className="about-body-para">
            No decoration without a purpose. No design for design’s sake. Every typography curve, 3D simulation, and interactive micro-animation is crafted to maximize perceived value.
          </p>

          <div className="about-points">
            {highlights.map((h, i) => (
              <div key={i} className="about-point-item">
                <div className="check-bullet">
                  <Check size={12} />
                </div>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Leadership Card */}
        <div className="founder-profile-column reveal reveal-delay-2">
          <div className="apple-founder-card glass-card">
            <div className="founder-top-badge">
              <span>Studio Founder</span>
            </div>

            <div className="founder-header">
              <div className="apple-avatar">
                <span>VS</span>
              </div>
              <div>
                <h3 className="founder-title">Vaibhav Shukla</h3>
                <div className="founder-subtitle">Founder &amp; Creative Director</div>
              </div>
            </div>

            <blockquote className="founder-personal-note">
              “When you partner with Talista, you work directly with our top creative minds. We maintain a deliberately small client roster to deliver extraordinary depth on every single project.”
            </blockquote>

            <div className="founder-channels">
              <a href="mailto:hello@talista.in" className="founder-channel-link">
                <Mail size={15} />
                <span>hello@talista.in</span>
              </a>
              <a href="https://talista.in" target="_blank" rel="noopener noreferrer" className="founder-channel-link">
                <Globe size={15} />
                <span>talista.in</span>
              </a>
              <a href="https://instagram.com/talista.in" target="_blank" rel="noopener noreferrer" className="founder-channel-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@talista.in</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
