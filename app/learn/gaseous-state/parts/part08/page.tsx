"use client";

import { PartShell, SectionTitle } from "../../_core";
import { EnrichmentModule, enrichmentModules } from "../../_special";

export default function Part08Page() {
  return (
    <PartShell part={8}>
      <section className="section">
        <SectionTitle id="enrichment-1-10" index="08" title="Enrichment modules 1–10" subtitle="Original advanced explanations extending the uploaded notes without reproducing textbook wording." />
        <div className="sourceCaution">These modules are newly written and retain JEE Advanced rigor while correcting, connecting and extending the source material.</div>
        <div className="enrichmentGrid">
          {enrichmentModules.slice(0, 10).map(module => <EnrichmentModule key={module.no} module={module} />)}
        </div>
      </section>
    </PartShell>
  );
}
