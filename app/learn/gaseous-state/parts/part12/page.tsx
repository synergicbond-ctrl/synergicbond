"use client";

import { PartShell, SectionTitle } from "../../_core";
import { EnrichmentModule, enrichmentModules } from "../../_special";

export default function Part12Page() {
  return (
    <PartShell part={12}>
      <section className="section">
        <SectionTitle id="enrichment-41-50" index="12" title="Enrichment modules 41–50" subtitle="Original advanced explanations extending the uploaded notes without reproducing textbook wording." />
        <div className="sourceCaution">These modules are newly written and retain JEE Advanced rigor while correcting, connecting and extending the source material.</div>
        <div className="enrichmentGrid">
          {enrichmentModules.slice(40, 50).map(module => <EnrichmentModule key={module.no} module={module} />)}
        </div>
      </section>
    </PartShell>
  );
}
