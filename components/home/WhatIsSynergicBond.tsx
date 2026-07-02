import Link from "next/link";

// WEEK 13 (Roadmap Phase 9) — "What is Synergic Bond?" homepage section.
// The 60–90s intro video is not produced yet, so the player area is an HONEST
// placeholder (clearly labelled), never a fake embed. Swap VIDEO_URL in when
// the founder ships the video.
const VIDEO_URL: string | null = null;

export default function WhatIsSynergicBond() {
  return (
    <section className="border-t border-white/[0.06] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">What is Synergic Bond?</p>
            <h2 className="text-2xl font-black md:text-3xl">The Complete Chemistry Learning Platform</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Not a NEET platform. Not a JEE platform. A chemistry operating system — where every
              question connects to its concept, formula, mechanism, reaction, notes, PYQs, tests and
              analytics. Built by an 18-year JEE Advanced chemistry faculty.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/snap-solve" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-bold text-black transition hover:opacity-90">
                Try Snap &amp; Solve →
              </Link>
              <Link href="/notes" className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-cyan-400/40 hover:text-white">
                Start a free chapter
              </Link>
            </div>
          </div>

          {/* Video slot — real embed once produced; honest placeholder until then */}
          {VIDEO_URL ? (
            <video controls preload="metadata" className="aspect-video w-full rounded-2xl border border-white/[0.08] bg-black" src={VIDEO_URL} />
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#111827] text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-2xl">▶</span>
              <p className="mt-3 text-sm font-bold text-white/70">60–90 second intro video</p>
              <p className="mt-1 text-xs text-white/40">In production — coming with launch</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
