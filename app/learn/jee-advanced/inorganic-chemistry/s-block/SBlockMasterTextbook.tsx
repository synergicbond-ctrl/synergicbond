"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type SectionLink = { id: string; label: string };

const sections: SectionLink[] = [
  { id: "foundations", label: "1. Foundations" },
  { id: "group1-trends", label: "2. Group 1 periodic properties" },
  { id: "energetics", label: "3. Energetics and reducing power" },
  { id: "group1-reactions", label: "4. Reactions of alkali metals" },
  { id: "oxygen-species", label: "5. Oxides, peroxides and superoxides" },
  { id: "hydroxides", label: "6. Hydroxides and solubility" },
  { id: "hydrides", label: "7. Hydrides and complex hydrides" },
  { id: "halides", label: "8. Halides and polyhalides" },
  { id: "oxosalts", label: "9. Oxoacid salts" },
  { id: "liquid-ammonia", label: "10. Liquid ammonia chemistry" },
  { id: "complexes", label: "11. Crowns, cryptands and organolithium" },
  { id: "lithium", label: "12. Lithium anomaly and Li–Mg" },
  { id: "sodium-industry", label: "13. Sodium compounds and industry" },
  { id: "group2-trends", label: "14. Group 2 periodic properties" },
  { id: "group2-reactions", label: "15. Reactions of Group 2" },
  { id: "group2-compounds", label: "16. Group 2 compounds" },
  { id: "beryllium", label: "17. Beryllium anomaly and Be–Al" },
  { id: "calcium", label: "18. Calcium, hardness and cement" },
  { id: "biology", label: "19. Biological importance" },
  { id: "atlas", label: "20. Reaction atlas and JEE problems" },
  { id: "uses", label: "21. Compendium of uses" },
  { id: "orders", label: "22. Master order bank" },
];

function Formula({ children }: { children: React.ReactNode }) {
  return <div className="my-3 overflow-x-auto rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 text-center font-mono text-sm font-semibold text-cyan-100 sm:text-base">{children}</div>;
}

function Callout({ title, children, tone = "cyan" }: { title: string; children: React.ReactNode; tone?: "cyan" | "amber" | "rose" | "emerald" }) {
  const map = {
    cyan: "border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-100",
    amber: "border-amber-300/20 bg-amber-300/[0.06] text-amber-50",
    rose: "border-rose-300/20 bg-rose-300/[0.06] text-rose-50",
    emerald: "border-emerald-300/20 bg-emerald-300/[0.06] text-emerald-50",
  };
  return <div className={`my-5 rounded-2xl border p-5 ${map[tone]}`}><h4 className="mb-2 text-sm font-black uppercase tracking-[0.18em]">{title}</h4><div className="space-y-2 text-sm leading-6 sm:text-base">{children}</div></div>;
}

