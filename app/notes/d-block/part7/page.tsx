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


function AlloyInterstitialVisual(_: VisualProps) {
  return (
    <VisualFrame title="Substitutional alloy versus interstitial compound" caption="Similar-sized metal atoms replace one another in a substitutional alloy. Much smaller atoms occupy holes in an interstitial phase without destroying the metallic framework.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Comparison of substitutional alloy lattice and interstitial compound lattice">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        <text x="245" y="52" textAnchor="middle" fill="#e9fbff" fontSize="21" fontWeight="900">Substitutional alloy</text>
        <text x="735" y="52" textAnchor="middle" fill="#e9fbff" fontSize="21" fontWeight="900">Interstitial phase</text>
        {Array.from({length:25}).map((_,i)=>{const col=i%5,row=Math.floor(i/5),x=90+col*78,y=105+row*60; const alt=[3,9,17,21].includes(i); return <circle key={i} cx={x} cy={y} r="24" fill={alt?"#b69aff":"#0e4f65"} stroke={alt?"#d8cbff":"#55d8ef"} strokeWidth="2"/>})}
        {Array.from({length:25}).map((_,i)=>{const col=i%5,row=Math.floor(i/5),x=580+col*78,y=105+row*60; return <circle key={i} cx={x} cy={y} r="24" fill="#0e4f65" stroke="#55d8ef" strokeWidth="2"/>})}
        {[[619,135],[697,195],[775,255],[853,315],[736,105],[814,225]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="9" fill="#f2b84b" stroke="#ffd88a" strokeWidth="2"/>)}
        <text x="245" y="393" textAnchor="middle" fill="#91a9ba" fontSize="14">large solute atoms replace host metal atoms</text>
        <text x="735" y="393" textAnchor="middle" fill="#91a9ba" fontSize="14">H, C or N occupy tetrahedral/octahedral holes</text>
      </svg>
    </VisualFrame>
  );
}

function FeODefectVisual(_: VisualProps) {
  return (
    <VisualFrame title="Why wüstite is written Fe₁₋ₓO" caption="Iron deficiency is compensated by oxidation of some Fe²⁺ to Fe³⁺. Cation vacancies and mixed valence preserve charge balance while the oxygen sublattice remains approximately intact.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Cation vacancy and mixed valence defect model for nonstoichiometric iron monoxide">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        <text x="490" y="46" textAnchor="middle" fill="#e9fbff" fontSize="22" fontWeight="900">Simplified Fe₁₋ₓO defect lattice</text>
        {Array.from({length:6}).map((_,r)=>Array.from({length:10}).map((_,c)=>{
          const x=90+c*88,y=90+r*52;
          const isO=(r+c)%2===0;
          const vacancy=!isO && ((r===2&&c===3)||(r===4&&c===7));
          const fe3=!isO && ((r===1&&c===4)||(r===2&&c===5)||(r===3&&c===2)||(r===4&&c===5));
          if(vacancy) return <g key={`${r}-${c}`}><circle cx={x} cy={y} r="19" fill="none" stroke="#f08caf" strokeWidth="3" strokeDasharray="6 5"/><text x={x} y={y+5} textAnchor="middle" fill="#f6b6cc" fontSize="13">□</text></g>;
          return <g key={`${r}-${c}`}><circle cx={x} cy={y} r={isO?18:21} fill={isO?"#2c2647":fe3?"#3a2f20":"#0e4f65"} stroke={isO?"#b69aff":fe3?"#f2b84b":"#55d8ef"} strokeWidth="2"/><text x={x} y={y+5} textAnchor="middle" fill="#f6fbff" fontSize="11" fontWeight="900">{isO?"O²⁻":fe3?"Fe³⁺":"Fe²⁺"}</text></g>
        }))}
        <g transform="translate(120 380)"><circle cx="0" cy="0" r="11" fill="none" stroke="#f08caf" strokeWidth="3" strokeDasharray="5 4"/><text x="20" y="5" fill="#e7b1c4" fontSize="13">cation vacancy</text><circle cx="200" cy="0" r="11" fill="#3a2f20" stroke="#f2b84b"/><text x="220" y="5" fill="#e8d29e" fontSize="13">Fe³⁺ compensation</text></g>
      </svg>
    </VisualFrame>
  );
}

