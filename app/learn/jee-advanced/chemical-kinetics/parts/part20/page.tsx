"use client";

import { ChapterSection, ConceptCard, IntegratedSourcePages, KeyIdea, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart20() {
  return (
    <PartShell part={20} title={"Final Self-Assessment and Full-Chapter Synthesis"} description={"Final source problems, graph analysis, mastery checks and complete chapter closure."}>
      <ChapterSection id="final-mastery" index="20" eyebrow="Chapter closure" title="Final self-assessment and full-chapter synthesis" intro={<>The final source pages combine numerical calculation, graph reading, mechanism selection and conceptual diagnostics. Use the checklist below before considering the chapter complete.</>}>
  <div className="grid gap-5 xl:grid-cols-3"><ConceptCard title="Mathematical mastery" tone="cyan"><p>Choose the correct integrated form, handle unequal initial concentrations, use half-life scaling and read slopes with their signs and units.</p></ConceptCard><ConceptCard title="Mechanistic mastery" tone="violet"><p>Distinguish order from molecularity, remove intermediates, test pre-equilibrium and steady-state assumptions, and recognise saturation or fall-off.</p></ConceptCard><ConceptCard title="Experimental mastery" tone="emerald"><p>Translate pressure, absorbance, conductance, optical rotation, titre or gas volume into concentration before applying a kinetic law.</p></ConceptCard></div>
  <div className="grid gap-4 sm:grid-cols-2"><KeyIdea>Every source page from 1 to 259 is assigned to exactly one part in the deployment ledger.</KeyIdea><KeyIdea>Thirty deeper reference pages are inserted within their relevant topics, not collected as a separate appendix.</KeyIdea></div>
</ChapterSection>
      
      <IntegratedSourcePages start={249} end={259} />
    </PartShell>
  );
}
