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

**Ionisation enthalpy.** IE₁ generally increases across a period and decreases down a group, but Group 13 shows a dip relative to Group 2 (**IE₁(B) < IE₁(Be)**, because the 2p electron removed from boron is less penetrating and more shielded than the 2s electron removed from beryllium's filled 2s² subshell) and Group 16 shows a dip relative to Group 15 (IE₁(O) < IE₁(N) because N has an extra-stable half-filled 2p³ configuration). These "saw-tooth" dips recur once more at Al<Mg and S<P for the same paired/half-filled reasons.

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

# 2. Group 13: the boron family — trends, oxidation states and elemental chemistry

Members are B, Al, Ga, In and Tl (nihonium, Nh, completes the group but has no established chemistry). Valence configuration is **ns²np¹**. Boron is a hard, high-melting, covalent non-metal/metalloid; aluminium onward the elements are metals, though Al₂O₃ and Al(OH)₃ remain amphoteric. Every element has three valence electrons, so the group state is +3; the +1 state becomes progressively more important down the group and dominates for thallium.

## 2.1 Occurrence, minerals and the isolation of boron

Boron is a genuinely rare element (≈ 9 ppm in the crust) and never occurs free; it is found as oxo-compounds, chiefly borates. Aluminium is the **most abundant metal and the third most abundant element** in the crust (8.3 % by mass, after O 45.5 % and Si 27.7 %). Gallium, indium and thallium are scarce — gallium occurs in bauxite (≈ 1 part in 5000) and in germanite, while In and Tl accompany ZnS and PbS. Boron has two isotopes, ¹⁰B (19 %) and ¹¹B (81 %).

| Mineral | Formula |
|---|---|
| Borax (tincal, suhaga) | Na₂B₄O₇·10H₂O ≡ Na₂[B₄O₅(OH)₄]·8H₂O |
| Kernite (rasorite) | Na₂B₄O₇·4H₂O |
| Colemanite | Ca₂B₆O₁₁·5H₂O |
| Sassolite (boric acid) | H₃BO₃ |
| Boracite | 2Mg₃B₈O₁₅·MgCl₂ |
| Boronatrocalcite | CaB₄O₇·NaBO₂·8H₂O |
| Bauxite / cryolite (Al) | Al₂O₃·2H₂O / Na₃AlF₆ |

**Isolation of boron is always a two-step job: make B₂O₃, then reduce it.**

*Step 1 — obtain B₂O₃.* From borax via boric acid:

\[\mathrm{Na_2B_4O_7+2HCl\rightarrow 2NaCl+H_2B_4O_7};\quad \mathrm{H_2B_4O_7+5H_2O\rightarrow 4H_3BO_3};\quad \mathrm{2H_3BO_3\xrightarrow{\Delta}B_2O_3+3H_2O}\]

From colemanite, either by fusion with sodium carbonate or by the SO₂ route:

\[\mathrm{Ca_2B_6O_{11}+2Na_2CO_3\rightarrow 2CaCO_3\downarrow+Na_2B_4O_7+2NaBO_2}\]
\[\mathrm{Ca_2B_6O_{11}+11H_2O+4SO_2\rightarrow 2Ca(HSO_3)_2+6H_3BO_3}\]

*Step 2 — reduce B₂O₃* with an electropositive metal, giving **amorphous boron**:

\[\mathrm{B_2O_3+3Mg\rightarrow 2B+3MgO}\qquad(\text{Na, K and Al work equally well})\]

Amorphous boron of ≈ 95–98 % purity obtained this way is called **Moissan boron**. An electrolytic route electrolyses fused B₂O₃ + MgO + MgF₂ at ≈ 1373 K, the magnesium discharged at the cathode reducing B₂O₃ *in situ*.

**Crystalline boron** (much purer, and much less reactive) requires gas-phase routes:

\[\mathrm{2BCl_3+3H_2\xrightarrow{\text{red-hot W or Ta}}2B+6HCl}\]
\[\mathrm{2BI_3\xrightarrow{\text{red-hot W or Ta}}2B+3I_2}\qquad(\text{van Arkel method})\]
\[\mathrm{B_2H_6\xrightarrow{\Delta}2B+3H_2}\]

## 2.2 Atomic and physical trends — and where they break

| Property | B | Al | Ga | In | Tl |
|---|---|---|---|---|---|
| Atomic (metallic) radius / pm | 88 | 143 | 135 | 167 | 170 |
| Ionic radius M³⁺ / pm | (27) | 53.5 | 62.0 | 80.0 | 88.5 |
| Ionic radius M⁺ / pm | — | — | 120 | 140 | 150 |
| IE₁ / kJ mol⁻¹ | 801 | 577 | 579 | 558 | 589 |
| IE₂ / kJ mol⁻¹ | 2427 | 1816 | 1979 | 1820 | 1971 |
| IE₃ / kJ mol⁻¹ | 3659 | 2744 | 2962 | 2704 | 2877 |
| ΣIE₁₊₂₊₃ / kJ mol⁻¹ | 6887 | 5137 | 5520 | 5083 | 5437 |
| Electronegativity (Pauling) | 2.0 | 1.5 | 1.6 | 1.7 | 1.8 |
| Density / g cm⁻³ (298 K) | 2.35 | 2.70 | 5.90 | 7.31 | 11.85 |
| Melting point / K | 2453 | 933 | 303 | 430 | 576 |
| Boiling point / K | 3923 | 2740 | 2676 | 2353 | 1730 |
| E°(M³⁺/M) / V | (−0.87) | −1.66 | −0.56 | −0.34 | +1.26 |
| E°(M⁺/M) / V | — | +0.55 | −0.79 | −0.18 | −0.34 |

The five trends worth being able to *derive*, not memorise:

1. **Atomic radius: B < Ga < Al < In < Tl.** Ga is *smaller* than Al. Gallium follows the first transition series, so it carries ten 3d electrons whose shielding is poor (shielding falls in the order s > p > d > f). The extra nuclear charge is therefore incompletely screened and the valence electrons are pulled in — the **d-block contraction**. The same argument, reinforced by fourteen 4f electrons (**lanthanide contraction**), leaves Tl only 3 pm larger than In. In the M³⁺ ionic series the anomaly disappears: **B < Al < Ga < In < Tl**.
2. **Ionisation enthalpy: B > Tl > Ga > Al > In.** The fall from B to Al is the ordinary size effect; the rises at Ga (d-block contraction) and at Tl (lanthanide contraction) interrupt it. ΣIE₁₊₂₊₃ for boron is enormous (6887 kJ mol⁻¹), which is *why* B³⁺ has no existence under ordinary conditions and boron is invariably covalent.
3. **Electronegativity falls B → Al then rises slightly Al → Tl**, tracking the same size irregularity.
4. **Melting point: B > Al > Tl > In > Ga**, but **boiling point: B > Al > Ga > In > Tl**. Boron's value is huge because it is a covalent network of B₁₂ icosahedra. Gallium's melting point of 303 K (it melts in the hand) is the anomaly: solid gallium is built from discrete Ga₂ units, so relatively little energy destroys the lattice — yet its bp is 2676 K, giving it the widest liquid range of any of these metals and making it a high-temperature thermometric fluid. Gallium also *expands on freezing* (the liquid is denser than the solid), as water does.
5. **Structures.** Boron: polymeric icosahedral B₁₂ units (α-rhombohedral boron is the simplest; β-rhombohedral is built on a B₈₄ = B₁₂ + B₁₂ + B₆₀ unit). Al, In, Tl: close-packed metal lattices. Ga: discrete diatomic Ga₂ units. Density rises monotonically B → Tl with atomic mass.

## 2.3 Oxidation states: the inert-pair effect, quantified

Down the group the ns² pair becomes progressively reluctant to participate in bonding, so **stability of +3 falls and stability of +1 rises**:

\[\mathrm{stability\ of\ M^{3+}:\ Al^{3+}>Ga^{3+}>In^{3+}>Tl^{3+}};\qquad \mathrm{stability\ of\ M^{+}:\ Tl^{+}>In^{+}>Ga^{+}>Al^{+}}\]

Consequences to have ready:

- **Tl³⁺ is a strong oxidising agent** (it "wants" Tl⁺); **Ga⁺ is a strong reducing agent** (it "wants" Ga³⁺). Ga⁺ reduces more readily than In⁺ precisely because Ga⁺ is the *less* stable of the two — **lower stability, greater reducing character**.
- E°(Tl³⁺/Tl) = +1.26 V is positive, so for thallium ΔG° = −nFE° for M → M³⁺ + 3e⁻ is *positive*: Tl³⁺ does not form spontaneously in solution, whereas for Al (E° = −1.66 V) it does.
- Ga⁺ and In⁺ **disproportionate** in water: \(\mathrm{3GaX\rightarrow 2Ga+GaX_3}\), \(\mathrm{3InX\rightarrow 2In+InX_3}\).
- Compounds in the +1 state are *more ionic* than those in the +3 state (lower charge, larger cation, less polarising).
- A quantitative handle: the ns → np promotion gap ΔE = E(np) − E(ns) in eV is B 4.5, Al 4.5, **Ga 6.0**, In 5.3, **Tl 7.0** (continuing to Pb 9.0, Bi 10.0, Po 12.0, At 16.0). The jumps at Ga and Tl are the energetic signature of the effect.

> **Read the effect honestly.** "Inert pair" is a label, not a mechanism. The real reason the higher state is abandoned is that the M–X bond energy falls steadily down the group, so the energy released by forming two extra bonds no longer repays the energy needed to unpair and promote the ns² electrons. Poor d/f shielding and (for the sixth period) relativistic contraction of the 6s orbital reinforce this. Never write "because the inert pair is inert."

## 2.4 Reactivity of the free elements

**Crystalline boron is almost inert at room temperature**; amorphous boron (finely divided, 2–5 % impurity) is far more reactive. Aluminium is thermodynamically very reactive but *kinetically* protected by a 10⁻⁴–10⁻⁶ mm oxide film — which is why anodising (electrolysing dilute H₂SO₄ with Al as anode) can thicken that film to ≈ 10⁻² mm and take up pigment.

**Air / O₂.** \(\mathrm{4M+3O_2\rightarrow 2M_2O_3}\) at high temperature for all of them; Tl also gives some Tl₂O. Al₂O₃ formation is strongly exothermic (ΔH° = −1670 kJ mol⁻¹ for 2Al + 3/2 O₂), which is the **thermite reaction** and the basis of aluminothermy:

\[\mathrm{8Al+3Mn_3O_4\rightarrow 4Al_2O_3+9Mn};\qquad \mathrm{2Al+Cr_2O_3\rightarrow Al_2O_3+2Cr}\]

Oxide and hydroxide character grades cleanly across the group:

| | B | Al, Ga | In, Tl |
|---|---|---|---|
| Oxide | B₂O₃ **acidic** | Al₂O₃, Ga₂O₃ **amphoteric** | In₂O₃, Tl₂O **basic** |
| Hydroxide | B(OH)₃ **acidic** | Al(OH)₃, Ga(OH)₃ **amphoteric** | In(OH)₃, TlOH **basic** |

**Water and steam.** Boron is untouched by cold or hot water; only at red heat does steam attack it (\(\mathrm{2B+3H_2O\rightarrow B_2O_3+3H_2}\)). Aluminium resists cold water because of the film, but once the film is destroyed — by amalgamating with mercury — it decomposes even cold water; boiling water and steam attack it directly (\(\mathrm{2Al+6H_2O\rightarrow 2Al(OH)_3+3H_2}\)). **Ga and In are attacked by water only when O₂ is present**, and Tl corrodes in moist air:

\[\mathrm{4Tl+O_2+2H_2O\rightarrow 4TlOH}\]

**Acids.** Boron does not react with acids or bases at moderate temperature, but strong oxidising acids attack it, oxidising it to boric acid without any hydrogen evolution:

\[\mathrm{B+3HNO_3\ (conc.)\xrightarrow{\Delta}H_3BO_3+3NO_2}\]
\[\mathrm{2B+3H_2SO_4\ (conc.)\xrightarrow{\Delta}2H_3BO_3+3SO_2}\]

All the metals dissolve in dilute mineral acid **liberating H₂** (\(\mathrm{2M+6HCl\rightarrow 2MCl_3+3H_2}\)). Concentrated HNO₃ renders **Al and Ga passive** by thickening the oxide layer.

**Alkali.** Boron is attacked only by *fused* alkali; Al and Ga (not In or Tl) dissolve in aqueous alkali — this is aluminium's amphoteric behaviour as a metal:

\[\mathrm{2B+6NaOH\ (fused)\rightarrow 2Na_3BO_3+3H_2}\]
\[\mathrm{2Al+2NaOH+6H_2O\rightarrow 2Na[Al(OH)_4]+3H_2}\qquad\equiv\ \mathrm{2NaAlO_2\cdot 2H_2O+3H_2}\]

**Halogens.** All form trihalides, \(\mathrm{2M+3X_2\rightarrow 2MX_3}\) — but **MI₃ only for Al, Ga and In**. "TlI₃" is not thallium(III) iodide at all: it is **Tl⁺[I₃]⁻**, thallium(I) triiodide, because I⁻ would reduce Tl³⁺:

\[\mathrm{TlI_3\rightarrow TlI+I_2\quad\text{is not a decomposition of Tl(III); the solid is already }Tl^+[I_3]^-}\]

**Nitrogen, carbon, metals and ammonia.** Only **B and Al** form nitrides (\(\mathrm{2M+N_2\rightarrow 2MN}\)); hot Al is used as a nitrogen absorbent. AlN hydrolyses:

\[\mathrm{AlN+3H_2O\rightarrow Al(OH)_3+NH_3}\]

With carbon, \(\mathrm{4B+C\rightarrow B_4C}\) (norbide) and \(\mathrm{4Al+3C\rightarrow Al_4C_3}\). Only boron forms a boride with magnesium, \(\mathrm{3Mg+2B\rightarrow Mg_3B_2}\). All the metals form **amides** with ammonia, \(\mathrm{M+NH_3\rightarrow MNH_2+\tfrac{1}{2}H_2}\); at very high temperature B and Al instead give nitrides (\(\mathrm{2B+2NH_3\rightarrow 2BN+3H_2}\)). Boron also gives B₂S₃ with sulphur at 1200 °C.

**Hydrogen.** *No* Group 13 element combines directly with H₂; the hydrides must be made indirectly (§4.5). Their names are BH₃ borane, (AlH₃)ₙ alane, (GaH₃)₂ gallane, (InH₃)ₙ indane — only boron gives a family of discrete volatile molecular hydrides, the rest polymerise.

## 2.5 Boron versus aluminium

| | Boron | Aluminium |
|---|---|---|
| Allotropy | shows allotropy (B₁₂ icosahedral forms) | none |
| Hardness | very hard, high mp, network covalent | soft metal, low mp |
| Bonding | **covalent only** (ΣIE too high for B³⁺) | covalent *and* ionic |
| Water/steam | not decomposed | decomposes steam |
| conc. HNO₃ | oxidised to H₃BO₃ | turns **passive** |
| Alkali | fused NaOH → Na₃BO₃ + H₂ | aq. NaOH → NaAlO₂ + H₂ |
| Oxo-anion stability | borates very stable, and polymerise | aluminates unstable — CO₂ reprecipitates Al(OH)₃ |
| Trichloride | BCl₃ fuming **monomeric** liquid | AlCl₃ solid, **dimeric** Al₂Cl₆ |
| Maximum covalency | **4** (no d orbital at n = 2) | **6** |
| Hydride | volatile, spontaneously inflammable B₂H₆ | polymeric solid (AlH₃)ₙ |

## 2.6 The boron–silicon diagonal relationship

Boron resembles **silicon** (Group 14, one period down and one group across) far more than it resembles aluminium, because B³⁺ and Si⁴⁺ have almost the same charge-to-radius ratio (ionic potential ≈ 0.073 and ≈ 0.074 respectively) and similar electronegativity (2.0 vs 1.8).

**Similarities**

- Both are non-metals/metalloids with comparable electronegativity, density and ionisation energy.
- Both oxides are **acidic** network solids: \(\mathrm{B_2O_3+CoO\xrightarrow{\Delta}Co(BO_2)_2}\) parallels \(\mathrm{SiO_2+CaO\xrightarrow{\Delta}CaSiO_3}\).
- Both oxides are reduced by magnesium: \(\mathrm{B_2O_3+3Mg\rightarrow 2B+3MgO}\), \(\mathrm{SiO_2+2Mg\rightarrow Si+2MgO}\).
- Both give hard carbides with carbon: \(\mathrm{2B_2O_3+7C\rightarrow B_4C+6CO}\), \(\mathrm{SiO_2+3C\rightarrow SiC+2CO}\) (carborundum).
- Both give halides through the oxide/carbon/chlorine route: \(\mathrm{B_2O_3+3C+3Cl_2\rightarrow 2BCl_3+3CO}\), \(\mathrm{SiO_2+2C+2Cl_2\rightarrow SiCl_4+2CO}\).
- BX₃ and SiX₄ are both **Lewis acids** and both hydrolyse readily to the oxo-acid: \(\mathrm{BCl_3+3H_2O\rightarrow H_3BO_3+3HCl}\), \(\mathrm{SiCl_4+4H_2O\rightarrow Si(OH)_4+4HCl}\).
- Both are reduced to volatile, inflammable hydrides by complex hydrides: BCl₃ → B₂H₆ and SiCl₄ → SiH₄ with LiAlH₄.
- Both form borides/silicides with magnesium: Mg₃B₂ and Mg₂Si.
- **Both borates and silicates polymerise** by sharing oxygen corners into chains, rings and sheets (iso-poly acids). Aluminium forms nothing analogous — this is the single most striking part of the relationship.

**Dissimilarities**

- Maximum covalency: B = 4, Si = 6. Hence \(\mathrm{BF_3+HF\rightarrow [BF_4]^-+H^+}\) stops at four, while \(\mathrm{SiF_4+2HF\rightarrow [SiF_6]^{2-}+2H^+}\) reaches six.
- Boron combines with N₂ (→ BN); silicon does so only under forcing conditions.
- Boron is attacked by conc. HNO₃/H₂SO₄; silicon is essentially untouched by non-oxidising acids but is attacked by **HF**: \(\mathrm{Si+6HF\rightarrow H_2SiF_6+2H_2}\).

### Trap bank — Group 13 elements

- **Ga is smaller than Al** (d-block contraction) and melts *below* room temperature. Both facts break the naive "everything increases down a group" script.
- IE₁ order is **B > Tl > Ga > Al > In**, not a smooth decrease. Learn the shape of the curve, not five numbers.
- Boron with conc. HNO₃ or H₂SO₄ gives **H₃BO₃ and NO₂/SO₂ — no H₂**. Only the metals liberate hydrogen with acids.
- Al and Ga are made **passive** by conc. HNO₃; do not write a dissolution reaction.
- **Only Al and Ga** (not In, Tl) dissolve in aqueous NaOH. Boron needs *fused* alkali.
- **Only B and Al** form nitrides; all five form amides with NH₃.
- "TlI₃" is **Tl⁺[I₃]⁻**, and "GaCl₂"/"InCl₂" are **Ga⁺[GaCl₄]⁻ / In⁺[InCl₄]⁻** — mixed-valence compounds, not M(II).
- B³⁺ does **not** exist as a free ion. Every boron compound in this chapter is covalent.
- Do not push the B–Si diagonal into identity: covalency 4 vs 6 is the hard limit that separates them.

# 3. Group 13: boron–oxygen chemistry — B₂O₃, borax, boric acid and the borates

Boron is **oxophilic**: the B–O bond is unusually strong, and almost all of boron's natural and industrial chemistry is oxo-chemistry. Everything in this section is one equilibrium family — B₂O₃, H₃BO₃, the metaborates and borax interconvert by hydration, dehydration and acid–base transfer.

## 3.1 Boron sesquioxide, B₂O₃

"Sesqui" means one-and-a-half, i.e. BO₁·₅. It is a glassy network solid, obtained most conveniently by dehydrating boric acid, and it is the anhydride of boric acid:

\[\mathrm{H_3BO_3\xrightarrow{100^{\circ}C}HBO_2\xrightarrow{140-160^{\circ}C}H_2B_4O_7\xrightarrow{\text{red heat}}B_2O_3}\]

It is **hygroscopic** and rehydrates: \(\mathrm{B_2O_3+3H_2O\rightarrow 2H_3BO_3}\).

As a typical non-metal oxide it is **acidic**, reacting with basic (metal) oxides to give borates and metaborates — the chemistry behind the borax-bead test:

\[\mathrm{CoO+B_2O_3\rightarrow Co(BO_2)_2};\qquad \mathrm{CuO+B_2O_3\rightarrow Cu(BO_2)_2}\]

**But B₂O₃ can be forced to act as a base** by a *strongly* acidic oxide — an amphoteric-looking behaviour worth remembering as an exception:

\[\mathrm{2B_2O_3+P_4O_{10}\rightarrow 4BPO_4};\qquad \mathrm{B_2O_3+3SO_3\rightarrow B_2(SO_4)_3}\]

## 3.2 Borax: structure, hydrolysis, the bead test and titrimetry

**Formula.** Written Na₂B₄O₇·10H₂O by tradition, but the correct formula is **Na₂[B₄O₅(OH)₄]·8H₂O**. The tetranuclear anion [B₄O₅(OH)₄]²⁻ contains **two trigonal-planar sp² BO₃ borons and two tetrahedral sp³ BO₄ borons**, joined through **five B–O–B linkages**; the negative charges sit on the two four-coordinate borons. Only 8 of the 10 water molecules are water of crystallisation in the accepted structural formula — the other two are already accounted for as the four OH groups.

**Preparation.** Borax occurs as tincal (≈ 50 % borax with sand and clay). Industrially, from colemanite:

\[\mathrm{Ca_2B_6O_{11}+2Na_2CO_3\rightarrow 2CaCO_3\downarrow+Na_2B_4O_7+2NaBO_2}\]

The insoluble CaCO₃ is filtered off; borax crystallises from the concentrated filtrate, and the sodium metaborate left in the mother liquor is recycled by passing CO₂:

\[\mathrm{4NaBO_2+CO_2\rightarrow Na_2B_4O_7+Na_2CO_3}\]

From boric acid: \(\mathrm{4H_3BO_3+Na_2CO_3\rightarrow Na_2B_4O_7+6H_2O+CO_2}\).

**Three crystalline forms.** Prismatic borax Na₂B₄O₇·10H₂O; **octahedral borax** Na₂B₄O₇·5H₂O (jeweller's borax); anhydrous **borax glass** Na₂B₄O₇.

**Action of heat.** Borax first swells as it loses steam, then fuses to a clear glassy bead:

\[\mathrm{Na_2B_4O_7\cdot 10H_2O\xrightarrow{60^{\circ}C}Na_2B_4O_7\cdot 5H_2O\xrightarrow{\Delta}Na_2B_4O_7\xrightarrow{740^{\circ}C}2NaBO_2+B_2O_3}\]

**Why the solution is alkaline.** Borax hydrolyses to a *strong* base and a *very weak* acid:

\[\mathrm{Na_2B_4O_7+7H_2O\rightleftharpoons 2NaOH+4H_3BO_3}\]

Because the solution contains comparable amounts of a weak acid and its salt, **borax solution is also a buffer**.

**Borax as a primary standard.** One mole of borax neutralises exactly **two** moles of acid. The reason is structural, and it is a favourite question. On dissolution the anion splits into equal amounts of neutral boric acid and the borate anion, and **only the anion reacts with acid**:

\[\mathrm{[B_4O_5(OH)_4]^{2-}+5H_2O\rightleftharpoons 2B(OH)_3+2[B(OH)_4]^-}\]
\[\mathrm{2[B(OH)_4]^-+2H_3O^+\rightarrow 2B(OH)_3+4H_2O}\]

Overall: \(\mathrm{Na_2[B_4O_5(OH)_4]\cdot 8H_2O+2HCl\rightarrow 2NaCl+4H_3BO_3+5H_2O}\); on cooling, white flakes of boric acid separate. **Use methyl orange (pH 3.1–4.4), never phenolphthalein**, because the H₃BO₃ produced is itself a weak acid and would keep phenolphthalein from turning.

**The borax-bead test.** The molten bead is essentially NaBO₂ + B₂O₃; the boric anhydride dissolves transition-metal oxides as coloured metaborates:

\[\mathrm{Na_2B_4O_7\xrightarrow{\Delta}2NaBO_2+B_2O_3};\qquad \mathrm{CuO+B_2O_3\rightarrow Cu(BO_2)_2\ (blue)}\]

| Cation | Bead colour |
|---|---|
| Cu(II) | blue (green while hot) |
| Co(II) | deep blue |
| Cr(III) | green |
| Fe(III) | brownish-yellow to green |
| Ni(II) | brown |
| Mn(II) | violet in the oxidising flame; pale/colourless in the reducing flame |
| Ag(I) | **no colour** — AgBO₂ is white |

The colour depends on the metal, its oxidation state in the melt, its concentration and whether the flame is oxidising or reducing, so the bead test is a **screening indication only**, never a confirmatory test. The classic trap is Ag⁺, which gives no bead colour.

**Other reactions of borax.**

\[\mathrm{Na_2B_4O_7+H_2SO_4+5H_2O\rightarrow Na_2SO_4+4H_3BO_3}\]
\[\mathrm{Na_2B_4O_7+2HCl+5H_2O\rightarrow 2NaCl+4H_3BO_3}\]
\[\mathrm{Na_2B_4O_7+2NH_4Cl\xrightarrow{\text{red heat}}2BN+B_2O_3+2NaCl+H_2O}\]

With hydrofluoric acid, borax is converted through to boron trifluoride:

\[\mathrm{Na_2[B_4O_5(OH)_4]+12HF\xrightarrow{-H_2O}[Na_2O(BF_3)_4]\xrightarrow{H_2SO_4}4BF_3+2NaHSO_4+H_2O}\]

**Uses.** Bead test; flux in welding, soldering and gold purification (it dissolves the interfering oxide film); heat-resistant borosilicate glass, glass wool and fibreglass; glazes and enamels on earthenware; medicinal soaps; buffer with boric acid.

## 3.3 Orthoboric acid, H₃BO₃ — the Lewis-acid mechanism in full

**Preparation.** Acidify borax (above), or hydrolyse essentially any boron compound — halide, hydride or nitride.

**Physical character.** White, soft, needle-shaped crystals with a **soapy/greasy touch**; steam-volatile; **sparingly soluble in cold water but freely soluble in hot water**. In the solid it is *not* a molecular crystal of isolated molecules: planar B(OH)₃ units are **hydrogen-bonded into two-dimensional sheets of almost hexagonal symmetry**, with layers ≈ 3.18 Å apart. Those weakly held layers slide, which is exactly why the crystal flakes to a fine powder and feels soapy.

**It is a weak monobasic *Lewis* acid, not a tribasic Brønsted acid.** Boron is sp², electron-deficient, with an empty 2pz orbital. It never releases one of its own protons; it **accepts OH⁻ from water**, leaving the donating water molecule as H₃O⁺:

\[\mathrm{B(OH)_3+2H_2O\rightleftharpoons [B(OH)_4]^-+H_3O^+}\qquad pK_a\approx 9.25\ (K_a\approx 5.8\times10^{-10})\]

The geometry changes along that equilibrium — **planar B(OH)₃ becomes tetrahedral [B(OH)₄]⁻**. Never apply one geometry to the other species.

At higher concentration, polymeric **metaborate** species take over, and they are appreciably stronger acids:

\[\mathrm{3B(OH)_3\rightleftharpoons H_3O^+ +[B_3O_3(OH)_4]^- +H_2O}\qquad pK\approx 6.84\]

**Titration and the cis-diol effect.** Because H₃BO₃ is so weak, direct titration against NaOH gives no sharp end point. Adding a **cis-1,2-diol** — glycerol, mannitol, catechol, ethylene glycol or an ordinary sugar — makes it behave as a *strong* monobasic acid, titratable with phenolphthalein. The diol chelates the tetrahedral borate through a stable five-membered ring, removing [B(OH)₄]⁻ from solution and dragging the equilibrium fully to the right (**Le Chatelier**):

\[\mathrm{B(OH)_3+H_2O\rightleftharpoons [B(OH)_4]^-+H^+};\qquad \mathrm{[B(OH)_4]^-+2\,(cis\text{-}diol)\rightarrow [B(diol)_2]^-+4H_2O}\]

**Boron's intrinsic Lewis acidity does not change** — only the position of the equilibrium does. The added compound *must* be a cis (vicinal) diol: ethanol and other simple monohydric alcohols do not work; catechol, salicylic acid and mannitol do. Resorcinol and quinol (meta- and para-dihydroxybenzenes) cannot chelate because their OH groups are not adjacent.

**Action of heat** (a standard three-step sequence, with structures):

\[\mathrm{H_3BO_3\xrightarrow{100^{\circ}C}HBO_2\ (metaboric)\xrightarrow{140-160^{\circ}C}H_2B_4O_7\ (tetraboric)\xrightarrow{\text{red hot}}B_2O_3}\]

Metaboric acid is HO–B=O; four such units condense: \(\mathrm{4HBO_2\rightarrow H_2B_4O_7+H_2O}\). Tetraboric acid is a HO–B–O–B–O–B–O–B–OH chain closed by two extra bridging oxygens.

**With HF — fluoroboric acid.** Boric acid dissolves in aqueous HF to give **HBF₄**, a *strong* acid (commercial solutions are 40 %), containing the tetrahedral [BF₄]⁻ ion:

\[\mathrm{B(OH)_3+4HF\rightleftharpoons H_3O^+ +[BF_4]^- +2H_2O}\]

**Detecting the borate radical.** Warm the sample with concentrated H₂SO₄ and ethanol (or methanol); the volatile ester burns with a **green-edged flame**:

\[\mathrm{H_3BO_3+3C_2H_5OH\rightarrow B(OC_2H_5)_3\ (volatile)+3H_2O}\]

The same green flame is given by BF₃ generated with CaF₂ + conc. H₂SO₄.

**Other reactions worth carrying.**

- With Na₂O₂ (or H₂O₂ and alkali) → **sodium peroxoborate** (below).
- With acid chlorides/anhydrides → acylborates, R–O–CO–CH₃ type esters of boron.
- With metal oxides on heating → metaborates, M(BO₂)₂ + H₂O.
- With NH₄HF₂ → NH₄BF₄, which on strong heating gives NH₄F + BF₃.
- **Borosalicylic acid** (the bis-salicylato borate anion) is the classic **optically active boron compound** — a four-coordinate, tetrahedral, chelated boron centre with two bidentate ligands is chiral, exactly as a tetrahedral carbon with four different groups is.

**Uses.** Mild antiseptic and eyewash; borosilicate and optical glass; enamels and pottery glazes; flux in soldering; buffer with borax.

## 3.4 The borate family and sodium peroxoborate

In *simple* borates each boron is bonded to three oxygens at the corners of an equilateral triangle (sp²) — exactly what the bonding orbitals predict. In *complex* borates, planar BO₃ and tetrahedral BO₄ units share corner oxygens to build rings, chains and sheets, so both three- and four-coordinate boron can be present in one anion.

| Class | Anion | Example |
|---|---|---|
| Orthoborate | BO₃³⁻ (discrete triangle) | Mg₃(BO₃)₂, Ca₃(BO₃)₂, LnBO₃ |
| Metaborate | BO₂⁻, cyclic [B₃O₆]³⁻ | NaBO₂ ≡ Na₃[B₃O₆], KBO₂ ≡ K₃[B₃O₆] |
| Pyroborate | B₂O₅⁴⁻ (two triangles, one shared O) | Mg₂B₂O₅ |
| Chain metaborate | [(BO₂)ₙ]ⁿ⁻ | infinite corner-shared chains |
| Complex borate (3- **and** 4-coordinate B) | [B₄O₅(OH)₄]²⁻, [B₅O₆(OH)₄]⁻ | borax; pentaborate |
| Peroxoborate | [(OH)₂B(O–O)₂B(OH)₂]²⁻ | sodium peroxoborate |

**Sodium peroxoborate** is made either by electrolysing sodium borate solution or by oxidising boric acid / sodium metaborate with H₂O₂:

\[\mathrm{2NaBO_2+2H_2O_2+6H_2O\rightarrow Na_2[(OH)_2B(O\text{-}O)_2B(OH)_2]\cdot 6H_2O}\]

The anion contains **two genuine peroxide O–O bridges** linking two tetrahedral borons. It is the brightener in washing powders and is enzyme-compatible in "biological" detergents; **above ≈ 80 °C the O–O linkages break down to release H₂O₂**, which is what does the bleaching.

### Trap bank — boron–oxygen chemistry

- **B(OH)₃ is monobasic, not tribasic.** Three OH groups ≠ three ionisable protons. It accepts one OH⁻; it donates none of its own.
- 1 mol borax ≡ **2 mol acid**, because only the two [B(OH)₄]⁻ formed on dissolution react. Indicator must be **methyl orange**.
- Borax solution is **alkaline** (weak acid + strong base on hydrolysis) *and* a buffer. Do not call it neutral because it is "a salt".
- The correct borax formula is **Na₂[B₄O₅(OH)₄]·8H₂O** — 2 planar BO₃ + 2 tetrahedral BO₄, five B–O–B links.
- Boric acid's acidity rises with a **cis**-diol only. Ethanol, resorcinol and quinol do nothing; the OH groups must be adjacent.
- Adding a diol raises the *apparent* Kₐ by shifting an equilibrium. It does **not** make boron a stronger Lewis acid.
- Planar B(OH)₃ ↔ tetrahedral [B(OH)₄]⁻: two different species, two different geometries.
- **Ag⁺ gives no borax-bead colour** (AgBO₂ is white). Mn(II) is violet only in the oxidising flame.
- B₂O₃ is acidic, but with P₄O₁₀ or SO₃ it behaves as a **base** (→ BPO₄, B₂(SO₄)₃).
- HBF₄ is a **strong** acid even though H₃BO₃ is very weak — fluoride completes boron's octet and delocalises the charge over four F.
- Boric acid on heating gives HBO₂ then H₂B₄O₇ then B₂O₃ — three products, in that order, at three different temperatures.

# 4. Group 13: halides, boranes, borazine and the aluminium compounds

Three valence electrons used in three covalent bonds leave the central atom with only **six** electrons. Every structural theme in this section is a different way of curing that deficiency: **π back-donation** (BX₃), **halogen-bridged dimerisation** (Al₂Cl₆), **3c–2e hydrogen bridges** (B₂H₆) and **ring delocalisation** (borazine).

## 4.1 The boron trihalides: back-bonding and the reversed Lewis-acidity order

**Preparation.**

\[\mathrm{2B+3X_2\rightarrow 2BX_3}\qquad(\text{direct, all four halogens})\]
\[\mathrm{B_2O_3+3CaF_2+3H_2SO_4\xrightarrow{\Delta}2BF_3+3CaSO_4+3H_2O}\]
\[\mathrm{B_2O_3+3C+3X_2\rightarrow 2BX_3+3CO}\qquad(\text{for }X=\mathrm{Cl,\ Br,\ I})\]

**Physical state.** BF₃ colourless gas (bp −101 °C); BCl₃ and BBr₃ **fuming liquids**; BI₃ a fusible solid. **All four are monomeric** — unlike AlCl₃ — because boron cures its deficiency by π bonding rather than by bridging.

**Structure and back-bonding.** BX₃ is trigonal planar, sp², ∠X–B–X = 120°, with an empty unhybridised 2pz orbital perpendicular to the molecular plane. A filled p orbital on each halogen donates lone-pair density sideways into that orbital — **pπ–pπ back donation**. In modern terms the four pz orbitals (one B, three F) form a **four-centre π molecular orbital** holding one bonding pair, delocalised equally over all three B–F bonds. Hence:

- All three B–F bonds are **identical**, 1.30 Å, appreciably shorter than the sum of covalent radii (0.80 + 0.72 = 1.52 Å).
- Bond energy 646 kJ mol⁻¹ — **higher than any other single bond**.
- Effective **B–F bond order ≈ 1.33** (one π pair over three bonds).

**Lewis acidity order — the reverse of electronegativity:**

\[\mathrm{BF_3<BCl_3<BBr_3<BI_3}\]

Fluorine's 2p orbital matches boron's 2p in size and energy, so back-donation is *most* effective in BF₃ and weakens through Cl, Br, I as the halogen orbital grows and overlap degrades. On adduct formation boron becomes sp³ and **the π stabilisation is lost** — and the loss is greatest for BF₃, so BF₃ is the *poorest* acceptor. The structural proof: B–F lengthens from **1.30 Å in free BF₃ to 1.38 Å in H₃N→BF₃ and 1.39 Å in Me₃N→BF₃**, i.e. the π component vanishes on complexation.

This is a **comparison among the four boron trihalides only** — BF₃ is still a perfectly good Lewis acid, forming BF₃·NH₃, BF₃·OEt₂ (a standard laboratory reagent), [BF₄]⁻ and adducts with O-, N-, P- and S-donors. A sharper diagnostic: **BCl₃ and BBr₃ form complexes with AsH₃ but BF₃ does not.**

**Across the group, the order depends on the base (HSAB).**

\[\mathrm{BX_3>AlX_3>GaX_3>InX_3}\ (\text{hard bases});\qquad \mathrm{BX_3<AlX_3<GaX_3<InX_3}\ (\text{soft bases})\]

**Hydrolysis — and why BF₃ is the exception.** BCl₃, BBr₃ and BI₃ hydrolyse **completely**:

\[\mathrm{BX_3+3H_2O\rightarrow H_3BO_3+3HX}\qquad(X=\mathrm{Cl,\ Br,\ I})\]

BF₃ hydrolyses only **partially**, because the HF liberated attacks the boric acid formed and regenerates the very stable [BF₄]⁻:

\[\mathrm{4BF_3+12H_2O\rightarrow 4H_3BO_3+12HF};\qquad \mathrm{12HF+3H_3BO_3\rightarrow 3H^+ +3[BF_4]^- +9H_2O}\]
\[\mathrm{4BF_3+3H_2O\rightarrow H_3BO_3+3H^+ +3[BF_4]^-}\qquad(\text{net})\]

The mechanistic reason is the same one that fixed the acidity order: extra π character makes B–F strong and short, so BF₃ forms a stable adduct BF₃·OH₂ rather than being cleaved, whereas the weaker B–Cl and B–Br bonds are broken outright by water to give strong B–OH bonds. **In moist air BF₃ fumes strongly but is only partially hydrolysed.**

**Halide redistribution.** Mixing any two boron trihalides at room temperature scrambles the halogens to a statistical mixture of pure and mixed halides, establishing an equilibrium:

\[\mathrm{BF_3+BCl_3\rightleftharpoons BF_2Cl+BFCl_2}\]

In three-halide mixtures even BFClBr has been reported.

## 4.2 Dihalides: B₂X₄, and the "GaX₂" imposters

Boron forms genuine **B₂X₄** dihalides with a B–B bond, made by discharge through BCl₃ over mercury:

\[\mathrm{2BCl_3+2Hg\xrightarrow[\text{low pressure}]{\text{electric discharge}}B_2Cl_4+Hg_2Cl_2}\]

There is **free rotation about the B–B bond**: gaseous and liquid B₂Cl₄ adopts a non-eclipsed (staggered) conformation, while the solid is planar because of crystal-packing forces. The dihalides decompose slowly at room temperature.

Gallium and indium form things written "GaCl₂" and "InCl₂" — **but these are not M(II) compounds**. They are mixed-valence salts containing M(I) and M(III):

\[\mathrm{GaCl_3+Ga\rightarrow 2GaCl_2}\equiv\mathrm{Ga^+[GaCl_4]^-};\qquad \mathrm{In+2HCl\rightarrow InCl_2+H_2}\equiv\mathrm{In^+[InCl_4]^-}\]

Similarly Ga[AlCl₄] ("gallous tetrachloroaluminate") contains gallium in the **+1** state, not +2.

## 4.3 Aluminium halides: ionic AlF₃ versus bridged Al₂Cl₆

**AlF₃ is ionic** with a high melting point; AlCl₃, AlBr₃ and AlI₃ are essentially **covalent** when anhydrous. Coordination number tells the whole story:

| | AlF₃ | AlCl₃ | AlBr₃ | AlI₃ |
|---|---|---|---|---|
| Solid | CN 6 (ionic lattice) | CN 6 (close-packed Cl⁻ with Al³⁺ in octahedral holes) | CN 4 (dimer) | CN 4 (dimer) |
| Melt / fused | — (sublimes) | CN 4 (Al₂Cl₆) | CN 4 | CN 4 |
| Vapour | monomer AlF₃ | Al₂Cl₆ dimer, → planar AlCl₃ monomer on strong heating | Al₂Br₆ | Al₂I₆ |

So AlCl₃ passes through **three** structural regimes: an octahedral CN 6 lattice in the cold solid; **Al₂Cl₆ dimers** (CN 4) once it melts or sublimes near 180 °C, with a large jump in volume; and monomeric, trigonal-planar AlCl₃ only on strong heating (≈ 1073 K). That volume jump on heating is a direct sign of how close this compound sits to the ionic/covalent borderline.

**The Al₂Cl₆ bridge is *not* the diborane bridge.** Two chlorines bridge the two aluminiums, each donating a lone pair so that both Al reach a tetrahedral octet. The molecule is **non-planar**, with bridging Al–Cl 221 pm and terminal Al–Cl 206 pm, ∠Al–Cl–Al ≈ 79°, ∠Cl–Al–Cl(bridge) ≈ 101° and terminal ∠Cl–Al–Cl ≈ 118°. Counting bonds: **four normal 2c–2e terminal bonds plus two electron-*rich* 3c–4e bridges.** Diborane's bridges are electron-*deficient* 3c–2e. This contrast — halogen bridges are 3c–4e, hydrogen bridges are 3c–2e — is one of the highest-yield structural distinctions in the chapter.

Maximum coordination number and which halide satisfies it is also examinable: **B and Al reach their maximum CN only with fluoride** ([BF₄]⁻, [AlF₆]³⁻), while the larger **Ga and In reach CN 6 with both F and Cl** ([GaX₆]³⁻, [InX₆]³⁻, X = F, Cl).

**Preparation of anhydrous AlCl₃.** Both routes must be dry:

\[\mathrm{2Al\ (overheated)+6HCl\ (dry\ vapour)\rightarrow 2AlCl_3+3H_2}\]
\[\mathrm{Al_2O_3+3C+3Cl_2\xrightarrow{\Delta}2AlCl_3+3CO}\]

The hydrate **cannot** be dehydrated by heating — it gives the oxide instead: \(\mathrm{2AlCl_3\cdot 6H_2O\xrightarrow{\Delta}Al_2O_3+6HCl+9H_2O}\).

**Properties and reactions.**

- Anhydrous AlCl₃ is **deliquescent and fumes in moist air**: \(\mathrm{AlCl_3+3H_2O\rightleftharpoons Al(OH)_3+3HCl}\). It sublimes at ≈ 180 °C.
- Being covalent it dissolves in **ether, benzene and alcohol, retaining the dimer** in non-polar solvents. In water the enthalpy of hydration is large enough to break the dimer entirely into [Al(H₂O)₆]³⁺ + 3Cl⁻.
- With ammonia it forms an addition compound: \(\mathrm{Al_2Cl_6+12NH_3\rightarrow 2(AlCl_3\cdot 6NH_3)}\).
- With LiH: \(\mathrm{4LiH+AlCl_3\rightarrow LiAlH_4+3LiCl}\).
- **Friedel–Crafts catalyst** for alkylation and acylation. Note carefully that this is *not* true catalysis: AlCl₃ is consumed, and the formation of [AlCl₄]⁻ is an essential part of the mechanism:

\[\mathrm{C_6H_6+RCl+AlCl_3\rightarrow C_6H_5R+H^+[AlCl_4]^-};\qquad \mathrm{R{-}Cl+AlCl_3\rightarrow R^+ +[AlCl_4]^-}\]
\[\mathrm{C_6H_6+RCOCl+AlCl_3\rightarrow C_6H_5COR+H^+[AlCl_4]^-}\]

Also used for petroleum cracking, hydrocarbon isomerisation and the manufacture of anthraquinone and dodecylbenzene.

**Aqueous aluminium chemistry — the qualitative-analysis core.** Al³⁺ is small and highly charged, so the hexaaqua ion is itself a weak acid:

\[\mathrm{[Al(H_2O)_6]^{3+}+H_2O\rightleftharpoons [Al(H_2O)_5(OH)]^{2+}+H_3O^+}\]

Hence an aqueous AlCl₃ solution **turns blue litmus red**. Two precipitation tests must be kept apart:

\[\mathrm{AlCl_3+3NaOH\rightarrow Al(OH)_3\downarrow+3NaCl};\qquad \mathrm{Al(OH)_3+NaOH\ (excess)\rightarrow Na[Al(OH)_4]}\]
\[\mathrm{AlCl_3+3NH_4OH\rightarrow Al(OH)_3\downarrow\ (white\ gelatinous)+3NH_4Cl}\qquad\textbf{insoluble in excess NH}_4\textbf{OH}\]

- **Dissolving in excess NaOH distinguishes Al³⁺ from Mg²⁺, Ca²⁺, Sr²⁺ and Ba²⁺**, whose hydroxides do not redissolve.
- **Not dissolving in excess NH₄OH distinguishes Al³⁺ from Zn²⁺**, whose hydroxide does dissolve in excess ammonia.
- Aqueous ammonia is preferred as the precipitant for Al(OH)₃ precisely because NaOH would redissolve it.

A related bonding point: **hydrated Al³⁺ compounds are ionic, anhydrous ones covalent**, because the hydration energy of Al³⁺ exceeds its (very large) ΣIE₁₊₂₊₃ and so pays for ionisation only when water is present.

## 4.4 Aluminium oxide, hydroxide and the alums

**Al₂O₃ (alumina)** occurs as bauxite and corundum, and is obtained pure by igniting the hydroxide, sulphate or ammonium alum:

\[\mathrm{2Al(OH)_3\xrightarrow{\Delta}Al_2O_3+3H_2O};\qquad \mathrm{Al_2(SO_4)_3\xrightarrow{\Delta}Al_2O_3+3SO_3}\]
\[\mathrm{(NH_4)_2SO_4\cdot Al_2(SO_4)_3\cdot 24H_2O\xrightarrow{\Delta}Al_2O_3+2NH_3+4SO_3+25H_2O}\]

**Two forms, two completely different uses:**

| | α-Al₂O₃ | γ-Al₂O₃ |
|---|---|---|
| Made by | Al(OH)₃ at ≈ 1000 °C | Al(OH)₃ at ≈ 450–720 K |
| Structure | hexagonal — **corundum** | non-hexagonal, defect spinel |
| Hardness | very hard (Mohs 9) | soft |
| Surface area | low | **high, porous** |
| Uses | abrasive (grinding wheels, sandpaper), refractory furnace linings, jewellers' rouge | **dehydrating agent, adsorbent, chromatography, catalyst support** |

γ-Al₂O₃ converts irreversibly to α-Al₂O₃ at ≈ 1000 °C. Traces of transition-metal oxides give the gemstones: **ruby** (Cr³⁺), **blue sapphire** (Fe²⁺/Fe³⁺ + Ti⁴⁺), white sapphire (pure corundum), oriental topaz (Fe³⁺), oriental emerald (Cr³⁺/V³⁺).

**Al(OH)₃ is amphoteric**, but its acidic side is very weak — and the proof is that **CO₂ reprecipitates it from aluminate solution**:

\[\mathrm{Al_2O_3+6HCl\rightarrow 2AlCl_3+3H_2O};\qquad \mathrm{Al_2O_3+2NaOH+3H_2O\rightarrow 2Na[Al(OH)_4]}\]
\[\mathrm{Na[Al(OH)_4]\xrightarrow{CO_2}Al(OH)_3\downarrow}\]

**Alums.** General formula **M₂SO₄·M′₂(SO₄)₃·24H₂O**, equivalently **MM′(SO₄)₂·12H₂O**.

- M = a **univalent** cation: Na⁺, K⁺, Rb⁺, Cs⁺, NH₄⁺, Ag⁺, Tl⁺ — **never Li⁺**, which is too small to meet the structural requirement of the lattice.
- M′ = a **trivalent** cation: Al³⁺, Cr³⁺, Fe³⁺, Mn³⁺, Co³⁺, Ti³⁺, V³⁺, Ga³⁺, In³⁺.
- The crystals are large, isomorphous **octahedra** of extreme purity, and contain **[M(H₂O)₆]⁺, [M′(H₂O)₆]³⁺ and SO₄²⁻ in 1 : 1 : 2**. Alums are **double salts**: they dissociate completely into their constituent ions in water (contrast a complex salt, which retains its complex ion). They also **swell** on heating and lose water of crystallisation.

| Alum | Formula |
|---|---|
| Potash alum | K₂SO₄·Al₂(SO₄)₃·24H₂O ≡ KAl(SO₄)₂·12H₂O |
| Ammonium alum | (NH₄)₂SO₄·Al₂(SO₄)₃·24H₂O |
| Chrome alum | K₂SO₄·Cr₂(SO₄)₃·24H₂O |
| Ferric alum | (NH₄)₂SO₄·Fe₂(SO₄)₃·24H₂O |
| **Pseudo-alum** (divalent M) | FeSO₄·Al₂(SO₄)₃·24H₂O, MnSO₄·Al₂(SO₄)₃·24H₂O |

Preparation: \(\mathrm{Al_2O_3+3H_2SO_4\rightarrow Al_2(SO_4)_3+3H_2O}\), then crystallise Al₂(SO₄)₃ with K₂SO₄ in 1 : 1 molar ratio.

Uses: **mordant** in dyeing (hydrolysis deposits Al(OH)₃ in the fibre, which then adsorbs the dye — and Fe³⁺ must be absent for true bright colours); **coagulant/flocculant** in water purification and sewage treatment; styptic to stop bleeding; tanning of leather; mild antiseptic.

## 4.5 Boranes: structure, the STYX code, cleavage and hydroboration

None of the Group 13 elements reacts directly with H₂. Almost 20 boranes are known and 11 are well characterised. They fall into structural families:

| Family | Formula | Meaning |
|---|---|---|
| **closo** (Greek *closo*, cage) | [BₙHₙ]²⁻, n = 6–12 | closed deltahedral cage |
| **nido** (Latin *nidus*, nest) | BₙHₙ₊₄ | B₂H₆, B₅H₉, B₆H₁₀, B₁₀H₁₄ |
| **arachno** (Greek, spider's web) | BₙHₙ₊₆ | B₄H₁₀, B₅H₁₁, B₆H₁₂, B₉H₁₅ |
| **hypho** | more open still | |
| **conjuncto** (Latin, joined) | cages fused together | |

**Preparation of diborane.** Stock's original route, then the modern ones:

\[\mathrm{3Mg+2B\rightarrow Mg_3B_2};\qquad \mathrm{Mg_3B_2+H_3PO_4\rightarrow \text{borane mixture (mainly }B_4H_{10})\xrightarrow{\Delta}B_2H_6}\]
\[\mathrm{2BF_3+6NaH\xrightarrow{450\ K}B_2H_6+6NaF}\qquad(\text{industrial})\]
\[\mathrm{2NaBH_4+I_2\xrightarrow{diglyme}B_2H_6+H_2+2NaI}\qquad(\text{laboratory})\]
\[\mathrm{4[Et_2O\cdot BF_3]+3LiAlH_4\xrightarrow{ether}2B_2H_6+3Li[AlF_4]+4Et_2O}\]
\[\mathrm{B_2O_3+2Al+3H_2\xrightarrow[150^{\circ}C]{750\ atm}B_2H_6+Al_2O_3};\qquad \mathrm{2BCl_3+6H_2\xrightarrow{electric\ discharge}B_2H_6+6HCl}\]

The BF₃ + NaBH₄ route in diglyme is the one used when diborane is wanted *in situ* for organic synthesis.

**Structure.** Twelve valence electrons; each boron sp³. **Four terminal B–H bonds** (119 pm, ∠H–B–H = 121.5°) lie with the two borons in **one plane — six atoms coplanar**. **Two bridging hydrogens** sit above and below that plane (bridging B–H = 133–134 pm, ∠H–B–H at the bridge = 97°, B···B = 177 pm). The bridges are **3-centre–2-electron "banana" bonds**: one electron pair spread over B–H–B, so the bond order per B–H contact is only ½. This is why B₂H₆ is called **electron deficient** — seven bonding contacts would need 14 electrons in a normal 2c–2e picture and only 12 are available.

**STYX bookkeeping.** s = number of B–H–B bridges, t = number of B–B–B three-centre bonds, y = number of B–B bonds, x = number of BH₂ groups. For **B₂H₆: s = 2, t = 0, y = 0, x = 2.**

**Reactions of diborane.**

\[\mathrm{B_2H_6+3O_2\rightarrow B_2O_3+3H_2O}\qquad \Delta_cH^{\circ}=-1976\ \mathrm{kJ\ mol^{-1}}\]

It catches fire spontaneously in air (as do most higher boranes) and was a rocket-fuel candidate. It is a colourless, **highly toxic** gas, bp 180 K, instantly hydrolysed by water or alkali:

\[\mathrm{B_2H_6+6H_2O\rightarrow 2H_3BO_3+6H_2};\qquad \mathrm{B_2H_6+6NaOH\rightarrow 2Na_3BO_3+6H_2}\]
\[\mathrm{B_2H_6+6MeOH\rightarrow 2B(OMe)_3+6H_2}\]
\[\mathrm{B_2H_6+HCl\ (dry)\xrightarrow{anh.\ AlCl_3}B_2H_5Cl+H_2};\qquad \mathrm{B_2H_6+Cl_2\rightarrow BCl_3+HCl}\]
\[\mathrm{B_2H_6+2LiH\rightarrow 2Li[BH_4]}\]

**Cleavage by Lewis bases — symmetric or unsymmetric, and the rule that decides.**

- **Symmetric cleavage** (→ two BH₃·L) with **large / soft** bases: NMe₃, CO, PF₃, PMe₃, SEt₂, THF.

\[\mathrm{B_2H_6+2NMe_3\rightarrow 2BH_3\cdot NMe_3};\qquad \mathrm{B_2H_6+2CO\xrightarrow[20\ bar]{470\ K}2H_3B\cdot CO}\]

- **Unsymmetric cleavage** (→ an ionic pair) with **small, strongly basic** amines: NH₃, MeNH₂, Me₂NH.

\[\mathrm{B_2H_6+2NH_3\xrightarrow[\text{excess }NH_3]{\text{low }T}[BH_2(NH_3)_2]^+[BH_4]^-}\]

**The BH₃·CO adduct is worth dissecting.** Boron is sp³ with one **vacant** sp³ hybrid — the electron acceptor. CO's HOMO is outward-pointing and largely carbon in character, effectively a lone pair on C — the electron donor. Accepting that pair completes boron's octet. A second, much weaker interaction runs the other way: a B–H σ orbital overlaps one lobe of CO's π\* LUMO (hyperconjugation). **The dominant effect is donation from CO to BH₃**; the back-component is minor and not well quantified.

**Tetrahydridoborates (borohydrides).** [BH₄]⁻ is tetrahedral; Na[BH₄] has the NaCl structure and is ionic, usually made from trimethylborate:

\[\mathrm{4B(OMe)_3+4NaH\xrightarrow[THF]{250^{\circ}C,\ high\ P}Na[BH_4]+3Na[B(OMe)_4]}\]
\[\mathrm{BX_3+LiH\rightarrow BH_3+LiX\xrightarrow{LiH}Li[BH_4]}\]

Stability rises with cation size — **LiBH₄ < NaBH₄ < KBH₄** — because the large [BH₄]⁻ anion is better stabilised by a large cation. Li[BH₄] reacts violently with water; Na[BH₄] can be recrystallised from cold water; K[BH₄] is quite stable. \(\mathrm{Li[BH_4]+2H_2O\rightarrow LiBO_2+4H_2}\). NaBH₄ is a **nucleophilic** reducing agent that attacks sites of low electron density, reducing aldehydes to primary and ketones to secondary alcohols while leaving C=C, COOH and NO₂ untouched.

**Covalent borohydrides.** Be(BH₄)₂ and Al(BH₄)₃ are volatile and covalent: [BH₄]⁻ acts as a **bidentate ligand through two 3c–2e H bridges**, so in Al(BH₄)₃ the coordination number of Al is **6**. \(\mathrm{BeCl_2+2LiBH_4\rightarrow Be(BH_4)_2+2LiCl}\). (AlH₃)ₙ is a white involatile polymer held together by 3-centre hydrogen bridges like diborane's; (GaH₃)₂ is dimeric in the vapour and decomposes above 253 K; (InH₃)ₙ is polymeric in both vapour and solid. Li[AlH₄] is made from LiH + AlCl₃ with excess LiH and, unlike Na[BH₄], cannot be used in water.

**Hydroboration.** Diborane (or BF₃ + NaBH₄, generated *in situ*) adds across alkenes and alkynes in dry ether under N₂:

\[\mathrm{\tfrac{1}{2}B_2H_6+3RCH{=}CH_2\rightarrow B(CH_2CH_2R)_3}\]

The addition is **syn (cis) and anti-Markovnikov — boron goes to the less substituted carbon.** The trialkylborane is not isolated but cleaved in one of four ways:

| Reagent | Product | Name |
|---|---|---|
| CH₃COOH | alkane, RH + B(CH₃COO)₃ | hydroboration–reduction (**HBR**) |
| H₂O₂ / OH⁻ | **primary** alcohol + H₃BO₃ | hydroboration–oxidation (**HBO**) |
| H₂CrO₄ | ketone (or carboxylic acid) | oxidative cleavage |
| AgNO₃ | coupled alkane (R–R) | hydroboration–dimerisation (**HBD**) |

Net effect: **cis-hydration** (anti-Markovnikov) or cis-hydrogenation. H. C. Brown received the 1979 Nobel Prize in Chemistry for this chemistry.

## 4.6 Borazine and boron nitride

**Borazine, B₃N₃H₆** — also called borazole, triborine triamine or **"inorganic benzene"**. Colourless liquid, bp ≈ 53 °C, faint ammonia-like odour, slightly soluble in water and freely soluble in benzene, toluene and hexane.

\[\mathrm{3B_2H_6+6NH_3\xrightarrow{450\ K}2B_3N_3H_6+12H_2}\]
\[\mathrm{3NH_4Cl+3BCl_3\xrightarrow{140-150^{\circ}C}B_3N_3H_3Cl_3\ (B\text{-trichloroborazine})\xrightarrow{NaBH_4}B_3N_3H_6}\]
\[\mathrm{B_3N_3H_6\xrightarrow{>200^{\circ}C}(BN)_x}\]

**Isoelectronic with benzene** (six π electrons): a planar six-membered ring of alternating B and N, each carrying one exocyclic H, with uniform B–N bonds ≈ 144 pm. But the analogy stops at the skeleton:

- **Aromaticity is only ≈ 36 % of benzene's.** Nitrogen is much more electronegative than boron, so the π density is *not* evenly delocalised — it piles up on nitrogen. The ring is strongly polarised **Nδ⁻/Bδ⁺**, and the σ and π polarities point in *opposite* directions.
- Consequently borazine is **less reactive than benzene toward electrophilic substitution** (its ring positions are not uniformly nucleophilic) but **far more reactive toward addition**, adding HX, H₂O and ROH readily — reactions benzene does not undergo at all.

\[\mathrm{B_3N_3H_6+3HCl\rightarrow B_3N_3H_9Cl_3}\qquad(\text{Cl goes to }B,\ H\text{ to }N\text{ — polarity decides})\]
\[\mathrm{B_3N_3H_6+9H_2O\xrightarrow{\Delta}3H_3BO_3+3NH_3+3H_2}\]

On strong heating under vacuum it polymerises to biborazinyl and naphthazine, the structural analogues of biphenyl and naphthalene.

> **The counting trap.** Benzene has **3** dihalo derivatives (ortho, meta, para). Borazine has **4**: both X on boron (1 isomer), both on nitrogen (1), and one on each — which can be adjacent or *para*-related (2). Hence 3 vs 4, difference 1.

**Boron nitride, (BN)ₓ.** Made many ways: \(\mathrm{2B+N_2}\), \(\mathrm{2B+2NH_3\rightarrow 2BN+3H_2}\), B₂H₆ + NH₃ on heating, BCl₃ + NH₃, or borax + NH₄Cl at red heat. It reacts back: \(\mathrm{BN+3H_2O\rightarrow B_2O_3+2NH_3}\) (formally, per two BN), \(\mathrm{BN+4HF\rightarrow NH_4BF_4}\), and with K₂CO₃ gives KCNO + KBO₂.

| | h-BN ("white graphite", "inorganic graphite") | c-BN (borazon) |
|---|---|---|
| Structure | hexagonal sheets of alternating B and N; in-layer B–N 145 pm, interlayer 330 pm | sphalerite/diamond-like cubic |
| Layer stacking | **eclipsed — B lies directly over N** (graphite's layers are staggered) | — |
| Made from | direct synthesis | compressing h-BN at high P and T |
| Electrical | **insulator** | insulator |
| Thermal | **outstanding conductor**, rivalling graphene | high |
| Mechanical | soft, layered, lubricating | second only to diamond in hardness |
| Use | high-temperature lubricant, dielectric, crucibles, heat spreaders | abrasive, cutting tools |

The **B–N bond order in (BN)ₓ is 1.33**. The decisive contrast with graphite: both are soft layered solids, but **h-BN does not conduct electricity** — the B/N electronegativity difference localises the π electrons on nitrogen instead of delocalising them over the sheet. h-BN is also chemically inert, hydrophobic, biocompatible and transparent from the UV through the IR.

**Boron carbide, B₄C (norbide).** \(\mathrm{2B_2O_3+7C\rightarrow B_4C+6CO}\); or \(\mathrm{4BCl_3+6H_2+C_{fibre}\xrightarrow{1700-1900^{\circ}C}B_4C+12HCl}\). Extremely hard, used in bullet-proof clothing and armour. Because **¹⁰B is a powerful thermal-neutron absorber**, metal borides and B₄C serve as control rods and shielding in nuclear reactors, and boron fibres reinforce aircraft composites.

Practical hardness ranking among the industrial abrasives: **diamond > cubic BN > B₄C > SiC** (some nanostructured c-BN rivals or exceeds diamond, which is why a few textbooks place BN first — treat "BN is harder than diamond" as a claim about special nanostructured c-BN, not about BN in general).

### Trap bank — halides, hydrides and aluminium compounds

- Lewis acidity **BF₃ < BCl₃ < BBr₃ < BI₃** — the *reverse* of electronegativity. The reason is back-bonding and the π stabilisation lost on adduct formation, never electronegativity.
- **BF₃ hydrolyses only partially** (→ H₃BO₃ + HBF₄); BCl₃/BBr₃/BI₃ hydrolyse completely. In moist air BF₃ fumes but is not fully hydrolysed.
- **Al₂Cl₆ bridges are 3c–4e** (chlorine lone-pair donation); **B₂H₆ bridges are 3c–2e**. Do not swap the descriptions.
- Boron trihalides are **monomeric**; aluminium trihalides (except AlF₃) are **dimeric**. B cures deficiency by π bonding, Al by bridging.
- AlF₃ is ionic; solid AlCl₃ has CN 6, molten/vapour AlCl₃ has CN 4 (Al₂Cl₆), monomer only on strong heating.
- AlCl₃·6H₂O cannot be dehydrated by heat — you get Al₂O₃ + HCl.
- AlCl₃ in Friedel–Crafts is **stoichiometric, not catalytic**; [AlCl₄]⁻ is part of the mechanism.
- Al(OH)₃ dissolves in **excess NaOH** but **not** in excess NH₄OH. That pair of facts separates Al³⁺ from Mg²⁺/Ca²⁺/Ba²⁺ on one side and from Zn²⁺ on the other.
- Alums exclude **Li⁺** (too small); pseudo-alums have a *divalent* M. Alums are **double salts** and dissociate fully in water.
- In B₂H₆, **six atoms are coplanar** (2 B + 4 terminal H); the two bridging H are out of plane. Terminal 119 pm / 121.5°, bridge 133 pm / 97°.
- Cleavage of B₂H₆: **small strong bases (NH₃) → unsymmetric ionic pair**; large/soft bases (NMe₃, CO) → symmetric BH₃·L.
- Hydroboration is **syn and anti-Markovnikov**, and H₂O₂/OH⁻ gives the **primary** alcohol.
- Borazine is *not* benzene: it undergoes **addition** with HX/H₂O/ROH, is polar, and has ≈ 36 % of benzene's aromaticity. Dihalo derivatives: benzene 3, borazine 4.
- **h-BN is an electrical insulator** but an excellent thermal conductor — the one property where "graphite analogue" fails completely.

# 5. Group 14: the carbon family — trends, catenation, allotropes, hydrides and halides

Members are C, Si, Ge, Sn and Pb (with flerovium, Fl, closing the group). Valence configuration **ns²np²**. The group runs the full range of character: **C non-metal → Si, Ge metalloid → Sn, Pb metals**, and it contains the single most abundant crustal element pair after oxygen (Si, 27.7 %).

## 5.1 Occurrence and physical trends

Carbon is only the seventeenth most abundant element (320 ppm) but silicon is second (277 200 ppm). Ge occurs only in traces (in some coal deposits, in silver and zinc ores, and in germanite). The important ores are **cassiterite / tin stone, SnO₂** and **galena, PbS**. Silicon never occurs free — it is locked into silica and silicates: feldspar K₂O·Al₂O₃·6SiO₂, kaolinite Al₂O₃·2SiO₂·2H₂O, asbestos CaO·3MgO·4SiO₂.

| Property | C | Si | Ge | Sn | Pb |
|---|---|---|---|---|---|
| Covalent radius / pm | 77 | 118 | 122 | 140 | 146 |
| Ionic radius M⁴⁺ / pm | — | 40 | 53 | 69 | 78 |
| Ionic radius M²⁺ / pm | — | — | 73 | 118 | 119 |
| IE₁ / kJ mol⁻¹ | 1086 | 786 | 761 | 708 | 715 |
| IE₂ / kJ mol⁻¹ | 2352 | 1577 | 1537 | 1411 | 1450 |
| IE₃ / kJ mol⁻¹ | 4620 | 3228 | 3300 | 2942 | 3081 |
| IE₄ / kJ mol⁻¹ | 6220 | 4354 | 4409 | 3929 | 4082 |
| Electronegativity | 2.5 | 1.8 | 1.8 | 1.8 | 1.9 |
| Density / g cm⁻³ | 3.51 (diamond), 2.22 (graphite) | 2.34 | 5.32 | 7.26 (β) | 11.34 |
| Melting point / K | 4373 | 1693 | 1218 | 505 | 600 |
| Boiling point / K | — | 3550 | 3123 | 2896 | 2024 |
| Resistivity / Ω cm (293 K) | 10¹⁴–10¹⁶ | 50 | 50 | 10⁻⁵ | 2 × 10⁻⁵ |

The trends to be able to justify:

- **Covalent radius: C < Si < Ge < Sn < Pb**, but the jump C → Si is large and the later increases are small, because the heavier members carry filled d (and, for Pb, f) subshells that shield the nuclear charge poorly.
- **IE₁: C > Si > Ge > Pb > Sn.** The sharp fall C → Si is the ordinary size effect; Si → Ge → Sn barely change (poor d shielding); Pb rises slightly above Sn because of poor 4f shielding. Group 14 values are **higher than the corresponding Group 13 values** at every position — smaller size and a higher effective nuclear charge.
- **Melting point: C > Si > Ge > Pb > Sn**; **boiling point: Si > Ge > Sn > Pb.** Both are much higher than for Group 13 because each atom forms **four** covalent bonds in the solid. Carbon's value is extreme (network covalent); Sn and Pb are low because they are metallic and do not use all four valence electrons in bonding, so M–M is weak.
- **Electronegativity** falls C → Si and then stays essentially constant, again because of poor d¹⁰ screening from Ge onward.
- **Resistivity** collapses by twenty orders of magnitude across the group: diamond is an insulator, Si and Ge are semiconductors, Sn and Pb are metallic conductors.
- **Liquid Ge is denser than solid Ge** — a rare property shared with Ga and Bi.

## 5.2 Catenation, pπ–pπ bonding and dπ–pπ bonding

**Catenation** is self-linking into open or closed chains, and it tracks M–M bond energy directly:

| Bond | C–C | Si–Si | Ge–Ge | Sn–Sn | Pb–Pb |
|---|---|---|---|---|---|
| Bond energy / kJ mol⁻¹ | 346 | 222 | 188 | 146 | 98 |

\[\mathrm{catenation:\ C\gg Si>Ge\approx Sn\gg Pb}\]

Carbon chains can be indefinitely long; **silicon manages chains of at most about six atoms; Sn and Pb only one or two.** The deeper reason is comparative: C–C (346) is about the same as C–O (358), so carbon has no thermodynamic incentive to abandon C–C for C–O — whereas **Si–O (452) is far stronger than Si–Si (222)**, so silicon abandons homo-catenation for **hetero-catenation through oxygen**. That single inequality is why the whole silicate and silicone world exists.

| Bond | C–C | C–O | C–H | C–Cl | C–F |
|---|---|---|---|---|---|
| kJ mol⁻¹ | 346 | 358 | 414 | 327 | 485 |
| Bond | Si–Si | Si–O | Si–H | Si–Cl | Si–F |
| kJ mol⁻¹ | 222 | 452 | 318 | 381 | 565 |

**pπ–pπ multiple bonding.** Only carbon forms strong pπ–pπ multiple bonds — with itself (C=C, C≡C) and with comparably sized, more electronegative partners (C=O, C≡N, C=S). Down the group the atoms get larger and less electronegative, so 3p–2p overlap is poor. Two consequences to recite:

- **Elemental Si has only the diamond structure; there is no "graphite form" of silicon**, because Si cannot support the delocalised π sheet.
- **CO₂ is a discrete linear gas; SiO₂ is a 3-D network solid.** Carbon satisfies its valence with two C=O double bonds; silicon must instead form four single Si–O bonds and does so by bridging every oxygen between two silicons. Likewise **CO is known but SiO is not.**

The same argument, applied to Si–O versus P–O, S–O and Cl–O:

\[\pi\text{-bond tendency: }\mathrm{Si{-}O<P{-}O<S{-}O<Cl{-}O};\qquad \text{hetero-catenation tendency: }\mathrm{Si{-}O>P{-}O>S{-}O>Cl{-}O}\]

**Si–O polymerises precisely because its π bond is weak.**

**dπ–pπ bonding** works the other way round: carbon has no d orbitals and cannot do it, while Si (and the heavier members) can accept lone-pair density from N or O into a d orbital. The textbook demonstration:

- **(CH₃)₃N is pyramidal** (nitrogen sp³, lone pair localised) — a good base.
- **(SiH₃)₃N is planar** (nitrogen sp², its 2p lone pair delocalised into empty Si d orbitals) — and therefore a **much weaker base** than (CH₃)₃N.

## 5.3 Oxidation states and the inert-pair effect in Group 14

The common states are **+4 and +2**; carbon uniquely also shows negative states (C⁴⁻ in Be₂C and Al₄C₃, C₂²⁻ in acetylides). Because ΣIE₁₋₄ is very large, the +4 state is essentially always **covalent**, not ionic.

\[\text{stability of }+2:\ \mathrm{Ge^{2+}<Sn^{2+}<Pb^{2+}};\qquad \text{stability of }+4:\ \mathrm{Ge^{4+}>Sn^{4+}>Pb^{4+}}\]

- **C and Si show only +4** in practice.
- **Ge** is stable in +4, with only a few +2 compounds; **Ge²⁺ is a strong reducing agent** (it is much less stable than Ge⁴⁺).
- **Sn** forms both; **Sn²⁺ is a mild reducing agent**.
- **Pb** is stable in +2; **Pb⁴⁺ compounds are strong oxidising agents**.

Standard demonstrations:

\[\mathrm{SnCl_2+2FeCl_3\rightarrow SnCl_4+2FeCl_2};\qquad \mathrm{SnCl_2+2HgCl_2\rightarrow Hg_2Cl_2+SnCl_4}\]
\[\mathrm{PbO_2+4HCl\rightarrow PbCl_2+Cl_2+2H_2O}\qquad(\mathrm{Pb^{4+}\ oxidises\ Cl^-})\]
\[\mathrm{PbO_2+2HNO_3+(COOH)_2\rightarrow Pb(NO_3)_2+2CO_2+2H_2O}\]

The **divalent state becomes increasingly ionic** as we descend, because the ns² pair is retained and the remaining +2 charge is carried by a large cation. This is also why the ionic character of MX₂ exceeds that of MX₄ throughout.

**Maximum covalency.** Carbon lacks d orbitals, so it is capped at **4**; the heavier members reach **5 and 6**: [SiF₅]⁻, **[SiF₆]²⁻**, [GeCl₆]²⁻, [Sn(OH)₆]²⁻, [PbCl₆]²⁻, [Pb(OH)₆]²⁻ (central atom sp³d²). Carbon exceeds four only in special carbide clusters, where the carbon is interstitial rather than bonded in the ordinary sense — e.g. [Fe₄C(CO)₁₃] (CN 6), [Ru₆C(CO)₁₇] (CN 7), [Co₈C(CO)₁₈]²⁻ (CN 8).

A refinement worth carrying: **[SiF₆]²⁻ exists but [SiCl₆]²⁻ does not.** Fluorine is small enough to pack six around silicon without steric strain, and F's lone pairs interact with Si far more effectively than Cl's do.

## 5.4 Allotropes of carbon

Every member except Pb shows allotropy. Carbon exists as **crystalline** forms (diamond, graphite, fullerenes) and **amorphous** micro-crystalline forms (coal, coke, charcoal, lamp black, carbon black) — the amorphous forms are really micro-crystals of graphite or fullerene.

**Thermodynamic stability: graphite > diamond > C₆₀.** Graphite is the reference state, so ΔfH°(graphite) = 0, while ΔfH°(diamond) = **+1.90** and ΔfH°(C₆₀) = **+38.1 kJ mol⁻¹**. Diamond is nonetheless *kinetically* indefinitely stable, because converting the sp³ network to sp² sheets has an enormous activation barrier.

**Diamond.**

- Rigid 3-D network; every carbon **sp³**, tetrahedrally bonded to four others, ∠C–C–C = 109°28′, **C–C = 154 pm**.
- **Hardest naturally occurring substance**; density 3.51 g cm⁻³ — denser and more compact than graphite because of the uniform short bonds.
- **Electrical insulator** (all four valence electrons locked in localised σ bonds; band gap ≈ 6 eV) but an **exceptional thermal conductor** through efficient lattice-phonon transport in the rigid framework.
- Refractive index 2.45, and the unequal refraction of different colours gives the "play of light" that makes it a gemstone. Insoluble in all ordinary solvents; does not melt but vaporises at 3773 K.
- Reacts with most metals at high temperature to form carbides; **burns in O₂ at 800 °C and in F₂ at 700 °C**; unaffected by H₂SO₄.
- Uses: abrasive for sharpening hard tools, dies, drilling equipment, tungsten-filament manufacture, jewellery (1 carat = 200 mg). Ideal tetrahedral crystals are type-I, mosaic type-II. Graphite converts to diamond only at ≈ 1600 °C and ≈ 55 × 10³ atm. Blue diamond owes its colour to traces of aluminium.

**Graphite.**

- **Layered**: each layer a plane of fused hexagons, every carbon **sp²**, three σ bonds to neighbours at **C–C = 141.5 pm** within the layer, with the fourth electron in a delocalised π system spread over the whole sheet.
- Layers held only by **van der Waals forces**, separated by **340 pm** (values of 335 pm are also quoted), so they slide over one another: graphite is **soft, slippery and lustrous**, density 2.22 g cm⁻³.
- **Conducts electricity well within a layer** (mobile π electrons) and poorly between layers. Uses: dry high-temperature lubricant where oil would fail, electrodes for batteries and industrial electrolysis, crucibles (inert to dilute acids and alkalis), pencil "lead", graphite-fibre composites for tennis rackets, fishing rods, aircraft and canoes.
- **Intercalation compounds.** Heating graphite at ≈ 673 K with K, Rb or Cs vapour pushes metal atoms *between* the sheets, giving bronze-coloured C₈M → C₂₄M → C₃₆M → C₄₈M → C₆₀M of variable composition; the interlayer distance increases and the π electrons become more mobile. **Graphite is diamagnetic but its intercalation compounds are paramagnetic.**
- Oxidised by conc. HNO₃ to **mellitic acid**, benzene hexacarboxylic acid C₆(COOH)₆ — a striking confirmation of the fused-hexagon skeleton. Unlike diamond, graphite does react with HNO₃/KClO₄.
- **Its lubricating action depends on adsorbed gas.** In high vacuum, or with the adsorbed layer stripped, graphite is a *poor* lubricant — the interlayer interactions are not weak enough on their own.

**Fullerenes.**

- Made by heating/vaporising graphite in an electric arc or by laser under **He or Ar**; the soot condenses to mainly **C₆₀** with some C₇₀ and traces of even-numbered clusters up to C₃₅₀ and beyond. Above C₄₀ only **even-numbered** clusters are observed. C₆₀ and C₇₀ are separated by toluene extraction and chromatography on alumina — C₆₀ solutions are magenta/purple, C₇₀ orange/red.
- **C₆₀, buckminsterfullenene**, is a closed cage with **20 six-membered and 12 five-membered rings**, 60 vertices each carrying one **sp²** carbon making three σ bonds. **A five-membered ring fuses only with six-membered rings; a six-membered ring fuses with either.** Two distinct bond lengths: **143.5 pm** (the 6:5 bonds) and **138.3 pm** (the shorter 6:6 bonds).
- Fullerenes are the **only pure molecular form of carbon** — no dangling bonds at a surface. Because the cage is **non-planar**, aromatic character is diminished and reactivity is raised relative to a flat sheet.
- Solid C₆₀ is **cubic close packed**, with large interstitial holes that trap solvent. **K₃C₆₀ and related M₃C₆₀ phases superconduct** at low temperature, the transition temperature rising with alkali-metal size. **Endohedral** complexes trap atoms *inside* the cage (La@C₆₀). **C₇₆ is chiral** and has been resolved. C₇₀ is rugby-ball shaped.
- Related nanocarbons: **graphene** (a single isolated graphite layer), **carbon nanotubes** (rolled hexagon cylinders; conductors or semiconductors, ≈ 10× the current capacity of Cu and ≈ 10× stronger than steel fibres per unit mass), **megatubes** and **nano-onions** (concentric shells around a fullerene core, proposed as lubricants).
- Only **diamond and graphite** are inside the JEE Advanced syllabus; fullerene is JEE Main material.

**Amorphous forms.**

- **Charcoal** — wood or other carbonaceous matter strongly heated in the absence of air; very open structure and enormous surface area. **Activated charcoal** (steam-cleaned, pulverised) adsorbs poisonous gases, odours and organic contaminants from water and air-conditioning. Because surface area, not bulk structure, controls reactivity, **charcoal is the most reactive form of carbon** and diamond/graphite the least.
- **Coke** — destructive distillation of coal in the absence of air; a fuel and the standard metallurgical reducing agent.
- **Carbon black / lamp black / soot** — hydrocarbons or petroleum burnt in a **limited supply of air**, 98–99 % carbon: \(\mathrm{CH_4+O_2\rightarrow C+2H_2O}\). Used as black pigment in inks and as filler in automobile tyres.

## 5.5 The anomalous behaviour of carbon, and carbon versus silicon

Carbon's anomalies all trace to five facts: **small size, high ionisation energy, high electronegativity, no vacant d orbital, and maximal catenation.**

| Property | Carbon | Silicon |
|---|---|---|
| Penultimate shell | 2 electrons ([He] core) | 8 electrons ([Ne] core) |
| Appearance | black solid, mp ≈ 4373 K | reddish-brown solid, mp 1693 K |
| Conductance | graphite conducts well | poorer than carbon (semiconductor) |
| Catenation | **maximum of all elements** | high, but capped at ≈ 6 atoms |
| Action of alkali | **no reaction** | \(\mathrm{Si+2NaOH+H_2O\rightarrow Na_2SiO_3+2H_2}\) |
| MO₂ | **CO₂ is a gas** | **SiO₂ is a solid** |
| MO | CO is known and **neutral** | **SiO is not known** |
| Reaction with Cl₂/Br₂ | not direct | \(\mathrm{Si+2Cl_2\xrightarrow{500^{\circ}C}SiCl_4}\) |
| Hydrolysis of halide | **CCl₄ is not hydrolysed** | \(\mathrm{SiCl_4+4H_2O\rightarrow Si(OH)_4+4HCl}\) |
| Oxo-acid stability | H₂CO₃ unstable | H₂SiO₃ stable |
| Complex formation | none — no [CCl₆]²⁻ | many, e.g. [SiF₆]²⁻ |
| Maximum covalency | 4 | 6 |

*Similarities* worth noting: both are non-metals, both are dominantly tetravalent with +4 dominant, both MO₂ are acidic, both form an acid pair — H₂CO₃/H₂SiO₃ and oxalic acid (COOH)₂ / silico-oxalic acid (SiOOH)₂ — though the carbon members are far more stable.

Other Group 14 anomalies of carbon: it is the **most electronegative** member; it has the **highest ionisation energy**; **CO₂ is a gas while every other dioxide is a solid**; **CO is neutral while all the other monoxides (GeO, SnO, PbO) are amphoteric solids**; and carbon does not form divalent *ionic* compounds because the lattice energy of a hypothetical C²⁺ salt could never repay the ionisation and sublimation energies.

## 5.6 Hydrides

All the elements form tetravalent covalent hydrides MH₄, and both the *number* and the *stability* of hydrides fall down the group:

- **Carbon**: an unlimited family — cyclic, acyclic and aromatic (CₙH₂ₙ₊₂, CₙH₂ₙ, CₙH₂ₙ₋₂ …).
- **Silicon**: **silanes** SiₙH₂ₙ₊₂ up to n ≈ 8; in practice only SiH₄ (silane) and Si₂H₆ (disilane) matter, with Si₃H₈ trisilane known.
- **Germanium**: **germanes** GeₙH₂ₙ₊₂ up to n ≈ 5.
- **Tin**: only **stannane** SnH₄ and Sn₂H₆.
- **Lead**: **plumbane** PbH₄, barely characterised.

| Hydride | CH₄ | SiH₄ | GeH₄ | SnH₄ | PbH₄ |
|---|---|---|---|---|---|
| Decomposition temperature / K | 1073 | 723 | 558 | 423 | — |

\[\text{Bond strength}\downarrow,\ \text{thermal stability}\downarrow,\ \textbf{reducing power}\uparrow,\ \textbf{acidic character}\uparrow\ \text{down the group}\]

Two separate explanations are needed, and mixing them up is a common error:

- **CH₄ vs SiH₄ reactivity** is an *electronegativity* argument. C (2.5) > H (2.1) > Si (1.8), so C–H is polarised Cδ⁻–Hδ⁺ while **Si–H is polarised Siδ⁺–Hδ⁻**. Silicon is therefore open to nucleophilic attack, and SiH₄ is a strong reducing agent and is hydrolysed by alkali while CH₄ is not:

\[\mathrm{SiH_4+2NaOH+H_2O\rightarrow Na_2SiO_3+4H_2};\qquad \mathrm{Si_2H_6+4KOH+2H_2O\rightarrow 2K_2SiO_3+7H_2}\]

- **The decline from GeH₄ to PbH₄** is a *size/overlap* argument: as M grows, M–H overlap worsens and the bond weakens.

Silanes are made by protonating a silicide, or by hydride reduction:

\[\mathrm{Mg_2Si+dil.\ H_2SO_4\rightarrow MgSO_4+SiH_4+Si_2H_6+\ldots};\qquad \mathrm{SiCl_4+LiAlH_4\rightarrow SiH_4+LiCl+AlCl_3}\]

SiH₄ is a colourless, tetrahedral, **spontaneously flammable** gas; its pyrolysis in the absence of H₂ gives silicon and hydrogen and is a route to semiconductor-grade silicon. A SiH₄ + H₂ mixture bubbled through water burns as the bubbles reach the air with a luminous flame, leaving rings of silica: \(\mathrm{SiH_4+2O_2\rightarrow SiO_2+2H_2O}\).

## 5.7 Halides

All the elements form **tetrahedral MX₄**, except that **PbBr₄ and PbI₄ do not exist** — Pb⁴⁺ is a strong oxidant and Br⁻/I⁻ are good reductants, so the two would destroy each other and only PbX₂ survives. (PbF₄ and PbCl₄ are known but thermally fragile.)

**Thermal stability** falls two ways:

\[\mathrm{CX_4>SiX_4>GeX_4>SnX_4>PbX_4};\qquad \mathrm{MF_4>MCl_4>MBr_4>MI_4}\]

The second order follows the C–X bond energies (kcal mol⁻¹): **C–F 116, C–Cl 81, C–Br 68, C–I 51**. Volatility runs the opposite way to stability with increasing molar mass. The fluorides of carbon are exceptionally stable and inert (**fluorocarbons**), and the mixed fluoro-chlorocarbons — **freons** — are volatile, non-toxic, non-corrosive refrigerants.

**Hydrolysis is the single most tested item in Group 14.** All the tetrahalides except the carbon halides hydrolyse readily, and the tendency **decreases down the group**:

\[\mathrm{SiCl_4+4H_2O\rightarrow Si(OH)_4+4HCl}\qquad(\text{ortho-silicic acid; dehydrates to }SiO_2)\]

SiCl₄ **fumes in moist air**, liberating HCl. The mechanism is what matters: a water oxygen donates its lone pair into a **vacant 3d orbital on silicon**, giving a five-coordinate intermediate; chloride then leaves, and the sequence repeats four times. **Carbon has no d orbital available, cannot expand beyond four, and so CCl₄ is not hydrolysed** — the coordination number can never rise to five to admit the incoming nucleophile.

But "CCl₄ never hydrolyses" is too strong. Given enough energy the higher-lying empty orbitals of *any* atom become usable, and superheated steam over iron or copper does force it:

\[\mathrm{CCl_4+H_2O\ (superheated\ steam)\xrightarrow{Fe\ or\ Cu}COCl_2\ (phosgene)+2HCl}\]

The same "no vacant d orbital" limitation explains why **carbon forms no hexahalo complex** — [CCl₆]²⁻ is unknown, while [SiF₆]²⁻, [GeCl₆]²⁻, [SnCl₆]²⁻ and [PbCl₆]²⁻ all exist. It is also why **SiCl₄ and SnCl₄ act as Lewis acids and their aqueous solutions are acidic, while CCl₄ is neither.**

**Dihalides MX₂** are formed by every element from Si onward, and their **stability increases down the group** with the inert-pair effect. They are more ionic than the tetrahalides and have higher melting and boiling points — hence **SnCl₂ is a solid while SnCl₄ is a liquid at room temperature**. Carbon's "dihalides" are the **carbenes** :CCl₂, :CBr₂ — among the most reactive species in chemistry, not stable compounds.

### Trap bank — Group 14 trends, allotropes, hydrides and halides

- **CCl₄ resists hydrolysis; SiCl₄ hydrolyses instantly.** Always give the reason as "carbon has no vacant low-lying d orbital, so it cannot reach the five-coordinate transition state" — never "carbon is different". And know the superheated-steam exception (→ phosgene).
- **CO is neutral**; GeO, SnO and PbO are amphoteric. Containing oxygen does not make an oxide acidic.
- **CO₂ is a gas, SiO₂ a solid** — pπ–pπ overlap works for C=O and fails for Si=O. Also **SiO is unknown.**
- **Silicon has no graphite-like allotrope**, only the diamond structure, for the same π-bonding reason.
- Catenation order **C ≫ Si > Ge ≈ Sn ≫ Pb** follows M–M bond energy; hetero-catenation through oxygen wins for Si because Si–O (452) ≫ Si–Si (222).
- **Graphite, not diamond, is thermodynamically the most stable** allotrope (ΔfH° = 0); diamond survives only kinetically. Charcoal is the *most reactive* form.
- **Graphite conducts, diamond does not** — both are giant covalent solids, so the difference is delocalised electrons, never a difference in bond type.
- Graphite's lubricity **needs adsorbed gas**; in high vacuum it is a poor lubricant.
- **PbBr₄ and PbI₄ do not exist** (Pb⁴⁺ oxidises Br⁻/I⁻). **[SiCl₆]²⁻ does not exist** although [SiF₆]²⁻ does.
- **SnCl₂ reduces, PbO₂ oxidises** — same inert-pair cause, opposite roles.
- Ge²⁺ is a strong reducing agent; Pb⁴⁺ a strong oxidising agent. Ge⁴⁺ > Sn⁴⁺ > Pb⁴⁺ in stability; Ge²⁺ < Sn²⁺ < Pb²⁺.
- SiH₄ is more reactive than CH₄ because of **bond polarity (Siδ⁺–Hδ⁻) plus vacant orbitals**, *not* simply because Si–H is weaker.
- **(SiH₃)₃N is planar and a weak base; (CH₃)₃N is pyramidal and a good base** — the standard dπ–pπ question.
- In C₆₀: **20 hexagons and 12 pentagons**; pentagons never fuse to each other. Both bond lengths exist (138.3 and 143.5 pm).

# 6. Group 14 compounds: carbon oxides, carbides, silicon materials, tin and lead

## 6.1 Carbon monoxide

**Preparation.**

\[\mathrm{2C+O_2\ (limited)\xrightarrow{\Delta}2CO}\]
\[\mathrm{HCOOH\xrightarrow[373\ K]{conc.\ H_2SO_4}CO+H_2O};\qquad \mathrm{(COOH)_2\xrightarrow{conc.\ H_2SO_4}CO+CO_2+H_2O}\]

In the oxalic-acid route H₂SO₄ acts purely as a dehydrating agent, and the CO₂ co-product is absorbed in KOH.

\[\mathrm{C+H_2O\ (steam)\xrightarrow{473-1273\ K}CO+H_2}\qquad(\textbf{water gas / synthesis gas})\]
\[\mathrm{2C+O_2+4N_2\xrightarrow{1273\ K}2CO+4N_2}\qquad(\textbf{producer gas})\]
\[\mathrm{CO_2+C\ (red\ hot)\rightarrow 2CO};\qquad \mathrm{Zn+CO_2\rightarrow ZnO+CO}\]
\[\mathrm{K_4[Fe(CN)_6]+6H_2SO_4+6H_2O\rightarrow 2K_2SO_4+FeSO_4+6CO+3(NH_4)_2SO_4}\]

In the ferrocyanide route **only concentrated H₂SO₄ may be used** — dilute acid liberates highly poisonous HCN instead.

**Properties.** Colourless, odourless, almost insoluble in water, **neutral oxide**, burns with a **blue flame**, density close to that of air. It has the **highest bond energy of any diatomic molecule, 1072 kJ mol⁻¹** (compare N₂, 941), with one σ and two π bonds, and is **isoelectronic with N₂, CN⁻ and NO⁺**.

**Powerful reducing agent** — the basis of pyrometallurgy. It reduces almost every metal oxide except those of the alkali and alkaline-earth metals, aluminium and a few transition metals:

\[\mathrm{Fe_2O_3+3CO\xrightarrow{600-700^{\circ}C}2Fe+3CO_2};\qquad \mathrm{ZnO+CO\xrightarrow{\Delta}Zn+CO_2}\]

It also reduces Fehling's solution to Cu₂O and I₂O₅ to iodine.

**Detection, absorption and estimation.**

\[\mathrm{CO+PdCl_2+H_2O\rightarrow CO_2+Pd\downarrow(\text{black})+2HCl}\qquad(\text{detection})\]
\[\mathrm{I_2O_5+5CO\rightarrow I_2+5CO_2}\qquad(\text{estimation — the }I_2\text{ is then titrated with thiosulphate})\]

Absorbent: **ammoniacal Cu₂Cl₂** (cuprous chloride), which forms [CuCl(CO)(H₂O)₂].

**Addition reactions — CO is not saturated.**

\[\mathrm{CO+Cl_2\xrightarrow{sunlight\ or\ camphor}COCl_2\ (phosgene)}\]
\[\mathrm{CO+2H_2\xrightarrow[ZnO]{150-400^{\circ}C}CH_3OH};\qquad \mathrm{CO+NaOH\xrightarrow{high\ P}HCOONa};\qquad \mathrm{CO+S\xrightarrow{\Delta}COS}\]

**Metal carbonyls.** Because of the lone pair on carbon, CO is a **σ-donor / π-acceptor** ligand — donating from its carbon-based HOMO and accepting metal d density into its π\* LUMO. That two-way, mutually reinforcing donation is **synergic bonding**, and it is why carbonyls are so stable:

\[\mathrm{4CO+Ni\xrightarrow{80^{\circ}C}Ni(CO)_4};\qquad \mathrm{5CO+Fe\xrightarrow{180^{\circ}C}Fe(CO)_5}\]

Both reactions are exploited in metal extraction and purification (the Mond process). Note that in carbonyls **carbon is attached directly to the metal**, so they count as organometallic compounds.

**Toxicity.** CO binds the iron of haemoglobin to form cherry-red **carboxyhaemoglobin**, roughly **300 times more stable** than oxyhaemoglobin (figures of 200–300 are quoted). Haemoglobin can then no longer carry O₂, and **asphyxia** follows — headache and drowsiness at low exposure, death at high. This is why coal, gas and oil heaters used in closed, unventilated rooms in winter are lethal. The antidote is **carbogen**, 95 % O₂ with 5 % CO₂ (5–10 % CO₂ is also quoted), which drives CO off the haem while stimulating respiration.

## 6.2 Carbon dioxide

**Preparation.**

\[\mathrm{C+O_2\ (excess)\xrightarrow{\Delta}CO_2};\qquad \mathrm{CH_4+2O_2\rightarrow CO_2+2H_2O}\]
\[\mathrm{CaCO_3+2HCl\rightarrow CaCl_2+CO_2+H_2O}\qquad(\text{laboratory: marble}+\textbf{dilute HCl})\]
\[\mathrm{CaCO_3\xrightarrow{\Delta}CaO+CO_2}\qquad(\text{commercial, from limestone})\]

**Never use H₂SO₄ on marble** — insoluble CaSO₄ coats the chips and stops the reaction. Bicarbonates decompose similarly (\(\mathrm{2NaHCO_3\xrightarrow{\Delta}Na_2CO_3+H_2O+CO_2}\)), and fermentation gives CO₂ as a by-product: \(\mathrm{C_6H_{12}O_6\rightarrow 2C_2H_5OH+2CO_2}\).

**Structure.** Carbon is **sp** hybridised; two sp orbitals overlap oxygen p orbitals for the σ framework while carbon's remaining two p electrons make two pπ–pπ bonds. The molecule is **linear with equal C–O bonds of 115 pm and zero dipole moment**. That 115 pm is *shorter* than a normal C=O, so CO₂ is a **resonance hybrid** of O=C=O with the two charge-separated forms ⁻O–C≡O⁺ and ⁺O≡C–O⁻; the bond order lies between 1 and 2 in the delocalised description.

**Acidic oxide.** With water it gives the weak dibasic carbonic acid, which has never been isolated as a solid although its salts have:

\[\mathrm{CO_2+H_2O\rightleftharpoons H_2CO_3};\quad \mathrm{H_2CO_3+H_2O\rightleftharpoons HCO_3^-+H_3O^+};\quad \mathrm{HCO_3^-+H_2O\rightleftharpoons CO_3^{2-}+H_3O^+}\]

The **H₂CO₃/HCO₃⁻ buffer holds blood pH between 7.26 and 7.42.**

**Ratio discipline — always name which reagent is in excess before writing the product.**

\[\mathrm{CO_2+OH^-\rightarrow HCO_3^-}\qquad(\text{limited base, i.e. }CO_2\text{ in excess})\]
\[\mathrm{CO_2+2OH^-\rightarrow CO_3^{2-}+H_2O}\qquad(\text{excess base})\]

The limewater test is the same logic in two steps, and explains why the milkiness *disappears* on prolonged passage of CO₂:

\[\mathrm{Ca(OH)_2+CO_2\rightarrow CaCO_3\downarrow+H_2O};\qquad \mathrm{CaCO_3+CO_2+H_2O\rightarrow Ca(HCO_3)_2\ (soluble)}\]

**Oxidising/reduction behaviour.** Although CO₂ does not support ordinary combustion, strongly electropositive metals burn *in* it, reducing it to carbon:

\[\mathrm{CO_2+2Mg\rightarrow 2MgO+C};\qquad \mathrm{CO_2+4Na\rightarrow 2Na_2O+C};\qquad \mathrm{CO_2+Zn\rightarrow ZnO+CO}\]

**A magnesium fire must therefore never be fought with a CO₂ extinguisher.**

**Physical properties and uses.** Colourless, odourless, **heavier than air**, sparingly soluble in water with solubility rising with pressure (Henry's law — the basis of carbonated drinks). Released rapidly through a nozzle it solidifies to snow-like **dry ice** ("drikold"), a molecular solid that **sublimes without leaving residue** and is used to refrigerate ice cream and frozen food and to make low-temperature baths (−60 to −100 °C with ether). Uses: fire extinguisher (heavy, non-combustible), carbonation, urea and soda manufacture, and inert atmospheres. It is present at ≈ 0.03–0.05 % of the atmosphere, removed by **photosynthesis**:

\[\mathrm{6CO_2+12H_2O\xrightarrow[chlorophyll]{h\nu}C_6H_{12}O_6+6O_2+6H_2O}\]

Rising CO₂ from fossil-fuel combustion and limestone calcination for cement is the principal driver of the **greenhouse effect** — CO₂ absorbs strongly in the infrared and traps outgoing terrestrial radiation.

**A third oxide worth knowing: carbon suboxide, C₃O₂.** A bad-smelling gas (bp 6 °C) obtained by dehydrating malonic acid with P₄O₁₀; it is **linear, O=C=C=C=O**, and decomposes above 200 °C to CO₂ and carbon.

## 6.3 Carbides

Carbides are binary compounds of carbon with an element of equal or lower electronegativity — so compounds with N, S, O and Cl are excluded. Three classes, distinguished by bonding and by **what hydrolysis gives you**:

**(i) Ionic / salt-like carbides** — formed by very electropositive metals (Groups 1, 2 and 13, but not boron), the coinage metals, Zn, Cd and some lanthanoids. Transparent, crystalline, non-conducting. Classified by the hydrocarbon released:

| Sub-class | Anion | Examples | Hydrolysis product |
|---|---|---|---|
| **Methanides (methides)** | C⁴⁻ | **Be₂C, Al₄C₃**, Mn₃C | **CH₄** |
| **Acetylides** | C₂²⁻ | CaC₂, BaC₂, Na₂C₂, Cu₂C₂, Ag₂C₂, ZnC₂ | **C₂H₂** (acetylene) |
| **Allylides (alkylides)** | C₃⁴⁻ | **Mg₂C₃** | **CH₃–C≡CH** (propyne) |

\[\mathrm{Be_2C+4H_2O\rightarrow 2Be(OH)_2+CH_4};\qquad \mathrm{Al_4C_3+12H_2O\rightarrow 4Al(OH)_3+3CH_4}\]
\[\mathrm{CaC_2+2H_2O\rightarrow Ca(OH)_2+C_2H_2};\qquad \mathrm{Mg_2C_3+4H_2O\rightarrow 2Mg(OH)_2+CH_3C{\equiv}CH}\]

Acetylides have the **NaCl-type structure**. Methanides are not formed by metal cations of large size. **Mg₂C₃ is the only known carbide with a three-carbon anion** (obtained by the action of methane or pentane on magnesium at 700 °C, or by reacting Mg with acetylene at 600 °C).

**(ii) Covalent carbides** — **SiC and B₄C**. Giant covalent, polymeric, thermally very stable, extremely hard, high-melting, technically ionic-looking but not ionic. Prepared by reducing the oxide with carbon in an electric furnace, or by passing acetylene over heated silicon (\(\mathrm{2Si+C_2H_2\rightarrow 2SiC+H_2}\)).

**(iii) Interstitial / metallic / refractory carbides** — formed by transition and inner-transition elements at ≈ 2000 °C, with carbon atoms occupying holes in the metal lattice. **No new chemical bond forms**, so metallic lustre and electrical conductivity survive; the carbon merely pins the lattice, raising hardness and melting point. TiC and WC are examples. They are chemically inert except to strong oxidising conditions. **Cr₃C₂ and Mn₃C are exceptions**: their radius ratio (0.60–0.61) sits at the borderline, so they *are* hydrolysed by water and dilute acid to a mixture of hydrocarbons and hydrogen — intermediate in behaviour between ionic and covalent carbides. Uses: tungsten carbide for cutting tools and ball-point pen tips; silicon carbide in atomic-reactor construction (high dissociation temperature and good thermal conductivity).

## 6.4 Silicon and silicon carbide

**Preparation.** Ordinary-grade silicon comes from reducing silica with high-purity coke in an electric furnace; **traces of Fe are added to prevent SiC formation**, and the product is 95–98 % pure (used to make ferrosilicon and other alloys):

\[\mathrm{SiO_2+2C\xrightarrow{2273-2773\ K}Si+2CO};\qquad \mathrm{SiO_2+2Mg\rightarrow Si+2MgO}\ (\text{amorphous})\]

**Semiconductor grade** requires a gas-phase route followed by **zone refining**:

\[\mathrm{SiCl_4+2H_2\xrightarrow{\Delta}Si+4HCl};\qquad \mathrm{SiHCl_3+H_2\xrightarrow{\Delta}Si+3HCl};\qquad \mathrm{SiH_4\xrightarrow{\Delta}Si+2H_2}\]

**Properties.** Very hard, lustrous, diamond-like structure; mp 1693 K, bp ≈ 3550 K. Isotopes ²⁸Si (most abundant), ²⁹Si, ³⁰Si. Amorphous silicon is a brownish powder and is chemically the **more reactive** form. Silicon is remarkably unreactive at room temperature toward everything **except fluorine**.

\[\mathrm{Si+O_2\xrightarrow{1173\ K}SiO_2};\qquad \mathrm{3Si+2N_2\xrightarrow{1673\ K}Si_3N_4}\]
\[\mathrm{Si+2F_2\xrightarrow{room\ temp.}SiF_4}\qquad(\text{spontaneous; other halogens need heat})\]
\[\mathrm{Si+2H_2O\xrightarrow{red\ heat}SiO_2+2H_2};\qquad \mathrm{Si+C\xrightarrow{2500^{\circ}C}SiC}\]
\[\mathrm{Si+2NaOH+H_2O\rightarrow Na_2SiO_3+2H_2};\qquad \mathrm{Si+4KOH\rightarrow K_4SiO_4+2H_2}\]
\[\mathrm{Na_2CO_3+Si\rightarrow Na_2SiO_3+C};\qquad \mathrm{2Mg+Si\rightarrow Mg_2Si}\]
\[\mathrm{Si+6HF\rightarrow H_2SiF_6+2H_2}\]

Non-oxidising acids do not touch silicon; only a **HNO₃/HF mixture** attacks it (HNO₃ oxidises, HF removes the oxide as fluorosilicate). Uses: ferrosilicon to make acid-resistant steel, semiconductors and transistors, silicon bronze and magnesium-silicon bronze alloys.

**Silicon carbide, SiC — carborundum.**

\[\mathrm{SiO_2+3C\xrightarrow[\text{NaCl},\ sawdust]{2000-2500^{\circ}C}SiC+2CO}\]

Diamond-like (or wurtzite) structure in which alternate carbon atoms of the diamond lattice are replaced by silicon, C–Si = 190 pm — hence its extreme hardness (**second only to diamond among common abrasives, above B₄C and below cubic BN**) and high dissociation temperature (above 2200 °C). Pure SiC is pale yellow to colourless; the usual dark purple, black or green comes from traces of iron. It is **inert to every acid except H₃PO₄**, but **fused alkali attacks it**:

\[\mathrm{SiC+2O_2+4NaOH\rightarrow Na_2SiO_3+Na_2CO_3+2H_2O}\]

Uses: abrasive (grindstones, knife sharpeners, polishing), refractory, and reactor construction.

## 6.5 Silica, sodium silicate, the silicates and zeolites

**Silica, SiO₂.** Occurs free as sand, quartz, flint and cristobalite, and combined in the silicates. Silicon is **sp³**, bonded to four oxygens, and **each oxygen bridges exactly two silicons**, giving a three-dimensional giant molecule. There are no discrete SiO₂ molecules — which is exactly why silica melts so high while CO₂ is a gas. Pure silica is colourless; sand is yellow-brown from ferric oxide.

**Insoluble in water and in every acid except HF** — the one reaction that matters industrially and in the laboratory:

\[\mathrm{SiO_2+4HF\rightarrow SiF_4+2H_2O};\qquad \mathrm{SiO_2+6HF\rightarrow H_2SiF_6+2H_2O}\]

Hence **HF must be stored in polyethylene or wax-lined vessels, never glass**, and HF is used to etch glass. With metal oxides, carbonates and salts at high temperature silica forms silicates, driving off the volatile oxide — the chemistry of glassmaking:

\[\mathrm{SiO_2+CaO\xrightarrow{\Delta}CaSiO_3};\qquad \mathrm{SiO_2+Na_2CO_3\xrightarrow{high\ T}Na_2SiO_3+CO_2}\]
\[\mathrm{SiO_2+Na_2SO_4\xrightarrow{high\ T}Na_2SiO_3+SO_3};\qquad \mathrm{3SiO_2+Ca_3(PO_4)_2\xrightarrow{high\ T}3CaSiO_3+P_2O_5}\]

Uses: sand for mortar and cement; **quartz is piezoelectric**, which made accurate clocks, radio and television broadcasting and mobile radio possible; quartz is transparent to UV so large crystals are cut into lenses for optical instruments and to control transmitter frequency; powdered quartz for silica bricks; **silica gel (SiO₂·xH₂O)** as a desiccant and as a chromatographic support; **kieselguhr**, an amorphous silica, in filtration plants.

**Sodium silicate (water glass), Na₂SiO₃.**

\[\mathrm{Na_2CO_3+SiO_2\xrightarrow{fusion}Na_2SiO_3+CO_2}\]

The fused mass extracted with water gives a syrupy liquid called **water glass**, alkaline through hydrolysis (\(\mathrm{Na_2SiO_3+2H_2O\rightleftharpoons 2NaOH+H_2SiO_3}\)). Dropping crystals of coloured salts of Co, Fe, Ni or Cu into concentrated water glass grows coloured hollow metal-silicate tubes — the **"silica garden" / chemical garden**. Uses: fireproofing wood and textiles, adhesive cement for china clay, egg preservative, paint and calico printing, cheap soap filler, and the source of silica gel.

**Silicates.** Metal derivatives of silicic acid, H₄SiO₄ ≡ Si(OH)₄, made by fusing a metal oxide or carbonate with sand. The universal building block is the **[SiO₄]⁴⁻ tetrahedron**; in every silicate **Si is +4, O is −2, and silicon is sp³ and non-planar**. Silicates are the products of **hetero-catenation of the Si–O bond**, and the entire classification depends on **how many corner oxygens each tetrahedron shares**. Sharing a corner means one oxygen is bonded to two silicons, which lowers both the O : Si ratio and the residual charge per silicon.

| Class | O shared per tetrahedron | O contributed per tetrahedron | General formula | Examples |
|---|---|---|---|---|
| **Ortho** (neso) | 0 | 4 | SiO₄⁴⁻ | zircon ZrSiO₄, olivine Mg₂SiO₄, phenacite Be₂SiO₄, willemite Zn₂SiO₄ |
| **Pyro** (soro, di) | 1 | 3.5 | Si₂O₇⁶⁻ | thortveitite Sc₂Si₂O₇, hemimorphite Zn₃(Si₂O₇)·Zn(OH)₂·H₂O |
| **Cyclic** (ring) | 2 | 3 | (SiO₃²⁻)ₙ | beryl Be₃Al₂Si₆O₁₈ (n = 6), benitoite BaTiSi₃O₉ (n = 3), wollastonite Ca₃Si₃O₉ |
| **Single chain** (pyroxene) | 2 | 3 | (SiO₃²⁻)ₙ | spodumene LiAl(SiO₃)₂, jadeite NaAl(SiO₃)₂, enstatite MgSiO₃, diopside CaMg(SiO₃)₂ |
| **Double chain** (amphibole) | 2 and 3, average 2.5 | 2.75 | (Si₄O₁₁⁶⁻)ₙ | tremolite Ca₂Mg₅(Si₄O₁₁)₂(OH)₂, asbestos |
| **Sheet** (phyllo, 2-D) | 3 | 2.5 | (Si₂O₅²⁻)ₙ | talc Mg₃(OH)₂(Si₂O₅)₂, kaolin Al₂(OH)₄(Si₂O₅), muscovite mica |
| **Three-dimensional** (tecto) | 4 | 2 | (SiO₂)ₙ | quartz, feldspar, zeolites, ultramarines |

Note carefully that **cyclic and single-chain silicates share the same general formula (SiO₃²⁻)ₙ** — the discriminator is a *finite ring* versus an *infinite chain*, so a question must give you structural information, not just a formula.

**The charge-balance drill.** Every silicate question reduces to "total cation charge + 4(Si) − 2(O) = 0":

- *MgₓSi₂O₇:* 2x + 4(2) − 2(7) = 0 → **x = 3**.
- *BeₙAl₂Si₆O₁₈ (beryl):* 2n + 3(2) + 4(6) − 2(18) = 0 → **n = 3**.
- *A four-membered pyroxene fragment:* (SiO₃²⁻)₄ plus one terminal O²⁻ gives **Si₄O₁₃¹⁰⁻**.

**Zeolites.** Replace some Si(IV) tetrahedral sites in a three-dimensional framework by **Al(III)** and the framework acquires one unit of negative charge per substitution — an **aluminosilicate**. That charge is balanced by mobile, **exchangeable cations** (Na⁺, K⁺, Ca²⁺) sitting in the pores. Two features together — a rigid, size-selective pore architecture *plus* mobile cations — give zeolites both of their functions:

- **Ion exchange.** Sodium zeolite, Na₂Al₂Si₂O₈·xH₂O (**permutit**), softens hard water by swapping its Na⁺ for dissolved Ca²⁺/Mg²⁺.
- **Shape-selective catalysis.** Only molecules of the right size and shape can diffuse to the internal acid sites. **ZSM-5** converts alcohols directly into gasoline; zeolites also catalyse hydrocarbon cracking and isomerisation across the petrochemical industry.

Feldspar and chabazite (NaAlSi₂O₆) are natural framework aluminosilicates; **glass and cement are the two great man-made silicates.** The reliable order of attack on any zeolite problem is: **(1) identify the framework and substitution pattern, (2) balance the charge, (3) then reason about pore size, ion exchange or catalysis.**

## 6.6 Silicones

**Silicones are organosilicon polymers built on the repeating siloxane linkage –Si–O–Si–**, with organic groups (usually methyl or phenyl) bonded directly to silicon. The empirical unit R₂SiO resembles a ketone R₂CO, which is where the name came from — but the resemblance is nominal only.

**Making the chlorosilane feedstock.** The Grignard route lets you choose the functionality precisely:

\[\mathrm{RMgCl+SiCl_4\rightarrow RSiCl_3+MgCl_2};\quad \mathrm{2RMgCl+SiCl_4\rightarrow R_2SiCl_2+2MgCl_2};\quad \mathrm{3RMgCl+SiCl_4\rightarrow R_3SiCl+3MgCl_2}\]

Industrially, alkyl halide is passed over silicon with a copper catalyst:

\[\mathrm{2RCl+Si\xrightarrow[570\ K]{Cu\ powder}R_2SiCl_2}\]

**Hydrolysis then condensation.** Each chlorosilane hydrolyses to a **silanol**, and the silanols condense with loss of water to build Si–O–Si links. **The number of hydrolysable Cl atoms fixes the polymer topology — this is the whole design logic:**

| Starting chlorosilane | Hydrolysable Cl | Silanol | Product |
|---|---|---|---|
| **R₃SiCl** (monofunctional) | 1 | R₃SiOH | **dimer only**, R₃Si–O–SiR₃ — a **chain-stopping unit** |
| **R₂SiCl₂** (difunctional) | 2 | R₂Si(OH)₂ | **linear chain** silicone |
| **RSiCl₃** (trifunctional) | 3 | RSi(OH)₃ | **cross-linked 3-D network** |

\[\mathrm{R_2SiCl_2+2H_2O\rightarrow R_2Si(OH)_2+2HCl}\ \xrightarrow{\text{condensation, }-H_2O}\ \mathrm{-O{-}SiR_2{-}O{-}SiR_2{-}O-}\]
\[\mathrm{R_3SiCl+H_2O\rightarrow R_3SiOH};\qquad \mathrm{R_3SiOH+HOSiR_3\rightarrow R_3Si{-}O{-}SiR_3+H_2O}\]

**Cyclic silicones** are formed instead when the terminal –OH groups of a linear silicone condense with each other, giving non-planar rings of 3, 4, 5 or 6 silicon atoms.

Two consequences you can be asked to reason with directly:

- **Adding a controlled proportion of R₃SiCl controls the chain length** (more chain-stopper, shorter chains).
- **Adding a controlled proportion of RSiCl₃ controls the hardness** (more cross-linker, harder polymer).

**Properties.** The lower members are oily liquids; higher members are waxy or rubber-like solids. They are thermally and chemically **stable**, excellent **electrical insulators** (the Si–O–Si backbone is inert), **non-toxic**, strongly **water-repellent**, and — unusually — their **viscosity barely changes with temperature.** All of this follows from the strong, polar Si–O bond plus a flexible, freely rotating backbone.

**Uses.** High-temperature oil baths and high-vacuum pumps; electrical insulation; waterproofing cloth, paper, masonry and leather (car and shoe polish); paints and enamels resistant to heat, sunlight, chemicals and damp; vaseline-like greases for aircraft; **silicone rubbers** that keep their elasticity over a wide temperature range (used for astronauts' boot soles); **antifoaming agents** in sewage disposal, brewing and frying oil; gearbox and light-machinery lubricants; sealants; and, being biocompatible, **surgical and cosmetic implants**. **Silly putty** is a silicone of composition intermediate between the oils and the rubbers.

## 6.7 Glass

**Glass is a transparent, hard, brittle, amorphous supercooled liquid — a super-cooled mixture of silicates, not a compound.** It has **no sharp melting point and no definite chemical formula**; an ordinary glass is written only as a composition, **xM₂O·yM′O·6SiO₂** (M univalent, M′ bivalent). It is manufactured by fusing sand, Na₂CO₃ and limestone in roughly 3.3 : 1 : 0.5 proportion.

- **Annealing** is the deliberate slow cooling that prevents internal strain; glass cooled suddenly develops strain and shatters. **Cullet** is the broken glass added back to the melt.
- **Etching** exploits the one reaction silica undergoes: the surface is waxed, the design exposed, and aqueous HF poured on, forming soluble fluorosilicates.

| Variety | Composition | Characteristic use |
|---|---|---|
| Soft glass | Na and Ca silicates | easily fusible — tubing, common glassware |
| Hard glass | K and Ca silicates | harder to fuse — hard-glass apparatus |
| Flint glass | K and **Pb** silicates | clear, high refractive index — bulbs, optical instruments |
| Bottle glass | cheapest soda-lime | bottles |
| **Pyrex / Jena** | Zn and Ba **borosilicate** | heat-, shock- and reagent-resistant |
| Crookes glass | contains cerium oxide | cuts out UV rays |
| Laminated safety glass | butyral plastic between two sheets | does not shatter — windscreens |
| Quartz glass (vitreosil) | pure fused silica | chemical and optical apparatus |

**Why particular oxides are added:** **B₂O₃** (as borax or boric acid) for its very low coefficient of expansion — this is what makes borosilicate glass heat- and shock-proof; **PbO** for high refractive index; **P₂O₅** (as Ca₃(PO₄)₂) to make glass opalescent; **ZnO** for heat resistance.

**Colouring oxides:** FeO / Cr₂O₃ green; Fe₂O₃ brown; MnO₂ light pink → purple → black with increasing amount; CoO intense blue; Cu₂O red; CuO peacock blue; CdS lemon yellow; gold chloride ruby; NiO black; carbon amber.

## 6.8 Tin and its compounds

**Physical properties.** Silvery-white, malleable and ductile, but **brittle at 200 °C** and then powderable. It **"cries"** (a cracking sound) when bent — *tin cry*. It has **more natural isotopes (ten) than any other element**, and is the only element of the group to show allotropy in three forms:

\[\mathrm{\alpha\text{-}Sn\ (grey)\xrightarrow{13.2^{\circ}C}\beta\text{-}Sn\ (white,\ commonest)\xrightarrow{161^{\circ}C}\gamma\text{-}Sn\ (rhombic,\ brittle)\xrightarrow{232^{\circ}C}liquid}\]

Below 13.2 °C white tin converts to grey tin, but only rapidly near −50 °C or with a catalyst; in cold countries this causes tin objects to crumble to powder — **tin disease, tin pest or tin plague**. Grey tin is very brittle.

**Reactions of the element.**

\[\mathrm{Sn+O_2\xrightarrow{1500-1600^{\circ}C}SnO_2}\ (\text{bright flame});\qquad \mathrm{Sn+2Cl_2\rightarrow SnCl_4};\qquad \mathrm{Sn+2S\rightarrow SnS_2}\]
\[\mathrm{Sn+2H_2O\xrightarrow{high\ T}SnO_2+2H_2}\qquad(\text{no reaction at room temperature})\]
\[\mathrm{Sn+2HCl\ (hot\ conc.)\rightarrow SnCl_2+H_2};\qquad \mathrm{Sn+4H_2SO_4\ (hot\ conc.)\rightarrow Sn(SO_4)_2+2SO_2+4H_2O}\]
\[\mathrm{4Sn+10HNO_3\ (cold\ dil.)\rightarrow 4Sn(NO_3)_2+NH_4NO_3+3H_2O}\]
\[\mathrm{Sn+4HNO_3\ (hot\ conc.)\rightarrow H_2SnO_3\ (metastannic\ acid)+4NO_2+H_2O}\]
\[\mathrm{Sn+2NaOH+H_2O\rightarrow Na_2SnO_3+2H_2}\qquad(\text{sodium stannate})\]

Dilute HCl reacts only very slowly because it is non-oxidising. Tin is **unaffected by organic acids**, which is exactly why it is used to tin copper and brass utensils; other uses are tin plating of iron and steel, tin foil, and tin amalgam for mirrors.

**Stannous chloride, SnCl₂.**

- Prepared by dissolving Sn in hot conc. HCl (giving the hydrate SnCl₂·2H₂O) or by heating Sn in dry HCl gas (giving the anhydrous salt). **The anhydrous salt cannot be made by heating the hydrate** — hydrolysis intervenes: \(\mathrm{SnCl_2\cdot 2H_2O\xrightarrow{\Delta}Sn(OH)Cl+HCl+H_2O}\).
- Readily hydrolysed in water; **the hydrolysis is reversed by adding HCl**.
- **A piece of tin metal is always kept in a SnCl₂ solution**, because air oxidises Sn(II) and the added tin reduces it back:

\[\mathrm{6SnCl_2+2H_2O+O_2\rightarrow 2SnCl_4+4Sn(OH)Cl\downarrow};\qquad \mathrm{SnCl_4+Sn\rightarrow 2SnCl_2}\]

- **A strong reducing agent** — the standard reaction set:

\[\mathrm{SnCl_2+2FeCl_3\rightarrow SnCl_4+2FeCl_2};\qquad \mathrm{SnCl_2+2CuCl_2\rightarrow SnCl_4+2CuCl}\]
\[\mathrm{SnCl_2+2HgCl_2\rightarrow Hg_2Cl_2\downarrow(white)+SnCl_4};\qquad \mathrm{Hg_2Cl_2+SnCl_2\rightarrow 2Hg\downarrow(grey/black)+SnCl_4}\]
\[\mathrm{C_6H_5NO_2+3SnCl_2+6HCl\rightarrow C_6H_5NH_2+3SnCl_4+2H_2O}\]
\[\mathrm{3SnCl_2+2AuCl_3\rightarrow 2Au+3SnCl_4}\qquad(\textbf{purple of Cassius},\ \text{colloidal gold})\]

It also reduces dichromate to Cr³⁺ and decolourises iodine.

- With alkali: \(\mathrm{SnCl_2+2NaOH\rightarrow Sn(OH)_2\downarrow(white)+2NaCl}\), dissolving in excess alkali to sodium stannite.
- With H₂S: \(\mathrm{SnCl_2+H_2S\rightarrow SnS\downarrow(dark\ brown)+2HCl}\), and SnS dissolves in **yellow ammonium sulphide** to give (NH₄)₂SnS₃ — the analytical distinction of Sn(II).
- Reacts readily with I₂ (→ SnCl₂I₂), a reaction used to **estimate tin**.
- The **stannite test for bismuth**: \(\mathrm{Bi(OH)_3+[Sn(OH)_4]^{2-}\rightarrow Bi\downarrow(black)+[Sn(OH)_6]^{2-}}\).

**Stannic chloride, SnCl₄.** From dry Cl₂ over fused tin. A **colourless fuming liquid** with an unpleasant odour, hygroscopic, forming hydrates SnCl₄·3H₂O, ·5H₂O, ·6H₂O, ·8H₂O.

\[\mathrm{SnCl_4+4H_2O\rightarrow Sn(OH)_4\downarrow(white)+4HCl};\qquad \mathrm{SnCl_4+2HCl\rightarrow H_2SnCl_6}\ (\text{hexachlorostannic acid})\]
\[\mathrm{SnCl_4+2NH_4Cl\rightarrow (NH_4)_2SnCl_6}\]

**SnCl₄·5H₂O is "butter of tin" (oxymuriate of tin)**, used as a mordant and to deposit a scratch-resistant SnO₂ film on glass; **(NH₄)₂SnCl₆ is "pink salt"**, a mordant in calico printing. SnCl₄ is also made by \(\mathrm{2HgCl_2+SnCl_2\rightarrow 2Hg+SnCl_4}\) and from Sn + aqua regia.

**Oxides.** Both are **amphoteric**. **SnO** is a black/dark-grey powder made by heating stannous oxalate or hydroxide in a CO₂ stream; **SnO₂** is a soft white powder.

\[\mathrm{SnO+2HCl\rightarrow SnCl_2+H_2O};\qquad \mathrm{SnO+2NaOH\xrightarrow{cold}Na_2SnO_2+H_2O}\]
\[\mathrm{2SnO+2NaOH\xrightarrow{hot\ conc.}Na_2SnO_3+Sn+H_2O}\qquad(\text{hot concentrated alkali disproportionates it})\]
\[\mathrm{SnO_2+2H_2SO_4\ (hot\ conc.)\rightarrow Sn(SO_4)_2+2H_2O};\qquad \mathrm{SnO_2+2NaOH\rightarrow Na_2SnO_3+H_2O}\]

SnO₂ is not attacked by common acids and is reprecipitated when the hot-conc.-H₂SO₄ solution is diluted. It is used in white glazes for tiles and milky glassware. **Mosaic gold is SnS₂**, a yellow crystalline gold-imitating substance used for filling and joining gold pieces.

**Distinguishing Sn²⁺ from Sn⁴⁺:** H₂S (brown SnS vs yellow SnS₂), Hg²⁺ (white then grey precipitate with Sn²⁺ only), and Fe³⁺ + K₃[Fe(CN)₆] (blue precipitate with Sn²⁺ only).

## 6.9 Lead and its compounds

**Physical properties.** Soft enough to be cut with a knife, bluish-grey with bright lustre, leaving a **black mark on paper**; **malleable but not ductile**; the **poorest electrical conductor of the group** (sp. gr. 11.35, mp 327 °C). All lead compounds are poisonous. Lead **shows no allotropy** — the only member of the group that does not.

**Reactions of the element.**

\[\mathrm{2Pb+O_2\xrightarrow{\Delta}2PbO}\ (\text{litharge});\qquad \mathrm{6PbO+O_2\xrightarrow{470^{\circ}C}2Pb_3O_4}\ (\text{red lead})\]
\[\mathrm{2Pb+2H_2O+O_2\rightarrow 2Pb(OH)_2}\]

That last reaction is **plumbo-solvency**, and it has a practical twist worth knowing: pure water with dissolved oxygen dissolves lead, and **nitrates, organic acids and ammonium salts make it worse**, whereas **sulphates, phosphates and carbonates — the very things dissolved in hard water — deposit a protective insoluble film inside the pipe and suppress lead poisoning.** Hard water is therefore safer than soft water in lead plumbing.

- Little affected by **dilute** HCl or H₂SO₄, because insoluble PbCl₂ and PbSO₄ films form on the surface. Powdered Pb does dissolve in **hot conc. HCl** (\(\mathrm{PbCl_2+2HCl\rightarrow H_2PbCl_4}\), chloroplumbous acid) and in **hot conc. H₂SO₄** (\(\mathrm{Pb+2H_2SO_4\rightarrow PbSO_4+SO_2+2H_2O}\), again slowed by the PbSO₄ film).
- **HNO₃ is the best solvent for lead**: \(\mathrm{3Pb+8HNO_3\ (dil.)\rightarrow 3Pb(NO_3)_2+2NO+4H_2O}\); \(\mathrm{Pb+4HNO_3\ (conc.)\rightarrow Pb(NO_3)_2+2NO_2+2H_2O}\).
- With alkali: \(\mathrm{Pb+2NaOH\rightarrow Na_2PbO_2+H_2}\) (sodium plumbite).
- Directly with halogens and sulphur: PbCl₂, PbS.
- Uses: telegraph/telephone sheathing, pipes, bullets, lead accumulators, pigments, chambers in the chamber process for H₂SO₄, and **radiation shielding** (lead blocks protect against emissions from radioactive minerals).

**The four oxides of lead.**

| Oxide | Colour / name | Character |
|---|---|---|
| **PbO** | yellow powder **massicot** / buff crystalline **litharge** | **amphoteric** |
| **Pb₂O₃** | reddish-yellow sesquioxide ≡ PbO·PbO₂ | mixed |
| **Pb₃O₄** | red — **red lead, minium, sindur** ≡ 2PbO·PbO₂ | mixed |
| **PbO₂** | dark brown | **acidic and a powerful oxidant** |

\[\mathrm{Pb(NO_3)_2\xrightarrow{\Delta}2PbO+4NO_2+O_2};\qquad \mathrm{PbO+2HNO_3\rightarrow Pb(NO_3)_2+H_2O};\qquad \mathrm{PbO+2NaOH\rightarrow Na_2PbO_2+H_2O}\]

**PbO₂ chemistry — pure Pb(IV) oxidising power.**

\[\mathrm{PbO_2+4HCl\rightarrow PbCl_2+Cl_2+2H_2O};\qquad \mathrm{2PbO_2+2H_2SO_4\rightarrow 2PbSO_4+2H_2O+O_2}\]
\[\mathrm{PbO_2+2NaOH\ (conc.)\xrightarrow{\Delta}Na_2PbO_3+H_2O};\qquad \mathrm{2PbO_2\xrightarrow{\Delta}2PbO+O_2}\]
\[\mathrm{PbO_2+SO_2\rightarrow PbSO_4}\ (\text{spontaneous});\qquad \mathrm{PbO_2+2HNO_3+(COOH)_2\rightarrow Pb(NO_3)_2+2CO_2+2H_2O}\]
\[\mathrm{2Mn^{2+}+5PbO_2+4H^+\rightarrow 2MnO_4^- +5Pb^{2+}+2H_2O}\qquad(\text{the }Mn^{2+}\text{ test})\]

Note that PbO₂ reacts with hot conc. HCl and H₂SO₄ but **not with HNO₃** (nitric acid cannot oxidise Pb(IV) further), and dissolves in hot NaOH/KOH. **Among PbO, Pb₃O₄ and PbO₂, PbO₂ is the strongest oxidising agent** — it oxidises even HCl to Cl₂.

**Proving Pb₃O₄ = 2PbO·PbO₂.** Only two thirds of the lead is attacked by nitric acid; the PbO₂ third is left behind:

\[\mathrm{Pb_3O_4+4HNO_3\rightarrow 2Pb(NO_3)_2+PbO_2\downarrow+2H_2O}\]
\[\mathrm{Pb_3O_4+8HCl\rightarrow 3PbCl_2+Cl_2+4H_2O};\qquad \mathrm{2Pb_3O_4\xrightarrow{>470^{\circ}C}6PbO+O_2}\]

The same argument with Pb₂O₃: \(\mathrm{Pb_2O_3+2HNO_3\rightarrow PbO_2\downarrow+Pb(NO_3)_2+H_2O}\), so Pb₂O₃ contains PbO₂. Red lead turns almost black on heating and regains its red colour on cooling. Uses: red pigment and protective paint for iron and steel, glass industry, and as an oxidising agent in the match industry.

**Chlorides.** **PbCl₂** is a white crystalline solid, **slightly soluble in cold water but freely soluble in hot water** (the standard separation trick), and dissolves in conc. HCl as H₂PbCl₄. **PbCl₄** is only marginally stable, made from PbO₂ with ice-cold conc. HCl saturated with Cl₂; it decomposes to PbCl₂ + Cl₂ and is destroyed by excess water. \(\mathrm{PbCl_4+2HCl\rightarrow H_2PbCl_6}\); the double salt (NH₄)₂PbCl₆ (ammonium plumbichloride) is fairly stable and regenerates PbCl₄ with H₂SO₄.

**Lead acetate, (CH₃COO)₂Pb — "sugar of lead".** White, water-soluble, **sweet-tasting and poisonous**. It decomposes on heating to PbO + CO₂ + acetone. Its reaction set is a qualitative-analysis staple:

| Reagent | Product |
|---|---|
| NaHCO₃ | white PbCO₃ |
| Na₂CO₃ | white basic lead carbonate |
| **H₂S** | **black PbS** |
| **K₂CrO₄** | **yellow PbCrO₄** |
| litharge + H₂O on boiling | basic lead acetate |
| dilute HCl | PbCl₂ (soluble in hot water) |

Used to make chrome yellow and chrome red pigments, as a mordant in dyeing, and in medicine for skin diseases.

**White lead, 2PbCO₃·Pb(OH)₂.** Manufactured by the **Dutch**, **Carter** and **electrolytic** processes; a white, heavy, highly poisonous amorphous powder, partially soluble in linseed oil. On thermal decomposition it gives red lead. Used as a white paint with linseed oil (BaSO₄ added to improve brushing power) — **its main drawback is that it blackens to PbS in an atmosphere containing H₂S.**

**Tetraethyl lead, Pb(C₂H₅)₄.**

\[\mathrm{4NaPb\ (10\%\ Na\ alloy)+4C_2H_5Cl\rightarrow 3Pb+Pb(C_2H_5)_4+4NaCl}\]

The classic **anti-knocking agent** for petrol (now phased out for its toxicity).

**Tin versus lead.**

*Similarities:* both have 18 electrons in the penultimate shell and four valence electrons; both are metals with low mp and bp; both show bi- and tetravalency; both form amphoteric MO and MO₂; both give stannates/plumbates with alkali (\(\mathrm{Sn+2NaOH+H_2O\rightarrow Na_2SnO_3+2H_2}\); \(\mathrm{Pb+2NaOH+H_2O\rightarrow Na_2PbO_3+2H_2}\)); both tetrahalides are hydrolysed by water and are thermally unstable (MCl₄ → MCl₂ + Cl₂); both tetrahydrides are unstable.

| Property | Tin | Lead |
|---|---|---|
| Allotropy | **shows it** (three forms) | none |
| Mark on paper | leaves no stain | leaves a stain |
| Ductility | more ductile | less |
| MO with silica | no reaction | \(\mathrm{PbO+SiO_2\rightarrow PbSiO_3}\) |
| MCl₂ with HCl | dissolves in both dilute and conc. | insoluble in dilute; forms H₂[PbCl₄]/H₂[PbCl₆] with conc. |
| MS₂ in yellow ammonium sulphide | soluble | insoluble |
| Stable state | Sn(IV) more stable, so **Sn(II) reduces** | Pb(II) more stable, so **Pb(IV) oxidises** |
| Organic acids | no reaction | dissolves; slowed in H₂SO₄ by insoluble PbSO₄ |
| conc. HNO₃ | metastannic acid formed | lead nitrate formed |
| Sulphur | Sn + 2S → SnS₂ | Pb + S → PbS |

## 6.10 Appendix: the gaseous fuels

These recur throughout Group 14 questions because they are all CO-based, and the composition is what gets tested.

| Fuel | Composition | Made by |
|---|---|---|
| **Producer gas** | CO + N₂ (CO ≈ 1/3) | incomplete combustion of coal/coke in a restricted air supply |
| **Water gas / synthesis gas / blue gas** | CO + H₂ (≈ 40 % CO, 50 % H₂, 5 % CO₂, 4–5 % N₂) | steam blown through red-hot coal at 1000–1400 °C |
| **Semi-water gas** | CO + H₂ + N₂ | combined air/steam blast |
| **Coal gas** | H₂ 56 %, CH₄ 22.8 %, CO 10.9 %, N₂ 5 %, CO₂ 1.3 %, unsaturateds 2.5 % | destructive distillation of coal at ≈ 1000 °C |
| **Oil gas / petrol gas** | CH₄, C₂H₆, C₂H₄, C₃H₈, C₄H₁₀ | cracking of kerosene |
| **Natural gas** | CH₄ 85 %, C₂H₆ 9 %, C₃H₈ 3 %, C₄H₁₀ 1 %, N₂ 2 % | natural deposits |

**Water gas has the higher calorific value** because *both* of its components burn, whereas in producer gas only the CO burns and the nitrogen is dead weight. A good gaseous fuel needs a high calorific value, must burn without smoke or offensive odour, and must burn at a moderate rate; gaseous fuels beat solid and liquid fuels because they leave no residue, lose less heat, and burn without smoke. Water gas's flame is short and hot, which is why it is used for welding, and its calorific value can be raised by **carburetting** — adding gaseous hydrocarbons. **LPG is a mixture of butane and isobutane.**

### Trap bank — Group 14 compounds

- **CO is neutral and has the highest bond energy of any diatomic** (1072 kJ mol⁻¹, above N₂). It is isoelectronic with N₂, CN⁻ and NO⁺.
- CO's toxicity is **carboxyhaemoglobin, ~300× more stable than oxyhaemoglobin**; the antidote is **carbogen** (95 % O₂ + 5 % CO₂), not pure O₂.
- CO₂ + OH⁻ gives **HCO₃⁻ with limited base and CO₃²⁻ with excess base.** Name the excess reagent before writing any product.
- **Marble + dilute HCl**, never H₂SO₄ (CaSO₄ coats the chips). In the ferrocyanide route, **conc.** H₂SO₄ only — dilute gives HCN.
- **Mg burns in CO₂.** A CO₂ extinguisher is useless — worse than useless — on a magnesium fire.
- **Be₂C and Al₄C₃ are methanides** (→ CH₄), not acetylides. **Mg₂C₃ is the only C₃⁴⁻ carbide** (→ propyne). Identify a carbide by its hydrolysis product.
- **Interstitial carbides keep metallic lustre and conductivity** because no new bond forms. Cr₃C₂ and Mn₃C are the hydrolysable exceptions.
- **Silica dissolves in HF only.** Store HF in polyethylene or wax, never glass.
- **Cyclic and single-chain silicates share the formula (SiO₃²⁻)ₙ** — you cannot classify from the formula alone.
- Double-chain (amphibole) silicates share **2 and 3** oxygens (average 2.5) and contribute **2.75** — the one non-integer row.
- In silicones, the **number of hydrolysable Cl decides the topology**: R₃SiCl stops chains, R₂SiCl₂ builds them, RSiCl₃ cross-links them. R₃SiCl on hydrolysis gives only a **dimer**.
- **Glass has no formula.** It is an amorphous supercooled silicate mixture; quote a composition range, never a stoichiometry. B₂O₃ gives Pyrex its low expansion; PbO gives flint glass its refractive index.
- **SnCl₂ solution always contains a piece of tin metal** to reduce the Sn(IV) formed by aerial oxidation; anhydrous SnCl₂ cannot be made by heating the hydrate.
- **PbCl₂ is soluble in hot water, sparingly in cold** — the separation trick in qualitative analysis.
- **Pb₃O₄ = 2PbO·PbO₂**, proved by HNO₃ leaving PbO₂ behind. **PbO₂ is the strongest oxidant** of the lead oxides but does **not** react with HNO₃.
- **Hard water is safer than soft water in lead pipes** — sulphate/phosphate/carbonate films suppress plumbo-solvency.
- Tin shows allotropy (tin pest below 13.2 °C) and has the most natural isotopes of any element; **lead shows no allotropy**.
- Water gas beats producer gas on calorific value because **both** its components burn.

# 7. Group 15: nitrogen, ammonia and nitrogen oxides

Members are N, P, As, Sb and Bi. Nitrogen is anomalous for the reasons in §1.2: small size, high electronegativity, no d orbitals, and a very strong N≡N triple bond (bond enthalpy ≈ 946 kJ mol⁻¹, among the strongest of any diatomic molecule). Common oxidation states span −3 to +5, with −3, +3 and +5 the most exam-relevant.

## 7.1 Dinitrogen: why it is inert yet essential

N₂ is comparatively unreactive at room temperature purely because of the enormous N≡N bond enthalpy (a **kinetic/thermodynamic bond-strength** argument, not a lack of a possible reaction pathway). High temperature, pressure and a catalyst are required to break this bond industrially.

## 7.2 Ammonia and the Haber process

Ammonia (NH₃) is trigonal pyramidal (sp³ N, one lone pair), highly water-soluble due to hydrogen bonding, a Lewis/Brønsted base, and a mild reducing agent in several reactions.

\[\mathrm{N_2+3H_2\rightleftharpoons2NH_3\qquad\Delta H^\ominus=-92.4\ \text{kJ mol}^{-1}}\]

Because the forward reaction is exothermic and reduces gas moles (4 mol → 2 mol), **high pressure and low temperature favour equilibrium yield** (Le Chatelier). Industrially, a compromise temperature (≈ 700 K) and pressure (≈ 200 atm) with an iron catalyst (promoted with Mo/K₂O/Al₂O₃) is used because very low temperature gives a high equilibrium yield but an impractically slow rate.

Ammonia reacts with excess chlorine to give nitrogen and HCl, but with excess ammonia (ammonia in excess over chlorine) the HCl formed is neutralised by the extra ammonia and **chloramine**, NH₂Cl, results instead:

\[\mathrm{8NH_3+3Cl_2\rightarrow N_2+6NH_4Cl\quad(\text{excess }NH_3)}\]
\[\mathrm{NH_3+Cl_2\rightarrow NH_2Cl+HCl\quad(\text{excess }Cl_2)}\]

**Always name which reagent is in excess before writing the product** — this reagent-ratio discipline recurs throughout p-block chemistry (§6.2).

## 7.3 Nitric acid and nitrogen oxides

Concentrated HNO₃ is a strong, oxidising acid. It **passivates** Fe, Cr and Al: a thin, adherent, unreactive oxide layer forms on the metal surface and prevents further reaction, which is why concentrated (cold) HNO₃ can be transported in aluminium/iron containers even though dilute HNO₃ attacks these metals vigorously.

NO is colourless and paramagnetic (odd number of valence electrons) and rapidly oxidises in air to brown NO₂:

\[\mathrm{2NO+O_2\rightarrow2NO_2}\]

NO₂ and N₂O₄ exist in a temperature-dependent equilibrium; N₂O₄ has a direct N–N bond joining two planar NO₂ units. **NO₂ is paramagnetic (odd-electron radical); N₂O₄ is diamagnetic** because the two odd electrons pair up across the new N–N bond. Lower temperature and higher pressure favour the diamagnetic dimer.

## 7.4 Phosphorus: white vs red, and PH₃ vs NH₃

White phosphorus contains discrete, strained P₄ tetrahedra (each P–P–P angle only 60°, far from the ideal ~109.5°, so the molecule is highly reactive and stored under water to prevent spontaneous aerial oxidation/ignition). Red phosphorus is a polymeric chain structure formed by opening one P–P bond per P₄ unit and linking units together; it is far less reactive, has a higher melting point, and is not phosphorescent or poisonous in the way white phosphorus is.

PH₃ is a much weaker base than NH₃: nitrogen's lone pair (small atom, high electronegativity, no diffuse orbital) is far more concentrated and available for donation than phosphorus's lone pair (larger atom, lower electronegativity, lone pair in a more diffuse, more s-character-dominated orbital). This also explains why NH₃ hydrogen-bonds extensively (high boiling point, 240 K vs the "expected" much lower value) while PH₃ shows negligible hydrogen bonding and boils near 185 K.

PCl₅ is trigonal bipyramidal (sp³d, 3 equatorial + 2 axial, D₃ₕ) in the gas phase; in the solid state it exists as the ionic lattice **[PCl₄]⁺[PCl₆]⁻** (tetrahedral cation + octahedral anion) — always specify the phase before assigning shape.

# 8. Group 15 deep dive: nitrogen, ammonia, nitrides and nitric acid

## 8.1 Nitrogen fixation and the different classes of nitride

The very large N≡N bond enthalpy (≈ 946 kJ mol⁻¹) makes atmospheric dinitrogen kinetically inert at ordinary temperatures despite the overall thermodynamics of many of its reactions being favourable. Biological nitrogen fixation (nitrogenase enzymes), atmospheric fixation by lightning, and the industrial Haber process are the three routes that convert this kinetically stable N₂ into more reactive, combined nitrogen. **Nitrides are not a single structural class**: ionic nitrides (Mg₃N₂, Ca₃N₂ — formed from a reactive metal and N₂ directly, containing discrete N³⁻ ions and hydrolysing cleanly to ammonia and the metal hydroxide), covalent nitrides (BN, with graphite-like and diamond-like polymorphs, §Group 13 diagonal relationship), and interstitial nitrides (formed by transition metals, where small N atoms occupy octahedral holes in the metal lattice, giving very hard, chemically inert, metallic-conducting solids) all have fundamentally different bonding, structure and hydrolysis behaviour, and must never be treated as one uniform "nitride" category:

\[\mathrm{Mg_3N_2+6H_2O\rightarrow3Mg(OH)_2+2NH_3}\]

## 8.2 Ammonia: laboratory preparation and diagnostic reactions

In the laboratory, ammonia is generated by heating an ammonium salt with a strong base such as slaked lime:

\[\mathrm{2NH_4Cl+Ca(OH)_2\xrightarrow{\Delta}2NH_3+CaCl_2+2H_2O}\]

Being lighter than air and extremely soluble in water, ammonia is collected by the **downward-displacement-of-air** method (never over water, into which it would simply dissolve). It turns moist red litmus paper blue (confirming its basic character) and forms dense white fumes of ammonium chloride on contact with HCl gas — a standard identification test:

\[\mathrm{NH_3+HCl\rightarrow NH_4Cl}\]

Drying the evolved ammonia gas requires a **basic** drying agent such as quicklime (CaO); acidic drying agents (conc. H₂SO₄, P₂O₅) react with and absorb the ammonia itself, while anhydrous CaCl₂ is unsuitable because it forms an addition compound, CaCl₂·8NH₃, rather than simply drying the gas.

## 8.3 The Ostwald process for nitric acid

Industrial nitric acid manufacture proceeds through three conceptual stages: catalytic oxidation of ammonia to NO (Pt/Rh gauze catalyst, ~ 500 K, ~ 9 atm), rapid non-catalytic oxidation of NO to NO₂ in air, and absorption of NO₂ in water to give nitric acid, with the by-product NO recycled back into the second stage:

\[\mathrm{4NH_3+5O_2\xrightarrow{Pt/Rh,\ \Delta}4NO+6H_2O}\]
\[\mathrm{2NO+O_2\rightarrow2NO_2}\]
\[\mathrm{3NO_2+H_2O\rightarrow2HNO_3+NO}\]

Because the NO liberated in the final absorption step is fed straight back into the second oxidation stage, a nitrogen-atom mass-balance across the recycled loop — rather than treating each equation as a one-way, terminal consumption of nitrogen — is the correct way to answer any "overall yield" or stoichiometry question on this process.

# 9. Nitrogen oxides, phosphorus allotropes and chlorides

## 9.1 Comparing the nitrogen oxides

| Oxide | Common name | Key feature |
|---|---|---|
| N₂O | nitrous oxide | neutral oxide; supports combustion of a glowing splint under suitable conditions; used as a mild anaesthetic |
| NO | nitric oxide | colourless, paramagnetic (odd electron); rapidly oxidised by air to brown NO₂ |
| N₂O₃ | dinitrogen trioxide | conventionally treated as the acid anhydride of nitrous acid, HNO₂ |
| NO₂ / N₂O₄ | nitrogen dioxide / dinitrogen tetroxide | brown, paramagnetic monomer in equilibrium with a colourless, diamagnetic dimer joined by a direct N–N bond |
| N₂O₅ | dinitrogen pentoxide | conventionally treated as the acid anhydride of nitric acid, HNO₃ |

Lower temperature and higher pressure both favour the diamagnetic dimer, N₂O₄, over the paramagnetic monomer, NO₂. The associated colour change (brown ⇌ colourless) and the magnetic change (paramagnetic ⇌ diamagnetic) both arise purely from this dimerisation **equilibrium**, not from any change in the oxidation number of nitrogen (which remains +4 throughout).

## 9.2 Phosphorus allotropes, compared precisely

White phosphorus is a molecular solid of discrete, highly strained P₄ tetrahedra (P–P–P bond angle only 60°, far below the natural ~ 100° preferred by phosphorus's bonding orbitals); this ring strain is exactly why it is so reactive, self-igniting in air near 303 K and consequently stored under water. Red phosphorus is a polymeric, chain-like structure obtained by breaking one P–P bond per P₄ unit and linking the resulting fragments; it is far less reactive, non-poisonous (unlike white phosphorus), does not glow in the dark, and has a substantially higher melting point. Black phosphorus, the thermodynamically most stable form, is a layered, graphite-like structure with the lowest reactivity of the three. **When a question asks which form is "most reactive," the correct answer must specify the particular allotrope and its structural reason (ring strain in P₄), never simply "phosphorus" as an unqualified element name.**

## 9.3 PCl₃ and PCl₅: hydrolysis and phase-dependent shape

PCl₃ hydrolyses completely and cleanly to phosphorous acid:

\[\mathrm{PCl_3+3H_2O\rightarrow H_3PO_3+3HCl}\]

PCl₅ hydrolyses completely (excess water) to phosphoric acid, though partial/controlled hydrolysis (limited water) instead gives phosphorus oxychloride, POCl₃, as an intermediate:

\[\mathrm{PCl_5+4H_2O\rightarrow H_3PO_4+5HCl}\]
\[\mathrm{PCl_5+H_2O\rightarrow POCl_3+2HCl}\quad(\text{limited water})\]

PCl₅'s structure is strictly **phase-dependent**: in the gas phase it is a discrete, trigonal-bipyramidal, sp³d-hybridised molecule (three equatorial + two longer axial P–Cl bonds — the axial bonds are longer and weaker because of greater repulsion from the three equatorial substituents); in the solid state it exists instead as an ionic lattice of tetrahedral [PCl₄]⁺ cations and octahedral [PCl₆]⁻ anions. The standard JEE hybridisation/VSEPR language predicts the gas-phase shape correctly, but **the phase must always be stated** before quoting a structure for PCl₅.

# 10. Group 15: phosphorus oxoacids and high-yield comparisons

In every phosphorus oxoacid, **only an O–H hydrogen is ionisable; a P–H hydrogen is not** (P–H is a genuine covalent bond to phosphorus with negligible polarity toward loss as H⁺). Drawing the structure and counting O–H groups gives basicity directly and reliably.

| Acid | Structural formula (bonds to P) | Basicity | Oxidation state of P | Reducing character |
|---|---|---:|---:|---|
| H₃PO₂ (hypophosphorous) | 1 O–H, 2 P–H, 1 P=O | 1 | +1 | Strongly reducing |
| H₃PO₃ (phosphorous) | 2 O–H, 1 P–H, 1 P=O | 2 | +3 | Reducing |
| H₃PO₄ (orthophosphoric) | 3 O–H, 0 P–H, 1 P=O | 3 | +5 | Not reducing |
| H₄P₂O₇ (pyrophosphoric) | 4 O–H, one P–O–P bridge | 4 | +5 | Not reducing |

Heating H₃PO₃ causes **disproportionation** (phosphorus simultaneously oxidised and reduced) to phosphoric acid and phosphine:

\[\mathrm{4H_3PO_3\xrightarrow{\Delta}3H_3PO_4+PH_3}\]

Hypophosphorous acid, H₃PO₂, is **monobasic despite the formula containing three hydrogens** — because two of its three hydrogens are bonded directly to phosphorus (P–H) and are not ionisable; only the single O–H hydrogen dissociates.

## 10.1 Oxidation-state discipline vs structural (basicity) discipline

For a **redox** question, assign the oxidation number of phosphorus first (use the whole-molecule formula and standard rules). For an **acidity/basicity** question, draw the actual connectivity first (identify how many oxygens carry an ionisable H). A bare molecular formula is not sufficient for either task in isolation — H₃PO₂ and H₃PO₃ both "look" like they could be tribasic from the formula alone, but structural analysis shows 1 and 2 respectively.

## 10.2 JEE trap

The word **"basicity"** of an acid asks strictly how many protons the acid can donate (i.e., how many replaceable/ionisable H atoms it has) — it is *not* the total count of H atoms in the formula, and it is *not* the oxidation number of phosphorus. Confusing any two of these three ideas is the single most common Group 15 error.

**Worked example 5.1.** *What is the basicity of pyrophosphorous acid, H₄P₂O₅?* Its structure has two PO(OH)(H) units bridged by one P–O–P oxygen, giving 2 ionisable O–H hydrogens and 2 non-ionisable P–H hydrogens — basicity = 2, even though the formula shows four hydrogens total.

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
