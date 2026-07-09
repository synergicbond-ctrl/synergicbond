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
  <div className="my-6 rounded-2xl border border-lime-400/30 bg-slate-950 p-6 shadow-lg text-center space-y-3">
    <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lime-300">
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

export default function MoleConceptPart3() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Atomic Mass and Mass Scale</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Relative Atomic Mass Scales &amp; Gram Atomic Mass
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Tracing the evolution of atomic mass standards from John Dalton&apos;s hydrogen hypothesis to the IUPAC Carbon-12 scale. Master the exact definition of the unified atomic mass unit (<InlineMath math="\text{u}" />), the significance of Berzelius and Avogadro&apos;s combining hypotheses, and rigorous conversions involving gram atomic mass (<InlineMath math="\text{gram-atoms}" />).
          </p>
        </header>

        {/* Section 1: Evolution of Relative Atomic Mass Scales */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Historical &amp; Modern Atomic Mass Reference Scales
          </h2>

          <ConceptCard title="Why Do We Use Relative Scales?">
            <p>
              Because absolute single-atom masses are inconveniently small (on the order of <InlineMath math="10^{-23}\text{ g}" />), nineteenth-century pioneers such as <strong className="text-white">John Dalton, Jöns Jacob Berzelius, and Amedeo Avogadro</strong> realized that stoichiometry requires exact <strong className="text-cyan-300">relative combining ratios</strong>. Over time, three primary reference scales evolved:
            </p>
            <ol className="list-decimal ml-5 space-y-2 text-xs text-slate-300 pt-2">
              <li>
                <strong className="text-white">Dalton&apos;s Hydrogen Scale (19th Century):</strong> Defined the lightest known atom, Hydrogen (<InlineMath math="^1\text{H}" />), as exactly <InlineMath math="1.000\text{ unit}" />. Every other atomic mass was expressed relative to hydrogen.
              </li>
              <li>
                <strong className="text-white">The Oxygen Scale (Early 20th Century):</strong> Because natural oxygen reacts readily with almost all elements to form stoichiometric oxides, chemists later adopted <InlineMath math="1/16^{\text{th}}" /> the mass of natural oxygen as exactly <InlineMath math="1\text{ unit}" />.
              </li>
              <li>
                <strong className="text-white">The Modern IUPAC Carbon-12 Scale (1961 – Present):</strong> To eliminate discrepancies between physicist isotopic scales and chemist natural abundance scales, IUPAC universally adopted the pure <strong className="text-lime-300">Carbon-12 isotope (<InlineMath math="^{12}\text{C}" />)</strong> as the absolute standard. Exactly <InlineMath math="1/12^{\text{th}}" /> the rest mass of a single unbound, neutral Carbon-12 atom in its ground state is defined as one <strong className="text-cyan-300">unified atomic mass unit (<InlineMath math="\text{u}" /> or <InlineMath math="\text{Da}" />)</strong>.
              </li>
            </ol>
          </ConceptCard>

          <FormulaBox
            title="Unified Atomic Mass Unit (1 u in Grams)"
            formula={String.raw`1\text{ u} = \frac{1}{12} \times \text{Mass of one }^{12}\text{C atom} = \frac{1}{N_A}\text{ g} \approx 1.66054 \times 10^{-24}\text{ g} = 1.66054 \times 10^{-27}\text{ kg}`}
            description="Consequently, the absolute mass of any single atom = Relative Atomic Mass (A) × 1.66054 × 10^-24 g."
          />
        </section>

        {/* Section 2: Gram Atomic Mass (GAM & Gram-Atoms) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Gram Atomic Mass &amp; The &apos;Gram-Atom&apos; Concept
          </h2>

          <ConceptCard title="From Microscopic Units (u) to Macroscopic Grams (g)">
            <p>
              If the relative atomic mass of an element is <InlineMath math="A" />, then by definition, the mass of exactly one single atom is <InlineMath math="A\text{ u}" />. When we scale this up to exactly <strong className="text-lime-300">one mole (<InlineMath math="N_A" /> atoms)</strong> of that element, the numerical value remains identical, but the unit magically transforms from unified mass units (<InlineMath math="\text{u}" />) into grams (<InlineMath math="\text{g}" />).
            </p>
            <p>
              We define <strong className="text-cyan-300">Gram Atomic Mass (GAM)</strong> as the mass in grams of <InlineMath math="1\text{ mole}" /> of atoms of an element. In older chemical literature and examination papers, one mole of atoms is frequently termed <strong className="text-amber-300">one gram-atom</strong>:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Gram-Atom Conversion Equivalence"
            formula={String.raw`1\text{ gram-atom} \equiv 1\text{ mole of atoms} \equiv \text{Gram Atomic Mass (in g)} \equiv N_A\text{ atoms}`}
            description="Number of moles of atoms (n) = Given Mass (w) / Gram Atomic Mass (GAM)."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <WorkedExample
              title="Moles from Mass: Oxygen, Carbon & Tin"
              problem={
                <span>
                  Calculate the number of moles (<InlineMath math="n" />) and total gram-atoms present across three distinct laboratory samples:
                  <br />• Sample A: <InlineMath math="3.2\text{ g}" /> of atomic oxygen (<InlineMath math="A = 16" />)
                  <br />• Sample B: <InlineMath math="1.5\text{ g}" /> of pure carbon (<InlineMath math="A = 12" />)
                  <br />• Sample C: <InlineMath math="1.18\text{ g}" /> of metallic tin (<InlineMath math="\text{Sn}, A = 118" />)
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Sample A: 3.2 g Oxygen Atoms">
                    <BlockMath math={String.raw`n_{\text{O}} = \frac{3.2\text{ g}}{16\text{ g mol}^{-1}} = 0.20\text{ mol} = 0.20\text{ gram-atoms}`} />
                  </StepBox>
                  <StepBox number={2} title="Sample B: 1.5 g Carbon Atoms">
                    <BlockMath math={String.raw`n_{\text{C}} = \frac{1.5\text{ g}}{12\text{ g mol}^{-1}} = 0.125\text{ mol} = 0.125\text{ gram-atoms}`} />
                  </StepBox>
                  <StepBox number={3} title="Sample C: 1.18 g Tin Atoms">
                    <BlockMath math={String.raw`n_{\text{Sn}} = \frac{1.18\text{ g}}{118\text{ g mol}^{-1}} = 0.010\text{ mol} = 0.010\text{ gram-atoms}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="\text{O: } 0.20\text{ mol}, \ \text{C: } 0.125\text{ mol}, \ \text{Sn: } 0.010\text{ mol}" />}
            />

            <WorkedExample
              title="Determining Unknown Atomic Mass from Particle Count"
              problem={
                <span>
                  An unknown pure elemental sample containing exactly <InlineMath math="1.0 \times 10^{22}" /> atoms weighs precisely <InlineMath math="1.0\text{ g}" /> on an analytical balance. Identify the exact relative atomic mass (<InlineMath math="A" />) of the element and predict its identity.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Express Moles from Particle Count">
                    <BlockMath math={String.raw`n = \frac{N}{N_A} = \frac{1.0 \times 10^{22}}{6.022 \times 10^{23}} = \frac{1}{60.22}\text{ mol}`} />
                  </StepBox>
                  <StepBox number={2} title="Equate with Mass-to-Mole Relationship">
                    <BlockMath math={String.raw`n = \frac{w}{A} \implies \frac{1}{60.22} = \frac{1.0\text{ g}}{A}`} />
                  </StepBox>
                  <StepBox number={3} title="Solve for Relative Atomic Mass (A)">
                    <BlockMath math={String.raw`A = 1.0 \times 60.22 = 60.22\text{ g mol}^{-1} \approx 60\text{ u}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="A \approx 60\text{ u} \ (\text{Matches Neodymium/Co or Nickel-60 isotope})" />}
            />
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Atomic Mass and Mass Scale</p>
        </footer>
      </article>
    </main>
  );
}
