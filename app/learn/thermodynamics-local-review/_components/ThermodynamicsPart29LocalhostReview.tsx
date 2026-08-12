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

// SVG 1: G vs reaction coordinate showing minimum at equilibrium
function GvsXiSVG() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 620" role="img" aria-labelledby="p29-gxi-title p29-gxi-desc" className="h-auto w-full">
        <title id="p29-gxi-title">Total Gibbs energy versus extent of reaction showing equilibrium minimum</title>
        <desc id="p29-gxi-desc">
          G decreases when Q &lt; K (forward reaction favoured), passes through a minimum at
          equilibrium where dG/dξ = ΔrG = 0, then increases for Q &gt; K (reverse reaction favoured).
        </desc>
        <defs>
          <linearGradient id="p29gxBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p29axArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
          <marker id="p29fwdArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="p29revArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>
        <rect width="1200" height="620" rx="34" fill="url(#p29gxBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">GIBBS ENERGY VERSUS REACTION EXTENT: EQUILIBRIUM MINIMUM</text>

        <line x1="130" y1="530" x2="1080" y2="530" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p29axArrow)" />
        <line x1="130" y1="530" x2="130" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p29axArrow)" />
        <text x="1095" y="544" fill="#e2e8f0" fontSize="20" fontWeight="900">ξ →</text>
        <text x="80" y="68" fill="#e2e8f0" fontSize="20" fontWeight="900">G</text>
        <text x="130" y="556" fill="#94a3b8" fontSize="18" textAnchor="middle">0 (pure R)</text>
        <text x="1070" y="556" fill="#94a3b8" fontSize="18" textAnchor="middle">1 (pure P)</text>

        {/* G curve: starts high left, dips to minimum, rises right */}
        <path d="M130 300 C220 250 330 195 480 168 C580 150 680 152 800 172 C900 190 1000 240 1070 290"
          fill="none" stroke="#34d399" strokeWidth="5" />

        {/* Equilibrium minimum */}
        <circle cx="590" cy="148" r="14" fill="#fbbf24" />
        <line x1="590" y1="148" x2="590" y2="530" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 8" />
        <text x="590" y="558" fill="#fde68a" fontSize="19" fontWeight="900" textAnchor="middle">ξ_eq (equilibrium)</text>
        <text x="590" y="580" fill="#fde68a" fontSize="17" textAnchor="middle">ΔrG = 0, Q = K</text>

        {/* Forward arrow (Q < K region) */}
        <path d="M300 250 L500 200" stroke="#22d3ee" strokeWidth="4" markerEnd="url(#p29fwdArrow)" />
        <text x="310" y="235" fill="#a5f3fc" fontSize="18" fontWeight="900">Q &lt; K</text>
        <text x="310" y="255" fill="#a5f3fc" fontSize="17">ΔrG &lt; 0 → forward</text>

        {/* Reverse arrow (Q > K region) */}
        <path d="M900 190 L700 175" stroke="#fb7185" strokeWidth="4" markerEnd="url(#p29revArrow)" />
        <text x="850" y="175" fill="#fda4af" fontSize="18" fontWeight="900">Q &gt; K</text>
        <text x="850" y="195" fill="#fda4af" fontSize="17">ΔrG &gt; 0 → reverse</text>

        {/* ΔrG = 0 annotation */}
        <text x="590" y="100" fill="#fbbf24" fontSize="19" fontWeight="900" textAnchor="middle">ΔrG = (∂G/∂ξ)_&#123;T,P&#125; = 0</text>
        <text x="590" y="122" fill="#fbbf24" fontSize="17" textAnchor="middle">G minimum at equilibrium</text>

        <rect x="160" y="578" width="880" height="35" rx="14" fill="#0f172a" />
        <text x="600" y="600" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          ΔrG = ΔrG° + RT ln Q. At equilibrium: ΔrG = 0 → ΔrG° = −RT ln K.
        </text>
      </svg>
    </div>
  );
}

