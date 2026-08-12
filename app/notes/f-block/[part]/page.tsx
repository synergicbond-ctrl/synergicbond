import { notFound } from "next/navigation";

import { ChapterLessonPager, ChapterPartStrip, ChapterShell } from "@/components/notes/canonical";
import { fBlockLessonRef, fBlockTabs } from "../_chapter";
import { FBlockMarkdown } from "../_markdown";
import { F_BLOCK_PARTS, fBlockPartBySlug } from "../parts";
import { FBlockVisual } from "../visuals";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return F_BLOCK_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = fBlockPartBySlug((await params).part);
  return part
    ? {
        title: `F-block Elements — ${part.title} | SYNERGIC BOND`,
        description: `${part.focus} NCERT-first JEE Advanced inorganic chemistry notes.`,
      }
    : {};
}

export default async function FBlockPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = fBlockPartBySlug((await params).part);
  if (!part) notFound();

  return (
    <ChapterShell kicker="JEE Advanced Inorganic Chemistry" subtitle="F-block Elements" tabs={fBlockTabs(part.number)}>
      <ChapterPartStrip
        hubHref="/notes/f-block"
        hubLabel="F-block — all parts"
        positionLabel={`Part ${part.number} of ${F_BLOCK_PARTS.length} · ${part.printPages}`}
      />

      <article className="mx-auto max-w-6xl space-y-6 text-white">
        <header className="overflow-hidden rounded-2xl border border-fuchsia-300/20 border-l-4 border-l-fuchsia-300 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,.17),transparent_38%),#0a1220] px-5 py-5 sm:px-7">
          <p className="text-[11.5px] font-black uppercase tracking-[.14em] text-fuchsia-300">
            F-block Elements · Part {part.number} · {part.printPages}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-black leading-tight text-[#f7f2fb] sm:text-4xl">{part.title}</h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300 sm:text-base">{part.focus}</p>
        </header>

        <FBlockVisual part={part.number} />

        <div className="space-y-5 rounded-3xl border border-fuchsia-300/15 bg-[#0a1220]/80 px-5 py-8 sm:px-8 lg:px-10">
          <FBlockMarkdown markdown={part.markdown} />
        </div>

        <ChapterLessonPager
          prev={fBlockLessonRef(part.number - 1)}
          next={fBlockLessonRef(part.number + 1)}
          hubHref="/notes/f-block"
          hubLabel="All four parts"
        />
      </article>
    </ChapterShell>
  );
}
