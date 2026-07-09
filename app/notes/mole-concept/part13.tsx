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

export default function MoleConceptPart13() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Gas Mixtures and Partial Pressure</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Average Molecular Mass of Gas Mixtures, Dalton &amp; Amagat Laws
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Analyzing non-reacting multi-component gas mixtures. Master the fundamental distinction between mass conservation and volumetric non-conservation, apply Dalton&apos;s Law of Partial Pressures and Amagat&apos;s Law of Partial Volumes, and evaluate exact apparent molecular weights from volumetric and molar ratios.
          </p>
        </header>

        {/* Section 1: Mass Conservation vs. Volumetric Non-Conservation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Conservation Laws in Multi-Component Gas Mixtures
          </h2>

          <ConceptCard title="Why Mass Conserves While Total Volume May Not">
            <p>
              When two or more non-reacting gases are mixed in a vessel, total mass is <strong className="text-lime-300">strictly conservative</strong> (<InlineMath math="w_{\text{mix}} = \sum w_i = w_1 + w_2 + \dots" />).
            </p>
            <p>
              However, because gas volume depends on external container boundaries and pressure (<InlineMath math="PV = nRT" />), the actual total volume occupied by the final mixture (<InlineMath math="V_{\text{actual}}" />) equals the volume of the containing vessel, not necessarily the arithmetic sum of the individual gas volumes before mixing (<InlineMath math="V_{\text{mix}} \neq V_1 + V_2" /> in general physical state combining).
            </p>
          </ConceptCard>

          <FormulaBox
            title="Dalton's Law of Partial Pressures & Amagat's Law of Partial Volumes"
            formula={String.raw`P_{\text{total}} = \sum P_i = P_1 + P_2 + \dots \quad \text{(at constant } V_{\text{total}} \text{ and } T \text{)}`}
            description="Amagat's Law: V_total = V₁ + V₂ + ... where V_i represents the partial volume occupied by gas i at the total mixture pressure and temperature."
          />
        </section>

        {/* Section 2: Deriving Average Molecular Mass (M_mix) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Average Apparent Molecular Mass (<InlineMath math="M_{\text{mix}}" />)
          </h2>

          <ConceptCard title="Volume Percent Equals Mole Percent for Ideal Gases">
            <p>
              By Avogadro&apos;s Principle, at identical temperature and pressure, the volume occupied by an ideal gas is directly proportional to the number of moles (<InlineMath math="V \propto n" />). Therefore, inside any homogeneous gas mixture, <strong className="text-amber-300">volume percentage exactly equals mole percentage</strong> (<InlineMath math="\% V_i = \% n_i" />).
            </p>
            <p>
              We define the apparent or average molecular mass (<InlineMath math="M_{\text{mix}}" />) of a non-reacting gas mixture as total mass divided by total moles:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Average Molecular Mass Formula"
            formula={String.raw`M_{\text{mix}} = \frac{w_{\text{total}}}{n_{\text{total}}} = \frac{\sum (n_i \cdot M_i)}{\sum n_i} = \frac{\% V_1 M_1 + \% V_2 M_2 + \dots + \% V_k M_k}{100}`}
            description="Where % V_i is the volumetric percentage (which equals molar percentage) and M_i is the molar mass of component i."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <WorkedExample
              title="Volumetric Mixture: 60% N2 and 40% O2"
              problem={
                <span>
                  Calculate the exact average molecular mass (<InlineMath math="M_{\text{mix}}" />) of a non-reacting atmospheric gas sample consisting of exactly <InlineMath math="60\%" /> Nitrogen (<InlineMath math="\text{N}_2, M = 28\text{ g mol}^{-1}" />) and <InlineMath math="40\%" /> Oxygen (<InlineMath math="\text{O}_2, M = 32\text{ g mol}^{-1}" />) by volume.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Equate Volume Percentage to Mole Percentage">
                    <BlockMath math={String.raw`\% n_{\text{N}_2} = 60\%, \quad \% n_{\text{O}_2} = 40\%`} />
                  </StepBox>
                  <StepBox number={2} title="Apply Weighted Average Formula">
                    <BlockMath math={String.raw`M_{\text{mix}} = \frac{60(28) + 40(32)}{100} = \frac{1680 + 1280}{100}`} />
                  </StepBox>
                  <StepBox number={3} title="Compute Apparent Molecular Mass">
                    <BlockMath math={String.raw`M_{\text{mix}} = \frac{2960}{100} = 29.60\text{ g mol}^{-1}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="M_{\text{mix}} = 29.60\text{ g mol}^{-1}" />}
            />

            <WorkedExample
              title="Molar Ratio Mixture: SO2 and SO3 in 2:3 Ratio"
              problem={
                <span>
                  A specialized industrial gas flue contains sulfur dioxide (<InlineMath math="\text{SO}_2, M = 64\text{ g mol}^{-1}" />) and sulfur trioxide (<InlineMath math="\text{SO}_3, M = 80\text{ g mol}^{-1}" />) mixed in a stoichiometric mole ratio of <InlineMath math="2 : 3" />. Calculate the average molecular mass (<InlineMath math="M_{\text{mix}}" />) of the flue gas.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Express Component Moles Using Ratio Factor">
                    <BlockMath math={String.raw`n_{\text{SO}_2} = 2k, \quad n_{\text{SO}_3} = 3k \implies n_{\text{total}} = 5k`} />
                  </StepBox>
                  <StepBox number={2} title="Compute Total Mass of the Mixture">
                    <BlockMath math={String.raw`w_{\text{total}} = 2k(64) + 3k(80) = 128k + 240k = 368k\text{ grams}`} />
                  </StepBox>
                  <StepBox number={3} title="Divide Total Mass by Total Moles">
                    <BlockMath math={String.raw`M_{\text{mix}} = \frac{368k}{5k} = 73.60\text{ g mol}^{-1}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="M_{\text{mix}} = 73.60\text{ g mol}^{-1}" />}
            />
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Gas Mixtures and Partial Pressure</p>
        </footer>
      </article>
    </main>
  );
}
