from .common import *


def build(B):
    B.h2("2.C  Carbocations from alkenes, dienes and alkynes (electrophilic addition)")
    B.p("A π bond is a nucleophile. Its electron pair attacks the electrophile (H<sup>+</sup>, a carbocation, X<sup>+</sup>, Hg<sup>2+</sup>) and forms a σ bond to <i>one</i> carbon; the other carbon is left electron-deficient. "
        "The proton adds so that the <b>more stable</b> cation (Markovnikov) is produced, and the arrow always runs from the π bond to the electrophile. "
        "When the electrophile has a lone pair that can reach back (Br, S, Hg), a <b>bridged onium ion</b> – not an open carbocation – is the intermediate, which is why no rearrangement and <i>anti</i> stereochemistry result.")
    c = []
    c.append(ex("2.C1", "Propene + HBr",
        "[CH3:1][CH:2]=[CH2:3]",
        [St([A(('b', 2, 3), ('nb', 3, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5)], "HBr", add=HB, expect="C[CH+]C.[Br-]"),
         St(A(('lp', 91), ('nb', 91, 2), 0.45), "", expect="CC(C)Br")],
        "CC(C)Br",
        "Protonation at C-3 puts the cation on the secondary C-2 (Markovnikov). The rate-limiting step is H<sup>+</sup> transfer from HBr to the alkene."))
    c.append(ex("2.C2", "2-Methylpropene + H<sub>3</sub>O<sup>+</sup> (acid hydration)",
        "[CH2:1]=[C:2]([CH3:3])[CH3:4]",
        [St([A(('b', 1, 2), ('nb', 1, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5)], "", add="[H:90][OH2+:91]", expect="C[C+](C)C.O"),
         St(A(('lp', 91), ('nb', 91, 2), 0.45), "", expect="CC(C)(C)[OH2+]")],
        "CC(C)(C)[OH2+]",
        "Only the tertiary cation is formed (the primary isobutyl cation would be ≈ 15 kcal/mol higher in energy). Capture by water and loss of H<sup>+</sup> gives tert-butyl alcohol; hydration is reversible (E1 reverse)."))
    c.append(ex("2.C3", "1-Methylcyclohexene + HCl",
        "[CH3:1][C:2]1=[CH:3][CH2:4][CH2:5][CH2:6][CH2:7]1",
        [St([A(('b', 2, 3), ('nb', 3, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5)], "HCl", add=HCl, expect="C[C+]1CCCCC1.[Cl-]")],
        "C[C+]1CCCCC1.[Cl-]",
        "The proton adds to the less substituted alkene carbon, giving the tertiary ring cation. Capture by chloride from the open face, from either side, gives 1-chloro-1-methylcyclohexane (no stereocentre is created)."))
    c.append(ex("2.C4", "Styrene + HBr",
        "[CH2:1]=[CH:2]" + Ph(3),
        [St([A(('b', 1, 2), ('nb', 1, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5)], "HBr", add=HB)],
        None,
        "H<sup>+</sup> adds to the terminal CH<sub>2</sub> so that the cation is benzylic. The rate of addition to ring-substituted styrenes follows σ<sup>+</sup> (ρ ≈ −3): a +M group in the para position speeds up the reaction."))
    c.append(ex("2.C5", "3,3-Dimethylbut-1-ene + HCl: addition with rearrangement",
        "[CH2:1]=[CH:2][C:3]([CH3:4])([CH3:5])[CH3:6]",
        [St([A(('b', 1, 2), ('nb', 1, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5)], "HCl", add=HCl, expect="C[CH+]C(C)(C)C.[Cl-]"),
         St(A(('b', 3, 4), ('nb', 4, 2), 0.6), "1,2-CH_3", kind='eq', expect="CC(C)[C+](C)C.[Cl-]"),
         St(A(('lp', 91), ('nb', 91, 3), 0.4), "", expect="CC(C)C(C)(C)Cl")],
        "CC(C)C(C)(C)Cl",
        "The secondary cation (neopentyl-type, with an adjacent quaternary carbon) is trapped in part by Cl<sup>−</sup> (2-chloro-3,3-dimethylbutane, minor) but mostly undergoes a methyl shift to the tertiary cation: 2-chloro-2,3-dimethylbutane is the major product. A classic proof that alkene hydrohalogenation involves a cation."))
    c.append(ex("2.C6", "Cyclohexene + Br<sub>2</sub>: bromonium ion",
        "[CH:1]1=[CH:2][CH2:3][CH2:4][CH2:5][CH2:6]1",
        [St([A(('b', 1, 2), ('nb', 1, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5), A(('lp', 90), ('nb', 90, 2), 0.6)], "Br_2", add="[Br:90][Br:91]", expect="C1CCC2C(C1)[Br+]2.[Br-]")],
        "C1CCC2C(C1)[Br+]2.[Br-]",
        "A bromine lone pair closes onto the carbon that lost the π electrons: the intermediate is a three-membered bromonium ion, not an open carbocation. Bromide then opens it from the face opposite to the ring (anti addition, trans-1,2-dibromocyclohexane)."))
    c.append(ex("2.C7", "Propene + Hg(OAc)<sup>+</sup> (oxymercuration)",
        "[CH3:1][CH:2]=[CH2:3]",
        [St([A(('b', 2, 3), ('nb', 3, 90), 0.5), A(('lp', 90), ('nb', 90, 2), 0.6)], "Hg(OAc)_2", add="[Hg+:90][O:91][C:92](=[O:93])[CH3:94]")],
        None,
        "The mercurinium ion is bridged and delocalised; the nucleophile (H<sub>2</sub>O) attacks the more substituted carbon (greater positive charge) with <i>anti</i> stereochemistry and, because no free cation forms, <b>without rearrangement</b>. NaBH<sub>4</sub> then replaces Hg by H."))
    c.append(ex("2.C8", "Buta-1,3-diene + HBr: allylic cation",
        "[CH2:1]=[CH:2][CH:3]=[CH2:4]",
        [St([A(('b', 1, 2), ('nb', 1, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5)], "HBr", add=HB, expect="C[CH+]C=C.[Br-]"),
         St(A(('b', 3, 4), ('nb', 3, 2), 0.5), "", kind="res", expect="CC=C[CH2+].[Br-]")],
        "CC=C[CH2+].[Br-]",
        "Protonation at the terminal carbon is preferred because the resulting cation is allylic (two contributors). Br<sup>−</sup> can attack C-2 (1,2-adduct, formed faster at 0 °C – kinetic) or C-4 (1,4-adduct, more stable – thermodynamic); see Part 9."))
    c.append(ex("2.C9", "Vinylcyclopropane + H<sup>+</sup>",
        "[CH2:1]=[CH:2][CH:3]1[CH2:4][CH2:5]1",
        [St(A(('b', 1, 2), ('nb', 1, 90), 0.5), "H^+", add=HP, expect="C[CH+]C1CC1")],
        "C[CH+]C1CC1",
        "A cyclopropylcarbinyl cation results, strongly stabilised by the neighbouring C–C σ bonds of the ring (bisected conformation, Part 5.5): vinylcyclopropanes protonate faster than simple 1,1-disubstituted alkenes."))
    c.append(ex("2.C10", "Cyclohexene + MeSCl: thiiranium ion",
        "[CH:1]1=[CH:2][CH2:3][CH2:4][CH2:5][CH2:6]1",
        [St([A(('b', 1, 2), ('nb', 1, 91), 0.5), A(('b', 91, 90), ('lp', 90), 0.5), A(('lp', 91), ('nb', 91, 2), 0.6)], "MeSCl", add="[CH3:92][S:91][Cl:90]", expect="C[S+]1C2CCCCC2 1.[Cl-]".replace(" ", ""))],
        None,
        "Sulfur's lone pair bridges the two carbons exactly as bromine does. Episulfonium ions give <i>anti</i>-addition products and can open at either carbon (Markovnikov or anti-Markovnikov, depending on substitution and solvent)."))
    c.append(ex("2.C11", "Propyne + HBr: vinyl cation",
        "[CH3:1][C:2]#[CH:3]",
        [St([A(('b', 2, 3), ('nb', 3, 90), 0.5), A(('b', 90, 91), ('lp', 91), 0.5)], "HBr", add=HB, expect="C[C+]=C.[Br-]")],
        "C[C+]=C.[Br-]",
        "A secondary vinyl cation (linear, empty p in the alkene plane) is much less stable than a secondary alkyl cation, so alkynes are protonated more slowly than alkenes; with HX the addition is often termolecular (AdE3), avoiding a free vinyl cation."))
    c.append(ex("2.C12", "Acetone + H<sup>+</sup>: oxocarbenium (protonated carbonyl)",
        "[CH3:1][C:2](=[O:3])[CH3:4]",
        [St(A(('lp', 3), ('nb', 3, 90), 0.5), "H^+", add=HP, expect="CC(C)=[OH+]"),
         St(A(('b', 2, 3), ('lp', 3), -0.5), "", kind="res", expect="C[C+](C)O")],
        "C[C+](C)O",
        "A protonated carbonyl is a hydroxy-carbenium ion – a tertiary cation stabilised by the +M effect of OH. Resonance structure (right) shows why the carbon becomes electrophilic; acid-catalysed additions to C=O all start here."))
    c.append(ex("2.C13", "2-Methylpropene + t-Bu<sup>+</sup>: C–C bond formation (cationic dimerisation)",
        "[CH2:1]=[C:2]([CH3:3])[CH3:4]",
        [St(A(('b', 1, 2), ('nb', 1, 11), 0.5), "", add="[CH3:10][C+:11]([CH3:12])[CH3:13]", expect="CC(C)(C)C[C+](C)C")],
        "CC(C)(C)C[C+](C)C",
        "A carbocation is itself an electrophile for alkenes. The new tertiary cation can lose H<sup>+</sup> to give the diisobutylene isomers (2,4,4-trimethylpent-1-ene and -2-ene) or add a further isobutene (oligomerisation, polyisobutylene)."))
    B.grid(c, 2)
