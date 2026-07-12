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

type ProcessCardProps = {
  name: string;
  invariant: React.ReactNode;
  differential: React.ReactNode;
  graph: string;
  meaning: string;
  examples: string[];
  tone: Tone;
};

function ProcessCard({
  name,
  invariant,
  differential,
  graph,
  meaning,
  examples,
  tone,
}: ProcessCardProps) {
  return (
    <article className={`rounded-3xl border p-5 ${toneMap[tone]}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em]">{graph}</p>
          <h3 className="mt-2 text-xl font-black text-white">{name}</h3>
        </div>
        <div className="rounded-xl bg-black/25 px-3 py-2 font-mono text-sm font-black text-white">
          {invariant}
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-black/25 p-3 font-mono text-center text-sm font-black text-slate-100">
        {differential}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-200">{meaning}</p>

      <div className="mt-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Examples</p>
        <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-200">
          {examples.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-cyan-300">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ProcessMapAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="process-map-title process-map-description"
        className="h-auto w-full"
      >
        <title id="process-map-title">Animated map of thermodynamic processes on pressure-volume axes</title>
        <desc id="process-map-description">
          Isobaric, isochoric, isothermal, adiabatic, and cyclic processes are shown as distinct paths.
        </desc>

        <defs>
          <marker id="pmCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="pmAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="pmPink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
          <marker id="pmGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="pmViolet" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#a78bfa" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ONE STATE SPACE • MANY PROCESS CONSTRAINTS
        </text>

        <line x1="145" y1="625" x2="1090" y2="625" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="145" y1="625" x2="145" y2="90" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1115" y="637" fill="#e2e8f0" fontSize="25">V</text>
        <text x="118" y="82" fill="#e2e8f0" fontSize="25">P</text>

        <path id="isobarPath" d="M250 245 H960" fill="none" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#pmCyan)" />
        <text x="615" y="220" fill="#a5f3fc" fontSize="21" textAnchor="middle">isobaric: P = constant</text>

        <path id="isochorPath" d="M355 520 V155" fill="none" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#pmAmber)" />
        <text x="390" y="360" fill="#fde68a" fontSize="21">isochoric: V = constant</text>

        <path id="isothermPath" d="M235 160 C385 255 655 390 965 520" fill="none" stroke="#f472b6" strokeWidth="5" markerEnd="url(#pmPink)" />
        <text x="735" y="430" fill="#f9a8d4" fontSize="21">isothermal: PV = constant for ideal gas</text>

        <path id="adiabatPath" d="M235 135 C355 250 535 440 820 555" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#pmGreen)" />
        <text x="520" y="510" fill="#a7f3d0" fontSize="21">reversible adiabatic: PVᵞ = constant</text>

        <path
          id="cyclePath"
          d="M690 190 C850 115 1015 220 965 350 C925 470 710 480 635 365 C580 275 610 225 690 190 Z"
          fill="rgba(167,139,250,0.08)"
          stroke="#a78bfa"
          strokeWidth="5"
          markerEnd="url(#pmViolet)"
        />
        <text x="845" y="145" fill="#ddd6fe" fontSize="21" textAnchor="middle">cyclic: final state = initial state</text>

        {[
          ["isobarPath", "#67e8f9", "3.5s"],
          ["isochorPath", "#fde047", "3.2s"],
          ["isothermPath", "#f9a8d4", "4.2s"],
          ["adiabatPath", "#86efac", "4.0s"],
          ["cyclePath", "#c4b5fd", "5.0s"],
        ].map(([id, colour, duration]) => (
          <circle key={id} r="12" fill={colour}>
            <animateMotion dur={duration} repeatCount="indefinite">
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        ))}

        <text x="600" y="690" fill="#94a3b8" fontSize="18" textAnchor="middle">
          The same endpoints may be joined by different process constraints and therefore different heat–work histories.
        </text>
      </svg>
    </div>
  );
}

function HeatFlowAnimation() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Isothermal control</p>
        <svg viewBox="0 0 620 360" role="img" aria-label="Isothermal piston with heat entering" className="mt-4 h-auto w-full">
        <title>Thermodynamics Part 04 scientific diagram 2</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
          <defs>
            <marker id="heatArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
            </marker>
          </defs>
          <rect x="120" y="60" width="360" height="230" rx="22" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
          <rect x="150" y="140" width="300" height="22" rx="8" fill="#67e8f9">
            <animate attributeName="y" values="180;105;180" dur="4s" repeatCount="indefinite" />
          </rect>
          <line x1="300" y1="65" x2="300" y2="140" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round">
            <animate attributeName="y2" values="180;105;180" dur="4s" repeatCount="indefinite" />
          </line>
          <path d="M30 230 H120" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#heatArrow)">
            <animate attributeName="stroke-dasharray" values="0 100;50 50;100 0" dur="2s" repeatCount="indefinite" />
          </path>
          <text x="60" y="205" fill="#fde68a" fontSize="22">q</text>
          <text x="300" y="330" fill="#e2e8f0" fontSize="21" textAnchor="middle">heat reservoir holds T constant</text>
        </svg>
      </article>

      <article className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Adiabatic isolation</p>
        <svg viewBox="0 0 620 360" role="img" aria-label="Adiabatic piston with no heat transfer" className="mt-4 h-auto w-full">
        <title>Thermodynamics Part 04 scientific diagram 3</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
          <rect x="120" y="60" width="360" height="230" rx="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="4" />
          <rect x="150" y="140" width="300" height="22" rx="8" fill="#86efac">
            <animate attributeName="y" values="180;105;180" dur="4s" repeatCount="indefinite" />
          </rect>
          <line x1="300" y1="65" x2="300" y2="140" stroke="#86efac" strokeWidth="5" strokeLinecap="round">
            <animate attributeName="y2" values="180;105;180" dur="4s" repeatCount="indefinite" />
          </line>
          <path d="M35 225 H110" stroke="#fb7185" strokeWidth="5" />
          <path d="M82 195 L115 250 M115 195 L82 250" stroke="#fb7185" strokeWidth="5" />
          <text x="55" y="190" fill="#fda4af" fontSize="22">q = 0</text>
          <text x="300" y="330" fill="#e2e8f0" fontSize="21" textAnchor="middle">temperature may change as work occurs</text>
        </svg>
      </article>
    </div>
  );
}

function ReversibilityAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 670"
        role="img"
        aria-labelledby="rev-title rev-description"
        className="h-auto w-full"
      >
        <title id="rev-title">Animated reversible versus irreversible piston motion</title>
        <desc id="rev-description">
          A reversible process uses infinitesimal weight changes and remains near equilibrium.
          An irreversible process follows a finite pressure imbalance and exhibits rapid motion and damping.
        </desc>

        <rect width="1200" height="670" rx="34" fill="#020617" />

        <text x="300" y="60" fill="#a7f3d0" fontSize="30" fontWeight="900" textAnchor="middle">
          REVERSIBLE LIMIT
        </text>
        <text x="900" y="60" fill="#fda4af" fontSize="30" fontWeight="900" textAnchor="middle">
          IRREVERSIBLE PROCESS
        </text>

        <g>
          <path d="M110 530 V190 H490 V530" fill="none" stroke="#34d399" strokeWidth="5" />
          <rect x="145" y="325" width="310" height="25" rx="9" fill="#67e8f9">
            <animate attributeName="y" values="350;265;350" dur="8s" repeatCount="indefinite" />
          </rect>
          <line x1="300" y1="190" x2="300" y2="325" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round">
            <animate attributeName="y2" values="350;265;350" dur="8s" repeatCount="indefinite" />
          </line>

          {[0,1,2,3,4,5].map((i) => (
            <rect key={i} x={260 + (i % 3) * 28} y={145 - Math.floor(i / 3) * 22} width="24" height="18" rx="4" fill="#fde047">
              <animate
                attributeName="opacity"
                values={i % 2 === 0 ? "1;0;1" : "0;1;0"}
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
          ))}

          <text x="300" y="565" fill="#a7f3d0" fontSize="20" textAnchor="middle">
            |P − Pext| → infinitesimal
          </text>
          <text x="300" y="600" fill="#cbd5e1" fontSize="18" textAnchor="middle">
            continuous succession of equilibrium states
          </text>
        </g>

        <line x1="600" y1="90" x2="600" y2="620" stroke="#334155" strokeWidth="4" />

        <g>
          <path d="M710 530 V190 H1090 V530" fill="none" stroke="#fb7185" strokeWidth="5" />
          <rect x="745" y="325" width="310" height="25" rx="9" fill="#f472b6">
            <animate
              attributeName="y"
              values="330;220;275;235;260;245;252"
              keyTimes="0;0.18;0.36;0.52;0.68;0.84;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </rect>
          <line x1="900" y1="190" x2="900" y2="325" stroke="#f472b6" strokeWidth="5" strokeLinecap="round">
            <animate
              attributeName="y2"
              values="330;220;275;235;260;245;252"
              keyTimes="0;0.18;0.36;0.52;0.68;0.84;1"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </line>
          <rect x="845" y="120" width="110" height="50" rx="8" fill="#fde047">
            <animate attributeName="opacity" values="1;0.15;0.15" keyTimes="0;0.16;1" dur="4.2s" repeatCount="indefinite" />
          </rect>

          <text x="900" y="565" fill="#fda4af" fontSize="20" textAnchor="middle">
            finite pressure imbalance
          </text>
          <text x="900" y="600" fill="#cbd5e1" fontSize="18" textAnchor="middle">
            rapid motion, overshoot, damping, entropy production
          </text>
        </g>

        <text x="600" y="650" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Quasi-static motion is necessary for reversibility but is not sufficient when friction or finite gradients exist.
        </text>
      </svg>
    </div>
  );
}

function EquilibriumCompass() {
  const cards = [
    {
      title: "Thermal equilibrium",
      criterion: "uniform temperature",
      symbol: "T",
      absence: "no internal heat flow",
      tone: "amber" as Tone,
    },
    {
      title: "Mechanical equilibrium",
      criterion: "balanced pressure and forces",
      symbol: "P",
      absence: "no unbalanced macroscopic motion",
      tone: "cyan" as Tone,
    },
    {
      title: "Phase equilibrium",
      criterion: "no net phase conversion",
      symbol: "μᵅ = μᵝ",
      absence: "no net transfer between phases",
      tone: "violet" as Tone,
    },
    {
      title: "Chemical equilibrium",
      criterion: "no net reaction progress",
      symbol: "A = 0",
      absence: "composition no longer changes with time",
      tone: "emerald" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <article key={card.title} className={`rounded-3xl border p-5 ${toneMap[card.tone]}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">{card.criterion}</p>
              <h3 className="mt-2 text-xl font-black text-white">{card.title}</h3>
            </div>
            <span className="rounded-xl bg-black/25 px-3 py-2 font-mono font-black text-white">{card.symbol}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{card.absence}</p>
        </article>
      ))}
    </div>
  );
}

