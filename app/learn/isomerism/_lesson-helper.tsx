import { AppShell } from "@/components/AppShell";
import { isomerismParts } from "./parts";
import type { ReactNode } from "react";

export function IsomerismLessonShell({
  part,
  children,
}: {
  part: number;
  children: ReactNode;
}) {
  const lesson = isomerismParts.find((p) => p.number === part);
  if (!lesson) return null;

  const currentIndex = isomerismParts.findIndex((p) => p.number === part);
  const prevLesson = isomerismParts[currentIndex - 1];
  const nextLesson = isomerismParts[currentIndex + 1];

  return (
    <AppShell
      discipline="JEE Organic Chemistry"
      chapterTitle="Isomerism"
      chapterSlug="isomerism"
      description="40-part premium course on isomerism"
      free={false}
      lessonNumber={`Part ${lesson.number} of ${isomerismParts.length}`}
      lessonTitle={lesson.title}
      hubRef={{
        href: "/learn/isomerism",
        label: `All 40 parts`,
      }}
      prevRef={
        prevLesson
          ? { href: `/learn/isomerism/${prevLesson.number}`, label: `Part ${prevLesson.number}` }
          : undefined
      }
      nextRef={
        nextLesson
          ? { href: `/learn/isomerism/${nextLesson.number}`, label: `Part ${nextLesson.number}` }
          : undefined
      }
    >
      {children}
    </AppShell>
  );
}
