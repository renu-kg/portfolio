import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">06 · Education</div>
          <h2 className="section-title">Education & Academics</h2>
          <p className="section-subtitle">
            Academic foundation in Computer Science Engineering, industry certifications, and hackathon participation.
          </p>
        </div>

        <div className="education-grid">
          {/* Main Degree & Academic Scores Card */}
          <div className="edu-main-card">
            <div>
              <div className="card-header-meta">
                <span className="badge badge-blue">B.E. Degree · {educationData.period}</span>
                <span className="card-type-tag">{educationData.semester}</span>
              </div>

              <h3 className="card-title" style={{ fontSize: '1.375rem', marginBottom: '4px' }}>
                {educationData.degree}
              </h3>
              <div className="card-subtitle" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                {educationData.institution}
              </div>

              <div className="cgpa-spotlight">
                <div>
                  <div className="cgpa-number">{educationData.cgpa}</div>
                  <div className="cgpa-label">{educationData.cgpaLabel}</div>
                </div>
              </div>

              <div className="academic-scores-grid">
                <div className="score-box">
                  <div className="score-val">{educationData.pucScore}</div>
                  <div className="score-lbl">PUC Score</div>
                </div>
                <div className="score-box">
                  <div className="score-val">{educationData.sslcScore}</div>
                  <div className="score-lbl">SSLC Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Hackathons Card */}
          <div className="certifications-card">
            <div className="card-header-meta">
              <span className="badge badge-lavender">Certifications & Workshops</span>
            </div>

            <div className="cert-list">
              {educationData.certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <div className="cert-title">✓ {cert.title}</div>
                  <div className="cert-issuer">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <div className="card-subtitle" style={{ fontSize: '13px', marginBottom: '8px' }}>
                Hackathons & Activities
              </div>
              <div className="skill-tags-wrapper">
                {educationData.activities.map((act, idx) =>
                  act.items.map((item, itemIdx) => (
                    <span key={`${idx}-${itemIdx}`} className="tech-tag">
                      {item}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
