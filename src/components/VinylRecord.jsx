// 1.5× original dimensions
const SLEEVE = 420
const R = 210
const CX = 372
const CY = 210
const W = CX + R   // 582
const H = SLEEVE   // 420

// Groove radii scaled with R (same proportions as original)
const GROOVES = [195, 177, 159, 141, 123, 105, 87, 72]

function Disc() {
  return (
    <svg width={R * 2} height={R * 2} style={{ display: 'block' }}>
      <defs>
        <radialGradient id="vinylShine" cx="32%" cy="28%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.09" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={R} cy={R} r={R - 1} fill="#0a0a0a" />
      {GROOVES.map(r => (
        <circle key={r} cx={R} cy={R} r={r} fill="none" stroke="#1c1c1c" strokeWidth="2" />
      ))}
      {/* Enlarged yellow center label */}
      <circle cx={R} cy={R} r={70} fill="#FFB800" />
      <text x={R} y={R - 14} textAnchor="middle" fontSize="11" fill="white" fontFamily="Georgia, serif" fontStyle="italic">juliane</text>
      <text x={R} y={R + 3} textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.65)" fontFamily="system-ui, sans-serif" letterSpacing="1">GUO</text>
      <text x={R} y={R + 20} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui, sans-serif">2025</text>
      <circle cx={R} cy={R} r={8} fill="#050505" />
      <circle cx={R} cy={R} r={R - 1} fill="url(#vinylShine)" />
    </svg>
  )
}

export default function VinylRecord({ imageSrc }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: W, height: H }}>
      {/* Vinyl disc — behind sleeve */}
      <div
        className="absolute"
        style={{
          left: CX - R,
          top: CY - R,
          zIndex: 0,
          filter: 'drop-shadow(8px 6px 18px rgba(0,0,0,0.35))',
        }}
      >
        <Disc />
      </div>

      {/* Album sleeve — in front */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: 0,
          top: 0,
          width: SLEEVE,
          height: SLEEVE,
          zIndex: 10,
          borderRadius: 7,
          boxShadow: '8px 8px 24px rgba(0,0,0,0.18)',
        }}
      >
        <img
          src={imageSrc}
          alt="Album cover"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 22%' }}
        />
      </div>
    </div>
  )
}
