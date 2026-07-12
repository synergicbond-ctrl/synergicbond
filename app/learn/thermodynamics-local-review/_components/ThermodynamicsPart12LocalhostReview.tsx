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

function CycleDirectionAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 700"
        role="img"
        aria-labelledby="cycle-direction-title cycle-direction-description"
        className="h-auto w-full"
      >
        <title id="cycle-direction-title">Animated clockwise and anticlockwise pressure-volume cycles</title>
        <desc id="cycle-direction-description">
          The clockwise loop has negative chemistry work because the gas delivers net work.
          The anticlockwise loop has positive chemistry work because the surroundings supply net work.
        </desc>

        <defs>
          <marker id="cdCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="cdPink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
          <pattern id="cdCyanHatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#22d3ee" strokeWidth="4" opacity="0.35" />
          </pattern>
          <pattern id="cdPinkHatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#f472b6" strokeWidth="4" opacity="0.35" />
          </pattern>
        </defs>

        <rect width="1200" height="700" rx="34" fill="#020617" />

        <text x="300" y="55" fill="#a5f3fc" fontSize="29" fontWeight="900" textAnchor="middle">
          CLOCKWISE
        </text>
        <text x="900" y="55" fill="#f9a8d4" fontSize="29" fontWeight="900" textAnchor="middle">
          ANTICLOCKWISE
        </text>

        <g>
          <line x1="90" y1="565" x2="520" y2="565" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="90" y1="565" x2="90" y2="110" stroke="#e2e8f0" strokeWidth="5" />
          <path
            d="M165 445 L165 195 L440 195 L440 445 Z"
            fill="url(#cdCyanHatch)"
            stroke="#22d3ee"
            strokeWidth="5"
            markerEnd="url(#cdCyan)"
          />
          <path
            id="cwPath"
            d="M165 445 L165 195 L440 195 L440 445 L165 445"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="5"
          />
          <circle r="12" fill="#67e8f9">
            <animateMotion dur="4.2s" repeatCount="indefinite">
              <mpath href="#cwPath" />
            </animateMotion>
          </circle>
          <text x="300" y="610" fill="#a5f3fc" fontSize="20" fontWeight="900" textAnchor="middle">
            Wby &gt; 0, chemistry wcycle &lt; 0
          </text>
        </g>

        <line x1="600" y1="95" x2="600" y2="620" stroke="#334155" strokeWidth="4" />

        <g>
          <line x1="680" y1="565" x2="1110" y2="565" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="680" y1="565" x2="680" y2="110" stroke="#e2e8f0" strokeWidth="5" />
          <path
            d="M755 445 L1030 445 L1030 195 L755 195 Z"
            fill="url(#cdPinkHatch)"
            stroke="#f472b6"
            strokeWidth="5"
            markerEnd="url(#cdPink)"
          />
          <path
            id="ccwPath"
            d="M755 445 L1030 445 L1030 195 L755 195 L755 445"
            fill="none"
            stroke="#f472b6"
            strokeWidth="5"
          />
          <circle r="12" fill="#f9a8d4">
            <animateMotion dur="4.2s" repeatCount="indefinite">
              <mpath href="#ccwPath" />
            </animateMotion>
          </circle>
          <text x="900" y="610" fill="#f9a8d4" fontSize="20" fontWeight="900" textAnchor="middle">
            Wby &lt; 0, chemistry wcycle &gt; 0
          </text>
        </g>

        <rect x="255" y="640" width="690" height="40" rx="18" fill="#0f172a" stroke="#a78bfa" strokeWidth="3" />
        <text x="600" y="667" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          |wcycle| = geometric area enclosed on the P–V diagram
        </text>
      </svg>
    </div>
  );
}

