import React from "react";

import ThermodynamicsIntegratedEnrichment from "./ThermodynamicsIntegratedEnrichment";
import ThermodynamicsCompleteDerivations from "./ThermodynamicsCompleteDerivations";

type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "sky";

const tones: Record<Tone, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/[0.07] text-violet-200",
  amber: "border-amber-400/25 bg-amber-400/[0.07] text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200",
  rose: "border-rose-400/25 bg-rose-400/[0.07] text-rose-200",
  sky: "border-sky-400/25 bg-sky-400/[0.07] text-sky-200",
};

function Chip({ children, tone = "cyan" }: { children: React.ReactNode; tone?: Tone }) {
  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}

function Section({ index, title, subtitle, children }: { index: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl md:p-8">
      <div className="flex gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200">{index}</span>
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

function Lens({ title, children, tone = "cyan" }: { title: string; children: React.ReactNode; tone?: Tone }) {
  return (
    <aside className={`rounded-2xl border p-5 ${tones[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">Concept lens</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-200">{children}</div>
    </aside>
  );
}

function EntropyRouteSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 760" role="img" aria-labelledby="route-title route-desc" className="h-auto w-full">
        <title id="route-title">Five-step Third-Law entropy route</title>
        <desc id="route-desc">A substance is heated as solid, melted, heated as liquid, vaporised, and heated as gas.</desc>
        <rect width="1200" height="760" rx="34" fill="#020617" />
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">FIVE-STEP THIRD-LAW ENTROPY CONSTRUCTION</text>
        {[
          ["0 K solid",120,"#22d3ee"],
          ["200 K solid",330,"#67e8f9"],
          ["200 K liquid",540,"#fbbf24"],
          ["300 K vapour",750,"#f472b6"],
          ["350 K vapour",960,"#34d399"],
        ].map(([label,x,color],i)=>(
          <g key={String(label)}>
            <circle cx={Number(x)} cy="340" r="70" fill="#0f172a" stroke={String(color)} strokeWidth="8" />
            <text x={Number(x)} y="332" fill={String(color)} fontSize="22" fontWeight="900" textAnchor="middle">{String(label).split(" ")[0]}</text>
            <text x={Number(x)} y="370" fill="#cbd5e1" fontSize="16" textAnchor="middle">{String(label).split(" ").slice(1).join(" ")}</text>
            {i<4 ? <><line x1={Number(x)+80} y1="340" x2={Number(x)+120} y2="340" stroke="#a78bfa" strokeWidth="8" /><polygon points={`${Number(x)+120},340 ${Number(x)+95},325 ${Number(x)+95},355`} fill="#a78bfa"/></> : null}
          </g>
        ))}
        <text x="225" y="265" fill="#a5f3fc" fontSize="18" fontWeight="900" textAnchor="middle">∫Cp,s/T dT</text>
        <text x="435" y="265" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">ΔHfus/Tm</text>
        <text x="645" y="265" fill="#fde68a" fontSize="18" fontWeight="900" textAnchor="middle">∫Cp,l/T dT</text>
        <text x="855" y="265" fill="#f9a8d4" fontSize="18" fontWeight="900" textAnchor="middle">ΔHvap/Tb</text>
        <rect x="185" y="530" width="830" height="125" rx="30" fill="#0f172a" stroke="#34d399" strokeWidth="6"/>
        <text x="600" y="575" fill="#a7f3d0" fontSize="23" fontWeight="900" textAnchor="middle">31.0 + 37.5 + 25.93 + 100 + 7.71</text>
        <text x="600" y="625" fill="#f8fafc" fontSize="29" fontWeight="900" textAnchor="middle">S°m(350 K) = 202.14 J mol⁻¹ K⁻¹</text>
      </svg>
    </div>
  );
}

function MicrostateSVG() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 md:p-5">
      <svg viewBox="0 0 1200 820" role="img" aria-labelledby="micro-title micro-desc" className="h-auto w-full">
        <title id="micro-title">Microstate counting for particles in quantised levels</title>
        <desc id="micro-desc">Distinct and indistinguishable particles distributed among equally spaced energy levels.</desc>
        <rect width="1200" height="820" rx="34" fill="#020617"/>
        <text x="600" y="55" fill="#f8fafc" fontSize="31" fontWeight="900" textAnchor="middle">COUNTING MICROSTATES IN QUANTISED ENERGY LEVELS</text>
        <g>
          <text x="300" y="110" fill="#a5f3fc" fontSize="25" fontWeight="900" textAnchor="middle">DISTINGUISHABLE A, B, C</text>
          {[0,1,2,3,4,5].map(i=><line key={i} x1="100" y1={520-i*65} x2="500" y2={520-i*65} stroke="#64748b" strokeWidth="4"/>)}
          {[
            ["A",210,455],["B",300,390],["C",390,325]
          ].map(([l,x,y])=><g key={String(l)}><circle cx={Number(x)} cy={Number(y)} r="18" fill="#22d3ee"/><text x={Number(x)} y={Number(y)+7} fill="#020617" fontSize="15" fontWeight="900" textAnchor="middle">{l}</text></g>)}
          <text x="300" y="590" fill="#a5f3fc" fontSize="20" fontWeight="900" textAnchor="middle">Etot = 5ε</text>
          <text x="300" y="630" fill="#f8fafc" fontSize="20" textAnchor="middle">20 possible microstates</text>
        </g>
        <line x1="600" y1="95" x2="600" y2="690" stroke="#334155" strokeWidth="4"/>
        <g>
          <text x="900" y="110" fill="#fde68a" fontSize="25" fontWeight="900" textAnchor="middle">INDISTINGUISHABLE BOSONS</text>
          {[0,1,2,3,4,5].map(i=><line key={i} x1="700" y1={520-i*65} x2="1100" y2={520-i*65} stroke="#64748b" strokeWidth="4"/>)}
          {[["",805,455],["",900,390],["",995,325]].map((_,i)=><circle key={i} cx={[805,900,995][i]} cy={[455,390,325][i]} r="18" fill="#fbbf24"/>)}
          <text x="900" y="590" fill="#fde68a" fontSize="20" fontWeight="900" textAnchor="middle">Etot = 5ε</text>
          <text x="900" y="630" fill="#f8fafc" fontSize="20" textAnchor="middle">5 possible occupation patterns</text>
        </g>
        <rect x="220" y="715" width="760" height="55" rx="22" fill="#0f172a" stroke="#a78bfa" strokeWidth="4"/>
        <text x="600" y="751" fill="#ddd6fe" fontSize="20" fontWeight="900" textAnchor="middle">Counting depends on distinguishability and quantum statistics.</text>
      </svg>
    </div>
  );
}

function TempPressureGraph() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-[2rem] border border-white/10 bg-[#07111f] p-5">
        <h3 className="text-xl font-black text-white">Temperature effect on reaction entropy</h3>
        <Formula label="Kirchhoff-type entropy relation">
          Δ<sub>r</sub>S°(T₂)=Δ<sub>r</sub>S°(T₁)+∫<sub>T₁</sub><sup>T₂</sup>Δ<sub>r</sub>C°<sub>p</sub>/T dT
        </Formula>
        <Formula label="Constant ΔCp">
          Δ<sub>r</sub>S°(T₂)=Δ<sub>r</sub>S°(T₁)+Δ<sub>r</sub>C°<sub>p</sub>ln(T₂/T₁)
        </Formula>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-[#07111f] p-5">
        <h3 className="text-xl font-black text-white">Pressure effect on ideal-gas reaction entropy</h3>
        <Formula label="At fixed T">
          Δ<sub>r</sub>S(P₂)=Δ<sub>r</sub>S(P₁)−Δn<sub>g</sub>Rln(P₂/P₁)
        </Formula>
        <Formula label="Direction">
          Δn<sub>g</sub>&gt;0 ⇒ pressure increase lowers Δ<sub>r</sub>S
        </Formula>
      </div>
    </div>
  );
}

const problems = [
  ["Third-Law sum","Why are transition terms added rather than integrated?","A first-order transition occurs at one equilibrium temperature and contributes the finite jump ΔHtr/Ttr."],
  ["Ion convention","Why may absolute entropies of aqueous ions appear negative?","Single-ion values are relative to S°m(H+,aq)=0; only neutral combinations are directly measurable."],
  ["Three distinguishable particles","How many microstates have total energy 5ε in non-degenerate levels 0,ε,2ε,...?","Count non-negative ordered triples a+b+c=5: C(7,2)=21 if each particle's level index can include 0. If the level scheme instead requires every particle to occupy at least the first level (no particle at the zero-energy level), the shifted count gives 20 arrangements — the two totals reflect different level-numbering conventions, not a contradiction."],
  ["Three bosons","How many occupation-number patterns satisfy Σni=3 and Σεini=5ε?","The source reports five allowed patterns for its shown level set."],
  ["Temperature correction","If ΔrCp°<0, what happens to ΔrS° as T rises?","It decreases because the integral of ΔrCp°/T is negative."],
  ["Pressure correction","For N2O4(g)→2NO2(g), how does pressure affect ΔrS?","Δng=+1, so increasing pressure lowers the reaction entropy by Rln(P₂/P₁)."],
  ["Heat-engine percentage","For a Carnot engine, η=1−Tc/Th. If Tc=0.9Th, what is η?","η=1−0.9=0.10, or 10%."],
  ["Helmholtz bridge","Which free energy is natural at constant T and V?","Helmholtz energy A=U−TS; spontaneous change at constant T,V has ΔA<0."],
];

function ThermodynamicsPart23() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <header className="border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.16),transparent_30%)]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="flex flex-wrap gap-2">
            <Chip>SYNERGIC BOND MASTER NOTES</Chip><Chip tone="violet">COMPLETE THEORY</Chip><Chip tone="emerald">MICROSTATES & REACTION ENTROPY</Chip>
          </div>
          <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">From calorimetric absolute entropy to microstate counting and reaction-entropy corrections</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">This part completes the Third-Law numerical sequence, preserves the microstate examples, and derives how temperature and pressure alter reaction entropy.</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-10 md:px-8">
        <Section index="01" title="Retained Third-Law entropy numerical" subtitle="Five additive contributions from 0 K to 350 K">
          <EntropyRouteSVG/>
          <Formula label="Solid heating, 0→200 K">ΔS₁=∫[0.035(T/K)+0.0012(T/K)²]dT/T=31.0 J mol⁻¹ K⁻¹</Formula>
          <Formula label="Fusion at 200 K">ΔS₂=7.5×10³/200=37.5 J mol⁻¹ K⁻¹</Formula>
          <Formula label="Liquid heating, 200→300 K">ΔS₃=60ln(300/200)+0.016(300−200)=25.93 J mol⁻¹ K⁻¹</Formula>
          <Formula label="Vaporisation at 300 K">ΔS₄=30×10³/300=100 J mol⁻¹ K⁻¹</Formula>
          <Formula label="Gas heating, 300→350 K">ΔS₅=50ln(350/300)=7.71 J mol⁻¹ K⁻¹</Formula>
          <Formula label="Total">S°<sub>m</sub>(350 K)=202.14 J mol⁻¹ K⁻¹</Formula>
        </Section>

        <Section index="02" title="Relative standard entropies of aqueous ions">
          <Formula label="Convention">S°<sub>m</sub>(H⁺,aq)=0 at every stated temperature</Formula>
          <Lens title="Why negative values are possible" tone="rose">A single aqueous ion cannot be isolated thermodynamically without a counter-ion. Tables therefore use a relative convention. Negative listed values do not mean a negative physical total entropy.</Lens>
        </Section>

        <Section index="03" title="Explicit microstate counting">
          <MicrostateSVG/>
          <Lens title="Counting convention" tone="amber">The stated example gives 20 microstates for three distinguishable particles with total energy {String.raw`\(5\varepsilon\)`}, then five occupation patterns for the corresponding indistinguishable-particle treatment. Because counting depends on allowed levels and distinguishability, the exact convention is stated rather than hidden.</Lens>
          <Formula label="Boltzmann bridge">S=k<sub>B</sub>lnΩ</Formula>
        </Section>

        <Section index="04" title="Carnot percentage checkpoint">
          <Formula label="Retained relation">η=1−T<sub>c</sub>/T<sub>h</sub></Formula>
          <Formula label="If Tc=0.9Th">η=1−0.9=0.10=10%</Formula>
          <Lens title="Interpretation" tone="cyan">A sink only ten percent colder than the source permits at most ten percent Carnot efficiency.</Lens>
        </Section>

        <Section index="05" title="Effect of temperature on reaction entropy">
          <Formula label="General relation">Δ<sub>r</sub>S°(T₂)=Δ<sub>r</sub>S°(T₁)+∫<sub>T₁</sub><sup>T₂</sup>Δ<sub>r</sub>C°<sub>p</sub>/T dT</Formula>
          <Formula label="Constant ΔrCp°">Δ<sub>r</sub>S°(T₂)=Δ<sub>r</sub>S°(T₁)+Δ<sub>r</sub>C°<sub>p</sub>ln(T₂/T₁)</Formula>
          <Formula label="Reaction">½N₂(g)+O₂(g)→NO₂(g)</Formula>
          <Formula label="At 298 K">Δ<sub>r</sub>S°₂₉₈=−16.805 J mol⁻¹ K⁻¹</Formula>
          <Formula label="Heat-capacity change">Δ<sub>r</sub>C°<sub>p</sub>=37.20−½(29.13)−29.36=−6.725 J mol⁻¹ K⁻¹</Formula>
          <Formula label="At 348 K">Δ<sub>r</sub>S°₃₄₈=−17.85 J mol⁻¹ K⁻¹</Formula>
        </Section>

        <Section index="06" title="Effect of pressure on reaction entropy">
          <TempPressureGraph/>
          <Formula label="Ideal-gas reaction">Δ<sub>r</sub>S(P₂)=Δ<sub>r</sub>S(P₁)−Δn<sub>g</sub>Rln(P₂/P₁)</Formula>
          <Lens title="Physical meaning" tone="violet">Compression lowers the entropy of each gas. A reaction producing more gas moles is therefore penalised more strongly by pressure.</Lens>
        </Section>

        <Section index="07" title="Bridge to Helmholtz free energy">
          <Formula label="Definition">A=U−TS</Formula>
          <Formula label="Differential">dA=−S dT−P dV for a simple closed system of fixed composition</Formula>
          <Formula label="Constant T,V criterion">spontaneous: ΔA&lt;0 • equilibrium: ΔA=0</Formula>
          <Lens title="Why Helmholtz appears now" tone="emerald">Entropy alone gives the isolated-system criterion. At fixed temperature and volume, the same direction test is packaged into Helmholtz free energy.</Lens>
        </Section>


        <ThermodynamicsCompleteDerivations part={23} />

<Section index="08" title="Complete worked examples and applications">
          <div className="grid gap-4 lg:grid-cols-2">
            {problems.map(([title,q,a])=>(
              <article key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className="cursor-pointer font-black text-white">{title}</h3>
                <p className="mt-3 text-slate-200">{q}</p>
                <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-4 text-sm text-slate-200">{a}</div>
              </article>
            ))}
          </div>
        </Section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-fuchsia-300">Rapid recall</p><h2 className="mt-2 text-2xl font-black text-white">Absolute entropy adds by thermal route; reaction entropy shifts with temperature and pressure</h2></div>
            <Chip tone="emerald">PART 23 COMPLETE</Chip>
          </div>
        </section>
      </div>

      <ThermodynamicsIntegratedEnrichment part={23} />


</main>
  );
}

/* PART23_BUNDLED_VISIBLE_APPLICATIONS */

const part23BundledApplications = [
  {
    title: "Third-Law entropy staircase",
    given: "Add the solid-heating, fusion, liquid-heating, vaporisation and gas-heating contributions.",
    solution: "31.0 + 37.5 + 25.93 + 100 + 7.71 = 202.14 J mol⁻¹ K⁻¹ at 350 K.",
  },
  {
    title: "Aqueous-ion entropy convention",
    given: "Explain why S°m(H⁺,aq) is assigned zero and why some listed single-ion values may be negative.",
    solution: "Individual single-ion entropies are relative conventional values. Charge-balanced reaction entropies remain convention independent.",
  },
  {
    title: "Microstate counting",
    given: "Compare distinguishable-particle arrangements with occupation-pattern counting.",
    solution: "Distinguishable labels multiply the number of arrangements, whereas indistinguishable particles are counted through unique occupation patterns. Entropy follows S = k ln Ω.",
  },
  {
    title: "Reaction-entropy temperature dependence",
    given: "Determine how ΔrS° changes when reactant and product heat capacities differ.",
    solution: "Use d(ΔrS°)/dT = ΔrCp°/T and integrate over temperature. The sign and magnitude depend on ΔrCp°.",
  },
];

function Part23BundledApplications() {
  return (
    <section className="bg-[#020617] pb-14 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 md:p-8">
          <h2 className="text-2xl font-black text-white">Visible Third-Law, microstate and reaction-entropy applications</h2>

          <div className="mt-5 space-y-4">
            {part23BundledApplications.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5"
              >
                <p className="text-xs font-black uppercase tracking-wider text-cyan-300">
                  Worked application {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-black uppercase text-violet-300">
                    Given
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.given}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-black uppercase text-emerald-300">
                    Solution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default function ThermodynamicsPart23BundledFinal() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <ThermodynamicsPart23 />
      <Part23BundledApplications />
    </div>
  );
}
