from .common import *

MES = "[C:{a}]1=[C:{b}]([CH3:{c}])[CH:{d}]=[C:{e}]([CH3:{f}])[CH:{g}]=[C:{h}]1[CH3:{i}]"


TRANS_BAC = chem.stereo("[Br:1][CH:2]1[CH2:3][CH2:4][CH2:5][CH2:6][CH:7]1[O:8][C:9](=[O:10])[CH3:11]", {2: 'R', 7: 'R'})
_f = chem.faces(TRANS_BAC, [2, 3, 4, 5, 6, 7], [(2, 1), (7, 8)])
assert _f[0] != _f[1], "B11 must be trans"


CIS_ACOX = None
for _w in ({2: 'R', 7: 'S'}, {2: 'S', 7: 'R'}):
    try:
        _c = chem.stereo("[CH3:11][C:9]1=[O+:10][CH:2]2[CH2:3][CH2:4][CH2:5][CH2:6][CH:7]2[O:8]1.[Br-:1]", _w)
        _f2 = chem.faces(_c, [2, 3, 4, 5, 6, 7], [(2, 10), (7, 8)])
        if _f2[0] == _f2[1]:
            CIS_ACOX = _c
            break
    except ValueError:
        pass
assert CIS_ACOX, "cis-fused acetoxonium not found"


