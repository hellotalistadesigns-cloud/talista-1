import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Check, 
  Copy, 
  Phone, 
  Mail, 
  Globe, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import './ProjectPlanner.css';

export default function ProjectPlanner() {
  const [selectedServices, setSelectedServices] = useState(['Brand Identity & Logo']);
  const [budgetTier, setBudgetTier] = useState('$5,000 – $10,000');
  const [timeline, setTimeline] = useState('3–4 Weeks');
  const [copiedKey, setCopiedKey] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    details: ''
  });

  const availableServices = [
    'Brand Identity & Logo',
    'AI Video Ads & Reels',
    'Website Design & Dev',
    'Packaging & Unboxing',
    '3D & Motion Graphics',
    'Social Creative Engine'
  ];

  const budgetOptions = [
    '$3,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000+'
  ];

  const timelineOptions = [
    'Urgent (< 2 Weeks)',
    '3–4 Weeks',
    '1–2 Months',
    'Ongoing Retainer'
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Apple-style elegant confetti burst
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0071E3', '#2997FF', '#FFFFFF', '#F5E3CA']
    });

    setIsSubmitted(true);
  };

  return (
    <section className="apple-planner-section" id="contact">
      <div className="layout-wrap">
        
        {/* Section Header */}
        <div className="apple-planner-header">
          <span className="section-label">START AN ENGAGEMENT</span>
          <h2 className="apple-planner-title">
            Configure your project. <br />
            <span className="titanium-text">Get a tailored proposal.</span>
          </h2>
          <p className="apple-planner-sub">
            Select your desired scope below. Our creative directors will respond within 12 business hours.
          </p>
        </div>

        {/* Apple Store Configurator Layout */}
        <div className="apple-planner-layout">
          
          {/* Configurator Form */}
          <div className="apple-config-box glass-card">
            {isSubmitted ? (
              <div className="apple-success-state">
                <div className="apple-check-circle">
                  <Check size={32} />
                </div>
                <h3 className="success-h3">Brief Submitted Successfully</h3>
                <p className="success-body">
                  Thank you, <strong>{formData.name}</strong>. Vaibhav Shukla and our lead creative team have received your project scope for <strong>{formData.brand || 'your brand'}</strong> and will follow up with an initial assessment shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn-ghost"
                  style={{ marginTop: '24px' }}
                >
                  Configure another project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="apple-config-form">
                
                {/* Step 1: Model / Disciplines */}
                <div className="config-step">
                  <div className="step-label-row">
                    <span className="step-tag">Step 1</span>
                    <span className="step-text">Choose your disciplines</span>
                  </div>

                  <div className="apple-pill-options">
                    {availableServices.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          className={`apple-option-pill ${isSelected ? 'selected' : ''}`}
                          onClick={() => toggleService(service)}
                        >
                          <div className={`radio-dot ${isSelected ? 'active' : ''}`} />
                          <span>{service}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Budget & Timeline */}
                <div className="config-step">
                  <div className="step-label-row">
                    <span className="step-tag">Step 2</span>
                    <span className="step-text">Select budget &amp; launch timeline</span>
                  </div>

                  <div className="dual-select-row">
                    <div className="select-container">
                      <label className="select-caption">Estimated Budget (USD)</label>
                      <select 
                        value={budgetTier} 
                        onChange={(e) => setBudgetTier(e.target.value)}
                        className="apple-input select"
                      >
                        {budgetOptions.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div className="select-container">
                      <label className="select-caption">Target Completion</label>
                      <select 
                        value={timeline} 
                        onChange={(e) => setTimeline(e.target.value)}
                        className="apple-input select"
                      >
                        {timelineOptions.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Client Info */}
                <div className="config-step">
                  <div className="step-label-row">
                    <span className="step-tag">Step 3</span>
                    <span className="step-text">Contact information</span>
                  </div>

                  <div className="dual-select-row">
                    <input 
                      type="text" 
                      required 
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="apple-input"
                    />
                    <input 
                      type="email" 
                      required 
                      placeholder="Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="apple-input"
                    />
                  </div>

                  <input 
                    type="text" 
                    placeholder="Brand Name / URL"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="apple-input"
                    style={{ marginTop: '12px' }}
                  />

                  <textarea 
                    rows={3}
                    placeholder="Project overview &amp; key deliverables..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="apple-input textarea"
                    style={{ marginTop: '12px' }}
                  />
                </div>

                <button type="submit" className="btn-primary apple-submit-btn">
                  <span>Send Project Brief</span>
                </button>

              </form>
            )}
          </div>

          {/* Right Direct Lines */}
          <div className="apple-direct-channels">
            <div className="apple-channel-card glass-card">
              <h3 className="channel-card-title">Studio Direct</h3>
              <p className="channel-card-sub">
                Connect directly with our creative team for quick inquiries and immediate availability checks.
              </p>

              <div className="apple-channels-list">
                
                <div className="apple-channel-row">
                  <div className="channel-meta">
                    <span className="meta-label">EMAIL INQUIRIES</span>
                    <a href="mailto:hello@talista.in" className="meta-link">hello@talista.in</a>
                  </div>
                  <button 
                    onClick={() => handleCopy('hello@talista.in', 'email')}
                    className="apple-copy-btn"
                    title="Copy Email"
                  >
                    {copiedKey === 'email' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="apple-channel-row">
                  <div className="channel-meta">
                    <span className="meta-label">PHONE &amp; WHATSAPP</span>
                    <a href="tel:+919455635155" className="meta-link">+91 94556 35155</a>
                  </div>
                  <button 
                    onClick={() => handleCopy('+919455635155', 'phone')}
                    className="apple-copy-btn"
                    title="Copy Phone Number"
                  >
                    {copiedKey === 'phone' ? <Check size={14} className="copied" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="apple-channel-row">
                  <div className="channel-meta">
                    <span className="meta-label">SOCIAL PORTFOLIO</span>
                    <a href="https://instagram.com/talistadesigns" target="_blank" rel="noopener noreferrer" className="meta-link">
                      @talistadesigns
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="apple-status-card glass-card">
              <div className="status-top">
                <span className="pulse-dot" />
                <span className="status-text">Studio Operating Worldwide</span>
              </div>
              <p className="status-desc">
                Serving clients across San Francisco, New York, London, Dubai, and Mumbai. Initial consultations hosted via Google Meet or Zoom.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
