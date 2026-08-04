import Link from "next/link";
import {
  ArrowUpRight,
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
import { EditorialBadge, PageShell, SectionHeader, Surface } from "@/components/ui/editorial";
import { formulaCards } from "@/lib/chemistry/formulas";
import { highYieldReactions } from "@/lib/chemistry/reactions";
import { IMPORTANT_ORDERS } from "@/lib/importantOrders";
import { NAME_REACTIONS } from "@/lib/nameReactions";
import { pyqDatabase } from "@/lib/pyqDatabase";

const pyqCount = Object.values(pyqDatabase).reduce((sum, questions) => sum + questions.length, 0);

const premiumChapters = [
  { href: "/learn/mole-concept", title: "Mole Concept", tag: "Physical · Class 11" },
  { href: "/learn/atomic-structure", title: "Atomic Structure", tag: "Physical · Class 11" },
  { href: "/learn/chemical-bonding", title: "Chemical Bonding", tag: "Physical · Class 11" },
  { href: "/learn/thermodynamics", title: "Thermodynamics", tag: "Physical · Class 11" },
  { href: "/learn/periodic-table", title: "Periodic Table", tag: "Inorganic · Class 11" },
];

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
    <PageShell>
      <div className="space-y-14 sm:space-y-20">
        <SectionHeader
          level="h1"
          eyebrow="Learning Hub · Verified Systems"
          title="Chemistry learning modules"
          description="Open the verified chemistry systems that are already connected to search, formulas, PYQs, reactions, and orders."
          action={<EditorialBadge tone="gold">Structured for revision</EditorialBadge>}
        />

        <section aria-labelledby="premium-chapters-heading" className="grid gap-7 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div className="max-w-md self-start xl:sticky xl:top-28">
            <p className="sb-eyebrow">Curated Path</p>
            <h2 id="premium-chapters-heading" className="sb-display mt-3 text-3xl sm:text-4xl">
              Premium Chapters
            </h2>
            <p className="sb-body mt-4 text-sm">
              Five foundational chapters presented as a deliberate reading sequence, with the subject and class level visible before you enter.
            </p>
            <div className="mt-6">
              <EditorialBadge tone="cyan">New chapter format</EditorialBadge>
            </div>
          </div>

          <Surface className="overflow-hidden" as="div">
            {premiumChapters.map((chapter, index) => (
              <Link
                key={chapter.href}
                href={chapter.href}
                className="sb-link-row group grid min-h-24 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-[var(--sb-border)] px-5 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:px-7"
              >
                <span className="font-mono text-xs font-bold tracking-[0.12em] text-[var(--sb-gold)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--sb-text-muted)]">
                    {chapter.tag}
                  </span>
                  <span className="mt-1 block font-[family-name:var(--sb-font-display)] text-xl font-semibold text-[var(--sb-text)] sm:text-2xl">
                    {chapter.title}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[var(--sb-cyan)] transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </Surface>
        </section>

        <section aria-labelledby="learning-tools-heading" className="space-y-7">
          <SectionHeader
            id="learning-tools-heading"
            eyebrow="Reference Systems"
            title="Connected learning tools"
            description="Move between concise revision surfaces without losing the chemistry context that links them."
          />

          <div className="grid overflow-hidden rounded-[var(--sb-radius-lg)] border border-[var(--sb-border)] bg-[var(--sb-surface-1)] sm:grid-cols-2 xl:grid-cols-3">
            {modules.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="sb-link-row group flex min-h-52 min-w-0 flex-col border-b border-r border-[var(--sb-border)] p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--sb-radius-sm)] border border-[var(--sb-border-strong)] bg-[var(--sb-cyan-soft)]">
                      <Icon className="h-[18px] w-[18px] text-[var(--sb-cyan)]" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--sb-text-muted)]">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--sb-font-display)] text-xl font-semibold text-[var(--sb-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--sb-text-body)]">{item.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--sb-cyan)]">
                    Open module <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <Surface className="grid overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          <div className="border-b border-[var(--sb-border)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="sb-eyebrow">Knowledge Core</p>
            <h2 id="knowledge-core-heading" className="sb-display mt-3 text-3xl">
              Verified reference depth
            </h2>
            <p className="sb-body mt-4 text-sm">The current corpus available across the connected revision systems.</p>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-3">
            {[
              [highYieldReactions.length, "High-yield reactions"],
              [formulaCards.length, "Formula cards"],
              [IMPORTANT_ORDERS.length, "Verified order records"],
            ].map(([value, label]) => (
              <div key={label} className="border-b border-[var(--sb-border)] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-8">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--sb-text-muted)]">{label}</dt>
                <dd className="mt-3 font-[family-name:var(--sb-font-display)] text-4xl font-semibold text-[var(--sb-cyan)]">{value}</dd>
              </div>
            ))}
          </dl>
        </Surface>
      </div>
    </PageShell>
  );
}
