import { CanonicalChapterPage } from "@/components/notes/canonical";

export const metadata = {
  title: "Reaction Intermediates: Carbocations, Carbanions, Radicals, Carbenes, Nitrenes, Benzyne | JEE Advanced Organic Chemistry",
  description:
    "Structure, generation, stability orders, rearrangements and arrow-validated mechanisms of carbocations, carbanions, free radicals, carbenes, nitrenes, benzyne and radical ions, with worked solutions to JEE Advanced-pattern problems.",
};

const BASE = "/learn/jee-advanced/organic-chemistry/reaction-intermediates/files";

export default function ReactionIntermediatesPage() {
  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced · Organic Chemistry"
      chapterTitle="Reaction Intermediates"
      chapterSlug="reaction-intermediates"
      description="Homolytic and heterolytic cleavage; carbocations (generation, structure, stability orders, rearrangements); carbanions; free radicals; carbenes; nitrenes; benzyne; radical ions; electrophiles and nucleophiles. Every mechanism is drawn with curved or fish-hook arrows that were checked electron by electron, and each part ends with worked JEE Advanced-style problems."
      free={false}
    >
      <article className="space-y-6">
        <div className="flex flex-wrap gap-3">
          <a
            href={`${BASE}/book`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-sm font-bold"
          >
            Open the notes full-screen
          </a>
          <a
            href={`${BASE}/pdf`}
            download="Reaction-Intermediates-JEE-Advanced.pdf"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-sm font-bold"
          >
            Download the A4 PDF
          </a>
        </div>
        <iframe
          title="Reaction Intermediates notes"
          src={`${BASE}/book`}
          className="h-[85vh] w-full rounded-xl border border-[var(--border)] bg-white"
        />
      </article>
    </CanonicalChapterPage>
  );
}
