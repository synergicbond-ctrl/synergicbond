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

export default function MoleConceptPart12() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Isotopes and Average Atomic Mass</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Weighted Average Atomic Mass, Isotopic Abundance &amp; Neutron Averages
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Mastering weighted isotopic averages across multi-isotope mixtures. Calculate exact atomic weights for chlorine, boron, lithium, oxygen, and nitrogen systems, evaluate mass percentage distributions across isotopes, and compute exact weighted average neutron inventories inside carbon mixtures.
          </p>
        </header>

        {/* Section 1: The Weighted Average Atomic Mass Formula */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            The Weighted Average Isotope Formula
          </h2>

          <ConceptCard title="Why We Weight by Percentage Abundance">
            <p>
              When an element exists as a mixture of multiple stable isotopes, its tabulated atomic mass is the <strong className="text-cyan-300">weighted arithmetic mean</strong> of the individual isotopic masses weighted by their fractional or percentage abundance:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Weighted Average Atomic Mass Formula"
            formula={String.raw`A_{\text{avg}} = \sum_{i=1}^k \left(\frac{P_i \times A_i}{100}\right) = \frac{P_1 A_1 + P_2 A_2 + \dots + P_k A_k}{100}`}
            description="Where P_i is the atomic percentage abundance and A_i is the mass number (or isotopic mass) of isotope i."
          />

          <ConceptCard title="The Brick Lot Analogy">
            <p>
              Consider a construction delivery containing <InlineMath math="10\text{ lots}" /> of bricks: <InlineMath math="5\text{ lots}" /> weighing <InlineMath math="60\text{ kg}" /> each, <InlineMath math="3\text{ lots}" /> weighing <InlineMath math="30\text{ kg}" /> each, and <InlineMath math="2\text{ lots}" /> weighing <InlineMath math="10\text{ kg}" /> each. The average mass per lot is not simply the midpoint, but the weighted sum:
            </p>
            <div className="my-2 rounded-xl bg-slate-950 p-4 font-mono text-xs text-amber-300 text-center">
              <InlineMath math="M_{\text{avg}} = \frac{5(60) + 3(30) + 2(10)}{10} = \frac{300 + 90 + 20}{10} = \frac{410}{10} = 41\text{ kg per lot}" />
            </div>
          </ConceptCard>
        </section>

        {/* Section 2: Comprehensive Isotopic Abundance Solved Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Isotopic Abundance Numericals Across Elements
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <WorkedExample
              title="Chlorine & Boron Weighted Averages"
              problem={
                <span>
                  Calculate the exact average atomic mass for:
                  <br />• Chlorine: <InlineMath math="75\% \ ^{35}\text{Cl}" /> and <InlineMath math="25\% \ ^{37}\text{Cl}" />
                  <br />• Boron: <InlineMath math="20\% \ ^{10}\text{B} \ (10.08\text{ u})" /> and <InlineMath math="80\% \ ^{11}\text{B} \ (11.04\text{ u})" />
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Chlorine Average Calculation">
                    <BlockMath math={String.raw`A_{\text{Cl}} = \frac{75(35) + 25(37)}{100} = \frac{2625 + 925}{100} = 35.50\text{ u}`} />
                  </StepBox>
                  <StepBox number={2} title="Boron Average Calculation">
                    <BlockMath math={String.raw`A_{\text{B}} = \frac{20(10.08) + 80(11.04)}{100} = \frac{201.6 + 883.2}{100} = 10.848\text{ u}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="A_{\text{Cl}} = 35.50\text{ u}, \quad A_{\text{B}} = 10.848\text{ u}" />}
            />

            <WorkedExample
              title="Lithium, Oxygen & Nitrogen Mixtures"
              problem={
                <span>
                  Calculate exact averages and particle inventories for:
                  <br />• Lithium: <InlineMath math="^6\text{Li}" /> and <InlineMath math="^7\text{Li}" /> in a <InlineMath math="1:9" /> atomic ratio (<InlineMath math="A_{\text{avg}} = 6.90\text{ u}" />).
                  <br />• Oxygen: <InlineMath math="90\% \ ^{16}\text{O}" /> and <InlineMath math="10\% \ ^{17}\text{O}" /> (<InlineMath math="A_{\text{avg}} = 16.10\text{ u}" />). Find total atoms in <InlineMath math="3.22\text{ g}" />.
                  <br />• Nitrogen: <InlineMath math="80\% \ ^{14}\text{N}" /> and <InlineMath math="20\% \ ^{15}\text{N}" /> (<InlineMath math="A_{\text{avg}} = 14.20\text{ u}" />). Find <InlineMath math="^{15}\text{N}" /> atoms in <InlineMath math="7.1\text{ g}" />.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Total Oxygen Atoms in 3.22 g Sample">
                    <BlockMath math={String.raw`N_{\text{O}} = \left(\frac{3.22\text{ g}}{16.10\text{ g mol}^{-1}}\right) N_A = 0.20 \cdot N_A\text{ atoms}`} />
                  </StepBox>
                  <StepBox number={2} title="Nitrogen Moles and 15-N Particle Extraction in 7.1 g">
                    <BlockMath math={String.raw`n_{\text{total}} = \frac{7.1}{14.2} = 0.50\text{ mol} \implies N_{^{15}\text{N}} = 0.20 \times 0.50 \times N_A = 0.10 \cdot N_A\text{ atoms}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="\text{O atoms: } 0.20 N_A, \quad ^{15}\text{N atoms: } 0.10 N_A" />}
            />
          </div>
        </section>

        {/* Section 3: Mass Percentage & Weighted Average Neutrons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Mass Percent &amp; Average Neutron Inventory
          </h2>

          <WorkedExample
            title="Mass Percentage Distribution & Average Neutrons in Carbon"
            problem={
              <span>
                Consider two specialized isotopic systems:
                <br />(a) A nitrogen sample containing <InlineMath math="40\% \ ^{14}\text{N}" /> and <InlineMath math="60\% \ ^{15}\text{N}" /> by atom count. Calculate the exact <strong className="text-cyan-300">mass percentage of <InlineMath math="^{14}\text{N}" /></strong>.
                <br />(b) A carbon isotopic sample containing <InlineMath math="80\% \ ^{12}\text{C}" />, <InlineMath math="15\% \ ^{13}\text{C}" />, and <InlineMath math="5\% \ ^{14}\text{C}" /> by atom count. Calculate the exact <strong className="text-lime-300">average atomic mass (<InlineMath math="A_{\text{avg}}" />)</strong> and the <strong className="text-amber-300">average number of neutrons per carbon atom</strong>.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="(a) Calculate Mass Percent of 14-N in Nitrogen Mixture">
                  <BlockMath math={String.raw`\text{In } 100\text{ mol: Mass}_{14} = 40(14) = 560\text{ g}, \ \text{Mass}_{15} = 60(15) = 900\text{ g} \implies \text{Total} = 1460\text{ g}`} />
                  <BlockMath math={String.raw`\%\text{ Mass of }^{14}\text{N} = \frac{560}{1460} \times 100 \approx 38.36\%`} />
                </StepBox>
                <StepBox number={2} title="(b) Compute Average Atomic Mass of Carbon Sample">
                  <BlockMath math={String.raw`A_{\text{avg}} = \frac{80(12) + 15(13) + 5(14)}{100} = \frac{960 + 195 + 70}{100} = 12.25\text{ u}`} />
                </StepBox>
                <StepBox number={3} title="(b) Compute Average Number of Neutrons per Carbon Atom">
                  <BlockMath math={String.raw`n_{\text{avg}} = A_{\text{avg}} - Z_{\text{C}} = 12.25 - 6.00 = 6.25\text{ neutrons per atom}`} />
                  <p className="text-xs text-slate-400 mt-1">
                    Alternatively: <InlineMath math="n_{\text{avg}} = \frac{80(6) + 15(7) + 5(8)}{100} = \frac{480 + 105 + 40}{100} = 6.25\text{ neutrons}" />.
                  </p>
                </StepBox>
              </div>
            }
            result={<InlineMath math="^{14}\text{N Mass \%} \approx 38.36\%, \quad A_{\text{avg}} = 12.25\text{ u}, \quad \text{Neutrons}_{\text{avg}} = 6.25" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Isotopes and Average Atomic Mass</p>
        </footer>
      </article>
    </main>
  );
}
