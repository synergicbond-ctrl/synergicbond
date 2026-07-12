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

function ResponseSurfaceAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 700"
        role="img"
        aria-labelledby="surface-title surface-description"
        className="h-auto w-full"
      >
        <title id="surface-title">Animated pressure-volume-temperature response surface</title>
        <desc id="surface-description">
          A conceptual thermodynamic surface shows how holding one variable fixed creates a directional slope.
          Partial derivatives measure these constrained slopes.
        </desc>

        <defs>
          <linearGradient id="meshGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
          </linearGradient>
          <marker id="surfArrowCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="surfArrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="surfArrowPink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
        </defs>

        <rect width="1200" height="700" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          A PARTIAL DERIVATIVE IS A SLOPE UNDER A CONSTRAINT
        </text>

        <g transform="translate(130 100)">
          <path
            d="M80 440 C220 330 355 345 510 225 C680 95 805 145 920 55"
            fill="none"
            stroke="url(#meshGrad)"
            strokeWidth="12"
          />
          {[0,1,2,3,4,5].map((i) => (
            <path
              key={`h-${i}`}
              d={`M${60 + i*25} ${500 - i*55} C${260 + i*22} ${360 - i*35} ${520 + i*15} ${340 - i*45} ${925 - i*8} ${125 - i*10}`}
              fill="none"
              stroke="#334155"
              strokeWidth="4"
              opacity="0.8"
            />
          ))}
          {[0,1,2,3,4,5,6].map((i) => (
            <path
              key={`v-${i}`}
              d={`M${105 + i*125} 500 C${190 + i*115} 400 ${235 + i*100} 210 ${260 + i*95} 70`}
              fill="none"
              stroke="#334155"
              strokeWidth="4"
              opacity="0.8"
            />
          ))}

          <circle cx="500" cy="235" r="16" fill="#f8fafc">
            <animate attributeName="r" values="12;19;12" dur="2.4s" repeatCount="indefinite" />
          </circle>

          <path d="M500 235 L720 155" stroke="#22d3ee" strokeWidth="8" markerEnd="url(#surfArrowCyan)" />
          <text x="730" y="140" fill="#a5f3fc" fontSize="21">change T at constant P</text>

          <path d="M500 235 L340 360" stroke="#fbbf24" strokeWidth="8" markerEnd="url(#surfArrowAmber)" />
          <text x="155" y="390" fill="#fde68a" fontSize="21">change P at constant T</text>

          <path d="M500 235 L610 390" stroke="#f472b6" strokeWidth="8" markerEnd="url(#surfArrowPink)" />
          <text x="625" y="425" fill="#f9a8d4" fontSize="21">change T at constant V</text>

          <text x="970" y="95" fill="#cbd5e1" fontSize="25">T</text>
          <text x="25" y="530" fill="#cbd5e1" fontSize="25">P</text>
          <text x="780" y="545" fill="#cbd5e1" fontSize="25">V</text>
        </g>

        <text x="600" y="665" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Different constraints select different tangent directions on the same equilibrium surface.
        </text>
      </svg>
    </div>
  );
}

