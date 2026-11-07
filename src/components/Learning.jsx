import React from 'react';
import { currentlyLearning } from '../data/portfolioData';

export default function Learning() {
  return (
    <section id="learning" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <div className="section-index">08 · Currently Learning</div>
          <h2 className="section-title">Active Areas of Focus</h2>
        </div>

        <div className="learning-cards-grid">
          {currentlyLearning.map((item, idx) => (
            <div key={idx} className="learning-card">
              <div className="learning-icon">{item.icon}</div>
              <h3 className="learning-topic">{item.topic}</h3>
              <p className="learning-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
