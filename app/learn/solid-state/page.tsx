import "katex/dist/katex.min.css";
import "./lab/lab.css";
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { LabToc, type TocItem } from "./lab/_toc";
import { FoundationsChapter } from "./lab/s_foundations";
import { CubicChapter } from "./lab/s_cubic";
import { PackingChapter } from "./lab/s_packing";
import { IonicChapter } from "./lab/s_ionic";
import { DefectsChapter } from "./lab/s_defects";
import { ElectronicChapter } from "./lab/s_electronic";
import { MagneticChapter } from "./lab/s_magnetic";
import { RevisionChapter } from "./lab/s_revision";
import { PracticeChapter } from "./lab/s_practice";
import { MasterNotes } from "./lab/_fulltext";

export const metadata: Metadata = {
  title: "Solid State | JEE Advanced | Synergic Bond",
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
  { id: "practice", n: "?", label: "Practice & key" },
];

export default async function Page() {
  return (
    <AppShell
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Solid State"
      chapterSlug="solid-state"
      description="Seven parts, from the arrangement of particles to the behaviour of whole crystals. Each concept is built in front of you, derived step by step and tested with exam traps and worked problems. Every part ends with the complete written notes."
      free={true}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {[
            ["Build", "Watch every structure assemble in 3D. Slice a cell to see the fraction of each atom that belongs to it."],
            ["Derive", "Every key result is derived line by line: packing efficiency, c/a, void sizes, radius ratios, spin-only moment."],
            ["Read in full", "Complete written notes, review points and practice questions follow every part."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="text-sm font-black uppercase tracking-[0.14em] text-[var(--accent)]">{t}</div>
              <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{d}</p>
            </div>
          ))}
        </div>
        <LabToc items={TOC} />
        <div className="space-y-24 pt-10">
          <div className="space-y-10">
            <FoundationsChapter />
            <MasterNotes parts={[1, 2]} />
          </div>
          <div className="space-y-10">
            <CubicChapter />
            <MasterNotes parts={[3]} />
          </div>
          <div className="space-y-10">
            <PackingChapter />
            <MasterNotes parts={[4, 5]} />
          </div>
          <div className="space-y-10">
            <IonicChapter />
            <MasterNotes parts={[6, 7]} />
          </div>
          <div className="space-y-10">
            <DefectsChapter />
            <MasterNotes parts={[8]} />
          </div>
          <div className="space-y-10">
            <ElectronicChapter />
            <MasterNotes parts={[9]} />
          </div>
          <div className="space-y-10">
            <MagneticChapter />
            <MasterNotes parts={[10]} />
          </div>
          <RevisionChapter />
          <PracticeChapter />
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)]">
          <span>Prefer separate pages? The written notes and the 23-part course are available on their own.</span>
          <span className="flex flex-wrap gap-2">
            <Link href="/learn/solid-state/master" className="rounded-full border border-[var(--border)] px-4 py-1.5 font-semibold text-[var(--foreground)] hover:border-[var(--accent)]">
              Open the written notes →
            </Link>
            <Link href="/learn/solid-state/course" className="rounded-full border border-[var(--border)] px-4 py-1.5 font-semibold text-[var(--foreground)] hover:border-[var(--accent)]">
              23-part course →
            </Link>
          </span>
        </div>
      </div>
    </AppShell>
  );
}
