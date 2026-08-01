export const formalChargeNotes = String.raw`


                                                Formal Charge
Foundation: Meaning and Formula of Formal Charge
    Formal charge is the charge assigned to an atom in a particular Lewis structure when every covalent bond is
treated as if the bonding electrons were shared equally between the two bonded atoms. It is not a direct measurement
of the real charge on that atom. Its main purpose is to compare alternative electron-bookkeeping descriptions.
                                                       FC = V - N - B/2
   Here, V is the number of valence electrons in the isolated atom, N is the number of nonbonding electrons on that
atom, and B is the total number of bonding electrons shared by that atom.
                              Equivalent shortcut: FC = V - L - number of bond lines
  In the shortcut, L is the number of electrons present in lone pairs. A single bond counts as one bond line, a double
bond as two, and a triple bond as three.

General Rules for Comparing Lewis Structures
    • The total number of valence electrons used must be correct.
    • Hydrogen must have a duet; second-period atoms such as C, N, O and F should normally have complete octets.
    • The magnitudes of formal charges should usually be as small as possible.
    • The number of formally charged atoms and the separation of opposite charges should usually be minimised.
    • Negative formal charge is generally more favourable on the more electronegative atom.
    • Positive formal charge is generally more acceptable on the less electronegative atom.
    • Equivalent resonance structures contribute equally; non-equivalent structures normally do not.
    • Formal-charge minimisation is important, but it never overrides an incorrect electron count or a forbidden octet
       expansion.
    Priority rule: For second-period atoms, a complete octet can be more important than obtaining zero formal charge.
    Carbon monoxide is the classic example.


Calculation Procedure and Octet-Based Electron-Sharing Shortcut
Stepwise procedure for calculating formal charge
Use the following sequence for every atom in a proposed Lewis structure. The final algebraic sum is an essential
consistency check.
    Step                                                           What to do
1            Count the normal valence electrons, V, of the isolated neutral atom.
2            Count all nonbonding electrons, N, present on that atom.
3            Count the total bonding electrons, B, around the atom, or count the total bond order.
4                                                            Use FC = V − N − ½B.
5            Repeat for every atom and verify that the algebraic sum equals the overall charge.
Decision table for comparing Lewis and resonance structures
                   Rule                                                               Meaning
Minimum formal-charge magnitude              Structures with charges closest to zero are generally favoured.
Minimum charge separation                    A structure with fewer separated positive and negative charges is usually more important.
Negative FC on more electronegative atom     Negative formal charge is normally favoured on the more electronegative atom.
Positive FC on less electronegative atom     This helps identify the more reasonable central atom or connectivity.
Avoid adjacent like charges                  Contributors with +/+ or −/− on adjacent atoms normally have low importance.
Same atomic positions in resonance           Resonance changes electron placement, not the arrangement of nuclei.




                   Rule                                                           Meaning
Same number of unpaired electrons        Every resonance form of a radical must preserve the unpaired-electron count.
Charge-sum rule                          The sum of formal charges must equal the overall molecular or ionic charge.

Octet-based electron-sharing shortcut
  For many closed-shell examples, let Nₜ be the total available valence electrons and Sₒ be the number of electrons
    required to complete all relevant octets.
  The quantity Sₒ − Nₜ gives the number of electrons that must be shared. Dividing by 2 gives the number of shared
    electron pairs, or the total bond-order units required.
  This shortcut is a rapid construction aid. It does not replace the formal-charge comparison of alternative structures.
                                     Number of shared pairs = (Sₒ − Nₜ)/2
Example: CO has Nₜ = 10 available electrons and Sₒ = 16 electrons required for two octets. Therefore, 16 − 10 = 6
electrons must be shared, corresponding to three shared pairs and a C≡O triple bond.

  Notation warning: In the formal-charge formula, N means nonbonding electrons. In the sharing shortcut above,
  Nₜ means total available electrons. Keep the two meanings separate.


Application 1 - Choosing the Most Stable Lewis Structure
Principle
   A molecule or ion may have several reasonable Lewis representations. Formal-charge calculation allows these
structures to be compared objectively. A representation with smaller formal charges, fewer charged atoms and less
separation of positive and negative charge usually contributes more strongly to the real electronic structure.

Example: OPCl₃
   The skeletal connectivity is O-PCl₃. Two classical representations are commonly compared: a charge-separated
single-bond form, O⁻-P⁺Cl₃, and a multiple-bond form, O=PCl₃.

Structure I: O⁻-P⁺Cl₃
   Phosphorus is singly bonded to oxygen and to three chlorine atoms. Phosphorus has five valence electrons, no
lone pair and four bond lines.
                                               FC(P) = 5 - 0 - 4 = +1
   Oxygen has three lone pairs and one single bond.
                                               FC(O) = 6 - 6 - 1 = -1
   Each chlorine has three lone pairs and one bond, so FC(Cl) = 7 - 6 - 1 = 0. The formal-charge sum is therefore
(+1) + (-1) + 3(0) = 0, which matches the neutral molecule. The structure is valid, but it contains charge separation.

Structure II: O=PCl₃
  Phosphorus now has one P=O double bond and three P-Cl single bonds, giving a total of five bond lines around
phosphorus.
                                                FC(P) = 5 - 0 - 5 = 0
   The double-bonded oxygen has two lone pairs and two bond lines.
                                                FC(O) = 6 - 4 - 2 = 0
   Each chlorine remains neutral. Thus all atoms have zero formal charge.

[STRUCTURE:opcl3-comparison]
                  Representation                           Formal charges                          Charge separation
      O⁻-P⁺Cl₃                                           P = +1, O = -1, Cl = 0                           Present

      O=PCl₃                                              P = 0, O = 0, Cl = 0                            Absent







Interpretation
   According to the classical formal-charge criterion, O=PCl₃ is the preferred Lewis representation because it
eliminates formal-charge separation. This gives a direct reason for preferring it rather than selecting a drawing
merely because it appears familiar or symmetrical.

 Modern bonding note: The real phosphoryl bond is not necessarily an ordinary localised double bond identical to
 C=O. It is strongly polar and is better described using a mixture of covalent, ionic and delocalised interactions. The
 Lewis forms O⁻-P⁺ and O=P are limiting descriptions.


 Significance: Formal charge supplies a numerical method for choosing between alternative Lewis structures, but the
 chosen structure must still have the correct electron count, permitted valence and experimentally reasonable
 connectivity.



Application 2 - Deciding the Atomic Arrangement or Central Atom
Principle
   Formal charge can determine not only where a multiple bond should be drawn, but also how the atoms should be
connected. The preferred topology usually avoids placing a large positive formal charge on a highly electronegative
atom and often places the less electronegative, more strongly bonding atom in the centre.

Example 1: N₂O - N-O-N versus N-N-O
  Nitrous oxide contains 16 valence electrons: 2(5) + 6 = 16. Two possible skeletons may initially be imagined, N-
O-N and N-N-O.

Possibility I: N=O=N
    To give all three atoms octets with oxygen in the centre, the structure N=O=N can be drawn. Each terminal
nitrogen has two lone pairs and one double bond.
                                         FC(terminal N) = 5 - 4 - 2 = -1
   The central oxygen has no lone pair and four bond lines.
                                         FC(central O) = 6 - 0 - 4 = +2
   The charge sum is (-1) + (+2) + (-1) = 0. Although the total is correct, the distribution is highly unfavourable
because oxygen, the most electronegative atom, carries a large +2 formal charge.

Possibility II: N≡N⁺-O⁻
    With the N-N-O skeleton, an important contributor is N≡N⁺-O⁻. The terminal nitrogen has FC = 0, the central
nitrogen has FC = +1, and oxygen has FC = -1. All atoms have octets, no charge has magnitude greater than one,
and the negative charge lies on oxygen.
                                 Preferred connectivity: N-N-O, not N-O-N
 Reason: The N-N-O topology gives smaller formal charges and places the negative charge on oxygen instead of
 forcing oxygen to carry +2.

[STRUCTURE:n2o-skeleton-comparison]



Example 2: Cyanate-type 16-electron species
   For cyanate, OCN⁻, the total number of valence electrons is 6 + 4 + 5 + 1 = 16. Placing carbon in the centre gives
the skeleton O-C-N and permits important contributors such as ⁻O-C≡N and O=C=N⁻. In both of these structures,
carbon has formal charge zero and a complete octet.
                        Contributor                           O                  C                  N




           ⁻O-C≡N                                             -1                  0                      0

           O=C=N⁻                                               0                 0                      -1


   Carbon is a particularly suitable central atom because it can form four bonds and maintain a neutral formal
charge. A highly electronegative atom placed centrally may be forced to form too many bonds and acquire an
unfavourable positive formal charge.

 Significance: Formal charge can determine the actual atomic skeleton of a molecule or ion, not merely the location of a
 double bond. Experimental structure remains the final authority, but formal charge is a powerful predictive tool.


Application 3 - Ranking Resonance Contributors
Principle
   Resonance structures are not automatically equally important. Equivalent contributors have the same energy and
contribute equally. Non-equivalent contributors usually have different energies, so the resonance hybrid resembles
the more stable contributors more strongly.

Main Ranking Criteria
 • Complete octets, especially for second-period atoms.
 • Smaller formal-charge magnitudes.
 • Fewer formally charged atoms and less charge separation.
 • Negative charge on a more electronegative atom.
 • Positive charge on a less electronegative atom.
 • No adjacent atoms carrying charges of the same sign.
 • A greater number of covalent bonds, provided octet requirements are not violated.

Example: N₂O
         Contributor             Terminal N         Central N           O                        Assessment
 N≡N⁺-O⁻                               0                +1              -1                Major; negative charge on O

                                                                                   Major; significant N-O multiple-bond
 ⁻N=N⁺=O                              -1                +1              0
                                                                                                 character

 N²⁻-N⁺≡O⁺                            -2                +1             +1             Very minor; severe charge separation



Contributor I: N≡N⁺-O⁻
   All atoms have octets, the charge magnitudes are only one, and the negative charge lies on oxygen. This
contributor is generally the most important individual Lewis form of N₂O.

Contributor II: ⁻N=N⁺=O
   This structure also gives complete octets and only ±1 charges. It is somewhat less favourable because the
negative formal charge is on nitrogen instead of oxygen, but it contributes significantly because it introduces N-O
double-bond character.

Contributor III: N²⁻-N⁺≡O⁺
   This contributor contains a -2 formal charge on terminal nitrogen, a +1 charge on oxygen and adjacent positive
charges on central nitrogen and oxygen. It therefore has large charge separation, unfavourable charge placement and
very high energy.
                        Approximate ranking: N≡N⁺-O⁻ > ⁻N=N⁺=O ≫ N²⁻-N⁺≡O⁺
 Common mistake: Only equivalent resonance structures contribute equally. The N₂O contributors are not equivalent
 because different elements carry the charges and the bond orders are distributed differently.






 Significance: Formal charge prevents the incorrect treatment of every canonical form as equally important and shows
 why the real resonance hybrid is weighted toward the lower-energy contributors.
Application 4 - Locating the Most Reasonable Position of Positive and Negative Charge

Principle
   After formal charges are calculated, electronegativity helps judge whether the charges are sensibly placed.
Negative formal charge is generally favoured on the more electronegative atom, while positive formal charge is
generally more acceptable on the less electronegative atom.

 Important qualification: Electronegativity is not the only criterion. Octet completion, charge magnitude, charge
 separation, atomic size and polarizability must also be considered.



Example 1: Cyanate ion, OCN⁻
            Contributor                 Formal-charge distribution                      Relative importance
 ⁻O-C≡N                                     O = -1, C = 0, N = 0                Very important; negative charge on O

 O=C=N⁻                                     O = 0, C = 0, N = -1              Important; complete octets and low charge

 O⁺≡C-N²⁻                                   O = +1, C = 0, N = -2                  Very minor; + on O and -2 on N


    The form ⁻O-C≡N is favoured by electronegativity because oxygen stabilises negative charge better than
nitrogen. The form O=C=N⁻ is also significant because all atoms have octets and no formal charge exceeds one. The
third form is highly unfavourable because it places positive charge on oxygen and a large -2 charge on nitrogen.
                                 Ranking: ⁻O-C≡N > O=C=N⁻ ≫ O⁺≡C-N²⁻

Example 2: Thiocyanate ion, SCN⁻
   Important contributors include ⁻S-C≡N and S=C=N⁻. Nitrogen is more electronegative than sulphur, so the form
with negative charge on nitrogen has favourable charge placement. However, sulphur is larger and much more
polarizable, so a negative charge can be distributed over its larger electron cloud. Consequently, the sulphur-
negative form is also important.
            Contributor            S            C             N                         Comment
  ⁻S-C≡N                           -1           0              0          Important; S can stabilise diffuse charge

                                                                     Important; negative charge on more electronegative
  S=C=N⁻                           0            0             -1
                                                                                             N

  S⁺≡C-N²⁻                        +1            0             -2            Minor; excessive charge magnitude


   The delocalisation between sulphur and nitrogen helps explain why thiocyanate is an ambident nucleophile and
can react through either terminal atom depending on the reagent and conditions.

 Exam rule: A structure with a single -1 charge on a slightly less electronegative atom can be more favourable than a
 structure with -2 on a more electronegative atom plus additional positive charge elsewhere.


 Significance: Formal charge combined with electronegativity indicates where formal electron density is most
 reasonably located in the important contributors.


Application 5 - Comparing the Stability of Isomeric Ions
Principle
   Two ions may contain the same atoms, the same total charge and the same total number of valence electrons, yet
differ in atomic connectivity. Formal-charge distribution can explain why one topology has a much more favourable
Lewis resonance system and is therefore generally more stable.



Cyanate versus fulminate
   Both cyanate and fulminate contain C, N and O, carry a -1 charge and have 16 valence electrons. Cyanate has the
skeleton O-C-N, whereas fulminate has the skeleton C-N-O.

Cyanate ion: OCN⁻
   The two major contributors, ⁻O-C≡N and O=C=N⁻, each contain only one nonzero formal charge. Carbon
remains neutral and has a complete octet, and the negative charge is delocalised between the two terminal
heteroatoms.
                       Cyanate contributor                           O             C                  N
           ⁻O-C≡N                                                    -1            0                  0

           O=C=N⁻                                                    0             0                  -1



Fulminate ion: CNO⁻
   With nitrogen in the centre, fulminate cannot avoid a strongly charge-separated description. Its best-known
contributors include the following.
        Fulminate contributor             C             N                 O                 Assessment
    ⁻C≡N⁺-O⁻                              -1           +1                 -1            Three atoms charged

    C²⁻=N⁺=O                              -2           +1                 0             Large -2 charge on C

    C³⁻-N⁺≡O⁺                             -3           +1                 +1      Extreme charge separation; + on O



Why cyanate is more stable
 • Cyanate has important forms with only one charged atom.
 • No major cyanate contributor contains a charge magnitude greater than one.
 • Carbon has a complete octet and formal charge zero.
 • Negative charge is delocalised over terminal electronegative atoms.
 • Fulminate requires strong charge separation and may place -2 or -3 on carbon and positive charge on oxygen.
  Lewis/formal-charge conclusion: cyanate is much more favourably stabilised than fulminate

[STRUCTURE:cyanate-fulminate-comparison]
 Explosive behaviour: Metal fulminates are sensitive explosives, but explosiveness cannot be predicted from formal
 charge alone. Bond strengths, decomposition pathways, activation energy, crystal packing and rapid gas formation also
 matter.


 Significance: Formal-charge analysis connects molecular connectivity with relative stability and helps explain why
 constitutional isomers with the same electron count may display radically different chemical behaviour.



Application 6 - Resonance Delocalisation and Fractional Average
Charge
Principle
   Formal charge belongs to an individual canonical structure. The actual species is a resonance hybrid. When
equivalent structures distribute a formal charge among equivalent atoms, the average formal-charge contribution on
each equivalent atom may be fractional.

 Meaning of a fractional value: A value such as -2/3 does not mean that an electron is physically divided into pieces. It
 represents delocalised electron density and the average of equivalent Lewis bookkeeping descriptions.





Example 1: Carbonate ion, CO₃²⁻
  Each of the three equivalent contributors contains one C=O bond and two C-O⁻ bonds. In one contributor, one
oxygen has formal charge zero and two oxygens have formal charge -1.
   Follow one labelled oxygen through all three contributors. It has formal charge zero in one structure and -1 in the
other two.
                 Average formal-charge contribution per O = [0 + (-1) + (-1)]/3 = -2/3
                               3(-2/3) = -2, matching the overall ionic charge
   All three oxygen atoms are therefore equivalent in the resonance hybrid even though a single Lewis structure
draws one oxygen differently from the other two.

Example 2: Sulphate ion, SO₄²⁻
  In the classical two-double-bond representation, each contributor contains two S=O bonds and two S-O⁻ bonds.
Any two of the four oxygens may be selected as the double-bonded pair, giving C(4,2) = 6 equivalent contributors.
   For any one oxygen, it is double bonded with formal charge zero in three of the six forms and singly bonded with
formal charge -1 in the remaining three.
                  Average formal-charge contribution per O = [3(0) + 3(-1)]/6 = -1/2
                                                    4(-1/2) = -2
   The classical resonance description therefore distributes the -2 formal charge equally over four equivalent oxygen
positions.

 Do not say: The double bonds keep moving from one oxygen to another. Resonance structures are not real, rapidly
 interconverting species; only the delocalised resonance hybrid exists.


 Significance: Equivalent atoms become indistinguishable in the resonance hybrid even when an individual Lewis
 contributor assigns them different formal charges.



Application 7 - Fractional Bond Order and Equivalent Bond
Lengths
Principle
   When equivalent resonance structures differ only in the location of multiple bonds, the multiple-bond character is
delocalised over the equivalent positions. The actual bonds become equivalent and have fractional average bond
order. Their lengths are intermediate between ideal single- and double-bond lengths.

Example 1: Carbonate ion
   Each contributor contains one C=O bond of order two and two C-O bonds of order one. The total formal bond
order distributed over the three C-O positions is four.
                           Average C-O bond order = (2 + 1 + 1)/3 = 4/3 ≈ 1.33
   For any specific C-O position, it is double in one contributor and single in two contributors, giving the same
value of 4/3. Therefore all three C-O bonds are equivalent.
   Greater bond order generally means more electron density between the nuclei, a stronger bond and a shorter
internuclear distance. Thus a carbonate C-O bond is shorter than a normal C-O single bond but longer than a typical
localised C=O double bond.
                    C-O single bond length > C-O in carbonate > C=O bond length
   A representative carbonate C-O distance is approximately 128-132 pm, depending on the specific compound and
environment. The decisive observation is that all three distances are approximately equal.




Example 2: Sulphur dioxide, SO₂
    In the two equivalent octet forms, O=S⁺-O⁻ and ⁻O-S⁺=O, each S-O position is double in one structure and single
in the other.
                     Average S-O bond order in the two-form model = (2 + 1)/2 = 1.5
   This accounts for equivalent S-O bonds with substantial multiple-bond character. A classical expanded-shell
form, O=S=O, also gives zero formal charges. Therefore 1.5 should be regarded as the bond order predicted by the
two-octet-form model, not as an exact quantum-mechanical bond order.

 Modern interpretation: The real S-O bonding is delocalised and polar. Molecular-orbital descriptions are more
 complete than a simple arithmetic average of Lewis structures.


 Significance: Formal charge identifies the important contributors; resonance averages their bond patterns; fractional
 bond order then explains equivalent bonds and intermediate experimental bond lengths.


Application 8 - Using Experimental Bond Lengths to Test
Resonance Ideas
Principle
   Lewis structures and formal charges generate a theoretical bonding model. Experimental bond lengths can then
test whether the model is chemically reasonable. A bond predicted to have partial multiple-bond character should
generally be shorter than an ordinary single bond.
  Propose contributors → rank by formal charge → predict bond character → compare with
                                       experiment

Example 1: N₂O
   The important contributors N≡N⁺-O⁻ and ⁻N=N⁺=O predict different distributions of bond order. The first gives
strong N-N triple-bond character and an N-O single bond; the second gives both an N=N and an N=O double bond.
     Observed bond                Length                                      Interpretation
                                                Very short; indicates high N-N bond order and strong contribution from N≡N⁺-
N-N in N₂O                       112.6 pm
                                                                                     O⁻
                                                Shorter than an ordinary N-O single bond; indicates significant N=O character
N-O in N₂O                       118.6 pm
                                                                               from ⁻N=N⁺=O


   No single Lewis structure explains both observations perfectly. The first contributor accounts well for the very
short N-N bond, whereas the second is required to explain the shortened N-O bond. The experimental molecule is
therefore consistent with a weighted resonance hybrid.

 Caution: Bond lengths support resonance models qualitatively, but they do not normally yield exact contributor
 percentages because length also depends on polarity, atomic charge, vibration, orbital overlap and molecular
 environment.



Example 2: C-O bond-length series
                Species or bond type             Approximate length                   Formal bond-order idea
    Typical C-O single bond                             143 pm                                     1

    C-O in CO₃²⁻                                      128-132 pm                                  4/3
    C=O in CO₂                                          116 pm                                     2

    C≡O in CO                                           112.8 pm                                   3





                          Length trend: C-O > C-O in carbonate > C=O > C≡O
   The trend supports the general rule that increasing bond order produces shorter bonds. These species do not have
identical environments, so the comparison is qualitative rather than a perfectly controlled experiment.

 Significance: Formal charge becomes part of a broader structure-analysis method: propose the important contributors,
 predict bond character, and test the prediction against experimental distances.



Application 9 - Interpreting Dipole Moment and Polarity
Principle
   Dipole moment measures the separation of positive and negative charge. It is a vector quantity, so different
charge-displacement effects may reinforce or oppose one another. Resonance forms may place negative formal
charge at different ends of a molecule, and their contributions influence the net dipole of the real resonance hybrid.
                                                     μ=q×r
   Here q represents the magnitude of charge separation and r the distance between the centres of positive and
negative charge.

Example: N₂O
  In N≡N⁺-O⁻, the negative formal charge lies on terminal oxygen, suggesting electron displacement towards the
oxygen end. In ⁻N=N⁺=O, the negative formal charge lies on terminal nitrogen, suggesting displacement in the
opposite direction.
           Contributor              Location of negative FC                      Polarity implication
 N≡N⁺-O⁻                                   Terminal O                   Electron displacement towards the O end

 ⁻N=N⁺=O                                   Terminal N               Electron displacement towards the terminal N end


   The experimentally observed dipole moment is very small, approximately 0.17 D. This indicates strong
cancellation between opposing electronic effects and supports the conclusion that both major contributors are
significant.

 Precision warning: A small dipole moment does not prove an exact 50:50 contribution. The net value also depends on
 bond dipoles, partial charges, distances and molecular-orbital electron density. The O-negative contributor is still
 favoured by electronegativity.


  Only the real resonance hybrid has a measurable dipole moment. The individual canonical structures are
bookkeeping devices and do not exist as separate molecules with independently measurable dipoles.

 Significance: Formal-charge distributions can be linked to an observable molecular property: polarity. Opposing
 resonance charge patterns help rationalise why a heteronuclear linear molecule may have a surprisingly small net
 dipole.


Application 10 - Supporting Expanded-Shell and Multiple-Bond
Lewis Descriptions
Principle
   For some third-period and heavier central atoms, an all-single-bond octet representation produces large formal
charges. Classical Lewis theory often introduces one or more multiple bonds to reduce formal-charge magnitude and
charge separation, producing an expanded-shell description.

 Restriction: Second-period atoms such as C, N, O and F cannot be given expanded octets in ordinary Lewis structures
 merely to reduce formal charge.




Example 1: SO₃
   In an all-single-bond form, sulphur has three single bonds and formal charge +3, while each oxygen has formal
charge -1. The sum is zero, but four atoms are charged.
                            All-single form: FC(S) = 6 - 0 - 3 = +3; each O = -1
   In the classical three-double-bond representation, sulphur has six bond lines and all atoms have formal charge
zero.
                           Three S=O bonds: FC(S) = 6 - 0 - 6 = 0; each O = 0

Example 2: SO₄²⁻
   The all-single-bond form gives S = +2 and four O atoms at -1. A common classical contributor with two S=O
bonds and two S-O⁻ bonds gives S = 0, two O atoms at 0 and two O atoms at -1. Six equivalent arrangements are
possible because any two of the four oxygens can carry the double bonds.

Example 3: SO₂Cl₂
  With four single bonds, sulphur has formal charge +2 and each oxygen has -1; chlorine atoms are neutral.
Drawing two S=O bonds produces zero formal charge on sulphur, both oxygens and both chlorines.

Example 4: XeO₃
   In the all-single-bond form, xenon has one lone pair, three single bonds and formal charge +3; each oxygen is -1.
In the classical three-double-bond form, xenon has one lone pair and six bond lines, so all formal charges become
zero.

Example 5: SO₃²⁻
   The all-single-bond form gives S = +1 and each oxygen = -1. A contributor with one S=O bond and two S-O⁻
bonds gives S = 0, the double-bonded oxygen = 0 and the two single-bonded oxygens = -1. Three equivalent
contributors exist.
         Species       All-single central-atom FC                 Classical reduced-charge representation
SO₃                              S = +3                                  Three S=O bonds; all FC = 0

SO₄²⁻                            S = +2                                 Two S=O and two S-O⁻ bonds

SO₂Cl₂                           S = +2                                  Two S=O bonds; all FC = 0

XeO₃                             Xe = +3                                Three Xe=O bonds; all FC = 0

SO₃²⁻                            S = +1                                 One S=O and two S-O⁻ bonds



Modern interpretation of hypervalent bonding
   Formal-charge minimisation explains why expanded-shell Lewis drawings are useful, but it does not prove that
every drawn S=O or Xe=O linkage is an ordinary localised double bond. Modern molecular-orbital descriptions
emphasise polar covalent bonding, ligand-to-central-atom donation, ionic contributions and delocalisation. The older
explanation based on extensive d-orbital participation is generally inadequate.

 Exam distinction: Classical Lewis treatment: draw multiple bonds to reduce formal charges. Modern treatment:
 recognise that the real bonding is polar and delocalised and need not correspond to ordinary localised double bonds.


 Significance: Formal-charge minimisation motivates expanded-shell and multiple-bond canonical descriptions and
 helps rationalise shortened, equivalent bonds in many oxo compounds.






Application 11 - Distinguishing Formal Charge, Oxidation State
and Actual Charge
Three Different Electron-Assignment Models
   Formal charge, oxidation state and actual charge answer different questions. They must never be used
interchangeably.
       Property                 Formal charge                      Oxidation state                    Actual or partial charge
How bonding electrons                                            Entirely to the more              From the real electron-density
                         Equally between bonded atoms
are assigned                                                     electronegative atom                      distribution

                                                             Usually integer; sometimes an
Typical numerical form          Usually integer                                                           Usually fractional
                                                                        average

Main use                 Lewis structures and resonance            Redox accounting                   Physical charge distribution

Depends on a Lewis                                                                                Depends on the chosen electron-
                                      Yes                          Much less directly
drawing                                                                                                  density analysis

Directly observable as                                                                                Inferred from experiment or
                                      No                                  No
written                                                                                                       computation



Example: [Al(H₂O)₆]³⁺
   Each water molecule donates one lone pair to form an Al-O coordinate bond. Once formed, a coordinate bond is
treated like any other covalent bond in formal-charge bookkeeping.

Formal charge on aluminium
    Aluminium has three valence electrons, no lone pair and six Al-O bond lines.
                                                  FC(Al) = 3 - 0 - 6 = -3
Formal charge on each coordinated oxygen
  Each coordinated water oxygen has one remaining lone pair, two O-H bonds and one O-Al bond, giving three
bond lines.
                                                  FC(O) = 6 - 2 - 3 = +1
                                   Total FC = (-3) + 6(+1) + 12(0 for H) = +3
Oxidation state of aluminium
    Water is a neutral ligand. If the oxidation state of aluminium is x, then x + 6(0) = +3.
                                              Oxidation state of Al = +3
     Quantity for Al                 Value                                                   Reason
Formal charge                          -3                    Equal sharing assigns one electron from each of six Al-O bonds to Al

Oxidation state                        +3                 All Al-O bonding electrons are assigned to the more electronegative O atoms

                              Positive but method-
Actual partial charge                                                Determined from the real electron-density distribution
                                   dependent


   The opposite signs of formal charge and oxidation state arise because the two methods assign bonding electrons
in completely different ways. The aluminium centre is not physically carrying a real charge of -3; formal charge is
only a Lewis bookkeeping result.

  Significance: This example proves that formal charge must not be interpreted as oxidation number or as the real
  electrostatic charge residing on an atom.






Application 12 - Checking Lewis Structures for Errors
Principle
   After drawing a Lewis structure, calculate the formal charge on every atom and add the values. The sum must
equal the overall charge of the molecule or ion.
                          Σ formal charges = overall molecular or ionic charge
  This is a rapid method for detecting missing electrons, incorrect lone pairs, wrong bond multiplicities or an
omitted ionic charge.

Example 1: NH₄⁺
   Nitrogen has four N-H single bonds and no lone pair.
                                             FC(N) = 5 - 0 - 4 = +1
   Each hydrogen has one bond and therefore formal charge zero.
                                          Total FC = (+1) + 4(0) = +1
   If a student writes NH₄ as a neutral species, the formal-charge sum immediately reveals that the positive ionic
charge has been omitted.

Example 2: CO
   Carbon monoxide has ten valence electrons. Its octet-satisfying Lewis structure is :C≡O:, with one lone pair on
each atom.
                                              FC(C) = 4 - 2 - 3 = -1
                                             FC(O) = 6 - 2 - 3 = +1
                                              Total FC = -1 + 1 = 0
   The charge placement appears unfavourable because carbon carries -1 and oxygen +1. Nevertheless, this structure
is preferred because it gives both second-period atoms complete octets. A zero-formal-charge C=O drawing leaves
carbon with only six electrons.

 High-value rule: For second-period atoms, complete octets may take priority over formal-charge minimisation. Correct
 formal-charge sum alone is necessary but not sufficient.



What the formal-charge sum can detect
 • A missing or incorrect overall ionic charge.
 • An omitted or extra lone pair.
 • An incorrect number of bond lines.
 • Use of the wrong total number of valence electrons.
 • A structure whose charge accounting is internally inconsistent.

Why the sum check is not sufficient by itself
   A structurally incorrect drawing may still have formal charges that add to the correct total. The student must also
verify electron count, octets, connectivity, charge placement and possible resonance contributors.
 1. Was the correct total number of valence electrons used?
 2. Does every hydrogen have a duet?
 3. Do second-period atoms have complete octets?
 4. Is the atomic skeleton chemically reasonable?
 5. Are formal charges and charge separation minimised?
 6. Are charges placed consistently with electronegativity?
 7. Have all important resonance structures been drawn?
 8. Is the species an odd-electron molecule, an incomplete-octet species or a permitted expanded-shell species?




       Significance: Formal-charge summation is a fast examination check, but it must be combined with electron-count and
       octet checks before a Lewis structure is accepted.


            Extended Worked Examples and Advanced Reference Tables
       This section consolidates the additional examples, comparison families and exam tables from the companion study
                        notes. It is designed for rapid revision after the detailed conceptual applications.

    A. Core Worked Examples
    Species               Representative structure                            Formal charges                                        Key point

 CO                                ⁻C≡O⁺                                C: 4−2−3 = −1; O: 6−2−3 = +1                  Net 0; triple bond; C–O ≈ 112.8 pm.

                                                                                                                   Two equivalent octet forms; average O FC
 SO₂                       O=S⁺−O⁻ ↔ ⁻O−S⁺=O                  S +1; double-bonded O 0; single-bonded O −1
                                                                                                                   = −1/2; S–O ≈ 143 pm.
                                                                                                                   17 valence e⁻; unpaired electron is
 NO₂                            O=N⁺(·)−O⁻                   N +1; double-bonded O 0; single-bonded O −1
                                                                                                                   preserved; angle ≈ 134°.
 NO₂⁻                       O=N−O⁻ ↔ ⁻O−N=O                   N 0; double-bonded O 0; single-bonded O −1              Two equivalent forms; angle ≈ 115°.
 NO₂⁺                            O=N⁺=O                                        N +1; each O 0                        Linear species; total formal charge +1.


    B. Major Resonance and Topology Examples
    The following table compresses the detailed N₂O, cyanate, thiocyanate and fulminate comparisons into an exam-
    ready ranking sheet.
         Species / form                     Structure                           Formal-charge values                                Importance

 N₂O wrong topology                         N=O=N                           terminal N −1 each; central O +2        Unfavourable: large +2 on electronegative O.

 N₂O I                                      ⁻N=N⁺=O                                    −1, +1, 0                                 Major contributor.

                                                                                                                    Major; generally the strongest individual
 N₂O II                                     N≡N⁺−O⁻                                    0, +1, −1
                                                                                                                    form.

 N₂O III                                   N²⁻−N⁺≡O⁺                                  −2, +1, +1                                     Negligible.

 Cyanate A                                  ⁻N=C=O                                  N −1; C 0; O 0                                   Important.

 Cyanate B                                  N≡C−O⁻                                  N 0; C 0; O −1                   Important; favourable negative charge on O.

 Cyanate C                                 N²⁻−C≡O⁺                                 N −2; C 0; O +1                                 Very minor.

 SCN⁻ A                                     S=C=N⁻                                  S 0; C 0; N −1                     Very important in the Lewis treatment.

 SCN⁻ B                                     ⁻S−C≡N                                  S −1; C 0; N 0                                   Significant.

 SCN⁻ C                                     S⁺≡C−N²⁻                                S +1; C 0; N −2                                    Minor.

 CNO⁻ A                                    C²⁻=N⁺=O                                 C −2; N +1; O 0                                Unfavourable.

 CNO⁻ B                            high charge-separated form                      C −3; N +1; O +1                              Very unfavourable.

 CNO⁻ C                                    ⁻C≡N⁺−O⁻                                C −1; N +1; O −1                 Best commonly shown fulminate contributor.


    C. Polyatomic Ions and Average Formal Charge
  Species / resonance family               Formal-charge pattern in one form                       Multiplicity                      Average result

                                                                                                                        Average O FC = −2/3; C–O bond order =
CO₃²⁻                                            C 0; one O 0; two O −1                       3 equivalent forms
                                                                                                                                        4/3.

NO₃⁻                                            N +1; one O 0; two O −1                       3 equivalent forms                  Average O FC = −2/3.

SO₄²⁻: four singles                                  S +2; four O −1                                  1 family                    Average O FC = −1.

SO₄²⁻: one double                               S +1; one O 0; three O −1                     4 equivalent forms                  Average O FC = −3/4.

SO₄²⁻: two doubles                               S 0; two O 0; two O −1                       6 equivalent forms                  Average O FC = −1/2.

SO₄²⁻: three doubles                            S −1; three O 0; one O −1                     4 equivalent forms                  Average O FC = −1/4.

SO₄²⁻: four doubles                                     S −2; all O 0                                 1 family                     Average O FC = 0.

        Interpretation: The table lists averages within each chosen Lewis-structure family. A lower average oxygen





        formal charge does not by itself prove that the corresponding family is the exact quantum-mechanical description;
        octet restrictions, charge placement and modern bonding considerations must also be applied.

      D. Important Acid and Oxoanion Examples
        Species                           Formal-charge comparison                                     Key conclusion / representative bond information

                                                                                                  Additional multiple-bond character progressively reduces
SO₃                 One S=O form: S +2, two O −1; two S=O form: S +1, one O −1.
                                                                                                  formal charge; S–O ≈ 143 pm.

                    All-single form: S +2 and two terminal O −1; two-S=O representation: all      Representative S–O lengths stated in the notes are ≈143 pm
H₂SO₄
                    FC 0.                                                                         and ≈154 pm.

                                                                                                  Net charge −1; representative distances ≈147 pm and ≈156
HSO₄⁻               All-single form: S +2; three terminal O −1; hydroxyl O 0.
                                                                                                  pm.

                                                                                                  A one-P=O representation lowers the formal charge on
PO₄³⁻                                   All-single form: P +1; each O −1.
                                                                                                  phosphorus.

                                                                                                  Multiple-bond forms progressively reduce positive FC on
ClO₄⁻               All single: Cl +3; one Cl=O gives +2; two Cl=O give +1.
                                                                                                  chlorine.

H₃PO₄               All-single form: P +1 and terminal O −1; P=O representation: all FC 0.              Representative P–O ≈152 pm and P–OH ≈157 pm.

H₃PO₃                                HP(=O)(OH)₂; all formal charges zero.                              Representative P–O ≈147 pm and P–OH ≈154 pm.


      E. Additional Formal-Charge Examples
          Species                           Formal charge(s)                                                        Key point

                                                                                      A charge-separated B=F contributor gives B −1 and double-bonded F
BF₃                                           B 0; each F 0
                                                                                      +1.
                          Lower-charge form: central S 0, terminal S 0, two
S₂O₃²⁻                                                                                An alternative S–S single-bond form has greater charge separation.
                          O −1

NH₄⁺                                             N +1; H 0                                                            Net +1.

PH₄⁺                                             P +1; H 0                                                            Net +1.
PH₃                                               P 0; H 0                                                           All FC 0.

SF₄                                                S 0; F 0                                                          All FC 0.
H₂N−OH                                        N 0; O 0; H 0                                                          All FC 0.
O⁻←P⁺Cl₃                                     P +1; O −1; Cl 0                                         Charge-separated OPCl₃ representation.

O=PCl₃                                            All FC 0                                          Lower-formal-charge OPCl₃ representation.

      Additional examples - continued
          Species                           Formal charge(s)                                                        Key point

:B≡F:                                            B −2; F +2                           Highly unfavourable formal-charge distribution.
[Al(H₂O)₆]³⁺                          Al −3; each coordinated O +1                    Demonstrates that formal charge is not oxidation state.
CO₂                                           C 0; each O 0                                                       C=O ≈116 pm.

HNCS                                     All FC 0 in H−N=C=S                          Protonated thiocyanate connectivity included in the supplied notes.

HNCO                                     All FC 0 in H−N=C=O                          Major protonated cyanate connectivity included in the supplied notes.
HOCN                                     All FC 0 in H−O−C≡N                                           Alternative protonated connectivity.
S₂O₄²⁻                    Net −2 mainly on terminal O in reasonable forms                                 S–S ≈239 pm; very long bond.
                          Reasonable forms keep S FC small; net −2 on
S₂O₆²⁻                                                                                                     S–S ≈215 pm; S–O ≈143 pm.
                          terminal O


      F. Expanded-Shell and Multiple-Bond Comparison Sheet
                                                                                                                            Classical electron count around
        Species            Octet-form formal charges                            Lower-FC representation
                                                                                                                                         centre

SNF₃                                S +2; N −2                                  Expanded form: S 0; N 0                              12 e⁻ around S.

SO₂Cl₂                           S +2; each O −1                                Two S=O bonds: S 0; O 0                              12 e⁻ around S.





                                                                                                                      Classical electron count around
        Species               Octet-form formal charges                       Lower-FC representation
                                                                                                                                   centre

XeO₃                               Xe +3; each O −1                         Three Xe=O bonds: Xe 0; O 0                      14 e⁻ around Xe.

SO₄²⁻                              S +2; each O −1                       Two-double-bond family: S 0; O 0/−1                  12 e⁻ around S.

SO₃²⁻                              S +1; each O −1                       One-double-bond family: S 0; O 0/−1                  10 e⁻ around S.

        Modern caution: These electron counts belong to the classical expanded-shell Lewis description. They should
        not be read as proof of ordinary localised double bonds or extensive d-orbital hybridisation.

   G. Bond-Order Practice Examples
    Species                      Useful Lewis representation                          Formal charges                         Predicted result

                                                                                                                    P–O formal bond order 2; each P–F
POF₃                                       O=P(F)₃                                        All FC 0
                                                                                                                    bond order 1.

                                                                                                                    S–O formal bond order 2; each S–F
SOF₄                                       O=S(F)₄                                        All FC 0
                                                                                                                    bond order 1.

                      Two S=O plus one S–O⁻, distributed among                                                      Average S–O bond order = 5/3; S–
SO₃F⁻                                                                            S 0; two O 0; one O −1; F 0
                      three O atoms                                                                                 F bond order = 1.


   H. Rapid Exam Strategy
        1. Draw all plausible Lewis structures or atomic skeletons.
        2. Calculate FC = V − N − ½B for every relevant atom.
        3. Check that ΣFC equals the overall charge.
        4. Prefer smaller formal charges and minimum charge separation.
        5. Prefer negative formal charge on the more electronegative atom when other factors are comparable.
        6. Avoid adjacent like charges and a large positive charge on an electronegative atom.
        7. In resonance, keep atom positions and the number of unpaired electrons unchanged.
        8. Use bond lengths, dipole moment and known stability when experimental evidence is supplied.
        9. Never confuse formal charge with oxidation number or actual charge.
        Core idea: Formal charge is not merely a calculation. It is a decision-making tool for Lewis structures,
        resonance, topology, charge placement, bond order and comparison with experiment.


   Integrated Examination Workflow
          The following sequence combines all twelve applications into one reliable problem-solving method.
                     Step                                                                   Action
                                            Add the valence electrons of all atoms; add electrons for negative charge and subtract for positive
        1. Count electrons
                                                                                         charge.

                                               Usually place the least electronegative, most strongly bonding atom centrally. Hydrogen and
        2. Choose a skeleton
                                                                               fluorine are normally terminal.

        3. Add single bonds                                  Connect the atoms using single bonds and subtract the used electrons.

        4. Complete terminal octets                   Complete the outer atoms first, except hydrogen, which requires only two electrons.

        5. Place remaining electrons                                   Put any remaining electrons on the central atom.

        6. Create multiple bonds if
                                             Convert terminal lone pairs into bonding pairs when a central second-period atom lacks an octet.
        needed

        7. Calculate formal charges                              Use FC = V - nonbonding electrons - number of bond lines.

        8. Verify the charge sum                                    The formal-charge sum must equal the overall charge.

        9. Compare alternative
                                             Prefer complete octets, smaller charges, less charge separation and favourable charge placement.
        structures

        10. Draw resonance                     Move only electrons, never atomic nuclei. Rank equivalent and non-equivalent contributors
        contributors                                                                  correctly.



11. Predict properties             Infer fractional bond order, equivalent bond lengths, polarity and charge delocalisation.

                                Use experimental bond lengths, geometry and dipole moment to assess whether the proposed
12. Test against evidence
                                                                  model is consistent.




Final Integrated Understanding
       Level of application                                  What formal charge helps determine
Structural                                               Central atom, connectivity and bond multiplicity
Resonance                                     Relative importance of contributors and equivalence of canonical forms

Charge distribution                                Reasonable locations of positive and negative formal charge

Delocalisation                                          Fractional average charge and fractional bond order
Experimental interpretation                      Equivalent bond lengths, shortened bonds and molecular polarity

Classical hypervalency                        Why expanded-shell multiple-bond drawings reduce charge separation

Error checking                                   Whether electron and charge bookkeeping is internally consistent


Central conclusion: Formal charge is an electron-bookkeeping device for Lewis structures. It is extremely useful for
choosing, ranking and checking structures, but it is not the actual charge on an atom and must always be combined with
octet rules, electronegativity, resonance and experimental evidence.



Ultra-Short Revision Rules
• First satisfy the correct electron count and permitted octets.
• Then minimise formal-charge magnitude and charge separation.
• Place negative charge on the more electronegative atom when other factors are comparable.
• Equivalent resonance contributors contribute equally; non-equivalent contributors do not.
• Fractional bond order and average formal charge are resonance-model averages, not divided electrons.
• The sum of all formal charges must equal the total charge of the species.
• Formal charge is not oxidation state and is not actual partial charge.






`;
