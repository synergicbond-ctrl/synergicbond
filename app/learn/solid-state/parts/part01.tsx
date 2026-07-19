import type { ReactNode } from "react";

export const partInfo = {
  part: 1,
  slug: "introduction-to-solid-state",
  title: "Introduction to Solid State",
} as const;

const Card = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
    <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
    <div className="mt-4 space-y-4 text-[15px] leading-7 text-zinc-300">{children}</div>
  </section>
);

export default function SolidStatePart01() {
  return (
    <article data-chapter="solid-state" data-part="01" className="mx-auto w-full max-w-5xl space-y-6 px-4 py-8 md:px-6">
      <header className="rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-cyan-400/10 to-transparent p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">JEE Advanced · Solid State · Part 1</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Solid State — Entry Point</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">
          This opening follows the KOHINOOR sequence directly: solids are first divided into crystalline and amorphous solids.
          No later lattice, unit-cell, packing, void, defect, electrical, or magnetic theory is introduced here.
        </p>
      </header>

      <Card title="1. Classification of Solids">
        <p>On the basis of structural arrangement, solids are introduced in two categories:</p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="border-b border-white/10 px-4 py-3 text-center font-semibold text-white">SOLID</div>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/10 px-4 py-5 text-center md:border-b-0 md:border-r">
              <div className="text-lg font-semibold text-cyan-300">Crystalline Solid</div>
              <p className="mt-2 text-sm text-zinc-400">Constituent particles possess an ordered structural arrangement.</p>
            </div>
            <div className="px-4 py-5 text-center">
              <div className="text-lg font-semibold text-amber-300">Amorphous Solid</div>
              <p className="mt-2 text-sm text-zinc-400">Long-range periodic repetition is absent.</p>
            </div>
          </div>
        </div>
        <p>The constituent particles represented by structural points may be <strong className="text-white">atoms, ions, or molecules</strong>.</p>
      </Card>

      <Card title="2. Structural Meaning of a Point">
        <p>
          A structural point is not automatically “one atom”. Depending on the solid, it may represent an atom, an ion,
          a molecule, or an equivalent structural motif.
        </p>
      </Card>

      <Card title="3. Visual Entry Map">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
            <h3 className="font-semibold text-cyan-200">Crystalline — schematic</h3>
            <pre className="mt-4 overflow-x-auto text-center font-mono text-sm leading-7 text-zinc-200">{`●   ●   ●   ●
●   ●   ●   ●
●   ●   ●   ●
●   ●   ●   ●`}</pre>
            <p className="mt-3 text-sm text-zinc-400">Regular repeating arrangement.</p>
          </div>
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-4">
            <h3 className="font-semibold text-amber-200">Amorphous — schematic</h3>
            <pre className="mt-4 overflow-x-auto text-center font-mono text-sm leading-7 text-zinc-200">{`●      ●   ●
   ●
       ●      ●
 ●        ●
      ●  ●`}</pre>
            <p className="mt-3 text-sm text-zinc-400">No long-range periodic repetition.</p>
          </div>
        </div>
      </Card>

      <aside className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.045] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Sequence Lock</p>
        <p className="mt-2 text-sm leading-7 text-zinc-300">
          Part 2 develops the exact KOHINOOR opening comparison: arrangement, melting behaviour, cutting/cleavage,
          long-range vs short-range order, heat of fusion, true/pseudo-solid terminology, anisotropy and isotropy.
        </p>
      </aside>
    </article>
  );
}
