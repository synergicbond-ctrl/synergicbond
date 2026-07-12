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

// SVG 1: Chemical potential vs pressure (logarithmic for ideal gas)
function MuVsPSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 600" role="img" aria-labelledby="p27-mu-title p27-mu-desc" className="h-auto w-full overflow-visible rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-2 sm:p-3 shadow-[0_24px_90px_-42px_rgba(34,211,238,0.75)] transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/35 hover:shadow-[0_28px_100px_-42px_rgba(34,211,238,0.9)]" focusable="false" preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
        <title id="p27-mu-title">Chemical potential of an ideal gas versus pressure</title>
        <desc id="p27-mu-desc">
          μ = μ° + RT ln(P/P°) rises logarithmically with pressure, passing through μ° at P = P°.
          Below P°, the chemical potential is less than μ°; above P°, it exceeds μ°.
        </desc>
        <defs>
          <linearGradient id="p27muBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p27axArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="600" rx="34" fill="url(#p27muBg)" />
        <text x="600" y="48" fill="#f8fafc" fontSize="26" fontWeight="900" textAnchor="middle">CHEMICAL POTENTIAL: μ(T,P) = μ°(T) + RT ln(P/P°)</text>
        <line x1="100" y1="480" x2="1100" y2="480" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p27axArrow)" />
        <line x1="100" y1="480" x2="100" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p27axArrow)" />
        <text x="1115" y="494" fill="#e2e8f0" fontSize="18" fontWeight="900">P</text>
        <text x="72" y="68" fill="#e2e8f0" fontSize="18" fontWeight="900">μ</text>
        {/* Logarithmic curve */}
        <path d="M120 460 C180 440 250 390 350 330 C450 270 550 235 650 210 C750 188 850 170 950 155 C1000 148 1060 140 1100 135"
          fill="none" stroke="#22d3ee" strokeWidth="10" />
        {/* Dotted reference line at μ° */}
        <line x1="100" y1="280" x2="1100" y2="280" stroke="#64748b" strokeWidth="3" strokeDasharray="16 10" />
        <text x="1110" y="285" fill="#94a3b8" fontSize="16" fontWeight="900">μ°</text>
        {/* Mark at P° */}
        <line x1="500" y1="280" x2="500" y2="480" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 8" />
        <circle cx="500" cy="280" r="13" fill="#fbbf24" />
        <text x="500" y="510" fill="#fde68a" fontSize="17" fontWeight="900" textAnchor="middle">P° (standard)</text>
        <text x="500" y="532" fill="#fde68a" fontSize="13" textAnchor="middle">μ = μ° here</text>
        {/* Labels for regions */}
        <rect x="140" y="380" width="180" height="40" rx="14" fill="#0c4a6e" />
        <text x="230" y="406" fill="#a5f3fc" fontSize="14" fontWeight="900" textAnchor="middle">μ &lt; μ° (P &lt; P°)</text>
        <rect x="750" y="130" width="180" height="40" rx="14" fill="#451a03" />
        <text x="840" y="156" fill="#fde68a" fontSize="14" fontWeight="900" textAnchor="middle">μ &gt; μ° (P &gt; P°)</text>
        <rect x="200" y="540" width="800" height="35" rx="14" fill="#0f172a" />
        <text x="600" y="563" fill="#cbd5e1" fontSize="14" textAnchor="middle">
          RT ln(P/P°) is negative when P &lt; P°, making μ &lt; μ° — dilute gas has lower chemical potential.
        </text>
      </svg>
    </div>
  );
}