function Visual({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure className="my-7 overflow-hidden rounded-3xl border border-white/10 bg-black/20"><div className="relative aspect-[16/9] w-full"><Image src={src} alt={alt} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 900px" /></div><figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400">{caption}</figcaption></figure>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="my-6 overflow-x-auto rounded-2xl border border-white/10"><table className="min-w-full border-collapse text-sm"><thead className="bg-slate-800 text-cyan-100"><tr>{headers.map(h => <th key={h} className="px-4 py-3 text-left font-bold">{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={i} className={i % 2 ? "bg-white/[0.025]" : "bg-white/[0.05]"}>{r.map((c, j) => <td key={j} className="border-t border-white/[0.06] px-4 py-3 align-top leading-6 text-slate-200">{c}</td>)}</tr>)}</tbody></table></div>;
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="scroll-mt-28 border-b border-white/10 pb-4 pt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-xl font-extrabold text-cyan-200 sm:text-2xl">{children}</h3>;
}

function Points({ children }: { children: React.ReactNode }) {
  return <ul className="my-4 space-y-3 pl-5 text-[15px] leading-7 text-slate-200 marker:text-cyan-300 sm:text-base">{children}</ul>;
}

export default function SBlockMasterTextbook() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => sections.filter(s => s.label.toLowerCase().includes(query.toLowerCase())), [query]);

  return <main className="min-h-screen bg-[#04101d] text-slate-100">
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#04101d]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div><p className="text-xs font-black uppercase tracking-[0.26em] text-cyan-300">Synergic Bond • JEE Advanced Chemistry</p><h1 className="mt-1 text-2xl font-black sm:text-3xl">s-Block Elements — Integrated Master Textbook</h1></div>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find a chapter…" className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-300/50 lg:w-80" />
      </div>
    </header>

    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[290px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto">
        <nav className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
          {filtered.map(s => <a key={s.id} href={`#${s.id}`} className="block rounded-xl px-3 py-2.5 text-sm leading-5 text-slate-400 transition hover:bg-cyan-300/10 hover:text-cyan-100">{s.label}</a>)}
        </nav>
      </aside>

      <article className="min-w-0 space-y-12">
        <section className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-slate-900 to-blue-500/10 p-7 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">NCERT core + handwritten notes + advanced references</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">One continuous chapter, not a gallery of cards</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">All periodic data, preparations, reactions, exceptions, structures, industrial processes, biological roles and JEE Advanced problems are placed inside the topic where they belong. The figures below are selected from the supplied visual PDFs and are integrated as teaching diagrams rather than appended screenshots.</p>
        </section>

        <section><H2 id="foundations">1. Foundations of the s-Block</H2>
          <p className="mt-5 leading-8 text-slate-300">The differentiating electron of an s-block element enters the outermost s orbital. Group 1 atoms have the valence configuration <b>ns¹</b> and normally form M⁺; Group 2 atoms have <b>ns²</b> and normally form M²⁺. Because s orbitals are spherical and progressively larger as the principal quantum number increases, the chemistry is governed mainly by atomic size, ionisation enthalpy, hydration, lattice enthalpy, polarisation and metallic bonding rather than variable oxidation states.</p>
          <H3>Why Group 1 and Group 2 behave differently</H3>
          <Points><li>Group 1 uses one electron for metallic bonding; Group 2 can use two. Group 2 metals are consequently harder and usually have higher melting points.</li><li>M²⁺ has higher charge density than M⁺. Hydration and lattice energies are therefore much greater for Group 2 salts.</li><li>Small Li⁺ and Be²⁺ polarise anions strongly. Their compounds show increased covalent character, hydrolysis and complex formation.</li><li>Ordinary M⁺ and M²⁺ ions are closed-shell and diamagnetic; colour generally comes from the anion, a radical oxygen ion, lattice defects or impurities.</li></Points>
          <Visual src="/images/s-block/power-02.png" alt="Periodic architecture of alkali metals" caption="Visual overview of the Group 1 electronic and periodic framework from the supplied visual material." />
          <Callout title="Core reasoning rule"><p>Before memorising an order, identify the dominant competition: lattice enthalpy vs hydration enthalpy, ionisation cost vs hydration release, or cation polarisation vs anion stability.</p></Callout>
        </section>

        <section><H2 id="group1-trends">2. Group 1 Periodic and Physical Properties</H2>
          <H3>Electronic configuration and oxidation state</H3><p className="leading-8 text-slate-300">Li [He]2s¹, Na [Ne]3s¹, K [Ar]4s¹, Rb [Kr]5s¹ and Cs [Xe]6s¹. Loss of the outer electron produces a noble-gas configuration. The second ionisation enthalpy is extremely high because it would remove a core electron; hence +1 is the normal oxidation state.</p>
          <DataTable headers={["Property","Li","Na","K","Rb","Cs"]} rows={[["Metallic radius / pm","152","186","227","248","265"],["IE₁ / kJ mol⁻¹","520","496","419","403","376"],["m.p. / K","454","371","336","312","302"],["density / g cm⁻³","0.53","0.97","0.86","1.53","1.90"],["E°(M⁺/M) / V","−3.04","−2.71","−2.93","−2.93","−2.92"]]} />
          <Points><li>Atomic and ionic radii increase down the group. M⁺ is much smaller than M because the outer shell is removed.</li><li>Ionisation enthalpy falls down the group, while electropositive character and ease of gas-phase electron loss increase.</li><li>Melting point and cohesive energy generally decrease. Potassium is less dense than sodium because atomic volume increases disproportionately.</li><li>Lithium is hardest and has the highest melting point in Group 1 because its atoms are smallest and metallic bonding is strongest.</li><li>Specific heat decreases approximately Li &gt; Na &gt; K &gt; Rb &gt; Cs.</li></Points>
          <H3>Flame colours and spectroscopy</H3>
          <DataTable headers={["Element","Flame colour","Important wavelength"]} rows={[["Li","crimson red","670.8 nm"],["Na","intense yellow","589.0 and 589.6 nm D-lines"],["K","violet/lilac","766.5 nm"],["Rb","red-violet","~780 nm"],["Cs","blue-violet","455.5 nm"]]} />
          <p className="leading-8 text-slate-300">The flame supplies energy to excite the outer electron. Return to a lower state emits characteristic light. Sodium emission is exceptionally intense and can mask potassium; cobalt glass suppresses the yellow region. Flame photometry measures emission intensity, while atomic absorption spectroscopy measures absorption by ground-state atoms.</p>
          <Visual src="/images/s-block/power-04.png" alt="Flame colours and periodic data" caption="Flame colours, spectra and physical-property trends integrated into the Group 1 property discussion." />
        </section>

        <section><H2 id="energetics">3. Energetics, Hydration and Reducing Power</H2>
          <p className="mt-5 leading-8 text-slate-300">The aqueous reducing strength of an alkali metal is not determined by ionisation enthalpy alone. The complete process is atomisation of the solid, ionisation of the gaseous atom and hydration of the gaseous cation.</p>
          <Formula>M(s) → M(g) → M⁺(g) + e⁻ → M⁺(aq) + e⁻</Formula>
          <Points><li>Atomisation and ionisation are endothermic.</li><li>Hydration is exothermic and becomes much more favourable for small ions.</li><li>Li⁺ has exceptionally high hydration enthalpy; this overcompensates lithium’s relatively high atomisation and ionisation energies.</li><li>Therefore lithium has the most negative E° in water, even though caesium has the lowest first ionisation enthalpy.</li><li>Water-reaction violence is kinetic; aqueous electrode potential is thermodynamic. Both statements can coexist.</li></Points>
          <DataTable headers={["Ion","Approx. hydration enthalpy / kJ mol⁻¹","Hydration strength"]} rows={[["Li⁺","−506","very high"],["Na⁺","−406","high"],["K⁺","−330","moderate"],["Rb⁺","−310","lower"],["Cs⁺","−276","lowest"]]} />
          <p className="leading-8 text-slate-300">Although bare Li⁺ is smallest, its hydrated radius is large because it holds a compact solvent shell. Consequently ionic mobility in water generally increases Li⁺ &lt; Na⁺ &lt; K⁺ &lt; Rb⁺ &lt; Cs⁺.</p>
          <Visual src="/images/s-block/alkali-env-6.png" alt="Hydrated and bare ionic radius" caption="Bare-ion radius versus hydrated radius and ionic mobility." />
          <Visual src="/images/s-block/alkali-env-8.png" alt="Lattice enthalpy versus hydration enthalpy" caption="The competition between lattice enthalpy and hydration enthalpy that controls solubility." />
        </section>

        <section><H2 id="group1-reactions">4. General Reactions of Alkali Metals</H2>
          <H3>With water</H3><Formula>2M + 2H₂O → 2MOH + H₂↑</Formula><p className="leading-8 text-slate-300">Reaction rate increases down the group. Lithium reacts steadily, sodium melts into a mobile globule, and potassium or heavier metals may ignite. The difference is controlled by activation barriers, melting point, heat removal and surface behaviour.</p>
          <H3>With oxygen and nitrogen</H3><Points><li>Lithium gives mainly Li₂O and also reacts directly with nitrogen to give Li₃N.</li><li>Sodium gives mainly Na₂O₂ in excess oxygen.</li><li>Potassium, rubidium and caesium stabilise superoxides MO₂.</li><li>Large cations stabilise large diffuse anions through favourable lattice packing and lower polarisation.</li></Points>
          <Formula>6Li + N₂ → 2Li₃N</Formula>
          <H3>With hydrogen, halogens and proton donors</H3><Formula>2M + H₂ → 2MH</Formula><Formula>2M + X₂ → 2MX</Formula><Formula>2M + 2ROH → 2ROM + H₂</Formula>
          <Points><li>Saline hydrides contain H⁻ and are strong bases and reducing agents.</li><li>With gaseous NH₃, alkali metals form amides; with terminal alkynes the heavier metals form acetylides.</li><li>With sulfur, normal sulfides and polysulfides M₂Sₙ are obtained.</li><li>With graphite, potassium and heavier metals form intercalation compounds.</li></Points>
          <Visual src="/images/s-block/power-06.png" alt="Water reaction and lithium paradox" caption="Water reactivity, kinetic control and the lithium electrode-potential paradox." />
        </section>

        <section><H2 id="oxygen-species">5. Oxides, Peroxides, Superoxides and Ozonides</H2>
          <DataTable headers={["Species","Ion","O–O bond order","Magnetism","Characteristic cation"]} rows={[["Normal oxide","O²⁻","no O–O bond","diamagnetic","Li, controlled Na"],["Peroxide","O₂²⁻","1","diamagnetic","Na"],["Superoxide","O₂⁻","1.5","paramagnetic","K, Rb, Cs"],["Ozonide","O₃⁻","delocalised","paramagnetic","large alkali cations"]]} />
          <H3>Molecular-orbital explanation</H3><p className="leading-8 text-slate-300">Adding electrons to antibonding π* orbitals lowers the O–O bond order: O₂ (2), O₂⁻ (1.5), O₂²⁻ (1). Superoxide retains one unpaired electron and is paramagnetic; peroxide has all electrons paired.</p>
          <Formula>2Na + O₂ → Na₂O₂</Formula><Formula>K + O₂ → KO₂</Formula>
          <H3>Important reactions of sodium peroxide</H3><Formula>Na₂O₂ + 2H₂O → 2NaOH + H₂O₂</Formula><Formula>2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂</Formula><Formula>Na₂O₂ + CO → Na₂CO₃</Formula>
          <H3>Important reactions of potassium superoxide</H3><Formula>2KO₂ + 2H₂O → 2KOH + H₂O₂ + O₂</Formula><Formula>4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂</Formula><p className="leading-8 text-slate-300">KO₂ removes carbon dioxide while regenerating oxygen; it is used in breathing apparatus and closed environments.</p>
          <Visual src="/images/s-block/power-07.png" alt="Oxide peroxide superoxide comparison" caption="Integrated comparison of the three principal oxygen species." />
        </section>

        <section><H2 id="hydroxides">6. Hydroxides, Basicity and Solubility</H2>
          <p className="mt-5 leading-8 text-slate-300">All alkali-metal hydroxides are strong bases. Solubility and thermal stability generally increase down the group, whereas LiOH is the least stable and decomposes to Li₂O.</p>
          <Formula>2LiOH → Li₂O + H₂O</Formula>
          <DataTable headers={["Hydroxide","Qualitative solubility","Key point"]} rows={[["LiOH","lowest","partly covalent; decomposes on heating"],["NaOH","very high","major industrial base"],["KOH","very high","high alcohol solubility; alcoholic KOH used in elimination"],["RbOH/CsOH","extremely high","very strong, deliquescent bases"]]} />
          <H3>Important NaOH/KOH reactions</H3><Formula>2NaOH + CO₂ → Na₂CO₃ + H₂O</Formula><Formula>NaOH + NH₄Cl → NH₃ + NaCl + H₂O</Formula><Formula>2NaOH + Cl₂ (cold, dilute) → NaCl + NaOCl + H₂O</Formula><Formula>6NaOH + 3Cl₂ (hot, concentrated) → 5NaCl + NaClO₃ + 3H₂O</Formula>
          <Callout title="JEE trap" tone="amber"><p>Do not confuse basic strength with solubility. A sparingly soluble hydroxide may still have strongly basic dissolved ions; the amount dissolved and degree of dissociation are distinct.</p></Callout>
        </section>

        <section><H2 id="hydrides">7. Hydrides and Complex Hydrides</H2>
          <H3>Saline hydrides</H3><p className="leading-8 text-slate-300">LiH, NaH and heavier MH solids contain hydride ion. They react violently with water and are stronger bases than hydroxide.</p><Formula>MH + H₂O → MOH + H₂</Formula>
          <H3>Lithium aluminium hydride</H3><Formula>4LiH + AlCl₃ → LiAlH₄ + 3LiCl</Formula><Points><li>LiAlH₄ reduces aldehydes, ketones, carboxylic acids, esters, acid chlorides and many inorganic halides.</li><li>It reacts violently with water and is used in dry ether.</li><li>Typical inorganic reductions include BCl₃ → B₂H₆, PCl₃ → PH₃ and SiCl₄ → SiH₄ under appropriate stoichiometry.</li></Points>
          <H3>Sodium borohydride</H3><Formula>NaH + B(OCH₃)₃ → NaBH₄ + 3NaOCH₃</Formula><p className="leading-8 text-slate-300">NaBH₄ is milder and more selective than LiAlH₄, commonly reducing aldehydes and ketones in protic or mixed solvents.</p>
          <Callout title="Mechanistic idea" tone="emerald"><p>Both reagents act as hydride donors. The nucleophilic H⁻ equivalent attacks an electron-poor centre such as carbonyl carbon, followed by protonation during work-up.</p></Callout>
        </section>

        <section><H2 id="halides">8. Halides, Polyhalides and Crystal Structures</H2>
          <Points><li>Ionic character increases approximately LiX &lt; NaX &lt; KX &lt; RbX &lt; CsX for a fixed anion.</li><li>For a fixed cation, covalent character rises F⁻ &lt; Cl⁻ &lt; Br⁻ &lt; I⁻ because polarizability increases.</li><li>LiF is sparingly soluble because of exceptional lattice enthalpy; LiCl, LiBr and LiI have greater covalent character and dissolve in several organic solvents.</li><li>Most common alkali halides adopt the NaCl structure (6:6 coordination); CsCl, CsBr and CsI often adopt the CsCl structure (8:8 coordination).</li></Points>
          <DataTable headers={["Structure","Coordination","Description"]} rows={[["NaCl type","6:6","interpenetrating fcc arrays; octahedral coordination"],["CsCl type","8:8","simple cubic arrangement with opposite ion at cube centre"]]} />
          <H3>Polyhalides</H3><Formula>I⁻ + I₂ ⇌ I₃⁻</Formula><Formula>KBr + ICl → K[BrICl]</Formula><p className="leading-8 text-slate-300">Large cations stabilise large polyhalide ions. Bonding is delocalised and frequently described by three-centre four-electron models.</p>
          <Visual src="/images/s-block/power-13.png" alt="Alkali metal salts and structures" caption="Visual comparison of alkali-metal compound structures and trends." />
        </section>

        <section><H2 id="oxosalts">9. Carbonates, Hydrogen Carbonates, Nitrates and Sulfates</H2>
          <H3>Carbonates</H3><p className="leading-8 text-slate-300">All common Group 1 carbonates are soluble and thermally stable except Li₂CO₃, which is sparingly soluble and decomposes because small Li⁺ strongly polarises CO₃²⁻ and stabilises Li₂O.</p><Formula>Li₂CO₃ → Li₂O + CO₂</Formula>
          <H3>Hydrogen carbonates</H3><Formula>2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O</Formula><p className="leading-8 text-slate-300">LiHCO₃ exists only in solution. NaHCO₃ is sparingly soluble in cold ammoniated brine, enabling the Solvay process.</p>
          <H3>Nitrates</H3><Formula>4LiNO₃ → 2Li₂O + 4NO₂ + O₂</Formula><Formula>2MNO₃ → 2MNO₂ + O₂ &nbsp; (M = Na, K, Rb, Cs)</Formula>
          <H3>Sulfates and acid sulfates</H3><Formula>2NaHSO₄ → Na₂S₂O₇ + H₂O</Formula><p className="leading-8 text-slate-300">Most Group 1 sulfates are soluble. Glauber’s salt, Na₂SO₄·10H₂O, shows temperature-dependent crystallisation and dehydration behaviour.</p>
          <Callout title="Why lithium resembles Group 2" tone="amber"><p>Li⁺ has size and polarising behaviour closer to Mg²⁺ than to Na⁺. Consequently LiNO₃ and Li₂CO₃ decompose like the corresponding Group 2 salts.</p></Callout>
        </section>

        <section><H2 id="liquid-ammonia">10. Alkali Metals in Liquid Ammonia</H2>
          <Formula>M + (x+y)NH₃ → [M(NH₃)ₓ]⁺ + [e(NH₃)ᵧ]⁻</Formula>
          <Points><li>Dilute solutions are deep blue because of solvated electrons.</li><li>They are paramagnetic because the electrons are unpaired.</li><li>Electrical conductivity is extremely high.</li><li>Concentrated solutions become copper-bronze and show metallic conductivity; electron pairing and cluster formation reduce paramagnetism.</li><li>On standing, especially with catalysts/impurities, metal amide and hydrogen form.</li></Points>
          <Formula>2M + 2NH₃ → 2MNH₂ + H₂</Formula>
          <H3>Reducing action</H3><p className="leading-8 text-slate-300">Solvated electrons reduce aromatic rings, inorganic ions and coordination complexes. Unlike water, liquid ammonia is not rapidly consumed by proton reduction, so exceptionally strong reducing conditions can be maintained.</p>
          <Visual src="/images/s-block/power-08.png" alt="Alkali metals in liquid ammonia" caption="Blue dilute solutions, bronze concentrated solutions and solvated-electron chemistry." />
          <Visual src="/images/s-block/alkali-env-10.png" alt="Blue and bronze liquid ammonia solutions" caption="Concentration-dependent electronic behaviour of metal–ammonia solutions." />
        </section>

        <section><H2 id="complexes">11. Crown Ethers, Cryptands, Sodides, Electrides and Organolithium</H2>
          <H3>Crown ethers and cryptands</H3><DataTable headers={["Ligand","Best size match"]} rows={[["12-crown-4","Li⁺"],["15-crown-5","Na⁺"],["18-crown-6","K⁺"]]} /><p className="leading-8 text-slate-300">Selectivity arises from cavity size, donor geometry, desolvation energy and conformational flexibility. Cryptands encapsulate the cation more completely and form highly stable cryptates.</p>
          <H3>Sodides and electrides</H3><p className="leading-8 text-slate-300">Strong cation encapsulation can stabilise extraordinary salts whose anion is Na⁻ (a sodide) or an electron trapped in a cavity (an electride).</p>
          <H3>Organolithium compounds</H3><Formula>R–X + 2Li → RLi + LiX</Formula><Points><li>Organolithium reagents are highly polar and frequently tetrameric or hexameric rather than monomeric.</li><li>They act as very strong bases and nucleophiles.</li><li>They add to carbonyl compounds, react with CO₂ to give carboxylic acids after work-up and participate in metal–halogen exchange.</li><li>Heavier organoalkali compounds are more ionic and generally less selective.</li></Points>
          <Visual src="/images/s-block/alkali-env-11.png" alt="Crown ether complexation" caption="Size-selective crown-ether complexation." />
          <Visual src="/images/s-block/alkali-env-13.png" alt="Cryptand encapsulation" caption="Three-dimensional cation encapsulation by a cryptand." />
        </section>

        <section><H2 id="lithium">12. Anomalous Lithium and the Li–Mg Diagonal Relationship</H2>
          <H3>Origin of anomaly</H3><Points><li>Very small atomic and ionic radius.</li><li>High ionisation enthalpy and high hydration enthalpy.</li><li>High polarising power and greater covalent character.</li><li>Stronger metallic bonding, higher hardness and melting point.</li></Points>
          <H3>Consequences</H3><Points><li>Forms Li₂O rather than a stable superoxide under normal conditions.</li><li>Forms Li₃N directly.</li><li>LiOH, Li₂CO₃ and LiNO₃ decompose on heating.</li><li>LiF, Li₂CO₃ and Li₃PO₄ are sparingly soluble.</li><li>LiCl, LiBr and LiI are more covalent, deliquescent and soluble in organic solvents.</li><li>Forms organolithium compounds and strong complexes.</li></Points>
          <H3>Li–Mg similarity</H3><DataTable headers={["Common behaviour","Li","Mg"]} rows={[["Nitride","Li₃N","Mg₃N₂"],["Normal oxide","Li₂O","MgO"],["Carbonate on heating","Li₂O + CO₂","MgO + CO₂"],["Nitrate on heating","oxide + NO₂ + O₂","oxide + NO₂ + O₂"],["Chloride","hydrated, deliquescent, partly covalent","hydrated, deliquescent, partly covalent"]]} />
          <Visual src="/images/s-block/maverick-5.png" alt="Lithium anomaly" caption="Anomaly map for lithium." />
          <Visual src="/images/s-block/maverick-10.png" alt="Lithium magnesium diagonal relationship" caption="Size and charge-density basis of the Li–Mg diagonal relationship." />
        </section>

        <section><H2 id="sodium-industry">13. Sodium Chloride, Sodium Hydroxide and Sodium Carbonate</H2>
          <H3>Downs cell</H3><p className="leading-8 text-slate-300">Sodium is produced by electrolysis of molten NaCl mixed with CaCl₂ to lower the operating temperature. Water cannot be present because it is reduced preferentially.</p><Formula>Cathode: Na⁺ + e⁻ → Na(l)</Formula><Formula>Anode: 2Cl⁻ → Cl₂(g) + 2e⁻</Formula>
          <H3>Chlor-alkali process</H3><Formula>2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂</Formula><p className="leading-8 text-slate-300">Modern membrane cells separate anolyte and catholyte, preventing chlorine from contacting hydroxide. Historical diaphragm and mercury cells should be understood for exam comparison but are environmentally inferior.</p>
          <H3>Solvay process</H3><Formula>NaCl + NH₃ + CO₂ + H₂O → NaHCO₃↓ + NH₄Cl</Formula><Formula>2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O</Formula><Formula>2NH₄Cl + Ca(OH)₂ → 2NH₃ + CaCl₂ + 2H₂O</Formula><p className="leading-8 text-slate-300">NH₃ and CO₂ are recycled. KHCO₃ is too soluble, so potassium carbonate cannot be manufactured efficiently by the same precipitation route.</p>
          <Visual src="/images/s-block/sodium-ind-2.png" alt="Industrial sodium chemistry overview" caption="Brine as a feedstock for sodium hydroxide, chlorine and sodium carbonate." />
          <Visual src="/images/s-block/sodium-ind-8.png" alt="Solvay precipitation" caption="Selective NaHCO₃ precipitation in the Solvay process." />
          <Visual src="/images/s-block/sodium-ind-9.png" alt="Solvay recycling loop" caption="Closed-loop recovery of ammonia and carbon dioxide." />
        </section>

        <section><H2 id="group2-trends">14. Group 2 Periodic and Physical Properties</H2>
          <p className="mt-5 leading-8 text-slate-300">The elements Be, Mg, Ca, Sr, Ba and Ra have ns² valence configurations. Formation of M²⁺ is favoured by large lattice and hydration enthalpies, whereas the third ionisation enthalpy is prohibitively high.</p>
          <DataTable headers={["Property","Be","Mg","Ca","Sr","Ba"]} rows={[["IE₁ / kJ mol⁻¹","899","738","590","550","503"],["m.p. / °C","1287","650","842","777","727"],["Flame colour","none","none","brick red","crimson","apple green"],["Hydration strength","maximum","very high","high","lower","lowest"]]} />
          <Points><li>Atomic and ionic radii increase down the group.</li><li>Ionisation enthalpy and electronegativity decrease.</li><li>Metallic character, reducing character and reactivity increase.</li><li>Group 2 metals are harder and higher-melting than Group 1 metals because two electrons contribute to metallic bonding.</li><li>Be and Mg do not show useful flame colours because suitable visible transitions are not efficiently excited in a flame.</li></Points>
          <Visual src="/images/s-block/group2-3.png" alt="Group 2 periodic trends" caption="Periodicity and basicity architecture of Group 2." />
          <Visual src="/images/s-block/group2-4.png" alt="Group 2 solubility" caption="Opposite solubility trends of hydroxides and sulfates." />
        </section>

        <section><H2 id="group2-reactions">15. General Reactions of Group 2</H2>
          <H3>With oxygen and nitrogen</H3><Formula>2M + O₂ → 2MO</Formula><Formula>3M + N₂ → M₃N₂</Formula><p className="leading-8 text-slate-300">Be and Mg are protected by coherent oxide films. Burning magnesium produces MgO with some Mg₃N₂. Barium readily forms BaO₂ in oxygen.</p>
          <H3>With water</H3><Points><li>Be: no reaction because of passivation and high activation barrier.</li><li>Mg: slow with cold water, faster with hot water, and reacts with steam to form MgO + H₂.</li><li>Ca, Sr and Ba: react with cold water to form M(OH)₂ and H₂.</li></Points>
          <H3>With halogens, hydrogen and non-metals</H3><Formula>M + X₂ → MX₂</Formula><Formula>M + H₂ → MH₂</Formula><p className="leading-8 text-slate-300">BeH₂ is polymeric and electron deficient; CaH₂, SrH₂ and BaH₂ are ionic. Group 2 metals also form phosphides, sulfides, selenides, tellurides and carbides at high temperature.</p>
          <Callout title="Kinetics versus thermodynamics" tone="rose"><p>Be and Mg can be thermodynamically capable reducing agents while appearing unreactive because oxide films prevent contact with the reagent.</p></Callout>
        </section>

        <section><H2 id="group2-compounds">16. Oxides, Hydroxides, Sulfates, Nitrates, Hydrides, Nitrides and Carbides</H2>
          <H3>Oxides and hydroxides</H3><p className="leading-8 text-slate-300">Basicity rises BeO &lt; MgO &lt; CaO &lt; SrO &lt; BaO as bonding becomes more ionic. BeO and Be(OH)₂ are amphoteric.</p><Formula>Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻</Formula>
          <H3>Solubility contrasts</H3><DataTable headers={["Series","Trend down Group 2","Reason"]} rows={[["Hydroxides","solubility increases","lattice enthalpy falls faster than hydration enthalpy"],["Sulfates","solubility decreases","hydration enthalpy falls strongly; sulfate lattice changes less"],["Carbonates","mostly insoluble","high-charge M²⁺/CO₃²⁻ lattice"],["Fluorides","low solubility for many members","high lattice enthalpy"]]} />
          <H3>Nitrates</H3><Formula>2M(NO₃)₂ → 2MO + 4NO₂ + O₂</Formula>
          <H3>Nitrides and carbides</H3><Formula>Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃</Formula><Formula>Be₂C + 4H₂O → 2Be(OH)₂ + CH₄</Formula><Formula>Mg₂C₃ + 4H₂O → 2Mg(OH)₂ + CH₃C≡CH</Formula><Formula>CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂</Formula>
          <Visual src="/images/s-block/group2-7.png" alt="Group 2 compounds" caption="Bonding changes from covalent beryllium compounds to ionic heavier Group 2 compounds." />
        </section>

        <section><H2 id="beryllium">17. Beryllium Anomaly and Be–Al Diagonal Relationship</H2>
          <H3>Why beryllium is exceptional</H3><Points><li>Very small size and high charge density.</li><li>High ionisation enthalpy and electronegativity.</li><li>Strong polarising power, extensive covalency and hydrolysis.</li><li>Frequent four-coordinate tetrahedral complexes because of small size and ligand crowding.</li><li>Passivation by BeO; no reaction with water.</li></Points>
          <H3>Structures</H3><p className="leading-8 text-slate-300">At high temperature gaseous BeCl₂ is linear. Cooler vapour contains bridged dimers/oligomers. Solid BeCl₂ is polymeric with chloride bridges. BeH₂ is also polymeric with three-centre two-electron Be–H–Be bonds.</p>
          <H3>Amphoterism and complex formation</H3><Formula>BeO + 2H⁺ → Be²⁺ + H₂O</Formula><Formula>BeO + 2OH⁻ + H₂O → [Be(OH)₄]²⁻</Formula><Formula>BeF₂ + 2F⁻ → [BeF₄]²⁻</Formula>
          <H3>Be–Al similarity</H3><Points><li>Protective oxide films.</li><li>Amphoteric oxides and hydroxides.</li><li>Covalent, Lewis-acidic chlorides with bridging.</li><li>Strong fluoro-complexes.</li><li>Formation of nitrides and carbides.</li></Points>
          <Visual src="/images/s-block/be-10.png" alt="Polymeric beryllium chloride" caption="Polymeric chain structure of solid BeCl₂." />
          <Visual src="/images/s-block/be-12.png" alt="Beryllium amphoterism" caption="Acid–base behaviour of beryllium oxide and hydroxide." />
          <Visual src="/images/s-block/be-15.png" alt="Beryllium aluminium diagonal relationship" caption="Diagonal relationship between beryllium and aluminium." />
        </section>

        <section><H2 id="calcium">18. Calcium Compounds, Hardness of Water and Cement</H2>
          <H3>Lime cycle</H3><Formula>CaCO₃ ⇌ CaO + CO₂</Formula><Formula>CaO + H₂O → Ca(OH)₂</Formula><Formula>Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O</Formula><Formula>CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂(aq)</Formula>
          <p className="leading-8 text-slate-300">Quicklime is CaO; slaked lime is Ca(OH)₂. Lime water is a clear saturated solution; milk of lime is a suspension. Excess CO₂ clears the CaCO₃ turbidity by forming soluble calcium hydrogen carbonate.</p>
          <H3>Hardness of water</H3><Points><li>Temporary hardness: Ca(HCO₃)₂ and Mg(HCO₃)₂; removed by boiling or lime treatment.</li><li>Permanent hardness: mainly chlorides and sulfates; removed by washing soda, zeolite or ion-exchange resins.</li><li>Hardness is commonly expressed as mg L⁻¹ CaCO₃ equivalent.</li></Points>
          <H3>Gypsum and plaster of Paris</H3><Formula>CaSO₄·2H₂O → CaSO₄·½H₂O + 3/2 H₂O</Formula><p className="leading-8 text-slate-300">Plaster sets by rehydration and growth of interlocking gypsum crystals. Strong heating produces dead-burnt anhydrite that hydrates too slowly.</p>
          <H3>Portland cement</H3><Points><li>Raw materials: limestone and clay.</li><li>Important clinker phases: C₃S, C₂S, C₃A and calcium aluminoferrite.</li><li>Gypsum retards rapid C₃A hydration and prevents flash setting.</li><li>C₃S gives early strength; C₂S contributes later strength.</li></Points>
          <Visual src="/images/s-block/industry-9.png" alt="Lime kiln" caption="Industrial calcination of limestone to quicklime." />
          <Visual src="/images/s-block/industry-10.png" alt="Lime uses" caption="Construction, metallurgy and water-treatment applications of lime." />
        </section>

        <section><H2 id="biology">19. Biological Importance of Na, K, Mg and Ca</H2>
          <H3>Sodium and potassium</H3><p className="leading-8 text-slate-300">Na⁺ is the principal extracellular cation; K⁺ is the principal intracellular cation. The Na⁺/K⁺-ATPase transports 3 Na⁺ out and 2 K⁺ in per ATP, maintaining membrane potential and concentration gradients used for nerve impulses and nutrient transport.</p>
          <Formula>ATP + 3Na⁺(in) + 2K⁺(out) → ADP + Pᵢ + 3Na⁺(out) + 2K⁺(in)</Formula>
          <H3>Magnesium</H3><Points><li>Central metal ion of chlorophyll.</li><li>Coordinates ATP and reduces electrostatic repulsion between phosphate groups.</li><li>Cofactor for many kinases and phosphate-transfer enzymes.</li></Points>
          <H3>Calcium</H3><Points><li>Structural mineral in bones and teeth.</li><li>Second messenger in muscle contraction and secretion.</li><li>Required for blood coagulation and membrane stability.</li><li>Plasma concentration is regulated by parathyroid hormone and calcitonin.</li></Points>
          <Visual src="/images/s-block/bio-3.png" alt="Cellular distribution of s-block ions" caption="Cellular distribution of Na⁺, K⁺, Mg²⁺ and Ca²⁺." />
          <Visual src="/images/s-block/bio-4.png" alt="Sodium potassium pump" caption="ATP-driven Na⁺/K⁺ pump and electrochemical gradients." />
        </section>

        <section><H2 id="atlas">20. Integrated Reaction Atlas and JEE Advanced Problems</H2>
          <H3>Essential conversion sequences</H3><Formula>NaCl(aq) → NaOH + Cl₂ + H₂</Formula><Formula>NaCl(l) → Na + Cl₂</Formula><Formula>NaOH ⇌ Na₂CO₃ ⇌ NaHCO₃</Formula><Formula>CaCO₃ ⇌ CaO → Ca(OH)₂ → CaCO₃</Formula><Formula>CaSO₄·2H₂O ⇌ CaSO₄·½H₂O ⇌ CaSO₄</Formula>
          <H3>Sequence-based questions</H3>
          <ol className="my-5 space-y-4 pl-6 text-slate-200 marker:font-bold marker:text-cyan-300"><li>Identify A–F when lithium is heated in air, products are treated separately with water and hydrochloric acid, and white fumes are observed.</li><li>Construct the sodium reaction network involving NaCl, NaNH₂, Na₂O, NaOH, Na₂CO₃ and NaHCO₃.</li><li>Explain why KO₂ is paramagnetic and write its reactions with water and carbon dioxide.</li><li>Compare structures of BeCl₂ in high-temperature vapour, cooler vapour and solid state.</li><li>Calculate hardness as CaCO₃ when a sample contains a specified concentration of Mg²⁺ or Ca²⁺.</li><li>Explain the opposite solubility trends of Group 2 hydroxides and sulfates using lattice and hydration enthalpies.</li></ol>
          <H3>Master exam traps</H3><Callout title="Do not confuse" tone="rose"><Points><li>Lowest ionisation enthalpy with strongest aqueous reducing agent.</li><li>Bare ionic radius with hydrated ionic radius.</li><li>Thermodynamic feasibility with visible reaction rate.</li><li>Discrete molecular structure with an infinite crystal lattice.</li><li>Basic strength with solubility.</li><li>NCERT trend statements with first-member anomalies.</li></Points></Callout>
          <Visual src="/images/s-block/maverick-14.png" alt="Anomaly and diagonal relationship summary" caption="Integrated comparison of first-member anomalies and diagonal relationships." />
        </section>

        <section><H2 id="uses">21. Compendium of Industrial, Laboratory and Everyday Uses</H2>
          <p className="mt-5 leading-8 text-slate-300">Uses questions are asked directly and as distractors inside assertion–reason and match-the-column items. This section collects every s-block use worth knowing, organised by element and then by compound, so nothing has to be hunted through the theory sections above.</p>
          <H3>The metals themselves</H3>
          <DataTable headers={["Metal","Principal uses"]} rows={[
            ["Lithium","Li–Pb white-metal bearing alloys; Li–Al alloys for aircraft parts; Li–Mg armour plate; anode in high-energy-density Li-ion and Li-primary batteries; thermonuclear (fusion) fuel as ⁶Li; lithium carbonate is used in psychiatric medicine to treat bipolar disorder."],
            ["Sodium","Reducing agent in the extraction of metals (e.g. Ti, Zr via the Na-reduction route); Na–Pb alloy historically made PbEt₄/PbMe₄ antiknock petrol additives; liquid Na is the coolant in fast-breeder nuclear reactors; sodium-vapour lamps for street lighting; laboratory drying agent (Na wire) for inert solvents."],
            ["Potassium","Essential macronutrient — KCl and K₂SO₄ are major fertilisers; KOH manufactures soft soap and absorbs CO₂/acid gases; K and Na together maintain nerve/muscle electrophysiology (Section 19)."],
            ["Rubidium / caesium","Very low ionisation enthalpy makes Cs (with K) the classic photoelectric-cell metal; ¹³³Cs defines the SI second in atomic clocks."],
            ["Beryllium","Cu–Be alloys for non-sparking, high-strength springs and tools; window material for X-ray tubes (low atomic number, high transparency to X-rays); moderator/reflector in some nuclear reactors."],
            ["Magnesium","Mg–Al–Zn–Mn alloys for lightweight aircraft and automotive parts; ribbon/powder in flash photography, flares, incendiary bombs and fireworks (dazzling white light on burning); Grignard-reagent chemistry (organic synthesis) is built on magnesium metal."],
            ["Calcium","Reducing agent for extracting metals whose oxides resist carbon reduction (e.g. Cr, Th, U from their halides); Ca and Ba are used as \"getters\" to scavenge residual O₂/N₂ from vacuum tubes."],
            ["Radium","Radiotherapy — historically used to treat cancer via its ionising radiation, now largely superseded by other isotopes."],
          ]} />
          <H3>Sodium and potassium compounds</H3>
          <DataTable headers={["Compound","Uses"]} rows={[
            ["Na₂O₂","Preparing H₂O₂ and O₂ in the lab; oxygenating air and scrubbing CO₂ in submarines/space capsules; bleaching agent (via benzoyl peroxide route) and laboratory oxidising agent."],
            ["KO₂","Air purifier in submarines, spacecraft and breathing apparatus — it absorbs CO₂ and moisture while releasing O₂."],
            ["NaOH (caustic soda)","Manufacture of soap, paper, rayon (artificial silk) and dyes; petroleum refining; purification of bauxite (Bayer process); mercerising cotton textiles; laboratory reagent."],
            ["KOH (caustic potash)","Manufacture of soft soap; absorbing CO₂/SO₂/NO gases (preferred over NaOH because KHCO₃ is soluble and will not choke apparatus); alcoholic KOH is the classic organic-chemistry reagent for dehydrohalogenation/elimination."],
            ["Na₂CO₃ (washing soda)","Water softening, laundering; manufacture of glass, soap, borax and caustic soda; paper, paint and textile industries; primary/secondary standard in acid–base titrations."],
            ["NaHCO₃ (baking soda)","Leavening agent in baking (releases CO₂ on heating/with acid); mild antiseptic for skin; component of dry-powder fire extinguishers and ORS (oral rehydration) formulations; antacid."],
            ["K₂CO₃ (pearl ash)","Glass manufacture (potash glass); soft-soap manufacture."],
            ["NaCl","Table/food salt; feedstock for NaOH, Na₂CO₃, Na₂O₂ and Cl₂ manufacture; freezing-mixture component (ice–salt, down to about −23 °C); de-icing roads."],
            ["KCl","Fertiliser; source of potassium in KOH/K₂CO₃ manufacture."],
            ["Na₂SO₄ (Glauber's salt)","Manufacture of glass, dyes and detergents; mild laxative in medicine; kraft (paper-pulping) process."],
            ["K₂SO₄","Fertiliser (tobacco, wheat — chloride-sensitive crops); manufacture of potassium alum."],
          ]} />
          <H3>Magnesium and calcium compounds</H3>
          <DataTable headers={["Compound","Uses"]} rows={[
            ["MgO","Refractory bricks/linings for furnaces (very high m.p.); basic flux removing acidic Si/P/S impurities during steel-making."],
            ["Mg(OH)₂","\"Milk of magnesia\" — antacid and mild laxative in medicine."],
            ["MgCO₃","Ingredient of toothpaste (mild abrasive/antacid); with MgO it forms Sorel cement (magnesium oxychloride), used in dental fillings and flooring."],
            ["MgSO₄·7H₂O (Epsom salt)","Medicinal purgative/laxative; bath salts; mordant in dyeing and tanning; magnesia mixtures."],
            ["CaO (quicklime)","Manufacturing cement and Na₂CO₃ (Gossage/causticisation route); purifying sugar; dye manufacture; drying agent; lime-light illumination."],
            ["Ca(OH)₂ (slaked lime)","Mortar (with sand); whitewash (disinfectant); glass-making; tanning; sugar-refining; manufacture of bleaching powder; softening temporary hard water (lime-soda process)."],
            ["CaCO₃","Building material (marble/limestone); manufacture of quicklime and cement; flux in iron extraction; antacid; mild abrasive in toothpaste; filler in cosmetics, paints, distempers and chewing gum."],
            ["CaSO₄·½H₂O (plaster of Paris)","Surgical/orthopaedic casts; dentistry; statues, moulds and decorative casts; blackboard chalk."],
            ["CaCl₂","Laboratory/industrial drying agent for gases and solvents (not NH₃ or alcohols, which it forms adducts with); de-icing roads; refrigeration brine."],
            ["CaOCl₂ (bleaching powder)","Bleaching textiles, wood pulp and paper; disinfecting water supplies and sewage; laboratory oxidant; manufacture of chloroform."],
            ["CaC₂","Manufacture of acetylene (C₂H₂) and, via the nitrogen-fixation route, calcium cyanamide (CaCN₂) fertiliser."],
          ]} />
        </section>

        <section><H2 id="orders">22. Master Order Bank — Every High-Frequency Ranking Question</H2>
          <p className="mt-5 leading-8 text-slate-300">"Arrange in increasing/decreasing order of…" is the single most repeated s-block question format in JEE Advanced. Every order below follows directly from the reasoning already built in Sections 1–20 — use this table to drill them, not to memorise them blind.</p>
          <H3>Physical and atomic properties</H3>
          <DataTable headers={["Property (increasing →)","Order"]} rows={[
            ["Atomic / ionic radius, Group 1","Li < Na < K < Rb < Cs"],
            ["Atomic / ionic radius, Group 2","Be < Mg < Ca < Sr < Ba"],
            ["Density, Group 1","Li < K < Na < Rb < Cs (K breaks the simple trend)"],
            ["First ionisation enthalpy, Group 1","Cs < Rb < K < Na < Li"],
            ["First ionisation enthalpy, Group 2","Ba < Sr < Ca < Mg < Be"],
            ["Melting point, Group 1","Cs < Rb < K < Na < Li"],
            ["Boiling point, Group 1","Rb < Cs < K < Na < Li"],
            ["Melting point, Group 2","Mg < Ba < Sr < Ca < Be"],
            ["Metallic / electropositive character, Group 1","Li < Na < K < Rb < Cs"],
            ["Hydration enthalpy of M⁺","Cs⁺ < Rb⁺ < K⁺ < Na⁺ < Li⁺"],
            ["Hydration enthalpy of M²⁺","Ba²⁺ < Sr²⁺ < Ca²⁺ < Mg²⁺ < Be²⁺"],
            ["Ionic (hydrated-shell-free) size in water — mobility of hydrated ion","Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺ (opposite of bare-ion radius — the small ion drags the biggest hydration shell)"],
            ["Effective hydrated radius","Cs⁺ < Rb⁺ < K⁺ < Na⁺ < Li⁺"],
          ]} />
          <H3>Reducing power and reactivity</H3>
          <DataTable headers={["Property (increasing →)","Order"]} rows={[
            ["Reducing power, gas phase (Group 1)","Li < Na < K < Rb < Cs"],
            ["Reducing power, aqueous solution (Group 1)","Na < K < Rb < Cs < Li (lithium flips to the top — hydration enthalpy dominates)"],
            ["Reactivity toward cold water, Group 1","Li < Na < K < Rb < Cs"],
            ["Reactivity toward water, Group 2","Be(none) < Mg(steam only) < Ca < Sr < Ba"],
            ["Thermal stability of M–H bond (hydrides), Group 1","CsH < RbH < KH < NaH < LiH"],
          ]} />
          <H3>Basicity, solubility and thermal stability of compounds</H3>
          <DataTable headers={["Property (increasing →)","Order"]} rows={[
            ["Basic strength of oxides, Group 2","BeO < MgO < CaO < SrO < BaO"],
            ["Basic strength / solubility / thermal stability of hydroxides, Group 1","LiOH < NaOH < KOH < RbOH < CsOH"],
            ["Basic strength / solubility of hydroxides, Group 2","Be(OH)₂ < Mg(OH)₂ < Ca(OH)₂ < Sr(OH)₂ < Ba(OH)₂"],
            ["Thermal stability of carbonates, Group 1","Li₂CO₃ < Na₂CO₃ < K₂CO₃ < Rb₂CO₃ < Cs₂CO₃"],
            ["Thermal stability of carbonates, Group 2","BeCO₃ < MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃"],
            ["Solubility of carbonates, Group 2","BeCO₃ < MgCO₃ < CaCO₃ < BaCO₃ (all sparingly soluble; this is the relative order)"],
            ["Thermal stability of nitrates","LiNO₃ (behaves like Group 2) < NaNO₃ ≈ KNO₃ ≈ RbNO₃ ≈ CsNO₃ (all give nitrite + O₂; Li alone jumps straight to oxide + NO₂ + O₂)"],
            ["Solubility of fluorides, Group 1","LiF < NaF < KF < RbF < CsF"],
            ["Solubility / covalent character, lithium halides","LiF < LiCl < LiBr < LiI"],
            ["Solubility of sulfates, Group 2","BaSO₄ < SrSO₄ < CaSO₄ < MgSO₄ (Be²⁺/Mg²⁺ sulfates dissolve; heavier members precipitate)"],
          ]} />
          <H3>Structural and bonding character</H3>
          <DataTable headers={["Property (increasing →)","Order"]} rows={[
            ["Ionic character of alkali halides, fixed anion","LiX < NaX < KX < RbX < CsX"],
            ["Covalent character of alkali halides, fixed cation","MF < MCl < MBr < MI (polarisability of the anion rises down the halogen group)"],
            ["Ionic character / melting point of Group 2 chlorides","BeCl₂ < MgCl₂ < CaCl₂ < SrCl₂ < BaCl₂"],
            ["Melting point of sodium halides","NaI < NaBr < NaCl < NaF"],
            ["Melting point of calcium halides","CaI₂ < CaBr₂ < CaCl₂ < CaF₂"],
            ["Polarising power (Fajans) of the cation","Cs⁺ < Rb⁺ < K⁺ < Na⁺ < Li⁺ < Be²⁺ (Be²⁺ is the single most polarising s-block cation)"],
          ]} />
          <Callout title="How to derive an order you don't remember" tone="emerald"><Points><li><b>Size-only properties</b> (atomic/ionic radius, hydration enthalpy magnitude, polarising power) always run smoothly with the periodic position — no exceptions inside a group.</li><li><b>Energetics that combine two competing terms</b> (aqueous reducing power, solubility of hydroxides vs sulfates, melting point) can reverse or show a blip (K density, Group-2 melting point) — identify which two enthalpy terms are racing before trusting a "smooth" order.</li><li><b>Lithium and beryllium are first-member exceptions</b> almost every time a Group-1/Group-2 order is asked — check Sections 12 and 17 before answering.</li></Points></Callout>
        </section>
      </article>
    </div>
  </main>;
}
