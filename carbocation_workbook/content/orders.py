from .common import *
from .lg import S


def build(B):
    B.part("Part 15", "Important Orders in General Organic Chemistry: Quick Reference with Reasons")
    B.p("This part collects the orders that GOC questions ask for repeatedly. Each order is followed by the <i>reason</i>, because a ranking that is memorised without its reason fails as soon as the question changes a substituent. pK<sub>a</sub> values are approximate textbook values in water at 25 °C unless stated, and are meant for ranking. Nucleophilicity comparisons are deliberately left out. Items marked ⚑ differ between sources, so check the convention your paper uses.")
    B.h2("15.1  Acid strength")
    B.table(["Family", "Order (increasing acid strength →)", "Reason"],
        [["Common oxygen/carbon/nitrogen acids", "CH<sub>3</sub>CH<sub>3</sub> (50) &lt; NH<sub>3</sub> (36) &lt; HC≡CH (25) &lt; ROH (16–18) &lt; H<sub>2</sub>O (15.7) &lt; ArOH (10) &lt; H<sub>2</sub>CO<sub>3</sub> (6.4) &lt; RCOOH (4–5) &lt; HF (3.2)", "stability of the conjugate base: electronegativity of the atom bearing the charge, then resonance. Carboxylate delocalises charge over two O, phenoxide into the ring, alkoxide not at all"],
         ["Hydrogen halides", "HF &lt; HCl &lt; HBr &lt; HI", "bond strength falls down the group (H–F 136, H–I 71 kcal mol<sup>−1</sup>) and the larger anion disperses charge, which outweighs the electronegativity trend"],
         ["Hybridisation of C–H", "alkane (sp<sup>3</sup>) &lt; alkene (sp<sup>2</sup>) &lt; alkyne (sp)", "carbanion lone pair in an orbital with more s-character is closer to the nucleus and is stabilised (25 / 33 / 50 % s)"],
         ["Aliphatic acids", "CH<sub>3</sub>COOH (4.76) &lt; ICH<sub>2</sub>COOH (3.17) &lt; BrCH<sub>2</sub>COOH (2.90) &lt; ClCH<sub>2</sub>COOH (2.86) &lt; FCH<sub>2</sub>COOH (2.66) &lt; Cl<sub>2</sub>CHCOOH (1.3) &lt; Cl<sub>3</sub>CCOOH (0.7)", "−I effect of halogen stabilises the carboxylate; it grows with electronegativity and with the number of halogens"],
         ["Position of Cl", "butanoic (4.82) &lt; 4-chloro (4.52) &lt; 3-chloro (4.06) &lt; 2-chloro (2.84)", "the inductive effect falls off by roughly a factor of 2–3 per bond"],
         ["Alkyl group on RCOOH", "(CH<sub>3</sub>)<sub>3</sub>CCOOH (5.03) &lt; CH<sub>3</sub>COOH (4.76) &lt; HCOOH (3.75)", "+I effect of alkyl destabilises the anion; formic acid has no alkyl. ⚑ solvation of the anion also matters"],
         ["Benzoic acids", "p-OCH<sub>3</sub> (4.47) &lt; p-CH<sub>3</sub> (4.34) &lt; H (4.20) &lt; m-OCH<sub>3</sub> (4.09) &lt; p-Cl (3.98) &lt; m-NO<sub>2</sub> (3.45) ≈ p-NO<sub>2</sub> (3.44) &lt; o-NO<sub>2</sub> (2.17)", "p-OMe donates by +M, which outweighs its −I; at the meta position only −I operates (so it is more acidic than benzoic acid). Ortho substituents nearly always increase acidity (the ortho effect: steric twisting of COOH out of the ring plane removes conjugation of the acid form)"],
         ["Phenols", "p-cresol (10.3) &lt; phenol (10.0) &lt; p-chlorophenol (9.4) &lt; m-nitro (8.4) &lt; p-nitro (7.15) ≈ o-nitro (7.2) &lt; 2,4-dinitro (4.1) &lt; picric acid (0.4)", "−M and −I groups at ortho/para delocalise the phenoxide charge onto the nitro oxygens; meta can use only −I. Intramolecular H-bond in o-nitrophenol stabilises the acid form and so slightly offsets the effect"],
         ["Alcohols", "solution: t-BuOH (17–18) &lt; i-PrOH (≈ 17) &lt; EtOH (15.9) &lt; H<sub>2</sub>O (15.7) &lt; MeOH (15.5)*; gas phase: the order is reversed", "*MeOH is slightly more acidic than water by these values (⚑ many JEE keys instead rank H<sub>2</sub>O &gt; ROH, so check the convention). In solution small anions are better solvated (hence primary &gt; tertiary); in the gas phase the polarisability of larger alkyl groups stabilises the anion"],
         ["Carbon acids", "CH<sub>3</sub>CN (25) &lt; CH<sub>3</sub>COCH<sub>3</sub> (19) &lt; CH<sub>2</sub>(CO<sub>2</sub>Et)<sub>2</sub> (13) &lt; CH<sub>3</sub>NO<sub>2</sub> (10) &lt; CH<sub>3</sub>COCH<sub>2</sub>COCH<sub>3</sub> (9)", "number and strength of carbanion-stabilising groups (Part 8)"]],
        widths=[16, 48, 36])
    B.h2("15.2  Basic strength")
    B.table(["Family", "Order (increasing basicity →)", "Reason"],
        [["Aliphatic amines in water (pK<sub>b</sub> trend by pK<sub>a</sub> of ammonium)", "NH<sub>3</sub> (9.25) &lt; (CH<sub>3</sub>)<sub>3</sub>N (9.8) &lt; CH<sub>3</sub>NH<sub>2</sub> (10.6) &lt; (CH<sub>3</sub>)<sub>2</sub>NH (10.7); ethyl series: EtNH<sub>2</sub> (10.65) &lt; Et<sub>3</sub>N (10.75) &lt; Et<sub>2</sub>NH (11.0)", "+I effect raises electron density on N, but the ammonium ion is stabilised by hydration (N–H···OH<sub>2</sub>) and the tertiary ion has only one N–H, so the order in water is not simply 3° &gt; 2° &gt; 1°. ⚑ In the gas phase the order is 3° &gt; 2° &gt; 1° &gt; NH<sub>3</sub>"],
         ["Aromatic amines", "p-nitroaniline (1.0) &lt; m-nitroaniline (2.5) &lt; aniline (4.6) &lt; p-toluidine (5.1) &lt; p-anisidine (5.3)", "the lone pair of aniline is delocalised into the ring; −M groups at para withdraw it further, +M/+I groups at para release electron density. Ortho substituents (the ortho effect) reduce basicity by steric hindrance to solvation of the ammonium ion"],
         ["Nitrogen hybridisation", "nitrile (sp, ≈ −10) &lt; pyridine/imine (sp<sup>2</sup>, 5.2) &lt; amine (sp<sup>3</sup>, 10–11)", "lone pair in an orbital with more s-character is held more tightly and is less available"],
         ["Heterocycles and amidines", "pyrrole (conjugate acid ≈ −3.8) &lt; aniline (4.6) &lt; pyridine (5.2) &lt; imidazole (7.0) &lt; piperidine (11.1) &lt; guanidine (13.6)", "in pyrrole the N lone pair is part of the aromatic sextet; in imidazole the pyridine-type N is protonated and the cation is stabilised by two equivalent resonance forms; guanidinium is a symmetrical, Y-delocalised cation"],
         ["Amide vs amine", "amide (≈ 0, protonates on O) &lt; aryl amine &lt; alkyl amine", "the amide N lone pair is delocalised into C=O"],
         ["Conjugate-base rule", "basicity of anions: F<sup>−</sup> &gt; Cl<sup>−</sup> &gt; Br<sup>−</sup> &gt; I<sup>−</sup>; RO<sup>−</sup> &gt; HO<sup>−</sup> &gt; ArO<sup>−</sup> &gt; RCOO<sup>−</sup>", "the weaker the conjugate acid, the stronger the base"]],
        widths=[16, 46, 38])
    B.h2("15.3  Electronic effects")
    B.table(["Effect", "Order", "Comment"],
        [["−I (electron-withdrawing)", "−NR<sub>3</sub><sup>+</sup> &gt; −NO<sub>2</sub> &gt; −SO<sub>2</sub>R &gt; −CN &gt; −F &gt; −Cl &gt; −Br &gt; −I &gt; −OR &gt; −OH &gt; −C<sub>6</sub>H<sub>5</sub> &gt; −CH=CH<sub>2</sub> &gt; H", "increases with electronegativity of the attached atom and with s-character (sp &gt; sp<sup>2</sup> &gt; sp<sup>3</sup>); the order of −OH vs −OR vs −NH<sub>2</sub> varies by source ⚑"],
         ["+I (electron-releasing)", "−C(CH<sub>3</sub>)<sub>3</sub> &gt; −CH(CH<sub>3</sub>)<sub>2</sub> &gt; −CH<sub>2</sub>CH<sub>3</sub> &gt; −CH<sub>3</sub> &gt; H; −O<sup>−</sup> &gt; −COO<sup>−</sup>", "more alkyl carbons, more electron release (hyperconjugation adds to this)"],
         ["+M (resonance donor)", "−O<sup>−</sup> &gt; −NR<sub>2</sub> &gt; −NH<sub>2</sub> &gt; −OR ≈ −OH &gt; −NHCOR &gt; −OCOR &gt; −F &gt; −Cl &gt; −Br &gt; −I", "lone-pair donation; poorer overlap for larger halogens (3p–2p) and electronegativity oppose donation"],
         ["−M (resonance acceptor)", "−NO<sub>2</sub> &gt; −CN &gt; −SO<sub>3</sub>H &gt; −CHO &gt; −COR &gt; −COOH ≈ −COOR &gt; −CONH<sub>2</sub>", "ability to accept π electrons onto an electronegative atom"],
         ["Hyperconjugation (number of α-H)", "CH<sub>3</sub> &gt; CH<sub>2</sub>R &gt; CHR<sub>2</sub> &gt; CR<sub>3</sub>", "Baker–Nathan order of C–H hyperconjugation; it controls the stability of alkenes and the rate of reactions in non-solvating media"]],
        widths=[20, 50, 30])
    B.h2("15.4  Reactive intermediates (summary; details in Parts 4, 8, 9)")
    B.table(["Species", "Order of stability", "Reason"],
        [["Carbocations", "tropylium &gt; Ph<sub>3</sub>C<sup>+</sup> &gt; Ph<sub>2</sub>CH<sup>+</sup> &gt; 3° ≈ allyl(2°) &gt; 2° &gt; 1° &gt; CH<sub>3</sub><sup>+</sup> &gt; vinyl, aryl", "delocalisation and hyperconjugation. ⚑ benzyl vs t-butyl depends on phase and source"],
         ["Carbanions", "CH<sub>3</sub><sup>−</sup> &lt; 1° &lt; 2° &lt; 3° (stability falls as alkyl groups are added); vinyl &lt; alkynyl; allyl &lt; benzyl &lt; Ph<sub>3</sub>C<sup>−</sup> &lt; Cp<sup>−</sup>", "s-character, resonance, aromaticity; +I destabilises"],
         ["Free radicals", "CH<sub>3</sub>• &lt; 1° &lt; 2° &lt; 3° &lt; allyl ≈ benzyl &lt; Ph<sub>3</sub>C•", "bond dissociation energy of the C–H; both donors and acceptors stabilise"]],
        widths=[16, 50, 34])
    B.h2("15.5  Substitution, elimination and leaving groups (substrate and leaving-group orders only)")
    B.table(["Topic", "Order", "Reason"],
        [["S<sub>N</sub>1 rate by substrate", "CH<sub>3</sub>X &lt; 1° &lt; 2° &lt; 3°; allyl and benzyl X are fast", "stability of the carbocation"],
         ["S<sub>N</sub>2 rate by substrate", "3° &lt; 2° &lt; 1° &lt; CH<sub>3</sub>; neopentyl is very slow", "steric hindrance to back-side attack"],
         ["E2/E1 alkene product", "Zaitsev: the more substituted alkene predominates; bulky bases (t-BuOK) give the Hofmann (less substituted) product", "alkene stability versus steric access to the proton"],
         ["Leaving group", "HO<sup>−</sup> &lt; F<sup>−</sup> &lt; Cl<sup>−</sup> &lt; Br<sup>−</sup> &lt; I<sup>−</sup> ≈ TsO<sup>−</sup>; H<sub>2</sub>O (from ROH<sub>2</sub><sup>+</sup>) is a good neutral leaving group; poor: HO<sup>−</sup>, RO<sup>−</sup>, NH<sub>2</sub><sup>−</sup>, H<sup>−</sup>", "weak bases that are stable as anions leave best; weaker C–X bond (C–I 57, C–Cl 85 kcal mol<sup>−1</sup>)"],
         ["Dehydration of alcohols (acid)", "1° &lt; 2° &lt; 3°", "carbocation stability in the E1 pathway"],
         ["Ease of hydrohalogenation of alkenes", "ethene &lt; propene &lt; 2-methylpropene &lt; 2,3-dimethylbut-2-ene", "stability of the carbocation formed"]],
        widths=[22, 44, 34])
    B.h2("15.6  Reactivity of carbonyl compounds and derivatives")
    B.table(["Topic", "Order", "Reason"],
        [["Towards nucleophilic addition", "HCHO &gt; RCHO &gt; ArCHO &gt; RCOR′ &gt; ArCOR &gt; ArCOAr", "less steric hindrance and less electron donation at C=O; aryl groups conjugate and reduce electrophilicity"],
         ["Hydrate stability", "Cl<sub>3</sub>CCHO (chloral hydrate is isolable) &gt; HCHO (≈ 99.9 % hydrated) &gt; CH<sub>3</sub>CHO (≈ 58 %) &gt; (CH<sub>3</sub>)<sub>2</sub>CO (≈ 0.1 %)", "EWG destabilise C=O; alkyl groups stabilise it and add steric strain on hydration"],
         ["Acid derivatives, nucleophilic acyl substitution", "RCOCl &gt; (RCO)<sub>2</sub>O &gt; RCOOR′ ≈ RCOOH &gt; RCONH<sub>2</sub> &gt; RCOO<sup>−</sup>", "electrophilicity of C=O and leaving-group ability (Cl<sup>−</sup> &gt; RCOO<sup>−</sup> &gt; RO<sup>−</sup> &gt; NH<sub>2</sub><sup>−</sup>); lone-pair donation into C=O lowers reactivity"],
         ["Resonance stabilisation of acid derivatives", "RCOCl &lt; (RCO)<sub>2</sub>O &lt; RCOOR′ &lt; RCONH<sub>2</sub>", "better donation of the heteroatom lone pair (N &gt; O &gt; Cl)"],
         ["α-H acidity", "RCHO (17) &gt; R<sub>2</sub>CO (19–20) &gt; RCOOR (25) &gt; RCONR<sub>2</sub> (30)", "ability of the carbonyl to accept the negative charge"]],
        widths=[22, 46, 32])
    B.h2("15.7  Aromatic substitution and alkene stability")
    B.table(["Topic", "Order", "Reason"],
        [["Rate of electrophilic aromatic substitution", "−NH<sub>2</sub> ≈ −O<sup>−</sup> &gt; −OH &gt; −OCH<sub>3</sub> &gt; −NHCOCH<sub>3</sub> &gt; −CH<sub>3</sub> &gt; H &gt; −Cl &gt; −CHO ≈ −COR &gt; −CN &gt; −NO<sub>2</sub> &gt; −NR<sub>3</sub><sup>+</sup>", "electron donors stabilise the arenium ion; acceptors destabilise it. Halogens deactivate (−I) but direct ortho/para (+M)"],
         ["Directing effect", "o/p-directors: all +M/+I groups and halogens; m-directors: all −M groups and −NR<sub>3</sub><sup>+</sup>", "which arenium ion has charge placed next to the substituent"],
         ["Alkene stability (heat of hydrogenation, kcal mol<sup>−1</sup>)", "1-butene (30.3) &lt; cis-2-butene (28.6) ≈ 2-methylpropene (28.4) &lt; trans-2-butene (27.6) &lt; trisubstituted (26.9) &lt; tetrasubstituted (26.6) (stability increases →)", "more alkyl groups on the C=C (hyperconjugation, sp<sup>2</sup>–sp<sup>3</sup> bonds) and trans over cis (less steric strain)"],
         ["Stability of conjugated dienes", "isolated &lt; conjugated &lt; (cumulated is least stable)", "conjugation stabilises by ≈ 3.5 kcal mol<sup>−1</sup>"],
         ["Resonance energy (kcal mol<sup>−1</sup>)", "benzene (36) &gt; naphthalene (61 total; 30.5 per ring) ; furan (16) &lt; pyrrole (21) &lt; thiophene (29) &lt; benzene (36)", "aromatic stabilisation falls as the heteroatom is more electronegative and holds its lone pair more tightly"]],
        widths=[22, 48, 30])
    B.warn("<b>Common errors.</b> (1) Treating the +I order of amines in water as 3° &gt; 2° &gt; 1°: hydration changes it. (2) Forgetting that p-methoxybenzoic acid is weaker than benzoic acid while the meta isomer is stronger. (3) Reading −M as always stronger than −I for acidity: for halogens, −I dominates. (4) Applying the carbocation order to carbanions (it reverses). (5) Using one phase (gas) order for a question set in solution.")
    B.h2("15.8  Problems on orders")
    qs = []
    def q(n, text, fig, ans, why):
        qs.append(Q(f"OR-{n}", text, fig, ans, why))
    q(1, "Arrange in increasing acid strength: ClCH<sub>2</sub>COOH, CH<sub>3</sub>COOH, FCH<sub>2</sub>COOH, Cl<sub>2</sub>CHCOOH, Cl<sub>3</sub>CCOOH.",
      None, "CH<sub>3</sub>COOH &lt; ClCH<sub>2</sub>COOH &lt; FCH<sub>2</sub>COOH &lt; Cl<sub>2</sub>CHCOOH &lt; Cl<sub>3</sub>CCOOH", "pK<sub>a</sub> 4.76, 2.86, 2.66, 1.3, 0.7: −I effect rises with electronegativity (F &gt; Cl) and with the number of Cl.")
    q(2, "Arrange in increasing acidity: p-cresol, phenol, m-nitrophenol, p-nitrophenol, 2,4-dinitrophenol.",
      S([("", "Cc1ccc(O)cc1"), ("", "Oc1ccccc1"), ("", "Oc1cccc([N+](=O)[O-])c1"), ("", "Oc1ccc([N+](=O)[O-])cc1"), ("", "Oc1ccc([N+](=O)[O-])cc1[N+](=O)[O-]")]),
      "p-cresol &lt; phenol &lt; m-nitrophenol &lt; p-nitrophenol &lt; 2,4-dinitrophenol", "pK<sub>a</sub> 10.3, 10.0, 8.4, 7.15, 4.1. Methyl donates; nitro at para or ortho withdraws by −M and −I; at meta only by −I; two nitro groups act cumulatively.")
    q(3, "Arrange in increasing acidity: p-methoxybenzoic acid, p-toluic acid, benzoic acid, m-methoxybenzoic acid, p-nitrobenzoic acid.",
      None, "p-OMe &lt; p-CH<sub>3</sub> &lt; benzoic &lt; m-OMe &lt; p-NO<sub>2</sub>", "pK<sub>a</sub> 4.47, 4.34, 4.20, 4.09, 3.44. +M of p-OMe outweighs −I; at meta only −I acts, so the meta isomer is more acidic than benzoic acid.")
    q(4, "Arrange in increasing basicity in water: aniline, NH<sub>3</sub>, (CH<sub>3</sub>)<sub>3</sub>N, CH<sub>3</sub>NH<sub>2</sub>, (CH<sub>3</sub>)<sub>2</sub>NH.",
      None, "aniline &lt; NH<sub>3</sub> &lt; (CH<sub>3</sub>)<sub>3</sub>N &lt; CH<sub>3</sub>NH<sub>2</sub> &lt; (CH<sub>3</sub>)<sub>2</sub>NH", "pK<sub>a</sub> of the ammonium: 4.6, 9.25, 9.8, 10.6, 10.7. Alkyl groups increase basicity by +I, but solvation of the ammonium ion makes 3° less basic than 2° and 1° in water.")
    q(5, "Arrange in increasing basicity: pyrrole, aniline, pyridine, imidazole, piperidine.",
      S([("", "c1cc[nH]c1"), ("", "Nc1ccccc1"), ("", "c1ccncc1"), ("", "c1c[nH]cn1"), ("", "C1CCNCC1")]),
      "pyrrole &lt; aniline &lt; pyridine &lt; imidazole &lt; piperidine", "Conjugate-acid pK<sub>a</sub> ≈ −3.8, 4.6, 5.2, 7.0, 11.1. In pyrrole the lone pair belongs to the aromatic sextet; in aniline it is delocalised; pyridine N is sp<sup>2</sup>; imidazolium has two equivalent resonance forms; piperidine N is sp<sup>3</sup> and localised.")
    q(6, "Why is methanol a stronger acid than tert-butanol in solution but the order is reversed in the gas phase?",
      None, "solvation of the smaller anion versus polarisability of the larger alkyl groups", "In solution CH<sub>3</sub>O<sup>−</sup> is the best solvated alkoxide and tert-butoxide, with bulky alkyl groups, the worst. In the gas phase there is no solvent, and the polarisable tert-butyl group stabilises the charge better.")
    q(7, "Arrange in increasing reactivity towards nucleophilic acyl substitution: CH<sub>3</sub>CONH<sub>2</sub>, CH<sub>3</sub>COOCH<sub>3</sub>, (CH<sub>3</sub>CO)<sub>2</sub>O, CH<sub>3</sub>COCl.",
      None, "amide &lt; ester &lt; anhydride &lt; acid chloride", "Reactivity follows leaving-group ability (Cl<sup>−</sup> &gt; RCOO<sup>−</sup> &gt; RO<sup>−</sup> &gt; NH<sub>2</sub><sup>−</sup>) and weaker lone-pair donation into C=O (Cl &lt; O &lt; N).")
    q(8, "Arrange in increasing reactivity towards HCN addition: acetone, acetaldehyde, formaldehyde, benzaldehyde, acetophenone.",
      None, "acetophenone &lt; acetone &lt; benzaldehyde &lt; acetaldehyde &lt; formaldehyde", "Two alkyl/aryl groups hinder and donate electrons; aryl conjugation lowers C=O electrophilicity (so benzaldehyde is less reactive than acetaldehyde); formaldehyde has no donating group. ⚑ benzaldehyde and acetone are close in some sources.")
    q(9, "Arrange in increasing rate of electrophilic nitration: nitrobenzene, chlorobenzene, benzene, toluene, anisole.",
      None, "nitrobenzene &lt; chlorobenzene &lt; benzene &lt; toluene &lt; anisole", "−M/−I deactivation (NO<sub>2</sub>) is strongest; Cl deactivates by −I though it directs o/p; CH<sub>3</sub> activates by +I and hyperconjugation; OCH<sub>3</sub> activates strongly by +M.")
    q(10, "Arrange in decreasing stability: 1-butene, cis-2-butene, trans-2-butene, 2-methylbut-2-ene, 2,3-dimethylbut-2-ene.",
      None, "2,3-dimethylbut-2-ene &gt; 2-methylbut-2-ene &gt; trans-2-butene &gt; cis-2-butene &gt; 1-butene", "Heats of hydrogenation 26.6, 26.9, 27.6, 28.6, 30.3 kcal mol<sup>−1</sup>: more alkyl substituents on C=C, and trans over cis.")
    q(11, "Arrange in decreasing order of the –I effect: –NO<sub>2</sub>, –F, –CN, –Br, –OCH<sub>3</sub>, –C<sub>6</sub>H<sub>5</sub>.",
      None, "–NO<sub>2</sub> &gt; –CN &gt; –F &gt; –Br &gt; –OCH<sub>3</sub> &gt; –C<sub>6</sub>H<sub>5</sub>", "Charged or multiply bonded electronegative groups and sp-carbon (CN) withdraw more strongly than single-bonded halogens, then oxygen; phenyl is weakly withdrawing (sp<sup>2</sup> carbon).")
    q(12, "Arrange in increasing leaving-group ability: HO<sup>−</sup>, F<sup>−</sup>, Cl<sup>−</sup>, Br<sup>−</sup>, I<sup>−</sup>. Why is CH<sub>3</sub>OH<sub>2</sub><sup>+</sup> a better substrate for substitution than CH<sub>3</sub>OH?",
      None, "HO<sup>−</sup> &lt; F<sup>−</sup> &lt; Cl<sup>−</sup> &lt; Br<sup>−</sup> &lt; I<sup>−</sup>; protonation turns HO<sup>−</sup> into neutral H<sub>2</sub>O", "A good leaving group is the conjugate base of a strong acid (HI ≫ HCl ≫ HF ≫ H<sub>2</sub>O). Protonation converts the very poor leaving group HO<sup>−</sup> into H<sub>2</sub>O, a stable neutral molecule.")
    q(13, "Arrange in increasing S<sub>N</sub>2 and, separately, in increasing S<sub>N</sub>1 reactivity: CH<sub>3</sub>Br, CH<sub>3</sub>CH<sub>2</sub>Br, (CH<sub>3</sub>)<sub>2</sub>CHBr, (CH<sub>3</sub>)<sub>3</sub>CBr.",
      None, "S<sub>N</sub>2: (CH<sub>3</sub>)<sub>3</sub>CBr &lt; (CH<sub>3</sub>)<sub>2</sub>CHBr &lt; CH<sub>3</sub>CH<sub>2</sub>Br &lt; CH<sub>3</sub>Br; S<sub>N</sub>1: the reverse (CH<sub>3</sub>Br &lt; 1° &lt; 2° &lt; 3°)", "S<sub>N</sub>2 is controlled by steric hindrance to back-side attack; S<sub>N</sub>1 by carbocation stability.")
    q(14, "Why is p-nitroaniline a weaker base than m-nitroaniline, and why is aniline a weaker base than cyclohexylamine?",
      None, "−M at para delocalises the lone pair more; aryl N lone pair is delocalised into the ring", "At the para position NO<sub>2</sub> withdraws electron density from the N lone pair by both −M and −I (pK<sub>a</sub> 1.0), at meta only by −I (2.5). In aniline the lone pair conjugates with the ring (4.6), whereas in cyclohexylamine it is localised and the +I effect of the ring raises basicity (10.6).")
    q(15, "(Integer) How many of these are stronger acids than benzoic acid (pK<sub>a</sub> 4.20): p-nitrobenzoic acid, m-methoxybenzoic acid, p-methoxybenzoic acid, o-nitrobenzoic acid, p-toluic acid, p-chlorobenzoic acid?",
      None, "4", "p-NO<sub>2</sub> (3.44), m-OMe (4.09), o-NO<sub>2</sub> (2.17) and p-Cl (3.98) are stronger; p-OMe (4.47) and p-CH<sub>3</sub> (4.34) are weaker.")
    B.answers(qs, with_stem=True)
    return qs
