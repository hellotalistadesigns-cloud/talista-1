import React, { useState } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import { ChevronRight, Plus } from 'lucide-react';
import './WorkGallery.css';

export default function WorkGallery({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Brand Identity', 'Packaging Design', 'Motion & AI Video', 'Website & Digital'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <section className="apple-work-section" id="work">
      <div className="layout-wrap">
        
        {/* Section Header */}
        <div className="apple-work-header">
          <span className="section-label">STUDIO SHOWCASE</span>
          <h2 className="apple-work-title">
            Crafted for maximum <span className="titanium-text">commercial impact.</span>
          </h2>
          <p className="apple-work-sub">
            Explore recent brand launches, custom design systems, and digital flagships.
          </p>
        </div>

        {/* Apple Segmented Control Filter Tabs */}
        <div className="apple-segmented-tabs" role="tablist">
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

        {/* Apple Product Card Grid */}
        <div className="apple-cards-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="apple-showcase-card glass-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="card-image-box">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="card-product-img" 
                  loading="lazy"
                />
                <div className="card-top-pill">
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="card-info-box">
                <div className="card-headline-group">
                  <span className="card-client-tag">{project.client}</span>
                  <h3 className="card-main-title">{project.title}</h3>
                  <p className="card-summary">{project.subtitle}</p>
                </div>

                <div className="card-action-row">
                  <button className="link-chevron card-link-btn">
                    <span>View case study</span>
                    <ChevronRight size={15} />
                  </button>
                  <span className="card-year-tag">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
