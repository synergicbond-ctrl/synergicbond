"use client";

import type { ComponentType, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { DBlockPartVisuals } from "../DBlockVisualLibrary";

type VisualProps = { className?: string };
type PageBlock = { id: string; label: string; visual: string; markdown: string };

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

function VisualFrame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#071321] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Scientific visual</p>
        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-7">{children}</div>
      <figcaption className="border-t border-white/10 bg-white/[0.025] px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">
        {caption}
      </figcaption>
    </figure>
  );
}


function RadiusTrendGraph(_: VisualProps) {
  const values = [164,147,135,129,137,126,125,125,128,137];
  const labels = ["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn"];
  const x=(i:number)=>75+i*88;
  const y=(v:number)=>330-(v-120)*4.6;
  const path=values.map((v,i)=>`${i===0?"M":"L"}${x(i)} ${y(v)}`).join(" ");
  return (
    <VisualFrame title="Metallic-radius trend across the 3d series" caption="The overall contraction is real but modest and irregular. The small rise near the end reflects increased electron–electron repulsion as the d shell approaches completion. Values shown are the supplied NCERT metallic radii in pm.">
      <svg viewBox="0 0 980 410" className="min-w-[760px] w-full" role="img" aria-label="Graph of metallic radius across Sc to Zn">
        <rect width="980" height="410" rx="24" fill="#081827"/>
        {[120,130,140,150,160,170].map(v=><g key={v}><line x1="60" y1={y(v)} x2="925" y2={y(v)} stroke="#1e3a4f"/><text x="48" y={y(v)+5} textAnchor="end" fill="#7893a8" fontSize="12">{v}</text></g>)}
        <path d={path} fill="none" stroke="#55d8ef" strokeWidth="5" strokeLinejoin="round"/>
        {values.map((v,i)=><g key={labels[i]}><circle cx={x(i)} cy={y(v)} r="7" fill={i===4||i===9?"#f2b84b":"#b69aff"}/><text x={x(i)} y="365" textAnchor="middle" fill="#d8e7f1" fontSize="14" fontWeight="700">{labels[i]}</text><text x={x(i)} y={y(v)-13} textAnchor="middle" fill="#9cecff" fontSize="12">{v}</text></g>)}
        <text x="22" y="220" fill="#9bb1c2" fontSize="13" transform="rotate(-90 22 220)">Metallic radius / pm</text>
        <text x="490" y="397" textAnchor="middle" fill="#9bb1c2" fontSize="13">Atomic number increases →</text>
      </svg>
    </VisualFrame>
  );
}

function LanthanoidContractionVisual(_: VisualProps) {
  return (
    <VisualFrame title="How lanthanoid contraction makes Zr and Hf twins" caption="Fourteen poorly shielding 4f electrons are inserted between La and Hf. The expected size increase on descending the group is almost cancelled, so Zr and Hf have nearly equal metallic radii.">
      <svg viewBox="0 0 980 420" className="min-w-[760px] w-full" role="img" aria-label="Lanthanoid contraction and comparison of Zr and Hf">
        <rect width="980" height="420" rx="24" fill="#081827"/>
        <text x="160" y="52" textAnchor="middle" fill="#e9fbff" fontSize="22" fontWeight="800">Zr</text>
        <circle cx="160" cy="185" r="104" fill="#123c52" stroke="#55d8ef" strokeWidth="4"/>
        <text x="160" y="193" textAnchor="middle" fill="#e9fbff" fontSize="30" fontWeight="900">160 pm</text>
        <text x="820" y="52" textAnchor="middle" fill="#e9fbff" fontSize="22" fontWeight="800">Hf</text>
        <circle cx="820" cy="185" r="103" fill="#30264a" stroke="#b69aff" strokeWidth="4"/>
        <text x="820" y="193" textAnchor="middle" fill="#f3efff" fontSize="30" fontWeight="900">159 pm</text>
        <path d="M285 185 C390 70 590 70 695 185" fill="none" stroke="#f2b84b" strokeWidth="5" markerEnd="url(#p2arr)"/>
        <defs><marker id="p2arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f2b84b"/></marker></defs>
        <g transform="translate(330 115)">
          {Array.from({length:14}).map((_,i)=><g key={i}><rect x={i*23} y={Math.abs(6.5-i)*5} width="17" height={88-Math.abs(6.5-i)*5} rx="5" fill={`rgba(85,216,239,${0.28+i*0.025})`} stroke="#4f849d"/><text x={i*23+8.5} y="114" textAnchor="middle" fill="#8ea8bb" fontSize="9">{i+1}</text></g>)}
          <text x="150" y="-15" textAnchor="middle" fill="#ffd88a" fontSize="15" fontWeight="800">4f filling: shielding remains weak</text>
        </g>
        <rect x="260" y="330" width="460" height="52" rx="14" fill="#0d2437" stroke="#31536d"/>
        <text x="490" y="353" textAnchor="middle" fill="#dcecf7" fontSize="15" fontWeight="800">Expected expansion down the group</text>
        <text x="490" y="373" textAnchor="middle" fill="#9bb1c2" fontSize="13">nearly cancelled by increasing effective nuclear attraction</text>
      </svg>
    </VisualFrame>
  );
}