// SVG 2: Q vs K direction indicator
function QvsKSVG() {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 420" role="img" aria-labelledby="p29-qk-title p29-qk-desc" className="h-auto w-full">
        <title id="p29-qk-title">Reaction direction determined by comparing Q with K</title>
        <desc id="p29-qk-desc">
          When Q &lt; K: ΔrG &lt; 0, forward reaction spontaneous.
          When Q = K: ΔrG = 0, equilibrium.
          When Q &gt; K: ΔrG &gt; 0, reverse reaction spontaneous.
        </desc>
        <defs>
          <linearGradient id="p29qkBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p29fArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#22d3ee" />
          </marker>
          <marker id="p29rArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#fb7185" />
          </marker>
        </defs>
        <rect width="1200" height="420" rx="34" fill="url(#p29qkBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">REACTION DIRECTION: COMPARE Q TO K</text>

        {/* Three regions */}
        <rect x="40" y="80" width="330" height="250" rx="24" fill="#0c4a6e" stroke="#22d3ee" strokeWidth="4" />
        <text x="205" y="135" fill="#22d3ee" fontSize="26" fontWeight="900" textAnchor="middle">Q &lt; K</text>
        <text x="205" y="170" fill="#a5f3fc" fontSize="19" textAnchor="middle">ΔrG &lt; 0</text>
        <text x="205" y="200" fill="#a5f3fc" fontSize="19" textAnchor="middle">RT ln(Q/K) &lt; 0</text>
        <path d="M80 275 L330 275" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#p29fArrow)" />
        <text x="205" y="305" fill="#cffafe" fontSize="18" textAnchor="middle">forward reaction</text>
        <text x="205" y="325" fill="#cffafe" fontSize="17" textAnchor="middle">spontaneous</text>

        <rect x="435" y="80" width="330" height="250" rx="24" fill="#022c22" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="135" fill="#34d399" fontSize="26" fontWeight="900" textAnchor="middle">Q = K</text>
        <text x="600" y="170" fill="#a7f3d0" fontSize="19" textAnchor="middle">ΔrG = 0</text>
        <text x="600" y="200" fill="#a7f3d0" fontSize="19" textAnchor="middle">RT ln(Q/K) = 0</text>
        <line x1="480" y1="275" x2="570" y2="275" stroke="#34d399" strokeWidth="4" />
        <line x1="630" y1="275" x2="720" y2="275" stroke="#34d399" strokeWidth="4" />
        <text x="600" y="305" fill="#d1fae5" fontSize="18" textAnchor="middle">equilibrium</text>
        <text x="600" y="325" fill="#d1fae5" fontSize="17" textAnchor="middle">no net reaction</text>

        <rect x="830" y="80" width="330" height="250" rx="24" fill="#450a0a" stroke="#fb7185" strokeWidth="4" />
        <text x="995" y="135" fill="#fb7185" fontSize="26" fontWeight="900" textAnchor="middle">Q &gt; K</text>
        <text x="995" y="170" fill="#fda4af" fontSize="19" textAnchor="middle">ΔrG &gt; 0</text>
        <text x="995" y="200" fill="#fda4af" fontSize="19" textAnchor="middle">RT ln(Q/K) &gt; 0</text>
        <path d="M1160 275 L920 275" stroke="#fb7185" strokeWidth="5" markerEnd="url(#p29rArrow)" />
        <text x="995" y="305" fill="#ffe4e6" fontSize="18" textAnchor="middle">reverse reaction</text>
        <text x="995" y="325" fill="#ffe4e6" fontSize="17" textAnchor="middle">spontaneous</text>

        <rect x="180" y="358" width="840" height="40" rx="16" fill="#0f172a" />
        <text x="600" y="382" fill="#cbd5e1" fontSize="18" textAnchor="middle" fontWeight="700">
          ΔrG = ΔrG° + RT ln Q = RT ln(Q/K)
        </text>
      </svg>
    </div>
  );
}

