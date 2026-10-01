import React, { useState } from 'react';
import { portfolioProjects, portfolioArchive, youtubeShowcase } from '../data/portfolioData';
import { ArrowUpRight, Play, X, Grid, LayoutGrid, Eye, Sparkles } from 'lucide-react';
import './WorkGallery.css';

export default function WorkGallery({ onSelectProject }) {
  const [viewMode, setViewMode] = useState('featured'); // 'featured' | 'archive'
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = ['All', 'Brand Identity', 'Packaging Design', 'Website & Digital', 'Motion & AI Video', 'Spatial & Architectural', 'Food & Hospitality'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeFilter);

  const filteredArchive = activeFilter === 'All'
    ? portfolioArchive
    : portfolioArchive.filter(item => {
        if (activeFilter === 'Brand Identity') return item.category.includes('Brand');
        if (activeFilter === 'Packaging Design') return item.category.includes('Packaging');
        if (activeFilter === 'Website & Digital') return item.category.includes('Website') || item.category.includes('Digital');
        if (activeFilter === 'Spatial & Architectural') return item.category.includes('Spatial') || item.category.includes('Architectural') || item.category.includes('Retail');
        if (activeFilter === 'Food & Hospitality') return item.category.includes('Food') || item.category.includes('Hospitality');
        if (activeFilter === 'Motion & AI Video') return item.category.includes('Motion');
        return true;
      });

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
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.015, 1.015, 1.015)`;
    });
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
  };

  return (
    <section className="apple-work-section" id="work">
      <div className="layout-wrap">

        {/* Section Header */}
        <div className="apple-work-header reveal">
          <span className="section-label">PORTFOLIO &amp; SHOWCASE</span>
          <h2 className="apple-work-title">
            <span className="mask-line">
              <span className="mask-inner">
                Selected <span className="serif-italic">Commissions.</span>
              </span>
            </span>
          </h2>
          <p className="apple-work-sub">
            A curated portfolio spanning brand identities, luxury packaging, spatial monoliths, and digital flagships.
          </p>
        </div>

        {/* View Mode Toggle Bar */}
        <div className="work-controls-row reveal">
          <div className="view-mode-toggle" role="group" aria-label="View Mode">
            <button
              className={`mode-btn ${viewMode === 'featured' ? 'active' : ''}`}
              onClick={() => setViewMode('featured')}
            >
              <LayoutGrid size={15} />
              <span>Curated Case Studies ({portfolioProjects.length})</span>
            </button>
            <button
              className={`mode-btn ${viewMode === 'archive' ? 'active' : ''}`}
              onClick={() => setViewMode('archive')}
            >
              <Grid size={15} />
              <span>Visual Gallery Archive ({portfolioArchive.length} Works)</span>
            </button>
          </div>

          {/* Filter Tabs */}
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
        </div>

        {/* YouTube Video & Shorts Grid for Motion & AI Video */}
        {activeFilter === 'Motion & AI Video' && (
          <div className="youtube-reels-showcase reveal">
            <div className="reels-header">
              <div className="reels-header-left">
                <span className="reels-live-tag">
                  <span className="live-dot" />
                  YOUTUBE REELS &amp; SHORTS ARCHIVE
                </span>
                <h3 className="reels-main-heading">Featured Motion &amp; AI Ads</h3>
              </div>
              <a
                href="https://www.youtube.com/@TalistaStudios"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio-channel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Channel @TalistaStudios</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="youtube-media-layout">
              {youtubeShowcase.filter((m) => m.type === 'video').map((media) => (
                <div key={media.id} className="video-spotlight-side">
                  <span className="media-section-pill">FEATURED 4K REEL</span>
                  <div
                    className="youtube-media-card media-card-video sheen-card"
                    onClick={() => setSelectedMedia(media)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedMedia(media); }}
                    aria-label={`Play ${media.title}`}
                  >
                    <div className="media-thumb-wrap thumb-video">
                      <img
                        src={media.thumbnail}
                        alt={media.title}
                        className="media-thumb-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="media-thumb-overlay" />
                      <button className="media-play-pill" tabIndex={-1} aria-hidden="true">
                        <Play size={14} fill="#ffffff" color="#ffffff" />
                        <span>Watch Video</span>
                      </button>
                      <span className="media-type-badge">{media.badge}</span>
                    </div>

                    <div className="media-caption-box">
                      <span className="media-category-label">{media.category}</span>
                      <h4 className="media-card-title">{media.title}</h4>
                      <p className="media-card-sub">{media.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="shorts-spotlight-side">
                <span className="media-section-pill">YOUTUBE SHORTS // 9:16</span>
                <div className="shorts-cards-row">
                  {youtubeShowcase.filter((m) => m.type === 'short').map((media) => (
                    <div
                      key={media.id}
                      className="youtube-media-card media-card-short sheen-card"
                      onClick={() => setSelectedMedia(media)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedMedia(media); }}
                      aria-label={`Play ${media.title}`}
                    >
                      <div className="media-thumb-wrap thumb-short">
                        <img
                          src={media.thumbnail}
                          alt={media.title}
                          className="media-thumb-img"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="media-thumb-overlay" />
                        <button className="media-play-pill short-play" tabIndex={-1} aria-hidden="true">
                          <Play size={12} fill="#ffffff" color="#ffffff" />
                          <span>Short</span>
                        </button>
                        <span className="media-type-badge">{media.badge}</span>
                      </div>

                      <div className="media-caption-box compact-caption">
                        <span className="media-category-label">{media.category}</span>
                        <h4 className="media-card-title">{media.title}</h4>
                        <p className="media-card-sub">{media.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 1: Curated Commission Case Studies */}
        {viewMode === 'featured' && (
          filteredProjects.length > 0 ? (
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
                    {project.gallery && project.gallery.length > 1 && (
                      <span className="card-gallery-pill">
                        {project.gallery.length} Images
                      </span>
                    )}
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
              <p className="empty-state-text">No case studies in this category yet.</p>
            </div>
          )
        )}

        {/* View Mode 2: Complete Visual Archive (All 20 Authentic Works) */}
        {viewMode === 'archive' && (
          <div className="visual-archive-section reveal">
            <div className="archive-badge-banner">
              <Sparkles size={14} className="accent-icon" />
              <span>Displaying {filteredArchive.length} original commissions &amp; identity marks from our portfolio catalog</span>
            </div>

            <div className="visual-archive-grid">
              {filteredArchive.map((item, idx) => (
                <div
                  key={item.id}
                  className={`archive-item-card archive-aspect-${item.aspect || 'square'} sheen-card`}
                  onClick={() => setLightboxItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxItem(item); }}
                  aria-label={`Preview ${item.title}`}
                >
                  <div className="archive-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="archive-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="archive-hover-overlay">
                      <span className="archive-zoom-pill">
                        <Eye size={14} />
                        <span>Inspect Artwork</span>
                      </span>
                    </div>
                  </div>

                  <div className="archive-card-caption">
                    <div className="archive-meta-top">
                      <span className="archive-cat-pill">{item.category}</span>
                      <span className="archive-num">#{item.num}</span>
                    </div>
                    <h4 className="archive-item-title">{item.title}</h4>
                    <p className="archive-item-desc">{item.description}</p>
                    <span className="archive-client-name">{item.client}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal for Visual Archive */}
      {lightboxItem && (
        <div className="apple-modal-backdrop" onClick={() => setLightboxItem(null)} data-lenis-prevent="true" data-lenis-prevent>
          <div className="apple-modal-sheet lightbox-modal" onClick={(e) => e.stopPropagation()} data-lenis-prevent="true" data-lenis-prevent>
            <button
              className="apple-sheet-close"
              onClick={() => setLightboxItem(null)}
              aria-label="Close Preview"
            >
              <X size={16} />
            </button>

            <div className="lightbox-content-box" data-lenis-prevent="true" data-lenis-prevent>
              <div className="lightbox-image-stage">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="lightbox-full-img"
                />
              </div>

              <div className="lightbox-details-bar">
                <div>
                  <div className="lightbox-meta-row">
                    <span className="lightbox-pill">{lightboxItem.category}</span>
                    <span className="lightbox-client">{lightboxItem.client}</span>
                    <span className="lightbox-year">{lightboxItem.year}</span>
                  </div>
                  <h3 className="lightbox-title">{lightboxItem.title}</h3>
                  <p className="lightbox-desc">{lightboxItem.description}</p>
                </div>

                <div className="lightbox-actions">
                  <a
                    href={lightboxItem.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lightbox-btn-full"
                  >
                    <span>Open High-Res Original</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated YouTube Player Overlay */}
      {selectedMedia && (
        <div className="apple-modal-backdrop" onClick={() => setSelectedMedia(null)}>
          <div
            className={`apple-modal-sheet video-embed-modal ${selectedMedia.type === 'short' ? 'modal-short' : 'modal-landscape'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="apple-sheet-close"
              onClick={() => setSelectedMedia(null)}
              aria-label="Close video"
            >
              <X size={16} />
            </button>

            <div className="video-modal-inner">
              <div className={`video-responsive-frame ${selectedMedia.type === 'short' ? 'frame-short' : 'frame-landscape'}`}>
                <iframe
                  src={selectedMedia.embedUrl}
                  title={selectedMedia.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-modal-footer">
                <div>
                  <span className="video-modal-pill">{selectedMedia.category}</span>
                  <h3 className="video-modal-title">{selectedMedia.title}</h3>
                </div>
                <a
                  href={selectedMedia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-modal-youtube-link"
                >
                  <span>Open in YouTube</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
