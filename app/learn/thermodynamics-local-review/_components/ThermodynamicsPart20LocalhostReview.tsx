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

function MultistageEntropyRouteAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 790"
        role="img"
        aria-labelledby="multi-route-title multi-route-description"
        className="h-auto w-full"
      >
        <title id="multi-route-title">Multistage entropy route for liquid water to compressed water vapour</title>
        <desc id="multi-route-description">
          The route heats liquid water from 300 to 373 kelvin, vaporises it at 373 kelvin,
          heats the vapour to 400 kelvin, and compresses it from one atmosphere to five atmospheres.
        </desc>

        <defs>
          <marker id="mrCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="mrAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="mrRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="790" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          STATE-FUNCTION ROUTE: LIQUID WATER → HOT COMPRESSED VAPOUR
        </text>

        {[
          { x: 70, title: "STATE 1", line1: "H₂O(l)", line2: "300 K, 1 atm", stroke: "#22d3ee" },
          { x: 355, title: "STATE A", line1: "H₂O(l)", line2: "373 K, 1 atm", stroke: "#67e8f9" },
          { x: 640, title: "STATE B", line1: "H₂O(g)", line2: "373 K, 1 atm", stroke: "#fbbf24" },
          { x: 925, title: "STATE 2", line1: "H₂O(g)", line2: "400 K, 5 atm", stroke: "#fb7185" },
        ].map((state) => (
          <g key={state.title}>
            <rect x={state.x} y="245" width="205" height="180" rx="28" fill="#0f172a" stroke={state.stroke} strokeWidth="7" />
            <text x={state.x + 102.5} y="292" fill={state.stroke} fontSize="21" fontWeight="900" textAnchor="middle">
              {state.title}
            </text>
            <text x={state.x + 102.5} y="342" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">
              {state.line1}
            </text>
            <text x={state.x + 102.5} y="385" fill="#cbd5e1" fontSize="18" textAnchor="middle">
              {state.line2}
            </text>
          </g>
        ))}

        <path d="M280 335 H340" stroke="#22d3ee" strokeWidth="10" markerEnd="url(#mrCyan)" />
        <path d="M565 335 H625" stroke="#fbbf24" strokeWidth="10" markerEnd="url(#mrAmber)" />
        <path d="M850 335 H910" stroke="#fb7185" strokeWidth="10" markerEnd="url(#mrRose)" />

        <text x="310" y="295" fill="#a5f3fc" fontSize="18" fontWeight="900" textAnchor="middle">heat liquid</text>
        <text x="595" y="295" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">vaporise</text>
        <text x="880" y="285" fill="#fda4af" fontSize="18" fontWeight="900" textAnchor="middle">heat +</text>
        <text x="880" y="310" fill="#fda4af" fontSize="18" fontWeight="900" textAnchor="middle">compress</text>

        <path id="mrPath" d="M170 220 C335 115 535 120 742 170 C930 215 1010 190 1035 220" fill="none" />
        <circle r="13" fill="#fde047">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#mrPath" />
          </animateMotion>
        </circle>

        <rect x="95" y="500" width="1010" height="175" rx="30" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="540" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">
          ΔS = 18(1.0)ln(373/300) + (18×540)/373
        </text>
        <text x="600" y="585" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">
          + 4Rln(400/373) − Rln(5/1)
        </text>
        <text x="600" y="635" fill="#a7f3d0" fontSize="25" fontWeight="900" textAnchor="middle">
          ΔSsystem ≈ 27.34 cal mol⁻¹ K⁻¹ ≈ 114.4 J mol⁻¹ K⁻¹
        </text>

        <text x="600" y="735" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Entropy is path independent; the chosen route is only a convenient reversible calculation route.
        </text>
      </svg>
    </div>
  );
}

function MixingParticlesAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="mix-particles-title mix-particles-description"
        className="h-auto w-full"
      >
        <title id="mix-particles-title">Mixing two distinct ideal gases</title>
        <desc id="mix-particles-description">
          Two ideal gases begin separated at the same temperature and pressure.
          When the partition is removed, each gas expands into the full volume and the entropy increases.
        </desc>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          IDEAL-GAS MIXING: EACH COMPONENT EXPANDS INTO THE TOTAL VOLUME
        </text>

        <rect x="90" y="145" width="1020" height="390" rx="34" fill="#0f172a" stroke="#a78bfa" strokeWidth="8" />
        <line x1="600" y1="145" x2="600" y2="535" stroke="#e2e8f0" strokeWidth="10">
          <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.24;0.34;0.88;1" dur="7s" repeatCount="indefinite" />
        </line>

        {Array.from({ length: 5 }).map((_, i) => (
          <circle key={`A-${i}`} cx={175 + i * 80} cy={250 + (i % 2) * 120} r="17" fill="#22d3ee">
            <animate
              attributeName="cx"
              values={`${175 + i * 80};${175 + i * 80};${170 + i * 185};${1050 - i * 180};${175 + i * 80}`}
              keyTimes="0;0.3;0.56;0.85;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={`B-${i}`}
            cx={650 + (i % 5) * 90}
            cy={215 + Math.floor(i / 5) * 180}
            r="14"
            fill="#f472b6"
          >
            <animate
              attributeName="cx"
              values={`${650 + (i % 5) * 90};${650 + (i % 5) * 90};${1040 - (i % 5) * 190};${160 + (i % 5) * 190};${650 + (i % 5) * 90}`}
              keyTimes="0;0.3;0.56;0.85;1"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <text x="335" y="585" fill="#a5f3fc" fontSize="21" fontWeight="900" textAnchor="middle">5 mol A</text>
        <text x="865" y="585" fill="#f9a8d4" fontSize="21" fontWeight="900" textAnchor="middle">10 mol B</text>

        <rect x="220" y="625" width="760" height="50" rx="22" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="658" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          ΔSmix = −R(nA ln xA + nB ln xB) &gt; 0 for distinct gases
        </text>
      </svg>
    </div>
  );
}

function BinaryMixingEntropyGraph() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="binary-max-title binary-max-description"
        className="h-auto w-full"
      >
        <title id="binary-max-title">Molar entropy of binary ideal-gas mixing versus composition</title>
        <desc id="binary-max-description">
          The molar entropy of mixing is zero at either pure end and reaches its maximum R ln 2 at equal mole fractions.
        </desc>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          MAXIMUM BINARY MOLAR MIXING ENTROPY OCCURS AT xA = xB = 1/2
        </text>

        <line x1="130" y1="610" x2="1080" y2="610" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="130" y1="610" x2="130" y2="115" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1100" y="622" fill="#e2e8f0" fontSize="22">xA</text>
        <text x="88" y="105" fill="#e2e8f0" fontSize="20">ΔSmix,m</text>

        <path
          id="mixCurve"
          d="M145 600 C280 465 390 245 600 185 C810 245 920 465 1065 600"
          fill="none"
          stroke="#34d399"
          strokeWidth="11"
        />

        <circle r="13" fill="#fde047">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#mixCurve" />
          </animateMotion>
        </circle>

        <line x1="600" y1="185" x2="600" y2="610" stroke="#a78bfa" strokeWidth="4" strokeDasharray="14 11" />
        <text x="600" y="650" fill="#ddd6fe" fontSize="19" textAnchor="middle">1/2</text>
        <text x="145" y="650" fill="#cbd5e1" fontSize="19" textAnchor="middle">0</text>
        <text x="1065" y="650" fill="#cbd5e1" fontSize="19" textAnchor="middle">1</text>

        <rect x="360" y="105" width="480" height="58" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="143" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          ΔSmix,m,max = R ln2
        </text>

        <text x="600" y="690" fill="#94a3b8" fontSize="18" textAnchor="middle">
          This maximum assumes a fixed total number of moles and two distinct ideal gases.
        </text>
      </svg>
    </div>
  );
}

function ThermalEquilibrationAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="thermal-mix-title thermal-mix-description"
        className="h-auto w-full"
      >
        <title id="thermal-mix-title">Thermal equilibration of two bodies in an insulated enclosure</title>
        <desc id="thermal-mix-description">
          A colder body warms and a hotter body cools until a common final temperature is reached.
          Energy is conserved and total entropy increases.
        </desc>

        <defs>
          <marker id="teArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          THERMAL EQUILIBRATION: ENERGY BALANCE FIRST, ENTROPY BALANCE SECOND
        </text>

        <rect x="90" y="150" width="430" height="360" rx="32" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
        <text x="305" y="205" fill="#a5f3fc" fontSize="27" fontWeight="900" textAnchor="middle">COLDER BODY A</text>
        <rect x="175" y="265" width="260" height="120" rx="28" fill="#164e63">
          <animate attributeName="fill" values="#164e63;#0e7490;#164e63" dur="5s" repeatCount="indefinite" />
        </rect>
        <text x="305" y="335" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">300 K → 320 K</text>
        <text x="305" y="455" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">ΔSA &gt; 0</text>

        <rect x="680" y="150" width="430" height="360" rx="32" fill="#0f172a" stroke="#f97316" strokeWidth="8" />
        <text x="895" y="205" fill="#fed7aa" fontSize="27" fontWeight="900" textAnchor="middle">HOTTER BODY B</text>
        <rect x="765" y="265" width="260" height="120" rx="28" fill="#7c2d12">
          <animate attributeName="fill" values="#7c2d12;#c2410c;#7c2d12" dur="5s" repeatCount="indefinite" />
        </rect>
        <text x="895" y="335" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">360 K → 320 K</text>
        <text x="895" y="455" fill="#fda4af" fontSize="20" fontWeight="900" textAnchor="middle">ΔSB &lt; 0</text>

        <path d="M665 330 H535" stroke="#fbbf24" strokeWidth="12" markerEnd="url(#teArrow)">
          <animate attributeName="stroke-dasharray" values="0 150;75 75;150 0" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="600" y="295" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">heat</text>

        <rect x="230" y="590" width="740" height="90" rx="28" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="600" y="625" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">
          ΔStotal = mAcA ln(Tf/TA) + mBcB ln(Tf/TB)
        </text>
        <text x="600" y="660" fill="#f8fafc" fontSize="20" fontWeight="900" textAnchor="middle">
          isolated spontaneous equilibration ⇒ ΔStotal &gt; 0
        </text>

        <text x="600" y="725" fill="#94a3b8" fontSize="18" textAnchor="middle">
          The hot body loses entropy, but the cold body gains a larger amount.
        </text>
      </svg>
    </div>
  );
}

function NeonPathAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="neon-title neon-description"
        className="h-auto w-full"
      >
        <title id="neon-title">Three adiabatic expansion routes for neon</title>
        <desc id="neon-description">
          Reversible adiabatic expansion has zero entropy change,
          finite external-pressure adiabatic expansion generates a small positive entropy,
          and free expansion generates a larger entropy.
        </desc>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          RETAINED NEON PROBLEM: THREE ADIABATIC ROUTES TO LOWER PRESSURE
        </text>

        {[
          { x: 55, title: "REVERSIBLE", stroke: "#34d399", entropy: "ΔS = 0", temp: "T₂ ≈ 328 K", piston: "350;225;350" },
          { x: 425, title: "CONSTANT Pext", stroke: "#fbbf24", entropy: "ΔS ≈ 0.954 J K⁻¹", temp: "T₂ = 359.48 K", piston: "350;245;290;225;350" },
          { x: 795, title: "FREE EXPANSION", stroke: "#fb7185", entropy: "ΔS ≈ 3.81 J K⁻¹", temp: "T₂ = 473 K", piston: "350;190;350" },
        ].map((item, index) => (
          <g key={item.title}>
            <text x={item.x + 150} y="130" fill={item.stroke} fontSize="24" fontWeight="900" textAnchor="middle">
              {item.title}
            </text>
            <path d={`M${item.x+35} 490 V190 H${item.x+265} V490`} fill="none" stroke={item.stroke} strokeWidth="8" />
            <rect x={item.x + 60} y="350" width="180" height="24" rx="8" fill={item.stroke}>
              <animate attributeName="y" values={item.piston} dur={`${4.5+index*0.35}s`} repeatCount="indefinite" />
            </rect>
            <line x1={item.x + 150} y1="190" x2={item.x + 150} y2="350" stroke={item.stroke} strokeWidth="14" strokeLinecap="round">
              <animate attributeName="y2" values={item.piston} dur={`${4.5+index*0.35}s`} repeatCount="indefinite" />
            </line>

            {[0,1,2,3,4,5].map((i) => (
              <circle
                key={i}
                cx={item.x + 75 + (i % 3) * 75}
                cy={405 + Math.floor(i / 3) * 48}
                r="9"
                fill={index === 0 ? "#86efac" : index === 1 ? "#fde047" : "#fda4af"}
              >
                <animate attributeName="opacity" values="0.45;1;0.45" dur={`${1.3+i*0.12}s`} repeatCount="indefinite" />
              </circle>
            ))}

            <rect x={item.x + 35} y="530" width="230" height="105" rx="22" fill="#0f172a" stroke={item.stroke} strokeWidth="4" />
            <text x={item.x + 150} y="570" fill={item.stroke} fontSize="19" fontWeight="900" textAnchor="middle">
              {item.temp}
            </text>
            <text x={item.x + 150} y="607" fill="#f8fafc" fontSize="18" fontWeight="900" textAnchor="middle">
              {item.entropy}
            </text>
          </g>
        ))}

        <rect x="230" y="675" width="740" height="48" rx="20" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="707" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          Less controlled expansion produces less work, less cooling, and more entropy generation.
        </text>
      </svg>
    </div>
  );
}

