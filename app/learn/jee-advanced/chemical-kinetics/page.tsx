import type { Metadata } from "next";
import { CHEMICAL_KINETICS_PARTS } from "./part-metadata";

export const metadata: Metadata = {
  title: "Chemical Kinetics — Complete JEE Advanced Notes | Synergic Bond",
  description:
    "Complete JEE Advanced Chemical Kinetics course: rate laws, order and molecularity, integrated rate equations, half-life, Arrhenius theory, collision and transition-state theory, and complex reactions, in 20 sequential parts.",
};

export default function ChemicalKineticsIndexPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050914] text-slate-100 antialiased">
      <style>{`
        .ck-index {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          background-image:
            radial-gradient(circle at 10% 0%, rgba(34,211,238,.13), transparent 31rem),
            radial-gradient(circle at 92% 8%, rgba(139,92,246,.13), transparent 34rem),
            linear-gradient(rgba(148,163,184,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.035) 1px, transparent 1px);
          background-size: auto, auto, 34px 34px, 34px 34px;
        }
      `}</style>
      <div className="ck-index min-h-screen">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-7 sm:py-20 lg:px-10">
            <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">JEE Advanced · Physical Chemistry</div>
            <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Chemical Kinetics <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">complete forensic edition</span></h1>
            <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">A forensic page-by-page reconstruction of the full 259-page source, organised into twenty sequential teaching parts. Thirty print-equivalent reference expansions are inserted inside the relevant topics, and every instructional page has a collapsible dark-background fidelity panel so equations, graphs, tables and handwriting cannot be silently omitted.</p>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
              {['20 sequential content parts','259/259 source pages mapped','30 integrated reference pages','96 altered-data solved problems','258 dark page panels + SVG visuals'].map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5">{item}</span>)}
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-7 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CHEMICAL_KINETICS_PARTS.map((item) => (
              <a key={item.part} href={`/learn/jee-advanced/chemical-kinetics/parts/${item.slug}`} className="group rounded-3xl border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.04] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-cyan-300">{String(item.part).padStart(2, '0')}</span>
                  <span className="text-sm text-slate-600 transition group-hover:text-cyan-300">Open →</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
