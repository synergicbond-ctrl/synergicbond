import React from "react";

export function PolymerChainVisual() {
  return (
    <svg
      viewBox="0 0 900 290"
      role="img"
      aria-label="Stylised polymer chain showing monomers joining into a macromolecule"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="chainStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#fb7185" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="900" height="290" rx="28" fill="#070b17" />
      <g opacity="0.3">
        {Array.from({ length: 18 }).map((_, i) => (
          <circle key={i} cx={35 + i * 51} cy={34 + ((i * 37) % 210)} r="2" fill="#67e8f9" />
        ))}
      </g>
      <path
        d="M65 150 C130 55 205 245 280 145 S430 55 510 150 S665 245 830 135"
        fill="none"
        stroke="url(#chainStroke)"
        strokeWidth="9"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      {[85, 170, 260, 350, 445, 545, 645, 745, 825].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={i % 2 ? 105 : 185} r="26" fill="#0f172a" stroke={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#fb7185"} strokeWidth="4" />
          <text x={x} y={(i % 2 ? 105 : 185) + 7} textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">
            {i % 2 ? "CH" : "CH₂"}
          </text>
        </g>
      ))}
      <text x="55" y="45" fill="#a5f3fc" fontSize="18" fontWeight="700">MONOMER LOGIC</text>
      <text x="55" y="70" fill="#cbd5e1" fontSize="16">structure → architecture → morphology → property</text>
      <text x="680" y="260" fill="#ddd6fe" fontSize="18" fontWeight="700">MACROMOLECULAR CHAIN</text>
    </svg>
  );
}


function PolymerArchitectureVisual() {
  return (
    <svg viewBox="0 0 560 300" role="img" aria-label="Linear, branched and cross-linked polymer architectures" className="h-auto w-full">
      <defs>
        <linearGradient id="archLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.52" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#f472b6" />
        </linearGradient>
        <filter id="archGlow"><feGaussianBlur stdDeviation="3.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <rect width="560" height="300" rx="28" fill="#050914" />
      <text x="28" y="35" fill="#e2e8f0" fontSize="18" fontWeight="800">CHAIN ARCHITECTURE</text>
      <g fill="none" stroke="url(#archLine)" strokeWidth="7" strokeLinecap="round" filter="url(#archGlow)">
        <path d="M42 82 C88 44 130 119 178 78 S266 117 312 76" />
        <path d="M42 158 C86 118 130 196 178 153 S267 195 312 150" />
        <path d="M108 143 C112 122 121 105 138 90" stroke="#fbbf24" />
        <path d="M218 171 C222 193 236 211 255 224" stroke="#34d399" />
        <path d="M365 72 C406 42 447 116 518 70 M365 129 C410 92 456 167 518 122 M365 192 C407 152 459 229 518 185 M387 61 L395 207 M452 77 L463 211 M501 62 L493 200" />
      </g>
      <text x="42" y="115" fill="#67e8f9" fontSize="15" fontWeight="700">LINEAR</text>
      <text x="42" y="238" fill="#f9a8d4" fontSize="15" fontWeight="700">BRANCHED</text>
      <text x="366" y="245" fill="#c4b5fd" fontSize="15" fontWeight="700">CROSS-LINKED</text>
      <text x="42" y="270" fill="#94a3b8" fontSize="13">Packing and connectivity determine density, elasticity and melt flow.</text>
    </svg>
  );
}

