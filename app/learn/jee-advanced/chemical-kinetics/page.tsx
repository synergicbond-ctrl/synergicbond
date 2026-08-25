import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { CHEMICAL_KINETICS_PARTS } from "./part-metadata";

export const metadata: Metadata = {
  title: "Chemical Kinetics — Complete JEE Advanced Notes | Synergic Bond",
  description:
    "Complete JEE Advanced Chemical Kinetics course: rate laws, order and molecularity, integrated rate equations, half-life, Arrhenius theory, collision and transition-state theory, and complex reactions, in 20 sequential parts.",
};

export default function ChemicalKineticsIndexPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Chemical Kinetics"
      chapterSlug="chemical-kinetics"
      description="A forensic page-by-page reconstruction of the full 259-page source, organised into twenty sequential teaching parts. Thirty print-equivalent reference expansions are inserted inside the relevant topics, and every instructional page has a collapsible dark-background fidelity panel."
      free={false}
    >
      <div className="space-y-8">
        <div className="flex flex-wrap gap-2 text-sm text-[var(--text-muted)]">
          {['20 sequential content parts','259/259 source pages mapped','30 integrated reference pages','96 solved problems','258 dark page panels'].map((item)=><span key={item} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">{item}</span>)}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {CHEMICAL_KINETICS_PARTS.map((item) => (
            <a key={item.part} href={`/learn/jee-advanced/chemical-kinetics/parts/${item.slug}`} className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm font-bold text-[var(--accent)]">{String(item.part).padStart(2, '0')}</span>
                <span className="text-sm text-[var(--text-muted)] transition group-hover:text-[var(--accent)]">Open →</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[var(--foreground)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </CanonicalChapterPage>
  );
}
