/**
 * J.D. Lee Reference Material Integration
 * Enhanced data tables, detailed chemistry, and industrial processes
 * Seamlessly integrates with existing website content
 */

import { md, type SBlockSection } from "./types";

export const JD_LEE_ENHANCEMENTS: SBlockSection[] = [
  {
    id: "jd-lee-structures-metals",
    label: "Metal Structures & Cohesive Energy",
    blocks: [
      md(String.raw`
## Structures of Metals, Hardness and Cohesive Energy

At normal temperatures all Group 1 metals adopt a **body-centred cubic (bcc) lattice** with coordination number 8. However, at very low temperatures **lithium forms a hexagonal close-packed structure** with coordination number 12.

### Cohesive Energy

The cohesive energy is the force holding atoms or ions together in the solid — the energy required to break the solid into gaseous atoms. It follows a clear trend down Group 1:

| Metal | Cohesive Energy (kJ mol⁻¹) |
|-------|---------------------------|
| Li | 161 |
| Na | 108 |
| K | 90 |
| Rb | 82 |
| Cs | 78 |

**Key insight:** The softness and low hardness of Group 1 metals are direct consequences of their low cohesive energy. As you descend the group, the cohesive energy decreases because each atom contributes only **one valence electron** to the metallic "sea," and this bonding becomes progressively weaker as the atoms grow larger.

Compare with Group 2: the cohesive energies of Group 1 metals are about **half** those for Group 2 elements and **one-third** those for Group 13 elements — reflecting the difference in metallic bonding strength.
`),
    ],
  },
  {
    id: "jd-lee-flame-colors",
    label: "Flame Colours & Spectroscopic Data",
    blocks: [
      md(String.raw`
## Flame Colours and Wavelengths

The low ionization energies of Group 1 elements mean that when these metals are heated in a flame, the light energy absorbed may be sufficient to make an atom lose an electron and emit characteristic **photelectrons**. These colours are used both in flame tests and in photoelectric cells.

| Element | Flame Colour | Wavelength (nm) | Wavenumber (cm⁻¹) |
|---------|--------------|-----------------|------------------|
| Li | Crimson | 670.8 | 14,908 |
| Na | Yellow | 589.2 | 16,972 |
| K | Lilac | 766.5 | 13,046 |
| Rb | Red-violet | 780.0 | 12,821 |
| Cs | Blue | 455.5 | 21,954 |

### Flame Colour Origin

The colour arises from **electronic transitions in short-lived species** formed momentarily in the flame. For sodium, the characteristic **D-line** (actually a doublet at 589.0 nm and 589.6 nm) arises from the electronic transition **3s¹ → 3p¹** in sodium atoms formed in the flame. Different elements show different transitions, so lithium's red line comes from a short-lived **LiOH species**.

These characteristic flame colorations of the **emission spectra** are used for analytical determination by **flame photometry**. A solution of a Group 1 salt is aspirated into an oxygen–gas flame in a flame photometer. The intensity of the flame colour, measured with a photoelectric cell, is proportional to the concentration of the metal present.
`),
    ],
  },
  {
    id: "jd-lee-reactions-summary",
    label: "Comprehensive Reaction Summary",
    blocks: [
      md(String.raw`
## Summary Table of Group 1 Reactions

| Reaction | Comment |
|----------|---------|
| **M + H₂O → MOH + H₂** | Hydroxides are the strongest bases known |
| **Li + O₂ → Li₂O (monoxide)** | Li forms mainly monoxide; Na forms peroxide, K/Rb/Cs form superoxides |
| **Na + O₂ → Na₂O₂ (peroxide)** | Peroxide formation with controlled oxygen |
| **K + O₂ → KO₂ (superoxide)** | Superoxide formed by K, Rb, Cs in excess oxygen |
| **M + H₂ → MH** | Ionic, salt-like hydrides |
| **Li + N₂ → Li₃N (nitride)** | **Only lithium** forms a nitride — important anomaly |
| **M + P → M₃P** | All metals form phosphides |
| **M + S → M₂S** | All metals form sulphides |
| **M + F₂ → MF** | All metals form fluorides |
| **M + Cl₂ → MCl** | All metals form chlorides |
| **M + Br₂ → MBr** | All metals form bromides |
| **M + I₂ → MI** | All metals form iodides |
| **M + NH₃ → MNH₂** | All metals form amides |

### Reaction with Water

Group 1 metals **all react with water**, liberating hydrogen and forming hydroxides:

$$\mathrm{2Li + 2H_2O \rightarrow 2LiOH + H_2}$$
$$\mathrm{2Na + 2H_2O \rightarrow 2NaOH + H_2}$$
$$\mathrm{2K + 2H_2O \rightarrow 2KOH + H_2}$$

The reaction becomes **increasingly violent on descending the group**:
- Lithium reacts **gently** with water; the molten metal skates about vigorously
- Sodium **melts on the surface** of water (especially if localized) and may catch fire
- Potassium **always catches fire** — the molten metal spreads out and exposes a large surface to the water, releasing heat faster than in the sodium case

### Electrode Potentials & Thermodynamics vs. Kinetics

Standard electrode potentials are:
- Li⁺|Li = **−3.05 V**
- Na⁺|Na = **−2.71 V**
- K⁺|K = **−2.93 V**
- Rb⁺|Rb = **−2.92 V**
- Cs⁺|Cs = **−2.92 V**

Lithium has the **most negative standard electrode potential** of any element in the periodic table, largely because of its **high hydration energy**. This makes Li thermodynamically the strongest reducing agent.

**Critical JEE concept:** The paradox is that **lithium reacts gently with water, while potassium reacts violently**, even though Li is the stronger reducing agent thermodynamically. The explanation lies in **kinetics**:
- **Thermodynamics** (ΔG) determines whether a reaction *can* occur
- **Kinetics** (activation energy and reaction rate) determines how *fast* it actually happens
- Lithium's melting point is high (181°C), so it stays solid and reacts slowly with water
- Potassium's melting point is low (63°C), so it melts easily. The molten metal spreads widely, exposes a large surface to water, and releases heat faster than it can be dissipated — hence the violent, self-accelerating reaction
`),
    ],
  },
  {
    id: "jd-lee-oxides-detail",
    label: "Oxides, Hydroxides, Peroxides & Superoxides",
    blocks: [
      md(String.raw`
## Oxides, Hydroxides, Peroxides and Superoxides (Enhanced)

### Normal Oxides (Monoxides)

The monoxides are **ionic** — e.g., **Li₂O** (containing 2Li⁺ and O²⁻). These form **pure white solids**, as expected. Interestingly, **K₂O is pale yellow** and **Rb₂O is brownish** — explaining the tendency toward deeper colouration in the heavier members.

The typical oxides M₂O are **strongly basic oxides** and react readily with water, forming strong bases:

$$\mathrm{Li_2O + H_2O \rightarrow 2LiOH}$$
$$\mathrm{Na_2O + H_2O \rightarrow 2NaOH}$$
$$\mathrm{K_2O + H_2O \rightarrow 2KOH}$$

### Hydroxides

**Sodium hydroxide (NaOH)** is often called **caustic soda**, and **potassium hydroxide (KOH)** is called **caustic potash**, because of their corrosive properties.

**Solubility of Group 1 Hydroxides** (at 25°C):

| Element | Solubility (g/100 g H₂O) |
|---------|--------------------------|
| Li | 13.0 |
| Na | 108.3 |
| K | 112.8 |
| Rb | 197.6 |
| Cs | 385.6 |

**Critical observation:** LiOH is **much less soluble** than the others — only about 13 g/100 g water at 25°C compared to ~27 molar for a saturated NaOH solution. This is another **first-member anomaly** driven by the small, highly charged **Li⁺** cation, which is so strongly hydrated that the lattice energy of LiOH is comparatively high, reducing its solubility.

### Peroxides

The **peroxides** all contain the **[−O−O]²⁻ ion**. They are **diamagnetic** (all electrons paired) and are **oxidizing agents**. They may be regarded as salts of the dibasic acid H₂O₂:

$$\mathrm{Na_2O_2 + 2H_2O \rightarrow 2NaOH + H_2O_2}$$

**Sodium peroxide (Na₂O₂)** is **pale yellow** in colour. It is used industrially for **bleaching wood pulp, paper and fabrics** such as cotton and linen. It is a **powerful oxidant**, and many of its reactions are dangerously violent, particularly with materials that are **reducing agents** (aluminium powder, charcoal, sulphur, etc.).

**Industrial uses of Na₂O₂:**
- Because it reacts with CO₂ in the air, Na₂O₂ has been used to **purify the air in submarines and confined spaces**, as it both **removes CO₂** and **produces O₂**
- Potassium superoxide (KO₂) is even better for this purpose

Some typical reactions:
$$\mathrm{Na_2O_2 + Al \rightarrow Al_2O_3}$$
$$\mathrm{Na_2O_2 + Cr^{3+} \rightarrow CrO_4^{2-}}$$
$$\mathrm{Na_2O_2 + CO \rightarrow Na_2CO_3}$$
$$\mathrm{2Na_2O_2 + 2CO_2 \rightarrow Na_2CO_3 + O_2}$$

### Superoxides

The **superoxides** contain the ion **[O₂]⁻**, which has an **unpaired electron**. Thus superoxides are **paramagnetic** and are **coloured** (LiO₂ and NaO₂ yellow, KO₂ orange, RbO₂ brown, Cs₂O orange).

**Superoxides are even stronger oxidizing agents than peroxides**, and they give both H₂O₂ and O₂ with either water or acids:

$$\mathrm{KO_2 + 2H_2O \rightarrow KOH + H_2O_2 + \frac{1}{2}O_2}$$

**KO₂ is used in space capsules, submarines, and breathing masks**, because it:
- **Produces dioxygen** and **removes carbon dioxide** — both functions essential in life-support systems
- Removes CO₂ via: $\mathrm{4KO_2 + 2CO_2 \rightarrow 2K_2CO_3 + 3O_2}$
- Can also absorb excess CO₂ with less O₂ production: $\mathrm{4KO_2 + 4CO_2 + 2H_2O \rightarrow 4KHCO_3 + 3O_2}$

### Peroxide vs. Superoxide Structure

The **peroxide ion [−O−O]²⁻** has **18 electrons** and a bond order of **1** (single bond).

The **superoxide ion [O₂]⁻** has **17 electrons** and a bond order of **1.5** (between single and double).

Generally, **large atoms or ions form weaker bonds than small ones**. The **peroxide and superoxide ions are large**, and as the metal ion becomes larger, both peroxides and superoxides become **progressively more stable**. This is why:
- **Lithium** forms mainly the **monoxide** (small cation can't stabilize the peroxide/superoxide)
- **Sodium** forms the **peroxide** (medium cation)
- **K, Rb, Cs** form the **superoxide** (large cations stabilize it best)
`),
    ],
  },
  {
    id: "jd-lee-sulphides",
    label: "Sulphides & Industrial Compounds",
    blocks: [
      md(String.raw`
## Sulphides

The metals all react with sulphur, forming sulphides such as **Na₂S**, and **polysulphides Na₂Sₙ** (where n = 2, 3, 4, 5 or 6). The polysulphide ions are made from **zig-zag chains of sulphur atoms**:

$$\mathrm{-S-S-S-S-S-}$$

Sodium sulphide can also be made by:
- Heating sodium sulphate with carbon: $\mathrm{Na_2SO_4 + 4C \rightarrow Na_2S + 4CO}$
- Passing H₂S into NaOH solution: $\mathrm{NaOH + H_2S \rightarrow NaHS + H_2O}$, then $\mathrm{NaOH + NaHS \rightarrow Na_2S + H_2O}$

**Group 1 sulphides hydrolyse appreciably in water**, giving **strongly alkaline solutions**:

$$\mathrm{Na_2S + H_2O \rightarrow NaHS + NaOH}$$

**Uses of sodium sulphide:**
- Making organic sulphur dyestuffs and in the leather industry to remove hair from hides
- **Na₂S** is readily **oxidized by air** to form sodium thiosulphate, which is used in **photography** (to dissolve silver halides) and as a **laboratory reagent for iodine titrations**

$$\mathrm{2Na_2S + 2O_2 + H_2O \rightarrow 2Na_2S_2O_3 + 2NaOH}$$

## Industrial Sodium Compounds

### Sodium Hydroxide (NaOH)

**Sodium hydroxide is the most important alkali used in industry**. It is produced on a **large scale (38.7 million tonnes in 1994)** by the **electrolysis of an aqueous solution of NaCl** (brine), using either:
- A **diaphragm cell**, or
- A **mercury cathode cell**

At one time it was also made from Na₂CO₃ by the **lime–caustic soda process**, but this is **seldom used nowadays** as electrolytic methods are far more efficient.

### Sodium Hydrogen Carbonate (Sodium Bicarbonate)

About **900,000 tonnes of NaHCO₃** were produced in 1991. Of which:
- **40%** is used for **baking powder**
- **15%** for making other chemicals
- **12%** in pharmaceutical products (antacids for indigestion, antacid preparations)
- **10%** in fire extinguishers
- An **increasing use is flue gas desulphurization**

**NaHCO₃ can be used on its own** to make cakes or bread rise, since it **decomposes between 50°C and 100°C**, giving bubbles of CO₂:

$$\mathrm{2NaHCO_3 \xrightarrow{\text{gentle heat}} Na_2CO_3 + H_2O + CO_2}$$

**Baking powder** is more commonly used and contains **NaHCO₃**, **Ca(H₂PO₄)₂**, and **starch**. The **Ca(H₂PO₄)₂** is acidic, and when moistened it reacts with **NaHCO₃** giving CO₂. The starch is a filler. An improved combination baking powder contains about **40% starch, 30% NaHCO₃, 20% Na₂Al(SO₃), and 10% Ca(H₂PO₄)₂**. The **NaAl(SO₃)** slows the reaction down so the CO₂ is given off more slowly.

### Sodium Sulphate

About **4.3 million tonnes of Na₂SO₄** were used in 1993. About **55%** of this is made synthetically as a **by-product from the manufacture of HCl** and also from many **processes that use H₂SO₄**. About **45%** is mainly obtained by **mining** — the mineral **Glauber's salt Na₂SO₄·10H₂O** is mined.

**Major uses of Na₂SO₄:**
- **70%** — in the **paper industry** (Kraft paper-making process, where a strong alkaline solution of **Na₂SO₄** is used to dissolve the **lignin** that holds the cellulose fibres together)
- **10%** — in **detergents and cleaning**
- **10%** — in **glass manufacture**

In the **Kraft paper-making process**, a strong alkaline solution of **Na₂SO₄** is used at **elevated temperature and high pressure** to dissolve the **lignin** that holds the cellulose fibres together in wood pulp.
`),
    ],
  },
];
