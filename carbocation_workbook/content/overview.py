from .common import *
from .lg import S


def build(B):
    B.part("Part 13", "Radical Ions: Radical Anions and Radical Cations")
    B.p("A <b>radical ion</b> has both an unpaired electron and a net charge. A <b>radical anion</b> forms when a neutral molecule accepts one electron into its lowest empty π* orbital; a <b>radical cation</b> forms when it loses one electron from its highest filled orbital. "
        "They are the intermediates of single-electron-transfer (SET) chemistry: dissolving-metal reductions, electrochemistry, radiolysis, mass spectrometry (M<sup>•+</sup> is the molecular ion) and photoinduced electron transfer. They are normally observed by ESR spectroscopy, the hyperfine splittings giving the spin density at each atom.")
    B.fig(S([("benzene radical anion", "[CH-]1[CH]C=CC=C1".replace("[CH-]1[CH]C=CC=C1", "[CH]1[CH-]C=CC=C1")), ("naphthalene radical anion", "[CH]1[CH-]C=Cc2ccccc12".replace("[CH]1[CH-]C=Cc2ccccc12", "[CH-]1[CH]C=Cc2ccccc12")), ("ketyl radical anion", "C[C]([O-])C"), ("benzene radical cation", "[CH+]1[CH]C=CC=C1".replace("[CH+]1[CH]C=CC=C1", "[CH]1[CH+]C=CC=C1"))]),
          "Radical-ion structures (one resonance contributor; the unpaired electron and the charge are delocalised over the ring or over C and O in the ketyl).")
    B.table(["Species", "Formation", "Typical chemistry", "Why it matters"],
        [["Arene radical anion (naphthalenide, benzene<sup>•−</sup>)", "arene + Na or Li in THF / liquid NH<sub>3</sub> (electron into π*)", "strong reducing agent; protonated by ROH to a cyclohexadienyl radical, then reduced again to a carbanion and protonated", "<b>Birch reduction</b>: benzene + Na/NH<sub>3</sub>(l)/ROH → 1,4-cyclohexadiene (EDG on the ring end up on the double bond carbons; EWG on sp<sup>3</sup> carbons)"],
         ["Ketyl radical anion R<sub>2</sub>C•–O<sup>−</sup>", "ketone + Na, Mg, SmI<sub>2</sub>", "radical combination (dimerisation) or further reduction to the carbanion/alkoxide", "<b>Pinacol coupling</b> (2 R<sub>2</sub>C=O + Mg(Hg) → diol), <b>acyloin condensation</b> (2 RCOOR + Na → α-hydroxyketone), the benzophenone ketyl (a deep-blue, solvent-drying indicator)"],
         ["Nitroarene / quinone radical anion", "electrolytic or chemical one-electron reduction", "semiquinone (ArO•/ArO<sup>−</sup>) are redox intermediates in biology (ubiquinone)", "ESR detection; antibiotic and DNA-damage mechanisms"],
         ["Radical anion in S<sub>RN</sub>1", "ArX + e<sup>−</sup> → ArX<sup>•−</sup> → Ar• + X<sup>−</sup>", "chain: Ar• + Nu<sup>−</sup> → ArNu<sup>•−</sup>; ArNu<sup>•−</sup> + ArX → ArNu + ArX<sup>•−</sup>", "substitution without an activating group"],
         ["Arene radical cation", "anodic oxidation, SET to a photoexcited acceptor, Ce<sup>4+</sup>, mass-spectrometric ionisation", "deprotonation at benzylic C–H gives benzyl radicals; nucleophile addition", "<b>mass spectrometry</b>: M<sup>•+</sup> fragmentation; Kolbe anodic oxidation; conducting polymers (polyaniline, polypyrrole)"],
         ["Amine radical cation R<sub>3</sub>N<sup>•+</sup> (aminium)", "oxidation of amines (e.g. Wurster’s blue from N,N,N′,N′-tetramethyl-p-phenylenediamine)", "α-C–H deprotonation gives α-amino radical; the N-centred radical performs 1,5-HAT (Hofmann–Löffler)", "stable, coloured radical cations"]],
        widths=[20, 22, 30, 28])
    B.p("<b>Birch reduction in four steps</b> (benzene, Na, NH<sub>3</sub>(l), EtOH): (1) electron transfer gives the radical anion; (2) protonation by ethanol (a weak acid; NH<sub>3</sub> is too weak) gives a cyclohexadienyl radical; (3) a second electron gives the cyclohexadienyl anion (a pentadienyl carbanion, charge at C-1, C-3, C-5); (4) protonation at the central carbon (C-3, the position of greatest charge density) gives the non-conjugated 1,4-diene. Electron-donating groups (OMe, alkyl) sit on the sp<sup>2</sup> carbons of the product; electron-withdrawing groups (COOH) sit at the sp<sup>3</sup> end because they stabilise the carbanion at their own carbon.")
    from . import radical_ion_adv as adv
    adv.theory(B)
    B.h2("13.5  Additional validated mechanisms")
    adv.mechanisms(B)
    B.h2("13.1  Problems on radical ions")
    qs = []
    def q(n, text, fig, ans, why):
        qs.append(Q(f"RI-{n}", text, fig, ans, why))
    q(1, "What is the major product of Na/NH<sub>3</sub>(l)/EtOH on anisole, and on benzoic acid?",
      S([("anisole", "COc1ccccc1"), ("benzoic acid", "OC(=O)c1ccccc1")]), "1-methoxycyclohexa-1,4-diene; cyclohexa-2,5-diene-1-carboxylic acid", "A donor (OMe) stays on the double bond (sp<sup>2</sup> carbon), because the carbanion is least stabilised there, so the protonation occurs at the ortho and meta carbons; an acceptor (COOH) stays on the sp<sup>3</sup> carbon because it stabilises the carbanion on its own carbon, which is protonated.")
    q(2, "Mg(Hg), then H<sub>2</sub>O, is allowed to react with acetone. Name the intermediate, the product, and the acid-catalysed product.",
      S([("", "CC(C)=O")]), "ketyl radical anion; pinacol; pinacolone", "Mg transfers one electron to C=O (ketyl radical anion); two ketyls couple at carbon to the dimeric dialkoxide (pinacol after hydrolysis); H<sup>+</sup> then rearranges pinacol to pinacolone (Part 7.0, 7.10).")
    q(3, "Which species is paramagnetic? (a) benzene radical anion, (b) tropylium cation, (c) naphthalene, (d) benzophenone ketyl.",
      None, "(a) and (d)", "Both have one unpaired electron. The tropylium cation and naphthalene have all electrons paired.")
    q(4, "Mass spectrometry: what is M<sup>•+</sup>, and why do its fragments follow carbocation-stability rules?",
      None, "the molecular radical cation; fragmentation gives the more stable carbocation + radical", "Electron impact removes one electron (usually from a lone pair or π bond) to give M<sup>•+</sup>. Its cleavage into a cation and a neutral radical follows the order of carbocation stability (tertiary &gt; secondary &gt; primary; benzyl/tropylium and oxonium ions are particularly abundant, e.g. m/z 91 for alkylbenzenes).")

    adv.problems(B, q)
    B.answers(qs, with_stem=True)
    ri_qs = qs

    B.part("Part 14", "Reaction Intermediates Compared, and Integrated Problems")
    B.h2("14.1  The six intermediates at a glance")
    B.table(["", "Carbocation", "Carbanion", "Free radical", "Carbene", "Nitrene", "Benzyne"],
        [["Species", "R<sub>3</sub>C<sup>+</sup>", "R<sub>3</sub>C<sup>−</sup>", "R<sub>3</sub>C•", "R<sub>2</sub>C:", "R–N:", "C<sub>6</sub>H<sub>4</sub>"],
         ["Valence electrons on the key atom", "6 (sextet)", "8 (octet)", "7", "6", "6", "ring carbons octet; extra in-plane bond"],
         ["Charge", "+", "−", "0", "0", "0", "0"],
         ["Hybridisation / shape", "sp<sup>2</sup>, planar, 120°; empty p", "sp<sup>3</sup>, pyramidal (planar if delocalised)", "sp<sup>2</sup>, planar or shallow pyramid", "singlet: sp<sup>2</sup> bent; triplet: bent or linear", "singlet/triplet; one σ bond", "sp<sup>2</sup> carbons, in-plane overlap, strained"],
         ["Magnetism", "diamagnetic", "diamagnetic", "paramagnetic (1 e<sup>−</sup>)", "singlet dia; triplet para (2 e<sup>−</sup>)", "singlet dia; triplet para", "diamagnetic"],
         ["Character", "electrophile, Lewis acid", "nucleophile, base", "weakly electrophilic or nucleophilic", "electrophile (ambiphilic)", "electrophile (ambiphilic)", "strong electrophile, dienophile"],
         ["Formed by", "heterolysis (loss of LG), H<sup>+</sup>/E<sup>+</sup> addition to π bond", "deprotonation, metal insertion, decarboxylation", "homolysis (Δ, hν, peroxides)", "α-elimination, diazo compounds", "azides, N-halo/N-sulfonyloxy amides", "ArX + NaNH<sub>2</sub>, anthranilate, Kobayashi"],
         ["Stability order", "3° &gt; 2° &gt; 1° &gt; CH<sub>3</sub>; benzyl, allyl; aromatic (C<sub>7</sub>H<sub>7</sub><sup>+</sup>); +M groups", "sp &gt; sp<sup>2</sup> &gt; sp<sup>3</sup>; CH<sub>3</sub> &gt; 1° &gt; 2° &gt; 3°; −M, −I; aromatic (C<sub>5</sub>H<sub>5</sub><sup>−</sup>)", "benzyl ≈ allyl &gt; 3° &gt; 2° &gt; 1° &gt; CH<sub>3</sub> &gt; vinyl", "X<sub>2</sub>C: with π-donor X (F &gt; Cl &gt; Br &gt; I); NHC", "—", "—"],
         ["Rearrangement", "1,2-H, 1,2-alkyl, 1,2-aryl; ring expansion/contraction (to a more stable cation)", "rare (1,2-Wittig, Favorskii-type)", "1,2-aryl (neophyl), vinyl, acyl; <b>no H/alkyl shift</b>", "1,2-H, Wolff 1,2-shift", "acyl → isocyanate; aryl → azepine", "none"],
         ["Stereochemistry at the centre", "racemisation (planar)", "racemisation (rapid inversion)", "racemisation", "singlet: syn, stereospecific; triplet: loses stereochemistry", "same as carbene", "—"],
         ["Typical reaction", "S<sub>N</sub>1, E1, Friedel–Crafts, hydration, pinacol", "Grignard, aldol, Claisen, E1cB, Michael", "halogenation, anti-Markovnikov HBr, polymerisation, Kolbe, Wurtz", "cyclopropanation, Reimer–Tiemann, carbylamine, Wolff", "Hofmann, Curtius, aziridination", "nucleophilic aromatic via aryne, Diels–Alder"]],
        widths=[13, 15, 15, 14, 15, 14, 14])
    B.h2("14.2  Decision guide: which intermediate does this reaction go through?")
    B.table(["Clue in the question", "Intermediate"],
        [["Alkyl halide + Lewis acid or AgNO<sub>3</sub>; alcohol + conc. H<sub>2</sub>SO<sub>4</sub>; alkene + H<sup>+</sup>; ArN<sub>2</sub><sup>+</sup> on warming", "carbocation (and look for a 1,2-shift)"],
         ["Aldehyde/ketone + base; Grignard; acetylide; soda lime; E1cB; Michael", "carbanion"],
         ["Light, peroxides, high temperature, NBS, AIBN, Kolbe, HBr + peroxide, Cl<sub>2</sub>/hν", "free radical"],
         ["CHCl<sub>3</sub> + KOH; CH<sub>2</sub>N<sub>2</sub>; CH<sub>2</sub>I<sub>2</sub>/Zn(Cu); Reimer–Tiemann; carbylamine; Wolff", "carbene (or carbenoid)"],
         ["RCONH<sub>2</sub> + Br<sub>2</sub>/NaOH; RCON<sub>3</sub> + Δ; azide photolysis; one-carbon-less amine", "nitrene / nitrenoid (isocyanate)"],
         ["Aryl halide + NaNH<sub>2</sub>/NH<sub>3</sub>; no EWG on ring; mixture of meta and ortho/para products; no reaction if both ortho positions blocked", "benzyne"]],
        widths=[70, 30])
    B.h2("14.3  Integrated problems")
    qs = []
    def q(n, text, fig, ans, why):
        qs.append(Q(f"IP-{n}", text, fig, ans, why))
    q(1, "Identify the intermediate in each: (a) n-propyl chloride + AlCl<sub>3</sub> (in benzene gives cumene), (b) toluene + NBS/peroxide, (c) chlorobenzene + NaNH<sub>2</sub>, (d) CH<sub>3</sub>COONa + soda lime, (e) benzamide + Br<sub>2</sub>/KOH, (f) CHCl<sub>3</sub> + KOH + aniline.",
      None, "(a) carbocation (after a hydride shift); (b) benzylic radical; (c) benzyne; (d) carbanion CH<sub>3</sub><sup>−</sup>; (e) isocyanate via acyl nitrenoid; (f) dichlorocarbene (→ phenyl isocyanide)", "Each reagent combination is the textbook signature of the intermediate. (a) The primary cation is not formed; ionisation occurs with a concerted hydride shift to the isopropyl cation (Part 2.E3).")
    q(2, "Which of the six intermediates have an incomplete octet on the key atom?",
      None, "carbocation (6), carbene (6), nitrene (6) and free radical (7)", "The carbanion has 8 electrons; benzyne has a complete octet at each ring carbon (the extra bond is an in-plane partial bond).")
    q(3, "Arrange by the number of unpaired electrons (decreasing): triplet carbene, free radical, carbocation, singlet carbene, triplet nitrene.",
      None, "triplet carbene = triplet nitrene (2) &gt; free radical (1) &gt; carbocation = singlet carbene (0)", "Spin multiplicity 2S + 1: triplet = 3, doublet = 2, singlet = 1.")
    q(4, "How many of these species can undergo a 1,2-hydride shift? CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub><sup>+</sup>, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>•, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub><sup>−</sup>, CH<sub>3</sub>CH<sub>2</sub>CH:, CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>N:.",
      None, "3 (cation, carbene, nitrene)", "A 1,2-H shift is fast in the cation (to the secondary ion), in the alkylcarbene (CH<sub>3</sub>CH<sub>2</sub>CH: → propene) and in the alkylnitrene (→ imine). The radical does not undergo 1,2-H shifts and the carbanion does so only under forcing conditions.")
    q(5, "Phenol is treated with CHCl<sub>3</sub>/NaOH. Name every intermediate in order.",
      None, "CCl<sub>3</sub><sup>−</sup> (carbanion) → :CCl<sub>2</sub> (carbene) → o-dienone carbanion → o-(dichloromethyl)phenoxide → ArCH(OH)<sub>2</sub> → ArCHO", "Hydroxide deprotonates CHCl<sub>3</sub> (carbanion) which expels Cl<sup>−</sup> (carbene); phenoxide attacks the carbene (Part 10.7). Hydrolysis of the benzal chloride gives the aldehyde. So: two carbanions, one carbene.")
    q(6, "A compound C<sub>7</sub>H<sub>7</sub>Br gives a pale yellow precipitate with alcoholic AgNO<sub>3</sub> immediately and, on reaction with NaNH<sub>2</sub>, forms no benzyne. Identify it.",
      S([("", "BrCc1ccccc1")]), "benzyl bromide", "Alcoholic AgNO<sub>3</sub> precipitates AgBr at once through the resonance-stabilised benzyl cation; the bromine is on sp<sup>3</sup> carbon so there is no aryne pathway. The isomeric bromotoluenes (aryl bromides) give nothing with AgNO<sub>3</sub> but do react with NaNH<sub>2</sub> via benzyne.")
    q(7, "Match: (A) Wurtz reaction, (B) Hofmann bromamide, (C) Kolbe electrolysis, (D) Reimer–Tiemann; with (P) carbene, (Q) free radical, (R) nitrene-type, (S) carbanion.",
      None, "A–S,Q; B–R; C–Q; D–P,S", "Wurtz: organosodium (carbanion) and radical character; Hofmann: isocyanate formed by a nitrene-type shift; Kolbe: acyloxy and alkyl radicals; Reimer–Tiemann: CCl<sub>3</sub><sup>−</sup> and :CCl<sub>2</sub>.")
    q(8, "Toluene can be converted into the benzyl cation, benzyl radical and benzyl anion. Give a reagent for each and say what stabilises all three.",
      S([("+", "[CH2+]c1ccccc1"), ("•", "[CH2]c1ccccc1"), ("−", "[CH2-]c1ccccc1")]), "cation: hydride abstraction (Ph<sub>3</sub>C<sup>+</sup>); radical: NBS or Cl<sub>2</sub>/hν; anion: n-BuLi/KNH<sub>2</sub>", "In all three the benzylic p orbital overlaps with the six π electrons of the ring, so the empty orbital (cation), half-filled orbital (radical) or filled orbital (anion) is delocalised onto the ortho and para carbons. Resonance stabilises cations, radicals and anions alike, whereas inductive/hyperconjugative effects stabilise cations and radicals but destabilise anions.")
    q(9, "Compare the products and stereochemistry: (a) 1-phenylethyl chloride (R) + SbCl<sub>5</sub>, (b) the radical bromination of the corresponding alkane, (c) the Hofmann degradation of (R)-2-phenylpropanamide.",
      None, "(a) racemic substitution product (planar cation); (b) racemic bromide (planar radical); (c) retention: (R)-1-phenylethylamine", "Carbocation and radical centres are planar, so stereochemical information at that carbon is lost; the 1,2-shift to nitrogen (Hofmann, Curtius) is intramolecular and goes with retention at the migrating carbon.")
    q(10, "In which reaction are a carbanion and a carbene formed one after the other?",
      None, "CHCl<sub>3</sub> + KOH (α-elimination)", "HO<sup>−</sup> removes the proton to give CCl<sub>3</sub><sup>−</sup> (carbanion), which expels Cl<sup>−</sup> from the same carbon to give :CCl<sub>2</sub> (carbene).")
    q(11, "Predict the major product and the intermediate: (i) neopentyl alcohol + HBr; (ii) neopentyl radical (from neopentyl bromide, Bu<sub>3</sub>SnH).",
      S([("(i)", "CC(C)(C)CO"), ("(ii)", "CC(C)(C)CBr")]), "(i) 2-bromo-2-methylbutane via the t-amyl cation (methyl shift); (ii) neopentane (no rearrangement)", "The same carbon skeleton gives a rearranged product through a cation but not through a radical: radicals do not shift methyl groups. This is the cleanest experimental distinction between cationic and radical pathways.")
    q(12, "1-Chloro-2,4-dinitrobenzene reacts with NH<sub>3</sub> at room temperature to give 2,4-dinitroaniline only, whereas chlorobenzene needs NaNH<sub>2</sub> in liquid NH<sub>3</sub> and may give regioisomeric products when substituted. Explain.",
      S([("", "O=[N+]([O-])c1ccc(Cl)c([N+](=O)[O-])c1")]), "S<sub>N</sub>Ar (addition–elimination) vs benzyne (elimination–addition)", "The two nitro groups make the ring electron-poor and stabilise the Meisenheimer anion, so the weak nucleophile NH<sub>3</sub> adds directly at the carbon bearing Cl: a single (ipso) product. Chlorobenzene has no such activation; only a base strong enough to remove an ortho H produces benzyne, and the nucleophile then adds at either carbon.")
    B.answers(qs, with_stem=True)
    return ri_qs + qs
