"use client";

import { Card, DataTable, Example, FormulaCard, K, KB, Key, Section, SurfaceVisual, Trap } from "../surface-chemistry-shared";

export function Part07Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Dispersed matter"
        title="The colloidal state between molecules and visible particles"
        intro={<>A colloid is a state of dispersion rather than a fixed class of substances. Its particles are larger than ordinary molecules or ions but small enough to remain distributed for long periods and to possess enormous interfacial area.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="colloid-scale" /></div>
        <DataTable
          headers={["Property", "True solution", "Colloidal dispersion", "Suspension"]}
          rows={[
            ["Typical particle size", "Below about 1 nm", "About 1–1000 nm", "Above about 1000 nm"],
            ["Nature", "Molecularly homogeneous", "Microscopically heterogeneous but apparently uniform", "Clearly heterogeneous"],
            ["Ordinary filtration", "Passes", "Usually passes", "Usually retained"],
            ["Semipermeable membrane", "Small solutes pass", "Colloidal particles retained", "Particles retained"],
            ["Diffusion", "Rapid", "Slow", "Very slow"],
            ["Settling under gravity", "No", "Usually no", "Common"],
            ["Tyndall scattering", "Absent for an ideal molecular solution", "Common when refractive-index contrast exists", "May scatter strongly"],
          ]}
        />
        <Card title="Dispersed phase and dispersion medium" tone="cyan">
          <p>The discontinuous component is the <b className="text-white">dispersed phase</b>. The continuous component is the <b className="text-white">dispersion medium</b>.</p>
          <p>The same material can occupy either role. Water droplets in oil and oil droplets in water are different emulsions even though the chemical components are the same.</p>
        </Card>
        <Key>A colloid is defined mainly by scale and organisation. Gold can be a bulk metal, a colloidal sol or atoms in a true molecular-scale solution depending on how it is dispersed.</Key>
        <Card title="Graham’s historical distinction" tone="slate">
          <p>Thomas Graham distinguished rapidly diffusing, readily crystallising substances as crystalloids from slowly diffusing, non-crystallising materials as colloids. Modern chemistry treats colloidal behaviour as a state of dispersion, so the historical categories are not absolute classes.</p>
        </Card>
      </Section>

      <Section
        index="02"
        eyebrow="Physical-state map"
        title="Classification by dispersed phase and dispersion medium"
        intro={<>Eight condensed-phase combinations are possible. Gas dispersed in gas is not a colloid because gases mix at the molecular level.</>}
      >
        <DataTable
          headers={["Dispersed phase", "Dispersion medium", "Class", "Examples"]}
          rows={[
            ["Solid", "Solid", "Solid sol", "Coloured glass, some gemstones and composite solids"],
            ["Liquid", "Solid", "Gel", "Jelly, cheese, curd, silica gel"],
            ["Gas", "Solid", "Solid foam", "Pumice, foam rubber, bread"],
            ["Solid", "Liquid", "Sol", "Paint, ink, clay dispersion, gold sol"],
            ["Liquid", "Liquid", "Emulsion", "Milk, creams, butter"],
            ["Gas", "Liquid", "Foam", "Soap lather, whipped cream"],
            ["Solid", "Gas", "Aerosol", "Smoke, dust in air"],
            ["Liquid", "Gas", "Aerosol", "Fog, mist, sprays"],
          ]}
        />
        <Card title="Names based on the medium" tone="violet">
          <p>A sol in water is a hydrosol or aquasol; in alcohol, an alcosol; in benzene, a benzosol. A dispersion in a gas is an aerosol.</p>
          <p>These names identify the continuous phase and do not by themselves describe particle composition or charge.</p>
        </Card>
      </Section>

      <Section
        index="03"
        eyebrow="Affinity"
        title="Lyophilic and lyophobic sols"
        intro={<>The distinction describes the affinity between dispersed particles and the medium. In water, the terms hydrophilic and hydrophobic are often used.</>}
      >
        <DataTable
          headers={["Property", "Lyophilic sol", "Lyophobic sol"]}
          rows={[
            ["Affinity for medium", "Strong", "Weak"],
            ["Preparation", "Often direct mixing, warming or shaking", "Requires dispersion or condensation method"],
            ["Solvation", "Extensive solvated or hydrated sheath", "Little solvation"],
            ["Stability", "High", "Lower; mainly charge-stabilised"],
            ["Reversibility", "Usually reversible", "Usually irreversible"],
            ["Electrolyte sensitivity", "Large amount often required for coagulation", "Small amount can coagulate"],
            ["Viscosity", "Often greater than medium", "Close to medium"],
            ["Surface tension", "Often lower than medium", "Close to medium"],
            ["Tyndall effect", "Usually weaker", "Usually stronger"],
            ["Examples", "Starch, gelatin, gums, proteins", "Metal, sulphide and hydroxide sols"],
          ]}
        />
        <Key>Lyophilic stability is strongly connected with solvation and steric protection. Lyophobic stability depends more critically on surface charge and the electrical double layer.</Key>
      </Section>

      <Section
        index="04"
        eyebrow="Particle constitution"
        title="Multimolecular, macromolecular and associated colloids"
        intro={<>A colloidal particle can be an aggregate of small species, one giant molecule, or a reversible assembly of amphiphilic molecules.</>}
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Multimolecular colloids" tone="amber">
            <p>Many atoms or small molecules aggregate to produce one colloidal particle. Individual units are smaller than colloidal dimensions.</p>
            <p>Examples: gold sol, sulphur sol and many metal-sulphide sols.</p>
          </Card>
          <Card title="Macromolecular colloids" tone="violet">
            <p>Each dispersed particle is a giant molecule of colloidal dimensions. Solvation and chain conformation strongly affect behaviour.</p>
            <p>Examples: starch, proteins, cellulose and synthetic polymers.</p>
          </Card>
          <Card title="Associated colloids" tone="cyan">
            <p>Surfactants behave as ordinary ions or molecules below a threshold concentration and aggregate into micelles above it.</p>
            <p>Examples: soaps, detergents and bile-salt assemblies.</p>
          </Card>
        </div>
      </Section>

      <Section
        index="05"
        eyebrow="Preparation"
        title="Dispersion and condensation routes"
        intro={<>Lyophobic sols are prepared either by breaking larger particles down or by building colloidal particles from ions, atoms or molecules while preventing bulk precipitation.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="colloid-prep" /></div>
        <DataTable
          headers={["Method", "Principle", "Typical systems"]}
          rows={[
            ["Colloid mill", "Mechanical shear reduces coarse particles", "Pigments, graphite and pastes"],
            ["Ultrasonic dispersion", "High-frequency pressure waves fragment particles or droplets", "Emulsions and difficult suspensions"],
            ["Bredig arc method", "Metal vapour formed by an electric arc condenses in cold water", "Au, Ag, Pt and related metal sols"],
            ["Peptisation", "A fresh precipitate adsorbs ions and separates into like-charged particles", "Fe(OH)₃, AgI, CdS"],
            ["Double decomposition", "A sparingly soluble product forms under controlled dilution", "As₂S₃ or AgI sol"],
            ["Oxidation or reduction", "Atoms or molecules generated in situ aggregate to colloidal size", "Sulphur or metal sols"],
            ["Hydrolysis", "A salt hydrolyses to a colloidal hydroxide", "Fe(OH)₃ and Al(OH)₃ sols"],
            ["Solvent exchange", "Solute becomes poorly soluble after transfer to a miscible second solvent", "Sulphur in water from alcoholic solution"],
          ]}
        />
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Bredig arc method" tone="cyan">
            <p>An arc is struck between metal electrodes immersed in cold water containing a trace stabiliser. Metal vapour condenses into particles. Cooling suppresses uncontrolled growth.</p>
            <p>The method combines dispersion by vaporisation with condensation of the vapour.</p>
          </Card>
          <Card title="Peptisation" tone="amber">
            <p>A freshly formed precipitate is shaken with a small amount of electrolyte. Preferential adsorption of a suitable ion gives particles the same charge, so electrostatic repulsion separates them into a sol.</p>
            <p>Excess peptising electrolyte can later destabilise the sol by compressing the double layer.</p>
          </Card>
        </div>
      </Section>

      <Section
        index="06"
        eyebrow="Purification"
        title="Removing crystalloid impurities without removing colloids"
        intro={<>Small ions and molecules left from preparation can pass through suitable membranes; colloidal particles cannot.</>}
      >
        <DataTable
          headers={["Method", "Operation", "Important point"]}
          rows={[
            ["Dialysis", "Small solutes diffuse through parchment or cellophane into external water", "External water is renewed repeatedly"],
            ["Electrodialysis", "An electric field accelerates ion migration through the membrane", "Useful when ionic impurity concentration is significant"],
            ["Ultrafiltration", "Solvent and small solutes pass through an ultrafilter under pressure or suction", "Membrane pores retain colloidal particles"],
            ["Ultracentrifugation", "High centrifugal field sediments colloidal particles", "Can separate or concentrate particles by size and density"],
          ]}
        />
        <Trap>Persistent dialysis can coagulate a lyophobic sol if the small amount of electrolyte responsible for its stabilising charge is removed completely.</Trap>
      </Section>

      <Section
        index="07"
        eyebrow="Worked examples"
        title="Classification, peptisation and purification"
        intro={<>These examples test the ability to identify phases and predict charge formation.</>}
      >
        <Example
          number={1}
          title="Identify the colloidal class"
          question={<>Classify smoke, milk, pumice and jelly by dispersed phase and dispersion medium.</>}
          solution={
            <>
              <p>Smoke is solid in gas; milk is liquid in liquid; pumice is gas in solid; jelly is liquid in solid.</p>
            </>
          }
          answer={<>Smoke: aerosol; milk: emulsion; pumice: solid foam; jelly: gel.</>}
        />
        <Example
          number={2}
          title="Charge on peptised AgI"
          question={<>A fresh AgI precipitate is peptised using excess KI. Predict the sign of the sol and identify the potential-determining ion.</>}
          solution={
            <>
              <p>Iodide ions are preferentially adsorbed on the AgI surface. The particles therefore acquire negative charge; K⁺ ions form counter-ions in the diffuse layer.</p>
            </>
          }
          answer={<>Negative AgI sol; I⁻ is the potential-determining ion.</>}
        />
        <Example
          number={3}
          title="Best purification method"
          question={<>A sol contains a large amount of dissolved NaCl and must be purified rapidly. Ordinary dialysis is slow. Which method is preferred?</>}
          solution={
            <>
              <p>Na⁺ and Cl⁻ are charged crystalloid impurities. Applying an electric field accelerates their migration through the membrane.</p>
            </>
          }
          answer={<>Electrodialysis.</>}
        />
      </Section>
    </>
  );
}

