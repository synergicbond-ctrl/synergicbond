import Link from "next/link";
import { BlockMath } from "@/components/math/react-katex";
import { HashedWedge, SolidWedge } from "../components/ChemistryDiagram";

// ─────────────────────────────────────────────────────────────────────────────
// Optical Isomerism source · pages 59–82 · Part 14
// Full source audit: D/L relative nomenclature, the complete CIP (R/S)
// rule set including phantom-atom duplication and the allowed-interchange
// technique, ~18 fully worked R/S assignments, erythro/threo nomenclature,
// Ra/Sa for chiral axes (allenes, biphenyls), and stereoisomer-counting.
// pp75–81 (a 45-item unsolved R/S bank + a 38-item isomer-classification
// bank) are pure practice sets that apply the same rules taught here —
// represented by a few sample entries rather than reproduced in full.
// ─────────────────────────────────────────────────────────────────────────────

const H = "H";

function DLFischer({ top, arm1, arm2, bottom, label }: { top: string; arm1: [string, string]; arm2: [string, string]; bottom: string; label: string }) {
  return (
    <svg fill="currentColor" viewBox="0 0 170 165" className="h-auto w-full text-slate-100" role="img" aria-label={label}>
      <line x1="85" y1="15" x2="85" y2="140" stroke="currentColor" strokeWidth="2.4" />
      <line x1="30" y1="55" x2="140" y2="55" stroke="currentColor" strokeWidth="2.4" />
      <line x1="30" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="2.4" />
      <text x="85" y="8" textAnchor="middle" fontSize="13">{top}</text>
      <text x="85" y="158" textAnchor="middle" fontSize="13">{bottom}</text>
      <text x="24" y="60" textAnchor="end" fontSize="13">{arm1[0]}</text>
      <text x="146" y="60" fontSize="13">{arm1[1]}</text>
      <text x="24" y="105" textAnchor="end" fontSize="13">{arm2[0]}</text>
      <text x="146" y="105" fontSize="13">{arm2[1]}</text>
    </svg>
  );
}

/** Priority-labelled tetrahedral centre (front three ligands on wedge/plain
 *  bonds, lowest priority hashed to the back) plus the circular 1→2→3 trace
 *  used throughout the source's worked R/S solutions. */
function CIPExample({ title, priorities, front, hashedLabel, verdict }: {
  title: string;
  priorities: string;
  front: [string, string, string];
  hashedLabel: string;
  verdict: "R" | "S";
}) {
  const clockwise = verdict === "R";
  return (
    <div className="rounded-xl border border-white/10 bg-[#050b16] p-4">
      <p className="text-sm font-bold text-slate-200">{title}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">Priority: {priorities}</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <svg fill="currentColor" viewBox="0 0 160 150" className="h-auto w-full text-slate-100" role="img" aria-label={`${title} tetrahedral centre with lowest priority hashed to the back`}>
          <g fontSize="12">
            <line x1="80" y1="70" x2="80" y2="20" stroke="currentColor" strokeWidth="2" />
            <text x="80" y="14" textAnchor="middle">1 {front[0]}</text>
            <SolidWedge from={{ x: 80, y: 70 }} to={{ x: 132, y: 100 }} width={8} />
            <text x="138" y="106">2 {front[1]}</text>
            <line x1="80" y1="70" x2="30" y2="105" stroke="currentColor" strokeWidth="2" />
            <text x="8" y="112">3 {front[2]}</text>
            <HashedWedge from={{ x: 80, y: 70 }} to={{ x: 80, y: 132 }} width={7} />
            <text x="80" y="148" textAnchor="middle">4 {hashedLabel}</text>
          </g>
        </svg>
        <svg fill="currentColor" viewBox="0 0 140 140" className="h-auto w-full text-slate-100" role="img" aria-label={`Circular trace showing ${verdict} configuration`}>
          <circle cx="70" cy="65" r="46" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d={clockwise ? "M 70 22 A 46 46 0 1 1 69 22" : "M 70 22 A 46 46 0 1 0 71 22"} fill="none" stroke="#67e8f9" strokeWidth="2.4" markerEnd="url(#cip-arrow)" />
          <defs><marker id="cip-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L0 8 L8 4 Z" fill="#67e8f9" /></marker></defs>
          <text x="70" y="26" textAnchor="middle" fontSize="13" fontWeight="700">1</text>
          <text x={clockwise ? 112 : 28} y="100" textAnchor="middle" fontSize="13" fontWeight="700">2</text>
          <text x={clockwise ? 28 : 112} y="100" textAnchor="middle" fontSize="13" fontWeight="700">3</text>
          <text x="70" y="132" fontSize="12" textAnchor="middle" fill="#94a3b8">4 → back</text>
        </svg>
      </div>
      <p className="mt-2 text-center text-sm font-black text-cyan-200">{clockwise ? "1→2→3 clockwise" : "1→2→3 counter-clockwise"} → <span className={verdict === "R" ? "text-emerald-300" : "text-violet-300"}>{verdict}</span></p>
    </div>
  );
}

