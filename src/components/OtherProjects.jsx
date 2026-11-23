import React, { useState } from 'react';
import { categorizedOtherProjects } from '../data/portfolioData';
import ProjectPreview from './ProjectPreview';
import Lightbox from './Lightbox';

export default function OtherProjects() {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'All', count: 12 },
    { key: 'ai-dl-generative', label: 'AI & Deep Learning', count: 2 },
    { key: 'algorithms-systems', label: 'Algorithms & Systems', count: 3 },
    { key: 'web-interactive', label: 'Web Utilities', count: 7 }
  ];

  const visibleCategories = activeCategory === 'all'
    ? categorizedOtherProjects
    : categorizedOtherProjects.filter((c) => c.categoryKey === activeCategory);

  const renderLinks = (links) => {
    if (!links) return null;
    const { github, demo, linkedin } = links;
    if (!github && !demo && !linkedin) return null;

    return (
      <div className="card-actions" style={{ marginTop: '8px' }}>
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
            Compact overview of deep learning backends, algorithmic systems, and web utilities.
          </p>
        </div>

        {/* Filter Pills for quick categorization and minimal height */}
        <div className="other-filter-pills">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              className={`filter-pill ${activeCategory === opt.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(opt.key)}
            >
              {opt.label} <span style={{ opacity: 0.65 }}>({opt.count})</span>
            </button>
          ))}
        </div>

        <div className="other-categories-stack">
          {visibleCategories.map((cat) => (
            <div key={cat.categoryKey} className="other-category-block">
              <h3 className="other-category-title">
                <span className="brand-dot" style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--text-primary)', marginRight: '6px' }}></span>
                {cat.categoryTitle}
              </h3>

              <div className="other-projects-grid">
                {cat.projects.map((proj) => (
                  <div key={proj.id} className="other-project-card">
                    <div>
                      <h4 className="other-card-title">{proj.title}</h4>
                      <p className="other-card-description">{proj.description}</p>
                    </div>

                    {proj.images && proj.images.length > 0 && (
                      <div style={{ marginTop: '8px', marginBottom: '6px' }}>
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
                      <div className="card-tags" style={{ marginTop: '6px' }}>
                        {proj.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {renderLinks(proj.links)}

                      {proj.taskLinks && proj.taskLinks.length > 0 && (
                        <div className="card-actions" style={{ marginTop: '8px', flexWrap: 'wrap' }}>
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
