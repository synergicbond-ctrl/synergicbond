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

function ClausiusInequalityAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="clausius-title clausius-description"
        className="h-auto w-full"
      >
        <title id="clausius-title">Animated derivation map for the Clausius inequality</title>
        <desc id="clausius-description">
          Reversible and irreversible paths connect the same neighbouring states.
          Reversible work has the greatest expansion-work magnitude or least compression-work input,
          which leads to reversible heat being greater than actual irreversible heat and therefore dS greater than or equal to delta q divided by boundary temperature.
        </desc>

        <defs>
          <marker id="ciGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="ciRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          CLAUSIUS INEQUALITY: REVERSIBILITY SETS THE EQUALITY LIMIT
        </text>

        <circle cx="145" cy="350" r="64" fill="#0f172a" stroke="#22d3ee" strokeWidth="7" />
        <text x="145" y="342" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">STATE 1</text>
        <text x="145" y="378" fill="#cbd5e1" fontSize="16" textAnchor="middle">equilibrium</text>

        <circle cx="1055" cy="350" r="64" fill="#0f172a" stroke="#34d399" strokeWidth="7" />
        <text x="1055" y="342" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">STATE 2</text>
        <text x="1055" y="378" fill="#cbd5e1" fontSize="16" textAnchor="middle">equilibrium</text>

        <path id="ciRevPath" d="M215 300 C430 120 760 120 985 300" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#ciGreen)" />
        <path id="ciIrrPath" d="M215 400 C430 585 760 585 985 400" fill="none" stroke="#fb7185" strokeWidth="5" markerEnd="url(#ciRose)" />

        <circle r="13" fill="#86efac">
          <animateMotion dur="4.6s" repeatCount="indefinite">
            <mpath href="#ciRevPath" />
          </animateMotion>
        </circle>
        <circle r="13" fill="#fda4af">
          <animateMotion dur="3.4s" repeatCount="indefinite">
            <mpath href="#ciIrrPath" />
          </animateMotion>
        </circle>

        <text x="600" y="155" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">
          reversible reference path
        </text>
        <text x="600" y="560" fill="#fda4af" fontSize="22" fontWeight="900" textAnchor="middle">
          actual irreversible path
        </text>

        <rect x="315" y="230" width="570" height="110" rx="24" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="273" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          dS = δqrev / T
        </text>
        <text x="600" y="311" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          equality for an internally reversible infinitesimal step
        </text>

        <rect x="315" y="390" width="570" height="110" rx="24" fill="#0f172a" stroke="#fb7185" strokeWidth="4" />
        <text x="600" y="433" fill="#fda4af" fontSize="20" fontWeight="900" textAnchor="middle">
          dS &gt; δqirr / Tb
        </text>
        <text x="600" y="471" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          strict inequality when entropy is generated
        </text>

        <rect x="255" y="645" width="690" height="55" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="681" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          Unified form: dS = δq/Tb + dSgen, with dSgen ≥ 0
        </text>
      </svg>
    </div>
  );
}

function EntropyLedgerAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="ledger-title ledger-description"
        className="h-auto w-full"
      >
        <title id="ledger-title">Entropy ledger for system, surroundings, and universe</title>
        <desc id="ledger-description">
          Entropy may cross the system boundary with heat and may also be generated inside by irreversibility.
          The surroundings have their own entropy change, and the universe total is the sum of system and surroundings.
        </desc>

        <defs>
          <marker id="elCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="elAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ENTROPY ACCOUNTING: TRANSFER + GENERATION
        </text>

        <rect x="355" y="155" width="490" height="350" rx="42" fill="#0f172a" stroke="#a78bfa" strokeWidth="9" />
        <text x="600" y="215" fill="#ddd6fe" fontSize="30" fontWeight="900" textAnchor="middle">SYSTEM</text>

        <path d="M175 330 H340" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#elCyan)">
          <animate attributeName="stroke-dasharray" values="0 180;90 90;180 0" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="255" y="300" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">
          δQ/Tb
        </text>
        <text x="255" y="365" fill="#cbd5e1" fontSize="17" textAnchor="middle">
          entropy transfer
        </text>

        {[0,1,2,3,4,5].map((i) => (
          <circle
            key={i}
            cx={465 + (i % 3) * 135}
            cy={320 + Math.floor(i / 3) * 90}
            r="12"
            fill="#fde047"
          >
            <animate attributeName="r" values={`${8+i};${18+i};${8+i}`} dur={`${1.4+i*0.15}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;1;0.35" dur={`${1.4+i*0.15}s`} repeatCount="indefinite" />
          </circle>
        ))}

        <text x="600" y="300" fill="#fde68a" fontSize="23" fontWeight="900" textAnchor="middle">
          dSgen ≥ 0
        </text>
        <text x="600" y="455" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          friction • finite gradients • mixing • free expansion
        </text>

        <path d="M860 330 H1025" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#elAmber)">
          <animate attributeName="stroke-dasharray" values="180 0;90 90;0 180" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="945" y="300" fill="#fde68a" fontSize="23" fontWeight="900" textAnchor="middle">
          entropy out
        </text>

        <rect x="95" y="580" width="1010" height="100" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="600" y="620" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">
          ΔSuniverse = ΔSsystem + ΔSsurroundings = Sgen,total ≥ 0
        </text>
        <text x="600" y="658" fill="#cbd5e1" fontSize="17" textAnchor="middle">
          Internal entropy generation cannot be negative, but a system’s entropy may decrease by exporting more entropy than it generates.
        </text>
      </svg>
    </div>
  );
}

function ExpansionCompressionAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 850"
        role="img"
        aria-labelledby="expcomp-title expcomp-description"
        className="h-auto w-full"
      >
        <title id="expcomp-title">Reversible and irreversible expansion and compression entropy comparison</title>
        <desc id="expcomp-description">
          Four piston cases compare reversible expansion, irreversible expansion, reversible compression,
          and irreversible compression, with entropy generation appearing only in irreversible cases.
        </desc>

        <rect width="1200" height="850" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          EXPANSION AND COMPRESSION: SAME ENDPOINT ΔS, DIFFERENT UNIVERSE ENTROPY
        </text>

        {[
          { x: 55, y: 110, title: "REVERSIBLE EXPANSION", stroke: "#34d399", piston: "320;215;320", total: "ΔStotal = 0" },
          { x: 615, y: 110, title: "IRREVERSIBLE EXPANSION", stroke: "#fb7185", piston: "320;200;260;210;320", total: "ΔStotal > 0" },
          { x: 55, y: 455, title: "REVERSIBLE COMPRESSION", stroke: "#22d3ee", piston: "215;320;215", total: "ΔStotal = 0" },
          { x: 615, y: 455, title: "IRREVERSIBLE COMPRESSION", stroke: "#fbbf24", piston: "210;335;285;330;210", total: "ΔStotal > 0" },
        ].map((item, index) => (
          <g key={item.title}>
            <text x={item.x + 250} y={item.y + 35} fill={item.stroke} fontSize="22" fontWeight="900" textAnchor="middle">
              {item.title}
            </text>
            <path d={`M${item.x+70} ${item.y+250} V${item.y+75} H${item.x+430} V${item.y+250}`} fill="none" stroke={item.stroke} strokeWidth="5" />
            <rect x={item.x + 100} y={item.y + 180} width="300" height="24" rx="8" fill={item.stroke}>
              <animate attributeName="y" values={item.piston} dur={`${4.6 + index*0.35}s`} repeatCount="indefinite" />
            </rect>
            <line x1={item.x + 250} y1={item.y + 75} x2={item.x + 250} y2={item.y + 180} stroke={item.stroke} strokeWidth="14" strokeLinecap="round">
              <animate attributeName="y2" values={item.piston} dur={`${4.6 + index*0.35}s`} repeatCount="indefinite" />
            </line>

            {[0,1,2,3,4,5].map((i) => (
              <circle
                key={i}
                cx={item.x + 125 + (i % 3) * 125}
                cy={item.y + 220 + Math.floor(i / 3) * 55}
                r="9"
                fill={index < 2 ? "#fde047" : "#67e8f9"}
              >
                <animate
                  attributeName={i % 2 ? "cx" : "cy"}
                  values={
                    i % 2
                      ? `${item.x+105+(i%3)*125};${item.x+150+(i%3)*110};${item.x+105+(i%3)*125}`
                      : `${item.y+205+Math.floor(i/3)*55};${item.y+235+Math.floor(i/3)*55};${item.y+205+Math.floor(i/3)*55}`
                  }
                  dur={`${1.5+i*0.17}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            <rect x={item.x + 95} y={item.y + 275} width="310" height="48" rx="20" fill="#0f172a" stroke={item.stroke} strokeWidth="4" />
            <text x={item.x + 250} y={item.y + 307} fill={item.stroke} fontSize="20" fontWeight="900" textAnchor="middle">
              {item.total}
            </text>
          </g>
        ))}

        <text x="600" y="825" fill="#94a3b8" fontSize="18" textAnchor="middle">
          System entropy is fixed by endpoints; irreversibility changes the surroundings balance and creates positive total entropy.
        </text>
      </svg>
    </div>
  );
}

function MaximumEntropyAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 740"
        role="img"
        aria-labelledby="maxs-title maxs-description"
        className="h-auto w-full"
      >
        <title id="maxs-title">Maximum entropy criterion for isolated-system equilibrium</title>
        <desc id="maxs-description">
          Entropy increases as an isolated system evolves toward equilibrium. At the stable equilibrium state,
          entropy is at a maximum under the fixed constraints.
        </desc>

        <defs>
          <marker id="msGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="740" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ISOLATED-SYSTEM EQUILIBRIUM OCCURS AT MAXIMUM ENTROPY
        </text>

        <line x1="125" y1="620" x2="1090" y2="620" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="125" y1="620" x2="125" y2="100" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1115" y="632" fill="#e2e8f0" fontSize="24">extent coordinate ξ</text>
        <text x="95" y="90" fill="#e2e8f0" fontSize="24">S</text>

        <path id="maxSPath" d="M180 555 C340 455 500 175 690 145 C845 120 970 300 1040 500" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#msGreen)" />

        <circle r="14" fill="#fde047">
          <animateMotion dur="5.5s" repeatCount="indefinite">
            <mpath href="#maxSPath" />
          </animateMotion>
        </circle>

        <line x1="690" y1="145" x2="690" y2="620" stroke="#a78bfa" strokeWidth="4" strokeDasharray="14 11" />
        <text x="690" y="112" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">stable equilibrium</text>

        <rect x="210" y="655" width="780" height="50" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="688" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">
          At fixed U, V, N: (∂S/∂ξ) = 0 and (∂²S/∂ξ²) &lt; 0
        </text>
      </svg>
    </div>
  );
}

function ClausiusDerivation() {
  const steps = [
    {
      title: "1. Entropy definition",
      equation: "dS = δqrev/T",
      text: "Use a reversible path connecting the same neighbouring equilibrium states.",
      tone: "cyan" as Tone,
    },
    {
      title: "2. Compare heat transfers",
      equation: "δqrev − δqirr = δwirr − δwrev",
      text: "Because dU is the same state-function change for both paths.",
      tone: "violet" as Tone,
    },
    {
      title: "3. Pressure–volume work",
      equation: "δqrev − δqirr = (P − Pext)dV",
      text: "Using δwrev = −P dV and δwirr = −Pext dV.",
      tone: "amber" as Tone,
    },
    {
      title: "4. Expansion sign",
      equation: "P > Pext and dV > 0",
      text: "The product (P−Pext)dV is positive.",
      tone: "emerald" as Tone,
    },
    {
      title: "5. Compression sign",
      equation: "P < Pext and dV < 0",
      text: "The product is again positive.",
      tone: "rose" as Tone,
    },
    {
      title: "6. Inequality",
      equation: "dS ≥ δq/Tb",
      text: "Equality holds for a reversible step; strict inequality for an irreversible step.",
      tone: "sky" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <article key={step.title} className={`rounded-3xl border p-5 ${toneMap[step.tone]}`}>
          <h3 className="text-lg font-black text-white">{step.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {step.equation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{step.text}</p>
        </article>
      ))}
    </div>
  );
}

