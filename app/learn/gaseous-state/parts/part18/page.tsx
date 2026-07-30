"use client";

import { PartShell, SectionTitle } from "../../_core";
import { sourceCoverage } from "../../_data";
import { SourceArchive } from "../../_special";
import { CoverageMapSVG } from "../../_visuals";

export default function Part18Page() {
  return (
    <PartShell part={18}>
<section className="section">
            <SectionTitle
              id="source-archive"
              index="18"
              title="Forensic coverage of all 169 source pages"
              subtitle="Every extracted page is retained in a searchable audit archive. Pages 155–169 are blank in the uploaded PDF and are explicitly recorded as blank rather than silently omitted."
            />
            <figure className="figure"><CoverageMapSVG /><figcaption>The polished chapter above reorganises and rewrites the material. The archive below preserves the full extracted source-text layer so that no page disappears during editorial restructuring.</figcaption></figure>
            <table className="coverageTable">
              <thead><tr><th>Pages</th><th>Source content</th><th>Recovery status</th></tr></thead>
              <tbody>{sourceCoverage.map(row=><tr key={row.range}><td>{row.range}</td><td>{row.topic}</td><td>{row.status}</td></tr>)}</tbody>
            </table>
            <div className="sourceCaution">The archive is a machine-extracted audit layer and can contain imperfect handwriting recognition. The student-facing theory, formulae, graphs and solutions above are the corrected editorial version.</div>
            <SourceArchive />
          </section>
    </PartShell>
  );
}
