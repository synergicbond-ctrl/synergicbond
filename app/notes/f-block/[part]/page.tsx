import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
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

  const prevRef = fBlockLessonRef(part.number - 1);
  const nextRef = fBlockLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="F-block Elements"
      chapterSlug="f-block"
      description="NCERT-first JEE Advanced F-block notes"
      free={false}
      tabs={fBlockTabs(part.number)}
      lessonNumber={`Part ${part.number} of ${F_BLOCK_PARTS.length} · ${part.printPages}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/f-block", label: "All four parts" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <FBlockVisual part={part.number} />
        <div className="space-y-5">
          <FBlockMarkdown markdown={part.markdown} />
        </div>
      </article>
    </AppShell>
  );
}
