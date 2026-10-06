import { AppShell } from "@/components/AppShell";
import type { ChapterTab } from "@/components/notes/canonical";
import { FAMILY_ASSIGNMENTS, type AssignmentChapter } from "@/lib/assignments/registry";

export function FamilyAssignments({
  chapter,
  discipline = "JEE Inorganic Chemistry",
  tabs,
}: {
  chapter: AssignmentChapter;
  discipline?: string;
  tabs: ChapterTab[];
}) {
  const info = FAMILY_ASSIGNMENTS[chapter];
  return (
    <AppShell
      discipline={discipline}
      chapterTitle={info.title}
      chapterSlug={chapter}
      description={`${info.blurb} Question papers, answer keys and solutions.`}
      free={false}
      tabs={tabs}
    >
      <ul className="mx-auto max-w-3xl space-y-3">
        {info.items.map((item) => (
          <li key={item.file}>
            <a
              href={`/notes/assignments/${chapter}/${item.file}`}
              target="_blank"
              rel="noopener"
              className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
            >
              <span className="text-xs uppercase tracking-wide text-[var(--accent)]">PDF</span>
              <span className="mt-1 block text-base text-[var(--foreground)]">{item.title}</span>
              <span className="mt-1 block text-sm text-[var(--text-body)]">{item.note}</span>
            </a>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
