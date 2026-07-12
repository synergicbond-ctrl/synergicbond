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

// SVG: ΔG_mix vs mole fraction — symmetric parabola-like shape
function MixingGibbsSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 620" role="img" aria-labelledby="p28-mix-title p28-mix-desc" className="h-auto w-full overflow-visible rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-2 sm:p-3 shadow-[0_24px_90px_-42px_rgba(34,211,238,0.75)] transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/35 hover:shadow-[0_28px_100px_-42px_rgba(34,211,238,0.9)]" focusable="false" preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
        <title id="p28-mix-title">Gibbs energy of ideal mixing versus mole fraction</title>
        <desc id="p28-mix-desc">
          ΔG_mix = RT(x₁ ln x₁ + x₂ ln x₂) is always negative for any genuine mixture.
          The minimum occurs near x = 0.5. Entropy of mixing drives the process spontaneously.
        </desc>
        <defs>
          <linearGradient id="p28mixBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p28axArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="620" rx="34" fill="url(#p28mixBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">GIBBS ENERGY OF IDEAL MIXING: ΔG_mix = RT Σxᵢ ln xᵢ &lt; 0</text>

        {/* Axes */}
        <line x1="130" y1="430" x2="1080" y2="430" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p28axArrow)" />
        <line x1="130" y1="430" x2="130" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p28axArrow)" />
        <text x="1095" y="444" fill="#e2e8f0" fontSize="18" fontWeight="900">x₂ →</text>
        <text x="60" y="80" fill="#e2e8f0" fontSize="16" textAnchor="middle">ΔG_mix</text>
        <text x="130" y="448" fill="#94a3b8" fontSize="15" textAnchor="middle">0</text>
        <text x="1070" y="448" fill="#94a3b8" fontSize="15" textAnchor="middle">1</text>
        {/* Zero line */}
        <line x1="130" y1="430" x2="1070" y2="430" stroke="#334155" strokeWidth="2" strokeDasharray="14 10" />
        <text x="1090" y="430" fill="#475569" fontSize="14">ΔG=0</text>

        {/* Mixing curve: negative parabola shape RT(x ln x + (1-x)ln(1-x)) */}
        <path d="M130 430 C180 415 260 360 380 290 C500 225 600 200 700 225 C800 250 900 305 990 385 C1020 405 1050 425 1070 430"
          fill="none" stroke="#34d399" strokeWidth="10" />
        <path d="M130 430 L1070 430" fill="none" stroke="#475569" strokeWidth="3" strokeDasharray="12 8" />

        {/* ΔG_mix shaded area */}
        <path d="M130 430 C180 415 260 360 380 290 C500 225 600 200 700 225 C800 250 900 305 990 385 C1020 405 1050 425 1070 430 L1070 430 L130 430 Z"
          fill="#34d399" fillOpacity="0.12" />

        {/* Minimum at x≈0.5 */}
        <circle cx="600" cy="200" r="13" fill="#fbbf24" />
        <line x1="600" y1="200" x2="600" y2="430" stroke="#fbbf24" strokeWidth="3" strokeDasharray="12 8" />
        <text x="600" y="460" fill="#fde68a" fontSize="17" fontWeight="900" textAnchor="middle">x₂ = 0.5</text>
        <text x="600" y="482" fill="#fde68a" fontSize="13" textAnchor="middle">ΔG_mix,min = −RT ln 2 per mole</text>

        {/* Labels */}
        <text x="480" y="185" fill="#a7f3d0" fontSize="17" fontWeight="900">ΔG_mix &lt; 0 (always)</text>
        <text x="480" y="208" fill="#6ee7b7" fontSize="13">mixing is spontaneous</text>

        {/* ΔH_mix = 0 label */}
        <rect x="200" y="520" width="800" height="40" rx="16" fill="#0f172a" />
        <text x="600" y="544" fill="#cbd5e1" fontSize="14" textAnchor="middle">
          Ideal mixing: ΔH_mix = 0. All spontaneity comes from ΔS_mix = −R Σxᵢ ln xᵢ &gt; 0.
        </text>
      </svg>
    </div>
  );
}

