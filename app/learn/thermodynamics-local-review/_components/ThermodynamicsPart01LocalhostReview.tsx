import React from "react";

import ThermodynamicsCompleteDerivations from "./ThermodynamicsCompleteDerivations";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "sky";

const toneStyles: Record<Tone, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber: "border-amber-400/25 bg-amber-400/[0.07] text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose: "border-rose-400/25 bg-rose-400/[0.07] text-rose-200",
  sky: "border-sky-400/25 bg-sky-400/[0.07] text-sky-200",
};

function Chip({
  children,
  tone = "cyan",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-black tracking-wide ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}

function Section({
  index,
  title,
  subtitle,
  children,
}: {
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
          {index}
        </span>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-400">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200 md:text-base">
        {children}
      </div>
    </section>
  );
}

function Lens({
  title,
  children,
  tone = "cyan",
  label = "Synergic Bond Concept Lens",
}: {
  title: string;
  children: React.ReactNode;
  tone?: Tone;
  label?: string;
}) {
  return (
    <aside className={`rounded-2xl border p-5 ${toneStyles[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">{label}</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </aside>
  );
}

function Formula({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/30 p-4 text-center">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {label}
      </p>
      <div className="whitespace-nowrap font-mono text-lg font-black text-white md:text-xl">
        {children}
      </div>
    </div>
  );
}

function GlossySystemUniverseGraphic() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 shadow-2xl shadow-cyan-950/30 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="system-universe-title system-universe-desc"
        className="h-auto w-full"
      >
        <title id="system-universe-title">
          System, surroundings, boundary and universe
        </title>
        <desc id="system-universe-desc">
          A glossy original visual showing a selected system inside a boundary,
          interacting with nearby surroundings through heat, work and matter.
        </desc>

        <defs>
          <radialGradient id="universeGlow" cx="50%" cy="45%" r="70%">
            <stop offset="0" stopColor="#172554" />
            <stop offset="0.55" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </radialGradient>
          <radialGradient id="systemCore" cx="35%" cy="28%" r="78%">
            <stop offset="0" stopColor="#67e8f9" />
            <stop offset="0.38" stopColor="#0891b2" />
            <stop offset="1" stopColor="#164e63" />
          </radialGradient>
          <linearGradient id="glassPanel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.025" />
          </linearGradient>
          <linearGradient id="heatGradient" x1="0" x2="1">
            <stop offset="0" stopColor="#fb7185" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="workGradient" x1="0" x2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="matterGradient" x1="0" x2="1">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000000" floodOpacity="0.55" />
          </filter>
          <marker
            id="heatArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker
            id="workArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#a78bfa" />
          </marker>
          <marker
            id="matterArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="36" fill="url(#universeGlow)" />
        <circle cx="600" cy="380" r="285" fill="#0f172a" stroke="#475569" strokeWidth="3" strokeDasharray="16 14" />
        <circle cx="600" cy="380" r="180" fill="url(#systemCore)" stroke="#67e8f9" strokeWidth="5" filter="url(#softGlow)" />
        <ellipse cx="545" cy="315" rx="88" ry="54" fill="#ffffff" fillOpacity="0.16" />

        <text x="600" y="335" fill="#ecfeff" fontSize="31" fontWeight="900" textAnchor="middle">
          SYSTEM
        </text>
        <text x="600" y="376" fill="#cffafe" fontSize="21" fontWeight="700" textAnchor="middle">
          selected matter or region
        </text>
        <text x="600" y="412" fill="#a5f3fc" fontSize="19" textAnchor="middle">
          chosen for thermodynamic study
        </text>

        <text x="600" y="150" fill="#cbd5e1" fontSize="24" fontWeight="900" textAnchor="middle">
          BOUNDARY
        </text>
        <path d="M520 165 C540 198 560 215 600 220" fill="none" stroke="#94a3b8" strokeWidth="4" />

        <text x="600" y="690" fill="#f8fafc" fontSize="27" fontWeight="900" textAnchor="middle">
          UNIVERSE = SYSTEM + SURROUNDINGS
        </text>
        <text x="600" y="642" fill="#cbd5e1" fontSize="22" fontWeight="800" textAnchor="middle">
          SURROUNDINGS: the interacting remainder relevant to the model
        </text>

        <path
          d="M395 290 C305 245 245 225 170 230"
          fill="none"
          stroke="url(#matterGradient)"
          strokeWidth="5"
          markerEnd="url(#matterArrow)"
        />
        <path
          d="M805 310 C900 265 965 250 1040 260"
          fill="none"
          stroke="url(#heatGradient)"
          strokeWidth="5"
          markerEnd="url(#heatArrow)"
        />
        <path
          d="M805 450 C910 490 965 515 1040 520"
          fill="none"
          stroke="url(#workGradient)"
          strokeWidth="5"
          markerEnd="url(#workArrow)"
        />

        <rect x="70" y="165" width="245" height="120" rx="26" fill="url(#glassPanel)" stroke="#34d399" strokeWidth="3" filter="url(#shadow)" />
        <text x="192" y="207" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
          MATTER
        </text>
        <text x="192" y="245" fill="#d1fae5" fontSize="19" textAnchor="middle">
          molecules or bulk flow
        </text>

        <rect x="905" y="190" width="245" height="120" rx="26" fill="url(#glassPanel)" stroke="#fbbf24" strokeWidth="3" filter="url(#shadow)" />
        <text x="1027" y="232" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">
          HEAT
        </text>
        <text x="1027" y="270" fill="#fef3c7" fontSize="19" textAnchor="middle">
          energy transfer due to ΔT
        </text>

        <rect x="905" y="490" width="245" height="120" rx="26" fill="url(#glassPanel)" stroke="#a78bfa" strokeWidth="3" filter="url(#shadow)" />
        <text x="1027" y="532" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">
          WORK
        </text>
        <text x="1027" y="570" fill="#ede9fe" fontSize="19" textAnchor="middle">
          organized energy transfer
        </text>
      </svg>
    </div>
  );
}

function BoundaryMatrixGraphic() {
  const rows = [
    {
      title: "Real / Imaginary",
      left: "wall of a vessel",
      right: "chosen control surface",
      accent: "#22d3ee",
    },
    {
      title: "Rigid / Movable",
      left: "fixed volume",
      right: "piston can move",
      accent: "#f97316",
    },
    {
      title: "Permeable / Impermeable",
      left: "matter may cross",
      right: "matter is blocked",
      accent: "#34d399",
    },
    {
      title: "Diathermal / Adiabatic",
      left: "heat may cross",
      right: "heat is blocked",
      accent: "#f472b6",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg
        viewBox="0 0 1200 900"
        role="img"
        aria-labelledby="boundary-matrix-title boundary-matrix-desc"
        className="h-auto w-full"
      >
        <title id="boundary-matrix-title">Independent classifications of thermodynamic boundaries</title>
        <desc id="boundary-matrix-desc">
          Four separate binary properties of a boundary: real or imaginary,
          rigid or movable, permeable or impermeable, and diathermal or adiabatic.
        </desc>

        <defs>
          <linearGradient id="bmGlass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.025" />
          </linearGradient>
          <filter id="bmShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <marker
            id="bmArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#67e8f9" />
          </marker>
        </defs>

        <rect width="1200" height="900" rx="36" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          BOUNDARY PROPERTY MATRIX
        </text>
        <text x="600" y="92" fill="#94a3b8" fontSize="20" textAnchor="middle">
          These four classifications are independent—not interchangeable.
        </text>

        {rows.map((row, i) => {
          const y = 135 + i * 180;
          return (
            <g key={row.title}>
              <rect x="65" y={y} width="1070" height="145" rx="28" fill="url(#bmGlass)" stroke={row.accent} strokeWidth="3" filter="url(#bmShadow)" />
              <text x="205" y={y + 45} fill={row.accent} fontSize="22" fontWeight="900" textAnchor="middle">
                {row.title}
              </text>
              <text x="205" y={y + 90} fill="#e2e8f0" fontSize="19" textAnchor="middle">
                independent descriptor
              </text>

              <rect x="365" y={y + 26} width="290" height="92" rx="22" fill="#0f172a" stroke={row.accent} strokeWidth="3" />
              <text x="510" y={y + 64} fill="#f8fafc" fontSize="21" fontWeight="900" textAnchor="middle">
                {row.left}
              </text>
              <text x="510" y={y + 94} fill="#cbd5e1" fontSize="19" textAnchor="middle">
                option A
              </text>

              <rect x="760" y={y + 26} width="290" height="92" rx="22" fill="#0f172a" stroke={row.accent} strokeWidth="3" />
              <text x="905" y={y + 64} fill="#f8fafc" fontSize="21" fontWeight="900" textAnchor="middle">
                {row.right}
              </text>
              <text x="905" y={y + 94} fill="#cbd5e1" fontSize="19" textAnchor="middle">
                option B
              </text>

              <path d={`M670 ${y + 72} H740`} stroke="#67e8f9" strokeWidth="5" markerStart="url(#bmArrow)" markerEnd="url(#bmArrow)" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function SystemExchangeGraphic() {
  const systems = [
    {
      x: 45,
      title: "OPEN",
      matter: "YES",
      energy: "YES",
      stroke: "#34d399",
      note: "flow system",
    },
    {
      x: 425,
      title: "CLOSED",
      matter: "NO",
      energy: "YES",
      stroke: "#60a5fa",
      note: "fixed amount of matter",
    },
    {
      x: 805,
      title: "ISOLATED",
      matter: "NO",
      energy: "NO",
      stroke: "#c084fc",
      note: "ideal limiting model",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg
        viewBox="0 0 1200 700"
        role="img"
        aria-labelledby="exchange-title exchange-desc"
        className="h-auto w-full"
      >
        <title id="exchange-title">Open, closed and isolated systems</title>
        <desc id="exchange-desc">
          A comparison of matter and energy exchange across the system boundary.
        </desc>

        <defs>
          <linearGradient id="exGlass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.025" />
          </linearGradient>
          <filter id="exShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <marker
            id="exArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="700" rx="36" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          WHAT MAY CROSS THE BOUNDARY?
        </text>

        {systems.map((s) => (
          <g key={s.title}>
            <rect x={s.x} y="125" width="350" height="460" rx="34" fill="url(#exGlass)" stroke={s.stroke} strokeWidth="4" filter="url(#exShadow)" />
            <text x={s.x + 175} y="185" fill={s.stroke} fontSize="30" fontWeight="900" textAnchor="middle">
              {s.title}
            </text>
            <circle cx={s.x + 175} cy="320" r="95" fill="#0f172a" stroke={s.stroke} strokeWidth="4" />
            <text x={s.x + 175} y="312" fill="#f8fafc" fontSize="21" fontWeight="900" textAnchor="middle">
              SYSTEM
            </text>
            <text x={s.x + 175} y="344" fill="#cbd5e1" fontSize="18" textAnchor="middle">
              defined boundary
            </text>

            <rect x={s.x + 40} y="445" width="125" height="80" rx="18" fill="#0f172a" stroke="#34d399" strokeWidth="3" />
            <text x={s.x + 102} y="476" fill="#a7f3d0" fontSize="18" fontWeight="900" textAnchor="middle">
              MATTER
            </text>
            <text x={s.x + 102} y="505" fill={s.matter === "YES" ? "#86efac" : "#fda4af"} fontSize="20" fontWeight="900" textAnchor="middle">
              {s.matter}
            </text>

            <rect x={s.x + 185} y="445" width="125" height="80" rx="18" fill="#0f172a" stroke="#fbbf24" strokeWidth="3" />
            <text x={s.x + 247} y="476" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">
              ENERGY
            </text>
            <text x={s.x + 247} y="505" fill={s.energy === "YES" ? "#fde047" : "#fda4af"} fontSize="20" fontWeight="900" textAnchor="middle">
              {s.energy}
            </text>

            <text x={s.x + 175} y="562" fill="#cbd5e1" fontSize="19" textAnchor="middle">
              {s.note}
            </text>
          </g>
        ))}

        <path d="M15 320 H145" stroke="#34d399" strokeWidth="5" markerEnd="url(#exArrow)" />
        <path d="M300 320 H410" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#exArrow)" />
        <path d="M675 320 H790" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#exArrow)" />

        <rect x="220" y="625" width="760" height="48" rx="20" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
        <text x="600" y="656" fill="#cbd5e1" fontSize="20" fontWeight="800" textAnchor="middle">
          Energy may cross as heat, work, radiation, electrical transfer, or other recognized modes.
        </text>
      </svg>
    </div>
  );
}

function AdiabaticPistonGraphic() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg
        viewBox="0 0 1200 630"
        role="img"
        aria-labelledby="adiabatic-piston-title adiabatic-piston-desc"
        className="h-auto w-full"
      >
        <title id="adiabatic-piston-title">
          Adiabatic does not automatically mean isolated
        </title>
        <desc id="adiabatic-piston-desc">
          A movable adiabatic piston blocks heat but still permits pressure-volume work.
          A rigid, sealed, adiabatic boundary blocks matter, heat and pressure-volume work.
        </desc>

        <defs>
          <linearGradient id="apMetal" x1="0" x2="1">
            <stop offset="0" stopColor="#cbd5e1" />
            <stop offset="0.45" stopColor="#64748b" />
            <stop offset="1" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="apGas" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="1" stopColor="#164e63" stopOpacity="0.8" />
          </linearGradient>
          <filter id="apShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <marker
            id="apArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#a78bfa" />
          </marker>
        </defs>

        <rect width="1200" height="630" rx="36" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ADIABATIC ≠ AUTOMATICALLY ISOLATED
        </text>

        <rect x="85" y="120" width="470" height="410" rx="32" fill="#0f172a" stroke="#f97316" strokeWidth="5" filter="url(#apShadow)" />
        <text x="320" y="170" fill="#fdba74" fontSize="23" fontWeight="900" textAnchor="middle">
          MOVABLE ADIABATIC PISTON
        </text>
        <path d="M175 455 V245 H465 V455" fill="url(#apGas)" stroke="#f97316" strokeWidth="5" />
        <rect x="185" y="285" width="270" height="26" rx="9" fill="url(#apMetal)" />
        <line x1="320" y1="285" x2="320" y2="220" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
        <path d="M320 270 V210" stroke="#a78bfa" strokeWidth="5" markerEnd="url(#apArrow)" />
        <text x="320" y="500" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">
          q = 0, but wₚᵥ may be non-zero
        </text>

        <rect x="645" y="120" width="470" height="410" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="5" filter="url(#apShadow)" />
        <text x="880" y="170" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">
          RIGID + SEALED + ADIABATIC
        </text>
        <rect x="745" y="245" width="270" height="210" rx="22" fill="url(#apGas)" stroke="#34d399" strokeWidth="6" />
        <line x1="705" y1="350" x2="740" y2="350" stroke="#fb7185" strokeWidth="5" />
        <line x1="720" y1="332" x2="742" y2="368" stroke="#fb7185" strokeWidth="4" />
        <line x1="742" y1="332" x2="720" y2="368" stroke="#fb7185" strokeWidth="4" />
        <text x="880" y="500" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">
          matter = 0, q = 0, wₚᵥ = 0
        </text>

        <rect x="250" y="565" width="700" height="42" rx="18" fill="#0f172a" stroke="#a78bfa" strokeWidth="3" />
        <text x="600" y="593" fill="#ddd6fe" fontSize="19" fontWeight="900" textAnchor="middle">
          Isolation requires no matter transfer and no energy transfer of any kind.
        </text>
      </svg>
    </div>
  );
}

const classificationRows = [
  {
    example: "Living organism / human body",
    type: "Open",
    reason:
      "Food, water, respiratory gases, waste, heat and work-related energy cross the chosen boundary.",
  },
  {
    example: "Air in an open room",
    type: "Open",
    reason:
      "Air can enter or leave through doors, windows and ventilation; energy also crosses.",
  },
  {
    example: "Hot tea in an uncovered cup",
    type: "Open",
    reason:
      "Water vapour and aroma molecules escape while heat is exchanged with the surroundings.",
  },
  {
    example: "Matter in a sealed container",
    type: "Closed",
    reason:
      "The amount of matter is fixed, although heat or work may still cross depending on the walls.",
  },
  {
    example: "Electrochemical cell with sealed material boundary",
    type: "Closed",
    reason:
      "Matter can remain confined while electrical work and heat cross the boundary.",
  },
  {
    example: "Universe in the standard thermodynamic model",
    type: "Isolated",
    reason:
      "There is no external surroundings with which the entire universe can exchange matter or energy.",
  },
  {
    example: "Pressure cooker before venting",
    type: "Closed",
    reason:
      "Matter is retained while heat enters from the burner; the model changes once steam escapes.",
  },
  {
    example: "Pressure cooker during venting",
    type: "Open",
    reason:
      "Steam crosses the pressure valve, so both matter and energy can be exchanged.",
  },
  {
    example: "Boiler operating continuously",
    type: "Open",
    reason:
      "Feed water enters, steam exits, and heat is supplied.",
  },
  {
    example: "Automobile liquid-cooling circuit",
    type: "Model-dependent",
    reason:
      "The circulating coolant loop may be treated as closed, while a control volume around the radiator is open to fluid flow.",
  },
  {
    example: "Chemical reaction in a sealed rigid vessel",
    type: "Closed",
    reason:
      "No reactant or product crosses the wall, but energy may still cross unless the vessel is adiabatic.",
  },
  {
    example: "Earth",
    type: "Approximately closed for matter",
    reason:
      "Energy exchange with the Sun and space is large; matter exchange exists but is often negligible for simplified models.",
  },
];

function ClassificationTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-[980px] border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">System or daily-life example</th>
            <th className="px-4 py-3 font-black text-white">Best classification</th>
            <th className="px-4 py-3 font-black text-white">Boundary-based reasoning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {classificationRows.map((row) => (
            <tr key={row.example}>
              <td className="px-4 py-3 font-semibold text-slate-100">{row.example}</td>
              <td className="px-4 py-3">
                <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">
                  {row.type}
                </span>
              </td>
              <td className="px-4 py-3 leading-6 text-slate-300">{row.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const truthRows = [
  {
    statement: "A closed system always has constant volume.",
    answer: "False",
    reason:
      "Closed means no matter transfer. A sealed gas beneath a movable piston is closed even though its volume changes.",
  },
  {
    statement: "If neither heat nor matter crosses the boundary, the system must be isolated.",
    answer: "False",
    reason:
      "Work may still cross a movable or electrical boundary. Isolation excludes every mode of energy transfer.",
  },
  {
    statement: "Every closed system is isolated.",
    answer: "False",
    reason:
      "A closed system can exchange energy. Isolation is a stronger condition than closure.",
  },
  {
    statement: "Every isolated system is also closed.",
    answer: "True",
    reason:
      "An isolated system cannot exchange matter, so it automatically satisfies the defining condition of a closed system.",
  },
  {
    statement: "An adiabatic container fitted with an adiabatic movable piston is isolated.",
    answer: "False",
    reason:
      "The walls block heat, but piston motion can transfer pressure–volume work.",
  },
  {
    statement: "A sealed adiabatic container with a rigid boundary is isolated from heat and pressure–volume work.",
    answer: "True with condition",
    reason:
      "It blocks matter, heat and boundary movement. The statement assumes no electrical, shaft, radiation or other work mode crosses the boundary.",
  },
];

function TruthTable() {
  return (
    <div className="space-y-3">
      {truthRows.map((row, i) => (
        <article
          key={row.statement}
          className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <p className="font-semibold text-white">
              <span className="mr-2 text-cyan-300">{i + 1}.</span>
              {row.statement}
            </p>
            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-black ${
                row.answer.startsWith("True")
                  ? "bg-emerald-400/15 text-emerald-300"
                  : "bg-rose-400/15 text-rose-300"
              }`}
            >
              {row.answer}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{row.reason}</p>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Boundary choice changes the classification",
    question:
      "A kettle is boiling. Classify (i) only the liquid remaining inside, (ii) the kettle plus liquid before the lid opens, and (iii) a control volume around the spout during steady steam discharge.",
    solution:
      "(i) Open, because vapour leaves the chosen liquid system. (ii) Closed if no matter escapes, though heat enters. (iii) Open because steam flows through the control surface. The physical object is similar, but the chosen system and operating stage differ.",
  },
  {
    title: "Rigid but not isolated",
    question:
      "A rigid sealed steel vessel is placed in a hot bath. What transfers are possible?",
    solution:
      "No matter crosses and pressure–volume work is zero because dV = 0. Heat can cross the diathermal steel wall, so the vessel is closed, not isolated.",
  },
  {
    title: "Adiabatic but not isolated",
    question:
      "A gas is enclosed by insulated walls and an insulated movable piston. A weight is placed on the piston and the gas is compressed. Is the gas isolated?",
    solution:
      "No. The boundary is adiabatic, so q = 0, but work is done on the gas through piston motion. Energy crosses as work.",
  },
  {
    title: "Battery as a thermodynamic system",
    question:
      "A sealed battery powers a lamp. Matter remains inside the battery. How should the battery be classified?",
    solution:
      "Closed with respect to matter, but not isolated because electrical work and heat cross its boundary.",
  },
  {
    title: "Earth model",
    question:
      "Why is Earth often described as closed rather than isolated?",
    solution:
      "Its matter exchange with space is small compared with its mass, but it receives solar radiation and emits thermal radiation. Therefore energy transfer is substantial.",
  },
  {
    title: "Can internal energy change in an isolated system?",
    question:
      "An isolated vessel contains a falling block, a paddle wheel and a fluid. The block falls and stirs the fluid. Can the fluid temperature rise?",
    solution:
      "Yes. Gravitational potential energy can be converted into internal energy within the isolated composite. The total energy of the complete isolated system remains constant.",
  },
  {
    title: "Closed rigid vessel and non-PV work",
    question:
      "A sealed rigid electrochemical cell drives current through an external resistor. Is all work necessarily zero because the boundary is rigid?",
    solution:
      "No. Rigid means pressure–volume boundary work is zero. Electrical work can still cross. Always identify the work mode.",
  },
  {
    title: "Open-room air",
    question:
      "A student claims that air in a room is closed because the walls are rigid. Identify the error.",
    solution:
      "Rigidity concerns volume, not matter permeability. Open doors, windows and ventilation permit mass flow, making the chosen room-air system open.",
  },
  {
    title: "Universe statement",
    question:
      "Is it scientifically meaningful to call the universe isolated?",
    solution:
      "In standard thermodynamic modelling, yes, because the universe has no external surroundings. This is a modelling statement, not a laboratory claim about a container wall.",
  },
  {
    title: "System selection in a reaction vessel",
    question:
      "A reaction occurs inside a sealed piston-cylinder. Give two legitimate systems and explain how the accounting differs.",
    solution:
      "System A may be only the reacting mixture; the moving piston lies in the surroundings and work crosses the boundary. System B may include the mixture and piston; then the external load belongs to the surroundings. Conservation is unchanged, but the bookkeeping boundary differs.",
  },
  {
    title: "Multiple-correct boundary problem",
    question:
      "For a sealed, thermally conducting piston-cylinder, which descriptions may simultaneously be true: real, movable, impermeable, diathermal?",
    solution:
      "All four may be true. Boundary classifications describe independent properties.",
  },
  {
    title: "State versus path preview",
    question:
      "A gas begins at one equilibrium condition and ends at another. Why are pressure, volume and temperature used to describe the states, while heat and work are not listed as contents of the gas?",
    solution:
      "Pressure, volume and temperature can characterize equilibrium states. Heat and work describe energy crossing the boundary during a process; they are not properties stored in the system.",
  },
];

function ProblemLadder() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {problems.map((problem, index) => (
        <article
          key={problem.title}
          className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5"
        >
          <h3 className=" font-black text-white">
            <span className="mr-2 text-amber-300">◆</span>
            {index + 1}. {problem.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-200">{problem.question}</p>
          <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Solution
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              {problem.solution}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ThermodynamicsAroundYou() {
  const cases = [
    {
      title: "Bicycle pump",
      text:
        "Choosing the air inside the pump as the system exposes a movable boundary. During rapid compression, work enters faster than heat can leave, so the air becomes warm.",
      tone: "amber" as Tone,
    },
    {
      title: "Refrigerator",
      text:
        "A refrigerator is useful because heat and work cross carefully chosen boundaries. Calling the appliance 'containing heat' confuses a transfer mode with a state property.",
      tone: "sky" as Tone,
    },
    {
      title: "Uncovered tea",
      text:
        "The tea loses energy as heat and matter as water vapour. The same cup becomes approximately closed if sealed before appreciable evaporation.",
      tone: "rose" as Tone,
    },
    {
      title: "Car radiator",
      text:
        "A control volume around the radiator is open: coolant and air flow through it while energy is transferred. The complete sealed coolant loop can instead be modelled as closed.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cases.map((item) => (
        <article
          key={item.title}
          className={`rounded-3xl border p-5 ${toneStyles[item.tone]}`}
        >
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function EnergeticsMap() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
          Thermodynamics note
        </p>
        <h3 className="mt-2 text-xl font-black text-white">
          General laws, physical processes and direction
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          {[
            "solid ⇌ liquid",
            "liquid ⇌ gas",
            "gas expansion",
            "gas compression",
            "heat engines",
            "entropy and free energy",
          ].map((item) => (
            <div key={item} className="rounded-xl bg-black/20 p-3 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
          Separate Thermochemistry note
        </p>
        <h3 className="mt-2 text-xl font-black text-white">
          Energy changes accompanying chemical reactions
        </h3>
        <div className="mt-4 space-y-3 font-mono text-sm text-slate-200">
          <div className="rounded-xl bg-black/20 p-3">
            CaCO₃(s) → CaO(s) + CO₂(g)
          </div>
          <div className="rounded-xl bg-black/20 p-3">
            N₂O₄(g) → 2NO₂(g)
          </div>
          <div className="rounded-xl bg-black/20 p-3">
            CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ThermodynamicsPart01LocalhostReview() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(34,211,238,0.22),transparent_31%),radial-gradient(circle_at_88%_12%,rgba(168,85,247,0.20),transparent_28%),radial-gradient(circle_at_52%_100%,rgba(251,191,36,0.12),transparent_36%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="amber">PREMIUM MASTER EDITION</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Foundations
              </p>
              <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Draw the boundary correctly—and the whole problem becomes visible
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Thermodynamics begins with a decision: what is the system? Once the
                system is chosen, every matter and energy transfer must be counted
                across its boundary.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Boundary-first reasoning
              </p>
              <div className="mt-4 space-y-3">
                <Formula label="Universe">
                  universe = system + surroundings
                </Formula>
                <Formula label="Isolated system">
                  matter transfer = 0; energy transfer = 0
                </Formula>
                <Formula label="Rigid boundary">
                  dV = 0 ⇒ wₚᵥ = 0
                </Formula>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <GlossySystemUniverseGraphic />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="What thermodynamics studies"
          subtitle="A macroscopic framework for energy, equilibrium, direction and limits."
        >
          <p>
            Thermodynamics studies systems through measurable bulk variables and
            general energy laws. It connects initial and final equilibrium states,
            the energy exchanged during a change, the direction in which a natural
            process can proceed, and the limiting efficiency of devices.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Feasibility", "Can the proposed change occur under the stated constraints?"],
              ["Direction", "Which direction is thermodynamically favoured?"],
              ["Equilibrium", "What condition is reached when the driving force vanishes?"],
              ["Extent", "How far can a reaction or process proceed before equilibrium?"],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
              >
                <h3 className="font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Lens title="Macroscopic—not blind to molecules" tone="cyan">
              Classical thermodynamics does not track every molecule. It works with
              pressure, volume, temperature, composition and other bulk properties.
              Molecular models may explain the results, but the laws themselves are
              macroscopic.
            </Lens>
            <Lens title="Thermodynamics does not predict rate" tone="rose" label="Concept Trap">
              A process may be thermodynamically favourable but kinetically slow.
              Diamond, fuel combustion and many metastable systems demonstrate that
              direction and speed are different questions.
            </Lens>
          </div>
        </Section>

        <Section
          index="02"
          title="Energetics: Thermodynamics and Thermochemistry"
          subtitle="The chapter sequence separates physical-process thermodynamics from chemical-reaction thermochemistry."
        >
          <EnergeticsMap />

          <Lens title="Course architecture" tone="amber">
            This Thermodynamics sequence develops systems, properties, processes,
            work, laws, entropy and free-energy criteria. Detailed reaction
            enthalpies, calorimetry, Hess cycles and bond-enthalpy calculations belong
            to the separate Thermochemistry note.
          </Lens>
        </Section>

        <Section
          index="03"
          title="System, surroundings, boundary and universe"
          subtitle="Definitions become powerful only after the selected system is stated explicitly."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["System", "The selected matter or region of space under investigation.", "cyan"],
              ["Surroundings", "The relevant remainder that can interact with the system.", "sky"],
              ["Boundary", "The real or imagined surface separating the two.", "amber"],
              ["Universe", "System plus surroundings for the chosen model.", "violet"],
            ].map(([title, text, tone]) => (
              <article
                key={title}
                className={`rounded-2xl border p-5 ${toneStyles[tone as Tone]}`}
              >
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">{text}</p>
              </article>
            ))}
          </div>

          <Lens title="The same apparatus can define different systems" tone="violet">
            In a piston-cylinder, the system may be only the gas, the gas plus piston,
            or the complete insulated assembly. Each choice changes what is counted
            as crossing the boundary, while the physical law remains unchanged.
          </Lens>

          <Lens title="Heat and work are boundary events" tone="rose" label="Language Discipline">
            A system possesses internal energy, not “stored heat” or “stored work.”
            Heat and work name modes of energy transfer during a process.
          </Lens>
        </Section>

        <Section
          index="04"
          title="Four independent classifications of a boundary"
          subtitle="Never infer one boundary property from another."
        >
          <BoundaryMatrixGraphic />

          <div className="grid gap-4 md:grid-cols-2">
            <Lens title="Rigid does not mean adiabatic" tone="rose">
              A sealed steel vessel may have fixed volume yet conduct heat readily.
              Rigidity controls movement; adiabaticity controls heat transfer.
            </Lens>
            <Lens title="Adiabatic does not mean impermeable" tone="amber">
              An insulated flow pipe can be adiabatic while matter enters and leaves.
              Heat transfer and mass transfer are separate questions.
            </Lens>
          </div>
        </Section>

        <Section
          index="05"
          title="Open, closed and isolated systems"
          subtitle="Classification is determined by what crosses the chosen boundary during the stated operation."
        >
          <SystemExchangeGraphic />
          <ClassificationTable />

          <Lens title="Real isolated systems are approximations" tone="violet">
            A thermos flask, insulated calorimeter or cryogenic vessel is isolated only
            approximately and only over a finite time. The ideal isolated system is a
            model with exactly zero matter and energy transfer.
          </Lens>
        </Section>

        <Section
          index="06"
          title="Adiabatic is not the same as isolated"
          subtitle="This distinction produces one of the most common JEE errors."
        >
          <AdiabaticPistonGraphic />

          <div className="grid gap-4 md:grid-cols-3">
            <Formula label="Adiabatic">
              q = 0
            </Formula>
            <Formula label="Rigid">
              dV = 0 ⇒ wₚᵥ = 0
            </Formula>
            <Formula label="Isolated">
              q = 0 and all work modes = 0
            </Formula>
          </div>

          <Lens title="Rigid boundary only eliminates pressure–volume work" tone="rose">
            Electrical, shaft, magnetic, surface or other work may still cross a rigid
            boundary. State the permitted work modes before concluding that total work
            is zero.
          </Lens>
        </Section>

        <Section
          index="07"
          title="All six chapter true–false traps"
          subtitle="Each statement is resolved by returning to the boundary definition."
        >
          <TruthTable />
        </Section>

        <Section
          index="08"
          title="Energy bookkeeping in isolated and rigid systems"
          subtitle="Total energy conservation must be separated from changes in individual energy forms."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-violet-400/20 bg-violet-400/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
                Isolated composite
              </p>
              <Formula label="Boundary exchange">
                q = 0; w = 0
              </Formula>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                Internal kinetic, potential and internal-energy contributions may
                transform into one another, but the total energy of the complete
                isolated system remains constant.
              </p>
            </article>

            <article className="rounded-3xl border border-sky-400/20 bg-sky-400/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">
                Closed rigid vessel
              </p>
              <Formula label="Boundary movement">
                dV = 0 ⇒ wₚᵥ = 0
              </Formula>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                Heat may cross, and non-pressure–volume work may also cross unless
                explicitly excluded. Closed and rigid do not automatically imply
                isolated.
              </p>
            </article>
          </div>
        </Section>

        <Section
          index="09"
          title="State of a system"
          subtitle="The chapter opening closes by introducing the state before properties are developed in Part 02."
        >
          <p>
            The state of a system is its condition described by a sufficient set of
            thermodynamic variables. At a specified equilibrium state, each state
            property has a definite value.
          </p>

          <Formula label="Example state labels">
            State 1: (P₁, V₁, T₁, composition₁) → State 2: (P₂, V₂, T₂, composition₂)
          </Formula>

          <Lens title="A system has infinitely many possible states" tone="cyan">
            Pressure, volume, temperature and composition can vary continuously over
            allowed ranges. A process is a path through the space of possible states.
            Part 02 develops thermodynamic properties, intensive/extensive variables,
            state functions and path functions.
          </Lens>
        </Section>

        <Section
          index="10"
          title="Thermodynamics around you"
          subtitle="Original daily-life applications inspired by the real-world physical-chemistry approach."
        >
          <ThermodynamicsAroundYou />
        </Section>


        <ThermodynamicsCompleteDerivations part={1} />

<Section
          index="11"
          title="Complete theory, diagrams and worked examples"
          subtitle="Twelve original problems; every example and complete solution is displayed below."
        >
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Choose the system → draw the boundary → list every allowed transfer
              </h2>
            </div>
            <Chip tone="emerald">PART 01 LOCAL REVIEW READY</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Open", "matter and energy may cross"],
              ["Closed", "matter fixed; energy may cross"],
              ["Isolated", "neither matter nor energy crosses"],
              ["Adiabatic", "heat blocked; work may still cross"],
            ].map(([term, meaning]) => (
              <div
                key={term}
                className="rounded-2xl border border-white/10 bg-black/25 p-4"
              >
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>


</main>
  );
}
