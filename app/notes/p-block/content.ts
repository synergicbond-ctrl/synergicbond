// Original P-block master notes authored for this course.

export const P_BLOCK_MASTER_MARKDOWN = String.raw`

# 1. P-block map, periodic trends and first-element anomaly

The p-block occupies Groups 13–18 of the periodic table (older IUPAC: III A–VII A and zero group). Valence-shell configuration runs **ns²np¹ to ns²np⁶**; helium (1s²) is placed in Group 18 because of its closed shell even though it has no np electrons. Six groups, over thirty elements: the block contains metals (Al, Ga, In, Tl, Sn, Pb, Bi), metalloids (B, Si, Ge, As, Sb, Te, Po) and non-metals (C, N, P, O, S, halogens, noble gases). Bonding character and the spread of accessible oxidation states are therefore far wider than in the s-block, where each group has essentially one stable state.

| Group | Valence configuration | Elements | Common oxidation states | Max. covalency (period 2 vs later) |
|---|---|---|---:|---|
| 13 | ns²np¹ | B, Al, Ga, In, Tl | +3, (+1 for heavier members) | 4 (B) vs 6 (Al onward, via d-orbitals) |
| 14 | ns²np² | C, Si, Ge, Sn, Pb | +4, +2 | 4 (C) vs 6 (Si onward) |
| 15 | ns²np³ | N, P, As, Sb, Bi | −3, +3, +5 | 4 (N) vs 6 (P onward) |
| 16 | ns²np⁴ | O, S, Se, Te, Po | −2, +2, +4, +6 | 2–4 (O) vs 6 (S onward) |
| 17 | ns²np⁵ | F, Cl, Br, I | −1, +1, +3, +5, +7 | 1 (F) vs 7 (Cl onward) |
| 18 | ns²np⁶ | He, Ne, Ar, Kr, Xe | 0 (Kr, Xe form real compounds) | 0 vs up to 8 (Xe) |

## 1.1 Quantitative periodic trends across the block

**Atomic/ionic radius.** Across a period, effective nuclear charge rises faster than shielding, so radius falls (B > C > N > O > F). Down a group, radius generally rises as a new shell is added, but the increase from period 4 to period 5 is small for elements just after the first transition series (Ga is barely larger than Al, and often has a *smaller* metallic radius than Al) because of poor shielding by the filled 3d¹⁰ subshell — this is the **d-block contraction**. A similar, larger effect (the lanthanide contraction) makes Tl only marginally bigger than In.

**Ionisation enthalpy.** IE₁ generally increases across a period and decreases down a group, but Group 13 shows a dip relative to Group 2 (B < Be is false — actually IE₁(B) < IE₁(Be) because the 2p electron removed in boron is less penetrating and more shielded than the 2s electron removed in beryllium) and Group 16 shows a dip relative to Group 15 (IE₁(O) < IE₁(N) because N has an extra-stable half-filled 2p³ configuration). These "saw-tooth" dips recur once more at Al<Mg and S<P for the same paired/half-filled reasons.

**Electronegativity and electron gain enthalpy** are treated separately in §1.2 because fluorine and oxygen are the standard exam traps.

## 1.2 Why the first member of each group is anomalous

B, C, N, O and F are all small, have unusually high ionisation enthalpy and electronegativity for their group, and — critically — **have no vacant d orbital in the valence shell** (n = 2). Three consequences follow, and every anomaly in the block can be traced to one of them:

1. **Maximum covalency is capped at 4** (one 2s + three 2p orbitals): CCl₄ exists but there is no stable "CCl₆²⁻"; NF₅ and OF₆ are unknown, while PCl₅/₆⁻, SF₆ and even [SiF₆]²⁻ exist for the heavier congeners.
2. **Strong pπ–pπ multiple bonding** is possible only for period-2 atoms because their 2p orbitals are similar in size and overlap well with each other (C=C, C≡C, N≡N, O=O, C=O, N=O). Heavier congeners (Si, P, S) rarely form stable analogous π bonds and instead favour single-bonded catenated or extended (pdπ or network) structures — e.g. CO₂ is a discrete linear molecule but SiO₂ is a three-dimensional network of single Si–O bonds.
3. **Fluorine and oxygen show unexpectedly weak single bonds to each other** (F–F and O–O) because their small size brings the lone pairs on adjacent atoms into strong mutual repulsion. This is *why* the electron gain enthalpy of F is less negative than that of Cl (§15), even though F is the most electronegative element.

The heavier congeners in each group are larger, have accessible d orbitals (from n = 3 onward, though the "d-orbital participation" language is now understood loosely as orbital availability/hybridisation convenience rather than literal d-orbital bonding) and commonly show higher coordination numbers (6 for Al, Si, S, Cl in typical complexes/oxoanions vs 3–4 for B, C, N, O).

## 1.3 Inert-pair effect

Down heavier p-block groups, the valence ns² electron pair increasingly resists participating in bonding and instead stays as a stereochemically distorting lone pair on the atom in its lower oxidation state. Consequently, **lower oxidation states become progressively more stable down a group**: Tl(I) is more stable than Tl(III); Pb(II) is more stable than Pb(IV); Bi(III) is more stable than Bi(V). PbO₂ is therefore a strong oxidising agent (it "wants" to fall to Pb²⁺), while Tl³⁺ is a good oxidising agent (it "wants" to fall to Tl⁺). This is a **relative-stability trend rooted in poor shielding and relativistic contraction of the 6s orbital for the sixth-period elements**, not a claim that the higher oxidation state cannot exist or is never encountered in a JEE question.

## 1.4 Chemical reactivity trends across the block

- **Towards air/O₂:** reactivity of the free element with dioxygen generally falls down a group (Li burns superficially, Cs ignites spontaneously is an s-block analogy; among p-block metals, Al forms a passivating oxide film while heavier Tl oxidises more readily in moist air due to inert-pair-driven Tl₂O formation).
- **Towards water:** covalent hydrides/halides of the smaller, harder first members often resist or slowly hydrolyse (CCl₄ does not hydrolyse — no low-lying empty orbital and no way to expand octene at carbon); the heavier congeners with accessible d-type orbitals hydrolyse readily and fast (SiCl₄, PCl₃, PCl₅ all hydrolyse instantly).
- **Towards halogens:** most p-block elements form halides directly; the highest halide (e.g., PCl₅, SF₆) requires excess halogen and is favoured when the central atom is large enough to avoid crowding — this is why NCl₅ is unknown but PCl₅ is common, and why SF₆ is inert to hydrolysis purely on **kinetic (steric/no low-energy pathway)**, not thermodynamic, grounds.
- **Towards acids and alkalis:** amphoteric behaviour (reacting with both acid and alkali) appears where a metal/metalloid oxide can act as both proton acceptor and donor — Al₂O₃, Al(OH)₃, PbO, SnO and As₂O₃ are the standard JEE examples; pure non-metal oxides (CO₂, SO₃, N₂O₅) are acidic only.

## 1.5 JEE Advanced checklist for Section 1

- Explain each stated exception using size, bond strength, electronegativity, poor shielding or the inert-pair effect — never just "because it is anomalous."
- Oxidation state is not the same as covalency or coordination number (e.g., in [PCl₆]⁻ phosphorus is +5 with covalency/coordination number 6).
- For an oxoacid, count ionisable O–H hydrogens; hydrogen attached directly to the central atom is normally non-ionisable (§10).

**Worked example 1.1.** *Arrange in order of increasing first ionisation enthalpy: B, Be, C, N, O.* Reasoning: Be (fully filled 2s²) > B (2s²2p¹, easy to lose the single p electron) but B's IE is still higher than expected only relative to its own period trend continuing upward; the accepted JEE order is B < Be < C < O < N, because Be and N both benefit from extra stability (filled and half-filled subshells respectively) that momentarily reverses the raw periodic increase.

# 2. Group 13: boron family, trends and electron-deficient bonding

Members are B, Al, Ga, In, Tl. Boron is the only true metalloid of the group — small, hard, exclusively covalent; Al, Ga, In, Tl are metals, though Al₂O₃/Al(OH)₃ stay amphoteric. Configuration is ns²np¹. The group oxidation state is +3; +1 becomes progressively more important down the group and is the *dominant, most stable* state for Tl (inert-pair effect).

## 2.1 Quantitative periodic trends

| Property | B | Al | Ga | In | Tl |
|---|---:|---:|---:|---:|---:|
| Atomic radius (pm) | 88 | 143 | 135 | 167 | 170 |
| IE₁ (kJ/mol) | 801 | 577 | 579 | 558 | 589 |
| ΣIE₁₊₂₊₃ (kJ/mol) | 6887 | 5139 | 5529 | 5029 | 5438 |
| Electronegativity | 2.0 | 1.5 | 1.6 | 1.7 | 1.8 |
| Density (g/cm³) | 2.35 | 2.70 | 5.91 | 7.31 | 11.85 |
| Melting point (K) | 2453 | 933 | 303 | 430 | 576 |
| Boiling point (K) | 3923 | 2740 | 2676 | 2356 | 1730 |

**Atomic radius order: B < Ga < Al < In < Tl.** Gallium is *smaller* than aluminium (135 pm vs 143 pm) despite sitting directly below it — the filled 3d¹⁰ subshell in Ga shields the nucleus poorly, so effective nuclear charge rises and the atom contracts. The same d/f-block contraction disturbs IE₁ (B > Tl > Ga > Al > In, not a smooth decrease) and pushes Tl's electronegativity above what a simple group trend would predict.

Boron's ΣIE (6887 kJ/mol) dwarfs every other member's — this is the quantitative reason **B³⁺ never forms**: no realistic lattice or hydration energy can compensate for removing three electrons from an atom this small. Boron bonds exclusively by covalent/coordinate means.

**Melting point** falls sharply from B (giant covalent B₁₂-icosahedral lattice, 2453 K) to Al (metallic lattice, 933 K), then dips further at Ga to a group-minimum 303 K — gallium melts in the hand. **Boiling point** falls smoothly instead (Ga: 2676 K), so gallium has the *largest liquid range of any element*, from 303 K to 2676 K.

## 2.2 Why gallium is structurally anomalous

- **Boron** is polymeric: B₁₂ icosahedra (12 boron atoms at the vertices of a regular icosahedron) covalently linked into a rigid infinite lattice — hence its extreme hardness and 2453 K melting point.
- **Al, In, Tl** adopt normal metallic lattices — cubic close packed (CCP).
- **Gallium** is unique: the solid is built from discrete **Ga₂ diatomic molecules** held together only by weak forces. Little energy is needed to melt it (303 K), but a great deal is needed to break the strong covalent Ga–Ga bond and vaporise it (2676 K) — this single fact explains both anomalies (low MP, huge liquid range) at once.
- Gallium also shows the water-like density anomaly: V(solid Ga) > V(liquid Ga) — it expands on freezing and must never be stored brim-full in a sealed glass container.

## 2.3 Electropositive character — E° and the inert-pair effect, quantified

| | B | Al | Ga | In | Tl |
|---|---:|---:|---:|---:|---:|
| E°(M³⁺/M) (V) | −0.87 | −1.66 | −0.56 | −0.34 | +1.26 |
| E°(M⁺/M) (V) | — | +0.55 | −0.79 | −0.18 | −0.34 |

Aluminium's E°(M³⁺/M) is strongly negative, so Al³⁺ forms readily in solution. **Thallium's is positive** — Tl³⁺ does *not* form spontaneously from the metal; instead Tl³⁺ is a strong oxidising agent that is readily reduced back to Tl⁺.

> **Worked Example — feasibility from E° and ΔG° = −nFE°.** Given E°(Al³⁺/Al) = −1.66 V and E°(Tl³⁺/Tl) = +1.26 V, is M³⁺ formed spontaneously when each metal dissolves in acid?
>
> The tabulated E° is always for *reduction*, M³⁺ + 3e⁻ → M. Dissolution is *oxidation*, so reverse the sign before substituting: E°(oxidation) = −E°(reduction).
>
> **Aluminium:** E°(oxidation) = +1.66 V. ΔG° = −nFE° = −(3)(96500)(+1.66) ≈ **−480.6 kJ/mol** — negative, spontaneous. Al³⁺ forms readily.
>
> **Thallium:** E°(oxidation) = −1.26 V. ΔG° = −(3)(96500)(−1.26) ≈ **+364.8 kJ/mol** — positive, non-spontaneous. Tl³⁺ does *not* form from the metal; it instead acts as an oxidant, accepting electrons to fall back to Tl⁺.
>
> **Fast method:** E°(oxidation) positive ⇒ ΔG° negative ⇒ spontaneous — you can often answer without the arithmetic.

The measurable quantity *behind* the inert-pair effect is the ns–np promotion energy, ΔE = E(np) − E(ns):

| | B | Al | Ga | In | Tl | Pb | Bi | Po | At |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| ΔE (eV) | 4.5 | 4.5 | 6.0 | 5.3 | 7.0 | 9.0 | 10.0 | 12.0 | 16.0 |

A larger gap means more energy is needed to promote an ns electron into bonding, so the ns² pair stays "inert." Thallium's 7.0 eV gap (vs boron/aluminium's 4.5 eV) is why Tl⁺ dominates while B and Al are locked at +3. The same widening gap running toward the bottom-right of the p-block (Pb 9.0, Bi 10.0, Po 12.0, At 16.0) is why Pb²⁺/Bi³⁺, not Pb⁴⁺/Bi⁵⁺, are the stable states there.

**Consequences to memorise:** stability of +3 falls, stability of +1 rises, down the group. Tl³⁺ < Tl⁺ in stability (Tl³⁺ oxidises); Ga⁺ < Ga³⁺ in stability (Ga⁺ reduces, and is a stronger reducing agent than In⁺, being the less stable of the pair).

> **Trap — GaX₂ is not gallium(II).** GaCl₂ looks like Ga(+2), but gallium never adopts +2. It is the mixed-valence salt **Ga⁺[Ga³⁺Cl₄]⁻** — one gallium at +1, one at +3, averaging to the deceptive +2. Consistently, in Ga[AlCl₄] the oxidation state of gallium is +1. Ga⁺ and In⁺ halides are unstable in water and disproportionate: 3GaX → 2Ga + GaX₃, and 3InX → 2In + InX₃.

## 2.4 Diagonal relationship: boron resembles silicon, not aluminium

Diagonal neighbours share similar size *and* similar charge density (charge/radius ratio), because shrinking across a period and enlarging down a group roughly cancel on the diagonal. B ↔ Si, not B ↔ Al:

- Both form covalent, electron-deficient/electron-precise hydrides that ignite spontaneously in air (B₂H₆, SiH₄) — unlike AlH₃, which is a polymeric covalent network, not a discrete molecular gas.
- Both B₂O₃ and SiO₂ are acidic oxides forming oxoacid-like species, unlike amphoteric Al₂O₃.
- Both boric and silicic acid are weak; both borates and silicates build extended chain/network structures from BO₃/BO₄ or SiO₄ units.
- Both give anionic complex fluorides, [BF₄]⁻ and [SiF₆]²⁻.

Contrast Al, which behaves like a typical metal — amphoteric oxide/hydroxide, forms simple Al³⁺(aq), reacts with both acid and base.

## 2.5 Diborane, B₂H₆ — structure and electron count

B₂H₆ has **4 terminal 2-centre-2-electron B–H bonds** and **2 bridging 3-centre-2-electron B–H–B bonds**. Electron count: each B contributes 3, each H contributes 1 → 2(3) + 6(1) = 12 electrons = 6 pairs; 4 pairs fill the terminal bonds, the remaining 2 pairs are spread over the two bridges.

**Exact geometry (examinable numbers):** terminal B–H = 119 pm; bridging B–H = 133 pm (longer/weaker, as expected for a 2-electron bond spread over 3 atoms); B···B = 177 pm; terminal H–B–H angle = 121.5°; bridging H–B–H angle = 97°. Each boron is roughly sp³. The two BH₂ units and both borons are coplanar; the bridging hydrogens sit above and below that plane — the **maximum number of atoms in one plane is 6** (2 B + 4 terminal H).

**STYX notation** codes any borane's bonding: S = number of B–H–B bridges, T = number of B–B–B bridges, Y = number of ordinary B–B bonds, X = number of BH₂ groups. Diborane's code is **2002**.

**Structural families** (by vertices removed from a closed polyhedron): *closo* (BₙHₙ²⁻, n = 6–12, complete cage), *nido* (BₙHₙ₊₄, one vertex missing), *arachno* (BₙHₙ₊₆, two vertices missing), *hypho* (BₙHₙ₊₈, three vertices missing), *conjuncto* (two or more cages joined).

**Six standard preparations:**

1. Mg₃B₂ + H₃PO₄ → mixture of boranes →(Δ) B₂H₆ (classical route via magnesium boride)
2. B₂O₃ + 2Al + 3H₂ →(750 atm, 150 °C) B₂H₆ + Al₂O₃
3. 2BF₃ + 6NaH →(180 °C) B₂H₆ + 6NaF
4. 2BCl₃ + 6H₂ →(electric discharge) B₂H₆ + 6HCl
5. 2NaBH₄ + I₂ →(diglyme) B₂H₆ + H₂ + 2NaI
6. 4Et₂O·BF₃ + 3LiAlH₄ →(ether) 4Et₂O + 3LiAlF₄ + 2B₂H₆ (or with 3NaBH₄ → 3NaBF₄ instead)

**Reactions:** combustion is spontaneous and strongly exothermic — B₂H₆ + 3O₂ → B₂O₃ + 3H₂O, ΔH = −1976 kJ/mol (studied as a rocket fuel); hydrolysis B₂H₆ + 6H₂O → 2H₃BO₃ + 6H₂; with alkali B₂H₆ + 6NaOH → 2Na₃BO₃ + 6H₂; with Cl₂ (vigorous) B₂H₆ + 6Cl₂ → 2BCl₃ + 6HCl; with LiH → LiBH₄ (stability order LiBH₄ < NaBH₄ < KBH₄, since the large BH₄⁻ anion is better stabilised by a larger cation); with CO (470 K, 20 bar) → 2H₃B·CO; with alcohols → 2B(OR)₃ + 6H₂.

**Cleavage of the bridge by Lewis bases** splits into two families: **symmetrical** cleavage by *large/bulky* bases (Me₃N, CO, PF₃, THF) gives two neutral adducts, B₂H₆ + 2L → 2H₃B·L; **unsymmetrical** cleavage by *small, strongly basic* amines (NH₃, MeNH₂, Me₂NH) gives an ionic product, B₂H₆ + 2NH₃ → [BH₂(NH₃)₂]⁺[BH₄]⁻. Heating the unsymmetrical product eliminates H₂ to give borazine.

**Hydrides of heavier members:** BH₃ borane, (AlH₃)ₙ alane, (GaH₃)₂ gallane, (InH₃)ₙ indane — none forms by direct combination with H₂. Alane is polymeric with 6-coordinate Al through 3-centre-2-electron Al–H–Al bridges; gallane is dimeric like diborane; indane is polymeric in both vapour and solid. **Digallane Ga₂H₆** mirrors diborane's structure but decomposes above 253 K (Ga₂H₆ → 2Ga + 3H₂), so every one of its reactions must be run cold: with NH₃ at 195 K, HCl at 178 K, NMe₃ at 178 K, PH₃ at low temperature — the weaker, more diffuse Ga–H–Ga bridge is why it is so much less stable than boron's.

## 2.6 Borazine and boron nitride

**Borazine (borazole), B₃N₃H₆** — "inorganic benzene." Isoelectronic with benzene (both 30 valence electrons, planar 6-ring), prepared by 3B₂H₆ + 6NH₃ →(450 K) 2B₃N₃H₆ + 12H₂, or from 3NH₄Cl + 3BCl₃ → trichloroborazine, reduced by NaBH₄. Colourless liquid, m.p. −5 to −6 °C, b.p. 53–56 °C, density 0.787 g/cm³. Its aromaticity is only ~36% that of benzene, because nitrogen (EN 3.0) holds the π density more than boron (EN 2.0) — delocalisation is uneven. Consequently borazine, unlike benzene, undergoes **addition**: B₃N₃H₆ + 3HCl → B₃N₃H₉Cl₃, with Cl⁻ adding to the electron-poor boron and H⁺ to the electron-rich nitrogen. It also hydrolyses (benzene does not): B₃N₃H₆ + 9H₂O →(Δ) 3H₃BO₃ + 3NH₃ + 3H₂. Because the ring alternates B and N, it has **4** dihalo derivatives where benzene has only 3 (ortho/meta/para) — a frequent counting trap.

**Boron nitride, (BN)ₓ** — "inorganic graphite." B–N bond order 1.33 (same back-donation logic as B–F). Hexagonal BN (h-BN) is sheet-like, alternating B/N hexagons stacked like graphite, but with layers **eclipsed** (each B directly above an N; graphite's are staggered) — B–N distance 145 pm, interlayer spacing 330 pm. h-BN is a soft lubricant ("white graphite"), an excellent electrical *insulator* yet an outstanding thermal conductor — the opposite of graphite's conductivity, because the polar B–N bond localises the π electrons on nitrogen instead of leaving them free. Cubic BN (borazon), made by compressing h-BN at high pressure/temperature, is the second-hardest known material after diamond and — unlike diamond — chemically stable toward hot iron, which is why it (not diamond) is used to machine steel.

**Hydroboration**, the organic pay-off of diborane: B–H adds across C=C with boron on the *less* substituted carbon (anti-Markovnikov, syn addition) — CH₂=CH₂ + BH₃·THF → CH₃CH₂BH₂ → (CH₃CH₂)₃B. Oxidation (HBO): BR₃ + H₂O₂/OH⁻ → B(OH)₃ + 3ROH gives the anti-Markovnikov alcohol with no carbocation rearrangement. Protonolysis (HBR): BR₃ + 3CH₃COOH → 3RH + B(CH₃COO)₃ reduces the alkene to an alkane.

# 3. Group 13 deep dive: borax, boric acid, BF₃, diborane and alums

## 3.1 Minerals and extraction of boron

| Mineral | Formula |
|---|---|
| Borax (Tincal) | Na₂B₄O₇·10H₂O ≡ Na₂[B₄O₅(OH)₄]·8H₂O |
| Colemanite | Ca₂B₆O₁₁·5H₂O |
| Boric acid (sassolite) | H₃BO₃ |
| Boronatrocalcite | CaB₄O₇·NaBO₂·8H₂O |
| Boracite | 2Mg₃B₈O₁₅·MgCl₂ |
| Kernite | Na₂B₄O₇·4H₂O |
| Mohavite | Na₂B₄O₇·5H₂O |

Boron never occurs free. **Extraction, Step I — B₂O₃:** from borax, Na₂B₄O₇ + 2HCl → 2NaCl + H₂B₄O₇, then H₂B₄O₇ + 5H₂O → 4H₃BO₃, then 2H₃BO₃ →(Δ) B₂O₃ + 3H₂O; or from colemanite by fusion, Ca₂B₆O₁₁ + 2Na₂CO₃ →(fusion) 2CaCO₃↓ + Na₂B₄O₇ + 2NaBO₂, with 4NaBO₂ + CO₂ → Na₂B₄O₇ + Na₂CO₃ recovering more borax; or Ca₂B₆O₁₁ + 4SO₂ + 11H₂O → 2Ca(HSO₃)₂ + 6H₃BO₃.

**Step II — reduction to boron:** B₂O₃ + 6Na (or 6K) → 2B + 3Na₂O (or 3K₂O); B₂O₃ + 3Mg → 2B + 3MgO gives ~95–98% pure **amorphous ("Moissan") boron**; electrolysis of fused B₂O₃ + MgO + MgF₂ at ~1373 K also works. **Crystalline boron** (small quantities): 2BCl₃ + 3H₂ →(red-hot W/Ta) 2B + 6HCl; the **Van Arkel method**, 2BI₃ →(red-hot W/Ta) 2B + 3I₂; or thermal decomposition B₂H₆ →(Δ) 2B + 3H₂.

**Reactions of amorphous boron:** 4B + 3O₂ →(700 °C) 2B₂O₃ · 2B + 3S →(1200 °C) B₂S₃ · 2B + N₂ →(very high T) 2BN · 2B + 3X₂ → 2BX₃ · 3Mg + 2B → Mg₃B₂ · 4B + C →(electric furnace) B₄C (norbide, used in bulletproof armour) · B + 3HNO₃ → H₃BO₃ + 3NO₂ · 2B + 3H₂SO₄ → 2H₃BO₃ + 3SO₂ · 2B + 6NaOH → 2Na₃BO₃ + 3H₂. Water/steam: no reaction. Crystalline boron is almost unreactive at room temperature — the reactive form is amorphous.

## 3.2 Borax — preparation, thermal chain, bead test

Three crystalline forms: prismatic Na₂B₄O₇·10H₂O, octahedral Na₂B₄O₇·5H₂O, and anhydrous borax glass Na₂B₄O₇. From boric acid: 4H₃BO₃ + Na₂CO₃ → Na₂B₄O₇ + 6H₂O + CO₂.

**Thermal chain:** Na₂B₄O₇·10H₂O →(~60 °C) Na₂B₄O₇·5H₂O →(Δ) Na₂B₄O₇ →(**740 °C**) 2NaBO₂ + B₂O₃, the transparent **glassy mass** used in the bead test.

**Alkaline hydrolysis (buffer action):** Na₂B₄O₇ + 7H₂O ⇌ 2NaOH + 4H₃BO₃ — equal amounts of the weak acid B(OH)₃ and its conjugate base [B(OH)₄]⁻ form, which is exactly why borax solution acts as a buffer.

> **Worked Example — why 1 mol borax neutralises 2 mol acid.** Dissolving borax gives [B₄O₅(OH)₄]²⁻ + 5H₂O ⇌ 2B(OH)₃ + 2[B(OH)₄]⁻ — equal amounts of each. B(OH)₃ is itself an acid and cannot neutralise H₃O⁺; only the basic [B(OH)₄]⁻ reacts: 2[B(OH)₄]⁻ + 2H₃O⁺ → 2B(OH)₃ + 4H₂O. So 2 mol of borate anion consume 2 mol acid — borax is a **diacidic base**, which is exactly why it is a primary standard: Na₂B₄O₇ + 2HCl + 5H₂O → 2NaCl + 4H₃BO₃ (white flakes of boric acid separate on cooling).

**Bead test:** Na₂B₄O₇ →(Δ) 2NaBO₂ + B₂O₃, then MO + B₂O₃ → M(BO₂)₂. Oxidising-flame colours: Cu blue, Fe green, Co blue, Ni brown, Cr green. In the *reducing* flame copper instead gives red-brown (Cu₂O/Cu). The test fails for colourless-ion metals (Na⁺, Ca²⁺, Al³⁺) since their metaborates are colourless — Ag⁺, for instance, gives no distinguishing colour because AgBO₂ is white.

Other reactions: with NH₄Cl on strong heating, Na₂B₄O₇ + 2NH₄Cl → 2BN + B₂O₃ + 2NaCl + 4H₂O (a lab route to BN); sodium perborate (the washing-powder brightener), 2NaBO₂ + 2H₂O₂ + 6H₂O → Na₂[(OH)₂B(O–O)₂B(OH)₂]·6H₂O, releases H₂O₂ above 80 °C as the –O–O– linkages break down.

## 3.3 Orthoboric acid, H₃BO₃

White, soft, needle-shaped, soapy-feeling crystals; steam volatile; sparingly soluble in cold water, freely soluble in hot. **Thermal chain:** H₃BO₃ →(100 °C) HBO₂ (metaboric acid) →(160 °C) H₂B₄O₇ (tetraboric acid) →(red hot) B₂O₃.

It is a **Lewis acid, not a Brønsted acid**: B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺, pK = 9.25 (monomer). At higher concentration a *stronger* polymeric species forms: 3B(OH)₃ ⇌ H₃O⁺ + [B₃O₃(OH)₄]⁻ + H₂O, pK = 6.84.

**Structure:** planar BO₃ triangles, hydrogen-bonded into 2-D sheets of near-hexagonal symmetry, layers ~3.18 Å apart — the structural reason for the soapy feel and easy cleavage into fine flakes.

> **Worked Example — the glycerol titration.** Boric acid cannot be titrated sharply against NaOH with phenolphthalein alone, but becomes sharp with excess glycerol or mannitol. Why, and would ethanol work?
>
> A cis-1,2-diol chelates the tetrahedral borate centre, forming a stable 5-membered cyclic ester (two diols can bind one boron). By Le Chatelier, consuming [B(OH)₄]⁻ as this chelate pulls B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺ far to the right, releasing far more H₃O⁺ and giving a sharp endpoint. **Ethanol will not work** — it is monohydric and cannot chelate; the requirement is specifically a cis-1,2-diol (glycerol, mannitol, catechol, salicylic acid, sugar).

Other reactions: esterification, H₃BO₃ + 3ROH → B(OR)₃ + 3H₂O, whose vapour burns with a **green-edged flame** — the classical borate test; with NH₄HF₂, H₃BO₃ + NH₄HF₂ → NH₄BF₄ →(Δ) NH₄F + BF₃; with metal oxides, 2H₃BO₃ + MO → M(BO₂)₂ + 3H₂O. **Borosalicylic acid**, where a tetrahedral boron is chelated by two salicylate ligands, is the standard example of an *optically active* boron compound.

**Borate classification:** orthoborate BO₃³⁻ (isolated, e.g. Ca₃(BO₃)₂); metaborate BO₂⁻ (chain/ring, including cyclic B₃O₆³⁻); pyroborate B₂O₅⁴⁻ (two BO₃ sharing one O); complex borates with both 3- and 4-coordinate B (borax's own anion); peroxoborates [B₂(O₂)₂(OH)₄]²⁻ with genuine –O–O– links.

## 3.4 Boron halides — back-bonding, acidity order, hydrolysis

Prepared by 2B + 3X₂ → 2BX₃; BF₃ specifically via B₂O₃ + 3CaF₂ + 3H₂SO₄ → 2BF₃ + 3CaSO₄ + 3H₂O; the heavier halides via B₂O₃ + 3C + 3X₂ → 2BX₃ + 3CO. States: BF₃ colourless gas; BCl₃, BBr₃ fuming liquids; BI₃ fusible solid.

> **Worked Example — back-bonding explains three separate facts at once.**
>
> **(a) B–F bond order = 1.33.** Boron's empty 2p orbital accepts π density from a fluorine lone pair; three equivalent resonance structures spread one π bond over three B–F bonds, giving bond order 1 + 1/3.
>
> **(b) Lewis acidity order is the reverse of electronegativity: BF₃ < BCl₃ < BBr₃ < BI₃.** Fluorine's 2p orbital overlaps boron's compact 2p orbital efficiently, so back-donation is strongest for BF₃ — this partially satisfies boron and makes it the *weakest* Lewis acid despite F being most electronegative. Back-donation falls off sharply for the larger, more diffuse 3p/4p/5p orbitals of Cl/Br/I, so BI₃ (weakest back-donation, strongest genuine electron deficiency) is the strongest Lewis acid. Direct evidence: BCl₃ and BBr₃ form adducts with the weak base AsH₃, but **BF₃ does not** — it is already too electron-satisfied.
>
> **(c) BF₃ hydrolyses only partially.** 4BF₃ + 12H₂O → 4H₃BO₃ + 12HF, then the HF attacks most of that boric acid: 12HF + 3H₃BO₃ → 3H₃O⁺ + 3BF₄⁻ + 9H₂O. Net: **4BF₃ + 3H₂O → H₃BO₃ + 3HBF₄** — only ¼ mole of H₃BO₃ per mole of BF₃, the rest locked up as very stable fluoroboric acid. BCl₃, BBr₃, BI₃ all hydrolyse *completely* instead: BCl₃ + 3H₂O → H₃BO₃ + 3HCl.

Halide scrambling: mixing two boron halides at room temperature reaches a statistical equilibrium of all species, BF₃ + BCl₃ ⇌ BFCl₂ + BF₂Cl (a mixed BFClBr has even been reported from a three-halide mixture). Boron also forms genuine B–B-bonded **dihalides**, B₂X₄: 2BCl₃ + 2Hg →(electric discharge, low pressure) B₂Cl₄ + Hg₂Cl₂ — planar but free to rotate about the B–B bond, decomposing slowly at room temperature. (Contrast Ga/In "dihalides," which are the mixed-valence salts Ga⁺[GaCl₄]⁻/In⁺[InCl₄]⁻, not true M(II) species.)

## 3.5 Halides of the heavier members — a comparative view

**Ionic vs covalent:** AlF₃, GaF₃, InF₃ are ionic; every other Group 13 trihalide is covalent, and boron's are always **monomeric** — boron is too small to bridge.

> **Trap — TlI₃ is not thallium(III) iodide.** It is **Tl⁺(I₃)⁻**, thallium(I) tri-iodide, containing the linear triiodide ion. True Tl³⁺(I⁻)₃ cannot exist: Tl³⁺ is a strong oxidant and I⁻ a good reductant, so they redox-collapse (Tl³⁺ + 2I⁻ → Tl⁺ + I₂, then I₂ + I⁻ → I₃⁻). The same logic rules out any strongly-oxidising-cation/strongly-reducing-anion pairing (Cu²⁺ with I⁻, Fe³⁺ with I⁻ behave the same way).

**Lewis acidity reverses with base hardness (HSAB):** toward hard bases (F⁻, O-donors), BX₃ > AlX₃ > GaX₃ > InX₃; toward soft bases (S-, P-donors), the order **inverts** to BX₃ < AlX₃ < GaX₃ < InX₃. Maximum coordination for B and Al is satisfied only by F (BF₄⁻, AlF₆³⁻); for Ga and In, CN 6 is reached with either F or Cl ([GaX₆]³⁻, [InX₆]³⁻).

**Coordination number of AlX₃ by state:**

| State | AlF₃ | AlCl₃ | AlBr₃ | AlI₃ |
|---|---:|---:|---:|---:|
| Solid | CN 6 | CN 6 | CN 4 | CN 4 |
| Melt | — | CN 4 | CN 4 | CN 4 |
| Vapour | monomer | CN 4 | CN 4 | CN 4 |

AlCl₃ is 6-coordinate in the solid (an ionic-like layer lattice — hence conducting) but drops to 4-coordinate dimeric Al₂Cl₆ on melting (a poor conductor) — a favourite conceptual contrast. In the vapour, Al₂Cl₆ predominates *below* ~350 °C and dissociates to the monomer *above* it.

**Al₂Cl₆'s bridges are electron-precise** (chlorine genuinely donates a lone pair, 3-centre-4-electron), unlike diborane's electron-*deficient* 3-centre-2-electron B–H–B bridges — the single most-asked comparison between the two dimers.

## 3.6 Oxides, hydroxides and the acid–amphoteric–base gradation

| | B | Al | Ga | In | Tl |
|---|---|---|---|---|---|
| Oxide | B₂O₃ acidic | Al₂O₃ amphoteric | Ga₂O₃ amphoteric | In₂O₃ basic | Tl₂O basic |
| Hydroxide | B(OH)₃ acidic | Al(OH)₃ amphoteric | Ga(OH)₃ amphoteric | In(OH)₃ basic | TlOH basic (strong, like an alkali hydroxide) |

The gradation tracks metallic character. B₂O₃, though generally acidic, behaves as a *base* toward a stronger acidic oxide: B₂O₃ + 3SO₃ → B₂(SO₄)₃, and 2B₂O₃ + P₄O₁₀ → 4BPO₄.

**Alumina, Al₂O₃**, occurs as bauxite and corundum; amphoteric (→ AlCl₃ with acid, → NaAlO₂ with alkali); polar covalent. Two forms: **γ-Al₂O₃**, from 2Al(OH)₃ →(450 °C) γ-Al₂O₃ + 3H₂O — soft, high surface area, used as a *dehydrating agent, adsorbent, catalyst support and in chromatography*; **α-Al₂O₃**, from Al(OH)₃ →(1000 °C) α-Al₂O₃ — very hard corundum structure, the thermodynamically stable form, used as an *abrasive and refractory*. γ converts irreversibly to α on strong heating. Precious corundum gems get their colour from trace transition-metal ions: ruby (red, Cr³⁺), sapphire (blue, Fe²⁺/Fe³⁺ and Ti⁴⁺), oriental topaz (yellow, Fe³⁺), oriental emerald (green, Cr³⁺/V³⁺).

**Mohs hardness scale:** 1 talc · 2 gypsum · 3 calcite · 4 fluorite · 5 apatite · 6 feldspar · 7 quartz · 8 topaz · **9 corundum (α-Al₂O₃)** · 10 diamond. Cubic boron nitride (borazon) rivals diamond in hardness and — unlike diamond — is chemically stable toward hot iron, which is why it, not diamond, machines steel.

## 3.7 Aluminium metal and its chief compounds

Silvery-white, density 2.7 g/cm³, m.p. 660 °C, an excellent conductor, malleable and ductile. Dry air: no action. Moist air: a thin protective Al₂O₃ film forms. Very high temperature: burns to give *both* Al₂O₃ and AlN (hot aluminium absorbs N₂). With alkali: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂. With acid: dissolves in dilute H₂SO₄/HCl, but **conc. HNO₃ passivates** it. With water: no reaction cold; slowly attacked by steam. **Thermite (Goldschmidt) reduction:** Al reduces the oxide of any less reactive metal — Fe₂O₃ + 2Al → Al₂O₃ + 2Fe, Cr₂O₃ + 2Al → Al₂O₃ + 2Cr, 3MnO₂ + 4Al → 2Al₂O₃ + 3Mn.

**AlCl₃·6H₂O** is colourless and water-soluble; anhydrous AlCl₃ is deliquescent. You **cannot** obtain the anhydrous salt by heating the hydrate — 2AlCl₃·6H₂O →(Δ) Al₂O₃ + 6HCl + 9H₂O instead; anhydrous AlCl₃ needs Cl₂ on heated Al, or Al₂O₃ + 3C + 3Cl₂ → 2AlCl₃ + 3CO. In moist air: AlCl₃ + 3H₂O ⇌ Al(OH)₃ + 3HCl (white fumes). As a Lewis acid it absorbs ammonia: AlCl₃ + 6NH₃ → AlCl₃·6NH₃.

**Two qualitative-analysis tests worth memorising as a pair:** with NaOH, Al(OH)₃↓ forms and *dissolves in excess* NaOH (→ NaAlO₂) — this distinguishes Al³⁺ from Mg²⁺/Ca²⁺/Sr²⁺/Ba²⁺, whose hydroxides do not redissolve. With NH₄OH, Al(OH)₃↓ forms and *does not* dissolve in excess NH₄OH — this distinguishes Al³⁺ from Zn²⁺, whose hydroxide *does* redissolve (as the ammine complex).

Hydrolysis makes AlCl₃ solution acidic: [Al(H₂O)₆]³⁺ ⇌ [Al(H₂O)₅OH]²⁺ + H⁺, and the hydroxo cation dimerises. With LiH: 4LiH + AlCl₃ → LiAlH₄ + 3LiCl, the standard LAH synthesis. AlCl₃ is the classic **Friedel-Crafts catalyst** — alkylation via R–Cl + AlCl₃ → R⁺ + AlCl₄⁻, acylation via R–COCl + AlCl₃ → R–C⁺=O (acylium, resonance-stabilised, so it avoids the rearrangement that plagues alkylation).

## 3.8 Alums

General formula **M₂SO₄·M′₂(SO₄)₃·24H₂O** (M univalent, M′ trivalent), containing [M(H₂O)₆]⁺, [M′(H₂O)₆]³⁺ and SO₄²⁻ in the ratio 1:1:2. M can be K⁺, Na⁺, NH₄⁺, Rb⁺, Cs⁺, Tl⁺ — **not Li⁺**, which is too small for the lattice. M′ can be Al³⁺, Ti³⁺, V³⁺, Cr³⁺, Fe³⁺, Mn³⁺, Co³⁺, Ga³⁺. Named alums: potash (K₂SO₄·Al₂(SO₄)₃·24H₂O), chrome (…Cr₂(SO₄)₃…), ferric (…Fe₂(SO₄)₃…), ammonium ((NH₄)₂SO₄·Al₂(SO₄)₃·24H₂O). Alums are **double salts** — they dissociate completely in solution, so every ion gives its normal test (unlike a complex salt, whose coordinated ion is masked). Prepared by fusing equimolar M₂SO₄ and M′₂(SO₄)₃ then crystallising. Uses: mordant in dyeing (Al(OH)₃ deposits into fibre and adsorbs the dye), germicide in water purification, coagulating agent for colloidal impurities.

## 3.9 Practice problems

1. Which cation does *not* give the borax bead test? *(Ag⁺ — its metaborate AgBO₂ is colourless.)*
2. BF₃ + LiAlH₄ →(ether) X. Identify X and count its 2c-2e and 3c-2e bonds. *(X = B₂H₆; 4 terminal 2c-2e bonds, 2 bridging 3c-2e bonds, 12 bonding electrons total.)*
3. What happens when BF₃ is kept in moist air? *(It fumes strongly and hydrolyses only partially — see §3.4.)*
4. True or false: BCl₃ in aqueous solution exists as B³⁺ and Cl⁻. *(False — it hydrolyses to boric acid; B³⁺ never forms.)*
5. Write the equations for preparing elemental boron from colemanite. *(See §3.1 — mineral → boric acid → B₂O₃ → reduction.)*
6. Arrange BF₃, BCl₃, BBr₃, BI₃ by increasing Lewis acid strength. *(BF₃ < BCl₃ < BBr₃ < BI₃ — see §3.4.)*
7. Explain why 1 mol of borax reacts with exactly 2 mol of acid. *(See the worked example in §3.2 — only [B(OH)₄]⁻, not B(OH)₃, is basic.)*
8. Why is TlI₃ not thallium(III) iodide? *(It is Tl⁺(I₃)⁻ — see the trap in §3.5.)*
9. Distinguish an Al³⁺ salt from a Zn²⁺ salt using NH₄OH. *(Al(OH)₃ stays precipitated in excess NH₄OH; Zn(OH)₂ redissolves — see §3.7.)*
10. Why does aluminium chloride exist as a dimer in benzene but not in water? *(Al completes its octet via Cl-bridging in non-donor solvents; water solvates/ionises it to [Al(H₂O)₆]³⁺ instead.)*
# 4. Group 14: carbon, silicon, catenation and the inert-pair effect

Members are C, Si, Ge, Sn, Pb. Configuration ns²np². Classification runs cleanly from non-metal to metal: C, Si non-metals; Ge metalloid; Sn, Pb metals — sharper than Group 13's messier progression. The group oxidation state is +4 (mostly covalent); +2 becomes progressively more important and is dominant at Pb — the inert-pair effect here is stronger than in Group 13, since it is the ns² pair alone resisting ionisation after both np electrons are already lost.

## 4.1 Quantitative periodic trends

| Property | C | Si | Ge | Sn | Pb |
|---|---:|---:|---:|---:|---:|
| Atomic radius (pm) | 77 | 118 | 122 | 141 | 175 |
| IE₁ (kJ/mol) | 1086 | 786 | 762 | 709 | 716 |
| Electronegativity | 2.5 | 1.8 | 1.8 | 1.8 | 1.9 |
| Melting point (K) | 3820 (diamond) | 1683 | 1211 | 505 | 601 |
| C–C / Si–Si bond enthalpy (kJ/mol) | 346 | 226 | — | — | — |

**Atomic radius** rises fairly regularly (C < Si < Ge < Sn < Pb) — no Ga-style dip here, since the d-block contraction affects Ge only mildly and is outweighed by the added shell. **IE₁** falls steadily then flattens at the bottom (Sn ≈ Pb), reflecting the inert-pair effect making the heaviest members reluctant to lose *any* electron easily, not just the ns² pair.

## 4.2 Catenation collapse and the inert-pair effect at its strongest

**Catenation** (element–element self-linking) falls off sharply: C ≫ Si > Ge ≈ Sn ≫ Pb. Carbon's C–C bond (346 kJ/mol) is far stronger than Si–Si (226 kJ/mol) because carbon's small 2p orbitals overlap efficiently, while silicon's larger, more diffuse 3p orbitals overlap poorly and the bond is further weakened by significant nucleus–nucleus repulsion at bonding distance. By lead, catenation is essentially absent — Pb–Pb chains are unknown outside a few exotic clusters.

> **Worked Example — the Sn²⁺/Pb⁴⁺ redox pairing.** Equal moles of SnCl₂ and PbO₂ are each treated with excess conc. HCl. Identify oxidant/reductant in each case and explain why these are opposite ends of the same couple.
>
> Sn²⁺ + Hg²⁺ → Sn⁴⁺ + Hg — tin is *oxidised*; SnCl₂ is a reducing agent, because +2 is *less* stable than the group state +4 for tin.
>
> PbO₂ + 4HCl → PbCl₂ + Cl₂ + 2H₂O — lead goes from +4 to +2, *reduced*; chlorine is oxidised. PbO₂ is an oxidant, exactly analogous to MnO₂, because +2 is *more* stable than +4 for lead (inert-pair effect dominates at the group's heaviest member).
>
> **Fast method:** any time you see Sn²⁺ with a decent oxidant, assume oxidation to Sn⁴⁺. Any time you see Pb⁴⁺ (PbO₂, Pb₃O₄) with any decent reductant — even just conc. HCl — assume reduction to Pb²⁺.

**Multiple bonding:** only carbon forms strong pπ–pπ bonds (C=C, C≡C, C=O). Silicon and heavier members cannot — their larger, more diffuse p orbitals overlap poorly with a neighbour's compact 2p orbital — and instead satisfy higher bond order through pπ–dπ donation into empty d-orbitals (available from Si onward) or simply by using more single bonds in an extended network.

## 4.3 Diagonal relationship and the CO₂ vs SiO₂ contrast

> **Worked Example — why CO₂ is a gas but SiO₂ is a solid melting above 1900 K, despite the identical XO₂ formula.**
>
> Carbon's compact 2p orbitals form strong C=O π bonds, so CO₂ is O=C=O — a small, discrete, linear molecule held to its neighbours only by weak van der Waals forces, hence gaseous. Silicon's 3p orbitals are too large and diffuse for efficient π overlap with oxygen's 2p orbital, so silicon instead satisfies all 4 bonds with FOUR single Si–O bonds, each oxygen bridging to a second silicon — forcing an extended 3-D network of corner-sharing SiO₄ tetrahedra, a single giant covalent "molecule" spanning the whole crystal.
>
> **Reactivity consequence:** both react with NaOH, but SiO₂ needs *hot, concentrated* NaOH (SiO₂ + 2NaOH → Na₂SiO₃ + H₂O — the reason NaOH solution is stored in polyethylene, not glass, bottles) while CO₂ reacts even with cold, dilute NaOH (CO₂ + 2NaOH → Na₂CO₃ + H₂O).
>
> **General method:** whenever comparing a 2nd-period p-block compound to its heavier analogue, check first whether pπ–pπ multiple bonding is possible for the heavier element — it almost never is, and that is usually the whole explanation.

## 4.4 Hydrides — thermal stability and reducing power

**MH₄ hydrides:** CH₄, SiH₄, GeH₄, SnH₄, PbH₄. Thermal stability falls sharply down the group (CH₄ ≫ SiH₄ > GeH₄ > SnH₄ > PbH₄, which barely exists) as M–H bond strength weakens with increasing atomic size. Reducing power *rises* down the group in exactly the opposite order — SiH₄ ignites spontaneously in air (SiH₄ + 2O₂ → SiO₂ + 2H₂O), while CH₄ needs a spark. This pairing (stability falls, reducing power rises) recurs throughout the p-block hydrides and is worth recognising as a single pattern rather than five separate facts.

**Catenation ceiling by element:** carbon forms hydrocarbon chains of essentially unlimited length; silicon forms silanes SiₙH₂ₙ₊₂ only up to about n = 8 before Si–Si bonds become too weak and reactive to isolate; germanium reaches a similarly short chain limit; tin and lead form no significant hydride chains at all.

## 4.5 Halides — SiCl₄ vs CCl₄, a hydrolysis contrast that mirrors CO₂ vs SiO₂

> **Worked Example — CCl₄ resists hydrolysis; SiCl₄ hydrolyses instantly. Why, given both are MX₄ tetrahedral molecules?**
>
> SiCl₄ + 3H₂O → H₂SiO₃ + 4HCl proceeds readily, but CCl₄ is completely inert to water even on boiling. The difference is *not* electronegativity or bond polarity — both are covalent MX₄ molecules — it is **orbital availability**. Silicon (n = 3) has empty, energetically accessible 3d orbitals that a water oxygen lone pair can attack first, forming a 5-coordinate transition state before Cl⁻ leaves (an associative, SN2-like mechanism). Carbon (n = 2) has no d-orbitals and cannot expand its coordination past 4 — with no accessible pathway for the incoming nucleophile, hydrolysis simply cannot proceed, regardless of how thermodynamically favourable the products would be.
>
> **General rule:** whenever a period-3-onward MX₄ halide hydrolyses easily but its period-2 analogue does not, suspect exactly this — d-orbital availability enabling nucleophilic attack, not a difference in bond strength or polarity.

**PbCl₄ vs PbCl₂:** PbCl₄ is thermally unstable and decomposes on warming, PbCl₄ → PbCl₂ + Cl₂ — the inert-pair effect again, now expressed as a halide's own decomposition rather than just a redox reaction with an external agent.

# 5. Group 14 deep dive: allotropes, carbon oxides and silicon materials

## 5.1 Allotropes of carbon

**Diamond:** every carbon sp³, tetrahedrally bonded to 4 others (C–C = 154 pm) in a rigid extended 3-D network. Hardest known natural substance; poor electrical conductor (every valence electron is localised in a σ bond, none free); excellent thermal conductor (vibrations propagate efficiently through the rigid lattice).

**Graphite:** every carbon sp², bonded to 3 others in flat hexagonal sheets (C–C = 141.5 pm, shorter than diamond's due to partial double-bond character from the delocalised 4th electron). That delocalised electron makes graphite conduct *along* the sheet and gives it its soft, slippery feel — layers held only by weak van der Waals forces slide over each other, hence its use as a dry lubricant and pencil "lead." Graphite is thermodynamically *more* stable than diamond at room temperature and pressure, though the interconversion is immeasurably slow without extreme conditions.

**Fullerenes:** C₆₀ (Buckminsterfullerene) is a closed cage of 20 hexagons + 12 pentagons, all sp² carbon, shaped like a football. It is the *only* crystalline allotrope of carbon with a well-defined, finite molecular formula — diamond and graphite are giant covalent networks with no fixed formula. C₆₀ contains both single and double C–C bonds; it does not have graphite's fully delocalised aromatic system.

> **Fast recall:** sp³ tetrahedral network = hardest insulator (diamond); sp² sheets + van der Waals gaps = soft conductor (graphite).

## 5.2 Oxides of carbon

**Carbon monoxide, CO** is a **neutral** oxide — it does *not* react with water, dilute acid or dilute base under normal conditions, despite being a non-metal oxide (a classic trap). Prepared by incomplete combustion, or in the lab by dehydrating formic acid with hot conc. H₂SO₄: HCOOH → CO + H₂O. CO is isoelectronic with N₂ and CN⁻, bonding to transition metals through the lone pair on carbon to form very stable metal carbonyls — exactly why CO poisoning is dangerous (it binds haemoglobin roughly 200× more strongly than O₂).

**Carbon dioxide, CO₂** is acidic, linear (O=C=O), sp-hybridised carbon; forms carbonic acid in water, CO₂ + H₂O ⇌ H₂CO₃.

**Industrial CO sources — producer gas and water gas:** producer gas passes air over red-hot coke: C + O₂ → CO₂ (exothermic), immediately followed by CO₂ + C → 2CO (endothermic), giving a cheap CO + N₂ fuel/reducing mixture. Water gas passes steam over red-hot coke: C + H₂O → CO + H₂ (endothermic), giving CO + H₂ — an important feedstock for methanol synthesis and Fischer-Tropsch chemistry. Both are the same underlying idea: excess hot carbon reduces an oxidant while itself reaching only +2 (CO), because any CO₂ formed is immediately reduced back to CO by the surrounding coke.

## 5.3 Silicon carbide and silica gel

**Silicon carbide (SiC, carborundum):** extremely hard, made by heating SiO₂ with excess coke at high temperature (SiO₂ + 3C →(Δ) SiC + 2CO); used as an abrasive.

**Silica gel:** amorphous (non-crystalline) SiO₂, prepared by acidifying sodium silicate solution; the resulting gel dries to a highly porous solid with enormous internal surface area. It works as a desiccant/adsorbent purely by physical adsorption of moisture into its pores — not by any special chemical reactivity.

## 5.4 Producer/water gas numerical and the CO/CO₂ mixture problem

> **Worked Example — separating CO from CO₂ in a gas mixture (a classic quantitative-analysis question).** A gas mixture of CO and CO₂ is passed first through Ca(OH)₂ solution, then the residual gas through hot I₂O₅. How is each component quantified?
>
> **Step 1 — remove and quantify CO₂:** Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O. The residual gas volume after this step is entirely CO; the mass of CaCO₃ precipitated gives the original moles of CO₂ directly.
>
> **Step 2 — quantify the remaining CO:** the residual CO reduces iodine pentoxide, 5CO + I₂O₅ → I₂ + 5CO₂. The I₂ liberated is titrated against standard sodium thiosulphate, I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆, and the thiosulphate volume back-calculates the moles of CO via the 5:1 (CO:I₂) then 1:2 (I₂:S₂O₃²⁻) stoichiometric chain.
>
> **General method:** this two-reagent strategy — a basic hydroxide to remove the acidic component, then a selective oxidant/reductant coupled to an iodometric titration for the other — is the standard template for separating and quantifying any acidic/neutral gas pair in a mixture.

## 5.5 Glass and cement — two industrial silicate materials

**Ordinary (soda-lime) glass** is a mixture of sodium and calcium silicates, made by fusing sand (SiO₂), soda ash (Na₂CO₃) and limestone (CaCO₃): Na₂CO₃ + SiO₂ →(Δ) Na₂SiO₃ + CO₂, and CaCO₃ + SiO₂ →(Δ) CaSiO₃ + CO₂. Glass is not a true crystalline solid but an **amorphous, supercooled liquid** — it has no sharp melting point, only a softening range, which is why old window panes can be measurably thicker at the bottom.

**Portland cement**, similarly silicate-based, sets by hydrating calcium silicates (Ca₃SiO₅, Ca₂SiO₄) into an interlocking network of hydrated calcium silicate gel — the same SiO₄-tetrahedron logic underlies both materials, just with different cation frameworks and degrees of cross-linking.

# 6. Silicates, zeolites and silicones: framework logic

## 6.1 Silicate classification by shared oxygens

Every silicate is built from the **SiO₄ tetrahedron**. The number of oxygens *shared* between adjacent tetrahedra sets the structure type — the single organising idea of this whole topic:

| Shared O per tetrahedron | Structure type | Example |
|---:|---|---|
| 0 | Orthosilicate (isolated SiO₄⁴⁻) | Zircon, olivine |
| 1 | Pyrosilicate (Si₂O₇⁶⁻) | Thortveitite |
| 2 | Chain/pyroxene silicate | Enstatite (single chain), asbestos (double chain) |
| 3 | Sheet silicate | Mica, talc, kaolin |
| 4 | 3-D framework silicate | Quartz, feldspar |

All of these, remarkably, share the *same* empirical formula ratio SiO₂ once fully cross-linked, despite radically different structures — the shared-oxygen count, not the formula, is what the question is really asking about.

## 6.2 Zeolites

3-D aluminosilicate frameworks in which some Si⁴⁺ is replaced by Al³⁺, giving the framework a net negative charge balanced by mobile cations (Na⁺, Ca²⁺) sitting in cavities. That mobility is exactly what makes zeolites useful as **ion-exchangers** (water softening) and **molecular sieves** (size-selective adsorption/catalysis, since the cavity size can be tuned by composition).

## 6.3 Silicones

Synthetic polymers (R₂SiO)ₙ with a repeating –Si–O–Si–O– backbone and organic groups (commonly methyl) attached to silicon. Prepared by hydrolysis of R₂SiCl₂ followed by condensation polymerisation: nR₂SiCl₂ + 2nH₂O → n R₂Si(OH)₂ + 2nHCl, then condensation eliminates water to build the chain. Water-repellent, thermally stable, chemically inert — used as sealants, lubricants, waterproofing agents, and in medical implants.

## 6.4 Tin and lead compounds

**SnCl₂:** a reducing agent, readily oxidised to Sn⁴⁺ — used to reduce Hg²⁺ to Hg and Fe³⁺ to Fe²⁺ in qualitative tests.

**PbO₂:** a strong oxidising agent, readily reduced to Pb²⁺ — oxidises conc. HCl to Cl₂ and Mn²⁺ to MnO₄⁻ (see the worked Sn²⁺/Pb⁴⁺ example in §4.2).

**Pb₃O₄ (red lead):** a mixed oxide, effectively 2PbO·PbO₂. With dilute HNO₃: Pb₃O₄ + 4HNO₃ → 2Pb(NO₃)₂ + PbO₂ + 2H₂O — a classic piece of evidence for its mixed +2/+4 oxidation states, since only the +4 portion survives as insoluble PbO₂ while the +2 portion dissolves as the nitrate.

**PbS:** occurs naturally as galena, the chief ore of lead.

## 6.5 Practice problems

1. Why is graphite a better conductor than diamond? *(Graphite's sp² carbons each leave one electron delocalised across the sheet; diamond's sp³ carbons use every valence electron in a localised σ bond.)*
2. Is CO acidic, basic or neutral? *(Neutral — a well-known exception to "non-metal oxide = acidic.")*
3. Distinguish producer gas from water gas by the oxidant used. *(Producer gas: O₂ from air. Water gas: H₂O steam.)*
4. Classify a silicate containing the ion Si₂O₇⁶⁻. *(Pyrosilicate — one shared oxygen between two tetrahedra.)*
5. What makes zeolites useful as molecular sieves? *(Their cavity size, tunable via Al-for-Si substitution, allows size-selective adsorption.)*
6. Sn²⁺ or Pb²⁺ — which is the more powerful reducing agent, and why? *(Sn²⁺ — for tin, +2 is the less stable, "eager to be oxidised" state; for lead, +2 is the stable state and does not reduce readily.)*
7. Write the reaction of Pb₃O₄ with dilute HNO₃ and state what it proves. *(Pb₃O₄ + 4HNO₃ → 2Pb(NO₃)₂ + PbO₂ + 2H₂O — proves Pb₃O₄ is a mixed +2/+4 oxide, not a single oxidation state.)*
8. Why can silicon not form an Si=O double bond the way carbon forms C=O? *(Silicon's 3p orbitals are too large/diffuse for efficient π overlap with oxygen's compact 2p orbital.)*
9. CCl₄ does not hydrolyse but SiCl₄ does — explain in terms of orbital availability. *(Silicon has empty accessible 3d orbitals allowing water to attack before Cl⁻ leaves; carbon has none and cannot expand past 4-coordinate.)*
10. Why is SiH₄ a stronger reducing agent than CH₄, even though CH₄ is thermally more stable? *(Thermal stability and reducing power are opposite trends down the group — SiH₄'s weaker Si–H bond both destabilises it thermally and makes it more readily oxidised.)*
11. What happens to PbCl₄ on gentle warming, and why? *(PbCl₄ → PbCl₂ + Cl₂ — the inert-pair effect makes Pb²⁺ more stable than Pb⁴⁺, so the tetrahalide spontaneously loses Cl₂.)*
12. A gas mixture of CO and CO₂ is passed through Ca(OH)₂ then hot I₂O₅. What does each step measure? *(Ca(OH)₂ removes and quantifies CO₂ as CaCO₃; I₂O₅ oxidises the remaining CO to CO₂, liberating I₂ that is titrated against thiosulphate to quantify CO.)*
13. Why is ordinary glass not considered a true crystalline solid? *(It is an amorphous, supercooled liquid with no sharp melting point, only a softening range.)*
# 7. Group 15: nitrogen, ammonia and nitrogen oxides

Members are N, P, As, Sb, Bi. Configuration ns²np³ — a *stable, half-filled* p subshell, which is why Group 15's IE₁ values are anomalously *higher* than Group 16's despite Group 16 being one place further right (removing an electron from a half-filled shell costs extra exchange energy). Classification: N, P non-metals; As, Sb metalloids; Bi a metal. Oxidation states range from −3 to +5; the inert-pair effect makes +3 increasingly stable relative to +5 down the group, culminating in Bi(V) being a powerful oxidant.

## 7.1 Quantitative periodic trends

| Property | N | P | As | Sb | Bi |
|---|---:|---:|---:|---:|---:|
| Atomic radius (pm) | 74 | 110 | 121 | 141 | 148 |
| IE₁ (kJ/mol) | 1402 | 1012 | 947 | 834 | 703 |
| Electronegativity | 3.0 | 2.1 | 2.0 | 1.9 | 1.9 |
| Melting point (K) | 63 (N₂) | 317 (white P) | 1090 (sublimes) | 904 | 544 |

Nitrogen's IE₁ (1402 kJ/mol) is the highest of any p-block element outside Group 18 — the half-filled 2p³ exceptional stability, combined with nitrogen's very small size. This is also *why* nitrogen exists as a strongly triple-bonded, highly inert N₂ diatomic gas, while phosphorus and heavier members exist as more reactive polyatomic solids (P₄, As₄, Sb₄).

## 7.2 Why nitrogen cannot mimic phosphorus's pentahalides

Nitrogen has **no accessible d-orbitals** (n = 2), so its maximum covalency is 4 — NCl₅ and NF₅ do not exist. Phosphorus and heavier members (n ≥ 3) can expand their octet and readily form pentahalides: PCl₅, PF₅, AsF₅. This single fact — accessible vs inaccessible d-orbitals — is the same explanation used throughout this chapter for period-2-vs-heavier contrasts (compare §4.5's CCl₄/SiCl₄ discussion).

**Catenation:** nitrogen shows almost none (N–N single bonds are weak due to lone-pair/lone-pair repulsion between adjacent small, electronegative atoms); phosphorus shows moderate catenation (P–P chains in polyphosphates, P₄ itself).

## 7.3 Hydrides — the NH₃ anomaly

| Property | NH₃ | PH₃ | AsH₃ | SbH₃ | BiH₃ |
|---|---:|---:|---:|---:|---:|
| Boiling point (K) | 240 | 185 | 218 | 256 | 290 |
| Bond angle | 107.8° | 93.5° | 91.8° | 91.3° | 90° |
| Thermal stability | highest | — | — | — | lowest |
| Basicity/reducing power | most basic, least reducing | — | — | — | least basic, most reducing |

**Boiling point anomaly:** NH₃'s boiling point (240 K) breaks the expected smooth trend (which would predict NH₃ lowest) because of strong hydrogen bonding, absent in the heavier hydrides — exactly analogous to the H₂O/H₂S anomaly in Group 16.

**Bond angle:** falls from 107.8° (NH₃) toward 90° down the group. Nitrogen's small size gives strong lone-pair repulsion pushing the bond angle well above the "pure p-orbital" 90°, close to tetrahedral; as the central atom grows, bonding electron pairs sit farther from the nucleus and closer to pure p-orbital (90°) bonding, with progressively less lone-pair compression.

**Basicity/reducing power:** exactly reversed trends — NH₃ is the strongest base (small, high electron density on N, effective lone-pair donation) and the weakest reducing agent; BiH₃ is a negligible base but the strongest reducing agent (large, diffuse, weakly held lone pair; weak, easily broken Bi–H bonds).

## 7.4 Oxides of nitrogen

| Oxide | Name | N oxidation state | Nature |
|---|---|---:|---|
| N₂O | Nitrous oxide | +1 | Neutral |
| NO | Nitric oxide | +2 | Neutral |
| N₂O₃ | Dinitrogen trioxide | +3 | Acidic |
| NO₂ | Nitrogen dioxide | +4 | Acidic (mixed) |
| N₂O₅ | Dinitrogen pentoxide | +5 | Acidic |

**NO is paramagnetic** (an odd-electron molecule, 11 valence electrons, one unpaired) — a favourite MOT question, directly parallel to O₂'s paramagnetism (§16, Group 16). NO dimerises weakly to N₂O₂ at low temperature, pairing the odd electrons.

**NO₂ is a mixed anhydride:** 2NO₂ + H₂O → HNO₃ + HNO₂ (nitrogen simultaneously going to +5 and +3 from +4) — a **disproportionation**, not simple hydration, exactly the same diagnostic (same element, two different oxidation-state products) used for XeF₄ hydrolysis in §18 and for the pseudohalogen (CN)₂ + NaOH reaction in Group 17.

# 8. Group 15 deep dive: nitrogen, ammonia, nitrides and nitric acid

## 8.1 Preparation and properties of ammonia

**Lab preparation:** heating an ammonium salt with a base — 2NH₄Cl + Ca(OH)₂ →(Δ) CaCl₂ + 2NH₃ + 2H₂O.

**Industrial — Haber process:** N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ/mol, catalysed by finely divided iron with Mo/K₂O promoters, run at ~450 °C and ~200 atm.

> **Worked Example — Le Chatelier reasoning for Haber-process conditions.** The forward reaction is exothermic (favours low T) and reduces gas moles 4→2 (favours high P). Why is 450 °C used rather than a lower temperature that would give a higher equilibrium yield?
>
> Equilibrium *position* and reaction *rate* are separate questions. A lower temperature would indeed push the equilibrium further toward NH₃ (Le Chatelier: exothermic forward reaction favoured by removing heat), but the **rate** of approach to that equilibrium would become impractically slow — nitrogen's N≡N triple bond (among the strongest known, ~945 kJ/mol) needs significant thermal/catalytic activation to break at all. 450 °C is a compromise: high enough for a commercially useful rate, with the iron catalyst lowering the activation energy without shifting the equilibrium position itself (a catalyst never changes K, only the rate of reaching it). High pressure (~200 atm) is used because it *does* genuinely shift equilibrium toward the side with fewer gas moles (product side), so pressure and temperature are pulling toward the same commercial goal for different reasons — one via kinetics, one via thermodynamics.

**Structure:** NH₃ is trigonal pyramidal (AX₃E), sp³ nitrogen, bond angle 107.8° (compressed from ideal tetrahedral 109.5° by lone-pair repulsion). Highly soluble in water (extensive H-bonding); weak base, Kb ≈ 1.8 × 10⁻⁵.

## 8.2 Nitrides

Direct combination of nitrogen with reactive metals gives ionic nitrides: 6Li + N₂ → 2Li₃N (lithium is the only alkali metal reactive enough at ordinary conditions to combine directly with N₂). 3Mg + N₂ → Mg₃N₂ (magnesium nitride). Ionic nitrides hydrolyse to give ammonia — a general diagnostic: Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃, and Li₃N + 3H₂O → 3LiOH + NH₃.

**Covalent nitrides** (B, Si) behave differently — boron nitride (BN)ₓ is chemically robust (§2.6), unlike the readily-hydrolysed ionic nitrides.

## 8.3 Nitric acid manufacture — the Ostwald process

**Step 1 (catalytic oxidation of ammonia):** 4NH₃ + 5O₂ →(Pt/Rh gauze, 500 K, 9 bar) 4NO + 6H₂O

**Step 2 (oxidation of NO):** 2NO + O₂ → 2NO₂ (fast, spontaneous at ordinary temperature)

**Step 3 (absorption in water):** 3NO₂ + H₂O → 2HNO₃ + NO — the regenerated NO recycles into Step 2, making the process continuous.

The dilute HNO₃ produced (~68%) is concentrated to ~98% by distillation with conc. H₂SO₄ acting as a dehydrating agent. Tracked across the whole process, nitrogen is oxidised from −3 (in NH₃) through +2 (NO) and +4 (NO₂) to +5 (in HNO₃) — a clean example for tracking oxidation state across a multi-step industrial sequence.

## 8.4 Nitric acid reactions and the brown ring test

**With metals — dilute vs concentrated matters:**

| Metal | Dilute HNO₃ | Conc. HNO₃ |
|---|---|---|
| Copper | NO | NO₂ |
| Zinc | N₂O | NO₂ |
| Very dilute + active metal | NH₄NO₃ | — |

Al, Cr and Fe are **passivated** by conc. HNO₃ (a protective oxide layer forms) and do not dissolve — the same passivation seen for Al in §3.7.

**Brown ring test for nitrate:** relies on reduction of nitrate to NO by Fe²⁺ in the presence of dilute H₂SO₄, followed by NO coordinating to unreacted Fe²⁺ at the interface between the two liquid layers: FeSO₄ + NO → [Fe(H₂O)₅(NO)]²⁺(brown), formed as [Fe(NO)(H₂O)₅]SO₄. The iron in this complex is formally **+1** (NO is treated as NO⁺ donating one electron to Fe²⁺, giving Fe¹⁺) — one of the most frequently mis-assigned oxidation states in the whole syllabus; do not default to +2 or +3 by pattern-matching Fe's usual states.

# 9. Nitrogen oxides, phosphorus allotropes and chlorides

## 9.1 Allotropes of phosphorus

**White phosphorus (P₄):** discrete tetrahedral molecules, each P bonded to 3 others with a strained 60° P–P–P bond angle (far from the ideal ~99° for pure p-orbital bonding — this "banana bond" strain is exactly why white P is so reactive). Waxy, soft, translucent solid; **highly toxic**; glows in the dark (chemiluminescence from slow aerial oxidation, giving the name "phosphorus" — light-bearer); spontaneously ignites in air above ~35 °C, so it is stored under water. Soluble in CS₂.

**Red phosphorus:** a polymeric chain structure formed by breaking one P–P bond per P₄ tetrahedron and linking the units — no ring strain, hence far less reactive, non-toxic, does not glow, does not ignite spontaneously. Obtained by heating white P in an inert atmosphere at ~573 K.

**Black phosphorus:** the thermodynamically most stable allotrope, with a layered structure resembling graphite; obtained from red or white phosphorus under high pressure. Densest and least reactive form.

> **Fast recall:** reactivity order white ≫ red > black, mirroring exactly how ring/lattice strain (not oxidation state or formula) governs reactivity — the same "small, strained unit is more reactive" logic as diborane's electron deficiency or borazine's polar bonds.

## 9.2 Phosphorus halides

**PCl₃ (phosphorus trichloride):** P₄ + 6Cl₂ → 4PCl₃ (limited chlorine). Trigonal pyramidal, sp³ P with one lone pair. Hydrolyses readily: PCl₃ + 3H₂O → H₃PO₃ + 3HCl.

**PCl₅ (phosphorus pentachloride):** P₄ + 10Cl₂ → 4PCl₅ (excess chlorine), or PCl₃ + Cl₂ → PCl₅. In the **gas phase**, PCl₅ is trigonal bipyramidal (sp³d) — the two axial P–Cl bonds (219 pm) are *longer* than the three equatorial bonds (204 pm), because axial bonds experience more electron-pair repulsion (90° to three equatorial pairs) than equatorial bonds do (only 120° to their neighbours). In the **solid state**, PCl₅ exists as an ionic lattice, [PCl₄]⁺[PCl₆]⁻ — tetrahedral cation, octahedral anion — a frequently tested structure-changes-with-state question, directly parallel to AlCl₃'s dimer-in-vapour/ionic-tending-in-water duality (§3.5) and BeCl₂'s own state-dependent structure.

Hydrolysis: PCl₅ + 4H₂O → H₃PO₄ + 5HCl (complete hydrolysis, unlike BF₃'s partial hydrolysis in §3.4 — phosphorus has accessible d-orbitals throughout, so no stable intermediate fluoro/chloro-complex analogous to BF₄⁻ forms to arrest the reaction).

## 9.3 Phosphine, PH₃

Prepared by Ca₃P₂ + 6H₂O → 3Ca(OH)₂ + 2PH₃ (calcium phosphide hydrolysis), or by heating white phosphorus with concentrated NaOH: P₄ + 3NaOH + 3H₂O → 3NaH₂PO₂ + PH₃ (a disproportionation of phosphorus, 0 → +1 in hypophosphite and 0 → −3 in phosphine). Colourless, extremely toxic gas with a garlic-like odour; weaker base than NH₃ (P is larger, less electronegative, holds its lone pair less tightly available for donation); burns in air, P₄ + 5O₂ → forms P₄O₁₀ pathway when impure (traces of P₂H₄ cause spontaneous ignition — the basis of the *Holmes' signal*, a marine distress flare using calcium phosphide + water).

# 10. Group 15: phosphorus oxoacids and high-yield comparisons

## 10.1 Phosphorus oxoacids — basicity and reducing power from structure

| Acid | Basicity | P–OH count | P–H count | Nature |
|---|---:|---:|---:|---|
| H₃PO₂ (hypophosphorous) | 1 | 1 | 2 | Strong reducing agent |
| H₃PO₃ (phosphorous) | 2 | 2 | 1 | Reducing agent |
| H₃PO₄ (orthophosphoric) | 3 | 3 | 0 | Non-reducing |

**The organising rule: basicity = number of P–OH groups (not the number of H atoms in the formula); reducing power ∝ number of P–H bonds.** H₃PO₂ has 3 hydrogens but only 1 is acidic (P–OH); the other 2 are P–H, directly bonded to phosphorus, and it is exactly those P–H bonds that make it such a powerful reductant (they are hydridic, easily donated to an oxidant).

> **Worked Example — disproportionation of phosphorous acid.** H₃PO₃ disproportionates on heating: 4H₃PO₃ → 3H₃PO₄ + PH₃. Assign oxidation states and confirm this is disproportionation.
>
> H₃PO₃ has 2 P–OH and 1 P–H: charge balance 3(+1) + x + 3(−2) = 0 ⇒ x = +3. H₃PO₄ has 3 P–OH, 0 P–H: 3(+1) + x + 4(−2) = 0 ⇒ x = +5. PH₃: 3(+1) + x = 0 ⇒ x = −3.
>
> P at +3 splits into +5 (oxidised, in H₃PO₄) and −3 (reduced, in PH₃) — the defining disproportionation signature. Electron balance: per P going +3→+5, 2e⁻ lost; per P going +3→−3, 6e⁻ gained. Balancing 3 oxidised : 1 reduced (3×2 = 6 = 1×6) gives the observed 4H₃PO₃ → 3H₃PO₄ + PH₃.
>
> **H₃PO₂ also disproportionates**, but to the *adjacent* accessible states: 2H₃PO₂ → H₃PO₃ + PH₃ (P: +1→+3 and +1→−3), not straight to H₃PO₄ — a common false belief is that only H₃PO₃ disproportionates.

## 10.2 As, Sb, Bi — why the +3 state stops disproportionating

Unlike nitrogen and phosphorus, the intermediate +3 oxidation state of arsenic, antimony and bismuth is **stable and does not disproportionate** — the inert-pair effect (§4, applied here to Group 15's heaviest members) makes +3 the preferred state rather than an unstable midpoint between −3 and +5. Bi(V) compounds (e.g. NaBiO₃) are instead strong oxidising agents, readily reduced to the stable Bi(III), directly parallel to Tl³⁺ (§2.3) and PbO₂ (§4.2).

## 10.3 Practice problems

1. Why does nitrogen not form NCl₅, while phosphorus readily forms PCl₅? *(Nitrogen has no accessible d-orbitals at n=2; maximum covalency 4.)*
2. What is the oxidation state of iron in the brown ring complex [Fe(H₂O)₅(NO)]²⁺? *(+1 — NO is treated as NO⁺, reducing Fe from +2 to +1.)*
3. Why is ammonia's boiling point anomalously high compared to PH₃, AsH₃, SbH₃? *(Strong intermolecular hydrogen bonding in NH₃, absent in the heavier hydrides.)*
4. Identify the structure of PCl₅ in the gas phase vs the solid state. *(Gas: trigonal bipyramidal, sp³d. Solid: ionic, [PCl₄]⁺[PCl₆]⁻.)*
5. Which phosphorus oxoacid is non-reducing, and why? *(H₃PO₄ — it has zero P–H bonds; all three hydrogens are P–OH.)*
6. Why does white phosphorus ignite spontaneously in air while red phosphorus does not? *(White P's P₄ tetrahedra have highly strained ~60° bond angles, making it far more reactive; red P's polymeric chain structure has no such strain.)*
7. Explain why NO₂ dissolving in water is a disproportionation, not simple hydration. *(3NO₂ + H₂O → 2HNO₃ + HNO₂ — nitrogen splits from +4 into +5 and +3, the same-element-splits-both-ways signature.)*
8. Why is Bi(V) a strong oxidising agent while N(V) (as HNO₃) and P(V) (as H₃PO₄) are comparatively stable? *(Inert-pair effect at the bottom of the group makes Bi(III) the preferred, more stable state, so Bi(V) readily accepts electrons to fall back to it.)*
9. State the Haber process conditions and explain, using Le Chatelier and rate reasoning, why 450 °C (not a lower temperature) is used. *(~450 °C, ~200 atm, Fe catalyst with Mo/K₂O promoters — see the worked example in §8.1: lower T would raise equilibrium yield but make the rate impractically slow, since the N≡N bond needs significant activation.)*
10. Give the products of P₄ + 3NaOH + 3H₂O and identify the reaction type. *(3NaH₂PO₂ + PH₃ — a disproportionation of phosphorus from 0 to +1 and 0 to −3.)*
# 11. Group 16: oxygen, ozone and sulphur

Members are O, S, Se, Te and Po. Oxygen is anomalous (§1.2): small, highly electronegative, capable of strong hydrogen bonding, and — critically — **has no accessible valence d orbital**, so its maximum covalency is capped near 2–4 depending on the species, unlike sulphur which readily reaches covalency/coordination 6 (SF₆). Use the school-level "octet expansion" model carefully: do not infer that oxygen can expand its octet the way sulphur or phosphorus can.

## 11.1 Dioxygen and ozone

Molecular orbital theory correctly predicts that O₂ is **paramagnetic**, with two unpaired electrons in the degenerate π*2p orbitals — a result that simple Lewis/VBT structures (which draw O=O with all electrons paired) fail to explain, making O₂ the classic textbook justification for MOT over VBT.

Ozone, O₃, is a bent, resonance-hybrid molecule (O–O–O ≈ 116.8°) and is diamagnetic. It is a substantially stronger oxidising agent than O₂ in aqueous conditions and is the standard reagent for liberating iodine from iodide (a quantitative test/titration basis):

\[\mathrm{O_3+2I^-+H_2O\rightarrow O_2+I_2+2OH^-}\]

## 11.2 Sulphur dioxide and sulphuric acid

Sulphur in SO₂ sits at the intermediate oxidation state +4, so SO₂ can act as **either a reducing agent or, against a stronger reductant, an oxidising agent**. Its most common exam role is reducing: it decolourises acidified KMnO₄ (Mn⁷⁺ → Mn²⁺) and acidified potassium dichromate.

In the **contact process**, SO₂ is catalytically, reversibly oxidised to SO₃ (V₂O₅ catalyst, ~ 700 K, ~ 2 atm — moderate conditions chosen for the same rate/yield compromise logic as the Haber process):

\[\mathrm{2SO_2+O_2\rightleftharpoons2SO_3\qquad\Delta H^\ominus<0}\]

SO₃ is then absorbed **in concentrated H₂SO₄ (not water directly, to avoid a dense, hard-to-condense acidic mist)** to give oleum (fuming sulphuric acid, H₂S₂O₇-rich), which is subsequently diluted carefully with water to the required concentration of H₂SO₄.

Concentrated H₂SO₄ is a strong acid, a powerful dehydrating agent (chars sugar/carbohydrates by removing H and O as H₂O), and an oxidising agent when hot and concentrated. It is also **non-volatile**, which is why it can displace more volatile acids like HCl and HNO₃ from their salts on heating — but this displacement logic **fails for bromides and iodides**, where hot concentrated H₂SO₄ instead oxidises Br⁻/I⁻ to Br₂/I₂ (itself being reduced to SO₂), so HBr and HI cannot be prepared this way.

# 12. Group 16 deep dive: oxygen chemistry, ozone and sulphur allotropes

## 12.1 Molecular oxygen and the reactive-oxygen-species ladder

The molecular orbital treatment of O₂ correctly assigns two unpaired electrons to the degenerate π*2p antibonding orbitals, explaining its observed paramagnetism — a result the simple Lewis dot structure (O=O, all electrons paired) cannot reproduce. Beyond neutral O₂, the reactive-oxygen-species ladder runs through **superoxide** (O₂⁻, oxidation state −½, one unpaired electron, e.g. in KO₂), **peroxide** (O₂²⁻, oxidation state −1, e.g. in Na₂O₂ and H₂O₂), and simple **oxide** (O²⁻, oxidation state −2, e.g. in MgO). Their reactivity with water and their oxidising/reducing behaviour differ sharply across this ladder (KO₂ reacts with water to liberate O₂ and H₂O₂ reacts with water is trivial since it is already aqueous-compatible, but reacts characteristically with oxidants/reductants depending on partner) — **never label an oxygen-rich salt "peroxide" purely from its formula without first checking the actual O–O bonding** (§13.1's rule applies identically here).

## 12.2 Ozone in depth

Ozone is a bent (∠O–O–O ≈ 116.8°), resonance-hybrid molecule, thermodynamically less stable than O₂ (ΔG°f is positive) but kinetically persistent enough at ordinary conditions to be isolated and studied. Its strong oxidising action — and specifically its ability to liberate iodine from iodide solution — is a direct consequence of ozone's own facile reduction back to the more stable O₂ (§11.1). It decolourises many organic dyes through genuine **oxidative** bleaching, in direct qualitative contrast to SO₂'s largely **reductive** (and often reversible) bleaching action (§13, trap bank) — this oxidative-vs-reductive contrast between O₃/Cl₂ on one side and SO₂ on the other is one of the most frequently tested qualitative-analysis distinctions in this chapter.

## 12.3 Sulphur allotropic forms

Rhombic sulphur (α-sulphur, stable below ~ 369 K) and monoclinic sulphur (β-sulphur, stable above ~ 369 K) both contain puckered, crown-shaped S₈ rings and are **enantiotropic** — meaning each form is the thermodynamically stable one over its own defined temperature range, and the two interconvert reversibly at the transition temperature. Plastic sulphur is formed by rapidly cooling (quenching) molten sulphur that has been heated close to its boiling point; it is a polymeric, amorphous, elastic solid that slowly reverts back toward the more stable rhombic ring form on standing. **"Allotrope" is reserved strictly for genuinely different structural forms of the same element in the same physical state category** (e.g., different ring/chain/network arrangements) — it should not be used loosely for merely different physical states (solid/liquid/gas) of one and the same structural form.

# 13. Group 16: oxoacids of sulphur and redox logic

The sulphur oxoacids most frequently compared in JEE questions are H₂SO₄ (sulphuric), H₂SO₃ (sulphurous), H₂S₂O₇ (pyrosulphuric/oleum acid), H₂S₂O₃ (thiosulphuric), H₂S₂O₈ (peroxodisulphuric) and H₂SO₅ (peroxomonosulphuric, Caro's acid).

## 13.1 Peroxo acids: never assume every oxygen is −2

In **peroxodisulphuric acid**, H₂S₂O₈, one O–O peroxide linkage bridges the two SO₄ units; the two oxygens of that linkage are at oxidation state −1, not −2. This makes H₂S₂O₈ a powerful oxidant (used to prepare O₃ and to oxidise Mn²⁺ to MnO₄⁻ in the presence of Ag⁺ catalyst — a classic qualitative test). **Caro's acid, H₂SO₅**, similarly contains one peroxide O–O linkage per molecule and is likewise strongly oxidising. The rule: **whenever an oxyanion/oxyacid contains an explicit O–O bond, assign those two oxygens −1 before computing the oxidation state of the central atom** — otherwise the central-atom oxidation state comes out impossibly high.

## 13.2 Thiosulphate: two inequivalent sulphur atoms

Thiosulphate, S₂O₃²⁻, has a structure formally derived from sulphate by replacing one bridging oxygen with sulphur: one S sits at the same site as sulphate's central S (formal oxidation state +5 by the "replace O with S, treat S like O for bookkeeping" convention, or +6 by strict electronegativity-based counting depending on convention used) and the other S is terminal (oxidation state −1 in the same convention) — the commonly quoted **average** oxidation state of +2 masks this real structural inequivalence. Acidification of thiosulphate disproportionates it instantly to sulphur dioxide and elemental sulphur (visible as a milky precipitate):

\[\mathrm{S_2O_3^{2-}+2H^+\rightarrow SO_2+S\downarrow+H_2O}\]

This reaction is the standard illustration that **a single average oxidation state can conceal chemically and structurally distinct atoms of the same element within one ion** — always check connectivity before trusting an averaged number for a mechanistic argument.

## 13.3 Revision rule

When an oxyanion or oxyacid contains an O–O bond, mark those oxygens −1 first; only then calculate the oxidation state of the central atom from the remaining, normal (−2) oxygens.

### Trap bank — Group 16

- O₂ is paramagnetic (MOT); O₃ is diamagnetic — do not assume all oxygen allotropes share the same magnetic behaviour.
- SO₂ bleaching is typically **reductive and often reversible** (the bleached dye can be reoxidised by air and the colour returns), unlike Cl₂'s **oxidative and typically permanent** bleaching — a frequently tested qualitative-analysis contrast.
- Concentrated H₂SO₄ cannot be used to prepare HBr or HI from bromide/iodide salts because it oxidises Br⁻/I⁻ instead of simply displacing the volatile acid.
- Peroxo-oxygen is −1, never −2 — apply this before any redox-counting question involving H₂SO₅, H₂S₂O₈ or H₂O₂ itself.

# 14. Sulphur dioxide, sulphuric acid and contact-process mastery

## 14.1 SO₂ as both reducing and oxidising agent

Sulphur in SO₂ sits at the intermediate oxidation state +4, giving it access to both higher (+6, e.g. sulphate) and lower (0 or −2, e.g. elemental sulphur or sulphide) states — so SO₂ can be oxidised or reduced depending on the partner reagent. Its textbook redox role is usually as a **reducing agent**, for instance decolourising acidified potassium permanganate:

\[\mathrm{5SO_2+2MnO_4^-+2H_2O\rightarrow5SO_4^{2-}+4H^++2Mn^{2+}}\]

This decolourisation is a genuine **redox** change (Mn⁷⁺ → Mn²⁺, S⁴⁺ → S⁶⁺); by contrast, SO₂'s bleaching of organic dyes is often only **temporary** because the reduced, colourless product can be slowly reoxidised by atmospheric O₂, restoring the original colour — an important practical/qualitative distinction from the permanent, oxidative bleaching of chlorine.

## 14.2 The contact-process sequence, stage by stage

1. Produce SO₂ by burning elemental sulphur in air, or by roasting a sulphide ore (e.g., iron pyrites, FeS₂) in air.
2. Purify and thoroughly dry the resulting SO₂/air gas mixture (removing dust and moisture, both catalyst poisons).
3. Catalytically, reversibly oxidise SO₂ to SO₃ over V₂O₅ at a moderate, compromise temperature (~ 700 K) and pressure (~ 2 atm).
4. Absorb the SO₃ produced in concentrated H₂SO₄ (never directly in water) to form oleum, avoiding the dense corrosive mist that direct water absorption would create.
5. Carefully dilute the oleum with the calculated quantity of water to obtain sulphuric acid of the required, specified concentration.

Direct absorption of SO₃ in water is avoided industrially because it produces a fine, hard-to-condense acidic mist rather than a clean liquid product. In any related equilibrium question, remember that **lowering temperature favours the exothermic forward (SO₃-forming) reaction thermodynamically**, while the actual industrial operating temperature is chosen as a practical balance between this favourable low-temperature equilibrium position and an acceptably fast reaction rate (identical logic to the Haber-process compromise, §7.2).

## 14.3 Concentrated sulphuric acid: choosing the right reagent-selection argument

Concentrated H₂SO₄ is non-volatile and can displace more volatile acids such as HCl and HNO₃ from their solid salts on gentle heating (a straightforward acid-displacement argument, requiring no redox reasoning). With bromide or iodide salts, however, a **redox** reaction intervenes instead: hot, concentrated H₂SO₄ oxidises Br⁻ to Br₂ and I⁻ to I₂ (itself being reduced, typically to SO₂, though further reduction to S or even H₂S can occur with excess reducing halide), so the simple non-redox "volatile-acid-displacement" logic fails here and HBr/HI cannot be cleanly prepared by this route. **Always check first whether the anion present is readily oxidisable before applying the acid-displacement shortcut** — this is the single most tested Group 16/17 crossover trap in the whole syllabus.

# 15. Group 17: halogens, interhalogens and oxoacids

Halogens have valence configuration ns²np⁵. Fluorine is anomalous (§1.2): highest electronegativity of any element, very small atomic/ionic size, **no positive oxidation state in any of its compounds** (it is always −1 or 0, since it is the most electronegative element and has no accessible d orbital to support a higher oxidation state), and an unexpectedly weak F–F bond compared with Cl–Cl (small size → strong lone-pair/lone-pair repulsion between the two fluorine atoms across the short bond).

## 15.1 The electron-gain-enthalpy vs electronegativity trap

**Electron gain enthalpy of Cl is more negative than that of F**, even though **F is more electronegative than Cl** — these are two different, non-interchangeable quantities. Chlorine's larger 3p orbital experiences less electron–electron repulsion when accepting an extra electron than fluorine's compact 2p orbital does, so Cl releases more energy on electron capture. Electronegativity, by contrast, measures the tendency to attract shared bonding electron density within a molecule (a periodic-table-position-based, Pauling/Mulliken-scale property) and F wins that comparison because of its extremely small size and high effective nuclear charge, independent of the isolated-atom electron-gain-enthalpy argument.

## 15.2 Hydrogen halides

Acid strength in water increases HF < HCl < HBr < HI, tracking the fall in H–X bond dissociation enthalpy down the group (weaker bond → easier heterolytic cleavage → stronger acid in the leveling solvent water). HF itself is a comparatively weak acid in water (unlike the other three, which are all fully strong) yet has an unusually high boiling point for its molar mass because of extensive hydrogen bonding, including the formation of the bifluoride ion, [HF₂]⁻, in concentrated solution.

## 15.3 Chlorine, disproportionation and bleaching powder

Chlorine disproportionates in water and even more so in alkali, with the **product distribution controlled by temperature**:

\[\mathrm{Cl_2+H_2O\rightleftharpoons HCl+HOCl}\]
\[\mathrm{Cl_2+2NaOH\xrightarrow{cold,dilute}NaCl+NaOCl+H_2O}\]
\[\mathrm{3Cl_2+6NaOH\xrightarrow{hot,conc.}5NaCl+NaClO_3+3H_2O}\]

Bleaching powder (calcium oxychloride, commonly written CaOCl₂, best regarded as a mixed salt of Ca(OCl)Cl rather than a simple molecular compound) is manufactured by passing Cl₂ over slaked lime. Its bleaching action proceeds via the hypochlorite/HOCl oxidising species released on treatment with dilute acid — treat it through its **"available chlorine"** behaviour in reaction/titration questions rather than as a single pure covalent molecule.

## 15.4 Interhalogens

Interhalogens (XY, XY₃, XY₅, XY₇, where X is the larger, less electronegative halogen) are generally **more reactive than the parent halogens (except F₂ itself)**, because the X–Y bond is weaker and more polar than the X–X bond in the more electronegative parent halogen, making it easier to cleave. Molecular shapes strictly follow VSEPR (count σ-bond pairs + lone pairs on the central, larger halogen):

| Molecule | Central-atom steric number | Shape |
|---|---:|---|
| ClF (XY) | 4 (3 lp + 1 bp) | linear (diatomic — shape is trivially linear) |
| ClF₃ (XY₃) | 5 (2 lp + 3 bp) | T-shaped |
| BrF₅ (XY₅) | 6 (1 lp + 5 bp) | square pyramidal |
| IF₇ (XY₇) | 7 (0 lp + 7 bp) | pentagonal bipyramidal |

## 15.5 Oxoacid comparison

For the chlorine oxoacid series HOCl < HClO₂ < HClO₃ < HClO₄, **acid strength increases with the number of oxygen atoms (i.e., with the oxidation state of chlorine)** because additional highly electronegative oxygens withdraw electron density and delocalise negative charge over more atoms in the conjugate base, stabilising it. Do not extend this "more oxygens ⇒ stronger acid" rule unconditionally **across different central atoms** without separately checking electronegativity and structure — it is valid only when comparing oxoacids of the *same* central atom.

### Trap bank — Group 17

- F has no positive oxidation state in any compound; Cl, Br, I do (up to +7 in perhalates).
- Electron gain enthalpy: Cl more negative than F. Electronegativity: F greater than Cl. Never conflate the two.
- HF is a weak acid in water despite being the most reactive/hydrogen-bonded hydrogen halide; HCl, HBr, HI are all strong.
- Interhalogens are more reactive than the parent halogens (except F₂, which remains the most reactive elemental halogen).

# 16. Group 17 deep dive: chlorine, HCl and oxyacids

## 16.1 Chlorine preparation and its temperature-dependent disproportionation

Laboratory-scale chlorine is most commonly generated by oxidising concentrated HCl with manganese dioxide (or, on a larger/purer scale, with potassium permanganate or potassium dichromate):

\[\mathrm{MnO_2+4HCl\rightarrow MnCl_2+Cl_2+2H_2O}\]

Chlorine disproportionates in alkali with the product distribution controlled strictly by temperature and concentration: cold, dilute alkali gives chloride and hypochlorite, while hot, concentrated alkali instead gives chloride and chlorate (chlorine going, respectively, to a mixture of −1/+1 or −1/+5 oxidation states):

\[\mathrm{Cl_2+2OH^-\xrightarrow{cold,\ dilute}Cl^-+ClO^-+H_2O}\]
\[\mathrm{3Cl_2+6OH^-\xrightarrow{hot,\ conc.}5Cl^-+ClO_3^-+3H_2O}\]

**The stated reaction conditions are as much a part of the "answer" as the equation itself** for this pair of reactions — a favourite JEE Advanced condition-matching question.

## 16.2 HCl behaviour and chloride identification

HCl is exceptionally soluble in water and behaves there as a strong acid, fully ionised. **Dry HCl gas does not turn dry litmus paper red** — ionisation into H⁺ and Cl⁻ (the species actually responsible for acidic behaviour) requires an ionising medium such as water, so gaseous, moisture-free HCl shows no acidic character to a dry indicator. Chloride ion gives a characteristic white, curdy precipitate of AgCl with silver nitrate solution; this precipitate is distinguished from AgBr (pale yellow) and AgI (yellow) by colour, and dissolves readily in dilute aqueous ammonia through formation of the soluble diammine complex, [Ag(NH₃)₂]⁺ (AgBr dissolves only in concentrated ammonia; AgI is insoluble even in concentrated ammonia) — this solubility gradation in ammonia is the standard confirmatory qualitative-analysis test distinguishing the three silver halides.

## 16.3 Oxoacid strength: same-central-atom comparisons only

For a series of oxyacids built on the *same* halogen (e.g., HOCl, HClO₂, HClO₃, HClO₄), acid strength rises with the number of oxygen atoms present, because each additional highly electronegative oxygen both withdraws electron density inductively from the O–H bond and delocalises the resulting negative charge over more atoms in the conjugate base, stabilising it. **This "more oxygens ⇒ stronger acid" rule must not be extended unconditionally across oxyacids of different central atoms** (comparing, say, an oxyacid of chlorine against one of sulphur) without separately accounting for the central atom's electronegativity and the acid's actual structure.

# 17. Interhalogens: structure, hydrolysis and reactivity

Interhalogens have the general formulae XY, XY₃, XY₅ and XY₇, where X is always the larger, less electronegative halogen (providing the central atom) and Y is the smaller, more electronegative halogen (always F in the XY₅ and XY₇ classes, since only fluorine is small enough to pack five or seven atoms around a single central halogen). They are typically **more reactive than the parent halogens themselves (with the sole exception of F₂, which remains the most reactive elemental halogen)**, because the X–Y bond is both more polar and generally weaker than the X–X bond of the more electronegative parent halogen, making it comparatively easy to cleave homolytically or heterolytically.

| Molecule | VSEPR steric number (bp + lp) on central halogen | Molecular shape |
|---|---|---|
| ICl | 1 bp (diatomic) | linear |
| ClF₃ | 3 bp + 2 lp | T-shaped |
| BrF₅ | 5 bp + 1 lp | square pyramidal |
| IF₇ | 7 bp + 0 lp | pentagonal bipyramidal |

Hydrolysis of any interhalogen must be balanced systematically from atom counts and oxidation-state changes, never guessed by pattern-matching. For example, a fluorinating interhalogen in water can furnish HF together with an oxoacid or oxoanion of the *central* halogen, with the exact product depending sensitively on the quantity of water and the reaction conditions — for instance, ClF₃ hydrolyses to give a mixture including HF, HOCl/chlorate-type species and further redox products depending on conditions, rather than a single universal equation. **Never invent a hydrolysis equation simply by mechanically replacing every terminal F with OH** — always check first whether disproportionation or another redox pathway is operating, since interhalogens frequently disproportionate on hydrolysis rather than undergoing simple substitution.

# 18. Group 18: noble gases and xenon compounds

Noble gases have closed-shell ns²np⁶ (He: 1s²) configurations and the highest ionisation enthalpies in their respective periods, which is why they were long considered chemically "inert." Xenon forms the most important class of real, stable compounds because (a) its ionisation enthalpy (1170 kJ mol⁻¹) is markedly lower than that of the lighter noble gases (He, Ne, Ar) and (b) the resulting Xe–F and Xe–O bonds are thermodynamically strong enough to be stabilised at accessible temperatures/pressures. Neil Bartlett's 1962 synthesis of Xe⁺[PtF₆]⁻ (by analogy with O₂⁺[PtF₆]⁻) was the first proof that noble-gas compounds could exist and directly triggered the discovery of the xenon fluorides.

## 18.1 Preparation of xenon fluorides

Direct combination of Xe and F₂ under varying conditions gives different fluorides, with **higher F₂ ratio, pressure and/or temperature favouring the higher fluoride**:

\[\mathrm{Xe+F_2\xrightarrow{673\ K,\ 1\ bar,\ Xe:F_2=1:5}XeF_2}\]
\[\mathrm{Xe+2F_2\xrightarrow{573\ K,\ 7\ bar,\ Xe:F_2=1:20}XeF_4}\]
\[\mathrm{Xe+3F_2\xrightarrow{573\ K,\ 60–70\ bar,\ Xe:F_2=1:20}XeF_6}\]

## 18.2 VSEPR precision for xenon species

| Species | Total electron-pair regions on Xe | Electron-pair geometry | Molecular shape |
|---|---:|---|---|
| XeF₂ | 5 (2 bp + 3 lp) | trigonal bipyramidal | linear |
| XeF₄ | 6 (4 bp + 2 lp) | octahedral | square planar |
| XeF₆ | 7 (6 bp + 1 lp) | distorted (capped) octahedral | distorted octahedral |
| XeOF₄ | 6 (5 bp + 1 lp) | octahedral | square pyramidal |
| XeO₃ | 4 (3 bp + 1 lp) | tetrahedral | trigonal pyramidal |
| XeO₄ | 4 (4 bp + 0 lp) | tetrahedral | tetrahedral |

For XeF₂: five electron pairs adopt a trigonal-bipyramidal arrangement; placing all **three lone pairs in the equatorial plane** (where lone-pair/lone-pair repulsion is minimised, each 120° apart) leaves the two bonding fluorine atoms axial — hence the molecule is linear. For XeF₆, one lone pair distorts an otherwise regular octahedron; do not force a perfectly symmetric octahedral shape onto it.

## 18.3 Hydrolysis reasoning

Xenon fluorides hydrolyse because forming strong new Xe–O and H–F bonds is thermodynamically very favourable. Balance every hydrolysis systematically by atom count and oxidation-state bookkeeping rather than memorising a half-balanced line:

\[\mathrm{2XeF_2+2H_2O\rightarrow2Xe+4HF+O_2}\] (Xe is *reduced* to the element; here water is oxidised)
\[\mathrm{XeF_4+6H_2O\rightarrow2Xe+XeO_3+12HF+3O_2}\] (a disproportionation among three Xe centres overall)
\[\mathrm{XeF_6+3H_2O\rightarrow XeO_3+6HF}\] (complete hydrolysis; controlled partial hydrolysis instead gives the oxyfluoride XeOF₄)

## 18.4 Clathrates

Larger noble-gas atoms (Ar, Kr, Xe) can be **physically trapped** inside cavities of an ice or quinol (hydroquinone) crystal lattice as it forms around them, giving **clathrates**. These are not covalent compounds — no chemical bond forms to the noble gas atom, the oxidation state of the trapped gas remains 0, and the clathrate decomposes back to free gas plus host lattice on melting/dissolving. Do not describe a clathrate as a "xenon compound" in the same sense as XeF₂ or XeO₃.

### Trap bank — Group 18

- XeF₂ is linear because three lone pairs occupy the equatorial positions of a trigonal bipyramid, not because Xe "has no lone pairs."
- Report **molecular shape**, not electron-pair geometry, whenever a question asks for "shape" — XeOF₄ has octahedral electron geometry but square-pyramidal molecular shape.
- A clathrate involves no bond formation and no oxidation-state change; a true xenon fluoride/oxide does.
- Xenon's compound-forming ability is due to its comparatively low ionisation enthalpy among noble gases, not to any special reactivity of fluorine alone (fluorine also fails to react with He, Ne, Ar under ordinary conditions).

# 19. Group 18 deep dive: xenon fluorides, oxides and hydrolysis

## 19.1 Preparation and the bonding context

Xenon reacts directly with fluorine gas under carefully controlled temperature, pressure and stoichiometric ratio to give XeF₂, XeF₄ or XeF₆ selectively (§18.1); broadly, higher fluorine partial pressure, higher total pressure and/or higher reaction temperature all favour formation of the higher fluoride. All three are covalent, molecular compounds in the standard textbook treatment (not ionic lattices in the solid state, though XeF₆ shows some ionic character/self-ionisation in the liquid and solid phases, e.g. forming [XeF₅]⁺[F]⁻-type species).

## 19.2 VSEPR precision, restated with full reasoning

XeF₂ has five total electron-pair regions around xenon (two bonding pairs to F, three lone pairs); in the trigonal-bipyramidal electron-pair arrangement that minimises repulsion, **all three lone pairs occupy the equatorial positions** (each 120° from the next, where lone-pair/lone-pair repulsion — the strongest of the three repulsion types — is minimised), leaving the two fluorine atoms in the axial positions 180° apart. The resulting **molecular shape is therefore linear**, even though the *electron-pair* arrangement is trigonal bipyramidal — the standard illustration of why electron-pair geometry and molecular shape must be reported separately.

XeF₄ has six total electron-pair regions (four bonding pairs, two lone pairs); the two lone pairs occupy mutually *trans* (opposite) positions of the octahedron to minimise their mutual repulsion, leaving the four fluorine atoms in a plane — hence **square planar** molecular shape. XeF₆ has seven total electron-pair regions (six bonding pairs, one lone pair); with no perfectly symmetric seven-region arrangement available, the single lone pair distorts an otherwise regular octahedron, giving a **distorted octahedral** shape that should never be drawn as a perfect, undistorted octahedron.

## 19.3 Xenon oxyfluorides and oxides

XeOF₄ has six electron-pair regions (one Xe=O, four Xe–F, one lone pair) in an overall octahedral electron-pair arrangement, with the single lone pair giving a **square-pyramidal** molecular shape. XeO₃ has four electron-pair regions (three Xe=O, one lone pair) in a tetrahedral electron-pair arrangement, giving a **trigonal-pyramidal** molecular shape (directly analogous to NH₃'s shape derivation). XeO₄ has four bonding regions and no lone pair, giving a regular **tetrahedral** molecular shape. In every case, the examiner is asking for the **molecular shape** (what an X-ray structure would actually show), never the underlying electron-pair geometry alone.

## 19.4 Advanced edge: a safe, general hydrolysis workflow

For any xenon fluoride or oxyfluoride hydrolysis, work through this four-step method rather than memorising several superficially similar-looking equations:

1. **Count** every Xe, F, H and O atom present in the reactants.
2. **Decide** whether the xenon oxidation state is retained unchanged through to the product, or whether a disproportionation among multiple Xe centres is occurring instead (as happens, for example, in the hydrolysis of XeF₄, where some xenon is reduced all the way to the element while some is oxidised up to XeO₃).
3. **Include HF explicitly** as the fluorine-containing product of any aqueous hydrolysis (fluorine essentially never survives hydrolysis as F⁻ alone without protonation to HF under these acidic conditions).
4. **Balance** the remaining H and O atoms using water molecules, and finally verify any residual charge balance if ionic species are written into the equation.

This atom-count-and-oxidation-state method is considerably safer under exam pressure than attempting to recall several nearly identical xenon hydrolysis equations by rote, since a single misremembered coefficient in a memorised equation is very easy to produce but very hard to self-detect.

# 20. JEE Advanced synthesis: decision trees, traps and final recall

## 20.1 Three decision trees for any p-block question

1. **Acid basicity:** draw the structure → count only the O–H bonds that can ionise (ignore any H bonded directly to the central atom).
2. **Redox/oxidation state:** flag any O–O bond first (assign those oxygens −1) → then assign oxidation numbers to every other atom normally → compare only the atoms whose oxidation state actually changes between reactant and product.
3. **Shape:** count σ-bond regions and lone pairs on the central atom (steric number) → apply VSEPR to get the electron-pair geometry → then state the **molecular shape**, which removes the lone-pair positions from the description.

## 20.2 Rapid trap bank — full block

- B(OH)₃ is a monobasic Lewis acid, not tribasic.
- BF₃ is the *weakest* Lewis acid among BX₃ (back-bonding); Lewis acidity rises BF₃ < BCl₃ < BBr₃ < BI₃.
- CCl₄ resists hydrolysis (no d orbital at C); SiCl₄ hydrolyses instantly.
- NO₂ is paramagnetic; N₂O₄ is diamagnetic and contains a direct N–N bond.
- H₃PO₂, H₃PO₃ and H₃PO₄ have basicities 1, 2 and 3 respectively, regardless of the total hydrogen count in the formula.
- Cl has a more negative electron gain enthalpy than F; F is nevertheless more electronegative — these are different properties.
- O₂ is paramagnetic (MOT); O₃ is diamagnetic.
- Peroxo oxygen (O–O linkage) is always −1, never −2.
- Conc. H₂SO₄ oxidises Br⁻/I⁻ instead of merely displacing HBr/HI — the "non-volatile acid displaces volatile acid" rule fails here.
- XeF₂ is linear because three equatorial lone pairs leave the two fluorines axial.
- SnCl₂ (Sn²⁺) is reducing; PbO₂ (Pb⁴⁺) is oxidising — both are inert-pair-effect consequences.
- A clathrate is a physical inclusion complex with zero oxidation-state change, not a genuine covalent noble-gas compound.

## 20.3 How to use these notes with practice questions

After each group, solve a mixed problem set containing a structure question, a redox question, a reaction/condition question and an ordering (trend) question. For every wrong answer, label the failure as one of exactly four types: **fact recall**, **structure/shape**, **oxidation-state bookkeeping**, or **condition/reagent-excess**. This four-way failure log is a far more efficient revision target than re-reading an entire group from the top, because most repeated errors in this chapter cluster in only one or two of these four categories per student.
`;
