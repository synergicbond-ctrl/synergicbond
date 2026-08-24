import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { saltAnalysisParts } from "./index";

export const metadata = {
  title: "Salt Analysis - JEE Advanced | Synergic Bond",
  description:
    "Comprehensive salt analysis notes with reactions, tests, separation schemes, solubility charts, JEE traps and visual explanations.",
};

export default function SaltAnalysisPage() {
  return (
    <AppShell
      discipline="JEE Advanced · Inorganic Chemistry"
      chapterTitle="Salt Analysis / Qualitative Analysis"
      chapterSlug="salt-analysis"
      description="A complete JEE Advanced chapter on systematic separation, selective reactions, confirmatory tests, ionic equilibria and analytical reasoning."
      free={false}
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          <strong className="text-[var(--foreground)]">Scope:</strong> preliminary
          examination, dry and wet tests, anion analysis, cation group
          separation, interfering radicals, solubility logic, complexes,
          exceptions, worked examples and final revision.
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2">
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
      </div>
    </AppShell>
  );
}
