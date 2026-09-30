import React from 'react';
import { studioCapabilities } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import './CapabilitiesBento.css';

export default function CapabilitiesBento({ onOpenPlanner }) {
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
  };

  return (
    <section className="apple-capabilities-section" id="capabilities">
      <div className="layout-wrap">

        {/* Section Header with Masked Title */}
        <div className="apple-cap-header reveal">
          <span className="section-label">DISCIPLINES</span>
          <h2 className="apple-cap-title">
            <span className="mask-line">
              <span className="mask-inner">
                End-to-end <span className="serif-italic">craft.</span>
              </span>
            </span>
          </h2>
          <p className="apple-cap-sub">
            From strategic brand architecture to real-time 3D motion and high-performance digital platforms.
          </p>
        </div>

        {/* 6-Card Disciplines Grid */}
        <div className="disciplines-grid reveal">
          {studioCapabilities.map((cap, i) => (
            <div
              key={cap.id}
              className={`discipline-card card-reveal spotlight-card sheen-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={onOpenPlanner}
            >
              {/* Media Preview Box */}
              <div className="discipline-media-box curtain-frame">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="discipline-img curtain-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="discipline-img-overlay" />
              </div>

              {/* Card Meta Content */}
              <div className="discipline-content">
                <div className="discipline-header-row">
                  <h3 className="discipline-title">{cap.title}</h3>
                  <div className="discipline-arrow-btn" aria-label="Discuss discipline">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className="discipline-desc">{cap.description}</p>

                {/* Minimalist Micro Tags */}
                <div className="discipline-tags-row">
                  {cap.tags.map((tag, j) => (
                    <span key={j} className="discipline-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
