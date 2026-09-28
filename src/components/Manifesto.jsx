import React from 'react';
import './Manifesto.css';

export default function Manifesto() {
  return (
    <section className="apple-manifesto-section" id="manifesto">
      <div className="layout-wrap apple-manifesto-container">
        <span className="section-label">THE TALISTA PHILOSOPHY</span>
        <h2 className="apple-manifesto-headline">
          “Design is not just what it looks like and feels like. <br />
          <span className="titanium-text">Design is how it converts.”</span>
        </h2>
        <p className="apple-manifesto-sub">
          We don't do decorative fluff. We build disciplined visual systems that establish immediate authority, command premium pricing, and create enduring emotional connection.
        </p>
      </div>
    </section>
  );
}
