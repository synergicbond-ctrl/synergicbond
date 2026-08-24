import { AppShell } from "@/components/AppShell";
import { HYDROGEN_PARTS } from "./parts";
import { hydrogenLessonRef, hydrogenTabs } from "./_chapter";
import type { ReactNode } from "react";

export function HydrogenLessonShell({
  part,
  children,
}: {
  part: number;
  children: ReactNode;
}) {
  const lesson = HYDROGEN_PARTS.find((l: any) => l.number === part);
  if (!lesson) return null;

  const currentIndex = HYDROGEN_PARTS.findIndex((l: any) => l.number === part);
  const prevRef = hydrogenLessonRef(currentIndex - 1);
  const nextRef = hydrogenLessonRef(currentIndex + 1);

  return (
    <AppShell
      discipline="Physical Chemistry · Inorganic Chemistry"
      chapterTitle="Hydrogen"
      chapterSlug="hydrogen"
      description="Hydrogen chemistry notes and study materials"
      free={true}
      tabs={hydrogenTabs(part)}
      lessonNumber={`Lesson ${lesson.number}`}
      lessonTitle={lesson.title}
      hubRef={{
        href: "/notes/hydrogen",
        label: "All lessons",
      }}
      prevRef={prevRef ? { href: prevRef.href, label: prevRef.number } : undefined}
      nextRef={nextRef ? { href: nextRef.href, label: nextRef.number } : undefined}
    >
      {children}
    </AppShell>
  );
}
