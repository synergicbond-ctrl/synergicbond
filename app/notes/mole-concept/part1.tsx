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

export default function MoleConceptPart1() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Foundations of the Mole</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Mole, Avogadro Constant &amp; Formula Units
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Fundamental quantitative foundations of chemistry. Master the SI definition of the mole, the exact numerical value of the Avogadro constant, the fundamental relationship between the Faraday constant and elementary charge, distinguishing discrete molecules from ionic formula units, and converting between particle counts and molar quantities.
          </p>
        </header>

        {/* Section 1: The SI Definition of the Mole */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            The SI Definition of the Mole
          </h2>

          <ConceptCard title="Why do we need the Mole in Chemistry?">
            <p>
              Atoms and molecules are exceptionally small, both in mass and spatial volume. In any macroscopic laboratory sample—such as a single beaker of water or a pinch of salt—there are unimaginable trillions of chemical entities. Counting individual particles directly is impossible.
            </p>
            <p>
              To bridge the gap between atomic-scale particle counts and macroscopic laboratory mass measurements, chemists define the <strong className="text-lime-300">mole</strong> (symbol: <InlineMath math="\text{mol}" />) as the SI base unit representing amount of substance.
            </p>
          </ConceptCard>

          <FormulaBox
            title="The Avogadro Constant (N_A)"
            formula={String.raw`N_A = 6.02214076 \times 10^{23} \text{ particles mol}^{-1} \approx 6.022 \times 10^{23} \text{ mol}^{-1}`}
            description="One mole of any substance contains exactly N_A specified elementary entities (atoms, molecules, ions, electrons, or formula units)."
          />
        </section>

        {/* Section 2: Faraday Constant & Elementary Charge */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            The Faraday Constant &amp; Elementary Charge Relationship
          </h2>

          <ConceptCard title="Bridging Electrochemistry and Avogadro's Constant">
            <p>
              The fundamental charge carried by a single electron or proton is known as the <strong className="text-cyan-300">elementary charge (<InlineMath math="e" />)</strong>, where <InlineMath math="e = 1.60217663 \times 10^{-19}\text{ C}" />. When exactly one mole of electrons passes through an electrical circuit or electrolytic cell, the total absolute electric charge transferred is defined as the <strong className="text-amber-300">Faraday Constant (<InlineMath math="F" />)</strong>.
            </p>
            <p>
              This direct electro-stoichiometric relationship allows experimental determination of Avogadro&apos;s number from macroscopic electrolysis measurements:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Faraday Constant Relationship"
            formula={String.raw`F = N_A \times e \implies N_A = \frac{F}{e} = \frac{96485.33\text{ C mol}^{-1}}{1.60217663 \times 10^{-19}\text{ C}} = 6.02214076 \times 10^{23}\text{ mol}^{-1}`}
            description="The Faraday constant F ≈ 96,485 Coulombs per mole of electrons."
          />
        </section>

        {/* Section 3: Formula Units vs. Discrete Molecules */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Molecules vs. Formula Units
          </h2>

          <ConceptCard title="Correct Structural Nomenclature for Ionic Lattices">
            <p>
              In covalent compounds such as water (<InlineMath math="\text{H}_2\text{O}" />) or methane (<InlineMath math="\text{CH}_4" />), discrete individual molecules exist. However, in three-dimensional ionic crystal lattices such as sodium chloride (<InlineMath math="\text{NaCl}" />) or calcium carbonate (<InlineMath math="\text{CaCO}_3" />), discrete isolated molecules do not exist. Instead, the crystal consists of a continuous, alternating network of positive and negative ions held together by electrostatic forces.
            </p>
            <p>
              For all ionic lattice structures, we use the term <strong className="text-cyan-300">formula unit</strong> rather than molecule. For example, one formula unit of <InlineMath math="\text{NaCl}" /> consists of exactly one <InlineMath math="\text{Na}^+" /> ion and one <InlineMath math="\text{Cl}^-" /> ion. One mole of <InlineMath math="\text{NaCl}" /> contains <InlineMath math="N_A" /> formula units of sodium chloride.
            </p>
          </ConceptCard>
        </section>

        {/* Section 4: Fundamental Particle-to-Mole Calculations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Particle to Mole Conversions
          </h2>

          <FormulaBox
            title="Fundamental Particle-Mole Conversion Relationship"
            formula={String.raw`n = \frac{N}{N_A} \quad \text{where } n = \text{number of moles}, \ N = \text{number of particles}`}
            description="Rearranging yields: Total number of particles N = n \times N_A"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <WorkedExample
              title="Calculating Moles from Sodium Atom Count"
              problem={
                <span>
                  A clean metallic sample contains exactly <InlineMath math="1.0 \times 10^{22}" /> atoms of sodium (<InlineMath math="\text{Na}" />). Calculate the amount of sodium in moles.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Identify Given Data">
                    <BlockMath math={String.raw`N = 1.0 \times 10^{22} \text{ atoms}, \quad N_A \approx 6.022 \times 10^{23} \text{ mol}^{-1}`} />
                  </StepBox>
                  <StepBox number={2} title="Apply Particle-to-Mole Formula">
                    <BlockMath math={String.raw`n = \frac{N}{N_A} = \frac{1.0 \times 10^{22}}{6.022 \times 10^{23}}`} />
                  </StepBox>
                  <StepBox number={3} title="Simplify and Evaluate">
                    <BlockMath math={String.raw`n = \frac{1}{60.22} \approx 0.0166 \text{ mol}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="0.0166 \text{ moles of Na}" />}
            />

            <WorkedExample
              title="Calculating Total Molecules from Moles"
              problem={
                <span>
                  How many nitrogen molecules (<InlineMath math="\text{N}_2" />) are present in exactly <InlineMath math="2.5 \text{ moles}" /> of pure nitrogen gas?
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Identify Given Data">
                    <BlockMath math={String.raw`n = 2.5 \text{ mol}, \quad N_A \approx 6.022 \times 10^{23} \text{ molecules mol}^{-1}`} />
                  </StepBox>
                  <StepBox number={2} title="Apply Multiplication Relation">
                    <BlockMath math={String.raw`N = n \times N_A = 2.5 \times (6.022 \times 10^{23})`} />
                  </StepBox>
                  <StepBox number={3} title="Compute Numeric Value">
                    <BlockMath math={String.raw`N = 1.5055 \times 10^{24} \text{ molecules}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="1.505 \times 10^{24} \text{ molecules of N}_2" />}
            />
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Foundations of the Mole</p>
        </footer>
      </article>
    </main>
  );
}
