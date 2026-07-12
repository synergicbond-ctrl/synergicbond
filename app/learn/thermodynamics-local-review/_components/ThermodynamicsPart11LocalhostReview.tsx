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

function PolytropicFamilyAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="family-title family-description"
        className="h-auto w-full"
      >
        <title id="family-title">Animated family of polytropic curves</title>
        <desc id="family-description">
          Pressure-volume curves are shown for isobaric, isothermal, intermediate polytropic,
          reversible adiabatic, and near-isochoric limits.
        </desc>

        <defs>
          <marker id="polyCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="polyPink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
          <marker id="polyGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="polyAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ONE EQUATION • A WHOLE FAMILY OF PROCESSES
        </text>

        <line x1="130" y1="650" x2="1100" y2="650" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="130" y1="650" x2="130" y2="95" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1125" y="662" fill="#e2e8f0" fontSize="25">V</text>
        <text x="103" y="87" fill="#e2e8f0" fontSize="25">P</text>

        <path id="polyX0" d="M230 255 H980" fill="none" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#polyAmber)" />
        <path id="polyX1" d="M230 150 C370 240 620 390 980 535" fill="none" stroke="#f472b6" strokeWidth="5" markerEnd="url(#polyPink)" />
        <path id="polyMid" d="M230 150 C335 270 515 455 890 595" fill="none" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#polyCyan)" />
        <path id="polyGamma" d="M230 150 C305 300 430 500 755 620" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#polyGreen)" />
        <path d="M230 150 V620" fill="none" stroke="#a78bfa" strokeWidth="5" strokeDasharray="16 12" />

        <circle r="12" fill="#fde047">
          <animateMotion dur="4.2s" repeatCount="indefinite">
            <mpath href="#polyX0" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#f9a8d4">
          <animateMotion dur="4.7s" repeatCount="indefinite">
            <mpath href="#polyX1" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#67e8f9">
          <animateMotion dur="4.9s" repeatCount="indefinite">
            <mpath href="#polyMid" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#86efac">
          <animateMotion dur="5.2s" repeatCount="indefinite">
            <mpath href="#polyGamma" />
          </animateMotion>
        </circle>

        <text x="785" y="225" fill="#fde68a" fontSize="21" fontWeight="900">x = 0: isobaric</text>
        <text x="805" y="440" fill="#f9a8d4" fontSize="21" fontWeight="900">x = 1: isothermal</text>
        <text x="630" y="505" fill="#a5f3fc" fontSize="21" fontWeight="900">1 &lt; x &lt; γ</text>
        <text x="445" y="575" fill="#a7f3d0" fontSize="21" fontWeight="900">x = γ: reversible adiabatic</text>
        <text x="155" y="400" fill="#ddd6fe" fontSize="21" fontWeight="900">x → ∞</text>

        <rect x="285" y="690" width="630" height="45" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="720" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          Increasing x makes the expansion curve progressively steeper.
        </text>
      </svg>
    </div>
  );
}

function HeatCapacityRegimeAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="capacity-title capacity-description"
        className="h-auto w-full"
      >
        <title id="capacity-title">Effective molar heat capacity versus polytropic index</title>
        <desc id="capacity-description">
          The effective molar heat capacity passes through Cp at x equals zero, diverges at x equals one,
          becomes zero at x equals gamma, and approaches Cv as x approaches infinity.
        </desc>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          EFFECTIVE MOLAR HEAT CAPACITY Cₘ(x)
        </text>

        <line x1="130" y1="585" x2="1090" y2="585" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="420" y1="650" x2="420" y2="100" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1115" y="597" fill="#e2e8f0" fontSize="24">x</text>
        <text x="392" y="90" fill="#e2e8f0" fontSize="24">Cₘ</text>

        <line x1="640" y1="100" x2="640" y2="650" stroke="#fb7185" strokeWidth="5" strokeDasharray="16 12" />
        <text x="640" y="675" fill="#fda4af" fontSize="20" textAnchor="middle">x = 1</text>

        <line x1="835" y1="100" x2="835" y2="650" stroke="#34d399" strokeWidth="4" strokeDasharray="12 10" />
        <text x="835" y="675" fill="#a7f3d0" fontSize="20" textAnchor="middle">x = γ</text>

        <line x1="150" y1="350" x2="1090" y2="350" stroke="#22d3ee" strokeWidth="3" strokeDasharray="10 10" opacity="0.6" />
        <text x="1080" y="337" fill="#a5f3fc" fontSize="21" textAnchor="end">Cᵥ</text>

        <line x1="150" y1="250" x2="1090" y2="250" stroke="#fbbf24" strokeWidth="3" strokeDasharray="10 10" opacity="0.6" />
        <text x="1080" y="237" fill="#fde68a" fontSize="21" textAnchor="end">Cₚ</text>

        <path
          d="M160 315 C310 300 470 260 600 115"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="5"
        />
        <path
          d="M680 645 C710 520 765 390 835 585"
          fill="none"
          stroke="#f472b6"
          strokeWidth="5"
        />
        <path
          d="M835 585 C900 455 985 385 1080 365"
          fill="none"
          stroke="#34d399"
          strokeWidth="5"
        />

        <circle cx="420" cy="250" r="13" fill="#fde047">
          <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="420" y="220" fill="#fde68a" fontSize="21" textAnchor="middle">x = 0 → Cₘ = Cₚ</text>

        <circle cx="835" cy="585" r="13" fill="#86efac">
          <animate attributeName="r" values="10;18;10" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="835" y="545" fill="#a7f3d0" fontSize="21" textAnchor="middle">Cₘ = 0</text>

        <text x="695" y="160" fill="#fda4af" fontSize="20" fontWeight="900">x → 1⁻: +∞</text>
        <text x="695" y="625" fill="#fda4af" fontSize="20" fontWeight="900">x → 1⁺: −∞</text>
        <text x="980" y="405" fill="#a5f3fc" fontSize="21" fontWeight="900">x → ∞: Cₘ → Cᵥ</text>

        <rect x="210" y="625" width="360" height="48" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="390" y="657" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          Cₘ = Cᵥ + R/(1−x)
        </text>
      </svg>
    </div>
  );
}

