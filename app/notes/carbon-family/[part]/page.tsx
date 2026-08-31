import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { CARBON_FAMILY_PARTS, carbonFamilyPartBySlug, carbonFamilyPartMarkdown } from "../parts";
import { carbonFamilyLessonRef, carbonFamilyTabs, sectionLabel } from "../_chapter";
import { CarbonFamilyMarkdown } from "../_markdown";
import { CarbonFamilyVisual } from "../visuals";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return CARBON_FAMILY_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = carbonFamilyPartBySlug((await params).part);
  return part
    ? {
        title: `The Carbon Family — ${part.title} | SYNERGIC BOND`,
        description: `Carbon family (Group 14) JEE Advanced notes, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function CarbonFamilyPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = carbonFamilyPartBySlug((await params).part);
  if (!part) notFound();

  const prevRef = carbonFamilyLessonRef(part.number - 1);
  const nextRef = carbonFamilyLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Carbon Family"
      chapterSlug="carbon-family"
      description="Carbon family (Group 14) JEE Advanced notes"
      free={false}
      tabs={carbonFamilyTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${CARBON_FAMILY_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/carbon-family", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <CarbonFamilyVisual part={part.number} />
        <div className="space-y-5">
          <CarbonFamilyMarkdown markdown={carbonFamilyPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
