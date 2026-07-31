"use client";

import { ChapterSection, IntegratedSourcePages, ModifiedProblemAtlas, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart18() {
  return (
    <PartShell part={18} title={"Comprehensive Practice III — Mechanisms and Catalysis"} description={"Modified solved problems 1–48 integrated with source practice pages 227–237."}>
      <ChapterSection id="practice-bank-one" index="18" eyebrow="Modified worked problems" title="Solved problem bank I" intro={<>Problems 1–48 use altered numerical data while preserving the source concepts and solution methods.</>}><ModifiedProblemAtlas from={1} to={48} /></ChapterSection>
      
      <IntegratedSourcePages start={227} end={237} />
    </PartShell>
  );
}
