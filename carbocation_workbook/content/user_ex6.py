from .common import *
from .lg import S

PH = "c1ccccc1"


def build(B):
    B.part("Part 5E", "Your ‘Stability of Carbocation’ Notes (cation.pdf): everything added, redrawn and checked")
    B.p("This part reproduces the content of the 11-page handwritten note you supplied: the factor list, the worked orders 1–12, the pK<sub>R<sup>+</sup></sub> ladder, the gas-phase hydride-affinity table, the tabulated pK values, "
        "σ-bond resonance and the non-classical ions, and the aryl-cation substituent series. Structures are redrawn; numerical values are <b>transcribed from your pages</b> (they are literature values quoted in the note, not independently re-measured here). "
        "Where something in the note disagrees with another part of the same note, or with the data it quotes, the disagreement is marked <b>⚑ Check</b> and the reasoning is given, so you can decide which to use in an exam.")

    B.h2("5E.1  The factor list")
    B.table(["Stabilising factor", "Rule from the note", "Comment"],
        [["+R / +M", "stability ∝ +R/+M", "lone-pair or π donation into the empty p orbital; the strongest effect (oxocarbenium, iminium, arylmethyl with p-OMe/NR<sub>2</sub>)"],
         ["+H (hyperconjugation)", "∝ number of α C–H (and C–C) bonds", "counted on the carbon next to C<sup>+</sup>; 9α &gt; 6α &gt; 4α in example 3"],
         ["+I", "∝ electron release by alkyl", "matters when hyperconjugation is absent or equal"],
         ["−I, −H, −M", "stability ∝ 1/(−I), 1/(−H), 1/(−M)", "withdrawing groups, loss of hyperconjugating bonds, and acceptors destabilise"]],
        widths=[22, 33, 45])
    B.p("The note adds two measured quantities: the gas-phase <b>hydride affinity</b> (HIA; lower = more stable cation) and the solution <b>pK<sub>R<sup>+</sup></sub></b> (higher = more stable cation). They are separate observables and, as the note's own data show, do not always give the same order.")

    B.h2("5E.2  Worked orders 1–12 (redrawn)")

    def fig(pairs, cap):
        B.fig(S(pairs), cap)

    fig([("a", "C=C[CH2+]"), ("b", "C=CC=C[CH2+]"), ("c", "C=CC=CC=C[CH2+]")], "1.  Longer conjugation: a &lt; b &lt; c (allyl &lt; pentadienyl &lt; heptatrienyl); more resonance contributors spread the charge over more carbons.")
    fig([("a", "C=CC=C[CH2+]"), ("b", "CO[CH+]C")], "2.  a &lt; b. The pentadienyl cation a has a sextet on carbon; in b oxygen gives a lone pair so every atom has an octet (oxocarbenium).")
    fig([("9α", "C[C+](C)C"), ("6α", "CC(C)[C+](C)CC"), ("4α", "CC[CH+]CC")], "3.  9α &gt; 6α &gt; 4α, i.e. hyperconjugation by α C–H bond count (H &gt; I). "
        "⚑ Check: as drawn (second and third), the counts follow the note; the middle cation is tertiary and the last secondary, so the order is also tertiary &gt; … secondary, which agrees.")
    fig([("CH₃⁺", "[CH3+]"), ("CD₃⁺", "[2H][C+]([2H])[2H]"), ("CT₃⁺", "[3H][C+]([3H])[3H]")],
        "4.  CH<sub>3</sub><sup>+</sup> &lt; CD<sub>3</sub><sup>+</sup> &lt; CT<sub>3</sub><sup>+</sup>. The isotopes sit <i>on</i> C<sup>+</sup>, so no C–X bond is hyperconjugating: only the +I order T &gt; D &gt; H is left.")
    fig([("CH₃", "C[C+](C)C"), ("CD₃", "[2H]C([2H])([2H])[C+](C([2H])([2H])[2H])C([2H])([2H])[2H]"), ("CT₃", "[3H]C([3H])([3H])[C+](C([3H])([3H])[3H])C([3H])([3H])[3H]")],
        "5.  (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> &gt; (CD<sub>3</sub>)<sub>3</sub>C<sup>+</sup> &gt; (CT<sub>3</sub>)<sub>3</sub>C<sup>+</sup>. Now the labelled groups are β to the charge: hyperconjugation dominates, and C–H (weakest, highest zero-point energy) donates best. "
        "The note summarises: +I order CT<sub>3</sub> &gt; CD<sub>3</sub> &gt; CH<sub>3</sub>; hyperconjugation (+H) order CH<sub>3</sub> &gt; CD<sub>3</sub> &gt; CT<sub>3</sub> (BDE C–T &gt; C–D &gt; C–H); the +H effect wins.")
    fig([("a", "[c+]1ccccc1"), ("b", "[CH+]1CCCCC1")], "6.  As drawn in the note: a &gt; b (phenyl cation &gt; cyclohexyl cation).")
    B.warn("<b>⚑ Check, item 6.</b> This inequality is the wrong way round on the note's own data: the hydride affinity table (5E.4) gives phenyl 294 and a secondary cation (isopropyl) 249 kcal/mol; a secondary cyclohexyl cation is therefore far <i>more</i> stable than phenyl, whose empty orbital is an sp<sup>2</sup> σ orbital in the ring plane with no resonance. "
           "I recommend recording: cyclohexyl &gt; phenyl. If your source key says otherwise, treat it as a misprint.")
    fig([("a", "[c+]1ccccc1"), ("b", "[CH+](c1ccccc1)c1ccccc1"), ("c", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1")], "7.  a &lt; b &lt; c: phenyl cation &lt; diphenylmethyl &lt; trityl (each phenyl delocalises the charge).")
    fig([("a (1°)", "[CH2+]C1CCCCC1"), ("b (3°)", "C[C+]1CCCCC1"), ("c (2°)", "CC1CC[CH+]CC1")], "8.  a &lt; c &lt; b: primary &lt; secondary &lt; tertiary.")
    fig([("a", "C[CH2+]"), ("b", "C=[CH+]"), ("c", "C#[C+]")], "9.  a &gt; b &gt; c: the more s-character in the carbon bearing the empty orbital (sp<sup>3</sup>-like p, sp<sup>2</sup>, sp), the less stable the cation.")
    fig([("a◊", "CC1[CH+]C=CCC1"), ("b◊", "CC1CC=C[CH+]C1"), ("c◊", "CC1=CC=C[CH+]C1")],
        "10.  c &gt; a &gt; b. c is a cyclohexadienyl (pentadienyl-type, two C=C) cation; a and b are allylic secondary; a has a methyl-bearing carbon next to the cationic carbon (extra hyperconjugation), b only a remote one. ◊ Positions of the methyl and the ring double bonds are my reading of the drawing.")
    fig([("a", "C[C+]1CCCCC1"), ("b", "[CH+]1OCCC(C)C1")], "11.  a &lt; b as printed in the note (cyclic oxocarbenium: b has the + next to O).")
    B.warn("<b>⚑ Check, item 11.</b> In the second structure the cation sits next to the ring oxygen only if the positive charge is on C2 (drawn at the position adjacent to O). That is the oxocarbenium ion, and it is more stable than the tertiary 1-methylcyclohexyl cation, which agrees with the note. If the cation were on C3 (β to O) the −I effect would make it <i>less</i> stable than the tertiary ion; item 12 shows exactly that difference.")
    fig([("a (C2, +M)", "[CH+]1OCCCC1"), ("b (C3, −I)", "[CH+]1COCCC1"), ("c (C4, −I)", "[CH+]1CCOCC1")],
        "12.  a &gt; b &gt; c: oxygen donates its lone pair when the cation is α (C2); at C3 and C4 only the −I effect operates, strongest at C3 (nearer to O).")

    B.h2("5E.3  ‘Important order’: the pK<sub>R<sup>+</sup></sub> ladder")
    B.p("pK<sub>R<sup>+</sup></sub> is defined from the equilibrium R<sup>+</sup> + H<sub>2</sub>O ⇌ ROH + H<sup>+</sup> by pK<sub>R<sup>+</sup></sub> = log([R<sup>+</sup>]/[ROH]) + H<sub>R</sub>, where H<sub>R</sub> is the acidity function that plays the role of pH in strong acid. "
        "A cation with a larger pK<sub>R<sup>+</sup></sub> persists at a more acidic medium, i.e. is more stable. (Your note writes the equilibrium as H<sup>+</sup> + ROH ⇌ R<sup>+</sup> + H<sub>2</sub>O; that is the same reaction read in the cation-forming direction, and the formula above is the standard one.)")
    fig([("+9.7", "C1(C2CC2)=C(C2CC2)[C+]1C1CC1"), ("+7.8", "CC1=C(C)[C+]1C"), ("+4.7", "[CH+]1C=CC=CC=C1"), ("+3.1", "c1ccccc1C1=C(c2ccccc2)[C+]1c1ccccc1")],
        "Aromatic cations first: tricyclopropylcyclopropenyl &gt; trimethylcyclopropenyl &gt; tropylium &gt; triphenylcyclopropenyl.")
    fig([("−2.3", "[C+](C1CC1)(C1CC1)C1CC1"), ("−5.5◊", "C1=C[CH+]1"), ("−6.63", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1"), ("−13.3", "[CH+](c1ccccc1)c1ccccc1"),
         ("PhCH(CH₃)⁺", "C[CH+]c1ccccc1"), ("−16.4◊", "C[C+](C)C"), ("−20", "[CH2+]c1ccccc1")],
        "…then tricyclopropylmethyl &gt; (parent cyclopropenyl, value as printed) &gt; Ph<sub>3</sub>C<sup>+</sup> &gt; Ph<sub>2</sub>CH<sup>+</sup> &gt; PhCH(CH<sub>3</sub>)<sup>+</sup> &gt; (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> &gt; PhCH<sub>2</sub><sup>+</sup>.")
    fig([("allyl", "C=C[CH2+]"), ("i-Pr", "C[CH+]C"), ("−29.9", "C[CH2+]"), ("CH₃⁺", "[CH3+]"), ("vinyl", "C=[CH+]"), ("−40.2", "C#[C+]")],
        "…then allyl &gt; isopropyl &gt; ethyl (−29.9) &gt; methyl &gt; vinyl &gt; ethynyl (−40.2).")
    B.warn("<b>⚑ Check (values).</b> (1) Your ladder gives t-Bu<sup>+</sup> = −16.4, but the Carey–Sundberg table on page 6 of the same note gives −15.5 (and McManus's page says ‘estimate −15.5’ in FSO<sub>3</sub>H–SbF<sub>5</sub>); I would use −15.5. "
           "(2) The tricyclopropylcyclopropenyl cation is +9.7 on the ladder and in the Carey table, but ‘7.2’ on page 5. (3) Tropylium is +4.7 on the ladder and in Carey, ‘4.2’ on page 5. "
           "(4) The ladder puts the parent cyclopropenyl cation at −5.5; I cannot confirm this value from the tables you supplied, so it is marked ◊. "
           "<b>Important consequence:</b> on this ladder t-butyl (−16.4/−15.5) is <i>above</i> benzyl (≈ −20), and 2-phenyl-2-propyl (cumyl, −12.3) is above both. So <b>on your source's data, t-Bu<sup>+</sup> is more stable than the benzyl cation</b>, not less. "
           "Earlier parts of this book use the usual ‘resonance &gt; hyperconjugation’ coaching convention for benzyl vs t-Bu in some answers and flag it; with this note as your source, use t-Bu<sup>+</sup> &gt; benzyl. "
           "This changes the count in D-27 (below).")

    B.h2("5E.4  Gas-phase hydride affinities (kcal mol<sup>−1</sup>, as in your note)")
    B.p("R–H → R<sup>+</sup> + H<sup>−</sup>; the smaller the number, the more stable the cation. Values are those written on your page (attributed there to March); they are quoted, not re-derived.")
    B.table(["Cation", "HIA", "Cation", "HIA", "Cation", "HIA"],
        [["CH<sub>3</sub><sup>+</sup>", "314.6", "tropylium", "200", "PhCH<sub>2</sub><sup>+</sup>", "238"],
         ["CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> (bridged)", "276.7", "CH<sub>2</sub>=CH–CH<sub>2</sub><sup>+</sup>", "256", "PhCH<sup>+</sup>CH<sub>3</sub>", "225"],
         ["(CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup>", "249.2", "CH<sub>2</sub>=CH–CH<sup>+</sup>–CH<sub>3</sub>", "239", "PhC<sup>+</sup>(CH<sub>3</sub>)<sub>2</sub>", "220"],
         ["(CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>", "231.9", "CH<sub>2</sub>=CH–C<sup>+</sup>(CH<sub>3</sub>)<sub>2</sub>", "230", "", ""],
         ["CH<sub>2</sub>=CH<sup>+</sup> (bridged)", "287", "CH<sub>3</sub>CH=CH–CH<sup>+</sup>CH<sub>3</sub>", "228", "", ""],
         ["cyclopropenyl", "223◊", "phenyl", "294", "", ""]],
        widths=[22, 8, 28, 8, 26, 8])
    B.p("Reading the table: tropylium (200) is by far the most stable, then the α,α-dimethylbenzyl (220) and 1-phenylethyl (225) cations; <b>t-Bu<sup>+</sup> (231.9) is more stable than benzyl (238)</b>; allyl (256) is less stable than isopropyl (249); "
        "the stability of the substituted-allyl series follows substitution (256 → 239 → 230 → 228). Phenyl (294) and vinyl (287) are the worst, as expected for cations whose empty orbital is sp<sup>2</sup>/sp. "
        "◊ The value 223 for cyclopropenyl is as written in your note; for an aromatic cation it looks comparatively high next to tropylium (200), so check it against your source before using it numerically.")

    B.h2("5E.5  Tabulated pK<sub>R<sup>+</sup></sub> values from the note")
    B.table(["Cation (Carey–Sundberg Table 4.15, as on your page)", "pK<sub>R<sup>+</sup></sub>", "Cation", "pK<sub>R<sup>+</sup></sub>"],
        [["Triphenylmethyl", "−6.63", "4,4′,4″-tri(dimethylamino)trityl", "+9.36"],
         ["4,4′,4″-trimethyltrityl", "−3.56", "4,4′,4″-trichlorotrityl", "−7.74"],
         ["4-methoxytrityl", "−3.40", "4-nitrotrityl", "−9.15"],
         ["4,4′-dimethoxytrityl", "−1.24", "4,4′,4″-trinitrotrityl", "−16.27"],
         ["4,4′,4″-trimethoxytrityl", "+0.82", "", ""],
         ["Diphenylmethyl", "−13.3", "2,2′,4,4′,6,6′-hexamethyldiphenylmethyl", "−6.6"],
         ["4,4′-dimethyldiphenylmethyl", "−10.4", "4,4′-dichlorodiphenylmethyl", "−13.96"],
         ["4,4′-dimethoxydiphenylmethyl", "−5.71", "", ""],
         ["Benzyl", "≤ −20", "Triphenylcyclopropenyl", "+3.1"],
         ["tert-Butyl", "−15.5", "2,4,6-trimethylbenzyl", "−17.4"],
         ["2-Phenyl-2-propyl (cumyl)", "−12.3", "Trimethylcyclopropenyl", "+7.8"],
         ["Tropylium", "+4.7", "Tricyclopropylcyclopropenyl", "+9.7"],
         ["Tricyclopropylmethyl", "−2.3", "", ""]],
        widths=[34, 14, 38, 14])
    B.p("Patterns to learn from this table: (i) every p-donor (OMe, NMe<sub>2</sub>, Me) raises pK<sub>R<sup>+</sup></sub> of trityl, every p-acceptor (Cl, NO<sub>2</sub>) lowers it; (ii) the three-fold cyclopropyl substitution (−2.3) puts a carbocation above any simple trityl cation; "
        "(iii) aromatic cations (tropylium, cyclopropenyl) sit above all acyclic non-heteroatom-stabilised cations; (iv) three methyl groups on benzyl (2,4,6-trimethylbenzyl, −17.4) raise the value relative to benzyl (≤ −20), and six methyls on diphenylmethyl (−6.6 against −13.3) raise it much more: alkyl groups donate to the cationic centre through the ring. "
        "The note also lists the ‘cyclopentenyl/cyclohexenyl’ allylic cations from McManus; the entries on your page (% H<sub>2</sub>SO<sub>4</sub> for 50 % protonation, then pK) are:")
    B.table(["Allylic cation (McManus table, from your page)", "% H<sub>2</sub>SO<sub>4</sub> (50 %)", "pK"],
        [["1,3,4,4,5,5-Hexamethylcyclopentenyl", "33", "−1.9"], ["1,3-Dimethylcyclopentenyl", "35", "−2.1"], ["1-Cyclopropyl-3-methylcyclopentenyl", "12", "−0.46"],
         ["1-Methyl-3-phenylcyclopentenyl", "50", "−3.4"], ["2,4-Dimethyl-3-penten-2-yl", "73", "−6.3"], ["2,3,4-Trimethyl-3-penten-2-yl", "82", "−7.7"],
         ["1,3,5,5-Tetramethylcyclohexenyl", "50", "−3.4"], ["1,5,5-Trimethylcyclohexenyl", "80", "−7.3"], ["1,5,5-Trimethyl-3-phenylcyclohexenyl", "52", "−3.6"],
         ["1,3-Dicyclopropyl-5,5-dimethylcyclohexenyl", "1.2", "+0.6"], ["2,6-Dimethyl-3,5-heptadien-2-yl", "≈ 4", "0"], ["1,1-Diphenylethyl", "71", "−6.0"],
         ["Mesitylenonium (1,3,5-trimethyl-2,4-cyclohexadien-1-yl)", "94.5", "−9.6"], ["1,3,5-Trimethoxy-2,4-cyclohexadienyl", "7 M HClO<sub>4</sub>", "−5.1"],
         ["1,5-Dimethyl-2,4-cyclohexadienyl", "HF–BF<sub>3</sub>", "−14"], ["tert-Butyl", "FSO<sub>3</sub>H–SbF<sub>5</sub>", "estimate −15.5"]],
        widths=[60, 20, 20])
    B.p("Reading it: cyclopropyl groups on an allylic cation raise its stability far more than methyl groups (1,3-dicyclopropyl, pK +0.6, against a methyl analogue at about −7); a phenyl on the allylic terminus helps (−3.4/−3.6 against −7.3); and a nonplanar or non-resonance-stabilised cation such as t-butyl can only be estimated (−15.5).")

    B.h2("5E.6  Examples from the note (March / Carey sets): where they appear in this book")
    B.p("The nine orders printed on your page 3 under ‘Source – Jerry March’ are the same problems as your Exercise 2 and are answered, with reasons, in <b>Part 5A</b>. Two points need to be stated here.")
    B.ul(["<b>Substituted cyclopropylmethyl:</b> 1 &gt; 2 &gt; 3 for the 2,3-dimethyl, 2-methyl and parent cyclopropylmethyl cations, and for the p-cyclopropylbenzyl series: more methyl groups on the ring, more donation (matches Part 5A, Q21 and Q17).",
          "<b>⚑ Check, the set ‘benzyl / cyclopropylmethyl / tropylium / branched alkyl’:</b> your page prints 2 &gt; 3 &gt; 1 &gt; 4, i.e. cyclopropylmethyl above tropylium. The pK<sub>R<sup>+</sup></sub> data on your own page (tropylium +4.7) put tropylium far above any cyclopropylmethyl or benzyl cation, so I cannot support putting it second; Part 5A gives tropylium &gt; cyclopropylmethyl &gt; benzyl &gt; alkyl. If the examiner's key matches the page, it is the key's choice, not the data's.",
          "The sets ‘4 &gt; 2 &gt; 3 &gt; 1’ (cage ortho-ester, dioxanyl, oxanyl, diazinanyl cations), ‘3 &gt; 2 &gt; 1’ (secondary, tertiary and iminium-type sets), ‘1 &gt; 3 &gt; 2’ (decalyl), and ‘3 &gt; 1 &gt; 2’ (alkyl: tertiary &gt; secondary &gt; primary) agree with the reasoning already given in Part 5A."])
    fig([("i", "C1(C2CC2)=C(C2CC2)[C+]1C1CC1"), ("ii", "CC1=C(C)[C+]1C"), ("iii", "[CH+]1C=CC=CC=C1"), ("iv", "C1=C[CH+]1")],
        "Practice item on page 4 (answer ticked in your note): arrange i–iv in decreasing stability: (a) i, ii, iii, iv. Tricyclopropylcyclopropenyl (+9.7) &gt; trimethylcyclopropenyl (+7.8) &gt; tropylium (+4.7) &gt; parent cyclopropenyl.")

    B.h2("5E.7  More pK<sub>R<sup>+</sup></sub> structures from the note (pages 5 and 6)")
    fig([("+7", "c1ccccc1C1=C(c2ccccc2)C(c2ccccc2)=C(c2ccccc2)C(c2ccccc2)=C(c2ccccc2)[C+]1c1ccccc1"), ("+4.2 ⚑", "[CH+]1C=CC=CC=C1"), ("+3.1", "c1ccccc1C1=C(c2ccccc2)[C+]1c1ccccc1"),
         ("+6.5", "COc1ccc(cc1)C1=C(c2ccc(OC)cc2)[C+]1c1ccc(OC)cc1")],
        "Heptaphenyltropylium (+7) is more stable than tropylium (+4.7/4.2): phenyl groups add some conjugation and steric protection. Tris(p-anisyl)cyclopropenyl (+6.5) &gt; triphenylcyclopropenyl (+3.1): p-OMe donates.")
    fig([("+7.2 ⚑", "C1(C2CC2)=C(C2CC2)[C+]1C1CC1"), ("+7.57", "Nc1ccc(cc1)C1=C(c2ccc(N)cc2)[C+]1c1ccc(N)cc1"), ("+9.36 ⚑", "CN(C)c1ccc(cc1)C1=C(c2ccc(N(C)C)cc2)[C+]1c1ccc(N(C)C)cc1")],
        "Amino-substituted cyclopropenyl cations: the stronger the donor, the larger the pK<sub>R<sup>+</sup></sub>.")
    B.warn("<b>⚑ Check.</b> (a) +7.2 for tricyclopropylcyclopropenyl contradicts +9.7 elsewhere (use +9.7, which is the Carey–Sundberg value). (b) +9.36 is, in Carey–Sundberg, the value for the <i>triarylmethyl</i> cation with three p-dimethylamino groups (crystal-violet type), not for the cyclopropenyl analogue; confirm which structure your source means before using the number. The trend (donors raise pK) is not in doubt.")
    fig([("+1.7", "[CH+]1C=CC=Cc2ccccc12"), ("+0.82", "COc1ccc(cc1)[C+](c1ccc(OC)cc1)c1ccc(OC)cc1"), ("−3.56", "Cc1ccc(cc1)[C+](c1ccc(C)cc1)c1ccc(C)cc1"),
         ("−6.63", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1"), ("−13.3", "[CH+](c1ccccc1)c1ccccc1")],
        "Benzotropylium (+1.7, a benzo-fused seven-membered ring cation), tris(p-anisyl)methyl, tris(p-tolyl)methyl, trityl and diphenylmethyl: stability follows the donor strength of the para groups.")

    B.h2("5E.8  Pentavalent carbonium ions and σ-bond resonance")
    B.p("<b>Carbonium ions</b> (five-coordinate carbon): CH<sub>5</sub><sup>+</sup> (methanonium) and C<sub>2</sub>H<sub>7</sub><sup>+</sup> (ethanonium) contain a three-centre two-electron (3c–2e) C···H···C or C···H···H unit: the bonding pair of a C–H σ bond is shared by three atoms. "
        "They are observed in the gas phase and in superacid (CH<sub>5</sub><sup>+</sup> is a true, fluxional species); in ordinary solution chemistry they appear as transition states or short-lived intermediates (your note writes ‘T.S. or true intermediate’). "
        "Do not confuse them with <b>carbenium</b> ions (three-coordinate R<sub>3</sub>C<sup>+</sup>), which are the ions of all the other parts.")
    B.p("<b>σ-bond resonance (‘dancing resonance’)</b> in the cyclopropylmethyl cation: the C–C σ bonds of cyclopropane are bent and strained, and their electrons are close in energy to a π bond (cyclopropane behaves electronically as a very weak π-donor). "
        "In the <i>bisected</i> conformation the empty p orbital lies parallel to the plane of the ring bonds, so a ring σ bond can overlap with it. "
        "The cation is then a hybrid of cyclopropylcarbinyl ⇌ homoallyl (CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub><sup>+</sup>) contributors with partial δ<sup>+</sup> on the ring carbons, the three ‘R.H.’ charges drawn in the note. "
        "Your note says the effect is ‘even stronger than +H’: that is correct as a statement of stabilisation (cyclopropylmethyl &gt; benzyl on most measures); the description of the C–C bond as ‘weaker than the π bond of an alkene’ is a simplification: it is strained, and its electrons are much easier to donate than an ordinary C–C σ bond, which is the reason it works.")
    B.p("Order from the note: cyclopropylmethyl &lt; 2-methyl-cyclopropylmethyl &lt; 2,3-dimethyl-cyclopropylmethyl (methyl groups on the ring improve the donor); p-cyclopropylbenzyl &gt; p-cyclobutylbenzyl (cyclopropyl donates by σ-resonance, cyclobutyl does not). "
        "And p-cyclopropylbenzyl &gt; 3,5-dimethyl-4-cyclopropylbenzyl: the two methyl groups ortho to the cyclopropyl group force the ring out of the bisected arrangement, so the donation is lost (steric inhibition of resonance).")
    fig([("a", "[CH2+]c1ccc(cc1)C1CC1"), ("b", "[CH2+]c1ccc(cc1)C1CCC1"), ("c", "[CH2+]c1cc(C)c(c(C)c1)C1CC1")],
        "a &gt; b (σ-resonance); a &gt; c (steric inhibition of resonance by the flanking methyls).")
    fig([("tropylium", "[CH+]1C=CC=CC=C1"), ("heptaphenyl", "c1ccccc1C1=C(c2ccccc2)C(c2ccccc2)=C(c2ccccc2)C(c2ccccc2)=C(c2ccccc2)[C+]1c1ccccc1")],
        "Tropylium (4.7) &lt; heptaphenyltropylium (7): see 5E.7. The cation has seven equivalent resonance contributors (aromatic, 6π over 7 carbons).")

    B.h2("5E.9  Non-classical cations from the note")
    B.ul(["<b>Phenonium ion</b>: β-phenylethyl cation C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub>CH<sub>2</sub><sup>+</sup> is bridged by the ring π electrons to give a spiro[2.5]octadienyl (phenonium) cation, with the starred label carbon becoming equivalent to its partner by the shift; the ring is a σ/π donor through its ipso carbon (sketch in your note: ring in dotted outline bonded to both CH<sub>2</sub> carbons).",
          "<b>7-Norbornenyl / nortricyclyl system</b>: the π bond of norbornene participates with a developing cation at C7, giving a delocalised three-centre σ/π ion; the note draws the two limiting structures and the hybrid with dotted partial bonds.",
          "<b>2-Norbornyl cation</b> (page 8): classical ion ⇌ σ-bridged (non-classical) ion, drawn with the C1–C6 bond delocalised to C2 (see Part 4 for the full discussion and the evidence).",
          "<b>1-Adamantyl cation</b>: a bridgehead tertiary cation; it cannot flatten, but is stabilised by hyperconjugation from the three β C–C bonds and is observable in superacid; it solvolyses much slower than t-butyl in comparable media, which is why it is the usual example of a ‘bridgehead’ cation."])
    fig([("phenonium", "C1=C[CH+]C=CC12CC2"), ("1-adamantyl", "C1C2CC3CC1C[C+](C2)C3"), ("7-norbornyl◊", "[CH+]1C2CCC1CC2")],
        "Left to right: the phenonium ion drawn as its spiro cyclohexadienyl (arenium) contributor, the 1-adamantyl cation, and a classical 7-norbornyl cation. ◊ Bridged ions are hybrids that a single line-bond structure cannot draw faithfully (see Part 4).")

    B.h2("5E.10  Aryl-cation substituent series (pages 10 and 11)")
    B.p("These series are for aryl cations (empty orbital on a ring carbon); the note uses the substituent effects as a guide to the order. Remember what the empty orbital is: an sp<sup>2</sup> σ orbital in the ring plane, orthogonal to the π system, so the π-donor effect (+M) cannot operate by direct conjugation; the orders below therefore mix inductive effects with the textbook ‘conjugation-type’ rules the note uses. "
        "Note the three groups of series: +I alkyl (a &lt; b &lt; c &lt; d &lt; e), halogens (distance and electronegativity), and donors/acceptors (OH, NH<sub>2</sub>, OCH<sub>3</sub>, NO<sub>2</sub>, CCl<sub>3</sub>).")
    fig([("a H", "[c+]1ccccc1"), ("b m-Me", "[c+]1cccc(C)c1"), ("c m-Et", "[c+]1cccc(CC)c1"), ("d m-iPr", "[c+]1cccc(C(C)C)c1"), ("e m-tBu", "[c+]1cccc(C(C)(C)C)c1")],
        "a &lt; b &lt; c &lt; d &lt; e: stability rises with the +I strength of the alkyl group (Me &lt; Et &lt; i-Pr &lt; t-Bu).")
    fig([("a H", "[c+]1ccccc1"), ("b m-F", "[c+]1cccc(F)c1"), ("c m-Cl", "[c+]1cccc(Cl)c1"), ("d m-Br", "[c+]1cccc(Br)c1")],
        "a &gt; d &gt; c &gt; b: the −I effect is strongest for F, then Cl, then Br; all are below the unsubstituted ion.")
    fig([("a H", "[c+]1ccccc1"), ("b o-Cl", "[c+]1ccccc1Cl"), ("c m-Cl", "[c+]1cccc(Cl)c1"), ("d p-Cl", "[c+]1ccc(Cl)cc1")],
        "a &gt; d &gt; c &gt; b: −I falls with distance, so the para ion is least destabilised and the ortho the most. (Your page prints the last symbol as ‘d’; it should read ‘b’, a typo.)")
    fig([("a H", "[c+]1ccccc1"), ("b o-NO₂", "[c+]1ccccc1[N+](=O)[O-]"), ("c m-NO₂", "[c+]1cccc(c1)[N+](=O)[O-]"), ("d p-NO₂", "[c+]1ccc(cc1)[N+](=O)[O-]")],
        "a &gt; c &gt; b &gt; d as printed (m &gt; o &gt; p).")
    B.warn("<b>⚑ Check, nitro series.</b> For chlorine the note uses a pure distance order (p &gt; m &gt; o); for NO<sub>2</sub> it puts p-NO<sub>2</sub> <i>below</i> o-NO<sub>2</sub> (treating the −M effect as the extra factor at the para position). If only the in-plane σ cation is considered, −M cannot act and the distance (−I) order p &gt; m &gt; o, as for Cl, would be expected. "
           "The note's order is the one to use if your exam source is this note; keep in mind that the two series follow different rules.")
    fig([("a H", "[c+]1ccccc1"), ("b o-OH", "[c+]1ccccc1O"), ("c m-OH", "[c+]1cccc(O)c1"), ("d p-OH", "[c+]1ccc(O)cc1")],
        "d &gt; b &gt; a &gt; c (OH: ortho −I,+M; meta −I only; para +M). The same series is given for NH<sub>2</sub> (d &gt; b &gt; a &gt; c) and for OCH<sub>3</sub> (d &gt; b &gt; a &gt; c).")
    fig([("a H", "[c+]1ccccc1"), ("b o-NH₂", "[c+]1ccccc1N"), ("c m-NH₂", "[c+]1cccc(N)c1"), ("d p-NH₂", "[c+]1ccc(N)cc1")], "NH<sub>2</sub>: d &gt; b &gt; a &gt; c.")
    fig([("a H", "[c+]1ccccc1"), ("b o-OMe", "[c+]1ccccc1OC"), ("c m-OMe", "[c+]1cccc(OC)c1"), ("d p-OMe", "[c+]1ccc(OC)cc1")], "OCH<sub>3</sub>: d &gt; b &gt; a &gt; c.")
    fig([("a H", "[c+]1ccccc1"), ("b p-Me (3α)", "[c+]1ccc(C)cc1"), ("c p-Et (2α)", "[c+]1ccc(CC)cc1"), ("d p-iPr (1α)", "[c+]1ccc(C(C)C)cc1")],
        "b &gt; c &gt; d &gt; a: the para alkyl group donates by hyperconjugation, in proportion to its α C–H count (3, 2, 1), all better than hydrogen (Baker–Nathan type order).")
    fig([("a H", "[c+]1ccccc1"), ("b o-CCl₃", "[c+]1ccccc1C(Cl)(Cl)Cl"), ("c m-CCl₃", "[c+]1cccc(c1)C(Cl)(Cl)Cl"), ("d p-CCl₃", "[c+]1ccc(cc1)C(Cl)(Cl)Cl")],
        "CCl<sub>3</sub>: a &gt; c &gt; d &gt; b as printed (ortho worst: −I plus loss of hyperconjugation; meta &gt; para as printed).")
    fig([("a", "[c+]1ccccc1"), ("b", "CO[CH2+]")], "Phenyl cation &lt; CH<sub>2</sub><sup>+</sup>–OCH<sub>3</sub> (oxocarbenium; ≈ 294 vs far lower HIA).")

    B.h2("5E.11  Carbanion stability (the note ends here)")
    B.p("The last page begins the next topic: carbanion stability ∝ −M, −H (loss of hyperconjugation destabilises less than donating groups destabilise a carbanion; here the note means electron-withdrawing groups), −I, and ∝ 1/(+I), 1/(+H), 1/(+M): "
        "the exact mirror of the carbocation list. The carbanion chapter, still to be written, will cover this fully; I have not drawn conclusions from the single page you supplied.")

    B.h2("5E.12  Effect on the earlier answer D-27")
    B.warn("<b>D-27 (heterolytic C–Cl bond energy less than that of t-BuCl).</b> I answered 4 (acetyl chloride, benzyl, 3-chlorocyclopropene, cyclopropylmethyl) using the coaching convention ‘benzyl &gt; tertiary’. "
           "With the data of <i>your note</i> (pK<sub>R<sup>+</sup></sub>: t-Bu −16.4/−15.5, benzyl ≈ −20; HIA: t-Bu 231.9, benzyl 238) the benzyl cation is <b>less</b> stable than t-Bu<sup>+</sup>, so benzyl chloride does <b>not</b> count, and the answer becomes <b>3</b> (acetyl chloride [acylium, if counted], 3-chlorocyclopropene, cyclopropylmethyl chloride). "
           "Which of 3 or 4 your source wants depends on whether it follows the data or the convention; on the data of this note use 3. The same caveat applies to any earlier answer that ranks benzyl above tert-butyl (Part 5A, Q28 uses t-Bu last; its position is already flagged there).")
    return []
