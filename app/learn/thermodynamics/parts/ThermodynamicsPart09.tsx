import React from "react";

import ThermodynamicsIntegratedEnrichment from "./ThermodynamicsIntegratedEnrichment";
import ThermodynamicsCompleteDerivations from "./ThermodynamicsCompleteDerivations";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose";

const toneMap: Record<Tone, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber: "border-amber-400/25 bg-amber-400/[0.07] text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose: "border-rose-400/25 bg-rose-400/[0.07] text-rose-200",
};

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 md:p-8">
      <div className="flex items-center gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
          {index}
        </span>
        <h2 className="text-2xl font-black text-white md:text-3xl">{title}</h2>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200">{children}</div>
    </section>
  );
}

function Formula({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/30 p-4 text-center">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{label}</p>
      <div className="whitespace-nowrap font-mono text-lg font-black text-white md:text-xl">{children}</div>
    </div>
  );
}

function Lens({
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

function IsothermalPathsGraphic() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4">
      <svg viewBox="0 0 1200 760" role="img" aria-label="Isothermal expansion routes" className="h-auto w-full">
        <title>Thermodynamics Part 09 scientific diagram 1</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ISOTHERMAL EXPANSION: SAME END STATES, DIFFERENT WORK
        </text>
        <line x1="120" y1="620" x2="1090" y2="620" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="120" y1="620" x2="120" y2="110" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1110" y="635" fill="#e2e8f0" fontSize="22">V</text>
        <text x="92" y="100" fill="#e2e8f0" fontSize="22">P</text>

        <path d="M220 170 C420 260 680 400 980 520" fill="none" stroke="#34d399" strokeWidth="5" />
        <path d="M220 170 V520 H980" fill="none" stroke="#fbbf24" strokeWidth="5" />
        <path d="M220 170 C470 600 760 600 980 520" fill="none" stroke="#fb7185" strokeWidth="5" strokeDasharray="18 12" />

        <circle cx="220" cy="170" r="15" fill="#f8fafc" />
        <circle cx="980" cy="520" r="15" fill="#f8fafc" />
        <text x="185" y="155" fill="#f8fafc" fontSize="21" fontWeight="900">1</text>
        <text x="1000" y="545" fill="#f8fafc" fontSize="21" fontWeight="900">2</text>

        <text x="655" y="315" fill="#a7f3d0" fontSize="20" fontWeight="900">reversible isotherm</text>
        <text x="550" y="558" fill="#fde68a" fontSize="20" fontWeight="900">one-step path</text>
        <text x="610" y="690" fill="#fda4af" fontSize="20" fontWeight="900">free expansion: Pext = 0</text>
      </svg>
    </div>
  );
}

const problems = [
  ["Reversible work", "Derive the reversible isothermal work of an ideal gas.", "wrev = −∫P dV = −nRT∫dV/V = −nRT ln(V₂/V₁)."],
  ["Pressure form", "Express reversible isothermal work using pressures.", "Because P1V1=P2V2, wrev=−nRT ln(P₁/P₂)."],
  ["Free expansion", "Find q, w, ΔU and ΔT for ideal-gas free expansion in an insulated container.", "Pext=0 gives w=0; q=0; hence ΔU=0 and, for an ideal gas, ΔT=0."],
  ["Work ranking", "Rank work magnitude for reversible, multistep, one-step and free expansion.", "|wrev| > |wmultistep| > |wone-step| > |wfree|=0."],
  ["Compression ranking", "Which path requires the least work input for isothermal compression?", "The reversible path requires the minimum work input magnitude."],
  ["Retained numerical", "For 4 mol ideal gas at 300 K expanding from 10 atm to 5 atm, find reversible work.", "wrev=−4R(300)ln2≈−6.92 kJ."],
];

