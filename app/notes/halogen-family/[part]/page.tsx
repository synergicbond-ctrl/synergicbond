import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { HALOGEN_FAMILY_PARTS, halogenFamilyPartBySlug, halogenFamilyPartMarkdown } from "../parts";
import { halogenFamilyLessonRef, halogenFamilyTabs, sectionLabel } from "../_chapter";
import { HalogenFamilyMarkdown } from "../_markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return HALOGEN_FAMILY_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = halogenFamilyPartBySlug((await params).part);
  return part
    ? {
        title: `The Halogen Family — ${part.title} | SYNERGIC BOND`,
        description: `The Halogen Family (Group 17) JEE Advanced notes, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function HalogenFamilyPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = halogenFamilyPartBySlug((await params).part);
  if (!part) notFound();

  const prevRef = halogenFamilyLessonRef(part.number - 1);
  const nextRef = halogenFamilyLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Halogen Family"
      chapterSlug="halogen-family"
      description="The Halogen Family (Group 17) JEE Advanced notes"
      free={false}
      tabs={halogenFamilyTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${HALOGEN_FAMILY_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/halogen-family", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-5">
          <HalogenFamilyMarkdown markdown={halogenFamilyPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
