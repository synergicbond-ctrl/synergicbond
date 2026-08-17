import Link from "next/link";
import { ChapterShell, ChapterLessonGrid } from "@/components/notes/canonical";
import { HYDROGEN_PARTS } from "./parts";
import { hydrogenHref, hydrogenTabs, sectionRangeLabel } from "./_chapter";

export const metadata = {
  title: "Hydrogen and Its Compounds | SYNERGIC BOND",
  description:
    "Hydrogen chemistry notes covering isotopes, molecular orbitals, ortho-para hydrogen, preparation, reactions, hydrides, diborane, hydrogen bonding, water, heavy water and hydrogen peroxide.",
};

export const dynamic = "force-dynamic";

export default function HydrogenChapterHub() {
  return (
    <ChapterShell kicker="Chemistry" subtitle="Hydrogen" tabs={hydrogenTabs()}>
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] sm:text-sm" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
        <Link href="/notes" className="hover:text-white">Chapter Notes</Link><span>/</span>
        <span className="text-cyan-300">Hydrogen</span>
      </nav>

      <header className="mb-9 border-b border-cyan-200/15 pb-8 sm:pb-10">
        <h1 className="max-w-5xl bg-gradient-to-r from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl lg:text-6xl">
          Hydrogen and Its Compounds
        </h1>
        <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-[var(--text-muted)] sm:text-lg">
          Atomic structure and isotopes lead naturally to dihydrogen, hydrides, hydrogen bonding, water, heavy water and hydrogen peroxide. Each lesson develops the theory, equations, mechanisms, data and exceptions in a continuous chemistry-first sequence.
        </p>
      </header>

      <ChapterLessonGrid
        lessons={HYDROGEN_PARTS.map((part) => ({
          href: hydrogenHref(part.number),
          number: `${part.number}`,
          title: part.title,
          meta: sectionRangeLabel(part),
        }))}
      />
    </ChapterShell>
  );
}
