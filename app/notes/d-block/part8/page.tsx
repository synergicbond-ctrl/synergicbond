import type { ComponentType, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { createMarkdownComponents } from "../AnchoredMarkdown";
import DBlockPartNavigation from "../DBlockPartNavigation";
import DBlockVisualSystem from "../DBlockVisualSystem";

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
      <figcaption className="border-t border-white/10 bg-white/[0.025] px-5 py-3 text-sm leading-6 text-[var(--text-muted)] sm:px-7">
        {caption}
      </figcaption>
    </figure>
  );
}


function ChromiteProcess(_: VisualProps) {
  const nodes=[
    {x:80,w:170,t:"Chromite ore",s:"FeCr₂O₄",c:"#667b8c"},
    {x:290,w:190,t:"Oxidative fusion",s:"Na₂CO₃ + air, red heat",c:"#f2b84b"},
    {x:530,w:170,t:"Water extract",s:"Na₂CrO₄ (yellow)",c:"#e8d84b"},
    {x:750,w:160,t:"Acidify",s:"Na₂Cr₂O₇ (orange)",c:"#f28b4b"},
  ];
  return (
    <VisualFrame title="From chromite ore to dichromate" caption="The industrial logic is selective oxidation and solubility: Cr(III) in chromite becomes soluble Cr(VI) chromate, while iron remains as insoluble Fe₂O₃.">
      <svg viewBox="0 0 980 430" className="min-w-[800px] w-full" role="img" aria-label="Industrial preparation flow from chromite to sodium dichromate">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        {nodes.map((n,i)=><g key={n.t}><rect x={n.x} y="135" width={n.w} height="120" rx="20" fill="#10273a" stroke={n.c} strokeWidth="3"/><text x={n.x+n.w/2} y="175" textAnchor="middle" fill="#f6fbff" fontSize="17" fontWeight="900">{n.t}</text><text x={n.x+n.w/2} y="211" textAnchor="middle" fill={n.c} fontSize="14" fontWeight="800">{n.s}</text>{i<nodes.length-1&&<path d={`M${n.x+n.w+12} 195 H${nodes[i+1].x-12}`} stroke="#46657d" strokeWidth="5" markerEnd="url(#p8f)"/>}</g>)}
        <defs><marker id="p8f" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#46657d"/></marker></defs>
        <path d="M615 255 V330 H435" stroke="#b69aff" strokeWidth="4" markerEnd="url(#p8f2)"/>
        <defs><marker id="p8f2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#b69aff"/></marker></defs>
        <rect x="240" y="310" width="200" height="70" rx="17" fill="#2c2647" stroke="#b69aff"/>
        <text x="340" y="340" textAnchor="middle" fill="#f3efff" fontSize="16" fontWeight="900">Residue: Fe₂O₃</text>
        <text x="340" y="361" textAnchor="middle" fill="#c9bce0" fontSize="12">removed by filtration</text>
        <text x="490" y="70" textAnchor="middle" fill="#e9fbff" fontSize="23" fontWeight="900">Oxidise → dissolve → separate → acidify</text>
      </svg>
    </VisualFrame>
  );
}