const examples = [
  {
    title: "Finding K from ΔrG°",
    given: "At 298 K, ΔrG° = −17.1 kJ mol⁻¹ for a reaction. Find K.",
    solution: "ΔrG° = −RT ln K → ln K = −ΔrG°/RT = 17100/(8.314 × 298) = 17100/2478 = 6.908 → K = e^{6.908} = 998 ≈ 1.0 × 10³.",
    trap: "Use R = 8.314 J mol⁻¹ K⁻¹ and ensure ΔrG° is in joules. ΔrG° in kJ must be multiplied by 1000 before dividing by RT.",
  },
  {
    title: "Reaction direction test",
    given: "For a reaction K = 50 at 298 K. At a certain moment Q = 0.020. Determine the direction.",
    solution: "Q/K = 0.020/50 = 4.0 × 10⁻⁴. ΔrG = RT ln(Q/K) = 8.314 × 298 × ln(4.0 × 10⁻⁴) = 2478 × (−7.82) = −19.4 kJ mol⁻¹. Since ΔrG < 0, the forward reaction is spontaneous.",
    trap: "ΔrG tells you direction at the current composition Q; ΔrG° tells you direction only if all species are at standard states (Q = 1).",
  },
  {
    title: "Heterogeneous equilibrium — writing K",
    given: "Write K for CaCO₃(s) ⇌ CaO(s) + CO₂(g).",
    solution: "Activities of pure solids = 1. Only CO₂(g) appears: K = a_{CO₂} = P_{CO₂}/P°. At 298 K, this K is very small (about 10⁻²³); the reaction requires very high temperature to proceed.",
    trap: "NEVER include pure solids or pure liquids in K. Their activities are defined as 1 and contribute a factor of 1^ν = 1.",
  },
  {
    title: "Kp vs Kc conversion",
    given: "At 500 K, Kp = 1.25 × 10⁻² for N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Find Kc.",
    solution: "Δn_g = 2 − (1+3) = −2. Kp = Kc(RT)^{Δn_g} → Kc = Kp/(RT)^{Δn_g} = Kp × (RT)^2. RT = 8.314 × 10⁻³ kJ mol⁻¹ × 500 K = 4.157 kJ mol⁻¹ ≈ 4.157 × 10⁻² bar·L·mol⁻¹ when using appropriate units. Kc = 1.25 × 10⁻² × (0.08314 × 500)² = 1.25 × 10⁻² × 1727 = 21.6 mol⁻² L².",
    trap: "Δn_g counts only gas-phase stoichiometric coefficients. Solids and liquids are excluded.",
  },
];

