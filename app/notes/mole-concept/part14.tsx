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

export default function MoleConceptPart14() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Ozonized Oxygen and Mixture Analysis</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Advanced Gas Mixture Analysis, Vapour Density &amp; Ozonized Oxygen
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Tackling high-complexity multi-component gas mixtures. Calculate average molecular weight from mass composition ratios, extract individual component volume and mass percentages from mixture vapour density data, and analyze classical ozonized oxygen conversion kinetics.
          </p>
        </header>

        {/* Section 1: Average Molecular Mass by Mass Composition */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Mixture Analysis via Mass Proportions
          </h2>

          <ConceptCard title="Why Mass Percentage Requires Reciprocal Molar Summation">
            <p>
              When a gas mixture is specified by mass percentage (<InlineMath math="\% w_i" />) instead of volume percentage, we cannot simply take a linear weighted average of molar masses. Instead, we must sum individual component moles (<InlineMath math="n_i = w_i / M_i" />) and divide total mass by total moles:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Mass-Based Average Molecular Mass Formula"
            formula={String.raw`M_{\text{mix}} = \frac{w_{\text{total}}}{n_{\text{total}}} = \frac{100}{\left(\frac{\% w_1}{M_1}\right) + \left(\frac{\% w_2}{M_2}\right) + \dots}`}
            description="For a 100 g mixture containing 90 g H₂ and 10 g He: M_mix = 100 / (90/2 + 10/4) = 100 / 47.5 = 2.105 g/mol."
          />

          <WorkedExample
            title="Mixture of Methane & Ethane from Atomic Composition Ratio"
            problem={
              <span>
                A gaseous hydrocarbon mixture contains methane (<InlineMath math="\text{CH}_4, M = 16" />) and ethane (<InlineMath math="\text{C}_2\text{H}_6, M = 30" />) such that the total number of carbon (<InlineMath math="\text{C}" />) atoms and total number of hydrogen (<InlineMath math="\text{H}" />) atoms are present in an exact atomic ratio of <InlineMath math="2 : 7" />. Calculate the average molecular mass (<InlineMath math="M_{\text{mix}}" />) of the hydrocarbon mixture.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Define Unknown Molar Variables">
                  <BlockMath math={String.raw`\text{Let } n_{\text{CH}_4} = x\text{ mol}, \quad n_{\text{C}_2\text{H}_6} = y\text{ mol}`} />
                </StepBox>
                <StepBox number={2} title="Express Total C and H Atom Inventories">
                  <BlockMath math={String.raw`N_{\text{C}} = x + 2y, \quad N_{\text{H}} = 4x + 6y`} />
                </StepBox>
                <StepBox number={3} title="Set Up Ratio Equation and Extract Relationship Between x and y">
                  <BlockMath math={String.raw`\frac{x + 2y}{4x + 6y} = \frac{2}{7} \implies 7(x + 2y) = 2(4x + 6y) \implies 7x + 14y = 8x + 12y \implies x = 2y`} />
                </StepBox>
                <StepBox number={4} title="Substitute x = 2y into Average Molecular Mass Formula">
                  <BlockMath math={String.raw`M_{\text{mix}} = \frac{x(16) + y(30)}{x + y} = \frac{2y(16) + y(30)}{2y + y} = \frac{32y + 30y}{3y} = \frac{62}{3} \approx 20.67\text{ g mol}^{-1}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="M_{\text{mix}} = 20.67\text{ g mol}^{-1}" />}
          />
        </section>

        {/* Section 2: Vapour Density of Binary Gas Mixtures */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Extracting Component Percentages from Mixture Vapour Density
          </h2>

          <WorkedExample
            title="Analyzing CH4 & SO2 Mixture from Vapour Density Data"
            problem={
              <span>
                The experimental Vapour Density (<InlineMath math="\text{VD}" />) of a binary gas mixture consisting of methane (<InlineMath math="\text{CH}_4, M = 16" />) and sulfur dioxide (<InlineMath math="\text{SO}_2, M = 80" />) is precisely <InlineMath math="30.0" />. Calculate:
                <br />(a) The percentage of methane by volume (<InlineMath math="\% V_{\text{CH}_4}" />) and by mole (<InlineMath math="\% n_{\text{CH}_4}" />).
                <br />(b) The exact percentage of methane by mass (<InlineMath math="\% w_{\text{CH}_4}" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Calculate Apparent Molecular Mass of the Mixture">
                  <BlockMath math={String.raw`M_{\text{mix}} = 2 \times \text{VD} = 2 \times 30.0 = 60.0\text{ g mol}^{-1}`} />
                </StepBox>
                <StepBox number={2} title="Set Up Volumetric (Molar) Balance for 100 Moles of Mixture">
                  <BlockMath math={String.raw`\text{Let } n_{\text{CH}_4} = x\text{ mol}, \quad n_{\text{SO}_2} = (100 - x)\text{ mol}`} />
                  <BlockMath math={String.raw`60.0 = \frac{x(16) + (100 - x)(80)}{100} \implies 6000 = 16x + 8000 - 80x \implies 64x = 2000 \implies x = 31.25`} />
                </StepBox>
                <StepBox number={3} title="Conclude Volume Percent and Mole Percent">
                  <BlockMath math={String.raw`\% V_{\text{CH}_4} = \% n_{\text{CH}_4} = 31.25\%`} />
                </StepBox>
                <StepBox number={4} title="Compute Mass Distribution and Mass Percentage of Methane">
                  <BlockMath math={String.raw`w_{\text{CH}_4} = 31.25 \times 16 = 500\text{ g}, \quad w_{\text{SO}_2} = 68.75 \times 80 = 5500\text{ g} \implies w_{\text{total}} = 6000\text{ g}`} />
                  <BlockMath math={String.raw`\% w_{\text{CH}_4} = \frac{500}{6000} \times 100 = \frac{25}{3} \approx 8.33\%`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="\% V_{\text{CH}_4} = \% n_{\text{CH}_4} = 31.25\%, \quad \% w_{\text{CH}_4} = 8.33\%" />}
          />
        </section>

        {/* Section 3: Classical Ozonized Oxygen Volumetric System */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Ozonized Oxygen Volumetric System Analysis
          </h2>

          <WorkedExample
            title="Determining Ozone Yield in Ozonized Oxygen at STP"
            problem={
              <span>
                Exactly <InlineMath math="1.00\text{ gram}" /> of ozonized oxygen (a mixture of <InlineMath math="\text{O}_2" /> and <InlineMath math="\text{O}_3" />) occupies a volume of exactly <InlineMath math="600\text{ mL}" /> when measured at <InlineMath math="0^\circ\text{C}" /> and <InlineMath math="1.0\text{ atm}" />. Calculate:
                <br />(a) The percentage of ozone (<InlineMath math="\text{O}_3, M = 48" />) by volume (<InlineMath math="\% V_{\text{O}_3}" />).
                <br />(b) The exact percentage of ozone by mass (<InlineMath math="\% w_{\text{O}_3}" />).
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Determine Apparent Molar Mass of the Ozonized Gas">
                  <BlockMath math={String.raw`n_{\text{total}} = \frac{600\text{ mL}}{22,400\text{ mL mol}^{-1}} = \frac{3}{112}\text{ mol} \implies M_{\text{mix}} = \frac{1.00\text{ g}}{3 / 112\text{ mol}} = \frac{112}{3} \approx 37.33\text{ g mol}^{-1}`} />
                </StepBox>
                <StepBox number={2} title="Set Up Volumetric Balance with Partial Volumes">
                  <BlockMath math={String.raw`\text{Let } V_{\text{O}_3} = x\text{ mL}, \quad V_{\text{O}_2} = (600 - x)\text{ mL}`} />
                  <BlockMath math={String.raw`1.00\text{ g} = \left(\frac{x}{22400}\right)(48) + \left(\frac{600 - x}{22400}\right)(32) \implies 22400 = 48x + 19200 - 32x \implies 16x = 3200 \implies x = 200\text{ mL}`} />
                </StepBox>
                <StepBox number={3} title="Conclude Volume Percentage of Ozone">
                  <BlockMath math={String.raw`\% V_{\text{O}_3} = \frac{200\text{ mL}}{600\text{ mL}} \times 100 = 33.33\%`} />
                </StepBox>
                <StepBox number={4} title="Compute Mass Distribution and Mass Percentage of Ozone">
                  <BlockMath math={String.raw`w_{\text{O}_3} = \left(\frac{200}{22400}\right) \times 48 = \frac{9600}{22400} = \frac{3}{7}\text{ g} \approx 0.4286\text{ g}`} />
                  <BlockMath math={String.raw`\% w_{\text{O}_3} = \frac{3/7\text{ g}}{1.00\text{ g}} \times 100 \approx 42.86\%`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="\% V_{\text{O}_3} = 33.33\%, \quad \% w_{\text{O}_3} = 42.86\%" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Ozonized Oxygen and Mixture Analysis</p>
        </footer>
      </article>
    </main>
  );
}
