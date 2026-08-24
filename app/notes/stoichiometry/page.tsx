import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { sbcCourse } from "@/lib/notes/sbcCourses";

export const metadata = {
  title: "Stoichiometry — SYNERGIC BOND",
  description: "Comprehensive notes for Stoichiometry.",
};

export default function StoichiometryHubPage() {
  const course = sbcCourse("stoichiometry");
  if (!course) return null;

  return (
    <AppShell
      discipline="Physical Chemistry · JEE Advanced"
      chapterTitle={course.title}
      chapterSlug="stoichiometry"
      description={course.intro}
      free={false}
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="grid gap-2">
          {course.lessons.map((lesson) => (
            <Link
              key={lesson.n}
              href={lesson.href}
              className="flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]/40"
            >
              <span className="flex shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)] px-3 py-2 font-mono text-sm font-bold text-[var(--accent)]">
                {String(lesson.n).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[var(--foreground)]">{lesson.title}</p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{lesson.desc}</p>
              </div>
              <span className="flex shrink-0 text-[var(--text-muted)]">→</span>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