// SVG 2: Raoult's law vapour pressure diagram
function RaoultSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 560" role="img" aria-labelledby="p28-raoult-title p28-raoult-desc" className="h-auto w-full overflow-visible rounded-2xl border border-cyan-300/20 bg-slate-950/80 p-2 sm:p-3 shadow-[0_24px_90px_-42px_rgba(34,211,238,0.75)] transition-[border-color,box-shadow] duration-300 hover:border-cyan-300/35 hover:shadow-[0_28px_100px_-42px_rgba(34,211,238,0.9)]" focusable="false" preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
        <title id="p28-raoult-title">Raoult&apos;s law: partial and total vapour pressure versus liquid mole fraction</title>
        <desc id="p28-raoult-desc">
          For ideal solution, P_A = x_A P*_A (linear) and P_B = x_B P*_B (linear). Total pressure P
          is the sum and lies between P*_A and P*_B.
        </desc>
        <defs>
          <linearGradient id="p28raBg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#0f172a" /><stop offset="1" stopColor="#020617" />
          </linearGradient>
          <marker id="p28raArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 Z" fill="#e2e8f0" />
          </marker>
        </defs>
        <rect width="1200" height="560" rx="34" fill="url(#p28raBg)" />
        <text x="600" y="46" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">RAOULT&apos;S LAW VAPOUR PRESSURE DIAGRAM</text>

        <line x1="130" y1="420" x2="1080" y2="420" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p28raArrow)" />
        <line x1="130" y1="420" x2="130" y2="80" stroke="#e2e8f0" strokeWidth="4" markerEnd="url(#p28raArrow)" />
        <text x="1095" y="434" fill="#e2e8f0" fontSize="18">x_A →</text>
        <text x="85" y="68" fill="#e2e8f0" fontSize="18">P / bar</text>
        <text x="130" y="440" fill="#94a3b8" fontSize="14" textAnchor="middle">0</text>
        <text x="1070" y="440" fill="#94a3b8" fontSize="14" textAnchor="middle">1</text>

        {/* P*_A at xA=1 */}
        <line x1="1070" y1="420" x2="1070" y2="140" stroke="#22d3ee" strokeWidth="3" strokeDasharray="12 8" />
        <text x="1085" y="138" fill="#a5f3fc" fontSize="15" fontWeight="900">P*_A</text>
        {/* P*_B at xA=0 */}
        <line x1="130" y1="420" x2="130" y2="240" stroke="#a78bfa" strokeWidth="3" strokeDasharray="12 8" />
        <text x="90" y="238" fill="#c4b5fd" fontSize="15" fontWeight="900">P*_B</text>

        {/* P_A line: from 0 at xA=0 to P*_A at xA=1 */}
        <line x1="130" y1="420" x2="1070" y2="140" stroke="#22d3ee" strokeWidth="8" />
        <text x="750" y="210" fill="#a5f3fc" fontSize="16" fontWeight="900">P_A = x_A P*_A</text>

        {/* P_B line: from P*_B at xA=0 to 0 at xA=1 */}
        <line x1="130" y1="240" x2="1070" y2="420" stroke="#a78bfa" strokeWidth="8" />
        <text x="280" y="320" fill="#c4b5fd" fontSize="16" fontWeight="900">P_B = (1−x_A) P*_B</text>

        {/* Total pressure P = P_A + P_B */}
        <line x1="130" y1="240" x2="1070" y2="140" stroke="#34d399" strokeWidth="9" />
        <text x="580" y="158" fill="#a7f3d0" fontSize="16" fontWeight="900">P_total = P_A + P_B</text>

        <rect x="150" y="470" width="900" height="60" rx="16" fill="#0f172a" />
        <text x="600" y="495" fill="#cbd5e1" fontSize="14" textAnchor="middle">Raoult: Pᵢ = xᵢ P*ᵢ. Total P varies linearly between P*_B (xA=0) and P*_A (xA=1).</text>
        <text x="600" y="516" fill="#94a3b8" fontSize="13" textAnchor="middle">Vapour mole fraction: yA = PA/P = xA P*A / P. Vapour is richer in the more volatile component.</text>
      </svg>
    </div>
  );
}

