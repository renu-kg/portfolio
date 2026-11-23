import React from 'react';
import { currentlyLearning } from '../data/portfolioData';

export default function Learning() {
  return (
    <section id="learning" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">08 · Currently Learning</div>
          <h2 className="section-title">Active Areas of Focus</h2>
          <p className="section-subtitle">
            Current technical explorations and skills I am actively deepening through my internship, academic projects, and continuous practice.
          </p>
        </div>

        <div className="learning-bento-grid">
          {currentlyLearning.map((item) => (
            <div
              key={item.id || item.topic}
              className={`learning-focus-card ${item.featured ? 'focus-card-featured' : ''} card-tint-${item.badgeColor || 'lavender'}`}
            >
              <div className="focus-card-header">
                <div className={`focus-icon-frame focus-icon-${item.badgeColor || 'lavender'}`}>
                  <span>{item.icon}</span>
                </div>
                {item.badgeText && (
                  <span className={`badge badge-${item.badgeColor || 'lavender'}`}>
                    {item.badgeText}
                  </span>
                )}
              </div>

              <div>
                <h3 className="focus-card-title">{item.topic}</h3>
                <p className="focus-card-desc">{item.description}</p>
              </div>

              {item.tags && item.tags.length > 0 && (
                <div className="focus-card-tags">
                  {item.tags.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
