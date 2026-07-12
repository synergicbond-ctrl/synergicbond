import React from "react";
import ThermodynamicsCompleteDerivations from "./ThermodynamicsCompleteDerivations";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "sky";
const toneStyles: Record<Tone, string> = {
  cyan:    "border-cyan-400/25   bg-cyan-400/[0.07]   text-cyan-200",
  violet:  "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber:   "border-amber-400/25  bg-amber-400/[0.07]  text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose:    "border-rose-400/25   bg-rose-400/[0.07]   text-rose-200",
  sky:     "border-sky-400/25    bg-sky-400/[0.07]    text-sky-200",
};

function Section({ index, title, subtitle, children }: { index: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">{index}</span>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{title}</h2>
          {subtitle && <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-400">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200 md:text-base">{children}</div>
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

function Lens({ title, children, tone = "cyan" }: { title: string; children: React.ReactNode; tone?: Tone }) {
  return (
    <aside className={`rounded-2xl border p-5 ${toneStyles[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">Concept</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </aside>
  );
}

// SVG 1: G vs T showing phase crossing
function GvsTSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 680" role="img" aria-labelledby="p26-gT-title p26-gT-desc" className="h-auto w-full">
        <title id="p26-gT-title">Molar Gibbs energy versus temperature for solid, liquid and gas phases</title>
        <desc id="p26-gT-desc">
          Three G_m vs T lines with slopes −S_m. Gas has the steepest negative slope. Phase transitions
          occur at intersections. The stable phase at each temperature is the one with the lowest G_m.
        </desc>
        <defs>
          <linearGradient id="p26gTBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p26axArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="680" rx="34" fill="url(#p26gTBg)" />
        <text x="600" y="48" fill="#f8fafc" fontSize="26" fontWeight="900" textAnchor="middle">GIBBS ENERGY VERSUS TEMPERATURE: PHASE STABILITY</text>

        {/* Axes */}
        <line x1="100" y1="560" x2="1100" y2="560" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p26axArrow)" />
        <line x1="100" y1="560" x2="100" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p26axArrow)" />
        <text x="1115" y="574" fill="#e2e8f0" fontSize="20" fontWeight="900">T</text>
        <text x="70" y="68" fill="#e2e8f0" fontSize="20" fontWeight="900">G_m</text>

        {/* Solid line: shallowest slope */}
        <path d="M120 520 L900 220" fill="none" stroke="#a78bfa" strokeWidth="9" />
        <text x="700" y="255" fill="#c4b5fd" fontSize="18" fontWeight="900">solid (slope = −S_solid, least negative)</text>

        {/* Liquid line: medium slope */}
        <path d="M120 540 L900 100" fill="none" stroke="#22d3ee" strokeWidth="9" />
        <text x="450" y="145" fill="#a5f3fc" fontSize="18" fontWeight="900">liquid (slope = −S_liquid)</text>

        {/* Gas line: steepest slope */}
        <path d="M400 560 L1090 90" fill="none" stroke="#fb7185" strokeWidth="9" strokeDasharray="20 10" />
        <text x="950" y="100" fill="#fda4af" fontSize="18" fontWeight="900">gas (slope = −S_gas, most negative)</text>

        {/* Intersection 1: melting point Tm */}
        <circle cx="600" cy="338" r="14" fill="#fbbf24" />
        <line x1="600" y1="338" x2="600" y2="560" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 8" />
        <text x="600" y="590" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">T_m (melting)</text>
        <text x="600" y="612" fill="#fde68a" fontSize="14" textAnchor="middle">G_solid = G_liquid</text>

        {/* Intersection 2: boiling point Tb */}
        <circle cx="840" cy="166" r="14" fill="#34d399" />
        <line x1="840" y1="166" x2="840" y2="560" stroke="#34d399" strokeWidth="3" strokeDasharray="12 8" />
        <text x="840" y="590" fill="#a7f3d0" fontSize="18" fontWeight="900" textAnchor="middle">T_b (boiling)</text>
        <text x="840" y="612" fill="#a7f3d0" fontSize="14" textAnchor="middle">G_liquid = G_gas</text>

        {/* Stable phase labels */}
        <rect x="135" y="460" width="130" height="32" rx="12" fill="#3b0764" />
        <text x="200" y="481" fill="#e9d5ff" fontSize="14" fontWeight="900" textAnchor="middle">solid stable</text>
        <rect x="640" y="420" width="130" height="32" rx="12" fill="#064e3b" />
        <text x="705" y="441" fill="#a7f3d0" fontSize="14" fontWeight="900" textAnchor="middle">liquid stable</text>
        <rect x="900" y="320" width="120" height="32" rx="12" fill="#450a0a" />
        <text x="960" y="341" fill="#fda4af" fontSize="14" fontWeight="900" textAnchor="middle">gas stable</text>

        <rect x="150" y="625" width="900" height="35" rx="14" fill="#0f172a" />
        <text x="600" y="648" fill="#cbd5e1" fontSize="14" textAnchor="middle">
          Slope = (∂G_m/∂T)_P = −S_m. Gas has the largest molar entropy, so steepest slope.
        </text>
      </svg>
    </div>
  );
}

// SVG 2: G vs P
function GvsPSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 560" role="img" aria-labelledby="p26-gP-title p26-gP-desc" className="h-auto w-full">
        <title id="p26-gP-title">Molar Gibbs energy versus pressure for gas and condensed phases</title>
        <desc id="p26-gP-desc">
          Gas G_m rises steeply as RTln(P) at constant temperature. Liquid and solid G_m rise nearly
          linearly with small slope V_m. All lines converge at standard pressure P-standard.
        </desc>
        <defs>
          <linearGradient id="p26gPBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p26axArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="560" rx="34" fill="url(#p26gPBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="26" fontWeight="900" textAnchor="middle">GIBBS ENERGY VERSUS PRESSURE: (∂G_m/∂P)_T = V_m</text>

        <line x1="100" y1="460" x2="1100" y2="460" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p26axArrow2)" />
        <line x1="100" y1="460" x2="100" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p26axArrow2)" />
        <text x="1115" y="474" fill="#e2e8f0" fontSize="20" fontWeight="900">P</text>
        <text x="72" y="68" fill="#e2e8f0" fontSize="20" fontWeight="900">G_m</text>

        {/* Gas: logarithmic rise */}
        <path d="M200 420 C280 370 380 280 500 220 C640 155 780 120 1080 95" fill="none" stroke="#fb7185" strokeWidth="9" />
        <text x="1000" y="85" fill="#fda4af" fontSize="17" fontWeight="900">gas: G_m = G°_m + RTln(P/P°)</text>
        <text x="1000" y="108" fill="#fda4af" fontSize="14">steep at low P</text>

        {/* Condensed: nearly linear, shallow */}
        <path d="M200 340 L1080 300" fill="none" stroke="#a78bfa" strokeWidth="7" />
        <text x="780" y="290" fill="#c4b5fd" fontSize="17" fontWeight="900">condensed: G_m ≈ G°_m + V_m(P−P°)</text>
        <text x="780" y="313" fill="#c4b5fd" fontSize="14">nearly flat (V_m small)</text>

        {/* P° mark */}
        <line x1="500" y1="220" x2="500" y2="460" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 8" />
        <line x1="500" y1="340" x2="500" y2="460" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 8" />
        <text x="500" y="488" fill="#fde68a" fontSize="17" fontWeight="900" textAnchor="middle">P° (standard)</text>

        <rect x="150" y="495" width="900" height="35" rx="14" fill="#0f172a" />
        <text x="600" y="518" fill="#cbd5e1" fontSize="14" textAnchor="middle">
          At P°, gas and condensed curves need not coincide — their difference is determined by standard-state Gibbs energy.
        </text>
      </svg>
    </div>
  );
}

const examples = [
  {
    title: "Pressure effect on liquid water",
    given: "Estimate ΔG_m for liquid water (V_m = 18.0 cm³ mol⁻¹) when pressure increases from 1 bar to 1001 bar at 298 K.",
    method: "Integrate dG = V dP at constant T for incompressible condensed phase: ΔG ≈ V_m ΔP.",
    solution: "ΔG ≈ 18.0 × 10⁻⁶ m³ mol⁻¹ × 1000 × 10⁵ Pa = 1.80 × 10³ J mol⁻¹ = 1.80 kJ mol⁻¹. Modest pressure effect on condensed phases.",
    trap: "For gases, the V ≈ const approximation fails completely — must use V = RT/P leading to ΔG = RT ln(P₂/P₁).",
  },
  {
    title: "Gibbs–Helmholtz: temperature correction of reaction Gibbs energy",
    given: "At 298 K, ΔG° = −33.0 kJ mol⁻¹ and ΔH° = −92.0 kJ mol⁻¹. Estimate ΔG° at 500 K assuming constant ΔH°.",
    method: "Integrate the Gibbs–Helmholtz equation [∂(ΔG/T)/∂T]_P = −ΔH/T².",
    solution:
      "∫d(ΔG°/T) = −ΔH° ∫dT/T² from T₁=298 K to T₂=500 K. " +
      "ΔG°(T₂)/T₂ − ΔG°(T₁)/T₁ = ΔH°(1/T₂ − 1/T₁). " +
      "ΔG°(500)/500 − (−33000)/298 = −92000(1/500 − 1/298). " +
      "ΔG°(500)/500 + 110.74 = −92000(−0.001356) = +124.7 J mol⁻¹ K⁻¹. " +
      "ΔG°(500) = 500(124.7 − 110.74) = 500 × 13.96 = 6980 J mol⁻¹ ≈ +7.0 kJ mol⁻¹. " +
      "The reaction becomes non-spontaneous (ΔG° > 0) at 500 K.",
    trap: "The Gibbs–Helmholtz equation relates d(G/T)/dT, not dG/dT, to −H/T². Confusing the two leads to a factor of T error.",
  },
  {
    title: "Phase transition entropy from G slope",
    given:
      "The molar Gibbs energy of liquid water at 373 K and 1 bar has slope −S_liquid = −86.8 J mol⁻¹ K⁻¹. The slope for steam is −S_gas = −195.0 J mol⁻¹ K⁻¹. What is ΔS_vap?",
    method: "(∂G_m/∂T)_P = −S_m. The slopes are directly −S_m for each phase.",
    solution:
      "ΔS_vap = S_gas − S_liquid = 195.0 − 86.8 = 108.2 J mol⁻¹ K⁻¹. " +
      "ΔH_vap = T_b × ΔS_vap = 373 × 108.2 = 40.4 kJ mol⁻¹. " +
      "This agrees with the standard enthalpy of vaporisation of water (40.65 kJ mol⁻¹).",
    trap: "The slopes are negative (G decreases as T increases) because entropy is positive. The steeper slope of gas means G_gas falls faster with T, which is why the gas phase becomes stable at high T.",
  },
];

const practice = [
  { q: "State the Gibbs–Helmholtz equation.", a: "[∂(G/T)/∂T]_P = −H/T². For a reaction: [∂(ΔG°/T)/∂T]_P = −ΔH°/T²." },
  { q: "Express the pressure dependence of G for an ideal gas.", a: "G_m(T,P) = G°_m(T) + RT ln(P/P°). This follows from integrating dG = V dP = (RT/P) dP at constant T from P° to P." },
  { q: "Why does the gas phase have the steepest negative slope on a G vs T plot?", a: "The slope is (∂G_m/∂T)_P = −S_m. Gases have the highest molar entropy of the three ordinary states of matter, so their G_m falls most steeply as temperature rises." },
  { q: "At what temperature does solid melt, according to G vs T analysis?", a: "At the melting point T_m, G_m(solid) = G_m(liquid). Below T_m, solid has the lower G_m; above T_m, liquid has the lower G_m." },
  { q: "Estimate the Gibbs energy change when 1 mol N₂ (ideal) is compressed from 1 bar to 200 bar at 298 K.", a: "ΔG = RT ln(P₂/P₁) = 8.314 × 298 × ln 200 = 2478 × 5.298 = 13.13 kJ mol⁻¹." },
  { q: "The G–T slope changes discontinuously at a first-order transition. What does this mean physically?", a: "A discontinuity in (∂G/∂T)_P = −S means a discontinuity in entropy: the two phases have different entropies at T_transition. The latent heat is ΔH_tr = T_tr × ΔS_tr." },
];

export default function ThermodynamicsPart26LocalhostReview() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-8">

        <header className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-300">Part 26</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            Pressure and Temperature Dependence of Gibbs Energy
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Complete derivations of how G depends on T and P, the Gibbs–Helmholtz equation,
            phase stability from G–T slopes, and the ideal-gas logarithmic form.
          </p>
        </header>

        <Section index="1" title="Theory: The Fundamental Gibbs Differential"
          subtitle="dG = −S dT + V dP — exact derived result from the Legendre transform of H">
          <p>
            From Part 25: the natural variables of Gibbs energy are T and P. The exact differential
            encodes how G responds to small changes in temperature and pressure:
          </p>
          <Formula label="Fundamental Gibbs differential">dG = −S dT + V dP</Formula>
          <p>The two partial derivatives follow immediately:</p>
          <Formula label="Temperature derivative at constant pressure">(∂G/∂T)_P = −S</Formula>
          <Formula label="Pressure derivative at constant temperature">(∂G/∂P)_T = V</Formula>
          <Lens title="Physical meaning of each derivative" tone="cyan">
            (∂G/∂T)_P = −S: because entropy is always positive, G always decreases as temperature
            rises at constant pressure. The rate depends on the phase — highest for gas, lowest for
            solid. (∂G/∂P)_T = V: because volume is always positive, G always increases as pressure
            rises at constant temperature.
          </Lens>
        </Section>

        <Section index="2" title="Temperature Dependence: G vs T Plots and Phase Stability">
          <GvsTSVG />
          <p>
            At fixed pressure, G_m decreases linearly with T (to first approximation) with slope −S_m.
            The stable phase at each temperature is whichever has the <em>lowest</em> G_m.
          </p>
          <p>
            The melting point T_m is where G_m(solid) = G_m(liquid). The boiling point T_b is where
            G_m(liquid) = G_m(gas). These intersections correspond to first-order phase transitions
            with a discontinuous jump in entropy:
          </p>
          <Formula label="Entropy of transition">ΔS_tr = (ΔG_m,α − ΔG_m,β) / (T slope change) = ΔH_tr / T_tr</Formula>
          <Lens title="Curvature of the G–T line" tone="violet">
            The second derivative (∂²G/∂T²)_P = −(∂S/∂T)_P = −C_P/T is always negative (C_P {"> "}0),
            so G curves downward with T. The G–T line is slightly concave, not strictly straight.
          </Lens>
        </Section>

        <Section index="3" title="Pressure Dependence: Integrating dG = V dP at Constant T">
          <GvsPSVG />
          <p>Integrating at constant temperature from a reference pressure P₁ to P₂:</p>
          <Formula label="General isothermal Gibbs change">G(T, P₂) − G(T, P₁) = ∫_&#123;P₁&#125;^&#123;P₂&#125; V(T, P) dP</Formula>
          <h3 className="font-black text-white">Ideal Gas (V = nRT/P):</h3>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>G(T,P₂) − G(T,P₁) = ∫_&#123;P₁&#125;^&#123;P₂&#125; (nRT/P) dP</p>
            <p>= nRT [ln P]_&#123;P₁&#125;^&#123;P₂&#125;</p>
            <p>= nRT ln(P₂/P₁)</p>
          </div>
          <Formula label="Standard-state form for ideal gas">G_m(T,P) = G°_m(T) + RT ln(P/P°)</Formula>
          <h3 className="font-black text-white">Incompressible Condensed Phase (V ≈ V_m = constant):</h3>
          <Formula label="Condensed phase approximation">ΔG_m ≈ V_m(P₂ − P₁)</Formula>
          <Lens title="Why V_m for gases and solids/liquids differ so much" tone="amber">
            Gas molar volumes at 1 bar are ~20 L mol⁻¹; liquid and solid molar volumes are typically
            0.01–0.1 L mol⁻¹. A 100-bar pressure change raises G_m of liquid water by ~1.8 kJ mol⁻¹
            but raises ideal-gas G_m by RT ln 100 = 11.4 kJ mol⁻¹.
          </Lens>
        </Section>

        <Section index="4" title="The Gibbs–Helmholtz Equation"
          subtitle="Exact derived result connecting G, H and the temperature dependence of G/T">
          <p>Differentiate G/T with respect to T at constant P:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>d(G/T)/dT = (T(∂G/∂T)_P − G) / T²</p>
            <p>= (T(−S) − G) / T²</p>
            <p>= (−TS − G) / T²</p>
            <p>= −(G + TS) / T²</p>
            <p>= −H / T²</p>
          </div>
          <Formula label="Gibbs–Helmholtz equation">[∂(G/T)/∂T]_P = −H/T²</Formula>
          <Formula label="Reaction form">[∂(ΔG°/T)/∂T]_P = −ΔH°/T²</Formula>
          <p>Integrating between T₁ and T₂ (assuming ΔH° ≈ constant):</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>ΔG°(T₂)/T₂ − ΔG°(T₁)/T₁ = −ΔH° ∫_&#123;T₁&#125;^&#123;T₂&#125; dT/T²</p>
            <p>= −ΔH° [−1/T]_&#123;T₁&#125;^&#123;T₂&#125;</p>
            <p>= ΔH°(1/T₂ − 1/T₁)</p>
          </div>
          <Formula label="Integrated Gibbs–Helmholtz">ΔG°(T₂)/T₂ = ΔG°(T₁)/T₁ + ΔH°(1/T₂ − 1/T₁)</Formula>
          <Lens title="Connection to van't Hoff" tone="emerald">
            Since ΔG° = −RT ln K, the Gibbs–Helmholtz equation leads directly to the van&apos;t Hoff
            equation d(ln K)/dT = ΔH°/(RT²). Part 30 develops this fully.
          </Lens>
        </Section>

        <Section index="5" title="Worked Examples">
          <div className="space-y-4">
            {examples.map((ex) => (
              <article key={ex.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="font-black text-white">{ex.title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-200">{ex.given}</p>
                <p className="mt-2 text-sm text-slate-400"><span className="font-black text-slate-300">Method: </span>{ex.method}</p>
                <div className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm leading-6 text-slate-200">{ex.solution}</div>
                <p className="mt-2 text-xs text-amber-300"><span className="font-black">Trap: </span>{ex.trap}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section index="6" title="Concept Traps">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["Pressure raises G, not lowers it", "(∂G/∂P)_T = V > 0 always. Compressing any system raises G. Pressure favours reactions that reduce total volume."],
              ["G/T is not the same as G", "The Gibbs–Helmholtz equation involves d(G/T)/dT, not dG/dT. The RHS is −H/T², not −H."],
              ["Phase boundaries are G intersections", "Two phases coexist when their G_m values are equal at a given T and P. The phase with lower G_m is stable."],
              ["Condensed phase pressure correction is small but not zero", "At geologically relevant pressures (GPa), the V_m ΔP term can be thousands of kJ mol⁻¹ — critical for mineral phase equilibria."],
            ].map(([t, b]) => (
              <aside key={String(t)} className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-4">
                <h3 className="font-black text-amber-200">{t}</h3>
                <p className="mt-2 text-sm text-slate-300">{String(b)}</p>
              </aside>
            ))}
          </div>
        </Section>

        <ThermodynamicsCompleteDerivations part={26} />

        <section className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.04] p-5 md:p-8">
          <h2 className="text-2xl font-black text-amber-200">Practice Problems</h2>
          <div className="mt-4 space-y-3">
            {practice.map((p, i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-white"><span className="mr-2 text-amber-300">{i + 1}.</span>{p.q}</p>
                <div className="mt-2 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3">
                  <p className="text-xs font-black uppercase tracking-wider text-emerald-300">Answer</p>
                  <p className="mt-1 text-sm text-slate-200">{p.a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">Part 26 Complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">Next: Chemical potential and standard states</h2>
        </section>

      </div>
    </main>
  );
}