function StateFunctionClosureAnimation() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 680"
        role="img"
        aria-labelledby="closure-title closure-description"
        className="h-auto w-full"
      >
        <title id="closure-title">Animated closure of state functions around a thermodynamic cycle</title>
        <desc id="closure-description">
          The system passes through several states and returns to the initial state.
          Every state function returns to its original value, while heat and work can accumulate around the loop.
        </desc>

        <defs>
          <marker id="sfArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="680" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          A CYCLE CLOSES EVERY STATE FUNCTION
        </text>

        <circle cx="600" cy="330" r="210" fill="none" stroke="#34d399" strokeWidth="6" markerEnd="url(#sfArrow)" />
        <path id="sfCircle" d="M600 120 A210 210 0 1 1 599.9 120" fill="none" />

        {[
          [600,120,"1"],
          [790,245,"2"],
          [720,500,"3"],
          [420,500,"4"],
          [410,230,"5"],
        ].map(([cx,cy,label]) => (
          <g key={String(label)}>
            <circle cx={Number(cx)} cy={Number(cy)} r="38" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
            <text x={Number(cx)} y={Number(cy)+8} fill="#ddd6fe" fontSize="27" fontWeight="900" textAnchor="middle">
              {label}
            </text>
          </g>
        ))}

        <circle r="13" fill="#fde047">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#sfCircle" />
          </animateMotion>
        </circle>

        <rect x="875" y="155" width="245" height="300" rx="26" fill="#0f172a" stroke="#22d3ee" strokeWidth="5" />
        <text x="998" y="205" fill="#a5f3fc" fontSize="22" fontWeight="900" textAnchor="middle">NET STATE CHANGE</text>
        <text x="998" y="260" fill="#a7f3d0" fontSize="21" textAnchor="middle">ΔU = 0</text>
        <text x="998" y="305" fill="#a7f3d0" fontSize="21" textAnchor="middle">ΔH = 0</text>
        <text x="998" y="350" fill="#a7f3d0" fontSize="21" textAnchor="middle">ΔS = 0</text>
        <text x="998" y="395" fill="#a7f3d0" fontSize="21" textAnchor="middle">ΔG = 0</text>

        <rect x="80" y="200" width="250" height="230" rx="26" fill="#0f172a" stroke="#f472b6" strokeWidth="5" />
        <text x="205" y="250" fill="#f9a8d4" fontSize="22" fontWeight="900" textAnchor="middle">PATH TOTALS</text>
        <text x="205" y="315" fill="#fde68a" fontSize="24" fontWeight="900" textAnchor="middle">qcycle may ≠ 0</text>
        <text x="205" y="370" fill="#a5f3fc" fontSize="24" fontWeight="900" textAnchor="middle">wcycle may ≠ 0</text>

        <rect x="315" y="585" width="570" height="50" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="619" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">
          0 = ΔUcycle = qcycle + wcycle
        </text>
      </svg>
    </div>
  );
}

