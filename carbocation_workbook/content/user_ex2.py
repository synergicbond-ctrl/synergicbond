from .common import *
from .lg import S

D3 = "[2H]C([2H])[2H]"


def build(B):
    B.part("Part 5A", "Worked Solutions: the Supplied ‘Exercise 2 – Carbocation Stability Order’ (redrawn)")
    B.p("These are the stability-order problems you supplied (Exercise 2, Q1–Q35, and two multiple-choice questions). The structures are <b>redrawn here from the images</b> and the reasoning is new. "
        "Each answer is the order of <b>decreasing</b> stability, using the standard JEE-Advanced conventions: stability rises with substitution, resonance donors (+M), hyperconjugation (number and quality of C–H/C–C bonds in the correct position), "
        "aromaticity; falls with −I/−M groups, antiaromaticity and bridgehead (non-planar) geometry. For isotopes: C–H hyperconjugation &gt; C–D &gt; C–T when the isotopic group is on the carbon <i>next to</i> the cationic centre, "
        "but only the +I order (T &gt; D &gt; H) operates when the group is further away. Items I could not read with certainty (Q4, Q18, Q19, Q22, Q33, Q34) are listed at the end for you to confirm.")
    qs = []

    def add(n, pairs, order, why):
        qs.append(Q(f"E2-{n}", f"Arrange 1–{len(pairs)} in decreasing stability.", S([(str(i + 1), s) for i, s in enumerate(pairs)]), order, why))

    add(1, ["[CH2+]CCC", "CC[CH+]CC", "CC[C+](C)C"], "3 &gt; 2 &gt; 1",
        "Tertiary &gt; secondary &gt; primary: the number of alkyl groups on the cationic carbon (hyperconjugation and +I).")
    add(2, ["CC[C+](C)C", "[CH2+]C(C)CC", "CC(C)[CH+]C"], "1 &gt; 3 &gt; 2",
        "1 is tertiary, 3 secondary, 2 primary (the 2-methylbutyl cation would rearrange, but as drawn it is primary).")
    add(3, ["C[C+]1CCCCC1", "CC1CCCC[CH+]1", "CC1CCC[CH+]C1"], "1 &gt; 2 &gt; 3",
        "1 is tertiary. 2 and 3 are secondary; the methyl group is adjacent to the cationic carbon in 2 (its C–H and C–C bonds hyperconjugate/β-branching), but only γ in 3 (+I only).")
    add(5, ["CC(C)[C+]1CCCCC1", "CC1(C)CCCC[CH+]1", "CC1CCC[CH+]C1"], "1 &gt; 2 &gt; 3",
        "1 is tertiary. 2 and 3 are secondary; 2 has the more alkyl-branched neighbourhood (a quaternary carbon next to C<sup>+</sup>), 3 only a remote methyl.")
    add(6, ["CC(C)(C)[C+]1CCCCC1", "[2H]C([2H])([2H])C(C([2H])([2H])[2H])(C([2H])([2H])[2H])[C+]1CCCCC1", "[3H]C([3H])([3H])C(C([3H])([3H])[3H])(C([3H])([3H])[3H])[C+]1CCCCC1"], "3 &gt; 2 &gt; 1",
        "The labelled methyl groups are on the carbon <i>next to</i> the quaternary carbon, i.e. γ to C<sup>+</sup>: no C–H/C–D/C–T bond is hyperconjugating. Only the inductive effect operates, and D and T are slightly more electron-releasing than H (T &gt; D &gt; H).")
    add(7, ["C[C+]1CCCCC1", "[2H]C([2H])([2H])[C+]1CCCCC1", "[3H]C([3H])([3H])[C+]1CCCCC1"], "1 &gt; 2 &gt; 3",
        "Now the labelled group is directly on C<sup>+</sup>: hyperconjugation σ(C–X) → p operates, and C–H is a better donor than C–D, which is better than C–T (lower zero-point energy, shorter amplitude for the heavier isotope). β-Deuterium slows ionisation by about 1.3–2 per CD<sub>3</sub>.")
    add(8, ["[CH2+]c1cccc(C)c1", "[CH2+]c1cccc(C([2H])([2H])[2H])c1", "[CH2+]c1cccc(C([3H])([3H])[3H])c1"], "3 &gt; 2 &gt; 1",
        "A meta substituent cannot hyperconjugate with the benzylic cation (no resonance contributor puts charge on the meta carbon), so only the +I effect counts: CT<sub>3</sub> &gt; CD<sub>3</sub> &gt; CH<sub>3</sub>.")
    add(9, ["[CH2+]c1cccc(C)c1", "[CH2+]c1cccc(C#N)c1", "[CH2+]c1cccc(c1)[N+](=O)[O-]"], "1 &gt; 2 &gt; 3",
        "m-CH<sub>3</sub> is weakly +I, m-CN and m-NO<sub>2</sub> are −I (σ<sub>m</sub> 0.56 and 0.71): the stronger the −I, the less stable the cation.")
    add(10, ["[CH2+]c1ccc(C)cc1", "[CH2+]c1ccc(C([2H])([2H])[2H])cc1", "[CH2+]c1ccc(C([3H])([3H])[3H])cc1"], "1 &gt; 2 &gt; 3",
        "p-Alkyl groups stabilise by hyperconjugation (charge is on the para carbon): C–H &gt; C–D &gt; C–T.")
    add(11, ["[CH2+]c1ccc(C)cc1", "[CH2+]c1ccc(C#N)cc1", "[CH2+]c1ccc(cc1)[N+](=O)[O-]"], "1 &gt; 2 &gt; 3",
        "p-CH<sub>3</sub> donates; p-CN and p-NO<sub>2</sub> withdraw by −I and −M (σ<sup>+</sup> 0.66 and 0.79), NO<sub>2</sub> more strongly.")
    add(12, ["[CH2+]c1ccc(C)cc1", "[CH2+]c1ccc(C(C)C)cc1", "[CH2+]c1ccc(CC)cc1"], "1 &gt; 3 &gt; 2",
        "Baker–Nathan order in solution: the number of hyperconjugating α-C–H bonds on the ring carbon: CH<sub>3</sub> (3) &gt; CH<sub>2</sub>R (2) &gt; CHR<sub>2</sub> (1). (In the gas phase the order reverses, because polarisability then dominates.)")
    add(13, ["[CH2+]c1ccccc1", "C[C+](C)c1ccccc1", "C[CH+]c1ccccc1"], "2 &gt; 3 &gt; 1",
        "All are benzylic; each α-methyl group adds hyperconjugation/+I: tertiary (cumyl) &gt; secondary (1-phenylethyl) &gt; primary (benzyl).")
    add(14, ["[CH2+]c1cccc(Cl)c1", "[CH2+]c1cccc(Br)c1", "[CH2+]c1ccccc1"], "3 &gt; 2 &gt; 1",
        "No substituent is best. A meta halogen is only −I (no +M can reach the benzylic cation from the meta position), and Cl is more electronegative than Br (σ<sub>m</sub><sup>+</sup> 0.40 vs 0.41, nearly equal; the conventional answer is Cl more destabilising).")
    add(15, ["[CH2+]c1ccc(N)cc1", "[CH2+]c1ccc(O)cc1", "[CH2+]c1ccccc1"], "1 &gt; 2 &gt; 3",
        "p-NH<sub>2</sub> and p-OH are +M donors (the quinoid iminium/oxocarbenium contributor); nitrogen is the better donor (σ<sup>+</sup> −1.3 vs −0.92).")
    add(16, ["[CH2+]c1ccccc1", "[CH+](c1ccccc1)c1ccccc1", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1"], "3 &gt; 2 &gt; 1",
        "Each additional phenyl delocalises the charge further: trityl (pK<sub>R+</sub> −6.6) &gt; diphenylmethyl (−13.3) &gt; benzyl.")
    add(17, ["[CH2+]c1ccc(cc1)C1C(C)C1C", "[CH2+]c1ccc(cc1)C1CC1C", "[CH2+]c1ccc(cc1)C1CC1"], "1 &gt; 2 &gt; 3",
        "A cyclopropyl ring on the benzene ring donates through its bent bonds (σ<sup>+</sup> −0.41); each extra methyl on the ring adds +I/hyperconjugation to the donor.")
    add(20, ["[CH2+]C1CC1", "[CH+](C1CC1)C1CC1", "[C+](C1CC1)(C1CC1)C1CC1"], "3 &gt; 2 &gt; 1",
        "Each cyclopropyl group donates its bent σ bonds in the bisected conformation: tricyclopropylmethyl (pK<sub>R+</sub> −2.3, more stable than trityl) &gt; dicyclopropyl &gt; cyclopropylmethyl.")
    add(21, ["[CH2+]C1C(C)C1C", "[CH2+]C1CC1C", "[CH2+]C1CC1"], "1 &gt; 2 &gt; 3",
        "Methyl groups on the cyclopropane ring increase its donor strength (+I and hyperconjugation).")
    add(23, ["C[C+](C)C1CCCC1", "CC(C)[C+]1CCCC1", "CC(C)C1CCC[CH+]1"], "2 &gt; 1 &gt; 3",
        "2 and 1 are tertiary, 3 secondary. Ring cation 2 beats 1 because a five-membered ring prefers sp<sup>2</sup> carbon (I-strain: 1-methylcyclopentyl solvolyses ≈ 40× faster than t-butyl).")
    add(24, ["CCC[CH+]C", "C[CH+]OCC", "C[C+](C)OCC"], "3 &gt; 2 &gt; 1",
        "An α-oxygen lone pair gives an oxocarbenium ion (+M ≫ hyperconjugation); the tertiary α-alkoxy ion also has two methyl groups.")
    add(25, ["CCC[CH+]C", "C[CH+]NCC", "C[C+](C)NCC"], "3 &gt; 2 &gt; 1",
        "An α-nitrogen lone pair gives an iminium ion; the more alkylated carbon (3) is better still. All are far more stable than the simple secondary alkyl cation 1.")
    add(26, ["[C+]12OCC(CO1)CO2", "[CH+]1OCCCO1", "[CH+]1OCCCC1", "[CH+]1NCCCN1"], "4 &gt; 2 &gt; 3 &gt; 1",
        "Two nitrogen lone pairs (an amidinium-type ion, 4) &gt; two oxygens (2) &gt; one oxygen (3). Ion 1 would be best electronically (three oxygens) but it sits at a bridgehead of a rigid cage and cannot become planar, so the empty p orbital cannot overlap with the oxygen lone pairs: it is the least stable.")
    add(27, ["[C+]12NCC(CN1)CN2", "[CH+]1OCCCN1", "[CH+]1OCCCO1", "[CH+]1NCCCN1"], "4 &gt; 2 &gt; 3 &gt; 1",
        "N is a better π donor than O: N,N (4) &gt; N,O (2) &gt; O,O (3); the cage cation 1 is non-planar at the bridgehead and cannot be stabilised by resonance.")
    add(28, ["[CH2+]c1ccccc1", "[CH2+]C1CC1", "[CH+]1C=CC=CC=C1", "C[C+](C)C"], "3 &gt; 2 &gt; 1 &gt; 4",
        "Tropylium (aromatic 6π) is the most stable; cyclopropylmethyl (bisected σ-donation, ‘dancing resonance’) &gt; benzyl (resonance) &gt; tert-butyl (hyperconjugation only) <i>by the usual JEE convention that resonance ≫ hyperconjugation</i>. "
        "Note: measured gas-phase hydride affinities put t-Bu<sup>+</sup> (≈ 231 kcal mol<sup>−1</sup>) slightly <i>below</i> benzyl (≈ 238), i.e. t-Bu<sup>+</sup> is the more stable in the gas phase; in solution the conventional order is the experimentally expected one for solvolysis.")
    add(29, ["CC(C)(C)[CH+]C", "CC(C)(C)[CH2+]", "CC(C)[C+](C)C"], "3 &gt; 1 &gt; 2",
        "3 is tertiary; 1 is secondary (and will rearrange by a methyl shift to a tertiary ion); 2 is the primary neopentyl cation.")
    add(30, ["CC(C)[CH+]C", "[CH2+]CC(C)C", "CC[C+](C)C"], "3 &gt; 1 &gt; 2",
        "Tertiary &gt; secondary &gt; primary.")
    add(31, ["[CH+]1C=CCC1", "[CH+]1C=CC=C1", "[CH+]1CCCC1"], "1 &gt; 3 &gt; 2",
        "1 is allylic (resonance); 3 is a simple secondary cation; 2, the cyclopentadienyl cation, is antiaromatic (4π) and the least stable.")
    add(32, ["[CH+]1C=CC=CC=C1", "[CH+]1C=CC=C1", "[CH+]1C=CCCC1"], "1 &gt; 3 &gt; 2",
        "Tropylium (aromatic, 6π) &gt; cyclohex-2-enyl (allylic) &gt; cyclopentadienyl (antiaromatic).")
    add(35, ["[C+]12CCCCC1CCCC2", "[CH+]1CCCC2CCCCC12", "[CH+]1CCC2CCCCC2C1"], "1 &gt; 2 &gt; 3",
        "1 is tertiary (ring fusion); 2 and 3 are secondary, and 2 has the branched ring-fusion carbon adjacent to C<sup>+</sup> (more hyperconjugation) while 3 does not.")
    qs.append(Q("E2-91", "Which allylic carbocation is the most stable? (a) CH<sub>3</sub>–CH=CH–CH<sub>2</sub><sup>+</sup>, (b) CH<sub>3</sub>–CH=CH–CH<sup>+</sup>–CH<sub>3</sub>, (c) CH<sub>3</sub>–CH=CH–C<sup>+</sup>(CH<sub>3</sub>)<sub>2</sub>, (d) all have the same stability.",
        S([("a", "C/C=C/[CH2+]"), ("b", "C/C=C/[CH+]C"), ("c", "C/C=C/[C+](C)C")]),
        "(c)", "Each is an allyl cation delocalised over two carbons, but the alkyl groups at the termini differ: (a) has a primary terminus, (b) a secondary, (c) a tertiary terminus. Charge is shared by both termini, so the more substituted ion (c) is the most stable. (d) is wrong: the alkyl substitution differs."))
    qs.append(Q("E2-93", "Which of the following carbocations is the most stable? (a) tricyclopropylmethyl, (b) benzyl, (c) tropylium (cycloheptatrienyl), (d) isopropyl.",
        S([("a", "[C+](C1CC1)(C1CC1)C1CC1"), ("b", "[CH2+]c1ccccc1"), ("c", "[CH+]1C=CC=CC=C1"), ("d", "C[CH+]C")]),
        "(c)", "Tropylium is aromatic (6π, planar, charge shared by seven carbons; pK<sub>R+</sub> +4.7): the order is tropylium &gt; tricyclopropylmethyl &gt; benzyl &gt; isopropyl."))
    B.answers(qs, with_stem=True)
    B.h2("Items from your exercise that need confirmation")
    B.p("I could not read these structures reliably from the images, so I have <b>not</b> answered them. Please tell me (or send a clearer image of) the exact substituents: "
        "<b>Q4</b> (positions of the two methyl groups on each cyclohexyl cation), <b>Q18</b> and <b>Q19</b> (the ring substituents on the benzyl cations are not visible), "
        "<b>Q22</b> (the polyspiro cyclopropane/cyclobutane cations: the geometry of the spiro rings relative to the cationic centre decides whether cyclopropyl donation can operate), "
        "<b>Q33</b> (ring positions of the methyl groups) and <b>Q34</b> (which carbons of the oxygen heterocycles carry the double bonds).")
    return qs