function ChromateStructures(_: VisualProps) {
  const tetra=(cx:number,cy:number,scale:number,color:string,bridge=false)=>(
    <g>
      <circle cx={cx} cy={cy} r={34*scale} fill="#10273a" stroke={color} strokeWidth={3}/>
      <text x={cx} y={cy+7} textAnchor="middle" fill="#f7fcff" fontSize={18*scale} fontWeight="900">Cr</text>
      {[[0,-95],[85,50],[-85,50],[bridge?95:0,bridge?0:95]].map(([dx,dy],i)=><g key={i}><line x1={cx+dx*0.34} y1={cy+dy*0.34} x2={cx+dx*0.82} y2={cy+dy*0.82} stroke="#dbeaf2" strokeWidth={4}/><circle cx={cx+dx} cy={cy+dy} r={22*scale} fill="#3d2b3d" stroke="#f08caf" strokeWidth={2}/><text x={cx+dx} y={cy+dy+6} textAnchor="middle" fill="#ffeaf3" fontSize={15*scale} fontWeight="900">O</text></g>)}
    </g>
  );
  return (
    <VisualFrame title="Tetrahedral chromate and corner-shared dichromate" caption="Chromate contains one CrO₄ tetrahedron. Dichromate contains two tetrahedra sharing one oxygen; the Cr–O–Cr angle is about 126°. Chromium remains +6 in both.">
      <svg viewBox="0 0 980 470" className="min-w-[800px] w-full" role="img" aria-label="Structures of chromate and dichromate ions">
        <rect width="980" height="470" rx="24" fill="#081827"/>
        <text x="245" y="55" textAnchor="middle" fill="#e9fbff" fontSize="22" fontWeight="900">Chromate, CrO₄²⁻</text>
        {tetra(245,240,1,"#e8d84b")}
        <text x="735" y="55" textAnchor="middle" fill="#e9fbff" fontSize="22" fontWeight="900">Dichromate, Cr₂O₇²⁻</text>
        <circle cx="675" cy="240" r="32" fill="#10273a" stroke="#f28b4b" strokeWidth="3"/><text x="675" y="247" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="900">Cr</text>
        <circle cx="795" cy="240" r="32" fill="#10273a" stroke="#f28b4b" strokeWidth="3"/><text x="795" y="247" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="900">Cr</text>
        <circle cx="735" cy="240" r="23" fill="#3d2b3d" stroke="#f08caf" strokeWidth="3"/><text x="735" y="246" textAnchor="middle" fill="#ffeaf3" fontSize="15" fontWeight="900">O</text>
        <line x1="707" y1="240" x2="712" y2="240" stroke="#dbeaf2" strokeWidth="5"/><line x1="758" y1="240" x2="763" y2="240" stroke="#dbeaf2" strokeWidth="5"/>
        {[[625,135],[595,290],[660,345],[845,135],[875,290],[810,345]].map(([x,y],i)=><g key={i}><line x1={i<3?675:795} y1="240" x2={x} y2={y} stroke="#dbeaf2" strokeWidth="4"/><circle cx={x} cy={y} r="21" fill="#3d2b3d" stroke="#f08caf" strokeWidth="2"/><text x={x} y={y+6} textAnchor="middle" fill="#ffeaf3" fontSize="14" fontWeight="900">O</text></g>)}
        <path d="M705 205 A55 55 0 0 1 765 205" fill="none" stroke="#55d8ef" strokeWidth="3"/>
        <text x="735" y="180" textAnchor="middle" fill="#9cecff" fontSize="14" fontWeight="800">≈126°</text>
      </svg>
    </VisualFrame>
  );
}

function PHSeesaw(_: VisualProps) {
  return (
    <VisualFrame title="The chromate–dichromate pH seesaw" caption="Acid consumes chromate and favours orange dichromate; hydroxide consumes acid and restores yellow chromate. This is an acid–base condensation equilibrium, not a chromium redox reaction.">
      <svg viewBox="0 0 980 400" className="min-w-[760px] w-full" role="img" aria-label="pH-dependent equilibrium between chromate and dichromate">
        <rect width="980" height="400" rx="24" fill="#081827"/>
        <line x1="180" y1="225" x2="800" y2="225" stroke="#dbeaf2" strokeWidth="12" strokeLinecap="round"/>
        <polygon points="490,225 440,335 540,335" fill="#19364b" stroke="#55d8ef" strokeWidth="3"/>
        <circle cx="230" cy="175" r="90" fill="#6f6518" stroke="#e8d84b" strokeWidth="4"/>
        <text x="230" y="165" textAnchor="middle" fill="#fffbd9" fontSize="21" fontWeight="900">CrO₄²⁻</text>
        <text x="230" y="198" textAnchor="middle" fill="#fff3a7" fontSize="16">yellow • alkaline</text>
        <circle cx="750" cy="275" r="90" fill="#6b331a" stroke="#f28b4b" strokeWidth="4"/>
        <text x="750" y="265" textAnchor="middle" fill="#fff3e7" fontSize="21" fontWeight="900">Cr₂O₇²⁻</text>
        <text x="750" y="298" textAnchor="middle" fill="#ffd0b1" fontSize="16">orange • acidic</text>
        <path d="M360 140 H620" stroke="#f08caf" strokeWidth="5" markerEnd="url(#p8ph1)"/>
        <text x="490" y="120" textAnchor="middle" fill="#f6b6cc" fontSize="17" fontWeight="900">+ 2H⁺</text>
        <path d="M620 335 H360" stroke="#66e2a8" strokeWidth="5" markerEnd="url(#p8ph2)"/>
        <text x="490" y="370" textAnchor="middle" fill="#bdf2d5" fontSize="17" fontWeight="900">+ 2OH⁻</text>
        <defs><marker id="p8ph1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f08caf"/></marker><marker id="p8ph2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#66e2a8"/></marker></defs>
      </svg>
    </VisualFrame>
  );
}

