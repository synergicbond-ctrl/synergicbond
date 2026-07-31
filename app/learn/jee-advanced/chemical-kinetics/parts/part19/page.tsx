"use client";

import { ChapterSection, IntegratedSourcePages, ModifiedProblemAtlas, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart19() {
  return (
    <PartShell part={19} title={"Comprehensive Practice IV — Advanced Numerical Problems"} description={"Modified solved problems 49–96 integrated with source practice pages 238–248."}>
      <ChapterSection id="practice-bank-two" index="19" eyebrow="Modified worked problems" title="Solved problem bank II" intro={<>Problems 49–96 continue the altered-data problem bank through Arrhenius, mechanisms, complex reactions, catalysis and enzyme kinetics.</>}><ModifiedProblemAtlas from={49} to={96} /></ChapterSection>
      
      <IntegratedSourcePages start={238} end={248} />
    </PartShell>
  );
}
