// Purification and Characterisation of Organic Compounds — JEE / NEET master notes.
//
// Independently written for SYNERGIC BOND. This chapter is a synthesis of the
// standard, non-proprietary body of practical organic chemistry that is common
// to the Class XI syllabus and to every general reference in the field. It
// contains no verbatim text, tables, figures or problem sets copied from any
// single source. Section structure, the "principle / what it separates /
// how far it goes / where it fails" framing, the JEE TRAP / KEY POINT call-outs,
// every worked example and every practice question are original to this
// chapter. Physical constants (atomic masses, molar volume, boiling points)
// are standard reference values.

export const POC_MASTER_MARKDOWN = String.raw`
## Notation and scope

1.  This chapter covers the "practical organic chemistry" block of the syllabus: the bonding and shape ideas needed to draw organic molecules, the allotropes of carbon, the five classical purification methods, qualitative analysis (detection of the elements), quantitative analysis (estimation of the elements) and the calculation of empirical and molecular formulae.

2.  "Sodium fusion extract", "Lassaigne's extract" and "sodium extract" all mean the same thing — the filtered aqueous solution obtained after fusing the compound with sodium metal.

3.  Molar volume of a gas at STP is taken as 22 400 mL mol⁻¹ (0 °C, 1 atm). Atomic masses: H 1, C 12, N 14, O 16, S 32, Cl 35.5, Br 80, I 127, Ag 108, Ba 137, P 31.

4.  Percentages quoted in worked examples are rounded to two decimal places.

# 1 Tetravalence of carbon and the shapes of organic molecules

## 1.1 Why carbon is tetravalent

Ground-state carbon is 1s² 2s² 2p². Only two unpaired electrons are visible, which would predict a divalent element. In practice carbon is almost always **tetravalent**: one 2s electron is promoted to the empty 2p orbital to give 2s¹ 2pₓ¹ 2p_y¹ 2p_z¹, four half-filled orbitals. The small promotion energy (≈ 400 kJ mol⁻¹) is more than recovered by forming two extra covalent bonds, each worth ≈ 350 kJ mol⁻¹ or more.

The four orbitals are not used as a bare s + three p set. They **hybridise** — mix into equivalent orbitals that point towards the corners of a regular polyhedron, minimising electron-pair repulsion and maximising overlap with the orbitals of the attached atoms.

| Hybridisation | Orbitals mixed | Geometry of hybrids | Angle | Unhybridised p | Example |
|----|----|----|----|----|----|
| sp³ | one s + three p | tetrahedral | 109°28′ | none | CH₄, C₂H₆, CCl₄, diamond |
| sp² | one s + two p | trigonal planar | 120° | one (⊥ to plane) | C₂H₄, C₆H₆, >C=O, graphite |
| sp | one s + one p | linear | 180° | two (mutually ⊥) | C₂H₂, HCN, CO₂, allene central C |

> Key Point: the number of hybrid orbitals equals the number of σ bonds plus lone pairs on the atom (its steric number). Count σ bonds and lone pairs first; the hybridisation and shape follow. A double bond counts as one σ (plus one π); a triple bond as one σ (plus two π).

## 1.2 sigma and pi bonds

A **σ (sigma) bond** forms by **end-on (axial) overlap** of orbitals along the internuclear axis. The electron density is concentrated between the two nuclei and is cylindrically symmetric about the bond axis. Every single bond is a σ bond; the first bond of any multiple bond is a σ bond. σ bonds are strong and permit free rotation.

A **π (pi) bond** forms by **sideways (lateral) overlap** of two parallel unhybridised p orbitals. The electron density lies in two lobes, one above and one below the plane containing the nuclei; there is a nodal plane through the bond axis. A π bond is weaker than the σ bond it accompanies, cannot exist alone, and **locks rotation** about the bond (the basis of geometrical isomerism).

| Feature | σ bond | π bond |
|----|----|----|
| Overlap | end-on, along axis | sideways, parallel p orbitals |
| Electron density | maximum on the internuclear axis | above and below the axis; node on the axis |
| Exists alone? | yes | no — only with a σ bond |
| Rotation about bond | free | restricted (rotation breaks the π overlap) |
| Relative strength | stronger (better overlap) | weaker |
| Effect on reactivity | framework — held in reserve | exposed — the site attacked by electrophiles |

In ethene, H₂C=CH₂, each carbon is sp². Two sp² orbitals bond to H atoms and one bonds to the other carbon (three σ bonds, all in one plane). The leftover p orbital on each carbon, perpendicular to that plane, overlap sideways to give the C=C π bond. All six atoms are coplanar; twisting one CH₂ group out of plane destroys the π overlap, so the C=C bond is rotationally rigid.

In ethyne, HC≡CH, each carbon is sp. One sp orbital bonds to H and one to the other carbon (two σ bonds, linear). Two perpendicular p orbitals on each carbon form **two** π bonds. The four π electrons form a cylindrical sheath around the C–C axis — HC≡CH is linear and the π cloud is exposed on all sides.

## 1.3 What changes with hybridisation — a set of trends

As the s-character of the carbon hybrid rises (sp³ 25 % → sp² 33 % → sp 50 %) the hybrid orbital is pulled closer to the nucleus. Consequences worth memorising:

| Quantity | sp³ | sp² | sp | Trend |
|----|----|----|----|----|
| s-character | 25 % | 33 % | 50 % | rises sp³ → sp |
| Effective electronegativity of C | lowest | intermediate | highest | rises with s-character |
| C–H bond length | 109 pm (ethane) | 108 pm (ethene) | 106 pm (ethyne) | shortens |
| C–C bond length | 154 pm | 134 pm | 120 pm | shortens (more bonds + shorter σ) |
| C–H bond enthalpy / acidity of that H | weakest bond, least acidic | intermediate | strongest bond, most acidic | ≡C–H is acidic enough to lose H⁺ to a strong base |

> Key Point: the acidity order of terminal C–H, HC≡CH \> H₂C=CH₂ \> H₃C–CH₃, is an s-character effect. The sp carbanion (acetylide) holds its lone pair in an orbital that is 50 % s, close to the nucleus and low in energy, so it is the most stable of the three carbanions.

## 1.4 Shapes of simple organic molecules

Shape is read off the steric number (σ bonds + lone pairs) of each polyatomic atom:

| Molecule | Central atom, steric no. | Hybridisation | Shape | Bond angle |
|----|----|----|----|----|
| CH₄ (methane) | C, 4 | sp³ | tetrahedral | 109.5° |
| NH₃ (ammonia) | N, 4 (3 σ + 1 lp) | sp³ | trigonal pyramidal | 107° |
| H₂O (water) | O, 4 (2 σ + 2 lp) | sp³ | bent / angular | 104.5° |
| CH₃⁺ (methyl cation) | C, 3 | sp² | trigonal planar | 120° |
| CH₃⁻ (methyl anion) | C, 4 (3 σ + 1 lp) | sp³ | trigonal pyramidal | ≈ 109° |
| •CH₃ (methyl radical) | C, 3 + 1 e | ≈ sp² | near planar | ≈ 120° |
| C₂H₄ (ethene) | each C, 3 | sp² | planar; H–C–H ≈ 117°, H–C=C ≈ 121° | ≈ 120° |
| C₂H₂ (ethyne) | each C, 2 | sp | linear | 180° |
| HCHO (methanal) | C, 3 | sp² | trigonal planar | ≈ 120° |
| HCN | C, 2 | sp | linear | 180° |
| CO₂ | C, 2 | sp | linear | 180° |
| C₆H₆ (benzene) | each C, 3 | sp² | regular planar hexagon | 120° |
| allene H₂C=C=CH₂ | central C, 2 | sp | linear C=C=C; the two CH₂ planes are perpendicular | 180° at centre |

> JEE Trap: bond angle in CH₄ (109.5°), NH₃ (107°) and H₂O (104.5°) falls as lone pairs replace bonding pairs — lone pair–bond pair repulsion \> bond pair–bond pair. All three carbons/N/O are sp³; the hybridisation does not change, only the angle.

![Hybridisation and the shapes of methane, ethene and ethyne, with the σ / π overlap contrast.](/notes/purification-characterisation/poc_shapes.svg)

## 1.5 Representing organic structures

| Representation | What is shown | Example for propan-1-ol |
|----|----|----|
| Complete (Lewis / dash) | every atom and every bond, lone pairs optional | H₃C–CH₂–CH₂–O–H with all C–H bonds drawn |
| Condensed | bonds to H omitted; repeated groups collected | CH₃CH₂CH₂OH or CH₃(CH₂)₂OH |
| Bond-line (skeletal) | C and H on carbon not written; carbons at line ends and vertices; heteroatoms shown | a zig-zag with an OH at one end |
| Three-dimensional | wedge–dash: solid wedge = towards viewer, hashed wedge = away, plain line = in plane | tetrahedral carbon drawn with two in-plane bonds, one wedge, one dash |

In a bond-line formula each line end and each corner is a carbon carrying enough hydrogens to make it tetravalent. Only heteroatoms (O, N, Cl, …) and the hydrogens attached to them are drawn.

# 2 Allotropes of carbon

Carbon exists in several allotropic forms because it catenates strongly and can adopt sp³, sp² or sp hybridisation. The forms divide into **crystalline** (diamond, graphite, fullerenes) and **amorphous / microcrystalline** (coke, charcoal, carbon black, lampblack — all now known to be microcrystalline graphite).

## 2.1 Diamond

Each carbon is **sp³**, bonded tetrahedrally to four others by strong C–C σ bonds (154 pm). The result is a single giant three-dimensional covalent network — one crystal is one molecule.

*   Hardest natural substance; used in cutting, drilling, grinding and as abrasive; gem diamonds for jewellery.
*   Very high melting point (\> 3800 K) — melting means breaking a network of covalent bonds.
*   Electrical **insulator** — all four valence electrons are localised in σ bonds, none free to move.
*   High thermal conductivity (lattice vibrations travel efficiently through the rigid network).
*   Density 3.51 g cm⁻³ (higher than graphite — the tetrahedral packing is more compact than graphite's layers-with-gaps).

## 2.2 Graphite

Each carbon is **sp²**, bonded to three others in flat hexagonal sheets (C–C 141.5 pm within a sheet). The fourth electron of each carbon occupies a p orbital perpendicular to the sheet; these overlap to give a **delocalised π system spread over the whole layer**. Sheets stack 335 pm apart, held only by weak van der Waals forces.

*   **Soft and slippery** — sheets slide over one another; used as a lubricant (especially at high temperature and in vacuum, where oil fails) and in pencil "lead".
*   **Good electrical conductor along the sheets** — the delocalised π electrons are mobile in the plane (poor conductor perpendicular to the sheets); used for electrodes and in dry cells.
*   Very high melting point; chemically inert; used as a moderator in nuclear reactors and to make crucibles.
*   Thermodynamically the **most stable** allotrope at 298 K, 1 atm (diamond → graphite is favourable but immeasurably slow).
*   Density 2.25 g cm⁻³.

> Key Point: diamond vs graphite in one line — diamond is a 3-D sp³ σ network (hard, insulating); graphite is 2-D sp² sheets with a delocalised π system and weak interlayer forces (soft, conducting, more stable).

![Diamond — a three-dimensional sp³ network — versus graphite — stacked sp² sheets with a delocalised π system.](/notes/purification-characterisation/poc_allotropes.svg)

## 2.3 Fullerenes

Fullerenes are the only **molecular** (and therefore the only pure, soluble) allotrope. C₆₀ ("buckminsterfullerene") is a hollow cage of 60 sp² carbons arranged as **20 hexagonal and 12 pentagonal** faces — the pattern of a football. Every carbon is equivalent, at the junction of two hexagons and one pentagon, using three σ bonds and contributing to a delocalised π system over the surface. C₇₀ (rugby-ball shaped) and higher cages also exist.

*   Made by striking an electric arc between graphite electrodes in an inert atmosphere; separated by dissolving the soot in benzene/toluene (fullerenes give a magenta C₆₀ / red C₇₀ solution).
*   The cage has some strain (the pentagons force curvature), so C₆₀ behaves as a mild electrophile / poor "electron-poor alkene", undergoing addition rather than substitution.
*   Related sp² forms: **graphene** (a single graphite sheet — the strongest known material, a superb conductor) and **carbon nanotubes** (rolled graphene cylinders).

## 2.4 Amorphous forms (microcrystalline graphite)

| Form | Made from | Use |
|----|----|----|
| Coke | destructive distillation of coal | reducing agent in metallurgy, fuel |
| Charcoal (wood charcoal) | destructive distillation of wood | fuel; activated charcoal adsorbs gases and decolourises solutions |
| Animal charcoal (bone black) | heating bones in absence of air | decolourising agent in sugar refining |
| Carbon black / lampblack | incomplete combustion of hydrocarbons | filler in rubber tyres, printing ink, black paint |
| Gas carbon | deposited from coal gas manufacture | electrodes |

> JEE Trap: "amorphous carbon" is a misnomer — X-ray diffraction shows all these forms are extremely small crystals of graphite. Only the extent of ordering differs.

# 3 Purity and the criteria of purity

An organic compound obtained from a natural source or a synthesis is almost always contaminated — by unreacted starting material, by-products, solvents, catalyst residues or inorganic salts. Its **structure cannot be determined, and its properties cannot be measured, until it is pure.** Purification therefore precedes both qualitative and quantitative analysis.

## 3.1 Why a pure compound has sharp constants

A pure solid melts over a range of ≤ 0.5–1 °C at a **fixed, reproducible temperature**; a pure liquid boils at a fixed temperature at a stated pressure. An impurity:

*   **lowers and broadens the melting point** (depression of freezing point — a colligative effect — plus the melt is no longer a single substance, so different bits melt at slightly different temperatures);
*   usually **raises or lowers the boiling point** and makes it drift as distillation proceeds (the composition of the boiling liquid changes).

## 3.2 The tests used

| Criterion | How it is applied | A pure sample… |
|----|----|----|
| Melting point | heat a packed capillary slowly in a m.p. apparatus | melts sharply at the literature value |
| Mixed melting point | mix the sample with an authentic pure specimen and take the m.p. | shows **no depression and no broadening** only if the two are identical; any impurity (even the "authentic" one, if the sample is something else) depresses it |
| Boiling point | distil and read the thermometer at the still-head | boils at a constant temperature; the whole sample distils within ~1 °C |
| Distillation behaviour | collect fractions | a pure liquid gives essentially one fraction |
| TLC / paper chromatography | run the sample against known spots | a pure compound gives a **single spot** with a reproducible Rf |
| Constant composition on repeated crystallisation | recrystallise and re-check m.p. | m.p. no longer rises on further recrystallisation |

> Key Point: the mixed melting point test is the classic identity test. If an unknown and a known give the same sharp m.p. **and** their 1:1 mixture also melts sharply at that same temperature, they are the same compound. If the mixture melts lower and over a range, they are different.

# 4 Sublimation and crystallisation

## 4.1 Sublimation

**Principle.** A few solids pass directly from solid to vapour on heating (and back to solid on cooling) without an intervening liquid — they **sublime**. If the wanted compound sublimes and the impurities do not (or vice versa), gentle heating drives the volatile solid onto a cooled surface, leaving the non-volatile residue behind.

**Practically applicable to:** camphor, naphthalene, anthracene, benzoic acid, phthalic anhydride, ammonium chloride, iodine, and other solids with an appreciable vapour pressure below their melting point.

**Typical setup.** The impure solid is warmed in a china dish covered by a perforated filter paper and an inverted funnel plugged with cotton wool; pure crystals collect on the cool underside of the funnel.

**Where it fails:** most organic solids have negligible vapour pressure as solids and simply melt or char instead of subliming; and it cannot separate two solids that both sublime.

![Sublimation — the volatile solid vaporises from the warmed dish and re-deposits as pure crystals on the cool inverted funnel.](/notes/purification-characterisation/poc_sublimation.svg)

## 4.2 Crystallisation

**Principle.** Crystallisation exploits the **difference in solubility** of the compound and its impurities in a chosen solvent as a function of temperature. The compound must be **sparingly soluble in the cold solvent but freely soluble in the hot solvent**; the impurities must be either much more soluble (they stay in solution on cooling) or insoluble (they are filtered off hot).

**Procedure.**

1.  Dissolve the crude solid in the **minimum volume of hot solvent** to get a nearly saturated hot solution.
2.  If the solution is coloured by traces of impurity, boil briefly with a little **activated (decolourising) charcoal**, which adsorbs coloured impurities, then filter hot.
3.  **Filter the hot solution** (through a fluted paper / pre-warmed funnel) to remove insoluble impurities and the charcoal.
4.  **Cool slowly and undisturbed.** Slow cooling gives large, well-formed crystals that occlude little mother liquor; rapid cooling gives small crystals that trap impurities.
5.  Filter the crystals (Buchner / suction), wash with a little **cold** solvent, and dry (between filter papers, in an oven below the m.p., or in a desiccator).
6.  The **mother liquor** carries away the soluble impurities plus a little dissolved product. A second crop can be recovered by concentrating it.

**Choice of solvent.** A good crystallising solvent (i) dissolves the compound well when hot and poorly when cold, (ii) does not react with it, (iii) has a convenient (low) boiling point so it is easily removed, (iv) either does not dissolve the impurities at all or dissolves them completely at all temperatures. Common solvents: water, ethanol, methanol, acetone, diethyl ether, chloroform, benzene, petroleum ether, ethyl acetate, or a **mixed solvent pair** (one in which the compound is very soluble + one in which it is nearly insoluble) when no single solvent is suitable.

**Fractional crystallisation.** When two solutes of **comparable solubility** are present, one crystallisation is not enough. Repeated dissolution and crystallisation progressively enriches the crystals in the less soluble component and the mother liquor in the more soluble one. Example: separating a mixture of two alums, or KClO₃ (less soluble) from KCl (more soluble).

> Key Point: crystallisation is **not** precipitation. Crystallisation builds an ordered lattice slowly and rejects impurities; precipitation dumps a solid quickly and co-precipitates impurities. "Seeding" — adding one tiny crystal of the pure compound — starts orderly crystal growth in a solution reluctant to crystallise.

> JEE Trap: sugar contaminated with a little common salt is purified by crystallising from hot ethanol — sugar dissolves in hot ethanol, NaCl does not. The impurity's solubility, not the product's alone, decides the solvent.

# 5 Distillation — simple and fractional

**Distillation** = vaporise a liquid by heating and condense the vapour back to liquid in a separate vessel. It separates (i) a volatile liquid from a non-volatile solid or impurity, and (ii) two or more liquids that differ in boiling point.

## 5.1 Simple distillation

**Use.** Purify a liquid that has a **large boiling-point gap** (roughly \> 25–30 °C) from its companion, and that **does not decompose at its boiling point**.

**How it works.** The liquid is heated in a distillation flask; the more volatile component vaporises preferentially, its vapour passes the thermometer bulb at the side-arm, is condensed in a water condenser and collected in a receiver. The thermometer reads the boiling point of the distilling component and stays roughly constant while that component distils.

**Examples.** Chloroform (b.p. 61 °C) from aniline (b.p. 184 °C); acetone (b.p. 56 °C) from water; separating a volatile solvent from a non-volatile dissolved solid or dye.

## 5.2 Fractional distillation

**Use.** Separate two liquids whose boiling points are **close** (gap \< ~25 °C), where a single vaporisation–condensation gives a distillate still badly contaminated with the higher-boiling component.

**How it works.** A **fractionating column** is fitted between the flask and the still-head. As vapour rises, it repeatedly condenses on the packing and re-evaporates; each such cycle enriches the vapour in the more volatile component (a small "distillation" in itself). By the top of the column the vapour is essentially pure low-boiling component. One theoretical **plate** = one complete vaporisation–condensation equilibrium; a good column is worth many plates. Packings (glass beads, Raschig rings, a Vigreux or bubble-plate column) provide the surface for repeated exchange.

**Examples.** Acetone (56 °C) from methanol (65 °C); benzene from toluene; and — industrially — the **fractionation of petroleum** into refinery gas, petrol, naphtha, kerosene, diesel, lubricating oil and residue in a fractionating tower, and the separation of the components of liquefied air.

> JEE Trap: a **constant-boiling (azeotropic) mixture** distils unchanged in composition, so fractional distillation **cannot** separate it — e.g. rectified spirit is the ethanol–water azeotrope (95.6 % ethanol, b.p. 78.1 °C) and cannot be dried by distillation alone.

![Simple distillation (large boiling-point gap) and fractional distillation (close boiling points, with a fractionating column for repeated re-vaporisation).](/notes/purification-characterisation/poc_distillation.svg)

# 6 Distillation — reduced pressure and steam distillation

## 6.1 Distillation under reduced pressure (vacuum distillation)

A liquid boils when its **vapour pressure equals the external pressure**. Lower the external pressure (water pump or vacuum pump) and the liquid boils at a **lower temperature**.

**Use.** Purify liquids that (i) have a **very high boiling point**, or (ii) **decompose at or below their normal boiling point**. Distilling them at reduced pressure lets them boil gently, well below the decomposition temperature.

**Examples.** Concentration of sugar-cane juice under reduced pressure in the sugar industry (saves fuel and avoids caramelisation); recovery of **glycerol from "spent lye"** in soap manufacture; purification of many heat-sensitive liquids and of concentrated sulphuric acid.

## 6.2 Steam distillation

**Principle.** When a liquid **immiscible with water** and **appreciably volatile in steam** is heated together with water, the total vapour pressure above the two-layer mixture is the **sum of the two pure vapour pressures** (each liquid exerts its own, independent of the other):

\[ P_{\text{total}} = p^{\circ}_{\text{water}} + p^{\circ}_{\text{compound}} \]

The mixture therefore boils when this **sum** reaches atmospheric pressure — at a temperature **below 100 °C**, and well below the compound's own boiling point. Steam is bubbled through the impure liquid; the compound distils over with the steam and is separated from the condensed water in a separating funnel.

**Composition of the distillate.** The two vapours are present in the ratio of their partial pressures, so the **mass ratio** carried over is:

\[ \frac{m_{\text{compound}}}{m_{\text{water}}} = \frac{p^{\circ}_{\text{compound}}\; M_{\text{compound}}}{p^{\circ}_{\text{water}}\; M_{\text{water}}} \]

A compound with a low vapour pressure can still be steam-distilled efficiently if its molar mass is high.

**Conditions the compound must satisfy:** (i) insoluble / immiscible with water, (ii) volatile in steam (a vapour pressure of roughly 10–15 mm Hg at 100 °C is enough), (iii) stable to boiling water, (iv) the impurities are non-volatile in steam.

**Examples.** Purification of **aniline** (from the aniline–water mixture made in its preparation), nitrobenzene, bromobenzene, *o*-nitrophenol (the *o*-isomer is steam-volatile because it is intramolecularly H-bonded; the *p*-isomer is not), essential oils and turpentine.

> JEE Trap: *o*-nitrophenol and *p*-nitrophenol are separated by steam distillation — only the *ortho* isomer, with an **intramolecular** H-bond, is steam-volatile. The *para* isomer forms **intermolecular** H-bonds, is less volatile and stays behind.

![Distillation under reduced pressure (for high-boiling or heat-sensitive liquids) and steam distillation (the vapour pressures add, so the mixture boils below 100 °C).](/notes/purification-characterisation/poc_vacuum_steam.svg)

### Worked example — steam distillation

An organic compound, immiscible with water and steam-volatile, is steam-distilled at a total pressure of 760 mm Hg. At the distillation temperature the vapour pressure of water is 745 mm Hg. The distillate collected contains 50.0 g of water and 7.16 g of the compound. Find the molar mass of the compound.

*Solution.* p°(compound) = 760 − 745 = 15 mm Hg.

\[ \frac{m_{\text{c}}}{m_{\text{w}}} = \frac{p^{\circ}_{\text{c}}\, M_{\text{c}}}{p^{\circ}_{\text{w}}\, M_{\text{w}}} \;\Rightarrow\; \frac{7.16}{50.0} = \frac{15 \times M_{\text{c}}}{745 \times 18} \]

M(compound) = (7.16 × 745 × 18) / (50.0 × 15) = **≈ 128 g mol⁻¹** (naphthalene).

# 7 Differential extraction and chemical methods of separation

## 7.1 Differential (solvent) extraction

**Principle.** A solute distributes itself between two immiscible solvents in a fixed ratio at a given temperature — the **partition (distribution) law**, K = (conc. in solvent A)/(conc. in solvent B). To recover an organic compound from an **aqueous** solution (e.g. a reaction mixture), the aqueous layer is shaken in a **separating funnel** with an immiscible organic solvent in which the compound is **much more soluble**. The compound passes into the organic layer, which is run off; the solvent is then removed by distillation or evaporation to leave the compound.

**Choice of extracting solvent.** Immiscible with water; dissolves the compound far better than water does; unreactive; low-boiling (easily removed). **Diethyl ether** is the classic choice — low polarity, low reactivity, low boiling point, and it dissolves most organic compounds well.

**Multiple small extractions beat one large one.** Because partition is an equilibrium, extracting three times with one-third of the solvent each time removes more of the compound than a single extraction with the whole volume. When K is unfavourable, **continuous extraction** is used — the same solvent is distilled, passed through the aqueous layer and returned, over and over.

## 7.2 Chemical methods of separation

When two compounds differ in a **chemical property** (acidity, basicity), a reagent can convert one of them into a water-soluble salt, which is then separated from the water-insoluble neutral compound by extraction, and regenerated.

| Component | Reagent | Goes into | Regenerated by |
|----|----|----|----|
| Carboxylic acid (RCOOH) | aqueous NaHCO₃ | water layer as RCOO⁻Na⁺ | acidify with dil. HCl / H₂SO₄ |
| Phenol (ArOH) | aqueous NaOH (not NaHCO₃ — phenol is too weak) | water layer as ArO⁻Na⁺ | acidify (or pass CO₂) |
| Amine (RNH₂ / ArNH₂) | dil. HCl | water layer as RNH₃⁺Cl⁻ | basify with NaOH |
| Neutral compound (hydrocarbon, ketone, ether) | — | stays in the organic layer throughout | — |

This is the basis of the classic **acid / base / neutral workup**: shake the ether solution of a mixture successively with NaHCO₃ (removes acids), then NaOH (removes phenols), then dil. HCl (removes bases); the neutral compound is left in the ether.

> Key Point: NaHCO₃ separates a carboxylic acid from a phenol — a carboxylic acid (pKₐ ≈ 4–5) is acidic enough to be deprotonated by bicarbonate and dissolves with **effervescence** (CO₂); phenol (pKₐ ≈ 10) is not, and needs the stronger base NaOH.

# 8 Chromatography

**Chromatography** (Greek *chroma* = colour, *graphein* = to write; first used by Tswett to separate leaf pigments) is the most powerful modern technique for **separating, purifying and testing the purity** of even microgram amounts of a mixture, including colourless and closely related compounds.

## 8.1 The common principle and terms

A mixture is placed on a fixed **stationary phase** (large surface area). A **mobile phase** (liquid or gas) then flows steadily over it. Each component distributes itself between the two phases to a different extent, so each is carried along at a different speed and the components separate into bands.

| Term | Meaning |
|----|----|
| Stationary phase | the fixed phase: a solid adsorbent (silica gel, alumina) or a liquid held on a solid |
| Mobile phase | the moving phase: a solvent, mixture of solvents (the **eluent**), or a gas |
| Elution | washing the separated components off the column with fresh solvent |
| Chromatogram | the developed strip / plate / column showing the separated bands |
| Retardation factor Rf | distance moved by the component ÷ distance moved by the solvent front (from the same base line); 0 \< Rf ≤ 1 |

## 8.2 Classification

**By principle:** *adsorption* chromatography (components adsorbed on a solid to different degrees — column, TLC) and *partition* chromatography (components partitioned between two liquids to different degrees — paper). Also ion-exchange, size-exclusion and others.

**By technique:** column, thin-layer (TLC), paper, gas–liquid (GLC), gas–solid (GSC), HPLC.

## 8.3 Adsorption chromatography

**Column chromatography.** A glass column is packed with the adsorbent (silica gel or alumina) moistened with solvent, over a plug of glass wool. The mixture, dissolved in a little solvent, is loaded on top; the eluent is run through slowly. **More strongly adsorbed components move slowly (stay near the top); weakly adsorbed components move fast (elute first).** Fractions are collected as each band leaves the column.

**Thin-layer chromatography (TLC).** A thin (~0.2 mm) layer of adsorbent is coated on a glass or plastic plate. A spot of the solution is applied ~2 cm above one end (the **base line**); the plate is stood in a covered jar with a shallow pool of eluent. The eluent rises by capillary action, carrying the components to different heights. The developed spots are located by:

*   their own colour (coloured compounds);
*   viewing under UV light (many compounds fluoresce, or quench a fluorescent indicator in the layer);
*   placing the plate in iodine vapour (many compounds give brown spots);
*   spraying a reagent — e.g. **ninhydrin** for amino acids.

\[ R_f = \frac{\text{distance moved by the substance from the base line}}{\text{distance moved by the solvent front from the base line}} \]

Rf is a constant for a compound under fixed conditions (adsorbent, solvent, temperature, layer thickness), so it helps in identification. **More polar compounds are held more strongly by the polar adsorbent and have a lower Rf.**

> Key Point: on a polar stationary phase (silica/alumina) with a less polar eluent, the **least polar** component travels **farthest** (highest Rf) and the **most polar** travels least. TLC is routinely used to monitor the progress of a reaction and to work out the right solvent before running a preparative column.

![Column chromatography (bands separate down a packed column) and thin-layer chromatography (spots rise to different heights; Rf compares each to the solvent front).](/notes/purification-characterisation/poc_chromatography.svg)

## 8.4 Partition chromatography — paper chromatography

Chromatography paper is cellulose holding **water** trapped in its fibres — the water is the stationary (liquid) phase. A spot of the mixture is applied near one end; the strip is suspended so the end dips into the developing solvent (the mobile phase). As the solvent rises, each component **partitions continuously between the immobile water and the moving organic solvent** and travels at its own rate. The developed **chromatogram** is dried and the spots located as in TLC; Rf values are measured.

## 8.5 Applications

Purifying reaction products; monitoring reactions (TLC); separating optical isomers and closely related natural products in the pharmaceutical industry; quality control and additive/contaminant detection in the food industry; testing air and water for pollutants; detecting drugs and metabolites in blood and urine.

# 9 Detection of carbon, hydrogen and nitrogen

Qualitative analysis answers **which elements** are present. Carbon and hydrogen are assumed (they define an organic compound) but can be confirmed; the compound may also contain O, N, S, halogens and P.

## 9.1 Detection of carbon and hydrogen

The compound is heated strongly with dry **copper(II) oxide**. Carbon is oxidised to CO₂, hydrogen to H₂O:

C + 2CuO [Δ] ⟶ 2Cu + CO₂

2H + CuO [Δ] ⟶ Cu + H₂O

*   **CO₂** is passed into lime water, which turns milky: CO₂ + Ca(OH)₂ ⟶ CaCO₃ + H₂O.
*   **Water** condenses on the cooler part of the tube and turns anhydrous white copper(II) sulphate blue: CuSO₄ + 5H₂O ⟶ CuSO₄·5H₂O.

## 9.2 Lassaigne's (sodium fusion) test — the key idea

N, S, halogens and P are held in the compound by **covalent** bonds and give no ionic tests directly. Fusing the compound with **sodium metal** converts them to **ionic** sodium salts, which then respond to standard inorganic tests:

Na + C + N [fusion; Δ] ⟶ NaCN

2Na + S [fusion; Δ] ⟶ Na₂S

Na + X [fusion; Δ] ⟶ NaX   (X = Cl, Br, I)

2Na + 3P + ... ⟶ Na₃P (phosphide; alternatively P is oxidised — see §10.4)

A small piece of dry sodium is heated in an ignition tube until it melts, the compound is added, the tube is heated to redness and plunged while hot into distilled water in a china dish. The tube shatters; the contents are boiled and filtered. The filtrate — **sodium fusion extract (SFE)** — is alkaline and is used for all the following tests.

## 9.3 Test for nitrogen — the Prussian-blue test

The SFE contains CN⁻. Add fresh **iron(II) sulphate** solution and warm; some Fe²⁺ is air-oxidised to Fe³⁺. Then acidify with dilute sulphuric acid:

Fe²⁺ + 6CN⁻ ⟶ [Fe(CN)₆]⁴⁻

3[Fe(CN)₆]⁴⁻ + 4Fe³⁺ ⟶ Fe₄[Fe(CN)₆]₃

The product, **iron(III) hexacyanidoferrate(II) — "Prussian blue" — is a blue precipitate or colour** and confirms nitrogen. If little nitrogen is present the Prussian blue is colloidal and the solution looks **green or blue-green**.

**Precautions / traps.**

*   Add H₂SO₄ **after** forming the ferrocyanide, to dissolve the green Fe(OH)₂ / Fe(OH)₃ and leave the blue colour clear. Too much acid decomposes the ferrocyanide.
*   **Diazonium salts** and some other compounds lose their nitrogen as N₂ gas during fusion, so they can give a **false negative**.
*   **Hydrazine** (N₂H₄) has no carbon, so no CN⁻ can form — it gives no Lassaigne test for nitrogen even though it is full of nitrogen.

## 9.4 If nitrogen and sulphur are both present

Fusion then produces **sodium thiocyanate**, not separate cyanide and sulphide (unless a large excess of sodium is used):

Na + C + N + S [fusion] ⟶ NaSCN

With Fe³⁺ this gives the **blood-red** colour of [Fe(SCN)]²⁺ — **not** Prussian blue, because there are no free CN⁻ ions. With **excess sodium**, the thiocyanate is destroyed (NaSCN + 2Na ⟶ NaCN + Na₂S) and the separate cyanide and sulphide tests then work normally.

# 10 Detection of sulphur, halogens and phosphorus

## 10.1 Test for sulphur

**(a) Lead acetate test.** Acidify part of the SFE with acetic acid and add **lead acetate** solution. A **black precipitate** of lead sulphide confirms sulphur:

S²⁻ + Pb²⁺ ⟶ PbS

Acetic acid (a weak acid) is used, not a strong mineral acid — a strong acid would evolve H₂S and also decompose any thiocyanate present, giving misleading results.

**(b) Sodium nitroprusside test.** To another part of the SFE (not acidified) add freshly prepared **sodium nitroprusside**. A deep **violet / purple** colour indicates sulphur:

S²⁻ + [Fe(CN)₅NO]²⁻ ⟶ [Fe(CN)₅NOS]⁴⁻

## 10.2 Test for halogens — the silver nitrate test

Acidify part of the SFE with **dilute nitric acid**, boil, and add **silver nitrate** solution:

X⁻ + Ag⁺ ⟶ AgX

| Halogen | Precipitate | Solubility in NH₃(aq) |
|----|----|----|
| Cl | white AgCl | readily soluble |
| Br | pale-yellow AgBr | sparingly soluble |
| I | yellow AgI | insoluble |

> JEE Trap: **why boil the acidified SFE before adding AgNO₃?** If N and/or S are present, the extract also contains CN⁻ and S²⁻, which would themselves precipitate white AgCN and black Ag₂S and confuse the result. Boiling with dilute (or, better, concentrated) HNO₃ decomposes them: NaCN + HNO₃ ⟶ NaNO₃ + HCN↑ and Na₂S + 2HNO₃ ⟶ 2NaNO₃ + H₂S↑. Only then is the silver-halide test reliable.

**Beilstein's test (a quick preliminary).** A clean copper wire is heated in a Bunsen flame until it no longer colours the flame, dipped in the compound, and returned to the flame. A **green or blue-green flame** (volatile copper halides) indicates a halogen. It is very sensitive but **not conclusive** — a few halogen-free compounds (urea, thiourea, some pyridine derivatives) also give it — and it does not say **which** halogen.

## 10.3 Test for phosphorus

The compound is heated with an **oxidising agent** (sodium peroxide, or a fusion mixture of Na₂CO₃ + KNO₃). Phosphorus is oxidised to **phosphate**. The solution is boiled with nitric acid and treated with **ammonium molybdate**:

P [oxidation] ⟶ PO₄³⁻

Na₃PO₄ + 3HNO₃ ⟶ H₃PO₄ + 3NaNO₃

H₃PO₄ + 12(NH₄)₂MoO₄ + 21HNO₃ ⟶ (NH₄)₃PO₄·12MoO₃ + 21NH₄NO₃ + 12H₂O

A **canary-yellow precipitate / colouration** of ammonium phosphomolybdate confirms phosphorus.

## 10.4 Detection summary

| Element | Species in SFE | Reagent(s) | Positive observation |
|----|----|----|----|
| N | CN⁻ | FeSO₄, then H₂SO₄ | Prussian-blue colour / ppt (green if trace) |
| N + S together | SCN⁻ | Fe³⁺ (neutral) | blood-red colour |
| S | S²⁻ | (a) CH₃COOH + Pb(CH₃COO)₂  (b) sodium nitroprusside | (a) black ppt  (b) violet colour |
| Cl / Br / I | X⁻ | dil. HNO₃ + AgNO₃ | white / pale-yellow / yellow ppt |
| Halogen (quick) | — | Beilstein (Cu wire in flame) | green flame (not conclusive) |
| P | PO₄³⁻ | conc. HNO₃ + ammonium molybdate | canary-yellow ppt |

# 11 Estimation of carbon, hydrogen and nitrogen

Quantitative analysis answers **how much** of each element is present — the mass percentage, from which the empirical formula is built.

## 11.1 Carbon and hydrogen — Liebig's combustion method

A weighed mass of the compound is burnt in a stream of **pure, dry, CO₂-free oxygen** over hot **copper(II) oxide**, which ensures complete oxidation. All carbon → CO₂, all hydrogen → H₂O:

C_xH_y + (x + y/4) O₂ [Δ, CuO] ⟶ x CO₂ + (y/2) H₂O

The combustion gases pass through, in order:

1.  a weighed U-tube of **anhydrous calcium chloride** (or magnesium perchlorate) — absorbs **water**;
2.  a weighed U-tube / bulb of **strong KOH solution** (or soda-lime) — absorbs **CO₂**.

The **increase in mass** of each absorber gives the mass of H₂O and CO₂ formed. If the compound also contains N, a coil of reduced copper gauze after the CuO reduces any oxides of nitrogen back to N₂ so they are not absorbed by the KOH.

\[ \%\,\text{C} = \frac{12}{44}\times\frac{\text{mass of CO}_2}{\text{mass of compound}}\times 100
\qquad
\%\,\text{H} = \frac{2}{18}\times\frac{\text{mass of H}_2\text{O}}{\text{mass of compound}}\times 100 \]

![Liebig combustion train — the sample is burnt over CuO in a stream of oxygen; water is absorbed in the CaCl₂ tube and CO₂ in the KOH tube (CaCl₂ first).](/notes/purification-characterisation/poc_liebig.svg)

> JEE Trap: the CaCl₂ tube must come **before** the KOH tube. KOH solution would remove **both** CO₂ and water vapour, so putting it first would make the "water" tube read low (or nothing) and destroy the hydrogen result.

### Worked example

0.2460 g of an organic compound on complete combustion gave 0.3608 g of CO₂ and 0.1970 g of H₂O. Find % C and % H.

%C = (12/44) × (0.3608 / 0.2460) × 100 = **40.02 %**

%H = (2/18) × (0.1970 / 0.2460) × 100 = **8.90 %**

## 11.2 Nitrogen — Dumas method

The compound is heated with **excess CuO in an atmosphere of CO₂**. C → CO₂, H → H₂O, and nitrogen is set free as **N₂** (any oxides of nitrogen are reduced to N₂ over a hot reduced-copper gauze):

C_xH_yN_z + (2x + y/2) CuO [Δ] ⟶ x CO₂ + (y/2) H₂O + (z/2) N₂ + (2x + y/2) Cu

The gas stream is collected over **KOH solution** in a graduated tube (nitrometer): KOH absorbs the CO₂ and the water vapour, so only **N₂ collects** and its volume is read.

![Dumas apparatus — the compound is swept through hot CuO by a CO₂ stream; N₂ passes a reduced-copper gauze and collects over KOH in the nitrometer.](/notes/purification-characterisation/poc_dumas.svg)

**Reducing the measured volume to STP.** The nitrogen is collected moist, over KOH, at room temperature T₁ and total pressure = atmospheric. Its own (dry) pressure is

\[ p_1 = P_{\text{atm}} - (\text{aqueous tension at }T_1) \]

Then

\[ V_{\text{STP}} = \frac{p_1 V_1}{760}\times\frac{273}{T_1}
\qquad
\%\,\text{N} = \frac{28}{22400}\times\frac{V_{\text{STP}}}{\text{mass of compound}}\times 100 \]

### Worked example

0.30 g of a compound gave 50.0 mL of nitrogen collected over KOH at 300 K and 715 mm Hg. Aqueous tension at 300 K = 15 mm Hg. Find % N.

Dry pressure of N₂ = 715 − 15 = 700 mm Hg.

V(STP) = (700 × 50.0 / 760) × (273 / 300) = 41.9 mL

%N = (28 / 22400) × (41.9 / 0.30) × 100 = **17.46 %**

## 11.3 Nitrogen — Kjeldahl's method

The compound is heated ("digested") with **hot concentrated sulphuric acid**, with **K₂SO₄** (raises the boiling point) and a trace of **CuSO₄ / Hg / Se** (catalyst). Organic nitrogen is converted quantitatively to **ammonium sulphate**:

compound + H₂SO₄ [Δ; K₂SO₄, CuSO₄] ⟶ (NH₄)₂SO₄ + CO₂ + H₂O + SO₂

The digest is made alkaline with **excess NaOH** and the liberated **ammonia** is distilled (through a Kjeldahl trap) into a **known excess volume of standard acid** (H₂SO₄ or HCl):

(NH₄)₂SO₄ + 2NaOH [Δ] ⟶ Na₂SO₄ + 2NH₃↑ + 2H₂O

2NH₃ + H₂SO₄ ⟶ (NH₄)₂SO₄

The acid **not** neutralised by ammonia is found by back-titration against standard NaOH. Let the mass of compound be *w* g.

![Kjeldahl's method — digestion of the compound with concentrated H₂SO₄ (left), then distillation of the liberated ammonia into a known excess of standard acid (right).](/notes/purification-characterisation/poc_kjeldahl.svg)

**Direct-absorption form** (ammonia passed into *V* mL of acid of normality *N* that it exactly neutralises, or into an excess and the excess subtracted first):

\[ \%\,\text{N} = \frac{1.4 \times N \times V}{w} \]

**Excess-acid / back-titration form** — *V₁* mL of *M₁*-molar H₂SO₄ taken, *V₂* mL of *M₂*-molar NaOH needed for the excess:

\[ \text{millimoles of NH}_3 = 2\left(M_1 V_1 - \tfrac{M_2 V_2}{2}\right)
\qquad
\%\,\text{N} = \frac{14 \times \text{millimoles of NH}_3}{w \times 1000}\times 100 \]

**Limitations.** Kjeldahl fails for compounds in which nitrogen is **not converted to ammonium** on digestion: **nitro (–NO₂), nitroso, azo (–N=N–), diazo, and ring nitrogen** (pyridine, quinoline). It is the standard method for proteins, foodstuffs, soils and fertilisers because there the nitrogen is amino / amide.

> JEE Trap: choose **Dumas**, not Kjeldahl, when the compound has –NO₂, –N=N– or ring N. Dumas works for **all** nitrogen compounds because it liberates N₂ directly. Kjeldahl is simpler and needs no gas measurement, but only for "reducible" nitrogen.

### Worked example (Kjeldahl)

0.50 g of a compound was digested by Kjeldahl's method; the ammonia was absorbed in 50.0 mL of 0.50 M H₂SO₄, and the excess acid needed 60.0 mL of 0.50 M NaOH. Find % N.

Initial millimoles H₂SO₄ = 50.0 × 0.50 = 25.0.
Millimoles NaOH for excess = 60.0 × 0.50 = 30.0 ⇒ millimoles excess H₂SO₄ = 30.0 / 2 = 15.0.
Millimoles H₂SO₄ that reacted with NH₃ = 25.0 − 15.0 = 10.0 ⇒ millimoles NH₃ = 20.0 ⇒ millimoles N = 20.0.

Mass of N = 20.0 × 10⁻³ × 14 = 0.28 g ⇒ %N = (0.28 / 0.50) × 100 = **56.0 %**.

# 12 Estimation of halogens, sulphur, phosphorus and oxygen

## 12.1 Halogens — Carius method

A weighed mass of the compound is heated with **fuming nitric acid and silver nitrate** in a sealed hard-glass tube (**Carius tube**) in a furnace. Carbon and hydrogen are oxidised to CO₂ and H₂O; the halogen is precipitated as **silver halide**, which is filtered, washed, dried and weighed.

\[ \%\,\text{X} = \frac{\text{atomic mass of X}}{\text{molar mass of AgX}}\times\frac{\text{mass of AgX}}{\text{mass of compound}}\times 100 \]

with AgCl = 143.5, AgBr = 188, AgI = 235.

![Carius method — the compound is heated with fuming HNO₃ and AgNO₃ in a sealed hard-glass tube; the halogen ends up as silver halide, sulphur as barium sulphate.](/notes/purification-characterisation/poc_carius.svg)

### Worked example

0.150 g of an organic compound gave 0.120 g of silver bromide in a Carius estimation. Find % Br.

%Br = (80 / 188) × (0.120 / 0.150) × 100 = **34.04 %**

## 12.2 Sulphur — Carius method

The compound is heated in a Carius tube with **sodium peroxide or fuming nitric acid**; sulphur is oxidised to **sulphate**, precipitated as **barium sulphate** with BaCl₂, and weighed.

\[ \%\,\text{S} = \frac{32}{233}\times\frac{\text{mass of BaSO}_4}{\text{mass of compound}}\times 100 \]

### Worked example

0.1570 g of a compound gave 0.4813 g of BaSO₄. Find % S.

%S = (32 / 233) × (0.4813 / 0.1570) × 100 = **42.10 %**

## 12.3 Phosphorus

The compound is oxidised (fuming HNO₃, or Na₂O₂) to **phosphoric acid**, which is precipitated **either** as ammonium phosphomolybdate, **or** as **magnesium ammonium phosphate** (with magnesia mixture, MgCl₂ + NH₄Cl + NH₃), which is ignited to **magnesium pyrophosphate, Mg₂P₂O₇**, and weighed:

\[ \%\,\text{P} = \frac{62}{222}\times\frac{\text{mass of Mg}_2\text{P}_2\text{O}_7}{\text{mass of compound}}\times 100 \]

(62 = mass of 2 P atoms; 222 = molar mass of Mg₂P₂O₇). If weighed as ammonium phosphomolybdate (NH₄)₃PO₄·12MoO₃ (molar mass 1877), use factor 31/1877.

## 12.4 Oxygen

Oxygen is usually found **by difference**:

\[ \%\,\text{O} = 100 - (\%\text{C} + \%\text{H} + \%\text{N} + \%\text{S} + \%\text{X} + \dots) \]

It can also be estimated **directly** (Schütze–Aluise method): the compound is pyrolysed in a stream of N₂; the products are passed over **red-hot coke**, converting all the oxygen to **CO**, which is then oxidised by **iodine pentoxide** to CO₂ (liberating I₂, which can also be titrated):

I₂O₅ + 5CO ⟶ I₂ + 5CO₂

\[ \%\,\text{O} = \frac{16}{44}\times\frac{\text{mass of CO}_2}{\text{mass of compound}}\times 100 \]

> Key Point: estimating oxygen by difference piles **all** the experimental errors of the other elements onto the oxygen figure. A direct method is used when an accurate oxygen value matters.

## 12.5 Modern practice — the CHNS elemental analyser

Micro-scale automated instruments burn 1–3 mg of sample in oxygen and use gas chromatography or specific detectors to read **C, H, N and S in one run** within minutes. The classical methods above remain the ones examined because they show the chemistry.

# 13 Empirical and molecular formulae

## 13.1 Definitions

*   **Empirical formula** — the simplest whole-number ratio of atoms of each element.
*   **Molecular formula** — the actual number of atoms of each element in one molecule; always a whole-number multiple *n* of the empirical formula.

\[ n = \frac{\text{molar mass}}{\text{empirical formula mass}}
\qquad
\text{molecular formula} = (\text{empirical formula})_n \]

## 13.2 Method

1.  From the mass percentages, divide each element's % by its **atomic mass** → relative number of moles.
2.  Divide all by the **smallest** of these → the atom ratio.
3.  If any ratio is not close to a whole number, multiply **all** by the smallest integer that makes them whole (×2 for .5, ×3 for .33/.67, ×4 for .25/.75).
4.  Write the empirical formula; find its formula mass.
5.  If the molar mass (from a vapour-density, mass-spectral or colligative measurement) is given, compute *n* and write the molecular formula.

## 13.3 Worked example 1 — all data given

A compound contains C 40.0 %, H 6.7 %, O 53.3 %; its molar mass is 180 g mol⁻¹. Find the molecular formula.

| Element | % | ÷ atomic mass | mole ratio | ÷ smallest (3.33) |
|----|----|----|----|----|
| C | 40.0 | 40.0/12 = 3.33 | 3.33 | 1 |
| H | 6.7 | 6.7/1 = 6.7 | 6.7 | 2 |
| O | 53.3 | 53.3/16 = 3.33 | 3.33 | 1 |

Empirical formula **CH₂O**, empirical mass = 30. n = 180 / 30 = 6. **Molecular formula C₆H₁₂O₆** (a hexose).

## 13.4 Worked example 2 — oxygen by difference, from combustion data

An organic compound contains C, H and O only. On combustion, 0.225 g of it gave 0.330 g CO₂ and 0.135 g H₂O. Vapour density = 30. Find the molecular formula.

%C = (12/44)(0.330/0.225)×100 = 40.0 %

%H = (2/18)(0.135/0.225)×100 = 6.67 %

%O = 100 − 40.0 − 6.67 = 53.33 %

| Element | % | ÷ atomic mass | mole ratio | ÷ smallest (3.33) |
|----|----|----|----|----|
| C | 40.0 | 40.0/12 = 3.33 | 3.33 | 1 |
| H | 6.67 | 6.67/1 = 6.67 | 6.67 | 2 |
| O | 53.33 | 53.33/16 = 3.33 | 3.33 | 1 |

Empirical formula **CH₂O**, empirical mass = 30. Molar mass = 2 × V.D. = 60 ⇒ n = 60/30 = 2. **Molecular formula C₂H₄O₂** (e.g. ethanoic acid).

> Key Point: the commonest mistake in formula problems is rounding % or mole values too soon. Keep at least three significant figures until the final ratio, and only then round to the nearest simple integer set. Always check that the empirical-formula mass divides the molar mass to a whole number *n* — if it does not, the ratio was taken wrongly.

## 13.5 Degree of unsaturation — a built-in check

For a formula C_cH_hN_nO_o (O does not affect it):

\[ \text{DoU} = \frac{2c + 2 + n - h}{2} \]

Each ring and each π bond contributes 1. A DoU of 4 with a C₆ skeleton is the signature of a benzene ring. A negative or non-integer DoU means the molecular formula is wrong.

# 14 JEE traps and quick-revision tables

## 14.1 Twenty high-yield traps

1.  **Beilstein's test is not conclusive** for halogen — urea and thiourea (no halogen) also give a green flame.
2.  **Lassaigne's test for N fails for diazonium salts** (they lose N₂ on fusion) and for compounds with no carbon (hydrazine, hydroxylamine) — no CN⁻ can form.
3.  **N + S together → NaSCN → blood-red** with Fe³⁺, **not** Prussian blue. Excess Na destroys SCN⁻ and restores the separate tests.
4.  **Boil the SFE with conc. HNO₃ before the AgNO₃ halogen test** to expel HCN and H₂S; otherwise white AgCN / black Ag₂S interfere.
5.  **Acetic acid, not a mineral acid**, is used to acidify before the lead-acetate sulphur test.
6.  In Liebig combustion the **CaCl₂ (water) tube comes before the KOH (CO₂) tube** — KOH absorbs water too.
7.  **KOH, not CaCl₂**, absorbs CO₂; **CaCl₂/Mg(ClO₄)₂**, not KOH, absorbs H₂O.
8.  A **reduced-copper gauze** after the CuO reduces oxides of nitrogen to N₂ in both Liebig (so they don't disturb CO₂) and Dumas (so all N is counted).
9.  **Kjeldahl fails for –NO₂, –N=N–, –NO and ring N**; use **Dumas** for those.
10.  Dumas gives **N₂**; Kjeldahl gives **NH₃ / NH₄⁺**.
11.  **22 400 mL of N₂ at STP weighs 28 g** — the Dumas working constant.
12.  Nitrogen in Dumas is collected **over KOH** (absorbs CO₂ and water vapour), so subtract **aqueous tension** to get the dry N₂ pressure.
13.  **AgCl white / soluble in NH₃; AgBr pale-yellow / sparingly soluble; AgI yellow / insoluble.**
14.  **Steam distillation needs a water-immiscible, steam-volatile, thermally stable compound** — it boils below 100 °C because the vapour pressures **add**.
15.  *o*-Nitrophenol is steam-volatile (intramolecular H-bond); *p*-nitrophenol is not (intermolecular H-bonds).
16.  **Azeotropes cannot be separated by fractional distillation** — rectified spirit (95.6 % ethanol) is the standard example.
17.  **Vacuum distillation** is for high-boiling or heat-sensitive liquids (glycerol from spent lye; concentrating cane juice).
18.  On a polar TLC/column adsorbent, the **more polar** component has the **lower Rf** and elutes **later**.
19.  **NaHCO₃ separates a carboxylic acid (dissolves, with CO₂) from a phenol (does not)**; NaOH dissolves both.
20.  **Crystallisation ≠ precipitation**; slow cooling → pure large crystals; fast cooling → impure small crystals.

## 14.2 Purification method chooser

| Situation | Method |
|----|----|
| Solid that sublimes; impurity does not | sublimation |
| Solid, soluble hot / insoluble cold; impurity insoluble or freely soluble | crystallisation |
| Two solids of similar solubility | fractional crystallisation |
| Volatile liquid + non-volatile impurity; b.p. gap large | simple distillation |
| Two liquids, close boiling points, no azeotrope | fractional distillation |
| Liquid with very high b.p. or that decomposes on boiling | distillation under reduced pressure |
| Water-immiscible, steam-volatile, heat-stable liquid | steam distillation |
| Compound dissolved in water, more soluble in an organic solvent | differential (solvent) extraction |
| Components differ in acidity / basicity | chemical method (NaHCO₃ / NaOH / HCl) then extraction |
| Micro amounts; colourless or closely related components; purity check | chromatography (column / TLC / paper) |

## 14.3 Estimation constants and factors

| Element | Method | Weighed as | Factor for % element |
|----|----|----|----|
| C | Liebig | CO₂ | 12/44 |
| H | Liebig | H₂O | 2/18 |
| N | Dumas | N₂ gas | 28/22400 per mL at STP |
| N | Kjeldahl | NH₃ (titrated) | 1.4 × N × V / w  (N = normality of acid) |
| Cl | Carius | AgCl | 35.5/143.5 |
| Br | Carius | AgBr | 80/188 |
| I | Carius | AgI | 127/235 |
| S | Carius | BaSO₄ | 32/233 |
| P | oxidation | Mg₂P₂O₇ | 62/222 |
| P | oxidation | (NH₄)₃PO₄·12MoO₃ | 31/1877 |
| O | — | by difference (or direct: 16/44 × mass CO₂) | — |

# 15 Worked numericals and practice

## 15.1 More worked examples

**W1.** On complete combustion 0.20 g of a compound gave 0.147 g CO₂ and 0.12 g H₂O; a separate 0.20 g sample gave 74.6 mL of N₂ at STP. The rest is oxygen. Find the empirical formula.

%C = (12/44)(0.147/0.20)×100 = 20.05 %
%H = (2/18)(0.12/0.20)×100 = 6.67 %
%N = (28/22400)(74.6/0.20)×100 = 46.63 %
%O = 100 − 20.05 − 6.67 − 46.63 = 26.65 %

| El | % | ÷ at. mass | ÷ smallest (1.67) |
|----|----|----|----|
| C | 20.05 | 1.67 | 1 |
| H | 6.67 | 6.67 | 4 |
| N | 46.63 | 3.33 | 2 |
| O | 26.65 | 1.67 | 1 |

Empirical formula **CH₄N₂O** — urea.

**W2.** In a Carius chlorine estimation, 0.3780 g of a chloro-compound gave 0.5740 g of AgCl. Find % Cl.

%Cl = (35.5/143.5)(0.5740/0.3780)×100 = **37.57 %**

**W3.** 0.395 g of an organic compound by Kjeldahl's method gave ammonia that was neutralised by 20.0 mL of 0.5 N H₂SO₄. Find % N.

%N = (1.4 × 0.5 × 20.0) / 0.395 = **35.44 %**

**W4.** An organic liquid (M = 93, aniline) is steam-distilled at 98 °C, where p°(water) = 707 mm Hg and the barometer reads 760 mm Hg. What mass of aniline distils per gram of water?

p°(aniline) = 760 − 707 = 53 mm Hg.
m(aniline)/m(water) = (53 × 93)/(707 × 18) = **0.387 g per g of water.**

**W5.** A hydrocarbon contains 85.7 % C. Its vapour density is 28. Find the molecular formula.

%H = 14.3 %. C : H = (85.7/12) : (14.3/1) = 7.14 : 14.3 = 1 : 2. Empirical CH₂ (mass 14). M = 2 × 28 = 56 ⇒ n = 4 ⇒ **C₄H₈**.

## 15.2 Practice questions

**Q1.** Why does an impurity lower and broaden the melting point of a solid?

**Q2.** Which single technique would you use to separate: (a) a mixture of *o*- and *p*-nitrophenol; (b) glycerol from a small amount of NaCl and water; (c) a mixture of camphor and sodium chloride; (d) kerosene from petrol?

**Q3.** Give the chemistry of Lassaigne's test and explain why (i) sodium, not any other metal, is used and (ii) the fused mass is extracted with water.

**Q4.** An organic compound contains N and S. Predict what you would see when its sodium fusion extract is treated with (i) FeSO₄ then dilute H₂SO₄, (ii) neutral FeCl₃, (iii) sodium nitroprusside.

**Q5.** Why is the sodium extract boiled with concentrated nitric acid before testing for halogens with silver nitrate?

**Q6.** In the estimation of carbon and hydrogen, why is the compound burnt in a current of oxygen **and** over copper(II) oxide? Why must the oxygen be free of CO₂ and moisture?

**Q7.** Distinguish, with the underlying reason, between the principles of the Dumas and Kjeldahl methods for nitrogen. Name two classes of compound for which Kjeldahl fails.

**Q8.** 0.25 g of an organic compound gave, on Carius sulphur estimation, 0.35 g of barium sulphate. Calculate the percentage of sulphur.

**Q9.** A compound has C 26.7 %, H 2.2 %, O 71.1 %, molar mass 90 g mol⁻¹. Find its molecular formula and suggest a structure.

**Q10.** Explain why: (a) a carboxylic acid can be separated from a phenol using aqueous NaHCO₃; (b) diethyl ether is preferred for solvent extraction; (c) three extractions with 10 mL of solvent remove more solute than one extraction with 30 mL.

**Q11.** On a silica-gel TLC plate developed with a non-polar solvent, three compounds — a hydrocarbon, an alcohol and a carboxylic acid — give three spots. Assign the spots in order of increasing Rf and justify.

**Q12.** 0.100 g of a hydrocarbon on combustion gave 0.308 g of CO₂ and 0.126 g of H₂O. Its vapour density is 21. Find the molecular formula.

## 15.3 Answers

**A1.** Two reasons act together. (i) Colligative depression of freezing point: dissolved impurity lowers the temperature at which the first crystal is in equilibrium with the melt. (ii) The solid is no longer one substance, so different regions of the sample begin to melt at slightly different temperatures — the melting **range broadens**. A pure solid melts sharply because every part of it is identical.

**A2.** (a) steam distillation — only the intramolecularly H-bonded *o*-isomer is steam-volatile; (b) distillation under reduced pressure (glycerol decomposes near its normal b.p.; water distils off first, NaCl stays behind); (c) sublimation — camphor sublimes, NaCl does not; (d) fractional distillation — petrol and kerosene are close-boiling fractions of the same mixture.

**A3.** Sodium fusion converts covalently bound N, S, X, P into ionic Na⁺ salts (NaCN, Na₂S, NaX, Na₃PO₄), which then give ordinary inorganic tests. (i) Sodium is a strong enough reducing agent, melts at a low temperature and its salts are water-soluble; it drives the covalent → ionic conversion cleanly. (ii) The ionic salts are extracted into water to give a clear solution (the sodium fusion extract) on which the tests are done; unreacted sodium is destroyed by the water.

**A4.** (i) Blood-red is **not** seen here as the leading result — with N and S together the fusion gives SCN⁻, so FeSO₄/H₂SO₄ gives at most a faint/absent Prussian blue unless excess Na was used. (ii) Neutral FeCl₃ gives the **blood-red** [Fe(SCN)]²⁺ — confirms N and S together. (iii) Sodium nitroprusside gives a **violet** colour — confirms sulphur. (If the fusion used a large excess of sodium, SCN⁻ is broken down to CN⁻ + S²⁻ and then (i) gives Prussian blue and (ii)/(iii) the normal sulphur tests.)

**A5.** The extract also contains CN⁻ (if N present) and S²⁻ (if S present). With AgNO₃ these give white AgCN and black Ag₂S, which would be mistaken for silver halides. Boiling with conc. HNO₃ expels them as HCN and H₂S, leaving only halide to react with silver.

**A6.** CuO is a solid oxidant in intimate contact with the vapour and guarantees **complete** oxidation of every carbon to CO₂ and every hydrogen to H₂O (incomplete combustion would give CO or soot and low results); the O₂ stream sweeps the products forward and supplies extra oxygen. The oxygen must be CO₂-free or the CO₂ tube would gain mass from the gas stream itself (high % C); it must be moisture-free or the water tube would gain mass from the stream (high % H).

**A7.** Dumas: the compound is oxidised by CuO and nitrogen is liberated as **N₂ gas**, whose volume is measured — it works for **every** nitrogen compound. Kjeldahl: the compound is digested with conc. H₂SO₄ and nitrogen ends up as **ammonium sulphate**; the ammonia released by alkali is titrated — simpler, but only works if the nitrogen is reduced to the −3 (ammonium) level on digestion. Kjeldahl fails for **nitro / nitroso** compounds and for **azo / diazo** compounds and **ring nitrogen** (pyridine).

**A8.** %S = (32/233)(0.35/0.25)×100 = **19.23 %**.

**A9.** moles C : H : O = 26.7/12 : 2.2/1 : 71.1/16 = 2.225 : 2.2 : 4.44 = 1 : 1 : 2. Empirical **CHO₂**, mass 45. n = 90/45 = 2 ⇒ **C₂H₂O₄** — oxalic acid, (COOH)₂.

**A10.** (a) A carboxylic acid (pKₐ ≈ 4–5) is deprotonated by HCO₃⁻ and passes into the water layer as its sodium salt, with visible CO₂; phenol (pKₐ ≈ 10) is too weak to react with bicarbonate and stays in the organic layer. (b) Diethyl ether is immiscible with water, chemically unreactive, dissolves most organic compounds well, and has a very low boiling point (35 °C) so it is easily evaporated to recover the solute. (c) Partition is an equilibrium governed by a fixed distribution ratio; after each extraction the same **fraction** of the remaining solute moves into fresh solvent, so repeating the process with fresh small portions removes a larger total amount than one contact with the whole volume.

**A11.** Increasing Rf: carboxylic acid \< alcohol \< hydrocarbon. Silica gel is polar; a polar solute binds it strongly and is dragged along only slowly by a non-polar eluent (low Rf). The carboxylic acid is the most polar (H-bond donor and acceptor, capable of strong interaction), the alcohol is intermediate, the hydrocarbon is non-polar and travels almost with the solvent front.

**A12.** Mass of C = 0.308 × 12/44 = 0.084 g; mass of H = 0.126 × 2/18 = 0.014 g; total = 0.098 g ≈ 0.100 g, so the compound is a hydrocarbon (C and H only). %C = 84.0 %, %H = 14.0 %. Ratio C : H = 84.0/12 : 14.0/1 = 7.0 : 14.0 = 1 : 2. Empirical formula **CH₂**, empirical mass 14. Molar mass = 2 × 21 = 42 ⇒ n = 42/14 = 3. **Molecular formula C₃H₆** (propene or cyclopropane).
`;
