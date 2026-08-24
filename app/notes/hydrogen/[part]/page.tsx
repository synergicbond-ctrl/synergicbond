import { notFound } from "next/navigation";
import { ChapterLessonPager, ChapterPartStrip } from "@/components/notes/canonical";
import { HYDROGEN_PARTS, hydrogenPartBySlug, hydrogenPartMarkdown } from "../parts";
import { hydrogenLessonRef, hydrogenTabs, sectionRangeLabel } from "../_chapter";
import { HydrogenMarkdown } from "../_markdown";
import { HYDROGEN_VISUALS } from "../_visuals";
import { HydrogenLessonShell } from "../_lesson-helper";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return HYDROGEN_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params;
  const part = hydrogenPartBySlug(raw);
  if (!part) return {};
  return {
    title: `Hydrogen — ${part.title} | SYNERGIC BOND`,
    description: `Hydrogen chemistry, Lesson ${part.number}: ${part.title}.`,
  };
}

export default async function HydrogenPartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params;
  const part = hydrogenPartBySlug(raw);
  if (!part) notFound();

  const visuals = HYDROGEN_VISUALS[part.number] ?? [];
  const currentIndex = HYDROGEN_PARTS.findIndex((p) => p.slug === raw);
  const prevRef = hydrogenLessonRef(currentIndex - 1);
  const nextRef = hydrogenLessonRef(currentIndex + 1);

  return (
    <HydrogenLessonShell part={part.number}>
      <article className="mx-auto max-w-3xl space-y-8">
        <section>
          <h2 className="mb-4 text-3xl font-black text-[var(--foreground)] sm:text-4xl">
            {part.title}
          </h2>
          <p className="max-w-2xl leading-relaxed text-[var(--text-body)]">
            Lesson {part.number} of {HYDROGEN_PARTS.length}
          </p>
        </section>

        {visuals.length > 0 && (
          <section>
            <h3 className="mb-4 font-serif text-2xl font-black text-[var(--accent)]">Diagrams</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {visuals.map((visual, i) => (
                <figure key={i} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                  <div className="mb-3 text-sm font-bold text-[var(--text-muted)]">Figure {i + 1}</div>
                  <figcaption className="text-sm text-[var(--foreground)]">{visual.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-6">
          <HydrogenMarkdown markdown={hydrogenPartMarkdown(part)} />
        </section>
      </article>
    </HydrogenLessonShell>
  );
}
