import Link from "next/link";
import { saltAnalysisParts } from "./index";

export const metadata = {
  title: "Salt Analysis - JEE Advanced | Synergic Bond",
  description:
    "Comprehensive salt analysis notes with reactions, tests, separation schemes, solubility charts, JEE traps and visual explanations.",
};

export default function SaltAnalysisPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">
            <span>JEE Advanced</span>
            <span className="mx-2">·</span>
            <span>Inorganic Chemistry</span>
          </p>
          <span className="rounded-full border border-[var(--border)] bg-[var(--accent-wash)] px-3 py-1 text-xs font-bold text-[var(--accent)]">
            High-yield chapter
          </span>
        </div>

        <h1 className="font-display mt-5 max-w-5xl text-4xl font-black tracking-tight text-[var(--foreground)] sm:text-6xl">
          Salt Analysis / Qualitative Analysis
        </h1>

        <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
          A complete JEE Advanced chapter on{" "}
          <strong className="text-[var(--chem-bond)]">systematic separation</strong>,{" "}
          <strong className="text-[var(--chem-orbital)]">selective reactions</strong>,{" "}
          <strong className="text-[var(--chem-energy)]">confirmatory tests</strong>,{" "}
          <strong className="text-[var(--chem-rule)]">ionic equilibria</strong> and{" "}
          <strong className="text-[var(--chem-trap)]">analytical reasoning</strong>.
        </p>

        <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          <strong className="text-[var(--foreground)]">Scope:</strong> preliminary
          examination, dry and wet tests, anion analysis, cation group
          separation, interfering radicals, solubility logic, complexes,
          exceptions, worked examples and final revision.
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {saltAnalysisParts.map((part) => (
            <Link
              key={part.id}
              href={part.href}
              className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"
            >
              <span className="inline-block text-xl font-black text-[var(--accent)]">
                {String(part.id).padStart(2, "0")}
              </span>
              <span className="mt-2 block leading-6 text-[var(--text-body)] transition group-hover:text-[var(--foreground)]">
                {part.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
