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

// SVG 1: ln K vs 1/T (van't Hoff plot)
function VantHoffPlotSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 600" role="img" aria-labelledby="p30-vh-title p30-vh-desc" className="h-auto w-full">
        <title id="p30-vh-title">van&apos;t Hoff plot: ln K versus 1/T</title>
        <desc id="p30-vh-desc">
          For an exothermic reaction (ΔrH° &lt; 0), ln K decreases as 1/T decreases (T increases).
          For an endothermic reaction (ΔrH° &gt; 0), ln K increases as 1/T decreases.
          The slope equals −ΔrH°/R.
        </desc>
        <defs>
          <linearGradient id="p30vhBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p30axArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="600" rx="34" fill="url(#p30vhBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">VAN&apos;T HOFF PLOT: ln K vs 1/T</text>

        <line x1="130" y1="480" x2="1080" y2="480" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p30axArrow)" />
        <line x1="130" y1="480" x2="130" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p30axArrow)" />
        <text x="1095" y="494" fill="#e2e8f0" fontSize="18">1/T →</text>
        <text x="70" y="68" fill="#e2e8f0" fontSize="18">ln K</text>

        {/* Zero line */}
        <line x1="130" y1="280" x2="1080" y2="280" stroke="#475569" strokeWidth="2" strokeDasharray="14 10" />
        <text x="1090" y="285" fill="#475569" fontSize="14">ln K = 0 (K=1)</text>

        {/* Exothermic: positive slope (K decreases as T increases → ln K vs 1/T has positive slope = −ΔH/R > 0 when ΔH < 0) */}
        <path d="M200 430 L960 130" fill="none" stroke="#22d3ee" strokeWidth="9" />
        <text x="400" y="380" fill="#a5f3fc" fontSize="16" fontWeight="900">exothermic: ΔrH° &lt; 0</text>
        <text x="400" y="402" fill="#a5f3fc" fontSize="13">slope = −ΔrH°/R &gt; 0</text>
        <text x="400" y="422" fill="#a5f3fc" fontSize="13">K decreases as T rises</text>

        {/* Endothermic: negative slope */}
        <path d="M200 130 L960 430" fill="none" stroke="#fb7185" strokeWidth="9" />
        <text x="600" y="185" fill="#fda4af" fontSize="16" fontWeight="900">endothermic: ΔrH° &gt; 0</text>
        <text x="600" y="207" fill="#fda4af" fontSize="13">slope = −ΔrH°/R &lt; 0</text>
        <text x="600" y="227" fill="#fda4af" fontSize="13">K increases as T rises</text>

        {/* Slope annotation */}
        <line x1="200" y1="430" x2="400" y2="430" stroke="#fbbf24" strokeWidth="3" strokeDasharray="10 6" />
        <line x1="400" y1="430" x2="400" y2="230" stroke="#fbbf24" strokeWidth="3" strokeDasharray="10 6" />
        <text x="510" y="445" fill="#fde68a" fontSize="14">Δ(1/T)</text>
        <text x="405" y="340" fill="#fde68a" fontSize="14">Δ(ln K)</text>
        <text x="500" y="300" fill="#fde68a" fontSize="15" fontWeight="900">slope = −ΔrH°/R</text>

        <rect x="180" y="520" width="840" height="60" rx="14" fill="#0f172a" />
        <text x="600" y="544" fill="#cbd5e1" fontSize="14" textAnchor="middle">
          Integrated form: ln(K₂/K₁) = −(ΔrH°/R)(1/T₂ − 1/T₁)
        </text>
        <text x="600" y="566" fill="#94a3b8" fontSize="13" textAnchor="middle">
          Valid when ΔrH° is approximately constant over [T₁, T₂]
        </text>
      </svg>
    </div>
  );
}

