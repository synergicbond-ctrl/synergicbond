import { md, type SBlockSection } from "./types";

export const AEM_NOTES_SECTIONS: SBlockSection[] = [
  {
    id: "aem-introduction",
    label: "Alkaline Earth Metals — Introduction & Overview",
    blocks: [
      md(`
## Alkaline Earth Metals (Group 2)

Group 2 comprises **Be, Mg, Ca, Sr, Ba, Ra** with general valence configuration **ns²**. All members except Be are traditionally called alkaline earth metals because their oxides/hydroxides are alkaline and the metals occur combined as "earths" (refractory oxide minerals) in nature.

### Electronic Configuration & Oxidation State

| Element | Symbol | Configuration | Atomic No. |
|---------|--------|---------------|-----------|
| Beryllium | Be | [He] 2s² | 4 |
| Magnesium | Mg | [Ne] 3s² | 12 |
| Calcium | Ca | [Ar] 4s² | 20 |
| Strontium | Sr | [Kr] 5s² | 38 |
| Barium | Ba | [Xe] 6s² | 56 |
| Radium | Ra | [Rn] 7s² | 88 |

**+2 is the only significant oxidation state.** Removing both ns electrons leaves a noble-gas core, so the third ionization enthalpy is enormous (e.g. IE₃ of Be ≈ 14,847 kJ/mol, Mg ≈ 7,731 kJ/mol) — M³⁺ is never formed.

### Occurrence (Minerals Worth Remembering)

- **Be**: beryl Be₃Al₂Si₆O₁₈ (rare)
- **Mg**: magnesite MgCO₃, dolomite CaCO₃·MgCO₃, carnallite KCl·MgCl₂·6H₂O, seawater
- **Ca**: limestone/chalk/marble (CaCO₃), gypsum CaSO₄·2H₂O, fluorite CaF₂, fluorapatite 3Ca₃(PO₄)₂·CaF₂
- **Sr**: celestite SrSO₄, strontianite SrCO₃
- **Ba**: barytes BaSO₄, witherite BaCO₃
- **Ra**: extreme trace, radioactive; isolated by the Curies from pitchblende
      `),
    ],
  },

  {
    id: "aem-trends",
    label: "Atomic Properties & Periodic Trends",
    blocks: [
      md(`
## Atomic & Ionic Radii

Radii increase steadily down the group as a new shell is added each period. At the same time, Group 2 atoms/ions are smaller than the corresponding Group 1 element of the same period, because the extra proton (higher nuclear charge) pulls the electron cloud in more tightly.

| Quantity | Be | Mg | Ca | Sr | Ba |
|----------|----|----|----|----|-----|
| Metallic radius (pm) | 111 | 160 | 197 | 215 | 222 |
| M²⁺ ionic radius (pm) | 31 | 72 | 100 | 118 | 135 |

## Ionization Enthalpy

| | Be | Mg | Ca | Sr | Ba | Ra |
|---|----|----|----|----|----|----|
| IE₁ (kJ/mol) | 899 | 737 | 590 | 549 | 503 | 509 |
| IE₂ (kJ/mol) | 1757 | 1450 | 1145 | 1064 | 965 | 979 |

**Core Focus:** Why is IE₁(Group 2) > IE₁(Group 1) but IE₂(Group 2) < IE₂(Group 1) for the same period?

- Group 2 atoms are smaller than the Group 1 atom of the same period (higher nuclear charge), so their IE₁ is higher.
- A Group 1 atom, having lost one electron, already has a noble-gas core — pulling out a second electron is extremely costly.
- For Group 2, the second electron removed completes the noble-gas configuration, so IE₂ of Group 2 < IE₂ of Group 1 for the same period.

## Hydration Enthalpy

| M²⁺ | Be²⁺ | Mg²⁺ | Ca²⁺ | Sr²⁺ | Ba²⁺ |
|----|------|------|------|------|------|
| ΔH_hyd (kJ/mol) | −2494 | −1921 | −1577 | −1443 | −1305 |

Hydration enthalpies fall steadily as ionic size increases (weaker ion–dipole pull). Group 2 values run 4–5× larger than the corresponding Group 1 ion (smaller size, double the charge). This is why Group 2 salts crystallize with far more water of hydration than Group 1 salts: MgCl₂·6H₂O, CaCl₂·6H₂O, SrCl₂·6H₂O, BaCl₂·2H₂O exist, while NaCl and KCl are anhydrous.

## Melting Point, Boiling Point, Density

| | Be | Mg | Ca | Sr | Ba | Ra |
|---|----|----|----|----|---|----|
| m.p. (K) | 1560 | 924 | 1124 | 1062 | 1002 | 973 |
| b.p. (K) | 2745 | 1363 | 1767 | 1655 | 2078 | ≈1973 |
| Density (g/cm³) | 1.84 | 1.74 | 1.55 | 2.63 | 3.59 | ≈5.5 |

**Exam Note:** The m.p./b.p./density trend down the group is NOT monotonic. The metals crystallize in different lattice structures: Be and Mg adopt hexagonal close-packed (hcp, CN = 12); Ca and Sr adopt cubic close-packed (ccp/fcc, CN = 12) at room temperature; Ba adopts body-centred cubic (bcc, CN = 8). Group 2 metals are harder and higher-melting than the corresponding Group 1 metals because two valence electrons (not one) participate in metallic bonding — roughly double the cohesive energy.

## Standard Reduction Potential & Reducing Power

| M²⁺/M | Be | Mg | Ca | Sr | Ba | Ra |
|-------|----|----|----|----|---|----|
| E° (V) | −1.85 | −2.37 | −2.87 | −2.89 | −2.91 | −2.92 |

- Reducing power broadly increases Be → Ba, but **Be is anomalous** — its E° is least negative in the group (weakest reducing agent). This indicates Be is much less electropositive (less "metallic") than the rest of the group.
- Ca, Sr, Ba have reduction potentials similar to the corresponding Group 1 metals, and are quite high in the electrochemical series.

**Core Focus:** Why is Be's reducing power weak?

Beryllium has a less negative reduction potential compared to other alkaline earth metals. Its reducing nature is due to the large hydration energy associated with the small size of Be²⁺ ion and relatively large value of the atomization enthalpy of the metal. E° is a net thermodynamic sum of atomization enthalpy + IE₁ + IE₂ + hydration enthalpy — it cannot be read off from ionization enthalpy alone. This mirrors the classic Li-anomaly in Group 1.

## Flame Colours

| Metal | Ca | Sr | Ba | Be, Mg |
|-------|----|----|----|----|
| Flame colour | Brick red | Crimson | Apple green | None |

Mechanism: flame heat promotes an outer electron to a higher level; on relaxation the energy is emitted as visible light (E = hν). Be and Mg show no flame colour because their valence electrons are too strongly (tightly) bound by the small, high-charge-density nucleus to be excited at ordinary flame temperatures.

**Exam Note:** "Mg burns with a dazzling white light" describes combustion emission (incandescent MgO), not a flame-test colour for Mg²⁺. Mg still gives no characteristic flame-test line.
      `),
    ],
  },

  {
    id: "aem-extraction-uses",
    label: "Extraction & Industrial Uses",
    blocks: [
      md(`
## Extraction of the Metals

Group 2 metals are themselves strong reducing agents and are strongly electropositive, so aqueous solutions cannot be used to displace them with another metal, and simple chemical reduction of the oxides is not viable.

### Beryllium
- Extracted from beryl Be₃Al₂Si₆O₁₈ by fusion or sulphuric acid treatment to give soluble BeSO₄, which is treated with NH₄OH to precipitate the hydroxide Be(OH)₂
- Be(OH)₂ is converted to BeF₂ (by treatment with HF), and the metal is obtained either by reduction with Mg: BeF₂ + Mg → Be + MgF₂, or by electrolysis of the fused chloride
- Both Be and BeO must be handled with extreme purity control — the main use of the metal is as a neutron moderator/reflector in nuclear reactors, and for windows on X-ray tubes because of its very low electron density (low X-ray absorption)

### Magnesium
**Pidgeon process:** Calcined dolomite [CaCO₃·MgCO₃ → CaO·MgO] is reduced by heating with ferrosilicon at 1150 °C under reduced pressure to give Mg vapour, which condenses away and is cooled

**Dow sea water process:** Seawater (≈0.13% Mg²⁺) is treated with slaked lime — Mg(OH)₂ is far less soluble than Ca(OH)₂, so it precipitates and is filtered off, then converted to MgCl₂ with HCl and electrolysed

**Dow natural brine process:** Calcined dolomite (MgO·CaO) is treated with HCl to give a CaCl₂/MgCl₂ solution; adding more calcined dolomite plus CO₂ precipitates CaCO₃, leaving pure MgCl₂ solution for electrolysis

### Calcium, Strontium, Barium
Ca metal is obtained by electrolysis of fused CaCl₂ (from the Solvay-process waste stream, or from CaCO₃ + HCl). World production of Ca metal is only about 1000 tonnes/year; it is used in Al alloys, in the iron/steel industry to control carbon and scavenge P, O and S, as a reducing agent for Zr/Cr/Th/U, and to remove traces of N₂ from argon. Sr and Ba are produced on a much smaller scale, by electrolysis of the fused chloride, or by thermite-type reduction of the oxide with aluminium.

## Uses of the Group 2 Metals Themselves

**Beryllium:** Used in the manufacture of alloys — copper–beryllium alloys are used to prepare high-strength springs. Metallic beryllium is used for making windows of X-ray tubes.

**Magnesium:** Forms alloys with aluminium, zinc, manganese and tin. Mg–Al alloys, being light in mass, are used in aircraft construction. Magnesium (powder and ribbon) is used in flash powders and bulbs, incendiary bombs, and signals. A suspension of magnesium hydroxide in water ("milk of magnesia") is used as an antacid in medicine. Magnesium carbonate is an ingredient of toothpaste.

**Calcium:** Used in the extraction of metals from oxides which are difficult to reduce with carbon. Calcium and barium metals, owing to their reactivity with oxygen and nitrogen at elevated temperatures, have often been used to remove the last traces of air from vacuum tubes (as "getters").

**Radium:** Radium salts are used in radiotherapy, for example in the treatment of cancer.
      `),
    ],
  },

  {
    id: "aem-solubility-framework",
    label: "Solubility Framework & Group 1 vs Group 2",
    blocks: [
      md(`
## Lattice Energy vs Hydration Energy — The Master Solubility Framework

Solubility of Group 2 compounds departs from the usual "heavier = less soluble" intuition and is instead governed entirely by the competition between lattice energy and hydration energy as the cation grows down the group.

| Lattice energy (kJ/mol) | Mg | Ca | Sr | Ba |
|-------------------------|----|----|----|----|
| MO | −3923 | −3517 | −3312 | −3120 |
| MCO₃ | −3078 | −2986 | −2718 | −2614 |
| MF₂ | −2906 | −2610 | −2496 | −2367 |
| MCl₂ | −2592 | −2258 | −2159 | −2018 |

**Solubility principle:** For a substance to dissolve, the hydration energy must exceed the lattice energy. Consider a related group of compounds, such as the chlorides of all the Group 2 metals. On descending the group, the metal ions become larger and so both the lattice energy and the hydration energy decrease. A decrease in lattice energy favours increased solubility, but a decrease in hydration energy favours decreased solubility. These two factors thus change in opposite directions, and the overall effect depends on which of the two has changed most.

With most compounds, on descending the group, the hydration energy decreases more rapidly than the lattice energy: hence the compounds become less soluble as the metal gets larger. However, with fluorides and hydroxides the lattice energy decreases more rapidly than the hydration energy, and so their solubility increases on descending the group.

**Master key (memorize this one sentence):** "Which energy — lattice or hydration — falls faster as the cation grows?" governs every Group 2 solubility trend. For OH⁻ and F⁻, lattice energy falls faster → solubility increases down the group. For CO₃²⁻ and SO₄²⁻, hydration energy falls faster → solubility decreases down the group.

## Group 1 versus Group 2 — Why the Chemistry Changes

Complex formation is also more pronounced than in Group 1 because of the higher charge density. Be²⁺ is exceptional and strongly Lewis acidic; Mg²⁺ and Ca²⁺ form important oxygen-donor complexes, whereas Sr²⁺ and Ba²⁺ are less strongly solvated and less strongly complexed.

| Feature | Group 1 | Group 2 |
|---------|---------|---------|
| Common ion | M⁺ | M²⁺ |
| Ion size in same period | Larger | Smaller |
| Hydration/lattice effects | Lower | Much stronger |
| Covalency/polarisation | Usually modest | Important, especially Be²⁺ |
| Complex formation | Generally limited | More favourable for Be²⁺, Mg²⁺, Ca²⁺ |
      `),
    ],
  },

  {
    id: "aem-reactivity",
    label: "Chemical Reactivity",
    blocks: [
      md(`
## Reactivity toward Air / O₂ / N₂

- **Be, Mg:** Kinetically inert at room temperature — a thin, adherent protective oxide film forms and stops further attack. The metals are relatively unreactive in massive form and do not react below about 600 °C, but powdered metal is far more reactive: powdered Be ignites to give BeO + Be₃N₂. Mg burns with dazzling brilliance, evolving a great deal of heat.

- **Ca, Sr, Ba:** Tarnish readily even at ordinary temperature, forming oxide + nitride.

- **Normal oxide MO** forms on burning in excess O₂ for all members; Ba additionally forms the peroxide BaO₂ (2Ba + O₂ → 2BaO₂) — peroxide-forming tendency increases with cation size (a larger, less polarizing cation stabilizes the large, diffuse O₂²⁻ ion better).

**Exam Note:** Burning Mg is not extinguished by CO₂ — Mg is a strong enough reductant to reduce it: 2Mg + CO₂ → 2MgO + C. CO₂ extinguishers must never be used on a magnesium fire.

## Reactivity toward Water

| Metal | Behaviour |
|-------|-----------|
| Be | Essentially inert; protected by BeO film (there is some doubt whether it reacts with steam at all) |
| Mg | No reaction with cold water; slowly decomposes hot water → Mg(OH)₂ + H₂; with steam → MgO + H₂ |
| Ca, Sr, Ba | React readily with cold water: M + 2H₂O → M(OH)₂ + H₂↑ |

Magnesium's E° (−2.37 V) is actually favourable for reaction, but Mg forms a protective oxide layer — so despite this favourable reduction potential it does not readily react with cold water unless the oxide layer is first removed, e.g. by amalgamating the surface with mercury. In this particular respect (a favourable driving force blocked by a passivating oxide film), Mg's behaviour resembles that of aluminium.

**Exam Note:** The isolated solid product from Mg + water depends on conditions: hot liquid water → Mg(OH)₂ + H₂, but steam → MgO + H₂ (dehydration favoured at higher T). "Mg + steam → Mg(OH)₂" is a commonly-set wrong option.

Be doesn't react with water because of kinetic passivation, not because it's thermodynamically unreactive — same logic pattern as Li in Group 1. Never infer reactivity from E° alone.

## Reactivity toward Dihydrogen — Hydrides

Ca, Sr, Ba (and Mg, with more difficulty) react directly with H₂ on heating to give MH₂: Ca + H₂ → CaH₂. **BeH₂ cannot be made this way** and must instead be made indirectly:

BeF₂ + 2LiAlH₄ → BeH₂ + LiF + LiAlF₄ (or similar routes)

**Mechanistic picture:** LiAlH₄ is a source of the hydride nucleophile H⁻. In effect, H⁻ attacks the small, electron-deficient, highly electrophilic Be centre and displaces F⁻ — an SN2-like nucleophilic substitution at beryllium, repeated until both fluorines are replaced by hydride.

**Ionic vs covalent nature:** CaH₂, SrH₂, BaH₂ are ionic (contain discrete H⁻); **BeH₂ and MgH₂ are covalent and polymeric**. All hydrides are strong reducing agents and hydrolyse in water/dilute acid liberating H₂:
MH₂ + 2H₂O → M(OH)₂ + 2H₂↑

**Bonding Insight:** Why is BeH₂ electron-deficient & polymeric?

Ground-state Be is 1s²2s² — no unpaired electrons, so it cannot form two ordinary covalent bonds directly. Promoting one 2s electron to 2p gives 1s²2s¹2p¹ (two unpaired electrons, sp hybridisation) — this lets an isolated gas-phase BeH₂ molecule be linear (180°). But even after sp-hybridised bonding, Be's outer shell holds only 4 electrons around it — it is electron-deficient. In the condensed (solid) phase Be resolves this by forming 3-centre–2-electron ("banana") bonds: each Be–H–Be bridge is one shared electron pair spread over three atoms, so the polymer chain gives every Be a coordination number of 4 despite Be starting with only 2 valence electrons. This is the same electron-deficient cluster bonding logic used for diborane B₂H₆.

## Reactivity toward Halogens — Halides

In excess chloride, the electron-pair-accepting Be centre can form tetrahedral chloroberyllate species such as [BeCl₄]²⁻. This is another manifestation of the strong Lewis acidity and four-coordinate preference of Be.

All Group 2 metals form halides: Be + Cl₂ → BeCl₂; Mg + Cl₂ → MgCl₂; Ca + Cl₂ → CaCl₂; etc.

**Anhydrous Be/Mg halides:** Cannot be obtained by simply heating the hydrate — this causes hydrolysis instead of dehydration:
MgCl₂·6H₂O → MgO + 2HCl↑ + 5H₂O (NOT → anhydrous MgCl₂)

This is a general rule for small, highly-charged, strongly polarising cations — the same hydrolysis-on-heating problem is seen with Be²⁺, Mg²⁺, Al³⁺, Cr³⁺, Fe³⁺ and similar high-charge-density ions across the periodic table.

Industrially, anhydrous MgCl₂ is instead made by heating the double salt MgCl₂·NH₄Cl·6H₂O, which loses water first and NH₄Cl only at higher T, avoiding hydrolysis.

**Covalency trend (Fajans' rules):** BeX₂ > MgX₂ > CaX₂ > SrX₂ > BaX₂ — the small, highly-charged Be²⁺ polarizes the anion's electron cloud strongly. For a fixed cation, covalency rises with anion polarizability: I⁻ > Br⁻ > Cl⁻ > F⁻.

**Exam Note:** BeF₂ has the largest electronegativity difference of any Be halide, yet is still regarded as covalent when fused (very low melt conductivity) — high charge density beats electronegativity difference for Be specifically.

BeF₂ is, unusually, very soluble in water (owing to the huge solvation energy that forms [Be(H₂O)₄]²⁺), even though heavier Group-2 fluorides are all almost insoluble — MF₂ (M = Mg, Ca, Sr, Ba) are white, insoluble, high-melting ionic solids.

## Reactivity toward Acids and Alkalis

For ordinary non-oxidising dilute acids, the net ionic form is: M + 2H⁺ → M²⁺ + H₂↑

Oxidising acids must be treated separately: concentrated HNO₃ passivates Be, while Mg can liberate H₂ with very dilute HNO₃ under suitable conditions.

Be reacts only after its oxide film is removed, and — like Al — is rendered passive by concentrated HNO₃ (a thin protective oxide layer forms). **Be is amphoteric even as the metal**, dissolving in NaOH:
Be + 2NaOH + 2H₂O → Na₂[Be(OH)₄] + H₂↑

**Mg, Ca, Sr, Ba do not react with NaOH** — they are purely basic metals.

**Exam Pattern:** For the set {Be, Al, B, Mg, Ca, Zn, Sn}, the metals that liberate H₂ with NaOH are Be, Al, Zn and Sn: count = 4. The deciding feature is amphoteric behaviour, not group membership.
      `),
    ],
  },

  {
    id: "aem-oxides-hydroxides",
    label: "Oxides, Hydroxides & Peroxides",
    blocks: [
      md(`
## Oxides and Peroxides

Down the group, M²⁺ becomes larger and less polarising, so the M–O interaction becomes increasingly ionic and O²⁻ behaves more nearly as a free strongly basic oxide ion. This gives the fundamental basicity order:
**BeO < MgO < CaO < SrO < BaO**

BeO retains substantial covalent character and is amphoteric.

### Normal Oxides MO

All burn in O₂ to give MO. BeO is usually made instead by igniting gelatinous Be(OH)₂; the other oxides are usually obtained by thermal decomposition of the carbonates, sulphates, or nitrates — all of which are less thermally stable than the corresponding Group 1 oxosalts, precisely because the Group 2 metals and their hydroxides are less strongly basic than those of Group 1.

**Structure & Basicity:**
- BeO is covalent (4:4 zinc-blende/wurtzite structure)
- MgO, CaO, SrO, BaO are ionic (6:6 rock-salt/NaCl structure)

**Basic strength rises steadily:** BeO (amphoteric) < MgO (weakly basic) < CaO < SrO < BaO (increasingly strongly basic)

BeO and MgO are used as furnace-lining refractories: very high melting point (BeO ≈2500 °C, MgO ≈2800 °C), negligible vapour pressure, good thermal conductivity, chemical inertness, and electrical insulation.

### Peroxides

Peroxide stability increases with cation size (a larger, less polarizing cation stabilizes the large O₂²⁻ ion better).

- **BaO₂:** 2BaO + O₂ ⇌ 2BaO₂ (air passed over BaO at 500 °C) — the classical, most stable Group-2 peroxide
- **SrO₂:** forms similarly but needs higher pressure and temperature
- **CaO₂:** not formed by the direct route — instead made as a hydrate by treating Ca(OH)₂ with H₂O₂, then dehydrating
- **MgO₂:** only a crude peroxide obtainable, via H₂O₂; used as a mild antiseptic in toothpaste and as a bleaching agent
- **BeO₂:** no peroxide of beryllium is known

## Hydroxides

Basicity and solubility both increase down the group. Be(OH)₂ is amphoteric; Mg(OH)₂ is weakly basic and only sparingly soluble ("milk of magnesia", an antacid); Ca(OH)₂, Sr(OH)₂, Ba(OH)₂ are strong bases.

| Hydroxide | Solubility (g/L, ~20 °C) |
|-----------|--------------------------|
| Mg(OH)₂ | ≈1×10⁻⁴ (essentially insoluble) |
| Ca(OH)₂ | ≈2 |
| Sr(OH)₂ | ≈8 |
| Ba(OH)₂ | ≈39 |

**Core Focus:** Why does hydroxide solubility increase down the group?

The anion (OH⁻) is common across the series, so only the cation's size varies. As M²⁺ grows, lattice enthalpy falls faster than hydration enthalpy — so the net dissolution process becomes more favourable and solubility rises down the group. This is the exact reverse of what happens for carbonates/sulphates, where hydration enthalpy falls faster than lattice enthalpy, so solubility falls down the group.

**Master key (memorize this one sentence):** "Which energy — lattice or hydration — falls faster as the cation grows?" governs every Group 2 solubility trend. For OH⁻ and F⁻, lattice energy falls faster → solubility increases down the group. For CO₃²⁻ and SO₄²⁻, hydration energy falls faster → solubility decreases down the group.

Ca(OH)₂ solution = **lime water**; Ba(OH)₂ solution = **baryta water** — both turn milky with CO₂ (precipitate CaCO₃/BaCO₃), clearing again with excess CO₂ (soluble bicarbonate forms). Baryta water is the more sensitive test — even exhaled breath gives a positive result.

**Exam Note:** "Lime water" is a clear solution, not a suspension; "milk of lime" is the suspension of excess undissolved Ca(OH)₂. Four genuinely distinct terms exist: quicklime (CaO) ≠ slaked lime (Ca(OH)₂) ≠ lime water (solution) ≠ milk of lime (suspension).
      `),
    ],
  },

  {
    id: "aem-salts",
    label: "Carbonates, Bicarbonates, Sulphates & Nitrates",
    blocks: [
      md(`
## Carbonates, Bicarbonates & Hardness of Water

### Carbonates

Solubility decreases down the group (hydration energy falls faster than lattice energy for the large CO₃²⁻ ion). All carbonates decompose on heating: MCO₃ → MO + CO₂. Thermal stability increases down the group — smaller, more polarizing cations distort CO₃²⁻ more and decompose more readily.

| Carbonate | BeCO₃ | MgCO₃ | CaCO₃ | SrCO₃ | BaCO₃ |
|-----------|-------|-------|-------|-------|-------|
| Decomposition temp (°C) | < 100 | 540 | 900 | 1290 | 1360 |

BeCO₃ is so unstable it can only be kept under a CO₂ atmosphere, and is structurally unusual — it retains the hydrated [Be(H₂O)₄]²⁺ unit rather than a simple Be²⁺.

### Bicarbonates & Hardness of Water

Bicarbonates exist only in solution, never as isolable solids for Group 2:
M²⁺ + 2HCO₃⁻ ⇌ M(HCO₃)₂(aq)

This equilibrium, run in reverse by slow evaporation/decomposition, deposits limestone caves' stalactites (from the roof) and stalagmites (from the floor).

| Type | Cause | Removed by |
|------|-------|-----------|
| Temporary hardness | Mg(HCO₃)₂, Ca(HCO₃)₂ | Boiling (drives off CO₂); or adding slaked lime, Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃ + 2H₂O |
| Permanent hardness | MgSO₄, CaSO₄ (soluble sulphates) | Not removed by boiling — needs ion exchange, phosphates (calgon), or Na₂CO₃ (lime-soda: CaSO₄ + Na₂CO₃ → CaCO₃↓ + Na₂SO₄) |

Scum in hard water = insoluble calcium/magnesium stearate, formed when Ca²⁺/Mg²⁺ react with soap before true lathering can occur.

**Exam Note:** Excess CO₂ passed into lime water does not give more precipitate — it redissolves the CaCO₃ precipitate as soluble Ca(HCO₃)₂, clearing the milkiness. This is a solubility-equilibrium shift, not a contradiction.

## Sulphates and Nitrates

### Sulphates

Thermal stability of the sulphates increases broadly down the group as cation polarising power falls. Solubility falls sharply:
**BeSO₄ > MgSO₄ ≫ CaSO₄ > SrSO₄ > BaSO₄ (virtually insoluble)**

Reason: for the small Be²⁺/Mg²⁺, hydration enthalpy dominates and overcomes lattice enthalpy, favouring dissolution; for the larger cations, hydration falls off while lattice energy (set mainly by the large SO₄²⁻ ion) stays comparatively high, so solubility collapses.

| Salt | Note |
|------|------|
| Epsom salt, MgSO₄·7H₂O | Mild laxative |
| Alabaster, CaSO₄·2H₂O | Ornamental; not weatherproof outdoors (fine-grained) |
| BaSO₄ | Insoluble AND opaque to X-rays → "barium meal" for GI-tract imaging |

### Nitrates

**Exam Note:** Group 2 nitrates decompose straight to the oxide (like LiNO₃), not to a nitrite the way NaNO₃/KNO₃ do:
MCO₃ → MO + NO₂ + ½O₂

Do not import the Group-1 heavier-metal nitrite pattern here.

### Qualitative Analysis Summary

A single compact fact worth memorizing as a block: the **sulphates of calcium, strontium and barium are insoluble, and the carbonates, oxalates, chromates and fluorides of the whole group are insoluble** — this pattern is exactly what is exploited in qualitative inorganic analysis to detect and separate Group 2 cations.
      `),
    ],
  },

  {
    id: "aem-complex-formation",
    label: "Complex Formation & Organometallic Compounds",
    blocks: [
      md(`
## Complex-Forming Tendency

Strong multidentate ligands can compensate for the generally modest complex-forming tendency of the heavier Group 2 ions. Ca²⁺ and Mg²⁺ form stable chelates with EDTA; titrations are carried out at relatively high pH because protonated EDTA binds poorly and the Ca/Mg complexes are less stable than many transition-metal EDTA complexes. Stable solid complexes with crown ethers and cryptands are also known.

**Exam Pattern:** The six-coordinate [Ca(EDTA)]²⁻ chelate contains 5 five-membered chelate rings.

Group 2 ions form complexes more readily than Group 1 (smaller size → higher charge density), but far less readily than the transition metals.

- **Be**, being appreciably smaller than the rest, is by far the best complex-former of the group
- Only **Mg and Ca** show any real tendency to complex, mostly with O-donor ligands
- **[BeF₄]²⁻** (tetrafluoroberyllate) — Be readily coordinates two extra F⁻ ions; the M₂[BeF₄] salts closely resemble sulphates in their solubility properties
- **[Be(H₂O)₄]²⁺**, **[Be(OH)₄]²⁻** — always tetrahedral, never 6-coordinate, because Be has only 4 valence orbitals available (one 2s + three 2p) with no accessible d-orbitals
- **Chlorophyll:** Mg²⁺ sits at the centre of a flat porphyrin ring, bonded to 4 N atoms; the complex absorbs light in the red region and drives photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

**Exam Note:** Be salts taste sweet but must never be tested by taste — Be compounds are highly toxic (they displace Mg²⁺ from enzymes; inhaling Be dust or smoke causes berylliosis, a disease resembling silicosis; skin contact causes dermatitis).

## Organometallic Compounds — Grignard Reagents & Be/Mg Alkyls

Both Be and Mg form an appreciable number of M–C bonded compounds; only a few have been isolated for Ca, Sr, Ba. **Grignard reagents (organomagnesium halides, RMgX)** are probably the single most versatile class of reagent in organic chemistry, and — along with lithium alkyls — provide the two general routes to organometallic compounds across the periodic table. Victor Grignard won the 1912 Nobel Prize in Chemistry for this work.

### Preparation

Grignard reagents are made by the slow addition of an alkyl or aryl halide (Cl, Br or I) to a continuously stirred mixture of magnesium turnings in an absolutely dry organic solvent, usually diethyl ether:
**R—X + Mg → R—Mg—X** (in Et₂O)

The reaction is often slow to start and may require an induction period before it starts — addition of a crystal of iodine, or gently warming, is used to penetrate the metal's oxide film and initiate the reaction.

**Reactivity order:** iodides > bromides > chlorides; alkyl compounds usually form Grignard reagents more readily than aryl compounds.

**Grignard reagents are rapidly hydrolysed** by water to give the parent hydrocarbon, so they are never isolated solid — made and used in situ:
R—Mg—X + H₂O → R—H + Mg(OH)X

### Reactions of Grignard Reagents (Complete Synthetic-Use List)

| Reagent added to RMgBr | Product (after acid/H₂O work-up) |
|------------------------|----------------------------------|
| CO₂ | R·COOH (carboxylic acid) |
| R'₂C=O | R'₂C(OH)R (tertiary alcohol) |
| R'·CHO | R'CH(OH)R (secondary alcohol) |
| HCHO | R·CH₂OH (primary alcohol) |
| O₂ | R·OH |
| S₈ | RSH and R₂S |
| I₂ | RI |
| H⁺ | RH |
      `),
    ],
  },

  {
    id: "aem-nitrides-carbides",
    label: "Nitrides, Carbides & Anomalies",
    blocks: [
      md(`
## Nitrides and Carbides

### Nitrides

All Group 2 metals burn in N₂ to form ionic nitrides **M₃N₂** — in sharp contrast to Group 1, where only Li (the smallest, most polarizing) forms a nitride Li₃N. The reason is the same in both groups: nitride formation needs a very large lattice energy to overpay for breaking the strong N≡N bond, and lattice energy is large whenever both ions carry high charge (M²⁺, N³⁻) — so it works for the whole of Group 2, not just the smallest member.

**3M + N₂ → M₃N₂**

Be₃N₂ is comparatively volatile (greater covalent character of Be); the other nitrides are not.

### Carbides

| Carbide | Anion | Hydrolysis product | Note |
|---------|-------|-------------------|------|
| Be₂C | C⁴⁻ ("methanide") | CH₄ | Antifluorite structure |
| Mg₂C₃ | C₃⁴⁻ ("allylide") | CH₃—C≡CH (propyne) | Not on the acetylide pattern |
| CaC₂, SrC₂, BaC₂ | C₂²⁻ ("acetylide") | C₂H₂ (ethyne) | Distorted NaCl-type lattice |

**Exam Note:** Not every Group-2 carbide gives ethyne! Only the true acetylides (Ca, Sr, Ba) do. Be₂C gives methane; Mg₂C₃ gives propyne.

Be₂C is made by heating BeO with carbon at 1900–2000 °C; it is brick-red and adopts an antifluorite structure (C⁴⁻ replaces F⁻, Be²⁺ replaces Ca²⁺).

The MC₂ carbides (Ca, Sr, Ba) all adopt a distorted sodium chloride-type structure: M²⁺ replaces Na⁺ and the linear C≡C²⁻ ion replaces Cl⁻, but because C₂²⁻ is not spherical (unlike Cl⁻) the lattice is distorted along the axis where the ions are aligned.

At one time the main source of ethyne (acetylene) for oxy-acetylene welding was CaC₂; world production peaked at 7 million tonnes/year in 1960, but had declined to 4.9 million tonnes by 1991 as ethyne became more cheaply obtained from processing oil.

## Anomalous Behaviour of Beryllium

The anomalous behaviour of Be can be traced to three root causes:

1. **Extremely small size:** Fajans' rules — small, highly-charged ions tend to form covalent compounds

2. **Comparatively high electronegativity** (1.5, vs Mg 1.2, Ca 1.0, Sr 1.0, Ba 0.9) — when Be reacts with another element the electronegativity difference is seldom very large, again favouring covalency. (Even where the difference is large, as with F, BeF₂ still behaves as covalent when fused.)

3. **Only 2s/2p valence orbitals available:** The outer shell can hold a maximum of 8 electrons (one 2s + three 2p orbitals). Thus Be can form a maximum of four conventional 2-electron bonds/coordinate bonds — a maximum coordination number of 4. The later members have larger outer shells and can accommodate more than 8 outer electrons, using d orbitals in addition to s and p, so higher coordination numbers occur.

**Consequences of Be's anomaly to keep straight:**
- Never exceeds CN = 4
- Oxide/hydroxide uniquely amphoteric
- Extensive hydrolysis gives acidic solutions (no other Group-2 salt hydrolyses appreciably)
- Rarely more than 4 waters of crystallisation
- Halides: covalent/polymeric/soluble-in-organic-solvents/fuming/subliming/non-conducting when fused
- BeH₂: covalent (not saline)
- Be₂C: methanide (→ CH₄, unlike acetylide MC₂ → C₂H₂)
- BeCO₃: stable only under CO₂
- No flame colour
- Unusually strong complex-former
- Amphoteric as the metal too (dissolves in NaOH)
- Passivated by concentrated HNO₃ like Al

**The Bigger Picture:** Be's anomaly is just one instance of a completely general pattern called the "first-element" (or second-period) anomaly: every element that heads a group in the second period — Li, Be, B, C, N, O, F — behaves noticeably differently from the rest of its own group, and for exactly the same three root causes. This turns twelve separate "anomaly facts" into one reusable rule.

## Diagonal Relationship: Be and Al

Be²⁺ (ionic radius ≈31 pm) and Al³⁺ (≈50 pm) are not close in raw size, but their charge densities (charge per unit surface area) are almost identical — this is the quantitative root of every diagonal relationship, not just Be–Al.

**Similarities:**
- Both form covalent halides with appreciable covalent character
- Both form strong complexes with F⁻ forming [BeF₄]²⁻ and [AlF₆]³⁻
- Both oxides/hydroxides are amphoteric
- Both form polymeric hydrides/alkyls with bridging structures
- Both are passivated by concentrated HNO₃
      `),
    ],
  },

  {
    id: "aem-summary-reactions",
    label: "Comprehensive Reaction Summary",
    blocks: [
      md(`
## Consolidated Reaction Table

| Reaction | Comment |
|----------|---------|
| M + 2H₂O → M(OH)₂ + H₂ | Be probably reacts with steam (doubtful); Mg reacts with hot water; Ca, Sr, Ba react rapidly with cold water |
| M + 2HCl → MCl₂ + H₂ | All the metals react with acids liberating hydrogen |
| Be + 2NaOH + 2H₂O → Na₂[Be(OH)₄] + H₂ | Be is amphoteric |
| 2M + O₂ → 2MO (excess dioxygen) | Normal oxide formed by all group members |
| Ba + O₂ → BaO₂ | Ba also forms the peroxide |
| M + H₂ → MH₂ | Ionic salt-like hydrides formed at high T by Ca, Sr, Ba |
| 3M + N₂ → M₃N₂ | All form nitrides at high temperatures |
| 3M + 2P → M₃P₂ | All the metals form phosphides at high temperatures |
| M + S → MS; M + Se → MSe; M + Te → MTe | All the metals form sulphides/selenides/tellurides |
| M + F₂ → MF₂; M + Cl₂ → MCl₂; M + Br₂ → MBr₂; M + I₂ → MI₂ | All the metals form halides |
| M + 2NH₃ → M(NH₂)₂ + H₂ (high temperature) | All the metals form amides at high temperatures |

This comprehensive notes section covers the complete chemistry of Alkaline Earth Metals (Group 2), from fundamental trends and extraction methods through industrial applications, reactivity patterns, and the unique anomalies of beryllium.
      `),
    ],
  },
];
