import type { Metadata } from "next";
import { CHEMICAL_KINETICS_PARTS } from "./part-metadata";

export const metadata: Metadata = {
  title: "Chemical Kinetics — Complete JEE Advanced Notes | Synergic Bond",
  description:
    "Complete JEE Advanced Chemical Kinetics course: rate laws, order and molecularity, integrated rate equations, half-life, Arrhenius theory, collision and transition-state theory, and complex reactions, in 20 sequential parts.",
};

export default function ChemicalKineticsIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="min-h-screen">
        <header className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-7 sm:py-20 lg:px-10">
            <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
              JEE Advanced · Physical Chemistry
            </div>
            <h1 className="font-display mt-6 max-w-5xl text-5xl font-black tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Chemical Kinetics
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-9 text-[var(--text-muted)]">
              A forensic page-by-page reconstruction of the full 259-page source, organised into twenty sequential teaching parts. Thirty print-equivalent reference expansions are inserted inside the relevant topics, and every instructional page has a collapsible dark-background fidelity panel.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-sm text-[var(--text-muted)]">
              {['20 sequential content parts','259/259 source pages mapped','30 integrated reference pages','96 solved problems','258 dark page panels'].map((item)=><span key={item} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">{item}</span>)}
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-7 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CHEMICAL_KINETICS_PARTS.map((item) => (
              <a key={item.part} href={`/learn/jee-advanced/chemical-kinetics/parts/${item.slug}`} className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--accent)]">{String(item.part).padStart(2, '0')}</span>
                  <span className="text-sm text-[var(--text-muted)] transition group-hover:text-[var(--accent)]">Open →</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-[var(--foreground)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
