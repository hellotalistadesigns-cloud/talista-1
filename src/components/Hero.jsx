import React from 'react';
import { ChevronRight, Play, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenPlanner }) {
  return (
    <section className="apple-hero-section" id="hero">
      <div className="layout-wrap apple-hero-container">

        {/* Apple Keynote Eyebrow */}


        {/* Apple Massive Headline */}
        <h1 className="apple-hero-headline">
          Brands worth a <span className="titanium-text">second look.</span>
        </h1>

        {/* Apple Sub-headline */}
        <p className="apple-hero-sub">
          Bespoke visual identity. Cinematic 3D motion. Ultra-fast digital architecture.
          <br className="desktop-br" /> Engineered with surgical restraint for ambitious founders.
        </p>

        {/* Apple CTA Row */}
        <div className="apple-cta-row">
          <button onClick={onOpenPlanner} className="btn-primary apple-main-cta">
            <span>Start a project</span>
          </button>

          <a href="#work" className="link-chevron">
            <span>Explore showcase</span>
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Apple Hardware-Style Showcase Banner */}
        <div className="apple-hero-device-frame glass-card">
          <div className="device-screen">
            <img
              src="/assets/the-hooper.jpg"
              alt="Talista Studios Featured Showcase"
              className="device-preview-img"
            />
            <div className="device-caption-bar">
              <div className="device-badge">
                <span className="pulse-dot" />
                <span>Featured Studio Case Study // The Hooper</span>
              </div>
              <span className="device-meta">Identity · Editorial · Packaging</span>
            </div>
          </div>
        </div>

        {/* Apple Specs Ticker */}
        <div className="apple-specs-ticker">
          <div className="spec-item">
            <div className="spec-big-num titanium-text">42+</div>
            <div className="spec-desc">Global Brand Launches</div>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <div className="spec-big-num titanium-text">3.8x</div>
            <div className="spec-desc">Average ROAS Lift</div>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <div className="spec-big-num titanium-text">100%</div>
            <div className="spec-desc">Founder-Led Direction</div>
          </div>
        </div>

      </div>
    </section>
  );
}
