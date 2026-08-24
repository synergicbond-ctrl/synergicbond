import { AppShell } from "@/components/AppShell";
import { sbcCourse } from "@/lib/notes/sbcCourses";
import type { ReactNode } from "react";

export function MoleConceptLessonShell({
  part,
  children,
}: {
  part: number;
  children: ReactNode;
}) {
  const course = sbcCourse("mole-concept");
  if (!course) return null;

  const lesson = course.lessons.find((l) => l.n === part);
  if (!lesson) return null;

  const currentIndex = course.lessons.findIndex((l) => l.n === part);
  const prevLesson = course.lessons[currentIndex - 1];
  const nextLesson = course.lessons[currentIndex + 1];

  return (
    <AppShell
      discipline="Physical Chemistry · JEE Advanced"
      chapterTitle={course.title}
      chapterSlug="mole-concept"
      description={course.intro}
      free={false}
      lessonNumber={`Lesson ${lesson.n} of ${course.lessons.length}`}
      lessonTitle={lesson.title}
      hubRef={{
        href: course.hubHref,
        label: `All ${course.lessons.length} lessons`,
      }}
      prevRef={
        prevLesson
          ? { href: prevLesson.href, label: `Lesson ${prevLesson.n}` }
          : undefined
      }
      nextRef={
        nextLesson
          ? { href: nextLesson.href, label: `Lesson ${nextLesson.n}` }
          : undefined
      }
    >
      {children}
    </AppShell>
  );
}
