import Link from "next/link";

import { ChapterShell } from "@/components/notes/canonical";
import { S_BLOCK_PARTS } from "./parts";
import { sBlockHref } from "./_chapter";
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

function SBlockPartNavigation() {
  return (
    <section
      aria-labelledby="s-block-parts-heading"
      className="mb-8 rounded-3xl border border-[#24405c] bg-[#0b1724] p-4 sm:p-5"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[.18em] text-cyan-300">
            Complete chapter navigation
          </p>
          <h2
            id="s-block-parts-heading"
            className="mt-1 font-serif text-2xl font-black text-white sm:text-3xl"
          >
            All 15 parts
          </h2>
        </div>
        <p className="text-xs font-bold text-slate-400">
          Select any part to begin
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {S_BLOCK_PARTS.map((part) => (
          <Link
            key={part.number}
            href={sBlockHref(part.number)}
            className="group flex min-h-[104px] min-w-0 flex-col rounded-2xl border border-[#2b4a68] border-l-4 border-l-cyan-300 bg-[#122232] p-4 text-decoration-none transition hover:border-cyan-300 hover:bg-[#182b3e]"
          >
            <span className="text-[11px] font-black uppercase tracking-[.16em] text-cyan-300">
              Part {part.number}
            </span>
            <span className="mt-2 text-sm font-extrabold leading-5 text-slate-100 group-hover:text-white">
              {part.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function SBlockHub() {
  return (
    <ChapterShell
      kicker="JEE Inorganic Chemistry"
      subtitle="S-block Elements"
      headerTag="15-part complete chapter"
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

      <SBlockPartNavigation />

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

      <SBlockVisual part={1} />
    </ChapterShell>
  );
}
