import React, { useState } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import './WorkGallery.css';

export default function WorkGallery({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Brand Identity', 'Packaging Design', 'Motion & AI Video', 'Website & Digital'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeFilter);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    window.requestAnimationFrame(() => {
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.015, 1.015, 1.015)`;
    });
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
  };

  return (
    <section className="apple-work-section" id="work">
      <div className="layout-wrap">

        {/* Section Header with Masked Title */}
        <div className="apple-work-header reveal">
          <span className="section-label">SHOWCASE</span>
          <h2 className="apple-work-title">
            <span className="mask-line">
              <span className="mask-inner">
                Selected <span className="serif-italic">Commissions.</span>
              </span>
            </span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="apple-segmented-tabs reveal reveal-delay-1" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`apple-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              role="tab"
              aria-selected={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="apple-cards-grid reveal">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`apple-showcase-card card-reveal spotlight-card sheen-card reveal reveal-delay-${(i % 2) + 1}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => onSelectProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View case study: ${project.title}, ${project.subtitle}`}
              >
                <div className="card-image-box curtain-frame">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-product-img curtain-img"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>

                <div className="card-info-box">
                  <div className="card-headline-group">
                    <div className="card-meta-line">
                      <span className="card-client-tag">{project.client}</span>
                      <span className="card-meta-dot">&bull;</span>
                      <span className="card-category-tag">{project.category}</span>
                    </div>
                    <h3 className="card-main-title">{project.title}</h3>
                    <p className="card-summary">{project.subtitle}</p>
                  </div>

                  <div className="card-action-row">
                    <button 
                      className="link-chevron card-link-btn btn-roll" 
                      tabIndex={-1} 
                      aria-hidden="true"
                    >
                      <span className="roll-wrap">
                        <span className="roll-text">View case study</span>
                        <span className="roll-text clone" aria-hidden="true">View case study</span>
                      </span>
                      <ArrowUpRight size={15} className="action-arrow" />
                    </button>
                    <span className="card-year-tag">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-empty-state">
            <p className="empty-state-text">No projects in this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}
