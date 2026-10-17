import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { LabToc, type TocItem } from "./_toc";
import { FoundationsChapter } from "./s_foundations";
import { CubicChapter } from "./s_cubic";
import { PackingChapter } from "./s_packing";
import { IonicChapter } from "./s_ionic";
import { DefectsChapter } from "./s_defects";
import { ElectronicChapter } from "./s_electronic";
import { MagneticChapter } from "./s_magnetic";
import { RevisionChapter } from "./s_revision";

export const metadata: Metadata = {
  title: "Solid State: Interactive Textbook | JEE Advanced | Synergic Bond",
  description:
    "The complete JEE Advanced Solid State chapter as an interactive textbook: build crystals in 3D, slice unit cells, derive packing efficiency and radius ratios, watch defects, bands, p-n junctions, superconductors and magnetic domains in action.",
};

const TOC: TocItem[] = [
  { id: "foundations", n: "1", label: "What a crystal is" },
  { id: "cubic", n: "2", label: "Cubic cells" },
  { id: "packing", n: "3", label: "Close packing & voids" },
  { id: "ionic", n: "4", label: "Ionic crystals" },
  { id: "defects", n: "5", label: "Defects" },
  { id: "electronic", n: "6", label: "Electrical" },
  { id: "magnetic", n: "7", label: "Magnetic" },
  { id: "revision", n: "★", label: "Revision" },
];

export default function Page() {
  return (
    <AppShell
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Solid State: Interactive Textbook"
      chapterSlug="solid-state"
      description="Seven parts, from the arrangement of particles to the behaviour of whole crystals. Each concept is built in front of you, derived step by step, then tested with exam traps and worked problems."
      free={true}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            ["Build", "Watch every structure assemble in 3D. Slice a cell to see the fraction of each atom that belongs to it."],
            ["Derive", "Every key result is derived line by line: packing efficiency, c/a, void sizes, radius ratios, spin-only moment."],
            ["Practise", "Each part ends with the exam traps and worked problems whose answers are checked numerically."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="text-sm font-black uppercase tracking-[0.14em] text-[var(--accent)]">{t}</div>
              <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{d}</p>
            </div>
          ))}
        </div>
        <LabToc items={TOC} />
        <div className="space-y-24 pt-10">
          <FoundationsChapter />
          <CubicChapter />
          <PackingChapter />
          <IonicChapter />
          <DefectsChapter />
          <ElectronicChapter />
          <MagneticChapter />
          <RevisionChapter />
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)]">
          <span>Prefer reading? The same chapter is available as text-only notes.</span>
          <Link href="/learn/solid-state/master" className="rounded-full border border-[var(--border)] px-4 py-1.5 font-semibold text-[var(--foreground)] hover:border-[var(--accent)]">
            Open the written notes →
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
