import { notFound } from "next/navigation";
import { ChapterShell, ChapterLessonPager, ChapterPartStrip } from "@/components/notes/canonical";
import { HYDROGEN_PARTS, hydrogenPartBySlug, hydrogenPartMarkdown } from "../parts";
import { hydrogenLessonRef, hydrogenTabs, sectionRangeLabel } from "../_chapter";
import { HydrogenMarkdown } from "../_markdown";

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
    description: `Hydrogen master notes, Lesson ${part.number} of ${HYDROGEN_PARTS.length}: ${part.title} (${sectionRangeLabel(part)}).`,
  };
}

export default async function HydrogenPartPage({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params;
  const part = hydrogenPartBySlug(raw);
  if (!part) notFound();

  return (
    <ChapterShell kicker="JEE Inorganic Chemistry" subtitle="Hydrogen" tabs={hydrogenTabs(part.number)}>
      <ChapterPartStrip
        hubHref="/notes/hydrogen"
        hubLabel="Hydrogen — all lessons"
        positionLabel={`Lesson ${part.number} of ${HYDROGEN_PARTS.length}`}
      />
      <article className="mx-auto max-w-5xl space-y-6 text-white">
        <header
          style={{
            background: "#122232",
            border: "1px solid #24405c",
            borderLeft: "4px solid #5fd4ea",
            borderRadius: 13,
            padding: "18px 20px",
          }}
        >
          <p style={{ color: "#5fd4ea", fontSize: 11.5, fontWeight: 900, letterSpacing: ".14em", textTransform: "uppercase", fontFamily: "'SFMono-Regular',Consolas,'Liberation Mono',monospace" }}>
            Hydrogen · Lesson {part.number} · {sectionRangeLabel(part)}
          </p>
          <h1 style={{ marginTop: 8, color: "#eef3f8", fontSize: 30, fontWeight: 900, lineHeight: 1.15, fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}>
            {part.title}
          </h1>
        </header>
        <div className="space-y-5 rounded-3xl border border-[#24405c] bg-[#122232]/60 px-5 py-8 sm:px-8 lg:px-10">
          <HydrogenMarkdown markdown={hydrogenPartMarkdown(part)} />
        </div>
        <ChapterLessonPager
          prev={hydrogenLessonRef(part.number - 1)}
          next={hydrogenLessonRef(part.number + 1)}
          hubHref="/notes/hydrogen"
          hubLabel="All lessons"
        />
      </article>
    </ChapterShell>
  );
}
