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

export default function MoleConceptPart7() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Charge Counting in Ions</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Electron &amp; Charge Counting in Ions &amp; Algebraic Trap Analysis
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Quantifying subatomic particle inventories across complex polyatomic ions. Master systematic counting of electrons, protons, and total Coulombs of charge, while identifying under-constrained algebraic system traps in stoichiometric formulas.
          </p>
        </header>

        {/* Section 1: Electron Counting Rules for Polyatomic Ions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Subatomic Inventories in Ions
          </h2>

          <ConceptCard title="How to Account for Ionic Charge">
            <p>
              When counting total electrons inside an ion, the net electric charge directly modifies the sum of neutral atomic electrons (<InlineMath math="\sum Z_i" />):
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xs text-slate-300 pt-1">
              <li>
                <strong className="text-amber-300">Anions (Negative Ions):</strong> For an anion carrying <InlineMath math="-z" /> charge, <strong className="text-white">add exactly <InlineMath math="z" /> electrons</strong> to the sum of atomic numbers: <InlineMath math="N_e = \sum Z_i + z" />.
              </li>
              <li>
                <strong className="text-cyan-300">Cations (Positive Ions):</strong> For a cation carrying <InlineMath math="+z" /> charge, <strong className="text-white">subtract exactly <InlineMath math="z" /> electrons</strong> from the sum of atomic numbers: <InlineMath math="N_e = \sum Z_i - z" />.
              </li>
              <li>
                <strong className="text-lime-300">Protons &amp; Neutrons:</strong> Nuclear proton count (<InlineMath math="N_p = \sum Z_i" />) and neutron count (<InlineMath math="N_n = \sum (A_i - Z_i)" />) are <strong className="text-white">strictly invariant</strong> under chemical ionization!
              </li>
            </ul>
          </ConceptCard>

          <FormulaBox
            title="Total Electric Charge of an Ionic Sample"
            formula={String.raw`q = n_{\text{ions}} \cdot z \cdot F = n_{\text{ions}} \cdot z \cdot N_A \cdot e`}
            description="Where z is the absolute valency/charge magnitude of the ion, and F is the Faraday constant ≈ 96,485 Coulombs/mol."
          />

          <WorkedExample
            title="Counting Electrons in 0.95 g of Phosphate Ions (PO4^3-)"
            problem={
              <span>
                Calculate the exact number of moles and total count of electrons present inside a pure laboratory sample containing <InlineMath math="0.95\text{ g}" /> of phosphate ions (<InlineMath math="\text{PO}_4^{3-}, M = 95\text{ g mol}^{-1}" />). (<InlineMath math="Z_{\text{P}} = 15, Z_{\text{O}} = 8" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Calculate Total Electrons in One Single PO4^3- Ion">
                  <BlockMath math={String.raw`e^-_{\text{single ion}} = Z_{\text{P}} + 4(Z_{\text{O}}) + 3 = 15 + 4(8) + 3 = 15 + 32 + 3 = 50\text{ electrons per ion}`} />
                </StepBox>
                <StepBox number={2} title="Calculate Moles of PO4^3- Ions in the Sample">
                  <BlockMath math={String.raw`n_{\text{ions}} = \frac{w}{M} = \frac{0.95\text{ g}}{95\text{ g mol}^{-1}} = 0.010\text{ mol of phosphate ions}`} />
                </StepBox>
                <StepBox number={3} title="Multiply by Electrons per Ion and Avogadro's Number">
                  <BlockMath math={String.raw`N_e = n_{\text{ions}} \times 50 \times N_A = 0.010 \times 50 \times N_A = 0.50 \cdot N_A \approx 3.011 \times 10^{23}\text{ electrons}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="0.50 \cdot N_A \text{ electrons (approx } 3.011 \times 10^{23} \text{ electrons)}" />}
          />
        </section>

        {/* Section 2: Under-Constrained Algebraic Trap Analysis (AB2 / A2B3) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Incomplete Question Trap Analysis (<InlineMath math="\text{AB}_2 / \text{A}_2\text{B}_3" />)
          </h2>

          <ConceptCard title="Why Single-Equation Systems Cannot Yield Unique Atomic Masses">
            <p>
              In stoichiometry examinations, a classic analytical trap involves presenting only one mass measurement for two unknown elements <InlineMath math="\text{A}" /> and <InlineMath math="\text{B}" />. For example:
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-slate-300 py-1">
              &quot;0.15 moles of a compound <InlineMath math="\text{A}_2\text{B}_3" /> weigh precisely <InlineMath math="45\text{ g}" />. Determine the individual atomic masses of elements <InlineMath math="\text{A}" /> and <InlineMath math="\text{B}" />.&quot;
            </blockquote>
            <p>
              Let us analyze mathematically why this question is <strong className="text-rose-400">strictly under-constrained</strong>:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Algebraic System Analysis"
            formula={String.raw`n = \frac{w}{M} \implies 0.15 = \frac{45}{2M_{\text{A}} + 3M_{\text{B}}} \implies 2M_{\text{A}} + 3M_{\text{B}} = 300`}
            description="Notice that 2M_A + 3M_B = 300 is a single linear equation with TWO independent variables (M_A and M_B)."
          />

          <ConceptCard title="The Required Secondary Equation Solution">
            <p>
              A single linear equation with two unknowns (<InlineMath math="2M_{\text{A}} + 3M_{\text{B}} = 300" />) possesses an infinite number of possible mathematical pairs (e.g., if <InlineMath math="M_{\text{A}} = 60 \implies M_{\text{B}} = 60" />; if <InlineMath math="M_{\text{A}} = 75 \implies M_{\text{B}} = 50" />).
            </p>
            <p>
              To solve uniquely for both <InlineMath math="M_{\text{A}}" /> and <InlineMath math="M_{\text{B}}" />, the problem <strong className="text-lime-300">must provide a second, independent stoichiometric condition</strong> (for instance: <InlineMath math="0.15\text{ moles of }\text{AB}_2\text{ weigh } 27\text{ g} \implies M_{\text{A}} + 2M_{\text{B}} = 180" />). Solving the simultaneous linear system yields exact, unique values:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Simultaneous Linear Solution (When Fully Constrained)"
            formula={String.raw`\begin{cases} 2M_{\text{A}} + 3M_{\text{B}} = 300 \\ M_{\text{A}} + 2M_{\text{B}} = 180 \end{cases} \implies M_{\text{B}} = 60\text{ g mol}^{-1}, \ M_{\text{A}} = 60\text{ g mol}^{-1}`}
            description="Always verify that the number of independent equations equals the number of unknown atomic masses before attempting numerical extraction!"
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Charge Counting in Ions</p>
        </footer>
      </article>
    </main>
  );
}
