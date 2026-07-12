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

function ZerothLawAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 700"
        role="img"
        aria-labelledby="zeroth-title zeroth-description"
        className="h-auto w-full"
      >
        <title id="zeroth-title">Animated Zeroth Law and thermometer comparison</title>
        <desc id="zeroth-description">
          System A and thermometer C reach thermal equilibrium. System B and the same thermometer C also reach equilibrium.
          Therefore A and B have equal temperature and would be in thermal equilibrium with each other.
        </desc>

        <defs>
          <linearGradient id="hotGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
          <linearGradient id="thermoGrad" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <marker id="zeroArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#67e8f9" />
          </marker>
        </defs>

        <rect width="1200" height="700" rx="34" fill="#020617" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ZEROTH LAW: TEMPERATURE IS A TRANSITIVE EQUILIBRIUM PROPERTY
        </text>

        <g>
          <rect x="85" y="180" width="260" height="250" rx="34" fill="#0f172a" stroke="url(#hotGrad)" strokeWidth="8" />
          <text x="215" y="240" fill="#fda4af" fontSize="34" fontWeight="900" textAnchor="middle">A</text>
          <text x="215" y="285" fill="#cbd5e1" fontSize="20" textAnchor="middle">unknown body</text>
          <circle cx="185" cy="355" r="16" fill="#f97316">
            <animate attributeName="cy" values="330;385;330" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="245" cy="345" r="14" fill="#fde047">
            <animate attributeName="cx" values="225;275;225" dur="2.6s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <rect x="855" y="180" width="260" height="250" rx="34" fill="#0f172a" stroke="#a78bfa" strokeWidth="8" />
          <text x="985" y="240" fill="#ddd6fe" fontSize="34" fontWeight="900" textAnchor="middle">B</text>
          <text x="985" y="285" fill="#cbd5e1" fontSize="20" textAnchor="middle">second body</text>
          <circle cx="955" cy="355" r="16" fill="#f472b6">
            <animate attributeName="cy" values="330;385;330" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="1015" cy="345" r="14" fill="#c4b5fd">
            <animate attributeName="cx" values="995;1045;995" dur="2.6s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <rect x="500" y="145" width="200" height="330" rx="40" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
          <text x="600" y="200" fill="#a5f3fc" fontSize="34" fontWeight="900" textAnchor="middle">C</text>
          <text x="600" y="235" fill="#cbd5e1" fontSize="19" textAnchor="middle">thermometer</text>
          <rect x="575" y="265" width="50" height="145" rx="25" fill="#1e293b" stroke="#e2e8f0" strokeWidth="4" />
          <rect x="588" y="310" width="24" height="90" rx="12" fill="url(#thermoGrad)">
            <animate attributeName="y" values="340;295;340" dur="4s" repeatCount="indefinite" />
            <animate attributeName="height" values="60;105;60" dur="4s" repeatCount="indefinite" />
          </rect>
          <circle cx="600" cy="420" r="36" fill="#f472b6" />
        </g>

        <path d="M360 305 H485" stroke="#67e8f9" strokeWidth="8" markerEnd="url(#zeroArrow)">
          <animate attributeName="stroke-dasharray" values="0 130;65 65;130 0" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M840 305 H715" stroke="#67e8f9" strokeWidth="8" markerEnd="url(#zeroArrow)">
          <animate attributeName="stroke-dasharray" values="130 0;65 65;0 130" dur="2.2s" repeatCount="indefinite" />
        </path>

        <text x="420" y="275" fill="#a5f3fc" fontSize="18" textAnchor="middle">A ↔ C</text>
        <text x="780" y="275" fill="#a5f3fc" fontSize="18" textAnchor="middle">B ↔ C</text>

        <rect x="265" y="520" width="670" height="90" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="600" y="558" fill="#a7f3d0" fontSize="25" fontWeight="900" textAnchor="middle">
          TA = TC and TB = TC
        </text>
        <text x="600" y="592" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">
          therefore TA = TB
        </text>

        <text x="600" y="660" fill="#94a3b8" fontSize="18" textAnchor="middle">
          A thermometer compares temperatures indirectly without placing A and B in direct contact.
        </text>
      </svg>
    </div>
  );
}

function EnergyConservationAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="conservation-title conservation-description"
        className="h-auto w-full"
      >
        <title id="conservation-title">Animated First Law energy accounting</title>
        <desc id="conservation-description">
          Heat and work enter or leave a system, changing internal energy. Energy lost by surroundings is gained by the system,
          and the total energy of system plus surroundings remains constant.
        </desc>

        <defs>
          <marker id="ecAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="ecCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <linearGradient id="systemCore" x1="0" x2="1">
            <stop offset="0%" stopColor="#164e63" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          FIRST LAW: ENERGY CHANGES FORM, NOT TOTAL AMOUNT
        </text>

        <rect x="385" y="180" width="430" height="330" rx="44" fill="url(#systemCore)" stroke="#a78bfa" strokeWidth="9" />
        <text x="600" y="240" fill="#f8fafc" fontSize="32" fontWeight="900" textAnchor="middle">SYSTEM</text>

        <circle cx="520" cy="350" r="22" fill="#fde047">
          <animate attributeName="cy" values="310;400;310" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="610" cy="385" r="20" fill="#67e8f9">
          <animate attributeName="cx" values="560;670;560" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="325" r="20" fill="#f472b6">
          <animate attributeName="cy" values="285;410;285" dur="2.6s" repeatCount="indefinite" />
        </circle>

        <path d="M80 290 H370" stroke="#fbbf24" strokeWidth="10" markerEnd="url(#ecAmber)">
          <animate attributeName="stroke-dasharray" values="0 300;150 150;300 0" dur="2.4s" repeatCount="indefinite" />
        </path>
        <text x="220" y="255" fill="#fde68a" fontSize="26" fontWeight="900" textAnchor="middle">heat q</text>

        <path d="M1120 410 H830" stroke="#22d3ee" strokeWidth="10" markerEnd="url(#ecCyan)">
          <animate attributeName="stroke-dasharray" values="300 0;150 150;0 300" dur="2.4s" repeatCount="indefinite" />
        </path>
        <text x="980" y="375" fill="#a5f3fc" fontSize="26" fontWeight="900" textAnchor="middle">work w</text>

        <rect x="445" y="535" width="310" height="65" rx="22" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="600" y="578" fill="#a7f3d0" fontSize="29" fontWeight="900" textAnchor="middle">ΔU = q + w</text>

        <rect x="155" y="625" width="890" height="54" rx="22" fill="#0f172a" stroke="#f472b6" strokeWidth="4" />
        <text x="600" y="661" fill="#f9a8d4" fontSize="22" fontWeight="900" textAnchor="middle">
          ΔE(system) + ΔE(surroundings) = 0
        </text>
      </svg>
    </div>
  );
}

function EquivalentRoutesAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 700"
        role="img"
        aria-labelledby="routes-title routes-description"
        className="h-auto w-full"
      >
        <title id="routes-title">Mechanical work and electrical work producing the same internal-energy change</title>
        <desc id="routes-description">
          A paddle wheel and an immersion resistor deliver equal energy to insulated water.
          The final temperature and internal-energy change are the same although the work mechanism differs.
        </desc>

        <rect width="1200" height="700" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          HEAT AND WORK ARE ALTERNATIVE ENERGY-TRANSFER MODES
        </text>

        <g>
          <text x="300" y="115" fill="#a5f3fc" fontSize="26" fontWeight="900" textAnchor="middle">
            MECHANICAL ROUTE
          </text>
          <rect x="110" y="150" width="380" height="360" rx="34" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
          <path d="M145 270 H455 V475 H145 Z" fill="#164e63" opacity="0.85" />
          <line x1="300" y1="145" x2="300" y2="350" stroke="#e2e8f0" strokeWidth="14" />
          <g transform="translate(300 350)">
            <animateTransform attributeName="transform" type="rotate" from="0 300 350" to="360 300 350" dur="1.4s" repeatCount="indefinite" />
            <line x1="-80" y1="0" x2="80" y2="0" stroke="#fbbf24" strokeWidth="15" />
            <line x1="0" y1="-80" x2="0" y2="80" stroke="#fbbf24" strokeWidth="15" />
          </g>
          <text x="300" y="550" fill="#cbd5e1" fontSize="20" textAnchor="middle">paddle work on insulated water</text>
        </g>

        <g>
          <text x="900" y="115" fill="#f9a8d4" fontSize="26" fontWeight="900" textAnchor="middle">
            ELECTRICAL ROUTE
          </text>
          <rect x="710" y="150" width="380" height="360" rx="34" fill="#0f172a" stroke="#f472b6" strokeWidth="8" />
          <path d="M745 270 H1055 V475 H745 Z" fill="#4c1d95" opacity="0.75" />
          <path d="M800 340 C840 290 880 390 920 340 C960 290 1000 390 1040 340" fill="none" stroke="#fde047" strokeWidth="13">
            <animate attributeName="stroke-dasharray" values="0 350;175 175;350 0" dur="1.8s" repeatCount="indefinite" />
          </path>
          <line x1="800" y1="340" x2="800" y2="205" stroke="#67e8f9" strokeWidth="8" />
          <line x1="1040" y1="340" x2="1040" y2="205" stroke="#67e8f9" strokeWidth="8" />
          <text x="900" y="550" fill="#cbd5e1" fontSize="20" textAnchor="middle">resistive work on insulated water</text>
        </g>

        <rect x="260" y="605" width="680" height="55" rx="22" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="642" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
          equal work input → equal ΔU → same final equilibrium state
        </text>
      </svg>
    </div>
  );
}

type SpecialCase = {
  title: string;
  conditions: string;
  result: string;
  caution: string;
  tone: Tone;
};

const specialCases: SpecialCase[] = [
  {
    title: "Pure heat transfer",
    conditions: "w = 0",
    result: "ΔU = q",
    caution: "Requires no work of any kind, not merely zero PV work.",
    tone: "amber",
  },
  {
    title: "Adiabatic closed process",
    conditions: "q = 0",
    result: "ΔU = w",
    caution: "Internal energy changes entirely through work transfer.",
    tone: "cyan",
  },
  {
    title: "Rigid closed vessel",
    conditions: "dV = 0",
    result: "wPV = 0",
    caution: "Electrical or other non-PV work may still occur.",
    tone: "violet",
  },
  {
    title: "Rigid vessel, only PV work allowed",
    conditions: "w = 0",
    result: "ΔU = qV",
    caution: "This is the standard constant-volume relation.",
    tone: "emerald",
  },
  {
    title: "Isolated system",
    conditions: "q = 0, w = 0",
    result: "ΔU = 0",
    caution: "Energy may redistribute internally while total system energy remains fixed.",
    tone: "rose",
  },
  {
    title: "Cyclic process",
    conditions: "final state = initial state",
    result: "ΔUcycle = 0, qcycle = −wcycle",
    caution: "q and w need not individually vanish.",
    tone: "sky",
  },
  {
    title: "Isothermal ideal gas",
    conditions: "ΔT = 0 and U = U(T)",
    result: "ΔU = 0, therefore q = −w",
    caution: "Not a universal statement for real gases.",
    tone: "cyan",
  },
  {
    title: "Free expansion of ideal gas in isolation",
    conditions: "Pext = 0, q = 0",
    result: "w = 0, ΔU = 0, ΔT = 0",
    caution: "The process is irreversible despite no temperature change.",
    tone: "amber",
  },
];

function SpecialCasesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {specialCases.map((item) => (
        <article key={item.title} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-lg font-black text-white">{item.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-slate-100">
            {item.conditions}
          </div>
          <p className="mt-3 font-mono text-base font-black text-white">{item.result}</p>
          <p className="mt-3 text-xs leading-5 text-slate-300">{item.caution}</p>
        </article>
      ))}
    </div>
  );
}