export default function ThermodynamicsPart29LocalhostReview() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-8">

        <header className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-300">Part 29</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            Reaction Gibbs Energy, Reaction Quotient and Equilibrium Constant
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Complete derivations of ΔrG = ΔrG° + RT ln Q, the equilibrium condition ΔrG = 0 → K = e^&#123;−ΔrG°/RT&#125;,
            and direction tests using Q and K.
          </p>
        </header>

        <Section index="1" title="Reaction Gibbs Energy ΔrG"
          subtitle="Exact derived result: ΔrG = (∂G/∂ξ)_&#123;T,P&#125; — the slope of G vs extent of reaction">
          <GvsXiSVG />
          <p>For a reaction with stoichiometric coefficients νᵢ and extent of reaction ξ (dξ = dnᵢ/νᵢ):</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>At constant T, P: dG = Σᵢ μᵢ dnᵢ = Σᵢ μᵢ νᵢ dξ</p>
            <p>ΔrG = (∂G/∂ξ)_&#123;T,P&#125; = Σᵢ νᵢ μᵢ</p>
          </div>
          <Formula label="Reaction Gibbs energy">ΔrG = Σᵢ νᵢ μᵢ = (∂G/∂ξ)_&#123;T,P&#125;</Formula>
          <Lens title="ΔrG vs ΔG° — critical distinction" tone="rose">
            ΔrG is the slope of G at the current composition — it depends on Q. ΔrG° is the value
            of ΔrG when all species are at their standard states (Q = 1). They are equal only when
            Q = 1, which is rarely the case in a real reaction mixture.
          </Lens>
        </Section>

        <Section index="2" title="Derivation of ΔrG = ΔrG° + RT ln Q">
          <p>Substitute μᵢ = μ°ᵢ + RT ln aᵢ into ΔrG = Σνᵢμᵢ:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>ΔrG = Σᵢ νᵢ(μ°ᵢ + RT ln aᵢ)</p>
            <p>= Σᵢ νᵢ μ°ᵢ + RT Σᵢ νᵢ ln aᵢ</p>
            <p>= ΔrG° + RT Σᵢ ln aᵢ^&#123;νᵢ&#125;</p>
            <p>= ΔrG° + RT ln Πᵢ aᵢ^&#123;νᵢ&#125;</p>
            <p>Define Q = Πᵢ aᵢ^&#123;νᵢ&#125; (reaction quotient)</p>
            <p>Therefore ΔrG = ΔrG° + RT ln Q</p>
          </div>
          <Formula label="Key result — exact derived">ΔrG = ΔrG° + RT ln Q</Formula>
        </Section>

        <Section index="3" title="Equilibrium: ΔrG = 0 → K = e^{−ΔrG°/RT}">
          <p>At equilibrium, G is at its minimum with respect to ξ, so ΔrG = 0 and Q = K:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>0 = ΔrG° + RT ln K</p>
            <p>ΔrG° = −RT ln K</p>
            <p>K = exp(−ΔrG°/RT)</p>
          </div>
          <Formula label="Standard Gibbs energy and equilibrium constant">ΔrG° = −RT ln K</Formula>
          <Formula label="Direction formula">ΔrG = RT ln(Q/K)</Formula>
          <QvsKSVG />
          <Lens title="Standard Gibbs energy does NOT tell you about rates" tone="amber">
            K predicts the equilibrium position, not how fast it is reached. A large negative ΔrG°
            (large K) means the products are thermodynamically strongly favoured at equilibrium, but
            the reaction may be kinetically inert (e.g., diamond to graphite: ΔrG° ≪ 0 but proceeds
            immeasurably slowly at room temperature).
          </Lens>
        </Section>

        <Section index="4" title="Kp, Kc and Kn Relations for Gas-Phase Reactions">
          <p>For ideal-gas reactions, activities aᵢ = Pᵢ/P°. Using Pᵢ = cᵢRT = xᵢP = (nᵢ/n_total)P:</p>
          <Formula label="Kp in terms of Kc">Kp = Kc(RT/c°V°)^&#123;Δng&#125; or Kp = Kc(RT)^&#123;Δng&#125;</Formula>
          <p>where Δng = Σνᵢ (gas-phase products) − Σνᵢ (gas-phase reactants).</p>
          <Lens title="Both Kp and Kc are dimensionless" tone="violet">
            Thermodynamic K is always dimensionless because it uses activities (ratios to standard
            states). The apparent units in textbook Kp and Kc formulas arise from inconsistent
            conventions; the correct thermodynamic K is dimensionless throughout.
          </Lens>
        </Section>

        <Section index="5" title="Worked Examples">
          {examples.map(ex => (
            <article key={ex.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 mb-4">
              <h3 className="font-black text-white">{ex.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-200">{ex.given}</p>
              <div className="mt-3 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm leading-6 text-slate-200">{ex.solution}</div>
              <p className="mt-2 text-xs text-amber-300"><span className="font-black">Trap: </span>{ex.trap}</p>
            </article>
          ))}
        </Section>

        <ThermodynamicsCompleteDerivations part={29} />

        <section className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.04] p-5 md:p-8">
          <h2 className="text-2xl font-black text-amber-200">Practice Problems</h2>
          <div className="mt-4 space-y-3">
            {[
              ["At 700 K, K = 54.3 for H₂(g) + I₂(g) ⇌ 2HI(g). Find ΔrG°.", "ΔrG° = −RT ln K = −8.314 × 700 × ln 54.3 = −5820 × 3.994 = −23.2 kJ mol⁻¹."],
              ["For the above reaction at Q = 200, find ΔrG and state the direction.", "ΔrG = RT ln(Q/K) = 8.314 × 700 × ln(200/54.3) = 5820 × 1.302 = 7580 J ≈ +7.6 kJ mol⁻¹. ΔrG > 0 → reverse reaction favoured (HI decomposition)."],
              ["Write the K expression for: Fe₂O₃(s) + 3CO(g) ⇌ 2Fe(s) + 3CO₂(g).", "Pure solids have activity 1: K = a_{CO₂}³/a_{CO}³ = (P_{CO₂}/P°)³ / (P_{CO}/P°)³ = (P_{CO₂}/P_{CO})³."],
              ["ΔrG° = +20 kJ mol⁻¹ at 298 K. Find K. Is the reaction feasible?", "K = exp(−20000/8.314×298) = exp(−8.07) = 3.1 × 10⁻⁴. K ≪ 1 means products are not favoured at standard conditions. The reaction is thermodynamically unfeasible under standard conditions."],
            ].map(([q, a], i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-white"><span className="mr-2 text-amber-300">{i+1}.</span>{q}</p>
                <div className="mt-2 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm text-slate-200">{a}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">Part 29 Complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">Next: van&apos;t Hoff equation and Clapeyron equation</h2>
        </section>
      </div>
    </main>
  );
}
