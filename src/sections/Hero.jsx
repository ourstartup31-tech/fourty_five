import React, { useState, useEffect, useRef } from 'react';
import { companyConfig } from '../data/company';
import TrajectoryAnimation from '../components/TrajectoryAnimation';
import '../styles/hero.css';

/**
 * 45° HERO SECTION (FULL-BACKGROUND TRAJECTORY REDESIGN)
 * -------------------------------------------------------------
 * The signature 45° ascending trajectory spans the ENTIRE hero
 * background: dim but visible, fluid and continuous.
 *
 * Foreground features concise editorial typography:
 * - Headline: "IDEAS NEED THE RIGHT TRAJECTORY."
 * - Supporting: "Creative direction and technology, shaped around real business problems."
 * - Primary CTA: "Start a Conversation ↗"
 */
export default function Hero() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const timerRef = useRef([]);

  const mailtoUrl = `mailto:${companyConfig.contact.email}?subject=${companyConfig.contact.mailtoSubject}&body=${companyConfig.contact.mailtoBody}`;

  const startAnimation = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCurrentStage(4);
      setIsCompleted(true);
      return;
    }

    setCurrentStage(1);
    setIsCompleted(false);

    // Stage 2: SHAPE (at 1.5s)
    const t1 = setTimeout(() => {
      setCurrentStage(2);
    }, 1500);

    // Stage 3: CREATE (at 2.9s)
    const t2 = setTimeout(() => {
      setCurrentStage(3);
    }, 2900);

    // Stage 4: DELIVER (at 4.3s)
    const t3 = setTimeout(() => {
      setCurrentStage(4);
    }, 4300);

    // Settle & complete sequence (at 5.6s)
    const t4 = setTimeout(() => {
      setIsCompleted(true);
    }, 5600);

    timerRef.current = [t1, t2, t3, t4];
  };

  useEffect(() => {
    startAnimation();
    return () => {
      timerRef.current.forEach(clearTimeout);
    };
  }, []);

  const handleSkip = () => {
    timerRef.current.forEach(clearTimeout);
    setCurrentStage(4);
    setIsCompleted(true);
  };

  const handleReplay = () => {
    startAnimation();
  };

  return (
    <section className="hero-section" aria-label="Introduction">
      {/* Full-bleed Background Trajectory Animation (Covers Entire Hero) */}
      <div className="hero-backdrop-trajectory">
        <TrajectoryAnimation
          currentStage={currentStage}
          isCompleted={isCompleted}
          onReplay={handleReplay}
          onSkip={handleSkip}
        />
      </div>

      {/* Layered Color Fields (Warm Ivory with Soft Violet & Pale Blue Atmospheric Tint) */}
      <div className="hero-ambient-layer" aria-hidden="true">
        <div className="hero-ambient-tech"></div>
        <div className="hero-ambient-creative"></div>
      </div>

      <div className="container hero-container">
        {/* Main Hero Narrative (Crisp High-Contrast Foreground) */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-prefix" aria-hidden="true">45° //</span>
            <span>{companyConfig.hero.tag}</span>
          </div>

          <h1 className="hero-title">
            {companyConfig.hero.headline}
          </h1>

          <p className="hero-description">
            {companyConfig.hero.subtext}
          </p>

          <div className="hero-actions">
            <a href={mailtoUrl} className="btn-primary-action">
              <span>{companyConfig.hero.primaryCta}</span>
              <span className="arrow-45" aria-hidden="true">↗</span>
            </a>

            <a href="#domains" className="cue-secondary">
              <span>{companyConfig.hero.secondaryCue}</span>
              <span className="cue-icon" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* Editorial Footnote Strip */}
        <div className="hero-footer-bar" aria-label="Capabilities Summary">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Approach</span>
            <span className="hero-meta-value">
              <span className="meta-indicator-gold" aria-hidden="true">/</span>
              <span>Study before building</span>
            </span>
          </div>

          <div className="hero-meta-item">
            <span className="hero-meta-label">Dual Domains</span>
            <span className="hero-meta-value">
              <span className="meta-indicator-cobalt" aria-hidden="true">/</span>
              <span>Creative Direction &amp; Technology Systems</span>
            </span>
          </div>

          <div className="hero-meta-item">
            <span className="hero-meta-label">Continuous Trajectory</span>
            <span className="hero-meta-value">
              <span className="meta-indicator-violet" aria-hidden="true">/</span>
              <span>Origin → Study → Shape → Create → Deliver</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
