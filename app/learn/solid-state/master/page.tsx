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
    <main className="min-h-screen bg-[radial-gradient(circle_at_12%_0%,rgba(34,211,238,.08),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(139,92,246,.08),transparent_28%),linear-gradient(#07111d,#060b12)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <header className="rounded-3xl border border-cyan-300/20 bg-[#0b1a28]/95 px-6 py-9 md:px-10 md:py-12">
          <p className="text-xs font-black uppercase tracking-[.2em] text-cyan-300">JEE Advanced · Physical Chemistry</p>
          <h1 className="mt-5 text-5xl font-black tracking-[-.045em] text-white md:text-7xl">Solid State</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--text-body)] md:text-xl md:leading-9">
            A continuous textbook chapter from structural order to magnetic solids. The ten parts develop definitions, geometry and derivations before applying them to real crystal structures, defects and electronic properties.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {strands.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-4">
                <div className="font-extrabold text-cyan-100">{title}</div>
                <p className="mt-1.5 text-sm leading-6 text-[var(--text-muted)]">{text}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="mt-12" aria-labelledby="chapter-contents">
          <div className="border-l-4 border-cyan-300/60 pl-5 md:pl-7">
            <p className="text-xs font-black uppercase tracking-[.16em] text-cyan-300/75">Chapter sequence</p>
            <h2 id="chapter-contents" className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">Contents</h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {SOLID_STATE_PARTS.map((part) => (
              <Link
                key={part.number}
                href={`/learn/solid-state/master/part${String(part.number).padStart(2, "0")}`}
                className="group grid gap-4 rounded-2xl border border-white/10 bg-[#0d1b29]/95 px-6 py-6 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-[#102131] sm:grid-cols-[58px_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/[0.08] text-sm font-black text-cyan-100">
                  {String(part.number).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold leading-7 text-white transition group-hover:text-cyan-100 md:text-2xl">{part.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">{part.description}</p>
                  <div className="mt-4 text-sm font-bold text-cyan-300">Read this part →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
