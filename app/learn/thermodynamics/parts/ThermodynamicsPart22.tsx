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

function ThirdLawCrystalAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 780"
        role="img"
        aria-labelledby="third-law-title third-law-description"
        className="h-auto w-full"
      >
        <title id="third-law-title">Approach to a perfectly ordered crystal at zero kelvin</title>
        <desc id="third-law-description">
          A crystal cools toward zero kelvin. Thermal vibrations shrink, and a unique perfectly ordered ground state has entropy approaching zero.
        </desc>

        <defs>
          <marker id="tlArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <radialGradient id="warmCrystal">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#7c2d12" />
          </radialGradient>
          <radialGradient id="coldCrystal">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#164e63" />
          </radialGradient>
        </defs>

        <rect width="1200" height="780" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          THIRD LAW: A UNIQUE PERFECT-CRYSTAL GROUND STATE HAS S → 0
        </text>

        <g>
          <text x="285" y="120" fill="#fde68a" fontSize="26" fontWeight="900" textAnchor="middle">
            FINITE TEMPERATURE
          </text>
          <rect x="75" y="155" width="420" height="410" rx="32" fill="#0f172a" stroke="#fbbf24" strokeWidth="8" />
          {Array.from({ length: 20 }).map((_, i) => {
            const cx = 130 + (i % 5) * 78;
            const cy = 220 + Math.floor(i / 5) * 82;
            return (
              <circle key={i} cx={cx} cy={cy} r="14" fill="url(#warmCrystal)">
                <animate
                  attributeName={i % 2 ? "cx" : "cy"}
                  values={
                    i % 2
                      ? `${cx - 14};${cx + 14};${cx - 14}`
                      : `${cy - 14};${cy + 14};${cy - 14}`
                  }
                  dur={`${1.1 + i * 0.04}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
          <text x="285" y="610" fill="#fde68a" fontSize="19" fontWeight="900" textAnchor="middle">
            many thermally accessible excitations
          </text>
        </g>

        <path d="M515 360 H675" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#tlArrow)">
          <animate attributeName="stroke-dasharray" values="0 180;90 90;180 0" dur="2.2s" repeatCount="indefinite" />
        </path>
        <text x="595" y="320" fill="#a5f3fc" fontSize="22" fontWeight="900" textAnchor="middle">
          cool toward 0 K
        </text>

        <g>
          <text x="915" y="120" fill="#a5f3fc" fontSize="26" fontWeight="900" textAnchor="middle">
            PERFECT CRYSTAL AT 0 K
          </text>
          <rect x="705" y="155" width="420" height="410" rx="32" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
          {Array.from({ length: 20 }).map((_, i) => {
            const cx = 760 + (i % 5) * 78;
            const cy = 220 + Math.floor(i / 5) * 82;
            return (
              <circle key={i} cx={cx} cy={cy} r="14" fill="url(#coldCrystal)">
                <animate attributeName="r" values="13;14;13" dur={`${3.2 + i * 0.05}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
          <text x="915" y="610" fill="#a5f3fc" fontSize="19" fontWeight="900" textAnchor="middle">
            one unique ordered ground-state arrangement
          </text>
        </g>

        <rect x="260" y="670" width="680" height="62" rx="24" fill="#0f172a" stroke="#34d399" strokeWidth="5" />
        <text x="600" y="710" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">
          Ω₀ = 1 ⇒ S(0) = k<tspan baselineShift="sub">B</tspan> ln1 = 0
        </text>

        <text x="600" y="765" fill="#94a3b8" fontSize="18" textAnchor="middle">
          Residual disorder changes Ω₀ from one and must be added explicitly.
        </text>
      </svg>
    </div>
  );
}

function BoltzmannMultiplicityAnimation() {
  const arrangements = [
    ["A", "B", "A", "B"],
    ["A", "A", "B", "B"],
    ["B", "A", "B", "A"],
    ["B", "B", "A", "A"],
    ["A", "B", "B", "A"],
    ["B", "A", "A", "B"],
  ];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 820"
        role="img"
        aria-labelledby="boltzmann-title boltzmann-description"
        className="h-auto w-full"
      >
        <title id="boltzmann-title">Microstates and Boltzmann entropy</title>
        <desc id="boltzmann-description">
          Several distinct microscopic arrangements produce one shared macroscopic description.
          Entropy grows as the logarithm of the number of accessible microstates.
        </desc>

        <rect width="1200" height="820" rx="34" fill="#020617" />
        <text x="600" y="58" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          BOLTZMANN BRIDGE: MICROSCOPIC MULTIPLICITY → MACROSCOPIC ENTROPY
        </text>

        <rect x="400" y="110" width="400" height="100" rx="28" fill="#0f172a" stroke="#a78bfa" strokeWidth="6" />
        <text x="600" y="150" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">
          one macrostate
        </text>
        <text x="600" y="185" fill="#f8fafc" fontSize="20" textAnchor="middle">
          two A units + two B units
        </text>

        {arrangements.map((arrangement, row) => {
          const y = 285 + row * 74;
          return (
            <g key={row}>
              <text x="165" y={y + 9} fill="#cbd5e1" fontSize="17" textAnchor="end">
                microstate {row + 1}
              </text>
              {arrangement.map((label, col) => (
                <g key={`${row}-${col}`}>
                  <rect
                    x={210 + col * 145}
                    y={y - 28}
                    width="105"
                    height="55"
                    rx="16"
                    fill={label === "A" ? "#164e63" : "#4c1d95"}
                    stroke={label === "A" ? "#22d3ee" : "#a78bfa"}
                    strokeWidth="4"
                  />
                  <text
                    x={262.5 + col * 145}
                    y={y + 8}
                    fill="#f8fafc"
                    fontSize="24"
                    fontWeight="900"
                    textAnchor="middle"
                  >
                    {label}
                  </text>
                </g>
              ))}
              <circle cx="930" cy={y} r="12" fill="#fde047">
                <animate attributeName="opacity" values="0.25;1;0.25" dur={`${1.5 + row * 0.18}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}

        <rect x="825" y="280" width="280" height="380" rx="30" fill="#0f172a" stroke="#34d399" strokeWidth="7" />
        <text x="965" y="335" fill="#a7f3d0" fontSize="24" fontWeight="900" textAnchor="middle">
          MULTIPLICITY
        </text>
        <text x="965" y="405" fill="#f8fafc" fontSize="35" fontWeight="900" textAnchor="middle">
          Ω = 6
        </text>
        <text x="965" y="485" fill="#fde68a" fontSize="25" fontWeight="900" textAnchor="middle">
          S = k<tspan baselineShift="sub">B</tspan> lnΩ
        </text>
        <text x="965" y="550" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          logarithm makes entropy additive
        </text>
        <text x="965" y="600" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          when independent multiplicities multiply
        </text>

        <rect x="205" y="755" width="790" height="44" rx="20" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="784" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">
          For N independent molecules with w orientations each: Ω = wᴺ and S = Nk<tspan baselineShift="sub">B</tspan>lnw
        </text>
      </svg>
    </div>
  );
}

function ResidualEntropyAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 790"
        role="img"
        aria-labelledby="residual-title residual-description"
        className="h-auto w-full"
      >
        <title id="residual-title">Residual entropy from orientational disorder</title>
        <desc id="residual-description">
          A perfectly ordered crystal has one orientation pattern, while an orientationally disordered crystal retains many equivalent patterns at zero kelvin.
        </desc>

        <rect width="1200" height="790" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          RESIDUAL ENTROPY: DEGENERATE ARRANGEMENTS SURVIVE AS T → 0
        </text>

        <g>
          <text x="305" y="120" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">
            PERFECTLY ORDERED
          </text>
          <rect x="70" y="155" width="470" height="410" rx="32" fill="#0f172a" stroke="#34d399" strokeWidth="8" />

          {Array.from({ length: 12 }).map((_, i) => {
            const x = 125 + (i % 4) * 110;
            const y = 235 + Math.floor(i / 4) * 110;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="22" fill="#164e63" stroke="#67e8f9" strokeWidth="4" />
                <line x1={x - 32} y1={y} x2={x + 32} y2={y} stroke="#fde047" strokeWidth="8" strokeLinecap="round" />
                <circle cx={x - 32} cy={y} r="7" fill="#f8fafc" />
                <circle cx={x + 32} cy={y} r="7" fill="#f8fafc" />
              </g>
            );
          })}

          <text x="305" y="620" fill="#a7f3d0" fontSize="21" fontWeight="900" textAnchor="middle">
            Ω₀ = 1 ⇒ S<tspan baselineShift="sub">res</tspan> = 0
          </text>
        </g>

        <line x1="600" y1="120" x2="600" y2="650" stroke="#334155" strokeWidth="4" />

        <g>
          <text x="895" y="120" fill="#fda4af" fontSize="26" fontWeight="900" textAnchor="middle">
            ORIENTATIONAL DISORDER
          </text>
          <rect x="660" y="155" width="470" height="410" rx="32" fill="#0f172a" stroke="#fb7185" strokeWidth="8" />

          {Array.from({ length: 12 }).map((_, i) => {
            const x = 715 + (i % 4) * 110;
            const y = 235 + Math.floor(i / 4) * 110;
            const angle = i % 3 === 0 ? 0 : i % 3 === 1 ? 45 : 90;
            return (
              <g key={i} transform={`rotate(${angle} ${x} ${y})`}>
                <circle cx={x} cy={y} r="22" fill="#4c1d95" stroke="#f472b6" strokeWidth="4" />
                <line x1={x - 32} y1={y} x2={x + 32} y2={y} stroke="#fde047" strokeWidth="8" strokeLinecap="round" />
                <circle cx={x - 32} cy={y} r="7" fill="#f8fafc" />
                <circle cx={x + 32} cy={y} r="7" fill="#f8fafc" />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values={`${angle} ${x} ${y};${angle + 8} ${x} ${y};${angle} ${x} ${y}`}
                  dur={`${2.5 + i * 0.08}s`}
                  repeatCount="indefinite"
                />
              </g>
            );
          })}

          <text x="895" y="620" fill="#fda4af" fontSize="21" fontWeight="900" textAnchor="middle">
            Ω₀ &gt; 1 ⇒ S<tspan baselineShift="sub">res</tspan> = k<tspan baselineShift="sub">B</tspan>lnΩ₀
          </text>
        </g>

        <rect x="260" y="690" width="680" height="60" rx="24" fill="#0f172a" stroke="#fbbf24" strokeWidth="5" />
        <text x="600" y="728" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          Ice: S<tspan baselineShift="sub">res,m</tspan> ≈ Rln(3/2) ≈ 3.37 J mol⁻¹ K⁻¹
        </text>
      </svg>
    </div>
  );
}

function DebyeT3Animation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 750"
        role="img"
        aria-labelledby="debye-title debye-description"
        className="h-auto w-full"
      >
        <title id="debye-title">Debye T cubed heat-capacity extrapolation</title>
        <desc id="debye-description">
          Low-temperature heat-capacity measurements of a non-metallic crystal are fitted to a cubic temperature law and extrapolated to zero kelvin.
        </desc>

        <defs>
          <linearGradient id="debyeFill" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#164e63" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <rect width="1200" height="750" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          DEBYE LOW-TEMPERATURE LAW FOR A NON-METALLIC CRYSTAL
        </text>

        <line x1="130" y1="610" x2="1080" y2="610" stroke="#e2e8f0" strokeWidth="5" />
        <line x1="130" y1="610" x2="130" y2="115" stroke="#e2e8f0" strokeWidth="5" />
        <text x="1100" y="622" fill="#e2e8f0" fontSize="22">T</text>
        <text x="72" y="105" fill="#e2e8f0" fontSize="22">C<tspan baselineShift="sub">p,m</tspan></text>

        <path
          d="M150 600 C340 595 500 545 650 405 C780 280 900 165 1035 120 L1035 610 L150 610 Z"
          fill="url(#debyeFill)"
          stroke="#22d3ee"
          strokeWidth="5"
        />

        {[250, 370, 490, 610, 730, 850, 970].map((x, i) => {
          const y = [590, 570, 525, 445, 340, 230, 145][i];
          return (
            <circle key={x} cx={x} cy={y} r="10" fill="#fde047">
              <animate attributeName="r" values="8;13;8" dur={`${1.7 + i * 0.15}s`} repeatCount="indefinite" />
            </circle>
          );
        })}

        <path d="M150 600 C255 600 345 590 430 560" fill="none" stroke="#f472b6" strokeWidth="4" strokeDasharray="14 10" />
        <text x="305" y="530" fill="#f9a8d4" fontSize="19" fontWeight="900" textAnchor="middle">
          extrapolated low-T region
        </text>

        <rect x="725" y="420" width="310" height="120" rx="26" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="880" y="463" fill="#ddd6fe" fontSize="22" fontWeight="900" textAnchor="middle">
          C<tspan baselineShift="sub">p,m</tspan> = aT³
        </text>
        <text x="880" y="505" fill="#f8fafc" fontSize="19" fontWeight="900" textAnchor="middle">
          S<tspan baselineShift="sub">m</tspan>(T)−S<tspan baselineShift="sub">m</tspan>(0) = aT³/3
        </text>

        <rect x="235" y="660" width="730" height="48" rx="21" fill="#0f172a" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="692" fill="#a7f3d0" fontSize="20" fontWeight="900" textAnchor="middle">
          Therefore S<tspan baselineShift="sub">m</tspan>(T)−S<tspan baselineShift="sub">m</tspan>(0) = C<tspan baselineShift="sub">p,m</tspan>(T)/3
        </text>
      </svg>
    </div>
  );
}

function CalorimetricEntropyPathAnimation() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg
        viewBox="0 0 1200 840"
        role="img"
        aria-labelledby="calorimetric-title calorimetric-description"
        className="h-auto w-full"
      >
        <title id="calorimetric-title">Calorimetric construction of absolute molar entropy</title>
        <desc id="calorimetric-description">
          Entropy is accumulated from zero kelvin by integrating heat capacity divided by temperature within each phase and adding entropy jumps at phase transitions.
        </desc>

        <defs>
          <marker id="ceArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#34d399" />
          </marker>
        </defs>

        <rect width="1200" height="840" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          ABSOLUTE ENTROPY = HEATING INTEGRALS + TRANSITION JUMPS + RESIDUAL TERM
        </text>

        <line x1="105" y1="625" x2="1090" y2="625" stroke="#e2e8f0" strokeWidth="5" markerEnd="url(#ceArrow)" />
        <text x="1110" y="638" fill="#e2e8f0" fontSize="22">T</text>

        {[
          { x: 115, w: 235, label: "solid", fill: "#164e63", stroke: "#22d3ee" },
          { x: 390, w: 275, label: "liquid", fill: "#422006", stroke: "#fbbf24" },
          { x: 705, w: 355, label: "gas", fill: "#4c0519", stroke: "#f472b6" },
        ].map((phase) => (
          <g key={phase.label}>
            <rect x={phase.x} y="200" width={phase.w} height="370" rx="28" fill={phase.fill} opacity="0.75" stroke={phase.stroke} strokeWidth="6" />
            <text x={phase.x + phase.w / 2} y="545" fill={phase.stroke} fontSize="24" fontWeight="900" textAnchor="middle">
              {phase.label}
            </text>
          </g>
        ))}

        <path
          id="entropyCurve"
          d="M120 585 C210 545 275 470 345 410 L345 350 C410 310 505 280 660 250 L660 165 C790 130 900 105 1060 95"
          fill="none"
          stroke="#34d399"
          strokeWidth="5"
        />

        <circle r="13" fill="#fde047">
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href="#entropyCurve" />
          </animateMotion>
        </circle>

        <line x1="345" y1="625" x2="345" y2="340" stroke="#fbbf24" strokeWidth="4" strokeDasharray="12 10" />
        <line x1="660" y1="625" x2="660" y2="155" stroke="#f472b6" strokeWidth="4" strokeDasharray="12 10" />
        <text x="345" y="665" fill="#fde68a" fontSize="19" textAnchor="middle">T<tspan baselineShift="sub">f</tspan></text>
        <text x="660" y="665" fill="#f9a8d4" fontSize="19" textAnchor="middle">T<tspan baselineShift="sub">b</tspan></text>

        <text x="190" y="350" fill="#a5f3fc" fontSize="17">∫C<tspan baselineShift="sub">p,s</tspan>/T dT</text>
        <text x="420" y="255" fill="#fde68a" fontSize="17">ΔH<tspan baselineShift="sub">fus</tspan>/T<tspan baselineShift="sub">f</tspan></text>
        <text x="505" y="205" fill="#fde68a" fontSize="17">∫C<tspan baselineShift="sub">p,l</tspan>/T dT</text>
        <text x="680" y="135" fill="#f9a8d4" fontSize="17">ΔH<tspan baselineShift="sub">vap</tspan>/T<tspan baselineShift="sub">b</tspan></text>
        <text x="875" y="95" fill="#f9a8d4" fontSize="17">∫C<tspan baselineShift="sub">p,g</tspan>/T dT</text>

        <rect x="95" y="705" width="1010" height="90" rx="27" fill="#0f172a" stroke="#a78bfa" strokeWidth="5" />
        <text x="600" y="742" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
          S°<tspan baselineShift="sub">m</tspan>(T) = S<tspan baselineShift="sub">res,m</tspan> + Σ∫C°<tspan baselineShift="sub">p,m</tspan>/T dT
        </text>
        <text x="600" y="775" fill="#f8fafc" fontSize="20" fontWeight="900" textAnchor="middle">
          + Σ(ΔH°<tspan baselineShift="sub">tr</tspan>/T<tspan baselineShift="sub">tr</tspan>)
        </text>
      </svg>
    </div>
  );
}

function AreaEquivalenceGraphic() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
        <svg viewBox="0 0 760 560" role="img" aria-labelledby="cpt-title cpt-description" className="h-auto w-full">
          <title id="cpt-title">Area under heat capacity divided by temperature versus temperature</title>
          <desc id="cpt-description">The area under Cp divided by T from zero to the target temperature equals the entropy increase.</desc>
          <rect width="760" height="560" rx="30" fill="#020617" />
          <text x="380" y="48" fill="#f8fafc" fontSize="23" fontWeight="900" textAnchor="middle">
            AREA UNDER C<tspan baselineShift="sub">p,m</tspan>/T vs T
          </text>
          <line x1="90" y1="470" x2="690" y2="470" stroke="#e2e8f0" strokeWidth="4" />
          <line x1="90" y1="470" x2="90" y2="95" stroke="#e2e8f0" strokeWidth="4" />
          <path d="M105 450 C210 420 300 315 410 220 C500 145 585 125 650 115 L650 470 L105 470 Z" fill="#22d3ee" fillOpacity="0.22" stroke="#22d3ee" strokeWidth="5" />
          <line x1="540" y1="470" x2="540" y2="145" stroke="#fbbf24" strokeWidth="4" strokeDasharray="12 10" />
          <text x="540" y="510" fill="#fde68a" fontSize="18" textAnchor="middle">T</text>
          <text x="62" y="88" fill="#e2e8f0" fontSize="18">C<tspan baselineShift="sub">p</tspan>/T</text>
          <text x="370" y="320" fill="#a5f3fc" fontSize="20" fontWeight="900" textAnchor="middle">
            area = ∫₀ᵀ C<tspan baselineShift="sub">p,m</tspan>(T′)/T′ dT′
          </text>
        </svg>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
        <svg viewBox="0 0 760 560" role="img" aria-labelledby="cpln-title cpln-description" className="h-auto w-full">
          <title id="cpln-title">Area under heat capacity versus logarithm of temperature</title>
          <desc id="cpln-description">Because d ln T equals dT divided by T, the area under Cp versus ln T gives the same entropy increase.</desc>
          <rect width="760" height="560" rx="30" fill="#020617" />
          <text x="380" y="48" fill="#f8fafc" fontSize="23" fontWeight="900" textAnchor="middle">
            AREA UNDER C<tspan baselineShift="sub">p,m</tspan> vs lnT
          </text>
          <line x1="90" y1="470" x2="690" y2="470" stroke="#e2e8f0" strokeWidth="4" />
          <line x1="90" y1="470" x2="90" y2="95" stroke="#e2e8f0" strokeWidth="4" />
          <path d="M105 450 C230 440 330 370 420 265 C505 165 585 125 650 115 L650 470 L105 470 Z" fill="#a78bfa" fillOpacity="0.22" stroke="#a78bfa" strokeWidth="5" />
          <line x1="540" y1="470" x2="540" y2="155" stroke="#fbbf24" strokeWidth="4" strokeDasharray="12 10" />
          <text x="540" y="510" fill="#fde68a" fontSize="18" textAnchor="middle">lnT</text>
          <text x="58" y="88" fill="#e2e8f0" fontSize="18">C<tspan baselineShift="sub">p</tspan></text>
          <text x="370" y="320" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">
            area = ∫ C<tspan baselineShift="sub">p,m</tspan> d(lnT)
          </text>
        </svg>
      </div>
    </div>
  );
}

function ThirdLawFormsTable() {
  const rows = [
    ["Planck statement", "S → 0 as T → 0 for a pure perfect crystal with a unique ground state", "defines the Third-Law zero"],
    ["Nernst heat theorem", "ΔS → 0 as T → 0 for equilibrium isothermal transformations", "entropy differences vanish near 0 K"],
    ["Unattainability principle", "0 K cannot be reached by a finite sequence of operations", "separate operational form"],
    ["Statistical form", "S(0) = kB lnΩ0", "zero only when Ω0 = 1"],
    ["Residual-entropy case", "Ω0 > 1 ⇒ Sres > 0", "frozen orientational/configurational degeneracy"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Formulation</th>
            <th className="px-4 py-3 font-black text-white">Statement</th>
            <th className="px-4 py-3 font-black text-white">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([form, statement, role]) => (
            <tr key={form}>
              <td className="px-4 py-3 font-semibold text-slate-100">{form}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{statement}</td>
              <td className="px-4 py-3 text-slate-300">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RetainedDebyeExample() {
  return (
    <article className="rounded-[2rem] border border-emerald-300/25 bg-emerald-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
            Retained chapter numerical
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Low-temperature entropy from one heat-capacity measurement
          </h3>
        </div>
        <Chip tone="emerald">DEBYE T³ LAW</Chip>
      </div>

      <p className="mt-5 leading-7 text-slate-200">
        The molar constant-pressure heat capacity of a non-metallic solid at {String.raw`\(4.2\ \mathrm K\)`} is
        {String.raw`\(0.43\ \mathrm{J\,K^{-1}mol^{-1}}\)`}. Find its molar entropy at that temperature,
        assuming a perfect crystal and validity of {String.raw`\(C_{p,m}=aT^3\)`} from {String.raw`\(0\)`} to {String.raw`\(4.2\ \mathrm K\)`}.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="Third-Law integral">
          S<sub>m</sub>(T) = S<sub>m</sub>(0) + ∫₀ᵀ aT′³ dT′/T′
        </Formula>

        <Formula label="Integration">
          S<sub>m</sub>(T) = S<sub>m</sub>(0) + aT³/3
        </Formula>

        <Formula label="Use Cp,m(T) = aT³">
          S<sub>m</sub>(T) = S<sub>m</sub>(0) + C<sub>p,m</sub>(T)/3
        </Formula>

        <Formula label="Perfect-crystal result">
          S<sub>m</sub>(4.2 K) = 0 + 0.43/3 = 0.143 J mol⁻¹ K⁻¹ ≈ 0.14 J mol⁻¹ K⁻¹
        </Formula>
      </div>

      <ConceptLens title="Why the formula is unusually simple" tone="cyan">
        The cubic law makes {String.raw`\(C_p/T\propto T^2\)`}, whose integral is exactly one third of the endpoint heat capacity.
      </ConceptLens>
    </article>
  );
}

function ResidualEntropyImperfectCrystals() {
  return (
    <article className="rounded-[2rem] border border-rose-300/25 bg-rose-300/[0.06] p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-300">
            Exception to the Third Law
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            Residual entropy of imperfect crystals
          </h3>
        </div>
        <Chip tone="rose">S(0) &gt; 0</Chip>
      </div>

      <p className="mt-4 leading-7 text-slate-300">
        The Third Law statement S<sub>m</sub>(0) = 0 applies strictly to a perfect crystal, meaning every
        lattice site has one unique, ordered orientation. Some molecular solids freeze into a rigid lattice
        before every molecule can settle into its lowest-energy orientation. The disorder becomes trapped, so
        the crystal reaches 0 K without ever reaching a single unique microstate.
      </p>

      <div className="mt-5 space-y-4">
        <Formula label="Statistical origin of residual entropy">
          S(0) = k ln Ω(0), with Ω(0) &gt; 1 for a frozen orientational disorder
        </Formula>

        <Formula label="Carbon monoxide, CO(s)">
          Two nearly identical orientations (C≡O and O≡C) per site ⇒ Ω(0) ≈ 2ᴺ ⇒ S<sub>m</sub>(0) = R ln 2 ≈ 5.76 J K⁻¹ mol⁻¹
        </Formula>

        <Formula label="Ice, H₂O(s)">
          Pauling residual entropy from proton disorder in the hydrogen-bonded lattice: S<sub>m</sub>(0) = R ln(3/2) ≈ 3.37 J K⁻¹ mol⁻¹
        </Formula>
      </div>

      <ConceptLens title="How residual entropy is detected experimentally" tone="violet">
        The calorimetric (Third-Law) entropy, built by integrating C<sub>p</sub>/T from 0 K, is compared with
        the spectroscopic entropy calculated independently from molecular and rotational data. A calorimetric
        value that falls short of the spectroscopic value by a fixed amount reveals the residual entropy
        frozen into the solid at 0 K.
      </ConceptLens>

      <ConceptLens title="Why perfectly ordered solids do not show this gap" tone="emerald">
        For a substance with only one possible ground-state orientation (Ω(0) = 1), S(0) = k ln 1 = 0 exactly,
        and calorimetric and spectroscopic entropies agree. Residual entropy appears only when near-degenerate
        orientations remain kinetically frozen rather than annealing into a single arrangement before 0 K is reached.
      </ConceptLens>
    </article>
  );
}

function RetainedSummaryGrid() {
  const items = [
    ["Calorimetric determination", "Measure Cp from low temperature to the target temperature and add every transition entropy."],
    ["Debye extrapolation", "Use Cp,m = aT³ for a non-metallic crystal sufficiently close to 0 K."],
    ["Nernst theorem", "For equilibrium transformations, ΔS approaches zero as T approaches zero."],
    ["Third Law", "A pure perfect crystal with one ground-state arrangement has S(0)=0."],
    ["Residual entropy", "Disorder frozen into the ground-state manifold gives Sres>0."],
    ["Third-Law entropy", "Absolute entropy is constructed from the 0 K reference plus measured contributions."],
    ["Aqueous-ion convention", "Single-ion standard entropies use S°m(H⁺,aq)=0 by convention at each temperature."],
    ["Reaction entropy", "ΔrS° is the stoichiometric product total minus the reactant total."],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map(([title, text], index) => (
        <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
        </article>
      ))}
    </div>
  );
}

function WorkedExamples() {
  const examples = [
    {
      title: "Binary orientational disorder",
      question:
        "Each molecule in a frozen crystal may occupy either of two exactly degenerate orientations independently. Find the residual molar entropy.",
      solution:
        "For N molecules, Ω=2^N. Therefore S=kBlnΩ=NkBln2. Per mole, Sres,m=Rln2=5.763 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Ice residual entropy",
      question:
        "Use the Pauling multiplicity w=3/2 per water molecule to estimate the residual molar entropy of ordinary ice.",
      solution:
        "Sres,m=Rln(3/2)=8.314ln1.5=3.37 J mol⁻¹ K⁻¹, consistent with the given value near 3.4 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Infer effective multiplicity",
      question:
        "A disordered crystal has residual molar entropy 4.00 J mol⁻¹ K⁻¹. Find the effective degeneracy per molecule w.",
      solution:
        "Rlnw=4.00, so w=exp(4.00/8.314)=1.618.",
    },
    {
      title: "One phase transition",
      question:
        "A perfect crystal has Cp,m=aT³ up to a transition at 20 K, where ΔHtr=80 J mol⁻¹. If Cp,m(20 K)=6.0 J mol⁻¹ K⁻¹, find the entropy just above the transition.",
      solution:
        "Below the transition, S= Cp,m(20 K)/3 = 2.0 J mol⁻¹ K⁻¹. The transition adds ΔHtr/Ttr=80/20=4.0 J mol⁻¹ K⁻¹. Total = 6.0 J mol⁻¹ K⁻¹.",
    },
    {
      title: "Aqueous-ion convention",
      question:
        "Why may a tabulated standard molar entropy of an aqueous ion be negative even though thermodynamic entropy is non-negative relative to the Third-Law reference?",
      solution:
        "A single-ion value is assigned relative to the conventional zero S°m(H⁺,aq)=0. It is not an independently measured absolute single-ion entropy, so relative values may be negative.",
    },
    {
      title: "Cp versus lnT graph",
      question:
        "Explain why the area under Cp,m versus lnT equals the entropy increase.",
      solution:
        "Because d(lnT)=dT/T. Therefore ∫Cp,m d(lnT)=∫Cp,m dT/T=ΔS for reversible heating at constant pressure.",
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

const problems = [
  {
    title: "Concept Application 1 — Third-Law condition",
    question:
      "State the microscopic condition required for S(0)=0.",
    solution:
      "The equilibrium crystal must have a unique ground-state arrangement, so Ω0=1.",
  },
  {
    title: "Concept Application 2 — Nernst theorem",
    question:
      "What tends to zero according to the Nernst heat theorem?",
    solution:
      "The entropy change of an equilibrium isothermal physical or chemical transformation tends to zero as T→0.",
  },
  {
    title: "Concept Application 3 — unattainability",
    question:
      "Does the statement S→0 prove that 0 K can be reached?",
    solution:
      "No. The unattainability principle is a separate formulation: no finite sequence of thermodynamic operations reaches exactly 0 K.",
  },
  {
    title: "Concept Application 4 — logarithm and additivity",
    question:
      "Why does Boltzmann entropy use lnΩ rather than Ω itself?",
    solution:
      "For independent systems, multiplicities multiply: ΩAB=ΩAΩB. The logarithm converts multiplication into addition, so SAB=SA+SB.",
  },
  {
    title: "Concept Application 5 — per-particle degeneracy",
    question:
      "N independent molecules each have w accessible orientations. Derive the entropy.",
    solution:
      "Ω=w^N, so S=kBln(w^N)=NkBlnw. For one mole, S=Rlnw.",
  },
  {
    title: "Concept Application 6 — residual entropy",
    question:
      "Can a crystal have non-zero entropy at 0 K without violating the statistical definition?",
    solution:
      "Yes. If multiple degenerate configurations remain frozen, Ω0>1 and Sres=kBlnΩ0>0.",
  },
  {
    title: "Concept Application 7 — equilibrium hydrogen correction",
    question:
      "Does ordinary equilibrium H2 necessarily have Rln2 residual entropy at 0 K?",
    solution:
      "No. Equilibrium hydrogen tends toward para-H2 in its unique lowest rotational state. Residual entropy can occur in a frozen non-equilibrium ortho/para mixture, and depends on its composition.",
  },
  {
    title: "Concept Application 8 — amorphous solid",
    question:
      "Why is an amorphous solid excluded from the simple perfect-crystal Third-Law statement?",
    solution:
      "It lacks a unique long-range ordered crystalline arrangement and can retain configurational disorder as T→0.",
  },
  {
    title: "Concept Application 9 — Debye entropy",
    question:
      "If Cp,m=aT³, derive Sm(T)−Sm(0).",
    solution:
      "Integrate aT³/T=aT² from 0 to T: the result is aT³/3=Cp,m(T)/3.",
  },
  {
    title: "Concept Application 10 — metallic caveat",
    question:
      "Why is the simple Cp∝T³ law not the complete low-temperature heat capacity of a metal?",
    solution:
      "Metals also have an electronic contribution approximately proportional to T, so Cp≈γT+βT³ at sufficiently low temperature.",
  },
  {
    title: "Concept Application 11 — transition jump",
    question:
      "A reversible phase transition has enthalpy ΔHtr at Ttr. What entropy contribution must be added?",
    solution:
      "ΔStr=ΔHtr/Ttr.",
  },
  {
    title: "Concept Application 12 — several transitions",
    question:
      "How is absolute entropy constructed when a substance has multiple solid-solid transitions before melting?",
    solution:
      "Integrate Cp/T within every stable phase and add ΔHtr/Ttr for every reversible transition in sequence.",
  },
  {
    title: "Concept Application 13 — standard molar entropy",
    question:
      "What conditions make a calorimetrically obtained entropy a standard molar entropy?",
    solution:
      "Measurements must follow the pure substance in its standard state, conventionally at 1 bar, and the total entropy is divided by the amount of substance.",
  },
  {
    title: "Concept Application 14 — spectroscopy route",
    question:
      "Why can spectroscopic data be used to calculate entropy?",
    solution:
      "Spectroscopy reveals energy levels and degeneracies, allowing the molecular partition function and statistical entropy to be evaluated.",
  },
  {
    title: "Concept Application 15 — single-ion entropy",
    question:
      "Are standard molar entropies of isolated aqueous ions directly measurable as absolute quantities?",
    solution:
      "No. Only electrically neutral combinations are directly measurable; single-ion values require an extrathermodynamic convention such as S°m(H⁺,aq)=0.",
  },
  {
    title: "Concept Application 16 — reaction entropy",
    question:
      "How do Third-Law entropies give a standard reaction entropy?",
    solution:
      "Use ΔrS°=ΣνS°m(products)−ΣνS°m(reactants), including stoichiometric coefficients and physical states.",
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
    "Every solid has S=0 at 0 K.",
    "Incorrect",
    "Only a pure perfect crystal with a unique ground state has zero entropy. Frozen disorder gives residual entropy.",
  ],
  [
    "The Third-Law zero is arbitrary in exactly the same way as an enthalpy zero.",
    "Refine",
    "It is tied to the statistical state Ω0=1 for a perfect crystal, although practical conventions remain necessary for quantities such as single-ion entropies.",
  ],
  [
    "Nernst theorem says every arbitrary process has ΔS=0 near 0 K.",
    "Incorrect",
    "It concerns equilibrium isothermal transformations in the low-temperature limit.",
  ],
  [
    "Cp=aT³ is valid for every material at every temperature.",
    "Incorrect",
    "It is a low-temperature lattice approximation for non-metallic crystals.",
  ],
  [
    "Residual entropy comes from thermal vibration at 0 K.",
    "Incorrect",
    "It comes from configurational or orientational ground-state degeneracy, not ordinary thermal excitation.",
  ],
  [
    "The given H2 w=2 statement applies to equilibrium hydrogen automatically.",
    "Incorrect",
    "Equilibrium hydrogen tends toward para-H2; a frozen ortho/para mixture requires a composition-dependent treatment.",
  ],
  [
    "A negative tabulated aqueous-ion entropy violates the Third Law.",
    "Incorrect",
    "Single-ion entropies are relative to a convention and are not individually measurable absolute entropies.",
  ],
  [
    "Only the Cp/T graph can yield calorimetric entropy.",
    "Incorrect",
    "An equivalent area is obtained from Cp versus lnT because dlnT=dT/T.",
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
      title: "Why crystals are cooled before heat-capacity measurement",
      text: "Low-temperature data anchor the Third-Law integral and reveal whether a Debye extrapolation is appropriate.",
      tone: "cyan" as Tone,
    },
    {
      title: "Why ordinary ice retains disorder",
      text: "Hydrogen-bond orientations satisfy local ice rules in many equivalent ways, leaving residual configurational entropy.",
      tone: "violet" as Tone,
    },
    {
      title: "Why glass is not a perfect Third-Law crystal",
      text: "A glass freezes a disordered structure rather than reaching a unique long-range ordered equilibrium crystal.",
      tone: "rose" as Tone,
    },
    {
      title: "Why spectroscopy can predict entropy",
      text: "Rotational, vibrational, electronic, and translational energy-level information determines molecular state counts.",
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

export default function ThermodynamicsPart22() {
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
            <Chip tone="emerald">THIRD-LAW & STATISTICAL ENTROPY</Chip>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
                Thermodynamics • Absolute-Entropy Foundation
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.045em] text-white md:text-6xl">
                The Third Law gives entropy a physical zero—and Boltzmann explains when that zero fails
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Perfect order with one ground-state arrangement gives {String.raw`\(S(0)=0\)`}.
                Degenerate frozen arrangements create residual entropy. Calorimetry then builds the entropy upward
                through {String.raw`\(C_p/T\)`} integrals and equilibrium transition jumps.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-cyan-950/25">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Third-Law core
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-cyan-400/10 p-4 font-mono text-base font-black text-white">
                  S = k<sub>B</sub>lnΩ
                </div>
                <div className="rounded-xl bg-violet-400/10 p-4 font-mono text-base font-black text-white">
                  Ω<sub>0</sub> = 1 ⇒ S(0) = 0
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-4 font-mono text-base font-black text-white">
                  S°<sub>m</sub>(T) = S<sub>res,m</sub> + ∫C°<sub>p,m</sub>/T dT + ΣΔH°<sub>tr</sub>/T<sub>tr</sub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-9 md:px-8 md:py-12">
        <Section
          index="01"
          title="Third Law of Thermodynamics"
          subtitle="The zero-entropy statement needs purity, crystalline perfection, equilibrium, and a unique ground state."
        >
          <ThirdLawCrystalAnimation />

          <Formula label="Planck form">
            lim<sub>T→0</sub>S = 0 for a pure perfect crystal with Ω₀ = 1
          </Formula>

          <ThirdLawFormsTable />

          <ConceptLens title="Scientific correction to “the zero is merely assumed”" tone="violet">
            The zero is not an arbitrary bookkeeping choice like choosing an enthalpy origin.
            Statistical mechanics supplies a physical basis: {String.raw`\(S=k_B\ln\Omega\)`}, so a unique ground state has {String.raw`\(S=0\)`}.
            Residual degeneracy must be added when {String.raw`\(\Omega_0>1\)`}.
          </ConceptLens>

          <ConceptLens title="Absolute zero and unattainability" tone="rose">
            The Third-Law entropy statement and the unattainability of exactly {String.raw`\(0\ \mathrm K\)`} are related but distinct formulations.
            Zero kelvin cannot be reached by a finite sequence of thermodynamic operations.
          </ConceptLens>
        </Section>

        <Section index="02" title="Nernst heat theorem">
          <Formula label="Low-temperature entropy-difference limit">
            lim<sub>T→0</sub>ΔS<sub>transformation</sub>(T) = 0
          </Formula>

          <ConceptLens title="Scope" tone="cyan">
            The theorem concerns equilibrium isothermal transformations between well-defined states as the temperature approaches zero.
            It is not a statement that every arbitrary irreversible process has zero entropy change.
          </ConceptLens>

          <ConceptLens title="Connection to a common zero" tone="emerald">
            If entropy differences among perfect crystalline equilibrium forms vanish at {String.raw`\(0\ \mathrm K\)`},
            they may consistently share the perfect-crystal zero.
          </ConceptLens>
        </Section>

        <Section
          index="03"
          title="Boltzmann entropy and thermodynamic probability"
          subtitle="A macrostate may be realised by many microscopic arrangements."
        >
          <BoltzmannMultiplicityAnimation />

          <Formula label="Microscopic entropy">
            S = k<sub>B</sub>lnΩ
          </Formula>

          <Formula label="Independent subsystems">
            Ω<sub>AB</sub> = Ω<sub>A</sub>Ω<sub>B</sub> ⇒ S<sub>AB</sub> = S<sub>A</sub> + S<sub>B</sub>
          </Formula>

          <Formula label="w orientations per molecule">
            Ω = wᴺ ⇒ S = Nk<sub>B</sub>lnw = nRlnw
          </Formula>

          <ConceptLens title="Ω versus w" tone="amber">
            {String.raw`\(\Omega\)`} is the multiplicity of the whole system. {String.raw`\(w\)`} may denote the number of independent
            orientations available to each molecule. Confusing them can introduce an incorrect factor of {String.raw`\(N\)`}.
          </ConceptLens>
        </Section>

        <Section index="04" title="Residual entropy">
          <ResidualEntropyAnimation />

          <Formula label="Residual entropy">
            S<sub>res</sub> = k<sub>B</sub>lnΩ₀
          </Formula>

          <Formula label="Molar form for independent w-fold disorder">
            S<sub>res,m</sub> = Rlnw
          </Formula>

          <div className="grid gap-4 md:grid-cols-2">
            <ConceptLens title="Ice" tone="cyan">
              Each oxygen has two short covalent O-H bonds and two longer hydrogen-bond contacts,
              but many global arrangements satisfy these local rules. The given value is about
              {String.raw`\(3.4\ \mathrm{J\,mol^{-1}K^{-1}}\)`}.
            </ConceptLens>
            <ConceptLens title="AB orientational disorder" tone="violet">
              If AB and BA orientations are nearly degenerate and frozen randomly, multiple ground-state
              arrangements remain accessible and {String.raw`\(S(0)>0\)`}.
            </ConceptLens>
          </div>

          <ConceptLens title="Hydrogen example—required correction" tone="rose">
            The stated model uses an idealised {String.raw`\(w=2\)`} ortho/para example. Equilibrium hydrogen at very low temperature
            tends toward para-H₂ in its lowest rotational state. Residual entropy belongs to a frozen non-equilibrium
            ortho/para mixture and depends on its composition; {String.raw`\(R\ln2\)`} is only a simplified binary-degeneracy model.
          </ConceptLens>

          <ConceptLens title="Perfect crystal, imperfect crystal, and glass" tone="amber">
            A perfect crystal may have {String.raw`\(\Omega_0=1\)`}. Defects, orientational disorder, or an amorphous frozen structure
            can retain configurational entropy at {String.raw`\(0\ \mathrm K\)`}.
          </ConceptLens>
        </Section>

        <Section
          index="05"
          title="Debye low-temperature extrapolation"
          subtitle="Near zero kelvin, a non-metallic crystal’s lattice heat capacity follows a cubic law."
        >
          <DebyeT3Animation />

          <Formula label="Debye T³ law">
            C<sub>p,m</sub> ≈ C<sub>V,m</sub> = aT³
          </Formula>

          <Formula label="Low-temperature entropy">
            S<sub>m</sub>(T)−S<sub>m</sub>(0) = ∫₀ᵀaT′³dT′/T′ = aT³/3
          </Formula>

          <Formula label="Endpoint shortcut">
            S<sub>m</sub>(T)−S<sub>m</sub>(0) = C<sub>p,m</sub>(T)/3
          </Formula>

          <ConceptLens title="Validity gate" tone="rose">
            The cubic law is a low-temperature lattice approximation for non-metallic crystals.
            Metals require an additional electronic term, commonly {String.raw`\(C_p\approx\gamma T+\beta T^3\)`}.
          </ConceptLens>

          <RetainedDebyeExample />
        </Section>

        <Section
          index="06"
          title="Calorimetric construction of absolute entropy"
          subtitle="Integrate within phases and add every reversible transition jump."
        >
          <CalorimetricEntropyPathAnimation />

          <Formula label="Heating within one phase">
            S(T₂) = S(T₁) + ∫<sub>T₁</sub><sup>T₂</sup>C<sub>p</sub>(T′)dT′/T′
          </Formula>

          <Formula label="Transition contribution">
            ΔS<sub>tr</sub> = ΔH<sub>tr</sub>/T<sub>tr</sub>
          </Formula>

          <Formula label="Complete standard molar construction">
            S°<sub>m</sub>(T) = S<sub>res,m</sub> + Σ∫C°<sub>p,m</sub>(T′)dT′/T′ + ΣΔH°<sub>tr</sub>/T<sub>tr</sub>
          </Formula>

          <ConceptLens title="Full route above the boiling point" tone="sky">
            Heat the solid from {String.raw`\(0\)`} to {String.raw`\(T_f\)`}, add {String.raw`\(\Delta H_{\mathrm{fus}}/T_f\)`}, heat the liquid to {String.raw`\(T_b\)`},
            add {String.raw`\(\Delta H_{\mathrm{vap}}/T_b\)`}, then heat the gas to the final temperature.
            Any solid-solid transition adds its own {String.raw`\(\Delta H_{\mathrm{tr}}/T_{\mathrm{tr}}\)`}.
          </ConceptLens>

          <ConceptLens title="Thermochemistry boundary" tone="violet">
            This part uses measured {String.raw`\(C_p\)`} and transition enthalpies as inputs to entropy.
            Their experimental determination and detailed enthalpy theory remain in Thermochemistry.
          </ConceptLens>
        </Section>

        <Section index="07" title="Graphical evaluation of the entropy integral">
          <AreaEquivalenceGraphic />

          <Formula label="Equivalent areas">
            ∫C<sub>p,m</sub>(T)dT/T = ∫C<sub>p,m</sub>d(lnT)
          </Formula>

          <ConceptLens title="Standard entropy" tone="emerald">
            When the pure substance follows its standard state at {String.raw`\(1\ \mathrm{bar}\)`}, the calorimetric total is
            {String.raw`\(S^\circ(T)\)`}; dividing by the amount gives {String.raw`\(S_m^\circ(T)\)`}.
          </ConceptLens>
        </Section>

        <Section
          index="08"
          title="Calorimetric and statistical routes"
          subtitle="Two independent routes should agree for an equilibrium substance."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
              <h3 className="text-xl font-black text-white">Calorimetric route</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Measure {String.raw`\(C_p(T)\)`}, extrapolate to {String.raw`\(0\ \mathrm K\)`}, and add every phase-transition entropy.
              </p>
            </article>
            <article className="rounded-3xl border border-violet-300/20 bg-violet-300/[0.05] p-5">
              <h3 className="text-xl font-black text-white">Statistical/spectroscopic route</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Determine molecular energy levels and degeneracies, evaluate state populations, and calculate entropy statistically.
              </p>
            </article>
          </div>

          <ConceptLens title="Residual entropy appears as a route mismatch" tone="amber">
            If calorimetry assumes {String.raw`\(S(0)=0\)`} but spectroscopy reveals frozen degeneracy,
            the difference identifies a residual-entropy contribution.
          </ConceptLens>
        </Section>

        <Section index="09" title="Aqueous-ion entropy convention">
          <Formula label="Conventional single-ion reference">
            S°<sub>m</sub>(H⁺, aq) = 0 at each stated temperature
          </Formula>

          <ConceptLens title="Not a directly measurable absolute single-ion entropy" tone="rose">
            Thermodynamic measurements give entropy changes for electrically neutral combinations.
            Individual aqueous-ion entropies require a convention; relative tabulated values can therefore be negative.
          </ConceptLens>

          <ConceptLens title="Reaction entropies remain measurable" tone="emerald">
            In a charge-balanced reaction, the arbitrary single-ion convention cancels from the stoichiometric entropy difference.
          </ConceptLens>
        </Section>

        <Section index="10" title="Retained complete summary">
          <RetainedSummaryGrid />
        </Section>

        <Section index="11" title="Residual entropy exceptions">
          <ResidualEntropyImperfectCrystals />
        </Section>

        <Section index="12" title="Original and retained worked examples">
          <WorkedExamples />
        </Section>

        <Section index="13" title="Thermodynamics around you">
          <DailyLifeGrid />
        </Section>

        <Section index="14" title="Trap detector">
          <TrapTable />
        </Section>


        <ThermodynamicsCompleteDerivations part={22} />

<Section index="15" title="Complete worked examples and applications">
          <ProblemLadder />
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-300">
                Synergic Bond rapid recall
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                A unique ground state gives zero entropy; measured heat capacities build the absolute entropy upward
              </h2>
            </div>
            <Chip tone="emerald">PART 22 COMPLETE</Chip>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Third Law", "perfect crystal: S(0)=0"],
              ["Boltzmann", "S=kB lnΩ"],
              ["Residual entropy", "Ω0>1 gives Sres>0"],
              ["Calorimetry", "Σ∫Cp/T dT + ΣΔHtr/Ttr"],
            ].map(([term, meaning]) => (
              <div key={term} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="font-black text-white">{term}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{meaning}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={22} />


</main>
  );
}
