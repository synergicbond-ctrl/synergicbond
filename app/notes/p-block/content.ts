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

# 2. Group 13 — Boron Family: premium textbook, Parts 1–8

> **BIG PICTURE — Why is boron unlike every other member?**  Four ideas organise the whole chapter: **(i)** the energy cost of making B³⁺ is prohibitively high, **(ii)** Group 13 has only three valence electrons and therefore forms electron-deficient compounds, **(iii)** the +1 oxidation state becomes progressively more stable down the group because of the inert-pair effect, and **(iv)** boron solves electron deficiency by multicentre bonding. Every trend, structure and reaction below should be connected back to one of these four ideas.

This page contains Parts 1–8. [Continue to Parts 9–15: halides, hydrides, aluminium compounds and examination](/notes/p-block/part3).

## Part 1 — Position, members, occurrence and chapter map

### 1.1 Position and valence-shell configuration

| Element | Ground-state configuration | Valence shell | Broad character |
|---|---|---|---|
| B | [He] 2s²2p¹ | 2s²2p¹ | non-metallic metalloid; covalent |
| Al | [Ne] 3s²3p¹ | 3s²3p¹ | metal; strongly electropositive |
| Ga | [Ar] 3d¹⁰4s²4p¹ | 4s²4p¹ | metal; contracted by 3d electrons |
| In | [Kr] 4d¹⁰5s²5p¹ | 5s²5p¹ | metal; +1 increasingly important |
| Tl | [Xe] 4f¹⁴5d¹⁰6s²6p¹ | 6s²6p¹ | metal; +1 most stable |

> **CORE THEORY.** The expected oxidation state is +3 because all three valence electrons can participate in bonding. Down the group, the ns² pair becomes increasingly difficult to use, so +1 becomes more stable.

### 1.2 Natural occurrence

Boron does not occur free because of its strong affinity for oxygen. Aluminium is the most abundant metal in Earth’s crust and occurs mainly as hydrated alumina and aluminosilicates.

| Important source | Formula | Main significance |
|---|---|---|
| Borax or tincal | Na₂B₄O₇·10H₂O | boric acid, borates, glass |
| Kernite | Na₂B₄O₇·4H₂O | concentrated borax mineral |
| Colemanite | Ca₂B₆O₁₁·5H₂O | industrial source of boric acid |
| Boracite | 2Mg₃B₈O₁₅·MgCl₂ | magnesium borate mineral |
| Sassolite | H₃BO₃ | natural boric acid |
| Bauxite | Al₂O₃·xH₂O with impurities | principal aluminium ore |
| Cryolite | Na₃AlF₆ | solvent/electrolyte in aluminium extraction |
| Corundum | Al₂O₃ | abrasive and refractory material |
| Kaolinite | Al₂Si₂O₅(OH)₄ | clay mineral |

> **JEE TRAP.** “Boron family” does not mean all members resemble boron. Boron is the anomalous first member; aluminium is the chemically representative member for metallic behaviour.

### Rapid revision — Part 1

- General configuration: **ns²np¹**.
- Common oxidation states: **+3 and +1**.
- Stability of +1 increases down the group.
- Boron is covalent; heavier members are metallic.

---

## Part 2 — Master trends and orders of Group 13

### 2.1 Verified numerical data

| Property | B | Al | Ga | In | Tl |
|---|---:|---:|---:|---:|---:|
| Atomic radius (pm) | 88 | 143 | 135 | 167 | 170 |
| IE₁ (kJ mol⁻¹) | 801 | 577 | 579 | 558 | 589 |
| Σ(IE₁+IE₂+IE₃) (kJ mol⁻¹) | 6887 | 5139 | 5529 | 5029 | 5438 |
| Electronegativity | 2.0 | 1.5 | 1.6 | 1.7 | 1.8 |
| Density (g cm⁻³) | 2.35 | 2.70 | 5.91 | 7.31 | 11.85 |
| Melting point (K) | 2453 | 933 | 303 | 430 | 576 |
| Boiling point (K) | 3923 | 2740 | 2676 | 2356 | 1730 |

### 2.2 Master order sheet — size, energy and metallic character

| Property | Order / trend | Why the order is not perfectly regular |
|---|---|---|
| Atomic/metallic radius | **B < Ga < Al < In < Tl** | Ga is contracted by poor shielding of 3d¹⁰; Tl is contracted by 4f/5d shielding and relativistic effects |
| M³⁺ ionic radius | **Al³⁺ < Ga³⁺ < In³⁺ < Tl³⁺** | shells are added down the group |
| M⁺ ionic radius | **Ga⁺ < In⁺ < Tl⁺** | normal shell increase |
| First ionisation enthalpy | **In < Al < Ga < Tl < B** | d/f contraction raises Ga and Tl relative to the simple trend |
| Sum of first three IE | **In < Al < Tl < Ga < B** (using the table above) | very high value for B makes free B³⁺ impossible |
| Electronegativity | **Al < Ga < In < Tl < B** | poor d/f shielding reverses the expected decrease after Al |
| Metallic character | **B ≪ Al < Ga < In < Tl** (broadly increases) | B is a covalent metalloid; heavier members are metals |
| Electropositive character | generally increases from B to Tl, with irregularity | contraction and inert-pair effects disturb smoothness |
| Density | **B < Al < Ga < In < Tl** | atomic mass rises strongly down the group |
| Melting point | **Ga < In < Tl < Al ≪ B** | B has a giant covalent lattice; Ga has an unusual molecular-like solid structure |
| Boiling point | **Tl < In < Ga < Al < B** | cohesive energy falls broadly down the group |

### 2.3 Master order sheet — oxidation states, oxides, halides and hydrides

| Property | Verified trend/order | Exam meaning |
|---|---|---|
| Stability of +3 state | **B ≈ Al > Ga > In > Tl** | Tl(III) is strongly oxidising |
| Stability of +1 state | **Ga < In < Tl** | Tl(I) is the dominant thallium state |
| Reducing strength of M(I) compounds | **Ga(I) > In(I) > Tl(I)** | least-stable +1 state reduces most readily |
| Oxidising strength of M(III) compounds | increases down the group; **Tl(III) strongest** | Tl³⁺ readily becomes Tl⁺ |
| Acidic character of M₂O₃ | **B₂O₃ > Al₂O₃ > Ga₂O₃ > In₂O₃ > Tl₂O₃** | acidic → amphoteric → basic |
| Basic character of M₂O₃ | reverse of acidity | grows with metallic character |
| Acidic character of hydroxides | **B(OH)₃ > Al(OH)₃ > Ga(OH)₃ > In(OH)₃** | boric acid is a weak Lewis acid |
| Lewis acidity of BX₃ | **BF₃ < BCl₃ < BBr₃ < BI₃** | back bonding is strongest in BF₃ |
| Covalent character of MX₃ | highest for B; fluorides of heavier members are most ionic | small/high-charge cations polarise anions strongly |
| Hydrolysis tendency of BX₃ | BCl₃, BBr₃, BI₃ hydrolyse completely; BF₃ gives fluoroborate chemistry | strong B–F bond and stable BF₄⁻ modify the outcome |
| Thermal stability of simple hydrides | decreases down the group | E–H bonds weaken with size |
| Complex-forming tendency | high for small/high-charge M³⁺; Al³⁺ forms stable fluoro and aqua complexes | charge density controls Lewis acidity |
| Coordination number | B usually 3 or 4; Al/Ga/In can reach 6; Tl(I) often higher in ionic lattices | boron cannot expand beyond four-coordinate valence-shell bonding |

