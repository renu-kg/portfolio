import React from 'react';
import { personalInfo, heroPositioning } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-layout">
          {/* Main Copy */}
          <div>
            <div className="hero-status-pill">
              <span className="badge badge-sage">
                <span className="status-dot"></span>
                {personalInfo.availabilityStatus}
              </span>
            </div>

            <h1 className="hero-title">
              {heroPositioning.headline}
              <br />
              <span className="accent-student">{heroPositioning.supportingLine}</span>
            </h1>

            <p className="hero-subtitle">
              {heroPositioning.description}
            </p>

            <div className="hero-ctas">
              <a href={heroPositioning.primaryCTA.target} className="btn-primary">
                {heroPositioning.primaryCTA.label} ↓
              </a>
              <a
                href={heroPositioning.secondaryCTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                📄 {heroPositioning.secondaryCTA.label}
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit Renu K G's GitHub profile"
              >
                GitHub ↗
              </a>
              <span style={{ color: 'var(--border-medium)' }} aria-hidden="true">·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit Renu K G's LinkedIn profile"
              >
                LinkedIn ↗
              </a>
              <span style={{ color: 'var(--border-medium)' }} aria-hidden="true">·</span>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit Renu K G's LeetCode profile"
              >
                LeetCode ↗
              </a>
            </div>
          </div>

          {/* Refined Editorial Profile Photo Card */}
          <div className="hero-avatar-card">
            <div className="avatar-img-frame">
              <img
                src={personalInfo.profileImage}
                alt={`Photograph of ${personalInfo.name}`}
                loading="eager"
                onError={(e) => {
                  if (e.target.src.endsWith('.jpeg')) {
                    e.target.src = '/images/profile.jpg';
                  } else if (e.target.src.endsWith('.jpg')) {
                    e.target.src = '/images/profile.png';
                  } else {
                    e.target.style.display = 'none';
                    if (e.target.parentElement) {
                      e.target.parentElement.innerHTML = `
                        <div style="height: 100%; min-height: 380px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--bg-subtle); color: var(--text-muted); font-family: var(--font-mono); font-size: 11px; padding: 12px; text-align: center;">
                          <span style="font-size: 28px; margin-bottom: 4px;">👤</span>
                          <span>Profile Photo</span>
                        </div>
                      `;
                    }
                  }
                }}
              />
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <span className="badge badge-neutral" style={{ fontSize: '11px' }}>
                📍 Davanagere, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
