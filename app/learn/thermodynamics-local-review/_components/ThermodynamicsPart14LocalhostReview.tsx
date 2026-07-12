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

function HeatEngineAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 760"
        role="img"
        aria-labelledby="engine-title engine-description"
        className="h-auto w-full"
      >
        <title id="engine-title">Animated heat engine operating between hot and cold reservoirs</title>
        <desc id="engine-description">
          Heat QH enters from a hot reservoir, the engine produces work, and the remaining heat QC is rejected to a cold reservoir.
        </desc>

        <defs>
          <marker id="heAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="heCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="heRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
          <radialGradient id="engineCore">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#312e81" />
          </radialGradient>
        </defs>

        <rect width="1200" height="760" rx="34" fill="#020617" />

        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          HEAT ENGINE: CYCLIC CONVERSION OF PART OF HEAT INTO WORK
        </text>

        <rect x="360" y="105" width="480" height="110" rx="28" fill="#7c2d12" stroke="#f97316" strokeWidth="8" />
        <text x="600" y="155" fill="#fed7aa" fontSize="28" fontWeight="900" textAnchor="middle">HOT RESERVOIR / SOURCE</text>
        <text x="600" y="190" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">T<tspan baselineShift="sub">H</tspan></text>

        <circle cx="600" cy="390" r="125" fill="url(#engineCore)" stroke="#a78bfa" strokeWidth="9" />
        <text x="600" y="377" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">ENGINE</text>
        <text x="600" y="420" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">returns to initial state each cycle</text>

        <g transform="translate(600 390)">
          <animateTransform attributeName="transform" type="rotate" from="0 600 390" to="360 600 390" dur="5s" repeatCount="indefinite" />
          <line x1="-75" y1="0" x2="75" y2="0" stroke="#fde047" strokeWidth="12" />
          <line x1="0" y1="-75" x2="0" y2="75" stroke="#fde047" strokeWidth="12" />
        </g>

        <rect x="360" y="575" width="480" height="110" rx="28" fill="#164e63" stroke="#22d3ee" strokeWidth="8" />
        <text x="600" y="625" fill="#a5f3fc" fontSize="28" fontWeight="900" textAnchor="middle">COLD RESERVOIR / SINK</text>
        <text x="600" y="660" fill="#f8fafc" fontSize="22" fontWeight="900" textAnchor="middle">T<tspan baselineShift="sub">C</tspan></text>

        <path d="M600 225 V250" stroke="#fbbf24" strokeWidth="12" markerEnd="url(#heAmber)">
          <animate attributeName="stroke-dasharray" values="0 140;70 70;140 0" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="650" y="252" fill="#fde68a" fontSize="24" fontWeight="900">QH</text>

        <path d="M600 520 V560" stroke="#22d3ee" strokeWidth="12" markerEnd="url(#heCyan)">
          <animate attributeName="stroke-dasharray" values="140 0;70 70;0 140" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="650" y="555" fill="#a5f3fc" fontSize="24" fontWeight="900">QC</text>

        <path d="M735 390 H1050" stroke="#fb7185" strokeWidth="12" markerEnd="url(#heRose)">
          <animate attributeName="stroke-dasharray" values="0 320;160 160;320 0" dur="2.3s" repeatCount="indefinite" />
        </path>
        <text x="900" y="355" fill="#fda4af" fontSize="25" fontWeight="900" textAnchor="middle">useful work output</text>

        <rect x="70" y="295" width="300" height="185" rx="26" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="220" y="338" fill="#a7f3d0" fontSize="22" fontWeight="900" textAnchor="middle">PER CYCLE</text>
        <text x="220" y="390" fill="#f8fafc" fontSize="25" fontWeight="900" textAnchor="middle">Wout = QH − QC</text>
        <text x="220" y="435" fill="#cbd5e1" fontSize="18" textAnchor="middle">0 &lt; Wout &lt; QH</text>

        <text x="600" y="730" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Reservoir temperatures remain effectively constant despite the exchanged heat.
        </text>
      </svg>
    </div>
  );
}

function CarnotFourStageAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 820"
        role="img"
        aria-labelledby="carnot-stage-title carnot-stage-description"
        className="h-auto w-full"
      >
        <title id="carnot-stage-title">Animated four-stage Carnot cycle</title>
        <desc id="carnot-stage-description">
          The working gas undergoes reversible isothermal expansion, reversible adiabatic expansion,
          reversible isothermal compression, and reversible adiabatic compression.
        </desc>

        <defs>
          <marker id="csArrowA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fbbf24" />
          </marker>
          <marker id="csArrowB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
          <marker id="csArrowC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="csArrowD" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
          </marker>
        </defs>

        <rect width="1200" height="820" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          CARNOT CYCLE: FOUR REVERSIBLE LEGS
        </text>

        {[
          { x: 55, title: "1 → 2", subtitle: "isothermal expansion", stroke: "#fbbf24", t: "TH", q: "QH enters", piston: "365;230;365" },
          { x: 345, title: "2 → 3", subtitle: "adiabatic expansion", stroke: "#34d399", t: "TH → TC", q: "q = 0", piston: "365;215;365" },
          { x: 635, title: "3 → 4", subtitle: "isothermal compression", stroke: "#22d3ee", t: "TC", q: "QC leaves", piston: "230;365;230" },
          { x: 925, title: "4 → 1", subtitle: "adiabatic compression", stroke: "#f472b6", t: "TC → TH", q: "q = 0", piston: "215;365;215" },
        ].map((item, idx) => (
          <g key={item.title}>
            <text x={item.x + 110} y="120" fill={item.stroke} fontSize="28" fontWeight="900" textAnchor="middle">{item.title}</text>
            <text x={item.x + 110} y="154" fill="#cbd5e1" fontSize="17" textAnchor="middle">{item.subtitle}</text>

            <path d={`M${item.x + 10} 510 V200 H${item.x + 210} V510`} fill="none" stroke={item.stroke} strokeWidth="8" />
            <rect x={item.x + 32} y="345" width="156" height="24" rx="8" fill={item.stroke}>
              <animate attributeName="y" values={item.piston} dur={`${4.6 + idx * 0.35}s`} repeatCount="indefinite" />
            </rect>
            <line x1={item.x + 110} y1="200" x2={item.x + 110} y2="345" stroke={item.stroke} strokeWidth="14" strokeLinecap="round">
              <animate attributeName="y2" values={item.piston} dur={`${4.6 + idx * 0.35}s`} repeatCount="indefinite" />
            </line>

            {[0,1,2,3].map((i) => (
              <circle
                key={i}
                cx={item.x + 50 + (i % 2) * 100}
                cy={410 + Math.floor(i / 2) * 55}
                r="10"
                fill={idx < 2 ? "#fde047" : "#67e8f9"}
              >
                <animate
                  attributeName={i % 2 ? "cx" : "cy"}
                  values={i % 2 ? `${item.x + 35};${item.x + 180};${item.x + 35}` : `${395 + Math.floor(i / 2) * 55};${430 + Math.floor(i / 2) * 55};${395 + Math.floor(i / 2) * 55}`}
                  dur={`${1.8 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            <rect x={item.x + 10} y="545" width="200" height="105" rx="22" fill="#0f172a" stroke={item.stroke} strokeWidth="4" />
            <text x={item.x + 110} y="582" fill={item.stroke} fontSize="20" fontWeight="900" textAnchor="middle">{item.t}</text>
            <text x={item.x + 110} y="620" fill="#e2e8f0" fontSize="18" textAnchor="middle">{item.q}</text>
          </g>
        ))}

        <path d="M165 690 H455" stroke="#fbbf24" strokeWidth="8" markerEnd="url(#csArrowA)" />
        <path d="M455 715 H745" stroke="#34d399" strokeWidth="8" markerEnd="url(#csArrowB)" />
        <path d="M745 690 H1035" stroke="#22d3ee" strokeWidth="8" markerEnd="url(#csArrowC)" />
        <path d="M1035 755 H165" stroke="#f472b6" strokeWidth="8" markerEnd="url(#csArrowD)" />

        <text x="600" y="795" fill="#94a3b8" fontSize="18" textAnchor="middle">
          The adiabatic legs connect the two reservoir temperatures without heat transfer.
        </text>
      </svg>
    </div>
  );
}

function CarnotDiagrams() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4">
        <svg viewBox="0 0 600 560" role="img" aria-label="Carnot cycle on a pressure-volume diagram" className="h-auto w-full">
        <title>Thermodynamics Part 14 scientific diagram 3</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
          <defs>
            <marker id="pvA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
            </marker>
            <pattern id="pvShade" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="12" stroke="#a78bfa" strokeWidth="4" opacity="0.28" />
            </pattern>
          </defs>
          <rect width="600" height="560" rx="28" fill="#020617" />
          <text x="300" y="45" fill="#f8fafc" fontSize="27" fontWeight="900" textAnchor="middle">P–V DIAGRAM</text>
          <line x1="70" y1="490" x2="545" y2="490" stroke="#e2e8f0" strokeWidth="4" />
          <line x1="70" y1="490" x2="70" y2="80" stroke="#e2e8f0" strokeWidth="4" />
          <text x="560" y="500" fill="#e2e8f0" fontSize="20">V</text>
          <text x="50" y="70" fill="#e2e8f0" fontSize="20">P</text>

          <path d="M135 145 C220 175 300 215 410 270 C445 315 460 365 475 420 C365 395 285 370 205 335 C170 275 150 215 135 145 Z" fill="url(#pvShade)" />
          <path id="pvCarnot" d="M135 145 C220 175 300 215 410 270 C445 315 460 365 475 420 C365 395 285 370 205 335 C170 275 150 215 135 145" fill="none" stroke="#34d399" strokeWidth="8" markerEnd="url(#pvA)" />
          <circle r="10" fill="#fde047">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#pvCarnot" />
            </animateMotion>
          </circle>
          <text x="115" y="135" fill="#f8fafc" fontSize="20" fontWeight="900">1</text>
          <text x="420" y="260" fill="#f8fafc" fontSize="20" fontWeight="900">2</text>
          <text x="485" y="430" fill="#f8fafc" fontSize="20" fontWeight="900">3</text>
          <text x="185" y="350" fill="#f8fafc" fontSize="20" fontWeight="900">4</text>
          <text x="280" y="145" fill="#fde68a" fontSize="18" fontWeight="900">TH isotherm</text>
          <text x="310" y="445" fill="#a5f3fc" fontSize="18" fontWeight="900">TC isotherm</text>
          <text x="300" y="530" fill="#ddd6fe" fontSize="18" fontWeight="900" textAnchor="middle">enclosed area = net work output</text>
        </svg>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-4">
        <svg viewBox="0 0 600 560" role="img" aria-label="Carnot cycle on a temperature-entropy diagram" className="h-auto w-full">
        <title>Thermodynamics Part 14 scientific diagram 4</title>
        <desc>Original responsive scientific visual supporting the thermodynamics lesson.</desc>
          <defs>
            <marker id="tsA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill="#f472b6" />
            </marker>
            <pattern id="tsShade" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="12" stroke="#f472b6" strokeWidth="4" opacity="0.25" />
            </pattern>
          </defs>
          <rect width="600" height="560" rx="28" fill="#020617" />
          <text x="300" y="45" fill="#f8fafc" fontSize="27" fontWeight="900" textAnchor="middle">T–S DIAGRAM</text>
          <line x1="70" y1="490" x2="545" y2="490" stroke="#e2e8f0" strokeWidth="4" />
          <line x1="70" y1="490" x2="70" y2="80" stroke="#e2e8f0" strokeWidth="4" />
          <text x="560" y="500" fill="#e2e8f0" fontSize="20">S</text>
          <text x="50" y="70" fill="#e2e8f0" fontSize="20">T</text>

          <rect x="170" y="155" width="270" height="245" fill="url(#tsShade)" stroke="#f472b6" strokeWidth="8" />
          <path id="tsCarnot" d="M170 155 H440 V400 H170 V155" fill="none" stroke="#f472b6" strokeWidth="8" markerEnd="url(#tsA)" />
          <circle r="10" fill="#fde047">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#tsCarnot" />
            </animateMotion>
          </circle>
          <text x="145" y="150" fill="#f8fafc" fontSize="20" fontWeight="900">1</text>
          <text x="450" y="150" fill="#f8fafc" fontSize="20" fontWeight="900">2</text>
          <text x="450" y="420" fill="#f8fafc" fontSize="20" fontWeight="900">3</text>
          <text x="145" y="420" fill="#f8fafc" fontSize="20" fontWeight="900">4</text>
          <text x="115" y="165" fill="#fde68a" fontSize="18" fontWeight="900">TH</text>
          <text x="115" y="405" fill="#a5f3fc" fontSize="18" fontWeight="900">TC</text>
          <text x="305" y="130" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">QH = TH ΔS</text>
          <text x="305" y="435" fill="#a5f3fc" fontSize="18" fontWeight="900" textAnchor="middle">QC = TC ΔS</text>
          <text x="300" y="530" fill="#ddd6fe" fontSize="18" fontWeight="900" textAnchor="middle">rectangle area = Wout</text>
        </svg>
      </div>
    </div>
  );
}

function CarnotDerivation() {
  const steps = [
    {
      title: "Leg 1 → 2",
      equation: "QH = nRTH ln(V2/V1)",
      text: "Reversible isothermal expansion at the hot-reservoir temperature.",
      tone: "amber" as Tone,
    },
    {
      title: "Leg 2 → 3",
      equation: "q23 = 0",
      text: "Reversible adiabatic expansion lowers the gas temperature from TH to TC.",
      tone: "emerald" as Tone,
    },
    {
      title: "Leg 3 → 4",
      equation: "QC = nRTC ln(V3/V4)",
      text: "QC is the positive magnitude of heat rejected during reversible isothermal compression.",
      tone: "cyan" as Tone,
    },
    {
      title: "Leg 4 → 1",
      equation: "q41 = 0",
      text: "Reversible adiabatic compression raises the temperature from TC back to TH.",
      tone: "rose" as Tone,
    },
    {
      title: "Adiabatic geometry",
      equation: "V2/V1 = V3/V4",
      text: "This follows by dividing the two reversible-adiabatic endpoint relations.",
      tone: "violet" as Tone,
    },
    {
      title: "Heat ratio",
      equation: "QC/QH = TC/TH",
      text: "The logarithmic volume ratios are identical and cancel.",
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

function TemperatureLeversGraphic() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 680" role="img" aria-labelledby="lever-title lever-description" className="h-auto w-full">
        <title id="lever-title">Effect of source and sink temperature on Carnot efficiency</title>
        <desc id="lever-description">
          Raising the hot temperature increases efficiency; lowering the cold temperature also increases efficiency.
          For equal absolute temperature changes, lowering the sink has the larger effect.
        </desc>

        <rect width="1200" height="680" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          TEMPERATURE LEVERS OF CARNOT EFFICIENCY
        </text>

        <rect x="420" y="120" width="360" height="110" rx="28" fill="#0f172a" stroke="#a78bfa" strokeWidth="6" />
        <text x="600" y="165" fill="#ddd6fe" fontSize="26" fontWeight="900" textAnchor="middle">η = 1 − TC/TH</text>
        <text x="600" y="205" fill="#cbd5e1" fontSize="18" textAnchor="middle">absolute temperatures in kelvin</text>

        <rect x="95" y="310" width="430" height="245" rx="30" fill="#0f172a" stroke="#f97316" strokeWidth="7" />
        <text x="310" y="360" fill="#fed7aa" fontSize="24" fontWeight="900" textAnchor="middle">RAISE TH</text>
        <path d="M180 480 H430" stroke="#fbbf24" strokeWidth="10" />
        <polygon points="430,480 400,462 400,498" fill="#fbbf24" />
        <text x="310" y="430" fill="#fde68a" fontSize="22" fontWeight="900" textAnchor="middle">η increases</text>
        <text x="310" y="525" fill="#cbd5e1" fontSize="18" textAnchor="middle">∂η/∂TH = TC/TH²</text>

        <rect x="675" y="310" width="430" height="245" rx="30" fill="#0f172a" stroke="#22d3ee" strokeWidth="7" />
        <text x="890" y="360" fill="#a5f3fc" fontSize="24" fontWeight="900" textAnchor="middle">LOWER TC</text>
        <path d="M1015 480 H765" stroke="#22d3ee" strokeWidth="10" />
        <polygon points="765,480 795,462 795,498" fill="#22d3ee" />
        <text x="890" y="430" fill="#a5f3fc" fontSize="22" fontWeight="900" textAnchor="middle">η increases</text>
        <text x="890" y="525" fill="#cbd5e1" fontSize="18" textAnchor="middle">∂η/∂TC = −1/TH</text>

        <rect x="270" y="590" width="660" height="50" rx="22" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="623" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          For equal kelvin changes, lowering TC has the larger efficiency effect.
        </text>
      </svg>
    </div>
  );
}

function CarnotTheoremCards() {
  const cards = [
    {
      title: "Maximum efficiency",
      text: "No engine operating between the same two reservoir temperatures can be more efficient than a reversible engine.",
      tone: "emerald" as Tone,
    },
    {
      title: "Universal reversible value",
      text: "All reversible engines between the same TH and TC have the same efficiency.",
      tone: "cyan" as Tone,
    },
    {
      title: "Working-fluid independence",
      text: "Efficiency depends only on reservoir temperatures, not on whether the working substance is an ideal gas, real gas, liquid–vapour system or another reversible medium.",
      tone: "violet" as Tone,
    },
    {
      title: "Irreversibility penalty",
      text: "Friction, finite temperature differences, turbulence and uncontrolled expansion reduce actual efficiency below the Carnot value.",
      tone: "rose" as Tone,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.title} className={`rounded-3xl border p-5 ${toneMap[card.tone]}`}>
          <h3 className="text-lg font-black text-white">{card.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-200">{card.text}</p>
        </article>
      ))}
    </div>
  );
}

function VanDerWaalsProof() {
  return (
    <article className="rounded-[2rem] border border-violet-300/25 bg-violet-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">
            Retained chapter proof
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            A van der Waals working gas gives the same Carnot efficiency
          </h3>
        </div>
        <Chip tone="violet">WORKING-FLUID INDEPENDENCE</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        Let the working gas obey
        {String.raw`\((P+a n^2/V^2)(V-nb)=nRT\)`}, with heat capacity {String.raw`\(C_{V,m}\)`} treated as constant.
        The four cycle legs remain reversible.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="Reversible isothermal entropy change">
          ΔS = nR ln[(V₂−nb)/(V₁−nb)]
        </Formula>

        <Formula label="Heat absorbed at TH">
          Q<sub>H</sub> = nRT<sub>H</sub> ln[(V₂−nb)/(V₁−nb)]
        </Formula>

        <Formula label="Heat rejected magnitude at TC">
          Q<sub>C</sub> = nRT<sub>C</sub> ln[(V₃−nb)/(V₄−nb)]
        </Formula>

        <Formula label="Reversible adiabatic relation">
          T(V−nb)<sup>R/CV,m</sup> = constant
        </Formula>

        <div className="grid gap-4 md:grid-cols-2">
          <Formula label="Upper adiabat">
            T<sub>H</sub>(V₂−nb)<sup>R/CV,m</sup> = T<sub>C</sub>(V₃−nb)<sup>R/CV,m</sup>
          </Formula>
          <Formula label="Lower adiabat">
            T<sub>C</sub>(V₄−nb)<sup>R/CV,m</sup> = T<sub>H</sub>(V₁−nb)<sup>R/CV,m</sup>
          </Formula>
        </div>

        <Formula label="Divide the adiabatic relations">
          (V₂−nb)/(V₁−nb) = (V₃−nb)/(V₄−nb)
        </Formula>

        <Formula label="Heat ratio and efficiency">
          Q<sub>C</sub>/Q<sub>H</sub> = T<sub>C</sub>/T<sub>H</sub> ⇒ η = 1−T<sub>C</sub>/T<sub>H</sub>
        </Formula>
      </div>

      <ConceptLens title="Where did the attraction parameter a go?" tone="amber">
        The attraction term affects individual work and internal-energy changes on particular legs, but the reversible
        isothermal heat is {String.raw`\(T\Delta S\)`}, and the cyclic efficiency depends on the heat ratio. The final temperature-only
        result is independent of both {String.raw`\(a\)`} and {String.raw`\(b\)`}.
      </ConceptLens>
    </article>
  );
}

function EngineComparisonTable() {
  const rows = [
    ["Reversible/Carnot", "No friction; infinitesimal thermal and mechanical gradients", "η = 1−TC/TH", "maximum theoretical efficiency"],
    ["Internally reversible but finite heat transfer", "Mechanical idealisation but heat crosses finite ΔT", "below Carnot", "external irreversibility remains"],
    ["Real engine", "Friction, turbulence, finite rates, leakage", "well below Carnot", "finite power and practical losses"],
    ["Single-reservoir 100% converter", "QH converted entirely to W in a cycle", "η = 1 claimed", "impossible by Second Law"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Engine type</th>
            <th className="px-4 py-3 font-black text-white">Key features</th>
            <th className="px-4 py-3 font-black text-white">Efficiency</th>
            <th className="px-4 py-3 font-black text-white">Meaning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([type, feature, efficiency, meaning]) => (
            <tr key={type}>
              <td className="px-4 py-3 font-semibold text-slate-100">{type}</td>
              <td className="px-4 py-3 text-slate-300">{feature}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{efficiency}</td>
              <td className="px-4 py-3 text-slate-300">{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const problems = [
  {
    title: "Concept Application 1 — direct Carnot efficiency",
    question:
      "A reversible engine operates between 600 K and 300 K. Calculate its efficiency.",
    solution:
      "η = 1 − TC/TH = 1 − 300/600 = 0.50, or 50%.",
  },
  {
    title: "Concept Application 2 — heat rejection",
    question:
      "The engine in the previous problem absorbs 8.0 kJ per cycle. Find work output and heat rejected.",
    solution:
      "Wout = ηQH = 0.50×8.0 = 4.0 kJ. Therefore QC = QH−Wout = 4.0 kJ.",
  },
  {
    title: "Concept Application 3 — unknown source temperature",
    question:
      "A Carnot engine has efficiency 40% and rejects heat to a 300 K sink. Find TH.",
    solution:
      "0.40 = 1−300/TH, so TH = 300/0.60 = 500 K.",
  },
  {
    title: "Concept Application 4 — unknown sink temperature",
    question:
      "A reversible engine operates at 70% efficiency with TH = 1000 K. Find TC.",
    solution:
      "TC = TH(1−η) = 1000×0.30 = 300 K.",
  },
  {
    title: "Concept Application 5 — compare temperature changes",
    question:
      "For TH = 600 K and TC = 300 K, compare the efficiency gain from raising TH by 10 K with lowering TC by 10 K.",
    solution:
      "Original η = 0.5000. Raising TH to 610 K gives η ≈ 0.5082, gain 0.0082. Lowering TC to 290 K gives η ≈ 0.5167, gain 0.0167. Lowering the sink has the larger effect.",
  },
  {
    title: "Concept Application 6 — impossible claim",
    question:
      "An engine between 500 K and 300 K claims 50% efficiency. Assess the claim.",
    solution:
      "Carnot maximum is 1−300/500 = 0.40. A 50% engine would exceed the reversible maximum and is impossible.",
  },
  {
    title: "Concept Application 7 — reversible heat ratio",
    question:
      "A reversible engine absorbs 12 kJ at 800 K and rejects heat at 400 K. Find QC.",
    solution:
      "For a reversible engine, QC/QH = TC/TH = 400/800 = 1/2. Hence QC = 6 kJ.",
  },
  {
    title: "Concept Application 8 — 100% efficiency",
    question:
      "Why can a finite-temperature Carnot engine not reach 100% efficiency?",
    solution:
      "η = 1−TC/TH. With finite TH and positive TC, the ratio TC/TH is non-zero. Reaching η = 1 would require TC = 0 K or the limiting idealisation TH→∞.",
  },
  {
    title: "Concept Application 9 — working-fluid change",
    question:
      "An ideal-gas Carnot engine is replaced by a reversible liquid–vapour working substance between the same reservoirs. What happens to efficiency?",
    solution:
      "Nothing. Carnot theorem fixes the efficiency solely through TH and TC, provided the complete cycle is reversible.",
  },
  {
    title: "Concept Application 10 — adiabatic volume ratio",
    question:
      "Show that the two isothermal volume ratios in an ideal-gas Carnot cycle are equal.",
    solution:
      "Use THV2^(γ−1)=TCV3^(γ−1) and TCV4^(γ−1)=THV1^(γ−1). Division gives (V2/V1)^(γ−1)=(V3/V4)^(γ−1), so V2/V1=V3/V4.",
  },
  {
    title: "Concept Application 11 — T–S rectangle",
    question:
      "A reversible Carnot cycle has entropy width ΔS = 20 J K⁻¹ between 500 K and 300 K. Find QH, QC and Wout.",
    solution:
      "QH = THΔS = 10.0 kJ. QC = TCΔS = 6.0 kJ. Wout = (TH−TC)ΔS = 4.0 kJ.",
  },
  {
    title: "Concept Application 12 — real-engine benchmark",
    question:
      "A real engine between 700 K and 300 K has efficiency 35%. What fraction of the Carnot efficiency does it achieve?",
    solution:
      "ηCarnot = 1−300/700 ≈ 0.5714. The fraction is 0.35/0.5714 ≈ 0.6125, or about 61.3% of Carnot.",
  },
  {
    title: "Concept Application 13 — theorem contradiction argument",
    question:
      "Why must all reversible engines between the same reservoirs have identical efficiency?",
    solution:
      "If one reversible engine were more efficient, the more efficient engine could drive the less efficient one in reverse and create a net transfer that violates the Second Law. Therefore their efficiencies must be equal.",
  },
  {
    title: "Concept Application 14 — power warning",
    question:
      "Does the Carnot engine deliver maximum power?",
    solution:
      "No. Carnot operation is reversible and requires infinitesimal gradients, so the ideal cycle takes infinite time and has zero limiting power. It maximises efficiency, not power.",
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
    "A heat engine converts all absorbed heat into work.",
    "Incorrect",
    "A cyclic engine must reject some heat to a lower-temperature sink.",
  ],
  [
    "Carnot efficiency uses Celsius temperatures.",
    "Incorrect",
    "TH and TC must be absolute temperatures in kelvin.",
  ],
  [
    "A reversible engine can have 100% efficiency at ordinary temperatures.",
    "Incorrect",
    "η = 1 requires TC = 0 K or the limiting idealisation TH → ∞.",
  ],
  [
    "Changing the working fluid changes Carnot efficiency.",
    "Incorrect",
    "For a reversible cycle between fixed reservoirs, efficiency depends only on TH and TC.",
  ],
  [
    "Carnot engine has maximum power.",
    "Incorrect",
    "It has maximum efficiency. The reversible limit operates infinitely slowly and has zero limiting power.",
  ],
  [
    "The adiabatic legs transfer heat because temperature changes.",
    "Incorrect",
    "Their temperature changes arise from work; q = 0.",
  ],
  [
    "All reversible engines are equally efficient regardless of reservoir temperatures.",
    "Incorrect",
    "Equality applies only when they operate between the same TH and TC.",
  ],
  [
    "A real engine may exceed Carnot efficiency by using a better design.",
    "Incorrect",
    "Design can reduce losses but cannot surpass the reversible temperature limit.",
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
      title: "Steam power station",
      text: "Fuel or nuclear heat supplies a hot source, turbines produce work, and cooling towers or rivers act as the low-temperature sink.",
      tone: "amber" as Tone,
    },
    {
      title: "Car engine radiator",
      text: "The engine cannot convert all combustion energy into work. Waste heat must be rejected through exhaust and cooling systems.",
      tone: "rose" as Tone,
    },
    {
      title: "Ocean thermal power",
      text: "A small temperature difference between warm surface water and cold deep water produces a very low Carnot ceiling.",
      tone: "cyan" as Tone,
    },
    {
      title: "Cryogenic sink advantage",
      text: "A colder sink can raise the theoretical efficiency, but creating and maintaining that sink may itself require substantial energy.",
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

export default function ThermodynamicsPart14() {
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
            <Chip tone="amber">CARNOT ENGINE EDITION</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Heat-Engine Layer
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                Maximum efficiency is fixed by temperature—not by clever working fluid
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A heat engine must absorb heat from a hot source, reject part to a cold sink, and convert only the remainder into work.
                The reversible Carnot cycle establishes the absolute efficiency ceiling.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Carnot limit
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-amber-400/10 p-4 font-mono text-lg font-black text-white">
                  W<sub>out</sub> = Q<sub>H</sub> − Q<sub>C</sub>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-lg font-black text-white">
                  η = W<sub>out</sub>/Q<sub>H</sub>
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-lg font-black text-white">
                  η<sub>Carnot</sub> = 1 − T<sub>C</sub>/T<sub>H</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Thermal reservoirs, source and sink"
          subtitle="Ideal bodies whose temperature remains effectively constant during heat exchange."
        >
          <p>
            A thermal reservoir has such a large effective heat capacity that receiving or releasing the cycle heat does
            not measurably alter its temperature. The high-temperature reservoir is the <strong className="text-white">source</strong>;
            the low-temperature reservoir is the <strong className="text-white">sink</strong>.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ConceptLens title="Hot source" tone="amber">
              Supplies the absorbed heat magnitude {String.raw`\(Q_H\)`} at temperature {String.raw`\(T_H\)`}.
            </ConceptLens>
            <ConceptLens title="Working system" tone="violet">
              Executes a cycle and returns to its initial state.
            </ConceptLens>
            <ConceptLens title="Cold sink" tone="cyan">
              Receives the rejected heat magnitude {String.raw`\(Q_C\)`} at temperature {String.raw`\(T_C\)`}.
            </ConceptLens>
            <ConceptLens title="Temperature order" tone="emerald">
              A heat engine requires {String.raw`\(T_H>T_C>0\)`}.
            </ConceptLens>
          </div>
        </Section>

        <Section
          index="02"
          title="Heat engine and efficiency"
          subtitle="A continuously operating engine must work cyclically."
        >
          <HeatEngineAnimation />

          <Formula label="Energy conservation per cycle">
            Q<sub>H</sub> = W<sub>out</sub> + Q<sub>C</sub>
          </Formula>

          <Formula label="Thermal efficiency">
            η = W<sub>out</sub>/Q<sub>H</sub> = 1 − Q<sub>C</sub>/Q<sub>H</sub>
          </Formula>

          <ConceptLens title="Magnitude convention" tone="rose">
            {String.raw`\(Q_H\)`}, {String.raw`\(Q_C\)`}, and {String.raw`\(W_{\text{out}}\)`} are positive magnitudes in engine language. In chemistry sign notation,
            net work on the engine is negative because the engine delivers work to the surroundings.
          </ConceptLens>

          <ConceptLens title="Why an engine needs a sink" tone="amber">
            The Second Law forbids cyclic conversion of all heat drawn from one reservoir into work. Some heat must be rejected.
          </ConceptLens>
        </Section>

        <Section
          index="03"
          title="Carnot cycle"
          subtitle="A theoretical reversible cycle designed to achieve the maximum possible efficiency."
        >
          <p>
            A fixed quantity of working substance executes four reversible processes: two isothermal and two adiabatic.
          </p>

          <CarnotFourStageAnimation />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ConceptLens title="1 → 2" tone="amber">
              Reversible isothermal expansion at {String.raw`\(T_H\)`}; heat {String.raw`\(Q_H\)`} enters and the gas performs work.
            </ConceptLens>
            <ConceptLens title="2 → 3" tone="emerald">
              Reversible adiabatic expansion; {String.raw`\(q=0\)`} and temperature falls from {String.raw`\(T_H\)`} to {String.raw`\(T_C\)`}.
            </ConceptLens>
            <ConceptLens title="3 → 4" tone="cyan">
              Reversible isothermal compression at {String.raw`\(T_C\)`}; heat {String.raw`\(Q_C\)`} is rejected.
            </ConceptLens>
            <ConceptLens title="4 → 1" tone="rose">
              Reversible adiabatic compression; {String.raw`\(q=0\)`} and temperature rises back to {String.raw`\(T_H\)`}.
            </ConceptLens>
          </div>
        </Section>

        <Section index="04" title="Carnot cycle on P–V and T–S diagrams">
          <CarnotDiagrams />

          <ConceptLens title="P–V interpretation" tone="cyan">
            The clockwise enclosed area equals net work output. Expansion occurs at higher pressure than compression.
          </ConceptLens>

          <ConceptLens title="T–S interpretation" tone="violet">
            For a reversible process, {String.raw`\(\delta q_{\mathrm{rev}}=T\,dS\)`}. The two isotherms form the horizontal sides and
            the reversible adiabats are vertical because entropy remains constant.
          </ConceptLens>
        </Section>

        <Section
          index="05"
          title="Derivation of Carnot efficiency"
          subtitle="The chapter ideal-gas derivation reconstructed with explicit signs and magnitudes."
        >
          <CarnotDerivation />

          <Formula label="Work output">
            W<sub>out</sub> = Q<sub>H</sub> − Q<sub>C</sub>
          </Formula>

          <Formula label="Heat ratio">
            Q<sub>C</sub>/Q<sub>H</sub> = T<sub>C</sub>/T<sub>H</sub>
          </Formula>

          <Formula label="Carnot efficiency">
            η<sub>Carnot</sub> = 1 − T<sub>C</sub>/T<sub>H</sub>
          </Formula>

          <ConceptLens title="Absolute temperatures only" tone="rose">
            The temperature ratio is meaningful only on an absolute scale. Always use kelvin.
          </ConceptLens>
        </Section>

        <Section index="06" title="Why 100% efficiency is impossible">
          <div className="grid gap-4 md:grid-cols-2">
            <Formula label="Condition for η = 1 at finite TH">
              T<sub>C</sub> = 0 K
            </Formula>
            <Formula label="Alternative limiting idealisation">
              T<sub>H</sub> → ∞ for finite T<sub>C</sub>
            </Formula>
          </div>

          <ConceptLens title="Both are unattainable operating limits" tone="rose">
            Absolute zero cannot be reached, and an infinite-temperature source is not a physical reservoir.
            Therefore every real or reversible finite-temperature engine has {String.raw`\(\eta<1\)`}.
          </ConceptLens>
        </Section>

        <Section index="07" title="How source and sink temperatures affect efficiency">
          <TemperatureLeversGraphic />

          <Formula label="Differential sensitivities">
            ∂η/∂T<sub>H</sub> = T<sub>C</sub>/T<sub>H</sub><sup>2</sup>, ∂η/∂T<sub>C</sub> = −1/T<sub>H</sub>
          </Formula>

          <ConceptLens title="Equal kelvin changes are not equally powerful" tone="amber">
            Because {String.raw`\(T_C/T_H<1\)`}, lowering {String.raw`\(T_C\)`} by one kelvin changes efficiency more than raising {String.raw`\(T_H\)`} by one kelvin.
          </ConceptLens>

          <ConceptLens title="Engineering caution" tone="cyan">
            A colder sink may raise the theoretical ceiling, but producing that sink can require additional equipment and energy.
          </ConceptLens>
        </Section>

        <Section index="08" title="Carnot theorem">
          <CarnotTheoremCards />

          <ConceptLens title="Maximum work logic" tone="emerald">
            Reversible expansion produces the maximum possible work, while reversible compression requires the minimum work input.
            Their combination gives the largest possible net cycle work for the given heat input and reservoir temperatures.
          </ConceptLens>

          <ConceptLens title="Contradiction proof idea" tone="violet">
            If one reversible engine were more efficient than another between the same reservoirs, the better engine could drive
            the other backward and create a forbidden net effect. Hence all reversible engines must share the same efficiency.
          </ConceptLens>
        </Section>

        <Section index="09" title="Retained van der Waals working-fluid proof">
          <VanDerWaalsProof />
        </Section>

        <Section index="10" title="Reversible versus real engines">
          <EngineComparisonTable />

          <ConceptLens title="Efficiency versus power" tone="amber">
            Carnot operation maximises efficiency but requires infinitesimal temperature and pressure differences.
            The ideal cycle therefore takes infinite time and has zero limiting power.
          </ConceptLens>
        </Section>

        <Section index="11" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="12" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={14} />

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
                Carnot efficiency is a universal temperature ceiling
              </h2>
            </div>
            <Chip tone="emerald">PART 14 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Engine balance", "QH = Wout + QC"],
              ["Efficiency", "η = 1 − QC/QH"],
              ["Carnot limit", "η = 1 − TC/TH"],
              ["Theorem", "all reversible engines match between same reservoirs"],
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
