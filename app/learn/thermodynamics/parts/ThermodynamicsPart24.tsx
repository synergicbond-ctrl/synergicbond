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
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${toneMap[tone]}`}>{children}</span>;
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
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl md:p-8">
      <div className="flex gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">
          {index}
        </span>
        <div>
          <h2 className="text-2xl font-black text-white md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-200">{children}</div>
    </section>
  );
}

function Formula({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-black/30 p-4 text-center">
      {label ? <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{label}</p> : null}
      <div className="whitespace-nowrap font-mono text-lg font-black text-white md:text-xl">{children}</div>
    </div>
  );
}

function Lens({
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

function FreeEnergyMapSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 780" role="img" aria-labelledby="fe-title fe-desc" className="h-auto w-full">
        <title id="fe-title">Map connecting entropy criteria to Helmholtz and Gibbs free energies</title>
        <desc id="fe-desc">
          Isolated-system entropy criteria transform into Helmholtz energy at constant temperature and volume,
          and Gibbs energy at constant temperature and pressure.
        </desc>
        <rect width="1200" height="780" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="24" fontWeight="900" textAnchor="middle">
          FREE ENERGY PACKAGES THE UNIVERSE TEST INTO A SYSTEM-ONLY CRITERION
        </text>

        <rect x="70" y="145" width="310" height="220" rx="30" fill="#0f172a" stroke="#a78bfa" strokeWidth="7" />
        <text x="225" y="200" fill="#ddd6fe" fontSize="25" fontWeight="900" textAnchor="middle">ISOLATED UNIVERSE</text>
        <text x="225" y="270" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">ΔS<tspan baselineShift="sub">univ</tspan> ≥ 0</text>
        <text x="225" y="320" fill="#cbd5e1" fontSize="17" textAnchor="middle">universal direction criterion</text>

        <rect x="445" y="145" width="310" height="220" rx="30" fill="#0f172a" stroke="#22d3ee" strokeWidth="7" />
        <text x="600" y="200" fill="#a5f3fc" fontSize="25" fontWeight="900" textAnchor="middle">CONSTANT T, V</text>
        <text x="600" y="270" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">ΔA ≤ 0</text>
        <text x="600" y="320" fill="#cbd5e1" fontSize="17" textAnchor="middle">Helmholtz criterion</text>

        <rect x="820" y="145" width="310" height="220" rx="30" fill="#0f172a" stroke="#34d399" strokeWidth="7" />
        <text x="975" y="200" fill="#a7f3d0" fontSize="25" fontWeight="900" textAnchor="middle">CONSTANT T, P</text>
        <text x="975" y="270" fill="#f8fafc" fontSize="28" fontWeight="900" textAnchor="middle">ΔG ≤ 0</text>
        <text x="975" y="320" fill="#cbd5e1" fontSize="17" textAnchor="middle">Gibbs criterion</text>

        <path d="M385 255 H435" stroke="#fbbf24" strokeWidth="5" />
        <polygon points="435,255 408,238 408,272" fill="#fbbf24" />
        <path d="M765 255 H815" stroke="#fbbf24" strokeWidth="5" />
        <polygon points="815,255 788,238 788,272" fill="#fbbf24" />

        <rect x="145" y="470" width="910" height="190" rx="32" fill="#0f172a" stroke="#f472b6" strokeWidth="6" />
        <text x="600" y="515" fill="#f9a8d4" fontSize="23" fontWeight="900" textAnchor="middle">EQUILIBRIUM MINIMA</text>
        <text x="365" y="575" fill="#a5f3fc" fontSize="23" fontWeight="900" textAnchor="middle">T,V fixed: A is minimum</text>
        <text x="835" y="575" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">T,P fixed: G is minimum</text>
        <text x="600" y="625" fill="#cbd5e1" fontSize="18" textAnchor="middle">
          Reversible infinitesimal change: dA = 0 or dG = 0
        </text>

        <rect x="285" y="700" width="630" height="44" rx="20" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" />
        <text x="600" y="729" fill="#fde68a" fontSize="19" fontWeight="900" textAnchor="middle">
          Spontaneous change lowers the appropriate free-energy function.
        </text>
      </svg>
    </div>
  );
}

function WorkExtractionSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 760" role="img" aria-labelledby="work-title work-desc" className="h-auto w-full">
        <title id="work-title">Maximum useful work from Helmholtz and Gibbs energy decreases</title>
        <desc id="work-desc">
          Helmholtz energy decrease gives maximum total work at constant temperature and volume;
          Gibbs energy decrease gives maximum non-expansion work at constant temperature and pressure.
        </desc>
        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">
          FREE-ENERGY DECREASE MEASURES REVERSIBLY EXTRACTABLE WORK
        </text>

        <rect x="70" y="145" width="470" height="410" rx="34" fill="#0f172a" stroke="#22d3ee" strokeWidth="8" />
        <text x="305" y="205" fill="#a5f3fc" fontSize="26" fontWeight="900" textAnchor="middle">HELMHOLTZ ENERGY</text>
        <text x="305" y="255" fill="#f8fafc" fontSize="27" fontWeight="900" textAnchor="middle">A = U − TS</text>
        <rect x="145" y="320" width="320" height="95" rx="25" fill="#164e63" stroke="#67e8f9" strokeWidth="4" />
        <text x="305" y="358" fill="#a5f3fc" fontSize="19" fontWeight="900" textAnchor="middle">constant T and V</text>
        <text x="305" y="393" fill="#f8fafc" fontSize="21" fontWeight="900" textAnchor="middle">w<tspan baselineShift="sub">max,by</tspan> = −ΔA</text>
        <text x="305" y="485" fill="#cbd5e1" fontSize="17" textAnchor="middle">no PV boundary displacement</text>

        <rect x="660" y="145" width="470" height="410" rx="34" fill="#0f172a" stroke="#34d399" strokeWidth="8" />
        <text x="895" y="205" fill="#a7f3d0" fontSize="26" fontWeight="900" textAnchor="middle">GIBBS ENERGY</text>
        <text x="895" y="255" fill="#f8fafc" fontSize="27" fontWeight="900" textAnchor="middle">G = H − TS</text>
        <rect x="735" y="320" width="320" height="95" rx="25" fill="#052e16" stroke="#34d399" strokeWidth="4" />
        <text x="895" y="358" fill="#a7f3d0" fontSize="19" fontWeight="900" textAnchor="middle">constant T and P</text>
        <text x="895" y="393" fill="#f8fafc" fontSize="21" fontWeight="900" textAnchor="middle">w<tspan baselineShift="sub">non-PV,max,by</tspan> = −ΔG</text>
        <text x="895" y="485" fill="#cbd5e1" fontSize="17" textAnchor="middle">PV work already absorbed into H</text>

        <rect x="225" y="625" width="750" height="60" rx="24" fill="#0f172a" stroke="#fbbf24" strokeWidth="5" />
        <text x="600" y="663" fill="#fde68a" fontSize="21" fontWeight="900" textAnchor="middle">
          Equality requires a reversible process; irreversibility destroys work potential.
        </text>
      </svg>
    </div>
  );
}

function FreeEnergyDerivationTable() {
  const rows = [
    ["Helmholtz definition", "A = U − TS", "natural variables T,V"],
    ["Helmholtz differential", "dA = −S dT − P dV", "simple closed fixed-composition system"],
    ["At constant T,V", "dA ≤ 0", "spontaneous decrease; equality at equilibrium"],
    ["Gibbs definition", "G = H − TS = U + PV − TS", "natural variables T,P"],
    ["Gibbs differential", "dG = V dP − S dT", "simple closed fixed-composition system"],
    ["At constant T,P", "dG ≤ 0", "spontaneous decrease; equality at equilibrium"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Item</th>
            <th className="px-4 py-3 font-black text-white">Expression</th>
            <th className="px-4 py-3 font-black text-white">Meaning</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([item, expression, meaning]) => (
            <tr key={item}>
              <td className="px-4 py-3 font-semibold text-slate-100">{item}</td>
              <td className="px-4 py-3 font-mono text-cyan-200">{expression}</td>
              <td className="px-4 py-3 text-slate-300">{meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SignCriteriaTable() {
  const rows = [
    ["Spontaneous at fixed T,V", "ΔA < 0", "A decreases"],
    ["Equilibrium at fixed T,V", "ΔA = 0", "A is locally minimum"],
    ["Non-spontaneous forward at fixed T,V", "ΔA > 0", "reverse direction is favoured"],
    ["Spontaneous at fixed T,P", "ΔG < 0", "G decreases"],
    ["Equilibrium at fixed T,P", "ΔG = 0", "G is locally minimum"],
    ["Non-spontaneous forward at fixed T,P", "ΔG > 0", "reverse direction is favoured"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-black text-white">Condition</th>
            <th className="px-4 py-3 font-black text-white">Criterion</th>
            <th className="px-4 py-3 font-black text-white">Interpretation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 bg-slate-950/70">
          {rows.map(([condition, criterion, interpretation]) => (
            <tr key={condition}>
              <td className="px-4 py-3 font-semibold text-slate-100">{condition}</td>
              <td className="px-4 py-3 font-mono text-emerald-300">{criterion}</td>
              <td className="px-4 py-3 text-slate-300">{interpretation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const worked = [
  {
    title: "Helmholtz criterion",
    question:
      "A closed system at constant temperature and volume changes from A1 = 18.0 kJ to A2 = 12.5 kJ. Classify the change and find the maximum work obtainable from the system.",
    solution:
      "ΔA = 12.5−18.0 = −5.5 kJ. The change is spontaneous. For a reversible process, the maximum work done by the system is −ΔA = 5.5 kJ.",
  },
  {
    title: "Gibbs criterion",
    question:
      "At constant temperature and pressure, a reaction has ΔH = −40.0 kJ mol⁻¹ and ΔS = −80.0 J mol⁻¹ K⁻¹ at 298 K. Find ΔG.",
    solution:
      "ΔG = −40.0 − 298(−0.0800) = −16.16 kJ mol⁻¹. The forward reaction is spontaneous at 298 K.",
  },
  {
    title: "Universe connection",
    question:
      "A process at constant T = 300 K and P has ΔG = −9.00 kJ mol⁻¹. Find ΔSuniverse.",
    solution:
      "ΔG = −TΔSuniverse, so ΔSuniverse = 9000/300 = 30.0 J mol⁻¹ K⁻¹.",
  },
  {
    title: "Maximum non-PV work",
    question:
      "A reversible electrochemical process at constant T,P has ΔG = −125 kJ mol⁻¹. What maximum non-expansion work can be delivered?",
    solution:
      "w_non-PV,max,by = −ΔG = 125 kJ mol⁻¹.",
  },
];

const problems = [
  ["Natural variables","What are the natural variables of A and G?","A=A(T,V); G=G(T,P) for a simple closed fixed-composition system."],
  ["Differential of A","Derive dA from A=U−TS.","dA=dU−TdS−SdT. With dU=TdS−PdV, dA=−SdT−PdV."],
  ["Differential of G","Derive dG from G=H−TS.","dG=dH−TdS−SdT. With dH=TdS+VdP, dG=VdP−SdT."],
  ["Equilibrium minimum","Why is ΔG=0 not enough to prove stable equilibrium?","A stationary point must also be a local minimum under the allowed constraints."],
  ["Irreversibility","Why is actual useful work less than −ΔG?","Entropy generation destroys work potential; equality is reached only reversibly."],
  ["Constant-volume chemistry","Which free energy is relevant in a rigid isothermal vessel?","Helmholtz energy A."],
  ["Constant-pressure chemistry","Which free energy is relevant for most laboratory reactions open to atmospheric pressure?","Gibbs energy G."],
  ["State-function status","Are A and G path functions?","No. Both are state functions because they are combinations of state functions."],
  ["Extensivity","Are A and G extensive?","Yes, for ordinary homogeneous systems they scale with system size."],
  ["Spontaneity versus rate","Does ΔG<0 imply a fast reaction?","No. It predicts direction, not kinetic speed."],
  ["PV-work caveat","Why does −ΔG represent non-PV work rather than total work at constant pressure?","The PV expansion contribution is already included in enthalpy H=U+PV."],
  ["Ideal-gas isothermal","For one mole of ideal gas expanding isothermally from P₁ to P₂, what is ΔG?","ΔG=RTln(P₂/P₁)."],
];

export default function ThermodynamicsPart24() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.16),transparent_30%)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="flex flex-wrap gap-2">
            <Chip>SYNERGIC BOND MASTER NOTES</Chip>
            <Chip tone="violet">COMPLETE THEORY</Chip>
            <Chip tone="emerald">HELMHOLTZ & GIBBS ENERGY</Chip>
          </div>
          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Free energy converts the universe’s entropy test into a system-only criterion
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Helmholtz energy governs constant-temperature, constant-volume change. Gibbs energy governs
            constant-temperature, constant-pressure change and measures the maximum reversible non-expansion work.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-10 md:px-8">
        <Section index="01" title="Why free-energy functions are introduced">
          <p>
            Entropy of the universe is the universal spontaneity criterion, but calculating the surroundings
            explicitly may be inconvenient. Free-energy functions absorb the surroundings contribution under
            specified constraints, allowing direction to be decided from system properties alone.
          </p>
          <FreeEnergyMapSVG />
          <Lens title="Constraint gate" tone="amber">
            A free-energy criterion is valid only when its stated constraints are satisfied.
            Using {String.raw`\(\Delta G\)`} for a rigid constant-volume process or {String.raw`\(\Delta A\)`} for an unrestricted
            constant-pressure process is conceptually wrong.
          </Lens>
        </Section>

        <Section index="02" title="Helmholtz free energy">
          <Formula label="Definition">A = U − TS</Formula>
          <Formula label="Differential">dA = dU − T dS − S dT</Formula>
          <Formula label="Fundamental substitution">dU = T dS − P dV</Formula>
          <Formula label="Result">dA = −S dT − P dV</Formula>
          <Lens title="Name and symbol" tone="violet">
            The chapter notes that {String.raw`\(A\)`} comes from the German word <em>Arbeit</em>, meaning work.
            Many books also use {String.raw`\(F\)`} for Helmholtz energy.
          </Lens>
          <Lens title="Properties" tone="cyan">
            {String.raw`\(A\)`} is a state function, extensive, and has the dimensions of energy.
          </Lens>
        </Section>

        <Section index="03" title="Helmholtz spontaneity and equilibrium at constant T,V">
          <Formula label="Clausius inequality at constant T,V">dA ≤ 0</Formula>
          <Formula label="Spontaneous">ΔA &lt; 0</Formula>
          <Formula label="Equilibrium">ΔA = 0</Formula>
          <Formula label="Stable equilibrium">A is minimum under the allowed constraints</Formula>
          <Lens title="Reversible versus irreversible" tone="rose">
            A reversible infinitesimal change at equilibrium gives {String.raw`\(dA=0\)`}. An irreversible spontaneous change gives {String.raw`\(dA<0\)`}.
          </Lens>
        </Section>

        <Section index="04" title="Helmholtz energy and maximum work">
          <WorkExtractionSVG />
          <Formula label="Constant T,V reversible process">w<sub>max,by</sub> = −ΔA</Formula>
          <Lens title="Sign convention" tone="amber">
            With chemistry convention, work done on the system is positive. Therefore the maximum work done by
            the system is the positive quantity {String.raw`\(-\Delta A\)`} when {String.raw`\(\Delta A<0\)`}.
          </Lens>
        </Section>

        <Section index="05" title="Gibbs free energy">
          <Formula label="Definition">G = H − TS = U + PV − TS</Formula>
          <Formula label="Differential">dG = dH − T dS − S dT</Formula>
          <Formula label="For a simple closed system">dH = T dS + V dP</Formula>
          <Formula label="Result">dG = V dP − S dT</Formula>
          <Lens title="Properties" tone="emerald">
            {String.raw`\(G\)`} is a state function, extensive, and has the dimensions of energy.
          </Lens>
        </Section>

        <Section index="06" title="Gibbs spontaneity and equilibrium at constant T,P">
          <Formula label="Constant T,P criterion">dG ≤ 0</Formula>
          <Formula label="Spontaneous">ΔG &lt; 0</Formula>
          <Formula label="Equilibrium">ΔG = 0</Formula>
          <Formula label="Stable equilibrium">G is minimum under the allowed constraints</Formula>
          <SignCriteriaTable />
        </Section>

        <Section index="07" title="Gibbs energy and entropy of the universe">
          <Formula label="At constant T,P">ΔG<sub>sys</sub> = −TΔS<sub>universe</sub></Formula>
          <Formula label="Spontaneous">ΔS<sub>univ</sub>&gt;0 ⇔ ΔG<sub>sys</sub>&lt;0</Formula>
          <Formula label="Equilibrium">ΔS<sub>univ</sub>=0 ⇔ ΔG<sub>sys</sub>=0</Formula>
          <Lens title="Why this is powerful" tone="cyan">
            The Gibbs criterion uses only system quantities, while remaining exactly equivalent to the universe
            entropy criterion under constant temperature and pressure.
          </Lens>
        </Section>

        <Section index="08" title="Gibbs energy and non-PV work">
          <Formula label="Reversible constant T,P process">w<sub>non-PV,max,by</sub> = −ΔG</Formula>
          <Lens title="Examples of non-PV work" tone="violet">
            Electrical work, surface work, magnetic work, and elastic work can all contribute.
          </Lens>
          <Lens title="Available energy" tone="amber">
            The decrease in Gibbs energy is the maximum reversible non-expansion work available from the process.
            Irreversibility makes the actual useful work smaller.
          </Lens>
        </Section>

        <Section index="09" title="Fundamental free-energy matrix">
          <FreeEnergyDerivationTable />
        </Section>

        <Section index="10" title="Original worked examples">
          <div className="grid gap-4 lg:grid-cols-2">
            {worked.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="cursor-pointer font-black text-white">{item.title}</h3>
                <p className="mt-3 text-slate-200">{item.question}</p>
                <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4 text-sm text-slate-200">
                  {item.solution}
                </div>
              </article>
            ))}
          </div>
        </Section>


        <ThermodynamicsCompleteDerivations part={24} />

<Section index="11" title="Complete worked examples and applications">
          <div className="grid gap-4 lg:grid-cols-2">
            {problems.map(([title, q, a]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="cursor-pointer font-black text-white">{title}</h3>
                <p className="mt-3 text-slate-200">{q}</p>
                <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4 text-sm text-slate-200">
                  {a}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">Rapid recall</p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Fixed T,V: minimise A. Fixed T,P: minimise G.
              </h2>
            </div>
            <Chip tone="emerald">PART 24 COMPLETE</Chip>
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={24} />


</main>
  );
}