function ThermalBehaviourVisual() {
  return (
    <svg viewBox="0 0 560 300" role="img" aria-label="Thermoplastic and thermoset behaviour on heating" className="h-auto w-full">
      <defs>
        <linearGradient id="heatFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#fb7185" />
        </linearGradient>
      </defs>
      <rect width="560" height="300" rx="28" fill="#050914" />
      <text x="28" y="35" fill="#e2e8f0" fontSize="18" fontWeight="800">RESPONSE TO HEAT</text>
      <g>
        <rect x="34" y="64" width="218" height="168" rx="22" fill="#081425" stroke="#22d3ee" strokeOpacity="0.45" />
        <rect x="308" y="64" width="218" height="168" rx="22" fill="#160b18" stroke="#fb7185" strokeOpacity="0.45" />
        <path d="M65 125 C93 93 119 155 149 120 S202 151 226 116 M65 169 C94 138 120 198 151 165 S203 196 226 160" fill="none" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" />
        <path d="M341 113 C371 82 398 143 429 109 S478 143 497 105 M341 169 C371 135 399 199 430 164 S479 197 497 160 M365 96 L371 183 M418 99 L425 182 M473 95 L477 180" fill="none" stroke="#fb7185" strokeWidth="5" strokeLinecap="round" />
        <path d="M113 246 C121 229 137 229 145 246 C152 260 143 275 129 275 C115 275 106 260 113 246Z" fill="url(#heatFill)" />
        <path d="M387 246 C395 229 411 229 419 246 C426 260 417 275 403 275 C389 275 380 260 387 246Z" fill="url(#heatFill)" />
        <text x="143" y="91" textAnchor="middle" fill="#a5f3fc" fontSize="16" fontWeight="800">THERMOPLASTIC</text>
        <text x="417" y="91" textAnchor="middle" fill="#fda4af" fontSize="16" fontWeight="800">THERMOSET</text>
        <text x="143" y="218" textAnchor="middle" fill="#cbd5e1" fontSize="13">softens and reshapes</text>
        <text x="417" y="218" textAnchor="middle" fill="#cbd5e1" fontSize="13">network remains infusible</text>
      </g>
    </svg>
  );
}

function SustainabilityVisual() {
  return (
    <svg viewBox="0 0 560 300" role="img" aria-label="Circular polymer lifecycle from design to recovery" className="h-auto w-full">
      <defs>
        <linearGradient id="cycleStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <marker id="cycleArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#67e8f9" /></marker>
      </defs>
      <rect width="560" height="300" rx="28" fill="#050914" />
      <text x="28" y="35" fill="#e2e8f0" fontSize="18" fontWeight="800">CIRCULAR POLYMER DESIGN</text>
      <circle cx="280" cy="157" r="68" fill="#071522" stroke="url(#cycleStroke)" strokeWidth="7" />
      <path d="M280 89 A68 68 0 0 1 348 157" fill="none" stroke="#34d399" strokeWidth="8" markerEnd="url(#cycleArrow)" />
      <path d="M348 157 A68 68 0 0 1 280 225" fill="none" stroke="#22d3ee" strokeWidth="8" markerEnd="url(#cycleArrow)" />
      <path d="M280 225 A68 68 0 0 1 212 157" fill="none" stroke="#8b5cf6" strokeWidth="8" markerEnd="url(#cycleArrow)" />
      <path d="M212 157 A68 68 0 0 1 280 89" fill="none" stroke="#f472b6" strokeWidth="8" markerEnd="url(#cycleArrow)" />
      <text x="280" y="151" textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="900">DESIGN</text>
      <text x="280" y="174" textAnchor="middle" fill="#94a3b8" fontSize="13">for recovery</text>
      <g fontSize="14" fontWeight="750">
        <text x="280" y="66" textAnchor="middle" fill="#6ee7b7">MONOMER</text>
        <text x="407" y="161" fill="#67e8f9">USE</text>
        <text x="280" y="264" textAnchor="middle" fill="#c4b5fd">COLLECT</text>
        <text x="92" y="161" fill="#f9a8d4">RECOVER</text>
      </g>
      <text x="28" y="286" fill="#94a3b8" fontSize="13">Durability must be matched with collection, reuse and recycling.</text>
    </svg>
  );
}

export function PolymerVisualGallery() {
  return (
    <section className="relative z-10 border-b border-[var(--border)]/80 bg-[#040812]/85">
      <div className="mx-auto max-w-7xl px-4 py-7 md:px-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Visual map</p>
            <h2 className="mt-1 text-xl font-black tracking-tight text-white md:text-2xl">Structure becomes material behaviour</h2>
          </div>
          <p className="hidden max-w-md text-right text-sm leading-6 text-[var(--text-muted)] md:block">Dark scientific visuals connect chain architecture, heating response and sustainable design.</p>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          <div className="overflow-hidden rounded-[24px] border border-cyan-400/20 bg-[var(--background)]/70 p-1 shadow-xl shadow-cyan-950/20"><PolymerArchitectureVisual /></div>
          <div className="overflow-hidden rounded-[24px] border border-rose-400/20 bg-[var(--background)]/70 p-1 shadow-xl shadow-rose-950/20"><ThermalBehaviourVisual /></div>
          <div className="overflow-hidden rounded-[24px] border border-emerald-400/20 bg-[var(--background)]/70 p-1 shadow-xl shadow-emerald-950/20"><SustainabilityVisual /></div>
        </div>
      </div>
    </section>
  );
}

