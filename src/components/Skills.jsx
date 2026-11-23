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
            Structured skill categories with primary emphasis on Java software development, enterprise systems, and AI workflows.
          </p>
        </div>

        <div className="skills-cards-grid">
          {skillsGrouped.map((group) => (
            <div
              key={group.category}
              className={`skill-category-card ${group.isPrimary ? 'primary-category-card' : ''}`}
            >
              <div className="skill-card-header">
                <div className="skill-card-title-group">
                  <span className="skill-category-icon">{group.icon}</span>
                  <h3 className="skill-category-title">{group.category}</h3>
                </div>
                {group.isPrimary && (
                  <span className="badge badge-lavender">Primary Focus</span>
                )}
              </div>

              <div className="skill-tags-flex">
                {group.skills.map((skill) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillIcon = typeof skill === 'object' ? skill.icon : null;
                  const isPrimary = typeof skill === 'object' && skill.isPrimary;

                  return (
                    <span
                      key={skillName}
                      className={`skill-badge ${isPrimary ? 'skill-badge-primary' : ''}`}
                    >
                      {skillIcon && <span className="skill-badge-icon">{skillIcon}</span>}
                      <span className="skill-badge-text">{skillName}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