function CycleGraph() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 650"
        role="img"
        aria-labelledby="cycle-title cycle-description"
        className="h-auto w-full"
      >
        <title id="cycle-title">Clockwise and anticlockwise pressure-volume cycles</title>
        <desc id="cycle-description">
          The signed area inside a pressure-volume cycle gives net work under the chemistry sign convention.
        </desc>

        <defs>
          <marker id="cycleCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="cyclePink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
        </defs>

        <rect width="1200" height="650" rx="34" fill="#020617" />

        <g>
          <text x="300" y="58" fill="#a5f3fc" fontSize="29" fontWeight="900" textAnchor="middle">
            CLOCKWISE CYCLE
          </text>
          <line x1="90" y1="540" x2="525" y2="540" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="90" y1="540" x2="90" y2="105" stroke="#e2e8f0" strokeWidth="5" />
          <path
            d="M165 430 L165 190 L440 190 L440 430 Z"
            fill="rgba(34,211,238,0.12)"
            stroke="#22d3ee"
            strokeWidth="5"
            markerEnd="url(#cycleCyan)"
          />
          <path d="M165 430 L165 190 L440 190 L440 430 L165 430" fill="none" stroke="#22d3ee" strokeWidth="5" strokeDasharray="450 600">
            <animate attributeName="stroke-dashoffset" values="0;-1050" dur="4.5s" repeatCount="indefinite" />
          </path>
          <text x="300" y="585" fill="#a5f3fc" fontSize="20" textAnchor="middle">
            gas does net work → chemistry wcycle &lt; 0
          </text>
        </g>

        <line x1="600" y1="85" x2="600" y2="595" stroke="#334155" strokeWidth="4" />

        <g>
          <text x="900" y="58" fill="#f9a8d4" fontSize="29" fontWeight="900" textAnchor="middle">
            ANTICLOCKWISE CYCLE
          </text>
          <line x1="675" y1="540" x2="1110" y2="540" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="675" y1="540" x2="675" y2="105" stroke="#e2e8f0" strokeWidth="5" />
          <path
            d="M750 430 L1025 430 L1025 190 L750 190 Z"
            fill="rgba(244,114,182,0.12)"
            stroke="#f472b6"
            strokeWidth="5"
            markerEnd="url(#cyclePink)"
          />
          <path d="M750 430 L1025 430 L1025 190 L750 190 L750 430" fill="none" stroke="#f472b6" strokeWidth="5" strokeDasharray="450 600">
            <animate attributeName="stroke-dashoffset" values="0;-1050" dur="4.5s" repeatCount="indefinite" />
          </path>
          <text x="900" y="585" fill="#f9a8d4" fontSize="20" textAnchor="middle">
            surroundings do net work → chemistry wcycle &gt; 0
          </text>
        </g>
      </svg>
    </div>
  );
}

