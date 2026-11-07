import React from 'react';
import { skillsGrouped } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-header">
          <div className="section-index">05 · Technical Skills</div>
          <h2 className="section-title">Core Competencies & Stack</h2>
          <p className="section-subtitle">
            Structured skill categories with primary emphasis on Java software development.
          </p>
        </div>

        <div className="skills-grid">
          {skillsGrouped.map((group) => (
            <div
              key={group.category}
              className={`skill-category-card ${group.isPrimary ? 'primary-category' : ''}`}
            >
              <div className="category-title-bar">
                <span className="category-name">{group.category}</span>
                {group.isPrimary && <span className="badge badge-lavender">Primary Language</span>}
              </div>

              {group.isPrimary && (
                <div className="java-hero-box">
                  <div className="java-hero-title">
                    <span>☕ Java</span>
                  </div>
                  <div className="java-hero-desc">
                    Core Java, Object-Oriented Design (OOP), Collections Framework, Exception Handling, Data Structures & Algorithms.
                  </div>
                </div>
              )}

              <div className="skill-tags-wrapper">
                {group.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className={`tech-tag ${group.isPrimary ? 'primary-emphasis' : ''}`}
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
