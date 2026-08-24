import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { fBlockHref, fBlockTabs } from "./_chapter";
import { F_BLOCK_PARTS } from "./parts";
import { FBlockVisual } from "./visuals";

export const metadata = {
  title: "F-block Elements — NCERT-first JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Premium NCERT-first JEE Advanced F-block notes with 21 original scientific visuals covering lanthanoids, actinoids, configurations, oxidation states, contraction, colour, magnetism, bonding, separation and applications.",
};

export const dynamic = "force-dynamic";

const STATS = [
  ["4", "substantial parts"],
  ["21", "original teaching visuals"],
  ["100%", "NCERT core coverage"],
  ["SVG", "editable masters"],
];

export default function FBlockHubPage() {
  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="F-block Elements"
      chapterSlug="f-block"
      description="Four substantial parts covering the complete NCERT core, lanthanoid and actinoid trends, colour, magnetism, contraction, separation methods, applications, exam traps and worked JEE Advanced reasoning—supported by 21 exact, chapter-specific visual explanations."
      free={false}
      tabs={fBlockTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
              <p className="text-2xl font-black text-[var(--accent)]">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-[var(--text-muted)]">{label}</p>
            </div>
          ))}
        </div>

        <div>
          <FBlockVisual part={1} heroOnly />
        </div>

        <section className="grid gap-3 md:grid-cols-3">
          {[
            ["NCERT foundation", "Exact chapter logic rewritten in simple language: configurations, states, contraction, colour, magnetism and comparison."],
            ["JEE depth", "Orders, exceptions, actinyl ions, redox stability, separation chemistry, assertion–reason checks and integrated examples."],
            ["Revision ready", "Compact tables, configuration atlas, trend matrix and a final checklist for fast advanced-level revision."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
              <h2 className="font-black text-[var(--foreground)]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{copy}</p>
            </article>
          ))}
        </section>

        <ChapterLessonGrid
          lessons={F_BLOCK_PARTS.map((part) => ({
            href: fBlockHref(part.number),
            number: `Part ${part.number}`,
            title: part.title,
            meta: `${part.printPages} · ${part.focus}`,
          }))}
        />
      </div>
    </AppShell>
  );
}
