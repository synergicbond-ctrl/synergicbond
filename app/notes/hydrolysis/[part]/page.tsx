import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { HYDROLYSIS_PARTS, hydrolysisPartBySlug, hydrolysisPartMarkdown } from "../parts";
import { hydrolysisLessonRef, hydrolysisTabs, sectionLabel } from "../_chapter";
import { HydrolysisMarkdown } from "../_markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return HYDROLYSIS_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = hydrolysisPartBySlug((await params).part);
  return part
    ? {
        title: `Hydrolysis — ${part.title} | SYNERGIC BOND`,
        description: `Hydrolysis JEE Advanced notes, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function HydrolysisPartPage({ params }: { params: Promise<{ part: string }> }) {
  const slug = (await params).part;
  const part = hydrolysisPartBySlug(slug);
  if (!part) notFound();

  const prevRef = hydrolysisLessonRef(part.number - 1);
  const nextRef = hydrolysisLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="Hydrolysis"
      chapterSlug="hydrolysis"
      description="Hydrolysis JEE Advanced notes"
      free={false}
      tabs={hydrolysisTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${HYDROLYSIS_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/hydrolysis", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-5">
          <HydrolysisMarkdown markdown={hydrolysisPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
