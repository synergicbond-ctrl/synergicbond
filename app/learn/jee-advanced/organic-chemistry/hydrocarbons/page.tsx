import type { Metadata } from "next";
import { CanonicalChapterPage } from "@/components/notes/canonical";

export const metadata: Metadata = {
  title: "Hydrocarbons: Alkanes, Alkenes, Alkynes and Aromatic Substitution | JEE Advanced Organic Chemistry",
  description:
    "Complete JEE Advanced hydrocarbon notes in three parts: alkanes, alkenes and alkynes side by side, and aromatic substitution (EAS and NAS), with step-wise curved-arrow mechanisms and exact reagents.",
};

// Each part is one complete, self-contained HTML notes file served by its own
// premium-gated route (see lib/notes/htmlNotes.ts).
const PARTS = [
  {
    href: "/learn/jee-advanced/organic-chemistry/hydrocarbons/alkanes",
    title: "Alkanes",
    blurb: "Preparation, physical properties, free-radical halogenation, cracking, combustion and every named reaction, with step-wise mechanisms.",
  },
  {
    href: "/learn/jee-advanced/organic-chemistry/hydrocarbons/alkenes-alkynes",
    title: "Alkenes and Alkynes",
    blurb: "Alkenes and alkynes side by side: preparation, electrophilic and radical addition, oxidation, ozonolysis, dienes and alkyne acidity.",
  },
  {
    href: "/learn/jee-advanced/organic-chemistry/hydrocarbons/aromatic-substitution",
    title: "Aromatic Substitution (EAS and NAS)",
    blurb: "Aromaticity, the arenium-ion mechanism, nitration, sulphonation, halogenation, Friedel–Crafts, directing effects and nucleophilic aromatic substitution.",
  },
];

export default function HydrocarbonsPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Hydrocarbons"
      chapterSlug="hydrocarbons"
      description="Complete notes in three parts. Each part opens as one full chapter with every mechanism drawn step by step."
      free={false}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {PARTS.map((part, i) => (
          <a
            key={part.href}
            href={part.href}
            className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-6"
          >
            <span className="font-mono text-sm font-bold text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{part.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{part.blurb}</p>
          </a>
        ))}
      </div>
    </CanonicalChapterPage>
  );
}
