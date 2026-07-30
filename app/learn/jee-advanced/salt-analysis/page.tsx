import Link from "next/link";
import { saltAnalysisParts } from "./index";

export const metadata = {
  title: "Salt Analysis - JEE Advanced | Synergic Bond",
  description:
    "Comprehensive salt analysis notes with reactions, tests, separation schemes, solubility charts, JEE traps and visual explanations.",
};

export default function SaltAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#030a14] px-4 py-10 text-slate-100 sm:px-6">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
          JEE Advanced · Inorganic Chemistry
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">Salt Analysis</h1>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          Complete qualitative inorganic analysis with ionic reactions,
          solubility rules, group separation, named tests, precautions,
          JEE traps and dark-theme visual explanations.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {saltAnalysisParts.map((part) => (
            <Link
              key={part.id}
              href={part.href}
              className="group rounded-xl border border-cyan-300/20 bg-slate-950/70 p-4 transition hover:border-cyan-300/60 hover:bg-cyan-950/20"
            >
              <span className="text-lg font-bold text-cyan-300">
                {String(part.id).padStart(2, "0")}
              </span>
              <span className="mt-2 block leading-6 text-slate-200 group-hover:text-white">
                {part.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
