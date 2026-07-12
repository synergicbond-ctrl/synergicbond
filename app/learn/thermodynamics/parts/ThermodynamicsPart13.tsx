import React from "react";

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
      <p className="text-xs font-black uppercase tracking-[0.2em]">Concept lens</p>
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

function FirstLawBoundaryAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="fl-boundary-title fl-boundary-description"
        className="h-auto w-full"
      >
        <title id="fl-boundary-title">What the First Law can and cannot determine</title>
        <desc id="fl-boundary-description">
          The First Law balances energy but cannot identify spontaneous direction, irreversibility, or the maximum possible heat-to-work conversion.
        </desc>

        <defs>
          <marker id="flGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="flRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ENERGY BALANCE IS NECESSARY—BUT NOT SUFFICIENT
        </text>

        <rect x="415" y="145" width="370" height="180" rx="32" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
        <text x="600" y="205" fill="#a5f3fc" fontSize="29" fontWeight="900" textAnchor="middle">FIRST LAW</text>
        <text x="600" y="255" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">ΔU = q + w</text>
        <text x="600" y="295" fill="#cbd5e1" fontSize="18" textAnchor="middle">conservation and bookkeeping</text>

        <path d="M430 345 L260 465" stroke="#34d399" strokeWidth="5" markerEnd="url(#flGreen)" />
        <path d="M770 345 L940 465" stroke="#fb7185" strokeWidth="5" markerEnd="url(#flRose)" />

        <rect x="80" y="465" width="390" height="180" rx="30" fill="#0f172a" stroke="#34d399" strokeWidth="7" />
        <text x="275" y="515" fill="#a7f3d0" fontSize="24" fontWeight="900" textAnchor="middle">IT CAN DETERMINE</text>
        <text x="275" y="560" fill="#cbd5e1" fontSize="19" textAnchor="middle">• missing q, w or ΔU</text>
        <text x="275" y="595" fill="#cbd5e1" fontSize="19" textAnchor="middle">• energy conservation</text>
        <text x="275" y="630" fill="#cbd5e1" fontSize="19" textAnchor="middle">• impossibility of PMM-I</text>

        <rect x="730" y="465" width="390" height="180" rx="30" fill="#0f172a" stroke="#fb7185" strokeWidth="7" />
        <text x="925" y="515" fill="#fda4af" fontSize="24" fontWeight="900" textAnchor="middle">IT CANNOT DETERMINE</text>
        <text x="925" y="560" fill="#cbd5e1" fontSize="19" textAnchor="middle">• natural direction</text>
        <text x="925" y="595" fill="#cbd5e1" fontSize="19" textAnchor="middle">• irreversibility</text>
        <text x="925" y="630" fill="#cbd5e1" fontSize="19" textAnchor="middle">• maximum heat-to-work conversion</text>

        <text x="600" y="690" fill="#94a3b8" fontSize="18" textAnchor="middle">
          The Second Law supplies the missing direction criterion.
        </text>
      </svg>
    </div>
  );
}

function HeatWorkAsymmetryAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 740"
        role="img"
        aria-labelledby="asymmetry-title asymmetry-description"
        className="h-auto w-full"
      >
        <title id="asymmetry-title">Heat-work asymmetry</title>
        <desc id="asymmetry-description">
          Mechanical work can be fully dissipated into thermal energy by friction.
          A cyclic engine cannot convert all heat drawn from one reservoir into work; some heat must be rejected.
        </desc>

        <defs>
          <marker id="hwaAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="hwaCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="hwaRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="740" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          NATURAL ASYMMETRY BETWEEN WORK AND HEAT
        </text>

        <g>
          <text x="300" y="115" fill="#a5f3fc" fontSize="27" fontWeight="900" textAnchor="middle">
            WORK → THERMAL ENERGY
          </text>
          <rect x="90" y="150" width="420" height="390" rx="34" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
          <rect x="155" y="260" width="290" height="70" rx="14" fill="#334155" />
          <rect x="205" y="200" width="190" height="65" rx="14" fill="#64748b">
            <animate attributeName="x" values="165;245;165" dur="1.6s" repeatCount="indefinite" />
          </rect>
          <path d="M170 360 C210 320 250 400 290 360 C330 320 370 400 410 360" fill="none" stroke="#fbbf24" strokeWidth="5">
            <animate attributeName="stroke-dasharray" values="0 300;150 150;300 0" dur="1.5s" repeatCount="indefinite" />
          </path>
          <text x="300" y="435" fill="#fde68a" fontSize="23" fontWeight="900" textAnchor="middle">frictional heating</text>
          <text x="300" y="485" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">complete dissipation is possible</text>
        </g>

        <line x1="600" y1="100" x2="600" y2="590" stroke="#334155" strokeWidth="4" />

        <g>
          <text x="900" y="115" fill="#f9a8d4" fontSize="27" fontWeight="900" textAnchor="middle">
            HEAT ENGINE
          </text>
          <rect x="690" y="150" width="420" height="390" rx="34" fill="#0f172a" stroke="#f472b6" strokeWidth="8" />
          <rect x="760" y="180" width="280" height="70" rx="20" fill="#7c2d12" stroke="#f97316" strokeWidth="5" />
          <text x="900" y="224" fill="#fed7aa" fontSize="22" fontWeight="900" textAnchor="middle">HOT RESERVOIR</text>

          <circle cx="900" cy="350" r="78" fill="#4c1d95" stroke="#a78bfa" strokeWidth="6" />
          <text x="900" y="360" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">ENGINE</text>

          <rect x="760" y="455" width="280" height="70" rx="20" fill="#164e63" stroke="#22d3ee" strokeWidth="5" />
          <text x="900" y="499" fill="#a5f3fc" fontSize="22" fontWeight="900" textAnchor="middle">COLD RESERVOIR</text>

          <path d="M900 250 V265" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#hwaAmber)" />
          <path d="M900 428 V445" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#hwaCyan)" />
          <path d="M980 350 H1070" stroke="#fb7185" strokeWidth="5" markerEnd="url(#hwaRose)" />

          <text x="840" y="285" fill="#fde68a" fontSize="18">qH</text>
          <text x="840" y="445" fill="#a5f3fc" fontSize="18">qC</text>
          <text x="1045" y="325" fill="#fda4af" fontSize="18">work</text>
        </g>

        <rect x="205" y="610" width="790" height="78" rx="26" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="642" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          No cyclic engine can take heat from one reservoir and convert all of it into work.
        </text>
        <text x="600" y="673" fill="#cbd5e1" fontSize="17" textAnchor="middle">
          Some energy must be rejected as heat to a lower-temperature sink.
        </text>
      </svg>
    </div>
  );
}

function StabilityLandscapeAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="landscape-title landscape-description"
        className="h-auto w-full"
      >
        <title id="landscape-title">Thermodynamic driving force versus activation barrier</title>
        <desc id="landscape-description">
          A process may be thermodynamically favourable but kinetically slow because an activation barrier must first be crossed.
        </desc>

        <defs>
          <marker id="slGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="slAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          THERMODYNAMIC DIRECTION ≠ REACTION SPEED
        </text>

        <line x1="125" y1="615" x2="1090" y2="615" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="125" y1="615" x2="125" y2="95" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1115" y="627" fill="#e2e8f0" fontSize="24">reaction coordinate</text>
        <text x="85" y="88" fill="#e2e8f0" fontSize="24">energy</text>

        <path
          id="energyPath"
          d="M190 455 C300 455 350 175 540 155 C735 135 735 505 1000 515"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="5"
        />

        <circle r="15" fill="#fde047">
          <animateMotion dur="5.5s" repeatCount="indefinite">
            <mpath href="#energyPath" />
          </animateMotion>
        </circle>

        <line x1="260" y1="450" x2="260" y2="205" stroke="#fbbf24" strokeWidth="8" markerEnd="url(#slAmber)" />
        <text x="285" y="330" fill="#fde68a" fontSize="20" fontWeight="900">activation barrier</text>

        <line x1="245" y1="470" x2="920" y2="520" stroke="#34d399" strokeWidth="8" markerEnd="url(#slGreen)" />
        <text x="600" y="560" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          thermodynamic downhill direction
        </text>

        <text x="220" y="430" fill="#f8fafc" fontSize="21" fontWeight="900">initial state</text>
        <text x="930" y="495" fill="#f8fafc" fontSize="21" fontWeight="900">more stable final state</text>

        <rect x="185" y="640" width="830" height="48" rx="20" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
        <text x="600" y="672" fill="#a5f3fc" fontSize="20" fontWeight="900" textAnchor="middle">
          A spark may initiate combustion without changing which equilibrium state is thermodynamically preferred.
        </text>
      </svg>
    </div>
  );
}

function DiffusionAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 650"
        role="img"
        aria-labelledby="diffusion-title diffusion-description"
        className="h-auto w-full"
      >
        <title id="diffusion-title">Spontaneous diffusion and mixing</title>
        <desc id="diffusion-description">
          Two gases initially separated spread throughout the available volume after the partition is removed.
          The reverse separation does not occur spontaneously.
        </desc>

        <rect width="1200" height="650" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          SPONTANEOUS MIXING HAS A PREFERRED DIRECTION
        </text>

        <rect x="100" y="145" width="1000" height="330" rx="32" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
        <line x1="600" y1="145" x2="600" y2="475" stroke="#e2e8f0" strokeWidth="10">
          <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.25;0.35;1" dur="6s" repeatCount="indefinite" />
        </line>

        {[
          [190,225],[290,325],[390,220],[470,380],[230,410],[500,285]
        ].map(([cx,cy], i) => (
          <circle key={`a-${i}`} cx={cx} cy={cy} r="16" fill="#67e8f9">
            <animate
              attributeName="cx"
              values={`${cx};${cx};${cx + 430 - i * 45};${180 + i * 145};${cx}`}
              keyTimes="0;0.3;0.55;0.85;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {[
          [700,225],[800,325],[900,220],[1010,380],[760,410],[960,285]
        ].map(([cx,cy], i) => (
          <circle key={`b-${i}`} cx={cx} cy={cy} r="16" fill="#f472b6">
            <animate
              attributeName="cx"
              values={`${cx};${cx};${cx - 430 + i * 45};${1020 - i * 145};${cx}`}
              keyTimes="0;0.3;0.55;0.85;1"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <text x="350" y="530" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">initially separated</text>
        <text x="850" y="530" fill="#f9a8d4" fontSize="21" fontWeight="900" textAnchor="middle">mixed equilibrium</text>

        <path d="M400 570 H800" stroke="#34d399" strokeWidth="5" />
        <polygon points="800,570 775,555 775,585" fill="#34d399" />
        <text x="600" y="615" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          natural direction after the constraint is removed
        </text>
      </svg>
    </div>
  );
}

function LimitationsGrid() {
  const items = [
    {
      title: "No natural direction",
      text: "The First Law accepts both a process and its exact reverse if both satisfy energy conservation.",
      tone: "rose" as Tone,
    },
    {
      title: "No spontaneity test",
      text: "It cannot decide whether diffusion, mixing, heat flow or a reaction will occur on its own.",
      tone: "violet" as Tone,
    },
    {
      title: "No irreversibility measure",
      text: "Energy conservation alone does not quantify lost work or entropy production.",
      tone: "cyan" as Tone,
    },
    {
      title: "No heat-engine ceiling",
      text: "It cannot explain why a cyclic engine cannot convert all heat from one reservoir into work.",
      tone: "amber" as Tone,
    },
    {
      title: "No refrigerator direction rule",
      text: "It does not forbid heat transfer from cold to hot unless the work requirement is supplied by the Second Law.",
      tone: "sky" as Tone,
    },
    {
      title: "Exothermicity is insufficient",
      text: "Heat release alone cannot determine spontaneity; temperature and entropy effects also matter.",
      tone: "emerald" as Tone,
    },
    {
      title: "Rate remains unknown",
      text: "A thermodynamically allowed process may be extremely slow because of a kinetic barrier.",
      tone: "rose" as Tone,
    },
    {
      title: "Classical mass-energy scope",
      text: "The ordinary chemical First-Law form does not explicitly include nuclear mass-to-energy conversion; a relativistic energy balance is needed.",
      tone: "cyan" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.title} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-lg font-black text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-200">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function SpontaneityMatrix() {
  const rows = [
    ["Heat flow", "hot → cold", "cold → hot without work", "temperature difference"],
    ["Gas expansion", "into available lower-pressure space", "spontaneous reconcentration", "pressure/volume constraint"],
    ["Diffusion", "high concentration → low concentration", "self-separation", "chemical-potential difference"],
    ["Mechanical motion", "unbalanced force → balance", "object climbs without energy input", "force imbalance"],
    ["Phase change", "toward stable phase at stated T,P", "toward unstable phase", "free-energy difference"],
    ["Chemical reaction", "toward equilibrium composition", "away from equilibrium without coupling", "reaction affinity"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Process type</th>
            <th className="px-4 py-3 font-black text-white">Natural direction</th>
            <th className="px-4 py-3 font-black text-white">Non-spontaneous reverse</th>
            <th className="px-4 py-3 font-black text-white">Driving imbalance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([type, natural, reverse, drive]) => (
            <tr key={type}>
              <td className="px-4 py-3 font-semibold text-slate-100">{type}</td>
              <td className="px-4 py-3 text-emerald-300">{natural}</td>
              <td className="px-4 py-3 text-rose-300">{reverse}</td>
              <td className="px-4 py-3 text-slate-300">{drive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RetainedFiveRouteExample() {
  return (
    <article className="rounded-[2rem] border border-amber-300/25 bg-amber-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Retained chapter comparison
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            One initial state, one final pressure, five different paths
          </h3>
        </div>
        <Chip tone="amber">FULL FIVE-ROUTE AUDIT</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        A 20.0 L sample of an ideal diatomic gas with
        {String.raw`\(C_{V,m}=\tfrac{5}{2}R\)`} is initially at 673 K and 0.700 MPa.
        It expands until the final gas pressure is 0.200 MPa.
        Calculate {String.raw`\(q\)`}, {String.raw`\(w\)`}, {String.raw`\(\Delta U\)`}, and the minimal ideal-gas {String.raw`\(\Delta H\)`} result for each path.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <Formula label="Amount">
          n = P₁V₁/(RT₁) ≈ 2.502 mol
        </Formula>
        <Formula label="Heat capacities">
          C<sub>V,m</sub> = 5R/2
        </Formula>
        <Formula label="Heat-capacity ratio">
          γ = 7/5
        </Formula>
        <Formula label="Pressure ratio">
          P₁/P₂ = 3.5
        </Formula>
      </div>

      <div className="mt-6 space-y-5">
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Route 1 — reversible isothermal expansion
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="State-function changes">
              ΔU = 0 and ΔH = 0
            </Formula>
            <Formula label="Work">
              w = −nRT ln(P₁/P₂) ≈ −17.54 kJ
            </Formula>
            <Formula label="Heat">
              q = −w ≈ +17.54 kJ
            </Formula>
            <Formula label="Final volume">
              V₂ = P₁V₁/P₂ = 70.0 L
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Route 2 — reversible adiabatic expansion
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Final temperature">
              T₂ = T₁(P₂/P₁)<sup>(γ−1)/γ</sup> ≈ 470.5 K
            </Formula>
            <Formula label="Heat">
              q = 0
            </Formula>
            <Formula label="Work and ΔU">
              w = ΔU = nC<sub>V,m</sub>(T₂−T₁) ≈ −10.53 kJ
            </Formula>
            <Formula label="Minimal ΔH">
              ΔH = nC<sub>P,m</sub>(T₂−T₁) ≈ −14.74 kJ
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
            Route 3 — isothermal and adiabatic
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Boundary transfers">
              q = 0 and w = 0
            </Formula>
            <Formula label="State-function changes">
              ΔU = 0 and ΔH = 0
            </Formula>
            <Formula label="Ideal-gas temperature">
              ΔT = 0
            </Formula>
            <Formula label="Physical interpretation">
              irreversible free expansion into vacuum
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">
            Route 4 — adiabatic expansion against constant 0.200 MPa
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Endpoint equation">
              nC<sub>V,m</sub>(T₂−T₁) = −P<sub>ext</sub>(V₂−V₁)
            </Formula>
            <Formula label="Final temperature">
              T₂ ≈ 535.7 K
            </Formula>
            <Formula label="Work and ΔU">
              w = ΔU ≈ −7.143 kJ
            </Formula>
            <Formula label="Minimal ΔH">
              ΔH ≈ −10.00 kJ
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-sky-300/20 bg-sky-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">
            Route 5 — isothermal expansion against constant 0.200 MPa
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Final volume">
              V₂ = nRT/P₂ = 70.0 L
            </Formula>
            <Formula label="Work">
              w = −P<sub>ext</sub>(V₂−V₁) = −10.00 kJ
            </Formula>
            <Formula label="State-function changes">
              ΔU = 0 and ΔH = 0
            </Formula>
            <Formula label="Heat">
              q = +10.00 kJ
            </Formula>
          </div>
        </div>
      </div>

      <ConceptLens title="Path ranking from the same initial state" tone="amber">
        The example shows why the First Law alone is not a direction law. It can calculate the energy balance for every
        admissible path, but a separate criterion is needed to decide which unconstrained path nature will select.
      </ConceptLens>
    </article>
  );
}

function PMMGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-3xl border border-rose-300/25 bg-rose-300/[0.06] p-5">
        <Chip tone="rose">PMM OF THE FIRST KIND</Chip>
        <h3 className="mt-4 text-xl font-black text-white">Creates work without equivalent energy input</h3>
        <p className="mt-3 text-sm leading-6 text-slate-200">
          This violates energy conservation. It is forbidden directly by the First Law.
        </p>
        <Formula label="Impossible claim">
          W<sub>out</sub> &gt; energy input
        </Formula>
      </article>

      <article className="rounded-3xl border border-violet-300/25 bg-violet-300/[0.06] p-5">
        <Chip tone="violet">PMM OF THE SECOND KIND</Chip>
        <h3 className="mt-4 text-xl font-black text-white">Obeys energy balance but violates natural direction</h3>
        <p className="mt-3 text-sm leading-6 text-slate-200">
          Examples include a cyclic engine converting all heat from one reservoir into work, or a refrigerator moving
          heat from cold to hot without work.
        </p>
        <Formula label="Energy balance may still hold">
          q = −w, yet the process remains impossible
        </Formula>
      </article>
    </div>
  );
}

function ThermodynamicsVsKinetics() {
  const rows = [
    ["Thermodynamics", "Is the change favourable under the stated conditions?", "Initial and final equilibrium states", "Direction and equilibrium"],
    ["Kinetics", "How fast does it occur and by what mechanism?", "Reaction pathway and activation barrier", "Rate and mechanism"],
    ["Catalyst", "Does not change equilibrium or overall thermodynamic driving force", "Lowers activation barrier", "Speeds forward and reverse routes"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Framework</th>
            <th className="px-4 py-3 font-black text-white">Main question</th>
            <th className="px-4 py-3 font-black text-white">Focus</th>
            <th className="px-4 py-3 font-black text-white">Output</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([name, question, focus, output]) => (
            <tr key={name}>
              <td className="px-4 py-3 font-black text-cyan-200">{name}</td>
              <td className="px-4 py-3 text-slate-200">{question}</td>
              <td className="px-4 py-3 text-slate-300">{focus}</td>
              <td className="px-4 py-3 text-slate-300">{output}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — conservation versus direction",
    question:
      "Heat Q flows from a 300 K body to a 400 K body with no other effect. Does this violate the First Law?",
    solution:
      "Energy conservation can still be satisfied because the heat lost by one body equals the heat gained by the other. The impossibility is a Second-Law issue: the proposed direction is opposite to spontaneous heat flow.",
  },
  {
    title: "Concept Application 2 — exothermicity trap",
    question:
      "Water freezing releases heat. Must freezing therefore be spontaneous at every temperature?",
    solution:
      "No. Above the melting temperature at the stated pressure, liquid water is the stable phase and freezing is non-spontaneous despite being exothermic.",
  },
  {
    title: "Concept Application 3 — endothermic spontaneity",
    question:
      "Give a thermodynamic reason why an endothermic process may still be spontaneous.",
    solution:
      "Spontaneity depends on the complete driving criterion, not heat alone. A sufficiently favourable entropy contribution can outweigh positive enthalpy at the specified temperature.",
  },
  {
    title: "Concept Application 4 — activation barrier",
    question:
      "A fuel–air mixture can remain unchanged until a spark is supplied. Does the spark make combustion thermodynamically favourable?",
    solution:
      "No. The spark helps the system cross the kinetic activation barrier. It does not create the overall thermodynamic driving force or change the final equilibrium criterion.",
  },
  {
    title: "Concept Application 5 — diffusion reverse",
    question:
      "Two gases mix after a partition is removed. Could energy conservation alone forbid their spontaneous re-separation?",
    solution:
      "No. A hypothetical re-separation could conserve energy. The reason it does not occur spontaneously is directional and entropic, requiring the Second Law.",
  },
  {
    title: "Concept Application 6 — refrigerator",
    question:
      "A refrigerator transfers 500 J from a cold space and rejects 700 J to the room. Determine the required work input.",
    solution:
      "Energy conservation gives Winput = 700−500 = 200 J. The First Law gives the magnitude; the Second Law explains why non-zero work is required.",
  },
  {
    title: "Concept Application 7 — PMM-I",
    question:
      "A machine claims to deliver 10 kJ work per cycle while receiving only 6 kJ total energy. Identify the violated law.",
    solution:
      "It violates the First Law because 4 kJ of energy appears without an equivalent decrease elsewhere.",
  },
  {
    title: "Concept Application 8 — PMM-II",
    question:
      "A cyclic engine absorbs 1000 J from a single reservoir and converts it entirely to work. Energy is conserved. Why is it impossible?",
    solution:
      "It violates the Kelvin–Planck form of the Second Law. A cyclic heat engine must reject some heat to a lower-temperature sink.",
  },
  {
    title: "Concept Application 9 — spontaneity and speed",
    question:
      "Diamond conversion to graphite is thermodynamically favourable under ordinary conditions but extremely slow. What does this demonstrate?",
    solution:
      "Thermodynamic favourability and kinetic rate are different questions. A large activation barrier can make a favourable change imperceptibly slow.",
  },
  {
    title: "Concept Application 10 — equilibrium destination",
    question:
      "What happens to the thermodynamic driving force as a spontaneous process approaches equilibrium?",
    solution:
      "The macroscopic driving force decreases and becomes zero at equilibrium. Forward and reverse microscopic events may continue at equal average rates.",
  },
  {
    title: "Concept Application 11 — work-to-heat conversion",
    question:
      "A paddle wheel supplies 4 kJ work to an insulated liquid. Can all 4 kJ appear as increased internal energy?",
    solution:
      "Yes. With q = 0 and negligible other energy changes, ΔU = w = +4 kJ. Complete conversion of work into disordered internal energy is allowed.",
  },
  {
    title: "Concept Application 12 — heat-to-work asymmetry",
    question:
      "Why is the reverse claim—complete cyclic conversion of heat from one reservoir into work—not equivalent?",
    solution:
      "It would require a Second-Law-forbidden PMM-II. Energy conservation alone permits the arithmetic, but natural direction and entropy impose an additional restriction.",
  },
  {
    title: "Concept Application 13 — classical nuclear caveat",
    question:
      "Why is ΔU = q + w for a fixed-mass chemical system insufficient for a nuclear reactor energy audit?",
    solution:
      "Nuclear processes can change rest mass measurably. A complete balance must include mass–energy conversion, radiation, matter flow, and other energy terms.",
  },
  {
    title: "Concept Application 14 — coupled non-spontaneous process",
    question:
      "Can a non-spontaneous process occur in nature?",
    solution:
      "Yes, when coupled to a sufficiently favourable process or driven by external work. The combined process must satisfy the overall thermodynamic direction criterion.",
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
    "A spontaneous process must be rapid.",
    "Incorrect",
    "Spontaneity concerns direction, not rate. A favourable process can be extremely slow.",
  ],
  [
    "Every exothermic process is spontaneous.",
    "Incorrect",
    "Heat release alone is insufficient; temperature and entropy effects matter.",
  ],
  [
    "An activation spark supplies the thermodynamic driving force.",
    "Incorrect",
    "It helps cross a kinetic barrier but does not determine the equilibrium direction.",
  ],
  [
    "The First Law forbids heat flow from cold to hot.",
    "Incorrect",
    "Energy conservation permits the balance. The Second Law requires work input for the transfer.",
  ],
  [
    "Work and heat are perfectly symmetric forms of transfer.",
    "Incorrect",
    "They are equal in energy units but differ in natural convertibility and entropy implications.",
  ],
  [
    "Equilibrium means all microscopic motion stops.",
    "Incorrect",
    "Microscopic events continue, but there is no net macroscopic change.",
  ],
  [
    "A PMM-II violates energy conservation.",
    "Incorrect",
    "It may satisfy the First Law while violating the Second Law’s direction restriction.",
  ],
  [
    "A non-spontaneous process can never occur.",
    "Incorrect",
    "It can occur when driven by external work or coupled to a more favourable process.",
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
      title: "Hot tea cools",
      text: "Energy conservation can describe the heat lost and gained, but the Second Law identifies hot-to-cold as the spontaneous direction.",
      tone: "amber" as Tone,
    },
    {
      title: "Perfume spreads through a room",
      text: "Diffusion proceeds toward a more uniform concentration. Spontaneous re-concentration is not observed without separation work.",
      tone: "cyan" as Tone,
    },
    {
      title: "Petrol requires ignition",
      text: "Combustion may be thermodynamically favourable yet require a spark because the reaction pathway has an activation barrier.",
      tone: "rose" as Tone,
    },
    {
      title: "Refrigerator needs electricity",
      text: "Moving heat from a colder interior to a warmer room requires work. The First Law determines the balance; the Second Law explains the necessity.",
      tone: "violet" as Tone,
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

export default function ThermodynamicsPart13() {
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
            <Chip tone="amber">DIRECTION & SPONTANEITY</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Direction Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Energy conservation tells what balances—not what nature chooses
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The First Law audits energy perfectly, yet remains silent about natural direction.
                Spontaneity, irreversibility and heat-engine limits require a new principle.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Two independent questions
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4">
                  <p className="font-black text-cyan-200">First Law</p>
                  <p className="mt-1 text-sm text-slate-300">Does the energy balance close?</p>
                </div>
                <div className="rounded-xl bg-violet-400/10 p-4">
                  <p className="font-black text-violet-200">Second Law</p>
                  <p className="mt-1 text-sm text-slate-300">Which direction is naturally permitted?</p>
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4">
                  <p className="font-black text-amber-200">Kinetics</p>
                  <p className="mt-1 text-sm text-slate-300">How fast does the allowed change occur?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Limitations of the First Law"
          subtitle="Conservation is essential, but direction requires additional information."
        >
          <FirstLawBoundaryAnimation />
          <LimitationsGrid />

          <ConceptLens title="Modern correction to the nuclear statement" tone="cyan">
            Energy conservation remains valid in nuclear processes. The limitation is that the ordinary fixed-mass
            chemical form does not explicitly include measurable rest-mass conversion, radiation and matter-flow terms.
          </ConceptLens>
        </Section>

        <Section
          index="02"
          title="Natural direction and thermodynamic asymmetry"
          subtitle="Many energy-conserving reverse processes are never observed spontaneously."
        >
          <HeatWorkAsymmetryAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Work can become heat completely" tone="cyan">
              Friction, electrical resistance and viscous dissipation can convert organised work entirely into microscopic
              internal energy.
            </ConceptLens>
            <ConceptLens title="Heat cannot become work completely in a cycle" tone="rose">
              No cyclic engine can extract heat from a single reservoir and transform all of it into work. Some heat must be rejected.
            </ConceptLens>
          </div>

          <ConceptLens title="Ordered versus disordered transfer—careful wording" tone="amber">
            Work is energy transfer through coordinated macroscopic motion. Heat is energy transfer driven by a temperature
            difference through disordered microscopic interactions. Energy itself is not a material substance labelled
            “ordered” or “disordered”; the distinction concerns transfer mode and accessibility for producing work.
          </ConceptLens>
        </Section>

        <Section
          index="03"
          title="Spontaneous and non-spontaneous processes"
          subtitle="Spontaneous means naturally directed under the specified constraints—not necessarily fast."
        >
          <Formula label="Operational definition">
            spontaneous change = proceeds without continuous external driving once permitted
          </Formula>

          <SpontaneityMatrix />
          <DiffusionAnimation />

          <ConceptLens title="Constraint removal matters" tone="violet">
            A compressed gas does not expand while a rigid partition remains intact. Once the constraint is removed,
            expansion into available lower-pressure space becomes spontaneous.
          </ConceptLens>

          <ConceptLens title="The reverse can occur when driven" tone="sky">
            Gas separation, uphill pumping and electrolysis are non-spontaneous in isolation but occur when coupled to
            external work or another sufficiently favourable process.
          </ConceptLens>
        </Section>

        <Section
          index="04"
          title="Thermodynamic favourability versus kinetic accessibility"
          subtitle="A process may have a preferred direction yet remain trapped behind an activation barrier."
        >
          <StabilityLandscapeAnimation />
          <ThermodynamicsVsKinetics />

          <ConceptLens title="Initiation is not continuous driving" tone="amber">
            A spark can initiate combustion by helping the first molecules cross an activation barrier. Once established,
            the reaction can continue because of its own thermodynamic and kinetic feedback; the spark does not supply the
            entire reaction energy.
          </ConceptLens>

          <ConceptLens title="Catalysts do not change equilibrium" tone="emerald">
            A catalyst lowers activation barriers for forward and reverse routes. It accelerates approach to equilibrium
            but does not alter the equilibrium state or overall thermodynamic driving force.
          </ConceptLens>
        </Section>

        <Section index="05" title="Equilibrium as the destination of spontaneous change">
          <p>
            A spontaneous process moves in the direction that reduces the relevant thermodynamic driving imbalance.
            As equilibrium is approached, the macroscopic driving force decreases and finally becomes zero.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Thermal</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Temperature differences disappear.</p>
            </article>
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Mechanical</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Unbalanced pressures and forces vanish.</p>
            </article>
            <article className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">Chemical</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">No net reaction progress remains.</p>
            </article>
            <article className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Phase</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">No net transfer between stable coexisting phases.</p>
            </article>
          </div>

          <ConceptLens title="Dynamic equilibrium" tone="cyan">
            Equilibrium does not mean molecular motion stops. Forward and reverse microscopic events can continue at equal average rates.
          </ConceptLens>
        </Section>

        <Section index="06" title="Perpetual-motion machines and the missing law">
          <PMMGrid />

          <ConceptLens title="Refrigerator statement" tone="violet">
            A cyclic device cannot have the sole effect of transferring heat from a colder body to a hotter body.
            External work or an equivalent compensating change is required.
          </ConceptLens>
        </Section>

        <Section index="07" title="Exothermicity is not a spontaneity criterion">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
              <h3 className="text-xl font-black text-white">Exothermic but non-spontaneous</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Freezing releases heat, yet liquid water does not spontaneously freeze above its melting temperature at the stated pressure.
              </p>
            </article>
            <article className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <h3 className="text-xl font-black text-white">Endothermic but spontaneous</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Ice melts spontaneously above its melting temperature even though melting absorbs heat.
              </p>
            </article>
          </div>

          <ConceptLens title="What is missing?" tone="amber">
            Direction depends on both energy and entropy under the specified constraints. The formal criteria are developed
            in the Second-Law, entropy and free-energy modules.
          </ConceptLens>
        </Section>

        <Section index="08" title="Retained five-route ideal-gas comparison">
          <RetainedFiveRouteExample />
        </Section>

        <Section index="09" title="Why the Second Law is required">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Direction", "hot → cold, diffusion, expansion and reaction progress"],
              ["Irreversibility", "why real processes cannot be exactly undone"],
              ["Conversion limit", "why heat cannot be fully converted into cyclic work"],
              ["Equilibrium criterion", "where spontaneous change stops"],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Need {index + 1}</p>
                <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>

          <Formula label="Preview">
            spontaneous change in an isolated universe ⇒ entropy of the universe increases
          </Formula>
        </Section>

        <Section index="10" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="11" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={13} />

<Section index="12" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                The First Law closes the energy ledger; the Second Law chooses the natural direction
              </h2>
            </div>
            <Chip tone="emerald">PART 13 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["First Law", "conservation, not direction"],
              ["Spontaneous", "favoured direction under stated constraints"],
              ["Kinetics", "rate and activation barrier"],
              ["Equilibrium", "zero macroscopic driving force"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
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
