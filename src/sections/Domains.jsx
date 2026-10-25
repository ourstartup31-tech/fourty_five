import React from 'react';
import { domainsData } from '../data/domains';
import '../styles/domains.css';

/**
 * 45° TWO DOMAINS SECTION
 * -------------------------------------------------------------
 * Visual showcase of 45°'s two core disciplines:
 * 1. Creative Direction & Brand (Violet & Warm Gold)
 * 2. Technology & Business Systems (Pale Blue & Cobalt)
 *
 * Implements large image-led compositions, restrained hover zoom,
 * and minimal editorial typography.
 */
export default function Domains() {
  const { creative, technology } = domainsData;

  return (
    <section id="domains" className="domains-section" aria-labelledby="domains-headline">
      <div className="container">
        {/* Section Header */}
        <div className="domains-header">
          <div className="section-tag" aria-hidden="true">
            {domainsData.tag}
          </div>
          <h2 id="domains-headline" className="domains-headline">
            {domainsData.headline}
          </h2>
          <p className="domains-subtext">
            {domainsData.subtext}
          </p>
        </div>

        {/* Domain Showcases */}
        <div className="domains-grid">
          {/* Creative / Brand Domain */}
          <article className="domain-card domain-creative" aria-labelledby="creative-title">
            <div className="domain-image-wrap">
              <img
                src={creative.imageSrc}
                alt={creative.imageAlt}
                className="domain-img"
                loading="lazy"
                width="800"
                height="533"
              />
              <div className="domain-badge domain-badge-creative">
                <span className="domain-badge-dot"></span>
                <span>Creative Direction</span>
              </div>
            </div>

            <div className="domain-content">
              <div className="domain-meta">
                <span className="domain-index">01.A</span>
                <span className="domain-tagline">{creative.tag}</span>
              </div>

              <h3 id="creative-title" className="domain-title">
                {creative.headline}
              </h3>

              <p className="domain-desc">
                {creative.description}
              </p>

              <div className="domain-capabilities">
                <span className="capabilities-label">Selected Capabilities</span>
                <ul className="capabilities-list">
                  {creative.capabilities.map((cap, idx) => (
                    <li key={idx} className="capability-item">
                      <span className="cap-mark" aria-hidden="true">/</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="domain-action">
                <a href="#work" className="domain-link domain-link-creative">
                  <span>View Creative Studies</span>
                  <span className="arrow-45" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>

          {/* Technology / Systems Domain */}
          <article className="domain-card domain-tech" aria-labelledby="tech-title">
            <div className="domain-image-wrap">
              <img
                src={technology.imageSrc}
                alt={technology.imageAlt}
                className="domain-img"
                loading="lazy"
                width="800"
                height="533"
              />
              <div className="domain-badge domain-badge-tech">
                <span className="domain-badge-dot"></span>
                <span>Systems & Technology</span>
              </div>
            </div>

            <div className="domain-content">
              <div className="domain-meta">
                <span className="domain-index">01.B</span>
                <span className="domain-tagline">{technology.tag}</span>
              </div>

              <h3 id="tech-title" className="domain-title">
                {technology.headline}
              </h3>

              <p className="domain-desc">
                {technology.description}
              </p>

              <div className="domain-capabilities">
                <span className="capabilities-label">Selected Capabilities</span>
                <ul className="capabilities-list">
                  {technology.capabilities.map((cap, idx) => (
                    <li key={idx} className="capability-item">
                      <span className="cap-mark" aria-hidden="true">/</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="domain-action">
                <a href="#work" className="domain-link domain-link-tech">
                  <span>View System Studies</span>
                  <span className="arrow-45" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
