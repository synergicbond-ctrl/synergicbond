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


function SilverAtlas(_: VisualProps) {
  const ions = [
    { x: 45, label: "Cl⁻", solid: "AgCl", colour: "white", c: "#edf4f8", note: "dissolves in dilute NH₃" },
    { x: 285, label: "Br⁻", solid: "AgBr", colour: "pale cream", c: "#f1df9f", note: "dissolves in conc. NH₃" },
    { x: 525, label: "I⁻", solid: "AgI", colour: "yellow", c: "#efca43", note: "insoluble in NH₃" },
    { x: 765, label: "CrO₄²⁻", solid: "Ag₂CrO₄", colour: "brick red", c: "#cc654c", note: "chromate test precipitate" },
  ];
  return (
    <VisualFrame title="Silver-ion precipitation and selective dissolution" caption="Colour alone is not enough for identification. The combined evidence is precipitate colour, behaviour toward ammonia, and dissolution in thiosulfate through complex formation.">
      <svg viewBox="0 0 1020 440" className="min-w-[820px] w-full" role="img" aria-label="Silver precipitate colour and ammonia solubility atlas">
        <rect width="1020" height="440" rx="24" fill="#081827"/>
        <circle cx="510" cy="68" r="45" fill="#13283a" stroke="#69d9ef" strokeWidth="4"/>
        <text x="510" y="76" textAnchor="middle" fill="#eafaff" fontSize="22" fontWeight="900">Ag⁺</text>
        {ions.map((n, i) => (
          <g key={n.label}>
            <path d={`M510 115 C${510+(n.x+90-510)*0.45} 150,${n.x+90} 175,${n.x+90} 205`} fill="none" stroke={n.c} strokeWidth="4" markerEnd={`url(#p10ag${i})`}/>
            <defs><marker id={`p10ag${i}`} markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill={n.c}/></marker></defs>
            <rect x={n.x} y="205" width="180" height="175" rx="21" fill="#10273a" stroke={n.c} strokeWidth="3"/>
            <text x={n.x+90} y="240" textAnchor="middle" fill="#a8c8dd" fontSize="15" fontWeight="800">+ {n.label}</text>
            <circle cx={n.x+90} cy="282" r="25" fill={n.c} stroke="#ffffff55" strokeWidth="2"/>
            <text x={n.x+90} y="330" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="900">{n.solid}</text>
            <text x={n.x+90} y="353" textAnchor="middle" fill={n.c} fontSize="13" fontWeight="800">{n.colour}</text>
            <text x={n.x+90} y="405" textAnchor="middle" fill="#91aabe" fontSize="11" fontWeight="700">{n.note}</text>
          </g>
        ))}
      </svg>
    </VisualFrame>
  );
}

function ZincNetwork(_: VisualProps) {
  return (
    <VisualFrame title="Zinc oxide: amphoterism and thermochromism" caption="ZnO reacts with acids and with strong bases, yet its reversible white-to-yellow change on heating is a solid-defect phenomenon rather than an acid–base reaction.">
      <svg viewBox="0 0 1000 470" className="min-w-[800px] w-full" role="img" aria-label="Zinc oxide amphoteric reaction network and oxygen vacancy explanation">
        <rect width="1000" height="470" rx="24" fill="#081827"/>
        <rect x="390" y="165" width="220" height="120" rx="24" fill="#13283a" stroke="#f4f7f8" strokeWidth="4"/>
        <text x="500" y="210" textAnchor="middle" fill="#fff" fontSize="25" fontWeight="900">ZnO</text>
        <text x="500" y="244" textAnchor="middle" fill="#d8e4ec" fontSize="15" fontWeight="800">white at room temperature</text>
        <rect x="55" y="170" width="225" height="110" rx="20" fill="#10273a" stroke="#72daf0" strokeWidth="3"/>
        <text x="168" y="205" textAnchor="middle" fill="#9cecff" fontSize="17" fontWeight="900">acidic route</text>
        <text x="168" y="239" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800">Zn²⁺ + H₂O</text>
        <rect x="720" y="170" width="225" height="110" rx="20" fill="#10273a" stroke="#c8a4ff" strokeWidth="3"/>
        <text x="833" y="205" textAnchor="middle" fill="#d7c2ff" fontSize="17" fontWeight="900">basic route</text>
        <text x="833" y="239" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">[Zn(OH)₄]²⁻</text>
        <path d="M380 225 H290" stroke="#72daf0" strokeWidth="5" markerEnd="url(#p10zn1)"/>
        <path d="M620 225 H710" stroke="#c8a4ff" strokeWidth="5" markerEnd="url(#p10zn2)"/>
        <defs>
          <marker id="p10zn1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#72daf0"/></marker>
          <marker id="p10zn2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#c8a4ff"/></marker>
          <marker id="p10zn3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f2c84b"/></marker>
        </defs>
        <path d="M500 295 V350" stroke="#f2c84b" strokeWidth="5" markerEnd="url(#p10zn3)"/>
        <rect x="295" y="360" width="410" height="82" rx="20" fill="#2d2a17" stroke="#f2c84b" strokeWidth="3"/>
        <text x="500" y="391" textAnchor="middle" fill="#ffe17d" fontSize="17" fontWeight="900">hot ZnO: yellow</text>
        <text x="500" y="417" textAnchor="middle" fill="#f5edc0" fontSize="13" fontWeight="700">oxygen loss → vacancies + electrons → reversible colour centre</text>
        <text x="336" y="214" textAnchor="middle" fill="#6e8ea5" fontSize="13" fontWeight="800">2 H⁺</text>
        <text x="666" y="214" textAnchor="middle" fill="#6e8ea5" fontSize="13" fontWeight="800">2 OH⁻ + H₂O</text>
      </svg>
    </VisualFrame>
  );
}

