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

## 2.7 Organometallic and complex-hydride chemistry of Group 13

**Trialkyl/triaryl derivatives (R₃M):** made by Grignard-type routes, 3RMgX + MCl₃ → R₃M + 3MgXCl (M = B, Al, Ga), or by direct hydroboration-type addition for boron. Like the trihalides, R₃B and R₃Al are electron-deficient at the metal and readily form Lewis adducts — R₃B·NR₃′ is the standard example of a simple donor-acceptor complex used to teach the concept before diborane's more complex 3c-2e bridging is introduced.

**Trimethylaluminium, Al₂(CH₃)₆**, is the organometallic parallel to Al₂Cl₆, but the bridge bonding differs sharply: chlorine bridges donate a genuine lone pair (3-centre-4-electron, §3.5), while methyl bridges have no lone pair to donate — instead a C–H σ-bond electron pair is shared across both aluminiums, making Al₂(CH₃)₆'s bridges **3-centre-2-electron**, structurally analogous to diborane's B–H–B bridges rather than to Al₂Cl₆'s own Cl bridges. This is a frequently tested "same molecule family, different bridge electron count" question — always check whether the bridging atom/group actually has a lone pair available before assuming 3c-4e.

**Complex hydrides as reducing agents:** LiAlH₄ (LAH) and NaBH₄ are both built on the same Group 13 tetrahedral MH₄⁻ anion (§2.3's electropositive-character discussion extends naturally here). LiAlH₄ is the far stronger reducing agent of the two — Al–H bonds are weaker/more hydridic than B–H bonds (aluminium is less electronegative than boron), so LAH reduces esters, carboxylic acids and amides all the way to alcohols/amines, while NaBH₄ is milder and typically stops at reducing aldehydes/ketones without touching esters. This reactivity gap is a direct, testable consequence of B vs Al electronegativity (§2.1's table) rather than an arbitrary fact to memorise.

> **Worked Example — deriving the electron count in Al₂(CH₃)₆'s bridge.** Show that each Al–C(bridge)–Al unit in trimethylaluminium is a 3-centre-2-electron bond, and contrast this explicitly with the 3-centre-4-electron Al–Cl–Al bridge in Al₂Cl₆.
>
> Each terminal methyl carbon contributes a normal 2-electron Al–C bond (2c-2e), using one of aluminium's three valence electrons plus one from carbon's sp³ hybrid. For the *bridging* methyl groups, the CH₃⁻-type carbon has only ONE electron pair available for bonding to Al on the SAME orbital it uses for its terminal C–H bonds — there is no extra lone pair to donate to a second aluminium the way chlorine's third lone pair does in Al₂Cl₆. Instead, the single C–Al σ-bonding electron pair is delocalised over BOTH aluminium centres simultaneously: one electron pair, three atoms (Al–C–Al) = **3-centre-2-electron**, identical in electron-counting logic to diborane's B–H–B bridge (§2.5).
>
> **Contrast:** chlorine in Al₂Cl₆ has THREE lone pairs total; one is used for the normal terminal Al–Cl bond, and a SECOND, otherwise-unused lone pair is donated wholesale into the second aluminium's empty orbital — that donated pair plus the original bonding pair gives 4 electrons spread over the 3-atom Al–Cl–Al unit, i.e. 3-centre-4-electron. Methyl carbon has no such spare lone pair to donate, so it must fall back to sharing its single existing bonding pair — exactly like hydrogen does in diborane.
>
> **General rule:** whenever asked to classify a bridging bond as 3c-2e or 3c-4e, check whether the bridging atom/group has an independent lone pair beyond what its terminal bonds already use. Halogens (Cl, Br, I) and O/N/P-donors typically do (→ 3c-4e); H and alkyl/aryl carbanions typically do not (→ 3c-2e).
>
> **Answer:** Al₂(CH₃)₆'s bridge is 3c-2e (like B₂H₆); Al₂Cl₆'s bridge is 3c-4e (like a normal donor-acceptor adduct) — same general "dimer via bridging" strategy, two structurally different electron-counting outcomes.

## 2.8 Numerical worked examples on the data tables

> **Worked Example — using ΔE to rank inert-pair strength quantitatively.** Using the ΔE = E(np) − E(ns) table from §2.3, predict which halide is more likely to be found as the pure +3 compound at room temperature: InCl₃ or TlCl₃. Justify using the actual eV values, not just the general trend.
>
> ΔE(In) = 5.3 eV; ΔE(Tl) = 7.0 eV. A larger ΔE means the ns² pair is harder to promote into bonding, so the element more strongly resists using both its ns and np electrons together (i.e. resists reaching +3) and instead prefers to keep the ns² pair inert, settling at +1. Since Tl's gap (7.0 eV) is markedly larger than In's (5.3 eV), thallium resists the +3 state more strongly — **InCl₃ is the genuinely stable, common +3 compound; TlCl₃ is comparatively unstable** and decomposes on mild heating to TlCl + Cl₂, releasing chlorine as the compound relaxes to the preferred +1 state. This matches the E° data in the same section: E°(Tl³⁺/Tl) is positive (+1.26 V, non-spontaneous formation) while no such reversal occurs for indium.
>
> **Fast method:** whenever comparing inert-pair strength between two adjacent-group members, the LARGER ΔE value always identifies the element whose lower oxidation state is preferentially stable — no need to separately recall each element's chemistry if the ΔE table is available.

> **Worked Example — density and structure cross-check.** Gallium's density (5.91 g/cm³) is notably lower than indium's (7.31 g/cm³) despite gallium having a smaller atomic radius (135 pm vs 167 pm) — smaller atoms usually pack to HIGHER density, not lower. Resolve this apparent contradiction using the structural information from §2.2.
>
> Density depends on both atomic mass/size AND how efficiently the atoms pack in the solid-state structure — packing efficiency is not automatically the same across a group. Indium adopts a normal metallic CCP (cubic close-packed) lattice, one of the most space-efficient arrangements possible (~74% packing efficiency). Gallium, however, is built from discrete Ga₂ diatomic molecules (§2.2) held together only by weak intermolecular forces — this molecular solid packs far less efficiently than a true metallic lattice, leaving more empty space per unit volume. The lower packing efficiency more than compensates for gallium's smaller atomic size, giving it the lower observed density despite being the smaller atom.
>
> **General method:** never assume density tracks atomic size alone within a group — always check whether every member shares the same structural motif (as most metallic groups do) or whether one member is a genuine structural outlier (as gallium is here). This is the same Ga₂-molecular-solid fact tested from a different angle than the melting-point argument in §2.2, showing how one structural fact answers multiple different exam questions.

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

