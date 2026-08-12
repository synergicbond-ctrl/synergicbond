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

function AdiabaticPistonAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="adiabatic-piston-title adiabatic-piston-description"
        className="h-auto w-full"
      >
        <title id="adiabatic-piston-title">Animated adiabatic expansion and compression</title>
        <desc id="adiabatic-piston-description">
          An insulated piston expands and cools, then compresses and warms. Heat transfer is zero while work changes internal energy.
        </desc>

        <defs>
          <marker id="adiaRoseArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
          <marker id="adiaGreenArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <linearGradient id="adiaTemp" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ADIABATIC: NO HEAT CROSSING, BUT TEMPERATURE CAN CHANGE
        </text>

        <rect x="80" y="100" width="1040" height="505" rx="36" fill="#0f172a" stroke="#f59e0b" strokeWidth="6" />
        <path d="M210 520 V165 H790 V520" fill="#07111f" stroke="#22d3ee" strokeWidth="5" />
        <rect x="250" y="335" width="500" height="28" rx="9" fill="#67e8f9">
          <animate
            attributeName="y"
            values="365;235;365"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
        <line x1="500" y1="165" x2="500" y2="335" stroke="#67e8f9" strokeWidth="6" strokeLinecap="round">
          <animate
            attributeName="y2"
            values="365;235;365"
            dur="5s"
            repeatCount="indefinite"
          />
        </line>

        {[0,1,2,3,4,5,6,7].map((i) => (
          <circle
            key={i}
            cx={285 + (i % 4) * 125}
            cy={405 + Math.floor(i / 4) * 55}
            r="12"
            fill={i % 2 ? "#fde047" : "#f472b6"}
          >
            <animate
              attributeName={i % 2 ? "cx" : "cy"}
              values={
                i % 2
                  ? `${255 + (i % 4) * 125};${315 + (i % 4) * 125};${255 + (i % 4) * 125}`
                  : `${380 + Math.floor(i / 4) * 55};${430 + Math.floor(i / 4) * 55};${380 + Math.floor(i / 4) * 55}`
              }
              dur={`${1.7 + i * 0.15}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <path d="M500 130 V75" stroke="#34d399" strokeWidth="5" markerEnd="url(#adiaGreenArrow)" />
        <path d="M560 75 V130" stroke="#fb7185" strokeWidth="5" markerEnd="url(#adiaRoseArrow)" />
        <text x="430" y="92" fill="#a7f3d0" fontSize="21" textAnchor="middle">expansion</text>
        <text x="635" y="92" fill="#fda4af" fontSize="21" textAnchor="middle">compression</text>

        <path d="M815 325 H965" stroke="#fb7185" strokeWidth="5" />
        <path d="M870 275 L940 375 M940 275 L870 375" stroke="#fb7185" strokeWidth="5" />
        <text x="905" y="245" fill="#fda4af" fontSize="24" fontWeight="900" textAnchor="middle">q = 0</text>

        <rect x="845" y="410" width="230" height="130" rx="26" fill="#020617" stroke="url(#adiaTemp)" strokeWidth="4" />
        <text x="960" y="450" fill="#a5f3fc" fontSize="20" fontWeight="900" textAnchor="middle">expansion: T ↓</text>
        <text x="960" y="495" fill="#fed7aa" fontSize="20" fontWeight="900" textAnchor="middle">compression: T ↑</text>

        <rect x="275" y="630" width="650" height="52" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="664" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">
          ΔU = w = nCv,m(T₂ − T₁)
        </text>
      </svg>
    </div>
  );
}

function DerivationLadder() {
  const steps = [
    {
      title: "1. Adiabatic First Law",
      equation: "q = 0 ⇒ dU = δw",
      text: "For reversible pressure–volume work, δw = −P dV.",
    },
    {
      title: "2. Ideal-gas internal energy",
      equation: "nCv,m dT = −P dV",
      text: "Use dU = nCv,m dT for a fixed amount of ideal gas.",
    },
    {
      title: "3. Substitute the equation of state",
      equation: "nCv,m dT = −(nRT/V)dV",
      text: "Replace P by nRT/V.",
    },
    {
      title: "4. Separate variables",
      equation: "dT/T = −(R/Cv,m)(dV/V)",
      text: "For an ideal gas, R/Cv,m = γ − 1.",
    },
    {
      title: "5. Integrate",
      equation: "ln(T₂/T₁) = −(γ−1)ln(V₂/V₁)",
      text: "Assume Cv,m and Cp,m are effectively constant over the temperature range.",
    },
    {
      title: "6. Exponentiate",
      equation: "T₁V₁^(γ−1) = T₂V₂^(γ−1)",
      text: "This is the temperature–volume Poisson relation.",
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

function TripleGraphAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="triple-graph-title triple-graph-description"
        className="h-auto w-full"
      >
        <title id="triple-graph-title">Reversible adiabatic and isothermal paths on P-V, T-V, and T-P graphs</title>
        <desc id="triple-graph-description">
          The adiabatic curve is steeper than the isotherm on a pressure-volume graph.
          Temperature decreases with volume and pressure during reversible adiabatic expansion.
        </desc>

        <defs>
          <marker id="tgGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="tgPink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="30" fontWeight="900" textAnchor="middle">
          REVERSIBLE ADIABAT VERSUS ISOTHERM
        </text>

        <g transform="translate(35 90)">
          <text x="180" y="35" fill="#a5f3fc" fontSize="24" fontWeight="900" textAnchor="middle">P–V</text>
          <line x1="55" y1="475" x2="350" y2="475" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="55" y1="475" x2="55" y2="70" stroke="#e2e8f0" strokeWidth="5" />
          <path id="isoPV" d="M95 115 C155 170 230 270 325 390" fill="none" stroke="#f472b6" strokeWidth="5" markerEnd="url(#tgPink)" />
          <path id="adiaPV" d="M95 115 C135 195 185 330 290 435" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#tgGreen)" />
          <text x="255" y="260" fill="#f9a8d4" fontSize="19">isothermal</text>
          <text x="165" y="385" fill="#a7f3d0" fontSize="19">adiabatic</text>
          <text x="365" y="488" fill="#e2e8f0" fontSize="20">V</text>
          <text x="35" y="60" fill="#e2e8f0" fontSize="20">P</text>
          <circle r="10" fill="#86efac">
            <animateMotion dur="3.8s" repeatCount="indefinite">
              <mpath href="#adiaPV" />
            </animateMotion>
          </circle>
        </g>

        <g transform="translate(415 90)">
          <text x="180" y="35" fill="#fde68a" fontSize="24" fontWeight="900" textAnchor="middle">T–V</text>
          <line x1="55" y1="475" x2="350" y2="475" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="55" y1="475" x2="55" y2="70" stroke="#e2e8f0" strokeWidth="5" />
          <path d="M90 180 H325" fill="none" stroke="#f472b6" strokeWidth="5" />
          <path id="adiaTV" d="M90 180 C150 235 220 335 325 420" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#tgGreen)" />
          <text x="230" y="155" fill="#f9a8d4" fontSize="19">isothermal: T constant</text>
          <text x="175" y="350" fill="#a7f3d0" fontSize="19">TV^(γ−1) constant</text>
          <text x="365" y="488" fill="#e2e8f0" fontSize="20">V</text>
          <text x="35" y="60" fill="#e2e8f0" fontSize="20">T</text>
          <circle r="10" fill="#86efac">
            <animateMotion dur="3.8s" repeatCount="indefinite">
              <mpath href="#adiaTV" />
            </animateMotion>
          </circle>
        </g>

        <g transform="translate(795 90)">
          <text x="180" y="35" fill="#ddd6fe" fontSize="24" fontWeight="900" textAnchor="middle">T–P</text>
          <line x1="55" y1="475" x2="350" y2="475" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="55" y1="475" x2="55" y2="70" stroke="#e2e8f0" strokeWidth="5" />
          <path d="M90 180 H325" fill="none" stroke="#f472b6" strokeWidth="5" />
          <path id="adiaTP" d="M90 420 C165 330 245 230 325 150" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#tgGreen)" />
          <text x="215" y="155" fill="#f9a8d4" fontSize="19">isothermal</text>
          <text x="135" y="365" fill="#a7f3d0" fontSize="19">T ∝ P^((γ−1)/γ)</text>
          <text x="365" y="488" fill="#e2e8f0" fontSize="20">P</text>
          <text x="35" y="60" fill="#e2e8f0" fontSize="20">T</text>
          <circle r="10" fill="#86efac">
            <animateMotion dur="3.8s" repeatCount="indefinite">
              <mpath href="#adiaTP" />
            </animateMotion>
          </circle>
        </g>

        <rect x="180" y="635" width="840" height="50" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="668" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          From the same initial state during expansion: Padiabatic &lt; Pisothermal and Tadiabatic &lt; Tinitial
        </text>
      </svg>
    </div>
  );
}

function PathComparisonAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 690"
        role="img"
        aria-labelledby="adia-path-title adia-path-description"
        className="h-auto w-full"
      >
        <title id="adia-path-title">Adiabatic reversible, one-step irreversible, and free expansion comparison</title>
        <desc id="adia-path-description">
          For the same initial state and final volume, reversible adiabatic expansion cools most,
          one-step adiabatic expansion cools less, and ideal-gas free expansion does not change temperature.
        </desc>

        <rect width="1200" height="690" rx="34" fill="#020617" />

        {[
          {
            x: 70,
            title: "REVERSIBLE",
            subtitle: "maximum expansion work",
            stroke: "#34d399",
            temp: "largest T fall",
            pistonValues: "360;215;360",
            duration: "5.8s",
          },
          {
            x: 430,
            title: "ONE-STEP",
            subtitle: "finite P − Pext",
            stroke: "#f472b6",
            temp: "smaller T fall",
            pistonValues: "360;245;285;230;250",
            duration: "4s",
          },
          {
            x: 790,
            title: "FREE",
            subtitle: "Pext = 0",
            stroke: "#fbbf24",
            temp: "ideal gas: ΔT = 0",
            pistonValues: "360;215;360",
            duration: "2.8s",
          },
        ].map((item) => (
          <g key={item.title}>
            <text x={item.x + 145} y="60" fill={item.stroke} fontSize="26" fontWeight="900" textAnchor="middle">
              {item.title}
            </text>
            <text x={item.x + 145} y="92" fill="#cbd5e1" fontSize="19" textAnchor="middle">
              {item.subtitle}
            </text>
            <path
              d={`M${item.x + 10} 500 V150 H${item.x + 280} V500`}
              fill="none"
              stroke={item.stroke}
              strokeWidth="5"
            />
            <rect x={item.x + 40} y="330" width="210" height="24" rx="8" fill={item.stroke}>
              <animate
                attributeName="y"
                values={item.pistonValues}
                dur={item.duration}
                repeatCount="indefinite"
              />
            </rect>
            <line
              x1={item.x + 145}
              y1="150"
              x2={item.x + 145}
              y2="330"
              stroke={item.stroke}
              strokeWidth="6"
              strokeLinecap="round"
            >
              <animate
                attributeName="y2"
                values={item.pistonValues}
                dur={item.duration}
                repeatCount="indefinite"
              />
            </line>
            <rect x={item.x + 30} y="540" width="230" height="75" rx="20" fill="#0f172a" stroke={item.stroke} strokeWidth="4" />
            <text x={item.x + 145} y="585" fill={item.stroke} fontSize="21" fontWeight="900" textAnchor="middle">
              {item.temp}
            </text>
          </g>
        ))}

        <text x="600" y="655" fill="#94a3b8" fontSize="20" textAnchor="middle">
          Comparison assumes the same initial ideal-gas state and the same final volume.
        </text>
      </svg>
    </div>
  );
}

function GammaCards() {
  const rows = [
    {
      gas: "Monatomic ideal gas",
      cv: "Cv,m = 3R/2",
      cp: "Cp,m = 5R/2",
      gamma: "γ = 5/3",
      caution: "classical translational degrees of freedom",
      tone: "cyan" as Tone,
    },
    {
      gas: "Diatomic ideal gas",
      cv: "Cv,m ≈ 5R/2",
      cp: "Cp,m ≈ 7R/2",
      gamma: "γ ≈ 7/5",
      caution: "moderate-temperature rotational contribution; vibration neglected",
      tone: "violet" as Tone,
    },
    {
      gas: "General ideal gas",
      cv: "Cp,m − Cv,m = R",
      cp: "γ = Cp,m/Cv,m",
      gamma: "Cv,m = R/(γ−1)",
      caution: "heat capacities may vary with temperature",
      tone: "amber" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {rows.map((row) => (
        <article key={row.gas} className={`rounded-3xl border p-5 ${toneMap[row.tone]}`}>
          <h3 className="text-xl font-black text-white">{row.gas}</h3>
          <div className="mt-4 space-y-2 font-mono text-sm font-black text-slate-100">
            <div className="rounded-xl bg-black/25 p-3">{row.cv}</div>
            <div className="rounded-xl bg-black/25 p-3">{row.cp}</div>
            <div className="rounded-xl bg-black/25 p-3">{row.gamma}</div>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-300">{row.caution}</p>
        </article>
      ))}
    </div>
  );
}

function RetainedExampleOne() {
  return (
    <article className="rounded-[2rem] border border-amber-300/25 bg-amber-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Example 1
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Two-mole monatomic gas: three adiabatic routes
          </h3>
        </div>
        <Chip tone="amber">COMPLETE ROUTE COMPARISON</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        Two moles of an ideal monatomic gas expand adiabatically from 5.0 L at 127°C to 40.0 L.
        Calculate q, ΔU, w and the minimal ideal-gas ΔH result for:
        (i) reversible expansion;
        (ii) expansion against constant P<sub>ext</sub> = 0.10 atm; and
        (iii) free expansion.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Formula label="Initial temperature">
          T₁ = 400 K
        </Formula>
        <Formula label="Monatomic heat capacities">
          Cv,m = 3R/2, Cp,m = 5R/2
        </Formula>
        <Formula label="Adiabatic heat">
          q = 0
        </Formula>
      </div>

      <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Route (i): reversible</p>
        <div className="mt-4 space-y-3">
          <Formula label="Final temperature">
            T₂ = T₁(V₁/V₂)^(γ−1) = 400(5/40)^(2/3) = 100 K
          </Formula>
          <Formula label="Internal-energy change and work">
            ΔU = w = nCv,m(T₂−T₁) = −7.48 kJ
          </Formula>
          <Formula label="Minimal ideal-gas enthalpy result">
            ΔH = nCp,m(T₂−T₁) = −12.47 kJ
          </Formula>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">
          Route (ii): constant external pressure
        </p>
        <div className="mt-4 space-y-3">
          <Formula label="Work">
            w = −Pext(V₂−V₁) = −(0.10)(35.0) L atm ≈ −0.355 kJ
          </Formula>
          <Formula label="Internal-energy change">
            ΔU = w ≈ −0.355 kJ
          </Formula>
          <Formula label="Final temperature">
            T₂ = T₁ + ΔU/(nCv,m) ≈ 385.8 K
          </Formula>
          <Formula label="Minimal ideal-gas enthalpy result">
            ΔH = γΔU ≈ −0.591 kJ
          </Formula>
        </div>

        <p className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-6 text-slate-200">
          Scientific completion: because the stated final volume is fixed at 40 L while the external pressure is only
          0.10 atm, the process must be stopped mechanically at that volume. Otherwise the listed endpoint is not the
          final mechanical-equilibrium state.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-sky-300/20 bg-sky-300/[0.05] p-5">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">Route (iii): free expansion</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Formula label="Boundary transfers">
            q = 0 and w = 0
          </Formula>
          <Formula label="Ideal-gas state changes">
            ΔU = 0, ΔT = 0, ΔH = 0
          </Formula>
        </div>
      </div>

      <ConceptLens title="Temperature ranking for the same final volume" tone="violet">
        T<sub>2,rev</sub> = 100 K is far below T<sub>2,one-step</sub> ≈ 385.8 K, while ideal-gas free expansion
        leaves T unchanged at 400 K. Greater expansion work causes a larger internal-energy decrease.
      </ConceptLens>
    </article>
  );
}

function RetainedExampleTwo() {
  return (
    <article className="rounded-[2rem] border border-violet-300/25 bg-violet-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
            Example 2
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Final temperature in one-step adiabatic expansion
          </h3>
        </div>
        <Chip tone="violet">IMPLICIT ENDPOINT SOLUTION</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        Five moles of an ideal monatomic gas expand adiabatically from 12 atm at 27°C against a constant
        external pressure of 1 atm. The final equilibrium pressure is 1 atm. Calculate T₂, q, ΔU, w and the
        minimal ideal-gas ΔH result.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="Adiabatic First Law">
          q = 0 and nCv,m(T₂−T₁) = −Pext(V₂−V₁)
        </Formula>

        <Formula label="Use endpoint ideal-gas volumes">
          V₁ = nRT₁/P₁ and V₂ = nRT₂/P₂
        </Formula>

        <Formula label="Substitute Pext = P₂ = 1 atm and Cv,m = 3R/2">
          (3/2)(T₂−300) = −(T₂−300/12)
        </Formula>

        <Formula label="Final temperature">
          T₂ = 190 K
        </Formula>

        <div className="grid gap-4 md:grid-cols-3">
          <Formula label="Heat">
            q = 0
          </Formula>
          <Formula label="Work and ΔU">
            w = ΔU ≈ −6.86 kJ
          </Formula>
          <Formula label="Minimal ΔH result">
            ΔH ≈ −11.43 kJ
          </Formula>
        </div>
      </div>

      <ConceptLens title="Why T₂ is not found from TV^(γ−1) = constant" tone="rose">
        That Poisson relation applies only to a reversible adiabatic ideal-gas path. This is a one-step irreversible
        expansion, so the First Law and actual external pressure must be used.
      </ConceptLens>
    </article>
  );
}

function ResultMatrix() {
  const rows = [
    [
      "Reversible adiabatic expansion",
      "q = 0",
      "w = ΔU < 0",
      "T falls most for fixed final volume",
      "PV^γ = constant",
    ],
    [
      "Reversible adiabatic compression",
      "q = 0",
      "w = ΔU > 0",
      "T rises",
      "Poisson relations valid",
    ],
    [
      "One-step adiabatic expansion",
      "q = 0",
      "w = −PextΔV",
      "T falls less than reversible for same ΔV",
      "Poisson relations invalid",
    ],
    [
      "One-step adiabatic compression",
      "q = 0",
      "w = −PextΔV > 0",
      "T rises more than reversible for same ΔV",
      "Poisson relations invalid",
    ],
    [
      "Ideal-gas adiabatic free expansion",
      "q = 0",
      "w = 0",
      "ΔU = 0 and ΔT = 0",
      "irreversible",
    ],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Process</th>
            <th className="px-4 py-3 font-black text-white">Heat</th>
            <th className="px-4 py-3 font-black text-white">Work/internal energy</th>
            <th className="px-4 py-3 font-black text-white">Temperature behaviour</th>
            <th className="px-4 py-3 font-black text-white">Equation note</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([process, heat, work, temp, note]) => (
            <tr key={process}>
              <td className="px-4 py-3 font-semibold text-slate-100">{process}</td>
              <td className="px-4 py-3 font-mono text-amber-200">{heat}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{work}</td>
              <td className="px-4 py-3 text-slate-300">{temp}</td>
              <td className="px-4 py-3 text-slate-300">{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — volume doubling",
    question:
      "One mole of a monatomic ideal gas at 360 K expands reversibly and adiabatically until its volume doubles. Find T₂.",
    solution:
      "For γ = 5/3, T₂ = T₁(V₁/V₂)^(γ−1) = 360(1/2)^(2/3) ≈ 226.8 K.",
  },
  {
    title: "Concept Application 2 — pressure ratio",
    question:
      "A diatomic ideal gas with γ = 1.40 expands reversibly and adiabatically from 8.0 bar to 1.0 bar at an initial temperature of 420 K. Find T₂.",
    solution:
      "Use T₂/T₁ = (P₂/P₁)^((γ−1)/γ). Thus T₂ = 420(1/8)^(0.4/1.4) ≈ 231.9 K.",
  },
  {
    title: "Concept Application 3 — work from temperatures",
    question:
      "Three moles of an ideal gas with γ = 1.30 cool from 500 K to 350 K adiabatically. Calculate w.",
    solution:
      "Cv,m = R/(γ−1) = R/0.30. Therefore w = ΔU = nCv,mΔT = 3(R/0.30)(−150) ≈ −12.47 kJ.",
  },
  {
    title: "Concept Application 4 — work from endpoint PV values",
    question:
      "For a reversible adiabatic process with γ = 1.40, P₁V₁ = 10.0 kJ and P₂V₂ = 7.2 kJ. Find chemistry-sign work.",
    solution:
      "w = (P₂V₂−P₁V₁)/(γ−1) = (7.2−10.0)/0.40 = −7.0 kJ.",
  },
  {
    title: "Concept Application 5 — slope comparison",
    question:
      "At the same point on a P–V graph, compare the slopes of an ideal-gas isotherm and reversible adiabat.",
    solution:
      "Isothermal slope is (dP/dV)T = −P/V. Adiabatic slope is (dP/dV)S = −γP/V. Since γ > 1, the adiabat is steeper in magnitude.",
  },
  {
    title: "Concept Application 6 — same final volume",
    question:
      "From the same initial state, an ideal gas expands adiabatically to a fixed final volume by a reversible path and by a one-step path. Which has the higher final temperature?",
    solution:
      "The one-step irreversible expansion has the higher final temperature because it delivers less work. The reversible path loses more internal energy and cools more.",
  },
  {
    title: "Concept Application 7 — adiabatic versus isentropic",
    question:
      "An insulated gas expands through a finite pressure difference. Is ΔS necessarily zero?",
    solution:
      "No. q = 0, but irreversibility produces entropy. Only a reversible adiabatic process is isentropic for the stated closed simple system.",
  },
  {
    title: "Concept Application 8 — free expansion of a real gas",
    question:
      "A real gas freely expands in an insulated container. What is fixed, and what may change?",
    solution:
      "q = 0, w = 0 and therefore ΔU = 0. Because U may depend on T and V, temperature may change. An attraction-dominated gas often cools during expansion.",
  },
  {
    title: "Concept Application 9 — derive pressure relation",
    question:
      "Starting from TV^(γ−1) = constant and PV = nRT, derive PV^γ = constant.",
    solution:
      "Write T = PV/(nR). Then TV^(γ−1) = [PV/(nR)]V^(γ−1) = PV^γ/(nR). Since nR is constant, PV^γ is constant.",
  },
  {
    title: "Concept Application 10 — derive temperature–pressure relation",
    question:
      "Derive a relation involving only T and P for a reversible adiabatic ideal-gas process.",
    solution:
      "Eliminate V using V = nRT/P in TV^(γ−1) = constant. This gives T^γP^(1−γ) = constant, or T P^((1−γ)/γ) = constant.",
  },
  {
    title: "Concept Application 11 — one-step final temperature equation",
    question:
      "An ideal gas expands adiabatically against constant Pext to a final equilibrium pressure P₂ = Pext. Write the equation that determines T₂ from P₁, T₁, n and Cv,m.",
    solution:
      "Use nCv,m(T₂−T₁) = −P₂[nRT₂/P₂ − nRT₁/P₁]. This implicit linear equation can be solved directly for T₂.",
  },
  {
    title: "Concept Application 12 — validity audit",
    question:
      "A student applies PV^γ = constant to an abrupt piston expansion. Identify the error.",
    solution:
      "PV^γ = constant requires a reversible adiabatic ideal-gas path with suitable heat-capacity assumptions. An abrupt expansion is irreversible, so intermediate equilibrium pressure is not defined and the Poisson relation is invalid.",
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
    "Adiabatic means temperature remains constant.",
    "Incorrect",
    "Adiabatic means q = 0. Temperature generally changes when work changes internal energy.",
  ],
  [
    "Every adiabatic process obeys PV^γ = constant.",
    "Incorrect",
    "The relation is restricted to a reversible ideal-gas path with suitable heat-capacity assumptions.",
  ],
  [
    "Every adiabatic process is isentropic.",
    "Incorrect",
    "Only a reversible adiabatic process is isentropic for the stated closed simple system.",
  ],
  [
    "Reversible adiabatic expansion is less steep than an isotherm.",
    "Incorrect",
    "Its P–V slope magnitude is γP/V, larger than the isothermal magnitude P/V.",
  ],
  [
    "Free expansion has zero work, so it is reversible.",
    "Incorrect",
    "It is driven by a finite pressure imbalance and is strongly irreversible.",
  ],
  [
    "A one-step adiabatic path can use Poisson relations at every stage.",
    "Incorrect",
    "Only initial and final equilibrium states are well-defined; use the First Law with Pext.",
  ],
  [
    "For the same final volume, irreversible expansion cools more than reversible expansion.",
    "Incorrect",
    "It performs less work and therefore cools less; its final temperature is higher.",
  ],
  [
    "The classical value γ = 7/5 is exact for every diatomic gas at every temperature.",
    "Incorrect",
    "Vibrational excitation and non-ideal effects can change heat capacities and γ.",
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
      title: "Bicycle pump warms",
      text: "Rapid compression leaves little time for heat to escape. Positive work raises the gas internal energy and temperature.",
      tone: "amber" as Tone,
    },
    {
      title: "Aerosol spray feels cold",
      text: "Rapid expansion and evaporation remove energy from the remaining fluid. The combined process is not a perfect textbook adiabat, but adiabatic cooling is part of the effect.",
      tone: "cyan" as Tone,
    },
    {
      title: "Cloud formation",
      text: "Rising air encounters lower pressure, expands and cools approximately adiabatically. Cooling promotes condensation when saturation is reached.",
      tone: "sky" as Tone,
    },
    {
      title: "Diesel ignition",
      text: "Rapid compression raises air temperature enough for injected fuel to ignite. Real cylinders include losses, but adiabatic compression gives the core model.",
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

export default function ThermodynamicsPart10() {
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
            <Chip tone="amber">ADIABATIC PROCESS ENGINE</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Ideal-Gas Process Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                No heat crosses—so work writes the temperature history
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                In an adiabatic process, the boundary blocks heat transfer. Expansion spends internal energy and cools
                the gas; compression stores work as internal energy and warms it.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Adiabatic core
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-amber-400/10 p-4">
                  <p className="font-black text-amber-200">Boundary condition</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">q = 0</p>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-4">
                  <p className="font-black text-cyan-200">First Law</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">ΔU = w</p>
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4">
                  <p className="font-black text-emerald-200">Reversible ideal gas</p>
                  <p className="mt-1 font-mono text-lg font-black text-white">PV^γ = constant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Adiabatic expansion and compression"
          subtitle="Adiabatic is a heat-transfer condition, not a constant-temperature condition."
        >
          <Formula label="Defining condition">
            q = 0
          </Formula>

          <Formula label="Closed-system First Law">
            ΔU = w
          </Formula>

          <Formula label="Fixed-composition ideal gas">
            ΔU = w = nC<sub>V,m</sub>(T₂−T₁)
          </Formula>

          <Formula label="Minimal ideal-gas enthalpy result">
            ΔH = nC<sub>P,m</sub>(T₂−T₁)
          </Formula>

          <AdiabaticPistonAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Expansion" tone="emerald">
              The gas performs work, so w &lt; 0. Internal energy decreases and an ideal gas generally cools.
            </ConceptLens>
            <ConceptLens title="Compression" tone="rose">
              The surroundings perform work on the gas, so w &gt; 0. Internal energy and temperature rise.
            </ConceptLens>
          </div>
        </Section>

        <Section
          index="02"
          title="Heat-capacity ratio γ"
          subtitle="Only the minimum heat-capacity framework needed for process equations."
        >
          <Formula label="Ideal-gas relation">
            C<sub>P,m</sub> − C<sub>V,m</sub> = R
          </Formula>

          <Formula label="Adiabatic index">
            γ = C<sub>P,m</sub>/C<sub>V,m</sub>
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Solve for Cv,m">
              C<sub>V,m</sub> = R/(γ−1)
            </Formula>
            <Formula label="Solve for Cp,m">
              C<sub>P,m</sub> = γR/(γ−1)
            </Formula>
          </div>

          <GammaCards />

          <ConceptLens title="Temperature dependence" tone="amber">
            C<sub>P,m</sub>, C<sub>V,m</sub> and γ can vary with temperature. The simple Poisson equations assume they
            are effectively constant over the process range.
          </ConceptLens>
        </Section>

        <Section
          index="03"
          title="Derivation of the reversible adiabatic relation"
          subtitle="Every step, assumption and substitution made explicit."
        >
          <DerivationLadder />

          <ConceptLens title="Required assumptions" tone="rose">
            Closed system; fixed composition; ideal-gas equation; only pressure–volume work; reversible mechanical path;
            q = 0; and heat capacities treated as constant over the interval.
          </ConceptLens>
        </Section>

        <Section index="04" title="Poisson relations">
          <div className="grid gap-4 md:grid-cols-3">
            <Formula label="Temperature–volume">
              TV<sup>γ−1</sup> = constant
            </Formula>
            <Formula label="Pressure–volume">
              PV<sup>γ</sup> = constant
            </Formula>
            <Formula label="Temperature–pressure">
              T<sup>γ</sup>P<sup>1−γ</sup> = constant
            </Formula>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Formula label="Endpoint TV form">
              T₂/T₁ = (V₁/V₂)<sup>γ−1</sup>
            </Formula>
            <Formula label="Endpoint PV form">
              P₂/P₁ = (V₁/V₂)<sup>γ</sup>
            </Formula>
            <Formula label="Endpoint TP form">
              T₂/T₁ = (P₂/P₁)<sup>(γ−1)/γ</sup>
            </Formula>
          </div>

          <ConceptLens title="Validity boundary" tone="violet">
            These equations are not definitions of every adiabatic process. They are path equations for a reversible
            adiabatic ideal-gas process under the stated heat-capacity approximation.
          </ConceptLens>
        </Section>

        <Section index="05" title="Reversible adiabatic work">
          <div className="grid gap-4 md:grid-cols-3">
            <Formula label="Temperature form">
              w<sub>rev</sub> = nC<sub>V,m</sub>(T₂−T₁)
            </Formula>
            <Formula label="Using γ">
              w<sub>rev</sub> = nR(T₂−T₁)/(γ−1)
            </Formula>
            <Formula label="Endpoint PV form">
              w<sub>rev</sub> = (P₂V₂−P₁V₁)/(γ−1)
            </Formula>
          </div>

          <ConceptLens title="Expansion sign" tone="cyan">
            Reversible adiabatic expansion has T₂ &lt; T₁, so every work form gives w &lt; 0 in the chemistry convention.
          </ConceptLens>
        </Section>

        <Section index="06" title="Adiabatic versus isothermal curves">
          <TripleGraphAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Isothermal P–V slope">
              (dP/dV)<sub>T</sub> = −P/V
            </Formula>
            <Formula label="Adiabatic P–V slope">
              (dP/dV)<sub>ad,rev</sub> = −γP/V
            </Formula>
          </div>

          <ConceptLens title="Why the adiabat is steeper" tone="emerald">
            Isothermal expansion receives heat to maintain temperature. Adiabatic expansion receives no heat, so pressure
            falls both because volume rises and because temperature drops.
          </ConceptLens>

          <ConceptLens title="Work comparison needs endpoint clarity" tone="amber">
            From the same initial state to the same larger final volume, the reversible isothermal path has greater
            expansion-work magnitude because its pressure remains higher. The final temperatures, and therefore final states,
            are different.
          </ConceptLens>
        </Section>

        <Section
          index="07"
          title="Irreversible adiabatic process"
          subtitle="Use the actual external pressure, not Poisson relations."
        >
          <Formula label="Constant external pressure">
            nC<sub>V,m</sub>(T₂−T₁) = −P<sub>ext</sub>(V₂−V₁)
          </Formula>

          <Formula label="General endpoint strategy">
            combine the First Law with P₁V₁ = nRT₁ and P₂V₂ = nRT₂
          </Formula>

          <PathComparisonAnimation />

          <ConceptLens title="Same initial state and same final volume" tone="violet">
            Reversible expansion performs the greatest work and therefore produces the lowest final temperature.
            A one-step expansion cools less. Ideal-gas free expansion performs no work and does not cool.
          </ConceptLens>
        </Section>

        <Section index="08" title="Adiabatic free expansion">
          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Boundary conditions">
              q = 0 and P<sub>ext</sub> = 0
            </Formula>
            <Formula label="Energy balance">
              w = 0 ⇒ ΔU = 0
            </Formula>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Ideal gas" tone="emerald">
              U = U(T), so ΔU = 0 gives ΔT = 0. The process is both adiabatic and isothermal, but irreversible.
            </ConceptLens>
            <ConceptLens title="Real gas" tone="rose">
              U depends on T and V. Temperature may fall or rise while ΔU remains zero; attraction-dominated gases commonly cool.
            </ConceptLens>
          </div>
        </Section>

        <Section index="09" title="Chapter examples">
          <RetainedExampleOne />
          <RetainedExampleTwo />
        </Section>

        <Section index="10" title="Process-result matrix">
          <ResultMatrix />
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={10} />

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
                q = 0 for every adiabat; Poisson relations only for the reversible ideal-gas path
              </h2>
            </div>
            <Chip tone="emerald">PART 10 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["First Law", "ΔU = w"],
              ["Reversible ideal gas", "PV^γ = constant"],
              ["Expansion", "T falls and w < 0"],
              ["Free ideal-gas expansion", "q = w = ΔU = ΔT = 0"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={10} />


</main>
  );
}
