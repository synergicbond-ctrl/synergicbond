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
  label = "Concept lens",
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

function GlossyPhaseGraphic() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 shadow-2xl shadow-cyan-950/30 md:p-6">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="phase-title phase-desc"
        className="h-auto w-full"
      >
        <title id="phase-title">Homogeneous and heterogeneous phase comparison</title>
        <desc id="phase-desc">
          A glossy particle view comparing a uniform single phase with a multiphase system
          separated by a visible interface.
        </desc>

        <defs>
          <radialGradient id="phaseBg" cx="50%" cy="40%" r="75%">
            <stop offset="0" stopColor="#172554" />
            <stop offset="0.6" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </radialGradient>
          <linearGradient id="homoGlass" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#22d3ee" stopOpacity="0.35" />
            <stop offset="1" stopColor="#164e63" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="oilLayer" x1="0" x2="1">
            <stop offset="0" stopColor="#fbbf24" stopOpacity="0.78" />
            <stop offset="1" stopColor="#f97316" stopOpacity="0.78" />
          </linearGradient>
          <linearGradient id="waterLayer" x1="0" x2="1">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0.75" />
            <stop offset="1" stopColor="#0e7490" stopOpacity="0.82" />
          </linearGradient>
          <filter id="phaseShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="15" stdDeviation="16" floodColor="#000" floodOpacity="0.55" />
          </filter>
        </defs>

        <rect width="1200" height="760" rx="36" fill="url(#phaseBg)" />
        <text x="600" y="58" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">
          PHASE = A HOMOGENEOUS REGION WITH UNIFORM MACROSCOPIC PROPERTIES
        </text>

        <g filter="url(#phaseShadow)">
          <rect x="70" y="130" width="470" height="480" rx="34" fill="#0f172a" stroke="#22d3ee" strokeWidth="7" />
          <text x="305" y="190" fill="#a5f3fc" fontSize="29" fontWeight="900" textAnchor="middle">
            HOMOGENEOUS
          </text>
          <rect x="135" y="235" width="340" height="265" rx="26" fill="url(#homoGlass)" stroke="#67e8f9" strokeWidth="4" />
          {Array.from({ length: 24 }).map((_, i) => {
            const cx = 175 + (i % 6) * 55;
            const cy = 275 + Math.floor(i / 6) * 65;
            return (
              <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 13 : 10} fill={i % 2 === 0 ? "#67e8f9" : "#a3e635"}>
                <animate
                  attributeName={i % 2 === 0 ? "cx" : "cy"}
                  values={
                    i % 2 === 0
                      ? `${cx - 8};${cx + 8};${cx - 8}`
                      : `${cy - 8};${cy + 8};${cy - 8}`
                  }
                  dur={`${2.2 + (i % 5) * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
          <text x="305" y="555" fill="#d1fae5" fontSize="20" fontWeight="900" textAnchor="middle">
            one phase throughout
          </text>
          <text x="305" y="590" fill="#cbd5e1" fontSize="17" textAnchor="middle">
            no macroscopic interface inside
          </text>
        </g>

        <g filter="url(#phaseShadow)">
          <rect x="660" y="130" width="470" height="480" rx="34" fill="#0f172a" stroke="#f472b6" strokeWidth="7" />
          <text x="895" y="190" fill="#f9a8d4" fontSize="29" fontWeight="900" textAnchor="middle">
            HETEROGENEOUS
          </text>
          <rect x="725" y="235" width="340" height="132" rx="24" fill="url(#oilLayer)" />
          <rect x="725" y="367" width="340" height="133" rx="24" fill="url(#waterLayer)" />
          <line x1="725" y1="367" x2="1065" y2="367" stroke="#f8fafc" strokeWidth="7" />
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={`top-${i}`}
              cx={765 + (i % 4) * 85}
              cy={275 + Math.floor(i / 4) * 52}
              r="11"
              fill="#fde68a"
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={`bottom-${i}`}
              cx={765 + (i % 4) * 85}
              cy={405 + Math.floor(i / 4) * 52}
              r="11"
              fill="#a5f3fc"
            />
          ))}
          <text x="895" y="555" fill="#fbcfe8" fontSize="20" fontWeight="900" textAnchor="middle">
            two or more phases
          </text>
          <text x="895" y="590" fill="#cbd5e1" fontSize="17" textAnchor="middle">
            interface marks a discontinuity
          </text>
        </g>

        <rect x="280" y="660" width="640" height="56" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="695" fill="#ddd6fe" fontSize="19" fontWeight="900" textAnchor="middle">
          Number of components and number of phases are different ideas.
        </text>
      </svg>
    </div>
  );
}

function ScalingGraphic() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="scale-title scale-desc"
        className="h-auto w-full"
      >
        <title id="scale-title">Scaling and unequal-part partition test</title>
        <desc id="scale-desc">
          A uniform system is split into unequal portions. Extensive properties scale
          with amount while intensive properties remain unchanged.
        </desc>

        <defs>
          <linearGradient id="scaleBody" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0e7490" />
            <stop offset="1" stopColor="#172554" />
          </linearGradient>
          <filter id="scaleShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="15" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <marker
            id="scaleArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="36" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          UNEQUAL-PART PARTITION TEST
        </text>

        <g filter="url(#scaleShadow)">
          <rect x="90" y="165" width="350" height="360" rx="34" fill="url(#scaleBody)" stroke="#22d3ee" strokeWidth="7" />
          <text x="265" y="215" fill="#a5f3fc" fontSize="25" fontWeight="900" textAnchor="middle">
            ORIGINAL SYSTEM
          </text>
          <text x="265" y="300" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">
            mass = m
          </text>
          <text x="265" y="350" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">
            volume = V
          </text>
          <text x="265" y="400" fill="#fde68a" fontSize="24" fontWeight="900" textAnchor="middle">
            temperature = T
          </text>
          <text x="265" y="450" fill="#a7f3d0" fontSize="24" fontWeight="900" textAnchor="middle">
            density = ρ
          </text>
        </g>

        <path d="M470 345 H620" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#scaleArrow)" />
        <text x="545" y="315" fill="#fde68a" fontSize="19" fontWeight="900" textAnchor="middle">
          divide unequally
        </text>

        <g filter="url(#scaleShadow)">
          <rect x="660" y="145" width="450" height="400" rx="34" fill="#0f172a" stroke="#a78bfa" strokeWidth="7" />
          <line x1="820" y1="150" x2="820" y2="540" stroke="#f8fafc" strokeWidth="6" />
          <text x="740" y="205" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">
            PART A
          </text>
          <text x="965" y="205" fill="#f9a8d4" fontSize="21" fontWeight="900" textAnchor="middle">
            PART B
          </text>
          <text x="740" y="290" fill="#f8fafc" fontSize="21" textAnchor="middle">
            m₁, V₁
          </text>
          <text x="965" y="290" fill="#f8fafc" fontSize="21" textAnchor="middle">
            m₂, V₂
          </text>
          <text x="740" y="365" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">
            T
          </text>
          <text x="965" y="365" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">
            T
          </text>
          <text x="740" y="430" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
            ρ
          </text>
          <text x="965" y="430" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
            ρ
          </text>
          <text x="885" y="500" fill="#cbd5e1" fontSize="17" textAnchor="middle">
            after internal equilibrium is restored
          </text>
        </g>

        <rect x="135" y="620" width="420" height="70" rx="24" fill="#0f172a" stroke="#f472b6" strokeWidth="4" />
        <text x="345" y="648" fill="#f9a8d4" fontSize="18" fontWeight="900" textAnchor="middle">
          extensive: m, V, n, U, S...
        </text>
        <text x="345" y="678" fill="#cbd5e1" fontSize="16" textAnchor="middle">
          value scales with system size
        </text>

        <rect x="645" y="620" width="420" height="70" rx="24" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="855" y="648" fill="#a7f3d0" fontSize="18" fontWeight="900" textAnchor="middle">
          intensive: T, P, ρ, concentration...
        </text>
        <text x="855" y="678" fill="#cbd5e1" fontSize="16" textAnchor="middle">
          unchanged for a uniform equilibrium phase
        </text>
      </svg>
    </div>
  );
}

function PathLandscapeGraphic() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="path-title path-desc"
        className="h-auto w-full"
      >
        <title id="path-title">State functions and path functions</title>
        <desc id="path-desc">
          Two different routes connect the same initial and final states.
          State-function change is identical, while heat and work depend on the route.
        </desc>

        <defs>
          <linearGradient id="stateA" x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="stateB" x1="0" x2="1">
            <stop offset="0" stopColor="#f472b6" />
            <stop offset="1" stopColor="#be185d" />
          </linearGradient>
          <filter id="pathShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <marker
            id="pathArrowA"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker
            id="pathArrowB"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="36" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          SAME ENDPOINTS, DIFFERENT ROUTES
        </text>

        <g filter="url(#pathShadow)">
          <circle cx="220" cy="390" r="96" fill="url(#stateA)" stroke="#67e8f9" strokeWidth="7" />
          <text x="220" y="380" fill="#ecfeff" fontSize="27" fontWeight="900" textAnchor="middle">
            STATE 1
          </text>
          <text x="220" y="420" fill="#cffafe" fontSize="17" textAnchor="middle">
            X₁, P₁, V₁, T₁
          </text>

          <circle cx="980" cy="390" r="96" fill="url(#stateB)" stroke="#f9a8d4" strokeWidth="7" />
          <text x="980" y="380" fill="#fff1f2" fontSize="27" fontWeight="900" textAnchor="middle">
            STATE 2
          </text>
          <text x="980" y="420" fill="#fce7f3" fontSize="17" textAnchor="middle">
            X₂, P₂, V₂, T₂
          </text>
        </g>

        <path
          id="routeGreen"
          d="M315 345 C475 135 725 135 885 345"
          fill="none"
          stroke="#34d399"
          strokeWidth="5"
          markerEnd="url(#pathArrowA)"
        />
        <path
          id="routeAmber"
          d="M315 435 C480 625 720 625 885 435"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="5"
          markerEnd="url(#pathArrowB)"
        />

        <circle r="12" fill="#d1fae5">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#routeGreen" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#fef3c7">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#routeAmber" />
          </animateMotion>
        </circle>

        <text x="600" y="180" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
          route A: qA, wA
        </text>
        <text x="600" y="610" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">
          route B: qB, wB
        </text>

        <rect x="300" y="655" width="600" height="58" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="691" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          ΔX is identical; q and w may differ.
        </text>
      </svg>
    </div>
  );
}

function ExactnessGraphic() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="exact-title exact-desc"
        className="h-auto w-full"
      >
        <title id="exact-title">Exact differential test</title>
        <desc id="exact-desc">
          A field F(x,y) has differential M dx plus N dy. It is exact when the
          cross partial derivatives are equal in a simply connected region.
        </desc>

        <defs>
          <linearGradient id="exactPanel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#172554" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>
          <filter id="exactShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        <rect width="1200" height="720" rx="36" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          MATHEMATICAL EXACTNESS GATE
        </text>

        <g filter="url(#exactShadow)">
          <rect x="90" y="130" width="1020" height="485" rx="34" fill="url(#exactPanel)" stroke="#a78bfa" strokeWidth="6" />
          <text x="600" y="205" fill="#ddd6fe" fontSize="31" fontWeight="900" textAnchor="middle">
            dF = M(x,y) dx + N(x,y) dy
          </text>

          <rect x="145" y="270" width="400" height="165" rx="28" fill="#0f172a" stroke="#22d3ee" strokeWidth="5" />
          <text x="345" y="320" fill="#a5f3fc" fontSize="22" fontWeight="900" textAnchor="middle">
            CROSS-PARTIAL TEST
          </text>
          <text x="345" y="375" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">
            ∂M/∂y = ∂N/∂x
          </text>
          <text x="345" y="412" fill="#cbd5e1" fontSize="16" textAnchor="middle">
            necessary and locally sufficient under usual conditions
          </text>

          <rect x="655" y="270" width="400" height="165" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
          <text x="855" y="320" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
            CYCLIC TEST
          </text>
          <text x="855" y="375" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">
            ∮ dF = 0
          </text>
          <text x="855" y="412" fill="#cbd5e1" fontSize="16" textAnchor="middle">
            closed-cycle change of a state function vanishes
          </text>

          <rect x="245" y="490" width="710" height="75" rx="24" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
          <text x="600" y="522" fill="#fde68a" fontSize="19" fontWeight="900" textAnchor="middle">
            exact differential ⇒ endpoint function exists
          </text>
          <text x="600" y="550" fill="#cbd5e1" fontSize="16" textAnchor="middle">
            inexact differential δq or δw ⇒ no stored “heat content” or “work content”
          </text>
        </g>
      </svg>
    </div>
  );
}

const phaseRows = [
  ["Pure liquid water", "1", "1 liquid phase", "Homogeneous"],
  ["Air after complete mixing", "many", "1 gas phase", "Homogeneous"],
  ["Unsaturated NaCl(aq)", "2", "1 liquid phase", "Homogeneous"],
  ["Ice + liquid water", "1", "2 phases", "Heterogeneous"],
  ["Oil + water", "2", "2 liquid phases", "Heterogeneous"],
  ["Saturated NaCl solution + crystals", "2", "liquid + solid", "Heterogeneous"],
  ["Fog or mist", "air + water", "gas + liquid droplets", "Heterogeneous"],
  ["Granite", "several", "several solid phases", "Heterogeneous"],
  ["Milk at microscopic scale", "multicomponent", "continuous liquid + dispersed droplets", "Colloidal heterogeneous"],
  ["Brass alloy, single solid solution", "multiple", "1 solid phase", "Homogeneous"],
];

function PhaseTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-[900px] border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">System</th>
            <th className="px-4 py-3 font-black text-white">Components</th>
            <th className="px-4 py-3 font-black text-white">Phases</th>
            <th className="px-4 py-3 font-black text-white">Classification</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {phaseRows.map(([system, components, phases, classification]) => (
            <tr key={system}>
              <td className="px-4 py-3 font-semibold text-slate-100">{system}</td>
              <td className="px-4 py-3 text-slate-300">{components}</td>
              <td className="px-4 py-3 text-slate-300">{phases}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-black ${
                    classification.startsWith("Homogeneous")
                      ? "bg-cyan-400/15 text-cyan-300"
                      : "bg-fuchsia-400/15 text-fuchsia-300"
                  }`}
                >
                  {classification}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const intensiveGroups = [
  {
    title: "Composition and concentration",
    tone: "cyan" as Tone,
    items: [
      "molarity",
      "normality",
      "molality",
      "mass fraction and mass %",
      "volume fraction and volume %",
      "mass/volume %",
      "ppm and ppb",
      "volume strength of H₂O₂",
      "oleum composition label",
      "pH",
    ],
  },
  {
    title: "Mechanical and optical",
    tone: "violet" as Tone,
    items: [
      "pressure",
      "temperature",
      "density",
      "specific gravity",
      "refractive index",
      "viscosity",
      "surface tension",
      "coefficient of friction",
      "vapour pressure",
    ],
  },
  {
    title: "Electrical and magnetic",
    tone: "amber" as Tone,
    items: [
      "dielectric constant / relative permittivity",
      "magnetic permeability",
      "EMF of a cell",
      "resistivity",
      "conductivity",
    ],
  },
  {
    title: "Chemical and molar",
    tone: "emerald" as Tone,
    items: [
      "Ka, Kb, pKa, pKb",
      "KH and Ksp",
      "other equilibrium constants",
      "molar mass",
      "molar volume",
      "molar heat capacity",
      "molar internal energy",
      "van der Waals a and b for a specified substance",
    ],
  },
];

const extensiveItems = [
  "mass",
  "volume",
  "amount of substance",
  "number of molecules",
  "internal energy U",
  "enthalpy H",
  "entropy S",
  "Helmholtz energy A",
  "Gibbs energy G",
  "heat capacity C",
  "total electric charge",
  "total magnetisation under additive modelling",
];

function PropertyAtlas() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {intensiveGroups.map((group) => (
          <article
            key={group.title}
            className={`rounded-3xl border p-5 ${toneStyles[group.tone]}`}
          >
            <h3 className="text-lg font-black text-white">{group.title}</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => (
                <div key={item} className="rounded-xl bg-black/20 px-3 py-2 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="rounded-3xl border border-rose-400/25 bg-rose-400/[0.06] p-5">
        <h3 className="text-lg font-black text-white">Extensive property atlas</h3>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {extensiveItems.map((item) => (
            <div key={item} className="rounded-xl bg-black/20 px-3 py-2 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

const ambiguousRows = [
  [
    "Electrical resistance R",
    "Not a pure thermodynamic extensive property",
    "R = ρL/A depends on geometry. Joining identical conductors in series or parallel changes scaling differently.",
  ],
  [
    "Electrical conductance",
    "Not a pure thermodynamic extensive property",
    "It is reciprocal resistance and also geometry dependent.",
  ],
  [
    "Resistivity ρe",
    "Intensive material property",
    "Independent of sample size at fixed state and composition.",
  ],
  [
    "Conductivity κ",
    "Intensive material property",
    "Reciprocal of resistivity; independent of geometry.",
  ],
  [
    "Surface area",
    "Extensive only for geometrically similar scaling",
    "Ordinary partition can create new area, so simple additivity needs care.",
  ],
  [
    "Pressure",
    "Intensive",
    "Equal in mechanically equilibrated connected regions, but not necessarily uniform in a gravitational field.",
  ],
  [
    "Temperature",
    "Intensive",
    "Equal only after thermal equilibrium; a temperature gradient means the total system is not in thermal equilibrium.",
  ],
  [
    "Molar volume",
    "Intensive derived quantity",
    "Vm = V/n is extensive divided by extensive.",
  ],
  [
    "Specific volume",
    "Intensive derived quantity",
    "v = V/m is extensive divided by extensive.",
  ],
];

function AmbiguousTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-[1000px] border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Quantity</th>
            <th className="px-4 py-3 font-black text-white">Correct classification</th>
            <th className="px-4 py-3 font-black text-white">Why</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {ambiguousRows.map(([quantity, classification, reason]) => (
            <tr key={quantity}>
              <td className="px-4 py-3 font-semibold text-slate-100">{quantity}</td>
              <td className="px-4 py-3 text-cyan-200">{classification}</td>
              <td className="px-4 py-3 leading-6 text-slate-300">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const functionRows = [
  ["Pressure P", "State function / property", "Defined for an equilibrium state"],
  ["Volume V", "State function / property", "Endpoint value belongs to the state"],
  ["Temperature T", "State function / property", "Endpoint value belongs to the state"],
  ["Internal energy U", "State function", "ΔU depends only on states 1 and 2"],
  ["Enthalpy H", "State function", "Defined from U + PV"],
  ["Entropy S", "State function", "Exact differential dS"],
  ["Gibbs energy G", "State function", "Exact differential dG"],
  ["Helmholtz energy A", "State function", "Exact differential dA"],
  ["Heat q", "Path function", "Amount transferred depends on process route"],
  ["Work w", "Path function", "Amount transferred depends on process route"],
];

function FunctionTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-[850px] border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Quantity</th>
            <th className="px-4 py-3 font-black text-white">Type</th>
            <th className="px-4 py-3 font-black text-white">Reason</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {functionRows.map(([quantity, type, reason]) => (
            <tr key={quantity}>
              <td className="px-4 py-3 font-semibold text-slate-100">{quantity}</td>
              <td className="px-4 py-3 text-violet-200">{type}</td>
              <td className="px-4 py-3 text-slate-300">{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const exactnessExamples = [
  {
    form: "dF = 2x dx + 2y dy",
    test: "∂(2x)/∂y = 0 and ∂(2y)/∂x = 0",
    result: "Exact; F = x² + y² + constant",
  },
  {
    form: "ω = y dx + x dy",
    test: "∂y/∂y = 1 and ∂x/∂x = 1",
    result: "Exact; F = xy + constant",
  },
  {
    form: "ω = y dx − x dy",
    test: "∂y/∂y = 1 but ∂(−x)/∂x = −1",
    result: "Inexact",
  },
  {
    form: "ω = (2xy + 3)dx + x²dy",
    test: "∂M/∂y = 2x and ∂N/∂x = 2x",
    result: "Exact; F = x²y + 3x + constant",
  },
];

function ExactnessExamples() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {exactnessExamples.map((item) => (
        <article key={item.form} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <p className="font-mono text-lg font-black text-white">{item.form}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.test}</p>
          <p className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm font-semibold text-emerald-200">
            {item.result}
          </p>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Component versus phase",
    question:
      "A sealed vessel contains ice and liquid water at equilibrium. How many components and phases are present?",
    solution:
      "One component, H₂O, but two phases: solid ice and liquid water. Component count and phase count are different.",
  },
  {
    title: "Fog classification",
    question:
      "Why is fog heterogeneous even though it may look uniform from far away?",
    solution:
      "Fog contains liquid-water droplets dispersed in a gas phase. At the phase scale, liquid–gas interfaces exist throughout.",
  },
  {
    title: "Single-phase alloy",
    question:
      "Can a solid containing two chemical elements be homogeneous?",
    solution:
      "Yes. A single-phase solid solution such as suitable brass can be homogeneous even though it has more than one component.",
  },
  {
    title: "Partition-test limitation",
    question:
      "A metal rod has a temperature gradient. It is divided into unequal parts. Must temperature be the same in both parts because temperature is intensive?",
    solution:
      "No. Intensive means independent of amount for comparable equilibrium states. A non-equilibrium rod can have different local temperatures.",
  },
  {
    title: "Ratio of extensive quantities",
    question:
      "Show that density is intensive when mass and volume both scale by λ.",
    solution:
      "Under scaling, m′ = λm and V′ = λV. Therefore ρ′ = m′/V′ = λm/(λV) = ρ.",
  },
  {
    title: "Molar quantity",
    question:
      "A system has total internal energy U and amount n. Why is Um = U/n intensive?",
    solution:
      "Both U and n scale linearly with system size, so their ratio is invariant under uniform scaling.",
  },
  {
    title: "Resistance trap",
    question:
      "A wire is cut into two equal lengths. Each half has half the resistance. Does this prove resistance is extensive?",
    solution:
      "No. Resistance depends on geometry through R = ρL/A. Combining samples in parallel or changing shape breaks simple thermodynamic additivity.",
  },
  {
    title: "Additivity trap",
    question:
      "Two equal copper blocks at the same temperature are combined. Which quantities add: mass, entropy, temperature, density?",
    solution:
      "Mass and entropy add. Temperature and density remain unchanged; adding intensive values is meaningless.",
  },
  {
    title: "Heat and work",
    question:
      "A gas reaches the same final state by two routes. Why can q differ even though ΔU is fixed?",
    solution:
      "Internal energy is a state function. Heat and work are path-dependent transfers constrained by the first law, so different routes can partition the fixed ΔU differently.",
  },
  {
    title: "Closed-cycle state function",
    question:
      "A system undergoes a cycle and returns to its initial state. What is ∮dU?",
    solution:
      "Zero, because U is a state function and the final state equals the initial state.",
  },
  {
    title: "Exactness test",
    question:
      "Determine whether ω = (3x² + 2y)dx + (2x + 4y³)dy is exact.",
    solution:
      "M = 3x² + 2y and N = 2x + 4y³. ∂M/∂y = 2 and ∂N/∂x = 2, so the form is exact.",
  },
  {
    title: "Recover the state function",
    question:
      "For the previous exact form, determine F(x,y).",
    solution:
      "Integrate M with respect to x: F = x³ + 2xy + g(y). Comparing ∂F/∂y = 2x + g′(y) with N gives g′(y)=4y³, so F=x³+2xy+y⁴+C.",
  },
  {
    title: "Ideal-gas pressure",
    question:
      "For one mole of an ideal gas, P(T,V)=RT/V. Show that P is a state function.",
    solution:
      "P is explicitly a single-valued function of the state variables T and V. Its differential dP=(R/V)dT−(RT/V²)dV is exact because ∂(R/V)/∂V=−R/V² and ∂(−RT/V²)/∂T=−R/V².",
  },
  {
    title: "Path integral contrast",
    question:
      "For ω = y dx − x dy, compare the integral from (0,0) to (1,1) along y=x and along the broken path (0,0)→(1,0)→(1,1).",
    solution:
      "Along y=x, dy=dx and ω=x dx−x dx=0. Along the broken path, the first segment gives 0 and the second gives −∫₀¹dy=−1. Different values prove path dependence.",
  },
  {
    title: "Molar entropy of a composite",
    question:
      "Two phases have different molar entropies. Can the total-system entropy divided by total moles be treated as the molar entropy of either phase?",
    solution:
      "No. It is an overall composition-weighted average for the complete system, not necessarily the local molar entropy of either phase.",
  },
  {
    title: "Equilibrium constant classification",
    question:
      "Why is K at a fixed temperature intensive even though equilibrium amounts change with system size?",
    solution:
      "K depends on temperature and the chosen standard-state convention, not on multiplying every equilibrium amount by the same scale factor.",
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

function DailyLifeGrid() {
  const cases = [
    {
      title: "Fogged bathroom mirror",
      text:
        "The humid air is a gas phase, while condensed droplets form a liquid phase on the mirror. A visually smooth surface can still be multiphase microscopically.",
      tone: "sky" as Tone,
    },
    {
      title: "Salad dressing",
      text:
        "Oil and aqueous vinegar form two liquid phases. Vigorous shaking creates a temporary dispersion, not necessarily a single thermodynamic phase.",
      tone: "amber" as Tone,
    },
    {
      title: "Perfume concentration",
      text:
        "Concentration is intensive: doubling both perfume and solvent at the same composition doubles the amount but not the concentration.",
      tone: "violet" as Tone,
    },
    {
      title: "Two routes up a hill",
      text:
        "Altitude change depends only on endpoints, while walking distance depends on the chosen trail. This mirrors state-function versus path-function thinking.",
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

export default function ThermodynamicsPart02() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(34,211,238,0.22),transparent_31%),radial-gradient(circle_at_88%_12%,rgba(168,85,247,0.20),transparent_28%),radial-gradient(circle_at_52%_100%,rgba(163,230,53,0.11),transparent_36%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="amber">FOUNDATION LESSON</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Properties Layer
              </p>
              <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Phase, scaling and the mathematics of state
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A phase tells us where a system is uniform. Scaling separates
                extensive quantities from intensive ones. Exact differentials reveal
                which quantities belong to the state itself.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Three master tests
              </p>
              <div className="mt-4 space-y-3">
                <Formula label="Scaling">
                  X(λn) = λX(n) ⇒ extensive
                </Formula>
                <Formula label="Intensive">
                  Y(λn) = Y(n)
                </Formula>
                <Formula label="Exactness">
                  ∂M/∂y = ∂N/∂x
                </Formula>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <GlossyPhaseGraphic />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="State, equilibrium state and state variables"
          subtitle="Part 01 introduced state; this lesson sharpens the meaning before classifying properties."
        >
          <p>
            A thermodynamic state is specified by a sufficient set of macroscopic
            variables. At equilibrium, those variables have definite, reproducible
            values and no unbalanced thermal, mechanical, phase or chemical driving
            force remains inside the system.
          </p>

          <Formula label="State description">
            state = sufficient independent variables + composition + constraints
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <Lens title="Not every listed variable is independent" tone="cyan">
              An equation of state links pressure, volume, temperature and
              composition. For a fixed amount of ideal gas, specifying any two of
              P, V and T fixes the third.
            </Lens>
            <Lens title="A gradient means non-equilibrium" tone="rose" label="Condition Gate">
              A system with internal temperature or pressure gradients cannot be
              described by one global equilibrium temperature or pressure without an
              approximation.
            </Lens>
          </div>
        </Section>

        <Section
          index="02"
          title="Homogeneous and heterogeneous systems"
          subtitle="Classification is based on the number of phases, not merely the number of substances."
        >
          <p>
            A phase is a physically distinct homogeneous region having uniform
            composition and macroscopic properties throughout. Different phases are
            separated by an interface across which at least one property changes
            discontinuously.
          </p>

          <PhaseTable />

          <div className="grid gap-4 md:grid-cols-2">
            <Lens title="One component can form several phases" tone="violet">
              Ice and liquid water contain only H₂O, yet they form two phases because
              solid and liquid regions have different structures and properties.
            </Lens>
            <Lens title="Several components can form one phase" tone="emerald">
              A completely mixed gas or single solid solution may contain several
              chemical species but remain one homogeneous phase.
            </Lens>
          </div>
        </Section>

        <Section
          index="03"
          title="Thermodynamic properties"
          subtitle="Properties describe the state; heat and work describe transfer during a process."
        >
          <p>
            Thermodynamic properties are measurable or calculable macroscopic
            quantities used to specify or characterize the state of a system.
            Pressure, volume, temperature, internal energy, entropy and composition
            are examples.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <Lens title="Mechanical" tone="cyan">
              Pressure, volume, compressibility and expansion coefficients.
            </Lens>
            <Lens title="Thermal" tone="amber">
              Temperature, internal energy, entropy and heat capacities.
            </Lens>
            <Lens title="Chemical/electrical" tone="violet">
              Composition, chemical potential, EMF and equilibrium constants.
            </Lens>
          </div>

          <Lens title="Heat and work are not thermodynamic properties" tone="rose" label="Language Discipline">
            A state has U, H, S and G. It does not contain q or w. Heat and work are
            process quantities defined only while energy crosses the chosen boundary.
          </Lens>
        </Section>

        <Section
          index="04"
          title="Intensive and extensive properties"
          subtitle="Use scaling first; the partition test is a practical visualization of the same principle."
        >
          <ScalingGraphic />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Extensive scaling">
              X(λN) = λX(N)
            </Formula>
            <Formula label="Intensive scaling">
              Y(λN) = Y(N)
            </Formula>
          </div>

          <Lens title="Partition test requires a uniform equilibrium phase" tone="amber">
            Divide the system into unequal portions without changing local state.
            Extensive quantities divide with amount; intensive quantities remain the
            same. The shortcut fails when the original system has gradients or
            multiple phases with different local values.
          </Lens>
        </Section>

        <Section
          index="05"
          title="Complete chapter property atlas"
          subtitle="Every listed example is retained, grouped and scientifically clarified."
        >
          <PropertyAtlas />
          <AmbiguousTable />
        </Section>

        <Section
          index="06"
          title="Derived intensive properties"
          subtitle="A ratio of two linearly extensive quantities is intensive."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Formula label="Density">
              ρ = m/V
            </Formula>
            <Formula label="Molar volume">
              Vₘ = V/n
            </Formula>
            <Formula label="Specific volume">
              v = V/m
            </Formula>
            <Formula label="Molar internal energy">
              Uₘ = U/n
            </Formula>
          </div>

          <Lens title="“Molar” and “specific” usually convert extensive to intensive" tone="emerald">
            Dividing an additive quantity by amount of substance or mass removes its
            dependence on total system size. Always check that numerator and
            denominator scale in the same way.
          </Lens>

          <Lens title="Only extensive quantities add directly" tone="rose" label="Trap Detector">
            Total mass, volume under additive conditions, internal energy and entropy
            can be summed over subsystems. Temperatures, pressures and densities
            cannot be added to obtain a total.
          </Lens>
        </Section>

        <Section
          index="07"
          title="State functions and path functions"
          subtitle="Endpoint functions belong to states; transfer quantities depend on how the process is performed."
        >
          <PathLandscapeGraphic />
          <FunctionTable />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="State-function change">
              ΔX = X₂ − X₁
            </Formula>
            <Formula label="Closed cycle">
              ∮dX = 0
            </Formula>
          </div>

          <Lens title="Notation matters" tone="violet">
            Exact differentials use dU, dS and dG. Heat and work are often written
            δq and δw to signal that no state function q or w exists whose ordinary
            differential they represent.
          </Lens>
        </Section>

        <Section
          index="08"
          title="Exact and inexact differentials"
          subtitle="The chapter reciprocity idea becomes a practical mathematical test."
        >
          <ExactnessGraphic />

          <Formula label="General two-variable differential">
            dF = M(x,y)dx + N(x,y)dy
          </Formula>

          <Formula label="Exactness condition">
            (∂M/∂y)ₓ = (∂N/∂x)ᵧ
          </Formula>

          <ExactnessExamples />

          <Lens title="Domain condition" tone="amber">
            Equality of cross partials is the standard local test when the functions
            are smooth and the domain has no topological obstruction. For JEE-level
            applications, the stated domain is normally assumed suitable.
          </Lens>
        </Section>

        <Section
          index="09"
          title="Ideal-gas pressure as a state function"
          subtitle="The proof is recast as an exact-differential demonstration."
        >
          <Formula label="Equation of state">
            P(T,V) = nRT/V
          </Formula>

          <Formula label="Differential">
            dP = (nR/V)dT − (nRT/V²)dV
          </Formula>

          <Formula label="Cross-partial equality">
            ∂(nR/V)/∂V = ∂(−nRT/V²)/∂T = −nR/V²
          </Formula>

          <Lens title="Why this proves state character" tone="cyan">
            Pressure is a single-valued function of equilibrium state variables.
            The integral of dP between two states is P₂−P₁ and is independent of the
            route taken through the T–V plane.
          </Lens>
        </Section>

        <Section
          index="10"
          title="Thermodynamics around you"
          subtitle="Original daily-life analogies strengthen phase and path reasoning."
        >
          <DailyLifeGrid />
        </Section>


        <ThermodynamicsCompleteDerivations part={2} />

<Section
          index="11"
          title="Complete theory, diagrams, derivations and worked examples"
          subtitle="Sixteen original problems spanning phase analysis, scaling, additivity and path dependence."
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
                Count phases → test scaling → test endpoints → test exactness
              </h2>
            </div>
            <Chip tone="emerald">PART 02 LOCAL REVIEW READY</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Phase", "uniform macroscopic region"],
              ["Extensive", "scales and adds"],
              ["Intensive", "independent of size"],
              ["State function", "endpoint dependent only"],
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
