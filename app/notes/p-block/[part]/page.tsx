import { notFound, redirect } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { P_BLOCK_PARTS, pBlockPartBySlug, pBlockPartMarkdown } from "../parts";
import { deepDiveFor, pBlockLessonRef, pBlockTabs, sectionRangeLabel } from "../_chapter";
import { PBlockMarkdown } from "../_markdown";
import { PBlockVisual } from "../visuals";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return P_BLOCK_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = pBlockPartBySlug((await params).part);
  return part
    ? { title: `P-block Elements — ${part.title} | SYNERGIC BOND`, description: `P-block JEE Advanced notes, Lesson ${part.number}: ${part.title}.` }
    : {};
}

export default async function PBlockPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = pBlockPartBySlug((await params).part);
  if (!part) notFound();

  // Groups 13–18 (survey lessons 2–19) each have their own dedicated deep-dive
  // chapter — send readers straight there.
  const deep = deepDiveFor(part.number);
  if (deep) redirect(deep.href);

  const prevRef = pBlockLessonRef(part.number - 1);
  const nextRef = pBlockLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="P-block Elements"
      chapterSlug="p-block"
      description="P-block JEE Advanced notes"
      free={false}
      tabs={pBlockTabs(part.number)}
      lessonNumber={`Lesson ${part.number} · ${sectionRangeLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/p-block", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <PBlockVisual part={part.number} />
        <div className="space-y-5">
          <PBlockMarkdown markdown={pBlockPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