function CopperNetwork(_: VisualProps) {
  const nodes = [
    { x: 55, y: 80, w: 190, h: 88, t: "Cu metal", s: "oxidation", c: "#e9a55b" },
    { x: 405, y: 55, w: 190, h: 88, t: "Cu₂O", s: "Cu(I), red", c: "#d86f52" },
    { x: 755, y: 80, w: 190, h: 88, t: "CuO", s: "Cu(II), black", c: "#8795a1" },
    { x: 755, y: 300, w: 190, h: 88, t: "Cu²⁺(aq)", s: "blue aqua ion", c: "#55bff2" },
    { x: 405, y: 325, w: 190, h: 88, t: "CuCl", s: "Cu(I), white", c: "#eef4f8" },
    { x: 55, y: 300, w: 190, h: 88, t: "[CuCl₄]²⁻", s: "yellow/green", c: "#d5bd44" },
  ];
  return (
    <VisualFrame title="Copper oxidation-state and ligand network" caption="Copper chemistry is controlled by both oxidation state and ligand environment. Cu(I) is favoured in insoluble CuI/CuCl or strong complexes, whereas hydrated Cu(II) dominates ordinary aerated aqueous solution.">
      <svg viewBox="0 0 1000 470" className="min-w-[830px] w-full" role="img" aria-label="Copper metal copper one copper two and ligand complex reaction network">
        <rect width="1000" height="470" rx="24" fill="#081827"/>
        {nodes.map((n) => <g key={n.t}><rect x={n.x} y={n.y} width={n.w} height={n.h} rx="19" fill="#10273a" stroke={n.c} strokeWidth="3"/><text x={n.x+n.w/2} y={n.y+36} textAnchor="middle" fill="#fff" fontSize="18" fontWeight="900">{n.t}</text><text x={n.x+n.w/2} y={n.y+64} textAnchor="middle" fill={n.c} fontSize="13" fontWeight="800">{n.s}</text></g>)}
        <defs><marker id="p10cu" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#52718a"/></marker></defs>
        <path d="M245 116 H395" stroke="#52718a" strokeWidth="5" markerEnd="url(#p10cu)"/>
        <path d="M595 116 H745" stroke="#52718a" strokeWidth="5" markerEnd="url(#p10cu)"/>
        <path d="M850 178 V290" stroke="#52718a" strokeWidth="5" markerEnd="url(#p10cu)"/>
        <path d="M745 344 H605" stroke="#52718a" strokeWidth="5" markerEnd="url(#p10cu)"/>
        <path d="M395 369 H255" stroke="#52718a" strokeWidth="5" markerEnd="url(#p10cu)"/>
        <path d="M150 290 V178" stroke="#52718a" strokeWidth="5" markerEnd="url(#p10cu)"/>
        <text x="320" y="103" textAnchor="middle" fill="#93adc0" fontSize="12" fontWeight="800">limited O₂</text>
        <text x="670" y="103" textAnchor="middle" fill="#93adc0" fontSize="12" fontWeight="800">O₂ / heat</text>
        <text x="880" y="238" textAnchor="middle" fill="#93adc0" fontSize="12" fontWeight="800">acid</text>
        <text x="675" y="358" textAnchor="middle" fill="#93adc0" fontSize="12" fontWeight="800">reduction + Cl⁻</text>
        <text x="325" y="390" textAnchor="middle" fill="#93adc0" fontSize="12" fontWeight="800">Cl⁻ / oxidation</text>
        <text x="119" y="238" textAnchor="middle" fill="#93adc0" fontSize="12" fontWeight="800">H₂O replaces Cl⁻</text>
      </svg>
    </VisualFrame>
  );
}

function CopperHydration(_: VisualProps) {
  const stages = [
    { x: 45, t: "CuSO₄·5H₂O", s: "blue", c: "#4eb7f1" },
    { x: 285, t: "CuSO₄·3H₂O", s: "pale blue", c: "#87c9e9" },
    { x: 525, t: "CuSO₄·H₂O", s: "bluish white", c: "#bdd6e2" },
    { x: 765, t: "CuSO₄", s: "white", c: "#edf2f5" },
  ];
  return (
    <VisualFrame title="Stepwise dehydration of blue vitriol" caption="The colour fades as coordinated and lattice water is removed. Anhydrous copper(II) sulfate is white and turns blue again on hydration, making it a qualitative indicator of water.">
      <svg viewBox="0 0 1000 330" className="min-w-[820px] w-full" role="img" aria-label="Stepwise dehydration of copper sulfate pentahydrate">
        <rect width="1000" height="330" rx="24" fill="#081827"/>
        {stages.map((n, i) => <g key={n.t}><rect x={n.x} y="110" width="190" height="105" rx="20" fill="#10273a" stroke={n.c} strokeWidth="3"/><circle cx={n.x+34} cy="145" r="15" fill={n.c}/><text x={n.x+105} y="149" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="900">{n.t}</text><text x={n.x+95} y="184" textAnchor="middle" fill={n.c} fontSize="13" fontWeight="800">{n.s}</text>{i<stages.length-1&&<path d={`M${n.x+197} 162 H${stages[i+1].x-8}`} stroke="#57758c" strokeWidth="4" markerEnd="url(#p10hyd)"/>}</g>)}
        <defs><marker id="p10hyd" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#57758c"/></marker></defs>
        <text x="500" y="70" textAnchor="middle" fill="#9cb5c8" fontSize="15" fontWeight="900">controlled heating → progressive loss of water</text>
        <path d="M850 230 C720 290 300 290 140 230" fill="none" stroke="#55d8ef" strokeWidth="4" strokeDasharray="10 8" markerEnd="url(#p10rehyd)"/>
        <defs><marker id="p10rehyd" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#55d8ef"/></marker></defs>
        <text x="500" y="305" textAnchor="middle" fill="#88e8f7" fontSize="14" fontWeight="900">add water → blue hydrated environment restored</text>
      </svg>
    </VisualFrame>
  );
}

