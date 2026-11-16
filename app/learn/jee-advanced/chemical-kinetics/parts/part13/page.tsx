"use client";

import { ChapterSection, ConceptCard, IntegratedSourcePages, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart13() {
  return (
    <PartShell part={13} title={"Laidler Problems I — Integrated Laws and Temperature"} description={"First half of the advanced Laidler insert, with complete problem and derivation coverage."}>
      <ChapterSection id="laidler-one" index="13" eyebrow="Advanced problem laboratory" title="Laidler problem set I: integrated and temperature-dependent kinetics" intro={<>The first Laidler block is retained page by page. Work each problem by first identifying the experimentally linear quantity, then choosing the integrated law or temperature relation that makes the data testable.</>}>
  <div className="grid gap-5 xl:grid-cols-3"><ConceptCard title="Plot before calculating" tone="cyan"><p>Use the plot that should be linear for a proposed order. Slope and intercept then provide k and the initial condition.</p></ConceptCard><ConceptCard title="Separate k from rate" tone="violet"><p>A rate constant changes with temperature but not with reactant concentration. The observed rate generally changes with both.</p></ConceptCard><ConceptCard title="Use ratios carefully" tone="amber"><p>Two-temperature Arrhenius calculations require consistent Kelvin temperatures and activation energy in joules per mole.</p></ConceptCard></div>
</ChapterSection>
      
      <IntegratedSourcePages start={163} end={176} />
    </PartShell>
  );
}
