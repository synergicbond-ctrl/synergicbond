import Link from "next/link";
import type { ReactNode } from "react";
import {
  CanonicalNotesStyles,
  ChapterIdentityHeader,
  ChapterLessonPager,
  ChapterContentsRail,
  TopicHeader,
  type ChapterRailGroup,
  type ChapterRailLesson,
  type LessonRef,
} from "@/components/notes/canonical";
import { SBC_COURSES, sbcCourse } from "@/lib/notes/sbcCourses";

// Canonical reading shell for the Some Basic Concepts of Chemistry course family:
// Mole Concept · Stoichiometry · Concentration Terms · Eudiometry.
// Sidebar layout with ChapterIdentityHeader + right-side lesson rail.

function lessonRefFor(courseId: string, n: number): LessonRef | undefined {
  const course = sbcCourse(courseId);
  const lesson = course?.lessons.find((l) => l.n === n);
  if (!course || !lesson) return undefined;
  return { href: lesson.href, number: `Lesson ${lesson.n}`, title: lesson.title };
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

  const currentLesson = course.lessons.find((l) => l.n === part);

  const groups: ChapterRailGroup[] = [
    { label: course.title, from: 1, to: course.lessons.length, accent: "var(--chem-bond)" },
  ];
  const lessons: ChapterRailLesson[] = course.lessons.map((l) => ({
    part: l.n,
    title: l.title,
    href: l.href,
  }));

  return (
    <>
      <CanonicalNotesStyles />
      {/* compact lesson bar */}
      <div className="sbnLessonBar">
        <div className="sbnLessonBarInner">
          <Link href={course.hubHref} className="sbnLessonBarBack">← {course.title}</Link>
          <span className="sbnLessonBarPos">
            Lesson {part} / {course.lessons.length}
          </span>
        </div>
      </div>

      {/* sidebar reading layout */}
      <div className="sbnSidebarBody">
        <article className="sbnCanvas" style={{ maxWidth: "720px" }}>
          <ChapterIdentityHeader
            subject="Physical Chemistry · JEE Advanced"
            chapterName={course.title}
            descriptor={course.intro}
            topicCount={course.lessons.length}
            accentColor="var(--chem-bond)"
          />

          {currentLesson && (
            <TopicHeader
              as="h1"
              eyebrow={`Lesson ${String(part).padStart(2, "0")}`}
              title={currentLesson.title}
              descriptor={currentLesson.desc}
              accentColor="var(--chem-bond)"
            />
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {children}
          </div>

          <ChapterLessonPager
            prev={lessonRefFor(courseId, part - 1)}
            next={lessonRefFor(courseId, part + 1)}
            hubHref={course.hubHref}
            hubLabel={`All ${course.lessons.length} lessons`}
          />
        </article>

        <ChapterContentsRail
          title="Lesson Contents"
          groups={groups}
          lessons={lessons}
          currentPart={part}
        />
      </div>
    </>
  );
}

export function SbcCourseHub({ courseId }: { courseId: string }) {
  const course = sbcCourse(courseId);
  if (!course) return null;

  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <header style={{ marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: "10px",
            fontWeight: 900,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--chem-bond)",
            marginBottom: "0.5rem",
          }}>
            Physical Chemistry · JEE Advanced
          </p>
          <h1 style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "0.75rem",
          }}>
            {course.title}
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-muted)", maxWidth: "60ch" }}>
            {course.intro}
          </p>
          <div style={{ marginTop: "1rem", height: "1px", background: "linear-gradient(to right, var(--chem-bond), transparent)", opacity: 0.2 }} />
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
          {course.lessons.map((lesson) => (
            <Link
              key={lesson.n}
              href={lesson.href}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "0.875rem 1rem",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                textDecoration: "none",
                transition: "border-color 120ms",
              }}
              className="hover:border-[var(--chem-bond)]/40"
            >
              <span style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "10px",
                fontWeight: 700,
                color: "var(--chem-bond)",
                flexShrink: 0,
                marginTop: "0.25rem",
                minWidth: "2.5rem",
              }}>
                {String(lesson.n).padStart(2, "0")}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--foreground)", lineHeight: 1.4, marginBottom: "0.2rem" }}>
                  {lesson.title}
                </p>
                <p style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
                  {lesson.desc}
                </p>
              </div>
              <span style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: "0.25rem" }}>→</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Part of{" "}
            {SBC_COURSES.filter((c) => c.id !== courseId).map((c, i, arr) => (
              <span key={c.id}>
                <Link href={c.hubHref} style={{ color: "var(--chem-bond)", textDecoration: "none" }}>{c.title}</Link>
                {i < arr.length - 1 ? ", " : ""}
              </span>
            ))}
            {" "}— Some Basic Concepts of Chemistry
          </p>
        </div>
      </div>
    </main>
  );
}
