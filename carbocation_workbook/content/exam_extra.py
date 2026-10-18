from .lg import S


def add(topic, q):
    for n, a in _P[topic]:
        q(n, *a)


_P = {
"CA": [
(46, ("(IChO-style) The pK<sub>a</sub> values of cyclopentadiene, indene and fluorene (DMSO) are 18, 20 and 22.6. Explain why benzo-fusion lowers the acidity although the conjugate base keeps the cyclopentadienide ring.",
      S([("", "C1C=CC=C1"), ("", "C1c2ccccc2C=C1"), ("", "C1c2ccccc2-c2ccccc12")]),
      "each fused benzene ring competes for the π electrons",
      "In Cp<sup>−</sup> all six π electrons are shared by five equivalent carbons. In indenide and fluorenide, part of the charge must be delocalised into a benzene ring, which costs some of that ring's aromatic stabilisation, and the cyclopentadienide ring is perturbed. Each benzo-fusion therefore destabilises the anion by ≈ 2 pK units relative to Cp<sup>−</sup>.")),
(47, ("(JEE Advanced, integer) Propanal undergoes self-aldol addition (dilute NaOH, 5 °C). How many stereoisomers does the aldol (3-hydroxy-2-methylpentanal) have, and how many geometrical isomers does the dehydration product have?",
      None, "4 and 2", "The aldol has two stereocentres (C-2 and C-3, no symmetry): 2<sup>2</sup> = 4 stereoisomers. Dehydration gives 2-methylpent-2-enal, with a trisubstituted C=C bearing different groups on each carbon: E and Z, so 2.")),
(48, ("(GATE/CSIR style) Acetophenone is treated with ethyl formate and NaOEt, then acid. Give the product and say why formate is a good acylating partner.",
      S([("", "O=C(C=O)c1ccccc1".replace("O=C(C=O)c1ccccc1", "O=CCC(=O)c1ccccc1"))]),
      "benzoylacetaldehyde (3-oxo-3-phenylpropanal), largely as its enol",
      "Crossed Claisen condensation: the acetophenone enolate attacks HCOOEt, whose carbonyl is unhindered and cannot itself enolise (no α-H), so a single product forms. The product is a 1,3-dicarbonyl (pK<sub>a</sub> ≈ 7–9), which is deprotonated by ethoxide and drives the reaction.")),
(49, ("Ethyl acetoacetate is treated with (i) NaH (1 equiv), (ii) n-BuLi (1 equiv), (iii) PhCH<sub>2</sub>Br, (iv) H<sub>3</sub>O<sup>+</sup>. Predict the product and explain the site of alkylation.",
      S([("", "CCOC(=O)CC(=O)CCc1ccccc1")]), "ethyl 3-oxo-5-phenylpentanoate (γ-alkylation)",
      "NaH removes the most acidic C-2 proton; n-BuLi then removes a proton from the terminal CH<sub>3</sub> (C-4) to give a dianion. In the dianion the less stabilised, more basic carbanion (C-4) is the more nucleophilic and reacts first with the halide. Acid work-up reprotonates C-2.")),
(50, ("Arrange in order of increasing rate of E1cB elimination of HO<sup>−</sup> from β-hydroxy compounds: (a) CH<sub>3</sub>CH(OH)CH<sub>2</sub>COCH<sub>3</sub>, (b) CH<sub>3</sub>CH(OH)CH<sub>2</sub>COOEt, (c) CH<sub>3</sub>CH(OH)CH<sub>2</sub>CON(CH<sub>3</sub>)<sub>2</sub>, (d) CH<sub>3</sub>CH(OH)CH<sub>2</sub>NO<sub>2</sub>.",
      None, "c &lt; b &lt; a &lt; d", "E1cB rate follows the ease of forming the carbanion (acidity of the α-H): amide (≈ 30) &lt; ester (≈ 25) &lt; ketone (≈ 20) &lt; nitro (≈ 10 in water). Hydroxide is a poor leaving group, but the stabilised carbanion makes expulsion feasible.")),
],
"FR": [
(47, ("2-Methylbutane is brominated with Br<sub>2</sub>/hν at 127 °C (relative reactivity per H: 1° : 2° : 3° = 1 : 82 : 1640). Calculate the percentage of 2-bromo-2-methylbutane among the monobromides.",
      None, "≈ 90.5 %", "H count: 9 primary (two CH<sub>3</sub> on C-2 plus the C-4 CH<sub>3</sub>), 2 secondary, 1 tertiary. Weights: 9 × 1 = 9; 2 × 82 = 164; 1 × 1640 = 1640. Fraction tertiary = 1640/1813 = 0.905.")),
(48, ("Using D(C–H) = 105 (CH<sub>3</sub>–H), D(Cl–Cl) = 58, D(H–Cl) = 103, D(CH<sub>3</sub>–Cl) = 85 kcal mol<sup>−1</sup>, calculate ΔH for each propagation step and for the overall chlorination of methane.",
      None, "step 1 +2; step 2 −27; overall −25 kcal mol<sup>−1</sup>", "Step 1: CH<sub>4</sub> + Cl• → CH<sub>3</sub>• + HCl: 105 − 103 = +2. Step 2: CH<sub>3</sub>• + Cl<sub>2</sub> → CH<sub>3</sub>Cl + Cl•: 58 − 85 = −27. Overall = 105 + 58 − 103 − 85 = −25. The slightly endothermic first step is the rate-determining one (E<sub>a</sub> ≈ 4).")),
(49, ("Styrene is treated with HBr in the presence of benzoyl peroxide. Give the product, name the intermediate radical and explain why no 1-bromoethylbenzene forms.",
      S([("", "BrCCc1ccccc1")]), "(2-bromoethyl)benzene via the benzylic radical",
      "Br• adds to the terminal CH<sub>2</sub> to give PhC•H–CH<sub>2</sub>Br, a benzylic radical delocalised over the ring. Attack at the other carbon would give a primary radical with no stabilisation. The benzylic radical abstracts H from HBr (chain transfer). Only HBr has both propagation steps favourable.")),
(50, ("(Barton–McCombie) A secondary alcohol is converted to its methyl xanthate ROC(=S)SMe and then treated with Bu<sub>3</sub>SnH/AIBN. Give the product and the driving force.",
      None, "R–H (deoxygenation); formation of a strong C=O (and Sn–S) bond",
      "Bu<sub>3</sub>Sn• adds to the thiocarbonyl sulfur to give a stabilised radical, which fragments with C–O cleavage to R• and Bu<sub>3</sub>SnS–C(=O)SMe (new C=O bond). R• then abstracts H from Bu<sub>3</sub>SnH, regenerating Bu<sub>3</sub>Sn•. It deoxygenates secondary alcohols that would eliminate under ionic conditions.")),
(51, ("6-Bromohex-1-ene is treated with Bu<sub>3</sub>SnH/AIBN at (a) 0.01 M and (b) 1 M Bu<sub>3</sub>SnH. Which product predominates in each case?",
      S([("a", "CC1CCCC1"), ("b", "C=CCCCC")]), "(a) methylcyclopentane; (b) hex-1-ene",
      "The 5-hexenyl radical either cyclises (first-order, k ≈ 2 × 10<sup>5</sup> s<sup>−1</sup>) or is reduced by Bu<sub>3</sub>SnH (second-order, k ≈ 2 × 10<sup>6</sup> M<sup>−1</sup> s<sup>−1</sup>). At 0.01 M the reduction rate is ≈ 2 × 10<sup>4</sup> s<sup>−1</sup>, so cyclisation wins; at 1 M it is ≈ 2 × 10<sup>6</sup> s<sup>−1</sup>, so direct reduction wins. Rate constants are approximate.")),
],
"CE": [
(38, ("Predict the products (count stereoisomers) of CH<sub>2</sub>I<sub>2</sub>/Zn–Cu with (a) cis-2-butene, (b) trans-2-butene.",
      S([("a", "CC1CC1C"), ("b", "CC1CC1C")]), "(a) one product, meso cis-1,2-dimethylcyclopropane; (b) trans-1,2-dimethylcyclopropane as a racemate (two enantiomers)",
      "The carbenoid adds in one concerted syn step, so alkene geometry is retained. The cis product has a mirror plane (meso, achiral); the trans product has two stereocentres and no mirror plane, so it is chiral and forms as a 1 : 1 mixture of enantiomers.")),
(39, ("Acetyl chloride is treated with excess CH<sub>2</sub>N<sub>2</sub>, and the product is heated with Ag<sub>2</sub>O in water. Identify each product and the carbene-related step.",
      None, "diazoacetone, then propanoic acid", "CH<sub>3</sub>COCl + 2 CH<sub>2</sub>N<sub>2</sub> → CH<sub>3</sub>COCHN<sub>2</sub> + CH<sub>3</sub>Cl + N<sub>2</sub>. Ag<sup>+</sup> promotes loss of N<sub>2</sub> to an acylcarbene, which undergoes the Wolff rearrangement (CH<sub>3</sub> migrates) to the ketene CH<sub>3</sub>CH=C=O; water adds to give CH<sub>3</sub>CH<sub>2</sub>COOH (one carbon added to the acid).")),
(40, ("Dichlorocarbene reacts with norbornene. Give the major product and state its stereochemistry.",
      None, "exo-3,3-dichlorotricyclo[3.2.1.0<sup>2,4</sup>]octane", "Attack occurs from the less hindered exo face of the strained double bond, giving the exo-fused dichlorocyclopropane. The addition is syn, as for any singlet carbene.")),
(41, ("A thiazolium salt catalyses the benzoin condensation of benzaldehyde. Identify the carbene and the key intermediate, and say what is inverted.",
      None, "thiazol-2-ylidene (NHC); the Breslow intermediate; the polarity of the carbonyl carbon (umpolung)",
      "Base deprotonates C-2 of the thiazolium to give the NHC. It adds to PhCHO; proton transfer gives the Breslow enaminol, in which the former carbonyl carbon is nucleophilic (acyl-anion equivalent). It attacks a second PhCHO and the catalyst is expelled, giving benzoin.")),
],
"NI": [
(31, ("(S)-2-Phenylpropanoic acid is converted to its acyl azide, heated, and hydrolysed. Give the product and its configuration.",
      None, "(S)-1-phenylethylamine", "Curtius migration of the 1-phenylethyl group occurs with retention. In the acid the priority order is COOH &gt; Ph &gt; CH<sub>3</sub> &gt; H and in the amine NH<sub>2</sub> &gt; Ph &gt; CH<sub>3</sub> &gt; H, so NH<sub>2</sub> takes the rank of COOH and the descriptor stays S.")),
(32, ("Write the balanced equation for the Hofmann degradation of RCONH<sub>2</sub> with Br<sub>2</sub>/NaOH and state the moles of NaOH consumed per mole of amide.",
      None, "RCONH<sub>2</sub> + Br<sub>2</sub> + 4 NaOH → RNH<sub>2</sub> + Na<sub>2</sub>CO<sub>3</sub> + 2 NaBr + 2 H<sub>2</sub>O; 4 mol", "The Na, O and H balance: Na 4 = 2 + 2; O 1 + 4 = 3 + 2; H 2 + 4 = 2 + 4. NaOH is used to form NaOBr, to deprotonate the N–H, and to convert CO<sub>2</sub> (from the isocyanate) to carbonate.")),
(33, ("2-Azidobiphenyl is heated in an inert solvent. Give the main product and the intermediate.",
      S([("", "c1ccc2c(c1)[nH]c1ccccc12")]), "carbazole via an aryl nitrene (insertion into the adjacent ring C–H)", "Loss of N<sub>2</sub> gives the nitrene on one ring, which inserts into the ortho C–H of the other ring to form the five-membered pyrrole ring. The same carbazole arises from 2-nitrobiphenyl and P(OEt)<sub>3</sub> (Cadogan).")),
(34, ("Ethyl azidoformate is photolysed in cyclohexene. Name the two kinds of product and say how stereochemistry would reveal the spin state.",
      None, "N-ethoxycarbonyl-7-azabicyclo[4.1.0]heptane (aziridine) and allylic C–H insertion product", "A singlet carbalkoxynitrene adds to C=C in one step (syn, stereospecific) and can insert into allylic C–H. A triplet nitrene adds in two steps via a diradical; with cis- or trans-2-butene it would give aziridines of mixed configuration.")),
],
"BZ": [
(31, ("The oxabenzonorbornadiene (furan–benzyne adduct) is treated with dilute HCl. Give the product.",
      S([("", "C1=CC2OC1c1ccccc12"), ("→", "Oc1cccc2ccccc12")]), "1-naphthol", "Protonation opens the strained C–O bridge to a benzylic/allylic cation; a 1,2-hydride shift and loss of H<sup>+</sup> aromatise the new ring, giving 1-naphthol.")),
(32, ("o-Dibromobenzene is treated with 1 equiv of n-BuLi in THF at (a) −100 °C and (b) 0 °C. What species forms in each case?",
      None, "(a) o-bromophenyllithium; (b) benzyne (LiBr lost)", "Bromine–lithium exchange is fast at −100 °C and gives the stable ortho-bromoaryllithium. On warming, elimination of LiBr is thermally easy (the C–Li bond and the ortho C–Br are syn-periplanar in the plane), giving benzyne, which is trapped if a diene is present.")),
(33, ("How many <sup>1</sup>H NMR signals (aromatic and bridgehead types) does triptycene show, and from which reagents is it made?",
      None, "3 signal types; benzyne + anthracene", "Each of the three benzo rings has two types of aromatic H (AA′BB′ pattern: H next to the bridgehead and H farther away), and the two bridgehead H are equivalent: 3 signal types. Benzyne from anthranilic acid/isoamyl nitrite adds across C-9/C-10 of anthracene.")),
(34, ("Account for the observation that 1-chloro-2,4-dinitrobenzene reacts with aqueous NaOH at 25 °C to give the phenol but 4-chlorotoluene needs NaNH<sub>2</sub>/NH<sub>3</sub> and gives two products.",
      None, "S<sub>N</sub>Ar versus elimination–addition", "The nitro groups ortho and para to Cl stabilise the Meisenheimer anion, so addition of HO<sup>−</sup> occurs without strong base (ipso substitution, one product). 4-Chlorotoluene has no activation; only a very strong base can remove the ortho H, giving 4-methylbenzyne, which is attacked at either carbon to give m- and p-cresol-type products (here m- and p-toluidine).")),
],
}
