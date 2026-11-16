"use client";

import { ChapterSection, ConceptCard, ExamTrap, IntegratedSourcePages, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart14() {
  return (
    <PartShell part={14} title={"Laidler Problems II — Mechanisms and Catalysis"} description={"Second half of the Laidler insert, worked solutions and mechanism-focused applications."}>
      <ChapterSection id="laidler-two" index="14" eyebrow="Advanced problem laboratory" title="Laidler problem set II: mechanisms, catalysis and worked answers" intro={<>The second Laidler block contains mechanism-based exercises and worked answers. The complete visual pages are paired with typed source descriptions so no equation or tabulated datum is discarded.</>}>
  <div className="grid gap-5 xl:grid-cols-2"><ConceptCard title="Mechanism test" tone="violet"><p>Derive the rate law independently from every proposed sequence. Agreement with the overall equation is necessary but never sufficient.</p></ConceptCard><ConceptCard title="Catalytic cycle test" tone="emerald"><p>A true catalyst is consumed in one elementary step and regenerated in another. It cancels from the net equation but can remain in the observed rate law.</p></ConceptCard></div>
  <ExamTrap>A mechanism is not proved merely because it reproduces one rate law. Competing mechanisms can share the same algebraic form.</ExamTrap>
</ChapterSection>
      
      <IntegratedSourcePages start={177} end={189} />
    </PartShell>
  );
}
