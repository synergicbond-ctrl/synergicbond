import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { NITROGEN_FAMILY_PARTS, nitrogenFamilyPartBySlug, nitrogenFamilyPartMarkdown } from "../parts";
import { nitrogenFamilyLessonRef, nitrogenFamilyTabs, sectionLabel } from "../_chapter";
import { NitrogenFamilyMarkdown } from "../_markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return NITROGEN_FAMILY_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = nitrogenFamilyPartBySlug((await params).part);
  return part
    ? {
        title: `The Nitrogen Family — ${part.title} | SYNERGIC BOND`,
        description: `The Nitrogen Family (Group 15) JEE Advanced notes, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function NitrogenFamilyPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = nitrogenFamilyPartBySlug((await params).part);
  if (!part) notFound();

  const prevRef = nitrogenFamilyLessonRef(part.number - 1);
  const nextRef = nitrogenFamilyLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Nitrogen Family"
      chapterSlug="nitrogen-family"
      description="The Nitrogen Family (Group 15) JEE Advanced notes"
      free={false}
      tabs={nitrogenFamilyTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${NITROGEN_FAMILY_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/nitrogen-family", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-5">
          <NitrogenFamilyMarkdown markdown={nitrogenFamilyPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
