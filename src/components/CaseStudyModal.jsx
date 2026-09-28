import React, { useEffect } from 'react';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';
import './CaseStudyModal.css';

export default function CaseStudyModal({ project, onClose, onStartProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="apple-modal-backdrop" onClick={onClose}>
      <div className="apple-modal-sheet glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Apple Close Pill Button */}
        <button className="apple-sheet-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        {/* Modal Scroll Content */}
        <div className="apple-modal-scroll">
          
          {/* Media Header */}
          <div className="modal-hero-frame">
            <img src={project.image} alt={project.title} className="modal-hero-photo" />
            <div className="modal-hero-gradient" />
            <div className="modal-hero-tags">
              <span className="apple-tag-pill">{project.category}</span>
              <span className="apple-year-pill">{project.year}</span>
            </div>
          </div>

          <div className="modal-sheet-body">
            <div className="modal-meta-row">
              <span className="modal-client-label">{project.client}</span>
              <h2 className="modal-sheet-title">{project.title}</h2>
              <p className="modal-sheet-lead">{project.summary}</p>
            </div>

            {/* Apple Key Metrics */}
            <div className="apple-modal-stats">
              {project.stats.map((stat, i) => (
                <div key={i} className="apple-stat-card">
                  <div className="stat-giant-num titanium-text">{stat.value}</div>
                  <div className="stat-caption">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Strategy Deep Dive */}
            <div className="apple-narrative-split">
              <div className="narrative-box">
                <h4 className="narrative-h4">THE CHALLENGE</h4>
                <p className="narrative-p">{project.challenge}</p>
              </div>
              <div className="narrative-box">
                <h4 className="narrative-h4">THE STRATEGY</h4>
                <p className="narrative-p">{project.solution}</p>
              </div>
            </div>

            {/* Deliverables Matrix */}
            <div className="modal-deliverables-box">
              <h4 className="narrative-h4">DELIVERED ARCHITECTURE</h4>
              <div className="apple-deliv-grid">
                {project.deliverables.map((item, i) => (
                  <div key={i} className="apple-deliv-row">
                    <CheckCircle2 size={16} className="apple-blue-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apple Bottom CTA */}
            <div className="modal-footer-cta">
              <div>
                <h3 className="modal-cta-h3">Ready to elevate your brand?</h3>
                <p className="modal-cta-p">Schedule an initial creative assessment with our directors.</p>
              </div>
              <button 
                onClick={() => {
                  onClose();
                  onStartProject();
                }} 
                className="btn-primary"
              >
                <span>Inquire now</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