function DerivativeToolkit() {
  const tools = [
    {
      title: "Reciprocal rule",
      formula: "(∂x/∂y)z = 1 / (∂y/∂x)z",
      explanation: "Reverse the dependent and independent variables while holding the same third variable fixed.",
      tone: "cyan" as Tone,
    },
    {
      title: "Cyclic rule",
      formula: "(∂x/∂y)z (∂y/∂z)x (∂z/∂x)y = −1",
      explanation: "For three mutually related state variables, the cyclic product carries a minus sign.",
      tone: "violet" as Tone,
    },
    {
      title: "Chain rule",
      formula: "(∂x/∂y)z = (∂x/∂u)z (∂u/∂y)z",
      explanation: "Insert an intermediate variable only when the same constraint is respected throughout.",
      tone: "amber" as Tone,
    },
    {
      title: "Total differential",
      formula: "dx = (∂x/∂y)z dy + (∂x/∂z)y dz",
      explanation: "Combines independent infinitesimal changes in two variables.",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {tools.map((tool) => (
        <article key={tool.title} className={`rounded-3xl border p-5 ${toneMap[tool.tone]}`}>
          <h3 className="text-xl font-black text-white">{tool.title}</h3>
          <div className="mt-4 overflow-x-auto rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
            {tool.formula}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{tool.explanation}</p>
        </article>
      ))}
    </div>
  );
}

type CoefficientCardProps = {
  symbol: React.ReactNode;
  title: string;
  definition: React.ReactNode;
  unit: string;
  sign: string;
  interpretation: string;
  tone: Tone;
};

function CoefficientCard({
  symbol,
  title,
  definition,
  unit,
  sign,
  interpretation,
  tone,
}: CoefficientCardProps) {
  return (
    <article className={`rounded-3xl border p-5 ${toneMap[tone]}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em]">{title}</p>
          <div className="mt-2 text-3xl font-black text-white">{symbol}</div>
        </div>
        <span className="rounded-xl bg-black/25 px-3 py-2 text-xs font-black text-slate-100">{unit}</span>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl bg-black/25 p-4 text-center font-mono text-base font-black text-white">
        {definition}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-200">{interpretation}</p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">Typical sign: {sign}</p>
    </article>
  );
}

function CoefficientAnimation() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <article className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.05] p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Thermal expansion</p>
        <svg viewBox="0 0 500 330" role="img" aria-label="Container expanding as temperature rises" className="mt-3 h-auto w-full">
        <title>Thermodynamics Part 05 scientific diagram 2</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
          <rect x="115" y="90" width="270" height="170" rx="25" fill="#0f172a" stroke="#fbbf24" strokeWidth="8">
            <animate attributeName="x" values="135;95;135" dur="4s" repeatCount="indefinite" />
            <animate attributeName="width" values="230;310;230" dur="4s" repeatCount="indefinite" />
          </rect>
          <circle cx="185" cy="170" r="10" fill="#f97316">
            <animate attributeName="cx" values="185;150;185" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="310" cy="190" r="10" fill="#fde047">
            <animate attributeName="cx" values="310;350;310" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <text x="250" y="55" fill="#fde68a" fontSize="24" fontWeight="800" textAnchor="middle">T ↑ at constant P</text>
          <text x="250" y="305" fill="#e2e8f0" fontSize="20" textAnchor="middle">V usually increases</text>
        </svg>
      </article>

      <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Isothermal compression</p>
        <svg viewBox="0 0 500 330" role="img" aria-label="Container compressing as pressure rises at constant temperature" className="mt-3 h-auto w-full">
        <title>Thermodynamics Part 05 scientific diagram 3</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
          <path d="M95 250 V90 H405 V250" fill="none" stroke="#22d3ee" strokeWidth="8" />
          <rect x="125" y="125" width="250" height="22" rx="8" fill="#67e8f9">
            <animate attributeName="y" values="110;185;110" dur="4s" repeatCount="indefinite" />
          </rect>
          <line x1="250" y1="85" x2="250" y2="125" stroke="#67e8f9" strokeWidth="14" strokeLinecap="round">
            <animate attributeName="y2" values="110;185;110" dur="4s" repeatCount="indefinite" />
          </line>
          <text x="250" y="55" fill="#a5f3fc" fontSize="24" fontWeight="800" textAnchor="middle">P ↑ at constant T</text>
          <text x="250" y="305" fill="#e2e8f0" fontSize="20" textAnchor="middle">V decreases</text>
        </svg>
      </article>

      <article className="rounded-3xl border border-violet-300/20 bg-violet-300/[0.05] p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">Thermal pressure</p>
        <svg viewBox="0 0 500 330" role="img" aria-label="Pressure rising during heating at fixed volume" className="mt-3 h-auto w-full">
        <title>Thermodynamics Part 05 scientific diagram 4</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
          <rect x="110" y="90" width="280" height="170" rx="25" fill="#0f172a" stroke="#a78bfa" strokeWidth="9" />
          {[0,1,2,3,4,5,6,7].map((i) => (
            <circle key={i} cx={160 + (i % 4) * 60} cy={135 + Math.floor(i / 4) * 65} r="10" fill={i % 2 ? "#f472b6" : "#c4b5fd"}>
              <animate
                attributeName={i % 2 ? "cx" : "cy"}
                values={i % 2 ? `${160 + (i % 4) * 60 - 20};${160 + (i % 4) * 60 + 20};${160 + (i % 4) * 60 - 20}` : `${135 + Math.floor(i / 4) * 65 - 18};${135 + Math.floor(i / 4) * 65 + 18};${135 + Math.floor(i / 4) * 65 - 18}`}
                dur={`${1.7 + i*0.09}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
          <text x="250" y="55" fill="#ddd6fe" fontSize="24" fontWeight="800" textAnchor="middle">T ↑ at constant V</text>
          <text x="250" y="305" fill="#e2e8f0" fontSize="20" textAnchor="middle">P increases</text>
        </svg>
      </article>
    </div>
  );
}

function MasterRelationVisual() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4 md:p-6">
      <svg viewBox="0 0 1200 590" role="img" aria-labelledby="master-title master-description" className="h-auto w-full">
        <title id="master-title">Master differential relation for volume response</title>
        <desc id="master-description">
          Thermal expansion increases volume and isothermal compression decreases volume.
          Both effects combine in the total differential of volume.
        </desc>

        <defs>
          <marker id="mrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="mrArrowRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="590" rx="34" fill="#020617" />

        <text x="600" y="60" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          VOLUME RESPONDS TO BOTH TEMPERATURE AND PRESSURE
        </text>

        <rect x="430" y="205" width="340" height="155" rx="28" fill="#0f172a" stroke="#67e8f9" strokeWidth="8">
          <animate attributeName="width" values="310;370;310" dur="4s" repeatCount="indefinite" />
          <animate attributeName="x" values="445;415;445" dur="4s" repeatCount="indefinite" />
        </rect>
        <text x="600" y="285" fill="#e2e8f0" fontSize="30" fontWeight="900" textAnchor="middle">SYSTEM VOLUME</text>

        <path d="M105 282 H415" stroke="#34d399" strokeWidth="9" markerEnd="url(#mrArrowGreen)" />
        <text x="250" y="245" fill="#a7f3d0" fontSize="22" textAnchor="middle">thermal term</text>
        <text x="250" y="315" fill="#a7f3d0" fontSize="24" fontWeight="900" textAnchor="middle">+ αV dT</text>

        <path d="M1095 282 H785" stroke="#fb7185" strokeWidth="9" markerEnd="url(#mrArrowRose)" />
        <text x="950" y="245" fill="#fda4af" fontSize="22" textAnchor="middle">pressure term</text>
        <text x="950" y="315" fill="#fda4af" fontSize="24" fontWeight="900" textAnchor="middle">− κT V dP</text>

        <rect x="250" y="445" width="700" height="80" rx="25" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="495" fill="#ddd6fe" fontSize="27" fontWeight="900" textAnchor="middle">
          dV / V = α dT − κT dP
        </text>
      </svg>
    </div>
  );
}