function ThreeStateCycleGraph() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="three-state-title three-state-description"
        className="h-auto w-full"
      >
        <title id="three-state-title">Three-state ideal-gas cycle with isochoric, isothermal and isobaric legs</title>
        <desc id="three-state-description">
          State 1 is at 22.4 litres and 1 atmosphere.
          State 2 is at 22.4 litres and 2 atmospheres.
          State 3 is at 44.8 litres and 1 atmosphere.
          The cycle proceeds 1 to 2 to 3 to 1.
        </desc>

        <defs>
          <marker id="tsA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="tsB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="tsC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
          <pattern id="cycleShade" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#a78bfa" strokeWidth="4" opacity="0.28" />
          </pattern>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          RETAINED THREE-STATE REVERSIBLE CYCLE
        </text>

        <line x1="150" y1="650" x2="1080" y2="650" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="150" y1="650" x2="150" y2="95" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1110" y="662" fill="#e2e8f0" fontSize="25">V</text>
        <text x="122" y="88" fill="#e2e8f0" fontSize="25">P</text>

        <line x1="310" y1="650" x2="310" y2="155" stroke="#334155" strokeWidth="3" strokeDasharray="10 10" />
        <line x1="900" y1="650" x2="900" y2="360" stroke="#334155" strokeWidth="3" strokeDasharray="10 10" />
        <line x1="150" y1="520" x2="1010" y2="520" stroke="#334155" strokeWidth="3" strokeDasharray="10 10" />
        <line x1="150" y1="210" x2="430" y2="210" stroke="#334155" strokeWidth="3" strokeDasharray="10 10" />

        <path
          d="M310 520 L310 210 C430 250 610 340 900 520 Z"
          fill="url(#cycleShade)"
          stroke="#a78bfa"
          strokeWidth="4"
        />

        <path id="legA" d="M310 520 V210" fill="none" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#tsA)" />
        <path id="legB" d="M310 210 C430 250 610 340 900 520" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#tsB)" />
        <path id="legC" d="M900 520 H310" fill="none" stroke="#f472b6" strokeWidth="5" markerEnd="url(#tsC)" />

        <circle cx="310" cy="520" r="16" fill="#fde047" />
        <circle cx="310" cy="210" r="16" fill="#fde047" />
        <circle cx="900" cy="520" r="16" fill="#fde047" />

        <text x="278" y="555" fill="#f8fafc" fontSize="25" fontWeight="900">1</text>
        <text x="278" y="190" fill="#f8fafc" fontSize="25" fontWeight="900">2</text>
        <text x="920" y="555" fill="#f8fafc" fontSize="25" fontWeight="900">3</text>

        <text x="215" y="365" fill="#a5f3fc" fontSize="20" fontWeight="900">A: isochoric</text>
        <text x="610" y="305" fill="#a7f3d0" fontSize="20" fontWeight="900">B: isothermal at 546 K</text>
        <text x="610" y="565" fill="#f9a8d4" fontSize="20" fontWeight="900">C: isobaric at 1 atm</text>

        <text x="310" y="690" fill="#cbd5e1" fontSize="21" textAnchor="middle">22.4 L</text>
        <text x="900" y="690" fill="#cbd5e1" fontSize="21" textAnchor="middle">44.8 L</text>
        <text x="110" y="527" fill="#cbd5e1" fontSize="21" textAnchor="middle">1 atm</text>
        <text x="110" y="217" fill="#cbd5e1" fontSize="21" textAnchor="middle">2 atm</text>

        <circle r="12" fill="#67e8f9">
          <animateMotion dur="2.2s" repeatCount="indefinite">
            <mpath href="#legA" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#86efac">
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#legB" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#f9a8d4">
          <animateMotion dur="2.5s" repeatCount="indefinite">
            <mpath href="#legC" />
          </animateMotion>
        </circle>

        <text x="600" y="735" fill="#94a3b8" fontSize="20" textAnchor="middle">
          The loop is clockwise, so chemistry-sign net work is negative and net heat absorbed is positive.
        </text>
      </svg>
    </div>
  );
}

