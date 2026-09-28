import React from 'react';
import './Manifesto.css';

export default function Manifesto() {
  return (
    <section className="apple-manifesto-section" id="manifesto">
      <div className="layout-wrap apple-manifesto-container">
        <span className="section-label reveal">THE TALISTA PHILOSOPHY</span>

        <div className="manifesto-quote-wrap reveal reveal-delay-1">
          <span className="manifesto-open-quote" aria-hidden="true">"</span>
          <h2 className="apple-manifesto-headline">
            Design is not just what it looks like and feels like.{' '}
            <span className="titanium-text">Design is how it converts.</span>
          </h2>
          <span className="manifesto-close-quote" aria-hidden="true">"</span>
        </div>

        <p className="apple-manifesto-sub reveal reveal-delay-2">
          We don't do decorative fluff. We build disciplined visual systems that establish immediate authority,
          command premium pricing, and create enduring emotional connection.
        </p>

        <div className="manifesto-rule reveal reveal-delay-3" aria-hidden="true" />

        <p className="manifesto-attribution reveal reveal-delay-3">
          — Vaibhav Shukla, Founder &amp; Creative Director, Talista Studios
        </p>
      </div>
    </section>
  );
}
