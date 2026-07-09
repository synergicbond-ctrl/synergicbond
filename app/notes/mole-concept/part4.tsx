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

export default function MoleConceptPart4() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-lime-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Gram Atomic Mass and Conversions</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Atomic Dimensions, Crystal Packing &amp; Line-Up Numericals
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Connecting microscopic spherical atomic volumes to macroscopic crystal density measurements. Master spherical volume formulas, crystal packing fractions, macroscopic line-up atom calculations, and exact particle counting inside solid steel spheres.
          </p>
        </header>

        {/* Section 1: Atomic Volume vs. Molar Crystal Volume */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Atomic Radius &amp; Crystal Packing Efficiency
          </h2>

          <ConceptCard title="Why Don't Atoms Pack with 100% Volume Efficiency?">
            <p>
              Treating individual atoms as rigid spheres of radius <InlineMath math="r" /> means that when packed together inside a solid crystal lattice, interstitial voids (empty gaps between adjacent spheres) inevitably remain. Consequently, the <strong className="text-lime-300">macroscopic molar volume (<InlineMath math="V_m = M / d" />)</strong> of a solid crystal is strictly larger than the sum of the actual volumes of its <InlineMath math="N_A" /> individual atoms.
            </p>
            <p>
              The fraction of crystal volume actually occupied by solid spheres depends on the crystal geometry (<strong className="text-cyan-300">Packing Fraction</strong>): Simple Cubic (<InlineMath math="\approx 52.4\%" />), Body-Centered Cubic (<InlineMath math="\approx 68.0\%" />), and Face-Centered Cubic (<InlineMath math="\approx 74.0\%" />).
            </p>
          </ConceptCard>

          <FormulaBox
            title="Spherical Atomic Volume Relationship"
            formula={String.raw`V_{\text{single atom}} = \frac{4}{3} \pi r^3, \quad V_{\text{atoms in 1 mol}} = N_A \cdot \left(\frac{4}{3}\pi r^3\right) = \text{Packing Fraction} \times \left(\frac{M}{d}\right)`}
            description="Where M is molar mass, d is macroscopic crystal density, and r is the atomic radius."
          />
        </section>

        {/* Section 2: Line-Up Atom Calculations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Line-Up Atom Spatial Calculations
          </h2>

          <ConceptCard title="Linear Arrangement of Spherical Atoms">
            <p>
              If identical spherical atoms of radius <InlineMath math="r" /> are arranged in a continuous, straight, end-to-end line without overlapping, the linear distance contributed by each individual atom equals exactly its diameter (<InlineMath math="2r" />).
            </p>
            <p>
              Therefore, the total number of atoms required to span any given macroscopic distance <InlineMath math="L" /> is found by simple division of the total length by the atomic diameter: <InlineMath math="N = L / (2r)" />.
            </p>
          </ConceptCard>

          <div className="grid gap-6 md:grid-cols-2">
            <WorkedExample
              title="Spanning Carbon Atoms Across 1.0 cm"
              problem={
                <span>
                  Carbon atoms have an approximate atomic radius of <InlineMath math="r = 0.077\text{ nm} = 0.77\text{ \AA} = 7.7 \times 10^{-9}\text{ cm}" />. Calculate the exact number of carbon atoms that must be placed side-by-side in a straight line to span a distance of exactly <InlineMath math="1.0\text{ cm}" />.
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Calculate Single Carbon Atom Diameter">
                    <BlockMath math={String.raw`D = 2r = 2 \times (7.7 \times 10^{-9}\text{ cm}) = 1.54 \times 10^{-8}\text{ cm}`} />
                  </StepBox>
                  <StepBox number={2} title="Divide Total Length by Diameter">
                    <BlockMath math={String.raw`N = \frac{L}{D} = \frac{1.0\text{ cm}}{1.54 \times 10^{-8}\text{ cm atom}^{-1}}`} />
                  </StepBox>
                  <StepBox number={3} title="Compute Final Particle Count">
                    <BlockMath math={String.raw`N \approx 6.49 \times 10^7\text{ carbon atoms}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="6.49 \times 10^7\text{ carbon atoms (approx 65 million atoms)}" />}
            />

            <WorkedExample
              title="Circling the Earth with Carbon Atoms"
              problem={
                <span>
                  Using the same carbon atom diameter (<InlineMath math="D = 1.54 \times 10^{-8}\text{ cm}" />), determine how many moles of carbon atoms lined up side-by-side are needed to wrap completely around the Earth&apos;s circumference (<InlineMath math="40,075\text{ km}" />).
                </span>
              }
              steps={
                <div className="space-y-3">
                  <StepBox number={1} title="Convert Earth's Circumference to Centimeters">
                    <BlockMath math={String.raw`L_{\text{Earth}} = 40,075\text{ km} = 4.0075 \times 10^9\text{ cm}`} />
                  </StepBox>
                  <StepBox number={2} title="Find Total Number of Atoms Needed">
                    <BlockMath math={String.raw`N = \frac{4.0075 \times 10^9\text{ cm}}{1.54 \times 10^{-8}\text{ cm}} \approx 2.602 \times 10^{17}\text{ atoms}`} />
                  </StepBox>
                  <StepBox number={3} title="Convert Total Atoms to Moles">
                    <BlockMath math={String.raw`n = \frac{2.602 \times 10^{17}}{6.022 \times 10^{23}} \approx 4.32 \times 10^{-7}\text{ mol}`} />
                  </StepBox>
                </div>
              }
              result={<InlineMath math="4.32 \times 10^{-7}\text{ mol (less than 1 microgram of C!)}" />}
            />
          </div>
        </section>

        {/* Section 3: Solid Sphere & Steel Ball Calculations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-lime-300 border-l-4 border-lime-400 pl-3">
            Macroscopic Solid Sphere Calculations
          </h2>

          <WorkedExample
            title="Determining Iron Atom Count Inside a Solid Steel Ball"
            problem={
              <span>
                A high-precision steel ball bearing of radius <InlineMath math="R = 1.50\text{ cm}" /> is manufactured from pure iron (<InlineMath math="M = 55.85\text{ g mol}^{-1}" />) with a uniform solid density of <InlineMath math="d = 7.85\text{ g cm}^{-3}" />. Calculate the total mass of the steel ball and the exact number of iron (<InlineMath math="\text{Fe}" />) atoms it contains.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Calculate Macroscopic Volume of Steel Sphere">
                  <BlockMath math={String.raw`V = \frac{4}{3} \pi R^3 = \frac{4}{3} \times 3.14159 \times (1.50)^3 = 14.137\text{ cm}^3`} />
                </StepBox>
                <StepBox number={2} title="Determine Total Mass Using Density">
                  <BlockMath math={String.raw`W = V \times d = 14.137\text{ cm}^3 \times 7.85\text{ g cm}^{-3} = 110.976\text{ g}`} />
                </StepBox>
                <StepBox number={3} title="Convert Mass to Moles of Iron">
                  <BlockMath math={String.raw`n = \frac{110.976\text{ g}}{55.85\text{ g mol}^{-1}} \approx 1.9870\text{ mol}`} />
                </StepBox>
                <StepBox number={4} title="Multiply by Avogadro's Number to Find Total Atoms">
                  <BlockMath math={String.raw`N_{\text{Fe}} = 1.9870 \times 6.022 \times 10^{23} \approx 1.196 \times 10^{24}\text{ iron atoms}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="W \approx 110.98\text{ g}, \quad N_{\text{Fe}} \approx 1.20 \times 10^{24}\text{ atoms}" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Gram Atomic Mass and Conversions</p>
        </footer>
      </article>
    </main>
  );
}
