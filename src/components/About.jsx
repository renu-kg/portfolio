import React from 'react';
import { aboutContent } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section about-section reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">01 · About</div>
          <h2 className="section-title">Engineering & Perspective</h2>
        </div>

        <div className="about-card">
          <div className="about-grid-layout">
            <div className="about-text-container">
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>

            <div className="about-highlights-card">
              <div className="about-highlight-item">
                <span className="about-highlight-label">Current Role</span>
                <span className="about-highlight-val">Software Development Intern @ Atlas Systems</span>
              </div>
              <div className="about-highlight-item">
                <span className="about-highlight-label">Academics</span>
                <span className="about-highlight-val">B.E. Computer Science · CGPA 9.41</span>
              </div>
              <div className="about-highlight-item">
                <span className="about-highlight-label">Core Focus</span>
                <span className="about-highlight-val">Java Systems · BI & ETL · AI/ML · Web Applications</span>
              </div>
              <div className="about-highlight-item">
                <span className="about-highlight-label">Creative Side</span>
                <span className="about-highlight-val">Visual Storytelling through Pencil & Ink</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
