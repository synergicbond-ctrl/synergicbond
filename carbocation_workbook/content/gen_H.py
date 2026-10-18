from .common import *

SBCL5 = "[Sb:94]([Cl:95])([Cl:96])([Cl:97])([Cl:98])[Cl:99]"


def build(B):
    B.h2("2.H  Lewis-acid-assisted ionisation, ether cleavage, and aromatic carbocations")
    B.p("<b>Why a Lewis acid works.</b> Ionisation R–X → R<sup>+</sup> + X<sup>−</sup> is the rate-determining, <i>endothermic</i> step (heterolysis); the capture of R<sup>+</sup> by a nucleophile is fast and exothermic. "
        "A halide, ether or alcohol that does not ionise alone can be pushed over the barrier by an electrophile that binds the leaving group: H<sup>+</sup> (ROH → ROH<sub>2</sub><sup>+</sup>), Ag<sup>+</sup> (→ AgX), or a Lewis acid. "
        "Neutral alcohols do not react with NaI (HO<sup>−</sup> is a poor leaving group and I<sup>−</sup> is no electrophile) but do react with HI, because H<sup>+</sup> first converts OH into the good leaving group H<sub>2</sub>O. "
        "The rate of R–OH + HX follows the cation stability, 3° &gt; 2° &gt; 1°.")
    B.table(["Class of leaving group", "Examples", "Behaviour"],
        [["Best (leave spontaneously)", "R–N<sub>2</sub><sup>+</sup> (N<sub>2</sub>), R–OH<sub>2</sub><sup>+</sup> (H<sub>2</sub>O), R–O<sup>+</sup>R<sub>2</sub>, R–S<sup>+</sup>R<sub>2</sub>, triflate", "ionise at room temperature or below when the cation is reasonably stable"],
         ["Moderate (need help from a Lewis acid/electrophile, or a polar H-bonding solvent)", "R–X (X = Cl, Br, I), R–OTs, R–OCOR, ethers R–OR′ after protonation", "Ag<sup>+</sup>, BF<sub>3</sub>, BCl<sub>3</sub>, ZnX<sub>2</sub>, AlX<sub>3</sub>, SbCl<sub>5</sub>/SbF<sub>5</sub>, H<sup>+</sup>: the electrophile binds the leaving group, the nucleophile (if any) then attacks the cation"],
         ["Poor (do not leave)", "R–H, R–R, R–OH, R–OR, R–NH<sub>2</sub>", "cannot be ionised without prior conversion (protonation, sulfonylation, diazotisation)"]])
    B.table(["Lewis acid / electrophile", "Reaction with R–X", "Why it works"],
        [["Ag<sup>+</sup>", "R–X + Ag<sup>+</sup> → R<sup>+</sup> + AgX↓", "very insoluble AgX drives the ionisation (halophilic)"],
         ["BF<sub>3</sub>, BCl<sub>3</sub>, BeX<sub>2</sub>, ZnX<sub>2</sub>, AlX<sub>3</sub>", "R–X + MX<sub>n</sub> → R<sup>+</sup> + [X–MX<sub>n</sub>]<sup>−</sup>", "electron-deficient (hypovalent) centre accepts a halide lone pair into an empty orbital"],
         ["SbCl<sub>5</sub>, SbF<sub>5</sub>", "R–X + SbCl<sub>5</sub> → R<sup>+</sup> + SbCl<sub>6</sub><sup>−</sup> (SbF<sub>6</sub><sup>−</sup>)", "coordination number expands from 5 to 6: a strong Lewis acid giving a very weakly nucleophilic counterion"]])
    c = []
    c.append(ex("2.H1", "tert-Butyl fluoride + BF<sub>3</sub>: even the strongest C–X bond is ionised",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[F:5]",
        [St(A(('lp', 5), ('nb', 5, 94), 0.5), "BF_3", add="[B:94]([F:95])([F:96])[F:97]"),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "", expect="C[C+](C)C.F[B-](F)(F)F")],
        "C[C+](C)C.F[B-](F)(F)F",
        "The fluorine lone pair fills the empty p orbital of boron; the C–F bond then ionises to the tert-butyl cation and tetrafluoroborate. Alkyl fluorides, inert to solvolysis, are therefore the most Lewis-acid-sensitive halides because of the strong B–F bond that is formed."))
    stS = chem.stereo("[CH3:1][CH:2]([Cl:3])" + Ph(4), {2: 'S'})
    c.append(ex("2.H2", "(S)-1-Phenylethyl chloride + SbCl<sub>5</sub>: planar cation, loss of optical activity",
        stS,
        [St([A(('lp', 3), ('nb', 3, 94), 0.5), A(('b', 2, 3), ('lp', 3), -0.5)], "SbCl_5", add=SBCL5)],
        None,
        "The cationic carbon is sp<sup>2</sup> and planar (empty p orbital), so the single stereocentre of the reactant is lost: the intermediate is achiral and attack by a nucleophile from either face gives racemic product – the same reasoning that explains racemisation in S<sub>N</sub>1. Chloride is held by SbCl<sub>5</sub> as SbCl<sub>6</sub><sup>−</sup> and cannot return."))
    c.append(ex("2.H3", "Methyl tert-butyl ether + HI: S<sub>N</sub>1 cleavage of an ether",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[O:5][CH3:6]",
        [St(A(('lp', 5), ('nb', 5, 90), 0.5), "H^+ (HI)", add=HP, expect="CC(C)(C)[OH+]C"),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "slow", expect="C[C+](C)C.CO"),
         St(A(('lp', 92), ('nb', 92, 2), 0.5), "fast", add="[I-:92]", expect="CC(C)(C)I.CO")],
        "CC(C)(C)I.CO",
        "Protonation makes the ether oxygen a good leaving group (CH<sub>3</sub>OH), and the C–O bond that breaks is the one that gives the <i>more stable cation</i> (tertiary, not methyl): methanol and t-BuI, not CH<sub>3</sub>I and t-BuOH. With a primary alkyl and a methyl group (e.g. CH<sub>3</sub>OCH<sub>2</sub>CH<sub>3</sub>) cleavage goes by S<sub>N</sub>2 at the less hindered carbon instead (CH<sub>3</sub>I + EtOH)."))
    c.append(ex("2.H4", "3-Chlorocyclopropene + SbCl<sub>5</sub>: the cyclopropenium cation (aromatic, 2π)",
        "[Cl:5][CH:1]1[CH:2]=[CH:3]1",
        [St([A(('lp', 5), ('nb', 5, 94), 0.5), A(('b', 1, 5), ('lp', 5), -0.5)], "SbCl_5", add=SBCL5)],
        None,
        "Ionisation gives C<sub>3</sub>H<sub>3</sub><sup>+</sup>, a planar ring of three p orbitals holding two π electrons (4n+2, n = 0): aromatic, and therefore formed from an otherwise hopelessly strained <i>cyclopropyl</i> cation. The positive charge is shared equally by the three carbons (D<sub>3h</sub>)."))
    c.append(ex("2.H5", "7-Chlorocycloheptatriene + SbCl<sub>5</sub>: the tropylium cation (aromatic, 6π)",
        "[Cl:5][CH:1]1[CH:2]=[CH:3][CH:4]=[CH:6][CH:7]=[CH:8]1",
        [St([A(('lp', 5), ('nb', 5, 94), 0.5), A(('b', 1, 5), ('lp', 5), -0.5)], "SbCl_5", add=SBCL5)],
        None,
        "The sp<sup>3</sup> carbon becomes sp<sup>2</sup> and completes a cycle of seven p orbitals with six π electrons. Tropylium chloride and bromide are in fact ionic salts (water-soluble solids, not covalent alkyl halides), the clearest example that aromaticity can make a ‘halide’ ionic."))
    c.append(ex("2.H6", "3,4-Dichlorocyclobutene + 2 SbCl<sub>5</sub>: the cyclobutadiene dication (aromatic, 2π)",
        "[Cl:5][CH:1]1[CH:2]([Cl:6])[CH:3]=[CH:4]1",
        [St([A(('lp', 5), ('nb', 5, 94), 0.5), A(('b', 1, 5), ('lp', 5), -0.5)], "SbCl_5", add=SBCL5),
         St([A(('lp', 6), ('nb', 6, 84), 0.5), A(('b', 2, 6), ('lp', 6), -0.5)], "2nd SbCl_5", add="[Sb:84]([Cl:85])([Cl:86])([Cl:87])([Cl:88])[Cl:89]")],
        None,
        "Removal of two chloride ions leaves C<sub>4</sub>H<sub>4</sub><sup>2+</sup>, a planar ring of four p orbitals with only <b>two</b> π electrons (4n+2, n = 0): the dication is aromatic, whereas neutral cyclobutadiene (4π) is antiaromatic. This is why two equivalents of SbCl<sub>5</sub> ionise both C–Cl bonds. The drawing localises the π bond and the two cationic carbons; the real ion is delocalised over all four carbons."))
    c.append(ex("2.H7", "4-Chloro-4H-pyran + AlCl<sub>3</sub>: the pyrylium cation (aromatic, 6π, O<sup>+</sup>)",
        "[Cl:5][CH:4]1[CH:3]=[CH:2][O:1][CH:6]=[CH:7]1",
        [St([A(('lp', 5), ('nb', 5, 94), 0.5), A(('b', 4, 5), ('lp', 5), -0.5)], "AlCl_3", add="[Cl:93][Al:94]([Cl:95])[Cl:96]"),
         St(A(('b', 2, 3), ('nb', 3, 4), 0.5), "", kind="res"),
         St(A(('lp', 1), ('nb', 1, 2), 0.5), "", kind="res")],
        None,
        "Loss of chloride from C-4 gives a cation conjugated with the C=C–O unit; two further electron shifts bring the charge onto oxygen, whose lone pair completes the six-π-electron ring: pyrylium (C<sub>5</sub>H<sub>5</sub>O<sup>+</sup>), an aromatic oxonium ion. The oxygen carries the formal + charge but the carbons 2, 4 and 6 carry most of the electrophilicity."))
    # failure case
    f1 = Frag("[Cl:1][CH:2]1[CH:3]=[CH:4][CH:5]=[CH:6]1", label="5-chlorocyclopenta-1,3-diene")
    f2 = Frag("[CH+:2]1[CH:3]=[CH:4][CH:5]=[CH:6]1", label="cyclopentadienyl cation (4π, antiaromatic)")
    svg, w, h = scheme([f1, Arrow('rxn', 'AlCl_3  ✗  no ionisation'), f2], width=680)
    c.append(cell("2.H8", "…and where it fails: 5-chlorocyclopentadiene + AlCl<sub>3</sub>", dict(svg=svg, w=w, h=h),
        "Ionisation would give the cyclopentadienyl cation, a planar cycle of five p orbitals with four π electrons (4n): antiaromatic and so unstable (computed ground state: triplet) that 5-chlorocyclopentadiene does <i>not</i> ionise with Lewis acids, even though a simple secondary allylic cation of similar substitution would. 3,4-Dichlorocyclobutene (2.H6) and 3-chlorocyclopropene (2.H4) ionise <i>because</i> the cations are (4n+2) aromatic. <b>Rule: electron count decides.</b>", span=2))
    B.grid(c, 2)