function ThermodynamicsPart09() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="border-b border-white/10 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(168,85,247,.16),transparent_28%)]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">SYNERGIC BOND</span>
            <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-xs font-black text-violet-200">COMPLETE THEORY</span>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">PART 09</span>
          </div>
          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Isothermal Ideal-Gas Processes
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Constant temperature fixes ideal-gas internal energy, but heat and work remain strongly path dependent.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-10 md:px-8">
        <Section index="01" title="Ideal-gas energy at constant temperature">
          <Formula label="Joule law">U = U(T)</Formula>
          <Formula label="Isothermal ideal gas">ΔU = 0</Formula>
          <Formula label="First Law">q = −w</Formula>
          <Lens title="Critical distinction" tone="amber">
            Isothermal does not mean no heat transfer. Heat may enter or leave while the temperature remains constant.
          </Lens>
        </Section>

        <Section index="02" title="Reversible isothermal expansion">
          <Formula label="Mechanical equilibrium">Pext = P − dP</Formula>
          <Formula label="Work integral">wrev = −∫V₁V₂ P dV</Formula>
          <Formula label="Ideal-gas substitution">wrev = −nRT ln(V₂/V₁)</Formula>
          <Formula label="Pressure form">wrev = −nRT ln(P₁/P₂)</Formula>
          <IsothermalPathsGraphic />
        </Section>

        <Section index="03" title="Irreversible one-step expansion">
          <Formula label="Constant external pressure">wirr = −Pext(V₂−V₁)</Formula>
          <Lens title="Final mechanical equilibrium" tone="cyan">
            In a one-step expansion ending at equilibrium, the chosen constant external pressure commonly equals the final gas pressure.
          </Lens>
        </Section>

        <Section index="04" title="Free expansion">
          <Formula label="Vacuum">Pext = 0</Formula>
          <Formula label="Work">w = 0</Formula>
          <Formula label="Insulated ideal gas">q = 0, ΔU = 0, ΔT = 0</Formula>
          <Lens title="Irreversible despite zero work" tone="rose">
            The gas expands spontaneously into available volume and cannot retrace the path through an infinitesimal pressure difference.
          </Lens>
        </Section>

        <Section index="05" title="Multistep approach to reversibility">
          <p>
            Replacing one large pressure drop by many smaller pressure drops increases the magnitude of expansion work.
            In the limiting case of infinitely many infinitesimal steps, the path becomes reversible.
          </p>
          <Formula label="Expansion ranking">|wrev| &gt; |wmultistep| &gt; |wone-step| &gt; 0</Formula>
          <Formula label="Compression ranking">reversible compression requires minimum work input</Formula>
        </Section>

        <Section index="06" title="Retained chapter numerical">
          <p>Four moles of an ideal gas at 27 °C expand isothermally from 10 atm to 5 atm.</p>
          <Formula label="Reversible path">wrev = −4R(300)ln2 ≈ −6.92 kJ</Formula>
          <Formula label="One-step against 5 atm">wirr = −Pext(V₂−V₁) ≈ −4.99 kJ</Formula>
          <Formula label="Heat">qrev = +6.92 kJ, qirr = +4.99 kJ</Formula>
        </Section>


        <ThermodynamicsCompleteDerivations part={9} />

<Section index="07" title="Complete worked examples and applications">
          <div className="grid gap-4 lg:grid-cols-2">
            {problems.map(([title, question, answer]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="cursor-pointer font-black text-white">{title}</h3>
                <p className="mt-3 text-slate-200">{question}</p>
                <p className="mt-4 rounded-xl bg-emerald-400/10 p-3 text-sm text-emerald-100">{answer}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.06] p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Part 09 complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">Next: reversible and irreversible adiabatic processes</h2>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={9} />


</main>
  );
}

/* PART09_BUNDLED_FINAL_ENRICHMENT */

const part09BundledWorkedExamples = [
  {
    title: "Four-mole path comparison",
    given:
      "Four moles of an ideal gas at 300 K initially occupy 10.00 L. "
      + "The final pressure is 5.00 atm. Compare reversible expansion, "
      + "a two-step path using 8.00 atm then 5.00 atm, one-step expansion "
      + "against 5.00 atm, and free expansion.",
    solution: [
      "nRT = 4 × 0.082057 × 300 = 98.4684 L atm.",
      "V₂ = nRT/P₂ = 98.4684/5.00 = 19.6937 L.",
      "Reversible: w = −nRT ln(V₂/V₁) = −66.75 L atm = −6.76 kJ.",
      "At 8.00 atm, the intermediate volume is 12.3086 L.",
      "Two-step: w = −8.00(12.3086−10.00) "
        + "−5.00(19.6937−12.3086) = −5.61 kJ.",
      "One-step: w = −5.00(19.6937−10.00) = −4.91 kJ.",
      "Free expansion: Pext = 0, therefore w = 0.",
      "For every isothermal ideal-gas path, ΔU = 0 and q = −w.",
    ],
  },
  {
    title: "Reversible compression",
    given:
      "One mole of an ideal gas is compressed reversibly at 300 K "
      + "from 20.0 L to 5.00 L.",
    solution: [
      "w = −nRT ln(V₂/V₁).",
      "w = −(1)(8.314)(300) ln(5.00/20.0).",
      "w = +3.46 kJ because compression work is done on the gas.",
      "ΔU = 0 for an isothermal ideal gas.",
      "q = −3.46 kJ.",
    ],
  },
  {
    title: "Constant external-pressure expansion",
    given:
      "Two moles of an ideal gas expand isothermally from 8.00 L "
      + "to 20.0 L against 1.50 bar.",
    solution: [
      "w = −PextΔV.",
      "ΔV = 12.0 L.",
      "w = −18.0 L bar = −1.80 kJ.",
      "ΔU = 0 and q = +1.80 kJ.",
    ],
  },
  {
    title: "Insulated free expansion",
    given:
      "An ideal gas expands into a vacuum inside an insulated rigid "
      + "two-chamber vessel.",
    solution: [
      "Pext = 0, so w = 0.",
      "The vessel is insulated, so q = 0.",
      "ΔU = q + w = 0.",
      "For an ideal gas U depends only on T, so ΔT = 0.",
      "The process is nevertheless irreversible.",
    ],
  },
];