const processProblems = [
  {
    title: "Graph Intelligence 1 — T–V to P–V conversion",
    question:
      "For one mole of an ideal gas, A→B is isobaric on a T–V graph, B→C is isochoric, and C→A is isothermal. Describe the corresponding P–V paths.",
    solution:
      "A→B becomes a horizontal line on P–V because pressure is constant. B→C becomes a vertical line because volume is constant. C→A lies on an isotherm PV = constant. The exact orientation depends on the labelled endpoint values.",
  },
  {
    title: "Graph Intelligence 2 — six-step cycle",
    question:
      "A→B is isobaric expansion, B→C reversible adiabatic expansion, C→D isochoric cooling, D→E isobaric compression, E→F reversible adiabatic compression, and F→A isochoric heating. Identify which legs have zero PV work.",
    solution:
      "The isochoric legs C→D and F→A have dV = 0, hence pressure–volume work is zero. All expansion or compression legs may involve non-zero PV work.",
  },
  {
    title: "Concept Application 1 — isothermal versus adiabatic",
    question:
      "An ideal gas begins from the same state and expands reversibly to the same larger volume by an isothermal path and an adiabatic path. Which final pressure is larger?",
    solution:
      "The isothermal final pressure is larger. During adiabatic expansion the gas cools, so pressure falls more rapidly; the reversible adiabat is steeper than the isotherm on a P–V graph.",
  },
  {
    title: "Concept Application 2 — isentropic trap",
    question:
      "Is every adiabatic process isentropic?",
    solution:
      "No. An adiabatic reversible process is isentropic. An adiabatic irreversible process produces entropy internally, so the system entropy generally increases even though q = 0.",
  },
  {
    title: "Concept Application 3 — quasi-static with friction",
    question:
      "A piston moves extremely slowly but rubs against the cylinder wall. Is the process reversible?",
    solution:
      "No. Slow motion may keep the gas close to internal equilibrium, making the process quasi-static, but friction produces entropy and requires a finite force imbalance. Reversing the external conditions does not retrace both system and surroundings exactly.",
  },
  {
    title: "Concept Application 4 — equilibrium subsets",
    question:
      "A container has uniform temperature and pressure, but a reaction continues slowly. Is the system in thermodynamic equilibrium?",
    solution:
      "No. It has thermal and mechanical equilibrium but lacks chemical equilibrium. Complete thermodynamic equilibrium requires every relevant equilibrium condition simultaneously.",
  },
  {
    title: "Concept Application 5 — cycle signs",
    question:
      "A gas traverses a clockwise closed loop on a P–V diagram. What are the signs of net work and net heat using the chemistry convention ΔU = q + w?",
    solution:
      "The gas does net work, so wcycle is negative. Since ΔUcycle = 0, qcycle = −wcycle is positive: the gas absorbs net heat over the cycle.",
  },
  {
    title: "Concept Application 6 — constant pressure is not automatically open",
    question:
      "Must every isobaric process occur in an open system?",
    solution:
      "No. A closed gas beneath a freely moving weighted piston can expand or compress at constant external pressure without any mass transfer. Open vessels often realise approximately constant atmospheric pressure, but openness is not the defining condition.",
  },
];