// SVG 2: Clapeyron phase diagram P-T with coexistence curves
function ClapeyronSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 640" role="img" aria-labelledby="p30-clap-title p30-clap-desc" className="h-auto w-full">
        <title id="p30-clap-title">Pressure–temperature phase diagram with coexistence curves and Clapeyron slopes</title>
        <desc id="p30-clap-desc">
          Solid–liquid boundary (steep, positive or negative depending on ΔV_fus),
          liquid–vapour boundary (Clausius–Clapeyron: exponential rise), and solid–vapour boundary.
          Triple point where all three coexistence lines meet. Water anomaly: negative S-L slope.
        </desc>
        <defs>
          <linearGradient id="p30cBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p30cAxArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="640" rx="34" fill="url(#p30cBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">PRESSURE–TEMPERATURE PHASE DIAGRAM</text>

        <line x1="100" y1="540" x2="1100" y2="540" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p30cAxArrow)" />
        <line x1="100" y1="540" x2="100" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p30cAxArrow)" />
        <text x="1115" y="554" fill="#e2e8f0" fontSize="18">T →</text>
        <text x="65" y="68" fill="#e2e8f0" fontSize="18">P ↑</text>

        {/* Liquid-vapour (Clausius-Clapeyron): exponential rise to critical point */}
        <path d="M350 520 C400 490 450 440 520 390 C600 330 680 270 750 220 C800 185 840 165 870 155"
          fill="none" stroke="#fb7185" strokeWidth="9" />
        {/* Critical point */}
        <circle cx="870" cy="155" r="14" fill="#fbbf24" />
        <text x="880" y="143" fill="#fde68a" fontSize="14" fontWeight="900">critical point</text>

        {/* Solid-liquid (Clapeyron): steep, slightly positive for most substances */}
        <path d="M350 520 L320 115" fill="none" stroke="#22d3ee" strokeWidth="9" />
        <text x="160" y="250" fill="#a5f3fc" fontSize="14" fontWeight="900">solid–liquid</text>
        <text x="160" y="270" fill="#a5f3fc" fontSize="12">steep: ΔV_fus small</text>
        <text x="160" y="290" fill="#a5f3fc" fontSize="12">positive slope typical</text>

        {/* Water anomaly dashed line */}
        <path d="M350 520 L370 115" fill="none" stroke="#60a5fa" strokeWidth="6" strokeDasharray="16 10" />
        <text x="375" y="108" fill="#93c5fd" fontSize="13" fontWeight="900">water: negative slope</text>

        {/* Solid-vapour */}
        <path d="M150 540 C200 510 260 480 310 460 C330 453 345 530 350 520"
          fill="none" stroke="#a78bfa" strokeWidth="9" />
        <text x="180" y="500" fill="#c4b5fd" fontSize="14" fontWeight="900">solid–vapour</text>

        {/* Triple point */}
        <circle cx="350" cy="520" r="14" fill="#34d399" />
        <text x="355" y="508" fill="#a7f3d0" fontSize="14" fontWeight="900">triple point</text>
        <text x="355" y="524" fill="#a7f3d0" fontSize="12">T_tp, P_tp</text>

        {/* Phase region labels */}
        <text x="180" y="360" fill="#f8fafc" fontSize="22" fontWeight="900">SOLID</text>
        <text x="600" y="430" fill="#f8fafc" fontSize="22" fontWeight="900">LIQUID</text>
        <text x="950" y="350" fill="#f8fafc" fontSize="22" fontWeight="900">GAS</text>

        {/* Clapeyron annotations */}
        <rect x="130" y="570" width="940" height="50" rx="16" fill="#0f172a" />
        <text x="600" y="594" fill="#cbd5e1" fontSize="14" textAnchor="middle">
          Clapeyron: dP/dT = ΔH_tr/(T ΔV_tr). Clausius–Clapeyron (l–v): d ln P/dT = ΔH_vap/(RT²).
        </text>
        <text x="600" y="612" fill="#94a3b8" fontSize="13" textAnchor="middle">
          Water anomaly: ΔV_fus &lt; 0 (ice less dense than liquid) → negative S–L slope.
        </text>
      </svg>
    </div>
  );
}

