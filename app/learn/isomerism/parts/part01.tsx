import Link from "next/link";
import type { ReactNode } from "react";
import { Molecule2D } from "@/components/chemistry/Molecule2D";
import { GlucoseOpenChainFischer } from "../components/ChemistryDiagram";
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

export default function IsomerismPart01() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
          Isomerism
        </Link>
        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Isomerism source · pages 2–7 · Part 1</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Structural isomerism: chain, position, ring–chain and functional</h1>
          <p className="mt-3 max-w-3xl text-[var(--text-body)]">
            Structural (constitutional) isomers share a molecular formula but have a different structural formula. This part works through the source&rsquo;s
            worked examples for chain, position and ring–chain isomerism.
          </p>
        </header>

        <section className="mt-7 space-y-6">
          <Section title="1. Chain isomerism">
            <p className="mt-3 leading-7 text-[var(--foreground)]">
              Compounds with the same molecular formula but a different carbon chain length (parent chain or side chain) are chain isomers.
              Methane, ethane and propane cannot show chain isomerism — an alkane needs at least four carbons.
            </p>

            <Example n="1">
              <Molecule2D molecule={M.nButane} priority />
              <Molecule2D molecule={M.isobutane} priority />
            </Example>
            <Note><b>Conclusion:</b> both structures are C₄H₁₀, but the longest chain is four carbons in the first and three in the second — they are chain isomers.</Note>

            <Example n="2">
              <Molecule2D molecule={M.cyclobutane} />
              <Molecule2D molecule={M.methylcyclopropane} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Both are C₄H₈: a four-membered ring versus a three-membered ring with a methyl branch.</p>

            <Example n="3" cols={4}>
              <Molecule2D molecule={M.propylcyclopropane} />
              <Molecule2D molecule={M.ethylcyclobutane} />
              <Molecule2D molecule={M.methylcyclopentane} />
              <Molecule2D molecule={M.cyclohexane} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">All four are C₆H₁₂: the ring size shrinks from six down to three carbons as the side chain lengthens to compensate — chain isomers of one another.</p>

            <Example n="4">
              <Molecule2D molecule={M.chlorobutane1} />
              <Molecule2D molecule={M.tertButylChloride} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Both C₄H₉Cl: an unbranched chain versus a branched chain, each bearing chlorine.</p>

            <Example n="6">
              <Molecule2D molecule={M.butanenitrile} />
              <Molecule2D molecule={M.isobutyronitrile} />
            </Example>
            <Example n="7">
              <Molecule2D molecule={M.butanoicAcid} />
              <Molecule2D molecule={M.isobutyricAcid} />
            </Example>
            <Example n="8">
              <Molecule2D molecule={M.butanamide} />
              <Molecule2D molecule={M.isobutyramide} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Examples 6–8 repeat the same unbranched-versus-branched C₄ skeleton with a nitrile, a carboxylic acid and an amide in place of chlorine.</p>

            <Example n="9">
              <Molecule2D molecule={M.dimethylmalononitrile} />
              <Molecule2D molecule={M.methylpentanedinitrile} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Both C₅H₆N₂: two nitrile groups on one quaternary carbon versus the two nitrile groups spread along the chain.</p>

            <Pending>
              <b>Source examples pending closer transcription:</b> examples 5, 10 and 11 (alkene and diene chain-isomer pairs, including the 4C/5C/6C
              positional-diene series) are drawn as small freehand sketches in the source and need a higher-fidelity re-check before publishing exact
              double-bond positions here.
            </Pending>
          </Section>

          <Section title="2. Position isomerism">
            <p className="mt-3 leading-7 text-[var(--foreground)]">
              Compounds with the same molecular formula and the same chain length, but differing in the position of a double bond, triple bond,
              functional group or substituent, are position isomers.
            </p>

            <Example n="1">
              <Molecule2D molecule={M.bromopropane1} />
              <Molecule2D molecule={M.bromopropane2} />
            </Example>

            <div className="mt-6 rounded-xl border border-cyan-300/15 bg-[#050b16] p-4">
              <p className="text-sm font-bold text-violet-200">Example 2 — counting isomers by (main-chain, branch) split</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">An alkane needs six or more carbons before position isomerism can appear among its chain isomers.</p>

              <p className="mt-4 text-xs font-black uppercase tracking-widest text-cyan-300">Butane, C₄H₁₀</p>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div><p className="text-xs text-[var(--text-muted)]">(4,0)</p><Molecule2D molecule={M.nButane} /></div>
                <div><p className="text-xs text-[var(--text-muted)]">(3,1)</p><Molecule2D molecule={M.isobutane} /></div>
              </div>
              <p className="mt-2 text-sm text-[var(--text-body)]">They are chain isomers.</p>

              <p className="mt-5 text-xs font-black uppercase tracking-widest text-cyan-300">Pentane, C₅H₁₂</p>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <div><p className="text-xs text-[var(--text-muted)]">(5,0)</p><Molecule2D molecule={M.nPentane} /></div>
                <div><p className="text-xs text-[var(--text-muted)]">(4,1)</p><Molecule2D molecule={M.isopentane} /></div>
                <div><p className="text-xs text-[var(--text-muted)]">(3,2)</p><Molecule2D molecule={M.neopentane} /></div>
              </div>
              <p className="mt-2 text-sm text-[var(--text-body)]">They are chain isomers.</p>

              <p className="mt-5 text-xs font-black uppercase tracking-widest text-cyan-300">Hexane, C₆H₁₄</p>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <div><p className="text-xs text-[var(--text-muted)]">(6,0) — a</p><Molecule2D molecule={M.nHexane} /></div>
                <div><p className="text-xs text-[var(--text-muted)]">(5,1) — b</p><Molecule2D molecule={M.methylpentane2} /></div>
                <div><p className="text-xs text-[var(--text-muted)]">(5,1) — c</p><Molecule2D molecule={M.methylpentane3} /></div>
              </div>
              <p className="mt-2 text-sm text-[var(--text-body)]"><b>b, c</b> are position isomers of each other (same 5-carbon main chain, methyl on C2 versus C3); each is a chain isomer of <b>a</b>.</p>

              <p className="mt-5 text-xs font-black uppercase tracking-widest text-cyan-300">Heptane, C₇H₁₆ (partial)</p>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <div><p className="text-xs text-[var(--text-muted)]">(7,0) — a</p><Molecule2D molecule={M.nHeptane} /></div>
                <div><p className="text-xs text-[var(--text-muted)]">(6,1) — b</p><Molecule2D molecule={M.methylhexane2} /></div>
                <div><p className="text-xs text-[var(--text-muted)]">(6,1) — c</p><Molecule2D molecule={M.methylhexane3} /></div>
              </div>
              <p className="mt-2 text-sm text-[var(--text-body)]"><b>b, c</b> are position isomers.</p>
              <Pending>
                The source continues the heptane table with a (5,2) group of four more isomers (labelled d–h) and a (4,3) isomer (labelled i),
                stating &ldquo;e, f, g, h position isomer.&rdquo; The exact branch placement in that group needs a higher-fidelity re-check before it is
                published here, since misreading a dimethyl position would misclassify chain versus position isomers.
              </Pending>
            </div>

            <Example n="(alkyne)">
              <Molecule2D molecule={M.but1yne} />
              <Molecule2D molecule={M.but2yne} />
            </Example>
            <Example n="(alcohol)">
              <Molecule2D molecule={M.pentan1ol} />
              <Molecule2D molecule={M.pentan2ol} />
            </Example>
            <Example n="(dihydroxybenzene)" cols={3}>
              <Molecule2D molecule={M.catechol} />
              <Molecule2D molecule={M.resorcinol} />
              <Molecule2D molecule={M.quinol} />
            </Example>
            <Note>Catechol (1,2-), resorcinol (1,3-) and quinol (1,4-) are position isomers of benzenediol. The source notes they are soluble in NaOH but not in NaHCO₃.</Note>

            <Pending>
              <b>Source examples pending closer transcription:</b> the ring-methylcyclohexane set, the methylphenol (cresol) set, the 1,2- versus
              1,1-dibromoethane pair, and the two branched-nonane comparisons need a higher-fidelity re-check of the source sketch before publishing here.
            </Pending>
          </Section>

          <Section title="3. Ring–chain isomerism">
            <p className="mt-3 leading-7 text-[var(--foreground)]">
              One isomer exists in open-chain form and the other in ring (cyclic) form, while the molecular formula stays the same — one degree of
              unsaturation is expressed as a π bond in the chain form and as a ring in the cyclic form.
            </p>

            <Example n="1">
              <Molecule2D molecule={M.propene2} />
              <Molecule2D molecule={M.cyclopropane} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">One degree of unsaturation: a C=C π bond versus a three-membered ring.</p>

            <Example n="2">
              <Molecule2D molecule={M.but2yneRingChain} />
              <Molecule2D molecule={M.cyclobutene} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Two degrees of unsaturation: a C≡C triple bond versus a ring plus one π bond.</p>

            <Example n="3" cols={3}>
              <Molecule2D molecule={M.but3en1ol} />
              <Molecule2D molecule={M.methyloxetane2} />
              <Molecule2D molecule={M.cyclobutanol} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">But-3-en-1-ol (open chain, labelled a in the source) shares its degree of unsaturation with two cyclic forms: a cyclic ether (b) and a cyclic alcohol (c). The source states a,b and a,c are both ring–chain isomer pairs.</p>

            <Example n="4">
              <Molecule2D molecule={M.allylMercaptan} />
              <Molecule2D molecule={M.thietane} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Prop-2-ene-1-thiol (allyl mercaptan) versus thietane: the same C₃H₆S degree of unsaturation as a π bond or as a ring.</p>

            <Example n="5 — glucose">
              <Molecule2D molecule={M.glucopyranose} />
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-4"><GlucoseOpenChainFischer /></div>
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Glucose exists predominantly as the cyclic hemiacetal (pyranose) form, in equilibrium with a small proportion of the open-chain aldehyde form drawn as a Fischer projection.</p>

            <Pending>
              <b>Source example pending closer transcription:</b> a complex polycyclic structure pair with methyl and vinyl-substituted cyclopentane rings
              (immediately after example 4 in the source) is too compressed in the freehand sketch to transcribe its exact connectivity with confidence.
            </Pending>
          </Section>

          <Section title="4. Functional isomerism">
            <p className="mt-3 leading-7 text-[var(--foreground)]">Compounds having the same molecular formula but a different functional group are called functional isomers.</p>

            <Example n="1 — alcohol / ether">
              <Molecule2D molecule={M.propan1ol} />
              <Molecule2D molecule={M.methoxyethane} />
            </Example>
            <Example n="2 — carboxylic acid / ester">
              <Molecule2D molecule={M.butanoicAcid} />
              <Molecule2D molecule={M.methylPropanoate} />
            </Example>
            <Example n="3 — aldehyde / ketone">
              <Molecule2D molecule={M.propanal} />
              <Molecule2D molecule={M.acetone} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Both are CₙH₂ₙO; the source also notes the enol tautomer of the aldehyde sits alongside this pair.</p>

            <Example n="4 — nitrile / isonitrile">
              <Molecule2D molecule={M.propanenitrile} />
              <Molecule2D molecule={M.propylIsocyanide} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">R–C≡N versus R–N≡C.</p>

            <Example n="5 — amine classes" cols={3}>
              <Molecule2D molecule={M.butan1amine} />
              <Molecule2D molecule={M.nMethylpropan1amine} />
              <Molecule2D molecule={M.nnDimethylethanamine} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">1°, 2° and 3° amines are functional isomers of one another (all C₄H₁₁N here).</p>

            <Example n="6 — aliphatic / aromatic alcohol" cols={3}>
              <Molecule2D molecule={M.benzylAlcohol} />
              <Molecule2D molecule={M.oCresol} />
              <Molecule2D molecule={M.anisole} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">Benzyl alcohol (aliphatic alcohol), o-cresol (aromatic alcohol) and anisole (ether) are all C₇H₈O.</p>

            <Example n="7 — amide classes" cols={3}>
              <Molecule2D molecule={M.butanamide} />
              <Molecule2D molecule={M.nMethylpropanamide} />
              <Molecule2D molecule={M.nnDimethylacetamide} />
            </Example>
            <p className="mt-2 text-sm leading-6 text-[var(--text-body)]">1°, 2° and 3° amides, all C₄H₉NO.</p>

            <Example n="8 — nitro / nitrito">
              <Molecule2D molecule={M.nitrobenzene} />
              <Molecule2D molecule={M.phenylNitrite} />
            </Example>

            <Example n="9 — amide / oxime">
              <Molecule2D molecule={M.butanamide} />
              <Molecule2D molecule={M.butanalOxime} />
            </Example>

            <Example n="10a — diene / alkyne">
              <Molecule2D molecule={M.allene} />
              <Molecule2D molecule={M.propyne} />
            </Example>
            <Example n="10b — diene / alkyne family" cols={4}>
              <Molecule2D molecule={M.buta12diene} />
              <Molecule2D molecule={M.buta13diene} />
              <Molecule2D molecule={M.but1yneFunc} />
              <Molecule2D molecule={M.but2yneFunc} />
            </Example>
            <Note>All four are C₄H₆. The source marks each diene/alkyne cross-pair as functional isomers: (buta-1,2-diene, but-1-yne), (buta-1,2-diene, but-2-yne), (buta-1,3-diene, but-1-yne) and (buta-1,3-diene, but-2-yne).</Note>
          </Section>
        </section>

        <nav className="mt-8 flex justify-end border-t border-white/10 pt-6">
          <Link href="/learn/isomerism/2" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">2 →</Link>
        </nav>
      </article>
    </main>
  );
}