> **Worked Example — yield calculation through the colemanite extraction route.** 100 kg of pure colemanite (Ca₂B₆O₁₁·5H₂O, M = 412 g/mol) is processed via the SO₂ route: Ca₂B₆O₁₁ + 4SO₂ + 11H₂O → 2Ca(HSO₃)₂ + 6H₃BO₃, followed by dehydration 2H₃BO₃ → B₂O₃ + 3H₂O, followed by magnesium reduction B₂O₃ + 3Mg → 2B + 3MgO. Assuming 100% yield at every step, calculate the mass of elemental boron obtainable.
>
> **Step 1 — moles of colemanite:** n = 100,000 g ÷ 412 g/mol ≈ 242.7 mol.
>
> **Step 2 — moles of boric acid:** each mole of colemanite (containing 6 B atoms in the B₆O₁₁ unit) gives 6 mol H₃BO₃ directly by the stoichiometry shown: n(H₃BO₃) = 242.7 × 6 ≈ 1456.3 mol.
>
> **Step 3 — moles of B₂O₃:** 2H₃BO₃ → B₂O₃ (1:2 ratio, i.e. 2 mol acid gives 1 mol oxide): n(B₂O₃) = 1456.3 ÷ 2 ≈ 728.2 mol.
>
> **Step 4 — moles of elemental boron:** B₂O₃ + 3Mg → 2B (1:2 ratio): n(B) = 728.2 × 2 ≈ 1456.3 mol.
>
> **Step 5 — mass of boron:** mass = 1456.3 mol × 10.8 g/mol ≈ **15,728 g ≈ 15.7 kg** of elemental boron from 100 kg of colemanite.
>
> **Insight:** notice the mole count of boron atoms is conserved exactly from colemanite through to elemental boron (242.7 mol colemanite × 6 B atoms = 1456.3 mol B, matching the final answer) — in any multi-step extraction problem where boron is never lost as a by-product, the fastest check is simply "moles of boron atoms in = moles of boron atoms out," letting you skip the intermediate stoichiometry entirely for a sanity check.