> **MEMORY AID.** Down Group 13: **size and metallic character rise; +1 stability rises; +3 stability, oxide acidity and hydride stability fall.**

### 2.4 Why gallium is smaller than aluminium

The 3d¹⁰ electrons in Ga shield the nucleus poorly. The 4s and 4p electrons therefore experience a larger effective nuclear charge than a simple shell-count argument predicts. The result is **d-block contraction**, giving Ga a smaller quoted metallic radius than Al.

> **WORKED EXAMPLE 2.1**
>
> **Question.** Arrange B, Al, Ga, In and Tl in increasing atomic radius.
>
> **Concept tested.** d-block and lanthanoid contraction.
>
> **Reasoning.** B is smallest. Ga is anomalously smaller than Al because 3d¹⁰ shields poorly. In and Tl are larger because new shells are added, although Tl is only slightly larger than In.
>
> **Final answer.** **B < Ga < Al < In < Tl.**
>
> **JEE trap.** Do not write B < Al < Ga < In < Tl.

> **WORKED EXAMPLE 2.2**
>
> **Question.** Why does boron not form B³⁺ although aluminium forms Al³⁺ readily?
>
> **Stepwise reasoning.** Boron is extremely small; the sum of its first three ionisation enthalpies is about 6887 kJ mol⁻¹. No realistic lattice or hydration enthalpy compensates for this. Aluminium has a much smaller three-electron ionisation cost and Al³⁺ is strongly hydrated.
>
> **Final answer.** Boron remains covalent; simple B³⁺ is not chemically accessible.

---

## Part 3 — Oxidation states, inert-pair effect and bonding logic

### 3.1 The +3 and +1 oxidation states

In the +3 state, all three valence electrons participate. In the +1 state, only the np¹ electron is used while the ns² pair remains non-bonding.

| Element | Most characteristic state | Important secondary state | Behaviour |
|---|---|---|---|
| B | +3 | — | exclusively covalent |
| Al | +3 | +1 very unstable | Al³⁺ strongly hydrated |
| Ga | +3 | +1 | Ga(I) compounds often reduce/disproportionate |
| In | +3 | +1 | both accessible; +1 more stable than for Ga |
| Tl | +1 | +3 | Tl(III) compounds are oxidising |

### 3.2 Inert-pair effect — energetic explanation

> **CORE THEORY.** “The ns² electrons remain inert” is only the observation. The cause is the increasing energetic separation and stabilisation of the ns orbital, enhanced by poor d/f shielding and relativistic contraction for the sixth period. Bond formation in the higher oxidation state no longer compensates fully for promoting and using the ns² pair.

**Consequence map**

- +3 stability decreases down the group.
- +1 stability increases down the group.
- Ga(I) and In(I) compounds tend to be reducing.
- Tl(III) compounds tend to be oxidising.

### 3.3 Redox interpretation

| Couple | E° (V) | Meaning |
|---|---:|---|
| Al³⁺/Al | −1.66 | Al metal is a strong reductant; Al³⁺ formation is favourable |
| Ga³⁺/Ga | −0.56 | Ga³⁺ is stable relative to Ga(I) |
| In³⁺/In | −0.34 | +1 becomes more competitive |
| Tl³⁺/Tl | +1.26 | Tl³⁺ strongly accepts electrons; it is oxidising |

### 3.4 Mixed-valence “dihalides”

> **JEE TRAP.** GaCl₂ is not a normal Ga(II) chloride. It is represented as **Ga⁺[GaCl₄]⁻**, containing Ga(I) and Ga(III). The average oxidation state is +2, but no individual gallium atom is +2.

Disproportionation of unstable monohalides:

\[
3\,\mathrm{GaX}\;\longrightarrow\;2\,\mathrm{Ga}+\mathrm{GaX_3}
\]

\[
3\,\mathrm{InX}\;\longrightarrow\;2\,\mathrm{In}+\mathrm{InX_3}
\]

> **WORKED EXAMPLE 3.1**
>
> **Question.** Which is the stronger reducing agent: Ga(I) or In(I)?
>
> **Reasoning.** +1 is less stable for Ga than for In. The less-stable lower oxidation state more readily converts to the more-stable +3 state and therefore behaves as the stronger reductant.
>
> **Final answer.** **Ga(I) > In(I)** in reducing strength.

> **WORKED EXAMPLE 3.2**
>
> **Question.** Why is TlCl stable but TlCl₃ comparatively unstable?
>
> **Reasoning.** Tl strongly stabilises the 6s² pair. Tl(I) retains 6s²; Tl(III) requires using the pair. Tl(III) therefore tends to accept electrons and return to Tl(I).
>
> **Final answer.** TlCl is the normal stable chloride; TlCl₃ is oxidising and thermally less stable.

### Rapid revision — Part 3

- +1 stability: **Ga < In < Tl**.
- +3 oxidising character increases down the group.
- “M(II)” halides may be mixed-valence salts.
- TlI₃ is best regarded as **Tl⁺I₃⁻**, not Tl(III) iodide.

---

## Part 4 — Anomalous behaviour of boron and B–Si diagonal relationship

### 4.1 Why boron is anomalous

| Cause | Direct consequence |
|---|---|
| Very small size | high ionisation enthalpy and high charge density |
| Relatively high electronegativity | covalent rather than ionic chemistry |
| No simple B³⁺ | boron uses shared-electron and coordinate bonding |
| Only 2s and 2p valence orbitals | coordination commonly limited to 3 or 4 |
| Three valence electrons | electron-deficient compounds such as BX₃ and boranes |
| Effective 2p–2p overlap | strong pπ–pπ back bonding in BF₃ |

### 4.2 Boron versus aluminium

| Property | Boron | Aluminium |
|---|---|---|
| Nature | hard covalent metalloid | metal |
| Simple cation | B³⁺ absent | Al³⁺ common in solution |
| Oxide | B₂O₃ acidic | Al₂O₃ amphoteric |
| Hydroxide | B(OH)₃ weak Lewis acid | Al(OH)₃ amphoteric |
| Halides | monomeric BX₃ | AlCl₃ dimerises as Al₂Cl₆ |
| Hydride | molecular boranes | polymeric AlH₃ / complex hydrides |

### 4.3 Diagonal relationship: B and Si

Both are hard covalent elements; their oxides are acidic; their halides hydrolyse; their hydrides are volatile/reactive; and their oxoanions form chains, rings or networks. Both form stable fluoro complexes: **BF₄⁻** and **SiF₆²⁻**.

> **JEE TRAP.** Diagonal relationship means selected similarities, not identical chemistry. Boron is three-coordinate in BF₃, while silicon commonly reaches coordination number six in SiF₆²⁻.

---

## Part 5 — Elemental boron: preparation, structure and reactions

### 5.1 Preparation of amorphous boron

**Step 1: mineral to boric acid**

\[
\mathrm{Ca_2B_6O_{11}\cdot5H_2O+4SO_2+16H_2O\rightarrow2Ca(HSO_3)_2+6H_3BO_3}
\]

**Step 2: dehydration**

