import { notFound } from "next/navigation";

import { ChapterLessonPager, ChapterPartStrip, ChapterShell } from "@/components/notes/canonical";
import { sBlockLessonRef, sBlockTabs, sectionRangeLabel } from "../_chapter";
import { SBlockMarkdown } from "../_markdown";
import { S_BLOCK_PARTS, sBlockPartBySlug, sBlockPartMarkdown } from "../parts";
import { SBlockVisual } from "../visuals";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return S_BLOCK_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = sBlockPartBySlug((await params).part);
  return part
    ? {
        title: `S-block Elements — ${part.title} | SYNERGIC BOND`,
        description: `Complete JEE Advanced s-block notes, Lesson ${part.number}: ${part.focus}`,
      }
    : {};
}

export default async function SBlockPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = sBlockPartBySlug((await params).part);
  if (!part) notFound();

  return (
    <ChapterShell kicker="JEE Inorganic Chemistry" subtitle="S-block Elements" tabs={sBlockTabs(part.number)}>
      <ChapterPartStrip
        hubHref="/notes/s-block"
        hubLabel="S-block — all lessons"
        positionLabel={`Lesson ${part.number} of ${S_BLOCK_PARTS.length}`}
      />

      <article className="mx-auto max-w-6xl space-y-6 text-white">
        <header className="overflow-hidden rounded-2xl border border-[#24405c] border-l-4 border-l-cyan-300 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,.18),transparent_38%),#122232] px-5 py-5 sm:px-7">
          <p className="text-[11.5px] font-black uppercase tracking-[.14em] text-cyan-300">
            S-block Elements · Lesson {part.number} · {sectionRangeLabel(part)}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-black leading-tight text-[#eef3f8] sm:text-4xl">{part.title}</h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300 sm:text-base">{part.focus}</p>
        </header>

        <SBlockVisual part={part.number} />

        <div className="space-y-5 rounded-3xl border border-[#24405c] bg-[#122232]/60 px-5 py-8 sm:px-8 lg:px-10">
          <SBlockMarkdown markdown={sBlockPartMarkdown(part)} />
        </div>

        <ChapterLessonPager
          prev={sBlockLessonRef(part.number - 1)}
          next={sBlockLessonRef(part.number + 1)}
          hubHref="/notes/s-block"
          hubLabel="All lessons"
        />
      </article>
    </ChapterShell>
  );
}
