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

export default function EudiometryPart5() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Module 5 of 6
            </span>
            <span className="text-xs font-bold text-slate-400">Synergic Bond Course Lesson</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Absorption-Based Gas Analysis &amp; Selective Scrubbing
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Master the quantitative determination of complex gas mixtures using selective chemical absorbents. Learn how sequential scrubbing with aqueous potassium hydroxide (<InlineMath math="\text{KOH}" />), alkaline pyrogallol, ammoniacal cuprous chloride (<InlineMath math="\text{Cu}_2\text{Cl}_2" />), and turpentine oil allows precise isolation of individual gas volumes without combustion sparks.
          </p>
        </header>

        {/* Section 1: The Six Selective Chemical Absorbents */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            The Selective Chemical Absorbents
          </h2>

          <ConceptCard title="Principles of Selective Gas Scrubbing">
            <p>
              When a multi-component gas mixture is introduced into a eudiometer over mercury, individual gases can be selectively removed by injecting specific liquid or solid chemical reagents directly into the tube. Each reagent dissolves or chemically binds one unique gas (or class of gases), resulting in a measurable drop in total gas volume (<strong className="text-cyan-300">Volume Contraction due to Absorption</strong>).
            </p>
          </ConceptCard>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
            <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
              Comprehensive Reference Table of Selective Absorbents
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-950/60 text-slate-300">
                    <th className="p-3">Reagent / Absorbent</th>
                    <th className="p-3">Gases Selectively Absorbed</th>
                    <th className="p-3">Underlying Chemical Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">1. Aqueous / Alcoholic KOH (or NaOH)</td>
                    <td className="p-3 font-bold text-rose-300"><InlineMath math="\text{CO}_2, \text{SO}_2, \text{Cl}_2, \text{NO}_2, \text{H}_2\text{S}" /></td>
                    <td className="p-3">Acid-base neutralization forming soluble potassium salts (e.g., <InlineMath math="2\text{KOH} + \text{CO}_2 \rightarrow \text{K}_2\text{CO}_3 + \text{H}_2\text{O}" />).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">2. Alkaline Pyrogallol Solution</td>
                    <td className="p-3 font-bold text-emerald-300">Oxygen (<InlineMath math="\text{O}_2" />)</td>
                    <td className="p-3">Rapid chemical oxidation of polyphenolic pyrogallol (<InlineMath math="1,2,3\text{-trihydroxybenzene}" />) in alkaline medium.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">3. Turpentine Oil (or Oil of Cinnamon)</td>
                    <td className="p-3 font-bold text-amber-300">Ozone (<InlineMath math="\text{O}_3" />)</td>
                    <td className="p-3">Electrophilic addition of highly reactive ozone across unsaturated alkene double bonds (ozonide formation).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">4. Ammoniacal Cuprous Chloride (<InlineMath math="\text{Cu}_2\text{Cl}_2" />)</td>
                    <td className="p-3 font-bold text-violet-300">Carbon Monoxide (<InlineMath math="\text{CO}" />) &amp; Alkynes (<InlineMath math="\text{C}_2\text{H}_2" />)</td>
                    <td className="p-3">Coordination complexation forming <InlineMath math="[\text{Cu(CO)Cl(NH}_3\text{)}_2]" /> or red acetylide precipitates (<InlineMath math="\text{Cu}_2\text{C}_2" />).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">5. Anhydrous <InlineMath math="\text{CaCl}_2" /> / Conc. <InlineMath math="\text{H}_2\text{SO}_4" /> / <InlineMath math="\text{P}_4\text{O}_{10}" /></td>
                    <td className="p-3 font-bold text-cyan-200">Water Vapor / Moisture (<InlineMath math="\text{H}_2\text{O (g)}" />)</td>
                    <td className="p-3">Desiccation and hydration complex formation (e.g., <InlineMath math="\text{CaCl}_2 \cdot 6\text{H}_2\text{O}" />).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">6. Heated Platinum (<InlineMath math="\text{Pt}" />) / Palladium (<InlineMath math="\text{Pd}" />)</td>
                    <td className="p-3 font-bold text-slate-100">Hydrogen (<InlineMath math="\text{H}_2" />)</td>
                    <td className="p-3">Surface catalytic occlusion/adsorption of hydrogen into metallic crystal lattices.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-amber-300 font-semibold pt-2">
              Note: When scrubbing a gas mixture sequentially, reagent order is critical. For instance, KOH must always be introduced to absorb <InlineMath math="\text{CO}_2" /> before introducing alkaline pyrogallol, because alkaline pyrogallol (being basic) also absorbs <InlineMath math="\text{CO}_2" /> along with <InlineMath math="\text{O}_2" />!
            </p>
          </div>
        </section>

        {/* Section 2: Sequential Gas Scrubbing Analysis */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Sequential Gas Scrubbing &amp; Volumetric Isolation
          </h2>

          <WorkedExample
            title="Analysis of Combustion Residual Gas via Sequential Scrubbing"
            problem={
              <span>
                A <InlineMath math="100\text{ mL}" /> gaseous mixture consisting of carbon dioxide (<InlineMath math="\text{CO}_2" />), carbon monoxide (<InlineMath math="\text{CO}" />), and oxygen (<InlineMath math="\text{O}_2" />) is passed sequentially through three absorption reagents inside a eudiometer.
                <br />
                1. Passing through aqueous <InlineMath math="\text{KOH}" /> reduces the total volume to <InlineMath math="60\text{ mL}" />.
                <br />
                2. Passing the residual gas through alkaline pyrogallol further reduces the volume to <InlineMath math="15\text{ mL}" />.
                <br />
                3. Finally, passing the remaining gas through ammoniacal cuprous chloride reduces the volume to <InlineMath math="0\text{ mL}" />.
                <br />
                Calculate the exact initial percentage composition by volume of the three gases inside the original sample.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Calculate CO₂ Volume from KOH Absorption Drop">
                  <p>Aqueous <InlineMath math="\text{KOH}" /> selectively absorbs acidic carbon dioxide (<InlineMath math="\text{CO}_2" />):</p>
                  <BlockMath math={String.raw`V_{\text{CO}_2} = V_{\text{initial}} - V_{\text{after KOH}} = 100 - 60 = 40\text{ mL} \implies 40\% \text{ by volume}`} />
                </StepBox>
                <StepBox number={2} title="Calculate O₂ Volume from Pyrogallol Absorption Drop">
                  <p>Alkaline pyrogallol selectively absorbs oxygen (<InlineMath math="\text{O}_2" />):</p>
                  <BlockMath math={String.raw`V_{\text{O}_2} = V_{\text{after KOH}} - V_{\text{after pyrogallol}} = 60 - 15 = 45\text{ mL} \implies 45\% \text{ by volume}`} />
                </StepBox>
                <StepBox number={3} title="Calculate CO Volume from Cuprous Chloride Absorption Drop">
                  <p>Ammoniacal <InlineMath math="\text{Cu}_2\text{Cl}_2" /> selectively absorbs carbon monoxide (<InlineMath math="\text{CO}" />):</p>
                  <BlockMath math={String.raw`V_{\text{CO}} = V_{\text{after pyrogallol}} - V_{\text{after Cu}_2\text{Cl}_2} = 15 - 0 = 15\text{ mL} \implies 15\% \text{ by volume}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="40\% \ \text{CO}_2 + 45\% \ \text{O}_2 + 15\% \ \text{CO}" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Eudiometry Module • Module 5: Absorption-Based Gas Analysis &amp; Selective Scrubbing</p>
        </footer>
      </article>
    </main>
  );
}
