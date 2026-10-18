from .common import *
from .lg import S


def build(B):
    B.part("Part 11", "Nitrenes: Structure, Generation, Reactions and the Rearrangements that Mimic Them")
    B.p("A <b>nitrene</b> (azene, imene) is the nitrogen analogue of a carbene: R–N:, a <b>monovalent nitrogen with six valence electrons</b> (one bond pair + two non-bonding pairs-worth of electrons = a lone pair and two further electrons). "
        "It is electron-deficient (sextet on N), neutral, and highly reactive. Because nitrogen is more electronegative than carbon, nitrenes are somewhat less electrophilic than carbenes of the same substituent, but they undergo the same family of reactions (insertion, addition, rearrangement).")
    B.h2("11.1  Singlet and triplet nitrenes")
    B.table(["", "Triplet nitrene (ground state for most R–N, NH)", "Singlet nitrene"],
        [["Electron arrangement", "lone pair in the s-type orbital; <b>one electron in each of two degenerate p orbitals</b>, spins parallel (↑ ↑): like O<sub>2</sub> and CH<sub>2</sub> (triplet)", "lone pair in an sp-type orbital and a second pair in one p orbital; the other p orbital is <b>empty</b>"],
         ["Magnetism", "paramagnetic (S = 1; ESR)", "diamagnetic"],
         ["Reactions", "radical-like: H-abstraction then recombination; dimerisation to R–N=N–R; non-stereospecific addition to alkenes", "concerted: stereospecific aziridine formation (syn); C–H insertion with retention; rearrangements (acyl → isocyanate)"],
         ["Generated first from", "photolysis/thermolysis of azides gives singlet nitrene first; intersystem crossing to the triplet competes (fast for alkyl and aryl nitrenes)", "most acyl and sulfonyl nitrenes in solution"]],
        widths=[16, 42, 42])
    B.p("The singlet–triplet gap of NH is ≈ 36 kcal mol<sup>−1</sup> (triplet lower), much larger than that of CH<sub>2</sub> (9), so triplet is the ground state of almost all nitrenes. Aryl nitrenes can ring-expand to dehydroazepines (see 11.4). "
        "Also compare: <b>nitrenium ions</b> R<sub>2</sub>N<sup>+</sup> (six electrons, positive charge; analogues of carbenium ions) and <b>nitrenoids</b> (N–X species that transfer N like a nitrene without free R–N:).")
    B.h2("11.2  Generation of nitrenes")
    B.table(["Method", "Equation", "Remarks"],
        [["Azide decomposition", "R–N=N<sup>+</sup>=N<sup>−</sup> → R–N: + N<sub>2</sub> (hν or Δ)", "the standard source (alkyl, aryl, acyl, sulfonyl azides); N<sub>2</sub> is the leaving group"],
         ["α-Elimination from N-halo or N-sulfonyloxy compounds", "R–NH–X (X = Br, OSO<sub>2</sub>Ar) + base → R–N: + HX", "Hofmann bromamide and Lossen rearrangements are of this type (but see 11.3)"],
         ["Deoxygenation of nitro/nitroso compounds", "Ar–NO<sub>2</sub> + 2 P(OEt)<sub>3</sub> → Ar–N: + 2 O=P(OEt)<sub>3</sub> (Cadogan)", "nitrene cyclises onto a neighbouring ring (2-nitrobiphenyl → carbazole)"],
         ["Iminoiodinanes", "PhI=NTs + Cu(I) or Rh<sub>2</sub>(OAc)<sub>4</sub> → metal-nitrene → aziridine", "transition-metal-catalysed nitrene transfer"],
         ["Photolysis of isocyanates or diazirines", "R–N=C=O → R–N: + CO (hν)", "less common"]],
        widths=[26, 42, 32])
    B.h2("11.3  Rearrangements that proceed through nitrene-like (nitrenoid) steps")
    B.p("Four named reactions end in the same <b>isocyanate</b> R–N=C=O by a <b>1,2-shift of R from C to N</b> with simultaneous loss of a leaving group from N; each is classically drawn through an acyl nitrene R–CO–N:, but the migration and the loss of the leaving group are <b>concerted</b> (no free nitrene is formed), which explains the retention of configuration at the migrating carbon. "
        "Hydrolysis of the isocyanate gives the amine R–NH<sub>2</sub> with <b>one carbon less</b>:")
    B.table(["Name", "Substrate", "Reagents", "Leaving group from N", "Product"],
        [["Hofmann bromamide", "RCONH<sub>2</sub>", "Br<sub>2</sub> + 4 NaOH", "Br<sup>−</sup>", "R–NH<sub>2</sub> (1° amine, one C less) + Na<sub>2</sub>CO<sub>3</sub>"],
         ["Curtius", "RCON<sub>3</sub> (from RCOCl + NaN<sub>3</sub>)", "Δ, then H<sub>2</sub>O", "N<sub>2</sub>", "R–NH<sub>2</sub> (or R–NH–COOR′ in ROH)"],
         ["Lossen", "RCONH–OCOR′ (hydroxamic acid ester)", "base, Δ", "R′COO<sup>−</sup>", "R–NH<sub>2</sub>"],
         ["Schmidt", "RCOOH + HN<sub>3</sub> (conc. H<sub>2</sub>SO<sub>4</sub>)", "Δ", "N<sub>2</sub>", "R–NH<sub>2</sub>"]],
        widths=[16, 24, 18, 18, 24])
    B.p("<b>Migratory aptitude</b> in these shifts is aryl ≈ tertiary alkyl &gt; secondary &gt; primary &gt; methyl; the migrating group retains its configuration; the reaction works for R = alkyl, aryl and gives an amine in which N is attached to the same carbon that was attached to C=O. "
        "(<b>Contrast</b> the <i>Beckmann</i> rearrangement of an oxime (R<sub>2</sub>C=N–OH → amide), in which the group <i>anti</i> to the leaving group migrates: C → N with loss of water, a carbocation-like (nitrilium) pathway.) The Stieglitz rearrangement of trityl hydroxylamine and N-chloroamines is the all-carbon-to-N shift with a positively charged (nitrenium-like) nitrogen.")
    c = []
    c.append(ex("11.1", "Alkyl azide → nitrene + N<sub>2</sub>",
        "[CH3:1][N:2]=[N+:3]=[N-:4]",
        [St([A(('b', 2, 3), ('lp', 2), 0.5), A(('lp', 4), ('nb', 3, 4), 0.5), A(('b', 2, 3), ('lp', 3), -0.5)], "hν or Δ", charges={2: 0}, expect="C[N].N#N")],
        "C[N].N#N",
        "The azide is a resonance hybrid R–N=N<sup>+</sup>=N<sup>−</sup> ↔ R–N<sup>−</sup>–N<sup>+</sup>≡N. Loss of N<sub>2</sub> leaves the nitrogen attached to R with only one bond and six electrons: the nitrene. The N≡N is the thermodynamic driving force (≈ 226 kcal mol<sup>−1</sup> bond energy)."))
    c.append(ex("11.2", "Singlet methylnitrene + ethene → N-methylaziridine (concerted)",
        "[CH3:1][N:2].[CH2:5]=[CH2:6]",
        [St([A(('b', 5, 6), ('nb', 5, 2), 0.5), A(('lp', 2), ('nb', 2, 6), -0.5)], "singlet: stereospecific", expect="CN1CC1")],
        "CN1CC1",
        "As for carbene cyclopropanation, the alkene π pair attacks the empty p orbital of the nitrene while the nitrene lone pair forms the second C–N bond: a one-step syn addition giving the aziridine with retention of alkene geometry. A triplet nitrene would give a mixture of cis and trans aziridines through a 1,3-diradical."))
    c.append(ex("11.3", "Curtius rearrangement: acyl azide → isocyanate (concerted, no free nitrene)",
        "[CH3:1][C:2](=[O:3])[N-:4][N+:5]#[N:6]",
        [St([A(('b', 1, 2), ('nb', 1, 4), 0.5), A(('b', 4, 5), ('lp', 5), -0.5), A(('lp', 4), ('nb', 4, 2), 0.5)], "Δ, −N_2", expect="CN=C=O.N#N")],
        "CN=C=O.N#N",
        "In the acyl azide the methyl group migrates from the carbonyl carbon to the adjacent nitrogen <i>as</i> N<sub>2</sub> leaves; the nitrogen lone pair makes the new C=N π bond. All three arrows act in one step (a concerted 1,2-shift with retention of the migrating group’s configuration). Methyl isocyanate is trapped by water: R–NHCOOH → R–NH<sub>2</sub> + CO<sub>2</sub>."))
    c.append(ex("11.4", "Hofmann bromamide: N-bromoamide anion → isocyanate",
        "[CH3:1][C:2](=[O:3])[N:4]([H:6])[Br:5]",
        [St([A(('lp', 90), ('nb', 90, 6), 0.5), A(('b', 4, 6), ('lp', 4), -0.5)], "OH^−", add="[OH-:90]", expect="CC(=O)[N-]Br.O"),
         St([A(('b', 1, 2), ('nb', 1, 4), 0.5), A(('b', 4, 5), ('lp', 5), -0.5), A(('lp', 4), ('nb', 4, 2), 0.5)], "−Br^−", expect="CN=C=O.O.[Br-]")],
        "CN=C=O.O.[Br-]",
        "Br<sub>2</sub>/NaOH brominates the amide nitrogen; a second HO<sup>−</sup> removes the remaining N–H (the proton is acidic: pK<sub>a</sub> ≈ 9) to give the bromoamide anion. The methyl group then migrates to nitrogen as bromide leaves: the isocyanate. Hydroxide adds to R–N=C=O to give the carbamate, which loses CO<sub>2</sub>: overall CH<sub>3</sub>CONH<sub>2</sub> → CH<sub>3</sub>NH<sub>2</sub> (one carbon less)."))
    c.append(ex("11.5", "Aryl azide: ring expansion (dehydroazepine) after nitrene formation",
        "[N-:1]([c:2]1[cH:3][cH:4][cH:5][cH:6][cH:7]1)[N+:8]#[N:9]",
        [St(A(('b', 1, 8), ('lp', 8), 0.5), "hν", charges={1: 0})],
        None,
        "Photolysis gives the singlet phenylnitrene, which can close to a benzazirine and then ring-expand to a 1-aza-1,2,4,6-cycloheptatetraene (didehydroazepine); in the presence of diethylamine this is trapped as a 2-diethylamino-3H-azepine. In the absence of traps the triplet nitrene dimerises to azobenzene. (Structure shown as the nitrene only.)"))
    B.grid(c, 2)
    B.h2("11.4  Reactions of nitrenes: summary")
    B.table(["Reaction", "Example", "Product"],
        [["Addition to C=C (aziridination)", "PhI=NTs, Cu(OTf)<sub>2</sub>, styrene; EtO<sub>2</sub>C–N: + alkene", "N-substituted aziridine; singlet: stereospecific; triplet: not"],
         ["C–H insertion", "alkyl/aryl/sulfonyl nitrene + R–H", "amine (N–H bond forms at the C–H carbon); intramolecular insertion gives pyrrolidines, indolines"],
         ["Rearrangement", "R–CO–N: → R–N=C=O (Hofmann, Curtius, Lossen)", "isocyanate → amine, urethane, urea"],
         ["Dimerisation", "2 ArN: → Ar–N=N–Ar", "azo compound (triplet nitrenes)"],
         ["Ring expansion of aryl nitrenes", "PhN: → azirine → azepine", "3H-azepines"],
         ["Hydrogen abstraction", "triplet nitrene + solvent R–H → R–NH• + R•", "R–NH<sub>2</sub> after H abstraction"],
         ["Cadogan cyclisation", "2-nitrobiphenyl + P(OEt)<sub>3</sub>", "carbazole"]],
        widths=[28, 40, 32])
    B.h2("11.5  Problems on nitrenes")
    qs = []
    def q(n, text, fig, ans, why):
        qs.append(Q(f"NI-{n}", text, fig, ans, why))
    q(1, "How many electrons does the nitrogen of a nitrene R–N: have in its valence shell? Is it a Lewis acid or base?",
      None, "6; both (lone pair + empty/half-filled p orbitals); mainly electrophilic", "N contributes one electron to the N–R bond; the remaining four are two non-bonding electrons in each of two orbitals in the singlet arrangement (a pair in one orbital, a vacant p) = six electrons around nitrogen: a sextet. The lone pair makes it a base, the incomplete octet makes it a Lewis acid.")
    q(2, "Identify the reactive intermediate in each: (a) RCONH<sub>2</sub> + Br<sub>2</sub> + KOH; (b) RCON<sub>3</sub>, Δ; (c) R–CH<sub>2</sub>–N<sub>3</sub>, hν; (d) CHCl<sub>3</sub> + KOH.",
      None, "(a) acyl nitrene (nitrenoid; concerted isocyanate formation), (b) same, (c) alkylnitrene, (d) dichlorocarbene", "(a) and (b) are drawn through R–CO–N:, but experimentally the R-shift and loss of Br<sup>−</sup> or N<sub>2</sub> occur together. In (c) photolysis expels N<sub>2</sub> from the azide to give R–CH<sub>2</sub>–N:. (d) is the carbene reaction of Part 10.")
    q(3, "Propanamide is treated with Br<sub>2</sub>/KOH. Name the product and say how the carbon count changes.",
      S([("", "CCC(N)=O")]), "ethanamine (ethylamine), one carbon less", "Hofmann degradation: the ethyl group migrates from C to N to give ethyl isocyanate, which is hydrolysed and decarboxylated to CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub> + CO<sub>3</sub><sup>2−</sup>.")
    q(4, "Benzamide → ? and phenylacetamide → ?; (Br<sub>2</sub>/NaOH).",
      S([("", "NC(=O)c1ccccc1"), ("", "NC(=O)Cc1ccccc1")]), "aniline; benzylamine", "The group attached to the carbonyl carbon migrates to nitrogen: phenyl in benzamide (→ PhNH<sub>2</sub>) and benzyl in phenylacetamide (→ PhCH<sub>2</sub>NH<sub>2</sub>). The migrating carbon keeps its configuration (R-CH(CH<sub>3</sub>)CONH<sub>2</sub> optically active → retained).")
    q(5, "A chiral amide (S)-CH<sub>3</sub>CH(C<sub>2</sub>H<sub>5</sub>)CONH<sub>2</sub> undergoes Hofmann degradation. What is the stereochemical result?",
      None, "retention of configuration (the amine is (S)-sec-butylamine in the CIP sense)", "The migrating carbon moves with its bonding pair in a 3-centre transition state and never becomes planar; no inversion and no racemisation occur.")
    q(6, "Which is not an intermediate or product in the Curtius rearrangement of RCOCl? (A) RCON<sub>3</sub>, (B) RN=C=O, (C) RNH<sub>2</sub>, (D) R–CH<sub>2</sub>NH<sub>2</sub>.",
      None, "(D)", "RCOCl + NaN<sub>3</sub> → RCON<sub>3</sub> → RN=C=O + N<sub>2</sub> → (H<sub>2</sub>O) RNH<sub>2</sub> + CO<sub>2</sub>. The amine has one carbon less than the acid; R–CH<sub>2</sub>NH<sub>2</sub> would have the same carbon count.")
    q(7, "Compare the Curtius, Hofmann, Lossen and Schmidt reactions by giving the leaving group lost from nitrogen.",
      None, "N<sub>2</sub>; Br<sup>−</sup>; carboxylate; N<sub>2</sub>", "Curtius (from acyl azide): N<sub>2</sub>; Hofmann (N-bromoamide anion): Br<sup>−</sup>; Lossen (O-acylhydroxamate anion): R′COO<sup>−</sup>; Schmidt (carboxylic acid + HN<sub>3</sub>, protonated acyl azide): N<sub>2</sub>. All give the isocyanate by a 1,2-shift.")
    q(8, "Phenyl azide is irradiated in the presence of excess diethylamine. Which product is expected, and what does it show about the intermediate?",
      None, "3H-azepine (2-diethylamino-3H-azepine); ring-expanded didehydroazepine", "The singlet phenylnitrene cyclises to a benzazirine, which opens to the strained cyclic ketenimine; the amine traps it. If the amine is absent the triplet nitrene dimerises to azobenzene.")
    q(9, "How does the stereochemistry of aziridine formation distinguish singlet from triplet nitrenes?",
      None, "singlet: stereospecific; triplet: loss of stereochemistry", "Singlet nitrene adds in one concerted step (syn); triplet nitrene adds one bond at a time forming a 1,3-diradical that can rotate before ring closure, so cis- and trans-alkenes give the same cis/trans aziridine mixture.")
    q(10, "Why is the triplet the ground state for most nitrenes?",
      None, "two degenerate p orbitals each hold one electron (Hund’s rule)", "In R–N: the two non-bonding p orbitals on nitrogen are degenerate (cylindrical symmetry about the R–N axis), so the lowest-energy arrangement places one electron in each with parallel spins, exactly as in O<sub>2</sub> or the NH radical.")
    B.answers(qs, with_stem=True)
    return qs
