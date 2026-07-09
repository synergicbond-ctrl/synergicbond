"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-emerald-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-emerald-300">{title}</h3>
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
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function EudiometryPart3() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Module 3 of 6
            </span>
            <span className="text-xs font-bold text-slate-400">Synergic Bond Course Lesson</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Volume Contraction &amp; Residual Gas Analysis
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Detailed investigation of volume contraction ($\Delta V$) upon combustion and cooling inside a eudiometer tube. Master the accounting of spectator gases like nitrogen ($N_2$) when burning fuels with air, and evaluate multi-component industrial fuel mixtures (such as Coal Gas) with high numerical precision.
          </p>
        </header>

        {/* Section 1: Theory of Volume Contraction */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-300 border-l-4 border-emerald-400 pl-3">
            Theory of Volume Contraction (<InlineMath math="\Delta V" />)
          </h2>

          <ConceptCard title="Why Does Volume Contraction Occur Upon Explosion?">
            <p>
              When a gaseous reactant mixture is sparked inside a eudiometer over mercury, a rapid combustion reaction occurs at elevated temperature. After the explosion, the tube is allowed to cool back to room temperature (<InlineMath math="\approx 25^\circ\text{C}" />). During this cooling process, two critical changes reduce the total gas volume:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xs text-slate-300 pt-1">
              <li>
                <strong className="text-white">Condensation of Water Vapor:</strong> Any steam (<InlineMath math="\text{H}_2\text{O (g)}" />) produced during combustion condenses completely into liquid water (<InlineMath math="\text{H}_2\text{O (l)}" />). Because the volume occupied by liquid water is negligible compared to gas volume, this represents a complete drop of <InlineMath math="100\%" /> of the water vapor volume.
              </li>
              <li>
                <strong className="text-white">Net Stoichiometric Gas Mole Reduction:</strong> In many combustion reactions, the total number of gaseous product moles (<InlineMath math="\text{CO}_2" />) is less than the total number of gaseous reactant moles consumed (<InlineMath math="\text{C}_x\text{H}_y + \text{O}_2" />).
              </li>
            </ul>
          </ConceptCard>

          <FormulaBox
            title="General Volume Contraction Formula Upon Firing and Cooling"
            formula={String.raw`\Delta V_{\text{contraction}} = V_{\text{initial total gas}} - V_{\text{final residual gas after cooling}}`}
            description="Note: V_initial includes all combustible gases plus the total volume of oxygen and spectator gases (like N_2 from air) introduced into the tube."
          />
        </section>

        {/* Section 2: Ethane Combustion with Air */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-300 border-l-4 border-emerald-400 pl-3">
            Combustion with Air: Spectator Nitrogen Accounting
          </h2>

          <WorkedExample
            title="Ethane Combustion in Excess Air"
            problem={
              <span>
                <InlineMath math="20\text{ mL}" /> of ethane (<InlineMath math="\text{C}_2\text{H}_6" />) gas is mixed with <InlineMath math="500\text{ mL}" /> of atmospheric air containing exactly <InlineMath math="20\%" /> oxygen (<InlineMath math="\text{O}_2" />) and <InlineMath math="80\%" /> nitrogen (<InlineMath math="\text{N}_2" />) by volume. The mixture is exploded inside a eudiometer and cooled back to initial room temperature. Calculate the net contraction in volume (<InlineMath math="\Delta V" />).
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Resolve Initial Air Components &amp; Total Initial Volume">
                  <BlockMath math={String.raw`V_{\text{O}_2\text{ in air}} = 500 \times \frac{20}{100} = 100\text{ mL}, \quad V_{\text{N}_2\text{ in air}} = 500 \times \frac{80}{100} = 400\text{ mL}`} />
                  <BlockMath math={String.raw`V_{\text{initial}} = V_{\text{C}_2\text{H}_6} + V_{\text{O}_2} + V_{\text{N}_2} = 20 + 100 + 400 = 520\text{ mL}`} />
                </StepBox>
                <StepBox number={2} title="Write Balanced Combustion Equation &amp; Identify Limiting Reagent">
                  <BlockMath math={String.raw`\text{C}_2\text{H}_6 (g) + \frac{7}{2} \text{O}_2 (g) \longrightarrow 2\text{CO}_2 (g) + 3\text{H}_2\text{O (l)}`} />
                  <p>
                    For <InlineMath math="20\text{ mL C}_2\text{H}_6" />, oxygen required <InlineMath math="= 20 \times 3.5 = 70\text{ mL}" />.
                    <br />
                    Since <InlineMath math="100\text{ mL of O}_2" /> is present (<InlineMath math="100 > 70" />), <strong className="text-amber-300">ethane is limiting</strong> and oxygen is in excess (<InlineMath math="100 - 70 = 30\text{ mL unreacted O}_2" />).
                  </p>
                </StepBox>
                <StepBox number={3} title="Calculate Final Residual Gas Volume &amp; Contraction">
                  <BlockMath math={String.raw`V_{\text{CO}_2\text{ formed}} = 2 \times 20 = 40\text{ mL}, \quad V_{\text{H}_2\text{O (l)}} \approx 0\text{ mL}`} />
                  <BlockMath math={String.raw`V_{\text{final}} = V_{\text{CO}_2\text{ formed}} + V_{\text{O}_2\text{ unused}} + V_{\text{N}_2\text{ spectator}} = 40 + 30 + 400 = 470\text{ mL}`} />
                  <BlockMath math={String.raw`\Delta V = V_{\text{initial}} - V_{\text{final}} = 520 - 470 = 50\text{ mL}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="\Delta V_{\text{contraction}} = 50\text{ mL}" />}
          />
        </section>

        {/* Section 3: Multi-Component Fuel Combustion (Coal Gas) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-300 border-l-4 border-emerald-400 pl-3">
            Multi-Component Fuel Mixture Combustion: Coal Gas
          </h2>

          <ConceptCard title="Industrial Coal Gas Analysis">
            <p>
              Coal gas is an industrial fuel mixture composed of several combustible gases: carbon monoxide (<InlineMath math="\text{CO}" />), methane (<InlineMath math="\text{CH}_4" />), acetylene (<InlineMath math="\text{C}_2\text{H}_2" />), and hydrogen (<InlineMath math="\text{H}_2" />). When a known volume of coal gas is burned with excess oxygen, each component reacts according to its individual stoichiometry. The total oxygen consumed and total carbon dioxide produced equal the sum of the contributions from every combustible component.
            </p>
          </ConceptCard>

          <WorkedExample
            title="Complete Combustion of Coal Gas Sample"
            problem={
              <span>
                A sample of coal gas contains <InlineMath math="30\% \text{ CO}" />, <InlineMath math="40\% \text{ CH}_4" />, <InlineMath math="20\% \text{ C}_2\text{H}_2" />, and <InlineMath math="10\% \text{ H}_2" /> by volume. <InlineMath math="100\text{ mL}" /> of this coal gas sample is mixed with <InlineMath math="400\text{ mL}" /> of pure oxygen (<InlineMath math="\text{O}_2" />) and exploded inside a eudiometer. Determine the exact volumetric composition of the final residual gas mixture after cooling.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Resolve Initial Volumes of Each Combustible Component inside 100 mL Coal Gas">
                  <BlockMath math={String.raw`V_{\text{CO}} = 30\text{ mL}, \quad V_{\text{CH}_4} = 40\text{ mL}, \quad V_{\text{C}_2\text{H}_2} = 20\text{ mL}, \quad V_{\text{H}_2} = 10\text{ mL}`} />
                </StepBox>
                <StepBox number={2} title="Calculate Oxygen Consumption &amp; CO₂ Production for Each Component">
                  <div className="space-y-2 border-l-2 border-slate-700 pl-3">
                    <div>
                      <strong className="text-cyan-300">1. Carbon Monoxide (<InlineMath math="30\text{ mL}" />):</strong>
                      <BlockMath math={String.raw`\text{CO} + \frac{1}{2}\text{O}_2 \longrightarrow \text{CO}_2 \implies \text{O}_2\text{ used} = 15\text{ mL}, \ \text{CO}_2\text{ formed} = 30\text{ mL}`} />
                    </div>
                    <div>
                      <strong className="text-cyan-300">2. Methane (<InlineMath math="40\text{ mL}" />):</strong>
                      <BlockMath math={String.raw`\text{CH}_4 + 2\text{O}_2 \longrightarrow \text{CO}_2 + 2\text{H}_2\text{O (l)} \implies \text{O}_2\text{ used} = 80\text{ mL}, \ \text{CO}_2\text{ formed} = 40\text{ mL}`} />
                    </div>
                    <div>
                      <strong className="text-cyan-300">3. Acetylene (<InlineMath math="20\text{ mL}" />):</strong>
                      <BlockMath math={String.raw`\text{C}_2\text{H}_2 + \frac{5}{2}\text{O}_2 \longrightarrow 2\text{CO}_2 + \text{H}_2\text{O (l)} \implies \text{O}_2\text{ used} = 50\text{ mL}, \ \text{CO}_2\text{ formed} = 40\text{ mL}`} />
                    </div>
                    <div>
                      <strong className="text-cyan-300">4. Hydrogen (<InlineMath math="10\text{ mL}" />):</strong>
                      <BlockMath math={String.raw`\text{H}_2 + \frac{1}{2}\text{O}_2 \longrightarrow \text{H}_2\text{O (l)} \implies \text{O}_2\text{ used} = 5\text{ mL}, \ \text{CO}_2\text{ formed} = 0\text{ mL}`} />
                    </div>
                  </div>
                </StepBox>
                <StepBox number={3} title="Sum Total Oxygen Used &amp; Total Carbon Dioxide Produced">
                  <BlockMath math={String.raw`V_{\text{O}_2\text{ consumed total}} = 15 + 80 + 50 + 5 = 150\text{ mL}`} />
                  <BlockMath math={String.raw`V_{\text{CO}_2\text{ formed total}} = 30 + 40 + 40 + 0 = 110\text{ mL}`} />
                </StepBox>
                <StepBox number={4} title="Determine Final Residual Gas Composition">
                  <p>
                    Since <InlineMath math="400\text{ mL of O}_2" /> was supplied (<InlineMath math="400 > 150" />), oxygen is in excess.
                  </p>
                  <BlockMath math={String.raw`V_{\text{O}_2\text{ remaining unused}} = 400 - 150 = 250\text{ mL}`} />
                  <BlockMath math={String.raw`V_{\text{final total gas}} = V_{\text{CO}_2\text{ formed}} + V_{\text{O}_2\text{ remaining}} = 110 + 250 = 360\text{ mL}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="110\text{ mL } \text{CO}_2 + 250\text{ mL unreacted } \text{O}_2 \ (\text{Total Residual Volume } = 360\text{ mL})" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Eudiometry Module • Module 3: Volume Contraction &amp; Residual Gas Analysis</p>
        </footer>
      </article>
    </main>
  );
}