\[
2\,\mathrm{H_3BO_3}\xrightarrow{\Delta}\mathrm{B_2O_3}+3\,\mathrm{H_2O}
\]

**Step 3: reduction**

\[
\mathrm{B_2O_3+3Mg\xrightarrow{\Delta}2B+3MgO}
\]

The crude product is washed with acid to remove magnesium oxide and residual magnesium.

### 5.2 Preparation of crystalline high-purity boron

| Method | Reaction / principle | Product quality |
|---|---|---|
| Hydrogen reduction | 2BCl₃ + 3H₂ → 2B + 6HCl on heated W/Ta | crystalline, high purity |
| Iodide decomposition | 2BI₃ → 2B + 3I₂ on hot filament | very high purity |
| Borane pyrolysis | B₂H₆ → 2B + 3H₂ at high temperature | finely divided boron |
| Electrolytic route | electrolysis of fused borate/oxide mixture | crystalline deposit |

### 5.3 Structure and physical properties

Boron allotropes are built from **B₁₂ icosahedra**. Strong intra- and inter-icosahedral covalent bonding explains the high melting point, hardness and semiconductor behaviour.

### 5.4 Chemical reactions of boron

| Reagent | Balanced reaction | Conditions / observation |
|---|---|---|
| Oxygen | 4B + 3O₂ → 2B₂O₃ | burns on strong heating |
| Nitrogen | 2B + N₂ → 2BN | high temperature |
| Chlorine | 2B + 3Cl₂ → 2BCl₃ | heated boron |
| Sulphur | 2B + 3S → B₂S₃ | high temperature |
| Fused NaOH | 2B + 6NaOH → 2Na₃BO₃ + 3H₂ | boron oxidised to +3 |
| Conc. HNO₃ | B → H₃BO₃ with NO₂ formation | oxidative dissolution |
| Metals | metal borides | high temperature |

> **WORKED EXAMPLE 5.1**
>
> **Question.** In the reaction with fused NaOH, identify oxidation and reduction.
>
> **Equation.** 2B + 6NaOH → 2Na₃BO₃ + 3H₂.
>
> **Reasoning.** B changes 0 → +3 and is oxidised. Hydrogen changes +1 → 0 and is reduced.
>
> **Final answer.** Boron is the reducing agent.

---

## Part 6 — Aluminium, gallium, indium and thallium

### 6.1 Aluminium: apparent inertness and real reactivity

Aluminium has a strongly negative electrode potential, but a thin adherent Al₂O₃ film blocks further reaction. Scratching, powdering or amalgamating the metal exposes fresh aluminium and reveals its high reactivity.

### 6.2 Aluminium reaction table

| Reaction type | Balanced equation | Condition / significance |
|---|---|---|
| With acid | 2Al + 6HCl → 2AlCl₃ + 3H₂ | oxide film must be penetrated |
| With alkali | 2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂ | amphoteric metal behaviour |
| With oxygen | 4Al + 3O₂ → 2Al₂O₃ | highly exothermic |
| With nitrogen | 2Al + N₂ → 2AlN | strong heating |
| With chlorine | 2Al + 3Cl₂ → 2AlCl₃ | dry chlorine, heated |
| Thermite | 2Al + Fe₂O₃ → Al₂O₃ + 2Fe | very high temperature; molten iron |

> **EXCEPTION.** Concentrated HNO₃ passivates aluminium by reinforcing the oxide film. Do not write H₂ evolution under ordinary conditions.

### 6.3 Gallium, indium and thallium — comparison

- Gallium has an unusually low melting point because its solid structure contains paired Ga atoms and weak inter-pair interactions.
- Ga(I) and In(I) are less stable than their +3 states and may disproportionate.
- Tl(I) is stable; Tl(III) is oxidising.

> **WORKED EXAMPLE 6.1**
>
> **Question.** Why does gallium melt in the hand but boil only at a very high temperature?
>
> **Reasoning.** Weak interactions between paired units are disrupted at low temperature during melting, but complete separation into gaseous atoms requires breaking much stronger bonding interactions.
>
> **Final answer.** Low melting point and high boiling point arise from different structural energy requirements.

### 6.4 Extraction of aluminium

#### Bayer process — purification of bauxite

1. Digest crushed bauxite with hot concentrated NaOH under pressure.
2. Amphoteric alumina dissolves as sodium aluminate; Fe₂O₃ remains as red mud.
3. Dilution/seeding precipitates Al(OH)₃.
4. Calcination gives pure Al₂O₃.

\[
\mathrm{Al_2O_3+2NaOH+3H_2O\rightarrow2Na[Al(OH)_4]}
\]

\[
\mathrm{Na[Al(OH)_4]\rightarrow Al(OH)_3\downarrow+NaOH}
\]

\[
2\,\mathrm{Al(OH)_3}\xrightarrow{\Delta}\mathrm{Al_2O_3}+3\,\mathrm{H_2O}
\]

#### Hall–Héroult process — electrolytic reduction

Al₂O₃ is dissolved in molten cryolite; CaF₂ may be added to improve fluidity. The electrolyte lowers the working temperature and increases conductivity.

**Cathode**

\[
\mathrm{Al^{3+}+3e^-\rightarrow Al(l)}
\]

**Anode (net carbon consumption)**

\[
\mathrm{C+2O^{2-}\rightarrow CO_2+4e^-}
\]

> **JEE TRAP.** Aqueous electrolysis cannot produce aluminium because water is reduced preferentially.

---

## Part 7 — Oxides, hydroxides and boric acid

### 7.1 Acid–base gradation

| Compound | Character | Representative reaction |
|---|---|---|
| B₂O₃ | acidic | B₂O₃ + CaO → Ca(BO₂)₂ |
| Al₂O₃ | amphoteric | reacts with both HCl and NaOH |
| Ga₂O₃ | amphoteric | similar to Al₂O₃, less acidic |
| In₂O₃ | weakly amphoteric/basic | greater basicity |
| Tl₂O / TlOH | basic | Tl(I) resembles a heavy alkali-metal cation |

### 7.2 Aluminium oxide and hydroxide

**With acid**

\[
\mathrm{Al_2O_3+6HCl\rightarrow2AlCl_3+3H_2O}
\]

\[
\mathrm{Al(OH)_3+3H^+\rightarrow Al^{3+}+3H_2O}
\]

**With base**

\[
\mathrm{Al_2O_3+2OH^-+3H_2O\rightarrow2[Al(OH)_4]^-}
\]

\[
\mathrm{Al(OH)_3+OH^-\rightarrow[Al(OH)_4]^-}
\]

### 7.3 Boric acid, H₃BO₃

#### Structure

Boric acid contains planar BO₃ units. Molecules form hydrogen-bonded layers, accounting for its flaky feel and easy cleavage.

#### Nature of acidity

Boric acid is **monobasic but not a conventional proton donor**. It accepts OH⁻ from water:

\[
\mathrm{B(OH)_3+2H_2O\rightleftharpoons[B(OH)_4]^-+H_3O^+}
\]

#### Preparation

| Method | Equation |
|---|---|
| From borax | Na₂B₄O₇·10H₂O + 2HCl → 4H₃BO₃ + 2NaCl + 5H₂O |
| From boron halide | BCl₃ + 3H₂O → H₃BO₃ + 3HCl |

#### Heating sequence

\[
\mathrm{H_3BO_3\xrightarrow{373K}HBO_2+H_2O}
\]

