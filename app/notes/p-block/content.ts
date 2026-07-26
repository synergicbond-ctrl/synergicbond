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
- For an oxoacid, count ionisable O–H hydrogens; hydrogen attached directly to the central atom is normally non-ionisable (§10.5).

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
5. **Structures — and why boron is not a metal.** Boron is built from **icosahedral B₁₂ units**: each boron is bonded to **five equivalent neighbours at 1.77 Å** within its icosahedron, and in the simplest form (α-rhombohedral boron) each icosahedron is bonded to six others at 2.03 Å. β-rhombohedral boron is built on a larger B₈₄ = B₁₂ + B₁₂ + B₆₀ unit. The decisive point: **icosahedra pack space very inefficiently — only 37 % of space is occupied, against 74 % for a close-packed metal.** Boron therefore has a rigid, directional, covalent lattice rather than a metallic one, which is exactly why it is hard, extremely high-melting and non-metallic. Al, In and Tl have ordinary close-packed metal structures. Gallium is the oddity: each Ga has **one** nearest neighbour at 2.70 Å and six more distant ones at 2.73 and 2.79 Å, i.e. **discrete Ga₂ molecules embedded in a metallic lattice**. Density rises monotonically B → Tl with atomic mass.

## 2.3 Oxidation states: the inert-pair effect, quantified

Down the group the ns² pair becomes progressively reluctant to participate in bonding, so **stability of +3 falls and stability of +1 rises**:

\[\mathrm{stability\ of\ M^{3+}:\ Al^{3+}>Ga^{3+}>In^{3+}>Tl^{3+}};\qquad \mathrm{stability\ of\ M^{+}:\ Tl^{+}>In^{+}>Ga^{+}>Al^{+}}\]

Consequences to have ready:

- **Tl³⁺ is a strong oxidising agent** (it "wants" Tl⁺); **Ga⁺ is a strong reducing agent** (it "wants" Ga³⁺). Ga⁺ reduces more readily than In⁺ precisely because Ga⁺ is the *less* stable of the two — **lower stability, greater reducing character**.
- E°(Tl³⁺/Tl) = +1.26 V is positive, so for thallium ΔG° = −nFE° for M → M³⁺ + 3e⁻ is *positive*: Tl³⁺ does not form spontaneously in solution, whereas for Al (E° = −1.66 V) it does.
- Ga⁺ and In⁺ **disproportionate** in water: \(\mathrm{3GaX\rightarrow 2Ga+GaX_3}\), \(\mathrm{3InX\rightarrow 2In+InX_3}\).
- Compounds in the +1 state are *more ionic* than those in the +3 state (lower charge, larger cation, less polarising).
- A quantitative handle: the ns → np promotion gap ΔE = E(np) − E(ns) in eV is B 4.5, Al 4.5, **Ga 6.0**, In 5.3, **Tl 7.0** (continuing to Pb 9.0, Bi 10.0, Po 12.0, At 16.0). The jumps at Ga and Tl are the energetic signature of the effect.

> **Read the effect honestly.** "Inert pair" is a label, not a mechanism — it merely *describes* what happens, namely that two electrons do not take part in bonding. The reason they do not is **energy**: the mean M–Cl bond energy falls steadily down the group,
>
> \[\mathrm{GaCl_3\ 242\ >\ InCl_3\ 206\ >\ TlCl_3\ 153\ kJ\ mol^{-1}}\]
>
> so by thallium the energy released on forming two extra bonds no longer repays the energy needed to unpair and promote the ns² electrons — and the pair is "most likely to be inert in thallium." Poor d/f shielding and (for the sixth period) relativistic contraction of the 6s orbital reinforce this. Never write "because the inert pair is inert."

Note also that the group state being **covalent** is itself an energy argument, and Fajans' rules say why: the ions would be small and carry a high 3+ charge (both favouring covalency), ΣIE₁₊₂₊₃ is very large, and the electronegativities are higher than in Groups 1 and 2, so the electronegativity difference to most partners is too small for ionic bonding. The apparent exception proves the rule — **anhydrous AlCl₃ is covalent, but it ionises in water** because hydration pays the bill:

\[\Delta H_{\mathrm{hyd}}(\mathrm{Al^{3+}})=-4665,\quad \Delta H_{\mathrm{hyd}}(\mathrm{Cl^-})=-381\ \Rightarrow\ -4665+3(-381)=\mathbf{-5808\ kJ\ mol^{-1}}\]

which **exceeds ΣIE₁₊₂₊₃ = 5137 kJ mol⁻¹**. This is why Al³⁺ compounds are ionic when hydrated and covalent when anhydrous.

## 2.3a Thallium(I): the element that behaves like an alkali metal

Because the +1 state dominates for thallium, Tl⁺ deserves separate treatment — and it is examined precisely because it sits between two other groups in behaviour.

**Tl⁺ resembles the Group 1 metals.** Its ionic radius, **1.50 Å, lies between K⁺ (1.38 Å) and Rb⁺ (1.52 Å)**, so:

- **TlOH and Tl₂O are water-soluble and strongly basic** — quite unlike the amphoteric Al(OH)₃ or the trivalent Tl(OH)₃. They **absorb CO₂ from the air**, forming Tl₂CO₃, exactly as KOH does.
- Most Tl(I) salts have solubilities a little lower than the corresponding Group 1 salts.
- **Tl⁺ can replace K⁺ in some enzymes**, and is used as a biological tracer for that reason.
- Differences: **TlOH is yellow**, and on heating to 100 °C it turns into black Tl₂O; the coordination number of Tl⁺ is usually 6 or 8 rather than 6.

**But Tl⁺ also resembles Ag⁺** — and the discriminating test is worth memorising:

- **TlF is soluble in water, but TlCl, TlBr and TlI are almost insoluble** (compare AgCl, AgBr, AgI).
- **TlCl darkens on exposure to light**, just as AgCl does.
- **The separation: TlCl is *not* soluble in NH₄OH, whereas AgCl *is*** (AgCl dissolves as [Ag(NH₃)₂]⁺).

**A general principle falls out of this**, and it applies right across the p-block: *where an element exists in more than one valency state, the lowest valency state gives the most basic oxide and hydroxide.* Hence TlOH (strong base) versus Tl(OH)₃, and In₂O₃/Tl₂O being purely basic while Al₂O₃/Ga₂O₃ are amphoteric — indeed **Tl₂O₃ and In₂O₃ form neither hydrates nor hydroxides at all**.

Thallium(I) compounds are typically colourless and **extremely poisonous**: traces turn the hair white, and larger doses cause loss of hair and death, because they disrupt enzyme systems. Thallium(III) acetate and trifluoroacetate, made by dissolving the oxide in the appropriate acid, are reagents for making organothallium compounds.

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
- **Gallium's melting-point anomaly is a solid-state effect only.** Its *boiling* point is perfectly in line with the group, because the Ga₂ structure no longer exists in the liquid. Quote the right property.
- **Tl⁺ resembles K⁺/Rb⁺** (TlOH a water-soluble strong base that absorbs CO₂) **and Ag⁺** (insoluble, light-sensitive halides). The one test that separates it from silver: **TlCl does not dissolve in NH₄OH; AgCl does.**
- Tl₂O₃ and In₂O₃ form **no hydroxides or hydrates**. Do not write "Tl(OH)₃ is basic" — write that Tl₂O/TlOH is.
- The inert-pair effect is an **energy** argument (falling M–Cl bond energy: 242 → 206 → 153 kJ mol⁻¹), not a property of the electrons themselves.

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

Overall: \(\mathrm{Na_2[B_4O_5(OH)_4]\cdot 8H_2O+2HCl\rightarrow 2NaCl+4H_3BO_3+5H_2O}\); on cooling, white flakes of boric acid separate. **Use methyl orange (pH 3.1–4.4), never phenolphthalein.** The quantitative reason: the second reaction above titrates at **pH 9.2**, so the indicator must have pKₐ below about 8 — otherwise it would respond to the weak H₃BO₃ being produced rather than to the end point.

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

The tetrahedral **[BF₄]⁻ ion closely resembles ClO₄⁻ and SO₄²⁻** in both structure and solubility — KBF₄ and KClO₄ are both only sparingly soluble in water. Like perchlorate, **[BF₄]⁻ has very little tendency to form complexes in aqueous solution**, which is precisely why both are used as "innocent", weakly coordinating counter-ions.

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
| Complex borate (3- **and** 4-coordinate B) | [B₄O₅(OH)₄]²⁻, [B₅O₆(OH)₄]⁻ | borax; K[B₅O₆(OH)₄], a **spiro** compound of one tetrahedral + four triangular units |
| Peroxoborate | [(OH)₂B(O–O)₂B(OH)₂]²⁻ | sodium peroxoborate |

Worked examples of the polymerisation: **two** triangles sharing one corner give the pyroborates Mg₂[B₂O₅] and Co[B₂O₅] (named by analogy with pyrophosphates); **three** triangles sharing corners close into a ring in NaBO₂ and KBO₂, better written **Na₃[B₃O₆]** and **K₃[B₃O₆]**; many triangles polymerise into an infinite chain, as in calcium metaborate **[Ca(BO₂)₂]ₙ**. Discrete *tetrahedral* units occur in Na₂[B(OH)₄]Cl, and two tetrahedra share a corner in Mg[(HO)₃B·O·B(OH)₃].

### The structural rules — and the one contrast that matters most

Borate structures follow five principles (Christ and Clark):

1. Boron often forms **triangular BO₃** units; these may stay monomeric or polymerise by sharing corner oxygens into chains, rings and **flat two-dimensional sheets**.
2. Boron sometimes forms **tetrahedral BO₄** units; complex polynuclear borates contain **both** BO₃ and BO₄ linked by shared corners, and these structures are **not flat**.
3. Hydrated borates may accept protons, in the order: O²⁻ → OH⁻ first, then tetrahedral boron, then oxygen in planar triangles, and finally free OH⁻ → H₂O.
4. Hydrated borates may polymerise by eliminating water, sometimes followed by breaking and rearranging B–O bonds.
5. B₂O₃ often exists alongside the more complex polyanions.

> **The high-yield contrast.** Boron, silicon and phosphorus all form polymeric oxo-anions — these are the **isopolyacids** ("iso" = only one kind of acidic ion polymerises; when two different ions polymerise together, as in phosphomolybdate, you get a **heteropolyacid**). But their behaviour in water is completely different:
>
> **Borate polymers break up when dissolved in water. Silicate and phosphate polymers do not.**
>
> The reason is structural: silicates and phosphates are built *exclusively* on tetrahedral SiO₄ and PO₄ units, which polymerise into chains, rings and three-dimensional frameworks that are rather stable. Borate polymers mix three- and four-coordinate boron and are held together far more loosely. This is why you can speak of a silicate *mineral* but must speak of borate *equilibria* — and it is exactly why borax dissolves to give a mixture of B(OH)₃ and [B(OH)₄]⁻ rather than an intact [B₄O₅(OH)₄]²⁻ ion.

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
- HBF₄ is a **strong** acid even though H₃BO₃ is very weak — fluoride completes boron's octet and delocalises the charge over four F. [BF₄]⁻ behaves like ClO₄⁻: tetrahedral, poorly complexing, KBF₄ sparingly soluble.
- Boric acid on heating gives HBO₂ then H₂B₄O₇ then B₂O₃ — three products, in that order, at three different temperatures. Balance it correctly: **4HBO₂ → H₂B₄O₇ + H₂O** (one water, not two).
- **Borate polymers break up in water; silicate and phosphate polymers do not.** Borates mix BO₃ and BO₄ units; silicates and phosphates are built only on tetrahedra. Never reason about borate solutions as though the solid anion survived intact.
- Both borates and silicates are **isopolyacids** (one kind of ion polymerising). A *hetero*polyacid needs two different ions, e.g. phosphomolybdate.

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

> **Do not carry the boron order across to silicon — it inverts.** For silicon the halide Lewis acidity runs the *normal* electronegativity way:
>
> \[\mathrm{BF_3<BCl_3<BBr_3<BI_3}\qquad\text{but}\qquad \mathrm{SiF_4>SiCl_4>SiBr_4>SiI_4}\]
>
> Boron's order is inverted because **π back-donation into a compact 2p orbital is decisive** and is strongest for fluorine. Silicon is larger, its acceptor orbitals are d-type, back-bonding is far less effective, and **steric crowding by the bigger halogens counts against them** — so electronegativity wins and the fluoride is the strongest acid. Related orders that follow the same silicon-type logic:
>
> \[\mathrm{SnF_4>SnCl_4>SnBr_4>SnI_4};\quad \mathrm{Me_3SnF>Me_3SnCl>Me_3SnBr};\quad \mathrm{RMX_3>R_2MX_2>R_3MX}\ (M=\mathrm{Si,\ Ge,\ Sn,\ Pb})\]
> \[\mathrm{PF_5>PCl_5};\qquad \mathrm{BF_3>B_2H_6>Me_3B}\]
>
> "Which is the stronger Lewis acid, BF₃ or BI₃? SiF₄ or SiI₄?" asked together is a single question testing whether you know *why* the boron series is anomalous.

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

**Monohalides.** Pushing further, boron forms a series of stable polymeric **monohalides (BX)ₙ**. Electric discharge through B₂Cl₄ gives B₄Cl₄, B₈Cl₈, B₉Cl₉, B₁₀Cl₁₀, B₁₁Cl₁₁ and B₁₂Cl₁₂. In the crystalline members (B₄Cl₄, B₈Cl₈, B₉Cl₉) the boron atoms form a **closed cage or polyhedron, each boron bonded to three other borons and one chlorine.** With only three valence electrons per boron there are nowhere near enough electrons for normal pairs, so **multi-centre σ bonds spread over the whole cage** — the same principle as the boranes, applied to halides.

Al, Ga and In also form monohalides MX, but only **in the gas phase at high temperature**, and they are covalent and not very stable:

\[\mathrm{AlCl_3+2Al\xrightarrow{high\ T}3AlCl}\]

Thallium is the exception that proves the inert-pair rule: **thallous (Tl(I)) halides are more stable than the thallic (Tl(III)) trihalides, and TlF is ionic.**

## 4.3 Aluminium halides: ionic AlF₃ versus bridged Al₂Cl₆

**AlF₃ is ionic** with a high melting point; AlCl₃, AlBr₃ and AlI₃ are essentially **covalent** when anhydrous. Coordination number tells the whole story:

| | AlF₃ | AlCl₃ | AlBr₃ | AlI₃ |
|---|---|---|---|---|
| Solid | CN 6 (ionic lattice) | CN 6 (close-packed Cl⁻ with Al³⁺ in octahedral holes) | CN 4 (dimer) | CN 4 (dimer) |
| Melt / fused | — (sublimes) | CN 4 (Al₂Cl₆) | CN 4 | CN 4 |
| Vapour | monomer AlF₃ | Al₂Cl₆ dimer, → planar AlCl₃ monomer on strong heating | Al₂Br₆ | Al₂I₆ |

So AlCl₃ passes through **three** structural regimes: an octahedral CN 6 lattice in the cold solid; **Al₂Cl₆ dimers** (CN 4) once it melts or sublimes near 180 °C, with a large jump in volume; and monomeric, trigonal-planar AlCl₃ only on strong heating (≈ 1073 K). That volume jump on heating is a direct sign of how close this compound sits to the ionic/covalent borderline.

**The Al₂Cl₆ bridge is *not* the diborane bridge.** Two chlorines bridge the two aluminiums, each donating a lone pair so that both Al reach a tetrahedral octet. The molecule is **non-planar**, with bridging Al–Cl 221 pm and terminal Al–Cl 206 pm, ∠Al–Cl–Al ≈ 79°, ∠Cl–Al–Cl(bridge) ≈ 101° and terminal ∠Cl–Al–Cl ≈ 118°. Counting bonds: **four normal 2c–2e terminal bonds plus two electron-*rich* 3c–4e bridges** (each Cl brings a lone pair to the bridge).

~~~viz
{
  "type": "MulticentreBond",
  "caption": "Al₂Cl₆: the same shape as diborane, but each bridge holds four electrons, not two",
  "describe": "Two aluminium atoms are bridged by two chlorine atoms, each of which donates a full lone pair. Each bridge cloud carries four electron dots, in contrast to the two dots of a diborane bridge. Bridging Al-Cl is 221 pm against a terminal 206 pm.",
  "spec": {
    "left": "Al",
    "right": "Al",
    "bridge": ["Cl", "Cl"],
    "electronsPerBridge": 4,
    "terminals": { "left": ["Cl", "Cl"], "right": ["Cl", "Cl"] },
    "lengths": { "bridge": "221 pm", "terminal": "206 pm" }
  },
  "results": [
    "chlorine has lone pairs to give, so the bridge is electron-RICH 3c–4e",
    "hydrogen and methyl have none, so their bridges are electron-POOR 3c–2e"
  ]
}
~~~

> **Learn the three bridges together — this is the single highest-yield structural set in the chapter.**
>
> | Dimer | Bridging atom | Bridge type | Why |
> |---|---|---|---|
> | **Al₂Cl₆** | Cl | **3c–4e** (electron-**rich**) | chlorine donates a full lone pair |
> | **B₂H₆** | H | **3c–2e** (electron-**deficient**) | hydrogen has only one electron to give |
> | **Al₂(CH₃)₆** | CH₃ | **3c–2e** (electron-**deficient**) | carbon has no lone pair to donate |
>
> Aluminium trimethyl is genuinely dimeric, with three-centre bonds using **sp³ hybrid orbitals on both Al and C in the Al–C–Al bridges**. So the bridge type is decided by *what the bridging atom brings*, not by which metal is bridged. Asking "is this bridge 3c–2e or 3c–4e?" is a standard JEE Advanced discriminator.

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
| Made by | Al(OH)₃ or γ-Al₂O₃ **above 1000 °C** | Al(OH)₃ **below 450 °C** |
| Structure | hexagonal — **corundum**: hcp O²⁻ with **two-thirds of the octahedral holes filled by Al³⁺** | non-hexagonal, defect spinel |
| Hardness | very hard (**Mohs 9**), mp above 2000 °C | soft |
| Surface area | low | **high, porous** |
| Acids | **unaffected by acids** | **dissolves in acids**, and absorbs water |
| Uses | abrasive (grinding wheels, sandpaper), refractory furnace linings, jewellers' rouge for polishing glass | **dehydrating agent, adsorbent, chromatography, catalyst support** |

The α ↔ γ distinction is examined through the acid test: **α-Al₂O₃ resists acid, γ-Al₂O₃ dissolves in it.** **Emery** is an impure corundum contaminated with iron oxide and silica — the abrasive on emery paper. A third, **fibrous** form (Saffil) is made commercially by heating alumina/zirconia sols: hollow, flexible, chemically inert fibres that survive prolonged heating to 1400 °C, woven into rope and fabric and used to stiffen metals — **aluminium reinforced with 50 % Saffil fibres is five times stiffer than pure aluminium.**

Traces of transition-metal oxides give the gemstones, all of them **mixed oxides**: **ruby** (Cr³⁺, made synthetically by heating Al₂O₃ + Cr₂O₃ in an oxy-hydrogen flame; hard enough for watch and instrument bearings as well as jewellery), **blue sapphire** (Fe²⁺, Fe³⁺ *and* Ti⁴⁺ together), white sapphire (gem-quality pure corundum), oriental topaz (Fe³⁺), oriental emerald (Cr³⁺/V³⁺). The general mixed-oxide type is Mᴵᴵ Mᴵᴵᴵ₂O₄, the **spinel** structure named after MgAl₂O₄.

**Al(OH)₃ is amphoteric**, but its acidic side is very weak — and the proof is that **CO₂ reprecipitates it from aluminate solution**:

\[\mathrm{Al_2O_3+6HCl\rightarrow 2AlCl_3+3H_2O};\qquad \mathrm{Al_2O_3+2NaOH+3H_2O\rightarrow 2Na[Al(OH)_4]}\]
\[\mathrm{Na[Al(OH)_4]\xrightarrow{CO_2}Al(OH)_3\downarrow}\]

**What "aluminate" actually is** depends on pH and concentration — the formula NaAlO₂·2H₂O is a convenient fiction, and Raman spectra show three regimes:

1. **pH 8–12:** the ions **polymerise through OH bridges**, and each aluminium is **octahedrally** coordinated.
2. **Dilute solution above pH 13:** the tetrahedral **[Al(OH)₄]⁻** ion exists.
3. **Concentrated (above 1.5 M) and above pH 13:** it exists as the **dimer [(HO)₃Al–O–Al(OH)₃]²⁻**.

**Qualitative analysis for aluminium.** Al(OH)₃ is precipitated as a **white gelatinous** solid by adding NH₄OH (after removing acid-insoluble sulphides with H₂S). Distinguish it from its neighbours by colour and by the excess-reagent tests:

| Hydroxide | Appearance | In excess NH₄OH |
|---|---|---|
| Fe(OH)₃ | red-brown | insoluble |
| Cr(OH)₃ | grey-green / grey-blue | insoluble |
| **Zn(OH)₂** | white | **dissolves** |
| **Al(OH)₃** | **white gelatinous** | **does not dissolve** |

The **confirmatory test for aluminium is the formation of a red precipitate (lake) from Al(OH)₃ and the dye alizarin.** For quantitative work, **8-hydroxyquinoline** gives the standard gravimetric determination of aluminium.

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

~~~viz
{
  "type": "MulticentreBond",
  "caption": "Diborane: four normal terminal bonds and two three-centre two-electron bridges",
  "describe": "Two boron atoms each carry two terminal hydrogens. Two further hydrogens bridge the borons above and below the BH2 plane. Each bridge is drawn as a shaded cloud holding two electron dots, showing that one electron pair is spread over three atoms. The bridging B-H distance of 133 pm is longer than the terminal 119 pm.",
  "spec": {
    "left": "B",
    "right": "B",
    "bridge": ["H", "H"],
    "electronsPerBridge": 2,
    "terminals": { "left": ["H", "H"], "right": ["H", "H"] },
    "lengths": { "bridge": "133 pm", "terminal": "119 pm" }
  },
  "results": [
    "12 valence electrons: 8 in four terminal bonds, 4 in two bridges",
    "bond order per bridging B-H contact = one half"
  ]
}
~~~

~~~viz
{
  "type": "OrbitalDiagram",
  "caption": "Boron cannot reach an octet with three bonds — the deficiency diborane has to cure",
  "describe": "Ground-state boron has one electron in 2s paired and one unpaired 2p electron. On promotion, three singly occupied orbitals are available for three sigma bonds, leaving the fourth sp3 orbital empty. That empty orbital is what the hydrogen bridge fills.",
  "rows": [
    { "title": "B ground state", "shells": [ { "label": "2s", "boxes": [2] }, { "label": "2p", "boxes": [1, 0, 0] } ], "note": "1 unpaired — cannot make 3 bonds" },
    { "title": "B excited state", "shells": [ { "label": "2s", "boxes": [1] }, { "label": "2p", "boxes": [1, 1, 0], "mark": true } ], "note": "3 unpaired + 1 empty orbital" }
  ]
}
~~~

**How we know the bridges are different from the terminal bonds** — three independent pieces of evidence, and this is exactly the kind of "justify the structure" question that gets asked:

1. The two bridging H lie in a plane **perpendicular** to the rest of the molecule and **prevent rotation** about the B···B axis; **specific-heat measurements confirm the rotation is hindered.**
2. **Raman spectra** show four of the hydrogens are in a different environment from the other two.
3. **Diborane cannot be methylated beyond Me₄B₂H₂ without breaking the molecule into BMe₃.** Exactly the **four terminal** hydrogens are substitutable; the **two bridging** hydrogens are not. Nothing could distinguish the two environments more cleanly.

**The five bond types in the boranes.** Higher boranes have open-cage structures needing both normal and multi-centre bonds, and every borane structure is assembled from just these five:

1. terminal B–H — normal **2c–2e**
2. B–B — normal **2c–2e**
3. B–H–B hydrogen bridge — **3c–2e**
4. **open** B–B–B bridge ("open boron bridge bond") — **3c–2e**
5. **closed** 3c–2e bond between three B atoms

**STYX bookkeeping** counts exactly these: s = number of B–H–B bridges, t = number of B–B–B three-centre bonds, y = number of B–B bonds, x = number of BH₂ groups. For **B₂H₆: s = 2, t = 0, y = 0, x = 2.**

**Physical data for the two series** (useful for "which is a solid?" questions):

| nido BₙHₙ₊₄ | mp / °C | bp / °C | arachno BₙHₙ₊₆ | mp / °C | bp / °C |
|---|---|---|---|---|---|
| B₂H₆ diborane | −165 | −93 | B₄H₁₀ tetraborane | −120 | 18 |
| B₅H₉ pentaborane-9 | −47 | 60 | B₅H₁₁ pentaborane-11 | −122 | 65 |
| B₆H₁₀ hexaborane-10 | −62 | 108 | B₆H₁₂ hexaborane-12 | −82 | — |
| B₁₀H₁₄ decaborane | −100 | 213 | B₉H₁₅ nonaborane | 3 | — |

Most higher boranes are liquids; **B₄H₁₀ and B₁₀H₁₄ are solids.** As molecular weight rises they become more stable and **less sensitive to water — B₁₀H₁₄ can even be recovered from aqueous solution.** They were developed as high-energy rocket fuels to replace hydrocarbons in military aircraft and missiles, and over a tonne of B₁₀H₁₄ was made; the programme collapsed when combustion to B₂O₃ proved incomplete and **an involatile BO polymer blocked the rocket nozzles.**

Heating diborane in a sealed tube builds the higher boranes through the transient BH₃ intermediate; the exact product depends on the conditions:

\[\mathrm{B_2H_6\xrightarrow[200\ atm]{5\ h,\ 80-90^{\circ}C}B_4H_{10}};\quad \mathrm{B_2H_6+H_2\xrightarrow{200-250^{\circ}C}B_5H_9};\quad \mathrm{B_2H_6\xrightarrow[\text{sealed tube}]{slow,\ 150^{\circ}C}B_{10}H_{14}}\]

**Carboranes.** Decaborane-14 has ten borons — **two short of the twelve corners of a regular icosahedron** (12 corners, 20 faces), which is a particularly stable closed cage. Supplying the two missing vertices completes it, either with two carbons from an alkyne or with two more borons:

\[\mathrm{B_{10}H_{14}+RC{\equiv}CR\rightarrow B_{10}C_2H_{10}R_2}\qquad(\textbf{orthocarborane})\]
\[\mathrm{B_{10}H_{14}+2Me_3N{\rightarrow}BH_3\rightarrow 2[Me_3NH]^+[B_{12}H_{12}]^{2-}}\qquad(\textbf{closo}\ [B_{12}H_{12}]^{2-})\]

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

> **B₂H₆ and NaBH₄ reduce in opposite senses — do not confuse them.**
>
> - **NaBH₄ is nucleophilic**: the hydride attacks sites of **low** electron density. C=C, COOH and NO₂ survive.
> - **B₂H₆ is electrophilic**: boron is electron-deficient, so it attacks sites of **high** electron density — the nitrogen of cyanides and nitriles, and the oxygen of carbonyls.
>
> \[\mathrm{R{-}C{\equiv}N\rightarrow RCH_2NH_2};\qquad \mathrm{R{-}NO_2\rightarrow RNH_2};\qquad \mathrm{R{-}CHO\rightarrow RCH_2OH}\]
>
> So diborane reduces a nitro group and a nitrile, which NaBH₄ leaves alone. That difference is the whole reason diborane is a distinct reagent in organic synthesis rather than a clumsy substitute for borohydride.

**Covalent borohydrides.** Be(BH₄)₂, Al(BH₄)₃ and Zr(BH₄)₄ are volatile and covalent, because [BH₄]⁻ stops being an anion and becomes a **ligand**: one or more of its hydrogens bridges to the metal in a **3c–2e bond**. The number of bridges varies — **one, two or three** — and the count is examinable: **in the Al and Zr compounds each [BH₄]⁻ uses two hydrogen bridges, whereas in Be(BH₄)₂ two of the three [BH₄]⁻ groups use three bridges each.** With two bridges per ligand in Al(BH₄)₃ the coordination number of Al is **6**. \(\mathrm{BeCl_2+2LiBH_4\rightarrow Be(BH_4)_2+2LiCl}\). (AlH₃)ₙ is a white involatile polymer held together by 3-centre hydrogen bridges like diborane's; (GaH₃)₂ is dimeric in the vapour and decomposes above 253 K; (InH₃)ₙ is polymeric in both vapour and solid. Li[AlH₄] is made from LiH + AlCl₃ with excess LiH and, unlike Na[BH₄], cannot be used in water.

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

**Borides and boron carbide.** Over 200 binary metal borides are known, with stoichiometries as varied as M₂B, MB, MB₂, MB₄, MB₆ and even M₅B and MB₆₆; many are **non-stoichiometric** and, like the boranes, can only be explained by multi-centre bonding. The metal-rich borides are mostly with transition metals, and they are startling materials: **ZrB₂, HfB₂, NbB₂ and TaB₂ all melt above 3000 °C**, and both melting point and electrical conductivity are often *higher* than for the parent metal — **TiB₂ conducts five times as well as titanium metal.** They are chemically inert, and are powder-fabricated into turbine blades and rocket nozzles.

**Boron carbide, B₄C (norbide)**, is made by reducing B₂O₃ with carbon, or as fibres of enormous tensile strength for bullet-proof clothing:

\[\mathrm{2B_2O_3+7C\xrightarrow{1600^{\circ}C}B_4C+6CO};\qquad \mathrm{4BCl_3+6H_2+C_{fibre}\xrightarrow{1700-1900^{\circ}C}B_4C_{(fibre)}+12HCl}\]

The formula is conventional only: **B₄C is more correctly B₁₃C₂**, and the composition varies towards B₁₂C₃. The structure is again **B₁₂ icosahedra**, each linked to six others through either four B–C–B plus two B–B linkages, or through six B–C–B linkages — a cluster compound explicable only by multi-centre bonding. Because **¹⁰B has a very high thermal-neutron capture cross-section**, boron steel and B₄C are used for reactor control rods and shielding; B₄C is also an abrasive and is used for brake linings, and boron fibres reinforce aircraft composites.

Practical hardness ranking among the industrial abrasives: **diamond > cubic BN > B₄C > SiC** (some nanostructured c-BN rivals or exceeds diamond, which is why a few textbooks place BN first — treat "BN is harder than diamond" as a claim about special nanostructured c-BN, not about BN in general).

### Trap bank — halides, hydrides and aluminium compounds

- Lewis acidity **BF₃ < BCl₃ < BBr₃ < BI₃** — the *reverse* of electronegativity. The reason is back-bonding and the π stabilisation lost on adduct formation, never electronegativity.
- **BF₃ hydrolyses only partially** (→ H₃BO₃ + HBF₄); BCl₃/BBr₃/BI₃ hydrolyse completely. In moist air BF₃ fumes but is not fully hydrolysed.
- **Al₂Cl₆ bridges are 3c–4e** (chlorine lone-pair donation); **B₂H₆ bridges are 3c–2e**; **Al₂(CH₃)₆ bridges are 3c–2e** (carbon has no lone pair to give). The bridging *atom* decides, not the metal.
- **B₂H₆ is electrophilic and attacks high electron density** (reduces nitriles and nitro groups); **NaBH₄ is nucleophilic and attacks low electron density** (leaves C=C, COOH, NO₂ alone). Opposite senses.
- α-Al₂O₃ is **unaffected by acids**; γ-Al₂O₃ **dissolves** in them. And γ forms below 450 °C, α above 1000 °C.
- Al(OH)₃'s confirmatory test is the **red alizarin lake**; the gravimetric reagent is **8-hydroxyquinoline**.
- "NaAlO₂·2H₂O" is shorthand. The real species is octahedral and polymeric at pH 8–12, tetrahedral [Al(OH)₄]⁻ in dilute solution above pH 13, and a **dimer** when concentrated.
- **B₄C is really B₁₃C₂**, built from B₁₂ icosahedra — not a simple stoichiometric carbide.
- In covalent borohydrides [BH₄]⁻ is a **ligand** bonding through 3c–2e H bridges: **two** bridges in Al(BH₄)₃ and Zr(BH₄)₄, **three** for two of the ligands in Be(BH₄)₂.
- "GaCl₂"-type formulas and the monohalides are traps: (BX)ₙ are **cage clusters**, AlCl exists only as a hot gas, and **thallous halides are more stable than thallic**.
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