// SVG 2: Mole fraction effect on chemical potential
function MuVsMoleFracSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 520" role="img" aria-labelledby="p27-yx-title p27-yx-desc" className="h-auto w-full overflow-visible rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-2 sm:p-3 shadow-[0_24px_90px_-42px_rgba(34,211,238,0.75)] transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/35 hover:shadow-[0_28px_100px_-42px_rgba(34,211,238,0.9)]" focusable="false" preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
        <title id="p27-yx-title">Chemical potential of a mixture component versus mole fraction</title>
        <desc id="p27-yx-desc">
          For an ideal-gas component i in a mixture, μ_i = μ_i° + RT ln(y_i P/P°). As mole fraction
          y_i decreases toward zero, chemical potential falls to negative infinity (infinite dilution limit).
        </desc>
        <defs>
          <linearGradient id="p27yxBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p27yxArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="520" rx="34" fill="url(#p27yxBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">MIXING LOWERS CHEMICAL POTENTIAL: μ_i = μ_i(pure) + RT ln y_i</text>
        <line x1="150" y1="400" x2="1100" y2="400" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p27yxArrow)" />
        <line x1="150" y1="400" x2="150" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p27yxArrow)" />
        <text x="1115" y="414" fill="#e2e8f0" fontSize="18">y_i →</text>
        <text x="122" y="68" fill="#e2e8f0" fontSize="18">μ_i</text>
        {/* Label y=0 and y=1 on axis */}
        <text x="150" y="430" fill="#94a3b8" fontSize="15" textAnchor="middle">0</text>
        <text x="1080" y="430" fill="#94a3b8" fontSize="15" textAnchor="middle">1</text>
        {/* Logarithmic rise from left edge approaching μ° at y=1 */}
        <path d="M240 400 C270 370 320 310 420 250 C520 195 650 165 780 145 C880 130 980 118 1080 110"
          fill="none" stroke="#a78bfa" strokeWidth="9" />
        <circle cx="1080" cy="110" r="12" fill="#a78bfa" />
        <text x="1090" y="100" fill="#c4b5fd" fontSize="15" fontWeight="900">y_i = 1 (pure)</text>
        <text x="1090" y="118" fill="#c4b5fd" fontSize="13">μ = μ°_i + RT ln(P/P°)</text>
        {/* Asymptote arrow at y→0 */}
        <path d="M240 395 L200 400" stroke="#fb7185" strokeWidth="4" />
        <text x="155" y="370" fill="#fda4af" fontSize="14" fontWeight="900">μ → −∞</text>
        <text x="155" y="390" fill="#fda4af" fontSize="12">as y_i → 0</text>
        <rect x="180" y="455" width="840" height="35" rx="14" fill="#0f172a" />
        <text x="600" y="478" fill="#cbd5e1" fontSize="14" textAnchor="middle">
          RT ln y_i &lt; 0 for y_i &lt; 1. Dilution always lowers the chemical potential of an ideal-gas component.
        </text>
      </svg>
    </div>
  );
}

const stdStateTable = [
  { phase: "Pure ideal gas", standard: "P° = 1 bar (or 1 atm)", activity: "a = P/P°", muForm: "μ°(T) + RT ln(P/P°)" },
  { phase: "Gas in ideal mixture", standard: "P° = 1 bar", activity: "a_i = P_i/P° = y_i P/P°", muForm: "μ°_i(T) + RT ln(y_i P/P°)" },
  { phase: "Pure liquid (solvent)", standard: "Pure liquid at P, T", activity: "a = x (Raoult)", muForm: "μ*(l) + RT ln x" },
  { phase: "Solid (pure)", standard: "Pure solid at P, T", activity: "a = 1", muForm: "μ*(s)" },
  { phase: "Solute (Henry)", standard: "Hypothetical ideal solution at c° = 1 mol L⁻¹", activity: "a = c/c°", muForm: "μ°_solute + RT ln(c/c°)" },
];

