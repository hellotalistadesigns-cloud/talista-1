import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import './Hero.css';

export default function Hero({ onOpenPlanner, onSelectProject }) {
  const featured = portfolioProjects[0]; // The Hooper
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    window.requestAnimationFrame(() => {
      if (frameRef.current) {
        frameRef.current.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (!frameRef.current) return;
    frameRef.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(0px)';
  };

  return (
    <section className="clean-hero-section" id="hero">
      <div className="layout-wrap clean-hero-container">

        {/* Minimal Studio Tag */}
        <div className="clean-hero-eyebrow hero-anim-1">
          <span className="live-dot" />
          <span>TALISTA STUDIOS — CREATIVE PRACTICE</span>
        </div>

        {/* Iconic Masked Headline */}
        <h1 className="clean-hero-headline">
          <span className="mask-line">
            <span className="mask-inner mask-delay-1">We engineer brands</span>
          </span>
          <span className="mask-line">
            <span className="mask-inner mask-delay-2">
              that refuse to be <span className="serif-italic">overlooked.</span>
            </span>
          </span>
        </h1>

        {/* Minimal Subhead + Action Row */}
        <div className="clean-hero-meta hero-anim-3">
          <p className="clean-hero-sub">
            Brand identity, cinematic 3D motion, and custom digital flagships.
          </p>

          <button 
            onClick={onOpenPlanner} 
            className="btn-studio-commission btn-roll"
          >
            <span className="roll-wrap">
              <span className="roll-text">Initiate Commission</span>
              <span className="roll-text clone" aria-hidden="true">Initiate Commission</span>
            </span>
            <ArrowUpRight size={15} className="commission-arrow" />
          </button>
        </div>

        {/* Pure Cinematic Showcase with 3D Physics */}
        <div 
          ref={frameRef}
          className="clean-showcase-frame hero-anim-4 sheen-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => onSelectProject && onSelectProject(featured)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectProject && onSelectProject(featured);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`View featured commission case study: ${featured.title}`}
          title="View The Hooper Case Study"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="clean-showcase-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="clean-showcase-tag">
            <span>Featured Commission // {featured.title}</span>
            <span className="tag-arrow">↗</span>
          </div>
        </div>

      </div>
    </section>
  );
}
