import React, { useState } from 'react';
import { categorizedOtherProjects } from '../data/portfolioData';
import ProjectPreview from './ProjectPreview';
import Lightbox from './Lightbox';

export default function OtherProjects() {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const renderLinks = (links) => {
    if (!links) return null;
    const { github, demo, linkedin } = links;
    if (!github && !demo && !linkedin) return null;

    return (
      <div className="card-actions" style={{ marginTop: '14px' }}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="View source code on GitHub">
            GitHub ↗
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="View live demo application">
            Live Demo ↗
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="View post on LinkedIn">
            LinkedIn ↗
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="other-projects" className="section reveal-on-scroll" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-index">03 · Other Projects</div>
          <h2 className="section-title">Other Projects & Experiments</h2>
          <p className="section-subtitle">
            Deep learning systems, algorithmic optimization tools, and exploratory web applications from my continuous learning journey.
          </p>
        </div>

        <div className="other-categories-stack">
          {categorizedOtherProjects.map((cat) => (
            <div key={cat.categoryKey} className="other-category-block">
              <h3 className="other-category-title">
                <span className="brand-dot" style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', marginRight: '8px' }}></span>
                {cat.categoryTitle}
              </h3>

              <div className="other-projects-grid">
                {cat.projects.map((proj) => (
                  <div key={proj.id} className="other-project-card">
                    <div>
                      <h4 className="other-card-title">{proj.title}</h4>
                      <p className="other-card-description">{proj.description}</p>
                    </div>

                    {/* Screenshot Preview for projects with images (e.g. AI Skill Analyzer) */}
                    {proj.images && proj.images.length > 0 && (
                      <div style={{ marginTop: '12px', marginBottom: '8px' }}>
                        <ProjectPreview
                          images={proj.images}
                          title={proj.title}
                          subtitle={proj.techStack ? proj.techStack.slice(0, 3).join(' · ') : ''}
                          accentColor="peach"
                          onImageClick={(item) => setActiveLightboxImage(item)}
                        />
                      </div>
                    )}

                    <div>
                      <div className="card-tags" style={{ marginTop: '12px' }}>
                        {proj.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Regular links */}
                      {renderLinks(proj.links)}

                      {/* Grouped Task links for Generative AI tasks */}
                      {proj.taskLinks && proj.taskLinks.length > 0 && (
                        <div className="card-actions" style={{ marginTop: '14px', flexWrap: 'wrap' }}>
                          {proj.taskLinks.map((t, tIdx) => (
                            <a
                              key={tIdx}
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
          ))}
        </div>
      </div>

      {/* Reusable Lightbox for other project screenshots */}
      <Lightbox
        isOpen={Boolean(activeLightboxImage)}
        onClose={() => setActiveLightboxImage(null)}
        imageSrc={activeLightboxImage?.imageSrc}
        title={activeLightboxImage?.title}
        subtitle={activeLightboxImage?.subtitle}
        date={activeLightboxImage?.date}
      />
    </section>
  );
}
