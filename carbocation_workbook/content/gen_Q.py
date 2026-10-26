from .common import *
from .lg import S

PH = "c1ccccc1"


def _stab():
    L = []
    def a(text, items, ans, why):
        L.append((text, S(items) if items else None, ans, why))
    a("Arrange in decreasing stability: (a) CH<sub>3</sub><sup>+</sup>, (b) CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>, (c) (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup>, (d) (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>.",
      [("a", "[CH3+]"), ("b", "C[CH2+]"), ("c", "C[CH+]C"), ("d", "C[C+](C)C")], "d &gt; c &gt; b &gt; a", "Each added alkyl group donates by +I and hyperconjugation (9, 6, 3 and 0 C–H bonds adjacent to C<sup>+</sup>).")
    a("Arrange in decreasing stability: p-methoxybenzyl, p-methylbenzyl, benzyl, p-chlorobenzyl, p-nitrobenzyl cations.",
      [("a", "COc1ccc(cc1)[CH2+]"), ("b", "Cc1ccc(cc1)[CH2+]"), ("c", "[CH2+]c1ccccc1"), ("d", "Clc1ccc(cc1)[CH2+]"), ("e", "[O-][N+](=O)c1ccc(cc1)[CH2+]")], "a &gt; b &gt; c &gt; d &gt; e", "σ<sup>+</sup> constants: OMe −0.78, Me −0.31, H 0, Cl +0.11, NO<sub>2</sub> +0.79. Only the +M donor OMe is strongly stabilising; Cl withdraws by −I more than it donates by +M.")
    a("Arrange in decreasing stability: (a) CH<sub>3</sub><sup>+</sup>, (b) PhCH<sub>2</sub><sup>+</sup>, (c) Ph<sub>2</sub>CH<sup>+</sup>, (d) Ph<sub>3</sub>C<sup>+</sup>.",
      [("a", "[CH3+]"), ("b", "[CH2+]c1ccccc1"), ("c", "[CH+](c1ccccc1)c1ccccc1"), ("d", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1")], "d &gt; c &gt; b &gt; a", "Each phenyl adds resonance contributors (4, 7 and 10 for benzyl, benzhydryl, trityl); trityl is twisted but still the most stable.")
    a("Arrange in decreasing stability: tropylium, cyclopropenyl and cyclopentadienyl cations.",
      [("a", "[CH+]1C=CC=CC=C1"), ("b", "[CH+]1C=C1"), ("c", "[CH+]1C=CC=C1")], "a &gt; b &gt; c", "Tropylium (6π) and cyclopropenyl (2π) are aromatic by Hückel; cyclopentadienyl cation (4π) is antiaromatic. Tropylium is the better delocalised of the two aromatic cations.")
    a("Arrange in decreasing stability: Me<sub>2</sub>N<sup>+</sup>=CH<sub>2</sub>, MeO<sup>+</sup>=CH<sub>2</sub>, t-Bu<sup>+</sup>, CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>.",
      [("a", "C[N+](C)=C"), ("b", "C[O+]=C"), ("c", "C[C+](C)C"), ("d", "C[CH2+]")], "a &gt; b &gt; c &gt; d", "The lone pair of N (better donor, less electronegative) delocalises into C<sup>+</sup> better than that of O; both beat alkyl hyperconjugation. These ions have a full octet on every atom.")
    a("Arrange in decreasing stability: CH<sub>2</sub>=CH–CH<sub>2</sub><sup>+</sup>, CH<sub>3</sub>CH=CH–CH<sub>2</sub><sup>+</sup>, (CH<sub>3</sub>)<sub>2</sub>C=CH–CH<sub>2</sub><sup>+</sup>.",
      [("a", "C=C[CH2+]"), ("b", "CC=C[CH2+]"), ("c", "CC(C)=C[CH2+]")], "c &gt; b &gt; a", "Alkyl groups on the allyl termini stabilise the partial positive charge; in c one terminus is tertiary.")
    a("Which is more stable: allyl cation or pentadienyl cation?",
      [("a", "C=C[CH2+]"), ("b", "C=CC=C[CH2+]")], "pentadienyl", "The charge is delocalised over three carbons instead of two (resonance forms 3 versus 2).")
    a("Which is more stable: Ph<sub>2</sub>CH<sup>+</sup> or 9-fluorenyl cation?",
      [("a", "[CH+](c1ccccc1)c1ccccc1"), ("b", "[CH+]1c2ccccc2-c2ccccc12")], "Ph<sub>2</sub>CH<sup>+</sup>", "In the planar fluorenyl cation the central five-membered ring contains 4π electrons (antiaromatic), which destabilises it by many orders of magnitude (solvolysis ≈ 10<sup>6</sup> slower).")
    a("Arrange in decreasing stability: tris(p-methoxyphenyl)methyl, trityl and tris(p-nitrophenyl)methyl cations.",
      None, "(p-MeOC<sub>6</sub>H<sub>4</sub>)<sub>3</sub>C<sup>+</sup> &gt; Ph<sub>3</sub>C<sup>+</sup> &gt; (p-O<sub>2</sub>NC<sub>6</sub>H<sub>4</sub>)<sub>3</sub>C<sup>+</sup>", "p-OMe is a +M donor; p-NO<sub>2</sub> is −M/−I. The tri-anisyl cation is stable enough to be isolated as a salt in dilute acid (pK<sub>R+</sub> ≈ +0.8, versus −6.6 for trityl).")
    a("Arrange in decreasing stability: t-Bu<sup>+</sup>, 1-adamantyl, bicyclo[2.2.2]oct-1-yl and 1-norbornyl cations.",
      [("a", "C[C+](C)C"), ("b", "[C+]12CC3CC(CC(C3)C1)C2"), ("c", "[C+]12CCC(CC1)CC2"), ("d", "[C+]12CCC(CC1)C2")], "a &gt; b &gt; c &gt; d", "A bridgehead cation cannot become planar. The more rigid and the more strained the cage, the worse the cation; solvolysis rates of the bridgehead bromides relative to t-BuBr are ≈ 10<sup>−3</sup>, 10<sup>−6</sup> and 10<sup>−13</sup>.")
    a("Arrange in decreasing ease of S<sub>N</sub>1 ionisation (stability of the cation): cyclopentyl, cyclohexyl, cyclopropyl.",
      [("a", "[CH+]1CCCC1"), ("b", "[CH+]1CCCCC1"), ("c", "[CH+]1CC1")], "a &gt; b &gt; c", "Cyclopentyl relieves eclipsing strain on going to sp<sup>2</sup>; cyclohexyl gains little (and has I-strain); cyclopropyl cation would need a 60° angle and opens instead (disrotatory) to an allyl cation.")
    a("Which is more stable: Me<sub>3</sub>SiCH<sub>2</sub>CH<sub>2</sub><sup>+</sup> or CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub><sup>+</sup>?",
      [("a", "C[Si](C)(C)C[CH2+]"), ("b", "CC[CH2+]")], "the β-silyl cation", "The β-silicon effect: the C–Si σ bond hyperconjugates strongly with the empty p orbital (≈ 38 kcal mol<sup>−1</sup> stabilisation; bridged silyl-ethyl ion).")
    a("Arrange in decreasing stability: (a) (CH<sub>3</sub>)<sub>2</sub>C(cyclopropyl)<sup>+</sup>, (b) cumyl cation (PhC<sup>+</sup>(CH<sub>3</sub>)<sub>2</sub>), (c) t-Bu<sup>+</sup>.",
      [("a", "C[C+](C)C1CC1"), ("b", "C[C+](C)c1ccccc1"), ("c", "C[C+](C)C")], "a &gt; b &gt; c", "The bent σ bonds of cyclopropane overlap very well with the empty p orbital (bisected geometry); cyclopropyl is a better cation stabiliser than phenyl, which is a better one than methyl.")
    a("Count the cationic resonance contributors (ignore Kekulé variants) for (a) benzyl, (b) Ph<sub>2</sub>CH<sup>+</sup>, (c) Ph<sub>3</sub>C<sup>+</sup>.",
      None, "(a) 4; (b) 7; (c) 10", "One structure with the charge on the exocyclic carbon plus three (ortho, ortho′, para) per phenyl ring: 1 + 3n.")
    a("Predict the product of 3-methylbut-1-ene + HBr (no peroxide) and name the cation sequence.",
      [("", "C=CC(C)C"), ("→", "CC(C)(Br)CC")], "2-bromo-2-methylbutane; 2° cation → 1,2-H shift → 3° cation", "Protonation gives the secondary cation (CH<sub>3</sub>)<sub>2</sub>CH–C<sup>+</sup>HCH<sub>3</sub>; a hydride shift from the tertiary C–H gives the tertiary cation, which is captured by Br<sup>−</sup>. Some 2-bromo-3-methylbutane is formed from the unrearranged ion.")
    a("Predict the major product of 3,3-dimethylbut-1-ene + HCl.",
      [("", "C=CC(C)(C)C"), ("→", "CC(C)(Cl)C(C)C")], "2-chloro-2,3-dimethylbutane", "The secondary cation rearranges by 1,2-methyl shift to the tertiary 2,3-dimethylbut-2-yl cation; minor product 2-chloro-3,3-dimethylbutane from direct capture.")
    a("Predict the product of neopentyl alcohol (2,2-dimethylpropan-1-ol) + HBr (heat).",
      [("", "CC(C)(C)CO"), ("→", "CCC(C)(C)Br")], "2-bromo-2-methylbutane", "Protonation, loss of water with simultaneous methyl shift (a primary cation is not formed) gives the tert-amyl cation; Br<sup>−</sup> captures it. No neopentyl bromide forms.")
    a("Predict the product of cyclohexylmethanol + HBr, and the cation steps.",
      [("", "OCC1CCCCC1"), ("→", "CC1(Br)CCCCC1")], "1-bromo-1-methylcyclohexane; primary → tertiary by 1,2-H shift", "A hydride moves from the ring carbon to the CH<sub>2</sub><sup>+</sup> (concerted with loss of water), giving the tertiary 1-methylcyclohexyl cation.")
    a("Dehydration of 3-methylbutan-2-ol with H<sub>2</sub>SO<sub>4</sub>: major alkene?",
      [("", "CC(O)C(C)C"), ("→", "CC=C(C)C")], "2-methylbut-2-ene", "Loss of water gives the secondary cation, which takes a hydride from the tertiary carbon to give the tertiary cation; E1 loss of H<sup>+</sup> gives the most substituted alkene (Zaitsev).")
    a("Which is more stable: CH<sub>3</sub>OCH<sub>2</sub><sup>+</sup> or CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>?",
      [("a", "C[O+]=C"), ("b", "C[CH2+]")], "CH<sub>3</sub>OCH<sub>2</sub><sup>+</sup>", "Oxygen lone-pair donation (+M, forming an oxocarbenium ion) outweighs the −I effect of O.")
    a("Which is more stable: t-Bu<sup>+</sup> or neopentyl cation (CH<sub>3</sub>)<sub>3</sub>CCH<sub>2</sub><sup>+</sup>?",
      None, "t-Bu<sup>+</sup>", "Tertiary versus primary; the neopentyl cation rearranges to the tert-amyl cation without barrier.")
    a("Which is more stable: PhCH(CH<sub>3</sub>)<sup>+</sup> or PhCH<sub>2</sub><sup>+</sup>?",
      [("a", "C[CH+]c1ccccc1"), ("b", "[CH2+]c1ccccc1")], "PhCH(CH<sub>3</sub>)<sup>+</sup>", "A secondary benzylic cation has resonance plus an extra alkyl donor.")
    a("Which is more stable: o-methoxybenzyl or m-methoxybenzyl cation?",
      [("a", "COc1ccccc1[CH2+]"), ("b", "COc1cccc(c1)[CH2+]")], "o-methoxybenzyl", "Ortho (like para) OMe donates by resonance directly to the benzylic carbon; at meta only −I operates and the ion is less stable than benzyl.")
    a("Which is more stable: p-methylbenzyl or m-methylbenzyl cation?",
      None, "p-methylbenzyl", "Hyperconjugation and +I of CH<sub>3</sub> act through conjugation at para; at meta only the weak inductive effect acts.")
    a("Arrange in decreasing stability: m-methylbenzyl, benzyl, m-methoxybenzyl, m-chlorobenzyl and m-nitrobenzyl cations.",
      None, "m-CH<sub>3</sub> &gt; H &gt; m-OCH<sub>3</sub> &gt; m-Cl &gt; m-NO<sub>2</sub>", "At meta only inductive effects operate: σ<sup>+</sup><sub>m</sub> = −0.07, 0, +0.05, +0.40, +0.67.")
    a("Arrange in decreasing stability: p-fluorocumyl, cumyl, p-chlorocumyl and p-bromocumyl cations.",
      None, "p-F &gt; H &gt; p-Cl &gt; p-Br", "σ<sup>+</sup><sub>p</sub> = −0.07, 0, +0.11, +0.15. Fluorine is an excellent +M donor through 2p–2p overlap that outweighs its −I; Cl and Br donate poorly (3p/4p overlap).")
    a("Arrange in decreasing stability: (p-MeOC<sub>6</sub>H<sub>4</sub>)<sub>2</sub>CH<sup>+</sup>, Ph<sub>2</sub>CH<sup>+</sup>, (p-O<sub>2</sub>NC<sub>6</sub>H<sub>4</sub>)<sub>2</sub>CH<sup>+</sup>.",
      None, "dianisyl &gt; Ph<sub>2</sub>CH<sup>+</sup> &gt; dinitrophenyl", "Same σ<sup>+</sup> reasoning, doubled.")
    a("Arrange in decreasing stability: tricyclopropylmethyl, dicyclopropylmethyl and cyclopropylmethyl cations.",
      None, "(c-C<sub>3</sub>H<sub>5</sub>)<sub>3</sub>C<sup>+</sup> &gt; (c-C<sub>3</sub>H<sub>5</sub>)<sub>2</sub>CH<sup>+</sup> &gt; c-C<sub>3</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup>", "Each cyclopropyl adds σ-conjugation; the tricyclopropylmethyl cation (pK<sub>R+</sub> ≈ −2.3) is more stable than trityl.")
    a("Rank the arenium (σ-complex) ions formed on nitration of toluene by site of attack: ortho, meta, para.",
      None, "para ≈ ortho &gt; meta", "Attack at o/p puts the positive charge on the carbon bearing CH<sub>3</sub> (a tertiary-like centre stabilised by hyperconjugation); at meta it never does.")
    a("Rank the arenium ions formed on nitration of anisole by site: ortho, meta, para.",
      None, "para ≥ ortho ≫ meta", "At o/p the oxygen lone pair stabilises the charge (an oxocarbenium resonance form with an octet on every atom); at meta it cannot.")
    a("Rank the arenium ions formed on nitration of nitrobenzene by site: ortho, meta, para.",
      None, "meta &gt; ortho ≈ para", "At o/p one resonance form places the positive charge on the carbon bearing the NO<sub>2</sub>, which is strongly destabilising; at meta that never happens.")
    a("Arrange in decreasing stability: Ph–C<sup>+</sup>=CH<sub>2</sub>, CH<sub>3</sub>–C<sup>+</sup>=CH<sub>2</sub>, CH<sub>2</sub>=CH<sup>+</sup>.",
      [("a", "C=[C+]c1ccccc1"), ("b", "C=[C+]C"), ("c", "C=[CH+]")], "a &gt; b &gt; c", "A vinyl cation has an empty p orbital in the plane; an α-aryl group stabilises it by conjugation through the perpendicular ring orientation, an α-alkyl by hyperconjugation.")
    a("Rank the hydride ion affinities (HIA, the energy for R<sup>+</sup> + H<sup>−</sup> → RH) of CH<sub>3</sub><sup>+</sup>, CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>, (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup>, (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>; which is lowest?",
      None, "HIA: CH<sub>3</sub><sup>+</sup> (312) &gt; C<sub>2</sub>H<sub>5</sub><sup>+</sup> (270) &gt; i-Pr<sup>+</sup> (249) &gt; t-Bu<sup>+</sup> (231 kcal mol<sup>−1</sup>); lowest is t-Bu<sup>+</sup>", "The more stable the cation, the less energy is released on taking up H<sup>−</sup>. Gas-phase values, recalled and approximate.")
    a("Is the benzyl cation more stable than the tert-butyl cation?",
      None, "⚑ it depends on the phase and the source", "Gas-phase HIA: benzyl 238 versus t-Bu 231 kcal mol<sup>−1</sup>, so t-Bu<sup>+</sup> is more stable in the gas phase. In solution many data and most JEE keys place benzyl (resonance) at or above a tertiary alkyl cation; follow the convention of your paper.")
    a("Why does 2-exo-norbornyl brosylate solvolyse ≈ 350 times faster than the endo isomer, and what is the product?",
      None, "σ-participation by the C1–C6 bond from the back side of the leaving group (only possible for exo)", "The C1–C6 bond is anti to the exo leaving group and helps displace it, giving the bridged non-classical 2-norbornyl cation (the product is racemic exo-norbornyl derivative). The endo leaving group has no anti σ bond, so ionisation is a normal secondary one.")
    a("State true or false: (i) CH<sub>3</sub><sup>+</sup> has 8 valence electrons; (ii) the vinyl cation carbon is sp-hybridised; (iii) all carbocations are planar; (iv) the 1-adamantyl cation is pyramidal at C<sup>+</sup> (not planar).",
      None, "(i) false (6); (ii) true; (iii) false; (iv) true", "A carbocation carbon has six valence electrons. The vinyl cation is linear (sp). Bridgehead and strained cations such as 1-adamantyl and 1-norbornyl cannot be planar.")
    a("Count the hyperconjugative (no-bond) structures for (a) t-Bu<sup>+</sup>, (b) i-Pr<sup>+</sup>, (c) CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>, (d) CH<sub>3</sub>CH<sub>2</sub>C<sup>+</sup>(CH<sub>3</sub>)<sub>2</sub>.",
      None, "(a) 9; (b) 6; (c) 3; (d) 8", "Count the C–H bonds on the carbons adjacent to C<sup>+</sup>: 3 × 3, 2 × 3, 3, and 2 × 3 + 2. ⚑ the same count ranks tert-amyl below t-Bu, whereas gas-phase data show tert-amyl more stable (polarisability) — JEE keys follow the count.")
    a("Arrange in decreasing stability: cinnamyl cation PhCH=CHCH<sub>2</sub><sup>+</sup>, allyl cation, and CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub><sup>+</sup>.",
      [("a", "[CH2+]C=Cc1ccccc1"), ("b", "C=C[CH2+]"), ("c", "CC[CH2+]")], "a &gt; b &gt; c", "The phenyl ring extends the delocalisation (charge shared by C-1, C-3 and the ring o/p carbons).")
    a("Which is more stable: α-methoxy tertiary (CH<sub>3</sub>)<sub>2</sub>C<sup>+</sup>–OCH<sub>3</sub> or t-Bu<sup>+</sup>?",
      [("a", "CC(C)=[O+]C"), ("b", "C[C+](C)C")], "(CH<sub>3</sub>)<sub>2</sub>C=O<sup>+</sup>CH<sub>3</sub>", "Oxygen donates a lone pair (octet on all atoms), a larger effect than the three alkyl groups.")
    a("Arrange in decreasing stability: CH<sub>2</sub>=CH–CH<sub>2</sub><sup>+</sup>, cyclopropylcarbinyl and benzyl cations (⚑ source-dependent).",
      None, "⚑ benzyl &gt; cyclopropylcarbinyl &gt; allyl (most JEE keys); gas-phase data put allyl lowest, benzyl and cyclopropylcarbinyl close", "Resonance structures: benzyl 4, allyl 2; cyclopropylcarbinyl is stabilised by σ-conjugation of the bent C–C bonds. Say which convention you follow.")
    a("Which cation is formed first from 2-methylbutan-1-ol with HBr, and what is the final product?",
      [("", "OCC(C)CC"), ("→", "CCC(C)(C)Br")], "2-bromo-2-methylbutane", "A primary cation is not formed; hydride shift is concerted with loss of water, giving the tertiary tert-amyl cation.")
    a("Which of these cations rearranges, and to what? (a) (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>, (b) (CH<sub>3</sub>)<sub>3</sub>CCH<sup>+</sup>CH<sub>3</sub>, (c) (CH<sub>3</sub>)<sub>2</sub>CHCH<sup>+</sup>CH<sub>3</sub>.",
      None, "(b) → methyl shift to 2,3-dimethylbut-2-yl; (c) → hydride shift to 2-methylbut-2-yl (3°)", "(a) is already the most stable alkyl cation. In (b) the adjacent quaternary carbon passes a methyl to give a tertiary cation; in (c) a hydride is passed from the tertiary C–H.")
    a("State the order of stability for the cations formed by protonation of CH<sub>2</sub>=C(CH<sub>3</sub>)<sub>2</sub>, CH<sub>2</sub>=CH–CH<sub>3</sub>, CH<sub>2</sub>=CH<sub>2</sub> (the more stable cation forms faster).",
      None, "t-Bu<sup>+</sup> (from isobutene) &gt; i-Pr<sup>+</sup> (propene) &gt; ethyl (ethene)", "Rate of acid-catalysed hydration follows the stability of the cation; isobutene is hydrated ≈ 10<sup>6</sup> faster than propene.")
    a("Why are carbocations adjacent to a carbonyl group (α-keto cations) so unstable?",
      None, "the C=O is an electron-withdrawing group (−I and −M) next to an electron-deficient carbon", "The carbonyl carbon is already positively polarised, and the oxygen lone pairs lie in the nodal plane relative to the empty p orbital; so there is no stabilisation and strong destabilisation. α-Halo-ketones therefore show very slow S<sub>N</sub>1.")
    a("Rank the solvolysis rates (S<sub>N</sub>1) of: t-BuCl, i-PrCl, CH<sub>3</sub>CH<sub>2</sub>Cl, CH<sub>3</sub>Cl in 80 % aqueous ethanol.",
      None, "t-BuCl &gt; i-PrCl &gt; EtCl ≳ MeCl (≈ 10<sup>8</sup> : 45 : 1 : 1)", "Rates follow cation stability; EtCl and MeCl react by S<sub>N</sub>2 with solvent in practice.")
    a("Which cation is formed from isopropylbenzene (cumene) with H<sub>3</sub>PO<sub>4</sub> and propene in the industrial process, and which is it that attacks benzene?",
      None, "the isopropyl cation (from propene + H<sup>+</sup>) attacks benzene (Friedel–Crafts alkylation)", "Protonation of propene gives the secondary isopropyl cation (Markovnikov), the electrophile; no rearrangement is possible since a hydride shift would give a primary cation.")
    a("In the Friedel–Crafts alkylation of benzene with 1-chlorobutane/AlCl<sub>3</sub>, sec-butylbenzene is the major product. Explain.",
      [("", "CCCCCl"), ("→", "CCC(C)c1ccccc1")], "hydride shift from the CH<sub>2</sub>Cl-bound complex gives the secondary cation", "The polarised R–Cl···AlCl<sub>3</sub> complex undergoes a 1,2-hydride shift as chloride leaves, giving the sec-butyl cation, which alkylates benzene faster than the primary complex.")
    a("Order the following by increasing rate of S<sub>N</sub>1 solvolysis: benzyl chloride, allyl chloride, tert-butyl chloride, isopropyl chloride (⚑).",
      None, "⚑ i-PrCl &lt; allyl Cl &lt; t-BuCl ≈ benzyl chloride; commonly accepted order i-PrCl &lt; allyl &lt; benzyl &lt; t-BuCl", "All three cations are well stabilised; allyl and benzyl are resonance-stabilised but primary; tertiary hyperconjugation wins in 80 % ethanol. Check the order your key uses.")
    a("Arrange in decreasing stability: CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>, CH<sub>2</sub>=CH<sup>+</sup>, HC≡C<sup>+</sup>.",
      None, "CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> &gt; CH<sub>2</sub>=CH<sup>+</sup> &gt; HC≡C<sup>+</sup>", "The empty orbital is in an orbital with more s-character in sp<sup>2</sup> and sp cations, which holds the empty orbital's partner electrons less well; the ethynyl cation is far too unstable to form in solution.")
    a("Why does anti-7-norbornenyl tosylate solvolyse ≈ 10<sup>11</sup> times faster than 7-norbornyl tosylate?",
      None, "π-participation by the C2=C3 bond gives a stabilised bridged (homoallylic) cation", "The double bond lies anti to the leaving group and donates its π electrons to C-7 as the tosylate departs. The syn isomer cannot do this and is only slightly faster than the saturated compound.")
    return L


def build(B):
    from . import gen_Q as _self
    B.part("Part 5I", "Fifty Original Carbocation Stability Questions with Reasoned Answers")
    B.p("These are original problems written for this book in the style of JEE Advanced, GATE and CSIR papers; they are not taken from any book. Each answer gives the reason. Where sources disagree the answer is marked ⚑.")
    qs = []
    for i, (t, f, a_, w) in enumerate(_stab(), 1):
        qs.append(Q(f"SQ-{i}", t, f, a_, w))
    B.answers(qs, with_stem=True)

    B.part("Part 6", "Migratory Aptitude: Rules, Reasons and Competing Migrations")
    B.p("<b>Migratory aptitude</b> is the relative tendency of a group to move with its electron pair to an adjacent electron-deficient centre. It is not one fixed order: it depends on what the reaction is, on the stability of the cation that remains, and on stereoelectronics (the migrating bond must lie anti-periplanar to the leaving group, or parallel to the empty p orbital).")
    B.table(["Reaction", "Order of migratory aptitude", "Why"],
        [["Pinacol / Wagner–Meerwein (carbocation)", "H &gt; aryl (electron-rich &gt; Ph &gt; electron-poor) &gt; tertiary alkyl &gt; secondary &gt; primary &gt; CH<sub>3</sub>", "the group that best bridges the 3c–2e transition state; aryl through a phenonium ion; ⚑ H vs aryl depends on conformation and on which cation each shift gives"],
         ["Baeyer–Villiger", "tertiary alkyl &gt; cyclohexyl (secondary) ≈ benzyl ≈ aryl &gt; primary &gt; CH<sub>3</sub>", "the migrating group carries the positive charge in the Criegee intermediate; the better able to stabilise it, the better it migrates"],
         ["Beckmann", "group <i>anti</i> to the leaving group on N (stereospecific)", "the anti group moves as water leaves; if the oxime isomerises, the more stable E isomer decides"],
         ["Hofmann / Curtius / Lossen", "tertiary &gt; secondary ≈ aryl &gt; primary &gt; CH<sub>3</sub>", "migration with retention to an electron-deficient N (Part 11)"],
         ["Radical", "aryl, vinyl, acyl only; not H or alkyl", "needs a stabilised bridged radical (Part 9)"],
         ["Carbanion", "aryl (Grovenstein–Zimmerman) only", "needs an accessible spiro intermediate (Part 8)"]],
        widths=[22, 44, 34])
    B.ul(["<b>Stereochemistry:</b> the migrating group moves with retention of configuration; its origin carbon is never inverted (the group stays bonded to both carbons in the transition state).",
          "<b>Ring strain:</b> migration that expands a cyclobutane or cyclopropane ring is strongly favoured (strain relief ≈ 26 kcal mol<sup>−1</sup>) and can override the usual order; expansion from five- to six-membered rings is favoured when it also converts a secondary into a tertiary cation.",
          "<b>Conformation:</b> in cyclohexane diols the group anti-periplanar to the leaving group migrates (axial–axial), which can contradict the intrinsic order (see 7.14, 7.15).",
          "<b>In a cascade</b> the question to ask is always: <i>which shift gives the most stable new cation, and is the migrating bond aligned?</i>"])
    B.h2("6.1  Fifteen competing migrations: solved")
    qs2 = []
    def q(n, t, f, a_, w):
        qs2.append(Q(f"MA-{n}", t, f, a_, w))
    q(1, "2,3-Diphenylbutane-2,3-diol is treated with H<sub>2</sub>SO<sub>4</sub>. Which group migrates, and what is the product?",
      S([("", "CC(O)(c1ccccc1)C(C)(O)c1ccccc1"), ("→", "CC(=O)C(C)(c1ccccc1)c1ccccc1")]), "phenyl migrates: 3,3-diphenylbutan-2-one", "Ionisation gives a tertiary benzylic cation; of CH<sub>3</sub> and Ph on the neighbouring carbon, Ph migrates (aryl ≫ methyl) through a phenonium ion; the other OH becomes C=O.")
    q(2, "Predict the product of 1,1-diphenylethane-1,2-diol with acid.",
      S([("", "OCC(O)(c1ccccc1)c1ccccc1"), ("→", "O=CC(c1ccccc1)c1ccccc1")]), "diphenylacetaldehyde", "The OH on the diaryl carbon ionises (diarylmethyl cation); H on the adjacent CH<sub>2</sub>OH migrates, leaving a protonated aldehyde. The reverse (ionise the primary OH) is not competitive.")
    q(3, "Predict the product of 2-methylpropane-1,2-diol with acid.",
      S([("", "CC(C)(O)CO"), ("→", "CC(C)C=O")]), "isobutyraldehyde (2-methylpropanal)", "The tertiary OH ionises; H migrates from CH<sub>2</sub>OH to the tertiary cation, giving the protonated aldehyde (H migrates in preference to any alkyl).")
    q(4, "Predict the product of 1-phenylethane-1,2-diol with acid.",
      S([("", "OCC(O)c1ccccc1"), ("→", "O=CCc1ccccc1")]), "phenylacetaldehyde", "The benzylic OH ionises; H moves from the neighbouring CH<sub>2</sub>OH.")
    q(5, "Predict the product of 1-methylcyclohexane-1,2-diol with acid.",
      S([("", "CC1(O)CCCCC1O"), ("→", "CC1CCCCC1=O")]), "2-methylcyclohexanone", "The tertiary OH ionises; the hydride on C-2 migrates to C-1, leaving the protonated 2-methylcyclohexanone.")
    q(6, "2-Amino-1,1-diphenylethanol is treated with HNO<sub>2</sub>. Give the product.",
      S([("", "NCC(O)(c1ccccc1)c1ccccc1"), ("→", "O=C(Cc1ccccc1)c1ccccc1")]), "deoxybenzoin (PhCOCH<sub>2</sub>Ph, 1,2-diphenylethanone)", "The primary amine gives the diazonium; a phenyl group migrates from the carbinol carbon to CH<sub>2</sub> as N<sub>2</sub> leaves, leaving an oxocarbenium ion that loses H<sup>+</sup> (semipinacol rearrangement).")
    q(7, "1-(Aminomethyl)cyclohexanol is treated with HNO<sub>2</sub>. Give the product.",
      S([("", "NCC1(O)CCCCC1"), ("→", "O=C1CCCCCC1")]), "cycloheptanone", "(Tiffeneau–Demjanov) a ring C–C bond migrates to the CH<sub>2</sub> carbon as N<sub>2</sub> leaves; the ring is enlarged by one carbon and the carbinol carbon becomes C=O.")
    q(8, "Which group migrates in the Baeyer–Villiger oxidation of (a) pinacolone, (b) acetophenone, (c) cyclohexyl methyl ketone, (d) benzyl methyl ketone?",
      None, "(a) t-butyl; (b) phenyl; (c) cyclohexyl; (d) benzyl", "In each case the group other than methyl migrates because it better stabilises the positive charge in the Criegee intermediate: tert-butyl acetate, phenyl acetate, cyclohexyl acetate, benzyl acetate respectively.")
    q(9, "Cyclobutylmethanol is treated with HBr. Which skeleton is the major product, and why?",
      S([("", "OCC1CCC1"), ("→", "BrC1CCCC1")]), "cyclopentyl bromide (ring expansion)", "A ring C–C bond migrates as water leaves, enlarging cyclobutane to cyclopentane (strain relief) and converting a primary into a secondary cation; Br<sup>−</sup> captures it.")
    q(10, "Why does the 2,2-dimethylcyclohexyl cation rearrange to the 1,2-dimethylcyclohexyl cation instead of undergoing ring contraction?",
      None, "methyl shift gives a tertiary cation with no strain change", "A methyl shift converts a secondary cation to a tertiary one without altering ring strain; a ring-contraction would give a primary exocyclic cation.")
    q(11, "Which group is lost last in the pinacol rearrangement of benzopinacol, and why does a phenyl migrate rather than a hydroxyl or other group?",
      None, "the product is triphenylacetophenone; phenyl migrates because OH cannot, and Ph is the only migrating candidate", "After ionisation of one C–OH the neighbouring carbon carries OH and two phenyl groups; a phenyl migrates (through a phenonium ion) to the cation, leaving the oxocarbenium that loses H<sup>+</sup>.")
    q(12, "In the dienone–phenol rearrangement of 4-methyl-4-phenylcyclohexa-2,5-dienone, which group migrates?",
      None, "phenyl (to give 3-methyl-4-phenylphenol)", "Migrating aptitude aryl &gt; methyl in the protonated dienone; the shift gives the cation that rearomatises by loss of H<sup>+</sup>.")
    q(13, "Predict the product of 3,3-dimethylbutan-2-ol with H<sub>2</sub>SO<sub>4</sub> (E1) and name the migrating group.",
      S([("", "CC(O)C(C)(C)C"), ("→", "CC(C)=C(C)C")]), "2,3-dimethylbut-2-ene; methyl migrates", "The secondary cation takes a methyl from the quaternary carbon to give the tertiary 2,3-dimethylbut-2-yl cation; E1 loss of H<sup>+</sup> gives the tetrasubstituted alkene (the most stable).")
    q(14, "2-Methyl-2-(hydroxymethyl)oxirane, or more simply 2,2-dimethyloxirane, is treated with a trace of acid. Give the product.",
      S([("", "CC1(C)CO1"), ("→", "CC(C)C=O")]), "isobutyraldehyde (Meinwald rearrangement)", "Protonation opens the epoxide at the tertiary carbon; hydride shifts from CH<sub>2</sub> to the tertiary cation, leaving a protonated aldehyde.")
    q(15, "(E)-Acetophenone oxime is treated with PCl<sub>5</sub>. Which group migrates and what is the product?",
      S([("", "C/C(=N\\O)c1ccccc1"), ("→", "CC(=O)Nc1ccccc1")]), "phenyl (it is anti to OH): acetanilide", "In the E isomer the OH is trans to the higher-priority phenyl group, so phenyl is anti to the leaving group and migrates (nitrilium ion, then water). The Z isomer would give N-methylbenzamide. Always apply the anti rule rather than a fixed order.")
    B.h2("6.2  Ten questions on migratory aptitude")
    q(16, "Arrange in decreasing migratory aptitude in a pinacol rearrangement: CH<sub>3</sub>, H, Ph, (CH<sub>3</sub>)<sub>3</sub>C, p-CH<sub>3</sub>OC<sub>6</sub>H<sub>4</sub>.",
      None, "H &gt; p-MeOC<sub>6</sub>H<sub>4</sub> &gt; Ph &gt; t-Bu &gt; CH<sub>3</sub> (⚑ H vs aryl)", "Groups that bridge well migrate best; an electron-rich aryl bridges through a stabilised phenonium ion. Some sources put aryl above hydride when the cation is unconstrained.")
    q(17, "Arrange the aryl groups in decreasing migratory aptitude: p-anisyl, phenyl, p-chlorophenyl, p-nitrophenyl.",
      None, "p-anisyl &gt; phenyl &gt; p-chlorophenyl &gt; p-nitrophenyl", "The phenonium ion is a cationic spiro intermediate; donors stabilise it.")
    q(18, "In the Baeyer–Villiger oxidation of methyl vinyl ketone-like cyclic ketone 2-methylcyclohexanone, which C–C bond migrates?",
      S([("", "CC1CCCCC1=O"), ("→", "CC1CCCCC(=O)O1")]), "the more substituted (secondary C-2) carbon: 7-methyloxepan-2-one", "The more substituted carbon migrates (secondary &gt; primary), so oxygen is inserted between the carbonyl carbon and C-2, giving the 7-methyl lactone.")
    q(19, "Does hydride shift to a cation occur with retention or inversion at the migrating carbon, and why does a chiral migrating alkyl group retain its configuration?",
      None, "retention", "The migrating group stays bonded to both carbons in the three-centre two-electron transition state, so its configuration is never lost.")
    q(20, "Why does the 1,2-methyl shift of the neopentyl cation not require a free primary cation?",
      None, "the shift is concerted with departure of the leaving group", "A primary alkyl cation is too high in energy; anchimeric assistance by the methyl group brings the cation directly to the tertiary position.")
    q(21, "A cyclobutylcarbinyl cation can undergo ring expansion or hydride shift. Which is preferred when both give a secondary cation?",
      None, "ring expansion", "Expansion relieves about 20 kcal mol<sup>−1</sup> of strain; hydride shift would retain the strained ring.")
    q(22, "State why aryl groups migrate faster than alkyl groups through a bridged ion in both the pinacol and Baeyer–Villiger rearrangements.",
      None, "aryl π electrons give a stabilised bridged (phenonium or π-complex) transition state", "The ring can delocalise charge in the spiro intermediate, lowering the barrier.")
    q(23, "HO–C(CH<sub>3</sub>)<sub>2</sub>–C(OH)Ph<sub>2</sub> is treated with acid. Which OH leaves, and what is the major product?",
      S([("", "CC(C)(O)C(O)(c1ccccc1)c1ccccc1"), ("→", "CC(=O)C(C)(c1ccccc1)c1ccccc1")]), "the OH on the diaryl carbon leaves; 3,3-diphenylbutan-2-one", "Loss of OH from the diphenylcarbinol carbon gives the very stable Ph<sub>2</sub>C<sup>+</sup>, so the cation stability decides which OH leaves (not the migratory aptitude). A methyl then migrates from the neighbouring carbon. The alternative (ionise the dimethyl OH, phenyl migrates) gives PhCO–C(CH<sub>3</sub>)<sub>2</sub>Ph and is minor.")
    q(24, "Which has the greater migratory aptitude in Hofmann rearrangement: n-propyl or isopropyl?",
      None, "isopropyl", "Secondary alkyl groups migrate better than primary (more able to carry positive charge in the transition state).")
    q(25, "True or false: the order of migratory aptitude is the same in every rearrangement.",
      None, "false", "It depends on the mechanism: in a carbocation shift H and aryl lead, in Baeyer–Villiger tertiary alkyl leads, in the Beckmann rearrangement stereochemistry (anti) rather than aptitude decides.")
    B.answers(qs2, with_stem=True)
    return qs + qs2
