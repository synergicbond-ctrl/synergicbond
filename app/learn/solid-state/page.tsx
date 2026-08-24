import Link from "next/link";
import { ChapterLessonGroups, type LessonGroup } from "@/components/notes/canonical";
import { AppShell } from "@/components/AppShell";
import { SOLID_STATE_PARTS } from "./parts";

export const metadata = {
  title: "Solid State — JEE Advanced | Synergic Bond",
  description: "A 23-part premium JEE Advanced Solid State course following a structured, coordinate-resolved sequence.",
};

const GROUPS = [
  { label: "Foundations and crystal classification", from: 1, to: 4 },
  { label: "Lattice, unit cells and crystal systems", from: 5, to: 10 },
  { label: "Symmetry, Z, radius relations and density", from: 11, to: 16 },
  { label: "Packing and void geometry", from: 17, to: 18 },
  { label: "Radius ratio and important structures", from: 19, to: 20 },
  { label: "Defects and electrical properties", from: 21, to: 22 },
  { label: "Magnetic properties", from: 23, to: 23 },
] as const;

export default function SolidStatePage() {
  const groups: LessonGroup[] = GROUPS.map((group) => ({
    label: group.label,
    lessons: SOLID_STATE_PARTS
      .filter((part) => part.part >= group.from && part.part <= group.to)
      .map((part) => ({
        href: `/learn/solid-state/${part.part}`,
        number: `Part ${String(part.part).padStart(2, "0")}`,
        title: part.title,
        meta: "JEE Advanced",
      })),
  }));

  return (
    <AppShell
      discipline="JEE Advanced Physical Chemistry"
      chapterTitle="Solid State"
      chapterSlug="solid-state"
      description="A structured sequence from crystalline and amorphous solids through crystal lattices, unit-cell geometry, Bravais systems, packing, voids, radius ratio, important structures, defects, electrical properties and magnetism."
      free={true}
      tabs={[
        { label: "All 23 parts", href: "/learn/solid-state", active: true },
        ...GROUPS.map((group, index) => ({
          label: group.label,
          href: `/learn/solid-state#solid-group-${index + 1}`,
        })),
      ]}
    >
      <div className="mx-auto max-w-3xl">
      <section className="mb-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--text-muted)]">Complete single-page edition</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-white md:text-3xl">89-Page Geometry Master + Advanced Extension</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-[var(--text-muted)]">
          Read the complete source-mapped course as one continuous chapter with a page-by-page audit, modified worked examples,
          original geometry diagrams, diffraction, polyhedral chemistry, defect thermodynamics and deeper electronic and magnetic theory.
        </p>
        <Link
          href="/learn/solid-state/master"
          className="mt-5 inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm font-black text-[var(--foreground)] transition hover:border-[var(--accent)]/40"
        >
          Open the Solid State Master →
        </Link>
      </section>
      <ChapterLessonGroups groups={groups} anchorPrefix="solid-group" />
      </div>
    </AppShell>
  );
}
