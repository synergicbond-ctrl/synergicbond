import type { Metadata } from "next";
import { DIPOLE_MOMENT_PARTS } from "./part-metadata";

export const metadata: Metadata = {
  title: "Dipole Moment | Chemical Bonding | JEE Advanced",
  description:
    "Complete textbook-style JEE Advanced dipole moment notes in 4 parts: foundation, vector addition and percentage ionic character; the six factors determining molecular polarity and classic JEE comparisons; structural and organic applications; advanced exceptions and full revision tables.",
};

export default function DipoleMomentIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03070b] text-slate-100 antialiased">
      <style>{`
        .dm-index {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          background-image:
            radial-gradient(circle at 10% 0%, rgba(34,211,238,.11), transparent 31rem),
            radial-gradient(circle at 92% 8%, rgba(139,92,246,.11), transparent 34rem);
        }
      `}</style>
      <div className="dm-index min-h-screen">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-7 sm:py-20 lg:px-10">
            <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              JEE Advanced · Chemical Bonding
            </div>
            <h1 className="mt-6 max-w-5xl bg-gradient-to-r from-[#68e2ed] via-[#8fb9f5] to-[#c2a5f3] bg-clip-text text-5xl font-black tracking-[-0.05em] text-transparent sm:text-6xl lg:text-7xl">
              Dipole Moment
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-9 text-[var(--text-body)]">
              A complete textbook chapter on molecular polarity, in four sequential parts: foundation, vector
              addition and percentage ionic character; the six factors that determine every observed moment and the
              classic JEE comparisons built on them; structural and organic applications; and advanced exceptions
              with a full revision-table reference bank.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-[var(--text-body)]">
              {["4 sequential parts", "30 original chemistry diagrams", "40+ classic JEE comparisons", "Full bond/group/molecular-dipole data banks"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 border-l-4 border-cyan-300/60 bg-[linear-gradient(90deg,rgba(8,25,39,0.9),rgba(4,10,17,0.2))] px-6 py-5">
              <p className="text-[17px] leading-[1.7] text-[var(--foreground)] sm:text-[18px]">
                <strong className="text-white">Central idea:</strong> dipole moment is never a single readout of
                &ldquo;which atom is more electronegative.&rdquo; It is the vector resultant of bond polarity,
                geometry, lone-pair orientation, group additivity, dative/resonance charge separation and induced
                polarization — any one of which can dominate, reinforce, or cancel the others.
              </p>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-7 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {DIPOLE_MOMENT_PARTS.map((item) => (
              <a
                key={item.part}
                href={`/learn/jee-advanced/chemical-bonding/dipole-moment/parts/${item.slug}`}
                className="group rounded-3xl border border-white/10 bg-[var(--background)]/70 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.04] sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-cyan-300">{String(item.part).padStart(2, "0")}</span>
                  <span className="text-sm text-slate-600 transition group-hover:text-cyan-300">Open →</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
