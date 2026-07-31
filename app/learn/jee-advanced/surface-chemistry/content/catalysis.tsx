"use client";

import { Card, DataTable, Example, FormulaCard, K, KB, Key, Section, SurfaceVisual, Trap } from "../surface-chemistry-shared";

export function Part05Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Catalytic principle"
        title="What a catalyst changes—and what it cannot change"
        intro={<>A catalyst changes the rate by providing an alternative reaction mechanism. It participates in elementary steps and is regenerated, but it does not alter the thermodynamic state functions of the overall reaction.</>}
      >
        <DataTable
          headers={["Quantity", "Effect of a catalyst", "Reason"]}
          rows={[
            ["Activation energy", "A lower maximum barrier is provided", "The mechanism is changed"],
            ["Rate constant", "Usually increases at a stated temperature", "Arrhenius factor contains the lower activation energy"],
            ["Forward and reverse rates", "Both increase", "The same equilibrium must be approached from either direction"],
            ["Equilibrium constant", "Unchanged", "Depends on standard Gibbs energy, not on mechanism"],
            ["Equilibrium composition", "Unchanged", "Catalyst only shortens the time required to reach it"],
            ["Overall ΔH and ΔG", "Unchanged", "State functions depend only on initial and final states"],
            ["Reaction feasibility", "Unchanged", "A catalyst cannot make a thermodynamically impossible overall change spontaneous"],
          ]}
        />
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="Arrhenius comparison">
            <KB>{String.raw`k=Ae^{-E_a/RT}`}</KB>
            <KB>{String.raw`\frac{k_{\mathrm{cat}}}{k_{\mathrm{uncat}}}\approx\frac{A_{\mathrm{cat}}}{A_{\mathrm{uncat}}}\exp\left(\frac{E_{a,\mathrm{uncat}}-E_{a,\mathrm{cat}}}{RT}\right)`}</KB>
            <p className="text-sm leading-6 text-slate-300">Even a modest barrier reduction can produce a very large rate enhancement.</p>
          </FormulaCard>
          <Card title="Catalyst regeneration" tone="emerald">
            <p>A catalyst is not necessarily absent from the reaction mechanism. It may be consumed in an early step and regenerated later.</p>
            <KB>{String.raw`A+C\rightleftharpoons AC`}</KB>
            <KB>{String.raw`AC+B\longrightarrow AB+C`}</KB>
            <p>The catalyst is unchanged only when the complete catalytic cycle is considered.</p>
          </Card>
        </div>
        <Trap>A catalyst does not lower the activation energy of the original uncatalysed path. It creates a different path with a lower highest barrier.</Trap>
      </Section>

      <Section
        index="02"
        eyebrow="Classification"
        title="Homogeneous, heterogeneous and special catalytic systems"
        intro={<>Classification is based mainly on phase relationship and the nature of the catalytic cycle.</>}
      >
        <DataTable
          headers={["Type", "Defining feature", "Representative example"]}
          rows={[
            ["Homogeneous catalysis", "Catalyst and reactants form one phase", "Acid-catalysed ester hydrolysis; NO-catalysed oxidation of SO₂"],
            ["Heterogeneous catalysis", "Catalyst and reactants occupy different phases", "Hydrogenation on Ni; NH₃ synthesis on Fe"],
            ["Enzyme catalysis", "Biological macromolecule provides a highly specific active site", "Urease-catalysed hydrolysis of urea"],
            ["Acid–base catalysis", "Proton transfer changes the reaction path", "Esterification and hydrolysis"],
            ["Autocatalysis", "A reaction product catalyses the reaction", "Mn²⁺ in permanganate–oxalate reaction"],
            ["Negative catalysis or inhibition", "An added species decreases rate", "Inhibitor scavenges radicals or blocks active sites"],
            ["Shape-selective catalysis", "Pore geometry controls access and transition-state formation", "ZSM-5 in hydrocarbon processing"],
            ["Photocatalysis", "Light creates electronically excited carriers or states", "TiO₂-assisted oxidation processes"],
            ["Electrocatalysis", "An electrode surface accelerates an electron-transfer reaction", "Hydrogen evolution or oxygen reduction"],
          ]}
        />
        <Card title="Homogeneous catalytic intermediate" tone="cyan">
          <p>In a homogeneous system, a catalyst often changes oxidation state, protonation state or coordination number. The catalytic intermediate must form readily but must not be so stable that the catalyst becomes trapped.</p>
          <p>For the oxidation of SO₂ by O₂ in the presence of nitrogen oxides, NO is oxidised to NO₂ and regenerated when NO₂ oxidises SO₂.</p>
        </Card>
      </Section>

      <Section
        index="03"
        eyebrow="Surface cycle"
        title="Complete mechanism of heterogeneous catalysis"
        intro={<>A solid catalyst is not merely a passive support. It creates a sequence of adsorption, activation, reaction and desorption steps at selected surface sites.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="catalyst" /></div>
        <DataTable
          headers={["Step", "Microscopic event", "Possible limitation"]}
          rows={[
            ["1. External diffusion", "Reactants cross the boundary layer surrounding the catalyst particle", "Slow flow or poor mixing"],
            ["2. Internal diffusion", "Reactants move through pores to internal sites", "Narrow, long or blocked pores"],
            ["3. Adsorption", "Reactants bind to active sites", "Weak binding gives low coverage; strong binding blocks sites"],
            ["4. Surface activation", "Bonds weaken, molecules orient and intermediates form", "Electronic structure of the site"],
            ["5. Surface reaction", "Adsorbed species react by one or more elementary steps", "Intrinsic activation barrier"],
            ["6. Desorption", "Products detach from the surface", "Strong product binding causes inhibition"],
            ["7. Product diffusion", "Products leave pores and boundary layer", "Pore congestion or low flow"],
          ]}
        />
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Active sites are not identical" tone="violet">
            <p>Terraces, steps, kinks, vacancies and different crystal faces have different coordination numbers and electronic structures. Low-coordinate atoms often bind adsorbates more strongly.</p>
            <p>Therefore catalytic activity depends on structure, not merely total surface area.</p>
          </Card>
          <Card title="Langmuir–Hinshelwood and Eley–Rideal" tone="amber">
            <p>In a Langmuir–Hinshelwood mechanism, both reactants are adsorbed before they react. In an Eley–Rideal mechanism, a gas- or solution-phase reactant directly attacks an adsorbed species.</p>
            <p>The pressure dependence of the rate can distinguish the mechanisms.</p>
          </Card>
        </div>
      </Section>

      <Section
        index="04"
        eyebrow="Molecular orbitals"
        title="MOT explanation of catalytic bond activation"
        intro={<>Transition-metal surfaces activate molecules because their occupied and vacant d-derived states can interact with both bonding and antibonding orbitals of the reactants.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="orbitals" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="H₂ activation" tone="cyan">
            <p>H₂ σ donation to the metal and d→σ* back-donation reduce H–H bond order. The surface stabilises the two developing M–H bonds, allowing dissociation at a much lower barrier than in the gas phase.</p>
            <p>Adsorbed H atoms are mobile and can add stepwise to an adsorbed alkene.</p>
          </Card>
          <Card title="N₂ activation in ammonia synthesis" tone="violet">
            <p>N₂ donates from a filled σ orbital and accepts electron density into π*. Back-donation weakens the N≡N bond and makes sequential hydrogenation possible.</p>
            <p>Iron has a suitable combination of adsorption strength, d-electron availability and product-desorption ability.</p>
          </Card>
          <Card title="CO as reactant and poison" tone="emerald">
            <p>CO binds strongly through σ donation and π back-donation. This can activate CO for carbonyl chemistry, but on catalysts intended for other reactions it may occupy sites so strongly that reactants cannot adsorb.</p>
          </Card>
          <Card title="O₂ activation" tone="rose">
            <p>Electron transfer into O₂ π* can generate adsorbed superoxide, peroxide or dissociated oxygen. These species are central to oxidation catalysis and automobile catalytic converters.</p>
          </Card>
        </div>
        <div className="overflow-x-auto"><SurfaceVisual mode="backbonding" /></div>
        <Key>MOT links adsorption and catalysis: a catalyst lowers the barrier by stabilising the electronic redistribution required to break old bonds and form new ones.</Key>
      </Section>

      <Section
        index="05"
        eyebrow="Optimum interaction"
        title="Sabatier principle and the volcano relationship"
        intro={<>A useful catalyst binds reaction intermediates strongly enough to activate them but weakly enough to release products and restore vacant sites.</>}
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Binding too weak" tone="cyan">
            <p>Surface coverage is too low, bond activation is small and reactants leave before reacting. Noble metals may be too unreactive for some bond-breaking steps.</p>
          </Card>
          <Card title="Intermediate binding" tone="emerald">
            <p>Reactants adsorb, the transition state is stabilised and products desorb. Maximum activity often occurs in this region.</p>
          </Card>
          <Card title="Binding too strong" tone="rose">
            <p>Intermediates or products remain attached, sites become blocked and the catalyst may form a stable compound. Activity falls despite strong adsorption.</p>
          </Card>
        </div>
        <Card title="Qualitative volcano plot" tone="amber">
          <p>When catalytic rate is plotted against a descriptor such as adsorption enthalpy, activity often rises from the weak-binding side, reaches a maximum and then falls on the strong-binding side. The peak is not a universal metal; it depends on reaction, surface and operating conditions.</p>
        </Card>
      </Section>

      <Section
        index="06"
        eyebrow="Worked examples"
        title="Rate enhancement, mechanism and adsorption strength"
        intro={<>These problems connect kinetics with the microscopic surface picture.</>}
      >
        <Example
          number={1}
          title="Rate increase from barrier lowering"
          question={<>A catalyst lowers the activation energy from 120 to 80 kJ mol⁻¹. Assuming equal pre-exponential factors, estimate <K>{String.raw`k_{cat}/k_{uncat}`}</K> at 500 K.</>}
          solution={
            <>
              <KB>{String.raw`\frac{k_{cat}}{k_{uncat}}=\exp\left(\frac{40000}{8.314\times500}\right)`}</KB>
              <KB>{String.raw`\frac{k_{cat}}{k_{uncat}}\approx1.5\times10^4`}</KB>
            </>
          }
          answer={<>Approximately 1.5 × 10⁴-fold.</>}
        />
        <Example
          number={2}
          title="Identify the rate-limiting regime"
          question={<>The observed rate doubles when stirring speed is greatly increased, but changes little when catalyst temperature is raised by 20 K. Which stage is most likely limiting?</>}
          solution={
            <>
              <p>Strong dependence on stirring indicates transport through the external liquid or gas boundary layer. A true surface-reaction-controlled rate would usually show clearer Arrhenius temperature dependence.</p>
            </>
          }
          answer={<>External mass transfer is likely rate limiting.</>}
        />
        <Example
          number={3}
          title="Strong adsorption can reduce activity"
          question={<>Metal X adsorbs a reaction intermediate much more strongly than metal Y. Explain why X need not be the better catalyst.</>}
          solution={
            <>
              <p>If the intermediate or product cannot desorb, active sites remain occupied. The rate then becomes limited by product removal or site regeneration.</p>
              <p>Metal Y may lie closer to the optimum of the Sabatier relation even though its adsorption is weaker.</p>
            </>
          }
          answer={<>Catalytic activity requires balanced adsorption, not maximum adsorption strength.</>}
        />
      </Section>
    </>
  );
}