const examples = [
  {
    title: "Gibbs energy of mixing for equimolar binary mixture",
    given: "Calculate ΔG_mix when 1 mol A and 1 mol B (both ideal gases) are mixed at 298 K and 1 bar.",
    solution: "n_total = 2 mol, x_A = x_B = 0.5. ΔG_mix = RT Σnᵢ ln xᵢ = RT(1 × ln 0.5 + 1 × ln 0.5) = 2RT ln 0.5 = 2 × 8.314 × 298 × (−0.693) = −3.43 kJ. Mixing is spontaneous.",
    trap: "ΔG_mix uses mole fractions (dimensionless), not pressures. The formula ΔG_mix = RT Σnᵢ ln yᵢ applies here because yᵢ = xᵢ for ideal-gas mixing at the same total pressure.",
  },
  {
    title: "Entropy and enthalpy of ideal mixing",
    given: "For the above equimolar mixture, find ΔH_mix and ΔS_mix.",
    solution: "For ideal mixing: ΔH_mix = 0 (no enthalpy of mixing by definition). ΔS_mix = −ΔG_mix/T = 3430/298 = 11.5 J mol_mixture⁻¹ K⁻¹. Alternatively: ΔS_mix = −R Σnᵢ ln xᵢ = −8.314(ln 0.5 + ln 0.5) = 2R ln 2 = 11.5 J K⁻¹.",
    trap: "ΔH_mix = 0 is the defining feature of an ideal solution or ideal-gas mixture. Real solutions deviate because of different intermolecular interactions.",
  },
  {
    title: "Raoult's law vapour pressure",
    given: "A solution contains x_A = 0.30 of component A (P*_A = 200 mmHg) and x_B = 0.70 of B (P*_B = 80 mmHg). Find the total vapour pressure and vapour-phase composition.",
    solution: "P_A = 0.30 × 200 = 60 mmHg. P_B = 0.70 × 80 = 56 mmHg. P_total = 116 mmHg. Vapour: y_A = 60/116 = 0.517; y_B = 56/116 = 0.483. Vapour is richer in A (the more volatile component) than the liquid.",
    trap: "Raoult uses liquid mole fractions (x) to find partial pressures, then vapour mole fractions (y) are P_i/P_total. Confusing x and y is the most common error in vapour-liquid equilibrium calculations.",
  },
];

