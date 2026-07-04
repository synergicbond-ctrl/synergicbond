import Link from "next/link";
import {
  Atom,
  Beaker,
  BookOpen,
  FlaskConical,
  GitBranch,
  ListOrdered,
  Search,
  Sigma,
  Table2,
} from "lucide-react";
import { formulaCards } from "@/lib/chemistry/formulas";
import { highYieldReactions } from "@/lib/chemistry/reactions";
import { IMPORTANT_ORDERS } from "@/lib/importantOrders";
import { NAME_REACTIONS } from "@/lib/nameReactions";
import { pyqDatabase } from "@/lib/pyqDatabase";

const pyqCount = Object.values(pyqDatabase).reduce((sum, questions) => sum + questions.length, 0);

const modules = [
  {
    href: "/search",
    title: "Global Search",
    description: "Search reactions, formulas, PYQs, reagents, orders, and NCERT references.",
    metric: "Unified",
    icon: Search,
  },
  {
    href: "/formula-cards",
    title: "Formula Cards",
    description: "Physical chemistry formula cards with variables, units, NCERT references, and PYQ links.",
    metric: `${formulaCards.length} cards`,
    icon: Sigma,
  },
  {
    href: "/pyq",
    title: "PYQ Engine",
    description: "Previous-year question browser with filters, chapter intelligence, and graph links.",
    metric: `${pyqCount} PYQs`,
    icon: BookOpen,
  },
  {
    href: "/name-reactions",
    title: "Name Reactions",
    description: "Organic named reactions with detail pages and mechanism links where available.",
    metric: `${NAME_REACTIONS.length} names`,
    icon: GitBranch,
  },
  {
    href: "/reagents",
    title: "Reagents",
    description: "High-yield reagent functions, formulas, and exam relevance.",
    metric: "30 entries",
    icon: FlaskConical,
  },
  {
    href: "/important-orders",
    title: "Important Orders",
    description: "Verified inorganic ordering sequences from source documents.",
    metric: `${IMPORTANT_ORDERS.length} orders`,
    icon: ListOrdered,
  },
  {
    href: "/periodic-table",
    title: "Periodic Table",
    description: "Element data entry point for periodic chemistry and trend revision.",
    metric: "Elements",
    icon: Table2,
  },
  {
    href: "/periodic-trends",
    title: "Trends Explorer",
    description: "Radius, ionisation energy, electron gain enthalpy, and electronegativity trends.",
    metric: "Trends",
    icon: Atom,
  },
  {
    href: "/salt-colors",
    title: "Salt Colors",
    description: "Compound and ion colour references for inorganic chemistry.",
    metric: "IOC",
    icon: Beaker,
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="border-b border-white/[0.06] pb-6">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">Learning Hub</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            Chemistry learning modules
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white/60">
            Open the verified chemistry systems that are already connected to search, formulas, PYQs, reactions, and orders.
          </p>
        </header>

        {/* Premium visual chapters (new notes template) */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-xl font-black text-white">Premium Chapters</h2>
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-300">New</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {[
              { href: "/learn/mole-concept", title: "Mole Concept", tag: "Physical · Class 11" },
              { href: "/learn/atomic-structure", title: "Atomic Structure", tag: "Physical · Class 11" },
              { href: "/learn/chemical-bonding", title: "Chemical Bonding", tag: "Physical · Class 11" },
              { href: "/learn/thermodynamics", title: "Thermodynamics", tag: "Physical · Class 11" },
              { href: "/learn/periodic-table", title: "Periodic Table", tag: "Inorganic · Class 11" },
            ].map((c) => (
              <Link key={c.href} href={c.href}
                className="group flex flex-col justify-between rounded-lg border border-white/[0.08] bg-gradient-to-br from-cyan-500/[0.06] to-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/40">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300/80">{c.tag}</div>
                  <div className="mt-1.5 text-lg font-black text-white">{c.title}</div>
                </div>
                <span className="mt-4 text-xs font-black uppercase tracking-wide text-cyan-300">Read chapter →</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {modules.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-44 min-w-0 flex-col rounded-lg border border-white/[0.08] bg-white/[0.035] p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-500/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </span>
                  <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] font-black text-white/55">
                    {item.metric}
                  </span>
                </div>
                <h2 className="mt-4 break-words text-lg font-black text-white">{item.title}</h2>
                <p className="mt-2 break-words text-sm leading-relaxed text-white/58">{item.description}</p>
                <span className="mt-auto pt-4 text-xs font-black uppercase tracking-wide text-cyan-300">
                  Open module
                </span>
              </Link>
            );
          })}
        </div>

        <section className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-5">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/35">Knowledge Core</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-black/20 p-4">
              <p className="text-2xl font-black text-cyan-300">{highYieldReactions.length}</p>
              <p className="mt-1 text-xs font-bold text-white/55">High-yield reactions</p>
            </div>
            <div className="rounded-md bg-black/20 p-4">
              <p className="text-2xl font-black text-cyan-300">{formulaCards.length}</p>
              <p className="mt-1 text-xs font-bold text-white/55">Formula cards</p>
            </div>
            <div className="rounded-md bg-black/20 p-4">
              <p className="text-2xl font-black text-cyan-300">{IMPORTANT_ORDERS.length}</p>
              <p className="mt-1 text-xs font-bold text-white/55">Verified order records</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
