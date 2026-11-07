import React, { useState } from 'react';
import { experienceEntries } from '../data/portfolioData';
import Lightbox from './Lightbox';

export default function Experience() {
  const [activeCert, setActiveCert] = useState(null);

  const renderLinks = (exp) => {
    const { links, certificateImage, certificateTitle, organization, duration } = exp;
    const hasExternal = links && (links.github || links.linkedin || links.demo);
    const hasCert = Boolean(certificateImage);

    if (!hasExternal && !hasCert) return null;

    return (
      <div className="card-actions" style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        {hasCert && (
          <button
            type="button"
            className="view-cert-link"
            onClick={() =>
              setActiveCert({
                image: certificateImage,
                title: certificateTitle || `${organization} Certificate`,
                subtitle: organization,
                date: duration
              })
            }
            aria-label={`View Certificate for ${exp.role} at ${organization}`}
          >
            View Certificate ↗
          </button>
        )}

        {links?.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="card-link">
            GitHub ↗
          </a>
        )}
        {links?.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            aria-label={`View LinkedIn post for ${exp.role} at ${exp.organization}`}
          >
            View LinkedIn Post ↗
          </a>
        )}
        {links?.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="card-link">
            Live Demo ↗
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="experience" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">04 · Experience</div>
          <h2 className="section-title">Internships & Leadership</h2>
          <p className="section-subtitle">
            Hands-on roles mentoring interns, training in generative AI, and developing responsive web applications.
          </p>
        </div>

        <div className="timeline-list">
          {experienceEntries.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <div className="timeline-org">{exp.organization}</div>
                  <h3 className="timeline-role">{exp.role}</h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span
                    className={`badge ${
                      exp.badgeColor === 'sage'
                        ? 'badge-sage'
                        : exp.badgeColor === 'blue'
                        ? 'badge-blue'
                        : 'badge-lavender'
                    }`}
                  >
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="timeline-bullets" style={{ marginBottom: 0 }}>
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="timeline-bullet">
                    {resp}
                  </div>
                ))}
              </div>

              {renderLinks(exp)}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Internship Certificate */}
      <Lightbox
        isOpen={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
        imageSrc={activeCert?.image}
        title={activeCert?.title}
        subtitle={activeCert?.subtitle}
        date={activeCert?.date}
      />
    </section>
  );
}
