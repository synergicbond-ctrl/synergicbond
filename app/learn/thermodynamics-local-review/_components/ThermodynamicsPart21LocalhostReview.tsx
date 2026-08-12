import React from "react";

import ThermodynamicsIntegratedEnrichment from "./ThermodynamicsIntegratedEnrichment";
import ThermodynamicsCompleteDerivations from "./ThermodynamicsCompleteDerivations";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "sky";

const toneMap: Record<Tone, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber: "border-amber-400/25 bg-amber-400/[0.07] text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose: "border-rose-400/25 bg-rose-400/[0.07] text-rose-200",
  sky: "border-sky-400/25 bg-sky-400/[0.07] text-sky-200",
};

function Chip({ children, tone = "cyan" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${toneMap[tone]}`}>
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
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
          {index}
        </span>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-400">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200 md:text-base">{children}</div>
    </section>
  );
}

function ConceptLens({
  title,
  children,
  tone = "cyan",
}: {
  title: string;
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <aside className={`rounded-2xl border p-5 ${toneMap[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">Synergic Bond Concept Lens</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </aside>
  );
}

function Formula({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/30 p-4 text-center">
      {label ? (
        <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{label}</p>
      ) : null}
      <div className="whitespace-nowrap font-mono text-lg font-black text-white md:text-xl">{children}</div>
    </div>
  );
}

function AbsoluteEntropyLadderAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="absolute-title absolute-description"
        className="h-auto w-full"
      >
        <title id="absolute-title">Absolute entropy trends across phases and molecular freedom</title>
        <desc id="absolute-description">
          A particle model compares solids, liquids, and gases and shows increasing accessible motion and entropy.
        </desc>

        <defs>
          <marker id="aeArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ABSOLUTE ENTROPY GENERALLY RISES WITH ACCESSIBLE MOTION
        </text>

        {[
          { x: 65, title: "SOLID", stroke: "#22d3ee", subtitle: "restricted lattice motion" },
          { x: 445, title: "LIQUID", stroke: "#fbbf24", subtitle: "mobile local structure" },
          { x: 825, title: "GAS", stroke: "#f472b6", subtitle: "large translational volume" },
        ].map((state, index) => (
          <g key={state.title}>
            <rect x={state.x} y="155" width="310" height="370" rx="32" fill="#0f172a" stroke={state.stroke} strokeWidth="5" />
            <text x={state.x + 155} y="205" fill={state.stroke} fontSize="28" fontWeight="900" textAnchor="middle">
              {state.title}
            </text>
            {Array.from({ length: index === 2 ? 10 : 16 }).map((_, i) => {
              const cols = index === 2 ? 3 : 4;
              const cx = state.x + 55 + (i % cols) * (index === 2 ? 100 : 66);
              const cy = 275 + Math.floor(i / cols) * (index === 2 ? 75 : 65);
              return (
                <circle key={i} cx={cx} cy={cy} r={index === 2 ? 12 : 11} fill={state.stroke}>
                  <animate
                    attributeName={index === 0 ? "r" : i % 2 ? "cx" : "cy"}
                    values={
                      index === 0
                        ? "9;13;9"
                        : i % 2
                          ? `${cx - 20};${cx + 30};${cx - 20}`
                          : `${cy - 18};${cy + 28};${cy - 18}`
                    }
                    dur={`${1.5 + i * 0.08}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
            <text x={state.x + 155} y="570" fill="#cbd5e1" fontSize="20" textAnchor="middle">
              {state.subtitle}
            </text>
          </g>
        ))}

        <path d="M205 640 H995" stroke="#34d399" strokeWidth="5" markerEnd="url(#aeArrow)" />
        <text x="600" y="620" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">
          increasing accessible microstates
        </text>

        <rect x="315" y="680" width="570" height="45" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="710" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          S°(g) ≫ S°(l) &gt; S°(s), for the same substance under comparable conditions
        </text>
      </svg>
    </div>
  );
}

function SolvationEntropyAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="solvation-title solvation-description"
        className="h-auto w-full"
      >
        <title id="solvation-title">Contrasting entropy effects of dissolving solids, liquids, and gases</title>
        <desc id="solvation-description">
          Dissolving a crystal can increase particle dispersion, whereas dissolving a gas removes much of its translational freedom.
          Solvent ordering may modify either trend.
        </desc>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          DISSOLUTION ENTROPY IS A BALANCE OF DISPERSION AND SOLVENT ORDERING
        </text>

        <g>
          <text x="300" y="120" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">
            CRYSTAL OR LIQUID → AQUEOUS
          </text>
          <rect x="70" y="160" width="460" height="400" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="5" />

          <rect x="120" y="235" width="135" height="135" rx="20" fill="#164e63" />
          {Array.from({ length: 9 }).map((_, i) => (
            <circle key={i} cx={145 + (i % 3) * 42} cy={260 + Math.floor(i / 3) * 42} r="10" fill="#67e8f9" />
          ))}

          {Array.from({ length: 9 }).map((_, i) => (
            <circle key={`d-${i}`} cx={315 + (i % 3) * 70} cy={225 + Math.floor(i / 3) * 95} r="11" fill="#86efac">
              <animate attributeName="opacity" values="0.35;1;0.35" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite" />
            </circle>
          ))}

          <text x="300" y="450" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
            dispersion often raises S°
          </text>
          <text x="300" y="500" fill="#cbd5e1" fontSize="19" textAnchor="middle">
            but strong hydration can oppose the increase
          </text>
        </g>

        <line x1="600" y1="125" x2="600" y2="590" stroke="#334155" strokeWidth="4" />

        <g>
          <text x="900" y="120" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">
            GAS → AQUEOUS
          </text>
          <rect x="670" y="160" width="460" height="400" rx="32" fill="#0f172a" stroke="#fb7185" strokeWidth="5" />

          {Array.from({ length: 10 }).map((_, i) => (
            <circle
              key={`g-${i}`}
              cx={720 + (i % 4) * 115}
              cy={215 + Math.floor(i / 4) * 105}
              r="12"
              fill="#f472b6"
            >
              <animate
                attributeName={i % 2 ? "cx" : "cy"}
                values={
                  i % 2
                    ? `${700 + (i % 4) * 115};${750 + (i % 4) * 100};${700 + (i % 4) * 115}`
                    : `${200 + Math.floor(i / 4) * 105};${245 + Math.floor(i / 4) * 95};${200 + Math.floor(i / 4) * 105}`
                }
                dur={`${1.4 + i * 0.08}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          <rect x="760" y="385" width="280" height="105" rx="24" fill="#164e63" stroke="#22d3ee" strokeWidth="4" />
          <text x="900" y="430" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">
            dissolved molecules
          </text>
          <text x="900" y="465" fill="#cbd5e1" fontSize="19" textAnchor="middle">
            restricted translational freedom
          </text>
        </g>

        <rect x="175" y="635" width="850" height="70" rx="25" fill="#0f172a" stroke="#fbbf24" strokeWidth="5" />
        <text x="600" y="665" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">
          Examples: CH₃OH(l) 127 → CH₃OH(aq) 132.3;
        </text>
        <text x="600" y="695" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">
          HCl(g) 186.7 → HCl(aq) 55.2 J mol⁻¹ K⁻¹
        </text>
      </svg>
    </div>
  );
}

function ReactionEntropyLedgerAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 740"
        role="img"
        aria-labelledby="reaction-ledger-title reaction-ledger-description"
        className="h-auto w-full"
      >
        <title id="reaction-ledger-title">Stoichiometric reaction entropy ledger</title>
        <desc id="reaction-ledger-description">
          Standard molar entropies of products and reactants are multiplied by stoichiometric coefficients.
          The product total minus reactant total gives the reaction entropy.
        </desc>

        <rect width="1200" height="740" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          REACTION ENTROPY = STOICHIOMETRIC PRODUCT TOTAL − REACTANT TOTAL
        </text>

        <rect x="70" y="135" width="445" height="385" rx="32" fill="#0f172a" stroke="#fb7185" strokeWidth="5" />
        <text x="292" y="190" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">REACTANTS</text>

        <rect x="120" y="245" width="150" height="120" rx="22" fill="#4c1d95" stroke="#a78bfa" strokeWidth="4" />
        <text x="195" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">aA(m)</text>
        <text x="195" y="330" fill="#ddd6fe" fontSize="20" textAnchor="middle">aS°A</text>

        <rect x="315" y="245" width="150" height="120" rx="22" fill="#4c1d95" stroke="#a78bfa" strokeWidth="4" />
        <text x="390" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">bB(n)</text>
        <text x="390" y="330" fill="#ddd6fe" fontSize="20" textAnchor="middle">bS°B</text>

        <text x="292" y="445" fill="#f9a8d4" fontSize="22" fontWeight="900" textAnchor="middle">
          aS°A + bS°B
        </text>

        <rect x="685" y="135" width="445" height="385" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="907" y="190" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">PRODUCTS</text>

        <rect x="735" y="245" width="150" height="120" rx="22" fill="#164e63" stroke="#22d3ee" strokeWidth="4" />
        <text x="810" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">cC(o)</text>
        <text x="810" y="330" fill="#a5f3fc" fontSize="20" textAnchor="middle">cS°C</text>

        <rect x="930" y="245" width="150" height="120" rx="22" fill="#164e63" stroke="#22d3ee" strokeWidth="4" />
        <text x="1005" y="290" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">dD(p)</text>
        <text x="1005" y="330" fill="#a5f3fc" fontSize="20" textAnchor="middle">dS°D</text>

        <text x="907" y="445" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
          cS°C + dS°D
        </text>

        <path d="M530 330 H670" stroke="#fbbf24" strokeWidth="5" />
        <polygon points="670,330 640,312 640,348" fill="#fbbf24" />

        <rect x="185" y="580" width="830" height="92" rx="28" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="620" fill="#ddd6fe" fontSize="24" fontWeight="900" textAnchor="middle">
          ΔrS° = ΣνS°m(products) − ΣνS°m(reactants)
        </text>
        <text x="600" y="655" fill="#cbd5e1" fontSize="19" textAnchor="middle">
          Physical states m, n, o, p and the chosen temperature and pressure are part of the data.
        </text>
      </svg>
    </div>
  );
}

function UniverseGibbsAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 780"
        role="img"
        aria-labelledby="gibbs-title gibbs-description"
        className="h-auto w-full"
      >
        <title id="gibbs-title">Connection between system entropy, surroundings entropy, universe entropy, and Gibbs energy</title>
        <desc id="gibbs-description">
          At constant temperature and pressure, surroundings entropy equals minus reaction enthalpy divided by temperature.
          Adding system entropy gives universe entropy, which is equal to negative Gibbs energy change divided by temperature.
        </desc>

        <defs>
          <marker id="ugArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="780" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          CONSTANT T, P: THE UNIVERSE CRITERION BECOMES THE GIBBS CRITERION
        </text>

        <rect x="80" y="145" width="300" height="195" rx="28" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
        <text x="230" y="195" fill="#a5f3fc" fontSize="24" fontWeight="900" textAnchor="middle">SYSTEM</text>
        <text x="230" y="255" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">ΔSsys = ΔrS</text>
        <text x="230" y="300" fill="#cbd5e1" fontSize="19" textAnchor="middle">from third-law molar entropies</text>

        <rect x="820" y="145" width="300" height="195" rx="28" fill="#0f172a" stroke="#f97316" strokeWidth="4" />
        <text x="970" y="195" fill="#fed7aa" fontSize="24" fontWeight="900" textAnchor="middle">SURROUNDINGS</text>
        <text x="970" y="255" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">ΔSsurr = −ΔrH/T</text>
        <text x="970" y="300" fill="#cbd5e1" fontSize="19" textAnchor="middle">ideal reservoir at temperature T</text>

        <path d="M400 242 H790" stroke="#a78bfa" strokeWidth="5" />
        <polygon points="790,242 760,224 760,260" fill="#a78bfa" />
        <text x="595" y="210" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">heat exchange links the ledgers</text>

        <rect x="260" y="430" width="680" height="125" rx="30" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="475" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">
          ΔSuniv = ΔrS − ΔrH/T
        </text>
        <text x="600" y="525" fill="#f8fafc" fontSize="27" fontWeight="900" textAnchor="middle">
          TΔSuniv = −(ΔrH − TΔrS) = −ΔrG
        </text>

        <path d="M600 570 V635" stroke="#34d399" strokeWidth="5" markerEnd="url(#ugArrow)" />

        <rect x="285" y="650" width="630" height="78" rx="26" fill="#0f172a" stroke="#fbbf24" strokeWidth="5" />
        <text x="600" y="684" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          spontaneous at constant T, P
        </text>
        <text x="600" y="716" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">
          ΔSuniv &gt; 0 ⇔ ΔrG &lt; 0
        </text>
      </svg>
    </div>
  );
}

function SpontaneityQuadrantGraphic() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 820"
        role="img"
        aria-labelledby="quadrant-title quadrant-description"
        className="h-auto w-full"
      >
        <title id="quadrant-title">Temperature-dependent spontaneity quadrant map</title>
        <desc id="quadrant-description">
          Four combinations of reaction enthalpy and entropy are classified using Gibbs energy.
        </desc>

        <rect width="1200" height="820" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ΔG = ΔH − TΔS: ALL FOUR SIGN COMBINATIONS
        </text>

        <line x1="600" y1="125" x2="600" y2="710" stroke="#e2e8f0" strokeWidth="4" />
        <line x1="130" y1="415" x2="1070" y2="415" stroke="#e2e8f0" strokeWidth="4" />

        <text x="1090" y="427" fill="#e2e8f0" fontSize="22">ΔS &gt; 0</text>
        <text x="75" y="427" fill="#e2e8f0" fontSize="22">ΔS &lt; 0</text>
        <text x="615" y="115" fill="#e2e8f0" fontSize="22">ΔH &gt; 0</text>
        <text x="615" y="750" fill="#e2e8f0" fontSize="22">ΔH &lt; 0</text>

        <rect x="145" y="145" width="420" height="235" rx="30" fill="#4c0519" stroke="#fb7185" strokeWidth="4" />
        <text x="355" y="195" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">ΔH &gt; 0, ΔS &lt; 0</text>
        <text x="355" y="250" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">ΔG &gt; 0 at all T</text>
        <text x="355" y="300" fill="#fda4af" fontSize="21" fontWeight="900" textAnchor="middle">never spontaneous forward</text>
        <text x="355" y="345" fill="#cbd5e1" fontSize="19" textAnchor="middle">under the stated standard conditions</text>

        <rect x="635" y="145" width="420" height="235" rx="30" fill="#422006" stroke="#fbbf24" strokeWidth="4" />
        <text x="845" y="195" fill="#fde68a" fontSize="26" fontWeight="900" textAnchor="middle">ΔH &gt; 0, ΔS &gt; 0</text>
        <text x="845" y="250" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">spontaneous at high T</text>
        <text x="845" y="300" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">T &gt; ΔH/ΔS</text>
        <text x="845" y="345" fill="#cbd5e1" fontSize="19" textAnchor="middle">entropy term must dominate</text>

        <rect x="145" y="450" width="420" height="235" rx="30" fill="#172554" stroke="#60a5fa" strokeWidth="4" />
        <text x="355" y="500" fill="#bfdbfe" fontSize="26" fontWeight="900" textAnchor="middle">ΔH &lt; 0, ΔS &lt; 0</text>
        <text x="355" y="555" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">spontaneous at low T</text>
        <text x="355" y="605" fill="#bfdbfe" fontSize="21" fontWeight="900" textAnchor="middle">T &lt; ΔH/ΔS</text>
        <text x="355" y="650" fill="#cbd5e1" fontSize="19" textAnchor="middle">both ratio terms are positive</text>

        <rect x="635" y="450" width="420" height="235" rx="30" fill="#052e16" stroke="#34d399" strokeWidth="4" />
        <text x="845" y="500" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">ΔH &lt; 0, ΔS &gt; 0</text>
        <text x="845" y="555" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">ΔG &lt; 0 at all T</text>
        <text x="845" y="605" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">always spontaneous forward</text>
        <text x="845" y="650" fill="#cbd5e1" fontSize="19" textAnchor="middle">thermodynamically favourable</text>

        <rect x="305" y="755" width="590" height="42" rx="18" fill="#0f172a" stroke="#a78bfa" strokeWidth="3" />
        <text x="600" y="783" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          Thermodynamic spontaneity does not predict reaction rate.
        </text>
      </svg>
    </div>
  );
}

function AbsoluteEntropyTrendTable() {
  const rows = [
    ["Physical state", "S°(g) ≫ S°(l) > S°(s)", "greater translational freedom in gases"],
    ["Dissolving solids/liquids", "often raises S°", "dispersion can dominate; not a universal rule"],
    ["Dissolving a gas", "often lowers S°", "loss of gas-phase translational freedom"],
    ["Molar mass", "heavier analogues often have larger S°", "denser translational/rotational levels"],
    ["Bond rigidity", "strong directional networks often have lower S°", "stiffer vibrational modes"],
    ["Softness", "softer bonding often raises S°", "more accessible low-frequency motion"],
    ["Chemical complexity", "more atoms/modes often raise S°", "more rotational and vibrational possibilities"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Comparison factor</th>
            <th className="px-4 py-3 font-black text-white">Predicted trend</th>
            <th className="px-4 py-3 font-black text-white">Scientific interpretation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([factor, trend, meaning]) => (
            <tr key={factor}>
              <td className="px-4 py-3 font-semibold text-slate-100">{factor}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{trend}</td>
              <td className="px-4 py-3 text-slate-300">{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RetainedDataAtlas() {
  const groups = [
    {
      title: "Dissolution examples",
      tone: "cyan" as Tone,
      lines: [
        "CH₃OH(l): 127 J mol⁻¹ K⁻¹",
        "CH₃OH(aq): 132.3 J mol⁻¹ K⁻¹",
        "NaCl(s): 72.4 J mol⁻¹ K⁻¹",
        "NaCl(aq): 115.4 J mol⁻¹ K⁻¹",
        "HCl(g): 186.7 J mol⁻¹ K⁻¹",
        "HCl(aq): 55.2 J mol⁻¹ K⁻¹",
      ],
    },
    {
      title: "Halogen mass trend",
      tone: "violet" as Tone,
      lines: [
        "F₂(g): 203 J mol⁻¹ K⁻¹",
        "Cl₂(g): 223 J mol⁻¹ K⁻¹",
        "Br₂(g): 245 J mol⁻¹ K⁻¹",
      ],
    },
    {
      title: "Network and metallic solids",
      tone: "amber" as Tone,
      lines: [
        "C(diamond): 2.44 J mol⁻¹ K⁻¹",
        "C(graphite): 5.69 J mol⁻¹ K⁻¹",
        "Sn(gray): 44.8 J mol⁻¹ K⁻¹",
        "Sn(white): 51.5 J mol⁻¹ K⁻¹",
      ],
    },
    {
      title: "Softness sequence",
      tone: "rose" as Tone,
      lines: [
        "C(diamond): 2.44",
        "Be(s): 9.54",
        "SiO₂(s): 41.8",
        "Pb(s): 64.9",
        "Hg(l): 77.4",
        "units: J mol⁻¹ K⁻¹",
      ],
    },
    {
      title: "Chemical complexity",
      tone: "emerald" as Tone,
      lines: [
        "NaCl: 72.4 J mol⁻¹ K⁻¹",
        "MgCl₂: 89.5 J mol⁻¹ K⁻¹",
        "AlCl₃: 167 J mol⁻¹ K⁻¹",
      ],
    },
    {
      title: "Hydrated copper sulfate",
      tone: "sky" as Tone,
      lines: [
        "CuSO₄·nH₂O",
        "n = 0: 113",
        "n = 1: 150",
        "n = 3: 225",
        "n = 5: 305",
        "units: J mol⁻¹ K⁻¹",
      ],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <article key={group.title} className={`rounded-3xl border p-5 ${toneMap[group.tone]}`}>
          <h3 className="text-lg font-black text-white">{group.title}</h3>
          <div className="mt-4 space-y-2">
            {group.lines.map((line) => (
              <p key={line} className="rounded-xl bg-black/20 px-3 py-2 text-sm text-slate-200">
                {line}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function PredictionHeuristics() {
  const cards = [
    {
      title: "More gaseous product moles",
      sign: "usually ΔrS > 0",
      text: "Gas particles have much larger translational entropy than condensed species. Count gaseous stoichiometric moles as a first estimate.",
      tone: "emerald" as Tone,
    },
    {
      title: "Solid → liquid → gas",
      sign: "usually ΔrS > 0",
      text: "Phase change toward greater molecular mobility and accessible volume generally raises entropy.",
      tone: "cyan" as Tone,
    },
    {
      title: "Cyclisation",
      sign: "usually ΔrS < 0",
      text: "Ring formation commonly reduces conformational freedom. This—not a universal replacement of rotation by vibration—is the safer explanation.",
      tone: "rose" as Tone,
    },
    {
      title: "Molecular complexity",
      sign: "often raises molar S°",
      text: "Additional atoms, vibrational modes, and conformations generally increase the absolute molar entropy.",
      tone: "violet" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className={`rounded-3xl border p-5 ${toneMap[card.tone]}`}>
          <h3 className="text-lg font-black text-white">{card.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {card.sign}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{card.text}</p>
        </article>
      ))}
    </div>
  );
}

function RetainedReactionExamples() {
  const examples = [
    {
      reaction: "HCOOH(g) → H₂(g) + CO₂(g)",
      trend: "Δn₍g₎ = +1 ⇒ ΔrS predicted positive",
      audit: "The gaseous-mole count rises from one to two, so a positive entropy change is a strong qualitative prediction.",
      tone: "emerald" as Tone,
    },
    {
      reaction: "H₂O(l) → H₂O(g)",
      trend: "ΔrS positive",
      audit: "Vaporisation creates a large increase in translational freedom.",
      tone: "cyan" as Tone,
    },
    {
      reaction: "C₆H₁₂O₆(s) + 6O₂(g) → 6CO₂(g) + 6H₂O(g)",
      trend: "Δn₍g₎ = +6 ⇒ ΔrS predicted positive",
      audit: "Under the given gas-phase water specification, gaseous moles increase from six to twelve.",
      tone: "amber" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {examples.map((item) => (
        <article key={item.reaction} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="font-mono text-base font-black text-white">{item.reaction}</h3>
          <p className="mt-3 text-sm font-bold text-slate-100">{item.trend}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.audit}</p>
        </article>
      ))}
    </div>
  );
}

function SourceQuadrantExamplesTable() {
  const rows = [
    ["−", "+", "all temperatures", "H₂(g)+Cl₂(g)→2HCl(g)", "−185", "≈ +20", "The table gives a small positive entropy value; tabulated data give about +20."],
    ["−", "+", "all temperatures", "C(graphite)+O₂(g)→CO₂(g)", "−394", "+3", "Data are internally consistent."],
    ["−", "−", "low temperature", "H₂(g)+½O₂(g)→H₂O(l)", "−286", "−163", "The enthalpy entry was corrected using internally consistent standard values."],
    ["−", "−", "low temperature", "2SO₂(g)+O₂(g)→2SO₃(g)", "−198", "−187", "Listed values retained."],
    ["+", "+", "high temperature", "NH₄Cl(s)→NH₃(g)+HCl(g)", "+176", "+284", "Listed values retained."],
    ["+", "+", "high temperature", "N₂(g)+O₂(g)→2NO(g)", "+180", "+25", "Listed values retained."],
    ["+", "−", "not spontaneous forward", "3O₂(g)→2O₃(g)", "+286", "−137", "Listed values retained."],
    ["+", "−", "not spontaneous forward", "2H₂O(l)+O₂(g)→2H₂O₂(l)", "+196", "−126", "Listed values retained."],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-[1100px] border-collapse text-left text-xs">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-3 py-3 font-black text-white">ΔH</th>
            <th className="px-3 py-3 font-black text-white">ΔS</th>
            <th className="px-3 py-3 font-black text-white">Forward tendency</th>
            <th className="px-3 py-3 font-black text-white">Reaction example</th>
            <th className="px-3 py-3 font-black text-white">ΔH°298<br />kJ mol⁻¹</th>
            <th className="px-3 py-3 font-black text-white">ΔS°298<br />J mol⁻¹ K⁻¹</th>
            <th className="px-3 py-3 font-black text-white">Audit note</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([h, s, tendency, reaction, hv, sv, note]) => (
            <tr key={reaction}>
              <td className="px-3 py-3 font-black text-cyan-200">{h}</td>
              <td className="px-3 py-3 font-black text-violet-200">{s}</td>
              <td className="px-3 py-3 text-slate-200">{tendency}</td>
              <td className="px-3 py-3 font-mono text-slate-100">{reaction}</td>
              <td className="px-3 py-3 text-amber-200">{hv}</td>
              <td className="px-3 py-3 text-emerald-300">{sv}</td>
              <td className="px-3 py-3 leading-5 text-slate-400">{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WorkedExamples() {
  const examples = [
    {
      title: "Reaction entropy from tabulated values",
      question:
        "At 298 K, use S°(H₂)=130.7, S°(Cl₂)=223.1, and S°(HCl)=186.7 J mol⁻¹ K⁻¹ to calculate ΔrS° for H₂(g)+Cl₂(g)→2HCl(g).",
      solution:
        "ΔrS° = 2(186.7)−130.7−223.1 = +19.6 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Surroundings entropy",
      question:
        "A reaction at 298 K has ΔrH° = −92.0 kJ mol⁻¹. Find ΔSsurr for an ideal constant-temperature reservoir.",
      solution:
        "ΔSsurr = −ΔrH°/T = 92000/298 = +308.7 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Universe and Gibbs criteria",
      question:
        "For the same reaction, ΔrS° = −150 J mol⁻¹ K⁻¹. Determine ΔSuniv and ΔrG° at 298 K.",
      solution:
        "ΔSuniv = −150 + 308.7 = +158.7 J mol⁻¹ K⁻¹. ΔrG° = −TΔSuniv = −47.3 kJ mol⁻¹, so the reaction is spontaneous under standard conditions.",
    },
    {
      title: "Threshold temperature",
      question:
        "A process has ΔH = +60.0 kJ mol⁻¹ and ΔS = +120 J mol⁻¹ K⁻¹. Above what temperature is it spontaneous?",
      solution:
        "Set ΔG = 0: T = ΔH/ΔS = 60000/120 = 500 K. The forward process is spontaneous for T > 500 K.",
    },
    {
      title: "Low-temperature spontaneity",
      question:
        "A reaction has ΔH = −80.0 kJ mol⁻¹ and ΔS = −200 J mol⁻¹ K⁻¹. Find the temperature range for forward spontaneity.",
      solution:
        "ΔG = −80000 + 200T. It is negative for T < 400 K.",
    },
    {
      title: "Dissolution comparison",
      question:
        "Using the given data, find the standard entropy change for NaCl(s)→NaCl(aq).",
      solution:
        "ΔS° = 115.4−72.4 = +43.0 J mol⁻¹ K⁻¹. This is the standard-state entropy difference for the listed conventions.",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {examples.map((item) => (
        <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className=" font-black text-white">
            <span className="mr-2 text-amber-300">◆</span>
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-200">{item.question}</p>
          <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Solution</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.solution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — standard molar entropy",
    question:
      "What is meant by the standard absolute molar entropy S°m of a substance?",
    solution:
      "It is the entropy of one mole in its specified standard state, usually at 1 bar and a stated temperature, referenced through the Third-Law zero for a perfect crystal at 0 K.",
  },
  {
    title: "Concept Application 2 — phase ranking",
    question:
      "Why is the gas entropy usually much larger than the liquid entropy of the same substance?",
    solution:
      "The gas has access to a vastly larger translational volume and many more positional microstates.",
  },
  {
    title: "Concept Application 3 — dissolution warning",
    question:
      "Must dissolving every solid increase the total entropy?",
    solution:
      "No. Solute dispersion tends to raise entropy, but solvent ordering and strong ion hydration can offset or exceed that contribution.",
  },
  {
    title: "Concept Application 4 — dissolved gas",
    question:
      "Why is the standard molar entropy of dissolved HCl much lower than gaseous HCl in the comparison?",
    solution:
      "Dissolution removes most gas-phase translational freedom and introduces strong solvation constraints.",
  },
  {
    title: "Concept Application 5 — mass trend",
    question:
      "Why does F₂(g)<Cl₂(g)<Br₂(g) in standard molar entropy under comparable conditions?",
    solution:
      "Increasing molecular mass compresses the spacing of translational and rotational energy levels, increasing the number of thermally accessible states.",
  },
  {
    title: "Concept Application 6 — graphite versus diamond",
    question:
      "Explain why graphite has a higher standard molar entropy than diamond.",
    solution:
      "Graphite has softer lattice modes and layered structural freedom, whereas diamond is a rigid three-dimensional covalent network.",
  },
  {
    title: "Concept Application 7 — reaction entropy",
    question:
      "Write ΔrS° for aA+bB→cC+dD.",
    solution:
      "ΔrS° = cS°m(C)+dS°m(D)−aS°m(A)−bS°m(B), using the stated physical form of every species.",
  },
  {
    title: "Concept Application 8 — surroundings formula",
    question:
      "Under what conditions may one use ΔSsurr = −ΔrH/T?",
    solution:
      "For a constant-pressure reaction exchanging heat with a large surroundings reservoir maintained at uniform temperature T, with only the stated heat exchange contributing.",
  },
  {
    title: "Concept Application 9 — exothermic reaction",
    question:
      "What is the sign of ΔSsurr for an exothermic reaction at constant T and P?",
    solution:
      "Positive, because ΔrH<0 and ΔSsurr=−ΔrH/T.",
  },
  {
    title: "Concept Application 10 — endothermic reaction",
    question:
      "Can an endothermic reaction be spontaneous?",
    solution:
      "Yes. If ΔS is positive and TΔS exceeds ΔH, then ΔG=ΔH−TΔS<0.",
  },
  {
    title: "Concept Application 11 — exothermic and negative entropy",
    question:
      "A reaction has ΔH<0 and ΔS<0. Explain its temperature dependence.",
    solution:
      "It is favoured at low temperature, where the favourable negative enthalpy dominates the positive contribution −TΔS.",
  },
  {
    title: "Concept Application 12 — entropy-only prediction",
    question:
      "Can the sign of ΔrS alone determine spontaneity at constant T and P?",
    solution:
      "No. Both ΔrH and ΔrS enter ΔrG=ΔrH−TΔrS.",
  },
  {
    title: "Concept Application 13 — gas-mole heuristic",
    question:
      "Why is gaseous mole count only a heuristic for ΔrS?",
    solution:
      "Molecular complexity, symmetry, phase, solvation, and actual tabulated molar entropies may alter or reverse the simple mole-count prediction.",
  },
  {
    title: "Concept Application 14 — cyclisation",
    question:
      "Why does intramolecular ring formation often give a negative entropy change?",
    solution:
      "The cyclic product usually has fewer accessible conformations than the flexible acyclic reactant.",
  },
  {
    title: "Concept Application 15 — equilibrium condition",
    question:
      "Relate ΔG and ΔSuniverse at constant T and P.",
    solution:
      "ΔG = −TΔSuniverse. At equilibrium both are zero for an infinitesimal permitted change.",
  },
  {
    title: "Concept Application 16 — rate versus spontaneity",
    question:
      "Does a large negative ΔG guarantee a rapid reaction?",
    solution:
      "No. ΔG determines thermodynamic direction, while the rate depends on the activation barrier and reaction mechanism.",
  },
];

function ProblemLadder() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {problems.map((item) => (
        <article key={item.title} className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className=" font-black text-white">
            <span className="mr-2 text-amber-300">◆</span>
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-200">{item.question}</p>
          <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Solution</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.solution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const traps = [
  [
    "Every spontaneous reaction must have ΔH<0 and ΔS>0.",
    "Incorrect",
    "The complete criterion at constant T and P is ΔG=ΔH−TΔS<0.",
  ],
  [
    "An exothermic reaction is always spontaneous.",
    "Incorrect",
    "A sufficiently negative entropy change can make ΔG positive at high temperature.",
  ],
  [
    "An endothermic reaction is never spontaneous.",
    "Incorrect",
    "Positive entropy can drive an endothermic process at sufficiently high temperature.",
  ],
  [
    "Dissolving a solid always raises entropy.",
    "Incorrect",
    "Solute dispersion competes with solvent ordering and specific interactions.",
  ],
  [
    "Absolute entropy means entropy without any reference convention.",
    "Refine",
    "Third-Law entropy uses the reference S=0 for a perfect crystal at 0 K; residual entropy is added when disorder remains.",
  ],
  [
    "Tabulated values should be copied without checking.",
    "Incorrect",
    "One water-formation enthalpy entry is internally inconsistent and has been corrected using standard thermochemical data.",
  ],
  [
    "More product gas moles guarantee positive ΔrS.",
    "Incorrect",
    "It is a strong heuristic, not a proof; actual standard molar entropies decide.",
  ],
  [
    "Thermodynamic favourability predicts speed.",
    "Incorrect",
    "Kinetics and activation energy control rate.",
  ],
];

function TrapTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Tempting statement</th>
            <th className="px-4 py-3 font-black text-white">Verdict</th>
            <th className="px-4 py-3 font-black text-white">Correction</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {traps.map(([statement, verdict, correction]) => (
            <tr key={statement}>
              <td className="px-4 py-3 font-semibold text-slate-100">{statement}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-rose-400/15 px-3 py-1 text-xs font-black text-rose-300">{verdict}</span>
              </td>
              <td className="px-4 py-3 leading-6 text-slate-300">{correction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DailyLifeGrid() {
  const items = [
    {
      title: "An ice cube melts in a warm room",
      text: "The system entropy rises during melting, and the room entropy falls as it supplies heat. The total remains positive for spontaneous melting above the equilibrium temperature.",
      tone: "cyan" as Tone,
    },
    {
      title: "Ammonium chloride decomposes on heating",
      text: "The reaction is endothermic but produces gaseous molecules, so a positive entropy term can dominate at high temperature.",
      tone: "amber" as Tone,
    },
    {
      title: "Hydrogen chloride dissolves in water",
      text: "The gas loses translational freedom and becomes strongly solvated, explaining the large fall in the listed standard molar entropy.",
      tone: "violet" as Tone,
    },
    {
      title: "Ozone formation needs energy",
      text: "Forming fewer gas molecules is entropically unfavourable, and the reaction is endothermic; the forward standard process is not spontaneous.",
      tone: "rose" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function ThermodynamicsPart21() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.10),transparent_34%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="amber">ABSOLUTE ENTROPY & SPONTANEITY</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Reaction Direction Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Absolute entropy describes the state; Gibbs energy predicts the direction
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Third-Law molar entropies quantify reactants and products. Reaction enthalpy determines the
                surroundings contribution. At constant temperature and pressure, both combine into the Gibbs criterion.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Direction map
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-base font-black text-white">
                  ΔrS° = ΣνS°products − ΣνS°reactants
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-base font-black text-white">
                  ΔSsurr = −ΔrH/T
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-base font-black text-white">
                  ΔrG = ΔrH − TΔrS
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Standard absolute molar entropy"
          subtitle="One mole in a specified standard state, referenced through the Third Law."
        >
          <Formula label="Symbol and unit">
            S°<sub>m</sub> in J mol⁻¹ K⁻¹
          </Formula>

          <p>
            Standard absolute molar entropy is the entropy of one mole of a substance in its specified standard
            state, normally at a standard pressure of 1 bar and a stated temperature. Its numerical construction
            begins from the Third-Law reference for a perfect crystal at {String.raw`\(0\ \mathrm K\)`}, then integrates reversible
            heating and includes all equilibrium phase-transition entropy changes.
          </p>

          <AbsoluteEntropyLadderAnimation />

          <ConceptLens title="Why “absolute” still uses a reference" tone="violet">
            Unlike enthalpy differences, Third-Law entropy provides a common physically motivated zero.
            A substance with residual orientational disorder at {String.raw`\(0\ \mathrm K\)`} requires a residual-entropy correction.
          </ConceptLens>
        </Section>

        <Section index="02" title="Comparing absolute entropies">
          <AbsoluteEntropyTrendTable />
          <RetainedDataAtlas />

          <ConceptLens title="Label correction" tone="rose">
            The given {String.raw`\(41.8\ \mathrm{J\,mol^{-1}K^{-1}}\)`} entry in the softness sequence corresponds to
            {String.raw`\(\mathrm{SiO_2(s)}\)`}, not {String.raw`\(\mathrm{O_2(s)}\)`}. The chemically consistent species is shown here.
          </ConceptLens>

          <ConceptLens title="Trends are conditional, not universal laws" tone="amber">
            Entropy comparisons require comparable temperature, pressure, physical state, standard-state convention,
            molecular symmetry, and intermolecular interactions.
          </ConceptLens>
        </Section>

        <Section index="03" title="Dissolution and solvation entropy">
          <SolvationEntropyAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Solid or liquid dissolving" tone="emerald">
              Particle dispersion often increases entropy, as in the listed methanol and sodium chloride examples.
              Strong solvent ordering can nevertheless make the total trend smaller or even reverse it.
            </ConceptLens>
            <ConceptLens title="Gas dissolving" tone="rose">
              Gas molecules lose most of their translational volume and become solvated, so their standard molar entropy
              is often much lower in solution.
            </ConceptLens>
          </div>
        </Section>

        <Section
          index="04"
          title="Entropy change of a chemical reaction"
          subtitle="Balanced coefficients and physical states are part of the thermodynamic equation."
        >
          <ReactionEntropyLedgerAnimation />

          <Formula label="General reaction">
            aA(m) + bB(n) → cC(o) + dD(p)
          </Formula>

          <Formula label="Reaction entropy">
            Δ<sub>r</sub>S = cS<sub>C</sub> + dS<sub>D</sub> − aS<sub>A</sub> − bS<sub>B</sub>
          </Formula>

          <Formula label="Standard-state form">
            Δ<sub>r</sub>S° = ΣνS°<sub>m</sub>(products) − ΣνS°<sub>m</sub>(reactants)
          </Formula>

          <ConceptLens title="Why absolute entropies are usable here" tone="cyan">
            All species share the same Third-Law reference convention, so their stoichiometric difference gives a
            meaningful reaction entropy.
          </ConceptLens>
        </Section>

        <Section
          index="05"
          title="Entropy change of the surroundings"
          subtitle="At constant pressure, the reaction enthalpy controls reservoir entropy."
        >
          <Formula label="System heat at constant pressure">
            q<sub>p,sys</sub> = Δ<sub>r</sub>H
          </Formula>

          <Formula label="Heat received by surroundings">
            q<sub>surr</sub> = −Δ<sub>r</sub>H
          </Formula>

          <Formula label="Large reservoir at temperature T">
            ΔS<sub>surr</sub> = q<sub>surr</sub>/T = −Δ<sub>r</sub>H/T
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Exothermic reaction" tone="emerald">
              {String.raw`\(\Delta_rH<0\)`}, so {String.raw`\(\Delta S_{\mathrm{surr}}>0\)`}.
            </ConceptLens>
            <ConceptLens title="Endothermic reaction" tone="rose">
              {String.raw`\(\Delta_rH>0\)`}, so {String.raw`\(\Delta S_{\mathrm{surr}}<0\)`}.
            </ConceptLens>
          </div>

          <ConceptLens title="Assumptions behind −ΔH/T" tone="amber">
            The surroundings are modelled as a large uniform-temperature reservoir, the reaction occurs at constant
            pressure, and the only relevant exchange is the reaction heat.
          </ConceptLens>

          <ConceptLens title="System entropy cannot be obtained from ΔH alone" tone="violet">
            {String.raw`\(\Delta_rS\)`} is calculated from state entropies or another valid entropy route. Enthalpy determines the
            reservoir contribution, not the complete system entropy.
          </ConceptLens>
        </Section>

        <Section
          index="06"
          title="Driving force of a spontaneous chemical process"
          subtitle="The given two-condition shortcut is replaced by the complete thermodynamic criterion."
        >
          <UniverseGibbsAnimation />

          <Formula label="Universe criterion">
            ΔS<sub>univ</sub> = Δ<sub>r</sub>S − Δ<sub>r</sub>H/T
          </Formula>

          <Formula label="Gibbs connection">
            Δ<sub>r</sub>G = Δ<sub>r</sub>H − TΔ<sub>r</sub>S = −TΔS<sub>univ</sub>
          </Formula>

          <Formula label="At constant T and P">
            spontaneous: Δ<sub>r</sub>G &lt; 0 • equilibrium: Δ<sub>r</sub>G = 0
          </Formula>

          <ConceptLens title="Critical correction" tone="rose">
            A spontaneous reaction does not require both {String.raw`\(\Delta H<0\)`} and {String.raw`\(\Delta S>0\)`}.
            Those signs guarantee favourability at every temperature, but the other sign combinations may be
            spontaneous over restricted temperature ranges.
          </ConceptLens>
        </Section>

        <Section index="07" title="Temperature and all four sign combinations">
          <SpontaneityQuadrantGraphic />
        </Section>

        <Section index="08" title="Predicting the sign of reaction entropy">
          <PredictionHeuristics />
          <RetainedReactionExamples />

          <ConceptLens title="Heuristics require final verification" tone="amber">
            Gas-mole count, phase change, cyclisation, and molecular complexity are useful rapid predictors.
            Quantitative work must use tabulated molar entropies.
          </ConceptLens>
        </Section>

        <Section
          index="09"
          title="Spontaneity table—scientifically checked"
          subtitle="All eight visible reaction examples are preserved; one corrupted numerical entry is corrected."
        >
          <SourceQuadrantExamplesTable />

          <ConceptLens title="Standard-state direction is not permanent conversion" tone="violet">
            “Spontaneous” in the sign table means the forward reaction has negative standard Gibbs energy under the
            stated conditions. Equilibrium composition and reaction quotient still determine the actual direction
            away from standard state.
          </ConceptLens>
        </Section>

        <Section index="10" title="Original complete worked examples">
          <WorkedExamples />
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={21} />

<Section index="13" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                System entropy plus reservoir entropy becomes the Gibbs direction test
              </h2>
            </div>
            <Chip tone="emerald">PART 21 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Absolute entropy", "Third-Law referenced S°m"],
              ["Reaction entropy", "ΣνS°products − ΣνS°reactants"],
              ["Surroundings", "−ΔrH/T at constant T, P"],
              ["Spontaneity", "ΔrG = ΔrH − TΔrS < 0"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={21} />


</main>
  );
}
