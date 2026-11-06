from .common import *


def build(B):
    B.part("Part 7.0", "Carbocation Rearrangements: Thermodynamic and Kinetic Control, Mechanisms, and Named Reactions")
    B.p("A carbocation rearranges by a 1,2-shift of H (hydride), alkyl or aryl with its bonding electron pair to the neighbouring cationic carbon, through a three-centre two-electron (3c–2e) transition state or bridged intermediate. "
        "The cation moves to the carbon that lost the migrating group. Your lecture notes divide the subject into two kinds, and the division is useful for every problem:")
    B.table(["", "Thermodynamic control (TCP): reversible", "Kinetic control (KCP): irreversible"],
        [["Where the cation goes", "to the <i>more stable</i> cation, but each step is reversible, so the mixture reaches the thermodynamically best cation(s)", "to a cation that is captured at once by an irreversible step (loss of H<sup>+</sup>, formation of C=O by deprotonation, ring-strain relief)"],
         ["Examples", "neopentyl ⇌ t-amyl; 2,2-dimethylcyclohexyl ⇌ 1,2-dimethylcyclohexyl; cycloalkylmethyl ⇌ methylcycloalkyl", "pinacol (ends in a ketone); semipinacol/Tiffeneau–Demjanov (HNO<sub>2</sub>); dienone–phenol (ends aromatic)"],
         ["What decides the product", "relative stability of the cations (substitution, resonance, α-heteroatom lone pair, ring strain)", "what the cation can <i>do</i> next: an OH or NH<sub>2</sub> on the new cationic carbon forms C=O<sup>+</sup>H or C=N<sup>+</sup>H<sub>2</sub> and the sequence cannot go back"]],
        widths=[16, 42, 42])
    B.p("<b>A 1,2-rearrangement runs to completion only if</b> (i) the new cation is substantially better stabilised electronically (more substituted, resonance, adjacent lone pair); or (ii) it is more stable for another reason such as relief of ring strain; or (iii) it is captured in a subsequent irreversible reaction. "
        "Primary cations are generally not true intermediates: the shift occurs together with the departure of the leaving group. A shift between two equally stable cations (tertiary ⇌ tertiary) is allowed and reversible, but it is not counted as a ‘rearrangement’ in counting problems unless it changes the skeleton or the product.")
    B.h2("7.0.1  Orders you must know")
    B.table(["Order", "Rule"],
        [["Migratory aptitude in a reversible 1,2-shift (your note)", "Ph &lt; 1° &lt; 2° &lt; 3° &lt; H: the better the migrating group stabilises a positive charge (electron-donating ability), the better it migrates. Hydride is the best, then the more substituted alkyl, and phenyl is the worst here because its migration goes by a less favourable ipso (phenonium) pathway when an easier alkyl/H shift is available."],
         ["Migratory aptitude in the pinacol rearrangement (your note)", "Ph &gt; H &gt; Me, i.e. aryl first. Among aryl groups, ∝ electron donation: p-OCH<sub>3</sub>-C<sub>6</sub>H<sub>4</sub> (+M) &gt; p-CH<sub>3</sub>-C<sub>6</sub>H<sub>4</sub> (+H) &gt; C<sub>6</sub>H<sub>5</sub> &gt; p-Cl-C<sub>6</sub>H<sub>4</sub> (−I). Always combine it with the stability of the cation formed by the first ionisation."],
         ["Which OH ionises first in a pinacol", "The OH on the carbon that gives the <i>more stable cation</i> leaves (diaryl &gt; aryl,alkyl &gt; dialkyl; tertiary &gt; secondary), and the group that migrates then goes to <i>that</i> carbon."],
         ["Ring size in expansions", "A small ring next to a cationic carbon expands (cyclopropylcarbinyl → cyclobutyl; cyclobutylcarbinyl → cyclopentyl; cyclopentylcarbinyl → cyclohexyl): the driving force is relief of angle/torsional strain (σ-bond shift)."],
         ["Rate order of pinacol rearrangement (Nucleus Q23)", "key: ArMe-diol (II) &gt; diaryl diol (I) &gt; pinacol (III): the faster the first ionisation, the faster the overall reaction."]],
        widths=[32, 68])
    B.h2("7.0.2  Step-validated 1,2-shifts and named rearrangements")
    c = []
    c.append(ex("7.1", "Neopentyl cation ⇌ tert-amyl cation (methyl shift, TCP)",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[CH2+:5]",
        [St(A(('b', 2, 3), ('nb', 3, 5), 0.6), "1,2-CH_3", kind='eq', expect="CC[C+](C)C")],
        "CC[C+](C)C",
        "The C–CH<sub>3</sub> σ pair migrates to the primary cation; the cation moves to the quaternary carbon, which becomes tertiary: primary → tertiary is downhill by about 70 kJ mol<sup>−1</sup>, and the reverse is not observed."))
    c.append(ex("7.2", "3,3-Dimethylbut-2-yl cation → 2,3-dimethylbut-2-yl cation (secondary → tertiary)",
        "[CH3:1][CH+:2][C:3]([CH3:4])([CH3:5])[CH3:6]",
        [St(A(('b', 3, 4), ('nb', 4, 2), 0.6), "1,2-CH_3", kind='eq', expect="CC(C)[C+](C)C")],
        "CC(C)[C+](C)C",
        "The cation next to a quaternary carbon is the classic setting for a methyl shift: the secondary cation becomes tertiary. This is the reason pinacolyl alcohol with HBr gives 2-bromo-2,3-dimethylbutane."))
    c.append(ex("7.3", "Neophyl cation: phenyl shift through the phenonium ion",
        "[CH2+:1][C:2]([CH3:3])([CH3:4])" + Ph(5),
        [St(A(('b', 5, 6), ('nb', 5, 1), 0.5), "π-participation"),
         St(A(('b', 5, 2), ('nb', 5, 6), 0.5), "ring opens", expect="C[C+](C)Cc1ccccc1")],
        "C[C+](C)Cc1ccccc1",
        "The ring π electrons attack the cationic carbon, giving the bridged phenonium ion (a spiro cyclohexadienyl cation with a three-membered ring), then the C–C bond to the quaternary carbon breaks and the tertiary cation forms. The bridged ion explains retention of configuration in aryl migrations."))
    c.append(ex("7.4", "Cyclohexylmethyl cation → 1-methylcyclohexyl cation (hydride shift)",
        "[CH2+:1][C:2]1([H:8])[CH2:3][CH2:4][CH2:5][CH2:6][CH2:7]1",
        [St(A(('b', 2, 8), ('nb', 8, 1), 0.6), "1,2-H", kind='eq', expect="C[C+]1CCCCC1")],
        "C[C+]1CCCCC1",
        "A primary cation next to a tertiary C–H takes the hydride and becomes the tertiary ion; the competing ring expansion to the cycloheptyl cation (secondary) is slower."))
    c.append(ex("7.5", "2,2-Dimethylcyclohexyl cation → 1,2-dimethylcyclohexyl cation",
        "[CH+:1]1[C:2]([CH3:8])([CH3:9])[CH2:3][CH2:4][CH2:5][CH2:6]1",
        [St(A(('b', 2, 8), ('nb', 8, 1), 0.6), "1,2-CH_3", kind='eq', expect="CC1CCCC[C+]1C")],
        "CC1CCCC[C+]1C",
        "The same reasoning in a ring. The tertiary ion then loses a β-hydrogen to give the most substituted alkene, 1,2-dimethylcyclohexene (Nucleus Q10)."))
    c.append(ex("7.6", "Cyclobutylmethyl cation → cyclopentyl cation (ring expansion)",
        "[CH2+:1][CH:2]1[CH2:3][CH2:4][CH2:5]1",
        [St(A(('b', 2, 3), ('nb', 3, 1), 0.6), "σ-bond shift", kind='eq', expect="[CH+]1CCCC1")],
        "[CH+]1CCCC1",
        "A ring C–C bond migrates to the primary carbon: the four-membered ring becomes five-membered (strain relief ≈ 100 kJ mol<sup>−1</sup>) and the cation changes from primary to secondary. Ring expansion is driven by strain and by the better cation."))
    c.append(ex("7.7", "1-Cyclopentylethyl cation → 1-methylcyclohexyl cation (ring expansion then hydride shift)",
        "[CH3:1][C+:2]([H:8])[C:3]1([H:9])[CH2:4][CH2:5][CH2:6][CH2:7]1",
        [St(A(('b', 3, 4), ('nb', 4, 2), 0.6), "ring expansion", kind='eq'),
         St(A(('b', 2, 8), ('nb', 8, 3), 0.6), "1,2-H", kind='eq', expect="C[C+]1CCCCC1")],
        "C[C+]1CCCCC1",
        "Step 1 moves a ring bond to the cationic carbon and enlarges the ring to cyclohexane (the cation is now the secondary ion next to the methyl-bearing carbon). Step 2 is a hydride shift that puts the charge on the methyl-bearing carbon: tertiary, the global minimum (Kohinoor p. 9; Nucleus Q16 follows the same logic)."))
    c.append(ex("7.8", "Cyclopropylcarbinyl cation ⇌ cyclobutyl cation (≈ 48 : 47, with ≈ 5 % homoallyl)",
        "[CH2+:1][CH:2]1[CH2:3][CH2:4]1",
        [St(A(('b', 2, 3), ('nb', 3, 1), 0.6), "σ-shift", kind='eq', expect="[CH+]1CCC1")],
        "[CH+]1CCC1",
        "The two ions interconvert rapidly by a σ-bond shift, and solvolysis of either gives the same mixture of cyclopropylcarbinyl (≈ 48 %), cyclobutyl (≈ 47 %) and homoallyl (≈ 5 %) products. The ions are best described as a delocalised bicyclobutonium/non-classical cation (Part 4)."))
    c.append(ex("7.9", "Isoborneol → camphene (Wagner–Meerwein, H<sup>+</sup>)",
        "[CH3:1][C:2]1([CH3:3])[CH:4]2[CH2:5][CH2:6][C:7]1([C:8]([H:12])([H:13])[H:14])[CH:9]([OH:10])[CH2:11]2",
        [St(A(('lp', 10), ('nb', 10, 90), 0.5), "H^+", add=HP),
         St(A(('b', 9, 10), ('lp', 10), -0.5), "−H_2O", drop=[10]),
         St(A(('b', 7, 6), ('nb', 6, 9), 0.6), "Wagner–Meerwein", kind='eq'),
         St(A(('b', 8, 12), ('nb', 8, 7), 0.5), "−H^+", drop=[12], expect="C=C1C2CCC(C2)C1(C)C")],
        "C=C1C2CCC(C2)C1(C)C",
        "The secondary 2-norbornyl-type cation is formed (as an ion with the OH leaving as water), the C1–C6 σ bond shifts to C2 (Wagner–Meerwein shift) and the cation lands on the bridgehead carbon that bears a methyl group. Loss of a proton from that methyl gives the exocyclic alkene camphene, <b>not</b> the bornylene (the endocyclic alkene), as in your page: the proton is removed from the methyl group that can overlap with the empty orbital."))
    B.grid(c, 2)
    c2 = []
    c2.append(ex("7.10", "Pinacol → pinacolone",
        "[CH3:1][C:2]([CH3:3])([O:4][H:10])[C:5]([CH3:6])([CH3:7])[OH:8]",
        [St(A(('lp', 8), ('nb', 8, 90), 0.5), "H^+", add=HP),
         St(A(('b', 5, 8), ('lp', 8), -0.5), "slow (RDS)", drop=[8]),
         St(A(('b', 2, 1), ('nb', 1, 5), 0.6), "1,2-CH_3", kind='eq'),
         St(A(('b', 4, 10), ('nb', 4, 2), 0.5), "−H^+", drop=[10], expect="CC(C)(C)C(C)=O")],
        "CC(C)(C)C(C)=O",
        "Protonation, loss of water (rate-determining) and a methyl shift give an O-protonated ketone; loss of H<sup>+</sup> (irreversible) gives pinacolone. The lone pair of the remaining OH stabilises the new cation by +M: this is the driving force and it is why the reaction is under kinetic control."))
    c2.append(ex("7.11", "Benzopinacol → triphenylacetophenone (aryl migration)",
        "[O:1]([H:2])[C:3](" + Ph(4) + ")(" + Ph(10) + ")[C:16](" + Ph(17) + ")([OH:23])" + Ph(24),
        [St(A(('lp', 23), ('nb', 23, 90), 0.5), "H^+", add=HP),
         St(A(('b', 16, 23), ('lp', 23), -0.5), "−H_2O", drop=[23]),
         St(A(('b', 3, 4), ('nb', 4, 16), 0.6), "1,2-Ph", kind='eq'),
         St(A(('b', 1, 2), ('nb', 1, 3), 0.5), "−H^+", drop=[2], expect="O=C(c1ccccc1)C(c1ccccc1)(c1ccccc1)c1ccccc1")],
        "O=C(c1ccccc1)C(c1ccccc1)(c1ccccc1)c1ccccc1",
        "Either OH can ionise (the diaryl cations are equivalent). A phenyl group migrates to the cationic carbon through a phenonium-type transition state; the new cation is stabilised by the OH lone pair and gives triphenylacetophenone (β-benzopinacolone)."))
    c2.append(ex("7.12", "1-(2-Hydroxyprop-2-yl)cyclobutanol → 2,2-dimethylcyclopentanone (pinacol with ring expansion)",
        "[CH3:1][C:2]([CH3:3])([OH:4])[C:5]1([O:6][H:20])[CH2:7][CH2:8][CH2:9]1",
        [St(A(('lp', 4), ('nb', 4, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 4), ('lp', 4), -0.5), "−H_2O", drop=[4]),
         St(A(('b', 5, 7), ('nb', 7, 2), 0.6), "ring expansion", kind='eq'),
         St(A(('b', 6, 20), ('nb', 6, 5), 0.5), "−H^+", drop=[20], expect="CC1(C)CCCC1=O")],
        "CC1(C)CCCC1=O",
        "The tertiary open-chain OH ionises (more stable cation than the strained cyclobutyl one). The migrating group is a ring C–C bond: it moves to the cation, enlarging the four-membered ring to five. The adjacent carbon becomes C=O. Nucleus Q24 (answer D)."))
    c2.append(ex("7.13", "1,1′-Bi(cyclopentyl)-1,1′-diol → spiro[4.5]decan-6-one",
        "[C:1]1([OH:2])([C:7]2([O:8][H:21])[CH2:9][CH2:10][CH2:11][CH2:12]2)[CH2:3][CH2:4][CH2:5][CH2:6]1",
        [St(A(('lp', 2), ('nb', 2, 90), 0.5), "H^+", add=HP),
         St(A(('b', 1, 2), ('lp', 2), -0.5), "−H_2O", drop=[2]),
         St(A(('b', 7, 9), ('nb', 9, 1), 0.6), "ring expansion", kind='eq'),
         St(A(('b', 8, 21), ('nb', 8, 7), 0.5), "−H^+", drop=[21], expect="O=C1CCCCC12CCCC2")],
        "O=C1CCCCC12CCCC2",
        "Pinacol coupling of cyclopentanone (Mg–Hg) followed by acid gives the spiro ketone: one ring bond of the other cyclopentane migrates to the cationic carbon, so that ring expands to six and the cationic carbon becomes the spiro centre (Kohinoor items 7 and 12; Nucleus II-A Q14)."))
    c2.append(ex("7.14", "cis-1,2-Dimethylcyclohexane-1,2-diol → 2,2-dimethylcyclohexanone (methyl shift)",
        "[C:1]1([CH3:7])([OH:2])[C:3]([CH3:8])([O:9][H:20])[CH2:4][CH2:5][CH2:6][CH2:10]1",
        [St(A(('lp', 2), ('nb', 2, 90), 0.5), "H^+", add=HP),
         St(A(('b', 1, 2), ('lp', 2), -0.5), "−H_2O", drop=[2]),
         St(A(('b', 3, 8), ('nb', 8, 1), 0.6), "1,2-CH_3", kind='eq'),
         St(A(('b', 9, 20), ('nb', 9, 3), 0.5), "−H^+", drop=[20], expect="CC1(C)CCCCC1=O")],
        "CC1(C)CCCCC1=O",
        "In the cis diol one OH is axial and the other equatorial. The axial OH is the one that leaves, and the group anti-periplanar to it on the neighbouring carbon is the <i>axial methyl</i> (the OH on that carbon is equatorial), so the methyl migrates. The product is 2,2-dimethylcyclohexanone."))
    c2.append(ex("7.15", "trans-1,2-Dimethylcyclohexane-1,2-diol (diequatorial) → 1-acetyl-1-methylcyclopentane (ring contraction)",
        "[C:1]1([CH3:7])([OH:2])[C:3]([CH3:8])([O:9][H:20])[CH2:4][CH2:5][CH2:6][CH2:10]1",
        [St(A(('lp', 2), ('nb', 2, 90), 0.5), "H^+", add=HP),
         St(A(('b', 1, 2), ('lp', 2), -0.5), "−H_2O", drop=[2]),
         St(A(('b', 3, 4), ('nb', 4, 1), 0.6), "ring contraction", kind='eq'),
         St(A(('b', 9, 20), ('nb', 9, 3), 0.5), "−H^+", drop=[20], expect="CC(=O)C1(C)CCCC1")],
        "CC(=O)C1(C)CCCC1",
        "When the leaving OH is equatorial, the antiperiplanar bond is a ring C–C bond, not the methyl: that ring bond migrates, the six-membered ring contracts to five, and an exocyclic acetyl group results. The same compound, different stereochemistry: different product (stereoelectronic control)."))
    c2.append(ex("7.16", "1-Cyclobutylcyclopentanol → bicyclo[4.3.0]non-1(6)-ene (two ring expansions, then E1)",
        "[OH:1][C:2]1([C:3]2([H:11])[CH2:4][CH2:5][CH2:6]2)[CH2:7][CH2:8][CH2:9][CH2:10]1",
        [St(A(('lp', 1), ('nb', 1, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 1), ('lp', 1), -0.5), "−H_2O", drop=[1]),
         St(A(('b', 3, 4), ('nb', 4, 2), 0.6), "ring expansion (4→5)", kind='eq'),
         St(A(('b', 2, 7), ('nb', 7, 3), 0.6), "ring expansion (5→6)", kind='eq'),
         St(A(('b', 3, 11), ('nb', 3, 2), 0.5), "−H^+", drop=[11], expect="C1CCC2=C(C1)CCC2")],
        "C1CCC2=C(C1)CCC2",
        "The tertiary cation next to a strained cyclobutane first expands the four-membered ring (giving a spiro[4.4] secondary ion), which then expands the other ring to six (fused tertiary ion at the ring junction); loss of the junction proton gives the tetrasubstituted alkene (Nucleus Q16, option D)."))
    c2.append(ex("7.17", "4,4-Dimethylcyclohexa-2,5-dienone → 3,4-dimethylphenol (dienone–phenol rearrangement)",
        "[O:1]=[C:2]1[CH:3]=[C:4]([H:12])[C:5]([CH3:6])([CH3:7])[CH:8]=[CH:9]1".replace("[CH:3]=[C:4]([H:12])", "[CH:3]=[CH:4]"),
        [St(A(('lp', 1), ('nb', 1, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 1), ('lp', 1), 0.5), "", kind="res"),
         St(A(('b', 3, 4), ('nb', 3, 2), 0.5), "", kind="res")],
        None,
        "Step 1 protonates the carbonyl oxygen; steps 2–3 move the positive charge to C-4, next to the quaternary carbon. The next step is the methyl shift and the loss of a proton (shown separately in 7.18)."))
    c2.append(ex("7.18", "Dienone–phenol, the shift and the aromatisation",
        "[OH:1][C:2]1=[CH:3][C+:4]([H:12])[C:5]([CH3:6])([CH3:7])[CH:8]=[CH:9]1",
        [St(A(('b', 5, 6), ('nb', 6, 4), 0.6), "1,2-CH_3", kind='eq'),
         St(A(('b', 4, 12), ('nb', 4, 5), 0.5), "−H^+", drop=[12], expect="Cc1ccc(O)cc1C")],
        "Cc1ccc(O)cc1C",
        "The cation on C-4 is the arenium-like ion with a quaternary neighbour; a methyl group shifts to it, the new cation at C-5 is a fully delocalised hydroxy-arenium ion, and loss of H<sup>+</sup> from C-4 gives the aromatic phenol. The migrating group goes to the adjacent ring carbon (3,4-dimethylphenol)."))
    c2.append(ex("7.19", "Spiro[4.5]deca-6,9-dien-8-one → 5,6,7,8-tetrahydro-2-naphthol (spiro ring expansion)",
        "[OH:1][C:2]1=[CH:3][C+:4]([H:12])[C:5]2([CH2:6][CH2:7][CH2:8][CH2:9]2)[CH:10]=[CH:11]1",
        [St(A(('b', 5, 6), ('nb', 6, 4), 0.6), "ring expansion", kind='eq'),
         St(A(('b', 4, 12), ('nb', 4, 5), 0.5), "−H^+", drop=[12], expect="Oc1ccc2CCCCc2c1")],
        "Oc1ccc2CCCCc2c1",
        "In the protonated dienone the positive charge sits next to the spiro carbon. A bond of the spiro cyclopentane migrates, expanding that ring to six and converting the ion to a hydroxy-arenium; loss of H<sup>+</sup> restores the aromatic ring. Nucleus II-A Q13 and Kohinoor p. 14."))
    B.grid(c2, 2)
    return None
