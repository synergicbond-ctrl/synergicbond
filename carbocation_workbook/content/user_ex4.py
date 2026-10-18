from .common import *
from .lg import S


def build(B):
    B.part("Part 5C", "Worked Solutions: Supplied ‘How Many’ Counting Problems (redrawn)")
    B.p("Counting problems need every item judged correctly, so the reasoning for each item is given. The structures are <b>redrawn from your images</b>; where a drawing was ambiguous I state the reading I used, "
        "because a different reading can change the count. Items marked ◊ are the ones to double-check against your original.")
    qs = []
    P = lambda *a: list(a)

    qs.append(Q("C-7", "How many of these cations are more stable than the benzyl cation?",
        S([("1", "[CH2+]c1ccccc1[N+](=O)[O-]"), ("2", "[CH2+]c1cccc(c1)[N+](=O)[O-]"), ("3", "[CH2+]c1ccc(OC)cc1"), ("4", "[CH2+]c1ccccc1Cl"),
           ("5", "[CH2+]c1cccc(OC)c1"), ("6", "[CH2+]c1cccc(F)c1"), ("7", "[CH2+]c1ccc(O)cc1"), ("8", "[CH2+]c1ccc(N)cc1")]),
        "3  (p-OCH<sub>3</sub>, p-OH, p-NH<sub>2</sub>)",
        "Only +M donors in the ortho/para position beat hydrogen: p-OMe, p-OH and p-NH<sub>2</sub> (σ<sup>+</sup> −0.78, −0.92, −1.3). "
        "o-NO<sub>2</sub> and m-NO<sub>2</sub> are strongly −I (−M too in the ortho case). m-OMe and m-F act only by −I, because no resonance contributor puts charge on the meta carbon. "
        "o-Cl is −I and its +M is weak (σ<sup>+</sup><sub>p</sub> Cl = +0.11, i.e. slightly destabilising), so it is below benzyl."))

    qs.append(Q("C-11a", "Among the pairs, how many have (i) more reactive than (ii) towards AgNO<sub>3</sub>? (Reactivity = ease of ionising C–X, i.e. stability of the carbocation formed; SN1 path.)",
        S([("A-i", "BrC1CCCCO1"), ("A-ii◊", "BrC1C=CCCO1"), ("B-i", "BrC1C=COC=C1"), ("B-ii", "BrC1C=CC=C1"),
           ("C-i◊", "IC1C=CC=C1"), ("C-ii", "IC1CCCC1"), ("D-i", "BrC1C=CC=CC=C1"), ("D-ii", "BrC1C=CC=C1"),
           ("E-i", "ClC1CC2CCC1C2"), ("E-ii", "ClC12CCC(CC1)C2")]),
        "3  (B, D and E)",
        "<b>A</b>: both give an oxocarbenium ion; in my reading (ii) is also allylic, so (ii) is more reactive (not counted). If (ii) is an isolated or enol-ether double bond the pair would count, so check the position of the double bond. "
        "<b>B</b>: (i) loses Br<sup>−</sup> to give the <i>pyrylium</i> ion, aromatic (6π, O lone pair + two C=C); (ii) would give the antiaromatic cyclopentadienyl cation. (i) ≫ (ii): counts. "
        "<b>C</b>: reading (i) as 5-iodocyclopenta-1,3-diene, ionisation gives the antiaromatic cyclopentadienyl cation, much worse than a plain secondary cyclopentyl cation, so (i) is <i>less</i> reactive (not counted). If (i) were 3-iodocyclopentene (allylic) it would count. "
        "<b>D</b>: (i) gives the aromatic tropylium ion; (ii) the antiaromatic cyclopentadienyl cation: counts. "
        "<b>E</b>: (i) is a secondary 2-chloronorbornane (ionises, with σ-participation); (ii) is a bridgehead chloride, whose cation cannot become planar: counts."))

    qs.append(Q("C-12a", "How many of the following are more stable than the isopropyl cation, owing to +R together with −I effects?",
        S([("A", "COCC[CH2+]"), ("B", "CCO[CH+]C"), ("C", "CCN(C)[CH+]C"), ("D", "C[CH+][N+](C)([O-])CC"), ("E◊", "COC[CH+]COC"),
           ("F", "C#C[CH2+]"), ("G◊", "CC(=O)[CH+]C"), ("H◊", "C[CH+]CCCl"), ("I◊", "OCC[CH+]C"), ("J", "COCC[CH+]NC")]),
        "3  (B, C and J)",
        "A +R group must be bonded <i>directly</i> to C<sup>+</sup> with a free lone pair. B is an oxocarbenium ion and C and J are iminium ions: all three are far more stable than a secondary alkyl cation. "
        "D: the nitrogen lone pair is tied up in the N→O bond, so there is no +R and a strong −I (N<sup>+</sup>–O<sup>−</sup>). "
        "A, E, H and I have the heteroatom or halogen one or more carbons away from C<sup>+</sup>: only −I operates, which destabilises. "
        "F: propargyl is resonance-stabilised but the sp carbon is −I, and it is less stable than secondary alkyl (gas-phase hydride affinity higher than i-Pr<sup>+</sup>). "
        "G: α-carbonyl cation, destabilised by −I and −M."))

    qs.append(Q("C-11b", "Species: quinuclidine, cyclooctatetraene, naphthalene, cyclopropenyl cation, tropylium ion, propene, 1,3-butadiene. x = number in which resonance takes place; y = number in which every C–C bond length is equal. Find (x² + y² + 1)/(x + y + 1).",
        S([("1", "C1CN2CCC1CC2"), ("2", "C1=CC=CC=CC=C1"), ("3", "c1ccc2ccccc2c1"), ("4", "C1=C[CH+]1"), ("5", "[CH+]1C=CC=CC=C1"), ("6", "CC=C"), ("7", "C=CC=C")]),
        "x = 4, y = 2, value = 21/7 = 3",
        "Resonance (π delocalisation) occurs in naphthalene, the cyclopropenyl cation, tropylium and 1,3-butadiene: <b>x = 4</b>. Quinuclidine has no π system; cyclooctatetraene is tub-shaped, so its double bonds do not conjugate (alternating bond lengths); propene only has hyperconjugation. "
        "All C–C bonds are equal only in the cyclopropenyl and tropylium cations (complete delocalisation round a symmetric ring): <b>y = 2</b>. Naphthalene (1.36/1.42 Å) and butadiene have unequal bonds; in quinuclidine C2–C3 and C3–C4 are not symmetry-equivalent. "
        "(16 + 4 + 1)/(4 + 2 + 1) = 3."))

    qs.append(Q("C-12b", "How many of the following cations are more stable than the benzyl cation?",
        S([("i", "[c+]1ccccc1"), ("ii", "C=C[CH2+]"), ("iii", "[C+](C1CC1)(C1CC1)C1CC1"), ("iv", "CO[CH+]c1ccccc1"), ("v◊", "[CH+]1C2CCC1CC2"),
           ("vi◊", "CCCC1=C(CCC)[C+]1CCC"), ("vii", "[CH2+]C1CCC1"), ("viii", "[CH+]1C=CC=C1"), ("ix", "[CH2+]c1cccc(OC)c1")]),
        "3  (iii, iv, vi)",
        "iii: tricyclopropylmethyl (pK<sub>R+</sub> −2.3) is more stable than benzyl. iv: α-methoxybenzyl is both benzylic and an oxocarbenium ion. "
        "vi: an alkyl-substituted cyclopropenyl cation is aromatic (2π, pK<sub>R+</sub> about +10). "
        "i: phenyl cation has its empty orbital in the ring plane, no resonance. ii: allyl is less stabilised than benzyl. v: the norbornyl cation at C7 (or at a bridgehead) is held non-planar and cannot delocalise. "
        "vii: ordinary primary cation. viii: antiaromatic. ix: m-OMe is only −I."))

    qs.append(Q("C-15", "How many of the given cations are more stable than the ethyl cation?",
        S([("i", "C[CH+]C"), ("ii", "[CH2+]c1ccccc1"), ("iii", "[CH2+]C1CC1"), ("iv", "[CH3+]"), ("v", "ClC[CH2+]"), ("vi", "[O-][N+](=O)C[CH2+]")]),
        "3  (i, ii, iii)",
        "i: secondary &gt; primary. ii: resonance. iii: bent-bond donation from the cyclopropane ring. iv: methyl cation is less stable than ethyl (no hyperconjugation). "
        "v and vi: the −I effect of Cl and NO<sub>2</sub> destabilises the classical ion. (Real β-chloroalkyl cations are in fact bridged chloronium ions, which are lower in energy than a classical ethyl cation; the exam-level answer treats v as destabilised.)"))

    qs.append(Q("C-23", "How many carbocations undergo rearrangement?",
        S([("i", "CC1(C)CCCC[CH+]1"), ("ii", "[CH+]1CCCCCC1"), ("iii", "[CH2+]C1CCCC1"), ("iv", "C[C+](O)C1CCCC1"), ("v", "[CH2+]c1ccccc1"), ("vi", "C=[CH+]"),
           ("vii", "[CH+]1CCCCC12CC2"), ("viii", "C=C[CH2+]"), ("ix", "C[C+](C)C1(O)CCCCC1"), ("x", "C1=C[CH+]C=CC12C=CC=C2"), ("xi", "CC(C)(C)[CH2+]"), ("xii", "C[C+](C)C(c1ccccc1)c1ccccc1")]),
        "7  (i, iii, vii, ix, x, xi, xii)",
        "A cation rearranges only if a 1,2-shift gives a more stable ion. "
        "<b>i</b> 2,2-dimethylcyclohexyl (2°) → methyl shift → tertiary. <b>iii</b> cyclopentylmethyl (1°) → hydride shift to 1-methylcyclopentyl (3°), or ring expansion to cyclohexyl. "
        "<b>vii</b> cyclopropylcarbinyl-type: ring expansion of the cyclopropane to a cyclobutyl ring gives a tertiary ion. <b>ix</b> pinacol-type: ring-carbon migration to the cationic carbon expands the ring and gives a protonated ketone (2,2-dimethylcycloheptanone). "
        "<b>x</b> this is an ipso arenium ion with a spiro carbon: a 1,2 alkyl shift restores the aromatic ring (dienone–phenol type). <b>xi</b> neopentyl → methyl shift → tert-amyl. <b>xii</b> Ph<sub>2</sub>CH–C<sup>+</sup>Me<sub>2</sub> → hydride shift → Ph<sub>2</sub>C<sup>+</sup>–CHMe<sub>2</sub> (diphenylmethyl-type, more stable). "
        "No rearrangement: <b>ii</b> cycloheptyl (a hydride shift gives the same type of ion), <b>iv</b> an α-hydroxy carbenium ion is already stabilised by oxygen, and the shift would lose that, <b>v</b> benzyl, <b>vi</b> vinyl, <b>viii</b> allyl (resonance, not rearrangement)."))
    B.answers(qs, with_stem=True)
    return qs
