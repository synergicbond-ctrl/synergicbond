"use client";

import { PartShell, SectionTitle } from "../../_core";
import { EnrichmentModule, enrichmentModules } from "../../_special";

export default function Part09Page() {
  return (
    <PartShell part={9}>
      <section className="section">
        <SectionTitle id="enrichment-11-20" index="09" title="Enrichment modules 11–20" subtitle="Original advanced explanations extending the uploaded notes without reproducing textbook wording." />
        <div className="sourceCaution">These modules are newly written and retain JEE Advanced rigor while correcting, connecting and extending the source material.</div>
        <div className="enrichmentGrid">
          {enrichmentModules.slice(10, 20).map(module => <EnrichmentModule key={module.no} module={module} />)}
        </div>
      </section>
    </PartShell>
  );
}
