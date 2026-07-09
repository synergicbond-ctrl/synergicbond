"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-violet-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-violet-300">{title}</h3>
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
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-xs font-bold text-violet-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function EudiometryPart4() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-violet-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
              Module 4 of 6
            </span>
            <span className="text-xs font-bold text-slate-400">Synergic Bond Course Lesson</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Hydrogen, Nitrogen &amp; Oxygen Gas Mixture Firing
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Advanced analytical techniques for gaseous mixtures containing hydrogen (<InlineMath math="\text{H}_2" />), nitrogen (<InlineMath math="\text{N}_2" />), and oxygen (<InlineMath math="\text{O}_2" />). Master hypothesis testing for unknown limiting reagents and evaluate multi-stage sequential firings with secondary oxygen additions inside eudiometer tubes.
          </p>
        </header>

        {/* Section 1: Binary Hydrogen-Nitrogen Combustion */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-violet-300 border-l-4 border-violet-400 pl-3">
            Binary Hydrogen-Nitrogen Combustion Analysis
          </h2>

          <ConceptCard title="Selective Hydrogen Oxidation">
            <p>
              In a mixture of hydrogen and nitrogen (<InlineMath math="\text{H}_2 + \text{N}_2" />), when oxygen is added and sparked, <strong className="text-white">only hydrogen reacts</strong> to form liquid water (<InlineMath math="\text{H}_2\text{O (l)}" />). Nitrogen acts entirely as an inert diluent. Therefore, all oxygen consumption is directly proportional to the initial hydrogen volume according to <InlineMath math="\text{H}_2 + \frac{1}{2}\text{O}_2 \longrightarrow \text{H}_2\text{O (l)}" />.
            </p>
          </ConceptCard>

          <WorkedExample
            title="Exact Oxygen Requirement for Binary Mixture"
            problem={
              <span>
                <InlineMath math="20\text{ mL}" /> of a gaseous mixture containing hydrogen (<InlineMath math="\text{H}_2" />) and nitrogen (<InlineMath math="\text{N}_2" />) exactly requires <InlineMath math="4\text{ mL}" /> of pure oxygen (<InlineMath math="\text{O}_2" />) for complete combustion. Determine the exact composition of the original binary mixture.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Write Selective Oxidation Equation">
                  <BlockMath math={String.raw`\text{H}_2 (g) + \frac{1}{2} \text{O}_2 (g) \longrightarrow \text{H}_2\text{O (l)}`} />
                </StepBox>
                <StepBox number={2} title="Calculate Initial Hydrogen Volume">
                  <p>
                    Reaction stoichiometry dictates that <InlineMath math="1\text{ volume of O}_2" /> consumes exactly <InlineMath math="2\text{ volumes of H}_2" />.
                  </p>
                  <BlockMath math={String.raw`V_{\text{H}_2} = 2 \times V_{\text{O}_2\text{ required}} = 2 \times 4\text{ mL} = 8\text{ mL}`} />
                </StepBox>
                <StepBox number={3} title="Calculate Initial Nitrogen Volume">
                  <BlockMath math={String.raw`V_{\text{N}_2} = V_{\text{total mixture}} - V_{\text{H}_2} = 20 - 8 = 12\text{ mL}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="8\text{ mL } \text{H}_2 \text{ and } 12\text{ mL } \text{N}_2" />}
          />
        </section>

        {/* Section 2: Hypothesis Testing for Unknown Limiting Reagent */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-violet-300 border-l-4 border-violet-400 pl-3">
            Hypothesis Testing for Unknown Limiting Reagents
          </h2>

          <ConceptCard title="Why Hypothesis Testing is Essential">
            <p>
              When both reactant volumes inside a mixture are unknown or unconfirmed, we cannot immediately identify the limiting reagent. In such cases, we formulate a logical hypothesis (e.g., &quot;Assume <InlineMath math="\text{O}_2" /> is the limiting reagent&quot;), calculate the theoretical volume contraction, and check if it matches the observed experimental data. If a mathematical contradiction arises, the alternative reactant (<InlineMath math="\text{H}_2" />) must be the limiting reagent.
            </p>
          </ConceptCard>

          <WorkedExample
            title="Determining Limiting Reagent via Volume Contraction Test"
            problem={
              <span>
                <InlineMath math="20\text{ mL}" /> of a mixture of <InlineMath math="\text{N}_2" /> and <InlineMath math="\text{H}_2" /> gases is mixed with <InlineMath math="8\text{ mL}" /> of pure <InlineMath math="\text{O}_2" /> and sparked. If the total gas volume after cooling drops to exactly <InlineMath math="10\text{ mL}" />, determine the initial volumetric composition of the binary mixture and the final residual gas volumes.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Hypothesis 1: Assume Oxygen is the Limiting Reagent">
                  <p>
                    If all <InlineMath math="8\text{ mL of O}_2" /> reacted completely:
                  </p>
                  <BlockMath math={String.raw`\text{H}_2\text{ consumed} = 2 \times 8 = 16\text{ mL}, \quad \text{O}_2\text{ consumed} = 8\text{ mL}`} />
                  <BlockMath math={String.raw`\text{Theoretical Contraction } \Delta V_{\text{test}} = (16 + 8) - 0 = 24\text{ mL}`} />
                  <p className="text-rose-300">
                    However, the experimental contraction is <InlineMath math="\Delta V_{\text{observed}} = (20 + 8) - 10 = 18\text{ mL}" />.
                    <br />
                    Since <InlineMath math="24\text{ mL} \neq 18\text{ mL}" />, <strong className="text-white">Hypothesis 1 is incorrect</strong>. Oxygen is not the limiting reagent; hydrogen (<InlineMath math="\text{H}_2" />) must be limiting.
                  </p>
                </StepBox>
                <StepBox number={2} title="Hypothesis 2: Hydrogen is Limiting (Let V_H2 = x mL)">
                  <BlockMath math={String.raw`\text{H}_2\text{ consumed} = x\text{ mL}, \quad \text{O}_2\text{ consumed} = \frac{x}{2}\text{ mL}, \quad \text{H}_2\text{O (l) formed} \approx 0\text{ mL}`} />
                  <BlockMath math={String.raw`\text{Contraction } \Delta V = x + \frac{x}{2} = \frac{3x}{2} = 18\text{ mL}`} />
                  <BlockMath math={String.raw`3x = 36 \implies x = 12\text{ mL (Initial H}_2\text{)}`} />
                </StepBox>
                <StepBox number={3} title="Calculate Complete Initial &amp; Final Compositions">
                  <BlockMath math={String.raw`V_{\text{H}_2\text{ initial}} = 12\text{ mL}, \quad V_{\text{N}_2\text{ initial}} = 20 - 12 = 8\text{ mL}`} />
                  <BlockMath math={String.raw`V_{\text{N}_2\text{ final}} = 8\text{ mL (spectator)}, \quad V_{\text{O}_2\text{ final unreacted}} = 8 - \frac{12}{2} = 8 - 6 = 2\text{ mL}`} />
                  <p className="text-slate-400">
                    Verification of final volume: <InlineMath math="8\text{ mL N}_2 + 2\text{ mL O}_2 = 10\text{ mL total final gas}" />.
                  </p>
                </StepBox>
              </div>
            }
            result={<InlineMath math="\text{Initial: } 12\text{ mL } \text{H}_2 + 8\text{ mL } \text{N}_2 \ | \ \text{Final: } 8\text{ mL } \text{N}_2 + 2\text{ mL unreacted } \text{O}_2" />}
          />
        </section>

        {/* Section 3: Multi-Stage Sequential Firing Analysis */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-violet-300 border-l-4 border-violet-400 pl-3">
            Multi-Stage Sequential Firing &amp; Secondary Oxygen Addition
          </h2>

          <ConceptCard title="Comprehensive Multi-Stage Analysis">
            <p>
              In complex eudiometric investigations, a ternary gas mixture (<InlineMath math="\text{N}_2 + \text{H}_2 + \text{O}_2" />) is first fired directly. Depending on whether hydrogen or oxygen was in excess initially, residual gas remains. By subsequently adding a known volume of secondary pure oxygen and sparking the mixture a second time, we can conclusively quantify every component in the original ternary mixture.
            </p>
          </ConceptCard>

          <WorkedExample
            title="Ternary Gas Mixture Firing with Secondary Oxygen Addition"
            problem={
              <span>
                <InlineMath math="90\text{ mL}" /> of a gaseous mixture containing <InlineMath math="\text{N}_2" />, <InlineMath math="\text{H}_2" />, and <InlineMath math="\text{O}_2" /> is sparked inside a eudiometer, causing the total volume to drop to <InlineMath math="30\text{ mL}" /> upon cooling. Next, secondary pure oxygen is added to the residual gases until the total volume rises to <InlineMath math="55\text{ mL}" />. When sparked a second time, the volume contracts to exactly <InlineMath math="28\text{ mL}" />. Determine the exact initial volumes of <InlineMath math="\text{N}_2" />, <InlineMath math="\text{H}_2" />, and <InlineMath math="\text{O}_2" /> inside the original <InlineMath math="90\text{ mL}" /> sample.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Analyze Stage 1: First Explosion &amp; Initial Contraction">
                  <p>
                    Initial mixture <InlineMath math="= 90\text{ mL}" />. Residual gas after first firing <InlineMath math="= 30\text{ mL}" />.
                  </p>
                  <BlockMath math={String.raw`\Delta V_1 = 90 - 30 = 60\text{ mL}`} />
                  <p>
                    Because a second explosion occurs upon adding secondary oxygen, <strong className="text-amber-300">unreacted hydrogen (<InlineMath math="\text{H}_2" />) must have survived the first explosion</strong>. Therefore, all initial oxygen (<InlineMath math="V_{\text{O}_2\text{ initial}} = y\text{ mL}" />) was completely consumed during Stage 1.
                  </p>
                  <BlockMath math={String.raw`\text{In Stage 1: } \text{O}_2\text{ consumed} = y\text{ mL}, \quad \text{H}_2\text{ consumed} = 2y\text{ mL}`} />
                  <BlockMath math={String.raw`\Delta V_1 = 2y + y = 3y = 60\text{ mL} \implies y = 20\text{ mL (Initial O}_2\text{)}`} />
                </StepBox>
                <StepBox number={2} title="Track Residual Gas Before Stage 2 Addition">
                  <p>
                    Let initial hydrogen inside the original sample be <InlineMath math="x\text{ mL}" />.
                    <br />
                    Hydrogen remaining after first firing <InlineMath math="= (x - 2y) = (x - 40)\text{ mL}" />.
                    <br />
                    Total residual gas after first firing (<InlineMath math="30\text{ mL}" />) consists entirely of unreacted <InlineMath math="\text{H}_2" /> and spectator <InlineMath math="\text{N}_2" />:
                  </p>
                  <BlockMath math={String.raw`V_{\text{H}_2\text{ left}} + V_{\text{N}_2} = (x - 40) + V_{\text{N}_2} = 30\text{ mL}`} />
                </StepBox>
                <StepBox number={3} title="Analyze Stage 2: Secondary Oxygen Addition &amp; Second Explosion">
                  <p>
                    Secondary oxygen added <InlineMath math="= 55 - 30 = 25\text{ mL}" />.
                    <br />
                    Second explosion drops volume from <InlineMath math="55\text{ mL}" /> to <InlineMath math="28\text{ mL}" />:
                  </p>
                  <BlockMath math={String.raw`\Delta V_2 = 55 - 28 = 27\text{ mL}`} />
                  <p>
                    In this second explosion, the remaining hydrogen (<InlineMath math="x - 40\text{ mL}" />) reacts completely with the added secondary oxygen:
                  </p>
                  <BlockMath math={String.raw`\Delta V_2 = \frac{3}{2} V_{\text{H}_2\text{ left}} \implies \frac{3}{2} (x - 40) = 27\text{ mL}`} />
                  <BlockMath math={String.raw`x - 40 = \frac{27 \times 2}{3} = 18\text{ mL (Remaining H}_2\text{ before Stage 2)}`} />
                  <BlockMath math={String.raw`x = 18 + 40 = 58\text{ mL (Total Initial H}_2\text{ in original sample)}`} />
                </StepBox>
                <StepBox number={4} title="Solve Initial Nitrogen Volume &amp; Verify Balance">
                  <BlockMath math={String.raw`V_{\text{N}_2} = 90 - (V_{\text{H}_2} + V_{\text{O}_2}) = 90 - (58 + 20) = 12\text{ mL}`} />
                  <p className="text-slate-400">
                    Verification of Stage 1 residual: <InlineMath math="V_{\text{H}_2\text{ left}} (18\text{ mL}) + V_{\text{N}_2} (12\text{ mL}) = 30\text{ mL}" />. Perfect stoichiometric accounting.
                  </p>
                </StepBox>
              </div>
            }
            result={<InlineMath math="58\text{ mL } \text{H}_2 + 20\text{ mL } \text{O}_2 + 12\text{ mL } \text{N}_2" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Eudiometry Module • Module 4: Hydrogen, Nitrogen &amp; Oxygen Gas Mixture Firing</p>
        </footer>
      </article>
    </main>
  );
}
