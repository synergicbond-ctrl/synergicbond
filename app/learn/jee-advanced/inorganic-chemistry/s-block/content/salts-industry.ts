import { md, visual, type SBlockSection } from "./types";

export const SALTS_INDUSTRY_SECTIONS: SBlockSection[] = [
  {
    id: "carbonates",
    label: "16. Carbonates & Hydrogencarbonates",
    blocks: [
      md(String.raw`
## 16.1 Alkali-metal carbonates

All common alkali carbonates are water-soluble except $\mathrm{Li_2CO_3}$, which is only sparingly soluble. The heavier carbonates are thermally stable under ordinary laboratory heating (they melt before decomposing), whereas $\mathrm{Li_2CO_3}$ decomposes on strong heating:

$$\mathrm{Li_2CO_3\xrightarrow{\Delta}Li_2O+CO_2}$$

The exception follows directly from Section 18: strong polarisation of $\mathrm{CO_3^{2-}}$ by tiny $\mathrm{Li^+}$, and the stability of the compact $\mathrm{Li_2O}$ lattice that results.

## 16.2 Group 2 carbonates

Precipitated directly from soluble salts, $\mathrm{M^{2+}+CO_3^{2-}\rightarrow MCO_3\downarrow}$, and **all** decompose on heating: $\mathrm{MCO_3\xrightarrow{\Delta}MO+CO_2}$. Thermal stability *increases* down the group:

$$\mathrm{BeCO_3<MgCO_3<CaCO_3<SrCO_3<BaCO_3}$$

A small cation polarises $\mathrm{CO_3^{2-}}$ strongly, shifting electron density and making it easier to transfer an oxide ion to the metal while $\mathrm{CO_2}$ escapes; larger cations distort the carbonate ion far less, so more heat is required to force decomposition.

## 16.3 The carbonate–hydrogencarbonate equilibrium

Carbon dioxide converts an insoluble carbonate into a soluble hydrogencarbonate:

$$\mathrm{MCO_3+CO_2+H_2O\rightarrow M(HCO_3)_2(aq)}$$

This single equilibrium explains limestone dissolution by rainwater/groundwater, cave and stalactite formation, and temporary water hardness (Section 24) all at once.

## 16.4 Hydrogencarbonates

$\mathrm{NaHCO_3}$, $\mathrm{KHCO_3}$ and the other heavier alkali hydrogencarbonates are isolable solids; $\mathrm{LiHCO_3}$ exists only in solution (Section 18.4). Group 2 hydrogencarbonates likewise exist only in aqueous solution — none is isolable as a solid.

$$\mathrm{2NaHCO_3\xrightarrow{\Delta}Na_2CO_3+CO_2+H_2O}\qquad\mathrm{Ca(HCO_3)_2\xrightarrow{\Delta}CaCO_3\downarrow+CO_2+H_2O}$$

Acidification of either carbonate or hydrogencarbonate releases $\mathrm{CO_2}$: $\mathrm{CO_3^{2-}+2H^+\rightarrow CO_2+H_2O}$ and $\mathrm{HCO_3^-+H^+\rightarrow CO_2+H_2O}$. Effervescence with dilute acid is *evidence* for a carbonate/hydrogencarbonate, but is not by itself a unique confirmatory test.

> **JEE trap.** Thermal stability and solubility are different properties measured in different ways — $\mathrm{BaCO_3}$ is thermally *more* stable than $\mathrm{MgCO_3}$, yet both are poorly soluble in water. Never infer one property from the other.

**Worked example 16.1.** *A carbonate gives a crimson flame, decomposes on heating, and its oxide product reacts with water. Possible identities include lithium and strontium compounds. How do you distinguish them?* Flame colour alone cannot separate crimson Li from crimson Sr (Section 8.3) — use stoichiometry, oxidation-state reasoning, or a confirmatory ion test instead.
`),
    ],
  },
  {
    id: "nitrates-sulphates",
    label: "17. Nitrates, Sulphates & Hydrated Salts",
    blocks: [
      md(String.raw`
## 17.1 Nitrates

Every Group 1 nitrate except lithium's decomposes only to the nitrite: $\mathrm{2MNO_3\xrightarrow{\Delta}2MNO_2+O_2}$. Lithium instead follows the Group 2 pattern (Section 18.3): $\mathrm{4LiNO_3\xrightarrow{\Delta}2Li_2O+4NO_2+O_2}$. Every Group 2 nitrate decomposes all the way to the oxide: $\mathrm{2M(NO_3)_2\xrightarrow{\Delta}2MO+4NO_2+O_2}$, with thermal stability generally rising as cation polarising power falls down the group.

## 17.2 Sulfate solubility: the opposite of the hydroxide trend

$$\mathrm{BeSO_4>MgSO_4>CaSO_4>SrSO_4>BaSO_4}\qquad(\text{solubility, falling})$$

$\mathrm{BeSO_4}$ and $\mathrm{MgSO_4}$ are freely soluble; $\mathrm{CaSO_4}$ is only sparingly soluble; $\mathrm{SrSO_4}$ and $\mathrm{BaSO_4}$ are very poorly soluble indeed. As established in Section 6.4, the large $\mathrm{SO_4^{2-}}$ anion means lattice enthalpy barely changes down the group, while hydration enthalpy of the cation falls sharply — so dissolution becomes progressively less favourable, the mirror image of the hydroxide trend.

The classic sulfate confirmatory test exploits this: acidify the test solution (to remove carbonate/sulfite interference), then add a soluble barium salt — $\mathrm{Ba^{2+}+SO_4^{2-}\rightarrow BaSO_4\downarrow}$.

Group 2 sulfates become progressively more thermally stable down the group; on sufficiently strong heating a less-stable sulfate can lose $\mathrm{SO_2}$: $\mathrm{2MSO_4\xrightarrow{\Delta}2MO+2SO_2+O_2}$. $\mathrm{BaSO_4}$ in particular is extremely refractory and should not be assumed to decompose at an ordinary laboratory heating temperature.

## 17.3 Hydrated salts, deliquescence and efflorescence

Hydrate formation is favoured by high cation charge density: $\mathrm{LiCl\cdot2H_2O}$, $\mathrm{MgCl_2\cdot6H_2O}$, $\mathrm{CaCl_2\cdot6H_2O}$, $\mathrm{BaCl_2\cdot2H_2O}$, $\mathrm{Mg(NO_3)_2\cdot6H_2O}$ — while $\mathrm{Ba(NO_3)_2}$ is commonly anhydrous, since $\mathrm{Ba^{2+}}$'s charge density is much lower. Water in a hydrate crystal may coordinate directly to the cation, sit in a lattice cavity, or simply participate in hydrogen bonding — the three roles are structurally distinct even though all are loosely called "water of crystallisation."

- **Deliquescent**: absorbs enough atmospheric water to dissolve itself completely, e.g. $\mathrm{CaCl_2}$, NaOH.
- **Hygroscopic**: absorbs atmospheric moisture without necessarily dissolving.
- **Efflorescent**: *loses* water of crystallisation to dry air, e.g. washing soda.

**Advanced fact — Glauber's salt.** Below about $32.4^\circ\mathrm{C}$, sodium sulfate crystallises as the decahydrate $\mathrm{Na_2SO_4\cdot10H_2O}$; above that transition temperature, the anhydrous salt is thermodynamically favoured instead. This is a genuine phase-equilibrium effect, not a simple solubility curve.

> **JEE trap.** "All nitrates give nitrites on heating" is false — it only holds for Group 1 salts other than lithium. "All Group 2 sulfates are insoluble" is also false: Mg and Be sulfates are freely soluble.
`),
    ],
  },
  {
    id: "sodium-chemistry",
    label: "20. Sodium Chloride, NaOH & the Chlor-Alkali Industry",
    blocks: [
      md(String.raw`
## 20.1 Sodium chloride: occurrence and purification

Sea water contains roughly 2.7–2.9% NaCl by mass. Solar evaporation gives crude salt contaminated with sulfates and deliquescent $\mathrm{CaCl_2}$/$\mathrm{MgCl_2}$. Purification exploits the **common-ion effect**: a concentrated NaCl solution is saturated with dry HCl gas; the added $\mathrm{Cl^-}$ lowers NaCl's own solubility, so pure NaCl crystallises out while the more soluble impurity chlorides stay largely in solution. Melting point $\approx1081$ K; solubility $\approx36.0$ g per 100 g water at 273 K, changing only moderately with temperature.

## 20.2 The Downs cell: metallic sodium

$$\text{Cathode: }\mathrm{Na^++e^-\rightarrow Na(l)}\qquad\text{Anode: }\mathrm{2Cl^-\rightarrow Cl_2(g)+2e^-}$$

Molten NaCl alone melts at 1081 K; mixing in $\mathrm{CaCl_2}$ lowers the operating temperature to roughly 850 K. This lower temperature (i) cuts fuel cost, (ii) reduces sodium's vapour pressure — sodium vapour ignites in air — and (iii) stops the liberated sodium from redissolving into the melt, which would otherwise short-circuit the cell. Water must be absent, since it would be reduced preferentially over $\mathrm{Na^+}$. An iron-gauze screen physically separates the electrodes to stop the products recombining.

## 20.3 Chlor-alkali process (aqueous electrolysis)

$$\mathrm{2NaCl+2H_2O\rightarrow2NaOH+Cl_2+H_2}$$

Modern **membrane cells** keep the anode and cathode compartments separated, so chlorine never contacts the hydroxide solution. Historically, **diaphragm cells** and **mercury cells** were used instead: in a mercury cell, sodium is discharged as a liquid sodium–mercury amalgam rather than as a gas-evolving reaction at the cathode (because hydrogen has a large overvoltage on a mercury surface, it is *not* preferentially discharged there, unlike at a normal electrode); the amalgam is then decomposed separately with water to give NaOH and $\mathrm{H_2}$. Mercury-cell technology has been phased out in most of the world because of mercury pollution, in favour of membrane cells.

> **JEE trap.** "Electrolysis of NaCl gives sodium metal" is only true for **molten** NaCl (Downs cell). Electrolysis of **aqueous** brine gives NaOH, $\mathrm{H_2}$ and $\mathrm{Cl_2}$ — water is reduced at the cathode instead of $\mathrm{Na^+}$, because $\mathrm{Na^+}$ reduction requires a far more negative potential than water reduction under aqueous conditions.

## 20.4 Sodium hydroxide

NaOH is a white, deliquescent, corrosive solid (m.p. $\approx591$ K) that dissolves in water with a large exotherm, and readily absorbs atmospheric $\mathrm{CO_2}$: $\mathrm{2NaOH+CO_2\rightarrow Na_2CO_3+H_2O}$. It is the most important industrial alkali: soap and detergent manufacture, paper, rayon/artificial-fibre production, petroleum refining, bauxite purification (dissolving amphoteric $\mathrm{Al_2O_3}$ as aluminate), mercerisation of cotton, and general laboratory analysis.

A historical/secondary route, **causticisation**, converts sodium carbonate to sodium hydroxide by precipitating the far less soluble calcium carbonate and driving the equilibrium across:

$$\mathrm{Na_2CO_3+Ca(OH)_2\rightarrow2NaOH+CaCO_3\downarrow}$$

Reaction with chlorine is famously condition-dependent — one of the most frequently tested "same reagents, different product" pairs in the whole syllabus:

$$\mathrm{Cl_2+2NaOH\ (cold,\ dilute)\rightarrow NaCl+NaOCl+H_2O}$$
$$\mathrm{3Cl_2+6NaOH\ (hot,\ concentrated)\rightarrow5NaCl+NaClO_3+3H_2O}$$
`),
      visual("process"),
    ],
  },
  {
    id: "carbonate-industry",
    label: "21. Sodium & Potassium Carbonates: Solvay and Leblanc",
    blocks: [
      md(String.raw`
## 21.1 Washing soda, soda ash and the Solvay sequence

- Anhydrous $\mathrm{Na_2CO_3}$: soda ash. $\mathrm{Na_2CO_3\cdot10H_2O}$: washing soda. $\mathrm{Na_2CO_3\cdot H_2O}$: the monohydrate.
- In solution: $\mathrm{CO_3^{2-}+H_2O\rightleftharpoons HCO_3^-+OH^-}$ — basic, because carbonate is the conjugate base of a weak acid.

The Solvay sequence, step by step:

$$\mathrm{NH_3+CO_2+H_2O\rightarrow NH_4HCO_3}\qquad\mathrm{NH_4HCO_3+NaCl\rightarrow NaHCO_3\downarrow+NH_4Cl}$$

The **sparingly soluble** $\mathrm{NaHCO_3}$ is filtered off and calcined: $\mathrm{2NaHCO_3\xrightarrow{\Delta}Na_2CO_3+CO_2+H_2O}$. $\mathrm{CO_2}$ for the process is supplied from limestone, which simultaneously regenerates the ammonia:

$$\mathrm{CaCO_3\xrightarrow{\Delta}CaO+CO_2}\qquad\mathrm{CaO+H_2O\rightarrow Ca(OH)_2}\qquad\mathrm{2NH_4Cl+Ca(OH)_2\rightarrow2NH_3+CaCl_2+2H_2O}$$

Net (approximate): $\mathrm{2NaCl+CaCO_3\rightarrow Na_2CO_3+CaCl_2}$. The whole process works only because $\mathrm{NaHCO_3}$ happens to be unusually insoluble in cold, ammoniated brine — ammonia and most of the $\mathrm{CO_2}$ are recycled, and $\mathrm{CaCl_2}$ is essentially the only waste stream.

**Why the Solvay process cannot make $\mathrm{K_2CO_3}$:** the potassium analogue, $\mathrm{KHCO_3}$, is far too soluble to precipitate efficiently under the same conditions — this single solubility fact is why potassium carbonate needs an entirely different manufacturing route (below).

## 21.2 Uses of sodium carbonate and hydrogencarbonate

$\mathrm{Na_2CO_3}$: softening hard water, manufacture of glass/soap/borax/caustic soda, paper/paint/textile industries, acid–base standardisation and qualitative analysis. $\mathrm{NaHCO_3}$ (from $\mathrm{Na_2CO_3+CO_2+H_2O\rightarrow2NaHCO_3}$, decomposing back on heating): baking powder, a mild antacid, dry-powder fire extinguishers, and laboratory buffering.

> **JEE trap.** Heating $\mathrm{NaHCO_3}$ never gives NaOH — it gives $\mathrm{Na_2CO_3}$.

`),
      md(String.raw`
## 21.3 Potassium carbonate and the historical Leblanc process

$\mathrm{K_2CO_3}$ ("potash," "pearl ash") is highly soluble and deliquescent, used in hard glass, soft soaps, and as a drying/basic laboratory reagent. Since Solvay fails for potassium, historical routes used instead were:

**Leblanc process** (originally for $\mathrm{Na_2CO_3}$, and analogously adaptable): salt-cake stage $\mathrm{NaCl+H_2SO_4\rightarrow NaHSO_4+HCl}$, then $\mathrm{NaCl+NaHSO_4\rightarrow Na_2SO_4+HCl}$; black-ash stage $\mathrm{Na_2SO_4+4C\rightarrow Na_2S+4CO}$, then $\mathrm{Na_2S+CaCO_3\rightarrow Na_2CO_3+CaS}$. Historically important, but polluting, and long superseded by Solvay.

A mixture of $\mathrm{Na_2CO_3}$ and $\mathrm{K_2CO_3}$ has a lower melting point than either pure salt, and is used in the laboratory as a **fusion mixture** for bringing insoluble inorganic materials into solution.

Sodium peroxide's reaction with $\mathrm{CO_2}$ (Section 9.3) connects oxygen chemistry back to carbonate chemistry directly: $\mathrm{2Na_2O_2+2CO_2\rightarrow2Na_2CO_3+O_2}$ — this is precisely the reaction that makes $\mathrm{Na_2O_2}$/$\mathrm{KO_2}$ useful for closed-environment air purification.

**Worked example 21.1.** *Why does $\mathrm{NaHCO_3}$ precipitate in the Solvay tower, when most sodium salts are soluble?* Its solubility in cold, ammoniated brine is unusually low, and the process's high ionic strength (common-ion effect from the ammonium and chloride already present) pushes it further toward crystallisation.

**Worked example 21.2.** *Ignoring losses, how many moles of $\mathrm{Na_2CO_3}$ are obtained from 4 mol NaCl by the Solvay process?* The net stoichiometry uses 2 mol NaCl per 1 mol $\mathrm{Na_2CO_3}$ produced, so 4 mol NaCl gives **2 mol $\mathrm{Na_2CO_3}$**.
`),
    ],
  },
];
