import Link from "next/link";
import { SOLID_STATE_PARTS } from "./_shared";

export const metadata = {
  title: "Solid State — Complete JEE Advanced Notes | Synergic Bond",
  description:
    "Structured JEE Advanced Solid State notes covering crystal lattices, unit cells, packing, voids, radius-ratio rules, crystal structures, defects, electrical properties and magnetism.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(0,245,212,.08),transparent_30%),radial-gradient(circle_at_90%_5%,rgba(139,92,246,.08),transparent_30%),linear-gradient(#08111d,#070b12)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <header className="border border-cyan-400/20 bg-[#0b1a28]/95 px-6 py-9 md:px-10 md:py-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">
            JEE Advanced · Physical Chemistry
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">Solid State</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">
            A complete textbook-style chapter covering the structure, geometry, defects, electrical behaviour and magnetic properties of solids. Each part contains theory, derivations, tables, crystal diagrams, worked examples and JEE Advanced edge cases.
          </p>
        </header>

        <section className="mt-10" aria-labelledby="solid-state-contents">
          <div className="border-l-4 border-cyan-300/60 pl-5 md:pl-7">
            <h2 id="solid-state-contents" className="text-2xl font-black tracking-tight text-white md:text-3xl">
              Chapter contents
            </h2>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {SOLID_STATE_PARTS.map((part) => (
              <Link
                key={part.number}
                href={`/learn/solid-state/master/part${String(part.number).padStart(2, "0")}`}
                className="group border border-white/10 bg-[#0d1b29]/95 px-6 py-6 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-[#102131]"
              >
                <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-cyan-300/85">
                  Part {String(part.number).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-xl font-extrabold leading-7 text-white transition group-hover:text-cyan-100 md:text-2xl">
                  {part.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400 md:text-[15px]">{part.summary}</p>
                <div className="mt-5 text-sm font-bold text-cyan-300">Open part →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