\[
4\,\mathrm{HBO_2}\xrightarrow{\Delta}\mathrm{H_2B_4O_7}+\mathrm{H_2O}
\]

\[
\mathrm{H_2B_4O_7\xrightarrow{red\ heat}2B_2O_3+H_2O}
\]

#### Polyhydric alcohol effect

Glycerol or mannitol forms a chelated borate complex, increasing acidity and permitting titration with NaOH.

> **WORKED EXAMPLE 7.1**
>
> **Question.** Why is H₃BO₃ monobasic although it contains three OH groups?
>
> **Reasoning.** It does not lose three protons. One boron centre accepts one OH⁻ to form [B(OH)₄]⁻, producing one H₃O⁺ equivalent.
>
> **Final answer.** Basicity = 1.

---

## Part 8 — Borax, borates and borax-bead chemistry

### 8.1 Formula and structure

Conventional formula:

\[
\mathrm{Na_2B_4O_7\cdot10H_2O}
\]

More informative structural representation:

\[
\mathrm{Na_2[B_4O_5(OH)_4]\cdot8H_2O}
\]

The tetraborate ion contains **two trigonal sp² boron centres and two tetrahedral sp³ boron centres**.

### 8.2 Hydrolysis and buffer action

Borax solution is alkaline because tetraborate hydrolyses to a mixture of boric acid and tetrahydroxyborate. This conjugate pair buffers near the pKa of boric acid.

### 8.3 Action of heat

\[
\mathrm{Na_2B_4O_7\cdot10H_2O\xrightarrow{\Delta}Na_2B_4O_7+10H_2O}
\]

\[
\mathrm{Na_2B_4O_7\xrightarrow{strong\ heat}2NaBO_2+B_2O_3}
\]

The B₂O₃ forms a transparent glassy bead that dissolves coloured metal oxides.

### 8.4 Borax-bead test — reaction architecture

| Stage | Chemical event | Purpose |
|---|---|---|
| 1 | loss of water | dry bead formation |
| 2 | Na₂B₄O₇ → 2NaBO₂ + B₂O₃ | produces glass-forming acidic oxide |
| 3 | MO + B₂O₃ → M(BO₂)₂ | coloured metaborate forms |
| 4 | oxidising/reducing flame | oxidation state and colour may change |

| Ion | Typical bead colour (oxidising flame) | High-yield note |
|---|---|---|
| Co²⁺ | deep blue | highly characteristic |
| Cr³⁺ | green | chromium borate/metaborate colour |
| Cu²⁺ | blue-green | may become red/opaque in reducing flame |
| Mn²⁺ | amethyst/violet | oxidation-state dependent |
| Fe³⁺ | yellow-brown | weaker colour than cobalt |
| Ni²⁺ | brown | less diagnostic |

> **JEE TRAP.** Colourless metaborates do not provide a useful bead test. The test is mainly valuable for coloured transition-metal ions.

> **WORKED EXAMPLE 8.1**
>
> **Question.** Why does one mole of borax consume two moles of strong acid in its usual acidification reaction?
>
> **Reasoning.** Acid converts tetraborate-derived basic borate species into four molecules of boric acid; two proton equivalents are required per tetraborate formula unit.
>
> **Reaction.** Na₂B₄O₇·10H₂O + 2HCl → 4H₃BO₃ + 2NaCl + 5H₂O.
>
> **Final answer.** Borax : HCl = **1 : 2**.

### Reaction map — borax to elemental boron

\[
\mathrm{Borax\xrightarrow{HCl}H_3BO_3\xrightarrow{\Delta}B_2O_3\xrightarrow{Mg,\Delta}B}
\]

# 3. Group 13 — Boron Family: premium textbook, Parts 9–15

> **CONTINUITY MAP.** Parts 1–8 established periodic trends, oxidation-state logic, elemental boron, aluminium, oxides, boric acid and borax. Parts 9–15 now apply those principles to halides, hydrides, boranes, complex hydrides, aluminium compounds and examination synthesis.

## Part 9 — Halides: electron deficiency, back bonding and hydrolysis

### 9.1 The central question

Why is BF₃, despite containing the most electronegative halogen, the **weakest Lewis acid** among BX₃? The answer is not inductive effect alone; it is the competition between electron withdrawal and pπ–pπ back donation.

### 9.2 Preparation of boron trihalides

| Halide | Preparation | Conditions |
|---|---|---|
| BF₃ | B₂O₃ + 3CaF₂ + 3H₂SO₄ → 2BF₃ + 3CaSO₄ + 3H₂O | heated, anhydrous apparatus |
| BCl₃ | 2B + 3Cl₂ → 2BCl₃ | direct chlorination |
| BCl₃/BBr₃ | B₂O₃ + 3C + 3X₂ → 2BX₃ + 3CO | high temperature |
| BI₃ | direct combination of B and I₂ | heated, controlled conditions |

### 9.3 Structure and electron deficiency of BX₃

BX₃ molecules are trigonal planar with sp² boron and an empty perpendicular 2p orbital. Boron has only six electrons around it and accepts a donor pair to form tetrahedral adducts such as F₃B←NH₃ and BF₄⁻.

### 9.4 Back bonding in BF₃

A filled fluorine 2p orbital overlaps with the empty boron 2p orbital. The π donation is delocalised over all three B–F bonds.

| Evidence | Observation | Interpretation |
|---|---|---|
| B–F length in free BF₃ | about 130 pm | shorter than a normal single bond |
| B–F bond energy | unusually high | partial π character |
| B–F length in H₃N·BF₃ | about 138 pm | adduct formation removes the empty p orbital and weakens back bonding |
| Equality of all three bonds | identical bond lengths | delocalised π interaction, not one fixed double bond |

### 9.5 Lewis acidity order

\[
\boxed{\mathrm{BF_3<BCl_3<BBr_3<BI_3}}
\]

- B and F both use compact 2p orbitals: strongest overlap and strongest back donation.
- Cl, Br and I use progressively larger p orbitals: poorer overlap with B 2p.
- Weaker back donation leaves boron more electron deficient, increasing Lewis acidity.

> **JEE TRAP.** Do not predict Lewis acidity only from the −I effect of halogens. That gives the wrong order.

### 9.6 Hydrolysis

**BCl₃, BBr₃ and BI₃**

\[
\mathrm{BX_3+3H_2O\rightarrow H_3BO_3+3HX}
\]

**BF₃ — fluoroborate complication**

\[
\mathrm{4BF_3+3H_2O\rightarrow H_3BO_3+3HBF_4}
\]

Stable BF₄⁻ formation means hydrolysis is not represented simply as complete conversion of every BF₃ molecule to boric acid.

### 9.7 Aluminium chloride and dimerisation

Anhydrous AlCl₃ is electron deficient. In non-donor media it forms Al₂Cl₆ using two bridging chlorines. Terminal Al–Cl bonds are shorter than bridge bonds.

\[
\mathrm{2AlCl_3\rightleftharpoons Al_2Cl_6}
\]

| Environment | Predominant behaviour |
|---|---|
| non-polar solvent / lower-temperature vapour | dimeric Al₂Cl₆ |
| high-temperature vapour | monomeric AlCl₃ increases |
| water | hydrolysis/solvation; dimer does not persist |
| Friedel–Crafts system | strong Lewis-acid activation of acyl/alkyl halide |

