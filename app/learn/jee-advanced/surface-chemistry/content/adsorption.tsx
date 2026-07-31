"use client";

import { Card, DataTable, Example, FormulaCard, K, KB, Key, Section, SurfaceVisual, Trap } from "../surface-chemistry-shared";

export function Part01Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Interface science"
        title="Why matter behaves differently at a boundary"
        intro={<>Surface chemistry studies physical and chemical events in the molecularly thin region separating two phases. The same substance can display different reactivity, energy and electrical behaviour at its surface because a surface particle does not experience the same surroundings as a bulk particle.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="interface" /></div>
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Surface and interface" tone="cyan">
            <p>A <b className="text-white">surface</b> commonly means the boundary of a condensed phase against a gas or vacuum. An <b className="text-white">interface</b> is the boundary between any two phases, such as solid–gas, solid–liquid, liquid–gas or liquid–liquid.</p>
            <p>Two completely miscible gases do not maintain a stable gas–gas interface because molecular mixing removes a persistent boundary.</p>
          </Card>
          <Card title="Residual forces" tone="violet">
            <p>Atoms in the interior are surrounded in all directions, so attractive forces are approximately balanced. Atoms at an exposed surface lack neighbours on one side and possess unsatisfied or residual bonding capacity.</p>
            <p>This makes the surface a region of higher potential energy and enhanced chemical activity.</p>
          </Card>
          <Card title="Surface free energy" tone="amber">
            <p>Creating new surface requires work. For a reversible increase in area at constant temperature and composition, the free-energy change is proportional to the newly created area.</p>
            <KB>{String.raw`dG=\gamma\,dA`}</KB>
            <p><K>{String.raw`\gamma`}</K> is surface free energy per unit area; for liquids it is numerically equal to surface tension under the same conditions.</p>
          </Card>
        </div>
        <Key>Surface processes are favoured when they reduce the system’s exposed high-energy area or satisfy residual bonding at the interface.</Key>
      </Section>

      <Section
        index="02"
        eyebrow="Scale"
        title="Specific surface area and the power of subdivision"
        intro={<>For the same mass, smaller particles expose a larger fraction of their atoms at the surface. Porosity can increase the accessible area far beyond the geometrical external area.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="surface-area" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Cube subdivision">
            <p className="text-sm leading-6 text-slate-300">For a cube of edge <K>{String.raw`L`}</K> and density <K>{String.raw`\rho`}</K>:</p>
            <KB>{String.raw`A=6L^2,\qquad m=\rho L^3`}</KB>
            <KB>{String.raw`a_s=\frac{A}{m}=\frac{6}{\rho L}`}</KB>
            <p className="text-sm leading-6 text-slate-300">Thus the external specific surface area varies inversely with particle size.</p>
          </FormulaCard>
          <FormulaCard title="Spherical particles">
            <KB>{String.raw`A=4\pi r^2,\qquad m=\frac{4}{3}\pi r^3\rho`}</KB>
            <KB>{String.raw`a_s=\frac{3}{\rho r}=\frac{6}{\rho d}`}</KB>
            <p className="text-sm leading-6 text-slate-300">Real adsorbents may possess internal pores, so the experimentally accessible area can be many times the value predicted from external geometry.</p>
          </FormulaCard>
        </div>
        <DataTable
          headers={["Material feature", "Effect on accessible surface", "Consequence"]}
          rows={[
            ["Grinding or subdivision", "Creates more external faces", "Adsorption and reaction rates generally increase"],
            ["Microporosity", "Creates internal walls of molecular dimensions", "Large gas uptake and high catalyst area"],
            ["Blocked pores", "Removes access to internal sites", "Measured surface area and activity fall"],
            ["Sintering", "Small particles fuse into larger particles", "Catalyst area and activity decline"],
          ]}
        />
      </Section>

      <Section
        index="03"
        eyebrow="Language"
        title="Adsorption, absorption, sorption and desorption"
        intro={<>These terms describe where a species accumulates and whether it remains at a boundary or penetrates the bulk.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="sorption" /></div>
        <DataTable
          headers={["Term", "Definition", "Illustration"]}
          rows={[
            ["Adsorption", "Concentration of a species is greater at a surface than in the adjoining bulk phase.", "NH₃ on charcoal; dye on activated carbon; H₂ on nickel"],
            ["Absorption", "The incoming species becomes distributed through the bulk of another phase.", "NH₃ dissolved in water; water entering anhydrous CaCl₂"],
            ["Sorption", "Adsorption and absorption occur simultaneously or cannot be separated experimentally.", "A vapour first adsorbs on a polymer and then diffuses into it"],
            ["Desorption", "An adsorbed species leaves the surface and returns to the gas or liquid phase.", "Heating silica gel to remove water"],
            ["Occlusion", "A gas or impurity becomes mechanically trapped within a solid during growth or solidification.", "Gas trapped in a precipitate or metal lattice"],
          ]}
        />
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Adsorbent, adsorbate and capacity" tone="cyan">
            <p>The material supplying the surface is the <b className="text-white">adsorbent</b>; the retained species is the <b className="text-white">adsorbate</b>.</p>
            <p>Adsorption capacity is commonly reported as mass or moles adsorbed per unit mass of adsorbent, or as fractional coverage of available sites.</p>
          </Card>
          <Card title="Positive and negative adsorption" tone="violet">
            <p>In a solution, one component may be enriched at the interface relative to the bulk: positive adsorption. It may also be depleted because another component is preferentially adsorbed: negative adsorption.</p>
            <p>The idea is relative composition at the interface, not simply whether material is present there.</p>
          </Card>
        </div>
        <Trap>Do not call drying by anhydrous calcium chloride “adsorption” without checking the mechanism. Water may enter the bulk and form hydrates, which is absorption or chemical combination rather than simple surface adsorption.</Trap>
      </Section>

      <Section
        index="04"
        eyebrow="Thermodynamics"
        title="Driving force and dynamic equilibrium"
        intro={<>Adsorption usually lowers surface free energy and restricts the motion of the adsorbate. The balance of enthalpy and entropy explains temperature effects and the existence of equilibrium.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Thermodynamic signs">
            <KB>{String.raw`\Delta G_{\mathrm{ads}}=\Delta H_{\mathrm{ads}}-T\Delta S_{\mathrm{ads}}`}</KB>
            <p className="text-sm leading-6 text-slate-300">For ordinary adsorption, <K>{String.raw`\Delta S_{\mathrm{ads}}<0`}</K> because translational freedom decreases. Net adsorption is generally exothermic, so <K>{String.raw`\Delta H_{\mathrm{ads}}<0`}</K>.</p>
            <p className="text-sm leading-6 text-slate-300">Spontaneous adsorption requires <K>{String.raw`\Delta G_{\mathrm{ads}}<0`}</K>. At equilibrium, <K>{String.raw`\Delta G=0`}</K>.</p>
          </FormulaCard>
          <Card title="Microscopic equilibrium" tone="emerald">
            <p>Initially the clean surface has many vacant sites, so adsorption is rapid. As coverage rises, vacant sites become less available and the adsorption rate falls.</p>
            <p>At the same time, more adsorbed particles are available for desorption, so the desorption rate rises. Equilibrium is reached when the two rates are equal, not when molecular motion stops.</p>
            <KB>{String.raw`r_{\mathrm{ads}}=r_{\mathrm{des}}`}</KB>
          </Card>
        </div>
        <Card title="Possible fate of an adsorbed particle" tone="slate">
          <p>An adsorbed particle may remain localised, migrate across the surface, enter a pore, diffuse into the bulk, dissociate, react with another surface species, or desorb. These possibilities connect adsorption directly with heterogeneous catalysis, corrosion and membrane transport.</p>
        </Card>
        <Key>The magnitude of the heat of adsorption usually decreases as coverage increases because the strongest sites are occupied first and later particles occupy weaker sites or experience lateral repulsion.</Key>
      </Section>

      <Section
        index="05"
        eyebrow="Quantitative foundations"
        title="Pressure-drop and monolayer surface-area calculations"
        intro={<>A rigid vessel provides a direct way to measure gas uptake. Monolayer uptake can also be converted into total surface area when the molecular cross-sectional area is known.</>}
      >
        <Example
          number={1}
          title="Gas adsorbed from a pressure decrease"
          question={<>A rigid 2.00 L vessel contains CO₂ at 5.00 bar and 300 K. After 4.00 g of activated carbon is introduced, the equilibrium pressure is 4.50 bar. Neglect gas volume displaced by the solid. Find the amount adsorbed per gram.</>}
          solution={
            <>
              <p>At constant volume and temperature, the decrease in gas moles equals the adsorbed amount.</p>
              <KB>{String.raw`\Delta n=\frac{(P_i-P_f)V}{RT}`}</KB>
              <KB>{String.raw`\Delta n=\frac{(0.50\times10^5)(2.00\times10^{-3})}{(8.314)(300)}=0.0401\ \mathrm{mol}`}</KB>
              <p>Per gram of carbon:</p>
              <KB>{String.raw`\frac{0.0401}{4.00}=0.0100\ \mathrm{mol\,g^{-1}}`}</KB>
            </>
          }
          answer={<>1.00 × 10⁻² mol CO₂ per gram of activated carbon.</>}
        />
        <Example
          number={2}
          title="Surface area from monolayer adsorption"
          question={<>A 2.50 g sample adsorbs 8.00 mmol of nitrogen as a complete monolayer. If each N₂ molecule occupies <K>{String.raw`0.162\ \mathrm{nm^2}`}</K>, calculate the specific surface area.</>}
          solution={
            <>
              <KB>{String.raw`N=(8.00\times10^{-3})N_A`}</KB>
              <KB>{String.raw`A=N(0.162\times10^{-18})=7.80\times10^2\ \mathrm{m^2}`}</KB>
              <KB>{String.raw`a_s=\frac{7.80\times10^2}{2.50}=3.12\times10^2\ \mathrm{m^2\,g^{-1}}`}</KB>
            </>
          }
          answer={<>312 m² g⁻¹.</>}
        />
        <Example
          number={3}
          title="External area of spherical particles"
          question={<>A nonporous solid of density <K>{String.raw`2.0\ \mathrm{g\,cm^{-3}}`}</K> consists of uniform spherical particles of diameter <K>{String.raw`1.0\ \mu m`}</K>. Estimate the external specific surface area.</>}
          solution={
            <>
              <KB>{String.raw`a_s=\frac{6}{\rho d}`}</KB>
              <p>Use SI units: <K>{String.raw`\rho=2.0\times10^3\ \mathrm{kg\,m^{-3}}`}</K>, <K>{String.raw`d=1.0\times10^{-6}\ \mathrm{m}`}</K>.</p>
              <KB>{String.raw`a_s=\frac{6}{(2.0\times10^3)(1.0\times10^{-6})}=3.0\times10^3\ \mathrm{m^2\,kg^{-1}}`}</KB>
            </>
          }
          answer={<>3.0 m² g⁻¹.</>}
        />
      </Section>
    </>
  );
}

export function Part02Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Classification"
        title="Physisorption and chemisorption"
        intro={<>The force holding the adsorbate determines the two principal modes of adsorption. Physical adsorption is dominated by intermolecular attraction; chemical adsorption forms new surface bonds.</>}
      >
        <DataTable
          headers={["Property", "Physisorption", "Chemisorption"]}
          rows={[
            ["Dominant interaction", "Dispersion, dipole or hydrogen-bond attraction", "Covalent, ionic or metallic surface bond"],
            ["Heat of adsorption", "Usually low, often about 20–40 kJ mol⁻¹", "Usually much larger, commonly 80–240 kJ mol⁻¹"],
            ["Specificity", "Low", "High"],
            ["Activation energy", "Very small or absent", "Often appreciable"],
            ["Layers", "Multilayer possible", "Normally one chemically bonded layer"],
            ["Reversibility", "Usually readily reversible", "May be difficult to reverse"],
            ["Temperature trend", "Favoured by low temperature", "May increase initially as activation is achieved, then decrease at high temperature"],
            ["Saturation", "Successive physical layers may form", "Stops when reactive sites are occupied"],
          ]}
        />
        <div className="overflow-x-auto"><SurfaceVisual mode="potential" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Activated chemisorption" tone="amber">
            <p>A molecule may first enter a weakly held precursor state and then cross an activation barrier to form a chemical bond. Heating can therefore increase chemisorption at first even though the final adsorption step is exothermic.</p>
            <p>This produces the characteristic rise-and-fall chemisorption isobar.</p>
          </Card>
          <Card title="Dissociative chemisorption" tone="violet">
            <p>A diatomic molecule may adsorb and split into atoms on the surface. Each atom occupies a separate site.</p>
            <KB>{String.raw`H_2(g)+2*\rightleftharpoons2H*`}</KB>
            <p>The asterisk represents a vacant surface site.</p>
          </Card>
        </div>
        <Card title="Additional classifications used in surface science" tone="slate">
          <p><b className="text-white">Specific versus non-specific:</b> chemisorption depends strongly on chemical identity, whereas physical adsorption is less selective.</p>
          <p><b className="text-white">Localised versus mobile:</b> an adsorbate may remain at one site or migrate across the surface.</p>
          <p><b className="text-white">Associative versus dissociative:</b> a molecule may remain intact or split into fragments during adsorption.</p>
          <p><b className="text-white">Monolayer versus multilayer:</b> chemical bonding normally gives one layer, while physical forces can support additional layers.</p>
        </Card>
      </Section>

      <Section
        index="02"
        eyebrow="Molecular orbitals"
        title="How orbital mixing creates a surface bond"
        intro={<>A chemical surface bond forms when adsorbate orbitals mix with occupied and vacant electronic states of the solid. The interaction is strongest when symmetry, energy and spatial overlap are favourable.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="orbitals" /></div>
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Donation" tone="cyan">
            <p>An occupied adsorbate orbital can donate electron density into an empty or partly empty metal state. The resulting bonding combination lies lower in energy and stabilises adsorption.</p>
            <p>For CO on a metal, the carbon-centred 5σ orbital acts as an important donor.</p>
          </Card>
          <Card title="Back-donation" tone="emerald">
            <p>Occupied metal d states can transfer electron density into a vacant antibonding orbital of the adsorbate. This strengthens the metal–adsorbate bond while weakening an internal bond of the adsorbate.</p>
            <p>CO receives dπ electron density into its 2π* orbital.</p>
          </Card>
          <Card title="Bonding and antibonding states" tone="violet">
            <p>Orbital mixing forms lower-energy bonding states and higher-energy antibonding states. Strong adsorption requires the bonding states to be occupied without excessive filling of the antibonding states.</p>
            <p>This is the orbital origin of the optimum-adsorption principle used in catalysis.</p>
          </Card>
        </div>
        <Key>Adsorption strength is not controlled by overlap alone. Electron count matters: filling an adsorbate–metal antibonding state can weaken or reverse the bond even when overlap is large.</Key>
      </Section>

      <Section
        index="03"
        eyebrow="MOT case studies"
        title="H₂, CO, O₂ and N₂ on transition-metal surfaces"
        intro={<>These molecules illustrate how σ donation, π back-donation and occupation of antibonding orbitals control chemisorption and catalytic activation.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Hydrogen: σ donation and σ* back-donation" tone="cyan">
            <p>The H₂ σ bonding orbital donates into an available metal state, while occupied metal d orbitals back-donate into H₂ σ*. Population of σ* lowers the H–H bond order and lengthens the bond.</p>
            <p>If the interaction is strong enough, H₂ dissociates into two adsorbed H atoms. This step is central to hydrogenation and the Haber process.</p>
          </Card>
          <Card title="Carbon monoxide: synergic bonding" tone="emerald">
            <p>CO binds through carbon because its donor 5σ orbital and acceptor 2π* orbitals have large carbon character. σ donation and π back-donation reinforce each other.</p>
            <p>Greater back-donation generally lowers the C–O stretching frequency and weakens the C–O bond.</p>
          </Card>
          <Card title="Oxygen: activation through π* orbitals" tone="rose">
            <p>O₂ already has electrons in antibonding π* orbitals. Electron transfer from a metal can produce superoxide-like or peroxide-like surface species, further reducing O–O bond order.</p>
            <p>Excessive activation may cause dissociative adsorption to O atoms.</p>
          </Card>
          <Card title="Nitrogen: difficult but catalytically decisive" tone="amber">
            <p>N₂ has a very strong triple bond. Donation from the N₂ lone-pair-like σ orbital to the metal and back-donation into N₂ π* weaken N≡N.</p>
            <p>Iron surfaces in ammonia synthesis provide d states capable of this interaction; promoters modify electron density and surface structure.</p>
          </Card>
        </div>
        <div className="overflow-x-auto"><SurfaceVisual mode="backbonding" /></div>
        <Trap>Back-donation does not mean that a metal gives all its electrons to the molecule. It is partial orbital mixing and charge redistribution; the final state is a delocalised metal–adsorbate bond.</Trap>
      </Section>

      <Section
        index="04"
        eyebrow="Control variables"
        title="Factors governing the extent and type of adsorption"
        intro={<>The observed amount is controlled by the adsorbate, the surface and the experimental conditions. The dominant factors are different for physical and chemical adsorption.</>}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Card title="Nature of the gas" tone="cyan">
            <p>For physisorption, high polarisability, high critical temperature and ease of liquefaction usually increase adsorption. For chemisorption, chemical affinity and frontier-orbital compatibility dominate.</p>
          </Card>
          <Card title="Nature of the surface" tone="violet">
            <p>Surface composition, oxidation state, crystallographic face, defects, steps and edges determine site energy and orbital overlap. Clean transition-metal surfaces chemisorb many small molecules strongly.</p>
          </Card>
          <Card title="Surface area and porosity" tone="amber">
            <p>More accessible area means more sites. Micropores can enhance physisorption through overlapping wall potentials, whereas blocked pores reduce uptake.</p>
          </Card>
          <Card title="Pressure" tone="emerald">
            <p>Increasing pressure raises gas–surface collision frequency and chemical potential. Adsorption rises until available sites or pore volume approach saturation.</p>
          </Card>
          <Card title="Temperature" tone="rose">
            <p>Physisorption decreases with temperature. Activated chemisorption may first increase because more molecules cross the barrier and then decrease because desorption becomes dominant.</p>
          </Card>
          <Card title="Impurities and competition" tone="slate">
            <p>Water, sulphur, carbon monoxide or other strongly adsorbed species may block sites. In mixtures, adsorbates compete according to partial pressure and binding constant.</p>
          </Card>
        </div>
      </Section>

      <Section
        index="05"
        eyebrow="Worked reasoning"
        title="Examples based on adsorption type and molecular orbitals"
        intro={<>The examples below connect macroscopic trends with the underlying surface interaction.</>}
      >
        <Example
          number={1}
          title="Order of physical adsorption on charcoal"
          question={<>Arrange H₂, N₂, CO₂ and SO₂ in increasing physical adsorption at the same temperature and pressure.</>}
          solution={
            <>
              <p>For the same non-specific adsorbent, physical adsorption generally increases with ease of liquefaction, polarisability and critical temperature.</p>
              <p>H₂ is least polarisable and has the lowest critical temperature. SO₂ is strongly polarisable and easily liquefied.</p>
            </>
          }
          answer={<>H₂ &lt; N₂ &lt; CO₂ &lt; SO₂.</>}
        />
        <Example
          number={2}
          title="Why H₂ dissociates on nickel"
          question={<>Use molecular-orbital language to explain why a nickel surface can weaken and split H₂.</>}
          solution={
            <>
              <p>The H₂ σ orbital overlaps with available metal states and donates electron density. Occupied nickel d states simultaneously back-donate into H₂ σ*.</p>
              <p>Occupation of σ* reduces H–H bond order. As the molecule approaches and orbital interaction strengthens, the H–H bond lengthens and the potential-energy path can lead to two Ni–H bonds.</p>
            </>
          }
          answer={<>Synergic σ donation and d→σ* back-donation weaken H–H and permit dissociative chemisorption.</>}
        />
        <Example
          number={3}
          title="Electron-rich metal and CO bonding"
          question={<>A metal surface becomes more electron rich after addition of an electropositive promoter. Predict the qualitative effect on CO back-donation and the C–O bond.</>}
          solution={
            <>
              <p>Greater electron density in occupied metal d states favours transfer into the CO 2π* orbital.</p>
              <p>Back-donation strengthens the metal–carbon bond but populates an antibonding orbital of CO, so the internal C–O bond weakens.</p>
            </>
          }
          answer={<>Back-donation increases; M–C strengthens and C–O weakens, usually lowering the C–O stretching frequency.</>}
        />
      </Section>
    </>
  );
}

export function Part03Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Equilibrium maps"
        title="Isotherms, isobars and isosteres"
        intro={<>Adsorption data are represented in three complementary ways. Each keeps one experimental variable fixed and reveals a different aspect of the surface equilibrium.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="isotherms" /></div>
        <DataTable
          headers={["Plot", "Quantity held constant", "Typical use"]}
          rows={[
            ["Adsorption isotherm", "Temperature", "Amount adsorbed versus equilibrium pressure or concentration"],
            ["Adsorption isobar", "Pressure", "Amount adsorbed versus temperature; distinguishes activated chemisorption from physisorption"],
            ["Adsorption isostere", "Surface coverage or amount adsorbed", "Equilibrium pressure versus temperature; gives isosteric heat"],
          ]}
        />
        <Key>In every adsorption equation, use the equilibrium pressure or equilibrium concentration, not the initial value before the adsorbent was added.</Key>
      </Section>

      <Section
        index="02"
        eyebrow="Empirical isotherm"
        title="Freundlich adsorption isotherm"
        intro={<>The Freundlich equation is an empirical relation that often represents adsorption on energetically heterogeneous surfaces over a limited pressure or concentration range.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Gas–solid form">
            <KB>{String.raw`\frac{x}{m}=kP^{1/n}`}</KB>
            <KB>{String.raw`\log\frac{x}{m}=\log k+\frac{1}{n}\log P`}</KB>
            <p className="text-sm leading-6 text-slate-300">A plot of <K>{String.raw`\log(x/m)`}</K> against <K>{String.raw`\log P`}</K> has slope <K>{String.raw`1/n`}</K> and intercept <K>{String.raw`\log k`}</K>.</p>
          </FormulaCard>
          <FormulaCard title="Adsorption from solution">
            <KB>{String.raw`\frac{x}{m}=kC_e^{1/n}`}</KB>
            <KB>{String.raw`\log\frac{x}{m}=\log k+\frac{1}{n}\log C_e`}</KB>
            <p className="text-sm leading-6 text-slate-300"><K>{String.raw`C_e`}</K> is the equilibrium solute concentration after adsorption.</p>
          </FormulaCard>
        </div>
        <DataTable
          headers={["Pressure region", "Ideal limiting behaviour", "Interpretation"]}
          rows={[
            ["Very low pressure", <K key="freundlich-low">{String.raw`x/m\propto P`}</K>, "Many vacant sites; first-order pressure dependence"],
            ["Intermediate pressure", <K key="freundlich-mid">{String.raw`x/m=kP^{1/n}`}</K>, "Freundlich empirical region, usually 0 < 1/n < 1"],
            ["Very high pressure", <K key="freundlich-high">{String.raw`x/m\to\text{constant}`}</K>, "Finite capacity gives saturation; simple Freundlich form fails"],
          ]}
        />
        <Trap>The condition <K>{String.raw`0<1/n<1`}</K> belongs to the usual favourable Freundlich isotherm. The limiting values 1 and 0 describe low- and high-pressure behaviour, not a single equation valid at every pressure.</Trap>
      </Section>

      <Section
        index="03"
        eyebrow="Site model"
        title="Langmuir adsorption isotherm: assumptions and derivation"
        intro={<>Langmuir treats adsorption as a dynamic equilibrium on a fixed number of identical, independent sites. It naturally predicts monolayer saturation.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Assumptions" tone="cyan">
            <p>All sites are equivalent; one site holds one adsorbate particle; adsorption is localised; adsorbed particles do not interact; a monolayer is the maximum coverage; adsorption and desorption establish equilibrium.</p>
            <p>Real surfaces violate several assumptions, but the model remains an essential theoretical starting point.</p>
          </Card>
          <FormulaCard title="Rate balance">
            <KB>{String.raw`r_a=k_aP(1-\theta)`}</KB>
            <KB>{String.raw`r_d=k_d\theta`}</KB>
            <KB>{String.raw`k_aP(1-\theta)=k_d\theta`}</KB>
            <KB>{String.raw`\theta=\frac{KP}{1+KP},\qquad K=\frac{k_a}{k_d}`}</KB>
          </FormulaCard>
        </div>
        <FormulaCard title="Amount adsorbed and linear form">
          <KB>{String.raw`q=q_m\theta=\frac{q_mKP}{1+KP}`}</KB>
          <KB>{String.raw`\frac{P}{q}=\frac{1}{q_mK}+\frac{P}{q_m}`}</KB>
          <p className="text-sm leading-6 text-slate-300">A plot of <K>{String.raw`P/q`}</K> versus <K>{String.raw`P`}</K> gives slope <K>{String.raw`1/q_m`}</K> and intercept <K>{String.raw`1/(q_mK)`}</K>.</p>
        </FormulaCard>
        <DataTable
          headers={["Limit", "Reduction", "Apparent order"]}
          rows={[
            [<K key="langmuir-low-limit">{String.raw`KP\ll1`}</K>, <K key="langmuir-low-result">{String.raw`q\approx q_mKP`}</K>, "First order in pressure"],
            [<K key="langmuir-high-limit">{String.raw`KP\gg1`}</K>, <K key="langmuir-high-result">{String.raw`q\approx q_m`}</K>, "Zero order in pressure; surface saturated"],
          ]}
        />
      </Section>

      <Section
        index="04"
        eyebrow="Beyond a monolayer"
        title="BET multilayer adsorption and porous solids"
        intro={<>Physical adsorption may continue beyond the first layer. BET theory extends the Langmuir idea by allowing successive layers and is widely used to determine specific surface area.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Conceptual assumptions" tone="violet">
            <p>The first layer interacts directly with the solid and has a characteristic adsorption enthalpy. Molecules in higher layers behave approximately like condensed adsorbate and can form before the preceding layer is complete.</p>
            <p>The theory is most useful over a restricted relative-pressure range and is not a universal pore model.</p>
          </Card>
          <FormulaCard title="BET linear equation">
            <KB>{String.raw`\frac{P}{n(P_0-P)}=\frac{1}{n_mC}+\frac{C-1}{n_mC}\frac{P}{P_0}`}</KB>
            <p className="text-sm leading-6 text-slate-300"><K>{String.raw`P_0`}</K> is saturation vapour pressure, <K>{String.raw`n_m`}</K> monolayer capacity and <K>{String.raw`C`}</K> a constant related to the first-layer adsorption energy.</p>
          </FormulaCard>
        </div>
        <Card title="Hysteresis and capillary condensation" tone="amber">
          <p>In mesoporous solids, adsorption and desorption paths may differ because pore filling and emptying occur through metastable liquid-like states. The resulting hysteresis loop contains information about pore geometry but should not be interpreted by a single simple rule.</p>
        </Card>
      </Section>

      <Section
        index="05"
        eyebrow="Heat of adsorption"
        title="Adsorption isosteres and surface heterogeneity"
        intro={<>At fixed coverage, the pressure required to maintain adsorption rises with temperature. The temperature dependence gives the isosteric heat of adsorption.</>}
      >
        <FormulaCard title="Isosteric relation">
          <KB>{String.raw`\left(\frac{\partial\ln P}{\partial(1/T)}\right)_{q}=\frac{\Delta H_{\mathrm{ads}}}{R}`}</KB>
          <KB>{String.raw`\ln\frac{P_2}{P_1}=\frac{\Delta H_{\mathrm{ads}}}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)`}</KB>
          <p className="text-sm leading-6 text-slate-300">Because <K>{String.raw`\Delta H_{\mathrm{ads}}<0`}</K>, the slope of <K>{String.raw`\ln P`}</K> against <K>{String.raw`1/T`}</K> is negative when adsorption enthalpy is written with its thermodynamic sign. Some texts instead define the positive isosteric heat <K>{String.raw`q_{st}=-\Delta H_{\mathrm{ads}}`}</K>.</p>
        </FormulaCard>
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Integral heat" tone="cyan"><p>Average enthalpy change for adsorbing a finite amount from a clean surface to a stated coverage.</p></Card>
          <Card title="Differential heat" tone="violet"><p>Enthalpy change for adding an infinitesimal additional amount at a particular coverage.</p></Card>
          <Card title="Isosteric heat" tone="amber"><p>Differential-like heat obtained from equilibrium pressures measured at constant coverage and different temperatures.</p></Card>
        </div>
        <Key>If isosteric heat decreases strongly with coverage, the surface is energetically heterogeneous or lateral adsorbate interactions are changing.</Key>
      </Section>

      <Section
        index="06"
        eyebrow="Worked examples"
        title="Freundlich, Langmuir and isostere calculations"
        intro={<>These examples illustrate how experimental plots are converted into physically meaningful constants.</>}
      >
        <Example
          number={1}
          title="Freundlich constants from a straight line"
          question={<>A graph of <K>{String.raw`\log(q)`}</K> against <K>{String.raw`\log P`}</K> has slope 0.40 and intercept 0.60. Find <K>{String.raw`n`}</K> and <K>{String.raw`k`}</K> when common logarithms are used.</>}
          solution={
            <>
              <KB>{String.raw`\frac{1}{n}=0.40\Rightarrow n=2.50`}</KB>
              <KB>{String.raw`\log k=0.60\Rightarrow k=10^{0.60}=3.98`}</KB>
            </>
          }
          answer={<>n = 2.50 and k = 3.98 in the units implied by q and P.</>}
        />
        <Example
          number={2}
          title="Langmuir constants from a linear plot"
          question={<>For a plot of <K>{String.raw`P/q`}</K> versus <K>{String.raw`P`}</K>, the slope is 0.050 g mmol⁻¹ and the intercept is 0.020 bar g mmol⁻¹. Determine <K>{String.raw`q_m`}</K> and <K>{String.raw`K`}</K>.</>}
          solution={
            <>
              <KB>{String.raw`\text{slope}=\frac{1}{q_m}=0.050\Rightarrow q_m=20.0\ \mathrm{mmol\,g^{-1}}`}</KB>
              <KB>{String.raw`\text{intercept}=\frac{1}{q_mK}=0.020`}</KB>
              <KB>{String.raw`K=\frac{1}{(20.0)(0.020)}=2.50\ \mathrm{bar^{-1}}`}</KB>
            </>
          }
          answer={<>qₘ = 20.0 mmol g⁻¹ and K = 2.50 bar⁻¹.</>}
        />
        <Example
          number={3}
          title="Isosteric heat from two pressures"
          question={<>At the same surface coverage, equilibrium pressures are 1.00 bar at 300 K and 2.50 bar at 330 K. Estimate the adsorption enthalpy.</>}
          solution={
            <>
              <KB>{String.raw`\ln(2.50)=\frac{\Delta H}{R}\left(\frac{1}{330}-\frac{1}{300}\right)`}</KB>
              <p>The temperature bracket is negative, so a positive logarithm corresponds to a negative adsorption enthalpy.</p>
              <KB>{String.raw`\Delta H=-25.1\ \mathrm{kJ\,mol^{-1}}`}</KB>
            </>
          }
          answer={<>Approximately −25 kJ mol⁻¹.</>}
        />
      </Section>
    </>
  );
}

export function Part04Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Rates"
        title="Kinetics of adsorption and desorption"
        intro={<>An adsorption isotherm describes equilibrium, whereas adsorption kinetics describes how rapidly the surface approaches that equilibrium.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Elementary Langmuir kinetics">
            <KB>{String.raw`r_a=k_aP(1-\theta)`}</KB>
            <KB>{String.raw`r_d=k_d\theta`}</KB>
            <p className="text-sm leading-6 text-slate-300">The adsorption rate depends on gas pressure and vacant sites. The desorption rate depends on occupied sites.</p>
          </FormulaCard>
          <FormulaCard title="Desorption and residence time">
            <KB>{String.raw`k_d=Ae^{-E_d/RT}`}</KB>
            <KB>{String.raw`\tau=\frac{1}{k_d}=A^{-1}e^{E_d/RT}`}</KB>
            <p className="text-sm leading-6 text-slate-300">A higher desorption barrier or lower temperature gives a longer mean residence time.</p>
          </FormulaCard>
        </div>
        <DataTable
          headers={["Possible rate control", "Physical origin", "Observed consequence"]}
          rows={[
            ["External mass transfer", "Slow transport through the gas or liquid boundary layer", "Rate changes strongly with stirring or flow"],
            ["Pore diffusion", "Slow movement through narrow or tortuous pores", "Large particles appear less effective"],
            ["Surface attachment", "Activation barrier for chemisorption", "Strong Arrhenius temperature dependence"],
            ["Surface reaction", "Adsorbed species react slowly", "Coverage accumulates before product appears"],
            ["Desorption", "Product binds too strongly", "Product inhibition and site blocking"],
          ]}
        />
      </Section>

      <Section
        index="02"
        eyebrow="Adsorbent engineering"
        title="Activation, pore structure and regeneration"
        intro={<>An adsorbent is activated by increasing accessible area, creating suitable pores or removing substances that block active sites.</>}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Card title="Thermal activation" tone="cyan">
            <p>Heating in vacuum or inert gas removes water and volatile impurities. Controlled heating can open pores; excessive heating can collapse them or cause sintering.</p>
          </Card>
          <Card title="Chemical activation" tone="violet">
            <p>Oxidising, reducing or dehydrating agents generate porosity and surface functional groups. The treatment must be chosen so it does not leave strongly bound contaminants.</p>
          </Card>
          <Card title="Mechanical activation" tone="amber">
            <p>Grinding and milling reduce particle size and expose fresh faces, but they do not necessarily create the internal microporosity responsible for very high surface area.</p>
          </Card>
          <Card title="Activated carbon" tone="emerald"><p>Contains a broad pore distribution and chemically diverse carbon surface; useful for organic vapours, colour and taste removal.</p></Card>
          <Card title="Silica gel and alumina" tone="rose"><p>Polar oxide surfaces strongly adsorb water and polar molecules; widely used as desiccants and chromatographic adsorbents.</p></Card>
          <Card title="Zeolites and molecular sieves" tone="slate"><p>Crystalline pores admit molecules according to size and shape, combining adsorption with selective separation.</p></Card>
        </div>
      </Section>

      <Section
        index="03"
        eyebrow="Solution adsorption"
        title="Experimental determination from concentration change"
        intro={<>Adsorption from solution is measured by comparing the initial solute amount with the amount remaining at equilibrium.</>}
      >
        <FormulaCard title="Mass balance">
          <KB>{String.raw`x=(C_0-C_e)V`}</KB>
          <KB>{String.raw`q=\frac{x}{m}=\frac{(C_0-C_e)V}{m}`}</KB>
          <p className="text-sm leading-6 text-slate-300">Use consistent concentration units. If <K>{String.raw`C`}</K> is molar concentration, <K>{String.raw`x`}</K> is moles; multiply by molar mass when mass uptake is required.</p>
        </FormulaCard>
        <Card title="Acetic acid–charcoal experiment" tone="cyan">
          <p>Equal masses of activated charcoal are equilibrated with acetic-acid solutions of different initial concentrations. After filtration, the equilibrium concentration is obtained by titration with standard alkali.</p>
          <p>A plot of <K>{String.raw`\log(x/m)`}</K> against <K>{String.raw`\log C_e`}</K> tests the Freundlich relation. The filtrate must be free from charcoal particles because they continue to adsorb during titration.</p>
        </Card>
        <Card title="Competitive adsorption" tone="violet">
          <p>In a mixture, different solutes compete for the same sites. A strongly adsorbed impurity can displace a weakly adsorbed solute even when its bulk concentration is smaller.</p>
          <p>pH can alter both surface charge and solute ionisation, so adsorption from solution often changes sharply with pH.</p>
        </Card>
      </Section>

      <Section
        index="04"
        eyebrow="Applications"
        title="How adsorption is used in separation, protection and analysis"
        intro={<>Adsorption converts a molecularly thin interface into a practical tool for purification, separation, concentration and reaction control.</>}
      >
        <DataTable
          headers={["Application", "Adsorption principle", "Important detail"]}
          rows={[
            ["Gas mask", "Poisonous vapours retained on activated carbon or impregnated adsorbent", "Capacity is finite; humidity and competing gases matter"],
            ["High vacuum", "Residual gases adsorbed on cooled charcoal or getters", "Low temperature increases physical adsorption"],
            ["Chromatography", "Components differ in adsorption or partition between stationary and mobile phases", "Stronger retention gives slower migration"],
            ["Froth flotation", "Collectors adsorb selectively on mineral surfaces and make them water-repellent", "Air bubbles carry hydrophobic ore particles upward"],
            ["Decolourisation", "Large coloured organic molecules adsorb on activated carbon", "Carbon is removed by filtration after contact"],
            ["Adsorption indicators", "Indicator ions adsorb on a precipitate near the equivalence point", "Surface charge controls the colour change"],
            ["Medicinal carbon", "Toxins and drugs are adsorbed in the gastrointestinal tract", "Effectiveness depends on timing and adsorbability"],
          ]}
        />
      </Section>

      <Section
        index="05"
        eyebrow="Worked examples"
        title="Residence time, adsorption from solution and chromatography"
        intro={<>The following original examples connect equations with practical interpretation.</>}
      >
        <Example
          number={1}
          title="Residence time of an adsorbed molecule"
          question={<>For desorption, <K>{String.raw`A=1.0\times10^{13}\ \mathrm{s^{-1}}`}</K> and <K>{String.raw`E_d=100\ \mathrm{kJ\,mol^{-1}}`}</K>. Estimate the mean residence time at 500 K.</>}
          solution={
            <>
              <KB>{String.raw`\tau=A^{-1}e^{E_d/RT}`}</KB>
              <KB>{String.raw`\tau=10^{-13}\exp\left(\frac{100000}{8.314\times500}\right)`}</KB>
              <KB>{String.raw`\tau\approx2.8\times10^{-3}\ \mathrm{s}`}</KB>
            </>
          }
          answer={<>About 2.8 ms.</>}
        />
        <Example
          number={2}
          title="Uptake from a solution"
          question={<>One gram of carbon is shaken with 250 mL of a 0.080 M dye solution. The equilibrium concentration is 0.020 M. Find the molar uptake per gram.</>}
          solution={
            <>
              <KB>{String.raw`q=\frac{(0.080-0.020)(0.250)}{1.00}=0.0150\ \mathrm{mol\,g^{-1}}`}</KB>
            </>
          }
          answer={<>1.50 × 10⁻² mol g⁻¹.</>}
        />
        <Example
          number={3}
          title="Migration order in adsorption chromatography"
          question={<>Three solutes A, B and C have adsorption constants on the stationary phase in the order <K>{String.raw`K_A>K_C>K_B`}</K>. The mobile-phase affinity is comparable. Predict their elution order.</>}
          solution={
            <>
              <p>Greater adsorption means a larger fraction of time retained on the stationary phase and therefore slower migration.</p>
            </>
          }
          answer={<>B elutes first, then C, then A.</>}
        />
        <Trap>A higher adsorption constant does not mean faster chromatography. Stronger adsorption means greater retention and therefore slower elution under otherwise similar conditions.</Trap>
      </Section>
    </>
  );
}
