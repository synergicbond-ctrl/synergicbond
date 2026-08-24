import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SOLID_STATE_PARTS } from "./_content";

export const metadata = {
  title: "Solid State — Complete JEE Advanced Textbook | Synergic Bond",
  description:
    "Complete JEE Advanced Solid State chapter: lattices, unit cells, Bravais lattices, packing, voids, radius ratio, structures, defects, semiconductors and magnetism.",
};

const strands = [
  ["Structure", "Order, lattices, bases, unit cells and Bravais classification"],
  ["Geometry", "Cubic contact relations, density, packing, voids and radius ratio"],
  ["Crystal chemistry", "Named structures, coordination polyhedra and site occupancy"],
  ["Properties", "Defects, conduction, semiconductors, superconductivity and magnetism"],
];

export default function Page() {
  return (
    <AppShell
      discipline="JEE Advanced · Physical Chemistry"
      chapterTitle="Solid State — Master Edition"
      chapterSlug="solid-state"
      description="A continuous textbook chapter from structural order to magnetic solids. The ten parts develop definitions, geometry and derivations before applying them to real crystal structures, defects and electronic properties."
      free={true}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="grid gap-3 sm:grid-cols-2">
          {strands.map(([title, text]) => (
            <div key={title} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
              <div className="font-semibold text-[var(--foreground)]">{title}</div>
              <p className="mt-1.5 text-sm leading-6 text-[var(--text-muted)]">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3">
          {SOLID_STATE_PARTS.map((part) => (
            <Link
              key={part.number}
              href={`/learn/solid-state/master/part${String(part.number).padStart(2, "0")}`}
              className="group flex items-start gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]/40"
            >
              <span className="flex shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)] px-3 py-2 font-mono text-sm font-bold text-[var(--accent)]">
                {String(part.number).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[var(--foreground)]">{part.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">{part.description}</p>
              </div>
              <span className="flex shrink-0 text-[var(--text-muted)]">→</span>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
