import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { OXYGEN_FAMILY_PARTS, oxygenFamilyPartBySlug, oxygenFamilyPartMarkdown } from "../parts";
import { oxygenFamilyLessonRef, oxygenFamilyTabs, sectionLabel } from "../_chapter";
import { OxygenFamilyMarkdown } from "../_markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return OXYGEN_FAMILY_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = oxygenFamilyPartBySlug((await params).part);
  return part
    ? {
        title: `The Oxygen Family — ${part.title} | SYNERGIC BOND`,
        description: `The Oxygen Family (Group 16) JEE Advanced notes, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function OxygenFamilyPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = oxygenFamilyPartBySlug((await params).part);
  if (!part) notFound();

  const prevRef = oxygenFamilyLessonRef(part.number - 1);
  const nextRef = oxygenFamilyLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Oxygen Family"
      chapterSlug="oxygen-family"
      description="The Oxygen Family (Group 16) JEE Advanced notes"
      free={false}
      tabs={oxygenFamilyTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${OXYGEN_FAMILY_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/oxygen-family", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-5">
          <OxygenFamilyMarkdown markdown={oxygenFamilyPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
