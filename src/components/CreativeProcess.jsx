import React from 'react';
import { processSteps } from '../data/portfolioData';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import './CreativeProcess.css';

export default function CreativeProcess() {
  return (
    <section className="apple-process-section" id="process">
      <div className="layout-wrap">

        {/* Section Header */}
        <div className="apple-process-header reveal">
          <span className="section-label">STUDIO METHODOLOGY</span>
          <h2 className="apple-process-title">
            Engineered to perfection. <br />
            <span className="titanium-text">From first sketch to launch.</span>
          </h2>
          <p className="apple-process-sub">
            A linear, high-precision roadmap designed to eliminate guesswork and maximize creative output.
          </p>
        </div>

        {/* Process Step Pipeline */}
        <div className="apple-process-pipeline">
          {processSteps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className={`apple-step-card glass-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <div className="step-badge-row">
                  <span className="step-num titanium-text">{step.number}</span>
                  <span className="step-time">{step.timeframe}</span>
                </div>
                <h3 className="step-name">{step.title}</h3>
                <p className="step-detail">{step.description}</p>
              </div>
              {/* Arrow connector between steps (not after the last) */}
              {i < processSteps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="apple-commitment-banner glass-card reveal">
          <div className="commitment-left">
            <div className="commitment-icon-wrap">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="commitment-heading">THE TALISTA STANDARD</h4>
              <p className="commitment-desc">
                Direct engagement with our founder &amp; creative director. Weekly sprints, zero account managers.
              </p>
            </div>
          </div>
          <a href="#contact" className="btn-ghost commitment-cta">
            <span>See how it works</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
