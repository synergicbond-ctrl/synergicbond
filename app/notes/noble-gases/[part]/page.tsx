import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { NOBLE_GASES_PARTS, nobleGasesPartBySlug, nobleGasesPartMarkdown } from "../parts";
import { nobleGasesLessonRef, nobleGasesTabs, sectionLabel } from "../_chapter";
import { NobleGasesMarkdown } from "../_markdown";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return NOBLE_GASES_PARTS.map((part) => ({ part: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ part: string }> }) {
  const part = nobleGasesPartBySlug((await params).part);
  return part
    ? {
        title: `The Noble Gases — ${part.title} | SYNERGIC BOND`,
        description: `The Noble Gases (Group 18) JEE Advanced notes, Lesson ${part.number}: ${part.title}.`,
      }
    : {};
}

export default async function NobleGasesPartPage({ params }: { params: Promise<{ part: string }> }) {
  const part = nobleGasesPartBySlug((await params).part);
  if (!part) notFound();

  const prevRef = nobleGasesLessonRef(part.number - 1);
  const nextRef = nobleGasesLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Noble Gases"
      chapterSlug="noble-gases"
      description="The Noble Gases (Group 18) JEE Advanced notes"
      free={false}
      tabs={nobleGasesTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${NOBLE_GASES_PARTS.length} · ${sectionLabel(part)}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/noble-gases", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-5">
          <NobleGasesMarkdown markdown={nobleGasesPartMarkdown(part)} />
        </div>
      </article>
    </AppShell>
  );
}
