import Link from "next/link";
import { ChapterShell, ChapterLessonGrid } from "@/components/notes/canonical";
import { HYDROGEN_PARTS } from "./parts";
import { hydrogenHref, hydrogenTabs, sectionRangeLabel } from "./_chapter";

export const metadata = {
  title: "Hydrogen Comprehensive Chemistry Notes | SYNERGIC BOND",
  description:
    "Comprehensive Hydrogen notes with isotopes, molecular orbitals, ortho-para hydrogen, industrial preparation, catalysis, hydrides, diborane, hydrogen bonding, water, heavy water, hydrogen peroxide, mechanisms, reactions and advanced problems.",
};

export const dynamic = "force-dynamic";

export default function HydrogenChapterHub() {
  return (
    <ChapterShell kicker="Comprehensive Chemistry Notes" subtitle="Hydrogen" tabs={hydrogenTabs()}>
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
        <Link href="/notes" className="hover:text-white">Chapter Notes</Link><span>/</span>
        <span className="text-cyan-300">Hydrogen</span>
      </nav>

      <header className="mb-9 overflow-hidden rounded-[30px] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgba(87,61,166,.25),transparent_38%),linear-gradient(135deg,#06101c,#0b1a2b_55%,#10091f)] px-6 py-8 shadow-2xl shadow-black/30 sm:px-9 lg:px-12 lg:py-11">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-200">COMPLETE THEORY</span>
          <span className="rounded-full border border-violet-300/25 bg-violet-400/10 px-3 py-1 text-xs font-black text-violet-200">MOT + MECHANISMS</span>
          <span className="rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-xs font-black text-amber-200">31 DARK TEACHING VISUALS</span>
        </div>

        <h1 className="mt-6 max-w-5xl bg-gradient-to-r from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl lg:text-6xl">
          Hydrogen and Its Compounds
        </h1>
        <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
          A textbook-sequenced chapter containing complete theory, physical data, individually balanced reactions, industrial conditions, molecular-orbital explanations, reaction mechanisms, exceptions and advanced sequence problems.
        </p>

        <div className="mt-7 grid gap-3 text-sm font-bold text-slate-200 sm:grid-cols-2 xl:grid-cols-4">
          <span className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3">8 coherent lessons · 24 chapters</span>
          <span className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3">239+ reaction-condition entries</span>
          <span className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3">H₂, H-bond and 3c–2e MOT</span>
          <span className="rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3">Hydride, catalytic and peroxide mechanisms</span>
        </div>
      </header>

      <ChapterLessonGrid
        lessons={HYDROGEN_PARTS.map((part) => ({
          href: hydrogenHref(part.number),
          number: `${part.number}`,
          title: part.title,
          meta: sectionRangeLabel(part),
        }))}
      />
    </ChapterShell>
  );
}
