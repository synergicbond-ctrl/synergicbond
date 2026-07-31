import Link from "next/link";

import {
  ChapterLessonGrid,
  ChapterShell,
} from "@/components/notes/canonical";
import { S_BLOCK_PARTS } from "./parts";
import { sBlockHref, sBlockTabs } from "./_chapter";
import { SBlockVisual } from "./visuals";

export const metadata = {
  title: "S-block Elements — Complete JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Complete NCERT and JEE Advanced s-block course in 15 balanced parts: exact Group 1 and Group 2 data, trends, exceptions, reactions, industrial compounds, dark SVG visuals, traps and worked problems.",
};

export const dynamic = "force-dynamic";

const STATS = [
  ["15", "complete parts"],
  ["100%", "NCERT chapter map"],
  ["16", "dark visual systems"],
  ["20", "worked JEE examples"],
];

export default function SBlockHub() {
  return (
    <ChapterShell
      kicker="JEE Inorganic Chemistry"
      subtitle="S-block Elements"
      tabs={sBlockTabs()}
    >
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm">
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <span>/</span>
        <Link href="/notes" className="hover:text-white">
          Chapter Notes
        </Link>
        <span>/</span>
        <span className="text-cyan-300">S-block Elements</span>
      </nav>

      <header className="mb-8 overflow-hidden rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,.18),transparent_35%),linear-gradient(135deg,#0a1624,#07101b_58%,#130d24)] p-5 shadow-2xl shadow-black/25 sm:p-8">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs font-black text-violet-200">
            JEE ADVANCED
          </span>
          <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-200">
            COMPLETE NCERT COVERAGE
          </span>
          <span className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs font-black text-cyan-200">
            15 BALANCED PARTS
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl font-serif text-3xl font-black leading-tight text-white sm:text-5xl">
          S-block chemistry as one connected reaction and trend system
        </h1>

        <p className="mt-5 max-w-4xl text-base font-medium leading-7 text-slate-300 sm:text-lg sm:leading-8">
          Exact NCERT data, Groups 1 and 2 theory, first-member anomalies,
          industrial sodium and calcium chemistry, solubility and thermal
          stability, JEE traps, quantitative examples and a dark visual atlas.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[.045] px-4 py-4"
            >
              <p className="text-2xl font-black text-cyan-200">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </header>

      <div className="mb-8">
        <SBlockVisual part={1} />
      </div>

      <section className="mb-8 grid gap-3 md:grid-cols-3">
        {[
          [
            "Theory + data",
            "NCERT values, trend derivations, anomalous behaviour and phase-specific structures.",
          ],
          [
            "Reaction atlas",
            "Balanced equations, conditions, products, industrial cycles and identification chains.",
          ],
          [
            "JEE practice",
            "Orders, traps, statement checks, numerical stoichiometry and integrated worked examples.",
          ],
        ].map(([title, copy]) => (
          <article
            key={title}
            className="rounded-2xl border border-white/10 bg-[#0a1420] p-5"
          >
            <h2 className="font-black text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="s-block-parts-heading">
        <h2
          id="s-block-parts-heading"
          className="mb-4 font-serif text-2xl font-black text-cyan-200 sm:text-3xl"
        >
          15 complete parts
        </h2>

        <ChapterLessonGrid
          lessons={S_BLOCK_PARTS.map((part) => ({
            href: sBlockHref(part.number),
            number: `Part ${part.number}`,
            title: part.title,
            meta: part.focus,
          }))}
        />
      </section>
    </ChapterShell>
  );
}