function ProblemLadder() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {processProblems.map((item) => (
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

const correctionRows = [
  [
    "“A reversible process means state variables do not change.”",
    "Incorrect",
    "State variables generally change continuously during a reversible process; they remain well-defined at every stage.",
  ],
  [
    "“Every quasi-static process is reversible.”",
    "Incorrect",
    "Quasi-static motion is necessary but not sufficient. Friction, viscosity, electrical resistance, or finite thermal gradients destroy reversibility.",
  ],
  [
    "“Every adiabatic process is isentropic.”",
    "Incorrect",
    "Only a reversible adiabatic process is isentropic for a closed simple system.",
  ],
  [
    "“Every isobaric process is an open-system process.”",
    "Incorrect",
    "A closed weighted-piston system can also undergo a constant-pressure process.",
  ],
  [
    "“A reversible process simply runs backward.”",
    "Incomplete",
    "The reverse must restore both system and surroundings with no net change anywhere.",
  ],
  [
    "“An irreversible path consists of no states.”",
    "Refine",
    "Its initial and final equilibrium states are defined, but intermediate bulk variables may be non-uniform and a single equilibrium path may not exist.",
  ],
];

function CorrectionTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Statement</th>
            <th className="px-4 py-3 font-black text-white">Verdict</th>
            <th className="px-4 py-3 font-black text-white">Scientifically correct form</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {correctionRows.map(([statement, verdict, correction]) => (
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

export default function ThermodynamicsPart04() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(52,211,153,0.10),transparent_34%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="emerald">PROCESS ANIMATION EDITION</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Process Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                A process is a path through state space
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Isothermal, isobaric, isochoric and adiabatic processes impose different constraints.
                Reversibility asks a deeper question: can an infinitesimal change retrace the path while restoring
                both the system and the surroundings?
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Three questions for every process
              </p>
              <div className="mt-4 space-y-3">
                {[
                  ["Constraint", "Which state variable is fixed?"],
                  ["Boundary", "Can heat, work, or matter cross?"],
                  ["Reversibility", "Are all gradients infinitesimal and dissipations absent?"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl bg-black/25 p-4">
                    <p className="font-black text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Thermodynamic process"
          subtitle="A process changes the system from an initial equilibrium state to a final equilibrium state."
        >
          <p>
            A thermodynamic process is described by the path followed in state space and by the boundary interactions
            that occur along that path. The same endpoints can be connected by different constraints, producing
            different heat and work even though every state-function change remains the same.
          </p>

          <ProcessMapAnimation />

          <ConceptLens title="A named process specifies a constraint—not a complete heat–work answer" tone="cyan">
            “Isothermal” tells us that temperature remains constant. It does not by itself tell us whether the process
            is reversible, whether expansion occurs into vacuum, or how much work is performed. Those details require
            the path and surroundings.
          </ConceptLens>
        </Section>

        <Section index="02" title="Isothermal, isobaric and isochoric processes">
          <div className="grid gap-4 lg:grid-cols-3">
            <ProcessCard
              name="Isothermal process"
              invariant={<>T = constant</>}
              differential={<>dT = 0 and ΔT = 0</>}
              graph="ISOTHERM"
              tone="cyan"
              meaning="Temperature remains constant throughout the process. Heat may enter or leave to compensate for work or other energy changes."
              examples={[
                "Very slow gas expansion while in contact with a large thermal reservoir",
                "Idealised compression using a conducting cylinder immersed in a constant-temperature bath",
              ]}
            />

            <ProcessCard
              name="Isobaric process"
              invariant={<>P = constant</>}
              differential={<>dP = 0 and ΔP = 0</>}
              graph="ISOBAR"
              tone="amber"
              meaning="Pressure remains constant while temperature and volume may change. Constant atmospheric pressure is a common approximation, but openness is not required."
              examples={[
                "Heating a gas beneath a freely moving weighted piston",
                "Boiling water in an open vessel at approximately constant atmospheric pressure",
                "Melting wax exposed to a nearly constant external pressure",
              ]}
            />

            <ProcessCard
              name="Isochoric process"
              invariant={<>V = constant</>}
              differential={<>dV = 0 and ΔV = 0</>}
              graph="ISOCHORE"
              tone="violet"
              meaning="Volume remains constant. For a rigid closed vessel, pressure and temperature may change while pressure–volume boundary work is zero."
              examples={[
                "Heating gas in a rigid sealed steel vessel",
                "Cooling a fixed quantity of gas in a rigid bulb",
              ]}
            />
          </div>

          <HeatFlowAnimation />

          <ConceptLens title="Isothermal does not mean adiabatic" tone="rose">
            Isothermal control often requires heat transfer. Adiabatic isolation prohibits heat transfer and therefore
            commonly allows temperature to change. A process can be both isothermal and adiabatic only in special cases,
            such as ideal-gas free expansion with ΔU = 0, not as a general identity.
          </ConceptLens>
        </Section>

        <Section index="03" title="Adiabatic process">
          <Formula label="Defining condition">
            q = 0
          </Formula>

          <p>
            An adiabatic process occurs through a boundary that permits no heat transfer during the process.
            Energy may still cross as work, and the system temperature may change.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Reversible adiabatic" tone="emerald">
              The system remains arbitrarily close to equilibrium and no entropy is generated. For a closed simple
              compressible system, the process is isentropic.
            </ConceptLens>
            <ConceptLens title="Irreversible adiabatic" tone="rose">
              Heat transfer remains zero, but friction, free expansion, finite pressure differences or viscosity can
              generate entropy. Adiabatic therefore does not automatically mean isentropic.
            </ConceptLens>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Preview relation</p>
            <p className="mt-3 font-mono text-xl font-black text-white">PV<sup>γ</sup> = constant</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              This relation applies to a reversible adiabatic change of an ideal gas with appropriate heat-capacity assumptions.
              Its complete derivation will appear in the process-calculation module.
            </p>
          </div>
        </Section>

        <Section index="04" title="Cyclic process">
          <p>
            A cyclic process returns the system to its initial state after two or more legs. Every state function therefore
            has zero net change over the full cycle:
          </p>

          <Formula label="State-function closure">
            ΔP = ΔV = ΔT = ΔU = ΔH = ΔS = ΔG = 0
          </Formula>

          <p>
            Heat and work are path functions and can have non-zero net values. On a pressure–volume graph, the magnitude
            of net pressure–volume work equals the enclosed area.
          </p>

          <CycleGraph />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Chemistry sign convention: clockwise">
              w<sub>cycle</sub> &lt; 0
            </Formula>
            <Formula label="Chemistry sign convention: anticlockwise">
              w<sub>cycle</sub> &gt; 0
            </Formula>
          </div>

          <ConceptLens title="Cycle does not mean q = w = 0" tone="amber">
            Only state-function changes vanish. With ΔUcycle = 0, the First Law gives qcycle = −wcycle.
          </ConceptLens>
        </Section>

        <Section index="05" title="Isoenthalpic and isentropic processes">
          <div className="grid gap-4 lg:grid-cols-2">
            <ProcessCard
              name="Isoenthalpic process"
              invariant={<>H = constant</>}
              differential={<>dH = 0 and ΔH = 0</>}
              graph="ISENTHALPIC"
              tone="sky"
              meaning="Enthalpy remains constant. Throttling through a porous plug or valve is the standard engineering model, discussed fully with Joule–Thomson behaviour in the appropriate advanced section."
              examples={[
                "Steady throttling through an insulated valve under negligible kinetic and potential energy changes",
              ]}
            />

            <ProcessCard
              name="Isentropic process"
              invariant={<>S = constant</>}
              differential={<>dS = 0 and ΔS = 0</>}
              graph="ISENTROPE"
              tone="emerald"
              meaning="Entropy remains constant. A reversible adiabatic process of a closed simple system is isentropic, but a generic adiabatic process need not be."
              examples={[
                "Ideal reversible adiabatic compression in a frictionless piston",
                "Idealised turbine or compressor stage with negligible entropy generation",
              ]}
            />
          </div>

          <ConceptLens title="A cyclic process is not generally isentropic at every instant" tone="violet">
            The total entropy change of the system over a complete cycle is zero because the final state equals the initial
            state. Individual legs may nevertheless have non-zero entropy changes. “Net ΔS = 0” is not the same as
            “S remains constant throughout.”
          </ConceptLens>
        </Section>

        <Section
          index="06"
          title="Reversible and irreversible processes"
          subtitle="Reversibility is a limiting ideal defined by complete restoration of system and surroundings."
        >
          <ReversibilityAnimation />

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <Chip tone="emerald">REVERSIBLE LIMIT</Chip>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                <li>• Driving and opposing forces differ infinitesimally.</li>
                <li>• The direction can be reversed by an infinitesimal change.</li>
                <li>• System passes through a continuous sequence of equilibrium states.</li>
                <li>• No friction, viscosity, finite temperature gradient or other dissipation.</li>
                <li>• Produces maximum expansion work or requires minimum compression work between fixed states.</li>
                <li>• Takes an idealised infinite time in the strict limit.</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
              <Chip tone="rose">IRREVERSIBLE REALITY</Chip>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                <li>• Finite driving force produces a definite rate.</li>
                <li>• Reversing one external control does not restore all surroundings.</li>
                <li>• Intermediate pressure, temperature or composition may be non-uniform.</li>
                <li>• Friction, mixing, free expansion, diffusion and heat flow across finite ΔT generate entropy.</li>
                <li>• Gives less expansion work than the reversible limit for fixed endpoints.</li>
                <li>• All real finite-rate processes are irreversible to some degree.</li>
              </ul>
            </article>
          </div>

          <ConceptLens title="The reversibility test includes the surroundings" tone="cyan">
            A movie played backward is not sufficient. After the reverse process, there must be no net change anywhere:
            not in the system, weights, reservoirs, atmosphere or any other part of the surroundings.
          </ConceptLens>
        </Section>

        <Section index="07" title="Quasi-static process">
          <p>
            A quasi-static process proceeds slowly enough that the system remains arbitrarily close to internal equilibrium.
            Pressure, temperature and other state variables remain meaningful throughout the path.
          </p>

          <Formula label="Mechanical quasi-static limit">
            |P − P<sub>ext</sub>| → 0
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Necessary for mechanical reversibility" tone="emerald">
              A reversible piston process must be quasi-static so that no finite pressure imbalance develops.
            </ConceptLens>
            <ConceptLens title="Not sufficient for reversibility" tone="rose">
              A piston can move extremely slowly while friction converts work into internal energy. Such a process is
              quasi-static but irreversible.
            </ConceptLens>
          </div>

          <p className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-6 text-slate-200">
            During a strongly irreversible process, the equilibrium equation of state can be used reliably at the initial
            and final equilibrium states. A single uniform bulk pressure or temperature may not exist throughout the
            intermediate non-equilibrium state.
          </p>
        </Section>

        <Section index="08" title="Thermodynamic equilibrium">
          <p>
            A system is in complete thermodynamic equilibrium only when every relevant spontaneous macroscopic change has
            ceased. Thermal, mechanical and material equilibrium must coexist.
          </p>

          <EquilibriumCompass />

          <ConceptLens title="Material equilibrium has two parts" tone="violet">
            Phase equilibrium requires no net transfer between phases. Chemical equilibrium requires no net reaction
            progress. A system may satisfy one without satisfying the other.
          </ConceptLens>

          <ConceptLens title="Equilibrium with surroundings versus internal equilibrium" tone="sky">
            A system can be internally uniform yet not be in equilibrium with its surroundings. A gas under a piston may
            have uniform internal pressure while P differs slightly from Pext and the piston moves quasi-statically.
          </ConceptLens>
        </Section>

        <Section index="09" title="Scientific statements corrected for Advanced concept accuracy">
          <CorrectionTable />
        </Section>

        <Section
          index="10"
          title="Graph intelligence from the chapter sequence"
          subtitle="Convert process labels between P–V, T–V and P–T representations."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">P–V plane</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Isobar: horizontal. Isochore: vertical. Ideal-gas isotherm: rectangular hyperbola.
              </p>
            </article>
            <article className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">T–V plane</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Isotherm: horizontal. Isochore: vertical. Ideal-gas isobar: straight line through the origin in kelvin variables.
              </p>
            </article>
            <article className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">P–T plane</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Isobar: horizontal. Isotherm: vertical. Ideal-gas isochore: straight line through the origin in kelvin variables.
              </p>
            </article>
          </div>

          <ConceptLens title="Conversion algorithm" tone="cyan">
            For each leg, write the invariant first. Then use PV = nRT only when the system is an ideal gas in equilibrium.
            Translate the invariant into the requested axes before sketching direction arrows.
          </ConceptLens>
        </Section>


        <ThermodynamicsCompleteDerivations part={4} />

<Section index="11" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Constraint names the process; dissipation decides reversibility
              </h2>
            </div>
            <Chip tone="emerald">PART 04 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Isothermal", "T constant"],
              ["Isochoric", "V constant"],
              ["Adiabatic", "q = 0"],
              ["Reversible", "no entropy production in the ideal limit"],
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