const examples = [
  {
    title: "Pure gas at non-standard pressure",
    given: "Calculate μ − μ° for N₂(g) at 10 bar and 298 K.",
    solution: "μ − μ° = RT ln(P/P°) = 8.314 × 298 × ln(10) = 2478 × 2.303 = 5.71 kJ mol⁻¹. The chemical potential is raised above the standard value by compression.",
    trap: "μ° is a function of T only — it includes no pressure term.",
  },
  {
    title: "Component in ideal-gas mixture",
    given: "Air is 21% O₂ at total pressure 1 bar. Find (μ_O₂ − μ°_O₂) at 298 K.",
    solution: "P_O₂ = y × P = 0.21 × 1 = 0.21 bar. μ_O₂ − μ°_O₂ = RT ln(0.21/1) = 2478 × ln(0.21) = 2478 × (−1.561) = −3.87 kJ mol⁻¹. The chemical potential of O₂ in air is lower than for pure O₂ at 1 bar.",
    trap: "Use the partial pressure, not the total pressure, for the activity of a gas mixture component.",
  },
  {
    title: "Euler's theorem and G = Σn_i μ_i",
    given: "A binary ideal-gas mixture has n_A = 2 mol, n_B = 1 mol, μ_A = −5 kJ mol⁻¹, μ_B = −3 kJ mol⁻¹. Find the total Gibbs energy.",
    solution: "By Euler's theorem: G = Σn_i μ_i = 2(−5) + 1(−3) = −10 − 3 = −13 kJ. This expresses G as a weighted sum of partial molar Gibbs energies (chemical potentials).",
    trap: "Euler's theorem G = Σn_i μ_i holds only at constant T and P. The proof requires that G is a homogeneous first-order function of the n_i.",
  },
];

