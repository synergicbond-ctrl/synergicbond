// Hydrogen question bank — faithful reproduction of the two authored
// assignment documents (Assignment-1: 80 questions across single-correct,
// multiple-correct, comprehension, assertion-reason, matrix-match, integer
// and NCERT statement-analysis; Assignment-2: 25 questions with answer key).
// Format only was converted (pandoc -> GFM pipe tables, backslash-escapes
// removed, heading levels shifted); question, option, answer and solution
// text is unchanged.

export const HYDROGEN_QUESTION_BANK_MARKDOWN = String.raw`
# Assignment 1

## Quick Answer Key

| **Questions** | **Key** |
|----|----|
| 1–12 | 1 D; 2 C; 3 A; 4 A; 5 D; 6 B; 7 B; 8 A; 9 D; 10 D; 11 D; 12 B |
| 13–21 | 13 A,B,C,D; 14 A,B,C; 15 B,C; 16 A,B,C,D; 17 A,B,C; 18 A,B,C; 19 A,B,C,D; 20 A,B,C,D; 21 A,B |
| 22–40 | 22 C; 23 B; 24 B; 25 C; 26 A; 27 C; 28 B; 29 D; 30 A; 31 A; 32 C; 33 A; 34 D; 35 B; 36 D; 37 D; 38 B; 39 B; 40 A |
| 41–53 | 41 B; 42 A; 43 A; 44 D; 45 A; 46 D; 47 A; 48 A; 49 A; 50 D; 51 B; 52 A; 53 B |
| 54–61 | 54 A–P,R,S,T; B–Q,R; C–Q,R; D–Q,R,S,T · 55 A–Q; B–S; C–R; D–R · 56 A–Q,T; B–R,T; C–Q,S; D–P,S · 57 A–R; B–P; C–P,Q,R; D–S · 58 A–P,R,S,T; B–Q,T; C–Q; D–P,R,S,T · 59 A–Q,S; B–P,R; C–P,S; D–Q,S · 60 A–P; B–Q,R; C–P,Q,S · 61 I–R; II–P; III–S; IV–Q |
| 62–76 | 62 a1,b77,c27; 63 a3,b9,c5; 64 a3,b6,c10; 65 a5,b6,c4; 66 a4,b3,c5; 67 a4,b3,c7; 68 a3,b7,c5; 69 a3,b5,c100; 70 a6,b12,c3; 71 a3,b2,c10; 72 a3,b4,c6; 73 a5,b5,c1; 74 a2,b1,c9,d3; 75 a3,b24,c1,d0; 76 a5,b5,c3,d3 |
| 77–80 | 77 = 23; 78 = 30; 79 = 25; 80 = 29 |

## Section A • Single-Correct Questions

**Q1. A hydrogen atom is almost ______ times larger than an H⁺
ion.**

Answer: D — 50,000

**(A) 50 — Incorrect.** This is far too small compared with the very
large size difference between an atom and a bare protonic nucleus.

**(B) 500 — Incorrect.** Still much smaller than the ratio used in the
assignment.

**(C) 5000 — Incorrect.** Still one order of magnitude below the keyed
value.

**(D) 50000 — Correct.** The assignment uses the standard qualitative
point that a bare H⁺ nucleus is extraordinarily small relative to a
hydrogen atom.

**Q2. Choose the correct ionisation-energy order for H, H⁺ and H⁻.**

Answer: C — H⁻ < H < H⁺

**(A) H < H⁺ < H⁻ — Incorrect.** H⁻ holds its extra electron
comparatively weakly, so it cannot have the largest electron-removal
energy.

**(B) H⁻ > H > H⁺ — Incorrect.** The order is reversed relative to the
assignment convention.

**(C) H⁻ < H < H⁺ — Correct.** H⁻ loses its extra electron most
readily; neutral H requires much more energy. The key places H⁺ at the
upper end.

**(D) H⁺ < H < H⁻ — Incorrect.** This again incorrectly makes H⁻ the
hardest species from which to remove an electron.

**Precision note:** Strictly, ordinary “ionisation energy” is not
defined for bare H⁺ because H⁺ contains no electron. The question uses a
comparative textbook convention; the supplied key is retained.

**Q3. The most common way by which a hydrogen atom may attain stability
is…**

Answer: A — forming a covalent bond

**(A) forming a covalent bond — Correct.** Hydrogen most commonly
completes its duplet by sharing an electron pair, as in H₂, HCl, H₂O and
hydrocarbons.

**(B) forming H⁺ — Incorrect.** Formation of H⁺ is possible in strongly
polar/ionic contexts, but it is not the most common bonding mode of
hydrogen.

**(C) forming H⁻ — Incorrect.** Hydride H⁻ occurs mainly with
sufficiently electropositive elements; it is not hydrogen’s dominant
mode of stabilization.

**(D) both formation of H⁺ and H⁻ only — Incorrect.** The word “only”
excludes covalent bonding, which is the most common case.

**Q4. The most abundant element in the universe is…**

Answer: A — hydrogen

**(A) hydrogen — Correct.** Hydrogen dominates ordinary cosmic matter by
abundance.

**(B) oxygen — Incorrect.** Oxygen is abundant, but far less abundant
cosmically than hydrogen.

**(C) nitrogen — Incorrect.** Nitrogen is not the most abundant cosmic
element.

**(D) helium — Incorrect.** Helium is second to hydrogen, not first.

**Q5. Which option describes the properties of H₂?**

Answer: D — none of A–C is incorrect

**(A) H₂ is the lightest gas known — Correct.** Molecular hydrogen has
the smallest molar mass among ordinary gases.

**(B) H₂ is not very reactive under normal conditions — Correct.** The
strong H–H bond gives H₂ substantial kinetic stability at room
temperature, despite favorable reactions under activation/catalysis.

**(C) The H–H bond energy is very high — Correct.** Its bond
dissociation enthalpy is unusually high for a single bond.

**(D) None of the preceding statements is incorrect — Correct.** Because
A, B and C are all correct, D is the single-correct meta-option.

**Q6. Which statement is incorrect regarding the use of H₂ as a fuel?**

Answer: B — “Burning H₂ causes pollution.”

**(A) It produces a large amount of heat during burning — Correct.**
Hydrogen combustion is highly exothermic and has high energy release per
unit mass.

**(B) Burning H₂ causes pollution — Incorrect.** Ideal H₂/O₂ combustion
forms water and no carbon dioxide, soot or carbon monoxide. In air, high
flame temperatures can still generate some NOₓ, but that does not make
the blanket statement correct.

**(C) Burning H₂ involves an explosion risk — Correct.** Hydrogen forms
highly flammable mixtures with air/oxygen, so storage and ignition
safety are important.

**(D) Burning hydrogen produces water — Correct.** 2H₂ + O₂ → 2H₂O.

**Q7. A proton and a deuteron are differentiated by their…**

Answer: B — number of neutrons

**(A) number of protons — Incorrect.** Both nuclei contain one proton.

**(B) number of neutrons — Correct.** A proton (¹H⁺) has 0 neutrons; a
deuteron (²H⁺) has 1 neutron.

**(C) number of electrons — Incorrect.** Both are nuclei/positive ions
and contain no electron.

**(D) charges — Incorrect.** Both carry a +1 charge.

**Q8. If the oxidation state of B in BH₃ is +3, what are the oxidation
states of Si in SiH₄ and C in CH₄?**

Answer: A — +4, −4

**(A) +4, −4 — Correct.** H is more electronegative than Si, so H = −1
and Si = +4 in SiH₄. Carbon is more electronegative than H, so H = +1
and C = −4 in CH₄.

**(B) +4, +4 — Incorrect.** The Si value is right, but carbon in CH₄ is
−4, not +4.

**(C) −4, +4 — Incorrect.** Both signs are reversed.

**(D) −4, −4 — Incorrect.** Carbon is −4, but silicon is +4.

**Q9. Choose the correct lattice-energy order.**

Answer: D — MgH₂ > CaH₂ > SrH₂

**(A) LiH < NaH < KH — Incorrect.** For the same ionic charges,
lattice energy decreases down Group 1 as cation radius increases: LiH >
NaH > KH.

**(B) MgH₂ < CaH₂ < SrH₂ — Incorrect.** This is the reverse of the
size trend.

**(C) LiH < NaH > KH — Incorrect.** LiH should have greater lattice
energy than NaH, so the first inequality is wrong.

**(D) MgH₂ > CaH₂ > SrH₂ — Correct.** Increasing cation size from Mg²⁺
to Sr²⁺ lowers electrostatic attraction and lattice energy.

**Q10. At what temperature will water act as an acid, given the listed
Kᵥ values?**

Answer: D — at each listed temperature

**(A) 25 °C only — Incorrect.** Water’s ability to donate H⁺ does not
exist only at 25 °C.

**(B) 80 °C only — Incorrect.** Changing Kᵥ changes the extent of
self-ionisation, not the fundamental amphiprotic character.

**(C) 4 °C only — Incorrect.** Water can still act as a Brønsted acid at
other temperatures.

**(D) Water can act as an acid at each temperature — Correct.** Water is
amphiprotic: it can donate a proton to a stronger base at all the stated
temperatures.

**Q11. Choose the correct statement.**

Answer: D — all of these

**(A) HCl is the most volatile hydrogen halide — Correct.** Among HF,
HCl, HBr and HI, HCl has the lowest boiling point; HF is anomalously
high because of hydrogen bonding.

**(B) HCl is less easily liquefied than NH₃ — Correct.** NH₃ has a much
higher boiling point because of intermolecular hydrogen bonding and is
therefore easier to liquefy.

**(C) Water has a higher boiling point than HF — Correct.** Water forms
a more extensive three-dimensional hydrogen-bonded network and boils
much higher than HF.

**(D) All of these — Correct.** A, B and C are all correct.

**Q12. Choose the correct statement regarding maleic acid and fumaric
acid.**

Answer: B

**(A) pKₐ₁(maleic) > pKₐ₁(fumaric) — Incorrect.** Maleic acid has the
lower pKₐ₁ because its first conjugate base is stabilized by
intramolecular hydrogen bonding; therefore pKₐ₁(maleic) <
pKₐ₁(fumaric).

**(B) Both maleic acid and its first conjugate base can show
intramolecular hydrogen bonding — Correct.** The cis arrangement places
the two carboxyl groups close enough for intramolecular H-bonding in
relevant forms.

**(C) Fumaric acid cannot form hydrogen bonds — Incorrect.** Fumaric
acid cannot form the analogous intramolecular H-bond efficiently because
the COOH groups are trans, but it can form intermolecular hydrogen
bonds.

**(D) Kₐ₂(fumaric) < Kₐ₂(maleic) — Incorrect.** The second ionisation
of maleic acid is relatively difficult because it destroys stabilizing
intramolecular H-bonding and creates nearby negative charges. Thus
Kₐ₂(fumaric) > Kₐ₂(maleic).

## Section B • Multiple-Correct Questions

**Q13. Which depicted hydrogen-bond representations are incorrect?**

Answer: A, B, C, D

**(A) (CH₃)₃N···O–H with dotted line terminating at O — Incorrect.** A
hydrogen bond is represented between the acceptor lone pair and the
donor hydrogen: N:···H–O, not N···O–H with the dotted contact ending at
O.

**(B) Cyclic B(OH)₃ drawing with an incorrectly assigned O···H contact —
Incorrect.** The donor/acceptor geometry must connect a donor H to an
acceptor atom/lone pair. The depicted contact is assigned to the wrong
atoms.

**(C) Carbonyl oxygen hydrogen-bonded to a non-polar C–H donor —
Incorrect.** In the ordinary JEE/NCERT treatment, a typical non-polar
C–H bond is not taken as the required strongly polar X–H donor for
conventional hydrogen bonding.

**(D) A P–H group shown as donor to water — Incorrect.** P–H is
insufficiently polar in the standard treatment; N–H, O–H and F–H are the
classic donors.

**Q14. A hydrogen atom may attain stability by…**

Answer: A, B, C

**(A) forming a covalent electron-pair bond — Correct.** Sharing permits
the hydrogen atom to attain a helium-like duplet.

**(B) losing an electron to form H⁺ — Correct.** This mode occurs in
compounds where hydrogen is formally positive/protonic.

**(C) gaining an electron to form H⁻ — Correct.** With electropositive
metals, hydrogen can exist as hydride H⁻.

**(D) none of these — Incorrect.** A–C are all valid modes.

**Q15. Which properties of hydrogen are similar to those of halogens?**

Answer: B, C

**(A) formation of H⁺ like X⁺ — Incorrect.** Halogens characteristically
gain one electron to form X⁻, not form X⁺ as their normal simple ions.

**(B) formation of H⁻ like X⁻ — Correct.** Hydrogen can gain one
electron to complete 1s², analogous to halogens gaining one electron to
complete an octet.

**(C) formation of H₂ like X₂ — Correct.** Both hydrogen and halogens
exist as diatomic molecules in the elemental state.

**(D) none of these — Incorrect.** B and C are correct similarities.

**Q16. Which processes can be used for preparation of H₂ gas?**

Answer: A, B, C, D

**(A) LiH + water — Correct.** LiH + H₂O → LiOH + H₂.

**(B) Al + aqueous NaOH — Correct.** Aluminium dissolves in alkali to
give aluminate and H₂, e.g. 2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂.

**(C) Zn + dilute H₂SO₄ — Correct.** Zn + H₂SO₄(dil.) → ZnSO₄ + H₂.

**(D) electrolysis of water with KOH — Correct.** KOH increases
conductivity; H₂ is evolved at the cathode.

**Q17. Which properties of metallic hydrides are similar to those of
their parent metals?**

Answer: A, B, C

**(A) hardness — Correct.** Metallic/interstitial hydrides often retain
a metallic solid character and may be hard/brittle.

**(B) metallic lustre — Correct.** They commonly preserve a metal-like
appearance.

**(C) electrical conductivity — Correct.** They conduct electricity,
although often less effectively than the parent metal.

**(D) none of these — Incorrect.** A–C are characteristic metal-like
properties.

**Q18. Which statements are correct regarding conversion of a metal into
a metallic hydride?**

Answer: A, B, C

**(A) Hydride density can be lower than parent-metal density —
Correct.** Hydrogen enters the metal lattice and causes expansion; the
volume increase can outweigh the small added mass.

**(B) The crystal lattice expands — Correct.** Hydrogen occupation of
interstitial regions generally expands the lattice.

**(C) A solid piece can turn into powdered hydride — Correct.** Hydrogen
uptake can cause embrittlement, cracking and pulverisation.

**(D) None of these — Incorrect.** A–C are all accepted consequences.

**Q19. Choose the correct statement(s).**

Answer: A, B, C, D

**(A) Atomic hydrogen is obtained by passing H₂ through an electric arc
— Correct.** High energy dissociates H₂ into H atoms.

**(B) H₂ does not ordinarily reduce heated Al₂O₃ — Correct.** Al₂O₃ is
too stable; aluminium is much more electropositive than hydrogen.

**(C) Finely divided Pd absorbs a large amount of H₂ — Correct.**
Palladium is well known for strong hydrogen absorption/occlusion.

**(D) Nascent hydrogen is generated in Zn + dilute H₂SO₄ — Correct.**
The metal–acid reaction evolves freshly generated hydrogen; the
traditional “nascent hydrogen” description refers to such in-situ
generation.

**Q20. Which reactions are deuterolysis reactions?**

Answer: A, B, C, D

**(A) SO₃ + D₂O → D₂SO₄ — Correct.** D₂O supplies deuterium in an
analogue of hydrolysis.

**(B) CaC₂ + 2D₂O → Ca(OD)₂ + C₂D₂ — Correct.** The carbide is
decomposed by heavy water, placing D in both products.

**(C) Mg₃N₂ + 6D₂O → 3Mg(OD)₂ + 2ND₃ — Correct.** Nitride deuterolysis
gives deuterated ammonia.

**(D) AlCl₃ + 3D₂O → Al(OD)₃ + 3DCl — Correct.** This is the D₂O
analogue of hydrolysis.

**Q21. Which statements about a river covered by ice in winter are
true?**

Answer: A, B

**(A) Surface ice thermally insulates the water below — Correct.** Ice
and the air layer reduce heat loss from the liquid water underneath.

**(B) Aquatic organisms can survive because ice is lighter than water
and floats — Correct.** Floating ice leaves liquid water below instead
of allowing the whole water body to freeze from the bottom upward.

**(C) Volume decreases when water freezes — Incorrect.** Water expands
on freezing because the ice lattice is more open; volume increases.

**(D) Density of ice is maximum at 0 °C — Incorrect.** The famous
maximum-density anomaly refers to liquid water at about 4 °C, not ice at
0 °C.

## Section C • Paragraph / Comprehension Questions

**Q22. The flowsheet refers to which process?**

Answer: C — Bosch process

**(A) Lane process — Incorrect.** Lane’s process is a different cyclic
method for hydrogen manufacture involving iron/steam chemistry.

**(B) Haber process — Incorrect.** Haber synthesis consumes H₂ to make
NH₃; it is not the described reforming/shift purification flowsheet.

**(C) Bosch process — Correct.** The sequence of synthesis-gas
generation, water-gas shift and CO₂ removal is the Bosch route to
hydrogen.

**(D) Mond process — Incorrect.** The Mond process is associated with
nickel purification via volatile Ni(CO)₄.

**C₃H₈ + 3H₂O(g) → 3CO + 7H₂**

**CO + H₂O(g) → CO₂ + H₂**

**Q23. Which two substances are the same in Passage A?**

Answer: B — A and X

**(A) X and Z — Incorrect.** X is water/steam in the shift step; Z is
H₂.

**(B) A and X — Correct.** A is steam used for reforming, and X is
steam/water used in the water-gas shift.

**(C) A and Y — Incorrect.** Y is CO₂ removed by water scrubbing.

**(D) A and Z — Incorrect.** A is H₂O, Z is H₂.

**Q24. Which symbol represents dihydrogen?**

Answer: B — Z

**(A) Y — Incorrect.** Y is the absorbed CO₂ component.

**(B) Z — Correct.** After CO₂ removal, the remaining gas is H₂.

**(C) X — Incorrect.** X is H₂O/steam.

**(D) none — Incorrect.** Z explicitly corresponds to H₂.

**Q25. The components of synthesis gas are…**

Answer: C — CO and H₂

**(A) CO₂ and CO — Incorrect.** This lacks hydrogen.

**(B) CO and H₂O — Incorrect.** Steam can be a reactant, but synthesis
gas itself is chiefly CO + H₂.

**(C) CO and H₂ — Correct.** This is the standard
synthesis-gas/water-gas pair.

**(D) CO₂ and H₂ — Incorrect.** After the shift reaction this can be a
mixture before CO₂ removal, but it is not the original synthesis-gas
definition.

**Q26. Which compound of Z is called oxidane?**

Answer: A — X

**(A) X — Correct.** Z is H₂; its oxide H₂O is oxidane, and X represents
H₂O in the passage.

**(B) Y — Incorrect.** Y is CO₂.

**(C) H₂S — Incorrect.** H₂S is hydrogen sulfide, not oxidane.

**(D) N₂H₄ — Incorrect.** N₂H₄ is hydrazine.

**Q27. Which hydrogen isotope is radioactive?**

Answer: C — tritium only

**(A) protium only — Incorrect.** ¹H is stable.

**(B) deuterium only — Incorrect.** ²H is stable.

**(C) tritium only — Correct.** ³H undergoes β⁻ decay.

**(D) deuterium and tritium — Incorrect.** Deuterium is not radioactive.

**Q28. Free H₂ is scarce in Earth’s atmosphere mainly because of…**

Answer: B — weak gravitational retention of very light H₂ molecules

**(A) inflammability — Incorrect.** Flammability alone does not explain
the very low atmospheric abundance of free H₂.

**(B) weak gravitational retention — Correct.** Very light H₂ has a high
molecular speed and is poorly retained by Earth over geological time.

**(C) diatomic nature — Incorrect.** Being diatomic is not the reason
for atmospheric escape.

**(D) instantaneous reaction with O₂ — Incorrect.** H₂/O₂ mixtures
require activation/ignition; the reaction is not instantaneous under
ordinary conditions.

**Q29. Liquid H₂ is used as rocket fuel because…**

Answer: D — all of these

**(A) reaction with O₂ is highly exothermic — Correct.** Combustion
releases a large amount of energy.

**(B) liquefaction reduces storage volume — Correct.** Liquefaction
greatly increases hydrogen density relative to the gas at ordinary
pressure.

**(C) it provides high thrust — Correct.** The high energy release and
low molecular mass of exhaust products support high specific impulse.

**(D) all of these — Correct.** A–C are all valid advantages in the
intended context.

**Q30. The lattice of which listed metal is stated not to change on
hydride formation?**

Answer: A — Ni

**(A) Ni — Correct.** Ni is among the listed exceptions whose hydride
formation is stated not to require a different lattice type.

**(B) Ag — Incorrect.** Ag is not one of the stated exceptions in the
passage.

**(C) Pt — Incorrect.** Pt is discussed for hydrogen absorption/storage
but is not listed among the lattice exceptions in the passage.

**(D) Zn — Incorrect.** Zn is not listed as an exception.

**Q31. Which listed metal is used as a hydrogen-storage medium?**

Answer: A — Pd

**(A) Pd — Correct.** Palladium can absorb/occlude large volumes of
hydrogen.

**(B) Na — Incorrect.** Sodium reacts to form an ionic hydride rather
than functioning as the stated metallic storage medium.

**(C) Ba — Incorrect.** Barium forms BaH₂; it is not the passage’s cited
storage metal.

**(D) K — Incorrect.** Potassium forms KH and is not the stated
absorption medium.

**Q32. The isotope effect arises primarily from a difference in…**

Answer: C — mass

**(A) number of electrons — Incorrect.** H₂, D₂ and T₂ have the same
electronic arrangement.

**(B) number of protons — Incorrect.** All hydrogen isotopes have one
proton.

**(C) mass — Correct.** Different neutron counts change nuclear mass and
therefore vibrational zero-point energies and isotope-sensitive
rates/properties.

**(D) chemical formula — Incorrect.** The isotope effect is not
fundamentally caused by ordinary formula notation.

**Q33. Which pair shows the maximum isotope effect?**

Answer: A — ¹H and ²H

**(A) ¹H and ²H — Correct.** Substitution doubles the nuclear mass from
1 to 2, producing an exceptionally large relative mass change.

**(B) ¹⁶O and ¹⁸O — Incorrect.** The relative mass change is much
smaller.

**(C) ³⁵Cl and ³⁷Cl — Incorrect.** The fractional mass change is small.

**(D) ¹²C and ¹⁴C — Incorrect.** The relative change is larger than for
Cl but still far smaller than H → D.

**Q34. Which property order is incorrect?**

Answer: D

**(A) H₂ < D₂ < T₂ : boiling point — Correct.** Heavier isotopologues
have stronger dispersion and slightly higher phase-transition
temperatures.

**(B) H₂ < D₂ < T₂ : freezing point — Correct.** The melting/freezing
temperature increases with isotopic mass in the keyed trend.

**(C) H₂ < D₂ < T₂ : latent heat of vaporisation — Correct.** The
heavier isotopic species are more strongly condensed and require more
energy to vaporise.

**(D) T₂O > H₂O > D₂O : dissociation equilibrium constant —
Incorrect.** Heavy-water ionisation is suppressed by the stronger
O–D/O–T bonding and lower zero-point energy. The intended corrected
trend is H₂O > D₂O > T₂O for dissociation tendency.

**Q35. Which statement about ortho/para equilibrium is correct?**

Answer: B

**(A) % ortho decreases as temperature rises — Incorrect.** The ortho
fraction increases with temperature toward the statistical
high-temperature limit.

**(B) % para increases as temperature falls — Correct.** Para-H₂ is the
lower-energy spin isomer, so cooling favors it.

**(C) At 0 K % ortho is maximum — Incorrect.** At the 0 K limit
equilibrium hydrogen is essentially 100% para-H₂.

**(D) D₂ cannot show spin isomerism — Incorrect.** D₂ also exhibits
nuclear-spin isomerism, although the spin statistics differ from H₂.

**Q36. Ortho-H₂ and para-H₂ differ in…**

Answer: D — all of these

**(A) nuclear spin — Correct.** The defining difference is the relative
orientation/coupling of the two proton nuclear spins.

**(B) nuclear magnetic moment/behaviour — Correct.** Different total
nuclear-spin states produce different magnetic behaviour.

**(C) boiling point — Correct.** Their physical properties differ
slightly because rotational-state populations/energies differ.

**(D) all of these — Correct.** A–C are all differences.

**Q37. Choose the incorrect statement.**

Answer: D — “Neither A nor B is correct.”

**(A) Ortho-hydrogen has protons of parallel spin — Correct.** This is
the defining textbook description of ortho-H₂.

**(B) Ortho-hydrogen is adsorbed more readily than para-hydrogen on a
metal surface — Correct.** This is the convention adopted in the
assignment.

**(C) Both A and B are correct — Correct.** Because A and B are accepted
as correct, C is true.

**(D) Neither A nor B is correct — Incorrect.** It directly contradicts
the correctness of A and B.

**Q38. Which statement about ice is correct?**

Answer: B

**(A) H-bonded and covalently bonded H atoms are equidistant from O —
Incorrect.** A hydrogen bond O···H is substantially longer/weaker than a
covalent O–H bond.

**(B) H-bonded H atoms lie farther from O than covalently bonded H atoms
— Correct.** The intermolecular O···H separation is longer than the
intramolecular O–H bond distance.

**(C) H-bonded H atoms lie closer to O — Incorrect.** This reverses the
distance relationship.

**(D) none — Incorrect.** B is correct.

**Q39. Two ice cubes pressed together join because regelation occurs…**

Answer: B — after pressure is released

**(A) only during pressing — Incorrect.** Pressure favors local melting;
joining requires subsequent refreezing.

**(B) after pressure is released — Correct.** After pressure is removed,
the locally melted water refreezes and cements the two pieces.

**(C) throughout pressing and pressure release — Incorrect.** The
melting and refreezing stages are not the same process at the same
condition.

**(D) unpredictably — Incorrect.** Regelation has a definite
pressure/phase-change basis.

**Q40. Which curve description correctly represents density versus
temperature for water?**

Answer: A

**(A) Density rises from 0 °C to a maximum at 4 °C, then falls; liquid
water remains denser than ice — Correct.** This is the anomalous density
curve of water.

**(B) Density is minimum at 4 °C — Incorrect.** It is maximum near 4 °C.

**(C) Density falls continuously from 0 to 100 °C — Incorrect.** From 0
to 4 °C density increases, not decreases.

**(D) Density becomes constant above 4 °C — Incorrect.** It decreases
progressively with increasing temperature.

## Section D • Assertion–Reason

**Q41. Assertion–Reason**

Answer: B — both true, but R is not the correct explanation

**Assertion (A) — Correct.** H⁻ is a very strong electron/hydrogen donor
and is treated as a stronger reducing species than neutral atomic H in
the assignment.

**Reason (R) — Correct.** Neutral H is 1s¹ and H⁻ is 1s².

**Reasoning:** The configurations merely identify the species; they do
not by themselves explain the thermodynamic/chemical reducing strength.

**Q42. Assertion–Reason**

Answer: A — both true and R correctly explains A

**Assertion (A) — Correct.** A bare proton is not present as an isolated
species in ordinary condensed phases; it is immediately solvated or
bound.

**Reason (R) — Correct.** H⁺ has exceptionally small size and therefore
extremely high charge density/polarising power.

**Reasoning:** That extreme charge density makes strong interaction with
surrounding molecules inevitable, so the reason explains the assertion.

**Q43. Assertion–Reason**

Answer: A — both true and R correctly explains A

**Assertion (A) — Correct.** Free atmospheric H₂ occurs only in very
small abundance.

**Reason (R) — Correct.** Earth’s gravity retains very light H₂ poorly
over long times.

**Reasoning:** Poor gravitational retention is a principal reason why
free H₂ is scarce in the atmosphere.

**Q44. Assertion–Reason**

Answer: D — A false, R true

**Assertion (A) — Incorrect.** H⁻ and He are not equally stable species;
He is a closed-shell noble-gas atom, whereas H⁻ is only weakly bound
relative to He.

**Reason (R) — Correct.** Both are isoelectronic with 1s².

**Reasoning:** Isoelectronic configuration does not imply equal nuclear
charge, binding energy or stability.

**Q45. Assertion–Reason**

Answer: A — both true and R correctly explains A

**Assertion (A) — Correct.** Hydride shift and methyl shift are both
1,2-migrations during carbocation rearrangement and carry the bonding
electron pair to the electron-deficient carbon.

**Reason (R) — Correct.** Hydrogen and carbon-containing groups can both
migrate with their bonding electron pair in such rearrangements.

**Reasoning:** The common migratory electron-pair mechanism explains the
similarity of the two shifts.

**Q46. Assertion–Reason**

Answer: D — A false, R true

**Assertion (A) — Incorrect.** The assignment does not accept D₂ as more
readily chemisorbed than H₂; isotopic mass can slow the dissociative
chemisorption step.

**Reason (R) — Correct.** D₂ is more polarizable/heavier and has
somewhat stronger van der Waals attractions than H₂.

**Reasoning:** Stronger weak physical attraction does not mean
faster/easier chemisorption, which requires bond
activation/dissociation.

**Q47. Assertion–Reason**

Answer: A — both true and R correctly explains A

**Assertion (A) — Correct.** Titanium preparation/handling is carried
out under an inert atmosphere rather than H₂.

**Reason (R) — Correct.** Titanium can absorb/dissolve hydrogen and
become brittle through hydride formation/hydrogen embrittlement.

**Reasoning:** Therefore H₂ is unsuitable as the protective atmosphere
and argon is used.

**Q48. Assertion–Reason**

Answer: A — both true and R correctly explains A

**Assertion (A) — Correct.** Trimethylammonium hydroxide is treated as
weaker in basic behaviour than tetramethylammonium hydroxide in the
assignment.

**Reason (R) — Correct.** The N–H-containing trimethylammonium ion can
engage more strongly in hydrogen-bonding/ion pairing with OH⁻ than the
tetramethylammonium ion.

**Reasoning:** Greater association reduces the effective availability of
OH⁻, explaining the weaker basicity in the stated model.

**Q49. Assertion–Reason**

Answer: A — both true and R correctly explains A

**Assertion (A) — Correct.** In aqueous ammonia, N:···H–O is the
preferred hydrogen-bond orientation.

**Reason (R) — Correct.** O–H is more polar than N–H, so water is the
stronger H-bond donor while the ammonia lone pair is an effective
acceptor.

**Reasoning:** The polarity difference explains the preferred
donor–acceptor direction.

**Q50. Assertion–Reason**

Answer: D — A false, R true

**Assertion (A) — Incorrect.** The molar heat/enthalpy of vaporisation
of water is higher than that of HF.

**Reason (R) — Correct.** An individual HF···HF hydrogen bond can be
very strong.

**Reasoning:** However, H₂O forms a much more extensive
three-dimensional H-bonded network, so the bulk liquid requires more
energy per mole to vaporise.

**Q51. Assertion–Reason**

Answer: B — both true, but R is not the correct explanation

**Assertion (A) — Correct.** Boric acid is described as having a
slippery/soapy feel.

**Reason (R) — Correct.** In water boric acid acts as a monobasic Lewis
acid by accepting OH⁻: B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺.

**Reasoning:** Its Lewis acidity describes solution acid behaviour, not
the physical origin of the slippery feel, so R does not explain A.

**Q52. Assertion–Reason**

Answer: A — both true and R correctly explains A

**Assertion (A) — Correct.** The assignment states that solid CsCl can
absorb HCl vapour more readily than NaCl.

**Reason (R) — Correct.** Cs⁺ can stabilize an acid-salt/bihalide
species represented as Cs⁺[HCl₂]⁻, involving a strong Cl–H–Cl hydrogen
bond.

**Reasoning:** Stabilisation of the hydrogen-bonded anion provides the
reason for HCl uptake.

**Q53. Assertion–Reason**

Answer: B — both true, but R is not the complete explanation

**Assertion (A) — Correct.** Glycerol is much more viscous than ethanol.

**Reason (R) — Correct.** Glycerol exhibits intermolecular hydrogen
bonding.

**Reasoning:** Ethanol also hydrogen-bonds. The comparison is explained
by glycerol having three –OH groups and therefore a denser, more
extensive intermolecular network (plus greater molecular size), not
merely by the presence/absence of H-bonding.

## Section E • Matrix Match

**Q54. Matrix matching**

Answer: A–P,R,S,T; B–Q,R; C–Q,R; D–Q,R,S,T

**A. CO + H₂ / Co catalyst → P,R,S,T —** The intended product is CH₃OH.
Methanol is water-soluble, boils below water, hydrogen-bonds, and is
liquid at room temperature. It does not satisfy Q because no gaseous
product is formed in the intended equation.

**B. NaH + H₂O → Q,R —** NaH + H₂O → NaOH + H₂. H₂ is a room-temperature
gas and has a much lower boiling point than water. The product set is
not assigned S/T in the intended molecular sense.

**C. HCl + (CH₃)₂Ca → Q,R —** Acid protonates the methyl groups:
(CH₃)₂Ca + 2HCl → 2CH₄ + CaCl₂. CH₄ is a gas and boils far below water.

**D. Ca(HCO₃)₂ / Δ → Q,R,S,T —** Ca(HCO₃)₂ → CaCO₃ + CO₂ + H₂O. CO₂ is
gaseous and low-boiling; H₂O hydrogen-bonds and is liquid at room
temperature. Not all products are water-soluble because CaCO₃ is
sparingly soluble.

**Q55. Matrix matching**

Answer: A–Q; B–S; C–R; D–R

**A. Amphoteric → Al₂O₃ (Q) —** Al₂O₃ reacts with both acids and bases.

**B. Liberates methane with water → Al₄C₃ (S) —** Al₄C₃ + 12H₂O →
4Al(OH)₃ + 3CH₄.

**C. Lewis acid → BeCl₂ (R) —** Electron-deficient Be accepts electron
pairs from donor ligands.

**D. Polymeric chain with multicentre bridges → BeCl₂ (R) —** Solid
BeCl₂ forms polymeric chains with bridging chlorides and
electron-deficient bonding.

**Q56. Matrix matching**

Answer: A–Q,T; B–R,T; C–Q,S; D–P,S

**A. NaH(l) → ionic + conducting —** Molten NaH contains mobile Na⁺ and
H⁻ ions, so it is ionic and conducts electricity.

**B. TiH₁.₇₃ → metallic + conducting —** Its non-integral composition
identifies an interstitial/metallic hydride; metallic character permits
conduction.

**C. CaH₂(s) → ionic + non-conducting —** Solid ionic CaH₂ has fixed
ions in a lattice and therefore does not conduct in the solid state.

**D. H₂S(g) → covalent + non-conducting —** H₂S is a molecular covalent
hydride and lacks mobile charge carriers.

**Q57. Matrix matching**

Answer: A–R; B–P; C–P,Q,R; D–S

**A. Salt-like → BaH₂ —** BaH₂ is an ionic/saline hydride.

**B. Polymeric → BeH₂ —** Solid BeH₂ is electron-deficient and polymeric
with bridging hydrogen atoms.

**C. Stoichiometric → BeH₂, SiH₄, BaH₂ —** These have definite fixed
compositions.

**D. Non-stoichiometric → VH₀.₅₆ —** The fractional H content is
characteristic of an interstitial metallic hydride.

**Q58. Matrix matching**

Answer: A–P,R,S,T; B–Q,T; C–Q; D–P,R,S,T

**A. LiH → P,R,S,T —** LiH is ionic: its melt conducts; on electrolysis
H₂ is evolved at the anode; it gives H₂ with water; H is −1.

**B. BeH₂ → Q,T —** A covalent/hybridisation model is used for BeH₂, and
H has oxidation state −1 because Be is less electronegative.

**C. CH₄ → Q —** sp³ hybridisation describes carbon; H has +1 in CH₄, so
T does not apply.

**D. CaH₂ → P,R,S,T —** As an ionic hydride, molten CaH₂ conducts,
yields H₂ at the anode, reacts with water to give H₂, and contains H⁻.

**Q59. Matrix matching**

Answer: A–Q,S; B–P,R; C–P,S; D–Q,S

**A. Maleic acid → intramolecular + dipole–dipole contribution —** Its
cis COOH groups can form an intramolecular O–H···O bond between polar
groups.

**B. NaHCO₃(s) → intermolecular + ion–dipole contribution —** The ionic
bicarbonate crystal can engage in H-bond contacts involving
charged/polar sites.

**C. N₂H₄(l) → intermolecular + dipole–dipole contribution —** Hydrazine
molecules contain N–H donors and N lone-pair acceptors, producing
intermolecular association.

**D. o-Fluorophenol → intramolecular + dipole–dipole contribution —**
The ortho geometry allows an internal O–H···F contact between polar
groups in the assignment model.

**Q60. Matrix matching**

Answer: A–P; B–Q,R; C–P,Q,S

**A. HCl < HBr < HI < HF → boiling point —** HCl < HBr < HI follows
increasing dispersion; HF is anomalously highest because of strong
H-bonding.

**B. PH₃ < AsH₃ < SbH₃ < NH₃ → melting point and bond polarity —**
The stated sequence is used for melting-point trend and increasing E–H
bond polarity toward strongly polar N–H; it is not the boiling-point
order.

**C. H₂S < H₂Se < H₂Te → boiling point, melting point, acidity —**
Increasing size/polarisability raises phase-transition temperatures,
while E–H bond weakening down the group increases acidity.

**Q61. Matrix matching**

Answer: I–R; II–P; III–S; IV–Q

**I. Hydrogenation of oils → Ni —** Finely divided nickel is a standard
hydrogenation catalyst.

**II. Haber process → Fe —** Iron-based catalyst is used for N₂ + 3H₂ ⇌
2NH₃.

**III. Nuclear fusion → hydrogen bomb —** Thermonuclear weapons use
fusion of hydrogen isotopes.

**IV. Most abundant element in universe → hydrogen —** Hydrogen is the
most abundant cosmic element.

## Section F • Integer Questions

**Q62. Solve each independent part.**

**(a) Answer: 1**

Only relative abundance is higher for protium/H₂. Atomic mass, melting
point, boiling point, enthalpy of fusion and bond dissociation enthalpy
are higher for D/D₂ in the assignment trend; bond length is essentially
the same/not higher for H₂. Therefore count = 1.

**(b) Answer: 77**

H₂-producing among the nine common processes: HI/Δ ✓; C + steam ✓; Zn +
aq. NaOH ✓; CH₄ + steam ✓; Al + aq. NaOH/H₂O ✓; LiH + B₂H₆ ✗ (forms
LiBH₄); SiCl₄ + H₂O ✗; NaH + CH₃COOH ✓; molten NaH electrolysis ✓. Thus
7. Molten NaOH electrolysis does not add H₂ in the molten-state
electrode scheme; molten NaCl electrolysis also gives Na/Cl₂, not H₂.
Hence u = 7, v = 7 and 10u + v = 77.

**(c) Answer: 27**

(1) “atomic orientation” ✗ — the distinction is nuclear-spin
orientation, not orientation of atoms. (2) electron spins ✗ — the
electronic state is essentially the same. (3) proton spins ✓. (4)
physical properties differ ✓. (5) ortho has lower energy ✗ — para-H₂ is
lower in energy. (6) room-temperature H₂ is ~75% ortho ✓. So a = 3
correct, b = 3 incorrect: 10a − b = 30 − 3 = 27.

**Q63. Solve each independent part.**

**(a) Answer: 3**

Neutrons: ¹H = 0, ²H = 1, ³H = 2. Sum = 0 + 1 + 2 = 3.

**(b) Answer: 9**

The hydrated proton cluster represented with four oxygen atoms is H₉O₄⁺
= H₃O⁺·3H₂O; therefore x = 9.

**(c) Answer: 5**

Na₂O + H₂O → 2NaOH, so X = NaOH contains 1 O. Cl₂O₇ + H₂O → 2HClO₄, so Y
= HClO₄ contains 4 O. Total O atoms = 1 + 4 = 5.

**Q64. Solve each independent part.**

**(a) Answer: 3**

Interstitial/metallic hydrides in the list: LaH₂ ✓, TiH₁.₇ ✓, ScH₂ ✓.
CuH is a definite-composition hydride; LiH is saline; MgH₂ is not
counted as interstitial in this classification. Total = 3.

**(b) Answer: 6**

1 PH₃ electron-rich/CH₄ electron-precise ✓. 2 F–F < H–H < D–D bond
enthalpy ✓. 3 Equal moles Zn give equal moles H₂ with excess acid or
alkali ✓ (1 mol Zn → 1 mol H₂). 4 “D₂ lacks spin isomerism” ✗ — D₂ also
has nuclear-spin isomers. 5 Ortho/para differ physically ✓. 6 Warming
converts some para to ortho ✓. 7 Para is lower in energy ✓. Therefore 6
correct.

**(c) Answer: 10**

Mg₂C₃ + water gives C₃H₄. Molar mass = 3×12 + 4×1 = 40 g mol⁻¹; hydrogen
mass = 4 g. %H = (4/40)×100 = 10%.

**Q65. Solve each independent part.**

**(a) Answer: 5**

Liberate H₂ with water at room temperature in the intended
classification: Ca ✓; CaC₂ ✗ (gives C₂H₂); B₂H₆ ✓; CH₄ ✗; BaH₂ ✓; NaH ✓;
LiAlH₄ ✓; P₄ ✗. Count = 5.

**(b) Answer: 6**

Incorrect orders: (1) ortho > para low-temperature stability ✗ — para
is more stable; (2) ethanol > glycerol viscosity ✗ — glycerol is much
more viscous; (3) D₂ < He boiling point ✗ — D₂ boils above He; (4) HF
> H₂O melting point ✗ — H₂O melts at 0 °C, HF far below; (5) H₃BO₃ >
BF₃ melting point ✓; (6) NH₃ < SbH₃ boiling point ✓ in the data set;
(7) H₂O < D₂O freezing point ✓; (8) [HF₂]⁻ < HF H-bond strength ✗ —
bifluoride has an exceptionally strong symmetric H bond; (9) D₂O < H₂O
bond energy ✗ — O–D is effectively stronger than O–H. Total incorrect =
6.

**(c) Answer: 4 g**

CO + 2H₂ → CH₃OH. One mole CH₃OH requires 2 mol H₂. Mass = 2 mol × 2 g
mol⁻¹ = 4 g.

**Q66. Solve each independent part.**

**(a) Answer: 4**

1 Largest single use is NH₃ synthesis ✓. 2 “Hydrogen economy stores
energy only as solid/liquid H₂” ✗ — gaseous/compressed H₂ and
chemical/metal-hydride storage are also possible. 3 “Group 7 elements
form metallic hydrides” ✗ in the stated trend; Groups 7–9 generally do
not. 4 “D₂O has lower boiling point than H₂O” ✗ — D₂O has higher b.p. 5
“LiH is not saline” ✗ — LiH is a saline/ionic hydride. Thus 4 incorrect.

**(b) Answer: 3**

Electron-deficient hydrides: BeH₂, AlH₃ and B₂H₆. CH₄ is
electron-precise; NaH/CaH₂ are ionic; NH₃, H₂S and PH₃ are
electron-rich. Count = 3.

**(c) Answer: 5**

Products of molar mass 20 with D₂O are CD₄ (12 + 4×2 = 20) and ND₃ (14 +
3×2 = 20). Be₂C and Al₄C₃ give CD₄ (2 substances); AlN, Mg₃N₂ and Li₃N
give ND₃ (3 substances). Total = 5.

**Q67. Solve each independent part.**

**(a) Answer: 4**

Conducting solids are the metallic/interstitial hydrides TiH₁.₇₃,
LaH₂.₉₉, VH₀.₅₆ and PdH₀.₈. BeH₂/CH₄ are covalent molecular/polymeric
nonconductors; NaH/MgH₂ are ionic solids and do not conduct in the solid
state. Count = 4.

**(b) Answer: 3**

Among Cu, Pb, Al, Zn, Li, Ba, Ca, Mg and Hg, heated H₂ ordinarily
reduces oxides of Cu, Pb and Hg in the intended reactivity
classification. Very stable oxides of the more electropositive metals
are not reduced. Count = 3.

**(c) Answer: 7**

1 H⁺ high polarising power ✓. 2 H⁺ exists hydrated ✓. 3 radii H/H⁺/H⁻
equal ✗ — electron count and size differ enormously. 4
Kₐ(CH₃COOH)=Kₐ(CH₃COOD) ✗ — isotope substitution changes acid
dissociation slightly. 5 H₂ spin isomerism ✓. 6 Aqueous HCOONa
electrolysis can generate H₂ at both electrodes ✓ in the stated
electrolysis chemistry. 7 Fused ionic hydrides conduct ✓. 8 H⁻ is
conjugate acid of H₂ ✗ — H⁻ is the conjugate base obtained conceptually
by deprotonating H₂. 9 H⁻ Lewis base ✓. 10 water density
temperature-independent ✗. 11 tritium radioactive ✓. Correct count = 7.

**Q68. Solve each independent part.**

**(a) Answer: 3**

H₂O > D₂O dielectric constant ✓; H₂ < D₂ < T₂ bond energy ✓ in the
stated isotope trend; ¹H < ²H < ³H neutron count ✓ (0 < 1 < 2); H₂O
> D₂O heat of vaporisation ✗ — D₂O has the higher value. Count = 3.

**(b) Answer: 7**

Epsom salt is MgSO₄·7H₂O, so it contains 7 waters of crystallisation.

**(c) Answer: 5**

With dilute HCl, metals above hydrogen in the activity series liberate
H₂. From Cu, Na, K, Ag, Au, Zn, Ca, Mg: Na, K, Zn, Ca and Mg react. Cu,
Ag and Au do not. Count = 5.

**Q69. Solve each independent part.**

**(a) Answer: 3**

1 “Bosch catalyst is Fe₂O₃ with K₂O/Al₂O₃” ✗ — the assignment’s
water-gas shift catalyst is Fe₂O₃/Cr₂O₃ (iron–chromium oxide). 2
Ortho-H₂ has higher internal energy ✓. 3 At 0 K equilibrium H₂ is para;
at room temperature ~75% ortho ✓. 4 “D₂O has higher dielectric constant”
✗ — it is slightly lower. 5 Very pure H₂ from warm aqueous Ba(OH)₂ using
Ni electrodes ✓. Correct count = 3.

**(b) Answer: 5**

KH contains H⁻, which removes acidic/protic H from dilute H₂SO₄,
ethanol, HCl, H₂O and benzoic acid, generating H₂ in each case. Count =
5.

**(c) Answer: 100**

At the absolute-zero equilibrium limit, only the lowest-energy para-H₂
state is populated: 100% para-H₂.

**Q70. Solve each independent part.**

**(a) Answer: 6**

Zn + NaOH ✓; Zn + dil. H₂SO₄ ✓; Zn + dil. HCl ✓; Ag + HNO₃ ✗ (nitrate is
reduced instead of H⁺ to H₂); Pb + NaOH ✓; Sn + NaOH ✓; Fe + steam ✓.
Total = 6.

**(b) Answer: 12**

D₂¹⁸O contains two deuterium nuclei, each with 1 neutron → 2 neutrons,
and ¹⁸O has 18−8 = 10 neutrons. Total = 12.

**(c) Answer: 3**

Tritium β⁻ decay: ³₁H → ³₂He + e⁻ + antineutrino. β⁻ decay changes
atomic number by +1 but leaves mass number unchanged, so A = 3.

**Q71. Solve each independent part.**

**(a) Answer: 3**

Monobasic: H₃PO₂ ✓ (one ionisable O–H), HClO₄ ✓, HNO₃ ✓. H₃PO₃ is
dibasic (two O–H); H₂CO₃ is dibasic. Count = 3.

**(b) Answer: 2**

Hydrazine H₂N–NH₂ has two basic nitrogen centres/lone-pair protonation
steps in the intended treatment, so it can accept a maximum of 2 protons
successively.

**(c) Answer: 10**

Using the counting convention stated in the assignment: two O–H groups
provide 2 donor sites; four oxygen atoms provide 8 lone-pair acceptor
positions (2 per O). Total donor/acceptor moieties = 2 + 8 = 10.

**Precision note:** This is a formal site/lone-pair count used by the
question; actual H-bond acceptor strength of protonated –OH oxygens is
context-dependent.

**Q72. Solve each independent part.**

**(a) Answer: 3**

Zn ✓, Sn ✓ and Al ✓ are amphoteric metals that liberate H₂ with aqueous
NaOH under the intended conditions. Mg is not counted. Total = 3.

**(b) Answer: 4**

(i) Na + H₂O ✓; (ii) CaH₂ + H₂O ✓; (iii) Zn + conc. H₂SO₄ ✗ —
concentrated H₂SO₄ acts as oxidant and typically gives SO₂, not H₂; (iv)
molten NaH electrolysis ✓; (v) acidified-water electrolysis ✓; (vi) Cu +
dil. H₂SO₄ ✗. Count = 4.

**(c) Answer: 6**

With three isotopes H, D and T, distinct H₂ isotopologues are H₂, D₂,
T₂, HD, HT and DT. Count = 6.

**Q73. Solve each independent part.**

**(a) Answer: 5**

Be, Al, Zn, Sn and Pb are counted as liberating H₂ with aqueous NaOH. Mg
and Cu are not counted under the stated conditions. Total = 5.

**(b) Answer: 5**

D₂O is greater than H₂O in molar mass, melting point, boiling point,
density and viscosity. Its dielectric constant is slightly lower. Hence
5 of the 6 listed properties are greater.

**(c) Answer: 1**

Only BH₃ is electron-deficient. CH₄/SiH₄ are electron-precise; NaH/KH
are ionic; NH₃/N₂H₄/HF are electron-rich. Count = 1.

**Q74. Solve each independent part.**

**(a) Answer: 2**

O²⁻ + H₂O → 2OH⁻ is hydrolysis/proton transfer by a strongly basic oxide
ion. Fe³⁺ + 3H₂O → Fe(OH)₃ + 3H⁺ represents hydrolysis of the highly
charged metal ion. Both count: 2.

**(b) Answer: 1**

CuSO₄·5H₂O is represented as [Cu(H₂O)₄]SO₄·H₂O: four waters coordinate
directly to Cu²⁺ and one lies outside the coordination sphere, held
mainly through hydrogen bonding. Answer = 1.

**(c) Answer: 9**

All nine listed processes produce H₂ under the stated conditions:
acidified-water electrolysis; C + steam; Al + excess NaOH; Zn + dil.
HCl; hydrocarbon pyrolysis; sodium amalgam + water; hydrolith (CaH₂) +
water; steam reforming; and electrolysis of very dilute aq. NaCl (H₂ at
cathode). Count = 9.

**(d) Answer: 3**

LiAlH₄ reduces ketones C₅H₁₀O to secondary alcohols C₅H₁₂O. The three
ketone isomers are pentan-2-one, pentan-3-one and 3-methylbutan-2-one.
Aldehydes would give primary alcohols. Count = 3.

**Q75. Solve each independent part.**

**(a) Answer: 3**

Dinitrogen has a triple bond N≡N, corresponding to bond order 3.
Regeneration from NH₃/Cl₂ does not change the bond order of N₂.

**(b) Answer: 24**

The assignment cites chromium as the Group 6 exception that forms a
hydride. Chromium has atomic number 24.

**(c) Answer: 1**

For H₂O vs D₂O, only dielectric constant is higher for H₂O in the stated
data set. D₂O has higher melting point, boiling point, magnitude of
enthalpy of formation, enthalpy of vaporisation, density and viscosity.
Count = 1.

**(d) Answer: 0**

Direct coal gasification step: C + H₂O(g) → CO + H₂. No CO₂ is produced
in this direct step; CO₂ appears later in the water-gas shift. Thus 0
mol CO₂ from 1 mol C in the stated direct step.

**Q76. Solve each independent part.**

**(a) Answer: 5**

Obey constant composition: NH₃, CH₄, SiH₄, B₂H₆ and H₂O. NiH₀.₆–₀.₇,
ZrH₁.₃–₁.₇₅, VH₀.₅₆ and YbH₂.₅₅ are metallic/non-stoichiometric
examples. Count = 5.

**(b) Answer: 5**

Among Mo, Ca, Fe, Pd, Co, Ru, W and Cr, the set counted as not forming
hydrides in the stated group trend is Mo, Fe, Co, Ru and W. Ca forms
CaH₂, Pd forms PdHₓ, and Cr is the cited Group 6 exception. Count = 5.

**(c) Answer: 3**

Groups 7, 8 and 9 are the three groups stated generally not to form
hydrides in the classification. Answer = 3.

**(d) Answer: 3**

Electron-rich: NH₃, H₂O, HF, H₂S = 4. Polymeric: BeH₂, MgH₂ = 2, so X =
6. Electron-precise: CH₄, SiH₄ = 2. Ionic: SrH₂, NaH, BaH₂, CsH = 4, so
Y = 6. X + Y = 12 → repeated digit sum = 1 + 2 = 3.

## Section G • Statement Analysis (NCERT)

In this section every statement is individually evaluated. Incorrect
statements include the exact correction, as requested.

**Q77. How many of the 25 statements are correct? — Position,
occurrence, isotopes and trends**

Answer: 23

Check: 23 correct; 2 incorrect.

**(1)** Atomic hydrogen has one proton and one electron; elemental
hydrogen normally exists as diatomic H₂. **CORRECT** — ¹H has Z = 1 and
one electron; under ordinary conditions elemental hydrogen is molecular
H₂.

**(2)** Hydrogen forms more compounds than any other element and is
industrially important. **CORRECT** — Hydrogen combines with almost all
elements and appears in an enormous number of inorganic and organic
compounds.

**(3)** The 1s¹ configuration resembles the ns¹ outer configuration of
alkali metals. **CORRECT** — Both have one electron in the valence s
orbital.

**(4)** Hydrogen is one electron short of the 1s² helium configuration,
giving it halogen-like features. **CORRECT** — Like halogens, it can
gain one electron to complete a stable shell and can form a diatomic
molecule.

**(5)** Hydrogen can form H⁺, H⁻ and covalent bonds, as well as oxides,
halides and sulphides. **CORRECT** — Hydrogen shows positive, negative
and covalent bonding depending on the partner element.

**(6)** Its ionisation enthalpy is much higher than lithium’s and closer
to the high values associated with halogens. **CORRECT** — The compact
1s electron of H is strongly bound, so its ionisation enthalpy is much
higher than alkali-metal values.

**(7)** Like halogens it forms a diatomic molecule and many covalent
compounds, but it is much less reactive than halogens. **CORRECT** — H₂
is kinetically less reactive at ordinary temperature because H–H is
strong; halogens are generally more reactive in many direct
combinations.

**(8)** A bare proton is extraordinarily small and therefore remains
associated with other atoms or molecules. **CORRECT** — Its extreme
charge density causes immediate solvation/association in condensed
phases.

**(9)** Because it resembles yet differs from both Groups 1 and 17,
hydrogen is best placed separately. **CORRECT** — Its chemistry shares
features with both groups but is unique enough for separate placement in
many periodic presentations.

**(10)** Dihydrogen accounts for roughly 70% of the mass of the universe
and is prominent in the Sun and giant planets. **CORRECT** — The
statement expresses the textbook-scale cosmic abundance and astronomical
occurrence of hydrogen.

**(11)** Free hydrogen is only about 0.15% by mass of Earth’s atmosphere
because it is so light. **CORRECT** — The intended point is that free
atmospheric hydrogen is extremely scarce because very light molecules
escape Earth’s gravitational field readily.

**(12)** Combined hydrogen constitutes about 15.4% of Earth’s crust and
oceans and occurs in biomolecules and hydrocarbons. **CORRECT** —
Hydrogen is abundant in water, organic matter and many
minerals/compounds.

**(13)** Protium, deuterium and tritium contain 0, 1 and 2 neutrons,
respectively. **CORRECT** — All have one proton; neutron numbers are A−Z
= 0, 1 and 2.

**(14)** Deuterium has a terrestrial abundance near 0.0156%, mainly in
HD. **CORRECT** — This is the abundance value adopted in the assignment
and is consistent with the textbook isotope discussion.

**(15)** Tritium occurs at about one atom per 10¹⁸ protium atoms and has
a half-life near 12.33 years. **CORRECT** — The statement gives the
accepted textbook order of abundance and half-life.

**(16)** Tritium is radioactive and emits low-energy β⁻ particles.
**CORRECT** — ³H undergoes β⁻ decay to ³He.

**(17)** All three isotopes have the same electronic configuration and
therefore broadly similar chemistry. **CORRECT** — Neutral isotopes all
have 1s¹; chemical behavior is primarily electronic, so qualitative
chemistry is similar.

**(18)** Reaction rates can differ because isotopic bond-dissociation
enthalpies and masses differ. **CORRECT** — Different vibrational
frequencies/zero-point energies cause kinetic isotope effects.

**(19)** The physical properties of the isotopes differ appreciably
because their relative mass change is large. **CORRECT** — The
fractional mass differences H→D→T are unusually large, so phase and
transport properties differ noticeably.

**(20)** The melting and boiling points of D₂ exceed those of H₂.
**CORRECT** — D₂ is heavier and has slightly stronger intermolecular
dispersion, raising its phase-transition temperatures.

**(21)** The D–D bond dissociation enthalpy exceeds the H–H value,
although their listed internuclear distances are nearly the same.
**CORRECT** — Lower zero-point energy makes D₂ effectively harder to
dissociate even though equilibrium bond lengths are very similar.

**(22)** The isotope effect is especially conspicuous for hydrogen
because replacing ¹H by ²H doubles the nuclear mass. **CORRECT** — A
100% increase in nuclear mass is much larger fractionally than common
isotope substitutions in heavier elements.

**(23)** An ordinary hydrogen atom is tens of thousands of times larger
than the protonic nucleus given in the statement. **CORRECT** — The
atomic electron cloud has a length scale enormously greater than the
bare protonic nucleus.

**(24)** Tritium is stable and does not undergo radioactive decay.
**INCORRECT** — Tritium is radioactive. Correction: ³H undergoes β⁻
decay to ³He with a half-life of about 12.33 years.

**(25)** Hydrogen isotopes have identical physical properties but widely
different electronic configurations. **INCORRECT** — Both parts are
reversed. Correction: the isotopes have essentially the same electronic
configuration but measurably different physical properties because their
nuclear masses differ.

**Q78. How many of the 32 statements are correct? — Preparation,
reactions, uses, fuel and hydrogen economy**

Answer: 30

Check: 30 correct; 2 incorrect.

**(1)** Granulated Zn with dilute HCl is a standard laboratory
preparation of H₂. **CORRECT** — Zn + 2HCl → ZnCl₂ + H₂.

**(2)** Zn also gives H₂ with aqueous NaOH while forming sodium zincate.
**CORRECT** — Zinc is amphoteric and dissolves in strong alkali with H₂
evolution and zincate formation.

**(3)** Electrolysis of acidified water at platinum electrodes produces
H₂ and O₂. **CORRECT** — H₂ forms at the cathode and O₂ at the anode.

**(4)** Electrolysis of warm aqueous Ba(OH)₂ between nickel electrodes
gives hydrogen of greater than 99.95% purity. **CORRECT** — This is the
high-purity electrolytic preparation stated in the assignment/textbook
framework.

**(5)** In brine electrolysis, chlorine forms at the anode and H₂ with
OH⁻ at the cathode. **CORRECT** — Cathodic water reduction gives H₂ and
OH⁻; chloride oxidation gives Cl₂ at the anode.

**(6)** Steam reacts with hydrocarbons or coke at high temperature,
commonly with a nickel catalyst, to produce H₂-rich gas. **CORRECT** —
Steam reforming/gasification are major H₂-producing routes; Ni is
standard for hydrocarbon steam reforming.

**(7)** Representative steam-reforming equation: CH₄ + H₂O(g) → CO +
3H₂. **CORRECT** — This is the principal methane steam-reforming
equation.

**(8)** A CO/H₂ mixture is water gas and is called synthesis gas when
used to make methanol or hydrocarbons. **CORRECT** — The same CO/H₂
mixture is described by these use-dependent names.

**(9)** Producing CO/H₂ from coal is coal gasification; waste
carbonaceous materials can also be gasified. **CORRECT** — C + H₂O(g) →
CO + H₂ is the core water-gas reaction used in gasification.

**(10)** The water-gas shift reaction converts CO and steam into CO₂ and
additional H₂ over an iron-chromate catalyst near 673 K. **CORRECT** —
CO + H₂O → CO₂ + H₂; iron–chromium oxide catalysts are used in the
stated process.

**(11)** CO₂ can be removed from shifted gas by scrubbing with sodium
arsenite solution. **CORRECT** — This is the purification step stated in
the supplied NCERT-style material.

**(12)** The stated data attribute approximately 77% of industrial H₂ to
petrochemicals, 18% to coal, 4% to aqueous electrolysis and 1% to other
methods. **CORRECT** — This is a textbook data split reproduced by the
assignment; it is being evaluated as stated in that source context.

**(13)** H₂ is colourless, odourless, tasteless, combustible, lighter
than air and sparingly soluble in water. **CORRECT** — These are
standard physical properties of dihydrogen.

**(14)** The H–H bond-dissociation enthalpy, about 435.9 kJ mol⁻¹, is
exceptionally high for a single bond. **CORRECT** — The strong H–H σ
bond is responsible for the low room-temperature reactivity of H₂.

**(15)** Only a very small fraction of H₂ is atomised near 2000 K,
whereas atomisation is extensive near 5000 K. **CORRECT** — Higher
temperature is required for significant dissociation because the H–H
bond is strong.

**(16)** Atomic hydrogen can be generated at high temperature, in an
electric arc or under ultraviolet radiation. **CORRECT** — These methods
provide energy to dissociate H₂.

**(17)** Hydrogen completes reactions by losing an electron, gaining an
electron or sharing an electron pair. **CORRECT** — These correspond to
H⁺, H⁻ and covalent bonding modes.

**(18)** H₂ reacts with F₂ even in the dark, whereas reaction with I₂
requires assistance such as a catalyst. **CORRECT** — F₂ is extremely
reactive; H₂ + I₂ is much slower/reversible and requires activation.

**(19)** Combustion of H₂ to water is highly exothermic. **CORRECT** —
2H₂ + O₂ → 2H₂O releases a large amount of heat.

**(20)** The Haber process combines H₂ and N₂ over iron at high pressure
and temperature to make NH₃. **CORRECT** — N₂ + 3H₂ ⇌ 2NH₃ using an
iron-based catalyst.

**(21)** At high temperature H₂ combines with many metals to form
hydrides. **CORRECT** — Many electropositive and transition metals form
hydrides under suitable conditions.

**(22)** H₂ reduces selected metal ions and oxides of metals less active
than iron. **CORRECT** — Hydrogen can reduce oxides of less
electropositive metals under heating; very stable oxides are not
reduced.

**(23)** Nickel-catalysed hydrogenation converts vegetable oils to
edible fats. **CORRECT** — Hydrogen adds across C=C bonds, increasing
saturation and melting point.

**(24)** Hydroformylation converts olefins to aldehydes that can be
reduced further to alcohols. **CORRECT** — CO/H₂ adds across alkenes to
give aldehydes; subsequent hydrogenation gives alcohols.

**(25)** The largest single use of H₂ is ammonia manufacture; methanol
manufacture uses CO + 2H₂ over a cobalt catalyst. **CORRECT** — Both
industrial uses are stated in the assignment’s source framework.

**(26)** Other uses include manufacture of HCl and hydrides,
metallurgical reduction, torches, rocket fuel and fuel cells.
**CORRECT** — These are established applications of hydrogen.

**(27)** On a mass basis H₂ releases roughly three times as much
combustion energy as petrol, but hot combustion in air can form nitrogen
oxides. **CORRECT** — Hydrogen has high specific energy;
high-temperature flames can produce thermal NOₓ from air.

**(28)** A compressed-H₂ cylinder can be far heavier than a petrol tank
holding the same energy, and liquefaction requires cooling to about 20
K. **CORRECT** — Hydrogen has low volumetric energy density; cryogenic
liquid hydrogen requires temperatures near its ~20 K boiling region.

**(29)** Alloy systems such as NaNi₅, Ti–TiH₂ and Mg–MgH₂ can store
small quantities of hydrogen reversibly. **CORRECT** — Reversible
hydride formation is a recognized hydrogen-storage approach in the
source material.

**(30)** The hydrogen-economy concept transports and stores energy as
gaseous or liquid H₂; the stated example notes a 2005 Indian pilot using
5% H₂ in CNG. **CORRECT** — This reproduces the assignment’s NCERT-style
historical example and concept.

**(31)** Hydrogen is easily stored at room temperature in thin,
unpressurised vessels with no leakage, ignition or energy penalty.
**INCORRECT** — Hydrogen storage is difficult because the gas has very
low density, diffuses/leaks readily, is flammable, and requires
compression, liquefaction or a storage medium. Correction: safe storage
usually needs pressure-rated, cryogenic or material-based systems.

**(32)** Hydrogen combustion necessarily produces CO₂ and more pollution
than petrol combustion. **INCORRECT** — Pure H₂ contains no carbon, so
its ideal combustion product is water and it does not necessarily
produce CO₂. Air combustion can form NOₓ, but the statement “necessarily
produces CO₂ and more pollution” is wrong.

**Q79. How many of the 27 statements are correct? — Ionic, molecular and
metallic hydrides**

Answer: 25

Check: 25 correct; 2 incorrect.

**(1)** Except for noble gases, hydrogen forms binary hydrides
expressible generally as EHₓ or EₘHₙ. **CORRECT** — Hydrides occur
across most of the periodic table and can be represented by such binary
formulas.

**(2)** Hydrides are classified as ionic/saline, covalent/molecular and
metallic/non-stoichiometric. **CORRECT** — This is the standard broad
classification used in the chapter.

**(3)** Most highly electropositive s-block elements form stoichiometric
ionic hydrides. **CORRECT** — Alkali metals and heavier alkaline-earth
metals form salt-like H⁻ compounds.

**(4)** LiH, BeH₂ and MgH₂ show appreciable covalent character; BeH₂ and
MgH₂ are polymeric. **CORRECT** — Small highly polarising cations
increase covalent character; BeH₂ and MgH₂ are treated as polymeric
exceptions in the source.

**(5)** Ionic hydrides are crystalline, non-volatile and non-conducting
as solids, but their melts conduct and release H₂ at the anode.
**CORRECT** — Fixed ions cannot move in solids; molten ions are mobile
and H⁻ is oxidized at the anode to H₂.

**(6)** Saline hydrides react vigorously with water to form H₂.
**CORRECT** — H⁻ is a strong base: H⁻ + H₂O → H₂ + OH⁻.

**(7)** LiH is fairly unreactive toward O₂ or Cl₂ at moderate
temperature and is used to prepare LiAlH₄ and LiBH₄. **CORRECT** — These
are the stated reactivity/use features of LiH in the assignment
framework.

**(8)** Most p-block hydrides are covalent and volatile. **CORRECT** —
p-Block hydrides are predominantly molecular covalent compounds.

**(9)** Molecular hydrides are classified by the relationship between
available electrons and conventional two-centre bonds. **CORRECT** —
This gives electron-deficient, electron-precise and electron-rich
classes.

**(10)** B₂H₆ is electron-deficient; Group 13 hydrides are Lewis
acids/electron acceptors. **CORRECT** — They lack enough electrons for
all bonds to be ordinary 2c–2e bonds and readily accept electron pairs.

**(11)** Group 14 hydrides such as CH₄ are electron-precise and normally
tetrahedral. **CORRECT** — They have the exact electron count needed for
conventional σ bonds; CH₄ is tetrahedral.

**(12)** Hydrides of Groups 15–17 are electron-rich because of lone
pairs and tend to behave as Lewis bases. **CORRECT** — They contain more
valence electrons than required for bond formation, leaving lone pairs.

**(13)** Lone pairs on N, O and F permit intermolecular hydrogen bonding
and molecular association. **CORRECT** — These electronegative atoms are
classic hydrogen-bond acceptors, and N–H/O–H/F–H can be donors.

**(14)** Hydrogen bonding raises the boiling points of NH₃, H₂O and HF
above those expected from molar mass alone. **CORRECT** — Strong
intermolecular association requires extra energy for vaporisation.

**(15)** Formation of PH₅ is not favoured under the energetic
considerations stated here. **CORRECT** — Simple neutral PH₅ is not a
normal stable hydride under ordinary conditions; the
electron-pair/energetic picture disfavors it.

**(16)** Many d- and f-block elements form metallic hydrides; Groups 7,
8 and 9 generally do not, and Cr is the cited Group 6 exception.
**CORRECT** — This is the group trend stated in the source material.

**(17)** Metallic hydrides conduct heat and electricity, though less
efficiently than their parent metals. **CORRECT** — They retain metallic
electronic character but hydrogen uptake often reduces conductivity.

**(18)** Metallic hydrides are usually hydrogen-deficient and
non-stoichiometric, so the law of constant composition does not hold.
**CORRECT** — Their H content can vary continuously over ranges, e.g.
TiHₓ or PdHₓ.

**(19)** The term interstitial hydride arose from the earlier model of H
in lattice holes; Ni, Pd, Ce and Ac are listed lattice exceptions.
**CORRECT** — The terminology and exception list are explicitly part of
the assignment passage.

**(20)** Pd and Pt absorb large volumes of H₂, supporting hydrogenation
catalysis and storage. **CORRECT** — Hydrogen uptake at/within these
metals is important in catalysis and storage concepts.

**(21)** The expected increasing electrical-conductance order is BeH₂ <
CaH₂ < TiH₂. **CORRECT** — BeH₂ is covalent/polymeric and
nonconducting; solid CaH₂ ionic/nonconducting but metallic TiH₂ is
conducting, giving the intended progression.

**(22)** Ionic character increases LiH < NaH < CsH, and bond enthalpy
increases F–F < H–H < D–D. **CORRECT** — Larger alkali cations are
less polarising, making their hydrides more ionic; D–D has slightly
higher dissociation enthalpy than H–H, both far above weak F–F.

**(23)** Reducing power increases H₂O < MgH₂ < NaH. **CORRECT** —
Hydride ion availability/basicity increases from covalent water to more
hydride-like MgH₂ and strongly ionic NaH.

**(24)** A saline-hydride fire is not safely treated with water; CO₂ is
also not universally safe for very reactive hydrides/metals. **CORRECT**
— Water reacts violently with H⁻ releasing H₂; some reactive
metals/hydrides can also reduce/react with CO₂.

**(25)** Reversible absorption/desorption makes selected metallic
hydrides useful for storage and purification of H₂. **CORRECT** —
Hydrogen can be taken up and later released under controlled
pressure/temperature changes.

**(26)** Every metallic hydride has a fixed integral formula and leaves
the parent-metal lattice unchanged. **INCORRECT** — Metallic hydrides
are commonly non-stoichiometric (fractional x) and many undergo lattice
expansion/change. Correction: composition often varies and lattice
structure/parameters can change; only some metals are listed as
exceptions.

**(27)** Alkanes are strong Lewis acids because each C–H bond supplies a
low-energy vacant orbital. **INCORRECT** — Alkanes are not strong Lewis
acids and do not possess a suitable low-energy vacant orbital on each
C–H bond. Correction: they are generally chemically non-polar/weakly
reactive toward ordinary Lewis bases.

**Q80. How many of the 31 statements are correct? — Water, ice,
hydration/hydrolysis and heavy water**

Answer: 29

Check: 29 correct; 2 incorrect.

**(1)** Water constitutes about 65% of the human body and can approach
95% in some plants. **CORRECT** — This is the biological abundance range
stated in the source material.

**(2)** The stated data estimate oceans at about 97.33% of world water,
polar ice/glaciers at 2.04% and groundwater at 0.61%. **CORRECT** —
These percentages are the textbook distribution reproduced by the
assignment.

**(3)** Pure water is colourless and tasteless. **CORRECT** — Pure water
has no appreciable colour or taste in ordinary small quantities.

**(4)** Extensive hydrogen bonding explains water’s high freezing point,
boiling point, heat of vaporisation and heat of fusion relative to H₂S
and H₂Se. **CORRECT** — Strong intermolecular association raises the
energy needed for phase changes.

**(5)** Water also has unusually high specific heat, thermal
conductivity, surface tension, dipole moment and dielectric constant.
**CORRECT** — Its polarity and hydrogen-bond network give unusually
large bulk physical-property values.

**(6)** High heat capacity and heat of vaporisation moderate climate and
the temperature of living organisms. **CORRECT** — Water
absorbs/releases large amounts of heat with relatively small temperature
changes and evaporative cooling is effective.

**(7)** Polarity and H-bonding make water an excellent solvent for ions,
polar molecules, alcohols and carbohydrates. **CORRECT** — High
dielectric constant and strong solvation/H-bond interactions stabilize
dissolved polar/ionic species.

**(8)** Gas-phase H₂O is bent and polar, with an angle near 104.5° and
O–H distance near 95.7 pm; liquid molecules associate through H-bonds.
**CORRECT** — The molecular geometry creates a net dipole; in the
liquid, extensive intermolecular H-bonding occurs.

**(9)** At atmospheric pressure ordinary ice is hexagonal, while a cubic
form appears at very low temperature. **CORRECT** — The statement
reproduces the ice polymorph description used in the source.

**(10)** Ice is less dense than liquid water, so it floats and can
insulate aquatic life in winter. **CORRECT** — The open H-bonded lattice
of ice occupies more volume and therefore lowers density.

**(11)** Each oxygen in ordinary ice is tetrahedrally surrounded by four
oxygen atoms about 276 pm away, giving an open structure with holes.
**CORRECT** — This tetrahedral H-bond network explains the low density
and open lattice of ice.

**(12)** Water acts as a Brønsted acid toward NH₃ and as a Brønsted base
toward H₂S. **CORRECT** — With NH₃, H₂O donates H⁺ to form NH₄⁺/OH⁻;
with a stronger acid such as H₂S, H₂O can accept H⁺.

**(13)** Autoprotolysis: H₂O + H₂O ⇌ H₃O⁺ + OH⁻. **CORRECT** — One water
molecule donates a proton while another accepts it.

**(14)** Electropositive metals reduce water to H₂, making water a major
potential hydrogen feedstock. **CORRECT** — Active metals/electrolysis
can release H₂ from water; conceptually water is an abundant H source.

**(15)** In photosynthesis water is oxidised to O₂. **CORRECT** — The
oxygen-evolving complex removes electrons from water, releasing O₂.

**(16)** Fluorine oxidises water to O₂ while itself being reduced to
fluoride/HF. **CORRECT** — F₂ is a very strong oxidant and can oxidize
water, being reduced to fluoride-containing products.

**(17)** P₄O₁₀, SiCl₄ and suitable nitrides undergo hydrolysis with
water. **CORRECT** — These compounds react with water to produce
oxyacids/oxides/hydroxides or NH₃-type products depending on the
compound.

**(18)** Hydrated salts can contain coordinated water, interstitial
water or hydrogen-bonded water. **CORRECT** — Water may occupy different
structural roles in crystalline hydrates.

**(19)** In CuSO₄·5H₂O, four waters are coordinated and one is
principally hydrogen-bonded outside the coordination sphere. **CORRECT**
— The common structural representation is [Cu(H₂O)₄]SO₄·H₂O.

**(20)** Compared with H₂O, D₂O has higher molar mass, melting point,
boiling point, density and viscosity but a slightly lower dielectric
constant. **CORRECT** — These are the characteristic heavy-water isotope
shifts used in the assignment.

**(21)** The temperatures of maximum density are about 276.98 K for H₂O
and 284.2 K for D₂O. **CORRECT** — The maximum-density anomaly shifts to
a higher temperature in heavy water.

**(22)** Hydration is association with water, whereas hydrolysis is a
chemical reaction/bond cleavage involving water. **CORRECT** — Hydration
need not break covalent bonds; hydrolysis chemically transforms the
solute using water.

**(23)** Saline hydrides remove traces of water from organic liquids by
consuming water and releasing H₂. **CORRECT** — H⁻ reacts
stoichiometrically with H₂O: H⁻ + H₂O → H₂ + OH⁻.

**(24)** KCl dissolves with little hydrolysis, whereas hydrated Al³⁺
acidifies normal water; acid suppresses and alkali promotes Al³⁺
hydrolysis/precipitation. **CORRECT** — K⁺/Cl⁻ are weakly hydrolysing
ions; highly charged Al³⁺ polarizes coordinated water and generates H⁺,
with equilibrium shifted by pH.

**(25)** D₂O can be prepared by exhaustive electrolysis and occurs as a
by-product in some fertiliser industries. **CORRECT** — Preferential
electrolysis of light water enriches D₂O; industrial sources are also
cited in the textbook context.

**(26)** Heavy water is used as a moderator in nuclear reactors and in
isotope-exchange studies of reaction mechanisms. **CORRECT** — D₂O slows
neutrons effectively and deuterium labeling is valuable mechanistically.

**(27)** Examples of deuterolysis include CaC₂ + 2D₂O → C₂D₂ + Ca(OD)₂;
SO₃ + D₂O → D₂SO₄; Al₄C₃ + 12D₂O → 3CD₄ + 4Al(OD)₃. **CORRECT** — All
are D₂O analogues of hydrolysis in which deuterium appears in the
products.

**(28)** D₂O cannot replace ordinary drinking water safely because large
isotope substitution disrupts biological rates. **CORRECT** — Strong
kinetic isotope effects alter enzyme/proton-transfer processes when a
large fraction of body water is replaced by D₂O.

**(29)** Water’s solvent action, phase changes and thermal properties
are central to the biosphere and biological transport. **CORRECT** —
These properties control dissolution, circulation, heat balance and
biochemical media.

**(30)** Ordinary ice is denser than liquid water and water contracts on
freezing. **INCORRECT** — Both claims are opposite to reality.
Correction: ordinary ice is less dense than liquid water, and water
expands on freezing because the ice lattice is open.

**(31)** D₂O has a higher dielectric constant than H₂O and every
chemical reaction is faster in D₂O. **INCORRECT** — D₂O has a slightly
lower dielectric constant, and many proton-transfer/H-bond-sensitive
reactions are slower in D₂O because O–D bonds and deuterium transfer
have lower zero-point energy and show a kinetic isotope effect.

## Final Count Summary

**Q77 = 23, Q78 = 30, Q79 = 25, Q80 = 29.**

The explanations above are intentionally statement-by-statement so that
every false proposition is paired with the reason it fails and the
corrected scientific statement.

---

# Assignment 2

**SECTION A — SINGLE CORRECT (SCQ)**

------------------------------------------------------------------------

Q1. Consider the following statements about water and ice:

> (1) The isolated H₂O molecule is bent (angular), not linear.
>
> (2) In gaseous H₂O, the O–H bond length is ≈95.7 pm and the H–O–H
> angle is ≈104.5°.
>
> (3) Common ice has an open hydrogen-bonded structure in which each
> oxygen is approximately tetrahedrally surrounded.
>
> (4) Ice at its melting point is denser than liquid water at the same
> temperature.
>
> (5) Liquid water exhibits maximum density close to 4 °C.

| A) 1, 2, 3 and 5 only | B) 1, 2, 4 and 5 only |
|------------------------|------------------------|
| C) 1, 3 and 4 only    | D) 1, 2, 3, 4 and 5   |

Q2. Consider the following statements about heavy water, D₂O:

> (1) D₂O can be enriched by prolonged/exhaustive electrolysis of
> ordinary water.
>
> (2) Its melting point and boiling point are both higher than those
> of H₂O.
>
> (3) Its viscosity at 25 °C is lower than that of H₂O.
>
> (4) It is used as a neutron moderator in suitable nuclear reactors
> because deuterium has a low neutron-capture tendency.
>
> (5) CaC₂ + 2D₂O → C₂D₂ + Ca(OD)₂.
>
> (6) D₂O is useful in isotope-exchange studies of reaction
> mechanisms.

| A) 1, 2, 4, 5 and 6 only | B) 1, 2, 3, 4 and 5 only |
|---------------------------|---------------------------|
| C) 2, 3, 4 and 6 only    | D) 1, 3, 5 and 6 only    |

Q3. The following statements refer to H₂O₂ in gas and solid phases.
Standard structural data are: gas — O–O ≈147.5 pm, O–H ≈95 pm, H–O–O
≈94.8°, dihedral ≈111.5°; solid — O–O ≈145.8 pm, O–H ≈98.8 pm, H–O–O
≈101.9°, dihedral ≈90.2°.

> (1) H₂O₂ is non-planar in both gas and solid phases.
>
> (2) The O–O bond length is larger in the gas phase than in the solid
> phase.
>
> (3) The O–H bond length is smaller in the gas phase than in the
> solid phase.
>
> (4) The H–O–O angle is larger in the gas phase than in the solid
> phase.
>
> (5) The H–O–O–H dihedral angle is larger in the gas phase than in
> the solid phase.

| A) 1, 2, 4 and 5 only | B) 1, 2, 3 and 5 only |
|------------------------|------------------------|
| C) 1, 3 and 4 only    | D) 1, 2, 3, 4 and 5   |

Q4. Consider the physical behaviour, stability and storage of hydrogen
peroxide:

> (1) Pure H₂O₂ is almost colourless with a very pale blue tint.
>
> (2) H₂O₂ forms strong intermolecular hydrogen bonds with itself and
> with water.
>
> (3) Light, dust and traces of transition-metal ions can accelerate
> its decomposition.
>
> (4) Concentrated H₂O₂ is stored in compatible, light-protected
> containers.
>
> (5) The boiling point of H₂O₂ (≈150.2 °C) is lower than that of H₂O.

| A) 1, 2 and 5 only    | B) 2, 3, 4 and 5 only |
|------------------------|------------------------|
| C) 1, 2, 3 and 4 only | D) 1, 3 and 5 only    |

Q5. Consider the following statements about hardness of water:

> (1) Temporary hardness is mainly due to bicarbonates of Ca²⁺ and
> Mg²⁺.
>
> (2) Permanent hardness is commonly due to chlorides and sulphates of
> Ca²⁺ and Mg²⁺.
>
> (3) Simple boiling is an effective method for removal of permanent
> hardness.
>
> (4) Clark's process uses a calculated quantity of Ca(OH)₂ to remove
> temporary hardness.
>
> (5) Calgon softens water principally by complexing Ca²⁺/Mg²⁺ and
> keeping them in solution.
>
> (6) Ion-exchange methods can remove both temporary and permanent
> hardness.

| A) 1, 2, 3, 4 and 6 only | B) 1, 3, 4 and 5 only    |
|---------------------------|---------------------------|
| C) 2, 3, 5 and 6 only    | D) 1, 2, 4, 5 and 6 only |

Q6. Regarding the redox behaviour of H₂O₂:

> (1) Oxygen in H₂O₂ has oxidation state −1.
>
> (2) With acidified MnO₄⁻, H₂O₂ acts as a reducing agent and O₂ is
> evolved.
>
> (3) With Fe²⁺ in acidic medium, H₂O₂ acts as a reducing agent.
>
> (4) Oxidation of PbS to PbSO₄ illustrates the oxidising behaviour of
> H₂O₂.
>
> (5) Reduction of Cl₂ to Cl⁻ by H₂O₂ illustrates the reducing
> behaviour of H₂O₂.

| A) 1, 2, 3 and 4 only | B) 1, 3 and 5 only    |
|------------------------|------------------------|
| C) 2, 3, 4 and 5 only | D) 1, 2, 4 and 5 only |

Q7. Consider the following routes related to preparation of H₂O₂:

> (1) Cold dilute acid on a suitable alkali-metal peroxide can yield
> H₂O₂.
>
> (2) BaO₂ with cold dilute H₂SO₄ is a classical route to H₂O₂.
>
> (3) Reduction of 2-ethylanthraquinone alone directly liberates H₂O₂
> without a subsequent oxidation step.
>
> (4) Air/O₂ oxidation of 2-ethylanthraquinol gives H₂O₂ and
> regenerates 2-ethylanthraquinone.
>
> (5) Electrolysis of concentrated H₂SO₄ at Pt electrodes can give
> H₂S₂O₈, which yields H₂O₂ on hydrolysis.

| A) 1, 2, 3 and 5 only | B) 1, 3, 4 and 5 only |
|------------------------|------------------------|
| C) 1, 2, 4 and 5 only | D) 2, 3 and 5 only    |

Q8. Consider chromium peroxide, CrO₅ = CrO(O₂)₂, formed when acidified
dichromate is treated with H₂O₂:

> (1) Chromium is in oxidation state +6.
>
> (2) Four oxygen atoms occur in two peroxo groups and each has
> oxidation state −1.
>
> (3) The terminal oxo oxygen has oxidation state −2.
>
> (4) The blue CrO₅ species can be extracted into ether under suitable
> conditions.
>
> (5) CrO₅ is indefinitely stable in strongly acidic aqueous solution.

| A) 1, 2, 4 and 5 only | B) 1, 2, 3 and 4 only |
|------------------------|------------------------|
| C) 1, 3 and 5 only    | D) 2, 3, 4 and 5 only |

Q9. Consider the following reactions of water/steam:

> (1) Na₂O + H₂O → 2NaOH
>
> (2) Na₂O₂ + 2H₂O → 2NaOH + H₂O₂
>
> (3) 4KO₂ + 2H₂O → 4KOH + 3O₂
>
> (4) CaH₂ + 2H₂O → Ca(OH)₂ + 2H₂
>
> (5) Cu reacts readily with steam under ordinary laboratory
> conditions to give CuO + H₂.

| A) 1, 2 and 5 only | B) 2, 3, 4 and 5 only |
|---------------------|------------------------|
| C) 1, 3 and 5 only | D) 1, 2, 3 and 4 only |

Q10. Consider hydrogen as a fuel and energy carrier:

> (1) 2H₂ + O₂ → 2H₂O is highly exothermic.
>
> (2) Hydrogen has a very high calorific value per unit mass compared
> with conventional hydrocarbon fuels.
>
> (3) Liquid hydrogen has been used as rocket fuel.
>
> (4) An H₂–O₂ fuel cell directly converts chemical energy into
> electrical energy; NCERT quotes an efficiency of about 70% for the
> classical fuel-cell comparison.
>
> (5) Hydrogen obtained by ordinary steam reforming of methane without
> renewable feed/CCS is automatically classified as green hydrogen.

| A) 1, 2 and 5 only    | B) 2, 3, 4 and 5 only |
|------------------------|------------------------|
| C) 1, 2, 3 and 4 only | D) 1, 3 and 5 only    |

**SECTION B — MULTIPLE CORRECT**

------------------------------------------------------------------------

Q11. H₂O₂ can oxidise which of the following under suitable conditions?

| A) Fe²⁺ → Fe³⁺   | B) H₂S → S / higher oxidation products |
|-------------------|-----------------------------------------|
| C) SO₃²⁻ → SO₄²⁻ | D) PbS → PbSO₄                         |

Q12. H₂O₂ can act as a reducing agent toward which of the following?

| A) Acidified MnO₄⁻ | B) O₃   |
|---------------------|----------|
| C) Cl₂             | D) Ag₂O |

Q13. Which isotope-exchange statements are correct for D₂O at room
temperature, without a special catalyst?

| A) The O–H hydrogen of CH₃COOH exchanges readily with D. | B) The O–H hydrogen of C₂H₅OH exchanges readily with D. |
|----|----|
| C) N–H hydrogens of aniline can exchange with D. | D) A normal alkane C–H bond such as in CH₄ exchanges readily with D₂O. |

Q14. Which methods are suitable for removal of permanent hardness?

| A) Simple boiling   | B) Zeolite/permutit treatment    |
|----------------------|-----------------------------------|
| C) Calgon treatment | D) Synthetic ion-exchange resins |

Q15. Which statements correctly describe temporary hardness?

| A) Ca(HCO₃)₂ can cause it. | B) Mg(HCO₃)₂ can cause it. |
|----|----|
| C) It can be reduced by boiling. | D) It can be removed by Clark’s process. |

Q16. Which hydrolysis/water reactions are correctly written?

| A) NaH + H₂O → NaOH + H₂          | B) CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂ |
|------------------------------------|----------------------------------|
| C) Mg₃N₂ + 6H₂O → 2NH₃ + 3Mg(OH)₂ | D) SiCl₄ + 2H₂O → SiO₂ + 4HCl   |

Q17. Which are established uses of H₂O₂?

| A) Oxidative treatment of industrial effluents | B) Bleaching of delicate materials such as wool, silk and paper pulp |
|----|----|
| C) Conversion of black PbS on old paintings to white PbSO₄ | D) Dilute antiseptic/cleansing applications |

Q18. Which statements about syngas and hydrogen-energy chemistry are
correct?

| A) CO + H₂ is called water gas/synthesis gas in this context. | B) CO + H₂O(g) → CO₂ + H₂ is the water-gas shift reaction. |
|----|----|
| C) CH₄ + H₂O(g) → CO + 3H₂ is steam reforming. | D) H₂–O₂ fuel cells produce electrical energy with water as the principal reaction product. |

Q19. Which routes can furnish H₂O₂?

| A) Auto-oxidation of 2-ethylanthraquinol | B) Hydrolysis of H₂S₂O₈       |
|-------------------------------------------|--------------------------------|
| C) Cold acidification of Na₂O₂           | D) Cold acidification of BaO₂ |

Q20. Which comparisons between D₂O and H₂O at comparable conditions are
correct?

| A) D₂O has the higher boiling point. | B) D₂O has the higher viscosity. |
|----|----|
| C) H₂O has the higher dielectric constant at 25 °C. | D) D₂O has the higher density at 25 °C. |

Q21. Match the water type/sample with its characteristic(s).

| Column I | Column II |
|----|----|
| (A) Temporary hard water | (P) Mainly Ca²⁺/Mg²⁺ bicarbonates |
| (B) Permanent hard water | (Q) D₂O; used as nuclear moderator |
| (C) Soft water | (R) Low concentration of hardness-causing Ca²⁺/Mg²⁺ |
| (D) Heavy water | (S) Mainly Ca²⁺/Mg²⁺ chlorides or sulphates |
| — | (T) Can be softened by simple boiling |

Q22. Match the H₂O₂ reaction with its characteristic(s).

| Column I                     | Column II                          |
|------------------------------|------------------------------------|
| (A) H₂O₂ + acidified MnO₄⁻ | (P) H₂O₂ acts as reducing agent  |
| (B) H₂O₂ + Fe²⁺/H⁺         | (Q) H₂O₂ acts as oxidising agent |
| (C) H₂O₂ + PbS             | (R) O₂ is evolved                |
| (D) H₂O₂ + Ag₂O            | (S) Metal is formed/deposited    |
| —                            | (T) Sulphate product is formed   |

Q23. Match each preparation route for H₂O₂ with its associated
feature(s).

| Column I | Column II |
|----|----|
| (A) Na₂O₂ + cold dilute H₂SO₄ | (P) H₂O₂ is the desired product |
| (B) Electrolysis of concentrated H₂SO₄ at Pt electrodes | (Q) H₂S₂O₈ is an intermediate |
| (C) 2-Ethylanthraquinol + O₂/air | (R) Anthraquinone cycle is employed |
| (D) BaO₂ + cold dilute H₂SO₄ | (S) Insoluble BaSO₄ is a by-product |
| — | (T) Peroxo-acid intermediate requires hydrolysis |

Q24. STRUCTURE RECOGNITION. Study Structures A–E and match each
structure with the correct identity/feature.

| Column I | Column II |
|----|----|
| (A) H₂O₂; | (P) one O–O peroxide linkage |
| (B) CrO₅ | (Q) = CrO(O₂)₂; two peroxo groups + one terminal Cr=O |
| (C) Calgon / Na₆P₆O₁₈; | (R) cyclic metaphosphate ring |
| (D) H₂SO₅ (Caro’s acid); | (S) one O–O peroxide linkage |
| (E) H₂S₂O₈ | (T) H₂S₂O₈ (Marshall’s acid); one O–O peroxide linkage |

Q25. Match each reaction with the principal product(s) formed.

| Column I                   | Column II        |
|----------------------------|------------------|
| (A) Ca(HCO₃)₂ on boiling | (P) CaCO₃(s)   |
| (B) Mg(HCO₃)₂ on boiling | (Q) Mg(OH)₂(s) |
| (C) CaH₂ + H₂O           | (R) H₂(g)      |
| (D) Na₂O₂ + H₂O (cold)   | (S) H₂O₂(aq)   |
| —                          | (T) CO₂(g)     |

Q26. VOLUME STRENGTH — the only volume-strength problem in this
assignment. Match Column I with the equivalent concentration parameter
in Column II. Use V = 11.2 M for H₂O₂ at STP and n-factor = 2 for its
redox normality.

| Column I                | Column II                   |
|-------------------------|-----------------------------|
| (I) 10-volume H₂O₂    | (P) 5.358 N               |
| (II) 20-volume H₂O₂   | (Q) 3.036% (w/v)          |
| (III) 30-volume H₂O₂  | (R) 3.4 g H₂O₂ per 100 mL |
| (IV) 11.2-volume H₂O₂ | (S) 1.785 M               |

**SECTION D — INTEGER / NUMERICAL**

------------------------------------------------------------------------

Q27. For the 15 reactions below, let X = number in which H₂O₂ acts as a
REDUCING agent and Y = number in which it acts as an OXIDISING agent.
Find 10X + Y.

(1) 2Fe²⁺ + H₂O₂ + 2H⁺ → 2Fe³⁺ + 2H₂O

(2) 2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O

(3) PbS + 4H₂O₂ → PbSO₄ + 4H₂O

(4) Cl₂ + H₂O₂ → 2HCl + O₂

(5) Ag₂O + H₂O₂ → 2Ag + H₂O + O₂

(6) SO₃²⁻ + H₂O₂ → SO₄²⁻ + H₂O

(7) O₃ + H₂O₂ → 2O₂ + H₂O

(8) I₂ + H₂O₂ + 2OH⁻ → 2I⁻ + 2H₂O + O₂

(9) Mn²⁺ + H₂O₂ + 2OH⁻ → MnO₂ + 2H₂O

(10) HOCl + H₂O₂ → HCl + H₂O + O₂

(11) 2[Fe(CN)₆]³⁻ + H₂O₂ + 2OH⁻ → 2[Fe(CN)₆]⁴⁻ + 2H₂O + O₂

(12) 2[Fe(CN)₆]⁴⁻ + H₂O₂ + 2H⁺ → 2[Fe(CN)₆]³⁻ + 2H₂O

(13) H₂S + H₂O₂ → S + 2H₂O

(14) 2I⁻ + H₂O₂ + 2H⁺ → I₂ + 2H₂O

(15) 2Ce⁴⁺ + H₂O₂ → 2Ce³⁺ + O₂ + 2H⁺

*Answer: ____________________*

Q28. In how many of the following reactions/processes is O₂ evolved as a
product?

(1) H₂O₂ + acidified MnO₄⁻

(2) H₂O₂ + Cl₂

(3) H₂O₂ + Ag₂O

(4) H₂O₂ + PbS

(5) H₂O₂ + Fe²⁺/H⁺

(6) H₂O₂ + SO₃²⁻

(7) H₂O₂ + O₃

(8) H₂O₂ + Ce⁴⁺

(9) H₂O₂ + [Fe(CN)₆]³⁻/OH⁻

(10) 2H₂O₂ → 2H₂O + O₂

(11) H₂O₂ + HOCl

(12) H₂O₂ + Mn²⁺/OH⁻

*Answer: ____________________*

Q29. How many of the following comparison orders (D₂O vs H₂O) are
CORRECT?

(1) Melting point: D₂O > H₂O

(2) Boiling point: D₂O > H₂O

(3) Density at 25 °C: D₂O > H₂O

(4) Viscosity at 25 °C: H₂O > D₂O

(5) Enthalpy of vaporisation: D₂O > H₂O

(6) Dielectric constant at 25 °C: H₂O > D₂O

(7) Molar mass: D₂O > H₂O

(8) O–D bond dissociation enthalpy: O–D > O–H

(9) Boiling point: H₂O > D₂O

(10) Melting point: H₂O > D₂O

*Answer: ____________________*

Q30. How many of the following orders are CORRECT?

(1) O–O bond length in H₂O₂: gas > solid

(2) O–H bond length in H₂O₂: gas > solid

(3) H–O–O angle in H₂O₂: gas < solid

(4) H–O–O–H dihedral angle in H₂O₂: gas > solid

(5) Boiling point: H₂O₂ > D₂O > H₂O

(6) Viscosity near room temperature: H₂O₂ > D₂O > H₂O

(7) Dielectric constant near room temperature: H₂O₂ > H₂O > D₂O

(8) Density near room temperature: H₂O₂ > D₂O > H₂O

(9) Melting point: H₂O₂ > D₂O > H₂O

(10) Bond dissociation enthalpy: O–D > O–H

*Answer: ____________________*

Q31. How many of the following routes can produce H₂O₂, either directly
or after the explicitly stated hydrolysis step?

(1) Na₂O₂ + cold dilute H₂SO₄

(2) BaO₂·8H₂O + H₃PO₄ (cold)

(3) Oxidation of 2-ethylanthraquinol by O₂

(4) Reduction of 2-ethylanthraquinone only (no air/O₂ step)

(5) Electrolysis of concentrated H₂SO₄ → H₂S₂O₈, then hydrolysis

(6) 2KO₂ + 2H₂O (ice-cold, dilute) → H₂O₂ + O₂ + 2KOH

(7) Na₂O + H₂O

(8) BaO₂ + cold dilute H₂SO₄

(9) Hydrolysis of H₂S₂O₈

(10) Direct mixing of O₂ and H₂O at room temperature

*Answer: ____________________*

Q32. How many of the following reactions are correctly and completely
written?

(1) Na₂O + H₂O → 2NaOH

(2) Na₂O₂ + 2H₂O → 2NaOH + H₂O₂

(3) 4KO₂ + 2H₂O → 4KOH + 3O₂

(4) CaH₂ + 2H₂O → Ca(OH)₂ + 2H₂

(5) CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂

(6) Al₄C₃ + 12H₂O → 3CH₄ + 4Al(OH)₃

(7) Mg₃N₂ + 6H₂O → 2NH₃ + 3Mg(OH)₂

(8) SiCl₄ + 2H₂O → SiO₂ + 4HCl

(9) SO₃ + H₂O → H₂SO₄

(10) P₄O₁₀ + 6H₂O → 4H₃PO₄

(11) 3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂

(12) Cu + H₂O(g) → CuO + H₂ [ordinary steam conditions]

*Answer: ____________________*

Q33. How many of the following compounds contain at least one hydrogen
that exchanges readily with D₂O at room temperature without added strong
base/catalyst?

(1) CH₃OH

(2) C₆H₅OH

(3) CH₃COOH

(4) C₆H₅NH₂

(5) CH₃CONH₂

(6) NH₃

(7) CH₄

(8) C₆H₆

(9) CH₂=CH₂

(10) HC≡CH

*Answer: ____________________*

Q34. How many of the following reactions with water give an acidic
solution as the principal acid–base outcome?

(1) SO₂ + H₂O → H₂SO₃

(2) SO₃ + H₂O → H₂SO₄

(3) 2NO₂ + H₂O → HNO₂ + HNO₃

(4) Cl₂ + H₂O ⇌ HCl + HOCl

(5) PCl₅ + 4H₂O → H₃PO₄ + 5HCl

(6) CO₂ + H₂O ⇌ H₂CO₃

(7) Na₂O + H₂O → 2NaOH

(8) CaO + H₂O → Ca(OH)₂

(9) CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂

(10) Mg₃N₂ + 6H₂O → 2NH₃ + 3Mg(OH)₂

*Answer: ____________________*

Q35. Balance the basic-medium half-reaction xCr³⁺ + yH₂O₂ + mOH⁻ →
zCrO₄²⁻ + nH₂O using the smallest whole-number coefficients. Find x +
y + m + z + n.

*Answer: ____________________*

Q36. In an H₂–O₂ fuel cell, how many moles of electrons pass through the
external circuit per mole of H₂O formed?

*Answer: ____________________*

Q37. In how many of the following reactions does the oxidation state of
oxygen change?

(1) 2H₂O₂ → 2H₂O + O₂

(2) H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O

(3) H₂O₂ + Cl₂ → 2HCl + O₂

(4) Na₂O₂ + H₂SO₄ → Na₂SO₄ + H₂O₂

(5) H₂O₂ + Ca(OH)₂ → CaO₂ + 2H₂O

(6) H₂O₂ + SO₂ → H₂SO₄

(7) H₂O₂ + Ag₂O → 2Ag + H₂O + O₂

(8) PbS + 4H₂O₂ → PbSO₄ + 4H₂O

(9) BaO₂ + H₂SO₄ → BaSO₄ + H₂O₂

(10) 2KO₂ + 2H₂O → 2KOH + H₂O₂ + O₂

*Answer: ____________________*

**SECTION E — NCERT MASTER STATEMENT ANALYSIS**

------------------------------------------------------------------------

Q38. How many of the following 10 statements regarding STRUCTURE AND
PHYSICAL BEHAVIOUR OF WATER are correct?

(1) The H₂O molecule is angular/bent.

(2) The H–O–H angle in the free molecule is about 104.5°.

(3) The O–H bond length in gaseous water is about 95.7 pm.

(4) Extensive intermolecular hydrogen bonding is present in liquid
water.

(5) Common hexagonal ice has an open H-bonded arrangement with
approximately tetrahedral oxygen environment.

(6) Ice at its melting point is denser than liquid water at the same
temperature.

(7) Water attains maximum density near 4 °C.

(8) Hydrogen bonding contributes to the unusually high boiling point
of water.

(9) The isolated H₂O molecule is linear.

(10) The high dielectric constant of water favours ionisation and
solvation of many ionic substances.

*Answer: ____________________*

Q39. How many of the following 10 statements regarding CHEMICAL
BEHAVIOUR OF WATER are correct?

(1) Water is amphoteric: it can donate or accept a proton.

(2) With NH₃, water acts as a proton donor (acid).

(3) With H₂S, water can act as a proton acceptor (base).

(4) Reactive metals such as Na liberate H₂ from cold water.

(5) Steam oxidises iron to Fe₃O₄ with liberation of H₂.

(6) Fluorine oxidises water with formation of O₂ and HF.

(7) Copper reacts readily with cold water to liberate H₂.

(8) Hydrides, carbides and nitrides can undergo hydrolysis with water.

(9) Salt hydrolysis is an acid–base interaction involving water.

(10) Water can act only as an oxidising agent and never as a reducing
agent.

*Answer: ____________________*

Q40. How many of the following 10 statements regarding HARD AND SOFT
WATER are correct?

(1) Hardness is principally associated with dissolved Ca²⁺ and Mg²⁺
salts.

(2) Bicarbonates of Ca²⁺/Mg²⁺ produce temporary hardness.

(3) Chlorides and sulphates of Ca²⁺/Mg²⁺ commonly produce permanent
hardness.

(4) Temporary hardness can be reduced by boiling.

(5) Clark’s method employs calculated Ca(OH)₂ to remove temporary
hardness.

(6) Washing soda can remove permanent hardness by precipitation of
hardness-causing cations.

(7) Zeolite/permutit softening involves exchange of Na⁺ for Ca²⁺/Mg²⁺.

(8) Calgon acts principally by precipitating CaCO₃ from hard water.

(9) Successive cation- and anion-exchange resins can give essentially
demineralised water.

(10) Soft water must contain absolutely no dissolved ions of any kind.

*Answer: ____________________*

Q41. How many of the following 10 statements regarding HEAVY WATER (D₂O)
are correct?

(1) Heavy water is deuterium oxide, D₂O.

(2) It can be enriched/obtained by prolonged electrolysis of ordinary
water.

(3) It is used as a neutron moderator in suitable reactors because it
absorbs neutrons much less readily than ordinary hydrogen.

(4) It is useful in isotope-exchange studies of reaction mechanisms.

(5) Many reactions involving D₂O are slower than analogous H₂O
reactions due to kinetic isotope effects.

(6) Its boiling point is about 101.4 °C, higher than that of H₂O.

(7) Its density near room temperature is higher than that of H₂O.

(8) Its viscosity is higher than that of H₂O.

(9) Its dielectric constant at 25 °C is higher than that of H₂O.

(10) CaC₂ + 2D₂O gives C₂D₂ and Ca(OD)₂.

*Answer: ____________________*

Q42. How many of the following 10 statements regarding PREPARATION,
CONSTITUTION AND STABILITY OF H₂O₂ are correct?

(1) Pure H₂O₂ is very pale blue.

(2) Oxygen has oxidation state −1 in H₂O₂.

(3) H₂O₂ contains an O–O single bond.

(4) Acidification of a suitable metal peroxide such as BaO₂ can
produce H₂O₂.

(5) The 2-ethylanthraquinol/2-ethylanthraquinone cycle is used
industrially for H₂O₂ manufacture.

(6) Electrolysis of concentrated H₂SO₄ at Pt electrodes can furnish
H₂S₂O₈, which yields H₂O₂ on hydrolysis.

(7) 2-Ethylanthraquinone gives H₂O₂ merely on contact with water,
without any redox cycle.

(8) Light and traces of transition-metal ions accelerate H₂O₂
decomposition.

(9) Concentrated H₂O₂ is best stored exposed to sunlight in ordinary
metal containers.

(10) H₂O₂ is a stronger Brønsted acid than H₂O.

*Answer: ____________________*

Q43. How many of the following 10 statements regarding CHEMICAL
PROPERTIES AND USES OF H₂O₂ are correct?

(1) 2H₂O₂ → 2H₂O + O₂ is a disproportionation/decomposition reaction.

(2) H₂O₂ can behave as both oxidising and reducing agent.

(3) H₂O₂ oxidises Fe²⁺ to Fe³⁺ in acidic medium.

(4) Acidified KMnO₄ is reduced by H₂O₂ with evolution of O₂.

(5) H₂O₂ converts black PbS to white PbSO₄.

(6) H₂O₂ can reduce Cl₂ to Cl⁻ while itself forming O₂.

(7) H₂O₂ is used in pollution-control/oxidative treatment of
effluents.

(8) H₂O₂ is used for bleaching delicate materials such as wool and
silk.

(9) H₂O₂ can never act as a reducing agent because oxygen already has
a negative oxidation state.

(10) Dilute H₂O₂ has antiseptic/cleansing uses.

*Answer: ____________________*

Q44. How many of the following 10 statements regarding HYDROGEN AS FUEL,
SYNGAS AND HYDROGEN ECONOMY are correct?

(1) CO + H₂ mixtures are commonly called water gas/synthesis gas in
this context.

(2) CO + H₂O(g) → CO₂ + H₂ is the water-gas shift reaction.

(3) The water-gas shift reaction can increase the yield of H₂ from
water gas.

(4) CO + 2H₂ → CH₃OH is an important synthesis-gas reaction.

(5) Hydrogen has high energy content per unit mass.

(6) Combustion of pure H₂ gives water as the chemical product at the
point of use.

(7) Liquid H₂ has been used as rocket fuel.

(8) The classical H₂–O₂ fuel-cell comparison in NCERT quotes about 70%
electrical efficiency versus about 40% for thermal plants.

(9) H₂–O₂ fuel cells have water as the principal overall reaction
product.

(10) Hydrogen made by conventional methane steam reforming without
renewable feed or carbon capture is, by definition, green hydrogen.

*Answer: ____________________*

Q45. NCERT + JEE MASTER REACTION GRID. For the 44 reactions below: X =
number that PRODUCE H₂; Y = number that PRODUCE O₂; Z = number in which
H₂O₂ appears as a reactant or product. Find X + Y + Z.

| (1) 2Na + 2H₂O → 2NaOH + H₂ | (23) R′OH + Cl⁻ → R′Cl + OH⁻ |
|----|----|
| (2) Ca + 2H₂O → Ca(OH)₂ + H₂ | (24) CaC₂ + 2D₂O → C₂D₂ + Ca(OD)₂ |
| (3) Mg + H₂O(g) → MgO + H₂ | (25) Al₄C₃ + 12D₂O → 3CD₄ + 4Al(OD)₃ |
| (4) 3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂ | (26) Mg₃N₂ + 6D₂O → 2ND₃ + 3Mg(OD)₂ |
| (5) 2F₂ + 2H₂O → 4HF + O₂ | (27) SO₃ + D₂O → D₂SO₄ |
| (6) Na₂O + H₂O → 2NaOH | (28) Na₂O₂ + H₂SO₄(cold,dil.) → Na₂SO₄ + H₂O₂ |
| (7) P₄O₁₀ + 6H₂O → 4H₃PO₄ | (29) BaO₂ + H₂SO₄(cold,dil.) → BaSO₄ + H₂O₂ |
| (8) SO₃ + H₂O → H₂SO₄ | (30) H₂S₂O₈ + 2H₂O → 2H₂SO₄ + H₂O₂ |
| (9) CaH₂ + 2H₂O → Ca(OH)₂ + 2H₂ | (31) 2-Ethylanthraquinol + O₂ → 2-Ethylanthraquinone + H₂O₂ |
| (10) CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂ | (32) 2H₂O₂ → 2H₂O + O₂ |
| (11) Al₄C₃ + 12H₂O → 3CH₄ + 4Al(OH)₃ | (33) 2Fe²⁺ + H₂O₂ + 2H⁺ → 2Fe³⁺ + 2H₂O |
| (12) Mg₃N₂ + 6H₂O → 2NH₃ + 3Mg(OH)₂ | (34) PbS + 4H₂O₂ → PbSO₄ + 4H₂O |
| (13) SiCl₄ + 2H₂O → SiO₂ + 4HCl | (35) 2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O |
| (14) Ca(HCO₃)₂ →Δ CaCO₃ + CO₂ + H₂O | (36) HOCl + H₂O₂ → H₃O⁺ + Cl⁻ + O₂ |
| (15) Mg(HCO₃)₂ →Δ Mg(OH)₂ + 2CO₂ | (37) I₂ + H₂O₂ + 2OH⁻ → 2I⁻ + 2H₂O + O₂ |
| (16) Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃ + 2H₂O | (38) 2[Fe(CN)₆]³⁻ + H₂O₂ + 2OH⁻ → 2[Fe(CN)₆]⁴⁻ + 2H₂O + O₂ |
| (17) Mg(HCO₃)₂ + 2Ca(OH)₂ → Mg(OH)₂ + 2CaCO₃ + 2H₂O | (39) C + H₂O(g) → CO + H₂ |
| (18) CaSO₄ + Na₂CO₃ → CaCO₃ + Na₂SO₄ | (40) CO + H₂O(g) → CO₂ + H₂ |
| (19) MgCl₂ + Na₂CO₃ → MgCO₃ + 2NaCl | (41) CH₄ + H₂O(g) → CO + 3H₂ |
| (20) Na₂Z + Ca²⁺ → CaZ + 2Na⁺ (zeolite) | (42) CO + 2H₂ → CH₃OH |
| (21) CaZ + 2NaCl → Na₂Z + CaCl₂ (regeneration) | (43) N₂ + 3H₂ ⇌ 2NH₃ |
| (22) 2RH + Ca²⁺ → R₂Ca + 2H⁺ | (44) 2H₂ + O₂ → 2H₂O |

*Answer: ____________________*

**SECTION F — PYQ MIXED (ADAPTED / VERIFIED PATTERNS)**

------------------------------------------------------------------------

Q46. CrO₅ reacts with dilute H₂SO₄ to give Cr₂(SO₄)₃, H₂O and O₂. Answer
both parts:

(a) Magnitude of the average oxidation state of oxygen in CrO₅ =
____________________

(b) Moles of O₂ obtained from 1 mol CrO₅ =
____________________

Q47. In aqueous solution with pH < 7, H₂O₂ loses electrons in its
reaction with:

| A) FeSO₄ | B) KMnO₄         |
|-----------|-------------------|
| C) H₂S   | D) K₄[Fe(CN)₆] |

Q48. Which of the following statements regarding the redox properties of
H₂O₂ are correct?

| A) H₂O₂ is oxidised by O₃. | B) H₂O₂ reduces KMnO₄ to the same Mn oxidation state in acidic and basic media. |
|----|----|
| C) H₂O₂ can reduce Cl₂ to Cl⁻ and, separately, oxidise I⁻ to I₂. | D) H₂O₂ can undergo disproportionation. |

Q49. Match each H₂O₂ test/reaction with its characteristic
observation/product.

| Column I | Column II |
|----|----|
| (A) Ti(IV) sulphate + H₂O₂ (acidic) | (P) Yellow/orange peroxo-titanium complex |
| (B) KI + H₂O₂ (acidic) | (Q) I₂ formed; brown colour |
| (C) Acidified MnO₄⁻ + H₂O₂ | (R) MnO₄⁻ decolourised; O₂ evolved |
| (D) PbS + H₂O₂ | (S) Black PbS converted to white PbSO₄ |

Q50. Match each product (Column I) with the process(es) that produce it
(Column II).

| Column I | Column II |
|----|----|
| (A) D₂O | (P) Prolonged electrolysis/enrichment of ordinary water |
| (B) H₂O₂ | (Q) Electrolysis of concentrated H₂SO₄ followed by hydrolysis of H₂S₂O₈ |
| (C) H₂ + CO₂ (together) | (R) Water-gas shift reaction |
| (D) O₃ | (S) Auto-oxidation of 2-ethylanthraquinol |
| — | (T) Silent electric discharge through O₂ |

**ANSWER KEY**

| **Q** | **Answer**                 |
|-------|----------------------------|
| 1     | A (1,2,3,5)                |
| 2     | A (1,2,4,5,6)              |
| 3     | B (1,2,3,5)                |
| 4     | C (1,2,3,4)                |
| 5     | D (1,2,4,5,6)              |
| 6     | D (1,2,4,5)                |
| 7     | C (1,2,4,5)                |
| 8     | B (1,2,3,4)                |
| 9     | D (1,2,3,4)                |
| 10    | C (1,2,3,4)                |
| 11    | A,B,C,D                    |
| 12    | A,B,C,D                    |
| 13    | A,B,C                      |
| 14    | B,C,D                      |
| 15    | A,B,C,D                    |
| 16    | A,B,C,D                    |
| 17    | A,B,C,D                    |
| 18    | A,B,C,D                    |
| 19    | A,B,C,D                    |
| 20    | A,B,C,D                    |
| 21    | A→P,T; B→S; C→R; D→Q       |
| 22    | A→P,R; B→Q; C→Q,T; D→P,R,S |
| 23    | A→P; B→Q,T; C→P,R; D→P,S   |
| 24    | A→P; B→Q; C→R; D→S; E→T    |
| 25    | A→P,T; B→Q,T; C→R; D→S     |

`;
