from .common import *

NOp = "[N:20]#[O+:21]"          # nitrosonium
H3 = "[H:90][OH2+:91]"


def build(B):
    # ------------------------------------------------------------------ amines + HNO2
    B.h2("2.F  Carbocations from amines: diazotisation with nitrous acid")
    B.p("Nitrous acid (from NaNO<sub>2</sub> + HX, never stored) is the reagent that turns a <b>primary</b> amino group (–NH<sub>2</sub>), the worst of leaving groups, into the best known one (N<sub>2</sub>). "
        "The active electrophile in dilute mineral acid is the <b>nitrosonium ion NO<sup>+</sup></b>. What happens next depends on the type of amine:")
    B.table(["Amine", "NaNO<sub>2</sub> / HCl, 0–5 °C", "Carbocation?"],
        [["Primary aliphatic RCH<sub>2</sub>NH<sub>2</sub>, R<sub>3</sub>CNH<sub>2</sub>", "R–N<sub>2</sub><sup>+</sup> (not isolable) → loses N<sub>2</sub> at once", "<b>Yes</b> (or a concerted shift/substitution with N<sub>2</sub> loss); mixture of alcohols, alkenes, halides; rearranged products common"],
         ["Primary aromatic ArNH<sub>2</sub>", "Ar–N<sub>2</sub><sup>+</sup> X<sup>−</sup>: stable in cold solution (resonance with the ring)", "<b>No</b> at 0–5 °C. On warming in water the diazonium ion loses N<sub>2</sub> to give the aryl cation (phenol)"],
         ["Primary benzylic ArCH<sub>2</sub>NH<sub>2</sub>", "ArCH<sub>2</sub>N<sub>2</sub><sup>+</sup> (not stable)", "<b>Yes</b>: benzylic cation ArCH<sub>2</sub><sup>+</sup>"],
         ["Secondary R<sub>2</sub>NH (and ArNHR)", "N-nitrosamine R<sub>2</sub>N–N=O (yellow oil)", "<b>No</b> (no N–H left to lose from N after nitrosation; the N–N bond is not an N<sub>2</sub>-releasing diazonium)"],
         ["Tertiary R<sub>3</sub>N", "R<sub>3</sub>NH<sup>+</sup> NO<sub>2</sub><sup>−</sup> (salt); no stable product", "<b>No</b> (tertiary aryl amines such as PhNMe<sub>2</sub> undergo C-nitrosation at the para carbon)"]])
    c = []
    c.append(ex("2.F1", "Nitrosonium ion from nitrous acid",
        "[OH:1][N:2]=[O:3]",
        [St(A(('lp', 1), ('nb', 1, 90), 0.5), "H^+", add=HP),
         St([A(('b', 2, 1), ('lp', 1), -0.5), A(('lp', 3), ('nb', 3, 2), 0.5)], "−H_2O", drop=[1], expect="N#[O+]")],
        "N#[O+]",
        "Protonation of the hydroxyl oxygen turns it into water; the oxygen lone pair of the N=O then forms a third N–O bond as water leaves, giving N≡O<sup>+</sup> (isoelectronic with CO and N<sub>2</sub>). NO<sup>+</sup> is the electrophile that attacks amines (N-nitrosation)."))
    # t-BuNH2 -> t-Bu+  (full)
    d = mech("2.F2", "[CH3:1][C:2]([CH3:3])([CH3:4])[NH:5][H:30]",
        [St([A(('lp', 5), ('nb', 5, 20), 0.5), A(('b', 20, 21), ('lp', 21), 0.5)], "NO^+", add="[N:20]#[O+:21]", expect="CC(C)(C)[NH2+]N=O")],
        "CC(C)(C)[NH2+]N=O", width=680)
    c.append(cell("2.F2", "tert-Butylamine + NO<sup>+</sup>: N-nitrosation (first step)", d,
        "The amine nitrogen lone pair attacks nitrogen of NO<sup>+</sup>; one N≡O π bond moves onto oxygen. The N-nitrosoammonium ion then loses H<sup>+</sup> and tautomerises, as drawn in 2.F3."))
    # tautomerisation to diazohydroxide, protonation, loss of water, loss of N2 : each validated separately
    d3 = mech("2.F3", "[CH3:1][C:2]([CH3:3])([CH3:4])[N:5]([H:30])[N:20]=[O:21]",
        [St([A(('lp', 92), ('nb', 92, 30), 0.5), A(('b', 5, 30), ('nb', 5, 20), -0.5), A(('b', 20, 21), ('lp', 21), 0.5)], "−H^+", add="[OH2:92]", expect="CC(C)(C)N=N[O-].[OH3+]"),
         St([A(('lp', 21), ('nb', 21, 30), 0.5), A(('b', 30, 92), ('lp', 92), -0.5)], "+H^+", expect="CC(C)(C)N=NO", drop=[92]),
         St(A(('lp', 21), ('nb', 21, 90), 0.5), "H^+", add=HP, expect="CC(C)(C)N=N[OH2+]"),
         St([A(('lp', 5), ('nb', 5, 20), 0.5), A(('b', 20, 21), ('lp', 21), -0.5)], "−H_2O", drop=[21], expect="CC(C)(C)[N+]#N"),
         St(A(('b', 2, 5), ('lp', 5), -0.5), "−N_2", drop=[5, 20], expect="C[C+](C)C")],
        "C[C+](C)C", width=680)
    c.append(cell("2.F3", "…from N-nitroso-tert-butylammonium to the cation (R–NH–N=O → R–N=N–OH → R–N<sub>2</sub><sup>+</sup> → R<sup>+</sup>)", d3,
        "Loss of N–H proton and shift of the π bond gives the diazotate; protonation on oxygen (diazohydroxide R–N=N–OH), then a second protonation and loss of water gives the alkyldiazonium ion R–N≡N<sup>+</sup>; its C–N σ pair leaves with N<sub>2</sub>. "
        "For a tertiary alkyl group the product is the tert-butyl cation (captured by water or losing H<sup>+</sup>). With a primary alkyl group the same sequence is followed by a concerted shift (2.E1).", span=2))
    c.append(ex("2.F4", "Benzylamine + HNO<sub>2</sub>: benzylic cation",
        "[N:6]#[N+:5][CH2:4]" + Ph(7),
        [St(A(('b', 4, 5), ('lp', 5), -0.5), "−N_2", drop=[5, 6])],
        None,
        "Benzyldiazonium ions lose N<sub>2</sub> at once, even at 0 °C, because the benzylic cation is resonance-stabilised. The cation is captured by water (benzyl alcohol); compare ArN<sub>2</sub><sup>+</sup>, where the diazonium group is attached to an sp<sup>2</sup> carbon and is stable in the cold."))
    c.append(ex("2.F5", "Secondary amine + NO<sup>+</sup>: N-nitrosamine (no carbocation)",
        "[CH3:1][NH:2][CH3:3]",
        [St([A(('lp', 2), ('nb', 2, 20), 0.5), A(('b', 20, 21), ('lp', 21), 0.5)], "NO^+", add="[N:20]#[O+:21]", expect="C[NH+](C)N=O")],
        "C[NH+](C)N=O",
        "The nitrosoammonium ion can only lose its N–H proton to give R<sub>2</sub>N–N=O; there is no hydrogen to move to oxygen to form a diazonium, so the sequence stops at the nitrosamine (a carcinogen class). No carbocation forms."))
    # Tiffeneau-Demjanov
    c.append(ex("2.F6", "Tiffeneau–Demjanov: 1-(aminomethyl)cyclohexanol + HNO<sub>2</sub> (diazonium, then ring expansion)",
        "[OH:1][C:2]1([CH2:3][N+:4]#[N:5])[CH2:6][CH2:7][CH2:8][CH2:9][CH2:10]1",
        [St([A(('b', 2, 6), ('nb', 6, 3), 0.6), A(('b', 3, 4), ('lp', 4), -0.5)], "−N_2 (ring expansion)", drop=[4, 5], expect="O[C+]1CCCCCC1"),
         St(A(('lp', 1), ('nb', 1, 2), 0.5), "", kind="res", expect="[OH+]=C1CCCCCC1")],
        None,
        "The ring C–C bond anti to the departing N<sub>2</sub> migrates to the CH<sub>2</sub> as N<sub>2</sub> leaves, so the six-membered ring becomes seven-membered; the cation produced is the protonated ketone (oxygen lone pair donates), which loses H<sup>+</sup> to give cycloheptanone. A free primary cation is never formed."))
    B.grid(c, 2)
    # ------------------------------------------------------------------ aromatic compounds
    B.h2("2.G  Carbocations from aromatic compounds: arenium (σ-complex, Wheland) ions")
    B.p("An aromatic ring is a poor nucleophile because attack on an electrophile E<sup>+</sup> destroys aromaticity. The product is a <b>cyclohexadienyl (arenium) cation</b>: one sp<sup>3</sup> carbon carrying E and H, and the other five carbons conjugated over <b>three contributors</b> with the charge at the two <i>ortho</i> and the <i>para</i> positions relative to the sp<sup>3</sup> carbon (never the meta carbons). "
        "Loss of H<sup>+</sup> from the sp<sup>3</sup> carbon restores the aromatic ring (substitution). Formation of the arenium ion is the slow step in every electrophilic aromatic substitution.")
    g = []
    g.append(ex("2.G1", "Nitration: benzene + NO<sub>2</sub><sup>+</sup> (HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub>)",
        "[CH:1]1=[CH:2][CH:3]=[CH:4][CH:5]=[CH:6]1",
        [St([A(('b', 1, 2), ('nb', 1, 20), 0.5), A(('b', 20, 21), ('lp', 21), 0.5)], "NO_2^+", add="[O:22]=[N+:20]=[O:21]", expect="O=[N+]([O-])C1C=CC=C[CH+]1")],
        None,
        "The nitronium ion (O=N<sup>+</sup>=O, linear) is generated by H<sub>2</sub>SO<sub>4</sub> protonating HNO<sub>3</sub> (HNO<sub>3</sub> + 2 H<sub>2</sub>SO<sub>4</sub> → NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2 HSO<sub>4</sub><sup>−</sup>). Its attack on benzene gives the nitro-substituted arenium ion; HSO<sub>4</sub><sup>−</sup> removes the ring proton."))
    g.append(ex("2.G2", "Bromination: benzene + Br<sub>2</sub>/FeBr<sub>3</sub>",
        "[CH:1]1=[CH:2][CH:3]=[CH:4][CH:5]=[CH:6]1",
        [St([A(('b', 1, 2), ('nb', 1, 20), 0.5), A(('b', 20, 21), ('lp', 21), 0.5)], "Br_2·FeBr_3", add="[Br:20][Br+:21][Fe-:22]([Br:23])([Br:24])[Br:25]", expect=None)],
        None,
        "FeBr<sub>3</sub> polarises Br–Br (Br<sup>δ+</sup>···Br–FeBr<sub>3</sub><sup>δ−</sup>); the π electrons attack the electrophilic bromine and displace [FeBr<sub>4</sub>]<sup>−</sup>. The same arenium ion forms regardless of which Br leaves with the Lewis acid."))
    g.append(ex("2.G3", "Friedel–Crafts alkylation: benzene + t-Bu<sup>+</sup> (t-BuCl/AlCl<sub>3</sub>)",
        "[CH:1]1=[CH:2][CH:3]=[CH:4][CH:5]=[CH:6]1",
        [St(A(('b', 1, 2), ('nb', 1, 20), 0.5), "", add="[CH3:21][C+:20]([CH3:22])[CH3:23]", expect="CC(C)(C)C1C=CC=C[CH+]1")],
        "CC(C)(C)C1C=CC=C[CH+]1",
        "A carbocation (from R–Cl + AlCl<sub>3</sub>, from an alkene + H<sup>+</sup>, or from an alcohol + acid) is attacked by the arene. Cations that can rearrange (n-propyl, n-butyl, neopentyl…) give rearranged alkylbenzenes: cumene, not n-propylbenzene, from n-PrCl/AlCl<sub>3</sub>. The product ring is more reactive than benzene, so polyalkylation is a problem."))
    g.append(ex("2.G4", "Friedel–Crafts acylation: benzene + CH<sub>3</sub>CO<sup>+</sup> (acylium ion)",
        "[CH:1]1=[CH:2][CH:3]=[CH:4][CH:5]=[CH:6]1",
        [St([A(('b', 1, 2), ('nb', 1, 20), 0.5), A(('b', 20, 22), ('lp', 22), 0.5)], "", add="[CH3:21][C:20]#[O+:22]", expect=None)],
        None,
        "The acylium ion adds to the ring through its electrophilic carbon (one C≡O π bond becomes the C=O of the ketone). The acyl group deactivates the ring, so one substitution only, and acylium ions do not rearrange."))
    g.append(ex("2.G5", "Sulfonation: benzene + SO<sub>3</sub> (oleum)",
        "[CH:1]1=[CH:2][CH:3]=[CH:4][CH:5]=[CH:6]1",
        [St([A(('b', 1, 2), ('nb', 1, 20), 0.5), A(('b', 20, 21), ('lp', 21), 0.5)], "SO_3", add="[S:20](=[O:21])(=[O:22])=[O:23]", expect=None)],
        None,
        "SO<sub>3</sub> (a neutral, very electrophilic sulfur) is attacked by the π bond; the S=O π electrons move onto oxygen, giving a zwitterionic arenium ion. Sulfonation is reversible (dilute hot acid removes SO<sub>3</sub>H), unlike nitration or halogenation."))
    g.append(ex("2.G6", "Protonation of anisole at the para position (ipso to H)",
        "[CH:1]1=[CH:2][CH:3]=[C:4]([O:8][CH3:9])[CH:5]=[CH:6]1",
        [St(A(('b', 1, 2), ('nb', 1, 90), 0.5), "H^+", add=HP, expect=None),
         St(A(('b', 3, 4), ('nb', 3, 2), 0.5), "", kind="res", expect=None),
         St(A(('lp', 8), ('nb', 8, 4), 0.5), "", kind="res", expect="C[O+]=C1C=CC=C[CH2]1".replace("C=C[CH2]1","C=CC1").replace("C[O+]=C1C=CC=CC1","C[O+]=C1C=CCC=C1"))],
        None,
        "Protonating C-1 (para to OMe) puts positive charge at the ortho and para carbons, and one contributor places it on C-4, which carries OMe: the oxygen lone pair then delocalises it (an oxocarbenium contributor). Protonation meta to OMe lacks this contributor, so ortho/para attack is faster – the origin of ortho/para direction by +M groups."))
    g.append(ex("2.G7", "Hydride abstraction from an alkylarene: diphenylmethane + Ph<sub>3</sub>C<sup>+</sup>",
        "[CH:1]([H:20])(" + Ph(2) + ")" + Ph(8),
        [St(A(('b', 1, 20), ('nb', 20, 30), 0.5), "", add="[C+:30](" + Ph(31) + ")(" + Ph(37) + ")" + Ph(43), expect=None)],
        None,
        "Aryl groups on a C–H carbon make it a hydride donor: loss of H<sup>−</sup> leaves the diarylmethyl (benzhydryl) cation, stabilised by two rings. Ph<sub>3</sub>C<sup>+</sup> is a hydride acceptor only for strongly donating hydrocarbons (cycloheptatriene, 2.E5); with Ph<sub>2</sub>CH<sub>2</sub> the equilibrium lies far on the left (pK<sub>R+</sub> −6.6 versus −13.3)."))
    B.grid(g, 2)