const part09BundledQuestions = [
  {
    question:
      "Why is reversible expansion work greatest in magnitude?",
    answer:
      "The external pressure remains infinitesimally below the gas pressure, "
      + "so each volume increment occurs against the largest pressure "
      + "compatible with expansion.",
  },
  {
    question:
      "Does isothermal mean adiabatic?",
    answer:
      "No. Isothermal fixes temperature; adiabatic fixes q = 0. "
      + "A reversible isothermal ideal-gas expansion requires heat input.",
  },
  {
    question:
      "Why is free expansion irreversible although w = 0?",
    answer:
      "It occurs through a finite pressure imbalance into a vacuum. "
      + "The system and surroundings cannot both be restored without intervention.",
  },
  {
    question:
      "What happens as the number of finite pressure steps increases?",
    answer:
      "The staircase approaches the reversible isotherm and the magnitude "
      + "of expansion work increases toward the reversible limit.",
  },
  {
    question:
      "Which pressure is used for irreversible boundary work?",
    answer:
      "The external pressure exerted by the surroundings.",
  },
  {
    question:
      "Can a real gas change temperature during insulated free expansion?",
    answer:
      "Yes. Intermolecular potential energy can change even when total "
      + "internal energy remains constant.",
  },
];

function Part09BundledPVGraph() {
  return (
    <figure className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#07111f] p-4">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="p09-bundle-pv-title p09-bundle-pv-desc"
        className="h-auto w-full"
      >
        <title id="p09-bundle-pv-title">
          Isothermal work paths on a pressure-volume graph
        </title>
        <desc id="p09-bundle-pv-desc">
          Reversible, multistep, one-step and free-expansion paths between
          common ideal-gas volume limits.
        </desc>

        <defs>
          <linearGradient id="p09BundlePvBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#020617" />
          </linearGradient>
        </defs>

        <rect width="1200" height="720" rx="34" fill="url(#p09BundlePvBg)" />

        <text
          x="600"
          y="52"
          fill="#f8fafc"
          fontSize="29"
          fontWeight="900"
          textAnchor="middle"
        >
          ISOTHERMAL IDEAL-GAS WORK PATHS
        </text>

        <line x1="130" y1="610" x2="1080" y2="610" stroke="#e2e8f0" strokeWidth="4" />
        <line x1="130" y1="610" x2="130" y2="110" stroke="#e2e8f0" strokeWidth="4" />

        <text x="1100" y="620" fill="#f8fafc" fontSize="20">V</text>
        <text x="108" y="95" fill="#f8fafc" fontSize="20">P</text>

        <path
          d="M205 175 C330 280 460 360 610 425 C760 490 900 525 1020 545"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="5"
        />

        <path
          d="M205 175 H350 V285 H520 V380 H700 V455 H860 V510 H1020 V545"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="4"
        />

        <line
          x1="205"
          y1="500"
          x2="1020"
          y2="500"
          stroke="#fbbf24"
          strokeWidth="7"
        />

        <line
          x1="205"
          y1="610"
          x2="1020"
          y2="610"
          stroke="#fb7185"
          strokeWidth="8"
          strokeDasharray="18 13"
        />

        <text x="475" y="260" fill="#67e8f9" fontSize="19" fontWeight="900">
          reversible: P = nRT/V
        </text>
        <text x="650" y="350" fill="#c4b5fd" fontSize="18" fontWeight="900">
          finite multistep staircase
        </text>
        <text x="650" y="476" fill="#fde68a" fontSize="18" fontWeight="900">
          one-step constant Pext
        </text>
        <text x="600" y="654" fill="#fda4af" fontSize="18" fontWeight="900" textAnchor="middle">
          free expansion: Pext = 0 and w = 0
        </text>

        <rect
          x="250"
          y="95"
          width="700"
          height="48"
          rx="18"
          fill="#0f172a"
          stroke="#334155"
          strokeWidth="2"
        />
        <text
          x="600"
          y="126"
          fill="#e2e8f0"
          fontSize="17"
          fontWeight="900"
          textAnchor="middle"
        >
          |wrev| &gt; |wmultistep| &gt; |wone-step| &gt; |wfree|
        </text>
      </svg>

      <figcaption className="px-3 pt-3 text-center text-sm leading-6 text-slate-300">
        Expansion work is the negative area below the external-pressure path.
      </figcaption>
    </figure>
  );
}

