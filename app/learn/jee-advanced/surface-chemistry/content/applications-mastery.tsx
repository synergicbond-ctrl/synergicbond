"use client";

import { Card, DataTable, Example, FormulaCard, K, KB, Key, Section, SurfaceVisual } from "../surface-chemistry-shared";

export function Part11Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Water and air"
        title="Environmental interfaces and purification technologies"
        intro={<>Many environmental processes are controlled by adsorption and colloidal stability. Pollutants move, aggregate or are removed according to their interaction with mineral, carbon and biological surfaces.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="applications" /></div>
        <DataTable
          headers={["Technology or natural process", "Surface-chemistry principle", "Chemical interpretation"]}
          rows={[
            ["Drinking-water clarification", "Coagulation and flocculation", "Aluminium or iron salts form hydroxide flocs that neutralise charge and sweep suspended matter"],
            ["Activated-carbon filtration", "Adsorption in a porous carbon network", "Organic odours, colour and micropollutants are retained on internal surfaces"],
            ["Ion exchange", "Selective electrostatic binding", "Framework sites exchange Na⁺, H⁺ or other ions with dissolved species"],
            ["Cottrell precipitator", "Electrical charging and electrophoretic collection", "Smoke particles migrate to oppositely charged plates"],
            ["River-delta formation", "Mutual coagulation by seawater electrolyte", "Charged clay particles aggregate where fresh water meets saline water"],
            ["Soil adsorption", "Ion adsorption on clay and humus", "Nutrients and pollutants partition between solution and charged surfaces"],
          ]}
        />
        <Card title="Water treatment sequence" tone="cyan">
          <p>Coagulant addition first destabilises colloids. Gentle mixing then promotes collisions and larger flocs. Sedimentation or filtration removes the flocs, and activated carbon may be used afterward for dissolved organic contaminants.</p>
          <p>Coagulation and adsorption solve different problems: one removes dispersed particles, the other removes molecular solutes.</p>
        </Card>
      </Section>

      <Section
        index="02"
        eyebrow="Medicine and biology"
        title="Adsorbents, colloids and biological interfaces"
        intro={<>Cells, proteins, membranes and medicines are interfacial systems. Their function depends on adsorption, self-assembly, surface charge and selective molecular recognition.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Activated charcoal in poisoning" tone="emerald">
            <p>High internal area allows many organic molecules to adsorb from the gastrointestinal fluid. Effectiveness depends on the chemical nature of the poison, dose, timing and competition from food or other substances.</p>
            <p>It is an adsorption treatment, not a universal chemical antidote.</p>
          </Card>
          <Card title="Drug carriers and colloidal medicines" tone="violet">
            <p>Liposomes, polymer particles and micelles can carry poorly soluble drugs. Surface groups control circulation, cellular uptake and aggregation.</p>
            <p>Particle size and interfacial composition are as important as the chemical identity of the drug.</p>
          </Card>
          <Card title="Blood as a colloidal system" tone="rose">
            <p>Proteins and cellular components remain dispersed through charge, hydration and membrane structure. Clotting deliberately converts a flowing dispersion into a network that traps cells.</p>
          </Card>
          <Card title="Haemodialysis" tone="cyan">
            <p>Small waste solutes and ions cross a semipermeable membrane, whereas blood cells and most large proteins are retained. The process is membrane transport rather than ordinary filtration through a coarse pore.</p>
          </Card>
        </div>
      </Section>

      <Section
        index="03"
        eyebrow="Food and formulations"
        title="Colloidal architecture in everyday materials"
        intro={<>Milk, butter, ice cream, paint, ink, cosmetics and foams are designed colloidal systems whose texture depends on interfacial films and particle interactions.</>}
      >
        <DataTable
          headers={["Material", "Colloidal structure", "Stabilising feature"]}
          rows={[
            ["Milk", "Oil-in-water emulsion with proteins and salts", "Casein-rich interfacial layer and electrostatic/steric stabilisation"],
            ["Butter", "Predominantly water-in-oil structure", "Fat-crystal network traps water droplets"],
            ["Ice cream", "Foam, emulsion, ice crystals and concentrated solution", "Proteins, emulsifiers and controlled freezing"],
            ["Paint", "Pigment sol in a polymeric liquid medium", "Surfactants, polymers and thixotropic control"],
            ["Toothpaste", "Concentrated colloidal paste or gel", "Hydrated polymers and fine abrasive particles"],
            ["Shaving foam", "Gas dispersed in liquid", "Surfactant film slows bubble coalescence"],
          ]}
        />
        <Card title="Why formulations fail" tone="amber">
          <p>Creaming, sedimentation, coalescence, Ostwald ripening, syneresis and irreversible aggregation are different failure modes. The correct remedy depends on which microscopic process is occurring.</p>
        </Card>
      </Section>

      <Section
        index="04"
        eyebrow="Materials and nanoscience"
        title="When surface atoms become a major fraction of the material"
        intro={<>At nanometre dimensions, a large fraction of atoms lie at or near the surface. Surface energy can therefore control structure, melting behaviour, optical response and catalytic activity.</>}
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Nanoparticle catalysis" tone="cyan">
            <p>Small particles expose many edges and corners. Their electronic structure can also differ from that of a bulk crystal, changing adsorption energy and selectivity.</p>
          </Card>
          <Card title="Colloidal colour" tone="violet">
            <p>Metal nanoparticles interact with light through size- and shape-dependent electronic oscillations. Aggregation changes the optical spectrum and therefore the observed colour.</p>
          </Card>
          <Card title="Porous materials" tone="emerald">
            <p>Zeolites, activated carbons, silica gels and metal–organic frameworks use internal surfaces for adsorption, separation, ion exchange and catalysis.</p>
          </Card>
        </div>
        <Key>At the nanoscale, “more surface area” is not the only change. Surface composition, coordination number and electronic states may also differ from the bulk.</Key>
      </Section>

      <Section
        index="05"
        eyebrow="Energy and industry"
        title="Catalytic converters, fuel chemistry and process efficiency"
        intro={<>Catalysis lowers energy demand and controls product distribution, but industrial performance also requires stability under heat, pressure and contaminants.</>}
      >
        <DataTable
          headers={["System", "Catalytic task", "Surface-chemistry challenge"]}
          rows={[
            ["Automobile catalytic converter", "Oxidise CO and hydrocarbons; reduce nitrogen oxides", "Rapid redox cycling and resistance to sulphur or lead poisoning"],
            ["Ammonia synthesis", "Dissociate N₂ and H₂, then form NH₃", "Balance N activation with NH₃ desorption"],
            ["Fuel-cell electrode", "Accelerate electrochemical oxidation or reduction", "Three-phase boundary among gas, electrolyte and catalyst"],
            ["Photocatalytic surface", "Use light-generated carriers for redox chemistry", "Adsorption, charge separation and surface recombination compete"],
            ["Hydrogenation reactor", "Transfer adsorbed H to unsaturated molecules", "Avoid over-hydrogenation and catalyst poisoning"],
          ]}
        />
      </Section>

      <Section
        index="06"
        eyebrow="Applied examples"
        title="Case-based reasoning"
        intro={<>The examples require selection of the correct surface phenomenon rather than recall of a single definition.</>}
      >
        <Example
          number={1}
          title="Why alum clarifies muddy water"
          question={<>Muddy water contains negatively charged clay particles that do not settle. Explain the action of alum.</>}
          solution={
            <>
              <p>Aluminium salts hydrolyse to hydrated aluminium hydroxide flocs. Multivalent aluminium-containing species and the floc surface reduce the negative charge and compress the electrical double layer.</p>
              <p>Destabilised clay particles collide, attach to the floc and settle.</p>
            </>
          }
          answer={<>Alum causes coagulation and sweep flocculation of the negatively charged colloids.</>}
        />
        <Example
          number={2}
          title="Activated carbon after coagulation"
          question={<>A water-treatment plant removes suspended clay by coagulation, but an unpleasant dissolved odour remains. Which additional surface process is suitable?</>}
          solution={
            <>
              <p>The odour is caused by dissolved molecules rather than suspended particles. A high-area adsorbent such as activated carbon can retain those molecules.</p>
            </>
          }
          answer={<>Adsorption on activated carbon.</>}
        />
        <Example
          number={3}
          title="Why a catalytic converter needs a porous support"
          question={<>Platinum-group metals are expensive. Explain why they are dispersed as very small particles on a porous ceramic support.</>}
          solution={
            <>
              <p>Dispersion exposes a large fraction of the metal atoms as active surface sites. The support provides area, mechanical strength and thermal stability while using less precious metal.</p>
            </>
          }
          answer={<>High dispersion maximises active area per gram and the support stabilises the catalyst.</>}
        />
        <Example
          number={4}
          title="Delta formation"
          question={<>Why does clay-rich river water deposit sediment near the sea even when the river flow is still substantial?</>}
          solution={
            <>
              <p>Seawater contains a high concentration of ions. Counter-ions compress the double layer around charged clay particles, causing coagulation into larger aggregates that settle more readily.</p>
            </>
          }
          answer={<>Electrolyte-induced coagulation of clay colloids promotes sedimentation.</>}
        />
      </Section>
    </>
  );
}

