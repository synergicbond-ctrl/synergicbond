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


_P2 = {
"CA": [
(52, ("Cyclohexanone is treated with methyl vinyl ketone and NaOEt/EtOH, then heated. Give the bicyclic product and name the three steps.",
      S([("", "O=C1C=C2CCCCC2CC1")]), "Δ<sup>1(9)</sup>-octalone (4,4a,5,6,7,8-hexahydronaphthalen-2(3H)-one); Michael, intramolecular aldol, E1cB dehydration",
      "The cyclohexanone enolate adds 1,4 to MVK to give the 1,5-diketone; the methyl ketone enolate attacks the ring C=O (6-exo) to give a β-hydroxy ketone, which loses water by E1cB to give the conjugated enone (Robinson annulation).")),
(53, ("Diethyl malonate (2 equiv) with NaOEt and 1,2-dibromoethane gives a cyclic diester. Name it and the product after hydrolysis and heating.",
      S([("", "CCOC(=O)C1(CC1)C(=O)OCC"), ("→", "OC(=O)C1CC1")]), "diethyl cyclopropane-1,1-dicarboxylate; cyclopropanecarboxylic acid", "One malonate carbanion displaces bromide (S<sub>N</sub>2); the remaining acidic C–H is deprotonated and the carbanion closes the three-membered ring (3-exo-tet). Hydrolysis and decarboxylation of the gem-diacid give the mono-acid.")),
(54, ("Diethyl 3-methyladipate (diethyl 3-methylhexanedioate) undergoes Dieckmann cyclisation. Which regioisomeric β-keto ester is expected to predominate, and why?",
      None, "2-ethoxycarbonyl-4-methylcyclopentanone (major) over the 3-methyl isomer", "Enolate formation at C-5 (remote from the methyl) is less hindered; it attacks the C-1 ester to give the 4-methyl isomer. Enolate formation at C-2 (next to the methyl-bearing C-3) gives the 3-methyl isomer. The product with the acidic ring C–H is deprotonated, which drives either closure.")),
(55, ("Nitromethane reacts with benzaldehyde and base (Henry reaction). Give the adduct and the compound formed on dehydration, and explain why only catalytic base is needed.",
      S([("", "O=[N+]([O-])CC(O)c1ccccc1"), ("→", "O=[N+]([O-])C=Cc1ccccc1")]), "2-nitro-1-phenylethanol; β-nitrostyrene", "The nitronate (pK<sub>a</sub> ≈ 10) adds to the aldehyde; the alkoxide is protonated by nitromethane, regenerating the nitronate. Dehydration (E1cB) gives the conjugated nitroalkene.")),
(56, ("Which alcohol is formed from (a) ethyl acetate + 2 EtMgBr, (b) ethyl propanoate + 2 CH<sub>3</sub>MgBr? Are they the same?",
      S([("a", "CCC(C)(O)CC"), ("b", "CCC(C)(C)O")]), "(a) 3-methylpentan-3-ol; (b) 2-methylbutan-2-ol; different", "Two equivalents of R<sup>−</sup> add to the ester carbonyl; the acyl group supplies one substituent and the OEt is lost after the first addition. (a) acyl = CH<sub>3</sub>, R = Et twice; (b) acyl = Et, R = CH<sub>3</sub> twice.")),
(57, ("(JEE integer) How many of these give a yellow precipitate with I<sub>2</sub>/NaOH: ethanol, propan-2-ol, acetophenone, pentan-3-one, acetaldehyde, propanal, butan-2-one, methyl acetate?",
      None, "5", "Ethanol and propan-2-ol (oxidised in situ to CH<sub>3</sub>CHO and acetone), acetophenone, acetaldehyde and butan-2-one contain CH<sub>3</sub>CO– or CH<sub>3</sub>CH(OH)–. Pentan-3-one, propanal and methyl acetate do not.")),
(58, ("Benzyl allyl ether is treated with n-BuLi at −78 °C and warmed. Give the product and name the rearrangement.",
      S([("", "C=CCOCc1ccccc1"), ("→", "C=CCC(O)c1ccccc1")]), "1-phenylbut-3-en-1-ol via [2,3]-Wittig rearrangement", "BuLi removes the benzylic proton; the carbanion attacks the terminal alkene carbon in a five-membered cyclic transition state while the C–O bond to the allyl group breaks, giving a homoallylic alkoxide.")),
],
"FR": [
(52, ("Calculate ΔH for Br• + (CH<sub>3</sub>)<sub>3</sub>C–H and Cl• + (CH<sub>3</sub>)<sub>3</sub>C–H using D(C–H) = 96.5, D(H–Br) = 87.5, D(H–Cl) = 103 kcal mol<sup>−1</sup>, and say what this predicts about selectivity.",
      None, "+9 (Br•); −6.5 (Cl•)", "ΔH = D(C–H) − D(H–X). Endothermic abstraction by Br• gives a late, radical-like transition state, so it discriminates strongly among 1°/2°/3° C–H; exothermic abstraction by Cl• has an early transition state and low selectivity.")),
(53, ("In a radical polymerisation R<sub>p</sub> = 1 × 10<sup>−4</sup> M s<sup>−1</sup> and R<sub>i</sub> = 1 × 10<sup>−8</sup> M s<sup>−1</sup>. Find the kinetic chain length and the number-average degree of polymerisation if termination is (a) all by combination, (b) all by disproportionation.",
      None, "ν = 10<sup>4</sup>; (a) 2 × 10<sup>4</sup>; (b) 10<sup>4</sup>", "ν = R<sub>p</sub>/R<sub>i</sub> = 10<sup>4</sup> monomer units per initiating radical. Combination joins two growing chains (DP = 2ν); disproportionation gives one dead chain per radical (DP = ν). Chain transfer is ignored.")),
(54, ("1-Octene is heated with bromotrichloromethane and a peroxide. Give the product and the two propagation steps.",
      S([("", "ClC(Cl)(Cl)CC(Br)CCCCCC")]), "3-bromo-1,1,1-trichlorononane", "Cl<sub>3</sub>C• adds to the terminal CH<sub>2</sub> to give the secondary radical, which abstracts Br from BrCCl<sub>3</sub> (weak C–Br bond), regenerating Cl<sub>3</sub>C• (Kharasch addition).")),
(55, ("N-Chloro-N-methylbutylamine is irradiated in conc. H<sub>2</sub>SO<sub>4</sub> and then made basic. Give the product and the key radical step.",
      S([("", "CN1CCCC1")]), "N-methylpyrrolidine (Hofmann–Löffler–Freytag)", "The N-centred aminium radical abstracts the δ-hydrogen through a six-membered transition state (1,5-HAT); the C-radical takes Cl from another N-chloroammonium (chain). On basification the free δ-chloroamine cyclises by intramolecular S<sub>N</sub>2.")),
(56, ("How does BHT (2,6-di-tert-butyl-4-methylphenol) inhibit autoxidation, and why does the resulting radical not propagate the chain?",
      None, "it donates its O–H hydrogen to ROO•; the aryloxyl radical is stabilised and hindered", "ROO• + ArOH → ROOH + ArO•. The O–H bond is weak (≈ 80 kcal mol<sup>−1</sup>), the unpaired electron is delocalised into the ring, and the ortho tert-butyl groups block attack, so ArO• neither abstracts H from RH nor adds to O<sub>2</sub>; it terminates a second ROO•.")),
(57, ("(Integer) NBS/CCl<sub>4</sub>/peroxide is used with (E)-hex-2-ene. How many constitutional isomeric monobromoalkenes can form (ignore stereoisomers)?",
      None, "4", "Allylic hydrogens are on C-1 and C-4. The C-4 radical (↔ C-2) gives 4-bromohex-2-ene and 2-bromohex-3-ene; the C-1 radical (↔ C-3) gives 1-bromohex-2-ene and 3-bromohex-1-ene. The C-4 pathway predominates (gives disubstituted alkenes).")),
(58, ("Arrange R–X in decreasing rate of reduction by Bu<sub>3</sub>SnH/AIBN: R–Cl, R–Br, R–I. Explain with bond energies.",
      None, "R–I &gt; R–Br &gt; R–Cl", "The rate-limiting halogen abstraction by Bu<sub>3</sub>Sn• is easier for weaker C–X bonds (CH<sub>3</sub>–I 57, –Br 70, –Cl 85 kcal mol<sup>−1</sup>) and also forms the strong Sn–X bond.")),
],
"CE": [
(42, ("p-Cresol undergoes the Reimer–Tiemann reaction. Give the normal product and the ‘abnormal’ product.",
      S([("normal", "Cc1ccc(O)c(C=O)c1"), ("abnormal", "CC1(C(Cl)Cl)C=CC(=O)C=C1")]), "2-hydroxy-5-methylbenzaldehyde; 4-(dichloromethyl)-4-methylcyclohexa-2,5-dienone", "Ortho attack of :CCl<sub>2</sub> on the phenoxide followed by hydrolysis gives the aldehyde. Para attack at the methyl-bearing carbon cannot rearomatise, so the dichloromethyl dienone is isolated.")),
(43, ("Pyrrole is treated with CHCl<sub>3</sub>/NaOEt. Give the product and the key intermediate.",
      S([("", "Clc1cccnc1")]), "3-chloropyridine; a 6,6-dichloro-2-azabicyclo[3.1.0]hexene (dichlorocyclopropane)", "(Ciamician–Dennstedt) :CCl<sub>2</sub> adds across the C2=C3 bond; the cyclopropane opens with loss of Cl<sup>−</sup> and ring expansion to the six-membered aromatic pyridine. Indole gives 3-chloroquinoline.")),
(44, ("1,1-Dibromo-2,2-dimethylcyclopropane is treated with MeLi. Give the product.",
      S([("", "CC(C)=C=C")]), "3-methylbuta-1,2-diene", "Li/Br exchange and loss of LiBr give the cyclopropylidene, which opens (Doering–LaFlamme) by cleaving the C2–C3 bond to the allene.")),
(45, ("1-Diazohex-5-en-2-one (CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>2</sub>COCHN<sub>2</sub>) is treated with Cu(acac)<sub>2</sub>. Give the product.",
      S([("", "O=C1CCC2CC12")]), "bicyclo[3.1.0]hexan-2-one", "The copper carbenoid adds intramolecularly to the C=C, forming a cyclopentanone ring fused to a cyclopropane.")),
(46, ("Why are aryl–CF<sub>3</sub> diazirines preferred over aryl azides for photoaffinity labelling?",
      None, "they give a carbene that inserts into C–H/X–H bonds indiscriminately", "Photolysis (≈ 350 nm) of the diazirine gives a carbene that inserts non-selectively into nearby bonds. Aryl azides give nitrenes that ring-expand to azepines and react mainly with nucleophiles, and the CF<sub>3</sub> group suppresses isomerisation of the diazirine to the diazo compound.")),
],
"NI": [
(35, ("A carboxylic acid is treated with DPPA/Et<sub>3</sub>N and then t-BuOH under reflux. Give the product type and the intermediates.",
      None, "R–NH–Boc via acyl azide and isocyanate", "RCOOH is converted to the acyl azide (via the mixed phosphoryl anhydride), which rearranges on heating to RN=C=O; t-BuOH adds to give the Boc carbamate (Shioiri–Yamada). Retention at R.")),
(36, ("N-Phenylhydroxylamine is warmed in dilute H<sub>2</sub>SO<sub>4</sub>. Give the product and the intermediate.",
      S([("", "Nc1ccc(O)cc1")]), "p-aminophenol via a nitrenium ion (Bamberger rearrangement)", "Protonation of OH and loss of water give the phenylnitrenium ion, delocalised onto the para carbon; water attacks there and tautomerisation gives p-aminophenol.")),
(37, ("Terephthalamide is treated with excess NaOBr. Give the product.",
      S([("", "Nc1ccc(N)cc1")]), "p-phenylenediamine", "Each CONH<sub>2</sub> undergoes Hofmann degradation, losing its carbonyl carbon as carbonate and leaving NH<sub>2</sub> on the ring carbon.")),
(38, ("Styrene reacts with PhI=NTs and Cu(OTf)<sub>2</sub>. Give the product, and say where a nucleophile will open it.",
      S([("", "Cc1ccc(cc1)S(=O)(=O)N1CC1c1ccccc1")]), "2-phenyl-1-tosylaziridine; opening at the benzylic carbon", "A copper-nitrenoid transfers NTs to the C=C (Evans aziridination). Nucleophiles open the activated aziridine at the benzylic carbon, which best stabilises the developing positive charge.")),
],
"BZ": [
(35, ("(Z)-Hex-3-ene-1,5-diyne is heated in 1,4-cyclohexadiene. Name the intermediate and the final aromatic product.",
      S([("", "C#CC=CC#C"), ("→", "c1ccccc1")]), "1,4-didehydrobenzene (p-benzyne) diradical; benzene", "Bergman cyclisation forms the σ,σ-diradical, which abstracts two H atoms from 1,4-cyclohexadiene (itself aromatising to benzene). The same chemistry in enediyne antibiotics cleaves DNA.")),
(36, ("Three benzyne molecules combine in the presence of Pd(0). Give the product and its molecular formula.",
      S([("", "c1ccc2c(c1)c1ccccc1c1ccccc21")]), "triphenylene, C<sub>18</sub>H<sub>12</sub>", "A palladium-templated [2+2+2] cyclotrimerisation of three C<sub>6</sub>H<sub>4</sub> units gives the fully fused triphenylene (3 × C<sub>6</sub>H<sub>4</sub> = C<sub>18</sub>H<sub>12</sub>).")),
],
}


_orig_add = add


def add(topic, q):
    _orig_add(topic, q)
    for n, a in _P2.get(topic, []):
        q(n, *a)


_orig_add2 = add


def add(topic, q):
    import importlib
    _orig_add2(topic, q)
    try:
        mod = importlib.import_module(f"content.bank_{topic}")
    except ModuleNotFoundError:
        return
    for n, a in mod.PROBLEMS:
        q(n, *a)