const examples = [
  {
    title: "van't Hoff: K at a new temperature",
    given: "At 300 K, K₁ = 4.0 for a reaction with ΔrH° = +20 kJ mol⁻¹ (endothermic). Find K₂ at 350 K.",
    solution: "ln(K₂/K₁) = −(ΔrH°/R)(1/T₂ − 1/T₁) = −(20000/8.314)(1/350 − 1/300) = −2405 × (−4.762 × 10⁻⁴) = +1.145. K₂/K₁ = e^{1.145} = 3.14. K₂ = 4.0 × 3.14 = 12.6. Endothermic reaction: K increases with T ✓.",
    trap: "For endothermic reactions, ΔrH° > 0, so the term −ΔrH°(1/T₂ − 1/T₁) is positive when T₂ > T₁ (since 1/T₂ < 1/T₁). K increases with T for endothermic reactions.",
  },
  {
    title: "Clausius–Clapeyron: vapour pressure at a new temperature",
    given: "Water has P_vap = 12.3 mmHg at 15 °C and ΔH_vap = 44.0 kJ mol⁻¹. Find P_vap at 35 °C.",
    solution: "T₁ = 288 K, T₂ = 308 K. ln(P₂/P₁) = −(44000/8.314)(1/308 − 1/288) = −5293 × (−2.256 × 10⁻⁴) = +1.194. P₂ = 12.3 × e^{1.194} = 12.3 × 3.30 = 40.6 mmHg.",
    trap: "Use K (not °C) in the formula. T₁ = 288 K (not 15) and T₂ = 308 K (not 35).",
  },
  {
    title: "Clapeyron equation — melting point vs pressure",
    given: "Ice: ΔH_fus = 6.01 kJ mol⁻¹, ΔV_fus = −1.63 × 10⁻⁶ m³ mol⁻¹ at 273 K. Find dP/dT.",
    solution: "dP/dT = ΔH_fus/(T_m ΔV_fus) = 6010/(273 × (−1.63 × 10⁻⁶)) = 6010/(−4.449 × 10⁻⁴) = −1.35 × 10⁷ Pa K⁻¹ = −135 bar K⁻¹. To lower the melting point by 1 K, pressure must increase by 135 bar. This is the water anomaly (negative slope).",
    trap: "ΔV_fus must use the sign correctly. Water has ΔV_fus < 0 because ice is less dense than liquid water. This gives a negative Clapeyron slope — unique among common substances.",
  },
  {
    title: "Thermodynamics vs kinetics — stability",
    given: "For diamond → graphite at 298 K, ΔrG° = −2.9 kJ mol⁻¹. Comment on the stability of diamond.",
    solution: "ΔrG° < 0 means graphite is thermodynamically more stable than diamond at 298 K and 1 bar. However, the reaction is kinetically frozen: the activation barrier for rearranging the covalent lattice is enormous. Diamond is metastable — a local minimum in G separated by a huge kinetic barrier from the global minimum (graphite). Thermodynamics predicts direction; kinetics determines rate.",
    trap: "Never confuse thermodynamic stability (ΔrG° sign) with kinetic stability (activation barrier). Diamond is thermodynamically unstable but kinetically stable for all practical purposes.",
  },
];

