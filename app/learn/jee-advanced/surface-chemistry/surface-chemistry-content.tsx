"use client";

import { Card, DataTable, Example, FormulaCard, K, KB, Key, ParticleFigure, Section, Trap } from "./surface-chemistry-shared";

export function Part01Content() {
 return <>
  <Section index="01" eyebrow="Interface" title="Surface chemistry and the language of interfaces" intro={<>Surface chemistry studies physical and chemical events occurring at boundaries between bulk phases. A surface is commonly written solid–gas, solid–liquid or liquid–gas. Two completely miscible gases do not furnish a stable interface.</>}>
   <div className="grid gap-5 xl:grid-cols-3">
    <Card title="Surface or interface" tone="cyan"><p>An interface is the thin region separating two phases. Its thickness is molecular, but its area depends strongly on particle size and roughness.</p><p>Corrosion, dissolution, crystallisation, electrode reactions, adsorption and heterogeneous catalysis are interfacial phenomena.</p></Card>
    <Card title="Why surfaces are energetic" tone="violet"><p>Particles inside a bulk phase experience nearly balanced attractions. Surface particles lack neighbours on one side, so they possess residual valencies, unbalanced forces and higher potential energy.</p><p>Surface processes occur because the system tends to reduce this excess surface energy.</p></Card>
    <Card title="Specific surface area" tone="amber"><p>Specific surface area is the accessible surface area per unit mass of adsorbent.</p><KB>{String.raw`a_s=\frac{A_{\mathrm{accessible}}}{m_{\mathrm{solid}}}`}</KB><p>Finely divided, porous and rough solids are therefore effective adsorbents and catalysts.</p></Card>
   </div>
  </Section>
  <Section index="02" eyebrow="Basic terms" title="Adsorption, absorption, sorption and desorption" intro={<>The four words describe different distributions or directions of transfer. Their distinction is central to the entire chapter.</>}>
   <div className="overflow-x-auto"><ParticleFigure mode="sorption"/></div>
   <DataTable headers={["Term","Exact meaning","Typical illustration"]} rows={[
    ["Adsorption","Concentration of a species becomes greater at a surface than in the adjoining bulk phase.","NH₃ on charcoal; water vapour on silica gel; dye on animal charcoal."],
    ["Absorption","The incoming substance becomes distributed through the bulk of the absorbing phase.","Water in anhydrous CaCl₂; NH₃ dissolved uniformly in water."],
    ["Sorption","Adsorption and absorption occur together or cannot be distinguished experimentally.","A vapour enters a porous polymer while also concentrating at its internal surface."],
    ["Desorption","Adsorbed material leaves the surface and returns to the adjoining phase.","Heating or reducing pressure removes physically adsorbed gas."],
   ]}/>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Adsorbent and adsorbate" tone="cyan"><p>The material providing the surface is the <b className="text-white">adsorbent</b>; the species retained is the <b className="text-white">adsorbate</b>.</p><p>Common adsorbents: activated charcoal, silica gel, alumina gel, clay, finely divided metals, colloids and porous zeolites.</p></Card>
    <Card title="Positive and negative adsorption" tone="violet"><p>For adsorption from solution, surface concentration may exceed the bulk concentration (positive adsorption) or be lower than it (negative adsorption).</p><p>Negative adsorption is meaningful mainly for solutions, where one component is preferentially excluded from the interface.</p></Card>
   </div>
   <Key>At adsorption equilibrium, adsorption continues microscopically: <K>{String.raw`r_{\mathrm{ads}}=r_{\mathrm{des}}`}</K>. Equilibrium does not mean that both rates are zero.</Key>
  </Section>
  <Section index="03" eyebrow="Driving force" title="Mechanism and thermodynamics of adsorption" intro={<>Adsorption lowers surface free energy. The enthalpy and entropy changes explain why adsorption is usually favoured by low temperature and why saturation is reached.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <FormulaCard title="Thermodynamic signs">
     <KB>{String.raw`\Delta H_{\mathrm{ads}}<0,\qquad \Delta S_{\mathrm{system}}<0`}</KB>
     <KB>{String.raw`\Delta G_{\mathrm{ads}}=\Delta H_{\mathrm{ads}}-T\Delta S_{\mathrm{ads}}`}</KB>
     <p className="text-sm leading-6 text-slate-300">Spontaneous adsorption requires <K>{String.raw`\Delta G<0`}</K>. Because <K>{String.raw`\Delta S<0`}</K>, sufficiently negative <K>{String.raw`\Delta H`}</K> is required.</p>
    </FormulaCard>
    <Card title="Approach to equilibrium" tone="emerald"><p>Initially many vacant sites exist, so adsorption is fast. As coverage rises, the rate falls. Desorption grows with coverage. Equality of the two rates gives dynamic equilibrium.</p><p>At equilibrium the decrease in enthalpy is exactly balanced by the entropy term, so <K>{String.raw`\Delta G=0`}</K>.</p></Card>
   </div>
   <Card title="Fate of an adsorbed particle" tone="slate"><p>After attachment, an adsorbate may diffuse into the bulk (absorption), migrate along the surface, react at the surface, or escape by desorption. Desorption commonly follows first-order kinetics.</p><KB>{String.raw`k_{\mathrm{des}}=A e^{-E_{\mathrm{des}}/RT},\qquad \tau=\frac{1}{k_{\mathrm{des}}}`}</KB><p><K>{String.raw`\tau`}</K> is the mean residence time on the surface.</p></Card>
   <Trap>“Adsorption is always exothermic” is the standard ideal statement because surface energy falls. Rare activated systems may show an apparent positive heat; treat these as special cases, not the general rule.</Trap>
  </Section>
  <Section index="04" eyebrow="Quantitative foundations" title="Pressure-drop and surface-area calculations" intro={<>Gas adsorption lowers the gas pressure in a rigid vessel. Monolayer adsorption can also be used to estimate surface area.</>}>
   <Example number={1} title="Mass of gas adsorbed from pressure decrease" question={<>A 12.0 L vessel contains NH₃ at 6.0 atm and 300 K. After adding 8.0 g charcoal, pressure becomes 2.5 atm. Find NH₃ adsorbed per gram charcoal.</>} solution={<><p>At constant <K>{String.raw`V,T`}</K>, the decrease in moles is</p><KB>{String.raw`\Delta n=\frac{(P_i-P_f)V}{RT}=\frac{(3.5)(12.0)}{(0.082057)(300)}=1.706\ \mathrm{mol}`}</KB><p>Mass adsorbed <K>{String.raw`=1.706\times17=29.0\ \mathrm{g}`}</K>.</p><p>Per gram charcoal <K>{String.raw`=29.0/8.0`}</K>.</p></>} answer={<>3.63 g NH₃ per g charcoal.</>}/>
   <Example number={2} title="Specific surface area from monolayer uptake" question={<>Twenty grams of charcoal remove 0.160 mol solute from solution. If each adsorbed molecule occupies <K>{String.raw`0.36\ \mathrm{nm^2}`}</K>, find the specific surface area.</>} solution={<><KB>{String.raw`N=0.160N_A`}</KB><KB>{String.raw`A=N(0.36\times10^{-18})=3.47\times10^4\ \mathrm{m^2}`}</KB><KB>{String.raw`a_s=\frac{3.47\times10^4}{0.020}=1.73\times10^6\ \mathrm{m^2\,kg^{-1}}`}</KB></>} answer={<>1.73 × 10⁶ m² kg⁻¹, or 1730 m² g⁻¹.</>}/>
  </Section>
 </>;
}

export function Part02Content() {
 return <>
  <Section index="01" eyebrow="Classification" title="Physisorption and chemisorption" intro={<>The classification depends on the force holding adsorbate to adsorbent. Physical adsorption is governed by intermolecular forces; chemical adsorption involves bond formation and is also called activated adsorption.</>}>
   <DataTable headers={["Property","Physisorption","Chemisorption"]} rows={[
    ["Force","van der Waals, dispersion, dipole or hydrogen-bond interactions","Covalent, ionic or metallic surface bond"],
    ["Specificity","Low; most gases can adsorb to some extent","High; only chemically compatible adsorbate–surface pairs"],
    ["Reversibility","Usually reversible","Usually difficult to reverse"],
    ["Heat of adsorption","Typically about 20–40 kJ mol⁻¹","Commonly about 80–240 kJ mol⁻¹"],
    ["Activation energy","Very small","Appreciable; hence activated adsorption"],
    ["Layers","Multilayer possible","Normally monolayer"],
    ["Temperature","Decreases as temperature rises","Often rises initially as activation is achieved, then falls because adsorption is exothermic"],
    ["Pressure","Strongly favoured; lowering pressure promotes desorption","Favoured until reactive sites are saturated"],
   ]}/>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Potential-energy picture" tone="violet"><p>Physisorption corresponds to a shallow, long-range minimum. Chemisorption corresponds to a deeper, short-range well, often separated from the gas phase by an activation barrier.</p><p>A gas may first physisorb and then cross the barrier to chemisorb, as H₂ on Ni.</p></Card>
    <Card title="Experimental distinction" tone="cyan"><p>Physical adsorption is readily removed by lowering pressure or raising temperature. Chemisorbed material often remains until the chemical bond is broken or a surface reaction occurs.</p><p>Helium and neon show negligible chemisorption on Pt; reactive gases such as CO, O₂ and H₂ chemisorb more strongly.</p></Card>
   </div>
  </Section>
  <Section index="02" eyebrow="Control variables" title="Factors affecting adsorption of gases on solids" intro={<>Extent of adsorption is conventionally expressed as <K>{String.raw`x/m`}</K>, mass of adsorbate per mass of adsorbent.</>}>
   <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    <Card title="Nature of gas" tone="cyan"><p>Easily liquefiable gases have stronger intermolecular attractions and are physically adsorbed more readily. Higher critical temperature generally means greater adsorption.</p><p>Representative trend on charcoal: H₂ &lt; N₂ &lt; CH₄ &lt; CO₂ &lt; HCl &lt; NH₃ &lt; SO₂.</p></Card>
    <Card title="Nature of solid" tone="violet"><p>Charcoal adsorbs many condensable and poisonous gases. Ni, Pt and Pd strongly adsorb H₂ and other reactive gases. Silica gel and alumina adsorb water vapour.</p></Card>
    <Card title="Surface area" tone="amber"><p>Adsorption increases with accessible surface area and porosity. Crushing exposes more external surface; activation develops internal pores.</p></Card>
    <Card title="Pressure" tone="emerald"><p>At fixed temperature, increasing pressure increases adsorption until the surface approaches saturation.</p></Card>
    <Card title="Temperature" tone="rose"><p>Physisorption falls with temperature. Chemisorption can pass through a maximum because activation is favoured at first but desorption dominates at high temperature.</p></Card>
    <Card title="Impurities and activation" tone="slate"><p>Moisture or foreign molecules may block sites. Heating in vacuum, washing or controlled reduction may regenerate and activate an adsorbent.</p></Card>
   </div>
   <div className="overflow-x-auto"><ParticleFigure mode="isotherm"/></div>
  </Section>
  <Section index="03" eyebrow="Empirical model" title="Freundlich adsorption isotherm" intro={<>Freundlich’s equation describes adsorption on heterogeneous surfaces over a limited pressure or concentration range.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <FormulaCard title="Gas–solid form">
     <KB>{String.raw`\frac{x}{m}=kP^{1/n},\qquad n\ge1`}</KB>
     <KB>{String.raw`\log\frac{x}{m}=\log k+\frac{1}{n}\log P`}</KB>
     <p className="text-sm text-slate-300">Slope of <K>{String.raw`\log(x/m)`}</K> versus <K>{String.raw`\log P`}</K> is <K>{String.raw`1/n`}</K>; intercept is <K>{String.raw`\log k`}</K>.</p>
    </FormulaCard>
    <FormulaCard title="Adsorption from solution">
     <KB>{String.raw`\frac{x}{m}=kC^{1/n}`}</KB>
     <KB>{String.raw`\log\frac{x}{m}=\log k+\frac{1}{n}\log C`}</KB>
     <p className="text-sm text-slate-300"><K>{String.raw`C`}</K> is equilibrium concentration, not initial concentration.</p>
    </FormulaCard>
   </div>
   <DataTable headers={["Region","Freundlich limit","Meaning"]} rows={[
    ["Low pressure",<K>{String.raw`x/m\propto P`}</K>,"Most sites are vacant; adsorption is approximately proportional to pressure."],
    ["Moderate pressure",<K>{String.raw`x/m\propto P^{1/n}`}</K>,"Empirical Freundlich region."],
    ["High pressure",<K>{String.raw`x/m\propto P^0`}</K>,"Finite capacity gives saturation; Freundlich cannot represent the plateau exactly."],
   ]}/>
   <Trap>Never accept <K>{String.raw`1/n>1`}</K> for the usual Freundlich isotherm. The normal range is <K>{String.raw`0<1/n<1`}</K>; the end values describe limiting behaviour.</Trap>
  </Section>
  <Section index="04" eyebrow="Theoretical model" title="Langmuir adsorption isotherm" intro={<>Langmuir treats a uniform surface with a fixed number of equivalent sites and monolayer coverage.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Assumptions" tone="cyan"><p>Each site holds at most one adsorbate particle; all sites are energetically equivalent; adsorbed particles do not interact; adsorption is localized; equilibrium exists between adsorption and desorption.</p></Card>
    <FormulaCard title="Derivation through fractional coverage">
     <KB>{String.raw`r_a=k_aP(1-\theta),\qquad r_d=k_d\theta`}</KB>
     <KB>{String.raw`\theta=\frac{KP}{1+KP},\qquad K=\frac{k_a}{k_d}`}</KB>
     <KB>{String.raw`\frac{x}{m}=\frac{aKP}{1+KP}`}</KB>
    </FormulaCard>
   </div>
   <DataTable headers={["Pressure range","Langmuir reduction"]} rows={[
    ["Low P",<K>{String.raw`KP\ll1\Rightarrow x/m\approx aKP`}</K>],
    ["High P",<K>{String.raw`KP\gg1\Rightarrow x/m\approx a`}</K>],
    ["Linear forms",<K>{String.raw`\frac{P}{x/m}=\frac{1}{aK}+\frac{P}{a}`}</K>],
   ]}/>
   <Card title="Isotherm, isobar and isostere" tone="violet"><p><b className="text-white">Isotherm:</b> adsorption versus pressure at constant temperature. <b className="text-white">Isobar:</b> adsorption versus temperature at constant pressure. <b className="text-white">Isostere:</b> pressure versus temperature at constant surface coverage.</p><KB>{String.raw`\ln\frac{P_2}{P_1}=-\frac{\Delta H_{\mathrm{ads}}}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)`}</KB><p>The isostere can provide isosteric heat of adsorption.</p></Card>
  </Section>
  <Section index="05" eyebrow="Uses" title="Applications of adsorption" intro={<>Every application exploits selective retention, large internal surface area or surface concentration.</>}>
   <DataTable headers={["Application","Chemical basis"]} rows={[
    ["Gas masks and pollution control","Activated charcoal adsorbs toxic vapours; filters combine adsorbents for different gases."],
    ["Drying and humidity control","Silica gel or alumina adsorbs water vapour; anhydrous CaCl₂ mainly absorbs it."],
    ["Decolourisation","Animal charcoal removes coloured impurities from sugar and organic solutions."],
    ["High vacuum","Residual gases are adsorbed on cooled charcoal or getter surfaces."],
    ["Separation of noble gases","Different adsorption strengths on charcoal at different temperatures permit separation."],
    ["Heterogeneous catalysis","Reactants concentrate at adjacent active sites and surface bonds are weakened."],
    ["Froth flotation","Collectors adsorb selectively on ore particles and alter wettability."],
    ["Adsorption indicators","Dyes adsorb on precipitate surfaces near the equivalence point and change colour."],
    ["Chromatography","Components travel at different rates because of different adsorption or partition strengths."],
    ["Medicinal charcoal","Adsorbs many toxins in the gastrointestinal tract; use is substance-specific."],
   ]}/>
  </Section>
 </>;
}

export function Part03Content() {
 return <>
  <Section index="01" eyebrow="Fundamentals" title="Catalysts and general characteristics" intro={<>A catalyst changes reaction rate by providing an alternative mechanism and is regenerated in the overall process. It does not change thermodynamic state functions or the equilibrium constant.</>}>
   <div className="grid gap-5 xl:grid-cols-3">
    <Card title="What a catalyst changes" tone="cyan"><p>It changes mechanism, activation energy and rate constant. It may alter selectivity by favouring one pathway over another.</p></Card>
    <Card title="What it does not change" tone="rose"><p>It does not change <K>{String.raw`\Delta H,\Delta G,\Delta S`}</K>, equilibrium constant or equilibrium composition. It accelerates forward and reverse reactions by the same factor.</p></Card>
    <Card title="Practical features" tone="amber"><p>A small amount may be sufficient; activity is often greatest in finely divided or porous form; catalysts are commonly specific and can be poisoned.</p></Card>
   </div>
   <DataTable headers={["Term","Meaning","Example"]} rows={[
    ["Positive catalyst","Increases rate","MnO₂ in decomposition of KClO₃; Pt in H₂O₂ decomposition."],
    ["Negative catalyst / inhibitor","Decreases rate without necessarily attacking another catalyst","Acetanilide, glycerol or H₃PO₄ retarding H₂O₂ decomposition."],
    ["Autocatalyst","A product catalyses the reaction","Mn²⁺ produced during permanganate–oxalate reaction."],
    ["Induced catalysis","One reaction enables another otherwise slow reaction","Oxidation of sulphite induces oxidation of arsenite."],
    ["Promoter","Raises catalyst activity but is not the principal catalyst","Mo promotes Fe in the Haber process."],
    ["Catalytic poison","Reduces or destroys catalyst activity by blocking/altering sites","CO or H₂S poisons Fe; arsenic compounds poison Pt/V₂O₅ systems."],
   ]}/>
  </Section>
  <Section index="02" eyebrow="Phase relationship" title="Homogeneous and heterogeneous catalysis" intro={<>The phase relationship between catalyst and reactants determines the useful mechanistic model.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Homogeneous catalysis" tone="violet"><p>Catalyst and reactants are in the same phase. Typical cases: NO-catalysed oxidation of SO₂, acid-catalysed inversion of sucrose, acid-catalysed ester hydrolysis, base-catalysed aldol condensation and enolisation.</p></Card>
    <Card title="Heterogeneous catalysis" tone="cyan"><p>Catalyst and reactants occupy different phases. Examples: Haber process on Fe, Contact process on V₂O₅, Ostwald process on Pt–Rh gauze, hydrogenation on Ni/Pt/Pd, methanol synthesis on Cu/ZnO–Cr₂O₃.</p></Card>
   </div>
   <div className="overflow-x-auto"><ParticleFigure mode="catalysis"/></div>
   <DataTable headers={["Industrial process","Catalyst / promoter"]} rows={[
    ["Haber synthesis of NH₃","Fe; Mo/K₂O/Al₂O₃ may act as promoters in different formulations"],
    ["Ostwald oxidation of NH₃","Pt–Rh gauze"],
    ["Contact process for H₂SO₄","V₂O₅ or Pt; Pt is poison-sensitive"],
    ["Deacon process for Cl₂","CuCl₂"],
    ["Bosch water-gas shift","Fe₂O₃ promoted by Cr₂O₃"],
    ["Vegetable-oil hydrogenation","Finely divided Ni, Pt or Pd"],
    ["Hydrocarbon cracking/isomerisation","Zeolites, especially shape-selective forms"],
   ]}/>
  </Section>
  <Section index="03" eyebrow="Mechanism" title="Intermediate-compound and adsorption theories" intro={<>Catalysis works by creating a lower-energy sequence. Homogeneous catalysis is often explained by a soluble intermediate; heterogeneous catalysis by adsorption and surface reaction.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <FormulaCard title="Intermediate-compound scheme">
     <KB>{String.raw`A+C\rightleftharpoons AC`}</KB>
     <KB>{String.raw`AC+B\longrightarrow AB+C`}</KB>
     <p className="text-sm text-slate-300">The catalyst <K>{String.raw`C`}</K> is consumed in one step and regenerated in another.</p>
    </FormulaCard>
    <Card title="Adsorption theory: modern sequence" tone="emerald"><p>1. Diffusion of reactants to the external surface and into pores.</p><p>2. Adsorption at active sites.</p><p>3. Surface diffusion and activated-complex formation.</p><p>4. Surface reaction.</p><p>5. Product desorption and diffusion away.</p><p>Any step can control the observed rate.</p></Card>
   </div>
   <Key>Adsorption must be neither too weak nor too strong. Weak adsorption gives little activation; excessively strong adsorption prevents product desorption and blocks the surface.</Key>
   <Card title="Activity and selectivity" tone="amber"><p><b className="text-white">Activity</b> is the ability to accelerate a reaction. <b className="text-white">Selectivity</b> is the ability to direct the same reactant toward a particular product.</p><p>Example: CO + H₂ can yield methane, methanol or higher hydrocarbons depending on catalyst and conditions.</p></Card>
  </Section>
  <Section index="04" eyebrow="Porous catalysts" title="Zeolites and shape-selective catalysis" intro={<>Zeolites are crystalline, hydrated aluminosilicates containing molecular-size channels and cages. After dehydration they become porous solids capable of ion exchange and shape-selective catalysis.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <FormulaCard title="General structural composition"><KB>{String.raw`M_{x/n}\left[(AlO_2)_x(SiO_2)_y\right]\cdot zH_2O`}</KB><p className="text-sm text-slate-300"><K>{String.raw`M^{n+}`}</K> balances the negative framework charge created by AlO₄ units.</p></FormulaCard>
    <Card title="Shape selectivity" tone="cyan"><p>Only molecules whose size and shape fit the pores can enter, react and leave. Selectivity may arise from reactant access, transition-state fit or product diffusion.</p><p>ZSM-5 converts alcohols or suitable hydrocarbon feeds into gasoline-range hydrocarbons and is used in cracking/isomerisation.</p></Card>
   </div>
  </Section>
  <Section index="05" eyebrow="Biocatalysis" title="Enzymes and Michaelis–Menten kinetics" intro={<>Enzymes are high-molar-mass biological catalysts, mainly proteins, that form colloidal dispersions in water and show exceptional efficiency and specificity.</>}>
   <DataTable headers={["Enzyme","Source","Reaction"]} rows={[
    ["Invertase","Yeast","Sucrose → glucose + fructose"],
    ["Zymase","Yeast","Glucose → ethanol + CO₂"],
    ["Diastase","Malt","Starch → maltose"],
    ["Maltase","Yeast","Maltose → glucose"],
    ["Urease","Soybean","Urea → NH₃ + CO₂"],
    ["Pepsin","Stomach","Proteins → smaller peptides/amino-acid products"],
   ]}/>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Characteristics" tone="violet"><p>High turnover, strong substrate specificity, optimum temperature and pH, denaturation outside the useful range, and dependence on cofactors or coenzymes in many cases.</p><p>Sources list typical optimum ranges near 298–310 K and mildly acidic to neutral pH, but actual values are enzyme-specific.</p></Card>
    <FormulaCard title="Michaelis–Menten mechanism and rate">
     <KB>{String.raw`E+S\underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}}ES\overset{k_2}{\longrightarrow}E+P`}</KB>
     <KB>{String.raw`v=\frac{V_{\max}[S]}{K_M+[S]},\qquad V_{\max}=k_2[E]_0`}</KB>
     <KB>{String.raw`K_M=\frac{k_{-1}+k_2}{k_1}`}</KB>
    </FormulaCard>
   </div>
   <DataTable headers={["Substrate condition","Rate law"]} rows={[
    [<K>{String.raw`[S]\ll K_M`}</K>,<K>{String.raw`v\approx(V_{\max}/K_M)[S]`}</K>],
    [<K>{String.raw`[S]=K_M`}</K>,<K>{String.raw`v=V_{\max}/2`}</K>],
    [<K>{String.raw`[S]\gg K_M`}</K>,<K>{String.raw`v\approx V_{\max}`}</K>],
   ]}/>
   <Trap>The “lock-and-key” picture explains complementarity but is not a complete modern mechanism. Induced fit, transition-state stabilisation and conformational dynamics may be essential.</Trap>
  </Section>
 </>;
}

export function Part04Content() {
 return <>
  <Section index="01" eyebrow="Dispersed systems" title="True solutions, colloids and suspensions" intro={<>A colloid is a state of dispersion, not an immutable class of substances. NaCl can behave as a crystalloid in water but colloidally in a suitable nonpolar medium; soap may be colloidal in water but molecular in alcohol.</>}>
   <DataTable headers={["Property","True solution","Colloid","Suspension"]} rows={[
    ["Particle size","< 1 nm","about 1–1000 nm","> 1000 nm"],
    ["Nature","Homogeneous at molecular scale","Microscopically heterogeneous though apparently uniform","Heterogeneous"],
    ["Visibility","Not visible by ordinary optical methods","Detected by scattering/ultramicroscope","Often visible to naked eye"],
    ["Ordinary filtration","Passes","Passes","Usually retained"],
    ["Semipermeable membrane","Passes","Retained","Retained"],
    ["Diffusion","Rapid","Slow","Negligible"],
    ["Settling","No","Not under gravity; may settle by ultracentrifugation","Settles under gravity"],
    ["Tyndall effect","Absent","Usually present when refractive-index contrast is sufficient","May occur"],
   ]}/>
   <Card title="Two phases of a colloid" tone="cyan"><p>The distributed substance is the <b className="text-white">dispersed phase</b> or discontinuous/internal phase. The continuous phase is the <b className="text-white">dispersion medium</b>.</p><p>A sol is a colloidal dispersion with a fluid-like appearance. Water gives hydrosol/aquasol, alcohol alcosol, benzene benzosol and air aerosol.</p></Card>
  </Section>
  <Section index="02" eyebrow="Physical state" title="Classification by dispersed phase and dispersion medium" intro={<>Eight combinations are possible. Gas dispersed in gas is not a colloid because gases mix molecularly.</>}>
   <DataTable headers={["Dispersed phase","Medium","Class","Examples"]} rows={[
    ["Solid","Solid","Solid sol","Coloured glass, gemstones, some alloys/minerals"],
    ["Solid","Liquid","Sol","Paint, ink, gold sol, cell fluids, clay dispersion"],
    ["Solid","Gas","Aerosol","Smoke, dust, soot in air"],
    ["Liquid","Solid","Gel","Cheese, jelly, curd, opal, boot polish"],
    ["Liquid","Liquid","Emulsion","Milk, creams, butter"],
    ["Liquid","Gas","Aerosol","Fog, mist, clouds, sprays"],
    ["Gas","Solid","Solid foam","Pumice, foam rubber, bread, cake"],
    ["Gas","Liquid","Foam","Whipped cream, shaving cream, soap lather"],
   ]}/>
  </Section>
  <Section index="03" eyebrow="Affinity" title="Lyophilic and lyophobic sols" intro={<>The terms compare affinity between dispersed phase and dispersion medium. In water they are often called hydrophilic and hydrophobic sols.</>}>
   <DataTable headers={["Property","Lyophilic sol","Lyophobic sol"]} rows={[
    ["Preparation","Direct mixing, warming or shaking often sufficient","Special dispersion/condensation method required"],
    ["Stability","High due to solvation","Lower; mainly charge-stabilised"],
    ["Reversibility","Usually reversible","Usually irreversible"],
    ["Viscosity","Often appreciably above medium","Close to medium"],
    ["Surface tension","Usually lower than medium","Close to medium"],
    ["Charge","Small or variable","Characteristic positive or negative charge"],
    ["Electrolyte sensitivity","Requires larger amount for coagulation","Coagulates with small amount"],
    ["Tyndall effect","Weaker","Stronger"],
    ["Examples","Starch, gelatin, gum, proteins","Metal, sulphide and hydroxide sols"],
   ]}/>
   <Key>Lyophilic particles are protected chiefly by a solvated sheath; lyophobic particles are stabilised chiefly by like charge and the electrical double layer.</Key>
  </Section>
  <Section index="04" eyebrow="Particle constitution" title="Multimolecular, macromolecular and associated colloids" intro={<>Classification may also be based on what constitutes one colloidal particle.</>}>
   <div className="grid gap-5 xl:grid-cols-3">
    <Card title="Multimolecular colloids" tone="amber"><p>Many atoms or small molecules aggregate through weak forces to form one colloidal particle.</p><p>Examples: gold sol and sulphur sol.</p></Card>
    <Card title="Macromolecular colloids" tone="violet"><p>Individual giant molecules are themselves of colloidal dimensions in a suitable solvent.</p><p>Examples: starch, cellulose, proteins and synthetic polymers.</p></Card>
    <Card title="Associated colloids" tone="cyan"><p>Surfactant molecules behave as ordinary electrolytes at low concentration but aggregate into micelles above the critical micelle concentration.</p><p>Examples: soaps and detergents.</p></Card>
   </div>
  </Section>
 </>;
}

export function Part05Content() {
 return <>
  <Section index="01" eyebrow="Overview" title="Preparation: dispersion and condensation routes" intro={<>Lyophilic sols are often obtained by direct contact with the solvent. Lyophobic sols require either breaking large particles down or building colloidal particles from molecular species.</>}>
   <DataTable headers={["Route","Principle","Methods"]} rows={[
    ["Dispersion","Large particles → colloidal particles","Mechanical grinding/colloid mill, ultrasonic dispersion, Bredig arc, peptisation"],
    ["Condensation","Ions or molecules → colloidal aggregates","Double decomposition, oxidation, reduction, hydrolysis, solvent exchange, excessive cooling"],
   ]}/>
  </Section>
  <Section index="02" eyebrow="Dispersion" title="Mechanical, electrical and peptisation methods" intro={<>All methods must avoid uncontrolled growth or immediate coagulation.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Mechanical and ultrasonic dispersion" tone="cyan"><p>A coarse suspension is ground in a colloid mill until particles reach the colloidal range. High-frequency ultrasound can fragment particles and droplets, especially in emulsions.</p></Card>
    <Card title="Bredig arc method" tone="violet"><p>An electric arc is struck between metal electrodes under cold water containing a trace stabiliser such as KOH. Metal vapour condenses to form Au, Ag, Pt or related metal sols. The ice bath limits excessive particle growth.</p></Card>
   </div>
   <Card title="Peptisation: precipitate to sol" tone="amber"><p>A freshly prepared precipitate is shaken with dispersion medium and a small amount of electrolyte, the peptising agent. Preferential adsorption of a common ion gives all particles the same charge, causing them to separate.</p>
    <DataTable headers={["System","Adsorbed ion and resulting sol"]} rows={[
     ["AgI + excess AgNO₃",<><K>{String.raw`Ag^+`}</K>-adsorbed positive AgI sol</>],
     ["AgI + excess KI",<><K>{String.raw`I^-`}</K>-adsorbed negative AgI sol</>],
     ["Fe(OH)₃ + FeCl₃",<><K>{String.raw`Fe^{3+}`}</K>-adsorbed positive sol</>],
     ["Fe(OH)₃ + NaOH",<><K>{String.raw`OH^-`}</K>-adsorbed negative sol</>],
     ["CdS + H₂S",<><K>{String.raw`S^{2-}`}</K>/<K>{String.raw`HS^-`}</K>-stabilised negative sol</>],
    ]}/>
   </Card>
  </Section>
  <Section index="03" eyebrow="Condensation" title="Chemical and physical condensation methods" intro={<>The reaction is carried out under conditions of supersaturation while bulk precipitation is prevented.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <FormulaCard title="Representative chemical preparations">
     <KB>{String.raw`As_2O_3+3H_2S\longrightarrow As_2S_3(sol)+3H_2O`}</KB>
     <KB>{String.raw`2H_2S+SO_2\longrightarrow3S(sol)+2H_2O`}</KB>
     <KB>{String.raw`2AuCl_3+3SnCl_2\longrightarrow2Au(sol)+3SnCl_4`}</KB>
     <KB>{String.raw`FeCl_3+3H_2O\xrightarrow{\Delta}Fe(OH)_3(sol)+3HCl`}</KB>
    </FormulaCard>
    <Card title="Physical condensation" tone="emerald"><p><b className="text-white">Exchange of solvent:</b> a true solution is poured into a second solvent in which solute is poorly soluble but both solvents mix, producing a sol; sulphur in alcohol added to water is standard.</p><p><b className="text-white">Excessive cooling:</b> vapour or dissolved molecules aggregate to colloidal size; ice sol in ether/chloroform is a textbook illustration.</p></Card>
   </div>
  </Section>
  <Section index="04" eyebrow="Purification" title="Removal of electrolytes and crystalloid impurities" intro={<>Preparation commonly leaves small ions or molecules that destabilise the sol. Purification exploits the inability of colloidal particles to pass through fine membranes.</>}>
   <DataTable headers={["Method","Principle and operation","Important caution"]} rows={[
    ["Dialysis","Crystalloids diffuse through parchment/cellophane into repeatedly renewed water; colloidal particles remain in the bag.","Overdialysis may remove stabilising electrolyte and coagulate a lyophobic sol."],
    ["Electrodialysis","An electric field accelerates migration of ionic impurities through the dialysing membrane.","Useful only when impurities are electrolytes."],
    ["Ultrafiltration","Ordinary filter paper is impregnated with collodion/gelatin and hardened to reduce pore size.","Pressure or suction may be needed because flow is slow."],
    ["Ultracentrifugation","Very high centrifugal acceleration sediments colloidal particles; redispersion in pure medium completes purification.","Used for separation/fractionation as well as purification."],
   ]}/>
   <Trap>Ordinary filter paper does not separate a sol from its dispersion medium. Colloidal particles pass through its relatively large pores but not through a suitable semipermeable membrane.</Trap>
  </Section>
 </>;
}

export function Part06Content() {
 return <>
  <Section index="01" eyebrow="General and optical" title="Physical and optical properties" intro={<>Colloidal systems are heterogeneous, have enormous interfacial area and show properties controlled by particle size, refractive-index contrast and surface charge.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Tyndall effect" tone="cyan"><p>A beam becomes visible as a luminous cone because colloidal particles scatter light. It is prominent when particle size is not far below the wavelength and refractive indices of dispersed phase and medium differ appreciably.</p><p>True solutions do not show a Tyndall cone. The ultramicroscope detects particles as bright points by observing scattered light at right angles.</p></Card>
    <Card title="Colour of sols" tone="violet"><p>Colour depends on particle size, shape, concentration, wavelength and direction of observation. Fine gold sol may appear red; as particle size increases it can become purple, blue and finally turbid/golden.</p><p>Diluted milk can look blue in reflected light but reddish in transmitted light.</p></Card>
   </div>
   <Card title="Colligative properties" tone="amber"><p>Osmotic pressure, boiling-point elevation and freezing-point depression depend on particle number. Because one colloidal particle contains many atoms or molecules, the particle count is small and colligative effects are correspondingly weak.</p></Card>
  </Section>
  <Section index="02" eyebrow="Kinetic" title="Brownian motion and stability" intro={<>Brownian motion is the continuous irregular zig-zag motion produced by unequal molecular bombardment from the dispersion medium.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Factors" tone="emerald"><p>Motion becomes more conspicuous for smaller particles, lower viscosity and higher temperature. It decreases as particles grow.</p><p>Brownian motion helps oppose sedimentation, but electrostatic/solvation stabilisation is normally more important for long-term colloid stability.</p></Card>
    <FormulaCard title="Einstein relation for translational diffusion"><KB>{String.raw`D=\frac{k_BT}{6\pi\eta r}`}</KB><p className="text-sm text-slate-300">This advanced relation links Brownian diffusivity to temperature, viscosity and particle radius.</p></FormulaCard>
   </div>
  </Section>
  <Section index="03" eyebrow="Charge origin" title="How colloidal particles acquire charge" intro={<>The charge generally originates from selective ion adsorption, ionisation of surface groups, lattice imperfections or frictional/contact processes.</>}>
   <DataTable headers={["Usually positive","Usually negative"]} rows={[
    ["Metal hydroxides: Fe(OH)₃, Al(OH)₃, Cr(OH)₃","Metal sulphides: As₂S₃, Sb₂S₃, CdS"],
    ["Hydrated metal oxides in acidic medium","Metals: Au, Ag, Pt and many metal sols"],
    ["Basic dyes in acidic medium","Acid dyes in basic medium"],
    ["Proteins below their isoelectric pH; haemoglobin listed positive in source table","Proteins above their isoelectric pH; starch, gum, gelatin, clay and charcoal often negative"],
   ]}/>
   <Card title="Preparation determines charge" tone="cyan"><p>AgI formed with excess AgNO₃ adsorbs Ag⁺ and becomes positive. With excess KI it adsorbs I⁻ and becomes negative. Fe(OH)₃ peptised by FeCl₃ is positive; with NaOH it can be negative.</p><p>Potential-determining ions form the primary adsorbed layer; counter-ions remain in the surrounding solution.</p></Card>
  </Section>
  <Section index="04" eyebrow="Electrical double layer" title="Stern layer, diffuse layer and zeta potential" intro={<>A charged particle is surrounded by oppositely charged ions. The compact and diffuse charge distributions constitute the electrical double layer.</>}>
   <div className="overflow-x-auto"><ParticleFigure mode="double-layer"/></div>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Helmholtz and modern picture" tone="violet"><p>The simple Helmholtz model uses two rigid sheets of opposite charge. The modern Stern model has a compact fixed layer close to the surface and a mobile diffuse layer extending into solution.</p></Card>
    <Card title="Zeta potential" tone="amber"><p>The electrokinetic or zeta potential is the potential at the slipping plane separating liquid that moves with the particle from the bulk medium.</p><p>Large magnitude generally means strong repulsion and greater stability. Near zero zeta potential, coagulation is easy.</p></Card>
   </div>
  </Section>
  <Section index="05" eyebrow="Electrokinetic phenomena" title="Electrophoresis and electro-osmosis" intro={<>An electric field distinguishes motion of the dispersed phase from motion of the dispersion medium.</>}>
   <DataTable headers={["Phenomenon","What moves","Use / inference"]} rows={[
    ["Electrophoresis","Charged colloidal particles move toward the oppositely charged electrode.","Proves particle charge; anaphoresis is movement to anode, cataphoresis to cathode."],
    ["Electro-osmosis","Dispersion medium moves relative to an immobilised charged porous/colloidal phase.","Used to dewater clays, control capillary flow and study surface charge."],
   ]}/>
   <Card title="Isoelectric point" tone="rose"><p>For amphoteric colloids such as proteins, net charge changes with pH. At the isoelectric pH, electrophoretic mobility is approximately zero and stability is often minimum, so coagulation/precipitation is easiest.</p></Card>
  </Section>
 </>;
}

export function Part07Content() {
 return <>
  <Section index="01" eyebrow="Destabilisation" title="Coagulation and the Hardy–Schulze rule" intro={<>Coagulation is aggregation and settling of colloidal particles after the stabilising charge or solvation barrier is sufficiently reduced.</>}>
   <Card title="Ways to coagulate a lyophobic sol" tone="rose"><p>Add an electrolyte; conduct electrophoresis until particles discharge at an electrode; mix oppositely charged sols; boil to strip adsorbed ions and increase collisions; or perform prolonged dialysis to remove stabilising ions.</p></Card>
   <FormulaCard title="Hardy–Schulze principle"><KB>{String.raw`\text{coagulating power rises strongly with valency of the counter-ion}`}</KB><KB>{String.raw`Al^{3+}>Ba^{2+}>Na^+\quad\text{for a negative sol}`}</KB><KB>{String.raw`[Fe(CN)_6]^{3-}>SO_4^{2-}>Cl^-\quad\text{for a positive sol}`}</KB></FormulaCard>
   <DataTable headers={["Quantity","Definition","Relation"]} rows={[
    ["Flocculation/coagulation value","Minimum millimoles of electrolyte required to coagulate 1 L sol under specified conditions (often 2 h).","Smaller value means stronger coagulating power."],
    ["Counter-ion","Ion carrying charge opposite to the sol particle.","Its sign must oppose the sol; its valency controls effectiveness."],
   ]}/>
   <Trap>Valency alone is not enough: first select the ion with charge opposite to the sol. Only then compare valencies.</Trap>
  </Section>
  <Section index="02" eyebrow="Protection" title="Protective colloids and gold number" intro={<>A lyophilic colloid can adsorb around lyophobic particles and provide a solvated protective film, greatly reducing electrolyte-induced coagulation.</>}>
   <FormulaCard title="Gold number"><KB>{String.raw`\text{gold number}=\text{mg protective colloid required to just prevent coagulation of 10 mL standard gold sol by 1 mL of 10\% NaCl}`}</KB><KB>{String.raw`\text{protective power}\propto\frac{1}{\text{gold number}}`}</KB></FormulaCard>
   <DataTable headers={["Protective colloid","Representative gold-number range/value"]} rows={[
    ["Gelatin","0.005–0.01"],
    ["Egg albumin","0.08–0.10"],
    ["Gum arabic","0.10–0.15"],
    ["Potato starch","about 25"],
   ]}/>
   <Key>Smaller gold number means greater protective action. Gelatin protects much more strongly than starch.</Key>
  </Section>
  <Section index="03" eyebrow="Semi-solid colloids" title="Gels, elasticity, syneresis and thixotropy" intro={<>A gel contains liquid dispersed through a continuous solid-like network. It may be elastic or non-elastic depending on the network and solvent interaction.</>}>
   <div className="grid gap-5 xl:grid-cols-3">
    <Card title="Elastic gels" tone="emerald"><p>Reversible deformation and often reversible swelling. Examples include gelatin and agar gels.</p></Card>
    <Card title="Non-elastic gels" tone="amber"><p>Rigid network with little reversible deformation. Silica gel is a standard example.</p></Card>
    <Card title="Special behaviour" tone="violet"><p><b className="text-white">Syneresis:</b> contraction of gel with expulsion of liquid. <b className="text-white">Thixotropy:</b> reversible gel-to-sol conversion on shaking and return on standing.</p></Card>
   </div>
  </Section>
  <Section index="04" eyebrow="Liquid–liquid colloids" title="Emulsions, emulsifiers and identification tests" intro={<>An emulsion contains droplets of one liquid dispersed in another immiscible liquid. It requires an interfacial stabiliser.</>}>
   <DataTable headers={["Type","Dispersed phase / medium","Examples","Common emulsifiers"]} rows={[
    ["Oil in water (O/W)","Oil droplets in water","Milk, vanishing cream","Proteins, gums, soaps, many detergents"],
    ["Water in oil (W/O)","Water droplets in oil","Butter, cold cream, cod-liver-oil preparations","Heavy-metal soaps, long-chain alcohols, lamp black"],
   ]}/>
   <DataTable headers={["Test","O/W response","W/O response"]} rows={[
    ["Dilution test","Dilutes with water","Dilutes with oil"],
    ["Dye test","Water-soluble dye colours continuous phase uniformly","Oil-soluble dye colours continuous phase uniformly"],
    ["Conductivity","Usually higher","Usually lower"],
    ["Filter-paper/cobalt chloride test","Water-continuous phase wets paper readily","Oil-continuous phase gives oily mark"],
   ]}/>
   <Card title="Emulsification and demulsification" tone="cyan"><p>Emulsifiers form an adsorbed film, lower interfacial tension and/or charge droplets. Breaking may be achieved by heating, freezing, centrifugation, adding electrolyte, changing pH or adding a competing surfactant, depending on the system.</p></Card>
  </Section>
  <Section index="05" eyebrow="Associated colloids" title="Surfactants, micelles, CMC and Krafft temperature" intro={<>A surfactant contains a hydrophobic hydrocarbon group and a hydrophilic ionic or polar group. Above characteristic concentration and temperature, molecules aggregate into micelles.</>}>
   <div className="overflow-x-auto"><ParticleFigure mode="micelle"/></div>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Micelle conditions" tone="violet"><p>Concentration must exceed the critical micelle concentration (CMC), and ionic surfactants must generally be above the Krafft temperature, where solubility becomes sufficient for micellisation.</p><p>Typical soap CMC values are about <K>{String.raw`10^{-4}`}</K> to <K>{String.raw`10^{-3}\ \mathrm{mol\,L^{-1}}`}</K>, though actual values depend on chain length, counter-ion, salt and temperature.</p></Card>
    <Card title="Ionic and nonionic surfactants" tone="amber"><p>Anionic: soaps, alkyl sulphates and sulphonates. Cationic: quaternary ammonium salts. Nonionic: polyoxyethylene-type surfactants. Amphoteric: species with both acidic and basic groups.</p></Card>
   </div>
   <Card title="Cleansing action" tone="emerald"><p>Hydrophobic tails embed in grease while hydrophilic heads remain in water. Agitation breaks grease into droplets surrounded by surfactant. Like-charged or strongly hydrated outer surfaces prevent coalescence, so dirt is emulsified and washed away.</p><p>Below CMC, surfactant first adsorbs at interfaces; above CMC, many bulk properties change slope rather than discontinuously jumping.</p></Card>
  </Section>
 </>;
}

export function Part08Content() {
 return <>
  <Section index="01" eyebrow="Formula atlas" title="Equations that must be immediately available" intro={<>The chapter is short in the syllabus but graph-heavy and exception-rich. These equations cover the quantitative core of the chapter.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <FormulaCard title="Adsorption and surfaces">
     <KB>{String.raw`\Delta n=\frac{\Delta P\,V}{RT}`}</KB>
     <KB>{String.raw`a_s=\frac{N_{\mathrm{ads}}a_{\mathrm{molecule}}}{m}`}</KB>
     <KB>{String.raw`\Delta G=\Delta H-T\Delta S`}</KB>
     <KB>{String.raw`\tau=A^{-1}e^{E_{\mathrm{des}}/RT}`}</KB>
    </FormulaCard>
    <FormulaCard title="Isotherms">
     <KB>{String.raw`\frac{x}{m}=kP^{1/n}`}</KB>
     <KB>{String.raw`\theta=\frac{KP}{1+KP}`}</KB>
     <KB>{String.raw`\frac{x}{m}=\frac{aKP}{1+KP}`}</KB>
     <KB>{String.raw`\ln\frac{P_2}{P_1}=-\frac{\Delta H_{\mathrm{ads}}}{R}\left(\frac1{T_2}-\frac1{T_1}\right)`}</KB>
    </FormulaCard>
    <FormulaCard title="Colloids and enzymes">
     <KB>{String.raw`D=\frac{k_BT}{6\pi\eta r}`}</KB>
     <KB>{String.raw`v=\frac{V_{\max}[S]}{K_M+[S]}`}</KB>
     <KB>{String.raw`[S]=K_M\Rightarrow v=\frac{V_{\max}}2`}</KB>
    </FormulaCard>
    <FormulaCard title="Protection and coagulation">
     <KB>{String.raw`\text{protective power}\propto\frac1{\text{gold number}}`}</KB>
     <KB>{String.raw`\text{coagulating power}\propto\frac1{\text{flocculation value}}`}</KB>
    </FormulaCard>
   </div>
  </Section>
  <Section index="02" eyebrow="Graph atlas" title="How to read every standard graph" intro={<>JEE questions often test axes, slope, intercept, limiting behaviour or order of curves rather than direct substitution.</>}>
   <DataTable headers={["Graph","Essential reading"]} rows={[
    [<K>{String.raw`x/m\ \mathrm{vs}\ P`}</K>,"Rises and approaches saturation; at the same P, the lower-temperature physisorption curve lies higher."],
    [<K>{String.raw`\log(x/m)\ \mathrm{vs}\ \log P`}</K>,"Straight line for Freundlich; slope = 1/n, intercept = log k."],
    [<K>{String.raw`P/(x/m)\ \mathrm{vs}\ P`}</K>,"Langmuir linear plot; slope = 1/a, intercept = 1/(aK)."],
    [<K>{String.raw`x/m\ \mathrm{vs}\ T`}</K>,"Physisorption generally decreases; chemisorption often rises to an optimum then decreases."],
    ["Surface tension/conductivity vs surfactant concentration","Two approximately linear regimes intersect near CMC."],
    ["Enzyme rate vs substrate concentration","Rectangular saturation curve; half maximum at [S] = KM."],
    ["Electrophoretic mobility vs pH","Crosses zero at isoelectric pH."],
   ]}/>
  </Section>
  <Section index="03" eyebrow="Integrated examples" title="Representative JEE Advanced problem archetypes" intro={<>These examples represent important JEE Advanced problem forms.</>}>
   <Example number={1} title="Freundlich line" question={<>A plot of <K>{String.raw`\log(x/m)`}</K> against <K>{String.raw`\log P`}</K> has slope 0.40 and intercept −0.20. Find <K>{String.raw`n`}</K>, <K>{String.raw`k`}</K> and <K>{String.raw`x/m`}</K> at P = 25.</>} solution={<><p><K>{String.raw`1/n=0.40`}</K>, so <K>{String.raw`n=2.5`}</K>. Also <K>{String.raw`\log k=-0.20`}</K>, so <K>{String.raw`k=10^{-0.20}=0.631`}</K>.</p><KB>{String.raw`x/m=0.631(25)^{0.40}=2.29`}</KB></>} answer={<>n = 2.5, k = 0.631 and x/m ≈ 2.29.</>}/>
   <Example number={2} title="Langmuir half coverage" question={<>For an adsorbate, K = 0.50 bar⁻¹. At what pressure are 20%, 50% and 80% of sites occupied?</>} solution={<><p>From <K>{String.raw`\theta=KP/(1+KP)`}</K>,</p><KB>{String.raw`P=\frac{\theta}{K(1-\theta)}`}</KB><p>Substitute each coverage.</p></>} answer={<>0.50 bar, 2.0 bar and 8.0 bar, respectively.</>}/>
   <Example number={3} title="Hardy–Schulze selection" question={<>A negative As₂S₃ sol is treated separately with equal-molar NaCl, BaCl₂ and AlCl₃. Give coagulating-power order and flocculation-value order.</>} solution={<><p>The effective ions are the cations. Higher cation valency gives greater coagulating power.</p></>} answer={<>Power: AlCl₃ &gt; BaCl₂ &gt; NaCl; flocculation value: NaCl &gt; BaCl₂ &gt; AlCl₃.</>}/>
   <Example number={4} title="Gold number" question={<>0.018 g of a protective colloid is diluted to 60 mL. What volume is required to protect 10 mL gold sol if its gold number is 0.15?</>} solution={<><p>Concentration = 18 mg/60 mL = 0.30 mg mL⁻¹. Required mass = 0.15 mg.</p></>} answer={<>0.50 mL.</>}/>
   <Example number={5} title="Michaelis–Menten comparison" question={<>An enzyme has KM = 2.0 mM. Find v/Vmax at substrate concentrations 0.20, 2.0 and 20 mM.</>} solution={<><KB>{String.raw`\frac{v}{V_{\max}}=\frac{[S]}{K_M+[S]}`}</KB></>} answer={<>0.0909, 0.500 and 0.909.</>}/>
  </Section>
  <Section index="04" eyebrow="Rapid diagnosis" title="High-yield statements and traps" intro={<>Use these statements to check conceptual accuracy before attempting mixed questions.</>}>
   <div className="grid gap-5 xl:grid-cols-2">
    <Card title="Adsorption traps" tone="rose"><p>Adsorption is surface, not bulk. Lower temperature favours physisorption but chemisorption may need activation. Freundlich is empirical and fails at high pressure. Langmuir assumes identical independent sites. A catalyst does not shift equilibrium.</p></Card>
    <Card title="Colloid traps" tone="amber"><p>Colloids are heterogeneous despite uniform appearance. Gas in gas is not colloidal. Brownian motion is kinetic; Tyndall effect is optical. Counter-ion, not co-ion, coagulates. Smaller gold number means stronger protection.</p></Card>
    <Card title="Micelle traps" tone="violet"><p>CMC is concentration-dependent aggregation threshold; Krafft temperature is a temperature/solubility threshold. Micelles form only above both relevant limits for ionic surfactants. In water, hydrocarbon tails point inward.</p></Card>
    <Card title="Enzyme traps" tone="cyan"><p>Enzymes are highly specific but not universally limited to exactly one chemical transformation. Optimum pH and temperature are enzyme-dependent. At high substrate concentration, reaction is zero order in substrate.</p></Card>
   </div>
  </Section>
 </>;
}
