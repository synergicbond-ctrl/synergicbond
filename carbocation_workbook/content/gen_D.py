from .common import *

TS = "[O:6][S:7](=[O:8])(=[O:9])" + Ph(10, para="[CH3:16]")


def build(B):
    B.h2("2.D  Solvolysis and S<sub>N</sub>1 substitution")
    B.p("In solvolysis the solvent is both the ionising medium and the nucleophile. The kinetics are first order in substrate (rate = k[RX], independent of added nucleophile), "
        "and the stereochemical and product evidence is the fingerprint of a cationic intermediate: partial racemisation, rearranged skeletons, mixtures of S<sub>N</sub>1 and E1 products, "
        "common-ion rate depression and σ<sup>+</sup> correlations. A rate law alone cannot prove a <i>free</i> cation: ion pairs and neighbouring groups often intervene, so the rate and the product-forming steps must be distinguished.")
    c = []
    c.append(ex("2.D1", "tert-Butyl bromide in water: the full S<sub>N</sub>1 sequence",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[Br:5]",
        [St(A(('b', 2, 5), ('lp', 5), -0.5), "slow (rds)", drop=[5]),
         St(A(('lp', 92), ('nb', 92, 2), 0.4), "fast", add="[H:93][OH:92]"),
         St([A(('lp', 94), ('nb', 94, 93), 0.4), A(('b', 93, 92), ('lp', 92), -0.4)], "fast", add="[OH2:94]", drop=[94], expect="CC(C)(C)O")],
        "CC(C)(C)O",
        "Rate = k[t-BuBr]. The cation is captured by the solvent (rate of capture ≫ rate of formation, so capture is not kinetically visible) and a second water removes H<sup>+</sup>. Competing E1 gives 2-methylpropene (≈ 10 % in water, more in ethanol or at higher temperature)."))
    # D2 stereochemistry: ion-pair partial racemisation
    sS = chem.stereo("[CH3:1][CH:2]([Cl:3])" + Ph(4), {2: 'S'})
    f1 = Frag(sS, label="(S)-1-phenylethyl chloride")
    f2 = Frag("[CH3:1][CH+:2]" + Ph(4) + ".[Cl-:3]", coords_from=f1, label="contact ion pair")
    pr = chem.stereo("[CH3:1][CH:2]([OH2+:92])" + Ph(4), {2: 'R'})
    ps = chem.stereo("[CH3:1][CH:2]([OH2+:92])" + Ph(4), {2: 'S'})
    f3 = Frag(pr, label="(R)  inversion, major")
    f4 = Frag(ps, label="(S)  retention, minor")
    svg, w, h = scheme([f1, Arrow('eq', 'ionise'), f2, Arrow('rxn', 'H_2O'), f3, Br(), Gap(30), Txt(""), Arrow('rxn', 'H_2O (frontside)'), f4], width=680)
    c.append(cell("2.D2", "Stereochemistry: (S)-1-phenylethyl chloride in aqueous acetone", dict(svg=svg, w=w, h=h),
        "The planar cation can be attacked from either face, so racemisation is expected; observation gives <i>partial</i> racemisation with net inversion. The leaving chloride, still sitting on the front face in the contact ion pair, shields that face; the solvent attacks preferentially from the back. Free (solvent-separated) cations would give 50:50. The ratio is an experimental number, not a prediction.", span=2))
    # D3 SN1 vs E1 competition (two branches)
    m1 = mech("2.D3a", "[CH3:1][C:2]([CH3:3])([CH2:4][CH3:5])[Br:6]",
        [St(A(('b', 2, 6), ('lp', 6), -0.5), "slow", drop=[6]),
         St(A(('lp', 92), ('nb', 92, 2), 0.4), "EtOH (S_N1)", add="[H:93][O:92][CH2:94][CH3:95]"),
         St([A(('lp', 96), ('nb', 96, 93), 0.4), A(('b', 93, 92), ('lp', 92), -0.4)], "EtOH", add="[OH:96][CH2:97][CH3:98]", drop=[96, 97, 98], expect="CCOC(C)(C)CC")], "CCOC(C)(C)CC", width=680)
    m2 = mech("2.D3b", "[CH3:1][C:2]([CH3:3])([CH:4]([H:7])[CH3:5])[Br:6]",
        [St(A(('b', 2, 6), ('lp', 6), -0.5), "slow", drop=[6]),
         St([A(('lp', 92), ('nb', 92, 7), 0.4), A(('b', 4, 7), ('nb', 4, 2), 0.5)], "EtOH (E1)", add="[OH:92][CH2:94][CH3:95]", drop=[92, 94, 95], expect="CC=C(C)C")], "CC=C(C)C", width=680)
    c.append(cell("2.D3", "2-Bromo-2-methylbutane in ethanol: S<sub>N</sub>1 and E1 from the same cation", vstack([m1, m2]),
        "One cation, two destinations: nucleophilic capture at carbon (ether) or loss of a β-hydrogen (alkene). Higher temperature favours E1 (greater entropy gain). The more substituted alkene (2-methylbut-2-ene) dominates; the C–H bond that is lost must overlap the empty p orbital.", span=2))
    c.append(ex("2.D4", "Neopentyl tosylate in formic acid (formolysis): S<sub>N</sub>1 with rearrangement",
        "[CH3:1][C:2]([CH3:3])([CH3:4])[CH2:5]" + TS,
        [St([A(('b', 5, 6), ('lp', 6), -0.5), A(('b', 2, 3), ('nb', 3, 5), 0.6)], "ionisation + CH_3 shift", expect="CC[C+](C)C.[O-]S(=O)(=O)c1ccc(C)cc1"),
         St(A(('lp', 94), ('nb', 94, 2), 0.4), "HCO_2H", add="[OH:92][CH:93]=[O:94]", drop=[6])],
        None,
        "The only substitution product is tert-amyl formate (2-methylbut-2-yl formate); no neopentyl formate. A neopentyl system cannot do S<sub>N</sub>2, so the ionising solvent pushes it through the σ-assisted pathway. The mixture also gives 2-methylbut-2-ene (E1)."))
    c.append(ex("2.D5", "4-Methoxybenzyl chloride in water: why +M groups accelerate S<sub>N</sub>1",
        "[Cl:1][CH2:2]" + Ph(3, para="[O:9][CH3:10]"),
        [St(A(('b', 2, 1), ('lp', 1), -0.5), "ionise", drop=[1]),
         St(A(('b', 3, 4), ('nb', 3, 2), 0.5), "", kind="res"),
         St(A(('b', 5, 6), ('nb', 5, 4), 0.5), "", kind="res"),
         St(A(('lp', 9), ('nb', 9, 6), 0.5), "", kind="res", expect="C[O+]=C1C=CC(=C)C=C1")],
        "C[O+]=C1C=CC(=C)C=C1",
        "Ionisation puts + on the benzylic CH<sub>2</sub>; three successive π-shifts carry it to C-4, where the OMe lone pair completes the octet: a p-quinone-methide oxocarbenium ion. The methoxy group lowers the barrier by tens of kJ mol<sup>−1</sup> relative to H (σ<sup>+</sup><sub>p-OMe</sub> = −0.78)."))
    c.append(ex("2.D6", "2-Chloro-2-phenylpropane (cumyl chloride) in 90 % aqueous acetone",
        "[Cl:1][C:2]([CH3:3])([CH3:4])" + Ph(5),
        [St(A(('b', 2, 1), ('lp', 1), -0.5), "slow", drop=[1]),
         St(A(('lp', 92), ('nb', 92, 2), 0.4), "H_2O", add="[OH2:92]")],
        None,
        "The tertiary benzylic cation is the standard system used to define σ<sup>+</sup> substituent constants (Brown–Okamoto, ρ ≈ −4.5): the very large negative ρ shows that substantial positive charge is delocalised into the ring in the transition state."))
    # D7 allylic: two capture products
    fa = Frag("[CH3:1][C+:2]([CH3:3])[CH:4]=[CH2:5].[OH2:92]",
              arrows=[{'from': ('lp', 92), 'to': ('a', 2), 'bend': 0.4}], lps=[(92,)], label="attack at C-2 (tertiary)")
    fb = Frag("[CH3:1][C:2]([CH3:3])=[CH:4][CH2+:5].[OH2:92]",
              arrows=[{'from': ('lp', 92), 'to': ('a', 5), 'bend': 0.4}], lps=[(92,)], label="attack at C-4 (primary)")
    pa = Frag("[CH3:1][C:2]([CH3:3])([OH2+:92])[CH:4]=[CH2:5]", label="2-methylbut-3-en-2-ol (α)")
    pb = Frag("[CH3:1][C:2]([CH3:3])=[CH:4][CH2:5][OH2+:92]", label="prenol (γ)")
    svg, w, h = scheme([fa, Arrow('rxn', 'then −H^+'), pa, Br(), fb, Arrow('rxn', 'then −H^+'), pb], width=680)
    c.append(cell("2.D7", "Prenyl chloride in water: S<sub>N</sub>1 and S<sub>N</sub>1′ products from one allyl cation", dict(svg=svg, w=w, h=h),
        "The delocalised cation is attacked at either terminus, and both isomeric chlorides give the same two alcohols. Under kinetic control the tertiary alcohol is the major product (most of the positive charge resides on the tertiary carbon); prenol, which has the more substituted alkene, accumulates only if the tertiary alcohol can re-ionise (acidic, longer reaction times) – kinetic versus thermodynamic control (Part 9).", span=2))
    c.append(ex("2.D8", "2-Chlorotetrahydropyran: α-oxygen stabilisation",
        "[Cl:1][CH:2]1[CH2:3][CH2:4][CH2:5][CH2:6][O:7]1",
        [St([A(('lp', 7), ('nb', 7, 2), 0.5), A(('b', 2, 1), ('lp', 1), -0.5)], "−Cl^−", drop=[1], expect="C1CCC[O+]=C1"),
         St([A(('lp', 92), ('nb', 92, 2), 0.4), A(('b', 2, 7), ('lp', 7), -0.4)], "H_2O", add="[OH2:92]", expect="[OH2+]C1CCCCO1")],
        None,
        "Glycosyl-type α-halo ethers ionise with ring-oxygen assistance (the axial lone pair overlaps σ*<sub>C–Cl</sub>, the anomeric effect in action). The cyclic oxocarbenium ion is attacked from either face: this is the basis of glycoside synthesis (Koenigs–Knorr, with Ag<sup>+</sup> activation)."))
    B.grid(c, 2)