function DensityVolumeVisual(_: VisualProps) {
  return (
    <VisualFrame title="Density is a mass-to-volume story" caption="Across much of the series, atomic mass rises while metallic radius and atomic volume fall or change little. Density therefore climbs strongly, although crystal structure and irregular radii prevent a perfectly smooth line.">
      <svg viewBox="0 0 980 390" className="min-w-[760px] w-full" role="img" aria-label="Concept diagram showing density increasing when mass rises and volume remains small">
        <rect width="980" height="390" rx="24" fill="#081827"/>
        <rect x="85" y="95" width="250" height="190" rx="24" fill="#10273a" stroke="#55d8ef" strokeWidth="3"/>
        <text x="210" y="135" textAnchor="middle" fill="#9cecff" fontSize="18" fontWeight="800">Across the row</text>
        <text x="210" y="187" textAnchor="middle" fill="#e9fbff" fontSize="34" fontWeight="900">mass ↑</text>
        <text x="210" y="235" textAnchor="middle" fill="#e9fbff" fontSize="34" fontWeight="900">volume ↓ / ~</text>
        <path d="M360 190 H610" stroke="#f2b84b" strokeWidth="8" markerEnd="url(#p2arr2)"/>
        <defs><marker id="p2arr2" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto"><path d="M0,0 L0,8 L11,4 z" fill="#f2b84b"/></marker></defs>
        <rect x="645" y="75" width="250" height="230" rx="24" fill="#2c2647" stroke="#b69aff" strokeWidth="3"/>
        <text x="770" y="126" textAnchor="middle" fill="#d9c8ff" fontSize="18" fontWeight="800">Result</text>
        <text x="770" y="196" textAnchor="middle" fill="#ffffff" fontSize="58" fontWeight="900">ρ ↑</text>
        <text x="770" y="240" textAnchor="middle" fill="#c8badc" fontSize="15">high-density metallic lattice</text>
        <text x="490" y="350" textAnchor="middle" fill="#91a9ba" fontSize="14">Use ρ = mass / volume as the causal frame; do not memorise density as a detached trend.</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "radius": RadiusTrendGraph,
  "lanthanoid": LanthanoidContractionVisual,
  "density": DensityVolumeVisual,
};

const PAGES: PageBlock[] = [
{
  id: "radius-cause",
  label: "Cause of contraction across a row",
  visual: "radius",
  markdown: String.raw`# Atomic and ionic size across a transition series

When atomic number increases from one transition element to the next, the nucleus gains one proton and the added electron enters an $(n-1)d$ orbital. The d electron partly screens the extra nuclear charge, but not perfectly. Consequently the effective nuclear attraction experienced by the electron cloud increases and the atom contracts.

The contraction is much smaller than the dramatic fall seen across the early p-block because two effects oppose one another:

- **Increasing nuclear charge** pulls all occupied orbitals inward.
- **Increasing d-electron population** adds shielding and electron–electron repulsion.

The nuclear effect dominates overall, but the d electrons soften it. Therefore metallic and covalent radii decrease gradually rather than collapsing.

## Actual first-row pattern

| Element | Sc | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Metallic radius / pm | 164 | 147 | 135 | 129 | 137 | 126 | 125 | 125 | 128 | 137 |

The broad trend is downward from Sc to the middle-late part of the row, followed by a slight rise. The line is not perfectly smooth. Manganese is anomalous, and the final rise towards Cu and Zn reflects increased pairing and interelectronic repulsion as the d shell becomes crowded.

> **JEE lens:** never force a strict order from one element to the next when the data show small differences. The robust statement is “modest overall contraction, nearly constant in the middle, slight increase near completion.”

## Why d electrons shield poorly

Shielding is effective when an electron can frequently lie between the nucleus and the electron being shielded. Orbitals of the same d subshell have directional lobes and comparable radial distributions. One d electron therefore does not screen another d electron as efficiently as an inner closed shell would. The rising nuclear charge remains substantially felt.

This idea also explains why successive transition elements have similar sizes: the added electron goes into an inner subshell rather than creating a new outer shell.`,
},
{
  id: "ionic-radii",
  label: "Ionic radii and oxidation state",
  visual: "",
  markdown: String.raw`# Ionic radii: compare like with like

A radius comparison is meaningful only when the ions have the **same charge** and broadly comparable coordination. Increasing positive charge removes electron density and increases attraction per remaining electron, so a trivalent ion is normally smaller than the corresponding divalent ion.

## First-row ionic radii supplied in the examination table

| Ion series | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $M^{2+}$ radius / pm | — | 79 | 82 | 82 | 77 | 74 | 70 | 73 | 75 |
| $M^{3+}$ radius / pm | 67 | 64 | 62 | 65 | 65 | 61 | 60 | — | — |

The table shows the expected general fall with atomic number, but also local irregularities. Crystallographic radius depends on coordination number, spin state and the adopted radius convention; therefore a single value is not a universal physical boundary.

## Oxidation-state effect

For the same element:

$$
r(M^{3+}) < r(M^{2+}) < r(M)
$$

The higher ion has fewer electrons, smaller electron–electron repulsion and a larger effective attraction per electron. This matters chemically:

- Higher charged, smaller ions have greater hydration enthalpy.
- Their charge density promotes hydrolysis and complex formation.
- They polarise anions more strongly and often form more covalent compounds.
- Their crystal lattice energies are usually larger for a given counter-ion.

## Spin state can affect size

In octahedral complexes, a high-spin ion occupies more antibonding $e_g$ orbitals than the corresponding low-spin ion. Greater antibonding occupation lengthens metal–ligand bonds and gives a larger effective ionic radius. Thus a radius table for “Co(III)” or “Fe(II)” is incomplete unless coordination and spin assumptions are understood.

## Frequent mistake

Do not compare $\mathrm{Mn^{2+}}$ directly with $\mathrm{Cr^{3+}}$ and attribute the difference solely to atomic number. Their charges differ, so the dominant size effect is not isolated.`,
},
{
  id: "rows",
  label: "3d, 4d and 5d comparison",
  visual: "lanthanoid",
  markdown: String.raw`# Comparing the three main transition rows

Moving from a 3d element to its 4d congener introduces a new principal shell. The 4d atom is therefore appreciably larger. A naive repetition of this argument predicts another comparable increase from 4d to 5d, but the data do not show it.

## The key comparison

- 3d to 4d: radius generally increases.
- 4d to 5d: corresponding radii are often almost equal.
- Example: Zr has a metallic radius close to $160\ \mathrm{pm}$; Hf is close to $159\ \mathrm{pm}$.

This striking similarity is produced by the **lanthanoid contraction**.

## Mechanism of lanthanoid contraction

Between La and Hf, the fourteen 4f orbitals are filled. The nuclear charge rises by fourteen units, but 4f electrons shield one another very poorly. The effective nuclear attraction therefore increases steadily through the lanthanoid series and contracts the entire electron cloud. By the time the 5d sequence begins at Hf, the expected size gain from an extra shell has been almost cancelled.

## Consequences

### Zr–Hf similarity

Zr and Hf have nearly identical sizes and the same common oxidation state, $+4$. They display unusually close chemical behaviour and are difficult to separate. Their oxides and halides often have parallel structures and reactivity.

### Nb–Ta similarity

Niobium and tantalum also resemble one another more strongly than a simple vertical trend predicts. Both favour $+5$ chemistry, form stable oxides and fluorocomplexes, and exhibit closely related coordination chemistry.

### High density of 5d metals

The 5d atoms retain almost the size of the 4d atoms but possess much greater atomic mass. This combination strongly raises density.

### High coordination numbers and strong bonding

The more diffuse 4d and 5d orbitals overlap ligands and other metal orbitals effectively. Heavy transition metals therefore more readily form high-coordinate complexes and metal–metal bonds. This is not caused by size alone, but the near-equality of 4d and 5d radii is part of the structural background.

> Lanthanoid contraction is not merely a fact about f-block elements; it controls the chemistry of the entire 5d row.`,
},
{
  id: "density",
  label: "Density and atomic volume",
  visual: "density",
  markdown: String.raw`# Density of transition metals

Density is determined by mass packed into a particular volume:

$$
\rho=\frac{m}{V}
$$

Transition metals combine relatively high atomic masses with small metallic radii and efficiently packed crystal structures. Their atomic volumes are low compared with neighbouring Groups 1 and 2, so most have large densities.

## First transition series

| Element | Sc | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Density / $\mathrm{g\,cm^{-3}}$ | 3.43 | 4.1 | 6.07 | 7.19 | 7.21 | 7.8 | 8.7 | 8.9 | 8.9 | 7.1 |

The general rise from Ti to Cu reflects increasing atomic mass and a radius that decreases or stays nearly constant. Zinc falls below Cu and Ni because its radius increases and its filled d shell changes metallic bonding and crystal behaviour.

## Why second- and third-row values are high

The 4d metals are heavier than their 3d counterparts while remaining compact. The 5d metals are much heavier still, and lanthanoid contraction prevents a corresponding expansion. Hence many 5d metals are exceptionally dense.

The supplied references place both osmium and iridium close to $22.6\ \mathrm{g\,cm^{-3}}$. Small differences in quoted ordering arise from temperature, crystallographic data and rounding. The chemically important conclusion is that **Os and Ir are the densest elements within experimental precision**.

## Density is not controlled by atomic mass alone

Gold is much heavier than copper, but density also depends on radius and packing. Similarly, an element with a large mass may have a lower density if its atoms occupy a larger molar volume.

Factors include:

1. atomic mass;
2. metallic radius;
3. lattice type and packing efficiency;
4. temperature and phase;
5. electronic contribution to bonding.

Therefore density trends should be explained through atomic volume, not by the slogan “heavy elements are dense.”`,
},
{
  id: "structures",
  label: "Metallic lattices and size",
  visual: "",
  markdown: String.raw`# Metallic structures and dimensional trends

Most transition metals adopt body-centred cubic, hexagonal close-packed or cubic close-packed structures. Several change structure with temperature. The similarity of atomic sizes across a row permits neighbouring metals to substitute for one another in alloys.

| Structure | Abbreviation | Packing idea | Representative transition metals |
|---|---|---|---|
| Body-centred cubic | bcc | one atom at cube centre; lower packing than close-packed lattices | V, Cr, Fe at room temperature, Nb, Mo, Ta, W |
| Hexagonal close-packed | hcp | close-packed layers in ABAB sequence | Ti, Co in one form, Zr, Ru, Hf, Re, Os |
| Cubic close-packed / fcc | ccp/fcc | close-packed layers in ABCABC sequence | Ni, Cu, Rh, Pd, Ag, Ir, Pt, Au |

Crystal structure helps explain irregular physical properties. A melting-point or density anomaly need not arise only from electron count; a change in lattice type also alters cohesive energy and packing.

## Why alloy formation is easy

A substitutional solid solution is favoured when the component atoms have similar radii. The transition series changes size slowly, so many pairs meet the approximate radius-similarity condition. Their metallic character and compatible crystal structures further assist mixing.

Examples include:

- Fe–Cr–Ni combinations in stainless steels;
- Cu–Ni alloys over a broad composition range;
- brass, where Zn enters a Cu-based metallic framework;
- high-speed steels containing W, Mo, V or Cr.

## Surface area and particle size

Atomic radius should not be confused with macroscopic particle size. Finely divided transition metals are often far more reactive or catalytically active because their surface-to-volume ratio is larger, even though the atomic radius is unchanged.`,
},
{
  id: "consequences",
  label: "Chemical consequences of contraction",
  visual: "lanthanoid",
  markdown: String.raw`# Chemical consequences of small, highly charged ions

A decrease in radius at fixed charge raises charge density. This connects dimensional trends to several properties discussed later.

## Hydration

Smaller ions attract water molecules more strongly. Hydration enthalpy becomes more negative, stabilising the aqueous ion. This contribution can reverse a simple prediction based only on ionisation enthalpy.

## Hydrolysis

A highly charged ion polarises coordinated water and weakens its O–H bonds:

$$
\mathrm{[M(H_2O)_6]^{3+}+H_2O\rightleftharpoons[M(H_2O)_5OH]^{2+}+H_3O^+}
$$

Thus many $M^{3+}$ solutions are acidic. The extent depends on metal charge density, electron configuration and ligand field.

## Complex stability

A smaller ion can make stronger electrostatic and covalent interactions with ligand donor atoms. Across a comparable series, trivalent complexes are often more stable than divalent analogues, although ligand-field stabilisation and redox chemistry also matter.

## Covalent character

According to polarisation ideas, a small highly charged cation distorts a large anion strongly. Higher oxidation states therefore tend to form compounds with greater covalent character. This is why high oxides and halides can be molecular, volatile and susceptible to hydrolysis.

## Oxide acidity

As charge density and covalent character increase, oxide basicity falls. Across vanadium oxides, for example, the sequence moves from basic $\mathrm{V_2O_3}$ through less basic $\mathrm{VO_2}$ to mainly acidic/amphoteric $\mathrm{V_2O_5}$.

## Coordination number in heavier rows

Although charge density matters, the larger and more radially extended 4d/5d valence orbitals can support more ligands without excessive repulsion. Heavy transition metals therefore commonly reach coordination numbers greater than six.`,
},
{
  id: "summary",
  label: "Size and density revision frame",
  visual: "radius",
  markdown: String.raw`# Revision frame: size, contraction and density

## Cause–effect chain across a row

$$
Z\uparrow \quad+\quad \text{imperfect d shielding}
\quad\Longrightarrow\quad Z_{\mathrm{eff}}\uparrow
\quad\Longrightarrow\quad r\downarrow\ \text{slightly}
$$

The word **slightly** is essential. Added d electrons partly offset the nuclear-charge increase, and crowding near $d^{10}$ produces a late rise.

## Cause–effect chain from 4d to 5d

$$
4f\text{ filling}\quad\Longrightarrow\quad\text{poor shielding}
\quad\Longrightarrow\quad\text{lanthanoid contraction}
\quad\Longrightarrow\quad r(5d)\approx r(4d)
$$

## Cause–effect chain for density

$$
\text{atomic mass}\uparrow\quad+\quad\text{atomic volume small}
\quad\Longrightarrow\quad\rho\uparrow
$$

## High-yield statements

- Compare ionic radii only for equal charge and similar coordination.
- $M^{3+}$ is normally smaller than $M^{2+}$ for the same metal.
- The middle of the 3d row has nearly constant radii.
- Zr and Hf are almost equal in size because of lanthanoid contraction.
- The 5d row is exceptionally dense because mass rises without the expected size expansion.
- Os and Ir lie together near the maximum density; exact ordering is reference-sensitive.
- Small radius and high charge promote hydration, hydrolysis, covalency and complex formation.

## What not to memorise mechanically

Do not assume every radius decreases monotonically.
Do not rank density by atomic mass alone.
Do not use a free-ion radius as though it were independent of coordination and spin.
Do not attribute Zr–Hf similarity merely to “same group”; ordinary group trends would predict a much larger Hf atom.

> **Part 2 conclusion:** the balance between nuclear attraction, incomplete shielding, electron repulsion and lanthanoid contraction controls the dimensions of transition atoms. Those dimensions then influence density, hydration, covalency, lattice formation and coordination chemistry.`,
}
];

const markdownComponents = {
  h1: (props: any) => <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl" {...props} />,
  h2: (props: any) => <h3 className="mt-10 border-l-4 border-cyan-400 pl-4 text-2xl font-black text-white" {...props} />,
  h3: (props: any) => <h4 className="mt-8 text-xl font-extrabold text-cyan-200" {...props} />,
  p: (props: any) => <p className="mt-4 text-[1.02rem] leading-8 text-slate-200" {...props} />,
  strong: (props: any) => <strong className="font-extrabold text-white" {...props} />,
  em: (props: any) => <em className="text-cyan-100" {...props} />,
  ul: (props: any) => <ul className="mt-4 space-y-2 pl-6 text-slate-200 marker:text-cyan-300" {...props} />,
  ol: (props: any) => <ol className="mt-4 space-y-2 pl-6 text-slate-200 marker:font-bold marker:text-amber-300" {...props} />,
  li: (props: any) => <li className="leading-7" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="my-6 rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] px-5 py-4 text-amber-50 shadow-inner" {...props} />
  ),
  table: (props: any) => (
    <div className="my-7 overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm text-slate-200" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-cyan-400/10 text-cyan-100" {...props} />,
  th: (props: any) => <th className="whitespace-nowrap border-b border-r border-white/10 px-4 py-3 font-black last:border-r-0" {...props} />,
  td: (props: any) => <td className="border-b border-r border-white/10 px-4 py-3 align-top leading-6 last:border-r-0" {...props} />,
  code: (props: any) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-100" {...props} />,
  hr: () => <hr className="my-10 border-white/10" />,
};

export default function DBlockPart02() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 2
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Atomic Size, Ionic Size and Density</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">A data-led account of the modest contraction across a transition row, the powerful lanthanoid contraction between 4d and 5d elements, and the way compact atomic volumes create unusually dense metals.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-cyan-300">Format</p><p className="mt-1 font-bold">Source-grounded original notes</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-amber-300">Focus</p><p className="mt-1 font-bold">Cause → trend → exception</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-violet-300">Assessment</p><p className="mt-1 font-bold">Theory only; questions later</p></div>
          </div>
        </header>

        <nav className="sticky top-2 z-20 mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#07111f]/95 p-2 shadow-xl backdrop-blur">
          <div className="flex min-w-max gap-2">
            {PAGES.map((page, index) => (
              <a key={page.id} href={`#${page.id}`} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-300/40 hover:text-white">
                {index + 1}. {page.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-6 space-y-7">
          {PAGES.map((page, index) => {
            const Visual = page.visual ? VISUALS[page.visual] : undefined;
            return (
              <section id={page.id} key={page.id} className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-[#081321] px-5 py-8 shadow-[0_22px_70px_rgba(0,0,0,0.24)] print:break-after-page sm:px-9 sm:py-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-300 text-sm font-black text-slate-950">{index + 1}</span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 2 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={markdownComponents}>
                  {page.markdown}
                </ReactMarkdown>
                {Visual ? <Visual /> : null}
              </section>
            );
          })}
        </div>

        <DBlockPartVisuals part={2} />

        <footer className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-6 text-slate-400">
          This file contains theory, tables, equations and original scientific visuals only. Practice questions and detailed solutions are intentionally reserved for the later assessment phase.
        </footer>
      </div>
    </main>
  );
}
