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

export default function MoleConceptPart5() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Molecular Mass and Formula Mass</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Molecular Mass, Conservation of Mass &amp; Largest-Number Analysis
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Transitioning from single atoms to complex multi-atom molecules. Master molecular mass summation, gram molecular mass (<InlineMath math="\text{gram-molecules}" />), the quantitative Law of Conservation of Mass in chemical reactions, and systematic comparative analysis of particle counts across arbitrary mass quantities.
          </p>
        </header>

        {/* Section 1: Molecular Mass & Gram Molecular Mass */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Molecular Mass &amp; Gram-Molecules
          </h2>

          <ConceptCard title="Summing Constituent Atomic Masses">
            <p>
              The <strong className="text-cyan-300">molecular mass (<InlineMath math="M" />)</strong> of any substance is defined as the arithmetic sum of the relative atomic masses of all individual atoms present in exactly one molecule of the formula: <InlineMath math="M = \sum (N_i \cdot A_i)" />.
            </p>
            <p>
              When expressed in grams per mole, this quantity is termed <strong className="text-amber-300">Gram Molecular Mass (GMM)</strong>. In classic stoichiometry terminology, exactly one mole of molecules is referred to as <strong className="text-lime-300">one gram-molecule</strong>:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Gram-Molecule Conversion Relationship"
            formula={String.raw`1\text{ gram-molecule} \equiv 1\text{ mole of molecules} \equiv \text{Gram Molecular Mass (in g)} \equiv N_A\text{ molecules}`}
            description="Moles of molecules (n) = Given Mass (w) / Gram Molecular Mass (M)."
          />
        </section>

        {/* Section 2: Law of Conservation of Mass & Mass-Energy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Law of Conservation of Mass in Reactions
          </h2>

          <ConceptCard title="Lavoisier's Principle vs. Einstein's Relativistic Correction">
            <p>
              Antoine Lavoisier formulated the fundamental classical law: <strong className="text-white">In any ordinary chemical reaction, the total mass of the reacting substances precisely equals the total mass of the products (<InlineMath math="\sum w_{\text{reactants}} = \sum w_{\text{products}}" />)</strong>. Atoms are rearranged during chemical transformations but neither created nor destroyed.
            </p>
            <p>
              While Einstein&apos;s relation <InlineMath math="\Delta E = \Delta m \cdot c^2" /> dictates that exothermic chemical reactions technically lose an infinitesimal fraction of mass (converted to heat/light), this mass change in classical chemical reactions is less than <InlineMath math="10^{-9}\text{ grams}" />—completely undetectable on analytical laboratory balances. Thus, classical mass conservation holds strictly across all standard chemical stoichiometry calculations.
            </p>
          </ConceptCard>
        </section>

        {/* Section 3: Largest-Number Comparative Numericals */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Comparative Particle Count Ranking
          </h2>

          <WorkedExample
            title="Identifying the Sample with the Largest Number of Atoms"
            problem={
              <span>
                Determine rigorously which of the following four pure elemental or molecular samples contains the <strong className="text-cyan-300">largest total number of individual atoms</strong>:
                <br />(A) <InlineMath math="1.0\text{ g}" /> of hydrogen gas (<InlineMath math="\text{H}_2, M = 2\text{ g mol}^{-1}" />)
                <br />(B) <InlineMath math="1.0\text{ g}" /> of oxygen gas (<InlineMath math="\text{O}_2, M = 32\text{ g mol}^{-1}" />)
                <br />(C) <InlineMath math="1.0\text{ g}" /> of solid lithium (<InlineMath math="\text{Li}, A = 7\text{ g mol}^{-1}" />)
                <br />(D) <InlineMath math="1.0\text{ g}" /> of solid silver (<InlineMath math="\text{Ag}, A = 108\text{ g mol}^{-1}" />)
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Sample A: 1.0 g Hydrogen Gas (H2)">
                  <BlockMath math={String.raw`n_{\text{H}_2} = \frac{1.0}{2} = 0.5\text{ mol molecules} \implies \text{Atoms} = 0.5 \times 2 \times N_A = 1.00 \cdot N_A\text{ atoms}`} />
                </StepBox>
                <StepBox number={2} title="Sample B: 1.0 g Oxygen Gas (O2)">
                  <BlockMath math={String.raw`n_{\text{O}_2} = \frac{1.0}{32} \text{ mol molecules} \implies \text{Atoms} = \frac{1}{32} \times 2 \times N_A = \frac{1}{16} N_A = 0.0625 \cdot N_A\text{ atoms}`} />
                </StepBox>
                <StepBox number={3} title="Sample C: 1.0 g Solid Lithium (Li)">
                  <BlockMath math={String.raw`n_{\text{Li}} = \frac{1.0}{7}\text{ mol atoms} \implies \text{Atoms} = \frac{1}{7} N_A \approx 0.1429 \cdot N_A\text{ atoms}`} />
                </StepBox>
                <StepBox number={4} title="Sample D: 1.0 g Solid Silver (Ag)">
                  <BlockMath math={String.raw`n_{\text{Ag}} = \frac{1.0}{108}\text{ mol atoms} \implies \text{Atoms} = \frac{1}{108} N_A \approx 0.0093 \cdot N_A\text{ atoms}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="\text{Sample A (1.0 g of H}_2\text{) contains the maximum number of atoms (Exactly } 1.00 N_A \text{ atoms)}" />}
          />

          <WorkedExample
            title="Determining Molecular Mass from Elemental Mass Percent"
            problem={
              <span>
                An important biomolecule contains exactly <InlineMath math="3.4\%" /> sulfur by mass (<InlineMath math="A_{\text{S}} = 32\text{ g mol}^{-1}" />). Assuming that exactly <InlineMath math="2\text{ atoms}" /> of sulfur are present per single molecule, determine the exact minimum molecular mass (<InlineMath math="M" />) of the biomolecule.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Express Mass Percentage Formula">
                  <BlockMath math={String.raw`\%\text{ Mass of S} = \frac{\text{Number of S atoms} \times A_{\text{S}}}{M_{\text{biomolecule}}} \times 100`} />
                </StepBox>
                <StepBox number={2} title="Substitute Given Values">
                  <BlockMath math={String.raw`3.4 = \frac{2 \times 32}{M} \times 100 = \frac{6400}{M}`} />
                </StepBox>
                <StepBox number={3} title="Solve for Molecular Mass (M)">
                  <BlockMath math={String.raw`M = \frac{6400}{3.4} \approx 1882.35\text{ g mol}^{-1}\text{ (or }\text{u)}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="M \approx 1882.35\text{ g mol}^{-1}" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Molecular Mass and Formula Mass</p>
        </footer>
      </article>
    </main>
  );
}