function DerivationSpine() {
  const steps = [
    {
      title: "1. Define the path",
      equation: "PVˣ = K",
      text: "x is the polytropic index and remains constant along the chosen reversible path.",
    },
    {
      title: "2. Combine with ideal gas",
      equation: "P = nRT/V",
      text: "Substitution gives nRTV^(x−1) = K.",
    },
    {
      title: "3. Temperature–volume relation",
      equation: "TV^(x−1) = constant",
      text: "For x > 1, expansion cools the gas. For x < 1, expansion heats it.",
    },
    {
      title: "4. Work integral",
      equation: "w = −∫ K V^(−x)dV",
      text: "Use the chemistry sign convention and a reversible pressure path.",
    },
    {
      title: "5. Result for x ≠ 1",
      equation: "w = (P₂V₂−P₁V₁)/(x−1)",
      text: "Using PV = nRT, this also becomes nR(T₂−T₁)/(x−1).",
    },
    {
      title: "6. Special case x = 1",
      equation: "w = −nRT ln(V₂/V₁)",
      text: "The algebraic x ≠ 1 expression has a removable limiting form that becomes the isothermal logarithm.",
    },
  ];

  return (
    <div className="grid gap-4">
      {steps.map((step) => (
        <article key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <div className="grid gap-4 md:grid-cols-[0.85fr_1.1fr_1.35fr] md:items-center">
            <h3 className="font-black text-white">{step.title}</h3>
            <div className="overflow-x-auto rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-cyan-200">
              {step.equation}
            </div>
            <p className="text-sm leading-6 text-slate-300">{step.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function LimitingCasesGrid() {
  const items = [
    {
      x: "x = 0",
      process: "Isobaric",
      path: "P = constant",
      capacity: "Cₘ = Cₚ",
      behaviour: "Expansion requires heating for an ideal gas.",
      tone: "amber" as Tone,
    },
    {
      x: "x = 1",
      process: "Isothermal",
      path: "PV = constant",
      capacity: "|Cₘ| → ∞",
      behaviour: "Finite heat may be transferred while dT = 0.",
      tone: "rose" as Tone,
    },
    {
      x: "x = γ",
      process: "Reversible adiabatic",
      path: "PV^γ = constant",
      capacity: "Cₘ = 0",
      behaviour: "No heat transfer; work alone changes U.",
      tone: "emerald" as Tone,
    },
    {
      x: "x → ∞",
      process: "Isochoric limit",
      path: "V ≈ constant",
      capacity: "Cₘ → Cᵥ",
      behaviour: "PV work tends to zero.",
      tone: "violet" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.x} className={`rounded-3xl border p-5 ${toneMap[item.tone]}`}>
          <p className="text-xs font-black uppercase tracking-[0.2em]">{item.x}</p>
          <h3 className="mt-2 text-xl font-black text-white">{item.process}</h3>
          <div className="mt-4 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-slate-100">
            {item.path}
          </div>
          <p className="mt-3 font-mono text-sm font-black text-white">{item.capacity}</p>
          <p className="mt-3 text-xs leading-5 text-slate-300">{item.behaviour}</p>
        </article>
      ))}
    </div>
  );
}

function HeatFlowRegimeCards() {
  const rows = [
    {
      range: "x < 1",
      expansion: "T rises",
      heat: "q > 0 for expansion",
      capacity: "Cₘ > Cᵥ; at x = 0, Cₘ = Cₚ",
      tone: "amber" as Tone,
    },
    {
      range: "x = 1",
      expansion: "T constant",
      heat: "q = −w > 0",
      capacity: "effective heat capacity diverges",
      tone: "rose" as Tone,
    },
    {
      range: "1 < x < γ",
      expansion: "T falls",
      heat: "q > 0 although T falls",
      capacity: "Cₘ < 0",
      tone: "violet" as Tone,
    },
    {
      range: "x = γ",
      expansion: "T falls",
      heat: "q = 0",
      capacity: "Cₘ = 0",
      tone: "emerald" as Tone,
    },
    {
      range: "x > γ",
      expansion: "T falls",
      heat: "q < 0",
      capacity: "0 < Cₘ < Cᵥ",
      tone: "cyan" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {rows.map((row) => (
        <article key={row.range} className={`rounded-3xl border p-4 ${toneMap[row.tone]}`}>
          <p className="text-lg font-black text-white">{row.range}</p>
          <p className="mt-3 text-sm font-semibold text-slate-100">{row.expansion}</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">{row.heat}</p>
          <p className="mt-3 text-xs leading-5 text-slate-300">{row.capacity}</p>
        </article>
      ))}
    </div>
  );
}

function FormulaMatrix() {
  const rows = [
    ["Path equation", "PV^x = constant", "all x"],
    ["Temperature–volume", "TV^(x−1) = constant", "ideal gas"],
    ["Pressure–temperature", "T^x P^(1−x) = constant", "ideal gas"],
    ["Work", "(P₂V₂−P₁V₁)/(x−1)", "x ≠ 1"],
    ["Work", "nR(T₂−T₁)/(x−1)", "x ≠ 1"],
    ["Work", "−nRT ln(V₂/V₁)", "x = 1"],
    ["Internal-energy change", "ΔU = nCᵥ,m(T₂−T₁)", "ideal gas"],
    ["Minimal enthalpy result", "ΔH = nCₚ,m(T₂−T₁)", "ideal gas"],
    ["Heat", "q = nCₘ(T₂−T₁)", "constant effective Cₘ"],
    ["Effective molar heat capacity", "Cₘ = Cᵥ,m + R/(1−x)", "x ≠ 1"],
    ["Equivalent Cₘ form", "Cₘ = (Cₚ,m − xCᵥ,m)/(1−x)", "x ≠ 1"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Quantity</th>
            <th className="px-4 py-3 font-black text-white">Expression</th>
            <th className="px-4 py-3 font-black text-white">Condition</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([quantity, expression, condition]) => (
            <tr key={`${quantity}-${condition}`}>
              <td className="px-4 py-3 font-semibold text-slate-100">{quantity}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{expression}</td>
              <td className="px-4 py-3 text-slate-300">{condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WorkedExample() {
  return (
    <article className="rounded-[2rem] border border-amber-300/25 bg-amber-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Original Synergic Bond worked example
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Complete energy audit of a polytropic expansion
          </h3>
        </div>
        <Chip tone="amber">FULL DERIVATION</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        Two moles of a monatomic ideal gas at 400 K expand reversibly according to PV<sup>1.20</sup> = constant
        until the volume doubles. Calculate T₂, w, ΔU, q and the minimal ideal-gas ΔH result.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="Temperature relation">
          T₂ = T₁(V₁/V₂)^(x−1) = 400(1/2)^0.20 ≈ 348.2 K
        </Formula>

        <Formula label="Work">
          w = nR(T₂−T₁)/(x−1) ≈ −4.31 kJ
        </Formula>

        <Formula label="Internal-energy change">
          ΔU = n(3R/2)(T₂−T₁) ≈ −1.29 kJ
        </Formula>

        <Formula label="Heat">
          q = ΔU − w ≈ +3.02 kJ
        </Formula>

        <Formula label="Minimal ideal-gas enthalpy result">
          ΔH = n(5R/2)(T₂−T₁) ≈ −2.15 kJ
        </Formula>
      </div>

      <ConceptLens title="Why heat enters even though temperature falls" tone="violet">
        For 1 &lt; x &lt; γ, the gas performs more work than the decrease in internal energy alone can supply.
        Heat enters while the gas still cools. This is the physical meaning of a negative effective heat capacity for the path.
      </ConceptLens>
    </article>
  );
}

const problems = [
  {
    title: "Concept Application 1 — identify x",
    question:
      "An ideal gas follows a reversible path for which pressure becomes one-fourth when volume doubles. Find the polytropic index.",
    solution:
      "From P1V1^x = P2V2^x, P₂/P₁ = (V₁/V₂)^x. Thus 1/4 = (1/2)^x, giving x = 2.",
  },
  {
    title: "Concept Application 2 — final temperature",
    question:
      "One mole of ideal gas expands polytropically with x = 1.30 from 300 K until its volume triples. Find T₂.",
    solution:
      "T₂/T₁ = (V₁/V₂)^(x−1) = (1/3)^0.30. Hence T₂ ≈ 215.8 K.",
  },
  {
    title: "Concept Application 3 — work from temperatures",
    question:
      "Three moles of ideal gas undergo x = 1.25 polytropic expansion from 500 K to 400 K. Calculate chemistry-sign work.",
    solution:
      "w = nR(T₂−T₁)/(x−1) = 3×8.314×(−100)/0.25 ≈ −9.98 kJ.",
  },
  {
    title: "Concept Application 4 — effective heat capacity",
    question:
      "For a monatomic ideal gas, calculate Cm for x = 1.20.",
    solution:
      "Cv,m = 3R/2. Cm = Cv,m + R/(1−x) = 1.5R − 5R = −3.5R.",
  },
  {
    title: "Concept Application 5 — adiabatic index recovery",
    question:
      "Show that Cm becomes zero when x = γ.",
    solution:
      "Cm = Cv,m + R/(1−γ). Since R = (γ−1)Cv,m, the second term is −Cv,m. Therefore Cm = 0.",
  },
  {
    title: "Concept Application 6 — isobaric recovery",
    question:
      "Show that x = 0 gives the constant-pressure heat capacity.",
    solution:
      "Cm = Cv,m + R/(1−0) = Cv,m + R = Cp,m.",
  },
  {
    title: "Concept Application 7 — isochoric limit",
    question:
      "Explain mathematically why x → ∞ approaches an isochoric process.",
    solution:
      "For finite pressure ratios, V₂/V₁ = (P₁/P₂)^(1/x) tends to 1 as x → ∞. Hence volume change tends to zero and Cm tends to Cv,m.",
  },
  {
    title: "Concept Application 8 — negative heat capacity",
    question:
      "For 1 < x < γ, why is the effective path heat capacity negative?",
    solution:
      "Expansion gives dT < 0 but q > 0. Since δq = nCm dT, positive heat divided by negative temperature change requires Cm < 0.",
  },
  {
    title: "Concept Application 9 — heat-flow sign for x > γ",
    question:
      "During expansion with x > γ, determine the signs of ΔT, w, ΔU and q.",
    solution:
      "Expansion gives ΔT < 0, w < 0 and ΔU < 0. Here 0 < Cm < Cv,m, so q = nCmΔT < 0: heat leaves while the gas also does work.",
  },
  {
    title: "Concept Application 10 — x = 1 limit",
    question:
      "Why can the formula w = nRΔT/(x−1) not be used by direct substitution at x = 1?",
    solution:
      "At x = 1, ΔT also tends to zero, producing an indeterminate 0/0 form. The correct limit yields the logarithmic isothermal work, not zero.",
  },
  {
    title: "Concept Application 11 — endpoint work form",
    question:
      "A reversible polytropic process has x = 1.5, P1V1 = 10 kJ and P2V2 = 7 kJ. Find w.",
    solution:
      "w = (P2V2−P1V1)/(x−1) = (7−10)/0.5 = −6 kJ.",
  },
  {
    title: "Concept Application 12 — pressure–temperature form",
    question:
      "Derive the T–P relation for a polytropic ideal-gas process.",
    solution:
      "Eliminate V from PV^x = constant using V = nRT/P. This gives T^xP^(1−x) = constant, or T₂/T₁ = (P₂/P₁)^((x−1)/x).",
  },
  {
    title: "Concept Application 13 — infer process from Cm",
    question:
      "An ideal gas has Cv,m = 2.5R and follows a path with Cm = −2.5R. Find x.",
    solution:
      "−2.5R = 2.5R + R/(1−x). Thus 1/(1−x) = −5, so 1−x = −0.2 and x = 1.2.",
  },
  {
    title: "Concept Application 14 — process ranking",
    question:
      "From the same initial state to the same larger volume, rank final pressure for x = 0, 1, 1.2 and γ = 1.4.",
    solution:
      "P₂/P₁ = (V₁/V₂)^x. For V₂ > V₁, larger x gives smaller final pressure. Therefore P(x=0) > P(x=1) > P(x=1.2) > P(x=1.4).",
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
    "Every process can be represented exactly by one constant polytropic index.",
    "Incorrect",
    "PV^x = constant is a process model. A real path may require a variable local exponent.",
  ],
  [
    "x = γ for every adiabatic process.",
    "Incorrect",
    "That equality belongs to a reversible adiabatic ideal-gas process under the stated assumptions.",
  ],
  [
    "Negative effective heat capacity means the gas is thermodynamically unstable.",
    "Incorrect",
    "Here it is a path ratio δq/(n dT), not the equilibrium Cv or Cp stability property.",
  ],
  [
    "x = 1 gives zero work because ΔT = 0.",
    "Incorrect",
    "The temperature-form work becomes indeterminate; its correct limit is logarithmic and generally non-zero.",
  ],
  [
    "The x → ∞ limit means infinite pressure.",
    "Incorrect",
    "It describes a path whose fractional volume change tends to zero for finite endpoint pressure ratios.",
  ],
  [
    "For 1 < x < γ, cooling proves heat leaves.",
    "Incorrect",
    "Heat enters while the gas performs still more work, so internal energy and temperature decrease.",
  ],
  [
    "Cm is always between Cv and Cp.",
    "Incorrect",
    "It may be negative, zero, divergent, or exceed Cp depending on x.",
  ],
  [
    "Polytropic work always uses constant external pressure.",
    "Incorrect",
    "For a reversible polytropic path, system pressure follows P = K/V^x and varies continuously.",
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
      title: "Real compressor modelling",
      text: "A compression process with partial heat removal often lies between isothermal and adiabatic behaviour and is approximated by a fitted polytropic index.",
      tone: "cyan" as Tone,
    },
    {
      title: "Multistage compression",
      text: "Intercooling moves each stage closer to isothermal compression, reducing required work compared with one strongly adiabatic stage.",
      tone: "emerald" as Tone,
    },
    {
      title: "Reciprocating engines",
      text: "Expansion and compression data are often fitted by PV^x = constant to represent heat leakage, combustion effects and non-idealities in a compact engineering model.",
      tone: "amber" as Tone,
    },
    {
      title: "Atmospheric air parcels",
      text: "Dry reversible adiabatic motion corresponds to x = γ, while heat exchange, condensation and mixing shift the effective path away from that value.",
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

export default function ThermodynamicsPart11() {
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
            <Chip tone="amber">POLYTROPIC PROCESS MAP</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Generalised Ideal-Gas Path
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                One exponent connects isobaric, isothermal, adiabatic and isochoric limits
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The polytropic law {String.raw`\(PV^x=\text{constant}\)`} creates a unified family of reversible ideal-gas paths.
                The index {String.raw`\(x\)`} controls curve shape, temperature change, work and even the effective heat capacity.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Master equation set
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-lg font-black text-white">
                  PV<sup>x</sup> = constant
                </div>
                <div className="rounded-xl bg-violet-400/10 p-4 font-mono text-lg font-black text-white">
                  TV<sup>x−1</sup> = constant
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-lg font-black text-white">
                  C<sub>m</sub> = C<sub>V,m</sub> + R/(1−x)
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Meaning of a polytropic process"
          subtitle="A compact process model joining several familiar reversible ideal-gas paths."
        >
          <Formula label="Defining path equation">
            PV<sup>x</sup> = K
          </Formula>

          <p>
            The constant {String.raw`\(x\)`} is the <strong className="text-white">polytropic index</strong>. Different values of
            {String.raw`\(x\)`} generate different pressure–volume paths. The model is especially useful when a real compression or
            expansion exchanges some heat but is neither perfectly isothermal nor perfectly adiabatic.
          </p>

          <PolytropicFamilyAnimation />

          <ConceptLens title="A path model, not a universal law of state" tone="rose">
            An ideal gas does not possess a fixed polytropic index. The value belongs to the chosen process and may be
            obtained from the endpoint data or fitted to a measured path.
          </ConceptLens>
        </Section>

        <Section index="02" title="Derivation of the ideal-gas path relations">
          <DerivationSpine />

          <Formula label="Pressure–temperature relation">
            T<sup>x</sup>P<sup>1−x</sup> = constant
          </Formula>

          <div className="grid gap-4 md:grid-cols-3">
            <Formula label="V–T endpoint form">
              T₂/T₁ = (V₁/V₂)<sup>x−1</sup>
            </Formula>
            <Formula label="P–V endpoint form">
              P₂/P₁ = (V₁/V₂)<sup>x</sup>
            </Formula>
            <Formula label="P–T endpoint form">
              T₂/T₁ = (P₂/P₁)<sup>(x−1)/x</sup>
            </Formula>
          </div>
        </Section>

        <Section
          index="03"
          title="Work done in a reversible polytropic process"
          subtitle="The logarithmic isothermal result appears as the special x = 1 limit."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="For x ≠ 1">
              w = (P₂V₂−P₁V₁)/(x−1)
            </Formula>
            <Formula label="Equivalent temperature form">
              w = nR(T₂−T₁)/(x−1)
            </Formula>
          </div>

          <Formula label="For x = 1">
            w = −nRT ln(V₂/V₁)
          </Formula>

          <ConceptLens title="Expansion sign check" tone="cyan">
            For an expansion with {String.raw`\(x>1\)`}, temperature falls and {String.raw`\(T_2-T_1<0\)`}, so the temperature-form work is negative.
          </ConceptLens>

          <ConceptLens title="Why direct substitution at x = 1 fails" tone="rose">
            Both {String.raw`\(T_2-T_1\)`} and {String.raw`\(x-1\)`} approach zero. The ratio is indeterminate; its correct limiting value is the
            finite logarithmic isothermal work.
          </ConceptLens>
        </Section>

        <Section index="04" title="Energy changes">
          <Formula label="Internal-energy change">
            ΔU = nC<sub>V,m</sub>(T₂−T₁)
          </Formula>

          <Formula label="Minimal ideal-gas enthalpy result">
            ΔH = nC<sub>P,m</sub>(T₂−T₁)
          </Formula>

          <Formula label="Heat along the path">
            q = ΔU − w = nC<sub>m</sub>(T₂−T₁)
          </Formula>

          <ConceptLens title="Thermodynamics–Thermochemistry boundary" tone="amber">
            Only the process-essential {String.raw`\(C_V\)`}, {String.raw`\(C_P\)`}, {String.raw`\(\Delta U\)`} and minimal {String.raw`\(\Delta H\)`} relations are used here.
            Full heat-capacity theory remains in the separate Thermochemistry notes.
          </ConceptLens>
        </Section>

        <Section
          index="05"
          title="Effective molar heat capacity"
          subtitle="The chapter derivation completed step by step."
        >
          <p>
            For a reversible path, the First Law gives:
          </p>

          <Formula label="First Law">
            δq = dU + P dV
          </Formula>

          <Formula label="Use dU and define Cm">
            nC<sub>m</sub>dT = nC<sub>V,m</sub>dT + P dV
          </Formula>

          <p>
            Differentiate {String.raw`\(TV^{x-1}=\text{constant}\)`}:
          </p>

          <Formula label="Polytropic differential relation">
            P dV = nR dT/(1−x)
          </Formula>

          <Formula label="Effective heat capacity">
            C<sub>m</sub> = C<sub>V,m</sub> + R/(1−x)
          </Formula>

          <Formula label="Equivalent form">
            C<sub>m</sub> = (C<sub>P,m</sub>−xC<sub>V,m</sub>)/(1−x)
          </Formula>

          <HeatCapacityRegimeAnimation />

          <ConceptLens title="Negative path heat capacity is not instability" tone="violet">
            {String.raw`\(C_m\)`} is the process ratio {String.raw`\(\delta q/(n\,dT)\)`}, not an equilibrium stability property like {String.raw`\(C_V\)`}.
            It can be negative when heat enters while temperature falls.
          </ConceptLens>
        </Section>

        <Section index="06" title="Limiting cases">
          <LimitingCasesGrid />
        </Section>

        <Section index="07" title="Heat-flow and temperature regimes during expansion">
          <HeatFlowRegimeCards />

          <ConceptLens title="The surprising 1 < x < γ region" tone="rose">
            The gas cools because it does substantial work, yet heat still enters. The work output exceeds the heat input,
            and the difference comes from the decrease in internal energy.
          </ConceptLens>
        </Section>

        <Section index="08" title="Complete formula matrix">
          <FormulaMatrix />
        </Section>

        <Section index="09" title="Original complete worked example">
          <WorkedExample />
        </Section>

        <Section index="10" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="11" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={11} />

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
                The index x controls path shape, work, temperature response and effective heat capacity
              </h2>
            </div>
            <Chip tone="emerald">PART 11 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["x = 0", "isobaric; Cm = Cp"],
              ["x = 1", "isothermal; logarithmic work"],
              ["x = γ", "reversible adiabatic; Cm = 0"],
              ["x → ∞", "isochoric limit; Cm → Cv"],
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
