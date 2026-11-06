from .common import *

P = Ph  # shorthand


def build(B):
    B.h2("2.A  Carbocations from alcohols")
    B.p("Alcohols do not ionise directly because HO<sup>−</sup> is a poor leaving group (conjugate acid H<sub>2</sub>O, "
        "pK<sub>a</sub> ≈ 15.7). Protonation, or coordination to a Lewis acid, converts it into H<sub>2</sub>O (pK<sub>a</sub> of H<sub>3</sub>O<sup>+</sup> ≈ −1.7) "
        "and ionisation then becomes possible <i>only if</i> the cation is stabilised enough: tertiary, benzylic, allylic or α-heteroatom-substituted. "
        "Primary and unactivated secondary alcohols generally react by concerted routes (E2, S<sub>N</sub>2, or ionisation with simultaneous 1,2-shift) "
        "and are drawn that way below. Every arrow starts at an electron pair (lone pair or bond) and ends where that pair finishes.")
    c = []
    c.append(ex("2.A1", "tert-Butyl alcohol, dilute strong acid",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[OH:5]",
        [St(A(('lp', 5), ('nb', 5, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "−H_2O", drop=[5], expect="C[C+](C)C")],
        "C[C+](C)C",
        "Rate-limiting loss of water from the oxonium ion gives the planar tert-butyl cation (nine hyperconjugating C–H bonds). In water the cation is captured faster than it eliminates unless the mixture is heated."))
    c.append(ex("2.A2", "1-Methylcyclohexanol, H<sub>2</sub>SO<sub>4</sub>",
        "[CH3:1][C:2]1([OH:3])[CH2:4][CH2:5][CH2:6][CH2:7][CH2:8]1",
        [St(A(('lp', 3), ('nb', 3, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 3), ('lp', 3), -0.5), "−H_2O", drop=[3])],
        "C[C+]1CCCCC1",
        "A tertiary ring cation: the cationic carbon is sp<sup>2</sup>. E1 loss of H<sup>+</sup> competes and gives 1-methylcyclohexene (the Zaitsev alkene) on warming."))
    c.append(ex("2.A3", "Triphenylmethanol, conc. H<sub>2</sub>SO<sub>4</sub>",
        "[OH:1][C:2](" + P(3) + ")(" + P(9) + ")" + P(15),
        [St(A(('lp', 1), ('nb', 1, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 1), ('lp', 1), -0.5), "−H_2O", drop=[1])],
        None,
        "The yellow trityl cation is delocalised into three rings, which twist about 30° out of the central plane (propeller) because ortho-H···ortho-H contacts forbid full planarity. Isolable as BF<sub>4</sub><sup>−</sup> or ClO<sub>4</sub><sup>−</sup> salts."))
    c.append(ex("2.A4", "1-Phenylethanol, HBr (conc.)",
        "[CH3:1][CH:2]([OH:3])" + P(4),
        [St(A(('lp', 3), ('nb', 3, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 3), ('lp', 3), -0.5), "−H_2O", drop=[3])],
        None,
        "A secondary benzylic cation, stabilised by +M delocalisation into the ring (charge at o- and p-carbons). Bromide then captures it (S<sub>N</sub>1)."))
    c.append(ex("2.A5", "Prenol (3-methylbut-2-en-1-ol), H<sup>+</sup>",
        "[CH3:1][C:2]([CH3:3])=[CH:4][CH2:5][OH:6]",
        [St(A(('lp', 6), ('nb', 6, 90), 0.5), "H^+", add=HP),
         St(A(('b', 5, 6), ('lp', 6), -0.5), "−H_2O", drop=[6], expect="CC(C)=C[CH2+]"),
         St(A(('b', 2, 4), ('nb', 4, 5), 0.5), "", kind="res", expect="C[C+](C)C=C")],
        "C[C+](C)C=C",
        "Ionisation puts the charge at C-1 (primary) <i>and</i>, by the double-headed resonance arrow, at C-3 (tertiary): one allyl cation, two contributors, with most of the positive charge on the tertiary terminus. Nucleophiles can attack at either end (S<sub>N</sub>1 and S<sub>N</sub>1′)."))
    c.append(ex("2.A6", "Cyclohexanol, 85 % H<sub>3</sub>PO<sub>4</sub>, heat (E1)",
        "[CH:1]1([OH:2])[CH:3]([H:8])[CH2:4][CH2:5][CH2:6][CH2:7]1",
        [St(A(('lp', 2), ('nb', 2, 90), 0.5), "H^+", add=HP),
         St(A(('b', 1, 2), ('lp', 2), -0.5), "−H_2O", drop=[2]),
         St([A(('lp', 92), ('nb', 92, 8), 0.5), A(('b', 3, 8), ('nb', 3, 1), -0.5)], "−H^+", add=OH2, drop=[92], expect="C1=CCCCC1")],
        "C1=CCCCC1",
        "A secondary cation is formed only at elevated temperature and in poorly nucleophilic acid (H<sub>3</sub>PO<sub>4</sub>, HSO<sub>4</sub><sup>−</sup>). The base removes a β-H whose C–H bond overlaps the empty p orbital; the C–H pair becomes the new π bond (E1). H<sub>3</sub>O<sup>+</sup> regenerates the catalyst."))
    c.append(ex("2.A7", "Neopentyl alcohol, HBr, heat: ionisation with concerted CH<sub>3</sub> shift",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[CH2:5][OH:6]",
        [St(A(('lp', 6), ('nb', 6, 90), 0.5), "H^+", add=HP),
         St([A(('b', 5, 6), ('lp', 6), -0.5), A(('b', 2, 3), ('nb', 3, 5), 0.6)], "−H_2O (one step)", drop=[6], expect="CC[C+](C)C")],
        "CC[C+](C)C",
        "A free primary cation (CH<sub>3</sub>)<sub>3</sub>CCH<sub>2</sub><sup>+</sup> is not an intermediate: the C–CH<sub>3</sub> σ bond anti to the departing water pushes in as the leaving group departs, so the tertiary tert-amyl cation is reached directly (anchimeric σ-assistance). The same applies to neopentyl halides and tosylates."))
    c.append(ex("2.A8", "3-Methylbutan-2-ol, conc. HBr",
        "[CH3:1][C:2]([H:6])([CH3:7])[CH:3]([CH3:4])[OH:5]",
        [St(A(('lp', 5), ('nb', 5, 90), 0.5), "H^+", add=HP),
         St(A(('b', 3, 5), ('lp', 5), -0.5), "−H_2O", drop=[5], expect="CC(C)[CH+]C"),
         St(A(('b', 2, 6), ('nb', 6, 3), -0.6), "1,2-H", kind='eq', expect="C[C+](C)CC"),
         St(A(('lp', 93), ('nb', 93, 2), 0.5), "", add="[Br-:93]", expect="CCC(C)(C)Br")],
        "CCC(C)(C)Br",
        "The secondary cation is formed with (or just before) the hydride shift: C–H (σ) → empty p. The tertiary cation is lower in energy and is captured by Br<sup>−</sup>: the major product is 2-bromo-2-methylbutane, not 2-bromo-3-methylbutane."))
    c.append(ex("2.A9", "Cyclopentylmethanol, H<sup>+</sup>: ionisation with ring expansion",
        "[CH2:1]([OH:2])[CH:3]1[CH2:4][CH2:5][CH2:6][CH2:7]1",
        [St(A(('lp', 2), ('nb', 2, 90), 0.5), "H^+", add=HP),
         St([A(('b', 1, 2), ('lp', 2), -0.5), A(('b', 3, 4), ('nb', 4, 1), 0.6)], "−H_2O", drop=[2], expect="[CH+]1CCCCC1")],
        "[CH+]1CCCCC1",
        "The ring C–C bond migrates to the departing CH<sub>2</sub> as water leaves, so the ring grows from five to six atoms and a secondary cation results; no primary cation intervenes. Ring strain relief is small (cyclopentane → cyclohexane) – the driving force is mainly 1° → 2°."))
    c.append(ex("2.A10", "1-Adamantanol, H<sub>2</sub>SO<sub>4</sub> (bridgehead cation)",
        "[OH:1][C:2]12[CH2:3][CH:4]3[CH2:5][CH:6]([CH2:7][CH:8]([CH2:9]1)[CH2:10]3)[CH2:11]2",
        [St(A(('lp', 1), ('nb', 1, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 1), ('lp', 1), -0.5), "−H_2O", drop=[1])],
        None,
        "The 1-adamantyl cation is a tertiary bridgehead cation that forms readily: the cage is rigid, strain-free in the cation and the three C–C bonds at C-1 are held in good overlap with the empty orbital (σ<sub>C–C</sub> hyperconjugation). Contrast with bicyclo[2.2.1]hept-1-yl, where bridgehead cations are strongly disfavoured."))
    c.append(ex("2.A11", "Dicyclopropylmethanol, H<sup>+</sup>",
        "[OH:1][CH:2]([CH:3]1[CH2:4][CH2:5]1)[CH:6]1[CH2:7][CH2:8]1",
        [St(A(('lp', 1), ('nb', 1, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 1), ('lp', 1), -0.5), "−H_2O", drop=[1])],
        None,
        "Each cyclopropyl ring donates its bent (Walsh-type) C–C σ bonds into the empty p orbital, which must lie in the <i>bisected</i> geometry. Dicyclopropylcarbinyl cations are far more stable than isopropyl- or even benzyl-type cations of the same substitution (see 5.5)."))
    c.append(ex("2.A12", "Pinacol, 2,3-dimethylbutane-2,3-diol, H<sub>2</sub>SO<sub>4</sub> (first step of the pinacol rearrangement)",
        "[CH3:1][C:2]([CH3:3])([OH:4])[C:5]([CH3:6])([CH3:7])[OH:8]",
        [St(A(('lp', 8), ('nb', 8, 90), 0.5), "H^+", add=HP),
         St(A(('b', 5, 8), ('lp', 8), -0.5), "−H_2O", drop=[8], expect="CC(C)(O)[C+](C)C")],
        "CC(C)(O)[C+](C)C",
        "The β-hydroxy tertiary cation is formed; its OH group is only inductively withdrawing and cannot stabilise it by resonance. A 1,2-methyl shift (Part 7) converts it into the oxygen-stabilised cation, which is the driving force."))
    c.append(ex("2.A13", "tert-Butyl alcohol, ZnCl<sub>2</sub>/HCl (Lucas reagent), Lewis-acid ionisation",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[OH:5]",
        [St(A(('lp', 5), ('nb', 5, 94), 0.5), "ZnCl_2", add="[Cl:93][Zn:94][Cl:95]"),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "", kind="rxn")],
        None,
        "Zn(II) binds the oxygen lone pair; the C–O bond then ionises to the cation and the zincate [HOZnCl<sub>2</sub>]<sup>−</sup>. Tertiary alcohols give turbidity in seconds, secondary in minutes, primary not at all – the Lucas test is an S<sub>N</sub>1 test."))
    B.grid(c, 2)