> **A note on the numbers.** Textbooks disagree here. The set above (Si–Si 222, Ge–Ge 188, Sn–Sn 146) is the one used across JEE coaching material and is what you should quote. J. D. Lee gives a different set — **C–C 348, Si–Si 297, Ge–Ge 260, Sn–Sn 240 kJ mol⁻¹** — with the practical remark that Si forms chains only up to about Si₆H₁₄ in the hydrides, Ge up to Ge₉H₂₀, and Sn only the dimer Sn₂H₆. **The trend and its consequences are identical either way; only the absolute values differ.** Reason with the trend, not the digits.

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

- **Layered**: each layer a plane of fused hexagons — "a fused system of benzene rings" — every carbon **sp²**, three σ bonds to neighbours at **C–C = 141 pm** within the layer (compare benzene, 140 pm), with the fourth electron in a delocalised π system spread over the whole sheet.
- Layers held only by **van der Waals forces**, separated by **335 pm** (340 pm is also quoted) — appreciably more than twice the covalent radius of carbon (2 × 154 = 308 pm) — so they slide over one another: graphite is **soft, slippery and lustrous**, density 2.22 g cm⁻³. The atoms **do not pack together to fill space very effectively**, which is why graphite is less dense than diamond (3.51 g cm⁻³).
- **Two forms, distinguished by how the sheets stack** — and the interconversion is a neat exam point:
  - **α-graphite: hexagonal, ABAB stacking** (every third layer eclipses the first).
  - **β-graphite: rhombohedral, ABCABC stacking.**
  - **Heating β-graphite converts it to α; grinding α-graphite converts it to β.**
- **Conducts electricity well within a layer** (mobile π electrons) and poorly between layers. Uses: dry high-temperature lubricant where oil would fail, electrodes for batteries and industrial electrolysis, crucibles (inert to dilute acids and alkalis), pencil "lead", graphite-fibre composites for tennis rackets, fishing rods, aircraft and canoes.
- **Diamond is extremely unreactive; graphite is quite reactive** — that asymmetry is the framing to carry into every comparison. Graphite is oxidised by hot conc. HNO₃ to **mellitic acid**, benzene hexacarboxylic acid C₆(COOH)₆ — a striking confirmation of the fused-hexagon skeleton — and by hot conc. HF/HNO₃ to graphite oxide. Diamond is unaffected by concentrated acids.
- **Its lubricating action depends on adsorbed gas.** In high vacuum, or with the adsorbed layer stripped, graphite is a *poor* lubricant — the interlayer interactions are not weak enough on their own.

### 5.4a Graphite compounds — three classes, and what each does to the conductivity

Because the interlayer gap is wide and the interlayer bonding weak, a remarkable range of species can **invade the space between the sheets** without destroying them. Whether the product conducts better or worse than graphite is decided entirely by what happens to the delocalised π system, and that is the question worth being able to answer.

**(i) Electron-donor (alkali-metal) intercalation compounds — conductivity *increases*.**

Heating graphite above 300 °C with the vapour of the heavier Group 1 metals (K, Rb, Cs) — or treating it with the metal in liquid ammonia — gives a bronze compound **C₈M**. Heating C₈K to 350 °C progressively expels metal, giving a series in which fewer and fewer layers are occupied:

| Compound | C₈M | C₂₄M | C₃₆M | C₄₈M | C₆₀M |
|---|---|---|---|---|---|
| Colour | bronze | steel-blue | blue | black | black |
| Layers invaded | every layer | every 2nd | every 3rd | every 4th | every 5th |

Li and Na are much harder to intercalate, giving C₆Li, C₁₂Li, C₁₈Li… and C₆₄Na, C₁₂₈Na. The structural consequences:

- The sheets stay **intact and flat**, so the delocalised π system survives, **but the gap widens from 335 pm to as much as 10 Å**, and the stacking changes to **AAAA** — carbon atoms sit directly above one another — rather than α-graphite's ABAB.
- **C₈K conducts better than graphite itself** (resistivity at 285 K: α-graphite 28.4 Ω cm, **C₈K 1.02 Ω cm**), because the metal donates an electron into the graphite conduction band: K → K⁺ + e⁻.
- **Graphite is diamagnetic; C₈K is paramagnetic** — direct evidence for that electron transfer.
- These compounds are **highly reactive: they may explode in water and react vigorously in air.**

**(ii) Electron-acceptor intercalation compounds — conductivity also *increases*, by the opposite mechanism.**

A large range of electron acceptors intercalate: the halogens **Cl₂ and Br₂**; **HF**; halides such as FeCl₃, AlCl₃, CdCl₂, CuBr₂, ClF₃, TiF₄, MoCl₅ and WCl₆; oxides such as CrO₃, MoO₃, SO₃, N₂O₅ and Cl₂O₇; and sulphides FeS₂, PdS, V₂S₅. Here the guest **removes** electrons from graphite (Cl + e⁻ → Cl⁻), leaving a **mobile "positive hole" in the valence band** — and a migrating positive hole carries current just as a migrating electron does, so conductivity rises again, by up to a factor of ten. In C₂₄FeCl₃ the Fe³⁺ builds its own layer lattice *inside* the graphite host, mirroring the layer lattice of FeCl₃ itself.

**(iii) Covalent compounds — conductivity *destroyed*.**

Here the guest bonds covalently to carbon, the sheets pucker, and the π system is lost.

- **Graphite oxide**, from strong oxidants (conc. HNO₃, HClO₄ or KMnO₄): pale brown, non-stoichiometric and unstable — it decomposes slowly at 70 °C and **catches fire at 200 °C**; the C : O ratio approaches 1 : 2. Interlayer spacing rises to **6–7 Å**, and up to **19 Å** once water, alcohols or acetone are absorbed. The sheets are **puckered**, mostly in the chair conformation, with oxygen forming **ether-like C–O–C bridges** and **C–OH groups** that can undergo keto–enol tautomerism. **All four electrons on each carbon are now in σ bonds**, so the delocalised π system — and the conductivity — is gone.
- **Graphite fluoride, (CF)ₙ**, from F₂ at 450 °C (faster in the presence of HF — which is why it can form in fluorine cells, destroying the electrode and risking an explosion). Non-stoichiometric with n from 0.7 to 0.98, and the **colour tracks the fluorine content: black → grey → silver → white**. Interlayer spacing ≈ 8 Å; **buckled sheets with tetrahedral carbon**; non-conducting and very unreactive.

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

### 5.4b Radiocarbon dating

Worth knowing because it is the one place elementary carbon chemistry meets nuclear chemistry. Cosmic neutrons bombard atmospheric nitrogen:

\[\mathrm{^{14}_{7}N+{^1_0}n\rightarrow{^{14}_{6}C}+{^1_1}H}\]

The ¹⁴C is oxidised to CO₂, fixed by photosynthesis, and passed into every plant and animal tissue, so **all living matter maintains a steady state of 15.3 ± 0.1 disintegrations per minute per gram of carbon.** ¹⁴C is a weak β-emitter with a **half-life of 5668 years**. When the organism dies, intake stops but decay continues, so measuring the present activity dates the death. The technique gives an absolute scale for objects of plant or animal origin between roughly **1000 and 10 000 years** old, and was used on the Turin shroud. **W. F. Libby received the 1960 Nobel Prize in Chemistry** for developing it.

## 5.5 Chemical reactivity across the group

Reactivity is low overall but **increases down the group**, and the pattern of *which* reagent attacks *which* element is heavily examined. Lead deserves a special note first.

> **Why lead looks more noble than it is.** E°(Pb²⁺/Pb) = −0.13 V predicts that lead should dissolve in acid and liberate hydrogen, yet it largely does not. Two reasons, and the second is the interesting one: a surface coating of oxide, **plus a high overpotential for the reduction of H⁺ to H₂ at a lead surface.** Producing H₂ on lead is *kinetically* unfavourable, so a much larger potential is needed than the standard reduction potential suggests. This is a **kinetic**, not thermodynamic, explanation — and the same principle underlies the lead–acid accumulator.

| Reagent | Behaviour |
|---|---|
| **Water** | C, Si, Ge unaffected. **Sn reacts with steam → SnO₂ + H₂.** Pb unaffected (protective oxide). |
| **Dilute acid** | C, Si, Ge unaffected. **Sn dissolves in dilute HNO₃ → Sn(NO₃)₂.** Pb dissolves slowly in dilute HCl (sparingly soluble PbCl₂) and readily in dilute HNO₃; also in organic acids (acetic, citric, oxalic). **Pb does not dissolve in dilute H₂SO₄** — a PbSO₄ coating forms. |
| **Conc. acid** | **Diamond unaffected**; **graphite → mellitic acid** with hot conc. HNO₃ and **graphite oxide** with hot conc. HF/HNO₃. Si oxidised and fluorinated by conc. HF/HNO₃. Ge dissolves slowly in hot conc. H₂SO₄ and HNO₃. Sn dissolves in several. **Pb does not dissolve in conc. HCl** (PbCl₂ coating). |
| **Alkali** | **C unaffected.** Si slowly with cold NaOH, readily with hot → silicates. **Sn and Pb slowly attacked cold, rapidly hot, giving Na₂[Sn(OH)₆] and Na₂[Pb(OH)₆] — so Sn and Pb are amphoteric.** |
| **Halogens** | **Diamond does not react.** **Graphite reacts with F₂ at 500 °C** → intercalation compounds or (CF)ₙ. Si and Ge react readily with all halogens → SiX₄, GeX₄. Sn: Cl₂ and Br₂ in the cold, F₂ and I₂ on warming → SnX₄. **Pb gives the *di*halide directly: PbF₂ with F₂ in the cold, PbCl₂ with Cl₂ on heating.** |

The standard reduction potentials make the redox roles quantitative, and the PbO₂ figure is the one to remember:

\[\text{acid: }\mathrm{Sn^{4+}\xrightarrow{+0.15}Sn^{2+}\xrightarrow{-0.14}Sn};\qquad \mathrm{PbO_2\xrightarrow{\mathbf{+1.46}}Pb^{2+}\xrightarrow{-0.13}Pb}\]

**+1.46 V is why PbO₂ oxidises HCl to chlorine and Mn²⁺ to permanganate.**

## 5.6 The anomalous behaviour of carbon, and carbon versus silicon

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

## 5.7 Hydrides

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

- **CH₄ vs SiH₄ reactivity** rests on **three** factors, and a complete answer gives all three. (1) *Electronegativity*: C (2.5) > H (2.1) > Si (1.8), so C–H is polarised Cδ⁻–Hδ⁺ while **Si–H is polarised Siδ⁺–Hδ⁻** — silicon is therefore open to nucleophilic attack. (2) *Size*: **the larger silicon atom is simply easier to attack.** (3) *Orbitals*: Si has **low-energy d orbitals** that can host an intermediate and so lower the activation energy. Consequently SiH₄ is a strong reducing agent and is hydrolysed by alkali while CH₄ is not:

\[\mathrm{SiH_4+2NaOH+H_2O\rightarrow Na_2SiO_3+4H_2};\qquad \mathrm{Si_2H_6+4KOH+2H_2O\rightarrow 2K_2SiO_3+7H_2}\]

- **The decline from GeH₄ to PbH₄** is a *size/overlap* argument: as M grows, M–H overlap worsens and the bond weakens.

Silanes are made by protonating a silicide, or by hydride reduction:

\[\mathrm{Mg_2Si+dil.\ H_2SO_4\rightarrow MgSO_4+SiH_4+Si_2H_6+\ldots};\qquad \mathrm{SiCl_4+LiAlH_4\rightarrow SiH_4+LiCl+AlCl_3}\]

SiH₄ is a colourless, tetrahedral, **spontaneously flammable** gas; its pyrolysis in the absence of H₂ gives silicon and hydrogen and is a route to semiconductor-grade silicon. A SiH₄ + H₂ mixture bubbled through water burns as the bubbles reach the air with a luminous flame, leaving rings of silica: \(\mathrm{SiH_4+2O_2\rightarrow SiO_2+2H_2O}\).

The Mg₂Si route gives a **mixture** in decreasing yield — SiH₄ (40 %), Si₂H₆ (30 %), Si₃H₈ (15 %), Si₄H₁₀ (10 %), Si₅H₁₂ (5 %) — which is why the hydride route is preferred: **SiCl₄ + Li[AlH₄] gives SiH₄ essentially quantitatively.** Silanes can also be made directly from silicon or ferrosilicon with HX or RX over a copper catalyst (Si + 3HCl → SiHCl₃ + H₂).

**Hydrosilation** is the silicon analogue of hydroboration and is industrially important because it feeds the silicone plants:

\[\mathrm{RCH{=}CH_2+SiHCl_3\xrightarrow{Pt\ catalyst}RCH_2CH_2SiCl_3}\]

Down the group the hydrides get tamer, not wilder, in one specific respect: **germanes are unaffected by water or by aqueous acids or alkalis**, unlike the alkali-sensitive silanes. **SnH₄ is a strong reducing agent**, unaffected by water and dilute acids but attacked slowly by concentrated solutions; Sn₂H₆ is known and no higher stannane is. **PbH₄ has only ever been made in trace amounts at low concentration by cathodic reduction and detected by mass spectrometry** — the ordinary preparative routes all fail.

## 5.8 Halides

All the elements form **tetrahedral MX₄**, except at lead. **PbI₄ does not exist at all**: Pb⁴⁺ is a strong oxidant and I⁻ a good reductant, so the two destroy each other and **PbI₂ always results**. The same argument is usually extended to **PbBr₄**, and most JEE keys list both PbBr₄ and PbI₄ as non-existent; J. D. Lee names only PbI₄. Either way PbF₄ and PbCl₄ are known but thermally fragile, and the reasoning you must give is the **redox incompatibility of Pb(IV) with the heavier halides**.

> **Why is SnI₄ orange when CCl₄ and SnBr₄ are colourless?** A favourite question, and the answer is *not* d–d transitions — the d levels here are full. Instead an electron is promoted from a **halogen p orbital into an empty orbital on the metal**: a **charge-transfer transition**, corresponding to a momentary reduction Sn(IV) → Sn(III). The energy needed falls as the halide becomes larger and more easily oxidised, so it drops out of the ultraviolet and into the visible for the iodides. Hence **SnI₄ and GeI₄ are coloured while the fluorides and chlorides are not**, and the colour deepens with the proportion of iodide. The same effect makes PbI₂ yellow.

The tetrahalides are typically **covalent, tetrahedral and very volatile** — with two named exceptions that get asked about: **SnF₄ and PbF₄ have three-dimensional structures and are high-melting** (SnF₄ sublimes at 705 °C, PbF₄ melts at 600 °C), because fluoride is small enough to bridge and build a lattice.

**Thermal stability** falls two ways:

\[\mathrm{CX_4>SiX_4>GeX_4>SnX_4>PbX_4};\qquad \mathrm{MF_4>MCl_4>MBr_4>MI_4}\]

The second order follows the C–X bond energies (kcal mol⁻¹): **C–F 116, C–Cl 81, C–Br 68, C–I 51**. Volatility runs the opposite way to stability with increasing molar mass. The fluorides of carbon are exceptionally stable and inert (**fluorocarbons**): CF₄ is an exceptionally unreactive gas, and under pressure C₂F₄ polymerises to **PTFE (polytetrafluoroethylene)** — a hard white plastic with a greasy feel, denser than you would expect, a good insulator, chemically inert, with a very low coefficient of friction, used for non-stick pans and razor blades.

The mixed fluoro-chlorocarbons — **freons**, e.g. CFCl₃ and CF₂Cl₂ — are volatile, non-toxic and non-corrosive refrigerants, aerosol propellants and solvents, made by halogen exchange:

\[\mathrm{CCl_4+2HF\xrightarrow[\text{anhydrous}]{SbCl_5}CCl_2F_2+2HCl}\]

> **The ozone problem — worth knowing as chemistry, not just as a fact.** Freons are so unreactive that they survive to the stratosphere, where UV photolysis releases chlorine atoms and a **catalytic chain** destroys ozone:
>
> \[\mathrm{CFCl_3\xrightarrow{h\nu}Cl\bullet};\quad \mathrm{Cl\bullet+O_3\rightarrow O_2+ClO};\quad \mathrm{ClO\rightarrow Cl\bullet+O};\quad \mathrm{ClO+O\rightarrow Cl\bullet+O_2}\]
> \[\text{overall}\qquad \mathrm{2O_3\rightarrow 3O_2}\]
>
> The decisive point is **why the chain never stops**: two Cl• radicals cannot simply recombine to Cl₂, because that needs a **three-body collision** to carry away the energy, and such collisions are extremely rare in the thin upper atmosphere. **There is no effective sink for chlorine radicals**, so a handful of them destroys an enormous amount of ozone. The replacements — **HFCs** (e.g. CH₂FCF₃) and **HCFCs** (e.g. CHCl₂CF₃) — still absorb in the infrared and are greenhouse gases, but do far less damage because their **C–H bonds are attacked by hydroxyl radicals in the upper atmosphere**, so they do not survive long enough to reach the ozone layer.

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
- **α-graphite is ABAB (hexagonal), β-graphite ABCABC (rhombohedral).** Heating β → α; grinding α → β.
- Graphite intercalation: **electron-donor (C₈K) and electron-acceptor (C₂₄FeCl₃) compounds conduct *better* than graphite**; **covalent graphite oxide and (CF)ₙ do not conduct at all**, because puckering destroys the π system. Know which class does which.
- **C₈K stacks AAAA, not ABAB**, and graphite is diamagnetic while **C₈K is paramagnetic**.
- **SnI₄ is orange because of a charge-transfer transition**, not a d–d transition. The d levels are full.
- **SnF₄ and PbF₄ are high-melting 3-D solids** — the exceptions to "tetrahalides are volatile and molecular".
- **PbI₄ does not exist** (Pb⁴⁺ oxidises I⁻ → PbI₂). Give the redox reason, not "it is unstable".
- **Lead's apparent nobility is kinetic**: oxide film **plus a high overpotential for H⁺ → H₂ at lead**. E°(Pb²⁺/Pb) is only −0.13 V.
- **PbO₂ → Pb²⁺ is +1.46 V** — that number is why PbO₂ oxidises HCl to Cl₂ and Mn²⁺ to MnO₄⁻.
- **Pb reacts with halogens to give the *di*halide directly** (PbF₂, PbCl₂), while Si, Ge and Sn give the tetrahalide.
- SiH₄'s reactivity needs **three** reasons: bond polarity, larger size (easier attack), and low-lying d orbitals.
- **Diamond is unaffected by concentrated acids and by halogens; graphite reacts with both.** Never treat the two as interchangeably inert.
- The Freon–ozone chain never terminates because **Cl• recombination needs a rare three-body collision** — there is no sink.

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

## 6.2a Carbonates, and why CO₄⁴⁻ does not exist

Two series of salts come from carbonic acid: **carbonates CO₃²⁻** and **hydrogencarbonates HCO₃⁻**. The carbonate ion is **flat and trigonal planar (sp² carbon)**, with the π bonding best described as a **delocalised molecular orbital covering all four atoms** — three σ bonds plus one delocalised π system, exactly as in NO₃⁻.

> **The structural trap.** **CO₄⁴⁻ does not exist, even though SiO₄⁴⁻ does.** Carbon is simply too small to accommodate four oxygens. The situation is precisely analogous to Group 15, where **NO₃⁻ is the stable nitrogen oxo-anion while PO₄³⁻ is the stable phosphorus one.** First-row elements stop at three oxygens; their heavier congeners reach four.

**Which structure a carbonate adopts depends on the size of the cation** — small cations give the **calcite** structure, large ones the **aragonite** structure:

| Calcite structure (small M²⁺) | Aragonite structure (large M²⁺) |
|---|---|
| Mn²⁺ 0.67, Mg²⁺ 0.72, Co²⁺ 0.74, Zn²⁺ 0.78, Fe²⁺ 0.78, Cd²⁺ 0.97 Å | Ca²⁺ 1.00, Sr²⁺ 1.18, Pb²⁺ 1.21, Ba²⁺ 1.35 Å |

Solubility and colour: Group 1 and 2 carbonates are colourless, but **Ag₂CO₃ is yellow** through the polarising effect of Ag⁺. Group 1 carbonates are readily soluble **except Li₂CO₃**, which is only slightly soluble; Group 2 carbonates are sparingly soluble or insoluble. All carbonates react with acid, liberating CO₂.

**Thermal stability rises with cation size** — the standard Group 2 sequence, and worth having the numbers:

| | BeCO₃ | MgCO₃ | CaCO₃ | SrCO₃ | BaCO₃ |
|---|---|---|---|---|---|
| Decomposition temperature / °C | < 100 | 540 | 900 | 1290 | 1360 |

**Group 1 carbonates are stable to heat and melt without decomposing.** And note which bicarbonates you can actually isolate: **the only solid hydrogencarbonates are those of the Group 1 metals and NH₄⁺.** They are colourless, somewhat less soluble than the corresponding carbonates, decompose easily on heating, and in the solid contain **polymeric chains of HCO₃⁻ groups hydrogen-bonded together.**

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

## 6.3a Carbon disulphide, the cyanides and cyanogen

**Carbon disulphide, CS₂.** A colourless, volatile liquid, bp 46 °C, and genuinely dangerous to handle: **very flammable with a flash point of 30 °C, igniting spontaneously at 100 °C**, and **very poisonous, attacking the brain and central nervous system.** Pure samples smell of ether; the foul smell of commercial material is due to organic impurities. Made from natural gas and sulphur:

\[\mathrm{CH_4+4S\xrightarrow[Al_2O_3\ or\ silica\ gel]{600^{\circ}C}CS_2+2H_2S}\]

Linear like CO₂, but it **forms complexes far more readily than CO₂**, binding side-on through one C and one S so that the CS₂ molecule bends. Its reactions and uses:

\[\mathrm{3CS_2+6NaOH\rightarrow Na_2CO_3+2Na_2CS_3+3H_2O}\qquad(\text{trithiocarbonate})\]
\[\mathrm{CS_2+2NH_3\rightarrow NH_4[H_2NCS_2]}\qquad(\text{ammonium dithiocarbamate})\]

Its main industrial use is **viscose rayon and cellophane**: CS₂ reacts with cellulose and NaOH to give **sodium cellulose xanthate**, dissolved in alkali to the viscous "viscose", then re-acidified back to cellulose as fibre (rayon) or film (cellophane). It is also the feedstock for CCl₄ and a solvent for sulphur in cold vulcanisation. **Sunlight converts CS₂ to CS, which is why it is stored in dark bottles.**

**The cyanides.** HCN has an **abnormally high boiling point of 26 °C** for its mass, because of hydrogen bonding — though the bonding is weaker than in HF. Modern manufacture is by gas-phase ammoxidation of methane:

\[\mathrm{CH_4+NH_3\xrightarrow{Pt}HCN+3H_2}\ (\text{Degussa});\qquad \mathrm{2CH_4+2NH_3+3O_2\xrightarrow{Pt/Rh}2HCN+6H_2O}\ (\text{Andrussow})\]

The older **Castner process** went through sodamide: Na + NH₃ → NaNH₂ + ½H₂, then NaNH₂ + C → NaCN + H₂. HCN is also a **non-aqueous ionising solvent**. Cyanide's great industrial use is extracting gold and silver:

\[\mathrm{4Au+8NaCN+2H_2O+O_2\rightarrow 4Na[Au(CN)_2]+4NaOH}\]

**CN⁻ as a ligand — compare it with CO carefully.** CN⁻ is isoelectronic with CO and N₂, and like CO it is a **σ donor and π acceptor** through carbon. But the negative charge changes the balance: **CN⁻ is a stronger σ donor than CO, and correspondingly a weaker π acceptor.** The orders are exactly opposite:

\[\sigma\text{-donor strength: }\mathrm{CN^->RNC>CO>NO^+};\qquad \pi\text{-acceptor strength: the reverse}\]

Hence ferrocyanides [Fe(CN)₆]⁴⁻ and ferricyanides [Fe(CN)₆]³⁻ are very stable. **Cyanide's toxicity has the same mechanism as carbon monoxide's** — it complexes with enzymes and with haemoglobin, blocking normal metabolism.

**Cyanogen, (CN)₂**, is made by oxidising cyanide with Cu²⁺ — a reaction directly parallel to Cu²⁺ oxidising I⁻ to I₂:

\[\mathrm{2Cu^{2+}+4CN^-\rightarrow (CN)_2+2CuCN}\]

In alkali it **disproportionates**, exactly as a halogen does — which is why cyanide is called a pseudohalide:

\[\mathrm{(CN)_2+2OH^-\rightarrow H_2O+CN^-+NCO^-}\]

**The cyanate ion NCO⁻ is isoelectronic with CO₂, and both are linear** — a clean isoelectronic-analogy question.

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

**Silica's polymorphs, and the one that matters.** SiO₂ exists in three main crystalline families, each with a low- and a high-temperature form, and the transitions are worth recognising:

\[\mathrm{\alpha\text{-}quartz\xrightarrow{575^{\circ}C}\beta\text{-}quartz\xrightarrow{870^{\circ}C}\beta\text{-}tridymite\xrightarrow{1470^{\circ}C}\beta\text{-}cristobalite\xrightarrow{1710^{\circ}C}liquid}\]

**Quartz is the stable form at room temperature.** In every form silicon is tetrahedral with each corner shared, but the arrangements differ: **in β-quartz the tetrahedra form interlinked helical chains, and because a helix may be left- or right-handed, individual quartz crystals are chiral and can be separated by hand.** In **cristobalite the silicon atoms sit exactly where carbon sits in diamond, with oxygen midway between them** — and the tridymite/cristobalite relationship mirrors that between wurtzite and zinc blende. Heating silica near its softening point, or cooling the melt slowly, gives **amorphous silica glass containing a disordered mixture of rings, chains and three-dimensional units.**

Note also that **SiO exists only at high temperature** (SiO₂ + Si → 2SiO); **its existence at room temperature is doubtful** — the counterpart of the CO/SiO contrast in §5.2.

**Insoluble in water and in every acid except HF** — the one reaction that matters industrially and in the laboratory:

\[\mathrm{SiO_2+4HF\rightarrow SiF_4+2H_2O};\qquad \mathrm{SiO_2+6HF\rightarrow H_2SiF_6+2H_2O}\]

Hence **HF must be stored in polyethylene or wax-lined vessels, never glass**, and HF is used to etch glass. **Of the halogens, only fluorine attacks silica**: \(\mathrm{SiO_2+2F_2\rightarrow SiF_4+O_2}\).

Silica is an **acidic** oxide, so it dissolves slowly in aqueous alkali and rapidly in fused alkali or fused carbonate — and that has a familiar laboratory consequence: **this is why ground-glass stoppers seize in reagent bottles containing NaOH.**

**Detecting a silicate in qualitative analysis** uses the same HF chemistry in reverse: warm the sample with CaF₂ and conc. H₂SO₄ to generate HF *in situ*, which attacks the silicate to give volatile SiF₄; when the SiF₄ meets a drop of water it hydrolyses to silicic acid, appearing as a **white solid on the surface of the drop**.

\[\mathrm{H_2SO_4+CaF_2\rightarrow 2HF+CaSO_4};\quad \mathrm{SiO_2+4HF\rightarrow SiF_4+2H_2O};\quad \mathrm{SiF_4+H_2O\rightarrow Si(OH)_4+HF}\]

With metal oxides, carbonates and salts at high temperature silica forms silicates, driving off the volatile oxide — the chemistry of glassmaking:

\[\mathrm{SiO_2+CaO\xrightarrow{\Delta}CaSiO_3};\qquad \mathrm{SiO_2+Na_2CO_3\xrightarrow{high\ T}Na_2SiO_3+CO_2}\]
\[\mathrm{SiO_2+Na_2SO_4\xrightarrow{high\ T}Na_2SiO_3+SO_3};\qquad \mathrm{3SiO_2+Ca_3(PO_4)_2\xrightarrow{high\ T}3CaSiO_3+P_2O_5}\]

Uses: sand for mortar and cement; **quartz is piezoelectric**, which made accurate clocks, radio and television broadcasting and mobile radio possible; quartz is transparent to UV so large crystals are cut into lenses for optical instruments and to control transmitter frequency; powdered quartz for silica bricks; **silica gel (SiO₂·xH₂O)** as a desiccant and as a chromatographic support; **kieselguhr**, an amorphous silica, in filtration plants.

**Sodium silicate (water glass), Na₂SiO₃.**

\[\mathrm{Na_2CO_3+SiO_2\xrightarrow{fusion}Na_2SiO_3+CO_2}\]

The fused mass extracted with water gives a syrupy liquid called **water glass**, alkaline through hydrolysis (\(\mathrm{Na_2SiO_3+2H_2O\rightleftharpoons 2NaOH+H_2SiO_3}\)). Dropping crystals of coloured salts of Co, Fe, Ni or Cu into concentrated water glass grows coloured hollow metal-silicate tubes — the **"silica garden" / chemical garden**. Uses: fireproofing wood and textiles, adhesive cement for china clay, egg preservative, paint and calico printing, cheap soap filler, and the source of silica gel.

**Silicates.** Metal derivatives of silicic acid, H₄SiO₄ ≡ Si(OH)₄, made by fusing a metal oxide or carbonate with sand. **About 95 % of the earth's crust is silicate minerals, aluminosilicates, silica or oxides**, and the three most abundant elements — **O, Si and Al — make up 81 % of the crust, four atoms out of every five.**

### Why silicates are built the way they are — four principles

Before the classification, the reasoning behind it. Silicate minerals are very insoluble, have infinite structures and are hard, all because of the strength of the Si–O bond.

1. **Bond character.** The electronegativity difference is O 3.5 − Si 1.8 = 1.7, so **Si–O is about 50 % ionic and 50 % covalent** — which is why both ionic (radius-ratio) and covalent (hybridisation) arguments work on it.
2. **Why tetrahedra, always.** The radius ratio **Si⁴⁺ : O²⁻ = 0.29** puts silicon firmly in the four-coordinate range, surrounded by four oxygens at the corners of a tetrahedron. **Every silicate is therefore based on [SiO₄] tetrahedra** — this is not a convention, it is a consequence.
3. **Polymerisation.** Those tetrahedra may stay discrete or **share corner oxygens** to build larger units.
4. **The oxygens are close-packed, and that is what lets aluminium in.** Close-packed oxide arrays have both tetrahedral and octahedral holes, and metal ions occupy whichever fits their size:

| Ion pair | Radius ratio | Coordination number | Hole occupied |
|---|---|---|---|
| Be²⁺ : O²⁻ | 0.25 | 4 | tetrahedral |
| **Si⁴⁺ : O²⁻** | **0.29** | **4** | **tetrahedral** |
| **Al³⁺ : O²⁻** | **0.42** | **4 or 6** | **tetrahedral *or* octahedral** |
| Mg²⁺ : O²⁻ | 0.59 | 6 | octahedral |
| Fe²⁺ : O²⁻ | 0.68 | 6 | octahedral |

> **This is the key to the entire aluminosilicate world.** Most metal ions fit only one kind of hole. **Al³⁺ is the right size for either**, so aluminium can substitute for *a metal* in an octahedral site **or** for *silicon* in a tetrahedral site. Every zeolite, feldspar, mica and clay in this section is a consequence of that single fact.

(The radius-ratio rule is a guide, not a law — silicates are partly covalent, and Na occasionally takes CN 6 rather than 4, while K and Ca may take CN 8 rather than 6.)

