import React from 'react';
import { studioCapabilities } from '../data/portfolioData';
import { 
  Layers, 
  Video, 
  Globe, 
  Palette, 
  Share2, 
  Sparkles, 
  Package,
  ChevronRight,
  Check
} from 'lucide-react';
import './CapabilitiesBento.css';

export default function CapabilitiesBento({ onOpenPlanner }) {
  const getIcon = (id) => {
    switch (id) {
      case 'identity':
        return <Layers className="apple-bento-icon" />;
      case 'motion-ai':
        return <Video className="apple-bento-icon" />;
      case 'web-dev':
        return <Globe className="apple-bento-icon" />;
      case 'graphic-design':
        return <Palette className="apple-bento-icon" />;
      case 'packaging':
        return <Package className="apple-bento-icon" />;
      case 'social-creative':
        return <Share2 className="apple-bento-icon" />;
      case 'ugc-content':
        return <Sparkles className="apple-bento-icon" />;
      default:
        return <Layers className="apple-bento-icon" />;
    }
  };

  return (
    <section className="apple-capabilities-section" id="capabilities">
      <div className="layout-wrap">
        
        {/* Section Header */}
        <div className="apple-cap-header">
          <span className="section-label">STUDIO CAPABILITIES</span>
          <h2 className="apple-cap-title">
            Seven disciplines. <br />
            <span className="titanium-text">Unrivaled execution.</span>
          </h2>
          <p className="apple-cap-sub">
            Built from the ground up for high-growth brands that refuse to compromise on craft.
          </p>
        </div>

        {/* Apple Feature Bento Grid */}
        <div className="apple-bento-grid">
          {studioCapabilities.map((cap) => (
            <div 
              key={cap.id} 
              className={`apple-bento-card glass-card ${cap.featured ? 'featured-apple-card' : ''}`}
            >
              <div className="apple-bento-top">
                <div className="apple-icon-circle">
                  {getIcon(cap.id)}
                </div>
                {cap.tag && (
                  <span className="apple-pill-tag">{cap.tag}</span>
                )}
              </div>

              <div className="apple-bento-main">
                <h3 className="apple-bento-h3">{cap.title}</h3>
                <div className="apple-bento-tagline">{cap.tagline}</div>
                <p className="apple-bento-desc">{cap.description}</p>
              </div>

              {/* Apple Specs Deliverable List */}
              <div className="apple-bento-specs">
                <div className="specs-label">KEY DELIVERABLES</div>
                <div className="specs-tags-wrap">
                  {cap.deliverables.map((item, i) => (
                    <span key={i} className="spec-bubble">
                      <Check size={12} className="check-blue" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="apple-bento-footer">
                <button onClick={onOpenPlanner} className="link-chevron bento-link">
                  <span>Explore this capability</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
