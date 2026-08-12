import Link from "next/link";
import {
  Table2, Library, Atom, FlaskConical, ListOrdered, Palette,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// /chemistry-tools — Learn → Chemistry Tools (Dashboard Simplification pass).
//
// One canonical grouping for the standalone reference tools that used to be
// scattered as separate top-level cards: Periodic Table, Knowledge Vault,
// Molecule Explorer, Reagents, Important Orders and Colours. Pure navigation
// — every route below is existing and untouched; this page just links out.
// (Not to be confused with the Periodic Table *chapter notes* under Chapter
// Notes — this is the interactive Periodic Table *tool*.)
// ─────────────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "Chemistry Tools — SYNERGIC BOND",
  description: "Periodic table, knowledge vault, molecule explorer, reagents, important orders and colour references — all in one place.",
};

const TOOLS: Array<{ href: string; title: string; description: string; icon: LucideIcon }> = [
  { href: "/periodic-table", title: "Periodic Table", description: "Interactive element data and periodic trends.", icon: Table2 },
  { href: "/vault", title: "Knowledge Vault", description: "Saved concepts, formulas, exceptions and quick facts.", icon: Library },
  { href: "/molecule", title: "Molecule Explorer", description: "Look up structures, properties and exam relevance of any compound.", icon: Atom },
  { href: "/reagents", title: "Reagents", description: "High-yield reagent functions, formulas and exam relevance.", icon: FlaskConical },
  { href: "/important-orders", title: "Important Orders", description: "Verified inorganic ordering sequences from source documents.", icon: ListOrdered },
  { href: "/salt-colors", title: "Colours", description: "Compound and ion colour references for inorganic chemistry.", icon: Palette },
];

export default function ChemistryToolsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-black px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Learn</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Chemistry Tools</h1>
          <p className="mt-2 max-w-2xl text-zinc-400">
            The reference tools alongside your chapter notes — periodic table, knowledge vault, molecule
            explorer, reagents, important orders and colours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map(({ href, title, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04] hover:border-cyan-400/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05]">
                <Icon className="h-5 w-5 text-cyan-300" />
              </span>
              <div className="mt-3 font-bold text-white">{title}</div>
              <div className="mt-1 flex-1 text-sm text-zinc-400">{description}</div>
              <div className="mt-3 text-sm font-semibold text-cyan-300">
                Open <span className="inline-block transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/programs" className="text-sm text-zinc-500 transition hover:text-white">
            ← All programs
          </Link>
        </div>
      </div>
    </main>
  );
}
