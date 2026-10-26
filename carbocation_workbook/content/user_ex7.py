from .common import *
from .lg import S


def build(B):
    B.part("Part 5F", "Complete Worked Answers: the ‘Electronic Displacement Effects’ Exercise Book and the Allen Q48–51 Set")
    B.p("This part answers every problem in the 47-page exercise you supplied (Exercises O-I, O-II, S-I, J-Main and J-Advanced) and the Allen Q48–51 stability set that came with the earlier images, so that nothing in those uploads is left out. "
        "Questions are paraphrased, not copied, and the reasoning is written fresh. Your PDF prints an answer key on its last pages; I worked each item out from the chemistry first and then compared. "
        "<b>‡</b> marks an item where the drawing was too small or ambiguous for me to verify independently, so the answer is the key's; <b>⚑</b> marks a place where I disagree with the key or where two of your sources disagree. "
        "Structures are redrawn only where they carry the argument.")

    def tab(title, rows):
        B.h2(title)
        B.table(["Q", "Answer", "Reasoning"], rows, widths=[7, 21, 72])

    # ---------------------------------------------------------------- Allen 48-51
    B.h2("5F.0  Allen Q48–51 (stability orders, from the first image set)")
    qs = []
    qs.append(Q("A-48", "Order the p-(cyclopropyl)benzyl cations: (i) 2,3-dimethylcyclopropyl, (ii) 2-methylcyclopropyl, (iii) cyclopropyl.",
        S([("i", "[CH2+]c1ccc(cc1)C1C(C)C1C"), ("ii", "[CH2+]c1ccc(cc1)C1CC1C"), ("iii", "[CH2+]c1ccc(cc1)C1CC1")]), "(a)  i &gt; ii &gt; iii",
        "The cyclopropyl ring donates its bent σ bonds (σ-resonance); each methyl on the ring makes it a better donor."))
    qs.append(Q("A-49", "Order: (i) the cage cation with three oxygens at the bridgehead, (ii) 1,3-dioxan-2-yl, (iii) tetrahydropyran-2-yl.",
        S([("i", "[C+]12OCC(CO1)CO2"), ("ii", "[CH+]1OCCCO1"), ("iii", "[CH+]1OCCCC1")]), "(b)  ii &gt; iii &gt; i",
        "Two oxygen lone pairs on a planar carbon (ii) beat one (iii). In (i) the cationic carbon is a bridgehead of a rigid cage, so it cannot become planar and its empty orbital cannot overlap with the oxygen lone pairs: least stable despite three oxygens."))
    qs.append(Q("A-50", "Order: (i) a secondary alkyl cation, (ii) a secondary iminium-type cation N–C<sup>+</sup>H–CH<sub>3</sub>, (iii) a tertiary iminium-type cation.",
        S([("i", "CC[CH+]CC"), ("ii", "CC[NH][CH+]C"), ("iii", "CC[NH][C+](C)C")]), "(c)  iii &gt; ii &gt; i",
        "A nitrogen lone pair on C<sup>+</sup> (+M) is worth far more than hyperconjugation, and the extra methyl on (iii) adds hyperconjugation and +I on top."))
    qs.append(Q("A-51", "Order the benzyl cations: (i) p-CH<sub>3</sub>, (ii) p-CD<sub>3</sub>, (iii) m-CH<sub>3</sub>, (iv) m-CD<sub>3</sub>.",
        S([("i", "[CH2+]c1ccc(C)cc1"), ("ii", "[CH2+]c1ccc(C([2H])([2H])[2H])cc1"), ("iii", "[CH2+]c1cccc(C)c1"), ("iv", "[CH2+]c1cccc(C([2H])([2H])[2H])c1")]),
        "(b)  i &gt; ii &gt; iv &gt; iii",
        "Para: hyperconjugation operates, and C–H donates better than C–D (i &gt; ii). Meta: no hyperconjugation is possible, only +I, and D is slightly the better inductive donor (iv &gt; iii). Any para isomer beats any meta one."))
    B.answers(qs, with_stem=True)

    # ---------------------------------------------------------------- O-I
    tab("5F.1  Exercise O-I (Q1–Q51)", [
        ["1", "(D)", "False order of −I: an alkynyl group (sp carbon) is more electron-withdrawing than phenyl, so the true order is –C≡CH &gt; –Ph &gt; –H. The other three are true (F &gt; Cl &gt; Br &gt; I; –NR<sub>3</sub><sup>+</sup> &gt; –NH<sub>3</sub><sup>+</sup> &gt; –NO<sub>2</sub>; F &gt; OH &gt; NH<sub>2</sub>)."],
        ["2", "(C)", "+I order: –O<sup>−</sup> &gt; –CH<sub>2</sub>CH<sub>3</sub> &gt; –D &gt; –H. In (A) CMe<sub>3</sub> is a stronger donor than CH<sub>3</sub>; in (B) O<sup>−</sup> beats CO<sub>2</sub><sup>−</sup>."],
        ["3", "(B)", "Only cyclohexyl (sp<sup>3</sup> carbon) is +I; phenyl, p-tolyl and vinyl are attached through sp<sup>2</sup> carbon and are −I."],
        ["4", "(A, B, D)", "–OH, –COOH and –OCH<sub>3</sub> are −I; –CH<sub>3</sub> is +I."],
        ["5", "4  (b, d, f, g)", "+I groups are the negatively charged or alkyl ones: O<sup>−</sup>, N<sup>−</sup>H, COO<sup>−</sup>, CH<sub>3</sub>. OH, NH<sub>2</sub>, COOH, OMe, F, NF<sub>3</sub><sup>+</sup> are −I."],
        ["6", "(a, c, d, g, j, l, m)", "Resonance is intramolecular, involves π (and lone-pair) electrons only, lowers the energy, is not the only stabilising factor, and the hybrid (not any canonical form) describes the molecule; canonical forms are imaginary, the hybrid is real and more stable than any one form. False: b, e, f, h, i, k."],
        ["7", "(A)", "Incorrect statement: resonating (canonical) structures are hypothetical and have no real existence."],
        ["8", "(A)", "A conjugated diene is more stable than an isolated diene, which is more stable than a cumulated one (allene)."],
        ["9", "(A)  a &gt; d &gt; c &gt; b ‡", "Contribution to the hybrid of CH<sub>2</sub>N<sub>2</sub>: the form with the negative charge on the terminal (more electronegative) nitrogen and complete octets dominates; forms with a carbanion contribute less."],
        ["10", "(A, D)", "A cyclic 4n+2 delocalisation stabilises (aromatic); a cyclic 4n delocalisation destabilises. A negative charge is better placed on the more electronegative atom, a positive charge on the less electronegative one."],
        ["11", "(D)", "Pair D is keto–enol tautomerism (an H changes position), not resonance."],
        ["12", "(b, d, e)", "The lone pair is in resonance in pyrrole N–H, in the enamine-type N–H, and in the allyl anion. In pyridine, the imine N of (c) and (f) the lone pair is in the ring plane (sp<sup>2</sup>), orthogonal to the π system."],
        ["13", "(b, d, e)", "Not involved: the in-plane lone pair on the carbonyl O, the sp lone pair on a nitrile N, and the O lone pair in (e), which is not attached to the π system."],
        ["14", "(d)", "–NH<sub>3</sub><sup>+</sup> has neither a lone pair nor a π bond."],
        ["15", "(c, f)", "Groups that donate by resonance have a lone pair on the atom attached to the π system: –OCOCH<sub>3</sub> (the O) and –NHCOCH<sub>3</sub> (the N)."],
        ["16", "(a, b, c, d, f)", "–COOH, –CONHR, –COCl, –CN and an imine C=N withdraw by −M; –O–CH=CH<sub>2</sub> donates."],
        ["17", "(b, c, f)", "–NO, –CH=CH<sub>2</sub> and –N=NH can accept (−M) or donate (+M) depending on what they are attached to."],
        ["18", "see figure", "Resonance forms drawn below: (a) enolate, (b) vinylogous enolate, (c) benzyl cation (ortho and para forms), (d) cyclohexadienyl cation, (e) phenoxide, (f) vinylogous iminium, (g) oxocarbenium, (h) vinylogous enolate, (i, j) dienyl cations."],
        ["19", "a-I, b-II, c-II, d-II, e-I", "Less stable form: (a) the sextet carbocation; (b) the naphthalene structure with only one benzene sextet; (c, d) the one with the charge on carbon or N instead of O<sup>−</sup>; (e) the cycloheptatrienyl-anion (8π, antiaromatic) form."],
        ["20", "a-I, b-I, c-I, d-I, e-II, f-II", "More stable form: neutral rather than charge-separated; aromatic ring kept (phenoxide, pyridine, Cp<sup>−</sup>); (e) CH<sub>2</sub>=CH–CH=O rather than ⁺CH<sub>2</sub>–CH=CH–O<sup>−</sup>; (f) all octets with the positive charge on N."],
        ["21", "(a, e, f, g)", "–OH (lone pair), –CH=CH–Ar (π), –BH<sub>2</sub> (empty p) and –PPh<sub>3</sub><sup>+</sup> (empty d/σ* acceptor, as the key treats it) can take part; the saturated –CH<sub>2</sub>C<sup>−</sup>H<sub>2</sub>, –CH<sub>2</sub>C<sup>+</sup>H<sub>2</sub> and benzyl groups cannot."],
        ["22", "(a) resonance forms; (b) A; (c) C; (d) A and B; (e) B and C; (f) 0; (g) B; (h) B ‡", "A, B and C are canonical forms of diazomethane (same atom positions). B (CH<sub>2</sub>=N<sup>+</sup>=N<sup>−</sup>) has complete octets and no charge on carbon, so it is the most stable."],
        ["23", "(a) II, (b) II, (c) II", "(a) the charge on N, not C; (b) the enolate with the charge on O; (c) the form with all octets (C=N<sup>+</sup>)."],
        ["24", "(A)  I &gt; II &gt; III &gt; IV", "Neutral form first; then the charge-separated form with O<sup>−</sup>/O<sup>+</sup> and complete octets; then C<sup>+</sup> forms (sextet) and last the C<sup>−</sup>/O<sup>+</sup> form."],
        ["25", "a-II, b-II, c-II, d-II", "Lesser resonance energy: the non-aromatic or less conjugated member of each pair; furan has less aromatic stabilisation than pyrrole (about 16 vs 21 kcal mol<sup>−1</sup>)."],
        ["26", "(a) and (b)", "Equivalent canonical forms and aromaticity both raise the resonance energy."],
        ["27", "i-I, ii-II, iii-II, iv-I, v-I, vi-II, vii-I, viii-II ‡, ix-II, x-II, xi-II, xii-I, xiii-I, xiv-I, xv-I", "Higher RE: pyridine over pyrrole; N is a better donor than O (divinylamine); equivalent forms (amidinate); F over Br (2p–2p overlap); benzyl over allyl radical; naphthalene (61) over phenol (36); two isolated benzenes (2 × 36) over styrene; longer conjugation (ix); linear over cross-conjugated (x); carboxylate over acid; vinyl-O<sup>−</sup> over vinyl-OH; benzoate; diphenylmethane over naphthalene; benzene over hexatriene."],
        ["28", "a-II, b-I, c-I, d-II, e-I", "Lesser RE: HCOO<sup>−</sup> (2 forms) vs CO<sub>3</sub><sup>2−</sup> (3); the antiaromatic cyclopropenyl anion vs allyl anion; cyclobutadiene vs butadiene; allyl cation vs aromatic cyclopropenyl cation; benzene vs phenol."],
        ["29", "(B)", "The pentadienyl cation has more resonance than the antiaromatic cyclopentadienyl cation; hexatriene has less than benzene; divinylamine has less than 1-amino-butadiene."],
        ["30", "(D)", "The ring π density is lowest in 1,3-dinitrobenzene (two −M/−I acceptors, nothing donating)."],
        ["31", "(B)", "The ring π density is highest in the phenoxide ion (the strongest +M donor)."],
        ["32", "(C)  i &gt; iv &gt; ii &gt; iii", "Reactivity to electrophiles follows hyperconjugation by the α C–H count: CH<sub>3</sub> (3) &gt; C<sub>2</sub>H<sub>5</sub> (2) &gt; i-Pr (1) &gt; t-Bu (0): toluene, ethyl-, isopropyl-, t-butyl-benzene."],
        ["33", "(C)", "Inductive, mesomeric and hyperconjugative effects all operate in the acetyl-methyl-cyclohexene (C=C–C=O gives M, the alkyl groups give H and I)."],
        ["34", "(C)", "CH<sub>3</sub>CH=CH–CO–CH<sub>3</sub> has C=C conjugated with C=O (M), CH<sub>3</sub> on the double bond (H) and the polar C=O (I)."],
        ["35", "(D)", "All three statements are correct: σ delocalisation is hyperconjugation, π delocalisation is resonance, permanent σ polarisation is the inductive effect."],
        ["36", "(A, B, C)", "Number of hyperconjugative structures = α C–H bonds: propene 3, 2-methyl-2-butene 9, the t-amyl cation 8. 2-Butyne has 6, not 5."],
        ["37", "(B)", "The ortho-di-t-butyl groups twist the NO<sub>2</sub> out of the ring plane (steric inhibition of resonance), so C–N has less double-bond character and is longer in II."],
        ["38", "(B) ‡", "The two nitro groups flanking Br are twisted out of the ring plane (no resonance, longer C–N); the unhindered nitro group conjugates and has the shorter C–N bond."],
        ["39", "(C)  III &gt; II &gt; I &gt; IV", "Single sp<sup>3</sup>–N (cyclohexylamine) is longest; aniline N lone pair adds partial double bond; a p-CHO withdraws and adds more; the imine C=N is shortest."],
        ["40", "(D)", "The shortest C1–C2 bond joins the sp<sup>2</sup> carbon of a ring to an sp carbon (C≡CH): both shortening factors (s-character, no hyperconjugation)."],
        ["41", "(D)", "Longest C=C is in isobutene: two methyls give the most hyperconjugation, which lengthens the double bond."],
        ["42", "(A)", "Shortest C=C is in allene: sp-hybridised central carbon."],
        ["43", "(B, C, D)", "Butadiene, 1,3-cyclohexadiene and naphthalene have alternating bond lengths; benzene has equal bonds."],
        ["44", "(B)  C<sub>2</sub>H<sub>6</sub> &gt; C<sub>6</sub>H<sub>6</sub> &gt; C<sub>2</sub>H<sub>4</sub> &gt; C<sub>2</sub>H<sub>2</sub>", "154, 139, 134, 120 pm."],
        ["45", "(A)  I &gt; II &gt; III &gt; IV", "The push–pull ethene I (OMe donor, NO<sub>2</sub> acceptor) has the most single-bond character; then nitroethene, vinyl chloride, ethene."],
        ["46", "(A, C, D)", "C–C &gt; C=C &gt; C≡C &gt; C≡N; C=C &gt; C=N &gt; C=O; C–C &gt; C=C &gt; C≡C &gt; C–H are correct. (B) is not."],
        ["47", "a-I, b-I, c-II, d-I, e-I, f-I ‡", "Bond dissociation energy of the marked bond is lower where it carries more s/less strength: cyclohexene vs ethylene; propyne C–CH<sub>3</sub>; urea vs amides etc. The drawings are small, so these follow the key."],
        ["48", "a-II, b-I, c-I, d-I, e-II, f-II ‡", "Stronger bond: C–Cl &gt; C–Br; vinyl–Br &gt; alkyl–Br; acyl–Cl and alkyl–Cl comparison, sp<sup>2</sup>–sp<sup>2</sup> &gt; sp<sup>2</sup>–sp<sup>3</sup> etc. (as in the key)."],
        ["49", "(D)  C<sup>1</sup>–H &gt; C<sup>4</sup>–H &gt; C<sup>3</sup>–H &gt; C<sup>2</sup>–H", "Vinylic C–H is strongest (sp<sup>2</sup>); then the primary sp<sup>3</sup> C–H; then secondary; the allylic C–H is weakest because the radical is resonance stabilised."],
        ["50", "C &gt; B &gt; A", "C–N bond length: the simple enamine (C) has the least double-bond character and is the longest; the dienamine (B) is shorter; the amino-enone (A) is shortest because N donates into the C=C–C=O system."],
        ["51", "(A) ‡", "As in the key: the t-butyl ortho group twists the COOH out of conjugation, so the C–O bond is shorter (less delocalisation into the ring) than in benzoic acid."],
    ])

    # resonance-form figures for O-I Q18
    B.h3("Q18  resonance forms")
    B.fig(S([("a", "CC(=O)[CH2-]"), ("a′", "CC([O-])=C")]), "(a) acetone enolate: carbanion form and enolate form")
    B.fig(S([("b", "O=CC=C[CH2-]"), ("b′", "O=C[CH-]C=C"), ("b″", "[O-]C=CC=C")]), "(b) the charge delocalised over C-4, C-2 and O")
    B.fig(S([("c", "[CH2+]c1ccccc1"), ("c′ (o)", "C=C1[CH+]C=CC=C1"), ("c″ (p)", "C=C1C=C[CH+]C=C1")]), "(c) benzyl cation (the ortho form shown once; two ortho and one para)")
    B.fig(S([("d", "[CH+]1C=CC=CC1"), ("d′", "C1=C[CH+]C=CC1"), ("d″", "C1=CC=C[CH+]C1")]), "(d) cyclohexadienyl cation: charge at C-1, C-3, C-5")
    B.fig(S([("e", "[O-]c1ccccc1"), ("e′ (o)", "O=C1[CH-]C=CC=C1"), ("e″ (p)", "O=C1C=C[CH-]C=C1")]), "(e) phenoxide: charge at O and at the ortho and para carbons")
    B.fig(S([("f", "[CH+]1C=CNCC1"), ("f′", "C1=C[CH+]NCC1"), ("f″", "C1=CC=[NH+]CC1")]), "(f) the vinylogous iminium ion (my reading of the ring: N lone pair donating through C=C)")
    B.fig(S([("g", "[CH+]1OC=CC1"), ("g′", "C1=[O+]C=CC1")]), "(g) oxocarbenium form (my reading of the ring)")
    B.fig(S([("h", "O=C1C=C[CH-]CC1"), ("h′", "O=C1[CH-]C=CCC1"), ("h″", "[O-]C1=CC=CCC1")]), "(h) cyclohexenone-type anion: charge at C-4, C-2, O")
    B.fig(S([("i", "CC=CC=C[CH+]C"), ("i′", "CC=C[CH+]C=CC"), ("i″", "C[CH+]C=CC=CC")]), "(i) the heptadienyl cation: charge on C-2, C-4, C-6")
    B.fig(S([("j", "CC=CC=C[CH2+]"), ("j′", "CC=C[CH+]C=C"), ("j″", "C[CH+]C=CC=C")]), "(j) the hexadienyl cation: charge on C-1, C-3, C-5")

    # ---------------------------------------------------------------- O-II
    tab("5F.2  Exercise O-II (Q1–Q40)", [
        ["1", "(i) a, b; (ii) a, c; (iii) b, c, d; (iv) all", "(i) the benzo-fused cyclopentadienyl anion (10π) and thiophene; (ii) tropylium and the benzo-fused (isoindenyl-type) anion; (iii) the cyclobutadiene dianion (6π), cyclopropenyl cation and protonated pyridine; (iv) azulene-type, 6π borole-ring and silabenzene systems, borazine and indole. Cyclohexadienyl, cyclopentadienyl cation, cyclobutadiene and the 8π anion are excluded (sp<sup>3</sup> carbon or 4nπ). ‡"],
        ["2", "aromatic: a, b, d, e, g; non-aromatic: c, f", "Isoxazole, thiazole, pyrylium, γ-pyrone and cytosine are aromatic; 4H-pyran and 1,2-dihydropyridine have an sp<sup>3</sup> ring atom."],
        ["3", "(C)  II &gt; I &gt; III", "Ease of rotation about the exocyclic C=C. Each compound is a fulvene-type system whose dipolar form places a charge on each ring. If both rings become aromatic (II: tropylium<sup>+</sup>/Cp<sup>−</sup>, I: cyclopropenyl<sup>+</sup>/Cp<sup>−</sup>) the bond has much single-bond character and rotates easily; tropylium is the more stable cation, so II &gt; I. In III the cyclopropenyl ring would carry the anion (antiaromatic), so the bond keeps its double-bond character."],
        ["4", "(C) III", "Lowest rotation barrier: III is the Cp<sup>−</sup>/cyclopropenyl<sup>+</sup> dipole, both rings aromatic. In I the dipole would put a negative charge on an antiaromatic cyclopropenyl ring, and in II it would give an antiaromatic cyclopentadienyl cation."],
        ["5", "(B)", "Cyclooctatetraene (8π, tub-shaped) is not aromatic."],
        ["6", "(A)", "The pyrrolium ion (N–H<sub>2</sub><sup>+</sup>, sp<sup>3</sup> N, no lone pair in the ring π system) is non-aromatic."],
        ["7", "see below", "(a) B<sub>3</sub>H<sub>3</sub>O<sub>3</sub> is boroxine, a planar B<sub>3</sub>O<sub>3</sub> ring with 6π (weakly aromatic); (b) melamine, aromatic (triazine ring, 6π); (c) the trimer of HN=C=O is cyanuric (isocyanuric) acid, drawn as the aromatic triol, though the trione tautomer predominates in the solid."],
        ["8", "(D)  neopentyl", "α C–H counts: ethyl 3, n-propyl 2, isobutyl 1, neopentyl 0 (see the correction in Part 5B)."],
        ["9", "(i) c &gt; b &gt; a; (ii) c &gt; b &gt; a; (iii) b &gt; c &gt; a; (iv) d &gt; c &gt; b &gt; a; (v) c &gt; b &gt; a; (vi) b &gt; c &gt; a ⚑; (vii) c &gt; b &gt; a; (viii) c &gt; a &gt; d &gt; b; (ix) b &gt; c &gt; a; (x) c &gt; a &gt; b; (xi) c &gt; a &gt; b; (xii) a &gt; b &gt; c &gt; d; (xiii) b &gt; a &gt; c &gt; d; (xiv) d &gt; e &gt; b &gt; a &gt; c; (xv) a &gt; c &gt; b; (xvi) b &gt; c &gt; a", "Worked in full in Part 5B (items 9(i)–(xvi)). For (xiv) the note on your Allen page tags the five cations as a = 2 α-H, b = 6 α-H, c = 1 α-H, d = resonance + 4 α-H, e = resonance + 2 α-H: resonance first, then α-H count. For (vi) the key and the Allen solution disagree (⚑ see Part 5B)."],
        ["10", "(C)", "I, II and III are correct (oxocarbenium, secondary &gt; primary, allyl &gt; n-propyl); IV is wrong, since the vinyl cation is less stable than ethyl."],
        ["11", "(a) I; (b) I; (c) II; (d) II", "(a) benzyl &gt; allyl; (b) ethyl &gt; vinyl; (c) the allylic exocyclic cation II &gt; the cation I that is not conjugated with the ring C=C; (d) N-substituted: the α-amino carbenium (iminium) is far more stable than a simple tertiary cation."],
        ["12", "(C)  I &gt; IV &gt; III &gt; II ‡", "Norbornyl cations: the least stable is II, the 7-norbornyl cation (bridge carbon, geometrically unable to be planar and not stabilised by σ-bridging). The secondary ones are ordered by hyperconjugation and by exo-σ-participation, with the methyl-bearing neighbour (I, IV) better than the parent III."],
        ["13", "(A)", "Trityl is the most stable (pK<sub>R<sup>+</sup></sub> −6.6)."],
        ["14", "(A)  d &lt; b &lt; c &lt; a", "Ethyl &lt; benzyl &lt; p-methylbenzyl &lt; p-methoxybenzyl."],
        ["15", "(D)  2 &gt; 1 &gt; 3 &gt; 4", "NH<sub>2</sub> &gt; OH (+M), then CH<sub>3</sub> (3 α-H) &gt; t-Bu (0)."],
        ["16", "(B)  II &lt; III &lt; I", "Steric inhibition of resonance leaves III with only the −I effect of NO<sub>2</sub>."],
        ["17", "see below", "Increasing stability of anions and radicals. (i) a &lt; b; (ii) d &lt; a &lt; c &lt; b; (iii) b &lt; a; (iv) c &lt; b &lt; a; (v) c &lt; a &lt; b; (vi) a &lt; c &lt; b; (vii) c &lt; b &lt; a; (viii) c &lt; b &lt; a; (ix) b &lt; a; (x) a &lt; c &lt; b &lt; d. Reasons are given in the sub-table that follows."],
        ["18", "(A)", "HC≡C<sup>−</sup>: the lone pair is in an sp orbital (50 % s), the most stable carbanion."],
        ["19", "(D)", "p-Nitrobenzyl anion: the charge delocalises onto the nitro group (−M)."],
        ["20", "(B)", "The anion conjugated with the C=O across the ring (a dienolate) is the most stable."],
        ["21", "(D)", "Radicals: CH<sub>2</sub>=CH–C(CH<sub>3</sub>)<sub>2</sub> &gt; allyl &gt; ethyl &gt; vinyl is correct. In (A) CH<sub>3</sub>OCH<sub>2</sub><sup>+</sup> is more stable than t-Bu<sup>+</sup>; in (B) isobutene is slightly more stable than cis-2-butene; in (C) the order of the benzyl anions is reversed."],
        ["22", "(a) IV &lt; I &lt; II &lt; III &lt; V; (b) III &lt; IV &lt; I &lt; II ‡", "(a) the bridgehead cage cation is least stable; β-oxygen cations (−I only) next; the allylic and the dioxanyl cation (two O) most. (b) Carbanions next to C=O: aldehyde &gt; ketone &gt; ester &gt; amide (a more electron-poor carbonyl stabilises the enolate better)."],
        ["23", "(B)  IV &gt; III &gt; II &gt; I", "Radical stability grows with benzylic + allylic character and substitution at the radical centre."],
        ["24", "(A)", "CH<sub>2</sub>=CH–CH=CH–CH<sub>3</sub> is conjugated (resonance); CH<sub>3</sub>CH=C=CH–CH<sub>3</sub> is cumulated, with no resonance."],
        ["25", "(a) I; (b) I; (c) II", "More substituted alkene: 1-methylcyclohexene; isopropenylcyclopentane (1,1-disubstituted) over allylcyclopentane (mono); the double bond in the six-membered ring over the strained cyclobutene."],
        ["26", "(a) 4658; (b) 4638; (c) 4632; (d) 4650; (e) 5293", "(e) is the C<sub>8</sub> alkene (largest heat); among the C<sub>7</sub> alkenes, the most stable (trisubstituted, c) has the smallest heat and the least stable (1-heptene) the largest."],
        ["27", "(A)  I &lt; III &lt; IV &lt; II", "Alkene stability increases with the number of hyperconjugating α C–H bonds and with substitution: 2-butene &lt; isobutene &lt; 2-methyl-2-butene &lt; tetramethylethylene."],
        ["28", "(B)  I and IV", "The C–H bonds on the allylic carbons that can overlap with the π bond take part; I and IV are such bonds."],
        ["29", "(D)  I &gt; IV &gt; III &gt; II", "For isomers a larger heat of combustion means a less stable isomer: 1-butene &gt; cis-2-butene &gt; trans-2-butene &gt; isobutene."],
        ["30", "(i) d &gt; c &gt; b &gt; a; (ii) e &gt; c &gt; d &gt; b &gt; a; (iii) b &gt; a; (iv) a &gt; b; (v) b &gt; a; (vi) a &gt; b", "Heat of hydrogenation is larger for the less stable (less substituted, unconjugated, cis) alkene."],
        ["31", "(i) a &lt; b; (ii) e &lt; d &lt; c &lt; b &lt; a; (iii) a &lt; c &lt; b; (iv) a &gt; b &gt; c", "1,3-diene &lt; 1,4-diene; tetrasubstituted &lt; … &lt; ethylene; cyclohexene (28) &lt; benzene (50) &lt; cyclohexadiene (55); resonance energy per ring drops from benzene to naphthalene to anthracene."],
        ["32", "(i) c &gt; b &gt; a; (ii) a &gt; b &gt; c &gt; d; (iii) a &gt; b; (iv) c &gt; b &gt; a", "Isomers: the less stable has the larger heat of combustion; different formulae: more carbons, larger heat."],
        ["33", "a-I, b-I, c-II, d-I", "Higher heat of hydrogenation: 1,4-cyclohexadiene (not conjugated), benzene (two further double bonds), 1-butene, the exocyclic alkene."],
        ["34", "stability d &gt; c &gt; b &gt; a; heat of hydrogenation a &gt; b &gt; c &gt; d", "The more aromatic ring retained, the more stable (tetralin-type d best)."],
        ["35", "(C) 57", "1,3-Butadiene: 2 × 30 − about 3 kcal mol<sup>−1</sup> of conjugation energy."],
        ["36", "(D)", "Steric inhibition of resonance only in A (the NMe<sub>2</sub> flanked by two ortho methyls is twisted out of the ring plane); NH<sub>2</sub> is small enough to stay planar."],
        ["37", "(B)", "See Q37 of O-I: C–N is shorter in the unhindered nitrobenzene."],
        ["38", "(C) ‡", "See Q38 of O-I: twisted flanked nitro groups have the longer C–N bonds."],
        ["39", "(i) c &gt; b &gt; a; (ii) a &gt; b &gt; c; (iii) a &gt; b", "Dipole moments: the para isomer of an electron-donor/acceptor pair has parallel bond dipoles in (i) and opposed ones in (ii); the ortho isomer of the pair (ii) has the largest vector sum; N,N-dimethylaniline has a larger moment than the hindered 2,4,6-trimethyl analogue (resonance lost)."],
        ["40", "—", "A bridgehead cation of a small rigid bicycle such as norbornane cannot become planar, so the empty p orbital cannot overlap with neighbouring σ bonds; it is also strained (anti-Bredt-type). Larger cages (adamantyl) tolerate it."],
    ])
    B.h3("O-II Q7: structures")
    B.fig(S([("boroxine", "B1OBOBO1"), ("melamine", "Nc1nc(N)nc(N)n1"), ("cyanuric (triol)", "Oc1nc(O)nc(O)n1"), ("cyanuric (trione)", "O=C1NC(=O)NC(=O)N1")]), "Boroxine, melamine and cyanuric acid (aromatic triol form and the more stable trione form).")
    B.h3("O-II Q17: reasons")
    B.table(["Item", "Order (increasing stability)", "Reason"],
        [["i", "p-F-benzyl anion &lt; p-NO<sub>2</sub>-benzyl anion", "−M of NO<sub>2</sub> delocalises the charge; F is +M/−I and destabilises the anion by lone-pair repulsion"],
         ["ii", "benzyl &lt; p-Cl &lt; p-CN &lt; p-NO<sub>2</sub>", "electron-withdrawing strength"],
         ["iii", "ethyl anion &lt; CH<sub>2</sub>CHO enolate", "resonance into C=O"],
         ["iv", "pentan-3-yl anion &lt; ketone enolate &lt; acetylacetonate", "one, then two carbonyls"],
         ["v", "benzyl &lt; p-Cl &lt; p-NO<sub>2</sub>", "as above"],
         ["vi", "cyclopropenyl anion &lt; cycloheptatrienyl anion &lt; cyclopentadienyl anion", "antiaromatic &lt; non-planar 8π &lt; aromatic"],
         ["vii", "phenyl &lt; 2-phenylethyl &lt; benzyl radical", "in-plane σ radical &lt; primary alkyl radical &lt; delocalised benzyl radical"],
         ["viii", "alkyl &lt; allylic cyclohexenyl &lt; cyclohexadienyl radical", "number of conjugated double bonds"],
         ["ix", "b &lt; a", "more extended delocalisation (dienyl radical) for a"],
         ["x", "vinyl &lt; cyclohexenylmethyl &lt; allyl &lt; tertiary allyl radical", "s-character and delocalisation, then substitution (key order)"]],
        widths=[8, 42, 50])

    # ---------------------------------------------------------------- S-I
    tab("5F.3  Exercise S-I (Q1–Q25)", [
        ["1", "(C)", "Cyclopentadienyl anion is aromatic (6π, planar, cyclic)."],
        ["2", "(A, D)", "Ethanol has the higher boiling point and forms intermolecular H-bonds; dimethyl ether cannot H-bond to itself."],
        ["3", "(D)", "The nitrile carbon is sp-hybridised: highest s-character and the most electronegative carbon."],
        ["4", "(C)", "The CH<sub>3</sub> group hyperconjugates better than CD<sub>3</sub> (the C–H bond is weaker/longer-ranging than C–D)."],
        ["5", "(A, B, D)", "In acetate and formate both C–O bonds are equal and the two resonance structures are equivalent."],
        ["6", "A → P, S; B → Q, R; C → Q, S; D → P, S", "NO<sub>2</sub>: −R, −I; O<sup>−</sup>: +R, +I; OCH<sub>3</sub>: +R, −I; CN: −R, −I."],
        ["7", "A → P, Q, S; B → R; C → P, S; D → Q, S", "–N=O: +M (lone pair), −M (π acceptor), −I; CH<sub>3</sub>: +H; –NHCOCH<sub>3</sub>: +M, −I; –COOCH<sub>3</sub>: −M, −I."],
        ["8", "A → R; B → S; C → P, T; D → Q", "Ethyl: +I only; NH<sub>3</sub><sup>+</sup>: −I only; OH and NH<sub>2</sub>: −I and +M; NO<sub>2</sub>: −I and −M."],
        ["9", "A → Q, S; B → P, S; C → P, S; D → R, S", "A bicyclic 8π system is non-aromatic/cyclic, naphthalene and tropylium are aromatic and cyclic, and the cyclopentadienyl cation is antiaromatic. ‡"],
        ["10", "(D)", "The statement is false when bond a is the C=O (it is longer in the ester, whose O lone pair donates into only one C=O, than in the anhydride, where it is shared); the reason is true. ‡"],
        ["11", "(A)", "t-Bu<sup>+</sup> &gt; i-Pr<sup>+</sup> &gt; Et<sup>+</sup> and the number of hyperconjugative structures (9, 6, 3) explains it."],
        ["12", "(D)", "Statement I is false (hyperconjugation in 2-butene slightly lowers the barrier compared with ethylene); statement II is true."],
        ["13", "(A)  I &gt; II &gt; III", "Neutral vinyl chloride form first; then the form with the negative charge on carbon and positive on Cl, then the one with positive on C."],
        ["14", "(A)", "Benzyl has more resonance structures (five) than allyl (two)."],
        ["15", "(B)", "⁻CH<sub>2</sub>–CHO and CH<sub>2</sub>=CH–O<sup>−</sup> are resonance forms; the others are tautomers or different species."],
        ["16", "(D)", "t-Butyl cation is the most stable."],
        ["17", "(C)", "The most substituted, tertiary cation."],
        ["18", "(C)", "The vinyl cation (I) is less stable than ethyl (II)."],
        ["19", "(B)", "Structure II is unlikely because nitrogen has only a sextet."],
        ["20", "(C)", "Structure II is unacceptable because nitrogen would have ten valence electrons."],
        ["21", "(C)", "Delocalisation lowers both the potential energy and the electron–electron repulsion."],
        ["22", "(D)  I, IV", "Most stable tropylium (I); least stable isopropyl (IV) among those listed."],
        ["23", "(B)", "The cation formed from Ph<sub>3</sub>CBr, trityl, is the most stable."],
        ["24", "(4)", "Naphthalene, squaric acid, azulene and tropone are counted aromatic; the pyrrolium and cycloheptatriene are not. ‡"],
        ["25", "(4)", "Unstable: cyclobutadiene, pentalene, cyclopentadienone and borole."],
    ])

    # ---------------------------------------------------------------- J-Main
    tab("5F.4  Exercise J-Main (Q1–Q31)", [
        ["1", "(1)", "(CH<sub>3</sub>)<sub>3</sub>C– &gt; (CH<sub>3</sub>)<sub>2</sub>CH– &gt; CH<sub>3</sub>CH<sub>2</sub>– (+I order)."],
        ["2", "(3)", "Formate has two equivalent resonance forms."],
        ["3", "(3)", "Acetonitrile has an sp carbon and an sp<sup>3</sup> one, no sp<sup>2</sup> carbon."],
        ["4", "(2)", "An unpaired electron makes a free radical reactive."],
        ["5", "(4)", "(CH<sub>3</sub>)<sub>2</sub>CH• &lt; (CH<sub>3</sub>)<sub>3</sub>C• &lt; (C<sub>6</sub>H<sub>5</sub>)<sub>2</sub>CH• &lt; (C<sub>6</sub>H<sub>5</sub>)<sub>3</sub>C•."],
        ["6", "(1)", "CCl<sub>3</sub><sup>−</sup> &gt; benzyl &gt; i-Pr<sup>−</sup> &gt; t-Bu<sup>−</sup>."],
        ["7", "(1)", "Cyclopentadiene has an sp<sup>3</sup> carbon: non-aromatic."],
        ["8", "(3)", "o-Nitrophenol is intramolecularly H-bonded, so it is steam volatile and less soluble."],
        ["9", "(4)", "Antiaromatic: the cyclopentadienyl cation (V) and cyclobutadiene (VI)."],
        ["10", "(3)", "CCl<sub>4</sub> is tetrahedral and non-polar."],
        ["11", "(4)", "III &gt; I &gt; II: benzyl &gt; allyl &gt; n-propyl."],
        ["12", "(2)", "p-Dihydroxy and p-dimercapto benzenes have a net dipole because the O–H/S–H bonds are out of the ring plane; the p-dichloro and p-dicyano compounds are symmetric (μ = 0)."],
        ["13", "(4)", "4,4-Dimethylcyclohexa-2,5-dienone has the least resonance stabilisation; benzene, furan and pyridine are aromatic."],
        ["14", "(1)", "Alkoxide stability: the nitro-substituted enolate-type C &gt; the nitro-substituted B &gt; A."],
        ["15", "(1)  a &lt; b &lt; c", "The trans,trans-2,4-hexadiene is the most stable (smallest heat of combustion), the cis,cis the least."],
        ["16", "(3)", "Vinyl chloride has the shortest C–Cl bond (sp<sup>2</sup> carbon and p–π overlap)."],
        ["17", "(2)", "Benzene and the cyclopentadienyl anion are aromatic."],
        ["18", "(3)", "Benzyl and allyl cations are resonance-stabilised; the other two are not conjugated with the cationic carbon."],
        ["19", "(4)", "CH<sub>3</sub>CH<sub>2</sub>CH=CHCH<sub>2</sub>NH<sub>2</sub> has no conjugation."],
        ["20", "(3)", "Statement I is true; II is false: hyperconjugation in ethyl cation involves a C(sp<sup>3</sup>)–H σ bond, not sp<sup>2</sup>."],
        ["21", "(1)", "Both statements are correct (weak π bonds, and a C=C is stronger than a C–C)."],
        ["22", "(3)", "p-Benzoquinone is the conjugated diketone."],
        ["23", "(1)", "The cyclopropenyl cation is aromatic and the most stable."],
        ["24", "(2)", "The cyclopentadienyl anion and the tropylium cation are aromatic; the other two are not."],
        ["25", "(4)", "CH<sub>3</sub>O–CH=CH–CH=CH–CH<sub>2</sub><sup>+</sup>: the longest conjugation with an oxygen donor."],
        ["26", "(3)", "[10]Annulene, although 4n+2, is non-planar (the inner H atoms clash), hence non-aromatic."],
        ["27", "(1 and 2)", "Phenalene-type (1) and cyclooctatetraene (2) are not benzenoid."],
        ["28", "NTA (1); Allen (4)", "[6]Annulene is aromatic, [8]annulene is not, but cis-[10]annulene is not planar and so not aromatic: the assertion is wrong and the reason (planarity is required) is right: option 4 (the NTA's published option was 1)."],
        ["29", "(1)", "Charge at the position ortho to NH<sub>2</sub> is stabilised by the N lone pair (iminium form); the NTA key follows the nitrogen's +M effect."],
        ["30", "NTA (2); Allen: bonus", "No printed option matches: the correct increasing order is C &lt; A &lt; B &lt; D."],
        ["31", "(3)", "Both correct and R explains A: the delocalised π electrons lie in bonding molecular orbitals, so benzene is more stable than the localised hypothetical cyclohexatriene."],
    ])

    # ---------------------------------------------------------------- J-Advanced
    tab("5F.5  Exercise J-Advanced (Q1–Q18)", [
        ["1", "(D) ⚑", "The key gives 1,3-butadiene. Tabulated heats of hydrogenation per mole of H<sub>2</sub> are about 28.5 for butadiene (57 for two) and 27.6 for trans-2-butene, which is lower, so by that data (B) would win; the intended argument is conjugation lowering ΔH relative to 1-butene (30.3). Use (D) for the key."],
        ["2", "(D)", "p-Methoxybenzyl: +M of OCH<sub>3</sub>."],
        ["3", "(B)  IV &lt; I &lt; II &lt; III", "p-Dichlorobenzene (0) &lt; toluene (0.4) &lt; m-dichloro (1.5) &lt; o-dichloro (2.5 D)."],
        ["4", "(C)", "The form with a pentavalent nitrogen (O=N=O) is the most unlikely resonance structure."],
        ["5", "(A)", "An aromatic molecule does not have 4nπ electrons."],
        ["6", "(D)", "p-Hydroxybenzoic acid has the higher boiling point (intermolecular H-bonding); the o-isomer is intramolecularly H-bonded. Statement I is false, II is true."],
        ["7", "(A)", "CH<sub>3</sub>Cl has the highest dipole moment (1.9 D); CCl<sub>4</sub> is zero."],
        ["8", "enol resonance", "CH<sub>2</sub>=C(OH)–CH<sub>2</sub>CH=CH<sub>2</sub> ↔ ⁻CH<sub>2</sub>–C(=O<sup>+</sup>H)–CH<sub>2</sub>CH=CH<sub>2</sub>: only the enol C=C–O is conjugated; the other C=C is isolated."],
        ["9", "(D)", "The structure with unlike charges placed far from stabilising atoms and with a sextet is the least stable."],
        ["10", "(A) ‡", "The form with the positive charge and negative charge farthest from the nitro group stabilisation is least stable."],
        ["11", "(D)  I &gt; III &gt; II &gt; IV ‡", "The two α-alkoxy cations (oxocarbenium) come first, and of the alkyl cations the branched one (II) beats the more remote primary-type one (IV)."],
        ["12", "(B)  I &gt; III &gt; II &gt; IV", "Diazomethane forms: all octets and no charge on C first; then the form with N≡N<sup>+</sup>; the carbanion/cation forms with a sextet last."],
        ["13", "6", "α C–H bonds of the cyclohexyl–C<sup>+</sup>(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub> cation: CH<sub>3</sub> (3) + CH<sub>2</sub> (2) + the ring CH (1) = 6."],
        ["14", "(B, C)", "Cyclobutadiene and cyclopentadienone are unstable (antiaromatic); the others are stable."],
        ["15", "(A)", "t-Bu<sup>+</sup> is stabilised by σ→p(empty) hyperconjugation; 2-butene by σ→π* delocalisation."],
        ["16", "6", "Melamine: three lone pairs on the ring N atoms and three on the NH<sub>2</sub> nitrogens: 6."],
        ["17", "9", "Resonance structures of the naphthoxide ion: 9."],
        ["18", "5", "Aromatic: cyclopropenyl cation, tropylium, cyclopentadienyl anion, phenanthrene and the dihydronaphthalene (its benzene ring): 5."],
    ])
    B.warn("<b>⚑ Check, summary.</b> Disagreements between your sources that I have flagged: O-II Q8 (corrected in Part 5B: the key says neopentyl); O-II Q9(vi) (key vs the Allen solution page); J-Advanced Q1 (key vs tabulated heats of hydrogenation); J-Main Q28 and Q30 (the NTA answer differs from Allen's). "
           "Items marked ‡ rely on the key because the drawing was too small for me to verify independently; if you want any of them proved from scratch, send the structure at a larger size.")
    return qs