The universal building block is the **[SiO₄]⁴⁻ tetrahedron**; in every silicate **Si is +4, O is −2, and silicon is sp³ and non-planar**. Silicates are the products of **hetero-catenation of the Si–O bond**, and the classification depends on **how many corner oxygens each tetrahedron shares**. Sharing a corner means one oxygen is bonded to two silicons, which lowers both the O : Si ratio and the residual charge per silicon.

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

### Detail worth carrying, class by class

- **Orthosilicates.** The metal's coordination number decides the structure: in **willemite Zn₂[SiO₄]** and **phenacite Be₂[SiO₄]** the metal has CN 4 (tetrahedral holes); in **forsterite Mg₂[SiO₄]** Mg has CN 6 (octahedral holes). **Olivine (Mg,Fe)₂[SiO₄]** is forsterite with about one tenth of the Mg²⁺ replaced by Fe²⁺ — a textbook case of **isomorphous replacement**, possible because the ions have the same charge, similar radii (Mg²⁺ 0.72, Fe²⁺ 0.78 Å) and occupy the same type of hole; Mn²⁺ may join them. **Zircon ZrSiO₄** is cut as a cheap diamond substitute; **Zr has CN 8 and the structure is not close-packed**. **Garnets** M(II)₃M(III)₂[SiO₄]₃ have eight-coordinate M(II) and six-coordinate M(III), and are used both as gemstones and as "sandpaper".
- **Pyrosilicates.** In Sc₂[Si₂O₇] the **Si–O–Si angle is 180°**, but in the lanthanide disilicates it bends, **varying from 133° to 180° as the metal's coordination number rises from 6 to 7 to 8** — a nice demonstration that the bridge is flexible.
- **Cyclic silicates.** Rings of 3, 4, 6 and 8 tetrahedra are known; **3 and 6 are much the commonest.** Si₃O₉⁶⁻ occurs in wollastonite Ca₃[Si₃O₉] and benitoite BaTi[Si₃O₉]; Si₆O₁₈¹²⁻ in **beryl Be₃Al₂[Si₆O₁₈]**. In beryl the Si₆O₁₈ rings stack one above another leaving **open channels**, which hold Na⁺, Li⁺ and Cs⁺ and make the mineral **permeable to small gas molecules such as helium.** **Emerald has beryl's formula plus 1–2 % Cr**, which supplies the green colour.
- **Chain silicates.** The repeat distance along the chain varies with how the tetrahedra are oriented. Most pyroxenes repeat **every second** tetrahedron (spodumene LiAl[(SiO₃)₂], the main source of lithium; enstatite; diopside), but **wollastonite Ca₃[(SiO₃)₃] repeats every three**, and repeats of 4, 5, 6, 7, 9 and 12 are known.
- **Double chains and the asbestos minerals.** Joining two chains can give (Si₂O₅)ₙ²ⁿ⁻, **(Si₄O₁₁)ₙ⁶ⁿ⁻** or (Si₆O₁₇)ₙ¹⁰ⁿ⁻. **Amphiboles always contain hydroxyl groups bonded to the metal ions.** Examples: tremolite Ca₂Mg₅[(Si₄O₁₁)₂](OH)₂ and **crocidolite = blue asbestos**, Na₂Fe₃ᴵᴵFe₂ᴵᴵᴵ[(Si₄O₁₁)₂](OH)₂.

> **A real identification tool.** Pyroxenes and amphiboles both cleave parallel to the chains, giving fibres — but at different angles, set by the cross-sectional shape of the chain bundle: **cleavage angle 87° for pyroxenes, 56° for amphiboles.** Measuring that angle identifies the class.

**Asbestos comes from two different silicate classes**, which is worth knowing precisely: the **amphiboles** (crocidolite/blue asbestos, amosite/brown asbestos) make up only about 5 % of asbestos used, while **chrysotile Mg₃(OH)₄[Si₂O₅] — white asbestos, derived from serpentine and a *sheet* silicate — is 93 %.** Chemically inert but a serious hazard: inhaled dust scars the lungs and causes cancer with a **latent period of 20–30 years**; the controls are to minimise dust and handle it wet.

### Sheet silicates: building minerals layer by layer

~~~viz
{
  "type": "StructureGallery",
  "caption": "The six silicate classes, set only by how many corners of each SiO₄ tetrahedron are shared",
  "describe": "Six panels. Zero corners shared gives the discrete orthosilicate ion. One corner shared gives the pyrosilicate. Two corners shared gives either a ring or an infinite single chain. Two and three alternating gives a double chain. Three corners shared gives an infinite sheet. Four corners shared gives a three-dimensional framework.",
  "items": [
    { "label": "Ortho (neso)", "sub": "0 shared · SiO₄⁴⁻ · phenacite",
      "atoms": [ {"id":"si","el":"Si","x":60,"y":86}, {"id":"o1","el":"O","x":60,"y":50,"charge":"−"}, {"id":"o2","el":"O","x":30,"y":106,"charge":"−"}, {"id":"o3","el":"O","x":90,"y":106,"charge":"−"}, {"id":"o4","el":"O","x":60,"y":120,"charge":"−"} ],
      "bonds": [ {"a":"si","b":"o1"}, {"a":"si","b":"o2"}, {"a":"si","b":"o3"}, {"a":"si","b":"o4"} ] },
    { "label": "Pyro (soro)", "sub": "1 shared · Si₂O₇⁶⁻ · thortveitite",
      "atoms": [ {"id":"s1","el":"Si","x":38,"y":86}, {"id":"ob","el":"O","x":68,"y":86}, {"id":"s2","el":"Si","x":98,"y":86}, {"id":"a1","el":"O","x":38,"y":52,"charge":"−"}, {"id":"a2","el":"O","x":16,"y":112,"charge":"−"}, {"id":"b1","el":"O","x":98,"y":52,"charge":"−"}, {"id":"b2","el":"O","x":120,"y":112,"charge":"−"} ],
      "bonds": [ {"a":"s1","b":"ob","style":"bold"}, {"a":"s2","b":"ob","style":"bold"}, {"a":"s1","b":"a1"}, {"a":"s1","b":"a2"}, {"a":"s2","b":"b1"}, {"a":"s2","b":"b2"} ] },
    { "label": "Cyclic", "sub": "2 shared, closed · Si₃O₉⁶⁻ · beryl uses Si₆O₁₈¹²⁻",
      "atoms": [ {"id":"s1","el":"Si","x":60,"y":52}, {"id":"s2","el":"Si","x":32,"y":104}, {"id":"s3","el":"Si","x":88,"y":104}, {"id":"o1","el":"O","x":40,"y":74}, {"id":"o2","el":"O","x":60,"y":112}, {"id":"o3","el":"O","x":80,"y":74} ],
      "bonds": [ {"a":"s1","b":"o1","style":"bold"}, {"a":"o1","b":"s2","style":"bold"}, {"a":"s2","b":"o2","style":"bold"}, {"a":"o2","b":"s3","style":"bold"}, {"a":"s3","b":"o3","style":"bold"}, {"a":"o3","b":"s1","style":"bold"} ] },
    { "label": "Single chain", "sub": "2 shared, open · (SiO₃)ₙ²ⁿ⁻ · spodumene",
      "atoms": [ {"id":"x0","el":"O","x":10,"y":86}, {"id":"s1","el":"Si","x":36,"y":86}, {"id":"o1","el":"O","x":62,"y":86}, {"id":"s2","el":"Si","x":88,"y":86}, {"id":"x1","el":"O","x":114,"y":86}, {"id":"t1","el":"O","x":36,"y":54,"charge":"−"}, {"id":"t2","el":"O","x":88,"y":118,"charge":"−"} ],
      "bonds": [ {"a":"x0","b":"s1","style":"dashed"}, {"a":"s1","b":"o1","style":"bold"}, {"a":"o1","b":"s2","style":"bold"}, {"a":"s2","b":"x1","style":"dashed"}, {"a":"s1","b":"t1"}, {"a":"s2","b":"t2"} ] },
    { "label": "Double chain", "sub": "2 and 3 alternating · (Si₄O₁₁)ₙ⁶ⁿ⁻ · asbestos",
      "atoms": [ {"id":"a1","el":"Si","x":34,"y":64}, {"id":"a2","el":"Si","x":86,"y":64}, {"id":"b1","el":"Si","x":34,"y":112}, {"id":"b2","el":"Si","x":86,"y":112}, {"id":"oa","el":"O","x":60,"y":64}, {"id":"ob","el":"O","x":60,"y":112}, {"id":"oc","el":"O","x":34,"y":88} ],
      "bonds": [ {"a":"a1","b":"oa","style":"bold"}, {"a":"oa","b":"a2","style":"bold"}, {"a":"b1","b":"ob","style":"bold"}, {"a":"ob","b":"b2","style":"bold"}, {"a":"a1","b":"oc","style":"bold"}, {"a":"oc","b":"b1","style":"bold"} ] },
    { "label": "Sheet, then framework", "sub": "3 shared · (Si₂O₅)ₙ²ⁿ⁻ talc → 4 shared · SiO₂",
      "atoms": [ {"id":"s1","el":"Si","x":36,"y":62}, {"id":"s2","el":"Si","x":86,"y":62}, {"id":"s3","el":"Si","x":61,"y":110}, {"id":"o1","el":"O","x":61,"y":62}, {"id":"o2","el":"O","x":46,"y":88}, {"id":"o3","el":"O","x":76,"y":88}, {"id":"up","el":"O","x":61,"y":132,"charge":"−"} ],
      "bonds": [ {"a":"s1","b":"o1","style":"bold"}, {"a":"o1","b":"s2","style":"bold"}, {"a":"s1","b":"o2","style":"bold"}, {"a":"o2","b":"s3","style":"bold"}, {"a":"s2","b":"o3","style":"bold"}, {"a":"o3","b":"s3","style":"bold"}, {"a":"s3","b":"up"} ] }
  ]
}
~~~

The sheet silicates are the most satisfying part of the subject, because a whole family of familiar minerals is generated by stacking just two kinds of layer. The trick is that **the unshared oxygens of a (Si₂O₅)ₙ²ⁿ⁻ sheet sit in almost the same relative positions as two-thirds of the OH groups on a layer of gibbsite Al(OH)₃ or brucite Mg(OH)₂** — so the two can be fused, losing OH, with the oxygens coinciding.

| Stack | Mineral | Character |
|---|---|---|
| Si₂O₅ + Al(OH)₃ (**two-layer**) | **kaolinite Al₂(OH)₄[Si₂O₅]** | electrically neutral; china clay — paper filler, porcelain, refractory |
| Si₂O₅ + Al(OH)₃ + Si₂O₅ (**three-layer**) | **pyrophyllite Al₂(OH)₂[(Si₂O₅)₂]** | neutral |
| Si₂O₅ + Mg(OH)₂ (**two-layer**) | **chrysotile Mg₃(OH)₄[Si₂O₅]** | white asbestos |
| Si₂O₅ + Mg(OH)₂ + Si₂O₅ (**three-layer**) | **talc / soapstone Mg₃(OH)₂[(Si₂O₅)₂]** | neutral, **no interlayer cations at all** → layers slide freely → very soft, dry lubricant, talcum powder |

Now introduce charge, and hardness follows:

- **Micas.** Replace some tetrahedral Si⁴⁺ by Al³⁺ in pyrophyllite's triple layers and the sheets acquire a **negative charge, balanced by cations sitting between them**. That electrostatic attraction is why **micas are much harder than talc** — but the interlayer is still the weak plane, so micas cleave readily into transparent flexible sheets. **Muscovite KAl₂(OH)₂[AlSi₃O₁₀]**, margarite CaAl₂(OH)₂[Al₂Si₂O₁₀], and with Mg/Fe substitution **biotite (black mica)**. Uses: electrical insulation, formers for heating elements in electric irons, capacitors, furnace windows, and finely ground as filler and in glitter paint.
- **Montmorillonites (the clay minerals).** Same idea but with **much less charge than the micas**: replacing only some octahedral Al(III) in pyrophyllite by Mg(II) gives (Mg₀.₃₃Al₁.₆₇)(OH)₂[(Si₂O₅)₂]⁰·³³⁻, needing only ⅓ M⁺ or ⅙ M²⁺ between the layers — and those cations can be **hydrated**, hence "hydromicas". Finely divided particles are **thixotropic**: the plates carry negative faces and positive edges, so at rest they arrange + to − into a semi-solid gel, and **stirring breaks the attractions and the suspension turns watery.** That is the chemistry of **non-drip emulsion paint** and of drilling mud. **Fuller's earth** is a calcium montmorillonite (decolourising and deodorising oils and fats, oil-spill absorbent, cat litter, Ca²⁺ ion exchanger); exchanging its Ca²⁺ for Na⁺ gives **bentonite**, which is markedly thixotropic.
- **Vermiculites.** Substitute in talc's brucite sheet *and* replace Si⁴⁺ by Al³⁺ in the silicate sheet. **Heated, vermiculites dehydrate by extruding little worms — hence the name** — giving a porous, light material used for packing, insulation and as "soil" in ring culture.

### Three-dimensional silicates: feldspars, zeolites, ultramarines

Sharing all four corners gives neutral (SiO₂)ₙ. Frameworks become *silicates* only when Al³⁺ replaces some Si⁴⁺ and a cation is added to balance the charge: replacing **one quarter** of the silicon gives the framework anion **[AlSi₃O₈]⁻**, replacing **one half** gives [Al₂Si₂O₈]²⁻.

> **Why only big cations.** The cavities in a three-dimensional framework are large, so they are filled by **K⁺, Na⁺, Ca²⁺ and Ba²⁺**. The smaller ions Fe³⁺, Cr³⁺ and Mn²⁺ that were common in the chain and sheet silicates **do not occur in the three-dimensional silicates at all** — the holes are too big for them.

- **Feldspars** are the most important rock-forming minerals and make up **two-thirds of igneous rock** (granite is feldspars + micas + quartz). Two classes: **orthoclase** feldspars — orthoclase K[AlSi₃O₈], celsian Ba[Al₂Si₂O₈] — and **plagioclase** feldspars — albite Na[AlSi₃O₈], anorthite Ca[Al₂Si₂O₈]. **The orthoclases are the more symmetrical, because K⁺ and Ba²⁺ are just the right size for the lattice while the smaller Na⁺ and Ca²⁺ let it distort.**
- **Zeolites** have a **more open framework than the feldspars, penetrated by channels into a honeycomb**, and the channels are wide enough for ions and small molecules to pass. Two functions follow:
  - **Ion exchange.** Sodium zeolite, Na₂Al₂Si₂O₈·xH₂O (**permutit**), softens hard water by swapping Na⁺ for dissolved Ca²⁺/Mg²⁺; once exhausted it is **regenerated with concentrated NaCl solution, which drives the exchange backwards.** Natural examples: **natrolite Na₂[Al₂Si₃O₁₀]·2H₂O**, chabazite Ca[Al₂Si₄O₁₂]·6H₂O, heulandite, analcite Na[AlSi₂O₆]·H₂O.
  - **Molecular sieving and shape-selective catalysis.** Zeolites can be **dehydrated by warming without the framework collapsing**, and then absorb only molecules small enough to enter the cavities — used industrially to separate **straight-chain from branched-chain hydrocarbons**, and to dry gases (CO₂, NH₃, EtOH). Catalytically, only the right-shaped molecule reaches the internal acid sites: **ZSM-5** converts alcohols directly to gasoline, and zeolites run cracking and isomerisation across the petrochemical industry.
- **Ultramarines** contain **no water** but do contain anions — Cl⁻, SO₄²⁻ and **polysulphide Sₙ²⁻**: ultramarine Na₈[(AlSiO₄)₆]S₂, sodalite Na₈[(AlSiO₄)₆]Cl₂, noselite Na₆[(AlSiO₄)₆]SO₄. The mineral **lapis lazuli** owes its magnificent blue — the prized medieval oil pigment — to **the polysulphide ion**. Synthetic ultramarine is made by grinding kaolin, sodium carbonate and sulphur in the absence of air, and before artificial brighteners existed it was the "dolly blue" used to mask yellowness in domestic washing.

**Glass and cement are the two great man-made silicates.** The reliable order of attack on any framework problem is: **(1) identify the framework and substitution pattern, (2) balance the charge, (3) then reason about pore size, ion exchange or catalysis.**

**Bowen's reaction series** records the order in which these minerals crystallised as magma cooled — olivine → pyroxenes → amphiboles → biotite micas → orthoclase feldspars → muscovite micas → quartz → zeolites. The **simpler silicate units crystallised first**; hydroxyl (and sometimes F) appears only in the later minerals; **isomorphous replacement is characteristic of the later minerals**; and orthoclase feldspar, muscovite and quartz are the three major minerals of granite.

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

**The industrial route is not the Grignard.** Commercially, chlorosilanes come from the **Rochow "Direct Process"**: alkyl or aryl halide passed over a **fluidised bed of silicon with about 10 % copper catalyst**.

\[\mathrm{Si+2CH_3Cl\xrightarrow[280-300^{\circ}C]{Cu}(CH_3)_2SiCl_2}\]

The yield of the wanted difunctional product is about 70 %, with MeSiCl₃ (10 %), Me₃SiCl (5 %) and traces of Me₄Si, SiCl₄ and MeSiHCl₂. **Both the Grignard and the direct route give a mixture, and separating it is the hard part — the boiling points are painfully close: Me₃SiCl 57.7 °C, MeSiCl₃ 66.4 °C, Me₂SiCl₂ 69.6 °C** — so very careful fractionation is essential.

**Why silicones work at all — two bond facts.** (1) The skeleton is silica-like, and the **Si–O bond energy is very high, 502 kJ mol⁻¹**; (2) the **Si–C bond is strong** too. And **water repellency has a simple structural cause: the chain is wrapped in organic side groups, so from the outside a silicone looks like an alkane.**

**Properties.** The lower members are oily liquids; higher members are waxy or rubber-like solids. They are thermally and chemically **stable**, excellent **electrical insulators** (the Si–O–Si backbone is inert), **non-toxic**, strongly **water-repellent**, and — unusually — their **viscosity barely changes with temperature.** All of this follows from the strong, polar Si–O bond plus a flexible, freely rotating backbone.

**The three commercial classes**, with the numbers that make them easy to distinguish:

| Class | Share | Structure | Notes |
|---|---|---|---|
| **Fluids / oils** | ≈ 63 % | straight chains of **20–500 Si units** | water repellents, antifoams, dielectric fluid in high-voltage transformers, hydraulic fluids; phenyl-containing ones are the better lubricants |
| **Rubbers** | ≈ 25 % | straight chains of **6000–600 000 Si units** + filler (finely divided SiO₂, occasionally graphite) | **retain elasticity from −90 °C to +250 °C** — far wider than natural rubber; vulcanised either with a little **benzoyl peroxide** (cross-linking up to ~1 % of Si) or by building a cross-linker into the chain |
| **Resins** | ≈ 12 % | heavily cross-linked, from PhSiCl₃ + Ph₂SiCl₂ | rigid, rather like bakelite; printed circuit boards, encapsulating chips and resistors, non-stick coatings, moulds for tyres and bread |

**Heat stability of the side group** runs **phenyl > methyl > ethyl > propyl**. On heating in air to 350–400 °C silicones oxidise rapidly and cross-link, becoming brittle and cracking; **heated strongly in the *absence* of air they merely soften and give volatile products, without oxidation or cross-linking.**

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

> **A caution on "Sn(OH)₄".** Indian textbooks write the hydrolysis product as Sn(OH)₄, and you should write it that way in an exam because that is what the keys expect. But **there is in fact no evidence for the existence of Ge(OH)₄, Sn(OH)₄ or Pb(OH)₄.** What precipitates is a **hydrous oxide, SnO₂·xH₂O**, and what exists in alkaline solution is the **hexahydroxo anion [Sn(OH)₆]²⁻** (and [Pb(OH)₆]²⁻) — which is why stannates and plumbates are properly written Na₂[Sn(OH)₆] and Na₂[Pb(OH)₆] rather than Na₂SnO₃ and Na₂PbO₃. Both notations appear in the literature; the hexahydroxo one is the physically accurate one.
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

> **The pattern behind all the Group 14 oxides — learn this once and it covers C to Pb.**
>
> **Dioxides MO₂.** GeO₂, SnO₂ and PbO₂ all take the **rutile (TiO₂) structure with coordination number 6**, unlike molecular CO₂ and network SiO₂. **Basicity increases down the group**: CO₂ and SiO₂ are **purely acidic**, GeO₂ less strongly acidic, and **SnO₂ and PbO₂ are amphoteric.** All dissolve in alkali giving germanates, stannates and plumbates — and note that **the germanates have complicated silicate-like structures, whereas the stannates and plumbates are simply [Sn(OH)₆]²⁻ and [Pb(OH)₆]²⁻.** The dioxides do **not** dissolve in acid unless a complexing agent is present, when [GeF₆]²⁻ or [SnCl₆]²⁻ forms.
>
> **Monoxides MO.** GeO, SnO and PbO have **layer lattices**, not typical ionic structures. They are **more basic and more ionic than the corresponding dioxides**: GeO is distinctly acidic, while **SnO and PbO are amphoteric**. And the inert-pair trend shows through in redox behaviour — **Ge(II) and Sn(II) are quite strong reducing agents, whereas Pb(II) is stable.**

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

**Lead tetraacetate, Pb(CH₃COO)₄.** Obtained as a colourless solid by treating Pb₃O₄ with glacial acetic acid. Water-sensitive, and **widely used as a selective oxidising agent in organic chemistry — its best-known application is cleaving 1,2-diols (glycols) to two carbonyl compounds**, which is how it is used on carbohydrates:

\[\mathrm{R_2C(OH){-}C(OH)R_2\xrightarrow{Pb(CH_3COO)_4}2\,R_2C{=}O+Pb(CH_3COO)_2+2CH_3COOH}\]

Do not confuse it with lead(II) acetate, "sugar of lead", above — one is a Pb(IV) oxidant, the other a Pb(II) salt.

**Tetraethyl lead, Pb(C₂H₅)₄.**

\[\mathrm{4NaPb\ (10\%\ Na\ alloy)+4C_2H_5Cl\rightarrow 3Pb+Pb(C_2H_5)_4+4NaCl}\]

The classic **anti-knocking agent** for petrol, raising the octane number (now phased out for its toxicity — burning leaded petrol was the dominant source of atmospheric lead).

> **An inert-pair curiosity.** The divalent state becomes more stable down the group, **yet the organometallic derivatives of tin and lead all contain M(IV), not M(II)** — PbEt₄, not PbEt₂. Indeed PbCl₂ + LiEt gives PbEt₄ plus lead metal, the Pb(II) organometallic disproportionating away. Organometallic chemistry does not follow the inert-pair trend.

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
- **CO₄⁴⁻ does not exist although SiO₄⁴⁻ does** — carbon is too small. Same reason NO₃⁻ is nitrogen's oxo-anion but PO₄³⁻ is phosphorus's.
- CO₃²⁻ is **flat and sp²** with a delocalised π MO over all four atoms. Calcite structure for small cations, **aragonite for large** (Ca²⁺ and above).
- **Only Group 1 metals and NH₄⁺ form solid bicarbonates**, and the solid contains **H-bonded chains** of HCO₃⁻.
- **GeO₂, SnO₂ and PbO₂ have the rutile structure, CN 6.** Basicity increases down the group: CO₂/SiO₂ acidic → GeO₂ weakly acidic → **SnO₂, PbO₂ amphoteric**.
- **There is no evidence for Sn(OH)₄ or Pb(OH)₄.** The real species are the hydrous oxide and the **hexahydroxo anions [Sn(OH)₆]²⁻ / [Pb(OH)₆]²⁻**. Write Sn(OH)₄ in an exam if the key expects it, but know what it stands for.
- **CN⁻ is a stronger σ donor but weaker π acceptor than CO.** Orders: σ CN⁻ > RNC > CO > NO⁺; π acceptor exactly reversed.
- **Cyanogen disproportionates in alkali** like a halogen — hence "pseudohalide". **NCO⁻ is isoelectronic with CO₂ and linear.**
- **Quartz crystals are chiral** because β-quartz is built from helical chains; **in cristobalite the Si atoms sit where C sits in diamond.**
- **Only F₂ attacks SiO₂** among the halogens. And silica's slow attack by alkali is why **ground-glass stoppers stick in NaOH bottles**.
- Silicones: **Si–O bond energy 502 kJ mol⁻¹**; industrially made by the **Rochow direct process**, and the hard step is fractionating products whose boiling points differ by ~3 °C.
- Silicone **rubbers hold elasticity from −90 to +250 °C**; side-group heat stability is **phenyl > methyl > ethyl > propyl**.
- **Lead tetraacetate is a Pb(IV) oxidant that cleaves 1,2-diols**; lead(II) acetate is "sugar of lead". Different oxidation states, different chemistry.
- **Organometallics of Sn and Pb are M(IV), not M(II)** — organometallic chemistry runs *against* the inert-pair trend.

# 7. Group 15: the nitrogen family — trends, the anomalies of nitrogen, dinitrogen and nitrides

Members are **N, P, As, Sb and Bi** (moscovium, Mc, closes the group but is a synthetic radioelement whose chemistry is not established). Valence configuration **ns²np³**. The group is also called the **pnictogens**, and it shows the cleanest non-metal → metalloid → metal progression in the whole p-block:

\[\mathrm{\underbrace{N,\ P}_{non\text{-}metals}\quad \underbrace{As,\ Sb}_{metalloids}\quad \underbrace{Bi}_{typical\ metal}}\]

## 7.1 Occurrence and periodic trends

**Nitrogen** makes up **78 % of the atmosphere by volume** yet is only the **33rd most abundant element in the crust**, where it occurs as **NaNO₃ (Chile saltpetre)** and **KNO₃ (Indian saltpetre)**; biologically it is locked into proteins and nucleic acids. **Phosphorus** is the **eleventh most abundant** crustal element, occurring in the **apatite family Ca₉(PO₄)₆·CaX₂** (X = F, Cl, OH) — fluorapatite, chlorapatite, hydroxyapatite — and in DNA and RNA. **As, Sb and Bi occur mainly as sulphide minerals.**

| Property | Order down the group |
|---|---|
| Covalent radius | **N < P < As < Sb < Bi** |
| Ionisation enthalpy (IE₁) | **N > P > As > Sb > Bi** |
| Electronegativity | **N > P > As > Sb = Bi** (Sb and Bi both 1.9) |
| Metallic character | **N < P < As < Sb < Bi** |
| Melting point | rises **only to As**, then falls to Bi |
| Boiling point | rises steadily N → Bi |

The reasoning, which is the same machinery as in Groups 13 and 14:

- **Covalent radius increases down the group**, with a **large jump N → P** but only small increases **As → Sb → Bi**, because the heavier members carry completely filled d and/or f subshells that shield the nuclear charge poorly.
- **Ionisation enthalpy falls down the group** with size, and successive values run ΔᵢH₁ < ΔᵢH₂ < ΔᵢH₃. Crucially, **Group 15 ionisation enthalpies are much greater than those of the corresponding Group 14 elements** — partly the smaller size, but mainly the **extra stability of the exactly half-filled np³ configuration.**
- **Electronegativity falls down the group**, but among the heavier members the difference is slight — Sb and Bi are effectively equal.
- **All the elements are polyatomic. Dinitrogen is a diatomic gas; every other element is a solid.**
- **Boiling point rises steadily down the group, but melting point rises only as far as arsenic and then falls to bismuth.** That non-monotonic melting point is the trend most often got wrong.
- **Every element except nitrogen shows allotropy**: P as white, red and black; As and Sb as yellow and grey; Bi in α, β, γ and δ forms.

## 7.2 Catenation in Group 15

The group catenates, but far less than carbon. Nitrogen manages two-atom and three-atom chains — **hydrazine H₂N–NH₂** has two nitrogens joined, and **hydrazoic acid HN₃** has three. **Phosphorus has the greatest tendency to catenate in this group**, forming both open-chain and cyclic species with many phosphorus atoms (P₂H₄ is the simplest). The reason is bond dissociation enthalpy:

| Bond | C–C | **N–N** | **P–P** | As–As |
|---|---|---|---|---|
| kJ mol⁻¹ | 353 | **161** | **202** | 147 |

> **Note the inversion, and be ready to explain it.** The single **N–N bond (161) is *weaker* than the single P–P bond (202)** — the opposite of the Group 14 pattern where C–C ≫ Si–Si. The cause is nitrogen's very small size: the bond is so short that the **non-bonding lone pairs on adjacent nitrogens repel each other strongly**, destabilising the single bond. So nitrogen's catenation tendency is *weaker* than phosphorus's, even though nitrogen sits above it.

## 7.3 Oxidation states, and the disproportionation habit

Common states are **−3, +3 and +5**.

- **The −3 state becomes less accessible down the group** as size and metallic character rise; **bismuth barely forms any −3 compound.**
- **The +5 state becomes less stable down the group** and the +3 state more stable — the **inert-pair effect** again. **The only well-characterised Bi(V) compound is BiF₅.**
- **Nitrogen alone shows +1, +2 and +4** as well, in its oxides; phosphorus shows +1 and +4 in some oxoacids.
- **Nitrogen's covalency is capped at 4** — only one s and three p orbitals are available. The heavier elements use vacant d orbitals to expand covalency, as in **[PF₆]⁻**.

~~~viz
{
  "type": "OxidationStateMap",
  "caption": "Nitrogen spans every oxidation state from -III to +V - a range no other Group 15 element approaches.",
  "describe": "A ladder of nine rungs. From the top: +V nitric acid and dinitrogen pentoxide; +IV nitrogen dioxide and dinitrogen tetroxide; +III nitrous acid and dinitrogen trioxide; +II nitric oxide; +I nitrous oxide; 0 dinitrogen; -I hydroxylamine; -II hydrazine; -III ammonia.",
  "element": "N",
  "rungs": [
    { "state": "+V",   "species": ["HNO3", "N2O5"],  "tone": "good",   "note": "most oxidised" },
    { "state": "+IV",  "species": ["NO2", "N2O4"],   "tone": "warn",   "note": "disproportionates in acid" },
    { "state": "+III", "species": ["HNO2", "N2O3"],  "tone": "warn",   "note": "both oxidant and reductant" },
    { "state": "+II",  "species": ["NO"],            "tone": "accent", "note": "odd electron, paramagnetic" },
    { "state": "+I",   "species": ["N2O"],           "tone": "accent", "note": "neutral oxide" },
    { "state": "0",    "species": ["N2"],            "tone": "good",   "note": "941 kJ/mol triple bond" },
    { "state": "-I",   "species": ["NH2OH"],         "tone": "warn",   "note": "disproportionates" },
    { "state": "-II",  "species": ["N2H4"],          "tone": "accent", "note": "reducing agent" },
    { "state": "-III", "species": ["NH3", "N3-"],    "tone": "good",   "note": "most reduced" }
  ]
}
~~~

**Disproportionation is the signature reaction of the intermediate states**, and the two cases to know are:

\[\mathrm{3HNO_2\rightarrow HNO_3+H_2O+2NO}\qquad(\text{all N states }+1\text{ to }+4\text{ disproportionate in acid})\]
\[\mathrm{4H_3PO_3\xrightarrow{\Delta}3H_3PO_4+PH_3}\qquad(\text{P intermediates go to }+5\text{ and }-3,\text{ in acid }\textit{and}\text{ alkali})\]

For **As, Sb and Bi the +3 state becomes progressively more stable against disproportionation** as we descend.

## 7.4 The anomalies of nitrogen

Nitrogen differs from the rest of its group for reasons that should now be familiar — **small size, high electronegativity, and no d orbitals in the valence shell** — but the consequences are specific:

1. **Nitrogen alone forms strong pπ–pπ multiple bonds**, with itself and with other small, electronegative atoms (C, O). Hence **N₂ is a diatomic molecule with a triple bond (one σ, two π) and an enormous bond enthalpy of 941 kJ mol⁻¹.**
2. **The heavier elements do not form pπ–pπ bonds** — their p orbitals are too large and diffuse to overlap effectively. So **P, As and Sb form single P–P, As–As and Sb–Sb bonds in the elemental state, and bismuth forms metallic bonds.**
3. **Nitrogen cannot form dπ–pπ bonds**, so species like **R₃P=O and R₃P=CH₂ have no nitrogen analogues.**
4. The single **N–N bond is anomalously weak** (§7.2).
5. **P and As can additionally form dπ–dπ bonds with transition metals**, which is why P(C₂H₅)₃ and As(C₆H₅)₃ are good ligands and NR₃ is comparatively poor at π-accepting.

