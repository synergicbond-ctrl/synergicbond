// The Oxygen Family (Group 16) — JEE Advanced master notes.
//
// Independently written for SYNERGIC BOND. A synthesis of the standard,
// non-proprietary body of Group 16 inorganic chemistry common to the Class XI–XII
// syllabus and every general reference (NCERT, J. D. Lee, Greenwood & Earnshaw,
// Ananya Ganguly, Allen). No verbatim text, tables or figures are copied from any
// single source; the section structure, the "increasing / decreasing / note"
// ordering system, the Key Point / JEE TRAP / MOT LENS framing, the schematic
// figures and every derived tool are original to this chapter. Physical data are
// standard reference constants; where editions differ the Class XI–XII value is used.

export const OXYGEN_FAMILY_MASTER_MARKDOWN = String.raw`
# 1. p-Block foundation and the place of Group 16

## 1.1 Periodic-table framework

The differentiating electron of a p-block element enters an outermost p orbital. The inner
core is **not** identical down a group — filled 3d, 4d and 4f subshells appear in the
heavier members and shield the nuclear charge poorly, so size, ionisation enthalpy,
electron gain enthalpy and chemistry all show **irregular jumps**. For a p-block element the
group (maximum) oxidation state equals the number of valence s + p electrons; the important
lower states differ from it **by two**, because the ns² pair is used together or left
unused.

Group 16 has the valence configuration **ns² np⁴** — two electrons short of a noble-gas
octet. Three consequences run through the chapter:

- an ns² np⁴ atom needs **only two electrons** for the octet, so it forms the **M²⁻ ion**
  and covalent **M(−II)** compounds readily — far more readily than Group 15 forms M³⁻;
- but **adding the second electron is strongly endothermic** (ΔₑgH₂ ≈ +640 to +780 kJ
  mol⁻¹ because the electron is pushed onto an anion), so free **O²⁻ / S²⁻ ions survive
  only in lattices** where a very large lattice enthalpy pays the bill;
- the group shows the usual **non-metal → metalloid → metal** gradation: O, S non-metals;
  Se, Te metalloids; Po a (radioactive) metal.

## 1.2 First-member anomaly — why oxygen stands apart

Oxygen differs sharply from S, Se, Te, Po for four linked reasons: **very small size**,
**highest electronegativity in the group (3.5, second only to F)**, **high ionisation
enthalpy**, and — decisively — the n = 2 shell has **only 2s and 2p orbitals, no d**.
Three consequences.

**Consequence 1 — maximum covalence is 4 (usually 2).** Oxygen has 2s + three 2p → eight
electrons around it. Compounds where O is 2-coordinate (H₂O, ethers) or 3-coordinate
(H₃O⁺, [R₃O]⁺) exist; **no OF₆, no OF₄**. Sulphur, with empty 3d orbitals, reaches **4 and
6**: **SF₄, SF₆, SO₃, H₂SO₄, [S₂O₈]²⁻**. This single difference is why **sulphur has a rich
+4 and +6 chemistry and oxygen does not**.

**Consequence 2 — strong pπ–pπ multiple bonding.** Two compact 2p orbitals on adjacent
period-2 atoms overlap sideways very well, so oxygen readily forms **O=O, C=O, N=O, S=O**.
A 3p (or larger) orbital is diffuse; sideways overlap is poor, so sulphur **avoids pπ–pπ
between two S atoms** and instead **catenates through S–S single bonds into rings and
chains**. The textbook illustration:

> **O₂ is a small diatomic molecule with an O=O double bond; elemental sulphur is the
> S₈ crown-shaped ring (and long Sμ chains).** Same group, completely different elemental
> state — because only the first member π-bonds to itself.
>
> **CO₂ is a discrete linear O=C=O gas; SiO₂ is a giant Si–O single-bonded network solid.**
> The same "first-member π-bonds, heavier members single-bond and polymerise" rule.

**Consequence 3 — small size ⇒ strong hydrogen bonding and a weak O–O single bond.**
- The O–H bond is short and very polar (EN gap 1.4) → **water is extensively hydrogen
  bonded** → anomalously high m.p., b.p., ΔvapH, surface tension, and the **density
  maximum at 4 °C** (ice floats). H₂S has almost no hydrogen bonding → it is a gas.
- The **O–O single bond (142 kJ mol⁻¹) is weak** — the small O atoms bring the
  non-bonding lone pairs close together (lp–lp repulsion), just as for N–N. This is why
  H₂O₂ and O₃ are reactive and why peroxides are good oxidisers. The **S–S single bond
  (226 kJ mol⁻¹) is much stronger**, so sulphur catenates well (S₈, Sₙ, polysulphides
  Sₙ²⁻, polythionates).

> **Key Point:** Oxygen cannot expand its octet (maximum covalence 4, usually 2) and, in
> water or an ether, has **two lone pairs but no low-lying vacant orbital**. Sulphur, with
> empty 3d orbitals just above the valence level, **can** use them — so SF₆ exists and is
> even kinetically inert, while "OF₆" is impossible.

## 1.3 Group 16 master data

| Property | O | S | Se | Te | Po |
|:--|:--:|:--:|:--:|:--:|:--:|
| Atomic number | 8 | 16 | 34 | 52 | 84 |
| Atomic mass / g mol⁻¹ | 16.00 | 32.06 | 78.96 | 127.60 | 210 |
| Ground-state configuration | [He] 2s²2p⁴ | [Ne] 3s²3p⁴ | [Ar] 3d¹⁰4s²4p⁴ | [Kr] 4d¹⁰5s²5p⁴ | [Xe] 4f¹⁴5d¹⁰6s²6p⁴ |
| Covalent radius / pm | 66 | 104 | 117 | 137 | 146 |
| Ionic radius M²⁻ / pm | 140 | 184 | 198 | 221 | 230 |
| ΔᵢH₁ / kJ mol⁻¹ | 1314 | 1000 | 941 | 869 | 813 |
| ΔᵢH₂ / kJ mol⁻¹ | 3388 | 2251 | 2045 | 1790 | 1500 |
| ΔₑgH₁ / kJ mol⁻¹ | **−141** | **−200** | −195 | −190 | −174 |
| ΔₑgH₂ / kJ mol⁻¹ | +780 | +590 | +420 | +295 | — |
| Electronegativity (Pauling) | 3.5 | 2.6 | 2.6 | 2.1 | 2.0 |
| Density / g cm⁻³ | 1.43 g L⁻¹ (gas) | 2.06 (α) | 4.79 (grey) | 6.25 | 9.4 |
| Melting point / K | 55 | 393 (α) | 490 | 725 | 527 |
| Boiling point / K | 90 | 718 | 958 | 1263 | 1235 |
| E° (M/H₂M) or (M/M²⁻) / V | +1.23 (O₂/H₂O) | −0.48 (S/S²⁻) | −0.67 | −0.92 | — |

*Covalent radii (Å) for order questions: O 0.66, S 1.04, Se 1.17, Te 1.37, Po 1.46.*

**Reading the irregular steps.**

| Step | Interposed core | Shielding | Size increase |
|:--|:--|:--|:--|
| O → S | normal Ne core | good | **large** (66 → 104 pm) |
| S → Se | + **3d¹⁰** | poor (d-block contraction) | **small** (104 → 117 pm) |
| Te → Po | + **4f¹⁴** and 5d¹⁰ | very poor (lanthanoid contraction) | **small** (137 → 146 pm) |

The same poor d/f shielding is why electronegativity does not fall smoothly (Se ≈ S), why
ΔₑgH does not become steadily less negative, and why the **+4 state gains ground and the
+6 state loses it** down the group (inert-pair effect).

## 1.4 Occurrence, abundance and isotopes

| Element | Abundance | Free / native | Principal combined forms |
|:--|:--|:--|:--|
| **O** | **most abundant element** — 46.6 % by mass of the crust; 20.9 % by volume of air; 89 % by mass of the oceans; ~65 % of the human body | O₂ (air), O₃ (stratosphere) | water; **silicates & aluminosilicates** (bulk of the crust); oxides (Fe₂O₃, Al₂O₃, SiO₂); carbonates, sulphates, nitrates, phosphates |
| **S** | ~0.03–0.05 % | **native S** (volcanic, salt-dome cap rock — Frasch process); H₂S in sour gas | **sulphates** — gypsum CaSO₄·2H₂O, anhydrite, epsomite MgSO₄·7H₂O, baryte BaSO₄, celestine SrSO₄; **sulphides** — galena PbS, sphalerite ZnS, chalcopyrite CuFeS₂, pyrite FeS₂, cinnabar HgS, stibnite Sb₂S₃; in proteins (cysteine, methionine), garlic, mustard oil, coal, petroleum |
| **Se, Te** | Se 0.05 ppm, Te 0.001 ppm | rare | as selenides/tellurides substituting for S in sulphide ores; recovered from **anode mud** of electrolytic copper refining |
| **Po** | 2 × 10⁻¹⁰ ppm | — | trace decay product in U/Th ores (²¹⁰Po from ²²²Rn → ²¹⁰Pb → ²¹⁰Po); ~100 µg per tonne of pitchblende; now made by ²⁰⁹Bi(n,γ)²¹⁰Bi → ²¹⁰Po |

**Isotopes.**

| Element | Stable isotopes | Notes |
|:--|:--|:--|
| O | **¹⁶O (99.76 %), ¹⁷O (0.04 %), ¹⁸O (0.20 %)** | ¹⁷O is the only NMR-active O nucleus (I = 5/2); **¹⁸O labelling** proved that the O₂ from photosynthesis comes from **water, not CO₂**, and traced the mechanism of ester hydrolysis; the ¹⁸O/¹⁶O ratio in ice cores and foraminifera is a **palaeotemperature proxy** |
| S | ³²S (95.0 %), ³³S, ³⁴S (4.2 %), ³⁶S | ³³S is NMR-active; ³⁵S (β⁻, t½ 87 d) is a radiotracer; sulphur isotope ratios fingerprint ore deposits and biological sulphate reduction |
| Se | six stable isotopes (⁷⁴–⁸²Se) | ⁷⁷Se is a useful NMR nucleus |
| Te | **eight stable isotopes** — the most of any element up to Z = 52; ¹²⁸Te and ¹³⁰Te are extremely weakly radioactive (double β decay, t½ ~10²¹ y) | Te is one of only two elements (with Ar) whose atomic mass is *out of order* with its atomic number (Te 127.6 > I 126.9) — a puzzle Mendeleev boldly overrode |
| Po | no stable isotope | **²¹⁰Po** (α, t½ 138 d) — intensely radioactive, ~1 g releases 140 W of heat; used in RTGs and antistatic brushes; a notorious poison |

> **JEE TRAP:** The **Te–I anomalous pair** — tellurium (127.6) is heavier than iodine
> (126.9) yet comes *before* it in the periodic table. Mendeleev placed them by *chemical
> properties*, not atomic mass; Moseley's atomic-number law (1913) vindicated him. (Ar/K
> and Co/Ni are the other anomalous pairs.)


# 2. Group 16 identity and electronic configuration

Oxygen — discovered independently by Scheele (1771) and Priestley (1774), named and
interpreted by Lavoisier (who overthrew the phlogiston theory with it) — is the element
that makes combustion, respiration and corrosion possible. Sulphur ("brimstone") has been
known since prehistory. Selenium (Berzelius, 1817, named after *selene*, the Moon, as a
companion to tellurium = *tellus*, Earth) and tellurium (Müller von Reichenstein, 1782)
are minor but technologically important semiconductor elements. Polonium (Marie & Pierre
Curie, 1898, named for Poland) was the **first element discovered by its radioactivity**.

## 2.1 Electronic configurations, valence state and oxidation states

| Element | Z / atomic mass | Ground-state configuration | Core | Valence shell | Common oxidation states |
|:--:|:--:|:--:|:--|:--:|:--|
| O | 8 / 15.999 | [He] 2s² 2p⁴ | noble gas | 2s² 2p⁴ | **−2**, −1 (peroxide), −½ (superoxide), −⅓ (ozonide), **+2 (OF₂), +1 (O₂F₂)** |
| S | 16 / 32.06 | [Ne] 3s² 3p⁴ | noble gas | 3s² 3p⁴ | −2, **+2, +4, +6** |
| Se | 34 / 78.97 | [Ar] **3d¹⁰** 4s² 4p⁴ | pseudo-noble (+ d¹⁰) | 4s² 4p⁴ | −2, +2, **+4**, +6 |
| Te | 52 / 127.60 | [Kr] **4d¹⁰** 5s² 5p⁴ | pseudo-noble (+ d¹⁰) | 5s² 5p⁴ | −2, +2, **+4**, +6 |
| Po | 84 / 209 | [Xe] **4f¹⁴ 5d¹⁰** 6s² 6p⁴ | + f¹⁴ + d¹⁰ | 6s² 6p⁴ | **+2, +4**, (+6) |

- **O and S** have clean noble-gas cores; **Se, Te** carry an extra d¹⁰; **Po** carries
  4f¹⁴ + 5d¹⁰. Poor d/f shielding → irregular size, ΔₑgH and ΔᵢH trends, and the rise of
  the +4 state (§4.2).
- **Oxygen shows a positive oxidation state only with fluorine** (OF₂ +2, O₂F₂ +1) because
  F is the only element more electronegative than O. In every other compound O is negative.
- Sulphur's **+4 and +6** states dominate its oxide and oxoacid chemistry (SO₂/SO₃,
  H₂SO₃/H₂SO₄).

**Why the M²⁻ ion is special.** M(g) + e⁻ → M⁻(g) releases energy (ΔₑgH₁ < 0), but
M⁻(g) + e⁻ → M²⁻(g) **absorbs** a lot (ΔₑgH₂ ≈ +780 kJ mol⁻¹ for O — electron onto a
negative ion). So O²⁻(g) is thermodynamically **unstable**; oxide salts exist only because
the **lattice enthalpy** (∝ product of charges) of an M²⁺O²⁻ solid is enormous. This is
also why **small, highly charged cations give covalent, not ionic, oxides** and why
"peroxide vs oxide vs superoxide" is decided by cation size (Li → Li₂O, Na → Na₂O₂,
K/Rb/Cs → MO₂).

## 2.2 Discovery — one line

O: Scheele & Priestley (1771–74), interpreted by Lavoisier (overthrew phlogiston).  S: prehistoric.  Se, Te, Po: 18th–20th c.; Po was the first element found by its radioactivity (Curies, 1898).

# 3. Atomic and physical properties — data and complete orders

## 3.1 Atomic and ionic radii

| Element | Covalent radius / pm | M²⁻ radius / pm |
|:--:|:--:|:--:|
| O | 66 | 140 |
| S | 104 | 184 |
| Se | 117 | 198 |
| Te | 137 | 221 |
| Po | 146 | 230 |

> **Covalent (atomic) radius** — Increasing order: **O < S < Se < Te < Po**
> Decreasing order: Po > Te > Se > S > O
> Note: regular *order*; irregular *steps* — a large O → S jump (66 → 104 pm), then small
> S → Se (d-block contraction) and Te → Po (lanthanoid contraction) steps. **Oxygen is
> abnormally small**, which drives its entire anomaly (§1.2).

> **M²⁻ ionic radius** — Increasing order: O²⁻ (140) < S²⁻ (184) < Se²⁻ (198) < Te²⁻ (221 pm)
> Note: each anion is far larger than the parent atom (two added electrons, high lp–lp
> repulsion). Large, soft, polarisable S²⁻/Se²⁻/Te²⁻ form **covalent, coloured, insoluble**
> heavy-metal sulphides (used in qualitative analysis); the small, hard O²⁻ forms
> **ionic** oxides.

> **Ionic potential (z/r)** — very high for every M⁶⁺ and M⁴⁺; large for O²⁻ giving strongly
> polarising behaviour. Note: this is why S(VI) and Se(VI) compounds are all
> covalent/molecular (SO₃, SO₄²⁻, H₂SO₄) and why the +6 oxides are acidic anhydrides.

## 3.2 Ionisation enthalpy

| Element | ΔᵢH₁ | ΔᵢH₂ |
|:--:|:--:|:--:|
| O | 1314 | 3388 |
| S | 1000 | 2251 |
| Se | 941 | 2045 |
| Te | 869 | 1790 |
| Po | 813 | 1500 |

*kJ mol⁻¹.*

> **ΔᵢH₁** — Decreasing order: **O > S > Se > Te > Po**
> Increasing order: Po < Te < Se < S < O.
> Note: falls smoothly down the group (larger atom, better screening).

> **Group 16 vs Group 15 (same period)** — ΔᵢH₁(Group 16) **< ΔᵢH₁(Group 15)**.
> Examples: **O (1314) < N (1402)**; **S (1000) < P (1012)**; Se (941) < As (947).
> Note: this is the classic anomaly. A Group 16 atom is np⁴ — removing one of the **paired**
> p electrons *relieves* p–p repulsion and leaves a **stable half-filled p³** ion, which is
> easier than breaking the already-stable half-filled p³ of a Group 15 atom.

> **Successive values** — ΔᵢH₂ ≈ 2.3–2.6 × ΔᵢH₁ (electron pulled from a cation). No huge
> jump within the first few ionisations (the ns² core is not broken).

## 3.3 Electron gain enthalpy — the O vs S anomaly (a flagship exam point)

| Element | ΔₑgH₁ / kJ mol⁻¹ | ΔₑgH₂ / kJ mol⁻¹ | ΔₑgH₁+₂ (→ M²⁻) |
|:--:|:--:|:--:|:--:|
| O | **−141** | +780 | **+639** (endothermic overall) |
| S | **−200** | +590 | +390 |
| Se | −195 | +420 | +225 |
| Te | −190 | +295 | +105 |

> **First electron gain enthalpy (magnitude)** — Order: **S > Se > Te > O**
> i.e. |ΔₑgH₁|: S (200) > Se (195) > Te (190) > **O (141)**.
> Note: **oxygen releases LESS energy than sulphur** on gaining an electron — the classic
> second-period anomaly. Reason: the incoming electron enters the **small, compact 2p
> subshell** of oxygen, where **electron–electron repulsion** is severe and partly cancels
> the energy released. In the larger 3p subshell of sulphur the extra electron is
> accommodated with much less repulsion. (Same anomaly: F < Cl, N < P.)

> **Second electron gain enthalpy** — large and **positive** for all: an electron is being
> forced onto an **anion** (electrostatic repulsion). Order (magnitude): O > S > Se > Te.
> Note: M(g) + 2e⁻ → M²⁻(g) is **endothermic overall** for every chalcogen (+639 kJ for O).
> Oxide and sulphide **salts exist only because lattice enthalpy** (very large for a
> 2+/2− lattice) more than repays it — Born–Haber logic.

## 3.4 Electronegativity

| Element | O | S | Se | Te | Po |
|:--:|:--:|:--:|:--:|:--:|:--:|
| Pauling EN | 3.5 | 2.6 | 2.6 | 2.1 | 2.0 |

> **Electronegativity** — Decreasing order: **O (3.5) > S ≈ Se (2.6) > Te (2.1) > Po (2.0)**
> Note: **oxygen is the second most electronegative element** (after F). A **sharp fall
> O → S** (0.9 units), then almost flat S ≈ Se (poor 3d shielding holds Se's electrons as
> tightly as S's). The big O–S gap is why the O–H bond is very polar (H-bonding in water,
> alcohols, acids) while the S–H bond is weakly polar (H₂S is a gas, a weak acid, no
> H-bonding).

## 3.5 Physical state, allotropy, melting and boiling points

| Element | State (298 K) | Character | m.p. / K | b.p. / K |
|:--:|:--|:--|:--:|:--:|
| O | colourless gas (O₂), pale-blue liquid | non-metal | 55 | 90 |
| S | yellow solid (S₈) | non-metal, insulator | 393 | 718 |
| Se | grey (metallic) / red solid | metalloid, **photoconductor** | 490 | 958 |
| Te | silvery-white brittle solid | metalloid, semiconductor | 725 | 1263 |
| Po | silvery metal (simple cubic!) | **metal**, radioactive | 527 | 1235 |

> **Melting & boiling point** — Increasing order: **O < S < Se < Te < Po** (b.p.; m.p.
> O < S < Se < Te then Po slightly lower than Te).
> Note: rises down the group as the structural units get bigger and the intermolecular /
> interatomic forces stronger. **The huge O → S jump** (b.p. 90 → 718 K) is an
> **atomicity** effect: **O is diatomic O₂** (weak dispersion forces between small
> non-polar molecules) whereas **S is octa-atomic S₈** (a much larger, more polarisable
> unit — strong dispersion forces). Se and Te have infinite chains/networks → higher still.

> **Density** — Increasing order: O ≪ S < Se < Te < Po. Atomic mass rises faster than
> atomic volume.

> **Metallic character / conductivity** — Increasing order: **O < S < Se < Te < Po**.
> O, S insulators; **Se is a photoconductor** (dark resistance high, drops ~1000× in light
> — the basis of the xerographic/Xerox drum and of selenium photocells); Te a
> semiconductor; **Po is a true metal** with a unique simple-cubic (α) structure.

> **Allotropy** — every Group 16 element shows it (O: O₂, O₃; S: many; Se: grey, red,
> vitreous; Te: crystalline, amorphous; Po: α-cubic, β-rhombohedral).


# 4. Oxidation states, bonding and the inert-pair effect

## 4.1 The oxidation-state range

The group state is **+6** (ns² np⁴ → all six valence electrons used). The important lower
states are **+4** (np⁴ used, ns² kept) and **−2** (two electrons gained). Sulphur fills
several rungs:

| Ox. state | S species | Note |
|:--:|:--|:--|
| −2 | H₂S, Na₂S, FeS, ZnS | with H and metals |
| −1 | H₂S₂, FeS₂ (pyrite), Sₙ²⁻ polysulphides | S–S bond |
| 0 | S₈, Sμ | element |
| +1 / +2 | S₂Cl₂, SCl₂ | S–Cl compounds |
| +2 (formal) | S₂O₃²⁻ (thiosulphate — one S is −1, one is +5; **average +2**) | — |
| +3 (formal avg) | S₂O₄²⁻ (dithionite) | S–S bond |
| +4 | SO₂, H₂SO₃, SO₃²⁻, SF₄ | pyramidal / bent S, one lone pair |
| +5 (formal avg) | S₂O₆²⁻ (dithionate) | S–S bond |
| +6 | SO₃, H₂SO₄, SO₄²⁻, SF₆, SO₂Cl₂ | tetrahedral / octahedral S, no lone pair |

**Oxygen's own list.** −2 (oxide, the norm), **−1** (peroxide O₂²⁻), **−½** (superoxide
O₂⁻), **−⅓** (ozonide O₃⁻), **0** (O₂, O₃), **+1** (O₂F₂), **+2** (OF₂). The peroxide,
superoxide and ozonide are a direct result of the weak O–O bond and the ability of the
O₂/O₃ units to accept extra electrons into π* orbitals (§6.1).

## 4.2 The inert-pair effect — +4 vs +6

Down the group the ns² pair takes **progressively less part in bonding** and stays behind
as a non-bonding lone pair on M(IV). The reason is the same as everywhere in the p-block:

- **M–X bond enthalpies fall** down the group (larger, more diffuse orbitals) so the two
  extra M–X bonds made in going +4 → +6 release less energy;
- the **promotion / reorganisation cost of the ns² pair stays high** and, for Po, rises
  (relativistic 6s contraction).

| Element | +6 examples | +4 examples | Balance |
|:--:|:--|:--|:--|
| S | SO₃, SO₄²⁻, H₂SO₄, SF₆, SO₂Cl₂ — all common, very stable | SO₂, SO₃²⁻, SF₄ | **+6 fully accessible; +4 is a reductant** (SO₂, SO₃²⁻ → SO₄²⁻) |
| Se | SeO₃, SeO₄²⁻ (a mild oxidiser), SeF₆ | SeO₂, SeO₃²⁻ | both real; **SeO₄²⁻ is a moderate oxidiser** |
| Te | TeO₃, Te(OH)₆ (a weak, **oxidising** hexahydroxo acid), TeF₆ | **TeO₂** (the stable oxide), TeO₃²⁻ | **+4 is the stable state**; Te(VI) oxidises |
| Po | PoO₃ (barely) | **PoO₂**, PoCl₄ | +4 dominant |

> **Stability of the +6 state** — Decreasing order: **S > Se > Te ≈ Po**
> Note: S(VI) is a spectator to redox (SO₄²⁻ is not an oxidiser in dilute solution).
> Se(VI) and especially **Te(VI) are oxidising** — H₆TeO₆ (telluric acid) is a weak acid
> and a mild oxidant; hot conc. H₂SeO₄ dissolves gold.

> **Stability of the +4 state** — Increasing order: **S < Se < Te < Po**
> Note: near-mirror image. **SO₂ / SO₃²⁻ are reducing** (S(IV) → S(VI)); SeO₂ mildly so;
> **TeO₂ is essentially non-reducing** and can be oxidising.

> **Reducing power of the +4 (EO₂) species** — Decreasing order:
> **SO₂ > SeO₂ > TeO₂**
> Note: SO₂ decolourises acidified KMnO₄, bromine water, and reduces Fe³⁺; **TeO₂ does
> not** — it is the stable oxide of tellurium.

> **Oxidising power of the +6 species** — Increasing order:
> **SO₄²⁻ (nil) < SeO₄²⁻ < H₆TeO₆**
> Note: the higher oxidation state becomes a **stronger oxidiser down the group** — the
> universal inert-pair consequence (compare Tl(III), Pb(IV), Bi(V)).

## 4.3 The MO picture of dioxygen — why O₂ is paramagnetic


![Fig. MO diagram of O2 — two unpaired electrons in pi*, paramagnetic.](/notes/oxygen-family/o_o2mo.svg)

**MO configuration (valence, 12 electrons):**
σ2s² σ*2s² σ2pz² π2px² π2py² **π*2px¹ π*2py¹**

- **Two unpaired electrons** in the degenerate π* orbitals → **O₂ is paramagnetic**
  (attracted into a magnetic field; liquid O₂, pale blue, sticks between magnet poles).
  Simple Lewis structures (O=O with two lone pairs on each O) wrongly predict
  diamagnetism — **the paramagnetism of O₂ is the showpiece success of MO theory**.
- **Bond order = (8 − 4)/2 = 2** → O=O, length 121 pm, enthalpy 498 kJ mol⁻¹.

| Species | Valence e⁻ | Bond order | O–O length / pm | Magnetism |
|:--|:--:|:--:|:--:|:--|
| **O₂⁺** (dioxygenyl) | 11 | **2.5** | 112 | paramagnetic (1 unpaired) |
| **O₂** (dioxygen) | 12 | **2.0** | 121 | **paramagnetic (2 unpaired)** |
| **O₂⁻** (superoxide) | 13 | **1.5** | 128 | paramagnetic (1 unpaired) |
| **O₂²⁻** (peroxide) | 14 | **1.0** | 149 | diamagnetic |

> **Bond-order / bond-length order** — O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0);
> lengths run the other way: O₂⁺ (112) < O₂ (121) < O₂⁻ (128) < O₂²⁻ (149 pm).
> Note: each added electron goes into an **antibonding π\*** orbital, so the bond gets
> **weaker and longer**. O₂⁺ needs a ferociously strong oxidiser to make — Bartlett's
> O₂⁺[PtF₆]⁻ (which led to the first noble-gas compound).

> **Isoelectronic pairs:** O₂²⁻ is isoelectronic with F₂ (bond order 1); O₂ with S₂, with
> [NO]⁻ (bond order 2, both paramagnetic).


# 5. Anomalous behaviour of oxygen; the O → S → rest gradation

## 5.1 How oxygen differs from the rest of its group

| Feature | Oxygen | S, Se, Te, Po |
|:--|:--|:--|
| Elemental state | diatomic gas **O₂** (O=O) + O₃ | S₈ rings & Sₙ chains; Se, Te chains; Po metal |
| Maximum covalence | **2** (occasionally 3–4) | **4 and 6** (nd orbitals) — SF₄, SF₆, TeF₆, [Te(OH)₆] |
| pπ–pπ multiple bonding | abundant (O=O, C=O, N=O, S=O) | S–S, Se–Se single bonds; catenation |
| Catenation | very poor (O–O weak, 142 kJ; only H₂O₂, O₃, peroxides) | good for S (S₈, Sₙ²⁻, polythionates, S–S in proteins) |
| Hydride | H₂O — strongly H-bonded, liquid, b.p. 373 K, high permittivity | H₂S — gas, b.p. 213 K, weak acid, foul smell |
| Oxidation states | mostly −2; +ve only with F | −2, +2, +4, **+6** — a rich higher-state chemistry |
| Oxide/oxoacid chemistry | O is the *ligand*, not the central atom | S is the central atom of SO₂, SO₃, H₂SO₄, thiosulphate… |
| Ring/chain allotropy | none (only O₂, O₃) | very rich (S₆, S₇, S₈, S₁₂, S₁₈, S₂₀, Sμ) |

## 5.2 Hydrogen bonding — the water anomalies

Because O is small and very electronegative, each H₂O forms **up to four** hydrogen bonds
(two as donor through its H, two as acceptor through its lone pairs) → a 3-D network.
Consequences, all examinable:

- **b.p. 373 K** (H₂S 213, H₂Se 232, H₂Te 269 K) — water "should" boil near 190 K by
  extrapolation.
- **Maximum density at 4 °C**; ice is ~9 % less dense than water (open, tetrahedral
  H-bonded lattice) → **ice floats**, lakes freeze top-down, aquatic life survives winter.
- Very high **ΔvapH (40.7 kJ mol⁻¹)**, specific heat, surface tension, and **dielectric
  constant (78)** — the last makes water a superb ionising solvent for salts.

## 5.3 The O–S gap vs the smoothness among Se, Te, Po

- **O → S**: the largest discontinuity — size +38 pm, EN −0.9, m.p. +338 K, a change from
  a diatomic gas to an octa-atomic solid, and the appearance of +4/+6 chemistry.
- **S → Se → Te → Po**: a smooth metalloid → metal gradation. +4 grows, +6 shrinks and
  becomes oxidising; the elements go insulator → photoconductor → semiconductor → metal;
  the hydrides get less stable, more acidic and stronger reducing agents; the dioxides go
  acidic → amphoteric.


# 6. Elemental chemical reactivity — conditions included

## 6.1 Dioxygen, O₂

O₂ is a **strong oxidising agent** (E° = +1.23 V, O₂/H₂O) but **kinetically slow** — the
O=O bond (498 kJ mol⁻¹) and the need to change spin (triplet O₂ → singlet products) give a
high activation energy, so most reactions need **ignition** and then run away exothermically.

| Reagent | Conditions | Product | Equation |
|:--|:--|:--|:--|
| most metals | heat / burn | oxide, peroxide or superoxide | 2 Mg + O₂ → 2 MgO; 2 Na + O₂ → Na₂O₂; K + O₂ → KO₂ |
| C, S, P | ignite | CO₂, SO₂, P₄O₁₀ | C + O₂ → CO₂; P₄ + 5 O₂ → P₄O₁₀ |
| H₂ | spark (2:1 = "oxyhydrogen") | water | 2 H₂ + O₂ → 2 H₂O, ΔH = −572 kJ |
| N₂ | ~2000 K / arc / lightning | NO (endothermic) | N₂ + O₂ → 2 NO |
| hydrocarbons | flame | CO₂ + H₂O (complete); CO + C (limited O₂) | CH₄ + 2 O₂ → CO₂ + 2 H₂O |
| metal sulphides | roast | oxide + SO₂ | 2 ZnS + 3 O₂ → 2 ZnO + 2 SO₂ |
| SO₂ | V₂O₅, 720 K | SO₃ | 2 SO₂ + O₂ → 2 SO₃ |
| HCl | CuCl₂, 723 K | Cl₂ (Deacon) | 4 HCl + O₂ → 2 Cl₂ + 2 H₂O |

**Does not react directly with:** Au, Pt, Ir (noble), the halogens, and the lighter noble
gases; W and dry Cu are attacked only on strong heating.

> **The Ellingham diagram in one line:** whether a metal is won from its oxide by C, CO or
> H₂ (and at what temperature) is read from a plot of ΔG° vs T for the competing oxidation
> reactions — the whole of **pyrometallurgy** rests on the thermodynamics of M + O₂ → MOₓ.

## 6.2 Sulphur


![Fig. Frasch process for mining native sulphur.](/notes/oxygen-family/o_frasch.svg)

| Reagent | Conditions | Product |
|:--|:--|:--|
| O₂ | burn (blue flame) | SO₂ (+ 6–8 % SO₃) |
| metals | heat | sulphides: Fe + S → FeS; Cu + S → CuS; Hg + S → HgS (rubbing — used to clean up Hg spills) |
| H₂ | 450 K | H₂S (slow, reversible) |
| C | white heat (electric furnace) | CS₂ |
| halogens (F₂, Cl₂) | direct | SF₆ (with F₂); S₂Cl₂, then SCl₂ (with Cl₂) |
| conc. HNO₃ | boil | H₂SO₄ + NO₂ |
| hot conc. H₂SO₄ | boil | SO₂: S + 2 H₂SO₄ → 3 SO₂ + 2 H₂O |
| hot NaOH | boil | **disproportionation**: 3 S + 6 NaOH → 2 Na₂S + Na₂SO₃ + 3 H₂O |

> **S + hot NaOH → sulphide + sulphite** is a disproportionation of S(0) → S(−2) + S(+4),
> exactly parallel to Cl₂ + NaOH and P₄ + NaOH. A recurring p-block motif for
> "element(0) + base".

## 6.3 Selenium, tellurium, polonium

- Burn in air → SeO₂, TeO₂ (both solids), PoO₂.
- With halogens → SeF₆, TeF₆, and the tetrahalides.
- **Not attacked by non-oxidising acids**; with hot conc. HNO₃ → H₂SeO₃ / H₂TeO₃; with hot
  conc. H₂SO₄ Se and Te dissolve to give **green (Se₈²⁺) and red (Te₄²⁺) polyatomic
  cations** — a striking demonstration that these elements are becoming metallic.
- Po (a metal) dissolves in dilute acids to give Po²⁺/Po⁴⁺ salts.


# 7. Allotropy — oxygen and sulphur in full

## 7.1 Oxygen: dioxygen and ozone

Only two allotropes: **O₂** (§4.3, §8) and **O₃** (§9). (A pale-blue solid phase O₄ / O₈
"red oxygen" exists only at very high pressure.)

## 7.2 Sulphur — the richest allotropy of any element after carbon


![Fig. Allotropes of sulphur — S8 crown, plastic Smu chains, cyclo-S6.](/notes/oxygen-family/o_allotropes.svg)


![Fig. cyclo-S8 crown ring.](/notes/oxygen-family/o_s8.svg)

| Allotrope | Structure | Made by | Notes |
|:--|:--|:--|:--|
| **Rhombic (α-S)** | S₈ crown rings, orthorhombic packing | crystallise S from CS₂ at RT | the **stable form below 369 K**; yellow; m.p. 385.8 K; ρ 2.06; insoluble in water, **soluble in CS₂** |
| **Monoclinic (β-S)** | S₈ rings, different packing | melt S, cool to ~369 K, pour off liquid → needles | **stable 369–393 K**; pale yellow; ρ 1.96; reverts to α on standing |
| **transition temperature** | α ⇌ β | — | **exactly 369 K (95.6 °C)** — both forms are stable and in equilibrium here |
| **Plastic / γ (Sμ)** | long helical Sₙ chains (n up to ~10⁶) | pour boiling S into cold water | rubbery, stretchable, **insoluble in CS₂**; slowly reverts to α |
| **cyclo-S₆ (ρ, Engel's S)** | S₆ chair ring | acidify Na₂S₂O₃ with cold conc. HCl | S–S 205.7 pm, ∠SSS 102.2° |
| **other rings** | S₇, S₁₀, S₁₂, S₁₈, S₂₀ | special syntheses | S₁₂ is the second most stable ring after S₈ |
| **S₂ vapour** | diatomic | S vapour above ~1000 K | **paramagnetic, blue-violet, isoelectronic with O₂** (2 unpaired e⁻ in π*) |

> **Order of stability (RT)** — plastic < monoclinic < rhombic (α-S is the reference state).
> **Order of density** — plastic (1.92) < monoclinic (1.96) < rhombic (2.06).
> **Solubility in CS₂** — α and β dissolve; plastic and the polymeric forms do not.

## 7.3 The action of heat on sulphur (the S₈ → Sμ viscosity story)


![Fig. Viscosity of molten sulphur vs temperature.](/notes/oxygen-family/o_sviscosity.svg)

1. **385 K** — rhombic melts to a **thin, mobile, pale-yellow liquid** (Sλ, mostly S₈
   rings).
2. **~433 K** — the rings begin to **open and polymerise into long chains** (Sμ); the
   liquid **darkens (red-brown) and thickens dramatically** — viscosity reaches a **maximum
   near 473 K** (chains up to 10⁶ atoms, entangled).
3. **~523 K onward** — the long chains break into shorter fragments; the liquid **thins
   again**.
4. **718 K** — boils to an **orange vapour** (S₈); as T rises further the vapour shifts
   S₈ → S₆ → S₄ → **S₂** (paramagnetic).

> **JEE TRAP:** "Why does molten sulphur first thin, then thicken, then thin again on
> heating?" → ring-opening polymerisation to entangled Sμ chains near 473 K (thick), then
> thermal scission of the chains above ~523 K (thin again).


# 8. Dioxygen, O₂

## 8.1 Laboratory preparation


![Fig. Laboratory preparation of dioxygen.](/notes/oxygen-family/o_prepo2.svg)

| Method | Equation |
|:--|:--|
| heat a chlorate with MnO₂ catalyst | 2 KClO₃ →(MnO₂, 420 K) 2 KCl + 3 O₂ |
| heat a nitrate | 2 KNO₃ →(Δ) 2 KNO₂ + O₂ |
| heat a higher/unstable oxide | 2 HgO →(Δ) 2 Hg + O₂; 2 PbO₂ → 2 PbO + O₂; 2 Pb₃O₄ → 6 PbO + O₂; 2 Ag₂O → 4 Ag + O₂ |
| decompose H₂O₂ | 2 H₂O₂ →(MnO₂) 2 H₂O + O₂ |
| a peroxide + water | 2 Na₂O₂ + 2 H₂O → 4 NaOH + O₂ |
| KMnO₄ + H₂O₂ (or heat KMnO₄) | 2 KMnO₄ →(Δ) K₂MnO₄ + MnO₂ + O₂ |

MnO₂ lowers the decomposition temperature of KClO₃ from ~670 K to ~420 K (a true catalyst —
recovered unchanged).

## 8.2 Industrial preparation

- **Fractional distillation of liquefied air** — after CO₂ and water are removed, air is
  compressed, cooled (Joule–Thomson + Linde/Claude) and distilled: **N₂ (77 K)** off first,
  then **Ar (87 K)**, leaving **O₂ (90 K)** as the bottom fraction. Product 99.5 %+.
- **Electrolysis of water** (with dilute NaOH / H₂SO₄) — O₂ at the anode, very pure but
  costly; used where H₂ is the main product.
- **Pressure-swing adsorption (PSA)** on a zeolite molecular sieve — the sieve adsorbs N₂
  preferentially, giving ~93 % O₂ (hospital and home oxygen concentrators).

## 8.3 Physical properties

Colourless, odourless, tasteless gas; slightly denser than air (1.43 g L⁻¹). Solubility
**3.08 cm³ per 100 cm³ water at 293 K** — small, but the basis of all aquatic life.
Liquefies at 90 K (pale blue, paramagnetic), freezes at 55 K. Isotopes ¹⁶O, ¹⁷O, ¹⁸O.

## 8.4 Chemical properties — see §6.1

Add: **oxygen supports combustion and respiration** but is not itself flammable; a glowing
splint **relights** in O₂ (the standard test).

## 8.5 Uses of dioxygen

- **Life support:** hospital O₂, resuscitation, anaesthesia, aviation, submarines,
  mountaineering, diving.
- **Metallurgy — the largest use:** the **basic-oxygen (LD) steel process** blows pure O₂
  through molten pig iron to burn out C, Si, Mn, P; oxygen-enriched blast in blast furnaces
  and smelters; oxy-acetylene (~3500 K) and oxy-hydrogen welding and cutting.
- **Rocketry:** **liquid oxygen (LOX)** oxidiser with kerosene (RP-1), liquid H₂, or
  hydrazine.
- **Chemicals:** manufacture of HNO₃ (Ostwald), H₂SO₄ (Contact), ethylene oxide, propylene
  oxide, acetylene, ethanal, vinyl chloride, TiO₂; **ozone generation**.
- **Environmental:** aeration in **sewage treatment** and in polluted rivers/lakes; pulp
  bleaching (replacing chlorine).


# 9. Ozone, O₃


![Fig. Ozone — bent, resonance hybrid, powerful oxidiser.](/notes/oxygen-family/o_ozone.svg)

## 9.1 Preparation


![Fig. Ozoniser — silent electric discharge.](/notes/oxygen-family/o_ozoniser.svg)

A slow, **dry** stream of O₂ through a **silent electric discharge** (an ozoniser —
Siemens or Brodie type) gives about **10 % ozonised oxygen**:

3 O₂ ⇌ 2 O₃   **ΔH° (298 K) = +142 kJ mol⁻¹** (endothermic; ΔS < 0)

- A **silent** (no-spark) discharge is used so the gas is not heated — heat would reverse
  the reaction and also decompose the O₃ already formed.
- For higher concentrations, use a **battery of ozonisers**; pure O₃ (b.p. 161 K, deep-blue
  liquid; m.p. 81 K, violet-black solid) can be condensed in liquid O₂ — **but concentrated
  / liquid ozone is dangerously explosive**.

## 9.2 Structure

- **Bent (angular)** molecule; **∠O–O–O ≈ 117°**; central O is **sp²** with one lone pair.
- **Both O–O bonds equal, 128 pm** — intermediate between a single bond (148 pm) and a
  double bond (121 pm) → **resonance hybrid** of two canonical forms, bond order **1.5**.
- **Diamagnetic**; small dipole moment (**0.53 D**) — unlike the non-polar O₂.

## 9.3 Physical properties

Pale-blue gas / dark-blue liquid / violet-black solid. Characteristic sharp "electric"
smell (detectable at 0.01 ppm — the smell near photocopiers, sparking motors, and after a
thunderstorm). Harmless in trace amounts; **toxic above ~0.1 ppm** (headache, throat and
lung irritation). **Thermodynamically unstable** with respect to O₂: decomposition is
exothermic (ΔH < 0) *and* increases disorder (ΔS > 0) → large negative ΔG.

## 9.4 Chemical properties — a powerful oxidising agent

Ozone acts by releasing **nascent oxygen**: O₃ → O₂ + [O]. Oxidising power **second only to
fluorine** among common reagents; E° (O₃/O₂, acid) = **+2.07 V**.

| Reaction | Equation |
|:--|:--|
| lead sulphide → lead sulphate (black → white; picture restoration) | PbS + 4 O₃ → PbSO₄ + 4 O₂ |
| iodide → iodine (basis of quantitative estimation) | 2 KI + H₂O + O₃ → 2 KOH + I₂ + O₂ |
| Fe²⁺ → Fe³⁺ | 2 FeSO₄ + H₂SO₄ + O₃ → Fe₂(SO₄)₃ + H₂O + O₂ |
| Sn²⁺ → Sn⁴⁺ | SnCl₂ + 2 HCl + O₃ → SnCl₄ + H₂O + O₂ |
| nitrite → nitrate; sulphite → sulphate; arsenite → arsenate | NO₂⁻ + O₃ → NO₃⁻ + O₂ |
| mercury loses its meniscus ("tailing") | 2 Hg + O₃ → Hg₂O + O₂ |
| dry KI paper (moist starch–iodide) turns blue | — (analytical test for O₃) |
| industrial KMnO₄ manufacture | 2 MnO₂ + 2 KOH + O₃ → 2 KMnO₄ + H₂O + O₂ |
| **ozonolysis** of C=C (organic) | alkene + O₃ → ozonide → (Zn/H₂O) two carbonyl compounds |

**Quantitative estimation of O₃:** pass into excess neutral/buffered KI; the liberated I₂ is
titrated against standard **sodium thiosulphate** (starch indicator):
O₃ + 2 KI + H₂O → I₂ + 2 KOH + O₂;   I₂ + 2 Na₂S₂O₃ → 2 NaI + Na₂S₄O₆.

## 9.5 The stratospheric ozone layer (context)

- At ~20–30 km, O₃ is made and destroyed in the **Chapman cycle** and **absorbs UV-B and
  UV-C** (200–310 nm), shielding DNA, crops and phytoplankton.
- **Depletion:**
  - by **NO** (from supersonic aircraft; from soil/ocean N₂O): NO + O₃ → NO₂ + O₂;
    NO₂ + O → NO + O₂ (NO regenerated — catalytic).
  - by **Cl atoms from CFCs (freons)**: CF₂Cl₂ + hν → CF₂Cl + Cl; Cl + O₃ → ClO + O₂;
    ClO + O → Cl + O₂ (**one Cl destroys ~10⁵ O₃ molecules**). On polar stratospheric
    cloud surfaces this runs fast → the **Antarctic ozone hole**. The **Montreal Protocol**
    (1987) phased out CFCs.

## 9.6 Uses of ozone

- **Sterilising drinking water** and swimming-pool water; **treating sewage and industrial
  effluent** — leaves no taste, smell or chlorinated by-products (unlike Cl₂).
- **Bleaching** delicate materials — ivory, oils, waxes, starch, flour, paper pulp, textiles
  (an environmentally clean bleach — by-product is O₂).
- **Deodorising** air in cold stores, tunnels and sewers.
- Laboratory: **ozonolysis** to locate C=C bonds; oxidiser in the manufacture of KMnO₄,
  peroxy compounds, and synthetic camphor/vanillin.


# 10. Hydrides of Group 16 — H₂E

All the elements form a **bent (sp³, two lone pairs)** covalent hydride H₂E.

| Property | H₂O | H₂S | H₂Se | H₂Te | H₂Po |
|:--|:--:|:--:|:--:|:--:|:--:|
| m.p. / K | 273 | 187 | 208 | 222 | — |
| **b.p. / K** | **373** | 213 | 232 | 269 | 309 |
| H–E–E bond length / pm | 96 | 134 | 146 | 169 | — |
| **∠H–E–H** | **104.5°** | 92.1° | 91.0° | 90.0° | ~90° |
| ΔfH° / kJ mol⁻¹ | **−286** | −20 | +73 | +100 | +218 |
| ΔdissH (E–H) / kJ mol⁻¹ | 463 | 347 | 276 | 238 | — |
| Ka₁ (aqueous, 298 K) | 1.8 × 10⁻¹⁶ | 1.0 × 10⁻⁷ | 1.3 × 10⁻⁴ | 2.3 × 10⁻³ | — |
| dipole moment / D | 1.84 | 0.95 | 0.62 | 0.4 | — |
| smell / toxicity | none | rotten eggs; **very toxic** (paralyses smell at 100 ppm) | worse | worse | — |

## 10.1 The orders — every one with its reason

> **Thermal stability** — Decreasing order: **H₂O > H₂S > H₂Se > H₂Te > H₂Po**
> Reason: the **E–H bond enthalpy falls** (463 → 238 kJ mol⁻¹) as the E atom grows and its
> orbital overlaps the small H 1s less well. ΔfH goes from **−286 kJ (H₂O, very stable)** to
> **+100 kJ (H₂Te)** and **+218 kJ (H₂Po)** — the heavy hydrides are **endothermic** and
> decompose on gentle warming.

> **Reducing power** — Increasing order: **H₂O < H₂S < H₂Se < H₂Te**
> Reason: the weaker the E–H bond, the more readily E–H hydrogen (and the E²⁻) is given up.
> H₂S reduces acidified KMnO₄ (→ colourless), K₂Cr₂O₇ (orange → green), Fe³⁺ → Fe²⁺,
> HNO₃ → NO₂, SO₂ → S, X₂ → HX; itself → **S** (turbidity).

> **Acidic strength in water** — Increasing order: **H₂O < H₂S < H₂Se < H₂Te**
> Ka₁ rises by ~10³ per step (10⁻¹⁶ → 10⁻³).
> Reason: the **H–E bond dissociation enthalpy decreases** down the group, so the proton is
> released more easily. (Electronegativity of E *falls* down the group, which would make the
> acid *weaker* — so **bond strength, not electronegativity, controls the trend**, the same
> lesson as HF < HCl < HBr < HI.)

> **Bond angle ∠H–E–H** — Decreasing order: **H₂O (104.5°) > H₂S (92°) > H₂Se (91°) > H₂Te (90°)**
> Reason: in H₂O the O uses **sp³** hybrids (104.5°, slightly below 109.5° from lp–lp
> repulsion). For the heavier hydrides s–p mixing is poor (large atom, diffuse s orbital),
> so E uses **almost pure p orbitals** → ~90°; the long E–H bonds and low EN of E also
> reduce bp–bp repulsion, allowing the angle to close right down.

> **Boiling point** — Order: **H₂O (373) ≫ H₂Te (269) > H₂Se (232) > H₂S (213 K)**
> Reason: **H₂O is strongly hydrogen-bonded** (small, very electronegative O) → anomalously
> high. Among the rest there is **no H-bonding**, so b.p. simply rises with **molar mass**
> (van der Waals) — H₂S, the lightest, has the **lowest** boiling point of the whole family.

> **Volatility** — the reverse of b.p.: H₂S > H₂Se > H₂Te > H₂O.

## 10.2 Hydrogen sulphide, H₂S — the qualitative-analysis reagent


![Fig. Kipp's apparatus — H2S on demand.](/notes/oxygen-family/o_kipp.svg)

- **Preparation:** FeS + dil. H₂SO₄ → FeSO₄ + H₂S (Kipp's apparatus); pure H₂S from
  Al₂S₃ + 6 H₂O → 2 Al(OH)₃ + 3 H₂S.
- Colourless gas, **rotten-egg smell**, **highly poisonous** (as toxic as HCN — and it
  deadens the sense of smell, so it is deceptively dangerous); denser than air;
  moderately soluble (**a weak dibasic acid** in water → HS⁻, S²⁻).
- **Reducing agent** (see the order-block above).
- **Analytical use:** in **acidic** solution precipitates the sulphides of the less
  electropositive metals — **Group II: Cu²⁺, Cd²⁺, Bi³⁺, Pb²⁺ (black), As, Sb, Sn**; in
  **ammoniacal** solution precipitates **Group IIIB / IV: Zn²⁺ (white), Ni²⁺, Co²⁺, Mn²⁺
  (buff), Fe²⁺ (black)**. The separation works because [S²⁻] is controlled by pH
  (common-ion effect on the H₂S equilibrium).


# 11. Oxides — the full classification

An **oxide** is a binary compound of oxygen with another element. Oxygen reacts with almost
every element (exceptions: some noble gases, Au, Pt, halogens under ordinary conditions).

| Class | Behaviour | Examples |
|:--|:--|:--|
| **Acidic oxide** (acid anhydride) | + water → oxoacid; + base → salt | CO₂, SO₂, SO₃, N₂O₃, N₂O₅, P₄O₆, P₄O₁₀, Cl₂O₇, B₂O₃, SiO₂; and **high-oxidation-state metal oxides** Mn₂O₇, CrO₃, V₂O₅ |
| **Basic oxide** | + water → base; + acid → salt | Na₂O, K₂O, CaO, BaO, MgO, FeO, CuO, Ag₂O — generally metals in a **low** oxidation state |
| **Amphoteric oxide** | reacts with **both** acids and bases | **Al₂O₃, ZnO, PbO, PbO₂, SnO, SnO₂, BeO, Cr₂O₃, Ga₂O₃, As₄O₆, Sb₄O₆** |
| **Neutral oxide** | neither acidic nor basic; forms no salt | **CO, NO, N₂O, H₂O** |
| **Mixed / compound oxide** | behaves as two simpler oxides combined | **Pb₃O₄ (2PbO·PbO₂), Fe₃O₄ (FeO·Fe₂O₃), Mn₃O₄ (2MnO·MnO₂)** |
| **Peroxide** (O₂²⁻, O in −1) | + dilute acid → **H₂O₂** | Na₂O₂, BaO₂, H₂O₂ |
| **Superoxide** (O₂⁻, O in −½) | + water → O₂ + H₂O₂ + MOH | KO₂, RbO₂, CsO₂ |
| **Suboxide** | O:M ratio below the normal | C₃O₂, Pb₂O, Rb₉O₂ |

**Representative reactions.**

CaO + H₂O → Ca(OH)₂    (basic)
SO₃ + H₂O → H₂SO₄    (acidic)
Al₂O₃ + 6 HCl + 9 H₂O → 2 [Al(H₂O)₆]³⁺ + 6 Cl⁻    ;    Al₂O₃ + 2 NaOH + 3 H₂O → 2 Na[Al(OH)₄]
ZnO + 2 HCl → ZnCl₂ + H₂O    ;    ZnO + 2 NaOH + H₂O → Na₂[Zn(OH)₄]
2 Na₂O₂ + 2 H₂O → 4 NaOH + O₂    ;    Na₂O₂ + 2 CO₂ → 2 Na₂CO₃ + O₂ (submarine air renewal)
4 KO₂ + 2 CO₂ → 2 K₂CO₃ + 3 O₂    (self-contained breathing apparatus, spacecraft)

> **Acidic character across a period** — Increasing: Na₂O (basic) < MgO (basic) < Al₂O₃
> (amphoteric) < SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇ (all strongly acidic). Down a group of
> non-metals it **decreases** (CO₂ > SiO₂ > GeO₂; SO₂ > SeO₂ > TeO₂).

> **Acidic character with oxidation state (same element)** — Increasing: the **higher oxide
> is more acidic** — CrO (basic) < Cr₂O₃ (amphoteric) < CrO₃ (acidic); MnO < Mn₂O₃ < MnO₂
> (amphoteric) < Mn₂O₇ (acidic); N₂O₃ < N₂O₅; SO₂ < SO₃.


# 12. Hydrogen peroxide, H₂O₂

## 12.1 Preparation

| Method | Equation / notes |
|:--|:--|
| **laboratory** — barium peroxide + acid | BaO₂·8H₂O + H₂SO₄ → BaSO₄↓ + H₂O₂ + 8 H₂O   *(BaSO₄ filtered off — no contamination; use H₃PO₄ for a more stable product)* |
| sodium peroxide + cold dilute acid | Na₂O₂ + H₂SO₄ → Na₂SO₄ + H₂O₂ |
| **old industrial** — electrolytic persulphate route | 2 HSO₄⁻ →(anodic oxidation) HO₃S–O–O–SO₃H (peroxodisulphuric acid) →(hydrolysis) 2 HSO₄⁻ + **H₂O₂** (distilled out) |
| **modern industrial** — anthraquinone (auto-oxidation) process | 2-ethylanthraquinol + O₂ → 2-ethylanthraquinone + **H₂O₂**; the quinone is hydrogenated (H₂/Pd) back to the quinol and recycled. Net: **H₂ + O₂ → H₂O₂** |

**Concentration & storage.** Careful **distillation under reduced pressure** gives ~30 %
("100-volume") and, with more care, up to 99 % H₂O₂. Stored in **wax-lined or plastic
bottles**, in the **dark and cool**, with a trace stabiliser (**urea, dilute H₃PO₄,
acetanilide, sodium stannate**) — rough surfaces, dust, alkali, light and transition-metal
ions all catalyse its decomposition.

## 12.2 Structure — the "open-book"


![Fig. Hydrogen peroxide — non-planar 'open book' structure.](/notes/oxygen-family/o_h2o2.svg)

- Non-planar, **skew-chain ("open-book")** structure: the two O–H bonds lie in different
  planes.
- **Gas phase:** O–O 147.5 pm, O–H 95 pm, ∠O–O–H 94.8°, **dihedral angle 111.5°**.
- **Solid phase:** dihedral angle **90.2°** (hydrogen bonding pulls the book more closed).
- Each O is **sp³**.

## 12.3 Physical properties

- Pure H₂O₂ — an almost colourless (very pale blue), **syrupy** liquid; b.p. 423 K, m.p.
  272.4 K; **denser (1.44) and more viscous than water** (more hydrogen bonding per
  molecule — two O–H and two lone-pair sites); **miscible with water in all proportions**;
  forms a solid hydrate H₂O₂·2H₂O.
- **"Volume strength"** = the volume of O₂ (at STP) that 1 volume of the solution gives on
  complete decomposition (2 H₂O₂ → 2 H₂O + O₂).
  - **"10-volume" ≈ 3 %**, "20-volume" ≈ 6 %, "100-volume" ≈ 30 %.
  - **Volume strength = 5.6 × molarity**;  strength (g L⁻¹) = (17/5.6) × volume strength
    = 3.036 × volume strength.

## 12.4 Chemical properties

### (a) Decomposition (disproportionation) — O is −1

2 H₂O₂ → 2 H₂O + O₂    ΔH = −196 kJ mol⁻¹    *(catalysed by MnO₂, Pt, finely divided
metals, blood **catalase**, alkali, dust, light, Fe³⁺)*

### (b) Weak dibasic acid (Ka₁ = 1.5 × 10⁻¹²)

H₂O₂ + 2 NaOH → Na₂O₂ + 2 H₂O
H₂O₂ + Ba(OH)₂ → BaO₂ + 2 H₂O
H₂O₂ + Ca(OH)₂ → CaO₂ + 2 H₂O

### (c) Oxidising agent — in **acidic AND basic** medium (O: −1 → −2)

| Medium | Reaction |
|:--|:--|
| acidic | 2 Fe²⁺ + H₂O₂ + 2 H⁺ → 2 Fe³⁺ + 2 H₂O |
| acidic | 2 I⁻ + H₂O₂ + 2 H⁺ → I₂ + 2 H₂O |
| acidic | **PbS (black) + 4 H₂O₂ → PbSO₄ (white) + 4 H₂O**   (restoring darkened oil paintings) |
| acidic | SO₃²⁻ + H₂O₂ → SO₄²⁻ + H₂O ; NO₂⁻ + H₂O₂ → NO₃⁻ + H₂O |
| basic | Mn²⁺ + H₂O₂ + 2 OH⁻ → MnO₂↓ + 2 H₂O |
| basic | 2 Cr³⁺ + 3 H₂O₂ + 10 OH⁻ → 2 CrO₄²⁻ + 8 H₂O |

### (d) Reducing agent — towards stronger oxidisers (O: −1 → 0, gives O₂)

| Medium | Reaction |
|:--|:--|
| acidic | 2 MnO₄⁻ + 5 H₂O₂ + 6 H⁺ → 2 Mn²⁺ + 5 O₂ + 8 H₂O   (**used to standardise KMnO₄**) |
| acidic | 2 Ce⁴⁺ + H₂O₂ → 2 Ce³⁺ + 2 H⁺ + O₂ |
| acidic | Cl₂ + H₂O₂ → 2 HCl + O₂ ; HOCl + H₂O₂ → HCl + H₂O + O₂ |
| basic | 2 [Fe(CN)₆]³⁻ + H₂O₂ + 2 OH⁻ → 2 [Fe(CN)₆]⁴⁻ + 2 H₂O + O₂ |
| basic | Ag₂O + H₂O₂ → 2 Ag + H₂O + O₂ |
| — | O₃ + H₂O₂ → H₂O + 2 O₂ |

### (e) The chromium-peroxide test

Acidified K₂Cr₂O₇ + H₂O₂ + ether → **deep-blue CrO(O₂)₂ (chromium peroxide, CrO₅)** in the
ether layer — a sensitive, specific test for **either** H₂O₂ **or** a chromate/dichromate.

### (f) Bleaching — by oxidation, liberating nascent O

Bleaches **hair, wool, silk, feathers, ivory, leather, wood pulp, delicate fabrics, oil
paintings** — mild and clean (the by-product is only water). *"Peroxide blonde"* hair.

## 12.5 Uses of hydrogen peroxide

- **Bleaching** — textiles, paper pulp, straw, leather, oils, fats, hair (now the dominant
  pulp bleach, replacing chlorine).
- **Mild antiseptic / disinfectant** — skin, wounds, ear drops (3 %); **mouthwash and tooth
  whitener**; **contact-lens** disinfectant; sterilising food-packaging surfaces and
  surgical implants; **vapour-phase H₂O₂** for room decontamination.
- **Environmental** — treating domestic and industrial effluent, restoring dissolved O₂ to
  rivers, **oxidising cyanide, sulphide, hypochlorite and nitrite**, controlling odour and
  bulking sludge; **in-situ** remediation of contaminated groundwater.
- **Chemical manufacture** — **sodium perborate and sodium percarbonate** (the "oxygen
  bleach" in laundry powders), propylene oxide, epoxides, peracids, plasticisers, and fine
  chemicals; **as an antichlor**.
- **Propellant / power** — high-strength (>85 %) H₂O₂ as a **monopropellant** (decomposed
  over a silver-gauze catalyst) and as an oxidiser in torpedoes, rocket engines (e.g.
  Me-163, Black Arrow) and jet-pack devices.
- **Analytical** — the CrO₅ test; volumetric redox (standardises KMnO₄).

> **Why H₂O₂ can be both an oxidiser and a reductant.** Oxygen in H₂O₂ is in the
> **intermediate** oxidation state **−1**. It can go **down to −2** (acting as an oxidiser,
> being reduced) or **up to 0** (acting as a reductant, being oxidised to O₂). The same
> logic explains SO₂ (S +4), HNO₂ (N +3), NH₂OH (N −1), H₃PO₃ (P +3).


# 13. Sulphur dioxide, SO₂

## 13.1 Preparation


![Fig. Laboratory preparation of sulphur dioxide.](/notes/oxygen-family/o_prepso2.svg)

| Method | Equation |
|:--|:--|
| burn sulphur / roast a sulphide | S + O₂ → SO₂ (+ 6–8 % SO₃);  4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂ |
| **laboratory** — sulphite (or hydrogensulphite) + acid | Na₂SO₃ + H₂SO₄ → Na₂SO₄ + H₂O + SO₂ |
| Cu + hot conc. H₂SO₄ | Cu + 2 H₂SO₄(conc) → CuSO₄ + SO₂ + 2 H₂O |
| C or S + hot conc. H₂SO₄ | C + 2 H₂SO₄ → CO₂ + 2 SO₂ + 2 H₂O ;  S + 2 H₂SO₄ → 3 SO₂ + 2 H₂O |

The dried gas is **liquefied under a few atm** and stored in steel cylinders (b.p. 263 K).

## 13.2 Structure


![Fig. SO2 (angular) and SO3 (planar).](/notes/oxygen-family/o_sooxides.svg)

**Angular (bent)**, ∠O–S–O **119.5°**, S is **sp²** with one lone pair. **Both S–O bonds
equal, 143 pm** — a resonance hybrid with **π bonding (pπ–pπ and pπ–dπ)**; bond order
≈ 1.5–2. Isoelectronic (in the valence sense) and iso-structural with **O₃** and **NO₂⁻**.

## 13.3 Physical properties

Colourless gas, **sharp choking "burnt-match" smell**, poisonous (a respiratory irritant;
the historic London-smog killer); **highly soluble** in water (~80 volumes); easily
liquefied.

## 13.4 Chemical properties

### (a) Acidic oxide — the anhydride of sulphurous acid

SO₂ + H₂O ⇌ H₂SO₃   *(exists only in solution — "sulphurous acid")*
SO₂ + 2 NaOH → Na₂SO₃ + H₂O   ;   Na₂SO₃ + SO₂ + H₂O → 2 NaHSO₃
SO₂ + Na₂CO₃ → Na₂SO₃ + CO₂

### (b) Reducing agent (moist SO₂; S(IV) → S(VI)) — the standard exam set

| Reaction | Observation |
|:--|:--|
| 5 SO₂ + 2 KMnO₄ + 2 H₂O → K₂SO₄ + 2 MnSO₄ + 2 H₂SO₄ | purple **decolourised** (test for SO₂) |
| 3 SO₂ + K₂Cr₂O₇ + H₂SO₄ → K₂SO₄ + Cr₂(SO₄)₃ + H₂O | orange → **green** |
| SO₂ + 2 FeCl₃ + 2 H₂O → 2 FeCl₂ + H₂SO₄ + 2 HCl | yellow → pale green |
| SO₂ + Cl₂ + 2 H₂O → H₂SO₄ + 2 HCl ;  SO₂ + Br₂ + 2 H₂O → H₂SO₄ + 2 HBr | halogen water **decolourised** |
| SO₂ + 2 H₂S → 3 S↓ + 2 H₂O | **SO₂ acts as an OXIDISER here** (Claus process) — pale-yellow turbidity |

### (c) Other reactions

SO₂ + Cl₂ →(charcoal, hν) SO₂Cl₂ (sulphuryl chloride)
2 SO₂ + O₂ →(V₂O₅, 720 K) 2 SO₃

## 13.5 Uses of sulphur dioxide

- **Manufacture of sulphuric acid** (Contact process) — the overwhelming use.
- **Bleaching** wool, silk, straw, wood pulp, sponges, gelatin — a **reducing** bleach, so
  the effect is **temporary** (the colour slowly returns in air).
- **Food preservative / antioxidant** (E220) — dried fruit, fruit juices, jams, wine,
  pickles ("sulphiting"); inhibits browning and microbial growth.
- **Disinfectant / fumigant** for casks, breweries and grain stores; **anti-chlor** (removes
  excess Cl₂ after bleaching); **refrigerant** (older systems); solvent (liquid SO₂) for
  many organic and inorganic compounds; refining petroleum and sugar.

> **SO₂ vs CO₂ — parallel behaviour.** Both are acidic anhydrides that turn lime-water
> milky (SO₂ → CaSO₃, CO₂ → CaCO₃) and both **redissolve** on excess gas
> (Ca(HSO₃)₂ / Ca(HCO₃)₂). Distinguish them: SO₂ **decolourises acidified KMnO₄ and
> K₂Cr₂O₇** (reducing), CO₂ does not.


# 14. Oxoacids of sulphur


![Fig. Sulphur trioxide — monomer, cyclic trimer, chain polymer.](/notes/oxygen-family/o_so3forms.svg)


![Fig. Oxoacids of sulphur — S-S / peroxo / S-O-S bonds and the rules.](/notes/oxygen-family/o_soxoacids.svg)

Sulphur forms more oxoacids than any other element. Many are stable only in solution or as
their salts.

| Name | Formula | Ox. state(s) of S | Key structural feature | Redox character |
|:--|:--|:--:|:--|:--|
| **Sulphurous** | H₂SO₃ | +4 | 1 S=O, 2 S–OH, lone pair on S | **reducing** (→ H₂SO₄) |
| **Sulphuric** | H₂SO₄ | +6 | 2 S=O, 2 S–OH (tetrahedral) | oxidiser only when hot & concentrated |
| **Pyrosulphuric (oleum / disulphuric)** | H₂S₂O₇ | +6 | **S–O–S** bridge | from SO₃ + H₂SO₄ |
| **Peroxomonosulphuric (Caro's acid)** | H₂SO₅ | +6 | one **–O–O–H** (peroxo) group | powerful oxidiser |
| **Peroxodisulphuric (Marshall's acid)** | H₂S₂O₈ | +6 | **S–O–O–S** peroxo bridge | powerful oxidiser; K₂S₂O₈ = polymerisation initiator, etchant |
| **Thiosulphuric** | H₂S₂O₃ | +6 and −2 (**avg +2**) | one terminal O of H₂SO₄ replaced by **S** | free acid unstable; **salts (hypo) are the important species** |
| **Dithionous (hydrosulphurous)** | H₂S₂O₄ | +3 | **S–S** bond, no S–H | strong reducing agent; **Na₂S₂O₄** = vat-dye reductant, "colour run" remover |
| **Dithionic** | H₂S₂O₆ | +5 | **S–S** bond joining two SO₃ groups | first of the "polythionic" series |
| **Polythionic** | H₂SₙO₆ (n = 3–6) | mixed | a chain of S atoms capped by two –SO₃ groups | present in Wackenroder's solution |

## 14.1 The governing rules


![Fig. Special linkages in the oxoacids of sulphur (S-S, peroxo, S-O-S).](/notes/oxygen-family/o_soxoacids2.svg)

- Every S is **tetrahedrally** four-coordinate with **at least one S=O and one S–OH**.
- Acids with an **S–S bond** (thiosulphuric, dithionous, dithionic, polythionic) or an
  **S–O–O** peroxo bond (Caro's, Marshall's) are the "extra" acids beyond the simple
  SO₃/SO₄ pair.
- **Reducing power** comes from S in a **low oxidation state** (H₂SO₃ +4, H₂S₂O₄ +3);
  **oxidising power** comes from a **peroxo** linkage (H₂SO₅, H₂S₂O₈).

## 14.2 Sodium thiosulphate, Na₂S₂O₃·5H₂O ("hypo") — worth its own section

**Preparation:** Na₂SO₃ + S →(boil) Na₂S₂O₃; also 2 Na₂S + Na₂CO₃ + 4 SO₂ → 3 Na₂S₂O₃ + CO₂.

**Structure of S₂O₃²⁻:** **tetrahedral** — like SO₄²⁻ but with **one O replaced by a second
S**. The two sulphurs are chemically **different**: a central S(+5)-like atom and a
terminal S(−1)-like atom (overall average oxidation state +2). This is why thiosulphate
gives **both** sulphate **and** sulphur on decomposition.

**Reactions:**

| With | Reaction | Note |
|:--|:--|:--|
| dilute acid | Na₂S₂O₃ + 2 HCl → 2 NaCl + **S↓ + SO₂** + H₂O | the S₂O₃²⁻ ion is only stable in neutral/alkaline solution |
| **I₂** (mild oxidiser) | 2 Na₂S₂O₃ + I₂ → **Na₂S₄O₆** (tetrathionate) + 2 NaI | quantitative — the basis of **iodometry** |
| **Cl₂/Br₂** (strong oxidiser) | Na₂S₂O₃ + 4 Cl₂ + 5 H₂O → 2 NaHSO₄ + 8 HCl | full oxidation to **sulphate** — used as an **anti-chlor** |
| Ag⁺ / AgBr | AgBr + 2 Na₂S₂O₃ → Na₃[Ag(S₂O₃)₂] + NaBr | dissolves unexposed silver halide — photographic **"fixing"** |
| Fe³⁺ | 2 Fe³⁺ + 2 S₂O₃²⁻ → 2 Fe²⁺ + S₄O₆²⁻ | violet colour flashes then fades |
| Cu²⁺ | excess S₂O₃²⁻ → [Cu(S₂O₃)₂]³⁻ (and Cu₂S₂O₃) | first oxidises to S₄O₆²⁻, then complexes |

**Uses:** photographic **fixer** ("hypo"); **iodometric titrations** (standard reductant for
I₂); **anti-chlor** (de-chlorinating bleached fabric and treated water); **antidote for
cyanide poisoning** (converts CN⁻ → SCN⁻, catalysed by rhodanese) and for **argyria**;
mordant in dyeing; **leaching of silver and gold** ores as thiosulphate complexes (a
non-toxic alternative to cyanide).


# 15. Sulphuric acid, H₂SO₄ — "the king of chemicals"

## 15.1 Manufacture — the Contact process


![Fig. Contact process for sulphuric acid.](/notes/oxygen-family/o_contact.svg)

**Step 1 — SO₂ generation:** burn molten sulphur in dry air (S + O₂ → SO₂), or roast iron
pyrites (4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂).

**Step 2 — purification:** the gas is cleaned of **dust** (electrostatic precipitator),
**dried** (bubbled through conc. H₂SO₄ in a drying tower), and freed of **arsenic oxides**
(passed over moist Fe(OH)₃) — **As₂O₃ is a catalyst poison**.

**Step 3 — catalytic oxidation** (the "contact" step):

2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)   **ΔrH° = −196.6 kJ mol⁻¹**

over **V₂O₅** on a silica/K₂SO₄ support, in a **multi-bed converter** at **~2 bar, 720 K**.

> **Le Chatelier / rate compromise.** Exothermic **and** a decrease in gas moles (3 → 2), so
> maximum yield needs **low T and high P**. But low T makes the rate too slow, so **~720 K**
> is used with the catalyst; **pressure only slightly above 1 atm** is enough (equilibrium
> already ~97 % at 2 bar) so high-pressure plant is not justified; a **slight excess of
> air** and **cooling / SO₃ removal between beds** ("double-contact double-absorption") push
> conversion to **> 99.5 %** and cut SO₂ emissions.
>
> Earlier catalyst: **platinised asbestos** — very active but **easily poisoned** by As.
> V₂O₅ is cheaper, longer-lived and poison-resistant.

**Step 4 — absorption:** SO₃ is **NOT** absorbed directly in water (forms a fine, persistent
**acid mist** that will not condense). It is absorbed in **98 % H₂SO₄** to give **oleum**,
which is then diluted:

SO₃ + H₂SO₄ → **H₂S₂O₇ (oleum)**    ;    H₂S₂O₇ + H₂O → 2 H₂SO₄

Product ("Contact acid") is **96–98 %** pure.

## 15.2 Structure

S is **tetrahedral (sp³)**; **two short S=O bonds (140 pm, with pπ–dπ character)** and **two
longer S–OH bonds (154 pm)**.

## 15.3 Physical properties

- Colourless, odourless, **dense (ρ 1.84), oily, viscous** liquid (hydrogen bonding); f.p.
  283 K, b.p. 611 K (decomposes).
- **Enormous affinity for water**; dilution is strongly exothermic.
  **RULE: always add the acid slowly to water with stirring, never water to acid** —
  otherwise localised boiling ejects hot concentrated acid.

## 15.4 Chemical properties — the four characteristic behaviours

### (a) Strong dibasic acid — ionises in two steps

H₂SO₄ + H₂O → H₃O⁺ + HSO₄⁻   (Ka₁ very large — essentially complete)
HSO₄⁻ + H₂O ⇌ H₃O⁺ + SO₄²⁻   (**Ka₂ = 1.2 × 10⁻²** — much weaker)

> **JEE point:** Ka₂ ≪ Ka₁ because the second proton is pulled off the **already
> negative** HSO₄⁻ ion against electrostatic attraction. So dilute H₂SO₄ is
> "monoprotically strong, diprotically moderate". Two salt series: **normal sulphates**
> (Na₂SO₄) and **acid sulphates / hydrogensulphates** (NaHSO₄).

Na₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂ ; Zn + H₂SO₄(dil) → ZnSO₄ + H₂ ; CuO + H₂SO₄ → CuSO₄ + H₂O

### (b) Low volatility — displaces more volatile acids from their salts

NaCl + H₂SO₄ →(Δ) NaHSO₄ + **HCl↑**
NaNO₃ + H₂SO₄ →(Δ) NaHSO₄ + **HNO₃↑**
CaF₂ + H₂SO₄ →(Δ) CaSO₄ + **2 HF↑**
> But **NOT** for HBr or HI (conc. H₂SO₄ oxidises them — see (d)).

### (c) Powerful dehydrating agent

C₁₂H₂₂O₁₁ →(conc. H₂SO₄) 12 C + 11 H₂O   *(sucrose → black carbon "snake")*
HCOOH →(conc. H₂SO₄) CO + H₂O    ;    (COOH)₂ → CO + CO₂ + H₂O
C₂H₅OH →(conc. H₂SO₄, 440 K) C₂H₄ + H₂O   *(dehydration in organic synthesis)*
CuSO₄·5H₂O →(conc. H₂SO₄) CuSO₄ (white) + 5 H₂O
Dries gases that don't react with it (H₂, O₂, Cl₂, SO₂, CO₂) — **not** NH₃, H₂S, HBr, HI.

### (d) Oxidising agent — hot and concentrated (S(VI) → SO₂, occasionally S or H₂S)

| Reductant | Reaction |
|:--|:--|
| Cu | Cu + 2 H₂SO₄(conc) → CuSO₄ + SO₂ + 2 H₂O |
| C | C + 2 H₂SO₄(conc) → CO₂ + 2 SO₂ + 2 H₂O |
| S | S + 2 H₂SO₄(conc) → 3 SO₂ + 2 H₂O |
| **HBr** | 2 HBr + H₂SO₄(conc) → Br₂ + SO₂ + 2 H₂O |
| **HI** | 8 HI + H₂SO₄(conc) → 4 I₂ + H₂S + 4 H₂O |

> **Consequence:** conc. H₂SO₄ **cannot** be used to prepare **HBr or HI** from a bromide
> or iodide — it oxidises the product. Use **non-oxidising H₃PO₄** instead. (HCl and HF are
> not oxidised, so NaCl/CaF₂ + H₂SO₄ work fine.)

## 15.5 Uses of sulphuric acid

A country's H₂SO₄ consumption is a classic index of its industrial output.

- **Fertilisers — the largest single use:** superphosphate Ca(H₂PO₄)₂ + CaSO₄, triple
  superphosphate, **ammonium sulphate**.
- **Chemical manufacture:** HCl, HF, HNO₃, phosphoric acid, alums, CuSO₄ and other
  sulphates, dyes and dye intermediates (sulphonation), detergents (alkylbenzene
  sulphonation), explosives (nitration acid), synthetic fibres, drugs, esters.
- **Petroleum refining** — alkylation, and removal of sulphur / unsaturated compounds.
- **Metallurgy** — **pickling** iron and steel (removing scale) before galvanising,
  tinning, enamelling, electroplating; leaching of copper, zinc, uranium ores;
  electro-refining electrolyte.
- **Lead–acid storage batteries** — the electrolyte (~30 % H₂SO₄).
- **Manufacture of rayon and cellophane** (regenerating cellulose from viscose); paper
  sizing; **laboratory reagent and drying agent**; catalyst in ester, ether and alkylation
  chemistry.


# 16. Halides and oxohalides of Group 16

## 16.1 The fluorides — SF₆ and SF₄


![Fig. SF6 (octahedral, inert) and SF4 (see-saw).](/notes/oxygen-family/o_sf6.svg)

| Fluoride | Shape (VSEPR) | Hybridisation | Notes |
|:--|:--|:--|:--|
| **SF₆** | **octahedral** (6 bp, 0 lp) | sp³d² | colourless, odourless, **exceptionally inert** gas — the sulphur is coordinatively saturated and **sterically shielded** by six F, and there is no low-energy pathway for attack; **thermally stable to ~800 K**, not hydrolysed by water or attacked by most reagents |
| **SF₄** | **see-saw** (4 bp, 1 lp, trigonal bipyramid with the lone pair equatorial) | sp³d | reactive; **hydrolysed** (SF₄ + 2 H₂O → SO₂ + 4 HF); a **selective fluorinating agent** — converts >C=O → >CF₂, –COOH → –CF₃ |

> **Why SF₆ but no SCl₆, SBr₆, no OF₆?**
> - **SCl₆, SBr₆:** six large Cl/Br atoms **cannot fit** around the small S, and S–Cl/S–Br
>   bonds are weaker; also Cl/Br could be oxidised by S(VI).
> - **OF₆:** oxygen has **no d orbitals** and is too small — its maximum covalence is
>   **2** (occasionally more). "OF₆" is impossible.
> - **Kinetic vs thermodynamic:** SF₆ is actually *thermodynamically* able to hydrolyse
>   (SF₆ + 3 H₂O → SO₃ + 6 HF is exothermic) but is **kinetically protected** — a textbook
>   example of the difference.

**Uses of SF₆:** a superb **gaseous electrical insulator** (5× the dielectric strength of
air) in high-voltage switchgear, transformers and the CERN accelerators; leak-detection
tracer; etching plasma in the semiconductor industry. (It is a very potent, long-lived
**greenhouse gas** — GWP ~23 500 — so its use is being contained.)

## 16.2 Oxygen fluorides — OF₂ and O₂F₂

- **OF₂** (oxygen difluoride) — O is **+2**; bent, ∠F–O–F 103°; a pale-yellow gas; a strong
  fluorinating/oxidising agent; **not an acid anhydride** (it is an oxygen fluoride, not a
  fluorine oxide, because F > O in electronegativity).
- **O₂F₂** (dioxygen difluoride, "FOOF") — O is **+1**; unstable above 220 K; one of the
  most vigorous oxidisers known — **oxidises Pu → PuF₆** (used to strip plutonium from spent
  nuclear fuel).

## 16.3 Lower halides and oxohalides

- **S₂Cl₂** (disulphur dichloride) — orange, foul-smelling liquid; from S + Cl₂; used in
  the **vulcanisation of rubber** and to make dyes and insecticides.
- **SO₂Cl₂** (sulphuryl chloride) — from SO₂ + Cl₂; a chlorinating and chlorosulphonating
  agent; hydrolyses to H₂SO₄ + 2 HCl.
- **SOCl₂** (thionyl chloride) — from SO₂ + PCl₅ (or SO₃ + SCl₂); converts –OH → –Cl and
  –COOH → –COCl **cleanly** (by-products SO₂ and HCl are gases): R–OH + SOCl₂ → R–Cl + SO₂
  + HCl. Widely used in organic synthesis and in **lithium–thionyl-chloride batteries**.
- **SeF₄, TeF₄** — see-saw, like SF₄; **TeF₆** octahedral but (unlike SF₆) slowly
  hydrolysed → Te(OH)₆.
- **SeCl₄, TeCl₄** — from the element + Cl₂; in the gas phase see-saw; TeCl₄ is ionic in
  the solid ([TeCl₃]⁺[Cl]⁻-type).

## 16.4 Trends

> **Stability of the hexahalides** — only the **hexafluorides** exist; kinetic inertness
> **SF₆ > SeF₆ > TeF₆** (TeF₆ hydrolyses).
> **Stability with halogen** — **fluoride > chloride > bromide > iodide** for every
> oxidation state.
> **Reactivity of MX₄ / MX₂ towards water** — increases down the group (SCl₂, SeCl₄
> hydrolyse; TeCl₄ gives basic TeOCl₂ — Te becoming metallic).


# 17. Selenium, tellurium and polonium — comparative chemistry

## 17.1 The elements and their trends

| Property | S | Se | Te | Po |
|:--|:--|:--|:--|:--|
| Character | non-metal | **metalloid** (photoconductor) | metalloid (semiconductor) | **metal** (radioactive) |
| Stable oxide | SO₂ / SO₃ both important | SeO₂ (solid) | **TeO₂** (the stable one) | PoO₂ |
| Common acid | H₂SO₄ (+6) not oxidising | H₂SeO₃ (+4); H₂SeO₄ (+6) **oxidising** | **H₂TeO₃ (+4)**; Te(OH)₆ weak & oxidising | — |
| Hydride | H₂S (weak acid) | H₂Se (stronger acid, less stable) | H₂Te (still stronger, endothermic) | H₂Po (barely) |
| −2 ion | S²⁻ common | Se²⁻ | Te²⁻ (readily oxidised) | — |

> **Reducing power of H₂E** — S < Se < Te (H₂Te reduces even in air).
> **Acidic strength of the dioxide EO₂** — SO₂ > SeO₂ > TeO₂ (TeO₂ **amphoteric**).
> **Stability of the +6 state** — S ≫ Se > Te (Te(VI) oxidising; H₂SeO₄ dissolves gold —
> "the only single acid that does").
> **Metallic / cationic behaviour** — appears in Se, Te: hot conc. H₂SO₄ gives coloured
> **Se₈²⁺ (green)** and **Te₄²⁺ (red)** polycations; Po forms simple Po²⁺/Po⁴⁺ salts.

## 17.2 A few characteristic reactions

3 Se + 4 HNO₃ + H₂O → 3 H₂SeO₃ + 4 NO
TeO₂ + 2 NaOH → Na₂TeO₃ + H₂O   ;   TeO₂ + 4 HCl → TeCl₄ + 2 H₂O   (amphoteric)
Se + 2 H₂SO₄(conc, hot) → Se₈²⁺ ... (green solution)

## 17.3 Uses

- **Selenium:** the **xerographic (photocopier / laser-printer) drum** and **selenium
  rectifiers / photocells / light meters / solar cells** (photoconductivity); **red
  colour** and **decolouriser** in glass (cancels the green of Fe²⁺); **CdSe/CIGS**
  thin-film photovoltaics; a trace **essential nutrient** (glutathione peroxidase,
  selenocysteine — the "21st amino acid"); **SeO₂** as an oxidant in organic synthesis
  (allylic oxidation, Riley oxidation); anti-dandruff shampoos (selenium sulphide).
- **Tellurium:** **free-machining additive** to steel, copper and lead (like S, but less
  detrimental); vulcanising agent and accelerator for rubber; **CdTe** thin-film solar
  cells and **Bi₂Te₃** thermoelectric coolers/generators (Peltier devices); **phase-change
  memory** (GeSbTe, "GST" — rewritable DVDs and 3D-XPoint); tints glass blue-brown.
- **Polonium:** compact **radioisotope thermoelectric generators (RTGs)** for satellites and
  lunar rovers; **anti-static brushes and radiation sources** (α emitter — ionises air);
  neutron source (with Be); historically a notorious poison (Litvinenko, 2006).


# 18. Uses of Group 16 elements and their compounds

| Element / compound | Principal uses |
|:--|:--|
| **O₂** | life support (hospitals, aviation, diving); **basic-oxygen steelmaking** (largest use); oxy-fuel welding/cutting; **LOX** rocket oxidiser; manufacture of HNO₃, H₂SO₄, ethylene/propylene oxide, TiO₂; sewage aeration; ozone generation |
| **O₃** | sterilising drinking/pool water and sewage (no chlorinated by-products); bleaching delicate materials; air deodorising in cold stores; ozonolysis; KMnO₄ manufacture |
| **H₂O₂** | bleaching pulp, textiles, hair; antiseptic/mouthwash/tooth whitener; contact-lens & food-packaging sterilant; effluent & groundwater treatment (oxidises CN⁻, S²⁻); sodium perborate/percarbonate "oxygen bleach"; propylene oxide & epoxide manufacture; rocket monopropellant; the CrO₅ analytical test |
| **S (element)** | ~90 % goes to **H₂SO₄**; **vulcanisation of rubber** (S cross-links); fungicides & pesticides (dusting sulphur, lime sulphur); black gunpowder (S + KNO₃ + C); matches (P₄S₃); sulphur cement & sulphur concrete; skin ointments; carbon disulphide manufacture |
| **SO₂ / sulphites** | H₂SO₄ feedstock; reducing bleach (wool, silk, paper); **food/wine preservative & antioxidant** (E220–228); disinfectant/fumigant; anti-chlor; refrigerant; Na₂SO₃ in photography & as an O₂ scavenger |
| **H₂SO₄** | fertilisers (superphosphate, ammonium sulphate); manufacture of nearly every other mineral acid and many salts, dyes, detergents, explosives; petroleum alkylation & refining; **pickling** of steel; **lead–acid battery** electrolyte; rayon/cellophane; laboratory drying agent & catalyst |
| **Oleum (H₂S₂O₇)** | sulphonation of aromatics (detergents, dyes); making pure/fuming H₂SO₄; nitration mixtures for explosives |
| **Na₂S₂O₃ ("hypo")** | photographic **fixer**; iodometric titrations; anti-chlor; cyanide-poisoning antidote; silver/gold ore leaching; mordant |
| **K₂S₂O₈ / (NH₄)₂S₂O₈** | radical **initiator** for emulsion polymerisation (acrylics, styrene); microetching of PCBs; hair bleach; total-organic-carbon digestion |
| **Na₂O₂ / KO₂** | O₂ source and CO₂ scrubber in **submarines, spacecraft and self-contained breathing apparatus**; Na₂O₂ as a bleaching and oxidising agent, and an analytical fusion flux |
| **SF₆** | gaseous insulator in **high-voltage switchgear & transformers**; plasma etchant; leak tracer |
| **SOCl₂ / SO₂Cl₂ / S₂Cl₂** | chlorinating/chlorosulphonating reagents in organic synthesis; **S₂Cl₂** in rubber vulcanisation; SOCl₂ in Li–SOCl₂ batteries |
| **CS₂** | manufacture of **viscose rayon and cellophane** (via cellulose xanthate) and of **CCl₄**; solvent for S, P, I₂, fats, rubber; flotation agent; fumigant (historic) |
| **Se compounds** | xerographic drums, photocells, rectifiers, solar cells; glass colouring/decolourising; SeO₂ oxidant; anti-dandruff shampoo; trace nutrient |
| **Te compounds** | free-machining steel/Cu; CdTe & Bi₂Te₃ (solar, thermoelectric); GeSbTe phase-change memory; rubber vulcanising |
| **Po** | RTGs; anti-static devices; neutron sources |


# 19. One-page reaction networks

## 19.1 Oxygen / peroxide / ozone

    KClO₃ ──(MnO₂, Δ)──▶ KCl + O₂        H₂O ──(electrolysis)──▶ O₂ (anode)
    2 KMnO₄ ──(Δ)──▶ K₂MnO₄ + MnO₂ + O₂
    O₂ ──(silent discharge)──▶ O₃  ⇌  (Δ / catalyst) O₂

    Na + O₂ ──▶ Na₂O₂ ;  K + O₂ ──▶ KO₂
    Na₂O₂ + H₂O ──▶ NaOH + H₂O₂ ;  Na₂O₂ + CO₂ ──▶ Na₂CO₃ + O₂
    BaO₂ + H₂SO₄ ──▶ BaSO₄ + H₂O₂            [lab H₂O₂]
    H₂ + O₂ ──(anthraquinone cycle)──▶ H₂O₂  [industrial]

    H₂O₂ ──(MnO₂)──▶ H₂O + O₂
    H₂O₂ + 2 KI + H₂SO₄ ──▶ I₂ + K₂SO₄ + 2 H₂O          (oxidiser)
    H₂O₂ + PbS ──▶ PbSO₄ + H₂O                          (oxidiser — painting restoration)
    5 H₂O₂ + 2 KMnO₄ + 3 H₂SO₄ ──▶ 2 MnSO₄ + K₂SO₄ + 5 O₂ + 8 H₂O   (reductant)
    K₂Cr₂O₇ + H₂O₂ + H₂SO₄ + ether ──▶ CrO₅ (blue)      (test)

    O₃ + 2 KI + H₂O ──▶ I₂ + 2 KOH + O₂ ──(Na₂S₂O₃)──▶ estimate O₃
    O₃ + PbS ──▶ PbSO₄ + O₂        NO + O₃ ──▶ NO₂ + O₂  (ozone-layer loss)

## 19.2 Sulphur network

    S ──(O₂)──▶ SO₂ ──(V₂O₅, O₂, 720 K)──▶ SO₃ ──(H₂SO₄)──▶ H₂S₂O₇ (oleum) ──(H₂O)──▶ H₂SO₄
    FeS₂ ──(roast, O₂)──▶ Fe₂O₃ + SO₂
    S + hot conc. H₂SO₄ ──▶ 3 SO₂ + 2 H₂O
    Cu + hot conc. H₂SO₄ ──▶ CuSO₄ + SO₂ + 2 H₂O
    Na₂SO₃ + H₂SO₄ ──▶ Na₂SO₄ + SO₂ + H₂O                [lab SO₂]

    SO₂ + H₂O ⇌ H₂SO₃ ;  SO₂ + 2 NaOH ──▶ Na₂SO₃ ──(+SO₂,H₂O)──▶ NaHSO₃
    SO₂ + Cl₂ ──(hν/charcoal)──▶ SO₂Cl₂
    2 H₂S + SO₂ ──▶ 3 S + 2 H₂O                          (Claus)
    SO₂ + 2 H₂O + X₂ ──▶ H₂SO₄ + 2 HX                    (SO₂ reducing)

    Na₂SO₃ + S ──(boil)──▶ Na₂S₂O₃
    Na₂S₂O₃ + I₂ ──▶ Na₂S₄O₆ + 2 NaI                     (iodometry)
    Na₂S₂O₃ + 4 Cl₂ + 5 H₂O ──▶ 2 NaHSO₄ + 8 HCl          (anti-chlor)
    AgBr + 2 Na₂S₂O₃ ──▶ Na₃[Ag(S₂O₃)₂] + NaBr            (photographic fixing)

    FeS + H₂SO₄(dil) ──▶ FeSO₄ + H₂S ;  Al₂S₃ + 6 H₂O ──▶ 2 Al(OH)₃ + 3 H₂S
    H₂S + Cu²⁺/Pb²⁺/Cd²⁺/Bi³⁺ (acid) ──▶ CuS/PbS/CdS/Bi₂S₃↓   (qual. analysis Group II)


# 20. JEE-Advanced traps and derived tools

## 20.1 Traps

1. **|ΔₑgH₁| of O < S** (141 vs 200 kJ mol⁻¹). Oxygen does **not** release the most energy
   on gaining an electron — the small 2p subshell makes electron–electron repulsion
   dominate. Same anomaly: F < Cl, N < P.
2. **ΔᵢH₁ of O < N** (1314 < 1402) and **S < P** (1000 < 1012). A Group 16 atom loses a
   *paired* p electron to reach a stable p³; a Group 15 atom would have to break its stable
   p³.
3. **O₂ is paramagnetic** (2 unpaired e⁻ in π*). Bond-order/length order: **O₂⁺ > O₂ > O₂⁻
   > O₂²⁻** (2.5, 2.0, 1.5, 1.0).
4. **Bond angle order H₂O > H₂S > H₂Se > H₂Te** (104.5° → 90°); and **∠HOH (104.5°) <
   ∠HNH in NH₃ (107.8°)** — because O has **two** lone pairs compressing the angle, N has
   one.
5. **Acid strength & reducing power of H₂E increase down the group**; **thermal stability
   decreases**; **b.p.: H₂O ≫ H₂Te > H₂Se > H₂S** (H₂S is the lowest-boiling).
6. **H₂O₂ acts as an oxidiser AND a reductant, in acid AND in base** — O is in the
   intermediate state −1.
7. **CrO₅ (chromium peroxide)** — the blue species in the H₂O₂ / dichromate / ether test —
   contains **two peroxo (O₂²⁻) groups**; Cr is **+6**, not +10. Structure: butterfly
   CrO(O₂)₂ with a base (ether / pyridine) completing the coordination.
8. **SO₂ bleaches by reduction (temporary); Cl₂ and O₃ and H₂O₂ bleach by oxidation
   (permanent).**
9. **SO₃ is not absorbed in water directly** in the Contact process — it forms an acid mist;
   it is absorbed in 98 % H₂SO₄ → oleum.
10. **Conc. H₂SO₄ cannot make HBr or HI** (it oxidises them to Br₂ / I₂ + SO₂ / H₂S). It
    can make HCl and HF.
11. **SF₆ is inert kinetically, not thermodynamically** — hydrolysis is exothermic but has
    no low-energy pathway (S is shielded and saturated).
12. **"OF₂" is an oxygen fluoride, not a fluorine oxide** — F is more electronegative than
    O, so O is +2. It is **not** an acid anhydride.
13. **Thiosulphate + dilute acid → S↓ + SO₂** (the ion is unstable in acid). With **I₂**
    it gives **tetrathionate**; with **Cl₂/Br₂** it goes all the way to **sulphate**
    (anti-chlor).
14. **Te and I are an anomalous atomic-mass pair** (Te 127.6 > I 126.9) — placed by
    chemistry / atomic number, not mass.
15. **Ozone O–O bond order is 1.5**, bond length 128 pm (equal), molecule bent 117°,
    **diamagnetic**, μ = 0.53 D.
16. **Peroxide (O₂²⁻) vs superoxide (O₂⁻)** — Na → Na₂O₂ (peroxide), K/Rb/Cs → MO₂
    (superoxide); larger cation stabilises the larger anion (lattice-energy argument).

## 20.2 Derived tools

> **Pauling's rule for oxoacid strength.** For (HO)ₚE(=O)_q, **pKa₁ ≈ 8 − 5q** (q = number
> of terminal E=O groups).
> - H₂SO₄ (q = 2): pKa₁ ≈ −2 → strong. H₂SO₃ (q = 1): pKa₁ ≈ 2 → weak.
> - **HClO₄ (q = 3): pKa₁ ≈ −7** → superacid; HOCl (q = 0): pKa₁ ≈ 8 → very weak.

> **"Intermediate oxidation state ⇒ can be BOTH oxidiser and reductant."**
> O in H₂O₂ (−1), S in SO₂ / SO₃²⁻ (+4), the O₃/O₂ couple, N in HNO₂ (+3), P in H₃PO₃ (+3).

> **"Small first-member ⇒ π-bonds and stays a small molecule; heavy members ⇒ single-bond
> and polymerise."** O₂ vs S₈; CO₂ vs SiO₂; N₂ vs P₄. One rule, three groups.

> **"Cation size sets the oxide type."** Li⁺ (small) → Li₂O; Na⁺ → Na₂O₂; K⁺/Rb⁺/Cs⁺
> (large) → MO₂. The bigger the cation, the bigger the anion it can stabilise
> (lattice-energy matching).

> **Born–Haber for oxides.** O²⁻(g) is *endothermic* to form (ΔₑgH₁ + ΔₑgH₂ = +639 kJ);
> ionic oxides exist only because the **lattice enthalpy of an M²⁺O²⁻ solid** (∝ q₊q₋ = 4)
> is huge. So: **highly charged small cations → covalent oxides**; only large,
> low-charge cations give truly ionic O²⁻ salts.


# 21. Ultra-fast final revision

- **Config ns²np⁴** → need 2 e⁻ for the octet; **chalcogens**; O, S non-metal → Se, Te
  metalloid → Po metal.
- **O anomaly:** tiny, most electronegative in group, **no d orbitals** (covalence 2),
  strong **pπ–pπ**, **H-bonding in water**; **|ΔₑgH₁| of O < S**.
- **ΔᵢH₁: Group 16 < Group 15** (O < N, S < P) — losing a paired p⁴ electron gives a stable
  p³.
- **O₂ paramagnetic** (MO: 2 e⁻ in π*), bond order 2. **O₂⁺ > O₂ > O₂⁻ > O₂²⁻** for bond
  order.
- **O₂:** heat KClO₃/MnO₂, decompose oxides/peroxides/H₂O₂; industry = distil liquid air.
- **O₃:** **silent discharge**, **endothermic**, **bent 117°, O–O 128 pm (equal), bond
  order 1.5, diamagnetic**; **powerful oxidiser** (nascent O); estimate with KI /
  thiosulphate; stratospheric layer destroyed by **NO and Cl (CFCs)**.
- **H₂O₂:** **anthraquinone** process; **open-book** structure (dihedral 111.5° gas, 90.2°
  solid); **both oxidiser and reductant, in acid and base**; bleaches by oxidation;
  **volume strength = 5.6 × molarity**; **CrO₅ blue test**.
- **Oxides:** acidic (non-metal / high state) · basic (metal / low state) · **amphoteric
  (Al₂O₃, ZnO, PbO, SnO)** · neutral (CO, NO, N₂O) · mixed (Pb₃O₄) · peroxide (Na₂O₂) ·
  superoxide (KO₂). Acidity ↑ with oxidation state and ↓ down a group.
- **Sulphur allotropes:** **rhombic ⇌ monoclinic at 369 K**; both S₈ crown rings; **plastic
  S = Sμ chains** (insoluble in CS₂); **S₂ vapour paramagnetic** (like O₂).
- **Heat on S:** thin (S₈) → thick near 473 K (Sμ chains) → thin again above ~523 K.
- **SO₂:** angular, **reducing**, bleaches by **reduction (temporary)**, decolourises
  KMnO₄ / K₂Cr₂O₇ / Br₂ water; anhydride of H₂SO₃; Contact-process feed; **with H₂S it is an
  oxidiser** (Claus).
- **Contact process:** SO₂ + O₂ →(V₂O₅, 720 K, ~2 bar) SO₃; absorb in 98 % H₂SO₄ → oleum →
  dilute. NOT SO₃ + water directly.
- **H₂SO₄:** strong dibasic (Ka₂ = 1.2 × 10⁻²); low-volatility acid; **dehydrating agent**;
  **hot conc. = oxidiser** (Cu → SO₂; HI → I₂ + H₂S). **Can't make HBr/HI** — use H₃PO₄.
- **Na₂S₂O₃:** tetrahedral **S₂O₃²⁻ (one S replaces one O of SO₄²⁻)**; **+ acid → S + SO₂**;
  **+ I₂ → S₄O₆²⁻** (iodometry); **+ Cl₂ → SO₄²⁻** (anti-chlor); photographic **fixer**.
- **Oxoacids of S:** **S–S** bonds (thiosulphuric, dithionous, dithionic, polythionic);
  **peroxo O–O** (Caro's H₂SO₅, Marshall's H₂S₂O₈, both oxidisers).
- **SF₆** octahedral, **kinetically inert** (not thermodynamically); **SF₄** see-saw,
  fluorinating agent. **No OF₆.**
- **H₂E:** thermal stability H₂O > H₂S > H₂Se > H₂Te; acid strength & reducing power the
  reverse; angle 104.5° → 90°; **H₂S is the qualitative-analysis reagent**.
- **Se** = photoconductor (xerography, photocells); **Te** = thermoelectrics & phase-change
  memory; **Po** = α-emitter, RTGs.


# 22. Chapter review questions (with worked answers)

**Q1.** Why is the first electron gain enthalpy of oxygen (−141 kJ mol⁻¹) less negative
than that of sulphur (−200 kJ mol⁻¹)?
*A.* The incoming electron enters the **small, compact 2p subshell** of oxygen, where the
electron cloud is already dense and interelectronic **repulsion** is severe — this partly
cancels the energy released. In the larger **3p** subshell of sulphur the extra electron is
accommodated with much less repulsion, so more net energy is released.

**Q2.** Account for the fact that O₂ is a gas that boils at 90 K while S₈ is a solid that
melts at 393 K, even though both are non-polar covalent molecules of the same group.
*A.* Dispersion forces scale with the **size and polarisability** of the molecule.
Oxygen is a tiny **diatomic** O₂ — very small dispersion forces → very low b.p. Sulphur is
an **octa-atomic S₈** ring — a far larger, more polarisable unit → much stronger dispersion
forces → a solid. This is an **atomicity** effect, itself a consequence of the first-member
anomaly (only O π-bonds to itself).

**Q3.** Explain the paramagnetism of dioxygen and predict, with bond orders, how the O–O
bond length changes in the series O₂⁺, O₂, O₂⁻, O₂²⁻.
*A.* The MO configuration of O₂ ends **…π2p⁴ π\*2p²**, with the two π\* electrons **singly
occupying** the degenerate π\* orbitals (Hund) → **two unpaired electrons → paramagnetic**.
Adding electrons fills the antibonding π\*: bond order O₂⁺ 2.5 → O₂ 2.0 → O₂⁻ 1.5 → O₂²⁻
1.0, so the bond gets **longer**: 112 < 121 < 128 < 149 pm.

**Q4.** Why is H₂O a liquid at room temperature whereas H₂S is a gas, and why does H₂S boil
*lower* than H₂Se and H₂Te?
*A.* Small, very electronegative O gives strong **O–H···O hydrogen bonding** in water → an
extensive network → high b.p. (373 K). In H₂S the S–H bond is weakly polar and S is large,
so there is **essentially no hydrogen bonding**; the molecules are held only by weak van
der Waals forces. Among H₂S, H₂Se, H₂Te (no H-bonding) the b.p. then simply **rises with
molar mass**, so H₂S — the lightest — boils lowest.

**Q5.** Give the structure of ozone and account for the equality of its two O–O bonds and
its diamagnetism.
*A.* O₃ is **bent, ∠O–O–O ≈ 117°**, central O **sp²** with one lone pair. It is a
**resonance hybrid** of two equivalent structures (one O=O and one O–O⁺ swapping), so both
bonds are identical at **128 pm** (order 1.5). All electrons are paired in the delocalised
π system → **diamagnetic**; μ = 0.53 D (unlike non-polar O₂).

**Q6.** Explain why hydrogen peroxide can act as both an oxidising and a reducing agent.
Give one example of each in acidic medium.
*A.* Oxygen in H₂O₂ is in the **intermediate oxidation state −1**. As an **oxidiser** it is
reduced to −2 (H₂O): 2 Fe²⁺ + H₂O₂ + 2 H⁺ → 2 Fe³⁺ + 2 H₂O. As a **reductant** it is
oxidised to 0 (O₂): 2 MnO₄⁻ + 5 H₂O₂ + 6 H⁺ → 2 Mn²⁺ + 5 O₂ + 8 H₂O.

**Q7.** Describe the Contact process, stating the conditions for step 2 and explaining why
SO₃ is not absorbed directly in water.
*A.* (i) S/FeS₂ → SO₂; (ii) SO₂ purified (dust, moisture, **As₂O₃**); (iii)
**2 SO₂ + O₂ ⇌ 2 SO₃**, ΔH < 0, over **V₂O₅**, **~720 K**, **~2 bar**, slight excess air,
cooling between beds; (iv) SO₃ absorbed in **98 % H₂SO₄** → oleum → diluted.
SO₃ + water directly gives a fine, stable **acid mist** that does not condense and is hard
to trap and corrosive to the plant — so SO₃ is absorbed in concentrated acid instead.

**Q8.** Why can concentrated sulphuric acid be used to prepare HCl from NaCl but not HBr
from NaBr?
*A.* HCl is not oxidised by conc. H₂SO₄, so **NaCl + H₂SO₄ → NaHSO₄ + HCl** simply
liberates the more volatile acid. But **HBr is oxidised**: 2 HBr + H₂SO₄(conc) → Br₂ + SO₂
+ 2 H₂O, so the product is contaminated with Br₂ and SO₂. HI is oxidised even further (→ I₂
+ H₂S). Use the **non-oxidising acid H₃PO₄** for HBr and HI.

**Q9.** What is the structure of the thiosulphate ion, and why does dilute acid decompose
it to sulphur and sulphur dioxide?
*A.* S₂O₃²⁻ is **tetrahedral** — the sulphate ion with **one O replaced by a terminal S**.
The two sulphurs are in different environments (formal +5 and −1; average +2). In acid the
ion is unstable and **disproportionates**: the −1 sulphur → S(0) (precipitate) and the +5
sulphur → S(+4) (SO₂): S₂O₃²⁻ + 2 H⁺ → S↓ + SO₂ + H₂O.

**Q10.** Explain why SF₆ exists and is chemically inert, whereas SF₄ is reactive and
"OF₆" does not exist at all.
*A.* Sulphur can **expand its octet** using empty 3d orbitals, so it reaches 6-coordination
in SF₆; the six F atoms **saturate and sterically shield** the S, and there is no low-energy
route for a reagent to attack — SF₆ is **kinetically inert** (though hydrolysis is
thermodynamically favourable). SF₄ has a **lone pair** and an exposed S, so it is reactive
and hydrolyses. Oxygen has **no d orbitals** and is too small — its covalence cannot exceed
~2, so **OF₆ is impossible**.

**Q11.** Complete and balance: (i) Na₂O₂ + H₂O →; (ii) 2 KO₂ + 2 CO₂ →; (iii) BaO₂ + H₂SO₄
→; (iv) SO₂ + 2 H₂S →; (v) 3 S + 6 NaOH →.
*A.* (i) 4 NaOH + O₂ (per 2 Na₂O₂ + 2 H₂O); (ii) 2 K₂CO₃ + 3 O₂; (iii) BaSO₄ + H₂O₂;
(iv) 3 S + 2 H₂O; (v) 2 Na₂S + Na₂SO₃ + 3 H₂O.

**Q12.** Why does the acidic strength of the hydrides increase H₂O < H₂S < H₂Se < H₂Te
even though electronegativity decreases down the group?
*A.* Acid strength here is governed by **how easily the H–E bond breaks**, and the H–E bond
**dissociation enthalpy falls steadily** (463 → 238 kJ mol⁻¹) as E gets bigger and overlaps
the small H 1s orbital less well. The decreasing electronegativity of E would, on its own,
make the acids *weaker* — so bond strength wins, and the observed trend is the same as
HF < HCl < HBr < HI.

**Q13.** How is ozone estimated quantitatively?
*A.* Pass a known volume of ozonised oxygen into **excess neutral KI solution**:
O₃ + 2 KI + H₂O → I₂ + 2 KOH + O₂. Acidify and titrate the liberated **I₂ against standard
sodium thiosulphate** with starch indicator: I₂ + 2 Na₂S₂O₃ → 2 NaI + Na₂S₄O₆. One mole of
O₃ ≡ one mole of I₂ ≡ two moles of thiosulphate.

**Q14.** Give the reason: (a) O₃ is thermodynamically unstable with respect to O₂; (b)
sulphuric acid is a stronger dehydrating agent than phosphoric acid.
*A.* (a) 2 O₃ → 3 O₂ is **exothermic** (ΔH < 0) **and** increases the number of moles of
gas (ΔS > 0), so ΔG is large and negative. (b) Conc. H₂SO₄ has an extremely high affinity
for water (large negative enthalpy of hydration, strong H-bond acceptor), and its removal
of water from a substrate is essentially irreversible under the reaction conditions;
H₃PO₄ binds water less strongly.

**Q15.** Arrange with reasons: (a) thermal stability H₂O, H₂S, H₂Se, H₂Te; (b) reducing
power of the same; (c) bond angle of the same.
*A.* (a) H₂Te < H₂Se < H₂S < **H₂O** — E–H bond enthalpy falls (H₂Te is endothermic).
(b) H₂O < H₂S < H₂Se < **H₂Te** — weaker E–H bond → E–H hydrogen more easily lost.
(c) H₂Te (90°) < H₂Se (91°) < H₂S (92°) < **H₂O (104.5°)** — heavier E use nearly pure p
orbitals; O uses sp³.


# 23. Chapter coverage checklist

- [ ] p-block framework; ns²np⁴; M²⁻ ion and the Born–Haber argument for oxides
- [ ] First-member anomaly of O: small size, EN 3.5, no d orbitals (covalence 2), pπ–pπ,
      weak O–O bond, H-bonding in water
- [ ] Master data table; irregular size/ΔₑgH steps (d-block & lanthanoid contraction)
- [ ] Occurrence; isotopes (¹⁸O labelling, Te–I anomalous pair, ²¹⁰Po)
- [ ] All property **orders** with reasons: radius, ΔᵢH₁ (Group 16 < Group 15!),
      **|ΔₑgH₁| of O < S**, ΔₑgH₂ positive, EN, m.p./b.p. (atomicity), metallic character
- [ ] Oxidation states −2 → +6; inert-pair effect (+4 vs +6); SO₂/SO₃²⁻ reducing,
      Te(VI) oxidising
- [ ] MO of O₂: paramagnetism; O₂⁺/O₂/O₂⁻/O₂²⁻ bond-order & length order
- [ ] Anomalous O vs the group; water's anomalies (b.p., density max, ΔvapH, ε)
- [ ] Elemental reactivity with conditions (O₂, S, Se/Te); S + NaOH disproportionation
- [ ] Allotropes: O₂/O₃; sulphur (rhombic, monoclinic, 369 K, plastic Sμ, S₆, S₂ vapour);
      action of heat on S (viscosity)
- [ ] O₂ — lab & industrial prep (incl. PSA), properties, uses (steelmaking, LOX)
- [ ] O₃ — silent discharge, structure (117°, 128 pm, bond order 1.5), oxidising reactions,
      estimation, ozone layer, uses
- [ ] Hydrides H₂E — full data table; every order with its reason; H₂S in qualitative
      analysis
- [ ] Oxide classification — acidic / basic / amphoteric / neutral / mixed / peroxide /
      superoxide, with examples and reactions; acidity vs period, group, oxidation state
- [ ] H₂O₂ — prep (anthraquinone), open-book structure, volume strength (= 5.6 M), oxidiser
      & reductant in acid & base, CrO₅ test, bleaching, uses
- [ ] SO₂ — prep, angular structure, reducing reactions (KMnO₄, K₂Cr₂O₇, Br₂ water),
      Claus (SO₂ as oxidiser), bleaching by reduction, uses
- [ ] Oxoacids of S — full table; S–S and peroxo classes; Pauling's rule
- [ ] Na₂S₂O₃ — S₂O₃²⁻ structure, reactions with acid / I₂ / Cl₂ / Ag⁺, photographic
      fixing, iodometry, anti-chlor, cyanide antidote
- [ ] H₂SO₄ — Contact process (all 4 steps + conditions + why not SO₃ + water), structure,
      strong-acid / low-volatility / dehydrating / oxidising behaviour, why not HBr/HI, uses
- [ ] Halides: SF₆ (octahedral, kinetically inert), SF₄ (see-saw), OF₂/O₂F₂,
      SOCl₂/SO₂Cl₂/S₂Cl₂
- [ ] Se, Te, Po — trends, coloured polycations, uses (xerography, thermoelectrics, RTGs)
- [ ] Uses table for every element and major compound
- [ ] Reaction networks; JEE traps; Pauling's rule; Born–Haber tool; ultra-fast revision


# 24. NCERT Class XII, Unit 7 — complete reaction & preparation ledger

*Every equation, preparation and named condition from NCERT Unit 7 "The p-Block Elements"
(Group 16 portion, §7.10–7.17), grouped by NCERT section. Section numbers in [ ] point to
where each item is developed in these notes.*

## 24.1 NCERT §7.10 — Group 16: general [§1–§6]

- Valence configuration **ns² np⁴**; group state +6; other states +2, +4, −2.
- O and S non-metals, Se and Te metalloids, Po a radioactive metal; all show allotropy.
- **ΔᵢH₁ of Group 16 < Group 15** (same period) — because Group 15 has the extra-stable
  half-filled p³ configuration (Example 7.10).
- O has a **less negative ΔₑgH than S** — the compact 2p subshell of oxygen gives strong
  interelectronic repulsion.
- Stability of +6 **decreases**, of +4 **increases** down the group (inert-pair effect);
  bonding in +4 and +6 is essentially covalent.
- O shows +2 and +1 **only in OF₂ and O₂F₂** (F is more electronegative).
- Anomalous O: small size, high EN; strong hydrogen bonding in H₂O (not in H₂S); absence of
  d orbitals limits covalence to 4 (in practice 2).
- **Hydrides H₂E** (Table 7.7): acidic character increases H₂O → H₂Te; thermal stability
  decreases H₂O → H₂Po; all except water are reducing, reducing power increases H₂S → H₂Te.
- **Oxides:** EO₂ (SO₂, SeO₂ gases/solid) and EO₃ (SO₃, SeO₃, TeO₃); reducing power of the
  dioxide decreases SO₂ → TeO₂ (SO₂ reducing, TeO₂ oxidising); all oxides acidic.
- **Halides:** EX₆, EX₄, EX₂; stability F⁻ > Cl⁻ > Br⁻ > I⁻; only hexafluorides stable,
  octahedral, gaseous; **SF₆ exceptionally stable (steric reasons)**; tetrafluorides
  (SF₄ gas, SeF₄ liquid, TeF₄ solid) sp³d, **see-saw** shape; all elements except O form
  dichlorides and dibromides (sp³, tetrahedral); monohalides dimeric (S₂F₂, S₂Cl₂, S₂Br₂,
  Se₂Cl₂, Se₂Br₂) and disproportionate: **2Se₂Cl₂ → SeCl₄ + 3Se**.
- Example 7.11: H₂S less acidic than H₂Te — E–H bond dissociation enthalpy decreases down
  the group.

## 24.2 NCERT §7.11 — Dioxygen [§8]

**Preparation:**

    2KClO₃ --heat, MnO₂ catalyst--> 2KCl + 3O₂
    2Ag₂O(s) → 4Ag(s) + O₂(g)
    2Pb₃O₄(s) → 6PbO(s) + O₂(g)
    2HgO(s) → 2Hg(l) + O₂(g)
    2PbO₂(s) → 2PbO(s) + O₂(g)
    2H₂O₂(aq) → 2H₂O(l) + O₂(g)          (catalysed by finely divided metals / MnO₂)

- On a large scale: from air, by removing CO₂ and water vapour, then liquefying and
  fractionally distilling; also by electrolysis of water (O₂ at the anode).

**Properties:**

    2Ca + O₂ → 2CaO
    4Al + 3O₂ → 2Al₂O₃
    P₄ + 5O₂ → P₄O₁₀
    C + O₂ → CO₂
    2ZnS + 3O₂ → 2ZnO + 2SO₂
    CH₄ + 2O₂ → CO₂ + 2H₂O
    2SO₂ + O₂ --V₂O₅--> 2SO₃
    4HCl + O₂ --CuCl₂--> 2Cl₂ + 2H₂O

- Solubility 3.08 cm³ in 100 cm³ water at 293 K; liquefies at 90 K, freezes at 55 K;
  isotopes ¹⁶O, ¹⁷O, ¹⁸O; molecule **paramagnetic** despite an even number of electrons;
  O=O bond dissociation enthalpy **493.4 kJ mol⁻¹**; does not react with Au, Pt or some
  noble gases.
- **Uses:** normal respiration and combustion; oxyacetylene welding; manufacture of many
  metals, particularly **steel**; oxygen cylinders in hospitals, high-altitude flying,
  mountaineering; combustion of fuels / hydrazines in liquid O₂ for rocket propulsion.
- Intext 7.16: **Pt** does not react with oxygen directly. Intext 7.17:
  C₂H₄ + 3O₂ → 2CO₂ + 2H₂O; 4Al + 3O₂ → 2Al₂O₃.

## 24.3 NCERT §7.12 — Simple oxides [§11]

    SO₂ + H₂O → H₂SO₃                    (acidic oxide)
    CaO + H₂O → Ca(OH)₂                  (basic oxide)
    Al₂O₃(s) + 6HCl(aq) + 9H₂O(l) → 2[Al(H₂O)₆]³⁺(aq) + 6Cl⁻(aq)
    Al₂O₃(s) + 6NaOH(aq) + 3H₂O(l) → 2Na₃[Al(OH)₆](aq)          (amphoteric oxide)

- Acidic oxides: SO₂, Cl₂O₇, CO₂, N₂O₅; and high-oxidation-state metal oxides Mn₂O₇, CrO₃,
  V₂O₅. Basic oxides: Na₂O, CaO, BaO. Amphoteric: Al₂O₃. **Neutral: CO, NO, N₂O.**

## 24.4 NCERT §7.13 — Ozone [§9]

**Preparation:**

    3O₂ → 2O₃          ΔH°(298 K) = +142 kJ mol⁻¹   (silent electrical discharge; ~10 % O₃)

- Endothermic — a silent discharge is used to prevent decomposition; pure O₃ (b.p. 101.1 K)
  condensed in liquid oxygen.

**Properties:**

    PbS(s) + 4O₃(g) → PbSO₄(s) + 4O₂(g)
    2I⁻(aq) + H₂O(l) + O₃(g) → 2OH⁻(aq) + I₂(s) + O₂(g)
    NO(g) + O₃(g) → NO₂(g) + O₂(g)

- Estimation: O₃ + excess KI buffered to **pH 9.2** → I₂ liberated, titrated against
  standard sodium thiosulphate.
- Structure: angular, bond angle **≈ 117°**, both O–O bonds equal (**128 pm**), resonance
  hybrid of two forms.
- **Uses:** germicide, disinfectant, sterilising water; bleaching oils, ivory, flour,
  starch; oxidising agent in the manufacture of potassium permanganate.
- Nitrogen oxides from supersonic jets and freons (CFCs) deplete the ozone layer.

## 24.5 NCERT §7.14 — Sulphur, allotropic forms [§7]

- **Rhombic sulphur (α-sulphur):** yellow, m.p. 385.8 K, sp. gr. 2.06; formed by
  evaporating a solution of roll sulphur in CS₂; **insoluble in water, readily soluble in
  CS₂**; stable below 369 K.
- **Monoclinic sulphur (β-sulphur):** m.p. 393 K, sp. gr. 1.98; prepared by melting rhombic
  sulphur, cooling until a crust forms, making two holes and pouring out the remaining
  liquid; **stable above 369 K**, transforms to α below it.
- **Transition temperature = 369 K** — both forms stable and interconvertible.
- Both contain **S₈ molecules** — puckered, crown-shaped ring (S–S 204 pm, ∠SSS 107°).
- **cyclo-S₆** — chair form (S–S 205.7 pm, ∠SSS 102.2°). At ~1000 K, **S₂** is the dominant
  species and is **paramagnetic, like O₂** (Example 7.12).

## 24.6 NCERT §7.15 — Sulphur dioxide [§13]

**Preparation:**

    S(s) + O₂(g) → SO₂(g)                              (with a little SO₃)
    SO₃²⁻(aq) + 2H⁺(aq) → H₂O(l) + SO₂(g)              (laboratory, from a sulphite)
    4FeS₂(s) + 11O₂(g) → 2Fe₂O₃(s) + 8SO₂(g)           (roasting sulphide ores, industry)

- The dried gas is liquefied under pressure and stored in steel cylinders.

**Properties:**

    SO₂(g) + H₂O(l) → H₂SO₃(aq)
    2NaOH + SO₂ → Na₂SO₃ + H₂O
    Na₂SO₃ + H₂O + SO₂ → 2NaHSO₃
    SO₂(g) + Cl₂(g) → SO₂Cl₂(l)                        (sulphuryl chloride)
    2SO₂(g) + O₂(g) --V₂O₅--> 2SO₃(g)
    2Fe³⁺ + SO₂ + 2H₂O → 2Fe²⁺ + SO₄²⁻ + 4H⁺
    5SO₂ + 2MnO₄⁻ + 2H₂O → 5SO₄²⁻ + 4H⁺ + 2Mn²⁺        (decolourises acidified KMnO₄)

- Molecule **angular**, resonance hybrid, both S–O bonds equal.
- **Uses:** refining petroleum and sugar; bleaching wool and silk; as an anti-chlor,
  disinfectant and preservative; manufacture of H₂SO₄, NaHSO₃ and Ca(HSO₃)₂; liquid SO₂ as
  a solvent.
- Intext 7.20: SO₂ passed into aqueous Fe(III) reduces it to Fe(II).

## 24.7 NCERT §7.16 — Oxoacids of sulphur (Fig 7.6) [§14]

- Sulphurous H₂SO₃, sulphuric H₂SO₄, thiosulphuric H₂S₂O₃, dithionous H₂S₂O₄, dithionic
  H₂S₂O₆, disulphurous H₂S₂O₅, polythionic H₂SₓO₆ (x = 2–5), peroxomonosulphuric H₂SO₅,
  peroxodisulphuric H₂S₂O₈, pyrosulphuric H₂S₂O₇.
- Structures shown: **sulphurous** (one S=O, two S–OH, lone pair), **sulphuric**
  (two S=O, two S–OH), **peroxodisulphuric H₂S₂O₈** (S–O–O–S peroxo bridge), **pyrosulphuric
  H₂S₂O₇** (S–O–S bridge).

## 24.8 NCERT §7.17 — Sulphuric acid [§15]

**Manufacture — Contact process (three steps):**

    (i)  S (or sulphide ores) + O₂ → SO₂                (SO₂ purified — dust removed;
         dried; freed of arsenic oxides over Fe(OH)₃)
    (ii) 2SO₂(g) + O₂(g) --V₂O₅ catalyst--> 2SO₃(g)     ΔrH° = −196.6 kJ mol⁻¹
    (iii) SO₃ + H₂SO₄ → H₂S₂O₇ (oleum)
          H₂S₂O₇ + H₂O → 2H₂SO₄

- Conditions: exothermic, reversible, volume decreases → **low temperature and high
  pressure** favour the forward reaction, but T not too low (rate). Plant operated at
  **2 bar and 720 K**. SO₃ is **absorbed in conc. H₂SO₄, not water** (would form a mist).
  Contact acid is **96–98 %** pure.

**Properties:**

    H₂SO₄(aq) + H₂O(l) → H₃O⁺(aq) + HSO₄⁻(aq)          Ka₁ very large (> 10)
    HSO₄⁻(aq) + H₂O(l) → H₃O⁺(aq) + SO₄²⁻(aq)          Ka₂ = 1.2 × 10⁻²
    2MX + H₂SO₄ → 2HX + M₂SO₄                          (X = F, Cl, NO₃)
    C₁₂H₂₂O₁₁ --H₂SO₄--> 12C + 11H₂O                   (dehydration of sucrose)
    Cu + 2H₂SO₄(conc.) → CuSO₄ + SO₂ + 2H₂O
    S + 2H₂SO₄(conc.) → 3SO₂ + 2H₂O
    C + 2H₂SO₄(conc.) → CO₂ + 2SO₂ + 2H₂O

- Colourless, dense, oily liquid, sp. gr. 1.84; freezes at 283 K, boils at 611 K; dissolves
  in water with a large evolution of heat — **add acid to water, with constant stirring**.
- Characteristics: (a) low volatility, (b) strong acidic character, (c) strong affinity for
  water, (d) can act as an oxidising agent.
- Two series of salts: **normal sulphates** (Na₂SO₄, CuSO₄) and **acid sulphates**
  (NaHSO₄).
- **Uses:** manufacture of fertilisers (ammonium sulphate, superphosphate); petroleum
  refining; manufacture of pigments, paints and dyestuff intermediates; detergent industry;
  metallurgy (cleaning metals before electroplating and galvanising); storage batteries;
  manufacture of nitrocellulose products; laboratory reagent.
- Intext 7.24: conditions to maximise the yield of H₂SO₄ by the Contact process — low
  temperature, high pressure, excess of air, catalyst V₂O₅.
- Intext 7.25: Ka₂ ≪ Ka₁ for H₂SO₄ because the second ionisation of HSO₄⁻ (removing H⁺ from
  a negative ion) is much harder.

## 24.9 Content in these notes that goes beyond NCERT Unit 7

Added from J. D. Lee / Greenwood / Ananya Ganguly (NCERT covers H₂O₂ in Unit 9, Hydrogen,
not here) for JEE-Advanced completeness:

- **Hydrogen peroxide H₂O₂** — anthraquinone process, open-book structure (dihedral 111.5°
  gas / 90.2° solid), "volume strength" = 5.6 × molarity, oxidising AND reducing behaviour
  in acidic and basic media, the CrO₅ (blue) test, bleaching, full list of uses [§12].
- **Hydrogen sulphide H₂S** — preparation, weak dibasic acid, reducing reactions, and its
  central role in **qualitative analysis** (Group II vs Group IIIB precipitation controlled
  by pH) [§10.2].
- **MO diagram of O₂** and the O₂⁺ / O₂ / O₂⁻ / O₂²⁻ bond-order and bond-length orders
  [§4.3].
- **Sodium thiosulphate Na₂S₂O₃** — structure of S₂O₃²⁻, reactions with acid / I₂ / Cl₂ /
  Ag⁺, photographic fixing, iodometry, anti-chlor, cyanide-poisoning antidote [§14.2].
- **SF₆ and SF₄** in detail (why SF₆ is kinetically inert; why "OF₆" cannot exist);
  **OF₂ / O₂F₂**; SOCl₂, SO₂Cl₂, S₂Cl₂ [§16].
- **Sulphur trioxide SO₃** — preparation, monomer/trimer/polymer structures, anhydride
  reactions [§10.2].
- **Peroxide / superoxide chemistry** — Na₂O₂, KO₂ in submarines and breathing apparatus
  (2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂; 4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂) [§11].
- **Frasch process** for mining native sulphur; **PSA** oxygen concentrators [§7.2, §8.2].
- **Selenium, tellurium, polonium** comparative chemistry and uses (xerography,
  thermoelectrics, RTGs); coloured polyatomic cations Se₈²⁺, Te₄²⁺ [§17].
- **Ozonolysis** of alkenes; the stratospheric Chapman cycle and the ozone-hole mechanism
  [§9.4, §9.5].


# 25. Extended reaction set for problem-solving (question-bank layer)

*The layer of specific reactions and micro-facts that JEE-Advanced question banks test but
that sit one level below the NCERT core. Grouped by species; every equation is balanced.*

## 25.1 Hydrogen peroxide, H₂O₂ — the complete redox set (acidic and basic media)

**Half-reactions:**  acidic  H₂O₂ + 2 H⁺ + 2 e⁻ → 2 H₂O  (E° = +1.77 V, oxidiser);
basic  H₂O₂ + 2 e⁻ → 2 OH⁻ (E° = +0.87 V);  as a reductant  H₂O₂ → O₂ + 2 H⁺ + 2 e⁻
(E° = −0.68 V acidic) / HO₂⁻ + OH⁻ → O₂ + H₂O + 2 e⁻ (E° = −0.08 V basic).
Oxygen in H₂O₂ is **−1** → it can go to **−2** (oxidiser) or **0** (reductant).

**(a) Oxidising — acidic medium (O −1 → −2):**

    2 Fe²⁺ + H₂O₂ + 2 H⁺ → 2 Fe³⁺ + 2 H₂O
    2 I⁻ + H₂O₂ + 2 H⁺ → I₂ + 2 H₂O
    PbS (black) + 4 H₂O₂ → PbSO₄ (white) + 4 H₂O          (restoring darkened oil paintings)
    Na₂SO₃ + H₂O₂ → Na₂SO₄ + H₂O
    NaNO₂ + H₂O₂ → NaNO₃ + H₂O
    Na₃AsO₃ + H₂O₂ → Na₃AsO₄ + H₂O
    H₂SO₄ + 2 FeSO₄ + H₂O₂ → Fe₂(SO₄)₃ + 2 H₂O
    2 CrO₄²⁻ + ... ;  CrO₄²⁻ + 2 H⁺ + 2 H₂O₂ → CrO(O₂)₂ (CrO₅, deep blue) + 3 H₂O
      then in acid:  4 CrO₅ + 12 H⁺ → 4 Cr³⁺ + 7 O₂ + 6 H₂O

**(b) Oxidising — basic medium:**

    2 Cr(OH)₃ + 3 H₂O₂ + 4 OH⁻ → 2 CrO₄²⁻ + 8 H₂O          ([Cr(OH)₄]⁻ + H₂O₂ → CrO₄²⁻, yellow)
    Mn²⁺ + H₂O₂ + 2 OH⁻ → MnO₂↓ + 2 H₂O                    (used to detect NH₃ — see note below)

**(c) Reducing — acidic medium (O −1 → 0, gives O₂):**

    2 MnO₄⁻ + 5 H₂O₂ + 6 H⁺ → 2 Mn²⁺ + 5 O₂ + 8 H₂O        (standardising KMnO₄)
    2 KMnO₄ + 5 H₂O₂ + 3 H₂SO₄ → K₂SO₄ + 2 MnSO₄ + 5 O₂ + 8 H₂O
    HOCl + H₂O₂ → HCl + H₂O + O₂
    Cl₂ + H₂O₂ → 2 HCl + O₂        (S.R.P. order Cl₂ > Br₂ > H₂O₂ > I₂ — so H₂O₂ reduces Cl₂/Br₂
                                    but OXIDISES I⁻)
    2 Ce⁴⁺ + H₂O₂ → 2 Ce³⁺ + 2 H⁺ + O₂
    2 K₃[Fe(CN)₆] + 2 KOH + H₂O₂ → 2 K₄[Fe(CN)₆] + 2 H₂O + O₂

**(d) Reducing — basic medium:**

    2 [Fe(CN)₆]³⁻ + H₂O₂ + 2 OH⁻ → 2 [Fe(CN)₆]⁴⁻ + 2 H₂O + O₂
    Ag₂O + H₂O₂ → 2 Ag + H₂O + O₂
    2 KMnO₄ + 3 H₂O₂ → 2 MnO₂ + 2 KOH + 3 O₂ + 2 H₂O
    O₃ + H₂O₂ → H₂O + 2 O₂
    NaOCl + H₂O₂ → NaCl + H₂O + O₂
    NaIO₄ + H₂O₂ → NaIO₃ + H₂O + O₂

**(e) Acidic (very weak dibasic acid):**

    H₂O₂ + 2 NaOH → Na₂O₂ + 2 H₂O
    H₂O₂ + Ba(OH)₂ → BaO₂ + 2 H₂O
    H₂O₂ + Na₂CO₃ → Na₂O₂ + CO₂ + H₂O

**(f) With Ti(IV) — the pertitanic-acid test:**  Ti(SO₄)₂ + H₂O₂ + 2 H₂O →
**H₂TiO₄** (yellow–orange pertitanic acid, TiO(O₂)²⁺-type) + 2 H₂SO₄ — a specific test for
**either Ti⁴⁺ or H₂O₂**.

**(g) As a rocket propellant:**  N₂H₄ + 2 H₂O₂ → N₂ + 4 H₂O  (strongly exothermic, huge
volume increase); >85 % H₂O₂ is a **monopropellant** (decomposed over an Ag-gauze catalyst).

> **Note — detecting NH₃ with H₂O₂ + Mn²⁺.** Mn²⁺ + H₂O₂ alone gives no reaction, but
> Mn²⁺ + H₂O₂ + OH⁻ → MnO₂↓ (black). Since NH₃ is the only common gas that supplies enough
> OH⁻ under these conditions, the appearance of the black MnO₂ ppt confirms NH₃.

## 25.2 H₂O₂ — preparation, structure, storage, "volume strength"

**Preparation:**

    BaO₂·8H₂O + H₂SO₄ → BaSO₄↓ + H₂O₂ + 8 H₂O            (lab; BaSO₄ filtered off)
    3 BaO₂ + 2 H₃PO₄ → Ba₃(PO₄)₂↓ + 3 H₂O₂               (H₃PO₄ preferred — H₂SO₄ *catalyses*
                                                          H₂O₂ decomposition, H₃PO₄ stabilises it)
    Na₂O₂ + H₂SO₄ (cold, dilute) → Na₂SO₄ + H₂O₂         ;  Na₂O₂ + 2 H₂O (ice-cold) → 2 NaOH + H₂O₂
    2 HSO₄⁻ --anodic oxidation--> S₂O₈²⁻ + 2 e⁻ ;  S₂O₈²⁻ + 2 H₂O → 2 HSO₄⁻ + H₂O₂   (persulphate
                                                                                    route; used to
                                                                                    make **D₂O₂**:
      K₂S₂O₈ + 2 D₂O → 2 KDSO₄ + D₂O₂)
    **Anthraquinone (auto-oxidation) process (industrial):** 2-ethylanthraquinol + O₂ →
      2-ethylanthraquinone + H₂O₂ ; the quinone is re-hydrogenated (H₂/Pd) and recycled.
      Net: H₂ + O₂ → H₂O₂. Gives ~1 %, concentrated to ~30 % (distillation, reduced P), then
      to ~85 % (careful low-P distillation; the last water is *frozen out* — m.p.(H₂O) >
      m.p.(H₂O₂), so ice separates first and pure liquid H₂O₂ remains).

**Structure — "open book" (non-planar):** gas phase O–O 147.5 pm, O–H 95 pm, ∠O–O–H 94.8°,
**dihedral 111.5°**; solid phase (110 K) ∠O–O–H 101.9°, **dihedral 90.2°** (H-bonding
closes the book). Each O is sp³.

**Storage:** decomposes in light, on rough surfaces, with dust, alkali and trace transition
metals → kept in **wax-lined or plastic bottles, cool and dark**, with a **stabiliser**
(urea, glycerol, acetanilide, dilute H₃PO₄, sodium stannate). 2 H₂O₂ → 2 H₂O + O₂,
ΔH = −196 kJ.

**"Volume strength"** = volume of O₂ (STP) that 1 volume of the solution gives on complete
decomposition.
- "10-volume" ≈ 3 %; **"100-volume" ≈ 30 % ("perhydrol")**; "20-volume" ≈ 6 %.
- **strength (g L⁻¹) = 3.03 × volume strength**;  **volume strength = 5.6 × molarity**;
  normality (as an oxidiser) = 2 × molarity.

## 25.3 Sulphur dioxide / sulphurous acid — extended set; "acidic vs basic medium"

    S + O₂ → SO₂ (+ ~7 % SO₃) ;  4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂ (roasting)
    Cu + 2 H₂SO₄ (conc, hot) → CuSO₄ + SO₂ + 2 H₂O
    Na₂SO₃ + H₂SO₄ → Na₂SO₄ + SO₂ + H₂O          (lab)
    C + 2 H₂SO₄ → CO₂ + 2 SO₂ + 2 H₂O ;  S + 2 H₂SO₄ → 3 SO₂ + 2 H₂O
    SO₂ + H₂O ⇌ H₂SO₃ ;  SO₂ + 2 NaOH → Na₂SO₃ + H₂O ;  Na₂SO₃ + SO₂ + H₂O → 2 NaHSO₃
    SO₂ + Cl₂ --charcoal/hν--> SO₂Cl₂  ;  2 SO₂ + O₂ --V₂O₅, 720 K--> 2 SO₃

**Reducing action (moist SO₂ / SO₃²⁻, S +4 → +6):**

    5 SO₂ + 2 KMnO₄ + 2 H₂O → K₂SO₄ + 2 MnSO₄ + 2 H₂SO₄      (decolourises acidified KMnO₄ — test)
    3 SO₂ + K₂Cr₂O₇ + H₂SO₄ → K₂SO₄ + Cr₂(SO₄)₃ + H₂O        (orange → green)
    SO₂ + 2 FeCl₃ + 2 H₂O → 2 FeCl₂ + H₂SO₄ + 2 HCl
    SO₂ + Cl₂ + 2 H₂O → H₂SO₄ + 2 HCl  ;  SO₂ + Br₂ + 2 H₂O → H₂SO₄ + 2 HBr  (decolourises Br₂ water)

**SO₂ as an oxidiser (only vs a stronger reductant):**  SO₂ + 2 H₂S → 3 S↓ + 2 H₂O (Claus).

> **Why SO₂ / SO₃²⁻ is a *stronger* reducing agent in alkaline than in acidic medium
> (IIT-JEE 1992).** The relevant couple is SO₄²⁻/SO₃²⁻. In **acid**:
> SO₄²⁻ + 4 H⁺ + 2 e⁻ → H₂SO₃ + H₂O, E° = +0.17 V. In **base**:
> SO₄²⁻ + H₂O + 2 e⁻ → SO₃²⁻ + 2 OH⁻, E° = **−0.93 V**. The far more negative potential in
> base means SO₃²⁻ loses electrons (is oxidised) much more readily there — i.e. it is a
> stronger reductant. (Le Chatelier view: removing H⁺ pulls the oxidation SO₃²⁻ → SO₄²⁻
> forward.)

**Bleaching by SO₂ is by *reduction*** (adds H / removes O) and is **temporary** — the
colour returns in air as O₂ re-oxidises the substrate. (Cl₂, O₃, H₂O₂ bleach by
**oxidation** — permanent.)

## 25.4 Oxoacids of sulphur — structure facts for "which has an S–S / peroxo bond" questions

| Acid / ion | S ox. state | S–S bond? | peroxo O–O? | S–O–S? | Note |
|:--|:--:|:--:|:--:|:--:|:--|
| H₂SO₃ / SO₃²⁻ (sulphurous) | +4 | no | no | no | pyramidal S, one lone pair; **reducing** |
| H₂SO₄ / SO₄²⁻ (sulphuric) | +6 | no | no | no | tetrahedral; oxidiser only when hot & conc. |
| H₂S₂O₃ / S₂O₃²⁻ (thiosulphuric) | +6 & −2 (avg +2) | **yes (S–S)** | no | no | one O of SO₄²⁻ replaced by S |
| H₂S₂O₄ / S₂O₄²⁻ (dithionous, "hydrosulphite") | +3 | **yes (S–S)** | no | no | strong reductant (Na₂S₂O₄ — vat dyeing) |
| H₂S₂O₅ / S₂O₅²⁻ (disulphurous / metabisulphite) | +3 & +5 | **yes (S–S)** — structure O₂S–SO₃ | no | no | Na₂S₂O₅ = "sodium metabisulphite", a preservative |
| H₂S₂O₆ / S₂O₆²⁻ (dithionic) | +5 | **yes (S–S)** | no | no | first of the polythionic series |
| H₂SₙO₆ (polythionic, n = 3–6) | mixed | **yes (S–S chain)** | no | no | in Wackenroder's solution |
| H₂SO₅ (peroxomonosulphuric / **Caro's acid**) | +6 | no | **yes (one –O–O–H)** | no | powerful oxidiser |
| H₂S₂O₈ / S₂O₈²⁻ (peroxodisulphuric / **Marshall's acid**) | +6 | no | **yes (S–O–O–S)** | no | K₂S₂O₈ — radical initiator, etchant |
| H₂S₂O₇ / S₂O₇²⁻ (pyrosulphuric / disulphuric, **oleum**) | +6 | no | no | **yes (S–O–S)** | SO₃ + H₂SO₄ ; **NO S–S bond** |

    Hydrolysis of Marshall's acid:  H₂S₂O₈ + H₂O → H₂SO₄ + H₂SO₅  (Caro's acid);
                                    H₂SO₅ + H₂O → H₂SO₄ + H₂O₂.
    (So 1 mol H₂S₂O₈ + 2 mol H₂O → 2 mol H₂SO₄ + 1 mol H₂O₂ overall — IIT-JEE 1996.)

## 25.5 Sodium thiosulphate, Na₂S₂O₃·5H₂O ("hypo")

**Preparation:**  Na₂SO₃ + S --boil--> Na₂S₂O₃  ;  2 Na₂S + Na₂CO₃ + 4 SO₂ → 3 Na₂S₂O₃ + CO₂ ;
Na₂CO₃ + SO₂ + S → Na₂S₂O₃ + CO₂.
**Structure of S₂O₃²⁻:** tetrahedral — SO₄²⁻ with **one terminal O replaced by a terminal
S**; the two S atoms are inequivalent (central S ≈ +5, terminal S ≈ −1).

    Na₂S₂O₃ + 2 HCl → 2 NaCl + S↓ + SO₂↑ + H₂O            (dilute acid — unstable in acid)
    2 Na₂S₂O₃ + I₂ → Na₂S₄O₆ (tetrathionate) + 2 NaI       (mild oxidiser I₂ → basis of iodometry)
    Na₂S₂O₃ + 4 Cl₂ + 5 H₂O → 2 NaHSO₄ + 8 HCl            (strong oxidiser Cl₂/Br₂ → sulphate;
                                                            "anti-chlor" — removes excess Cl₂)
    2 CuSO₄ + 2 Na₂S₂O₃ → Cu₂S₂O₃↓ + Na₂S₄O₆ + Na₂SO₄ ... ;
      Cu₂S₂O₃ + 3 Na₂S₂O₃ → 2 Na₃[Cu(S₂O₃)₂]              (Cu²⁺ reduced to Cu⁺, then complexed)
    AgBr + 2 Na₂S₂O₃ → Na₃[Ag(S₂O₃)₂] + NaBr              (photographic "fixing" — dissolves
                                                            unexposed AgBr)
    2 FeCl₃ + 2 Na₂S₂O₃ → 2 FeCl₂ + Na₂S₄O₆ + 2 NaCl      (violet colour flashes then fades)

**Uses:** photographic fixer; iodometric titrations (standard reductant for I₂); anti-chlor;
**antidote for cyanide poisoning** (S₂O₃²⁻ + CN⁻ → SCN⁻ + SO₃²⁻, catalysed by rhodanese);
mordant; leaching of Ag/Au ores.

## 25.6 Sulphuric acid — the four behaviours, with the reactions examiners use

**(1) Strong dibasic acid** (Ka₁ ≫ 1, **Ka₂ = 1.2 × 10⁻²**): two salt series — sulphates
(Na₂SO₄) and hydrogensulphates (NaHSO₄).

> Adding KHSO₄ to conc. H₂SO₄ **increases** the acidity (more HSO₄⁻ / H⁺ source, and it
> suppresses nothing) — a common "predict the change" question.

**(2) Low volatility** — displaces more volatile acids from their salts:
NaCl + H₂SO₄ → NaHSO₄ + HCl↑ ;  NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃↑ ;
CaF₂ + H₂SO₄ → CaSO₄ + 2 HF↑.  **But NOT for HBr or HI** (oxidised — see (4)).

**(3) Dehydrating agent:**
C₁₂H₂₂O₁₁ → 12 C + 11 H₂O ("sugar snake") ;  HCOOH → CO + H₂O ;
(COOH)₂ → CO + CO₂ + H₂O ;  C₂H₅OH → C₂H₄ + H₂O ;  CuSO₄·5H₂O → CuSO₄ (white) + 5 H₂O.
Dries H₂, O₂, Cl₂, SO₂, CO₂ — **not** NH₃, H₂S, HBr, HI.

**(4) Oxidising agent — hot and concentrated (S +6 → SO₂, occasionally S or H₂S):**

    Cu + 2 H₂SO₄ (conc) → CuSO₄ + SO₂ + 2 H₂O
    C + 2 H₂SO₄ (conc) → CO₂ + 2 SO₂ + 2 H₂O
    S + 2 H₂SO₄ (conc) → 3 SO₂ + 2 H₂O
    2 HBr + H₂SO₄ (conc) → Br₂ + SO₂ + 2 H₂O
    8 HI + H₂SO₄ (conc) → 4 I₂ + H₂S + 4 H₂O
    2 KMnO₄ + ... ;  Zn (very dilute H₂SO₄) → ZnSO₄ + H₂  (dilute acid: non-oxidising)

> **Consequence:** conc. H₂SO₄ **cannot** prepare HBr or HI from a bromide/iodide — use
> the non-oxidising acid **H₃PO₄** (or hydrolyse PBr₃/PI₃ generated in situ).

## 25.7 Dioxygen, oxides, ozone — reaction extras

**O₂ preparation (all standard lab routes):**

    2 KClO₃ --MnO₂, 420 K--> 2 KCl + 3 O₂
    2 KMnO₄ --Δ--> K₂MnO₄ + MnO₂ + O₂
    2 H₂O₂ --MnO₂--> 2 H₂O + O₂
    2 Pb₃O₄ --Δ--> 6 PbO + O₂ ;  2 PbO₂ --Δ--> 2 PbO + O₂ ;  2 HgO --Δ--> 2 Hg + O₂ ;
    2 Ag₂O --Δ--> 4 Ag + O₂ ;  2 BaO₂ --Δ--> 2 BaO + O₂
    2 Na₂O₂ + 2 H₂O → 4 NaOH + O₂ ;  2 Na₂O₂ + 2 CO₂ → 2 Na₂CO₃ + O₂ (submarine air)
    4 KO₂ + 2 CO₂ → 2 K₂CO₃ + 3 O₂  (self-contained breathing apparatus)
    2 F₂ + 2 H₂O → 4 HF + O₂

**Ozone:**

    3 O₂ ⇌ 2 O₃           ΔH°(298 K) = +142 kJ mol⁻¹      (silent electric discharge)
    PbS + 4 O₃ → PbSO₄ + 4 O₂
    2 KI + H₂O + O₃ → I₂ + 2 KOH + O₂     (→ titrate I₂ vs Na₂S₂O₃; borate buffer pH 9.2)
    2 FeSO₄ + H₂SO₄ + O₃ → Fe₂(SO₄)₃ + H₂O + O₂
    SnCl₂ + 2 HCl + O₃ → SnCl₄ + H₂O + O₂
    NO₂⁻ + O₃ → NO₃⁻ + O₂ ;  SO₃²⁻ + O₃ → SO₄²⁻ + O₂ ;  AsO₃³⁻ + O₃ → AsO₄³⁻ + O₂
    2 Hg + O₃ → Hg₂O + O₂       ("tailing" of mercury — loses its meniscus)
    NO + O₃ → NO₂ + O₂         (stratospheric ozone loss)
    2 MnO₂ + 2 KOH + O₃ → 2 KMnO₄ + H₂O + O₂     (industrial KMnO₄ manufacture)
    alkene + O₃ → ozonide --Zn/H₂O--> 2 carbonyl compounds     (ozonolysis — locate the C=C)

- **KMnO₄ / K₂MnO₄ are NOT oxidised by O₃** (already high oxidation state) — a common "which
  is not oxidised by O₃" distractor.
- **Two octet-obeying resonance structures of O₃** (bent, ∠117°, both O–O 128 pm, bond
  order 1.5, diamagnetic, μ = 0.53 D) — IIT-JEE 1991.

**Oxide classification (for "most acidic / most basic / neutral / amphoteric" questions):**

    acidity across period:  Na₂O < MgO < Al₂O₃ < SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇
    acidity with oxidation state (one element):  Cl₂O₇ > SO₃ > P₄O₁₀ ;  CrO₃ > Cr₂O₃ > CrO ;
                                                 Mn₂O₇ > MnO₂ > MnO ;  N₂O₅ > N₂O₃
    down a group of non-metals:  CO₂ > SiO₂ > GeO₂ > SnO₂ > PbO₂ ;  SO₂ > SeO₂ > TeO₂
    neutral:  CO, NO, N₂O, H₂O          amphoteric:  Al₂O₃, ZnO, PbO, SnO, BeO, Ga₂O₃, As₄O₆, Sb₄O₆
    peroxide (O₂²⁻):  Na₂O₂, BaO₂, H₂O₂      superoxide (O₂⁻):  KO₂, RbO₂, CsO₂
    the "most basic oxide of Group 14/16/…" is always that of the **heaviest** member (PbO, TeO₂...)

## 25.8 Sulphur allotropes and the action of heat (viscosity curve)

- **Rhombic (α)**: yellow, m.p. 385.8 K, ρ 2.06, stable **< 369 K**, soluble in CS₂,
  insoluble in water; S₈ crown rings.
- **Monoclinic (β)**: pale yellow needles, m.p. 393 K, ρ 1.98, stable **369–393 K**,
  soluble in CS₂; S₈ rings, different packing.
- **Transition temperature α ⇌ β = 369 K** (both stable).
- **Plastic (γ / Sμ)**: pour boiling S into cold water → rubbery, **insoluble in CS₂**, long
  Sₙ helical chains; reverts to α.
- **cyclo-S₆ (Engel's)**: chair ring, from Na₂S₂O₃ + cold conc. HCl.
- **S₂ vapour** (> 1000 K): diatomic, **paramagnetic like O₂** (2 unpaired e⁻ in π*),
  blue-violet.

**Heating sulphur:** 385 K melts to a thin pale-yellow liquid (S₈) → near **433 K** the
rings open and polymerise → the liquid **darkens and thickens** (viscosity max ≈ 473 K, Sμ
chains up to 10⁶ atoms) → above ~523 K the chains break and it **thins again** → 718 K boils
(vapour S₈ → S₆ → S₂ as T rises).

## 25.9 Halides and oxohalides of sulphur; Se, Te

    S + 3 F₂ → SF₆   (octahedral, sp³d², **kinetically inert** — S is sterically shielded and
                      coordinatively saturated; hydrolysis is thermodynamically favourable but
                      has no low-energy path)
    S + 2 F₂ → SF₄   (see-saw, sp³d; SF₄ + 2 H₂O → SO₂ + 4 HF; a selective fluorinating agent:
                      >C=O → >CF₂, –COOH → –CF₃)
    2 S + Cl₂ → S₂Cl₂ (orange liquid; used in rubber vulcanisation)  ;  S₂Cl₂ + Cl₂ → 2 SCl₂
    SO₂ + Cl₂ → SO₂Cl₂ (sulphuryl chloride; SO₂Cl₂ + 2 H₂O → H₂SO₄ + 2 HCl)
    SO₂ + PCl₅ → SOCl₂ (thionyl chloride) + POCl₃ ;  SOCl₂ + H₂O → SO₂ + 2 HCl
    R–OH + SOCl₂ → R–Cl + SO₂ + HCl     ;   R–COOH + SOCl₂ → R–COCl + SO₂ + HCl
    (why SF₆ but not SCl₆/SBr₆: six large Cl/Br cannot fit round the small S, and S(VI) would
     oxidise Br⁻/Cl⁻;  why no "OF₆": O has no d orbitals, maximum covalence 2)

- **Se and Te in hot conc. H₂SO₄** dissolve to give coloured **polyatomic cations**:
  **Se₈²⁺ (green), Se₄²⁺ (yellow); Te₄²⁺ (red)** — a striking sign of incipient metallic
  character.
- **H₆TeO₆ (telluric acid / orthotelluric)** — a weak, **6-coordinate**, polybasic acid
  and a **mild oxidiser**; contrast H₂SO₄ (4-coordinate, strong, non-oxidising).

## 25.10 Peroxides / superoxides / dioxygenyl — the O₂ⁿ species

| Species | valence e⁻ | bond order | O–O length / pm | magnetism |
|:--|:--:|:--:|:--:|:--|
| O₂⁺ (dioxygenyl) | 11 | 2.5 | 112 | paramagnetic (1) |
| O₂ | 12 | 2.0 | 121 | **paramagnetic (2)** |
| O₂⁻ (superoxide) | 13 | 1.5 | 128 | paramagnetic (1) |
| O₂²⁻ (peroxide) | 14 | 1.0 | 149 | diamagnetic |

    bond order / strength:  O₂⁺ > O₂ > O₂⁻ > O₂²⁻      bond length:  O₂⁺ < O₂ < O₂⁻ < O₂²⁻
    O₂ + PtF₆ → O₂⁺[PtF₆]⁻   (Bartlett's dioxygenyl salt — the clue that led to Xe[PtF₆])
    O₂²⁻ is isoelectronic with F₂ (bond order 1);  O₂⁻ with … ;  "peroxide ion present in":
      Na₂O₂, BaO₂, H₂O₂  —  NOT in PbO₂, MnO₂, TiO₂ (those are dioxides, O is −2).  (IIT-JEE 1992)
`;