export function Part12Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Formula atlas"
        title="Core equations and the conditions behind them"
        intro={<>A formula is useful only when its assumptions and variables are identified. This atlas groups the equations by physical meaning.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Adsorption measurement">
            <KB>{String.raw`n_{ads}=\frac{(P_i-P_f)V}{RT}`}</KB>
            <KB>{String.raw`q=\frac{(C_0-C_e)V}{m}`}</KB>
            <p className="text-sm leading-6 text-[var(--text-body)]">Rigid vessel, fixed temperature for the gas equation; equilibrium concentration for solution uptake.</p>
          </FormulaCard>
          <FormulaCard title="Specific area">
            <KB>{String.raw`a_s=\frac{A}{m},\qquad a_s(\text{spheres})=\frac{6}{\rho d}`}</KB>
            <KB>{String.raw`A=n_mN_Aa_{molecule}`}</KB>
            <p className="text-sm leading-6 text-[var(--text-body)]">The monolayer method requires a known molecular cross-sectional area.</p>
          </FormulaCard>
          <FormulaCard title="Freundlich and Langmuir">
            <KB>{String.raw`q=kP^{1/n}`}</KB>
            <KB>{String.raw`q=\frac{q_mKP}{1+KP}`}</KB>
            <KB>{String.raw`\frac{P}{q}=\frac{1}{q_mK}+\frac{P}{q_m}`}</KB>
          </FormulaCard>
          <FormulaCard title="Adsorption kinetics">
            <KB>{String.raw`r_a=k_aP(1-\theta),\qquad r_d=k_d\theta`}</KB>
            <KB>{String.raw`k_d=Ae^{-E_d/RT},\qquad \tau=1/k_d`}</KB>
          </FormulaCard>
          <FormulaCard title="Isosteric heat">
            <KB>{String.raw`\ln\frac{P_2}{P_1}=\frac{\Delta H_{ads}}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)`}</KB>
          </FormulaCard>
          <FormulaCard title="Enzyme kinetics">
            <KB>{String.raw`v=\frac{V_{max}[S]}{K_M+[S]}`}</KB>
            <KB>{String.raw`V_{max}=k_2[E]_0`}</KB>
          </FormulaCard>
          <FormulaCard title="Brownian diffusion">
            <KB>{String.raw`D=\frac{k_BT}{6\pi\eta r}`}</KB>
          </FormulaCard>
          <FormulaCard title="Coagulation and protection">
            <KB>{String.raw`\text{coagulating power}\propto\frac{1}{\text{coagulation value}}`}</KB>
            <KB>{String.raw`\text{protective power}\propto\frac{1}{\text{gold number}}`}</KB>
          </FormulaCard>
        </div>
      </Section>

      <Section
        index="02"
        eyebrow="Graph atlas"
        title="How to read the standard Surface Chemistry graphs"
        intro={<>JEE Advanced questions often test the meaning of slope, limiting region and controlled variable rather than the name of a graph.</>}
      >
        <DataTable
          headers={["Graph", "Diagnostic feature", "What it proves"]}
          rows={[
            ["q versus P: Langmuir", "Plateau at high pressure", "Finite monolayer capacity"],
            ["log q versus log P: Freundlich", "Straight-line slope 1/n", "Power-law region on heterogeneous surface"],
            ["P/q versus P", "Straight line", "Langmuir parameters from slope and intercept"],
            ["q versus T at fixed P", "Physisorption decreases; activated chemisorption may show a maximum", "Different temperature dependence of the two modes"],
            ["ln P versus 1/T at fixed q", "Slope related to adsorption enthalpy", "Isosteric heat"],
            ["v versus [S]", "Hyperbolic saturation", "Michaelis–Menten enzyme kinetics"],
            ["Property versus surfactant concentration", "Break in slope", "CMC"],
            ["Rate or product versus time in autocatalysis", "Induction period and sigmoidal region", "Catalytic product accumulates"],
          ]}
        />
        <div className="overflow-x-auto"><SurfaceVisual mode="isotherms" /></div>
      </Section>

      <Section
        index="03"
        eyebrow="Integrated numericals"
        title="Advanced solved problems"
        intro={<>The problems combine more than one concept and use original numerical values.</>}
      >
        <Example
          number={1}
          title="Langmuir coverage and amount adsorbed"
          question={<>For an adsorbate, <K>{String.raw`K=0.80\ \mathrm{bar^{-1}}`}</K> and monolayer capacity <K>{String.raw`q_m=12.0\ \mathrm{mmol\,g^{-1}}`}</K>. Calculate fractional coverage and uptake at 2.0 bar.</>}
          solution={
            <>
              <KB>{String.raw`\theta=\frac{KP}{1+KP}=\frac{(0.80)(2.0)}{1+(0.80)(2.0)}=0.615`}</KB>
              <KB>{String.raw`q=q_m\theta=(12.0)(0.615)=7.38\ \mathrm{mmol\,g^{-1}}`}</KB>
            </>
          }
          answer={<>θ = 0.615 and q = 7.38 mmol g⁻¹.</>}
        />
        <Example
          number={2}
          title="Temperature sensitivity of residence time"
          question={<>An adsorbate has <K>{String.raw`E_d=80\ \mathrm{kJ\,mol^{-1}}`}</K>. Find the ratio <K>{String.raw`\tau_{300}/\tau_{400}`}</K>, assuming the same pre-exponential factor.</>}
          solution={
            <>
              <KB>{String.raw`\frac{\tau_{300}}{\tau_{400}}=\exp\left[\frac{E_d}{R}\left(\frac{1}{300}-\frac{1}{400}\right)\right]`}</KB>
              <KB>{String.raw`\frac{\tau_{300}}{\tau_{400}}\approx3.0\times10^3`}</KB>
            </>
          }
          answer={<>Residence time at 300 K is about 3.0 × 10³ times longer.</>}
        />
        <Example
          number={3}
          title="Competing Langmuir adsorption"
          question={<>A and B compete for identical sites. At equilibrium <K>{String.raw`K_AP_A=3`}</K> and <K>{String.raw`K_BP_B=1`}</K>. Find the fractions of sites occupied by A, B and vacancies.</>}
          solution={
            <>
              <p>For competitive Langmuir adsorption:</p>
              <KB>{String.raw`\theta_A=\frac{K_AP_A}{1+K_AP_A+K_BP_B},\quad \theta_B=\frac{K_BP_B}{1+K_AP_A+K_BP_B}`}</KB>
              <KB>{String.raw`\theta_A=\frac{3}{5}=0.60,\quad\theta_B=\frac{1}{5}=0.20,\quad\theta_*=\frac{1}{5}=0.20`}</KB>
            </>
          }
          answer={<>A: 0.60, B: 0.20, vacant: 0.20.</>}
        />
        <Example
          number={4}
          title="Michaelis–Menten parameter from two conditions"
          question={<>An enzyme rate is 40 units at [S] = 2 mM and 60 units at [S] = 6 mM. Assuming Michaelis–Menten behaviour, determine Vₘₐₓ and Kₘ.</>}
          solution={
            <>
              <KB>{String.raw`40=\frac{2V}{K_M+2},\qquad60=\frac{6V}{K_M+6}`}</KB>
              <p>From the first equation, <K>{String.raw`V=20K_M+40`}</K>. From the second, <K>{String.raw`V=10K_M+60`}</K>.</p>
              <KB>{String.raw`K_M=2\ \mathrm{mM},\qquad V_{max}=80\ \text{units}`}</KB>
            </>
          }
          answer={<>Kₘ = 2 mM and Vₘₐₓ = 80 units.</>}
        />
        <Example
          number={5}
          title="Coagulation-value comparison"
          question={<>Electrolytes X and Y have coagulation values 0.50 and 5.0 mmol L⁻¹ for the same sol. Compare their coagulating powers.</>}
          solution={
            <>
              <KB>{String.raw`\frac{P_X}{P_Y}=\frac{CV_Y}{CV_X}=\frac{5.0}{0.50}=10`}</KB>
            </>
          }
          answer={<>X has ten times the coagulating power of Y.</>}
        />
        <Example
          number={6}
          title="Specific surface area after particle-size change"
          question={<>A nonporous powder is converted from spherical particles of diameter 10 μm to 0.50 μm without changing density. By what factor does external specific area increase?</>}
          solution={
            <>
              <p>For spheres, <K>{String.raw`a_s\propto1/d`}</K>.</p>
              <KB>{String.raw`\frac{a_{s,2}}{a_{s,1}}=\frac{10}{0.50}=20`}</KB>
            </>
          }
          answer={<>Twenty-fold.</>}
        />
      </Section>

      <Section
        index="04"
        eyebrow="Statement traps"
        title="High-frequency misconceptions corrected"
        intro={<>Most wrong options are built by changing one controlling condition. Audit the phase, controlled variable, sign convention and limiting case.</>}
      >
        <DataTable
          headers={["Incorrect statement", "Correction"]}
          rows={[
            ["Adsorption equilibrium means adsorption stops.", "Adsorption and desorption continue at equal rates."],
            ["Chemisorption always decreases when temperature rises.", "Activated chemisorption may increase initially before exothermic desorption dominates."],
            ["A catalyst changes the equilibrium constant.", "It changes the approach rate, not thermodynamic equilibrium."],
            ["The most strongly adsorbing metal is always the best catalyst.", "Optimum intermediate adsorption is required."],
            ["All colloids have a permanent characteristic charge.", "Charge can depend on pH, reagent excess and adsorption conditions."],
            ["Brownian movement alone prevents coagulation.", "Electrostatic or steric barriers are normally essential."],
            ["A higher coagulation value means a stronger electrolyte.", "Coagulating power is inversely related to coagulation value."],
            ["A larger gold number means better protection.", "Smaller gold number means greater protective power."],
            ["Micelles form whenever concentration exceeds CMC.", "For ionic surfactants, temperature must also exceed the Krafft temperature."],
            ["An O/W emulsion contains more water than oil.", "O/W describes the continuous phase, not necessarily the larger mass fraction."],
          ]}
        />
      </Section>

      <Section
        index="05"
        eyebrow="Diagnostic set"
        title="JEE Advanced multi-concept questions"
        intro={<>Attempt these before opening the answers. They are designed to expose gaps in mechanism, graph interpretation and limiting-case reasoning.</>}
      >
        <Example
          number={1}
          title="Multiple-correct: adsorption"
          question={<>Which statements can be correct? (i) Chemisorption may increase with temperature over a limited range. (ii) At high pressure a Langmuir isotherm becomes independent of pressure. (iii) Freundlich theory predicts an exact saturation capacity. (iv) Back-donation into H₂ σ* weakens H–H.</>}
          solution={
            <>
              <p>(i) is correct for activated adsorption. (ii) is the high-pressure Langmuir limit. (iii) is false because Freundlich is empirical and does not generate a true finite plateau. (iv) is correct.</p>
            </>
          }
          answer={<>(i), (ii) and (iv).</>}
        />
        <Example
          number={2}
          title="Matrix match: colloidal observation"
          question={<>Match: A. Beam visible from side; B. particles move to anode; C. sol coagulates on adding AlCl₃; D. liquid moves through charged porous plug. With: 1. Tyndall effect; 2. negative sol; 3. Hardy–Schulze action; 4. electro-osmosis.</>}
          solution={
            <>
              <p>A → 1. Movement to anode means negative particles, so B → 2. Trivalent Al³⁺ strongly coagulates a negative sol, so C → 3. Movement of liquid with fixed solid phase is electro-osmosis, so D → 4.</p>
            </>
          }
          answer={<>A–1, B–2, C–3, D–4.</>}
        />
        <Example
          number={3}
          title="Assertion–reason: catalysis"
          question={<>Assertion: A catalyst can increase the rates of both forward and reverse reactions. Reason: A catalyst lowers the standard Gibbs energy change of the reaction.</>}
          solution={
            <>
              <p>The assertion is true because the catalyst provides a lower-barrier route in both directions. The reason is false: standard Gibbs energy and equilibrium constant do not change.</p>
            </>
          }
          answer={<>Assertion true; reason false.</>}
        />
        <Example
          number={4}
          title="Integer answer: surface coverage"
          question={<>For Langmuir adsorption, <K>{String.raw`KP=4`}</K>. What percentage of sites is occupied?</>}
          solution={
            <>
              <KB>{String.raw`\theta=\frac{4}{1+4}=0.8`}</KB>
            </>
          }
          answer={<>80.</>}
        />
        <Example
          number={5}
          title="Mechanism selection"
          question={<>The rate of a heterogeneous reaction is proportional to <K>{String.raw`P_A/(1+K_AP_A)`}</K> at fixed B concentration. What qualitative feature does the denominator indicate?</>}
          solution={
            <>
              <p>The denominator represents site occupation by A. At low pressure the rate rises approximately linearly; at high pressure the surface becomes saturated and the pressure dependence weakens.</p>
            </>
          }
          answer={<>Competitive occupation or saturation of a finite number of surface sites.</>}
        />
      </Section>

      <Section
        index="06"
        eyebrow="Final audit"
        title="What mastery of Surface Chemistry looks like"
        intro={<>The chapter is complete when facts can be derived from surface energy, orbital interaction, transport, double-layer structure and self-assembly rather than memorised as disconnected statements.</>}
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Adsorption mastery" tone="cyan">
            <p>Distinguish adsorption from absorption; explain physisorption and chemisorption with energy and MOT; derive Langmuir; read isotherms; calculate uptake, surface area and residence time.</p>
          </Card>
          <Card title="Catalysis mastery" tone="violet">
            <p>Separate kinetics from thermodynamics; trace a surface cycle; explain donation and back-donation; apply the Sabatier principle; analyse promoters, poisons, enzymes and zeolites.</p>
          </Card>
          <Card title="Colloid mastery" tone="amber">
            <p>Classify dispersed systems; predict charge; explain Tyndall and Brownian behaviour; draw the double layer; apply Hardy–Schulze; interpret CMC, emulsions and gels.</p>
          </Card>
        </div>
        <Key>For every unfamiliar problem, ask four questions: What is the interface? Which species occupies it? What force or orbital interaction stabilises the state? What changes when pressure, temperature, concentration or charge is altered?</Key>
      </Section>
    </>
  );
}