### 9.8 Gallium, indium and thallium halides

- GaCl₃ forms a dimer analogous to Al₂Cl₆.
- “GaCl₂” and “InCl₂” may be mixed-valence salts rather than true +2 compounds.
- Tl(I) halides are stable ionic solids.
- TlI₃ is represented as Tl⁺(I₃)⁻; Tl³⁺ and I⁻ are mutually redox-incompatible.

> **WORKED EXAMPLE 9.1**
>
> **Question.** Arrange BF₃, BCl₃, BBr₃ and BI₃ in increasing Lewis acidity.
>
> **Concept tested.** pπ–pπ back bonding.
>
> **Reasoning.** Back donation is strongest for 2p(F)–2p(B) and decreases as the donor p orbital becomes larger.
>
> **Final answer.** **BF₃ < BCl₃ < BBr₃ < BI₃.**
>
> **JEE trap.** Electronegativity alone predicts the opposite and is therefore insufficient.

> **WORKED EXAMPLE 9.2**
>
> **Question.** Why does AlCl₃ dimerise but BCl₃ does not?
>
> **Reasoning.** Aluminium is large enough to accept bridging chloride donation and become four-coordinate. Boron is too small; efficient B–Cl π interaction and steric/electronic constraints favour monomeric trigonal BCl₃.
>
> **Final answer.** AlCl₃ forms Al₂Cl₆; BCl₃ remains monomeric.

### Halide reaction map

\[
\mathrm{B\xrightarrow{X_2}BX_3\xrightarrow{H_2O}H_3BO_3}
\]

\[
\mathrm{BF_3\xrightarrow{F^-}BF_4^-\qquad AlCl_3\xrightleftharpoons[high\ T]{low\ T}Al_2Cl_6}
\]

### Rapid revision — Part 9

- BX₃: trigonal planar, sp², electron deficient.
- Lewis acidity: BF₃ < BCl₃ < BBr₃ < BI₃.
- AlCl₃ dimerises; BCl₃ does not.
- TlI₃ = Tl⁺I₃⁻.

---

## Part 10 — Boranes, diborane, borazine and boron nitride

### 10.1 Why BH₃ does not remain monomeric

BH₃ has only six electrons around boron. Two BH₃ units combine to form B₂H₆, using two bridging hydrogens and two three-centre-two-electron bonds.

### 10.2 Preparation of diborane

| Method | Balanced equation | Conditions |
|---|---|---|
| Reduction of BF₃ etherate | 4BF₃·OEt₂ + 3LiAlH₄ → 2B₂H₆ + 3LiAlF₄ + 4OEt₂ | dry ether |
| Oxidation of borohydride | 2NaBH₄ + I₂ → B₂H₆ + H₂ + 2NaI | diglyme |
| Laboratory hydride route | boron halide + metal hydride | strictly anhydrous |

### 10.3 Structure and bonding of B₂H₆

| Feature | Value / description |
|---|---|
| Terminal B–H bonds | four normal 2c–2e bonds |
| Bridge B–H–B bonds | two 3c–2e bonds |
| Bridge hydrogen | shares one electron pair between two B atoms |
| Electron deficiency | insufficient electrons for seven ordinary 2c–2e bonds |
| Shape | two bridging H atoms lie above and below the B–B region |

> **CORE THEORY.** In a 3c–2e bond, two electrons occupy a bonding molecular orbital spread over B–H–B. “Banana bond” is a shape description, not a different electron count.

### 10.4 Reactions of diborane

| Reaction type | Balanced equation | Condition / observation |
|---|---|---|
| Combustion | B₂H₆ + 3O₂ → B₂O₃ + 3H₂O | highly exothermic |
| Hydrolysis | B₂H₆ + 6H₂O → 2H₃BO₃ + 6H₂ | vigorous |
| Alkali hydrolysis | B₂H₆ + 6NaOH → 2Na₃BO₃ + 6H₂ | hydrogen evolved |
| Chlorination | B₂H₆ + 6Cl₂ → 2BCl₃ + 6HCl | vigorous |
| Alcoholysis | B₂H₆ + 6ROH → 2B(OR)₃ + 6H₂ | borate ester formed |
| Lewis-base adduct | B₂H₆ + 2CO → 2BH₃·CO | elevated pressure/temperature |
| Borohydride formation | B₂H₆ + 2LiH → 2LiBH₄ | hydride addition |

### 10.5 Diborane with ammonia

The product depends strongly on temperature and stoichiometry. Low-temperature adducts and the diammoniate of diborane form first; controlled heating can produce borazine, while stronger heating ultimately gives BN.

\[
\mathrm{3B_2H_6+6NH_3\xrightarrow{\Delta}2B_3N_3H_6+12H_2}
\]

### 10.6 Borazine

Borazine, B₃N₃H₆, is planar and isoelectronic with benzene, but B–N bond polarity makes it less aromatic and more reactive toward polar reagents.

| Comparison | Benzene | Borazine |
|---|---|---|
| Ring atoms | C₆ | alternating B₃N₃ |
| Bond polarity | low | Bδ⁺–Nδ⁻ |
| Aromatic stabilisation | strong | weaker |
| Hydrolysis | resistant | readily hydrolysed |

### 10.7 Boron nitride

| Form | Structure | Property/use |
|---|---|---|
| h-BN | layered hexagonal, graphite-like | lubricant, electrical insulator, thermally conductive |
| c-BN | tetrahedral diamond-like network | very hard abrasive; stable toward hot iron |

> **WORKED EXAMPLE 10.1**
>
> **Question.** Count the 2c–2e and 3c–2e bonds in B₂H₆.
>
> **Reasoning.** Four terminal B–H bonds are ordinary; two B–H–B bridges are multicentre.
>
> **Final answer.** **4 two-centre bonds and 2 three-centre bonds.**

> **WORKED EXAMPLE 10.2**
>
> **Question.** Calculate H₂ at STP from 5.6 g B₂H₆ (M = 27.7 g mol⁻¹) on complete hydrolysis.
>
> **Equation.** B₂H₆ + 6H₂O → 2H₃BO₃ + 6H₂.
>
> **Calculation.** n(B₂H₆)=5.6/27.7=0.202 mol; n(H₂)=1.213 mol; V≈27.2 L at 22.4 L mol⁻¹.
>
> **Final answer.** **≈27.2 L H₂.**

### 10.8 Higher boranes and cage classification — JEE Advanced/Olympiad extension

| Family | General relationship | Cage description |
|---|---|---|
| closo | skeletal pairs = n+1 | complete deltahedron |
| nido | n+2 | one vertex missing |
| arachno | n+3 | two vertices missing |
| hypho | n+4 | three vertices missing |

This material should be treated as advanced extension after core diborane chemistry, not as a replacement for basic bonding.

---

## Part 11 — Borohydrides and complex hydrides

### 11.1 Sodium borohydride

NaBH₄ contains tetrahedral BH₄⁻. It is a comparatively mild hydride donor and is commonly used in protic or moderately polar media for aldehydes and ketones.

### 11.2 Lithium aluminium hydride

LiAlH₄ contains tetrahedral AlH₄⁻. The Al–H bond is more hydridic than B–H, making LiAlH₄ a stronger and less selective reducing agent. It must be handled under strictly anhydrous conditions.