function DichromateRedox(_: VisualProps) {
  return (
    <VisualFrame title="Six-electron oxidising engine" caption="Each dichromate ion accepts six electrons in acid and forms two Cr³⁺ ions. A reducing half-reaction must supply exactly six electrons before the equations are added.">
      <svg viewBox="0 0 980 420" className="min-w-[760px] w-full" role="img" aria-label="Dichromate reduction accepting six electrons and oxidizing common reductants">
        <rect width="980" height="420" rx="24" fill="#081827"/>
        <circle cx="490" cy="205" r="96" fill="#6b331a" stroke="#f28b4b" strokeWidth="5"/>
        <text x="490" y="195" textAnchor="middle" fill="#fff3e7" fontSize="28" fontWeight="900">Cr₂O₇²⁻</text>
        <text x="490" y="228" textAnchor="middle" fill="#ffd0b1" fontSize="15">+14H⁺ +6e⁻</text>
        <path d="M390 205 H265" stroke="#55d8ef" strokeWidth="5" markerEnd="url(#p8r)"/>
        <path d="M590 205 H715" stroke="#66e2a8" strokeWidth="5" markerEnd="url(#p8r2)"/>
        <defs><marker id="p8r" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#55d8ef"/></marker><marker id="p8r2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#66e2a8"/></marker></defs>
        <rect x="65" y="130" width="200" height="150" rx="20" fill="#10273a" stroke="#55d8ef"/>
        <text x="165" y="165" textAnchor="middle" fill="#9cecff" fontSize="17" fontWeight="900">Reductants</text>
        <text x="165" y="200" textAnchor="middle" fill="#dcecf7" fontSize="15">Fe²⁺ • I⁻ • Sn²⁺</text>
        <text x="165" y="228" textAnchor="middle" fill="#dcecf7" fontSize="15">H₂S • SO₂</text>
        <text x="165" y="256" textAnchor="middle" fill="#91a9ba" fontSize="13">lose 6 e⁻ total</text>
        <rect x="715" y="130" width="200" height="150" rx="20" fill="#164635" stroke="#66e2a8"/>
        <text x="815" y="165" textAnchor="middle" fill="#bdf2d5" fontSize="17" fontWeight="900">Products</text>
        <text x="815" y="205" textAnchor="middle" fill="#effff6" fontSize="18" fontWeight="900">2Cr³⁺</text>
        <text x="815" y="236" textAnchor="middle" fill="#bae9cf" fontSize="14">+ 7H₂O</text>
        <text x="490" y="355" textAnchor="middle" fill="#91a9ba" fontSize="15">orange Cr(VI) → green Cr(III), with the exact shade depending on complexation</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "process": ChromiteProcess,
  "structures": ChromateStructures,
  "ph": PHSeesaw,
  "redox": DichromateRedox,
};

const PAGES: PageBlock[] = [
{
  id: "chromium-map",
  label: "Chromium oxidation-state map",
  visual: "",
  markdown: String.raw`# Chromium: a bridge between ionic and oxo chemistry

Chromium has ground-state configuration

$$
\mathrm{[Ar]\,3d^5 4s^1}
$$

Its important oxidation states illustrate three distinct regimes:

| State | Representative species | d count | Chemical character |
|---:|---|---:|---|
| +2 | $\mathrm{Cr^{2+}}$, $\mathrm{CrCl_2}$ | $d^4$ | strong reducing state |
| +3 | $\mathrm{Cr^{3+}}$, $\mathrm{Cr_2O_3}$ | $d^3$ | especially stable; complex-forming |
| +6 | $\mathrm{CrO_3}$, $\mathrm{CrO_4^{2-}}$, $\mathrm{Cr_2O_7^{2-}}$ | $d^0$ | covalent oxo chemistry; oxidising in acid |

Cr(III) is favoured in many octahedral complexes because $d^3$ places one electron in each $t_{2g}$ orbital. Cr(II) is therefore readily oxidised to Cr(III).

Cr(VI) does not exist in water as a bare $\mathrm{Cr^{6+}}$ ion. Its high charge is stabilised by strong Cr–O bonding in oxides and oxoanions.

## Oxides

- $\mathrm{CrO}$: basic, Cr(II).
- $\mathrm{Cr_2O_3}$: amphoteric, Cr(III).
- $\mathrm{CrO_3}$: acidic, Cr(VI), the anhydride of chromic/dichromic acids.

The increasing acidic character follows the general high-oxidation-state trend.

## Colour mechanism

Chromate and dichromate are $d^0$, so their yellow and orange colours are not caused by d–d transitions. They arise mainly from oxygen-to-chromium charge transfer.`,
},
{
  id: "ore",
  label: "Preparation from chromite ore",
  visual: "process",
  markdown: String.raw`# Preparation of chromate from chromite

Chromite, $\mathrm{FeCr_2O_4}$, contains chromium in the +3 state. The first stage converts it into soluble chromium(VI) chromate.

The finely powdered ore is fused or roasted at red heat with sodium carbonate in free access of air:

$$
\mathrm{4FeCr_2O_4+8Na_2CO_3+7O_2
\rightarrow 8Na_2CrO_4+2Fe_2O_3+8CO_2}
$$

## Purpose of each reagent

### Sodium carbonate

It converts oxidised chromium into sodium chromate, which is soluble in water. The alkaline medium also supports oxidation of Cr(III) to Cr(VI).

### Oxygen

Oxygen is the oxidising agent. Without access of air, chromium would not be efficiently converted to chromate.

### Lime

The supplied advanced notes add CaO to the charge. Lime keeps the mass porous and reduces fusion into a dense cake, allowing air to reach more of the ore particles.

## Separation

The cooled mass is extracted with water:

- $\mathrm{Na_2CrO_4}$ dissolves, giving a yellow filtrate.
- $\mathrm{Fe_2O_3}$ remains insoluble and is filtered off.
- unreacted gangue also remains in the residue.

The key industrial strategy is therefore **oxidative conversion followed by solubility separation**.

## Redox accounting

Each Cr changes from +3 in chromite to +6 in chromate, losing three electrons. Eight Cr atoms lose twenty-four electrons. Seven $\mathrm{O_2}$ molecules gain twenty-eight electrons formally if reduced fully, but oxygen incorporation and carbonate product accounting occur in the complete lattice reaction; balance the molecular equation rather than assigning a single simplistic isolated half-reaction to the solid fusion.`,
},
{
  id: "dichromate-prep",
  label: "Sodium and potassium dichromate",
  visual: "process",
  markdown: String.raw`# Conversion of chromate into dichromate

The yellow sodium chromate solution is acidified with sulfuric acid:

$$
\mathrm{2Na_2CrO_4+H_2SO_4
\rightarrow Na_2Cr_2O_7+Na_2SO_4+H_2O}
$$

The ionic condensation is

$$
\mathrm{2CrO_4^{2-}+2H^+\rightleftharpoons Cr_2O_7^{2-}+H_2O}
$$

Sodium dichromate crystallises commonly as $\mathrm{Na_2Cr_2O_7\cdot2H_2O}$. The supplied preparation notes emphasise temperature-controlled crystallisation of sodium sulfate: its solubility behaviour changes near $32^\circ\mathrm{C}$, allowing sulfate to be removed before concentrating the dichromate liquor.

## Preparation of potassium dichromate

Sodium dichromate is more soluble than potassium dichromate. A hot concentrated sodium dichromate solution is treated with potassium chloride:

$$
\mathrm{Na_2Cr_2O_7+2KCl\rightarrow K_2Cr_2O_7+2NaCl}
$$

On cooling and concentration, orange $\mathrm{K_2Cr_2O_7}$ crystallises because it is less soluble.

## Why not prepare K$_2$Cr$_2$O$_7$ directly at every stage?

The sodium salt is convenient for leaching and processing because sodium chromate/dichromate solutions are highly soluble. Potassium is introduced only when the less soluble, readily crystallised analytical salt is desired.

## Crystal and solution colours

- sodium chromate solution: yellow;
- sodium dichromate: orange-red;
- potassium dichromate crystals: orange.

Colour is a guide to speciation, not proof of a redox change.`,
},
{
  id: "structures",
  label: "Structures and bonding",
  visual: "structures",
  markdown: String.raw`# Structures of chromate and dichromate

## Chromate

$\mathrm{CrO_4^{2-}}$ is tetrahedral. In an elementary resonance description, the Cr–O bonds are equivalent because multiple Lewis structures distribute formal double-bond character.

A more modern orbital description treats the bonding as strongly covalent with substantial oxygen-to-metal donation; it is not necessary to invoke literal localised $d\pi-p\pi$ double bonds for every bond.

## Dichromate

$\mathrm{Cr_2O_7^{2-}}$ consists of two $\mathrm{CrO_4}$ tetrahedra sharing one corner oxygen. Each Cr remains tetrahedrally coordinated. The Cr–O–Cr angle is approximately $126^\circ$ in the standard structural description.

There are:

- six terminal oxygens;
- one bridging oxygen;
- two chromium atoms in +6.

## Oxidation state check

For dichromate:

$$
2x+7(-2)=-2
$$

$$
x=+6
$$

Chromate and dichromate therefore differ by condensation and proton balance, not oxidation state.

## Sulfur(VI) analogy

The source highlights similarities between Cr(VI) and S(VI):

- $\mathrm{SO_3}$ and $\mathrm{CrO_3}$ are acidic oxides.
- sulfate and chromate are tetrahedral.
- pyrosulfate $\mathrm{S_2O_7^{2-}}$ and dichromate $\mathrm{Cr_2O_7^{2-}}$ contain bridging oxygen.
- some sulfate and chromate salts are isomorphous.

The analogy is useful structurally, but Cr(VI) is far more strongly oxidising in acidic water than S(VI) in sulfate.`,
},
{
  id: "equilibrium",
  label: "pH-dependent interconversion",
  visual: "ph",
  markdown: String.raw`# Chromate–dichromate equilibrium

The equilibrium is

$$
\mathrm{2CrO_4^{2-}+2H^+\rightleftharpoons Cr_2O_7^{2-}+H_2O}
$$

Adding acid moves the equilibrium to orange dichromate. Adding alkali removes $H^+$ and moves it back to yellow chromate:

$$
\mathrm{Cr_2O_7^{2-}+2OH^-\rightleftharpoons2CrO_4^{2-}+H_2O}
$$

## What the colour change proves

The change demonstrates acid–base speciation and condensation. It does **not** show oxidation or reduction because chromium remains +6.

## Concentration also matters

The simplified two-species picture is useful for JEE, but aqueous Cr(VI) chemistry includes hydrogen chromate, $\mathrm{HCrO_4^-}$, especially at intermediate acidity and concentration. Species distribution depends on pH and total chromium concentration.

A fuller sequence is:

$$
\mathrm{CrO_4^{2-}+H^+\rightleftharpoons HCrO_4^-}
$$

$$
\mathrm{2HCrO_4^-\rightleftharpoons Cr_2O_7^{2-}+H_2O}
$$

## Precipitation effects

Adding ions that form sparingly soluble chromates can pull equilibrium towards chromate. Examples include yellow $\mathrm{BaCrO_4}$ and brick-red $\mathrm{Ag_2CrO_4}$. In strongly acidic solution, conversion to dichromate can increase solubility.

## Analytical caution

A visual yellow/orange change depends on concentration and background colour. It should be supported by controlled pH and, where necessary, spectrophotometric or titrimetric measurement.`,
},
{
  id: "oxidation",
  label: "Oxidising action in acidic medium",
  visual: "redox",
  markdown: String.raw`# Acidified dichromate as an oxidising agent

The reduction half-reaction is

$$
\mathrm{Cr_2O_7^{2-}+14H^++6e^-
\rightarrow2Cr^{3+}+7H_2O}
$$

Its standard reduction potential is approximately $+1.33\ \mathrm{V}$ under standard acidic conditions, so acidified dichromate oxidises many reducing agents.

## Iron(II)

$$
\mathrm{Cr_2O_7^{2-}+14H^++6Fe^{2+}
\rightarrow2Cr^{3+}+6Fe^{3+}+7H_2O}
$$

## Iodide

$$
\mathrm{Cr_2O_7^{2-}+14H^++6I^-
\rightarrow2Cr^{3+}+3I_2+7H_2O}
$$

## Tin(II)

$$
\mathrm{Cr_2O_7^{2-}+14H^++3Sn^{2+}
\rightarrow2Cr^{3+}+3Sn^{4+}+7H_2O}
$$

## Hydrogen sulfide

$$
\mathrm{Cr_2O_7^{2-}+8H^++3H_2S
\rightarrow2Cr^{3+}+3S+7H_2O}
$$

## Sulfur dioxide

$$
\mathrm{Cr_2O_7^{2-}+2H^++3SO_2
\rightarrow2Cr^{3+}+3SO_4^{2-}+H_2O}
$$

## Observation

The orange Cr(VI) colour disappears and a Cr(III) solution forms, usually green but sometimes violet depending on ligand exchange and hydration history.

## Balancing rule

Write the six-electron dichromate half-reaction once. Multiply the reductant half-reaction to supply six electrons, then add and cancel. Never balance by colour or memorised coefficients alone.`,
},
{
  id: "analytical",
  label: "Primary-standard and analytical chemistry",
  visual: "",
  markdown: String.raw`# Potassium dichromate in volumetric analysis

$\mathrm{K_2Cr_2O_7}$ is used as a primary standard because a pure sample is:

- stable in air;
- non-deliquescent under ordinary laboratory handling;
- available in high purity;
- of reasonably high molar mass;
- directly weighable.

This contrasts with $\mathrm{KMnO_4}$, which may contain $\mathrm{MnO_2}$ and slowly decomposes, so permanganate solutions require standardisation.

## Equivalent change

In acid, one mole of dichromate accepts six moles of electrons. Therefore its n-factor as an oxidant is 6.

For a redox equivalent calculation:

$$
\text{equivalent mass}=\frac{M(\mathrm{K_2Cr_2O_7})}{6}
$$

This relation is stated here as theory; numerical exercises belong to the later question phase.

## Indicator issue

Dichromate is not a strong self-indicator in the way permanganate is. External or redox indicators may be used depending on the titration.

## Peroxide test

In acid, hydrogen peroxide can form an intensely blue peroxo chromium(VI) species, commonly represented as $\mathrm{CrO_5}$:

$$
\mathrm{Cr_2O_7^{2-}+4H_2O_2+2H^+
\rightarrow2CrO_5+5H_2O}
$$

The blue species is unstable in water but can be extracted into an organic solvent. This observation is a sensitive test for Cr(VI), provided the reaction conditions are controlled.

## Safety

Cr(VI) compounds are powerful oxidants and serious health hazards. The website should include a concise laboratory warning and should never encourage casual handling outside a supervised laboratory.`,
},
{
  id: "summary",
  label: "Chromium reaction atlas",
  visual: "structures",
  markdown: String.raw`# Chromium(VI) reaction atlas

## Preparation sequence

$$
\mathrm{FeCr_2O_4}
\xrightarrow[\text{air}]{\mathrm{Na_2CO_3,\ red\ heat}}
\mathrm{Na_2CrO_4}
\xrightarrow{\mathrm{H^+}}
\mathrm{Na_2Cr_2O_7}
\xrightarrow{\mathrm{KCl}}
\mathrm{K_2Cr_2O_7}
$$

## Speciation sequence

$$
\mathrm{CrO_4^{2-}\ (yellow)}
\xrightleftharpoons[\mathrm{OH^-}]{\mathrm{H^+}}
\mathrm{Cr_2O_7^{2-}\ (orange)}
$$

## Redox sequence

$$
\mathrm{Cr(VI)\xrightarrow[\ acid\ ]{+6e^-}2Cr(III)}
$$

## Structural summary

| Species | Geometry | Bridging oxygen | Chromium state | Dominant colour origin |
|---|---|---:|---:|---|
| $\mathrm{CrO_4^{2-}}$ | tetrahedral | 0 | +6 | charge transfer |
| $\mathrm{Cr_2O_7^{2-}}$ | two corner-sharing tetrahedra | 1 | +6 | charge transfer |
| $\mathrm{Cr^{3+}}$ aqua/complex ion | commonly octahedral | — | +3 | d–d/charge-transfer mixture |

## Frequent errors

Do not change Cr oxidation state during chromate–dichromate conversion.
Do not call dichromate linear.
Do not omit air from chromite fusion.
Do not forget filtration of $\mathrm{Fe_2O_3}$.
Do not write $\mathrm{K_2Cr_2O_7}$ as deliquescent.
Do not use the six-electron half-reaction in neutral medium without adding the required acid balance.
Do not infer a d–d colour for $d^0$ Cr(VI).

> **Part 8 conclusion:** chromium chemistry links a stable ionic $d^3$ state to high-valent tetrahedral oxoanions. Industrial preparation, pH equilibrium, structure and six-electron redox behaviour all follow from this contrast.`,
}
];

const markdownComponents = {
  h1: (props: any) => <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl" {...props} />,
  h2: (props: any) => <h3 className="mt-10 border-l-4 border-cyan-400 pl-4 text-2xl font-black text-white" {...props} />,
  h3: (props: any) => <h4 className="mt-8 text-xl font-extrabold text-cyan-200" {...props} />,
  p: (props: any) => <p className="mt-4 text-[1.02rem] leading-8 text-[var(--foreground)]" {...props} />,
  strong: (props: any) => <strong className="font-extrabold text-white" {...props} />,
  em: (props: any) => <em className="text-cyan-100" {...props} />,
  ul: (props: any) => <ul className="mt-4 space-y-2 pl-6 text-[var(--foreground)] marker:text-cyan-300" {...props} />,
  ol: (props: any) => <ol className="mt-4 space-y-2 pl-6 text-[var(--foreground)] marker:font-bold marker:text-amber-300" {...props} />,
  li: (props: any) => <li className="leading-7" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="my-6 rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] px-5 py-4 text-amber-50 shadow-inner" {...props} />
  ),
  table: (props: any) => (
    <div className="my-7 overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm text-[var(--foreground)]" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-cyan-400/10 text-cyan-100" {...props} />,
  th: (props: any) => <th className="whitespace-nowrap border-b border-r border-white/10 px-4 py-3 font-black last:border-r-0" {...props} />,
  td: (props: any) => <td className="border-b border-r border-white/10 px-4 py-3 align-top leading-6 last:border-r-0" {...props} />,
  code: (props: any) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-100" {...props} />,
  hr: () => <hr className="my-10 border-white/10" />,
};

export default function DBlockPart08() {
  return (
    <main className="dblock-page">
      <DBlockVisualSystem />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 8
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Chromium, Chromate and Dichromate Chemistry</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--text-body)]">A complete source-grounded route from chromite ore to potassium dichromate, including separation logic, tetrahedral structures, pH speciation, sulfur analogies, balanced six-electron oxidations and analytical use.</p>
        </header>

        <DBlockPartNavigation part={8} position="top" />

        <nav className="sticky top-2 z-20 mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#07111f]/95 p-2 shadow-xl backdrop-blur">
          <div className="flex min-w-max gap-2">
            {PAGES.map((page, index) => (
              <a key={page.id} href={`#${page.id}`} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-[var(--text-body)] transition hover:border-cyan-300/40 hover:text-white">
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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 8 • Study page</p>
                    <p className="font-bold text-[var(--foreground)]">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={createMarkdownComponents(8)}>
                  {page.markdown}
                </ReactMarkdown>
                {Visual ? <Visual /> : null}
              </section>
            );
          })}
        </div>
        <DBlockPartNavigation part={8} position="bottom" />
      </div>
    </main>
  );
}
