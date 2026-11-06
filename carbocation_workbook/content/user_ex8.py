from .common import *
from .lg import S


def build(B):
    B.part("Part 5G", "Complete Worked Answers: the Nucleus ‘Carbocation and Free Radical’ Exercise")
    B.p("Every question of the exercise you supplied (Exercise I, Q1–53; II-A, Q1–18; II-B, Q1–13; JEE-Main Q1–11; JEE-Advanced Q1–4) is answered here. "
        "The PDF prints an answer key; I reasoned each item first and compared. <b>‡</b> = I relied on the key because I could not verify the drawing or the arithmetic independently; "
        "<b>⚑</b> = I disagree with the key or two sources disagree. Questions on <i>nucleophilicity comparison</i> (II-A Q8, Main Q3, Advanced Q2) are left out because your topic list excludes it. "
        "The stability and rate <b>orders</b> found in this exercise are also collected in the master index at the end of Part 5H.")

    def tab(title, rows):
        B.h2(title)
        B.table(["Q", "Answer", "Reasoning"], rows, widths=[6, 20, 74])

    B.h2("5G.0  Cations drawn for reference")
    B.fig(S([("1A", "CC[C+](C)C"), ("1B", "CC(O)[C+](C)C"), ("1C", "CC[C+](C)O"), ("1D", "CC(CCO)[C+](C)C".replace("CC(CCO)[C+](C)C", "OCCC[C+](C)C"))]),
          "Q1: (C) has the OH on the cationic carbon (oxocarbenium): the most stable.")
    B.fig(S([("3A", "CC1CCC[CH+]C1"), ("3B", "CC1CCCC[CH+]1"), ("3C", "[CH+]1CCCCC1"), ("3D", "C[C+]1CCCCC1")]),
          "Q3: only (B) rearranges (a 1,2-H shift from the methyl-bearing neighbour gives the tertiary ion); (D) is already tertiary.")

    tab("5G.1  Exercise I – mains oriented (Q1–Q53)", [
        ["1", "(C)", "Only C has the OH on C<sup>+</sup> itself (+M, oxocarbenium); in B and D the OH is further away and only withdraws."],
        ["2", "(C)", "Least likely: the 7-norbornyl-type bridge/bridgehead cation, which cannot become planar; trityl, cyclohexenyl (allylic) and ethyl are all possible."],
        ["3", "(B)", "A secondary cation next to a carbon bearing a methyl group shifts H to give the tertiary 1-methylcyclohexyl cation."],
        ["4", "(D)  4", "Dicyclobutylmethyl cation: ring expansion (cyclobutyl → cyclopentyl) and further ring expansions/hydride shifts to the fused tertiary bicycle: four 1,2-shifts in the key. ‡"],
        ["5", "(B)  8", "All eight can lower their energy by a 1,2-shift: primary n-propyl (H shift), the two secondary branched cations (H or CH<sub>3</sub> shift), the quaternary-neopentyl type, the methyl-substituted cyclopentyl and spiro cations (ring changes), the β-alkoxy cation (H shift to oxocarbenium) and the secondary benzylic-type cation. ‡"],
        ["6", "(B)  ΔH<sub>4</sub> &gt; ΔH<sub>1</sub> &gt; ΔH<sub>2</sub> &gt; ΔH<sub>3</sub>", "Heterolysis is hardest where the cation is least stable: phenyl (IV) &gt; cyclohexyl (I) &gt; cyclohexenyl-allylic (II) &gt; benzyl (III)."],
        ["7", "(C)", "3-Bromocyclopropene ionises (silver bromide, pale yellow) to the aromatic cyclopropenyl cation, which has three equivalent resonance forms. The false statement is that it has the lower dipole moment than bromocyclopropane."],
        ["8", "(C)", "SbCl<sub>5</sub> ionises C–Cl to the planar benzylic carbocation, so the optically active chloride racemises."],
        ["9", "(B)  0", "1-Butanol dehydrates by E2 on the protonated alcohol (no primary cation), and the 2-butene results from acid-catalysed isomerisation of 1-butene, not from a 1,2-shift in a carbocation. ‡"],
        ["10", "(A)", "Secondary cation next to a quaternary carbon → methyl shifts → tertiary → loses H to give the tetrasubstituted 1,2-dimethylcyclohexene (Zaitsev)."],
        ["11", "(D) ‡", "In cold dilute acid the rearranged tertiary cation is trapped by water (low temperature favours substitution over elimination)."],
        ["12", "(A)  I &lt; II &lt; III &lt; IV", "Dehydration rate follows the stability of the cation formed: phenol does not ionise; cyclohexyl (secondary) &lt; allylic cyclohexenyl &lt; pentadienyl-type."],
        ["13", "(D)", "Dienol–benzene rearrangement: lose water to the tertiary allylic cation, a methyl migrates, and loss of H<sup>+</sup> restores the aromatic ring (3,4-dimethylphenol)."],
        ["14", "(C) ‡", "The fastest to dehydrate is the tertiary, allylic alcohol, since the allyl–tertiary cation is the best."],
        ["15", "(D) ‡", "Acid-catalysed dienone/dienol–phenol-type shift and aromatisation, giving the hydroquinone-type product."],
        ["16", "(D)", "Cyclobutyl-substituted cyclopentyl carbinyl cation: the strained cyclobutane expands (ring strain relief) and the alkene forms in the fused tetrasubstituted position."],
        ["17", "(A)", "Meyer–Schuster rearrangement: protonation, loss of water, allenyl/propargyl cation, then water at the other terminus and tautomerisation to the α,β-unsaturated ketone (chalcone)."],
        ["18", "(D)  A &gt; B &gt; C &gt; D", "Rate with HBr (SN1 through the benzyl cation): p-OMe &gt; H &gt; p-Cl &gt; p-NO<sub>2</sub>."],
        ["19", "(A)", "The tertiary alcohol, 2-methylbutan-2-ol, gives the most stable cation."],
        ["20", "(B)", "The double bond most reactive to electrophiles gives the most stabilised cation; b is in the position whose cation is stabilised by the neighbouring ring system. ‡"],
        ["21", "(C)", "Secondary cation → methyl shift → tertiary → Zaitsev: the most substituted ring alkene."],
        ["22", "(B)  2", "Two diols are mixed; each rearranges on its own, so there are two products (no crossover products between molecules)."],
        ["23", "(C)  II &gt; I &gt; III", "Rate-determining step: ionisation of the diol to a cation. The key ranks the mixed methyl/phenyl diol fastest, then the diphenyl diol, and pinacol slowest. ‡"],
        ["24", "(D)", "Pinacol rearrangement with ring expansion: the cyclobutane ring bond migrates, giving the 2,2-dimethylcyclopentanone."],
        ["25", "(B)  b &gt; a &gt; c", "2-Methoxypropene (enol ether, +M) &gt; isobutene &gt; allyl methyl ether (−I)."],
        ["26", "(D)", "X cannot be 1-methylcyclopent-2-ene-type isomer; the others give 1-bromo-1-methylcyclohexane by Markovnikov addition or ring expansion. ‡"],
        ["27", "(D)", "HCl does not show the peroxide effect; Markovnikov addition and a hydride shift give the tertiary chloride."],
        ["28", "(B)", "Intramolecular protonation of the enol ether, then the OH adds to the oxocarbenium: the spiroketal."],
        ["29", "(B)  P &gt; R &gt; Q", "Rate of electrophilic addition: methyl vinyl ether (+M) &gt; propene &gt; vinyl chloride (−I)."],
        ["30", "(C)", "HBr/CCl<sub>4</sub> without rearrangement gives a new stereocentre next to the existing one: a mixture of diastereomers."],
        ["31", "(A)", "Acid hydration and oxymercuration–demercuration are both Markovnikov (same tertiary alcohol); hydroboration gives the anti-Markovnikov alcohol."],
        ["32", "(A)", "Anti addition of Br<sub>2</sub> to a trans-alkene gives a racemic pair of enantiomers: it is optically inactive, so ‘optically active’ is the incorrect statement."],
        ["33", "(D)", "Pinacol coupling then pinacol rearrangement gives a spiro ketone C<sub>10</sub>H<sub>16</sub>O with three degrees of unsaturation, not four."],
        ["34", "(D)", "The bromonium ion is opened transannularly by the nitrogen lone pair, giving the bicyclic ammonium-type product."],
        ["35", "(D)", "trans-2-Butene + Br<sub>2</sub> (anti) gives meso-2,3-dibromobutane: inactive; statements (C) and (D) about optical isomers are the incorrect ones (the key lists D)."],
        ["36", "(D)", "HBr adds to the double bond of allyl bromide to give 1,2-dibromopropane; the other substrates give gem-dihalides."],
        ["37", "(B)  IV &gt; III &gt; I &gt; II", "Triflate &gt; mesylate &gt; acetate &gt; methoxide (strength of the conjugate acid)."],
        ["38", "(C)  IV &gt; III &gt; II &gt; I", "Wurtz rate follows C–X bond weakness and polarisability: I &gt; Br &gt; Cl &gt; F."],
        ["39", "(C)", "NBS brominates the allylic position of the tetrasubstituted alkene; Na/ether couples the allylic radical sites (Wurtz)."],
        ["40", "(C)  III &gt; II &gt; I", "Allylic radical substitution: the more substituted the allylic C–H, the weaker the bond and the more stable the radical."],
        ["41", "(B)", "Bromine is highly selective: it abstracts the tertiary H."],
        ["42", "(C)", "The substituted cyclohexane has different kinds of hydrogen and gives more than one monochloride."],
        ["43", "(B)", "The alkyl radical is trigonal planar (sp<sup>2</sup>), and that is why chlorination of 2-chloropentane gives 2,3-dichloropentane as a stereoisomer mixture."],
        ["44", "(A)", "Neopentane has only one kind of hydrogen."],
        ["45", "(A)", "2-Bromo-2-methylbutane: the tertiary radical."],
        ["46", "(C)", "Intramolecular Wurtz coupling gives bicyclobutane."],
        ["47", "(A)  II &lt; I &lt; III", "C–D is stronger than C–H (primary kinetic isotope effect), so CD<sub>3</sub>CD<sub>3</sub> is slowest; neopentane (12 primary H) reacts fastest per molecule."],
        ["48", "(B, D) ‡", "NBS gives the allylic bromide; HBr adds to give the dibromide. The key lists B and D."],
        ["49", "(C)", "Kolbe electrolysis of a succinate gives an alkene; 2,3-dimethylsuccinate gives 2-butene."],
        ["50", "(B)", "The carboxylate is consumed and hydroxide forms at the cathode: pH increases."],
        ["51", "(B)", "Chlorine is unselective: 9 primary H and 1 tertiary H (reactivity about 1 : 4) give mostly isobutyl chloride."],
        ["52", "(A)  8", "Methylcyclopentane gives 4 monochlorides and isopentane gives 4 (without stereoisomers): X + Y = 8."],
        ["53", "(B)  9 ‡", "NBS on 1-methylcyclohexene: allylic substitution at three allylic positions with rearranged radicals; the key counts nine."],
    ])

    tab("5G.2  Exercise II-A (multiple correct, Q1–Q18)", [
        ["1", "(C)", "Isopentane (2-methylbutane) has four kinds of hydrogen: four monochlorides."],
        ["2", "(A, B)", "HI adds to the double bond and the alkyl bromide is displaced via the bromonium-type neighbour; only the products that retain the label pattern in A and B form."],
        ["3", "(A, B, D)", "At 500 °C, chlorination of 1-butene is allylic radical substitution: four products, two of them chiral; the chiral one cannot be made by HCl addition (which would put Cl on the other carbon)."],
        ["4", "(A, C, D)", "NBS is an allylic brominating agent; 1-methylcyclopentene has seven allylic H; nine allylic bromides in total; the number of fractions is not six."],
        ["5", "(B, D)", "Wurtz works well for coupling two identical primary-type halides: B and D are symmetric products."],
        ["6", "(A, B)", "HCl adds to 2,4-hexadiene to give 4-chloro-2-hexene (1,2-adduct) and 2-chloro-3-hexene (the other 1,2-/1,4-adducts)."],
        ["7", "(A, B, C, D)", "All four naming statements are correct."],
        ["8", "(B, C, D)", "Nucleophilicity statements: excluded from your syllabus list (see the note at the top)."],
        ["9", "(A, D)", "Diastereomeric pairs result in (A) bromination of the cyclohexene and (D) radical addition to the optically pure alkene."],
        ["10", "(A, B)", "HBr adds to the quinone-methide-type diene to give the benzylic-type bromides of A and B."],
        ["11", "(A, C)", "Acid-catalysed monoetherisation (1 equivalent) gives two optically active products (diastereomers), a resolvable mixture."],
        ["12", "(A, B, D)", "The tertiary cation from the allyl-substituted phenol can lose H (A), add water (B) or be trapped by the OH to form the dihydrobenzofuran (D)."],
        ["13", "(B)", "The spirocyclic cation undergoes ring expansion by a 1,2-alkyl shift and loses H to give the aromatic tetralin-type product."],
        ["14", "(C)", "Pinacol-type coupling of the diketone (Mg) followed by acid: pinacol rearrangement with ring contraction to the spiro ketone."],
        ["15", "(A, B, C, D)", "All four are true (cyclopropane opens with Br<sub>2</sub>; bromination more selective than chlorination; hindered phenoxyl radical does not dimerise; the benzylic radical forms faster with Ar = Ph than with p-nitrophenyl)."],
        ["16", "(B)  4", "Hydrocarbon major products: Wurtz coupling, Kolbe electrolysis, Zn dehalogenation, and hydroboration–protonolysis give hydrocarbons or alkenes as counted by the key; Hg(OAc)<sub>2</sub> and Br<sub>2</sub> do not. ‡"],
        ["17", "(A, B, C)", "Transannular Wurtz coupling gives a bicyclic hydrocarbon with a double bond that shows geometrical isomerism; no carbocation is involved."],
        ["18", "(A, C)", "BrCCl<sub>3</sub> adds by a radical chain: CCl<sub>3</sub>• adds to the terminal carbon of styrene, giving the benzylic radical, which abstracts Br: a mixture of enantiomers."],
    ])

    tab("5G.3  Exercise II-B (Q1–Q13)", [
        ["1", "(B)", "HBr is the one that shows the peroxide effect because both chain-propagation steps are exothermic; ‘stronger acid’ is true but is not the reason."],
        ["2", "A–S,T; B–P,S,T; C–U; D–Q; E–T,U", "Counting the further chlorination products, with chirality."],
        ["3", "A–R; B–Q,S; C–P,Q; D–Q,S", "Carbocation: dehydration of alcohols; carbanion: Wurtz and soda-lime decarboxylation; free radical: Kolbe and Wurtz (radical mechanism in the key); octet complete in one of the intermediates (Wurtz, soda-lime)."],
        ["4", "A–P; B–P; C–Q; D–R", "Matching to the energy profiles with one, two, three rearrangement steps (the number of carbocation minima)."],
        ["5", "1-chloro-3-methylbutane", "Isopentane is formed by hydrolysis of R–Li and 2,7-dimethyloctane by Wurtz coupling: R = (CH<sub>3</sub>)<sub>2</sub>CHCH<sub>2</sub>CH<sub>2</sub>–."],
        ["6", "neopentyl chloride", "Reduction gives neopentane (C<sub>5</sub>) and Wurtz coupling gives 2,2,5,5-tetramethylhexane."],
        ["7", "HBr only", "For HBr both propagation steps are exothermic (−25.1 and −50.2 kJ mol<sup>−1</sup>); for HCl the second step is endothermic (+12.6); for HI the first step is endothermic (+46). So only HBr sustains the chain."],
        ["8", "8 products", "Isohexane (2-methylpentane): 1-chloro-2-methylpentane (2 enantiomers), 2-chloro-2-methylpentane (1), 3-chloro-2-methylpentane (2), 4-chloro-2-methylpentane (2) and 1-chloro-4-methylpentane (1)."],
        ["9", "see below", "(A) 1-bromo-1-phenylpropane (benzylic cation); (B) 2-iodo-2-methylbutane; (C) trans-1-bromo-2-methylcyclohexane (anti-Markovnikov, radical); (D) the tertiary chloride (Markovnikov)."],
        ["10", "A = trans-2-butene; B = 2-bromobutane", "0.7 g per 2.0 g of Br<sub>2</sub> (0.0125 mol) gives M = 56 (C<sub>4</sub>H<sub>8</sub>); the dibromide is non-resolvable (meso, from the trans alkene); both HBr paths give the same 2-bromobutane because the alkene is symmetric."],
        ["11", "(a) tertiary chloride; (b) trans-dibromides; (c) dichloride", "(a) Markovnikov addition gives the tertiary chloride; (b) anti addition of Br<sub>2</sub> to the ring gives two diastereomeric trans-dibromides; (c) Cl<sub>2</sub>/CS<sub>2</sub> gives the vicinal dichloride as racemic diastereomers. ‡"],
        ["12", "reasoning", "In CH≡C–CH<sub>2</sub>–CH=CH<sub>2</sub> protonation of the alkene gives a secondary cation. In CH≡C–CH=CH<sub>2</sub> protonation of the alkene end would give a cation next to an alkyne that is destabilised, so the terminal alkyne carbon is protonated to a vinyl cation conjugated with the vinyl group (an allyl-like cation) and bromide adds at the internal carbon: 2-bromo-1,3-butadiene."],
        ["13", "A = 2,2-; B = 1,3-; C = 1,2-; D = 1,1-dichloropropane", "Further chlorination: 2,2- gives one trichloride; 1,3- gives two; 1,1- and 1,2- give three each. The optically active one is 1,2-dichloropropane (chiral), whose 1,1,2-trichloride is chiral and the other two are not."],
    ])

    tab("5G.4  JEE-Main and JEE-Advanced (objective)", [
        ["M1", "(3)", "Cl<sup>+</sup> (from Cl<sub>2</sub>) adds first, giving the intermediate CH<sub>3</sub>–CH<sup>+</sup>–CH<sub>2</sub>Cl, which water attacks."],
        ["M2", "(4)", "HBr with peroxide on 3-methyl-2-pentene gives the anti-Markovnikov bromide with two stereocentres: four stereoisomers."],
        ["M3", "—", "Nucleophilicity order: excluded from your syllabus list."],
        ["M4", "(2)", "Cl<sub>2</sub>/H<sub>2</sub>O gives the chlorohydrin CH<sub>3</sub>CH(OH)CH<sub>2</sub>Cl."],
        ["M5", "(1)", "Vinyl halides resist substitution; but the reason given (a cation stabilised by π electrons) is wrong, since the vinyl cation is unstable; A is right and R is wrong."],
        ["M6", "(1)", "CF<sub>3</sub>–CH=CH<sub>2</sub> gives the anti-Markovnikov product: the CF<sub>3</sub> group makes the secondary cation very unstable."],
        ["M7", "(4)", "DCl adds Markovnikov to the alkyne to give CH<sub>3</sub>C(Cl)=CHD; DI then adds to give CH<sub>3</sub>C(Cl)(I)CHD<sub>2</sub>."],
        ["M8", "(3) ‡", "The nitrile-stabilised tertiary radical is formed and adds to the terminal alkene carbon."],
        ["M9", "(1)", "Acid-catalysed cyclisation of the diene (geraniol-type) gives the terpineol skeleton."],
        ["M10", "(3)", "Protonation of the cyclopropenone gives the aromatic hydroxycyclopropenyl cation."],
        ["M11", "(3) ‡", "Hydroboration–oxidation gives the alcohol; dilute acid dehydration gives the most substituted (Zaitsev) alkene."],
        ["A1", "(A, C)", "Benzyl chloride from toluene: SO<sub>2</sub>Cl<sub>2</sub> (radical) and Cl<sub>2</sub>/hv; SOCl<sub>2</sub> and NaOCl do not do benzylic chlorination."],
        ["A2", "—", "Nucleophilicity: excluded from your syllabus list."],
        ["A3", "(D)", "One equivalent of HBr on isoprene gives the 1,4-adduct (a trisubstituted alkene) as the major product by the key."],
        ["A4", "(A, B)", "trans-2-butene (i) and cis-2-butene (ii) with Br<sub>2</sub>: anti addition in both; (M, O) and (N, P) are diastereomeric pairs."],
    ])
    B.warn("<b>⚑ Check.</b> The printed key assigns the Main Q3 and Advanced Q2 nucleophilicity items which I did not work. For questions marked ‡ I relied on the key because the drawings did not allow independent verification.")
    return []
