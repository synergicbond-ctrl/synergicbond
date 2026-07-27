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


function OxidationPyramid(_: VisualProps) {
  const els=["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn"];
  const states:number[][]=[[3],[2,3,4],[2,3,4,5],[2,3,4,5,6],[2,3,4,5,6,7],[2,3,4,6],[2,3,4],[2,3,4],[1,2],[2]];
  return (
    <VisualFrame title="Oxidation-state skyline of the 3d series" caption="The maximum rises to Mn and then falls. The diagram shows well-established school-level states; abundance and stability are not identical for every listed value.">
      <svg viewBox="0 0 980 470" className="min-w-[800px] w-full" role="img" aria-label="Oxidation state skyline for first transition series">
        <rect width="980" height="470" rx="24" fill="#081827"/>
        {[1,2,3,4,5,6,7].map(s=><g key={s}><line x1="70" y1={410-s*48} x2="930" y2={410-s*48} stroke="#1e3a4f"/><text x="52" y={415-s*48} textAnchor="end" fill="#7893a8" fontSize="13">+{s}</text></g>)}
        {els.map((el,i)=><g key={el}>
          {states[i].map(s=><rect key={s} x={82+i*84} y={386-s*48} width="58" height="40" rx="8" fill={s===Math.max(...states[i])?"#f2b84b":"#0e4f65"} stroke={s===Math.max(...states[i])?"#ffd88a":"#55d8ef"} />)}
          {states[i].map(s=><text key={`t${s}`} x={111+i*84} y={411-s*48} textAnchor="middle" fill="#f4fcff" fontSize="13" fontWeight="800">+{s}</text>)}
          <text x={111+i*84} y="438" textAnchor="middle" fill="#d8e7f1" fontSize="15" fontWeight="800">{el}</text>
        </g>)}
        <path d="M111 242 L195 194 L279 146 L363 98 L447 50 L531 98 L615 146 L699 194 L783 242 L867 242" fill="none" stroke="#b69aff" strokeWidth="4" strokeDasharray="8 8"/>
      </svg>
    </VisualFrame>
  );
}

function OxideAcidityVisual(_: VisualProps) {
  return (
    <VisualFrame title="Oxidation state changes the personality of an oxide" caption="As formal oxidation state rises, the metal ion becomes more polarising and the M–O bond more covalent. Basicity falls and acidic oxo-species become more important.">
      <svg viewBox="0 0 980 400" className="min-w-[760px] w-full" role="img" aria-label="Gradient from basic low oxides to acidic high oxides">
        <rect width="980" height="400" rx="24" fill="#081827"/>
        <defs><linearGradient id="p4grad" x1="0" x2="1"><stop stopColor="#1e6a4b"/><stop offset="0.5" stopColor="#94732c"/><stop offset="1" stopColor="#6e315f"/></linearGradient></defs>
        <rect x="90" y="145" width="800" height="90" rx="45" fill="url(#p4grad)"/>
        <text x="145" y="198" textAnchor="middle" fill="#effff6" fontSize="20" fontWeight="900">Basic</text>
        <text x="490" y="198" textAnchor="middle" fill="#fff6dc" fontSize="20" fontWeight="900">Amphoteric</text>
        <text x="835" y="198" textAnchor="middle" fill="#fff0fb" fontSize="20" fontWeight="900">Acidic</text>
        {[["V₂O₃","+3",145],["VO₂","+4",360],["V₂O₅","+5",640],["CrO₃","+6",835]].map(([f,s,x])=><g key={String(f)}><line x1={Number(x)} y1="235" x2={Number(x)} y2="285" stroke="#547088" strokeWidth="3"/><rect x={Number(x)-55} y="285" width="110" height="58" rx="14" fill="#10273a" stroke="#55d8ef"/><text x={Number(x)} y="310" textAnchor="middle" fill="#e9fbff" fontSize="17" fontWeight="800">{f}</text><text x={Number(x)} y="331" textAnchor="middle" fill="#9cecff" fontSize="12">M state {s}</text></g>)}
        <text x="490" y="75" textAnchor="middle" fill="#e9fbff" fontSize="24" fontWeight="900">higher oxidation state → greater covalency and oxide acidity</text>
      </svg>
    </VisualFrame>
  );
}

