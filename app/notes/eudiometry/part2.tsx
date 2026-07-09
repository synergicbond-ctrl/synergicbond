"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-amber-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-amber-300">{title}</h3>
    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">{children}</div>
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
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function EudiometryPart2() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-amber-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Module 2 of 6
            </span>
            <span className="text-xs font-bold text-slate-400">Synergic Bond Course Lesson</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Combustion &amp; Final Gas Composition Analysis
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Systematic treatment of gas-phase combustion reactions. Learn how to identify limiting reagents directly from volume ratios, solve simultaneous equations for multi-component gas mixtures, and track changes in total volume during high-temperature carbon reductions and electric discharge transformations.
          </p>
        </header>

        {/* Section 1: Limiting Reagents in Gas Volume Problems */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            Limiting Reagents &amp; Combustion Stoichiometry
          </h2>

          <ConceptCard title="Identifying the Limiting Gas Volume">
            <p>
              Just as in molar stoichiometry, when two reactant gases are mixed in arbitrary volumes that do not perfectly match their stoichiometric coefficients, one reactant will be completely consumed (<strong className="text-amber-300">Limiting Reagent</strong>) while the other remains partially unreacted (<strong className="text-cyan-300">Excess Reagent</strong>).
            </p>
            <p>
              To determine the limiting reagent in eudiometry, divide each initial gas volume by its stoichiometric coefficient in the balanced equation. The gas yielding the smaller quotient is the limiting reagent and dictates the exact volumes of all products formed.
            </p>
          </ConceptCard>

          <WorkedExample
            title="Carbon Monoxide Combustion with Excess Oxygen"
            problem={
              <span>
                A gas mixture containing <InlineMath math="25\text{ mL}" /> of carbon monoxide (<InlineMath math="\text{CO}" />) and <InlineMath math="15\text{ mL}" /> of pure oxygen (<InlineMath math="\text{O}_2" />) is fired inside a eudiometer. Determine the exact final volumetric composition of the residual gas mixture after cooling back to initial temperature.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Write Balanced Combustion Equation">
                  <BlockMath math={String.raw`\text{CO} (g) + \frac{1}{2} \text{O}_2 (g) \longrightarrow \text{CO}_2 (g)`} />
                </StepBox>
                <StepBox number={2} title="Determine Limiting Reagent">
                  <p>
                    Stoichiometry shows that <InlineMath math="1\text{ volume of CO}" /> requires exactly <InlineMath math="0.5\text{ volumes of O}_2" />.
                    <br />
                    For <InlineMath math="25\text{ mL of CO}" />, required oxygen is <InlineMath math="25 \times 0.5 = 12.5\text{ mL}" />.
                    <br />
                    Since <InlineMath math="15\text{ mL of O}_2" /> is present initially (<InlineMath math="15 > 12.5" />), <strong className="text-amber-300">CO is the limiting reagent</strong> and <InlineMath math="\text{O}_2" /> is in excess.
                  </p>
                </StepBox>
                <StepBox number={3} title="Calculate Residual Gas Volumes">
                  <BlockMath math={String.raw`V_{\text{CO}_2\text{ formed}} = V_{\text{CO consumed}} = 25\text{ mL}`} />
                  <BlockMath math={String.raw`V_{\text{O}_2\text{ remaining}} = 15\text{ mL (initial)} - 12.5\text{ mL (consumed)} = 2.5\text{ mL}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="25\text{ mL } \text{CO}_2 + 2.5\text{ mL unreacted } \text{O}_2 \ (\text{Total Final Volume } = 27.5\text{ mL})" />}
          />
        </section>

        {/* Section 2: Simultaneous Equations for Gas Mixtures */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            Simultaneous Equations for Multi-Component Gas Mixtures
          </h2>

          <ConceptCard title="Analyzing Binary Hydrocarbon Mixtures">
            <p>
              When a mixture containing two different hydrocarbons is burned, both components produce carbon dioxide independently. By establishing two simultaneous equations—one representing the total initial mixture volume and the other representing the total carbon dioxide volume produced—we can determine the exact volume of each gas in the initial mixture.
            </p>
          </ConceptCard>

          <WorkedExample
            title="Methane and Propane Mixture Analysis"
            problem={
              <span>
                <InlineMath math="20\text{ mL}" /> of a gaseous mixture of methane (<InlineMath math="\text{CH}_4" />) and propane (<InlineMath math="\text{C}_3\text{H}_8" />) undergoes complete combustion with excess oxygen, producing exactly <InlineMath math="46\text{ mL}" /> of carbon dioxide (<InlineMath math="\text{CO}_2" />). Determine the individual initial volumes of methane and propane.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Define Unknown Variables &amp; Total Volume Equation">
                  <p>
                    Let initial volume of <InlineMath math="\text{CH}_4 = x\text{ mL}" /> and <InlineMath math="\text{C}_3\text{H}_8 = y\text{ mL}" />.
                  </p>
                  <BlockMath math={String.raw`x + y = 20 \quad \text{--- (Equation 1)}`} />
                </StepBox>
                <StepBox number={2} title="Write Combustion Stoichiometry for Each Hydrocarbon">
                  <BlockMath math={String.raw`\text{CH}_4 + 2\text{O}_2 \longrightarrow \text{CO}_2 + 2\text{H}_2\text{O (l)} \implies x\text{ mL CH}_4 \text{ produces } x\text{ mL CO}_2`} />
                  <BlockMath math={String.raw`\text{C}_3\text{H}_8 + 5\text{O}_2 \longrightarrow 3\text{CO}_2 + 4\text{H}_2\text{O (l)} \implies y\text{ mL C}_3\text{H}_8 \text{ produces } 3y\text{ mL CO}_2`} />
                </StepBox>
                <StepBox number={3} title="Formulate CO₂ Production Equation &amp; Solve">
                  <BlockMath math={String.raw`x + 3y = 46 \quad \text{--- (Equation 2)}`} />
                  <p>Subtracting Equation 1 from Equation 2:</p>
                  <BlockMath math={String.raw`(x + 3y) - (x + y) = 46 - 20 \implies 2y = 26 \implies y = 13\text{ mL (Propane)}`} />
                  <BlockMath math={String.raw`x = 20 - 13 = 7\text{ mL (Methane)}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="7\text{ mL of } \text{CH}_4 \text{ and } 13\text{ mL of } \text{C}_3\text{H}_8" />}
          />
        </section>

        {/* Section 3: Volume Expansion and Contraction in Non-Combustion Reactions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            Volume Changes in Non-Combustion Gas Reactions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <WorkedExample
              title="Carbon Reduction of Carbon Dioxide"
              problem={
                <span>
                  When <InlineMath math="500\text{ mL}" /> of carbon dioxide (<InlineMath math="\text{CO}_2" />) gas is passed over red-hot charcoal (<InlineMath math="\text{C (s)}" />), part of the gas is reduced to carbon monoxide (<InlineMath math="\text{CO}" />), and the total gas volume increases to <InlineMath math="700\text{ mL}" /> under constant conditions. Calculate the final volume of <InlineMath math="\text{CO}" /> and remaining <InlineMath math="\text{CO}_2" />.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Reaction Stoichiometry">
                    <BlockMath math={String.raw`\text{CO}_2 (g) + \text{C (s)} \longrightarrow 2\text{CO (g)}`} />
                  </StepBox>
                  <StepBox number={2} title="Volume Balance">
                    <p>
                      Let <InlineMath math="x\text{ mL}" /> of <InlineMath math="\text{CO}_2" /> react with solid carbon (<InlineMath math="V_{\text{solid}} \approx 0" />).
                      <br />
                      Volume of <InlineMath math="\text{CO}" /> formed <InlineMath math="= 2x\text{ mL}" />.
                      <br />
                      Volume of <InlineMath math="\text{CO}_2" /> remaining <InlineMath math="= 500 - x\text{ mL}" />.
                    </p>
                  </StepBox>
                  <StepBox number={3} title="Solve Total Final Volume">
                    <BlockMath math={String.raw`V_{\text{final}} = (500 - x) + 2x = 500 + x = 700\text{ mL} \implies x = 200\text{ mL}`} />
                    <BlockMath math={String.raw`V_{\text{CO}} = 2(200) = 400\text{ mL}, \quad V_{\text{CO}_2} = 500 - 200 = 300\text{ mL}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="400\text{ mL } \text{CO} + 300\text{ mL } \text{CO}_2" />}
            />

            <WorkedExample
              title="Silent Electric Discharge Ozonisation of Oxygen"
              problem={
                <span>
                  When <InlineMath math="20\text{ mL}" /> of pure oxygen (<InlineMath math="\text{O}_2" />) is subjected to a silent electric discharge, partial conversion to ozone (<InlineMath math="\text{O}_3" />) occurs, reducing the total gas volume to <InlineMath math="14\text{ mL}" />. Calculate the volume of ozone produced and unreacted oxygen.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Ozonisation Reaction">
                    <BlockMath math={String.raw`3\text{O}_2 (g) \stackrel{\text{discharge}}{\longrightarrow} 2\text{O}_3 (g)`} />
                  </StepBox>
                  <StepBox number={2} title="Algebraic Volume Tracking">
                    <p>
                      Let <InlineMath math="x\text{ mL}" /> of <InlineMath math="\text{O}_2" /> undergo conversion.
                      <br />
                      Volume of <InlineMath math="\text{O}_3" /> formed <InlineMath math="= \frac{2x}{3}\text{ mL}" />.
                      <br />
                      Volume of <InlineMath math="\text{O}_2" /> remaining <InlineMath math="= 20 - x\text{ mL}" />.
                    </p>
                  </StepBox>
                  <StepBox number={3} title="Solve Contraction Equation">
                    <BlockMath math={String.raw`V_{\text{final}} = (20 - x) + \frac{2x}{3} = 20 - \frac{x}{3} = 14\text{ mL}`} />
                    <BlockMath math={String.raw`\frac{x}{3} = 6 \implies x = 18\text{ mL (O}_2\text{ reacted)}`} />
                    <BlockMath math={String.raw`V_{\text{O}_3} = \frac{2(18)}{3} = 12\text{ mL}, \quad V_{\text{O}_2} = 20 - 18 = 2\text{ mL}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="12\text{ mL } \text{O}_3 + 2\text{ mL unreacted } \text{O}_2" />}
            />
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Eudiometry Module • Module 2: Combustion &amp; Final Gas Composition Analysis</p>
        </footer>
      </article>
    </main>
  );
}
