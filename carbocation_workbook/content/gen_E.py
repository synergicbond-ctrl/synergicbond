from .common import *


def Mes(a):
    return (f"[C:{a}]1=[C:{a+1}]([CH3:{a+6}])[CH:{a+2}]=[C:{a+3}]([CH3:{a+7}])[CH:{a+4}]=[C:{a+5}]1[CH3:{a+8}]")


def build(B):
    B.h2("2.E  Other routes: diazonium ions, Lewis acids, hydride abstraction, acid-mediated ionisations")
    B.p("Some cations are produced neither from an alcohol/halide nor from an alkene. The common feature is a very good leaving group (N<sub>2</sub>, H<sub>2</sub>, H<sub>2</sub>O, ROH) or a very strong electrophile (H<sup>+</sup> in superacid, Ph<sub>3</sub>C<sup>+</sup>, AlCl<sub>3</sub>). "
        "Radical and concerted pathways are <i>not</i> counted here: e.g. the Hofmann–Löffler or Kolbe reactions are radical, and Tiffeneau–Demjanov, Curtius and Hofmann reactions proceed with migration concerted with loss of N<sub>2</sub> (no free cation).")
    c = []
    c.append(ex("2.E1", "n-Propylamine + HNO<sub>2</sub> (via n-propyldiazonium)",
        "[CH3:1][CH:2]([H:6])[CH2:3][N+:4]#[N:5]",
        [St([A(('b', 3, 4), ('lp', 4), -0.5), A(('b', 2, 6), ('nb', 6, 3), 0.6)], "−N_2, 1,2-H", drop=[4, 5], expect="C[CH+]C")],
        "C[CH+]C",
        "Alkyldiazonium ions are the most reactive leaving-group systems known (N<sub>2</sub>, a thermodynamically very stable molecule). Even a primary one gives a mixture in which the 2-propyl derivatives (2-propanol, 2-chloropropane) outweigh the 1-propyl ones, together with propene, because the departing N<sub>2</sub> is pushed out by a neighbouring migrating H or alkyl group. The result is a classic reason why nitrous acid deamination of primary amines is synthetically useless."))
    c.append(ex("2.E2", "Benzenediazonium ion in hot water: aryl cation",
        "[N:8]#[N+:7]" + Ph(1),
        [St(A(('b', 1, 7), ('lp', 7), -0.5), "Δ, −N_2", drop=[7, 8])],
        None,
        "The aryl cation has its empty orbital in the plane of the ring (an sp<sup>2</sup> σ orbital orthogonal to the π system), so it gets no resonance help and is among the least stable carbocations; it is formed only because N<sub>2</sub> is such a good leaving group. It reacts with the nearest nucleophile (H<sub>2</sub>O → phenol), even F<sup>−</sup> in the Balz–Schiemann reaction."))
    c.append(ex("2.E3", "n-Propyl chloride + AlCl<sub>3</sub>: 1,2-hydride shift during ionisation",
        "[CH3:1][CH:2]([H:6])[CH2:3][Cl:4]",
        [St(A(('lp', 4), ('nb', 4, 94), 0.5), "AlCl_3", add="[Cl:93][Al:94]([Cl:95])[Cl:96]"),
         St([A(('b', 3, 4), ('lp', 4), -0.5), A(('b', 2, 6), ('nb', 6, 3), 0.6)], "")],
        None,
        "The polarised complex R–Cl→AlCl<sub>3</sub> transfers a hydride to the carbon that is losing Cl<sup>−</sup>: isopropyl cation (as an ion pair with AlCl<sub>4</sub><sup>−</sup>). This is why benzene + n-propyl chloride/AlCl<sub>3</sub> gives cumene, not n-propylbenzene."))
    c.append(ex("2.E4", "Acetyl chloride + AlCl<sub>3</sub>: acylium ion",
        "[CH3:1][C:2](=[O:3])[Cl:4]",
        [St(A(('lp', 4), ('nb', 4, 94), 0.5), "AlCl_3", add="[Cl:93][Al:94]([Cl:95])[Cl:96]"),
         St([A(('b', 2, 4), ('lp', 4), -0.5), A(('lp', 3), ('nb', 3, 2), 0.5)], "", expect="CC#[O+].Cl[Al-](Cl)(Cl)Cl")],
        "CC#[O+].Cl[Al-](Cl)(Cl)Cl",
        "The oxygen lone pair drives out chloride and forms a third C–O bond; every atom in CH<sub>3</sub>–C≡O<sup>+</sup> has an octet. Acylium ions are linear (sp-hybridised C) and do <b>not</b> rearrange, so Friedel–Crafts acylation gives unrearranged ketones; the ketone product deactivates the ring, which is why acylation (unlike alkylation) stops at one substitution."))
    c.append(ex("2.E5", "Hydride abstraction: cycloheptatriene + Ph<sub>3</sub>C<sup>+</sup> BF<sub>4</sub><sup>−</sup>",
        "[CH:1]1([H:8])[CH:2]=[CH:3][CH:4]=[CH:5][CH:6]=[CH:7]1",
        [St(A(('b', 1, 8), ('nb', 8, 20), 0.5), "", add="[C+:20](" + Ph(21) + ")(" + Ph(27) + ")" + Ph(33), expect="C1=CC=C[CH+]C=C1.C(c1ccccc1)(c1ccccc1)c1ccccc1")],
        "C1=CC=C[CH+]C=C1.C(c1ccccc1)(c1ccccc1)c1ccccc1",
        "The C–H σ pair of the sp<sup>3</sup> CH<sub>2</sub> transfers as H<sup>−</sup> to the trityl cation (an equilibrium that lies far to the right because the product is the aromatic 6π tropylium ion, pK<sub>R+</sub> ≈ +4.7, against −6.6 for trityl). The seven-membered ring is planar, all seven C–C bonds are equal, and the positive charge is shared equally."))
    c.append(ex("2.E6", "Isobutane in FSO<sub>3</sub>H·SbF<sub>5</sub> (magic acid): σ-protonation then loss of H<sub>2</sub>",
        "[CH3:1][C:2]([H:5])([CH3:3])[CH3:4]",
        [St(A(('b', 2, 5), ('nb', 5, 90), 0.5), "H^+ (superacid)", add=HP, expect="C[C+](C)C.[H][H]")],
        "C[C+](C)C.[H][H]",
        "A C–H σ bond is a very weak nucleophile, but the proton of a superacid attacks it, forming a three-centre two-electron bond (a <i>carbonium</i> ion, R<sub>3</sub>C(H<sub>2</sub>)<sup>+</sup>, see 1.4). Loss of H<sub>2</sub> leaves the carbenium ion. This is the basis of H/D exchange of alkanes in superacid and of alkane isomerisation (Olah)."))
    c.append(ex("2.E7", "Acid hydrolysis of acetaldehyde dimethyl acetal",
        "[CH3:1][CH:2]([O:3][CH3:4])[O:5][CH3:6]",
        [St(A(('lp', 5), ('nb', 5, 90), 0.5), "H^+", add=HP),
         St([A(('lp', 3), ('nb', 3, 2), 0.5), A(('b', 2, 5), ('lp', 5), -0.5)], "−CH_3OH", expect="CC=[O+]C.CO")],
        "CC=[O+]C.CO",
        "Protonation of one OMe turns it into a good leaving group (CH<sub>3</sub>OH); the lone pair of the other oxygen pushes it out. The oxocarbenium ion is the intermediate that water attacks in the rate-limiting or following step: acetals are stable to base but labile to dilute acid."))
    c.append(ex("2.E8", "Acid-catalysed opening of 2,2-dimethyloxirane",
        "[CH3:1][C:2]1([CH3:3])[CH2:4][O:5]1",
        [St(A(('lp', 5), ('nb', 5, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "", expect="C[C+](C)CO")],
        "C[C+](C)CO",
        "Protonation makes the oxirane a good electrophile; the C–O bond to the <i>more substituted</i> carbon is longer and weaker and breaks first, so the nucleophile (H<sub>2</sub>O, ROH, X<sup>−</sup>) ends up on the tertiary carbon (contrast base-promoted opening, S<sub>N</sub>2 at the less hindered CH<sub>2</sub>). The true transition state is a loose S<sub>N</sub>2 with S<sub>N</sub>1 character (‘borderline’); a full tertiary cation is shown to indicate the charge distribution."))
    c.append(ex("2.E9", "2,4,6-Trimethylbenzoic acid in conc. H<sub>2</sub>SO<sub>4</sub>: A<sub>AC</sub>1 acylium",
        "[C:1](=[O:2])([OH:3])" + Mes(11),
        [St(A(('lp', 3), ('nb', 3, 90), 0.5), "H^+", add=HP),
         St([A(('b', 1, 3), ('lp', 3), -0.5), A(('lp', 2), ('nb', 2, 1), 0.5)], "−H_2O", drop=[3])],
        None,
        "Ordinarily esterification/hydrolysis of benzoic acids goes by addition–elimination (A<sub>AC</sub>2) through a tetrahedral intermediate. The two ortho methyl groups block nucleophilic addition to C=O, so the reaction switches to ionisation to a mesitoyl acylium ion, which is linear and so relieves the steric clash. Dissolving in H<sub>2</sub>SO<sub>4</sub> and pouring into alcohol gives the ester in high yield (Newman)."))
    c.append(ex("2.E10", "Ritter reaction: nitrile + tert-butyl cation",
        "[CH3:1][C:2]#[N:3]",
        [St(A(('lp', 3), ('nb', 3, 11), 0.5), "", add="[CH3:10][C+:11]([CH3:12])[CH3:13]", expect="CC#[N+]C(C)(C)C")],
        "CC#[N+]C(C)(C)C",
        "A nitrile nitrogen lone pair (sp-hybridised, weakly basic but unhindered) captures the cation: the nitrilium ion R–C≡N<sup>+</sup>–R′ is attacked by water at carbon to give an N-tert-butylamide. Only cations that form readily (tertiary, benzylic) work."))
    c.append(ex("2.E11", "Methyl vinyl ether + H<sup>+</sup>: protonation of an enol ether",
        "[CH2:1]=[CH:2][O:3][CH3:4]",
        [St(A(('b', 1, 2), ('nb', 1, 90), 0.5), "H^+", add=HP, expect="C[CH+]OC"),
         St(A(('lp', 3), ('nb', 3, 2), 0.5), "", kind="res", expect="CC=[O+]C")],
        "CC=[O+]C",
        "Protonation of the β-carbon gives a cation that is immediately an oxocarbenium ion because the α-oxygen lone pair donates into the empty p orbital. Enol ethers are hydrolysed orders of magnitude faster than simple alkenes are hydrated for this reason (the rate-limiting step is protonation at carbon)."))
    c.append(ex("2.E12", "Benzene + H<sup>+</sup> (superacid): the arenium (Wheland) ion",
        "[CH:1]1=[CH:2][CH:3]=[CH:4][CH:5]=[CH:6]1",
        [St(A(('b', 1, 2), ('nb', 1, 90), 0.5), "H^+", add=HP),
         St(A(('b', 3, 4), ('nb', 3, 2), 0.5), "", kind="res"),
         St(A(('b', 5, 6), ('nb', 5, 4), 0.5), "", kind="res")],
        None,
        "C<sub>6</sub>H<sub>7</sub><sup>+</sup> is the intermediate in every electrophilic aromatic substitution. The positive charge is delocalised over the ortho and para carbons only (three contributors; the meta carbons carry none); the sp<sup>3</sup> CH<sub>2</sub> breaks the aromatic ring, which is why this step costs so much energy and is rate-determining."))
    B.grid(c, 2)
