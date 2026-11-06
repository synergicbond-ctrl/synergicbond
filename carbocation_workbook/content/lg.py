from .common import *


_tb = "CC(C)(C)[CH:1]1[CH2:2][CH2:3][CH:4](Br)[CH2:5][CH2:6]1"
CIS_TB = chem.pick_rel(_tb.replace("(Br)", "([Br:7])"), [1, 2, 3, 4, 5, 6], [(1, 8), (4, 7)], cis=True) if False else None
_tbm = "[CH3:20][C:21]([CH3:22])([CH3:23])[CH:1]1[CH2:2][CH2:3][CH:4]([Br:7])[CH2:5][CH2:6]1"
_cis_s = chem.pick_rel(_tbm, [1, 2, 3, 4, 5, 6], [(1, 21), (4, 7)], cis=True)
_trans_s = chem.pick_rel(_tbm, [1, 2, 3, 4, 5, 6], [(1, 21), (4, 7)], cis=False)
CIS_TB = Frag(_cis_s, wedges=[(1, 21, "w"), (4, 7, "w")])
_w = chem.ring_wedges(_trans_s, [1, 2, 3, 4, 5, 6], [(1, 21), (4, 7)])
TRANS_TB = Frag(_trans_s, wedges=_w)


def S(pairs, width=337):
    """Row of labelled structures from (label, smiles-or-Frag) pairs; widens to full width if it wraps."""
    def mk(w):
        items = []
        for l, s in pairs:
            f = s if isinstance(s, Frag) else Frag(s, label=l)
            if isinstance(s, Frag):
                f.label = l
                f.w = max(f.w, tw(l, 12, True) + 8) if l else f.w
            items += [f, Gap(8)]
        return scheme(items[:-1], width=w, gap=0)
    svg, w, h = mk(width)
    from engine import draw as _d
    span = 1
    if _d.LAST_ROWS > 1:
        svg, w, h = mk(680)
        span = 2
    return dict(svg=svg, w=w, h=h, span=span)


