import { AppShell } from "@/components/AppShell";
import { ChapterLessonGroups, type LessonGroup } from "@/components/notes/canonical";
import { ISOMERISM_GROUPS, isomerismParts, isomerismTabs } from "./parts";
import Link from "next/link";

export const metadata = { title: "Isomerism | Synergic Bond", description: "Premium JEE Main and JEE Advanced Isomerism course." };

export default function IsomerismPage() {
  const groups: LessonGroup[] = ISOMERISM_GROUPS.map((group) => ({
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
      <div className="mx-auto max-w-3xl">
        <Link
          href="/learn/isomerism/studio"
          className="mb-8 block rounded-xl border border-[var(--accent)] bg-[var(--surface)] p-6 transition hover:bg-[var(--accent)]/10"
        >
          <span className="text-xs font-black uppercase tracking-widest text-[var(--accent)]">
            Interactive companion
          </span>
          <span className="mt-2 block text-2xl font-black text-[var(--foreground)]">
            3D Stereochemistry Studio →
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-[var(--text-body)]">
            Open the complete interactive HTML studio with molecular models,
            mirror-image exercises, projection conversions, and animated questions.
          </span>
        </Link>
        <ChapterLessonGroups groups={groups} />
      </div>
    </AppShell>
  );
}
