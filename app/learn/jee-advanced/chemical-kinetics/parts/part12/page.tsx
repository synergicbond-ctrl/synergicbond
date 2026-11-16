"use client";

import { ChapterSection, ConceptCard, FormulaCard, IntegratedSourcePages, KB, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart12() {
  return (
    <PartShell part={12} title={"Advanced Derivations III — Fast and Chain Reactions"} description={"Fast-reaction reasoning, chain processes and higher-level approximation methods."}>
      <ChapterSection id="fast-chain" index="12" eyebrow="Advanced source sequence" title="Fast reactions, chain processes and pressure dependence" intro={<>The closing advanced derivations use activation–deactivation balances, radical steady states and pressure-dependent competition to explain rate laws that cannot be obtained from a single elementary collision.</>}>
  <div className="grid gap-5 xl:grid-cols-2">
    <ConceptCard title="Lindemann activation" tone="cyan"><KB>{String.raw`A+M\rightleftharpoons A^*+M,\qquad A^*\rightarrow P`}</KB><p>At low pressure the rate is second order because activation collisions are limiting; at high pressure it approaches first-order behaviour.</p></ConceptCard>
    <ConceptCard title="Chain steady state" tone="violet"><p>Initiation creates radicals, propagation consumes one radical while creating another, and termination removes radicals. The radical concentration often follows a square-root dependence on the initiation rate.</p></ConceptCard>
  </div>
  <FormulaCard title="Lindemann–Hinshelwood fall-off"><KB>{String.raw`k_{\mathrm{obs}}=\frac{k_1k_2[M]}{k_{-1}[M]+k_2}`}</KB></FormulaCard>
</ChapterSection>
      
      <IntegratedSourcePages start={152} end={162} />
    </PartShell>
  );
}
