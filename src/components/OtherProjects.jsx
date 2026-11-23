import React from 'react';
import { aiProjects, webUtilities } from '../data/portfolioData';

export default function OtherProjects() {
  return (
    <section id="other-projects" className="section reveal-on-scroll" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-index">03 · Other Projects</div>
          <h2 className="section-title">Other Projects & Experiments</h2>
          <p className="section-subtitle">
            AI explorations and interactive web experiments.
          </p>
        </div>

        {/* 1. AI & Deep Learning Systems: 2 side-by-side balanced cards */}
        <div className="other-category-block" style={{ marginBottom: 'var(--space-6)' }}>
          <h3 className="other-category-title">
            <span className="brand-dot" style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', marginRight: '6px' }}></span>
            AI, Deep Learning & Generative Models
          </h3>

          <div className="other-ai-grid">
            {aiProjects.map((proj) => (
              <div key={proj.id} className="other-project-card">
                <div>
                  <h4 className="other-card-title">{proj.title}</h4>
                  <p className="other-card-description">{proj.description}</p>
                </div>

                <div>
                  <div className="card-tags" style={{ marginTop: '8px' }}>
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {proj.links?.github && (
                    <div className="card-actions" style={{ marginTop: '8px' }}>
                      <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="card-link" aria-label={`View ${proj.title} on GitHub`}>
                        GitHub ↗
                      </a>
                    </div>
                  )}

                  {proj.taskLinks && proj.taskLinks.length > 0 && (
                    <div className="card-actions" style={{ marginTop: '8px', flexWrap: 'wrap' }}>
                      {proj.taskLinks.map((t, idx) => (
                        <a
                          key={idx}
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link"
                          aria-label={`View repository for ${t.label}`}
                        >
                          {t.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Web & Interactive Utilities: Names and links only (no descriptions) */}
        <div className="web-utilities-section">
          <div className="web-utilities-header">
            <span className="brand-dot" style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', marginRight: '6px' }}></span>
            <span className="web-utilities-title">Web & Interactive Utilities</span>
            <span className="badge badge-neutral" style={{ fontSize: '11px', padding: '2px 8px', marginLeft: '8px' }}>Practice Projects</span>
          </div>

          <div className="web-utilities-grid">
            {webUtilities.map((item) => (
              <div key={item.id} className="utility-item">
                <span className="utility-name">{item.title}</span>
                <div className="utility-links">
                  {item.links.github && (
                    <a
                      href={item.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="utility-link"
                      aria-label={`View source code for ${item.title}`}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {item.links.demo && (
                    <a
                      href={item.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="utility-link utility-demo-link"
                      aria-label={`View live demo for ${item.title}`}
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
