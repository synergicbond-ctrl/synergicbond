import { md, visual, type SBlockSection } from "./types";

export const APPLICATIONS_SECTIONS: SBlockSection[] = [
  {
    id: "calcium-magnesium",
    label: "22. Magnesium & Calcium Compounds",
    blocks: [
      md(String.raw`
## 22.1 Magnesium oxide and hydroxide

$$\mathrm{2Mg+O_2\rightarrow2MgO}\qquad\mathrm{MgCO_3\xrightarrow{\Delta}MgO+CO_2}$$

Magnesium burns with a dazzling white light (the basis of old photographic flash powder and some flares). MgO is a high-melting refractory (fusion point near $2800^\circ\mathrm{C}$) that conducts heat well but is an electrical insulator — the standard reason it is used to line high-temperature furnaces. $\mathrm{MgO+2HCl\rightarrow MgCl_2+H_2O}$.

$$\mathrm{MgO+H_2O\rightarrow Mg(OH)_2}$$

This hydration reaction is slow, since MgO itself is not very soluble. A suspension of $\mathrm{Mg(OH)_2}$ in water is **milk of magnesia**, used as an antacid and a mild laxative. A paste of MgO with concentrated $\mathrm{MgCl_2}$ solution sets to a hard magnesium oxychloride material called **Sorel cement** — historically used in flooring, grinding wheels and dental/ornamental work; like Portland cement (Section 23), it is a material system rather than one simple molecular compound.

## 22.2 Calcium oxide (quicklime) and the lime cycle

Commercial preparation in a lime kiln, with continuous removal of $\mathrm{CO_2}$ driving the equilibrium forward:

$$\mathrm{CaCO_3\xrightarrow{1070\text{-}1270\ \mathrm{K}}CaO+CO_2}$$

`),
      visual("lime-cycle"),
      md(String.raw`
Quicklime is a white amorphous solid, m.p. near 2870 K.

$$\mathrm{CaO+H_2O\rightarrow Ca(OH)_2}\ (\text{highly exothermic — "slaking"})\qquad\mathrm{CaO+CO_2\rightarrow CaCO_3}$$
$$\mathrm{CaO+SiO_2\rightarrow CaSiO_3}\qquad6\mathrm{CaO+P_4O_{10}\rightarrow2Ca_3(PO_4)_2}$$

Uses: cement manufacture, a basic metallurgical flux (removing phosphate/silicate impurities as slag), sugar purification, drying of gases that don't react with it, and as feedstock for other calcium compounds.

**Calcium hydroxide** appears in three familiar forms depending on how much water is present: the solid is *slaked lime*; a clear saturated solution is *lime water*; a suspension is *milk of lime*. Mortar is traditionally made from roughly one part slaked lime to three parts sand, worked into a paste with water.

$$\mathrm{Ca(OH)_2+CO_2\ (limited)\rightarrow CaCO_3\downarrow+H_2O}\qquad\mathrm{CaCO_3+CO_2\ (excess)+H_2O\rightarrow Ca(HCO_3)_2(aq)}$$

This is the textbook lime-water test: passing $\mathrm{CO_2}$ first turns the solution milky (precipitate forms), then the milkiness clears again as excess gas redissolves the precipitate as soluble bicarbonate.

Bleaching powder formation is strongly condition-dependent — treat the single "school" equation as a simplification of a genuinely richer set of outcomes:

$$\mathrm{2Ca(OH)_2+2Cl_2\ (cold)\rightarrow CaCl_2+Ca(OCl)_2+2H_2O}\qquad\mathrm{6Ca(OH)_2+6Cl_2\ (hot)\rightarrow5CaCl_2+Ca(ClO_3)_2+6H_2O}$$

Commercial bleaching powder is more accurately described as a mixed calcium chloride–hypochlorite material (approximately $\mathrm{Ca(OCl)Cl}$, or written in full as a $\mathrm{Ca(OCl)_2\cdot CaCl_2\cdot Ca(OH)_2\cdot}$-type mixed system) rather than one perfectly defined molecular compound.

## 22.3 Calcium carbonate and calcium carbide

Natural forms of $\mathrm{CaCO_3}$: limestone, marble, chalk and calcite (with aragonite and vaterite as less common polymorphs). Laboratory preparation by double decomposition: $\mathrm{CaCl_2+Na_2CO_3\rightarrow CaCO_3\downarrow+2NaCl}$; dissolves in acid with effervescence: $\mathrm{CaCO_3+2HCl\rightarrow CaCl_2+CO_2+H_2O}$. Uses: building stone, cement and quicklime manufacture, a metallurgical flux, paper filler, toothpaste abrasive, and an antacid.

$$\mathrm{CaO+3C\xrightarrow{\text{electric furnace}}CaC_2+CO}\qquad\mathrm{CaC_2+2H_2O\rightarrow Ca(OH)_2+C_2H_2}$$

The carbide-to-ethyne sequence is a classic multistep identification chain, and the acetylide test (Section 11.2) confirms the product gas.

**Worked example 22.1.** *Why does heating $\mathrm{MgCl_2\cdot6H_2O}$ not give pure anhydrous $\mathrm{MgCl_2}$?* The strongly polarising $\mathrm{Mg^{2+}}$ promotes hydrolysis of its own coordinated water, producing HCl gas and basic $\mathrm{Mg(OH)Cl}$, and ultimately MgO (Section 14.5). Dry HCl gas, or an ammonium-chloride double-salt route, suppresses the hydrolysis and allows the genuine anhydrous salt to be isolated.
`),
    ],
  },
  {
    id: "gypsum-cement",
    label: "23. Gypsum, Plaster of Paris & Portland Cement",
    blocks: [
      md(String.raw`
## 23.1 Gypsum and the hemihydrate

$$\mathrm{CaSO_4\cdot2H_2O}\ (\text{gypsum})\qquad\xrightarrow{393\ \mathrm{K}}\qquad\mathrm{CaSO_4\cdot\tfrac12H_2O}\ (\text{plaster of Paris})+\tfrac32\mathrm{H_2O}$$

`),
      visual("plaster"),
      md(String.raw`
On mixing with water, the hemihydrate rehydrates and interlocking gypsum crystals regrow — this is why plaster **sets by rehydration**, not by drying, and why it can expand very slightly to fill a mould faithfully. Overheating gypsum past the hemihydrate stage gives "dead-burnt" anhydrous $\mathrm{CaSO_4}$, which hydrates far too slowly to be useful — the practical usefulness of plaster of Paris depends on stopping the dehydration at exactly the right point, not on removing as much water as possible.

Uses: fracture casts and surgical immobilisation, moulds/statues/decorative casting, dentistry, and fire-resistant building board. Adding alum to the mix gives an extra-hard-setting variant known as **Keene's cement**.

## 23.2 Portland cement

Manufactured from finely divided limestone and clay/shale, heated in a rotary kiln to form clinker, then ground with about 2–3% gypsum. A representative oxide composition:

| Component | Approximate mass % |
|---|---:|
| CaO | 50–60 |
| $\mathrm{SiO_2}$ | 20–25 |
| $\mathrm{Al_2O_3}$ | 5–10 |
| MgO | 2–3 |
| $\mathrm{Fe_2O_3}$ | 1–2 |
| $\mathrm{SO_3}$ | 1–2 |

Two named quality ratios are used industrially: the "silica ratio" $\mathrm{SiO_2/Al_2O_3}$ is typically kept between about 2.5 and 4, and the "lime saturation factor," $\mathrm{CaO/(SiO_2+Al_2O_3+Fe_2O_3)}$, is kept close to 2.

The major clinker phases: tricalcium silicate $\mathrm{Ca_3SiO_5}$ ($\mathrm{C_3S}$, responsible for early strength), dicalcium silicate $\mathrm{Ca_2SiO_4}$ ($\mathrm{C_2S}$, contributes later strength), tricalcium aluminate $\approx\mathrm{Ca_3Al_2O_6}$ ($\mathrm{C_3A}$), and a calcium aluminoferrite phase.

**Gypsum's job is to slow the cement down, not speed it up**: without it, the aluminate phase ($\mathrm{C_3A}$) hydrates almost instantly on contact with water, causing "flash setting" that leaves no working time to place the concrete. The 2–3% gypsum addition retards this specific reaction, giving a workable setting time while the silicate phases hydrate to form the interlocking calcium-silicate-hydrate network that gives cement its long-term strength.

> **JEE trap.** Gypsum is added to cement to *slow* setting, not accelerate it. Cement — like bleaching powder — has no single molecular formula; it is a multiphase material defined by its clinker composition.

**Worked example 23.1.** *A calcium sulfate sample sets rapidly and gains strength after mixing with water. Is it gypsum or plaster of Paris?* The material that *sets* is plaster of Paris (the hemihydrate) — it rehydrates back to gypsum crystals as it sets. Gypsum itself is already the fully hydrated end-state and has nothing further to set into.

**Worked example 23.2.** *Calculate the theoretical percentage mass loss when gypsum $\mathrm{CaSO_4\cdot2H_2O}$ (molar mass $\approx172.2$ g mol⁻¹) becomes plaster of Paris $\mathrm{CaSO_4\cdot\frac12H_2O}$.* Water lost per mole $=1.5\times18.0=27.0$ g.

$$\%\text{ loss}=\frac{27.0}{172.2}\times100\approx15.7\%$$
`),
    ],
  },
  {
    id: "hardness",
    label: "24. Hardness of Water",
    blocks: [
      md(String.raw`
## 24.1 Cause and classification

Hardness is caused mainly by dissolved $\mathrm{Ca^{2+}}$ and $\mathrm{Mg^{2+}}$, which react with soap to form an insoluble scum rather than lathering: $\mathrm{2RCOO^-+Ca^{2+}\rightarrow(RCOO)_2Ca\downarrow}$.

- **Temporary hardness** — caused mainly by hydrogencarbonates. Removed simply by boiling: $\mathrm{Ca(HCO_3)_2\xrightarrow{\Delta}CaCO_3\downarrow+CO_2+H_2O}$ and $\mathrm{Mg(HCO_3)_2\xrightarrow{\Delta}Mg(OH)_2\downarrow+2CO_2}$ — or by Clark's method, adding a calculated amount of lime: $\mathrm{Ca(HCO_3)_2+Ca(OH)_2\rightarrow2CaCO_3\downarrow+2H_2O}$.
- **Permanent hardness** — caused mainly by chlorides and sulfates; **not** removed by boiling. Removed instead with washing soda: $\mathrm{CaSO_4+Na_2CO_3\rightarrow CaCO_3\downarrow+Na_2SO_4}$.

`),
      visual("hardness"),
      md(String.raw`
## 24.2 Softening methods compared

- **Calgon method**: sodium hexametaphosphate (often written $\mathrm{Na_6P_6O_{18}}$) complexes $\mathrm{Ca^{2+}}$/$\mathrm{Mg^{2+}}$, keeping them in solution rather than letting them precipitate with soap.
- **Zeolite (permutit) process**: writing sodium zeolite as $\mathrm{Na_2Z}$, $\mathrm{Na_2Z+Ca^{2+}\rightarrow CaZ+2Na^+}$, regenerated by flushing with brine: $\mathrm{CaZ+2NaCl\rightarrow Na_2Z+CaCl_2}$.
- **Ion-exchange resins**: a cation-exchange resin (H-form) removes metal cations, an anion-exchange resin (OH-form) removes anions; the released $\mathrm{H^+}$ and $\mathrm{OH^-}$ simply combine to give water — this is the only method here that produces genuinely **deionised** water.

| Hardness source | Boiling | Lime | Washing soda | Zeolite | Ion exchange |
|---|---:|---:|---:|---:|---:|
| Ca/Mg hydrogencarbonate | yes | yes | yes | yes | yes |
| Ca/Mg chloride or sulfate | no | limited | yes | yes | yes |
| Produces deionised water | no | no | no | partial | yes |

> **JEE trap.** Softened water is not automatically deionised water — the zeolite process simply *replaces* $\mathrm{Ca^{2+}}$/$\mathrm{Mg^{2+}}$ with $\mathrm{Na^+}$; the total dissolved-ion concentration barely changes.

## 24.3 Measuring hardness quantitatively: EDTA titration

The removal methods above answer "how do you soften water"; a separate question — "exactly how hard is this water" — is answered by complexometric titration. EDTA is a hexadentate ligand (four carboxylate oxygens plus two amine nitrogens) that forms strong, well-defined 1:1 complexes with both $\mathrm{Ca^{2+}}$ and $\mathrm{Mg^{2+}}$:

$$\mathrm{Ca^{2+}+EDTA^{4-}\rightarrow[Ca(EDTA)]^{2-}}$$

The titration is run at high pH (an ammonia buffer, typically around pH 10), because at low pH the EDTA anion is itself protonated and unavailable to complex the metal ion — the titration simply fails below a certain pH rather than just becoming less accurate. An Eriochrome Black T indicator, which changes colour when displaced from a weaker metal complex by the incoming EDTA, marks the endpoint. Because it complexes both $\mathrm{Ca^{2+}}$ and $\mathrm{Mg^{2+}}$ together, a single EDTA titration gives *total* hardness directly, without needing to distinguish the two cations. Beryllium is a instructive non-participant here: because it is permanently restricted to coordination number 4 (Section 19.5), it does not form the same six-coordinate EDTA complex the rest of the group does — a direct, testable consequence of the same small-ion, low-coordination-number argument used throughout beryllium's chemistry.

## 24.4 Quantifying hardness: ppm as $\mathrm{CaCO_3}$

$$\text{CaCO}_3\text{ equivalent}=\text{mass of salt}\times\frac{50}{\text{equivalent mass of salt}}$$

For a concentration in mg L⁻¹, the numerical result is ppm for dilute aqueous solution (density $\approx1$ g mL⁻¹).

**Worked example 24.1.** Water contains 111 mg L⁻¹ $\mathrm{CaCl_2}$ (molar mass 111, valence factor 2, equivalent mass 55.5).

$$111\times\frac{50}{55.5}=100\ \text{mg L}^{-1}\text{ as CaCO}_3\qquad\Rightarrow\qquad\textbf{Hardness}=\textbf{100 ppm}$$

**Worked example 24.2.** Water contains 120 mg L⁻¹ $\mathrm{MgSO_4}$ (molar mass 120, equivalent mass $120/2=60$).

$$120\times\frac{50}{60}=100\ \text{mg L}^{-1}\text{ as CaCO}_3\qquad\Rightarrow\qquad\textbf{Hardness}=\textbf{100 ppm}$$
`),
    ],
  },
  {
    id: "biology-uses",
    label: "25. Biological Importance, Uses & Safety",
    blocks: [
      md(String.raw`
## 25.1 Sodium and potassium: the electrochemical gradient

A representative 70 kg adult contains roughly 90 g Na and 170 g K. Sodium is overwhelmingly extracellular; potassium is overwhelmingly intracellular — illustrative concentrations run around 143 mmol L⁻¹ $\mathrm{Na^+}$ / 5 mmol L⁻¹ $\mathrm{K^+}$ in blood plasma, versus roughly 10 mmol L⁻¹ $\mathrm{Na^+}$ / 105 mmol L⁻¹ $\mathrm{K^+}$ inside a typical cell — a striking, near-total reversal across the membrane.

`),
      visual("biology"),
      md(String.raw`
The membrane $\mathrm{Na^+/K^+}$-ATPase actively maintains this gradient, exporting three $\mathrm{Na^+}$ and importing two $\mathrm{K^+}$ for every ATP hydrolysed:

$$\mathrm{ATP+3Na^+(in)+2K^+(out)\rightarrow ADP+P_i+3Na^+(out)+2K^+(in)}$$

Because three positive charges leave for every two that enter, the pump is **electrogenic** — it directly contributes to the resting membrane potential, not just to the concentration gradient. This single gradient underlies nerve-impulse transmission, cell-volume/osmotic regulation, and secondary active transport of glucose and amino acids into cells (which "hitch a ride" on the inward $\mathrm{Na^+}$ gradient).

## 25.2 Magnesium

A typical adult body contains roughly 25 g Mg. It is the central metal ion of chlorophyll, held by four porphyrin nitrogen atoms — the plant-kingdom structural analogue of iron in haem — at the heart of photosynthesis:

$$\mathrm{6CO_2+6H_2O\xrightarrow{\text{chlorophyll, sunlight}}C_6H_{12}O_6+6O_2}$$

A detail worth knowing precisely: roughly half of all photosynthesis on Earth is carried out by algae and photosynthetic bacteria, not by higher plants — and some photosynthetic bacteria run an anaerobic variant that oxidises $\mathrm{H_2S}$ to elemental sulfur instead of water to oxygen. Beyond photosynthesis, Mg coordinates ATP directly, reducing electrostatic repulsion between the phosphate groups and acting as an essential cofactor for the many kinases and phosphate-transfer enzymes that depend on Mg–ATP as the true substrate rather than free ATP; and $\mathrm{Mg^{2+}}$ helps stabilise nucleic acids, ribosomes and other negatively-charged phosphate-rich structures.

## 25.3 Calcium

A typical adult body contains roughly 1.2 kg Ca, with about 99% locked in bone and teeth as a mineral commonly represented as hydroxyapatite, $\mathrm{Ca_{10}(PO_4)_6(OH)_2}$ — bone is a dynamic mineral reservoir under continuous turnover, not an inert deposit. The remaining 1% does disproportionate physiological work: blood coagulation, muscle contraction (including the rhythmic beating of cardiac muscle), neurotransmitter release, and general cell signalling. Plasma calcium is tightly hormonally regulated (parathyroid hormone and calcitonin).

## 25.4 Practical uses at a glance

| Element/compound | Key use tied directly to its chemistry |
|---|---|
| Li metal/salts | light alloys, battery electrodes, specialised ceramics/glass |
| Na metal | heat-transfer coolant in some reactor designs; strong reducing agent |
| NaCl | food/preservation; feedstock for chlor-alkali and Solvay industries |
| NaOH | soap, paper, fibres, petroleum and alumina processing |
| $\mathrm{Na_2CO_3}$ | glass, detergents, water softening |
| $\mathrm{NaHCO_3}$ | baking, antacid, fire-control formulations |
| K salts | fertilisers; KOH in soft soap and $\mathrm{CO_2}$ absorption |
| Cs/K surfaces | photoelectric devices (Section 8.4) |
| Be metal/alloys | stiff, light aerospace/X-ray-window components — strict toxicity control required |
| Mg metal | light alloys, flares, reducing agent |
| MgO | refractory furnace lining |
| $\mathrm{Mg(OH)_2}$ | milk of magnesia |
| CaO / $\mathrm{Ca(OH)_2}$ | cement, mortar, metallurgical flux, neutralisation, water purification |
| $\mathrm{CaCO_3}$ | construction, paper filler, antacid |
| $\mathrm{CaSO_4\cdot\frac12H_2O}$ | casts and moulds |
| Sr salts | red pyrotechnic colour |
| Ba salts | green pyrotechnic colour; $\mathrm{BaSO_4}$ as radiographic contrast medium |
| $\mathrm{KO_2}$ | closed-space oxygen regeneration (submarines, spacecraft) |

## 25.5 Safety distinctions worth stating precisely

- Soluble barium compounds are toxic; insoluble $\mathrm{BaSO_4}$ is safe to ingest for imaging because its minute solubility product releases negligible free $\mathrm{Ba^{2+}}$ (Section 6.5) — toxicity belongs to the dissociated ion, not the element name.
- Beryllium dust and soluble beryllium compounds are genuinely hazardous.
- NaOH and KOH are strongly corrosive.
- Alkali metals and saline hydrides react dangerously, sometimes violently, with water.
- Peroxides and superoxides are strong oxidants and must not be treated as inert.
- Older industrial methods relying on mercury or lead (mercury-cell chlor-alkali, tetraethyl-lead antiknock additives once made from Na/Pb alloy) are not preferred modern practice.
`),
    ],
  },
  {
    id: "order-bank",
    label: "26. Master Order Bank & Corrected JEE Traps",
    blocks: [
      md(String.raw`
## 26.1 Core orders, collected in one place

| Property | Correct order |
|---|---|
| Group 1 atomic radius | $\mathrm{Li<Na<K<Rb<Cs}$ |
| Group 1 first IE | $\mathrm{Li>Na>K>Rb>Cs}$ |
| Group 1 hydration magnitude | $\mathrm{Li^+>Na^+>K^+>Rb^+>Cs^+}$ |
| Group 1 melting point (broad trend) | $\mathrm{Li>Na>K>Rb>Cs}$ |
| Group 1 density (anomalous) | $\mathrm{Li<K<Na<Rb<Cs}$ |
| Aqueous reducing power | Li strongest; K/Rb/Cs close behind; Na weakest of the commonly tabulated set |
| Group 2 radius | $\mathrm{Be<Mg<Ca<Sr<Ba}$ |
| Group 2 first IE | $\mathrm{Be>Mg>Ca>Sr>Ba}$ |
| Group 2 hydration magnitude | $\mathrm{Be^{2+}>Mg^{2+}>Ca^{2+}>Sr^{2+}>Ba^{2+}}$ |
| Group 2 oxide/hydroxide basicity | rises Be $\rightarrow$ Ba |
| Group 2 hydroxide solubility | rises Mg $\rightarrow$ Ba |
| Group 2 sulfate solubility | falls Mg $\rightarrow$ Ba |
| Group 2 carbonate thermal stability | rises Be $\rightarrow$ Ba |
| Lithium-halide covalency | $\mathrm{LiF<LiCl<LiBr<LiI}$ |
| Saline hydride lattice stability | $\mathrm{LiH>NaH>KH>RbH>CsH}$ |

## 26.2 Product bank: reagent/condition → product, at a glance

| Reactant / condition | Product |
|---|---|
| Li + excess $\mathrm{O_2}$ | mainly $\mathrm{Li_2O}$ |
| Na + excess $\mathrm{O_2}$ | mainly $\mathrm{Na_2O_2}$ |
| K/Rb/Cs + excess $\mathrm{O_2}$ | $\mathrm{MO_2}$ superoxide |
| Li + $\mathrm{N_2}$ | $\mathrm{Li_3N}$ (only Group 1 metal to do this) |
| Group 1 nitrate (except Li), heated | nitrite $+\mathrm{O_2}$ |
| $\mathrm{LiNO_3}$, heated | $\mathrm{Li_2O+NO_2+O_2}$ |
| Group 2 nitrate, heated | $\mathrm{MO+NO_2+O_2}$ |
| Group 2 carbonate, heated | $\mathrm{MO+CO_2}$ |
| $\mathrm{NaHCO_3}$, heated | $\mathrm{Na_2CO_3+CO_2+H_2O}$ |
| Gypsum, careful controlled heat | plaster of Paris |
| Plaster of Paris + water | gypsum |
| $\mathrm{CaC_2}$ + water | ethyne |
| $\mathrm{Be_2C}$ + water | methane |
| any ionic nitride + water | ammonia |
| any saline hydride + water | hydrogen |

## 26.3 Lithium and beryllium exception banks (cross-reference: Sections 18–19)

**Lithium**: hardest and highest-melting alkali metal; least visually vigorous water reaction, yet the strongest aqueous reducing agent; forms the normal oxide and the only Group-1 direct nitride; $\mathrm{LiF}$, $\mathrm{Li_2CO_3}$ and $\mathrm{Li_3PO_4}$ sparingly soluble; $\mathrm{LiCl}$ hydrated/deliquescent/donor-solvent-soluble; solid $\mathrm{LiHCO_3}$ never isolated; carbonate/hydroxide/nitrate all decompose to the oxide; diagonal relationship with Mg.

**Beryllium**: compounds largely covalent and readily hydrolysed; no water reaction (passivation); BeO and $\mathrm{Be(OH)_2}$ amphoteric; $\mathrm{BeCl_2}$ polymeric in the solid, linear only as a high-temperature vapour monomer; forms $[\mathrm{BeF_4}]^{2-}$-type complexes; its carbide gives methane on hydrolysis; diagonal relationship with Al; no flame colour.

## 26.4 Common wrong statements, corrected

| Wrong statement | Correct statement |
|---|---|
| Cs is the strongest reducing agent in water | Li is strongest in water; Cs is merely easiest to ionise in the gas phase |
| All alkali-metal salts are soluble | lithium fluoride, carbonate and phosphate are the standing exceptions |
| All Group 2 hydroxides are basic | $\mathrm{Be(OH)_2}$ is amphoteric |
| Group 2 sulfate solubility increases down the group | it *decreases* |
| Group 2 hydroxide solubility decreases down the group | it *increases*, from Mg to Ba |
| All nitrates give nitrites on heating | true only for Group 1 salts other than lithium |
| Oxygen is always $-2$ in its compounds | $-1$ in peroxide, $-\tfrac12$ in superoxide |
| $\mathrm{BeCl_2}$ is always linear | linear only as a high-temperature monomeric vapour |
| Aqueous NaCl electrolysis gives sodium metal | it gives NaOH, $\mathrm{H_2}$ and $\mathrm{Cl_2}$ |
| The Solvay process makes $\mathrm{K_2CO_3}$ efficiently | it cannot — $\mathrm{KHCO_3}$ is too soluble to precipitate |
| Plaster of Paris "sets" by drying out | it sets by *rehydrating* back to gypsum |
| Softened water is deionised water | softening may simply exchange $\mathrm{Ca^{2+}}$/$\mathrm{Mg^{2+}}$ for $\mathrm{Na^+}$ |
| Cement has one molecular formula | it is an inherently multiphase clinker material |

## 26.5 A five-step method for evaluating any tricky statement

1. Identify the group, and check whether the first member is the exception.
2. Check the physical phase and reaction conditions before assigning structure or product.
3. Separate thermodynamic driving force from observed rate.
4. Identify which specific property is being compared — solubility, basicity, or thermal stability are *not* interchangeable.
5. Calculate the oxidation state and balance the equation rather than trusting a remembered pattern.

> **JEE trap.** A numerically correct order stated with the wrong property label is still a wrong answer — "hydration enthalpy decreases down the group" is ambiguous between the signed value becoming less negative and its magnitude shrinking. State explicitly which convention is being used (Section 1.4).
`),
      visual("trap"),
    ],
  },
  {
    id: "worked-examples",
    label: "27. Worked Examples & JEE Advanced Problem Lab",
    blocks: [
      md(String.raw`
**27.1 Oxygen species and magnetism.** *A Group 1 metal forms $\mathrm{MO_2}$ on combustion, and the solid is paramagnetic. Identify the oxygen ion and the oxidation state of oxygen.* The compound contains $\mathrm{O_2^-}$, a superoxide ion with one unpaired electron; average oxidation state of O is $-\tfrac12$. The metal is normally K, Rb or Cs.

**27.2 Thermodynamics versus rate.** *Li has $E^\circ=-3.04$ V and Na has $E^\circ=-2.71$ V, yet Na reacts far more violently with water. Explain.* $E^\circ$ compares equilibrium thermodynamic driving force under standard aqueous conditions; visible rate depends instead on melting point, surface renewal, and oxide/hydroxide film behaviour. Li is thermodynamically the stronger reducing agent but kinetically the less violent reactor.

**27.3 Nitrate gas-volume calculation.** *On complete heating, 0.20 mol $\mathrm{Ca(NO_3)_2}$ decomposes. Find the moles of $\mathrm{NO_2}$ and $\mathrm{O_2}$ produced.* $\mathrm{2Ca(NO_3)_2\rightarrow2CaO+4NO_2+O_2}$: per mole of nitrate salt, 2 mol $\mathrm{NO_2}$ and 0.5 mol $\mathrm{O_2}$ form. Therefore $\mathrm{NO_2}=0.40$ mol and $\mathrm{O_2}=0.10$ mol.

**27.4 Peroxide oxygen yield.** *How many moles of $\mathrm{O_2}$ are released when 0.40 mol $\mathrm{Na_2O_2}$ removes excess $\mathrm{CO_2}$?* $\mathrm{2Na_2O_2+2CO_2\rightarrow2Na_2CO_3+O_2}$: 2 mol peroxide give 1 mol oxygen, so 0.40 mol gives **0.20 mol $\mathrm{O_2}$**.

**27.5 Superoxide life-support stoichiometry.** *0.80 mol $\mathrm{KO_2}$ reacts completely with $\mathrm{CO_2}$. Calculate the $\mathrm{CO_2}$ absorbed and $\mathrm{O_2}$ released.* $\mathrm{4KO_2+2CO_2\rightarrow2K_2CO_3+3O_2}$: $\mathrm{CO_2}=0.40$ mol; $\mathrm{O_2}=0.60$ mol.

**27.6 Lithium nitride identification.** *A red-brown lithium compound gives ammonia with water. Identify it and calculate the moles of ammonia from 0.50 mol of the compound.* $\mathrm{Li_3N}$: $\mathrm{Li_3N+3H_2O\rightarrow3LiOH+NH_3}$, so 0.50 mol gives **0.50 mol $\mathrm{NH_3}$**.

**27.7 Carbide gas test.** *Two white solids are $\mathrm{Be_2C}$ and $\mathrm{CaC_2}$. What gas identifies each on hydrolysis?* $\mathrm{Be_2C}$ gives methane; $\mathrm{CaC_2}$ gives ethyne. Bromine-water decolourisation (or a silver-acetylide precipitate test) distinguishes the unsaturated ethyne from the saturated methane.

**27.8 Amphoteric beryllium hydroxide.** *Write equations showing $\mathrm{Be(OH)_2}$ is amphoteric.* $\mathrm{Be(OH)_2+2H^+\rightarrow Be^{2+}+2H_2O}$ and $\mathrm{Be(OH)_2+2OH^-\rightarrow[Be(OH)_4]^{2-}}$.

**27.9 Solubility reversal.** *Why is $\mathrm{Ba(OH)_2}$ more soluble than $\mathrm{Mg(OH)_2}$, while $\mathrm{BaSO_4}$ is less soluble than $\mathrm{MgSO_4}$?* For the small $\mathrm{OH^-}$ ion, lattice enthalpy falls sharply as the cation grows, so dissolution becomes progressively easier down the group. For the large $\mathrm{SO_4^{2-}}$ ion, the lattice term barely changes with cation size, while hydration of the cation weakens markedly — so dissolution becomes progressively harder instead.

**27.10 Flame-mixture inference.** *A sample shows an intense yellow flame directly, and a lilac flame only through cobalt glass. Which cations are present?* $\mathrm{Na^+}$ (yellow) and $\mathrm{K^+}$ (lilac, normally masked by the far more intense sodium emission).

**27.11 Gypsum mass loss.** *Calculate the theoretical percentage mass loss when gypsum becomes plaster of Paris.* Worked in full in Section 23 (Worked example 23.2): $\approx15.7\%$.

**27.12 Lime-cycle identification.** *A white solid A evolves $\mathrm{CO_2}$ on heating to B. B reacts exothermically with water to give C. Limited $\mathrm{CO_2}$ through C regenerates A; excess $\mathrm{CO_2}$ instead gives a clear solution D. Identify A–D.* $\mathrm{A=CaCO_3}$, $\mathrm{B=CaO}$, $\mathrm{C=Ca(OH)_2}$, $\mathrm{D=Ca(HCO_3)_2(aq)}$.

**27.13 Solvay stoichiometry.** *Ignoring losses, how many moles of $\mathrm{Na_2CO_3}$ come from 4 mol NaCl?* Worked in full in Section 21 (Worked example 21.2): **2 mol**.

**27.14 Aqueous versus molten electrolysis.** *State the cathode product for aqueous NaCl and for molten NaCl.* Aqueous: $\mathrm{H_2}$, because water is preferentially reduced. Molten: Na metal, because $\mathrm{Na^+}$ is the only species available for reduction.

**27.15 Magnesium chloride dehydration.** *Why doesn't heating $\mathrm{MgCl_2\cdot6H_2O}$ give pure $\mathrm{MgCl_2}$?* Worked in full in Section 22 (Worked example 22.1) — hydrolysis of coordinated water gives $\mathrm{Mg(OH)Cl}$/MgO plus HCl instead.

**27.16 Hardness calculation.** *Water contains 120 mg L⁻¹ $\mathrm{MgSO_4}$ (molar mass 120). Find the hardness as $\mathrm{CaCO_3}$.* Worked in full in Section 24 (Worked example 24.2): **100 ppm**.

**27.17 Thermal-stability ordering.** *Arrange $\mathrm{MgCO_3}$, $\mathrm{CaCO_3}$ and $\mathrm{BaCO_3}$ in increasing thermal stability.* $\mathrm{MgCO_3<CaCO_3<BaCO_3}$ — cation polarising power falls down the group, so the carbonate ion is distorted less and decomposition needs more heat.

**27.18 Multiple-correct concept set.** *Which of the following are correct? (1) $\mathrm{KO_2}$ is paramagnetic. (2) $\mathrm{Na_2O_2}$ gives only $\mathrm{O_2}$ with ice-cold water. (3) $\mathrm{LiNO_3}$ gives $\mathrm{NO_2}$ on heating. (4) $\mathrm{BaSO_4}$ is more soluble than $\mathrm{MgSO_4}$. (5) Solid $\mathrm{LiHCO_3}$ is readily isolated.* **Correct: (1) and (3) only.**

**27.19 Matrix-match drill.** Match each substance to its defining observation: **A.** $\mathrm{Li_3N}$ **B.** $\mathrm{CaC_2}$ **C.** $\mathrm{KO_2}$ **D.** $\mathrm{Be(OH)_2}$ — against **p.** ammonia on hydrolysis **q.** ethyne on hydrolysis **r.** paramagnetic **s.** dissolves in both acid and alkali. **Match: A–p; B–q; C–r; D–s.**

**27.20 Final integrated challenge.** *A metal M gives a brick-red flame. It reacts with water to form P and hydrogen. Carbon dioxide first gives a precipitate Q, then excess gas gives a clear solution R. Heating Q gives S, and S heated with carbon at electric-furnace temperature gives T, which releases an unsaturated gas with water. Identify M through T.*

$$\mathrm{M=Ca,\quad P=Ca(OH)_2,\quad Q=CaCO_3,\quad R=Ca(HCO_3)_2,\quad S=CaO,\quad T=CaC_2,\quad \text{gas}=C_2H_2}$$

This one sequence alone integrates flame testing, the metal–water reaction, the carbonate–hydrogencarbonate equilibrium, calcination, and carbide chemistry — a genuinely representative capstone problem for the whole chapter.

**27.21 Potassium's carbonate chain, with real numbers throughout.** *A 5.6 g sample of KOH (A), itself manufactured by electrolysis of molten/aqueous KCl, is treated with $\mathrm{CO_2}$ to give a bicarbonate. This decomposes at $150^\circ\mathrm{C}$ to a carbonate, which then reacts with dilute $\mathrm{H_2SO_4}$. Work through the full chain quantitatively.*

$$\mathrm{KOH+CO_2\rightarrow KHCO_3}\qquad 5.6\text{ g KOH}=0.100\text{ mol}\rightarrow0.100\text{ mol KHCO}_3$$
$$\mathrm{2KHCO_3\xrightarrow{150^\circ C}K_2CO_3+H_2O+CO_2}\qquad0.100\text{ mol KHCO}_3\rightarrow0.050\text{ mol CO}_2$$
$$\mathrm{K_2CO_3+H_2SO_4\rightarrow K_2SO_4+H_2O+CO_2}\qquad0.100\text{ mol K}_2\text{CO}_3\rightarrow0.100\text{ mol CO}_2=2.24\text{ L at STP}$$

Three consecutive exact stoichiometric matches make this a clean template for the potassium-analogue of the sodium carbonate chain (Section 21) — the $150^\circ\mathrm{C}$ hydrogencarbonate-decomposition temperature is the same value used throughout the sodium case.

**27.22 Gypsum, with real thermodynamic data.** *A 17.2 g sample of gypsum, $\mathrm{CaSO_4\cdot2H_2O}$, is heated to $150^\circ\mathrm{C}$ and loses water to form the hemihydrate. Verify the mass-loss percentage, then use $\Delta H=+178\text{ kJ mol}^{-1}$ for $\mathrm{CaCO_3\rightarrow CaO+CO_2}$ and $\Delta H=-65\text{ kJ mol}^{-1}$ for $\mathrm{CaO+H_2O\rightarrow Ca(OH)_2}$ to describe the energetics of the corresponding calcium lime cycle.*

Molar mass of gypsum $\approx172.2$ g mol⁻¹, so 17.2 g $=0.100$ mol. Dehydration to the hemihydrate, $\mathrm{2(CaSO_4\cdot2H_2O)\rightarrow2(CaSO_4\cdot\tfrac12H_2O)+3H_2O}$, removes 1.5 mol water per mole of gypsum: $1.5\times18.0=27.0$ g lost per 172.2 g, matching the **15.7%** mass loss already derived in Section 23 (Worked example 23.2). The two lime-cycle enthalpies are genuine literature values: decomposing calcium carbonate is strongly endothermic (consistent with needing a hot kiln, Section 22.2), while slaking the resulting quicklime with water is strongly exothermic enough to be a recognised safety hazard on an industrial scale.

**27.23 Sodium sulfide as a reducing agent.** *A 7.8 g sample of $\mathrm{Na_2S}$ is split into two equal portions. One portion is treated with iodine; the other with dilute $\mathrm{HNO_3}$. Predict the products and the quantities involved.*

$\mathrm{Na_2S}$, $M=78$ g mol⁻¹, so 7.8 g $=0.100$ mol. With iodine, a clean 1:1 redox reaction occurs: $\mathrm{Na_2S+I_2\rightarrow2NaI+S\downarrow}$ — sulfide reduces iodine to iodide while itself being oxidised to elemental sulfur, so 0.0500 mol $\mathrm{Na_2S}$ (half the sample) consumes 0.0500 mol $\mathrm{I_2}$ exactly. With dilute nitric acid, sulfide is instead oxidised only as far as elemental sulfur (not all the way to sulfate), with $\mathrm{NO}$ as the reduction product, consistent with dilute-$\mathrm{HNO_3}$ behaviour elsewhere in the syllabus:

$$\mathrm{3Na_2S+8HNO_3(dilute)\rightarrow6NaNO_3+3S+2NO+4H_2O}$$

Both reactions showcase $\mathrm{S^{2-}}$ as a genuine reducing agent against two chemically distinct oxidisers, a role easy to overlook next to sulfide's more commonly tested Brønsted-basic hydrolysis (Section 11.3).

## 27.24 Chapter completion standard

You have mastered this chapter when you can, without hesitation:

- reproduce the core quantitative tables and every named-compound reaction from memory, not recognition;
- explain every first-member anomaly (Li, Be) purely from charge density and polarising power, without memorising it as an isolated fact;
- keep thermodynamic driving force cleanly separated from observed reaction rate in every electrode-potential question;
- derive — not just recall — the opposing Group 2 hydroxide/sulfate solubility trends from the lattice/hydration competition;
- identify an oxygen species (oxide/peroxide/superoxide/ozonide) from its magnetism and stoichiometry alone;
- navigate the full sodium and calcium industrial process maps (Downs, chlor-alkali, Solvay, lime cycle, cement) without a reference sheet;
- solve a multistep identification or quantitative problem end-to-end without leaning on isolated memorised fragments.
`),
    ],
  },
];
