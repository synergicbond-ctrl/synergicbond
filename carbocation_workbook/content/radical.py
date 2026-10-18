from .common import *
from .lg import S


def R(src, snk, bend=0.45):
    return A(src, snk, bend, rad=True)


def build(B):
    B.part("Part 9", "Free Radicals: Structure, Generation, Stability and Reactions")
    B.p("A <b>free radical</b> is a species with an unpaired electron: R<sub>3</sub>C• has seven valence electrons on carbon (three bond pairs + one unpaired electron). "
        "It is <b>neutral</b>, paramagnetic (spin ½, doublet; μ = √3 BM), usually short-lived (diffusion-controlled dimerisation, k ≈ 10<sup>9</sup>–10<sup>10</sup> L mol<sup>−1</sup> s<sup>−1</sup>), and is formed by <b>homolysis</b> – each atom keeps one electron of the bond – which is drawn with a <b>single-barbed (fish-hook) arrow</b>, while heterolysis uses a double-barbed arrow. "
        "Free radicals are electron-deficient in the sense that the carbon is one electron short of an octet, so they behave as weak electrophiles towards electron-rich partners and as nucleophiles towards electron-poor ones; their reactivity is dominated by the strength of the bond formed, not by charge.")
    B.h2("9.0  Homolysis and bond dissociation energy")
    B.p("Homolysis A–B → A• + B• needs energy equal to the bond dissociation energy D(A–B); it is promoted by heat (Δ), light (hν), or an initiator that decomposes at a low temperature. Representative values (kJ mol<sup>−1</sup> in parentheses are in kcal mol<sup>−1</sup>; recalled approximate figures):")
    B.table(["Bond", "D (kcal mol<sup>−1</sup>)", "Bond", "D (kcal mol<sup>−1</sup>)"],
        [["H–CH<sub>3</sub>", "105", "H–F", "136"],
         ["H–CH<sub>2</sub>CH<sub>3</sub> (primary)", "101", "H–Cl", "103"],
         ["H–CH(CH<sub>3</sub>)<sub>2</sub> (secondary)", "98.5", "H–Br", "87.5"],
         ["H–C(CH<sub>3</sub>)<sub>3</sub> (tertiary)", "96.5", "H–I", "71"],
         ["H–CH<sub>2</sub>CH=CH<sub>2</sub> (allylic)", "88", "F–F", "38"],
         ["H–CH<sub>2</sub>Ph (benzylic)", "89.8", "Cl–Cl", "58"],
         ["H–CH=CH<sub>2</sub> (vinylic)", "111", "Br–Br", "46"],
         ["H–C<sub>6</sub>H<sub>5</sub> (phenyl)", "112", "I–I", "36"],
         ["CH<sub>3</sub>–CH<sub>3</sub>", "90", "CH<sub>3</sub>–Cl / –Br / –I", "85 / 70 / 57"],
         ["RO–OR (peroxide)", "≈ 35–38", "N≡C–C(CH<sub>3</sub>)<sub>2</sub>–N=N– (AIBN, N–C)", "≈ 31 (loses N<sub>2</sub>)"]],
        widths=[32, 18, 32, 18])
    B.h2("9.1  Structure and geometry")
    B.ul(["<b>Alkyl radicals</b> R<sub>3</sub>C• are <b>planar or very shallow pyramids</b> (CH<sub>3</sub>• is planar, sp<sup>2</sup> with the unpaired electron in a p orbital; t-Bu• is slightly pyramidal). The inversion barrier is tiny, so a radical centre is racemised – radical halogenation at a chiral carbon gives the racemate. The geometry lies between the planar carbocation and the pyramidal carbanion.",
          "<b>Vinyl radicals</b> are bent (σ radical, sp<sup>2</sup> orbital in the plane, inverts rapidly); <b>aryl radicals</b> are σ radicals with the unpaired electron in the plane of the ring (orthogonal to the π cloud, no resonance); <b>CF<sub>3</sub>•</b> is pyramidal (≈ 110°) because the electronegative fluorines increase the s-character of the carbon orbitals that bind them, leaving more p-character in the half-filled orbital.",
          "<b>π radicals</b> (allyl, benzyl, trityl) are planar with the unpaired electron delocalised over several atoms. The spin density is shown by ESR hyperfine couplings (benzyl: ortho/para positions).",
          "<b>Stable radicals</b> exist when the unpaired electron is delocalised and the centre is hindered: Ph<sub>3</sub>C• (Gomberg 1900, in equilibrium with its quinoid dimer), 2,4,6-tri-tert-butylphenoxyl, DPPH, galvinoxyl, TEMPO (a nitroxide), Fremy’s salt. NO, NO<sub>2</sub> and O<sub>2</sub> (triplet, a biradical) are also paramagnetic."])
    B.h2("9.2  Stability of free radicals")
    B.p("Stability is measured by the bond dissociation energy of the C–H bond that yields the radical (smaller D = more stable radical). Three effects, in order of importance: "
        "<b>(i) resonance delocalisation</b> (allyl, benzyl, trityl, α-carbonyl, α-N, α-O); "
        "<b>(ii) hyperconjugation</b> of the adjacent C–H/C–C σ bonds into the singly occupied orbital (3° &gt; 2° &gt; 1° &gt; CH<sub>3</sub>•); "
        "<b>(iii) hybridisation</b> (sp<sup>2</sup> σ radicals such as vinyl and phenyl are unstabilised).")
    B.table(["Order", "Statement"],
        [["Alkyl radicals", "3° &gt; 2° &gt; 1° &gt; CH<sub>3</sub>• (more α-C–H/C–C bonds donate electron density into the half-filled orbital; D(C–H) 96.5 &lt; 98.5 &lt; 101 &lt; 105)"],
         ["Delocalised radicals", "Ph<sub>3</sub>C• &gt; Ph<sub>2</sub>CH• &gt; PhCH<sub>2</sub>• ≳ CH<sub>2</sub>=CH–CH<sub>2</sub>• &gt; 3° alkyl &gt; 2° &gt; 1° &gt; CH<sub>3</sub>• &gt; CH<sub>2</sub>=CH• ≈ C<sub>6</sub>H<sub>5</sub>• (σ radicals least stable)"],
         ["α-Heteroatom (captodative)", "a radical flanked by a donor and an acceptor (e.g. •C(OR)(CN)) is specially stabilised; α-O and α-N lone pairs also stabilise (three-electron two-orbital interaction)"],
         ["Substituted benzyl radicals", "stabilised by both donors and acceptors (spin delocalisation, no charge separation) – so radical stability does <b>not</b> follow σ<sup>+</sup> the way cation stability does; the rate of side-chain chlorination, ArCH<sub>3</sub> → ArCH<sub>2</sub>Cl, is only weakly affected by Ar (but p-NO<sub>2</sub> slows it slightly because the radical-abstracting chlorine atom is electrophilic: your note’s ‘Ar = phenyl faster than p-nitrophenyl’)"]],
        widths=[22, 78])
    B.warn("<b>Do not transfer carbocation reasoning blindly.</b> (1) Radicals do <b>not</b> rearrange by 1,2-H or 1,2-alkyl shifts (the three-centre TS would need 3 electrons and has a high barrier); the neopentyl radical stays neopentyl. They do undergo 1,2-aryl (neophyl), 1,2-vinyl, 1,2-acyl, 1,2-Cl/Br shifts and β-scission. "
           "(2) Radical stability is a <i>bond-energy</i> property, not a charge property: both +M and −M substituents stabilise it. (3) The allylic radical is stabilised by resonance <i>and</i> allylic substitution gives a mixture of regioisomers (resonance) – see 9.5.")
    B.h2("9.3  Generation of free radicals")
    B.table(["Method", "Example", "Notes"],
        [["Thermolysis (Δ)", "ROOR → 2 RO•; R–N=N–R → 2 R• + N<sub>2</sub>; PhCOO–OOCPh → 2 PhCOO• → 2 Ph• + 2 CO<sub>2</sub>", "weak O–O (35–38 kcal mol<sup>−1</sup>) and C–N bonds; AIBN at 60–80 °C"],
         ["Photolysis (hν)", "Cl<sub>2</sub> → 2 Cl•; Br<sub>2</sub> → 2 Br•; R–I → R• + I•; ketones (Norrish)", "light of the correct energy; used in radical halogenation"],
         ["Redox (single electron transfer)", "Fe<sup>2+</sup> + H<sub>2</sub>O<sub>2</sub> → Fe<sup>3+</sup> + HO<sup>−</sup> + HO• (Fenton); Cu<sup>+</sup> + ArN<sub>2</sub><sup>+</sup> → Cu<sup>2+</sup> + Ar• + N<sub>2</sub> (Sandmeyer); Na + ketone → ketyl radical anion", "metal ions and electrodes"],
         ["Electrolysis (Kolbe)", "2 RCOO<sup>−</sup> → 2 RCOO• + 2e<sup>−</sup> → 2 R• + 2 CO<sub>2</sub> → R–R", "anodic oxidation of carboxylate; products from mixtures are statistical"],
         ["Atom abstraction by a radical", "X• + R–H → H–X + R•", "the chain-carrying step of halogenation"],
         ["Addition of a radical to a π bond", "X• + C=C → X–C–C•", "polymerisation, anti-Markovnikov addition"],
         ["Fragmentation", "RCOO• → R• + CO<sub>2</sub>; R–CH<sub>2</sub>–CH<sub>2</sub>• → R• + CH<sub>2</sub>=CH<sub>2</sub> (β-scission)", "decarboxylation and ring opening"]],
        widths=[22, 50, 28])
    B.h2("9.4  Reactions of free radicals")
    B.table(["Reaction", "Scheme", "Example / use"],
        [["Atom (H) abstraction", "R• + H–X → R–H + X•", "propagation in halogenation; selectivity 3° &gt; 2° &gt; 1°"],
         ["Addition to C=C", "R• + CH<sub>2</sub>=CHY → R–CH<sub>2</sub>–C•HY", "chain polymerisation; adds to the less hindered carbon to give the more stable radical"],
         ["Halogen abstraction", "R• + X–X → R–X + X•", "second propagation step"],
         ["Combination (termination)", "R• + R• → R–R", "diffusion controlled; ethane from 2 CH<sub>3</sub>•"],
         ["Disproportionation", "2 CH<sub>3</sub>CH<sub>2</sub>• → CH<sub>3</sub>CH<sub>3</sub> + CH<sub>2</sub>=CH<sub>2</sub>", "H transfers from one radical to another"],
         ["β-Scission / fragmentation", "R–CH<sub>2</sub>–C•H<sub>2</sub> → R• + CH<sub>2</sub>=CH<sub>2</sub>; RCOO• → R• + CO<sub>2</sub>", "ring-opening of cyclopropylcarbinyl radical (k ≈ 10<sup>8</sup> s<sup>−1</sup>, a ‘radical clock’)"],
         ["Rearrangement", "1,2-aryl (neophyl), 1,2-vinyl, 1,2-acyl; <b>no 1,2-H or alkyl shift</b>", "PhC(CH<sub>3</sub>)<sub>2</sub>CH<sub>2</sub>• → PhCH<sub>2</sub>C•(CH<sub>3</sub>)<sub>2</sub>"],
         ["Oxidation / reduction (electron transfer)", "R• + Cu<sup>2+</sup> → R<sup>+</sup> + Cu<sup>+</sup>; R• + e<sup>−</sup> → R<sup>−</sup>", "Sandmeyer, S<sub>RN</sub>1"]],
        widths=[22, 40, 38])
    B.h2("9.5  Radical halogenation of alkanes: thermochemistry and selectivity")
    B.p("<b>Mechanism (chain).</b> <i>Initiation</i> X<sub>2</sub> → 2 X•. <i>Propagation</i> X• + R–H → HX + R• (1); R• + X<sub>2</sub> → R–X + X• (2). <i>Termination</i> any two radicals combine. A single photon can cause thousands of cycles (quantum yield &gt; 1) – the proof of a chain mechanism. "
        "Inhibitors (O<sub>2</sub>, hydroquinone, I<sub>2</sub>, BHT) trap the chain-carrying radicals by forming less reactive radicals; a short induction period is observed.")
    B.table(["Halogen", "Step (1): X• + CH<sub>4</sub> ΔH", "Step (2): CH<sub>3</sub>• + X<sub>2</sub> ΔH", "Overall", "Reactivity / selectivity"],
        [["F<sub>2</sub>", "−31 (105 − 136)", "≈ −72", "≈ −103", "explosive; non-selective (early TS)"],
         ["Cl<sub>2</sub>", "+2 (105 − 103)", "−27", "−25", "fast; poorly selective (1° : 2° : 3° ≈ 1 : 3.8 : 5)"],
         ["Br<sub>2</sub>", "+17.5 (105 − 87.5)", "−24", "−6.5", "slow; highly selective (≈ 1 : 82 : 1600)"],
         ["I<sub>2</sub>", "+34 (105 − 71)", "−21", "+13", "step (1) too endothermic: no iodination (HI even reduces R–I)"]],
        widths=[10, 22, 22, 14, 32])
    B.p("<b>Hammond postulate:</b> chlorine’s step (1) is nearly thermoneutral, so its transition state is early and resembles the reactants (little radical character developed, so little discrimination between C–H types); bromine’s step (1) is endothermic by 17 kcal mol<sup>−1</sup>, so its TS is late, resembles the alkyl radical, and is sensitive to radical stability. "
        "<b>Probability × reactivity</b> gives the product ratio: product % ∝ (number of H of that type) × (relative reactivity). Propane with Cl<sub>2</sub>: 6 × 1 : 2 × 3.8 = 6 : 7.6 → 44 % 1-chloro, 56 % 2-chloro; with Br<sub>2</sub>: 6 : 164 → 3.5 % : 96.5 %. Isobutane with Cl<sub>2</sub>: 9 × 1 : 1 × 5 = 9 : 5 → 64 % isobutyl chloride, 36 % t-butyl chloride (Nucleus Q51: the <i>primary</i> chloride predominates because there are nine primary H). "
        "<b>Isotope effect:</b> C–D bonds (zero-point energy lower, D(C–D) ≈ 1.2 kcal mol<sup>−1</sup> higher than D(C–H)) are abstracted more slowly, so CD<sub>3</sub>CD<sub>3</sub> chlorinates more slowly than CH<sub>3</sub>CH<sub>3</sub> (primary kinetic isotope effect k<sub>H</sub>/k<sub>D</sub> ≈ 1.3 for Cl•, ≈ 4.6 for Br•), and a tertiary C–H of neopentane-type alkanes ranks by the number of H.")
    B.h2("9.6  Counting problems in radical halogenation")
    B.table(["Substrate", "Structural monochlorides (type of H)", "Including stereoisomers"],
        [["CH<sub>3</sub>CH<sub>3</sub>, neopentane, cyclopentane, benzene (side-chain none)", "1", "1"],
         ["propane", "2 (1°, 2°)", "2"],
         ["n-butane", "2", "3 (2-chlorobutane is chiral)"],
         ["isobutane", "2", "2"],
         ["2-methylbutane (isopentane)", "4", "6 (1-chloro-2-methyl- and 2-chloro-3-methylbutane are chiral)"],
         ["2,3-dimethylbutane", "2", "3"],
         ["n-pentane", "3", "5"],
         ["methylcyclopentane", "4 (CH<sub>3</sub>, C1, C2, C3)", "10 (2- and 3-chloro each as cis/trans, each chiral)"],
         ["2-methylpentane (isohexane)", "5", "8 (see Nucleus II-B Q8)"]],
        widths=[36, 32, 32])
    B.h2("9.7  Allylic and benzylic halogenation; the HBr peroxide effect; polymerisation")
    B.ul(["<b>NBS (N-bromosuccinimide), CCl<sub>4</sub>, peroxide/hν</b>: allylic and benzylic bromination. NBS supplies a very low, steady concentration of Br<sub>2</sub> (NBS + HBr → succinimide + Br<sub>2</sub>), so Br• abstracts the weak allylic C–H (88 kcal mol<sup>−1</sup>) and Br<sub>2</sub> reacts with the allylic radical faster than it can add across C=C by the ionic pathway. An unsymmetrical allylic radical gives <b>two regioisomers</b> (both radical termini carry spin): 1-butene → 3-bromo-1-butene + 1-bromo-2-butene. Count the distinct allylic hydrogens first (Nucleus II-A Q4: 1-methylcyclopentene has 7 allylic H and gives 9 allylic bromides when stereoisomers are included).",
          "<b>Anti-Markovnikov addition of HBr (peroxide effect, Kharasch)</b>: RO• + HBr → ROH + Br•; Br• adds to the <i>terminal</i> carbon of the alkene to give the more stable (secondary) radical; the radical abstracts H from HBr to give the 1-bromoalkane and a new Br•. HCl does not show the effect because step (2) (R• + HCl) is endothermic by ≈ +12.6 kJ mol<sup>−1</sup>; HI does not because step (1) (I• adds to C=C) is endothermic (+46 kJ mol<sup>−1</sup>) and I• tends to combine (data of Nucleus II-B Q7).",
          "<b>Radical polymerisation</b> (initiation, propagation, termination): R• + CH<sub>2</sub>=CHY → RCH<sub>2</sub>C•HY → …; used for polyethylene (LDPE, 1000–2000 atm, O<sub>2</sub>/peroxide), polystyrene, PVC, polyacrylonitrile, teflon. Head-to-tail addition is dominant because it forms the more stable radical.",
          "<b>Wurtz and Kolbe</b>: Wurtz coupling 2 R–X + 2 Na → R–R + 2 NaX has both carbanion (R–Na) and radical features; Kolbe electrolysis of 2 RCOONa gives R–R, 2 CO<sub>2</sub>, H<sub>2</sub> (cathode) and NaOH (the pH increases, Nucleus Q50). A mixture of two different carboxylates gives three alkanes (R–R, R′–R′, R–R′), statistically 1 : 1 : 2."])
    B.h2("9.8  Mechanisms (fish-hook arrows; each step electron-count validated)")
    c = []
    c.append(ex("9.1", "Initiation: homolysis of chlorine",
        "[Cl:1][Cl:2]",
        [St([R(('b', 1, 2), ('rad', 1), 0.4), R(('b', 1, 2), ('rad', 2), -0.4)], "hν", rad=True, expect="[Cl].[Cl]")],
        "[Cl].[Cl]",
        "Each chlorine receives one electron of the Cl–Cl bond; one fish-hook for each electron. Light of wavelength ≈ 350 nm supplies the 58 kcal mol<sup>−1</sup>."))
    c.append(ex("9.2", "Chain propagation: chlorination of methane",
        "[Cl:1].[CH3:2][H:3]",
        [St([R(('rad', 1), ('nb', 1, 3), 0.4), R(('b', 2, 3, 2), ('nb', 1, 3), -0.4)], "step 1", rad=True, expect="Cl.[CH3]"),
         St([R(('rad', 2), ('nb', 2, 4), 0.4), R(('b', 4, 5, 5), ('nb', 2, 4), -0.4)], "step 2", rad=True, add="[Cl:4][Cl:5]", expect="CCl.Cl.[Cl]")],
        "CCl.Cl.[Cl]",
        "Step 1: the chlorine radical pairs its electron with one electron of the C–H bond to form H–Cl; the other electron of the C–H bond stays on carbon (CH<sub>3</sub>•). Step 2: CH<sub>3</sub>• pairs with one electron of Cl–Cl to form C–Cl; the other electron remains on the second Cl, which is the chain carrier again. The two steps repeat 10<sup>3</sup>–10<sup>6</sup> times per photon.", width=680))
    c.append(ex("9.3", "Termination by combination; disproportionation",
        "[CH3:1].[CH3:2]",
        [St([R(('rad', 1), ('nb', 1, 2), 0.4), R(('rad', 2), ('nb', 1, 2), -0.4)], "", rad=True, expect="CC")],
        "CC",
        "Two radicals pair their electrons. Termination steps are rare in the propagating chain because radical concentrations are about 10<sup>−8</sup> M; they end the chain when they occur."))
    c.append(ex("9.4", "Disproportionation of two ethyl radicals",
        "[CH2:1]([H:5])[CH2:2].[CH3:3][CH2:4]",
        [St([R(('rad', 4), ('nb', 4, 5), 0.4), R(('b', 1, 5), ('nb', 4, 5), -0.4), R(('b', 1, 5), ('nb', 1, 2), 0.4), R(('rad', 2), ('nb', 1, 2), -0.4)], "", rad=True, expect="CC.C=C")],
        "CC.C=C",
        "One radical abstracts a β-hydrogen from the other: the abstracted H forms the new C–H bond of ethane and the remaining C–H electron pairs with the radical electron to give the C=C of ethene. Disproportionation/combination ratio for ethyl radicals ≈ 0.13."))
    c.append(ex("9.5", "Peroxide effect, step 1: Br• adds to the terminal carbon of propene",
        "[Br:1].[CH3:2][CH:3]=[CH2:4]",
        [St([R(('rad', 1), ('nb', 1, 4), 0.4), R(('b', 3, 4, 3), ('nb', 1, 4), -0.4)], "", rad=True, expect="CC([CH2]Br)".replace("CC([CH2]Br)", "C[CH]CBr"))],
        "C[CH]CBr",
        "Bromine adds to the CH<sub>2</sub> terminus: the new radical is secondary (CH<sub>3</sub>–C•H–CH<sub>2</sub>Br), more stable than the primary radical that would form by attack at C-3. The regiochemistry is set by the stability of the radical, and is the reverse of Markovnikov addition of H<sup>+</sup>."))
    c.append(ex("9.6", "Peroxide effect, step 2: chain transfer",
        "[CH3:2][CH:3][CH2:4][Br:1].[H:10][Br:11]",
        [St([R(('rad', 3), ('nb', 3, 10), 0.4), R(('b', 10, 11, 11), ('nb', 3, 10), -0.4)], "", rad=True, expect="CCCBr.[Br]")],
        "CCCBr.[Br]",
        "The secondary radical takes the H atom of HBr (the weak H–Br bond, 87.5 kcal mol<sup>−1</sup>, makes this step exothermic by 50 kJ mol<sup>−1</sup>), giving 1-bromopropane and regenerating Br•."))
    c.append(ex("9.7", "Allylic bromination of cyclohexene with NBS: H abstraction, allylic resonance, Br<sub>2</sub> transfer",
        "[Br:1].[CH:2]1([H:3])[CH:4]=[CH:5][CH2:6][CH2:7][CH2:8]1",
        [St([R(('rad', 1), ('nb', 1, 3), 0.4), R(('b', 2, 3, 2), ('nb', 1, 3), -0.4)], "abstraction", rad=True, expect="Br.[CH]1C=CCCC1".replace("Br.[CH]1C=CCCC1", "Br.C1=C[CH]CCC1")),
         St([R(('rad', 2), ('nb', 2, 4), 0.4), R(('b', 4, 5, 5), ('nb', 2, 4), -0.4)], "resonance", kind="res", rad=True),
         St([R(('rad', 5), ('nb', 5, 9), 0.4), R(('b', 9, 10, 10), ('nb', 5, 9), -0.4)], "Br_2 (from NBS)", add="[Br:9][Br:10]", rad=True)],
        None,
        "Br• removes the allylic H (88 kcal mol<sup>−1</sup>); the allyl radical is delocalised over C-2 and C-5 (the two forms are equivalent for cyclohexene, so one product, 3-bromocyclohexene). With an unsymmetrical alkene the two resonance forms give two bromides. The low [Br<sub>2</sub>] supplied by NBS prevents the competing ionic addition to the double bond.", width=680))
    c.append(ex("9.8", "Kolbe electrolysis: decarboxylation of the acyloxy radical",
        "[CH3:1][C:2](=[O:3])[O:4]",
        [St([R(('rad', 4), ('nb', 2, 4), 0.4), R(('b', 1, 2, 1), ('nb', 2, 4), -0.4)], "", rad=True, expect="[CH3].O=C=O")],
        "[CH3].O=C=O",
        "Anodic oxidation removes one electron from acetate (CH<sub>3</sub>COO<sup>−</sup> → CH<sub>3</sub>COO•). The acyloxy radical loses CO<sub>2</sub> in a β-scission: the O-radical electron and one electron of the C–C σ bond make the second C=O π bond, and the other σ electron stays on CH<sub>3</sub>•. Two CH<sub>3</sub>• then combine (9.3) to give ethane."))
    c.append(ex("9.9", "Radical polymerisation of styrene: initiation and first propagation step",
        "[CH3:1].[CH2:2]=[CH:3]" + Ph(4),
        [St([R(('rad', 1), ('nb', 1, 2), 0.4), R(('b', 2, 3, 3), ('nb', 1, 2), -0.4)], "initiation", rad=True),
         St([R(('rad', 3), ('nb', 3, 20), 0.4), R(('b', 20, 21, 21), ('nb', 3, 20), -0.4)], "propagation", rad=True, add="[CH2:20]=[CH:21]" + Ph(22))],
        None,
        "The initiator radical adds to the CH<sub>2</sub> end of the vinyl monomer so that the new radical is benzylic (resonance-stabilised); the same regiochemistry is repeated in each propagation step (head-to-tail polymer). Chain transfer and termination by combination/disproportionation end the chain.", width=680))
    c.append(ex("9.10", "Radical clock: cyclopropylcarbinyl → but-3-enyl (β-scission, k ≈ 10<sup>8</sup> s<sup>−1</sup>)",
        "[CH2:1][CH:2]1[CH2:3][CH2:4]1",
        [St([R(('rad', 1), ('nb', 1, 2), 0.4), R(('b', 2, 3, 3), ('nb', 1, 2), -0.4)], "", rad=True, expect="C=CC[CH2]")],
        "C=CC[CH2]",
        "The unpaired electron and one electron of the strained ring C–C bond form a C=C π bond; the other electron of the broken bond becomes the new radical. Strain relief (27 kcal mol<sup>−1</sup>) drives the opening. The reaction is used as a ‘clock’: if a radical trapped by an H-donor gives the ring-opened product, its lifetime was longer than 10<sup>−8</sup> s."))
    c.append(ex("9.11", "Neophyl rearrangement: 1,2-aryl shift via a spiro cyclohexadienyl radical",
        "[CH2:1][C:2]([CH3:3])([CH3:4])" + Ph(5),
        [St([R(('rad', 1), ('nb', 1, 5), 0.4), R(('b', 5, 6, 6), ('nb', 1, 5), -0.4)], "ipso attack", rad=True),
         St([R(('rad', 6), ('nb', 5, 6), 0.4), R(('b', 2, 5, 2), ('nb', 5, 6), -0.4)], "ring opens", rad=True, expect="C[C](C)Cc1ccccc1")],
        "C[C](C)Cc1ccccc1",
        "The radical centre attacks the ipso carbon of the neighbouring phenyl group, forming a three-membered spiro intermediate (cyclohexadienyl radical delocalised over the ring); the ring bond C–C(CH<sub>3</sub>)<sub>2</sub> then breaks to relieve strain and re-aromatise, leaving the more stable tertiary radical. This is the only common 1,2-shift for radicals; a hydrogen or methyl does <b>not</b> migrate (the TS would have no π participation)."))
    B.grid(c, 2)
    B.h2("9.9  Radical substitution of aromatics and related reactions")
    B.ul(["<b>Sandmeyer</b> (ArN<sub>2</sub><sup>+</sup> + CuX → ArX + N<sub>2</sub>) and <b>Gattermann</b> (Cu powder) proceed by single-electron transfer from Cu(I) to the diazonium ion to give Ar• (σ radical) which abstracts X from Cu(II)X<sub>2</sub>.",
          "<b>Gomberg–Bachmann</b>: ArN<sub>2</sub><sup>+</sup> + Ar′H/NaOH → Ar–Ar′ (aryl radical adds to the arene to give a cyclohexadienyl radical, then loses H•).",
          "<b>Hunsdiecker</b>: RCOOAg + Br<sub>2</sub> → R–Br + CO<sub>2</sub> + AgBr (acyloxy radical; one carbon less).",
          "<b>S<sub>RN</sub>1</b>: ArX + e<sup>−</sup> → ArX<sup>•−</sup> → Ar• + X<sup>−</sup>; Ar• + Nu<sup>−</sup> → ArNu<sup>•−</sup> → (electron transfer to ArX) ArNu: a radical chain that explains aryl substitution without an electron-withdrawing group.",
          "<b>Hofmann–Löffler–Freytag</b>: an N-centred radical abstracts the δ-H through a six-membered TS (1,5-HAT) and gives a pyrrolidine after cyclisation."])
    from . import radical_adv as adv
    adv.theory(B)
    B.h2("9.20  Additional validated mechanisms")
    adv.mechanisms(B)
    B.h2("9.21  Problems on free radicals")
    qs = []
    def q(n, text, fig, ans, why):
        qs.append(Q(f"FR-{n}", text, fig, ans, why))
    q(1, "Arrange in decreasing stability: (a) CH<sub>3</sub>•, (b) CH<sub>3</sub>CH<sub>2</sub>•, (c) (CH<sub>3</sub>)<sub>3</sub>C•, (d) PhCH<sub>2</sub>•, (e) CH<sub>2</sub>=CH–CH<sub>2</sub>•, (f) CH<sub>2</sub>=CH•.",
      S([("a", "[CH3]"), ("b", "C[CH2]"), ("c", "C[C](C)C"), ("d", "[CH2]c1ccccc1"), ("e", "C=C[CH2]"), ("f", "C=[CH]")]), "d &gt; e &gt; c &gt; b &gt; a &gt; f",
      "Benzyl (resonance over the ring) &gt; allyl (two forms) &gt; tertiary (hyperconjugation, 9 C–H) &gt; primary &gt; methyl &gt; vinyl (σ radical, 33 % s). BDE of the parent C–H: 89.8, 88, 96.5, 101, 105, 111 kcal mol<sup>−1</sup> (⚑ benzylic and allylic BDEs are within 2 kcal mol<sup>−1</sup>; the key follows ‘more resonance forms’).")
    q(2, "Arrange the C–H bonds in decreasing bond strength: (a) C<sub>6</sub>H<sub>5</sub>–H, (b) CH<sub>2</sub>=CH–H, (c) CH<sub>3</sub>–H, (d) (CH<sub>3</sub>)<sub>3</sub>C–H, (e) PhCH<sub>2</sub>–H, (f) CH<sub>2</sub>=CHCH<sub>2</sub>–H.",
      None, "a &gt; b &gt; c &gt; d &gt; e &gt; f", "The stronger the C–H, the less stable the radical formed: 112, 111, 105, 96.5, 89.8, 88 kcal mol<sup>−1</sup>.")
    q(3, "Propane is chlorinated and brominated (light). Using relative reactivities (1° : 2° = 1 : 3.8 for Cl; 1 : 82 for Br per H), find the percentage of 2-halopropane.",
      None, "Cl: 56 %; Br: 96.5 %", "Cl: (2 × 3.8)/(6 × 1 + 2 × 3.8) = 7.6/13.6 = 56 %. Br: (2 × 82)/(6 + 164) = 164/170 = 96.5 %. Bromine is more selective because its H-abstraction TS is late and resembles the radical.")
    q(4, "Isobutane is chlorinated with Cl<sub>2</sub> in diffuse sunlight. Which chloride is the major product?",
      None, "(B) isobutyl chloride (≈ 64 %)", "9 primary H × 1.0 = 9; 1 tertiary H × 5.0 = 5. The numerical advantage of the nine primary H outweighs the reactivity of the single tertiary H (with Br<sub>2</sub> the tertiary bromide would predominate: 9 : 1600).")
    q(5, "How many monochlorinated products (without stereoisomers) can be obtained from 2-methylbutane, and how many with stereoisomers?",
      S([("", "CCC(C)C")]), "4; 6", "H types: CH<sub>3</sub>–C (6 H, 1-chloro-3-methylbutane... see below); C(CH<sub>3</sub>)H (1 H); CH<sub>2</sub> (2 H); CH<sub>3</sub>–CH<sub>2</sub> (3 H). Four structural isomers: 1-chloro-2-methylbutane (chiral), 2-chloro-2-methylbutane, 2-chloro-3-methylbutane (chiral), 1-chloro-3-methylbutane. Two are chiral, so 4 + 2 = 6 with stereoisomers.")
    q(6, "Which alkane gives only one monochloro derivative? (a) n-pentane, (b) isopentane, (c) neopentane, (d) cyclopentane, (e) 2,2,3,3-tetramethylbutane.",
      None, "(c), (d), (e)", "All H are equivalent in neopentane (12 H), cyclopentane (10 H) and hexamethylethane (18 H).")
    q(7, "Explain why HBr adds to propene anti-Markovnikov in the presence of peroxide while HCl and HI do not.",
      None, "thermochemistry of the two propagation steps", "Step 1 (X• + C=C): ΔH = −25.1 (Br), −67 (Cl), +46 (I) kJ mol<sup>−1</sup>; step 2 (R• + HX): ΔH = −50.2 (Br), +12.6 (Cl), −117.1 (I) kJ mol<sup>−1</sup>. Only for HBr are both steps exothermic. For HCl step 2 is endothermic (C–H bond formed is not strong enough to pay for breaking the strong H–Cl bond); for HI step 1 is endothermic (the weak C–I bond) and I• mostly dimerises.")
    q(8, "NBS/peroxide is reacted with 1-butene. Name the products.",
      S([("", "C=CCC")]), "3-bromobut-1-ene and 1-bromobut-2-ene", "Br• removes an allylic H from C-3 giving CH<sub>2</sub>=CH–C•H–CH<sub>3</sub> ↔ •CH<sub>2</sub>–CH=CH–CH<sub>3</sub>. Br<sub>2</sub> reacts at either terminus. The secondary bromide has a chiral centre (racemic); the primary bromide is a mixture of E and Z (E major).")
    q(9, "Toluene is treated with (i) Cl<sub>2</sub>, light, (ii) Cl<sub>2</sub>, Fe. Name the main products.",
      S([("(i)", "ClCc1ccccc1"), ("(ii)", "Cc1ccc(Cl)cc1")]), "(i) benzyl chloride (then benzal chloride, benzotrichloride); (ii) o- and p-chlorotoluene", "(i) Light gives Cl•, which abstracts the benzylic H (89.8 kcal mol<sup>−1</sup>): a radical chain at the side chain. (ii) Fe gives FeCl<sub>3</sub>, a Lewis acid that makes Cl<sup>+</sup>: electrophilic substitution on the ring.")
    q(10, "Electrolysis of (i) potassium propanoate and (ii) an equimolar mixture of sodium acetate and sodium propanoate. Give the hydrocarbons.",
      None, "(i) n-butane; (ii) ethane, propane, n-butane (≈ 1 : 2 : 1)", "Kolbe: 2 RCOO<sup>−</sup> → R–R + 2 CO<sub>2</sub> + 2e<sup>−</sup>. With a mixture the radicals CH<sub>3</sub>• and C<sub>2</sub>H<sub>5</sub>• combine at random: CH<sub>3</sub>–CH<sub>3</sub>, C<sub>2</sub>H<sub>5</sub>–C<sub>2</sub>H<sub>5</sub> (butane), CH<sub>3</sub>–C<sub>2</sub>H<sub>5</sub> (propane, statistically twice as probable). The solution becomes alkaline (HO<sup>−</sup> forms at the cathode).")
    q(11, "Which of the following radicals will undergo a 1,2-shift? (a) neopentyl, (b) 2,2-dimethyl-2-phenylethyl (neophyl), (c) 3-methyl-2-butyl, (d) cyclopropylcarbinyl (ring opening).",
      S([("a", "CC(C)(C)[CH2]"), ("b", "[CH2]C(C)(C)c1ccccc1"), ("c", "CC(C)[CH]C"), ("d", "[CH2]C1CC1")]), "(b) 1,2-aryl; (d) is a ring-opening (β-scission), not a shift",
      "Radicals do not undergo 1,2-H or 1,2-methyl shifts, so (a) and (c) do not rearrange (unlike the corresponding cations). The neophyl radical undergoes 1,2-phenyl shift to the tertiary radical via the spiro intermediate.")
    q(12, "2,4,6-Tri-tert-butylphenoxyl radical is stable and does not dimerise. Why?",
      S([("", "CC(C)(C)c1cc(C(C)(C)C)c([O])c(C(C)(C)C)c1")]), "delocalisation + steric protection", "The unpaired electron is delocalised over O and the ortho and para carbons; these positions are blocked by tert-butyl groups, so the radical cannot dimerise through C–O or C–C bonds without large strain.")
    q(13, "Rank in decreasing rate of free-radical allylic substitution (NBS): (I) CH<sub>3</sub>CH=CH<sub>2</sub>, (II) CH<sub>3</sub>CH<sub>2</sub>CH=CH<sub>2</sub>, (III) (CH<sub>3</sub>)<sub>2</sub>CHCH=CH<sub>2</sub>.",
      S([("I", "CC=C"), ("II", "CCC=C"), ("III", "CC(C)C=C")]), "III &gt; II &gt; I  (Nucleus Q40)", "III has a tertiary allylic H (weakest allylic C–H, most stable radical); II has a secondary allylic H; I a primary allylic H.")
    q(14, "Match: (A) peroxides, (B) NBS, (C) AIBN, (D) HI; with (P) source of Br<sub>2</sub> at low concentration, (Q) source of RO•, (R) source of alkyl radicals + N<sub>2</sub>, (S) reducing agent for R–I.",
      None, "A–Q; B–P; C–R; D–S", "Dialkyl or diacyl peroxides give alkoxy/acyloxy radicals; NBS maintains low [Br<sub>2</sub>]; AIBN gives (CH<sub>3</sub>)<sub>2</sub>C•CN + N<sub>2</sub>; HI reduces alkyl iodides to alkanes (the reverse of iodination).")
    q(15, "Why does the photochlorination of ethane-d<sub>6</sub> proceed more slowly than that of ethane?",
      None, "primary kinetic isotope effect", "The C–D bond has a lower zero-point energy and is stronger (≈ 1.2 kcal mol<sup>−1</sup>), so the H-abstraction step, which is rate-determining, is slower (k<sub>H</sub>/k<sub>D</sub> ≈ 1.3–2 for Cl•; Nucleus Q47: II &lt; I &lt; III with neopentane the fastest).")
    q(16, "An optically active alkane R<sup>1</sup>R<sup>2</sup>R<sup>3</sup>C–H is brominated at the stereocentre by NBS. What is the stereochemical outcome?",
      None, "racemic bromide", "The radical formed at the stereocentre is planar (or rapidly inverting), so Br<sub>2</sub> attacks from either face with equal probability.")
    adv.problems(B, q)
    B.answers(qs, with_stem=True)
    return qs
