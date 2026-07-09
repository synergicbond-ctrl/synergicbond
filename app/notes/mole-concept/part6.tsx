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

export default function MoleConceptPart6() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Formula Units and Hydrated Salts</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Macromolecules, Virus Particle Mass &amp; Hydrated Salts
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Extending quantitative stoichiometry from small molecules to giant biological macromolecules and crystal hydrates. Master specific volume relationships for virus particles, determine exact molecular weights of macromolecular assemblies, and compute formula units and water of crystallization for complex ionic hydrates.
          </p>
        </header>

        {/* Section 1: Biological Macromolecules & Virus Particle Calculation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Macromolecular &amp; Virus Particle Calculations
          </h2>

          <ConceptCard title="Specific Volume and Particle Mass">
            <p>
              In biophysical chemistry, macromolecules such as proteins, nucleic acids, and intact virus assemblies are characterized by their <strong className="text-cyan-300">specific volume (<InlineMath math="v" />)</strong>, defined as the volume occupied by <InlineMath math="1.0\text{ gram}" /> of the substance (<InlineMath math="v = 1/d" /> where <InlineMath math="d" /> is density).
            </p>
            <p>
              When the physical dimensions (shape and volume <InlineMath math="V_{\text{particle}}" />) and specific volume (<InlineMath math="v" />) of a single particle are experimentally measured via electron microscopy or analytical ultracentrifugation, the absolute mass of one single particle (<InlineMath math="m" />) and the exact molar mass (<InlineMath math="M" />) of the macromolecule can be directly derived:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Macromolecular Mass Derivation"
            formula={String.raw`m_{\text{single particle}} = \frac{V_{\text{particle}}}{v} = V_{\text{particle}} \cdot d, \quad M_{\text{molar mass}} = m_{\text{single particle}} \cdot N_A`}
            description="Where V_particle is volume of one particle, v is specific volume in cm³/g, and N_A is Avogadro's number."
          />

          <WorkedExample
            title="Calculating Molar Mass of Tobacco Mosaic Virus (TMV)"
            problem={
              <span>
                Tobacco Mosaic Virus (TMV) particles are rigid cylindrical rods of length <InlineMath math="l = 3000\text{ \AA}" /> and radius <InlineMath math="r = 75\text{ \AA}" />. The experimentally measured specific volume of the virus is <InlineMath math="v = 0.75\text{ cm}^3\text{ g}^{-1}" />. Calculate:
                <br />(a) The absolute mass in grams of a single virus particle.
                <br />(b) The exact molar mass (<InlineMath math="M" />) of the virus assembly (<InlineMath math="N_A = 6.022 \times 10^{23}\text{ mol}^{-1}" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Calculate Volume of Single Cylindrical Virus Particle">
                  <BlockMath math={String.raw`V = \pi r^2 l = 3.14159 \times (7.5 \times 10^{-7}\text{ cm})^2 \times (3.0 \times 10^{-5}\text{ cm}) = 5.3014 \times 10^{-17}\text{ cm}^3`} />
                </StepBox>
                <StepBox number={2} title="Determine Mass of One Particle Using Specific Volume">
                  <BlockMath math={String.raw`m = \frac{V}{v} = \frac{5.3014 \times 10^{-17}\text{ cm}^3}{0.75\text{ cm}^3\text{ g}^{-1}} = 7.0685 \times 10^{-17}\text{ g per particle}`} />
                </StepBox>
                <StepBox number={3} title="Compute Molar Mass by Multiplying with Avogadro's Constant">
                  <BlockMath math={String.raw`M = m \times N_A = (7.0685 \times 10^{-17}\text{ g}) \times (6.022 \times 10^{23}\text{ mol}^{-1}) \approx 4.256 \times 10^7\text{ g mol}^{-1}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="M \approx 4.26 \times 10^7\text{ g mol}^{-1} \ (\text{or approx } 42.6\text{ Megadaltons})" />}
          />
        </section>

        {/* Section 2: Hydrated Salts & Water of Crystallization */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Hydrated Salts &amp; Crystal Hydrate Analysis
          </h2>

          <ConceptCard title="Counting Formula Units and Water Molecules">
            <p>
              In crystalline hydrates such as Blue Vitriol (<InlineMath math="\text{CuSO}_4 \cdot 5\text{H}_2\text{O}" />) or Washing Soda (<InlineMath math="\text{Na}_2\text{CO}_3 \cdot 10\text{H}_2\text{O}" />), water molecules of crystallization are stoichiometrically incorporated directly inside the crystal lattice.
            </p>
            <p>
              To determine the total number of formula units or individual water molecules inside a weighed crystalline sample, first compute the total molar mass including all waters of hydration (<InlineMath math="M_{\text{hydrate}}" />), determine total moles (<InlineMath math="n = w / M" />), and then multiply by the specific stoichiometric coefficients:
            </p>
          </ConceptCard>

          <WorkedExample
            title="Formula Units and Water Molecules in Blue Vitriol"
            problem={
              <span>
                A pure crystal sample of copper(II) sulfate pentahydrate (<InlineMath math="\text{CuSO}_4 \cdot 5\text{H}_2\text{O}, M = 249.5\text{ g mol}^{-1}" />) weighs precisely <InlineMath math="2.495\text{ g}" />. Calculate:
                <br />(a) The total number of formula units of <InlineMath math="\text{CuSO}_4 \cdot 5\text{H}_2\text{O}" />.
                <br />(b) The total number of individual water (<InlineMath math="\text{H}_2\text{O}" />) molecules of crystallization present.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Find Moles of Hydrated Crystal">
                  <BlockMath math={String.raw`n = \frac{2.495\text{ g}}{249.5\text{ g mol}^{-1}} = 0.010\text{ mol}`} />
                </StepBox>
                <StepBox number={2} title="Compute Total Formula Units">
                  <BlockMath math={String.raw`\text{Formula Units} = 0.010 \times (6.022 \times 10^{23}) = 6.022 \times 10^{21}\text{ units}`} />
                </StepBox>
                <StepBox number={3} title="Compute Total Water Molecules (5 Water Molecules per Unit)">
                  <BlockMath math={String.raw`N_{\text{H}_2\text{O}} = 5 \times (6.022 \times 10^{21}) = 3.011 \times 10^{22}\text{ water molecules}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="6.022 \times 10^{21}\text{ formula units}, \quad 3.011 \times 10^{22}\text{ water molecules}" />}
          />
        </section>

        {/* Section 3: Cane Sugar vs. Water Equivalence Problem */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Equal Atom Count Stoichiometry Equivalence
          </h2>

          <WorkedExample
            title="Equal Hydrogen Atom Comparison: Cane Sugar vs. Water"
            problem={
              <span>
                How many grams of cane sugar (<InlineMath math="\text{C}_{12}\text{H}_{22}\text{O}_{11}, M = 342\text{ g mol}^{-1}" />) contain exactly the <strong className="text-cyan-300">same number of hydrogen atoms</strong> as exactly <InlineMath math="0.50\text{ g}" /> of pure water (<InlineMath math="\text{H}_2\text{O}, M = 18\text{ g mol}^{-1}" />)?
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Calculate Moles of Hydrogen Atoms in 0.50 g of Water">
                  <BlockMath math={String.raw`n_{\text{H in water}} = 2 \times n_{\text{water}} = 2 \times \left(\frac{0.50\text{ g}}{18\text{ g mol}^{-1}}\right) = \frac{1.0}{18}\text{ mol of H atoms}`} />
                </StepBox>
                <StepBox number={2} title="Express Moles of Hydrogen Atoms in W Grams of Cane Sugar">
                  <BlockMath math={String.raw`n_{\text{sugar}} = \frac{W}{342} \implies n_{\text{H in sugar}} = 22 \times \left(\frac{W}{342}\right)\text{ mol of H atoms}`} />
                </StepBox>
                <StepBox number={3} title="Equate Both Hydrogen Quantities and Solve for W">
                  <BlockMath math={String.raw`\frac{22W}{342} = \frac{1}{18} \implies W = \frac{342}{22 \times 18} = \frac{342}{396} \approx 0.8636\text{ g}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="W \approx 0.864\text{ grams of cane sugar}" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Formula Units and Hydrated Salts</p>
        </footer>
      </article>
    </main>
  );
}