def build(B):
    B.h2("2.B  Carbocations from alkyl halides and sulfonates (ionisation)")
    B.p("Heterolysis of a C–X bond gives R<sup>+</sup> X<sup>−</sup>; in solution the first species is an <i>ion pair</i> (contact, then solvent-separated) and only later free ions. "
        "Ionisation is helped by (i) a good leaving group (I<sup>−</sup> ≈ Br<sup>−</sup> &gt; Cl<sup>−</sup> ≫ F<sup>−</sup>; sulfonates better still), (ii) a strongly ionising, hydrogen-bond-donating solvent, "
        "(iii) a halophilic Lewis acid (Ag<sup>+</sup>, AlCl<sub>3</sub>, SbF<sub>5</sub>) and (iv) a cation stabilised by hyperconjugation, resonance or neighbouring-group bridging. "
        "Each example below is checked atom-by-atom: arrows start at the electron pair that moves and end where it comes to rest.")
    c = []
    c.append(ex("2.B1", "tert-Butyl chloride in water/ethanol: ion pair",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[Cl:5]",
        [St(A(('b', 2, 5), ('lp', 5), -0.5), "slow", expect="C[C+](C)C.[Cl-]")],
        "C[C+](C)C.[Cl-]",
        "The rate-determining step: the σ(C–Cl) pair leaves with chlorine. In a solvent of high dielectric constant and H-bond donor ability (water, TFE, HCO<sub>2</sub>H) the ion pair is stabilised and ionisation is faster by roughly five orders of magnitude than in ethanol (the Grunwald–Winstein Y scale is defined on exactly this substrate)."))
    c.append(ex("2.B2", "tert-Butyl bromide + AgNO<sub>3</sub> (Ag<sup>+</sup> assistance)",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[Br:5]",
        [St(A(('lp', 5), ('nb', 5, 94), 0.5), "Ag^+", add="[Ag+:94]"),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "−AgBr", expect="C[C+](C)C.Br[Ag]")],
        "C[C+](C)C.Br[Ag]",
        "Ag<sup>+</sup> accepts a bromine lone pair (σ-complex), so the leaving group is effectively AgBr, which precipitates. This is why silver ion makes even primary neopentyl and secondary halides ionise – and rearrange."))
    c.append(ex("2.B3", "Trityl chloride in liquid SO<sub>2</sub>",
        "[Cl:1][C:2](" + Ph(3) + ")(" + Ph(9) + ")" + Ph(15),
        [St(A(('b', 2, 1), ('lp', 1), -0.5), "SO_2 (l)")],
        None,
        "Ph<sub>3</sub>CCl is a covalent solid but ionises in SO<sub>2</sub> (conducting yellow solution). The cation is stabilised by three aryl groups; compare Ph<sub>2</sub>CHCl (ionises in the same solvents much more slowly) and PhCH<sub>2</sub>Cl (barely)."))
    c.append(ex("2.B4", "3-Chloro-3-methylbut-1-ene ⇌ prenyl chloride: ion pair and allylic transposition",
        "[CH2:1]=[CH:2][C:3]([CH3:4])([CH3:5])[Cl:6]",
        [St(A(('b', 3, 6), ('lp', 6), -0.5), "ionise"),
         St(A(('b', 1, 2), ('nb', 2, 3), 0.5), "", kind="res"),
         St(A(('lp', 6), ('nb', 6, 1), 0.4), "recombine", expect="CC(C)=CCCl")],
        "CC(C)=CCCl",
        "The same allyl cation is formed from either isomer. Chloride (kept nearby as an ion pair) returns to the less hindered primary terminus, giving the more substituted, thermodynamically more stable alkene (1,3-shift, S<sub>N</sub>i′ / S<sub>N</sub>1′)."))
    c.append(ex("2.B5", "1-Bromoadamantane in 80 % aqueous ethanol (bridgehead S<sub>N</sub>1)",
        "[Br:1][C:2]12[CH2:3][CH:4]3[CH2:5][CH:6]([CH2:7][CH:8]([CH2:9]1)[CH2:10]3)[CH2:11]2",
        [St(A(('b', 2, 1), ('lp', 1), -0.5), "slow"),
         St(A(('lp', 92), ('nb', 92, 2), 0.4), "H_2O", add="[OH2:92]", drop=[1])],
        None,
        "S<sub>N</sub>2 is impossible at a bridgehead (no backside access) yet 1-adamantyl bromide solvolyses readily, because the adamantyl cage is nearly strain-free in the planar-ish cation. 1-Bromobicyclo[2.2.1]heptane, in contrast, is essentially inert (see 5.11)."))
    c.append(ex("2.B6", "tert-Butyl chloride + SbF<sub>5</sub> in SO<sub>2</sub>ClF, −78 °C (Olah)",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[Cl:5]",
        [St(A(('lp', 5), ('nb', 5, 94), 0.5), "SbF_5", add="[Sb:94]([F:95])([F:96])([F:97])([F:98])[F:99]"),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "")],
        None,
        "With a very strong halide acceptor and a non-nucleophilic medium the ion pair persists indefinitely: (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> SbF<sub>5</sub>Cl<sup>−</sup> was observed by NMR (a single <sup>1</sup>H signal, the nine hydrogens equivalent by rapid methyl rotation), proving that a tertiary alkyl cation can be a real, long-lived species."))
    c.append(ex("2.B7", "Neopentyl bromide + AgNO<sub>3</sub> (concerted ionisation–methyl shift)",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[CH2:5][Br:6]",
        [St(A(('lp', 6), ('nb', 6, 94), 0.5), "Ag^+", add="[Ag+:94]"),
         St([A(('b', 5, 6), ('lp', 6), -0.5), A(('b', 2, 3), ('nb', 3, 5), 0.6)], "−AgBr", expect="CC[C+](C)C.Br[Ag]")],
        "CC[C+](C)C.Br[Ag]",
        "Neopentyl halides cannot undergo S<sub>N</sub>2 (β-branching blocks backside attack) nor form a primary cation: when ionisation is forced, the anti-periplanar C–CH<sub>3</sub> bond migrates as bromide leaves."))
    c.append(ex("2.B8", "Cyclopropyl bromide + Ag<sup>+</sup>: ionisation with disrotatory ring opening",
        "[Br:1][CH:2]1[CH2:3][CH2:4]1",
        [St(A(('lp', 1), ('nb', 1, 94), 0.5), "Ag^+", add="[Ag+:94]"),
         St([A(('b', 2, 1), ('lp', 1), -0.5), A(('b', 3, 4), ('nb', 3, 2), 0.6)], "−AgBr", expect="C=C[CH2+].Br[Ag]")],
        "C=C[CH2+].Br[Ag]",
        "A cyclopropyl cation (sp<sup>2</sup> carbon in a 60° ring) is so strained that it is never formed as such: the C–C bond opposite the leaving group opens as the halide departs, giving the allyl cation (disrotatory, Woodward–Hoffmann, 2π electrons). Cyclopropyl halides solvolyse far more slowly than comparable secondary halides, and only with the assistance of the ring-opening."))
    c.append(ex("2.B9", "Chloromethyl methyl ether (MOM-Cl)",
        "[CH3:1][O:2][CH2:3][Cl:4]",
        [St([A(('lp', 2), ('nb', 2, 3), 0.5), A(('b', 3, 4), ('lp', 4), -0.5)], "", expect="C[O+]=C.[Cl-]")],
        "C[O+]=C.[Cl-]",
        "An α-heteroatom lone pair pushes out the halide: the 'carbocation' is really an oxocarbenium ion CH<sub>2</sub>=O<sup>+</sup>CH<sub>3</sub> in which every atom has an octet. α-Chloroethers ionise many orders of magnitude faster than simple alkyl chlorides of the same substitution."))
    c.append(ex("2.B10", "Sulfur mustard, ClCH<sub>2</sub>CH<sub>2</sub>SCH<sub>2</sub>CH<sub>2</sub>Cl: neighbouring-group participation",
        "[Cl:1][CH2:2][CH2:3][S:4][CH2:5][CH2:6][Cl:7]",
        [St([A(('lp', 4), ('nb', 4, 2), 0.5), A(('b', 2, 1), ('lp', 1), -0.5)], "", expect="ClCC[S+]1CC1.[Cl-]")],
        "ClCC[S+]1CC1.[Cl-]",
        "The β-sulfur displaces chloride intramolecularly (anchimeric assistance) to give a cyclic episulfonium (thiiranium) ion – a bridged cation in which charge sits mainly on sulfur and no open primary cation exists. It is a potent alkylating agent."))
    c.append(ex("2.B11", "trans-2-Bromocyclohexyl acetate: acetoxonium ion",
        TRANS_BAC,
        [St([A(('lp', 10), ('nb', 10, 2), 0.5), A(('b', 2, 1), ('lp', 1), -0.5)], "−Br^−", show=CIS_ACOX)],
        "CC1=[O+]C2CCCCC2O1.[Br-]",
        "Only the <i>trans</i> (diaxial-capable) isomer reacts fast: the carbonyl oxygen attacks C-2 from the side opposite to Br, giving a 1,3-dioxolan-2-ylium (acetoxonium) ion; positive charge is shared by both oxygens and the carbon. Opening by a nucleophile at C-2 gives <i>net retention</i> (two inversions)."))
    c.append(ex("2.B12", "tert-Butyl chloride + AlCl<sub>3</sub> (Friedel–Crafts alkylation)",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[Cl:5]",
        [St(A(('lp', 5), ('nb', 5, 94), 0.5), "AlCl_3", add="[Cl:93][Al:94]([Cl:95])[Cl:96]"),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "")],
        None,
        "AlCl<sub>3</sub> abstracts chloride to give t-Bu<sup>+</sup> AlCl<sub>4</sub><sup>−</sup>. With primary halides the complex R–Cl→AlCl<sub>3</sub> is itself the electrophile and may rearrange (see 2.E4)."))
    c.append(ex("2.B13", "1-(4-Methoxyphenyl)vinyl triflate in CF<sub>3</sub>CH<sub>2</sub>OH: vinyl cation",
        "[CH2:1]=[C:2]([O:3][S:4](=[O:5])(=[O:6])[C:7]([F:8])([F:9])[F:10])" + Ph(11, para="[O:17][CH3:18]"),
        [St(A(('b', 2, 3), ('lp', 3), -0.5), "TFE")],
        None,
        "Vinyl (alkenyl) cations are real, linear sp-hybridised species but are high in energy; they form only from excellent leaving groups (triflate) and require stabilisation by an α-aryl (here a p-anisyl +M donor) or an α-alkyl group. The empty p orbital lies in the plane of the alkene, orthogonal to the π system."))
    B.grid(c, 2)
