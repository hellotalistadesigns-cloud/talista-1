import React from 'react';
import './About.css';

export default function About() {
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
  };

  return (
    <section className="clean-about-section" id="about">
      <div className="layout-wrap clean-about-wrap">

        {/* Section Header with Masked Title */}
        <div className="about-header-block reveal">
          <span className="section-label">ABOUT</span>
          <h2 className="about-headline">
            <span className="mask-line">
              <span className="mask-inner">
                Independent creative direction for brands
              </span>
            </span>
            <span className="mask-line">
              <span className="mask-inner mask-delay-1">
                that refuse to be <span className="serif-italic">ordinary.</span>
              </span>
            </span>
          </h2>
        </div>

        {/* Atelier Studio Visual Banner with Curtain Reveal */}
        <div className="about-studio-banner reveal reveal-delay-1 sheen-card">
          <div className="studio-banner-img-wrap curtain-frame">
            <img 
              src="/assets/studio-atelier.jpg" 
              alt="Talista Creative Studio Atelier" 
              className="studio-banner-img curtain-img"
              loading="eager"
              decoding="async"
            />
            <div className="studio-banner-overlay" />
            <div className="studio-banner-meta">
              <span className="banner-tag">ATELIER & CRAFT</span>
              <span className="banner-location">MUMBAI &bull; GLOBAL COMMISSIONS</span>
            </div>
          </div>
        </div>

        {/* Minimalist Architectural Spec Grid */}
        <div className="about-spec-grid reveal reveal-delay-2">
          <div 
            className="about-spec-card card-reveal spotlight-card sheen-card"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <span className="spec-tag">[01 // PRACTICE]</span>
            <h3 className="spec-heading">Selective Commissions</h3>
            <p className="spec-body">
              An independent creative studio maintaining an intentionally focused roster to deliver extraordinary craft, agility, and depth on every launch.
            </p>
          </div>

          <div 
            className="about-spec-card card-reveal spotlight-card sheen-card"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <span className="spec-tag">[02 // REACH]</span>
            <h3 className="spec-heading">Global Footprint</h3>
            <p className="spec-body">
              Based in Mumbai, partnering directly with ambitious founders across North America, Europe, and Asia in luxury, direct-to-consumer, and culture.
            </p>
          </div>

          <div 
            className="about-spec-card card-reveal spotlight-card sheen-card"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <span className="spec-tag">[03 // LEADERSHIP]</span>
            <h3 className="spec-heading">Founder-Led Craft</h3>
            <p className="spec-body">
              Creative direction led by Vaibhav Shukla, collaborating hands-on from initial brand architecture through final digital and 3D motion delivery.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
