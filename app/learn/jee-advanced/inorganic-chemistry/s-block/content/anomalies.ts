import { md, visual, type SBlockSection } from "./types";

export const ANOMALIES_SECTIONS: SBlockSection[] = [
  {
    id: "lithium-anomaly",
    label: "18. Anomalous Lithium & the Li–Mg Diagonal",
    blocks: [
      md(String.raw`
Lithium differs from the rest of Group 1 because Li and $\mathrm{Li^+}$ are exceptionally small, lithium has the group's highest ionisation enthalpy and electronegativity, and $\mathrm{Li^+}$ has by far the greatest polarising power and hydration enthalpy in the group. Almost every "anomaly" below is a direct consequence of just these facts.

`),
      visual("charge-density"),
      md(String.raw`
## 18.1 Physical anomalies

- Lithium is the **hardest** alkali metal and has the group's highest melting and boiling points.
- It is the **least dense** alkali metal (Section 3.2).
- It reacts less violently with water than Na or K — it stays solid throughout the reaction (high melting point), so the surface reaction proceeds more slowly than the molten-metal reactions of its heavier neighbours.
- Lithium salts are more frequently hydrated, and more covalent, than the corresponding heavier alkali-metal salts.

## 18.2 Oxygen and nitrogen chemistry

Lithium stabilises the small oxide ion rather than the larger peroxide or superoxide ion:

$$\mathrm{4Li+O_2\rightarrow2Li_2O}$$

(a little $\mathrm{Li_2O_2}$ can form under specific conditions, but the normal combustion product is the oxide). Lithium is the **only** alkali metal that reacts directly with nitrogen gas:

$$\mathrm{6Li+N_2\rightarrow2Li_3N}\qquad\mathrm{Li_3N+3H_2O\rightarrow3LiOH+NH_3}$$

The high lattice enthalpy of the small-ion nitride $\mathrm{Li_3N}$ is what makes this direct combination favourable when no other Group 1 metal manages it.

## 18.3 Thermal behaviour: lithium salts decompose like Group 2, not Group 1

$$\mathrm{Li_2CO_3\xrightarrow{\Delta}Li_2O+CO_2}\qquad\mathrm{2LiOH\xrightarrow{\Delta}Li_2O+H_2O}\qquad\mathrm{4LiNO_3\xrightarrow{\Delta}2Li_2O+4NO_2+O_2}$$

By contrast, the heavier alkali nitrates decompose only as far as the nitrite: $\mathrm{2NaNO_3\xrightarrow{\Delta}2NaNO_2+O_2}$.

## 18.4 Solubility and covalency anomalies

- $\mathrm{LiF}$, $\mathrm{Li_2CO_3}$ and $\mathrm{Li_3PO_4}$ are sparingly soluble — the recurring lithium solubility exceptions.
- $\mathrm{LiCl}$ is deliquescent, crystallises as $\mathrm{LiCl\cdot2H_2O}$, and dissolves in alcohol and other donor solvents — direct evidence of real covalent character.
- Solid $\mathrm{LiHCO_3}$ is never isolated; it exists only in solution (contrast: $\mathrm{NaHCO_3}$ and $\mathrm{KHCO_3}$ are stable, isolable solids).
- Covalent character of the lithium halides follows $\mathrm{LiF<LiCl<LiBr<LiI}$.

## 18.5 Lithium hydride and organolithium chemistry

$\mathrm{LiH}$ is the least ionic of the alkali-metal hydrides, yet it still behaves as a genuine saline hydride toward water: $\mathrm{LiH+H_2O\rightarrow LiOH+H_2}$. Lithium's strongly polar C–Li bond in organolithium compounds (Section 13.5) is the organic-chemistry face of the same high-polarising-power argument that explains everything else in this section.

## 18.6 One-cause summary

| Observation | Immediate cause |
|---|---|
| Strong hydration, frequently hydrated salts | tiny $\mathrm{Li^+}$ |
| Covalent halides, organic-solvent solubility | high polarising power |
| $\mathrm{LiF}$ insoluble | exceptionally high lattice enthalpy |
| Carbonate/nitrate/hydroxide decompose to oxide on heating | polarisation of the large anion; stability of compact $\mathrm{Li_2O}$ |
| Direct nitride formation | high lattice stabilisation of $\mathrm{Li_3N}$ |
| Strongest aqueous reducing agent in the group | hydration term dominates the $E^\circ$ cycle (Section 7) |

> **JEE trap.** "Lithium is the least reactive alkali metal" and "lithium is the strongest reducing agent in water" can both be simultaneously correct — the first describes an *observed rate*; the second describes a *thermodynamic driving force*. Keep them separated (Section 7 develops this distinction fully).

**Worked example 18.1.** *Which salt releases $\mathrm{NO_2}$ on heating: $\mathrm{LiNO_3}$ or $\mathrm{NaNO_3}$?* $\mathrm{LiNO_3}$ — it follows the Group-2-like pattern and decomposes to $\mathrm{Li_2O}$, $\mathrm{NO_2}$ and $\mathrm{O_2}$, whereas $\mathrm{NaNO_3}$ stops at the nitrite.

## 18.7 Diagonal relationship: lithium and magnesium

Diagonal similarity arises because moving one place **right** across a period increases nuclear charge/ionic charge, while moving one place **down** a group increases size — the two effects partly cancel, so the charge-density ($z/r$) of Li and Mg end up unusually close:

$$r(\mathrm{Li})\approx152\text{ pm},\ r(\mathrm{Mg})\approx160\text{ pm}\qquad\qquad r(\mathrm{Li^+})\approx76\text{ pm},\ r(\mathrm{Mg^{2+}})\approx72\text{ pm}$$

`),
      visual("diagonal-map"),
      md(String.raw`
| Shared behaviour | Lithium | Magnesium |
|---|---|---|
| Harder than the rest of its own group | yes | yes |
| Reacts comparatively slowly with water | Li slower than Na/K | Mg slow with cold water |
| Direct nitride formation | $\mathrm{Li_3N}$ | $\mathrm{Mg_3N_2}$ |
| Normal oxide favoured | $\mathrm{Li_2O}$ | $\mathrm{MgO}$ |
| Carbonate decomposes on heating | $\mathrm{Li_2CO_3\rightarrow Li_2O+CO_2}$ | $\mathrm{MgCO_3\rightarrow MgO+CO_2}$ |
| Nitrate gives oxide + $\mathrm{NO_2}$ + $\mathrm{O_2}$ | yes | yes |
| Hydroxide decomposes on heating | $\mathrm{LiOH}$ | $\mathrm{Mg(OH)_2}$ |
| Solid bicarbonate not isolable | $\mathrm{LiHCO_3}$ | $\mathrm{Mg(HCO_3)_2}$ |
| Chloride deliquescent, alcohol-soluble | $\mathrm{LiCl}$ | $\mathrm{MgCl_2}$ |
| Fluoride/carbonate/phosphate poorly soluble | characteristic | characteristic |

## 18.8 Limits of the Li–Mg analogy

- Lithium stays monovalent; magnesium is divalent — the analogy is about charge *density*, not identical valence chemistry.
- $\mathrm{LiOH}$ is considerably more soluble and more basic than $\mathrm{Mg(OH)_2}$.
- Magnesium readily forms many six-coordinate aqua and ligand complexes; lithium's coordination preferences run lower (typically four-coordinate, Section 13).
- Magnesium is not an alkali metal and does not reproduce Group 1's oxide/peroxide/superoxide sequence.

> **JEE focus.** A diagonal relationship predicts a *selected list* of real similarities — it is not a claim of identical chemistry, and exam questions routinely test exactly where the analogy breaks.

**Worked example 18.2.** *Why do both $\mathrm{LiNO_3}$ and $\mathrm{Mg(NO_3)_2}$ release brown gas on heating?* Their small, strongly polarising cations both destabilise the nitrate ion toward oxide formation, so both release $\mathrm{NO_2}$ rather than stopping at a nitrite.
`),
    ],
  },
  {
    id: "beryllium-anomaly",
    label: "19. Anomalous Beryllium & the Be–Al Diagonal",
    blocks: [
      md(String.raw`
Beryllium is the smallest Group 2 element. Its high ionisation enthalpy, strong metallic bonding and extreme charge density make its chemistry covalent, hydrolytic, complex-forming and — uniquely for Group 2 — amphoteric. Beryllium departs from its own group even more sharply than lithium departs from Group 1: the ionic-radius jump from $\mathrm{Be^{2+}}$ to $\mathrm{Mg^{2+}}$ is roughly **four times larger** than the jump from $\mathrm{Li^+}$ to $\mathrm{Na^+}$ — a concrete, quantified reason beryllium reads as an even sharper first-member exception than lithium does.

## 19.1 Physical and kinetic anomalies

- Be is far harder and higher-melting than the rest of Group 2.
- It is protected by a thin, adherent $\mathrm{BeO}$ film and, unlike every other Group 2 metal, does **not** react with water at all.
- Be and Mg alone in Group 2 give no characteristic flame colour (Section 8).

## 19.2 Covalent compounds: beryllium chloride

A hypothetical free $\mathrm{Be^{2+}}$ ion would have an enormous charge density, so beryllium instead shares electron density and forms predominantly covalent compounds. $\mathrm{BeCl_2}$'s structure is phase-dependent (Section 14.4): an infinite chloride-bridged chain in the solid (Be four-coordinate), a bridged $\mathrm{Be_2Cl_4}$ dimer in moderate-temperature vapour, and a linear two-coordinate monomer only in high-temperature vapour.

$\mathrm{BeH_2}$ (Section 12.2) is likewise polymeric in the condensed state, held together by three-centre two-electron Be–H–Be bonds — the same electron-deficient bonding motif found in diborane.

## 19.3 The amphoteric oxide and hydroxide

$$\mathrm{BeO+2HCl\rightarrow BeCl_2+H_2O}\qquad\mathrm{BeO+2OH^-+H_2O\rightarrow[Be(OH)_4]^{2-}}$$
$$\mathrm{Be(OH)_2+2H^+\rightarrow Be^{2+}+2H_2O}\qquad\mathrm{Be(OH)_2+2OH^-\rightarrow[Be(OH)_4]^{2-}}$$

The species formed in concentrated alkali is most safely named the tetrahydroxidoberyllate(II) ion, $[\mathrm{Be(OH)_4}]^{2-}$.

## 19.4 Hydrolysis: why beryllium salt solutions are acidic

Strong polarisation of coordinated water weakens its own O–H bond, releasing a proton:

$$[\mathrm{Be(H_2O)_4}]^{2+}+\mathrm{H_2O}\rightleftharpoons[\mathrm{Be(H_2O)_3(OH)}]^++\mathrm{H_3O^+}$$

This is the direct mechanistic reason solutions of many beryllium salts test acidic — and it is the same phenomenon (small, highly polarising cation → coordinated-water hydrolysis) responsible for acidic $\mathrm{Al^{3+}}$ solutions in the Be–Al diagonal partner.

## 19.5 Coordination number 4, not 6

The tiny Be centre normally shows coordination number **4**: $\mathrm{BeF_2+2F^-\rightarrow[BeF_4]^{2-}}$. Tetrahedral $[\mathrm{BeF_4}]^{2-}$ and aquated $[\mathrm{Be(H_2O)_4}]^{2+}$ are the standard examples. Six-coordination is not normally available to beryllium at the introductory level — the ion is simply too small to comfortably accommodate a larger ligand set, unlike its heavier Group 2 relatives.

The simple radius-ratio rule (predicting coordination number from the cation/anion radius ratio) correctly predicts the real monoxide structures for the small end of the group — $\mathrm{BeO}$ four-coordinate, $\mathrm{MgO}$ and $\mathrm{CaO}$ six-coordinate — but it *fails* for the two largest members: it predicts eight-coordination for $\mathrm{SrO}$ and $\mathrm{BaO}$, yet both are experimentally six-coordinate like $\mathrm{MgO}$ and $\mathrm{CaO}$. This is a genuinely useful, quantified example of the rule's known limitation (ionic radii are not perfectly fixed, hard spheres, and vary somewhat with coordination number themselves) rather than a reason to distrust it near the small, beryllium-dominated end of the group where it works well.

## 19.6 Carbide distinction (cross-reference to Section 11.2)

Beryllium carbide is a methanide; calcium carbide is an acetylide — hydrolysis gives different hydrocarbons ($\mathrm{CH_4}$ versus $\mathrm{C_2H_2}$), making this a favourite identification test.

## 19.7 Safety note

Beryllium dust and soluble beryllium compounds are genuinely toxic. Discussing its chemistry academically does not imply it is safe to handle without proper controls.

> **JEE trap.** Do not apply "Group 2 compounds are ionic, and hydroxides are basic" to beryllium without checking — Be is the systematic first-member exception to both halves of that statement.

## 19.8 Diagonal relationship: beryllium and aluminium

$\mathrm{Be^{2+}}$ and $\mathrm{Al^{3+}}$ have high and comparable charge density, so both display amphoterism, covalency, hydrolysis and a strong tendency to form complexes.

| Property | Be | Al |
|---|---|---|
| Protective oxide film | $\mathrm{BeO}$ | $\mathrm{Al_2O_3}$ |
| Amphoteric oxide | $\mathrm{BeO}$ | $\mathrm{Al_2O_3}$ |
| Amphoteric hydroxide | $\mathrm{Be(OH)_2}$ | $\mathrm{Al(OH)_3}$ |
| Covalent, electron-deficient halide | polymeric/bridged $\mathrm{BeCl_2}$ | dimeric $\mathrm{Al_2Cl_6}$ |
| Chloride hydrolyses in water | strongly | strongly |
| Lewis-acid behaviour | yes | yes |
| Fluoro-complex | $[\mathrm{BeF_4}]^{2-}$ | $[\mathrm{AlF_6}]^{3-}$ |
| Carbide hydrolysis gives methane | $\mathrm{Be_2C}$ | $\mathrm{Al_4C_3}$ |
| Dissolves in strong alkali | as beryllate | as aluminate |

## 19.9 Amphoteric reactions, side by side

$$\mathrm{Be(OH)_2+2OH^-\rightarrow[Be(OH)_4]^{2-}}\qquad\mathrm{Al(OH)_3+OH^-\rightarrow[Al(OH)_4]^-}$$
$$\mathrm{Be+2OH^-+2H_2O\rightarrow[Be(OH)_4]^{2-}+H_2}\qquad2\mathrm{Al+2OH^-+6H_2O\rightarrow2[Al(OH)_4]^-+3H_2}$$

A further, less commonly quoted parallel: both metals are rendered passive by **concentrated nitric acid** — a protective oxide layer forms and stops further reaction, the same passivation behaviour, on the same reagent, for both elements. The standard electrode potentials also make the size of the analogy concrete: $E^\circ(\mathrm{Be^{2+}/Be})\approx-1.85\text{ V}$ and $E^\circ(\mathrm{Al^{3+}/Al})\approx-1.66\text{ V}$ sit much closer to each other than beryllium sits to the rest of its own group ($E^\circ$ for Ca/Sr/Ba all cluster around $-2.87$ to $-2.90\text{ V}$) — a quantitative way of seeing that Be genuinely behaves more like its diagonal neighbour than like its own group-mates.

## 19.10 Carbide hydrolysis, side by side

$$\mathrm{Be_2C+4H_2O\rightarrow2Be(OH)_2+CH_4}\qquad\mathrm{Al_4C_3+12H_2O\rightarrow4Al(OH)_3+3CH_4}$$

## 19.11 Where the Be–Al analogy breaks

- Be is essentially restricted to coordination number 4; Al routinely reaches 6.
- Aluminium has a robust, universal $+3$ oxidation state and extensive metallic/redox chemistry that beryllium simply does not have.
- $\mathrm{AlCl_3}$ is an important Friedel–Crafts catalyst; beryllium compounds are hazardous and are not used interchangeably with it.
- Even the *bonding structures* differ in detail: solid $\mathrm{BeCl_2}$ is an extended chain, while molecular $\mathrm{AlCl_3}$ typically associates only as far as the discrete dimer $\mathrm{Al_2Cl_6}$.

> **JEE trap.** Similar charge density explains the Be–Al analogy — but "both lie in the same group" is false (they don't), and "both compounds always have identical structures" is also false, as the chloride comparison above shows directly.

**Worked example 19.1.** *Write equations showing that $\mathrm{Be(OH)_2}$ is amphoteric.* $\mathrm{Be(OH)_2+2H^+\rightarrow Be^{2+}+2H_2O}$ and $\mathrm{Be(OH)_2+2OH^-\rightarrow[Be(OH)_4]^{2-}}$ — reacting with both an acid and a base is the operational definition of amphoterism.
`),
    ],
  },
];
