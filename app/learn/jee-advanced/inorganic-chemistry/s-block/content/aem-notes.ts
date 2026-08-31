import { md, visual, type SBlockSection } from "./types";

// Faithful transcription of the AEM Notes (Alkaline Earth Metals) source
// document — 15 numbered sections, exact document order, no omissions.
// Chemical-equation images embedded in the original .docx (lost in the
// pandoc text extraction) were recovered by unzipping the .docx media
// folder and reading each image directly; every equation below is
// transcribed verbatim from those images, not reconstructed from memory.

export const AEM_NOTES_SECTIONS: SBlockSection[] = [
  {
    id: "aem-01-introduction-general-trends",
    label: "1. Introduction & General Trends",
    blocks: [
      md(`
## 1. Introduction & General Trends

Group 2 comprises Be, Mg, Ca, Sr, Ba, Ra — general valence configuration ns². All members except Be are traditionally called alkaline earth metals because their oxides/hydroxides are alkaline and the metals occur combined as "earths" (refractory oxide minerals) in nature.

### 1.1 Electronic Configuration & Oxidation State

A stable simple +1 oxidation state is not characteristic of ordinary Group 2 chemistry. Loss of both ns electrons gives the especially stable noble-gas configuration of M²⁺, whereas removal of a third electron would disrupt the closed shell and is energetically prohibitive.

| Element | Symbol | Configuration | Atomic No. |
|---|---|---|---|
| Beryllium | Be | [He] 2s² | 4 |
| Magnesium | Mg | [Ne] 3s² | 12 |
| Calcium | Ca | [Ar] 4s² | 20 |
| Strontium | Sr | [Kr] 5s² | 38 |
| Barium | Ba | [Xe] 6s² | 56 |
| Radium | Ra | [Rn] 7s² | 88 |

+2 is the only significant oxidation state. Removing both ns electrons leaves a noble-gas core, so the third ionization enthalpy is enormous (e.g. IE₃ of Be ≈ 14,847 kJ/mol, Mg ≈ 7,731 kJ/mol) — M³⁺ is never formed.

### 1.2 Occurrence (minerals worth remembering)

- Be: beryl Be₃Al₂Si₆O₁₈ (rare)
- Mg: magnesite MgCO₃, dolomite CaCO₃·MgCO₃, carnallite KCl·MgCl₂·6H₂O, seawater
- Ca: limestone/chalk/marble (CaCO₃), gypsum CaSO₄·2H₂O, fluorite CaF₂, fluorapatite 3Ca₃(PO₄)₂·CaF₂
- Sr: celestite SrSO₄, strontianite SrCO₃
- Ba: barytes BaSO₄, witherite BaCO₃
- Ra: extreme trace, radioactive; isolated by the Curies from pitchblende

### 1.3 Atomic & Ionic Radii

Radii increase steadily down the group as a new shell is added each period. At the same time, Group 2 atoms/ions are smaller than the corresponding Group 1 element of the same period, because the extra proton (higher nuclear charge) pulls the electron cloud in more tightly.

| Quantity | Be | Mg | Ca | Sr | Ba |
|---|---|---|---|---|---|
| Metallic radius (pm) | 111 | 160 | 197 | 215 | 222 |
| M²⁺ ionic radius (pm) | 31 | 72 | 100 | 118 | 135 |

### 1.4 Ionization Enthalpy

| | Be | Mg | Ca | Sr | Ba | Ra |
|---|---|---|---|---|---|---|
| IE₁ (kJ/mol) | 899 | 737 | 590 | 549 | 503 | 509 |
| IE₂ (kJ/mol) | 1757 | 1450 | 1145 | 1064 | 965 | 979 |

Ra's IE₁/IE₂ are very slightly higher than Ba's — this is not a random anomaly. Radium comes right after the 4f¹⁴ subshell is filled (through the lanthanides) and after the 5d subshell too; the poorly-shielding, diffuse 4f electrons let the nuclear charge "leak through" more effectively to the outer 7s electrons — the same lanthanide-contraction-type effect responsible for Cs vs. Fr and other 6th/7th-period irregularities. So Ra is very slightly smaller and harder to ionize than a naive extrapolation down the group would predict.

**Core Focus:** Why is IE₁(Group 2) > IE₁(Group 1) but IE₂(Group 2) < IE₂(Group 1) for the same period?

Group 2 atoms are smaller than the Group 1 atom of the same period (higher nuclear charge), so their IE₁ is higher. But a Group 1 atom, having lost one electron, already has a noble-gas core — pulling out a second electron from that core (IE₂ of Group 1) is extremely costly. For Group 2, the second electron removed is the one that completes the noble-gas configuration, so IE₂ of Group 2 < IE₂ of Group 1 for the same period.

### 1.5 Hydration Enthalpy

| M²⁺ | Be²⁺ | Mg²⁺ | Ca²⁺ | Sr²⁺ | Ba²⁺ |
|---|---|---|---|---|---|
| ΔH_hyd (kJ/mol) | −2494 | −1921 | −1577 | −1443 | −1305 |

Hydration enthalpies fall steadily as ionic size increases (weaker ion–dipole pull). Group 2 values run 4–5× larger than the corresponding Group 1 ion (smaller size, double the charge). This is why Group 2 salts crystallize with far more water of hydration than Group 1 salts: MgCl₂·6H₂O, CaCl₂·6H₂O, SrCl₂·6H₂O, BaCl₂·2H₂O exist, while NaCl and KCl are anhydrous. Note the number of hydrate waters falls down the group as hydration enthalpy weakens.

### 1.6 Melting Point, Boiling Point, Density

| | Be | Mg | Ca | Sr | Ba | Ra |
|---|---|---|---|---|---|---|
| m.p. (K) | 1560 | 924 | 1124 | 1062 | 1002 | 973 |
| b.p. (K) | 2745 | 1363 | 1767 | 1655 | 2078 | ≈1973 |
| Density (g/cm³) | 1.84 | 1.74 | 1.55 | 2.63 | 3.59 | ≈5.5 |

The actual crystal structures behind the "different lattice" explanation: Be and Mg adopt hexagonal close-packed (hcp, CN = 12); Ca and Sr adopt cubic close-packed (ccp/fcc, CN = 12) at room temperature; Ba adopts body-centred cubic (bcc, CN = 8). Ca even undergoes its own fcc → bcc phase transition on heating. Since bcc packing is less efficient (lower coordination number, lower packing fraction) than hcp/ccp, the metallic bonding is weaker wherever bcc appears — this is precisely why Ba (bcc) breaks the naive "m.p. falls smoothly down the group" pattern.

**Exam Note:** The m.p./b.p./density trend down the group is NOT monotonic — do not force a simple "decreases smoothly" or "increases smoothly" narrative. The metals crystallize in different lattice structures, so the trend is irregular. Group 2 metals are harder and higher-melting than the corresponding Group 1 metals because two valence electrons (not one) participate in metallic bonding — roughly double the cohesive energy.

### 1.7 Standard Reduction Potential & Reducing Power

| M²⁺/M | Be | Mg | Ca | Sr | Ba | Ra |
|---|---|---|---|---|---|---|
| E° (V) | −1.85 | −2.37 | −2.87 | −2.89 | −2.91 | −2.92 |

- Reducing power broadly increases Be → Ba, but Be is anomalous — its E° is least negative in the group (weakest reducing agent). This indicates Be is much less electropositive (less "metallic") than the rest of the group.
- Ca, Sr, Ba have reduction potentials similar to the corresponding Group 1 metals, and are quite high in the electrochemical series.

**Core Focus:** Reasoning for Be's weak reducing power (matches Born–Haber-type logic)

"Beryllium has less negative value compared to other alkaline earth metals. However, its reducing nature is due to large hydration energy associated with the small size of Be²⁺ ion and relatively large value of the atomization enthalpy of the metal." Key idea: E° is a net thermodynamic sum of atomization enthalpy + IE₁ + IE₂ + hydration enthalpy — it cannot be read off from ionization enthalpy alone. This mirrors the classic Li-anomaly in Group 1.

**Exam Note:** Reported values for E°(Be²⁺/Be) include −1.85 V and −1.97 V. For consistency in these notes, use −1.85 V; it also places Be close to Al (−1.66 V).

### 1.8 Flame Colours

| Metal | Ca | Sr | Ba | Be, Mg |
|---|---|---|---|---|
| Flame colour | Brick red | Crimson | Apple green | None |

Mechanism: flame heat promotes an outer electron to a higher level; on relaxation the energy is emitted as visible light (E = hν). Be and Mg show no flame colour because their valence electrons are too strongly (tightly) bound by the small, high-charge-density nucleus to be excited at ordinary flame temperatures.

**Exam Note:** "Mg burns with a dazzling white light" describes combustion emission (incandescent MgO), not a flame-test colour for Mg²⁺. Mg still gives no characteristic flame-test line.

### 1.9 Extraction of the Metals

Group 2 metals are themselves strong reducing agents and are strongly electropositive, so aqueous solutions cannot be used to displace them with another metal, and simple chemical reduction of the oxides is not viable. Electrolysis of aqueous solutions is possible using a mercury cathode (giving an amalgam), but recovering the pure metal from the amalgam is difficult. All the metals can be obtained by electrolysis of the fused chloride, with NaCl added to lower the melting point, though Sr and Ba tend to form a colloidal suspension during the process.

**Beryllium**

- Extracted from beryl Be₃Al₂Si₆O₁₈ by fusion or sulphuric acid treatment to give soluble BeSO₄, which is treated with NH₄OH to precipitate the hydroxide Be(OH)₂ (BeO is amphoteric, but the aluminium is removed as the soluble tetrahydroxoaluminate complex).
- Be(OH)₂ is converted to BeF₂ (by treatment with HF), and the metal is obtained either by reduction with Mg: BeF₂ + Mg → Be + MgF₂, or by electrolysis of the fused chloride made from BeO + C + Cl₂.
- Both Be and BeO must be handled with extreme purity control — the main use of the metal is as a neutron moderator/reflector in nuclear reactors, and for windows on X-ray tubes because of its very low electron density (low X-ray absorption).

**Magnesium**

General carbothermic reduction (illustrative): MgO + C —(2000 °C, rapid quench)→ Mg(g) + CO(g)

*Pidgeon process:* calcined dolomite is reduced by heating with ferrosilicon at 1150 °C under reduced pressure:

Calcination: CaCO₃·MgCO₃ —(calcination)→ CaO·MgO + 2CO₂

Reduction: 2(CaO·MgO) + Si —(1150 °C, reduced pressure)→ 2Mg(g) + Ca₂SiO₄
      `),
      visual("pidgeon-process"),
      md(`
*Dow sea water process:* seawater (≈0.13% Mg²⁺) is treated with slaked lime — Mg(OH)₂ is far less soluble than Ca(OH)₂, so it precipitates and is filtered off, then converted to MgCl₂ with HCl and electrolysed:

Ca(OH)₂ + MgCl₂(aq) → Mg(OH)₂↓ + CaCl₂

Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O

*Dow natural brine process:* calcined dolomite (MgO·CaO) is treated with HCl to give a CaCl₂/MgCl₂ solution; adding more calcined dolomite plus CO₂ precipitates CaCO₃, leaving pure MgCl₂ solution for electrolysis:

CaCl₂·MgCl₂ + CaO·MgO + 2CO₂ → 2MgCl₂ + 2CaCO₃↓
      `),
      visual("dow-process"),
      md(`
**Calcium, Strontium, Barium**

Ca metal is obtained by electrolysis of fused CaCl₂ (from the Solvay-process waste stream, or from CaCO₃ + HCl). World production of Ca metal is only about 1000 tonnes/year; it is used in Al alloys, in the iron/steel industry to control carbon and scavenge P, O and S, as a reducing agent for Zr/Cr/Th/U, and to remove traces of N₂ from argon. Sr and Ba are produced on a much smaller scale, by electrolysis of the fused chloride, or by thermite-type reduction of the oxide with aluminium.

### 1.10 Uses of the Group 2 Metals Themselves

**Core Focus:** Uses list — the metals, not their compounds

- **Beryllium:** used in the manufacture of alloys — copper–beryllium alloys are used to prepare high-strength springs. Metallic beryllium is used for making windows of X-ray tubes.
- **Magnesium:** forms alloys with aluminium, zinc, manganese and tin. Mg–Al alloys, being light in mass, are used in aircraft construction. Magnesium (powder and ribbon) is used in flash powders and bulbs, incendiary bombs, and signals. A suspension of magnesium hydroxide in water ("milk of magnesia") is used as an antacid in medicine. Magnesium carbonate is an ingredient of toothpaste.
- **Calcium:** used in the extraction of metals from oxides which are difficult to reduce with carbon. Calcium and barium metals, owing to their reactivity with oxygen and nitrogen at elevated temperatures, have often been used to remove the last traces of air from vacuum tubes (as "getters").
- **Radium:** radium salts are used in radiotherapy, for example in the treatment of cancer.

### 1.11 Lattice Energy vs Hydration Energy — The Master Solubility Framework

Solubility of Group 2 compounds departs from the usual "heavier = less soluble" intuition and is instead governed entirely by the competition between lattice energy and hydration energy as the cation grows down the group.
      `),
      visual("solubility"),
      md(`

| Lattice energy (kJ/mol) | Mg | Ca | Sr | Ba |
|---|---|---|---|---|
| MO | −3923 | −3517 | −3312 | −3120 |
| MCO₃ | −3078 | −2986 | −2718 | −2614 |
| MF₂ | −2906 | −2610 | −2496 | −2367 |
| MCl₂ | −2592 | −2258 | −2159 | −2018 (approx.) |

| ΔH_hydration (kJ/mol) | Be²⁺ | Mg²⁺ | Ca²⁺ | Sr²⁺ | Ba²⁺ |
|---|---|---|---|---|---|
| | −2494 | −1921 | −1577 | −1443 | −1305 |

**Bonding Insight:** Solubility principle

"For a substance to dissolve, the hydration energy must exceed the lattice energy. Consider a related group of compounds, such as the chlorides of all the Group 2 metals. On descending the group, the metal ions become larger and so both the lattice energy and the hydration energy decrease. A decrease in lattice energy favours increased solubility, but a decrease in hydration energy favours decreased solubility. These two factors thus change in opposite directions, and the overall effect depends on which of the two has changed most. With most compounds, on descending the group, the hydration energy decreases more rapidly than the lattice energy: hence the compounds become less soluble as the metal gets larger. However, with fluorides and hydroxides the lattice energy decreases more rapidly than the hydration energy, and so their solubility increases on descending the group."

### 1.12 Group 1 versus Group 2 — Why the Chemistry Changes

Complex formation is also more pronounced than in Group 1 because of the higher charge density. Be²⁺ is exceptional and strongly Lewis acidic; Mg²⁺ and Ca²⁺ form important oxygen-donor complexes, whereas Sr²⁺ and Ba²⁺ are less strongly solvated and less strongly complexed.

The first ionisation enthalpy of a Group 2 atom is higher than that of the Group 1 atom in the same period, and removal of the second electron also requires substantial energy. Ionic M²⁺ compounds nevertheless form because the lattice and hydration terms can compensate for the two ionisations. This is why ionisation enthalpy alone cannot predict aqueous reducing power.

Compared with the corresponding Group 1 ions, M²⁺ ions of Group 2 are smaller and carry twice the charge. Consequently their lattice enthalpies and hydration enthalpies are much larger, their salts are generally less soluble than analogous Group 1 salts, and polarisation/covalency becomes much more important for the smallest ion, Be²⁺.

| Feature | Group 1 | Group 2 |
|---|---|---|
| Common ion | M⁺ | M²⁺ |
| Ion size in same period | Larger | Smaller |
| Hydration/lattice effects | Lower | Much stronger |
| Covalency/polarisation | Usually modest | Important, especially Be²⁺ |
| Complex formation | Generally limited | More favourable for Be²⁺, Mg²⁺, Ca²⁺ |
      `),
    ],
  },

  {
    id: "aem-02-chemical-reactivity",
    label: "2. Chemical Reactivity",
    blocks: [
      md(`
## 2. Chemical Reactivity

### 2.1 Reactivity toward Air / O₂ / N₂

- Be, Mg: kinetically inert at room temperature — a thin, adherent protective oxide film forms and stops further attack. The metals are relatively unreactive in massive form and do not react below about 600 °C, but powdered metal is far more reactive: powdered Be ignites to give BeO + Be₃N₂. Mg burns with dazzling brilliance, evolving a great deal of heat — this is used to start a thermite reaction with aluminium, and to provide light in (old-style) flash photography using light bulbs, not electronics, giving MgO + Mg₃N₂.
- Ca, Sr, Ba: tarnish readily even at ordinary temperature, forming oxide + nitride.
- Normal oxide MO forms on burning in excess O₂ for all members; Ba additionally forms the peroxide BaO₂ (2Ba + O₂ → 2BaO₂) — peroxide-forming tendency increases with cation size (a larger, less polarizing cation stabilizes the large, diffuse O₂²⁻ ion better).

**Exam Note:** Burning Mg is not extinguished by CO₂ — Mg is a strong enough reductant to reduce it: 2Mg + CO₂ → 2MgO + C. CO₂ extinguishers must never be used on a magnesium fire.

### 2.2 Reactivity toward Water

| Metal | Behaviour |
|---|---|
| Be | Essentially inert; protected by BeO film (there is some doubt whether it reacts with steam at all) |
| Mg | No reaction with cold water; slowly decomposes hot water → Mg(OH)₂ + H₂; with steam → MgO + H₂ |
| Ca, Sr, Ba | React readily with cold water: M + 2H₂O → M(OH)₂ + H₂↑ |

Magnesium's E° (−2.37 V) is actually favourable for reaction, but Mg forms a protective oxide layer — so despite this favourable reduction potential it does not readily react with cold water unless the oxide layer is first removed, e.g. by amalgamating the surface with mercury. In this particular respect (a favourable driving force blocked by a passivating oxide film), Mg's behaviour resembles that of aluminium.

**Exam Note:** The isolated solid product from Mg + water depends on conditions: hot liquid water → Mg(OH)₂ + H₂, but steam → MgO + H₂ (dehydration favoured at higher T). "Mg + steam → Mg(OH)₂" is a commonly-set wrong option. Be doesn't react with water because of kinetic passivation, not because it's thermodynamically unreactive — same logic pattern as Li in Group 1 (most negative E°, yet reacts gently with water due to a high melting point/low surface-area factor). Never infer reactivity from E° alone.

### 2.3 Reactivity toward Dihydrogen — Hydrides
      `),
      visual("hydride-family"),
      visual("beh2-polymer"),
      md(`
Ca, Sr, Ba (and Mg, with more difficulty) react directly with H₂ on heating to give MH₂: Ca + H₂ → CaH₂. BeH₂ cannot be made this way and must instead be made indirectly, by two independent routes:

Route 1: 2BeCl₂ + LiAlH₄ → 2BeH₂ + LiCl + AlCl₃

Mechanistic picture: LiAlH₄ is a source of the hydride nucleophile H⁻. In effect, H⁻ attacks the small, electron-deficient, highly electrophilic Be centre and displaces Cl⁻ — an SN2-like nucleophilic substitution at beryllium, repeated until both chlorines are replaced by hydride.

A purer sample (free of Al/Li contamination) is obtained via a two-step borohydride route (Route 2):

BeCl₂ + 2Li[BH₄] → BeB₂H₈ + 2LiCl

BeB₂H₈ + 2PPh₃ —(sealed tube, heat)→ BeH₂ + 2Ph₃PBH₃

Ionic vs covalent nature: CaH₂, SrH₂, BaH₂ are ionic (contain discrete H⁻); BeH₂ and MgH₂ are covalent and polymeric. All hydrides are strong reducing agents and hydrolyse in water/dilute acid liberating H₂:

CaH₂ + 2H₂O → Ca(OH)₂ + 2H₂↑

**Bonding Insight:** Why is BeH₂ electron-deficient & polymeric?

Ground-state Be is 1s²2s² — no unpaired electrons, so it cannot form two ordinary covalent bonds directly. Promoting one 2s electron to 2p gives 1s²2s¹2p¹ (two unpaired electrons, sp hybridisation) — this lets an isolated gas-phase BeH₂/BeX₂ molecule be linear (180°). But even after sp-hybridised bonding, Be's outer shell holds only 4 electrons around it — it is electron-deficient. In the condensed (solid) phase Be resolves this by forming 3-centre–2-electron ("banana") bonds: each Be–H–Be bridge is one shared electron pair spread over three atoms, so the polymer chain (H-bridged, zig-zag Be–H–Be–H–Be…) gives every Be a coordination number of 4 despite Be starting with only 2 valence electrons. This is the same electron-deficient cluster bonding logic used for diborane B₂H₆.

### 2.4 Reactivity toward Halogens — Halides
      `),
      visual("becl2"),
      md(`
In excess chloride, the electron-pair-accepting Be centre can form tetrahedral chloroberyllate species such as [BeCl₄]²⁻. This is another manifestation of the strong Lewis acidity and four-coordinate preference of Be.

M + X₂ → MX₂ for all members. Except beryllium halides, all Group 2 halides are ionic. BeCl₂ and BeF₂ are prepared as:

BeO + C + Cl₂ —(600–800 K)→ BeCl₂ + CO

2BeO + CCl₄ —(800 °C)→ 2BeCl₂ + CO₂

BeO + 2NH₃ + 4HF → (NH₄)₂BeF₄

(NH₄)₂BeF₄ —(Δ)→ BeF₂ + 2NH₄F

Anhydrous Be/Mg halides cannot be obtained by simply heating the hydrate — this causes hydrolysis instead of dehydration:

[Be(H₂O)₄]Cl₂ —(Δ)→ Be(OH)₂ + 2HCl + 2H₂O

MgCl₂·6H₂O —(Δ)→ MgO + 2HCl + 5H₂O

This is a general rule for small, highly-charged, strongly polarising cations — the same hydrolysis-on-heating problem is seen with Be²⁺, Mg²⁺, Al³⁺, Cr³⁺, Fe³⁺ and similar high-charge-density ions across the periodic table, not just Group 2. Contrast this with Ca, Sr, Ba, where dehydration proceeds cleanly on heating with no hydrolysis:

CaCl₂·6H₂O —(Δ)→ CaCl₂ + 6H₂O

Industrially, anhydrous MgCl₂ is instead made by heating the double salt MgCl₂·NH₄Cl·6H₂O, which loses water first and NH₄Cl only at higher T, avoiding hydrolysis:

MgCl₂·NH₄Cl·6H₂O —(Δ, −H₂O)→ MgCl₂·NH₄Cl

MgCl₂·NH₄Cl —(strong Δ)→ MgCl₂ + NH₃ + HCl

Anhydrous CaCl₂ is an excellent drying agent for gases and organic vapours — but not for NH₃ or ethanol, since it forms stable adducts instead: CaCl₂·8NH₃ and CaCl₂·4C₂H₅OH. A JEE-favourite exception to "CaCl₂ dries everything."

**Bonding Insight:** BeCl₂ structure — solid, dimer, and monomer

- Solid state: an infinite zig-zag chain polymer with chlorine bridges — each Cl makes one normal covalent bond to one Be and donates a lone pair (dative bond) to the next Be, giving every Be a coordination number of 4.
- Vapour, moderate T: a chloro-bridged dimer Be₂Cl₄.
- Vapour, ~1200 K: dissociates into the linear monomer Cl–Be–Cl (sp-hybridised, 2-coordinate, electron-deficient).
- Contrast: in Be(CH₃)₂ the bridge is a genuine 3-centre-2-electron bond spanning Be···CH₃···Be (like BeH₂), not simple lone-pair donation as in the chlorine bridges of (BeCl₂)ₙ — a subtle but real mechanistic difference between halide bridging (dative) and alkyl bridging (electron-deficient).
      `),
      visual("becl2-bridge-detail"),
      md(`
**Covalency trend (Fajans' rules):** Covalent character: BeX₂ > MgX₂ > CaX₂ > SrX₂ > BaX₂ — the small, highly-charged Be²⁺ polarizes the anion's electron cloud strongly ("small highly charged ions tend to form covalent compounds"). For a fixed cation, covalency rises with anion polarizability: I⁻ > Br⁻ > Cl⁻ > F⁻.

**Exam Note:** BeF₂ has the largest electronegativity difference of any Be halide, yet is still regarded as covalent when fused (very low melt conductivity) — high charge density beats electronegativity difference for Be specifically. BeF₂ is, unusually, very soluble in water (owing to the huge solvation energy that forms [Be(H₂O)₄]²⁺), even though heavier Group-2 fluorides are all almost insoluble — MF₂ (M = Mg, Ca, Sr, Ba) are white, insoluble, high-melting ionic solids. Hydration of halides decreases down the group: MgCl₂·6H₂O, CaCl₂·6H₂O, SrCl₂·6H₂O, but BaCl₂·2H₂O only. (For MgCl₂ the source is internally inconsistent — its halide-trends text gives MgCl₂·6H₂O while its halides table gives MgCl₂·8H₂O for the same salt; 6H₂O is the more common literature value, but expect 8H₂O if a question is lifted straight from the halides table.)

**Chlorides, bromides, iodides — solubility and industrial uses**

The chlorides, bromides and iodides of Mg, Ca, Sr, Ba are ionic, have much lower melting points than the fluorides, and are readily soluble in water; solubility falls off somewhat with increasing atomic number. All these halides form hydrates and are hygroscopic (absorb water vapour from the air). CaF₂ is the main industrial source of both F₂ and HF:

CaF₂ + H₂SO₄ → 2HF + CaSO₄

HF + KF —(electrolysis)→ F₂

Several million tonnes of CaCl₂ are produced annually, mostly discarded as a low-value Solvay-process by-product. Uses: treating ice on roads (a 30% CaCl₂/H₂O eutectic freezes at −55 °C, vs −18 °C for NaCl/H₂O — far more effective in very cold climates); making concrete set faster and stronger; as a laboratory desiccant (drying agent) owing to its strong hygroscopicity; and (via the electrolytic route) as the feedstock for extracting Ca metal.

### 2.5 Reactivity toward Acids and Alkalis

For ordinary non-oxidising dilute acids, the net ionic form is M + 2H⁺ → M²⁺ + H₂↑. Oxidising acids must be treated separately: concentrated HNO₃ passivates Be, while Mg can liberate H₂ with very dilute HNO₃ under suitable conditions. Thus the simple "metal + acid gives H₂" rule is not universal.

**Exam Pattern:** For the set {Be, Al, B, Mg, Ca, Zn, Sn}, the metals that liberate H₂ with NaOH are Be, Al, Zn and Sn: count = 4. The deciding feature is amphoteric behaviour, not group membership.

M + 2HCl → MCl₂ + H₂↑ (Mg, Ca, Sr, Ba)

Be reacts only after its oxide film is removed, and — like Al — is rendered passive by concentrated HNO₃ (a thin protective oxide layer forms). Be is amphoteric even as the metal, dissolving in NaOH:

Be + 2NaOH + 2H₂O → Na₂[Be(OH)₄] + H₂↑ (sodium beryllate)

Mg, Ca, Sr, Ba do not react with NaOH — they are purely basic metals.
      `),
    ],
  },

  {
    id: "aem-03-reducing-liquid-ammonia",
    label: "3. Reducing Nature & Solutions in Liquid Ammonia",
    blocks: [
      md(`
## 3. Reducing Nature & Solutions in Liquid Ammonia

The dilute deep-blue metal–ammonia solution is paramagnetic because the solvated electron is unpaired. As metal concentration increases, the solution can pass toward a bronze/metallic appearance; this concentrated state is distinct from the dilute blue solution.
      `),
      visual("solvated-electron"),
      md(`
Ca, Sr, Ba dissolve in liquid NH₃ to give deep blue solutions — identical phenomenon to Group 1 — due to ammoniated (solvated) electrons:

M + (x+y)NH₃ → [M(NH₃)ₓ]²⁺ + 2[e(NH₃)_y]⁻

- Concentrated solutions turn bronze-coloured (metal clusters form).
- On standing/evaporation, Group 2 solutions do not simply deposit the metal back (unlike Group 1) — evaporation instead gives crystalline hexammoniates M(NH₃)₆, which slowly decompose to the amide:

M(NH₃)₆ → M(NH₂)₂ + 4NH₃ + H₂↑

Mg is far less soluble in liquid NH₃ under ordinary conditions; Be does not typically show this behaviour. Net reducing action of the solution: 2NH₃ + 2e⁻ → 2NH₂⁻ + H₂ — the ammoniated electron acts as a powerful reducing agent / very strong base.
      `),
    ],
  },

  {
    id: "aem-04-nitrides-carbides",
    label: "4. Nitrides and Carbides",
    blocks: [
      md(`
## 4. Nitrides and Carbides

### 4.1 Nitrides

All Group 2 metals burn in N₂ to form ionic nitrides M₃N₂ — in sharp contrast to Group 1, where only Li (the smallest, most polarizing) forms a nitride Li₃N. The reason is the same in both groups: nitride formation needs a very large lattice energy to overpay for breaking the strong N≡N bond, and lattice energy is large whenever both ions carry high charge (M²⁺, N³⁻) — so it works for the whole of Group 2, not just the smallest member.

Ca₃N₂ + 6H₂O → 3Ca(OH)₂ + 2NH₃↑ (all nitrides hydrolyse this way)

Be₃N₂ is comparatively volatile (greater covalent character of Be); the other nitrides are not.

### 4.2 Carbides

**Group 2 carbide types and hydrolysis products**

| Carbide | Anion | Hydrolysis product | Note |
|---|---|---|---|
| Be₂C | C⁴⁻ ("methanide") | CH₄ | Antifluorite structure; Be₂C + 4H₂O → 2Be(OH)₂ + CH₄ |
| Mg₂C₃ | C₃⁴⁻ ("allylide"/sesquicarbide) | CH₃–C≡CH (propyne) | Not on the acetylide pattern |
| CaC₂, SrC₂, BaC₂ | C₂²⁻ ("acetylide") | C₂H₂ (ethyne) | Distorted NaCl-type lattice (C₂²⁻ is non-spherical) |
      `),
      visual("carbide"),
      md(`
**Exam Pattern:** Mg₂C₃ contains 42 electrons per formula unit: 2×12 + 3×6 = 42. This is useful only after identifying the correct carbide formula (allylide/sesquicarbide, not MgC₂).

Be₂C is made by heating BeO with carbon at 1900–2000 °C; it is brick-red and adopts an antifluorite structure (C⁴⁻ replaces F⁻, Be²⁺ replaces Ca²⁺).

CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂↑

CaO + 3C —(2000 °C)→ CaC₂ + CO

Ca + 2C —(1100 °C)→ CaC₂

The MC₂ carbides (Ca, Sr, Ba) all adopt a distorted sodium chloride-type structure: M²⁺ replaces Na⁺ and the linear C≡C²⁻ ion replaces Cl⁻, but because C₂²⁻ is not spherical (unlike Cl⁻) the lattice is distorted along the axis where the ions are aligned, and the unit cell is tetragonal at room temperature. Above 450 °C the C₂²⁻ ions adopt random orientations rather than staying aligned, and the cell becomes genuinely tetragonal in a different, higher-symmetry sense.

At one time the main source of ethyne (acetylene) for oxy-acetylene welding was CaC₂; world production peaked at 7 million tonnes/year in 1960, but had declined to 4.9 million tonnes by 1991 as ethyne became more cheaply obtained from processing oil.

**Exam Note:** Not every Group-2 carbide gives ethyne! Only the true acetylides (Ca, Sr, Ba) do. Be₂C gives methane; Mg₂C₃ gives propyne.

### 4.3 Calcium Cyanamide — Full Reaction Network

The complete product logic is: calcium cyanamide hydrolyses slowly in soil; acidification or carbonation gives cyanamide H₂NCN; H₂NCN gives urea with water under strongly acidic/basic conditions, thiourea with H₂S, and dicyandiamide in the pH 7–9 region. Pyrolysis of the dicyandiamide product gives the triazine ring compound melamine, which forms hard resins with formaldehyde.
      `),
      visual("cyanamide-network"),
      md(`
CaC₂ is also an important industrial intermediate: heated in an electric furnace with N₂ at 1100 °C, it gives calcium cyanamide, CaNCN — an important route of fixing atmospheric nitrogen (an alternative to the Haber process).

CaC₂ + N₂ —(1100 °C, electric furnace)→ CaNCN + C

The cyanamide ion [N=C=N]²⁻ is isoelectronic with CO₂ and linear. CaNCN is produced on a large scale (particularly in locations where there is cheap electricity) and used directly, on a huge scale, as a slow-acting nitrogenous fertilizer (widely used in SE Asia and the Far East) — it hydrolyses slowly over months, giving it a genuine advantage over more soluble fertilizers like NH₄NO₃ or urea, which are washed away by the first rainstorm:

CaNCN + 5H₂O → CaCO₃ + 2NH₄OH

CaNCN is also the starting material for several other important industrial products:

CaNCN + H₂SO₄ → H₂NCN + CaSO₄

CaNCN + CO₂ + H₂O → H₂NCN + CaCO₃

H₂NCN + H₂O —(pH < 2 or > 12)→ H₂N·CO·NH₂ (urea)

H₂NCN + H₂S → H₂N·CS·NH₂ (thiourea)

H₂NCN —(pH 7–9)→ NCNC(NH₂)₂ (dicyandiamide)

NCNC(NH₂)₂ —(pyrolysis)→ melamine (2,4,6-triamino-1,3,5-triazine)

Melamine — the ring compound formed by pyrolysing dicyanamide — reacts with formaldehyde to form hard plastics (melamine resins), so this entire chain traces a path from N₂ gas all the way to a common household plastic.

**Exam Note:** CaC₂ + N₂ (1100 °C, electric furnace) gives calcium cyanamide CaNCN + C, but BaC₂ + N₂ gives a cyanide Ba(CN)₂, not a cyanamide — a genuinely exception-worthy fact worth memorising as a pair. Do not confuse the three nitrogen-containing products in this chain: cyanamide (H₂NCN, the free acid), dicyanamide (NCNC(NH₂)₂, its pH 7–9 dimer), and melamine (the pyrolysed cyclic trimer-type product) — each forms under a different, specific condition from the last.
      `),
    ],
  },

  {
    id: "aem-05-complex-forming-tendency",
    label: "5. Complex-Forming Tendency",
    blocks: [
      md(`
## 5. Complex-Forming Tendency

Strong multidentate ligands can compensate for the generally modest complex-forming tendency of the heavier Group 2 ions. Ca²⁺ and Mg²⁺ form stable chelates with EDTA; titrations are carried out at relatively high pH because protonated EDTA binds poorly and the Ca/Mg complexes are less stable than many transition-metal EDTA complexes. Stable solid complexes with crown ethers and cryptands are also known.

[Ca(EDTA)]²⁻ is a six-coordinate chelate: EDTA (ethylenediaminetetraacetic acid) supplies two N donors and four O donors, giving five five-membered chelate rings. 18-crown-6 is a representative crown ether (a macrocyclic ring of alternating –CH₂CH₂–O– units, six ether oxygens facing the ring centre).
      `),
      visual("edta-chelation"),
      visual("crown-ether"),
      visual("edta-free-ligand"),
      md(`
**Exam Pattern:** The six-coordinate [Ca(EDTA)]²⁻ chelate contains 5 five-membered chelate rings.

Group 2 ions form complexes more readily than Group 1 (smaller size → higher charge density), but far less readily than the transition metals. Be, being appreciably smaller than the rest, is by far the best complex-former of the group; only Mg and Ca show any real tendency to complex, mostly with O-donor ligands.

- [BeF₄]²⁻ (tetrafluoroberyllate) — Be readily coordinates two extra F⁻ ions; the M₂[BeF₄] salts closely resemble sulphates in their solubility properties, correlating with the fact that Be, uniquely in the group, has empty orbitals available for complex formation.
- BeCl₂·D₂ adducts (D = an ether, aldehyde or ketone with an O lone pair) — tetrahedral, formed the same way as [BeF₄]²⁻.
- [Be(H₂O)₄]²⁺, [Be(OH)₄]²⁻ — always tetrahedral, never 6-coordinate, because Be has only 4 valence orbitals (one 2s + three 2p) available for bonding, with no accessible d-orbitals.
- Stable chelates: beryllium oxalate [Be(ox)₂]²⁻ (two bidentate oxalate ligands, four O donors around Be, tetrahedral), and complexes with β-diketones (acetylacetone) and catechol — all tetrahedral at Be.
- Basic beryllium acetate [Be₄O(CH₃COO)₆]: a central O²⁻ surrounded tetrahedrally by 4 Be atoms, with 6 acetate groups bridging the 6 tetrahedron edges. Covalent, low-melting (285 °C)/b.p. 330 °C, soluble in organic solvents, and can even be distilled — this volatility/solubility is exploited to purify beryllium. Prepared by evaporating Be(OH)₂ in acetic acid. A near-identical structure is adopted by basic beryllium nitrate [Be₄O(NO₃)₆], where each NO₃⁻ instead bridges a pair of Be atoms bidentately.
      `),
      visual("be4o-acetate"),
      md(`
- Ca²⁺/Mg²⁺ form a stable 1:1 chelate with EDTA (hexadentate) — [Ca(EDTA)]²⁻ is six-coordinate (octahedral), containing 5 five-membered chelate rings, the basis of complexometric titration for water-hardness estimation. Interestingly, Be — despite being the strongest complexer in the group — does not complex appreciably with EDTA, because EDTA needs 6 coordination sites and Be is invariably 4-coordinate. Ca²⁺/Mg²⁺-EDTA titrations are performed at a higher pH than titrations of other metals (e.g. Zn²⁺, Cd²⁺, Pb²⁺), because the Ca/Mg-EDTA complexes are less stable, and at low pH EDTA gets protonated instead of complexing.
- Chlorophyll: Mg²⁺ sits at the centre of a flat porphyrin ring, bonded to 4 N atoms; the complex absorbs light in the red region and drives photosynthesis, 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Mg forms a few halide complexes too, such as [NEt₄]₂[MgCl₄], but Ca, Sr, Ba do not form comparable halide complexes.

**Exam Note:** Be salts taste sweet but must never be tested by taste — Be compounds are highly toxic (they displace Mg²⁺ from enzymes; inhaling Be dust or smoke causes berylliosis, a disease resembling silicosis; skin contact causes dermatitis).
      `),
    ],
  },

  {
    id: "aem-06-organometallic-grignard",
    label: "6. Organometallic Compounds — Grignard Reagents & Be/Mg Alkyls",
    blocks: [
      md(`
## 6. Organometallic Compounds — Grignard Reagents & Be/Mg Alkyls
      `),
      visual("grignard-center"),
      md(`
Both Be and Mg form an appreciable number of M–C bonded compounds; only a few have been isolated for Ca, Sr, Ba. Grignard reagents (organomagnesium halides, RMgX) are probably the single most versatile class of reagent in organic chemistry, and — along with lithium alkyls — provide the two general routes to organometallic compounds across the periodic table. Victor Grignard won the 1912 Nobel Prize in Chemistry for this work.

### 6.1 Preparation

Mg + RBr —(dry ether)→ RMgBr (Grignard reagent)

- Made by the slow addition of an alkyl or aryl halide (Cl, Br or I) to a continuously stirred mixture of magnesium turnings in an absolutely dry organic solvent, usually diethyl ether. The reaction is often slow to start and may require an induction period before it starts — addition of a crystal of iodine, or gently warming, is used to penetrate the metal's oxide film and initiate the reaction.
- Reactivity order: iodides are the most reactive, chlorides the least reactive; alkyl compounds usually form Grignard reagents more readily than aryl compounds.
- Grignard reagents are rapidly hydrolysed by water to give the parent hydrocarbon, so they are never isolated solid — made and used in situ:

2RMgBr + 2H₂O → 2RH + Mg(OH)₂ + MgBr₂

### 6.2 Structure

Grignard reagents are not simple — they are normally solvated/polymerized without halogen bridges. Three-centre structures have long been the subject of controversy; X-ray structures of solid PhMgBr·2Et₂O and EtMgBr·2Et₂O show magnesium is tetrahedrally coordinated by the organic group, oxygen from ether molecules (a representative ether-solvated centre is R–Mg(X)(OEt₂)₂, tetrahedral), and (in solution) several other species may be present.

### 6.3 Reactions of Grignard Reagents (complete synthetic-use list)

| Reagent added to RMgBr | Product (after acid/H₂O work-up) |
|---|---|
| CO₂ | R·COOH (carboxylic acid) |
| R'₂C=O | R'₂C(OH)R (tertiary alcohol) |
| R'·CHO | R'CH(OH)R (secondary alcohol) |
| HCHO | R·CH₂OH (primary alcohol) |
| O₂ | R·OH |
| S₈ | RSH and R₂S |
| I₂ | RI |
| H⁺ | RH |

Grignard reagents also transfer their organic group to other element halides, providing routes to a wide range of organometallic and organic products (R = alkyl or aryl):

RMgBr + BeCl₂ → BeR₂

RMgBr + LiR → MgR₂

RMgBr + BCl₃ → BR₃

RMgBr + SiCl₄ → RSiCl₃, R₂SiCl₂, R₃SiCl, R₄Si (alkyl/aryl chlorosilanes — commercially important in making silicones)

### 6.4 Beryllium and Magnesium Dialkyls/Diaryls

BeCl₂ reacts with Grignard reagents to give reactive alkyls and aryls:

BeCl₂ + 2MeMgCl —(Et₂O)→ BeMe₂·(Et₂O)ₙ + 2MgCl₂

BeCl₂ + 2LiEt —(Et₂O)→ BeEt₂·(Et₂O)ₙ

Be + HgMe₂ —(warm)→ BeMe₂ + Hg

BeMe₂ is dimeric in the vapour but polymerized in the solid, with a chain structure resembling that of BeCl₂ — but the bonding is different: the Be–Me–Be bridge is a genuine 3-centre-2-electron bond (like BeH₂), unlike the lone-pair-donor halogen bridges of (BeCl₂)ₙ. Similar dialkyl/diaryl compounds of Ca, Sr, Ba can be made using Grignard reagents, lithium alkyls/aryls, or mercury alkyls/aryls — the Ca, Sr, Ba compounds are much more reactive than the corresponding Mg compound. The beryllium alkyls further react with BeCl₂ to give "beryllium Grignard" compounds:

BeMe₂ + BeCl₂ → 2MeBeCl
      `),
    ],
  },

  {
    id: "aem-07-oxides-peroxides",
    label: "7. Oxides and Peroxides",
    blocks: [
      md(`
## 7. Oxides and Peroxides

Down the group, M²⁺ becomes larger and less polarising, so the M–O interaction becomes increasingly ionic and O²⁻ behaves more nearly as a free strongly basic oxide ion. This gives the fundamental basicity order BeO < MgO < CaO < SrO < BaO; BeO retains substantial covalent character and is amphoteric.

### 7.1 Normal Oxides MO

All burn in O₂ to give MO. BeO is usually made instead by igniting gelatinous Be(OH)₂; the other oxides are usually obtained by thermal decomposition of the carbonates, sulphates, or nitrates — all of which are less thermally stable than the corresponding Group 1 oxosalts, precisely because the Group 2 metals and their hydroxides are less strongly basic than those of Group 1.

BeO is covalent (4:4 zinc-blende/wurtzite structure); MgO, CaO, SrO, BaO are ionic (6:6 rock-salt/NaCl structure). Basic strength rises steadily: BeO (amphoteric) < MgO (weakly basic) < CaO < SrO < BaO (increasingly strongly basic).
      `),
      visual("halide-lattice"),
      md(`
**Bonding Insight:** Why does MO + H₂O → M(OH)₂ happen at all? (mechanistic picture)

The O²⁻ ion in the ionic lattice is an extremely strong Brønsted base / nucleophile — far too reactive to survive in water. When water contacts the oxide surface, O²⁻ simply rips a proton off H₂O: O²⁻ + H₂O → 2OH⁻. This single proton-transfer step is the real mechanism behind every "basic oxide + water → hydroxide" reaction in this chapter, and it is also exactly why free O²⁻ cannot exist in aqueous solution at all.

Because BeO is covalent and amphoteric rather than a simple ionic oxide, it does not undergo this reaction with water directly — instead it dissolves in acid or in alkali:

BeO + 2H⁺ → Be²⁺ + H₂O

BeO + 2OH⁻ + H₂O → [Be(OH)₄]²⁻

BeO and MgO are used as furnace-lining refractories: very high melting point (BeO ≈2500 °C, MgO ≈2800 °C), negligible vapour pressure, good thermal conductivity, chemical inertness, and electrical insulation.

**Exam Note:** Simple radius-ratio rules predict 8-coordination for SrO and BaO (given the M²⁺:O²⁻ size ratio), but both are experimentally found to be 6-coordinate (rock-salt structure) — a known limitation of the radius-ratio approach that advanced questions may test.

### 7.2 Peroxides

Peroxide stability increases with cation size (a larger, less polarizing cation stabilizes the large O₂²⁻ ion better).

- BaO₂: 2BaO + O₂ ⇌ 2BaO₂ (air passed over BaO at 500 °C) — the classical, most stable Group-2 peroxide.
- SrO₂: forms similarly but needs higher pressure and temperature.
- CaO₂: not formed by the direct route — instead made as a hydrate by treating Ca(OH)₂ with H₂O₂, then dehydrating.
- MgO₂: only a crude peroxide obtainable, via H₂O₂ (made by passing H₂O₂ into a suspension of Mg(OH)₂, the same method used for CaO₂ from Ca(OH)₂). MgO₂ is used as a mild antiseptic in toothpaste and as a bleaching agent.
- BeO₂: no peroxide of beryllium is known.

BaO₂ + 2HCl → BaCl₂ + H₂O₂

BaO₂ + H₂SO₄(dil.) → BaSO₄↓ + H₂O₂

**Bonding Insight:** Peroxide vs superoxide — bond order from MOT

Peroxide ion [O–O]²⁻ (18 electrons): filling gives σ1s²σ*1s²σ2s²σ*2s²σ2pₓ²π2p_y²π2p_z²π*2p_y²π*2p_z² → all π* orbitals fully paired → bond order = 1, diamagnetic — matches the O–O single bond drawn structurally.

Superoxide ion [O₂]⁻ (17 electrons): identical filling except the last π* level holds only one electron (π*2p_y²π*2p_z¹) → bond order = 1.5, paramagnetic — this is the standard explanation for why KO₂ is paramagnetic.

All known Group 2 peroxides (BaO₂, SrO₂, etc.) contain the same peroxide ion — bond order 1, diamagnetic. No Group 2 superoxide is known to exist.
      `),
    ],
  },

  {
    id: "aem-08-hydroxides",
    label: "8. Hydroxides",
    blocks: [
      md(`
## 8. Hydroxides

Basicity and solubility both increase down the group. Be(OH)₂ is amphoteric; Mg(OH)₂ is weakly basic and only sparingly soluble ("milk of magnesia", an antacid); Ca(OH)₂, Sr(OH)₂, Ba(OH)₂ are strong bases.

| Hydroxide | Solubility (g/L, ~20 °C) |
|---|---|
| Mg(OH)₂ | ≈1×10⁻⁴ (essentially insoluble) |
| Ca(OH)₂ | ≈2 |
| Sr(OH)₂ | ≈8 |
| Ba(OH)₂ | ≈39 |

Be(OH)₂'s amphoteric behaviour:

Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻

Be(OH)₂ + 2HCl + 2H₂O → [Be(H₂O)₄]Cl₂

**Core Focus:** Why does hydroxide solubility increase down the group?

The anion (OH⁻) is common across the series, so only the cation's size varies. As M²⁺ grows, lattice enthalpy falls faster than hydration enthalpy — so the net dissolution process becomes more favourable and solubility rises down the group. This is the exact reverse of what happens for carbonates/sulphates, where hydration enthalpy falls faster than lattice enthalpy, so solubility falls down the group.

**Master key (memorize this one sentence):** "Which energy — lattice or hydration — falls faster as the cation grows?" governs every Group 2 solubility trend. For OH⁻ and F⁻, lattice energy falls faster → solubility increases down the group. For CO₃²⁻ and SO₄²⁻, hydration energy falls faster → solubility decreases down the group.

Ca(OH)₂ solution = lime water; Ba(OH)₂ solution = baryta water — both turn milky with CO₂ (precipitate CaCO₃/BaCO₃), clearing again with excess CO₂ (soluble bicarbonate forms). Baryta water is the more sensitive test — even exhaled breath gives a positive result, whereas lime water needs breath actively bubbled through it.

**Exam Note:** "Lime water" is a clear solution, not a suspension; "milk of lime" is the suspension of excess undissolved Ca(OH)₂. Four genuinely distinct terms exist: quicklime (CaO) ≠ slaked lime (Ca(OH)₂) ≠ lime water (solution) ≠ milk of lime (suspension).
      `),
    ],
  },

  {
    id: "aem-09-carbonates-bicarbonates-hardness",
    label: "9. Carbonates, Bicarbonates & Hardness of Water",
    blocks: [
      md(`
## 9. Carbonates, Bicarbonates & Hardness of Water

### 9.1 Carbonates

Solubility decreases down the group (hydration energy falls faster than lattice energy for the large CO₃²⁻ ion). All carbonates decompose on heating: MCO₃ → MO + CO₂. Thermal stability increases down the group — smaller, more polarizing cations distort CO₃²⁻ more and decompose more readily.

| Carbonate | BeCO₃ | MgCO₃ | CaCO₃ | SrCO₃ | BaCO₃ |
|---|---|---|---|---|---|
| Decomposition temp (°C) | < 100 | 540 | 900 | 1290 | 1360 |

BeCO₃ is so unstable it can only be kept under a CO₂ atmosphere, and is structurally unusual — it retains the hydrated [Be(H₂O)₄]²⁺ unit rather than a simple Be²⁺.

CaCO₃ crystal chemistry: calcite (stable form, Ca²⁺ 6-coordinate, matching the CaO-type prediction) vs aragonite (metastable, only ~5 kJ/mol higher in energy but kinetically trapped, Ca²⁺ unusually 9-coordinate).

### 9.2 Bicarbonates & Hardness of Water
      `),
      visual("hardness"),
      md(`
Bicarbonates exist only in solution, never as isolable solids for Group 2:

M²⁺ + 2HCO₃⁻ ⇌ M(HCO₃)₂(aq), practically formed as CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂(aq)

This equilibrium, run in reverse by slow evaporation/decomposition, deposits limestone caves' stalactites (from the roof) and stalagmites (from the floor).

| Type | Cause | Removed by |
|---|---|---|
| Temporary hardness | Mg(HCO₃)₂, Ca(HCO₃)₂ | Boiling (drives off CO₂); or adding slaked lime, Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃ + 2H₂O |
| Permanent hardness | MgSO₄, CaSO₄ (soluble sulphates) | Not removed by boiling — needs ion exchange, phosphates (calgon), or Na₂CO₃ (lime-soda: CaSO₄ + Na₂CO₃ → CaCO₃↓ + Na₂SO₄) |

Scum in hard water = insoluble calcium/magnesium stearate, formed when Ca²⁺/Mg²⁺ react with soap before true lathering can occur.

**Exam Note:** Excess CO₂ passed into lime water does not give more precipitate — it redissolves the CaCO₃ precipitate as soluble Ca(HCO₃)₂, clearing the milkiness. This is a solubility-equilibrium shift, not a contradiction of the earlier precipitation step.
      `),
    ],
  },

  {
    id: "aem-10-sulphates-nitrates",
    label: "10. Sulphates and Nitrates",
    blocks: [
      md(`
## 10. Sulphates and Nitrates

### 10.1 Sulphates

Thermal stability of the sulphates increases broadly down the group as cation polarising power falls. Very strong heating ultimately gives the oxide with sulphur oxide products; the much poorer solvation of large Ba²⁺ also helps explain the extreme insolubility of BaSO₄.

Solubility falls sharply: BeSO₄ > MgSO₄ ≫ CaSO₄ > SrSO₄ > BaSO₄ (virtually insoluble). Reason: for the small Be²⁺/Mg²⁺, hydration enthalpy dominates and overcomes lattice enthalpy, favouring dissolution; for the larger cations, hydration falls off while lattice energy (set mainly by the large SO₄²⁻ ion) stays comparatively high, so solubility collapses.

| Salt | Note |
|---|---|
| Epsom salt, MgSO₄·7H₂O | Mild laxative |
| Alabaster, CaSO₄·2H₂O | Ornamental; not weatherproof outdoors (CaSO₄ is slightly soluble, ~2 g/L) |
| BaSO₄ | Insoluble AND opaque to X-rays → "barium meal" for GI-tract imaging |

Thermal decomposition MSO₄ → MO + SO₃ becomes harder as basicity rises: BeSO₄ decomposes at 500 °C, MgSO₄ at 895 °C, CaSO₄ at 1149 °C, SrSO₄ at 1374 °C. Heating the sulphates with carbon reduces them to sulphides — BaSO₄ + 4C → BaS + 4CO — and most industrial barium compounds are in fact made starting from BaS.

### 10.2 Perchlorates

Group 2 elements also form perchlorates M(ClO₄)₂, which have structures very similar to the sulphates — the ClO₄⁻ ion is tetrahedral and close in size to SO₄²⁻. Chemically, however, they differ sharply: perchlorates are strong oxidizing agents, and anhydrous Mg(ClO₄)₂ is used as a drying agent ("Anhydrone"). It must never be used with organic materials, since contact between an organic compound and a strong oxidizer of this kind could cause an explosion.

### 10.3 Nitrates

Basic beryllium nitrate belongs to the same Be₄O-core structural family as basic beryllium carboxylates. Four Be atoms occupy the corners of a tetrahedral Be₄ unit around a central O²⁻, and six bridging bidentate NO₃⁻ groups span the six Be–Be edges. Related covalent Be₄O carboxylate clusters occur with formate, acetate, propionate and benzoate ligands; basic beryllium acetate is the best-known example.
      `),
      visual("be4o-nitrate"),
      md(`

Made by dissolving the carbonate/oxide/hydroxide in dilute HNO₃. Hydration of the crystalline nitrate decreases down the group: Mg(NO₃)₂ crystallizes with 6H₂O, while Ba(NO₃)₂ is anhydrous.

2M(NO₃)₂ —(Δ)→ 2MO + 4NO₂ + O₂

Be is unusual in also forming a basic nitrate [Be₄O(NO₃)₆] in addition to the normal salt. Anhydrous Be(NO₃)₂ cannot be obtained by heating the hydrate (decomposition intervenes); instead it is made via liquid N₂O₄:

BeCl₂ —(N₂O₄)→ Be(NO₃)₂·2N₂O₄

Be(NO₃)₂·2N₂O₄ —(warm to 50 °C, vacuum)→ Be(NO₃)₂

Be(NO₃)₂ —(125 °C)→ [Be₄O(NO₃)₆]

**Exam Note:** Group 2 nitrates decompose straight to the oxide (like LiNO₃), not to a nitrite the way NaNO₃/KNO₃ do — do not import the Group-1 heavier-metal nitrite pattern here.

### 10.4 Insoluble Salts — Qualitative Analysis Summary

A single compact fact worth memorizing as a block: the sulphates of calcium, strontium and barium are insoluble, and the carbonates, oxalates, chromates and fluorides of the whole group are insoluble — this pattern is exactly what is exploited in qualitative inorganic analysis to detect and separate Group 2 cations.

### 10.5 Oxalates and Phosphates

Apatite-type calcium phosphates are structurally important. Hydroxyapatite is commonly represented as Ca₁₀(PO₄)₆(OH)₂; substitution of F⁻ for OH⁻ gives fluorapatite-type material, which is more resistant to acid attack and is important in tooth enamel chemistry.

Group 2 phosphates are generally sparingly soluble in water. Calcium phosphate chemistry is especially important in mineral and biological systems, while strongly acidic conditions can shift phosphate equilibria toward more protonated, more soluble species.

Many Group 2 oxalates are sparingly soluble. Their thermal decomposition can proceed through carbonate and then oxide products, depending on the cation and the heating conditions. The trend again reflects the competition between lattice stability and the polarising power of M²⁺.
      `),
    ],
  },

  {
    id: "aem-11-anomalous-beryllium",
    label: "11. Anomalous Behaviour of Beryllium",
    blocks: [
      md(`
## 11. Anomalous Behaviour of Beryllium
      `),
      visual("charge-density"),
      md(`
Illustrative Be structures: [Be(H₂O)₄]²⁺ (tetrahedral hydration complex, coordination number 4), basic beryllium acetate Be₄O(CH₃COO)₆ (central O²⁻, tetrahedral Be₄ core, six bridging μ-OAc groups on the six edges), and [Be(ox)₂]²⁻ (tetrahedral bis(oxalato)beryllate, two bidentate oxalate ligands, four O donors around Be).
      `),
      visual("be-hydrate"),
      visual("be4o-acetate"),
      visual("be-oxalate"),
      md(`
**Exam Pattern:** A regular tetrahedral [BeH₄]²⁻ ion belongs to Tᵈ symmetry and has 6 mirror planes.

The anomalous behaviour of Be can be traced to three root causes:

1. **Extremely small size:** Fajans' rules — small, highly-charged ions tend to form covalent compounds.

2. **Comparatively high electronegativity** (1.5, vs Mg 1.2, Ca 1.0, Sr 1.0, Ba 0.9) — when Be reacts with another element the electronegativity difference is seldom very large, again favouring covalency. (Even where the difference is large, as with F, BeF₂ still behaves as covalent when fused.)

3. **Only 2s/2p valence orbitals available:** the outer shell can hold a maximum of 8 electrons (one 2s + three 2p orbitals). Thus Be can form a maximum of four conventional 2-electron bonds/coordinate bonds — a maximum coordination number of 4. The later members have larger outer shells and can accommodate more than 8 outer electrons, using d orbitals in addition to s and p, so higher coordination numbers occur (e.g. in the basic acetate).

Consequence: anhydrous Be compounds are predominantly covalent, and monomeric BeX₂ molecules should be linear — the excited-state Be atom (1s²2s¹2p¹, two unpaired electrons) uses sp hybridisation to form two collinear bonds. In fact, such linear monomeric molecules exist only in the gas phase: in the solid state, coordination number 4 is always achieved by one of four routes.

**Bonding Insight:** Four ways beryllium reaches 4-coordination in the solid/liquid state

1. Coordinate bonds from extra ligands: two ligands with a lone pair use Be's two unfilled orbitals — e.g. two F⁻ ions coordinate to BeF₂ giving [BeF₄]²⁻; diethyl ether coordinates to BeCl₂ giving BeCl₂(OEt₂)₂.
2. Polymerisation via bridging halogens: BeX₂ molecules polymerise into chains, e.g. (BeF₂)ₙ, (BeCl₂)ₙ — each bridging halogen forms one normal covalent bond and donates a lone pair as a coordinate bond.
3. Three-centre two-electron bonding: (BeMe₂)ₙ has the same chain structure as (BeCl₂)ₙ, but the bonding is instead a 3-centre-2-electron bond covering one Me group and two Be atoms — the same electron-deficient clustering seen in BeH₂.
4. A covalent lattice: BeO and BeS adopt a zinc-blende or wurtzite structure (coordination number 4) rather than the 6:6 rock-salt structure of the heavier oxides.

**Hydrolysis of Beryllium Salts**

In water, beryllium salts are extensively hydrolysed to give polymeric hydroxo complexes of unknown exact structure — representative dimeric/trimeric fragments can be written as, both built from Be centres bridged by OH groups, each Be remaining 4-coordinate: [(HO)₂Be(μ-OH)₂Be(OH)₂]²⁻-type dimer, and a linear trimer [(HO)₂Be(μ-OH)Be(μ-OH)Be(OH)₂]²⁻ — both retain tetrahedral 4-coordination at every Be centre via hydroxide bridges.

Adding alkali to these hydrolysed solutions breaks the polymers down to the simple mononuclear beryllate ion [Be(OH)₄]²⁻ (tetrahedral). Many Be salts instead contain the discrete hydrated ion [Be(H₂O)₄]²⁺ rather than bare Be²⁺ — stable ionic salts such as [Be(H₂O)₄]SO₄, [Be(H₂O)₄](NO₃)₂ and [Be(H₂O)₄]Cl₂ are known. Forming this hydrated complex effectively spreads the charge over a larger ion, which is why it forms so readily.

**Consolidated Reaction Table**

| Reaction | Comment |
|---|---|
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

**Exam Note:** Consequences of Be's anomaly to keep straight: never exceeds CN = 4; oxide/hydroxide uniquely amphoteric; extensive hydrolysis gives acidic solutions (no other Group-2 salt hydrolyses appreciably); rarely more than 4 waters of crystallisation; halides covalent/polymeric/soluble-in-organic-solvents/fuming/subliming/non-conducting when fused; BeH₂ covalent (not saline); Be₂C a methanide (→ CH₄, unlike acetylide MC₂ → C₂H₂); BeCO₃ stable only under CO₂; no flame colour; unusually strong complex-former; amphoteric as the metal too (dissolves in NaOH); passivated by concentrated HNO₃ like Al.

**The Bigger Picture: Be's Anomaly Is Not a One-Off**

Be is just one instance of a completely general pattern called the "first-element" (or second-period) anomaly: every element that heads a group in the second period — Li, Be, B, C, N, O, F — behaves noticeably differently from the rest of its own group, and for exactly the same three root causes seen above for Be: (1) unusually small size, (2) unusually high electronegativity/charge density for the group, and (3) only 2s/2p valence orbitals available, capping the outer shell at 8 electrons and the coordination number at 4 (no accessible d orbitals). Li's anomalous behaviour vs. Na/K (its own hydration-driven E° quirk, its nitride formation, its covalent character) is the exact Group-1 mirror of everything you've just learned about Be — recognizing this pattern turns twelve separate "anomaly facts" into one reusable rule.
      `),
    ],
  },

  {
    id: "aem-12-diagonal-relationship-be-al",
    label: "12. Diagonal Relationship: Be and Al",
    blocks: [
      md(`
## 12. Diagonal Relationship: Be and Al
      `),
      visual("diagonal-map"),
      md(`
The Be–Al resemblance extends to strong Lewis-acid character of their chlorides and to bridged chloride structures. Both sets of halides show appreciable covalent character and can participate in Lewis-acid chemistry under suitable conditions.

Be²⁺ (ionic radius ≈31 pm) and Al³⁺ (≈50 pm) are not close in raw size, but their charge densities (charge per unit surface area) are almost identical (Be²⁺ ≈2.36, Al³⁺ ≈2.50 in the same units) — this is the quantitative root of every diagonal relationship, not just Be–Al.

| # | Similarity |
|---|---|
| 1 | Neither readily attacked by acids — both passivated by concentrated HNO₃ via a protective oxide film. |
| 2 | Both oxides (BeO, Al₂O₃) and hydroxides (Be(OH)₂, Al(OH)₃) are amphoteric; both dissolve in excess alkali to give beryllate [Be(OH)₄]²⁻ / aluminate [Al(OH)₄]⁻. |
| 3 | Both chlorides are Cl-bridged in the vapour phase (BeCl₂ dimer/polymer; Al₂Cl₆ dimer); both soluble in organic solvents, both strong Lewis acids, both used as Friedel–Crafts catalysts. |
| 4 | Both form complex fluorides readily: [BeF₄]²⁻, [AlF₆]³⁻ — but note Be maxes out at CN = 4 while Al reaches CN = 6, a genuine point of difference within the similarity. |
| 5 | Both carbides hydrolyse to methane: Be₂C → CH₄; Al₄C₃ → CH₄ (contrast CaC₂ → C₂H₂). |
| 6 | Both nitrides hydrolyse to NH₃: Be₃N₂ → NH₃; AlN → NH₃. |
| 7 | Both hydrides are electron-deficient and polymeric with multicentre (3c–2e) bonding: BeH₂ and AlH₃. |
| 8 | Standard electrode potentials are close: Be −1.85 V, Al −1.66 V — much closer to each other than Be is to Ca/Sr/Ba (−2.87 to −2.90 V). |
| 9 | Be salts are extensively hydrolysed (acidic in solution), as are Al salts. |
| 10 | Be salts are among the most soluble known — Al salts show a similar high-solubility tendency. |

**Exam Note:** A diagonal relationship is a set of similarities, not identity. Be still differs from Al in maximum coordination number (4 vs 6) and, of course, in oxidation state (+2 vs +3) — never treat Be and Al as interchangeable.
      `),
    ],
  },

  {
    id: "aem-13-be-differences-from-group2",
    label: "13. Differences Between Beryllium and the Other Group 2 Elements",
    blocks: [
      md(`
## 13. Differences Between Beryllium and the Other Group 2 Elements

A distinct list from the Be–Al diagonal relationship above — this is direct within-group comparison (Be vs Mg/Ca/Sr/Ba), given as eight numbered points.

| # | Difference |
|---|---|
| 1 | Be is very small and has a high charge density, so by Fajans' rules it has a strong tendency to covalency. Thus the melting points of its compounds are lower — BeF₂ melts at 800 °C, whilst the fluorides of the rest of the group melt about 1300 °C. The Be halides are all soluble in organic solvents and hydrolyse in water, rather like the aluminium halides. The other Group 2 halides are ionic. |
| 2 | Beryllium hydride is electron-deficient and polymeric, with multicentre bonding, like aluminium hydride. |
| 3 | The halides of beryllium are electron-deficient and polymeric, with halogen bridges. BeCl₂ usually forms chains but also exists as the dimer; AlCl₃ is dimeric. |
| 4 | Be forms many complexes — not typical of Groups 1 and 2. |
| 5 | Be is amphoteric, liberating H₂ with NaOH and forming beryllates; Al forms aluminates similarly. |
| 6 | Be(OH)₂, like Al(OH)₃, is amphoteric. |
| 7 | Be, like Al, is rendered passive by nitric acid. |
| 8 | The standard electrode potentials for Be and Al, −1.85 V and −1.66 V respectively, are much closer to each other than the value for Be is to the values for Ca, Sr and Ba (−2.87, −2.89 and −2.91 V respectively). |

Three more general points close the chapter's treatment of Be:

9. Be salts are extensively hydrolysed.
10. Be salts are among the most soluble known.
11. Be forms an unusual carbide Be₂C, unlike CaC₂, which yields methane on hydrolysis.

**Exam Note:** Notice this list (Be vs. the rest of its own group) is distinct from — though it overlaps with — the Be–Al diagonal-relationship list in §12. Examiners sometimes ask "which of these is a difference within Group 2 vs. a similarity across to Group 13" — both framings describe the same underlying facts about Be.
      `),
    ],
  },

  {
    id: "aem-14-compounds-of-calcium",
    label: "14. Compounds of Calcium",
    blocks: [
      md(`
## 14. Compounds of Calcium

### 14.1 Calcium Oxide — Quicklime, CaO

Industrial calcination is equilibrium-sensitive: high temperature and continuous removal of CO₂ favour conversion of limestone to quicklime. Fresh CaO readily absorbs both moisture and CO₂ from air, so prolonged exposure partially converts it to Ca(OH)₂/CaCO₃ and reduces its effective quicklime content.

CaCO₃ —(1070–1270 K, rotary kiln)→ CaO + CO₂↑

- White amorphous solid, m.p. 2870 K; absorbs atmospheric moisture and CO₂ on standing.
- Slaking: CaO + H₂O → Ca(OH)₂ + heat. Slaking with aqueous NaOH gives soda lime (a NaOH/Ca(OH)₂ mixture, easier to handle than pure NaOH).
- Basic oxide — combines with acidic oxides at high T: CaO + SiO₂ → CaSiO₃ (this is also literally the base reaction behind ordinary glass-making); 6CaO + P₄O₁₀ → 2Ca₃(PO₄)₂. The same CaO + SiO₂ → CaSiO₃ reaction is exactly why lime (via CaCO₃) works as a metallurgical flux: the acidic silica impurity in an iron ore is converted to molten, low-density calcium silicate ("slag"), which floats on the liquid metal and is skimmed off.

**Core Focus:** Uses of CaO

- Important raw material for manufacturing cement, and the cheapest form of alkali
- Manufacture of sodium carbonate from caustic soda
- Purification of sugar and manufacture of dyestuffs

Additional industrial uses of lime (CaO):

- In steelmaking, to remove phosphates and silicates as slag
- By mixing with SiO₂ and alumina or clay, to make cement
- For making glass
- In the lime-soda process, one of the chlor-alkali industry routes converting Na₂CO₃ to NaOH or vice versa
- For "softening" water
- To make slaked lime Ca(OH)₂, and to make calcium carbide CaC₂

### 14.2 Calcium Hydroxide — Slaked Lime, Ca(OH)₂
      `),
      visual("lime-cycle"),
      md(`
Whitewashing is a chemical-setting process: a suspension of Ca(OH)₂ is applied to the surface and atmospheric CO₂ slowly converts it into a hard CaCO₃ layer. A simplified representation of bleaching-powder formation is 2Ca(OH)₂ + 2Cl₂ → CaCl₂ + Ca(OCl)₂ + 2H₂O.

Prepared as above; white amorphous powder, sparingly soluble. Aqueous solution = lime water; suspension of excess solid = milk of lime.

Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O (milky)

CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (excess CO₂ clears it)

**Exam Note:** Lime water does not only test for CO₂ — SO₂ turns it milky too, by the exactly parallel reaction Ca(OH)₂ + SO₂ → CaSO₃↓ + H₂O, and excess SO₂ likewise clears the milkiness by forming soluble calcium bisulphite: SO₂ + H₂O + CaSO₃ → Ca(HSO₃)₂. If a question says "a gas turns lime water milky," don't jump straight to CO₂ — S in the +4 state (SO₂) behaves the same way.

2Ca(OH)₂ + 2Cl₂ → CaCl₂ + Ca(OCl)₂ + 2H₂O (bleaching powder — a simplified representation)

Bleaching powder is often written as Ca(OCl)₂ but is really a mixed salt — worth noting for JEE Advanced precision rather than treating it as one pure compound.

**Core Focus:** Uses of Ca(OH)₂

- Manufacture of mortar, a building material
- Whitewashing, due to its disinfectant nature (hardens by chemical carbonation to CaCO₃, not just drying)
- Glass making, tanning industry
- Preparation of bleaching powder
- Purification of sugar

### 14.3 Calcium Carbonate, CaCO₃

With H₂SO₄, attack on CaCO₃ can slow because sparingly soluble CaSO₄ forms a surface layer. Beyond construction uses, finely divided CaCO₃ is also used as an industrial filler and in formulated products where a cheap, white, chemically mild mineral solid is required.

Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O

CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂

White fluffy powder, almost insoluble; decomposes at 1200 K to CaO + CO₂. Reacts with dilute acid: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. With H₂SO₄, an insoluble CaSO₄ coating can passivate the surface and slow the reaction.

**Core Focus:** Uses of CaCO₃

- Building material, as marble
- Manufacture of quicklime
- As a flux (with MgCO₃) in extraction of metals such as iron
- Specially precipitated CaCO₃ in high-quality paper manufacture
- Antacid, mild abrasive in toothpaste, constituent of chewing gum, filler in cosmetics

### 14.4 Calcium Sulphate System — Gypsum, Plaster of Paris, Anhydrite
      `),
      visual("plaster"),
      md(`
The formula CaSO₄·½H₂O is a stoichiometric formula: two CaSO₄ formula units correspond to one H₂O in the composition. It does not imply an isolated "half water molecule."

When Plaster of Paris is mixed with the correct amount of water, gypsum crystals reform. Their growth and interlocking produce the hard set mass; the process is hydration followed by recrystallisation, not merely evaporation of water. Excess mixing water leaves pores after drying and therefore weakens the set material.

**Exam Pattern:** Water of crystallisation ratio, gypsum : Plaster of Paris = 2 : ½ = 4 : 1. Excess mixing water does not strengthen the set plaster; after evaporation it leaves pores and generally weakens the mass.

2(CaSO₄·2H₂O) —(393 K)→ 2(CaSO₄·½H₂O) + 3H₂O

CaSO₄·2H₂O —(150 °C)→ CaSO₄·½H₂O —(200 °C)→ CaSO₄ —(1100 °C)→ CaO + SO₃

CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O (sets in 5–15 min)

"Dead-burnt" plaster (fully anhydrous CaSO₄, from overheating past 393 K) has lost the ability to set normally, because rehydration becomes far too slow.

**Core Focus:** Uses of Plaster of Paris

- Largest use in the building industry, as plaster
- Immobilising broken bones/sprains
- Dentistry, ornamental work, casts of statues and busts

**Exam Note:** Gypsum added to Portland cement (2–3%) plays a different chemical role than PoP's own setting reaction — it slows the setting of the cement's aluminate phase, preventing "flash setting"; it is not there to "set" the way PoP itself sets. PoP does not set to anhydrous CaSO₄ — it rehydrates back to gypsum (CaSO₄·2H₂O). "Dead-burnt" plaster ≠ Plaster of Paris; dead-burnt is the fully anhydrous, non-setting form.

### 14.5 Cement (Portland Cement)

First made in England in 1824 by Joseph Aspdin; named "Portland cement" for its resemblance to limestone quarried on the Isle of Portland. Made by strongly heating limestone with clay to form "cement clinker," then mixing the clinker with 2–3% gypsum.

| Component | % by mass |
|---|---|
| CaO | 50–60 |
| SiO₂ | 20–25 |
| Al₂O₃ | 5–10 |
| MgO | 2–3 |
| Fe₂O₃ | 1–2 |
| SO₃ | 1–2 |

Quality control ratios: silica/alumina ratio between 2.5–4; lime/(silica+alumina+iron oxide) ratio as close to 2 as possible.

| Cement ingredient | Formula | % present |
|---|---|---|
| Dicalcium silicate | Ca₂SiO₄ | 26 |
| Tricalcium silicate | Ca₃SiO₅ | 51 |
| Tricalcium aluminate | Ca₃Al₂O₆ | 11 |

Setting = hydration of these constituents + their rearrangement into a hard interlocking mass; gypsum's role is purely to slow this down enough to avoid flash-setting.

Sorel cement (a different cement entirely, not part of Portland cement chemistry): a paste-like mixture of MgO and MgCl₂ that sets to a hard mass on standing; used in dental filling and flooring.
      `),
    ],
  },

  {
    id: "aem-15-biological-importance",
    label: "15. Biological Importance of Magnesium and Calcium",
    blocks: [
      md(`
## 15. Biological Importance of Magnesium and Calcium

Mg²⁺ also stabilises highly charged phosphate-containing biomolecular environments and contributes to normal cellular and neuromuscular function. The biochemical importance of Mg²⁺ is therefore broader than chlorophyll alone: it is tightly linked to phosphate chemistry and ATP-dependent enzymes.

A useful biochemical representation is ATP⁴⁻ + Mg²⁺ ⇌ MgATP²⁻. In cells, ATP is commonly handled by enzymes as a Mg²⁺ complex rather than as a completely free highly charged anion; Mg²⁺ helps organise and shield the phosphate groups during phosphoryl-transfer reactions.

In hard tissue, calcium phosphate is better described by apatite-type phases than by a single simple salt. Hydroxyapatite, Ca₁₀(PO₄)₆(OH)₂, is the standard structural formula for the principal mineral framework; tooth enamel contains substantial fluorapatite-type substitution, consistent with its lower acid solubility.

Chlorophyll a: Mg²⁺ is coordinated by four ring nitrogens in a chlorin-type macrocycle (a porphyrin-derived ring), with substituents including CH₃, CH=CH₂, C₂H₅, CO₂CH₃ and the long CH₂–CH₂–CO₂–phytol chain around the ring.
      `),
      visual("chlorophyll-mg"),
      md(`
6CO₂ + 6H₂O —(chlorophyll, sunlight)→ C₆H₁₂O₆ + 6O₂
      `),
      visual("biology"),
      md(`
Mg²⁺ is concentrated mainly inside animal cells, whereas Ca²⁺ is concentrated mainly in extracellular body fluids. Mg²⁺ complexes participate in ATP-dependent phosphate-transfer enzymes and the ion is central to chlorophyll. Ca²⁺ is essential to bone and tooth mineral, blood coagulation, muscle contraction and the maintenance of a regular heartbeat.

Oxygenic photosynthesis converts CO₂ and H₂O into carbohydrate with O₂ as a by-product. A substantial fraction of global photosynthesis is carried out by algae as well as higher plants. Certain anaerobic photosynthetic bacteria use H₂S or other reduced substrates instead of H₂O and therefore do not evolve O₂ in the same way.

An adult human body contains roughly 25 g of Mg and 1200 g of Ca (compare only 5 g Fe, 0.06 g Cu) — daily requirement 200–300 mg.

**Magnesium**

- Cofactor for all enzymes that utilise ATP in phosphate transfer (phosphohydrolases, phosphotransferases).
- The central metal ion of chlorophyll — essential for light absorption in photosynthesis.
- Essential for transmission of impulses along nerve fibres; concentrated inside cells, like K⁺.

**Calcium**

- ≈99% of body Ca is in bones and teeth as an apatite-type mineral; tooth enamel specifically is fluorapatite [3Ca₃(PO₄)₂·CaF₂]. Bone is metabolically active, not inert — roughly 400 mg/day passes through the plasma pool, being continuously dissolved and redeposited.
- Regulates neuromuscular function, interneuronal transmission, cell-membrane integrity, and blood coagulation.
- Plasma calcium is held at ~100 mg/L, regulated by calcitonin and parathyroid hormone.
- Concentrated outside cells (in body fluids), like Na⁺; required to trigger muscle contraction and to maintain the regular beating of the heart.
      `),
    ],
  },
];
