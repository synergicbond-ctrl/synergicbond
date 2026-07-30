"use client";

import { PartShell, SectionTitle } from "../../_core";
import { EnrichmentModule, enrichmentModules } from "../../_special";

export default function Part10Page() {
  return (
    <PartShell part={10}>
      <section className="section">
        <SectionTitle id="enrichment-21-30" index="10" title="Enrichment modules 21–30" subtitle="Original advanced explanations extending the uploaded notes without reproducing textbook wording." />
        <div className="sourceCaution">These modules are newly written and retain JEE Advanced rigor while correcting, connecting and extending the source material.</div>
        <div className="enrichmentGrid">
          {enrichmentModules.slice(20, 30).map(module => <EnrichmentModule key={module.no} module={module} />)}
        </div>
      </section>
    </PartShell>
  );
}
