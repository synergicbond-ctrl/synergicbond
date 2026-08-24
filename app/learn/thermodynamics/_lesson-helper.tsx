import { AppShell } from "@/components/AppShell";
import { THERMO_LESSONS, thermoHref } from "./parts/meta";
import { thermoTabs, thermoLessonRef } from "./_components/ThermoChapter";
import type { ReactNode } from "react";

export function ThermoLessonShell({
  part,
  children,
}: {
  part: number;
  children: ReactNode;
}) {
  const index = part - 1;
  const lesson = THERMO_LESSONS[index];
  if (!lesson) return null;

  const prevRef = thermoLessonRef(index - 1);
  const nextRef = thermoLessonRef(index + 1);

  return (
    <AppShell
      discipline="JEE Physical Chemistry"
      chapterTitle="Thermodynamics"
      chapterSlug="thermodynamics"
      description="30-part comprehensive thermodynamics course"
      free={false}
      tabs={thermoTabs(part)}
      lessonNumber={`Part ${String(part).padStart(2, "0")} of ${THERMO_LESSONS.length}`}
      lessonTitle={lesson.title}
      hubRef={{
        href: "/learn/thermodynamics",
        label: "All lessons",
      }}
      prevRef={
        prevRef ? { href: prevRef.href, label: `Part ${prevRef.number}` } : undefined
      }
      nextRef={
        nextRef ? { href: nextRef.href, label: `Part ${nextRef.number}` } : undefined
      }
    >
      {children}
    </AppShell>
  );
}