export function Part06Content() {
  return (
    <>
      <Section
        index="01"
        eyebrow="Performance"
        title="Activity, selectivity and specificity"
        intro={<>Catalysts are judged not only by how fast they operate but also by which reactant they activate and which product they favour.</>}
      >
        <DataTable
          headers={["Term", "Meaning", "Illustration"]}
          rows={[
            ["Activity", "Ability to increase the reaction rate", "Finely divided Ni accelerates hydrogenation"],
            ["Selectivity", "Ability to direct reactants toward one product among several possibilities", "CO + H₂ gives methane, methanol or hydrocarbons depending on catalyst"],
            ["Specificity", "Catalyst is effective for a restricted reaction or substrate", "Urease acts efficiently on urea"],
            ["Turnover frequency", "Catalytic cycles per active site per unit time", "Useful intrinsic rate measure when active-site count is known"],
          ]}
        />
        <Card title="Product control by surface structure" tone="cyan">
          <p>Different surfaces stabilise different adsorbed intermediates and transition states. A flat terrace may favour one pathway, whereas a step or confined pore may favour another.</p>
          <p>Temperature, pressure and reactant ratio also change surface coverage and therefore selectivity.</p>
        </Card>
      </Section>

      <Section
        index="02"
        eyebrow="Catalyst formulation"
        title="Promoters, poisons, supports and deactivation"
        intro={<>Industrial catalysts are engineered materials containing an active phase, promoters, supports and pores. Performance changes when any component is altered.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Promoters" tone="emerald">
            <p>A promoter increases activity, selectivity or stability but is not the principal catalyst. Electronic promoters alter electron density; structural promoters prevent sintering or create favourable surface texture.</p>
            <p>Potassium compounds can increase electron donation on iron catalysts; alumina can improve structural stability.</p>
          </Card>
          <Card title="Catalyst poisons" tone="rose">
            <p>A poison binds preferentially to active sites or changes the active phase. Sulphur, arsenic compounds and CO are common poisons for metal catalysts.</p>
            <p>Poisoning may be reversible if the species can be removed or irreversible if a stable compound or structural change forms.</p>
          </Card>
          <Card title="Supports" tone="cyan">
            <p>Silica, alumina, activated carbon and related materials disperse small catalyst particles, improve mechanical strength, conduct heat and influence acidity or electron density.</p>
          </Card>
          <Card title="Deactivation" tone="amber">
            <p>Major causes are poisoning, coking, fouling, sintering, phase transformation, leaching and pore collapse. Regeneration may involve oxidation, reduction, washing or controlled thermal treatment.</p>
          </Card>
        </div>
        <Trap>A promoter alone may show little catalytic activity. Its function is to improve the active catalyst, not necessarily to catalyse the reaction independently.</Trap>
      </Section>

      <Section
        index="03"
        eyebrow="Confinement"
        title="Zeolites and shape-selective catalysis"
        intro={<>Zeolites are crystalline microporous aluminosilicates. Their molecular-size channels and cages create a controlled reaction environment.</>}
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <FormulaCard title="General framework composition">
            <KB>{String.raw`M_{x/n}[(AlO_2)_x(SiO_2)_y]\cdot zH_2O`}</KB>
            <p className="text-sm leading-6 text-slate-300">Substitution of <K>{String.raw`Al^{3+}`}</K> for <K>{String.raw`Si^{4+}`}</K> creates negative framework charge balanced by exchangeable cations or protons.</p>
          </FormulaCard>
          <Card title="Three kinds of shape selectivity" tone="violet">
            <p><b className="text-white">Reactant selectivity:</b> only molecules that fit can enter.</p>
            <p><b className="text-white">Transition-state selectivity:</b> only a transition state of suitable geometry can form inside the pore.</p>
            <p><b className="text-white">Product selectivity:</b> only products that can diffuse out are observed efficiently.</p>
          </Card>
        </div>
        <Card title="Acidic zeolite catalysis" tone="amber">
          <p>Protonic zeolites contain Brønsted acid sites associated with framework aluminium. They catalyse cracking, isomerisation and alkylation through carbocation-like intermediates while pore dimensions control selectivity.</p>
          <p>ZSM-5 is a standard example of a shape-selective zeolite used in hydrocarbon processing and conversion of oxygenated feeds.</p>
        </Card>
      </Section>

      <Section
        index="04"
        eyebrow="Biocatalysis"
        title="Enzyme structure, specificity and activity curves"
        intro={<>Enzymes are biological catalysts with highly organised active sites. Their selectivity arises from three-dimensional complementarity, non-covalent interactions and transition-state stabilisation.</>}
      >
        <div className="overflow-x-auto"><SurfaceVisual mode="enzyme" /></div>
        <div className="grid gap-5 xl:grid-cols-2">
          <Card title="Lock-and-key and induced fit" tone="cyan">
            <p>The lock-and-key model emphasises complementary shape. The induced-fit model recognises that enzyme and substrate adjust conformation during binding.</p>
            <p>Modern interpretation focuses on preferential stabilisation of the transition state rather than perfect binding of the unreacted substrate.</p>
          </Card>
          <Card title="Cofactors and inhibition" tone="violet">
            <p>An apoenzyme may require a metal ion, coenzyme or tightly bound prosthetic group. Competitive inhibitors occupy the substrate-binding region; non-competitive or allosteric inhibitors reduce activity through another site.</p>
          </Card>
        </div>
        <DataTable
          headers={["Enzyme", "Representative conversion"]}
          rows={[
            ["Invertase", "Sucrose → glucose + fructose"],
            ["Zymase", "Glucose → ethanol + CO₂"],
            ["Diastase", "Starch → maltose-rich products"],
            ["Maltase", "Maltose → glucose"],
            ["Urease", "Urea → NH₃ + CO₂"],
            ["Catalase", "H₂O₂ → H₂O + O₂"],
            ["Carbonic anhydrase", "Rapid interconversion of CO₂ and bicarbonate"],
          ]}
        />
        <DataTable
          headers={["Factor", "Low-to-optimum region", "Beyond optimum"]}
          rows={[
            ["Temperature", "Rate rises because molecular motion and rate constants increase", "Protein structure may denature and activity falls"],
            ["pH", "Active-site groups attain a favourable ionisation state", "Incorrect protonation or denaturation lowers activity"],
            ["Substrate concentration", "Rate increases as more ES complex forms", "Rate approaches a maximum when active sites are saturated"],
            ["Enzyme concentration", "At excess substrate, rate is proportional to enzyme concentration", "Substrate becomes limiting"],
          ]}
        />
      </Section>

      <Section
        index="05"
        eyebrow="Enzyme kinetics"
        title="Michaelis–Menten derivation and limiting behaviour"
        intro={<>The Michaelis–Menten model converts the enzyme–substrate mechanism into a quantitative rate law using the steady-state approximation.</>}
      >
        <FormulaCard title="Mechanism and steady state">
          <KB>{String.raw`E+S\underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}}ES\overset{k_2}{\longrightarrow}E+P`}</KB>
          <KB>{String.raw`v=k_2[ES]`}</KB>
          <KB>{String.raw`\frac{d[ES]}{dt}=k_1[E][S]-(k_{-1}+k_2)[ES]\approx0`}</KB>
          <KB>{String.raw`[E]_0=[E]+[ES]`}</KB>
        </FormulaCard>
        <FormulaCard title="Michaelis–Menten equation">
          <KB>{String.raw`K_M=\frac{k_{-1}+k_2}{k_1}`}</KB>
          <KB>{String.raw`[ES]=\frac{[E]_0[S]}{K_M+[S]}`}</KB>
          <KB>{String.raw`v=\frac{V_{\max}[S]}{K_M+[S]},\qquad V_{\max}=k_2[E]_0`}</KB>
        </FormulaCard>
        <DataTable
          headers={["Condition", "Rate expression", "Kinetic interpretation"]}
          rows={[
            [<K key="mm-low-condition">{String.raw`[S]\ll K_M`}</K>, <K key="mm-low-rate">{String.raw`v\approx(V_{\max}/K_M)[S]`}</K>, "First order in substrate"],
            [<K key="mm-half-condition">{String.raw`[S]=K_M`}</K>, <K key="mm-half-rate">{String.raw`v=V_{\max}/2`}</K>, "Definition of Kₘ in the simple model"],
            [<K key="mm-high-condition">{String.raw`[S]\gg K_M`}</K>, <K key="mm-high-rate">{String.raw`v\approx V_{\max}`}</K>, "Zero order in substrate; enzyme saturated"],
          ]}
        />
        <Key>A small Kₘ often indicates that half-maximum rate is reached at low substrate concentration, but Kₘ is not always a pure dissociation constant because it contains k₂.</Key>
      </Section>

      <Section
        index="06"
        eyebrow="Special effects"
        title="Autocatalysis, induced catalysis and inhibition"
        intro={<>Some reactions generate their own catalyst or become coupled through reactive intermediates.</>}
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <Card title="Autocatalysis" tone="emerald">
            <p>A product accelerates the reaction. The rate is initially low, rises as product accumulates and may later fall as reactants are consumed, producing an induction period or sigmoidal progress curve.</p>
            <p><K>{String.raw`Mn^{2+}`}</K> catalyses the oxidation of oxalate by permanganate in acid solution.</p>
          </Card>
          <Card title="Induced catalysis" tone="violet">
            <p>One reaction is accelerated by the simultaneous occurrence of another reaction involving a common reactive species. The inducing reaction supplies an intermediate that the second reaction cannot generate efficiently by itself.</p>
          </Card>
          <Card title="Negative catalysis" tone="rose">
            <p>An inhibitor decreases rate by scavenging radicals, blocking a surface, complexing a reactant or altering the active catalyst. The term does not imply a change in equilibrium.</p>
          </Card>
        </div>
      </Section>

      <Section
        index="07"
        eyebrow="Industrial systems"
        title="Important catalysts, promoters and operating roles"
        intro={<>Industrial catalyst selection balances activity, selectivity, stability, cost, heat transfer and resistance to poisons.</>}
      >
        <DataTable
          headers={["Process", "Catalyst", "Why it is suitable"]}
          rows={[
            ["Haber synthesis of NH₃", "Finely divided Fe with promoters", "Activates N₂ and H₂ while permitting NH₃ desorption"],
            ["Contact process", "V₂O₅; Pt in specialised clean feeds", "Cycles between oxidation states and catalyses SO₂ oxidation"],
            ["Ostwald process", "Pt–Rh gauze", "Rapid selective oxidation of NH₃ at high temperature"],
            ["Hydrogenation of oils", "Ni, Pd or Pt", "Dissociates H₂ and transfers surface H to C=C bonds"],
            ["Catalytic cracking", "Acidic zeolites", "Strong acid sites plus shape-selective pores"],
            ["Methanol synthesis", "Cu/ZnO/Al₂O₃ formulations", "Activates CO/CO₂ and H₂ with controlled selectivity"],
            ["Automobile converter", "Pt, Pd and Rh", "Oxidises CO/hydrocarbons and reduces nitrogen oxides"],
            ["Deacon process", "CuCl₂-based catalyst", "Promotes oxidation of HCl by O₂"],
          ]}
        />
      </Section>

      <Section
        index="08"
        eyebrow="Worked examples"
        title="Enzyme kinetics and catalyst formulation"
        intro={<>The examples combine quantitative enzyme behaviour with qualitative industrial reasoning.</>}
      >
        <Example
          number={1}
          title="Michaelis–Menten rate"
          question={<>An enzyme has <K>{String.raw`V_{\max}=120\ \mu mol\,min^{-1}`}</K> and <K>{String.raw`K_M=3.0\ \mathrm{mM}`}</K>. Find the rate at <K>{String.raw`[S]=6.0\ \mathrm{mM}`}</K>.</>}
          solution={
            <>
              <KB>{String.raw`v=\frac{120\times6.0}{3.0+6.0}=80\ \mu mol\,min^{-1}`}</KB>
            </>
          }
          answer={<>80 μmol min⁻¹.</>}
        />
        <Example
          number={2}
          title="Effect of doubling enzyme concentration"
          question={<>At saturating substrate concentration, the total enzyme concentration is doubled. What happens to <K>{String.raw`V_{\max}`}</K> and <K>{String.raw`K_M`}</K>?</>}
          solution={
            <>
              <p><K>{String.raw`V_{\max}=k_2[E]_0`}</K>, so it doubles. Kₘ depends on microscopic rate constants and is unchanged when the enzyme concentration alone changes.</p>
            </>
          }
          answer={<>Vₘₐₓ doubles; Kₘ remains unchanged.</>}
        />
        <Example
          number={3}
          title="Promoter or catalyst?"
          question={<>A small amount of K₂O added to an iron ammonia-synthesis catalyst greatly raises activity, but K₂O alone does not synthesise ammonia. Classify its role.</>}
          solution={
            <>
              <p>K₂O modifies the electronic or structural properties of the active iron surface. Because it is not the principal catalytic phase, it is a promoter.</p>
            </>
          }
          answer={<>K₂O acts as a promoter.</>}
        />
        <Example
          number={4}
          title="Poisoning by sulphur"
          question={<>Why can traces of sulphur deactivate a nickel hydrogenation catalyst even when the total sulphur amount is small?</>}
          solution={
            <>
              <p>Catalysis occurs at a small population of active surface sites. Sulphur adsorbs strongly and selectively at those sites, so a small bulk amount can cover a large fraction of the catalytically important surface.</p>
            </>
          }
          answer={<>Preferential strong adsorption blocks the active sites.</>}
        />
      </Section>
    </>
  );
}