## 7.5 The hydrides EH₃ — a textbook gradation

Every element forms **EH₃**, and almost every property changes monotonically. This table repays memorising as a *shape*, not as numbers:

| Property | NH₃ | PH₃ | AsH₃ | SbH₃ | BiH₃ |
|---|---|---|---|---|---|
| Melting point / K | 195.2 | 139.5 | 156.7 | 185 | — |
| Boiling point / K | **238.5** | 185.5 | 210.6 | 254.6 | 290 |
| E–H distance / pm | 101.7 | 141.9 | 151.9 | 170.7 | — |
| **∠H–E–H** | **107.8°** | **93.6°** | **91.8°** | **91.3°** | — |
| ΔfH° / kJ mol⁻¹ | **−46.1** | +13.4 | +66.4 | +145.1 | +278 |
| ΔdissH(E–H) / kJ mol⁻¹ | **389** | 322 | 297 | 255 | — |

Read four separate trends off it:

- **Stability falls NH₃ → BiH₃** (bond dissociation enthalpy falls; ΔfH° goes from negative to strongly positive — only NH₃ is thermodynamically stable with respect to its elements).
- **Reducing character therefore rises**: NH₃ is only a mild reducing agent, **BiH₃ is the strongest reducing agent of the series.**
- **Basicity falls: NH₃ > PH₃ > AsH₃ > SbH₃ ≥ BiH₃.**
~~~viz
{
  "type": "TrendChart",
  "caption": "The H-E-H angle collapses down Group 15: only ammonia is near-tetrahedral, and the heavier hydrides bond through almost pure p orbitals.",
  "describe": "Line plot of bond angle against hydride. Ammonia 107.8 degrees, phosphine 93.6, arsine 91.8, stibine 91.3. Ammonia is highlighted as the outlier.",
  "yLabel": "angle H-E-H / degrees",
  "points": [
    { "x": "NH3",  "y": 107.8, "anomaly": true, "note": "sp3, true lone pair" },
    { "x": "PH3",  "y": 93.6 },
    { "x": "AsH3", "y": 91.8 },
    { "x": "SbH3", "y": 91.3, "note": "~ pure p" }
  ]
}
~~~

- **The bond angle collapses from 107.8° to ≈ 91°.** As the central atom grows and its electronegativity falls, the bonding pairs move further out and repel each other less, so lone-pair/bond-pair repulsion squeezes the angle down toward 90° — i.e. the heavier hydrides use almost pure p orbitals for bonding.
- **NH₃ boils higher than PH₃** despite being lighter, because of **hydrogen bonding** — the same anomaly as H₂O versus H₂S. From PH₃ onward boiling point rises normally with molar mass.

## 7.6 Reactivity of the elements

**Towards hydrogen** — all form EH₃, as above.

**Towards oxygen** — all form **E₂O₃ and E₂O₅**. Two rules: **the oxide in the higher oxidation state is more acidic than that in the lower state**, and **acidic character decreases down the group.** Hence for the E₂O₃ series:

\[\mathrm{\underbrace{N_2O_3,\ P_4O_6}_{purely\ acidic}\quad \underbrace{As_2O_3,\ Sb_2O_3}_{amphoteric}\quad \underbrace{Bi_2O_3}_{predominantly\ basic}}\]

**Towards halogens** — two series, **EX₃ and EX₅**. But **nitrogen forms no pentahalide**, because it has no d orbitals. All trihalides except nitrogen's are stable; **of the nitrogen trihalides only NF₃ is stable.** Trihalides are predominantly covalent **except BiF₃**, and pentahalides are more covalent than trihalides.

**Towards metals** — all form binary compounds in the **−3** state: Ca₃N₂ (nitride), Ca₃P₂ (phosphide), Na₃As (arsenide), Zn₃Sb₂ (antimonide), Mg₃Bi₂ (bismuthide).

## 7.7 Dinitrogen

**Preparation.** Commercially by **liquefaction and fractional distillation of air** — liquid N₂ (bp 77.2 K) distils off first, leaving liquid O₂ (bp 90 K). In the laboratory:

\[\mathrm{NH_4Cl(aq)+NaNO_2(aq)\rightarrow N_2+2H_2O+NaCl}\]

Small amounts of NO and HNO₃ contaminate this, and are removed by passing the gas through **aqueous H₂SO₄ containing potassium dichromate**. Also:

\[\mathrm{(NH_4)_2Cr_2O_7\xrightarrow{\Delta}N_2+4H_2O+Cr_2O_3}\]

**Very pure nitrogen** comes from thermal decomposition of an **azide**:

\[\mathrm{Ba(N_3)_2\xrightarrow{\Delta}Ba+3N_2};\qquad \mathrm{2NaN_3\xrightarrow{300^{\circ}C}2Na+3N_2}\]

Other routes, all of which are really oxidations of ammonia:

\[\mathrm{2NH_3+3NaOCl\rightarrow N_2+3NaCl+3H_2O};\qquad \mathrm{8NH_3+3Br_2\rightarrow N_2+6NH_4Br}\]
\[\mathrm{3Cl_2+8NH_3\ (excess)\rightarrow N_2+6NH_4Cl}\]

> **A safety point that is really a stoichiometry point.** In the chlorine/ammonia reaction the **ammonia must stay in excess.** If the ammonia concentration is allowed to fall, the product changes completely:
>
> \[\mathrm{3Cl_2+NH_3\ (limited)\rightarrow NCl_3+3HCl}\qquad(\mathbf{NCl_3\ is\ tremendously\ explosive})\]
>
> This is the same "name the excess reagent first" discipline that governs CO₂/OH⁻ (§6.2).

**Physical properties.** Colourless, odourless, tasteless, non-toxic; two stable isotopes **¹⁴N and ¹⁵N**; very low solubility in water (23.2 cm³ per litre at 273 K, 1 bar); low freezing and boiling points.

**Why dinitrogen is inert — and when it stops being.** The N≡N bond enthalpy of **941 kJ mol⁻¹** is the reason for room-temperature inertness; **reactivity rises rapidly with temperature.**

\[\mathrm{6Li+N_2\xrightarrow{\Delta}2Li_3N};\qquad \mathrm{3Mg+N_2\xrightarrow{\Delta}Mg_3N_2}\]
\[\mathrm{N_2+3H_2\xrightarrow[Fe\ catalyst]{773\ K}2NH_3}\qquad(\text{Haber, §8.1})\]
\[\mathrm{N_2+O_2\xrightarrow{\approx 2000\ K}2NO}\]

**Absorption by calcium carbide** gives a nitrogenous fertiliser:

\[\mathrm{CaC_2+N_2\xrightarrow{1100^{\circ}C}CaNCN+C}\qquad(\textbf{nitrolim},\ \text{calcium cyanamide}+\text{carbon})\]

**Uses.** Manufacture of ammonia and other nitrogen chemicals; **inert atmospheres** in the iron and steel industry and as a diluent for reactive chemicals; **liquid nitrogen as a refrigerant** for biological materials, food and cryosurgery.

## 7.8 Nitrides

Classify by bonding, exactly as for the carbides (§6.3):

| Class | Examples | Character |
|---|---|---|
| **Ionic / salt-like** | Li₃N, Na₃N, K₃N, Be₃N₂, Mg₃N₂, Ca₃N₂ | hydrolysed by water to NH₃ |
| **Covalent** | BN, AlN, Si₃N₄, Ge₃N₄, Sn₃N₄ | giant covalent, refractory, inert |
| **Interstitial** | MN with M = Sc, Ti, Zr, Hf, La | metallic lustre and conductivity retained |

The **interstitial nitrides have a neat structural rationale**: the metal adopts a close-packed (hcp or fcc) lattice, in which **the number of octahedral voids per unit cell equals the number of metal atoms**. Nitrogen fills **all** the octahedral voids, so the stoichiometry comes out as exactly **MN**.

Ionic nitrides hydrolyse straightforwardly, which is also a preparation of ammonia:

\[\mathrm{N^{3-}+3H_2O\rightarrow NH_3+3OH^-}\]

### Trap bank — Group 15 trends and dinitrogen

- **Melting point rises only up to arsenic, then falls to bismuth**; boiling point rises throughout. Do not report one trend for both.
- **N–N (161) is weaker than P–P (202)** — the reverse of C–C vs Si–Si. Reason: lone-pair repulsion across a very short bond. Hence **phosphorus, not nitrogen, catenates best in this group.**
- Group 15 ionisation enthalpies exceed Group 14's largely because of the **half-filled np³ stability**, not size alone.
- **Nitrogen forms no pentahalide** (no d orbitals), and **only NF₃ is a stable nitrogen trihalide.**
- **Bi(V) is essentially confined to BiF₅**; Bi barely forms a −3 compound at all.
- **All nitrogen states from +1 to +4 disproportionate in acid.** 3HNO₂ → HNO₃ + H₂O + 2NO is the one to have ready.
- The **EH₃ bond angle falls from 107.8° to ≈ 91°** — the heavier hydrides bond through almost pure p orbitals.
- **NH₃ boils higher than PH₃** (hydrogen bonding) even though it is lighter — the trend is *not* monotonic in boiling point at the top.
- **Basicity NH₃ > PH₃ > AsH₃ > SbH₃ ≥ BiH₃**, but **reducing power runs the opposite way**, with BiH₃ strongest.
- In the Cl₂/NH₃ reaction, **excess ammonia gives N₂; limited ammonia gives explosive NCl₃.** Name the excess reagent.
- In interstitial nitrides MN, the formula follows because **nitrogen fills every octahedral void** and those voids equal the metal atoms in number.
- E₂O₃ acidity: **N₂O₃, P₄O₆ acidic → As₂O₃, Sb₂O₃ amphoteric → Bi₂O₃ basic.** Higher oxidation state is always the more acidic oxide.

# 8. Group 15: ammonia and the oxides of nitrogen

## 8.1 Ammonia

**Preparation.** Ammonia occurs naturally in small amounts from the decay of nitrogenous organic matter:

\[\mathrm{NH_2CONH_2+2H_2O\rightarrow (NH_4)_2CO_3\rightleftharpoons 2NH_3+H_2O+CO_2}\]

On a small scale, decompose an ammonium salt with a strong base:

\[\mathrm{2NH_4Cl+Ca(OH)_2\rightarrow 2NH_3+2H_2O+CaCl_2};\qquad \mathrm{(NH_4)_2SO_4+2NaOH\rightarrow 2NH_3+2H_2O+Na_2SO_4}\]

Two further routes worth knowing because they appear in problem chains — **reduction of nitrate or nitrite**, and **hydrolysis of a metal nitride**:

\[\mathrm{NO_3^-\ or\ NO_2^-\ +\ Zn/Al+NaOH\rightarrow NH_3+[Zn(OH)_4]^{2-}\ or\ [Al(OH)_4]^-}\]
\[\mathrm{N^{3-}+3H_2O\rightarrow NH_3+3OH^-}\]

**The Haber process.**

\[\mathrm{N_2(g)+3H_2(g)\rightleftharpoons 2NH_3(g)}\qquad \Delta_fH^{\circ}=-46.1\ \mathrm{kJ\ mol^{-1}}\]

The reaction is **exothermic and proceeds with a decrease in the number of gas molecules (4 → 2)**, so by **Le Chatelier's principle high pressure and low temperature both favour ammonia.** The industrial conditions are therefore a *compromise*, not an optimum:

| Variable | Value | Why |
|---|---|---|
| Pressure | **≈ 200 × 10⁵ Pa (≈ 200 atm)** | high pressure genuinely favours the product |
| Temperature | **≈ 700 K** | equilibrium wants it *lower*; rate wants it *higher* — 700 K is the compromise |
| Catalyst | **iron oxide with small amounts of K₂O and Al₂O₃** | raises the *rate* of attaining equilibrium, not the yield |

Earlier plants used iron with **molybdenum as promoter**. Note carefully what the catalyst does and does not do: **a catalyst never shifts the position of an equilibrium**, so it cannot improve the yield — it only lets the system reach equilibrium fast enough at a temperature where the yield is still acceptable. That same argument recurs in the contact process (§14.2).

**Physical properties.** Colourless gas with a pungent odour; freezing and boiling points **198.4 K and 239.7 K**. In the solid and liquid states it is **associated through hydrogen bonds**, which is why both melting and boiling points are far higher than its molar mass would suggest. **Highly soluble in water.**

**Basic character.** The aqueous solution is weakly basic:

\[\mathrm{NH_3(g)+H_2O(l)\rightleftharpoons NH_4^+(aq)+OH^-(aq)}\]

It forms ammonium salts with acids, and as a weak base it **precipitates the hydroxides (or hydrated oxides) of many metals**:

\[\mathrm{ZnSO_4+2NH_4OH\rightarrow Zn(OH)_2\downarrow(white)+(NH_4)_2SO_4}\]
\[\mathrm{FeCl_3+3NH_4OH\rightarrow Fe_2O_3\cdot xH_2O\downarrow(brown)+3NH_4Cl}\]

**As a Lewis base** the nitrogen lone pair forms complexes, and these are the standard detection tests for Cu²⁺ and Ag⁺:

\[\mathrm{Cu^{2+}(blue)+4NH_3\rightleftharpoons [Cu(NH_3)_4]^{2+}\ (deep\ blue)}\]
\[\mathrm{Ag^++Cl^-\rightarrow AgCl\downarrow(white)};\qquad \mathrm{AgCl+2NH_3\rightarrow [Ag(NH_3)_2]Cl\ (colourless\ solution)}\]

Recall from §2.3a that this second step is exactly what distinguishes **AgCl (dissolves in NH₄OH) from TlCl (does not).**

**Structure.** **Trigonal pyramidal**, nitrogen at the apex, **three bond pairs and one lone pair**, ∠H–N–H = 107.8° — the tetrahedral angle compressed by lone-pair/bond-pair repulsion.

**Uses.** Nitrogenous fertilisers (ammonium nitrate, urea, ammonium phosphate, ammonium sulphate); manufacture of nitric acid; **liquid ammonia as a refrigerant.**

## 8.2 Liquid ammonia as a solvent, and ammonolysis

Two ideas here are genuinely conceptual and get asked as "explain why".

**Acetic acid is a *strong* acid in liquid ammonia but a weak acid in water.** The comparison is between two proton acceptors:

\[\mathrm{NH_3+H^+\rightarrow NH_4^+};\qquad \mathrm{H_2O+H^+\rightarrow H_3O^+}\]

Ammonia is the **stronger base** of the two, so it solvates the proton more effectively and pulls the ionisation of a weak acid to completion. **The strength of an acid is not an absolute property — it is measured relative to the solvent.**

**Ammonolysis is the exact structural analogue of hydrolysis**, with NH₂⁻ playing the role of OH⁻ and the nitride playing the role of the oxide:

\[\mathrm{SiCl_4+4H_2O\rightarrow 4HCl+Si(OH)_4\xrightarrow{\Delta}SiO_2+2H_2O}\]
\[\mathrm{SiCl_4+8NH_3\rightarrow 4NH_4Cl+Si(NH_2)_4\xrightarrow{\Delta}Si_3N_4+NH_3}\]

And the parallel extends to the kinetics: the rate of hydrolysis is suppressed by **HCl vapour**, and the rate of ammonolysis by **NH₄Cl vapour** — in each case the common product pushes the equilibrium back.

## 8.3 The five oxides of nitrogen

Nitrogen forms an oxide in every state from +1 to +5 — a range no other Group 15 element approaches.

| Oxide | Name | N state | Preparation | Appearance and nature |
|---|---|---|---|---|
| **N₂O** | dinitrogen oxide (laughing gas) | **+1** | \(\mathrm{NH_4NO_3\xrightarrow{\Delta}N_2O+2H_2O}\) | colourless gas, **neutral** |
| **NO** | nitrogen monoxide | **+2** | \(\mathrm{2NaNO_2+2FeSO_4+3H_2SO_4\rightarrow Fe_2(SO_4)_3+2NaHSO_4+2H_2O+2NO}\) | colourless gas, **neutral** |
| **N₂O₃** | dinitrogen trioxide | **+3** | \(\mathrm{2NO+N_2O_4\xrightarrow{-30^{\circ}C}2N_2O_3}\) | pale blue solid (mp −100 °C), intense blue liquid, **acidic** |
| **NO₂ / N₂O₄** | nitrogen dioxide / tetroxide | **+4** | \(\mathrm{2Pb(NO_3)_2\xrightarrow{673\ K}4NO_2+2PbO+O_2}\) | NO₂ brown gas; N₂O₄ colourless solid/liquid; both **acidic** |
| **N₂O₅** | dinitrogen pentoxide | **+5** | \(\mathrm{4HNO_3+P_4O_{10}\rightarrow 4HPO_3+2N_2O_5}\) | colourless solid, **acidic** |

**Other preparations worth having**, because they double as redox questions:

\[\mathrm{Zn+HNO_3\ (dilute,\ cold)\rightarrow Zn(NO_3)_2+N_2O+H_2O}\]
\[\mathrm{Cu+HNO_3\ (1:1,\ hot)\rightarrow Cu(NO_3)_2+NO+H_2O};\qquad \mathrm{4NH_3+5O_2\xrightarrow[6\ atm]{750^{\circ}C,\ Pt}4NO+6H_2O}\]
\[\mathrm{Cu+HNO_3\ (6\ M)\rightarrow Cu(NO_3)_2+NO+NO_2\xrightarrow{cool\ to\ -30^{\circ}C}\text{blue liquid }N_2O_3}\]
\[\mathrm{M(NO_3)_2\xrightarrow{\Delta}MO+2NO_2+\tfrac{1}{2}O_2}\quad(M=\mathrm{Pb,\ Cu,\ Ba,\ Ca});\qquad \mathrm{4AgNO_3+2Cl_2\rightarrow 4AgCl+2N_2O_5+O_2}\]

**Structures and bond parameters** — all are resonance hybrids, and the shapes are examinable:

| Oxide | Shape | Key parameters |
|---|---|---|
| N₂O | **linear**, N–N–O | N–N 113 pm, N–O 119 pm |
| NO | diatomic | N–O 115 pm; **odd electron count → paramagnetic** |
| N₂O₃ | planar, **N–N bonded** | N–N 186 pm, ∠ON–N 105° |
| NO₂ | **angular** | N–O 120 pm, ∠O–N–O 134° |
| N₂O₄ | **planar**, N–N bonded | N–N 175 pm, N–O 121 pm, ∠ 135° |
| N₂O₅ | **planar**, O-bridged | N–O(bridge) 151 pm, N–O 119 pm |

~~~viz
{
  "type": "MODiagram",
  "caption": "Nitric oxide has 11 valence electrons, so one must occupy an antibonding pi*2p orbital - which fixes the bond order at two and a half and makes NO paramagnetic.",
  "describe": "Molecular orbital energy diagram for NO. From the bottom: sigma 2s filled, sigma star 2s filled, the degenerate pi 2p pair filled with four electrons, sigma 2p filled, then a single unpaired electron in one of the degenerate pi star 2p orbitals, and sigma star 2p empty.",
  "left": "N",
  "right": "O",
  "centre": "NO",
  "levels": [
    { "label": "\u03c32s",  "energy": 1, "electrons": 2 },
    { "label": "\u03c3*2s", "energy": 2, "electrons": 2, "anti": true },
    { "label": "\u03c02p",  "energy": 3, "electrons": 2, "degenerate": { "electrons": 2 } },
    { "label": "\u03c32p",  "energy": 4, "electrons": 2 },
    { "label": "\u03c0*2p", "energy": 5, "electrons": 1, "degenerate": { "electrons": 0 }, "anti": true, "mark": true },
    { "label": "\u03c3*2p", "energy": 6, "electrons": 0, "anti": true }
  ],
  "results": [
    "bonding 8, antibonding 3  \u2192  bond order 2\u00bd",
    "one unpaired electron  \u2192  NO is paramagnetic",
    "remove it (NO\u207a): order 3, N-O contracts 1.15 \u2192 1.06 \u00c5"
  ]
}
~~~

**The anhydride relationships** are the single most useful thing in this section:

| Oxide | With water | With NaOH |
|---|---|---|
| N₂O | fairly soluble, **neutral solution** | no reaction |
| NO | sparingly soluble, **neutral solution** | no reaction |
| **N₂O₃** | **2HNO₂** — so N₂O₃ is the **anhydride of nitrous acid** | NaNO₂ |
| **NO₂** | **HNO₂ + HNO₃** — so NO₂ is a **mixed anhydride** | **NaNO₂ + NaNO₃** |
| **N₂O₅** | **2HNO₃** — the **anhydride of nitric acid** | NaNO₃ |

> **NO₂ is a mixed anhydride, and that is why it gives *two* salts with alkali.** If a question hands you NO₂ + NaOH and expects a single product, it is testing exactly this.

## 8.4 Redox behaviour of the nitrogen oxides

**Decomposition.**

\[\mathrm{2N_2O\xrightarrow{500-900^{\circ}C}2N_2+O_2};\qquad \mathrm{2NO\xrightarrow{800^{\circ}C}N_2+O_2};\qquad \mathrm{2NO_2\xrightarrow{620^{\circ}C}2NO+O_2}\]
\[\mathrm{N_2O_3\xrightarrow{room\ temp.}NO_2+NO};\qquad \mathrm{N_2O_4\xrightarrow{-11^{\circ}C}2NO_2}\ (\text{white solid}\rightarrow\text{brown gas})\]

**N₂O supports combustion better than air.** Its decomposition gives a mixture containing **33 % O₂ against 20 % in air**, so burning substances flare in it:

\[\mathrm{S+N_2O\rightarrow SO_2+N_2};\qquad \mathrm{Mg+N_2O\rightarrow MgO+N_2};\qquad \mathrm{Cu+N_2O\rightarrow CuO+N_2}\]

**NO is both oxidising and reducing**, which is the point of it:

\[\text{reducing: }\mathrm{KMnO_4+NO+H_2SO_4\rightarrow K_2SO_4+MnSO_4+HNO_3+H_2O}\]
\[\text{oxidising: }\mathrm{SO_2+2NO+H_2O\rightarrow H_2SO_4+N_2O};\qquad \mathrm{H_2S+2NO\rightarrow H_2O+S\downarrow+N_2O}\]
\[\mathrm{3SnCl_2+2NO+6HCl\rightarrow 3SnCl_4+2NH_2OH}\qquad(\text{a preparation of }\textbf{hydroxylamine})\]

NO is **absorbed by FeSO₄ solution** (forming the brown FeSO₄·NO, the basis of the brown-ring test) and combines with halogens to give **nitrosyl halides, 2NO + X₂ → 2NOX.**

**NO₂ is likewise both**, and the two contrasting cases are worth pairing:

\[\text{oxidising: }\mathrm{SO_2+NO_2+H_2O\rightarrow H_2SO_4+NO};\qquad \mathrm{CO+NO_2\rightarrow CO_2+NO};\qquad \mathrm{H_2S+NO_2\rightarrow H_2O+S\downarrow+NO}\]
\[\text{reducing: }\mathrm{KMnO_4+NO_2+H_2SO_4\rightarrow K_2SO_4+MnSO_4+HNO_3+H_2O}\]
\[\mathrm{O_3+2NO_2\rightarrow O_2+N_2O_5}\]

> **A subtle trap in that last one.** In O₃ + 2NO₂ → O₂ + N₂O₅ the **O₂ is not the reduction product of ozone** in the naive sense — nitrogen is oxidised from +4 to +5 and ozone supplies the oxygen. Track the oxidation states of *nitrogen*, not the appearance of O₂.
>
> And note **2KI + 2NO₂ → I₂ + 2KNO₂**: NO₂ oxidises iodide, but **NO is not the product here** — nitrite is.

**N₂O₅ is an ionic solid**, and one reaction proves it:

\[\mathrm{N_2O_5+NaCl\rightarrow NaNO_3+NO_2Cl}\]

This only makes sense if the solid is the **ion pair [NO₂]⁺[NO₃]⁻** — the nitronium ion transfers to chloride while nitrate stays with sodium. Also \(\mathrm{I_2+5N_2O_5\rightarrow I_2O_5+10NO_2}\), and the I₂O₅ so made is the reagent for **estimating CO** (§6.1).

### Trap bank — ammonia and the nitrogen oxides

- The Haber catalyst **raises the rate, not the yield.** 700 K is a *compromise* — the equilibrium wants lower, the rate wants higher.
- **NH₃ is trigonal pyramidal with ∠H–N–H = 107.8°**, not tetrahedral 109.5° — one lone pair compresses it.
- **AgCl dissolves in NH₄OH as [Ag(NH₃)₂]⁺; Zn(OH)₂ dissolves in excess NH₄OH; Al(OH)₃ does not** (§4.4). Three different outcomes with the same reagent.
- **CH₃COOH is a strong acid in liquid NH₃** — acid strength is relative to the solvent, and NH₃ is a stronger base than H₂O.
- **N₂O and NO are neutral oxides.** Only N₂O₃, NO₂ and N₂O₅ are acidic.
- **N₂O₃ is the anhydride of HNO₂; N₂O₅ of HNO₃; NO₂ is a *mixed* anhydride** and therefore gives **NaNO₂ + NaNO₃** with alkali.
- **N₂O supports combustion** because its decomposition liberates 33 % O₂ versus 20 % in air.
- **NO and NO₂ are each both oxidising and reducing.** Do not label either one-way.
- **NO is paramagnetic** (odd number of electrons); N₂O₄ is diamagnetic. The NO₂ ⇌ N₂O₄ equilibrium therefore changes the magnetic behaviour as well as the colour.
- **N₂O₅ is [NO₂]⁺[NO₃]⁻ in the solid**, proved by N₂O₅ + NaCl → NaNO₃ + NO₂Cl.
- In O₃ + 2NO₂ → O₂ + N₂O₅, follow **nitrogen's** oxidation state; the O₂ is not a straightforward ozone reduction product.

# 9. Group 15: the oxoacids of nitrogen and nitric acid

Nitrogen forms three oxoacids: **H₂N₂O₂ (hyponitrous acid), HNO₂ (nitrous acid)** and **HNO₃ (nitric acid)** — of which nitric acid dominates.

## 9.1 Nitrous acid, HNO₂

**Preparation.** Acidify a nitrite, or hydrate its anhydride:

\[\mathrm{M{-}NO_2+dil.\ HCl\ or\ H_2SO_4\rightarrow HNO_2};\qquad \mathrm{N_2O_3+H_2O\rightarrow 2HNO_2}\]

**It is both an oxidising and a reducing agent** — nitrogen at +3 sits in the middle of the range, so it can go either way. That dual character is the whole point of HNO₂.

**As an oxidant** (releasing nascent oxygen, \(\mathrm{2HNO_2\rightarrow H_2O+2NO+[O]}\)):

\[\mathrm{2KI+2HNO_2+2HCl\rightarrow 2KCl+2H_2O+2NO+I_2}\]
\[\mathrm{SnCl_2+2HNO_2+2HCl\rightarrow SnCl_4+2NO+2H_2O};\qquad \mathrm{SO_2+2HNO_2\rightarrow H_2SO_4+2NO}\]
\[\mathrm{H_2S+2HNO_2\rightarrow 2H_2O+S\downarrow+2NO};\qquad \mathrm{2FeSO_4+2HNO_2+H_2SO_4\rightarrow Fe_2(SO_4)_3+2NO+2H_2O}\]

**As a reductant** (being oxidised to nitric acid, \(\mathrm{HNO_2+[O]\rightarrow HNO_3}\)):

\[\mathrm{2KMnO_4+5HNO_2+3H_2SO_4\rightarrow K_2SO_4+2MnSO_4+5HNO_3+3H_2O}\]
\[\mathrm{K_2Cr_2O_7+3HNO_2+4H_2SO_4\rightarrow K_2SO_4+Cr_2(SO_4)_3+3HNO_3+4H_2O}\]
\[\mathrm{H_2O_2+HNO_2\rightarrow H_2O+HNO_3}\]

**Reactions with –NH₂ compounds** — this is the bridge into organic chemistry and is heavily used:

\[\mathrm{HNO_2+NH_3\rightarrow NH_4NO_2\xrightarrow{\Delta}N_2+2H_2O}\]
\[\mathrm{2HNO_2+NH_2CONH_2\ (urea)\rightarrow 2N_2+CO_2+3H_2O}\]
\[\mathrm{HNO_2+C_2H_5NH_2\rightarrow C_2H_5OH+N_2+H_2O}\qquad(\text{aliphatic primary amine})\]
\[\mathrm{HNO_2+C_6H_5NH_2\cdot HCl\xrightarrow{<5^{\circ}C}C_6H_5N{=}NCl+2H_2O}\qquad(\textbf{diazotisation})\]

Note the contrast: an **aliphatic** primary amine gives the alcohol and evolves N₂ immediately, whereas an **aromatic** primary amine at **below 5 °C** gives a stable **benzenediazonium chloride**. Also useful: HNO₂ destroys **thiourea** (→ N₂ + SCN⁻) and **sulphamic acid** (→ N₂ + SO₄²⁻).

## 9.2 Nitric acid, HNO₃

Named **aqua fortis** ("strong water") by the alchemists.

**Laboratory preparation.** Heat a nitrate with concentrated H₂SO₄ in a glass retort:

\[\mathrm{KNO_3+H_2SO_4\rightarrow KHSO_4+HNO_3}\]

**The Ostwald process** — the industrial route, and note that it starts from *ammonia*:

\[\mathrm{4NH_3+5O_2\xrightarrow[500\ K,\ 9\ bar]{Pt/Rh\ gauze}4NO+6H_2O}\]
\[\mathrm{2NO+O_2\rightleftharpoons 2NO_2}\]
\[\mathrm{3NO_2+H_2O\rightarrow 2HNO_3+NO}\qquad(\text{the NO is recycled})\]

Distillation concentrates the aqueous acid to **≈ 68 % by mass**; going further, to 98 %, requires **dehydration with concentrated H₂SO₄.**

**The Birkeland–Eyde (arc) process** fixes atmospheric nitrogen directly, and is much less efficient:

\[\mathrm{N_2+O_2\xrightarrow{3000^{\circ}C,\ electric\ arc}2NO};\quad \mathrm{2NO+O_2\rightarrow 2NO_2};\quad \mathrm{2NO_2+H_2O\rightarrow HNO_2+HNO_3};\quad \mathrm{3HNO_2\rightarrow HNO_3+2NO+H_2O}\]

**Physical properties.** Colourless liquid, fp 231.4 K, bp 355.6 K; **extremely corrosive to skin, causing painful sores**; laboratory grade is ≈ 68 % HNO₃ with specific gravity 1.504. It **acquires a yellow or brown colour on standing** because sunlight decomposes it:

\[\mathrm{4HNO_3\xrightarrow{sunlight}4NO_2+2H_2O+O_2}\]

The colour is removed by warming to 60–80 °C and bubbling dry air through — i.e. by driving off the dissolved NO₂.

## 9.3 Nitric acid as an oxidising agent

In water it is a **strong acid**; its chemistry, though, is dominated by oxidation, since it decomposes readily to give nascent oxygen:

\[\mathrm{2HNO_3\rightarrow H_2O+2NO_2+[O]};\qquad \mathrm{2HNO_3\rightarrow H_2O+2NO+3[O]}\]

**Non-metals are taken to their highest oxoacid**, with NO₂ as the reduction product from hot concentrated acid:

\[\mathrm{S+6HNO_3\rightarrow H_2SO_4+6NO_2+2H_2O};\qquad \mathrm{C+4HNO_3\rightarrow H_2CO_3+4NO_2+2H_2O}\]
\[\mathrm{2P+10HNO_3\rightarrow 2H_3PO_4+10NO_2+2H_2O};\qquad \mathrm{I_2+10HNO_3\rightarrow 2HIO_3+10NO_2+4H_2O}\]

