import Link from "next/link";
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <header className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-9 md:px-10 md:py-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[var(--chem-bond)]">JEE Advanced · Physical Chemistry</p>
          <h1 className="mt-5 text-5xl font-black tracking-[-.045em] text-[var(--foreground)] md:text-7xl">Solid State</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--text-muted)] md:text-xl md:leading-9">
            A continuous textbook chapter from structural order to magnetic solids. The ten parts develop definitions, geometry and derivations before applying them to real crystal structures, defects and electronic properties.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {strands.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4">
                <div className="font-semibold text-[var(--foreground)]">{title}</div>
                <p className="mt-1.5 text-sm leading-6 text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="mt-12" aria-labelledby="chapter-contents">
          <div className="border-l-4 border-[var(--chem-bond)] pl-5 md:pl-7" style={{ opacity: 0.7 }}>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--chem-bond)]">Chapter sequence</p>
            <h2 id="chapter-contents" className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">Contents</h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {SOLID_STATE_PARTS.map((part) => (
              <Link
                key={part.number}
                href={`/learn/solid-state/master/part${String(part.number).padStart(2, "0")}`}
                className="group grid gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-6 transition hover:-translate-y-0.5 hover:border-[var(--chem-bond)]/40 hover:bg-[var(--surface-2)] sm:grid-cols-[58px_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--chem-bond)]/30 bg-[var(--background)] text-sm font-bold text-[var(--chem-bond)]">
                  {String(part.number).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-[var(--foreground)] transition group-hover:text-[var(--chem-bond)] md:text-2xl">{part.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">{part.description}</p>
                  <div className="mt-4 text-sm font-bold text-[var(--chem-bond)]">Read this part →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
