import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-text">
          © {currentYear} {personalInfo.name} · {personalInfo.degree} ({personalInfo.location})
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="#hero"
            className="footer-text"
            style={{ color: 'var(--text-primary)', fontWeight: 600 }}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