**Metalloids and tin behave the same way:**

\[\mathrm{As+5HNO_3\rightarrow H_3AsO_4+5NO_2+H_2O};\qquad \mathrm{Sb+5HNO_3\rightarrow H_3SbO_4+5NO_2+H_2O}\]
\[\mathrm{Sn+4HNO_3\rightarrow H_2SnO_3\ (metastannic\ acid)+4NO_2+H_2O}\]

**Compounds are oxidised too:**

\[\mathrm{SO_2+2HNO_3\rightarrow H_2SO_4+2NO_2};\qquad \mathrm{H_2S+2HNO_3\rightarrow 2NO_2+2H_2O+S}\]
\[\mathrm{6FeSO_4+3H_2SO_4+2HNO_3\rightarrow 3Fe_2(SO_4)_3+2NO+4H_2O}\]
\[\mathrm{6KI+8HNO_3\rightarrow 6KNO_3+2NO+3I_2+4H_2O};\qquad \mathrm{2HBr+2HNO_3\rightarrow Br_2+2NO_2+2H_2O}\]

**Organic matter** is attacked vigorously: sawdust catches fire when nitric acid is poured on it, turpentine bursts into flame with fuming nitric acid, toluene is oxidised to benzoic acid by the dilute acid, and cane sugar goes to oxalic acid.

## 9.4 Reaction with metals — the product depends on four things

Concentrated nitric acid attacks most metals **except the noble metals**. Gold and platinum dissolve only in **aqua regia**, a mixture of **25 % conc. HNO₃ and 75 % conc. HCl.**

\[\mathrm{3Cu+8HNO_3\ (dilute)\rightarrow 3Cu(NO_3)_2+2NO+4H_2O}\]
\[\mathrm{Cu+4HNO_3\ (conc.)\rightarrow Cu(NO_3)_2+2NO_2+2H_2O}\]
\[\mathrm{4Zn+10HNO_3\ (dilute)\rightarrow 4Zn(NO_3)_2+N_2O+5H_2O}\]
\[\mathrm{Zn+4HNO_3\ (conc.)\rightarrow Zn(NO_3)_2+2NO_2+2H_2O}\]

> **Do not memorise these one by one — memorise the controlling variables.** Armstrong's picture is that the acid first liberates nascent hydrogen, which then reduces nitric acid to whichever product the conditions allow:
>
> \[\mathrm{2HNO_3+2[H]\rightarrow 2NO_2+2H_2O};\quad \mathrm{2HNO_3+6[H]\rightarrow 2NO+4H_2O};\quad \mathrm{2HNO_3+10[H]\rightarrow N_2+6H_2O};\quad \mathrm{2HNO_3+16[H]\rightarrow 2NH_3+6H_2O}\]
>
> **The more dilute the acid and the more reactive the metal, the more deeply the nitrogen is reduced** — from +4 (NO₂) through +2 (NO) and +1 (N₂O) down to −3 (NH₃/NH₄⁺). The four controlling factors are **(a) the nature of the metal, (b) the concentration of the acid, (c) the temperature, and (d) the presence of impurities.**

| Acid concentration | Metal | Main nitrogen product |
|---|---|---|
| **Very dilute (≈ 6 %)** | Mg, Mn | **H₂** + metal nitrate |
| | Fe, Zn, Sn | **NH₄NO₃** + metal nitrate |
| **Dilute (≈ 20 %)** | Pb, Cu, Ag, Hg | **NO** |
| | Fe, Zn | **N₂O** |
| | Sn | **NH₄NO₃** + Sn(NO₃)₂ |
| **Concentrated (≈ 70 %)** | Zn, Fe, Pb, Cu, Ag | **NO₂** |
| | Sn | NO₂ + **H₂SnO₃** (metastannic acid) |

**Only very dilute nitric acid with Mg or Mn gives hydrogen** — with everything else the nitrate ion is reduced in preference to H⁺, which is exactly why nitric acid is not used to prepare hydrogen.

**Passivity.** **Cr and Al do not dissolve in concentrated nitric acid**, because a passive oxide film forms on the surface — the same phenomenon as for Al and Ga in §2.4.

**The xanthoproteic test.** Nitric acid attacks proteins to give a **yellow nitro compound, xanthoprotein**. This is why it stains skin and turns wool yellow, and it is used as a **test for proteins.**

**Uses.** Ammonium nitrate for fertilisers; nitrates for explosives and pyrotechnics; nitroglycerine and TNT; **pickling** of stainless steel (removing scale and oxide from the surface with a strong-acid "pickle liquor"); etching of metals; oxidiser in rocket fuels.

### Trap bank — nitrogen oxoacids and nitric acid

- **HNO₂ is both an oxidant and a reductant** — nitrogen at +3 is mid-range. Expect either role, and check the partner.
- **Aliphatic primary amine + HNO₂ → alcohol + N₂ immediately; aromatic primary amine + HNO₂ below 5 °C → stable diazonium salt.** The temperature and the aromatic/aliphatic distinction both matter.
- **The Ostwald process starts from ammonia, not from nitrogen.** Only Birkeland–Eyde fixes N₂ directly.
- In Ostwald's third step, \(\mathrm{3NO_2+H_2O\rightarrow 2HNO_3+NO}\) — **the NO is recycled**; the stoichiometry is 3, not 2.
- Nitric acid tops out at **68 % by distillation**; reaching 98 % needs **dehydration with conc. H₂SO₄.**
- **Nitric acid does not give hydrogen with metals**, except **very dilute acid with Mg or Mn.** The nitrate ion is reduced in preference to H⁺.
- **The more dilute the acid and the more reactive the metal, the lower the oxidation state of the nitrogen product** — NO₂ → NO → N₂O → NH₄⁺.
- **Cr and Al are rendered passive** by conc. HNO₃; **Au and Pt need aqua regia** (1 : 3 conc. HNO₃ : conc. HCl).
- Nitric acid turns **yellow-brown on standing** because sunlight decomposes it to NO₂ — not because of impurity.
- **Sn with hot conc. HNO₃ gives metastannic acid H₂SnO₃**, not the nitrate (§6.8).

# 10. Group 15: phosphorus — allotropes, phosphine, halides, oxides and oxoacids

## 10.1 The allotropes of phosphorus

| | **White (yellow) P** | **Red P** | **Black P** |
|---|---|---|---|
| Structure | discrete **tetrahedral P₄** molecules | **polymeric** chains of linked P₄ tetrahedra | highly polymerised layer structure |
| Physical state | soft, waxy, translucent solid | brittle powder, iron-grey lustre | opaque monoclinic/rhombohedral crystals |
| Colour | white when pure, yellows on standing | red | black |
| Odour | **garlic-like** | odourless | — |
| Solubility in water | insoluble | insoluble | insoluble |
| **Solubility in CS₂** | **soluble** | **insoluble** | — |
| Physiological action | **poisonous** | **non-poisonous** | — |
| Chemical activity | **very reactive** | much less reactive | least reactive |
| Stability | least stable | stable | **thermodynamically the most stable** |
| **Chemiluminescence** | **glows in the dark** | does not glow | does not glow |

**Why white phosphorus is the reactive one** is a bond-angle argument, and it is the standard question: the **P₄ tetrahedron has ∠P–P–P = 60°**, far below the ≈ 109° that sp³ phosphorus would prefer, so the molecule carries severe **angular (ring) strain.** Relieving that strain drives its reactivity. Hence it **ignites in air** to dense white fumes:

\[\mathrm{P_4+5O_2\rightarrow P_4O_{10}}\]

and it **disproportionates in hot alkali** — note that this is a disproportionation, phosphorus going to both −3 and +1:

\[\mathrm{P_4+3NaOH+3H_2O\rightarrow PH_3+3NaH_2PO_2}\qquad(\text{sodium hypophosphite})\]

**Interconversions.** Heating white P at **573 K in an inert atmosphere for several days** gives red P (or at ≈ 250 °C, or lower in sunlight). **α-black P** forms from red P heated in a sealed tube at **803 K**; **β-black P** from white P at **473 K under high pressure**. α-black P sublimes in air and **does not oxidise in air**; β-black P **does not burn in air up to 673 K.**

**Preparation of white phosphorus** from bone ash or apatite rock (both Ca₃(PO₄)₂):

\[\mathrm{Ca_3(PO_4)_2+3SiO_2\xrightarrow{1200^{\circ}C}3CaSiO_3+P_2O_5};\qquad \mathrm{2P_2O_5+10C\xrightarrow{1500^{\circ}C}P_4+10CO}\]

Or via phosphoric acid: \(\mathrm{Ca_3(PO_4)_2+3H_2SO_4\rightarrow 3CaSO_4+2H_3PO_4}\), then \(\mathrm{H_3PO_4\xrightarrow{320^{\circ}C}HPO_3}\) and \(\mathrm{12C+4HPO_3\xrightarrow{1000^{\circ}C}P_4+12CO+2H_2}\).

**Reactions of phosphorus.**

\[\mathrm{P+H_2SO_4\ (hot\ conc.)\rightarrow H_3PO_4+SO_2+H_2O};\qquad \mathrm{P+KIO_3+H_2SO_4\rightarrow H_3PO_4+I_2+K_2SO_4}\]
\[\mathrm{3Na+P\rightarrow Na_3P};\quad \mathrm{3Mg+2P\rightarrow Mg_3P_2};\quad \mathrm{3Ca+2P\rightarrow Ca_3P_2};\quad \mathrm{Al+P\rightarrow AlP}\]

## 10.2 Phosphine, PH₃

**Preparation.**

\[\mathrm{Ca_3P_2+6H_2O\rightarrow 3Ca(OH)_2+2PH_3};\qquad \mathrm{Ca_3P_2+6HCl\rightarrow 3CaCl_2+2PH_3}\]
\[\mathrm{P_4+3NaOH+3H_2O\rightarrow PH_3+3NaH_2PO_2}\qquad(\text{laboratory, in a }CO_2\text{ atmosphere})\]
\[\mathrm{4H_3PO_3\xrightarrow{\Delta}PH_3+3H_3PO_4};\qquad \mathrm{2AlP+3H_2SO_4\rightarrow Al_2(SO_4)_3+2PH_3}\]

> **Pure phosphine is *not* spontaneously inflammable.** It becomes so only because of traces of **P₂H₄ or P₄ vapour.** To purify it, absorb in HI to form **phosphonium iodide PH₄I**, then liberate with KOH:
>
> \[\mathrm{PH_4I+KOH\rightarrow KI+PH_3+H_2O}\]
>
> This is a favourite "explain the discrepancy" question — the impurity, not PH₃ itself, causes the spontaneous ignition.

**Physical properties.** Colourless gas with a **rotten-fish smell**, **highly poisonous**; **explodes on contact with traces of oxidising agents** such as HNO₃, Cl₂ or Br₂ vapour; slightly soluble in water but soluble in CS₂. **Its aqueous solution decomposes in light to red phosphorus and H₂.**

**Chemical properties.** PH₃ is **weakly basic** — much less so than NH₃ (§7.5) — and forms phosphonium salts only with strong acids:

\[\mathrm{PH_3+HBr\rightarrow PH_4Br}\]

With metal salts it gives **phosphides**, and this is its analytical use:

\[\mathrm{3CuSO_4+2PH_3\rightarrow Cu_3P_2+3H_2SO_4};\qquad \mathrm{3HgCl_2+2PH_3\rightarrow Hg_3P_2+6HCl}\]
\[\mathrm{PH_3+6AgNO_3\rightarrow [Ag_3P\cdot 3AgNO_3]\downarrow(yellow)+3HNO_3}\]
\[\mathrm{Ag_3P\cdot 3AgNO_3+3H_2O\xrightarrow{on\ standing}6Ag\downarrow(black)+3HNO_3+H_3PO_3}\]

Other reactions:

\[\mathrm{PH_3+O_2\xrightarrow{150^{\circ}C}P_2O_5+H_2O};\qquad \mathrm{PH_3+3Cl_2\rightarrow PCl_3+3HCl}\]
\[\mathrm{PH_3+4HCHO+HCl\rightarrow [P(CH_2OH)_4]^+Cl^-}\qquad(\text{used to make fire-proof cotton fabric})\]

**A clean NH₃ / PH₃ contrast with bleaching powder** — the products are completely different:

\[\mathrm{PH_3+3Ca(OCl)Cl+3H_2O\rightarrow PCl_3+3HCl+3Ca(OH)_2}\]
\[\mathrm{2NH_3+3Ca(OCl)Cl\rightarrow N_2+3CaCl_2+3H_2O}\]

**Uses.** **Holme's signals** — containers of calcium carbide and calcium phosphide are pierced and thrown into the sea; the evolved gases (C₂H₂ and PH₃) ignite spontaneously and serve as a distress signal. Also in **smoke screens.**

## 10.3 The phosphorus halides

Phosphorus forms **PX₃ (X = F, Cl, Br, I)** and **PX₅ (X = F, Cl, Br)**.

**Phosphorus trichloride, PCl₃.**

\[\mathrm{P_4+6Cl_2\rightarrow 4PCl_3};\qquad \mathrm{P_4+8SOCl_2\rightarrow 4PCl_3+4SO_2+2S_2Cl_2}\]

A colourless oily liquid that **hydrolyses in moist air**, and — the reaction organic chemistry cares about — converts –OH groups to –Cl:

\[\mathrm{PCl_3+3H_2O\rightarrow H_3PO_3+3HCl}\]
\[\mathrm{3CH_3COOH+PCl_3\rightarrow 3CH_3COCl+H_3PO_3};\qquad \mathrm{3C_2H_5OH+PCl_3\rightarrow 3C_2H_5Cl+H_3PO_3}\]

**Phosphorus pentachloride, PCl₅.**

\[\mathrm{P_4+10Cl_2\rightarrow 4PCl_5};\qquad \mathrm{P_4+10SO_2Cl_2\rightarrow 4PCl_5+10SO_2}\]

A yellowish-white powder. **Hydrolysis goes in two stages** — this is the detail that gets tested:

\[\mathrm{PCl_5+H_2O\ (limited)\rightarrow POCl_3+2HCl};\qquad \mathrm{POCl_3+3H_2O\rightarrow H_3PO_4+3HCl}\]

On heating it **sublimes but then decomposes**: \(\mathrm{PCl_5\xrightarrow{\Delta}PCl_3+Cl_2}\). With –OH compounds it does the same job as PCl₃ but also delivers POCl₃:

\[\mathrm{C_2H_5OH+PCl_5\rightarrow C_2H_5Cl+POCl_3+HCl};\qquad \mathrm{CH_3COOH+PCl_5\rightarrow CH_3COCl+POCl_3+HCl}\]

Finely divided metals are chlorinated: \(\mathrm{2Ag+PCl_5\rightarrow 2AgCl+PCl_3}\), \(\mathrm{Sn+2PCl_5\rightarrow SnCl_4+2PCl_3}\).

> **PCl₅ has two different structures, and which one you quote depends on the phase.**
>
> - **Gas and liquid: trigonal bipyramidal (sp³d).** The **three equatorial P–Cl bonds (202 pm) are equivalent and shorter; the two axial bonds (240 pm) are longer**, because an axial bond pair suffers more repulsion (three 90° interactions) than an equatorial one (two 90° interactions).
> - **Solid: an ionic lattice, [PCl₄]⁺[PCl₆]⁻** — with a **tetrahedral** cation and an **octahedral** anion.
>
> "Why are the axial bonds in PCl₅ longer?" and "what is the structure of solid PCl₅?" are two different questions with two different answers.

## 10.4 The oxides of phosphorus

Both important oxides are **dimeric**, built on the P₄ tetrahedron.

**P₄O₆ (phosphorus trioxide).** From phosphorus burnt in a **limited** supply of air:

\[\mathrm{P_4+3O_2\ (limited)\rightarrow P_4O_6};\qquad \mathrm{P_4O_6+2O_2\rightarrow P_4O_{10}}\]

Structure: the four phosphorus atoms sit at the corners of a tetrahedron; **each P is bonded to three O and each O bridges two P**, so the **six oxygens lie along the six edges** of the P₄ tetrahedron.

\[\mathrm{P_4O_6+6H_2O\ (cold)\rightarrow 4H_3PO_3}\qquad(\text{so }P_4O_6\text{ is the anhydride of phosphorous acid})\]

**With hot water, however, it gives phosphoric acid and phosphine** — the disproportionation of §7.3 asserting itself.

**P₄O₁₀ (phosphorus pentoxide).** From phosphorus burnt in **excess** air. Structure as P₄O₆ **plus one terminal P=O on each phosphorus** — hence the six bridging plus four terminal oxygens.

\[\mathrm{P_4O_{10}+2H_2O\ (cold)\rightarrow 4HPO_3}\ (\text{metaphosphoric});\qquad \mathrm{P_4O_{10}+6H_2O\ (hot)\rightarrow 4H_3PO_4}\]

**It is a powerful dehydrating agent** — strong enough to strip water out of other acids, which is its most examinable property:

\[\mathrm{2HClO_4\xrightarrow{P_4O_{10}}Cl_2O_7};\qquad \mathrm{4HNO_3\xrightarrow{P_4O_{10}}2N_2O_5};\qquad \mathrm{2CH_3CONH_2\xrightarrow{P_4O_{10}}2CH_3CN}\]

## 10.5 The oxoacids of phosphorus — basicity from structure

| Name | Formula | P state | Characteristic bonds | Preparation |
|---|---|---|---|---|
| **Hypophosphorous** (phosphinic) | **H₃PO₂** | **+1** | **one** P–OH, **two P–H**, one P=O | white P₄ + alkali |
| **Orthophosphorous** (phosphonic) | **H₃PO₃** | **+3** | **two** P–OH, **one P–H**, one P=O | P₄O₆ + H₂O |
| Pyrophosphorous | H₄P₂O₅ | +3 | two P–OH, two P–H, two P=O | PCl₃ + H₃PO₃ |
| Hypophosphoric | H₄P₂O₆ | +4 | four P–OH, two P=O, **one P–P** | red P₄ + alkali |
| **Orthophosphoric** | **H₃PO₄** | **+5** | **three** P–OH, one P=O | P₄O₁₀ + H₂O |
| Pyrophosphoric | H₄P₂O₇ | +5 | four P–OH, two P=O, one **P–O–P** | heat H₃PO₄ |
| Metaphosphoric | (HPO₃)ₙ | +5 | three P–OH, three P=O, three P–O–P | — |

**The three structural rules that generate every answer here:**

1. **Phosphorus is always tetrahedrally surrounded**, and every one of these acids contains **at least one P=O and one P–OH.**
2. **Basicity = the number of P–OH groups, not the number of hydrogens.** Hence **H₃PO₂ is monobasic** (one P–OH) and **H₃PO₃ is dibasic** (two P–OH) — even though both have three hydrogens in the formula. **Hydrogen bonded directly to phosphorus is not ionisable.**
3. Acids in which phosphorus is **below +5** contain, in addition, **either P–P or P–H — but never both.**

**Two consequences follow immediately:**

- **Acids containing a P–H bond are strong reducing agents.** H₃PO₂, with two P–H bonds, is the strongest:

\[\mathrm{4AgNO_3+2H_2O+H_3PO_2\rightarrow 4Ag\downarrow+4HNO_3+H_3PO_4}\]

- **The +3 acids disproportionate on heating**, to +5 and −3:

\[\mathrm{4H_3PO_3\xrightarrow{\Delta}3H_3PO_4+PH_3};\qquad \mathrm{H_3PO_2\xrightarrow{140^{\circ}C}PH_3+H_3PO_4}\]

**The condensation sequence on heating orthophosphoric acid** — losing water and building P–O–P links, exactly parallel to the borate and silicate condensations:

\[\mathrm{H_3PO_4\xrightarrow{gentle,\ 220^{\circ}C}H_4P_2O_7\xrightarrow{strong,\ 320^{\circ}C}(HPO_3)_n}\]

**Graham's salt (Calgon).** Long-chain polyphosphates made by **quenching molten sodium metaphosphate**:

\[\mathrm{NaH_2PO_4\xrightarrow{>240^{\circ}C}(NaPO_3)_3\xrightarrow{625^{\circ}C}NaPO_3\ (melt)\xrightarrow{rapid\ cooling}(NaPO_3)_n}\]

The glassy product is **Graham's salt**, sold as **Calgon** and used to soften water. Its selectivity is the point: **its solutions precipitate Pb²⁺ and Ag⁺ but *not* Ca²⁺ and Mg²⁺** — instead it sequesters the hardness ions into a soluble complex, which is why it softens water without forming a scum. (It is commonly but **incorrectly** called "sodium hexametaphosphate".)

### Trap bank — phosphorus

- **White P is reactive because of 60° angular strain in P₄**, not because of any electronic peculiarity. It glows in the dark, is poisonous, and dissolves in CS₂; red P does none of these.
- **Black phosphorus is the thermodynamically most stable allotrope** — not red, and certainly not white.
- \(\mathrm{P_4+3NaOH+3H_2O\rightarrow PH_3+3NaH_2PO_2}\) is a **disproportionation** (P → −3 and +1). Recognise it as such.
- **Pure PH₃ is not spontaneously inflammable** — traces of **P₂H₄ or P₄ vapour** make it so.
- **PH₃ is much less basic than NH₃** and forms phosphonium salts only with strong acids.
- **PH₃ + bleaching powder → PCl₃; NH₃ + bleaching powder → N₂.** Same reagent, different chemistry.
- **PCl₅ hydrolyses in two stages**, through **POCl₃**. A single-step answer to H₃PO₄ misses the intermediate.
- **PCl₅ is trigonal bipyramidal as a gas/liquid (axial bonds longer) but [PCl₄]⁺[PCl₆]⁻ as a solid.** Two questions, two answers.
- **P₄O₆ with *cold* water gives H₃PO₃; with *hot* water it gives H₃PO₄ + PH₃.** P₄O₁₀ with cold water gives HPO₃; with hot water H₃PO₄. Temperature changes the product in both cases.
- **P₄O₁₀ dehydrates HNO₃ to N₂O₅ and HClO₄ to Cl₂O₇** — that is how those anhydrides are made.
- **Basicity is the number of P–OH groups.** H₃PO₂ monobasic, H₃PO₃ dibasic, H₃PO₄ tribasic. **P–H hydrogen is never ionisable** (§1.5).
- **A P–H bond means a reducing agent.** H₃PO₂ (two P–H) reduces Ag⁺ to silver.
- Sub-+5 phosphorus acids have **P–P or P–H, never both.**
- **Calgon precipitates Pb²⁺ and Ag⁺ but not Ca²⁺/Mg²⁺** — it sequesters hardness rather than precipitating it.

# 11. Group 16: the chalcogens — trends, the anomalies of oxygen, dioxygen and the oxides

Members are **O, S, Se, Te and Po**, collectively the **chalcogens** ("ore formers"). Valence configuration **ns²np⁴**.

## 11.1 Occurrence and periodic trends

**Oxygen is the most abundant element in the earth's crust — 46.6 % by mass** — and dry air contains **20.946 % O₂ by volume**. Sulphur, by contrast, is only 0.03–0.1 % of the crust, occurring as **sulphates** (gypsum CaSO₄·2H₂O, Epsom salt MgSO₄·7H₂O, baryte BaSO₄) and **sulphides** (galena PbS, zinc blende ZnS, copper pyrites CuFeS₂), with traces as H₂S in volcanoes; organically it is in eggs, proteins, garlic, onion, mustard, hair and wool. Se and Te occur as selenides and tellurides in sulphide ores. **Polonium is radioactive** — a decay product of thorium and uranium minerals, with a **half-life of only 13.8 days.**

| Property | Order |
|---|---|
| Covalent radius | **O < S < Se < Te** |
| Ionisation enthalpy (IE₁) | **O > S > Se > Te > Po** |
| **Most negative electron gain enthalpy** | **S > Se > Te > Po > O** |
| Electronegativity | **O > S > Se > Te** |
| Metallic character | **O < S < Se < Te < Po** |
| Melting and boiling point | **Te > Po > Se > S > O** |

> **The electron-gain-enthalpy anomaly.** Oxygen has a **less negative** electron gain enthalpy than sulphur, even though it is the more electronegative element — so oxygen sits *out of order* in that one series. The reason is oxygen's very small size: the incoming electron enters a compact 2p shell where **inter-electronic repulsion** is severe. This is exactly the same anomaly as **F versus Cl** in Group 17 (§15.1), and the two are usually examined together.

**Elemental state.** Oxygen exists as the diatomic gas **O₂**, held together by a genuine **pπ–pπ double bond**, with only weak van der Waals forces between molecules — hence a gas. **The heavier elements do not form stable pπ–pπ bonds and so do not exist as E₂**; they link through single bonds into polyatomic rings, **S₈ and Se₈**. That difference in atomicity is the whole reason for the enormous melting- and boiling-point gap between oxygen and sulphur.

**Physical character** grades as usual: **O and S non-metals, Se and Te metalloids, Po a metal**, and **all the elements show allotropy** (O as O₂ and O₃ — liquid O₂ is pale blue, solid O₂ blue; S as rhombic, monoclinic and plastic).

**Catenation.** **Only sulphur catenates strongly** in this group; oxygen does so to a limited extent. Compare the hydrogen chains:

\[\mathrm{H_2O_2\ (H{-}O{-}O{-}H)};\qquad \mathrm{H_2S_2,\ H_2S_3,\ H_2S_4,\ \ldots}\ (\text{polysulphanes})\]

## 11.2 Oxidation states

- **The −2 state becomes less stable down the group**; polonium hardly shows it.
- **Oxygen is so electronegative that it shows only −2**, with one class of exception: **in the oxygen fluorides OF₂ and O₂F₂ oxygen is +2 and +1 respectively** — fluorine is the only element that can force oxygen positive.
- The others show **+2, +4 and +6**, of which **+4 and +6 are common**. S, Se and Te usually show **+4 with oxygen** and **+6 with fluorine.**
- **The +6 state becomes less stable down the group and +4 more stable** — the inert-pair effect again. Bonding in both +4 and +6 is essentially **covalent**.

## 11.3 The anomalies of oxygen — and the paramagnetism of O₂

Oxygen's anomalies come from **small size and high electronegativity**, plus the **absence of d orbitals**:

- **Strong hydrogen bonding in H₂O**, entirely absent in H₂S — the origin of water's anomalous melting point, boiling point and density behaviour.
- **No d orbitals, so oxygen's covalency is limited to four and in practice rarely exceeds two.** The heavier chalcogens expand their valence shell and exceed four (SF₆).

> **Why is O₂ paramagnetic?** It has an **even number of electrons**, so a simple Lewis structure (O=O, all electrons paired) predicts diamagnetism — and gets it wrong. **Molecular orbital theory** puts the last two electrons **singly into the two degenerate π\*2p antibonding orbitals** with parallel spins, giving **two unpaired electrons** and a bond order of 2. This is the standard proof that MOT succeeds where Lewis structures fail, and it is one of the most frequently asked "explain" questions in the whole chapter.
>
> Note the parallel: **at about 1000 K, S₂ becomes the dominant sulphur species and it is paramagnetic like O₂**, for exactly the same reason.

## 11.4 The hydrides H₂E

| Property | H₂O | H₂S | H₂Se | H₂Te |
|---|---|---|---|---|
| Melting point / K | **273** | 188 | 208 | 222 |
| Boiling point / K | **373** | 213 | 232 | 269 |
| H–E distance / pm | 96 | 134 | 146 | 169 |
| **∠H–E–H** | **104°** | **92°** | **91°** | **90°** |
| ΔfH° / kJ mol⁻¹ | **−286** | −20 | +73 | +100 |
| ΔdissH(H–E) / kJ mol⁻¹ | **463** | 347 | 276 | 238 |
| Dissociation constant Kₐ | 1.8 × 10⁻¹⁶ | 1.3 × 10⁻⁷ | 1.3 × 10⁻⁴ | **2.3 × 10⁻³** |

Four trends, and each has its own cause:

- **Acidic character increases sharply H₂O → H₂Te** (Kₐ rises by thirteen orders of magnitude), because the **H–E bond dissociation enthalpy falls** down the group. Acidity here is about breaking the H–E bond, *not* about electronegativity.
- **Thermal stability decreases** for the same reason — and ΔfH° turns positive from H₂Se onward, so those hydrides are thermodynamically unstable with respect to their elements.
- **Reducing power increases from H₂S to H₂Te**; **water alone has no reducing property.**
- **The bond angle collapses from 104° to 90°** — the same effect as in the Group 15 hydrides (§7.5): the heavier elements bond through nearly pure p orbitals.
- **H₂O's melting and boiling points are wildly out of line**, because of hydrogen bonding. From H₂S onward the trend is normal.

## 11.5 Reactivity of the elements

**Towards oxygen** — all form **EO₂ and EO₃** types (E = S, Se, Te, Po), and **both types are acidic.** O₃ and SO₂ are gases while SeO₂ is a solid. The redox behaviour reverses down the group: **SO₂ is reducing while TeO₂ is oxidising**, with reducing power falling SO₂ → TeO₂.

**Towards halogens** — a large family of **EX₆, EX₄ and EX₂**, with stability **F > Cl > Br > I**.

- **Hexahalides: only the hexafluorides are stable**, all gaseous, all **octahedral**. **SF₆ is exceptionally stable, and the reason is steric/kinetic** — six fluorines shield the sulphur so effectively that there is no low-energy path for attack. It is *not* thermodynamic stability.
- **Tetrafluorides: SF₄ gas, SeF₄ liquid, TeF₄ solid.** All are **sp³d, trigonal bipyramidal with a lone pair in an equatorial position — the see-saw geometry.**
- **All the elements except oxygen form dichlorides and dibromides** (oxygen forms oxides instead). These are **sp³, tetrahedral**-derived — i.e. bent.
- **The monohalides are dimeric**: S₂F₂, S₂Cl₂, S₂Br₂, Se₂Cl₂, Se₂Br₂, and they **disproportionate**:

\[\mathrm{2Se_2Cl_2\rightarrow SeCl_4+3Se}\]

## 11.6 Dioxygen

**Preparation.** In the laboratory, by heating an oxygen-rich salt, or decomposing an unstable higher oxide:

\[\mathrm{2KClO_3\xrightarrow[MnO_2]{\Delta}2KCl+3O_2}\]
\[\mathrm{2Ag_2O\rightarrow 4Ag+O_2};\quad \mathrm{2HgO\rightarrow 2Hg+O_2};\quad \mathrm{2PbO_2\rightarrow 2PbO+O_2};\quad \mathrm{2Pb_3O_4\rightarrow 6PbO+O_2}\]
\[\mathrm{2H_2O_2\xrightarrow{MnO_2\ or\ finely\ divided\ metal}2H_2O+O_2}\]

Industrially, from air by removing CO₂ and water vapour, then **liquefying and fractionally distilling**; or by **electrolysis of water** (O₂ at the anode).

**Properties.** Colourless, odourless; solubility **3.08 cm³ per 100 cm³ of water at 293 K** — small, but exactly what supports aquatic life. Liquefies at 90 K, freezes at 55 K. **Three stable isotopes: ¹⁶O, ¹⁷O, ¹⁸O.** **Paramagnetic despite an even electron count** (§11.3).

It reacts directly with nearly all metals and non-metals **except Au, Pt and some noble gases**. The reactions are strongly exothermic and self-sustaining once started, **but need initiating heat because the O=O bond dissociation enthalpy is high (493.4 kJ mol⁻¹)**:

\[\mathrm{2Ca+O_2\rightarrow 2CaO};\quad \mathrm{4Al+3O_2\rightarrow 2Al_2O_3};\quad \mathrm{P_4+5O_2\rightarrow P_4O_{10}};\quad \mathrm{2ZnS+3O_2\rightarrow 2ZnO+2SO_2}\]
\[\mathrm{2SO_2+O_2\xrightarrow{V_2O_5}2SO_3};\qquad \mathrm{4HCl+O_2\xrightarrow{CuCl_2}2Cl_2+2H_2O}\qquad(\text{Deacon process})\]