function CycleAuditMethod() {
  const steps = [
    {
      title: "1. Reconstruct every state",
      equation: "PV = nRT",
      text: "Complete the state table before calculating any leg quantity.",
      tone: "cyan" as Tone,
    },
    {
      title: "2. Name each leg",
      equation: "isochoric / isobaric / isothermal / adiabatic / polytropic",
      text: "The process label decides the correct work and heat relations.",
      tone: "violet" as Tone,
    },
    {
      title: "3. Calculate ΔU first",
      equation: "ΔU = nCv,mΔT",
      text: "For an ideal gas, internal-energy change depends only on endpoint temperatures.",
      tone: "emerald" as Tone,
    },
    {
      title: "4. Calculate work from the path",
      equation: "w = −∫Pext dV",
      text: "Use zero, rectangle, logarithm, adiabat or polytropic relation as appropriate.",
      tone: "amber" as Tone,
    },
    {
      title: "5. Obtain heat",
      equation: "q = ΔU − w",
      text: "This is often safer than memorising separate heat formulas.",
      tone: "rose" as Tone,
    },
    {
      title: "6. Close the cycle",
      equation: "ΣΔU = 0 and Σq = −Σw",
      text: "The closure test catches arithmetic and sign errors.",
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

function StateTable() {
  const rows = [
    ["1", "1 atm", "22.4 L", "273 K", "initial / final"],
    ["2", "2 atm", "22.4 L", "546 K", "after isochoric heating"],
    ["3", "1 atm", "44.8 L", "546 K", "after isothermal expansion"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">State</th>
            <th className="px-4 py-3 font-black text-white">Pressure</th>
            <th className="px-4 py-3 font-black text-white">Volume</th>
            <th className="px-4 py-3 font-black text-white">Temperature</th>
            <th className="px-4 py-3 font-black text-white">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([state, p, v, t, role]) => (
            <tr key={state}>
              <td className="px-4 py-3 font-black text-cyan-200">{state}</td>
              <td className="px-4 py-3 text-slate-200">{p}</td>
              <td className="px-4 py-3 text-slate-200">{v}</td>
              <td className="px-4 py-3 text-slate-200">{t}</td>
              <td className="px-4 py-3 text-slate-300">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LegTable() {
  const rows = [
    [
      "A: 1 → 2",
      "Isochoric heating",
      "+(3/2)R(273)",
      "0",
      "+(3/2)R(273)",
      "+(5/2)R(273)",
    ],
    [
      "B: 2 → 3",
      "Reversible isothermal expansion",
      "+546R ln 2",
      "−546R ln 2",
      "0",
      "0",
    ],
    [
      "C: 3 → 1",
      "Isobaric cooling and compression",
      "−(5/2)R(273)",
      "+R(273)",
      "−(3/2)R(273)",
      "−(5/2)R(273)",
    ],
    [
      "Overall",
      "Complete cycle",
      "+273R(2 ln 2 − 1)",
      "−273R(2 ln 2 − 1)",
      "0",
      "0",
    ],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Leg</th>
            <th className="px-4 py-3 font-black text-white">Process</th>
            <th className="px-4 py-3 font-black text-white">q</th>
            <th className="px-4 py-3 font-black text-white">w</th>
            <th className="px-4 py-3 font-black text-white">ΔU</th>
            <th className="px-4 py-3 font-black text-white">Minimal ΔH</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([leg, process, q, w, du, dh]) => (
            <tr key={leg}>
              <td className="px-4 py-3 font-black text-slate-100">{leg}</td>
              <td className="px-4 py-3 text-slate-300">{process}</td>
              <td className="px-4 py-3 font-mono text-amber-200">{q}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{w}</td>
              <td className="px-4 py-3 font-mono text-emerald-300">{du}</td>
              <td className="px-4 py-3 font-mono text-violet-200">{dh}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RetainedCycleExample() {
  return (
    <article className="rounded-[2rem] border border-amber-300/25 bg-amber-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
            Chapter cycle example
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            One mole of a monatomic ideal gas through states 1, 2 and 3
          </h3>
        </div>
        <Chip tone="amber">FULL STATE & ENERGY TABLE</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        One mole of a monatomic ideal gas executes a reversible cycle:
        state 1 → state 2 at constant volume, state 2 → state 3 isothermally,
        and state 3 → state 1 at constant pressure.
        Complete the state table and evaluate q, w, ΔU and the minimal ideal-gas ΔH result for every leg and for the cycle.
      </p>

      <ThreeStateCycleGraph />

      <div className="mt-5 space-y-4">
        <h4 className="text-lg font-black text-white">Step 1 — reconstruct the three states</h4>
        <StateTable />

        <div className="grid gap-4 md:grid-cols-3">
          <Formula label="State 1">
            (P₁,V₁,T₁) = (1 atm, 22.4 L, 273 K)
          </Formula>
          <Formula label="State 2">
            (P₂,V₂,T₂) = (2 atm, 22.4 L, 546 K)
          </Formula>
          <Formula label="State 3">
            (P₃,V₃,T₃) = (1 atm, 44.8 L, 546 K)
          </Formula>
        </div>

        <h4 className="pt-2 text-lg font-black text-white">Step 2 — leg-by-leg calculations</h4>

        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Leg A: 1 → 2</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Isochoric work">
              w<sub>A</sub> = 0
            </Formula>
            <Formula label="Internal-energy change">
              ΔU<sub>A</sub> = (3/2)R(546−273) = (3/2)R(273)
            </Formula>
            <Formula label="Heat">
              q<sub>A</sub> = ΔU<sub>A</sub>
            </Formula>
            <Formula label="Minimal ΔH">
              ΔH<sub>A</sub> = (5/2)R(273)
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Leg B: 2 → 3</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Isothermal state changes">
              ΔU<sub>B</sub> = 0 and ΔH<sub>B</sub> = 0
            </Formula>
            <Formula label="Reversible work">
              w<sub>B</sub> = −RT ln(V₃/V₂) = −546R ln 2
            </Formula>
            <Formula label="Heat">
              q<sub>B</sub> = +546R ln 2
            </Formula>
            <Formula label="Physical meaning">
              heat absorbed = work delivered
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">Leg C: 3 → 1</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Isobaric work">
              w<sub>C</sub> = −P(V₁−V₃) = +R(273)
            </Formula>
            <Formula label="Internal-energy change">
              ΔU<sub>C</sub> = (3/2)R(273−546) = −(3/2)R(273)
            </Formula>
            <Formula label="Heat">
              q<sub>C</sub> = ΔU<sub>C</sub> − w<sub>C</sub> = −(5/2)R(273)
            </Formula>
            <Formula label="Minimal ΔH">
              ΔH<sub>C</sub> = −(5/2)R(273)
            </Formula>
          </div>
        </div>

        <h4 className="pt-2 text-lg font-black text-white">Step 3 — close the complete cycle</h4>
        <LegTable />

        <div className="grid gap-4 md:grid-cols-2">
          <Formula label="Net chemistry work">
            w<sub>cycle</sub> = 273R(1−2ln2) ≈ −0.877 kJ
          </Formula>
          <Formula label="Net heat absorbed">
            q<sub>cycle</sub> = 273R(2ln2−1) ≈ +0.877 kJ
          </Formula>
        </div>
      </div>

      <ConceptLens title="Graph-area verification" tone="violet">
        The cycle is clockwise. The curved high-pressure expansion leg encloses more area than the low-pressure compression leg.
        Hence the gas delivers net work, chemistry-sign {String.raw`\(w_{\text{cycle}}<0\)`}, and absorbs equal net heat.
      </ConceptLens>
    </article>
  );
}

function GraphAreaCases() {
  const cards = [
    {
      title: "Rectangular cycle",
      equation: "|wcycle| = (Phigh−Plow)(Vhigh−Vlow)",
      text: "Direction supplies the sign. Clockwise is negative in chemistry notation.",
      tone: "cyan" as Tone,
    },
    {
      title: "Curved cycle",
      equation: "wcycle = −∮P dV",
      text: "Subtract the compression area from the expansion area or integrate leg by leg.",
      tone: "violet" as Tone,
    },
    {
      title: "No enclosed area",
      equation: "wcycle = 0",
      text: "Outward and return paths coincide, so net PV work vanishes.",
      tone: "emerald" as Tone,
    },
    {
      title: "Non-PV work present",
      equation: "wtotal ≠ wPV alone",
      text: "The P–V area gives only net pressure–volume work.",
      tone: "rose" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className={`rounded-3xl border p-5 ${toneMap[card.tone]}`}>
          <h3 className="text-lg font-black text-white">{card.title}</h3>
          <div className="mt-3 rounded-xl bg-black/25 p-3 text-center font-mono text-sm font-black text-white">
            {card.equation}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-200">{card.text}</p>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — rectangular clockwise cycle",
    question:
      "A gas executes a clockwise rectangle between pressures 1 bar and 4 bar and volumes 2 L and 7 L. Find chemistry-sign net PV work.",
    solution:
      "Area = (4−1)(7−2) = 15 bar L = 1500 J. Clockwise means the gas delivers net work, so wcycle = −1500 J.",
  },
  {
    title: "Concept Application 2 — anticlockwise reversal",
    question:
      "The same rectangular path is traversed anticlockwise. Find wcycle and qcycle.",
    solution:
      "wcycle = +1500 J. Since ΔUcycle = 0, qcycle = −1500 J.",
  },
  {
    title: "Concept Application 3 — triangular cycle",
    question:
      "A clockwise triangular cycle has base ΔV = 4 L and pressure height ΔP = 3 bar. Calculate net work.",
    solution:
      "Enclosed area = (1/2)ΔPΔV = 6 bar L = 600 J. Clockwise gives wcycle = −600 J.",
  },
  {
    title: "Concept Application 4 — state closure",
    question:
      "Over a complete cycle, a system absorbs 2.8 kJ of heat. Find ΔUcycle and chemistry-sign wcycle.",
    solution:
      "ΔUcycle = 0. Therefore wcycle = −qcycle = −2.8 kJ.",
  },
  {
    title: "Concept Application 5 — one missing leg",
    question:
      "For a three-leg cycle, w1 = 0.4 kJ, w2 = −1.7 kJ and net heat absorbed is 0.9 kJ. Find w3.",
    solution:
      "For the cycle, qtotal + wtotal = 0, so wtotal = −0.9 kJ. Hence 0.4−1.7+w3 = −0.9, giving w3 = +0.4 kJ.",
  },
  {
    title: "Concept Application 6 — two isochoric legs",
    question:
      "A cycle contains two isochoric legs and two curved expansion/compression legs. Which legs contribute directly to PV work?",
    solution:
      "The isochoric legs have dV = 0 and contribute zero PV work. Only the legs with changing volume contribute to the P–V area.",
  },
  {
    title: "Concept Application 7 — T–V diagram warning",
    question:
      "Can the enclosed area on a T–V cycle diagram be identified directly as work?",
    solution:
      "No. Pressure–volume work is ∫P dV. Area on a T–V graph has units K·volume and is not work unless converted using an equation of state and integrated appropriately.",
  },
  {
    title: "Concept Application 8 — entropy over a cycle",
    question:
      "Is the system entropy change over a complete cycle always zero? Does that prove every leg is reversible?",
    solution:
      "The system returns to its initial state, so ΔScycle = 0 because entropy is a state function. This does not prove reversibility; entropy can be produced in irreversible legs and exported to surroundings.",
  },
  {
    title: "Concept Application 9 — work from two paths",
    question:
      "A gas expands from V₁ to V₂ along a high-pressure curve and returns along a lower-pressure curve. Determine the cycle direction and work sign.",
    solution:
      "Expansion occurs at higher pressure than compression, so the loop is clockwise. The gas delivers net work and chemistry-sign wcycle is negative.",
  },
  {
    title: "Concept Application 10 — electrical cycle",
    question:
      "A cyclic electrochemical device returns to its initial thermodynamic state while delivering 600 J electrical work and receiving no PV work. What net heat is required?",
    solution:
      "Total chemistry work is w = −600 J. Since ΔUcycle = 0, qcycle = +600 J.",
  },
  {
    title: "Concept Application 11 — ideal-gas leg identification",
    question:
      "On a P–V graph, a vertical leg doubles pressure at fixed volume. For an ideal gas, what happens to temperature and PV work?",
    solution:
      "At fixed volume, T is proportional to P, so temperature doubles. PV work is zero because dV = 0.",
  },
  {
    title: "Concept Application 12 — high-temperature isotherm",
    question:
      "Two isotherms connect the same volume limits. Which one gives the larger reversible expansion-work magnitude?",
    solution:
      "The higher-temperature isotherm has higher pressure at every volume. Since |w| = nRT ln(V₂/V₁), the higher-temperature path gives larger magnitude.",
  },
  {
    title: "Concept Application 13 — consistency audit",
    question:
      "A proposed cycle table gives ΣΔU = +200 J and ΣΔH = 0. What is wrong?",
    solution:
      "A genuine complete cycle returns to the same state, so every state-function change, including ΔU and ΔH, must sum to zero. At least one leg value or sign is incorrect.",
  },
  {
    title: "Concept Application 14 — area and power",
    question:
      "Does a larger P–V cycle area automatically imply greater power output?",
    solution:
      "It implies greater work per cycle. Power also depends on cycle frequency or duration. A large-area cycle run very slowly can have low power.",
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
    "Every quantity is zero over a cycle.",
    "Incorrect",
    "Only state-function changes vanish. Net heat and work may be non-zero.",
  ],
  [
    "Clockwise P–V cycle means positive chemistry work.",
    "Incorrect",
    "Clockwise means net work is done by the gas, so chemistry-sign wcycle is negative.",
  ],
  [
    "Area on any thermodynamic graph equals work.",
    "Incorrect",
    "Direct mechanical work area belongs specifically to a P–V graph.",
  ],
  [
    "ΔScycle = 0 proves the cycle is reversible.",
    "Incorrect",
    "Entropy is a state function; a system can return to its initial entropy after irreversible legs.",
  ],
  [
    "The P–V area gives all work modes.",
    "Incorrect",
    "It gives only pressure–volume work. Electrical, surface or shaft work must be added separately.",
  ],
  [
    "An isochoric leg cannot exchange energy.",
    "Incorrect",
    "PV work is zero, but heat or non-PV work can change internal energy.",
  ],
  [
    "A larger cycle area always means higher efficiency.",
    "Incorrect",
    "Area gives work per cycle. Efficiency also depends on heat input and the full cycle design.",
  ],
  [
    "A larger cycle area always means larger power.",
    "Incorrect",
    "Power depends on work per cycle multiplied by cycle frequency.",
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
      title: "Petrol and diesel engines",
      text: "A working gas repeatedly compresses, heats, expands and rejects energy. The P–V loop area represents indicated mechanical work per cycle.",
      tone: "amber" as Tone,
    },
    {
      title: "Refrigerator compressor loop",
      text: "The refrigeration system consumes net work, corresponding to an anticlockwise orientation in an idealised pressure–volume representation of the working fluid.",
      tone: "violet" as Tone,
    },
    {
      title: "Stirling-style engine",
      text: "Alternating isothermal and constant-volume idealisations produce a closed loop whose area is net work, while regenerators recycle part of the heat internally.",
      tone: "cyan" as Tone,
    },
    {
      title: "Battery charge–discharge cycle",
      text: "A cell can return approximately to its initial state after charge and discharge while electrical work and heat cross the boundary. Its useful work is not represented by P–V area alone.",
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

export default function ThermodynamicsPart12() {
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
            <Chip tone="emerald">CYCLE ENERGY ACCOUNTING</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Integrated Process Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                A cycle forgets every state change—but remembers its heat and work
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                When the system returns to its starting state, every state function closes.
                The path still encloses an area, and that area records net pressure–volume work.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Cycle closure
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-lg font-black text-white">
                  ΔU<sub>cycle</sub> = 0
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-lg font-black text-white">
                  w<sub>cycle</sub> = −∮P dV
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-lg font-black text-white">
                  q<sub>cycle</sub> = −w<sub>cycle</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Definition of a cyclic process"
          subtitle="A sequence of two or more processes that returns the system to its initial thermodynamic state."
        >
          <Formula label="State closure">
            final state = initial state
          </Formula>

          <p>
            A cycle may contain isochoric, isobaric, isothermal, adiabatic, polytropic or other legs.
            Because the final state equals the initial state, every state function returns to its original value.
          </p>

          <StateFunctionClosureAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="State functions">
              ΔU = ΔH = ΔS = ΔG = 0 over the cycle
            </Formula>
            <Formula label="Path functions">
              q<sub>cycle</sub> and w<sub>cycle</sub> may be non-zero
            </Formula>
          </div>

          <ConceptLens title="Cycle does not mean nothing happened" tone="amber">
            The system can absorb heat, reject heat, perform work and receive work during different legs.
            Only its final thermodynamic state matches the initial state.
          </ConceptLens>
        </Section>

        <Section
          index="02"
          title="Net work as signed P–V area"
          subtitle="Expansion and compression contributions compete over the complete loop."
        >
          <Formula label="Chemistry-sign pressure–volume work">
            w<sub>cycle</sub> = −∮P<sub>ext</sub>dV
          </Formula>

          <CycleDirectionAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Clockwise loop" tone="cyan">
              Expansion occurs at a higher average pressure than compression. The gas delivers net work:
              {String.raw`\(w_{\text{cycle}}<0\)`}.
            </ConceptLens>
            <ConceptLens title="Anticlockwise loop" tone="rose">
              Compression occurs at a higher average pressure than expansion. The surroundings deliver net work:
              {String.raw`\(w_{\text{cycle}}>0\)`}.
            </ConceptLens>
          </div>

          <ConceptLens title="Only P–V area has direct work meaning" tone="violet">
            The enclosed area on {String.raw`\(T\)`}-{String.raw`\(V\)`}, {String.raw`\(P\)`}-{String.raw`\(T\)`} or other graphs is not directly pressure–volume work.
            Work requires integration of pressure with respect to volume.
          </ConceptLens>
        </Section>

        <Section index="03" title="First-Law closure of a cycle">
          <Formula label="First Law over the complete loop">
            0 = ΔU<sub>cycle</sub> = q<sub>cycle</sub> + w<sub>cycle</sub>
          </Formula>

          <Formula label="Heat–work balance">
            q<sub>cycle</sub> = −w<sub>cycle</sub>
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Clockwise heat sign" tone="emerald">
              Since clockwise {String.raw`\(w_{\text{cycle}}<0\)`}, the system must absorb net heat:
              {String.raw`\(q_{\text{cycle}}>0\)`}.
            </ConceptLens>
            <ConceptLens title="Anticlockwise heat sign" tone="rose">
              Since anticlockwise {String.raw`\(w_{\text{cycle}}>0\)`}, the system must reject net heat:
              {String.raw`\(q_{\text{cycle}}<0\)`}.
            </ConceptLens>
          </div>
        </Section>

        <Section index="04" title="Six-step cycle audit method">
          <CycleAuditMethod />
        </Section>

        <Section index="05" title="Common P–V area cases">
          <GraphAreaCases />
        </Section>

        <Section index="06" title="Three-state cycle example">
          <RetainedCycleExample />
        </Section>

        <Section index="07" title="State and path consistency checks">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">State closure</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Sum every {String.raw`\(\Delta U\)`}, {String.raw`\(\Delta H\)`}, {String.raw`\(\Delta S\)`} or other state-function change. Each total must be zero.
              </p>
            </article>
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Graph sign</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Confirm whether the loop is clockwise or anticlockwise before assigning the chemistry work sign.
              </p>
            </article>
            <article className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">First-Law closure</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Check that {String.raw`\(\Sigma q + \Sigma w = 0\)`}. Any residual signals an arithmetic or sign error.
              </p>
            </article>
          </div>
        </Section>

        <Section index="08" title="Non-PV work in a cycle">
          <p>
            The P–V loop gives only net pressure–volume work. A cycle may also include electrical, shaft, surface,
            elastic or magnetic work.
          </p>

          <Formula label="Complete work accounting">
            w<sub>total,cycle</sub> = w<sub>PV,cycle</sub> + w<sub>non-PV,cycle</sub>
          </Formula>

          <ConceptLens title="Electrochemical cycle" tone="violet">
            A battery can return approximately to its initial thermodynamic state while electrical work crosses the boundary.
            Its work cannot be read from a P–V area.
          </ConceptLens>
        </Section>

        <Section index="09" title="Cycle work, power and efficiency are different">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Work per cycle</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Magnitude of the signed P–V area, plus any non-PV work.</p>
            </article>
            <article className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Power</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Work per cycle multiplied by the number of cycles per unit time.</p>
            </article>
            <article className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Efficiency</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">Useful work divided by the relevant energy input; developed fully with heat engines later.</p>
            </article>
          </div>
        </Section>

        <Section index="10" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="11" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={12} />

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
                State functions close; the P–V loop area survives as net work
              </h2>
            </div>
            <Chip tone="emerald">PART 12 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Cycle", "final state = initial state"],
              ["State functions", "net change = 0"],
              ["Clockwise", "chemistry wcycle < 0"],
              ["First Law", "qcycle = −wcycle"],
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
