import { AppShell } from "@/components/AppShell";
import { CE_LESSONS, ceHref } from "./_components/meta";
import type { ReactNode } from "react";

export function ChemicalEquilibriumLessonShell({
  part,
  children,
}: {
  part: string;
  children: ReactNode;
}) {
  const currentIndex = CE_LESSONS.findIndex((l) => l.part === part);
  const lesson = CE_LESSONS[currentIndex];
  if (!lesson) return null;

  const prevLesson = CE_LESSONS[currentIndex - 1];
  const nextLesson = CE_LESSONS[currentIndex + 1];

  return (
    <AppShell
      discipline="JEE Physical Chemistry"
      chapterTitle="Chemical Equilibrium"
      chapterSlug="chemical-equilibrium"
      description="18-part chemical equilibrium course"
      free={false}
      lessonNumber={`Part ${lesson.part} of ${CE_LESSONS.length}`}
      lessonTitle={lesson.title}
      hubRef={{ href: "/learn/chemical-equilibrium", label: "All lessons" }}
      prevRef={prevLesson ? { href: ceHref(prevLesson.part), label: `Part ${prevLesson.part}` } : undefined}
      nextRef={nextLesson ? { href: ceHref(nextLesson.part), label: `Part ${nextLesson.part}` } : undefined}
    >
      <div className="mx-auto max-w-3xl">
        {children}
      </div>
    </AppShell>
  );
}
