import Link from "next/link";
import { ChapterShell, ChapterLessonGrid } from "@/components/notes/canonical";
import { HYDROGEN_PARTS } from "./parts";
import { hydrogenHref, hydrogenTabs, sectionRangeLabel } from "./_chapter";

export const metadata = {
  title: "Hydrogen Master Notes — JEE Advanced | SYNERGIC BOND",
  description:
    "Exhaustive Hydrogen notes for JEE Advanced: isotopes, ortho-para hydrogen, hydrides, water, heavy water, hydrogen peroxide, complete reaction conditions, traps and sequence problems.",
};

export const dynamic = "force-dynamic";

export default function HydrogenChapterHub() {
  return (
    <ChapterShell kicker="JEE Advanced Inorganic Chemistry" subtitle="Hydrogen" tabs={hydrogenTabs()}>
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
        <Link href="/notes" className="hover:text-white">Chapter Notes</Link><span>/</span>
        <span className="text-cyan-300">Hydrogen</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1 text-xs font-black text-red-200">COMPLETE THEORY</span>
          <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs font-black text-violet-200">JEE ADVANCED</span>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-200">23 DARK TEACHING DIAGRAMS</span>
        </div>
        <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          Textbook-level Hydrogen notes assimilated from the complete supplied source set, with full theory, physical data,
          reaction conditions, hydrides, hydrogen bonding, water, heavy water, hydrogen peroxide, JEE traps and advanced
          reaction-sequence problems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-slate-300">
          <span className="rounded-xl bg-white/[.06] px-3 py-2">8 lessons · 24 comprehensive chapters</span>
          <span className="rounded-xl bg-white/[.06] px-3 py-2">239-entry reaction compendium</span>
          <span className="rounded-xl bg-white/[.06] px-3 py-2">Source audit + corrected equations</span>
        </div>
      </header>

      <ChapterLessonGrid
        lessons={HYDROGEN_PARTS.map((part) => ({
          href: hydrogenHref(part.number),
          number: `Lesson ${part.number}`,
          title: part.title,
          meta: sectionRangeLabel(part),
        }))}
      />
    </ChapterShell>
  );
}
