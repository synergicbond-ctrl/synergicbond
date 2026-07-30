"use client";

import { PartShell, SectionTitle } from "../../_core";
import { EnrichmentModule, enrichmentModules } from "../../_special";

export default function Part11Page() {
  return (
    <PartShell part={11}>
      <section className="section">
        <SectionTitle id="enrichment-31-40" index="11" title="Enrichment modules 31–40" subtitle="Original advanced explanations extending the uploaded notes without reproducing textbook wording." />
        <div className="sourceCaution">These modules are newly written and retain JEE Advanced rigor while correcting, connecting and extending the source material.</div>
        <div className="enrichmentGrid">
          {enrichmentModules.slice(30, 40).map(module => <EnrichmentModule key={module.no} module={module} />)}
        </div>
      </section>
    </PartShell>
  );
}
