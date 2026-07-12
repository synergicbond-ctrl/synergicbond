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

function EnergyLedgerAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 680"
        role="img"
        aria-labelledby="ledger-title ledger-description"
        className="h-auto w-full"
      >
        <title id="ledger-title">Animated separation of total energy and internal energy</title>
        <desc id="ledger-description">
          Total energy is divided into internal energy, macroscopic kinetic energy, and external potential energy.
          For a stationary system without an external field, total energy reduces to internal energy.
        </desc>

        <defs>
          <marker id="ledgerArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#67e8f9" />
          </marker>
          <linearGradient id="ledgerCore" x1="0" x2="1">
            <stop offset="0%" stopColor="#164e63" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
        </defs>

        <rect width="1200" height="680" rx="34" fill="#020617" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          THE ENERGY LEDGER OF A THERMODYNAMIC SYSTEM
        </text>

        <rect x="410" y="105" width="380" height="105" rx="30" fill="url(#ledgerCore)" stroke="#f8fafc" strokeWidth="5" />
        <text x="600" y="150" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">TOTAL ENERGY E</text>
        <text x="600" y="183" fill="#cbd5e1" fontSize="21" textAnchor="middle">energy assigned to the complete selected system</text>

        <path d="M600 215 V285" stroke="#67e8f9" strokeWidth="5" markerEnd="url(#ledgerArrow)">
          <animate attributeName="stroke-dasharray" values="0 80;40 40;80 0" dur="2s" repeatCount="indefinite" />
        </path>

        <rect x="80" y="310" width="320" height="205" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="240" y="360" fill="#a7f3d0" fontSize="25" fontWeight="900" textAnchor="middle">INTERNAL ENERGY U</text>
        <text x="240" y="404" fill="#cbd5e1" fontSize="20" textAnchor="middle">molecular translation</text>
        <text x="240" y="436" fill="#cbd5e1" fontSize="20" textAnchor="middle">rotation and vibration</text>
        <text x="240" y="468" fill="#cbd5e1" fontSize="20" textAnchor="middle">intermolecular, electronic, nuclear</text>

        <rect x="440" y="310" width="320" height="205" rx="28" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="360" fill="#fde68a" fontSize="25" fontWeight="900" textAnchor="middle">MACROSCOPIC KE</text>
        <circle cx="535" cy="430" r="24" fill="#fde047">
          <animate attributeName="cx" values="500;700;500" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <path d="M500 475 H700" stroke="#fbbf24" strokeWidth="5" strokeDasharray="16 10" />
        <text x="600" y="495" fill="#cbd5e1" fontSize="20" textAnchor="middle">motion of the system as a whole</text>

        <rect x="800" y="310" width="320" height="205" rx="28" fill="#0f172a" stroke="#f472b6" strokeWidth="4" />
        <text x="960" y="360" fill="#f9a8d4" fontSize="25" fontWeight="900" textAnchor="middle">EXTERNAL PE</text>
        <circle cx="960" cy="410" r="23" fill="#f472b6">
          <animate attributeName="cy" values="390;455;390" dur="3s" repeatCount="indefinite" />
        </circle>
        <line x1="960" y1="470" x2="960" y2="395" stroke="#f472b6" strokeWidth="4" />
        <text x="960" y="495" fill="#cbd5e1" fontSize="20" textAnchor="middle">gravity or an imposed external field</text>

        <rect x="220" y="560" width="760" height="72" rx="25" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="605" fill="#ddd6fe" fontSize="25" fontWeight="900" textAnchor="middle">
          E = U + KE(macroscopic) + PE(external)
        </text>

        <text x="600" y="660" fill="#94a3b8" fontSize="20" textAnchor="middle">
          If the system is stationary and no external field contribution changes, thermodynamic energy bookkeeping focuses on U.
        </text>
      </svg>
    </div>
  );
}

function MolecularModesAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="mode-title mode-description"
        className="h-auto w-full"
      >
        <title id="mode-title">Animated molecular contributions to internal energy</title>
        <desc id="mode-description">
          Molecules translate, rotate, vibrate, interact and possess electronic energy.
          Internal energy sums all microscopic contributions inside the system.
        </desc>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          MICROSCOPIC MODES INSIDE U
        </text>

        <g>
          <rect x="55" y="115" width="330" height="235" rx="28" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
          <text x="220" y="155" fill="#a5f3fc" fontSize="24" fontWeight="900" textAnchor="middle">TRANSLATION</text>
          <circle cx="130" cy="250" r="18" fill="#67e8f9">
            <animate attributeName="cx" values="105;300;105" dur="2.7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="235;285;235" dur="2.7s" repeatCount="indefinite" />
          </circle>
          <path d="M100 305 H315" stroke="#22d3ee" strokeWidth="5" strokeDasharray="14 10" />
        </g>

        <g>
          <rect x="435" y="115" width="330" height="235" rx="28" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
          <text x="600" y="155" fill="#ddd6fe" fontSize="24" fontWeight="900" textAnchor="middle">ROTATION</text>
          <g transform="translate(600 250)">
            <animateTransform attributeName="transform" type="rotate" from="0 600 250" to="360 600 250" dur="3s" repeatCount="indefinite" />
            <line x1="-70" y1="0" x2="70" y2="0" stroke="#c4b5fd" strokeWidth="6" />
            <circle cx="-78" cy="0" r="22" fill="#f472b6" />
            <circle cx="78" cy="0" r="22" fill="#67e8f9" />
          </g>
        </g>

        <g>
          <rect x="815" y="115" width="330" height="235" rx="28" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
          <text x="980" y="155" fill="#fde68a" fontSize="24" fontWeight="900" textAnchor="middle">VIBRATION</text>
          <circle cx="905" cy="250" r="23" fill="#f97316">
            <animate attributeName="cx" values="885;925;885" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1055" cy="250" r="23" fill="#fde047">
            <animate attributeName="cx" values="1075;1035;1075" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <line x1="928" y1="250" x2="1032" y2="250" stroke="#fbbf24" strokeWidth="5">
            <animate attributeName="x1" values="908;948;908" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="x2" values="1052;1012;1052" dur="1.5s" repeatCount="indefinite" />
          </line>
        </g>

        <g>
          <rect x="150" y="405" width="410" height="220" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
          <text x="355" y="448" fill="#a7f3d0" fontSize="24" fontWeight="900" textAnchor="middle">INTERMOLECULAR POTENTIAL</text>
          <circle cx="270" cy="535" r="25" fill="#86efac">
            <animate attributeName="cx" values="245;315;245" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="440" cy="535" r="25" fill="#67e8f9">
            <animate attributeName="cx" values="465;395;465" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <path d="M305 535 Q355 485 405 535" fill="none" stroke="#34d399" strokeWidth="4" strokeDasharray="12 10" />
        </g>

        <g>
          <rect x="640" y="405" width="410" height="220" rx="28" fill="#0f172a" stroke="#f472b6" strokeWidth="4" />
          <text x="845" y="448" fill="#f9a8d4" fontSize="24" fontWeight="900" textAnchor="middle">ELECTRONIC / INTRAMOLECULAR</text>
          <circle cx="845" cy="535" r="45" fill="#fde047" opacity="0.8" />
          <ellipse cx="845" cy="535" rx="135" ry="58" fill="none" stroke="#f472b6" strokeWidth="5">
            <animateTransform attributeName="transform" type="rotate" from="0 845 535" to="360 845 535" dur="3.5s" repeatCount="indefinite" />
          </ellipse>
          <circle cx="980" cy="535" r="12" fill="#a5f3fc">
            <animateTransform attributeName="transform" type="rotate" from="0 845 535" to="360 845 535" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>

        <text x="600" y="680" fill="#94a3b8" fontSize="20" textAnchor="middle">
          Thermodynamics usually measures changes in the sum of these microscopic energies—not each contribution separately.
        </text>
      </svg>
    </div>
  );
}

function IdealRealAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 690"
        role="img"
        aria-labelledby="ideal-real-title ideal-real-description"
        className="h-auto w-full"
      >
        <title id="ideal-real-title">Animated ideal and real gas internal energy comparison</title>
        <desc id="ideal-real-description">
          Ideal gas particles have no intermolecular potential energy, so internal energy depends only on temperature.
          Real gas particles interact, making internal energy depend on temperature and density or volume.
        </desc>

        <rect width="1200" height="690" rx="34" fill="#020617" />

        <text x="300" y="58" fill="#a5f3fc" fontSize="30" fontWeight="900" textAnchor="middle">IDEAL GAS MODEL</text>
        <text x="900" y="58" fill="#f9a8d4" fontSize="30" fontWeight="900" textAnchor="middle">REAL GAS</text>

        <rect x="70" y="110" width="460" height="360" rx="30" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
        {[
          [145,180],[255,160],[400,190],[175,300],[320,280],[445,345],[245,400]
        ].map(([cx,cy], i) => (
          <circle key={`i-${i}`} cx={cx} cy={cy} r="16" fill={i%2 ? "#a3e635" : "#67e8f9"}>
            <animate attributeName={i%2 ? "cx":"cy"} values={i%2 ? `${cx-25};${cx+25};${cx-25}` : `${cy-22};${cy+22};${cy-22}`} dur={`${1.9+i*0.16}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <text x="300" y="520" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">interaction PE = 0</text>
        <text x="300" y="560" fill="#e2e8f0" fontSize="21" textAnchor="middle">U = U(T) for fixed composition</text>

        <line x1="600" y1="95" x2="600" y2="605" stroke="#334155" strokeWidth="4" />

        <rect x="670" y="110" width="460" height="360" rx="30" fill="#0f172a" stroke="#f472b6" strokeWidth="4" />
        {[
          [750,180],[850,160],[1010,195],[780,310],[915,285],[1060,350],[845,405]
        ].map(([cx,cy], i) => (
          <g key={`r-${i}`}>
            <circle cx={cx} cy={cy} r="16" fill={i%2 ? "#fbbf24" : "#f472b6"}>
              <animate attributeName={i%2 ? "cx":"cy"} values={i%2 ? `${cx-18};${cx+18};${cx-18}` : `${cy-16};${cy+16};${cy-16}`} dur={`${2.1+i*0.14}s`} repeatCount="indefinite" />
            </circle>
            {i < 6 ? <path d={`M${cx+15} ${cy} Q${cx+45} ${cy-30} ${cx+75} ${cy}`} fill="none" stroke="#c4b5fd" strokeWidth="3" strokeDasharray="8 8" opacity="0.6" /> : null}
          </g>
        ))}
        <text x="900" y="520" fill="#f9a8d4" fontSize="23" fontWeight="900" textAnchor="middle">interaction PE ≠ 0</text>
        <text x="900" y="560" fill="#e2e8f0" fontSize="21" textAnchor="middle">U = U(T,V) or U(T,P)</text>

        <rect x="240" y="610" width="720" height="52" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="644" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">
          Isothermal ⇒ ΔU = 0 only for an ideal gas, not for a general real gas.
        </text>
      </svg>
    </div>
  );
}

function ContributionGrid() {
  const modes = [
    ["Translational", "motion of molecular centres of mass", "present in gases, liquids and solids"],
    ["Rotational", "rotation of molecules about molecular axes", "important for molecules"],
    ["Vibrational", "bond stretching and bending", "temperature-dependent quantum excitation"],
    ["Intermolecular potential", "attraction and repulsion among particles", "absent in the ideal-gas model"],
    ["Electronic", "electronic configurations and bonding", "changes strongly in reactions or excitation"],
    ["Nuclear", "energy associated with nuclei", "normally unchanged in chemical thermodynamics"],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {modes.map(([title, meaning, note], index) => (
        <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Mode {index + 1}</p>
          <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">{meaning}</p>
          <p className="mt-3 text-xs leading-5 text-slate-400">{note}</p>
        </article>
      ))}
    </div>
  );
}

function FactorGrid() {
  const factors = [
    {
      title: "Amount of matter",
      equation: "U ∝ n",
      text: "Internal energy is extensive. Doubling an identical system doubles U.",
      tone: "violet" as Tone,
    },
    {
      title: "Physical state",
      equation: "Usolid, Uliquid, Ugas differ",
      text: "Different structures and intermolecular separations produce different microscopic energies.",
      tone: "cyan" as Tone,
    },
    {
      title: "Temperature",
      equation: "higher T usually raises U",
      text: "Thermal excitation increases accessible translational, rotational and vibrational energy.",
      tone: "amber" as Tone,
    },
    {
      title: "Volume or pressure",
      equation: "important for real gases",
      text: "Changing separation alters intermolecular potential energy even at fixed temperature.",
      tone: "rose" as Tone,
    },
    {
      title: "Composition",
      equation: "U = U(T,V,{ni})",
      text: "Changing chemical identity or amount changes the microscopic energy inventory.",
      tone: "emerald" as Tone,
    },
    {
      title: "External fields",
      equation: "electric / magnetic coupling",
      text: "Polarisation or magnetisation can add field-dependent contributions when relevant.",
      tone: "sky" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {factors.map((factor) => (
        <article key={factor.title} className={`rounded-3xl border p-5 ${toneMap[factor.tone]}`}>
          <h3 className="text-xl font-black text-white">{factor.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {factor.equation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{factor.text}</p>
        </article>
      ))}
    </div>
  );
}

function RealGasDerivation() {
  return (
    <div className="space-y-4">
      <Formula label="General closed simple system identity">
        (∂U/∂V)<sub>T</sub> = T(∂P/∂T)<sub>V</sub> − P
      </Formula>

      <Formula label="van der Waals equation">
        P = nRT/(V−nb) − an²/V²
      </Formula>

      <Formula label="Evaluate the derivative">
        T(∂P/∂T)<sub>V</sub> − P = an²/V²
      </Formula>

      <Formula label="At constant temperature">
        dU = (an²/V²)dV
      </Formula>

      <Formula label="Integrated volume dependence">
        U(T,V) = f(T) − an²/V
      </Formula>

      <ConceptLens title="Physical meaning" tone="violet">
        Attractive intermolecular potential energy is negative. Increasing volume weakens the attraction and makes
        the potential energy less negative, so U rises during isothermal expansion of a van der Waals gas.
      </ConceptLens>
    </div>
  );
}

const dailyLife = [
  {
    title: "Ice cream cools the mouth",
    text: "Energy leaves the warmer mouth and enters the colder ice cream. The mouth’s internal energy falls while the ice cream warms and melts.",
    tone: "cyan" as Tone,
  },
  {
    title: "Bicycle pump becomes warm",
    text: "Work done on the trapped gas raises its internal energy. Rapid compression leaves little time for the energy to escape as heat.",
    tone: "amber" as Tone,
  },
  {
    title: "Water warms at a waterfall base",
    text: "Gravitational potential energy lost during descent ultimately appears partly as microscopic internal energy through turbulence and dissipation.",
    tone: "emerald" as Tone,
  },
  {
    title: "A moving gas cylinder",
    text: "Placing a sealed gas cylinder in a moving vehicle changes the cylinder’s macroscopic kinetic energy, but not its internal energy merely because of uniform translational motion.",
    tone: "violet" as Tone,
  },
];

function DailyLifeGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {dailyLife.map((item) => (
        <article key={item.title} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-200">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — frame-of-reference trap",
    question:
      "A sealed vessel containing gas is carried from rest to a train moving at constant speed. Does the gas internal energy necessarily increase?",
    solution:
      "No. The macroscopic kinetic energy of the vessel–gas system changes relative to the ground, but internal energy is measured relative to the system’s centre-of-mass frame. Uniform translation alone does not change U.",
  },
  {
    title: "Concept Application 2 — reverse path",
    question:
      "A fixed amount of a substance changes from state A to state B with ΔU = +6.4 kJ. What is ΔU for the exact reverse change?",
    solution:
      "Because U is a state function, ΔU(B→A) = UA − UB = −6.4 kJ.",
  },
  {
    title: "Concept Application 3 — ideal-gas isothermal change",
    question:
      "Two moles of an ideal gas expand isothermally from 4.0 L to 12.0 L. Find ΔU without calculating q or w.",
    solution:
      "For a fixed-composition ideal gas, U depends only on T. Since the process is isothermal, ΔT = 0 and therefore ΔU = 0.",
  },
  {
    title: "Concept Application 4 — real-gas isothermal change",
    question:
      "For a van der Waals gas, derive ΔU when n moles expand isothermally from V₁ to V₂.",
    solution:
      "Using U(T,V) = f(T) − an²/V, ΔU = an²(1/V₁ − 1/V₂). For expansion V₂ > V₁, ΔU is positive.",
  },
  {
    title: "Concept Application 5 — hard-sphere model",
    question:
      "A non-ideal gas obeys P(V−nb) = nRT but has no attractive term. Show whether U depends on V at fixed T.",
    solution:
      "Here (∂P/∂T)V = nR/(V−nb), so T(∂P/∂T)V − P = 0. Therefore (∂U/∂V)T = 0 and U = U(T), despite excluded-volume nonideality.",
  },
  {
    title: "Concept Application 6 — total versus internal energy",
    question:
      "A thermally insulated rigid box falls freely. During the fall, how do the total energy components change relative to Earth?",
    solution:
      "External gravitational potential energy decreases and macroscopic kinetic energy increases. In ideal free fall without dissipation, internal energy remains essentially unchanged. On impact, macroscopic kinetic energy can convert into internal energy.",
  },
  {
    title: "Concept Application 7 — differential form",
    question:
      "For a real gas U = U(T,V), write the most general infinitesimal change and identify the ideal-gas simplification.",
    solution:
      "dU = (∂U/∂T)V dT + (∂U/∂V)T dV. For an ideal gas, the second derivative is zero, so dU = (∂U/∂T)V dT.",
  },
  {
    title: "Concept Application 8 — extensivity",
    question:
      "Two identical non-interacting gas samples at the same T and V per sample are combined. What happens to total U and molar U?",
    solution:
      "Total U doubles because internal energy is extensive. Molar internal energy Um = U/n remains unchanged because it is intensive.",
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
    "Internal energy is the kinetic energy of the whole moving system.",
    "Incorrect",
    "Macroscopic centre-of-mass kinetic energy is excluded from U.",
  ],
  [
    "The absolute internal energy can be measured directly.",
    "Incorrect",
    "Thermodynamics normally determines differences ΔU, not a unique absolute U.",
  ],
  [
    "For every gas, isothermal means ΔU = 0.",
    "Incorrect",
    "This is guaranteed for an ideal gas of fixed composition, not for a general real gas.",
  ],
  [
    "Potential energy is zero for every ideal-gas molecule.",
    "Refine",
    "Intermolecular potential energy is taken as zero in the ideal-gas model; internal molecular and electronic energies may still exist.",
  ],
  [
    "Internal energy contains heat.",
    "Incorrect",
    "Heat is energy in transit across the boundary. After transfer, the system possesses internal energy.",
  ],
  [
    "If a system is stationary, its total energy must be zero.",
    "Incorrect",
    "Stationarity only removes macroscopic kinetic energy; internal energy remains.",
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

export default function ThermodynamicsPart06() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_86%_15%,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(163,230,53,0.10),transparent_34%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap gap-2">
            <Chip tone="cyan">SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="emerald">MOLECULAR ENERGY EDITION</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Energy Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Internal energy is the microscopic energy ledger
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A system may translate, rise, fall or accelerate as a whole. Internal energy records something different:
                the sum of microscopic kinetic and potential energies within the selected matter.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Master separation
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-emerald-400/10 p-4">
                  <p className="font-black text-emerald-200">Inside the molecular ledger</p>
                  <p className="mt-1 text-sm text-slate-300">translation, rotation, vibration, interaction and electronic energy</p>
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4">
                  <p className="font-black text-amber-200">Outside U</p>
                  <p className="mt-1 text-sm text-slate-300">motion and external potential energy of the system as a whole</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Total energy and internal energy"
          subtitle="The chosen frame of reference separates bulk motion from microscopic energy."
        >
          <p>
            The total energy assigned to a system can be separated into internal energy, macroscopic kinetic energy and
            potential energy associated with external fields such as gravity.
          </p>

          <Formula label="Energy decomposition">
            E = U + KE<sub>macroscopic</sub> + PE<sub>external</sub>
          </Formula>

          <EnergyLedgerAnimation />

          <ConceptLens title="Why a gas in an aeroplane does not gain U merely because the aeroplane moves" tone="sky">
            Relative to the ground, the entire vessel has macroscopic kinetic energy. Internal energy is evaluated in a
            frame moving with the vessel, so uniform centre-of-mass motion is not counted inside U.
          </ConceptLens>

          <ConceptLens title="Ordinary thermodynamic simplification" tone="cyan">
            For a stationary system with no changing external-field contribution, macroscopic kinetic and external
            potential-energy changes vanish. The energy change of interest is then ΔE = ΔU.
          </ConceptLens>
        </Section>

        <Section
          index="02"
          title="What internal energy contains"
          subtitle="U is the sum of microscopic kinetic and microscopic potential energies."
        >
          <Formula label="Microscopic energy inventory">
            U = U<sub>trans</sub> + U<sub>rot</sub> + U<sub>vib</sub> + U<sub>inter</sub> + U<sub>elec</sub> + U<sub>nuc</sub> + …
          </Formula>

          <MolecularModesAnimation />
          <ContributionGrid />

          <ConceptLens title="Chemical thermodynamics rarely changes nuclear energy" tone="rose">
            Nuclear contributions are part of the full microscopic inventory, but ordinary chemical and physical
            processes leave nuclei unchanged. They therefore cancel from most ΔU calculations.
          </ConceptLens>
        </Section>

        <Section index="03" title="Internal energy is an extensive state function">
          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="State-function change">
              ΔU = U<sub>final</sub> − U<sub>initial</sub>
            </Formula>
            <Formula label="Extensivity">
              U(λn,T,V scaled consistently) = λU(n,T,V)
            </Formula>
          </div>

          <p>
            Internal energy has a definite value for each equilibrium state, although thermodynamics normally cannot
            determine an absolute zero of U experimentally. What is measurable and useful is the difference ΔU.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Reverse process" tone="emerald">
              If ΔU(A→B) = +X, then ΔU(B→A) = −X.
            </ConceptLens>
            <ConceptLens title="Molar internal energy" tone="violet">
              U is extensive, but U<sub>m</sub> = U/n is intensive.
            </ConceptLens>
          </div>
        </Section>

        <Section index="04" title="Factors affecting internal energy">
          <FactorGrid />

          <ConceptLens title="State versus process" tone="cyan">
            Amount, state, temperature, volume, pressure and composition determine U through the equilibrium state.
            Heat and work determine how energy crosses the boundary during a process, but are not arguments that define
            a stored equilibrium property.
          </ConceptLens>
        </Section>

        <Section
          index="05"
          title="Ideal gas: Joule’s law"
          subtitle="For a fixed-composition ideal gas, internal energy depends only on temperature."
        >
          <p>
            In the ideal-gas model, intermolecular attraction and repulsion are neglected except for perfectly elastic
            collisions. Therefore the interaction potential-energy contribution does not vary with volume.
          </p>

          <Formula label="Joule’s law">
            U<sub>ideal gas</sub> = U(T)
          </Formula>

          <Formula label="Equivalent derivative">
            (∂U/∂V)<sub>T</sub> = 0
          </Formula>

          <Formula label="General differential for ideal gas">
            dU = (∂U/∂T)<sub>V</sub>dT
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Isothermal ideal-gas process" tone="emerald">
              ΔT = 0 ⇒ ΔU = 0, regardless of whether the path is reversible, irreversible or free expansion.
            </ConceptLens>
            <ConceptLens title="Not only monatomic gases" tone="amber">
              The relation U = U(T) applies to any ideal gas of fixed composition. The specific function of temperature
              depends on active molecular degrees of freedom.
            </ConceptLens>
          </div>

          <p className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.06] p-4 text-sm leading-6 text-slate-200">
            The familiar expression U = (3/2)nRT applies to a monatomic ideal gas in the classical temperature range.
            It must not be used blindly for diatomic or polyatomic gases.
          </p>
        </Section>

        <Section
          index="06"
          title="Real gas: temperature and volume both matter"
          subtitle="Intermolecular separation changes microscopic potential energy."
        >
          <Formula label="General dependence">
            U<sub>real gas</sub> = U(T,V) or equivalently U(T,P)
          </Formula>

          <Formula label="Total differential">
            dU = (∂U/∂T)<sub>V</sub>dT + (∂U/∂V)<sub>T</sub>dV
          </Formula>

          <IdealRealAnimation />

          <ConceptLens title="Isothermal does not guarantee ΔU = 0 for a real gas" tone="rose">
            When temperature is fixed but volume changes, intermolecular potential energy can change. Thus the second
            term in dU may remain non-zero.
          </ConceptLens>
        </Section>

        <Section
          index="07"
          title="Advanced concept identity for volume dependence"
          subtitle="A measurable pressure derivative reveals how U changes with volume."
        >
          <RealGasDerivation />

          <ConceptLens title="Hard-sphere insight" tone="sky">
            A gas obeying P(V−nb) = nRT has excluded-volume nonideality but no attractive-energy term. For this model,
            T(∂P/∂T)<sub>V</sub> − P = 0, so U still depends only on T.
          </ConceptLens>
        </Section>

        <Section index="08" title="Internal energy versus temperature">
          <p>
            At constant volume, the temperature slope of internal energy defines the constant-volume heat-capacity
            property:
          </p>

          <Formula label="Slope of U against T">
            (∂U/∂T)<sub>V</sub> = C<sub>V</sub>
          </Formula>

          <p>
            Therefore, for a fixed-composition ideal gas:
          </p>

          <Formula label="Finite temperature change">
            ΔU = ∫<sub>T₁</sub><sup>T₂</sup> C<sub>V</sub>(T)dT
          </Formula>

          <ConceptLens title="Boundary with Thermochemistry notes" tone="amber">
            This relation is retained because it is essential for internal-energy calculations. Detailed heat-capacity
            theory, molecular activation and calorimetry remain in the separate Thermochemistry note set.
          </ConceptLens>
        </Section>

        <Section index="09" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="10" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={6} />

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
                Ideal-gas U remembers temperature; real-gas U can remember separation
              </h2>
            </div>
            <Chip tone="emerald">PART 06 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["U", "microscopic kinetic + potential energies"],
              ["State function", "ΔU = Uf − Ui"],
              ["Ideal gas", "U = U(T)"],
              ["Real gas", "U = U(T,V) in general"],
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