function SystemSurroundingsLedger() {
  const rows = [
    ["Heat entering system", "+qsys", "−qsys", "0"],
    ["Work done on system", "+wsys", "−wsys", "0"],
    ["Heat leaving system", "−qsys", "+qsys", "0"],
    ["Work done by system", "−wsys", "+wsys", "0"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Transfer viewed from system</th>
            <th className="px-4 py-3 font-black text-white">System</th>
            <th className="px-4 py-3 font-black text-white">Surroundings</th>
            <th className="px-4 py-3 font-black text-white">Combined change from transfer</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([transfer, system, surroundings, total]) => (
            <tr key={transfer}>
              <td className="px-4 py-3 font-semibold text-slate-100">{transfer}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{system}</td>
              <td className="px-4 py-3 font-mono text-fuchsia-200">{surroundings}</td>
              <td className="px-4 py-3 font-mono font-black text-emerald-300">{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SignDecisionTree() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Heat q</p>
        <div className="mt-4 grid gap-3 text-sm">
          <div className="rounded-xl bg-black/25 p-4">
            <p className="font-black text-white">Heat enters system</p>
            <p className="mt-1 font-mono text-lg font-black text-emerald-300">q &gt; 0</p>
          </div>
          <div className="rounded-xl bg-black/25 p-4">
            <p className="font-black text-white">Heat leaves system</p>
            <p className="mt-1 font-mono text-lg font-black text-rose-300">q &lt; 0</p>
          </div>
        </div>
      </article>

      <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Work w</p>
        <div className="mt-4 grid gap-3 text-sm">
          <div className="rounded-xl bg-black/25 p-4">
            <p className="font-black text-white">Work done on system</p>
            <p className="mt-1 font-mono text-lg font-black text-emerald-300">w &gt; 0</p>
          </div>
          <div className="rounded-xl bg-black/25 p-4">
            <p className="font-black text-white">Work done by system</p>
            <p className="mt-1 font-mono text-lg font-black text-rose-300">w &lt; 0</p>
          </div>
        </div>
      </article>
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — direct First-Law balance",
    question:
      "A closed system absorbs 420 J of heat and does 160 J of work on the surroundings. Find ΔU using the chemistry convention.",
    solution:
      "q = +420 J. Work done by the system means w = −160 J. Therefore ΔU = q + w = 420 − 160 = +260 J.",
  },
  {
    title: "Concept Application 2 — adiabatic compression",
    question:
      "During adiabatic compression, 850 J of work is done on a gas. Find q and ΔU.",
    solution:
      "Adiabatic means q = 0. Work done on the gas gives w = +850 J. Hence ΔU = +850 J.",
  },
  {
    title: "Concept Application 3 — rigid vessel",
    question:
      "A rigid closed vessel receives 1.40 kJ of heat. No electrical, shaft or other non-PV work occurs. Find ΔU.",
    solution:
      "Rigid volume gives wPV = 0, and all other work modes are absent, so w = 0. Therefore ΔU = q = +1.40 kJ.",
  },
  {
    title: "Concept Application 4 — cyclic device",
    question:
      "Over one complete cycle, a device does 2.5 kJ of net work on the surroundings. Determine ΔUcycle and qcycle.",
    solution:
      "For a cycle, ΔUcycle = 0. Work done by the device gives wcycle = −2.5 kJ. Thus qcycle = +2.5 kJ.",
  },
  {
    title: "Concept Application 5 — heat rejected and work input",
    question:
      "A system releases 300 J of heat while 500 J of work is done on it. Find ΔU.",
    solution:
      "Heat released gives q = −300 J; work done on the system gives w = +500 J. Therefore ΔU = +200 J.",
  },
  {
    title: "Concept Application 6 — two paths, same endpoints",
    question:
      "Path I between A and B has q1 = +900 J and w1 = −250 J. Path II has w2 = +150 J. Find ΔU and q2.",
    solution:
      "For path I, ΔU = 900 − 250 = +650 J. The same endpoints require the same ΔU. Thus q2 = ΔU − w2 = 650 − 150 = +500 J.",
  },
  {
    title: "Concept Application 7 — isolated internal conversion",
    question:
      "Inside an isolated box, a falling mass stirs a liquid and finally comes to rest. Which energy changes can occur?",
    solution:
      "Heat and work do not cross the external boundary, so total energy of the box is constant. Gravitational potential energy of the mass decreases and is converted into kinetic and then internal energy of the contents.",
  },
  {
    title: "Concept Application 8 — open-system caveat",
    question:
      "Can ΔU = q + w be applied without modification to a steady-flow turbine through which matter continuously passes?",
    solution:
      "Not as the complete steady-flow balance. Matter carries energy across the boundary, commonly represented through enthalpy plus kinetic and potential energy terms. The simple closed-system form omits this mass-flow energy.",
  },
  {
    title: "Concept Application 9 — isothermal ideal gas",
    question:
      "An ideal gas absorbs 720 J of heat during an isothermal expansion. Find w and ΔU.",
    solution:
      "For an ideal gas, isothermal means ΔU = 0. Hence 0 = q + w, so w = −720 J.",
  },
  {
    title: "Concept Application 10 — thermometer logic",
    question:
      "Thermometer C gives the same stable reading when separately placed in contact with bodies A and B. What can be concluded?",
    solution:
      "A and C are in thermal equilibrium, and B and C are in thermal equilibrium. By the Zeroth Law, A and B have the same temperature and would be in thermal equilibrium if placed in suitable thermal contact.",
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
    "The First Law predicts whether a process is spontaneous.",
    "Incorrect",
    "It enforces energy conservation but does not determine direction or spontaneity.",
  ],
  [
    "ΔU = q + w is the complete formula for every open system.",
    "Incorrect",
    "Mass flow carries energy and requires additional terms in an open-system balance.",
  ],
  [
    "If ΔU = 0, then q = 0 and w = 0 separately.",
    "Incorrect",
    "Only their sum must vanish; q and w can be non-zero and opposite.",
  ],
  [
    "An isolated system cannot undergo any internal change.",
    "Incorrect",
    "Internal conversions can occur while total energy remains constant.",
  ],
  [
    "The Zeroth Law says heat always flows from hot to cold.",
    "Incorrect",
    "The Zeroth Law establishes transitivity of thermal equilibrium and the basis of temperature measurement.",
  ],
  [
    "At constant volume, total work is always zero.",
    "Incorrect",
    "Only PV work is zero. Electrical, shaft or other work may remain.",
  ],
  [
    "Heat absorbed always increases internal energy by the same amount.",
    "Incorrect",
    "Part of the absorbed energy may leave as work; ΔU = q + w.",
  ],
  [
    "Energy is conserved separately for the system.",
    "Incorrect",
    "A non-isolated system may gain or lose energy. Conservation applies to system plus surroundings.",
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
      title: "Clinical thermometer",
      text: "A thermometer acts as the third system. A stable reading means thermal equilibrium has been reached.",
      tone: "cyan" as Tone,
    },
    {
      title: "Bicycle pump",
      text: "Rapid compression transfers work into the gas. With little time for heat loss, internal energy and temperature rise.",
      tone: "amber" as Tone,
    },
    {
      title: "Electric kettle",
      text: "Electrical work is converted into internal energy of the heating element and water, followed by heat transfer within the device.",
      tone: "violet" as Tone,
    },
    {
      title: "Hydroelectric station",
      text: "Gravitational potential energy becomes kinetic, mechanical and electrical energy; losses appear as internal energy, while total energy is conserved.",
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

export default function ThermodynamicsPart08() {
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
            <Chip tone="emerald">LAWS & ENERGY BALANCE</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Conservation Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Temperature makes comparison possible; energy conservation closes the balance
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The Zeroth Law gives operational meaning to temperature. The First Law states that heat and work can alter
                internal energy, but cannot create or destroy the total energy of system plus surroundings.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Locked chemistry convention
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-amber-400/10 p-4">
                  <p className="font-black text-amber-200">Heat enters system</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">q &gt; 0</p>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-4">
                  <p className="font-black text-cyan-200">Work done on system</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">w &gt; 0</p>
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4">
                  <p className="font-black text-emerald-200">Energy balance</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">ΔU = q + w</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Zeroth Law of Thermodynamics"
          subtitle="The logical foundation of temperature comparison and thermometry."
        >
          <Formula label="Formal statement">
            If A is in thermal equilibrium with C and B is in thermal equilibrium with C, then A and B are in thermal equilibrium.
          </Formula>

          <ZerothLawAnimation />

          <ConceptLens title="Temperature is the common property" tone="cyan">
            The law guarantees that a scalar property—temperature—has the same value for systems in mutual thermal equilibrium.
            This makes thermometers possible.
          </ConceptLens>

          <ConceptLens title="Why it is called the Zeroth Law" tone="violet">
            It was articulated after the First and Second Laws, but logically precedes them. The name “zeroth” places it before the First Law in conceptual order.
          </ConceptLens>

          <ConceptLens title="Thermal equilibrium is dynamic at the microscopic scale" tone="amber">
            Equal temperatures mean no net heat transfer. Microscopic energy exchanges may still occur in both directions with equal average rates.
          </ConceptLens>
        </Section>

        <Section index="02" title="Thermometer as the third system">
          <p>
            A thermometer does not directly reveal an abstract temperature. It uses a calibrated thermometric property—such as
            liquid-column length, electrical resistance or thermoelectric voltage—that settles to a reproducible value after thermal equilibrium.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Liquid thermometer</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Thermometric property: liquid volume or column length.</p>
            </article>
            <article className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">Resistance thermometer</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Thermometric property: electrical resistance.</p>
            </article>
            <article className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Gas thermometer</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Thermometric property: gas pressure or volume under controlled conditions.</p>
            </article>
          </div>

          <ConceptLens title="A reading must be allowed to settle" tone="rose">
            Before equilibrium, the thermometer perturbs the object and its own thermometric property is still changing. A premature reading is not the object’s equilibrium temperature.
          </ConceptLens>
        </Section>

        <Section
          index="03"
          title="First Law of Thermodynamics"
          subtitle="A conservation principle connecting internal energy, heat and work."
        >
          <p>
            In any physical or chemical process, energy may move between the system and surroundings or transform from one form to another.
            The total energy of the combined system and surroundings remains constant.
          </p>

          <Formula label="Universe-level conservation">
            ΔE<sub>system</sub> + ΔE<sub>surroundings</sub> = 0
          </Formula>

          <Formula label="Equivalent statement for an isolated universe">
            ΔE<sub>universe</sub> = 0
          </Formula>

          <EnergyConservationAnimation />

          <ConceptLens title="The First Law is more precise than “energy of the system is constant”" tone="rose">
            A non-isolated system can gain or lose energy. What remains constant is the total energy of system plus surroundings.
          </ConceptLens>
        </Section>

        <Section
          index="04"
          title="Deriving ΔU = q + w"
          subtitle="Closed system, negligible bulk kinetic and potential-energy changes, chemistry sign convention."
        >
          <p>
            Let the system begin with internal energy U<sub>1</sub>. Suppose it absorbs heat q and receives work w from its surroundings.
            The final internal energy is:
          </p>

          <Formula label="Energy ledger">
            U<sub>2</sub> = U<sub>1</sub> + q + w
          </Formula>

          <Formula label="Finite First-Law form">
            ΔU = U<sub>2</sub> − U<sub>1</sub> = q + w
          </Formula>

          <Formula label="Differential form">
            dU = δq + δw
          </Formula>

          <ConceptLens title="Exact plus inexact differentials" tone="violet">
            dU is exact because U is a state function. δq and δw are inexact because their individual values depend on the path.
            Their sum is constrained to produce the endpoint quantity dU.
          </ConceptLens>

          <ConceptLens title="Scope of this compact equation" tone="amber">
            The form ΔU = q + w applies directly to a closed system when changes in macroscopic kinetic and external potential energy are negligible.
            Open systems require energy carried by matter; moving systems may require additional kinetic and potential-energy terms.
          </ConceptLens>
        </Section>

        <Section index="05" title="Only pressure–volume work">
          <Formula label="Pressure–volume work">
            δw = −P<sub>ext</sub>dV
          </Formula>

          <Formula label="First Law with PV work only">
            dU = δq − P<sub>ext</sub>dV
          </Formula>

          <Formula label="Rearranged heat expression">
            δq = dU + P<sub>ext</sub>dV
          </Formula>

          <ConceptLens title="Reversible limit" tone="cyan">
            For a reversible process, P<sub>ext</sub> approaches the system pressure P at every stage, giving dU = δq<sub>rev</sub> − P dV.
          </ConceptLens>
        </Section>

        <Section index="06" title="Heat and work are equivalent routes to ΔU">
          <p>
            An insulated water sample can be warmed by mechanical paddle work or electrical resistance work. Equal energy input can produce
            the same final temperature and the same internal-energy change, even though the transfer mechanism differs.
          </p>

          <EquivalentRoutesAnimation />

          <ConceptLens title="Equivalent in energy accounting, not identical microscopically" tone="amber">
            Heat and work are both measured in joules and can produce the same ΔU, but they represent different modes of transfer.
            Work is organised; heat is driven by temperature difference.
          </ConceptLens>
        </Section>

        <Section index="07" title="Complete special-case map">
          <SpecialCasesGrid />
        </Section>

        <Section index="08" title="System–surroundings sign ledger">
          <SystemSurroundingsLedger />

          <ConceptLens title="Internal consistency check" tone="emerald">
            Every transfer appears with equal magnitude and opposite sign when the boundary is viewed from the other side.
            This is why system-plus-surroundings energy change from internal transfer is zero.
          </ConceptLens>
        </Section>

        <Section index="09" title="Sign decision tree">
          <SignDecisionTree />

          <Formula label="Fast mental check">
            ΔU positive means the system finishes with more internal energy than it started.
          </Formula>
        </Section>

        <Section index="10" title="Closed, isolated and open-system energy balances">
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <Chip tone="cyan">CLOSED SYSTEM</Chip>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                No matter crosses. Energy may cross as heat or work.
              </p>
              <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
                ΔU = q + w
              </div>
            </article>

            <article className="rounded-3xl border border-violet-300/20 bg-violet-300/[0.05] p-5">
              <Chip tone="violet">ISOLATED SYSTEM</Chip>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                Neither matter nor energy crosses the external boundary.
              </p>
              <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
                q = 0, w = 0, ΔE = 0
              </div>
            </article>

            <article className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
              <Chip tone="amber">OPEN SYSTEM</Chip>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                Matter carries internal, flow, kinetic and potential energy through the boundary.
              </p>
              <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono font-black text-white">
                include mass-flow energy
              </div>
            </article>
          </div>

          <ConceptLens title="Why there is no single one-line formula for every situation" tone="rose">
            The conservation law is universal, but the mathematical balance depends on the selected system, permitted transfers,
            reference frame, steady or unsteady operation, and whether matter crosses the boundary.
          </ConceptLens>
        </Section>

        <Section index="11" title="What the First Law cannot tell us">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">It can determine</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                <li>• energy conservation;</li>
                <li>• relation among ΔU, q and w;</li>
                <li>• missing energy-transfer terms;</li>
                <li>• impossibility of a first-kind perpetual-motion machine.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">It cannot determine alone</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
                <li>• direction of spontaneous change;</li>
                <li>• maximum conversion of heat into work;</li>
                <li>• irreversibility;</li>
                <li>• equilibrium criterion.</li>
              </ul>
            </article>
          </div>

          <ConceptLens title="The Second Law is still needed" tone="violet">
            Energy conservation permits many hypothetical processes that nature does not perform spontaneously.
            Direction and irreversibility require entropy and the Second Law.
          </ConceptLens>
        </Section>

        <Section index="12" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="13" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={8} />

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
                Thermal equilibrium defines temperature; energy conservation defines the First-Law balance
              </h2>
            </div>
            <Chip tone="emerald">PART 08 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Zeroth Law", "thermal equilibrium is transitive"],
              ["First Law", "ΔU = q + w for the stated closed-system scope"],
              ["Isolated", "q = w = 0"],
              ["Cycle", "ΔU = 0 but q and w may be non-zero"],
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
