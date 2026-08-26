/**
 * COMPREHENSIVE S-BLOCK NOTES - ORIGINAL CONTENT
 * Written from first principles - no copyright issues
 * Covers Group 1 & Group 2 - all JEE Advanced topics
 */

import { md, type SBlockSection } from "./types";

export const COMPREHENSIVE_NOTES: SBlockSection[] = [
  {
    id: "fundamentals",
    label: "1. Understanding the s-Block: Core Principles",
    blocks: [
      md(String.raw`
## What Makes the s-Block Unique?

The s-block comprises two groups: those with one valence electron (Group 1) and those with two (Group 2). Their chemistry is fundamentally governed by five interconnected factors:

1. **Atomic radius and how it grows down the periodic table**
2. **Ionization energy—the energy needed to remove electrons**
3. **Hydration energy—how strongly water surrounds the ion**
4. **Lattice energy—how tightly the crystal holds together**
5. **Polarizing power—how strongly a small cation distorts nearby electron clouds**

These factors constantly compete, and understanding which one dominates in any given situation is the key to predicting behavior.

### Why Group 1 and Group 2 Are So Different

**Group 1 elements (M⁺ ions)** donate one electron to form metallic bonds and ionic compounds. This single electron gives them:
- Low metallic bonding strength
- Weak lattice energies in salts
- Lower hydration energies

**Group 2 elements (M²⁺ ions)** donate two electrons. The +2 charge creates:
- Stronger metallic bonding
- Much higher lattice energies
- Significantly stronger hydration

The +2 charge also makes Group 2 cations much smaller for their period, leading to higher charge density—which explains why their chemistry "feels" different despite being in the same block.

### The First-Member Problem

Both lithium and beryllium behave very differently from their heavier congeners. This happens because:
- They are exceptionally **small**
- Their high **charge density** (charge per unit volume) is extreme
- They **polarize neighboring atoms strongly**, creating partial covalent character even in what should be ionic compounds
- This effect becomes weaker as you move down each group

Understanding this pattern—not just memorizing exceptions—is what separates strong students from weak ones.
`),
    ],
  },
  {
    id: "group1-overview",
    label: "2. Group 1: The Alkali Metals",
    blocks: [
      md(String.raw`
## Electronic Configuration and Reactivity

Every member of Group 1 has the configuration [noble gas]ns¹. Removing this single valence electron leaves a complete noble-gas core, which is extremely stable. The second ionization enthalpy is therefore enormous—so enormous that +2 ions never form under normal conditions.

The term "alkali metal" refers to their most characteristic reaction: with water, they produce strongly alkaline hydroxides.

### How Size and Structure Change Down the Group

- **Lithium to cesium**: Each step down adds a new electron shell
- **Atomic radius**: Roughly 150 pm to 265 pm
- **Melting points**: Drop significantly (181°C → 28.5°C) because metallic bonding weakens as atoms grow larger and contribute only one electron each
- **Density anomaly**: Potassium is less dense than sodium—atomic volume grows faster than atomic mass

This last point illustrates why memorizing trends without understanding is dangerous: some trends are smooth, others have kinks. Always ask *why*.

### Chemical Reactivity Patterns

The tendency to lose electrons increases down the group—lithium is the strongest reducing agent when measured thermodynamically. However, lithium reacts gently with water while potassium reacts violently. This paradox reveals a critical distinction:

- **Thermodynamic driving force** (ΔG): Determined by electrode potential. Li is stronger.
- **Kinetic reality** (reaction rate): Determined by melting point, surface area, activation barriers. K reacts faster because it melts easily and spreads across the water surface.

Many JEE trap questions exploit this distinction.
`),
    ],
  },
  {
    id: "group2-overview",
    label: "3. Group 2: The Alkaline-Earth Metals",
    blocks: [
      md(String.raw`
## The Stability of the +2 State

All Group 2 metals form M²⁺ cations exclusively. Removing both ns electrons exposes a noble-gas core, and a third ionization would need to break into this closed shell—an energetically prohibitive barrier.

The +2 state is not a choice; it is the only option that makes thermochemical sense.

### Physical Properties: A Different Metallic Character

Compared to Group 1 metals:
- **Density**: Generally higher (1.5–3.6 g cm⁻³ vs. 0.5–2.0 for Group 1)
- **Hardness**: Noticeably harder and less malleable
- **Melting points**: No clear trend—some rise, some fall—because different crystal structures compete as cation size changes
- **Reactivity with water**: Generally less vigorous than Group 1, with beryllium and magnesium reacting only with steam

This variation in melting point and hardness reflects the subtlety of metallic bonding: two factors compete—the number of delocalized electrons (two for Group 2, one for Group 1) and the size of the cation core.

### Why Their Chemistry Feels Different

The +2 charge in a small cation creates extraordinary hydration and lattice energies. For example:
- Magnesium chloride *hydrates*: MgCl₂·6H₂O (the water is locked in by electrostatic attraction)
- Calcium hydroxide has low solubility: lattice energy and cation polarization dominate

This high charge density also triggers hydrolysis: the strongly polarized water molecules coordinated to the cation release H⁺ ions, making the solution weakly acidic—another first-year chemistry paradox.
`),
    ],
  },
  {
    id: "periodic-trends",
    label: "4. Periodic Trends: Size, Ionization, Hydration",
    blocks: [
      md(String.raw`
## Master Table: The Data You Must Know

| Property | Trend Down Group 1 | Trend Down Group 2 | Physical Reason |
|----------|--------------------|--------------------|-----------------|
| **Atomic radius** | Increases steadily | Increases steadily | New electron shell added each period |
| **Ionic radius (M⁺ or M²⁺)** | Increases steadily | Increases steadily | Same reason; smaller cations due to higher Z |
| **First ionization energy** | Decreases | Decreases | Valence electron farther from nucleus, more shielded |
| **Hydration energy magnitude** | Decreases (Li⁺ > Cs⁺) | Decreases (Be²⁺ > Ba²⁺) | Smaller, more highly charged ions polarize water more |
| **Metallic bonding strength** | Decreases | Roughly constant or irregular | Fewer delocalized electrons vs. larger cation core |
| **Melting point** | Falls (Li: 181°C → Cs: 28.5°C) | No simple pattern (varies 973–1560 K) | Metallic bonding weakens for Group 1; crystal packing competes for Group 2 |
| **Solubility of hydroxides** | Increases | Generally increases (with anomalies) | Decreased lattice energy as cations grow |

### Critical Insight: Don't Just Memorize Orders

For every trend, ask: Is it driven by size, charge, shielding, or a competition between two factors? Example:

**Question**: Why does lithium hydroxide have lower solubility than sodium hydroxide, even though lithium is smaller?

**Answer**: The ionic strength of the LiOH solution is lower (fewer ions per mole of dissolved compound), but more importantly, the high polarizing power of Li⁺ distorts the OH⁻ ion, creating partial covalent character and reducing solubility.

This is the kind of thinking JEE Advanced demands.
`),
    ],
  },
  {
    id: "reactions",
    label: "5. Reactions: Organized by Type",
    blocks: [
      md(String.raw`
## With Water and Oxygen

### Reactions with Water

**Group 1 metals** react directly with water to give hydroxides and hydrogen gas:

$$2\\mathrm{M + 2H_2O \\rightarrow 2MOH + H_2↑}$$

The violence of the reaction increases down the group:
- Lithium: Reacts gently, hydrogen ignites gradually
- Sodium: Vigorous, heat can ignite the metal itself
- Potassium and below: Violent, often with a pink/lilac flame from combustion of potassium

**Group 2 metals** react more slowly:
- Beryllium and Magnesium: No reaction with cold water; steam gives oxide + hydrogen
- Calcium and heavier: Reaction with cold water, but less violent than Group 1 analogs

### Reactions with Oxygen

The type of product depends on the metal and the oxygen supply:

- **Li + limited O₂ → Li₂O** (normal oxide with O²⁻)
- **Na + limited O₂ → Na₂O₂** (peroxide with O₂²⁻, pale yellow)
- **K, Rb, Cs + O₂ → MO₂** (superoxide with O₂⁻, colored)

Each contains a different oxygen species with distinct properties:
- Oxides: Ionic, react with water to form bases
- Peroxides: Oxidizing, release H₂O₂ with water or acid
- Superoxides: Strong oxidizers, used in life-support systems

## With Halogens and Other Nonmetals

All Group 1 and 2 metals form halides (MX or MX₂), though the strength of the ionic bonding varies:

$$\\mathrm{2M + X_2 \\rightarrow 2MX}$$

**Lithium halides** show exceptional covalent character (LiI is the most covalent). This happens because the tiny Li⁺ ion can distort the large, polarizable halide ion so strongly that electron density is pulled toward the metal.

### With Nitrogen and Sulfur

**Only lithium** reacts directly with N₂ to form a nitride:

$$6\\mathrm{Li + N_2 \\rightarrow 2Li_3N}$$

This is another first-member anomaly: the high lattice energy of the small Li₃N crystal makes this reaction favorable when it would not be for heavier alkali metals.

All Group 1 and 2 metals form sulfides and polysulfides with sulfur:

$$\\mathrm{2M + S \\rightarrow M_2S}$$

Polysulfides Na₂Sₙ (with chains of sulfur atoms) form under certain conditions.
`),
    ],
  },
  {
    id: "oxides-detailed",
    label: "6. Oxides, Hydroxides, and Oxygen Species",
    blocks: [
      md(String.raw`
## Oxides: Three Different Forms, One Formula

### Normal Oxides (M₂O or MO)

These contain the O²⁻ ion and are simple ionic compounds. All are white or colorless solids that react readily with water:

$$\\mathrm{Li_2O + H_2O \\rightarrow 2LiOH}$$

**K₂O is unusually colored** (pale yellow), but this is an anomaly of the solid state, not the ions themselves.

### Peroxides (M₂O₂)

These contain the O₂²⁻ ion (two oxygen atoms bonded with a single O—O bond).

**Sodium peroxide Na₂O₂** is pale yellow and is industrially important:
- Used for bleaching paper and fabrics
- Reacts with CO₂ to simultaneously absorb CO₂ and release O₂ (used in submarines and spacecraft)
- A powerful oxidizing agent; reactions with reducing agents can be violent

With water: $$\\mathrm{2Na_2O_2 + 2H_2O \\rightarrow 4NaOH + O_2↑}$$

### Superoxides (MO₂)

These contain the O₂⁻ ion (a radical species with one unpaired electron). They are colored:
- KO₂: Orange
- RbO₂: Brown
- CsO₂: Orange

**Potassium superoxide KO₂** is even better than peroxide for life-support applications:
$$4\\mathrm{KO_2 + 2CO_2 + 2H_2O \\rightarrow 4KHCO_3 + 3O_2}$$

It absorbs CO₂ and releases O₂ in a single reaction—ideal for spacecraft.

### Why These Different Forms?

Cation size matters. Small cations (Li⁺, Na⁺) stabilize small, compact oxide ions (O²⁻). Larger cations (K⁺, Rb⁺, Cs⁺) better accommodate the larger peroxide and superoxide ions, where the charge is spread over two atoms.

This illustrates a principle: **ion-size matching determines which structure forms**.

## Hydroxides: Basicity Increases, Solubility Varies

### Group 1 Hydroxides

All are white, crystalline solids. Basicity increases down the group (more OH⁻ is released into solution).

**Solubility is anomalous**: LiOH is the *least* soluble (because the high charge density of Li⁺ creates partial covalent character), while CsOH is the most soluble. This order reverses what you'd predict from size alone.

### Group 2 Hydroxides

General trend: Be(OH)₂ < Mg(OH)₂ < Ca(OH)₂ < Sr(OH)₂ < Ba(OH)₂

**Be(OH)₂ is amphoteric**: It dissolves in excess strong base by forming a complex:

$$\\mathrm{Be(OH)_2 + 2NaOH \\rightarrow Na_2[Be(OH)_4]}$$

This reflects beryllium's diagonal relationship to aluminum and its higher charge density (charge per unit volume).

**Calcium hydroxide** (slaked lime) has low but measurable solubility (~1.5 g/L at room temperature), which is high enough to be useful in water softening and construction.

**Barium hydroxide** is quite soluble and a strong base—one of the few hydroxides that readily forms hydrated crystals (Ba(OH)₂·8H₂O).
`),
    ],
  },
  {
    id: "carbonates",
    label: "7. Carbonates and Bicarbonates",
    blocks: [
      md(String.raw`
## The Carbonates: Solubility vs. Thermal Stability

### Solubility Patterns

**Group 1**: All common alkali metal carbonates are soluble, except Li₂CO₃, which has limited solubility (the usual anomaly for lithium).

**Group 2**: All Group 2 carbonates are sparingly soluble or insoluble:
- BeCO₃: Soluble in acid but hydrolyzes in water
- MgCO₃, CaCO₃, SrCO₃, BaCO₃: Progressively less soluble

The reason is charge density: the M²⁺ ion polarizes the CO₃²⁻ ion, and the lattice energy is high enough that dissolution doesn't offset it.

### Thermal Stability

**Group 1 carbonate stability increases** down the group:
$$\\mathrm{Li_2CO_3 \\rightarrow Li_2O + CO_2}$$ (decomposes on heating)

Heavier carbonates are stable at practical heating temperatures.

**Group 2 carbonates decompose completely on heating** (this is how quicklime is made):
$$\\mathrm{MCO_3 \\rightarrow MO + CO_2}$$

Why? The high charge density of M²⁺ polarizes the carbonate ion so severely that the C—O bonds weaken, and CO₂ is expelled.

The trend is: **As the cation grows larger, decomposition temperature increases** (more heat needed to break apart the ion).

## Bicarbonates: The Soluble Alternative

### Formation and Behavior

Bicarbonates (HCO₃⁻) form when CO₂ is bubbled through a carbonate solution:
$$\\mathrm{MCO_3 + H_2O + CO_2 \\rightarrow M(HCO_3)_2 \\text{ (or MHCO_3 for M = Group 1)}}$$

**Group 1 bicarbonates** are soluble; NaHCO₃ is familiar as baking soda.

**Group 2 bicarbonates** exist only in solution (except as hydrated solids at low temperature). Ba(HCO₃)₂ does not form solid salts.

**Lithium bicarbonate is special**: Even LiHCO₃ has limited solubility (consistent with lithium's anomalies).

### Industrial Importance

The carbonate-bicarbonate equilibrium is behind limestone dissolution by rainwater, cave formation, and water hardness. In the Solvay process (industrial production of sodium carbonate), the equilibrium:

$$\\mathrm{2NaHCO_3 \\xrightarrow{\\Delta} Na_2CO_3 + H_2O + CO_2}$$

is exploited: heating solid NaHCO₃ produces Na₂CO₃ (washing soda).
`),
    ],
  },
  {
    id: "first-members",
    label: "8. First-Member Anomalies: Lithium and Beryllium",
    blocks: [
      md(String.raw`
## Why Are They Different? The Charge-Density Explanation

**Lithium** is the smallest Group 1 cation, with the highest charge density (charge per unit volume). **Beryllium** is even smaller and has an even higher charge density as a 2+ ion.

Consequence: Both polarize neighboring anions and water molecules with extraordinary strength, leading to:
1. Increased covalent character in compounds
2. Unusual hydration behavior
3. Different reaction patterns from heavier congeners
4. Exceptional lattice energies

### Lithium's Anomalies

**Physical properties**:
- Hardest and highest-melting of the alkali metals (not the weakest)
- Lowest density of all metals
- Least soluble hydroxide in its group (opposite the size trend)

**Chemical properties**:
- Forms the only Group 1 nitride: Li₃N
- LiOH is sparingly soluble (high lattice energy, partial covalency)
- Lithium salts are often hydrated (LiCl·2H₂O) due to strong hydration
- LiHCO₃ exists only in solution (unlike NaHCO₃, which is solid)
- Lithium carbonate decomposes on heating: Li₂CO₃ → Li₂O + CO₂

All of these reflect the small, highly polarizing Li⁺ ion.

### Beryllium's Anomalies

**Passivation**: Beryllium doesn't react with water or steam (unlike other Group 2 metals) because a thin, impermeable oxide film forms and blocks further reaction.

**Amphoterism**: Be(OH)₂ dissolves in excess base:
$$\\mathrm{Be(OH)_2 + 2OH^- \\rightarrow [Be(OH)_4]^{2-}}$$

This behavior is more like aluminum than calcium, reflecting beryllium's diagonal relationship.

**Hydrolysis**: BeO and Be(OH)₂ readily hydrolyze:
$$\\mathrm{Be^{2+} + H_2O \\rightarrow Be(OH)^+ + H^+}$$

**Covalency**: BeCl₂ is molecular and covalent, not ionic. It even forms dimers in the vapor phase (Be₂Cl₄), with chlorine atoms bridging two beryllium centers—not classical ionic behavior.

**Complexity**: Beryllium forms unusual complexes like [Be(CO₃)₃]⁴⁻ because its small size and high charge allow multiple coordinations.

### A Rule of Thumb

Whenever you see a Group 1 or 2 anomaly, ask: Is the first member unusually small with unusually high charge density? The answer is almost always yes, and polarization is almost always the mechanism.
`),
    ],
  },
  {
    id: "industrial",
    label: "9. Industrial Processes and Materials",
    blocks: [
      md(String.raw`
## Sodium Compounds: The Industrial Backbone

### Sodium Hydroxide (Caustic Soda)

Produced by electrolysis of aqueous or molten NaCl (38.7 million tonnes annually). Two methods:

1. **Diaphragm cell**: Aqueous NaCl electrolysis with a porous diaphragm separating cathode (where NaOH forms) from anode (where Cl₂ forms)
2. **Mercury cathode cell**: Higher purity NaOH but more environmental concern

Uses: Organic synthesis, neutralization, soap production, paper processing, aluminum extraction.

### Sodium Carbonate (Washing Soda)

Produced by the **Solvay process** (or ammonia-soda process):
$$\\mathrm{NaCl + NH_3 + CO_2 + H_2O \\rightarrow NaHCO_3 + NH_4Cl}$$
$$2\\mathrm{NaHCO_3 \\rightarrow Na_2CO_3 + H_2O + CO_2}$$

The process is elegant: it converts cheap NaCl and limestone (CaCO₃) into soda ash with minimal waste.

Uses: Glass manufacture, water treatment, detergents, pH buffering.

### Sodium Bicarbonate (Baking Soda)

Produced from the Solvay process intermediate.

Uses: Leavening agent (decomposes on heating to release CO₂), industrial chemical production, fire extinguishers, antacids.

### Sodium Sulfate and Other Salts

**Na₂SO₄**: Used in the Kraft process for paper pulping (~70% of production) and glass manufacturing.

**NaCl**: Beyond industrial chlor-alkali, used for de-icing, food preservation, and chemical synthesis.

## Calcium Compounds: Structural Materials

### Calcium Carbonate (Limestone)

Natural mineral, also produced industrially. Roasting CaCO₃ gives quicklime:
$$\\mathrm{CaCO_3 \\xrightarrow{\\Delta} CaO + CO_2}$$

Adding water produces slaked lime:
$$\\mathrm{CaO + H_2O \\rightarrow Ca(OH)_2}$$

**Lime cycle**: When exposed to air, Ca(OH)₂ reabsorbs CO₂:
$$\\mathrm{Ca(OH)_2 + CO_2 \\rightarrow CaCO_3 + H_2O}$$

This cycle is the basis of limestone mortar, a construction material for millennia.

### Cement and Concrete

Portland cement is made by heating limestone with clay at high temperature. The product contains calcium silicates and aluminates that hydrate when mixed with water, creating a rigid matrix.

Concrete (cement + sand + gravel) is one of the most widely used materials globally.

### Gypsum and Plaster

**Gypsum** CaSO₄·2H₂O occurs naturally. Heating to ~150°C removes one water molecule:
$$\\mathrm{CaSO_4\\cdot2H_2O \\xrightarrow{150°C} CaSO_4\\cdot\\frac{1}{2}H_2O + 1.5H_2O}$$

The hemihydrate (plaster of Paris) rehydrates when mixed with water, setting into a solid used for casting and wallboard.

## Magnesium: Lightweight Alloys

Magnesium metal is extracted from seawater via:
$$\\mathrm{Mg^{2+} + 2OH^- \\rightarrow Mg(OH)_2}$$

Subsequent electrolysis gives Mg metal, which is alloyed with aluminum for lightweight components in aircraft and automotive applications.
`),
    ],
  },
  {
    id: "jee-patterns",
    label: "10. JEE Advanced Patterns and Problem Types",
    blocks: [
      md(String.raw`
## Common Question Types

### Type 1: Periodic Order Questions

**What you'll see**: "Arrange these in order of..." (solubility, thermal stability, reactivity, etc.)

**What to do**:
1. Identify which factor dominates (size, charge density, lattice energy, hydration energy, or a competition)
2. Check if first members (Li, Be) are anomalies
3. Remember that orders can reverse depending on the property (e.g., hydroxide vs. sulfate solubility)

**Example trap**: "Arrange in order of basic strength: LiOH, NaOH, KOH, CsOH."
- Naive answer: LiOH < NaOH < KOH < CsOH (increasing as cations grow)
- Trap: LiOH is actually the **weakest base** because it has limited solubility (covalent character), not because the OH⁻ is weaker

### Type 2: Thermodynamics vs. Kinetics

**What you'll see**: "Why does lithium react gently with water but potassium violently, even though lithium has a more negative electrode potential?"

**What to do**:
- Remember: E° tells you the *driving force*, not the *rate*
- Reaction rate depends on melting point, surface area, and activation barriers
- Lithium: High melting point → stays solid → slow
- Potassium: Low melting point → melts on reaction heat → spreads → fast

### Type 3: Oxygen Species Identification

**What you'll see**: A compound with unclear structure; you must identify whether it contains O²⁻, O₂²⁻, or O₂⁻.

**What to do**:
- Peroxides (O₂²⁻): Diamagnetic, pale yellow, release H₂O₂ with dilute acid
- Superoxides (O₂⁻): Paramagnetic (unpaired electron), colored, release both O₂ and H₂O₂ with water

### Type 4: Anomalies in Compounds

**What you'll see**: "Why is LiF sparingly soluble while NaF, KF, etc. are soluble?" or "Why does BeO behave like Al₂O₃?"

**What to do**:
- Always suspect charge density as the mechanism
- Lithium and beryllium are often the exceptions
- Ask: Does the small, highly polarizing cation distort the anion enough to create partial covalency?

### Type 5: Multi-Step Identification

**What you'll see**: A white solid A that decomposes to B on heating, reacts with CO₂ to give C, etc. Identify A, B, C, ...

**What to do**:
- Build the logic chain step by step
- Remember: CaCO₃ → CaO (white) → Ca(OH)₂ (slakes) → CaCO₃ (reabsorbs CO₂)
- Don't jump to conclusions; use each observation to narrow the field

## Master Concepts (Not to Memorize, But to Understand)

1. **Charge density controls behavior**: Small, highly charged cations (Li⁺, Be²⁺) are anomalous
2. **Ion-size matching**: Cation size must match anion size for stability (peroxides with large K⁺, oxides with small Li⁺)
3. **Competing energies**: Lattice energy vs. hydration energy determines solubility
4. **Thermodynamics ≠ kinetics**: A reaction can be driven but slow, or poorly driven but fast
5. **Crystal packing matters**: Group 2 melting points don't follow a simple trend because different crystal structures compete

## Common Pitfalls

- ❌ Memorizing every order without asking *why*
- ❌ Confusing E° (driving force) with reaction rate
- ❌ Forgetting that lithium and beryllium are exceptions
- ❌ Thinking solubility always decreases as cations grow (opposite for sulfates!)
- ❌ Assuming "ionic compound" means purely ionic bonding (LiF has significant covalency)
`),
    ],
  },
];
