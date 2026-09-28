import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenPlanner }) {
  return (
    <section className="apple-hero-section" id="hero">
      <div className="layout-wrap apple-hero-container">

        {/* Eyebrow tag */}
        <div className="apple-eyebrow hero-anim-1">
          <Sparkles size={13} className="eyebrow-icon" />
          <span className="eyebrow-tag">TALISTA STUDIOS</span>
          <span className="eyebrow-sep">·</span>
          <span className="eyebrow-sub">Creative Studio · India &amp; Global</span>
        </div>

        {/* Headline */}
        <h1 className="apple-hero-headline hero-anim-2">
          Brands worth a <span className="titanium-text">second look.</span>
        </h1>

        {/* Sub-headline */}
        <p className="apple-hero-sub hero-anim-3">
          Bespoke visual identity. Cinematic 3D motion. Ultra-fast digital architecture.
          Engineered with surgical restraint for ambitious founders.
        </p>

        {/* CTA Row */}
        <div className="apple-cta-row hero-anim-4">
          <button onClick={onOpenPlanner} className="btn-primary apple-main-cta">
            <span>Start a project</span>
          </button>

          <a href="#work" className="link-chevron">
            <span>Explore showcase</span>
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Device Showcase Frame */}
        <div className="apple-hero-device-frame glass-card hero-anim-5">
          <div className="device-screen">
            <img
              src="/assets/the-hooper.jpg"
              alt="Talista Studios Featured Showcase"
              className="device-preview-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
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

        {/* Specs Ticker */}
        <div className="apple-specs-ticker hero-anim-5">
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