function AbundanceChart(_: VisualProps) {
  const data=[["Ti",6320],["V",136],["Cr",122],["Mn",1060],["Fe",60000],["Co",29],["Ni",99],["Cu",68],["Zn",76]];
  const max=60000;
  return (
    <VisualFrame title="Abundance is extremely uneven" caption="Iron dominates the crustal abundance of this selection; Ti and Mn are also common. Many 4d and 5d metals occur only at trace levels. Values are approximate ppm data from the supplied reference table.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Log-style abundance bars for selected transition elements">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        {data.map(([el,v],i)=>{const val=Number(v); const h=40+Math.log10(val+1)/Math.log10(max+1)*250; const x=75+i*95; return <g key={String(el)}><rect x={x} y={340-h} width="55" height={h} rx="10" fill={el==="Fe"?"#f2b84b":"#0e4f65"} stroke={el==="Fe"?"#ffd88a":"#55d8ef"} strokeWidth="2"/><text x={x+27.5} y="370" textAnchor="middle" fill="#d8e7f1" fontSize="15" fontWeight="800">{el}</text><text x={x+27.5} y={330-h} textAnchor="middle" fill="#9cecff" fontSize="11">{val}</text></g>})}
        <text x="28" y="215" fill="#91a9ba" fontSize="13" transform="rotate(-90 28 215)">approximate ppm (log-scaled display)</text>
        <text x="490" y="405" textAnchor="middle" fill="#91a9ba" fontSize="14">The visual uses a logarithmic-height transform so trace and abundant elements can appear together.</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "lattice": AlloyInterstitialVisual,
  "feo": FeODefectVisual,
  "abundance": AbundanceChart,
};

const PAGES: PageBlock[] = [
{
  id: "alloys",
  label: "Alloy formation",
  visual: "lattice",
  markdown: String.raw`# Alloy formation in transition metals

An alloy is a metallic material containing two or more elements. The components may form a homogeneous solid solution, an ordered intermetallic phase or a multiphase microstructure.

Transition metals form alloys readily because neighbouring atoms often have:

- similar metallic radii;
- compatible crystal structures;
- similar electronegativities;
- delocalised metallic bonding;
- multiple valence-electron counts that tolerate substitution.

## Substitutional alloys

A solute metal replaces host-metal atoms in the lattice. Extensive substitution is favoured when atomic radii differ by no more than roughly 15%, although this is a guideline rather than a rigid law.

Examples:

| Alloy system | Important constituents | Chemical purpose |
|---|---|---|
| stainless steel | Fe, Cr, often Ni | corrosion resistance and toughness |
| high-speed steel | Fe with W/Mo/V/Cr | hardness retained at high temperature |
| Cu–Ni | Cu and Ni | corrosion-resistant coinage and marine alloys |
| brass | Cu and Zn | machinability, colour and strength |
| bronze | Cu and Sn | hardness and wear resistance |

Chromium protects stainless steel by forming a thin adherent oxide film. Nickel stabilises particular steel phases and improves toughness. Tungsten, molybdenum and vanadium form hard carbides and slow softening at high temperature.

## Ordered intermetallic compounds

Some compositions produce regular atom ordering rather than random substitution. Intermetallic phases may be harder and more brittle than ordinary solid solutions and can show sharp stoichiometric ranges.

## Why alloys differ from mixtures

Alloying changes electronic band structure, lattice strain, defect mobility and phase behaviour. The properties are not a simple arithmetic average of the pure metals.`,
},
{
  id: "interstitial",
  label: "Interstitial compounds",
  visual: "lattice",
  markdown: String.raw`# Interstitial compounds

Small atoms such as H, B, C and N can occupy holes in a transition-metal lattice. The metal framework remains substantially metallic while the interstitial atoms alter bond strength and electron concentration.

Representative formulas include:

- $\mathrm{TiC}$;
- $\mathrm{VN}$ and $\mathrm{Mn_4N}$;
- $\mathrm{Fe_3C}$;
- non-integral hydrides such as $\mathrm{VH_{0.56}}$ or $\mathrm{TiH_{1.7}}$ in simplified source notation.

The non-integral formulas show that the number of occupied holes can vary continuously.

## Characteristic properties

1. **High hardness:** C, N or B resists shear of the metal lattice.
2. **High melting point:** strong metal–interstitial bonding raises cohesive energy.
3. **Metallic conductivity:** the metal band structure remains partly delocalised.
4. **Chemical resistance:** many carbides and nitrides are inert.
5. **Non-stoichiometry:** not every available interstice is occupied.

## Carbides are not all alike

- Interstitial carbides of early transition metals, such as TiC and WC, are hard, refractory and conductive.
- Cementite, $\mathrm{Fe_3C}$, is a distinct iron carbide crucial to steel microstructure.
- Some later-metal carbides are less stable and may hydrolyse or decompose.

## Hydrides

Hydrogen can diffuse into metal lattices and occupy interstitial sites. Composition depends on pressure and temperature. This behaviour underlies hydrogen storage, embrittlement and catalytic hydrogen transfer.

## Distinction from ionic compounds

An interstitial compound cannot be interpreted by assigning ordinary integral oxidation states to every atom. Its bonding contains metallic, covalent and band-like contributions.`,
},
{
  id: "nonstoich",
  label: "Non-stoichiometry and mixed valence",
  visual: "feo",
  markdown: String.raw`# Non-stoichiometric transition-metal compounds

A non-stoichiometric compound has a composition that varies over a range rather than obeying one exact small-integer ratio. Transition metals support this behaviour because:

- they possess adjacent oxidation states;
- their lattices tolerate vacancies and interstitials;
- charge can be compensated electronically;
- extended solids are not isolated molecules.

## Wüstite: $\mathrm{Fe_{1-x}O}$

Ideal FeO would contain equal numbers of $\mathrm{Fe^{2+}}$ and $\mathrm{O^{2-}}$. Real wüstite is iron-deficient. The supplied source gives compositions roughly from $\mathrm{Fe_{0.84}O}$ to $\mathrm{Fe_{0.94}O}$.

When some Fe sites are vacant, charge neutrality is restored by converting part of the remaining Fe(II) to Fe(III).

A simplified compensation statement is:

- remove one $\mathrm{Fe^{2+}}$ from the lattice;
- oxidise two $\mathrm{Fe^{2+}}$ to two $\mathrm{Fe^{3+}}$;
- net charge change is zero.

This defect model explains electronic conductivity and mixed-valence behaviour.

## Vanadium selenides

The source reports a broad V–Se composition range from approximately $\mathrm{VSe_{0.98}}$ towards $\mathrm{VSe_2}$, with several structural regions. Variable vanadium valence and different selenium frameworks permit this flexibility.

## Copper sulfides

Passing $\mathrm{H_2S}$ through a Cu(II) solution can produce solids containing CuS and Cu$_2$S character rather than one perfectly fixed gravimetric product. This makes simple mass analysis unreliable.

## Defect terminology

- **metal deficiency:** missing cations, often compensated by higher cation oxidation state;
- **metal excess:** anion vacancies or metal interstitials, often accompanied by trapped electrons;
- **mixed valence:** same element occupies two formal oxidation states in one extended structure.`,
},
{
  id: "defects",
  label: "Defects, colour and conductivity",
  visual: "feo",
  markdown: String.raw`# Defects are chemically active

A crystal defect is not merely an imperfection. It can control colour, electrical conductivity, diffusion, magnetism and catalytic activity.

## Anion vacancies and F-centres

When an anion is missing, electrons may occupy the vacancy. Such trapped-electron centres can absorb visible light. Heated ZnO is often described in examination chemistry as becoming oxygen-deficient and yellow; the defect/electron population changes its optical absorption. The exact microscopic description is more nuanced than a single isolated F-centre model, but the key relation is oxygen loss plus donor-like electronic defects.

A simplified composition is written:

$$
\mathrm{ZnO\rightarrow Zn_{1+x}O+\frac{x}{2}O_2}
$$

The actual defect notation depends on which point defects dominate.

## Small-polaron conduction

In mixed-valence oxides, an electron can hop between neighbouring metal ions:

$$
\mathrm{Fe^{2+}\rightleftharpoons Fe^{3+}}
$$

This electron-transfer hopping contributes to electrical conductivity and can produce intervalence charge-transfer colour.

## Vacancy diffusion

Ions move through a solid by hopping into vacant sites. Defect concentration therefore controls oxidation, corrosion, sintering and solid-state reactions.

## Catalytic active sites

Edges, vacancies and unusual oxidation states at a surface often bind reactants more strongly than a perfect crystal face. Non-stoichiometric oxides such as ceria or transition-metal oxides can store and release oxygen during catalytic cycles.

## JEE caution

Do not use the words “F-centre” for every coloured oxide. The term specifically refers to an electron trapped in an anion vacancy. Colour can also arise from metal ions, charge transfer or band defects.`,
},
{
  id: "abundance",
  label: "Abundance and occurrence",
  visual: "abundance",
  markdown: String.raw`# Abundance of transition elements

The transition elements are not uniformly distributed in Earth’s crust. Iron, titanium and manganese are abundant, whereas many 4d and 5d metals occur only at trace levels.

## Approximate crustal abundance from the supplied table

| Element | ppm by mass | Element | ppm by mass | Element | ppm by mass |
|---|---:|---|---:|---|---:|
| Sc | 25 | Y | 31 | La | 35 |
| Ti | 6320 | Zr | 162 | Hf | 2.8 |
| V | 136 | Nb | 20 | Ta | 1.7 |
| Cr | 122 | Mo | 1.2 | W | 1.2 |
| Mn | 1060 | Tc | — | Re | 0.0007 |
| Fe | 60000 | Ru | 0.0001 | Os | 0.005 |
| Co | 29 | Rh | 0.0001 | Ir | 0.001 |
| Ni | 99 | Pd | 0.015 | Pt | 0.01 |
| Cu | 68 | Ag | 0.08 | Au | 0.004 |
| Zn | 76 | Cd | 0.16 | Hg | 0.08 |

Values are approximate and depend on the geochemical model and source date. They are most useful for order-of-magnitude comparison.

## Even–odd pattern

Elements with even atomic numbers are often more abundant than neighbouring odd-Z elements because nuclear synthesis and stability favour paired protons and neutrons. This broad pattern is sometimes called a Harkins-type rule. It is not exact; manganese is an important exception.

## Technetium

Technetium has no stable isotope and does not occur in ordinary minerals in macroscopic primordial amounts. Trace quantities arise from spontaneous fission and cosmic processes.

## Geochemical concentration

An element may be scarce overall yet economically recoverable if geological processes concentrate it into an ore. Platinum-group metals are often recovered as by-products from Ni/Cu sulfide ores.`,
},
{
  id: "metallurgy-link",
  label: "Occurrence, ores and material roles",
  visual: "abundance",
  markdown: String.raw`# From abundance to useful material

## Important ore associations

- Iron: hematite $\mathrm{Fe_2O_3}$, magnetite $\mathrm{Fe_3O_4}$, limonite and siderite.
- Chromium: chromite $\mathrm{FeCr_2O_4}$.
- Manganese: pyrolusite $\mathrm{MnO_2}$.
- Titanium: rutile $\mathrm{TiO_2}$ and ilmenite $\mathrm{FeTiO_3}$.
- Copper: sulfide ores such as chalcopyrite $\mathrm{CuFeS_2}$ and oxide/carbonate minerals.
- Zinc: zinc blende $\mathrm{ZnS}$ and calamine-type carbonate ores.
- Silver and gold: native metal, sulfides and association with base-metal ores.

The present notes focus on d-block chemistry rather than full metallurgy, but occurrence explains why some industrial preparations begin from chromite or pyrolusite.

## Material roles

Transition elements are important not only as pure metals but as electronically tuned phases:

- Fe alloys form structural steels.
- Cr and Ni supply corrosion resistance.
- W, Mo and V form hard, refractory phases.
- Ti alloys combine low density with strength and corrosion resistance.
- Pt-group metals provide noble surfaces for catalysis.
- Cu alloys provide conductivity and mechanical strength.
- Ag halides provide photosensitive solids.

## Scarcity and catalysis

A scarce metal can still be industrially important when used as a catalyst because it is not consumed stoichiometrically and can be dispersed as nanoparticles. Recycling and recovery are essential for Pt, Pd, Rh and related metals.`,
},
{
  id: "summary",
  label: "Solid-state synthesis",
  visual: "lattice",
  markdown: String.raw`# Synthesis: transition-metal solids

## Three structural modes

| Mode | Where the added atom goes | Typical consequence |
|---|---|---|
| substitutional alloy | replaces a metal atom | tunable strength, phase and corrosion behaviour |
| interstitial compound | occupies a lattice hole | hardness, high melting point, metallic conductivity |
| non-stoichiometric oxide/chalcogenide | creates vacancies or mixed valence | variable composition, colour and electronic conduction |

## Cause–effect chains

$$
\text{similar metallic radii}\rightarrow\text{easy substitution}\rightarrow\text{alloy formation}
$$

$$
\text{small H/C/N atoms}\rightarrow\text{interstitial occupancy}\rightarrow\text{hard refractory phases}
$$

$$
\text{variable valence}+\text{lattice defects}\rightarrow\text{non-stoichiometry}
$$

## High-yield facts

- Fe$_{1-x}$O is cation-deficient and contains some Fe(III).
- Interstitial compounds are not normally described by simple ionic oxidation states.
- Many retain metallic conductivity.
- Transition-metal alloys are often hard and high-melting.
- Cr, V, W, Mo and Mn are crucial steel additives.
- Fe is overwhelmingly abundant compared with most 4d/5d metals.
- Tc lacks stable isotopes.
- A defect can create colour, conductivity and catalytic activity.

## Precision statements

Non-stoichiometry does not mean random contamination.
An alloy is not necessarily a compound of fixed formula.
Hardness of a carbide cannot be predicted only from oxidation state.
Crustal abundance is not the same as ore grade or annual production.

> **Part 7 conclusion:** the extended lattice gives transition chemistry a dimension absent from isolated molecules. Variable valence, similar metal sizes and accessible interstitial sites create alloys, hard phases and defect-rich solids with technologically decisive properties.`,
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

export default function DBlockPart07() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 7
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Alloys, Interstitial Compounds, Non-stoichiometry and Abundance</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">A solid-state account of substitutional alloys, interstitial carbides and hydrides, vacancy compensation in Fe₁₋ₓO, defect-controlled colour and conductivity, and the highly uneven geochemical abundance of transition elements.</p>
        </header>

        <DBlockPartNavigation part={7} position="top" />

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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 7 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={createMarkdownComponents(7)}>
                  {page.markdown}
                </ReactMarkdown>
                {Visual ? <Visual /> : null}
              </section>
            );
          })}
        </div>
        <DBlockPartNavigation part={7} position="bottom" />
      </div>
    </main>
  );
}
