from .common import *
from .lg import S


def build(B):
    B.part("Part 5B", "Worked Solutions: the Supplied ‘Electronic Displacement Effects’ Carbocation Problems (redrawn)")
    B.p("These are the carbocation-stability items from the ‘Exercise O-II’ set you supplied (Q8–Q16 of that exercise). Structures are redrawn and the reasoning is new. "
        "Orders are <b>decreasing</b> stability unless the question says otherwise, using JEE-Advanced conventions; where the textbook key conflicts with measured data it is flagged. "
        "The carbanion and radical items from the same pages (Q17–Q20) are answered in the carbanion and free-radical chapters, and the aromaticity, bond-length and resonance-energy items belong with those topics.")
    qs = []

    def add(n, stem, pairs, order, why):
        qs.append(Q(f"E3-{n}", stem, S([(l, s) for l, s in pairs]), order, why))

    add("8", "Select the least stable cation.",
        [("A", "C[CH2+]"), ("B", "CC[CH2+]"), ("C", "CC(C)[CH2+]"), ("D", "CC(C)(C)[CH2+]")], "(A)",
        "All four are primary. Each larger alkyl group is a better +I donor and more polarisable, so ethyl, with the smallest substituent, is the least stable. (Counting α-C–H bonds alone would favour ethyl, which is why this is a ‘+I/polarisability’ answer, not a hyperconjugation one.)")
    add("9(i)", "Arrange in decreasing stability.",
        [("a", "C[CH2+]"), ("b", "C[CH+]C"), ("c", "C[C+](C)C")], "c &gt; b &gt; a", "Tertiary &gt; secondary &gt; primary.")
    add("9(ii)", "Arrange in decreasing stability.",
        [("a", "[CH+]1CCCCC1"), ("b", "CC1CCCC[CH+]1"), ("c", "C[C+]1CCCCC1")], "c &gt; b &gt; a",
        "c is tertiary; a and b are secondary, and b carries an extra adjacent methyl-bearing carbon (more α-C–C/C–H hyperconjugation).")
    add("9(iv)", "Arrange the cycloalkyl cations in decreasing stability.",
        [("a", "[CH+]1CC1"), ("b", "[CH+]1CCC1"), ("c", "[CH+]1CCCC1"), ("d", "[CH+]1CCCCC1")], "d &gt; c &gt; b &gt; a  (textbook key)",
        "Textbook key: angle strain at the sp<sup>2</sup> centre (60° in cyclopropyl, 90° in cyclobutyl) destabilises the small rings. "
        "<b>Conflict with data:</b> solvolysis rates (I-strain) make cyclopentyl faster than cyclohexyl, and cyclobutyl is stabilised by non-classical bridging, so the experimental order is closer to c &gt; d &gt; b &gt; a. If a question forces one answer, use the key; know the data.")
    add("9(v)", "Arrange in decreasing stability.",
        [("a", "FC(F)(F)[CH2+]"), ("b", "ClC(Cl)(Cl)[CH2+]"), ("c", "BrC(Br)(Br)[CH2+]")], "c &gt; b &gt; a",
        "All three groups are −I; the strength of the effect follows electronegativity, F ≫ Cl &gt; Br, so CBr<sub>3</sub> destabilises least.")
    add("9(vii)", "Arrange in decreasing stability.",
        [("a", "C#[C+]"), ("b", "C=[CH+]"), ("c", "C[CH2+]")], "c &gt; b &gt; a",
        "The empty orbital sits on sp (50% s) or sp<sup>2</sup> (33% s) carbon: the more s-character, the more tightly held the electrons and the less stable the cation. Ethyl uses a p orbital.")
    add("9(viii)", "Arrange the aryl cations in decreasing stability.",
        [("a", "[c+]1ccccc1"), ("b", "[c+]1ccc(cc1)[N+](=O)[O-]"), ("c", "[c+]1ccc(C)cc1"), ("d", "[c+]1ccc(Cl)cc1")], "c &gt; a &gt; d &gt; b",
        "The empty sp<sup>2</sup> orbital lies in the ring plane, orthogonal to the π system, so there is no resonance: only the inductive effect operates. CH<sub>3</sub> is +I; Cl is −I and NO<sub>2</sub> is more strongly −I.")
    add("9(ix)", "Arrange the benzyl cations in decreasing stability.",
        [("a", "[CH2+]c1ccc(cc1)[N+](=O)[O-]"), ("b", "[CH2+]c1ccc(OC)cc1"), ("c", "[CH2+]c1ccccc1")], "b &gt; c &gt; a",
        "p-OMe donates by +M (oxocarbenium contributor); NO<sub>2</sub> withdraws by −M and −I.")
    add("9(x)", "Arrange the hydroxybenzyl cations in decreasing stability.",
        [("a", "[CH2+]c1ccccc1O"), ("b", "[CH2+]c1cccc(O)c1"), ("c", "[CH2+]c1ccc(O)cc1")], "c &gt; a &gt; b",
        "Ortho and para OH can place the positive charge on oxygen (+M); meta cannot, and there OH is only −I. Para is better than ortho by the usual key (ortho: the −I effect is stronger at short distance and the oxygen lone pair is nearer the charge).")
    add("9(xi)", "Arrange the methylbenzyl cations in decreasing stability.",
        [("a", "[CH2+]c1ccc(C)cc1"), ("b", "[CH2+]c1cccc(C)c1"), ("c", "[CH2+]c1ccccc1C")], "c &gt; a &gt; b",
        "Ortho and para CH<sub>3</sub> hyperconjugate with the delocalised charge; meta cannot. Textbook key puts ortho first (closer +I and hyperconjugation); steric effects can reverse this in real systems.")
    add("9(xii)", "Arrange the p-alkylbenzyl cations in decreasing stability.",
        [("a", "[CH2+]c1ccc(C)cc1"), ("b", "[CH2+]c1ccc(CC)cc1"), ("c", "[CH2+]c1ccc(C(C)C)cc1"), ("d", "[CH2+]c1ccc(C(C)(C)C)cc1")], "a &gt; b &gt; c &gt; d",
        "Baker–Nathan order: the number of hyperconjugating α-C–H bonds is 3, 2, 1, 0. (Pure inductive donation would give the opposite order.)")
    add("9(xiii)", "Arrange in decreasing stability.",
        [("a", "C[C+](C)C"), ("b", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1"), ("c", "C[CH2+]"), ("d", "[c+]1ccccc1")], "b &gt; a &gt; c &gt; d",
        "Trityl (three-ring delocalisation) &gt; tertiary alkyl &gt; primary alkyl &gt; phenyl cation (no resonance, charge in an sp<sup>2</sup> orbital).")
    add("9(xv)", "Arrange in decreasing stability.",
        [("a", "[CH2+]C1CC1"), ("b", "[CH2+]C1CCC1"), ("c", "[CH+]1CCCC1")], "a &gt; c &gt; b",
        "Cyclopropylmethyl is stabilised by bent-bond donation (σ → p overlap in the bisected conformation); cyclopentyl is secondary; cyclobutylmethyl is an ordinary primary cation.")
    add("9(xvi)", "Arrange in decreasing stability.",
        [("a", "[CH+]1C=CC=C1"), ("b", "[CH+]1C=CC=CC=C1"), ("c", "[CH+]1C=CCC1")], "b &gt; c &gt; a",
        "Tropylium is aromatic (6π); cyclopent-2-enyl is allylic; cyclopentadienyl is antiaromatic (4π) and the least stable of all.")
    qs.append(Q("E3-10", "Which statements are correct? (I) CH<sub>3</sub>OCH<sub>2</sub><sup>+</sup> is more stable than CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>. (II) (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup> is more stable than CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub><sup>+</sup>. (III) CH<sub>2</sub>=CH–CH<sub>2</sub><sup>+</sup> is more stable than CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub><sup>+</sup>. (IV) CH<sub>2</sub>=CH<sup>+</sup> is more stable than CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>. (A) I, II (B) III, IV (C) I, II, III (D) II, III, IV",
        S([("I", "CO[CH2+]"), ("II", "C[CH+]C"), ("III", "C=C[CH2+]"), ("IV", "C=[CH+]")]),
        "(C)", "I: α-oxygen lone pair gives an oxocarbenium ion. II: secondary &gt; primary. III: allyl resonance. IV is false: the vinyl cation has an sp-hybridised cationic carbon, which is less stable than ethyl."))
    qs.append(Q("E3-11a/b", "Which ion is more stable? (a) C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup> or CH<sub>2</sub>=CH–CH<sub>2</sub><sup>+</sup>; (b) CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> or CH<sub>2</sub>=CH<sup>+</sup>.",
        S([("a-I", "[CH2+]c1ccccc1"), ("a-II", "C=C[CH2+]"), ("b-I", "C[CH2+]"), ("b-II", "C=[CH+]")]),
        "(a) benzyl; (b) ethyl", "(a) Benzyl delocalises the charge over four carbons (seven contributors incl. ring), allyl over two. (b) The vinyl cation is sp-hybridised and the empty p orbital has no hyperconjugating partners except one C–H."))
    add("13", "Which is the most stable? (A) Ph<sub>3</sub>C<sup>+</sup> (B) (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> (C) (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup> (D) CH<sub>2</sub>=CH–CH<sub>2</sub><sup>+</sup>",
        [("A", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1"), ("B", "C[C+](C)C"), ("C", "C[CH+]C"), ("D", "C=C[CH2+]")], "(A)",
        "Trityl: charge is delocalised over three rings (ten carbons’ worth of contributors); pK<sub>R+</sub> = −6.6 compared with about −15 for t-butyl.")
    add("14", "Increasing order of stability of (a) p-CH<sub>3</sub>O–C<sub>6</sub>H<sub>4</sub>CH<sub>2</sub><sup>+</sup> (b) C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup> (c) p-CH<sub>3</sub>–C<sub>6</sub>H<sub>4</sub>CH<sub>2</sub><sup>+</sup> (d) CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>.",
        [("a", "[CH2+]c1ccc(OC)cc1"), ("b", "[CH2+]c1ccccc1"), ("c", "[CH2+]c1ccc(C)cc1"), ("d", "C[CH2+]")], "d &lt; b &lt; c &lt; a  → (A)",
        "Ethyl (no resonance) &lt; benzyl &lt; p-methylbenzyl (hyperconjugation) &lt; p-methoxybenzyl (+M).")
    add("15", "Correct order of stability: (1) p-HO– (2) p-H<sub>2</sub>N– (3) p-CH<sub>3</sub>– (4) p-(CH<sub>3</sub>)<sub>3</sub>C– benzyl cation.",
        [("1", "[CH2+]c1ccc(O)cc1"), ("2", "[CH2+]c1ccc(N)cc1"), ("3", "[CH2+]c1ccc(C)cc1"), ("4", "[CH2+]c1ccc(C(C)(C)C)cc1")], "2 &gt; 1 &gt; 3 &gt; 4  → (D)",
        "NH<sub>2</sub> is a stronger +M donor than OH (σ<sup>+</sup> −1.3 vs −0.92); CH<sub>3</sub> has three α-C–H bonds, t-Bu none.")
    add("16", "Increasing order of stability: (I) p-methylbenzyl, (II) p-nitrobenzyl, (III) 3,5-diisopropyl-4-nitrobenzyl cation.",
        [("I", "[CH2+]c1ccc(C)cc1"), ("II", "[CH2+]c1ccc(cc1)[N+](=O)[O-]"), ("III", "[CH2+]c1cc(C(C)C)c([N+](=O)[O-])c(C(C)C)c1")], "II &lt; III &lt; I  → (B)",
        "Steric inhibition of resonance: the two flanking isopropyl groups twist the nitro group out of the ring plane, so it loses its −M effect and only −I remains. III is therefore less destabilised than II (full −M and −I), but still less stable than the methyl-substituted I.")
    B.answers(qs, with_stem=True)
    return qs
