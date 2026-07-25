import Link from "next/link";
import type { ReactNode } from "react";
import { Molecule2D } from "@/components/chemistry/Molecule2D";
import { ButanoneEnolPair } from "../components/ChemistryDiagram";
import { ISOMERISM_MOLECULES as M } from "../molecules";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
      <h2 className="text-xl font-black text-cyan-200">{title}</h2>
      {children}
    </div>
  );
}

function Example({ n, cols = 2, children }: { n: string; cols?: number; children: ReactNode }) {
  return (
    <div className="mt-5">
      <p className="text-sm font-bold text-violet-200">Example {n}</p>
      <div className={`mt-3 grid gap-4 ${cols === 4 ? "md:grid-cols-4" : cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>{children}</div>
    </div>
  );
}

function Note({ children }: { children: ReactNode }) {
  return <p className="mt-4 rounded-xl border border-violet-300/20 bg-violet-300/[.06] p-4 text-sm text-violet-50">{children}</p>;
}

function Pending({ children }: { children: ReactNode }) {
  return <p className="mt-4 rounded-xl border border-amber-300/25 bg-amber-300/[.06] p-4 text-xs leading-6 text-amber-100">{children}</p>;
}

function KetoEnol() { return <ButanoneEnolPair />; }

export default function IsomerismPart02() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link>
        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · pages 8–16 · Part 2</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Metamerism, complete-isomer counting and tautomerism</h1>
        </header>

        <section className="mt-7 space-y-6">
          <Section title="5. Metamerism">
            <p className="mt-3 leading-7 text-slate-200">
              Compounds with the same molecular formula and the same functional group, but differing in the alkyl substituents present on the two
              sides of a bivalent or polyvalent functional group, show metamerism. It appears only for bivalent/polyvalent groups — ether, thioether,
              amine, ketone, amide, ester, sulphonate and acid anhydride — never for a monovalent group, since there is no second side to redistribute.
            </p>

            <div className="mt-5 rounded-xl border border-cyan-300/15 bg-[#050b16] p-4">
              <p className="text-sm font-bold text-violet-200">Worked problem — draw all isomers of C₅H₁₂O (DU = 0): alcohol and ether</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-cyan-300">Alcohols</p>
              <div className="mt-3 grid gap-4 md:grid-cols-4">
                <Molecule2D molecule={M.pentan1ol} />
                <Molecule2D molecule={M.methylbutan1ol3} />
                <Molecule2D molecule={M.neopentylAlcohol} />
                <Molecule2D molecule={M.pentan2ol} />
                <Molecule2D molecule={M.methylbutan2ol2} />
                <Molecule2D molecule={M.methylbutan1ol2} />
                <Molecule2D molecule={M.methylbutan2ol3} />
              </div>
              <Pending>
                Seven alcohols are drawn in the source at this point; the eighth mathematically possible C₅H₁₂O alcohol, pentan-3-ol, doesn&rsquo;t appear
                in the sketch here (it may simply be omitted, or grouped visually with pentan-2-ol) — noted rather than silently added.
              </Pending>
            </div>

            <Example n="1a — ether">
              <Molecule2D molecule={M.methoxypropane} />
              <Molecule2D molecule={M.ethoxyethane} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-slate-300">Methyl propyl ether and diethyl ether: both C₄H₁₀O, carbon distribution 1+3 versus 2+2.</p>

            <div className="mt-6 rounded-xl border border-cyan-300/15 bg-[#050b16] p-4">
              <p className="text-sm font-bold text-violet-200">Example 1b — all six C₅H₁₂O ether isomers</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Split as a methyl ether or an ethyl ether, the count is 4 + 2 = 6:</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-cyan-300">Methyl ethers, C₄H₉–O–CH₃ (4)</p>
              <div className="mt-3 grid gap-4 md:grid-cols-4">
                <Molecule2D molecule={M.methoxybutane} />
                <Molecule2D molecule={M.methoxybutane2} />
                <Molecule2D molecule={M.methoxyisobutane} />
                <Molecule2D molecule={M.tertButylMethylEther} />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-cyan-300">Ethyl ethers, C₃H₇–O–C₂H₅ (2)</p>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <Molecule2D molecule={M.ethoxypropane1} />
                <Molecule2D molecule={M.ethoxypropane2} />
              </div>
              <Note>All six are metamers of one another (same ether functional group, same C₅H₁₂O formula, different alkyl split around the oxygen).</Note>
              <Pending>
                An earlier pass of this pass had attempted a pairwise identical/chain/position/metamer classification table for this set from a more
                compressed sketch on p.8, but that structure numbering doesn&rsquo;t line up with this clearer p.12 derivation, so the table was removed
                rather than published against a possibly-mismatched set. Worth a source re-check if that classification table is wanted back.
              </Pending>
            </div>

            <Example n="2 — amine">
              <Molecule2D molecule={M.diethylamineMeta} />
              <Molecule2D molecule={M.nMethylpropan1amine} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-slate-300">Diethylamine and N-methylpropan-1-amine: both C₄H₁₁N, 2+2 versus 1+3.</p>

            <Example n="3 — thioether" cols={4}>
              <div><p className="text-xs text-slate-400">✗ too few C</p><Molecule2D molecule={M.dimethylSulfide} /></div>
              <div><p className="text-xs text-slate-400">✗ too few C</p><Molecule2D molecule={M.methylEthylSulfide} /></div>
              <div><p className="text-xs text-slate-400">✓</p><Molecule2D molecule={M.diethylSulfide} /></div>
              <div><p className="text-xs text-slate-400">✓</p><Molecule2D molecule={M.methylPropylSulfide} /></div>
            </Example>
            <p className="mt-2 text-sm leading-6 text-slate-300">Dimethyl sulfide and methyl ethyl sulfide have too few total carbons for a second alkyl distribution. Diethyl sulfide and methyl propyl sulfide (both C₄H₁₀S) are metamers.</p>

            <Example n="4 — ester">
              <Molecule2D molecule={M.methylButanoate} />
              <Molecule2D molecule={M.ethylPropanoate} />
            </Example>
            <Example n="5 — amide">
              <Molecule2D molecule={M.nMethylbutanamide} />
              <Molecule2D molecule={M.nEthylpropanamide} />
            </Example>
            <Example n="6 — acid anhydride">
              <Molecule2D molecule={M.aceticButanoicAnhydride} />
              <Molecule2D molecule={M.propanoicAnhydride} />
            </Example>
            <Example n="7 — ketone">
              <Molecule2D molecule={M.heptan2one} />
              <Molecule2D molecule={M.heptan4one} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-slate-300">Heptan-2-one and heptan-4-one: both C₇H₁₄O, carbon distribution 1+5 versus 3+3 around the carbonyl.</p>

            <Example n="8 — sulphonate">
              <Molecule2D molecule={M.ethylEthanesulfonate} />
              <Molecule2D molecule={M.methylPropanesulfonate} />
            </Example>
            <Example n="9 — sulphonate (ring pair)">
              <Molecule2D molecule={M.cyclobutylCyclopropanesulfonate} />
              <Molecule2D molecule={M.cyclopropylCyclobutanesulfonate} />
            </Example>

            <div className="mt-6 rounded-xl border border-cyan-300/15 bg-[#050b16] p-4">
              <p className="text-sm font-bold text-violet-200">Problems</p>
              <div className="mt-3 space-y-5">
                <div>
                  <p className="text-xs text-slate-400">i — same molecule, two orientations</p>
                  <div className="mt-2 grid gap-4 md:grid-cols-2"><Molecule2D molecule={M.phenylCyclohexylEther} /><Molecule2D molecule={M.phenylCyclohexylEther} /></div>
                  <p className="mt-1 text-sm text-slate-300">Phenyl cyclohexyl ether drawn two ways — same structure, not a metamer pair.</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">ii — metamer</p>
                  <div className="mt-2 grid gap-4 md:grid-cols-2"><Molecule2D molecule={M.cyclohexylBenzoate} /><Molecule2D molecule={M.phenylCyclohexanecarboxylate} /></div>
                </div>
                <div>
                  <p className="text-xs text-slate-400">iii — metamer</p>
                  <div className="mt-2 grid gap-4 md:grid-cols-2"><Molecule2D molecule={M.mTolylBenzenesulfonate} /><Molecule2D molecule={M.phenylMToluenesulfonate} /></div>
                </div>
                <div>
                  <p className="text-xs text-slate-400">iv — 2° vs 3° amine (functional isomers, not metamers — different amine class)</p>
                  <div className="mt-2 grid gap-4 md:grid-cols-2"><Molecule2D molecule={M.nEthylpropan1amine} /><Molecule2D molecule={M.nnDimethylpropan1amine} /></div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Structural-isomer counting exercise">
            <p className="mt-3 leading-7 text-slate-200">Draw all possible structural isomers of the given formula.</p>
            <Example n="a — C₃H₆, DU = 1">
              <Molecule2D molecule={M.propene} />
              <Molecule2D molecule={M.cyclopropane} />
            </Example>
            <div className="mt-6 rounded-xl border border-cyan-300/15 bg-[#050b16] p-4">
              <p className="text-sm font-bold text-violet-200">b — C₄H₈, DU = 1</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-cyan-300">Acyclic isomers</p>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <Molecule2D molecule={M.but1ene} />
                <Molecule2D molecule={M.but2ene} />
                <Molecule2D molecule={M.isobutylene} />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-cyan-300">Cyclic isomers</p>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <Molecule2D molecule={M.cyclobutane} />
                <Molecule2D molecule={M.methylcyclopropane} />
              </div>
            </div>
            <Pending>
              <b>Source example pending closer transcription:</b> part c (C₅H₁₀) begins on the same source page but its full acyclic-plus-cyclic isomer
              set continues onto the next page, which has not yet been transcribed in this pass.
            </Pending>
          </Section>

          <Section title="Monochloro and dichloro substitution counting">
            <div className="rounded-xl border border-cyan-300/15 bg-[#050b16] p-4">
              <p className="text-sm font-bold text-violet-200">Total monochloro derivatives of pentane (8)</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">n-Pentane gives 3 (its three distinct carbon environments); 2-methylbutane gives 4; neopentane gives 1 — 3 + 4 + 1 = 8.</p>
              <div className="mt-3 grid gap-4 md:grid-cols-4">
                <Molecule2D molecule={M.chloropentane1} />
                <Molecule2D molecule={M.chloropentane2} />
                <Molecule2D molecule={M.chloropentane3} />
                <Molecule2D molecule={M.chloromethylbutane1_2} />
                <Molecule2D molecule={M.chloromethylbutane2_2} />
                <Molecule2D molecule={M.chloromethylbutane2_3} />
                <Molecule2D molecule={M.chloromethylbutane1_3} />
                <Molecule2D molecule={M.neopentylChloride} />
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-cyan-300/15 bg-[#050b16] p-4">
              <p className="text-sm font-bold text-violet-200">Total dichloro derivatives of b. benzene (3), c. cyclohexane (4), d. toluene (10)</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-cyan-300">b. Dichlorobenzene</p>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <Molecule2D molecule={M.dichlorobenzene12} />
                <Molecule2D molecule={M.dichlorobenzene13} />
                <Molecule2D molecule={M.dichlorobenzene14} />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-cyan-300">c. Dichlorocyclohexane</p>
              <div className="mt-3 grid gap-4 md:grid-cols-4">
                <Molecule2D molecule={M.dichlorocyclohexane11} />
                <Molecule2D molecule={M.dichlorocyclohexane12} />
                <Molecule2D molecule={M.dichlorocyclohexane13} />
                <Molecule2D molecule={M.dichlorocyclohexane14} />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-cyan-300">d. Dichlorotoluene — one Cl on the benzylic carbon (4)</p>
              <div className="mt-3 grid gap-4 md:grid-cols-4">
                <Molecule2D molecule={M.dichloromethylbenzene} />
                <Molecule2D molecule={M.chloromethylChlorobenzeneOrtho} />
                <Molecule2D molecule={M.chloromethylChlorobenzeneMeta} />
                <Molecule2D molecule={M.chloromethylChlorobenzenePara} />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-cyan-300">d. Dichlorotoluene — both Cl on the ring (6)</p>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <Molecule2D molecule={M.dichlorotoluene23} />
                <Molecule2D molecule={M.dichlorotoluene24} />
                <Molecule2D molecule={M.dichlorotoluene25} />
                <Molecule2D molecule={M.dichlorotoluene26} />
                <Molecule2D molecule={M.dichlorotoluene34} />
                <Molecule2D molecule={M.dichlorotoluene35} />
              </div>
            </div>

            <Pending>
              <b>Source example pending closer transcription:</b> part a, the dichloro derivatives of C₄H₁₀, shows 7 structures in the source, but a
              full symmetry count gives 9 distinct dichlorobutanes (6 from n-butane + 3 from isobutane) — the mismatch needs a closer source re-check
              before publishing a specific 7- or 9-structure answer. The alkene-hydrogenation problem immediately after this exercise (&ldquo;how many
              alkenes on hydrogenation can produce the following alkane?&rdquo;) is also deferred: identifying the exact target alkane and both alkene
              precursors precisely from the freehand sketch needs a closer pass.
            </Pending>
          </Section>

          <Section title="6. Tautomerism">
            <p className="mt-3 leading-7 text-slate-200">Tautomerism is the dynamic interconversion of constitutional isomers by migration of an acidic hydrogen and displacement of a π bond. The forms are in equilibrium, are functional isomers, and are not resonance forms because an atom changes position. The source also uses desmotropism, cryptomerism, allelotropy and prototropy for this phenomenon.</p>
            <div className="mt-5 rounded-xl border border-cyan-300/20 bg-[#050b16] p-4">
              <div className="overflow-x-auto"><KetoEnol /></div>
              <p className="mt-3 border-t border-white/10 pt-2 text-xs leading-5 text-slate-400">Keto–enol tautomerism. An α-hydrogen from the carbon adjacent to the carbonyl is transferred to oxygen while the C=O π bond becomes C=C.</p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>Base catalysis begins with removal of α-H to give an enolate; protonation at oxygen gives the enol.</li>
              <li>Acid catalysis proceeds by carbonyl activation followed by α-deprotonation.</li>
              <li>Acid and base act as catalysts and are regenerated.</li>
              <li>The more stable tautomer is favoured; the source begins its stability discussion after these mechanism pages.</li>
            </ul>
          </Section>
        </section>

        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link href="/learn/isomerism/1" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 1</Link>
          <Link href="/learn/isomerism/3" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">3 →</Link>
        </nav>
      </article>
    </main>
  );
}
