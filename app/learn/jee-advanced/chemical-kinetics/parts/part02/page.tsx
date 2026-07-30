"use client";

import { PartShell, ChapterSection, ConceptCard, ExamTrap, FigureFrame, FormulaCard, K, KB, RateGeometryFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart02() {
  return (
    <PartShell
      part={2}
      title={"Rate of Reaction"}
      description={"Average and instantaneous rates, stoichiometric normalization, variable-volume systems and graphical interpretation."}
    >
<ChapterSection
            id="rate"
            index="03"
            eyebrow="Differential description"
            title="Rate of reaction: average, instantaneous and normalised"
            intro={<>A species may disappear or appear at a different numerical rate because its stoichiometric coefficient is different. Dividing each species rate by its coefficient produces one common rate of reaction.</>}
          >
            <FigureFrame title="Secant and tangent interpretations" caption={<>The slope of a secant gives an average rate over a finite interval. The tangent gives the instantaneous rate at one time. Reactant slopes are negative, so a minus sign is used for a positive rate of disappearance.</>}>
              <RateGeometryFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Average rate over t₁ to t₂">
                <KB>{String.raw`r_{\mathrm{av}}=-\frac{1}{a}\frac{\Delta[A]}{\Delta t}=-\frac{1}{b}\frac{\Delta[B]}{\Delta t}=\frac{1}{y}\frac{\Delta[Y]}{\Delta t}=\frac{1}{z}\frac{\Delta[Z]}{\Delta t}`}</KB>
              </FormulaCard>
              <FormulaCard title="Instantaneous rate at constant volume">
                <KB>{String.raw`r=-\frac{1}{a}\frac{d[A]}{dt}=-\frac{1}{b}\frac{d[B]}{dt}=\frac{1}{y}\frac{d[Y]}{dt}=\frac{1}{z}\frac{d[Z]}{dt}`}</KB>
                <KB>{String.raw`r=\frac{1}{V}\frac{d\xi}{dt}`}</KB>
              </FormulaCard>
            </div>
            <div className="grid gap-5 xl:grid-cols-3">
              <ConceptCard title="Species rate" tone="amber">
                <p><K>{String.raw`-d[A]/dt`}</K> is the rate of disappearance of A. It is not automatically the overall rate of reaction.</p>
              </ConceptCard>
              <ConceptCard title="Reaction rate" tone="cyan">
                <p>The coefficient-normalised quantity is invariant to which species is measured.</p>
              </ConceptCard>
              <ConceptCard title="Units" tone="violet">
                <p>Concentration rate: <K>{String.raw`\mathrm{mol\,L^{-1}\,s^{-1}}`}</K> or <K>{String.raw`\mathrm{M\,s^{-1}}`}</K>. A pressure rate may be expressed in <K>{String.raw`\mathrm{Pa\,s^{-1}}`}</K> or <K>{String.raw`\mathrm{bar\,s^{-1}}`}</K>.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Variable-volume systems" tone="rose" eyebrow="Important correction">
              <p>Concentration changes can occur because of reaction and because the container volume changes. Since <K>{String.raw`n_i=C_iV`}</K>,</p>
              <KB>{String.raw`\frac{dn_i}{dt}=V\frac{dC_i}{dt}+C_i\frac{dV}{dt}`}</KB>
              <p>Therefore the species rate based on amount is</p>
              <KB>{String.raw`\frac{1}{V}\frac{dn_i}{dt}=\frac{dC_i}{dt}+\frac{C_i}{V}\frac{dV}{dt}`}</KB>
              <ExamTrap>Do not use <K>{String.raw`-d[A]/dt`}</K> alone as the chemical consumption rate in an expanding or contracting batch reactor.</ExamTrap>
            </ConceptCard>
            <WorkedExample
              number={2}
              difficulty="JEE Main+"
              title="Converting one species rate into all others"
              concept="Stoichiometric normalisation in differential form."
              question={<>For <K>{String.raw`2\mathrm{NO}+\mathrm{O_2}\rightarrow2\mathrm{NO_2}`}</K>, the instantaneous formation rate of NO₂ is <K>{String.raw`7.2\times10^{-5}\ \mathrm{mol\,L^{-1}\,s^{-1}}`}</K>. Find the rate of reaction and the disappearance rates of NO and O₂.</>}
              solution={<>
                <p>Use the coefficient-normalised definition:</p>
                <KB>{String.raw`r=\frac{1}{2}\frac{d[\mathrm{NO_2}]}{dt}=\frac{1}{2}(7.2\times10^{-5})=3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</KB>
                <p>For NO, its coefficient is 2:</p>
                <KB>{String.raw`-\frac{d[\mathrm{NO}]}{dt}=2r=7.2\times10^{-5}\ \mathrm{M\,s^{-1}}`}</KB>
                <p>For O₂, its coefficient is 1:</p>
                <KB>{String.raw`-\frac{d[\mathrm{O_2}]}{dt}=r=3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</KB>
              </>}
              answer={<>Reaction rate <K>{String.raw`3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</K>; NO disappears at <K>{String.raw`7.2\times10^{-5}`}</K> and O₂ at <K>{String.raw`3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</K>.</>}
            />
          </ChapterSection>
    </PartShell>
  );
}
