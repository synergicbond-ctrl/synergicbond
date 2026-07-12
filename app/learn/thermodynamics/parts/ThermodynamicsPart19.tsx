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

function CoordinateMapAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="coordinate-title coordinate-description"
        className="h-auto w-full"
      >
        <title id="coordinate-title">Equivalent T–V and T–P entropy coordinate descriptions</title>
        <desc id="coordinate-description">
          The same ideal-gas entropy change can be written using temperature and volume or temperature and pressure.
          An animated state moves between the two equivalent coordinate maps.
        </desc>

        <defs>
          <marker id="cmCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="cmAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ONE STATE CHANGE • TWO EQUIVALENT ENTROPY COORDINATE FORMS
        </text>

        <g>
          <text x="300" y="120" fill="#a5f3fc" fontSize="27" fontWeight="900" textAnchor="middle">T–V FORM</text>
          <line x1="95" y1="560" x2="520" y2="560" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="95" y1="560" x2="95" y2="165" stroke="#e2e8f0" strokeWidth="5" />
          <text x="535" y="572" fill="#e2e8f0" fontSize="21">V</text>
          <text x="72" y="155" fill="#e2e8f0" fontSize="21">T</text>

          <path id="tvPath" d="M165 480 C260 390 365 315 465 220" fill="none" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#cmCyan)" />
          <circle cx="165" cy="480" r="14" fill="#fde047" />
          <circle cx="465" cy="220" r="14" fill="#fde047" />
          <text x="135" y="510" fill="#f8fafc" fontSize="20" fontWeight="900">1</text>
          <text x="480" y="210" fill="#f8fafc" fontSize="20" fontWeight="900">2</text>

          <circle r="12" fill="#67e8f9">
            <animateMotion dur="4.8s" repeatCount="indefinite">
              <mpath href="#tvPath" />
            </animateMotion>
          </circle>

          <rect x="110" y="600" width="380" height="80" rx="22" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
          <text x="300" y="635" fill="#a5f3fc" fontSize="18" fontWeight="900" textAnchor="middle">
            ΔS = n∫Cv,m(T)dT/T
          </text>
          <text x="300" y="665" fill="#f8fafc" fontSize="18" fontWeight="900" textAnchor="middle">
            + nR ln(V₂/V₁)
          </text>
        </g>

        <line x1="600" y1="125" x2="600" y2="690" stroke="#334155" strokeWidth="4" />

        <g>
          <text x="900" y="120" fill="#fde68a" fontSize="27" fontWeight="900" textAnchor="middle">T–P FORM</text>
          <line x1="680" y1="560" x2="1105" y2="560" stroke="#e2e8f0" strokeWidth="5" />
          <line x1="680" y1="560" x2="680" y2="165" stroke="#e2e8f0" strokeWidth="5" />
          <text x="1120" y="572" fill="#e2e8f0" fontSize="21">P</text>
          <text x="657" y="155" fill="#e2e8f0" fontSize="21">T</text>

          <path id="tpPath" d="M760 480 C865 410 935 315 1035 220" fill="none" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#cmAmber)" />
          <circle cx="760" cy="480" r="14" fill="#fde047" />
          <circle cx="1035" cy="220" r="14" fill="#fde047" />
          <text x="730" y="510" fill="#f8fafc" fontSize="20" fontWeight="900">1</text>
          <text x="1050" y="210" fill="#f8fafc" fontSize="20" fontWeight="900">2</text>

          <circle r="12" fill="#fde047">
            <animateMotion dur="4.8s" repeatCount="indefinite">
              <mpath href="#tpPath" />
            </animateMotion>
          </circle>

          <rect x="695" y="600" width="380" height="80" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
          <text x="885" y="635" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">
            ΔS = n∫Cp,m(T)dT/T
          </text>
          <text x="885" y="665" fill="#f8fafc" fontSize="18" fontWeight="900" textAnchor="middle">
            − nR ln(P₂/P₁)
          </text>
        </g>

        <text x="600" y="730" fill="#94a3b8" fontSize="18" textAnchor="middle">
          The two formulas give exactly the same endpoint entropy change when PV = nRT.
        </text>
      </svg>
    </div>
  );
}

function HeatCapacityIntegralAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 720"
        role="img"
        aria-labelledby="capacity-int-title capacity-int-description"
        className="h-auto w-full"
      >
        <title id="capacity-int-title">Entropy as the area under heat capacity divided by temperature</title>
        <desc id="capacity-int-description">
          A temperature-dependent heat capacity curve is divided by temperature.
          The shaded area under C over T from T₁ to T₂ equals the thermal contribution to entropy change.
        </desc>

        <defs>
          <pattern id="hcHatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#22d3ee" strokeWidth="4" opacity="0.28" />
          </pattern>
        </defs>

        <rect width="1200" height="720" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          TEMPERATURE-DEPENDENT HEAT CAPACITY: ENTROPY IS AN INTEGRAL
        </text>

        <line x1="130" y1="610" x2="1080" y2="610" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="130" y1="610" x2="130" y2="105" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1100" y="622" fill="#e2e8f0" fontSize="22">T</text>
        <text x="82" y="95" fill="#e2e8f0" fontSize="21">C(T)/T</text>

        <path
          d="M200 500 C360 430 500 330 680 280 C820 240 930 215 1020 200 L1020 610 L200 610 Z"
          fill="url(#hcHatch)"
          stroke="#22d3ee"
          strokeWidth="5"
        />

        <line x1="300" y1="610" x2="300" y2="440" stroke="#fbbf24" strokeWidth="4" strokeDasharray="12 10" />
        <line x1="900" y1="610" x2="900" y2="225" stroke="#f472b6" strokeWidth="4" strokeDasharray="12 10" />
        <text x="300" y="650" fill="#fde68a" fontSize="19" textAnchor="middle">T₁</text>
        <text x="900" y="650" fill="#f9a8d4" fontSize="19" textAnchor="middle">T₂</text>

        <rect x="280" y="135" width="640" height="90" rx="26" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="173" fill="#ddd6fe" fontSize="21" fontWeight="900" textAnchor="middle">
          C(T) = a + bT + cT²
        </text>
        <text x="600" y="205" fill="#f8fafc" fontSize="19" fontWeight="900" textAnchor="middle">
          ∫C(T)dT/T = a ln(T₂/T₁) + b(T₂−T₁) + c(T₂²−T₁²)/2
        </text>

        <circle cx="300" cy="440" r="11" fill="#fde047">
          <animate attributeName="cx" values="300;900;300" dur="5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="440;225;440" dur="5s" repeatCount="indefinite" />
        </circle>

        <text x="600" y="690" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Use CV,m for the T–V form and CP,m for the T–P form.
        </text>
      </svg>
    </div>
  );
}

function IsothermalRoutesAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 790"
        role="img"
        aria-labelledby="routes-title routes-description"
        className="h-auto w-full"
      >
        <title id="routes-title">Three isothermal paths between the same ideal-gas states</title>
        <desc id="routes-description">
          Reversible expansion, one-step expansion against constant external pressure,
          and free expansion have the same system entropy change but different surroundings and universe entropy changes.
        </desc>

        <defs>
          <marker id="irGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="irAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="irRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>

        <rect width="1200" height="790" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          SAME ISOTHERMAL ENDPOINTS • DIFFERENT ENTROPY GENERATION
        </text>

        <line x1="115" y1="590" x2="1085" y2="590" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="115" y1="590" x2="115" y2="105" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1110" y="602" fill="#e2e8f0" fontSize="22">V</text>
        <text x="90" y="95" fill="#e2e8f0" fontSize="22">P</text>

        <path id="revRoute" d="M210 170 C390 260 640 390 980 505" fill="none" stroke="#34d399" strokeWidth="5" markerEnd="url(#irGreen)" />
        <path id="stepRoute" d="M210 170 V505 H980" fill="none" stroke="#fbbf24" strokeWidth="5" markerEnd="url(#irAmber)" />
        <path id="freeRoute" d="M210 170 C410 560 720 565 980 505" fill="none" stroke="#fb7185" strokeWidth="5" strokeDasharray="18 12" markerEnd="url(#irRose)" />

        <circle r="12" fill="#86efac">
          <animateMotion dur="5.2s" repeatCount="indefinite">
            <mpath href="#revRoute" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#fde047">
          <animateMotion dur="4.1s" repeatCount="indefinite">
            <mpath href="#stepRoute" />
          </animateMotion>
        </circle>
        <circle r="12" fill="#fda4af">
          <animateMotion dur="3.2s" repeatCount="indefinite">
            <mpath href="#freeRoute" />
          </animateMotion>
        </circle>

        <text x="660" y="315" fill="#a7f3d0" fontSize="20" fontWeight="900">reversible isotherm</text>
        <text x="600" y="540" fill="#fde68a" fontSize="20" fontWeight="900">constant Pext step</text>
        <text x="610" y="675" fill="#fda4af" fontSize="20" fontWeight="900">free expansion: q = w = 0</text>

        <circle cx="210" cy="170" r="15" fill="#f8fafc" />
        <circle cx="980" cy="505" r="15" fill="#f8fafc" />
        <text x="175" y="158" fill="#f8fafc" fontSize="22" fontWeight="900">1</text>
        <text x="998" y="530" fill="#f8fafc" fontSize="22" fontWeight="900">2</text>

        <rect x="140" y="705" width="920" height="50" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4" />
        <text x="600" y="738" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          ΔSsys = nR ln(V₂/V₁) for every route; ΔSuniverse ranks irreversibility.
        </text>
      </svg>
    </div>
  );
}

function AdiabaticCancellationAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 750"
        role="img"
        aria-labelledby="adiabatic-title adiabatic-description"
        className="h-auto w-full"
      >
        <title id="adiabatic-title">Temperature and volume entropy contributions in adiabatic processes</title>
        <desc id="adiabatic-description">
          In reversible adiabatic expansion the positive volume contribution exactly cancels the negative temperature contribution.
          In irreversible adiabatic expansion the cancellation is incomplete and system entropy increases.
        </desc>

        <rect width="1200" height="750" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ADIABATIC ENTROPY: TEMPERATURE AND VOLUME TERMS COMPETE
        </text>

        <g>
          <text x="300" y="115" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">
            REVERSIBLE EXPANSION
          </text>
          <rect x="65" y="150" width="470" height="430" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="8" />

          <rect x="130" y="230" width="140" height="230" rx="18" fill="#164e63" />
          <rect x="330" y="230" width="140" height="230" rx="18" fill="#7c2d12" />

          <rect x="130" y="330" width="140" height="130" rx="18" fill="#22d3ee">
            <animate attributeName="height" values="130;200;130" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="330;260;330" dur="3.2s" repeatCount="indefinite" />
          </rect>

          <rect x="330" y="260" width="140" height="200" rx="18" fill="#fb7185">
            <animate attributeName="height" values="200;130;200" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="260;330;260" dur="3.2s" repeatCount="indefinite" />
          </rect>

          <text x="200" y="495" fill="#a5f3fc" fontSize="18" fontWeight="900" textAnchor="middle">+nR ln(V₂/V₁)</text>
          <text x="400" y="495" fill="#fda4af" fontSize="18" fontWeight="900" textAnchor="middle">nCv ln(T₂/T₁)</text>
          <text x="300" y="545" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">sum = 0</text>
        </g>

        <line x1="600" y1="100" x2="600" y2="620" stroke="#334155" strokeWidth="4" />

        <g>
          <text x="900" y="115" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">
            IRREVERSIBLE EXPANSION
          </text>
          <rect x="665" y="150" width="470" height="430" rx="32" fill="#0f172a" stroke="#fb7185" strokeWidth="8" />

          <rect x="730" y="220" width="140" height="240" rx="18" fill="#164e63" />
          <rect x="930" y="285" width="140" height="175" rx="18" fill="#7c2d12" />

          <rect x="730" y="285" width="140" height="175" rx="18" fill="#22d3ee">
            <animate attributeName="height" values="175;235;175" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y" values="285;225;285" dur="3s" repeatCount="indefinite" />
          </rect>

          <rect x="930" y="330" width="140" height="130" rx="18" fill="#fb7185">
            <animate attributeName="height" values="130;160;130" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y" values="330;300;330" dur="3s" repeatCount="indefinite" />
          </rect>

          <text x="800" y="495" fill="#a5f3fc" fontSize="18" fontWeight="900" textAnchor="middle">volume increase</text>
          <text x="1000" y="495" fill="#fda4af" fontSize="18" fontWeight="900" textAnchor="middle">smaller cooling term</text>
          <text x="900" y="545" fill="#fda4af" fontSize="22" fontWeight="900" textAnchor="middle">sum &gt; 0</text>
        </g>

        <rect x="220" y="650" width="760" height="55" rx="22" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="686" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">
          Adiabatic means no entropy transfer with heat; irreversible adiabatic change still generates entropy.
        </text>
      </svg>
    </div>
  );
}

