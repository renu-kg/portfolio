import React, { useState } from 'react';
import { certificatesData } from '../data/portfolioData';
import Lightbox from './Lightbox';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="section certificates-section reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">07 · Credentials</div>
          <h2 className="section-title">Certificates & Credentials</h2>
          <p className="section-subtitle">
            Verified internship completions, industry certifications, and specialized workshop credentials.
          </p>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div
                className="certificate-thumbnail-wrapper"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedCert(cert);
                  }
                }}
                aria-label={`View certificate for ${cert.title}`}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-thumbnail"
                  loading="lazy"
                />
                <div className="thumbnail-zoom-hint">
                  <span>View 🔍</span>
                </div>
              </div>

              <div className="certificate-card-body">
                <div className="cert-meta-top">
                  <span className="cert-org">{cert.organization}</span>
                  {cert.year && <span className="cert-year">{cert.year}</span>}
                </div>

                <h3 className="certificate-title">{cert.title}</h3>

                {cert.date && (
                  <div className="cert-date-info">
                    <span>{cert.date}</span>
                  </div>
                )}

                <div className="cert-card-footer">
                  <button
                    className="view-cert-btn"
                    onClick={() => setSelectedCert(cert)}
                    aria-label={`Open certificate for ${cert.title}`}
                  >
                    View Certificate ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Selected Certificate */}
      <Lightbox
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        imageSrc={selectedCert?.image}
        title={selectedCert?.title}
        subtitle={selectedCert?.organization}
        date={selectedCert?.date || selectedCert?.year}
      />
    </section>
  );
}

