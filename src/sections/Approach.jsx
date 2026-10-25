import React, { useState, useEffect, useRef } from 'react';
import { approachData } from '../data/approach';
import '../styles/approach.css';

/**
 * 45° METHODOLOGY SECTION
 * -------------------------------------------------------------
 * Demonstrates WHY and HOW 45° operates:
 * Study → Shape → Create → Deliver
 *
 * Employs a restrained scroll-triggered reveal via a single-fire
 * IntersectionObserver that disconnects once triggered.
 */
export default function Approach() {
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Graceful fallback if IntersectionObserver is not available
    if (!('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Disconnect immediately after reveal to avoid ongoing overhead
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="methodology" 
      ref={sectionRef}
      className={`approach-section ${isRevealed ? 'is-revealed' : ''}`} 
      aria-labelledby="methodology-headline"
    >
      {/* Anchor alias for approach */}
      <span id="approach" className="section-anchor-alias" aria-hidden="true"></span>

      <div className="container">
        {/* Section Header */}
        <div className="approach-header">
          <div className="section-tag" aria-hidden="true">
            {approachData.tag}
          </div>

          <h2 id="methodology-headline" className="approach-headline">
            {approachData.headline}
          </h2>

          <p className="approach-subtext">
            {approachData.subtext}
          </p>
        </div>

        {/* Continuous Trajectory Track */}
        <div className="methodology-trajectory-track" aria-hidden="true">
          <div className="trajectory-wire"></div>
          <div className="trajectory-wire-nodes">
            <div className="wire-node-step origin">
              <span className="node-bullet"></span>
              <span className="node-title">ORIGIN</span>
            </div>
            <div className="wire-node-step">
              <span className="node-bullet bullet-study"></span>
              <span className="node-title">01 STUDY</span>
            </div>
            <div className="wire-node-step">
              <span className="node-bullet bullet-shape"></span>
              <span className="node-title">02 SHAPE</span>
            </div>
            <div className="wire-node-step">
              <span className="node-bullet bullet-create"></span>
              <span className="node-title">03 CREATE</span>
            </div>
            <div className="wire-node-step">
              <span className="node-bullet bullet-deliver"></span>
              <span className="node-title">04 DELIVER</span>
            </div>
          </div>
        </div>

        {/* The Four Operational Phases Matrix */}
        <div className="phases-grid" role="list" aria-label="Four Operational Phases">
          {approachData.phases.map((item) => (
            <div 
              key={item.number} 
              className={`phase-card phase-card-${item.theme}`} 
              role="listitem"
            >
              <div className="phase-card-top">
                <div className="phase-coord">
                  <span className="phase-stage-tag">STAGE</span>
                  <span className="phase-num">{item.number}</span>
                </div>

                <h3 className="phase-name">{item.phase}</h3>
                <p className="phase-label">{item.label}</p>
                <p className="phase-desc">{item.summary}</p>
              </div>

              <div className="phase-bottom">
                <div className="phase-badge-pill" style={{ color: item.badgeColor }}>
                  <span className="badge-marker" aria-hidden="true">/</span>
                  <span>Phase {item.number} Complete</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dual-Track Architectural Comparison Plate */}
        <div className="dual-track-plate" aria-labelledby="dual-track-note">
          <div className="dual-track-header">
            <span id="dual-track-note" className="dual-track-note">
              {approachData.dualTrack.note}
            </span>
            <p className="dual-track-summary">
              Different mediums solving the same problem: moving from observation to concrete delivery without unnecessary process.
            </p>
          </div>

          <div className="dual-pipelines">
            {approachData.dualTrack.tracks.map((track, trackIdx) => (
              <div key={trackIdx} className={`pipeline-row pipeline-${track.theme}`}>
                <div className="pipeline-meta">
                  <h4 className="pipeline-domain">{track.domain}</h4>
                </div>

                <div className="pipeline-flow" aria-label={`${track.domain} pipeline`}>
                  {track.steps.map((step, stepIdx) => {
                    const isOrigin = stepIdx === 0;
                    const isOutcome = stepIdx === track.steps.length - 1;
                    const stepClass = isOrigin ? 'origin' : isOutcome ? 'outcome' : '';

                    return (
                      <React.Fragment key={stepIdx}>
                        <span className={`flow-step ${stepClass}`}>
                          {step}
                        </span>
                        {stepIdx < track.steps.length - 1 && (
                          <span className="flow-arrow" aria-hidden="true">→</span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