function Part09BundledProcessGraphic() {
  return (
    <figure className="overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[#07111f] p-4">
      <svg
        viewBox="0 0 1200 700"
        role="img"
        aria-labelledby="p09-bundle-process-title p09-bundle-process-desc"
        className="h-auto w-full"
      >
        <title id="p09-bundle-process-title">
          Reversible, irreversible and free expansion comparison
        </title>
        <desc id="p09-bundle-process-desc">
          Three panels distinguish infinitesimal loading, fixed external
          pressure and expansion into a vacuum.
        </desc>

        <rect width="1200" height="700" rx="34" fill="#020617" />

        <text
          x="600"
          y="50"
          fill="#f8fafc"
          fontSize="28"
          fontWeight="900"
          textAnchor="middle"
        >
          SAME END STATES — DIFFERENT PATHS
        </text>

        {[
          {
            x: 40,
            stroke: "#22d3ee",
            fill: "#083344",
            title: "REVERSIBLE",
            line1: "Pgas − Pext → 0",
            line2: "maximum expansion-work magnitude",
            equation: "w = −nRT ln(V₂/V₁)",
          },
          {
            x: 425,
            stroke: "#a78bfa",
            fill: "#3b0764",
            title: "ONE-STEP",
            line1: "finite constant Pext",
            line2: "smaller expansion-work magnitude",
            equation: "w = −Pext(V₂−V₁)",
          },
          {
            x: 810,
            stroke: "#fbbf24",
            fill: "#451a03",
            title: "FREE EXPANSION",
            line1: "vacuum: Pext = 0",
            line2: "irreversible although w = 0",
            equation: "q = w = ΔU = 0 if insulated ideal gas",
          },
        ].map((panel) => (
          <g key={panel.title}>
            <rect
              x={panel.x}
              y="105"
              width="350"
              height="520"
              rx="28"
              fill={panel.fill}
              stroke={panel.stroke}
              strokeWidth="3"
            />
            <text
              x={panel.x + 175}
              y="155"
              fill="#f8fafc"
              fontSize="22"
              fontWeight="900"
              textAnchor="middle"
            >
              {panel.title}
            </text>
            <rect
              x={panel.x + 70}
              y="215"
              width="210"
              height="190"
              rx="15"
              fill="#0f172a"
              stroke="#e2e8f0"
              strokeWidth="4"
            />
            <line
              x1={panel.x + 75}
              y1="285"
              x2={panel.x + 275}
              y2="285"
              stroke={panel.stroke}
              strokeWidth="10"
            />
            <text
              x={panel.x + 175}
              y="455"
              fill={panel.stroke}
              fontSize="17"
              fontWeight="900"
              textAnchor="middle"
            >
              {panel.line1}
            </text>
            <text
              x={panel.x + 175}
              y="495"
              fill="#cbd5e1"
              fontSize="15"
              textAnchor="middle"
            >
              {panel.line2}
            </text>
            <text
              x={panel.x + 175}
              y="555"
              fill="#f8fafc"
              fontSize="15"
              fontWeight="800"
              textAnchor="middle"
            >
              {panel.equation}
            </text>
          </g>
        ))}

        <text
          x="600"
          y="665"
          fill="#cbd5e1"
          fontSize="17"
          fontWeight="800"
          textAnchor="middle"
        >
          For an isothermal ideal gas: ΔU = 0 and q = −w for every path
        </text>
      </svg>

      <figcaption className="px-3 pt-3 text-center text-sm leading-6 text-slate-300">
        Path functions differ even when the initial and final equilibrium states are identical.
      </figcaption>
    </figure>
  );
}

