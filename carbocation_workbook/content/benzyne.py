from .common import *
from .lg import S

BZ = "C1#CC=CC=C1"


def build(B):
    B.part("Part 12", "Benzyne (Arynes): Structure, Generation, Evidence and Reactions")
    B.p("<b>Benzyne</b> (1,2-didehydrobenzene, C<sub>6</sub>H<sub>4</sub>) is a highly strained, short-lived reaction intermediate in which two adjacent carbons of a benzene ring have lost their substituents and share an additional, in-plane, bond. "
        "It is the simplest <b>aryne</b> (aromatic ring with a formal triple bond), first proposed by Wittig (1942) and demonstrated by Roberts (1953, 14C-labelled chlorobenzene) and by trapping with furan (Wittig, 1955).")
    B.h2("12.1  Structure and bonding")
    B.fig(S([("benzyne", BZ), ("furan adduct", "C1=CC2OC1c1ccccc12")]), "Left: benzyne drawn as cyclohexa-1,3-dien-5-yne (the ‘triple bond’ is one σ + one π of the aromatic sextet + one extra in-plane bond). Right: the Diels–Alder adduct with furan (1,4-epoxy-1,4-dihydronaphthalene), the standard proof of existence.")
    B.ul(["The <b>aromatic π sextet</b> (six p orbitals perpendicular to the ring plane) is intact: benzyne is still aromatic.",
          "The ‘third’ bond is formed by the sideways overlap of the two <b>sp<sup>2</sup> orbitals</b> that held the leaving groups (H and X); these orbitals lie <i>in the plane of the ring</i>, pointing away from the ring centre at ≈ 120°, so they cannot overlap well. The overlap is poor, the extra bond is <b>very weak and strained</b> (strain ≈ 50 kcal mol<sup>−1</sup>) and the LUMO is low: benzyne is a strong electrophile/dienophile.",
          "<b>It is not a true alkyne</b>: the C≡C is not linear (ring angles ≈ 127° at the benzyne carbons), the bond is longer (≈ 1.24 Å) than a normal triple bond (1.20 Å) and shorter than an aromatic bond, and the carbons are sp<sup>2</sup> (not sp). It has no net charge, no unpaired electrons (diamagnetic) and a dipole moment; lifetime ≈ 10<sup>−6</sup>–10<sup>−3</sup> s; observed in matrix isolation (IR 1846 cm<sup>−1</sup>, ‘C≡C’ stretch, intermediate between a double and a triple bond)."])
    B.h2("12.2  Generation of benzyne")
    B.table(["Method", "Reagents", "Equation", "Comment"],
        [["Elimination–addition (strong base)", "Ar–X + NaNH<sub>2</sub>/liquid NH<sub>3</sub>; KNH<sub>2</sub>; PhLi; LDA", "ArX + NH<sub>2</sub><sup>−</sup> → C<sub>6</sub>H<sub>4</sub> + X<sup>−</sup> + NH<sub>3</sub>; benzyne + NH<sub>2</sub><sup>−</sup> → anilide → aniline", "<b>requires an ortho H</b> (2,6-disubstituted halides do not react); rate X: Br &gt; I &gt; Cl ≫ F"],
         ["From o-dihalides", "1-bromo-2-fluorobenzene + Mg (THF); o-dibromobenzene + n-BuLi (−100 °C); Li–Hg", "metal–halogen exchange gives o-haloaryl-M, which loses MX", "o-FC<sub>6</sub>H<sub>4</sub>MgBr → C<sub>6</sub>H<sub>4</sub> + MgBrF"],
         ["From benzenediazonium-2-carboxylate", "anthranilic acid + isopentyl nitrite (diazotisation), or the zwitterion", "C<sub>6</sub>H<sub>4</sub>(N<sub>2</sub><sup>+</sup>)(COO<sup>−</sup>) → C<sub>6</sub>H<sub>4</sub> + N<sub>2</sub> + CO<sub>2</sub> (Δ)", "clean, but the zwitterion is explosive when dry"],
         ["Kobayashi precursor", "2-(trimethylsilyl)phenyl triflate + F<sup>−</sup> (CsF, Bu<sub>4</sub>NF)", "F<sup>−</sup> attacks Si; C–Si electrons expel OTf<sup>−</sup>", "mild, neutral, the modern method"],
         ["From phthalic anhydride / benzothiadiazole dioxide / 1-aminobenzotriazole (oxidation)", "Pb(OAc)<sub>4</sub>, hν", "loss of N<sub>2</sub>, CO, CO<sub>2</sub> from a fused five-membered ring", "gas-phase and photochemical routes"],
         ["Dehalogenation of o-halo triflates", "ArBr(OTf) + n-BuLi", "Li–Br exchange then loss of LiOTf", "fast, low temperature"]],
        widths=[20, 24, 34, 22])
    B.h2("12.3  Mechanisms (arrow-validated)")
    c = []
    c.append(ex("12.1", "Elimination step: bromobenzene + NH<sub>2</sub><sup>−</sup> → benzyne",
        "[Br:1][C:2]1=[C:3]([H:4])[CH:5]=[CH:6][CH:7]=[CH:8]1",
        [St([A(('lp', 90), ('nb', 90, 4), 0.5), A(('b', 3, 4), ('nb', 3, 2), 0.5), A(('b', 2, 1), ('lp', 1), -0.5)], "NH_2^− (strong base)", add="[NH2-:90]", expect="C1#CC=CC=C1.N.[Br-]")],
        "C1#CC=CC=C1.N.[Br-]",
        "Amide removes the proton ortho to Br (the sp<sup>2</sup> C–H is acidified by the adjacent C–Br dipole), the C–H electrons form the in-plane bond to C-1, and bromide leaves. In terms of mechanism this is E2 (or E1cB with the aryl anion of F). The reaction needs a base strong enough to remove an aromatic H (pK<sub>a</sub> ≈ 43): NaNH<sub>2</sub> (NH<sub>3</sub> pK<sub>a</sub> ≈ 38) is effective only because C–X departure is concerted."))
    c.append(ex("12.2", "Addition step: benzyne + NH<sub>2</sub><sup>−</sup> → aryl anion → aniline",
        BZ.replace("C1#CC=CC=C1", "[C:1]1#[C:2][CH:3]=[CH:4][CH:5]=[CH:6]1") + ".[NH2-:10]",
        [St([A(('lp', 10), ('nb', 10, 1), 0.5), A(('b', 1, 2), ('lp', 2), -0.5)], "nucleophilic addition", carbanions=[2], expect="[NH2]C1=CC=CC=[C-]1".replace("[NH2]C1=CC=CC=[C-]1", "NC1=CC=CC=[C-]1")),
         St([A(('lp', 2), ('nb', 2, 20), 0.5), A(('b', 20, 21), ('lp', 21), -0.5)], "NH_3 (proton)", add="[N:21]([H:20])([H:22])[H:23]", carbanions=[2], expect="Nc1ccccc1.[NH2-]")],
        None,
        "The nucleophile adds to one carbon of the strained C≡C and the in-plane π pair moves to the neighbouring carbon, giving an aryl <i>σ</i>-carbanion (lone pair in the sp<sup>2</sup> orbital in the plane, not conjugated with the ring), which is protonated by ammonia: aniline. In the Roberts experiment 1-<sup>14</sup>C-chlorobenzene gave aniline with 50 % of the label at C-1 and 50 % at C-2, because the two benzyne carbons are equivalent: this is cine substitution evidence.", width=680))
    c.append(ex("12.3", "Benzyne from benzenediazonium-2-carboxylate",
        "[O-:1][C:2](=[O:3])[C:4]1=[C:5]([N+:6]#[N:7])[CH:8]=[CH:9][CH:10]=[CH:11]1",
        [St([A(('lp', 1), ('nb', 1, 2), 0.5), A(('b', 2, 4), ('nb', 4, 5), 0.5), A(('b', 5, 6), ('lp', 6), -0.5)], "Δ", expect="C1#CC=CC=C1.O=C=O.N#N")],
        "C1#CC=CC=C1.O=C=O.N#N",
        "Three simultaneous electron shifts: the carboxylate oxygen forms the second C=O of CO<sub>2</sub>, the C–C σ pair becomes the new in-plane bond, and N<sub>2</sub> leaves with the C–N pair. All three leaving groups (CO<sub>2</sub>, N<sub>2</sub>) are gases, so the reaction is irreversible and clean."))
    c.append(ex("12.4", "Kobayashi benzyne: 2-(trimethylsilyl)phenyl triflate + F<sup>−</sup>",
        "[CH3:20][Si:21]([CH3:22])([CH3:23])[C:4]1=[C:5]([O:6][S:7](=[O:8])(=[O:9])[C:10]([F:11])([F:12])[F:13])[CH:14]=[CH:15][CH:16]=[CH:17]1",
        [St([A(('lp', 30), ('nb', 30, 21), 0.5), A(('b', 21, 4), ('nb', 4, 5), 0.5), A(('b', 5, 6), ('lp', 6), -0.5)], "F^− (CsF)", add="[F-:30]", expect="C1#CC=CC=C1.C[Si](C)(C)F.[O-]S(=O)(=O)C(F)(F)F")],
        "C1#CC=CC=C1.C[Si](C)(C)F.[O-]S(=O)(=O)C(F)(F)F",
        "Fluoride, a hard nucleophile with a huge affinity for silicon (Si–F 135 kcal mol<sup>−1</sup>), attacks Si; the C–Si bond pair becomes the in-plane bond while triflate (an excellent leaving group) departs. No strong base is needed, so benzyne can be generated in the presence of base-sensitive traps.", width=680))
    c.append(ex("12.5", "Diels–Alder trapping of benzyne with furan (the proof of benzyne)",
        "[CH:1]1=[CH:2][CH:3]=[CH:4][O:5]1.[C:6]1#[C:7][CH:8]=[CH:9][CH:10]=[CH:11]1",
        [St([A(('b', 6, 7), ('nb', 6, 1), 0.5), A(('b', 1, 2), ('nb', 2, 3), 0.5), A(('b', 3, 4), ('nb', 4, 7), 0.5)], "[4+2]", expect="C1=CC2OC1c1ccccc12".replace("C1=CC2OC1c1ccccc12", "C1=CC2OC1C1=CC=CC=C12"))],
        None,
        "The diene (furan) and the dienophile (benzyne) join in one concerted step in which the weak in-plane bond of benzyne is converted into two σ bonds. The adduct, 1,4-dihydronaphthalene-1,4-endoxide, is stable and isolated; it is the classical evidence that benzyne forms when no nucleophile is present. Anthracene (→ triptycene) and cyclopentadiene are also used as traps."))
    B.grid(c, 2)
    B.h2("12.4  Evidence for the benzyne mechanism")
    B.table(["Observation", "Meaning"],
        [["Roberts (1953): PhCl(1-<sup>14</sup>C) + KNH<sub>2</sub>/NH<sub>3</sub> gave aniline with 14C at C-1 and C-2 in equal amounts", "the two benzyne carbons are equivalent: elimination then addition (cine substitution)"],
         ["o-, m- and p-bromotoluene with NaNH<sub>2</sub> give mixtures of toluidines (o-: o- + m-; m-: o- + m- + p-; p-: m- + p-)", "different benzynes are formed; the nucleophile may attack either carbon"],
         ["2,6-dimethylbromobenzene (no ortho H) does not react with NaNH<sub>2</sub>/NH<sub>3</sub>", "an ortho H is required for the elimination"],
         ["Trapping with furan, anthracene, tetraphenylcyclopentadienone, cyclopentadiene, or reaction with a nucleophile present", "an intermediate that is both an electrophile and a dienophile"],
         ["Isotope exchange: PhBr in KNH<sub>2</sub>/ND<sub>3</sub> exchanges ortho H with D before reaction", "the aryl anion (E1cB) is formed reversibly"],
         ["Halide reactivity order Br &gt; I &gt; Cl ≫ F in NaNH<sub>2</sub>/NH<sub>3</sub>", "for F the C–F cleavage (leaving group loss) is the slow step; for Cl, Br the C–H proton removal is fast and C–X cleavage is rate-determining at intermediate X; the order reflects both acidity and leaving-group ability"]],
        widths=[55, 45])
    B.h2("12.5  Regiochemistry of nucleophilic addition to substituted benzynes")
    B.p("The nucleophile adds to that carbon of the benzyne triple bond that gives the <b>more stable aryl carbanion</b> (an sp<sup>2</sup> σ-carbanion). The carbanion is not conjugated to the ring π system, so <b>only the inductive effect</b> of the substituent matters: an −I group stabilises the carbanion best when it is <b>closest</b> to the carbanion carbon.")
    B.table(["Benzyne", "Substituent effect", "Where Nu<sup>−</sup> adds; major product"],
        [["3-methoxybenzyne (from o- or m-bromoanisole)", "−I of OMe (σ-withdrawing)", "C-1 (meta to OMe) so that the carbanion forms at C-2, next to OMe → <b>m-anisidine</b> (3-methoxyaniline)"],
         ["3-methylbenzyne (from o-bromotoluene)", "CH<sub>3</sub> is +I: slight effect; steric", "≈ 50 : 50 or slightly favouring meta → <b>o-toluidine and m-toluidine</b> (nearly equal)"],
         ["4-methylbenzyne (from p-bromotoluene or m-bromotoluene)", "the methyl is remote from both carbons", "m- and p-toluidine, ≈ 1 : 1"],
         ["3-(trifluoromethyl)benzyne", "strong −I (CF<sub>3</sub>)", "attack at C-1 (meta) gives the carbanion next to CF<sub>3</sub>: <b>meta</b> product"],
         ["4-(trifluoromethyl)benzyne", "−I of CF<sub>3</sub> is felt more at the nearer carbon (C meta to CF<sub>3</sub> is closer than the para carbon)", "attack so that the carbanion forms meta to CF<sub>3</sub> (nearer) – i.e. the nucleophile ends up <b>para</b> to CF<sub>3</sub>"]],
        widths=[30, 28, 42])
    B.warn("<b>Counting problems.</b> A halotoluene with NaNH<sub>2</sub> gives 2 aminotoluenes (o- or p-halo) or 3 (m-halo). o-Bromotoluene has one ortho H and gives one benzyne (3-methylbenzyne → o- and m-toluidine). m-Bromotoluene has two different ortho H (at C-2 and C-4) and gives two benzynes (3-methyl- and 4-methylbenzyne → o-, m-, p-toluidine: 3 products with m- from both). p-Bromotoluene has two equivalent ortho H and gives one benzyne (4-methylbenzyne → m- and p-toluidine). "
           "A substrate with <b>no</b> ortho H (2,6-disubstituted aryl halide) cannot form benzyne with NaNH<sub>2</sub>.")
    B.h2("12.6  Reactions of benzyne")
    B.table(["Reaction", "Example", "Product"],
        [["Nucleophilic addition", "Nu<sup>−</sup> = NH<sub>2</sub><sup>−</sup>, RO<sup>−</sup>, R<sub>2</sub>N<sup>−</sup>, RS<sup>−</sup>, enolates, Grignards", "ArNu after protonation (aniline, phenyl ethers, aryl ketones by enolate addition)"],
         ["[4+2] Diels–Alder", "furan, anthracene, cyclopentadiene, 1,3-butadiene", "bicyclic adducts (1,4-epoxynaphthalene, triptycene)"],
         ["[2+2] with alkenes", "benzyne + enol ether, ketene acetals", "benzocyclobutenes"],
         ["Ene reaction", "benzyne + propene", "allylbenzene"],
         ["σ-Insertion", "benzyne + C–C(=O), N–Si, Sn–Sn", "ortho-disubstituted arenes"],
         ["Trimerisation (Pd) / dimerisation", "3 C<sub>6</sub>H<sub>4</sub> → triphenylene; 2 C<sub>6</sub>H<sub>4</sub> → biphenylene", "in the absence of traps"],
         ["Reaction with a second molecule of aryl anion", "ArH + benzyne → biaryl", "diarylamine/ biaryl by-products"]],
        widths=[22, 42, 36])
    from . import benzyne_adv as adv
    adv.theory(B)
    B.h2("12.15  Additional validated mechanisms")
    adv.mechanisms(B)
    B.h2("12.16  Problems on benzyne")
    qs = []
    def q(n, text, fig, ans, why):
        qs.append(Q(f"BZ-{n}", text, fig, ans, why))
    q(1, "Which statements about benzyne are correct? (A) the ‘triple bond’ is a normal sp–sp bond; (B) the extra bond is formed by overlap of two in-plane sp<sup>2</sup> orbitals; (C) the aromatic sextet is retained; (D) it is a strong dienophile.",
      S([("", BZ)]), "(B), (C), (D)", "The ring carbons stay sp<sup>2</sup>; the weak in-plane overlap makes the bond very strained and reactive, so benzyne is a powerful electrophile and dienophile while remaining aromatic.")
    q(2, "Bromobenzene is treated with NaNH<sub>2</sub> in liquid NH<sub>3</sub>. Name the intermediate and the product. What if the starting material is 2,6-dimethylbromobenzene?",
      S([("", "Brc1ccccc1"), ("", "Brc1c(C)cccc1C")]), "benzyne → aniline; no reaction for 2,6-dimethylbromobenzene", "The mechanism needs an H on the carbon ortho to Br to be removed by the base. 2,6-Dimethylbromobenzene has none, so it cannot form an aryne (it could only react by the very slow S<sub>N</sub>Ar).")
    q(3, "How many distinct aminotoluenes are formed from (a) o-, (b) m-, (c) p-bromotoluene with NaNH<sub>2</sub>/NH<sub>3</sub>?",
      S([("a", "Cc1ccccc1Br"), ("b", "Cc1cccc(Br)c1"), ("c", "Cc1ccc(Br)cc1")]), "(a) 2; (b) 3; (c) 2", "(a) one benzyne (3-methylbenzyne): attack at either carbon gives o- and m-toluidine. (b) two benzynes (2,3 and 3,4 pairs): 3-methylbenzyne → o-, m-; 4-methylbenzyne → m-, p-: o-, m-, p- in total. (c) one benzyne (4-methylbenzyne): m- and p-toluidine.")
    q(4, "o-Bromoanisole + NaNH<sub>2</sub>/NH<sub>3</sub> gives mainly which product and why?",
      S([("", "COc1ccccc1Br"), ("→", "COc1cccc(N)c1")]), "m-anisidine (3-methoxyaniline)", "The benzyne is 3-methoxybenzyne. NH<sub>2</sub><sup>−</sup> attacks C-1, the carbon farther from OMe (meta), so that the carbanion forms at C-2, adjacent to the electronegative OMe where its −I effect stabilises the in-plane carbanion.")
    q(5, "Chlorobenzene and the following reagents: (i) NaNH<sub>2</sub>/NH<sub>3</sub>, (ii) NaOH, 350 °C (Dow process), (iii) OH<sup>−</sup>, 25 °C. Which proceed through benzyne?",
      None, "(i) and (ii)", "Strong bases (NH<sub>2</sub><sup>−</sup>; HO<sup>−</sup> at 350 °C and high pressure) remove ortho H to give benzyne. At 25 °C hydroxide does not react with unactivated PhCl at all. With an o- or p-nitro group the reaction is addition–elimination (S<sub>N</sub>Ar, Meisenheimer complex), not benzyne.")
    q(6, "Arrange the aryl halides in decreasing reactivity toward KNH<sub>2</sub>/NH<sub>3</sub> via benzyne: C<sub>6</sub>H<sub>5</sub>F, C<sub>6</sub>H<sub>5</sub>Cl, C<sub>6</sub>H<sub>5</sub>Br, C<sub>6</sub>H<sub>5</sub>I.",
      None, "Br &gt; I &gt; Cl ≫ F (Roberts)", "The rate depends on two steps – removal of the ortho H and loss of X<sup>−</sup>. The H of fluorobenzene is the most acidic (strong −I of F) but F is a poor leaving group; for I the C–I bond is weak but the ortho H is less acidic. Bromine balances both best.")
    q(7, "Benzenediazonium-2-carboxylate is heated in the presence of furan. Give the product.",
      S([("", "C1=CC2OC1c1ccccc12")]), "1,4-dihydro-1,4-epoxynaphthalene", "Loss of CO<sub>2</sub> and N<sub>2</sub> gives benzyne, trapped by the diene in a [4+2] cycloaddition.")
    q(8, "In the benzyne mechanism, what is the hybridisation of the carbons of the strained bond and what is the C≡C bond angle?",
      None, "sp<sup>2</sup>; ≈ 120–127° (not 180°)", "A linear sp-hybridised alkyne carbon would need 180°; in a six-membered ring the angle is forced to ≈ 120–127°, so each benzyne carbon is sp<sup>2</sup> with an in-plane orbital.")
    q(9, "A halobenzene with a strongly electron-withdrawing group ortho or para to the halogen reacts with HO<sup>−</sup> at room temperature. By which mechanism?",
      S([("", "O=[N+]([O-])c1ccc(Cl)cc1[N+](=O)[O-]")]), "addition–elimination (S<sub>N</sub>Ar), not benzyne", "The nucleophile adds to the ipso carbon, giving a resonance-stabilised Meisenheimer anion with negative charge on the nitro groups, then chloride is lost. The benzyne path needs a very strong base and has no requirement of an EWG. (Chlorine as a leaving group: F ≫ Cl ≈ Br ≈ I in S<sub>N</sub>Ar, the reverse of the benzyne order.)")
    q(10, "Compare benzyne with the other reactive intermediates: how many π electrons in the ring, and is it charged?",
      None, "6π (aromatic) + 2 electrons in the extra in-plane bond; neutral", "Benzyne has all electrons paired, no charge and no unpaired electrons; the unusual reactivity arises from strain and from the low-lying in-plane LUMO.")
    adv.problems(B, q)
    from . import exam_extra
    exam_extra.add("BZ", q)
    B.answers(qs, with_stem=True)
    return qs
