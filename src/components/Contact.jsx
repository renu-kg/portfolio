import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section reveal-on-scroll">
      <div className="container">
        <div className="contact-card">
          <div className="section-index" style={{ justifyContent: 'center' }}>
            10 · Contact & Connect
          </div>

          <h2 className="contact-headline">Let's build something useful.</h2>
          <p className="contact-subtext">
            I'm looking for opportunities where I can contribute, learn from real-world problems, and grow as a software developer.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="email-cta-box"
              title="Click to send email"
            >
              ✉️ {personalInfo.email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="tech-tag"
              style={{ padding: '6px 14px', cursor: 'pointer', backgroundColor: 'var(--bg-subtle)' }}
            >
              {copied ? '✓ Email Copied to Clipboard!' : 'Copy Email Address'}
            </button>
          </div>

          <div className="contact-social-grid" style={{ marginTop: '36px' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn ↗
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LeetCode ↗
            </a>
            <a
              href={personalInfo.artPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Art Portfolio ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
