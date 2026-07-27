import type { ComponentType, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { createMarkdownComponents } from "../AnchoredMarkdown";
import DBlockPartNavigation from "../DBlockPartNavigation";

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


function OctahedralSplitting(_: VisualProps) {
  return (
    <VisualFrame title="Octahedral ligand-field splitting" caption="Six ligands approach along the axes. The d orbitals pointing at ligands rise to the e_g set; the three between axes form the lower t₂g set. The barycentre is conserved.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Octahedral splitting of five d orbitals into t2g and eg levels">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        <text x="165" y="55" textAnchor="middle" fill="#e9fbff" fontSize="21" fontWeight="900">Free ion</text>
        <line x1="70" y1="215" x2="260" y2="215" stroke="#55d8ef" strokeWidth="6"/>
        <text x="165" y="250" textAnchor="middle" fill="#9cecff" fontSize="15">five degenerate d orbitals</text>
        <path d="M285 215 H405" stroke="#547088" strokeWidth="4" markerEnd="url(#p6o)"/>
        <defs><marker id="p6o" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#547088"/></marker></defs>
        <text x="345" y="190" textAnchor="middle" fill="#91a9ba" fontSize="13">6 ligands</text>
        <text x="345" y="207" textAnchor="middle" fill="#91a9ba" fontSize="13">on axes</text>
        <line x1="455" y1="135" x2="720" y2="135" stroke="#f2b84b" strokeWidth="6"/>
        <line x1="455" y1="290" x2="720" y2="290" stroke="#b69aff" strokeWidth="6"/>
        <text x="740" y="142" fill="#ffd88a" fontSize="20" fontWeight="900">e_g</text>
        <text x="740" y="298" fill="#d8cbff" fontSize="20" fontWeight="900">t₂g</text>
        <text x="590" y="105" textAnchor="middle" fill="#e8d29e" fontSize="14">d(z²), d(x²−y²)</text>
        <text x="590" y="325" textAnchor="middle" fill="#c9bce0" fontSize="14">d(xy), d(xz), d(yz)</text>
        <path d="M815 290 V135" stroke="#66e2a8" strokeWidth="5" markerEnd="url(#p6o2)"/>
        <defs><marker id="p6o2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#66e2a8"/></marker></defs>
        <text x="845" y="220" fill="#bdf2d5" fontSize="17" fontWeight="900">Δ₀</text>
        <line x1="420" y1="215" x2="760" y2="215" stroke="#5b7182" strokeWidth="2" strokeDasharray="8 8"/>
        <text x="590" y="390" textAnchor="middle" fill="#91a9ba" fontSize="14">Energy absorbed ≈ Δ₀ may lie in the visible region and produce d–d colour.</text>
      </svg>
    </VisualFrame>
  );
}

function ColourMechanisms(_: VisualProps) {
  return (
    <VisualFrame title="Three distinct origins of colour" caption="Colour is a property of a specified species and environment. Polarisation, d–d excitation and charge transfer should not be merged into one explanation.">
      <svg viewBox="0 0 980 430" className="min-w-[780px] w-full" role="img" aria-label="Comparison of polarization, d-d transition and charge transfer colour mechanisms">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        {[
          {x:175,title:"Polarisation",sub:"AgBr / AgI",c:"#f2b84b"},
          {x:490,title:"d–d transition",sub:"Ti³⁺, Ni²⁺, Cu²⁺",c:"#55d8ef"},
          {x:805,title:"Charge transfer",sub:"CrO₄²⁻, MnO₄⁻",c:"#b69aff"},
        ].map((n,i)=><g key={n.title}><rect x={n.x-125} y="70" width="250" height="285" rx="24" fill="#10273a" stroke={n.c} strokeWidth="3"/><text x={n.x} y="108" textAnchor="middle" fill={n.c} fontSize="19" fontWeight="900">{n.title}</text><text x={n.x} y="334" textAnchor="middle" fill="#b9cbd8" fontSize="13">{n.sub}</text>{i===0?<><circle cx={n.x-35} cy="205" r="45" fill="#3c3347"/><circle cx={n.x+45} cy="205" r="58" fill="none" stroke="#f2b84b" strokeWidth="4" strokeDasharray="8 6"/><path d={`M${n.x-2} 205 H${n.x+20}`} stroke="#fff" strokeWidth="4"/></>:i===1?<><line x1={n.x-70} y1="255" x2={n.x+70} y2="255" stroke="#b69aff" strokeWidth="5"/><line x1={n.x-70} y1="160" x2={n.x+70} y2="160" stroke="#55d8ef" strokeWidth="5"/><path d={`M${n.x} 245 V175`} stroke="#f2b84b" strokeWidth="5" markerEnd="url(#p6c)"/><path d={`M${n.x-90} 206 H${n.x-20}`} stroke="#fff" strokeWidth="12" opacity="0.5"/></>:<><circle cx={n.x-60} cy="210" r="42" fill="#3d2b3d" stroke="#f08caf" strokeWidth="3"/><circle cx={n.x+60} cy="210" r="52" fill="#2c2647" stroke="#b69aff" strokeWidth="3"/><path d={`M${n.x-15} 210 H${n.x+20}`} stroke="#66e2a8" strokeWidth="6" markerEnd="url(#p6c2)"/><text x={n.x-60} y="216" textAnchor="middle" fill="#ffeaf3" fontSize="18" fontWeight="900">O</text><text x={n.x+60} y="216" textAnchor="middle" fill="#f3efff" fontSize="18" fontWeight="900">M</text></>}</g>)}
        <defs><marker id="p6c" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f2b84b"/></marker><marker id="p6c2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#66e2a8"/></marker></defs>
      </svg>
    </VisualFrame>
  );
}

function MagneticDomains(_: VisualProps) {
  return (
    <VisualFrame title="From isolated spins to magnetic order" caption="Paramagnetism requires unpaired electrons but not permanent alignment. Ferromagnetism and antiferromagnetism are cooperative solid-state arrangements that vanish when the lattice is destroyed in solution.">
      <svg viewBox="0 0 980 410" className="min-w-[760px] w-full" role="img" aria-label="Paramagnetic, ferromagnetic and antiferromagnetic spin arrangements">
        <rect width="980" height="410" rx="24" fill="#081827"/>
        {[
          {x:170,t:"Paramagnetic",c:"#55d8ef",mode:0},
          {x:490,t:"Ferromagnetic",c:"#f2b84b",mode:1},
          {x:810,t:"Antiferromagnetic",c:"#b69aff",mode:2},
        ].map(g=><g key={g.t}><rect x={g.x-125} y="70" width="250" height="270" rx="24" fill="#10273a" stroke={g.c} strokeWidth="3"/><text x={g.x} y="105" textAnchor="middle" fill={g.c} fontSize="19" fontWeight="900">{g.t}</text>{Array.from({length:20}).map((_,i)=>{const col=i%5,row=Math.floor(i/5), cx=g.x-80+col*40, cy=150+row*40; const dir=g.mode===0?((i*73)%360):g.mode===1?0:(i%2?180:0); const rad=dir*Math.PI/180; return <g key={i}><circle cx={cx} cy={cy} r="4" fill="#dcecf7"/><line x1={cx} y1={cy} x2={cx+Math.cos(rad)*18} y2={cy+Math.sin(rad)*18} stroke={g.c} strokeWidth="3"/></g>})}</g>)}
        <text x="170" y="370" textAnchor="middle" fill="#91a9ba" fontSize="13">random moments; align only partly in field</text>
        <text x="490" y="370" textAnchor="middle" fill="#91a9ba" fontSize="13">parallel domains; strong spontaneous magnetisation</text>
        <text x="810" y="370" textAnchor="middle" fill="#91a9ba" fontSize="13">opposite neighbours; net moment may cancel</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "split": OctahedralSplitting,
  "colour": ColourMechanisms,
  "domains": MagneticDomains,
};

const PAGES: PageBlock[] = [
{
  id: "colour-basics",
  label: "Light absorption and observed colour",
  visual: "colour",
  markdown: String.raw`# Colour in transition-metal chemistry

A substance appears coloured when it absorbs selected wavelengths from visible light and transmits or reflects the remainder. The observed colour is approximately complementary to the dominant absorbed colour.

The energy relation is

$$
\Delta E=h\nu=\frac{hc}{\lambda}
$$

A large electronic energy gap absorbs ultraviolet light and gives no visible colour. A gap in the visible range produces colour.

## Never assign colour to a metal name alone

Colour depends on:

- oxidation state;
- d-electron count;
- ligand identity;
- coordination number;
- geometry;
- concentration;
- pH;
- counter-ion and solid-state environment.

For example, Cu(II) in water is blue, while tetrachlorocuprate(II) is yellow-green to brown depending on concentration and medium. A question that asks “what is the colour of copper?” is chemically incomplete.

## Main mechanisms in this chapter

1. **Polarisation and covalent contribution** in compounds such as silver halides.
2. **d–d transitions** in ions with incomplete d shells.
3. **Charge-transfer transitions** in intensely coloured oxoanions and complexes.
4. In selected cases, intervalence transfer or metal–metal transitions.

The first three are sufficient for most JEE Advanced problems.

## Complementary-colour principle

| Light mainly absorbed | Colour mainly observed |
|---|---|
| violet | yellow-green |
| blue | orange |
| green | red/purple |
| yellow | violet |
| orange/red | blue/cyan |

Real spectra contain several bands, so observed colours may be mixed and sensitive to concentration.`,
},
{
  id: "splitting",
  label: "d-orbital splitting and d–d transitions",
  visual: "split",
  markdown: String.raw`# d–d transitions in an octahedral field

For an isolated gaseous ion, the five d orbitals have the same energy. In an octahedral complex, six ligands approach along the x, y and z axes.

The orbitals $d_{z^2}$ and $d_{x^2-y^2}$ point directly towards ligand donor atoms. Their electron density experiences greater repulsion and they form the higher $e_g$ set.

The orbitals $d_{xy}$, $d_{xz}$ and $d_{yz}$ lie between the axes and form the lower $t_{2g}$ set.

The separation is called $\Delta_o$ or $10Dq$.

## Absorption

If an electron occupies $t_{2g}$ and an empty position exists in $e_g$, absorption can promote it:

$$
\mathrm{t_{2g}\rightarrow e_g}
$$

When $\Delta_o$ corresponds to visible-light energy, the complex is coloured.

## Factors controlling $\Delta_o$

- higher metal oxidation state usually increases splitting;
- 4d/5d metals generally have larger splitting than 3d analogues;
- ligand strength follows a spectrochemical order;
- geometry changes the splitting pattern;
- shorter metal–ligand distances increase interaction.

A simplified ligand sequence is:

$$
\mathrm{I^-<Br^-<Cl^-<F^-<H_2O<NH_3<en<NO_2^-<CN^-<CO}
$$

The order is empirical and can vary in detail, but it is adequate for qualitative JEE reasoning.

## Why $d^0$ and $d^{10}$ ions are usually colourless by this mechanism

A $d^0$ ion has no d electron to promote. A $d^{10}$ ion has no vacant position within the d set. Therefore Sc(III), Ti(IV), Zn(II), Cd(II) and common Ag(I) salts cannot obtain colour from a simple d–d transition.`,
},
{
  id: "selection",
  label: "Intensity, selection rules and exceptions",
  visual: "",
  markdown: String.raw`# Why many d–d colours are weak

An electronic transition may be energetically possible but spectroscopically restricted.

## Laporte rule

In a centrosymmetric complex such as an ideal octahedron, transitions that do not change parity are forbidden. A d orbital is gerade, so a $d\rightarrow d$ transition is formally $g\rightarrow g$ and Laporte-forbidden.

Vibronic coupling and distortion temporarily remove perfect symmetry, giving weak but observable absorption.

## Spin selection rule

The total spin should not change strongly during an allowed electronic transition:

$$
\Delta S=0
$$

Spin-forbidden transitions are especially weak. High-spin $d^5$ ions such as $\mathrm{Mn^{2+}}$ often appear very pale because their d–d transitions are both Laporte- and spin-restricted.

## Tetrahedral complexes

A tetrahedral complex lacks a centre of inversion, so the Laporte restriction is relaxed. Tetrahedral complexes often show more intense d–d colour than analogous octahedral complexes.

## Jahn–Teller distortion

A non-linear complex with an electronically degenerate ground state can distort to lower its energy. Cu(II), $d^9$, commonly shows elongated octahedra. The distortion changes orbital energies, broadens absorption bands and affects colour and structure.

## A critical exception

“$d^0$ means colourless” is only a statement about d–d transitions. Chromate and permanganate are strongly coloured $d^0$ species because charge transfer is allowed and intense.`,
},
{
  id: "charge-transfer",
  label: "Polarisation and charge transfer",
  visual: "colour",
  markdown: String.raw`# Colour without d–d transitions

## Polarisation in silver halides

$\mathrm{Ag^+}$ is strongly polarising and the halide ions become more polarisable down the group:

$$
\mathrm{Cl^-<Br^-<I^-}
$$

As covalent contribution increases, the absorption edge moves into the visible region:

- AgCl is white;
- AgBr is pale yellow or cream;
- AgI is yellow.

Related silver compounds show characteristic colours: $\mathrm{Ag_2O}$ and $\mathrm{Ag_2S}$ are dark, while $\mathrm{Ag_3PO_4}$ and $\mathrm{Ag_2CO_3}$ are yellowish.

## Ligand-to-metal charge transfer

In high oxidation-state oxoanions, an electron can be promoted largely from an oxygen-based orbital to a metal-based orbital. Because the electron moves between centres and the transition is not restricted like an ideal d–d excitation, absorption is intense.

### Chromate and dichromate

Chromate is yellow and dichromate orange. Chromium is +6 and formally $d^0$, so their colours are assigned mainly to O $\rightarrow$ Cr charge transfer.

### Permanganate

Permanganate contains Mn(VII), also $d^0$, yet has an intense purple colour. The transition is ligand-to-metal charge transfer from oxygen-rich orbitals into manganese-centred acceptor orbitals.

## Charge-transfer versus d–d

| Feature | d–d transition | Charge transfer |
|---|---|---|
| Electron moves | between split metal d levels | largely ligand ↔ metal |
| Typical intensity | weak to moderate | intense |
| Needs incomplete d shell | yes | no |
| Examples | $\mathrm{Ti^{3+}}$, $\mathrm{Ni^{2+}}$, $\mathrm{Cu^{2+}}$ | $\mathrm{CrO_4^{2-}}$, $\mathrm{MnO_4^-}$ |`,
},
{
  id: "colour-atlas",
  label: "Aquated-ion colour atlas",
  visual: "",
  markdown: String.raw`# Colours of common aquated ions

The following table records the traditional examination colours of dilute aqueous ions. Actual shade varies with concentration, hydrolysis, counter-ion and complex formation.

| Ion | d count | Common aquated colour |
|---|---:|---|
| $\mathrm{Sc^{3+}}$ | $d^0$ | colourless |
| $\mathrm{Ti^{4+}}$ | $d^0$ | colourless |
| $\mathrm{Ti^{3+}}$ | $d^1$ | purple/violet |
| $\mathrm{V^{2+}}$ | $d^3$ | violet |
| $\mathrm{V^{3+}}$ | $d^2$ | green |
| $\mathrm{VO^{2+}}$ (V(IV)) | $d^1$ | blue |
| $\mathrm{Cr^{2+}}$ | $d^4$ | blue |
| $\mathrm{Cr^{3+}}$ | $d^3$ | green or violet depending on hydration/complex history |
| $\mathrm{Mn^{2+}}$ | $d^5$ | very pale pink |
| $\mathrm{Mn^{3+}}$ | $d^4$ | violet/red-violet, unstable in simple water |
| $\mathrm{Fe^{2+}}$ | $d^6$ | pale green |
| $\mathrm{Fe^{3+}}$ | $d^5$ | yellow to yellow-brown because of hydrolysis/charge transfer |
| $\mathrm{Co^{2+}}$ | $d^7$ | pink in water |
| $\mathrm{Ni^{2+}}$ | $d^8$ | green |
| $\mathrm{Cu^{2+}}$ | $d^9$ | blue |
| $\mathrm{Zn^{2+}}$ | $d^{10}$ | colourless |

## Ligand-dependent nickel example

The supplied advanced source compares octahedral nickel complexes:

- $\mathrm{[Ni(H_2O)_6]^{2+}}$: green;
- $\mathrm{[Ni(NH_3)_6]^{2+}}$: blue;
- $\mathrm{[Ni(NO_2)_6]^{4-}}$: brown-red.

The metal and oxidation state remain the same. Ligand-dependent $\Delta_o$ changes the absorbed wavelength.

## Fe(III) caution

A bare $\mathrm{[Fe(H_2O)_6]^{3+}}$ description is an idealisation. The high charge density causes hydrolysis and oligomeric species, so observed yellow-brown colour is not explained by one isolated d–d band.`,
},
{
  id: "magnetism",
  label: "Paramagnetism and spin-only moment",
  visual: "domains",
  markdown: String.raw`# Magnetic behaviour of ions

A paired electron set gives no net electron-spin moment and is diamagnetic. One or more unpaired electrons produce paramagnetism.

For many first-row ions, the spin-only magnetic moment is estimated by

$$
\mu_{\mathrm{so}}=\sqrt{n(n+2)}\ \mathrm{BM}
$$

where $n$ is the number of unpaired electrons.

| $n$ | $\mu_{\mathrm{so}}$ / BM |
|---:|---:|
| 0 | 0 |
| 1 | 1.73 |
| 2 | 2.83 |
| 3 | 3.87 |
| 4 | 4.90 |
| 5 | 5.92 |

## Counting sequence

1. Determine oxidation state.
2. Calculate d count.
3. Identify geometry.
4. Decide weak-field/high-spin or strong-field/low-spin.
5. Count unpaired electrons.
6. Apply the formula.

## Examples

- $\mathrm{Ti^{3+}}$: $d^1$, one unpaired, about $1.73$ BM.
- high-spin $\mathrm{Mn^{2+}}$: $d^5$, five unpaired, about $5.92$ BM.
- $\mathrm{Zn^{2+}}$: $d^{10}$, no unpaired, diamagnetic.
- octahedral $\mathrm{Fe^{2+}}$: high-spin $d^6$ has four unpaired; low-spin $d^6$ has none.

The formula ignores orbital contribution and spin–orbit coupling. It works best as a first-row approximation. Co(II) and many heavier transition ions can deviate substantially.`,
},
{
  id: "bulk",
  label: "Ferro-, antiferro- and bulk magnetism",
  visual: "domains",
  markdown: String.raw`# Cooperative magnetism in solids

Paramagnetism of a dissolved ion comes from independent molecular or ionic moments. Ferromagnetism and antiferromagnetism require long-range coupling between neighbouring centres in a solid.

## Ferromagnetism

In ferromagnetic domains, moments align parallel. An applied field enlarges favourably oriented domains, producing very large magnetisation. Fe, Co and Ni are the classical metallic examples.

A permanent magnet retains significant domain alignment after the external field is removed.

## Antiferromagnetism

Neighbouring moments align oppositely. If equal moments cancel perfectly, the net magnetisation is small despite many unpaired electrons. Several oxides and salts of Mn(II) and Fe(III) show antiferromagnetic ordering below a characteristic temperature.

## Ferrimagnetism

Opposing sublattices have unequal moments, so cancellation is incomplete. Magnetite, $\mathrm{Fe_3O_4}$, is a key ferrimagnetic material.

## Why order disappears in solution

Dissolving a solid separates the ions and destroys the fixed exchange pathways responsible for long-range ordering. The individual ions may remain paramagnetic, but ferromagnetism or antiferromagnetism is lost.

## Temperature

Thermal agitation disrupts magnetic order. Above the Curie temperature a ferromagnet becomes paramagnetic; above the Néel temperature an antiferromagnet loses its ordered arrangement.

> Bulk magnetic classification belongs to a phase and structure, not simply to the isolated electron configuration of one atom.`,
},
{
  id: "summary",
  label: "Colour and magnetism synthesis",
  visual: "split",
  markdown: String.raw`# Synthesis: colour and magnetism from d-electron architecture

## Colour decision path

1. Is the species $d^0$ or $d^{10}$?
   - If yes, no ordinary d–d transition.
   - Check charge transfer, polarisation or another mechanism.
2. If $d^1$ to $d^9$, identify ligand field and geometry.
3. Ask whether the transition is spin-allowed and whether centrosymmetry makes it Laporte-restricted.
4. State colour only for the specified species and medium.

## Magnetism decision path

1. Oxidation state → d count.
2. Geometry and ligand strength → high spin or low spin.
3. Count unpaired electrons.
4. Use $\mu=\sqrt{n(n+2)}$ BM as a first-row estimate.
5. Distinguish molecular paramagnetism from cooperative solid-state order.

## High-yield contrasts

| Pair | Correct distinction |
|---|---|
| $\mathrm{Mn^{2+}}$ pale pink vs $\mathrm{MnO_4^-}$ intense purple | weak spin-forbidden d–d vs strong charge transfer |
| $\mathrm{AgCl}$ white vs $\mathrm{AgI}$ yellow | increasing anion polarisation/covalency |
| aqua Co(II) pink vs chloro Co(II) blue | ligand and geometry change splitting |
| paramagnetic Fe(III) ion vs ferromagnetic iron metal | isolated spin moment vs domain order |
| high-spin and low-spin Fe(II) | same d count, different pairing and magnetic moment |

## Precision statements

Colourless does not mean “no electronic transitions”; absorption may lie outside the visible region.
Diamagnetic does not mean “chemically inert.”
A $d^0$ oxoanion may be intensely coloured.
The spin-only formula does not include orbital angular momentum.
Ferromagnetism is not merely “very strong paramagnetism”; it is cooperative order.

> **Part 6 conclusion:** ligands split d levels, light probes the energy gaps, and unpaired spins respond to magnetic fields. The same d count can therefore produce different colour and magnetism when geometry, ligand and phase change.`,
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

export default function DBlockPart06() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 6
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Colour and Magnetic Properties</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">A mechanism-first treatment of visible absorption, ligand-field splitting, selection rules, charge transfer, silver-halide polarisation, aquated-ion colours, spin-only moments and cooperative magnetic order.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-cyan-300">Format</p><p className="mt-1 font-bold">Source-grounded original notes</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-amber-300">Focus</p><p className="mt-1 font-bold">Cause → trend → exception</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-violet-300">Assessment</p><p className="mt-1 font-bold">Theory only; questions later</p></div>
          </div>
        </header>

        <DBlockPartNavigation part={6} position="top" />

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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 6 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={createMarkdownComponents(6)}>
                  {page.markdown}
                </ReactMarkdown>
                {Visual ? <Visual /> : null}
              </section>
            );
          })}
        </div>


        <footer className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-6 text-slate-400">
          This file contains theory, tables, equations and original scientific visuals only. Practice questions and detailed solutions are intentionally reserved for the later assessment phase.
        </footer>

        <DBlockPartNavigation part={6} position="bottom" />
      </div>
    </main>
  );
}