function UniverseCriteriaTable() {
  const rows = [
    ["Reversible process", "ΔSuniverse = 0", "No entropy generation", "ideal limiting path"],
    ["Irreversible spontaneous process", "ΔSuniverse > 0", "Positive entropy generation", "natural real process"],
    ["Proposed non-spontaneous isolated change", "ΔSuniverse < 0", "Forbidden unless coupled/driven", "cannot occur as the sole isolated change"],
    ["Stable isolated equilibrium", "S is maximum", "No remaining macroscopic driving force", "first variation zero; stable maximum"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Situation</th>
            <th className="px-4 py-3 font-black text-white">Entropy criterion</th>
            <th className="px-4 py-3 font-black text-white">Generation statement</th>
            <th className="px-4 py-3 font-black text-white">Meaning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([situation, criterion, generation, meaning]) => (
            <tr key={situation}>
              <td className="px-4 py-3 font-semibold text-slate-100">{situation}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{criterion}</td>
              <td className="px-4 py-3 text-slate-300">{generation}</td>
              <td className="px-4 py-3 text-slate-300">{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SurroundingsCorrection() {
  const rows = [
    [
      "“State functions are defined only for the system.”",
      "Incorrect.",
      "The surroundings can also be modelled as a thermodynamic system with U, H, S, T, P and other properties.",
    ],
    [
      "“The change of the surroundings is always reversible.”",
      "Incorrect as a universal statement.",
      "Textbook surroundings are often idealised as a large internally equilibrated reservoir, so ΔSsurr = qsurr/Tsurr can be evaluated simply. The combined real process may still be irreversible.",
    ],
    [
      "“Entropy may be created but never destroyed.”",
      "Correct only for entropy generation.",
      "Sgen ≥ 0. A system’s entropy itself may decrease when entropy exported with heat exceeds entropy generated internally.",
    ],
    [
      "“At equilibrium dS = 0.”",
      "Needs constraints.",
      "For a stable isolated system at fixed U, V and composition constraints, the first variation of S vanishes and S is a maximum.",
    ],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Chapter shorthand</th>
            <th className="px-4 py-3 font-black text-white">Audit</th>
            <th className="px-4 py-3 font-black text-white">Scientifically precise form</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([source, audit, correction]) => (
            <tr key={source}>
              <td className="px-4 py-3 font-semibold text-slate-100">{source}</td>
              <td className="px-4 py-3 text-amber-300">{audit}</td>
              <td className="px-4 py-3 leading-6 text-slate-300">{correction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IsothermalExpansionWorkedExample() {
  return (
    <article className="rounded-[2rem] border border-emerald-300/25 bg-emerald-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Original Synergic Bond worked example
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Reversible, one-step, and free isothermal expansions between the same states
          </h3>
        </div>
        <Chip tone="emerald">UNIVERSE ENTROPY COMPARISON</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        One mole of ideal gas expands isothermally at 300 K from 10.0 L to 20.0 L.
        Compare the entropy changes for: (i) reversible expansion, (ii) one-step expansion
        against the final equilibrium pressure, and (iii) insulated free expansion.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="System entropy change for all three paths">
          ΔS<sub>sys</sub> = R ln(V₂/V₁) = R ln2 = 5.763 J K⁻¹
        </Formula>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Reversible</p>
            <div className="mt-4 space-y-3">
              <Formula label="Heat absorbed">
                q<sub>rev</sub> = RT ln2 = 1.729 kJ
              </Formula>
              <Formula label="Surroundings">
                ΔS<sub>surr</sub> = −q/T = −5.763 J K⁻¹
              </Formula>
              <Formula label="Universe">
                ΔS<sub>univ</sub> = 0
              </Formula>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">One-step at Pext = P₂</p>
            <div className="mt-4 space-y-3">
              <Formula label="Final pressure">
                P₂ = RT/V₂
              </Formula>
              <Formula label="Actual heat">
                q = P₂(V₂−V₁) = RT/2 = 1.247 kJ
              </Formula>
              <Formula label="Surroundings">
                ΔS<sub>surr</sub> = −q/T = −R/2 = −4.157 J K⁻¹
              </Formula>
              <Formula label="Universe">
                ΔS<sub>univ</sub> = R(ln2−1/2) = 1.606 J K⁻¹
              </Formula>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">Insulated free expansion</p>
            <div className="mt-4 space-y-3">
              <Formula label="Boundary transfers">
                q = 0 and w = 0
              </Formula>
              <Formula label="Surroundings">
                ΔS<sub>surr</sub> = 0
              </Formula>
              <Formula label="Universe">
                ΔS<sub>univ</sub> = R ln2 = 5.763 J K⁻¹
              </Formula>
            </div>
          </div>
        </div>
      </div>

      <ConceptLens title="Irreversibility ranking" tone="violet">
        The endpoints give the same {String.raw`\(\Delta S_{\mathrm{sys}}\)`}, but entropy generation increases as the path becomes less controlled:
        reversible {String.raw`\(0\)`}, one-step finite-pressure expansion {String.raw`\(1.606\ \mathrm{J\,K^{-1}}\)`}, and free expansion {String.raw`\(5.763\ \mathrm{J\,K^{-1}}\)`}.
      </ConceptLens>
    </article>
  );
}

function IsothermalCompressionWorkedExample() {
  return (
    <article className="rounded-[2rem] border border-violet-300/25 bg-violet-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
            Original Synergic Bond compression audit
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Sudden isothermal compression against the final pressure
          </h3>
        </div>
        <Chip tone="violet">SIGN-CORRECT SOLUTION</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        One mole of ideal gas at 300 K is compressed isothermally from 20.0 L to 10.0 L
        against a constant external pressure equal to the final gas pressure.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Formula label="System entropy change">
          ΔS<sub>sys</sub> = R ln(10/20) = −R ln2 = −5.763 J K⁻¹
        </Formula>
        <Formula label="Work on gas">
          w = −P₂(V₂−V₁) = +RT = +2.494 kJ
        </Formula>
        <Formula label="Heat rejected">
          q = −w = −2.494 kJ
        </Formula>
        <Formula label="Surroundings entropy">
          ΔS<sub>surr</sub> = −q/T = +R = +8.314 J K⁻¹
        </Formula>
      </div>

      <Formula label="Universe entropy">
        ΔS<sub>univ</sub> = R(1−ln2) = 2.551 J K⁻¹ &gt; 0
      </Formula>

      <ConceptLens title="A system may lose entropy during a spontaneous process" tone="amber">
        The gas entropy decreases, but the surroundings gain still more entropy. The Second Law constrains the total,
        not the sign of {String.raw`\(\Delta S_{\mathrm{sys}}\)`} alone.
      </ConceptLens>
    </article>
  );
}

function HeatFlowWorkedExample() {
  return (
    <article className="rounded-[2rem] border border-amber-300/25 bg-amber-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Original finite-temperature-gradient example
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Heat transfer from 400 K to 300 K
          </h3>
        </div>
        <Chip tone="amber">ENTROPY GENERATION</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        A quantity of 600 J passes directly from a 400 K reservoir to a 300 K reservoir.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Formula label="Hot reservoir">
          ΔS<sub>hot</sub> = −600/400 = −1.50 J K⁻¹
        </Formula>
        <Formula label="Cold reservoir">
          ΔS<sub>cold</sub> = +600/300 = +2.00 J K⁻¹
        </Formula>
        <Formula label="Universe">
          ΔS<sub>univ</sub> = +0.50 J K⁻¹
        </Formula>
      </div>

      <ConceptLens title="Finite temperature difference creates entropy" tone="rose">
        The transfer conserves energy, yet it is irreversible because the reservoirs are separated by a finite temperature difference.
      </ConceptLens>
    </article>
  );
}

const problems = [
  {
    title: "Concept Application 1 — inequality sign",
    question:
      "For a closed system undergoing an irreversible process, write the differential entropy balance.",
    solution:
      "dS = δQ/Tb + dSgen, where Tb is the boundary temperature at the location of heat transfer and dSgen > 0 for an irreversible process.",
  },
  {
    title: "Concept Application 2 — reversible limit",
    question:
      "What conditions make the Clausius inequality an equality?",
    solution:
      "The process must be internally reversible and heat must cross the boundary through an infinitesimal temperature difference, so dSgen = 0.",
  },
  {
    title: "Concept Application 3 — isolated adiabatic free expansion",
    question:
      "An ideal gas freely expands in an insulated container. Determine ΔSsurr and the sign of ΔSsys.",
    solution:
      "ΔSsurr = 0 because no heat crosses the outer boundary. ΔSsys = nR ln(V₂/V₁) > 0, so all of the increase is entropy generation.",
  },
  {
    title: "Concept Application 4 — reversible adiabat",
    question:
      "A gas expands reversibly and adiabatically. Find ΔSsys, ΔSsurr and ΔSuniv.",
    solution:
      "All three are zero: q = 0 and dSgen = 0, so the process is isentropic.",
  },
  {
    title: "Concept Application 5 — entropy export",
    question:
      "Can ΔSsystem be negative in a real spontaneous process?",
    solution:
      "Yes. A system may export entropy with heat faster than it generates entropy internally. The required condition is ΔSuniverse ≥ 0.",
  },
  {
    title: "Concept Application 6 — reservoir formula",
    question:
      "A large reservoir at constant temperature T receives heat Q. Find its entropy change.",
    solution:
      "ΔSreservoir = Q/T, with Q positive when heat is absorbed by the reservoir.",
  },
  {
    title: "Concept Application 7 — two-reservoir transfer",
    question:
      "Heat Q passes from TH to TC, where TH > TC. Derive the universe entropy change.",
    solution:
      "ΔSuniv = −Q/TH + Q/TC = Q(1/TC−1/TH) > 0.",
  },
  {
    title: "Concept Application 8 — impossible proposal",
    question:
      "An isolated system is proposed to undergo a change with ΔS = −3 J K⁻¹. Can it occur spontaneously?",
    solution:
      "No. For an isolated system, ΔS = Sgen ≥ 0. The proposed change requires external coupling or is impossible as stated.",
  },
  {
    title: "Concept Application 9 — equilibrium maximum",
    question:
      "State the local stability conditions for an isolated system at equilibrium along an allowed coordinate ξ.",
    solution:
      "At fixed constraints, (∂S/∂ξ) = 0 and stability requires (∂²S/∂ξ²) < 0.",
  },
  {
    title: "Concept Application 10 — one-step expansion inequality",
    question:
      "For an isothermal ideal-gas expansion ending at P₂ = Pext, show ΔSuniv > 0.",
    solution:
      "Let x = V₂/V₁ > 1. Then ΔSuniv/Rn = ln x − (1−1/x). Since ln x > 1−1/x for x > 1, the total is positive.",
  },
  {
    title: "Concept Application 11 — one-step compression inequality",
    question:
      "For sudden isothermal compression from V₁ to V₂ against Pext = P₂, prove positive entropy generation.",
    solution:
      "Let x = V₁/V₂ > 1. Then ΔSuniv/Rn = x−1−ln x > 0 for x > 1.",
  },
  {
    title: "Concept Application 12 — surroundings correction",
    question:
      "Why is it wrong to say that the surroundings are always reversible?",
    solution:
      "Real surroundings may contain finite gradients, friction and mixing. A reservoir is only an ideal internally equilibrated model used to calculate its entropy change simply.",
  },
  {
    title: "Concept Application 13 — cyclic Clausius inequality",
    question:
      "Write the Clausius inequality for any cyclic device exchanging heats δQk with reservoirs at Tk.",
    solution:
      "The cyclic sum satisfies ∮δQ/T ≤ 0, or for discrete reservoirs ΣQk/Tk ≤ 0, with equality only for a reversible cycle.",
  },
  {
    title: "Concept Application 14 — entropy generation from work loss",
    question:
      "A process destroys 6.0 kJ of work potential in an environment at 300 K. Find Sgen.",
    solution:
      "Sgen = Wlost/T0 = 6000/300 = 20 J K⁻¹.",
  },
  {
    title: "Concept Application 15 — stable versus unstable extremum",
    question:
      "Why is dS = 0 alone insufficient to prove stable equilibrium?",
    solution:
      "A stationary point may be a maximum, minimum or saddle point. Stable isolated equilibrium requires a local maximum of entropy under the allowed constraints.",
  },
  {
    title: "Concept Application 16 — system plus surroundings",
    question:
      "A system entropy decreases by 8 J K⁻¹ while its surroundings increase by 11 J K⁻¹. Classify the process.",
    solution:
      "ΔSuniv = +3 J K⁻¹, so the process is thermodynamically possible and irreversible.",
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
    "Entropy of every system must increase.",
    "Incorrect",
    "The entropy of the isolated universe cannot decrease. A subsystem may lose entropy by exporting it.",
  ],
  [
    "Adiabatic means isentropic.",
    "Incorrect",
    "Adiabatic only means q = 0. Entropy remains constant only when the adiabatic process is reversible.",
  ],
  [
    "The surroundings have no state functions.",
    "Incorrect",
    "The surroundings can be treated as another thermodynamic system with its own state properties.",
  ],
  [
    "The surroundings are always reversible.",
    "Incorrect",
    "Only an ideal reservoir model is maintained in internal equilibrium; the total real process may be irreversible.",
  ],
  [
    "Entropy is destroyed when a system cools.",
    "Incorrect",
    "A system may export entropy. Entropy generation itself is never negative.",
  ],
  [
    "At equilibrium ΔS is always zero for every imagined change.",
    "Incorrect",
    "At stable isolated equilibrium the first variation vanishes for allowed infinitesimal changes, and entropy is locally maximal.",
  ],
  [
    "If ΔSsystem = 0, the process is reversible.",
    "Incorrect",
    "An irreversible steady or cyclic system may have zero state change while generating entropy and exporting it.",
  ],
  [
    "Clausius inequality uses the system’s average temperature.",
    "Incorrect",
    "Entropy transfer with heat uses the boundary temperature where that heat crosses.",
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
      title: "Coffee cools on a desk",
      text: "The coffee loses entropy, but the room gains more because it receives the heat at a lower temperature. Total entropy increases.",
      tone: "amber" as Tone,
    },
    {
      title: "Gas rushes into a vacuum",
      text: "No heat or work crosses the outer boundary, yet the gas entropy rises through internal entropy generation.",
      tone: "cyan" as Tone,
    },
    {
      title: "Brakes become hot",
      text: "Organised mechanical energy is dissipated by friction. Entropy generation quantifies the destroyed work potential.",
      tone: "rose" as Tone,
    },
    {
      title: "Two gases mix",
      text: "Removal of a separating constraint increases accessible arrangements. Spontaneous mixing generates entropy.",
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

export default function ThermodynamicsPart17() {
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
            <Chip tone="emerald">CLAUSIUS INEQUALITY</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Irreversibility Accounting
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Entropy is transferred with heat—and generated by irreversibility
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Reversible heat defines entropy change. Real processes require an additional non-negative term:
                entropy generation. That single term separates ideal limits from natural irreversible change.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Entropy balance
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-lg font-black text-white">
                  dS ≥ δQ/T<sub>b</sub>
                </div>
                <div className="rounded-xl bg-violet-400/10 p-4 font-mono text-lg font-black text-white">
                  dS = δQ/T<sub>b</sub> + dS<sub>gen</sub>
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-lg font-black text-white">
                  ΔS<sub>universe</sub> ≥ 0
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Clausius inequality"
          subtitle="The reversible path supplies the equality; irreversibility creates the excess entropy."
        >
          <ClausiusInequalityAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Reversible differential">
              dS = δq<sub>rev</sub>/T
            </Formula>
            <Formula label="General differential inequality">
              dS ≥ δq/T<sub>b</sub>
            </Formula>
          </div>

          <Formula label="Unified entropy balance">
            dS = δq/T<sub>b</sub> + dS<sub>gen</sub>, dS<sub>gen</sub> ≥ 0
          </Formula>

          <ConceptLens title="Boundary temperature Tb" tone="amber">
            Entropy transfer with heat is evaluated using the local boundary temperature at which that heat crosses,
            not an arbitrary average temperature of the system.
          </ConceptLens>
        </Section>

        <Section
          index="02"
          title="Chapter pressure–volume derivation"
          subtitle="Retained in sequence and made explicit for expansion and compression."
        >
          <ClausiusDerivation />

          <ConceptLens title="Equality exceptions" tone="violet">
            The chapter note mentions isobaric and isochoric cases as special. The deeper criterion is not the process label:
            equality requires zero entropy generation. An isobaric or isochoric process can still be irreversible.
          </ConceptLens>
        </Section>

        <Section index="03" title="System, surroundings, and universe entropy">
          <EntropyLedgerAnimation />

          <div className="grid gap-4 md:grid-cols-3">
            <Formula label="System">
              ΔS<sub>sys</sub> = entropy transfer + entropy generated inside
            </Formula>
            <Formula label="Surroundings">
              ΔS<sub>surr</sub> = ΣQ<sub>surr,k</sub>/T<sub>surr,k</sub>
            </Formula>
            <Formula label="Universe">
              ΔS<sub>univ</sub> = ΔS<sub>sys</sub> + ΔS<sub>surr</sub>
            </Formula>
          </div>

          <Formula label="Complete Second-Law test">
            ΔS<sub>univ</sub> = S<sub>gen,total</sub> ≥ 0
          </Formula>

          <ConceptLens title="Normally ΔS without a subscript means system entropy" tone="cyan">
            A thermodynamic problem must still calculate the surroundings and universe separately when testing spontaneity or reversibility.
          </ConceptLens>
        </Section>

        <Section index="04" title="Reversible and irreversible expansion/compression">
          <ExpansionCompressionAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Reversible path" tone="emerald">
              The system and surroundings entropy changes cancel exactly:
              {String.raw`\(\Delta S_{\mathrm{sys}}+\Delta S_{\mathrm{surr}}=0\)`}.
            </ConceptLens>
            <ConceptLens title="Irreversible path" tone="rose">
              The system endpoint entropy change remains fixed, but the actual heat/work exchange produces
              {String.raw`\(\Delta S_{\mathrm{univ}}>0\)`}.
            </ConceptLens>
          </div>
        </Section>

        <Section index="05" title="Retained scientific statements—scientific audit">
          <SurroundingsCorrection />
        </Section>

        <Section index="06" title="Spontaneity, impossibility, and equilibrium">
          <UniverseCriteriaTable />
          <MaximumEntropyAnimation />

          <Formula label="Isolated system">
            δQ = 0 ⇒ dS = dS<sub>gen</sub> ≥ 0
          </Formula>

          <Formula label="Stable isolated equilibrium at fixed constraints">
            (∂S/∂ξ) = 0, (∂²S/∂ξ²) &lt; 0
          </Formula>

          <ConceptLens title="Energy and entropy play different roles" tone="amber">
            The energy of an isolated system remains constant. Its entropy may increase until the constrained maximum is reached.
          </ConceptLens>
        </Section>

        <Section index="07" title="Complete expansion comparison">
          <IsothermalExpansionWorkedExample />
        </Section>

        <Section index="08" title="Complete compression comparison">
          <IsothermalCompressionWorkedExample />
        </Section>

        <Section index="09" title="Finite-temperature heat flow">
          <HeatFlowWorkedExample />
        </Section>

        <Section index="10" title="Cyclic Clausius inequality">
          <Formula label="Continuous form">
            ∮ δQ/T<sub>b</sub> ≤ 0
          </Formula>

          <Formula label="Discrete reservoir form">
            Σ<sub>k</sub> Q<sub>k</sub>/T<sub>k</sub> ≤ 0
          </Formula>

          <ConceptLens title="Sign convention" tone="cyan">
            {String.raw`\(Q_k\)`} is positive when heat enters the cyclic device. Equality holds for a reversible cycle;
            a strict negative sum indicates irreversibility.
          </ConceptLens>
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={17} />

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
                Reversibility means zero entropy generation; natural irreversibility means positive generation
              </h2>
            </div>
            <Chip tone="emerald">PART 17 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Clausius inequality", "dS ≥ δQ/Tb"],
              ["Entropy balance", "dS = δQ/Tb + dSgen"],
              ["Universe", "ΔSuniv = Sgen,total ≥ 0"],
              ["Isolated equilibrium", "S reaches a constrained maximum"],
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
