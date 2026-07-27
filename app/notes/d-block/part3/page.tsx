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


function MetallicBondVisual(_: VisualProps) {
  return (
    <VisualFrame title="Cohesion from ns and d electrons" caption="Transition-metal cohesion is not a collection of local two-electron bonds. Delocalised ns and d states broaden into bands; the strength depends on band filling, orbital overlap, lattice and electron correlation.">
      <svg viewBox="0 0 980 410" className="min-w-[760px] w-full" role="img" aria-label="Delocalised s and d electrons forming metallic bands">
        <rect width="980" height="410" rx="24" fill="#081827"/>
        {[140,330,520,710].map((x,i)=><g key={x}><circle cx={x} cy="205" r="58" fill="#132e45" stroke={i%2?"#b69aff":"#55d8ef"} strokeWidth="3"/><text x={x} y="213" textAnchor="middle" fill="#f0fbff" fontSize="22" fontWeight="900">M</text></g>)}
        {Array.from({length:18}).map((_,i)=>{
          const x=75+i*48, y=125+Math.sin(i*1.1)*70;
          return <g key={i}><circle cx={x} cy={y} r={i%3===0?9:6} fill={i%2?"#f2b84b":"#55d8ef"}/><path d={`M${x-18} ${y+25} C${x} ${y+5},${x+15} ${y+5},${x+30} ${y+25}`} fill="none" stroke="#536f84" strokeWidth="2"/></g>
        })}
        <path d="M85 315 C260 265,720 365,895 295" fill="none" stroke="#b69aff" strokeWidth="5"/>
        <text x="490" y="365" textAnchor="middle" fill="#dcecf7" fontSize="17" fontWeight="800">Partly filled d band + broad ns band → strong, composition-dependent cohesion</text>
      </svg>
    </VisualFrame>
  );
}

function MeltingGraph(_: VisualProps) {
  const labels=["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn"];
  const vals=[1539,1667,1915,1903,1244,1535,1495,1453,1083,419];
  const x=(i:number)=>75+i*88;
  const y=(v:number)=>345-v/7.3;
  const path=vals.map((v,i)=>`${i?"L":"M"}${x(i)} ${y(v)}`).join(" ");
  return (
    <VisualFrame title="Melting-point landscape of the 3d row" caption="A centre-of-row maximum is visible, but Mn is a major anomaly and the fall towards Zn is steep. Do not replace the data with a perfectly smooth ‘unpaired-electron’ curve.">
      <svg viewBox="0 0 980 410" className="min-w-[760px] w-full" role="img" aria-label="Melting point graph from Sc to Zn">
        <rect width="980" height="410" rx="24" fill="#081827"/>
        {[0,500,1000,1500,2000].map(v=><g key={v}><line x1="58" y1={y(v)} x2="930" y2={y(v)} stroke="#1e3a4f"/><text x="48" y={y(v)+5} textAnchor="end" fill="#7893a8" fontSize="12">{v}</text></g>)}
        <path d={path} fill="none" stroke="#55d8ef" strokeWidth="5"/>
        <path d={`${path} L${x(9)} 345 L${x(0)} 345 Z`} fill="rgba(85,216,239,0.10)"/>
        {vals.map((v,i)=><g key={labels[i]}><circle cx={x(i)} cy={y(v)} r="7" fill={i===4||i===9?"#f2b84b":"#b69aff"}/><text x={x(i)} y="372" textAnchor="middle" fill="#d8e7f1" fontSize="14" fontWeight="700">{labels[i]}</text><text x={x(i)} y={y(v)-12} textAnchor="middle" fill="#9cecff" fontSize="11">{v}</text></g>)}
        <text x="22" y="220" fill="#9bb1c2" fontSize="13" transform="rotate(-90 22 220)">Melting point / °C</text>
      </svg>
    </VisualFrame>
  );
}