export function Part08Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Optical behaviour"
        title="Tyndall effect, colour and ultramicroscopy"
        intro={<>Colloidal particles are large enough to scatter visible light but usually too small to be resolved directly by an ordinary microscope.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="tyndall" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Tyndall effect" tone="cyan">
            <p>A beam becomes visible from the side because colloidal particles scatter light. A visible cone requires sufficient particle size, concentration and refractive-index difference between dispersed phase and medium.</p>
            <p>An ideal true solution does not produce a Tyndall cone because individual molecules or ions are too small and uniformly distributed.</p>
          </Card>
          <Card title="Ultramicroscope" tone="violet">
            <p>Intense light illuminates the sol from the side and scattered light is observed against a dark background. Bright points reveal particle positions, not detailed images of particle shape.</p>
            <p>It cannot directly provide the true geometric diameter of an irregular particle.</p>
          </Card>
        </div>
        <Card title="Colour of colloidal sols" tone="amber">
          <p>Colour depends on particle size, shape, concentration and the wavelengths preferentially scattered or absorbed. Gold sols can appear red, purple or blue as particle size and aggregation state change.</p>
          <p>Dilute milk appears bluish in reflected light but reddish in transmitted light because shorter wavelengths are scattered more strongly.</p>
        </Card>
        <Card title="General and colligative properties" tone="slate">
          <p>Colloids pass through ordinary filter paper but are retained by suitable ultrafilters or semipermeable membranes. Their diffusion is slow and their colligative effects are small at the same mass concentration because each large particle counts as only one kinetic unit.</p>
          <p>Osmotic pressure is the most useful colligative property for estimating macromolecular molar mass because freezing-point and boiling-point changes may be extremely small.</p>
        </Card>
      </Section>

      <Section
        index="02"
        eyebrow="Kinetic behaviour"
        title="Brownian movement, diffusion and sedimentation"
        intro={<>Colloidal particles undergo irregular motion because molecular impacts from the dispersion medium do not cancel at every instant.</>}
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Brownian movement" tone="emerald">
            <p>The random zigzag path becomes more pronounced for smaller particles, lower medium viscosity and higher temperature.</p>
            <p>It opposes gravitational settling but does not by itself explain all colloidal stability.</p>
          </Card>
          <Card title="Diffusion" tone="cyan">
            <p>Colloidal particles diffuse from high to low concentration much more slowly than small molecules because their frictional resistance is large.</p>
          </Card>
          <Card title="Sedimentation" tone="amber">
            <p>Ordinary gravity may be insufficient, but an ultracentrifuge produces a large effective field and can sediment particles according to size, density and shape.</p>
          </Card>
        </div>
        <FormulaCard title="Stokes–Einstein relation — enrichment">
          <KB>{String.raw`D=\frac{k_BT}{6\pi\eta r}`}</KB>
          <p className="text-sm leading-6 text-slate-300">The diffusion coefficient decreases with particle radius <K>{String.raw`r`}</K> and medium viscosity <K>{String.raw`\eta`}</K>.</p>
        </FormulaCard>
      </Section>

      <Section
        index="03"
        eyebrow="Surface charge"
        title="How colloidal particles acquire charge"
        intro={<>The charge is a surface property and may arise through several mechanisms. Its sign often depends on the preparation conditions.</>}
      >
        <DataTable
          headers={["Origin", "Mechanism", "Example"]}
          rows={[
            ["Preferential ion adsorption", "One ion from solution adsorbs more strongly", "AgI becomes positive in excess AgNO₃ and negative in excess KI"],
            ["Ionisation of surface groups", "Acidic or basic surface groups dissociate", "Oxide surfaces change charge with pH"],
            ["Electron capture", "Particles acquire electrons during electrical dispersion", "Some metal sols"],
            ["Dissolution imbalance", "One lattice ion dissolves preferentially", "Sparingly soluble ionic particles"],
            ["Frictional electrification", "Relative electron affinity during contact produces charge", "Certain non-aqueous dispersions"],
          ]}
        />
        <DataTable
          headers={["Usually positive sols", "Usually negative sols"]}
          rows={[
            ["Hydrated Fe(OH)₃ or Al(OH)₃ prepared in excess metal salt", "Metal sulphides such as As₂S₃ and Sb₂S₃"],
            ["Basic dyes and some metal oxides", "Gold, silver and platinum sols under common preparation conditions"],
            ["AgI in excess AgNO₃", "AgI in excess KI"],
          ]}
        />
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Negative AgI sol">
            <KB>{String.raw`[AgI]_n\cdot xI^-\mid xK^+`}</KB>
            <p className="text-sm leading-6 text-slate-300">I⁻ forms the potential-determining layer; K⁺ ions are counter-ions.</p>
          </FormulaCard>
          <FormulaCard title="Positive AgI sol">
            <KB>{String.raw`[AgI]_n\cdot xAg^+\mid xNO_3^-`}</KB>
            <p className="text-sm leading-6 text-slate-300">Ag⁺ is preferentially adsorbed when AgNO₃ is in excess.</p>
          </FormulaCard>
        </div>
        <Trap>The charge of AgI is not an intrinsic permanent property. It depends on which potential-determining ion is preferentially adsorbed under the preparation conditions.</Trap>
      </Section>

      <Section
        index="04"
        eyebrow="Electrical architecture"
        title="Electrical double layer and zeta potential"
        intro={<>A charged particle attracts counter-ions. The resulting spatial separation of charge produces an electrical double layer and an electrokinetic potential.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="double-layer" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Fixed and diffuse regions" tone="cyan">
            <p>The compact or Stern region contains specifically adsorbed ions close to the surface. Beyond it, counter-ions form a diffuse atmosphere whose concentration decreases into the bulk.</p>
            <p>The complete sol remains electrically neutral even though an individual particle carries charge.</p>
          </Card>
          <Card title="Zeta potential" tone="violet">
            <p>When a particle moves, some liquid and ions move with it. The potential at the effective slipping plane relative to the bulk is the zeta potential, <K>{String.raw`\zeta`}</K>.</p>
            <p>A large magnitude usually indicates strong electrostatic repulsion and greater kinetic stability.</p>
          </Card>
        </div>
        <Key>Adding electrolyte increases counter-ion concentration and compresses the diffuse layer. The zeta-potential magnitude falls, so particles can approach closely enough for attractive forces to dominate.</Key>
      </Section>

      <Section
        index="05"
        eyebrow="Electrokinetic phenomena"
        title="Electrophoresis and electro-osmosis"
        intro={<>An applied electric field can move either the charged particles or the liquid, depending on which phase is mechanically constrained.</>}
      >
        <DataTable
          headers={["Phenomenon", "What moves", "What is fixed", "Use"]}
          rows={[
            ["Electrophoresis", "Charged colloidal particles", "Bulk liquid approximately stationary", "Determine sign and mobility; deposit or coagulate particles"],
            ["Electro-osmosis", "Dispersion medium", "Charged particles or porous matrix fixed", "Determine sign of fixed surface; pump liquid through fine pores"],
          ]}
        />
        <Card title="Direction in electrophoresis" tone="emerald">
          <p>Positive particles migrate toward the cathode; negative particles migrate toward the anode. Prolonged migration can discharge particles at an electrode and produce coagulation.</p>
        </Card>
      </Section>

      <Section
        index="06"
        eyebrow="Worked examples"
        title="Optical and electrical reasoning"
        intro={<>These examples connect experimental observations to colloidal properties.</>}
      >
        <Example
          number={1}
          title="Direction of electrophoresis"
          question={<>An arsenic sulphide sol migrates toward the anode. What is the sign of the particles?</>}
          solution={
            <>
              <p>The anode is positive. Particles moving toward it must be negatively charged.</p>
            </>
          }
          answer={<>The sol particles are negative.</>}
        />
        <Example
          number={2}
          title="Why salt suppresses zeta potential"
          question={<>Explain why adding NaCl can destabilise a negatively charged sol even though NaCl does not reverse the surface charge at low concentration.</>}
          solution={
            <>
              <p>Na⁺ counter-ions screen the negative surface field and compress the diffuse layer. The effective repulsive range and zeta-potential magnitude decrease, allowing particles to approach and aggregate.</p>
            </>
          }
          answer={<>Electrostatic screening and double-layer compression reduce repulsion.</>}
        />
        <Example
          number={3}
          title="Tyndall effect without visible particles"
          question={<>A beam is visible through a sol, but individual particles cannot be seen in an ordinary microscope. Is this contradictory?</>}
          solution={
            <>
              <p>No. Scattering from many submicroscopic particles can make the beam path visible even when each particle is below the resolving power of the microscope.</p>
            </>
          }
          answer={<>No; collective light scattering does not require direct optical resolution of each particle.</>}
        />
      </Section>
    </>
  );
}

