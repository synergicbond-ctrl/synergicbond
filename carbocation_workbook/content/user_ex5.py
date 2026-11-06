from .common import *
from .lg import S


def build(B):
    B.part("Part 5D", "Worked Solutions: More Supplied Counting Problems (heterolysis, statements, rearrangement, AgNO<sub>3</sub>)")
    B.p("Structures are redrawn from your images. Items marked ◊ were hard to read; the reading I used is stated, and a different reading can change the count. "
        "Conventions as before: the JEE key ranks resonance above hyperconjugation, so benzyl is taken as more stable than t-butyl even though gas-phase hydride affinities say otherwise.")
    qs = []

    qs.append(Q("D-27", "For how many compounds is the heterolytic C–Cl bond energy less than that of (CH<sub>3</sub>)<sub>3</sub>C–Cl? (A lower heterolysis energy means a more stable cation is formed than t-Bu<sup>+</sup>.)",
        S([("I", "CC(=O)Cl"), ("II", "ClCc1ccccc1"), ("III", "Clc1ccccc1"), ("IV", "ClC1C=C1"), ("V", "ClCC1CC1"), ("VI◊", "C=CCCl"), ("VII", "C=CCl"), ("VIII", "CCCCCl"), ("IX", "CCC(C)Cl")]),
        "4  (I, II, IV, V)",
        "<b>I</b> gives the acylium ion CH<sub>3</sub>C≡O<sup>+</sup>, stabilised by oxygen lone-pair donation: counts (conventional key). "
        "<b>II</b> benzyl (resonance over the ring): counts. <b>IV</b> 3-chlorocyclopropene gives the aromatic cyclopropenyl cation: counts. <b>V</b> cyclopropylmethyl cation (bent-bond donation, more stable than benzyl): counts. "
        "<b>III</b> and <b>VII</b>: aryl and vinyl cations (sp<sup>2</sup>/sp, no resonance, C–Cl also strengthened by p–π overlap): no. <b>VIII</b> primary and <b>IX</b> secondary: less stable than tertiary. "
        "<b>VI</b> allyl: a primary cation with two resonance forms, ranked below the tertiary cation by the usual key (gas-phase hydride affinity agrees: allyl is less stable than t-Bu<sup>+</sup>). If your source ranks allyl above tertiary the count would be 5."))

    qs.append(Q("D-38", "Find the number of correct statements.",
        S([("i", "[CH+]1C=CC=C1"), ("i′", "C1=C[CH+]1"), ("ii", "C[CH2+]"), ("ii′", "CO[CH2+]"), ("iii", "[CH2-][N+](=O)[O-]"), ("iii′", "[CH2-]c1ccccc1"),
           ("iv-a", "[CH2+]c1ccc(C)cc1"), ("iv-b", "[CH2+]c1ccccc1"), ("iv-c", "[CH2+]c1ccc(C(Cl)(Cl)Cl)cc1"),
           ("v-a", "[CH2-]C1CC1"), ("v-b", "[CH2-]c1ccccc1"), ("v-c", "C[CH2-]")]),
        "5  (i, ii, iii, iv, vi correct; v is wrong)",
        "(i) Cyclopentadienyl cation is antiaromatic (4π); cyclopropenyl is aromatic (2π): the statement is <b>correct</b>. "
        "(ii) Ethyl is less stable than methoxymethyl (oxocarbenium, +M): <b>correct</b>. "
        "(iii) <sup>−</sup>CH<sub>2</sub>NO<sub>2</sub> is delocalised onto oxygen (nitronate), much better than benzyl anion: <b>correct</b>. "
        "(iv) p-CH<sub>3</sub> donates, CCl<sub>3</sub> withdraws (−I): p-methylbenzyl &gt; benzyl &gt; p-CCl<sub>3</sub>-benzyl: <b>correct</b>. "
        "(v) Benzyl anion is delocalised into the ring and is much more stable than cyclopropylmethyl anion, which only has a weak s-character effect: the correct order is benzyl &gt; cyclopropylmethyl &gt; ethyl, so the statement is <b>wrong</b>. "
        "(vi) Singlet carbene stability follows π-donation from halogen lone pairs into the empty p orbital, best for 2p–2p overlap with F, then Cl, Br, I: CF<sub>2</sub> &gt; CCl<sub>2</sub> &gt; CBr<sub>2</sub> &gt; CI<sub>2</sub>: <b>correct</b>."))

    rear = S([("a◊", "CC[C+](C)CC"), ("b", "C[CH2+]"), ("c", "C[C+]1CCCC1"), ("d", "[CH2+]C1CCCCC1"), ("e", "[CH2+]c1ccccc1"), ("f◊", "CC1C2CCC(C2)[CH+]1"),
             ("g◊", "C[C+]1CC2CCC1C2"), ("h", "[CH+]1C=CCCC1"), ("i", "C[C+](C)C(C)(C)O"), ("j", "[CH+]1CCCCC1"), ("k◊", "CC(C)OC[CH2+]")])
    qs.append(Q("D-19 / D-21b", "How many of these carbocations can undergo rearrangement? (The same set appears twice in your pages.)", rear,
        "4  (d, f, i, k)",
        "<b>d</b> cyclohexylmethyl (1°): hydride shift to 1-methylcyclohexyl (3°) or ring expansion to cycloheptyl. "
        "<b>f</b> 3-methyl-2-norbornyl (2°): hydride shift from the methyl-bearing carbon gives the tertiary 2-methyl-2-norbornyl ion. "
        "<b>i</b> pinacol-type (CH<sub>3</sub>)<sub>2</sub>C<sup>+</sup>–C(OH)(CH<sub>3</sub>)–: a methyl shift gives a protonated ketone. "
        "<b>k</b> the β-alkoxy primary cation ⁺CH<sub>2</sub>CH<sub>2</sub>OR: a 1,2-hydride shift gives the oxocarbenium ion CH<sub>3</sub>CH<sup>+</sup>OR, far more stable. "
        "No rearrangement: <b>a</b> tertiary (3-methyl-3-pentyl, as I read it); <b>b</b> ethyl (the only shift is degenerate); <b>c</b> tertiary; <b>e</b> benzyl; <b>g</b> tertiary 2-methylnorbornyl (a shift would only give another tertiary or a less stable ion); "
        "<b>h</b> allylic; <b>j</b> cyclohexyl (the 1,2-H shift is degenerate; ring contraction to methylcyclopentyl is only seen in superacid, so it is not counted at this level). "
        "◊ If <b>a</b> is really a secondary cation next to a quaternary carbon, it would rearrange and the count becomes 5."))

    qs.append(Q("D-21a", "How many of the following give a white precipitate with aqueous AgNO<sub>3</sub>? (AgCl forms only if the C–Cl bond ionises readily, i.e. the cation is very stable.)",
        S([("1", "ClC1C=C1"), ("2", "ClC1CC1"), ("3◊", "ClC1C=CC=C1"), ("4◊", "ClC1C=CC=C1"), ("5◊", "ClCC1C=CC=CC1"), ("6", "C1=CC=CC=CC1Cl"), ("7", "OC1(Cl)CCCC1"), ("8", "ClC(C1CC1)C1CC1")]),
        "4  (1, 6, 7, 8)",
        "<b>1</b> 3-chlorocyclopropene → aromatic cyclopropenyl cation. <b>6</b> 7-chlorocycloheptatriene → tropylium chloride (an ionic salt, immediate AgCl). "
        "<b>7</b> 1-chlorocyclopentanol: an α-chloro alcohol loses Cl<sup>−</sup> to give the protonated ketone (oxocarbenium), then cyclopentanone. <b>8</b> dicyclopropylmethyl chloride: the cation is stabilised by two cyclopropyl groups. "
        "<b>2</b> cyclopropyl chloride: the cyclopropyl cation is strained and unstable (ionisation and ring-opening are concerted and slow). "
        "<b>3, 4</b> I read these as 5-chlorocyclopenta-1,3-dienes: loss of Cl<sup>−</sup> would give the antiaromatic cyclopentadienyl cation, so no precipitate. "
        "<b>5</b> I read this as a chloromethyl group on a saturated ring position, an ordinary primary chloride: no precipitate. ◊ Please check items 3–5 against your page: if any of them is allylic (for example 3-chlorocyclopentene) it would give a precipitate."))
    B.answers(qs, with_stem=True)
    return qs
