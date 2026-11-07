import React, { useState } from 'react';
import { artSectionData } from '../data/portfolioData';
import Lightbox from './Lightbox';

export default function ArtSection() {
  const [activeArtwork, setActiveArtwork] = useState(null);

  return (
    <section id="art" className="section art-section-container reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">09 · Off the Screen</div>
          <h2 className="section-title">{artSectionData.subtitle}</h2>
          <p className="section-subtitle">{artSectionData.description}</p>
        </div>

        {artSectionData.quote && (
          <div className="art-quote-box">
            "{artSectionData.quote}"
          </div>
        )}

        {/* Prominent 2-Image Gallery for Desktop / Stacked on Mobile */}
        {artSectionData.artworks && artSectionData.artworks.length > 0 && (
          <div className="art-grid-two">
            {artSectionData.artworks.map((art) => (
              <div
                key={art.id}
                className="art-card-real"
                onClick={() => setActiveArtwork(art)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveArtwork(art);
                  }
                }}
                aria-label={`View full size of ${art.title}`}
              >
                <div className="art-image-frame-prominent">
                  <img
                    src={art.image}
                    alt={art.title}
                    onError={(e) => {
                      if (art.image.endsWith('.jpeg')) {
                        e.target.src = art.image.replace('.jpeg', '.jpg');
                      } else if (art.image.endsWith('.jpg')) {
                        e.target.src = art.image.replace('.jpg', '.png');
                      }
                    }}
                  />
                </div>
                <div className="art-card-info">
                  <div className="art-title">{art.title}</div>
                  <div className="art-medium">{art.medium}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <a
            href={artSectionData.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Explore my art →
          </a>
        </div>
      </div>

      {/* Reusable Lightbox for Artwork */}
      <Lightbox
        isOpen={Boolean(activeArtwork)}
        onClose={() => setActiveArtwork(null)}
        imageSrc={activeArtwork?.image}
        title={activeArtwork?.title}
        subtitle={activeArtwork?.medium}
      />
    </section>
  );
}
