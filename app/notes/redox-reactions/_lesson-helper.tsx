import { AppShell } from "@/components/AppShell";
import { REDOX_LESSONS, redoxLessonRef, redoxTabs } from "./_chapter";
import type { ReactNode } from "react";

export function RedoxLessonShell({
  part,
  children,
}: {
  part: number;
  children: ReactNode;
}) {
  const lesson = REDOX_LESSONS.find((l) => l.number === part);
  if (!lesson) return null;

  const prevRef = redoxLessonRef(part - 1);
  const nextRef = redoxLessonRef(part + 1);

  return (
    <AppShell
      discipline="Physical Chemistry · Inorganic Chemistry"
      chapterTitle="Redox Reactions"
      chapterSlug="redox-reactions"
      description="Redox reactions notes"
      free={true}
      tabs={redoxTabs(part)}
      lessonNumber={`Lesson ${lesson.number}`}
      lessonTitle={lesson.title}
      hubRef={{
        href: "/notes/redox-reactions",
        label: "All lessons",
      }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      {children}
    </AppShell>
  );
}
