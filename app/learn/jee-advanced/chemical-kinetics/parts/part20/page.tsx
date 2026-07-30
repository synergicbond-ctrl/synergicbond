"use client";

import { PartShell, ChapterSection, SourceCoverageAtlas } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart20() {
  return (
    <PartShell
      part={20}
      title={"Complete 259-Page Source Audit"}
      description={"Page-by-page searchable coverage ledger preserving extracted source text and image-heavy page flags."}
    >
<ChapterSection
            id="source-coverage"
            index="21"
            eyebrow="Forensic completeness"
            title="Complete 259-page source coverage audit"
            intro={<>Every page of the uploaded PDF is indexed below. Machine-readable text is preserved page by page; scan-heavy pages are explicitly flagged and their chemistry is reconstructed in the polished notes, problem bank and visual extensions. This prevents silent omissions and makes any source item searchable by page number or keyword.</>}
          >
            <SourceCoverageAtlas />
          </ChapterSection>

<footer className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950/30 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">End of chapter</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Chemical kinetics is a consistency test.</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">A correct solution must make the stoichiometry, dimensions, time law, temperature trend and molecular mechanism agree with one another. When any one of these conflicts, revisit the assumptions rather than forcing the algebra.</p>
              </div>
              <a href="#scope" className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/[0.12]">Back to start ↑</a>
            </div>
          </footer>
    </PartShell>
  );
}