function PhantomAtomRow({ real, expanded, priority }: { real: string; expanded: string; priority: string }) {
  return (
    <div className="grid grid-cols-3 items-center gap-2 rounded-lg bg-white/[.03] p-2.5 text-xs sm:text-sm">
      <span className="font-mono text-slate-200">{real}</span>
      <span className="text-center text-slate-400">≡ {expanded}</span>
      <span className="text-right text-cyan-300">{priority}</span>
    </div>
  );
}

export default function IsomerismPart14() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto max-w-6xl">
        <Link href="/learn/isomerism" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">Isomerism</Link>
        <header className="mt-6 rounded-3xl border border-cyan-300/15 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,.18),_transparent_35%),linear-gradient(135deg,rgba(34,211,238,.08),rgba(2,6,23,.7),rgba(139,92,246,.1))] p-6 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[.24em] text-cyan-200">Optical Isomerism source · pages 59–82 · Part 14</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Nomenclature of optical isomers: D/L and R/S (CIP)</h1>
        </header>

        <section className="mt-7 space-y-6">
          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Nomenclature overview</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">Optical isomers are named by two systems: <b className="text-white">relative naming</b> (D,L-nomenclature, and the related erythro/threo system) and <b className="text-white">absolute naming</b> (R,S-nomenclature via the CIP rules).</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">D, L-nomenclature</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">D,L-nomenclature is based on the relative position of the OH group compared to D/L-glyceraldehyde, the reference standard.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><DLFischer top="CHO" arm1={[H, "OH"]} arm2={["", ""]} bottom="CH₃" label="D-glyceraldehyde" /><p className="mt-1 text-center text-xs text-cyan-300">D-glyceraldehyde</p></div>
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><DLFischer top="CHO" arm1={["HO", H]} arm2={["", ""]} bottom="CH₃" label="L-glyceraldehyde" /><p className="mt-1 text-center text-xs text-cyan-300">L-glyceraldehyde</p></div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">If more than one OH group is present, check the position of the <b className="text-white">bottom-most</b> OH group attached to a chiral centre (nearest the higher-numbered/CH₂OH end): OH on the right → D; OH on the left → L. E.g. D(+)-glucose has its bottom stereocentre OH on the right; its mirror image L(−)-glucose has all four OH groups reversed, while L(+)-glucose is a diastereomer sharing the bottom-OH-left criterion but differing at the other centres. This convention is generally applied to carbohydrates and amino acids — for amino acids, priority NH₂ &gt; OH decides D/L the same way when both groups are present in a molecule (e.g. in serine-like structures the amino group, not a hydroxyl, is checked at the bottom stereocentre).</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Absolute naming / R-S naming / CIP rule</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">R = Rectus (clockwise) · S = Sinister (anticlockwise). There are two steps: (1) assign <b className="text-white">priority</b> to the four ligands, (2) trace the <b className="text-white">sequence</b> 1→2→3 with the lowest-priority group pointed away from the viewer.</p>
            <ol className="mt-3 list-[lower-alpha] space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>Priority is assigned on the basis of the atomic number of the atom directly attached to the stereocentre.</li>
              <li>If isotopes are present, priority is assigned on the basis of atomic mass (e.g. T &gt; D &gt; H).</li>
              <li>If priority is not settled by the first atom, check the atomic number of the 2nd, then 3rd atom outward along each branch, and so on.</li>
              <li>
                <b className="text-white">Phantom atom rule</b> — for atoms with a multiple bond, the atom(s) to which they are multiply bonded must be duplicated (double bond) or triplicated (triple bond) at both ends of the multiple bond. The duplicate atoms are written in parentheses and — except for H — are completed to four ligands with phantom atoms of atomic number zero.
                <div className="mt-3 space-y-1.5">
                  <PhantomAtomRow real="–COOH" expanded="–C(–OH)(=O)(O)" priority="&gt; –CH(OH)₂-type triol carbon" />
                  <PhantomAtomRow real="–CH=CH₂" expanded="–CH(C)–CH(C)(H)(H)" priority="&gt; –CH(CH₃)₂" />
                  <PhantomAtomRow real="–C≡CH" expanded="–C(C)(C)–CH(C)" priority="&gt; –C(CH₃)₃" />
                  <PhantomAtomRow real="–C≡N" expanded="–C(N)(N)–N(C)(C)" priority="&gt; –CH₂–N(CH₃)₂" />
                  <PhantomAtomRow real="–C₆H₅ (phenyl)" expanded="alternating (C)/H duplicated ring" priority="&gt; –C(CH₃)₃" />
                </div>
              </li>
              <li>
                If the lowest-priority group lies along a horizontal line in a Fischer projection (i.e. toward the viewer, not away), make an <b className="text-white">even number of interchanges</b> of any two ligands to move it to a horizontal-safe read — an even number of interchanges does not change the true configuration (each single swap inverts it, so two swaps cancel). <b className="text-white">Shortcut:</b> read the trace directly with the lowest priority toward the viewer, then simply invert the apparent answer (S → R, or R → S) once.
              </li>
              <li>If two ligands are structurally identical except that one is &quot;real&quot; and one is a phantom/duplicate, the real ligand is preferred over the pseudo (phantom) one.</li>
              <li>If the competing ligands are themselves stereoisomeric, cis is preferred over trans, Z over E, and R over S.</li>
              <li>For cyclic groups, analyse the upper and lower valencies by breaking the ring and attaching pseudo atoms/groups at the break, then decide priority on the basis of the first point of difference (e.g. an epoxide &gt; oxetane &gt; THF ring by this ring-breaking analysis, and rings differing only in a heteroatom position rank by the atomic number reached first).</li>
            </ol>
            <BlockMath math="R\\text{ (Rectus)} = \\text{clockwise }1\\to2\\to3\\text{ with }4\\text{ pointed away}\\qquad S\\text{ (Sinister)} = \\text{counter-clockwise}" />
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Worked R/S assignments</h2>
            <p className="text-sm leading-7 text-slate-300">The source works through the same method — priority → orient lowest priority away (directly, by an even interchange, or by a single-swap-then-invert shortcut) → trace 1→2→3 — on eighteen varied stereocentres. A representative set:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CIPExample title="(a) 1-(chloromethyl)cyclobutan-1-ol-type centre" priorities="CH₂OH &gt; cyclobutyl &gt; CH₃ &gt; H" front={["CH₂OH", "cyclobutyl", "CH₃"]} hashedLabel="H" verdict="R" />
              <CIPExample title="(b) 2-bromocyclopentan-1-one" priorities="Br &gt; CH₂C(=O)– &gt; CH₂CH₂– &gt; H" front={["Br", "ring-C=O side", "ring-CH₂ side"]} hashedLabel="H" verdict="R" />
              <CIPExample title="(c) 4-methyl-1-vinylpent-1-en-1-ol acid centre" priorities="OH &gt; COOH &gt; CH=CH₂ &gt; CH(CH₃)₂" front={["OH", "COOH", "CH=CH₂"]} hashedLabel="CH(CH₃)₂" verdict="R" />
              <CIPExample title="(d) Br/NO₂/CN/alkynyl centre" priorities="Br &gt; NO₂ &gt; CN &gt; C≡CH" front={["Br", "NO₂", "CN"]} hashedLabel="C≡CH" verdict="S" />
              <CIPExample title="(e) chiral quaternary ammonium (Ph/iPr/Me/H)" priorities="Ph &gt; CH(CH₃)₂ &gt; CH₃ &gt; H" front={["Ph", "iPr", "CH₃"]} hashedLabel="H" verdict="R" />
              <CIPExample title="(f) chiral sulfonium (Ar/CH₂COOH/Me/lone pair)" priorities="Ar &gt; CH₂COOH &gt; CH₃ &gt; lone pair" front={["p-tolyl", "CH₂COOH", "CH₃"]} hashedLabel=":: (lone pair)" verdict="S" />
              <CIPExample title="(g) diene stereocentre — alkene ligands ranked by Z vs E" priorities="Cl &gt; (Z)-CH=CHEt &gt; (E)-CH=CHEt &gt; H" front={["Cl", "(Z)-propenyl-type", "(E)-propenyl-type"]} hashedLabel="H" verdict="S" />
              <CIPExample title="(h) bicyclic bridgehead, C-1 of two stereocentres" priorities="C(Me)=C(Me)– &gt; CH₂CH(ring)– &gt; CH₂CH₂– &gt; H" front={["=C(Me)– bridge", "CH₂CH(ring)", "CH₂CH₂"]} hashedLabel="H" verdict="R" />
              <CIPExample title="(j) epoxide, C-1 of two stereocentres" priorities="Cl &gt; ring-O &gt; CHCl(ring) &gt; H" front={["Cl", "ring O", "CHCl(ring)"]} hashedLabel="H" verdict="R" />
              <CIPExample title="(m) isotope priority: CD₂OH &gt; CH₂OH" priorities="NH₂ &gt; CH₂SH &gt; CD₂OH &gt; CH₂OH" front={["NH₂", "CH₂SH", "CD₂OH"]} hashedLabel="CH₂OH" verdict="R" />
            </div>
            <p className="mt-3 text-xs text-slate-500">Full worked solutions for all eighteen source stereocentres (a)–(q) — including a two-stereocentre dibromobicyclooctane (i), a further alkynyl example (l), an OCH₃-chain example (o), and a fully-worked (R,R)-vs-(S,S)-substituted central carbon (q) — apply this identical method.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Worked example: even-interchange shortcut</h2>
            <p className="text-sm leading-7 text-slate-300">For (2R,3R)-2,3-dihydroxybutanoic acid (COOH–C2(OH)(H)–C3(OH)(H)–CH₃), both stereocentres have OH on the right in the standard Fischer projection. Reading each centre directly (H toward viewer) gives an apparent S; inverting once (the single-swap-then-invert shortcut) gives the true configuration R at both C2 and C3 — hence (2R,3R). The same bottom-up method applied to a Fischer projection with three consecutive OH-right centres over a CH₃ terminus, and to a four-stereocentre CH₂OH-terminated hexose-like chain, both extend directly from this one worked template.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Erythro and threo nomenclature</h2>
            <p className="text-sm leading-7 text-slate-300">In a Fischer projection of a compound with two adjacent stereocentres bearing one identical substituent pair (e.g. two OH groups, or two Br groups) plus two different end groups R/R′: the <b className="text-white">erythro</b> diastereomer has the identical substituents on the <i>same</i> side (like erythrose); the <b className="text-white">threo</b> diastereomer has them on <i>opposite</i> sides (like threose).</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><DLFischer top="CHO" arm1={[H, "OH"]} arm2={[H, "OH"]} bottom="CH₂OH" label="erythrose" /><p className="mt-1 text-center text-xs text-cyan-300">erythrose — OH/OH same side</p></div>
              <div className="rounded-xl border border-cyan-300/20 bg-[#050b16] p-3"><DLFischer top="CHO" arm1={[H, "OH"]} arm2={["HO", H]} bottom="CH₂OH" label="threose" /><p className="mt-1 text-center text-xs text-cyan-300">threose — OH/OH opposite sides</p></div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Worked example: (±)-erythro-4-bromo-3-hexanol and (±)-threo-4-bromo-3-hexanol are non-identical diastereomers of one another — each erythro/threo label denotes a racemic pair of enantiomers, and an erythro isomer is diastereomeric with the corresponding threo isomer (never identical, never enantiomeric).</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Rₐ / Sₐ: CIP naming for a chiral axis (allenes)</h2>
            <p className="text-sm leading-7 text-slate-300">To assign Rₐ/Sₐ to an allene with a chiral axis, picture the allene as an elongated tetrahedron and view the molecule along the chiral axis (the viewpoint chosen does not affect the outcome). The four groups — two on each terminal sp² carbon — project onto a plane perpendicular to the axis, giving a Newman-like circle exactly as for a point stereocentre; the near-carbon substituents get priorities 1 and 2 (or 1 and higher), the far-carbon substituents complete the set, and the same clockwise = R / counter-clockwise = S trace applies (subscript &apos;a&apos; marks it as an axial, not a point, designation).</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Worked example: hexa-2,3-dienoic acid, CH₃CH₂–CH=C=CH–CO₂H. Viewing along the axis from each side and applying CH₃CH₂– &gt; H– and –COOH &gt; –H at the respective termini, one enantiomer (I) traces 1→2→3 clockwise → <b className="text-white">Rₐ</b>; its mirror image (II) traces counter-clockwise → <b className="text-white">Sₐ</b>.</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">The identical method extends to ortho-substituted biphenyl atropisomers, viewed along the 1–1′ biaryl bond: (Sₐ)-6,6′-dinitrobiphenyl-2,2′-dicarboxylic acid (NO₂ and CO₂H at both ortho pairs) and a related 6,6′-dinitro-2,2′-dichloro-2′-methylbiphenyl example both trace counter-clockwise 1→2→3 when viewed end-on along the restricted biaryl bond, giving the Sₐ configuration for the drawn enantiomer in each case.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Calculation of the number of stereoisomers</h2>
            <p className="text-sm leading-7 text-slate-300">First determine n = the number of sites that can show optical isomerism (stereocentres).</p>
            <p className="mt-2 text-sm font-bold text-slate-200">Case 1 — the compound is unsymmetrical (the two halves of the molecule are constitutionally different):</p>
            <BlockMath math="\\text{Total optical isomers}=2^{n}\\qquad \\text{Enantiomeric pairs}=\\frac{2^{n}}{2}=2^{n-1}\\qquad \\text{Meso forms}=0" />
            <p className="mt-2 text-sm leading-6 text-slate-300">Worked example: a branched heptane-type chain with n = 3 unsymmetrical stereocentres gives 2³ = 8 total optical isomers, 4 enantiomeric pairs, and 0 meso forms.</p>
            <p className="mt-3 text-sm leading-6 text-amber-100/90 rounded-xl border border-amber-300/25 bg-amber-300/[.07] p-3">2ⁿ only ever counts <i>unsymmetrical</i> compounds correctly. When the two halves of the molecule are identical or related by an internal symmetry element (as in tartaric-acid-type cases, Part 13), some of the 2ⁿ Fischer arrangements collapse onto each other and one or more become meso — the true isomer count and enantiomeric-pair count must then be worked out case by case, never by blindly applying 2ⁿ.</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[.035] p-5">
            <h2 className="text-xl font-black text-cyan-200">Practice sets in the source</h2>
            <p className="text-sm leading-7 text-slate-300">The source continues with a 45-compound unsolved &quot;write the R,S name&quot; bank (simple acyclic centres through N/S-containing ions, epoxides, alkenyl and cyclobutenyl-substituted centres, and isotope-labelled examples) and a 38-pair isomeric-relationship classification bank (label each pair Enantiomers / Diastereomers / Identical / Constitutional / Positional / meso) — both applying exactly the priority-assignment and Fischer/Newman-comparison methods already worked through above.</p>
          </section>
        </section>

        <nav className="mt-8 flex justify-between border-t border-white/10 pt-6">
          <Link href="/learn/isomerism/13" className="rounded-xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200">← 13</Link>
          <Link href="/learn/isomerism/15" className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">15 →</Link>
        </nav>
      </article>
    </main>
  );
}
