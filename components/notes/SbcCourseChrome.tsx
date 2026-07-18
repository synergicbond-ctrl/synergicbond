import type { ReactNode } from "react";
import {
  ChapterShell,
  ChapterLessonPager,
  ChapterPartStrip,
  ChapterLessonGrid,
  type ChapterTab,
  type LessonRef,
} from "@/components/notes/canonical";
import { SBC_COURSES, sbcCourse } from "@/lib/notes/sbcCourses";

// Canonical chrome for the Some Basic Concepts of Chemistry course family
// (Mole Concept · Stoichiometry · Concentration Terms · Eudiometry).
// Top tabs = the real course sections of the chapter; pager = real lesson
// titles. Lesson content renders untouched inside the frame.

export function sbcTabs(activeCourseId?: string): ChapterTab[] {
  return [
    { label: "Chapter hub", href: "/notes/some-basic-concepts-of-chemistry", active: false },
    ...SBC_COURSES.map((course) => ({
      label: course.title,
      href: course.hubHref,
      active: course.id === activeCourseId,
    })),
  ];
}

function lessonRefFor(courseId: string, n: number): LessonRef | undefined {
  const course = sbcCourse(courseId);
  const lesson = course?.lessons.find((l) => l.n === n);
  if (!course || !lesson) return undefined;
  return {
    href: lesson.href,
    number: `Lesson ${lesson.n}`,
    title: lesson.title,
  };
}

export function SbcCoursePartFrame({
  courseId,
  part,
  children,
}: {
  courseId: string;
  part: number;
  children: ReactNode;
}) {
  const course = sbcCourse(courseId);
  if (!course) return <>{children}</>;

  return (
    <ChapterShell
      bleed
      kicker="JEE Physical Chemistry · Some Basic Concepts of Chemistry"
      subtitle={course.title}
      tabs={sbcTabs(courseId)}
    >
      <div className="sbnPartChrome">
        <ChapterPartStrip
          hubHref={course.hubHref}
          hubLabel={`${course.title} — all lessons`}
          positionLabel={`Lesson ${part} of ${course.lessons.length}`}
        />
      </div>
      {children}
      <div className="sbnPartChrome">
        <ChapterLessonPager
          prev={lessonRefFor(courseId, part - 1)}
          next={lessonRefFor(courseId, part + 1)}
          hubHref={course.hubHref}
          hubLabel="All lessons"
        />
      </div>
    </ChapterShell>
  );
}

export function SbcCourseHub({ courseId }: { courseId: string }) {
  const course = sbcCourse(courseId);
  if (!course) return null;

  return (
    <ChapterShell
      kicker="JEE Physical Chemistry · Some Basic Concepts of Chemistry"
      subtitle={course.title}
      tabs={sbcTabs(courseId)}
    >
      <p style={{ margin: "4px 0 22px", maxWidth: 860, color: "#c3d1dd", fontSize: 14.5, lineHeight: 1.7 }}>
        {course.intro}
      </p>
      <ChapterLessonGrid
        lessons={course.lessons.map((lesson) => ({
          href: lesson.href,
          number: `Lesson ${lesson.n}`,
          title: lesson.title,
          meta: lesson.desc,
        }))}
      />
    </ChapterShell>
  );
}
