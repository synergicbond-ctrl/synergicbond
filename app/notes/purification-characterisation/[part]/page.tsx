import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { POC_PARTS, pocPartBySlug, pocPartMarkdown } from "../parts";
import { pocLessonRef, pocTabs, sectionLabel } from "../_chapter";
import { PocMarkdown } from "../_markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return POC_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = pocPartBySlug((await params).part);
  return part
    ? {
        title: `Purification and Characterisation — ${part.title} | SYNERGIC BOND`,
        description: `Purification and Characterisation of Organic Compounds, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function PocPartPage({ params }: { params: Promise<{ part: string }> }) {
  const slug = (await params).part;
  const part = pocPartBySlug(slug);
  if (!part) notFound();

  const prevRef = pocLessonRef(part.number - 1);
  const nextRef = pocLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE / NEET Organic Chemistry"
      chapterTitle="Purification and Characterisation of Organic Compounds"
      chapterSlug="purification-characterisation"
      description="Purification and Characterisation of Organic Compounds — JEE / NEET notes"
      free={false}
      tabs={pocTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${POC_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/purification-characterisation", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-5">
          <PocMarkdown markdown={pocPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
