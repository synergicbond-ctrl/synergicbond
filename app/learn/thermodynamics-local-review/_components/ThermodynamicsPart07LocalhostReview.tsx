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

function WorkTransferAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 690"
        role="img"
        aria-labelledby="work-transfer-title work-transfer-description"
        className="h-auto w-full"
      >
        <title id="work-transfer-title">Animated thermodynamic work transfer across a boundary</title>
        <desc id="work-transfer-description">
          Coordinated displacement transfers energy between surroundings and system.
          Work exists during the process, not as a stored substance inside either state.
        </desc>

        <defs>
          <marker id="wtArrowCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="wtArrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <linearGradient id="wtGas" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#164e63" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        <rect width="1200" height="690" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          WORK IS ORGANISED ENERGY TRANSFER
        </text>

        <path d="M130 520 V150 H690 V520" fill="url(#wtGas)" stroke="#22d3ee" strokeWidth="5" />
        <rect x="170" y="285" width="480" height="28" rx="8" fill="#67e8f9">
          <animate attributeName="y" values="335;235;335" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <line x1="410" y1="150" x2="410" y2="285" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round">
          <animate attributeName="y2" values="335;235;335" dur="4.5s" repeatCount="indefinite" />
        </line>

        {[0,1,2,3,4,5,6,7].map((i) => (
          <circle key={i} cx={205 + (i % 4) * 110} cy={380 + Math.floor(i / 4) * 70} r="12" fill={i % 2 ? "#a3e635" : "#fde047"}>
            <animate
              attributeName={i % 2 ? "cx" : "cy"}
              values={i % 2 ? `${185 + (i % 4) * 110};${225 + (i % 4) * 110};${185 + (i % 4) * 110}` : `${360 + Math.floor(i / 4) * 70};${400 + Math.floor(i / 4) * 70};${360 + Math.floor(i / 4) * 70}`}
              dur={`${2 + i * 0.13}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <rect x="350" y="95" width="120" height="45" rx="8" fill="#fbbf24">
          <animate attributeName="y" values="95;15;95" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <text x="410" y="125" fill="#422006" fontSize="20" fontWeight="900" textAnchor="middle">
          mass
          <animate attributeName="y" values="125;45;125" dur="4.5s" repeatCount="indefinite" />
        </text>

        <path d="M720 330 H1030" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#wtArrowCyan)">
          <animate attributeName="stroke-dasharray" values="0 320;160 160;320 0" dur="2.3s" repeatCount="indefinite" />
        </path>
        <text x="875" y="295" fill="#a5f3fc" fontSize="23" fontWeight="800" textAnchor="middle">
          energy crosses boundary
        </text>
        <text x="875" y="380" fill="#cbd5e1" fontSize="20" textAnchor="middle">
          force × displacement
        </text>

        <rect x="770" y="445" width="300" height="95" rx="24" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="920" y="485" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">AT STATE A OR B</text>
        <text x="920" y="520" fill="#cbd5e1" fontSize="20" textAnchor="middle">energy exists; “work content” does not</text>

        <text x="600" y="635" fill="#94a3b8" fontSize="20" textAnchor="middle">
          Microscopic signature: work produces coordinated motion; heat produces disordered energy transfer.
        </text>
      </svg>
    </div>
  );
}

type WorkPair = {
  form: string;
  intensity: string;
  capacity: string;
  differential: string;
  example: string;
  tone: Tone;
};

const workPairs: WorkPair[] = [
  {
    form: "Pressure–volume work",
    intensity: "external pressure Pext",
    capacity: "volume change dV",
    differential: "δw = −Pext dV",
    example: "gas moving a piston",
    tone: "cyan",
  },
  {
    form: "Electrical work",
    intensity: "electrical potential φ",
    capacity: "charge transfer dq",
    differential: "δw = φ dq",
    example: "charging a cell or capacitor",
    tone: "violet",
  },
  {
    form: "Gravitational work",
    intensity: "gravitational field / mg",
    capacity: "height change dh",
    differential: "δw = mg dh",
    example: "raising a mass",
    tone: "amber",
  },
  {
    form: "Surface work",
    intensity: "surface tension γ",
    capacity: "surface-area change dA",
    differential: "δw = γ dA",
    example: "stretching a liquid film",
    tone: "emerald",
  },
  {
    form: "Elastic work",
    intensity: "tension or force F",
    capacity: "extension dx",
    differential: "δw = F dx",
    example: "stretching a spring or polymer",
    tone: "rose",
  },
  {
    form: "Magnetic work",
    intensity: "magnetic field",
    capacity: "magnetisation change",
    differential: "convention-dependent",
    example: "magnetising matter",
    tone: "sky",
  },
];

function GeneralisedWorkGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {workPairs.map((item) => (
        <article key={item.form} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <p className="text-xs font-black uppercase tracking-[0.18em]">{item.form}</p>
          <div className="mt-4 grid gap-2 text-sm">
            <div className="rounded-xl bg-black/25 p-3">
              <span className="font-black text-white">Intensity factor:</span>
              <span className="ml-2 text-slate-200">{item.intensity}</span>
            </div>
            <div className="rounded-xl bg-black/25 p-3">
              <span className="font-black text-white">Capacity factor:</span>
              <span className="ml-2 text-slate-200">{item.capacity}</span>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
            {item.differential}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.example}</p>
        </article>
      ))}
    </div>
  );
}

function SignConventionAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="sign-title sign-description"
        className="h-auto w-full"
      >
        <title id="sign-title">Animated chemistry sign convention for expansion and compression work</title>
        <desc id="sign-description">
          Expansion gives positive volume change and negative work on the system.
          Compression gives negative volume change and positive work on the system.
        </desc>

        <defs>
          <marker id="signGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="signRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />

        <text x="300" y="58" fill="#a7f3d0" fontSize="30" fontWeight="900" textAnchor="middle">EXPANSION</text>
        <text x="900" y="58" fill="#fda4af" fontSize="30" fontWeight="900" textAnchor="middle">COMPRESSION</text>

        <g>
          <path d="M105 495 V150 H495 V495" fill="none" stroke="#34d399" strokeWidth="5" />
          <rect x="140" y="330" width="320" height="25" rx="8" fill="#86efac">
            <animate attributeName="y" values="365;230;365" dur="4.5s" repeatCount="indefinite" />
          </rect>
          <line x1="300" y1="150" x2="300" y2="330" stroke="#86efac" strokeWidth="6" strokeLinecap="round">
            <animate attributeName="y2" values="365;230;365" dur="4.5s" repeatCount="indefinite" />
          </line>
          <path d="M300 205 V110" stroke="#34d399" strokeWidth="5" markerEnd="url(#signGreen)" />
          <text x="300" y="535" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">ΔV &gt; 0</text>
          <text x="300" y="575" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">w = −PextΔV &lt; 0</text>
          <text x="300" y="615" fill="#cbd5e1" fontSize="20" textAnchor="middle">system does work on surroundings</text>
        </g>

        <line x1="600" y1="95" x2="600" y2="635" stroke="#334155" strokeWidth="4" />

        <g>
          <path d="M705 495 V150 H1095 V495" fill="none" stroke="#fb7185" strokeWidth="5" />
          <rect x="740" y="230" width="320" height="25" rx="8" fill="#fda4af">
            <animate attributeName="y" values="230;365;230" dur="4.5s" repeatCount="indefinite" />
          </rect>
          <line x1="900" y1="150" x2="900" y2="230" stroke="#fda4af" strokeWidth="6" strokeLinecap="round">
            <animate attributeName="y2" values="230;365;230" dur="4.5s" repeatCount="indefinite" />
          </line>
          <path d="M900 105 V205" stroke="#fb7185" strokeWidth="5" markerEnd="url(#signRose)" />
          <text x="900" y="535" fill="#fda4af" fontSize="23" fontWeight="900" textAnchor="middle">ΔV &lt; 0</text>
          <text x="900" y="575" fill="#fda4af" fontSize="23" fontWeight="900" textAnchor="middle">w = −PextΔV &gt; 0</text>
          <text x="900" y="615" fill="#cbd5e1" fontSize="20" textAnchor="middle">surroundings do work on system</text>
        </g>

        <rect x="235" y="655" width="730" height="45" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="685" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          Chemistry convention: work received by the system is positive.
        </text>
      </svg>
    </div>
  );
}

function PVDerivationVisual() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 730"
        role="img"
        aria-labelledby="pv-derivation-title pv-derivation-description"
        className="h-auto w-full"
      >
        <title id="pv-derivation-title">Derivation of pressure-volume work from force and displacement</title>
        <desc id="pv-derivation-description">
          External pressure acts on piston area, creating a force. Piston displacement changes gas volume.
          Combining the relations gives delta w equals minus external pressure times dV.
        </desc>

        <defs>
          <marker id="pvdArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="730" rx="34" fill="#020617" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          FROM FORCE × DISTANCE TO −Pext dV
        </text>

        <path d="M80 520 V145 H540 V520" fill="none" stroke="#22d3ee" strokeWidth="5" />
        <rect x="115" y="300" width="390" height="28" rx="8" fill="#67e8f9">
          <animate attributeName="y" values="355;245;355" dur="4.5s" repeatCount="indefinite" />
        </rect>
        <line x1="310" y1="145" x2="310" y2="300" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round">
          <animate attributeName="y2" values="355;245;355" dur="4.5s" repeatCount="indefinite" />
        </line>

        <path d="M310 95 V220" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#pvdArrow)" />
        <text x="355" y="125" fill="#fde68a" fontSize="22">Fext = Pext A</text>

        <path d="M555 355 H655" stroke="#a78bfa" strokeWidth="4" strokeDasharray="14 10" />
        <text x="605" y="335" fill="#ddd6fe" fontSize="20" textAnchor="middle">dx</text>

        <rect x="680" y="120" width="440" height="440" rx="30" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />

        <text x="900" y="175" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">1. Pressure creates force</text>
        <text x="900" y="215" fill="#f8fafc" fontSize="24" fontFamily="monospace" textAnchor="middle">Fext = Pext A</text>

        <text x="900" y="285" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">2. Piston displacement changes volume</text>
        <text x="900" y="325" fill="#f8fafc" fontSize="24" fontFamily="monospace" textAnchor="middle">dV = A dx</text>

        <text x="900" y="395" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">3. Chemistry reference direction</text>
        <text x="900" y="435" fill="#f8fafc" fontSize="24" fontFamily="monospace" textAnchor="middle">δw = −Fext dx</text>

        <rect x="755" y="475" width="290" height="58" rx="18" fill="#164e63" stroke="#22d3ee" strokeWidth="4" />
        <text x="900" y="513" fill="#f8fafc" fontSize="26" fontWeight="900" textAnchor="middle">δw = −Pext dV</text>

        <text x="600" y="650" fill="#cbd5e1" fontSize="20" textAnchor="middle">
          External pressure—not the gas pressure—is the mechanical resistance that determines actual boundary work.
        </text>
        <text x="600" y="690" fill="#94a3b8" fontSize="20" textAnchor="middle">
          Only in the reversible limit may Pext be replaced by the system pressure at each stage.
        </text>
      </svg>
    </div>
  );
}

function WorkGraphVisual() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 690"
        role="img"
        aria-labelledby="work-graph-title work-graph-description"
        className="h-auto w-full"
      >
        <title id="work-graph-title">Pressure-volume graph comparing constant and variable external pressure work</title>
        <desc id="work-graph-description">
          Constant external pressure produces a rectangular area. Variable external pressure produces the area under
          the external-pressure path. Reversible work follows the equilibrium pressure curve.
        </desc>

        <defs>
          <pattern id="wgHatchCyan" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#22d3ee" strokeWidth="4" opacity="0.38" />
          </pattern>
          <pattern id="wgHatchPink" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#f472b6" strokeWidth="4" opacity="0.38" />
          </pattern>
        </defs>

        <rect width="1200" height="690" rx="34" fill="#020617" />

        <text x="300" y="55" fill="#a5f3fc" fontSize="28" fontWeight="900" textAnchor="middle">
          CONSTANT Pext
        </text>
        <line x1="80" y1="545" x2="535" y2="545" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="80" y1="545" x2="80" y2="100" stroke="#e2e8f0" strokeWidth="5" />
        <rect x="160" y="245" width="300" height="300" fill="url(#wgHatchCyan)" />
        <line x1="160" y1="245" x2="460" y2="245" stroke="#22d3ee" strokeWidth="6" />
        <line x1="160" y1="545" x2="160" y2="555" stroke="#e2e8f0" strokeWidth="4" />
        <line x1="460" y1="545" x2="460" y2="555" stroke="#e2e8f0" strokeWidth="4" />
        <text x="160" y="580" fill="#cbd5e1" fontSize="20" textAnchor="middle">Vi</text>
        <text x="460" y="580" fill="#cbd5e1" fontSize="20" textAnchor="middle">Vf</text>
        <text x="300" y="625" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">
          |w| = Pext(Vf − Vi)
        </text>

        <line x1="600" y1="90" x2="600" y2="630" stroke="#334155" strokeWidth="4" />

        <text x="900" y="55" fill="#f9a8d4" fontSize="28" fontWeight="900" textAnchor="middle">
          VARIABLE Pext / REVERSIBLE LIMIT
        </text>
        <line x1="665" y1="545" x2="1120" y2="545" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="665" y1="545" x2="665" y2="100" stroke="#e2e8f0" strokeWidth="5" />

        <path
          d="M745 165 C835 220 940 320 1045 430 L1045 545 L745 545 Z"
          fill="url(#wgHatchPink)"
        />
        <path
          d="M745 165 C835 220 940 320 1045 430"
          fill="none"
          stroke="#f472b6"
          strokeWidth="5"
        />
        <circle cx="745" cy="165" r="12" fill="#34d399" />
        <circle cx="1045" cy="430" r="12" fill="#a78bfa" />
        <text x="900" y="625" fill="#f9a8d4" fontSize="21" fontWeight="900" textAnchor="middle">
          |w| = area under Pext(V)
        </text>

        <text x="600" y="670" fill="#94a3b8" fontSize="20" textAnchor="middle">
          Chemistry sign: expansion work is the negative of the shaded geometric area.
        </text>
      </svg>
    </div>
  );
}

const signRows = [
  ["Expansion", "Vf > Vi", "ΔV > 0", "w < 0", "Energy leaves the system as work"],
  ["Compression", "Vf < Vi", "ΔV < 0", "w > 0", "Energy enters the system as work"],
  ["Rigid boundary", "Vf = Vi", "ΔV = 0", "wPV = 0", "No pressure–volume boundary displacement"],
  ["Free expansion into vacuum", "Pext = 0", "ΔV > 0", "wPV = 0", "No resisting external pressure"],
];

function SignTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Case</th>
            <th className="px-4 py-3 font-black text-white">Volume relation</th>
            <th className="px-4 py-3 font-black text-white">ΔV</th>
            <th className="px-4 py-3 font-black text-white">Chemistry w</th>
            <th className="px-4 py-3 font-black text-white">Meaning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {signRows.map(([name, relation, dv, work, meaning]) => (
            <tr key={name}>
              <td className="px-4 py-3 font-semibold text-slate-100">{name}</td>
              <td className="px-4 py-3 text-slate-300">{relation}</td>
              <td className="px-4 py-3 font-mono text-slate-200">{dv}</td>
              <td className="px-4 py-3 font-mono font-black text-cyan-200">{work}</td>
              <td className="px-4 py-3 leading-6 text-slate-300">{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const unitRows = [
  ["1 Pa m³", "1 N m", "1 J"],
  ["1 bar L", "10⁵ Pa × 10⁻³ m³", "100 J"],
  ["1 L atm", "101325 Pa × 10⁻³ m³", "101.325 J"],
  ["1 cal", "thermochemical calorie", "4.184 J"],
];

function UnitTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Work unit</th>
            <th className="px-4 py-3 font-black text-white">Conversion logic</th>
            <th className="px-4 py-3 font-black text-white">SI value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {unitRows.map(([unit, logic, value]) => (
            <tr key={unit}>
              <td className="px-4 py-3 font-semibold text-slate-100">{unit}</td>
              <td className="px-4 py-3 font-mono text-slate-300">{logic}</td>
              <td className="px-4 py-3 font-mono font-black text-emerald-300">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — constant external pressure",
    question:
      "A gas expands from 2.5 L to 7.0 L against a constant external pressure of 1.20 bar. Calculate the chemistry-sign work in joules.",
    solution:
      "ΔV = 4.5 L. Hence w = −PextΔV = −(1.20 bar)(4.5 L) = −5.4 bar L = −540 J.",
  },
  {
    title: "Concept Application 2 — compression sign",
    question:
      "A gas is compressed from 8.0 L to 3.0 L against 2.0 atm. Determine w in litre-atmosphere and joule.",
    solution:
      "ΔV = −5.0 L. Thus w = −(2.0 atm)(−5.0 L) = +10.0 L atm = +1013.25 J. Positive work means energy enters the gas through compression.",
  },
  {
    title: "Concept Application 3 — free expansion",
    question:
      "An ideal gas expands into an evacuated chamber from 4 L to 12 L. Find pressure–volume work.",
    solution:
      "The opposing external pressure is zero. Therefore wPV = −PextΔV = 0, even though the gas volume increases.",
  },
  {
    title: "Concept Application 4 — two-step expansion",
    question:
      "A gas expands from 1.0 L to 3.0 L against 3.0 bar, then from 3.0 L to 5.0 L against 1.0 bar. Find total w.",
    solution:
      "w1 = −3.0(2.0) = −6.0 bar L and w2 = −1.0(2.0) = −2.0 bar L. Total w = −8.0 bar L = −800 J.",
  },
  {
    title: "Concept Application 5 — linear external-pressure path",
    question:
      "During expansion from V₁ to V₂, external pressure decreases linearly from P₁ to P₂. Obtain w.",
    solution:
      "The area under a linear Pext–V path is average pressure times volume change. Thus w = −[(P₁ + P₂)/2](V₂ − V₁).",
  },
  {
    title: "Concept Application 6 — piston and lifted mass",
    question:
      "A piston lifts a 12 kg load upward by 0.20 m. Neglect friction. What is the work on the gas due solely to this load during expansion?",
    solution:
      "The surroundings gain gravitational potential energy mgh = 12×9.8×0.20 = 23.52 J. The gas loses this energy as work, so chemistry-sign work on the gas is w = −23.52 J.",
  },
  {
    title: "Concept Application 7 — rigid vessel",
    question:
      "A reaction in a rigid sealed vessel raises the pressure from 1 bar to 20 bar. Is pressure–volume work necessarily non-zero?",
    solution:
      "No. The vessel is rigid, so dV = 0 and wPV = −∫Pext dV = 0. Pressure change alone does not create PV work.",
  },
  {
    title: "Concept Application 8 — system versus surroundings",
    question:
      "For a frictionless process, the system has w = −350 J. What is the corresponding work assigned to the surroundings?",
    solution:
      "With consistent boundaries and no dissipative storage at the interface, wsurroundings = +350 J. Energy lost by one side as work is gained by the other.",
  },
  {
    title: "Concept Application 9 — reversible ranking",
    question:
      "The same gas expands between fixed equilibrium endpoints by free expansion, one-step expansion, many-step expansion and reversible expansion. Rank the magnitude of work done by the gas.",
    solution:
      "For expansion, |wby gas| is smallest for free expansion (zero), increases through one-step and multistep paths, and reaches the maximum in the reversible limit.",
  },
  {
    title: "Concept Application 10 — non-PV work",
    question:
      "A closed rigid electrochemical cell supplies 500 J of electrical energy to a circuit. Can total work be non-zero although ΔV = 0?",
    solution:
      "Yes. Rigid volume makes only PV work zero. Electrical work is a distinct non-PV mode, so the cell can transfer 500 J as electrical work.",
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
    "Work is stored inside a system.",
    "Incorrect",
    "Work is a boundary transfer during a process. Energy, not work, is associated with a state.",
  ],
  [
    "Use the gas pressure in w = −PΔV for every process.",
    "Incorrect",
    "Actual boundary work is determined by Pext. Pint may replace it only in the reversible limit.",
  ],
  [
    "Expansion work is positive in chemistry.",
    "Incorrect",
    "With ΔU = q + w, expansion gives w < 0 because the system transfers energy to the surroundings.",
  ],
  [
    "If ΔV = 0, every kind of work is zero.",
    "Incorrect",
    "Only PV work is forced to zero. Electrical, surface, elastic or other non-PV work may remain.",
  ],
  [
    "A large internal pressure guarantees large work.",
    "Incorrect",
    "Free expansion into vacuum has Pext = 0 and therefore zero PV work despite finite gas pressure.",
  ],
  [
    "Pressure multiplied by volume has no energy dimension.",
    "Incorrect",
    "Pa·m³ = N·m = J.",
  ],
  [
    "Work is intensive because pressure is intensive.",
    "Incorrect",
    "The volume displacement is extensive; total work scales with system size for similar paths.",
  ],
  [
    "Reversible expansion happens at exactly equal pressure with no driving force.",
    "Refine",
    "It is the limiting process with an infinitesimal pressure difference; exact equality would produce no directional motion.",
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
      title: "Bicycle pump",
      text: "Your hand performs compression work on the trapped gas. Rapid pumping raises internal energy and warms the barrel.",
      tone: "amber" as Tone,
    },
    {
      title: "Air leaving a tyre",
      text: "The expanding gas pushes atmospheric air aside. Energy transfer as work contributes to cooling during rapid discharge.",
      tone: "cyan" as Tone,
    },
    {
      title: "Charging a battery",
      text: "Electrical potential drives organised charge transfer across the system boundary: a non-PV work mode.",
      tone: "violet" as Tone,
    },
    {
      title: "Soap-film frame",
      text: "Pulling a movable wire increases surface area against surface tension, transferring energy as surface work.",
      tone: "emerald" as Tone,
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

export default function ThermodynamicsPart07() {
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
            <Chip tone="amber">WORK & SIGN CONVENTION</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Transfer Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Work is energy transferred through organised motion
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Pressure moving a piston, voltage moving charge, tension stretching a surface and gravity lifting a mass
                are different expressions of one thermodynamic pattern: an intensity factor acting through a capacity change.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Chemistry convention
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-emerald-400/10 p-4">
                  <p className="font-black text-emerald-200">Work done on system</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">w &gt; 0</p>
                </div>
                <div className="rounded-xl bg-rose-400/10 p-4">
                  <p className="font-black text-rose-200">Work done by system</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">w &lt; 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Thermodynamic meaning of work"
          subtitle="Work is a mode of energy transfer, not a property possessed by a state."
        >
          <p>
            Thermodynamic work is energy transferred across the boundary when a generalised force produces a coordinated
            displacement. In pressure–volume work, a piston moves coherently; in electrical work, charge moves through an
            electrical potential difference.
          </p>

          <WorkTransferAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Work is transitory" tone="cyan">
              Work exists only while a process occurs. State A and state B have energies, but neither state contains a
              quantity called “work.”
            </ConceptLens>
            <ConceptLens title="Work is path dependent" tone="violet">
              Different external-pressure histories between the same endpoint states can transfer different amounts of work.
            </ConceptLens>
          </div>

          <ConceptLens title="Microscopic distinction from heat" tone="amber">
            Work transfers energy through coordinated motion. Heat transfers energy because of a temperature difference
            through disordered microscopic interactions. Both alter energy, but by different boundary mechanisms.
          </ConceptLens>
        </Section>

        <Section
          index="02"
          title="Generalised force–displacement structure"
          subtitle="Every common work mode pairs an intensity factor with a capacity change."
        >
          <Formula label="General pattern">
            δw = intensity factor × differential capacity factor
          </Formula>

          <GeneralisedWorkGrid />

          <ConceptLens title="Sign convention belongs to the chosen definition" tone="rose">
            The algebraic sign of each generalised work term depends on how the generalised force and displacement are
            defined. For chemistry pressure–volume work, the locked convention is δw = −P<sub>ext</sub>dV.
          </ConceptLens>
        </Section>

        <Section index="03" title="Pressure–volume work: piston derivation">
          <p>
            Consider gas beneath a frictionless piston of area A. The surroundings exert an external pressure
            P<sub>ext</sub>, producing force F<sub>ext</sub> = P<sub>ext</sub>A. If the piston moves by dx, the volume
            changes by dV = A dx.
          </p>

          <PVDerivationVisual />

          <Formula label="Infinitesimal pressure–volume work">
            δw = −P<sub>ext</sub>dV
          </Formula>

          <Formula label="Finite general path">
            w = −∫<sub>Vᵢ</sub><sup>V𝒇</sup> P<sub>ext</sub>(V)dV
          </Formula>

          <ConceptLens title="Why external pressure appears" tone="cyan">
            Work measures the energy transferred against the mechanical resistance supplied by the surroundings.
            Therefore actual boundary work uses P<sub>ext</sub>, not automatically the internal gas pressure.
          </ConceptLens>
        </Section>

        <Section index="04" title="Chemistry and physics sign conventions">
          <p>
            Chemistry commonly writes the First Law as ΔU = q + w, so work received by the system is positive.
            Many physics texts instead define W<sub>by</sub> as work done by the system and write ΔU = q − W<sub>by</sub>.
            The physical process is identical; only the accounting symbol changes.
          </p>

          <SignConventionAnimation />
          <SignTable />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Chemistry convention">
              w<sub>on</sub> = −∫P<sub>ext</sub>dV
            </Formula>
            <Formula label="Physics-style work by gas">
              W<sub>by</sub> = +∫P<sub>ext</sub>dV = −w<sub>on</sub>
            </Formula>
          </div>

          <ConceptLens title="Never mix equations from opposite conventions" tone="rose">
            Before solving, identify whether the symbol represents work on the system or work by the system.
            A correct magnitude with the wrong convention produces a wrong First-Law result.
          </ConceptLens>
        </Section>

        <Section index="05" title="Constant external pressure">
          <Formula label="Finite pressure–volume work">
            w = −P<sub>ext</sub>(V<sub>f</sub> − V<sub>i</sub>) = −P<sub>ext</sub>ΔV
          </Formula>

          <p>
            The magnitude equals the rectangular area under the constant external-pressure line on a P–V graph.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <ConceptLens title="Expansion" tone="emerald">
              ΔV &gt; 0 ⇒ w &lt; 0. The gas transfers energy to the surroundings.
            </ConceptLens>
            <ConceptLens title="Compression" tone="rose">
              ΔV &lt; 0 ⇒ w &gt; 0. The surroundings transfer energy to the gas.
            </ConceptLens>
            <ConceptLens title="Rigid boundary" tone="sky">
              ΔV = 0 ⇒ w<sub>PV</sub> = 0, even if pressure changes strongly.
            </ConceptLens>
          </div>
        </Section>

        <Section index="06" title="Variable external pressure and graphical work">
          <WorkGraphVisual />

          <Formula label="Finite-step process">
            w = −Σ P<sub>ext,k</sub>ΔV<sub>k</sub>
          </Formula>

          <Formula label="Continuous external-pressure path">
            w = −∫ P<sub>ext</sub>(V)dV
          </Formula>

          <ConceptLens title="Signed area" tone="violet">
            The geometric area under a P<sub>ext</sub>–V curve is positive. Chemistry expansion work is the negative
            of that area because dV is positive while the leading sign is negative.
          </ConceptLens>
        </Section>

        <Section index="07" title="Reversible and irreversible pressure–volume work">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <Chip tone="emerald">REVERSIBLE LIMIT</Chip>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                During expansion, P<sub>ext</sub> is infinitesimally below the gas pressure; during compression,
                infinitesimally above it. At every step, P<sub>ext</sub> approaches P.
              </p>
              <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
                w<sub>rev</sub> = −∫ P dV
              </div>
            </article>

            <article className="rounded-3xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
              <Chip tone="rose">IRREVERSIBLE PATH</Chip>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                A finite pressure difference drives the process. Work must be calculated from the actual external
                pressure history, which may be constant, stepwise or time-dependent.
              </p>
              <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
                w<sub>irr</sub> = −∫ P<sub>ext</sub>dV
              </div>
            </article>
          </div>

          <ConceptLens title="Maximum-work principle for fixed endpoints" tone="amber">
            Reversible expansion gives the maximum magnitude of work delivered by the system. Reversible compression
            requires the minimum magnitude of work input. This is a limiting comparison, not a claim that real machines
            operate reversibly.
          </ConceptLens>
        </Section>

        <Section index="08" title="Free expansion">
          <Formula label="Vacuum boundary">
            P<sub>ext</sub> = 0
          </Formula>

          <Formula label="Pressure–volume work">
            w<sub>PV</sub> = −∫0·dV = 0
          </Formula>

          <ConceptLens title="Large volume change can still give zero work" tone="rose">
            Work requires resistance. In expansion into vacuum, no surroundings are displaced against pressure, so
            pressure–volume work is zero even though the gas spreads into a larger volume.
          </ConceptLens>
        </Section>

        <Section index="09" title="Work units and conversions">
          <UnitTable />

          <ConceptLens title="Dimensional proof" tone="cyan">
            Pressure × volume = (force/area) × volume = force × length = energy.
          </ConceptLens>
        </Section>

        <Section index="10" title="Total work versus pressure–volume work">
          <p>
            The relation −∫P<sub>ext</sub>dV describes only mechanical boundary work caused by volume displacement.
            The total work may also contain electrical, surface, elastic, gravitational or other non-PV terms.
          </p>

          <Formula label="General energy-transfer decomposition">
            δw<sub>total</sub> = δw<sub>PV</sub> + δw<sub>electrical</sub> + δw<sub>surface</sub> + δw<sub>other</sub>
          </Formula>

          <ConceptLens title="Rigid electrochemical cell" tone="violet">
            A rigid cell has dV = 0 and therefore no PV work, but it can still deliver electrical work to an external circuit.
          </ConceptLens>
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={7} />

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
                External resistance and boundary displacement determine pressure–volume work
              </h2>
            </div>
            <Chip tone="emerald">PART 07 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Expansion", "ΔV > 0, w < 0"],
              ["Compression", "ΔV < 0, w > 0"],
              ["Constant Pext", "w = −PextΔV"],
              ["Reversible", "w = −∫P dV"],
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
