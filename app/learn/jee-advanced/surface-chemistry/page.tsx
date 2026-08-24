import { AppShell } from "@/components/AppShell";
import { SURFACE_CHEMISTRY_PARTS } from "./part-metadata";
import { SurfaceVisual } from "./surface-chemistry-shared";

export const metadata = {
  title: "Surface Chemistry — Complete JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Original twelve-part Surface Chemistry course for JEE Advanced covering adsorption, catalysis, colloids, molecular-orbital explanations, derivations, visuals and worked examples.",
};

const STATS = [
  ["12", "complete parts"],
  ["3", "core pillars"],
  ["18", "original visual systems"],
  ["48", "worked examples"],
];

export default function SurfaceChemistryIndexPage() {
  return (
    <AppShell
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Surface Chemistry"
      chapterSlug="surface-chemistry"
      description="Adsorption, catalysis and colloids developed from first principles with molecular-orbital explanations, quantitative derivations, original dark visuals, experiments, applications and JEE Advanced problem solving."
      free={false}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="text-3xl font-black tracking-tight text-[var(--foreground)]">{value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[.14em] text-[var(--text-muted)]">{label}</div>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-5">
          <SurfaceVisual mode="interface" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SURFACE_CHEMISTRY_PARTS.map((item) => (
            <a
              key={item.part}
              href={`/learn/jee-advanced/surface-chemistry/parts/${item.slug}`}
              className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/25 hover:bg-[var(--surface-hover)] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm font-bold text-[var(--accent)]">{String(item.part).padStart(2, "0")}</span>
                <span className="text-sm text-[var(--text-muted)] transition group-hover:text-[var(--accent)]">Open →</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-[var(--foreground)]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