### 11.3 Comparison

| Feature | NaBH₄ | LiAlH₄ |
|---|---|---|
| Hydride donor strength | moderate | very strong |
| Moisture sensitivity | lower | very high |
| Typical solvent | alcohol/water-compatible systems in controlled use | dry ether/THF |
| Aldehydes/ketones | reduced | reduced |
| Esters/acids/amides | usually not under ordinary conditions | generally reduced |
| Handling | easier | strictly anhydrous |

**Hydrolysis of LiAlH₄**

\[
\mathrm{LiAlH_4+4H_2O\rightarrow LiOH+Al(OH)_3+4H_2}
\]

> **JEE TRAP.** Never write an oxygen-unbalanced hydrolysis equation. Count four water molecules for one LiAlH₄ in the minimal balanced form above.

---

## Part 12 — Important aluminium compounds

### 12.1 Aluminium chloride

- Anhydrous AlCl₃ is covalent and Lewis acidic.
- It dimerises in non-donor environments.
- Hydrated aluminium chloride behaves as an ionic aqua complex and hydrolyses, making solution acidic.

### 12.2 Alumina and aluminium hydroxide

| Form | Preparation/condition | Main use |
|---|---|---|
| γ-Al₂O₃ | dehydration of Al(OH)₃ at moderate temperature | catalyst support, adsorbent |
| α-Al₂O₃ | strong calcination near 1000 °C | abrasive, refractory, corundum |
| Al(OH)₃ | precipitation from Al³⁺ | amphoteric hydroxide, water treatment |

### 12.3 Alums

General type:

\[
\mathrm{M^IM^{III}(SO_4)_2\cdot12H_2O}
\]

Examples include potash alum KAl(SO₄)₂·12H₂O, ammonium alum and chrome alum. Alums are double salts; in water they dissociate into constituent ions.

### 12.4 Water treatment

Aluminium sulphate/alum hydrolyses to gelatinous Al(OH)₃, which traps suspended particles by flocculation.

---

## Part 13 — Complexes and organometallic compounds

### 13.1 Important complexes

| Species | Geometry | Significance |
|---|---|---|
| BF₄⁻ | tetrahedral | stable fluoro complex of boron |
| BH₄⁻ | tetrahedral | hydride donor |
| AlH₄⁻ | tetrahedral | stronger hydride donor |
| AlF₆³⁻ | octahedral | high coordination of aluminium |
| [Al(H₂O)₆]³⁺ | octahedral | acidic aqua ion |

### 13.2 Hydroboration–oxidation

Hydroboration adds B–H across C=C in a concerted syn process. Boron attaches to the less substituted carbon; oxidation replaces C–B by C–OH, giving an anti-Markovnikov alcohol without carbocation rearrangement.

\[
\mathrm{alkene\xrightarrow{BH_3\cdot THF}trialkylborane\xrightarrow{H_2O_2/OH^-}alcohol}
\]

### 13.3 Organoaluminium compounds

Al₂(CH₃)₆ contains terminal and bridging methyl groups. The bridge is electron deficient and is described by a 3c–2e interaction, unlike the 3c–4e chloride bridge in Al₂Cl₆.

> **WORKED EXAMPLE 13.1**
>
> **Question.** Contrast the bridge bonds in Al₂(CH₃)₆ and Al₂Cl₆.
>
> **Final answer.** Bridging CH₃ gives a 3c–2e interaction; bridging Cl donates a lone pair and gives a 3c–4e interaction.

---

## Part 14 — Applications and modern materials

| Material/compound | Chemistry behind the use | Application |
|---|---|---|
| Borosilicate glass | B₂O₃ lowers thermal expansion | laboratory glassware and cookware |
| B₄C | hard covalent solid; neutron absorption | armour, abrasives, reactor control |
| ¹⁰B compounds | high neutron-capture cross-section | neutron shielding and BNCT research |
| h-BN | layered, insulating, thermally conductive | lubricant and thermal-management ceramic |
| c-BN | diamond-like, very hard | high-temperature cutting tools |
| Boron fibres | low density and high stiffness | aerospace composites |
| Aluminium alloys | low density, protective oxide | transport and structural materials |
| GaN/GaAs | tunable semiconductor band structure | LEDs, laser diodes, high-frequency electronics |
| ITO (indium tin oxide) | conductive and transparent | touchscreens and displays |
| Tl(I) salts | K⁺ mimicry and high toxicity | no routine student-lab use; toxicology relevance |

> **SAFETY NOTE.** Thallium compounds are highly toxic because Tl⁺ can enter biological K⁺ transport pathways.

---

## Part 15 — Examination consolidation

### 15.1 One-page master map

**Boron:** covalent → electron deficient → BX₃, boranes, multicentre bonding.

**Aluminium:** Al³⁺ stable → amphoteric oxide/hydroxide → strong reducing metal protected by oxide film.

**Ga/In:** +1 appears but often disproportionates.

**Thallium:** +1 dominant → Tl(III) oxidising.

### 15.2 Complete high-yield orders

1. Radius: **B < Ga < Al < In < Tl**.
2. IE₁: **In < Al < Ga < Tl < B**.
3. Electronegativity: **Al < Ga < In < Tl < B**.
4. +1 stability: **Ga < In < Tl**.
5. +3 stability: **Tl < In < Ga < Al ≈ B**.
6. Oxide acidity: **B₂O₃ > Al₂O₃ > Ga₂O₃ > In₂O₃ > Tl oxides**.
7. Lewis acidity of BX₃: **BF₃ < BCl₃ < BBr₃ < BI₃**.
8. Hydride thermal stability: decreases down the group.
9. Reducing strength of M(I): **Ga(I) > In(I) > Tl(I)**.
10. Oxidising strength of M(III): increases down the group; **Tl(III)** strongest.

### 15.3 Complete reaction sheet

\[
\mathrm{Borax\xrightarrow{HCl}H_3BO_3\xrightarrow{\Delta}B_2O_3\xrightarrow{Mg}B}
\]

\[
\mathrm{B\xrightarrow{Cl_2}BCl_3\xrightarrow{LiAlH_4}B_2H_6\xrightarrow{LiH}LiBH_4}
\]

\[
\mathrm{Al\xrightarrow{O_2}Al_2O_3\xrightleftharpoons[OH^-]{H^+}Al^{3+}/[Al(OH)_4]^-}
\]

### 15.4 Important structures gallery — recall list

- BF₃: trigonal planar, empty p orbital.
- BF₄⁻: tetrahedral.
- Al₂Cl₆: chloride bridges, 3c–4e.
- B₂H₆: hydrogen bridges, 3c–2e.
- Borax ion: two sp² and two sp³ boron centres.
- H₃BO₃: planar molecules in H-bonded layers.
- Borazine: polar B–N ring, weaker aromaticity than benzene.
- Al₂(CH₃)₆: methyl bridges, 3c–2e.

**Group 13 problem bank (35 questions, consolidated).**