function MasterFormulaTable() {
  const rows = [
    ["General T–V", "n∫Cv,m(T)dT/T + nR ln(V₂/V₁)", "ideal gas, fixed composition"],
    ["Constant Cv,m", "nCv,m ln(T₂/T₁) + nR ln(V₂/V₁)", "ideal gas"],
    ["General T–P", "n∫Cp,m(T)dT/T − nR ln(P₂/P₁)", "ideal gas, fixed composition"],
    ["Constant Cp,m", "nCp,m ln(T₂/T₁) − nR ln(P₂/P₁)", "ideal gas"],
    ["Isochoric", "n∫Cv,m(T)dT/T", "V₂ = V₁"],
    ["Isobaric", "n∫Cp,m(T)dT/T", "P₂ = P₁"],
    ["Isothermal", "nR ln(V₂/V₁) = −nR ln(P₂/P₁)", "T₂ = T₁"],
    ["Reversible adiabatic", "0", "q = 0 and Sgen = 0"],
    ["Irreversible adiabatic", "> 0 for isolated closed system", "q = 0 and Sgen > 0"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Process/form</th>
            <th className="px-4 py-3 font-black text-white">System entropy change</th>
            <th className="px-4 py-3 font-black text-white">Condition</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([process, expression, condition]) => (
            <tr key={process}>
              <td className="px-4 py-3 font-semibold text-slate-100">{process}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{expression}</td>
              <td className="px-4 py-3 text-slate-300">{condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TemperatureDependentCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
        <h3 className="text-xl font-black text-white">Constant volume</h3>
        <Formula label="Heat-capacity model">
          C<sub>V,m</sub>(T) = a + bT + cT²
        </Formula>
        <Formula label="Entropy change">
          ΔS = n[a ln(T₂/T₁) + b(T₂−T₁) + c(T₂²−T₁²)/2]
        </Formula>
      </article>

      <article className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.05] p-5">
        <h3 className="text-xl font-black text-white">Constant pressure</h3>
        <Formula label="Heat-capacity model">
          C<sub>P,m</sub>(T) = a + bT + cT²
        </Formula>
        <Formula label="Entropy change">
          ΔS = n[a ln(T₂/T₁) + b(T₂−T₁) + c(T₂²−T₁²)/2]
        </Formula>
      </article>
    </div>
  );
}

function IsochoricIsobaricBalanceTable() {
  const rows = [
    [
      "Isochoric reversible",
      "nCv,m ln(T₂/T₁)",
      "−nCv,m ln(T₂/T₁)",
      "0",
    ],
    [
      "Isochoric irreversible, reservoir at T₂",
      "nCv,m ln(T₂/T₁)",
      "−nCv,m(T₂−T₁)/T₂",
      "nCv,m[ln(T₂/T₁)−(T₂−T₁)/T₂]",
    ],
    [
      "Isobaric reversible",
      "nCp,m ln(T₂/T₁)",
      "−nCp,m ln(T₂/T₁)",
      "0",
    ],
    [
      "Isobaric irreversible, reservoir at T₂",
      "nCp,m ln(T₂/T₁)",
      "−nCp,m(T₂−T₁)/T₂",
      "nCp,m[ln(T₂/T₁)−(T₂−T₁)/T₂]",
    ],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Heating path</th>
            <th className="px-4 py-3 font-black text-white">ΔSsystem</th>
            <th className="px-4 py-3 font-black text-white">ΔSsurroundings</th>
            <th className="px-4 py-3 font-black text-white">ΔSuniverse</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([path, system, surroundings, universe]) => (
            <tr key={path}>
              <td className="px-4 py-3 font-semibold text-slate-100">{path}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{system}</td>
              <td className="px-4 py-3 font-mono text-amber-200">{surroundings}</td>
              <td className="px-4 py-3 font-mono text-emerald-300">{universe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WorkedExamples() {
  const examples = [
    {
      title: "General T–V change",
      problem:
        "Two moles of an ideal diatomic gas with constant Cv,m = 5R/2 change from 300 K, 5.00 L to 450 K, 12.0 L. Find ΔS.",
      solution:
        "ΔS = nCv,m ln(T₂/T₁) + nR ln(V₂/V₁) = 2(5R/2)ln(1.5) + 2Rln(2.4) ≈ 31.41 J K⁻¹.",
    },
    {
      title: "Temperature-dependent Cv",
      problem:
        "One mole is heated at constant volume from 300 K to 600 K with Cv,m = 20.0 + 0.0100T J mol⁻¹ K⁻¹. Find ΔS.",
      solution:
        "ΔS = 20.0ln(600/300) + 0.0100(600−300) = 13.863 + 3.000 = 16.86 J K⁻¹.",
    },
    {
      title: "General T–P change",
      problem:
        "A 1.50 mol ideal diatomic gas with Cp,m = 7R/2 changes from 500 K, 10.0 bar to 350 K, 2.00 bar. Find ΔS.",
      solution:
        "ΔS = nCp,m ln(350/500) − nR ln(2/10) ≈ 4.50 J K⁻¹. Cooling lowers entropy, while the large pressure drop raises it slightly more.",
    },
    {
      title: "Three isothermal routes",
      problem:
        "One mole of ideal gas at 320 K expands from 4.00 L to 12.0 L by reversible expansion, one-step expansion against the final pressure, and free expansion. Compare entropy balances.",
      solution:
        "For every path, ΔSsys = Rln3 = 9.134 J K⁻¹. Reversible: q = 2.923 kJ, ΔSsurr = −9.134 J K⁻¹, ΔSuniv = 0. One-step: q = RT(1−1/3) = 1.774 kJ, ΔSsurr = −5.543 J K⁻¹, ΔSuniv = 3.591 J K⁻¹. Free: q = w = 0, ΔSsurr = 0, ΔSuniv = 9.134 J K⁻¹.",
    },
    {
      title: "Irreversible adiabatic expansion",
      problem:
        "One mole of monatomic ideal gas at 300 K expands adiabatically from 10.0 L to 20.0 L against a constant external pressure equal to the final gas pressure. Find T₂ and ΔSsys.",
      solution:
        "Energy balance gives (3R/2)(T₂−300) = −(RT2/20)(20−10), so T₂ = 225 K. Then ΔS = (3R/2)ln(225/300) + Rln2 ≈ +2.18 J K⁻¹. Since q = 0, this equals entropy generated.",
    },
    {
      title: "Irreversible isochoric heating",
      problem:
        "One mole with constant Cv,m = 3R/2 is heated in a rigid vessel from 300 K to 600 K by a 600 K reservoir. Find ΔSsystem, ΔSsurroundings, and ΔSuniverse.",
      solution:
        "ΔSsys = (3R/2)ln2 = 8.644 J K⁻¹. qsys = (3R/2)(300) = 3.742 kJ. ΔSsurr = −3742/600 = −6.236 J K⁻¹. Hence ΔSuniv = +2.408 J K⁻¹.",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {examples.map((item) => (
        <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <h3 className=" font-black text-white">
            <span className="mr-2 text-amber-300">◆</span>
            {item.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-200">{item.problem}</p>
          <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Solution</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.solution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — derive T–V form",
    question:
      "Derive the entropy differential of an ideal gas in terms of T and V.",
    solution:
      "For an ideal gas, dU = nCv,m(T)dT and P = nRT/V. Since T dS = dU + P dV, dS = nCv,m(T)dT/T + nR dV/V.",
  },
  {
    title: "Concept Application 2 — derive T–P form",
    question:
      "Convert the T–V entropy differential into the T–P form.",
    solution:
      "From PV = nRT, dV/V = dT/T − dP/P. Substitute into dS = nCv,m dT/T + nR dV/V to obtain dS = nCp,m dT/T − nR dP/P.",
  },
  {
    title: "Concept Application 3 — isochoric cooling",
    question:
      "An ideal gas cools at constant volume. What determines the sign of ΔS?",
    solution:
      "ΔS = n∫Cv,m(T)dT/T. Since Cv,m > 0 and T₂ < T₁, the integral is negative.",
  },
  {
    title: "Concept Application 4 — isobaric heating",
    question:
      "For constant Cp,m and constant pressure heating from T₁ to T₂, write ΔS.",
    solution:
      "ΔS = nCp,m ln(T₂/T₁), positive when T₂ > T₁.",
  },
  {
    title: "Concept Application 5 — pressure drop at constant temperature",
    question:
      "One mole of ideal gas undergoes an isothermal pressure drop from P₁ to P₂. Write ΔS.",
    solution:
      "ΔS = −R ln(P₂/P₁) = R ln(P₁/P₂). It is positive when P₂ < P₁.",
  },
  {
    title: "Concept Application 6 — isothermal compression",
    question:
      "What is the sign of the system entropy change during isothermal compression?",
    solution:
      "Negative: ΔSsys = nR ln(V₂/V₁), and V₂ < V₁.",
  },
  {
    title: "Concept Application 7 — route independence",
    question:
      "Why is ΔSsys identical for reversible and free expansion between the same ideal-gas endpoints?",
    solution:
      "Entropy is a state function. The actual heat and work differ, but the initial and final equilibrium states are the same.",
  },
  {
    title: "Concept Application 8 — q = 0 trap",
    question:
      "During free expansion qactual = 0. Why is ΔSsystem not zero?",
    solution:
      "The defining integral uses reversible heat along a reversible reference path, not the actual irreversible heat. For ideal-gas isothermal free expansion, ΔSsystem = nR ln(V₂/V₁) > 0.",
  },
  {
    title: "Concept Application 9 — one-step expansion proof",
    question:
      "For isothermal one-step expansion ending at Pext = P₂, prove ΔSuniverse > 0.",
    solution:
      "Let x = V₂/V₁ > 1. Then ΔSuniv/(nR) = ln x − (1−1/x). This is positive for x > 1.",
  },
  {
    title: "Concept Application 10 — reversible adiabat",
    question:
      "Use TV^(γ−1) = constant to prove ΔS = 0.",
    solution:
      "ΔS = nCv,m ln(T₂/T₁) + nR ln(V₂/V₁). Since ln(T₂/T₁) = −(γ−1)ln(V₂/V₁) and R = (γ−1)Cv,m, the two terms cancel.",
  },
  {
    title: "Concept Application 11 — irreversible adiabat",
    question:
      "Can an irreversible adiabatic process have ΔSsystem < 0 in an isolated closed system?",
    solution:
      "No. With q = 0, ΔSsystem = Sgen ≥ 0. A strict irreversible change gives ΔSsystem > 0.",
  },
  {
    title: "Concept Application 12 — temperature ranking",
    question:
      "An ideal gas expands adiabatically to the same final volume by reversible and irreversible paths. Which final temperature is higher?",
    solution:
      "The irreversible path generally performs less work, so it loses less internal energy and ends at the higher temperature.",
  },
  {
    title: "Concept Application 13 — compression ranking",
    question:
      "For the same initial state and final smaller volume, compare reversible and irreversible adiabatic final temperatures.",
    solution:
      "Irreversible compression requires greater work input, so the irreversible final temperature is higher.",
  },
  {
    title: "Concept Application 14 — variable heat capacity",
    question:
      "If C(T) = a + bT + cT², evaluate ∫T₁^T₂ C(T)dT/T.",
    solution:
      "The result is a ln(T₂/T₁) + b(T₂−T₁) + (c/2)(T2²−T1²).",
  },
  {
    title: "Concept Application 15 — identical endpoints",
    question:
      "Two ideal-gas processes connect identical T₁,V₁ and T₂,V₂ endpoints. One is reversible and one irreversible. Compare ΔSsystem.",
    solution:
      "They are equal because system entropy depends only on endpoints. The universe entropy distinguishes the paths.",
  },
  {
    title: "Concept Application 16 — spontaneous heating",
    question:
      "A colder ideal gas is suddenly placed in contact with a hotter reservoir. Why is ΔSuniverse positive?",
    solution:
      "The gas gains entropy nC ln(T₂/T₁), while the reservoir loses q/Treservoir. Because heat crosses a finite temperature difference, the gas gain exceeds the reservoir loss.",
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
    "The T–V and T–P formulas give different entropy changes.",
    "Incorrect",
    "They are equivalent descriptions connected by PV = nRT.",
  ],
  [
    "Heat capacity can always be treated as constant.",
    "Incorrect",
    "The logarithmic formulas assume constant Cv,m or Cp,m; otherwise integrate C(T)/T.",
  ],
  [
    "An isothermal ideal-gas process always has q = 0.",
    "Incorrect",
    "ΔU = 0, so q = −w. Only free expansion has q = w = 0 under the stated idealised conditions.",
  ],
  [
    "Free expansion is reversible because initial and final states can be connected reversibly.",
    "Incorrect",
    "A reversible reference path is only a calculation device. The actual free expansion is irreversible.",
  ],
  [
    "Adiabatic and isentropic mean the same thing.",
    "Incorrect",
    "Only reversible adiabatic change is isentropic.",
  ],
  [
    "During irreversible adiabatic compression, heat is produced and transferred.",
    "Incorrect",
    "No heat crosses the boundary. Work input raises internal energy and temperature while entropy is generated.",
  ],
  [
    "If system entropy is the same for two routes, their thermodynamic quality is the same.",
    "Incorrect",
    "Universe entropy and entropy generation distinguish reversible and irreversible routes.",
  ],
  [
    "Surroundings entropy is always −ΔSsystem.",
    "Incorrect",
    "That cancellation occurs only for a reversible total process.",
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
      title: "Compressed-air cylinder",
      text: "Rapid filling is approximately adiabatic and irreversible, so the gas heats and generates entropy.",
      tone: "rose" as Tone,
    },
    {
      title: "Aerosol cooling",
      text: "Rapid expansion lowers temperature; the actual path is irreversible even when heat transfer is initially small.",
      tone: "cyan" as Tone,
    },
    {
      title: "Rigid gas thermometer",
      text: "Heating at fixed volume changes temperature and pressure while entropy rises through the Cv/T integral.",
      tone: "amber" as Tone,
    },
    {
      title: "Gas escaping into an evacuated chamber",
      text: "Ideal-gas free expansion has q = w = ΔU = ΔT = 0 but positive entropy change.",
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

export default function ThermodynamicsPart19() {
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
            <Chip tone="emerald">IDEAL-GAS ENTROPY MAP</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Process Entropy Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Ideal-gas entropy separates temperature effects from expansion and compression effects
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Heating changes the distribution of molecular energy. Expansion changes accessible positional space.
                The ideal-gas entropy equations combine both contributions without depending on the actual path.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Master endpoint forms
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-base font-black text-white">
                  ΔS = n∫C<sub>V,m</sub>dT/T + nRln(V₂/V₁)
                </div>
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-base font-black text-white">
                  ΔS = n∫C<sub>P,m</sub>dT/T − nRln(P₂/P₁)
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-base font-black text-white">
                  reversible adiabat: ΔS = 0
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="General entropy change of an ideal gas"
          subtitle="Two independent variables describe the endpoint change."
        >
          <Formula label="Fundamental differential">
            T dS = dU + P dV
          </Formula>

          <Formula label="Ideal-gas internal energy">
            dU = nC<sub>V,m</sub>(T)dT
          </Formula>

          <Formula label="T–V differential">
            dS = nC<sub>V,m</sub>(T)dT/T + nR dV/V
          </Formula>

          <Formula label="T–V integrated form">
            ΔS = n∫<sub>T₁</sub><sup>T₂</sup>C<sub>V,m</sub>(T)dT/T + nRln(V₂/V₁)
          </Formula>

          <CoordinateMapAnimation />

          <ConceptLens title="Temperature and volume terms may oppose one another" tone="violet">
            Cooling contributes negatively, while expansion contributes positively. The sign of the total depends on which effect dominates.
          </ConceptLens>
        </Section>

        <Section index="02" title="Equivalent T–P form">
          <Formula label="Ideal-gas logarithmic differential">
            dV/V = dT/T − dP/P
          </Formula>

          <Formula label="Use Cp,m = Cv,m + R">
            dS = nC<sub>P,m</sub>(T)dT/T − nR dP/P
          </Formula>

          <Formula label="Integrated form">
            ΔS = n∫<sub>T₁</sub><sup>T₂</sup>C<sub>P,m</sub>(T)dT/T − nRln(P₂/P₁)
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Pressure decrease" tone="cyan">
              At fixed temperature, reducing pressure increases entropy because the gas occupies more volume.
            </ConceptLens>
            <ConceptLens title="Pressure increase" tone="rose">
              At fixed temperature, compression decreases entropy.
            </ConceptLens>
          </div>
        </Section>

        <Section
          index="03"
          title="Temperature-independent and temperature-dependent heat capacities"
          subtitle="The chapter polynomial integration is retained explicitly."
        >
          <HeatCapacityIntegralAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Constant Cv,m">
              ΔS = nC<sub>V,m</sub>ln(T₂/T₁) + nRln(V₂/V₁)
            </Formula>
            <Formula label="Constant Cp,m">
              ΔS = nC<sub>P,m</sub>ln(T₂/T₁) − nRln(P₂/P₁)
            </Formula>
          </div>

          <TemperatureDependentCards />

          <ConceptLens title="Use the fitted range only" tone="amber">
            A polynomial heat-capacity expression is valid only over the temperature range for which it was fitted.
          </ConceptLens>

          <ConceptLens title="Architecture boundary" tone="violet">
            This part uses heat-capacity functions only as entropy inputs. Detailed molecular heat-capacity theory remains in Thermochemistry.
          </ConceptLens>
        </Section>

        <Section index="04" title="Isochoric entropy change">
          <Formula label="Constant volume">
            ΔS = n∫<sub>T₁</sub><sup>T₂</sup>C<sub>V,m</sub>(T)dT/T
          </Formula>

          <Formula label="Constant Cv,m">
            ΔS = nC<sub>V,m</sub>ln(T₂/T₁)
          </Formula>

          <ConceptLens title="Heating" tone="emerald">
            {String.raw`\(T_2>T_1\)`} gives {String.raw`\(\Delta S>0\)`}.
          </ConceptLens>

          <ConceptLens title="Cooling" tone="cyan">
            {String.raw`\(T_2<T_1\)`} gives {String.raw`\(\Delta S<0\)`}. The surroundings may gain more entropy, so the total can still be positive.
          </ConceptLens>
        </Section>

        <Section index="05" title="Isobaric entropy change">
          <Formula label="Constant pressure">
            ΔS = n∫<sub>T₁</sub><sup>T₂</sup>C<sub>P,m</sub>(T)dT/T
          </Formula>

          <Formula label="Constant Cp,m">
            ΔS = nC<sub>P,m</sub>ln(T₂/T₁)
          </Formula>

          <ConceptLens title="Why Cp appears" tone="amber">
            At constant pressure, heat changes internal energy and also supports expansion work. The reversible heat is {String.raw`\(nC_{P,m}dT\)`}.
          </ConceptLens>
        </Section>

        <Section index="06" title="Reversible and irreversible heating balances">
          <IsochoricIsobaricBalanceTable />

          <ConceptLens title="Finite temperature difference creates entropy" tone="rose">
            A single hot reservoir heats the gas irreversibly. A reversible heating path requires a sequence of reservoirs differing infinitesimally from the gas temperature.
          </ConceptLens>
        </Section>

        <Section
          index="07"
          title="Isothermal expansion and compression"
          subtitle="The system entropy depends only on the volume or pressure ratio."
        >
          <Formula label="System entropy">
            ΔS<sub>sys</sub> = nRln(V₂/V₁) = −nRln(P₂/P₁)
          </Formula>

          <IsothermalRoutesAnimation />

          <div className="grid gap-4 md:grid-cols-3">
            <ConceptLens title="Reversible" tone="emerald">
              {String.raw`\(q_{\mathrm{rev}}=nRT\ln(V_2/V_1)\)`}, and
              {String.raw`\(\Delta S_{\mathrm{surr}}=-\Delta S_{\mathrm{sys}}\)`}.
            </ConceptLens>
            <ConceptLens title="One-step" tone="amber">
              {String.raw`\(q=P_{\mathrm{ext}}(V_2-V_1)\)`} for ideal-gas isothermal expansion, and
              {String.raw`\(\Delta S_{\mathrm{univ}}>0\)`}.
            </ConceptLens>
            <ConceptLens title="Free expansion" tone="rose">
              {String.raw`\(q=w=\Delta U=\Delta T=0\)`}, yet
              {String.raw`\(\Delta S_{\mathrm{sys}}=nR\ln(V_2/V_1)>0\)`}.
            </ConceptLens>
          </div>

          <Formula label="One-step expansion ending at Pext = P₂">
            ΔS<sub>univ</sub> = nR[ln x − (1−1/x)], x = V₂/V₁ &gt; 1
          </Formula>

          <Formula label="Sudden compression ending at Pext = P₂">
            ΔS<sub>univ</sub> = nR[x−1−ln x], x = V₁/V₂ &gt; 1
          </Formula>
        </Section>

        <Section
          index="08"
          title="Adiabatic entropy change"
          subtitle="No heat transfer does not imply zero entropy generation."
        >
          <Formula label="Actual heat condition">
            q = 0 ⇒ ΔS<sub>surr</sub> = 0 for an insulated outer boundary
          </Formula>

          <Formula label="Endpoint T–V form">
            ΔS<sub>sys</sub> = nC<sub>V,m</sub>ln(T₂/T₁) + nRln(V₂/V₁)
          </Formula>

          <Formula label="Endpoint T–P form">
            ΔS<sub>sys</sub> = nC<sub>P,m</sub>ln(T₂/T₁) − nRln(P₂/P₁)
          </Formula>

          <AdiabaticCancellationAnimation />

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Reversible adiabatic" tone="emerald">
              Temperature and volume contributions cancel exactly:
              {String.raw`\(\Delta S_{\mathrm{sys}}=0\)`}.
            </ConceptLens>
            <ConceptLens title="Irreversible adiabatic" tone="rose">
              Entropy is generated internally:
              {String.raw`\(\Delta S_{\mathrm{sys}}=\Delta S_{\mathrm{univ}}=S_{\mathrm{gen}}>0\)`}.
            </ConceptLens>
          </div>

          <ConceptLens title="Scientific correction to “heat produced”" tone="amber">
            During adiabatic compression, no heat crosses the boundary. Work input raises internal energy and temperature while irreversibility generates entropy.
          </ConceptLens>
        </Section>

        <Section index="09" title="Process formula matrix">
          <MasterFormulaTable />
        </Section>

        <Section index="10" title="Original complete worked examples">
          <WorkedExamples />
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={19} />

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
                Entropy is fixed by endpoints; route irreversibility appears in the universe balance
              </h2>
            </div>
            <Chip tone="emerald">PART 19 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["T–V form", "∫Cv/T + R ln volume ratio"],
              ["T–P form", "∫Cp/T − R ln pressure ratio"],
              ["Isothermal", "ΔS = nR ln(V₂/V₁)"],
              ["Adiabatic", "reversible: 0; irreversible: positive"],
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