def build(B):
    qs = []
    B.part("Part 3", "Leaving-Group Ability")
    B.h2("3.1  What a leaving group is, and what ‘good’ means")
    B.p("A <b>leaving group</b> (nucleofuge) is the fragment that departs with the bonding electron pair in a heterolytic substitution or elimination: R–LG → R<sup>+</sup> + LG<sup>−</sup> (or neutral LG from a cationic substrate). "
        "‘Good’ is a statement about a <i>rate</i> (kinetic, a lowered barrier for the C–LG cleavage step) that correlates with – but is not identical to – the <i>thermodynamic</i> stability of the departed LG, i.e. the acidity of its conjugate acid H–LG. "
        "The correlation exists because in the transition state the LG carries a partial negative charge; the better it can stabilise that charge, the lower the barrier (Brønsted-type relationship, typically β<sub>lg</sub> between −0.3 and −1.0 for substitution).")
    B.table(["Leaving group (LG)", "Conjugate acid", "pK<sub>a</sub> (aq., approx.)", "Remarks"],
        [["I<sup>−</sup>, Br<sup>−</sup>, Cl<sup>−</sup>", "HI, HBr, HCl", "−10, −9, −7", "large, polarisable; weak C–X bonds (I &lt; Br &lt; Cl)"],
         ["F<sup>−</sup>", "HF", "3.2", "very poor in S<sub>N</sub>1/S<sub>N</sub>2 (strong C–F bond); good in SNAr (see Q5)"],
         ["CF<sub>3</sub>SO<sub>3</sub><sup>−</sup> (triflate)", "CF<sub>3</sub>SO<sub>3</sub>H", "≈ −14", "charge delocalised over 3 O, CF<sub>3</sub> −I effect; a ‘super’ LG"],
         ["p-O<sub>2</sub>NC<sub>6</sub>H<sub>4</sub>SO<sub>3</sub><sup>−</sup> (nosylate)", "ArSO<sub>3</sub>H", "≈ −6.5 (est.)", "EWG on the aryl ring improves LG"],
         ["p-CH<sub>3</sub>C<sub>6</sub>H<sub>4</sub>SO<sub>3</sub><sup>−</sup> (tosylate)", "TsOH", "≈ −2.8", "standard crystalline sulfonate"],
         ["CH<sub>3</sub>SO<sub>3</sub><sup>−</sup> (mesylate)", "MsOH", "≈ −1.9", "similar to tosylate in rate"],
         ["H<sub>2</sub>O (from ROH<sub>2</sub><sup>+</sup>)", "H<sub>3</sub>O<sup>+</sup>", "−1.7", "neutral LG; HO<sup>−</sup> of ROH is not a leaving group"],
         ["CF<sub>3</sub>CO<sub>2</sub><sup>−</sup>, CH<sub>3</sub>CO<sub>2</sub><sup>−</sup>", "CF<sub>3</sub>CO<sub>2</sub>H, AcOH", "0.5, 4.76", "carboxylates: moderate; acetates ionise only for cations of tertiary/benzylic stability"],
         ["N<sub>2</sub> (from RN<sub>2</sub><sup>+</sup>)", "—", "—", "best known LG: very stable neutral molecule, huge entropy gain"],
         ["NH<sub>3</sub> (from RNH<sub>3</sub><sup>+</sup>)", "NH<sub>4</sub><sup>+</sup>", "9.25", "poor: Hofmann elimination needs heat; NH<sub>2</sub><sup>−</sup> (pK<sub>a</sub> 38) never leaves"],
         ["HO<sup>−</sup>, RO<sup>−</sup>, H<sup>−</sup>, R<sup>−</sup>", "H<sub>2</sub>O, ROH, H<sub>2</sub>, RH", "15.7, 16–19, 35, ≈ 50", "do not leave in S<sub>N</sub>/E1 unless activated (E1cB, intramolecular, ring strain)"]])
    B.h2("3.2  Factors that determine leaving ability")
    B.ul([
        "<b>Basicity / conjugate-acid strength.</b> Weaker bases are better leaving groups: the LG<sup>−</sup> is more stable. Within a period this is the dominant trend (I<sup>−</sup> ≫ F<sup>−</sup> in protic solvent; TfO<sup>−</sup> ≫ AcO<sup>−</sup> ≫ HO<sup>−</sup>).",
        "<b>Bond strength and polarisability.</b> Down a group the C–X bond weakens (C–F ≈ 110, C–Cl ≈ 84, C–Br ≈ 70, C–I ≈ 57 kcal mol<sup>−1</sup>) and the large, soft anion is stabilised by polarisation of the TS; the pK<sub>a</sub> trend (HF 3.2 → HI −10) reinforces this. In the gas phase F<sup>−</sup> is a worse LG than I<sup>−</sup> for the same reason.",
        "<b>Resonance and charge delocalisation.</b> Sulfonates (charge over 3 O), carboxylates (2 O), triflate (3 O + CF<sub>3</sub>) are good LGs because the charge is spread; alkoxides and amides are not.",
        "<b>Induction.</b> EWGs on the LG (CF<sub>3</sub>, NO<sub>2</sub>, halogens on an aryl ring) stabilise the anion: TfO<sup>−</sup> ≫ MsO<sup>−</sup>; p-O<sub>2</sub>N–C<sub>6</sub>H<sub>4</sub>SO<sub>3</sub><sup>−</sup> &gt; TsO<sup>−</sup>.",
        "<b>Solvation.</b> Protic solvents hydrogen-bond to small, charge-dense anions (F<sup>−</sup>, Cl<sup>−</sup>, RO<sup>−</sup>), stabilising them in the TS and promoting ionisation; the effect on the <i>ordering</i> of halides is small for S<sub>N</sub>1 but large for nucleophiles in S<sub>N</sub>2. Aprotic dipolar solvents (DMSO, DMF) favour S<sub>N</sub>2 by leaving anions bare.",
        "<b>Neutral versus charged substrates.</b> Protonation, alkylation or diazotisation converts a bad LG (HO<sup>−</sup>, NH<sub>2</sub><sup>−</sup>) into a good neutral one (H<sub>2</sub>O, NH<sub>3</sub>, N<sub>2</sub>) – the underlying reason for acid catalysis and for conversion of alcohols to sulfonates.",
        "<b>Neighbouring-group assistance.</b> A lone pair or π/σ bond anti-periplanar to the C–LG bond can displace the LG intramolecularly (anchimeric assistance; sulfur &gt; nitrogen-free base &gt; bromine &gt; oxygen in typical hydrolyses): the C–LG bond breaks faster than the intrinsic LG ability would suggest.",
        "<b>Stereoelectronic and steric factors.</b> An axial LG on a cyclohexane ring is anti-periplanar to ring C–C/C–H bonds and relieves 1,3-diaxial strain on ionisation; an anti-periplanar C–Si bond (β-silicon effect) accelerates departure by orders of magnitude; large groups on the substrate relieve strain (B-strain) on ionisation.",
        "<b>Ion-pair behaviour.</b> The LG may remain close to the cation (internal return). Poor ion-pair return from large, delocalised LGs (OTs, OTf) increases the net rate relative to Cl<sup>−</sup>."])
    B.h2("3.3  Why there is no single universal order")
    B.warn("<b>The order I<sup>−</sup> &gt; Br<sup>−</sup> &gt; Cl<sup>−</sup> ≫ F<sup>−</sup> holds for S<sub>N</sub>1, S<sub>N</sub>2 and E2 at sp<sup>3</sup> carbon, but is <u>reversed (F ≫ Cl ≈ Br &gt; I)</u> in nucleophilic aromatic substitution</b>, "
           "where C–LG cleavage is <i>not</i> rate-limiting: the first step (attack of the nucleophile to give the Meisenheimer complex) is slower, and the very electronegative fluorine stabilises that TS by induction. "
           "Likewise in acyl substitution the order of acyl derivatives (RCOCl &gt; (RCO)<sub>2</sub>O &gt; RCO<sub>2</sub>R′ &gt; RCONR<sub>2</sub>) reflects both LG ability <i>and</i> how strongly the LG donates into C=O. "
           "In E2 the LG changes the <i>regiochemistry</i>: poorer LGs (F<sup>−</sup>, NR<sub>3</sub>) make the TS carbanion-like and favour the Hofmann (less substituted) alkene. And in transition-metal oxidative addition the order is Ar–I &gt; Ar–Br ≈ Ar–OTf &gt; Ar–Cl, controlled by bond strength and metal–LG interaction, not by pK<sub>a</sub>.")
    B.p("The following comparisons are made at stated conditions. A leaving-group ranking is meaningful only for a <b>fixed substrate, mechanism, solvent and temperature</b>.")
    B.table(["Process", "Rate-limiting step", "Leaving-group dependence"],
        [["S<sub>N</sub>1 / E1", "C–LG heterolysis", "Strong (β<sub>lg</sub> ≈ −0.5 to −1); solvent H-bond donation important"],
         ["S<sub>N</sub>2", "concerted attack + C–LG cleavage", "Moderate (β<sub>lg</sub> ≈ −0.3 to −0.6); solvent-nucleophile interactions also matter"],
         ["E2", "concerted; anti-periplanar H–C–C–LG", "Moderate; also changes Zaitsev/Hofmann ratio and TS looseness"],
         ["E1cB", "carbanion formation or LG expulsion", "LG may be as poor as HO<sup>−</sup> or RO<sup>−</sup> if carbanion is stabilised (enolate)"],
         ["SNAr", "nucleophilic addition", "Weak, ‘element effect’ F ≫ Cl ≈ Br &gt; I"],
         ["Acyl substitution", "addition or collapse of tetrahedral intermediate", "Strong, but coupled with resonance donation"]])
    B.h2("3.4  Fifteen leaving-group comparison problems")
    B.p("Rank <b>A–D</b> as instructed. Every statement of order refers to the stated conditions only. Rate orders are established qualitative trends in the literature; no numerical ratios are claimed unless stated.")
    # ---------------------------------------------------------------- questions
    qs.append(Q("LG1", "Arrange A–D in <b>decreasing</b> first-order solvolysis rate in 80 % aq. ethanol at 25 °C (same alkyl group; the only variable is the halogen).",
        S([("A", "CC(C)(C)F"), ("B", "CC(C)(C)Cl"), ("C", "CC(C)(C)Br"), ("D", "CC(C)(C)I")]),
        "D &gt; C &gt; B &gt; A",
        "Rate-limiting heterolysis of C–X. Bond strength (C–I 57 ≪ C–F 110 kcal mol<sup>−1</sup>), polarisability and conjugate-acid strength (HI −10, HBr −9, HCl −7, HF +3.2) all point the same way. "
        "Solvation of F<sup>−</sup> by hydrogen bonding is the strongest of the four but cannot make up for the C–F bond: t-BuF is usually considered inert to neutral solvolysis. The three heavier halides differ only by modest factors (a few-fold between I and Br; tens between Br and Cl) because the TS is highly ionic and the solvent levels the differences."))
    qs.append(Q("LG2", "R = 2-butyl in all four. Arrange the derivatives in <b>decreasing</b> rate of ionisation in warm (50 °C) neutral ethanol (no acid added).",
        S([("A", "CCC(C)OS(=O)(=O)C(F)(F)F"), ("B", "CCC(C)OS(=O)(=O)C1=CC=C(C)C=C1"), ("C", "CCC(C)OC(C)=O"), ("D", "CCC(C)O")]),
        "A &gt; B &gt; C &gt; D",
        "Leaving-group quality follows conjugate-acid strength: CF<sub>3</sub>SO<sub>3</sub>H (≈ −14) ≫ TsOH (≈ −2.8) ≫ CH<sub>3</sub>CO<sub>2</sub>H (4.76) ≫ H<sub>2</sub>O (15.7). Triflates ionise ≈ 10<sup>4</sup>–10<sup>8</sup> times faster than tosylates depending on substrate; acetates are practically inert under these conditions, and the alcohol <b>D</b> does not ionise at all (HO<sup>−</sup> is not a leaving group without protonation). "
        "A secondary substrate is chosen so that all three active derivatives react by borderline S<sub>N</sub>1/S<sub>N</sub>2 with solvent assistance; the order is the same for either."))
    sf3 = mech("LG3sol", "[CH3:1][C:2]([CH3:3])([CH3:4])[N+:5]#[N:6]", [St(A(('b', 2, 5), ('lp', 5), -0.5), "", drop=[5, 6], expect="C[C+](C)C")], "C[C+](C)C", width=337)
    qs.append(Q("LG3", "For the tert-butyl derivatives A–D in acidic aqueous solution at 25 °C, arrange in <b>decreasing</b> ease of C–LG heterolysis (LG = the neutral molecule that leaves, or HO<sup>−</sup> for D).",
        S([("A", "CC(C)(C)[N+]#N"), ("B", "CC(C)(C)[OH2+]"), ("C", "CC(C)(C)[NH3+]"), ("D", "CC(C)(C)O")]),
        "A &gt; B &gt; C &gt; D",
        "N<sub>2</sub> is a vastly better leaving group than anything else (a very stable, non-basic molecule; ionisation of an alkyl diazonium is practically barrierless). H<sub>2</sub>O leaves from the protonated alcohol readily at 25 °C in acid (conjugate acid H<sub>3</sub>O<sup>+</sup>, pK<sub>a</sub> −1.7). "
        "NH<sub>3</sub> is a much stronger base (NH<sub>4</sub><sup>+</sup> pK<sub>a</sub> 9.25), so the t-butylammonium ion is stable at room temperature and needs heat or very strong acid to lose NH<sub>3</sub>. Hydroxide in <b>D</b> is the worst: C–OH ionisation does not occur without protonation (D is therefore last, essentially inert).",
        sol_fig=sf3))
    qs.append(Q("LG4", "The four tert-cumyl esters A–D are solvolysed in 70 % aq. acetone at 25 °C. Arrange in <b>decreasing</b> rate of ionisation.",
        S([("A", "CC(C)(C1=CC=CC=C1)OC(C)=O"), ("B", "CC(C)(C1=CC=CC=C1)OC(=O)C1=CC=CC=C1"), ("C", "CC(C)(C1=CC=CC=C1)OC(=O)C(F)(F)F"), ("D", "CC(C)(C1=CC=CC=C1)OC(=O)C1=CC=C(C=C1)[N+](=O)[O-]")]),
        "C &gt; D &gt; B &gt; A",
        "Carboxylate leaving groups follow the pK<sub>a</sub> of the parent acid: CF<sub>3</sub>CO<sub>2</sub>H 0.5 &lt; p-O<sub>2</sub>NC<sub>6</sub>H<sub>4</sub>CO<sub>2</sub>H 3.44 &lt; C<sub>6</sub>H<sub>5</sub>CO<sub>2</sub>H 4.20 &lt; CH<sub>3</sub>CO<sub>2</sub>H 4.76. "
        "The same trend is the basis of the classical use of p-nitrobenzoates as ‘better’ leaving groups than acetates in mechanistic work on tertiary benzylic systems. Resonance donation within the ester (which strengthens the C–O bond) is similar for all four and cancels."))
    sf5 = mech("LG5sol", "[F:1][C:2]1=[C:3]([N+:7](=[O:8])[O-:9])[CH:4]=[C:5]([N+:10](=[O:11])[O-:12])[CH:6]=[CH:13]1",
               [St([A(('lp', 20), ('nb', 20, 2), 0.45), A(('b', 2, 3), ('nb', 3, 7), 0.5), A(('b', 7, 8), ('lp', 8), -0.5)], "slow (rds)", add="[CH3:21][O-:20]")], None, width=680)
    qs.append(Q("LG5", "Arrange the 1-halo-2,4-dinitrobenzenes A–C in <b>decreasing</b> rate of reaction with piperidine (or methoxide) in ethanol at 25 °C.",
        S([("A", "[O-][N+](=O)C1=CC([N+](=O)[O-])=C(F)C=C1"), ("B", "[O-][N+](=O)C1=CC([N+](=O)[O-])=C(Cl)C=C1"), ("C", "[O-][N+](=O)C1=CC([N+](=O)[O-])=C(I)C=C1")]),
        "A &gt; B &gt; C",
        "In SNAr the rate-determining step is <i>addition</i> of the nucleophile to give the anionic Meisenheimer complex; C–X cleavage comes afterwards (fast). Fluorine, the most electronegative halogen, lowers the energy of the first TS by induction and polarises C–X; the C–F bond strength is irrelevant to the rate. "
        "Hence the ‘element effect’ F ≫ Cl ≳ Br &gt; I, the reverse of S<sub>N</sub>2 – a decisive demonstration that leaving-group ability is mechanism-dependent. (Cl and Br are close; iodine is slowest.)",
        sol_fig=sf5))
    qs.append(Q("LG6", "Each 2-pentyl derivative A–D is treated with NaOEt/EtOH (E2). Arrange in <b>decreasing</b> percentage of the <i>less substituted</i> alkene, pent-1-ene (Hofmann product), in the product mixture.",
        S([("A", "CCCC(C)I"), ("B", "CCCC(C)Br"), ("C", "CCCC(C)F"), ("D", "CCCC(C)[N+](C)(C)C")]),
        "D &gt; C &gt; B &gt; A",
        "The poorer the leaving group, the less C–LG bond cleavage has occurred in the E2 transition state; the TS becomes carbanion-like (E1cB-like) and the base removes the more acidic, more accessible hydrogen from the CH<sub>3</sub> group, giving the Hofmann alkene. "
        "Literature trend for 2-pentyl X with ethoxide: I &lt; Br (≈ 30 %) ≲ Cl (≈ 33 %) &lt; F (≈ 70 %) &lt; NMe<sub>3</sub><sup>+</sup> (≈ 95 % 1-pentene); I and Br differ only slightly. Here LG ability controls <i>selectivity</i>, not only rate."))
    qs.append(Q("LG7", "Arrange the solvents A–E in <b>decreasing</b> ionising power for the solvolysis of tert-butyl chloride at 25 °C (Grunwald–Winstein Y scale). Solvents: A H<sub>2</sub>O, B HCO<sub>2</sub>H, C CF<sub>3</sub>CH<sub>2</sub>OH, D CH<sub>3</sub>OH, E CH<sub>3</sub>CH<sub>2</sub>OH.",
        S([("A", "O"), ("B", "O=CO"), ("C", "OCC(F)(F)F"), ("D", "CO"), ("E", "CCO")]),
        "A &gt; B &gt; C &gt; D &gt; E",
        "Y (recalled values): H<sub>2</sub>O 3.49 &gt; HCO<sub>2</sub>H 2.05 &gt; CF<sub>3</sub>CH<sub>2</sub>OH 1.15 &gt; CH<sub>3</sub>OH −1.09 &gt; C<sub>2</sub>H<sub>5</sub>OH −2.03. Ionising power combines hydrogen-bond donation to the departing chloride (high for water, HCO<sub>2</sub>H, fluorinated alcohols) with dielectric screening and low nucleophilicity. "
        "TFE is a poor nucleophile yet an excellent ionising medium, so S<sub>N</sub>1 reactions of secondary substrates are favoured there; a leaving group’s ‘ability’ is therefore also a property of the solvent."))
    qs.append(Q("LG8", "Bromides A–C undergo E2 with NaOEt in EtOH at 50 °C. Arrange in <b>decreasing</b> rate. (A cis-4-tert-butylcyclohexyl bromide; B trans-4-tert-butylcyclohexyl bromide; C bromocyclohexane. The t-Bu group is locked equatorial.)",
        S([("A cis", CIS_TB), ("B trans", TRANS_TB), ("C", "BrC1CCCCC1")]),
        "A &gt; C &gt; B",
        "E2 needs the C–H and C–Br bonds anti-periplanar, which on a chair means <i>both axial</i>. In the cis isomer (A) the Br is axial (the locked t-Bu is equatorial), so reaction is fast. In the trans isomer (B) Br is equatorial, no anti-periplanar H exists, the ring would have to flip into the diaxial-t-Bu chair, and E2 is slow (substitution/E1 intrude). "
        "Bromocyclohexane (C) populates the axial conformer to a modest extent (≈ 30 %), so its rate lies between. The axial/equatorial labels refer to chairs, which these flat drawings cannot show; wedge/dash give the relative (cis/trans) configuration."))
    qs.append(Q("LG9", "Arrange the acetyl derivatives A–D in <b>decreasing</b> rate of nucleophilic acyl substitution by water (neutral, 25 °C).",
        S([("A", "CC(=O)Cl"), ("B", "CC(=O)OC(C)=O"), ("C", "CC(=O)OCC"), ("D", "CC(=O)N")]),
        "A &gt; B &gt; C &gt; D",
        "The rate follows both the leaving-group stability (Cl<sup>−</sup>, pK<sub>a</sub>(HCl) −7; CH<sub>3</sub>CO<sub>2</sub><sup>−</sup> 4.76; EtO<sup>−</sup> 16; NH<sub>2</sub><sup>−</sup> 38) and the ability of the substituent to donate into C=O (N ≫ O &gt; Cl). The tetrahedral intermediate expels the best leaving group; amides, with strong n(N) → π*(C=O) donation and a very poor LG, are the least reactive. "
        "Contrast with S<sub>N</sub>1/S<sub>N</sub>2 at sp<sup>3</sup> carbon, where resonance donation is irrelevant."))
    qs.append(Q("LG10", "Methyl-transfer (S<sub>N</sub>2) from the onium salts A–C to a thiolate in CH<sub>3</sub>CN at 25 °C. Arrange in <b>decreasing</b> reactivity.",
        S([("A", "C[O+](C)C"), ("B", "C[S+](C)C"), ("C", "C[N+](C)(C)C")]),
        "A &gt; B &gt; C",
        "Trimethyloxonium (Meerwein) salts are among the strongest methylating agents; trimethylsulfonium is a weak methylating agent (it needs warming), and tetramethylammonium is inert. "
        "The leaving groups are Me<sub>2</sub>O, Me<sub>2</sub>S and Me<sub>3</sub>N. Basicity (pK<sub>aH</sub> of Me<sub>3</sub>N 9.8 ≫ Me<sub>2</sub>O ≈ −3.8, Me<sub>2</sub>S ≈ −6 to −7) explains why ammonium is last, but <i>not</i> why oxonium beats sulfonium: sulfur is the weaker base. "
        "Here the intrinsic C–X<sup>+</sup> bond strength and the charge density at the cationic centre dominate – a clear failure of a pure pK<sub>a</sub> rule. (Experimental trend: O<sup>+</sup> ≫ S<sup>+</sup> ≫ N<sup>+</sup>.)"))
    qs.append(Q("LG11", "Treat each compound A–D with ethanolic AgNO<sub>3</sub> at 25 °C. Arrange in <b>decreasing</b> rate of AgBr precipitation (no precipitate = last).",
        S([("A", "CC(C)(C)Br"), ("B", "CC(C)Br"), ("C", "CCCCBr"), ("D", "BrC1=CC=CC=C1")]),
        "A &gt; B &gt; C &gt; D",
        "Ag<sup>+</sup> coordinates the halogen lone pair and ‘pulls’ the bromide off (halophilic assistance); the substrate then ionises. The ease of forming the cation is 3° ≫ 2° &gt; 1° (t-Bu<sup>+</sup> ≫ i-Pr<sup>+</sup> ≫ n-Bu<sup>+</sup>); the n-butyl bromide reacts only slowly (a partial S<sub>N</sub>2-like displacement by solvent) and bromobenzene (an sp<sup>2</sup> aryl cation would be needed) gives no precipitate. Same leaving group, different cation – the LG is only as good as the cation it can generate."))
    sf12 = mech("LG12sol", "[CH3:5][Si:1]([CH3:6])([CH3:7])[CH2:2][CH2:3][O:4][S:8](=[O:9])(=[O:10])[CH3:11]",
                [St([A(('b', 1, 2), ('nb', 2, 3), 0.5), A(('b', 3, 4), ('lp', 4), -0.5)], "anti-periplanar", expect="C=C.C[Si+](C)C.CS(=O)(=O)[O-]", drop=[])], None, width=680)
    _t = "[CH3:1][Si:2]([CH3:3])([CH3:4])[CH:5]1[CH2:6][CH2:7][CH2:8][CH2:9][CH:10]1[O:11]S(=O)(=O)C1=CC=C(C)C=C1"
    trans_ts = chem.pick_rel(_t, [5, 6, 7, 8, 9, 10], [(5, 2), (10, 11)], cis=False)
    cis_ts = chem.pick_rel(_t, [5, 6, 7, 8, 9, 10], [(5, 2), (10, 11)], cis=True)
    qs.append(Q("LG12", "Tosylates A–C are acetolysed at 50 °C. Arrange in <b>decreasing</b> rate. (A trans-2-(trimethylsilyl)cyclohexyl tosylate; B cis-2-(trimethylsilyl)cyclohexyl tosylate; C cyclohexyl tosylate.)",
        S([("A trans", Frag(trans_ts, wedges=chem.ring_wedges(trans_ts, [5, 6, 7, 8, 9, 10], [(5, 2), (10, 11)]))),
           ("B cis", Frag(cis_ts, wedges=chem.ring_wedges(cis_ts, [5, 6, 7, 8, 9, 10], [(5, 2), (10, 11)]))),
           ("C", "CC1=CC=C(C=C1)S(=O)(=O)OC1CCCCC1")]),
        "A &gt; B &gt; C",
        "β-Silicon effect: a C–Si σ bond is an excellent hyperconjugative donor (σ<sub>C–Si</sub> is higher in energy than σ<sub>C–C</sub>/σ<sub>C–H</sub>) and stabilises a β cation by σ→p donation (a bridged, silicon-stabilised cation). The overlap is best when C–Si and C–OTs are <b>anti-periplanar</b>, which the trans isomer reaches in the diaxial chair (A: very large acceleration, ≈ 10<sup>12</sup> in rigid models). "
        "The cis isomer (B) has them gauche (synclinal) only: still accelerated (≈ 10<sup>4</sup> in rigid models) but far less. Cyclohexyl tosylate (C) has no silicon. (Orders of magnitude quoted from Lambert’s work, recalled.)",
        sol_fig=sf12))
    qs.append(Q("LG13", "Arrange the 2-arylethyl tosylates A–D in <b>decreasing</b> rate of acetolysis at 75 °C (neighbouring-group participation by the aryl ring is the major pathway).",
        S([("A", "COC1=CC=C(CCOS(=O)(=O)C2=CC=C(C)C=C2)C=C1"), ("B", "CC1=CC=C(CCOS(=O)(=O)C2=CC=C(C)C=C2)C=C1"), ("C", "C1=CC=C(CCOS(=O)(=O)C2=CC=C(C)C=C2)C=C1"), ("D", "[O-][N+](=O)C1=CC=C(CCOS(=O)(=O)C2=CC=C(C)C=C2)C=C1")]),
        "A &gt; B &gt; C &gt; D",
        "The aryl ring attacks the carbon carrying OTs from the rear, forming a bridged phenonium (spiro-cyclohexadienyl) ion; the rate rises with the electron-donating power of the para substituent (σ<sup>+</sup>: OMe −0.78, Me −0.31, H 0, NO<sub>2</sub> +0.79). The p-nitro compound cannot use the ring and reacts by the slower, unassisted S<sub>N</sub>2-like route (k<sub>s</sub>). "
        "The ‘leaving group’ is identical (TsO<sup>−</sup>) in all four; the substituent changes how effectively it is displaced."))
    qs.append(Q("LG14", "Arrange the cyclic ethers A–D in <b>decreasing</b> ease of acid-catalysed ring opening by aqueous HBr at 25 °C.",
        S([("A", "C1CO1"), ("B", "C1COC1"), ("C", "C1CCOC1"), ("D", "C1CCOCC1")]),
        "A &gt; B &gt; C &gt; D",
        "The leaving group is the protonated oxygen (an alcohol or ether oxygen that becomes neutral on C–O cleavage), and the driving force is the release of ring strain: oxirane (≈ 27 kcal mol<sup>−1</sup>) and oxetane (≈ 25) are strained; oxolane (THF, ≈ 6) is slightly strained; oxane (THP, ≈ 0.5) is not. "
        "Epoxides react far faster than oxetanes despite similar strain energies because the TS gains from poorer C–O–C orbital overlap (bent bonds) in the three-membered ring; THF is cleaved only under more forcing conditions, THP hardly at all."))
    qs.append(Q("LG15", "Arrange the 2-propyl arenesulfonates A–D in <b>decreasing</b> rate of solvolysis in aq. ethanol at 25 °C.",
        S([("A p-NO₂", "CC(C)OS(=O)(=O)C1=CC=C(C=C1)[N+](=O)[O-]"), ("B p-Br", "CC(C)OS(=O)(=O)C1=CC=C(Br)C=C1"), ("C p-CH₃", "CC(C)OS(=O)(=O)C1=CC=C(C)C=C1"), ("D p-OCH₃", "COC1=CC=C(C=C1)S(=O)(=O)OC(C)C")]),
        "A &gt; B &gt; C &gt; D",
        "The sulfonate anion is stabilised by electron-withdrawing substituents (lower pK<sub>a</sub> of ArSO<sub>3</sub>H), so the leaving-group ability follows the Hammett σ constants: NO<sub>2</sub> (σ<sub>p</sub> +0.78) &gt; Br (+0.23) &gt; CH<sub>3</sub> (−0.17) &gt; OCH<sub>3</sub> (−0.27); ρ for the leaving group is positive and modest. "
        "Brosylates and nosylates are therefore used when tosylates are too unreactive; mesylates are comparable to tosylates."))
    B.questions(qs, 2)
    return qs
