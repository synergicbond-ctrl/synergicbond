"use client";

import type { ComponentType, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

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


function ManganeseLadder(_: VisualProps) {
  const states=[
    {y:345,s:"+2",sp:"Mn²⁺",c:"#f1b7d2"},
    {y:285,s:"+4",sp:"MnO₂",c:"#8b6f5b"},
    {y:225,s:"+5",sp:"MnO₄³⁻",c:"#4f7f9a"},
    {y:165,s:"+6",sp:"MnO₄²⁻",c:"#54c68a"},
    {y:105,s:"+7",sp:"MnO₄⁻",c:"#b69aff"},
  ];
  return (
    <VisualFrame title="Manganese oxidation-state ladder" caption="Manganese spans the widest first-row range. The familiar aqueous oxo species occupy +4, +6 and +7, while Mn²⁺ is the favoured product of strong reduction in acid.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Oxidation state ladder from manganese two to manganese seven">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        <line x1="230" y1="365" x2="230" y2="75" stroke="#547088" strokeWidth="7" markerEnd="url(#p9lad)"/>
        <defs><marker id="p9lad" markerWidth="11" markerHeight="11" refX="9" refY="4" orient="auto"><path d="M0,0 L0,8 L10,4 z" fill="#547088"/></marker></defs>
        {states.map(n=><g key={n.s}><line x1="205" y1={n.y} x2="255" y2={n.y} stroke={n.c} strokeWidth="5"/><circle cx="420" cy={n.y} r="44" fill="#10273a" stroke={n.c} strokeWidth="3"/><text x="420" y={n.y+7} textAnchor="middle" fill="#fff" fontSize="20" fontWeight="900">{n.sp}</text><text x="310" y={n.y+6} textAnchor="middle" fill={n.c} fontSize="18" fontWeight="900">Mn {n.s}</text></g>)}
        <path d="M500 105 C690 125 760 175 805 225" fill="none" stroke="#f2b84b" strokeWidth="5" markerEnd="url(#p9lad2)"/>
        <path d="M805 245 C750 300 650 335 500 345" fill="none" stroke="#55d8ef" strokeWidth="5" markerEnd="url(#p9lad3)"/>
        <defs><marker id="p9lad2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f2b84b"/></marker><marker id="p9lad3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#55d8ef"/></marker></defs>
        <text x="790" y="120" textAnchor="middle" fill="#ffd88a" fontSize="16" fontWeight="900">controlled reduction</text>
        <text x="790" y="350" textAnchor="middle" fill="#9cecff" fontSize="16" fontWeight="900">strong reduction in acid → Mn²⁺</text>
      </svg>
    </VisualFrame>
  );
}

function PermanganateProcess(_: VisualProps) {
  const ns=[
    {x:60,w:175,t:"Pyrolusite",s:"MnO₂",c:"#8b6f5b"},
    {x:280,w:210,t:"Alkaline fusion",s:"KOH + O₂/KNO₃/KClO₃",c:"#f2b84b"},
    {x:540,w:175,t:"Manganate",s:"K₂MnO₄ • green",c:"#54c68a"},
    {x:760,w:165,t:"Permanganate",s:"KMnO₄ • purple",c:"#b69aff"},
  ];
  return (
    <VisualFrame title="Preparation route: pyrolusite to permanganate" caption="Mn(IV) is oxidised to green Mn(VI) in strongly alkaline fusion. Manganate is then converted to Mn(VII) electrolytically, by oxidants, or partly through disproportionation.">
      <svg viewBox="0 0 980 420" className="min-w-[800px] w-full" role="img" aria-label="Preparation route from manganese dioxide to potassium permanganate">
        <rect width="980" height="420" rx="24" fill="#081827"/>
        {ns.map((n,i)=><g key={n.t}><rect x={n.x} y="140" width={n.w} height="120" rx="20" fill="#10273a" stroke={n.c} strokeWidth="3"/><text x={n.x+n.w/2} y="180" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="900">{n.t}</text><text x={n.x+n.w/2} y="216" textAnchor="middle" fill={n.c} fontSize="13" fontWeight="800">{n.s}</text>{i<ns.length-1&&<path d={`M${n.x+n.w+10} 200 H${ns[i+1].x-10}`} stroke="#46657d" strokeWidth="5" markerEnd="url(#p9pf)"/>}</g>)}
        <defs><marker id="p9pf" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#46657d"/></marker></defs>
        <text x="650" y="95" textAnchor="middle" fill="#bdf2d5" fontSize="15" fontWeight="900">electrolysis / Cl₂ / O₃</text>
        <path d="M627 135 C665 90 735 90 790 135" fill="none" stroke="#66e2a8" strokeWidth="4" markerEnd="url(#p9pf2)"/>
        <defs><marker id="p9pf2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#66e2a8"/></marker></defs>
        <text x="650" y="325" textAnchor="middle" fill="#f6b6cc" fontSize="15" fontWeight="900">water/acid: ⅓ Mn may be lost as MnO₂ during disproportionation</text>
      </svg>
    </VisualFrame>
  );
}

function MediumProductMap(_: VisualProps) {
  const cards=[
    {x:65,t:"Acidic",p:"Mn²⁺",e:"5 e⁻",c:"#f1b7d2"},
    {x:300,t:"Neutral / weak base",p:"MnO₂",e:"3 e⁻",c:"#8b6f5b"},
    {x:575,t:"Strongly alkaline",p:"MnO₄²⁻",e:"1 e⁻",c:"#54c68a"},
    {x:810,t:"No reductant + heat",p:"MnO₄²⁻ + MnO₂",e:"O₂ evolved",c:"#f2b84b"},
  ];
  return (
    <VisualFrame title="Medium decides the reduction product" caption="The same purple permanganate ion can accept one, three or five electrons. pH is an active reagent because it stabilises different oxygen/proton balances.">
      <svg viewBox="0 0 1080 430" className="min-w-[860px] w-full" role="img" aria-label="Permanganate products in acidic neutral and alkaline media">
        <rect width="1080" height="430" rx="24" fill="#081827"/>
        <circle cx="540" cy="85" r="58" fill="#2c2647" stroke="#b69aff" strokeWidth="4"/>
        <text x="540" y="94" textAnchor="middle" fill="#f3efff" fontSize="22" fontWeight="900">MnO₄⁻</text>
        {cards.map((n,i)=><g key={n.t}><path d={`M540 143 C${540+(n.x+100-540)*0.35} 190,${n.x+100} 190,${n.x+100} 240`} fill="none" stroke={n.c} strokeWidth="4" markerEnd={`url(#p9m${i})`}/><defs><marker id={`p9m${i}`} markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill={n.c}/></marker></defs><rect x={n.x} y="240" width="200" height="125" rx="20" fill="#10273a" stroke={n.c} strokeWidth="3"/><text x={n.x+100} y="276" textAnchor="middle" fill={n.c} fontSize="16" fontWeight="900">{n.t}</text><text x={n.x+100} y="316" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="900">{n.p}</text><text x={n.x+100} y="344" textAnchor="middle" fill="#a9c7d8" fontSize="13">{n.e}</text></g>)}
      </svg>
    </VisualFrame>
  );
}

function OxalateAutocatalysis(_: VisualProps) {
  return (
    <VisualFrame title="Why oxalate oxidation accelerates" caption="The reaction begins slowly, then Mn²⁺ product catalyses further oxidation through manganese–oxalate intermediates. Warming supplies the initial rate; the generated Mn²⁺ produces autocatalysis.">
      <svg viewBox="0 0 980 410" className="min-w-[760px] w-full" role="img" aria-label="S-shaped rate curve for autocatalytic oxalate permanganate reaction">
        <rect width="980" height="410" rx="24" fill="#081827"/>
        <line x1="90" y1="330" x2="900" y2="330" stroke="#547088" strokeWidth="3"/>
        <line x1="90" y1="330" x2="90" y2="70" stroke="#547088" strokeWidth="3"/>
        <path d="M95 320 C260 315 330 300 400 255 C490 195 520 115 650 95 C760 80 840 80 895 80" fill="none" stroke="#b69aff" strokeWidth="6"/>
        <text x="210" y="295" fill="#9cecff" fontSize="15" fontWeight="900">induction period</text>
        <text x="475" y="210" fill="#ffd88a" fontSize="15" fontWeight="900">Mn²⁺ accumulates</text>
        <text x="730" y="65" fill="#bdf2d5" fontSize="15" fontWeight="900">rapid autocatalytic stage</text>
        <text x="490" y="380" textAnchor="middle" fill="#91a9ba" fontSize="14">time →</text>
        <text x="35" y="210" fill="#91a9ba" fontSize="14" transform="rotate(-90 35 210)">reaction progress / rate</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "ladder": ManganeseLadder,
  "process": PermanganateProcess,
  "medium": MediumProductMap,
  "auto": OxalateAutocatalysis,
};

const PAGES: PageBlock[] = [
{
  id: "states",
  label: "Manganese oxidation-state landscape",
  visual: "ladder",
  markdown: String.raw`# Manganese: the widest first-row oxidation-state range

Manganese has ground-state configuration

$$
\mathrm{[Ar]\,3d^5 4s^2}
$$

It can use both 4s electrons and varying numbers of 3d electrons in bonding. Its recognised states span +2 to +7.

| Oxidation state | Representative species | d count | Typical colour/character |
|---:|---|---:|---|
| +2 | $\mathrm{Mn^{2+}}$ | $d^5$ | very pale pink; stable in acid |
| +3 | $\mathrm{Mn^{3+}}$ | $d^4$ | oxidising; prone to disproportionation |
| +4 | $\mathrm{MnO_2}$ | $d^3$ | brown-black solid |
| +5 | $\mathrm{MnO_4^{3-}}$ | $d^2$ | blue hypomanganate in strong alkali, limited |
| +6 | $\mathrm{MnO_4^{2-}}$ | $d^1$ | green manganate |
| +7 | $\mathrm{MnO_4^-}$ | $d^0$ | intense purple permanganate |

## Why Mn(II) is important

High-spin $\mathrm{Mn^{2+}}$ has one electron in each d orbital. Exchange stabilisation, absence of pairing in the free-ion picture and strong hydration make it a favoured product in acid.

## Why high states are oxo species

A bare highly charged manganese cation would be impossible in water. Oxygen stabilises high formal states through strong covalent bonding and delocalised oxoanion structures.

## Colour and magnetism

Manganate(VI) is $d^1$ and paramagnetic. Permanganate(VII) is formally $d^0$ and has no ordinary d–d transition; its intense purple colour comes from ligand-to-metal charge transfer. The solid salt is described as diamagnetic with a small temperature-dependent paramagnetic contribution in the supplied NCERT discussion.`,
},
{
  id: "manganate-prep",
  label: "Preparation of manganate",
  visual: "process",
  markdown: String.raw`# Oxidative fusion of pyrolusite

Pyrolusite, $\mathrm{MnO_2}$, contains Mn(IV). Fusion with concentrated alkali and an oxidising agent converts it to green manganate(VI).

## Using oxygen

$$
\mathrm{2MnO_2+4KOH+O_2\rightarrow2K_2MnO_4+2H_2O}
$$

## Using potassium nitrate

$$
\mathrm{MnO_2+2KOH+KNO_3
\rightarrow K_2MnO_4+KNO_2+H_2O}
$$

## Using potassium chlorate

$$
\mathrm{3MnO_2+6KOH+KClO_3
\rightarrow3K_2MnO_4+KCl+3H_2O}
$$

Nitrate and chlorate release oxygen-equivalent oxidising power throughout the fused mass and accelerate the conversion.

## KOH versus NaOH

KOH gives potassium manganate. With NaOH, sodium manganate may be obtained; the supplied reference notes hydrated $\mathrm{Na_2MnO_4\cdot10H_2O}$, isomorphous with Glauber’s salt. Potassium manganate is related structurally to potassium sulfate.

## Reduction of permanganate by hot concentrated alkali

Permanganate can also be converted back to manganate:

$$
\mathrm{4KMnO_4+4KOH
\rightarrow4K_2MnO_4+2H_2O+O_2}
$$

The reaction is favoured by strongly alkaline, heated conditions and illustrates that permanganate does not have one fixed reduction product.`,
},
{
  id: "permanganate-prep",
  label: "Conversion to permanganate",
  visual: "process",
  markdown: String.raw`# From green manganate to purple permanganate

Manganate is stable in strongly alkaline solution. When alkalinity decreases, it disproportionates:

$$
\mathrm{3MnO_4^{2-}+4H^+
\rightarrow2MnO_4^-+MnO_2+2H_2O}
$$

An equivalent molecular form in water is

$$
\mathrm{3K_2MnO_4+2H_2O
\rightarrow2KMnO_4+MnO_2+4KOH}
$$

One-third of the manganese is lost as MnO$_2$, so direct oxidation methods give better yield.

## Oxidation by chlorine

$$
\mathrm{2K_2MnO_4+Cl_2
\rightarrow2KMnO_4+2KCl}
$$

## Oxidation by ozone

$$
\mathrm{2K_2MnO_4+O_3+H_2O
\rightarrow2KMnO_4+2KOH+O_2}
$$

## Electrolytic oxidation

Commercial production commonly oxidises manganate anodically in alkaline solution:

$$
\mathrm{MnO_4^{2-}\rightarrow MnO_4^-+e^-}
$$

Electrolysis avoids formation of MnO$_2$ and can give high conversion.

## Laboratory oxidation of Mn(II)

Peroxodisulfate can oxidise Mn(II) to permanganate in acid under suitable catalytic conditions:

$$
\mathrm{2Mn^{2+}+5S_2O_8^{2-}+8H_2O
\rightarrow2MnO_4^-+10SO_4^{2-}+16H^+}
$$

This reaction demonstrates the powerful oxidising capacity of peroxodisulfate when kinetically activated.`,
},
{
  id: "structure",
  label: "Structure, colour and thermal behaviour",
  visual: "",
  markdown: String.raw`# Structure and physical properties of permanganate

$\mathrm{MnO_4^-}$ is tetrahedral with four equivalent Mn–O bonds in the elementary resonance description. The bonding is strongly covalent and delocalised.

Potassium permanganate forms dark purple, almost black crystals. Its aqueous solutions are intensely purple even at low concentration because the charge-transfer absorption is strong.

## Thermal decomposition

At about $513\ \mathrm{K}$ in the supplied NCERT account:

$$
\mathrm{2KMnO_4
\rightarrow K_2MnO_4+MnO_2+O_2}
$$

The products can be separated by water:

- $\mathrm{K_2MnO_4}$ dissolves, giving a green solution.
- $\mathrm{MnO_2}$ remains as a brown-black residue.
- oxygen gas is evolved.

## Why KMnO$_4$ is not a primary standard

A primary standard must have reliable purity and composition. Potassium permanganate is unsuitable because:

- pure crystals may contain traces of MnO$_2$;
- solutions slowly decompose;
- light and acid accelerate formation of MnO$_2$ and oxygen;
- organic contamination consumes permanganate.

Therefore its solution is stored in a dark bottle, allowed to stand or filtered if needed, and standardised before accurate volumetric use.

## Self-indicator property

The permanganate ion is intensely coloured. During a titration, each added drop is decolourised while reductant remains. The endpoint is the first permanent faint pink colour due to a slight excess of permanganate.`,
},
{
  id: "medium",
  label: "Medium-dependent reduction products",
  visual: "medium",
  markdown: String.raw`# The medium is an active reagent

## Acidic medium: five-electron reduction

$$
\mathrm{MnO_4^-+8H^++5e^-
\rightarrow Mn^{2+}+4H_2O}
$$

Purple permanganate is decolourised to very pale $\mathrm{Mn^{2+}}$.

## Neutral or weakly alkaline medium: three-electron reduction

$$
\mathrm{MnO_4^-+2H_2O+3e^-
\rightarrow MnO_2+4OH^-}
$$

A brown-black precipitate of manganese dioxide forms.

The same chemistry may be written in acid-balanced form,

$$
\mathrm{MnO_4^-+4H^++3e^-\rightarrow MnO_2+2H_2O}
$$

but for a neutral/basic problem the hydroxide form shows the medium more clearly.

## Strongly alkaline medium: one-electron reduction

$$
\mathrm{MnO_4^-+e^-\rightarrow MnO_4^{2-}}
$$

Purple permanganate becomes green manganate.

## Why the product changes

Lowering pH stabilises reduced, protonated oxygen products and eventually aqueous Mn(II). Strong base stabilises oxygen-rich manganate. The half-reaction must therefore include $H^+$, $H_2O$ or $OH^-$ correctly.

## Why HCl is unsuitable in acidic permanganate titrations

Permanganate can oxidise chloride to chlorine:

$$
\mathrm{2MnO_4^-+16H^++10Cl^-
\rightarrow2Mn^{2+}+5Cl_2+8H_2O}
$$

Sulfuric acid is normally used. Nitric acid is avoided because it is itself oxidising and may introduce side chemistry.`,
},
{
  id: "acidic-reactions",
  label: "Oxidations in acidic medium",
  visual: "medium",
  markdown: String.raw`# Important acidic permanganate reactions

## Iron(II)

$$
\mathrm{MnO_4^-+8H^++5Fe^{2+}
\rightarrow Mn^{2+}+5Fe^{3+}+4H_2O}
$$

One permanganate oxidises five Fe(II) ions.

## Oxalate

$$
\mathrm{2MnO_4^-+5C_2O_4^{2-}+16H^+
\rightarrow2Mn^{2+}+10CO_2+8H_2O}
$$

The reaction is slow at room temperature and is performed warm. The Mn(II) product accelerates the reaction.

## Hydrogen peroxide

$$
\mathrm{2MnO_4^-+5H_2O_2+6H^+
\rightarrow2Mn^{2+}+5O_2+8H_2O}
$$

Hydrogen peroxide acts as a reducing agent and oxygen is evolved.

## Iodide

$$
\mathrm{2MnO_4^-+10I^-+16H^+
\rightarrow2Mn^{2+}+5I_2+8H_2O}
$$

## Sulfite

$$
\mathrm{2MnO_4^-+5SO_3^{2-}+6H^+
\rightarrow2Mn^{2+}+5SO_4^{2-}+3H_2O}
$$

## Nitrite

$$
\mathrm{2MnO_4^-+5NO_2^-+6H^+
\rightarrow2Mn^{2+}+5NO_3^-+3H_2O}
$$

Each equation follows the five-electron Mn(VII) to Mn(II) half-reaction.`,
},
{
  id: "neutral-reactions",
  label: "Neutral and alkaline reactions",
  visual: "",
  markdown: String.raw`# Permanganate outside strongly acidic solution

## Iodide in neutral/alkaline medium

Iodide can be oxidised to iodate while permanganate forms MnO$_2$:

$$
\mathrm{2MnO_4^-+I^-+H_2O
\rightarrow2MnO_2+IO_3^-+2OH^-}
$$

The product differs from acidic medium, where iodine is formed.

## Hydrogen peroxide in neutral medium

A balanced form is

$$
\mathrm{2MnO_4^-+3H_2O_2
\rightarrow2MnO_2+3O_2+2OH^-+2H_2O}
$$

Brown MnO$_2$ and oxygen are produced.

## Sulfite in neutral/basic medium

Permanganate commonly oxidises sulfite to sulfate while giving MnO$_2$:

$$
\mathrm{2MnO_4^-+3SO_3^{2-}+H_2O
\rightarrow2MnO_2+3SO_4^{2-}+2OH^-}
$$

## Manganate disproportionation and alkalinity

When manganate disproportionates in water,

$$
\mathrm{3MnO_4^{2-}+2H_2O
\rightarrow2MnO_4^-+MnO_2+4OH^-}
$$

hydroxide is formed. As the solution becomes more alkaline, further disproportionation is suppressed; this is why manganate is stable in concentrated alkali.

## Product-prediction method

1. Identify pH.
2. Write the appropriate Mn half-reaction.
3. Write the reductant oxidation half-reaction.
4. equalise electrons;
5. add and verify both atom and charge balance.

Do not memorise one universal product for permanganate.`,
},
{
  id: "autocatalysis",
  label: "Oxalate autocatalysis and titration logic",
  visual: "auto",
  markdown: String.raw`# Autocatalysis in the permanganate–oxalate reaction

The oxidation of oxalate by acidified permanganate is initially slow. The negatively charged reactants and a demanding bond-breaking step create a kinetic barrier.

The product $\mathrm{Mn^{2+}}$ catalyses subsequent reaction through intermediate manganese–oxalate species. Therefore the rate increases as product accumulates: the reaction is **autocatalytic**.

## Practical consequences

- The solution is warmed, commonly to about $60$–$70^\circ\mathrm{C}$, to overcome the induction period.
- It should not be boiled strongly, which can cause side reactions and decomposition.
- Once enough Mn(II) forms, the purple colour disappears rapidly after each addition.
- Adding a small amount of Mn(II) at the start shortens the induction period.

## Equivalent change

In acidic medium, Mn changes from +7 to +2 and gains five electrons. The oxidising n-factor of $\mathrm{KMnO_4}$ is therefore 5.

In neutral medium, Mn changes from +7 to +4 and the n-factor is 3.

In strongly alkaline medium, Mn changes from +7 to +6 and the n-factor is 1.

The molar mass is unchanged, but the equivalent mass depends on the reaction medium:

$$
\text{equivalent mass}=\frac{M(\mathrm{KMnO_4})}{n}
$$

This medium dependence is a central redox principle, not merely a titration formula.`,
},
{
  id: "summary",
  label: "Permanganate reaction atlas",
  visual: "ladder",
  markdown: String.raw`# Manganese and permanganate atlas

## Preparation

$$
\mathrm{MnO_2}
\xrightarrow[\text{oxidant}]{\mathrm{KOH,\ fusion}}
\mathrm{MnO_4^{2-}}
\xrightarrow[\text{electrolysis/Cl_2/O_3}]{-e^-}
\mathrm{MnO_4^-}
$$

## Reduction products

| Medium | Product | Mn change | Electrons accepted |
|---|---|---:|---:|
| acidic | $\mathrm{Mn^{2+}}$ | +7 → +2 | 5 |
| neutral / faintly alkaline | $\mathrm{MnO_2}$ | +7 → +4 | 3 |
| strongly alkaline | $\mathrm{MnO_4^{2-}}$ | +7 → +6 | 1 |

## Observation map

- $\mathrm{MnO_4^-}$: purple.
- $\mathrm{MnO_4^{2-}}$: green.
- $\mathrm{MnO_2}$: brown-black precipitate.
- $\mathrm{Mn^{2+}}$: very pale pink, often visually colourless in dilute titration solution.

## Frequent errors

Do not use HCl to acidify a permanganate titration.
Do not call KMnO$_4$ a primary standard.
Do not write MnO$_2$ as the acidic reduction product.
Do not forget warming for oxalate oxidation.
Do not attribute permanganate colour to d–d transition.
Do not ignore hydroxide generation in neutral/basic equations.
Do not use one n-factor in every medium.

> **Part 9 conclusion:** permanganate is powerful because Mn(VII) can descend through several oxidation states. The medium selects the destination, and that single fact controls equations, observations, equivalent change and analytical use.`,
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

export default function DBlockPart09() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 9
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Manganese, Manganate and Permanganate Chemistry</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">A complete route from pyrolusite through green manganate to purple permanganate, followed by structure, storage, thermal decomposition, medium-controlled products, balanced oxidations and autocatalytic titration chemistry.</p>
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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 9 • Study page</p>
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

        <footer className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-6 text-slate-400">
          This file contains theory, tables, equations and original scientific visuals only. Practice questions and detailed solutions are intentionally reserved for the later assessment phase.
        </footer>
      </div>
    </main>
  );
}