export default function ThermodynamicsPart30LocalhostReview() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-8">

        <header className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-300">Part 30</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            van&apos;t Hoff Equation, Clapeyron Equation and Phase Equilibrium
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Temperature dependence of equilibrium constants, Clausius–Clapeyron vapour pressure,
            the Clapeyron equation for any phase transition, and thermodynamic versus kinetic stability.
          </p>
        </header>

        <Section index="1" title="van't Hoff Equation — Differential Form"
          subtitle="Exact derived result combining ΔrG° = −RT ln K with the Gibbs–Helmholtz equation">
          <VantHoffPlotSVG />
          <p>Differentiate ΔrG°/T = −R ln K with respect to T at constant pressure, using the Gibbs–Helmholtz equation [∂(ΔG°/T)/∂T]_P = −ΔH°/T²:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>∂/∂T[−R ln K] = −ΔrH°/T²</p>
            <p>−R (d ln K/dT) = −ΔrH°/T²</p>
            <p>d ln K/dT = ΔrH°/(RT²)</p>
          </div>
          <Formula label="van't Hoff differential equation">d(ln K)/dT = ΔrH°/(RT²)</Formula>
          <Lens title="Qualitative prediction" tone="cyan">
            If ΔrH° {">"} 0 (endothermic): d ln K/dT {">"} 0 → K increases with T → product yield improves
            at higher T. If ΔrH° {"<"} 0 (exothermic): K decreases with T → Le Chatelier principle in
            quantitative form.
          </Lens>
        </Section>

        <Section index="2" title="Integrated van't Hoff Equation">
          <p>Assuming ΔrH° ≈ constant over the temperature range [T₁, T₂]:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>∫_&#123;K₁&#125;^&#123;K₂&#125; d(ln K) = (ΔrH°/R) ∫_&#123;T₁&#125;^&#123;T₂&#125; dT/T²</p>
            <p>ln K₂ − ln K₁ = (ΔrH°/R)[−1/T]_&#123;T₁&#125;^&#123;T₂&#125;</p>
            <p>ln(K₂/K₁) = (ΔrH°/R)(1/T₁ − 1/T₂)</p>
            <p>       = −(ΔrH°/R)(1/T₂ − 1/T₁)</p>
          </div>
          <Formula label="Integrated van't Hoff equation">ln(K₂/K₁) = −(ΔrH°/R)(1/T₂ − 1/T₁)</Formula>
          <Formula label="Slope of ln K vs 1/T plot">slope = −ΔrH°/R</Formula>
        </Section>

        <Section index="3" title="Clapeyron Equation for Phase Equilibrium"
          subtitle="Exact derived result — no approximations needed">
          <ClapeyronSVG />
          <p>Two phases α and β coexist when μα = μβ. As T and P change along the coexistence line, the equality must be maintained: dμα = dμβ.</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>dμ = −S̄_m dT + V̄_m dP for each phase</p>
            <p>Set dμα = dμβ:</p>
            <p>−S̄_α dT + V̄_α dP = −S̄_β dT + V̄_β dP</p>
            <p>(V̄_β − V̄_α) dP = (S̄_β − S̄_α) dT</p>
            <p>Use ΔS_tr = ΔH_tr/T (at the transition temperature):</p>
            <p>dP/dT = ΔS_tr/ΔV_tr = ΔH_tr/(T ΔV_tr)</p>
          </div>
          <Formula label="Clapeyron equation">dP/dT = ΔH_tr / (T_tr ΔV_tr)</Formula>
          <Lens title="Sign analysis" tone="violet">
            For most solid–liquid transitions: ΔH_fus {">"} 0 and ΔV_fus {">"} 0 → dP/dT {">"} 0 (positive slope).
            For water: ΔH_fus {">"} 0 but ΔV_fus {"<"} 0 (ice is less dense) → dP/dT {"<"} 0 (negative slope).
            For all liquid–vapour transitions: ΔH_vap {">"} 0 and ΔV_vap {">"} 0 → dP/dT {">"} 0.
          </Lens>
        </Section>

        <Section index="4" title="Clausius–Clapeyron Approximation for Liquid–Vapour"
          subtitle="Approximate result: valid when ideal-gas vapour and negligible liquid molar volume are assumed">
          <p>For liquid–vapour equilibrium, ΔV_vap ≈ V_gas = RT/P (ideal gas), so:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>dP/dT = ΔH_vap P/(RT²)</p>
            <p>Divide both sides by P:</p>
            <p>d(ln P)/dT = ΔH_vap/(RT²)</p>
            <p>Integrate assuming ΔH_vap ≈ constant:</p>
            <p>ln(P₂/P₁) = −(ΔH_vap/R)(1/T₂ − 1/T₁)</p>
          </div>
          <Formula label="Clausius–Clapeyron equation">ln(P₂/P₁) = −(ΔH_vap/R)(1/T₂ − 1/T₁)</Formula>
          <Formula label="Slope of ln P vs 1/T">slope = −ΔH_vap/R</Formula>
          <Lens title="Trouton's rule connection" tone="emerald">
            At the normal boiling point T_b, ΔS_vap = ΔH_vap/T_b ≈ 85 J mol⁻¹ K⁻¹ for many non-polar
            liquids (Trouton&apos;s rule). This is an empirical pattern — deviations occur for hydrogen-bonded
            liquids (water: ΔS_vap ≈ 109 J mol⁻¹ K⁻¹) and small molecules with restricted motion.
          </Lens>
        </Section>

        <Section index="5" title="Thermodynamic vs Kinetic Stability">
          <p>
            A system is <strong className="text-emerald-300">thermodynamically stable</strong> if it is at the global minimum of G
            (or at the phase with the lowest G_m at given T, P). A system is <strong className="text-amber-300">thermodynamically
            metastable</strong> if it is at a local G minimum. It is <strong className="text-rose-300">thermodynamically
            unstable</strong> if ΔG for any displacement is negative.
          </p>
          <p>
            A catalyst or enzyme lowers the activation barrier but does NOT change G_reactants,
            G_products, ΔrG°, or K. Only temperature, pressure, or composition changes affect the
            equilibrium position.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-[600px] border-collapse text-left text-sm">
              <thead className="bg-slate-900">
                <tr>
                  {["Condition", "ΔrG", "ΔrG°", "Direction"].map(h => (
                    <th key={h} className="border-b border-white/10 px-4 py-3 font-black text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-slate-950/70">
                {[
                  ["Q < K", "< 0 (spontaneous)", "independent of Q", "Forward"],
                  ["Q = K", "= 0 (equilibrium)", "independent of Q", "Neither"],
                  ["Q > K", "> 0 (non-spontaneous)", "independent of Q", "Reverse"],
                  ["Q = 1, K > 1", "= ΔrG° < 0", "< 0", "Forward"],
                  ["Q = 1, K < 1", "= ΔrG° > 0", "> 0", "Reverse"],
                ].map(([cond, drg, drgo, dir]) => (
                  <tr key={String(cond)}>
                    <td className="px-4 py-3 font-mono text-cyan-200">{cond}</td>
                    <td className="px-4 py-3 text-slate-300">{drg}</td>
                    <td className="px-4 py-3 text-slate-300">{drgo}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-300">{dir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section index="6" title="Worked Examples">
          {examples.map(ex => (
            <article key={ex.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 mb-4">
              <h3 className="font-black text-white">{ex.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-200">{ex.given}</p>
              <div className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm leading-6 text-slate-200">{ex.solution}</div>
              <p className="mt-2 text-xs text-amber-300"><span className="font-black">Trap: </span>{ex.trap}</p>
            </article>
          ))}
        </Section>

        <ThermodynamicsCompleteDerivations part={30} />

        <section className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.04] p-5 md:p-8">
          <h2 className="text-2xl font-black text-amber-200">Practice Problems</h2>
          <div className="mt-4 space-y-3">
            {[
              ["A plot of ln K vs 1/T has slope −4800 K. Find ΔrH°.", "slope = −ΔrH°/R → ΔrH° = −slope × R = −(−4800) × 8.314 = +39.9 kJ mol⁻¹. Endothermic reaction."],
              ["For the reaction N₂O₄(g) ⇌ 2NO₂(g), K = 4.7 at 350 K and K = 0.13 at 300 K. Find ΔrH°.", "ln(4.7/0.13) = −(ΔrH°/R)(1/350 − 1/300). 3.584 = −(ΔrH°/8.314)(−4.762×10⁻⁴). ΔrH° = 3.584×8.314/4.762×10⁻⁴ = 62.6 kJ mol⁻¹ (endothermic, consistent with dissociation)."],
              ["The normal boiling point of benzene is 80.1 °C and ΔH_vap = 30.8 kJ mol⁻¹. Find the vapour pressure at 60 °C.", "T₁ = 353.1 K (normal bp, P₁ = 1 atm), T₂ = 333 K. ln(P₂/1) = −(30800/8.314)(1/333 − 1/353.1) = −3705 × (1.700×10⁻⁴) = −0.630. P₂ = e^{−0.630} = 0.532 atm = 404 mmHg."],
              ["Why does the solid–liquid coexistence line for most substances have a very steep positive slope?", "dP/dT = ΔH_fus/(T ΔV_fus). ΔV_fus is small (solid and liquid have similar densities) making dP/dT very large — enormous pressure change is required to shift T_m appreciably."],
            ].map(([q, a], i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-white"><span className="mr-2 text-amber-300">{i+1}.</span>{q}</p>
                <div className="mt-2 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm text-slate-200">{a}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Completion — no Part 31 link */}
        <section className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.05] p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">Thermodynamics Complete</p>
          <h2 className="mt-3 text-3xl font-black text-white">Parts 01–30 Complete</h2>
          <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-300">
            You have reached the end of the Synergic Bond Thermodynamics chapter. Parts 01 through 30
            cover the complete sequence from system definition and state variables through fundamental
            equations, Maxwell relations, and chemical equilibrium.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["System and surroundings", "State functions", "First and Second Laws", "Carnot and entropy",
              "Fundamental equations", "Maxwell relations", "Joule–Thomson", "Chemical potential",
              "Reaction equilibrium", "Phase equilibrium"].map(tag => (
              <span key={tag} className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">{tag}</span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
