import Link from "next/link";
import { Molecule2D } from "@/components/chemistry/Molecule2D";
import { ISOMERISM_MOLECULES as M } from "../molecules";

export default function IsomerismPart01() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
          Isomerism
        </Link>
        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · pages 1–7 · Part 1</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Structural isomerism: source examples</h1>
          <p className="mt-3 max-w-3xl text-slate-300">Same molecular formula, different structural formula. The pairs below are separately rendered instances; connectivity is compared before naming the relationship.</p>
        </header>

        <section className="mt-7 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">1. Chain isomerism</h2>
            <p className="mt-3 leading-7 text-slate-200">Compounds with the same molecular formula but a different carbon skeleton or parent-chain length are chain isomers. The source notes that alkanes require at least four carbon atoms to show this type.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Molecule2D molecule={M.nButane} priority />
              <Molecule2D molecule={M.isobutane} priority />
            </div>
            <p className="mt-4 rounded-xl border border-violet-300/20 bg-violet-300/[.06] p-4 text-sm text-violet-50"><b>Conclusion:</b> both structures have C₄H₁₀, but the longest chain is four carbons in the first and three carbons in the second; therefore they are chain isomers.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">2. Position isomerism</h2>
            <p className="mt-3 leading-7 text-slate-200">Position isomers retain the same molecular formula and carbon skeleton; the position of a functional group, substituent or multiple bond changes.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Molecule2D molecule={M.propan1ol} />
              <Molecule2D molecule={M.propan2ol} />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300"><b>Check:</b> the oxygen remains an alcohol –OH in both structures; only its position changes. This is not functional isomerism.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">3. Ring–chain isomerism</h2>
            <p className="mt-3 leading-7 text-slate-200">One member is open-chain while the other is cyclic. The molecular formula remains the same but one degree of unsaturation is expressed as a double bond in the chain member and as a ring in the cyclic member.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Molecule2D molecule={M.propene} />
              <Molecule2D molecule={M.cyclopropane} />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">Propene and cyclopropane are both C₃H₆, but one is acyclic with C=C and the other is a three-membered ring.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">4. Functional isomerism</h2>
            <p className="mt-3 leading-7 text-slate-200">Functional isomers have the same molecular formula but different functional groups. The source lists alcohol/ether, carboxylic acid/ester, aldehyde/ketone, nitrile/isonitrile, and primary/secondary/tertiary amine cases.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Molecule2D molecule={M.ethanol} />
              <Molecule2D molecule={M.dimethylEther} />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">Ethanol (alcohol) and dimethyl ether (ether) are each C₂H₆O, yet the oxygen has different connectivity and therefore a different functional group.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>Aldehyde and ketone may share CₙH₂ₙO.</li>
              <li>Carboxylic acid and ester have –COOH versus –COOR connectivity.</li>
              <li>Nitrile R–C≡N and isonitrile R–N≡C are functional isomers.</li>
            </ul>
          </div>
        </section>

        <nav className="mt-8 flex justify-end border-t border-white/10 pt-6">
          <Link href="/learn/isomerism/2" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">2 →</Link>
        </nav>
      </article>
    </main>
  );
}