1. Which cation does *not* give the borax bead test? *(Ag⁺ — its metaborate AgBO₂ is colourless.)*
2. BF₃ + LiAlH₄ →(ether) X. Identify X and count its 2c-2e and 3c-2e bonds. *(X = B₂H₆; 4 terminal 2c-2e bonds, 2 bridging 3c-2e bonds, 12 bonding electrons total.)*
3. What happens when BF₃ is kept in moist air? *(It fumes strongly and hydrolyses only partially — see Part 9.)*
4. True or false: BCl₃ in aqueous solution exists as B³⁺ and Cl⁻. *(False — it hydrolyses to boric acid; B³⁺ never forms.)*
5. Write the equations for preparing elemental boron from colemanite. *(See Part 5 — mineral → boric acid → B₂O₃ → reduction.)*
6. Arrange BF₃, BCl₃, BBr₃, BI₃ by increasing Lewis acid strength. *(BF₃ < BCl₃ < BBr₃ < BI₃ — see Part 9.)*
7. Explain why 1 mol of borax reacts with exactly 2 mol of acid. *(See the worked example in Part 8 — only [B(OH)₄]⁻, not B(OH)₃, is basic.)*
8. Why is TlI₃ not thallium(III) iodide? *(It is Tl⁺(I₃)⁻ — see the trap in Part 9.)*
9. Distinguish an Al³⁺ salt from a Zn²⁺ salt using NH₄OH. *(Al(OH)₃ stays precipitated in excess NH₄OH; Zn(OH)₂ redissolves — see Part 12.)*
10. Why does aluminium chloride exist as a dimer in benzene but not in water? *(Al completes its octet via Cl-bridging in non-donor solvents; water solvates/ionises it to [Al(H₂O)₆]³⁺ instead.)*
11. 50 g of borax (M = 381 g/mol) is dissolved completely in water and titrated against 0.5 M HCl. Calculate the volume of HCl required at the equivalence point. *(n(borax) = 50/381 ≈ 0.1313 mol; since 1 mol borax ≡ 2 mol HCl, n(HCl) = 0.2626 mol; V = 0.2626/0.5 = 0.525 L = 525 mL.)*
12. A 1.0 g sample of impure boric acid is dissolved in water containing excess mannitol and titrated against 0.2 M NaOH, requiring 28.6 mL for the equivalence point. Calculate the % purity of the boric acid sample (M = 61.8 g/mol). *(n(NaOH) = 0.2 × 0.0286 = 5.72×10⁻³ mol; since mannitol makes H₃BO₃ effectively monoprotic 1:1 with NaOH, n(H₃BO₃) = 5.72×10⁻³ mol; mass = 5.72×10⁻³ × 61.8 ≈ 0.3535 g; purity = 0.3535/1.0 × 100 ≈ 35.4%.)*
13. Write the balanced equation for the reaction of diborane with excess water, and calculate the volume of H₂ (at STP) liberated from 5.6 g of B₂H₆ (M = 27.7 g/mol). *(B₂H₆ + 6H₂O → 2H₃BO₃ + 6H₂; n(B₂H₆) = 5.6/27.7 ≈ 0.202 mol; n(H₂) = 0.202 × 6 ≈ 1.213 mol; V = 1.213 × 22.4 ≈ 27.2 L.)*
14. In the compound Al₂(CH₃)₆, identify the type of bridging bond and contrast it with Al₂Cl₆. *(3-centre-2-electron via the bridging methyl's single shared bonding pair, vs Al₂Cl₆'s 3-centre-4-electron via Cl's donated lone pair — see Part 13.)*
15. Rank InCl₃ and TlCl₃ by thermal stability, citing the specific ΔE values that justify your answer. *(InCl₃ more stable; ΔE(In) = 5.3 eV < ΔE(Tl) = 7.0 eV, so thallium resists the +3 state more strongly — see Part 3.)*
16. Explain, using packing efficiency, why gallium has a lower density than indium despite being the smaller atom. *(Gallium's discrete Ga₂-molecule solid packs less efficiently than indium's true CCP metallic lattice — see Part 2's worked example.)*
17. State the pH of a freshly prepared borax buffer solution given pKa(H₃BO₃) = 9.25, and explain your reasoning. *(pH ≈ 9.25, since [B(OH)₃] = [B(OH)₄]⁻] makes the Henderson-Hasselbalch log term zero — see this Part's worked example.)*
18. A student claims boric acid should turn litmus sharply red because it is a confirmed acid (positive flame test). Explain why this reasoning is flawed. *(H₃BO₃'s very high pKa, ~9.25, means minimal ionisation and near-neutral solution pH — a positive confirmatory test does not imply strong acidity.)*
19. 100 kg of pure colemanite is processed through the full SO₂-hydrolysis-then-magnesium-reduction route. Calculate the mass of boron obtained, assuming 100% yield at each step. *(≈15.7 kg — see the full worked example in this Part.)*
20. Explain why LiAlH₄ reduces esters and carboxylic acids completely to alcohols, while NaBH₄ typically cannot. *(Al–H bonds are weaker/more hydridic than B–H bonds, since Al is less electronegative than B — see Part 11.)*
21. A Group 13 trihalide MX₃ is found to be ionic in the solid state with the metal 6-coordinate, yet exists as a discrete monomer in the vapour phase with no bridging. Identify M and X. *(AlF₃ — the only Group 13 trihalide combination that is both genuinely ionic AND a simple monomer in vapour, since it has no accessible bridging mechanism the way AlCl₃ has via Cl lone-pair donation; see Part 9's CN-by-state table.)*
22. Explain why B₂O₃ can act as EITHER an acid or a base depending on the reaction partner, giving one equation for each role. *(As acid: B₂O₃ + 3SO₃ → B₂(SO₄)₃, since SO₃ is a stronger acidic oxide. As base: reacting with a weaker acidic oxide or basic species, e.g. B₂O₃ + CaO → Ca(BO₂)₂ — see Part 7.)*
23. Distinguish α-Al₂O₃ from γ-Al₂O₃ by BOTH their formation temperature and their industrial use. *(γ-Al₂O₃: from Al(OH)₃ at 450°C, used as a dehydrating agent/catalyst support/chromatography adsorbent. α-Al₂O₃: from Al(OH)₃ at 1000°C, used as an abrasive/refractory — see Part 7.)*
24. Why is the borax bead test unable to distinguish Na⁺ or Al³⁺ salts, even though the test is otherwise very sensitive? *(Their metaborates are colourless — the test only works for transition-metal ions whose metaborates are visibly coloured — see Part 8.)*
25. A student titrates borax against HCl using phenolphthalein and gets an endpoint at exactly half the expected volume. Suggest the most likely experimental error. *(Most likely they used the wrong molar-ratio assumption — e.g. treated borax as monoacidic (1:1 with HCl) instead of diacidic (1:2) — see the worked example in Part 8.)*
26. Boron reacts with hot concentrated NaOH. Write the balanced equation and identify the oxidation state change of boron. *(2B + 6NaOH → 2Na₃BO₃ + 3H₂; B goes from 0 to +3, oxidised; H in NaOH/H₂O is reduced from +1 to 0.)*
27. Using the complete reactivity table in this Part, predict the product when aluminium metal is heated in dry chlorine gas. *(AlCl₃, anhydrous — direct halogenation, no water present so no hydrate forms.)*
28. A metal M reacts with dilute HCl liberating H₂, dissolves readily in NaOH solution also liberating H₂, and its anhydrous chloride is a fuming liquid that dimerises in non-polar solvents. Identify M and justify each clue against the tables in this Part and Part 9. *(M = aluminium. Dissolves in both dilute acid AND alkali → amphoteric metal, Part 6. The dimerising fuming-liquid chloride is Al₂Cl₆, Part 9 — boron's own trihalides are monomeric and cannot be the answer here, which is exactly why this clue narrows the identification to Al rather than B.)*
29. Explain, using the bridge-bond summary table above, why Ga₂H₆'s bridge is classified the same way as B₂H₆'s despite gallium being a much larger atom. *(Both bridges use hydrogen, which has no lone pair to donate regardless of the size of the metal atom it bridges — bridge classification depends on the BRIDGING ATOM's electron availability, not the metal's size.)*
30. Predict whether GaCl (gallium(I) chloride) is stable in aqueous solution, and justify using the oxidation-state summary table. *(Unstable — disproportionates: 3GaCl → 2Ga + GaCl₃, since Ga's preferred state is +3 and Ga⁺ is the less stable, "wants to disproportionate" state — see this Part's worked example for the analogous indium case.)*
31. A student says "TlF₃ should be more stable than TlCl₃ because F is more electronegative and forms stronger ionic bonds with Tl³⁺." Evaluate this claim using the inert-pair effect. *(The claim ignores that Tl³⁺ itself is intrinsically unstable regardless of the counter-ion, due to the large deltaE = 7.0 eV inert-pair gap — while lattice energy differences between TlF3 and TlCl3 exist, the DOMINANT factor is Tl's own electronic preference for +1, so TlF3 remains an oxidising agent just as TlCl3 is, not a stable +3 compound merely because fluoride is used.)*
32. Give the complete set of conditions (temperature, pressure, ratio) for converting B2O3 to elemental boron via the electrolytic route. *(Fused B2O3 + MgO + MgF2 mixture, electrolysed at approximately 1373 K — see Part 5.)*
33. Write balanced equations for BOTH the acid role and base role of B2O3, and state which partner triggers each role. *(Base role, with a stronger acidic oxide: B2O3 + 3SO3 -> B2(SO4)3. Acid role, with a basic oxide: B2O3 + CaO -> Ca(BO2)2, the same MO + B2O3 -> M(BO2)2 metaborate pattern as the bead test -- see Part 7/Part 8.)*
34. Explain why LiAlH4 must be handled under strictly anhydrous conditions, using its bonding character. *(The Al-H bonds are strongly hydridic/reducing, similar in character to diborane's B-H bonds -- LiAlH4 reacts vigorously and exothermically with any trace of water, releasing H2 and posing a fire/explosion hazard, exactly analogous to B2H6's own vigorous hydrolysis in Part 10.)*
35. Using only the data tables from Part 2 and Part 3 (no new information), rank B, Al, Ga, In and Tl by how strongly each resists forming a simple M3+(aq) ion, and justify your ranking with the specific E° values used. *(Tl strongest resistance, E°(Tl3+/Tl) = +1.26 V, positive; then B, whose covalent-only bonding makes M3+ formation essentially impossible despite no tabulated E° value being directly comparable; then Ga (-0.56 V), then In (-0.34 V), then Al showing the LEAST resistance at -1.66 V, the most negative and most spontaneous.)*

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

**Covalent nitrides** (B, Si) behave differently — boron nitride (BN)ₓ is chemically robust (Group 13, Part 10), unlike the readily-hydrolysed ionic nitrides.

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

Al, Cr and Fe are **passivated** by conc. HNO₃ (a protective oxide layer forms) and do not dissolve — the same passivation seen for Al in Group 13, Part 6.

**Brown ring test for nitrate:** relies on reduction of nitrate to NO by Fe²⁺ in the presence of dilute H₂SO₄, followed by NO coordinating to unreacted Fe²⁺ at the interface between the two liquid layers: FeSO₄ + NO → [Fe(H₂O)₅(NO)]²⁺(brown), formed as [Fe(NO)(H₂O)₅]SO₄. The iron in this complex is formally **+1** (NO is treated as NO⁺ donating one electron to Fe²⁺, giving Fe¹⁺) — one of the most frequently mis-assigned oxidation states in the whole syllabus; do not default to +2 or +3 by pattern-matching Fe's usual states.

# 9. Nitrogen oxides, phosphorus allotropes and chlorides

## 9.1 Allotropes of phosphorus

**White phosphorus (P₄):** discrete tetrahedral molecules, each P bonded to 3 others with a strained 60° P–P–P bond angle (far from the ideal ~99° for pure p-orbital bonding — this "banana bond" strain is exactly why white P is so reactive). Waxy, soft, translucent solid; **highly toxic**; glows in the dark (chemiluminescence from slow aerial oxidation, giving the name "phosphorus" — light-bearer); spontaneously ignites in air above ~35 °C, so it is stored under water. Soluble in CS₂.

**Red phosphorus:** a polymeric chain structure formed by breaking one P–P bond per P₄ tetrahedron and linking the units — no ring strain, hence far less reactive, non-toxic, does not glow, does not ignite spontaneously. Obtained by heating white P in an inert atmosphere at ~573 K.

**Black phosphorus:** the thermodynamically most stable allotrope, with a layered structure resembling graphite; obtained from red or white phosphorus under high pressure. Densest and least reactive form.

> **Fast recall:** reactivity order white ≫ red > black, mirroring exactly how ring/lattice strain (not oxidation state or formula) governs reactivity — the same "small, strained unit is more reactive" logic as diborane's electron deficiency or borazine's polar bonds.

## 9.2 Phosphorus halides

**PCl₃ (phosphorus trichloride):** P₄ + 6Cl₂ → 4PCl₃ (limited chlorine). Trigonal pyramidal, sp³ P with one lone pair. Hydrolyses readily: PCl₃ + 3H₂O → H₃PO₃ + 3HCl.

**PCl₅ (phosphorus pentachloride):** P₄ + 10Cl₂ → 4PCl₅ (excess chlorine), or PCl₃ + Cl₂ → PCl₅. In the **gas phase**, PCl₅ is trigonal bipyramidal (sp³d) — the two axial P–Cl bonds (219 pm) are *longer* than the three equatorial bonds (204 pm), because axial bonds experience more electron-pair repulsion (90° to three equatorial pairs) than equatorial bonds do (only 120° to their neighbours). In the **solid state**, PCl₅ exists as an ionic lattice, [PCl₄]⁺[PCl₆]⁻ — tetrahedral cation, octahedral anion — a frequently tested structure-changes-with-state question, directly parallel to AlCl₃'s dimer-in-vapour/ionic-tending-in-water duality (Group 13, Part 9) and BeCl₂'s own state-dependent structure.

Hydrolysis: PCl₅ + 4H₂O → H₃PO₄ + 5HCl (complete hydrolysis, unlike BF₃'s partial hydrolysis in Group 13, Part 9 — phosphorus has accessible d-orbitals throughout, so no stable intermediate fluoro/chloro-complex analogous to BF₄⁻ forms to arrest the reaction).

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

Unlike nitrogen and phosphorus, the intermediate +3 oxidation state of arsenic, antimony and bismuth is **stable and does not disproportionate** — the inert-pair effect (§4, applied here to Group 15's heaviest members) makes +3 the preferred state rather than an unstable midpoint between −3 and +5. Bi(V) compounds (e.g. NaBiO₃) are instead strong oxidising agents, readily reduced to the stable Bi(III), directly parallel to Tl³⁺ (Group 13, Part 3) and PbO₂ (§4.2).

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
