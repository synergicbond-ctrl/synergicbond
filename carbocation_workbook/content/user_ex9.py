from .common import *
from .lg import S


def build(B):
    B.part("Part 5H", "Orders and Rules from Your Lecture Notes (Lessons 1–5, Doubt-Clearing Sessions)")
    B.p("The 12 lecture PDFs are screen captures of handwritten board work. I went through all of their pages; the legible, carbocation-relevant content is collected here as orders and rules. "
        "Board problems whose answers were never written on the page (for example the 'number of shifts' drawings 7–25 of Carbocation-V and the dehydration problems 1–48) are <b>not</b> answered here, because I could not read the structures reliably: "
        "send those pages at higher resolution and I will solve them. Conformational analysis (Lesson 1) and nucleophilicity-in-solvents (Doubt session) are outside your topic list, so they are not reproduced.")
    B.h2("5H.1  Master stability order (Doubt-clearing session)")
    B.fig(S([("1", "[C+](C1CC1)(C1CC1)C1CC1"), ("2", "[CH+]1C=CC=CC=C1"), ("3", "[C+](c1ccccc1)(c1ccccc1)c1ccccc1"), ("4", "[CH+](c1ccccc1)c1ccccc1"), ("5", "C[CH+]c1ccccc1"), ("6", "C[C+](C)C")]),
          "Board order, left to right: tricyclopropylmethyl &gt; tropylium &gt; Ph<sub>3</sub>C<sup>+</sup> &gt; Ph<sub>2</sub>CH<sup>+</sup> &gt; PhCH<sup>+</sup>R &gt; (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup> …")
    B.fig(S([("7", "[CH2+]c1ccccc1"), ("8", "C=C[CH2+]"), ("9", "C[CH+]C"), ("10", "C[CH2+]"), ("11", "[CH3+]"), ("12", "C=[CH+]"), ("13", "[c+]1ccccc1"), ("14", "C#[C+]")]),
          "… &gt; PhCH<sub>2</sub><sup>+</sup> &gt; allyl ≈ isopropyl &gt; ethyl &gt; methyl &gt; vinyl &gt; phenyl &gt; ethynyl. The cyclopentadienyl cation is written as ‘can’t exist’ (antiaromatic).")
    B.warn("<b>⚑ Check.</b> This board order puts tricyclopropylmethyl <i>above</i> tropylium; the pK<sub>R<sup>+</sup></sub> values in your cation notes (tropylium +4.7, tricyclopropylmethyl −2.3) and the hydride affinity (tropylium 200) put tropylium far above it, so this one position on the board disagrees with the data (Part 5A Q93 and Part 5E use tropylium first). It also ranks t-Bu<sup>+</sup> above benzyl, consistent with Part 5E (hydride affinities 231.9 vs 238) but opposite to the coaching convention used in some other answers. The exact positions of allyl versus isopropyl on the board line are not clearly legible; the HIA table gives isopropyl 249 &lt; allyl 256.")
    B.h2("5H.2  Rearrangement rules from Carbocation-V")
    B.ul(["A rearrangement happens to reach a <b>more stable</b> cation (3° &gt; 2° &gt; 1°) and only if the three-membered cyclic transition state (3c–2e bonding, a <i>1,2-shift</i>) is accessible. It is spontaneous and fast.",
          "<b>Migratory aptitude:</b> H &gt; Ar &gt; R (bond shifted, steric factor and electron donation all matter); for alkyl groups t-Bu &gt; i-Pr &gt; Et &gt; Me; for isotopes H &gt; D &gt; T; among aryl groups p-OCH<sub>3</sub> (+M) &gt; p-CH<sub>3</sub> (+H) &gt; H &gt; p-Cl (−I).",
          "Counting shifts (board examples): CH<sub>3</sub><sup>+</sup>, CH<sub>3</sub>CH<sub>2</sub><sup>+</sup> and (CH<sub>3</sub>)<sub>2</sub>CH<sup>+</sup> → <b>0</b> shifts (nothing more stable is reachable); (CH<sub>3</sub>)<sub>2</sub>CH–CH<sub>2</sub><sup>+</sup> → <b>1</b> (H) giving t-Bu<sup>+</sup>; (CH<sub>3</sub>)<sub>3</sub>C–CH<sub>2</sub><sup>+</sup> → <b>1</b> (Me) giving t-amyl; (CH<sub>3</sub>)<sub>2</sub>CH–CH(CH<sub>3</sub>)–CH<sub>2</sub><sup>+</sup>-type chains → <b>2</b> (H, H) to the tertiary ion."])
    B.fig(S([("1 shift (H)", "CC(C)[CH2+]"), ("→", "C[C+](C)C"), ("1 shift (Me)", "CC(C)(C)[CH2+]"), ("→", "CC[C+](C)C")]),
          "Two of the board counts redrawn: isobutyl → t-butyl (one hydride shift); neopentyl → t-amyl (one methyl shift).")
    B.h2("5H.3  Leaving-group and ionisation rules from Carbocation-IV")
    B.table(["Rule from the board", "Detail"],
        [["Leaving tendency", "∝ stability of the leaving group ∝ stability of the carbocation formed; weaker base = better leaving group"],
         ["Halides", "I<sup>−</sup> &gt; Br<sup>−</sup> &gt; Cl<sup>−</sup> &gt; F<sup>−</sup> (size/polarisability)"],
         ["Oxyanions", "CH<sub>3</sub>O<sup>−</sup> (not a leaving group) &lt; acetate &lt; mesylate &lt; triflate; tosylate &lt; brosylate &lt; nosylate"],
         ["Super leaving groups", "N<sub>2</sub> (from R–N<sub>2</sub><sup>+</sup>, the amine/HNO<sub>2</sub> route) and triflate"],
         ["Conversions the board shows", "R–OH is poor, but R–OH + H<sup>+</sup> → R–OH<sub>2</sub><sup>+</sup> (leaves as H<sub>2</sub>O); R–OH + TsCl/BsCl/AcCl/MsCl/TfCl gives R–OTs etc.; R–NH<sub>2</sub> + H<sup>+</sup> → R–NH<sub>3</sub><sup>+</sup> and R–NH<sub>2</sub> + 2 TsCl → R–NTs<sub>2</sub> (leaves as <sup>−</sup>NTs<sub>2</sub>); ethers need H<sup>+</sup> first; H–OH does not ionise to H<sup>+</sup> + OH<sup>−</sup> (strong base); CH<sub>3</sub>–I does not ionise in water (primary methyl cation); aryl and vinyl halides do not ionise (but ArN<sub>2</sub><sup>+</sup> loses N<sub>2</sub> on heating to give phenol via the unstable aryl cation); R–Cl + AlCl<sub>3</sub>/AlBr<sub>3</sub>/SbCl<sub>5</sub>/AgNO<sub>3</sub> gives R<sup>+</sup> (Lewis acids)"]],
        widths=[28, 72])
    B.h2("5H.4  Reactions of carbocations (Lessons 5 and FR-II)")
    B.table(["Type", "Rule", "Product pattern"],
        [["Combination with a nucleophile", "attack from either face of the planar sp<sup>2</sup> cation", "chiral cation: racemic mixture (2 enantiomers) or two diastereomers if another stereocentre exists"],
         ["Elimination (if a base is present)", "loss of a β-H, Saytzeff (more substituted, more stable alkene, via the more stable transition state) is the major product; Hofmann (less substituted) is the minor", "stability: Saytzeff &gt; Hofmann; for 2-methylbutane-type cations the more substituted alkene is formed by losing the β-H of the more substituted carbon"],
         ["Rearrangement", "see 5H.2 and Part 7.0", "—"]],
        widths=[22, 42, 36])
    B.h2("5H.5  Dehydration of alcohols (Free-Radical III/IV lessons)")
    B.ul(["Conc. H<sub>2</sub>SO<sub>4</sub> or conc. H<sub>3</sub>PO<sub>4</sub>, H<sup>+</sup>/Δ gives the alkene as the major product; ethanol: 180 °C → ethylene (elimination), 140 °C → diethyl ether (substitution), 110 °C → ethyl hydrogen sulfate.",
          "<b>Rate of dehydration ∝ stability of the carbocation formed</b> (slow step): 3° &gt; 2° &gt; 1°. The slow step is the loss of water from the protonated alcohol (rate-determining), so the potential-energy diagram has three transition states and one intermediate (the oxonium ion) before the carbocation.",
          "If both C=C and –OH are present, protonation occurs at the site that gives the more stable carbocation; primary alcohols dehydrate by E2 without a free carbocation, so rearrangement is not really observed for 1° alcohols (the board marks this).",
          "Yield order of the three products from the sec-pentyl cation: the trans-2-alkene (Saytzeff) &gt; the cis-2-alkene &gt; the 1-alkene (Hofmann)."])
    B.h2("5H.6  Pinacol rearrangement rules (Free-Radical IV)")
    B.ul(["vic-Diols (pinacol) with conc. H<sub>2</sub>SO<sub>4</sub> → pinacolone: protonate one OH, lose H<sub>2</sub>O (RDS), 1,2-shift, deprotonate the O-protonated ketone.",
          "Which OH leaves: the one that gives the more stable cation (benzylic/tertiary). Which group migrates: the better migrating group (aryl &gt; H &gt; alkyl on your board; with aryl groups, the more electron-rich). Semipinacol: amino-alcohol + HNO<sub>2</sub> gives the same cation by loss of N<sub>2</sub>.",
          "Worked mechanisms 7.10–7.19 in Part 7.0 cover pinacolone, benzopinacolone, ring expansion/contraction and the dienone–phenol shift."])
    B.h2("5H.7  Electrophiles and nucleophiles (Lesson 2) – the part of your topic list")
    B.table(["Class", "Definition on the board", "Examples"],
        [["Electrophile", "electron-loving; an electron-deficient species, electron acceptor; must have an (exactly or momentarily) vacant orbital", "—"],
         ["Positive electrophile", "carries a + charge", "H<sup>+</sup>, D<sup>+</sup>, T<sup>+</sup>, Cl<sup>+</sup>, Br<sup>+</sup>, I<sup>+</sup>, NO<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, carbocations. <b>Alkali-metal cations (Na<sup>+</sup>, Li<sup>+</sup>, K<sup>+</sup>) are not electrophiles.</b>"],
         ["Neutral incomplete-octet electrophile (Lewis acid)", "electron-deficient atom, no charge", "BH<sub>3</sub>, B<sub>2</sub>H<sub>6</sub>, BF<sub>3</sub>, BCl<sub>3</sub>, AlCl<sub>3</sub>, SbCl<sub>5</sub>, carbenes, nitrenes"],
         ["Complete-octet electrophile", "octet complete, but a polarised bond makes one atom δ+ and open to attack", "carbonyl compounds (C=O), RCOX, RCOOR′, CO<sub>2</sub>, CH<sub>3</sub>–I, Br–Br, Cl–Cl, I–Cl, I–N<sub>3</sub>, HO–Cl, NO–Cl"],
         ["Nucleophile", "nucleus-loving; electron donor; any species with a lone pair or a loose π bond pair", "HO<sup>−</sup>, RO<sup>−</sup>, CN<sup>−</sup>, NH<sub>3</sub>, H<sub>2</sub>O, alkenes, arenes, carbanions"]],
        widths=[22, 38, 40])
    B.p("The board also classifies single-step and multi-step reactions: a single-step reaction goes through one transition state (a pentavalent carbon in the TS) with no intermediate; a multi-step reaction must have at least one intermediate (carbocation, carbanion, free radical) and uses normal tetravalent TS's. Endothermic reactions have ΔH &gt; 0 and the product is less stable; exothermic ones ΔH &lt; 0.")
    B.h2("5H.8  Carbocation structure (Doubt-clearing session)")
    B.table(["Property", "Carbenium ion R<sub>3</sub>C<sup>+</sup>", "Carbonium ion (five-coordinate)"],
        [["Hybridisation / shape", "sp<sup>2</sup>, trigonal planar, bond angle 120°, empty p orbital perpendicular to the plane", "sp<sup>3</sup>d-type description is wrong; it is a 3c–2e bonded species (CH<sub>5</sub><sup>+</sup>)"],
         ["Electron count", "sextet: 3 bond pairs, 0 unpaired electrons, 0 lone pairs; diamagnetic (μ = √(n(n+2)) = 0), spin multiplicity 2S+1 = 1 (singlet)", "complete octet counting the 3c–2e pair; highly unstable and reactive"],
         ["Reactivity", "electrophile (Lewis acid); planar, so a nucleophile attacks from both faces (racemisation)", "—"],
         ["Formation", "R–LG heterolysis; H<sup>+</sup> + CH<sub>2</sub> (carbene) gives CH<sub>3</sub><sup>+</sup>; H<sup>+</sup> + CH<sub>4</sub> gives CH<sub>5</sub><sup>+</sup>; H<sup>+</sup> adds to lone pairs (H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup>, NH<sub>3</sub> → NH<sub>4</sub><sup>+</sup>) but not to NaCl-type ionic species", "protonation of an alkane"]],
        widths=[20, 46, 34])
    return []