export default function ThermodynamicsPart27LocalhostReview() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-8">

        <header className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-300">Part 27</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            Chemical Potential and Gibbs Energy of Pure Ideal Gases
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Definition and physical interpretation of chemical potential, its derivation for ideal gases
            and mixtures, standard states, and the Euler relation G = Σnᵢμᵢ.
          </p>
        </header>

        <Section index="1" title="Chemical Potential: Definition"
          subtitle="Partial molar Gibbs energy — the Gibbs energy cost of adding one mole of a substance to an infinitely large sample">
          <p>
            For a multicomponent system, G depends on composition as well as T and P. Allowing matter
            to flow adds composition terms to the fundamental differential:
          </p>
          <Formula label="Fundamental relation with composition">dG = −S dT + V dP + Σᵢ μᵢ dnᵢ</Formula>
          <p>The chemical potential of component i is defined as:</p>
          <Formula label="Chemical potential — definition">μᵢ = (∂G/∂nᵢ)_&#123;T,P,nⱼ≠ᵢ&#125;</Formula>
          <p>
            It measures how the total Gibbs energy changes when a tiny amount of substance i is added
            at constant T, P while all other amounts are held fixed.
          </p>
          <Lens title="Euler's theorem and G = Σnᵢμᵢ" tone="violet">
            Because G is an extensive, homogeneous first-order function of the amounts nᵢ (at fixed T
            and P), Euler&apos;s theorem gives: G = Σᵢ nᵢ μᵢ. This is not an approximation — it is an
            exact consequence of extensivity.
          </Lens>
        </Section>

        <Section index="2" title="Chemical Potential of a Pure Ideal Gas"
          subtitle="Exact derived result from integrating dμ = V_m dP at constant T">
          <MuVsPSVG />
          <p>For a pure ideal gas at constant T:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>dμ = V_m dP = (RT/P) dP</p>
            <p>Integrate from P° (standard) to P:</p>
            <p>μ(T,P) − μ°(T) = RT ∫_&#123;P°&#125;^&#123;P&#125; dP/P = RT ln(P/P°)</p>
          </div>
          <Formula label="Pure ideal gas chemical potential">μ(T,P) = μ°(T) + RT ln(P/P°)</Formula>
          <Lens title="Standard chemical potential μ°(T)" tone="cyan">
            μ°(T) is the molar Gibbs energy of the pure ideal gas at temperature T and standard pressure
            P° = 1 bar. It depends only on T — all the pressure dependence is carried by RT ln(P/P°).
          </Lens>
        </Section>

        <Section index="3" title="Ideal-Gas Component in a Mixture"
          subtitle="Each component behaves as an ideal gas at its partial pressure">
          <MuVsMoleFracSVG />
          <p>In an ideal-gas mixture, component i has partial pressure Pᵢ = yᵢP. Each component behaves
            as a pure ideal gas at its own partial pressure:
          </p>
          <Formula label="Mixture component chemical potential">μᵢ(T,P,{"{y}"}) = μ°ᵢ(T) + RT ln(Pᵢ/P°) = μ°ᵢ(T) + RT ln(yᵢP/P°)</Formula>
          <p>This can be split into a pure-gas term and a mixing term:</p>
          <Formula label="Split form">μᵢ = [μ°ᵢ(T) + RT ln(P/P°)] + RT ln yᵢ = μᵢ*(T,P) + RT ln yᵢ</Formula>
          <Lens title="Mixing lowers chemical potential" tone="emerald">
            Since yᵢ &lt; 1 in any mixture, RT ln yᵢ &lt; 0. Every component of an ideal-gas mixture has
            a lower chemical potential than the pure gas at the same T and P. This is the thermodynamic
            basis for spontaneous mixing.
          </Lens>
        </Section>

        <Section index="4" title="Pure Solids and Liquids — Standard State Conventions">
          <p>
            For a pure condensed phase at fixed T, the pressure correction is V_m ΔP. At ordinary
            pressures, this is negligible and μ ≈ μ*(T). The activity of a pure standard solid or liquid
            is defined as 1.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-[700px] border-collapse text-left text-sm">
              <thead className="bg-slate-900">
                <tr>
                  {["Phase", "Standard state", "Activity", "μ form"].map(h => (
                    <th key={h} className="border-b border-white/10 px-4 py-3 font-black text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-slate-950/70">
                {stdStateTable.map(row => (
                  <tr key={row.phase}>
                    <td className="px-4 py-3 text-cyan-200 font-semibold">{row.phase}</td>
                    <td className="px-4 py-3 text-slate-300">{row.standard}</td>
                    <td className="px-4 py-3 font-mono text-slate-200">{row.activity}</td>
                    <td className="px-4 py-3 font-mono text-slate-200">{row.muForm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section index="5" title="Worked Examples">
          <div className="space-y-4">
            {examples.map(ex => (
              <article key={ex.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="font-black text-white">{ex.title}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-200">{ex.given}</p>
                <div className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm leading-6 text-slate-200">{ex.solution}</div>
                <p className="mt-2 text-xs text-amber-300"><span className="font-black">Trap: </span>{ex.trap}</p>
              </article>
            ))}
          </div>
        </Section>

        <ThermodynamicsCompleteDerivations part={27} />

        <section className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.04] p-5 md:p-8">
          <h2 className="text-2xl font-black text-amber-200">Practice Problems</h2>
          <div className="mt-4 space-y-3">
            {[
              ["Write the expression for μ of an ideal gas at T = 298 K and P = 0.50 bar (P° = 1 bar).", "μ = μ°(298) + RT ln(0.50) = μ°(298) − 1.72 kJ mol⁻¹. The gas is at lower pressure than the standard state, so μ < μ°."],
              ["In a binary mixture, μ₁ increases. What does the Gibbs–Duhem relation say about μ₂?", "Σnᵢ dμᵢ = 0 → n₁ dμ₁ + n₂ dμ₂ = 0 → dμ₂ = −(n₁/n₂) dμ₁. If μ₁ increases, μ₂ must decrease. Chemical potentials cannot vary independently."],
              ["For a pure solid, what is its contribution to the equilibrium constant expression?", "Activity of pure solid = 1, so its contribution is 1^ν = 1. Pure solids (and pure liquids) do not appear in equilibrium constant expressions."],
              ["Explain why chemical potential → −∞ as P → 0 for an ideal gas.", "μ = μ° + RT ln(P/P°). As P → 0, ln(P/P°) → −∞. This reflects that an infinitely dilute gas has maximum entropy and minimum order — adding it releases maximum free energy."],
            ].map(([q, a], i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-white"><span className="mr-2 text-amber-300">{i + 1}.</span>{q}</p>
                <div className="mt-2 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm text-slate-200">{a}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">Part 27 Complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">Next: Gibbs energy of mixing and ideal solutions</h2>
        </section>
      </div>
    </main>
  );
}
