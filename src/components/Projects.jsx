import React, { useState } from 'react';
import { selectedProjects } from '../data/portfolioData';
import ProjectPreview from './ProjectPreview';
import Lightbox from './Lightbox';

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const featured = selectedProjects.find((p) => p.featured);
  const nonFeatured = selectedProjects.filter((p) => !p.featured);

  const renderLinks = (links) => {
    if (!links) return null;
    const { github, linkedin, demo } = links;
    if (!github && !linkedin && !demo) return null;

    return (
      <div className="card-actions">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="card-link">
            GitHub ↗
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="card-link">
            LinkedIn ↗
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link">
            Live Demo ↗
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">02 · Selected Work</div>
          <h2 className="section-title">Curated Projects & Systems</h2>
          <p className="section-subtitle">
            A selection of practical applications spanning AI/ML workflows, database web applications, and core algorithmic problem solving.
          </p>
        </div>

        <div className="bento-grid">
          {/* Featured Project 1: Spans 12 columns */}
          {featured && (
            <div className="bento-card featured-card col-12 card-tint-blue">
              <div className="featured-content-wrapper">
                <div className="featured-info-side">
                  <div>
                    <div className="card-header-meta">
                      <span className="badge badge-blue">{featured.badgeText}</span>
                      <span className="card-type-tag">{featured.type}</span>
                    </div>

                    <h3 className="card-title">{featured.title}</h3>
                    <div className="card-subtitle">{featured.subtitle}</div>
                    <p className="card-description">{featured.description}</p>

                    <div className="card-bullets">
                      {featured.keyCapabilities.map((bullet, idx) => (
                        <div key={idx} className="card-bullet-item">
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="card-tags">
                      {featured.techStack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {renderLinks(featured.links)}
                  </div>
                </div>

                {/* Featured Visual Side with 16:9 ProjectPreview & Gallery */}
                <div className="featured-visual-side">
                  <div style={{ width: '100%', maxWidth: '440px' }}>
                    <ProjectPreview
                      images={featured.images}
                      imageSrc="/images/projects/study_assistant_1.jpg"
                      title={featured.title}
                      subtitle="RAG & Vector Retrieval Architecture"
                      accentColor="blue"
                      onImageClick={(item) => setLightboxImage(item)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Bento Grid Cards with Soft Pastel Surface Tints */}
          {nonFeatured.map((proj) => {
            const isCurrentlyBuilding = proj.status === 'Currently Building';

            if (isCurrentlyBuilding) {
              return (
                <div
                  key={proj.id}
                  className="bento-card col-12 card-tint-peach"
                  style={{
                    borderLeft: '3px solid var(--pastel-peach-text)',
                    padding: 0
                  }}
                >
                  <div className="featured-content-wrapper">
                    <div className="featured-info-side">
                      <div>
                        <div className="card-header-meta">
                          <span className="badge badge-peach">{proj.badgeText}</span>
                          <span className="card-type-tag">{proj.type}</span>
                        </div>

                        <h3 className="card-title">{proj.title}</h3>
                        <div className="card-subtitle">{proj.subtitle}</div>
                        <p className="card-description">{proj.description}</p>

                        <div className="card-bullets">
                          {proj.keyCapabilities.map((bullet, idx) => (
                            <div key={idx} className="card-bullet-item">
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="card-tags">
                          {proj.techStack.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {renderLinks(proj.links)}
                      </div>
                    </div>

                    <div className="featured-visual-side visual-side-peach">
                      <div style={{ width: '100%', maxWidth: '440px' }}>
                        <ProjectPreview
                          images={proj.images}
                          title={proj.title}
                          subtitle={proj.coreConcepts ? proj.coreConcepts.slice(0, 2).join(' · ') : ''}
                          accentColor={proj.accentColor}
                          onImageClick={(item) => setLightboxImage(item)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={proj.id}
                className={`bento-card col-6 card-tint-${proj.accentColor}`}
              >
                <div className="card-header-meta">
                  <span
                    className={`badge ${
                      proj.accentColor === 'sage'
                        ? 'badge-sage'
                        : proj.accentColor === 'lavender'
                        ? 'badge-lavender'
                        : 'badge-peach'
                    }`}
                  >
                    {proj.badgeText}
                  </span>
                  <span className="card-type-tag">{proj.type}</span>
                </div>

                {/* Integrated 16:9 Project Preview with Gallery & Zoom */}
                <ProjectPreview
                  images={proj.images}
                  imageSrc={`/images/projects/${proj.id}.png`}
                  title={proj.title}
                  subtitle={proj.coreConcepts ? proj.coreConcepts.slice(0, 2).join(' · ') : ''}
                  accentColor={proj.accentColor}
                  onImageClick={(item) => setLightboxImage(item)}
                />

                <h3 className="card-title">{proj.title}</h3>
                <div className="card-subtitle">{proj.subtitle}</div>
                <p className="card-description">{proj.description}</p>

                <div className="card-bullets">
                  {proj.keyCapabilities.map((bullet, idx) => (
                    <div key={idx} className="card-bullet-item">
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="card-tags">
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {renderLinks(proj.links)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reusable Lightbox for Project Screenshots */}
      <Lightbox
        isOpen={Boolean(lightboxImage)}
        onClose={() => setLightboxImage(null)}
        imageSrc={lightboxImage?.imageSrc}
        title={lightboxImage?.title}
        subtitle={lightboxImage?.subtitle}
        date={lightboxImage?.date}
      />
    </section>
  );
}
