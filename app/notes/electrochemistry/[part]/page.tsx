import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { electroParts } from "../parts";
import { electroLessonRef, electroTabs } from "../_chapter";

export function generateStaticParams() { return electroParts.map((part) => ({ part: `part${part.number}` })); }

export default async function ElectrochemistryPart({ params }: { params: Promise<{ part: string }> }) {
  const { part: raw } = await params;
  const part = electroParts.find((item) => item.number === Number(raw.replace(/^part/, "")));
  if (!part) notFound();

  const prevRef = electroLessonRef(part.number - 1);
  const nextRef = electroLessonRef(part.number + 1);

  return (
    <AppShell
      discipline="JEE Physical Chemistry"
      chapterTitle="Electrochemistry"
      chapterSlug="electrochemistry"
      description="24-lesson electrochemistry course"
      free={false}
      tabs={electroTabs(part.number)}
      lessonNumber={`Lesson ${part.number} of ${electroParts.length}`}
      lessonTitle={part.title}
      hubRef={{ href: "/notes/electrochemistry", label: "All lessons" }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      <article className="mx-auto max-w-3xl space-y-6">
        {part.body}
      </article>
    </AppShell>
  );
}
