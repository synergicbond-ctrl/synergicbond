from .common import *
from .lg import S

OHm = "[OH-:90]"


def build(B):
    B.part("Part 8", "Carbanions: Structure, Generation, Stability and Reactions")
    B.p("A <b>carbanion</b> is a species in which a carbon atom carries a formal negative charge and an unshared pair of electrons: R<sub>3</sub>C<sup>−</sup>. "
        "It has <b>eight electrons</b> (three bond pairs + one lone pair), a filled octet, and is therefore a <i>nucleophile and a base</i> – the mirror image of the carbocation, whose carbon has a sextet and an empty orbital. "
        "Carbanions are almost never free in solution: they exist as ion pairs or aggregates with Li<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, MgX<sup>+</sup>, and the carbon–metal bond in RLi and RMgX is strongly polarised C<sup>δ−</sup>–M<sup>δ+</sup>, so that the organometallic reagent <i>reacts as if it were R<sup>−</sup></i>.")
    B.h2("8.1  Structure and shape")
    B.table(["Carbanion", "Carbon hybridisation", "Shape", "Where the lone pair sits", "Consequence"],
        [["CH<sub>3</sub><sup>−</sup>, R<sub>3</sub>C<sup>−</sup> (saturated)", "sp<sup>3</sup>", "pyramidal (like NH<sub>3</sub>), ≈ 107°", "sp<sup>3</sup> orbital (25 % s)", "inversion barrier very low, so a chiral carbanion racemises rapidly; the carbanion is a strong base"],
         ["Vinyl, phenyl, cyclopropyl", "sp<sup>2</sup>", "lone pair in an sp<sup>2</sup> orbital in the plane (vinyl is bent/configurationally stable)", "33 % s; <i>not</i> conjugated with the π system of the ring", "more stable than sp<sup>3</sup> carbanions by s-character; <b>no resonance</b> in phenyl anion (the lone pair is orthogonal to the π cloud)"],
         ["Acetylide R–C≡C<sup>−</sup>", "sp", "linear", "50 % s", "the most stable simple carbanion; pK<sub>a</sub> (C–H) ≈ 25"],
         ["Allyl, benzyl, enolate, nitronate, cyclopentadienide", "sp<sup>2</sup>, planar", "the carbanion carbon is planar; lone pair in a p orbital conjugated with π bonds", "p orbital (0 % s)", "delocalisation into the π system (resonance) is the main stabilising effect"]],
        widths=[20, 14, 22, 22, 22])
    B.p("<b>Stereochemistry.</b> An sp<sup>3</sup> carbanion inverts through a planar transition state in a few kcal mol<sup>−1</sup>, so an optically active centre at a carbanion carbon is lost (racemisation by enolisation of an α-chiral ketone in base is the standard example, 8.5). "
        "Inversion is hindered, and the carbanion is configurationally stable, when it is held in a ring (cyclopropyl; bridgehead) or when the lone pair is bound tightly to a metal (RLi at low temperature). "
        "A bridgehead carbanion cannot become planar, so it is destabilised by exactly the geometric factor that destabilises a bridgehead carbocation.")
    B.h2("8.2  Generation of carbanions")
    B.table(["Method", "Equation", "Comment"],
        [["Deprotonation of C–H by a base", "R<sub>3</sub>C–H + B<sup>−</sup> ⇌ R<sub>3</sub>C<sup>−</sup> + BH", "the base must be stronger than R<sub>3</sub>C<sup>−</sup>: compare pK<sub>a</sub>(C–H) and pK<sub>a</sub>(BH). Enolates (HO<sup>−</sup>, RO<sup>−</sup>, LDA), acetylides (NaNH<sub>2</sub>), cyclopentadienide, malonate"],
         ["Metal insertion into C–X", "R–X + 2 Li → R–Li + LiX;  R–X + Mg → R–MgX", "RMgX and RLi are the most important sources of ‘R<sup>−</sup>’ (Grignard 1900)"],
         ["Halogen–metal exchange", "R–Br + n-BuLi → R–Li + n-BuBr", "gives vinyl-, aryl-lithiums"],
         ["Decarboxylation", "R–COO<sup>−</sup> → R<sup>−</sup> + CO<sub>2</sub>", "soda lime (NaOH/CaO, Δ); easy when R<sup>−</sup> is stabilised (β-ketoacids, malonic acids, trichloroacetate, nitroacetate)"],
         ["Conjugate (Michael) addition", "Nu<sup>−</sup> + C=C–C=O → Nu–C–C<sup>−</sup>=C–O<sup>−</sup> (enolate)", "creates an enolate at the α-carbon"],
         ["Nucleophilic addition to C=O, C≡N", "R<sup>−</sup> + R′<sub>2</sub>C=O → R′<sub>2</sub>C(R)–O<sup>−</sup>", "the new anion is an alkoxide; carbon-centred carbanions form from CN<sup>−</sup> + aldehyde (cyanohydrin anion)"],
         ["α-Elimination", "HCCl<sub>3</sub> + HO<sup>−</sup> → <sup>−</sup>CCl<sub>3</sub> + H<sub>2</sub>O → :CCl<sub>2</sub> + Cl<sup>−</sup>", "carbanion then loses X<sup>−</sup> to give a carbene (Part 10)"],
         ["Electron transfer to a π system", "arene + Na → arene<sup>•−</sup> → carbanion on protonation (Birch)", "see the radical-ion section"],
         ["Fragmentation", "R–C(=O)–CR′<sub>3</sub> → ... (retro-Claisen, haloform cleavage of CCl<sub>3</sub>–C=O)", "CCl<sub>3</sub><sup>−</sup> is a good leaving group from the tetrahedral intermediate of the haloform reaction"]],
        widths=[24, 38, 38])
    B.h2("8.3  Acidity of C–H bonds and the stability of the conjugate carbanion")
    B.p("The stability of R<sup>−</sup> and the acidity of R–H are the same fact: the more stable the anion, the stronger the acid R–H. Approximate pK<sub>a</sub> values (recalled; aqueous or DMSO scale as customary for each class, so only the <i>order</i> should be used in an exam) are:")
    B.table(["C–H acid", "≈ pK<sub>a</sub>", "Why"],
        [["CH<sub>4</sub>, CH<sub>3</sub>CH<sub>3</sub>", "≈ 50", "sp<sup>3</sup> carbanion, no stabilisation"],
         ["CH<sub>2</sub>=CH–H", "≈ 44", "sp<sup>2</sup>: 33 % s"],
         ["C<sub>6</sub>H<sub>6</sub> (aryl C–H)", "≈ 43", "sp<sup>2</sup>, lone pair in the plane, no resonance"],
         ["CH<sub>2</sub>=CH–CH<sub>3</sub> (allylic)", "≈ 43", "allyl anion (two resonance forms)"],
         ["C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>", "≈ 41", "benzyl anion"],
         ["Ph<sub>2</sub>CH<sub>2</sub>, Ph<sub>3</sub>CH", "≈ 32, 31", "two and three phenyls delocalise the charge"],
         ["NH<sub>3</sub>", "≈ 38 (N–H)", "for comparison"],
         ["HC≡CH, RC≡CH", "≈ 25", "sp carbon (50 % s)"],
         ["CHCl<sub>3</sub>", "≈ 24", "−I of 3 Cl, polarisability of Cl"],
         ["CH<sub>3</sub>CO<sub>2</sub>Et (α-H)", "≈ 25", "ester enolate"],
         ["CH<sub>3</sub>COCH<sub>3</sub> (α-H)", "≈ 19–20", "enolate (charge on O)"],
         ["fluorene (C-9 H)", "≈ 22", "cyclopentadienide-type aromatic anion fused to two benzenes"],
         ["cyclopentadiene", "≈ 16", "aromatic C<sub>5</sub>H<sub>5</sub><sup>−</sup> (6π)"],
         ["CH<sub>2</sub>(COOEt)<sub>2</sub> (malonate)", "≈ 13", "two carbonyl groups"],
         ["CH<sub>3</sub>NO<sub>2</sub>", "≈ 10", "nitronate: charge on two oxygens"],
         ["CH<sub>3</sub>COCH<sub>2</sub>COCH<sub>3</sub>", "≈ 9", "two C=O, planar W-shaped anion"]],
        widths=[34, 18, 48])
    B.h2("8.4  Factors that stabilise a carbanion")
    B.table(["Factor", "Effect on carbanion stability", "Standard orders"],
        [["Hybridisation (s-character)", "more s-character holds the lone pair closer to the nucleus", "HC≡C<sup>−</sup> &gt; CH<sub>2</sub>=CH<sup>−</sup> ≈ C<sub>6</sub>H<sub>5</sub><sup>−</sup> &gt; CH<sub>3</sub>CH<sub>2</sub><sup>−</sup> (sp &gt; sp<sup>2</sup> &gt; sp<sup>3</sup>)"],
         ["Inductive effect", "−I groups stabilise, +I groups destabilise; alkyl groups are +I, so alkyl-substituted carbanions are less stable", "CH<sub>3</sub><sup>−</sup> &gt; 1° &gt; 2° &gt; 3° (in solution; in the gas phase the order is reversed by polarisability)"],
         ["Resonance (−M groups)", "delocalisation of the lone pair into C=O, C≡N, NO<sub>2</sub>, aryl", "<sup>−</sup>CH<sub>2</sub>NO<sub>2</sub> &gt; <sup>−</sup>CH<sub>2</sub>CHO &gt; <sup>−</sup>CH<sub>2</sub>COR &gt; <sup>−</sup>CH<sub>2</sub>COOR &gt; <sup>−</sup>CH<sub>2</sub>CN &gt; PhCH<sub>2</sub><sup>−</sup> (typical)"],
         ["Aromaticity", "aromatic anions are far more stable; antiaromatic ones far less", "C<sub>5</sub>H<sub>5</sub><sup>−</sup> (6π, aromatic) ≫ allyl; cyclopropenyl anion and cycloheptatrienyl anion (4nπ, antiaromatic) are very unstable"],
         ["Multiple resonance forms", "more delocalisation = more stable", "Ph<sub>3</sub>C<sup>−</sup> &gt; Ph<sub>2</sub>CH<sup>−</sup> &gt; PhCH<sub>2</sub><sup>−</sup>"],
         ["α-Heteroatom", "S, P, Si stabilise (polarisability, negative hyperconjugation); O and N destabilise (lone-pair/lone-pair repulsion)", "PhS–CH<sub>2</sub><sup>−</sup> &gt; CH<sub>3</sub>O–CH<sub>2</sub><sup>−</sup>; <sup>−</sup>CCl<sub>3</sub> &gt; <sup>−</sup>CF<sub>3</sub> (JEE key)"],
         ["Steric inhibition of resonance", "a group twisted out of the plane cannot delocalise the charge", "planar 2-nitropropane anion vs a twisted nitro-aryl anion"],
         ["Solvent and counter-ion", "polar aprotic solvents (DMSO, DMF, HMPA) leave the anion free and reactive; protic solvents H-bond to it", "relative acidities of C–H acids are measured in DMSO to avoid H-bonding"]],
        widths=[22, 38, 40])
    B.warn("<b>JEE pitfalls.</b> (i) The phenyl and vinyl carbanions get <i>no</i> resonance stabilisation (lone pair in the plane); their stabilisation is s-character only. "
           "(ii) Carbanion stability and carbocation stability follow <i>opposite</i> substituent rules: alkyl groups stabilise a cation and destabilise an anion; π-acceptors (NO<sub>2</sub>, C=O) stabilise an anion and destabilise a cation; π-donors (OMe, NR<sub>2</sub>) stabilise a cation and destabilise an anion. "
           "(iii) Basicity is the inverse of stability: the least stable carbanion is the strongest base. (iv) The comparison <sup>−</sup>CCl<sub>3</sub> vs <sup>−</sup>CF<sub>3</sub> is a trap: F is more electronegative, but its lone pairs repel the carbanion lone pair and F is a poor polarisable group, so the JEE key puts CCl<sub>3</sub><sup>−</sup> first.")
    B.h2("8.5  Mechanisms in which a carbanion is the key intermediate (arrow-validated)")
    c = []
    c.append(ex("8.1", "Acetone + HO<sup>−</sup>: the enolate ion (carbanion with resonance)",
        "[CH3:1][C:2](=[O:3])[CH:4]([H:5])[H:6]",
        [St([A(('lp', 90), ('nb', 90, 5), 0.5), A(('b', 4, 5), ('lp', 4), -0.5)], "HO^−", add=OHm, carbanions=[4], expect="CC(=O)[CH2-].O"),
         St([A(('lp', 4), ('nb', 4, 2), 0.5), A(('b', 2, 3), ('lp', 3), 0.5)], "", kind="res", carbanions=[4], expect="CC([O-])=C.O")],
        "CC([O-])=C.O",
        "Hydroxide removes the α-proton; the C–H electron pair becomes a lone pair on carbon (carbanion). The lone pair is conjugated with C=O and flows onto oxygen: the enolate is a hybrid of the two forms, with most of the negative charge on oxygen (that is why the α-H of acetone, pK<sub>a</sub> ≈ 20, is 10<sup>30</sup> times more acidic than that of ethane). The enolate is <i>ambident</i>: it reacts at C (alkylation, aldol) or at O (acylation, silylation)."))
    c.append(ex("8.2", "Aldol addition: enolate + acetone",
        "[CH3:1][C:2]([O-:3])=[CH2:4].[CH3:5][C:6](=[O:7])[CH3:8]",
        [St([A(('lp', 3), ('nb', 3, 2), 0.5), A(('b', 2, 4), ('nb', 4, 6), 0.5), A(('b', 6, 7), ('lp', 7), 0.5)], "", expect="CC(=O)CC(C)(C)[O-]")],
        "CC(=O)CC(C)(C)[O-]",
        "The enolate carbon attacks the carbonyl carbon of a second molecule; the C=O π pair becomes an alkoxide lone pair. Protonation gives 4-hydroxy-4-methylpentan-2-one (diacetone alcohol); this carbanion route builds C–C bonds."))
    c.append(ex("8.3", "E1cB dehydration of an aldol: a carbanion that expels HO<sup>−</sup>",
        "[CH3:1][C:2](=[O:3])[CH:4]([H:12])[C:5]([CH3:6])([CH3:7])[OH:8]",
        [St([A(('lp', 90), ('nb', 90, 12), 0.5), A(('b', 4, 12), ('lp', 4), -0.5)], "HO^−", add=OHm, carbanions=[4], expect="CC(=O)[CH-]C(C)(C)O.O"),
         St([A(('lp', 4), ('nb', 4, 5), 0.5), A(('b', 5, 8), ('lp', 8), 0.5)], "slow", carbanions=[4], expect="CC(=O)C=C(C)C.O.[OH-]")],
        "CC(=O)C=C(C)C.O.[OH-]",
        "E1cB = <i>E</i>limination, <i>1</i> molecular, conjugate <i>B</i>ase. The α-proton is removed first (carbanion), then the β-leaving group departs in the slow step. This is why aldol condensations proceed by heating even though HO<sup>−</sup> is a poor leaving group: the carbanion pushes it out. The product mesityl oxide is conjugated (resonance energy)."))
    c.append(ex("8.4", "β-Keto acid decarboxylation: a carbanion/enol formed with CO<sub>2</sub> loss",
        "[CH3:1][C:2](=[O:3])[CH2:4][C:5](=[O:6])[O:7][H:8]",
        [St([A(('lp', 3), ('nb', 3, 8), 0.5), A(('b', 7, 8), ('nb', 7, 5), 0.5), A(('b', 5, 4), ('nb', 4, 2), 0.5), A(('b', 2, 3), ('lp', 3), 0.5)], "Δ (6-membered cyclic TS)", expect="CC(O)=C.O=C=O")],
        "CC(O)=C.O=C=O",
        "Six electrons move around a six-membered cyclic transition state; the carbanion character appears at C-4 and is immediately delocalised onto the ketone oxygen as the enol, which tautomerises to acetone. This is why malonic acid, acetoacetic acid and β,γ-unsaturated acids lose CO<sub>2</sub> on gentle heating whereas simple acids need soda lime."))
    c.append(ex("8.5", "Soda-lime decarboxylation: sodium acetate → methane",
        "[CH3:1][C:2](=[O:3])[O-:4]",
        [St([A(('lp', 4), ('nb', 4, 2), 0.5), A(('b', 1, 2), ('lp', 1), -0.5)], "Δ", carbanions=[1], expect="[CH3-].O=C=O")],
        None,
        "The carboxylate expels CO<sub>2</sub>; the C–C σ pair becomes the lone pair of the methyl carbanion, which is protonated by water (or the lattice OH) at once to give CH<sub>4</sub>. The reaction is limited to cases where the carbanion is at least somewhat stabilised (or the temperature is very high, as with soda lime)."))
    c.append(ex("8.6", "Michael addition of the malonate carbanion to methyl vinyl ketone",
        "[CH-:1]([C:2](=[O:3])[O:4][CH3:5])[C:6](=[O:7])[O:8][CH3:9].[CH2:10]=[CH:11][C:12](=[O:13])[CH3:14]",
        [St([A(('lp', 1), ('nb', 1, 10), 0.5), A(('b', 10, 11), ('nb', 11, 12), 0.5), A(('b', 12, 13), ('lp', 13), 0.5)], "1,4-addition", expect="COC(=O)C(C(=O)OC)CC=C(C)[O-]")],
        "COC(=O)C(C(=O)OC)CC=C(C)[O-]",
        "A soft carbanion attacks the β-carbon of the enone (conjugate addition, 1,4) rather than the carbonyl carbon (1,2); the new carbanion is an enolate and is protonated to the 1,5-dicarbonyl. The stronger and harder the nucleophile (RLi), the more 1,2-addition."))
    c.append(ex("8.7", "Acetylide formation and alkylation",
        "[CH:1]#[C:2][H:3]",
        [St([A(('lp', 90), ('nb', 90, 3), 0.5), A(('b', 2, 3), ('lp', 2), -0.5)], "NH_2^−", add="[NH2-:90]", carbanions=[2], expect="C#[C-].N"),
         St([A(('lp', 2), ('nb', 2, 5), 0.5), A(('b', 5, 6), ('lp', 6), -0.5)], "CH_3–Br (S_N2)", add="[CH3:5][Br:6]", carbanions=[2], expect="C#CC.N.[Br-]")],
        "C#CC.N.[Br-]",
        "Sodamide (pK<sub>a</sub> of NH<sub>3</sub> ≈ 38) is strong enough to deprotonate a terminal alkyne (pK<sub>a</sub> ≈ 25) because the sp carbanion is stable; hydroxide is not strong enough (pK<sub>a</sub> of H<sub>2</sub>O ≈ 16). The acetylide then does an S<sub>N</sub>2 on a primary halide. Secondary and tertiary halides give elimination instead because the acetylide is a strong base.", width=680))
    c.append(ex("8.8", "Cyclopentadiene → cyclopentadienide (aromatic carbanion) and its resonance",
        "[CH:1]1([H:6])[CH:2]=[CH:3][CH:4]=[CH:5]1",
        [St([A(('lp', 90), ('nb', 90, 6), 0.5), A(('b', 1, 6), ('lp', 1), -0.5)], "B^−", add="[NH2-:90]", carbanions=[1]),
         St([A(('lp', 1), ('nb', 1, 2), 0.5), A(('b', 2, 3), ('lp', 3), 0.5)], "", kind="res", carbanions=[1, 3]),
         St([A(('lp', 3), ('nb', 3, 4), 0.5), A(('b', 4, 5), ('lp', 5), 0.5)], "", kind="res", carbanions=[3, 5])],
        None,
        "The CH<sub>2</sub> group of cyclopentadiene (pK<sub>a</sub> ≈ 16, a hydrocarbon as acidic as water) loses H<sup>+</sup> to give a planar C<sub>5</sub>H<sub>5</sub><sup>−</sup> with six π electrons (4n+2): all five carbons are equivalent and each carries one-fifth of the charge. This is the carbanion analogue of tropylium (6π) and the reason ferrocene exists."))
    c.append(ex("8.9", "Cyanohydrin carbanion: the acyl-anion equivalent of the benzoin condensation",
        "[C:1]([H:30])(=[O:2])" + Ph(3) + ".[C-:10]#[N:11]",
        [St([A(('lp', 10), ('nb', 10, 1), 0.5), A(('b', 1, 2), ('lp', 2), 0.5)], "CN^−", expect="[O-]C(C#N)c1ccccc1"),
         St([A(('lp', 2), ('nb', 2, 30), 0.5), A(('b', 1, 30), ('lp', 1), -0.5)], "1,2-H shift", carbanions=[1], expect="OC([C-]#N)c1ccccc1".replace("OC([C-]#N)c1ccccc1","O[C-](C#N)c1ccccc1"))],
        None,
        "Cyanide adds to the aldehyde to give an alkoxide; a proton transfer then puts the negative charge on the benzylic carbon bearing CN, where it is stabilised by the nitrile (−M) and the phenyl ring. This carbanion is the ‘masked acyl anion’ that attacks a second PhCHO (umpolung of the carbonyl carbon), and the loss of cyanide gives benzoin."))
    c.append(ex("8.10", "Grignard reagent + acetone → tertiary alcohol (after work-up)",
        "[CH3:1][Mg:2][Br:3].[CH3:4][C:5](=[O:6])[CH3:7]",
        [St([A(('b', 1, 2), ('nb', 1, 5), 0.5), A(('b', 5, 6), ('lp', 6), 0.5), A(('lp', 6), ('nb', 6, 2), 0.5)], "ether", expect="CC(C)(C)O[Mg]Br"),
         St([A(('lp', 6), ('nb', 6, 10), 0.5), A(('b', 10, 11), ('lp', 11), -0.5), A(('b', 6, 2), ('lp', 2), -0.5)], "H_3O^+ work-up", add="[H:10][OH2+:11]", expect="CC(C)(C)O.[Mg+]Br.O")],
        None,
        "The C–Mg σ pair is the nucleophile (a carbanion in disguise). It adds to the C=O carbon, and the alkoxide oxygen binds magnesium. Aqueous acid protonates the alkoxide and removes Mg<sup>2+</sup>. Grignard reagents react with CO<sub>2</sub> (→ RCOOH), aldehydes (→ 2° alcohols), HCHO (→ 1° alcohols), epoxides, nitriles (→ ketones after hydrolysis) and esters (→ 3° alcohols, two equivalents). They are destroyed by any acid with a pK<sub>a</sub> below that of the C–H bond of R–H (HOH, ROH, RCOOH, RNH<sub>2</sub>, R–C≡C–H): this is the basis of the Zerewitinoff determination of active hydrogen by CH<sub>4</sub> evolution from CH<sub>3</sub>MgI.", width=680))
    B.grid(c, 2)
    B.h2("8.6  Kinetic and thermodynamic enolates; why optical activity is lost")
    B.ul(["<b>Racemisation by enolisation.</b> A ketone with an α-stereocentre that carries an H (for example (R)-2-methyl-1-phenylbutan-1-one) racemises in dilute base or acid, because the enol or enolate is planar at that carbon: re-protonation from either face gives both enantiomers. Deuterium from D<sub>2</sub>O is exchanged into the α-positions at the same rate (CH<sub>3</sub>COCH<sub>3</sub> → CD<sub>3</sub>COCD<sub>3</sub>): the proof of a carbanion/enol intermediate.",
          "<b>Regioselectivity in unsymmetrical ketones</b> (2-methylcyclohexanone): LDA, THF, −78 °C removes the more accessible, less substituted α-H irreversibly (<i>kinetic</i> enolate, more s-character in the transition state, faster); NaH or NaOEt/EtOH at room temperature equilibrates to the more substituted, more stable enolate (<i>thermodynamic</i>). Alkylation with CH<sub>3</sub>I then gives 2,6-dimethyl- (kinetic) or 2,2-dimethylcyclohexanone (thermodynamic).",
          "<b>Which α-H is most acidic</b> in CH<sub>3</sub>COCH<sub>2</sub>COCH<sub>3</sub>? The central CH<sub>2</sub> (pK<sub>a</sub> ≈ 9): its anion is stabilised by <i>both</i> carbonyls, whereas deprotonation at CH<sub>3</sub> is stabilised by one.",
          "<b>Intramolecular H-bond and chelation</b> stabilise the enol form of β-diketones (acetylacetone is ≈ 80 % enol in hexane) and the enolate (planar, W-shaped, O···M<sup>+</sup>···O)."])
    B.h2("8.7  Reactions of carbanions (summary)")
    B.table(["Reaction type", "Example", "Product"],
        [["Protonation (acid–base)", "RMgX + H<sub>2</sub>O", "R–H + Mg(OH)X"],
         ["Nucleophilic addition to C=O", "RMgX/RLi + RCHO, RCOR, CO<sub>2</sub>, HCHO", "alcohols, carboxylic acids"],
         ["Nucleophilic substitution (S<sub>N</sub>2)", "R′C≡C<sup>−</sup> + R–X; enolate + R–X", "alkyne, α-alkylated carbonyl"],
         ["Conjugate addition", "malonate + enone; R<sub>2</sub>CuLi + enone", "1,5-dicarbonyl; β-alkyl ketone"],
         ["Addition–elimination (acyl)", "Claisen: enolate + RCOOR′ → β-ketoester", "C–C bond, loss of RO<sup>−</sup>"],
         ["Elimination (E1cB)", "aldol condensation; β-hydroxy carbonyl dehydration", "α,β-unsaturated carbonyl"],
         ["Wurtz coupling", "2 RX + 2 Na → R–R + 2 NaX (via R–Na and S<sub>N</sub>2 on a second RX)", "alkane (even carbon count)"],
         ["Decarboxylation", "β-keto acid, malonic acid, soda lime", "ketone, acetic acid, alkane"],
         ["α-Elimination → carbene", "CHCl<sub>3</sub> + KOH; Reimer–Tiemann", "dichlorocarbene (Part 10)"],
         ["Dimerisation by electron transfer", "2 Ph<sub>3</sub>C<sup>−</sup>Na<sup>+</sup> (trityl sodium)", "stable coloured solutions"]],
        widths=[28, 44, 28])
    from . import carbanion_adv as adv
    adv.theory(B)
    adv.mechanisms(B)
    B.h2("8.20  Problems on carbanions")
    qs = []
    def q(n, text, fig, ans, why):
        qs.append(Q(f"CA-{n}", text, fig, ans, why))
    q(1, "Arrange in decreasing stability (solution): (a) CH<sub>3</sub><sup>−</sup>, (b) CH<sub>3</sub>CH<sub>2</sub><sup>−</sup>, (c) (CH<sub>3</sub>)<sub>2</sub>CH<sup>−</sup>, (d) (CH<sub>3</sub>)<sub>3</sub>C<sup>−</sup>.",
      S([("a", "[CH3-]"), ("b", "C[CH2-]"), ("c", "C[CH-]C"), ("d", "C[C-](C)C")]), "a &gt; b &gt; c &gt; d",
      "Alkyl groups are +I and push electron density onto the carbon that already holds a lone pair, destabilising it. (In the gas phase polarisability reverses the order; the JEE key uses the inductive argument.)")
    q(2, "Arrange in decreasing stability: (a) CH<sub>3</sub>CH<sub>2</sub><sup>−</sup>, (b) CH<sub>2</sub>=CH<sup>−</sup>, (c) HC≡C<sup>−</sup>.",
      S([("a", "C[CH2-]"), ("b", "C=[CH-]"), ("c", "C#[C-]")]), "c &gt; b &gt; a",
      "Stability follows the s-character of the orbital holding the lone pair: sp (50 %) &gt; sp<sup>2</sup> (33 %) &gt; sp<sup>3</sup> (25 %). Equivalently, pK<sub>a</sub> of the parent C–H ≈ 25, 44, 50.")
    q(3, "Arrange in decreasing acidity of the marked H: (a) CH<sub>3</sub>NO<sub>2</sub>, (b) CH<sub>3</sub>COCH<sub>3</sub>, (c) CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>, (d) CH<sub>3</sub>CN.",
      S([("a", "C[N+](=O)[O-]"), ("b", "CC(C)=O"), ("c", "CC(=O)OCC"), ("d", "CC#N")]), "a &gt; b &gt; d &gt; c  (JEE-type key; DMSO pK<sub>a</sub>: 17.2, 26.5, 31.3, ≈ 30)",
      "The nitronate delocalises the charge onto two oxygens and the N<sup>+</sup> pulls strongly; the ketone enolate has one O; the ester enolate is less stable because the OR group donates into C=O and competes. ⚑ Between nitrile and ester the experimental DMSO values are close (31 vs ≈ 30); keys vary, so check the source order before answering a question that contains both.")
    q(4, "Which of the following carbanions is aromatic? (a) cyclopropenyl anion, (b) cyclopentadienyl anion, (c) cycloheptatrienyl anion, (d) cyclooctatetraene dianion.",
      S([("a", "[CH-]1C=C1"), ("b", "[CH-]1C=CC=C1"), ("c", "[CH-]1C=CC=CC=C1")]), "(b) and (d)",
      "Cyclopentadienide has 6π electrons (4n+2, n = 1) in a planar ring; the cyclooctatetraene dianion (10π, planar) is also aromatic. The cyclopropenyl anion (4π) and cycloheptatrienyl anion (8π) are antiaromatic.")
    q(5, "Why is the pK<sub>a</sub> of cyclopentadiene (≈ 16) about 25 units below that of cyclopentane (≈ 50)?",
      None, "aromatic stabilisation of the anion",
      "The conjugate base of cyclopentane is a localised sp<sup>3</sup> carbanion. Removing H<sup>+</sup> from the CH<sub>2</sub> of cyclopentadiene gives a planar C<sub>5</sub>H<sub>5</sub><sup>−</sup> ring with six π electrons delocalised over five carbons (aromatic): this accounts for most of the difference.")
    q(6, "Arrange in decreasing acidity: (a) cyclopentadiene, (b) indene, (c) fluorene, (d) cycloheptatriene.",
      S([("a", "C1C=CC=C1"), ("b", "C1C=Cc2ccccc12"), ("c", "C1c2ccccc2-c2ccccc12"), ("d", "C1C=CC=CC=C1")]), "a &gt; b &gt; c &gt; d  (≈ 16, 20, 22.6, 36)",
      "Cyclopentadienide is a simple aromatic anion; in indenide and fluorenide the negative charge is also partly shared with the benzo ring(s), which costs some benzene aromaticity, so they are weaker acids. Cycloheptatriene would give an antiaromatic 8π anion and is the weakest.")
    q(7, "Which pair of carbanions is correctly ordered by stability? (A) CCl<sub>3</sub><sup>−</sup> &gt; CF<sub>3</sub><sup>−</sup>  (B) PhCH<sub>2</sub><sup>−</sup> &gt; Ph<sub>2</sub>CH<sup>−</sup>  (C) CH<sub>3</sub>OCH<sub>2</sub><sup>−</sup> &gt; PhSCH<sub>2</sub><sup>−</sup>  (D) (CH<sub>3</sub>)<sub>3</sub>C<sup>−</sup> &gt; CH<sub>3</sub><sup>−</sup>",
      None, "(A)",
      "(B) is reversed (more phenyls delocalise more); (C) is reversed (S stabilises, O destabilises by lone-pair repulsion); (D) is reversed (+I destabilises). (A) follows the JEE key (F lone-pair repulsion; Cl polarisability).")
    q(8, "A nucleophile attacks the β-carbon of CH<sub>2</sub>=CH–CHO (Michael addition). Identify the carbanion intermediate and say why β- rather than α-attack occurs.",
      S([("β-attack", "[CH2](C)C=C[O-]".replace("[CH2](C)C=C[O-]", "C[CH2]C=C[O-]")), ("α-attack", "[CH2-]C(C)C=O".replace("[CH2-]C(C)C=O", "[CH2-][CH](C)C=O"))]), "attack at the β-carbon gives the enolate",
      "β-Attack puts the negative charge on the α-carbon, adjacent to C=O: the enolate (charge shared with oxygen). α-Attack would put the charge on the β-carbon, which is isolated from the carbonyl and unstabilised. The more stable carbanion is formed, as always.")
    q(9, "CHCl<sub>3</sub> is treated with KOH. What is formed first, and what does it lose?",
      None, "<sup>−</sup>CCl<sub>3</sub> then :CCl<sub>2</sub>",
      "HO<sup>−</sup> removes the single H (pK<sub>a</sub> ≈ 24 is acidic enough thanks to −I of Cl and polarisability), giving the trichloromethyl carbanion, which expels Cl<sup>−</sup> (α-elimination) to give dichlorocarbene. This is the first step of the Reimer–Tiemann and carbylamine reactions.")
    q(10, "Sodium acetate is heated with soda lime. Name the product and the intermediate.",
      None, "methane via CH<sub>3</sub><sup>−</sup>",
      "CH<sub>3</sub>COO<sup>−</sup> → CH<sub>3</sub><sup>−</sup> + CO<sub>2</sub>; the unstabilised methyl carbanion is protonated at once. (Contrast the Kolbe electrolysis of the same salt, which goes through CH<sub>3</sub>• radicals and gives ethane.)")
    q(11, "Optically active 2-phenylbutanal racemises on standing in dilute NaOH. Explain.",
      None, "planar enolate (carbanion)",
      "The α-H, which is on the stereocentre, is acidic (adjacent C=O and Ph). Its removal gives a planar enolate in which the stereocentre is destroyed; protonation from either face gives both enantiomers.")
    q(12, "2-Methylcyclohexanone is treated (i) with LDA at −78 °C, then CH<sub>3</sub>I, and (ii) with NaOEt/EtOH at 25 °C, then CH<sub>3</sub>I. Give the major product of each.",
      S([("(i)", "CC1CCCC(C)C1=O"), ("(ii)", "CC1(C)CCCCC1=O")]), "(i) 2,6-dimethylcyclohexanone; (ii) 2,2-dimethylcyclohexanone",
      "LDA is a bulky, strong base: it removes the more accessible H irreversibly (kinetic enolate, less substituted). NaOEt is a weaker base: the enolates equilibrate and the more substituted (more stable, thermodynamic) enolate is alkylated.")
    q(13, "How many moles of methane are evolved when 1 mol of HOCH<sub>2</sub>CH<sub>2</sub>–C≡CH reacts with excess CH<sub>3</sub>MgI?",
      None, "2",
      "Both the O–H and the acetylenic C–H are acidic enough (pK<sub>a</sub> ≈ 16 and 25, far below that of CH<sub>4</sub> ≈ 50) to protonate CH<sub>3</sub><sup>−</sup>. Counting active hydrogens: 2. (The Zerewitinoff method.)")
    q(14, "In which of the following will the carbanion that is formed be stabilised by resonance? (a) phenyl anion, (b) benzyl anion, (c) vinyl anion, (d) acetylide, (e) cyclohexadienyl-type enolate.",
      None, "(b) and (e)",
      "Only (b) and (e) have the lone pair in a p orbital parallel to a π system. The lone pair of the phenyl and vinyl anions is in an sp<sup>2</sup> orbital in the plane (orthogonal to π), and the acetylide lone pair is in an sp orbital along the axis.")
    q(15, "Match the carbanion with its source: (A) CH<sub>3</sub>−, (B) <sup>−</sup>CCl<sub>3</sub>, (C) enolate, (D) RC≡C<sup>−</sup>; (P) aldol reaction, (Q) Reimer–Tiemann, (R) soda-lime decarboxylation, (S) NaNH<sub>2</sub> + alkyne.",
      None, "A–R; B–Q; C–P; D–S",
      "Soda lime gives CH<sub>3</sub><sup>−</sup> from acetate; CHCl<sub>3</sub>/KOH gives CCl<sub>3</sub><sup>−</sup> and then dichlorocarbene; base + carbonyl gives the enolate for the aldol; NaNH<sub>2</sub> deprotonates a terminal alkyne.")
    adv.problems(B, q)
    B.answers(qs, with_stem=True)
    return qs
