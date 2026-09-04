// The Nitrogen Family (Group 15) — JEE Advanced master notes.
//
// Independently written for SYNERGIC BOND. A synthesis of the standard,
// non-proprietary body of Group 15 inorganic chemistry common to the Class XI–XII
// syllabus and every general reference (NCERT, J. D. Lee, Greenwood & Earnshaw,
// Ananya Ganguly, Allen). No verbatim text, tables or figures are copied from any
// single source; the section structure, the "increasing / decreasing / note"
// ordering system, the Key Point / JEE TRAP / MOT LENS framing, the schematic
// figures and every derived tool are original to this chapter. Physical data are
// standard reference constants; where editions differ the Class XI–XII value is used.

export const NITROGEN_FAMILY_MASTER_MARKDOWN = String.raw`
# 1. p-Block foundation and the place of Group 15

## 1.1 Periodic-table framework

In the p-block the differentiating electron enters an outermost p orbital. The inner core is
**not** identical for all members of a group: filled d and f subshells appear in the heavier
members and shield the nuclear charge poorly, so effective nuclear charge, size, ionisation
enthalpy and chemistry all show **irregular jumps** rather than smooth trends. For a p-block
element the group (maximum) oxidation state equals the total number of valence s and p
electrons; the important lower states differ from it **by two**, because the ns² pair is
either used as a pair or left unused.

Group 15 has the valence configuration **ns² np³** — a filled s subshell and an *exactly
half-filled* p subshell. Two consequences run through the whole chapter:

- the half-filled p³ set is **extra stable** (maximum exchange energy, spherically symmetric
  charge cloud) → abnormally **high ionisation enthalpy** and **near-zero (even endothermic)
  electron gain enthalpy**;
- the group shows a full **non-metal → metalloid → metal** gradation: N, P non-metals; As,
  Sb metalloids; Bi a metal. Non-metallic character decreases down the group.

## 1.2 First-member anomaly — why nitrogen stands apart

The first member of a p-block group differs sharply from the rest for four linked reasons:
**very small size**, **high ionisation enthalpy**, **high electronegativity**, and — the
decisive one — the n = 2 shell has **only 2s and 2p orbitals, no d**. Almost every "nitrogen
is special" fact traces to one of three consequences.

**Consequence 1 — maximum covalence is 4.** One 2s + three 2p → eight electrons around N.
NF₃ and NH₄⁺ exist; **NF₅, NCl₅, [NF₆]⁻ do not** — no fifth valence orbital. The heavier
congeners have empty, accessible nd orbitals and reach 5 and 6: **PF₅, PCl₅, [PF₆]⁻,
[PCl₆]⁻, SbF₅, [Sb(OH)₆]⁻**. This one difference governs the "NCl₃ hydrolyses to NH₃ + HOCl
(N is δ⁻) but PCl₃ hydrolyses to H₃PO₃ + HCl (P is δ⁺, expands its octet in the transition
state)" contrast (§17).

**Consequence 2 — strong pπ–pπ multiple bonding.** Two compact 2p orbitals on adjacent
period-2 atoms overlap sideways very effectively, so nitrogen readily forms **N≡N, N=N,
N=O, C≡N**. A 3p (or larger) orbital is diffuse; sideways overlap between two large p
orbitals is poor, so phosphorus and the heavier atoms **avoid pπ–pπ** and instead build
**single-bonded catenated or cage structures**. The textbook illustration:

> **N₂ is a discrete molecule with a very short, very strong triple bond
> (N≡N, 941 kJ mol⁻¹, 110 pm); elemental phosphorus is P₄ tetrahedra held by weak,
> strained P–P single bonds (200 kJ mol⁻¹).** Same group, completely different elemental
> state — because only the first member can π-bond to itself.

**Consequence 3 — a weak N–N single bond.** The N atom is so small that the two **non-bonding
lone pairs on adjacent singly-bonded N atoms are forced close together** → strong
lone-pair/lone-pair repulsion → the **N–N single bond (163 kJ mol⁻¹) is weaker than the
P–P single bond (200 kJ mol⁻¹)**, even though N is smaller. Result: **nitrogen catenates
very poorly** (chains rarely exceed 2–3 atoms: N₂H₄, HN₃, N₃⁻), whereas phosphorus
catenates well (P₄, P₄ⁿ chains, polyphosphates, P–P in H₄P₂O₆).

> **Key Point:** Nitrogen cannot expand its octet (maximum covalence 4) and, in a
> three-bonded molecule such as NH₃ or NF₃, has a lone pair but **no low-lying vacant
> orbital**. So it cannot act as a Lewis acid and its trihalides cannot be attacked by a
> nucleophile at nitrogen — NF₃ is inert to hydrolysis. Phosphorus, with empty 3d orbitals
> just above the valence level, **can** accept a lone pair into a 5- or 6-coordinate
> transition state — PCl₃ and PCl₅ hydrolyse instantly.

## 1.3 Group 15 master data

| Property | N | P | As | Sb | Bi |
|:--|:--:|:--:|:--:|:--:|:--:|
| Atomic number | 7 | 15 | 33 | 51 | 83 |
| Atomic mass / g mol⁻¹ | 14.01 | 30.97 | 74.92 | 121.75 | 208.98 |
| Ground-state configuration | [He] 2s²2p³ | [Ne] 3s²3p³ | [Ar] 3d¹⁰4s²4p³ | [Kr] 4d¹⁰5s²5p³ | [Xe] 4f¹⁴5d¹⁰6s²6p³ |
| Covalent radius / pm | 70 | 110 | 121 | 141 | 148 |
| Ionic radius M³⁻ / pm | 171 | 212 | 222 | — | — |
| Ionic radius M³⁺ / pm | — | — | 58 | 76 | 103 |
| Ionic radius M⁵⁺ / pm | 13 | 34 | 46 | 60 | 76 |
| ΔᵢH₁ / kJ mol⁻¹ | 1402 | 1012 | 947 | 834 | 703 |
| ΔᵢH₂ / kJ mol⁻¹ | 2856 | 1903 | 1798 | 1595 | 1610 |
| ΔᵢH₃ / kJ mol⁻¹ | 4577 | 2910 | 2736 | 2443 | 2466 |
| Sum ΔᵢH₁₋₃ / kJ mol⁻¹ | 8835 | 5825 | 5481 | 4872 | 4779 |
| ΔₑgH₁ / kJ mol⁻¹ | **+7** (endothermic) | −72 | −78 | −103 | −91 |
| Electronegativity (Pauling) | 3.0 | 2.1 | 2.0 | 1.9 | 1.9 |
| Density / g cm⁻³ | 0.88 (l, 63 K) | 1.82 (white) | 5.78 | 6.70 | 9.81 |
| Melting point / K | 63 | 317 (white) | 1089 (sublimes at 887 K, 38 atm) | 904 | 544 |
| Boiling point / K | 77.2 | 554 (white) | 888 (sublimes) | 1860 | 1837 |
| ΔfusH / kJ mol⁻¹ | 0.72 | 0.66 (white) | 27.7 | 19.9 | 11.3 |

*Covalent radii (Å) for order questions: N 0.70, P 1.10, As 1.21, Sb 1.41, Bi 1.48.*

**Reading the irregular steps.** Effective nuclear charge on the outer electron rises down
the group even though a shell is added, because the newly interposed core electrons shield
badly:

| Step | Interposed core | Shielding quality | Size increase |
|:--|:--|:--|:--|
| N → P | 8 (a normal Ne core) | good | **large** (70 → 110 pm) |
| P → As | + **3d¹⁰** (first transition series) | poor (d-block contraction) | **small** (110 → 121 pm) |
| Sb → Bi | + **4f¹⁴** (lanthanoids) *and* 5d¹⁰ | very poor (lanthanoid contraction) | **small** (141 → 148 pm) |

The same poor d/f shielding is why ΔᵢH₂ and ΔᵢH₃ of Bi actually **rise above Sb**, why As
and Bi electronegativities do not fall as expected, and why the **+3 state gains ground and
the +5 state loses it** down the group (the inert-pair effect, §4).

## 1.4 Occurrence, abundance and isotopes

| Element | Crustal / atmospheric abundance | Free / native | Principal combined forms |
|:--|:--|:--|:--|
| **N** | 19 ppm crust; **78.09 % by volume of air** | N₂ (air) | **NaNO₃** (Chile saltpetre, *caliche*), **KNO₃** (Indian saltpetre / *nitre*); NH₄⁺ salts in soil; **proteins, nucleic acids, chlorophyll** of all living matter; coal and petroleum |
| **P** | ≈ 0.10 % (11th) | never free (too reactive) | **fluorapatite Ca₉(PO₄)₆·CaF₂**, chlorapatite, hydroxyapatite; **phosphorite rock Ca₃(PO₄)₂**; in **bones and teeth** (hydroxyapatite), **ATP, DNA/RNA, phospholipids**; phosphoproteins of milk and egg |
| **As** | ≈ 1.5 ppm | rare native As | **realgar As₄S₄**, **orpiment As₂S₃**, **arsenopyrite (mispickel) FeAsS**, arsenolite As₄O₆; by-product of Cu/Pb/Au smelting (flue dust) |
| **Sb** | ≈ 0.2 ppm | occasionally native | **stibnite Sb₂S₃** (chief ore), valentinite Sb₂O₃ |
| **Bi** | ≈ 0.008 ppm | native Bi occurs | **bismuthinite (bismuth glance) Bi₂S₃**, **bismite Bi₂O₃**, bismutite (BiO)₂CO₃; by-product of Pb refining |

**Isotopes — the examinable points.**

| Element | Stable isotopes | Notes |
|:--|:--|:--|
| N | ¹⁴N (99.63 %), ¹⁵N (0.37 %) | ¹⁴N is NMR-active (I = 1, quadrupolar); **¹⁵N** (I = ½) is the isotopic label used in mechanism and metabolic studies; ¹³N (t½ 10 min) is a PET tracer |
| P | **³¹P only** (100 %) | P is **monoisotopic** — one of only 22 such elements; ³¹P is NMR-active (I = ½), the basis of ³¹P NMR of phosphates and ATP; ³²P (β⁻, t½ 14.3 d) is a classic radiotracer (Hershey–Chase experiment) |
| As | **⁷⁵As only** (100 %) | also monoisotopic; ⁷⁵As is NMR-active but strongly quadrupolar |
| Sb | ¹²¹Sb (57 %), ¹²³Sb (43 %) | — |
| Bi | ²⁰⁹Bi (100 %) | long regarded as the heaviest stable nuclide; in 2003 shown to be **very weakly α-radioactive**, t½ ≈ 2 × 10¹⁹ y (a billion times the age of the universe) — treat as stable |

> **JEE TRAP:** Nitrogen, phosphorus and arsenic are each **mononuclidic (one isotope)** in
> the sense that P and As have a single stable isotope; nitrogen has two. "Which Group 15
> element has the largest number of stable isotopes?" → **tin-like richness does not occur
> here**; Sb has two, the maximum in the group.

## 1.5 The nitrogen cycle and nitrogen fixation (context)

Atmospheric N₂ is kinetically locked (N≡N, 941 kJ mol⁻¹). Making it biologically available
("fixing" it) happens by four routes:

1. **Biological** — *Rhizobium* bacteria in legume root nodules, and free-living
   *Azotobacter*/cyanobacteria, use the enzyme **nitrogenase** (an Fe–Mo–S cluster) to
   reduce N₂ → 2 NH₃ at ordinary T and P (ATP-driven).
2. **Atmospheric** — lightning / photochemistry: N₂ + O₂ → 2 NO → NO₂ → HNO₃ → nitrate in
   rain (≈ 30 kg N ha⁻¹ y⁻¹ globally).
3. **Industrial** — the **Haber–Bosch process** (§10); ≈ 1.5 × 10⁸ t of NH₃ per year,
   feeding roughly half the world's population.
4. **Cyanamide process** — CaC₂ + N₂ → CaCN₂ + C ("nitrolim", §9.3).

Denitrifying bacteria return fixed nitrogen to the air: NO₃⁻ → NO₂⁻ → N₂O → N₂.


# 2. Group 15 identity and electronic configuration

Nitrogen is a colourless, inert diatomic gas that makes up most of the air, yet in
combination it runs the chemistry of life (proteins, DNA) and of explosives (nitro
compounds, azides). Phosphorus — "the light-bearer", the first element isolated from a
biological source (Brand, 1669, from urine) — is essential to every cell (ATP, DNA) and to
agriculture. Arsenic and antimony are metalloids known since antiquity as poisons and
cosmetics; bismuth is a heavy, pink-tinged, diamagnetic-in-the-extreme metal used in
low-melting alloys and stomach medicines.

## 2.1 Electronic configurations, valence state and oxidation states

| Element | Z / atomic mass | Ground-state configuration | Core type | Valence shell | Common oxidation states |
|:--:|:--:|:--:|:--|:--:|:--|
| N | 7 / 14.007 | [He] 2s² 2p³ | noble gas | 2s² 2p³ | **−3**, −2, −1, 0, +1, +2, +3, +4, **+5** (all) |
| P | 15 / 30.974 | [Ne] 3s² 3p³ | noble gas | 3s² 3p³ | −3, **+3**, **+5**, (+1, +4 in oxoacids) |
| As | 33 / 74.922 | [Ar] **3d¹⁰** 4s² 4p³ | pseudo-noble-gas (+ d¹⁰) | 4s² 4p³ | −3, **+3**, +5 |
| Sb | 51 / 121.76 | [Kr] **4d¹⁰** 5s² 5p³ | pseudo-noble-gas (+ d¹⁰) | 5s² 5p³ | (−3), **+3**, +5 |
| Bi | 83 / 208.98 | [Xe] **4f¹⁴ 5d¹⁰** 6s² 6p³ | + f¹⁴ + d¹⁰ | 6s² 6p³ | **+3**, (+5 only in BiF₅, NaBiO₃) |

- **N and P** have clean noble-gas cores. **As and Sb** carry an extra filled d¹⁰; **Bi**
  carries 4f¹⁴ *and* 5d¹⁰. These d and (especially) f electrons **shield poorly**, and that
  single fact drives the irregular radius trend, the ΔᵢH₂/ΔᵢH₃ rise from Sb to Bi, and the
  growing stability of the +3 state (§4.2).
- **Nitrogen uniquely shows every oxidation state from −3 to +5** — a period-2 element with
  no d orbitals but excellent π-bonding, so it builds a ladder of N–O and N–N species.

**Why no simple ions.** ΔᵢH₁+ΔᵢH₂+ΔᵢH₃ ≈ 4800–8800 kJ mol⁻¹ — far too large for any lattice
or hydration enthalpy to repay, so a bare **M³⁺ is never formed for N or P**; even Bi³⁺ and
Sb³⁺ hydrolyse at once (BiOCl, SbOCl). At the other end, forming **N³⁻** costs so much
(three electrons onto a small atom) that it survives only in ionic nitrides of the most
electropositive metals (Li₃N, Ca₃N₂, Mg₃N₂), stabilised by very high lattice energy.

> **JEE TRAP:** The maximum covalence of nitrogen is **4** (NH₄⁺, R₄N⁺, the N of HNO₃).
> "Covalence of N in HNO₃ / NO₃⁻ / N₂O₅ / NO₂⁺" → **4** in each. Do not write "5" for
> nitrogen just because the oxidation state is +5.

## 2.2 Discovery — one line

P: Brand 1669 (from urine), the first element from a biological source.  N: Rutherford 1772.  The rest (As, Sb, Bi) known since antiquity as ores / pigments / poisons.

# 3. Atomic and physical properties — data and complete orders

## 3.1 Atomic and ionic radii

A new shell is added at each step, but the increase is very uneven — a **large N → P jump**,
then **small P → As and Sb → Bi steps** because of d-block and lanthanoid contraction (§1.3).

| Element | Covalent radius / pm | M³⁺ radius / pm | M³⁻ radius / pm |
|:--:|:--:|:--:|:--:|
| N | 70 | — | 171 |
| P | 110 | — | 212 |
| As | 121 | 58 | 222 |
| Sb | 141 | 76 | — |
| Bi | 148 | 103 | — |

> **Covalent (atomic) radius** — Increasing order: **N < P < As < Sb < Bi**
> Decreasing order: Bi > Sb > As > P > N
> Note: the *order* is regular; what is irregular is the *size of each step* — a large
> N → P jump (70 → 110 pm), then small P → As (110 → 121) and Sb → Bi (141 → 148) steps
> because the poorly shielding 3d¹⁰ and 4f¹⁴ cores raise Zₑff on the heavier atoms.

> **M³⁻ (nitride/phosphide) ionic radius** — Increasing order: N³⁻ (171) < P³⁻ (212) < As³⁻ (222 pm)
> Note: each anion is far larger than the parent atom (added electrons, increased
> electron–electron repulsion, lower Zₑff); only N³⁻ and P³⁻ appear in real ionic solids.

> **M³⁺ ionic radius** — Increasing order: As³⁺ (58) < Sb³⁺ (76) < Bi³⁺ (103 pm)
> Note: only the heavier, more metallic members give an M³⁺ ion at all, and even these
> hydrolyse in water (Bi³⁺ + H₂O ⇌ BiO⁺ + 2 H⁺; the oxo-cation precipitates as BiOCl).

> **Ionic potential (z/r)** — huge for every M⁵⁺; large for M³⁺ of N, P (which therefore do
> not exist). Note: high z/r → strong anion polarisation → covalency and cationic
> hydrolysis. This is why every M(V) compound (N₂O₅, PCl₅, H₃PO₄) is molecular/covalent and
> why "Bi(NO₃)₃ solution" must be kept strongly acidic to stop it going milky.

## 3.2 Ionisation enthalpy

| Element | ΔᵢH₁ | ΔᵢH₂ | ΔᵢH₃ | Sum ΔᵢH₁₋₃ |
|:--:|:--:|:--:|:--:|:--:|
| N | 1402 | 2856 | 4577 | 8835 |
| P | 1012 | 1903 | 2910 | 5825 |
| As | 947 | 1798 | 2736 | 5481 |
| Sb | 834 | 1595 | 2443 | 4872 |
| Bi | 703 | **1610** | **2466** | 4779 |

*kJ mol⁻¹.*

> **ΔᵢH₁** — Decreasing order: **N > P > As > Sb > Bi**
> Increasing order: Bi < Sb < As < P < N.
> Note: the first ionisation falls smoothly down the group (larger atom, better screening).

> **ΔᵢH₂ and ΔᵢH₃** — Decreasing order: **N > P > As > Bi > Sb**  (Bi overtakes Sb)
> Note: the second and third electrons of Bi are removed against the very poorly shielding
> **4f¹⁴ 5d¹⁰** core, so Zₑff on them is high and **ΔᵢH₂(Bi) > ΔᵢH₂(Sb)**,
> **ΔᵢH₃(Bi) > ΔᵢH₃(Sb)**. The same effect (the "inert-pair" reluctance of the 6s² pair)
> makes Bi(V) hard to reach.

> **Group 15 vs its neighbours (same period)** — ΔᵢH₁(Group 15) **> both** ΔᵢH₁(Group 14)
> and ΔᵢH₁(Group 16). Examples: N (1402) > C (1086) and > O (1314); P (1012) > Si (786) and
> > S (1000). Note: removing an electron from the **half-filled, exchange-stabilised p³**
> set of a Group 15 atom is harder than removing one from the p² of Group 14 or the paired
> p⁴ of Group 16 (where losing one electron actually *relieves* p–p repulsion and gives a
> stable p³).

> **Successive values for one element** — ΔᵢH₁ < ΔᵢH₂ < ΔᵢH₃ (each electron leaves a more
> positive ion). Roughly ΔᵢH₂ ≈ 2 ΔᵢH₁, ΔᵢH₃ ≈ 3–3.3 ΔᵢH₁. There is **no huge jump** after
> ΔᵢH₃ — removing a fourth electron only begins to eat into the filled ns² pair, not a
> noble-gas core.

## 3.3 Electron gain enthalpy

| Element | ΔₑgH₁ / kJ mol⁻¹ |
|:--:|:--:|
| N | **+7** (endothermic!) |
| P | −72 |
| As | −78 |
| Sb | −103 |
| Bi | −91 |

> **Electron gain enthalpy** — Order (least to most exothermic): **N (+7) < As ≈ P (−72 to −78) < Bi (−91) < Sb (−103)**
> Note: **nitrogen has a *positive* (unfavourable) ΔₑgH** — unique among the p-block first
> members and a classic exam point. Two reasons: (i) the incoming electron must enter the
> small, already-crowded 2p subshell (strong electron–electron repulsion), and (ii) it
> would break the extra-stable half-filled p³ configuration. Phosphorus has the "normal"
> large negative value; the trend then flattens because increasing size (favours smaller
> |ΔₑgH|) fights poor d/f shielding (favours larger |ΔₑgH|).

> **Compare with Group 14 and 16** — |ΔₑgH| of Group 15 < Group 16, and for the first
> member N is even less favourable than C. This is the same "second-period anomaly" seen at
> O < S and F < Cl.

## 3.4 Electronegativity

| Element | N | P | As | Sb | Bi |
|:--:|:--:|:--:|:--:|:--:|:--:|
| Pauling EN | 3.0 | 2.1 | 2.0 | 1.9 | 1.9 |

> **Electronegativity** — Decreasing order: **N (3.0) > P (2.1) > As (2.0) > Sb ≈ Bi (1.9)**
> Increasing order: Bi ≈ Sb < As < P < N.
> Note: a **sharp fall N → P** (0.9 units — the largest single drop), then almost flat. The
> big N–P gap is why an N–H bond is strongly polar (basis of H-bonding in NH₃, and of the
> basicity of amines) while a P–H bond is nearly non-polar (PH₃ barely basic, does not
> H-bond, is not very soluble in water).

> **Electronegativity vs metallic character** — as EN falls, metallic/electropositive
> character rises: **N < P < As < Sb < Bi**. Seen in appearance (colourless gas → waxy
> non-metal → grey metalloid → lustrous metal), in the oxides (acidic → amphoteric →
> basic), and in the hydrides (NH₃ basic → BiH₃ has essentially no basic chemistry).

## 3.5 Physical state, allotropy, melting and boiling points

| Element | State (298 K) | Allotropes | m.p. / K | b.p. / K |
|:--:|:--|:--|:--:|:--:|
| N | colourless gas (N₂) | none (only N₂; solid N₂ has α, β forms) | 63 | 77 |
| P | waxy / powdery solid | **white, red, black, violet** (+ scarlet, diphosphorus) | 317 (white) | 554 (white) |
| As | grey brittle solid | **grey (metallic, α), yellow (As₄), black** | 1090 (subl.) | 888 (subl.) |
| Sb | silvery brittle solid | metallic (rhombohedral) + yellow, black, "explosive" | 904 | 1860 |
| Bi | pinkish silvery metal | one metallic form | 544 | 1837 |

> **Melting point** — rises N → As, then falls As → Bi: **As > Sb > Bi > P > N** (or,
> putting P and N last: As (1090) > Sb (904) > Bi (544) > P (317) > N (63)).
> Explanation: N₂ and P₄ are small molecules held by weak van der Waals forces → very low
> m.p. As, Sb, Bi have giant (layer / 3-D) structures held by covalent + metallic bonding →
> high m.p.; within that band the bonding weakens as the atoms enlarge and, for Bi, the
> inert 6s² pair contributes little to metallic bonding → **As > Sb > Bi**.

> **Boiling point** — Increasing order: N < P < As < Sb ≈ Bi.
> Note: rises steadily down the group with atomisation energy; Sb and Bi are close.

> **Density** — Increasing order: N < P < As < Sb < Bi (0.88 → 9.8 g cm⁻³). Atomic mass
> grows faster than atomic volume.

> **Metallic character / electrical conductivity** — Increasing order: **N < P < As < Sb < Bi**.
> Bismuth is a poor metal (highest electrical resistivity of any metal, most diamagnetic of
> all metals, largest Hall effect, expands ~3.3 % on freezing like water).

### Allotropes of phosphorus (full treatment in §7)

| Allotrope | Structure | Reactivity | Toxicity | Stored / used |
|:--|:--|:--|:--|:--|
| **White (yellow) P** | discrete **P₄ tetrahedra**, ∠PPP 60° (strained) | **most reactive**; glows in air; ignites at ≈ 308 K | **very poisonous** | under water; making H₃PO₄, PCl₃, smoke/incendiary |
| **Red P** | polymeric chains of linked P₄ units | much less reactive; no glow | non-toxic | safety matches, flame retardants |
| **Black P** | puckered layers (like graphite); thermodynamically **most stable** | least reactive; semiconductor | non-toxic | research ("phosphorene") |
| **Violet (Hittorf's) P** | complex tubular network | low | non-toxic | — |


# 4. Oxidation states, bonding and the inert-pair effect

## 4.1 The oxidation-state ladder

The group state is **+5** (ns²np³ → all five valence electrons). The important lower states
are **+3** (np³ used, ns² kept) and **−3** (three electrons gained). Nitrogen fills in every
rung between:

| Ox. state | N species | P species | Note |
|:--:|:--|:--|:--|
| −3 | NH₃, NH₄⁺, Mg₃N₂ | PH₃, Ca₃P₂ | with H and electropositive metals |
| −2 | N₂H₄ (hydrazine) | P₂H₄ (diphosphane) | one E–E bond |
| −1 | NH₂OH (hydroxylamine) | — | — |
| −⅓ | HN₃, N₃⁻ (azide) | — | average state |
| 0 | N₂ | P₄ | element |
| +1 | N₂O, H₂N₂O₂ (hyponitrous) | H₃PO₂ (hypophosphorous) | — |
| +2 | NO | — | odd electron |
| +3 | N₂O₃, HNO₂, NaNO₂ | P₄O₆, H₃PO₃, PCl₃ | pyramidal E |
| +4 | NO₂, N₂O₄ | — | odd electron (NO₂) |
| +5 | N₂O₅, HNO₃, NO₃⁻ | P₄O₁₀, H₃PO₄, PCl₅ | tetrahedral/planar E |

## 4.2 The inert-pair effect — stability of +3 vs +5

Down the group the ns² pair takes **progressively less part in bonding** and remains as a
non-bonding lone pair on E(III). This is the **inert-pair effect** — a name for the
*observation*, not the *cause*.

**The energetics.** Going E(III) → E(V) means using the ns² pair to make **two extra E–X
bonds**. It pays only if those two bond energies exceed the promotion / reorganisation cost.
Down the group:

- the **E–X bond enthalpy falls steadily** (larger, more diffuse orbitals; longer, weaker
  bonds);
- the **ns → np promotion cost stays high** and, for the 6th period, actually *rises* — the
  6s orbital is contracted and stabilised by **relativistic effects**, so the 6s² pair of
  bismuth is held especially tightly.

So the "extra two bonds" stop paying for themselves somewhere between Sb and Bi.

| Element | +5 examples | +3 examples | Balance |
|:--:|:--|:--|:--|
| N | N₂O₅, HNO₃ (common) | HNO₂ (mild reductant), N₂O₃ | +5 readily reached; HNO₂ disproportionates |
| P | P₄O₁₀, H₃PO₄, PCl₅, PF₅ (all common, stable) | H₃PO₃, PCl₃, P₄O₆ | **+5 strongly favoured**; +3 acids disproportionate on heating |
| As | H₃AsO₄, AsF₅, As₂O₅ | As₂O₃, AsCl₃, AsH₃ | both real; As(III) mildly reducing |
| Sb | SbF₅, Sb₂O₅, [Sb(OH)₆]⁻ | Sb₂O₃, SbCl₃ | **+3 more stable**; Sb(V) mildly oxidising |
| Bi | **BiF₅, NaBiO₃ only** | Bi₂O₃, BiCl₃, Bi(NO₃)₃ (normal) | **+3 is the stable state**; Bi(V) a **very powerful oxidiser** |

> **Stability of the +5 state** — Decreasing order: **P > As > Sb > N ≳ Bi**
> (P and As reach +5 easily and hold it; N reaches +5 but the compounds are strong
> oxidisers; Bi(V) barely exists.)
> Note the twist: the +5 state is **less** stable for **nitrogen** than for P or As —
> because N(V) compounds (HNO₃, N₂O₅) are potent oxidisers (small N, only 4 bonds possible,
> high formal charge), not because of any inert pair.

> **Stability of the +3 state** — Increasing order: **N < P < As < Sb < Bi**
> Note: a near-mirror of the +5 order for the heavier members. Bi(III) is the most stable
> single oxidation state in the whole group.

> **Oxidising power of the E(V) species** — Increasing order:
> **P(V) < As(V) < Sb(V) < N(V) < Bi(V)**
> - P(V), As(V): not oxidising (H₃PO₄, H₃AsO₄ are ordinary acids);
> - Sb(V): mild (SbCl₅ chlorinates);
> - N(V): strong (HNO₃ oxidises Cu, C, S, P, I₂);
> - **Bi(V): the strongest — NaBiO₃ oxidises Mn²⁺ → MnO₄⁻ in cold dilute HNO₃** (a standard
>   test for manganese).

> **Reducing power of the E(III) species** — Decreasing order:
> **P(III) ≈ As(III) > Sb(III) > N(III) > Bi(III)**
> H₃PO₃ and H₃PO₂ reduce Ag⁺, Cu²⁺, Hg²⁺; HNO₂ is a mild, ambivalent reductant (also an
> oxidiser); Bi(III) is not a reductant at all.

> **"Inert pair" is partly a misnomer.** The 6s² pair of Bi is *not chemically inert* — it
> is stereochemically active (gas-phase BiCl₃, SbCl₃, PCl₃, NH₃ are all pyramidal because
> the lone pair occupies a position). What is "inert" is only its reluctance to be
> *promoted and bonded* in the heaviest members. In an answer, give the
> **bond-energy / promotion-energy** argument, not just the name.

## 4.3 pπ–pπ, pπ–dπ and dπ–dπ bonding — the bonding toolkit of Group 15


![Fig. MO diagram of N2 (bond order 3, diamagnetic).](/notes/nitrogen-family/n_n2mo.svg)

| Bond type | Who uses it | Examples |
|:--|:--|:--|
| **pπ–pπ (E=E, E=O, E=N)** | **only N** (compact 2p) | N₂ (N≡N), N₂O, NO, NO₂, HNO₃, R–N=N–R, C≡N⁻ |
| **pπ–dπ (O 2pπ → E 3dπ back-donation)** | P, As, Sb (empty nd) | P=O in R₃P=O, POCl₃, H₃PO₄; the "extra" bond that shortens P–O to ~150 pm |
| **dπ–pπ (E 3d ← ligand π)** | P, As as π-acceptor ligands | PF₃, PCl₃, P(OR)₃, PPh₃ bound to low-oxidation-state metals (like CO) |
| **negative hyperconjugation / dπ–dπ** | P–P, P–Si | N(SiH₃)₃ planar (N lp → Si 3d) vs N(CH₃)₃ pyramidal |

> **MOT LENS — the N₂ molecule.** 14 valence electrons:
> σ2s² σ*2s² π2p⁴ σ2p² — **bond order 3**, no unpaired electrons (diamagnetic), a σ lone
> pair on each N. Bond enthalpy **941 kJ mol⁻¹** (one of the strongest known bonds), bond
> length **110 pm**. The σ2p lies *above* the π2p for N₂ (s–p mixing) — the reason N₂⁺ has a
> *lower* bond order (2.5) and a *longer* bond than N₂, whereas O₂⁺ has a *higher* bond
> order than O₂.
>
> **Isoelectronic with N₂ (14 e⁻, bond order 3, diamagnetic):** CO, CN⁻, NO⁺, C₂²⁻.
> The exceptional inertness of N₂ (and the toxicity of CO / CN⁻ as competitors for the same
> binding sites) all trace to this shared triple-bonded electronic structure.

> **MOT LENS — NO and NO₂ (odd-electron molecules).**
> - **NO**: 11 valence electrons, bond order **2.5** (one electron in π*2p), paramagnetic,
>   bond length 115 pm. Loses that antibonding electron *easily* → **NO⁺ (nitrosonium)**,
>   bond order 3, isoelectronic with N₂/CO. This is why NO is a good ligand (donates as
>   NO⁺, "linear" M–N–O) and why it is oxidised by air the instant it forms.
> - **NO₂**: 17 valence electrons, angular (∠ONO 134°), one unpaired electron on N →
>   dimerises to **N₂O₄** (planar, ∠ONO 126°, weak N–N bond 175 pm) to pair it. The dimer
>   is colourless; the monomer brown; the equilibrium **2 NO₂ ⇌ N₂O₄** shifts to N₂O₄ on
>   cooling / compression (ΔH = −57 kJ mol⁻¹).


# 5. Anomalous behaviour of nitrogen; the N → P → rest gradation

## 5.1 How nitrogen differs from the rest of its group

| Feature | Nitrogen | P, As, Sb, Bi |
|:--|:--|:--|
| Elemental state | diatomic gas **N₂**, N≡N triple bond | P₄, As₄ tetrahedra; Sb, Bi layer/metallic |
| Maximum covalence | **4** (octet cannot expand) | 5 and **6** (nd orbitals) — PF₅, [PF₆]⁻, [SbF₆]⁻ |
| pπ–pπ multiple bonds | **abundant** (N₂, N=O, N=N) | essentially none (P₄, not P₂, at ordinary T) |
| Catenation | poor (N–N weak, 163 kJ mol⁻¹) | good for P (P₄, chains, P–P in H₄P₂O₆) |
| Hydride | NH₃ — strongly H-bonded, good base, b.p. 240 K | PH₃ — barely basic, no H-bonding, b.p. 185 K |
| Trihalides | only **NF₃** stable; NCl₃ explosive; hydrolyse **oppositely** (→ NH₃ + HOX) | all EX₃ known and stable; hydrolyse → H₃EO₃ + HX |
| Pentahalides | **none** (no d orbitals) | PF₅, PCl₅, AsF₅, SbF₅, SbCl₅, BiF₅ |
| dπ–pπ / dπ–dπ | cannot (no d) → N(SiH₃)₃ planar, no R₃N=O | P=O in POCl₃, R₃P=O; can π-accept as ligand |
| Oxidation states | **all of −3 to +5** | mainly −3, +3, +5 |

## 5.2 The "opposite hydrolysis" of NCl₃ and PCl₃ — a worked contrast

**PCl₃** — phosphorus is **δ⁺** (EN: P 2.1 < Cl 3.0). Water attacks with its O lone pair at
P; P **expands its octet** to a 4-coordinate transition state; Cl leaves as Cl⁻:

P(δ⁺)Cl₃ + 3 H₂O → **H₃PO₃** + 3 HCl

**NCl₃** — nitrogen is **δ⁻** (EN: N 3.0 > Cl 3.0 — actually equal; in NCl₃ N is slightly
δ⁻ / the bond is nearly non-polar, and N has **no vacant orbital** so water cannot attack
N). Instead water attacks the **δ⁺ chlorine** with its O lone pair, and the N leaves as the
better base:

N(δ⁻)Cl₃ + 3 H₂O → **NH₃** + 3 HOCl

> **JEE TRAP:** "NCl₃ on hydrolysis gives ___." Answer **NH₃ + HOCl** (not HNO₃, not HNO₂,
> not N₂). The nitrogen keeps its −3 state throughout — hydrolysis is **not** a redox
> reaction. Same for NBr₃, NI₃·NH₃.

## 5.3 The N–P gap vs the smoothness among As, Sb, Bi

- **N → P**: the biggest discontinuity in any property (size +40 pm, EN −0.9, ΔₑgH from +7
  to −72). Everything above hangs on it.
- **P → As → Sb → Bi**: a smooth metallic gradation. +3 grows, +5 shrinks, oxides go
  acidic → amphoteric → basic, hydrides get less stable and less basic, the elements go
  non-metal → metalloid → metal.


# 6. Elemental chemical reactivity — conditions included

## 6.1 Reactivity of dinitrogen

N₂ is **kinetically inert** at 298 K (N≡N 941 kJ mol⁻¹; non-polar; no low-lying vacant
orbital). It reacts only under forcing conditions:

| Reagent | Conditions | Product | Equation |
|:--|:--|:--|:--|
| Li | room temperature (!) | lithium nitride | 6 Li + N₂ → 2 Li₃N |
| Mg, Ca, Al, B | heat (~1100 K) | ionic / covalent nitrides | 3 Mg + N₂ → Mg₃N₂; 2 B + N₂ → 2 BN |
| H₂ | 700 K, 200 atm, Fe/K₂O/Al₂O₃ | ammonia | N₂ + 3 H₂ ⇌ 2 NH₃, ΔH = −92 kJ |
| O₂ | ~2000 K (electric arc) or lightning | nitric oxide (endothermic) | N₂ + O₂ ⇌ 2 NO, ΔH = +180 kJ |
| CaC₂ | 1300 K | calcium cyanamide | CaC₂ + N₂ → CaCN₂ + C |

> **Why does Li react with N₂ at room temperature but Na does not?** Li⁺ is small, so
> **Li₃N has a very high lattice enthalpy** — enough to make the reaction thermodynamically
> and kinetically feasible even cold. Na⁺ is bigger; Na₃N is barely stable. This is a
> diagonal-relationship point (Li resembles Mg, and Mg₃N₂ also forms readily).

## 6.2 Reactivity of phosphorus (mainly white P)


![Fig. Electric-furnace manufacture of white phosphorus.](/notes/nitrogen-family/n_p4furnace.svg)

| Reagent | Conditions | Product |
|:--|:--|:--|
| O₂ (limited) | slow / cool | P₄O₆ |
| O₂ (excess) | ignites at 308 K | P₄O₁₀ |
| Cl₂ (limited / excess) | spontaneous | PCl₃ / PCl₅ |
| S | warm | P₄S₃, P₄S₁₀ |
| hot NaOH (conc.), inert atm. | boil, CO₂ blanket | **PH₃ + NaH₂PO₂** (disproportionation): P₄ + 3 NaOH + 3 H₂O → PH₃ + 3 NaH₂PO₂ |
| conc. HNO₃ | boil | H₃PO₄ + NO₂: P₄ + 20 HNO₃ → 4 H₃PO₄ + 20 NO₂ + 4 H₂O |
| metals | heat | phosphides: 6 Ca + P₄ → 2 Ca₃P₂ |
| conc. H₂SO₄ | hot | H₃PO₄ + SO₂ |

> **Disproportionation of P₄ in alkali** is the standard lab preparation of PH₃. Note the
> **oxidation states**: P₄ (0) → PH₃ (−3) and NaH₂PO₂ (+1). Compare Cl₂ + NaOH (also
> disproportionation) — a recurring p-block motif for the element in oxidation state 0 with
> a base.

## 6.3 Reactivity of As, Sb, Bi

- Burn in air → E₄O₆ (As, Sb) or Bi₂O₃.
- React with halogens → EX₃ (and AsF₅, SbF₅, SbCl₅, BiF₅ with excess).
- **Not attacked by non-oxidising acids** (increasingly metallic). With oxidising acids:
  As → H₃AsO₃ / H₃AsO₄ (dil./conc. HNO₃); Sb → Sb₂O₃ / Sb₂O₅; Bi → Bi(NO₃)₃ (a genuine
  salt — Bi is a real metal).
- With NaOH: As and Sb dissolve slowly (amphoteric); **Bi does not** (basic).

> **Reactivity of the elements towards air / acids** — Increasing metallic (basic) response:
> N ≪ P < As < Sb < Bi. Only Bi gives a simple salt with an acid.


# 7. Allotropy — phosphorus in full, arsenic and antimony


![Fig. Allotropes of phosphorus — white P4, red P chains, black P layers.](/notes/nitrogen-family/n_allotropes.svg)

## 7.1 White phosphorus, P₄


![Fig. White phosphorus P4 — strained tetrahedron.](/notes/nitrogen-family/n_p4.svg)

- **Structure:** a regular **P₄ tetrahedron**; each P bonded to the other three by P–P
  single bonds; **∠P–P–P = 60°**, far below the ~99° a p³ atom "wants", so the bonds are
  **bent ("banana") bonds** with high strain energy (~96 kJ mol⁻¹ per mole of P₄). This
  ring strain is the source of white P's reactivity.
- Translucent, waxy, soft; **soluble in CS₂**, benzene, PCl₃; **insoluble in water** (stored
  under it).
- **Glows in the dark** ("phosphorescence" — actually chemiluminescence): slow surface
  oxidation to P₄O₆/P₄O₁₀ with emission of green light; needs a trace of O₂ (stops in pure
  O₂ above a threshold pressure, and in vacuum).
- **Highly toxic** (≈ 50–100 mg lethal); chronic exposure → "phossy jaw" (necrosis of the
  jawbone — historic match-factory disease).
- Ignites in air at **~308 K (35 °C)** — kept under water; on skin causes deep burns.

## 7.2 Red phosphorus

- Made by heating white P at **~573 K** in an inert atmosphere for hours (a trace of I₂
  catalyses).
- **Polymeric:** the P₄ tetrahedra open and link into **chains** (one P–P bond of each
  tetrahedron breaks and joins the next).
- Iron-grey, lustrous powder; **does not glow**, is **not toxic**, **insoluble in CS₂**;
  ignites only at **~543 K**; does not dissolve in NaOH.
- Much **less reactive** than white P — no ring strain, no discrete molecules.

## 7.3 Black phosphorus

- The **thermodynamically most stable** allotrope. α-black: heat red P at 803 K in a sealed
  tube. β-black: heat white P at ~473 K under high pressure (Bridgman).
- **Layered**, graphite-like: each P bonded to three others in puckered sheets;
  **semiconductor** (a single layer = "phosphorene", studied for transistors).
- Chemically **least reactive**; does not ignite in air below 673 K.

## 7.4 Interconversion and comparison

white P → (573 K, inert) → red P → (803 K, sealed) → black P (all downhill in free energy).

| Property | White (P₄) | Red | Black |
|:--|:--|:--|:--|
| Structure | discrete strained P₄ | polymeric chains | puckered layers |
| Density / g cm⁻³ | 1.82 | 2.16 | 2.69 |
| Reactivity | very high | moderate | low |
| Ignition T | 308 K | 543 K | > 673 K |
| Glow in air | yes | no | no |
| Toxicity | high | nil | nil |
| Solubility in CS₂ | soluble | insoluble | insoluble |
| Action of NaOH | gives PH₃ | no reaction | no reaction |

> **Order of stability** — white < red < violet < black.
> **Order of reactivity** — white ≫ red > black.
> **Order of density** — white < red < black.

## 7.5 Arsenic and antimony allotropes (brief)

- **Grey (metallic, α)** As and Sb — layer structure like black P; the stable, ordinary
  form; brittle, semi-metallic.
- **Yellow As₄ / yellow Sb** — soft, unstable, CS₂-soluble molecular forms made by rapid
  cooling of the vapour; revert to grey on standing / in light.
- **"Explosive antimony"** — an amorphous form from electrolysis of SbCl₃ solution; snaps
  back to the grey form with a flash of heat if scratched.


# 8. Nitrides and phosphides

## 8.1 Nitrides — three bonding classes

| Class | Bonding | Examples | Reaction with water |
|:--|:--|:--|:--|
| **Ionic** | contain N³⁻ | Li₃N, Mg₃N₂, Ca₃N₂, AlN | hydrolyse → NH₃: Mg₃N₂ + 6 H₂O → 3 Mg(OH)₂ + 2 NH₃ |
| **Covalent** | network / molecular | BN (graphite- and diamond-like), Si₃N₄, P₃N₅, S₄N₄ | inert or slow |
| **Interstitial (metallic)** | N atoms in metal-lattice holes | TiN, VN, CrN, Fe₄N | inert; very hard, high-melting, conducting |

- **Boron nitride, BN** — "inorganic graphite": hexagonal sheets (isoelectronic with C₂),
  a white lubricant and electrical insulator; under high pressure → **borazon**, a
  diamond-hard cubic form.
- **Li₃N** is the only stable alkali-metal nitride and a **fast Li⁺-ion conductor**
  (solid-electrolyte interest).

## 8.2 Phosphides

- **Ionic** (P³⁻): Na₃P, Ca₃P₂, AlP, Zn₃P₂ — hydrolyse to **PH₃**:
  Ca₃P₂ + 6 H₂O → 3 Ca(OH)₂ + 2 PH₃; AlP + 3 H₂O → Al(OH)₃ + PH₃.
  (AlP and Zn₃P₂ are grain fumigants and rodenticides — "Celphos"; the PH₃ is the poison.)
- **Metal-rich / metallic** phosphides (Fe₂P, Fe₃P) — hard, used in phosphor-bronze and as
  the "phosphorus" in steel.
- **Group 13 phosphides** GaP, InP, AlP — **III–V semiconductors** (LEDs, laser diodes).


# 9. Dinitrogen — preparation, properties, uses

## 9.1 Laboratory preparation


![Fig. Laboratory preparation of dinitrogen.](/notes/nitrogen-family/n_prepn2.svg)

**Standard method — warm ammonium chloride with sodium nitrite:**

NH₄Cl(aq) + NaNO₂(aq) → **N₂(g)** + NaCl(aq) + 2 H₂O   *(gentle heat; NH₄NO₂ forms and
decomposes)*

Impurity NO and HNO₃ are removed by passing the gas through **acidified K₂Cr₂O₇**.

**Thermal decomposition of ammonium dichromate** ("volcano"):

(NH₄)₂Cr₂O₇(s) → **N₂(g)** + Cr₂O₃(s) + 4 H₂O(g)

**Very pure N₂ — decomposition of an azide:**

2 NaN₃ → 2 Na + 3 N₂      Ba(N₃)₂ → Ba + 3 N₂

**Other routes:**

8 NH₃ + 3 Br₂ → N₂ + 6 NH₄Br
2 NH₃ + 3 CuO → N₂ + 3 Cu + 3 H₂O   *(oxidation of NH₃)*
(NH₄)₂Cr₂O₇, NH₄NO₂ → N₂  *(as above)*

## 9.2 Industrial preparation

**Fractional distillation of liquefied air.** Air is freed of CO₂ (scrubbed with NaOH) and
water, compressed, cooled by the **Joule–Thomson effect** and Linde/Claude expansion, then
distilled: **N₂ (b.p. 77.2 K)** comes off first, above **Ar (87.3 K)** and **O₂ (90 K)**.
Product N₂ is 99.5 %+ pure (trace Ar); "oxygen-free" grade is < 10 ppm O₂.

## 9.3 Physical properties

- Colourless, odourless, tasteless, non-toxic, non-combustible gas; d(gas) ≈ 1.25 g L⁻¹
  (slightly lighter than air).
- **Very low solubility** in water (23.2 cm³ per litre at 273 K) — but enough to give divers
  "the bends" and to cause narcosis at depth.
- m.p. 63 K, b.p. 77 K; critical T only 126 K (hard to liquefy).

## 9.4 Chemical properties

Covered under §6.1 (with metals → nitrides; with H₂ → NH₃; with O₂ → NO; with CaC₂ →
CaCN₂). Add:

- With Mg burning in air, some **Mg₃N₂** forms alongside MgO — the nitride is hydrolysed by
  water to give the smell of NH₃ (a classic demonstration that "air is not all O₂").
- N₂ is used as a **moderator-free blanket**; it does **not** support combustion or
  respiration.

## 9.5 Uses of dinitrogen

- **Feedstock** for NH₃ (Haber), HNO₃ (via NH₃), calcium cyanamide, and — via NH₃ —
  urea, nitric acid, hydrazine, HCN, melamine.
- **Inert atmosphere:** blanketing in the iron & steel, petroleum, and electronics
  industries; purging flammable-vapour spaces; packaging crisps/food (delays rancidity);
  filling incandescent-lamp bulbs (with Ar) and the space above Hg in thermometers.
- **Liquid N₂ (77 K):** cheap cryogen — food freezing and transport ("IQF"); cryopreservation
  of blood, semen, embryos, cell lines; **cryosurgery** (wart, tumour, retinal
  detachment); shrink-fitting of machine parts; cooling of superconductors and IR
  detectors; the "smoking" cocktail / molecular-gastronomy effect.
- **Pressurising gas** in aircraft tyres and in "nitro" (widget) beers and coffees.


# 10. Ammonia, NH₃

## 10.1 Preparation


![Fig. Laboratory preparation of ammonia.](/notes/nitrogen-family/n_prepnh3.svg)

**Natural / small scale.** Bacterial decay of proteins; hydrolysis of urea:
NH₂CONH₂ + 2 H₂O → (NH₄)₂CO₃ ⇌ 2 NH₃ + H₂O + CO₂.

**Laboratory — heat any ammonium salt with a strong base:**

2 NH₄Cl + Ca(OH)₂ → CaCl₂ + 2 NH₃ + 2 H₂O
(NH₄)₂SO₄ + 2 NaOH → Na₂SO₄ + 2 NH₃ + 2 H₂O

Dried over **quicklime (CaO)** or soda-lime. **Not** over conc. H₂SO₄ or P₄O₁₀ (acidic,
react with NH₃) or anhydrous CaCl₂ (forms **CaCl₂·8NH₃**). Collected by **downward
displacement of air** (lighter than air; very soluble in water).

**From a nitride:** Mg₃N₂ + 6 H₂O → 3 Mg(OH)₂ + 2 NH₃; AlN + 3 H₂O → Al(OH)₃ + NH₃.

## 10.2 Manufacture — the Haber–Bosch process


![Fig. Haber-Bosch process for ammonia.](/notes/nitrogen-family/n_haber.svg)

N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)   **ΔH = −92.4 kJ mol⁻¹**, ΔS < 0 (4 mol gas → 2 mol gas)

**Le Chatelier analysis.** Forward reaction is **exothermic** and proceeds with a **decrease
in gas moles**, so a **high pressure** and a **low temperature** give the highest
equilibrium yield. But a low temperature makes the rate impractically slow, so a compromise
("optimum") temperature is used with a catalyst.

| Variable | Optimum | Reason |
|:--|:--|:--|
| **Pressure** | 200 × 10⁵ Pa (≈ 200 atm) | shifts equilibrium right (fewer gas moles) and raises rate; higher P limited by plant cost & safety |
| **Temperature** | ≈ 700 K (673–773 K) | compromise: yield favoured cold, rate favoured hot |
| **Catalyst** | finely divided **Fe** with **K₂O** (electronic promoter) + **Al₂O₃** (structural promoter, stops sintering) | speeds attainment of equilibrium; does not shift it. (Earlier: Fe + Mo; modern: also Ru/C.) |
| **Removal of NH₃** | cooled and liquefied out; unreacted N₂ + H₂ **recycled** | continuous removal drives the reaction forward |
| **Feed purity** | CO, CO₂, H₂S, H₂O removed | these **poison** the iron catalyst |

H₂ comes from steam reforming of natural gas (CH₄ + H₂O → CO + 3 H₂; CO + H₂O → CO₂ + H₂);
N₂ from air. Yield per pass ≈ 10–20 %; overall conversion high through recycling.

> **JEE TRAP:** the catalyst **does not** increase the equilibrium yield of NH₃ — only the
> rate. "Adding a catalyst shifts the equilibrium towards NH₃" is **false**.

## 10.3 Structure


![Fig. Ammonia — trigonal pyramidal (sp3), H-N-H 107.8 deg.](/notes/nitrogen-family/n_nh3.svg)

**Trigonal pyramidal**; N is **sp³** with one lone pair; **∠H–N–H = 107.8°** (< 109.5°
because lp–bp repulsion > bp–bp); N–H = 101.7 pm; dipole moment **1.47 D**. The molecule
undergoes rapid **umbrella inversion** through a planar transition state (barrier ≈ 24 kJ
mol⁻¹, ~2 × 10¹¹ s⁻¹ at 298 K).

## 10.4 Physical properties


![Fig. Fountain experiment — extreme solubility of NH3.](/notes/nitrogen-family/n_fountain.svg)

- Colourless gas, **extremely pungent** (choking); f.p. 195.4 K, **b.p. 239.7 K**.
- b.p. and ΔvapH abnormally high → **intermolecular hydrogen bonding** (N–H···N). Compare
  PH₃ (b.p. 185 K) — no H-bonding.
- **Very soluble in water** (≈ 700 volumes per volume at 293 K, 1 atm) — H-bonds to water.
- Liquid NH₃ is a **water-like ionising solvent** (self-ionisation 2 NH₃ ⇌ NH₄⁺ + NH₂⁻);
  dissolves alkali metals to give blue, paramagnetic, conducting solutions of **solvated
  electrons** (→ bronze, diamagnetic at high concentration).

## 10.5 Chemical properties

### (a) Weak Brønsted base (Kb = 1.8 × 10⁻⁵)

NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
NH₃ + HCl → NH₄Cl   *(dense white fumes — the standard test for NH₃; also for HCl)*
2 NH₃ + H₂SO₄ → (NH₄)₂SO₄

### (b) Precipitation of metal hydroxides

FeCl₃ + 3 NH₄OH → Fe(OH)₃↓ (brown) + 3 NH₄Cl
Al³⁺ + 3 NH₄OH → Al(OH)₃↓ (white, gelatinous) + 3 NH₄⁺
CuSO₄ + 2 NH₄OH → Cu(OH)₂↓ (pale blue) + (NH₄)₂SO₄   *(dissolves in excess NH₃, next line)*

### (c) Lewis base / ligand — lone-pair donation

Cu²⁺(aq) + 4 NH₃ → **[Cu(NH₃)₄]²⁺** (deep blue)   — confirms Cu²⁺
Ag⁺ + 2 NH₃ → **[Ag(NH₃)₂]⁺** (colourless)   — dissolves AgCl; **Tollens' reagent**
AgCl(s) + 2 NH₃ → [Ag(NH₃)₂]Cl(aq)
Ni²⁺ + 6 NH₃ → [Ni(NH₃)₆]²⁺ (blue-violet)
Zn²⁺ + 4 NH₃ → [Zn(NH₃)₄]²⁺   — Zn(OH)₂ dissolves in excess NH₃ (distinguishes Zn from Al)

### (d) Reducing agent (with strong oxidisers / on heating)

8 NH₃ + 3 Cl₂ (excess NH₃) → 6 NH₄Cl + N₂
2 NH₃ + 3 CuO → N₂ + 3 Cu + 3 H₂O
4 NH₃ + 3 O₂ → 2 N₂ + 6 H₂O   *(no catalyst)*
4 NH₃ + 5 O₂ → 4 NO + 6 H₂O   *(Pt/Rh catalyst — the first step of the Ostwald process)*
2 NH₃ + 2 Na → 2 NaNH₂ + H₂   *(sodamide, with molten Na or in liquid NH₃)*

### (e) Ammonolysis (the NH₃ analogue of hydrolysis)

HgCl₂ + 2 NH₃ → Hg(NH₂)Cl↓ ("infusible white precipitate") + NH₄Cl
COCl₂ + 4 NH₃ → CO(NH₂)₂ (urea) + 2 NH₄Cl
SO₂Cl₂ + 4 NH₃ → SO₂(NH₂)₂ + 2 NH₄Cl

## 10.6 Uses of ammonia

- **Fertilisers** (≈ 80 % of production): urea, ammonium nitrate, ammonium sulphate,
  ammonium phosphates, calcium ammonium nitrate; **anhydrous liquid NH₃ injected directly
  into soil**.
- **Nitric acid** (Ostwald) → explosives, more fertiliser.
- **Sodium carbonate** by the **Solvay (ammonia–soda) process** (NH₃ is a recycled
  catalyst-like reagent).
- Manufacture of **hydrazine, HCN, urea, melamine, nylon-6,6** (via caprolactam), sulpha
  drugs, nitrogenous dyes.
- **Refrigerant R-717** (large industrial cold stores, ice plants) — high latent heat,
  cheap, but toxic.
- Household cleaner (dilute NH₄OH — dissolves grease, streak-free glass); latex stabiliser;
  in metallurgy for **nitriding** steel surfaces; rocket-fuel component; NOₓ abatement in
  power-station flue gas (**selective catalytic reduction**: 4 NO + 4 NH₃ + O₂ → 4 N₂ +
  6 H₂O).


# 11. Ammonium salts and the ammono chemistry

## 11.1 Ammonium salts — properties

- Made by neutralising NH₃ / NH₄OH with the acid; almost all are **white, crystalline,
  water-soluble**; the **NH₄⁺ ion is tetrahedral**, radius 143 pm — close to K⁺ (138) and
  Rb⁺ (152), so ammonium salts are usually **isomorphous** with the corresponding K⁺/Rb⁺
  salts (e.g. the alums, NH₄ClO₄).
- **Weakly acidic in water** (cationic hydrolysis): NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.
- **All are thermally unstable.** The decomposition mode depends on the anion:

| Anion type | Behaviour | Example |
|:--|:--|:--|
| non-oxidising, volatile acid | reversible dissociation ("sublimation") | NH₄Cl ⇌ NH₃ + HCl |
| non-oxidising, non-volatile acid | NH₃ driven off, acid salt left | (NH₄)₃PO₄ → NH₃ + (NH₄)₂HPO₄ → … |
| oxidising anion | internal redox | NH₄NO₃, NH₄NO₂, (NH₄)₂Cr₂O₇ |

NH₄NO₂ → N₂ + 2 H₂O
NH₄NO₃ → **N₂O** + 2 H₂O   *(≈ 520 K, controlled — industrial source of "laughing gas")*
2 NH₄NO₃ → 2 N₂ + O₂ + 4 H₂O   *(strong heating / detonation — a major industrial explosive
   and, tragically, the Oppau 1921, Texas City 1947 and Beirut 2020 disasters)*
(NH₄)₂Cr₂O₇ → N₂ + Cr₂O₃ + 4 H₂O

> **JEE TRAP:** NH₄Cl on heating gives **NH₃ + HCl** (not N₂). The white "sublimate" is
> NH₄Cl re-formed on the cooler part of the tube. NH₄NO₃ gives **N₂O** on *gentle* heating,
> **N₂ + O₂** on strong heating.

## 11.2 Detection of NH₄⁺

- Warm with NaOH → NH₃ gas (smell; turns moist red litmus blue; white fumes with HCl rod).
- **Nessler's reagent** (K₂[HgI₄] + KOH) → brown precipitate / brown colour (basic mercury
  amido-iodide, NH₂·Hg₂I₃).


# 12. Hydrazine, hydroxylamine and hydrazoic acid

## 12.1 Hydrazine, N₂H₄ (oxidation state of N = −2)

**Preparation — Raschig process:**

2 NH₃ + NaOCl → **N₂H₄** + NaCl + H₂O

A trace of **glue / gelatin** is added to sequester metal ions (Cu²⁺, Fe³⁺) that would
otherwise catalyse the wasteful side-reaction N₂H₄ + 2 NaOCl → N₂ + 2 NaCl + 2 H₂O.
(Modern: the **peroxide / ketazine** process, NH₃ + H₂O₂ + acetone.)

**Structure:** H₂N–NH₂, **gauche** (skew) conformation about the N–N bond (each N sp³, lone
pairs staggered to minimise lp–lp repulsion); N–N 145 pm.

**Properties:**

- Colourless, fuming, oily liquid, b.p. 386 K; smells of ammonia; **hygroscopic**; forms
  the stable hydrate **N₂H₄·H₂O**.
- **Weak dibasic base** (weaker than NH₃ — the second –NH₂ withdraws electron density):
  N₂H₄ + H₂O ⇌ N₂H₅⁺ + OH⁻ (Kb₁ ≈ 8.5 × 10⁻⁷); with acids → N₂H₅⁺ and N₂H₆²⁺ salts.
- **Powerful reducing agent** (N⁻² → N₂): reduces Tollens', Fehling's, I₂, X₂, Cu²⁺; used
  to remove dissolved O₂ from boiler feed-water:
  N₂H₄ + O₂ → N₂ + 2 H₂O.
- **Strongly exothermic decomposition / combustion** →

  N₂H₄(l) + O₂(g) → N₂(g) + 2 H₂O(g)   ΔH = −622 kJ mol⁻¹
  3 N₂H₄ → 4 NH₃ + N₂   *(catalytic, monopropellant)*

**Uses:** **rocket propellant** (with N₂O₄ or HNO₃ oxidiser; the derivatives MMH =
monomethylhydrazine and UDMH = unsymmetrical dimethylhydrazine are storable hypergolic
fuels — Titan, Ariane, Apollo lunar module); **spacecraft attitude-control** monopropellant
(decomposed over an Ir/Al₂O₃ catalyst); **O₂ scavenger** in high-pressure boilers;
**blowing agent** for foamed plastics; reducing agent in the recovery of Pt-group metals
and in photographic/analytical chemistry; agrochemical and pharmaceutical synthesis
(isoniazid).

## 12.2 Hydroxylamine, NH₂OH (oxidation state of N = −1)

**Preparation:**

2 NO + 3 H₂ → 2 NH₂OH   *(catalytic)*
NH₄NO₃ (or HNO₂) + electrolytic reduction → NH₂OH  *(at a lead/amalgam cathode)*
Usually stored and sold as its **salts**: (NH₃OH)Cl, (NH₃OH)₂SO₄ (the free base is unstable
above 306 K).

**Structure:** H₂N–OH, N sp³, one lone pair on N and two on O; N–O 147 pm.

**Properties:**

- White, hygroscopic solid, m.p. 306 K; **thermally unstable** (disproportionates:
  3 NH₂OH → NH₃ + N₂ + 3 H₂O).
- **Weak base** — weaker than both NH₃ and N₂H₄ (the –OH is electron-withdrawing):
  Order of base strength **NH₃ > N₂H₄ > NH₂OH**.
- **Both oxidising and reducing** (intermediate oxidation state −1):
  - as **reductant**: reduces Fe³⁺ → Fe²⁺, Tollens' → Ag, Cu²⁺ → Cu₂O; itself → N₂O or N₂;
  - as **oxidant**: oxidises Fe²⁺ → Fe³⁺ in acid; itself → NH₃.

**Uses:** converts aldehydes and ketones to **oximes** (>C=N–OH) — the key step in the
industrial route **cyclohexanone → cyclohexanone oxime → (Beckmann) → caprolactam →
nylon-6**; antioxidant in photographic developers and in fatty acids/soaps; reducing agent
in dye and pharmaceutical manufacture; in the semiconductor industry as a photoresist
stripper.

## 12.3 Hydrazoic acid, HN₃, and the azides (average oxidation state of N = −1/3)

**Preparation:**

N₂H₄ + HNO₂ → **HN₃** + 2 H₂O
NaNH₂ + N₂O → NaN₃ + H₂O   *(≈ 460 K — industrial route to sodium azide)*
2 NaNH₂ + N₂O → NaN₃ + NaOH + NH₃

**Structure:** the **azide ion N₃⁻ is linear and symmetrical** (both N–N 116 pm; a
16-valence-electron species isoelectronic with CO₂, N₂O, OCN⁻ — a **pseudohalide**). In
covalent HN₃ the two N–N bonds are unequal (113 and 124 pm).

**Properties:**

- HN₃ — a colourless, volatile, **highly toxic** liquid (b.p. 309 K); a **weak acid**
  (Ka ≈ 2 × 10⁻⁵, similar to acetic acid); dangerously **explosive**.
- **Ionic azides** (NaN₃, KN₃, Ba(N₃)₂) are reasonably stable → the standard laboratory
  source of very pure N₂ on gentle heating.
- **Heavy-metal / covalent azides** (Pb(N₃)₂, AgN₃, Hg(N₃)₂, Cu(N₃)₂) are **shock- and
  friction-sensitive primary explosives**.
- Azide is a good **ligand** and a good **nucleophile** (organic azides → amines by
  reduction, → triazoles by "click" cycloaddition).

**Uses:** **NaN₃ is the gas generator in vehicle air-bags** — 2 NaN₃ → 2 Na + 3 N₂
(≈ 40 L of N₂ in ~40 ms; the Na is scavenged by KNO₃/SiO₂). **Lead azide Pb(N₃)₂** is the
detonator ("initiator") in blasting caps and ammunition. Sodium azide is also a
broad-spectrum **biocide/preservative** in laboratory reagents and a reagent in organic
synthesis.

## 12.4 Base-strength order of the nitrogen hydrides


![Fig. Nitrogen hydrides, azide ion and the brown-ring complex.](/notes/nitrogen-family/n_hydrides.svg)

> **Base strength** — Decreasing order: **NH₃ > N₂H₄ > NH₂OH > HN₃**
> Reason: each replacement of an H on nitrogen by an electron-withdrawing group (–NH₂, then
> –OH), and finally full delocalisation of the lone pair in the linear N₃⁻, lowers the
> electron density on the donor nitrogen and hence its ability to bind H⁺.


# 13. Oxides of nitrogen


![Fig. Structures of the oxides of nitrogen.](/notes/nitrogen-family/n_oxides.svg)

Nitrogen forms an oxide in **every** oxidation state from +1 to +5 — a direct consequence of
strong N=O pπ–pπ bonding.

| Oxide | Name | Ox. state of N | Preparation | Nature / appearance | Structure |
|:--|:--|:--:|:--|:--|:--|
| **N₂O** | dinitrogen oxide (nitrous oxide) | +1 | NH₄NO₃ →(520 K) N₂O + 2 H₂O | colourless, faintly sweet gas; **neutral**; "laughing gas" | linear N–N–O (113 / 119 pm); resonance |
| **NO** | nitrogen monoxide (nitric oxide) | +2 | 8 HNO₃(dil) + 3 Cu → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O; also 4 NH₃ + 5 O₂ →(Pt) 4 NO + 6 H₂O | colourless gas; **neutral**; **paramagnetic** (odd e⁻) | N=O, bond order 2.5, 115 pm |
| **N₂O₃** | dinitrogen trioxide | +3 | 2 NO + N₂O₄ ⇌(250 K) 2 N₂O₃ | blue solid / liquid; **acidic** (anhydride of HNO₂) | planar, ON–NO₂, N–N bond |
| **NO₂** | nitrogen dioxide | +4 | 2 Pb(NO₃)₂ →(673 K) 4 NO₂ + 2 PbO + O₂ | **red-brown**, pungent, poisonous gas; **acidic**; **paramagnetic** | bent, ∠ONO 134°, 120 pm |
| **N₂O₄** | dinitrogen tetroxide | +4 | 2 NO₂ ⇌ N₂O₄ (favoured cold) | colourless liquid/solid; **acidic**; **diamagnetic** | planar O₂N–NO₂, long N–N (175 pm) |
| **N₂O₅** | dinitrogen pentoxide | +5 | 4 HNO₃ + P₄O₁₀ → 4 HPO₃ + 2 N₂O₅; or dehydrate HNO₃ | colourless, deliquescent solid; **strongly acidic** (anhydride of HNO₃); **ionic in solid: NO₂⁺ NO₃⁻** | planar O₂N–O–NO₂ (gas) |

## 13.1 Bonding and structural notes

- **N₂O** — linear; resonance hybrid of ⁻N=N⁺=O ↔ N≡N⁺–O⁻; N–N 113 pm (near triple), N–O
  119 pm; isoelectronic with CO₂ and N₃⁻.
- **NO** — one electron in π*2p → **bond order 2.5**, paramagnetic; loses that electron
  readily → **NO⁺** (bond order 3, isoelectronic with N₂). Dimerises weakly to O=N–N=O only
  in the solid. Oxidised instantly by air: **2 NO + O₂ → 2 NO₂** (brown fumes — a test).
- **NO₂ / N₂O₄** — NO₂ has an unpaired electron on N; **2 NO₂ (brown, paramagnetic) ⇌ N₂O₄
  (colourless, diamagnetic)**, ΔH = −57 kJ; the equilibrium moves to N₂O₄ on cooling and
  compression — a favourite Le Chatelier demonstration.
- **N₂O₅** — the solid is the salt **[NO₂]⁺[NO₃]⁻** (nitronium nitrate); NO₂⁺ is linear
  (sp, isoelectronic with CO₂), NO₃⁻ trigonal planar. Covalence of N = **4**.

## 13.2 Acid–base and redox character

| Oxide | Acid formed with water | Redox tendency |
|:--|:--|:--|
| N₂O | none (neutral) | supports combustion (decomposes → N₂ + O₂ on a hot surface); mild oxidiser |
| NO | none (neutral) | both oxidised (→ NO₂) and reduced (→ N₂O, N₂, NH₂OH) easily |
| N₂O₃ | 2 HNO₂ | HNO₂ is a mild oxidiser **and** reductant |
| NO₂ / N₂O₄ | disproportionates: **2 NO₂ + H₂O → HNO₂ + HNO₃**; hot: 3 NO₂ + H₂O → 2 HNO₃ + NO | strong oxidiser (rocket oxidiser as N₂O₄) |
| N₂O₅ | 2 HNO₃ | strong oxidiser; a solid source of NO₂⁺ for nitration |

> **Thermal stability of the oxides** — Decreasing order: **N₂O > NO > NO₂ > N₂O₃ ≈ N₂O₅**.
> All have **positive ΔfH** (endothermic compounds) — nitrogen "prefers" to be N₂ — so they
> are **oxidising** and several are explosive.

> **Anhydride relationships to remember:** N₂O₃ → HNO₂; N₂O₅ → HNO₃; NO₂ → HNO₂ + HNO₃
> (mixed anhydride).

## 13.3 Nitrogen oxides in the environment (context)

- **NOₓ** (NO + NO₂) from combustion → **photochemical smog** (NO₂ + hν → NO + O; O + O₂ →
  O₃) and **acid rain** (HNO₃).
- **N₂O** — a long-lived **greenhouse gas** (~300× CO₂ per molecule over 100 y) and, in the
  stratosphere, the main natural source of ozone-destroying NO.

## 13.4 Nitrous acid, HNO₂


![Fig. Nitrous acid HNO2 and the nitrite ion.](/notes/nitrogen-family/n_hno2.svg)

- Prepared **in situ** (unstable in the free state): NaNO₂ + dilute HCl (cold) → HNO₂ + NaCl;
  or Ba(NO₂)₂ + H₂SO₄.
- On warming it **disproportionates**: 3 HNO₂ → HNO₃ + 2 NO + H₂O.
- **Ambivalent redox** — as an **oxidiser** (→ NO): 2 HNO₂ + 2 HI → I₂ + 2 NO + 2 H₂O;
  as a **reductant** (→ HNO₃): 5 HNO₂ + 2 KMnO₄ + 3 H₂SO₄ → 5 HNO₃ + 2 MnSO₄ + K₂SO₄ + 3 H₂O.
- Diazotises primary aromatic amines (0–5 °C): ArNH₂ + HNO₂ + HCl → ArN₂⁺Cl⁻ + 2 H₂O — the
  gateway to azo dyes.
- Test for nitrite: brown ring with FeSO₄ (like nitrate but **without** conc. H₂SO₄ — dilute
  acetic acid is enough), and it liberates brown NO₂ fumes with dilute acid.


# 14. Nitric acid, HNO₃

## 14.1 Laboratory preparation


![Fig. Laboratory preparation of nitric acid (all-glass retort).](/notes/nitrogen-family/n_prephno3.svg)

Heat KNO₃ or NaNO₃ with **conc. H₂SO₄** in a glass retort (all-glass apparatus — HNO₃
attacks rubber and cork):

NaNO₃ + H₂SO₄ →(≤ 470 K) NaHSO₄ + **HNO₃**

Only NaHSO₄ (not Na₂SO₄) forms, because Na₂SO₄ needs a higher temperature that would
decompose the HNO₃. The non-volatile H₂SO₄ displaces the volatile HNO₃ (b.p. 356 K).

## 14.2 Manufacture — the Ostwald process


![Fig. Ostwald process for nitric acid.](/notes/nitrogen-family/n_ostwald.svg)

**Step 1 — catalytic oxidation of ammonia** over a **Pt/Rh gauze** (90:10), 500 K, ~9 bar,
contact time ~1 ms:

4 NH₃(g) + 5 O₂(g) → 4 NO(g) + 6 H₂O(g)   ΔH = −905 kJ   *(exothermic — self-sustaining;
   the gauze glows)*

Selectivity matters: at the right T/contact time NO dominates; too hot / too slow gives the
unwanted 4 NH₃ + 3 O₂ → 2 N₂ + 6 H₂O.

**Step 2 — air oxidation of NO** on cooling:

2 NO(g) + O₂(g) ⇌ 2 NO₂(g)   *(exothermic; favoured by low T and higher P)*

**Step 3 — absorption of NO₂ in water** with excess air, in a countercurrent tower:

3 NO₂(g) + H₂O(l) → 2 HNO₃(aq) + NO(g)   *(NO recycled to step 2)*
or, with excess air:  4 NO₂ + O₂ + 2 H₂O → 4 HNO₃

**Concentration.** The tower acid is ≈ **68 % HNO₃** — the **constant-boiling azeotrope**
(b.p. 393.4 K). Stronger acid ("fuming", 98 %+) is made by distilling with **conc. H₂SO₄**
or **Mg(NO₃)₂** as a dehydrating agent.

## 14.3 Structure


![Fig. Nitric acid (planar) and the trigonal-planar nitrate ion.](/notes/nitrogen-family/n_hno3.svg)

- **Gas phase:** planar; N is **sp²**; two equivalent N–O bonds (121 pm, partial double,
  resonance) and one longer N–OH bond (140 pm); ∠O–N–O 130°; covalence of N = **4**.
- **Aqueous:** essentially completely ionised — HNO₃ + H₂O → H₃O⁺ + **NO₃⁻**. The nitrate
  ion is **trigonal planar (D₃ₕ)**, all three N–O equal (124 pm), bond order 1.33,
  isoelectronic with CO₃²⁻ and BO₃³⁻.

## 14.4 Physical properties

Pure HNO₃ — colourless, fuming liquid; f.p. 231.4 K, b.p. 355.6 K; sp. gr. 1.51.
Laboratory acid ≈ 68 %. Turns **yellow-brown** on standing / in light (partial decomposition,
NO₂ dissolves):

4 HNO₃ → 4 NO₂ + 2 H₂O + O₂

## 14.5 Chemical properties

### (a) As an acid — strong, monobasic

MgO + 2 HNO₃ → Mg(NO₃)₂ + H₂O
CaCO₃ + 2 HNO₃ → Ca(NO₃)₂ + H₂O + CO₂
NaOH + HNO₃ → NaNO₃ + H₂O
NH₃ + HNO₃ → NH₄NO₃

### (b) As an oxidising agent — the dominant chemistry

Because NO₃⁻ is reduced in preference to H⁺, **H₂ is almost never evolved** with a metal.
The N-containing product depends on **concentration, temperature and the reducing power of
the metal**:

| Metal / condition | N product | Balanced equation |
|:--|:--|:--|
| Cu + dilute HNO₃ | **NO** | 3 Cu + 8 HNO₃(dil) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O |
| Cu + conc. HNO₃ | **NO₂** | Cu + 4 HNO₃(conc) → Cu(NO₃)₂ + 2 NO₂ + 2 H₂O |
| Zn + very dilute HNO₃ | **NH₄NO₃** | 4 Zn + 10 HNO₃(v.dil) → 4 Zn(NO₃)₂ + NH₄NO₃ + 3 H₂O |
| Zn + dilute HNO₃ | **N₂O** | 4 Zn + 10 HNO₃(dil) → 4 Zn(NO₃)₂ + N₂O + 5 H₂O |
| Zn + conc. HNO₃ | **NO₂** | Zn + 4 HNO₃(conc) → Zn(NO₃)₂ + 2 NO₂ + 2 H₂O |
| Sn + conc. HNO₃ | NO₂ + **metastannic acid** | Sn + 4 HNO₃(conc) → H₂SnO₃↓ + 4 NO₂ + H₂O |

> **Reading the table:** more dilute acid + more active metal → nitrogen is reduced
> **further** (NO₂ → NO → N₂O → NH₄⁺). Cold, very dilute HNO₃ + Mg/Mn can even give H₂
> (the only case).

### (c) Passivity

**Fe, Co, Ni, Cr, Al** become **passive** with **cold conc. HNO₃** — a thin, coherent,
impervious oxide film forms and stops further attack. Hence conc. HNO₃ is stored and
shipped in **aluminium** containers. (Dilute HNO₃ *does* dissolve iron.)

### (d) Action on non-metals — oxidised to their highest oxoacid; hot conc. acid, product NO₂

C + 4 HNO₃ → CO₂ + 4 NO₂ + 2 H₂O
S₈ + 48 HNO₃ → 8 H₂SO₄ + 48 NO₂ + 16 H₂O
P₄ + 20 HNO₃ → 4 H₃PO₄ + 20 NO₂ + 4 H₂O
I₂ + 10 HNO₃ → 2 HIO₃ + 10 NO₂ + 4 H₂O
As, Sb → the +5 oxoacid / oxide;  B → H₃BO₃;  Sn → H₂SnO₃

### (e) Aqua regia (3 vol conc. HCl : 1 vol conc. HNO₃)

Dissolves the noble metals **Au and Pt** (neither acid alone can). HNO₃ supplies the
oxidising power (nascent Cl / [O]); Cl⁻ stabilises the metal ion as a chloro-complex:

Au + 4 H⁺ + NO₃⁻ + 4 Cl⁻ → [AuCl₄]⁻ + NO + 2 H₂O
3 Pt + 16 H⁺ + 4 NO₃⁻ + 18 Cl⁻ → 3 [PtCl₆]²⁻ + 4 NO + 8 H₂O

### (f) Brown-ring test for the nitrate ion


![Fig. Brown-ring test for the nitrate ion.](/notes/nitrogen-family/n_brownring.svg)

To the aqueous test solution add **freshly prepared FeSO₄**, then pour **conc. H₂SO₄ slowly
down the side** of the tube. A **brown ring** appears at the junction of the two layers:

NO₃⁻ + 3 Fe²⁺ + 4 H⁺ → NO + 3 Fe³⁺ + 2 H₂O
[Fe(H₂O)₆]²⁺ + NO → **[Fe(H₂O)₅(NO)]²⁺** (brown) + H₂O

The brown complex is Fe(I)–NO⁺ (or Fe(III)–NO⁻); it decomposes on warming (ring
disappears). **Br⁻ and I⁻ interfere** (also oxidised, giving brown colours) — remove them
first.

## 14.6 Uses of nitric acid

- **Ammonium nitrate** and calcium ammonium nitrate **fertilisers** (largest use).
- **Explosives:** TNT, nitroglycerine (→ dynamite), RDX, PETN, HMX, picric acid,
  **nitrocellulose** (guncotton, celluloid, lacquers); and pyrotechnics.
- **Nitration** in organic synthesis: nitrobenzene → aniline → dyes and drugs; adipic acid
  (nylon-6,6); terephthalic acid.
- **Pickling** and bright-dipping of stainless steel; **etching** and photo-engraving of
  metals and printing plates.
- Oxidiser (as **red fuming HNO₃ / N₂O₄**) in **liquid rocket propellants**.
- **Nuclear-fuel reprocessing** (the PUREX process dissolves spent fuel in hot HNO₃).
- Component of **aqua regia**; laboratory analytical reagent (digestion for AAS/ICP).


# 15. Phosphine, PH₃, and diphosphane

## 15.1 Preparation of phosphine


![Fig. Preparation of phosphine.](/notes/nitrogen-family/n_prepph3.svg)

Ca₃P₂ + 6 H₂O → 3 Ca(OH)₂ + **2 PH₃**
Ca₃P₂ + 6 HCl → 3 CaCl₂ + 2 PH₃
AlP + 3 H₂O → Al(OH)₃ + PH₃   *(the reaction that makes "Celphos"/aluminium-phosphide
   fumigant tablets so dangerous when damp)*
**P₄ + 3 NaOH + 3 H₂O →(boil, inert atm.) PH₃ + 3 NaH₂PO₂**   *(standard lab method; done
   under CO₂ or coal gas so the impure PH₃ does not ignite)*
PH₄I + KOH → KI + H₂O + PH₃   *(from the purified phosphonium salt — gives pure,
   non-inflammable PH₃)*

**Purification.** Impure PH₃ contains **diphosphane P₂H₄** (and P₄ vapour), which make it
**spontaneously inflammable**. Passing it into HI gives **PH₄I** (P₂H₄ stays behind);
treating PH₄I with warm KOH regenerates pure PH₃.

## 15.2 Structure and physical properties

- **Pyramidal**, P sp³, one lone pair; **∠H–P–H = 93.6°** (close to a pure-p 90° — poor
  s–p mixing on the large P atom; see §4/§5); P–H 142 pm; dipole moment only **0.58 D**
  (vs 1.47 D for NH₃).
- Colourless gas, **smell of rotten fish / garlic**; **very poisonous** (worse than HCN);
  b.p. 185 K (no H-bonding — contrast NH₃ 240 K).
- **Slightly soluble** in water, and the solution is **neutral** (PH₃ is a far weaker base
  than NH₃).
- Decaying organic matter in marshes and graveyards releases PH₃ + P₂H₄; the P₂H₄ ignites
  the PH₃ → the flickering "**will-o'-the-wisp**" (*ignis fatuus*).

## 15.3 Chemical properties

### (a) Very weak base (much weaker than NH₃)

PH₃ + HI → **PH₄I** (phosphonium iodide) — the only easily made phosphonium halide;
PH₄Cl and PH₄Br exist but are progressively less stable (decomposed by water, by traces of
base). Reason: the large, diffuse P lone pair overlaps poorly with the small H⁺; and P–H
bonds in PH₄⁺ are weaker than N–H in NH₄⁺.

> **∠H–P–H in PH₄⁺ (109.5°) > ∠H–P–H in PH₃ (93.6°).** In PH₄⁺ all four pairs are bonding
> (regular tetrahedron, sp³); in PH₃ the lone pair compresses the bond angle.

### (b) Reducing agent

3 CuSO₄ + 2 PH₃ → Cu₃P₂↓ (black) + 3 H₂SO₄
3 HgCl₂ + 2 PH₃ → Hg₃P₂↓ + 6 HCl
8 AgNO₃ + PH₃ + 4 H₂O → 8 Ag↓ + H₃PO₄ + 8 HNO₃
2 PH₃ + 3 O₂ → P₂O₃ + 3 H₂O   *(combustion)*
Explodes with Cl₂, Br₂ vapour, HNO₃, other strong oxidisers.

## 15.4 Uses


![Fig. Holme's signal.](/notes/nitrogen-family/n_holme.svg)

- **Holme's signals:** perforated containers of **CaC₂ + Ca₃P₂** are thrown into the sea;
  water liberates C₂H₂ + PH₃, the P₂H₄ impurity ignites the mixture, and the burning gas
  marks a position for ships / lifebuoys.
- **Smoke screens** (with the phosphine oxide aerosol).
- **Fumigant** for stored grain and in shipping containers (AlP, Zn₃P₂ tablets — release
  PH₃ on contact with atmospheric moisture); **rodenticide** (Zn₃P₂).
- **n-type dopant** for semiconductor silicon (PH₃ in the CVD gas stream).
- Feedstock for **organophosphorus compounds** (flame retardants, ligands, plasticisers).

## 15.5 Comparison NH₃ vs PH₃

| Property | NH₃ | PH₃ |
|:--|:--|:--|
| Bond angle | 107.8° (sp³-like) | 93.6° (≈ pure p) |
| b.p. | 240 K (H-bonded) | 185 K |
| Solubility in water | very high | slight |
| Basicity | weak base (Kb 1.8×10⁻⁵) | very weak (neutral solution) |
| Dipole moment | 1.47 D | 0.58 D |
| Reducing power | mild | strong |
| Thermal stability | stable to ~800 K | decomposes ~713 K |
| As a ligand | σ-donor only | σ-donor **and π-acceptor** (like CO) |


# 16. Oxides of phosphorus


![Fig. P4O6 and P4O10 cage structures.](/notes/nitrogen-family/n_poxides.svg)

## 16.1 Phosphorus(III) oxide, P₄O₆

- **Preparation:** burn white P in a **limited** supply of air/O₂: P₄ + 3 O₂ → P₄O₆.
- **Structure:** the **P₄ tetrahedron with an O atom inserted into each of the six P–P
  edges** (P–O–P bridges); every P is 3-coordinate and keeps a lone pair; cage symmetry Td.
- White, waxy, low-melting (m.p. 297 K) solid; **acidic oxide**:
  - with **cold** water: P₄O₆ + 6 H₂O → **4 H₃PO₃** (phosphorous acid);
  - with **hot** water it **disproportionates**: P₄O₆ + 6 H₂O(hot) → 3 H₃PO₄ + PH₃.
- Reducing (P in +3): reduces conc. H₂SO₄ → SO₂; oxidised by air/O₂ → P₄O₁₀.

## 16.2 Phosphorus(V) oxide, P₄O₁₀ ("phosphorus pentoxide")

- **Preparation:** burn P in **excess** dry air/O₂: P₄ + 5 O₂ → **P₄O₁₀**.
- **Structure:** the P₄O₆ cage **plus one terminal P=O on each of the four P atoms** — every
  P is now 4-coordinate (tetrahedral); the terminal P=O has strong **pπ–dπ** character
  (P–O 143 pm, shorter than the 160 pm bridges). Exists also as polymeric and glassy forms.
- White, snow-like, **fluffy solid**; **strongly acidic** oxide — the anhydride of
  phosphoric acid:
  - P₄O₁₀ + 6 H₂O(hot) → **4 H₃PO₄**;
  - P₄O₁₀ + 2 H₂O(cold, limited) → 4 HPO₃ (metaphosphoric acid).
- **One of the most powerful drying/dehydrating agents known** — takes water even from
  other acids:
  - 4 HNO₃ + P₄O₁₀ → 2 **N₂O₅** + 4 HPO₃
  - 2 HClO₄ + P₄O₁₀ → **Cl₂O₇** + 2 HPO₃
  - dehydrates amides → nitriles (R–CONH₂ → R–CN), and RCOOH → acid anhydride.

**Uses of P₄O₁₀:** laboratory **desiccant** (in vacuum desiccators, gas-drying trains — the
most efficient common drying agent, residual moisture < 10⁻⁵ mg L⁻¹); **dehydrating agent**
in organic synthesis; manufacture of **high-purity phosphoric acid** ("thermal" or "dry"
process — burn P, hydrate P₄O₁₀); in glasses and optical materials.

## 16.3 Comparison

| Property | P₄O₆ | P₄O₁₀ |
|:--|:--|:--|
| Ox. state of P | +3 | +5 |
| Coordination of P | 3 (pyramidal, lone pair) | 4 (tetrahedral, terminal P=O) |
| Hydrolysis product | H₃PO₃ (cold); H₃PO₄ + PH₃ (hot) | H₃PO₄ (hot); HPO₃ (cold) |
| Redox | reducing (P III) | neither |
| Drying power | moderate | extreme |


# 17. Phosphorus halides

## 17.1 Phosphorus trichloride, PCl₃


![Fig. NH4+, PCl3 and POCl3.](/notes/nitrogen-family/n_smallstruct.svg)

**Preparation:**

P₄ + 6 Cl₂ → 4 PCl₃   *(dry Cl₂ over gently heated white P; PCl₃ distils off; excess Cl₂
   would give PCl₅)*
P₄ + 8 SOCl₂ → 4 PCl₃ + 4 SO₂ + 2 S₂Cl₂

**Structure:** pyramidal, P sp³, one lone pair; ∠Cl–P–Cl 100°; P–Cl 204 pm.

**Physical:** colourless, fuming, low-boiling liquid (b.p. 349 K); poisonous.

**Reactions:**

PCl₃ + 3 H₂O → **H₃PO₃** + 3 HCl   *(violent; fumes in moist air)*
3 CH₃COOH + PCl₃ → 3 CH₃COCl + H₃PO₃
3 C₂H₅OH + PCl₃ → 3 C₂H₅Cl + H₃PO₃   *(a standard –OH → –Cl conversion)*
PCl₃ + Cl₂ → PCl₅
PCl₃ + ½ O₂ → POCl₃   *(also PCl₃ + SO₃ → POCl₃ + SO₂)*
PCl₃ + S → PSCl₃
PCl₃ + 3 NH₃ → P(NH₂)₃ + 3 HCl
PCl₃ + 3 R–MgX → PR₃ + 3 MgXCl   *(route to phosphine ligands)*

**Uses:** the workhorse for making **PCl₅, POCl₃, PSCl₃**; converting alcohols/acids to
chlorides; manufacture of **organophosphorus pesticides** (malathion, glyphosate
intermediates, chlorpyrifos), **flame retardants**, **phosphite antioxidants** and
**plasticisers**, and phosphonate scale-inhibitors.

## 17.2 Phosphorus pentachloride, PCl₅


![Fig. PCl5 — trigonal bipyramidal in the gas, ionic in the solid.](/notes/nitrogen-family/n_pcl5.svg)

**Preparation:**

P₄ + 10 Cl₂ → 4 PCl₅   *(Cl₂ in excess)*
PCl₃ + Cl₂ → PCl₅
P₄ + 10 SO₂Cl₂ → 4 PCl₅ + 10 SO₂

**Physical / thermal:** pale greenish-yellow solid; **sublimes ~435 K**; on stronger heating
**dissociates**: PCl₅ ⇌ PCl₃ + Cl₂ (hence PCl₅ can act as a chlorinating agent / Cl₂
source).

**Structure — a classic three-way question:**

- **gas / liquid / non-polar solvent:** **trigonal bipyramidal, sp³d**. The **three
  equatorial** P–Cl bonds (202 pm) are **shorter and stronger** than the **two axial** bonds
  (240 pm), because each axial bond suffers **three 90° bond-pair repulsions** whereas each
  equatorial bond suffers only **two**. So the five bonds are **not equivalent**.
- **solid state:** **ionic** — **[PCl₄]⁺ (tetrahedral) [PCl₆]⁻ (octahedral)**.
- **PBr₅ (solid)** = **[PBr₄]⁺ Br⁻** (six Br⁻ cannot fit around P); **PI₅** does not exist
  (I too large; I⁻ would reduce P(V)).

**Reactions:**

PCl₅ + H₂O(trace) → POCl₃ + 2 HCl;   POCl₃ + 3 H₂O → **H₃PO₄** + 3 HCl
PCl₅ + 4 D₂O → D₃PO₄ + 5 DCl
C₂H₅OH + PCl₅ → C₂H₅Cl + POCl₃ + HCl
CH₃COOH + PCl₅ → CH₃COCl + POCl₃ + HCl
2 Ag + PCl₅ → 2 AgCl + PCl₃
Sn + 2 PCl₅ → SnCl₄ + 2 PCl₃
PCl₅ + NH₄Cl →(heat) → (NPCl₂)ₙ (phosphazenes) + HCl
PCl₅ + SO₂ → POCl₃ + SOCl₂
PCl₅ + P₄O₁₀ → POCl₃

**Uses:** powerful **chlorinating agent** in organic chemistry — R–OH → R–Cl,
R–COOH → R–COCl, R–SO₃H → R–SO₂Cl, >C=O → >CCl₂; catalyst; manufacture of **POCl₃**
(→ flame retardants, plasticisers, phosphate esters) and of **phosphazene polymers**
(oil- and fire-resistant elastomers).

## 17.3 Phosphoryl chloride, POCl₃

- From PCl₃ + ½O₂, PCl₅ + P₄O₁₀, or PCl₅ + H₂O(trace).
- Tetrahedral, P sp³, **one P=O** (pπ–dπ) and three P–Cl.
- Hydrolyses: POCl₃ + 3 H₂O → H₃PO₄ + 3 HCl.
- Uses: making **trialkyl/triaryl phosphates** (TCP, TPP — plasticisers, flame retardants,
  hydraulic fluids), **phosphate ester pesticides**, and as the reagent in the **Vilsmeier
  formylation** (with DMF).

## 17.4 Trends in the halides

> **Covalent character of EX₃** — Increasing: EF₃ < ECl₃ < EBr₃ < EI₃ (larger, more
> polarisable X⁻); and BiF₃ is **ionic** (large Bi³⁺, small hard F⁻). Fajans' rules.

> **Ease of hydrolysis of PX₃/PX₅** — PF bonds hydrolyse slowly (strong P–F); PCl, PBr fast;
> and the N trihalides hydrolyse **the other way** (→ NH₃ + HOX), except **NF₃ which does
> not hydrolyse at all** (strong N–F, no lone-pair donation possible, no vacant orbital).

> **Thermal stability of pentahalides** — PF₅ > PCl₅ > PBr₅ (PI₅ absent). AsF₅, SbF₅ stable;
> **BiF₅ only**, and it is a ferocious fluorinating agent and oxidiser.


# 18. Oxoacids of phosphorus


![Fig. Oxoacids of phosphorus and the three governing rules.](/notes/nitrogen-family/n_poxoacids.svg)

## 18.1 The full set

| Name | Formula | Ox. state of P | Basicity | Characteristic bonds | Preparation |
|:--|:--|:--:|:--:|:--|:--|
| **Hypophosphorous** (phosphinic) | H₃PO₂ | +1 | **1** | 1 P–OH, **2 P–H**, 1 P=O | white P₄ + NaOH → NaH₂PO₂; then acidify |
| **Orthophosphorous** (phosphonic) | H₃PO₃ | +3 | **2** | 2 P–OH, **1 P–H**, 1 P=O | P₄O₆ + 3 H₂O; or PCl₃ + 3 H₂O |
| **Pyrophosphorous** | H₄P₂O₅ | +3 | 2 | 2 P–OH, 2 P–H, 2 P=O | PCl₃ + H₃PO₃ |
| **Hypophosphoric** | H₄P₂O₆ | **+4** | 4 | 4 P–OH, 2 P=O, **1 P–P** | controlled oxidation of red P; Na salt then acidify |
| **(Ortho)phosphoric** | H₃PO₄ | +5 | **3** | 3 P–OH, 1 P=O | P₄O₁₀ + 6 H₂O; or Ca₃(PO₄)₂ + 3 H₂SO₄ |
| **Pyrophosphoric** (diphosphoric) | H₄P₂O₇ | +5 | 4 | 4 P–OH, 2 P=O, **1 P–O–P** | heat H₃PO₄ to ≈ 510 K |
| **Metaphosphoric** | (HPO₃)ₙ | +5 | 1 per P | 3 P–OH, 3 P=O, 3 P–O–P (per ring unit) | heat H₃PO₄ strongly; or P₄O₁₀ + cold H₂O |

## 18.2 The three governing rules

**Rule 1 — geometry.** In *every* phosphorus oxoacid, P is **tetrahedrally** four-coordinate
and has **at least one P=O and one P–OH** bond.

**Rule 2 — basicity = number of –OH groups only.**
Hydrogen bonded **directly to P is NOT ionisable** — it does not contribute to basicity.
So: H₃PO₂ (one –OH) is **monobasic**; H₃PO₃ (two –OH) is **dibasic**; H₃PO₄ (three –OH) is
**tribasic**.

**Rule 3 — a P–H bond makes the acid a strong reducing agent.**
> **Reducing power** — Decreasing order: **H₃PO₂ (2 P–H) > H₃PO₃ (1 P–H) > H₃PO₄ (0 P–H,
> non-reducing)**.

## 18.3 Individual acids — reactions and uses

### Hypophosphorous acid, H₃PO₂

- Structure: **HO–P(=O)(H)₂** — one –OH, **two P–H**.
- **Strong reducing agent** — precipitates metals:
  4 AgNO₃ + 2 H₂O + H₃PO₂ → 4 Ag↓ + 4 HNO₃ + H₃PO₄
  2 CuSO₄ + 2 H₂O + H₃PO₂ → 2 Cu↓ + 2 H₂SO₄ + H₃PO₄
- Disproportionates on heating: 3 H₃PO₂ → 2 H₃PO₃ + PH₃  (then H₃PO₃ → H₃PO₄ + PH₃).
- **Uses:** **NaH₂PO₂ in electroless nickel plating** (deposits a hard Ni–P alloy on
  plastics, aluminium, complex shapes without an external current); antioxidant; reducing
  agent in the manufacture of aryl compounds (removes –N₂⁺).

### Phosphorous acid, H₃PO₃

- Structure: **HO–P(=O)(H)(OH)** — two –OH, **one P–H**; dibasic → salts NaH₂PO₃ and
  Na₂HPO₃ only (there is no "Na₃PO₃").
- **Reducing** (one P–H): AgNO₃ → Ag; HgCl₂ → Hg₂Cl₂ → Hg; SO₂ from hot conc. H₂SO₄;
  decolourises bromine water.
- **Disproportionates on heating:** 4 H₃PO₃ → 3 H₃PO₄ + PH₃.
- Uses: making phosphite salts (Ca, K phosphite — **fungicides / plant "biostimulants"**),
  lead phosphite PVC stabilisers, and dialkyl phosphites (organophosphorus synthesis).

### Orthophosphoric acid, H₃PO₄

- Structure: **O=P(OH)₃**, tetrahedral, three ionisable –OH → **tribasic**:
  H₃PO₄ (Ka₁ 7.1×10⁻³) ⇌ H₂PO₄⁻ (Ka₂ 6.3×10⁻⁸) ⇌ HPO₄²⁻ (Ka₃ 4.5×10⁻¹³) ⇌ PO₄³⁻.
  Three series of salts: **dihydrogenphosphate** (NaH₂PO₄, acidic), **hydrogenphosphate**
  (Na₂HPO₄, weakly basic), **phosphate** (Na₃PO₄, basic).
- **Non-volatile, non-oxidising, non-reducing**, syrupy (85 %) liquid; a **moderately weak
  acid**.
- On heating, a **condensation (loss of water) series**:
  2 H₃PO₄ →(510 K) **H₄P₂O₇** (pyro) →(590 K) **(HPO₃)ₙ** (meta) →(red heat) P₄O₁₀ residue.
- **Reactions:**
  Ca₃(PO₄)₂ + 4 H₃PO₄ → 3 Ca(H₂PO₄)₂   *(making "triple superphosphate" fertiliser)*
  Ca₃(PO₄)₂ + 2 H₂SO₄ → Ca(H₂PO₄)₂ + 2 CaSO₄   *("superphosphate of lime")*
  H₃PO₄ + 3 AgNO₃ → Ag₃PO₄↓ (yellow) + 3 HNO₃   *(test for phosphate, soluble in HNO₃ and NH₃)*
  12 (NH₄)₂MoO₄ + H₃PO₄ + 21 HNO₃ → (NH₄)₃[PMo₁₂O₄₀]↓ (canary-yellow) + 21 NH₄NO₃ + 12 H₂O
    *(ammonium phosphomolybdate — the sensitive analytical test for phosphate)*
- **Uses:** food-grade **acidulant** in cola drinks, jams, cheese; **rust converter** and
  metal-surface phosphating before painting (**Parkerising**/bonderising); fertilisers
  (ammonium phosphates, triple superphosphate); **detergent builders** (via phosphates);
  dental cements; catalyst (supported H₃PO₄ for alkene hydration, cumene process); dabigatran
  and other pharma salts; electropolishing of aluminium and stainless steel; flux for
  soldering.

### Metaphosphoric and polyphosphoric acids / phosphates


![Fig. Cyclic metaphosphate and polyphosphate (Graham's salt / Calgon).](/notes/nitrogen-family/n_condensedphosphate.svg)

- **Cyclic** (HPO₃)₃, (HPO₃)₄ and long-chain **polyphosphates** ([PO₃]ⁿ⁻ chains).
- **Sodium tripolyphosphate Na₅P₃O₁₀** and **"Calgon" sodium hexametaphosphate (NaPO₃)₆**
  **sequester Ca²⁺/Mg²⁺** as soluble complexes → **water softening**, **detergent builders**
  (now restricted for eutrophication reasons), **boiler-scale and corrosion inhibitors**,
  food additives (emulsifying salts in processed cheese, moisture binders in meat and
  seafood).

## 18.4 Ordered summary

> **Acid strength (same element, different oxidation state)** — Increasing:
> **H₃PO₂ < H₃PO₃ < H₃PO₄**  (and, for nitrogen, **HNO₂ < HNO₃**).
> Reason: more terminal **E=O** groups withdraw electron density from the O–H bonds, so H⁺
> is released more readily (Pauling's rule: pKa₁ ≈ 8 − 5m, where m = number of E=O groups).

> **Basicity** — H₃PO₂ (1) < H₃PO₃ (2) < H₃PO₄ (3); H₄P₂O₇ (4); (HPO₃)ₙ (1 per P).

> **Reducing power** — H₃PO₂ > H₃PO₃ > H₃PO₄ (0). Tracks the number of **P–H** bonds.

> **Thermal behaviour** — the lower-oxidation-state acids (H₃PO₂, H₃PO₃) **disproportionate**
> to H₃PO₄ + PH₃; H₃PO₄ **condenses** (loses water) to pyro- and meta-acids.


# 19. Phosphates in biology and the environment (context)

- **ATP / ADP** — the "energy currency" of the cell; the P–O–P (phosphoanhydride) bonds
  release ≈ 30 kJ mol⁻¹ on hydrolysis (a "high-energy" bond because of relief of charge
  repulsion and better resonance/solvation of the products).
- **DNA / RNA** — the sugar–phosphate backbone is a **phosphodiester** chain; phosphate is
  ideal because it can link two sugars and still carry a negative charge that keeps the
  molecule in the cell and resistant to hydrolysis (F. H. Westheimer's argument).
- **Bone and teeth** — **hydroxyapatite Ca₅(PO₄)₃OH**; fluoride converts it to the
  acid-resistant **fluorapatite Ca₅(PO₄)₃F** (why water and toothpaste are fluoridated).
- **Eutrophication** — phosphate from fertiliser run-off and (historically) detergents is
  the usual **limiting nutrient** in fresh water; excess → algal bloom → O₂ depletion →
  fish kill. The "phosphorus problem": phosphate rock is a finite, geographically
  concentrated resource with no substitute in agriculture.


# 20. Arsenic, antimony and bismuth — comparative chemistry

## 20.1 The elements

- **As** — grey (metallic) form is the stable one; sublimes on heating (yellow As₄ vapour);
  tarnishes in air; burns to As₄O₆ with a garlic smell.
- **Sb** — brittle, bluish-white, lustrous; expands slightly on freezing; used to harden
  lead.
- **Bi** — pinkish, brittle, the **most diamagnetic** and one of the **poorest metallic
  conductors**; **expands ≈ 3.3 % on solidifying** (like water, Ga, Ge) — so it takes sharp
  impressions in **type-metal** and **low-melting alloys**.

## 20.2 Oxides and hydroxides

| Oxide | Ox. state | Acid–base character |
|:--|:--:|:--|
| As₄O₆ | +3 | **amphoteric, mainly acidic** — dissolves in NaOH → arsenite AsO₃³⁻; in conc. HCl → AsCl₃ |
| As₂O₅ / H₃AsO₄ | +5 | acidic; H₃AsO₄ a weak tribasic acid, mild oxidiser (→ H₃AsO₃) |
| Sb₄O₆ | +3 | **amphoteric** — → antimonite in base, SbCl₃ in acid |
| Sb₂O₅ / [Sb(OH)₆]⁻ | +5 | weakly acidic; Sb(V) mildly oxidising |
| **Bi₂O₃** | +3 | **basic only** — dissolves in acids to give Bi³⁺ salts, insoluble in alkali |
| NaBiO₃ | +5 | the only common Bi(V) — a **very strong oxidiser** |

> **Acidic → basic character of the E₄O₆ / E₂O₃ oxides** — Decreasing acidity:
> **N₂O₃ > P₄O₆ > As₄O₆ > Sb₄O₆ > Bi₂O₃**  (acidic → acidic → amphoteric → amphoteric →
> basic). Exactly parallels increasing metallic character.

## 20.3 Halides and the "oxo-salt" behaviour of Bi

AsCl₃ + 3 H₂O ⇌ H₃AsO₃ + 3 HCl   *(reversible)*
SbCl₃ + H₂O ⇌ **SbOCl↓** + 2 HCl   *(basic chloride — "powder of algaroth")*
BiCl₃ + H₂O ⇌ **BiOCl↓** (white) + 2 HCl
Bi(NO₃)₃ + H₂O ⇌ **BiONO₃↓** + 2 HNO₃

> **Hydrolysis of the trichlorides** — increasingly gives an **insoluble oxo/hydroxo salt**
> down the group (P: complete → H₃PO₃; As: reversible; Sb, Bi: oxo-chloride precipitates).
> This is why **Bi and Sb salt solutions must be kept strongly acidic**.

## 20.4 Sulphides — the qualitative-analysis chemistry (Group II)

As₂S₃ (yellow), Sb₂S₃ (orange), Bi₂S₃ (brown/black) all precipitate with H₂S in acid.

- As₂S₃ and Sb₂S₃ **dissolve in yellow ammonium sulphide** (form thio-salts
  AsS₄³⁻ / SbS₄³⁻) — the basis of separating **Group IIA (Cu²⁺, Bi³⁺, Pb²⁺, Cd²⁺)** from
  **Group IIB (As, Sb, Sn)** in classical qualitative analysis.
- **Bi₂S₃ does not dissolve** in (NH₄)₂Sₓ (Bi is a metal — no thio-anion) → stays with the
  copper group.

## 20.5 A few characteristic reactions and tests

- **Marsh test (As, Sb):** the sample + Zn + H₂SO₄ → AsH₃ / SbH₃; passed through a heated
  glass tube → a **mirror** of As (soluble in NaOCl) or Sb (insoluble in NaOCl).
- **NaBiO₃ test for Mn²⁺:** 2 Mn²⁺ + 5 NaBiO₃ + 14 H⁺ → 2 MnO₄⁻ + 5 Bi³⁺ + 5 Na⁺ + 7 H₂O
  (purple colour) — the sharpest confirmatory test for manganese.
- **Bismuth "mirror"** and pink bead in the borax-bead / charcoal-cavity tests.


# 21. Uses of Group 15 elements and their compounds

| Element / compound | Principal uses |
|:--|:--|
| **N₂** | NH₃ & HNO₃ feedstock; inert atmosphere (steel, electronics, food packaging); **liquid N₂** cryogen (food, biobanking, cryosurgery, superconductor cooling); tyre and beverage gas |
| **NH₃** | fertilisers (urea, AN, AS); HNO₃; Solvay soda; refrigerant R-717; nylon-6,6; explosives precursor; SCR of NOₓ; household cleaner |
| **HNO₃** | fertilisers (AN, CAN); explosives (TNT, NG, RDX, nitrocellulose); nitrations for dyes & drugs; adipic acid (nylon); pickling steel; rocket oxidiser; nuclear-fuel reprocessing |
| **N₂O** | anaesthetic / analgesic ("laughing gas"); aerating agent (whipped cream); engine power-boost oxidiser; ATC monopropellant |
| **N₂H₄ / MMH / UDMH** | rocket and satellite propellant; boiler O₂ scavenger; foam blowing agent; drug (isoniazid) synthesis |
| **NaN₃** | automobile **air-bag** gas generator; NaN₃ → Pb(N₃)₂ **detonator**; biocide in lab reagents |
| **White P** | H₃PO₄, PCl₃/PCl₅, P₄S₃ (matches), organophosphorus pesticides; incendiary shells & smoke screens; Zn₃P₂ rat poison |
| **Red P** | **safety-match** striker (with glass powder & glue); flame retardant in plastics; flares, smoke munitions; methamphetamine-precursor control item |
| **PH₃ / metal phosphides** | grain **fumigant** (AlP, Zn₃P₂); rodenticide; n-type Si dopant; Holme's signals; smoke screens |
| **H₃PO₄ & phosphates** | fertilisers; **cola** acidulant; rust converter / metal phosphating; detergent builders (STPP); baking powder; toothpaste abrasive; food emulsifiers; fire retardants; dental cement |
| **P₄O₁₀** | most powerful common **desiccant**; dehydrating agent in synthesis; thermal H₃PO₄ |
| **PCl₃, PCl₅, POCl₃** | chlorinating reagents; make pesticides, flame retardants, plasticisers (TCP, TPP), phosphate esters, phosphazene polymers |
| **As compounds** | **GaAs / InAs semiconductors** (high-speed electronics, LEDs, lasers, solar cells); wood preservative (CCA — being phased out); historically Paris green, Fowler's solution, Salvarsan (first "magic bullet" antisyphilitic); As₂O₃ ("Trisenox") treats acute promyelocytic leukaemia |
| **Sb compounds** | **Sb₂O₃ flame retardant** synergist (with halogens) in plastics, textiles, rubber; Sb in **lead–acid battery grids** and type metal / bearing (Babbitt) metal; SbCl₃/SbCl₅ catalysts and mordants; glass decolouriser; historically tartar emetic (antschistosomal) |
| **Bi compounds** | **bismuth subsalicylate** (Pepto-Bismol) and subnitrate/subcarbonate — antacid, antidiarrhoeal, anti-*H. pylori*; **non-toxic "green" replacement for lead** in solders, free-machining brass, fishing weights, shot, ceramic glazes; **low-melting fusible alloys** (Wood's, Rose's, Field's metal — fire sprinklers, safety plugs, dental & medical casting); BiOCl "pearl" pigment in cosmetics; Bi₂O₃ in X-ray-opaque materials and high-Tc superconductors (BSCCO) |


# 22. One-page reaction networks

## 22.1 Nitrogen network

    N₂  ──(Haber: 3H₂, Fe, 700 K, 200 atm)──▶  NH₃
    N₂  ──(Mg, Δ)──▶  Mg₃N₂  ──(H₂O)──▶  NH₃ + Mg(OH)₂
    N₂  ──(O₂, 2000 K / arc)──▶  NO  ──(O₂)──▶  NO₂  ⇌  N₂O₄

    NH₃ ──(Pt/Rh, 500 K, O₂)──▶ NO ──(O₂)──▶ NO₂ ──(H₂O, air)──▶ HNO₃      [Ostwald]
    NH₃ ──(NaOCl)──▶ N₂H₄                         [Raschig]
    NH₃ ──(HNO₃)──▶ NH₄NO₃ ──(Δ, 520 K)──▶ N₂O
    NH₃ ──(HCl)──▶ NH₄Cl ──(Δ)──▶ NH₃ + HCl
    NH₃ ──(3 CuO, Δ)──▶ N₂ + Cu + H₂O
    NH₃ ──(3 Cl₂ excess)──▶ NCl₃ ;  (8 NH₃ excess + 3 Cl₂)──▶ N₂ + NH₄Cl

    HNO₃(dil) + Cu ──▶ NO      HNO₃(conc) + Cu ──▶ NO₂
    HNO₃(v.dil) + Zn ──▶ NH₄NO₃    HNO₃(dil) + Zn ──▶ N₂O
    HNO₃(conc) + C/S/P/I₂ ──▶ CO₂ / H₂SO₄ / H₃PO₄ / HIO₃  (+ NO₂)
    3 HCl + HNO₃ (aqua regia) + Au ──▶ [AuCl₄]⁻ + NO

    N₂H₄ + HNO₂ ──▶ HN₃ ;  NaNH₂ + N₂O ──▶ NaN₃ ──(Δ)──▶ Na + N₂  [air-bag]

## 22.2 Phosphorus network

    Ca₃(PO₄)₂ ──(C, SiO₂, 1700 K, electric furnace)──▶ P₄ (white)
    P₄ ──(573 K, inert)──▶ red P ──(803 K, sealed)──▶ black P

    P₄ ──(O₂ limited)──▶ P₄O₆ ──(cold H₂O)──▶ H₃PO₃
    P₄ ──(O₂ excess)──▶ P₄O₁₀ ──(hot H₂O)──▶ H₃PO₄ ──(Δ)──▶ H₄P₂O₇ ──(Δ)──▶ (HPO₃)ₙ
    P₄ ──(Cl₂ limited)──▶ PCl₃ ──(Cl₂)──▶ PCl₅
       PCl₃ ──(H₂O)──▶ H₃PO₃ + HCl        PCl₅ ──(H₂O)──▶ POCl₃ ──(H₂O)──▶ H₃PO₄
    P₄ ──(NaOH, H₂O, boil, inert)──▶ PH₃ + NaH₂PO₂
    Ca₃P₂ ──(H₂O / HCl)──▶ PH₃
    P₄O₁₀ + 4 HNO₃ ──▶ 2 N₂O₅ + 4 HPO₃   (P₄O₁₀ as dehydrator)

    H₃PO₂ ──(Δ)──▶ H₃PO₃ + PH₃ ;  4 H₃PO₃ ──(Δ)──▶ 3 H₃PO₄ + PH₃   [disproportionation]
    4 AgNO₃ + H₃PO₂ + 2 H₂O ──▶ 4 Ag + H₃PO₄ + 4 HNO₃


# 23. JEE-Advanced traps and derived tools

## 23.1 Traps

1. **Covalence of N is always ≤ 4.** In HNO₃, NO₃⁻, N₂O₅, NO₂⁺ the covalence is **4**, not 5,
   even though the oxidation state is +5.
2. **NCl₃ hydrolysis → NH₃ + HOCl** (N stays −3, not a redox); **PCl₃ hydrolysis →
   H₃PO₃ + HCl**. Opposite because P is δ⁺ and expands its octet, N is δ⁻ and cannot.
3. **NF₃ does not hydrolyse** and has an **abnormally low dipole moment** (0.23 D) — the N
   lone-pair moment and the three N–F bond moments **oppose** (F is more electronegative
   than N, so bond moments point N→F, away from the lone pair). In NH₃ they **add**
   (μ = 1.47 D).
4. **ΔₑgH of N is positive.** N does *not* readily accept an electron.
5. **ΔᵢH order down Group 15 has a kink:** ΔᵢH₁ falls smoothly, but **ΔᵢH₂(Bi) > ΔᵢH₂(Sb)**
   and **ΔᵢH₃(Bi) > ΔᵢH₃(Sb)** (poor 4f/5d shielding).
6. **HNO₂ both oxidises and reduces**; on warming it **disproportionates** (3 HNO₂ →
   HNO₃ + 2 NO + H₂O).
7. **The five P–Cl bonds in gaseous PCl₅ are not equivalent** (axial 240 pm > equatorial
   202 pm). **Solid PCl₅ = [PCl₄]⁺[PCl₆]⁻**; **solid PBr₅ = [PBr₄]⁺Br⁻**; **PI₅ does not
   exist**.
8. **Basicity of oxoacids of P:** H₃PO₃ is **di**basic and H₃PO₂ is **mono**basic — count
   –OH groups, not H atoms. P–H hydrogen is not acidic.
9. **Bond angle H–E–H:** NH₃ (107.8°) > PH₃ (93.6°) > AsH₃ (91.8°) > SbH₃ (91.3°).
   And **∠HPH in PH₄⁺ (109.5°) > ∠HPH in PH₃**.
10. **Reducing power of hydrides:** NH₃ ≪ PH₃ < AsH₃ < SbH₃ < BiH₃; **thermal stability the
    reverse**; **boiling point:** NH₃ > SbH₃ > AsH₃ > PH₃ (NH₃ H-bonded, then van der Waals).
11. **Bi(V) (NaBiO₃) is a stronger oxidiser than HNO₃**; used to oxidise Mn²⁺ → MnO₄⁻.
12. **N₂O is neutral, not the anhydride of any acid.** So are NO and (mostly) CO.
13. **Brown-ring test:** the ring is **[Fe(H₂O)₅NO]²⁺**; needs **conc. H₂SO₄** for nitrate,
    only **dilute acid** for nitrite.
14. **Metallic character increases down the group** — the reverse of the across-a-period
    trend. C/N/O first-row are all non-metals; Bi/Pb are metals.
15. **Only NF₃ among nitrogen trihalides is stable and non-explosive.**

## 23.2 Derived tools

> **Pauling's rule for oxoacid strength.** For an oxoacid (HO)ₚE(=O)_q, pKa₁ ≈ **8 − 5q**,
> where q = number of terminal E=O groups.
> - HNO₃ (q = 2): pKa₁ ≈ −2 → strong.  HNO₂ (q = 1): pKa₁ ≈ 3 → weak.
> - H₃PO₄, H₃PO₃, H₃PO₂ all have **q = 1** → all have pKa₁ ≈ 2–3 (similar), and the *number
>   of steps* is set by the number of –OH.

> **"Odd electron ⇒ paramagnetic ⇒ tends to dimerise."** NO (→ (NO)₂ in solid), NO₂ (→ N₂O₄).
> Applies again to ClO₂, and contrasts with the even-electron, still-paramagnetic O₂.

> **"δ⁺ central atom + vacant orbital ⇒ hydrolysis at the central atom;
> δ⁻ central atom or no vacant orbital ⇒ hydrolysis at the substituent (or no hydrolysis)."**
> PCl₃, PCl₅, BCl₃, SiCl₄ → hydrolyse at P/B/Si.  NCl₃ → hydrolyses at Cl.  NF₃, SF₆,
> CCl₄ → do not hydrolyse (kinetic protection / no accessible orbital).

> **Inert-pair ⇒ oxidiser/reductant map.** Down a p-block group the higher state becomes a
> stronger oxidiser: **Tl(III), Pb(IV), Bi(V)** all oxidise; the lower state of the lighter
> members reduces: **Ga(I)?, Ge(II), Sn(II), Sb(III), As(III)**.


# 24. Ultra-fast final revision

- **Config ns²np³** → half-filled p → **high ΔᵢH**, **ΔₑgH of N is +ve**.
- **Group state +5; key lower states +3 and −3.** Down the group: **+3 ↑, +5 ↓**
  (inert-pair); **Bi(V) strong oxidiser** (NaBiO₃ → MnO₄⁻).
- **Only N π-bonds to itself** → **N₂ (N≡N, 941 kJ)** vs **P₄ tetrahedra**.
- **N max covalence 4**, no pentahalide, no d orbitals; **P, As, Sb, Bi** expand octet
  (PF₅, [PF₆]⁻, SbCl₆⁻).
- **N₂:** Haber (NH₃), Ostwald (HNO₃, via NH₃), Chile saltpetre; pure N₂ from **NaN₃**.
- **NH₃:** trigonal pyramidal 107.8°, H-bonded (b.p. 240 K), weak base, **Lewis-base
  ligand** ([Cu(NH₃)₄]²⁺, [Ag(NH₃)₂]⁺); Haber at **200 atm / 700 K / Fe + K₂O + Al₂O₃**.
- **HNO₃:** Ostwald; **conc. + Cu → NO₂**, **dil. + Cu → NO**, **v.dil. + Zn → NH₄NO₃**;
  **passivates Fe, Al, Cr**; **aqua regia** (3 HCl : 1 HNO₃) dissolves Au, Pt; **brown ring
  = [Fe(H₂O)₅NO]²⁺**.
- **N₂H₄** (rocket fuel; Raschig), **NH₂OH** (→ oximes → nylon-6), **HN₃ / NaN₃** (air-bags,
  Pb(N₃)₂ detonator). **Base order NH₃ > N₂H₄ > NH₂OH > HN₃.**
- **Oxides of N:** N₂O & NO **neutral**; N₂O₃ → HNO₂, N₂O₅ → HNO₃; **NO, NO₂ paramagnetic**;
  **2 NO₂ ⇌ N₂O₄** (cold → dimer). N₂O₅ solid = NO₂⁺NO₃⁻.
- **White P** = P₄ (∠60°, strained, reactive, glows, toxic, under water); **red P** =
  chains (matches); **black P** = layers (most stable).
- **P₄ + NaOH → PH₃ + NaH₂PO₂**; **Ca₃P₂ + H₂O → PH₃**; PH₃ **∠93.6°**, weak base
  (**PH₄I**), reducing, **Holme's signals**.
- **P₄O₆ → H₃PO₃**; **P₄O₁₀ → H₃PO₄** and is the **best common desiccant**
  (4 HNO₃ + P₄O₁₀ → 2 N₂O₅).
- **PCl₃ → H₃PO₃**; **PCl₅ → POCl₃ → H₃PO₄**; **PCl₅ gas = TBP (ax ≠ eq)**, **solid =
  [PCl₄]⁺[PCl₆]⁻**.
- **Oxoacids of P:** basicity = **number of –OH** (H₃PO₂ mono, H₃PO₃ di, H₃PO₄ tri);
  **P–H ⇒ reducing** (H₃PO₂ > H₃PO₃ > H₃PO₄); lower-state acids **disproportionate**
  (4 H₃PO₃ → 3 H₃PO₄ + PH₃); H₃PO₄ **condenses** to pyro/meta.
- **Acidity of oxides:** N₂O₃ > P₄O₆ > As₄O₆ > Sb₄O₆ > Bi₂O₃ (acidic → basic).
- **Hydrolysis of ECl₃:** P complete → H₃PO₃; As reversible; **Sb, Bi → SbOCl, BiOCl**
  (keep solutions acidic).
- **Qual. analysis:** As₂S₃, Sb₂S₃ dissolve in yellow (NH₄)₂Sₓ (thio-salts); **Bi₂S₃ does
  not** (Bi is a metal).


# 25. Chapter review questions (with worked answers)

**Q1.** Why is the ΔₑgH of nitrogen positive whereas that of phosphorus is strongly
negative?
*A.* The incoming electron in N must enter the small, compact **2p** subshell, where
electron–electron repulsion is severe, and it would destroy the stable **half-filled p³**
configuration. In P the extra electron enters the larger **3p** subshell with much less
repulsion, so energy is released (−72 kJ mol⁻¹).

**Q2.** Account for the fact that N₂ is inert at room temperature but white phosphorus is
one of the most reactive elements.
*A.* N₂ has a **triple bond of enthalpy 941 kJ mol⁻¹**, no dipole and no accessible vacant
orbital → enormous kinetic barrier. White P is **P₄ tetrahedra with 60° bond angles**;
the P–P bonds are severely **strained** (bent bonds), so little activation energy is needed
to break them and the element is very reactive (ignites in air).

**Q3.** NCl₃ is hydrolysed to NH₃ and HOCl, but NF₃ is not hydrolysed at all. Explain.
*A.* In NCl₃, Cl is slightly δ⁺ and N has no vacant orbital, so water attacks **chlorine**,
giving HOCl and leaving NH₃. In NF₃, F is strongly δ⁻ (F more electronegative than N), the
N–F bond is strong, and there is again no vacant orbital on N — water can attack neither
atom, so NF₃ is inert.

**Q4.** Explain why the two axial P–Cl bonds in gaseous PCl₅ are longer than the three
equatorial bonds.
*A.* PCl₅ is trigonal bipyramidal (sp³d). Each **axial** bond pair experiences **three**
90° repulsions from the equatorial bond pairs; each **equatorial** bond pair experiences
only **two** 90° repulsions. Greater repulsion on the axial bonds makes them **longer and
weaker** (240 vs 202 pm).

**Q5.** Why is H₃PO₃ dibasic and not tribasic, and why is it a reducing agent while H₃PO₄
is not?
*A.* Its structure is **HP(=O)(OH)₂**: only **two** hydrogens are on oxygen (ionisable) →
dibasic; the **third H is bonded directly to P** and is not ionisable. That **P–H bond**
is also what makes H₃PO₃ a reducing agent (it is oxidised to H₃PO₄). H₃PO₄ has **no P–H
bond**, so it is non-reducing.

**Q6.** Give balanced equations for the reaction of copper with (i) dilute and (ii)
concentrated nitric acid, and explain the different products.
*A.* (i) 3 Cu + 8 HNO₃(dil) → 3 Cu(NO₃)₂ + **2 NO** + 4 H₂O; (ii) Cu + 4 HNO₃(conc) →
Cu(NO₃)₂ + **2 NO₂** + 2 H₂O. Concentrated acid has a high concentration of undissociated
HNO₃ and little water, favouring the **2-electron** reduction to NO₂; dilute acid favours
the **3-electron** reduction to NO. More dilute acid + a more active metal reduce nitrogen
even further (→ N₂O, NH₄⁺).

**Q7.** Arrange and justify: (a) increasing basicity NH₃, PH₃, AsH₃, SbH₃, BiH₃; (b)
increasing thermal stability of the same; (c) increasing bond angle.
*A.* (a) BiH₃ < SbH₃ < AsH₃ < PH₃ < **NH₃** — down the group the lone pair is in a larger,
more diffuse orbital and the electron density on E falls. (b) BiH₃ < SbH₃ < AsH₃ < PH₃ <
**NH₃** — E–H bond enthalpy falls (389 → ~255 kJ mol⁻¹). (c) SbH₃ (91.3°) < AsH₃ (91.8°) <
PH₃ (93.6°) < **NH₃ (107.8°)** — heavier E use almost pure p orbitals.

**Q8.** Why does the +3 oxidation state become more stable than +5 on going from P to Bi?
*A.* The **inert-pair effect**: the ns² pair is increasingly reluctant to be promoted and
bonded, because (i) E–X bond enthalpies fall down the group, so the two extra E–X bonds
made in going +3 → +5 release less energy, while (ii) the ns→np promotion cost stays high
(and for Bi the 6s pair is extra-stabilised by relativistic contraction). So E(V) becomes
unstable/oxidising and E(III) becomes the normal state (Bi(V) exists only as BiF₅, NaBiO₃).

**Q9.** How is dinitrogen obtained in a very pure state in the laboratory? Give the
equation.
*A.* By gently heating **sodium or barium azide**: 2 NaN₃ → 2 Na + 3 N₂ (or Ba(N₃)₂ → Ba +
3 N₂). The N₂ from NH₄Cl + NaNO₂ is contaminated with NO/HNO₃.

**Q10.** What is "fuming nitric acid", and how is it made from the ~68 % acid?
*A.* Fuming nitric acid is HNO₃ containing dissolved NO₂ (yellow-brown, "red fuming") or
> 98 % HNO₃. It is obtained by distilling the 68 % constant-boiling acid with a **dehydrating
agent** — concentrated **H₂SO₄** or anhydrous **Mg(NO₃)₂** — which removes water and lets
the HNO₃ distil over.

**Q11.** Complete: (i) P₄ + NaOH + H₂O →; (ii) P₄O₁₀ + HNO₃ →; (iii) NaNO₃ + H₂SO₄ →(Δ);
(iv) (NH₄)₂Cr₂O₇ →(Δ); (v) Cu + dil. HNO₃ →.
*A.* (i) PH₃ + 3 NaH₂PO₂; (ii) 2 N₂O₅ + 4 HPO₃; (iii) NaHSO₄ + HNO₃; (iv) N₂ + Cr₂O₃ +
4 H₂O; (v) 3 Cu(NO₃)₂ + 2 NO + 4 H₂O (per 3 Cu + 8 HNO₃).

**Q12.** Why can sodium azide be used to inflate an air-bag, and what removes the sodium?
*A.* NaN₃ decomposes very fast and cleanly on electrical ignition: 2 NaN₃ → 2 Na + 3 N₂,
releasing a large volume of harmless N₂ in milliseconds. The reactive sodium is consumed by
co-packed KNO₃ (10 Na + 2 KNO₃ → K₂O + 5 Na₂O + N₂), and the alkali-metal oxides are fixed
by SiO₂ as a harmless glass.


# 26. Chapter coverage checklist

- [ ] p-block framework; half-filled p³ stability; non-metal → metal gradation
- [ ] First-member anomaly of N: size, EN, ΔᵢH, no d orbitals; covalence 4; pπ–pπ; weak N–N
- [ ] Master data table; irregular radius/ΔᵢH steps (d-block & lanthanoid contraction)
- [ ] Occurrence, isotopes (P and As monoisotopic), the nitrogen cycle & fixation
- [ ] All property **orders** with reasons: radius, ΔᵢH₁/₂/₃, ΔₑgH (N positive!), EN, m.p.,
      metallic character
- [ ] Oxidation-state ladder −3 → +5; inert-pair effect (+3 vs +5); Bi(V) oxidiser
- [ ] Bonding toolkit: pπ–pπ, pπ–dπ, dπ–pπ; MO of N₂, NO, NO₂/N₂O₄
- [ ] Anomalous N vs the group; NCl₃ vs PCl₃ hydrolysis; NF₃ dipole
- [ ] Elemental reactivity with conditions (N₂, P₄, As/Sb/Bi)
- [ ] Allotropes of P (white/red/black/violet) — structure, reactivity, stability, uses
- [ ] Nitrides & phosphides — three bonding classes; BN; hydrolysis to NH₃ / PH₃
- [ ] N₂ — lab & industrial prep, properties, uses (liquid N₂)
- [ ] NH₃ — Haber (all conditions + Le Chatelier), structure, full reaction set, uses
- [ ] Ammonium salts — thermal decomposition modes; NH₄NO₃ → N₂O / N₂+O₂; Nessler's
- [ ] N₂H₄ (Raschig, rocket fuel), NH₂OH (oximes → nylon), HN₃/NaN₃ (air-bags); base order
- [ ] Oxides of N — full table, structures, paramagnetism, anhydride & redox character
- [ ] HNO₂ — prep, disproportionation, ambivalent redox, diazotisation, tests
- [ ] HNO₃ — lab prep, Ostwald process (3 steps + conditions), structure, oxidising-action
      table, passivity, aqua regia, brown-ring test, uses
- [ ] PH₃ — prep (incl. P₄+NaOH), structure ∠93.6°, PH₄⁺, reducing reactions, Holme's
      signals, uses; NH₃ vs PH₃ table
- [ ] P₄O₆ and P₄O₁₀ — structure, hydrolysis, P₄O₁₀ as desiccant
- [ ] PCl₃, PCl₅ (TBP, ax≠eq; ionic solid), POCl₃ — prep, hydrolysis, reactions, uses
- [ ] Oxoacids of P — full table; basicity = –OH count; reducing power = P–H count;
      disproportionation; condensation; H₃PO₂/H₃PO₃/H₃PO₄ individual chemistry & uses
- [ ] Phosphates in biology (ATP, DNA, apatite) and eutrophication
- [ ] As, Sb, Bi — oxides (acidic→basic), oxo-halide hydrolysis, sulphides in qual.
      analysis, NaBiO₃/Mn²⁺, Marsh test
- [ ] Uses table for every element and major compound
- [ ] Reaction networks; JEE traps; Pauling's rule; ultra-fast revision


# 27. NCERT Class XII, Unit 7 — complete reaction & preparation ledger

*Every equation, preparation and named condition from NCERT Unit 7 "The p-Block Elements"
(Group 15 portion, §7.1–7.9), grouped by NCERT section, so the syllabus core can be checked
off at a glance. Section numbers in [ ] point to where each item is developed in these
notes.*

## 27.1 NCERT §7.1 — Group 15: general [§1–§6]

- Valence configuration **ns² np³**; group state +5; other states −3, +3; +1, +2, +4 for N.
- Down the group: −3 stability **decreases**; +5 stability **decreases**, +3 **increases**
  (inert-pair). Only well-characterised Bi(V) compound: **BiF₅**.
- N disproportionation: **3HNO₂ → HNO₃ + H₂O + 2NO**.
- P disproportionation (alkali): **P₄ + 3NaOH + 3H₂O → PH₃ + 3NaH₂PO₂**.
- Maximum covalence of N = 4 (no d orbitals); heavier elements expand covalence, e.g.
  **PF₆⁻**.
- Anomalous N: small size, high EN, high ΔᵢH, no d orbitals; pπ–pπ multiple bonds
  (N₂, N≡N, 941.4 kJ mol⁻¹); heavier elements form single bonds (P–P, As–As, Sb–Sb),
  Bi metallic; N–N single bond weaker than P–P (lone-pair repulsion); N cannot form
  dπ–pπ (so R₃P=O, R₃As=O exist, R₃N=O does not); P and As form dπ–dπ in P(C₂H₅)₃,
  As(C₆H₅)₃.
- **Hydrides EH₃** (Table 7.2): stability NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃; reducing power
  increases; basicity NH₃ > PH₃ > AsH₃ > SbH₃ ≳ BiH₃; HEH angle 107.8° → 91.3°.
- **Oxides:** E₂O₃ and E₂O₅; higher oxide more acidic; N, P oxides purely acidic; As, Sb
  amphoteric; Bi basic.
- **Halides:** EX₃ and EX₅; N forms no pentahalide; of the N trihalides only **NF₃** is
  stable; trihalides covalent except **BiF₃** (ionic).
- **With metals:** Ca₃N₂, Ca₃P₂, Na₃As, Zn₃Sb₂, Mg₃Bi₂ (−3 state).
- Example 7.1: N forms no pentahalide — only s and p orbitals, no d, covalence limited to 4.
- Example 7.2: PH₃ has a lower b.p. than NH₃ — no hydrogen bonding in PH₃.

## 27.2 NCERT §7.2 — Dinitrogen [§9]

**Preparation:**

    NH₄Cl(aq) + NaNO₂(aq) → N₂(g) + 2H₂O(l) + NaCl(aq)
    (NH₄)₂Cr₂O₇ --heat--> N₂ + 4H₂O + Cr₂O₃
    Ba(N₃)₂ --heat--> Ba + 3N₂          (very pure N₂)
    2NaN₃ --heat--> 2Na + 3N₂

- Commercially: **liquefaction and fractional distillation of air** — N₂ (b.p. 77.2 K)
  distils out first, leaving liquid O₂ (b.p. 90 K).
- Impurities NO and HNO₃ removed by passing through aqueous H₂SO₄ containing K₂Cr₂O₇.

**Properties:**

    6Li + N₂ --heat--> 2Li₃N
    3Mg + N₂ --heat--> Mg₃N₂
    N₂(g) + 3H₂(g) --773 K, catalyst (Haber)--> 2NH₃(g);   ΔfH° = −46.1 kJ mol⁻¹
    N₂ + O₂ --heat (~2000 K)--> 2NO(g)

- Two isotopes: ¹⁴N and ¹⁵N. Solubility 23.2 cm³ per litre of water at 273 K.
- Example 7.3: thermal decomposition of sodium azide → **2NaN₃ → 2Na + 3N₂**.

## 27.3 NCERT §7.3 — Ammonia [§10]

**Preparation:**

    NH₂CONH₂ + 2H₂O → (NH₄)₂CO₃ ⇌ 2NH₃ + H₂O + CO₂          (decay of urea)
    2NH₄Cl + Ca(OH)₂ → 2NH₃ + 2H₂O + CaCl₂                    (small scale)
    (NH₄)₂SO₄ + 2NaOH → 2NH₃ + 2H₂O + Na₂SO₄
    N₂(g) + 3H₂(g) ⇌ 2NH₃(g);   ΔfH° = −46.1 kJ mol⁻¹         (Haber, large scale)

- Haber optimum conditions (NCERT): pressure **200 × 10⁵ Pa (≈ 200 atm)**, temperature
  **≈ 700 K**, catalyst **iron oxide with small amounts of K₂O and Al₂O₃**. Earlier iron
  with molybdenum as promoter. (Fig 7.1 flow chart: compressor 20 MPa, catalyst chamber
  iron oxide + Al₂O₃ + K₂O at 700 K, pump, liquid NH₃ out.)

**Properties:**

    NH₃(g) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)
    ZnSO₄(aq) + 2NH₄OH(aq) → Zn(OH)₂(s, white) + (NH₄)₂SO₄(aq)
    FeCl₃(aq) + 3NH₄OH(aq) → Fe₂O₃·xH₂O(s, brown) + 3NH₄Cl(aq)
    Cu²⁺(aq) + 4NH₃(aq) ⇌ [Cu(NH₃)₄]²⁺(aq)          (blue → deep blue)
    Ag⁺(aq) + Cl⁻(aq) → AgCl(s, white)
    AgCl(s) + 2NH₃(aq) → [Ag(NH₃)₂]Cl(aq)          (colourless)

- Structure: trigonal pyramidal, N with one lone pair; **H–N–H 107.8°**, N–H **101.7 pm**.
- Freezing point 198.4 K, boiling point 239.7 K; associated by hydrogen bonding.
- Example 7.4: NH₃ acts as a Lewis base — lone pair on N available for donation.
- **Uses:** nitrogenous fertilisers (ammonium nitrate, urea, ammonium phosphate, ammonium
  sulphate); manufacture of nitric acid; liquid NH₃ as a refrigerant.

## 27.4 NCERT §7.4 — Oxides of nitrogen (Table 7.3) [§13]

    N₂O   (+1, neutral)   :  NH₄NO₃ --heat--> N₂O + 2H₂O
    NO    (+2, neutral)   :  2NaNO₂ + 2FeSO₄ + 3H₂SO₄ → Fe₂(SO₄)₃ + 2NaHSO₄ + 2H₂O + 2NO
    N₂O₃  (+3, acidic)    :  2NO + N₂O₄ --250 K--> 2N₂O₃
    NO₂   (+4, acidic)    :  2Pb(NO₃)₂ --673 K--> 4NO₂ + 2PbO + O₂
    N₂O₄  (+4, acidic)    :  2NO₂ ⇌(cool / heat) N₂O₄
    N₂O₅  (+5, acidic)    :  4HNO₃ + P₄O₁₀ → 4HPO₃ + 2N₂O₅

- Table 7.4 bond parameters: N₂O linear (N–N 113 pm, N–O 119 pm); NO (N–O 115 pm); N₂O₃
  planar; NO₂ angular (∠ONO 134°, 120 pm); N₂O₄ planar (N–N 175 pm); N₂O₅ planar.
- Example 7.5: NO₂ dimerises because it has an **odd number of valence electrons**; N₂O₄
  has an even number.
- Intext 7.6: covalence of N in N₂O₅ is **4**.

## 27.5 NCERT §7.5 — Nitric acid [§14]

**Preparation:**

    NaNO₃ + H₂SO₄ --heat, glass retort--> NaHSO₄ + HNO₃          (laboratory)

**Ostwald's process (large scale):**

    4NH₃(g) + 5O₂(g) --Pt/Rh gauze catalyst, 500 K, 9 bar--> 4NO(g) + 6H₂O(g)
    2NO(g) + O₂(g) ⇌ 2NO₂(g)
    3NO₂(g) + H₂O(l) → 2HNO₃(aq) + NO(g)          (NO recycled)

- Aqueous HNO₃ concentrated by distillation to ~68 % by mass; further to 98 % by
  dehydration with conc. H₂SO₄.
- Structure: colourless liquid (f.p. 231.4 K, b.p. 355.6 K, sp. gr. 1.504); planar in the
  gas phase; N sp², O–N–O 130°, N–OH 140.6 pm, N=O 121 pm, O–H 96 pm.

**Properties:**

    HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq)
    3Cu + 8HNO₃(dilute) → 3Cu(NO₃)₂ + 2NO + 4H₂O
    Cu + 4HNO₃(conc.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O
    4Zn + 10HNO₃(dilute) → 4Zn(NO₃)₂ + 5H₂O + N₂O
    Zn + 4HNO₃(conc.) → Zn(NO₃)₂ + 2H₂O + 2NO₂
    I₂ + 10HNO₃ → 2HIO₃ + 10NO₂ + 4H₂O
    C + 4HNO₃ → CO₂ + 2H₂O + 4NO₂
    S₈ + 48HNO₃ → 8H₂SO₄ + 48NO₂ + 16H₂O
    P₄ + 20HNO₃ → 4H₃PO₄ + 20NO₂ + 4H₂O

- **Passivity:** Cr, Al (and Fe, Co, Ni) do not dissolve in conc. HNO₃ — a passive oxide
  film forms.
- **Brown-ring test for nitrates:**

      NO₃⁻ + 3Fe²⁺ + 4H⁺ → NO + 3Fe³⁺ + 2H₂O
      [Fe(H₂O)₆]²⁺ + NO → [Fe(H₂O)₅(NO)]²⁺ (brown) + H₂O

  (dilute FeSO₄ added to the nitrate solution, then conc. H₂SO₄ poured along the side of the
  tube.)
- **Uses:** manufacture of ammonium nitrate (fertilisers) and other nitrates for explosives
  and pyrotechnics; nitroglycerin, trinitrotoluene and other nitro compounds; **pickling of
  stainless steel**, etching of metals, oxidiser in rocket fuels.

## 27.6 NCERT §7.6 — Phosphorus, allotropic forms [§7, §11]

- **White phosphorus:** translucent white waxy solid; poisonous; insoluble in water,
  soluble in carbon disulphide; **glows in the dark (chemiluminescence)**; readily catches
  fire in air giving P₄O₁₀; discrete tetrahedral **P₄** (∠P–P–P = 60°); less stable and
  more reactive (angular strain).

      P₄ + 3NaOH + 3H₂O → PH₃ + 3NaH₂PO₂   (sodium hypophosphite; in inert atmosphere)
      P₄ + 5O₂ → P₄O₁₀

- **Red phosphorus:** obtained by heating white P at **573 K in an inert atmosphere for
  several days**; iron-grey lustre; odourless, non-poisonous, insoluble in water and CS₂;
  polymeric (chains of P₄ tetrahedra); much less reactive; does not glow.
- **Black phosphorus:** α-black from heating red P in a sealed tube at **803 K**; β-black by
  heating white P at **473 K under high pressure**; does not burn in air up to 673 K.

## 27.7 NCERT §7.7 — Phosphine [§15]

**Preparation:**

    Ca₃P₂ + 6H₂O → 3Ca(OH)₂ + 2PH₃
    Ca₃P₂ + 6HCl → 3CaCl₂ + 2PH₃
    P₄ + 3NaOH + 3H₂O --heat, inert (CO₂) atmosphere--> PH₃ + 3NaH₂PO₂
    PH₄I + KOH → KI + H₂O + PH₃          (from purified phosphonium iodide)

- Impure PH₃ (with P₂H₄ or P₄ vapour) is spontaneously inflammable; purified by absorbing
  in HI → PH₄I, then treating with KOH.

**Properties:**

    3CuSO₄ + 2PH₃ → Cu₃P₂ + 3H₂SO₄
    3HgCl₂ + 2PH₃ → Hg₃P₂ + 6HCl
    PH₃ + HBr → PH₄Br
    PH₃ + HI → PH₄I

- Colourless gas, rotten-fish smell, highly poisonous; explodes with traces of HNO₃, Cl₂,
  Br₂ vapour; the solution in water decomposes in light to red P and H₂.
- Example 7.6: PH₃ is basic — reacts with HI to give PH₄I; lone pair on P makes it a Lewis
  base.
- Intext 7.7: bond angle in **PH₄⁺ > PH₃** — in PH₄⁺ all four pairs are bonding (sp³); in
  PH₃ a lone pair reduces the angle to below 109°28′.
- **Uses:** **Holme's signals** (containers of CaC₂ + Ca₃P₂ pierced and thrown into the
  sea — the burning gases serve as a signal); **smoke screens**.

## 27.8 NCERT §7.8 — Phosphorus halides [§17]

**Phosphorus trichloride, PCl₃:**

    P₄ + 6Cl₂ → 4PCl₃                         (dry Cl₂ over heated white P)
    P₄ + 8SOCl₂ → 4PCl₃ + 4SO₂ + 2S₂Cl₂
    PCl₃ + 3H₂O → H₃PO₃ + 3HCl
    3CH₃COOH + PCl₃ → 3CH₃COCl + H₃PO₃
    3C₂H₅OH + PCl₃ → 3C₂H₅Cl + H₃PO₃

- Pyramidal shape, sp³ P.
- Example 7.7: PCl₃ fumes in moisture — hydrolysed to give HCl fumes.

**Phosphorus pentachloride, PCl₅:**

    P₄ + 10Cl₂ → 4PCl₅                        (white P with excess dry Cl₂)
    P₄ + 10SO₂Cl₂ → 4PCl₅ + 10SO₂
    PCl₅ + H₂O → POCl₃ + 2HCl
    POCl₃ + 3H₂O → H₃PO₄ + 3HCl
    PCl₅ --heat--> PCl₃ + Cl₂
    C₂H₅OH + PCl₅ → C₂H₅Cl + POCl₃ + HCl
    CH₃COOH + PCl₅ → CH₃COCl + POCl₃ + HCl
    2Ag + PCl₅ → 2AgCl + PCl₃
    Sn + 2PCl₅ → SnCl₄ + 2PCl₃

- Structure: **trigonal bipyramidal** in gas and liquid (sp³d); three equatorial P–Cl bonds
  equal (202 pm), two axial bonds longer and different (240 pm) — axial bond pairs suffer
  more repulsion. In the **solid** it is **ionic: [PCl₄]⁺ [PCl₆]⁻** (tetrahedral cation,
  octahedral anion).
- Example 7.8: not all five bonds in PCl₅ are equivalent — three equatorial equal, two
  axial longer and different.
- Intext 7.10: **PCl₅ + D₂O** → POCl₃ + 2DCl (then POCl₃ + 3D₂O → D₃PO₄ + 3DCl).

## 27.9 NCERT §7.9 — Oxoacids of phosphorus (Table 7.5) [§18]

    Hypophosphorous  H₃PO₂  (+1)  1 P–OH, 2 P–H, 1 P=O   :  white P₄ + alkali
    Orthophosphorous H₃PO₃  (+3)  2 P–OH, 1 P–H, 1 P=O   :  P₂O₃ + H₂O
    Pyrophosphorous  H₄P₂O₅ (+3)  2 P–OH, 2 P–H, 2 P=O   :  PCl₃ + H₃PO₃
    Hypophosphoric   H₄P₂O₆ (+4)  4 P–OH, 2 P=O, 1 P–P   :  red P₄ + alkali
    Orthophosphoric  H₃PO₄  (+5)  3 P–OH, 1 P=O          :  P₄O₁₀ + H₂O
    Pyrophosphoric   H₄P₂O₇ (+5)  4 P–OH, 2 P=O, 1 P–O–P :  heat phosphoric acid
    Metaphosphoric   (HPO₃)ₙ (+5) 3 P–OH, 3 P=O, 3 P–O–P :  phosphoric acid + Br₂, sealed tube

    4H₃PO₃ --heat--> 3H₃PO₄ + PH₃                            (disproportionation)
    4AgNO₃ + 2H₂O + H₃PO₂ → 4Ag + 4HNO₃ + H₃PO₄              (H₃PO₂ as reducing agent)

- All contain at least one **P=O** and one **P–OH** bond; acids in a lower oxidation state
  (< +5) also contain **P–P** (e.g. H₄P₂O₆) or **P–H** (e.g. H₃PO₃) but not both.
- **Basicity** = number of P–OH groups (H₃PO₃ dibasic, H₃PO₄ tribasic, H₃PO₂ monobasic).
- Acids with **P–H bonds are good reducing agents**.
- Example 7.9: reducing behaviour of H₃PO₂ — two H atoms bonded directly to P.
- Intext 7.11: basicity of H₃PO₄ is **three**. Intext 7.12: H₃PO₃ on heating
  disproportionates to H₃PO₄ + PH₃.

## 27.10 NCERT exercise-level equations also worth carrying

    NH₄Cl --heat--> NH₃ + HCl                 (re-forms on the cooler part of the tube)
    NH₄NO₂ --heat--> N₂ + 2H₂O
    (NH₄)₂Cr₂O₇ --heat--> N₂ + Cr₂O₃ + 4H₂O
    2NH₃ + 3CuO --heat--> N₂ + 3Cu + 3H₂O
    8NH₃(excess) + 3Cl₂ → 6NH₄Cl + N₂;   NH₃ + 3Cl₂(excess) → NCl₃ + 3HCl
    NCl₃ + 3H₂O → NH₃ + 3HOCl                 (hydrolysis of a nitrogen trihalide)

## 27.11 Content in these notes that goes beyond NCERT Unit 7

Added from J. D. Lee / Greenwood / Ananya Ganguly for JEE-Advanced completeness — not part
of the NCERT Class XII core, but standard higher-level material:

- Hydrazine N₂H₄ (Raschig process, rocket fuel), hydroxylamine NH₂OH (→ oximes → nylon-6),
  hydrazoic acid HN₃ and the azides (air-bags, Pb(N₃)₂ detonator); base-strength order
  NH₃ > N₂H₄ > NH₂OH > HN₃ [§12].
- Oxides of phosphorus P₄O₆ and P₄O₁₀ — cage structures, hydrolysis, P₄O₁₀ as the strongest
  common desiccant (4HNO₃ + P₄O₁₀ → 2N₂O₅ + 4HPO₃) [§16].
- Nitrides and phosphides — ionic / covalent / interstitial classes; BN ("inorganic
  graphite" and borazon); GaP, InP semiconductors [§8].
- Nitrous acid HNO₂ — preparation in situ, disproportionation, ambivalent redox,
  diazotisation [§13.4].
- Metal-nitrate thermal-decomposition trends; ammonium-salt decomposition modes; Nessler's
  reagent test for NH₄⁺ [§7, §11].
- Industrial extraction of white phosphorus from phosphate rock (electric-furnace process)
  [§22].
- Comparative chemistry of As, Sb, Bi — oxo-halide hydrolysis, sulphides in qualitative
  analysis, the NaBiO₃ / Mn²⁺ test, the Marsh test [§20].
- Aqua regia dissolving Au and Pt as chloro-complexes; xanthoproteic reaction of conc.
  HNO₃ with proteins (yellow colour — the "nitric-acid stain" on skin) [§14].
- ATP / DNA / apatite biological phosphate chemistry and eutrophication [§19].


# 28. Extended reaction set for problem-solving (question-bank layer)

*The layer of specific reactions and micro-facts that JEE-Advanced question banks
(chemstudios/pms, VKJ, Vishal Joshi PYQ sets) test but that sit one level below the NCERT
core. Grouped by species; every equation is balanced. Use this section as the "reaction
dictionary" when a problem gives an unfamiliar product.*

## 28.1 Nitric acid — the arc (Birkeland–Eyde) process

Before the Ostwald process, HNO₃ was made from atmospheric N₂ by the **Birkeland–Eyde /
electric-arc process** (Norway, hydro-power):

    Step 1:  N₂ + O₂  --3000 °C, electric arc-->  2 NO − heat   (endothermic; ΔH = +180 kJ)
    Step 2:  2 NO + O₂  →  2 NO₂                                  (on cooling)
    Step 3:  3 NO₂ + H₂O  →  2 HNO₃ + NO                          (NO recycled)
    (or  4 NO₂ + O₂ + 2 H₂O → 4 HNO₃)

- Energy-inefficient (only ~1–2 % conversion per pass; huge electricity demand) — replaced
  by the Ostwald process once cheap NH₃ became available from Haber.
- **Armstrong's nascent-hydrogen picture** of HNO₃ + metal (a useful bookkeeping model):
  metal + HNO₃ → nitrate + [H]; the [H] then reduces more HNO₃ —
  2 HNO₃ + 2[H] → 2 NO₂ + 2 H₂O; 2 HNO₃ + 6[H] → 2 NO + 4 H₂O;
  2 HNO₃ + 8[H] → N₂O + 5 H₂O; 2 HNO₃ + 10[H] → N₂ + 6 H₂O;
  HNO₃ + 8[H] → NH₃ (→ NH₄NO₃) + 3 H₂O. Product set by metal reactivity, acid concentration,
  temperature.

## 28.2 Nitric acid — action on non-metals, metalloids and compounds (hot conc., → NO₂)

    S + 6 HNO₃ → H₂SO₄ + 6 NO₂ + 2 H₂O
    C + 4 HNO₃ → CO₂ + 4 NO₂ + 2 H₂O
    2 P + 10 HNO₃ → 2 H₃PO₄ + 10 NO₂ + 2 H₂O        (P₄ + 20 HNO₃ → 4 H₃PO₄ + 20 NO₂ + 4 H₂O)
    I₂ + 10 HNO₃ → 2 HIO₃ + 10 NO₂ + 4 H₂O
    As + 5 HNO₃ → H₃AsO₄ + 5 NO₂ + H₂O              (2 As + 10 HNO₃ → 2 H₃AsO₄ + 10 NO₂ + 2 H₂O)
    Sb + 5 HNO₃ → H₃SbO₄ + 5 NO₂ + H₂O
    Sn + 4 HNO₃ → H₂SnO₃ (metastannic acid) + 4 NO₂ + H₂O
    B + 3 HNO₃ → H₃BO₃ + 3 NO₂

**Oxidation of compounds (dilute or conc., → NO or NO₂):**

    SO₂ + 2 HNO₃ → H₂SO₄ + 2 NO₂
    H₂S + 2 HNO₃ → S↓ + 2 NO₂ + 2 H₂O
    6 FeSO₄ + 3 H₂SO₄ + 2 HNO₃ → 3 Fe₂(SO₄)₃ + 2 NO + 4 H₂O
    6 KI + 8 HNO₃ → 6 KNO₃ + 3 I₂ + 2 NO + 4 H₂O
    3 SnCl₂ + 2 HNO₃ + 6 HCl → 3 SnCl₄ + 2 NO + 4 H₂O
    FeS + HNO₃ → Fe₂(SO₄)₃ + NO₂ + …   (S → sulphate, Fe(II) → Fe(III))
    2 HBr + 2 HNO₃ → Br₂ + 2 NO₂ + 2 H₂O      ;   2 HI + 2 HNO₃ → I₂ + 2 NO₂ + 2 H₂O

**Oxidation of organic compounds (fuming HNO₃):**

    C₁₂H₂₂O₁₁ + 36 HNO₃ → 6 (COOH)₂ (oxalic acid) + 36 NO₂ + 23 H₂O
    toluene + dil. HNO₃ → benzoic acid ;  sawdust / turpentine oil catch fire with fuming HNO₃

**Action on proteins — xanthoproteic reaction.** HNO₃ nitrates the aromatic (tyrosine,
tryptophan) residues of a protein to a **yellow** nitro compound ("xanthoprotein"); this is
why HNO₃ stains skin, wool and feathers yellow, and it is the basis of the **xanthoproteic
test** for proteins (yellow → orange on adding alkali).

## 28.3 Nitrous acid, HNO₂ — the complete redox set (in situ from a nitrite + dil. acid)

**Preparation:** M-nitrite + dil. HCl/H₂SO₄ (cold) → HNO₂;   N₂O₃ + H₂O → 2 HNO₂.
**Disproportionation on warming:** 3 HNO₂ → HNO₃ + 2 NO↑ + H₂O.

**(a) As an oxidising agent (N +3 → +2, product NO):**

    2 KI + 2 HNO₂ + 2 HCl → 2 KCl + I₂ + 2 NO + 2 H₂O
    SnCl₂ + 2 HNO₂ + 2 HCl → SnCl₄ + 2 NO + 2 H₂O
    SO₂ + 2 HNO₂ → H₂SO₄ + 2 NO
    H₂S + 2 HNO₂ → S↓ + 2 NO + 2 H₂O
    2 FeSO₄ + 2 HNO₂ + H₂SO₄ → Fe₂(SO₄)₃ + 2 NO + 2 H₂O
    Na₃AsO₃ + 2 HNO₂ → Na₃AsO₄ + 2 NO + H₂O

**(b) As a reducing agent (N +3 → +5, product HNO₃):**

    2 KMnO₄ + 5 HNO₂ + 3 H₂SO₄ → K₂SO₄ + 2 MnSO₄ + 5 HNO₃ + 3 H₂O
    K₂Cr₂O₇ + 3 HNO₂ + 4 H₂SO₄ → K₂SO₄ + Cr₂(SO₄)₃ + 3 HNO₃ + 4 H₂O
    H₂O₂ + HNO₂ → HNO₃ + H₂O
    Cl₂ + HNO₂ + H₂O → HNO₃ + 2 HCl

**(c) Reactions with NH₃ / –NH₂ compounds (all evolve N₂ except the aromatic-amine case):**

    2 HNO₂ + NH₂CONH₂ (urea) → N₂↑ + CO₂ + 3 H₂O          (destroying excess HNO₂)
    HNO₂ + NH₃ → NH₄NO₂ → N₂↑ + 2 H₂O
    HNO₂ + NH₂OH → N₂O↑ + 2 H₂O
    HNO₂ + C₂H₅NH₂ → C₂H₅OH + N₂↑ + H₂O
    HNO₂ + ArNH₂ + HCl --0–5 °C--> ArN₂⁺Cl⁻ (diazonium salt) + 2 H₂O    (aromatic amines only)
    HNO₂ + thiourea → N₂↑ + SCN⁻ + H⁺ + H₂O
    HNO₂ + HN₃ → N₂↑ + N₂O↑ + H₂O

## 28.4 Nitric oxide, NO — extended reactions

**Oxidising (NO → N₂O, or N₂):**

    SO₂ + 2 NO + H₂O → H₂SO₄ + N₂O
    H₂S + 2 NO → S↓ + H₂O + N₂O
    3 SnCl₂ + 2 NO + 6 HCl → 3 SnCl₄ + 2 NH₂OH·HCl        (a laboratory route to hydroxylamine)

**Supports combustion of only the most reactive burning non-metals:**

    S (burning) + 2 NO → SO₂ + N₂
    2 P (burning) + 5 NO → P₂O₅ + 5/2 N₂
    (a feebly burning splint is extinguished — NO does NOT support ordinary combustion)

**Reducing (NO → HNO₃ / HNO₂):**

    2 KMnO₄ + 3 H₂SO₄ + 10 NO → K₂SO₄ + 2 MnSO₄ + 10 NO₂ + ...  (decolourises acidified KMnO₄)
    HOCl + NO → HNO₂ + ... ;  2 CrO₃ + ... 

**With halogens → nitrosyl halides:**  2 NO + Cl₂ → 2 NOCl (nitrosyl chloride, "Tilden's reagent");
2 NO + Br₂ → 2 NOBr.

**With FeSO₄ (brown-ring):**  FeSO₄ + NO → [Fe(H₂O)₅NO]SO₄ (brown; Fe(+1), NO⁺).
**With transition metals:**  forms metal nitrosyls, e.g. [Fe(CO)₂(NO)₂], Na₂[Fe(CN)₅NO]
(sodium nitroprusside — the reagent for the S²⁻ test: violet [Fe(CN)₅NOS]⁴⁻).

## 28.5 Nitrogen dioxide, NO₂ / N₂O₄ — extended reactions

**Equilibrium:**  2 NO₂ (brown, paramagnetic) ⇌ N₂O₄ (colourless, diamagnetic),
ΔH = −57 kJ; high T and low P favour NO₂ (dissociation, colour deepens).

**Oxidising (NO₂ → NO):**

    S + 2 NO₂ → SO₂ + 2 NO
    2 P + 5 NO₂ → P₂O₅ + 5 NO   (wait: use)  P₄ + 10 NO₂ → P₄O₁₀ + 10 NO
    C + 2 NO₂ → CO₂ + 2 NO
    CO + NO₂ → CO₂ + NO
    SO₂ + NO₂ → SO₃ + NO        (the "chamber process" oxygen carrier for making H₂SO₄)
    2 H₂S + ... ;  Cu + 2 NO₂ → CuO + ... 
    (with KI: 2 KI + 2 NO₂ → I₂ + 2 KNO₂ — gives nitrite, NOT NO)

**Reducing (NO₂ → HNO₃ / N₂O₅):**

    2 KMnO₄ + 10 NO₂ + 3 H₂SO₄ + ...  ;   O₃ + 2 NO₂ → N₂O₅ + O₂

**With water (mixed anhydride — disproportionation):**

    2 NO₂ + H₂O → HNO₂ + HNO₃           (cold)
    3 NO₂ + H₂O → 2 HNO₃ + NO           (hot)

**With alkali:**  2 NO₂ + 2 NaOH → NaNO₂ + NaNO₃ + H₂O.

## 28.6 Nitrous oxide, N₂O, and dinitrogen pentoxide, N₂O₅

**N₂O:**

    NH₄NO₃ --250 °C--> N₂O + 2 H₂O        (industrial "laughing gas"; higher T → N₂ + O₂ + explosion)
    2 N₂O --hot surface--> 2 N₂ + O₂       (relights a glowing splint — the gas mixture is 33 % O₂
                                            vs 21 % in air, so it is a *better* combustion supporter)
    S + 2 N₂O → SO₂ + 2 N₂ ;  2 Mg + N₂O → 2 MgO? …  Cu + N₂O → CuO + N₂ ;  H₂ + N₂O → H₂O + N₂
    (N₂O is the oxide of nitrogen's *lowest* positive state and is chemically the least reactive;
     it is neutral — no corresponding oxoacid.)

**N₂O₅** (solid = **[NO₂]⁺[NO₃]⁻**, nitronium nitrate):

    4 HNO₃ + P₄O₁₀ → 4 HPO₃ + 2 N₂O₅         (dehydration of nitric acid)
    2 N₂O₅ → 4 NO₂ + O₂                       (decomposes above 320 K)
    I₂ + 5 N₂O₅ → I₂O₅ + 10 NO₂
    N₂O₅ + NaCl → NaNO₃ + NO₂Cl              (evidence for the NO₂⁺ NO₃⁻ formulation)
    N₂O₅ + H₂O → 2 HNO₃  (anhydride of nitric acid)
    covalence of N in N₂O₅ / NO₂⁺ = 4

## 28.7 Ammonia, ammonium salts and the liquid-ammonia solvent system

    2 NH₃ + 2 Na → 2 NaNH₂ (sodamide) + H₂          (in liquid NH₃ or with molten Na)
    NH₃ + HCHO ... ;  6 HCHO + 4 NH₃ → (CH₂)₆N₄ (hexamine / urotropine) + 6 H₂O
    8 NH₃ + 3 Cl₂ (excess NH₃) → N₂ + 6 NH₄Cl ;  NH₃ + 3 Cl₂ (excess Cl₂) → NCl₃ + 3 HCl
    2 NH₃ + 3 CuO → N₂ + 3 Cu + 3 H₂O
    3 Mg + 2 NH₃ → Mg₃N₂ + 3 H₂    (very hot)
    2 NH₃ + CO₂ --high P, T--> NH₂CONH₂ (urea) + H₂O

**Liquid ammonia as a solvent (self-ionisation  2 NH₃ ⇌ NH₄⁺ + NH₂⁻):**
- **acids of the system** are ammonium salts → **NH₄Cl behaves as an acid in liquid NH₃**
  (it reacts with the base NaNH₂: NH₄Cl + NaNH₂ → NaCl + 2 NH₃), just as HCl behaves as an
  acid in water.
- **bases of the system** are amides (NaNH₂, KNH₂).
- alkali metals dissolve → **blue, paramagnetic, conducting** solutions of ammoniated
  electrons (→ bronze, diamagnetic and metallic at high concentration); slowly:
  2 Na + 2 NH₃ → 2 NaNH₂ + H₂.

**Ammonium-salt thermal decomposition (mode set by the anion):**

    NH₄Cl ⇌ NH₃ + HCl                (non-oxidising, volatile acid → reversible "sublimation")
    (NH₄)₂SO₄ → NH₃ + NH₄HSO₄        (non-volatile acid → acid salt left)
    NH₄NO₃ --250 °C--> N₂O + 2 H₂O   ;  2 NH₄NO₃ --strong Δ--> 2 N₂ + O₂ + 4 H₂O (explosive)
    NH₄NO₂ --Δ--> N₂ + 2 H₂O
    (NH₄)₂Cr₂O₇ --Δ--> N₂ + Cr₂O₃ + 4 H₂O

**Test for NH₄⁺:** warm with NaOH → NH₃ (only gas that turns moist red litmus blue and gives
white fumes with an HCl rod); **Nessler's reagent** K₂[HgI₄]/KOH → brown ppt (NH₂·Hg₂I₃).

## 28.8 Phosphine — extended reactions and the PH₄⁺ question

    Ca₃P₂ + 6 H₂O → 3 Ca(OH)₂ + 2 PH₃ ;  Ca₃P₂ + 6 HCl → 3 CaCl₂ + 2 PH₃ ;  AlP + 3 H₂O → Al(OH)₃ + PH₃
    P₄ + 3 NaOH + 3 H₂O --Δ, CO₂ atm--> PH₃ + 3 NaH₂PO₂         (lab; impure PH₃ is spontaneously
                                                                 inflammable due to P₂H₄)
    PH₄I + KOH → KI + H₂O + PH₃                                  (purest PH₃)
    3 H₃PO₃ --Δ--> PH₃ + 2 H₃PO₄  (disproportionation)  ;  3 H₃PO₂ --Δ--> PH₃ + 2 H₃PO₃

    3 CuSO₄ + 2 PH₃ → Cu₃P₂↓ (black) + 3 H₂SO₄
    3 HgCl₂ + 2 PH₃ → Hg₃P₂↓ + 6 HCl
    8 AgNO₃ + PH₃ + 4 H₂O → 8 Ag↓ + H₃PO₄ + 8 HNO₃      (via 6 AgNO₃ + PH₃ → Ag₃P·3AgNO₃↓ (yellow),
                                                          then hydrolysis → 6 Ag + H₃PO₃ + ...)
    PH₃ + 3 Cl₂ → PCl₃ + 3 HCl  ;  PH₃ + 4 N₂O --spark--> H₃PO₄ + 4 N₂
    PH₃ + 4 HCHO + HCl → [P(CH₂OH)₄]⁺Cl⁻   (tetrakis(hydroxymethyl)phosphonium chloride —
                                             fire-proofing of cotton fabric)
    PH₃ + 3 Ca(OCl)Cl + 3 H₂O → PCl₃ + 3 HCl + 3 Ca(OH)₂    (absorbed by bleaching powder)
    PH₃ + HX → PH₄X   (X = Cl, Br, I)

**PH₄⁺ vs NH₄⁺ — the exam explanation.** In PH₃ the lone pair sits in an orbital of very
**high s-character (nearly pure s)** on the large P atom, so it is poorly directed and
overlaps the small H⁺ 1s orbital badly → PH₄⁺ is far less stable than NH₄⁺.
- **Thermal stability:** PH₄I > PH₄Br > PH₄Cl (larger, softer, more polarisable X⁻
  stabilises the large PH₄⁺ cation — lattice-energy match).
- **PH₄F does not exist** — HF is too weak an acid to protonate the very weak base PH₃.
- **∠HPH:** PH₃ 93.6° (lone pair compresses) < PH₄⁺ 109.5° (regular tetrahedron, all
  bonding pairs).

## 28.9 Phosphorus halides and oxoacids — the reaction-map extras

    P₄ + 6 Cl₂ → 4 PCl₃ (limited)  ;  P₄ + 10 Cl₂ → 4 PCl₅ (excess)  ;  PCl₃ + Cl₂ ⇌ PCl₅
    P₄ + 8 SOCl₂ → 4 PCl₃ + 4 SO₂ + 2 S₂Cl₂  ;  P₄ + 10 SO₂Cl₂ → 4 PCl₅ + 10 SO₂
    PCl₅ + SO₂ → POCl₃ + SOCl₂            (IIT-JEE 1994)
    PCl₅ + P₄O₁₀ → POCl₃                  ;  PCl₅ + H₂O(1 mol) → POCl₃ + 2 HCl ;  POCl₃ + 3 H₂O → H₃PO₄ + 3 HCl
    PCl₅ + 2 H₂O(excess/D₂O) → H₃PO₄ + 5 HCl   ;  (with D₂O → D₃PO₄ + 5 DCl)
    2 Ag + PCl₅ → 2 AgCl + PCl₃  ;  Sn + 2 PCl₅ → SnCl₄ + 2 PCl₃
    C₂H₅OH + PCl₅ → C₂H₅Cl + POCl₃ + HCl ;  CH₃COOH + PCl₅ → CH₃COCl + POCl₃ + HCl
    P (red) + KIO₃ + H₂SO₄ → H₃PO₄ + I₂ + K₂SO₄
    2 P + 3 I₂ + 6 H₂O → 2 H₃PO₃ + 6 HI   (IIT-JEE 1992 — lab route to HI)

**Solid-state structures:** PCl₅ = [PCl₄]⁺[PCl₆]⁻ (tetrahedral cation, octahedral anion);
PBr₅ = [PBr₄]⁺Br⁻ (six Br⁻ too big to fit round P); **PI₅ does not exist**.
**Gas-phase PCl₅:** trigonal bipyramidal, axial P–Cl 240 pm > equatorial 202 pm (axial bond
pairs suffer three 90° repulsions vs two).

**Oxoacids of phosphorus — the number-of-bonds facts (frequent "count the σ-bonds /
P–H / P–OH" questions):**

| Acid | P ox. state | P–OH | P–H | P=O | P–O–P / P–P | basicity | σ-bonds (per formula) |
|:--|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| H₃PO₂ (hypophosphorous) | +1 | 1 | 2 | 1 | — | 1 | 5 |
| H₃PO₃ (phosphorous) | +3 | 2 | 1 | 1 | — | 2 | 5 |
| H₄P₂O₅ (pyrophosphorous) | +3 | 2 | 2 | 2 | 1 (P–O–P) | 2 | — |
| H₄P₂O₆ (hypophosphoric) | +4 | 4 | 0 | 2 | 1 (**P–P**) | 4 | 11 |
| H₃PO₄ (orthophosphoric) | +5 | 3 | 0 | 1 | — | 3 | 7 |
| H₄P₂O₇ (pyrophosphoric) | +5 | 4 | 0 | 2 | 1 (P–O–P) | 4 | 12 |
| (HPO₃)₃ (cyclotrimetaphosphoric) | +5 | 3 | 0 | 3 | 3 (P–O–P) | 3 | **15** |

**Disproportionation (acids with P in +1, +3):**  4 H₃PO₃ → 3 H₃PO₄ + PH₃ ;
3 H₃PO₂ → PH₃ + 2 H₃PO₃ (further → H₃PO₄ + PH₃).
**Condensation on heating H₃PO₄:**  2 H₃PO₄ --220 °C--> H₄P₂O₇ --320 °C--> (HPO₃)ₙ
--red heat--> P₄O₁₀ residue.
**Reducing (P–H containing):**  4 AgNO₃ + 2 H₂O + H₃PO₂ → 4 Ag↓ + 4 HNO₃ + H₃PO₄ ;
2 CuSO₄ + 2 H₂O + H₃PO₂ → 2 Cu↓ + 2 H₂SO₄ + H₃PO₄ ;  H₃PO₃ reduces HgCl₂ → Hg₂Cl₂ → Hg.

**Condensed phosphates — Graham's salt / Calgon.**
NaH₂PO₄ --(>240 °C)--> (NaPO₃)₃ (sodium trimetaphosphate) --(625 °C)--> NaPO₃ (liquid melt)
--(rapid cooling)--> **(NaPO₃)ₙ = Graham's salt (a glass)**, sold commercially (loosely
called "sodium hexametaphosphate") as **Calgon**. It is water-soluble and **sequesters
Ca²⁺ and Mg²⁺** as soluble complexes → **water softening / scale prevention**; its solutions
**precipitate Pb²⁺ and Ag⁺** but **not Ca²⁺ or Mg²⁺**.

## 28.10 Oxides of phosphorus — the P₄O₁₀ dehydration reactions

    P₄ + 3 O₂ (limited) → P₄O₆        ;   P₄ + 5 O₂ (excess) → P₄O₁₀
    P₄O₆ + 6 H₂O (cold) → 4 H₃PO₃    ;   P₄O₆ + 6 H₂O (hot) → 3 H₃PO₄ + PH₃
    P₄O₆ + 2 O₂ → P₄O₁₀
    P₄O₁₀ + 6 H₂O (hot) → 4 H₃PO₄   ;   P₄O₁₀ + 2 H₂O (cold) → 4 HPO₃
    4 HNO₃ + P₄O₁₀ → 2 N₂O₅ + 4 HPO₃            (P₄O₁₀ dehydrates HNO₃)
    2 HClO₄ + P₄O₁₀ → Cl₂O₇ + 2 HPO₃           (dehydrates HClO₄)
    2 CH₃CONH₂ + P₄O₁₀ → 2 CH₃CN + (dehydration)   (amide → nitrile)
    P₄O₆ structure: P₄ cage, one O bridging each of the six P–P edges (each P: 3-coord, lone pair).
    P₄O₁₀ structure: P₄O₆ cage + one terminal P=O on each P (each P: 4-coord).

## 28.11 As, Sb, Bi — the qualitative-analysis and test reactions

    As₂S₃ (yellow) + 6 NaOH → Na₃AsO₃ + Na₃AsS₃ + 3 H₂O
    As₂S₃ + 4 NaOH → NaAsO₂ + Na₃AsS₃ + 2 H₂O ... ;  As₂S₃ dissolves in yellow (NH₄)₂Sₓ → (NH₄)₃AsS₄
    Sb₂S₃ (orange) similarly dissolves in yellow ammonium sulphide → thio-antimonate
    Bi₂S₃ (brown-black) does NOT dissolve in (NH₄)₂Sₓ  → stays with the "copper group" (II-A)
    SbCl₃ + H₂O ⇌ SbOCl↓ (powder of algaroth) + 2 HCl
    BiCl₃ + H₂O ⇌ BiOCl↓ (white) + 2 HCl        (why Bi³⁺/Sb³⁺ solutions must be kept acidic)
    Bi(NO₃)₃ + H₂O ⇌ BiO(NO₃)↓ + 2 HNO₃
    2 Mn²⁺ + 5 NaBiO₃ + 14 H⁺ → 2 MnO₄⁻ + 5 Bi³⁺ + 5 Na⁺ + 7 H₂O   (test for Mn²⁺ — Bi(V) oxidiser)
    Marsh test:  As₂O₃ + 6 Zn + 12 HCl → 2 AsH₃ + 6 ZnCl₂ + 3 H₂O ;
                 2 AsH₃ --heated tube--> 2 As (black mirror, soluble in NaOCl) + 3 H₂
                 (SbH₃ gives an Sb mirror, insoluble in NaOCl — distinguishes As from Sb)

## 28.12 Nitrides — the three classes (for "type of nitride / formula" questions)

| Class | Bonding | Examples | Hydrolysis |
|:--|:--|:--|:--|
| **Ionic (salt-like)** | contain N³⁻ | Li₃N, Na₃N, K₃N, Ca₃N₂, Mg₃N₂, Be₃N₂ | → NH₃ + M(OH)ₙ |
| **Covalent** | network / molecular | BN, AlN, Si₃N₄, Ge₃N₄, Sn₃N₄, P₃N₅, S₄N₄ | inert or slow |
| **Interstitial (metallic)** | N atoms in the octahedral holes of a metal lattice | **MN** (M = Sc, Ti, Zr, Hf, V, Nb, La), Fe₄N, Mn₄N | inert; very hard, high-melting, conducting, metallic lustre |

- In an interstitial nitride **MN**, N fills **all** the octahedral voids of a cubic
  close-packed (or hcp) metal → the metal : nitrogen ratio is **1 : 1** (contrast
  interstitial carbides, where C fills the voids of an fcc metal giving MC also 1:1, or
  M₂C, M₃C). The conductivity of the parent metal is **retained** because the small N atoms
  slot into holes without disturbing the metallic bonding.
- **BN** — hexagonal "inorganic graphite" (isoelectronic with C₂; white, lubricant,
  insulator); under high P/T → cubic **borazon**, as hard as diamond.
`;
