import { AppShell } from "@/components/AppShell";
import { REDOX_PARTS } from "./parts";
import { redoxLessonRef, redoxTabs } from "./_chapter";
import type { ReactNode } from "react";

export function RedoxLessonShell({
  part,
  children,
}: {
  part: number;
  children: ReactNode;
}) {
  const lesson = REDOX_PARTS.find((l: any) => l.number === part);
  if (!lesson) return null;

  const currentIndex = REDOX_PARTS.findIndex((l: any) => l.number === part);
  const prevRef = redoxLessonRef(currentIndex - 1);
  const nextRef = redoxLessonRef(currentIndex + 1);

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
