import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ISOMERISM_GROUPS, isomerismParts, isomerismTabs } from "./parts";

export const metadata = { title: "Isomerism | Synergic Bond", description: "Premium JEE Main and JEE Advanced Isomerism course." };

export default function IsomerismPage() {
  const groups = ISOMERISM_GROUPS.map((group) => ({
    label: group.label,
    lessons: isomerismParts
      .filter((part) => part.number >= group.from && part.number <= group.to)
      .map((part) => ({
        href: `/learn/isomerism/${part.number}`,
        number: `Part ${part.number}`,
        title: part.title,
        meta: part.topics.join(" · "),
      })),
  }));

  return (
    <AppShell
      discipline="JEE Organic Chemistry"
      chapterTitle="Isomerism"
      chapterSlug="isomerism"
      description="A 40-part premium route from constitutional isomerism to conformations, chirality, optical activity, R/S assignment and special stereochemical cases."
      free={false}
      tabs={isomerismTabs()}
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
                    {lesson.meta && (
                      <p className="text-xs leading-relaxed text-[var(--text-muted)]">{lesson.meta}</p>
                    )}
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