export function Part09Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Stability"
        title="Why colloids remain dispersed"
        intro={<>Kinetic stability results from a balance between attractive forces that favour aggregation and repulsive or solvating effects that keep particles apart.</>}
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Electrostatic stabilisation" tone="cyan">
            <p>Like-charged particles repel through overlapping electrical double layers. Large zeta-potential magnitude usually increases the energy barrier to aggregation.</p>
          </Card>
          <Card title="Solvation and steric stabilisation" tone="violet">
            <p>Hydrated or polymer-covered surfaces resist close approach because solvent layers must be removed and chains must be compressed.</p>
          </Card>
          <Card title="Brownian redistribution" tone="amber">
            <p>Random motion counteracts gravitational settling and keeps small particles distributed, although it does not prevent aggregation if attractive collisions are irreversible.</p>
          </Card>
        </div>
        <Card title="DLVO-style energy picture — advanced enrichment" tone="slate">
          <p>Attractive van der Waals interaction becomes stronger at short separation, while electrical double-layer repulsion can create an energy barrier. A stable sol has a barrier much larger than thermal energy.</p>
          <p>Electrolyte addition lowers the repulsive barrier. Particles may first enter a shallow secondary minimum as a loose floc and then, if the barrier disappears, fall into a deep primary minimum as an irreversible coagulum.</p>
        </Card>
      </Section>

      <Section
        index="02"
        eyebrow="Destabilisation"
        title="Coagulation, flocculation and the Hardy–Schulze rule"
        intro={<>Coagulation removes the stabilising influence of charge or solvation so that collisions lead to persistent aggregates.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="coagulation" /></div>
        <DataTable
          headers={["Method", "How stability is lost"]}
          rows={[
            ["Electrolyte addition", "Counter-ions neutralise charge and compress the double layer"],
            ["Mixing oppositely charged sols", "Mutual neutralisation causes aggregation"],
            ["Electrophoresis", "Particles discharge at an electrode"],
            ["Persistent dialysis", "Stabilising ions are removed"],
            ["Heating", "Solvation decreases and collision energy rises"],
            ["Freezing", "Ice formation concentrates particles and electrolyte"],
            ["Change of solvent", "Solvation conditions become unfavourable"],
          ]}
        />
        <Card title="Flocculation versus coagulation" tone="cyan">
          <p><b className="text-white">Flocculation</b> often means formation of loose, reversible aggregates in a shallow attractive minimum. <b className="text-white">Coagulation</b> commonly refers to stronger, often irreversible aggregation followed by separation.</p>
          <p>Textbooks sometimes use the terms interchangeably, so interpret them from the experimental context.</p>
        </Card>
        <Card title="Hardy–Schulze rule" tone="amber">
          <p>The ion whose charge is opposite to that of the sol is the active coagulating ion. Its coagulating power generally rises sharply with valency.</p>
          <p>For a negative sol: <K>{String.raw`Al^{3+}>Ba^{2+}>Na^+`}</K>. For a positive sol, high-valency anions such as <K>{String.raw`PO_4^{3-}`}</K> are usually more effective than sulphate or chloride.</p>
        </Card>
        <Trap>Use the valency of the counter-ion, not the co-ion. For a negative sol, compare cations; for a positive sol, compare anions.</Trap>
      </Section>

      <Section
        index="03"
        eyebrow="Quantification"
        title="Coagulation value and coagulating power"
        intro={<>The coagulation value is the minimum electrolyte concentration required to coagulate a stated sol under standard experimental conditions.</>}
      >
        <FormulaCard title="Definitions">
          <KB>{String.raw`\text{Coagulation value}=\frac{\text{millimoles of electrolyte}}{\text{litre of sol}}`}</KB>
          <KB>{String.raw`\text{Coagulating power}\propto\frac{1}{\text{coagulation value}}`}</KB>
          <p className="text-sm leading-6 text-slate-300">A smaller coagulation value means a more effective electrolyte.</p>
        </FormulaCard>
        <Card title="Specific adsorption and limitations" tone="violet">
          <p>Valency is the dominant textbook trend, but ion size, hydration and specific adsorption can cause deviations. Organic ions and multidentate species may be unusually effective even when simple valency comparison is insufficient.</p>
        </Card>
      </Section>

      <Section
        index="04"
        eyebrow="Proteins"
        title="Isoelectric point and charge reversal"
        intro={<>Proteins contain acidic and basic groups. Their net charge changes with pH and becomes zero at the isoelectric point.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Isoelectric point" tone="cyan">
            <p>At the isoelectric pH, the average net charge and electrophoretic mobility are approximately zero. Electrostatic repulsion is minimal, so solubility and colloidal stability often reach a minimum.</p>
          </Card>
          <Card title="Away from the isoelectric point" tone="emerald">
            <p>Below the isoelectric pH, many proteins are net positive; above it, net negative. Adjustment of pH can therefore reverse migration direction and change coagulation behaviour.</p>
          </Card>
        </div>
      </Section>

      <Section
        index="05"
        eyebrow="Protection"
        title="Protective colloids and gold number"
        intro={<>A lyophilic colloid can adsorb on a lyophobic particle and provide a solvated or steric barrier against coagulation.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Mechanism of protection" tone="emerald">
            <p>Macromolecules such as gelatin, gum or albumin form a hydrated coating around lyophobic particles. The coating prevents close contact and reduces the ability of electrolyte ions to collapse the dispersion.</p>
          </Card>
          <FormulaCard title="Gold number">
            <p className="text-sm leading-6 text-slate-300">Gold number is the minimum mass in milligrams of a protective colloid required to prevent the colour change of 10 mL standard red gold sol after addition of 1 mL of 10% NaCl solution.</p>
            <KB>{String.raw`\text{Protective power}\propto\frac{1}{\text{gold number}}`}</KB>
          </FormulaCard>
        </div>
        <Key>A smaller gold number means stronger protective action because less protective colloid is required.</Key>
      </Section>

      <Section
        index="06"
        eyebrow="Worked examples"
        title="Hardy–Schulze, coagulation value and gold number"
        intro={<>These examples combine charge identification with quantitative comparison.</>}
      >
        <Example
          number={1}
          title="Coagulating-power order"
          question={<>Arrange NaCl, BaCl₂ and AlCl₃ in increasing coagulating power for a negative arsenic sulphide sol.</>}
          solution={
            <>
              <p>The active ions are Na⁺, Ba²⁺ and Al³⁺. Higher valency gives greater coagulating power.</p>
            </>
          }
          answer={<>NaCl &lt; BaCl₂ &lt; AlCl₃.</>}
        />
        <Example
          number={2}
          title="Coagulation value calculation"
          question={<>A minimum of 2.00 mL of 0.0100 M AlCl₃ is required to coagulate 100 mL of a negative sol. Calculate the coagulation value in mmol L⁻¹ of sol.</>}
          solution={
            <>
              <KB>{String.raw`n=(0.0100)(2.00\times10^{-3})=2.00\times10^{-5}\ \mathrm{mol}=0.0200\ \mathrm{mmol}`}</KB>
              <KB>{String.raw`\text{value}=\frac{0.0200}{0.100}=0.200\ \mathrm{mmol\,L^{-1}}`}</KB>
            </>
          }
          answer={<>0.200 mmol L⁻¹.</>}
        />
        <Example
          number={3}
          title="Gold-number comparison"
          question={<>Protective colloids P and Q have gold numbers 0.02 and 0.20. Compare their protective powers.</>}
          solution={
            <>
              <p>Protective power is inversely proportional to gold number.</p>
              <KB>{String.raw`\frac{\text{power of P}}{\text{power of Q}}=\frac{0.20}{0.02}=10`}</KB>
            </>
          }
          answer={<>P is ten times as protective as Q under the standard test.</>}
        />
      </Section>
    </>
  );
}

export function Part10Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Amphiphiles"
        title="Surfactants and molecular architecture"
        intro={<>A surfactant contains a solvent-loving region and a solvent-avoiding region. This dual character drives adsorption at interfaces and self-assembly into micelles.</>}
      >
        <DataTable
          headers={["Class", "Head-group character", "Examples"]}
          rows={[
            ["Anionic", "Negatively charged", "Fatty-acid soaps, alkyl sulphates, alkylbenzene sulphonates"],
            ["Cationic", "Positively charged", "Quaternary ammonium surfactants"],
            ["Non-ionic", "Polar but uncharged", "Polyoxyethylene and sugar-based surfactants"],
            ["Zwitterionic", "Contains both positive and negative centres", "Betaines and phospholipid-like molecules"],
          ]}
        />
        <div className="overflow-x-auto"><SurfaceVisual mode="micelle" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Aggregation number" tone="violet">
            <p>The aggregation number is the average number of surfactant molecules in one micelle. It depends on chain length, head-group size, counter-ion binding, temperature and solvent.</p>
          </Card>
          <Card title="Reverse micelles" tone="amber">
            <p>In a non-polar solvent, polar heads point inward around a small polar core while hydrocarbon tails face the solvent. Reverse micelles can solubilise water or polar reactants in an organic medium.</p>
          </Card>
        </div>
        <Card title="At an air–water or oil–water interface" tone="cyan">
          <p>Hydrocarbon tails avoid water while polar heads remain hydrated. Surfactant molecules therefore orient at the interface and lower interfacial free energy.</p>
          <p>Once the interface is nearly saturated, additional surfactant increasingly enters aggregates in the bulk.</p>
        </Card>
      </Section>

      <Section
        index="02"
        eyebrow="Self-assembly"
        title="Critical micelle concentration and Krafft temperature"
        intro={<>Micelles form only when both concentration and temperature conditions permit aggregation.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Critical micelle concentration" tone="violet">
            <p>The CMC is the concentration range above which added surfactant is incorporated mainly into micelles rather than remaining as isolated monomers.</p>
            <p>It is detected by a break in plots of surface tension, conductivity, osmotic pressure, fluorescence or solubilisation against concentration.</p>
          </Card>
          <Card title="Krafft temperature" tone="amber">
            <p>For many ionic surfactants, micelles form only above a minimum temperature at which surfactant solubility becomes sufficient to reach the CMC.</p>
            <p>Below the Krafft temperature, crystals or hydrated solids may separate before micellisation occurs.</p>
          </Card>
        </div>
        <DataTable
          headers={["Factor", "Usual effect on CMC", "Reason"]}
          rows={[
            ["Longer hydrocarbon chain", "Decreases", "Hydrophobic driving force increases"],
            ["Added electrolyte for ionic surfactant", "Decreases", "Head-group repulsion is screened"],
            ["More highly charged head group", "Often increases", "Electrostatic repulsion between heads increases"],
            ["Branching near hydrophobic chain", "Often increases", "Packing and hydrophobic contact become less favourable"],
            ["Counter-ion binding", "Stronger binding often decreases CMC", "Effective head-group repulsion falls"],
          ]}
        />
      </Section>

      <Section
        index="03"
        eyebrow="Thermodynamics"
        title="Why micellisation can be entropy driven"
        intro={<>Micelle formation is not explained simply by attraction between hydrocarbon tails. The solvent structure surrounding isolated tails is equally important.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Free energy of micellisation">
            <KB>{String.raw`\Delta G_{mic}=\Delta H_{mic}-T\Delta S_{mic}`}</KB>
            <p className="text-sm leading-6 text-slate-300">Micellisation is favourable when <K>{String.raw`\Delta G_{mic}<0`}</K>. The enthalpy may be positive or negative depending on surfactant and temperature.</p>
          </FormulaCard>
          <Card title="Hydrophobic effect" tone="emerald">
            <p>Water molecules near an isolated hydrocarbon tail adopt restricted arrangements. Aggregation reduces the total tail–water contact area and releases some of this structured water into the bulk.</p>
            <p>The resulting increase in water entropy can make micellisation spontaneous even when the enthalpy is not strongly negative.</p>
          </Card>
        </div>
        <Trap>Do not state that micellisation is always exothermic. Depending on temperature and surfactant, the entropy term can be the dominant driving force.</Trap>
      </Section>

      <Section
        index="04"
        eyebrow="Cleansing"
        title="How soaps and detergents remove grease"
        intro={<>Cleansing combines interfacial adsorption, emulsification and micellar solubilisation.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="micelle" /></div>
        <DataTable
          headers={["Stage", "Molecular event"]}
          rows={[
            ["Wetting", "Surfactant lowers water–fabric and water–grease interfacial tension"],
            ["Penetration", "Hydrocarbon tails enter the grease while heads remain in water"],
            ["Detachment", "Mechanical agitation breaks grease into small droplets"],
            ["Stabilisation", "Charged or hydrated head groups prevent droplets from reuniting"],
            ["Solubilisation", "Grease is carried in micellar cores and washed away"],
          ]}
        />
        <Card title="Soap in hard water" tone="rose">
          <p>Ca²⁺ and Mg²⁺ form poorly soluble salts with fatty-acid anions, producing scum and consuming soap. Sulphonate and sulphate detergents form more soluble calcium and magnesium salts and therefore function better in hard water.</p>
        </Card>
        <Card title="Micellar catalysis — enrichment" tone="violet">
          <p>Micelles can concentrate hydrophobic reactants in the same microscopic region and create an ionic interfacial environment. A reaction may accelerate or change selectivity when its transition state is stabilised more strongly than its reactants.</p>
        </Card>
      </Section>

      <Section
        index="05"
        eyebrow="Liquid–liquid colloids"
        title="Emulsions, emulsification and identification tests"
        intro={<>An emulsion contains droplets of one liquid dispersed in another immiscible liquid. The identity of the continuous phase controls conductivity, dilution and many practical properties.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="emulsion" /></div>
        <DataTable
          headers={["Test", "O/W observation", "W/O observation"]}
          rows={[
            ["Dilution", "Dilutes freely with water", "Dilutes freely with oil"],
            ["Electrical conductivity", "Usually appreciable if aqueous phase contains ions", "Usually low"],
            ["Water-soluble dye", "Continuous phase colours uniformly", "Dye appears in isolated droplets"],
            ["Oil-soluble dye", "Dye colours droplets", "Continuous phase colours uniformly"],
            ["Filter-paper wetting", "Spreads and wets readily", "Produces a greasy spot"],
            ["Fluorescence under UV", "Usually spotty if oil phase fluoresces", "Often uniformly fluorescent because oil is continuous"],
            ["Cobalt-chloride paper", "Water contact can turn blue paper pink", "Response is slower or localised because oil is continuous"],
          ]}
        />
        <Card title="Mechanism of emulsification" tone="cyan">
          <p>An emulsifier adsorbs at the oil–water boundary, lowers interfacial tension and forms a mechanical, electrostatic or steric barrier around droplets.</p>
          <p>The phase in which the emulsifier is more soluble usually tends to become the continuous phase, although formulation and mixing conditions also matter.</p>
        </Card>
        <Card title="Emulsion inversion and demulsification" tone="amber">
          <p><b className="text-white">Inversion</b> converts O/W into W/O or the reverse by changing phase ratio, emulsifier or electrolyte conditions. <b className="text-white">Demulsification</b> destroys the stabilising film so droplets coalesce into separate bulk phases.</p>
          <p>Heating, freezing, centrifugation, pH change, electrolyte addition or a specialised demulsifier can break an emulsion.</p>
        </Card>
      </Section>

      <Section
        index="06"
        eyebrow="Semi-solid dispersions"
        title="Gels, swelling, syneresis and thixotropy"
        intro={<>A gel contains a continuous three-dimensional network that immobilises a large amount of liquid and gives the system solid-like mechanical behaviour.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="gel" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Elastic gels" tone="cyan"><p>Flexible networks can deform and partially recover. Gelatin and agar gels are common examples.</p></Card>
          <Card title="Non-elastic or rigid gels" tone="violet"><p>Rigid inorganic networks deform little and may fracture or permanently collapse, as in many silica gels.</p></Card>
        </div>
        <DataTable
          headers={["Term", "Meaning", "Illustration"]}
          rows={[
            ["Hydrogel", "Water is the liquid-rich phase", "Gelatin gel"],
            ["Xerogel", "Liquid has been removed without preserving the full pore volume", "Dried silica gel"],
            ["Aerogel", "Network is dried with minimal collapse", "Very low-density porous silica"],
            ["Imbibition or swelling", "Gel absorbs liquid and expands", "Gelatin in water"],
            ["Syneresis", "Gel contracts and expels liquid", "Whey separation from curd"],
            ["Thixotropy", "Structure breaks under shear and rebuilds on standing", "Some paints and clay gels"],
          ]}
        />
      </Section>

      <Section
        index="07"
        eyebrow="Worked examples"
        title="CMC, emulsion tests and gel behaviour"
        intro={<>The examples emphasise experimental interpretation rather than memorised definitions.</>}
      >
        <Example
          number={1}
          title="Identify the CMC from a property plot"
          question={<>Surface tension decreases sharply with surfactant concentration and becomes nearly constant beyond 2.0 mmol L⁻¹. What does the break indicate?</>}
          solution={
            <>
              <p>Before the break, added surfactant accumulates mainly at the interface and lowers surface tension. After interfacial saturation, additional surfactant mainly forms micelles.</p>
            </>
          }
          answer={<>The CMC is approximately 2.0 mmol L⁻¹.</>}
        />
        <Example
          number={2}
          title="Identify an emulsion"
          question={<>An emulsion conducts electricity and can be diluted freely with water but not with oil. Classify it.</>}
          solution={
            <>
              <p>The continuous phase must be water because it provides the conducting pathway and accepts dilution.</p>
            </>
          }
          answer={<>Oil-in-water emulsion.</>}
        />
        <Example
          number={3}
          title="Why electrolyte lowers CMC"
          question={<>Explain why adding NaCl commonly lowers the CMC of sodium dodecyl sulphate.</>}
          solution={
            <>
              <p>Na⁺ ions screen repulsion between negatively charged sulphate head groups. The energetic penalty for bringing surfactants together is reduced, so micelles form at lower concentration.</p>
            </>
          }
          answer={<>Counter-ion screening reduces head-group repulsion and lowers the CMC.</>}
        />
      </Section>
    </>
  );
}