export default function ThermodynamicsPart28LocalhostReview() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 md:px-8">

        <header className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-fuchsia-300">Part 28</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            Partial Molar Gibbs Energy, Ideal-Gas Mixtures and Entropy of Mixing
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Derivation of ΔG_mix and ΔS_mix for ideal-gas mixing, Raoult&apos;s law from chemical-potential
            equality, and the Gibbs–Duhem relation.
          </p>
        </header>

        <Section index="1" title="Gibbs Energy of Ideal Mixing"
          subtitle="Exact derived result: ΔG_mix = RT Σnᵢ ln yᵢ — always negative for genuine mixing">
          <p>Compare the total G before mixing (each component pure at T,P) with G after mixing at the same T and total P.</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>Before mixing: Gᵢ(pure) at T, P: μᵢ(pure) = μ°ᵢ + RT ln(P/P°)</p>
            <p>After mixing: μᵢ(mix) = μ°ᵢ + RT ln(yᵢP/P°)</p>
            <p>Difference per mole of i: Δμᵢ = RT ln yᵢ</p>
            <p>Total mixing Gibbs energy: ΔG_mix = Σᵢ nᵢ Δμᵢ = RT Σᵢ nᵢ ln yᵢ</p>
          </div>
          <Formula label="Gibbs energy of ideal mixing">ΔG_mix = RT Σᵢ nᵢ ln yᵢ &lt; 0</Formula>
          <MixingGibbsSVG />
        </Section>

        <Section index="2" title="Entropy and Enthalpy of Ideal Mixing">
          <p>Since ΔH_mix = 0 for ideal mixing by definition (no interactions between different species):</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>ΔG_mix = ΔH_mix − T ΔS_mix</p>
            <p>ΔH_mix = 0 (ideal mixing)</p>
            <p>Therefore: ΔS_mix = −ΔG_mix/T = −R Σᵢ nᵢ ln yᵢ &gt; 0</p>
          </div>
          <Formula label="Entropy of ideal mixing">ΔS_mix = −R Σᵢ nᵢ ln yᵢ = −nR Σᵢ xᵢ ln xᵢ &gt; 0</Formula>
          <Lens title="Ideal mixing is purely entropy-driven" tone="emerald">
            ΔH_mix = 0 and ΔV_mix = 0 for ideal mixing. The negative ΔG_mix arises entirely from
            the positive configurational entropy of mixing. In real solutions, ΔH_mix ≠ 0 (positive
            for unfavourable A–B contacts, negative for favourable ones).
          </Lens>
        </Section>

        <Section index="3" title="Raoult's Law from Chemical-Potential Equality"
          subtitle="Phase equilibrium condition μ(liquid) = μ(vapour) at each composition">
          <RaoultSVG />
          <p>At liquid–vapour equilibrium for component i:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>Ideal liquid: μᵢ(l) = μ*ᵢ(l) + RT ln xᵢ</p>
            <p>Ideal vapour: μᵢ(g) = μ°ᵢ(g) + RT ln(Pᵢ/P°)</p>
            <p>Pure component at T: μ*ᵢ(l) = μ°ᵢ(g) + RT ln(P*ᵢ/P°)</p>
            <p>Subtract the pure equation from the mixture equation:</p>
            <p>RT ln xᵢ = RT ln(Pᵢ/P*ᵢ)</p>
            <p>Therefore: Pᵢ = xᵢ P*ᵢ</p>
          </div>
          <Formula label="Raoult's law">Pᵢ = xᵢ P*ᵢ</Formula>
          <Lens title="Physical basis of Raoult's law" tone="violet">
            The entropy lowering of the liquid chemical potential (RT ln xᵢ term) reduces the
            tendency to vaporise in proportion to the mole fraction. A solution with x_A = 0.3
            has 70% of its surface sites occupied by B molecules, reducing A&apos;s escaping tendency
            to 30% of the pure value.
          </Lens>
        </Section>

        <Section index="4" title="Gibbs–Duhem Relation">
          <p>Differentiating Euler&apos;s relation G = Σnᵢ μᵢ at constant T and P:</p>
          <div className="space-y-1 rounded-2xl border border-white/10 bg-slate-900/60 p-4 font-mono text-sm">
            <p>dG = Σμᵢ dnᵢ + Σnᵢ dμᵢ</p>
            <p>But dG = Σμᵢ dnᵢ (at constant T,P from fundamental relation)</p>
            <p>Subtract: Σnᵢ dμᵢ = 0 at constant T, P</p>
          </div>
          <Formula label="Gibbs–Duhem relation">Σᵢ nᵢ dμᵢ = 0  or  Σᵢ xᵢ dμᵢ = 0  (at constant T, P)</Formula>
          <Lens title="Significance" tone="amber">
            Chemical potentials are not independent. In a binary system, if μ₁ is measured as a
            function of composition, μ₂ is fully determined. This is the thermodynamic basis for
            activity coefficient corrections in real solutions.
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

        <ThermodynamicsCompleteDerivations part={28} />

        <section className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.04] p-5 md:p-8">
          <h2 className="text-2xl font-black text-amber-200">Practice Problems</h2>
          <div className="mt-4 space-y-3">
            {[
              ["Mix 3 mol A and 1 mol B ideally at 400 K. Find ΔG_mix.", "x_A=0.75, x_B=0.25. ΔG_mix = 8.314×400×(3ln0.75+1ln0.25) = 3326×(3×(−0.2877)+1×(−1.386)) = 3326×(−0.8631−1.386) = 3326×(−2.249) = −7479 J = −7.48 kJ."],
              ["For an ideal mixture with x_A = x_B = 0.5, show ΔS_mix = nR ln 2.", "ΔS_mix = −nR Σxᵢ ln xᵢ = −nR(0.5 ln 0.5 + 0.5 ln 0.5) = −nR × 2(0.5)(−ln2) = nR ln 2 ✓"],
              ["State Raoult's law and identify the condition for its validity.", "Raoult: Pᵢ = xᵢ P*ᵢ. Valid for: (1) liquid solution is ideal (molecules A and B have similar sizes and intermolecular forces); (2) vapour behaves as an ideal gas."],
              ["In a binary mixture at constant T,P, if dμ₁ = +2 J mol⁻¹ and n₁/n₂ = 3, find dμ₂.", "Gibbs–Duhem: n₁ dμ₁ + n₂ dμ₂ = 0 → dμ₂ = −(n₁/n₂) dμ₁ = −3 × (+2) = −6 J mol⁻¹."],
            ].map(([q, a], i) => (
              <article key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="font-semibold text-white"><span className="mr-2 text-amber-300">{i+1}.</span>{q}</p>
                <div className="mt-2 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-sm text-slate-200">{a}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">Part 28 Complete</p>
          <h2 className="mt-2 text-2xl font-black text-white">Next: Reaction Gibbs energy and equilibrium constant</h2>
        </section>
      </div>
    </main>
  );
}
