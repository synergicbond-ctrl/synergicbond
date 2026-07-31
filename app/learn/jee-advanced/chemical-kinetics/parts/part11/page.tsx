"use client";

import { ChapterSection, ConceptCard, FormulaCard, IntegratedSourcePages, K, KB, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart11() {
  return (
    <PartShell part={11} title={"Advanced Derivations II — Mechanism Diagnostics"} description={"Advanced mechanism tests, kinetic substitutions and interpretation of experimental forms."}>
      <ChapterSection id="advanced-diagnostics" index="11" eyebrow="Advanced source sequence" title="Mechanism diagnostics from observed rate laws" intro={<>These pages develop the habit of deriving an observable rate law from a proposed elementary sequence and then checking limiting cases, dimensions and the identity of measurable species.</>}>
  <div className="grid gap-5 xl:grid-cols-3">
    <ConceptCard title="Eliminate intermediates" tone="violet"><p>An acceptable final rate law contains stable reactants, products, catalysts or experimentally controlled variables—not an unmeasured intermediate concentration.</p></ConceptCard>
    <ConceptCard title="Test limiting forms" tone="cyan"><p>A composite expression should reduce to the correct low- and high-concentration orders. Saturation, inhibition and fall-off are mechanistic signatures.</p></ConceptCard>
    <ConceptCard title="Keep dimensions visible" tone="amber"><p>Every added term in a denominator must have matching dimensions. Dimensional failure is often the fastest way to reject an algebraic derivation.</p></ConceptCard>
  </div>
  <FormulaCard title="Generic composite law"><KB>{String.raw`v=\frac{kK[A][B]}{1+K[A]}`}</KB><p className="mt-3 text-sm leading-7 text-slate-400">Low <K>{String.raw`[A]`}</K>: first order in A. High <K>{String.raw`[A]`}</K>: saturation and zero order in A.</p></FormulaCard>
</ChapterSection>
      
      <IntegratedSourcePages start={139} end={151} />
    </PartShell>
  );
}