function AqueousCycleVisual(_: VisualProps) {
  return (
    <VisualFrame title="The thermochemical route behind M²⁺/M" caption="A standard electrode potential is the outcome of several competing energy terms. Atomisation and ionisation oppose ion formation; hydration stabilises the aqueous ion.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Thermochemical cycle from solid metal to aqueous divalent ion">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        <line x1="95" y1="340" x2="885" y2="340" stroke="#39556c" strokeWidth="2"/>
        <g><rect x="70" y="290" width="190" height="72" rx="16" fill="#123047" stroke="#55d8ef"/><text x="165" y="322" textAnchor="middle" fill="#e9fbff" fontSize="18" fontWeight="800">M(s)</text><text x="165" y="346" textAnchor="middle" fill="#a9c7d8" fontSize="13">metal lattice</text></g>
        <g><rect x="315" y="205" width="190" height="72" rx="16" fill="#2e263f" stroke="#b69aff"/><text x="410" y="237" textAnchor="middle" fill="#f2edff" fontSize="18" fontWeight="800">M(g)</text><text x="410" y="261" textAnchor="middle" fill="#cabee0" fontSize="13">atomised gas</text></g>
        <g><rect x="555" y="85" width="190" height="72" rx="16" fill="#3a2f20" stroke="#f2b84b"/><text x="650" y="117" textAnchor="middle" fill="#fff4d6" fontSize="18" fontWeight="800">M²⁺(g)</text><text x="650" y="141" textAnchor="middle" fill="#e8d29e" fontSize="13">two ionisations</text></g>
        <g><rect x="735" y="245" width="190" height="72" rx="16" fill="#164635" stroke="#66e2a8"/><text x="830" y="277" textAnchor="middle" fill="#effff6" fontSize="18" fontWeight="800">M²⁺(aq)</text><text x="830" y="301" textAnchor="middle" fill="#bae9cf" fontSize="13">hydrated ion</text></g>
        <path d="M260 307 C280 270,290 250,315 245" fill="none" stroke="#55d8ef" strokeWidth="5" markerEnd="url(#p3a)"/>
        <path d="M505 220 C535 170,540 135,555 125" fill="none" stroke="#b69aff" strokeWidth="5" markerEnd="url(#p3b)"/>
        <path d="M745 130 C800 150,830 195,830 245" fill="none" stroke="#66e2a8" strokeWidth="5" markerEnd="url(#p3c)"/>
        <defs>
          <marker id="p3a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#55d8ef"/></marker>
          <marker id="p3b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#b69aff"/></marker>
          <marker id="p3c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#66e2a8"/></marker>
        </defs>
        <text x="285" y="280" fill="#9cecff" fontSize="13" fontWeight="800">ΔHₐ &gt; 0</text>
        <text x="525" y="170" fill="#d6c7ff" fontSize="13" fontWeight="800">IE₁ + IE₂ &gt; 0</text>
        <text x="790" y="190" fill="#bdf2d5" fontSize="13" fontWeight="800">ΔHhyd &lt; 0</text>
        <text x="490" y="400" textAnchor="middle" fill="#91a9ba" fontSize="14">Reduction potential measures the reverse tendency under electrochemical standard conditions.</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "bond": MetallicBondVisual,
  "melting": MeltingGraph,
  "cycle": AqueousCycleVisual,
};

const PAGES: PageBlock[] = [
{
  id: "metallic-bond",
  label: "Metallic bonding and atomisation",
  visual: "bond",
  markdown: String.raw`# Metallic bonding in transition metals

Transition metals are usually hard, strong, lustrous conductors with high tensile strength. Their cohesion is stronger than that of many neighbouring s-block metals because both the outer ns electrons and a variable fraction of the $(n-1)d$ electrons contribute to the delocalised metallic states.

A simple school model relates bond strength to the number of unpaired electrons available for interatomic overlap. It correctly predicts a broad rise towards the centre of a row and a fall as the d shell fills. At advanced level, add three qualifications:

1. Metallic bonding is a **band phenomenon**, not a set of isolated covalent bonds.
2. The relationship with the free-atom number of unpaired electrons is qualitative; band occupancy in the crystal is different.
3. Crystal structure, atomic size and electron correlation produce important anomalies.

## Enthalpy of atomisation

The enthalpy of atomisation is the energy required to produce gaseous atoms from one mole of the element in its standard state:

$$
\mathrm{M(s)\rightarrow M(g)}
$$

| Element | Sc | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $\Delta_\mathrm{a}H^\circ$ / $\mathrm{kJ\,mol^{-1}}$ | 326 | 473 | 515 | 397 | 281 | 416 | 425 | 430 | 339 | 126 |

Vanadium is high, the Fe–Ni region is also strongly bound, and zinc is very low. Manganese is an important anomaly: despite its high-spin atomic configuration, its crystal structure and electronic organisation give weaker-than-expected cohesion.

## Why heavy rows form metal–metal bonds readily

The 4d and 5d orbitals are more radially extended than 3d. Their overlap between neighbouring centres can be strong, which raises atomisation enthalpy and encourages direct metal–metal bonds in complexes and clusters.`,
},
{
  id: "melting",
  label: "Melting and boiling points",
  visual: "melting",
  markdown: String.raw`# Melting-point and boiling-point trends

High cohesive energy usually leads to high melting and boiling points. Most transition metals melt above $1000^\circ\mathrm{C}$, and several refractory metals remain solid far beyond $2000^\circ\mathrm{C}$.

## First-row melting data

| Element | Sc | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Melting point / $^\circ\mathrm{C}$ | 1539 | 1667 | 1915 | 1903 | 1244 | 1535 | 1495 | 1453 | 1083 | 419 |

The curve rises from Sc to V/Cr, falls sharply at Mn, recovers through Fe–Ni and then declines towards Cu and Zn.

## Refractory 5d metals

Tantalum, tungsten and rhenium possess exceptionally high melting points; the supplied tables place W near $3410^\circ\mathrm{C}$, Re near $3180^\circ\mathrm{C}$ and Ta near $3000^\circ\mathrm{C}$. Strong d-orbital overlap and large atomisation enthalpy make these metals suitable for high-temperature applications.

## Group 12 collapse

Zn, Cd and Hg have filled d shells. Their d electrons contribute less effectively to the variable, partly filled bonding band that strengthens typical transition metals. Zn and Cd melt at low temperatures, while mercury is liquid at room temperature and melts near $-38^\circ\mathrm{C}$.

Mercury requires a deeper explanation than “no unpaired electrons.” Relativistic stabilisation and contraction of the 6s pair, weak Hg–Hg cohesion and filled-shell electronic structure together suppress metallic bonding.

## Melting point versus boiling point

Melting requires loss of long-range crystal order; boiling requires complete separation into gaseous atoms. A lattice-structure change can therefore disturb melting trends without producing the same disturbance in atomisation or boiling data. Do not assume every physical property must have an identical curve.`,
},
{
  id: "ionisation",
  label: "Ionisation enthalpies",
  visual: "",
  markdown: String.raw`# Ionisation enthalpy across the 3d series

The first ionisation enthalpy increases only gently from Sc to Zn. Nuclear charge rises, but added 3d electrons screen the 4s electron to some extent and the radius contracts only moderately.

| Element | Sc | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $IE_1$ / $\mathrm{kJ\,mol^{-1}}$ | 631 | 656 | 650 | 653 | 717 | 762 | 758 | 736 | 745 | 906 |
| $IE_2$ / $\mathrm{kJ\,mol^{-1}}$ | 1235 | 1309 | 1414 | 1592 | 1509 | 1561 | 1644 | 1752 | 1958 | 1734 |
| $IE_3$ / $\mathrm{kJ\,mol^{-1}}$ | 2393 | 2657 | 2833 | 2990 | 3260 | 2962 | 3243 | 3402 | 3556 | 3837 |

## Interpreting the irregularities

### Chromium and copper in the second step

After the first electron is removed:

- $\mathrm{Cr^+}$ has the particularly favourable $3d^5$ arrangement.
- $\mathrm{Cu^+}$ has $3d^{10}$.

Removing a second electron disturbs these configurations, so $IE_2$ is unusually high for Cr and especially Cu.

### Manganese and iron in the third step

$\mathrm{Mn^{2+}}$ is $3d^5$. Removing another electron breaks the half-filled arrangement, making the third ionisation difficult. By contrast, $\mathrm{Fe^{2+}}$ is $3d^6$ and loss of one electron produces $\mathrm{Fe^{3+}}$ with $d^5$; its third ionisation is therefore lower than that of Mn.

### Zinc

The first two electrons are 4s electrons and their removal gives stable $d^{10}$ $\mathrm{Zn^{2+}}$. The third ionisation must break into the filled 3d shell and is very costly.

## Exchange energy

Parallel-spin occupation of separate degenerate orbitals produces exchange stabilisation. It helps explain local breaks, but it does not act alone; nuclear attraction, interelectronic repulsion and orbital relaxation all contribute.`,
},
{
  id: "reactivity",
  label: "Reactivity and noble character",
  visual: "",
  markdown: String.raw`# Reactivity of the metals

Most first-row transition metals lie above hydrogen in the electrochemical series and can liberate hydrogen from dilute non-oxidising acids. Copper is the major first-row exception. The platinum metals and gold are much more noble.

A metal’s behaviour cannot be predicted from ionisation enthalpy alone. For formation of an aqueous divalent ion, at least three energetic contributions matter:

1. atomisation of the solid metal;
2. first and second ionisations of the gaseous atom;
3. hydration of the gaseous cation.

A high atomisation enthalpy resists oxidation. High ionisation enthalpy also resists it. Strongly exothermic hydration favours the aqueous ion and can offset the first two costs.

## Typical acid behaviour

| Metal class | Dilute non-oxidising acid | Key reason |
|---|---|---|
| Ti, V, Cr, Mn, Fe, Co, Ni, Zn | thermodynamically capable in suitable conditions | negative $E^\circ(M^{2+}/M)$ values |
| Cu | generally no hydrogen from dilute HCl or dilute $H_2SO_4$ | $E^\circ(\mathrm{Cu^{2+}/Cu})$ is positive |
| Ag, Pt, Au | resistant | noble potentials and strong metallic cohesion |
| Cr, Ti in compact form | may appear unreactive | protective oxide film causes passivation |

## Passivation

Thermodynamic tendency and observed rate are different. Chromium and titanium can be protected by compact oxide layers. Concentrated nitric acid passivates iron and chromium under suitable conditions. The metal may be capable of oxidation but kinetically isolated from the reagent.

## Oxidising acids

Nitric acid and hot concentrated sulfuric acid can attack metals that do not liberate hydrogen from non-oxidising acids because the cathodic reduction process is no longer $H^+\rightarrow H_2$. Nitrate or sulfuric acid reduction supplies a more favourable oxidising pathway.`,
},
{
  id: "cycle",
  label: "Electrode potential as energy balance",
  visual: "cycle",
  markdown: String.raw`# Standard electrode potential: the complete energy balance

For the half-cell

$$
\mathrm{M^{2+}(aq)+2e^-\rightleftharpoons M(s)}
$$

the standard reduction potential describes the tendency of the aqueous ion to gain electrons and deposit metal under standard conditions. A more negative value means the metal is a stronger reducing agent.

## Selected first-row values

| Couple | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| $E^\circ(M^{2+}/M)$ / V | -1.63 | -1.18 | -0.90 | -1.18 | -0.44 | -0.28 | -0.25 | +0.34 | -0.76 |

The values are irregular because the complete free-energy cycle is irregular.

### Manganese

The particularly negative $\mathrm{Mn^{2+}/Mn}$ value is assisted by the stability of hydrated high-spin $d^5$ $\mathrm{Mn^{2+}}$.

### Copper

Copper has a positive value despite moderate ionisation enthalpy. Its atomisation plus first and second ionisation costs are not compensated sufficiently by hydration. Therefore metallic Cu is not oxidised by $H^+$ under standard non-oxidising conditions.

### Zinc

Zinc forms stable $d^{10}$ $\mathrm{Zn^{2+}}$ and has a negative potential. It readily dissolves in dilute acids and acts as a useful reducing metal.

## Avoid a sign error

A negative $E^\circ(M^{2+}/M)$ means the **reduction** of $M^{2+}$ is less favourable relative to the standard hydrogen electrode; the reverse oxidation of M is more favourable.

## Potential is not a universal constant of “reactivity”

Concentration, pH, complex formation, precipitation and gas pressure alter the actual electrode potential through the Nernst equation. A metal may dissolve when a ligand removes the ion into a stable complex even if a simple aqueous table suggests weak reactivity.`,
},
{
  id: "adjacent",
  label: "M³⁺/M²⁺ and redox stability",
  visual: "cycle",
  markdown: String.raw`# Adjacent oxidation states and redox direction

The couples $M^{3+}/M^{2+}$ reveal the stability of neighbouring d counts.

| Couple | Ti | V | Cr | Mn | Fe | Co |
|---|---:|---:|---:|---:|---:|---:|
| $E^\circ(M^{3+}/M^{2+})$ / V | -0.37 | -0.26 | -0.41 | +1.57 | +0.77 | +1.97 |

## Chromium(II) is reducing

For chromium,

$$
\mathrm{Cr^{3+}+e^-\rightleftharpoons Cr^{2+}}
$$

has a negative reduction potential. Therefore the reverse oxidation of $\mathrm{Cr^{2+}}$ to $\mathrm{Cr^{3+}}$ is favourable. The product $\mathrm{Cr^{3+}}$ is $d^3$, a configuration with substantial octahedral ligand-field stabilisation.

## Manganese(III) is oxidising

For manganese, the large positive value means $\mathrm{Mn^{3+}}$ readily gains an electron to form $\mathrm{Mn^{2+}}$. The product is high-spin $d^5$, strongly stabilised by exchange and hydration.

## Cobalt(III)

The very positive simple-aqueous value indicates that uncomplexed $\mathrm{Co^{3+}}$ is a strong oxidant. Suitable ligands can stabilise Co(III) dramatically; therefore cobalt redox chemistry is highly ligand-dependent.

## Iron(III)/iron(II)

The $+0.77\ \mathrm{V}$ couple allows Fe(III) to oxidise iodide under suitable conditions and enables Fe(III)/Fe(II) catalytic cycles. Complexing ligands shift the relative stabilities and hence the potential.

> The electronic configuration of the product matters, but hydration, ligand field and bonding must be included before declaring a state “stable.”`,
},
{
  id: "summary",
  label: "Physical and electrochemical synthesis",
  visual: "melting",
  markdown: String.raw`# Synthesis: from band strength to chemical reactivity

## Cohesion chain

$$
\text{effective ns/d overlap}
\rightarrow \Delta_\mathrm{a}H^\circ\uparrow
\rightarrow T_m,T_b\uparrow
\rightarrow \text{low volatility}
$$

This chain explains the broad pattern but not every anomaly. Mn, Tc and the Group 12 metals require attention to structure and electronic details.

## Ion formation chain

$$
\mathrm{M(s)}
\xrightarrow{\Delta H_a}
\mathrm{M(g)}
\xrightarrow{IE_1+IE_2}
\mathrm{M^{2+}(g)}
\xrightarrow{\Delta H_{hyd}}
\mathrm{M^{2+}(aq)}
$$

The first two stages cost energy; hydration releases energy. Their balance controls the oxidation tendency in water.

## High-yield comparisons

- V has a high atomisation enthalpy and high melting point.
- Mn has a surprisingly low atomisation enthalpy and melting point for its position.
- Zn has the lowest first-row atomisation enthalpy because the filled d shell contributes weakly to characteristic transition-metal cohesion.
- Cu has positive $E^\circ(\mathrm{Cu^{2+}/Cu})$ and does not evolve hydrogen from dilute non-oxidising acid.
- Cr(II) is reducing because Cr(III) is favoured.
- Mn(III) is oxidising because Mn(II), $d^5$, is favoured.
- A protective oxide film can make a reactive metal appear inert.

## Precision rules

Do not equate a high melting point with a high density.
Do not equate a negative reduction potential with “the ion is a reducing agent”; it is the metal that is more easily oxidised.
Do not use first ionisation enthalpy to predict $M^{2+}$ formation.
Do not ignore the physical state and aqueous hydration in an electrode-potential argument.

> **Part 3 conclusion:** transition-metal physical strength and aqueous redox behaviour are two views of the same electronic competition—cohesion in the solid versus stabilisation of ions in the gas phase and solution.`,
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

export default function DBlockPart03() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 3
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Metallic Bonding, Melting Points, Ionisation and Reactivity</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">A thermodynamic and electronic explanation of strong transition-metal cohesion, irregular melting patterns, successive ionisation enthalpies, passivity, noble character and standard electrode potentials.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-cyan-300">Format</p><p className="mt-1 font-bold">Source-grounded original notes</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-amber-300">Focus</p><p className="mt-1 font-bold">Cause → trend → exception</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-violet-300">Assessment</p><p className="mt-1 font-bold">Theory only; questions later</p></div>
          </div>
        </header>

        <DBlockPartNavigation part={3} position="top" />

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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 3 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={createMarkdownComponents(3)}>
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

        <DBlockPartNavigation part={3} position="bottom" />
      </div>
    </main>
  );
}
