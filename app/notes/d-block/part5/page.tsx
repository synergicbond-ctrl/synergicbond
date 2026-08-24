import type { ComponentType, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { createMarkdownComponents } from "../AnchoredMarkdown";
import { AppShell } from "@/components/AppShell";
import DBlockVisualSystem from "../DBlockVisualSystem";

type VisualProps = { className?: string };
type PageBlock = { id: string; label: string; visual: string; markdown: string };

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

function VisualFrame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="my-8 overflow-hidden rounded-lg border border-cyan-400/20 bg-[#071321] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
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


function CoordinationVisual(_: VisualProps) {
  const pts=[[490,85],[650,150],[650,285],[490,350],[330,285],[330,150]];
  return (
    <VisualFrame title="An octahedral coordination environment" caption="Six donor atoms approach along the Cartesian axes. Coordination is driven by metal–ligand electrostatics and covalent orbital interaction; the old phrase ‘vacant d orbitals accept lone pairs’ is only a partial picture.">
      <svg viewBox="0 0 980 440" className="min-w-[760px] w-full" role="img" aria-label="Octahedral coordination complex with six ligand donors">
        <rect width="980" height="440" rx="24" fill="#081827"/>
        {pts.map(([x,y],i)=><g key={i}><line x1="490" y1="220" x2={x} y2={y} stroke="#55758d" strokeWidth="5"/><circle cx={x} cy={y} r="35" fill="#2c2647" stroke="#b69aff" strokeWidth="3"/><text x={x} y={y+6} textAnchor="middle" fill="#f2edff" fontSize="18" fontWeight="900">L</text><path d={`M${x+(x<490?30:x>490?-30:0)} ${y+(y<220?25:y>220?-25:0)} L${x+(490-x)*0.35} ${y+(220-y)*0.35}`} stroke="#f2b84b" strokeWidth="3" markerEnd="url(#p5d)"/></g>)}
        <defs><marker id="p5d" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f2b84b"/></marker></defs>
        <circle cx="490" cy="220" r="67" fill="#0e4f65" stroke="#55d8ef" strokeWidth="4"/>
        <text x="490" y="211" textAnchor="middle" fill="#f3fdff" fontSize="26" fontWeight="900">Mⁿ⁺</text>
        <text x="490" y="240" textAnchor="middle" fill="#b5e9f2" fontSize="13">high charge density</text>
        <text x="490" y="410" textAnchor="middle" fill="#91a9ba" fontSize="14">L → M donation builds a coordination sphere; geometry controls d-level splitting.</text>
      </svg>
    </VisualFrame>
  );
}

function PiBondingVisual(_: VisualProps) {
  return (
    <VisualFrame title="Synergic bonding with a π-acceptor ligand" caption="CO donates through a carbon lone-pair orbital and accepts electron density into π* orbitals. The two interactions reinforce one another and stabilise low oxidation states.">
      <svg viewBox="0 0 980 400" className="min-w-[760px] w-full" role="img" aria-label="Sigma donation and pi back bonding between metal and carbon monoxide">
        <rect width="980" height="400" rx="24" fill="#081827"/>
        <circle cx="245" cy="200" r="92" fill="#0e4f65" stroke="#55d8ef" strokeWidth="4"/>
        <text x="245" y="211" textAnchor="middle" fill="#f3fdff" fontSize="38" fontWeight="900">M</text>
        <circle cx="690" cy="200" r="55" fill="#333044" stroke="#b69aff" strokeWidth="3"/>
        <circle cx="815" cy="200" r="46" fill="#402835" stroke="#f08caf" strokeWidth="3"/>
        <text x="690" y="208" textAnchor="middle" fill="#f3efff" fontSize="26" fontWeight="900">C</text>
        <text x="815" y="208" textAnchor="middle" fill="#ffeaf3" fontSize="26" fontWeight="900">O</text>
        <line x1="745" y1="190" x2="769" y2="190" stroke="#dfe9f0" strokeWidth="4"/>
        <line x1="745" y1="210" x2="769" y2="210" stroke="#dfe9f0" strokeWidth="4"/>
        <path d="M625 165 C510 90 400 90 330 160" fill="none" stroke="#f2b84b" strokeWidth="6" markerEnd="url(#p5p1)"/>
        <text x="480" y="80" textAnchor="middle" fill="#ffd88a" fontSize="17" fontWeight="900">σ donation: CO → M</text>
        <path d="M330 245 C430 320 540 320 625 245" fill="none" stroke="#66e2a8" strokeWidth="6" markerEnd="url(#p5p2)"/>
        <text x="480" y="350" textAnchor="middle" fill="#bdf2d5" fontSize="17" fontWeight="900">π back-donation: M d → CO π*</text>
        <defs>
          <marker id="p5p1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f2b84b"/></marker>
          <marker id="p5p2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#66e2a8"/></marker>
        </defs>
      </svg>
    </VisualFrame>
  );
}

function SurfaceCatalysisVisual(_: VisualProps) {
  return (
    <VisualFrame title="How a metal surface lowers activation energy" caption="Adsorption concentrates reactants, orients them and weakens internal bonds. Product desorption frees the active site; excessive binding would poison the catalyst.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Four stages of heterogeneous surface catalysis">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        {Array.from({length:14}).map((_,i)=><circle key={i} cx={60+i*66} cy="330" r="31" fill="#1b3347" stroke="#55758d" strokeWidth="2"/>)}
        {[
          {x:130,t:"1. Adsorb",a:"#55d8ef"},
          {x:360,t:"2. Activate",a:"#f2b84b"},
          {x:600,t:"3. React",a:"#b69aff"},
          {x:830,t:"4. Desorb",a:"#66e2a8"},
        ].map((s,i)=><g key={s.t}><text x={s.x} y="60" textAnchor="middle" fill={s.a} fontSize="18" fontWeight="900">{s.t}</text>{i<3&&<path d={`M${s.x+75} 115 H${s.x+155}`} stroke="#46657d" strokeWidth="4" markerEnd="url(#p5s)"/>}</g>)}
        <defs><marker id="p5s" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#46657d"/></marker></defs>
        <circle cx="105" cy="155" r="24" fill="#55d8ef"/><circle cx="155" cy="125" r="24" fill="#f2b84b"/>
        <line x1="118" y1="147" x2="142" y2="133" stroke="#dfe9f0" strokeWidth="5"/>
        <circle cx="335" cy="230" r="24" fill="#55d8ef"/><circle cx="385" cy="215" r="24" fill="#f2b84b"/><line x1="350" y1="226" x2="370" y2="219" stroke="#dfe9f0" strokeWidth="2" strokeDasharray="5 5"/>
        <circle cx="575" cy="235" r="24" fill="#55d8ef"/><circle cx="625" cy="235" r="24" fill="#f2b84b"/><line x1="599" y1="235" x2="601" y2="235" stroke="#ffffff" strokeWidth="8"/>
        <g transform="translate(805 145)"><circle cx="0" cy="0" r="24" fill="#55d8ef"/><circle cx="50" cy="0" r="24" fill="#f2b84b"/><line x1="24" y1="0" x2="26" y2="0" stroke="#fff" strokeWidth="8"/><path d="M25 35 V90" stroke="#66e2a8" strokeWidth="5" markerEnd="url(#p5s2)"/></g>
        <defs><marker id="p5s2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#66e2a8"/></marker></defs>
      </svg>
    </VisualFrame>
  );
}

function RedoxCatalyticCycle(_: VisualProps) {
  return (
    <VisualFrame title="Fe³⁺/Fe²⁺ homogeneous catalytic cycle" caption="The catalyst changes oxidation state in two elementary redox steps and is regenerated. Adding the steps cancels Fe³⁺ and Fe²⁺, leaving the uncatalysed overall equation.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Iron three iron two catalytic cycle for iodide and peroxodisulfate">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        <circle cx="490" cy="215" r="80" fill="#123047" stroke="#55d8ef" strokeWidth="4"/>
        <text x="490" y="205" textAnchor="middle" fill="#e9fbff" fontSize="28" fontWeight="900">Fe³⁺</text>
        <text x="490" y="238" textAnchor="middle" fill="#9cecff" fontSize="16">catalyst form A</text>
        <path d="M425 165 C260 80 170 155 205 260" fill="none" stroke="#f2b84b" strokeWidth="6" markerEnd="url(#p5c1)"/>
        <path d="M555 265 C720 350 810 275 775 170" fill="none" stroke="#b69aff" strokeWidth="6" markerEnd="url(#p5c2)"/>
        <defs>
          <marker id="p5c1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f2b84b"/></marker>
          <marker id="p5c2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#b69aff"/></marker>
        </defs>
        <rect x="85" y="235" width="250" height="86" rx="17" fill="#3a2f20" stroke="#f2b84b"/>
        <text x="210" y="267" textAnchor="middle" fill="#fff4d6" fontSize="17" fontWeight="900">2Fe³⁺ + 2I⁻</text>
        <text x="210" y="298" textAnchor="middle" fill="#e8d29e" fontSize="15">→ 2Fe²⁺ + I₂</text>
        <rect x="645" y="105" width="250" height="86" rx="17" fill="#2c2647" stroke="#b69aff"/>
        <text x="770" y="137" textAnchor="middle" fill="#f3efff" fontSize="17" fontWeight="900">2Fe²⁺ + S₂O₈²⁻</text>
        <text x="770" y="168" textAnchor="middle" fill="#cabee0" fontSize="15">→ 2Fe³⁺ + 2SO₄²⁻</text>
        <text x="490" y="390" textAnchor="middle" fill="#91a9ba" fontSize="15">Overall: 2I⁻ + S₂O₈²⁻ → I₂ + 2SO₄²⁻</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "coordination": CoordinationVisual,
  "pi": PiBondingVisual,
  "surface": SurfaceCatalysisVisual,
  "cycle": RedoxCatalyticCycle,
};

const PAGES: PageBlock[] = [
{
  id: "complex-origin",
  label: "Why transition metals form complexes",
  visual: "coordination",
  markdown: String.raw`# Formation of coordination complexes

A coordination compound contains a central metal atom or ion bonded to surrounding ligands. A ligand donates at least one electron pair to the metal through a donor atom such as N, O, S, P, C or a halogen.

Transition metals form an exceptional variety of complexes because several favourable features occur together:

1. **High charge density:** many metal ions are small and carry charges of +2, +3 or higher.
2. **Suitable orbital energies:** ns, np and $(n-1)d$ orbitals can mix and interact with ligand orbitals.
3. **Variable oxidation state:** different ligand sets can stabilise different electron counts.
4. **Ligand-field stabilisation:** splitting of d levels can lower the energy of a particular geometry and spin arrangement.
5. **Covalent contribution:** donor–acceptor overlap supplements electrostatic attraction.

The textbook phrase “vacant d orbitals accept lone pairs” should be used cautiously. Some important complexes have no empty low-energy d orbital in the simplistic sense, and occupied d orbitals can participate through $\pi$ back-bonding. Modern bonding is described by molecular orbitals formed from metal and ligand orbitals of compatible symmetry.

## Common ligand types

| Ligand | Charge | Donor atom | Denticity |
|---|---:|---|---:|
| $\mathrm{H_2O}$ | 0 | O | 1 |
| $\mathrm{NH_3}$ | 0 | N | 1 |
| $\mathrm{Cl^-}$ | -1 | Cl | 1 |
| $\mathrm{CN^-}$ | -1 | C | 1 |
| ethane-1,2-diamine | 0 | two N atoms | 2 |
| oxalate, $\mathrm{C_2O_4^{2-}}$ | -2 | two O atoms | 2 |
| EDTA$^{4-}$ | -4 | N/O donor set | 6 |

Chelating ligands bind through more than one donor atom and often produce especially stable complexes because dissociation requires several metal–donor bonds to be broken and because chelation is entropically favourable.`,
},
{
  id: "geometry",
  label: "Coordination number and geometry",
  visual: "coordination",
  markdown: String.raw`# Coordination number and geometry

The coordination number counts donor atoms directly bonded to the metal. It is not always equal to the number of ligand molecules because a bidentate ligand occupies two coordination positions.

## Common geometries

| Coordination number | Geometry | Representative example |
|---:|---|---|
| 2 | linear | $\mathrm{[Ag(NH_3)_2]^+}$ |
| 4 | tetrahedral | $\mathrm{[CoCl_4]^{2-}}$ |
| 4 | square planar | $\mathrm{[Ni(CN)_4]^{2-}}$, many $d^8$ 4d/5d complexes |
| 6 | octahedral | $\mathrm{[Fe(CN)_6]^{4-}}$, $\mathrm{[Co(NH_3)_6]^{3+}}$ |
| 7–9 | higher coordination | more common for large 4d/5d ions and selected early metals |

Geometry is determined by ligand size, metal size, oxidation state, d count and ligand-field energy. The same metal ion may adopt different geometries with different ligands.

## Oxidation state and complex stability

A trivalent ion generally binds ligands more strongly than the corresponding divalent ion because of higher charge density. However, redox stability must also be considered. Free aqueous Co(III) is strongly oxidising, while octahedral ammine and chelate ligands stabilise Co(III) and make many complexes kinetically inert.

## Labile versus inert

- **Labile** describes rapid ligand substitution.
- **Inert** describes slow substitution.

These are kinetic words, not thermodynamic words. A complex can be thermodynamically stable but labile, or thermodynamically less favoured but kinetically persistent.

Cr(III), low-spin Co(III) and many 4d/5d complexes are substitution-inert relative to many first-row divalent aqua complexes.

## Hydrolysis and complexation compete

A highly charged aqua ion may deprotonate coordinated water. Adding a strong ligand can suppress hydrolysis by replacing water and changing electron density. Adding hydroxide may instead precipitate a hydroxide or generate a soluble hydroxo complex, depending on amphoterism and concentration.`,
},
{
  id: "pi-bond",
  label: "Low oxidation states and π bonding",
  visual: "pi",
  markdown: String.raw`# Stabilisation of low oxidation states

Low or zero oxidation states place substantial electron density on the metal. They are favoured by ligands that can accept some of this density.

## Carbon monoxide as a synergic ligand

CO forms two linked interactions:

1. The carbon lone pair donates into a metal orbital: **$\sigma$ donation**.
2. Filled metal d orbitals donate into empty CO $\pi^\*$ orbitals: **$\pi$ back-donation**.

Back-donation strengthens M–C bonding and weakens the internal C–O bond. The two interactions are synergic: stronger $\sigma$ donation increases metal electron density, which can increase back-donation.

This bonding stabilises metals in zero and negative formal oxidation states, as in $\mathrm{Ni(CO)_4}$, $\mathrm{Fe(CO)_5}$ and metal carbonyl anions.

## Other π-acceptor ligands

$\mathrm{CN^-}$, phosphines, alkenes, bipyridyl-type ligands and nitrosyl can also stabilise low-valent metals, although their donor/acceptor balances differ.

## Eighteen-electron guideline

Many organometallic complexes are especially stable when the metal valence electrons plus ligand donations total 18, corresponding formally to filled ns, np and nd valence orbitals. The guideline is useful but not universal:

- early metals often form stable complexes with fewer than 18 electrons;
- steric crowding may prevent full coordination;
- metal–metal bonds change the count;
- high-spin first-row complexes frequently violate it.

## Why low states occur in complexes rather than simple salts

A simple low-valent cation or anion may be strongly reducing and react with solvent or counter-ions. A tailored ligand environment distributes charge, provides covalent bonding and creates a kinetic barrier to oxidation.`,
},
{
  id: "catalysis-origin",
  label: "Why transition metals are catalysts",
  visual: "surface",
  markdown: String.raw`# Catalytic properties

A catalyst provides an alternative reaction pathway with lower activation energy and is regenerated at the end. It changes the rate, not the thermodynamic equilibrium constant.

Transition metals are effective catalysts for two major reasons.

## 1. Variable oxidation states

A metal ion can accept electrons from one reactant and deliver them to another in separate, lower-energy steps. This avoids a difficult direct electron transfer.

## Surface adsorption and bond activation

Metal surfaces bind reactants through d and s states. Adsorption:

- increases local reactant concentration;
- gives favourable orientation;
- weakens bonds such as H–H, C=C, N–N or C–O;
- stabilises reaction intermediates.

A good catalyst binds neither too weakly nor too strongly. Weak binding fails to activate the reactant; excessively strong binding blocks active sites and prevents product desorption.

## Representative industrial examples

| Catalyst | Process or reaction | Essential role |
|---|---|---|
| finely divided Fe with promoters | Haber–Bosch ammonia synthesis | activates $\mathrm{N_2}$ and $\mathrm{H_2}$ on surface |
| $\mathrm{V_2O_5}$ | Contact process | V(V)/V(IV) oxygen-transfer cycle |
| Ni | hydrogenation of oils and alkenes | dissociative adsorption of $\mathrm{H_2}$ |
| $\mathrm{MnO_2}$ | decomposition of chlorates or hydrogen peroxide | redox-active oxide surface |
| Ti chloride / organoaluminium system | Ziegler–Natta polymerisation | coordinates alkene and controls insertion |
| Pd/Pt | hydrogenation, oxidation and coupling chemistry | surface and molecular catalytic pathways |
| $\mathrm{PdCl_2}$-based chemistry | Wacker oxidation | Pd(II)/Pd(0) redox cycle |

The exact industrial catalyst often contains promoters, supports and controlled oxidation states. Writing only the element name is an examination shorthand, not a complete industrial description.`,
},
{
  id: "heterogeneous",
  label: "Heterogeneous catalysis",
  visual: "surface",
  markdown: String.raw`# Heterogeneous catalysis on metal surfaces

In heterogeneous catalysis, catalyst and reactants are in different phases—typically a solid metal with gaseous or liquid reactants.

## Sequence of elementary stages

1. Diffusion of reactants to the surface.
2. Adsorption at active sites.
3. Surface diffusion and reorientation.
4. Bond weakening or dissociation.
5. Reaction between adsorbed species.
6. Product desorption.
7. Diffusion away from the surface.

The slowest elementary process contributes most strongly to the observed rate.

## Hydrogenation on nickel

Hydrogen adsorbs dissociatively:

$$
\mathrm{H_2(g)+2*\rightleftharpoons2H*}
$$

where * denotes a surface site. An alkene also adsorbs through its $\pi$ bond. Surface hydrogen atoms add stepwise to the adsorbed carbon atoms, and the alkane desorbs.

## Haber catalyst

Iron surfaces can bind and weaken the N≡N bond. Promoters modify electronic properties, surface area and resistance to sintering. The catalyst does not change the equilibrium limitation imposed by the exothermic reaction; high pressure and a compromise temperature are still required.

## Poisoning

Sulfur, lead, carbon monoxide and strongly adsorbed species may occupy active sites. Catalyst purification and feed-gas cleaning are therefore essential.

## Supports and nanoparticles

Dispersing a metal on a high-area support exposes more active atoms and can alter electron density. Very small particles show facets, edges and defects with activities different from a flat bulk surface.`,
},
{
  id: "homogeneous",
  label: "Homogeneous redox cycles",
  visual: "cycle",
  markdown: String.raw`# Homogeneous catalysis by oxidation-state cycling

When catalyst and reactants share a phase, a transition-metal ion can form soluble intermediates and alternate between oxidation states.

## Fe(III)-catalysed oxidation of iodide by peroxodisulfate

The uncatalysed reaction is:

$$
\mathrm{2I^-+S_2O_8^{2-}\rightarrow I_2+2SO_4^{2-}}
$$

The direct reaction between two anions is slow because of electrostatic repulsion and a demanding electron-transfer geometry.

Fe(III) provides two faster steps:

$$
\mathrm{2Fe^{3+}+2I^-\rightarrow2Fe^{2+}+I_2}
$$

$$
\mathrm{2Fe^{2+}+S_2O_8^{2-}\rightarrow2Fe^{3+}+2SO_4^{2-}}
$$

Adding the equations cancels Fe(III) and Fe(II), proving regeneration of the catalyst.

## Vanadium oxide in the Contact process

A simplified oxygen-transfer representation is:

$$
\mathrm{V_2O_5+SO_2\rightarrow V_2O_4+SO_3}
$$

$$
\mathrm{2V_2O_4+O_2\rightarrow2V_2O_5}
$$

The industrial mechanism occurs on a molten supported catalyst phase and is more complex, but the V(V)/V(IV) cycle captures the redox function.

## Design principle

The catalyst must possess potentials positioned between the donor and acceptor reactions. It must react favourably with each substrate but be regenerated overall.`,
},
{
  id: "summary",
  label: "Complex and catalyst synthesis",
  visual: "pi",
  markdown: String.raw`# Synthesis: coordination chemistry and catalysis

## Complex formation chain

$$
\text{metal charge density}
+\text{orbital compatibility}
+\text{ligand donation}
\rightarrow\text{M–L bonding}
$$

Geometry and ligand field then determine spin, colour, substitution rate and redox potential.

## Low-state chain

$$
\text{ligand }\sigma\text{ donation}
+\text{metal}\rightarrow\text{ligand }\pi\text{ back-donation}
\rightarrow\text{stabilised electron-rich metal}
$$

## Catalysis chain

$$
\text{adsorption or intermediate formation}
\rightarrow E_a\downarrow
\rightarrow\text{faster reaction}
$$

The catalyst does not alter $\Delta G^\circ$ or the final equilibrium composition.

## Precision statements

- “Vacant d orbitals” alone do not explain complex formation.
- Coordination number counts donor atoms, not ligand molecules.
- Thermodynamic stability is different from kinetic inertness.
- Low oxidation states are often stabilised by $\pi$-acceptor ligands.
- Surface catalysis requires a balance between adsorption and desorption.
- A genuine catalytic cycle must regenerate the metal species.
- Variable oxidation state enables electron shuttling, but geometry and ligand exchange are equally important in many cycles.

## Essential examples

$\mathrm{[Co(NH_3)_6]^{3+}}$ demonstrates octahedral complex formation.
$\mathrm{[Fe(CN)_6]^{4-}}$ demonstrates strong ligand-field effects.
Metal carbonyls demonstrate synergic bonding.
Fe in Haber, V$_2$O$_5$ in Contact and Ni in hydrogenation illustrate distinct catalytic mechanisms.

> **Part 5 conclusion:** transition-metal complexes and catalysts arise from the same electronic flexibility. Ligands reorganise d-level energies, control oxidation state and create pathways for bond activation and electron transfer.`,
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
    <blockquote className="my-6 rounded-lg border border-amber-300/20 bg-amber-300/[0.07] px-5 py-4 text-amber-50 shadow-inner" {...props} />
  ),
  table: (props: any) => (
    <div className="my-7 overflow-x-auto rounded-lg border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm text-slate-200" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-cyan-400/10 text-cyan-100" {...props} />,
  th: (props: any) => <th className="whitespace-nowrap border-b border-r border-white/10 px-4 py-3 font-black last:border-r-0" {...props} />,
  td: (props: any) => <td className="border-b border-r border-white/10 px-4 py-3 align-top leading-6 last:border-r-0" {...props} />,
  code: (props: any) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-100" {...props} />,
  hr: () => <hr className="my-10 border-white/10" />,
};

export default function DBlockPart05() {
  return (
    <AppShell
      discipline="D-block • JEE Advanced Theory"
      chapterTitle="D-Block Elements"
      chapterSlug="d-block"
      description="A modern, JEE-focused treatment of metal–ligand bonding, coordination geometry, chelation, π back-bonding, heterogeneous surfaces and homogeneous oxidation-state cycles."
      free={false}
      lessonNumber="Part 5 of 10"
      lessonTitle="Complex Formation and Catalytic Properties"
      hubRef={{ href: "/notes/d-block", label: "All 10 parts" }}
    >
      <DBlockVisualSystem />
      <div className="mx-auto max-w-3xl">
        <nav className="sticky top-2 z-20 mt-5 overflow-x-auto rounded-lg border border-white/10 bg-[#07111f]/95 p-2 shadow-xl backdrop-blur">
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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 5 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={createMarkdownComponents(5)}>
                  {page.markdown}
                </ReactMarkdown>
                {Visual ? <Visual /> : null}
              </section>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