> **Worked Example — full pH-style reasoning for the borax buffer.** Borax solution contains B(OH)₃ (Ka ≈ 5.8 × 10⁻¹⁰, pKa = 9.25) and its conjugate base [B(OH)₄]⁻ in equal concentration (§3.2). Using the Henderson-Hasselbalch approach, find the pH of this buffer, and explain qualitatively what happens to the pH if a small amount of HCl is added.
>
> **Henderson-Hasselbalch:** pH = pKa + log([base]/[acid]). Since [B(OH)₄]⁻] = [B(OH)₃] (equal amounts, as derived in §3.2's own worked example), the ratio is 1, and log(1) = 0. So **pH = pKa = 9.25** for borax solution — this is in fact the textbook justification for why standard "borax buffer" solutions used in pH-meter calibration are pinned at pH 9.18 (the slightly adjusted literature value accounts for ionic-strength corrections beyond this simplified treatment).
>
> **Adding HCl:** the added H₃O⁺ is consumed by the basic component, [B(OH)₄]⁻ + H₃O⁺ → B(OH)₃ + 2H₂O, converting some conjugate base into the weak acid. Because both buffer components remain present (just in a slightly different ratio), the pH shifts only slightly rather than dropping sharply the way it would for unbuffered water — the defining behaviour of a buffer solution, and precisely why borax is used as a pH standard in the first place, not merely as a titration primary standard (§3.2).

> **Worked Example — complete decision-tree question spanning boric acid AND boron halide concepts.** A white crystalline solid X is soluble in hot water, gives a green-edged flame test on treatment with ethanol and conc. H₂SO₄, and its aqueous solution turns red litmus... no change, but blue litmus paper very slightly reddens over time. Identify X, and explain why it does NOT turn blue litmus sharply red despite being acidic.
>
> **Identify X:** the green-edged flame with ethanol/H₂SO₄ is the classical borate test (§3.3) — X is **orthoboric acid, H₃BO₃** (or a borate that releases it in acid). White, crystalline, hot-water-soluble — all consistent.
>
> **Why litmus barely responds:** H₃BO₃ is a very weak Lewis acid (Ka ≈ 5.8 × 10⁻¹⁰, pKa 9.25, §3.3) — its degree of ionisation in water is tiny, so the H₃O⁺ concentration it generates is far too low to sharply redden litmus the way a strong or even moderately weak Brønsted acid (like acetic acid, Ka ≈ 1.8 × 10⁻⁵) would. Litmus responds crudely to pH and needs roughly pH < 6 for a clear colour change; H₃BO₃'s very high pKa keeps typical solution pH close to neutral, explaining the barely perceptible litmus response despite the acid unambiguously being present (confirmed by the flame test).
>
> **General method:** whenever a qualitative-analysis question gives a "barely reacts" or "very slow" observation alongside a positive confirmatory test (like the flame test here), suspect a genuinely weak acid/base rather than concluding "no acid/base present" — cross-check the Ka/Kb value before ruling anything out.

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

## 3.10 Extended practice problems — mixed-concept, JEE Advanced style

11. 50 g of borax (M = 381 g/mol) is dissolved completely in water and titrated against 0.5 M HCl. Calculate the volume of HCl required at the equivalence point. *(n(borax) = 50/381 ≈ 0.1313 mol; since 1 mol borax ≡ 2 mol HCl, n(HCl) = 0.2626 mol; V = 0.2626/0.5 = 0.525 L = 525 mL.)*
12. A 1.0 g sample of impure boric acid is dissolved in water containing excess mannitol and titrated against 0.2 M NaOH, requiring 28.6 mL for the equivalence point. Calculate the % purity of the boric acid sample (M = 61.8 g/mol). *(n(NaOH) = 0.2 × 0.0286 = 5.72×10⁻³ mol; since mannitol makes H₃BO₃ effectively monoprotic 1:1 with NaOH, n(H₃BO₃) = 5.72×10⁻³ mol; mass = 5.72×10⁻³ × 61.8 ≈ 0.3535 g; purity = 0.3535/1.0 × 100 ≈ 35.4%.)*
13. Write the balanced equation for the reaction of diborane with excess water, and calculate the volume of H₂ (at STP) liberated from 5.6 g of B₂H₆ (M = 27.7 g/mol). *(B₂H₆ + 6H₂O → 2H₃BO₃ + 6H₂; n(B₂H₆) = 5.6/27.7 ≈ 0.202 mol; n(H₂) = 0.202 × 6 ≈ 1.213 mol; V = 1.213 × 22.4 ≈ 27.2 L.)*
14. In the compound Al₂(CH₃)₆, identify the type of bridging bond and contrast it with Al₂Cl₆. *(3-centre-2-electron via the bridging methyl's single shared bonding pair, vs Al₂Cl₆'s 3-centre-4-electron via Cl's donated lone pair — see §2.7.)*
15. Rank InCl₃ and TlCl₃ by thermal stability, citing the specific ΔE values that justify your answer. *(InCl₃ more stable; ΔE(In) = 5.3 eV < ΔE(Tl) = 7.0 eV, so thallium resists the +3 state more strongly — see §2.8.)*
16. Explain, using packing efficiency, why gallium has a lower density than indium despite being the smaller atom. *(Gallium's discrete Ga₂-molecule solid packs less efficiently than indium's true CCP metallic lattice — see §2.8.)*
17. State the pH of a freshly prepared borax buffer solution given pKa(H₃BO₃) = 9.25, and explain your reasoning. *(pH ≈ 9.25, since [B(OH)₃] = [B(OH)₄]⁻] makes the Henderson-Hasselbalch log term zero — see §3.10's worked example.)*
18. A student claims boric acid should turn litmus sharply red because it is a confirmed acid (positive flame test). Explain why this reasoning is flawed. *(H₃BO₃'s very high pKa, ~9.25, means minimal ionisation and near-neutral solution pH — a positive confirmatory test does not imply strong acidity.)*
19. 100 kg of pure colemanite is processed through the full SO₂-hydrolysis-then-magnesium-reduction route. Calculate the mass of boron obtained, assuming 100% yield at each step. *(≈15.7 kg — see the full worked example in §3.10.)*
20. Explain why LiAlH₄ reduces esters and carboxylic acids completely to alcohols, while NaBH₄ typically cannot. *(Al–H bonds are weaker/more hydridic than B–H bonds, since Al is less electronegative than B — see §2.7.)*
21. A Group 13 trihalide MX₃ is found to be ionic in the solid state with the metal 6-coordinate, yet exists as a discrete monomer in the vapour phase with no bridging. Identify M and X. *(AlF₃ — the only Group 13 trihalide combination that is both genuinely ionic AND a simple monomer in vapour, since it has no accessible bridging mechanism the way AlCl₃ has via Cl lone-pair donation; see §3.5's CN-by-state table.)*
22. Explain why B₂O₃ can act as EITHER an acid or a base depending on the reaction partner, giving one equation for each role. *(As acid: B₂O₃ + 3SO₃ → B₂(SO₄)₃, since SO₃ is a stronger acidic oxide. As base: reacting with a weaker acidic oxide or basic species, e.g. B₂O₃ + CaO → Ca(BO₂)₂ — see §3.6.)*
23. Distinguish α-Al₂O₃ from γ-Al₂O₃ by BOTH their formation temperature and their industrial use. *(γ-Al₂O₃: from Al(OH)₃ at 450°C, used as a dehydrating agent/catalyst support/chromatography adsorbent. α-Al₂O₃: from Al(OH)₃ at 1000°C, used as an abrasive/refractory — see §3.6.)*
24. Why is the borax bead test unable to distinguish Na⁺ or Al³⁺ salts, even though the test is otherwise very sensitive? *(Their metaborates are colourless — the test only works for transition-metal ions whose metaborates are visibly coloured — see §3.2.)*
25. A student titrates borax against HCl using phenolphthalein and gets an endpoint at exactly half the expected volume. Suggest the most likely experimental error. *(Most likely they used the wrong molar-ratio assumption — e.g. treated borax as monoacidic (1:1 with HCl) instead of diacidic (1:2) — see the worked example in §3.2.)*
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

Members are O, S, Se, Te, Po — the chalcogens. Configuration ns²np⁴. Classification: O, S non-metals; Se, Te metalloids; Po a metal. Oxidation states span −2 to +6; −2 is dominant for O (its small size and high electronegativity strongly favour gaining 2 electrons), while +4 and +6 become the important positive states from S onward.

## 11.1 Quantitative periodic trends

| Property | O | S | Se | Te | Po |
|---|---:|---:|---:|---:|---:|
| Atomic radius (pm) | 66 | 104 | 117 | 137 | 153 |
| IE₁ (kJ/mol) | 1314 | 1000 | 941 | 869 | 812 |
| Electronegativity | 3.5 | 2.6 | 2.6 | 2.1 | 2.0 |
| Electron gain enthalpy (kJ/mol) | −141 | −200 | −195 | −190 | −183 |

**IE₁ is lower than Group 15's corresponding member at every row** (compare N 1402 vs O 1314; P 1012 vs S 1000) — the reverse of the usual left-to-right rise across a period, because Group 15's np³ is a stable half-filled configuration (§7) that Group 16's np⁴ has already disturbed by adding a 4th electron into an already-occupied p-orbital.

**Electron gain enthalpy — the oxygen anomaly:** sulphur's is *more* negative than oxygen's (−200 vs −141 kJ/mol), even though oxygen is more electronegative. Oxygen's very small 2p subshell already carries considerable electron density; adding one more electron meets significant inter-electronic repulsion that partly offsets the energy released. Sulphur's larger, less crowded 3p subshell accepts the extra electron more exothermically. This exactly parallels the F vs Cl electron-gain-enthalpy inversion in Group 17 (§15) — recognise it as the *same* general phenomenon (2nd-period smallness penalising electron gain) recurring in both groups.

## 11.2 The anomalous behaviour of oxygen

1. Small size, high electronegativity — strong hydrogen bonding wherever O–H bonds exist (H₂O boiling at 373 K vs H₂S at 213 K, exactly parallel to the NH₃/PH₃ anomaly).
2. Absence of d-orbitals — maximum covalency of oxygen is limited (typically 2, occasionally higher through coordinate bonds, e.g. H₃O⁺), unlike sulphur which reaches 6 (SF₆).
3. Strong pπ–pπ multiple bonding (O=O, O=C) — the same 2nd-period-vs-heavier contrast used throughout this chapter (§4.3, §7.2).
4. O₂ is paramagnetic (§11.4) — inexplicable from a simple Lewis structure.

## 11.3 Hydrides — parallel to Group 15's NH₃ anomaly

| Property | H₂O | H₂S | H₂Se | H₂Te |
|---|---:|---:|---:|---:|
| Boiling point (K) | 373 | 213 | 232 | 271 |
| Bond angle | 104.5° | 92° | 91° | 90° |
| Acidic strength | weakest | — | — | strongest |
| Reducing power | none | — | — | strongest |

The pattern is a direct structural echo of NH₃/PH₃/AsH₃/SbH₃ (§7.3): boiling point is anomalously high for the smallest hydride (hydrogen bonding), bond angle falls toward 90° down the group (less lone-pair compression as the central atom grows), and acidic strength/reducing power both *rise* down the group as the H–X bond weakens and becomes easier to break heterolytically (acidity) or donate electrons from (reduction).

## 11.4 Dioxygen and its paramagnetism

**Preparation:** thermal decomposition of chlorates/permanganates: 2KClO₃ →(MnO₂ catalyst, Δ) 2KCl + 3O₂; or 2Ag₂O →(Δ) 4Ag + O₂.

**MOT explanation for paramagnetism:** the Lewis structure O=O predicts all electrons paired — it cannot explain O₂'s observed paramagnetism, which is exactly why this is a favourite "Lewis fails, MOT succeeds" question. Filling molecular orbitals in energy order for O₂ (16 valence + core electrons total), the two highest-energy electrons occupy the *degenerate* π*2px and π*2py orbitals *separately* (Hund's rule), each unpaired with parallel spin.

**Bond order, counted correctly (valence electrons only — the core σ1s/σ*1s pair always cancels and can be ignored):** bonding pairs σ2s² + σ2pz² + π2px² + π2py² = 8 electrons; antibonding σ*2s² + π*2px¹ + π*2py¹ = 4 electrons. BO = ½(8 − 4) = **2**, matching the simple Lewis double bond — but MOT alone shows this bond order of 2 is achieved with 2 unpaired electrons, not 0. Removing one π* electron to form O₂⁺ (dioxygenyl) *raises* the bond order to 2.5, giving a shorter, stronger bond — directly relevant to Bartlett's 1962 discovery that PtF₆ could oxidise O₂ to O₂⁺[PtF₆]⁻, which led him to reason that Xe (whose first ionisation energy, 1170 kJ/mol, is close to O₂'s, 1175 kJ/mol) should also be oxidisable — the historical opening move of noble-gas chemistry (§18).

# 12. Group 16 deep dive: oxygen chemistry, ozone and sulphur allotropes

## 12.1 Ozone

**Preparation:** 3O₂ ⇌ 2O₃, ΔH = +142 kJ/mol, via silent electric discharge on pure, dry O₂ (a "silent" — non-sparking — discharge is essential; a spark would decompose O₃ as fast as it forms).

**Structure:** bent, bond angle 117°, a resonance hybrid of two structures with the terminal-to-central O–O bonds equal in length (128 pm, intermediate between a single and double bond) — the classic resonance-structure question in this chapter, parallel to CO₃²⁻/NO₃⁻ in earlier chapters.

**Thermodynamics:** unstable relative to O₂; decomposition is exothermic (ΔH negative) *and* increases entropy (ΔS positive, since 2 mol O₃ → 3 mol O₂), so ΔG is large and negative — ozone is thermodynamically unstable but kinetically persistent enough to be isolated and studied.

**Oxidising action — the standard estimation:** O₃ + 2KI + H₂O → I₂ + O₂ + 2KOH. The liberated I₂ is titrated against standard sodium thiosulphate using starch indicator: I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆.

> **Worked Example — iodometric ozone estimation.** A sample of ozonised oxygen is passed into excess acidified KI; the liberated I₂ needs 20.0 mL of 0.1 M Na₂S₂O₃ for complete titration. Find the moles of O₃.
>
> Step 1: O₃ + 2I⁻ + H₂O → I₂ + O₂ + 2OH⁻ — each mole of O₃ liberates exactly 1 mole of I₂ (1:1).
> Step 2: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ — each mole of I₂ needs 2 moles of thiosulphate.
> Moles Na₂S₂O₃ = 0.1 × 0.020 = 2.0 × 10⁻³ mol ⇒ moles I₂ = 1.0 × 10⁻³ mol ⇒ moles O₃ = **1.0 × 10⁻³ mol** (1:1 with I₂).
>
> **General method:** every "estimation via liberated iodine" problem (ozone, chlorine, hypochlorite, dichromate, Cu²⁺) reduces to this same two-step skeleton — find the analyte:I₂ ratio from the first reaction, then apply the fixed I₂:thiosulphate 1:2 ratio. Learn the skeleton once.

**Test:** tailing of mercury — 2Hg + O₃ → Hg₂O + O₂, which destroys mercury's meniscus (loss of surface tension), a classical qualitative test. **Depletion:** by NO from supersonic jets and by CFCs ("Freons"), NO + O₃ → NO₂ + O₂ — the same NO chemistry as §7.4, now acting catalytically in the stratosphere.

## 12.2 Allotropes of sulphur

**Rhombic (α) sulphur:** yellow, stable below 369 K, m.p. 385.8 K; insoluble in water, soluble in CS₂; S₈ puckered crown-ring molecules.

**Monoclinic (β) sulphur:** colourless/pale yellow needles, stable above 369 K, m.p. 393 K; also S₈ puckered rings — the two forms differ only in crystal packing, not molecular structure. 369 K is the transition temperature at which both forms are simultaneously stable (a genuine equilibrium point, occasionally tested as a phase-diagram question).

**Vapour-phase sulphur (S₂):** at very high temperature (~1000 K), S₈ dissociates to the diatomic S₂ molecule, which — like O₂ — is **paramagnetic**, having unpaired electrons in degenerate π* orbitals by the same MOT argument as §11.4. This is a frequently tested trap: students assume only O₂ shows this MOT-predicted paramagnetism, but any Group 16 diatomic with the right electron count can.

## 12.3 Frasch process — extraction of elemental sulphur

Used for underground deposits too deep for conventional mining (historically the US Gulf Coast, exploiting salt-dome geology). Three concentric pipes are sunk into the deposit: superheated water (~443 K, under pressure to stay liquid above 373 K) is forced down the **outer** pipe to melt the sulphur (m.p. only ~393 K); compressed hot air down the **inner** pipe; the resulting molten-sulphur/water froth is forced **up** the **middle** pipe by the air pressure. Gives ~99.5% pure sulphur directly, with no further purification needed — the reason it dominated extraction for decades. Distinguish sharply from the Contact process (§14): Frasch extracts the *element*; Contact converts that element into H₂SO₄.

# 13. Group 16: oxoacids of sulphur and redox logic

## 13.1 Oxidation states across sulphur's oxoacids

| Acid | Formula | S oxidation state | Key feature |
|---|---|---:|---|
| Sulphurous | H₂SO₃ | +4 | Lone pair remains on S |
| Sulphuric | H₂SO₄ | +6 | "King of chemicals" |
| Thiosulphuric | H₂S₂O₃ | see below | Two non-equivalent S atoms |
| Pyrosulphuric (oleum) | H₂S₂O₇ | +6 | S–O–S linkage |
| Peroxodisulphuric (Marshall's acid) | H₂S₂O₈ | +6 | –O–O– peroxo linkage |

> **Worked Example — the peroxo/thio oxidation-state trap.** Find the oxidation state of S in (a) H₂S₂O₃ and (b) H₂S₂O₈, and explain why a naive whole-molecule average is misleading for (a).
>
> **Naive average for H₂S₂O₃:** treating both S as identical and all 4 O as −2: 2(+1) + 2x + 4(−2) = 0 ⇒ x = +3 — but this hides the real structure.
>
> **Actual structure:** H₂S₂O₃ (thiosulphuric acid) is literally H₂SO₄ with *one oxygen replaced by sulphur*. The central sulphur keeps sulphuric acid's own environment (+6); the replacing (terminal, thio) sulphur sits where an oxygen normally would, and is assigned −2 by the same convention oxygen always gets. **Central S = +6, terminal S = −2** — the two sulphurs are genuinely NOT equivalent, and the true average, (+6 + (−2))/2 = +2, differs from the naive +3.
>
> **H₂S₂O₈ (peroxodisulphuric acid):** here both sulphurs ARE equivalent (two SO₄ groups joined by a peroxo –O–O– bridge, no S–S bond). Peroxo oxygens are −1 each, not −2. 2(+1) + 2x + 6(−2) + 2(−1) = 0 ⇒ x = **+6** for both.
>
> **General rule:** whenever a formula contains a peroxo (–O–O–) or thio (S-for-O substitution) group, the shortcut whole-molecule average either needs a modified O oxidation state (peroxo O = −1) or breaks down entirely (thio S ≠ regular S) — always check the real structure before averaging.

## 13.2 Redox behaviour of the sulphur oxoacids

Sulphurous acid (S at +4) is both an oxidising and reducing agent depending on the partner — it can be oxidised to sulphate (+6) by strong oxidants (decolorises acidified KMnO₄, 5SO₃²⁻ + 2MnO₄⁻ + ... → 5SO₄²⁻ + 2Mn²⁺, a standard titration), or reduced to sulphur/H₂S by strong reductants. Sulphuric acid at +6 is the group's terminal, non-reducible state, mirroring H₃PO₄'s non-reducing status in Group 15 (§10.1) — the "all the oxidisable hydrogens are gone" pattern recurs across every oxoacid family in this chapter.

# 14. Sulphur dioxide, sulphuric acid and contact-process mastery

## 14.1 Sulphur dioxide, SO₂

**Preparation:** roasting sulphide ores, 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂; in the lab, Na₂SO₃ + H₂SO₄(dilute) → Na₂SO₄ + H₂O + SO₂.

**Structure:** bent (AX₂E), S at +4, one lone pair remains on sulphur — steric number 3, sp². **Contrast with SO₃** (S at +6, no lone pair, also steric number 3 but all-bonding) which is trigonal planar (AX₃) — same steric number, different shape, because the underlying oxidation state (and hence electron count) genuinely differs, not merely a different drawing convention.

**Reactions:** with NaOH (limited SO₂), SO₂ + 2NaOH → Na₂SO₃ + H₂O; with *excess* SO₂, the sulphite converts to bisulphite, Na₂SO₃ + SO₂ + H₂O → 2NaHSO₃ — the same limited-vs-excess-reagent pattern as CO₂/Ca(OH)₂ and Cl₂/NaOH (§16). Bleaching action is temporary (by reduction, not oxidation like chlorine's bleaching) — SO₂ reduces coloured organic matter to a colourless compound that can slowly re-oxidise and regain colour in air, unlike chlorine bleaching, which is permanent (oxidative destruction of the chromophore).

**SO₃ — the monomer/trimer duality:** gas-phase SO₃ is trigonal planar, genuinely sp² with 3 bonding domains and no lone pair. On cooling, sulphur can expand its coordination by accepting a lone pair from a neighbouring SO₃'s oxygen, forming S–O–S bridges — the solid exists as a cyclic trimer (S₃O₉) with each sulphur now roughly tetrahedral (sp³), the lower-energy solid-state arrangement.

## 14.2 Contact process — industrial H₂SO₄ manufacture

**Step 1:** S (or sulphide ores) + O₂ → SO₂ (as above).

**Step 2 (the yield-determining step):** 2SO₂ + O₂ ⇌ 2SO₃, ΔH = −196 kJ/mol, catalysed by **V₂O₅**, run at ~720 K and ~2 bar. Exothermic + reduces gas moles (3→2), so — exactly as with the Haber process (§8.1) — low temperature would favour a higher equilibrium yield, but 720 K is chosen as the practical compromise between equilibrium position and an acceptable reaction rate; moderate pressure (~2 bar, not extreme) is used because the equilibrium is already reasonably favourable at 1 atm and the marginal yield gain from higher pressure does not justify the extra engineering cost.

**Step 3:** SO₃ is *not* dissolved directly in water (the reaction is too violently exothermic and produces an uncontrollable acid mist). Instead, SO₃ is dissolved in existing concentrated H₂SO₄ to give **oleum** (pyrosulphuric acid, H₂S₂O₇), which is then diluted carefully with water to the desired concentration: SO₃ + H₂SO₄ → H₂S₂O₇, then H₂S₂O₇ + H₂O → 2H₂SO₄.

## 14.3 Practice problems

1. Why is sulphur's electron gain enthalpy more negative than oxygen's, despite oxygen being more electronegative? *(Oxygen's small, already electron-dense 2p subshell meets significant inter-electronic repulsion on adding another electron; sulphur's larger 3p subshell does not.)*
2. Explain why S₂ vapour, like O₂, is paramagnetic. *(Same MOT argument — degenerate π* orbitals half-filled by Hund's rule.)*
3. Distinguish the Frasch process from the Contact process in one line. *(Frasch extracts elemental sulphur from underground deposits; Contact converts elemental sulphur into H₂SO₄.)*
4. Assign the oxidation state of sulphur in H₂S₂O₃ and explain why the naive average is wrong. *(Central S = +6, terminal (thio) S = −2 — the two sulphurs are structurally non-equivalent.)*
5. Why do SO₂ and SO₃ have different shapes despite the same steric number logic being nearby? *(SO₂'s S is +4 with a remaining lone pair — bent, AX₂E; SO₃'s S is +6 with no lone pair — trigonal planar, AX₃.)*
6. State the Contact process's key step, catalyst and conditions. *(2SO₂ + O₂ ⇌ 2SO₃, V₂O₅ catalyst, ~720 K, ~2 bar.)*
7. Why is SO₃ absorbed into H₂SO₄ (giving oleum) rather than directly into water? *(Direct water absorption is too violently exothermic, producing an uncontrollable corrosive mist.)*
8. Why is SO₂'s bleaching action temporary while chlorine's is permanent? *(SO₂ bleaches by reduction — a reversible process that can slowly re-oxidise in air; Cl₂ bleaches by oxidative, irreversible destruction of the chromophore.)*
9. A sample of ozonised oxygen liberates I₂ that requires 15.0 mL of 0.2 M Na₂S₂O₃ for titration. Find the moles of O₃. *(Moles S₂O₃²⁻ = 3.0×10⁻³; moles I₂ = 1.5×10⁻³; moles O₃ = 1.5×10⁻³ mol, using the 1:1 O₃:I₂ and 1:2 I₂:S₂O₃²⁻ ratios from §12.1.)*
# 15. Group 17: halogens, interhalogens and oxoacids

Members are F, Cl, Br, I, At. Configuration ns²np⁵ — one electron short of a noble-gas shell, making halogens the most reactive non-metals and the strongest oxidising family in the periodic table. Astatine is intensely radioactive with no stable isotope. Halogens have the smallest atomic radii in their respective periods (highest effective nuclear charge for a given shell among non-metals) and the highest electronegativities.

## 15.1 Quantitative periodic trends

| Property | F | Cl | Br | I |
|---|---:|---:|---:|---:|
| Atomic radius (pm) | 72 | 99 | 114 | 133 |
| IE₁ (kJ/mol) | 1681 | 1251 | 1140 | 1008 |
| Electronegativity | 4.0 | 3.2 | 3.0 | 2.7 |
| Electron gain enthalpy (kJ/mol) | −328 | −349 | −325 | −295 |
| Bond dissociation enthalpy, X–X (kJ/mol) | 159 | 243 | 193 | 151 |

## 15.2 Three critical anomalies — memorise as one cluster

**1. Electron gain enthalpy: Cl > F > Br > I (Cl most negative, NOT F).** Fluorine's tiny 2p subshell is already electron-dense; the incoming electron meets significant inter-electronic repulsion, partly offsetting the energy released. Chlorine's larger, less crowded 3p subshell accepts the electron more exothermically — the exact same mechanism as sulphur's electron gain beating oxygen's (§11.1) and is worth recognising as one recurring 2nd-period-smallness effect across three different groups (N/O/F all show it relative to their period-3 neighbours in some property).

**2. Oxidising power is still F₂ > Cl₂ > Br₂ > I₂, despite Cl's better electron gain enthalpy.** Oxidising power depends on the *whole* thermodynamic cycle — bond dissociation + electron gain + hydration enthalpy — not electron gain enthalpy alone. F₂'s F–F bond is exceptionally weak (159 kJ/mol, weaker even than Br–Br, due to strong lone-pair/lone-pair repulsion between the small, adjacent fluorine atoms) so it dissociates easily, and F⁻'s very high hydration enthalpy (tiny ion, high charge density) releases a great deal of energy. Both effects overwhelm the electron-gain-enthalpy deficit relative to chlorine.

**3. Bond dissociation enthalpy order: Cl₂ > Br₂ > F₂ > I₂ — F₂ is anomalously weak.** Again the lone-pair repulsion argument: fluorine's small size forces its 3 non-bonding lone pairs on each atom uncomfortably close to the bonding pair, weakening the F–F single bond well below what its short bond length alone would predict.

## 15.3 Hydrogen halides

| Property | HF | HCl | HBr | HI |
|---|---:|---:|---:|---:|
| Acidic strength | weakest | — | — | strongest |
| Thermal stability | highest | — | — | lowest |
| Reducing power | none | — | — | strongest |
| Boiling point (K) | 293 | 188 | 206 | 238 |

**HF is the weakest hydrohalic acid**, despite fluorine's extreme electronegativity — acid strength here tracks how easily the H–X bond breaks (bond dissociation ease), and H–F is exceptionally strong; HF also hydrogen-bonds into ion pairs in water, further suppressing dissociation. **HF has the highest boiling point** of the four (293 K, an outlier breaking the smooth HCl<HBr<HI trend) for the same reason water and ammonia are anomalous — strong hydrogen bonding.

> **Worked Example — why HBr and HI cannot be made the same way as HCl.** NaCl + conc. H₂SO₄ →(Δ) NaHSO₄ + HCl works cleanly, but the analogous reaction with NaBr or NaI does not give clean HBr/HI. Why, and what is used instead?
>
> Concentrated H₂SO₄ is itself a moderately strong **oxidising** agent, and HBr and HI are strong **reducing** agents (§15.2's reducing-power trend) — so the acid oxidises its own product: 2HBr + H₂SO₄ → Br₂ + SO₂ + 2H₂O, and even more vigorously, 8HI + H₂SO₄ → 4I₂ + H₂S + 4H₂O. HCl survives because Cl⁻ is too weak a reducing agent to be oxidised by H₂SO₄ under these conditions.
>
> **Fix:** HBr and HI are instead prepared using **non-oxidising phosphoric acid**, e.g. NaBr + H₃PO₄ →(Δ) NaH₂PO₄ + HBr, which cannot oxidise the halide product. This is one of the most frequently tested preparation-method questions in the whole halogen chapter.

# 16. Group 17 deep dive: chlorine, HCl and oxyacids

## 16.1 Chlorine chemistry — condition-dependent products

**Preparation (lab):** MnO₂ + 4HCl(conc.) →(Δ) MnCl₂ + Cl₂ + 2H₂O. **Industrial:** the chlor-alkali process (electrolysis of brine) — see §16.2.

**Reaction with NaOH — a classic condition-switch question:**

| Condition | Products |
|---|---|
| Cold, dilute NaOH | NaCl + NaOCl (sodium hypochlorite) |
| Hot, concentrated NaOH | NaCl + NaClO₃ (sodium chlorate) |
| Dry slaked lime | Ca(OCl)Cl (bleaching powder) |

Both are disproportionations of chlorine (0 → −1 and 0 → +1, or 0 → −1 and 0 → +5) — exactly the same X₂ + 2OH⁻ → X⁻ + OX⁻ + H₂O skeleton seen for cyanogen (a pseudohalogen, §17.2) and for bromine/iodine under equivalent conditions. **Bleaching powder** is CaOCl₂, more precisely a mixed salt Ca(OCl)Cl, formally the calcium salt of both HCl and HOCl: Cl₂ + Ca(OH)₂ → CaOCl₂ + H₂O.

## 16.2 Chlor-alkali process — industrial electrolysis of brine

Concentrated aqueous NaCl is electrolysed in a membrane cell, simultaneously producing **three** major chemicals — hence the name (chlor- for chlorine, -alkali for NaOH), plus hydrogen: **Cathode:** 2H₂O + 2e⁻ → H₂ + 2OH⁻ (water is reduced in preference to Na⁺, which is far harder to reduce). **Anode:** 2Cl⁻ → Cl₂ + 2e⁻ (Cl⁻ is oxidised in preference to water, despite O₂ evolution being thermodynamically easier, due to a large kinetic overpotential for O₂ at the electrode). Na⁺ migrates through the membrane to combine with the cathode-generated OH⁻. **Net:** 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂ — chlorine here is really a *co-product* of NaOH manufacture, not the primary target, which is exactly why this single electrolysis is economically central to the chemical industry.

## 16.3 Oxoacids of chlorine — the acid-strength ladder

| Oxidation state | Acid | Name | Strength |
|---:|---|---|---|
| +1 | HOCl | Hypochlorous | Weakest |
| +3 | HOClO | Chlorous | Weak |
| +5 | HOClO₂ | Chloric | Strong |
| +7 | HOClO₃ | Perchloric | Strongest |

> **Worked Example — why acid strength rises with oxidation state.** Explain, using conjugate-base stability, why HClO₄ is far stronger than HOCl even though both have exactly one ionisable O–H bond.
>
> Count non-ionisable Cl=O bonds: HOCl has 0; HClO₄ has 3 (as HOClO₃). After deprotonation, ClO⁻ (from HOCl) carries its negative charge almost entirely on one oxygen — poorly stabilised, high energy, wants the proton back. ClO₄⁻ (from HClO₄) delocalises the charge over 4 equivalent oxygens by resonance (each Cl–O bond has partial double-bond character) — far more stable. The 3 additional electronegative Cl=O groups also inductively withdraw density through the framework, weakening the O–H bond and easing the initial ionisation. Both effects compound with rising oxidation state: HOCl < HOClO < HOClO₂ < HOClO₃.
>
> **General method:** for every oxoacid family in this chapter (nitrogen, phosphorus, sulphur, chlorine), "more terminal O atoms on the central atom → stronger acid" follows this same conjugate-base-delocalisation-plus-induction argument, virtually without exception.

**Fluorine's exception:** forms only ONE oxoacid, HOF (fluorine's extreme electronegativity means it never takes a positive oxidation state relative to oxygen, so no higher chlorine-style series exists for F).

# 17. Interhalogens, pseudohalogens, and Group 17 traps

## 17.1 Interhalogen compounds — deriving shape by steric number, not memorising

General type XX'ₙ, where X is the larger, less electronegative halogen (the central atom). Preparation: direct combination in varying ratios sets the product, e.g. Cl₂ + F₂(1:1) → 2ClF, while Cl₂ + 3F₂(excess) → 2ClF₃. Interhalogens are *more* reactive than the parent halogens (except F₂ itself), because the X–X' bond is weaker than either parent X–X bond.

| Type | Shape | Example |
|---|---|---|
| XX' | Linear | ClF, ICl |
| XX'₃ | Bent T-shape | ClF₃, BrF₃ |
| XX'₅ | Square pyramidal | BrF₅, IF₅ |
| XX'₇ | Pentagonal bipyramidal | IF₇ |

> **Worked Example — deriving BrF₅'s shape and explaining why "ClF₇" cannot exist.**
>
> Br has 7 valence electrons; forming 5 Br–F bonds uses 5, leaving 7−5 = 2 electrons = 1 lone pair. Steric number = 5 bonding + 1 lone pair = 6 ⇒ **sp³d² hybridisation** (octahedral electron geometry). With one of the 6 positions occupied by a lone pair, the molecular shape (atoms only) is **square pyramidal** — basal angles compressed slightly below 90° (~84.8°) by the extra lone-pair/bond-pair repulsion. The lone pair sits opposite the apical F, so bond dipoles cannot cancel — **BrF₅ is polar**.
>
> IF₇ needs steric number 7 (sp³d³) — this requires central-atom d-orbitals large and energetically accessible enough to genuinely accommodate 7 surrounding atoms without severe crowding. Iodine's large radius makes this possible; chlorine (much smaller, period 3) cannot sterically fit 7 fluorines around it, so "ClF₇" does not exist, despite the formula pattern looking extendable.
>
> **Fast method:** steric number = (bonded atoms) + (remaining lone pairs, found from central-atom valence electrons minus electrons used in bonds, divided by 2). SN 4/5/6/7 → sp³/sp³d/sp³d²/sp³d³. This single method derives every interhalogen and xenon-compound shape in the syllabus — learn it once.

**Hydrolysis:** XX' + H₂O → HX' + HOX — the oxyacid always comes from the *larger* (central) halogen, since it retains the positive-character bond to oxygen, while the smaller halogen leaves as the simple halide acid. **Uses:** ClF₃/BrF₃ for uranium enrichment (as UF₆ generation agents).

## 17.2 Pseudohalogens — molecules that mimic halogen behaviour

A pseudohalogen is a molecule built from two or more electronegative atoms that, as a unit, behaves chemically like a halogen molecule X₂; its anion is a pseudohalide, behaving like X⁻.

**Pseudohalogens:** cyanogen (CN)₂, thiocyanogen (SCN)₂. **Pseudohalide ions:** CN⁻ (cyanide), SCN⁻ (thiocyanate), N₃⁻ (azide), OCN⁻ (cyanate).

**Why the analogy holds — point by point:** they dimerise like X₂ (2CN⁻ → (CN)₂ + 2e⁻, paralleling 2Cl⁻ → Cl₂ + 2e⁻); they form HX-type acids (HCN, HSCN, HN₃, paralleling HCl); they form insoluble silver salts (AgCN, AgSCN, paralleling AgCl — and this is exactly why cyanide/thiocyanate must be removed before testing for halides, or they give false positives); they form inter-pseudohalogens with real halogens (ClCN, BrCN, ICN, paralleling ICl); and critically, they **disproportionate in alkali the same way**: (CN)₂ + 2NaOH → NaCN + NaOCN + H₂O, structurally identical to Cl₂ + 2NaOH → NaCl + NaOCl + H₂O (§16.1).

> **Worked Example — proving cyanogen is a pseudohalogen by oxidation-state bookkeeping.** Assign C's oxidation state in (CN)₂, CN⁻, and OCN⁻, and confirm the alkaline reaction is a disproportionation.
>
> (CN)₂: N is −3; per CN unit, C + (−3) = 0 ⇒ C = **+3**. CN⁻: C + (−3) = −1 ⇒ C = **+2** (reduced). OCN⁻: C + (−2) + (−3) = −1 ⇒ C = **+4** (oxidised). Carbon splits from +3 into both +2 and +4 — the same-element-splits-both-ways signature of disproportionation, structurally identical to Cl₂'s own alkaline disproportionation.
>
> **Cyanogen itself:** linear N≡C–C≡N, both carbons sp, prepared by heating Hg(CN)₂ →(Δ) Hg + (CN)₂; burns with a rose-red flame; highly toxic.

**Trap — do not confuse interhalogens with inter-pseudohalogens.** ICl is a genuine interhalogen (two real halogens). ClCN is an *inter-pseudohalogen* (one real halogen + one pseudohalide) — pseudohalogens themselves, like (CN)₂, contain no halogen atom at all.

## 17.3 Traps to memorise as a cluster

1. **F is not the most negative electron gain enthalpy — Cl is** (§15.2, point 1).
2. **F₂ is still the strongest oxidant** despite that, because oxidising power is a whole-cycle property, not just electron gain enthalpy (§15.2, point 2).
3. **Interhalogen hydrolysis gives the oxyacid from the LARGER halogen**, not the smaller one (§17.1).
4. **HF is the weakest hydrohalic acid**, not the strongest, despite F's extreme electronegativity (§15.3).

## 17.4 Practice problems

1. Arrange F₂, Cl₂, Br₂, I₂ by oxidising power and explain why the order doesn't track electron gain enthalpy. *(F₂ > Cl₂ > Br₂ > I₂ — governed by the whole thermodynamic cycle: weak F–F bond + huge F⁻ hydration enthalpy override Cl's better electron gain enthalpy.)*
2. Why can't HBr be prepared by heating NaBr with concentrated H₂SO₄? *(H₂SO₄ oxidises the reducing HBr product to Br₂; use non-oxidising H₃PO₄ instead.)*
3. Derive the hybridisation and shape of ClF₃ from first principles. *(Cl: 7 valence e⁻, 3 bonds used, 4 remain = 2 lone pairs; steric number 5 ⇒ sp³d, trigonal bipyramidal electron geometry, bent T-shape molecular shape.)*
4. Write the hydrolysis of ICl and state which product is the oxyacid. *(ICl + H₂O → HCl + HOI — iodine, the larger/central halogen, retains the OH.)*
5. Distinguish an interhalogen from an inter-pseudohalogen with one example each. *(ICl = interhalogen, two real halogens. ClCN = inter-pseudohalogen, one halogen + one pseudohalide.)*
6. Why must cyanide be removed before testing a solution for chloride ions? *(AgCN precipitates like AgCl, giving a false positive.)*
7. Give the products of Cl₂ + cold dilute NaOH and Cl₂ + hot concentrated NaOH. *(Cold dilute: NaCl + NaOCl. Hot concentrated: NaCl + NaClO₃.)*
8. Explain, using conjugate-base delocalisation, why HClO₄ is a far stronger acid than HOCl. *(See the worked example in §16.3 — charge delocalised over 4 oxygens in ClO₄⁻ vs localised on one in ClO⁻.)*
# 18. Group 18: noble gases and xenon compounds

Members are He, Ne, Ar, Kr, Xe, Rn. Configuration ns²np⁶ (He: 1s²) — a completely filled shell, giving the group its defining inertness: very high ionisation enthalpy and strongly *positive* electron gain enthalpy (energy must be *added* to force an electron on, not released — never "zero," which is a common misreading).

## 18.1 Occurrence and abundance

Argon is by far the most abundant noble gas in the atmosphere (~0.93% by volume); xenon is the least abundant (~0.0000087%) — an abundance-vs-chemical-importance inversion worth noting, since Xe is nonetheless the noble gas with by far the richest chemistry. Helium's chief commercial source is natural gas deposits (from α-particle/⁴He accumulation via radioactive decay of uranium/thorium minerals over geological time), not the atmosphere. Radon is a decay product of radium: ²²⁶Ra → ²²²Rn + ⁴He.

| Property | He | Ne | Ar | Kr | Xe |
|---|---:|---:|---:|---:|---:|
| Atomic radius (pm) | 50 | 65 | 95 | 110 | 130 |
| IE₁ (kJ/mol) | 2372 | 2081 | 1521 | 1351 | 1170 |
| Boiling point (K) | 4.2 | 27 | 87 | 120 | 165 |

**Helium's boiling point (4.2 K) is the lowest of any known substance** — the reason liquid helium is the standard cryogenic coolant for superconducting MRI/NMR magnets. Ionisation enthalpy falls smoothly down the group, which is *why* only the heaviest, most polarisable members (Kr, and especially Xe) form genuine compounds — their outermost electrons are held loosely enough to be removed or shared under the right conditions.

## 18.2 Bartlett's discovery — the opening of noble-gas chemistry

Neil Bartlett (1962) observed that PtF₆ could oxidise O₂ to the dioxygenyl cation: O₂ + PtF₆ → O₂⁺[PtF₆]⁻ (a red solid). Reasoning that Xe's first ionisation energy (1170 kJ/mol) was remarkably close to O₂'s (1175 kJ/mol) — see the O₂ MOT discussion in §11.4 for exactly how that number arises — Bartlett predicted PtF₆ should be able to oxidise xenon too, and confirmed it: Xe + PtF₆ → Xe⁺[PtF₆]⁻, the first noble-gas compound ever prepared. This single inference — matching one element's known ionisation energy against another's oxidising power — is worth remembering as a method, not just a historical fact: it is the same "compare IE to a known oxidant's capability" reasoning used throughout inorganic redox prediction.

Noble-gas compounds form almost exclusively with **F and O**, the two most electronegative elements, and almost exclusively for **Xe** (Kr forms only KrF₂, under forcing conditions).

## 18.3 Clathrates — physical trapping, not chemistry

Clathrates are **not true chemical compounds** — no covalent or ionic bond forms to the noble-gas atom. Instead, a noble-gas atom of the right size is physically trapped inside a cage-like void in a host lattice (classically an ice/water cage, a gas hydrate, formed under pressure). Formation depends critically on size: the atom must be large enough to be held by weak van der Waals trapping but small enough to fit — He and Ne are too small and do **not** form stable clathrates, while Ar, Kr and Xe do. Because there is no true bonding, clathrates decompose on melting or on dissolving the host lattice — a purely physical (host–guest) phenomenon, and this exact "is it a compound or just physically trapped" distinction is the standard conceptual test built around this topic.

# 19. Group 18 deep dive: xenon fluorides, oxides and hydrolysis

## 19.1 Preparation — conditions determine the product

| Product | Xe : F₂ ratio | Conditions |
|---|---:|---|
| XeF₂ | Excess Xe : 1 | 673 K, 1 bar |
| XeF₄ | 1 : 5 | 873 K, 7 bar |
| XeF₆ | 1 : 20 | 573 K, 60–70 bar |

An alternative route to XeF₆: XeF₄ + O₂F₂ → XeF₆ + O₂ (at 143 K). The pattern — richer fluorine ratio and generally higher pressure giving a higher fluoride — is itself worth internalising rather than memorising each condition set independently.

## 19.2 Structures — derived by steric number, exactly as for interhalogens

| Compound | Steric no. | Hybridisation | Shape |
|---|---:|---|---|
| XeF₂ | 5 | sp³d | Linear (3 lone pairs equatorial) |
| XeF₄ | 6 | sp³d² | Square planar (2 lone pairs axial) |
| XeF₆ | 7 | sp³d³ | Distorted octahedral (1 lone pair) |
| XeOF₄ | 6 | sp³d² | Square pyramidal |
| XeO₃ | 4 | sp³ | Pyramidal (1 lone pair) |

Xe contributes 8 valence electrons in each case; subtract one per Xe–F (or Xe=O, counted as one bonding domain) bond, and whatever remains in pairs is lone pairs — exactly the same steric-number method used for BrF₅ and IF₇ in §17.1. XeO₃ (steric number 4, sp³, pyramidal) is isostructural with NH₃ and with XeF₃⁺ — but NOT with XeF₄, whose steric number is 6.

**Modern bonding view (beyond simple d-orbital VSEPR):** XeF₂'s "sp³d" label is a useful VSEPR bookkeeping device, but Xe's 5d orbitals are in fact too high in energy to meaningfully participate. A more physically accurate description is a linear **3-centre-4-electron (3c-4e) bond** across F–Xe–F: one Xe p-orbital combines with one p-orbital from each F to give 3 molecular orbitals (bonding, non-bonding, antibonding); 4 electrons fill the bonding and non-bonding MOs, leaving the antibonding MO empty. Net bonding is real but *weaker* than two ordinary 2-centre bonds — exactly why Xe–F bonds are unusually long/weak and why XeF₂ is such an effective fluorinating agent. The same 3c-4e logic extends to other hypervalent species (I₃⁻, ClF₃, SF₄, PF₅) without invoking d-orbitals at all.

## 19.3 Hydrolysis — simple substitution vs disproportionation

**XeF₂ (simple substitution):** 2XeF₂ + 2H₂O → 2Xe + 4HF + O₂

**XeF₆ (complete, simple substitution):** XeF₆ + 3H₂O → XeO₃ + 6HF

**Partial hydrolysis of XeF₆:** XeF₆ + H₂O → XeOF₄ + 2HF; XeF₆ + 2H₂O → XeO₂F₂ + 4HF

**XeF₄ (disproportionation, not simple substitution):** 6XeF₄ + 12H₂O → 4Xe + 2XeO₃ + 24HF + 3O₂

> **Worked Example — proving XeF₄ hydrolysis is a disproportionation.** Assign Xe's oxidation state in XeF₄ and XeO₃, and confirm the equation above is not a simple substitution.
>
> XeF₄: Xe + 4(−1) = 0 ⇒ Xe = **+4**. XeO₃: Xe + 3(−2) = 0 ⇒ Xe = **+6**. Elemental Xe (a product) = **0**. Starting Xe(+4) splits into Xe(0) (reduced, gained 4e⁻) and Xe(+6) (oxidised, lost 2e⁻) — the same-element-splits-both-ways signature used throughout this chapter (NO₂ + H₂O in §7.4, H₃PO₃ in §10.1, (CN)₂ + NaOH in §17.2). The 4:2 ratio of Xe⁰:XeO₃ in the balanced equation matches the electron bookkeeping (4×4e⁻ gained = 16e⁻; 2×2e⁻ lost = 4e⁻; the remaining electrons balance via O₂ evolution, since O in H₂O is −2 and O in O₂ is 0).
>
> **General rule:** any time a "hydrolysis" equation produces the *same* element in two different products (here, both Xe⁰ and XeO₃), check oxidation states before assuming simple substitution — it is almost always secretly a disproportionation.

## 19.4 Reactions with fluoride donors/acceptors

**With Lewis acids (fluoride acceptors):** XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻. **With fluoride donors (alkali fluorides):** XeF₆ + MF → M⁺[XeF₇]⁻ (M = Na, K, Rb, Cs). Xenon fluorides are strong oxidising and fluorinating agents generally, readily fluorinating hydrogen-donor substrates.

## 19.5 Practice problems

1. Why is argon the most abundant noble gas in air, yet xenon has by far the richest chemistry? *(Abundance and chemical reactivity are unrelated — Xe's much lower ionisation energy, from being the largest easily-obtained noble gas, is what makes it uniquely reactive, regardless of scarcity.)*
2. What made Bartlett predict that Xe could be oxidised by PtF₆? *(Xe's first ionisation energy, 1170 kJ/mol, is close to O₂'s, 1175 kJ/mol — PtF₆ had just been shown to oxidise O₂.)*
3. Are clathrate compounds true chemical compounds? Justify. *(No — no covalent/ionic bond forms; the noble gas is physically trapped in a host lattice cage and the arrangement decomposes on melting or dissolving the host.)*
4. Derive the hybridisation and shape of XeF₄ from steric number. *(Xe: 8 valence e⁻, 4 Xe–F bonds use 4, 4 remain = 2 lone pairs; steric number 6 ⇒ sp³d², square planar with 2 axial lone pairs.)*
5. Why is XeF₄'s hydrolysis called a disproportionation while XeF₂'s and XeF₆'s are not? *(See the worked example in §19.3 — Xe splits from +4 into both 0 and +6, unlike the single-product substitutions for XeF₂ and XeF₆.)*
6. What is the more physically accurate bonding description of XeF₂ than "sp³d," and why is the traditional label kept anyway? *(A linear 3-centre-4-electron bond across F–Xe–F, since Xe's 5d orbitals are too high in energy to truly participate; sp³d survives as a convenient VSEPR bookkeeping device.)*
7. Why do He and Ne not form stable clathrates while Ar, Kr and Xe do? *(He and Ne are too small to be held by the weak van der Waals trapping in the host cage.)*
8. State the exact Xe:F₂ ratio and conditions for preparing XeF₆. *(1:20, 573 K, 60–70 bar — or via XeF₄ + O₂F₂ → XeF₆ + O₂ at 143 K.)*
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
