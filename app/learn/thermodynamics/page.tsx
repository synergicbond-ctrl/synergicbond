import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { THERMO_GROUPS, THERMO_LESSONS, thermoHref } from "./parts/meta";
import { thermoTabs } from "./_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics — 30-Part Course | Synergic Bond", description: "Complete 30-part Thermodynamics course with visual theory, derivations, graphs, tables, worked examples, and solutions." };

export default function ThermodynamicsPage() {
  const groups = THERMO_GROUPS.map((group) => ({
    label: group.label,
    lessons: THERMO_LESSONS
      .filter((lesson) => Number(lesson.part) >= group.from && Number(lesson.part) <= group.to)
      .map((lesson) => ({
        href: thermoHref(lesson.part),
        number: `Part ${lesson.part}`,
        title: lesson.title,
      })),
  }));

  return (
    <AppShell
      discipline="JEE Physical Chemistry"
      chapterTitle="Thermodynamics"
      chapterSlug="thermodynamics"
      description="Build the complete picture of energy, heat, work, entropy and spontaneity through 30 connected visual lessons, derivations, graphs, tables, worked examples and solutions."
      free={false}
      tabs={thermoTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 border-b border-[var(--border)] pb-3 font-serif text-2xl font-black text-[var(--accent)]">
              {group.label}
            </h3>
            <div className="grid gap-2">
              {group.lessons.map((lesson) => (
                <Link
                  key={lesson.number}
                  href={lesson.href}
                  className="flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]/40"
                >
                  <span className="flex shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)] px-3 py-2 font-mono text-sm font-bold text-[var(--accent)]">
                    {lesson.number.replace("Part ", "")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[var(--foreground)]">{lesson.title}</p>
                  </div>
                  <span className="flex shrink-0 text-[var(--text-muted)]">→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
