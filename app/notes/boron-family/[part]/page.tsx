import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { BORON_FAMILY_PARTS, boronFamilyPartBySlug, boronFamilyPartMarkdown } from "../parts";
import { boronFamilyLessonRef, boronFamilyTabs, sectionLabel } from "../_chapter";
import { BoronFamilyMarkdown } from "../_markdown";
import { BoronFamilyVisual } from "../visuals";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return BORON_FAMILY_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = boronFamilyPartBySlug((await params).part);
  return part
    ? {
        title: `The Boron Family — ${part.title} | SYNERGIC BOND`,
        description: `Boron family JEE Advanced notes, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function BoronFamilyPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = boronFamilyPartBySlug((await params).part);
  if (!part) notFound();

  const prevRef = boronFamilyLessonRef(part.number - 1);
  const nextRef = boronFamilyLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="The Boron Family"
      chapterSlug="boron-family"
      description="Boron family JEE Advanced notes"
      free={false}
      tabs={boronFamilyTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${BORON_FAMILY_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/boron-family", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <BoronFamilyVisual part={part.number} />
        <div className="space-y-5">
          <BoronFamilyMarkdown markdown={boronFamilyPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
