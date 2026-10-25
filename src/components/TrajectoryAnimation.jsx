import React from 'react';

/**
 * 45° FULL-HERO BACKGROUND TRAJECTORY ANIMATION
 * -------------------------------------------------------------
 * Spans the entire Hero section in the background:
 * Dim but distinctly visible, layered beneath the foreground narrative.
 *
 * One continuous ascending trajectory launching from lower-left (ORIGIN)
 * at an exact 45° angle, traveling across the full width and height
 * of the hero canvas to the upper-right (DELIVER).
 *
 * Coordinates (viewBox: 0 0 1440 800):
 * - Origin:  (120, 680) [Lower-left, 45° initial launch]
 * - Study:   (380, 420) [Mid-left, Observation reticle]
 * - Shape:   (740, 340) [Center, Curvature adjustment]
 * - Create:  (1100, 220) [Upper-right center, Geometric constructs]
 * - Deliver: (1320, 120) [Upper-right destination, 45° wordmark settles]
 */
export default function TrajectoryAnimation({
  currentStage,
  isCompleted,
  onReplay,
  onSkip
}) {
  // Stroke dash offset calculation along the 1000-unit continuous path
  const getStrokeDashOffset = () => {
    if (isCompleted || currentStage >= 4) return 0;
    if (currentStage === 3) return 210;
    if (currentStage === 2) return 470;
    return 740; // Stage 1 (Study)
  };

  // Coordinates of the moving tracer beacon:
  const getMarkerCoords = () => {
    if (isCompleted || currentStage >= 4) return { x: 1320, y: 120 };
    if (currentStage === 3) return { x: 1100, y: 220 };
    if (currentStage === 2) return { x: 740, y: 340 };
    return { x: 380, y: 420 }; // Stage 1 (Study)
  };

  const tracerPos = getMarkerCoords();

  const stages = [
    {
      id: 1,
      num: "01",
      name: "STUDY",
      phrase: "Observe what is real",
      cue: "Problem baseline & investigation",
      color: "var(--color-cobalt)"
    },
    {
      id: 2,
      num: "02",
      name: "SHAPE",
      phrase: "Determine the trajectory",
      cue: "Directional alignment before building",
      color: "var(--color-violet-deep)"
    },
    {
      id: 3,
      num: "03",
      name: "CREATE",
      phrase: "Build what works",
      cue: "System craft & restrained engineering",
      color: "var(--color-gold-deep)"
    },
    {
      id: 4,
      num: "04",
      name: "DELIVER",
      phrase: "Launch into reality",
      cue: "Tested in live operational reality",
      color: "var(--color-ink)"
    }
  ];

  const activeStage = stages[Math.min(currentStage - 1, 3)];

  return (
    <div className={`fullhero-trajectory-wrapper ${isCompleted ? 'is-settled' : `active-stage-${currentStage}`}`}>
      {/* Full-bleed Background SVG Canvas */}
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fullhero-trajectory-svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle architectural drafting grid texture */}
          <pattern id="fullHeroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(32, 38, 51, 0.03)" strokeWidth="0.75" />
          </pattern>

          {/* Tracer Beacon Glow Filter */}
          <filter id="fullHeroTracerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#4269B2" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Background Grid Pattern across entire canvas */}
        <rect width="1440" height="800" fill="url(#fullHeroGrid)" />

        {/* Outer Architectural Crop Marks */}
        <path d="M 40 50 H 70 M 50 40 V 70" stroke="rgba(32, 38, 51, 0.15)" strokeWidth="0.8" />
        <path d="M 1370 50 H 1400 M 1390 40 V 70" stroke="rgba(32, 38, 51, 0.15)" strokeWidth="0.8" />
        <path d="M 40 750 H 70 M 50 740 V 770" stroke="rgba(32, 38, 51, 0.15)" strokeWidth="0.8" />
        <path d="M 1370 750 H 1400 M 1390 740 V 770" stroke="rgba(32, 38, 51, 0.15)" strokeWidth="0.8" />

        {/* -------------------------------------------------------------
            STAGE 0: ORIGIN (120, 680) - 45° INITIAL LAUNCH
           ------------------------------------------------------------- */}
        <g className="origin-backdrop-group">
          {/* Origin coordinate lines */}
          <line x1="60" y1="680" x2="220" y2="680" stroke="#202633" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="120" y1="740" x2="120" y2="580" stroke="#202633" strokeWidth="1" strokeOpacity="0.25" />

          {/* Mathematical 45° Launch Arc */}
          <path
            d="M 170 680 A 50 50 0 0 0 155.35 644.64"
            fill="none"
            stroke="#D5A85C"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            strokeOpacity="0.6"
          />
          <text x="182" y="665" fill="#997129" fontSize="10" fontFamily="'Inter', sans-serif" fontWeight="700">
            45° LAUNCH
          </text>

          {/* Origin Node */}
          <circle cx="120" cy="680" r="5" fill="#202633" fillOpacity="0.5" />
          <text x="120" y="705" fill="#5A6478" fontSize="10" fontFamily="'Inter', sans-serif" fontWeight="700" textAnchor="middle">
            ORIGIN
          </text>
        </g>

        {/* -------------------------------------------------------------
            CONTINUOUS FULL-HERO TRAJECTORY PATH
            Sweeps continuously from (120, 680) to (1320, 120)
           ------------------------------------------------------------- */}
        {/* Subtle Background Guide Path */}
        <path
          d="M 120 680 L 380 420 C 500 300, 600 340, 740 340 C 900 340, 980 260, 1100 220 C 1200 180, 1260 120, 1320 120"
          fill="none"
          stroke="rgba(32, 38, 51, 0.12)"
          strokeWidth="2.5"
          strokeDasharray="5 5"
        />

        {/* Active Traveling Trajectory Path (Dim but distinctly visible) */}
        <path
          d="M 120 680 L 380 420 C 500 300, 600 340, 740 340 C 900 340, 980 260, 1100 220 C 1200 180, 1260 120, 1320 120"
          fill="none"
          stroke="#202633"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.38"
          className="backdrop-draw-line"
          pathLength="1000"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: getStrokeDashOffset()
          }}
        />

        {/* Secondary Warm Gold Accent Hairline */}
        <path
          d="M 120 680 L 380 420 C 500 300, 600 340, 740 340 C 900 340, 980 260, 1100 220 C 1200 180, 1260 120, 1320 120"
          fill="none"
          stroke="#D5A85C"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeOpacity="0.5"
          pathLength="1000"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: getStrokeDashOffset()
          }}
        />

        {/* -------------------------------------------------------------
            STAGE 1: STUDY (380, 420)
           ------------------------------------------------------------- */}
        <g className={`backdrop-stage-group stage-1-group ${currentStage >= 1 ? 'activated' : ''}`}>
          {/* Observation Crosshairs & Concentric Reticle */}
          <line x1="340" y1="420" x2="420" y2="420" stroke="#4269B2" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity={currentStage >= 1 ? "0.45" : "0.15"} />
          <line x1="380" y1="380" x2="380" y2="460" stroke="#4269B2" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity={currentStage >= 1 ? "0.45" : "0.15"} />
          <circle cx="380" cy="420" r="16" stroke="#4269B2" strokeWidth="0.8" strokeOpacity={currentStage >= 1 ? "0.35" : "0.1"} />
          
          {/* Stage Node */}
          <circle cx="380" cy="420" r={currentStage === 1 ? "6.5" : "4.5"} fill="#4269B2" fillOpacity={currentStage >= 1 ? "0.85" : "0.3"} />

          {/* Architectural Stage Label */}
          <g transform="translate(380, 462)">
            <text x="0" y="0" fill="#4269B2" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="800" textAnchor="middle" fillOpacity={currentStage >= 1 ? "0.85" : "0.35"}>
              01 STUDY
            </text>
            <text x="0" y="14" fill="#5A6478" fontSize="8.5" fontFamily="'Inter', sans-serif" fontWeight="600" textAnchor="middle" className="backdrop-phrase-reveal">
              Observe what is real
            </text>
          </g>
        </g>

        {/* -------------------------------------------------------------
            STAGE 2: SHAPE (740, 340) - Curvature Inflection
           ------------------------------------------------------------- */}
        <g className={`backdrop-stage-group stage-2-group ${currentStage >= 2 ? 'activated' : ''}`}>
          {/* Direction Tangent Guide */}
          <path
            d="M 700 365 Q 740 340 790 325"
            fill="none"
            stroke="#685294"
            strokeWidth="0.8"
            strokeDasharray="4 3"
            strokeOpacity={currentStage >= 2 ? "0.45" : "0.15"}
          />
          <circle cx="740" cy="340" r="14" stroke="#685294" strokeWidth="0.8" strokeOpacity={currentStage >= 2 ? "0.35" : "0.1"} />

          {/* Stage Node */}
          <circle cx="740" cy="340" r={currentStage === 2 ? "6.5" : "4.5"} fill="#685294" fillOpacity={currentStage >= 2 ? "0.85" : "0.3"} />

          {/* Architectural Stage Label */}
          <g transform="translate(740, 298)">
            <text x="0" y="0" fill="#685294" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="800" textAnchor="middle" fillOpacity={currentStage >= 2 ? "0.85" : "0.35"}>
              02 SHAPE
            </text>
            <text x="0" y="14" fill="#5A6478" fontSize="8.5" fontFamily="'Inter', sans-serif" fontWeight="600" textAnchor="middle" className="backdrop-phrase-reveal">
              Determine the trajectory
            </text>
          </g>
        </g>

        {/* -------------------------------------------------------------
            STAGE 3: CREATE (1100, 220) - Geometric Fragments
           ------------------------------------------------------------- */}
        <g className={`backdrop-stage-group stage-3-group ${currentStage >= 3 ? 'activated' : ''}`}>
          {/* Abstract Construct Fragments */}
          <g transform="translate(1100, 220)">
            <rect x="-18" y="-18" width="14" height="14" fill="#DCD5F0" stroke="#685294" strokeWidth="0.8" transform="rotate(45)" opacity={currentStage >= 3 ? "0.7" : "0.2"} />
            <polygon points="16,-10 28,-22 28,2" fill="#DCE6F5" stroke="#4269B2" strokeWidth="0.8" opacity={currentStage >= 3 ? "0.7" : "0.2"} />
          </g>

          <circle cx="1100" cy="220" r="14" stroke="#D5A85C" strokeWidth="0.8" strokeOpacity={currentStage >= 3 ? "0.4" : "0.1"} />

          {/* Stage Node */}
          <circle cx="1100" cy="220" r={currentStage === 3 ? "6.5" : "4.5"} fill="#D5A85C" fillOpacity={currentStage >= 3 ? "0.85" : "0.3"} />

          {/* Architectural Stage Label */}
          <g transform="translate(1100, 268)">
            <text x="0" y="0" fill="#997129" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="800" textAnchor="middle" fillOpacity={currentStage >= 3 ? "0.85" : "0.35"}>
              03 CREATE
            </text>
            <text x="0" y="14" fill="#5A6478" fontSize="8.5" fontFamily="'Inter', sans-serif" fontWeight="600" textAnchor="middle" className="backdrop-phrase-reveal">
              Build what works
            </text>
          </g>
        </g>

        {/* -------------------------------------------------------------
            STAGE 4: DELIVER (1320, 120) - 45° Wordmark Settles
           ------------------------------------------------------------- */}
        <g className={`backdrop-stage-group stage-4-group ${currentStage >= 4 ? 'activated' : ''}`}>
          {/* Destination Pulsing Rings */}
          <circle cx="1320" cy="120" r="22" stroke="#D5A85C" strokeWidth="1.2" strokeDasharray="3 3" className="backdrop-destination-pulse" />
          <circle cx="1320" cy="120" r="12" stroke="#202633" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Final Destination Node */}
          <circle cx="1320" cy="120" r={currentStage >= 4 ? "7" : "4.5"} fill="#202633" fillOpacity={currentStage >= 4 ? "0.85" : "0.3"} />
          <circle cx="1320" cy="120" r="2.5" fill="#D5A85C" />

          {/* 45° Wordmark Lock-in at Destination */}
          <g className="backdrop-deliver-mark" transform="translate(1320, 80)">
            <text x="0" y="0" fill="#202633" fontSize="16" fontFamily="'Syne', sans-serif" fontWeight="800" textAnchor="middle">
              45°
            </text>
          </g>

          {/* Architectural Stage Label */}
          <g transform="translate(1320, 162)">
            <text x="0" y="0" fill="#202633" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="800" textAnchor="middle" fillOpacity={currentStage >= 4 ? "0.9" : "0.35"}>
              04 DELIVER
            </text>
            <text x="0" y="14" fill="#5A6478" fontSize="8.5" fontFamily="'Inter', sans-serif" fontWeight="600" textAnchor="middle" className="backdrop-phrase-reveal">
              Launch into reality
            </text>
          </g>
        </g>

        {/* -------------------------------------------------------------
            TRAVELING TRACER BEACON
            Visibly glides along the continuous full-hero trajectory
           ------------------------------------------------------------- */}
        <g
          className="backdrop-traveling-tracer"
          style={{
            transform: `translate(${tracerPos.x}px, ${tracerPos.y}px)`
          }}
        >
          <circle cx="0" cy="0" r="18" stroke="#4269B2" strokeWidth="1.5" strokeOpacity="0.35" className="tracer-halo-ring" />
          <circle cx="0" cy="0" r="6" fill="#202633" filter="url(#fullHeroTracerGlow)" />
          <circle cx="0" cy="0" r="2.5" fill="#D5A85C" />
        </g>
      </svg>

      {/* Floating Hero Playback & Stage Status Controller */}
      <div className="hero-floating-controller">
        <div className="controller-meta">
          <span className="controller-badge" style={{ backgroundColor: activeStage.color }}>
            STAGE {activeStage.num}
          </span>
          <span className="controller-name">{activeStage.name}</span>
          <span className="controller-divider" aria-hidden="true">—</span>
          <span className="controller-phrase">“{activeStage.phrase}”</span>
        </div>

        <div className="controller-actions">
          {!isCompleted ? (
            <button
              type="button"
              className="btn-controller-action"
              onClick={onSkip}
              aria-label="Skip opening trajectory animation"
            >
              <span>Skip Animation</span>
              <span aria-hidden="true">↷</span>
            </button>
          ) : (
            <button
              type="button"
              className="btn-controller-action"
              onClick={onReplay}
              aria-label="Replay trajectory animation"
            >
              <span>Replay Trajectory</span>
              <span aria-hidden="true">↺</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
