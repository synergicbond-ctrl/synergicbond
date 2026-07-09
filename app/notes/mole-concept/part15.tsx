"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-cyan-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-cyan-300">{title}</h3>
    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">{children}</div>
  </div>
);

const FormulaBox = ({ title, formula, description }: { title: string; formula: string; description?: string }) => (
  <div className="my-6 rounded-2xl border border-amber-400/30 bg-slate-950 p-6 shadow-lg text-center space-y-3">
    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
      {title}
    </span>
    <div className="overflow-x-auto py-2">
      <BlockMath math={formula} />
    </div>
    {description && <p className="text-xs text-slate-400 font-sans">{description}</p>}
  </div>
);

const WorkedExample = ({
  title,
  problem,
  steps,
  result,
}: {
  title: string;
  problem: React.ReactNode;
  steps: React.ReactNode;
  result: React.ReactNode;
}) => (
  <div className="my-8 rounded-3xl border border-rose-400/30 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8 space-y-5">
    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
      <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
        Worked Example
      </span>
      <span className="text-xs font-bold text-slate-400">{title}</span>
    </div>
    <div className="text-sm font-medium leading-relaxed text-slate-100">{problem}</div>
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3 font-mono text-xs text-slate-300">
      {steps}
    </div>
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-xs font-bold text-emerald-300">
      Result: {result}
    </div>
  </div>
);

