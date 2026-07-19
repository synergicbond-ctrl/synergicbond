import type { ReactNode } from "react";

export const partInfo = {
  part: 2,
  slug: "crystalline-and-amorphous-solids",
  title: "Crystalline and Amorphous Solids",
} as const;

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
    <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
    <div className="mt-4 space-y-4 text-[15px] leading-7 text-zinc-300">{children}</div>
  </section>
);

export default function SolidStatePart02() {
  return (
    <article data-chapter="solid-state" data-part="02" className="mx-auto w-full max-w-5xl space-y-6 px-4 py-8 md:px-6">
      <header className="rounded-3xl border border-violet-400/20 bg-gradient-to-b from-violet-400/10 to-transparent p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">JEE Advanced · Solid State · Part 2</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Crystalline and Amorphous Solids</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">
          This part follows the opening KOHINOOR comparison only, without leaking later crystal-lattice or unit-cell theory.
        </p>
      </header>

      <Section title="1. Arrangement of Constituent Particles">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
            <h3 className="font-semibold text-cyan-200">Crystalline solid</h3>
            <p className="mt-2">Particles are arranged in a regular ordered pattern extending over long distances.</p>
            <p className="mt-2 font-semibold text-white">Long-range order</p>
          </div>
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-4">
            <h3 className="font-semibold text-amber-200">Amorphous solid</h3>
            <p className="mt-2">Long-range periodic repetition is absent, although local structural order may remain.</p>
            <p className="mt-2 font-semibold text-white">Short-range order</p>
          </div>
        </div>
      </Section>

      <Section title="2. Melting Behaviour">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-zinc-200">
                <th className="px-3 py-3">Property</th>
                <th className="px-3 py-3">Crystalline</th>
                <th className="px-3 py-3">Amorphous</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-3 py-3 font-medium text-white">Melting</td>
                <td className="px-3 py-3">Sharp melting point for a pure crystalline solid.</td>
                <td className="px-3 py-3">Softens or melts over a range of temperature.</td>
              </tr>
              <tr>
                <td className="px-3 py-3 font-medium text-white">Heat of fusion</td>
                <td className="px-3 py-3">Definite and characteristic.</td>
                <td className="px-3 py-3">No single sharp characteristic value associated with one melting point.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="3. Cleavage / Cutting Behaviour">
        <p>
          Crystalline solids may split along structurally definite directions and can give a clean, smooth cleavage.
          Amorphous solids generally give an irregular fracture because long-range periodic cleavage planes are absent.
        </p>
        <div className="rounded-xl border border-red-400/20 bg-red-400/[0.035] p-4">
          <h3 className="font-semibold text-red-200">JEE Advanced trap</h3>
          <p className="mt-2">Do not convert “may have definite cleavage planes” into “every crystal always breaks smoothly in every direction”.</p>
        </div>
      </Section>

      <Section title="4. True Solid and Pseudo-Solid Terminology">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4 text-center">
            <div className="text-sm text-zinc-400">Crystalline solid</div>
            <div className="mt-1 text-lg font-semibold text-cyan-200">True solid</div>
          </div>
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-4 text-center">
            <div className="text-sm text-zinc-400">Amorphous solid</div>
            <div className="mt-1 text-lg font-semibold text-amber-200">Pseudo-solid / supercooled-liquid-like</div>
          </div>
        </div>
        <p className="text-sm text-zinc-400">
          Use the conventional exam terminology, but do not infer that ordinary glass behaves as a freely flowing liquid at room temperature.
        </p>
      </Section>

      <Section title="5. Anisotropy and Isotropy">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.04] p-4">
            <h3 className="font-semibold text-violet-200">Anisotropy</h3>
            <p className="mt-2">A physical property may have different values along different directions.</p>
            <p className="mt-2 font-mono text-sm text-zinc-200">Pₓ ≠ Pᵧ</p>
            <p className="mt-2 text-sm text-zinc-400">Crystalline solids are generally treated as anisotropic at JEE level.</p>
          </div>
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4">
            <h3 className="font-semibold text-emerald-200">Isotropy</h3>
            <p className="mt-2">A physical property has the same macroscopic value in all directions.</p>
            <p className="mt-2 font-mono text-sm text-zinc-200">Pₓ = Pᵧ = P_z</p>
            <p className="mt-2 text-sm text-zinc-400">Amorphous solids are generally isotropic.</p>
          </div>
        </div>
        <p>Relevant directional properties include mechanical strength and refractive index, exactly in the opening source sequence.</p>
      </Section>

      <Section title="6. Master Comparison">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-3 py-3 text-zinc-200">Property</th>
                <th className="px-3 py-3 text-cyan-200">Crystalline</th>
                <th className="px-3 py-3 text-amber-200">Amorphous</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-zinc-300">
              {[
                ["Arrangement", "Regular/ordered", "Non-periodic"],
                ["Range of order", "Long-range", "Short-range"],
                ["Melting", "Sharp melting point", "Softens/melts over a range"],
                ["Cut/fracture", "May show clean cleavage", "Irregular fracture"],
                ["Heat of fusion", "Definite and characteristic", "No single sharp characteristic value"],
                ["Conventional term", "True solid", "Pseudo-solid / supercooled-liquid-like"],
                ["Directional behaviour", "Generally anisotropic", "Generally isotropic"],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="px-3 py-3 font-medium text-white">{row[0]}</td>
                  <td className="px-3 py-3">{row[1]}</td>
                  <td className="px-3 py-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="7. Examples in the Source Sequence">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
            <h3 className="font-semibold text-cyan-200">Crystalline examples</h3>
            <p className="mt-2">Quartz, NaCl, Fe, sulfur, diamond.</p>
          </div>
          <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.04] p-4">
            <h3 className="font-semibold text-amber-200">Amorphous examples</h3>
            <p className="mt-2">Rubber, glass, plastics, wood, quartz glass.</p>
          </div>
        </div>
      </Section>

      <Section title="8. Solved Example — JEE Advanced">
        <p>
          A solid has no sharp melting point, shows irregular fracture, and has the same refractive index in different macroscopic directions.
          Identify the most consistent structural class.
        </p>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p>No sharp melting point → amorphous behaviour.</p>
          <p>Irregular fracture → no definite long-range cleavage planes.</p>
          <p>Direction-independent refractive index → isotropic behaviour.</p>
          <p className="mt-3 font-semibold text-emerald-300">Therefore: amorphous solid.</p>
        </div>
      </Section>

      <Section title="9. Solved Multi-Correct">
        <p>Which statements are correct?</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Crystalline solids possess long-range order.</li>
          <li>Amorphous solids may possess short-range order.</li>
          <li>Every physical property of every crystal must be direction-dependent.</li>
          <li>Amorphous means all nearest-neighbour geometry is completely unconstrained.</li>
        </ol>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p>1 is correct.</p>
          <p>2 is correct.</p>
          <p>3 is too absolute.</p>
          <p>4 is false because short-range order can remain.</p>
          <p className="mt-3 font-semibold text-emerald-300">Correct: 1 and 2.</p>
        </div>
      </Section>

      <aside className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/[0.045] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Next in KOHINOOR</p>
        <p className="mt-2 text-sm leading-7 text-zinc-300">
          Polycrystalline solids, followed by the examples and then classification of crystalline solids into ionic,
          molecular, metallic, and covalent/network solids.
        </p>
      </aside>
    </article>
  );
}
