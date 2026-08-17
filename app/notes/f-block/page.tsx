import Link from "next/link";

import { ChapterLessonGrid, ChapterShell } from "@/components/notes/canonical";
import { fBlockHref, fBlockTabs } from "./_chapter";
import { F_BLOCK_PARTS } from "./parts";
import { FBlockVisual } from "./visuals";

export const metadata = {
  title: "F-block Elements — NCERT-first JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Premium NCERT-first JEE Advanced F-block notes with 21 original scientific visuals covering lanthanoids, actinoids, configurations, oxidation states, contraction, colour, magnetism, bonding, separation and applications.",
};

export const dynamic = "force-dynamic";

const STATS = [
  ["4", "substantial parts"],
  ["21", "original teaching visuals"],
  ["100%", "NCERT core coverage"],
  ["SVG", "editable masters"],
];

export default function FBlockHubPage() {
  return (
    <ChapterShell kicker="JEE Advanced Inorganic Chemistry" subtitle="F-block Elements" tabs={fBlockTabs()}>
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link href="/notes" className="hover:text-white">Chapter Notes</Link>
        <span>/</span>
        <span className="text-fuchsia-300">F-block Elements</span>
      </nav>

      <header className="mb-8 overflow-hidden rounded-lg border border-fuchsia-300/15 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,.20),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,.12),transparent_32%),linear-gradient(135deg,#090d18,#0b1422_60%,#170b20)] p-6 shadow-2xl shadow-black/25 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 px-3 py-1 text-xs font-black text-fuchsia-200">JEE ADVANCED</span>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-200">NCERT-FIRST</span>
          <span className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs font-black text-cyan-200">LANTHANOIDS + ACTINOIDS</span>
        </div>

        <h1 className="mt-5 max-w-5xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl">
          F-block chemistry organised around configuration, contraction and oxidation-state logic
        </h1>
        <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-slate-300 sm:text-lg">
          Four substantial parts covering the complete NCERT core, lanthanoid and actinoid trends, colour, magnetism, contraction, separation methods, applications, exam traps and worked JEE Advanced reasoning—supported by 21 exact, chapter-specific visual explanations.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-white/[.045] px-4 py-4">
              <p className="text-2xl font-black text-fuchsia-200">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="mb-8">
        <FBlockVisual part={1} heroOnly />
      </div>

      <section className="mb-8 grid gap-3 md:grid-cols-3">
        {[
          ["NCERT foundation", "Exact chapter logic rewritten in simple language: configurations, states, contraction, colour, magnetism and comparison."],
          ["JEE depth", "Orders, exceptions, actinyl ions, redox stability, separation chemistry, assertion–reason checks and integrated examples."],
          ["Revision ready", "Compact tables, configuration atlas, trend matrix and a final checklist for fast advanced-level revision."],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-lg border border-white/10 bg-[#0a1220] p-5">
            <h2 className="font-black text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
          </article>
        ))}
      </section>

      <ChapterLessonGrid
        lessons={F_BLOCK_PARTS.map((part) => ({
          href: fBlockHref(part.number),
          number: `Part ${part.number}`,
          title: part.title,
          meta: `${part.printPages} · ${part.focus}`,
        }))}
      />
    </ChapterShell>
  );
}