**Uses.** Respiration and combustion; **oxy-acetylene welding**; steelmaking; oxygen cylinders in hospitals, high-altitude flying and mountaineering; **liquid oxygen with hydrazine as rocket propellant.**

## 11.7 The classification of simple oxides

A binary compound of oxygen with one other element is an **oxide**; they may be **simple** (MgO, Al₂O₃) or **mixed** (Pb₃O₄, Fe₃O₄). The classification by acid–base character is a framework you will use for the rest of the chapter:

| Type | Definition | Examples |
|---|---|---|
| **Acidic** | gives an acid with water | SO₂, CO₂, N₂O₅, Cl₂O₇ — **and high-oxidation-state metal oxides: Mn₂O₇, CrO₃, V₂O₅** |
| **Basic** | gives a base with water | Na₂O, CaO, BaO — generally metallic oxides |
| **Amphoteric** | reacts with both acid and alkali | Al₂O₃, ZnO, SnO, PbO |
| **Neutral** | neither acidic nor basic | **CO, NO, N₂O** |
| **Mixed** | contains one element in two states | **Pb₃O₄ (2PbO·PbO₂), Fe₃O₄** |

\[\mathrm{SO_2+H_2O\rightarrow H_2SO_3};\qquad \mathrm{CaO+H_2O\rightarrow Ca(OH)_2}\]
\[\mathrm{Al_2O_3+6HCl+9H_2O\rightarrow 2[Al(H_2O)_6]^{3+}+6Cl^-};\qquad \mathrm{Al_2O_3+6NaOH+3H_2O\rightarrow 2Na_3[Al(OH)_6]}\]

> **The rule and its exception.** "Only non-metal oxides are acidic" is the working rule — but **oxides of metals in high oxidation states are acidic too** (Mn₂O₇, CrO₃, V₂O₅). Acidity tracks *oxidation state* at least as strongly as it tracks metal/non-metal character, which is the same principle that made PbO₂ acidic while PbO is amphoteric (§6.9).

**A note on hydrogen peroxide.** H₂O₂ is a Group 16 compound and appears throughout this chapter as a redox partner, but its **preparation, structure (the non-planar open-book, dihedral 111.5° in the gas phase and 90.2° in the solid), volume strength and full reaction set are treated in the Hydrogen chapter**, which owns that topic. Here we use only what is needed: **H₂O₂ acts as both an oxidant and a reductant, in both acidic and alkaline media**, and its reducing action is what distinguishes it from ozone in several tests (§12.3).

### Trap bank — Group 16 trends, dioxygen and the oxides

- **Oxygen's electron gain enthalpy is less negative than sulphur's**, despite oxygen being more electronegative — small size means severe inter-electronic repulsion. Same anomaly as F vs Cl.
- **O₂ is paramagnetic with an even number of electrons.** Only MOT explains it: two unpaired electrons in the degenerate π\*2p orbitals. **S₂ at ~1000 K is paramagnetic for the same reason.**
- **Oxygen shows a positive oxidation state only with fluorine** — +2 in OF₂ and +1 in O₂F₂.
- **Acidity of H₂E rises O → Te because the H–E bond weakens**, not because of electronegativity. **H₂Te is the strongest acid; H₂O the weakest.**
- **Water alone among the hydrides has no reducing power.**
- The **∠H–E–H collapses from 104° to 90°** down the group — nearly pure p bonding in the heavier hydrides.
- **SF₆'s inertness is kinetic/steric, not thermodynamic.** Hydrolysis is thermodynamically favourable but has no low-energy pathway.
- **Only the hexafluorides are stable** among EX₆; **EF₄ species are see-saw (sp³d with an equatorial lone pair)**, not tetrahedral.
- **Oxygen forms no dichloride or dibromide** — it forms oxides instead. Every other chalcogen does.
- **Monohalides are dimeric (S₂Cl₂ etc.) and disproportionate.**
- **SO₂ is reducing but TeO₂ is oxidising** — the redox sense reverses down the group.
- **Neutral oxides are CO, NO and N₂O.** Mixed oxides are Pb₃O₄ and Fe₃O₄.
- **Metal oxides in high oxidation states (Mn₂O₇, CrO₃, V₂O₅) are acidic** — the exception to "only non-metal oxides are acidic".

# 12. Group 16: ozone and the allotropes of sulphur

## 12.1 Ozone — formation, the ozone layer and the threats to it

Ozone is an allotrope of oxygen and, unlike O₂, it is **diamagnetic.** It is far too reactive to persist at sea level, but **at about 20 km altitude it is formed from atmospheric oxygen by sunlight**, and that layer shields the earth's surface from excessive **ultraviolet radiation.**

**Two threats to the layer**, and both are examinable:

\[\mathrm{NO(g)+O_3(g)\rightarrow NO_2(g)+O_2(g)}\]

Nitrogen oxides — particularly **nitric oxide from the exhausts of supersonic aircraft** — combine very rapidly with ozone. The second threat is the **freons** used as aerosol propellants and refrigerants, whose full catalytic chain mechanism is set out in §5.8.

## 12.2 Preparation, and why it must be a *silent* discharge

\[\mathrm{3O_2\rightarrow 2O_3}\qquad \Delta H^{\circ}(298\ \mathrm{K})=+142\ \mathrm{kJ\ mol^{-1}}\]

Pass a **slow, dry** stream of oxygen through a **silent electrical discharge** and about **10 %** converts to ozone; the product is called **ozonised oxygen.** The reasoning behind every one of those conditions:

> **Formation from oxygen is endothermic**, so a *silent* discharge is used rather than a sparking one — **an ordinary arc would supply enough heat to decompose the ozone as fast as it formed.** For concentrations above 10 % a battery of ozonisers is used, and pure ozone (**bp −112.4 °C**) can be condensed in a vessel cooled by liquid oxygen (bp −183 °C) or liquid air (bp −190 °C).

**Why is ozone thermodynamically unstable with respect to oxygen?** Because its decomposition to O₂ is **both exothermic (ΔH negative) and accompanied by an increase in entropy (ΔS positive)**. The two effects **reinforce** each other, giving a large negative ΔG for 2O₃ → 3O₂. This is a standard question and the answer must name both terms.

Fluorine and water also give it, which is worth knowing as a contrast:

\[\mathrm{2F_2+2H_2O\rightarrow 4HF+O_2};\qquad \mathrm{F_2+3H_2O\rightarrow 6HF+O_3}\]

## 12.3 Properties and oxidising power

**Physical.** Pure ozone is a **pale blue gas, dark blue liquid and violet-black solid**, with a characteristic **fishy smell**. Its **intense blue colour arises from absorption of red light.** It is **more toxic than KCN**; above about 100 ppm breathing becomes uncomfortable, causing headache and nausea.

**Oxidising power.** Ozone is one of the strongest oxidants known:

\[\mathrm{O_3+2H^++2e^-\rightarrow O_2+H_2O}\qquad E^{\circ}=+2.07\ \mathrm{V}\]

**Only F₂ and F₂O exceed it.** The mechanism in almost every case is the easy release of nascent oxygen, **O₃ → O₂ + [O]**, which is why most of these reactions leave O₂ behind.

**Sulphides → sulphates, and halide → halogen:**

\[\mathrm{PbS+4O_3\rightarrow PbSO_4+4O_2};\qquad \mathrm{MS+4O_3\rightarrow MSO_4+4O_2}\ (M=\mathrm{Pb,\ Cu,\ Zn,\ Cd})\]
\[\mathrm{2HX+O_3\rightarrow X_2+H_2O+O_2}\ (X=\mathrm{Cl,\ Br,\ I})\]

**Oxo-anions are taken one step up:**

\[\mathrm{NaNO_2+O_3\rightarrow NaNO_3+O_2};\quad \mathrm{Na_2SO_3+O_3\rightarrow Na_2SO_4+O_2};\quad \mathrm{Na_3AsO_3+O_3\rightarrow Na_3AsO_4+O_2}\]

**Moist non-metals go to their oxoacids:**

\[\mathrm{S+H_2O+3O_3\rightarrow H_2SO_4+3O_2};\qquad \mathrm{2P+3H_2O+5O_3\rightarrow 2H_3PO_4+5O_2}\]

**Iodine is the case to watch, because wet and dry give different products:**

\[\mathrm{I_2+5O_3+H_2O\rightarrow 2HIO_3+5O_2}\qquad(\textbf{moist})\]
\[\mathrm{2I_2+9O_3\rightarrow I_4O_9+9O_2}\qquad(\textbf{dry};\ I_4O_9\text{ is yellow, and is }I^{3+}(IO_3^-)_3)\]

**Transition-metal oxidations:**

\[\mathrm{2K_2MnO_4+O_3+H_2O\rightarrow 2KMnO_4+2KOH+O_2}\qquad(\text{used to manufacture }KMnO_4)\]
\[\mathrm{2K_4[Fe(CN)_6]+O_3+H_2O\rightarrow 2K_3[Fe(CN)_6]+2KOH+O_2}\]
\[\mathrm{2FeSO_4+O_3+H_2SO_4\rightarrow Fe_2(SO_4)_3+O_2+H_2O}\]

**Tailing of mercury** — a classic identification:

\[\mathrm{2Hg+O_3\rightarrow Hg_2O+O_2}\]

**Mercury loses its meniscus and its fluidity, sticking to glass** — the "tailing of mercury". Silver likewise gives brown Ag₂O.

**Where ozone is the *reducing* partner** — i.e. reactions in which ozone is itself destroyed by something else. These matter because they distinguish ozone from H₂O₂:

\[\mathrm{H_2O_2+O_3\rightarrow H_2O+2O_2};\qquad \mathrm{BaO_2+O_3\rightarrow BaO+2O_2};\qquad \mathrm{Na_2O_2+O_3+H_2O\rightarrow 2NaOH+2O_2}\]
\[\mathrm{2KOH+5O_3\rightarrow 2KO_3+5O_2+H_2O}\qquad(\text{potassium ozonide})\]

> **A bookkeeping trap.** In almost all of the above ozone gives up **one** oxygen atom and releases O₂. But in a few reactions **every** oxygen atom is consumed:
>
> \[\mathrm{3SO_2+O_3\rightarrow 3SO_3};\qquad \mathrm{3SnCl_2+6HCl+O_3\rightarrow 3SnCl_4+3H_2O}\]
>
> Notice there is **no O₂ among the products.** Check the oxygen balance before assuming O₂ is released.

## 12.4 Structure and estimation

Ozone is **angular, ∠O–O–O ≈ 117°**, with **both O–O bond lengths identical at 128 pm** — intermediate between a single (148 pm) and a double (121 pm) bond. It is therefore a **resonance hybrid** of two equivalent structures, and the equality of the two bond lengths is the experimental proof of that delocalisation.

**Quantitative estimation.** Ozone liberates iodine from **excess KI buffered with borate at pH 9.2**, and the iodine is titrated against standard thiosulphate:

\[\mathrm{2KI+O_3+H_2O\rightarrow I_2+2KOH+O_2};\qquad \mathrm{I_2+2S_2O_3^{2-}\rightarrow S_4O_6^{2-}+2I^-}\]

In **alkaline** solution the reaction goes further, which is why the buffer matters: \(\mathrm{KI+3O_3\rightarrow KIO_3+3O_2}\) and even \(\mathrm{KI+4O_3\rightarrow KIO_4+4O_2}\).

**Absorbents** for ozone are **turpentine oil** and **oil of cinnamon.**

**Uses.** Sterilising water; germicide and disinfectant; **bleaching oils, ivory, flour and starch**; manufacture of KMnO₄; and **locating the position of a double bond** in an unsaturated compound (ozonolysis).

> **Oxidative versus reductive bleaching.** Ozone (like Cl₂) bleaches by **oxidation**, and the effect is **permanent**. SO₂ bleaches by **reduction**, and the effect is **temporary** — the bleached material reoxidises in air and the colour returns. That contrast (§14.1) is one of the most frequently tested qualitative distinctions in the chapter.

## 12.5 The allotropes of sulphur

The two crystalline forms that matter are **rhombic (α) and monoclinic (β)**, and the relationship between them is a **transition temperature**, not a simple one-way change:

\[\mathrm{\alpha\text{-}sulphur\ (rhombic)\underset{<369\ K}{\overset{>369\ K}{\rightleftharpoons}}\beta\text{-}sulphur\ (monoclinic)}\]

**At 369 K both forms are stable** — that is the definition of the **transition temperature.** Below it rhombic is the stable form; above it monoclinic.

| | **Rhombic (α)** | **Monoclinic (β)** |
|---|---|---|
| Colour / form | yellow | colourless **needle-shaped** crystals |
| Melting point | 385.8 K | 393 K |
| Specific gravity | 2.06 | 1.98 |
| Stable range | **below 369 K** | **above 369 K** |
| Prepared by | evaporating a CS₂ solution of roll sulphur | melting sulphur, cooling till a crust forms, piercing it and pouring off the liquid |
| Solubility in CS₂ | **readily soluble** | soluble |

Rhombic sulphur is insoluble in water, slightly soluble in benzene, alcohol and ether.

**Structure.** **Both forms contain S₈ molecules** — they differ only in how those S₈ units are *packed*. The **S₈ ring is puckered into a crown shape**, with **S–S = 204 pm and ∠S–S–S = 107°**. Rings of 6 to 20 sulphur atoms have been made; in **cyclo-S₆ the ring adopts the chair form** (S–S 205.7 pm, ∠102.2°). And at high temperature (~1000 K) **S₂ dominates and is paramagnetic like O₂** (§11.3).

> **The viscosity anomaly of molten sulphur — a favourite question.** Sulphur melts at 112.8 °C. Then:
>
> - **From 112.8 °C to ≈ 160 °C the viscosity *falls*** — normal behaviour, as the S₈ rings slip and roll over one another more easily.
> - **Above ≈ 160 °C the viscosity *rises sharply*** — because the **S₈ rings break open and polymerise into very long chains**, which entangle.
>
> A liquid getting *more* viscous as you heat it is counter-intuitive, and the ring-opening polymerisation is the whole explanation.

**Amorphous forms** are **plastic sulphur (δ)**, **milk of sulphur** and **colloidal sulphur.** Plastic sulphur is made by pouring molten sulphur into cold water, trapping the long chains before they can re-form rings.

### Trap bank — ozone and sulphur allotropes

- **Ozone is diamagnetic; O₂ is paramagnetic.** Do not carry the paramagnetism across to the allotrope.
- Ozone must be made in a **silent** discharge because its formation is **endothermic** — a hot arc would decompose it as fast as it formed. Yield is only about **10 %**.
- "Ozone is thermodynamically unstable" needs **both** reasons: decomposition is **exothermic *and* entropy-increasing**, so ΔG is strongly negative.
- E°(O₃/O₂) = **+2.07 V**, **second only to fluorine** among common oxidants.
- **Moist I₂ + O₃ → HIO₃; dry I₂ + O₃ → I₄O₉.** Water changes the product.
- **Most ozone oxidations release O₂, but 3SO₂ + O₃ → 3SO₃ and the SnCl₂ reaction do not.** Balance the oxygens before writing O₂.
- **Tailing of mercury** (loss of meniscus and fluidity) is a test for ozone.
- Ozone's **two O–O bonds are equal at 128 pm** — the experimental evidence for resonance. ∠ ≈ 117°.
- **Ozone/Cl₂ bleach by oxidation, permanently; SO₂ bleaches by reduction, temporarily.**
- **369 K is a transition temperature** — at it *both* rhombic and monoclinic sulphur are stable. Rhombic below, monoclinic above.
- **Both α- and β-sulphur are S₈**; they differ in packing, not in molecular formula. The ring is a **puckered crown**, and **cyclo-S₆ is a chair.**
- **Molten sulphur's viscosity falls to 160 °C then rises sharply**, because S₈ rings open and polymerise into long chains.
- Detailed H₂O₂ chemistry — preparation, structure, volume strength — belongs to the **Hydrogen chapter**, not here.

# 13. Group 16: hydrogen sulphide and the oxoacids of sulphur

## 13.1 Hydrogen sulphide, H₂S

