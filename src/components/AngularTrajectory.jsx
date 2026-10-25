import React from 'react';

/**
 * 45° ARCHITECTURAL DRAFTING DIAGRAM
 * -------------------------------------------------------------
 * A disciplined creative + technical vector diagram.
 * Integrates dual color-coded axes:
 * - Y-Axis (Creative / Brand / Outcome) in Warm Gold
 * - X-Axis (Technology / Systems / Process) in Technical Cyan
 * Uses thin hairlines, crosshairs, and orthogonal coordinate projections.
 */
export default function AngularTrajectory({ className = "" }) {
  return (
    <div className={`architectural-plate ${className}`} aria-hidden="true">
      {/* Plate Header Info */}
      <div className="plate-header">
        <span className="plate-id">FIG 01.1 // PERSPECTIVE COORDINATE</span>
        <span className="plate-scale">SCALE 1:1 / CREATIVE + TECH VECTOR</span>
      </div>

      <svg
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="architectural-svg"
      >
        <defs>
          {/* Subtle Hairline Grid Pattern */}
          <pattern id="draftingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.75" />
          </pattern>
        </defs>

        {/* Background Grid */}
        <rect width="440" height="440" fill="url(#draftingGrid)" />

        {/* Outer Architectural Border with Corner Crop Marks */}
        <rect x="20" y="20" width="400" height="400" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
        
        {/* Corner Registration Hairlines */}
        <path d="M 12 20 H 28 M 20 12 V 28" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.75" />
        <path d="M 412 20 H 428 M 420 12 V 28" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.75" />
        <path d="M 12 420 H 28 M 20 412 V 428" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.75" />
        <path d="M 412 420 H 428 M 420 412 V 428" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.75" />

        {/* --- HORIZONTAL AXIS (X): TECHNOLOGY / PROCESS (Technical Cyan) --- */}
        <line x1="50" y1="360" x2="395" y2="360" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.45" />
        {[120, 160, 200, 240, 280, 320, 360].map((pos) => (
          <line key={`x-${pos}`} x1={pos} y1="356" x2={pos} y2="364" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.6" />
        ))}

        {/* --- VERTICAL AXIS (Y): CREATIVE / BRAND (Warm Gold) --- */}
        <line x1="80" y1="390" x2="80" y2="45" stroke="#C8A96B" strokeWidth="1" strokeOpacity="0.45" />
        {[320, 280, 240, 200, 160, 120, 80].map((pos) => (
          <line key={`y-${pos}`} x1="76" y1={pos} x2="84" y2={pos} stroke="#C8A96B" strokeWidth="0.75" strokeOpacity="0.6" />
        ))}

        {/* Orthogonal Projection Guides */}
        {/* Drop to X-Axis (Technology/Process) in Cyan */}
        <line x1="340" y1="100" x2="340" y2="360" stroke="#38BDF8" strokeWidth="0.85" strokeDasharray="3 3" strokeOpacity="0.5" className="trajectory-projection-x" />
        {/* Drop to Y-Axis (Creative/Brand) in Gold */}
        <line x1="340" y1="100" x2="80" y2="100" stroke="#C8A96B" strokeWidth="0.85" strokeDasharray="3 3" strokeOpacity="0.5" className="trajectory-projection-y" />

        {/* Precision 45° Trajectory Vector Line (Animates into place on load) */}
        <line
          x1="80"
          y1="360"
          x2="340"
          y2="100"
          stroke="#F2F2F0"
          strokeWidth="1.5"
          className="trajectory-vector-line"
        />

        {/* Origin Reticle (+) */}
        <line x1="73" y1="360" x2="87" y2="360" stroke="#C8A96B" strokeWidth="1" />
        <line x1="80" y1="353" x2="80" y2="367" stroke="#38BDF8" strokeWidth="1" />

        {/* Endpoint Vector Node (Enters with scale & subtle living breathe) */}
        <g className="trajectory-endpoint-group">
          <circle cx="340" cy="100" r="3" fill="#38BDF8" />
          <circle cx="340" cy="100" r="6" stroke="#C8A96B" strokeWidth="0.75" className="trajectory-marker-pulse" />
        </g>

        {/* 45° Angular Arc Notation (Radius = 70px) */}
        <path
          d="M 150 360 A 70 70 0 0 0 129.5 310.5"
          fill="none"
          stroke="#C8A96B"
          strokeWidth="1"
          strokeDasharray="2 2"
          className="trajectory-arc"
        />

        {/* Architectural Technical Labels */}
        <text x="165" y="332" fill="#C8A96B" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="600" letterSpacing="0.05em">
          θ = 45.0°
        </text>

        <text x="80" y="382" fill="#676C78" fontSize="9" fontFamily="'Inter', sans-serif" letterSpacing="0.08em">
          ORIGIN [0, 0]
        </text>

        <text x="348" y="96" fill="#38BDF8" fontSize="9" fontFamily="'Inter', sans-serif" letterSpacing="0.08em" fontWeight="600">
          VECTOR P₁ [Δx = Δy]
        </text>

        <text x="395" y="375" fill="#38BDF8" fontSize="8.5" fontFamily="'Inter', sans-serif" textAnchor="end" letterSpacing="0.06em">
          X-AXIS [TECHNOLOGY / PROCESS]
        </text>

        <text x="70" y="52" fill="#C8A96B" fontSize="8.5" fontFamily="'Inter', sans-serif" textAnchor="end" letterSpacing="0.06em">
          Y-AXIS [CREATIVE / OUTCOME]
        </text>

        {/* Trajectory Slope Marker */}
        <text x="210" y="238" fill="rgba(242, 242, 240, 0.75)" fontSize="9" fontFamily="'Inter', sans-serif" transform="rotate(-45 210 238)" textAnchor="middle">
          TRAJECTORY SLOPE m = 1.000
        </text>
      </svg>
    </div>
  );
}