function RedoxStabilityNetwork(_: VisualProps) {
  return (
    <VisualFrame title="Disproportionation and comproportionation" caption="An intermediate oxidation state survives only when it is thermodynamically favoured relative to both neighbouring states under the stated medium and ligand conditions.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Redox network for disproportionation and comproportionation">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        {[
          {x:170,label:"Lower state",sub:"Mⁿ⁻¹",c:"#55d8ef"},
          {x:490,label:"Intermediate",sub:"Mⁿ",c:"#f2b84b"},
          {x:810,label:"Higher state",sub:"Mⁿ⁺¹",c:"#b69aff"},
        ].map(n=><g key={n.label}><circle cx={n.x} cy="210" r="82" fill="#10273a" stroke={n.c} strokeWidth="4"/><text x={n.x} y="200" textAnchor="middle" fill="#f7fcff" fontSize="19" fontWeight="900">{n.label}</text><text x={n.x} y="235" textAnchor="middle" fill={n.c} fontSize="28" fontWeight="900">{n.sub}</text></g>)}
        <path d="M430 180 C340 110 300 110 250 165" fill="none" stroke="#55d8ef" strokeWidth="5" markerEnd="url(#p4r1)"/>
        <path d="M550 180 C640 110 680 110 730 165" fill="none" stroke="#b69aff" strokeWidth="5" markerEnd="url(#p4r2)"/>
        <path d="M250 255 C350 340 630 340 730 255" fill="none" stroke="#66e2a8" strokeWidth="5" markerEnd="url(#p4r3)"/>
        <defs>
          <marker id="p4r1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#55d8ef"/></marker>
          <marker id="p4r2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#b69aff"/></marker>
          <marker id="p4r3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#66e2a8"/></marker>
        </defs>
        <text x="490" y="76" textAnchor="middle" fill="#ffd88a" fontSize="19" fontWeight="900">Disproportionation: 2Mⁿ → Mⁿ⁻¹ + Mⁿ⁺¹</text>
        <text x="490" y="382" textAnchor="middle" fill="#bdf2d5" fontSize="19" fontWeight="900">Comproportionation: Mⁿ⁻¹ + Mⁿ⁺¹ → 2Mⁿ</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "pyramid": OxidationPyramid,
  "oxide": OxideAcidityVisual,
  "redox": RedoxStabilityNetwork,
};

const PAGES: PageBlock[] = [
{
  id: "origin",
  label: "Origin of variable oxidation states",
  visual: "pyramid",
  markdown: String.raw`# Variable oxidation states: electronic origin

The energies of ns and $(n-1)d$ electrons are comparable. Bond formation can therefore involve different numbers of electrons, producing several formal oxidation states that often differ by one unit.

This behaviour contrasts with many main-group elements, where oxidation states frequently differ by two because an ns electron pair may remain inert or because valence changes involve complete p-electron pairs.

## First-row pattern

| Element | Common and well-established oxidation states | Most characteristic message |
|---|---|---|
| Sc | +3 | essentially one dominant state |
| Ti | +2, +3, +4 | +4 becomes important early |
| V | +2, +3, +4, +5 | broad accessible range |
| Cr | +2, +3, +6; also +4, +5 | +3 stable; +6 oxo chemistry |
| Mn | +2 to +7 | widest first-row range |
| Fe | +2, +3; high oxo states less common | +2/+3 dominate |
| Co | +2, +3; +4 in selected solids/complexes | ligand-dependent +3 stability |
| Ni | +2 dominant; +3/+4 in selected species | range narrows |
| Cu | +1, +2; +3 in strongly stabilising environments | aqueous +1 disproportionates |
| Zn | +2 | filled-shell terminus |

The maximum oxidation state rises from Sc to Mn and then falls. Up to Mn, the maximum broadly follows the group number because all ns and d valence electrons can formally participate. Beyond $d^5$, removing or sharing every d electron becomes progressively less favourable.

## Oxidation state is a formal count

Formal oxidation state does not equal literal ionic charge in a covalent molecule. Chromium in $\mathrm{CrO_3}$ is assigned +6, but the compound is not constructed from a bare $\mathrm{Cr^{6+}}$ ion and three $\mathrm{O^{2-}}$ ions. High oxidation states are stabilised by strongly covalent M–O or M–F bonding.`,
},
{
  id: "stability",
  label: "What makes an oxidation state stable?",
  visual: "",
  markdown: String.raw`# Stability of an oxidation state

A state is chemically stable only in a specified environment. The relevant comparison may include:

- lattice energy in a solid;
- hydration enthalpy in water;
- ionisation and atomisation energies;
- ligand-field stabilisation;
- covalent bond strength;
- metal–oxygen multiple bonding;
- pH and hydrolysis;
- redox potential;
- disproportionation;
- kinetic barriers.

Therefore the statement “$d^5$ is stable” is incomplete. High-spin $\mathrm{Mn^{2+}}$ in water is strongly stabilised by exchange and hydration, but a $d^5$ state in a different geometry or ligand environment can behave differently.

## Early versus late transition elements

Early elements are larger and more electropositive. Their high oxidation states form strong bonds to O and F. Ti(IV), V(V) and Cr(VI) are therefore prominent.

Late elements have larger effective nuclear attraction and their d electrons are held more tightly. Lower states such as +2 and +3 become dominant. High states require especially electronegative ligands or strongly oxidising conditions.

## Heavier rows

The 4d and 5d orbitals are more diffuse and overlap ligands effectively. Higher oxidation states are generally more stable than in the corresponding 3d elements. Ruthenium and osmium reach +8 in $\mathrm{RuO_4}$ and $\mathrm{OsO_4}$, whereas Fe(VIII) is not part of ordinary simple chemistry.

## Low and zero oxidation states

Strong $\pi$-acceptor ligands such as CO can stabilise electron-rich metals. Donation from ligand to metal is accompanied by metal-to-ligand back-donation into ligand $\pi^\*$ orbitals. This lowers electron density on the metal and makes oxidation states 0 or negative possible in carbonyl and related complexes.`,
},
{
  id: "oxygen-fluorine",
  label: "Oxygen, fluorine and high states",
  visual: "oxide",
  markdown: String.raw`# Why oxygen and fluorine stabilise high oxidation states

Fluorine is the most electronegative element and forms strong M–F bonds. It is therefore especially effective in stabilising high oxidation states in halides, for example $\mathrm{VF_5}$, $\mathrm{CrF_6}$ and high fluorides of heavier metals.

Oxygen can be even more effective for the highest accessible states because it supports strong $\sigma$ bonding and multiple-bond character through p–d or more generally metal–oxygen covalent interactions. Oxides and oxoanions also gain substantial lattice or solvation stabilisation.

Examples include:

- $\mathrm{V_2O_5}$ with V(V);
- $\mathrm{CrO_3}$, $\mathrm{CrO_4^{2-}}$ and $\mathrm{Cr_2O_7^{2-}}$ with Cr(VI);
- $\mathrm{Mn_2O_7}$ and $\mathrm{MnO_4^-}$ with Mn(VII);
- $\mathrm{RuO_4}$ and $\mathrm{OsO_4}$ with +8.

## Why iodides favour lower states

Iodide is large, easily oxidised and a good reducing ligand. A highly oxidising metal centre would oxidise $I^-$ to iodine instead of forming a stable high-valent iodide. Thus high oxidation states tend to exist in oxides and fluorides, while low reducing states may be isolated in heavier halides.

## Oxide acidity

As oxidation state rises:

1. metal charge density increases;
2. M–O bonding becomes more covalent;
3. the oxide ion is less available as a basic centre;
4. terminal oxo groups support acidic oxoacids and oxoanions.

Hence low oxides are usually basic, intermediate oxides amphoteric and high oxides acidic.

### Vanadium sequence

$$
\mathrm{V_2O_3\ (basic)\rightarrow VO_2\ (less\ basic/amphoteric)\rightarrow V_2O_5\ (mainly\ acidic)}
$$

### Chromium sequence

$\mathrm{CrO}$ is basic, $\mathrm{Cr_2O_3}$ amphoteric and $\mathrm{CrO_3}$ acidic.`,
},
{
  id: "halides",
  label: "Oxides, halides and hydrolysis",
  visual: "oxide",
  markdown: String.raw`# Oxides and halides as evidence of oxidation-state stability

The existence of a compound is a thermodynamic and kinetic statement. A stable high oxide shows that strong M–O bonding compensates for the cost of removing many electrons from the metal.

## General halide pattern

| Oxidation state | Fluoride | Chloride | Bromide | Iodide |
|---|---|---|---|---|
| Low | often stable | stable | stable | may be especially stable |
| Intermediate | common | common | selected | fewer |
| Very high | most strongly supported | fewer and more covalent | rare | generally absent |

Higher halides are more covalent and more susceptible to hydrolysis. The small, highly charged metal centre polarises the halide and reacts strongly with water.

## Representative examples

- Ti forms stable $\mathrm{TiCl_4}$ and $\mathrm{TiF_4}$ in +4.
- V(V) is well represented by $\mathrm{VF_5}$ and oxides/oxoanions; heavier halides are less stable.
- Cr(VI) is strongly represented by oxides and oxohalides rather than simple iodides.
- Mn(VII) is represented by $\mathrm{Mn_2O_7}$ and permanganate, not by a normal heptahalide.

## Hydrolysis as a stability test

A molecular high halide may exist in the dry state but hydrolyse immediately:

$$
\mathrm{TiCl_4 + 2H_2O \rightarrow TiO_2\cdot xH_2O + 4HCl}
$$

The exact hydrated oxide product depends on conditions. This does not mean Ti(IV) is unstable; it means Ti–O bonding and proton transfer are more favourable than persistence of Ti–Cl bonds in water.

## Strongly reducing states

A low-valent compound may be stable in the absence of air but oxidise rapidly when exposed. Cr(II) salts and many low-valent carbonyls illustrate the difference between isolability and air stability.`,
},
{
  id: "redox",
  label: "Redox direction of adjacent states",
  visual: "redox",
  markdown: String.raw`# Redox stability of neighbouring oxidation states

Electrode potentials give a quantitative way to compare adjacent states.

## Chromium

$\mathrm{Cr^{2+}}$ is $d^4$ and $\mathrm{Cr^{3+}}$ is $d^3$. In common octahedral environments, the $d^3$ ion gains substantial ligand-field stabilisation and is resistant to further simple rearrangement. Therefore Cr(II) is a reducing agent:

$$
\mathrm{Cr^{2+}\rightarrow Cr^{3+}+e^-}
$$

## Manganese

$\mathrm{Mn^{3+}}$ is $d^4$ and $\mathrm{Mn^{2+}}$ is high-spin $d^5$. The +3 ion readily gains an electron:

$$
\mathrm{Mn^{3+}+e^-\rightarrow Mn^{2+}}
$$

Thus Mn(III) is strongly oxidising in simple aqueous conditions.

## Iron

Fe(II) and Fe(III) are both common. Their balance is sensitive to ligand and pH. Oxygen oxidises Fe(II) solutions; reducing agents restore Fe(II). Hydroxide precipitation can remove one state selectively and alter the apparent redox direction.

## Cobalt

Simple aqueous Co(III) is strongly oxidising, but ligands such as ammonia and chelating donors stabilise Co(III) kinetically and thermodynamically. The same formal oxidation state can therefore change character dramatically when the coordination sphere changes.

## Copper

Cu(I), $d^{10}$, is stabilised in soft-ligand complexes and insoluble solids such as CuCl. In ordinary water it is unstable relative to Cu(II) and Cu metal:

$$
\mathrm{2Cu^+\rightarrow Cu^{2+}+Cu}
$$

This is disproportionation. The reverse process, Cu plus Cu(II) giving Cu(I), can occur when a ligand or precipitate strongly stabilises Cu(I).`,
},
{
  id: "disproportionation",
  label: "Disproportionation and comproportionation",
  visual: "redox",
  markdown: String.raw`# Disproportionation

An intermediate oxidation state disproportionates when it is less stable than a mixture of one lower and one higher state.

General form:

$$
\mathrm{2M^{n}\rightarrow M^{n-1}+M^{n+1}}
$$

The coefficients may differ when oxo species and proton balance are involved.

## Manganate(VI) in acid

Green manganate is stable in strongly alkaline solution but disproportionates when the pH falls:

$$
\mathrm{3MnO_4^{2-}+4H^+\rightarrow2MnO_4^-+MnO_2+2H_2O}
$$

Mn(VI) becomes Mn(VII) in permanganate and Mn(IV) in manganese dioxide.

## Copper(I) in water

$$
\mathrm{2Cu^+\rightarrow Cu^{2+}+Cu}
$$

The reaction is favoured in ordinary aqueous solution. If Cu(I) is precipitated as CuCl or bound by a ligand, its effective concentration falls and the equilibrium can shift.

## Comproportionation

The reverse pattern combines lower and higher states to form the intermediate:

$$
\mathrm{M^{n-1}+M^{n+1}\rightarrow2M^n}
$$

Example logic: Cu metal and Cu(II) can produce Cu(I) in chloride-rich media because Cu(I) is stabilised as chloro species or CuCl.

## Latimer-diagram criterion

For a sequence written left to right as high state $\rightarrow$ intermediate $\rightarrow$ low state, the intermediate tends to disproportionate when the reduction potential to its right is greater than the potential to its left. This criterion must be applied with balanced electron numbers and the stated pH.

> Disproportionation is not a property of an oxidation number alone. Change the ligand, pH or phase and the equilibrium may reverse.`,
},
{
  id: "summary",
  label: "Oxidation-state atlas",
  visual: "pyramid",
  markdown: String.raw`# Oxidation-state atlas for revision

## First-row maxima

| Element | Sc | Ti | V | Cr | Mn | Fe | Co | Ni | Cu | Zn |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Characteristic maximum | +3 | +4 | +5 | +6 | +7 | +6 in rare oxo chemistry; +3 common | +3/+4 selected | +4 selected | +3 selected | +2 |

The maximum-state line forms a peak near Mn, but **common state** and **maximum state** must not be confused.

## Stability cues

- $d^0$: common for high states of early metals; often oxo/fluoro chemistry.
- $d^3$: Cr(III) is strongly stabilised in octahedral fields.
- high-spin $d^5$: Mn(II) and Fe(III) are important.
- $d^{10}$: Cu(I), Ag(I), Zn(II), Cd(II), Hg(II) are diamagnetic; chemical stability still depends on medium.
- low oxidation states: stabilised by $\pi$-acceptor ligands.
- very high states: stabilised by O and F, especially in 4d/5d elements.

## Acid–base cue for oxides

$$
\text{low oxidation state}\Rightarrow\text{ionic/basic oxide}
$$

$$
\text{intermediate state}\Rightarrow\text{amphoteric oxide}
$$

$$
\text{high oxidation state}\Rightarrow\text{covalent/acidic oxide}
$$

## Frequent errors

Do not equate formal oxidation state with real ionic charge.
Do not call every listed state equally stable or equally common.
Do not claim oxygen is simply “more electronegative than fluorine”; its special role comes from strong multiple bonding and oxoanion stabilisation.
Do not predict iodides of strongly oxidising high states.
Do not discuss aqueous stability without pH and ligand conditions.

> **Part 4 conclusion:** variable oxidation state originates in near-degenerate ns and d electrons, but actual stability is decided by the entire chemical environment—bonding, lattice, hydration, ligand field, redox potential and medium.`,
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

export default function DBlockPart04() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 4
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Variable Oxidation States and Their Stability</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">A systematic account of the oxidation-state skyline, the special roles of oxygen and fluorine, oxide acidity, halide stability, adjacent-state redox behaviour, disproportionation and ligand control.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-cyan-300">Format</p><p className="mt-1 font-bold">Source-grounded original notes</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-amber-300">Focus</p><p className="mt-1 font-bold">Cause → trend → exception</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-violet-300">Assessment</p><p className="mt-1 font-bold">Theory only; questions later</p></div>
          </div>
        </header>

        <DBlockPartNavigation part={4} position="top" />

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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 4 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={createMarkdownComponents(4)}>
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

        <DBlockPartNavigation part={4} position="bottom" />
      </div>
    </main>
  );
}
