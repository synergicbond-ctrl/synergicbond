"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-lime-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-lime-300">{title}</h3>
    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">{children}</div>
  </div>
);

const FormulaBox = ({ title, formula, description }: { title: string; formula: string; description?: string }) => (
  <div className="my-6 rounded-2xl border border-cyan-400/30 bg-slate-950 p-6 shadow-lg text-center space-y-3">
    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
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
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-500/20 text-xs font-bold text-lime-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function MoleConceptPart8() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Compound Composition Problems</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Gas Mixtures &amp; Advanced Stoichiometric Problem Solving
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Comprehensive multi-step stoichiometric calculations. Master simultaneous linear extraction of atomic masses from dual-compound mass data, trace exact subatomic electron counts in polyatomic hydrates and salts, calculate molecular mass of complex multi-element compositions, and compute remaining hydrogen counts after partial molecule extraction.
          </p>
        </header>

        {/* Section 1: Mass from Moles across Diverse Chemical Entities */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Mass-to-Mole Verification Across Systems
          </h2>

          <ConceptCard title="Direct Mass Calculation via Molar Multipliers">
            <p>
              Using the core relation <InlineMath math="w = n \times M" /> (or <InlineMath math="w = n \times A" /> for atomic species), we can rapidly verify mass quantities across arbitrary stoichiometric states:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xs text-slate-300 pt-1">
              <li>
                <strong className="text-white">Iron Sample:</strong> <InlineMath math="0.5\text{ gram-atoms of Fe } (A = 56) \implies w = 0.5 \times 56 = 28\text{ g}" />.
              </li>
              <li>
                <strong className="text-white">Ozone Gas:</strong> <InlineMath math="0.4\text{ moles of }\text{O}_3\text{ gas } (M = 48) \implies w = 0.4 \times 48 = 19.2\text{ g}" />.
              </li>
              <li>
                <strong className="text-white">Helium Gas:</strong> <InlineMath math="1.2\text{ moles of He } (A = 4) \implies w = 1.2 \times 4 = 4.8\text{ g}" />.
              </li>
              <li>
                <strong className="text-white">Sulfur Dioxide:</strong> <InlineMath math="0.6\text{ moles of }\text{SO}_2 (M = 64) \implies w = 0.6 \times 64 = 38.4\text{ g}" />.
              </li>
            </ul>
          </ConceptCard>

          <WorkedExample
            title="Determining Molecular Mass of a Complex Organometallic Compound"
            problem={
              <span>
                A single molecule of a complex chemical compound is experimentally found to contain exactly <InlineMath math="15\text{ carbon atoms}" />, exactly <InlineMath math="30\text{ hydrogen atoms}" />, and exactly <InlineMath math="4.0 \times 10^{-22}\text{ grams}" /> of other heavy heteroatoms. Calculate the exact molecular mass (<InlineMath math="M" />) of the compound in unified atomic mass units (<InlineMath math="\text{u}" />) and grams per mole (<InlineMath math="N_A \approx 6.0 \times 10^{23}\text{ mol}^{-1}" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Sum Atomic Mass Contributions of C and H">
                  <BlockMath math={String.raw`M_{\text{C and H}} = 15(12\text{ u}) + 30(1\text{ u}) = 180 + 30 = 210\text{ u per molecule}`} />
                </StepBox>
                <StepBox number={2} title="Convert Heteroatom Mass to Unified Mass Units (u)">
                  <BlockMath math={String.raw`M_{\text{hetero}} = (4.0 \times 10^{-22}\text{ g}) \times N_A = (4.0 \times 10^{-22}) \times (6.0 \times 10^{23}) = 240\text{ u per molecule}`} />
                </StepBox>
                <StepBox number={3} title="Compute Total Molecular Mass">
                  <BlockMath math={String.raw`M_{\text{total}} = 210\text{ u} + 240\text{ u} = 450\text{ u} = 450\text{ g mol}^{-1}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="M_{\text{total}} = 450\text{ u (or } 450\text{ g mol}^{-1}\text{)}" />}
          />
        </section>

        {/* Section 2: Simultaneous Algebraic Extraction (A2B & A2B3) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Simultaneous Extraction of Atomic Masses (<InlineMath math="\text{A}_2\text{B} \ \& \ \text{A}_2\text{B}_3" />)
          </h2>

          <WorkedExample
            title="Extracting Exact Atomic Masses from Dual Compound Data"
            problem={
              <span>
                Two unknown elements <InlineMath math="\text{A}" /> and <InlineMath math="\text{B}" /> combine to form two distinct binary compounds: <InlineMath math="\text{A}_2\text{B}" /> and <InlineMath math="\text{A}_2\text{B}_3" />. If exactly <InlineMath math="0.10\text{ moles of }\text{A}_2\text{B}" /> weigh <InlineMath math="18.0\text{ g}" /> while exactly <InlineMath math="0.05\text{ moles of }\text{A}_2\text{B}_3" /> weigh <InlineMath math="16.0\text{ g}" />, determine the exact atomic masses of element <InlineMath math="\text{A}" /> (<InlineMath math="x" />) and element <InlineMath math="\text{B}" /> (<InlineMath math="y" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Formulate First Linear Equation from A2B Data">
                  <BlockMath math={String.raw`M_{\text{A}_2\text{B}} = \frac{18.0\text{ g}}{0.10\text{ mol}} = 180\text{ g mol}^{-1} \implies 2x + y = 180`} />
                </StepBox>
                <StepBox number={2} title="Formulate Second Linear Equation from A2B3 Data">
                  <BlockMath math={String.raw`M_{\text{A}_2\text{B}_3} = \frac{16.0\text{ g}}{0.05\text{ mol}} = 320\text{ g mol}^{-1} \implies 2x + 3y = 320`} />
                </StepBox>
                <StepBox number={3} title="Subtract Equation (1) from Equation (2) to Solve for y">
                  <BlockMath math={String.raw`2y = 320 - 180 = 140 \implies y = 70\text{ u (Atomic mass of B)}`} />
                </StepBox>
                <StepBox number={4} title="Substitute y = 70 into Equation (1) to Solve for x">
                  <BlockMath math={String.raw`2x + 70 = 180 \implies 2x = 110 \implies x = 55\text{ u (Atomic mass of A)}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="\text{Atomic mass of A } (x) = 55\text{ u (Manganese)}, \ \text{Atomic mass of B } (y) = 70\text{ u (Gallium/Cobalt system equivalent)}" />}
          />
        </section>

        {/* Section 3: Partial Molecule Removal & Residual Atom Counting */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Partial Molecule Removal Stoichiometry
          </h2>

          <WorkedExample
            title="Residual Hydrogen Counting After Methane (CH4) Extraction"
            problem={
              <span>
                From a closed laboratory vessel containing exactly <InlineMath math="8.0\text{ mg}" /> of methane gas (<InlineMath math="\text{CH}_4, M = 16\text{ g mol}^{-1}" />), exactly <InlineMath math="4.8 \times 10^{19}\text{ molecules}" /> are carefully extracted via vacuum pump. Calculate the total moles of individual hydrogen (<InlineMath math="\text{H}" />) atoms remaining inside the vessel (<InlineMath math="N_A = 6.0 \times 10^{23}\text{ mol}^{-1}" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Calculate Initial Moles of Methane Gas">
                  <BlockMath math={String.raw`n_{\text{initial}} = \frac{8.0 \times 10^{-3}\text{ g}}{16\text{ g mol}^{-1}} = 5.0 \times 10^{-4}\text{ mol CH}_4`} />
                </StepBox>
                <StepBox number={2} title="Calculate Moles of Methane Extracted">
                  <BlockMath math={String.raw`n_{\text{removed}} = \frac{4.8 \times 10^{19}}{6.0 \times 10^{23}} = 0.8 \times 10^{-4} = 8.0 \times 10^{-5}\text{ mol CH}_4`} />
                </StepBox>
                <StepBox number={3} title="Calculate Residual Moles of Methane Remaining">
                  <BlockMath math={String.raw`n_{\text{remaining}} = (5.0 \times 10^{-4}) - (0.8 \times 10^{-4}) = 4.2 \times 10^{-4}\text{ mol CH}_4`} />
                </StepBox>
                <StepBox number={4} title="Multiply by 4 to Obtain Remaining Moles of Hydrogen Atoms">
                  <BlockMath math={String.raw`n_{\text{H remaining}} = 4 \times n_{\text{remaining}} = 4 \times (4.2 \times 10^{-4}) = 1.68 \times 10^{-3}\text{ mol of H atoms}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="1.68 \times 10^{-3}\text{ moles of hydrogen atoms (or } 1.68\text{ millimoles)}" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Compound Composition Problems</p>
        </footer>
      </article>
    </main>
  );
}
