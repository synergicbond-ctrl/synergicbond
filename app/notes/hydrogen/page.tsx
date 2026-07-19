import Link from "next/link";
import { ChapterShell, ChapterLessonGrid } from "@/components/notes/canonical";
import { HYDROGEN_PARTS } from "./parts";
import { hydrogenHref, hydrogenTabs, sectionRangeLabel } from "./_chapter";

export const metadata = {
  title: "Hydrogen Master Notes — NCERT + JEE Advanced | SYNERGIC BOND",
  description:
    "Complete Hydrogen master notes: NCERT coverage plus JEE Advanced depth on isotopes, ortho-para hydrogen, hydrides, water, heavy water, H2O2, hydrogen bonding and hydrogen economy.",
};

export const dynamic = "force-dynamic";

export default function HydrogenChapterHub() {
  return (
    <ChapterShell kicker="JEE Inorganic Chemistry" subtitle="Hydrogen" tabs={hydrogenTabs()}>
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
        <Link href="/notes" className="hover:text-white">Chapter Notes</Link><span>/</span>
        <span className="text-cyan-300">Hydrogen</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1 text-xs font-black text-red-200">CORE THEORY</span>
          <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs font-black text-violet-200">JEE ADVANCED</span>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-200">26 ORIGINAL DIAGRAMS</span>
        </div>
        <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-slate-300 sm:text-lg">
          Complete Hydrogen master notes covering core theory, advanced inorganic chemistry, isotopes, dihydrogen,
          ortho–para hydrogen, hydrides, hydrogen bonding, water, heavy water, hydrogen peroxide and hydrogen economy.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-slate-300">
          <span className="rounded-xl bg-white/[.06] px-3 py-2">8 lessons · 72 numbered sections</span>
          <span className="rounded-xl bg-white/[.06] px-3 py-2">Verified data + reaction anchors</span>
          <span className="rounded-xl bg-white/[.06] px-3 py-2">Reaction bank + JEE traps</span>
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