const dailyLifeExamples = [
  {
    title: "Railway tracks and bridges",
    text: "Expansion joints prevent thermal stress when solids expand during hot weather. The relevant response is quantified by a thermal expansion coefficient.",
    tone: "amber" as Tone,
  },
  {
    title: "Deep-sea instruments",
    text: "Large external pressure slightly reduces the volume of liquids and solids and strongly affects trapped gases. Compressibility determines the magnitude.",
    tone: "cyan" as Tone,
  },
  {
    title: "Rigid aerosol can in sunlight",
    text: "When volume is approximately fixed, heating raises pressure. The thermal pressure coefficient quantifies the sensitivity.",
    tone: "violet" as Tone,
  },
  {
    title: "Mercury thermometer",
    text: "The liquid volume changes more strongly with temperature than the glass envelope, producing a measurable column rise.",
    tone: "emerald" as Tone,
  },
];

function DailyLifeGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {dailyLifeExamples.map((example) => (
        <article key={example.title} className={`rounded-3xl border p-5 ${toneMap[example.tone]}`}>
          <h3 className="text-xl font-black text-white">{example.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">{example.text}</p>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — ideal-gas coefficients",
    question:
      "For an ideal gas, obtain α, κT, (∂P/∂T)V, and the normalised pressure coefficient β = (1/P)(∂P/∂T)V.",
    solution:
      "From V = nRT/P, α = (1/V)(∂V/∂T)P = 1/T and κT = −(1/V)(∂V/∂P)T = 1/P. Also P = nRT/V gives (∂P/∂T)V = P/T. Therefore β = 1/T.",
  },
  {
    title: "Concept Application 2 — relation among coefficients",
    question:
      "Prove that (∂P/∂T)V = α/κT.",
    solution:
      "Use the cyclic relation (∂V/∂T)P(∂T/∂P)V(∂P/∂V)T = −1. Replace (∂V/∂T)P by αV and (∂V/∂P)T by −κTV, then use reciprocal derivatives. The result is (∂P/∂T)V = α/κT.",
  },
  {
    title: "Concept Application 3 — small simultaneous changes",
    question:
      "A material has α = 2.0×10⁻⁴ K⁻¹ and κT = 4.0×10⁻¹⁰ Pa⁻¹. Estimate ΔV/V for ΔT = +25 K and ΔP = +5.0 MPa.",
    solution:
      "Use ΔV/V ≈ αΔT − κTΔP. The thermal contribution is 5.0×10⁻³. The compression contribution is 2.0×10⁻³. Hence ΔV/V ≈ 3.0×10⁻³, a net increase of 0.30%.",
  },
  {
    title: "Concept Application 4 — density response",
    question:
      "For a fixed mass, derive the differential change in density with T and P.",
    solution:
      "Since ρ = m/V and m is fixed, dρ/ρ = −dV/V. Substituting dV/V = αdT − κTdP gives dρ/ρ = −αdT + κTdP.",
  },
  {
    title: "Concept Application 5 — van der Waals α",
    question:
      "For P = nRT/(V−nb) − an²/V², write α in derivative form without solving explicitly for V.",
    solution:
      "At constant P, dP = (∂P/∂T)V dT + (∂P/∂V)T dV = 0. Thus (∂V/∂T)P = −(∂P/∂T)V/(∂P/∂V)T. Therefore α = −(1/V)[nR/(V−nb)]/[−nRT/(V−nb)² + 2an²/V³].",
  },
  {
    title: "Concept Application 6 — coefficient dimensions",
    question:
      "Determine the SI dimensions of α, κT, and (∂P/∂T)V.",
    solution:
      "α has unit K⁻¹. κT has unit Pa⁻¹. The unnormalised thermal pressure derivative (∂P/∂T)V has unit Pa K⁻¹. The normalised pressure coefficient β has unit K⁻¹.",
  },
  {
    title: "Concept Application 7 — incompressible approximation",
    question:
      "What does κT → 0 imply, and why must it be treated as an approximation rather than an exact property of real matter?",
    solution:
      "It implies negligible fractional volume change with pressure. Real solids and liquids still compress slightly, so κT is small but not exactly zero. Exact zero compressibility would require infinite bulk modulus.",
  },
  {
    title: "Concept Application 8 — negative thermal expansion",
    question:
      "Can α be negative? Interpret physically.",
    solution:
      "Yes. Negative α means volume decreases when temperature rises at constant pressure over the specified range. This occurs in special materials and in liquid water over part of the 0–4°C interval because structural rearrangement dominates ordinary thermal expansion.",
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
    "Omitting the minus sign in κT",
    "Wrong",
    "For ordinary matter, increasing pressure decreases volume. The minus sign makes κT positive.",
  ],
  [
    "Calling (∂P/∂T)V and (1/P)(∂P/∂T)V the same coefficient",
    "Ambiguous",
    "State the convention. The first has unit Pa K⁻¹; the normalised coefficient has unit K⁻¹.",
  ],
  [
    "Using Celsius temperature in α = 1/T for an ideal gas",
    "Wrong",
    "Thermodynamic temperature must be in kelvin.",
  ],
  [
    "Treating α and κT as constants over every range",
    "Wrong",
    "They generally depend on temperature, pressure, composition, and phase.",
  ],
  [
    "Assuming every substance has α > 0",
    "Wrong",
    "Negative thermal expansion can occur over limited ranges.",
  ],
  [
    "Writing dV/V = αdT + κTdP",
    "Wrong sign",
    "Compression lowers volume, so the pressure term is −κTdP.",
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

export default function ThermodynamicsPart05() {
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
            <Chip tone="amber">RESPONSE COEFFICIENTS</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Response Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                How strongly does a system respond?
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Thermodynamic response coefficients convert qualitative ideas—expansion, compression, pressure rise—
                into measurable constrained derivatives.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Read every coefficient in words
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-amber-400/10 p-4">
                  <p className="font-black text-amber-200">α</p>
                  <p className="mt-1 text-sm text-slate-300">fractional volume change per kelvin at constant pressure</p>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-4">
                  <p className="font-black text-cyan-200">κT</p>
                  <p className="mt-1 text-sm text-slate-300">fractional compression per pascal at constant temperature</p>
                </div>
                <div className="rounded-xl bg-violet-400/10 p-4">
                  <p className="font-black text-violet-200">(∂P/∂T)V</p>
                  <p className="mt-1 text-sm text-slate-300">pressure rise per kelvin at fixed volume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Partial derivatives as constrained slopes"
          subtitle="The subscript tells us which variable is held fixed."
        >
          <p>
            For a fixed-composition single-phase system, any two independent variables may be used to describe the state.
            If volume is written as V(T,P), then a temperature change and a pressure change influence volume in different
            constrained directions.
          </p>

          <ResponseSurfaceAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Temperature slope at constant pressure">
              (∂V/∂T)<sub>P</sub>
            </Formula>
            <Formula label="Pressure slope at constant temperature">
              (∂V/∂P)<sub>T</sub>
            </Formula>
          </div>

          <ConceptLens title="The subscript is part of the quantity" tone="rose">
            (∂V/∂T)<sub>P</sub> and (∂V/∂T)<sub>S</sub> are different response functions.
            Never suppress the constraint in a thermodynamic derivative.
          </ConceptLens>
        </Section>

        <Section index="02" title="Advanced concept derivative toolkit">
          <DerivativeToolkit />

          <ConceptLens title="Cyclic rule with P, V and T" tone="violet">
            The relation
            <span className="font-mono text-white"> (∂P/∂T)<sub>V</sub>(∂T/∂V)<sub>P</sub>(∂V/∂P)<sub>T</sub> = −1 </span>
            connects directly measurable slopes and generates the coefficient identity used later.
          </ConceptLens>
        </Section>

        <Section
          index="03"
          title="Coefficient of isobaric thermal expansion"
          subtitle="How much the system expands when heated at constant pressure."
        >
          <CoefficientCard
            symbol={<>α</>}
            title="Volume expansion coefficient"
            definition={<>α = (1/V)(∂V/∂T)<sub>P</sub></>}
            unit="K⁻¹"
            sign="usually positive; can be negative over special ranges"
            interpretation="If α = 2×10⁻⁴ K⁻¹, a 1 K rise at constant pressure produces approximately a 2×10⁻⁴ fractional increase in volume."
            tone="amber"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Small finite temperature interval">
              ΔV ≈ αVΔT
            </Formula>
            <Formula label="Fractional form">
              ΔV/V ≈ αΔT
            </Formula>
          </div>

          <ConceptLens title="Linear versus volume expansion" tone="amber">
            For an isotropic solid, the volume expansion coefficient is approximately three times the linear expansion
            coefficient for small strains: α<sub>V</sub> ≈ 3α<sub>L</sub>.
          </ConceptLens>

          <ConceptLens title="Water anomaly" tone="sky">
            Liquid water contracts when heated from 0°C toward 4°C at ordinary pressure, so its effective α is negative
            over part of this range. Above the density maximum, ordinary positive expansion resumes.
          </ConceptLens>
        </Section>

        <Section
          index="04"
          title="Isothermal compressibility"
          subtitle="How much volume decreases when pressure rises at constant temperature."
        >
          <CoefficientCard
            symbol={<>κ<sub>T</sub></>}
            title="Isothermal compressibility"
            definition={<>κ<sub>T</sub> = −(1/V)(∂V/∂P)<sub>T</sub></>}
            unit="Pa⁻¹"
            sign="positive for mechanically stable ordinary matter"
            interpretation="The minus sign converts the normally negative slope (∂V/∂P)T into a positive material response coefficient."
            tone="cyan"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Small finite pressure interval">
              ΔV ≈ −κ<sub>T</sub>VΔP
            </Formula>
            <Formula label="Bulk modulus">
              B<sub>T</sub> = 1/κ<sub>T</sub>
            </Formula>
          </div>

          <ConceptLens title="Gases, liquids and solids" tone="cyan">
            Gases are highly compressible, liquids much less so, and solids generally least compressible.
            “Incompressible liquid” is a useful approximation, not an exact physical truth.
          </ConceptLens>

          <ConceptLens title="Mechanical stability" tone="emerald">
            Stable matter normally satisfies (∂V/∂P)<sub>T</sub> &lt; 0, hence κ<sub>T</sub> &gt; 0.
            A negative isothermal compressibility would signal instability under ordinary equilibrium conditions.
          </ConceptLens>
        </Section>

        <Section
          index="05"
          title="Thermal pressure coefficient"
          subtitle="How pressure changes with temperature when volume is fixed."
        >
          <CoefficientCard
            symbol={<>(∂P/∂T)<sub>V</sub></>}
            title="Unnormalised thermal pressure coefficient"
            definition={<>(∂P/∂T)<sub>V</sub></>}
            unit="Pa K⁻¹"
            sign="usually positive"
            interpretation="In a rigid vessel, heating increases molecular momentum transfer to the walls and therefore raises pressure."
            tone="violet"
          />

          <CoefficientCard
            symbol={<>β</>}
            title="Normalised pressure coefficient"
            definition={<>β = (1/P)(∂P/∂T)<sub>V</sub></>}
            unit="K⁻¹"
            sign="usually positive"
            interpretation="Some books use β or another symbol for the normalised pressure response. Always state the convention before using it."
            tone="sky"
          />

          <ConceptLens title="Notation warning" tone="rose">
            Different books use β, γ or other symbols for pressure coefficients, and β is also used elsewhere for
            thermal expansion or reciprocal temperature. Definitions—not symbols—must control the solution.
          </ConceptLens>
        </Section>

        <Section index="06" title="Relationship among α, κT and thermal pressure response">
          <p>
            Begin with the cyclic derivative identity for P, V and T:
          </p>

          <Formula label="Cyclic relation">
            (∂V/∂T)<sub>P</sub>(∂T/∂P)<sub>V</sub>(∂P/∂V)<sub>T</sub> = −1
          </Formula>

          <p>
            Using the reciprocal rule and the definitions of α and κ<sub>T</sub>:
          </p>

          <Formula label="Key relation">
            (∂P/∂T)<sub>V</sub> = α/κ<sub>T</sub>
          </Formula>

          <Formula label="Normalised form">
            β = α/(Pκ<sub>T</sub>)
          </Formula>

          <ConceptLens title="Dimensional check" tone="emerald">
            α/κ<sub>T</sub> has dimensions K⁻¹ ÷ Pa⁻¹ = Pa K⁻¹, exactly matching
            (∂P/∂T)<sub>V</sub>.
          </ConceptLens>
        </Section>

        <Section
          index="07"
          title="Master differential for volume"
          subtitle="Thermal expansion and mechanical compression combine in one equation."
        >
          <p>
            For V = V(T,P),
          </p>

          <Formula label="Total differential">
            dV = (∂V/∂T)<sub>P</sub>dT + (∂V/∂P)<sub>T</sub>dP
          </Formula>

          <p>
            Substitute the coefficient definitions:
          </p>

          <Formula label="Response-coefficient form">
            dV = αVdT − κ<sub>T</sub>VdP
          </Formula>

          <MasterRelationVisual />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Fractional differential">
              dV/V = αdT − κ<sub>T</sub>dP
            </Formula>
            <Formula label="Small finite change">
              ΔV/V ≈ αΔT − κ<sub>T</sub>ΔP
            </Formula>
          </div>

          <ConceptLens title="Competing effects" tone="amber">
            Heating tends to expand ordinary matter, while pressure tends to compress it. A process can be designed so
            the two contributions cancel and volume remains constant.
          </ConceptLens>
        </Section>

        <Section index="08" title="Density response">
          <p>
            For fixed mass, ρ = m/V. Therefore:
          </p>

          <Formula label="Differential density response">
            dρ/ρ = −dV/V = −αdT + κ<sub>T</sub>dP
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Heating at constant pressure" tone="amber">
              When α &gt; 0, density decreases as temperature increases.
            </ConceptLens>
            <ConceptLens title="Compression at constant temperature" tone="cyan">
              When κ<sub>T</sub> &gt; 0, density increases as pressure increases.
            </ConceptLens>
          </div>
        </Section>

        <Section index="09" title="Ideal-gas values">
          <Formula label="Ideal-gas equation">
            V = nRT/P
          </Formula>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Formula label="Expansion coefficient">
              α = 1/T
            </Formula>
            <Formula label="Compressibility">
              κ<sub>T</sub> = 1/P
            </Formula>
            <Formula label="Thermal pressure slope">
              (∂P/∂T)<sub>V</sub> = P/T
            </Formula>
            <Formula label="Normalised pressure coefficient">
              β = 1/T
            </Formula>
          </div>

          <ConceptLens title="Use absolute temperature" tone="rose">
            The relations α = 1/T and β = 1/T require T in kelvin. Celsius temperature is not admissible in these ratios.
          </ConceptLens>
        </Section>

        <Section
          index="10"
          title="Real-gas coefficient strategy"
          subtitle="Use implicit differentiation instead of solving the equation of state for volume."
        >
          <Formula label="General equation of state">
            F(P,V,T) = 0
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="At constant pressure">
              (∂V/∂T)<sub>P</sub> = −(∂F/∂T)<sub>V,P</sub> / (∂F/∂V)<sub>T,P</sub>
            </Formula>
            <Formula label="At constant temperature">
              (∂V/∂P)<sub>T</sub> = −(∂F/∂P)<sub>V,T</sub> / (∂F/∂V)<sub>P,T</sub>
            </Formula>
          </div>

          <Formula label="van der Waals pressure form">
            P = nRT/(V−nb) − an²/V²
          </Formula>

          <ConceptLens title="Why implicit differentiation is powerful" tone="violet">
            Real-gas equations may be cubic in volume. The response coefficients can still be obtained directly from
            derivative ratios without explicitly solving the cubic equation.
          </ConceptLens>
        </Section>

        <Section index="11" title="Few-second coefficient animations">
          <CoefficientAnimation />
        </Section>

        <Section index="12" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="13" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={5} />

<Section index="14" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Response coefficients are constrained fractional slopes
              </h2>
            </div>
            <Chip tone="emerald">PART 05 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["α", "thermal expansion at constant P"],
              ["κT", "compression at constant T"],
              ["α/κT", "pressure rise per kelvin at constant V"],
              ["dV/V", "αdT − κT dP"],
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
