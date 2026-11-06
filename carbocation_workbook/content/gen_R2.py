from .common import *

PH = "c1ccccc1"


def build(B):
    B.part("Part 7.2", "More Validated Rearrangement Mechanisms: Ring Expansion, Semipinacol, Competing Migrations, Meinwald")
    B.p("Each mechanism below was checked by computer in the same way as 7.1–7.19. In every case the group that migrates is the one anti-periplanar to the leaving group, and the leaving group departs together with the shift (no free primary cation).")
    c = []
    c.append(ex("7.20", "Tiffeneau–Demjanov ring expansion: 1-(aminomethyl)cyclohexanol + HNO<sub>2</sub> → cycloheptanone",
        "[CH2:1]([N+:2]#[N:3])[C:4]1([O:5][H:20])[CH2:6][CH2:7][CH2:8][CH2:9][CH2:10]1",
        [St([A(('b', 4, 6), ('nb', 6, 1), 0.6), A(('b', 1, 2), ('lp', 2), -0.5)], "ring bond migrates, −N_2", drop=[2, 3]),
         St(A(('b', 5, 20), ('nb', 5, 4), 0.5), "−H^+", drop=[20], expect="O=C1CCCCCC1")],
        "O=C1CCCCCC1",
        "The diazonium group of the primary amine (from HNO<sub>2</sub>, Part 2.F) is an excellent leaving group. A ring C–C bond of the carbinol carbon migrates to the CH<sub>2</sub> carbon as N<sub>2</sub> leaves, enlarging the six-membered ring by one carbon; the remaining cation is an oxocarbenium ion (the OH lone pair donates), which loses H<sup>+</sup> to give cycloheptanone. The ring expansion is favoured because the driving force is conversion of an unstabilised primary centre into an O-stabilised cation.", width=680))
    c.append(ex("7.21", "Semipinacol deamination: 2-amino-1,1-diphenylethanol → deoxybenzoin",
        "[CH2:1]([N+:2]#[N:3])[C:4]([O:5][H:20])(" + Ph(6) + ")" + Ph(12),
        [St([A(('b', 4, 6), ('nb', 6, 1), 0.6), A(('b', 1, 2), ('lp', 2), -0.5)], "phenyl migrates, −N_2", drop=[2, 3]),
         St(A(('b', 5, 20), ('nb', 5, 4), 0.5), "−H^+", drop=[20], expect="O=C(Cc1ccccc1)c1ccccc1")],
        "O=C(Cc1ccccc1)c1ccccc1",
        "One of the two phenyl groups migrates to CH<sub>2</sub> (through a phenonium-like bridged structure) as nitrogen is lost; the OH then loses its proton to give the ketone PhCO–CH<sub>2</sub>Ph. Because the two phenyls are identical there is no competition problem; with unlike aryl groups the more electron-rich one migrates.", width=680))
    c.append(ex("7.22", "Pinacol with competing groups: 2,3-diphenylbutane-2,3-diol → 3,3-diphenylbutan-2-one (Ph migrates, not CH<sub>3</sub>)",
        "[CH3:1][C:2]([O:3][H:30])(" + Ph(4) + ")[C:10]([CH3:11])([OH:12])" + Ph(13),
        [St(A(('lp', 12), ('nb', 12, 90), 0.5), "H^+", add=HP),
         St(A(('b', 10, 12), ('lp', 12), -0.5), "−H_2O (slow)", drop=[12]),
         St(A(('b', 2, 4), ('nb', 4, 10), 0.6), "1,2-Ph", kind='eq'),
         St(A(('b', 3, 30), ('nb', 3, 2), 0.5), "−H^+", drop=[30], expect="CC(=O)C(C)(c1ccccc1)c1ccccc1")],
        "CC(=O)C(C)(c1ccccc1)c1ccccc1",
        "The tertiary benzylic cation forms first. Two groups can migrate from the neighbouring carbon, CH<sub>3</sub> and phenyl; phenyl has the higher aptitude (it bridges through the phenonium ion), so the product is the ketone with a quaternary C(CH<sub>3</sub>)Ph<sub>2</sub>. The O-stabilised cation then loses H<sup>+</sup>.", width=680))
    c.append(ex("7.23", "Hydride migration in a cyclic pinacol: 1-methylcyclohexane-1,2-diol → 2-methylcyclohexanone",
        "[C:1]1([CH3:7])([O:2][H:20])[C:3]([H:22])([O:8][H:21])[CH2:4][CH2:5][CH2:6][CH2:9]1",
        [St(A(('lp', 2), ('nb', 2, 90), 0.5), "H^+", add=HP),
         St(A(('b', 1, 2), ('lp', 2), -0.5), "−H_2O", drop=[2]),
         St(A(('b', 3, 22), ('nb', 22, 1), 0.6), "1,2-H", kind='eq'),
         St(A(('b', 8, 21), ('nb', 8, 3), 0.5), "−H^+", drop=[21], expect="CC1CCCCC1=O")],
        "CC1CCCCC1=O",
        "The tertiary OH ionises to give the more stable cation; the hydrogen on the neighbouring carbinol carbon migrates (hydride has the highest aptitude and no strain change occurs). The O-stabilised cation loses H<sup>+</sup> to give 2-methylcyclohexanone.", width=680))
    c.append(ex("7.24", "Meinwald rearrangement: 2,2-dimethyloxirane + H<sup>+</sup> → isobutyraldehyde",
        "[CH3:1][C:2]([CH3:3])1[O:4][C:5]1([H:6])[H:7]",
        [St(A(('lp', 4), ('nb', 4, 90), 0.5), "H^+", add=HP),
         St(A(('b', 2, 4), ('lp', 4), -0.5), "ring opens at the tertiary C"),
         St(A(('b', 5, 6), ('nb', 6, 2), 0.6), "1,2-H", kind='eq'),
         St(A(('b', 4, 90), ('nb', 4, 5), 0.5), "−H^+", drop=[90], expect="CC(C)C=O")],
        "CC(C)C=O",
        "Protonation of the epoxide oxygen weakens the C–O bond at the tertiary carbon, which becomes a cation. A hydride migrates from the CH<sub>2</sub>OH carbon to the cation, and the resulting oxocarbenium loses H<sup>+</sup> to give the aldehyde. This is the cation-driven (Meinwald) isomerisation of epoxides to carbonyl compounds; with Lewis acids phenyl and alkyl groups can migrate instead.", width=680))
    B.grid(c, 1)
