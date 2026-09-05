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
