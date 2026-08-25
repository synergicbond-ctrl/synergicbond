import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { sbcCourse } from "@/lib/notes/sbcCourses";

export const metadata = {
  title: "Eudiometry — SYNERGIC BOND",
  description: "Comprehensive notes for Eudiometry.",
};

export default function EudiometryHubPage() {
  const course = sbcCourse("eudiometry");
  if (!course) return null;

  return (
    <AppShell
      discipline="Physical Chemistry · JEE Advanced"
      chapterTitle={course.title}
      chapterSlug="eudiometry"
      description={course.intro}
      free={false}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLessonGrid
          lessons={course.lessons.map((lesson) => ({
            href: lesson.href,
            number: `Lesson ${String(lesson.n).padStart(2, "0")}`,
            title: lesson.title,
            meta: lesson.desc,
          }))}
        />
      </div>
    </AppShell>
  );
}
