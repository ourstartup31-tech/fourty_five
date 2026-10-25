import React from 'react';
import { projectsData } from '../data/projects';
import '../styles/work.css';

/**
 * 45° SELECTED WORK SECTION
 * -------------------------------------------------------------
 * Displays curated experiments and placeholder case studies.
 *
 * NOTE: These tiles are clearly demarcated concept placeholders.
 * All data and image paths are centralized in `src/data/projects.js`.
 * To replace them with real client studies, update `src/data/projects.js`
 * and drop high-resolution assets into `/public/images/`.
 */
export default function SelectedWork() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-headline">
      <div className="container">
        {/* Section Header */}
        <div className="work-header">
          <div className="work-header-top">
            <div className="section-tag" aria-hidden="true">
              {projectsData.tag}
            </div>
            <div className="work-placeholder-notice" role="note">
              <span className="notice-dot"></span>
              <span>CONCEPT DEMONSTRATIONS (PLACEHOLDER ASSETS)</span>
            </div>
          </div>

          <h2 id="work-headline" className="work-headline">
            {projectsData.headline}
          </h2>

          <p className="work-subtext">
            {projectsData.subtext}
          </p>
        </div>

        {/* Project Tiles Grid */}
        <div className="projects-grid" role="list">
          {projectsData.projects.map((project) => (
            <article 
              key={project.id} 
              className={`project-card project-card-${project.theme}`} 
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              {/* Media Container with restrained zoom */}
              <div className="project-image-box">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="project-img"
                  loading="lazy"
                  width="720"
                  height="480"
                />
                
                {/* Domain & Placeholder Stamp */}
                <div className="project-stamp">
                  <span className="stamp-num">{project.number}</span>
                  <span className="stamp-domain">{project.domain}</span>
                </div>

                {project.isPlaceholder && (
                  <div className="project-watermark" aria-hidden="true">
                    PLACEHOLDER
                  </div>
                )}
              </div>

              {/* Information Body */}
              <div className="project-body">
                <div className="project-meta-row">
                  <span className="project-category">{project.category}</span>
                  <span className="project-client">{project.client}</span>
                </div>

                <h3 id={`project-title-${project.id}`} className="project-title">
                  {project.title}
                </h3>

                <p className="project-summary">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="project-tags" aria-label="Project disciplines">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Trajectory Link Cue */}
                <div className="project-action">
                  <span className="project-action-link">
                    <span>Inspect Study Trajectory</span>
                    <span className="arrow-45" aria-hidden="true">↗</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Asset Replacement Documentation Banner */}
        <div className="work-documentation-box" role="region" aria-label="Asset replacement guide">
          <div className="doc-icon" aria-hidden="true">45°</div>
          <div className="doc-text">
            <strong>Asset Replacement Guide:</strong> The images above are placeholder compositions generated for this visual-first layout. To mount real client work, drop assets into <code className="doc-code">/public/images/</code> and update the metadata array in <code className="doc-code">src/data/projects.js</code>.
          </div>
        </div>
      </div>
    </section>
  );
}
