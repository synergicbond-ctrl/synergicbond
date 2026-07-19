import { ChapterLessonGroups, ChapterShell, type LessonGroup } from "@/components/notes/canonical";
import { SOLID_STATE_PARTS } from "./parts";

export const metadata = {
  title: "Solid State — JEE Advanced | Synergic Bond",
  description: "A 23-part premium JEE Advanced Solid State course following the KOHINOOR source sequence.",
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
        meta: "KOHINOOR source sequence · JEE Advanced",
      })),
  }));

  return (
    <ChapterShell
      kicker="JEE Advanced Physical Chemistry"
      subtitle="Solid State"
      headerTag="KOHINOOR sequence · 23 parts"
      tabs={[
        { label: "All 23 parts", href: "/learn/solid-state", active: true },
        ...GROUPS.map((group, index) => ({
          label: group.label,
          href: `/learn/solid-state#solid-group-${index + 1}`,
        })),
      ]}
    >
      <section className="mb-8 rounded-2xl border border-[#24405c] bg-[#122232] p-5 md:p-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e8b84b]">JEE Advanced only</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white md:text-5xl">Solid State — Complete 23-Part Course</h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-[#c3d1dd]">
          Exact KOHINOOR-driven sequence from crystalline and amorphous solids through crystal lattices, unit-cell geometry,
          Bravais systems, packing, voids, radius ratio, important structures, defects, electrical properties and magnetism.
        </p>
      </section>
      <ChapterLessonGroups groups={groups} anchorPrefix="solid-group" />
    </ChapterShell>
  );
}
