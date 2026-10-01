import React, { useEffect, useState, useRef } from 'react';
import { X, CheckCircle2, ChevronRight, ArrowUpRight, Play } from 'lucide-react';
import './CaseStudyModal.css';

export default function CaseStudyModal({ project, onClose, onStartProject }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(project?.image);
  const scrollRef = useRef(null);

  useEffect(() => {
    setSelectedImage(project?.image);
    setIsPlayingVideo(false);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project]);

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

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += e.deltaY;
    }
  };

  if (!project) return null;

  return (
    <div className="apple-modal-backdrop" onClick={onClose} onWheel={handleWheel} data-lenis-prevent="true" data-lenis-prevent>
      <div className="apple-modal-sheet glass-card" onClick={(e) => e.stopPropagation()} data-lenis-prevent="true" data-lenis-prevent>

        {/* Apple Close Pill Button */}
        <button className="apple-sheet-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        {/* Modal Scroll Content */}
        <div className="apple-modal-scroll" ref={scrollRef} data-lenis-prevent="true" data-lenis-prevent>

          {/* Media Header */}
          <div className="modal-hero-frame">
            <img src={selectedImage || project.image} alt={project.title} className="modal-hero-photo" decoding="async" />
            <div className="modal-hero-gradient" />
            <div className="modal-hero-tags">
              <span className="apple-tag-pill">{project.category}</span>
              <span className="apple-year-pill">{project.year}</span>
            </div>
          </div>

          {/* Multi-Photo Gallery Strip */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="modal-gallery-strip">
              <span className="modal-gallery-label">Project Gallery ({project.gallery.length} Views):</span>
              <div className="modal-gallery-thumbs">
                {project.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    className={`gallery-thumb-btn ${selectedImage === imgUrl ? 'active' : ''}`}
                    onClick={() => setSelectedImage(imgUrl)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={imgUrl} alt={`${project.title} view ${idx + 1}`} className="thumb-mini-img" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="modal-sheet-body">
            <div className="modal-meta-row">
              <span className="modal-client-label">{project.client}</span>
              <h2 className="modal-sheet-title">{project.title}</h2>
              <p className="modal-sheet-lead">{project.summary}</p>
            </div>

            {/* Embedded YouTube Thumbnail Player if video available */}
            {project.youtubeId && (
              <div className="modal-video-embed-box">
                {isPlayingVideo ? (
                  <div className="modal-iframe-frame">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    className="modal-video-poster"
                    onClick={() => setIsPlayingVideo(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsPlayingVideo(true); }}
                    aria-label="Play AI Video on YouTube"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                      alt={project.title}
                      className="poster-img"
                    />
                    <div className="poster-overlay" />
                    <button className="poster-play-btn" aria-hidden="true" tabIndex={-1}>
                      <Play size={22} fill="#ffffff" color="#ffffff" />
                    </button>
                    <div className="poster-caption">
                      <span className="poster-pill">
                        <span className="live-dot" />
                        AI VIDEO REEL // 4K
                      </span>
                      <span className="poster-text">Click to Play Showcase Reel Directly</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Featured Video / YouTube Reel Action */}
            {project.videoUrl && (
              <div className="modal-video-card">
                <div className="modal-video-info">
                  <div className="modal-video-pill">
                    <span className="live-dot" />
                    <span>OFFICIAL YOUTUBE CHANNEL</span>
                  </div>
                  <h4 className="modal-video-title">Explore full motion reels on YouTube</h4>
                  <p className="modal-video-sub">Watch 4K fluid dynamic simulations and AI video campaign variations.</p>
                </div>
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-video-action-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>Watch on YouTube</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            )}

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