const StepBox = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="flex gap-3 text-left">
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function MoleConceptPart15() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Dissociation, Association &amp; Final Review</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Dissociation Equilibrium, Degree of Dissociation &amp; Complete Course Audit
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            The culminating module of the Synergic Bond Mole Concept curriculum. Master how gas dissociation and association alter observed molecular mass and vapour density, quantify the exact degree of dissociation (<InlineMath math="\alpha" />), establish rigorous boundary conditions on apparent mixture weights, and review all core stoichiometric relationships.
          </p>
        </header>

        {/* Section 1: Gas Dissociation & Apparent Molecular Mass */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Effect of Dissociation on Apparent Molar Mass
          </h2>

          <ConceptCard title="Why Dissociation Lower the Observed Molecular Weight">
            <p>
              When a gas undergoes thermal dissociation (e.g., <InlineMath math="\text{N}_2\text{O}_4 \rightleftharpoons 2\text{NO}_2" /> or <InlineMath math="\text{PCl}_5 \rightleftharpoons \text{PCl}_3 + \text{Cl}_2" />), one molecule splits into two or more particle fragments (<InlineMath math="m > 1" />). Because total mass is conserved while total particle count (and total moles <InlineMath math="n_{\text{total}}" />) increases, the observed or apparent molecular mass (<InlineMath math="M_{\text{obs}} = w / n_{\text{total}}" />) strictly <strong className="text-cyan-300">decreases</strong> below the theoretical formula mass (<InlineMath math="M_{\text{theo}}" />).
            </p>
            <p>
              Conversely, in reactions where equal numbers of moles trade places (e.g., <InlineMath math="2\text{NO} \to \text{N}_2 + \text{O}_2" /> or <InlineMath math="2\text{HI} \to \text{H}_2 + \text{I}_2" />), the total number of moles remains invariant (<InlineMath math="\Delta n = 0" />). Hence, for these specific systems, the apparent molecular mass <strong className="text-lime-300">remains strictly unchanged</strong> during dissociation!
            </p>
          </ConceptCard>

          <FormulaBox
            title="Degree of Dissociation Formula"
            formula={String.raw`\alpha = \frac{M_{\text{theo}} - M_{\text{obs}}}{M_{\text{obs}}(m - 1)} = \frac{\text{VD}_{\text{theo}} - \text{VD}_{\text{obs}}}{\text{VD}_{\text{obs}}(m - 1)}`}
            description="Where alpha is the fraction dissociated and m is the number of moles of gaseous products formed from 1 mole of reactant."
          />

          <WorkedExample
            title="Evaluating Nitrogen Tetroxide (N2O4) Dissociation"
            problem={
              <span>
                The observed Vapour Density (<InlineMath math="\text{VD}" />) of a sample of dinitrogen tetroxide (<InlineMath math="\text{N}_2\text{O}_4, M_{\text{theo}} = 92\text{ g mol}^{-1}" />) undergoing thermal dissociation into nitrogen dioxide (<InlineMath math="\text{NO}_2, M = 46\text{ g mol}^{-1}" />) is precisely <InlineMath math="40.0" />. Calculate:
                <br />(a) The exact number of moles of <InlineMath math="\text{NO}_2" /> formed when exactly <InlineMath math="100\text{ moles of initial }\text{N}_2\text{O}_4" /> undergo dissociation at this equilibrium.
                <br />(b) The exact number of moles of <InlineMath math="\text{NO}_2" /> present inside a <InlineMath math="100\text{ g}" /> equilibrium sample.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Determine Observed Apparent Molecular Mass">
                  <BlockMath math={String.raw`M_{\text{obs}} = 2 \times \text{VD}_{\text{obs}} = 2 \times 40.0 = 80.0\text{ g mol}^{-1}`} />
                </StepBox>
                <StepBox number={2} title="Set Up Molar Balance for 100 Moles Initial Sample">
                  <BlockMath math={String.raw`\text{Let } n_{\text{NO}_2} = x\text{ mol}, \quad n_{\text{N}_2\text{O}_4} = (100 - x)\text{ mol}`} />
                  <BlockMath math={String.raw`80.0 = \frac{x(46) + (100 - x)(92)}{100} \implies 8000 = 46x + 9200 - 92x \implies 46x = 1200 \implies x = \frac{1200}{46} \approx 26.09\text{ mol}`} />
                </StepBox>
                <StepBox number={3} title="Compute Total Moles and NO2 Moles inside a 100 g Sample">
                  <BlockMath math={String.raw`n_{\text{total in 100 g}} = \frac{w}{M_{\text{obs}}} = \frac{100\text{ g}}{80.0\text{ g mol}^{-1}} = 1.25\text{ mol of total gas}`} />
                  <BlockMath math={String.raw`n_{\text{NO}_2\text{ in 100 g}} = \left(\frac{26.09\%}{100}\right) \times 1.25\text{ mol} = 0.326\text{ mol of NO}_2`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="\text{(a) } 26.09\text{ mol of NO}_2 \text{ per 100 mol initial}, \quad \text{(b) } 0.326\text{ mol of NO}_2 \text{ per 100 g sample}" />}
          />
        </section>

        {/* Section 2: Boundary Conditions & Diluent Effects on Gas Mixtures */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Boundary Bounds &amp; Diluent Addition Dynamics
          </h2>

          <ConceptCard title="Strict Mathematical Limits on Apparent Molar Weight">
            <p>
              For any true binary mixture of two distinct gases <InlineMath math="\text{A}" /> (<InlineMath math="M_{\text{A}}" />) and <InlineMath math="\text{B}" /> (<InlineMath math="M_{\text{B}}" /> with <InlineMath math="M_{\text{A}} < M_{\text{B}}" />), the apparent molecular mass of the mixture <strong className="text-amber-300">must strictly lie inside the open interval between the two pure molar masses</strong>:
            </p>
            <div className="my-2 rounded-xl bg-slate-950 p-4 font-mono text-xs text-center text-cyan-300">
              <InlineMath math="M_{\text{A}} < M_{\text{mix}} < M_{\text{B}}" />
            </div>
            <p>
              For example, a mixture of Carbon Monoxide (<InlineMath math="\text{CO}, M = 28" />) and Oxygen (<InlineMath math="\text{O}_2, M = 32" />) can <strong className="text-white">never</strong> exhibit an average mass equal to <InlineMath math="20, 28, 32," /> or <InlineMath math="45\text{ g/mol}" /> unless it is not a true mixture; any true mixture satisfies <InlineMath math="28 < M_{\text{mix}} < 32" />.
            </p>
            <p>
              Furthermore, introducing an inert diluent gas alters the overall average molecular weight:
            </p>
            <ul className="list-disc ml-5 space-y-1 text-xs text-slate-300 pt-1">
              <li>
                <strong className="text-cyan-300">Light Diluents (e.g., Helium <InlineMath math="M = 4" />):</strong> Strictly <strong className="text-white">decrease</strong> the average molecular mass of the system.
              </li>
              <li>
                <strong className="text-lime-300">Heavy Diluents (e.g., Argon <InlineMath math="M = 40" /> or <InlineMath math="\text{SO}_2 \ M = 64" />):</strong> Strictly <strong className="text-white">increase</strong> the average molecular mass of the system.
              </li>
            </ul>
          </ConceptCard>
        </section>

        {/* Section 3: Final Master Course Audit & Equation Summary */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Comprehensive Course Master Index &amp; Audit
          </h2>

          <ConceptCard title="The 15-Lesson Synergic Bond Synthesis">
            <p>
              Across this comprehensive curriculum, every concept, derivation, and numerical example has been transformed into a rigorous, interactive masterclass:
            </p>
            <div className="grid gap-3 pt-2 text-xs md:grid-cols-2 font-mono">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Foundations of the Mole</strong>
                SI definition, Avogadro constant (<InlineMath math="N_A" />), elementary charge, and particle-to-mole conversions.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-amber-300 block mb-1">Avogadro Constant &amp; Counting Particles</strong>
                Atomic vs mass number, nuclear mass defect (<InlineMath math="\Delta m" />), and Einstein <InlineMath math="E = \Delta m c^2" />.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Atomic Mass &amp; Mass Scale</strong>
                Historical scales (H, O, C-12), unified mass (<InlineMath math="\text{u}" />), and Gram Atomic Mass (<InlineMath math="\text{GAM}" />).
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-lime-300 block mb-1">Gram Atomic Mass &amp; Conversions</strong>
                Atomic radius, crystal packing fractions, line-up calculations, and solid steel ball inventory.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Molecular Mass &amp; Formula Mass</strong>
                Molecular mass, Gram Molecular Mass (<InlineMath math="\text{GMM}" />), Lavoisier mass conservation, and largest-number ranking.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-amber-300 block mb-1">Formula Units &amp; Hydrated Salts</strong>
                Virus specific volume calculations, formula units in hydrated crystals, and equal-hydrogen stoichiometry.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Charge Counting in Ions</strong>
                Polyatomic ionic charge/electron inventories, Coulombs of charge, and <InlineMath math="\text{AB}_2/\text{A}_2\text{B}_3" /> algebraic trap analysis.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-lime-300 block mb-1">Compound Composition Problems</strong>
                Simultaneous linear algebraic mass extraction, organometallic analysis, and <InlineMath math="\text{CH}_4" /> molecule extraction.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Gaseous Molar Volume</strong>
                Standard molar volume (<InlineMath math="22.4\text{ L}" />) at STP/NTP, <InlineMath math="PV = nRT" />, and exact <InlineMath math="R" /> unit conversions.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-amber-300 block mb-1">Ideal Gas Applications</strong>
                Metric volume unit chains, absolute Kelvin transformations, and the Combined Gas Law (<InlineMath math="P_1 V_1 / T_1 = P_2 V_2 / T_2" />).
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Gas Density &amp; Vapour Density</strong>
                Absolute gas density (<InlineMath math="PM = dRT" />), Vapour Density (<InlineMath math="\text{VD} = M/2" />), and mass spectrometry separation physics.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-lime-300 block mb-1">Isotopes &amp; Average Atomic Mass</strong>
                Isotopic abundance weighted averages across Cl, B, Li, O, and N, and average neutron counts in C mixtures.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Gas Mixtures &amp; Partial Pressure</strong>
                Dalton&apos;s and Amagat&apos;s partial laws, volume vs mole percentage equality, and volumetric mixture analysis.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-amber-300 block mb-1">Ozonized Oxygen &amp; Mixture Analysis</strong>
                Mass composition reciprocal formulas, binary hydrocarbon atomic ratios, and ozonized oxygen kinetics at STP.
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <strong className="text-cyan-300 block mb-1">Dissociation, Association &amp; Review</strong>
                Degree of dissociation (<InlineMath math="\alpha" />), apparent molecular weight reduction, and complete curriculum synthesis.
              </div>
            </div>
          </ConceptCard>

          <FormulaBox
            title="Master Stoichiometry Interconversion Triangle"
            formula={String.raw`n = \frac{N}{N_A} = \frac{w}{M \ (\text{or } A)} = \frac{V_{\text{gas at STP (L)}}}{22.4} = \frac{P \cdot V}{R \cdot T}`}
            description="With these core relationships mastered, you are fully prepared to conquer any challenge in physical chemistry and stoichiometry!"
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Dissociation, Association and Final Review</p>
        </footer>
      </article>
    </main>
  );
}
