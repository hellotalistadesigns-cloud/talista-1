import React from 'react';
import './MarqueeTicker.css';

export default function MarqueeTicker() {
  const items = [
    'Brand Identity Systems',
    'Cinematic 3D Motion',
    'Custom Digital Flagships',
    'Packaging Architecture',
    'Creative Direction',
    'AI-Enhanced Production',
    'Editorial Systems',
    'High-Conversion D2C'
  ];

  return (
    <div className="agency-marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {/* Double list for seamless infinite loop */}
        <div className="marquee-group">
          {items.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-symbol">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((item, i) => (
            <span key={`dup-${i}`} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-symbol">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
