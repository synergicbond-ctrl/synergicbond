"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-rose-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-rose-300">{title}</h3>
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
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-xs font-bold text-rose-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function EudiometryPart6() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-rose-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
              Module 6 of 6
            </span>
            <span className="text-xs font-bold text-slate-400">Synergic Bond Course Lesson</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Molecular Formula from Eudiometry &amp; Hydrocarbon Identification
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            The pinnacle of eudiometric analysis: deriving exact molecular formulas (<InlineMath math="\text{C}_x\text{H}_y" /> and <InlineMath math="\text{C}_x\text{H}_y\text{O}_z" />) directly from volumetric explosion contraction and alkali absorption drops. Explore hydrocarbon family identification rules across Alkanes, Alkenes, Alkynes, and Arenes.
          </p>
        </header>

        {/* Section 1: General Combustion Equations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            General Combustion Stoichiometry Equations
          </h2>

          <ConceptCard title="Master Combustion Equations for Organic Gases">
            <p>
              When an unknown volatile organic compound of volume <InlineMath math="V_0" /> is exploded with excess oxygen (<InlineMath math="\text{O}_2" />), the stoichiometric relationship between the initial hydrocarbon volume, oxygen consumed, carbon dioxide produced, and water condensed governs the entire analysis:
            </p>
          </ConceptCard>

          <FormulaBox
            title="1. General Combustion of Hydrocarbons (C_x H_y)"
            formula={String.raw`\text{C}_x\text{H}_y (g) + \left(x + \frac{y}{4}\right) \text{O}_2 (g) \longrightarrow x \text{CO}_2 (g) + \frac{y}{2} \text{H}_2\text{O (l)}`}
            description="For 1 volume of C_xH_y: Oxygen consumed = (x + y/4) volumes, CO_2 produced = x volumes, and water volume after cooling = 0 (liquid)."
          />

          <FormulaBox
            title="2. General Combustion of Oxygenated Organic Compounds (C_x H_y O_z)"
            formula={String.raw`\text{C}_x\text{H}_y\text{O}_z (g) + \left(x + \frac{y}{4} - \frac{z}{2}\right) \text{O}_2 (g) \longrightarrow x \text{CO}_2 (g) + \frac{y}{2} \text{H}_2\text{O (l)}`}
            description="Because oxygen (z) is already present internally within the molecule, external O_2 required is reduced by precisely z/2 volumes."
          />
        </section>

        {/* Section 2: Direct Derivation of x and y from Experimental Data */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            Direct Derivation of Subscripts (<InlineMath math="x\text{ and } y" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              By observing the volume contraction upon cooling (<InlineMath math="\Delta V_{\text{combustion}}" />) and the subsequent contraction upon introducing aqueous <InlineMath math="\text{KOH}" /> (<InlineMath math="\Delta V_{\text{KOH}} = V_{\text{CO}_2}" />), we solve for <InlineMath math="x" /> and <InlineMath math="y" /> using simple algebraic ratios:
            </p>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
                <span className="font-bold text-cyan-300 text-xs uppercase tracking-wider">Deriving Carbon Index (<InlineMath math="x" />)</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Since <InlineMath math="1\text{ volume of C}_x\text{H}_y" /> produces exactly <InlineMath math="x\text{ volumes of CO}_2" />:
                </p>
                <div className="overflow-x-auto py-2">
                  <BlockMath math={String.raw`x = \frac{V_{\text{CO}_2\text{ produced (Drop in KOH)}}}{V_{\text{hydrocarbon initial}}}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
                <span className="font-bold text-emerald-300 text-xs uppercase tracking-wider">Deriving Hydrogen Index (<InlineMath math="y" />)</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  From <InlineMath math="\Delta V_{\text{combustion}} = V_{\text{initial}} - V_{\text{final}} = V_0 \left[1 + \left(x + \frac{y}{4}\right) - x\right] = V_0 \left(1 + \frac{y}{4}\right)" />:
                </p>
                <div className="overflow-x-auto py-2">
                  <BlockMath math={String.raw`1 + \frac{y}{4} = \frac{\Delta V_{\text{combustion}}}{V_{\text{hydrocarbon}}} \implies y = 4 \left( \frac{\Delta V_{\text{combustion}}}{V_{\text{hydrocarbon}}} - 1 \right)`} />
                </div>
              </div>
            </div>
          </div>

          <WorkedExample
            title="Determining Hydrocarbon Molecular Formula from Eudiometric Contractions"
            problem={
              <span>
                <InlineMath math="15\text{ mL}" /> of a gaseous hydrocarbon (<InlineMath math="\text{C}_x\text{H}_y" />) is exploded with <InlineMath math="105\text{ mL}" /> of pure oxygen inside a eudiometer. Upon cooling to initial room temperature, the total gas volume contracts to <InlineMath math="75\text{ mL}" />. When the residual gases are passed through aqueous <InlineMath math="\text{KOH}" /> solution, the volume contracts further by <InlineMath math="45\text{ mL}" />. Determine the molecular formula and chemical family of the hydrocarbon.
              </span>
            }
            steps={
              <div className="space-y-4">
                <StepBox number={1} title="Calculate Carbon Index (x) from KOH Absorption">
                  <BlockMath math={String.raw`V_{\text{CO}_2} = \Delta V_{\text{KOH}} = 45\text{ mL}`} />
                  <BlockMath math={String.raw`x = \frac{V_{\text{CO}_2}}{V_{\text{hydrocarbon}}} = \frac{45\text{ mL}}{15\text{ mL}} = 3`} />
                </StepBox>
                <StepBox number={2} title="Calculate Combustion Contraction &amp; Solve for Hydrogen Index (y)">
                  <BlockMath math={String.raw`V_{\text{initial total}} = 15 + 105 = 120\text{ mL}, \quad V_{\text{final after cooling}} = 75\text{ mL}`} />
                  <BlockMath math={String.raw`\Delta V_{\text{combustion}} = 120 - 75 = 45\text{ mL}`} />
                  <BlockMath math={String.raw`1 + \frac{y}{4} = \frac{\Delta V_{\text{combustion}}}{V_{\text{hydrocarbon}}} = \frac{45}{15} = 3 \implies \frac{y}{4} = 2 \implies y = 8`} />
                </StepBox>
                <StepBox number={3} title="Identify Hydrocarbon Family Formula">
                  <p>
                    With <InlineMath math="x = 3" /> and <InlineMath math="y = 8" />, the molecular formula is <InlineMath math="\text{C}_3\text{H}_8" />.
                    <br />
                    Since <InlineMath math="y = 2x + 2 \ (8 = 2(3) + 2)" />, this compound belongs to the <strong className="text-emerald-300">Alkane family (Propane)</strong>.
                  </p>
                </StepBox>
              </div>
            }
            result={<InlineMath math="\text{C}_3\text{H}_8 \ (\text{Propane — Alkane Family})" />}
          />
        </section>

        {/* Section 3: Hydrocarbon Family Formulas & Contraction Ratios */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            Hydrocarbon Family Formulas &amp; Contraction Signatures
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              When an unknown hydrocarbon belongs to a specific homologous series, its ratio of combustion contraction (<InlineMath math="\Delta V_{\text{combustion}}" />) to hydrocarbon volume (<InlineMath math="V_0" />) displays a unique mathematical signature:
            </p>

            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Alkanes (<InlineMath math="\text{C}_n\text{H}_{2n+2}" />)</span>
                <div className="mt-2 text-xs font-mono text-slate-300">
                  <BlockMath math={String.raw`\frac{\Delta V}{V_0} = 1 + \frac{2n+2}{4} = \frac{n+3}{2}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Alkenes (<InlineMath math="\text{C}_n\text{H}_{2n}" />)</span>
                <div className="mt-2 text-xs font-mono text-slate-300">
                  <BlockMath math={String.raw`\frac{\Delta V}{V_0} = 1 + \frac{2n}{4} = 1 + \frac{n}{2}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Alkynes (<InlineMath math="\text{C}_n\text{H}_{2n-2}" />)</span>
                <div className="mt-2 text-xs font-mono text-slate-300">
                  <BlockMath math={String.raw`\frac{\Delta V}{V_0} = 1 + \frac{2n-2}{4} = \frac{n+1}{2}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-300">Arenes (<InlineMath math="\text{C}_n\text{H}_{2n-6}" />)</span>
                <div className="mt-2 text-xs font-mono text-slate-300">
                  <BlockMath math={String.raw`\frac{\Delta V}{V_0} = 1 + \frac{2n-6}{4} = \frac{n-1}{2}`} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Eudiometry Module • Module 6: Molecular Formula from Eudiometry &amp; Hydrocarbon Identification</p>
        </footer>
      </article>
    </main>
  );
}