function MixingFormulaTable() {
  const rows = [
    ["Component A", "nA R ln(Vfinal/VA)", "−nA R ln xA"],
    ["Component B", "nB R ln(Vfinal/VB)", "−nB R ln xB"],
    ["Total", "ΣniR ln(Vfinal/Vi)", "−RΣni ln xi"],
    ["Per mole of mixture", "ΔSmix/ntotal", "−RΣxi ln xi"],
    ["Binary equimolar maximum", "xA = xB = 1/2", "ΔSmix,m = R ln2"],
    ["Identical gases", "no distinguishable composition change", "ΔSmix = 0"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Case</th>
            <th className="px-4 py-3 font-black text-white">Expansion picture</th>
            <th className="px-4 py-3 font-black text-white">Composition form</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([kind, expansion, composition]) => (
            <tr key={kind}>
              <td className="px-4 py-3 font-semibold text-slate-100">{kind}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{expansion}</td>
              <td className="px-4 py-3 font-mono text-emerald-300">{composition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MultistageWaterExample() {
  return (
    <article className="rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
            Retained chapter multistage problem
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            One mole of liquid water at 27 °C and 1 atm to vapour at 127 °C and 5 atm
          </h3>
        </div>
        <Chip tone="cyan">WORDING CHECKED</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        The chapter heading says “molar enthalpy change,” but the complete written solution uses
        {String.raw`\(\Delta S\)`} expressions. The calculation is therefore retained as a molar entropy-change problem.
        Data: liquid-water specific heat {String.raw`\(=1.0\ \mathrm{cal\,g^{-1}K^{-1}}\)`},
        molar mass {String.raw`\(=18\ \mathrm{g\,mol^{-1}}\)`}, and latent heat of vaporisation at
        {String.raw`\(100^\circ\mathrm C\)`} and 1 atm {String.raw`\(=540\ \mathrm{cal\,g^{-1}}\)`}.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="Stage A: heat liquid from 300 K to 373 K">
          ΔS₁ = 18(1.0)ln(373/300) = 3.920 cal mol⁻¹ K⁻¹
        </Formula>

        <Formula label="Stage B: vaporise reversibly at 373 K">
          ΔS₂ = (540×18)/373 = 26.059 cal mol⁻¹ K⁻¹
        </Formula>

        <Formula label="Stage C: heat vapour to 400 K and compress 1 atm → 5 atm">
          ΔS₃ = 4Rln(400/373) − Rln5 = −2.642 cal mol⁻¹ K⁻¹
        </Formula>

        <Formula label="Total system entropy">
          ΔS<sub>sys</sub> = 27.337 cal mol⁻¹ K⁻¹ ≈ 114.4 J mol⁻¹ K⁻¹
        </Formula>
      </div>

      <ConceptLens title="Why the final-pressure term is negative" tone="rose">
        At fixed final temperature, increasing pressure reduces the accessible gas volume and lowers the vapour entropy.
      </ConceptLens>

      <ConceptLens title="Why surroundings entropy is not fixed by endpoints" tone="amber">
        {String.raw`\(\Delta S_{\mathrm{sys}}\)`} is path independent. The surroundings entropy depends on the actual heat exchanges
        and the temperatures of the external reservoirs. It cannot be reconstructed from an arbitrary convenient
        system path unless those same reservoirs physically carry out the process.
      </ConceptLens>

      <ConceptLens title="Literal enthalpy reading" tone="violet">
        Under the stated assumptions and ideal-vapour approximation, the literal molar enthalpy change would be
        approximately {String.raw`\(11.25\ \mathrm{kcal\,mol^{-1}}\)`}, independent of the final ideal-gas pressure.
        That is a different question from the written entropy solution.
      </ConceptLens>
    </article>
  );
}

function RetainedGasMixingExample() {
  return (
    <article className="rounded-[2rem] border border-violet-300/25 bg-violet-300/[0.06] p-5 md:p-7">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
        Retained chapter ideal-gas mixing problem
      </p>
      <h3 className="mt-2 text-xl font-black text-white">
        Mix 5 mol of ideal gas A with 10 mol of ideal gas B at the same temperature and pressure
      </h3>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Formula label="Mole fractions">
          x<sub>A</sub> = 5/15 = 1/3, x<sub>B</sub> = 10/15 = 2/3
        </Formula>
        <Formula label="Each-gas expansion form">
          ΔS<sub>mix</sub> = 5Rln(15/5) + 10Rln(15/10)
        </Formula>
      </div>

      <Formula label="Numerical result">
        ΔS<sub>mix</sub> = 79.38 J K⁻¹
      </Formula>

      <Formula label="Molar entropy of mixing">
        ΔS<sub>mix,m</sub> = 5.292 J mol⁻¹ K⁻¹
      </Formula>

      <ConceptLens title="Ideal-gas energy properties" tone="emerald">
        For ideal gases mixed at the same temperature, {String.raw`\(\Delta U_{\mathrm{mix}}=0\)`} and
        {String.raw`\(\Delta H_{\mathrm{mix}}=0\)`}, while {String.raw`\(\Delta S_{\mathrm{mix}}>0\)`} for distinct gases.
      </ConceptLens>
    </article>
  );
}

function RetainedThermalMixingExample() {
  return (
    <article className="rounded-[2rem] border border-amber-300/25 bg-amber-300/[0.06] p-5 md:p-7">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
        Retained chapter thermal-equilibration problem
      </p>
      <h3 className="mt-2 text-xl font-black text-white">
        400 g of liquid A at 27 °C mixed thermally with 100 g of liquid B at 87 °C
      </h3>

      <p className="mt-4 text-slate-200">
        {String.raw`\(c_A=2\ \mathrm{cal\,g^{-1}K^{-1}}\)`}, {String.raw`\(c_B=4\ \mathrm{cal\,g^{-1}K^{-1}}\)`},
        and the combined enclosure is taken as adiabatic.
      </p>

      <Formula label="Energy balance">
        100(4)(360−T<sub>f</sub>) = 400(2)(T<sub>f</sub>−300)
      </Formula>

      <Formula label="Final equilibrium temperature">
        T<sub>f</sub> = 320 K
      </Formula>

      <div className="grid gap-4 md:grid-cols-3">
        <Formula label="Cold liquid A">
          ΔS<sub>A</sub> = 800ln(320/300) = +51.631 cal K⁻¹
        </Formula>
        <Formula label="Hot liquid B">
          ΔS<sub>B</sub> = 400ln(320/360) = −47.113 cal K⁻¹
        </Formula>
        <Formula label="Total">
          ΔS<sub>total</sub> = +4.518 cal K⁻¹ ≈ 18.90 J K⁻¹
        </Formula>
      </div>

      <ConceptLens title="Condition correction" tone="rose">
        Complete immiscibility is one sufficient way to eliminate entropy and enthalpy of material mixing.
        More generally, this calculation assumes no phase change, constant heat capacities, negligible volume work,
        no heat of mixing, and no additional composition entropy. If miscible non-ideal liquids are actually mixed,
        extra mixing terms must be included.
      </ConceptLens>
    </article>
  );
}

function RetainedReservoirExample() {
  return (
    <article className="rounded-[2rem] border border-rose-300/25 bg-rose-300/[0.06] p-5 md:p-7">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">
        Retained chapter constant-temperature block problem
      </p>
      <h3 className="mt-2 text-xl font-black text-white">
        A 400 K block transfers 1000 cal to a 300 K block
      </h3>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Formula label="Cold block">
          ΔS<sub>cold</sub> = +1000/300 = +3.333 cal K⁻¹
        </Formula>
        <Formula label="Hot block">
          ΔS<sub>hot</sub> = −1000/400 = −2.500 cal K⁻¹
        </Formula>
        <Formula label="Combined">
          ΔS<sub>total</sub> = +0.833 cal K⁻¹ ≈ 3.49 J K⁻¹
        </Formula>
      </div>

      <ConceptLens title="Reservoir interpretation" tone="amber">
        “Maintained at constant temperature” means each block behaves as a thermal reservoir.
        Heat flow through the finite 100 K difference is irreversible, so the total entropy increases.
      </ConceptLens>
    </article>
  );
}

function RetainedNeonExample() {
  return (
    <article className="rounded-[2rem] border border-emerald-300/25 bg-emerald-300/[0.06] p-5 md:p-7">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
        Retained chapter adiabatic expansion problem
      </p>
      <h3 className="mt-2 text-xl font-black text-white">
        10 g neon at 473 K expands from 506.25 kPa to 202.65 kPa
      </h3>

      <p className="mt-4 text-slate-200">
        Neon is monatomic and {String.raw`\(n=10/20=0.5\ \mathrm{mol}\)`}. Compare reversible expansion,
        expansion against constant {String.raw`\(P_{\mathrm{ext}}=202.65\ \mathrm{kPa}\)`}, and free expansion.
      </p>

      <div className="mt-5 space-y-4">
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">A. Reversible adiabatic</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Entropy">
              ΔS<sub>sys</sub> = ΔS<sub>surr</sub> = ΔS<sub>total</sub> = 0
            </Formula>
            <Formula label="Final temperature">
              T₂ = 473(202.65/506.25)<sup>2/5</sup> ≈ 328 K
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">B. Constant external pressure</p>
          <Formula label="Adiabatic energy balance">
            nC<sub>V,m</sub>(T₂−T₁) = −P<sub>ext</sub>(V₂−V₁)
          </Formula>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Final temperature">
              T₂ = 359.48 K
            </Formula>
            <Formula label="Entropy generated">
              ΔS<sub>sys</sub> ≈ 0.954 J K⁻¹, ΔS<sub>surr</sub> = 0
            </Formula>
          </div>
        </div>

        <div className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">C. Free expansion</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Formula label="Transfers and temperature">
              q = 0, w = 0, ΔU = 0, T₂ = 473 K
            </Formula>
            <Formula label="Entropy">
              ΔS = 0.5Rln(506.25/202.65) ≈ 3.81 J K⁻¹
            </Formula>
          </div>
        </div>
      </div>
    </article>
  );
}

function RetainedVanDerWaalsExample() {
  return (
    <article className="rounded-[2rem] border border-sky-300/25 bg-sky-300/[0.06] p-5 md:p-7">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">
        Retained chapter van der Waals numerical
      </p>
      <h3 className="mt-2 text-xl font-black text-white">
        One mole changes from 298 K, 1 dm³ to 373 K, 10 dm³
      </h3>

      <p className="mt-4 text-slate-200">
        Given {String.raw`\(b=0.06\ \mathrm{dm^3\,mol^{-1}}\)`} and
        {String.raw`\(C_{V,m}=29\ \mathrm{J\,mol^{-1}K^{-1}}\)`}.
      </p>

      <Formula label="Real-gas entropy expression">
        ΔS = C<sub>V,m</sub>ln(T₂/T₁) + Rln[(V₂−b)/(V₁−b)]
      </Formula>

      <Formula label="Substitution">
        ΔS = 29ln(373/298) + 8.314ln[(10−0.06)/(1−0.06)]
      </Formula>

      <Formula label="Result">
        ΔS = 26.12 J mol⁻¹ K⁻¹
      </Formula>
    </article>
  );
}

function SourceFragmentPreservation() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            Unclear statement retained
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Three-route isothermal comparison with missing prompt
          </h3>
        </div>
        <Chip tone="rose">[UNCLEAR SETUP]</Chip>
      </div>

      <p className="mt-4 leading-7 text-slate-300">
        The lower part of chapter page 147 contains a numerical comparison whose original question is not visible
        in the available preceding pages. The known calculation is preserved without inventing the missing setup.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-4">
          <p className="font-black text-emerald-300">Route I: reversible</p>
          <p className="mt-2 text-sm text-slate-200">ΔSsys = +9.134 J K⁻¹</p>
          <p className="text-sm text-slate-200">ΔSsurr = −9.134 J K⁻¹</p>
          <p className="text-sm text-slate-200">ΔStotal = 0</p>
        </div>
        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-4">
          <p className="font-black text-amber-300">Route II: finite-step</p>
          <p className="mt-2 text-sm text-slate-200">ΔSsys = +9.134 J K⁻¹</p>
          <p className="text-sm text-slate-200">qirr = qrev − 836.8 J</p>
          <p className="text-sm text-slate-200">ΔStotal = +2.808 J K⁻¹</p>
        </div>
        <div className="rounded-2xl border border-rose-300/20 bg-rose-300/[0.05] p-4">
          <p className="font-black text-rose-300">Route III: free</p>
          <p className="mt-2 text-sm text-slate-200">ΔSsurr = 0</p>
          <p className="text-sm text-slate-200">ΔStotal = ΔSsys</p>
          <p className="text-sm text-slate-200">ΔSsys = +9.134 J K⁻¹</p>
        </div>
      </div>

      <ConceptLens title="What can be inferred safely" tone="violet">
        The visible value {String.raw`\(9.134\ \mathrm{J\,K^{-1}}\)`} equals {String.raw`\(R\ln3\)`}, so the system entropy calculation used
        a one-mole ideal-gas volume ratio of three. The exact original temperature, volumes, and external pressure
        are not visible and are therefore not reconstructed.
      </ConceptLens>
    </article>
  );
}

const problems = [
  {
    title: "Concept Application 1 — binary mixing derivation",
    question:
      "Derive the ideal-gas entropy of mixing for nA moles of A and nB moles of B initially at the same T and P.",
    solution:
      "Each gas expands isothermally from its own initial volume to the total volume. Since Vtotal/VA = 1/xA and Vtotal/VB = 1/xB, ΔSmix = −R(nA ln xA + nB ln xB).",
  },
  {
    title: "Concept Application 2 — maximum composition",
    question:
      "For fixed total moles of two distinct ideal gases, find the composition that maximises molar entropy of mixing.",
    solution:
      "Differentiate −R[x ln x +(1−x)ln(1−x)]. The derivative is −R ln[x/(1−x)], which vanishes at x = 1/2. The second derivative is negative, so the maximum is equimolar.",
  },
  {
    title: "Concept Application 3 — maximum value",
    question:
      "Find the maximum molar entropy of mixing for two ideal gases.",
    solution:
      "At xA = xB = 1/2, ΔSmix,m = −R[2(1/2)ln(1/2)] = Rln2.",
  },
  {
    title: "Concept Application 4 — identical gases",
    question:
      "Why is the entropy of mixing zero when the partition separates identical ideal gases at the same T and P?",
    solution:
      "Removing the partition creates no new distinguishable thermodynamic composition. The initial and final macrostates are identical.",
  },
  {
    title: "Concept Application 5 — dilution limit",
    question:
      "What happens to the partial molar mixing entropy −R ln xi as xi approaches zero?",
    solution:
      "It grows without bound because a trace component gains access to a very large volume per molecule. The total contribution ni(−R ln xi) still tends to zero as ni tends to zero.",
  },
  {
    title: "Concept Application 6 — multicomponent mixture",
    question:
      "Write the entropy of mixing for k distinct ideal gases.",
    solution:
      "ΔSmix = −RΣi ni ln xi, and the molar value is −RΣi xi ln xi.",
  },
  {
    title: "Concept Application 7 — thermal equilibrium temperature",
    question:
      "Two insulated bodies with constant heat capacities C1 and C2 start at T1 and T2. Derive Tf.",
    solution:
      "Energy conservation gives C1(Tf−T1)+C2(Tf−T2)=0, hence Tf=(C1T1+C2T2)/(C1+C2).",
  },
  {
    title: "Concept Application 8 — positivity of thermal mixing entropy",
    question:
      "Why is C1ln(Tf/T1)+C2ln(Tf/T2) positive when T1 ≠ T2?",
    solution:
      "The final temperature is the heat-capacity-weighted arithmetic mean, while the entropy expression compares it with a corresponding weighted geometric mean. The arithmetic mean exceeds the geometric mean for unequal temperatures.",
  },
  {
    title: "Concept Application 9 — reservoir heat transfer",
    question:
      "Heat Q flows from TH to TC, with TH > TC. Write the entropy generated.",
    solution:
      "Sgen = Q(1/TC−1/TH) > 0.",
  },
  {
    title: "Concept Application 10 — finite and infinitesimal gradients",
    question:
      "How can the same total heat be transferred reversibly between two temperature ranges?",
    solution:
      "Use an infinite sequence of intermediate reservoirs whose temperatures differ infinitesimally from the receiving body at every step. Then total entropy generation tends to zero.",
  },
  {
    title: "Concept Application 11 — water multistage pressure effect",
    question:
      "In the retained water problem, why does compression from 1 atm to 5 atm lower the vapour entropy?",
    solution:
      "For an ideal gas at fixed temperature, ΔS = −Rln(P2/P1). Raising pressure reduces accessible volume.",
  },
  {
    title: "Concept Application 12 — system versus surroundings",
    question:
      "Why can the water-system entropy be calculated from any reversible route while the surroundings entropy cannot?",
    solution:
      "System entropy is a state function. Surroundings entropy depends on the actual heat amounts and reservoir temperatures used in the real path.",
  },
  {
    title: "Concept Application 13 — adiabatic path ranking",
    question:
      "Rank the final temperatures in the retained neon expansion.",
    solution:
      "Reversible adiabatic gives the lowest temperature, about 328 K; constant-external-pressure expansion gives 359.48 K; free expansion gives 473 K. Less work output means less cooling.",
  },
  {
    title: "Concept Application 14 — entropy ranking of neon routes",
    question:
      "Rank entropy generation for the three neon routes.",
    solution:
      "Reversible: 0; constant external pressure: about 0.954 J K⁻¹; free expansion: about 3.81 J K⁻¹.",
  },
  {
    title: "Concept Application 15 — van der Waals excluded volume",
    question:
      "Why does the mixing-space logarithm of a van der Waals gas involve V−nb rather than V?",
    solution:
      "The molecular cores exclude volume nb from translational access. The available configurational volume is V−nb.",
  },
  {
    title: "Concept Application 16 — heat of mixing caveat",
    question:
      "Why is the simple two-liquid thermal-equilibration formula incomplete for non-ideal miscible liquids?",
    solution:
      "Actual mixing can have non-zero enthalpy, volume, and composition entropy. These contributions alter both the final temperature and total entropy.",
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
    "Entropy of mixing is positive even for identical gases.",
    "Incorrect",
    "Thermodynamic mixing entropy is zero for identical gases initially at the same T and P.",
  ],
  [
    "Maximum total mixing entropy always occurs at equal mole numbers.",
    "Needs a constraint",
    "The equimolar maximum applies for fixed total moles of two distinct ideal gases, or to the molar entropy function.",
  ],
  [
    "Ideal-gas mixing releases heat.",
    "Incorrect",
    "For ideal gases at the same temperature, ΔUmix = ΔHmix = 0.",
  ],
  [
    "The final temperature of two bodies is the simple average.",
    "Incorrect",
    "It is a heat-capacity-weighted average unless the total heat capacities are equal.",
  ],
  [
    "If one body loses entropy, the process violates the Second Law.",
    "Incorrect",
    "The total entropy of the isolated combination must increase; one subsystem may lose entropy.",
  ],
  [
    "The arbitrary entropy route also determines surroundings entropy.",
    "Incorrect",
    "Only the system state change is route independent. Surroundings entropy requires the actual heat-transfer history.",
  ],
  [
    "A heading controls the physics even when all equations calculate another property.",
    "Incorrect",
    "The retained water heading says enthalpy, but its equations are entropy equations. Both interpretations are distinguished explicitly.",
  ],
  [
    "Free adiabatic expansion is isentropic because q = 0.",
    "Incorrect",
    "It is irreversible and generates entropy; only reversible adiabatic expansion is isentropic.",
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
      title: "Opening a perfume bottle",
      text: "Distinct molecules spread into the surrounding air. Each component gains accessible volume and the mixing entropy rises.",
      tone: "cyan" as Tone,
    },
    {
      title: "Hot milk and cold coffee",
      text: "Energy conservation sets the final temperature; the logarithmic entropy balance proves the equilibration is irreversible.",
      tone: "amber" as Tone,
    },
    {
      title: "Compressed gas released into a tank",
      text: "Free expansion can leave ideal-gas temperature unchanged while generating substantial entropy.",
      tone: "rose" as Tone,
    },
    {
      title: "Separating a gas mixture",
      text: "Restoring the unmixed state requires work because spontaneous mixing has increased entropy.",
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

export default function ThermodynamicsPart20() {
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
            <Chip tone="amber">MIXING & MULTISTAGE ENTROPY</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Entropy Numericals
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Mixing creates accessible states; thermal equilibration creates entropy
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Multistage state-function routes, ideal-gas mixing, finite-temperature heat flow,
                and controlled versus uncontrolled expansion are unified by one rule:
                endpoint entropy is fixed, but entropy generation depends on the real process.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Core formulas
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-base font-black text-white">
                  ΔS<sub>mix</sub> = −RΣn<sub>i</sub>lnx<sub>i</sub>
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-base font-black text-white">
                  ΔS<sub>thermal</sub> = ΣC<sub>i</sub>ln(T<sub>f</sub>/T<sub>i</sub>)
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-base font-black text-white">
                  reversible: ΔS<sub>univ</sub> = 0
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Multistage entropy: liquid water to compressed vapour"
          subtitle="A convenient reversible route converts a difficult endpoint change into additive pieces."
        >
          <MultistageEntropyRouteAnimation />
          <MultistageWaterExample />
        </Section>

        <Section
          index="02"
          title="Entropy of mixing two distinct ideal gases"
          subtitle="Each species undergoes an isothermal expansion into the total mixture volume."
        >
          <MixingParticlesAnimation />

          <Formula label="Binary ideal-gas mixing">
            ΔS<sub>mix</sub> = −R[n<sub>A</sub>lnx<sub>A</sub> + n<sub>B</sub>lnx<sub>B</sub>]
          </Formula>

          <Formula label="Molar form">
            ΔS<sub>mix,m</sub> = −R[x<sub>A</sub>lnx<sub>A</sub> + x<sub>B</sub>lnx<sub>B</sub>]
          </Formula>

          <MixingFormulaTable />
          <RetainedGasMixingExample />

          <ConceptLens title="Gibbs-paradox safeguard" tone="rose">
            The formula applies to distinguishable components. Mixing two portions of the same ideal gas at the same
            temperature and pressure creates no thermodynamic mixing entropy.
          </ConceptLens>
        </Section>

        <Section index="03" title="Maximum entropy of binary mixing">
          <BinaryMixingEntropyGraph />

          <Formula label="Fixed total moles">
            ΔS<sub>mix,m</sub> = −R[xlnx + (1−x)ln(1−x)]
          </Formula>

          <Formula label="Stationary condition">
            d(ΔS<sub>mix,m</sub>)/dx = −Rln[x/(1−x)] = 0
          </Formula>

          <Formula label="Maximum">
            x<sub>A</sub> = x<sub>B</sub> = 1/2, n<sub>A</sub>:n<sub>B</sub> = 1:1
          </Formula>

          <Formula label="Maximum molar value">
            ΔS<sub>mix,m,max</sub> = Rln2 = 5.763 J mol⁻¹ K⁻¹
          </Formula>

          <ConceptLens title="Constraint must be stated" tone="amber">
            Equal amounts maximise the molar mixing entropy, or the total entropy when the total amount is fixed.
            Without a fixed total amount, adding more matter increases the extensive total entropy without a finite maximum.
          </ConceptLens>
        </Section>

        <Section
          index="04"
          title="Mixing bodies initially at different temperatures"
          subtitle="The word “mixing” here means thermal contact; material mixing may add further terms."
        >
          <ThermalEquilibrationAnimation />

          <Formula label="Adiabatic energy balance">
            ΣC<sub>i</sub>(T<sub>f</sub>−T<sub>i</sub>) = 0
          </Formula>

          <Formula label="Constant heat capacities">
            T<sub>f</sub> = (ΣC<sub>i</sub>T<sub>i</sub>)/(ΣC<sub>i</sub>)
          </Formula>

          <Formula label="Total entropy change">
            ΔS<sub>total</sub> = ΣC<sub>i</sub>ln(T<sub>f</sub>/T<sub>i</sub>) &gt; 0
          </Formula>

          <RetainedThermalMixingExample />
          <RetainedReservoirExample />
        </Section>

        <Section
          index="05"
          title="Retained neon adiabatic comparison"
          subtitle="Reversibility controls work, cooling, and entropy generation."
        >
          <NeonPathAnimation />
          <RetainedNeonExample />
        </Section>

        <Section index="06" title="Retained van der Waals numerical">
          <RetainedVanDerWaalsExample />

          <ConceptLens title="Why the attraction parameter a is absent" tone="violet">
            For the van der Waals model, the attraction contribution in the pressure and internal-energy derivative
            cancels in the entropy differential. The excluded-volume parameter {String.raw`\(b\)`} remains through {String.raw`\(V-nb\)`}.
          </ConceptLens>
        </Section>

        <Section index="07" title="Preserved incomplete chapter fragment">
          <SourceFragmentPreservation />
        </Section>

        <Section index="08" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="09" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={20} />

<Section index="10" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                State entropy adds by route; mixing entropy adds by component; irreversible equilibration creates entropy
              </h2>
            </div>
            <Chip tone="emerald">PART 20 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Ideal-gas mixing", "−RΣni ln xi"],
              ["Binary maximum", "equimolar, R ln2 per mole"],
              ["Thermal contact", "ΣCi ln(Tf/Ti) > 0"],
              ["Adiabatic routes", "less work output means more entropy generation"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={20} />


</main>
  );
}
