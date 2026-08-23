import React from "react";
import Link from "next/link";
import { getNotesChapter } from "@/lib/notesEngine";
import { CanonicalNotesStyles, ChapterLessonGroups } from "@/components/notes/canonical";
import { redoxLessonGroups } from "./_chapter";

export const metadata = {
  title: "Redox Reactions — SYNERGIC BOND",
  description:
    "Master electron transfer dynamics, equivalent weight determination, and volumetric titration analysis with verified interactive notes and solved examples.",
};

export default function RedoxReactionsHubPage() {
  const chapter = getNotesChapter("redox-reactions");

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
          <Link href="/notes" className="hover:text-[var(--accent)] transition">
            Notes Hub
          </Link>
          <span>/</span>
          <span className="text-[var(--text-faint)]">Physical Chemistry</span>
          <span>/</span>
          <span className="text-[var(--foreground)]">Redox Reactions</span>
        </nav>

        {/* Hero Banner */}
        <header className="rounded-lg bg-[var(--surface)] border border-[var(--border)] p-8 sm:p-10">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[var(--accent-wash)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--accent)] border border-[var(--border)]">
                Chapter 2 • Physical Chemistry
              </span>
              <span className="rounded-full bg-[var(--chem-rule)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--chem-rule)] border border-[var(--border)]">
                JEE & NEET Core
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--foreground)]">
              Redox Reactions
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-[var(--text-muted)] font-medium leading-relaxed">
              Complete foundation covering oxidation-reduction dynamics, equivalent concept (`n`-factor calculations across all functional groups), and volumetric titration analysis.
            </p>
          </div>
        </header>

        {/* Canonical 10-lesson grid, grouped by unit */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
            <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              Chapter Lessons
            </h2>
            <span className="text-xs font-bold text-[var(--text-muted)]">10 lessons · 2 units</span>
          </div>
          <CanonicalNotesStyles />
          <ChapterLessonGroups groups={redoxLessonGroups()} />
        </section>

        {/* Overview of Syllabus & Solved Skeletons */}
        {chapter && (
          <section className="mt-10 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)] flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--chem-bond)]" />
                Chapter Knowledge Summary
              </h2>
              <span className="text-xs font-bold text-[var(--text-muted)]">Syllabus Reference</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-[var(--foreground)]">Core Concepts Covered</h3>
                <ul className="list-disc pl-5 text-[var(--text-muted)] space-y-1 text-xs">
                  {chapter.syllabus.map((t: string, i: number) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[var(--chem-trap)]">Common Student Traps to Avoid</h3>
                <ul className="list-disc pl-5 text-[var(--text-muted)] space-y-1 text-xs">
                  {chapter.commonMistakes.map((m: string, i: number) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}