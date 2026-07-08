import React from "react";

type Row = {
  left: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
};

export default function MoleConceptPart01() {
  const quantityRows: Row[] = [
    {
      left: "mass",
      middle: "→",
      right: "kg",
    },
    {
      left: "volume",
      middle: "→",
      right: (
        <>
          m<sup>3</sup>
        </>
      ),
    },
    {
      left: "Number",
      middle: "→",
      right: (
        <>
          ?? <span className="rounded-full border border-blue-300 px-3 py-1">Mole</span>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-6xl space-y-10">
        <header className="rounded-3xl border border-cyan-300/30 bg-slate-900 p-6 shadow-2xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Mole Concept
          </p>

          <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Part 1/15
          </h1>

          <p className="mt-3 text-lg text-slate-300">
            Pages 1–4
          </p>

          <p className="mt-2 text-xl font-semibold text-amber-200">
            Cover, Quantity Representation, Need of Mole, Avogadro Number,
            Molecule and Formula Unit
          </p>

          <p className="mt-4 rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-red-100">
            Watermark / TG text excluded. Handwritten content preserved page-wise.
            Unclear handwriting is marked as [unclear].
          </p>
        </header>

        {/* PAGE 1 */}
        <section className="rounded-3xl border border-lime-300/40 bg-white p-6 text-slate-950 shadow-2xl md:p-10">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-white">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-rose-600/80" />
            <div className="absolute left-20 top-16 h-36 w-36 rounded-full bg-teal-400/80" />
            <div className="absolute right-24 -top-10 h-64 w-64 rounded-full bg-lime-300/90" />
            <div className="absolute right-[-50px] top-40 h-40 w-40 rounded-full bg-slate-600" />
            <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-teal-400/80" />
            <div className="absolute bottom-[-40px] left-[-20px] h-56 w-56 rounded-full bg-rose-700/80" />
            <div className="absolute bottom-24 left-[40%] h-44 w-44 rounded-full bg-lime-300/90" />
            <div className="absolute bottom-8 left-[55%] h-28 w-28 rounded-full bg-slate-600" />

            <div className="relative z-10 mx-auto mt-28 max-w-xl rounded-3xl border-[18px] border-lime-300 bg-white px-8 py-10 text-center">
              <h2 className="text-5xl font-black uppercase tracking-[0.18em] text-red-500 drop-shadow-[3px_3px_0_#22d3ee] md:text-6xl">
                MOLE
              </h2>
              <div className="mx-auto my-2 h-1 w-72 max-w-full bg-fuchsia-600" />

              <h2 className="mt-6 text-5xl font-black uppercase tracking-[0.12em] text-red-500 drop-shadow-[3px_3px_0_#22d3ee] md:text-6xl">
                CONCEPT
              </h2>
              <div className="mx-auto mt-2 h-1 w-96 max-w-full bg-fuchsia-600" />
            </div>
          </div>
        </section>

        {/* PAGE 2 */}
        <section className="rounded-3xl border border-blue-300/30 bg-slate-900 p-6 md:p-8">
          <h2 className="text-center text-4xl font-black text-red-400 underline decoration-red-400 decoration-4 underline-offset-8">
            Mole Concept
          </h2>

          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-950 p-6">
            <p className="text-2xl leading-relaxed text-blue-200">
              Mole is SI unit to represent the{" "}
              <span className="underline decoration-blue-400 decoration-4 underline-offset-4">
                quantity
              </span>{" "}
              of any substance.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-950 p-6">
            <h3 className="text-2xl font-bold text-white">
              Quantity
            </h3>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {quantityRows.map((row, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-5 text-center text-xl"
                >
                  <div className="font-semibold text-slate-100">{row.left}</div>
                  <div className="my-2 text-blue-300">{row.middle}</div>
                  <div className="text-2xl font-bold text-blue-200">{row.right}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-blue-400/40 bg-slate-950 p-6">
              <h3 className="text-2xl font-bold text-blue-300 underline">
                solid
              </h3>
              <p className="mt-4 text-xl text-slate-100">
                mass
              </p>
              <p className="mt-4 rounded-xl border border-blue-400/30 bg-blue-500/10 p-4 text-blue-100">
                Diagram: solid placed on weighing balance. Balance reading shown
                as <strong>1 kg</strong>; small marking below appears as{" "}
                <strong>[unclear: “5”]</strong>.
              </p>
            </div>

            <div className="rounded-3xl border border-pink-400/40 bg-slate-950 p-6">
              <h3 className="text-2xl font-bold text-pink-300 underline">
                liquid
              </h3>
              <p className="mt-4 text-xl text-slate-100">
                volume
              </p>
              <p className="mt-4 rounded-xl border border-pink-400/30 bg-pink-500/10 p-4 text-pink-100">
                Diagram: liquid in a vessel; volume is highlighted.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-400/40 bg-slate-950 p-6">
              <h3 className="text-2xl font-bold text-yellow-300 underline">
                Gas
              </h3>
              <p className="mt-4 text-xl text-slate-100 underline decoration-slate-400 decoration-2 underline-offset-4">
                volume
              </p>
              <p className="mt-2 text-xl text-slate-100">
                P, T
              </p>
              <p className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-500/10 p-4 text-yellow-100">
                Gas quantity is represented by volume only with specified
                pressure and temperature.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-300/40 bg-slate-950 p-6">
            <h3 className="text-2xl font-bold text-amber-300">
              Additional page diagram
            </h3>

            <div className="mt-4 space-y-3 text-lg leading-relaxed">
              <p>
                A container marked <strong>5 L</strong> is shown.
              </p>
              <p>
                Arrow points to gas sample reading:{" "}
                <strong>0.2 gm gas</strong>.
              </p>
              <p>
                Another reading shown: <strong>2 kg gas</strong>.
              </p>
              <p>
                Meaning: same volume container may contain different mass of gas,
                so gas quantity must be related with P and T.
              </p>
            </div>
          </div>
        </section>

        {/* PAGE 3 */}
        <section className="rounded-3xl border border-fuchsia-300/30 bg-slate-900 p-6 md:p-8">
          <h2 className="text-3xl font-black text-fuchsia-300">
            Page 3 — Need of Mole
          </h2>

          <div className="mt-6 space-y-5 text-xl leading-relaxed">
            <p className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <strong>(i)</strong> Amounts of solids are normally expressed by
              their mass.
            </p>

            <p className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <strong>(ii)</strong> Amounts of fluids{" "}
              <strong>(liquids and gases)</strong> are normally expressed by
              their volumes.
            </p>

            <p className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <strong>(iii)</strong> As gases do not have their own volume, the
              volume of gas at defined pressure and temperature represent their
              amount.
            </p>

            <p className="rounded-2xl border border-blue-400/40 bg-blue-500/10 p-5 text-blue-100">
              <strong>(iv)</strong> Sometimes, representation of quantity by no.
              become must. In order to express quantity of very large no. of
              particles, the term mole is introduced.
            </p>

            <p className="rounded-2xl border border-pink-400/40 bg-pink-500/10 p-5 text-pink-100">
              <strong>(v)</strong> One mole of any substance contains
              Avogadro&apos;s number{" "}
              <strong>
                (6.022 × 10<sup>23</sup>)
              </strong>{" "}
              of particles of that kind.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-blue-400/40 bg-slate-950 p-6">
            <h3 className="text-2xl font-bold text-blue-300 underline decoration-blue-400 underline-offset-4">
              Avogadro&apos;s number or Avogadro&apos;s constant
            </h3>

            <p className="mt-5 text-xl leading-relaxed">
              <strong>
                N<sub>A</sub>
              </strong>{" "}
              : No. of atoms present in exactly <strong>12.0 gm</strong> of{" "}
              <strong>
                C<sup>12</sup>
              </strong>{" "}
              isotope.
            </p>

            <div className="mt-6 rounded-2xl border border-yellow-400/50 bg-yellow-400/10 p-5 text-center text-2xl font-black text-yellow-200">
              N<sub>A</sub> = 6.022 × 10<sup>23</sup> particles/mol
            </div>
          </div>
        </section>

        {/* PAGE 4 */}
        <section className="rounded-3xl border border-emerald-300/30 bg-slate-900 p-6 md:p-8">
          <h2 className="text-3xl font-black text-emerald-300">
            Page 4 — Mole Atom, Molecule, Ion and Formula Unit
          </h2>

          <div className="mt-6 space-y-4 text-xl leading-relaxed">
            <p className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              1 mole atom = N<sub>A</sub> atoms ={" "}
              <strong className="text-pink-300">1 g-atom</strong>
            </p>

            <p className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              1 mole molecule = N<sub>A</sub> molecules ={" "}
              <strong className="text-pink-300">1 g-molecule</strong>
            </p>

            <p className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              1 mole ion = N<sub>A</sub> ions ={" "}
              <strong className="text-pink-300">1 g-ion</strong>
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-pink-400/40 bg-pink-500/10 p-6">
            <p className="text-xl leading-relaxed text-pink-100">
              If the kind of particle is not given, the term mole is normally
              used for g-molecule, because, in general, substances exist in
              nature in the form of molecules.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-blue-400/40 bg-blue-500/10 p-6">
            <p className="text-xl leading-relaxed text-blue-100">
              * The term molecule should not be used for ionic compound. The
              correct term is{" "}
              <strong className="underline decoration-pink-400 decoration-4 underline-offset-4">
                formula unit
              </strong>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-green-400/40 bg-slate-950 p-6">
              <h3 className="text-2xl font-bold text-green-300 underline">
                HCl
              </h3>

              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-xl">
                  H — Cl
                </p>
                <p className="mt-3 text-xl">
                  Independent existence
                </p>
                <p className="mt-3 text-xl">
                  ↓
                </p>
                <p className="rounded-full border border-pink-400 px-4 py-2 text-center text-xl font-bold text-pink-300">
                  Molecule
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-lg">
                  Additional molecular examples written near the diagram:
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-100">
                  CH<sub>4</sub>
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-100">
                  N<sub>2</sub>H<sub>4</sub>
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-100">
                  NH<sub>3</sub>
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-400/40 bg-slate-950 p-6">
              <h3 className="text-2xl font-bold text-green-300 underline">
                NaCl
              </h3>

              <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-xl">
                  Na<sup>+</sup> surrounded by Cl<sup>-</sup> ions.
                </p>

                <p className="mt-3 text-xl text-pink-200">
                  No independent existence
                </p>

                <p className="mt-3 text-xl">
                  ↓
                </p>

                <p className="text-xl line-through decoration-pink-400">
                  molecule
                </p>

                <p className="mt-3 rounded-full border border-pink-400 px-4 py-2 text-center text-xl font-bold text-pink-300">
                  Formula unit
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-purple-400/40 bg-slate-950 p-6">
            <h3 className="text-2xl font-bold text-purple-300">
              General ionic representation shown on page
            </h3>

            <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900 p-5 text-xl leading-relaxed">
              <p>
                Ions shown:
              </p>

              <p className="mt-3 text-2xl font-bold">
                A<sup>x+</sup> &nbsp;&nbsp; B<sup>y-</sup>
              </p>

              <p className="mt-3">
                Cross ratio shown below the ions:
              </p>

              <p className="mt-3 text-2xl font-bold">
                A<sub>y</sub>B<sub>x</sub>
              </p>

              <p className="mt-3">
                Meaning: an ionic compound is represented by the simplest
                formula unit, not by a molecule.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/40 bg-slate-950 p-6">
            <h3 className="text-2xl font-bold text-cyan-300">
              MgO example
            </h3>

            <p className="mt-5 text-xl leading-relaxed">
              MgO is written as a formula unit.
            </p>

            <p className="mt-3 text-xl leading-relaxed">
              Mg<sup>2+</sup> and O<sup>2-</sup> combine in 1 : 1 ratio.
            </p>

            <p className="mt-3 rounded-full border border-pink-400 px-4 py-2 text-center text-xl font-bold text-pink-300">
              MgO → Formula unit
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