**Preparation.** By the action of dilute acid on a metal sulphide (Kipp's apparatus):

\[\mathrm{FeS+H_2SO_4\ (dil.)\rightarrow FeSO_4+H_2S}\]

> **A drying-agent trap.** H₂S may be dried over **fused CaCl₂, dehydrated Al₂O₃ or P₂O₅ — but never over concentrated H₂SO₄**, because the acid oxidises it:
>
> \[\mathrm{H_2SO_4+H_2S\rightarrow 2H_2O+SO_2+S}\]
>
> "Which drying agent cannot be used for gas X?" is a standard question, and the answer is always the one that *reacts* with the gas.

**Properties.** A colourless gas with the **offensive smell of rotten eggs**; **highly poisonous.**

\[\mathrm{2H_2S+O_2\ (limited)\rightarrow 2H_2O+2S}\qquad(\text{burns with a blue flame})\]
\[\mathrm{2H_2S+3O_2\ (excess)\rightarrow 2H_2O+2SO_2}\]

It is a **weak dibasic acid**, ionising in two steps, and — the property that matters most — **a good reducing agent**, reducing halogens, H₂SO₄, KMnO₄, K₂Cr₂O₇, O₃, H₂O₂ and FeCl₃:

\[\mathrm{H_2S\rightleftharpoons H^++SH^-};\qquad \mathrm{SH^-\rightleftharpoons H^++S^{2-}}\]
\[\mathrm{H_2S+X_2\rightarrow 2HX+S}\]

**Structure.** **V-shaped**, like water, with **H–S = 135 pm and ∠H–S–H = 92.5°** — the collapsed angle of §11.4, and the reason H₂S has no significant hydrogen bonding.

**Tests for H₂S** — three, and they are all worth knowing:

1. The **rotten-egg odour.**
2. It **blackens lead acetate paper**: \(\mathrm{(CH_3COO)_2Pb+H_2S\rightarrow PbS\downarrow(black)+2CH_3COOH}\)
3. It gives a **violet colouration with an alkaline solution of sodium nitroprusside.**

**Uses.** Its dominant use is as the **group reagent in qualitative analysis** for precipitating metal cations as sulphides.

## 13.2 The oxoacids of sulphur

Sulphur forms an unusually large family: **H₂SO₃, H₂S₂O₃, H₂S₂O₄, H₂S₂O₅, H₂SₓO₆ (x = 2–5), H₂SO₄, H₂S₂O₇, H₂SO₅** and **H₂S₂O₈.** Several are unstable and are known only in solution or as their salts.

| Acid | Formula | S state | Key structural feature |
|---|---|---|---|
| Sulphurous | H₂SO₃ | +4 | two S–OH, one S=O, **one lone pair on S** |
| **Sulphuric** | **H₂SO₄** | **+6** | **two S–OH, two S=O**, tetrahedral |
| Pyrosulphuric (**oleum**) | H₂S₂O₇ | +6 | **one S–O–S bridge**, four S=O |
| **Peroxomonosulphuric** (Caro's) | **H₂SO₅** | **+6** | **one peroxo –O–O–**, one S–OH |
| **Peroxodisulphuric** (Marshall's) | **H₂S₂O₈** | **+6** | **one peroxo –O–O–** joining two S |
| Thiosulphuric | H₂S₂O₃ | — | **one S=S** (see §13.3) |
| Dithionous | H₂S₂O₄ | +3 | one **S–S** bond |

> **Oxidation-state bookkeeping versus structural bookkeeping — keep them apart.**
>
> **Never assume every oxygen in a formula is −2.** In a **peroxo** acid two of the oxygens are a genuine **–O–O–** unit, each at **−1**. Work out the oxidation state from the *structure*:
>
> - **H₂SO₅** (Caro's acid): oxygens are 3 × (−2) plus one peroxo pair at 2 × (−1). So **S is +6**, not the +8 you would wrongly get by treating all five oxygens as −2 (which would exceed sulphur's maximum).
> - **H₂S₂O₈** (Marshall's acid): six ordinary oxygens plus one peroxo pair, so **each S is +6**, not +7.
>
> **The maximum oxidation state of sulphur is +6.** If your arithmetic gives more, you have missed a peroxo linkage or an S–S bond.

**Basicity, as always, is the number of ionisable O–H groups** — the rule established in §1.5 and §10.5. Sulphurous and sulphuric acids are both **dibasic**; H₂SO₅ is **monobasic** despite having two hydrogens, because one of them sits on the peroxo oxygen chain rather than on a normal S–OH.

## 13.3 Sodium thiosulphate — two inequivalent sulphur atoms

**Preparation.**

\[\mathrm{Na_2SO_3\ (solution)+S\ (powder)\xrightarrow{boil}Na_2S_2O_3\xrightarrow{evaporate}Na_2S_2O_3\cdot 5H_2O}\ (\text{monoclinic crystals})\]
\[\mathrm{2Na_2S+Na_2CO_3+4SO_2\rightarrow 3Na_2S_2O_3+CO_2};\qquad \mathrm{6NaOH+4S\rightarrow Na_2S_2O_3+2Na_2S+3H_2O}\]
\[\mathrm{2Na_2S+2O_2+H_2O\rightarrow Na_2S_2O_3+2NaOH}\qquad(\text{aerial oxidation of }Na_2S)\]

> **The structural point that generates all the questions.** In the thiosulphate ion **S₂O₃²⁻ the two sulphur atoms are *not* equivalent.** One is the central, tetrahedrally coordinated sulphur; the other is a **terminal sulphur replacing one oxygen (an S=S linkage)**. Consequently the **average** oxidation state of sulphur is +2, but the two atoms are really at **+6 (central) and −2 (terminal)**. That is why, in reactions where the ion is destroyed, **the two sulphurs end up in different products** — one as sulphate and one as free sulphur.

**Reactions.** With dilute acid, the free acid decomposes at once, and the sulphur separates:

\[\mathrm{Na_2S_2O_3+2H^+\rightarrow H_2S_2O_3\rightarrow H_2O+SO_2+S\downarrow}\qquad(\textbf{white turbidity — the test})\]

**With iodine it is oxidised only to tetrathionate** — this is the reaction behind every iodometric titration in the chapter:

\[\mathrm{2S_2O_3^{2-}+I_2\rightarrow S_4O_6^{2-}+2I^-}\]

**But with chlorine or bromine water it is oxidised all the way to sulphate**, and this contrast is the classic exam pairing:

\[\mathrm{S_2O_3^{2-}+Cl_2\ (water)\rightarrow SO_4^{2-}+S+2HCl}\]
\[\mathrm{Na_2S_2O_3+4Cl_2+5H_2O\rightarrow Na_2SO_4+H_2SO_4+8HCl}\]

> **Why iodine stops at tetrathionate but chlorine goes to sulphate.** Iodine is the **weaker** oxidant, and can only couple two thiosulphate ions into the S₄O₆²⁻ dimer. Chlorine and bromine are **strong enough to break the S–S linkage entirely**, taking the sulphur to its maximum +6. So the same reagent class gives two completely different stoichiometries depending on oxidant strength — never assume "halogen + thiosulphate" has one answer.

On heating it disproportionates: \(\mathrm{4Na_2S_2O_3\xrightarrow{\Delta}Na_2S_5+3Na_2SO_4}\).

**Uses.** **"Hypo" in photography** (dissolving unreacted AgBr as a soluble thiosulphato complex), and as the standard titrant for iodine in **volumetric analysis.**

### Trap bank — H₂S and the sulphur oxoacids

- **H₂S cannot be dried over conc. H₂SO₄** — the acid oxidises it to SO₂ + S. Use CaCl₂, Al₂O₃ or P₂O₅.
- **H₂S is a reducing agent**, not an oxidising one; its ∠H–S–H is **92.5°**, and it has essentially no hydrogen bonding.
- Three tests for H₂S: rotten-egg smell, **black PbS on lead acetate paper**, **violet with alkaline sodium nitroprusside.**
- **Never assume all oxygens are −2.** In **H₂SO₅ and H₂S₂O₈ a peroxo –O–O– is present**, and sulphur is **+6 in both**, not +8 or +7. **Sulphur cannot exceed +6.**
- **Basicity = number of S–OH groups.** H₂SO₅ is **monobasic** despite two hydrogens.
- In **S₂O₃²⁻ the two sulphurs are inequivalent** (+6 and −2, average +2), which is why they end up in different products.
- **I₂ oxidises thiosulphate only to S₄O₆²⁻; Cl₂/Br₂ water takes it to SO₄²⁻.** Stoichiometry depends on oxidant strength.
- **Dilute acid on thiosulphate gives a white turbidity of sulphur plus SO₂** — the identification test.

# 14. Group 16: sulphur dioxide, the contact process and sulphuric acid

## 14.1 Sulphur dioxide

**Preparation.** Burning sulphur gives SO₂ **together with 6–8 % SO₃**:

\[\mathrm{S+O_2\rightarrow SO_2}\]

In the laboratory, from a sulphite and dilute acid:

\[\mathrm{SO_3^{2-}+2H^+\rightarrow H_2O+SO_2}\]

Industrially it is a **by-product of roasting sulphide ores**, and the gas is dried, liquefied under pressure and stored in steel cylinders:

\[\mathrm{4FeS_2+11O_2\rightarrow 2Fe_2O_3+8SO_2}\]

Other routes, all reductions of concentrated sulphuric acid:

\[\mathrm{Cu+2H_2SO_4\ (conc.)\rightarrow CuSO_4+2H_2O+SO_2};\qquad \mathrm{S+2H_2SO_4\rightarrow 3SO_2+2H_2O}\]
\[\mathrm{C+2H_2SO_4\rightarrow CO_2+2SO_2+2H_2O};\qquad \mathrm{NaHSO_3+H_2SO_4\rightarrow NaHSO_4+H_2O+SO_2}\]

**Physical properties.** Colourless gas with a **pungent smell**, **highly soluble in water**, liquefying at room temperature under **two atmospheres** and boiling at **263 K.**

**Acidic character — and note the exact parallel with CO₂.** SO₂ in water gives sulphurous acid, and with alkali the product depends on the ratio:

\[\mathrm{SO_2+H_2O\rightleftharpoons H_2SO_3}\]
\[\mathrm{2NaOH+SO_2\rightarrow Na_2SO_3+H_2O};\qquad \mathrm{Na_2SO_3+H_2O+SO_2\rightarrow 2NaHSO_3}\]

**With excess base you get the sulphite; with excess SO₂ you get the hydrogensulphite** — structurally identical logic to CO₂/OH⁻ (§6.2). "In its reactions with water and alkalis the behaviour of SO₂ is very similar to that of CO₂" is worth carrying as a single idea rather than two memorised sets.

**Other reactions.**

\[\mathrm{SO_2+Cl_2\xrightarrow{charcoal}SO_2Cl_2}\qquad(\text{sulphuryl chloride})\]
\[\mathrm{2SO_2+O_2\xrightarrow{V_2O_5}2SO_3}\]

**Reducing properties — and the test for the gas.** **Moist** SO₂ behaves as a reducing agent:

\[\mathrm{2Fe^{3+}+SO_2+2H_2O\rightarrow 2Fe^{2+}+SO_4^{2-}+4H^+}\]
\[\mathrm{5SO_2+2MnO_4^-+2H_2O\rightarrow 5SO_4^{2-}+4H^++2Mn^{2+}}\]

**Decolourising acidified KMnO₄ is the convenient test for SO₂.**

> **The bleaching contrast, stated once and for all.** SO₂ bleaches by **reduction**, and the effect is **temporary** — the bleached article slowly reoxidises in air and the colour returns. **Cl₂ and O₃ bleach by oxidation**, and the effect is **permanent.** This is why SO₂ is used on delicate materials (wool, silk, straw) that chlorine would destroy, and why it also acts as an **"anti-chlor"** — destroying residual chlorine after chlorine bleaching.

**Structure.** SO₂ is **angular**, a **resonance hybrid** of two equivalent canonical forms.

**Uses.** Refining petroleum and sugar; **bleaching wool and silk**; as an **anti-chlor, disinfectant and preservative**; manufacture of H₂SO₄, NaHSO₃ and Ca(HSO₃)₂; and **liquid SO₂ as a non-aqueous solvent.**

## 14.2 Sulphuric acid: the contact process

Three stages:

**(i) Generate SO₂** by burning sulphur or roasting sulphide ore, then **purify it** — dust is removed in an electrostatic precipitator and **arsenic compounds in an arsenic purifier containing gelatinous hydrated ferric oxide** (arsenic would poison the catalyst), then dry it in a drying tower.

**(ii) Oxidise SO₂ to SO₃** — the key step:

\[\mathrm{2SO_2(g)+O_2(g)\xrightarrow{V_2O_5}2SO_3(g)}\qquad \Delta_rH^{\circ}=-196.6\ \mathrm{kJ\ mol^{-1}}\]

> **The conditions are a compromise, exactly as in the Haber process (§8.1).** The reaction is **exothermic** and proceeds with a **decrease in volume** (3 gas molecules → 2), so **low temperature and high pressure** both favour maximum yield. But too low a temperature makes the rate impractically slow. In practice the plant runs at **2 bar and 720 K.** The V₂O₅ catalyst raises the *rate*, never the yield.

**(iii) Absorb SO₃** in concentrated H₂SO₄ to give **oleum**, then dilute to the strength wanted:

\[\mathrm{SO_3+H_2SO_4\rightarrow H_2S_2O_7}\qquad(\textbf{oleum},\ \text{pyrosulphuric acid})\]

**Why SO₃ is not simply absorbed in water:** direct absorption produces a **fine, persistent acid mist** that is very hard to condense, so the industrial route goes through oleum instead. The acid from the contact process is **96–98 % pure.**

## 14.3 Sulphuric acid: four properties, four sets of reactions

Every reaction of sulphuric acid follows from one of four characteristics — **(a) low volatility, (b) strong acidity, (c) strong affinity for water, (d) ability to oxidise.** Organising the chemistry this way is far more reliable than memorising equations.

**Physical.** Colourless, dense, oily liquid, **specific gravity 1.84 at 298 K**, freezing at 283 K and boiling at **611 K**. It dissolves in water with **enormous evolution of heat**, which is why **the concentrated acid must always be added slowly to water with constant stirring, never the reverse.**

**(b) Strong acidity — but only in the first step:**

\[\mathrm{H_2SO_4+H_2O\rightarrow H_3O^++HSO_4^-}\qquad K_{a1}>10\ (\text{very large})\]
\[\mathrm{HSO_4^-+H_2O\rightleftharpoons H_3O^++SO_4^{2-}}\qquad K_{a2}=1.2\times10^{-2}\]

So it forms **two series of salts — normal sulphates and acid (hydrogen) sulphates.**

**(a) Low volatility** lets it displace *more* volatile acids from their salts — the basis of laboratory preparations of HF, HCl and HNO₃:

\[\mathrm{2MX+H_2SO_4\rightarrow 2HX+M_2SO_4}\qquad(X=\mathrm{F,\ Cl,\ NO_3})\]

**(c) Dehydrating power.** Wet gases are dried by bubbling through it (provided they do not react with it — see the H₂S trap in §13.1). Its **charring action on carbohydrates** is the visible demonstration:

\[\mathrm{C_{12}H_{22}O_{11}\xrightarrow{conc.\ H_2SO_4}12C+11H_2O};\qquad \mathrm{(COOH)_2\xrightarrow{-H_2O}CO+CO_2};\qquad \mathrm{HCOOH\xrightarrow{-H_2O}CO}\]

**But it is not the strongest dehydrating agent** — P₄O₁₀ beats it, and the proof is that P₄O₁₀ dehydrates sulphuric acid itself:

\[\mathrm{H_2SO_4+P_4O_{10}\rightarrow 2HPO_3+SO_3}\]

**(d) Oxidising power.** **Hot concentrated** sulphuric acid is a **moderately strong** oxidant — **intermediate between phosphoric and nitric acids** — and is itself reduced to **SO₂**:

\[\mathrm{Cu+2H_2SO_4\ (conc.)\rightarrow CuSO_4+SO_2+2H_2O};\qquad \mathrm{3S+2H_2SO_4\rightarrow 3SO_2+2H_2O}\]
\[\mathrm{C+2H_2SO_4\rightarrow CO_2+2SO_2+2H_2O};\qquad \mathrm{2P+5H_2SO_4\rightarrow 2H_3PO_4+5SO_2+2H_2O}\]
\[\mathrm{2HBr+H_2SO_4\rightarrow Br_2+SO_2+2H_2O}\qquad(\text{likewise HI}\rightarrow I_2)\]

> **The reagent-selection question.** "Why can concentrated H₂SO₄ be used to prepare HCl from NaCl, but *not* HBr from NaBr or HI from NaI?" Because with chloride it acts only as a **low-volatility acid** (displacing the more volatile HCl), but bromide and iodide are **strong enough reducing agents to be oxidised by it**, so you get Br₂ or I₂ instead of the hydrogen halide. For HBr and HI you must use a **non-oxidising** acid such as phosphoric acid. This single question tests properties (a) and (d) against each other and recurs in §16.2.

A useful chlorinating reagent comes from it: \(\mathrm{H_2SO_4+2PCl_5\rightarrow SO_2Cl_2+2POCl_3+2HCl}\).

**Uses.** A nation's industrial strength was once judged by its sulphuric acid output. The bulk goes into **fertilisers** (ammonium sulphate, superphosphate); also petroleum refining, pigments, paints and dyestuff intermediates, detergents, **metallurgical pickling, electroplating and galvanising**, **storage batteries**, nitrocellulose manufacture, and as a laboratory reagent.

### Trap bank — SO₂, the contact process and sulphuric acid

- **SO₂ + alkali is ratio-dependent** — excess base gives the sulphite, excess SO₂ the hydrogensulphite. Same discipline as CO₂ (§6.2).
- **SO₂ bleaches by reduction and temporarily; Cl₂ and O₃ by oxidation and permanently.** SO₂ is also the **anti-chlor**.
- **Decolourising acidified KMnO₄ is the test for SO₂** — and it works because **moist** SO₂ is a reducing agent.
- Contact-process conditions (**2 bar, 720 K, V₂O₅**) are a **rate/yield compromise**; the catalyst never changes the yield. Arsenic must be removed because it **poisons the catalyst**.
- **SO₃ is absorbed in conc. H₂SO₄, not in water**, because water gives an intractable acid mist. The intermediate is **oleum, H₂S₂O₇.**
- **Only H₂SO₄'s *first* ionisation is strong** (Kₐ₂ = 1.2 × 10⁻²). Hence two salt series.
- **Always add conc. H₂SO₄ to water, never water to the acid.**
- **P₄O₁₀ is a stronger dehydrating agent than H₂SO₄**, and dehydrates it to SO₃.
- Hot conc. H₂SO₄ oxidises and is reduced to **SO₂** — it is **intermediate in oxidising power between H₃PO₄ and HNO₃.**
- **Conc. H₂SO₄ cannot be used to prepare HBr or HI** from their salts — it oxidises the halide to the halogen. Use H₃PO₄ instead.

# 15. Group 17: the halogens — trends, the anomalies of fluorine and oxidising power

Members are **F, Cl, Br, I and At** — the **halogens** (Greek *halo* = salt, *genes* = born: "salt producers"). **Astatine is radioactive.** Valence configuration **ns²np⁵** — one electron short of a closed shell, which governs everything about them.

## 15.1 Occurrence

**Fluorine** occurs as insoluble fluorides — **fluorspar CaF₂, cryolite Na₃AlF₆, fluoroapatite 3Ca₃(PO₄)₂·CaF₂** — and in soil, river water, plants and the bones and teeth of animals. **Sea water** contains the chlorides, bromides and iodides of Na, K, Mg and Ca, but is mainly **NaCl (2.5 % by mass)**; dried-up sea beds give NaCl and **carnallite KCl·MgCl₂·6H₂O.** Marine life concentrates iodine — some **seaweeds contain up to 0.5 % iodine**, and **Chile saltpetre contains up to 0.2 % sodium iodate.**

## 15.2 Periodic trends

| Property | Order |
|---|---|
| Atomic and ionic radius | **F < Cl < Br < I** |
| Ionisation enthalpy | **F > Cl > Br > I** |
| **Most negative electron gain enthalpy** | **Cl > F > Br > I** |
| Electronegativity | **F > Cl > Br > I** (F is the most electronegative element) |
| Melting and boiling point | rise steadily with atomic number |
| **Bond dissociation enthalpy of X₂** | **Cl₂ > Br₂ > F₂ > I₂** |

**Two anomalies sit in that table, and both have the same cause.**

> **(i) Electron gain enthalpy: Cl is more negative than F.** Fluorine's 2p orbitals are so small that the incoming electron meets **severe inter-electronic repulsion**, so it is not attracted as strongly as simple electronegativity would suggest. This is the exact counterpart of the **O/S anomaly** in Group 16 (§11.1).
>
> **(ii) Bond enthalpy: F₂ is weaker than both Cl₂ and Br₂.** Again the small size — in F₂ the **lone pairs on the two adjacent atoms are forced much closer together than in Cl₂**, and their mutual repulsion destabilises the bond. So the F–F bond is anomalously weak, and that single fact drives a great deal of fluorine's chemistry.

**Colour.** All the halogens are coloured, and the colour deepens down the group: **F₂ yellow gas, Cl₂ greenish-yellow gas, Br₂ red liquid, I₂ violet solid.** The reason is the **decreasing HOMO–LUMO gap** — as the gap narrows, the absorbed light moves from the ultraviolet into and across the visible.

**Solubility.** F₂ and Cl₂ **react** with water; Br₂ and I₂ are only sparingly soluble in water but dissolve in chloroform, CCl₄, CS₂ and hydrocarbons to give coloured solutions.

## 15.3 Oxidation states

**All the halogens show −1.** Cl, Br and I also show **+1, +3, +5 and +7**, and the reason is orbital promotion: successive excitation of paired electrons into the empty nd orbitals gives **1, 3, 5 and then 7 unpaired electrons.**

| State | Unpaired electrons | Where it appears |
|---|---|---|
| −1 or +1 | 1 (ground state) | halides, hypohalites |
| +3 | 3 (first excited state) | halites, XX′₃ interhalogens |
| +5 | 5 (second excited state) | halates, XX′₅ |
| +7 | 7 (third excited state) | perhalates, IF₇ |

**Fluorine shows only −1**, for two independent reasons: it has **no d orbitals in the valence shell** so it cannot expand its octet, and it is **the most electronegative element** so nothing can oxidise it. The higher states of the others are realised **mainly in combination with the small, highly electronegative fluorine and oxygen** — hence in the interhalogens, the oxides and the oxoacids. (The even states **+4 and +6** turn up in some oxides and oxoacids of Cl and Br.)

## 15.4 The anomalous behaviour of fluorine

Collect the anomalies in one place, because they are asked as a set:

- **Higher than the trend predicts:** ionisation enthalpy, electronegativity, **electrode potential**.
- **Lower than the trend predicts:** ionic and covalent radii, melting and boiling point, **bond dissociation enthalpy**, and **electron gain enthalpy**.
- **Most reactions of fluorine are exothermic**, because the bonds it forms to other elements are short and strong.
- **It forms only one oxoacid, HOF**, while the other halogens form several.
- **HF is a liquid (bp 293 K) because of strong hydrogen bonding**; all the other hydrogen halides are gases.

**The four causes:** small size, highest electronegativity, **low F–F bond dissociation enthalpy**, and **non-availability of d orbitals.**

## 15.5 Oxidising power and reaction with water

Ready acceptance of an electron makes the halogens strong oxidants, and **oxidising power falls F₂ > Cl₂ > Br₂ > I₂.** Hence **a halogen oxidises the halide ion of any halogen below it:**

\[\mathrm{F_2+2X^-\rightarrow 2F^-+X_2}\ (X=\mathrm{Cl,\ Br,\ I});\quad \mathrm{Cl_2+2X^-\rightarrow 2Cl^-+X_2}\ (X=\mathrm{Br,\ I});\quad \mathrm{Br_2+2I^-\rightarrow 2Br^-+I_2}\]

> **Why is F₂ the strongest oxidant in water when its electron gain enthalpy is *not* the most negative?** Because the electrode potential is a *sum* of three steps, not one:
>
> \[\mathrm{\tfrac{1}{2}X_2(g)\xrightarrow{\tfrac{1}{2}\Delta_{diss}H}X(g)\xrightarrow{\Delta_{eg}H}X^-(g)\xrightarrow{\Delta_{hyd}H}X^-(aq)}\]
>
> Fluorine loses on the middle term but **wins decisively on the other two — its bond dissociation enthalpy is anomalously low and the hydration enthalpy of the small F⁻ ion is very high.** Those two outweigh the electron-gain deficit. This is one of the most commonly asked "resolve the apparent contradiction" questions in the chapter, and the answer must name all three terms.

**Reaction with water** is a direct measure of that oxidising power, and each halogen behaves differently:

\[\mathrm{2F_2+2H_2O\rightarrow 4H^++4F^-+O_2}\qquad(\text{fluorine oxidises water to oxygen})\]
\[\mathrm{X_2+H_2O\rightleftharpoons HX+HOX}\qquad(X=\mathrm{Cl,\ Br}\ \text{— hydrohalic}+\text{hypohalous acid})\]
\[\mathrm{4I^-+4H^++O_2\rightarrow 2I_2+2H_2O}\qquad(\text{iodine's reaction is non-spontaneous — it runs }\textbf{backwards})\]

Note the full reversal from top to bottom: **fluorine oxidises water, whereas iodide is oxidised *by* atmospheric oxygen.**

## 15.6 The hydrogen halides

| Property | HF | HCl | HBr | HI |
|---|---|---|---|---|
| Melting point / K | **190** | 159 | 185 | 222 |
| Boiling point / K | **293** | 189 | 206 | 238 |
| Bond length H–X / pm | 91.7 | 127.4 | 141.4 | 160.9 |
| ΔdissH / kJ mol⁻¹ | **574** | 432 | 363 | 295 |
| **pKₐ** | **3.2** | −7.0 | −9.5 | **−10.0** |

- **Acid strength: HF ≪ HCl < HBr < HI.** HF is a *weak* acid (pKₐ = 3.2) while the rest are strong — because the **H–F bond is by far the strongest**, and acidity here is about breaking H–X, not about electronegativity. Identical logic to H₂O vs H₂Te (§11.4).
- **Thermal stability: H–F > H–Cl > H–Br > H–I**, following the same bond enthalpies.
- **HF's melting and boiling points are out of line** — hydrogen bonding again.
- **Affinity for hydrogen decreases F → I**, so the ease of direct synthesis falls the same way.

## 15.7 Reactivity towards oxygen and metals

**Oxides.** The halogens form many oxides but **most are unstable.**

- **Fluorine forms OF₂ and O₂F₂**, and **only OF₂ is thermally stable at 298 K.** These are properly called **oxygen fluorides**, not fluorine oxides, because **fluorine is more electronegative than oxygen** — so oxygen carries the positive oxidation state. Both are powerful fluorinating agents; **O₂F₂ oxidises plutonium to PuF₆**, which is used to strip plutonium out of spent nuclear fuel.
- Cl, Br and I give oxides spanning **+1 to +7**, with stability order **I > Cl > Br** — bromine's oxides are the least stable, an instance of the **middle-row anomaly**, and exist only at low temperature. **Higher oxides are generally more stable than lower ones.**
- **Chlorine oxides (Cl₂O, ClO₂, Cl₂O₆, Cl₂O₇) are highly reactive oxidants that tend to explode.** **ClO₂ is used to bleach paper pulp and textiles and in water treatment.**
- **Iodine oxides (I₂O₄, I₂O₅, I₂O₇) are insoluble solids** that decompose on heating; **I₂O₅ is the reagent for estimating CO** (§6.1).

> **ClO₂ has an odd number of electrons yet does not dimerise** — unlike NO₂, which dimerises to N₂O₄ precisely because it is an odd-electron molecule. The reason is that in ClO₂ the odd electron is **delocalised into chlorine's own vacant 3d orbital**, so there is no localised radical centre to pair up. And beware the formula trap: **Cl₂O₆ is not the dimer of ClO₃, and "Cl₂O₄" is actually chlorine perchlorate, Cl–OClO₃ — not a dimer of ClO₂.**

**Metals.** Halogens give metal halides, and **ionic character falls MF > MCl > MBr > MI.** Two rules worth stating:

\[\mathrm{Mg+Br_2\rightarrow MgBr_2}\]

- For a metal in **more than one oxidation state, the halide in the higher state is the more covalent**: SnCl₄, PbCl₄, SbCl₅ and UF₆ are more covalent than SnCl₂, PbCl₂, SbCl₃ and UF₄. (Fajans' rules — §5.3.)
- **Reactivity of the halogens towards metals and non-metals falls F₂ > Cl₂ > Br₂ > I₂.**

### Trap bank — halogen trends and fluorine's anomalies

- **Electron gain enthalpy: Cl > F** (Cl more negative). Small size means severe inter-electronic repulsion in fluorine's 2p shell. Same anomaly as O vs S.
- **Bond enthalpy: Cl₂ > Br₂ > F₂ > I₂** — F₂ is anomalously weak because adjacent lone pairs are forced too close.
- **F₂ is nonetheless the strongest oxidant in water.** The reason needs all three terms: low ΔdissH, very negative ΔhydH of F⁻, against its weaker ΔegH.
- **Colour deepens down the group because the HOMO–LUMO gap narrows.**
- **Fluorine shows only −1** — no d orbitals *and* highest electronegativity. Two reasons, not one.
- **HF is a weak acid; HCl, HBr and HI are strong.** Acidity tracks the **H–X bond enthalpy**, not electronegativity. **HF is a liquid** because of hydrogen bonding.
- **OF₂ and O₂F₂ are oxygen *fluorides*** — oxygen is positive (+2 and +1) because fluorine is more electronegative.
- **Fluorine forms only one oxoacid (HOF).**
- Halogen oxide stability is **I > Cl > Br** — bromine's are the least stable (middle-row anomaly), and **higher oxides beat lower ones.**
- **ClO₂ does not dimerise** although it has an odd electron, because that electron is delocalised into a vacant 3d orbital. Contrast NO₂ → N₂O₄.
- **Fluorine oxidises water to O₂; Cl₂ and Br₂ give HX + HOX; iodine's reaction runs backwards** — O₂ oxidises I⁻.
- **The higher halide of a variable-valency metal is the more covalent** (SnCl₄ vs SnCl₂).

# 16. Group 17: preparing the halogens, chlorine, HCl and the oxoacids

## 16.1 Preparing the elements

**Fluorine — the Moissan process.** Fluorine cannot be made by chemical oxidation, because nothing oxidises F⁻; it must be done **electrolytically**, and even then not from an aqueous solution (water would be oxidised first):

\[\mathrm{CaF_2+H_2SO_4\rightarrow CaSO_4+2HF};\qquad \mathrm{HF+KF\rightarrow KHF_2}\]
\[\mathrm{KHF_2\xrightarrow{electrolysis}H_2\ (cathode)+F_2\ (anode)}\]

**KF is added to lower the melting point of the mixture** through the formation of KHF₂ — anhydrous HF alone is a poor conductor.

> **The CaF₂ must be free of SiO₂**, and the reason is a nice bit of stoichiometry: silica consumes the HF you are trying to make, and it consumes **six** molecules of it per molecule of SiO₂:
>
> \[\mathrm{4HF+SiO_2\rightarrow SiF_4+2H_2O};\qquad \mathrm{SiF_4+2HF\rightarrow H_2[SiF_6]}\]
>
> This is the same chemistry that forbids storing HF in glass (§6.5).

**Bromine** — displacement by the halogen above it: \(\mathrm{2NaBr+Cl_2\rightarrow 2NaCl+Br_2}\).

**Iodine** — from **seaweed**: the weed is dried and burnt to ash, the iodide leached out with boiling water, oxidised (H₂O₂ or MnO₂/H₂SO₄), and the iodine recovered by solvent extraction and sublimation.

## 16.2 Chlorine

Discovered by **Scheele in 1774** by the action of HCl on MnO₂; **Davy** established its elementary nature in 1810 and named it from the Greek *chloros*, greenish-yellow.

**Laboratory preparation.**

\[\mathrm{MnO_2+4HCl\rightarrow MnCl_2+Cl_2+2H_2O}\]
\[\mathrm{4NaCl+MnO_2+4H_2SO_4\rightarrow MnCl_2+4NaHSO_4+2H_2O+Cl_2}\]
\[\mathrm{2KMnO_4+16HCl\rightarrow 2KCl+2MnCl_2+8H_2O+5Cl_2}\]

**Manufacture.** Two routes:

\[\mathrm{4HCl+O_2\xrightarrow[723\ K]{CuCl_2}2Cl_2+2H_2O}\qquad(\textbf{Deacon's process})\]
\[\mathrm{2NaCl+2H_2O\xrightarrow{electrolysis}2NaOH+H_2\ (cathode)+Cl_2\ (anode)}\qquad(\text{electrolysis of brine})\]

**Physical properties.** Greenish-yellow gas with a pungent, suffocating odour; **about 2.5 times heavier than air**; easily liquefied to a greenish-yellow liquid boiling at **239 K**; soluble in water.

**Reactions with metals and non-metals.**

\[\mathrm{2Na+Cl_2\rightarrow 2NaCl};\quad \mathrm{2Al+3Cl_2\rightarrow 2AlCl_3};\quad \mathrm{2Fe+3Cl_2\rightarrow 2FeCl_3};\quad \mathrm{P_4+6Cl_2\rightarrow 4PCl_3};\quad \mathrm{S_8+4Cl_2\rightarrow 4S_2Cl_2}\]

**Great affinity for hydrogen** — it strips hydrogen out of compounds:

\[\mathrm{H_2+Cl_2\rightarrow 2HCl};\qquad \mathrm{H_2S+Cl_2\rightarrow 2HCl+S};\qquad \mathrm{C_{10}H_{16}+8Cl_2\rightarrow 16HCl+10C}\]

**With ammonia — the excess reagent decides the product**, exactly as in §7.7:

\[\mathrm{8NH_3\ (excess)+3Cl_2\rightarrow 6NH_4Cl+N_2}\]
\[\mathrm{NH_3+3Cl_2\ (excess)\rightarrow NCl_3+3HCl}\qquad(\mathbf{NCl_3\ is\ explosive})\]

**With hydrocarbons** — substitution with saturated, addition with unsaturated:

\[\mathrm{CH_4+Cl_2\xrightarrow{UV}CH_3Cl+HCl};\qquad \mathrm{C_2H_4+Cl_2\xrightarrow{room\ temp.}C_2H_4Cl_2}\]

**Bleaching action.** Chlorine bleaches **only in the presence of moisture**, and the mechanism is oxidation by nascent oxygen from hypochlorous acid:

\[\mathrm{Cl_2+H_2O\rightarrow HCl+HOCl};\qquad \mathrm{HOCl\rightarrow HCl+[O]};\qquad \text{coloured substance}+[O]\rightarrow\text{colourless}\]

**Chlorine water loses its yellow colour on standing** as this happens. **The bleaching is permanent** — contrast SO₂ (§14.1).

**As an oxidant:**

\[\mathrm{2FeSO_4+H_2SO_4+Cl_2\rightarrow Fe_2(SO_4)_3+2HCl};\qquad \mathrm{SO_2+2H_2O+Cl_2\rightarrow H_2SO_4+2HCl}\]
\[\mathrm{Na_2SO_3+Cl_2+H_2O\rightarrow Na_2SO_4+2HCl};\qquad \mathrm{I_2+6H_2O+5Cl_2\rightarrow 2HIO_3+10HCl}\]

**Uses.** Bleaching wood pulp (for paper and rayon), cotton and textiles; extraction of gold and platinum; manufacture of dyes, drugs, CCl₄, CHCl₃, DDT and refrigerants; **sterilising drinking water**; and the poison gases **phosgene COCl₂, tear gas CCl₃NO₂ and mustard gas ClCH₂CH₂SCH₂CH₂Cl.**

## 16.3 Disproportionation in alkali — and how to reverse it

The reaction of a halogen with alkali is **temperature- and concentration-dependent**, and it is a disproportionation in both cases:

\[\mathrm{2NaOH+Cl_2\rightarrow NaCl+NaOCl+H_2O}\qquad(\textbf{cold, dilute}\ \to\ \text{chloride}+\text{hypochlorite})\]
\[\mathrm{6NaOH+3Cl_2\rightarrow 5NaCl+NaClO_3+3H_2O}\qquad(\textbf{hot, concentrated}\ \to\ \text{chloride}+\text{chlorate})\]

In the first, chlorine goes from 0 to **−1 and +1**; in the second, from 0 to **−1 and +5**. Both are textbook disproportionations.

> **And the reaction is reversible on acidification** — the disproportionated products recombine to give the element back:
>
> \[\mathrm{X^-+OX^-+2H^+\rightarrow X_2+H_2O};\qquad \mathrm{5X^-+XO_3^-+6H^+\rightarrow 3X_2+3H_2O}\]
>
> (X = Cl, Br, I.) This pair is worth memorising as a unit: **alkali disproportionates the halogen; acid puts it back together.**

## 16.4 Bleaching powder

\[\mathrm{Cl_2+Ca(OH)_2\ (dry\ slaked\ lime)\xrightarrow{40^{\circ}C}Ca(OCl)Cl+H_2O}\]

Its **composition is Ca(OCl)₂·CaCl₂·Ca(OH)₂·2H₂O** — bleaching powder is a mixture, not a single compound, which is why it is often written simply as CaOCl₂.

**On long standing it decomposes three ways:**

\[\mathrm{6Ca(OCl)Cl\rightarrow Ca(ClO_3)_2+5CaCl_2}\qquad(\text{auto-oxidation})\]
\[\mathrm{2Ca(OCl)Cl\xrightarrow{CoCl_2}2CaCl_2+O_2};\qquad \mathrm{Ca(OCl)Cl+H_2O\rightarrow Ca(OH)_2+Cl_2}\]

**With any acid it liberates chlorine** — the basis of its use:

\[\mathrm{CaOCl_2+2HCl\rightarrow CaCl_2+H_2O+Cl_2};\qquad \mathrm{CaOCl_2+H_2SO_4\rightarrow CaSO_4+H_2O+Cl_2}\]
\[\mathrm{CaOCl_2+CO_2\rightarrow CaCO_3+Cl_2}\qquad(\text{even atmospheric }CO_2\text{ does it})\]

**As an oxidant:**

\[\mathrm{CaOCl_2+H_2S\rightarrow S+CaCl_2+H_2O};\qquad \mathrm{3CaOCl_2+2NH_3\rightarrow 3CaCl_2+3H_2O+N_2}\]
\[\mathrm{CaOCl_2+2KI+2HCl\rightarrow CaCl_2+2KCl+H_2O+I_2};\qquad \mathrm{CaOCl_2+KNO_2\rightarrow CaCl_2+KNO_3}\]

## 16.5 Hydrogen chloride

First prepared by **Glauber in 1648** by heating common salt with concentrated sulphuric acid; **Davy** showed in 1810 that it is a compound of hydrogen and chlorine.

\[\mathrm{NaCl+H_2SO_4\xrightarrow{420\ K}NaHSO_4+HCl};\qquad \mathrm{NaHSO_4+NaCl\xrightarrow{823\ K}Na_2SO_4+HCl}\]

**HCl gas is dried over concentrated H₂SO₄** — permissible here precisely because HCl is not oxidisable by it, unlike HBr and HI (§14.3).

**Properties.** Colourless, pungent gas; **it fumes in moist air** because its strong affinity for water pulls in moisture and forms droplets. Liquefies at 189 K, freezes at 159 K, **extremely soluble in water**. In water it is a **strong acid, Kₐ ≈ 10⁷**:

\[\mathrm{HCl+H_2O\rightarrow H_3O^++Cl^-};\qquad \mathrm{NH_3+HCl\rightarrow NH_4Cl}\ (\text{white fumes})\]

It **decomposes the salts of weaker acids** — carbonates, hydrogencarbonates and sulphites:

\[\mathrm{Na_2CO_3+2HCl\rightarrow 2NaCl+H_2O+CO_2};\qquad \mathrm{Na_2SO_3+2HCl\rightarrow 2NaCl+H_2O+SO_2}\]

**With finely powdered iron it gives FeCl₂, not FeCl₃** — because the hydrogen liberated in the reaction prevents oxidation to Fe(III):

\[\mathrm{Fe+2HCl\rightarrow FeCl_2+H_2}\]

**Aqua regia** — three parts conc. HCl to one part conc. HNO₃ — dissolves gold and platinum, which neither acid manages alone (§9.4):

\[\mathrm{Au+4H^++NO_3^-+4Cl^-\rightarrow [AuCl_4]^-+NO+2H_2O}\]
\[\mathrm{3Pt+16H^++4NO_3^-+18Cl^-\rightarrow 3[PtCl_6]^{2-}+4NO+8H_2O}\]

The nitric acid supplies the oxidising power and the chloride supplies the **complexing ligand** that stabilises the dissolved metal — neither works without the other.

## 16.6 The oxoacids of the halogens

**Fluorine forms only one, HOF** (hypofluorous or fluoric(I) acid), because of its high electronegativity and small size. **Most halogen oxoacids cannot be isolated pure** — they exist only in aqueous solution or as their salts.

| Type | F | Cl | Br | I |
|---|---|---|---|---|
| **Halic(I)** — hypohalous, HOX | HOF | HOCl | HOBr | HOI |
| **Halic(III)** — halous, HOXO | — | HOClO | — | — |
| **Halic(V)** — halic, HOXO₂ | — | HOClO₂ | HOBrO₂ | HOIO₂ |
| **Halic(VII)** — perhalic, HOXO₃ | — | HOClO₃ | HOBrO₃ | HOIO₃ |

**Structures** are all built the same way — a central halogen with one O–H and an increasing number of terminal X=O bonds:

| Acid | X state | X=O bonds | Shape at X |
|---|---|---|---|
| HOCl | +1 | 0 | bent |
| HOClO | +3 | 1 | pyramidal-derived |
| HOClO₂ | +5 | 2 | pyramidal |
| HOClO₃ | +7 | 3 | tetrahedral |

> **Two strength rules, and they must not be mixed up.**
>
> **(i) Same central atom, different oxidation state:** acid strength **rises with oxidation state**, because each extra terminal oxygen pulls more electron density off the O–H and stabilises the conjugate base by delocalisation:
> \[\mathrm{HOCl<HOClO<HOClO_2<HOClO_3}\]
> **(ii) Same oxidation state, different central atom:** acid strength **rises with electronegativity** of the halogen:
> \[\mathrm{HOI<HOBr<HOCl}\]
>
> Comparisons are only safe *within* one of these two rules. "Is HOCl stronger than HIO₃?" is a badly posed question, because it changes both variables at once.

### Trap bank — chlorine, HCl and the oxoacids

- **Fluorine must be made electrolytically from KHF₂** (Moissan) — nothing chemically oxidises F⁻, and an aqueous route would oxidise water instead. **KF lowers the melting point.**
- **CaF₂ for HF must be silica-free** — one SiO₂ consumes **six** HF.
- **Chlorine bleaches only when moist**, by **oxidation**, and the effect is **permanent**. SO₂ bleaches by reduction, temporarily.
- **Cl₂ + cold dilute alkali → chloride + hypochlorite; hot concentrated alkali → chloride + chlorate.** Both are **disproportionations**, and **acidification reverses them.**
- **Excess NH₃ + Cl₂ → N₂; excess Cl₂ + NH₃ → explosive NCl₃.** Name the excess reagent.
- **Bleaching powder is a mixture** (Ca(OCl)₂·CaCl₂·Ca(OH)₂·2H₂O), and **even atmospheric CO₂ liberates chlorine from it.**
- **HCl can be dried over conc. H₂SO₄; HBr and HI cannot** (they would be oxidised) — the mirror image of the H₂S trap in §13.1.
- **HCl + Fe gives FeCl₂, not FeCl₃**, because the H₂ evolved prevents oxidation to Fe(III).
- **Aqua regia is 3 : 1 conc. HCl : conc. HNO₃** — HNO₃ oxidises, Cl⁻ complexes. Both roles are needed.
- **Acid strength rises with oxidation state for the same halogen** (HOCl < HOClO < HOClO₂ < HOClO₃) **and with electronegativity for the same state** (HOI < HOBr < HOCl). Never vary both at once.

# 17. Interhalogens, polyhalides and pseudohalogens

## 17.1 Interhalogen compounds

Two different halogens combine to give four stoichiometries — **XX′, XX′₃, XX′₅ and XX′₇** — where **X is the larger, more electropositive halogen and X′ the smaller one.**

> **Why IF₇ and nothing bigger.** **As the ratio of the radii of X to X′ increases, the number of X′ atoms that can pack around X increases.** Iodine is the largest halogen and fluorine the smallest, so **I : F gives the largest possible radius ratio — and hence the largest interhalogen, IF₇.** This one argument predicts the whole series, and it also explains why there is no ClF₇ or BrF₇ of comparable stability: **XX′₅ and XX′₇ need a large central atom**, so only Br and I support them.

Also note: **there are never more than two different halogens in one molecule**, the bonds are **essentially covalent**, and **boiling point rises as the electronegativity difference increases.**

**Preparation** — direct combination, or a halogen acting on a lower interhalogen; **the product is fixed by the stoichiometry and conditions**, which is exactly what gets tested:

\[\mathrm{Cl_2+F_2\ (equal\ volumes)\xrightarrow{473\ K}2ClF};\qquad \mathrm{Cl_2+3F_2\ (excess)\xrightarrow{573\ K}2ClF_3}\]
\[\mathrm{I_2+Cl_2\ (equimolar)\rightarrow 2ICl};\qquad \mathrm{I_2+3Cl_2\ (excess)\rightarrow 2ICl_3}\]
\[\mathrm{Br_2+3F_2\rightarrow 2BrF_3};\qquad \mathrm{Br_2+5F_2\ (excess)\rightarrow 2BrF_5}\]

Unstable IF disproportionates, and the driving force is bond energy: \(\mathrm{5IF\rightarrow IF_5+2I_2}\), the system gaining about **250 kJ mol⁻¹.**

**Properties and shapes.** All are **covalent and diamagnetic**; all are volatile solids or liquids at 298 K **except ClF, which is a gas**; their physical properties are intermediate between those of the parent halogens, **except that melting and boiling points are a little higher than expected.**

| Type | Examples | State and colour | **Shape (VSEPR)** |
|---|---|---|---|
| **XX′** | ClF (colourless gas), BrF (pale brown gas), **ICl** (ruby-red solid, α-form), IBr (black solid) | — | linear |
| **XX′₃** | **ClF₃** (colourless gas), **BrF₃** (yellow-green liquid), IF₃ (yellow powder), ICl₃ (orange solid) | — | **bent T-shaped** |
| **XX′₅** | **ClF₅**, **BrF₅** (colourless liquids), **IF₅** (colourless gas, solid below 77 K) | — | **square pyramidal** |
| **XX′₇** | **IF₇** (colourless gas) | — | **pentagonal bipyramidal** |

**ICl₃ dimerises as a chlorine-bridged dimer, I₂Cl₆.**

**Worked VSEPR — BrF₃.** Bromine has 7 valence electrons; three form bonds to fluorine, leaving 4 electrons as **2 lone pairs**. So there are **3 bond pairs + 2 lone pairs = 5 electron domains → trigonal bipyramidal arrangement.** **Both lone pairs take equatorial positions**, because that minimises the severe lone-pair/lone-pair and lone-pair/bond-pair repulsions. The axial fluorines are then bent slightly towards the equatorial one, giving a **slightly bent T shape.**

> **Interhalogens are more reactive than the halogens themselves — except fluorine.** The reason is bond strength: **the X–X′ bond in an interhalogen is weaker than the X–X bond in the parent halogen**, except that nothing is weaker than F–F (§15.2). So reactivity order puts F₂ first and the interhalogens next.

**Hydrolysis follows one rule, and it is worth learning as a rule rather than four equations:**

\[\mathrm{XX'+H_2O\rightarrow HX'+HOX}\]

**The halide ion always comes from the *smaller* halogen X′, and the oxo-anion always from the *larger* halogen X**, at the oxidation state it held in the interhalogen:

| Interhalogen | Oxo-anion from X |
|---|---|
| XX′ | **hypohalite**, XO⁻ |
| XX′₃ | **halite**, XO₂⁻ |
| XX′₅ | **halate**, XO₃⁻ |
| XX′₇ | **perhalate**, XO₄⁻ |

**Uses.** **Non-aqueous solvents**, and — the important one — **powerful fluorinating agents.** **ClF₃ and BrF₃ make UF₆ for uranium-235 enrichment:**

\[\mathrm{U+3ClF_3\rightarrow UF_6+3ClF}\]

## 17.2 Polyhalides

A halide ion can add a halogen or an interhalogen to give a **polyhalide ion**:

\[\mathrm{KI+I_2\rightarrow KI_3};\qquad \mathrm{ICl+KCl\rightarrow K[ICl_2]};\qquad \mathrm{ICl_3+KCl\rightarrow K[ICl_4]}\]
\[\mathrm{IF_5+CsF\rightarrow Cs[IF_6]};\qquad \mathrm{ICl+KBr\rightarrow K[BrICl]}\]

The **triiodide ion I₃⁻ is why iodine dissolves so freely in KI solution** but barely at all in pure water — a fact used in every iodometric titration.

**Stability of the trihalides: I₃⁻ > Br₃⁻ > Cl₃⁻ > F₃⁻**, which follows the **donating ability of X⁻** — the larger, more polarisable, more weakly hydrated iodide is the best donor. Cl₃⁻ compounds are rare and F₃⁻ essentially unknown. Higher polyiodides **I₅⁻, I₇⁻ and I₈²⁻** are known (e.g. I₇⁻ in [N(CH₃)₄]I₇ and I₈²⁻ in Cs₂I₈).

> **A lattice-energy question that looks like a redox question.** On heating, \(\mathrm{Rb[ICl_2]\rightarrow RbCl+ICl}\) — **not** RbI + Cl₂. Why? **Because the decomposition takes the route that forms the alkali halide of the *smaller* halogen, which has the shorter interatomic distance and therefore the higher lattice energy.** RbCl is more stable than RbI, so RbCl is what forms. Nothing is oxidised or reduced.

## 17.3 Pseudohalogens

**Pseudohalides are univalent ions built from two or more atoms, at least one of which is nitrogen, that behave chemically like halide ions.** The three diagnostic resemblances:

1. Their **sodium salts are water-soluble but their silver salts are insoluble.**
2. Their **hydrogen compounds are acids**, like HX.
3. Several of the anions can be **oxidised to a neutral dimer X₂**, like 2X⁻ → X₂.

| Anion | Acid | Dimer |
|---|---|---|
| **CN⁻** (cyanide) | HCN | **(CN)₂** cyanogen |
| **SCN⁻** (thiocyanate) | HSCN thiocyanic | (SCN)₂ |
| SeCN⁻ | — | (SeCN)₂ |
| OCN⁻ (cyanate) | HOCN cyanic | — |
| NCN²⁻ (bivalent) | H₂NCN cyanamide | — |
| ONC⁻ | HONC fulminic | — |
| **N₃⁻** (azide) | **HN₃** hydrazoic | — |

**Cyanide is the closest analogue of Cl⁻, Br⁻ and I⁻**, on six counts: it forms the acid HCN; it forms the dimer (CN)₂; **AgCN and Pb(CN)₂ are insoluble**; **interpseudohalogen compounds ClCN, BrCN and ICN exist**; **AgCN is insoluble in water but dissolves in ammonia** (exactly like AgCl, §8.1); and it forms an extensive parallel set of complexes — compare **[Cu(CN)₄]³⁻ with [CuCl₄]³⁻, and [Co(CN)₆]³⁻ with [CoCl₆]³⁻.**

The cyanogen chemistry that completes the analogy — disproportionation in alkali, just like a halogen (§16.3) — is in §6.3a.

### Trap bank — interhalogens, polyhalides and pseudohalogens

- **IF₇ is the largest interhalogen because I : F is the largest radius ratio.** XX′₅ and XX′₇ need a large central atom, so only Br and I form them.
- **Never more than two different halogens in one interhalogen molecule.**
- Shapes: **XX′ linear, XX′₃ bent T, XX′₅ square pyramidal, XX′₇ pentagonal bipyramidal.** In BrF₃ **both lone pairs go equatorial.**
- **Interhalogens are more reactive than the halogens except F₂**, because X–X′ is weaker than X–X — but nothing is weaker than F–F.
- **Hydrolysis: the halide comes from the smaller halogen, the oxo-anion from the larger** — hypohalite/halite/halate/perhalate as the stoichiometry rises.
- **ClF₃ and BrF₃ are the industrial fluorinating agents for UF₆** in uranium enrichment.
- **I₃⁻ is why I₂ dissolves in KI solution.** Stability **I₃⁻ > Br₃⁻ > Cl₃⁻ > F₃⁻**, following the donor ability of X⁻.
- **Rb[ICl₂] → RbCl + ICl, not RbI + Cl₂** — decided by **lattice energy**, not by redox.
- A pseudohalide needs **at least one nitrogen**; its **Ag salt is insoluble** and its **H compound is an acid**. **CN⁻ is the closest analogue** — and **AgCN, like AgCl, dissolves in ammonia.**

# 18. Group 18: the noble gases — trends, and how xenon chemistry was discovered

Members are **He, Ne, Ar, Kr, Xe and Rn.** Configuration **ns²np⁶**, except **helium, which is 1s²**. They are called *noble* gases because they are gaseous and chemically unreactive, forming very few compounds.

## 18.1 Occurrence

**All the noble gases except radon occur in the atmosphere**, which is about **1 % noble gas by volume — and argon is the major constituent.** The abundance order is **Ar > Ne > Kr > He > Rn.**

- **Helium and sometimes neon are found in minerals of radioactive origin** — pitchblende, monazite, cleveite — because they are α-decay products.
- **The main commercial source of helium is natural gas.**
- **Xenon and radon are the rarest of the group**, and radon is obtained as a decay product of radium:

\[\mathrm{^{226}_{88}Ra\rightarrow{^{222}_{86}Rn}+{^{4}_{2}He}}\]

## 18.2 Periodic trends

Every trend in this group is monotonic, which makes it easy — but note that **two of them run the *opposite* way to the rest of the p-block**:

| Property | Order |
|---|---|
| Atomic radius | **He < Ne < Ar < Kr < Xe < Rn** |
| **Ionisation enthalpy** | **He > Ne > Ar > Kr > Xe > Rn** (very high throughout) |
| Electron gain enthalpy | **large and positive** for all — no tendency to accept an electron |
| Melting point | He < Ne < Ar < Kr < Xe < Rn |
| Boiling point | He < Ne < Ar < Kr < Xe < Rn |
| Density | He < Ne < Ar < Kr < Xe < Rn |

**Physical properties.** All are **monatomic** — unique among the non-metals — and colourless, odourless and tasteless. All are **sparingly soluble in water**. Their **melting and boiling points are extremely low because the only interatomic interaction available is weak dispersion (London) forces**, and with monatomic species there is nothing else at all. **Liquefying a noble gas is correspondingly hard**, and gets harder the lighter the atom.

Two further trends that look alike but have opposite causes, and are therefore an easy trap:

\[\text{thermal conductivity: }\mathrm{He>Ne>Ar>Kr>Xe}\qquad(\text{lighter atom}\Rightarrow\text{higher speed}\Rightarrow\text{faster heat transport})\]
\[\text{electrical conductivity (low pressure): }\mathrm{He<Ne<Ar<Kr<Xe}\qquad(\text{lower IE}\Rightarrow\text{ionises more readily})\]

Note also that **neon has the highest (most positive) electron gain enthalpy of any noble gas** — i.e. it is the most resistant of all to accepting an electron.

**Helium is exceptional in three ways worth remembering:**

- **The lowest boiling point of any known substance, 4.2 K.**
- It **diffuses through most common laboratory materials** — rubber, glass, plastics.
- **Liquid helium exists in two forms.** At the **λ-point** helium-I changes to **helium-II**, and several properties change abruptly: the specific heat changes by a factor of 10, **thermal conductivity increases about 10⁶-fold (becoming ~800 times better than copper)**, the **viscosity effectively vanishes**, and **the liquid climbs the walls of its vessel.** This is superfluidity.

## 18.3 Why they are inert — and how that inertness was broken

Two reasons, and both must be given:

1. **Completely filled valence shells** — ns²np⁶ (or 1s² for He).
2. **Very high ionisation enthalpy and large positive electron gain enthalpy** — so they neither lose nor gain electrons willingly.

> **Bartlett's discovery, 1962 — and why it is a beautiful piece of reasoning rather than luck.** Neil Bartlett had prepared a red compound formulated as **O₂⁺[PtF₆]⁻**, showing that PtF₆ was powerful enough to ionise molecular oxygen. He then noticed that
>
> \[\mathrm{IE_1(O_2)=1175\ kJ\ mol^{-1}}\quad\text{is almost identical to}\quad \mathrm{IE_1(Xe)=1170\ kJ\ mol^{-1}}\]
>
> If PtF₆ could ionise O₂, it should be able to ionise xenon too. Mixing PtF₆ with xenon gave another red compound, **Xe⁺[PtF₆]⁻** — the first real noble-gas compound. **The prediction came from an ionisation-energy comparison, and that is exactly why the question "why xenon and not argon?" has a quantitative answer.**

**Which noble gases actually form compounds:**

- **Xenon** — an extensive chemistry, mainly with the most electronegative elements, **fluorine and oxygen**.
- **Krypton** — very few; **only KrF₂ has been studied in detail.**
- **Radon** — compounds such as RnF₂ have been **identified only by radiotracer techniques**, never isolated (radon's half-life is too short).
- **Argon, neon and helium — no true compounds are known.** Their ionisation enthalpies are simply too high.

## 18.4 Clathrates — trapped, not bonded

\[\mathrm{Xe\cdot 6H_2O},\quad \mathrm{Ar\cdot 6H_2O},\quad \mathrm{Kr\cdot 6H_2O}\]

These **noble-gas hydrates form only when water freezes under high pressure in the presence of the gas.** They are **clathrates** — "cage compounds" — in which the gas atom is **physically trapped inside a cavity of the hydrogen-bonded ice lattice.**

> **The decisive point: there is no chemical bond to the noble gas at all.** A clathrate is a *physical* inclusion compound, held by the host lattice, and the guest can be released by melting the ice without breaking any bond to it.
>
> And note **which** gases do it: **Ar, Kr and Xe form clathrates but He and Ne cannot — they are too small** and simply rattle out of the cavity rather than being retained. So clathrate formation is governed by **size matching to the cage**, whereas *chemical* compound formation is governed by **ionisation enthalpy**. Two different criteria, two different lists — and a favourite examiner's trap.

**The host does not have to be water.** Passing Ar, Kr or Xe through an **organic liquid such as phenol or hydroquinone (quinol) under pressure** and then crystallising the solution gives solids in which the noble-gas atom is **trapped in the organic crystal lattice with no reaction at all.** These are the same clathrates in a different cage, and the same size rule applies — He and Ne are too small to be held.

> **A structural aside worth carrying into Group 17 and 18 questions.** Compare which high-coordination fluorides exist against the corresponding hydrides:
>
> | Exists | Does **not** exist |
> |---|---|
> | XeF₂, XeF₄, XeF₆, XeF₈²⁻ | XeH₂, XeH₄, XeH₆, XeH₈²⁻ |
> | PF₅, PCl₅ | PH₅, PI₅ |
> | SF₄, SF₆ | SH₄, SH₆ |
> | IF₅, IF₇ | IH₅, IH₇ |
>
> **Fluorine supports high oxidation states and high coordination numbers; hydrogen does not** — fluorine is small and the most electronegative element, so it stabilises the positive central atom, whereas hydrogen can neither withdraw enough density nor pack in the required numbers. One rule explains the whole right-hand column.

## 18.5 Uses

**Helium.**

- **Non-inflammable and light** — filling balloons for meteorological observation.
- **Gas-cooled nuclear reactors.**
- **Cryogenics** (bp 4.2 K) — reaching the low temperatures needed for superconductors and lasers, and sustaining the **superconducting magnets in NMR spectrometers and MRI scanners.**
- **Diluent for oxygen in diving cylinders.** The reasoning matters: **nitrogen is appreciably soluble in blood, so a sudden pressure drop degasses it and produces N₂ bubbles — the painful condition called "the bends". Helium is only slightly soluble in blood**, so replacing N₂ with He greatly reduces the risk.

**Neon** — discharge tubes and fluorescent bulbs for advertising displays; neon bulbs in botanical gardens and greenhouses.

**Argon** — **an inert atmosphere for high-temperature metallurgy** (arc welding of metals and alloys), filling electric bulbs, and handling air-sensitive substances in the laboratory.

**Xenon and krypton** — no significant uses beyond special-purpose light bulbs.

### Trap bank — noble gas trends and reactivity

- **Argon is the most abundant noble gas in air** (the group is ~1 % of the atmosphere), not helium. **Helium's commercial source is natural gas**, and radon comes from ²²⁶Ra decay.
- **Electron gain enthalpies are large and *positive*** — these atoms do not accept electrons at all.
- **Low boiling points arise from weak dispersion forces only**, which is a direct consequence of being **monatomic**.
- **He has the lowest boiling point of any substance (4.2 K)**, diffuses through glass and rubber, and shows **superfluidity below the λ-point.**
- **Xenon reacts because its ionisation enthalpy (1170 kJ mol⁻¹) nearly matches that of O₂ (1175)** — Bartlett's actual reasoning. Argon, neon and helium form **no true compounds**.
- **Only KrF₂ is well characterised for krypton; radon compounds are identified only by radiotracer methods.**
- **Clathrates involve no chemical bond** — the atom is physically caged in ice.
- **Ar, Kr and Xe form clathrates; He and Ne are too small and cannot.** Compare with chemical reactivity, which is decided by **ionisation enthalpy** instead — do not conflate the two criteria.
- **Helium replaces nitrogen in diving gas because N₂ is soluble in blood and causes the bends.** He's low solubility is the whole point.

# 19. Group 18: the xenon compounds — fluorides, oxides and oxyfluorides

## 19.1 The xenon fluorides — the conditions *are* the answer

All three fluorides come from xenon and fluorine directly, and **which one you get is fixed entirely by the F₂ : Xe ratio, the pressure and the temperature.** A question that gives you conditions is asking you to read off the product.

| Product | Conditions |
|---|---|
| **XeF₂** | **xenon in excess**, 673 K, **1 bar** |
| **XeF₄** | **1 : 5** Xe : F₂, 873 K, **7 bar** |
| **XeF₆** | **1 : 20** Xe : F₂, 573 K, **60–70 bar** |

**Broadly: more fluorine, more pressure → the higher fluoride.** There is also a low-temperature route to XeF₆ using a stronger fluorinating agent:

\[\mathrm{XeF_4+O_2F_2\xrightarrow{143\ K}XeF_6+O_2}\]

All three are **colourless crystalline solids that sublime readily at 298 K.**

**A recently developed route** uses silver(III) fluoride, which is a strong enough oxidant to attack xenon directly at ordinary temperature:

\[\mathrm{KAgF_4+BF_3\rightarrow AgF_3\ (red)+KBF_4};\qquad \mathrm{2AgF_3+Xe\rightarrow 2AgF_2+XeF_2\ (brown)}\]

**Thermochemical and structural data**, which is what turns "XeF₆ is the most reactive" from an assertion into a derivation:

| Property | XeF₂ | XeF₄ | XeF₆ |
|---|---|---|---|
| Melting point / K | 413 | 390 | 322 |
| ΔfH°(s, 298 K) / kJ mol⁻¹ | −163 | −267 | −338 |
| ΔfH°(g, 298 K) / kJ mol⁻¹ | −107 | −206 | −279 |
| **Mean Xe–F bond enthalpy / kJ mol⁻¹** | **133** | **131** | **126** |
| **Xe–F distance / pm** | **200** | **195** | **189** |
| Shape | linear | square planar | (distorted) octahedral |

> **Read the last two rows together.** As you go XeF₂ → XeF₆ the **bond gets shorter but weaker** (200 → 189 pm, yet 133 → 126 kJ mol⁻¹). Fewer, stronger bonds per Xe would resist attack; more, weaker bonds do not. That is the quantitative reason for the reactivity order
>
> \[\mathrm{XeF_6>XeF_4>XeF_2}\]
>
> as oxidising **and** fluorinating agents — not merely "higher fluoride, more reactive."

**And XeF₂ alone is a fearsome oxidant in its own right:**

\[\mathrm{XeF_2+2H^++2e^-\rightarrow Xe+2HF}\qquad E^{\circ}=+2.64\ \mathrm{V}\]

That is **above ozone (+2.07 V, §12.3) and close to fluorine itself** — so XeF₂ oxidises Ce³⁺ to Ce⁴⁺ and even **bromate to perbromate**, which few reagents manage.

## 19.2 Structures — straight VSEPR, every time

Count the electron pairs on xenon and place the lone pairs to minimise repulsion. Xenon brings 8 valence electrons; each bond to fluorine uses one.

| Species | Bond pairs | Lone pairs | Total domains | Arrangement | **Shape** |
|---|---|---|---|---|---|
| **XeF₂** | 2 | **3** | 5 | trigonal bipyramidal | **linear** (all 3 lone pairs equatorial) |
| **XeF₄** | 4 | **2** | 6 | octahedral | **square planar** (lone pairs *trans*) |
| **XeF₆** | 6 | **1** | 7 | — | **distorted octahedral** |
| **XeO₃** | 3 | **1** | 4 | tetrahedral | **pyramidal** (Xe–O 176 pm, ∠O–Xe–O 103°) |
| **XeOF₄** | 5 | **1** | 6 | octahedral | **square pyramidal** |
| **XeO₂F₂** | 4 | 1 | 5 | trigonal bipyramidal | see-saw |
| **XeO₄** | 4 | **0** | 4 | tetrahedral | **tetrahedral** |
| **XeF₃⁺** | 3 | 2 | 5 | trigonal bipyramidal | **T-shaped** (183/190 pm, 81°) |
| **XeF₅⁺** | 5 | 1 | 6 | octahedral | square pyramidal |
| **XeF₅⁻** | 5 | **2** | 7 | — | **pentagonal planar** (202 pm, 72°) |
| **XeF₈²⁻** | 8 | 0 | 8 | — | **square antiprismatic** |
| **XeO₆⁴⁻** | 6 | 0 | 6 | octahedral | **octahedral** |

**A cleaner way to organise all of it** — classify by formal oxidation state, because that fixes the lone-pair count and the lone-pair count fixes the shape:

| Xe oxidation state | Lone pairs on Xe | Species |
|---|---|---|
| **+2** | **3** | KrF⁺, KrF₂, XeF⁺, **XeF₂** |
| **+4** | **2** | XeF₃⁺, **XeF₄**, XeF₅⁻, XeOF₂ |
| **+6** | **1** | XeF₅⁺, **XeF₆**, XeF₇⁻, XeF₈²⁻, XeOF₄, XeO₂F₂, XeO₃F⁻, **XeO₃** |
| **+8** | **0** | XeO₃F₂, **XeO₄**, **XeO₆⁴⁻** |

> **Two rare geometries worth knowing by name.** **XeF₅⁻ is *pentagonal planar*** — five bonds plus two lone pairs, the lone pairs going above and below the plane. And **XeF₈²⁻ is *square antiprismatic*** — eight bonds, no lone pair. Neither shape appears anywhere else in the JEE syllabus, which is exactly why they get asked.
>
> **Why XeF₃⁻ does *not* exist**, though XeF₃⁺ and XeF₅⁻ do: three bonds plus **three** lone pairs would force lone pairs to sit at **90° to one another**, and lone-pair/lone-pair repulsion at 90° is prohibitive. The ion is not stable.

**Colours — almost everything is colourless, and the exception is the question.** XeF₂, XeF₄, XeF₆, XeOF₂, XeO₃, XeO₂F₂, XeOF₄, Cs[XeF₇], XeO₄, XeO₃F₂ and the perxenates XeO₆⁴⁻ are **all colourless solids**. **Cs₂[XeF₈] is yellow** — and it is also unusually robust, stable to 400 °C, whereas Cs[XeF₇] decomposes above 50 °C.

**A dimeric cation to recognise:** **Xe₂F₃⁺ is [F–Xe···F···Xe–F]⁺**, a fluorine-bridged dimer with bridging Xe–F 214 pm, terminal Xe–F 192 pm, and a bridge angle of **140–160° that varies with the counter-ion.**

> **The two shapes people get wrong.** **XeF₂ is linear, not bent** — with three lone pairs and two bonds in a trigonal bipyramid, all three lone pairs take equatorial positions and the fluorines are forced axial. **XeF₄ is square planar, not tetrahedral** — two lone pairs in an octahedron go *trans* to each other, leaving the four fluorines in a plane. And **XeF₆'s seven pairs give a *distorted* octahedron**, confirmed experimentally in the gas phase, not a regular one.
>
> The general habit worth building: **count lone pairs first, then place them where repulsion is least, and only then read off the shape of the atoms.**

## 19.3 Hydrolysis — complete, partial, and in alkali

**The xenon fluorides are hydrolysed by even traces of water**, and the products depend on which fluoride and how much water.

**XeF₂ hydrolyses with reduction of xenon to the free element** — this one *is* a redox reaction:

\[\mathrm{2XeF_2+2H_2O\rightarrow 2Xe+4HF+O_2}\]

**XeF₄ disproportionates:**

\[\mathrm{6XeF_4+12H_2O\rightarrow 4Xe+2XeO_3+24HF+3O_2}\]

**XeF₆ with excess water gives XeO₃ cleanly:**

\[\mathrm{XeF_6+3H_2O\rightarrow XeO_3+6HF}\]

**Partial hydrolysis of XeF₆ gives the oxyfluorides**, and the amount of water decides which:

\[\mathrm{XeF_6+H_2O\rightarrow XeOF_4+2HF}\qquad(\text{one water})\]
\[\mathrm{XeF_6+2H_2O\rightarrow XeO_2F_2+4HF}\qquad(\text{two waters})\]

> **Is the hydrolysis of XeF₆ a redox reaction?** **No.** In XeF₆ → XeOF₄ → XeO₂F₂ → XeO₃ the xenon stays at **+6** throughout, and fluorine and oxygen keep their usual states. Only the **XeF₂ and XeF₄** hydrolyses involve genuine reduction of xenon to Xe(0). Being able to say *which* hydrolyses are redox and which are not is the point of the question.

**In alkaline medium** the chemistry goes further, to the xenate and then the perxenate:

\[\mathrm{2XeF_2+4OH^-\rightarrow 2Xe+4F^-+2H_2O+O_2}\]
\[\mathrm{XeF_6+7OH^-\rightarrow HXeO_4^-\ (\textbf{xenate})+3H_2O+6F^-}\]
\[\mathrm{2HXeO_4^-+2OH^-\rightarrow XeO_6^{4-}\ (\textbf{perxenate})\downarrow+Xe+2H_2O+O_2}\]

That last step is a **disproportionation**: xenate at +6 goes to **perxenate at +8** and **free xenon at 0**. Perxenates are among the strongest oxidising agents known.

## 19.4 The three reaction roles of the xenon fluorides

Organising them this way turns a long list into three ideas.

**(i) Powerful fluorinating agents:**

\[\mathrm{2SF_4+XeF_4\rightarrow 2SF_6+Xe};\qquad \mathrm{Pt+XeF_4\rightarrow PtF_4+Xe};\qquad \mathrm{NO+XeF_2\rightarrow NOF+Xe}\]

**(ii) Fluoride *donors*** — losing F⁻ to a strong fluoride acceptor gives a xenon **cation**:

\[\mathrm{XeF_2+MF_5\rightarrow [XeF]^+[MF_6]^-}\qquad(M=\mathrm{As,\ Sb,\ P})\]
\[\mathrm{XeF_6+BF_3\rightarrow [XeF_5]^+[BF_4]^-};\qquad \mathrm{XeF_6+HF\rightarrow [XeF_5]^+[HF_2]^-}\]

**(iii) Fluoride *acceptors*** — gaining F⁻ from an alkali fluoride gives a xenon **anion**:

\[\mathrm{XeF_6+MF\rightarrow M[XeF_7]^-}\qquad(M=\mathrm{Na,\ K,\ Rb,\ Cs})\]
\[\mathrm{2Cs[XeF_7]\xrightarrow{50^{\circ}C}XeF_6+Cs_2[XeF_8]};\qquad \mathrm{XeF_4+MF\rightarrow M[XeF_5]}\]

**The same molecule doing both** — donating fluoride to BF₃ but accepting it from CsF — is the neatest illustration in the chapter that "acid" and "base" are relative roles, not fixed properties.

> **But XeF₂ is the exception: it is a fluoride *donor only*, never an acceptor.** Every other xenon fluoride does both. Compare:
>
> \[\mathrm{XeF_4+SbF_5\rightarrow [XeF_3]^+[SbF_6]^-}\ (\textbf{donor});\qquad \mathrm{XeF_4+CsF\rightarrow Cs^+[XeF_5]^-}\ (\textbf{acceptor})\]
>
> XeF₂ manages only the donor half, because the acceptor product would be XeF₃⁻ — the ion ruled out above on lone-pair-repulsion grounds.

**How wide the XeF₂ donor chemistry runs** is worth appreciating: \(\mathrm{XeF_2+MF_n\rightarrow [XeF]^+[MF_{n+1}]^-}\) works with **MF₅** (M = As, Sb, Bi, V, Nb, Ta, Ru, Rh, Os, Ir, Pd, Pt), **MF₄** (Zr, Hf, Cr, Mn) and **MF₃** (Al, Ga, Fe, Co). It also gives [XeF]⁺[IF₆]⁻ with IF₅.

**Ranked as Lux–Flood acids** (oxide-ion acceptors), the xenon species order as:

\[\mathrm{XeF_6>XeO_2F_4>XeO_3F_2>XeO_4>XeOF_4>XeF_4>XeO_2F_2>XeO_3>XeF_2}\]

**The XeF₂ reaction fan**, organised by what it is doing rather than as a list:

| Role | Reaction |
|---|---|
| Reduced to Xe by any reductant | H₂ → Xe + HF; HCl → Cl₂; HBr → Br₂; HI → I₂ |
| Oxidises to a higher oxo-anion | **BrO₃⁻ → BrO₄⁻**; Ce³⁺ → Ce⁴⁺ |
| Fluorinates a metal or non-metal (in anhydrous HF) | Pt → PtF₄; CrF₂ → CrF₃; S₈ → SF₆; MoO₃ → MoF₆; Mo(CO)₆ → MoF₆ + CO |
| Fluorinates an organic substrate | C₆H₆ → C₆H₅F; Ph–I → C₆H₅IF₂; CH₃–I → CH₃IF₂ |
| Fluorinates a small molecule | NO₂ → **NO₂F** (nitryl fluoride); 2NO → NOF; NH₃ → N₂ + NH₄F + Xe |
| Hydrolysis / alkali | H₂O (slow) → Xe + O₂ + HF; NaOH → Xe + O₂ + NaF + H₂O |

With iodine the first product is unstable and disproportionates onward:

\[\mathrm{XeF_2+I_2\rightarrow Xe+2IF};\qquad \mathrm{5IF\rightarrow IF_5+2I_2}\qquad(\text{as in §17.1})\]

**The XeF₆ fan** is the same idea one oxidation state up: **SiO₂ → XeOF₄ + HF**; **Δ → XeF₂ + XeF₄ + F₂**; SbF₅ → [XeF₅]⁺[SbF₆]⁻; BF₃ → [XeF₅]⁺[BF₄]⁻; H₂ → Xe + HF; **XeO₃ → XeOF₄**; MF → M[XeF₇]; HF → [XeF₅]⁺[HF₂]⁻; **NaNO₃ → XeOF₄ + NO₂F + NaF**; OPF₃ → XeOF₄ + PF₅; and CsF → Cs[XeF₇] →Δ→ Cs₂[XeF₈] + XeF₆.

And the **XeF₄ fan**: H₂ → Xe; KI → I₂ + KF + Xe; HCl → Cl₂ + HF + Xe; **SF₄ → SF₆ + Xe**; **BX₃ (X = Cl, Br, I) → Xe + BF₃ + X₂**; NO₂ → NO₂F + Xe; C₆H₆ → C₆H₅F + HF + Xe.

**Oxidising behaviour.** All the fluorides are reduced to xenon:

\[\mathrm{XeF_2+H_2\rightarrow Xe+2HF};\qquad \mathrm{XeF_2+2HCl\rightarrow 2HF+Xe+Cl_2};\qquad \mathrm{XeF_4+4KI\rightarrow 4KF+Xe+2I_2}\]

**With silica** — worth knowing because it explains why these compounds cannot be handled in glass:

\[\mathrm{2XeF_6+SiO_2\rightarrow SiF_4+2XeOF_4}\]

## 19.5 The xenon–oxygen compounds

> **Why only XeO₃ and XeO₄ exist, and not XeO or XeO₂.** Going along the series the **average radial distance of the bonding electrons increases, and so does the hybridisation (promotion) energy** the xenon must pay. That cost is only repaid when enough strong Xe–O bonds are formed. The lower oxides therefore fall apart:
>
> \[\mathrm{XeO\rightarrow Xe+\tfrac{1}{2}O_2};\qquad \mathrm{2XeO_2\rightarrow XeO_3+Xe+O_2}\]
>
> So **XeO (+2) and XeO₂ (+4) are not obtainable**, **XeO₃ (+6) is the stable oxide**, and **XeO₄ (+8) exists but not at room temperature** — it is a colourless gas, mp −35.9 °C, and **highly explosive.**

**XeO₃** is a **colourless, white, hygroscopic and dangerously explosive solid** (ΔfH° ≈ **+402 kJ mol⁻¹** — the positive value is the explosion hazard in one number), with a **pyramidal, sp³** structure (three bond pairs, one lone pair).

**XeOF₄** is a **colourless volatile liquid**, **square pyramidal.**

Both can be made from XeO₃ without going through water:

\[\mathrm{XeO_3+2XeF_6\rightarrow 3XeOF_4};\qquad \mathrm{XeO_3+XeOF_4\rightarrow 2XeO_2F_2}\]

### Trap bank — the xenon compounds

- **The F₂ : Xe ratio and the pressure decide which fluoride forms.** XeF₂ needs excess xenon at 1 bar; XeF₆ needs a 1 : 20 ratio at 60–70 bar. Read the conditions.
- **XeF₂ is linear** (three lone pairs, all equatorial) and **XeF₄ is square planar** (two lone pairs, *trans*). Neither is bent or tetrahedral. **XeF₆ is a *distorted* octahedron.**
- **XeO₃ is pyramidal, XeOF₄ square pyramidal, XeO₄ tetrahedral.** Count lone pairs first.
- **Hydrolysis of XeF₆ is *not* a redox reaction** — xenon stays at +6 through XeOF₄, XeO₂F₂ and XeO₃. **XeF₂ and XeF₄ hydrolyses *are* redox** (xenon reduced to Xe⁰).
- **The amount of water decides the oxyfluoride**: one H₂O → XeOF₄, two → XeO₂F₂, three → XeO₃.
- **In alkali, XeF₆ gives xenate HXeO₄⁻, which then disproportionates to perxenate XeO₆⁴⁻ (+8) and free Xe.**
- **The xenon fluorides act as fluoride donors *and* acceptors** — cations with MF₅/BF₃, anions with alkali fluorides. Same compound, opposite roles.
- **XeF₆ attacks SiO₂**, giving XeOF₄ — so it cannot be handled in glass.
- **XeO₃ is explosive.** Do not treat it as a routine oxide.

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