function Part09BundledEnrichment() {
  return (
    <section className="bg-[#020617] pb-16 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-7 px-4 md:px-8">
        <header className="rounded-[2rem] border border-cyan-300/20 bg-slate-950/85 p-6 md:p-9">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Complete visual consolidation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Isothermal Ideal-Gas Processes
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            For a fixed amount of ideal gas, internal energy depends only
            on temperature. Therefore ΔU = 0 for every isothermal path,
            while heat and work retain complete path dependence.
          </p>
        </header>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 md:p-8">
          <h3 className="text-2xl font-black text-white">
            Energy balance and exact work relations
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["State-function result", "ΔU = nCᵥΔT = 0"],
              ["First-Law result", "q = −w"],
              ["Reversible expansion", "w = −nRT ln(V₂/V₁)"],
              ["Constant external pressure", "w = −Pext(V₂−V₁)"],
              ["Finite multistep path", "w = −ΣPext,kΔVₖ"],
              ["Free expansion", "Pext = 0, therefore w = 0"],
            ].map(([label, equation]) => (
              <article
                key={label}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-wider text-cyan-300">
                  {label}
                </p>
                <p className="mt-3 font-mono text-lg font-black text-white">
                  {equation}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["Boundary work", "δw = −Pext dV"],
              ["Reversible limit", "Pext approaches Pgas infinitesimally"],
              ["Ideal-gas pressure", "P = nRT/V"],
              ["Integration", "wrev = −∫(nRT/V)dV"],
              ["Final relation", "wrev = −nRT ln(V₂/V₁)"],
              ["Pressure form", "wrev = nRT ln(P₂/P₁)"],
            ].map(([step, result]) => (
              <div
                key={step}
                className="grid gap-2 rounded-xl border border-white/10 bg-black/20 p-4 md:grid-cols-[190px_1fr]"
              >
                <span className="text-xs font-black uppercase tracking-wider text-violet-300">
                  {step}
                </span>
                <span className="font-mono text-sm text-slate-100">
                  {result}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Part09BundledPVGraph />
        <Part09BundledProcessGraphic />

        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 md:p-8">
          <h3 className="text-2xl font-black text-white">
            Complete worked examples
          </h3>

          <div className="mt-5 space-y-5">
            {part09BundledWorkedExamples.map((example, index) => (
              <article
                key={example.title}
                className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.05] p-5"
              >
                <p className="text-xs font-black uppercase tracking-wider text-violet-300">
                  Worked example {index + 1}
                </p>
                <h4 className="mt-2 text-xl font-black text-white">
                  {example.title}
                </h4>

                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-black uppercase text-cyan-300">
                    Given
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {example.given}
                  </p>
                </div>

                <div className="mt-4 space-y-2">
                  {example.solution.map((step, stepIndex) => (
                    <div
                      key={`${example.title}-${stepIndex}`}
                      className="grid gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-3 md:grid-cols-[34px_1fr]"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-300/10 text-xs font-black text-violet-200">
                        {stepIndex + 1}
                      </span>
                      <p className="text-sm leading-6 text-slate-200">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 md:p-8">
          <h3 className="text-2xl font-black text-white">
            Practice questions with visible answers
          </h3>

          <div className="mt-5 space-y-4">
            {part09BundledQuestions.map((item, index) => (
              <article
                key={item.question}
                className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5"
              >
                <p className="text-xs font-black uppercase tracking-wider text-emerald-300">
                  Question {index + 1}
                </p>
                <h4 className="mt-2 font-black text-white">
                  {item.question}
                </h4>
                <p className="mt-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-300">
                  <strong className="text-cyan-200">Answer: </strong>
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.05] p-5 md:p-8">
          <h3 className="text-2xl font-black text-white">
            Final work ranking
          </h3>
          <p className="mt-4 text-center font-mono text-lg font-black text-cyan-200">
            wrev &lt; wmultistep &lt; wone-step &lt; wfree = 0
          </p>
          <p className="mt-3 text-center font-mono text-lg font-black text-violet-200">
            |wrev| &gt; |wmultistep| &gt; |wone-step| &gt; |wfree|
          </p>
        </section>
      </div>
    </section>
  );
}


export default function ThermodynamicsPart09BundledFinal() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <ThermodynamicsPart09 />
      <Part09BundledEnrichment />
    </div>
  );
}