function IronNetwork(_: VisualProps) {
  const nodes = [
    { x: 70, y: 75, t: "Fe metal", s: "0", c: "#b8c1c8" },
    { x: 395, y: 55, t: "FeO / Fe²⁺", s: "+2", c: "#79c998" },
    { x: 720, y: 75, t: "Fe₂O₃ / Fe³⁺", s: "+3", c: "#dc8561" },
    { x: 395, y: 310, t: "Fe₃O₄", s: "Fe(II) + Fe(III)", c: "#8f8ca8" },
  ];
  return (
    <VisualFrame title="Iron oxidation-state network" caption="Fe₃O₄ is not an oxide with fractional iron atoms; it is a mixed-valence solid often written FeO·Fe₂O₃. Redox conditions move iron among metal, Fe(II), Fe(III), and the mixed oxide.">
      <svg viewBox="0 0 1000 500" className="min-w-[800px] w-full" role="img" aria-label="Iron zero iron two iron three and magnetite oxidation state network">
        <rect width="1000" height="500" rx="24" fill="#081827"/>
        {nodes.map(n=><g key={n.t}><rect x={n.x} y={n.y} width="210" height="100" rx="22" fill="#10273a" stroke={n.c} strokeWidth="3"/><text x={n.x+105} y={n.y+40} textAnchor="middle" fill="#fff" fontSize="19" fontWeight="900">{n.t}</text><text x={n.x+105} y={n.y+72} textAnchor="middle" fill={n.c} fontSize="14" fontWeight="800">{n.s}</text></g>)}
        <defs><marker id="p10fe" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#58758c"/></marker></defs>
        <path d="M280 125 H385" stroke="#58758c" strokeWidth="5" markerEnd="url(#p10fe)"/>
        <path d="M605 125 H710" stroke="#58758c" strokeWidth="5" markerEnd="url(#p10fe)"/>
        <path d="M805 185 C780 285 650 350 615 360" fill="none" stroke="#58758c" strokeWidth="5" markerEnd="url(#p10fe)"/>
        <path d="M500 300 V190" stroke="#58758c" strokeWidth="5" markerEnd="url(#p10fe)"/>
        <path d="M395 360 C290 340 200 240 195 185" fill="none" stroke="#58758c" strokeWidth="5" markerEnd="url(#p10fe)"/>
        <text x="335" y="110" textAnchor="middle" fill="#93adc0" fontSize="13" fontWeight="800">acid / oxidation</text>
        <text x="660" y="110" textAnchor="middle" fill="#93adc0" fontSize="13" fontWeight="800">oxidation</text>
        <text x="795" y="285" textAnchor="middle" fill="#93adc0" fontSize="13" fontWeight="800">partial reduction</text>
        <text x="525" y="250" textAnchor="middle" fill="#93adc0" fontSize="13" fontWeight="800">disproportionation / oxidation</text>
        <text x="245" y="315" textAnchor="middle" fill="#93adc0" fontSize="13" fontWeight="800">reduction</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "silver": SilverAtlas,
  "zinc": ZincNetwork,
  "copper": CopperNetwork,
  "hydration": CopperHydration,
  "iron": IronNetwork,
};

const PAGES: PageBlock[] = [
{
  id: "overview",
  label: "Compound chemistry map",
  visual: "silver",
  markdown: String.raw`# Part 10 — Important Compounds of Silver, Zinc, Copper and Iron

The general trends of the d-block become chemically useful only when they are applied to real substances. This part develops four **reaction families** rather than presenting isolated equations:

1. **Silver:** noble-metal behaviour, tarnishing, silver nitrate, silver oxides and silver halides.
2. **Zinc:** the chemistry of a filled $d^{10}$ ion, amphoteric zinc oxide, zinc chloride and zinc sulfate.
3. **Copper:** interconversion of Cu(0), Cu(I) and Cu(II), oxides, chlorides and hydrated copper sulfate.
4. **Iron:** Fe(II), Fe(III), mixed-valence oxides, ferrous sulfate, Mohr's salt and ferric chloride.

## A common method for studying a compound

For every compound, separate six questions:

| Question | What must be identified |
|---|---|
| How is it prepared? | Starting material, reagent, temperature and atmosphere |
| What oxidation state is present? | Metal oxidation number and $d$-electron count |
| What does it look like? | Colour, hydration state, precipitate or gas |
| How does it react? | Acid–base, redox, complexation or thermal pathway |
| Why is the reaction favoured? | Insolubility, lattice formation, complex stability or redox potential |
| What changes with conditions? | Medium, ligand, concentration, light and temperature |

> **Chemical discipline:** A colour belongs to a specified species under specified conditions. “Copper is blue” and “iron is brown” are not chemically acceptable statements.

## High-yield colour and observation atlas

| Species or change | Characteristic observation | Chemical meaning |
|---|---|---|
| $\mathrm{AgCl}$ | white precipitate | silver(I) halide |
| $\mathrm{AgBr}$ | pale cream precipitate | more covalent and less ammonia-soluble |
| $\mathrm{AgI}$ | yellow precipitate | most covalent; insoluble in ammonia |
| hot $\mathrm{ZnO}$ | yellow, returning to white on cooling | reversible defect-related colour |
| $\mathrm{Cu_2O}$ | red solid | copper(I) oxide |
| $\mathrm{CuO}$ | black solid | copper(II) oxide |
| $\mathrm{CuSO_4\cdot5H_2O}$ | blue crystals | hydrated Cu(II) environment |
| anhydrous $\mathrm{CuSO_4}$ | white | water removed |
| $\mathrm{Fe(OH)_2}$ | dirty green precipitate | Fe(II), readily oxidised |
| $\mathrm{Fe(OH)_3}$ | reddish-brown precipitate | Fe(III) hydroxide/oxyhydroxide |`,
},
{
  id: "silver-metal",
  label: "Silver metal and silver nitrate",
  visual: "",
  markdown: String.raw`# Silver: metal reactivity and silver nitrate

Silver is a late d-block metal whose standard reduction potential is positive. It therefore resists oxidation by dilute non-oxidising acids. Its apparent inertness is nevertheless conditional: oxidising acids, sulfur-containing gases, cyanide in the presence of oxygen, and light-sensitive halide chemistry all produce important reactions.

## Tarnishing of silver

Silver objects slowly darken in air containing traces of hydrogen sulfide. In moist oxygen, a thin black film of silver sulfide forms:

$$
\mathrm{4Ag + 2H_2S + O_2 \longrightarrow 2Ag_2S + 2H_2O}
$$

This is **surface corrosion**, not a conversion of the entire object. The black appearance comes from the very dark sulfide layer.

## Behaviour toward acids

| Reagent | Main behaviour |
|---|---|
| dilute HCl or dilute $\mathrm{H_2SO_4}$ | no ordinary hydrogen displacement |
| hot concentrated $\mathrm{H_2SO_4}$ | silver is oxidised; $\mathrm{SO_2}$ is evolved |
| dilute $\mathrm{HNO_3}$ | nitrate forms, usually with NO |
| concentrated $\mathrm{HNO_3}$ | nitrate forms with $\mathrm{NO_2}$ |
| aqua regia | an impervious AgCl coating can hinder further attack |

Representative nitrate-forming equations are:

$$
\mathrm{3Ag + 4HNO_3(dil.) \longrightarrow 3AgNO_3 + NO + 2H_2O}
$$

$$
\mathrm{Ag + 2HNO_3(conc.) \longrightarrow AgNO_3 + NO_2 + H_2O}
$$

## Complex-assisted oxidation by cyanide

Silver can dissolve in cyanide solution when oxygen is available because the product $\mathrm{[Ag(CN)_2]^-}$ is strongly stabilised:

$$
\mathrm{4Ag + 8CN^- + O_2 + 2H_2O \longrightarrow 4[Ag(CN)_2]^- + 4OH^-}
$$

The ligand removes free $\mathrm{Ag^+}$ from solution, allowing oxidation of more metal.

## Silver nitrate — “lunar caustic”

Silver nitrate is obtained by dissolving silver in nitric acid and crystallising the solution. It is colourless and water-soluble. Contact with skin leads to darkening because light and organic matter ultimately produce finely divided silver.

On strong heating:

$$
\mathrm{2AgNO_3 \xrightarrow{\Delta} 2Ag + 2NO_2 + O_2}
$$

The metal is left as a dark finely divided residue. This unusual decomposition is consistent with the relatively low stability of silver oxide at high temperature.

## Formation of silver oxide

Adding alkali to a silver(I) solution does not give a persistent $\mathrm{AgOH}$ precipitate. Dehydration gives silver(I) oxide:

$$
\mathrm{2Ag^+ + 2OH^- \longrightarrow Ag_2O(s) + H_2O}
$$

$\mathrm{Ag_2O}$ is brown to black and dissolves in acids or in ammonia by complex formation.`,
},
{
  id: "silver-halides",
  label: "Silver halides and analytical chemistry",
  visual: "silver",
  markdown: String.raw`# Silver halides, light sensitivity and complex formation

Silver nitrate is an exceptionally useful source of $\mathrm{Ag^+}$ because many silver salts are sparingly soluble and have distinctive colours.

## Halide precipitation

$$
\mathrm{Ag^+ + X^- \longrightarrow AgX(s)}
\qquad (X = Cl, Br, I)
$$

| Halide | Precipitate | Dilute $\mathrm{NH_3}$ | Concentrated $\mathrm{NH_3}$ | Thiosulfate |
|---|---|---|---|---|
| $\mathrm{AgCl}$ | white | dissolves | dissolves | dissolves |
| $\mathrm{AgBr}$ | pale cream | little or no dissolution | dissolves appreciably | dissolves |
| $\mathrm{AgI}$ | yellow | insoluble | insoluble | dissolves with sufficient thiosulfate |

### Why ammonia distinguishes them

Dissolution of AgCl is driven by formation of the diamminesilver(I) ion:

$$
\mathrm{AgCl(s) + 2NH_3(aq) \rightleftharpoons [Ag(NH_3)_2]^+ + Cl^-}
$$

The competition is between the lattice of $\mathrm{AgX}$ and complex formation. From chloride to iodide the lattice/soft-soft bonding contribution makes dissolution progressively less favourable.

### Why photographic fixer dissolves silver halides

Thiosulfate forms a soluble complex:

$$
\mathrm{AgX(s) + 2S_2O_3^{2-} \longrightarrow [Ag(S_2O_3)_2]^{3-} + X^-}
$$

This reaction removes unexposed silver halide in photographic processing.

## Photosensitivity

Absorbed light can promote electron transfer within a silver halide crystal. Tiny silver clusters form first and act as a latent image. The oversimplified overall representation is:

$$
\mathrm{2AgX \xrightarrow{h\nu} 2Ag + X_2}
$$

Real photographic chemistry involves crystal defects, electron traps and development chemistry; the equation is a net summary rather than a one-step molecular mechanism.

## Other useful silver precipitates

| Anion | Silver salt | Observation |
|---|---|---|
| $\mathrm{CO_3^{2-}}$ | $\mathrm{Ag_2CO_3}$ | pale yellow |
| $\mathrm{PO_4^{3-}}$ | $\mathrm{Ag_3PO_4}$ | yellow |
| $\mathrm{CrO_4^{2-}}$ | $\mathrm{Ag_2CrO_4}$ | brick red |
| $\mathrm{S^{2-}}$ | $\mathrm{Ag_2S}$ | black |
| $\mathrm{C_2O_4^{2-}}$ | $\mathrm{Ag_2C_2O_4}$ | pale precipitate |

> **Interpretation rule:** Precipitation is controlled by solubility product, but observed selectivity also depends on pH, competing complexing ligands and reagent concentration.`,
},
{
  id: "zinc-oxide",
  label: "Zinc oxide and amphoterism",
  visual: "zinc",
  markdown: String.raw`# Zinc oxide: preparation, amphoterism and reversible colour change

Zinc is a d-block element but $\mathrm{Zn^{2+}}$ is $3d^{10}$. Its common compounds lack the variable oxidation states and ordinary $d$–$d$ colour of typical transition ions. Zinc chemistry is instead dominated by the stable +2 state, amphoterism and complex formation.

## Preparation of zinc oxide

Zinc oxide can be made through several routes:

$$
\mathrm{2Zn + O_2 \longrightarrow 2ZnO}
$$

$$
\mathrm{ZnCO_3 \xrightarrow{\Delta} ZnO + CO_2}
$$

$$
\mathrm{Zn(OH)_2 \xrightarrow{\Delta} ZnO + H_2O}
$$

$$
\mathrm{2Zn(NO_3)_2 \xrightarrow{\Delta} 2ZnO + 4NO_2 + O_2}
$$

Industrial roasting of zinc sulfide initially produces oxide and sulfur dioxide:

$$
\mathrm{2ZnS + 3O_2 \longrightarrow 2ZnO + 2SO_2}
$$

## Amphoteric character

Zinc oxide reacts with acids as a basic oxide:

$$
\mathrm{ZnO + 2H^+ \longrightarrow Zn^{2+} + H_2O}
$$

It also reacts with strong base, where hydroxo complex formation drives dissolution:

$$
\mathrm{ZnO + 2OH^- + H_2O \longrightarrow [Zn(OH)_4]^{2-}}
$$

The school-level formula $\mathrm{Na_2ZnO_2}$ is sometimes used for a solid zincate composition, but in aqueous strong alkali the tetrahydroxozincate description is chemically more informative.

## White when cold, yellow when hot

Pure zinc oxide is white at room temperature. On heating it becomes yellow and on cooling returns to white. Heating promotes slight oxygen loss:

$$
\mathrm{ZnO \longrightarrow ZnO_{1-x} + \frac{x}{2}O_2}
$$

Oxygen vacancies and electrons associated with the defect alter light absorption. This is a reversible **non-stoichiometric defect effect**, not a change of zinc from +2 to a different stable oxidation state.

## Reduction

At elevated temperature, zinc oxide can be reduced:

$$
\mathrm{ZnO + H_2 \longrightarrow Zn + H_2O}
$$

$$
\mathrm{ZnO + C \longrightarrow Zn + CO}
$$

Because zinc is volatile near extraction temperatures, industrial zinc production requires careful control of vapour condensation and reoxidation.

## Rinmann's green

A small amount of cobalt compound heated with ZnO can form a green cobalt–zinc oxide material. The colour belongs to cobalt in an oxide lattice; it is not a $d$–$d$ colour of $\mathrm{Zn^{2+}}$ itself.`,
},
{
  id: "zinc-salts",
  label: "Zinc chloride and zinc sulfate",
  visual: "",
  markdown: String.raw`# Zinc chloride and zinc sulfate

## Zinc chloride, $\mathrm{ZnCl_2}$

### Preparation

Anhydrous zinc chloride can be prepared by direct combination:

$$
\mathrm{Zn + Cl_2 \longrightarrow ZnCl_2}
$$

In aqueous work it is commonly produced from zinc or zinc oxide and hydrochloric acid:

$$
\mathrm{Zn + 2HCl \longrightarrow ZnCl_2 + H_2}
$$

$$
\mathrm{ZnO + 2HCl \longrightarrow ZnCl_2 + H_2O}
$$

### Deliquescence and hydrolysis

$\mathrm{ZnCl_2}$ strongly attracts water and is highly soluble. Hydrated material cannot always be dehydrated simply by heating because hydrolysis can produce basic zinc chloride and HCl. This explains why preparation of truly anhydrous chloride requires conditions that suppress hydrolysis.

Its aqueous solution is acidic because hydrated $\mathrm{Zn^{2+}}$ polarises O–H bonds:

$$
\mathrm{[Zn(H_2O)_6]^{2+} + H_2O \rightleftharpoons [Zn(H_2O)_5OH]^+ + H_3O^+}
$$

### Reactions with bases and ligands

$$
\mathrm{Zn^{2+} + 2OH^- \longrightarrow Zn(OH)_2(s)}
$$

$$
\mathrm{Zn(OH)_2 + 2OH^- \longrightarrow [Zn(OH)_4]^{2-}}
$$

With excess ammonia, the precipitate can dissolve through an ammine complex:

$$
\mathrm{Zn^{2+} + 4NH_3 \rightleftharpoons [Zn(NH_3)_4]^{2+}}
$$

Anhydrous $\mathrm{ZnCl_2}$ is a Lewis acid and a dehydrating/condensing reagent. It is also used in fluxes and wood preservation formulations.

## Zinc sulfate, $\mathrm{ZnSO_4}$

Preparation routes include:

$$
\mathrm{Zn + H_2SO_4(dil.) \longrightarrow ZnSO_4 + H_2}
$$

$$
\mathrm{ZnO + H_2SO_4 \longrightarrow ZnSO_4 + H_2O}
$$

$$
\mathrm{ZnCO_3 + H_2SO_4 \longrightarrow ZnSO_4 + CO_2 + H_2O}
$$

It crystallises commonly as $\mathrm{ZnSO_4\cdot7H_2O}$, traditionally called **white vitriol**. Stepwise heating removes water before strong heating decomposes the sulfate:

$$
\mathrm{ZnSO_4 \xrightarrow{\Delta} ZnO + SO_3}
$$

At sufficiently high temperature, $\mathrm{SO_3}$ can itself be represented as giving $\mathrm{SO_2}$ and oxygen.

## Lithopone

Mixing zinc sulfate and barium sulfide precipitates a white pigment mixture of $\mathrm{ZnS}$ and $\mathrm{BaSO_4}$:

$$
\mathrm{ZnSO_4 + BaS \longrightarrow ZnS(s) + BaSO_4(s)}
$$

The useful opacity arises from the finely divided insoluble solids rather than from a new single stoichiometric compound.`,
},
{
  id: "copper-oxides",
  label: "Copper oxides and chlorides",
  visual: "copper",
  markdown: String.raw`# Copper oxides and chlorides

Copper commonly occurs as Cu(I), $3d^{10}$, and Cu(II), $3d^9$. Which state is observed depends strongly on ligand, lattice and redox environment.

## Copper(I) oxide, $\mathrm{Cu_2O}$

$\mathrm{Cu_2O}$ is red. Limited oxidation of copper can produce it:

$$
\mathrm{4Cu + O_2 \longrightarrow 2Cu_2O}
$$

It is also obtained in reducing tests where an alkaline Cu(II) complex is reduced by an aldehyde or reducing sugar. In acid, Cu(I) is unstable in ordinary aqueous solution and disproportionation becomes important:

$$
\mathrm{2Cu^+ \rightleftharpoons Cu^{2+} + Cu}
$$

The equilibrium is shifted toward Cu(I) when an insoluble solid such as CuI or a strongly bound Cu(I) complex forms.

## Copper(II) oxide, $\mathrm{CuO}$

$\mathrm{CuO}$ is black. Preparations include:

$$
\mathrm{2Cu + O_2 \longrightarrow 2CuO}
$$

$$
\mathrm{Cu(OH)_2 \xrightarrow{\Delta} CuO + H_2O}
$$

$$
\mathrm{CuCO_3\cdot Cu(OH)_2 \xrightarrow{\Delta} 2CuO + CO_2 + H_2O}
$$

$$
\mathrm{2Cu(NO_3)_2 \xrightarrow{\Delta} 2CuO + 4NO_2 + O_2}
$$

It dissolves in acids:

$$
\mathrm{CuO + 2H^+ \longrightarrow Cu^{2+} + H_2O}
$$

and is reduced by hydrogen or carbon monoxide on heating:

$$
\mathrm{CuO + H_2 \longrightarrow Cu + H_2O}
$$

## Copper(I) chloride, $\mathrm{CuCl}$

CuCl is a white solid, usually protected from air because oxidation can occur. A convenient preparation uses copper metal to reduce copper(II) chloride:

$$
\mathrm{CuCl_2 + Cu \longrightarrow 2CuCl}
$$

CuCl dissolves in excess chloride or ammonia because Cu(I) complexes form. In air these solutions may oxidise to Cu(II).

## Copper(II) chloride, $\mathrm{CuCl_2}$

Anhydrous $\mathrm{CuCl_2}$ is yellow-brown, while hydrated forms and dilute aqueous solutions appear green to blue depending on water/chloride balance. In water, hydrated Cu(II) species dominate. Adding concentrated chloride shifts ligand substitution toward $\mathrm{[CuCl_4]^{2-}}$, giving yellow-green colour.

A useful simplified equilibrium is:

$$
\mathrm{[Cu(H_2O)_6]^{2+} + 4Cl^- \rightleftharpoons [CuCl_4]^{2-} + 6H_2O}
$$

The exact aqueous coordination sphere is dynamic; the formula represents the dominant limiting environments rather than rigid isolated molecules in every solution.`,
},
{
  id: "copper-sulfate",
  label: "Copper sulfate and Cu(I)/Cu(II) reactions",
  visual: "hydration",
  markdown: String.raw`# Copper sulfate, hydration and analytical reactions

## Preparation of copper(II) sulfate

Copper does not liberate hydrogen from dilute sulfuric acid, but oxide, carbonate or hot concentrated acid can be used:

$$
\mathrm{CuO + H_2SO_4 \longrightarrow CuSO_4 + H_2O}
$$

$$
\mathrm{CuCO_3 + H_2SO_4 \longrightarrow CuSO_4 + CO_2 + H_2O}
$$

$$
\mathrm{Cu + 2H_2SO_4(conc.) \longrightarrow CuSO_4 + SO_2 + 2H_2O}
$$

## Blue vitriol and stepwise dehydration

Copper(II) sulfate commonly crystallises as $\mathrm{CuSO_4\cdot5H_2O}$. Not all five water molecules occupy identical structural roles, so dehydration occurs in stages:

$$
\mathrm{CuSO_4\cdot5H_2O \xrightarrow{\Delta} CuSO_4\cdot3H_2O + 2H_2O}
$$

$$
\mathrm{CuSO_4\cdot3H_2O \xrightarrow{\Delta} CuSO_4\cdot H_2O + 2H_2O}
$$

$$
\mathrm{CuSO_4\cdot H_2O \xrightarrow{\Delta} CuSO_4 + H_2O}
$$

Blue crystals become progressively paler and finally white. Adding water restores the hydrated Cu(II) environment and blue colour. Thus anhydrous copper sulfate can indicate the presence of water, but it is not a selective quantitative test in an arbitrary chemical mixture.

On very strong heating:

$$
\mathrm{CuSO_4 \xrightarrow{\Delta} CuO + SO_3}
$$

## Reaction with ammonia

A small amount of alkali or ammonia can first precipitate pale blue $\mathrm{Cu(OH)_2}$:

$$
\mathrm{Cu^{2+} + 2OH^- \longrightarrow Cu(OH)_2(s)}
$$

In excess ammonia, deep-blue ammine complex formation dissolves the precipitate. A common representation is:

$$
\mathrm{[Cu(H_2O)_6]^{2+} + 4NH_3 \rightleftharpoons [Cu(NH_3)_4(H_2O)_2]^{2+} + 4H_2O}
$$

This formula is more informative than writing a bare $\mathrm{[Cu(NH_3)_4]^{2+}}$ because axial water ligands remain relevant in the usual aqueous complex.

## Reaction with iodide

Iodide reduces Cu(II) to Cu(I), while insoluble CuI removes Cu(I) from solution:

$$
\mathrm{2Cu^{2+} + 4I^- \longrightarrow 2CuI(s) + I_2}
$$

The iodine can be titrated with thiosulfate:

$$
\mathrm{I_2 + 2S_2O_3^{2-} \longrightarrow 2I^- + S_4O_6^{2-}}
$$

This coupled precipitation–redox reaction is more favourable than a prediction based only on the isolated $\mathrm{Cu^{2+}/Cu^+}$ couple.`,
},
{
  id: "iron-oxides",
  label: "Iron oxides and mixed valence",
  visual: "iron",
  markdown: String.raw`# Iron oxides: FeO, Fe₂O₃ and Fe₃O₄

Iron readily accesses +2 and +3. The oxide obtained depends on oxygen supply, temperature and redox atmosphere.

## Iron(II) oxide, FeO

FeO is black and strongly non-stoichiometric, better represented as $\mathrm{Fe_{1-x}O}$. It can be prepared by thermal decomposition of iron(II) oxalate in the absence of air:

$$
\mathrm{FeC_2O_4 \xrightarrow{\Delta} FeO + CO + CO_2}
$$

Perfect stoichiometric FeO is difficult to isolate at room temperature. Slow cooling can lead to disproportionation:

$$
\mathrm{4FeO \longrightarrow Fe_3O_4 + Fe}
$$

Metal vacancies are charge-compensated by converting some Fe(II) to Fe(III), linking FeO chemistry to the defect discussion of Part 7.

## Iron(III) oxide, Fe₂O₃

$\mathrm{Fe_2O_3}$ is red-brown. It occurs naturally as haematite and can be formed by heating iron(III) hydroxide:

$$
\mathrm{2Fe(OH)_3 \xrightarrow{\Delta} Fe_2O_3 + 3H_2O}
$$

It is reduced stepwise by carbon monoxide in iron metallurgy. A laboratory thermite reaction illustrates the large affinity of aluminium for oxygen:

$$
\mathrm{Fe_2O_3 + 2Al \longrightarrow Al_2O_3 + 2Fe}
$$

This reaction is highly exothermic after ignition.

## Magnetite, Fe₃O₄

Magnetite is black and ferrimagnetic. It is often written:

$$
\mathrm{Fe_3O_4 = FeO\cdot Fe_2O_3}
$$

This notation communicates mixed Fe(II)/Fe(III) character; it is not meant to imply a loose physical mixture of the two oxides. In an inverse spinel description, iron occupies both tetrahedral and octahedral sites, and electron exchange between Fe(II) and Fe(III) contributes to conductivity.

Formation under limited oxygen:

$$
\mathrm{3Fe + 2O_2 \longrightarrow Fe_3O_4}
$$

Steam oxidises hot iron:

$$
\mathrm{3Fe + 4H_2O(g) \longrightarrow Fe_3O_4 + 4H_2}
$$

## Comparison

| Oxide | Formal iron state | Colour | Important idea |
|---|---|---|---|
| $\mathrm{Fe_{1-x}O}$ | mainly +2 with some +3 | black | metal-deficient, non-stoichiometric |
| $\mathrm{Fe_2O_3}$ | +3 | red-brown | haematite; thermite reactant |
| $\mathrm{Fe_3O_4}$ | +2 and +3 | black | mixed valence; ferrimagnetic |`,
},
{
  id: "iron-salts",
  label: "Ferrous and ferric salts",
  visual: "",
  markdown: String.raw`# Ferrous sulfate, Mohr's salt and iron chlorides

## Iron(II) sulfate — green vitriol

Iron(II) sulfate is prepared by dissolving iron in dilute sulfuric acid:

$$
\mathrm{Fe + H_2SO_4(dil.) \longrightarrow FeSO_4 + H_2}
$$

It crystallises as pale-green $\mathrm{FeSO_4\cdot7H_2O}$. The hydrated salt loses water on heating; stronger heating decomposes anhydrous sulfate:

$$
\mathrm{2FeSO_4 \xrightarrow{\Delta} Fe_2O_3 + SO_2 + SO_3}
$$

Fe(II) is a reducing state. In acid it is oxidised quantitatively by permanganate or dichromate:

$$
\mathrm{5Fe^{2+} + MnO_4^- + 8H^+ \longrightarrow 5Fe^{3+} + Mn^{2+} + 4H_2O}
$$

$$
\mathrm{6Fe^{2+} + Cr_2O_7^{2-} + 14H^+ \longrightarrow 6Fe^{3+} + 2Cr^{3+} + 7H_2O}
$$

In air, neutral Fe(II) solutions oxidise and may form basic Fe(III) products. Acidification slows hydrolysis and helps preserve Fe(II).

## Mohr's salt

Mohr's salt is the double salt:

$$
\mathrm{(NH_4)_2Fe(SO_4)_2\cdot6H_2O}
$$

It gives $\mathrm{NH_4^+}$, $\mathrm{Fe^{2+}}$ and $\mathrm{SO_4^{2-}}$ in water; therefore it is a **double salt**, not a coordination complex. It is more resistant to aerial oxidation than simple ferrous sulfate crystals and is useful as a reliable source of Fe(II) in volumetric analysis.

## Iron(II) chloride

Preparation:

$$
\mathrm{Fe + 2HCl \longrightarrow FeCl_2 + H_2}
$$

FeCl₂ solutions are pale green and oxidise in air. Alkali gives dirty-green Fe(OH)₂:

$$
\mathrm{Fe^{2+} + 2OH^- \longrightarrow Fe(OH)_2(s)}
$$

Aerial oxidation changes it to brown Fe(III) oxyhydroxide/hydroxide products.

## Iron(III) chloride

Anhydrous FeCl₃ can be made by chlorinating iron:

$$
\mathrm{2Fe + 3Cl_2 \longrightarrow 2FeCl_3}
$$

or oxidising FeCl₂:

$$
\mathrm{2FeCl_2 + Cl_2 \longrightarrow 2FeCl_3}
$$

FeCl₃ is a Lewis acid and hydrolyses strongly in water, so its solutions are acidic. The hydrated Fe(III) ion can be represented by:

$$
\mathrm{[Fe(H_2O)_6]^{3+} + H_2O \rightleftharpoons [Fe(H_2O)_5OH]^{2+} + H_3O^+}
$$

Fe(III) oxidises iodide:

$$
\mathrm{2Fe^{3+} + 2I^- \longrightarrow 2Fe^{2+} + I_2}
$$

The direction is consistent with Fe(III) accepting an electron to reach Fe(II).`,
},
{
  id: "iron-tests",
  label: "Qualitative tests and final networks",
  visual: "iron",
  markdown: String.raw`# Qualitative identification of Fe(II) and Fe(III)

No single colour test should be interpreted without considering ligand, pH and oxidation by air.

## Hydroxide tests

$$
\mathrm{Fe^{2+} + 2OH^- \longrightarrow Fe(OH)_2(s)}
$$

Dirty-green Fe(OH)₂ rapidly darkens and becomes brown on oxidation.

$$
\mathrm{Fe^{3+} + 3OH^- \longrightarrow Fe(OH)_3(s)}
$$

Fe(OH)₃ is reddish-brown and gelatinous.

## Thiocyanate test for Fe(III)

Fe(III) gives an intense blood-red family of thiocyanato complexes:

$$
\mathrm{Fe^{3+} + SCN^- \rightleftharpoons [FeSCN]^{2+}}
$$

The one-ligand formula is a convenient limiting representation; actual solutions can contain several species depending on concentration and medium. Fe(II) does not give the same intense red response unless it is first oxidised.

## Hexacyanidoferrate tests

Traditional qualitative analysis uses:

- Fe(III) with hexacyanidoferrate(II) (“ferrocyanide”) to produce Prussian blue.
- Fe(II) with hexacyanidoferrate(III) (“ferricyanide”) to produce Turnbull's blue.

Modern structural analysis shows that the blue products belong to closely related mixed-valence iron–cyanide frameworks rather than two completely unrelated substances. For JEE-level reasoning, the essential feature is **electron transfer plus formation of an extended insoluble cyanide lattice**.

## Reaction-network summary

| Metal family | Dominant controlling idea | Diagnostic transformation |
|---|---|---|
| Ag(I) | precipitation and soft-ligand complexation | $\mathrm{AgX \rightleftharpoons}$ soluble Ag complex |
| Zn(II) | $d^{10}$ stability and amphoterism | $\mathrm{Zn(OH)_2 \rightleftharpoons [Zn(OH)_4]^{2-}}$ |
| Cu(I)/Cu(II) | ligand and lattice control redox state | $\mathrm{2Cu^{2+}+4I^-\to2CuI+I_2}$ |
| Fe(II)/Fe(III) | accessible one-electron redox pair | $\mathrm{Fe^{2+}\rightleftharpoons Fe^{3+}+e^-}$ |

## Final synthesis

The four element families illustrate four different ways in which d-block chemistry is organised:

- **Silver:** a noble metal whose ion is recognised through sparingly soluble salts and strong complexes.
- **Zinc:** a d-block but non-transition metal dominated by one $d^{10}$ oxidation state.
- **Copper:** two common oxidation states whose relative stability is changed by insolubility and ligands.
- **Iron:** a robust Fe(II)/Fe(III) redox system linked to mixed-valence solid oxides.

> **Revision principle:** Never memorise a reaction in isolation. Attach it to oxidation state, ligand, medium, solubility and observation.`,
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

export default function DBlockPart10() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 10
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Compounds of Silver, Zinc, Copper and Iron</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">Reaction networks, preparations, thermal behaviour, colours, complexes and qualitative analysis</p>
        </header>

        <DBlockPartNavigation part={10} position="top" />

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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 10 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={createMarkdownComponents(10)}>
                  {page.markdown}
                </ReactMarkdown>
                {Visual ? <Visual /> : null}
              </section>
            );
          })}
        </div>
        <DBlockPartNavigation part={10} position="bottom" />
      </div>
    </main>
  );
}
