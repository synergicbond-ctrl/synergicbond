from .common import *
from .lg import S

OHm = "[OH-:90]"
EtOm = "[O-:90][CH2:91][CH3:92]"


def theory(B):
    B.h2("8.9  The carbon–metal bond, ion pairs and aggregates: what ‘R<sup>−</sup>’ really is in the flask")
    B.p("A free carbanion is almost never the reacting species. Organometallic ‘carbanions’ are polar covalent compounds, and their reactivity depends on how ionic the C–M bond is and on how the metal is solvated and aggregated. "
        "The Pauling estimate of ionic character, 1 − exp(−¼ Δχ²), with χ(C) = 2.55, shows the trend (values are indicative; real bonds are never fully ionic):")
    B.table(["Bond C–M", "χ(M)", "Δχ", "≈ % ionic", "Reagent behaviour"],
        [["C–K", "0.82", "1.73", "53", "essentially ionic, very reactive (benzylpotassium, KH-generated enolates); insoluble in hydrocarbons"],
         ["C–Na", "0.93", "1.62", "48", "ionic (trityl-sodium, sodium acetylide, Wurtz intermediates); salts"],
         ["C–Li", "0.98", "1.57", "46", "polar covalent, aggregated, soluble in ether/hydrocarbon; RLi are strong bases and nucleophiles"],
         ["C–Mg", "1.31", "1.24", "32", "Grignard reagents: polar covalent; react with C=O, epoxides, CO<sub>2</sub>; mild bases"],
         ["C–Al", "1.61", "0.94", "20", "R<sub>3</sub>Al: electron-deficient, Lewis acidic, bridged dimers"],
         ["C–Zn", "1.65", "0.90", "18", "R<sub>2</sub>Zn, RZnX (Reformatsky): tolerate esters; weak nucleophiles"],
         ["C–Cu", "1.90", "0.65", "10", "R<sub>2</sub>CuLi (Gilman): soft nucleophile, 1,4-addition, S<sub>N</sub>2 on RX"],
         ["C–Hg", "2.00", "0.55", "7", "R<sub>2</sub>Hg: covalent, air-stable, unreactive toward C=O"],
         ["C–B / C–Si / C–Sn", "2.04 / 1.90 / 1.96", "0.5–0.65", "6–10", "covalent; organoboranes and silanes act as carbanion equivalents only after activation (ate complexes, fluoride)"]],
        widths=[16, 14, 10, 12, 48])
    B.ul(["<b>Aggregation.</b> Alkyllithiums exist as clusters held by multicentre C–Li–C bonds: MeLi is a tetramer (Li<sub>4</sub> tetrahedron with a CH<sub>3</sub> over each face) in ether and THF; n-BuLi is a <i>hexamer</i> in hydrocarbons, a tetramer in diethyl ether, and tetramer ⇌ dimer in THF; t-BuLi is a tetramer in hydrocarbons and a dimer/monomer in THF; PhLi is a tetramer in ether and a dimer/monomer in THF (values approximate). Strong donors (THF, TMEDA, HMPA, DMPU) break the aggregates into smaller, more reactive species: n-BuLi in hexane deprotonates slowly but n-BuLi/TMEDA deprotonates benzene.",
          "<b>Grignard reagents</b> are governed by the <b>Schlenk equilibrium</b>, 2 RMgX ⇌ R<sub>2</sub>Mg + MgX<sub>2</sub>, with Mg tetrahedrally coordinated by two ether molecules (RMgX·2Et<sub>2</sub>O). In ether the equilibrium lies on the RMgX side for X = Br, I; dioxane precipitates MgX<sub>2</sub>·dioxane and drives it to R<sub>2</sub>Mg. Formation from RX + Mg proceeds on the metal surface by single-electron transfer (a radical-pair step), which is why Wurtz coupling R–R and radical rearrangements (cyclopropylcarbinyl → homoallyl) are by-products.",
          "<b>Ion pairs.</b> In ethers an enolate or a delocalised carbanion exists as <i>contact</i> ion pairs (cation near the carbanion), <i>solvent-separated</i> ion pairs, or free ions, in order of increasing dissociation. Better cation solvation (Li<sup>+</sup> &lt; Na<sup>+</sup> &lt; K<sup>+</sup> with crown ethers, HMPA, DMSO) gives a ‘naked’, more reactive, less selective anion; this alters rates by factors of 10<sup>3</sup>–10<sup>6</sup> and flips C- versus O-alkylation (8.11).",
          "<b>Base strength is not the same as nucleophilicity at carbon.</b> t-BuLi is the stronger base, but n-BuLi adds to C=O and to alkenes more readily because t-BuLi is hindered. LDA is a strong, hindered, <i>non-nucleophilic</i> base (pK<sub>a</sub> of diisopropylamine ≈ 36)."])
    B.h2("8.10  Quantitative acidity of C–H: scales, equilibria, and the subtle cases")
    B.p("Two scales are in use. The <b>aqueous</b> scale (pK<sub>a</sub> in water, defined below ≈ 14 by the solvent) and the <b>DMSO</b> scale of F. G. Bordwell (up to ≈ 35, free of H-bonding to the anion). The orders agree, but numerical values differ by 2–10 units, so a question that gives numbers from one scale must not be mixed with the other. "
        "The values below are recalled from the literature and should be used for <i>ranking</i>, not as exact data.")
    B.table(["Acid HA", "pK<sub>a</sub> (DMSO)", "pK<sub>a</sub> (water)", "Remark"],
        [["Meldrum’s acid", "7.3", "4.8", "anomalously strong C–H acid: the rigid ring holds the two C=O in the Z (s-cis) arrangement, so both are conjugated and the anion is planar; compare dimedone"],
         ["dimedone", "11.2", "5.2", "cyclic 1,3-diketone (enolises)"],
         ["CH<sub>2</sub>(CN)<sub>2</sub>", "11.1", "11.2", "two nitriles"],
         ["acetylacetone", "13.3", "8.9", "enol-H-bonded, mostly enol (water: more acidic since the enol is the form measured)"],
         ["ethyl acetoacetate", "14.2", "10.7", "β-ketoester"],
         ["CH<sub>3</sub>NO<sub>2</sub>", "17.2", "10.2", "nitronate; the ‘nitroalkane anomaly’ (see below)"],
         ["CH<sub>2</sub>(CO<sub>2</sub>Et)<sub>2</sub>", "16.4", "13", "malonic ester"],
         ["cyclopentadiene", "18.0", "16", "aromatic anion"],
         ["indene", "20.1", "—", "benzo-fused; charge partly on the benzene ring"],
         ["PhCH<sub>2</sub>CN", "21.9", "—", "benzylic + nitrile"],
         ["fluorene", "22.6", "—", "biphenyl-bridged cyclopentadienide"],
         ["acetophenone (CH<sub>3</sub>)", "24.7", "≈ 18", "ketone enolate"],
         ["acetone", "26.5", "19.3", "ketone enolate"],
         ["PhC≡CH", "28.8", "—", "sp C–H"],
         ["PhSO<sub>2</sub>CH<sub>3</sub>", "29.0", "—", "α-sulfonyl carbanion"],
         ["EtOAc (α-H)", "29.5", "25.6", "ester enolate"],
         ["CH<sub>3</sub>CN", "31.3", "≈ 25", "nitrile anion (linear, ketenimine-like)"],
         ["Ph<sub>3</sub>CH", "30.6", "—", "trityl anion (propeller, three rings)"],
         ["Ph<sub>2</sub>CH<sub>2</sub>", "32.2", "—", ""],
         ["CH<sub>3</sub>CON(CH<sub>3</sub>)<sub>2</sub>", "34", "≈ 30", "amide enolate (weakest carbonyl C–H acid)"],
         ["DMSO", "35.1", "—", "dimsyl anion"],
         ["PhCH<sub>3</sub>", "≈ 43", "—", "benzyl anion"],
         ["for comparison: H<sub>2</sub>O, MeOH, NH<sub>3</sub>, Et<sub>2</sub>NH", "31.4, 29.0, 41, ≈ 44", "15.7, 15.5, ≈ 36, ≈ 38", "pK<sub>a</sub> of the conjugate acid of the base used"]],
        widths=[28, 15, 15, 42])
    B.ul(["<b>Reading an equilibrium.</b> For HA + B<sup>−</sup> ⇌ A<sup>−</sup> + HB, log K = pK<sub>a</sub>(HB) − pK<sub>a</sub>(HA). Example (aqueous): acetone (19.3) + EtO<sup>−</sup> (EtOH 15.9) → K = 10<sup>−3.4</sup> ≈ 4 × 10<sup>−4</sup>, so only 0.04 % of acetone is an enolate in 1 M ethoxide, yet this tiny concentration is enough for the aldol to run; with LDA (pK<sub>a</sub> 36), K = 10<sup>+9.5</sup> and deprotonation is quantitative. For the same reason ethyl acetoacetate (10.7) is converted completely to its anion by NaOEt, and this is what drives the Claisen condensation (8.12).",
          "<b>Acid strength of α-C–H in carbonyl compounds</b> falls in the order  aldehyde (≈ 17) &gt; ketone (≈ 19–20) &gt; ester (≈ 25) &gt; nitrile (≈ 25) ≈ amide (≈ 30) because the carbonyl’s ability to accept the charge (electronegativity of the acyl group, competition from the OR or NR<sub>2</sub> lone pair) falls in the same order. In 1,3-dicarbonyls the second acceptor adds ≈ 10 pK units. A 1,3,5-tricarbonyl or a carbon flanked by three EWG (e.g. triacetylmethane, pK<sub>a</sub> ≈ 6; tricyanomethane, ≈ −5) is a strong acid.",
          "<b>Kinetic versus thermodynamic acidity.</b> The thermodynamic acidity measures the stability of the anion; the kinetic acidity measures the rate of removal of H<sup>+</sup>. The two can differ when the anion needs reorganisation. The <b>nitroalkane anomaly</b>: nitromethane is a thermodynamically stronger acid than acetone by ≈ 9 pK units, but its H is removed ≈ 10<sup>5</sup>-fold <i>more slowly</i> than that of acetone relative to the Brønsted line, because in the transition state the carbon has rehybridised and charge delocalisation onto the nitro oxygens lags behind proton transfer. Rates of deprotonation of nitroalkanes are therefore slow, and they give the <i>aci</i>-form (nitronic acid) first.",
          "<b>Hybridisation versus electronegativity.</b> The s-character argument orders HC≡C–H (25), H<sub>2</sub>C=CH–H (44), CH<sub>3</sub>CH<sub>2</sub>–H (50) and even cyclopropane C–H (≈ 46: exocyclic C–H bonds of cyclopropane use ≈ 33 % s orbitals). The same argument explains why HCN (pK<sub>a</sub> 9) is acidic and why alkynyl anions persist.",
          "<b>Substituent effects.</b> Electron-withdrawing groups on an aryl ring acidify benzylic C–H of ArCH<sub>3</sub> and ArCH<sub>2</sub>CN; the effect follows σ<sup>−</sup> (resonance-enhanced) values: p-NO<sub>2</sub> shifts pK<sub>a</sub> of toluene-type C–H by ≈ 10 pK units (4-nitrotoluene ≈ 20 in DMSO versus 43). A twisted nitro group (steric inhibition of resonance) loses most of this: 2,6-dimethyl-4-nitro… series; the ortho effect operates in the same way as for carbocations (Part 4.8), but with opposite sign.",
          "<b>Solvent effects.</b> Protic solvents H-bond to localised, small anions (alkoxides, enolate O) and flatten acidity differences; DMSO and other dipolar aprotic solvents do not, and expose the intrinsic order. Alcohols are 10<sup>4</sup>–10<sup>8</sup> times <i>more</i> acidic relative to water in DMSO than ketones (see H<sub>2</sub>O 31.4 versus acetone 26.5 in DMSO, the reverse of the aqueous order 15.7 &lt; 19.3)."])
    B.h2("8.11  Enolates: formation, regiochemistry, ambident reactivity")
    B.p("An <b>enolate</b> is the conjugate base of a carbonyl compound deprotonated at the α-carbon. It is a resonance hybrid of the carbanion (C<sup>−</sup>–C=O) and the oxy-anion (C=C–O<sup>−</sup>); the O-form carries most of the charge. Enolates are <i>ambident nucleophiles</i> with two reactive sites, O and C.")
    B.table(["Factor", "Favours C-attack (softer site)", "Favours O-attack (harder site)"],
        [["Electrophile (HSAB)", "soft: alkyl iodides/bromides (R–I &gt; R–Br), allylic and benzylic halides, α-halo carbonyls, Michael acceptors, aldehydes (aldol)", "hard: R<sub>3</sub>SiCl, acyl chlorides and anhydrides (acylation), ROTs, ROSO<sub>2</sub>OR, R<sub>3</sub>O<sup>+</sup> (Meerwein salts)"],
         ["Leaving group on R–X", "I<sup>−</sup>, Br<sup>−</sup> (soft)", "OTs, OSO<sub>2</sub>Me, Cl (hard)"],
         ["Solvent", "protic solvents (H-bond the O), non-polar solvents, THF", "dipolar aprotic: HMPA, DMSO, DMF (free the O<sup>−</sup>)"],
         ["Counter-ion", "Li<sup>+</sup> (tight, covalent O–Li, shields O)", "K<sup>+</sup>, Cs<sup>+</sup>, R<sub>4</sub>N<sup>+</sup>, crown-ether-complexed K<sup>+</sup> (naked O)"],
         ["Thermodynamics", "C-alkylation gives a C–C bond: the stable (thermodynamic) product", "O-alkylation is faster for hard electrophiles (kinetic) and reversible with allyl systems"]],
        widths=[22, 39, 39])
    B.h3("Regioselectivity: kinetic and thermodynamic enolates")
    B.table(["", "Kinetic enolate", "Thermodynamic enolate"],
        [["Conditions", "LDA (1.0 equiv), THF, −78 °C, ketone added slowly; quench with electrophile (or Me<sub>3</sub>SiCl) at −78 °C; strongly basic, irreversible, no excess ketone, no proton source", "weaker base in slight deficiency (NaH, KH, NaOEt/EtOH, Et<sub>3</sub>N/Me<sub>3</sub>SiCl), warm, longer times, excess ketone: reversible proton exchange equilibrates the enolates"],
         ["Which H is removed", "the more <i>accessible</i> and more acidic (less substituted) α-H: in 2-methylcyclohexanone, C-6 (CH<sub>2</sub>) rather than C-2 (CH)", "the one giving the more substituted, more stable (conjugated or more highly substituted) C=C"],
         ["Product from 2-methylcyclohexanone + MeI", "2,6-dimethylcyclohexanone", "2,2-dimethylcyclohexanone"],
         ["Why", "bulky LDA removes the less hindered H by a cyclic six-membered Ireland TS faster", "the more substituted enolate is lower in energy (alkene hyperconjugation), no kinetic barrier when equilibrating"]],
        widths=[22, 39, 39])
    B.ul(["<b>Enolate geometry.</b> With LDA in THF, ketones with a bulky α′-group give the <i>E</i>-enolate (O and the alkyl group trans), esters the <i>E</i>-enolate (OLi and Me trans by Ireland’s model), and adding HMPA gives the <i>Z</i>. The geometry transfers into the stereochemistry of the aldol product via the Zimmerman–Traxler chair (below).",
          "<b>Zimmerman–Traxler model.</b> A metal enolate adds to an aldehyde through a six-membered chair in which M coordinates both oxygens and the aldehyde R sits equatorial: <b>Z-enolates → syn aldols; E-enolates → anti aldols</b>. Boron enolates (shorter B–O) show higher selectivity. This is the basis of diastereoselective aldol reactions.",
          "<b>Silyl enol ethers</b> (Me<sub>3</sub>SiCl/Et<sub>3</sub>N for thermodynamic, LDA/Me<sub>3</sub>SiCl for kinetic) are isolable enolate equivalents; they react with electrophiles under Lewis acid catalysis (Mukaiyama aldol, TiCl<sub>4</sub>) and are regenerated to the specific enolate with MeLi or fluoride (Bu<sub>4</sub>N<sup>+</sup>F<sup>−</sup>).",
          "<b>Enamines (Stork).</b> A secondary amine (pyrrolidine) condenses with a ketone to give an enamine, an <i>uncharged</i> enolate equivalent (N lone pair pushes into C=C). It C-alkylates with reactive halides or acceptors and the iminium is hydrolysed back to the ketone; the substituted ketone is formed without strong base and without polyalkylation. The enamine’s nucleophilic carbon is the β-carbon.",
          "<b>Dianions.</b> Acetoacetate ester with 2 equiv of base (NaH then n-BuLi) forms the dianion; the more basic γ-carbanion reacts with electrophile first (γ-alkylation).",
          "<b>α-Halogenation (Hell–Volhard–Zelinsky, α-bromination of ketones).</b> In base, successive halogenation speeds up (the halogen increases acidity of the remaining H): the haloform reaction of CH<sub>3</sub>COR with X<sub>2</sub>/NaOH; in acid (enol), halogenation stops at mono because the halogen destabilises the protonated carbonyl needed for the next enolisation."])
    B.h2("8.12  Carbanion-based carbon–carbon bond-forming reactions (named reactions)")
    B.table(["Name", "Carbanion (nucleophile)", "Electrophile", "Product / key feature"],
        [["Aldol", "enolate of aldehyde/ketone (NaOH, EtOH)", "aldehyde or ketone", "β-hydroxy carbonyl; Δ → E1cB → α,β-unsaturated carbonyl (condensation). Equilibrium; ketone aldols are unfavourable (K ≈ 10<sup>−2</sup>) unless dehydration drives it"],
         ["Crossed aldol / Claisen–Schmidt", "enolate of a ketone (or aldehyde with α-H)", "aromatic aldehyde (no α-H)", "ArCH=CH–COR (chalcones); only one partner can enolise, so a single product"],
         ["Knoevenagel", "active-methylene compound (malonate, CH<sub>2</sub>(CN)<sub>2</sub>), weak base (piperidine, pyridine)", "aldehyde/ketone", "alkylidene malonate (α,β-unsaturated); Doebner modification: decarboxylates to cinnamic acid"],
         ["Perkin", "carboxylate-derived enolate of acid anhydride (CH<sub>3</sub>CO)<sub>2</sub>O + CH<sub>3</sub>COONa", "aromatic aldehyde", "cinnamic acid (E); needs 180 °C"],
         ["Claisen condensation", "ester enolate (NaOEt)", "another ester", "β-ketoester; <i>driven by deprotonation of the product</i> (pK<sub>a</sub> 11 versus EtOH 16): requires ≥ 1 equiv base and an α-H with two H on the acylating partner"],
         ["Dieckmann", "diester enolate (intramolecular Claisen)", "ester in same molecule", "5- or 6-membered cyclic β-ketoester (1,6-/1,7-diesters)"],
         ["Michael (conjugate) addition", "stabilised carbanion (malonate, nitronate, enolate, Gilman reagent)", "α,β-unsaturated carbonyl/nitrile/nitro", "1,5-dicarbonyl; 1,4-addition (soft nucleophile)"],
         ["Robinson annulation", "Michael donor (a ketone enolate)", "methyl vinyl ketone", "Michael then intramolecular aldol and dehydration: forms a six-membered ring (steroid/terpenoid synthesis; Wieland–Miescher ketone)"],
         ["Mannich", "enol/enolate of ketone", "iminium ion CH<sub>2</sub>=N<sup>+</sup>R<sub>2</sub> (from HCHO + R<sub>2</sub>NH)", "β-aminoketone (Mannich base); eliminates to a vinyl ketone"],
         ["Reformatsky", "zinc enolate BrZn–CH<sub>2</sub>COOEt (from BrCH<sub>2</sub>COOEt + Zn)", "aldehyde/ketone", "β-hydroxy ester; Zn enolate does not attack ester (unlike Grignard)"],
         ["Darzens", "carbanion of α-halo ester (NaOEt)", "aldehyde/ketone", "α,β-epoxy ester (glycidic ester): aldol then intramolecular S<sub>N</sub>2"],
         ["Benzoin", "cyanohydrin anion (from CN<sup>−</sup> + ArCHO)", "second ArCHO", "α-hydroxy ketone (umpolung)"],
         ["Stobbe", "succinate-ester enolate", "ketone", "alkylidene succinic half-ester via γ-lactone"],
         ["Malonic ester synthesis", "diethyl malonate + NaOEt", "RX (S<sub>N</sub>2)", "after hydrolysis and Δ: RCH<sub>2</sub>COOH (and R<sup>1</sup>R<sup>2</sup>CHCOOH); two carbons added"],
         ["Acetoacetic ester synthesis", "ethyl acetoacetate + NaOEt", "RX", "after ketonic hydrolysis and decarboxylation: CH<sub>3</sub>COCH<sub>2</sub>R (methyl ketones)"],
         ["Haloform", "CX<sub>3</sub><sup>−</sup> leaving group", "—", "RCOCX<sub>3</sub> + HO<sup>−</sup> → RCOO<sup>−</sup> + CHX<sub>3</sub>: methyl ketone → acid with one carbon less + haloform"],
         ["Favorskii", "enolate of α′-position of an α-haloketone", "intramolecular C–X (S<sub>N</sub>2)", "cyclopropanone intermediate, then ring-opening by RO<sup>−</sup> to an ester; ring contraction for cyclic α-halo ketones"],
         ["Wittig", "phosphorus ylide Ph<sub>3</sub>P<sup>+</sup>–C<sup>−</sup>R<sub>2</sub>", "aldehyde/ketone", "alkene + Ph<sub>3</sub>P=O; non-stabilised ylides → Z, stabilised → E"],
         ["Corey–Chaykovsky", "sulfonium/sulfoxonium ylide (CH<sub>2</sub>=SMe<sub>2</sub>, CH<sub>2</sub>=S(O)Me<sub>2</sub>)", "C=O or C=C–C=O", "epoxide (sulfonium) or cyclopropane (sulfoxonium, with enones)"],
         ["Grignard / RLi additions", "RMgX, RLi", "C=O, epoxide, CO<sub>2</sub>, nitrile, ester", "see 8.13"],
         ["Wurtz, Wurtz–Fittig, Corey–House", "R–Na, Ar–Na, R<sub>2</sub>CuLi", "R′X", "C–C coupling; Corey–House couples a Gilman reagent with R′X (also vinyl/aryl halides) cleanly"],
         ["Kolbe–Schmitt", "phenoxide (ring carbanion character at ortho)", "CO<sub>2</sub>", "salicylic acid (ortho, Na); p-hydroxybenzoic acid with K at higher T"],
         ["Reimer–Tiemann", "phenoxide", ":CCl<sub>2</sub> (from CHCl<sub>3</sub>)", "salicylaldehyde (Part 10)"]],
        widths=[16, 28, 22, 34])
    B.h2("8.13  Organometallic reagents as carbanion sources: what they do and do not do")
    B.table(["Substrate", "Product with RMgX / RLi", "Notes"],
        [["HCHO", "1° alcohol (R–CH<sub>2</sub>OH)", "adds one carbon"],
         ["R′CHO", "2° alcohol", "—"],
         ["R′<sub>2</sub>C=O", "3° alcohol", "hindered ketones give enolisation (R<sup>−</sup> acts as base) and reduction (β-hydride transfer from RMgX with β-H) instead"],
         ["CO<sub>2</sub> (dry ice)", "R–COOH after H<sub>3</sub>O<sup>+</sup>", "ketone by-product via second addition"],
         ["epoxide", "alcohol with two more carbons (R–CH<sub>2</sub>CH<sub>2</sub>OH from ethylene oxide)", "attack at the less hindered carbon (S<sub>N</sub>2)"],
         ["RC≡N", "ketone after hydrolysis of the imine anion", "one equivalent; stops because the imine anion is not electrophilic"],
         ["RCOOR′", "3° alcohol with two identical R groups (two equiv)", "ketone intermediate is more reactive than the ester"],
         ["RCOCl", "ketone (with R<sub>2</sub>Cd, R<sub>2</sub>CuLi, or 1 equiv at −78 °C)", "Grignard over-adds to give 3° alcohol"],
         ["α,β-unsaturated carbonyl", "RMgX/RLi: 1,2-addition; R<sub>2</sub>CuLi: 1,4-addition", "hard versus soft nucleophile"],
         ["H–A (HOH, ROH, RCOOH, RNH<sub>2</sub>, RC≡CH)", "R–H + metal salt", "the Grignard is destroyed; basis of the Zerewitinoff active-hydrogen determination (CH<sub>4</sub> from CH<sub>3</sub>MgI)"],
         ["RX (itself)", "R–R (Wurtz-type) as a side reaction", "minimised by slow addition and dilute solutions"],
         ["O<sub>2</sub>", "ROMgX → ROH", "protect from air"]],
        widths=[22, 38, 40])
    B.h2("8.14  Stereochemistry and reaction pathways of carbanions (Cram’s experiments)")
    B.p("Electrophilic substitution at a saturated carbanion centre, R–M + E<sup>+</sup> → R–E + M<sup>+</sup>, can proceed with retention, inversion or racemisation. D. J. Cram’s base-catalysed H/D-exchange studies on optically active 2-methyl-3-phenylpropionitrile, 2-methyl-2-phenyl..., and related compounds established the pathways:")
    B.table(["Pathway", "Meaning", "Stereochemical result", "Typical conditions"],
        [["S<sub>E</sub>1", "carbanion forms and is free of the leaving group before reaction", "racemisation (planar/inverting carbanion)", "polar solvents (DMSO, MeOH/NaOMe), delocalised carbanions"],
         ["S<sub>E</sub>2 (front)", "electrophile attacks from the same side as the leaving group (cyclic TS)", "retention", "organometallics in non-polar solvents; RLi, RMgX (retention is the rule)"],
         ["S<sub>E</sub>2 (back)", "attack from the side opposite to M", "inversion", "rare; strong dipolar systems"],
         ["S<sub>E</sub>i", "internal return (intimate ion pair, H delivered by the conjugate acid within the ion pair)", "retention, ‘isoinversion’ or ‘isoracemisation’ depending on solvent (Cram: t-BuOH/t-BuOK: retention; DMSO: racemisation)", "ion-pair collapse with proton from the solvent"]],
        widths=[12, 34, 32, 22])
    B.ul(["<b>Configurational stability</b> increases for carbanions that cannot become planar or are bound to metal: cyclopropyl and vinyl lithiums, bridgehead anions (in bicyclo[2.2.1]), α-oxy and α-amino lithiums at −78 °C (dipole-stabilised, chelated by the heteroatom). Alkyllithiums such as sec-butyllithium racemise slowly above −40 °C.",
          "<b>Hydrogen–deuterium exchange</b> is the standard proof of a carbanion: a ketone in D<sub>2</sub>O/OD<sup>−</sup> exchanges its α-H at a rate equal to its racemisation (when chiral) and its halogenation rate in base (zero-order in halogen), showing the same enolate intermediate (Ingold, Hughes).",
          "<b>Carbanions and rearrangements.</b> Aryl groups can migrate to a carbanion centre through a spiro (Meisenheimer-like) intermediate: the Grovenstein–Zimmerman rearrangement, the carbanion analogue of the neophyl rearrangement (Part 9) and the 1,2-aryl shift of cations (Part 7). Alkyl and hydride shifts to carbanion centres do not occur. Other carbanion rearrangements: [1,2]-Wittig (R–O–CH<sub>2</sub>R′ + BuLi → alkoxide of R–CH(R′)–OH by a radical-pair path), Stevens ([1,2] shift in ammonium ylides), Brook (C → O silyl migration), Favorskii (8.12) and the benzilic-acid rearrangement (with hydroxide as the nucleophile)."])
    B.h2("8.15  Ylides: carbanions stabilised by an adjacent onium centre")
    B.p("An <b>ylide</b> has a carbanion adjacent to a positively charged heteroatom: Ph<sub>3</sub>P<sup>+</sup>–C<sup>−</sup>HR (phosphonium), Me<sub>2</sub>S<sup>+</sup>–C<sup>−</sup>H<sub>2</sub> (sulfonium), Me<sub>2</sub>S(O)<sup>+</sup>–C<sup>−</sup>H<sub>2</sub> (sulfoxonium), R<sub>3</sub>N<sup>+</sup>–C<sup>−</sup>H<sub>2</sub> (ammonium). The carbanion is stabilised by electrostatic attraction and by negative hyperconjugation (n<sub>C</sub> → σ*<sub>P–C</sub>, not by 3d overlap), and ylides are far more stable than simple carbanions: the pK<sub>a</sub> of Ph<sub>3</sub>P<sup>+</sup>CH<sub>3</sub> is ≈ 22 (DMSO), so n-BuLi or NaH/DMSO or NaNH<sub>2</sub> deprotonates it.")
    B.table(["Ylide", "Substituent on carbanion", "Reactivity", "Product with RCHO"],
        [["non-stabilised (R = H, alkyl)", "alkyl", "very reactive, air-sensitive; made with BuLi/NaNH<sub>2</sub> (salt-free: more Z)", "<b>Z</b>-alkene, kinetic control, irreversible oxaphosphetane formation"],
         ["semi-stabilised (R = aryl, vinyl)", "Ph, CH=CH<sub>2</sub>", "moderate", "E/Z mixtures"],
         ["stabilised (R = CO<sub>2</sub>Et, COR, CN)", "EWG delocalises the charge; ylide is isolable, weak nucleophile; reacts with aldehydes only (ketones sluggish)", "reversible oxaphosphetane formation, thermodynamic control", "<b>E</b>-alkene"],
         ["Schlosser modification", "—", "PhLi at −78 °C interconverts the betaine/oxaphosphetane", "<b>E</b> even from non-stabilised ylides"],
         ["Horner–Wadsworth–Emmons (phosphonate carbanion)", "(EtO)<sub>2</sub>P(O)–C<sup>−</sup>H–CO<sub>2</sub>Et", "more nucleophilic than the Wittig ylide; water-soluble phosphate by-product", "E-α,β-unsaturated esters"]],
        widths=[22, 24, 30, 24])
    B.h2("8.16  Choosing a base: which proton is removed first?")
    B.p("A base removes the most acidic proton in the molecule first (thermodynamic acidity, with kinetic modifications above). Compare the pK<sub>a</sub> of the conjugate acid of the base with those of each acidic H:")
    B.table(["Base", "pK<sub>a</sub> of conjugate acid (≈, water or DMSO as marked)", "Deprotonates (examples)"],
        [["NaHCO<sub>3</sub>, Na<sub>2</sub>CO<sub>3</sub>", "6.4 (H<sub>2</sub>CO<sub>3</sub>), 10.3 (HCO<sub>3</sub><sup>−</sup>)", "carboxylic acids, phenols (Na<sub>2</sub>CO<sub>3</sub>); not alcohols"],
         ["Et<sub>3</sub>N, pyridine, piperidine", "10.7, 5.2, 11.1", "1,3-dicarbonyls (Knoevenagel), generates enamines"],
         ["NaOH, KOH", "15.7", "phenols, 1,3-dicarbonyls, nitroalkanes, aldehydes/ketones (aldol equilibrium)"],
         ["NaOEt, KOtBu", "16–19 (t-BuOH ≈ 18)", "ester/ketone α-H (equilibrium), E2 eliminations"],
         ["NaH, KH", "≈ 35 (H<sub>2</sub>)", "irreversible deprotonation of ketones, alcohols, esters"],
         ["NaNH<sub>2</sub>", "≈ 38 (NH<sub>3</sub>)", "terminal alkynes, ketones, esters; benzyne from ArX"],
         ["LDA, LiHMDS", "36, 26 (HMDS)", "kinetic enolates (LDA); LiHMDS for sensitive substrates"],
         ["n-BuLi, s-BuLi, t-BuLi", "≈ 50 (butane)", "directed ortho-metalation of arenes, vinylic H, terminal alkynes, THF is attacked above −20 °C"],
         ["Grignard RMgX", "≈ 45–50", "acidic H (water, alcohol, acid, alkyne) and C=O addition"]],
        widths=[22, 38, 40])
    B.warn("<b>Typical errors in exam problems.</b> (1) Treating the less substituted enolate as ‘always the major one’: it is kinetic only (LDA, −78 °C); NaOEt/EtOH gives the more substituted. "
           "(2) Forgetting that the Claisen condensation needs a stoichiometric base because the β-ketoester product is deprotonated and that this is why it fails for esters with only one α-H. "
           "(3) Adding a Grignard to a molecule containing OH, COOH, NH, C≡C–H or a carbonyl/ester elsewhere without protection. "
           "(4) Using the carbocation rule that alkyl groups stabilise: for carbanions they <i>destabilise</i>. "
           "(5) Ranking CF<sub>3</sub><sup>−</sup> above CCl<sub>3</sub><sup>−</sup> on electronegativity alone. "
           "(6) Assuming conjugate addition for every nucleophile: hard nucleophiles (RLi, RMgX) add 1,2; soft (cuprates, enolates, CN<sup>−</sup>, thiolates, amines) add 1,4. "
           "(7) Ignoring that an aryl C–H or a vinylic C–H is removed only by bases stronger than NH<sub>3</sub>.")


def mechanisms(B):
    c = []
    c.append(ex("8.11", "Claisen condensation: ester enolate + ester → β-ketoester",
        "[CH2:1]([H:20])[C:2](=[O:3])[O:4][CH2:5][CH3:6]",
        [St([A(('lp', 90), ('nb', 90, 20), 0.5), A(('b', 1, 20), ('lp', 1), -0.5)], "EtO^−", add=EtOm, carbanions=[1]),
         St([A(('lp', 1), ('nb', 1, 31), 0.5), A(('b', 31, 32), ('lp', 32), 0.5)], "attack on 2nd ester", add="[CH3:30][C:31](=[O:32])[O:33][CH2:34][CH3:35]", carbanions=[1]),
         St([A(('lp', 32), ('nb', 32, 31), 0.5), A(('b', 31, 33), ('lp', 33), -0.5)], "−EtO^−", expect="CCOC(=O)CC(C)=O.CC[O-].CCO")],
        None,
        "The ester enolate adds to the carbonyl carbon of a second ester molecule to give a tetrahedral alkoxide; reforming C=O expels ethoxide (addition–elimination, as for any acyl substitution). The β-ketoester (pK<sub>a</sub> ≈ 11) is far more acidic than ethanol (16) and is deprotonated to its stabilised enolate by the ethoxide, which pulls the unfavourable equilibrium to the right; acidification at the end gives the neutral β-ketoester. <b>Therefore the stoichiometric base is a reagent, and an ester with only one α-hydrogen cannot be driven to product in this way</b> (use a stronger base, e.g. Ph<sub>3</sub>CNa).", width=680))
    c.append(ex("8.12", "Dieckmann cyclisation: diethyl adipate → 2-ethoxycarbonylcyclopentanone",
        "[O:10]([CH2:11][CH3:12])[C:2](=[O:3])[CH2:4][CH2:5][CH2:6][CH:1]([H:20])[C:7](=[O:8])[O:9][CH2:13][CH3:14]",
        [St([A(('lp', 90), ('nb', 90, 20), 0.5), A(('b', 1, 20), ('lp', 1), -0.5)], "EtO^−", add=EtOm, carbanions=[1]),
         St([A(('lp', 1), ('nb', 1, 2), 0.5), A(('b', 2, 3), ('lp', 3), 0.5)], "ring closure", carbanions=[1]),
         St([A(('lp', 3), ('nb', 3, 2), 0.5), A(('b', 2, 10), ('lp', 10), -0.5)], "−EtO^−")],
        None,
        "The intramolecular Claisen condensation forms five- and six-membered rings (1,6- and 1,7-diesters give cyclopentanones and cyclohexanones; 1,4- and 1,5-diesters would give strained rings and are not used; the reverse ring-opening is possible). As in the Claisen condensation, deprotonation of the cyclic β-ketoester drives the reaction. Hydrolysis and decarboxylation (8.4) then give cyclopentanone.", width=680))
    c.append(ex("8.13", "Knoevenagel condensation: malononitrile + benzaldehyde → benzylidenemalononitrile",
        "[C:1]([H:20])([H:21])([C:2]#[N:3])[C:4]#[N:5]",
        [St([A(('lp', 90), ('nb', 90, 20), 0.5), A(('b', 1, 20), ('lp', 1), -0.5)], "base (piperidine)", add=OHm, carbanions=[1]),
         St([A(('lp', 1), ('nb', 1, 10), 0.5), A(('b', 10, 12), ('lp', 12), 0.5)], "aldol addition", add="[C:10]([H:11])(=[O:12])" + Ph(13), carbanions=[1]),
         St([A(('lp', 12), ('nb', 12, 21), 0.5), A(('b', 1, 21), ('lp', 1), -0.5)], "proton shift", carbanions=[1]),
         St([A(('lp', 1), ('nb', 1, 10), 0.5), A(('b', 10, 12), ('lp', 12), -0.5)], "E1cB, −HO^−", expect="N#CC(C#N)=Cc1ccccc1.O.[OH-]")],
        "N#CC(C#N)=Cc1ccccc1.O.[OH-]",
        "A weak base suffices because the CH<sub>2</sub> is flanked by two nitriles (pK<sub>a</sub> 11). Addition to the aldehyde, proton transfer to give a new carbanion (stabilised by two CN and now β to a leaving OH), and loss of hydroxide (E1cB) give the conjugated alkene irreversibly. With malonic acid (Doebner), pyridine as base: decarboxylation follows and cinnamic acids are formed.", width=680))
    c.append(ex("8.14", "Reformatsky reaction: organozinc enolate + acetone",
        "[Br:5][Zn:6][CH2:1][C:2](=[O:3])[O:4][CH2:7][CH3:8].[CH3:10][C:11](=[O:12])[CH3:13]",
        [St([A(('b', 1, 6), ('nb', 1, 11), 0.5), A(('b', 11, 12), ('lp', 12), 0.5), A(('lp', 12), ('nb', 12, 6), 0.5)], "six-membered chelate TS", expect="CCOC(=O)CC(C)(C)O[Zn]Br")],
        "CCOC(=O)CC(C)(C)O[Zn]Br",
        "Zinc inserts into the C–Br bond of ethyl bromoacetate to give a carbon-bound (or O-bound) organozinc whose carbanion character is tempered by the C–Zn bond (≈ 18 % ionic), so it adds to aldehydes and ketones but not to esters — the reason a Grignard reagent could not be used. Acid work-up releases the β-hydroxy ester (dehydration gives the α,β-unsaturated ester)."))
    c.append(ex("8.15", "Darzens glycidic ester condensation",
        "[Cl:1][CH:2]([H:20])[C:3](=[O:4])[O:5][CH2:6][CH3:7]",
        [St([A(('lp', 90), ('nb', 90, 20), 0.5), A(('b', 2, 20), ('lp', 2), -0.5)], "EtO^−", add=EtOm, carbanions=[2]),
         St([A(('lp', 2), ('nb', 2, 11), 0.5), A(('b', 11, 12), ('lp', 12), 0.5)], "aldol addition", add="[CH3:10][C:11](=[O:12])[CH3:13]", carbanions=[2]),
         St([A(('lp', 12), ('nb', 12, 2), 0.5), A(('b', 2, 1), ('lp', 1), -0.5)], "intramolecular S_N2")],
        None,
        "The carbanion of the α-chloro ester adds to the ketone; the resulting alkoxide, positioned on the carbon next to C–Cl, performs an intramolecular S<sub>N</sub>2 (3-exo-tet) displacing chloride to give an epoxide. The glycidic ester is hydrolysed and decarboxylated to an aldehyde or ketone with one more carbon than the starting carbonyl.", width=680))
    c.append(ex("8.16", "Haloform reaction, final step: triiodoacetone + HO<sup>−</sup>",
        "[I:1][C:2]([I:3])([I:4])[C:5](=[O:6])[CH3:7]",
        [St([A(('lp', 90), ('nb', 90, 5), 0.5), A(('b', 5, 6), ('lp', 6), 0.5)], "HO^−", add=OHm),
         St([A(('lp', 6), ('nb', 6, 5), 0.5), A(('b', 5, 2), ('lp', 2), -0.5)], "CI_3^− leaves", carbanions=[2], expect="CC(=O)O.[I-]C(I)I".replace("[I-]C(I)I", "I[C-](I)I"))],
        None,
        "Under basic conditions each successive halogenation is faster than the last, so a methyl ketone is converted to R–CO–CX<sub>3</sub>. Hydroxide adds to the carbonyl, and the tetrahedral intermediate expels the best available carbanion, <sup>−</sup>CX<sub>3</sub> (stabilised by the −I effect and polarisability of three halogens; pK<sub>a</sub> of CHCl<sub>3</sub> ≈ 24 in the leaving group role), which protonates to the haloform (CHI<sub>3</sub>, yellow ppt: the iodoform test for CH<sub>3</sub>CO–, CH<sub>3</sub>CH(OH)–). The carboxylic acid has one carbon fewer than the ketone.", width=680))
    c.append(ex("8.17", "Wittig reaction: methylenetriphenylphosphorane + benzaldehyde (via oxaphosphetane)",
        "[CH2-:1][P+:2](" + Ph(3) + ")(" + Ph(9) + ")" + Ph(15) + ".[C:30]([H:31])(=[O:32])" + Ph(33),
        [St([A(('lp', 1), ('nb', 1, 30), 0.5), A(('b', 30, 32), ('lp', 32), 0.5)], "betaine", carbanions=[]),
         St(A(('lp', 32), ('nb', 32, 2), 0.5), "oxaphosphetane"),
         St([A(('b', 1, 2), ('nb', 1, 30), 0.5), A(('b', 30, 32), ('nb', 32, 2), -0.5)], "cycloreversion", expect="C=Cc1ccccc1.O=P(c1ccccc1)(c1ccccc1)c1ccccc1")],
        "C=Cc1ccccc1.O=P(c1ccccc1)(c1ccccc1)c1ccccc1",
        "The ylide carbon attacks the aldehyde carbonyl; the alkoxide closes onto phosphorus to give a four-membered oxaphosphetane (modern evidence favours direct [2+2] formation with no discrete betaine for salt-free ylides), which collapses in a retro-[2+2] to the alkene and triphenylphosphine oxide. The strength of the P=O bond (≈ 130 kcal mol<sup>−1</sup>) is the driving force. Non-stabilised ylides: kinetic <i>cis</i> oxaphosphetane → Z-alkene; stabilised: reversible, trans → E.", width=680))
    c.append(ex("8.18", "Favorskii rearrangement: 2-chlorocyclohexanone + MeO<sup>−</sup> → methyl cyclopentanecarboxylate",
        "[C:1]1(=[O:2])[CH:3]([Cl:4])[CH2:5][CH2:6][CH2:7][CH:8]1[H:20]",
        [St([A(('lp', 30), ('nb', 30, 20), 0.5), A(('b', 8, 20), ('lp', 8), -0.5)], "MeO^−", add="[O-:30][CH3:31]", carbanions=[8]),
         St([A(('lp', 8), ('nb', 8, 3), 0.5), A(('b', 3, 4), ('lp', 4), -0.5)], "cyclopropanone", carbanions=[8]),
         St([A(('lp', 40), ('nb', 40, 1), 0.5), A(('b', 1, 2), ('lp', 2), 0.5)], "MeO^− adds", add="[O-:40][CH3:41]"),
         St([A(('lp', 2), ('nb', 2, 1), 0.5), A(('b', 1, 3), ('lp', 3), -0.5)], "ring opens to carbanion", carbanions=[3])],
        None,
        "The base removes the α′-hydrogen (on the carbon <i>without</i> chlorine) to give an enolate whose carbon displaces chloride intramolecularly (3-exo-tet) to give a strained bicyclic cyclopropanone. Methoxide adds to the very electrophilic cyclopropanone C=O and the three-membered ring opens at the bond that gives the more stable carbanion (here the secondary carbanion; for unsymmetrical systems the bond that gives the more stabilised, usually more substituted-hindered-less carbanion cleaves). Protonation gives the ester with the ring contracted by one carbon. Evidence: the same cyclopropanone is formed from the isomeric α-chloroketone (labelling scrambles the two carbons).", width=680))
    B.grid(c, 1)
    # Robinson annulation as drawn sequence
    B.h3("Robinson annulation: Michael addition → intramolecular aldol → dehydration")
    d = mech("8.19", "[CH:1]1([H:20])[C:2](=[O:3])[CH2:4][CH2:5][CH2:6][CH2:7]1",
        [St([A(('lp', 90), ('nb', 90, 20), 0.5), A(('b', 1, 20), ('lp', 1), -0.5)], "base", add=OHm, carbanions=[1]),
         St([A(('lp', 1), ('nb', 1, 10), 0.5), A(('b', 10, 11), ('nb', 11, 12), 0.5), A(('b', 12, 13), ('lp', 13), 0.5)], "Michael", add="[CH2:10]=[CH:11][C:12](=[O:13])[CH3:14]", carbanions=[1])],
        None, width=680)
    B.fig(d, "Step 1 of the Robinson annulation: the cyclohexanone enolate adds in a 1,4-fashion to methyl vinyl ketone, giving the enolate of 2-(3-oxobutyl)cyclohexanone (a 1,5-diketone).")
    B.p("<b>Step 2</b>: the methyl ketone enolate (CH<sub>2</sub>–C=O, formed by deprotonation of the CH<sub>3</sub>) attacks the ring C=O intramolecularly (6-exo-trig): a bicyclic β-hydroxyketone. <b>Step 3</b>: E1cB loss of HO<sup>−</sup> gives the conjugated enone Δ<sup>1,9</sup>-2-octalone (4,4a,5,6,7,8-hexahydro-2(3H)-naphthalenone). Net: a six-membered ring and one new C=C are built from a ketone and MVK (use the Wieland–Miescher ketone from 2-methylcyclohexane-1,3-dione in steroid synthesis).")
    B.p("<b>Malonic ester synthesis</b> (arrow-validated alkylation in 8.7 for the alkynyl case): NaOEt converts CH<sub>2</sub>(CO<sub>2</sub>Et)<sub>2</sub> into its carbanion (pK<sub>a</sub> 13), which is alkylated by R–X (S<sub>N</sub>2: primary or methyl halides; secondary halides give some elimination; aryl and tertiary halides fail); a second alkylation with R′X is possible; hydrolysis (NaOH, then H<sub>3</sub>O<sup>+</sup>) gives the substituted malonic acid, which decarboxylates on heating (cyclic TS, 8.4) to RCH<sub>2</sub>COOH. With 1,2-dibromoethane and two equivalents of malonate the product is cyclopropane-1,1-dicarboxylate (Perkin ring closure). "
        "<b>Acetoacetic ester synthesis</b> is the same with CH<sub>3</sub>COCH<sub>2</sub>CO<sub>2</sub>Et; the final decarboxylation of the β-ketoacid gives methyl ketones CH<sub>3</sub>COCH<sub>2</sub>R. Dialkylation gives CH<sub>3</sub>COCHRR′.")


def problems(B, q):
    q(16, "How many of the following can be converted completely into their anion by sodium ethoxide in ethanol? (pK<sub>a</sub> of EtOH ≈ 16): acetone (19.3), ethyl acetoacetate (10.7), diethyl malonate (13), nitromethane (10.2), ethyl acetate (25.6), cyclopentadiene (16), phenylacetylene (≈ 29).",
      None, "3  (ethyl acetoacetate, diethyl malonate, nitromethane)", "Quantitative deprotonation needs pK<sub>a</sub>(HA) at least about 2 units below 16: only acetoacetate, malonate and nitromethane qualify. Cyclopentadiene (16) is half-deprotonated; acetone, ethyl acetate and the alkyne are deprotonated to a negligible extent (but acetone still reacts through the 10<sup>−4</sup> fraction of enolate).")
    q(17, "Using the aqueous pK<sub>a</sub> values, calculate the equilibrium constant for CH<sub>3</sub>COCH<sub>3</sub> + EtO<sup>−</sup> ⇌ CH<sub>3</sub>COCH<sub>2</sub><sup>−</sup> + EtOH (pK<sub>a</sub>: acetone 19.3, ethanol 15.9).",
      None, "K = 10<sup>−3.4</sup> ≈ 4 × 10<sup>−4</sup>", "log K = pK<sub>a</sub>(EtOH) − pK<sub>a</sub>(acetone) = 15.9 − 19.3 = −3.4. In 1 M EtO<sup>−</sup> the enolate fraction is about 0.04 %: too small for stoichiometric enolate chemistry (use LDA) but sufficient for a catalytic aldol.")
    q(18, "Predict the product of 2-methylcyclohexanone with (a) LDA/THF, −78 °C, then CH<sub>3</sub>I, (b) NaOEt/EtOH, 25 °C, then CH<sub>3</sub>I, (c) Me<sub>3</sub>SiCl/Et<sub>3</sub>N, DMF, 130 °C (then MeLi, MeI).",
      S([("(a)", "CC1CCCC(C)C1=O"), ("(b)", "CC1(C)CCCCC1=O"), ("(c)", "CC1(C)CCCCC1=O")]), "(a) 2,6-dimethyl; (b) 2,2-dimethyl; (c) 2,2-dimethyl",
      "(a) kinetic enolate at C-6; (b) the equilibrating base gives the more substituted enolate; (c) the thermodynamic silyl enol ether (more substituted) is regenerated to the same enolate by MeLi.")
    q(19, "Which is the stronger acid, Meldrum’s acid (pK<sub>a</sub> 4.8) or dimedone (5.2)? Both have two C=O flanking a CH<sub>2</sub>. Explain the difference from acyclic malonic ester (13).",
      None, "Meldrum’s acid, marginally; both far stronger than diethyl malonate", "In diethyl malonate the ester C=O is deactivated by donation from the OR lone pair, and the two esters can adopt the E (s-trans) conformation, which gives poorer overlap and dipole repulsion in the anion. In Meldrum’s acid the cyclic 1,3-dioxane-4,6-dione holds both carbonyls in the Z (s-cis) arrangement, forcing a planar anion with full conjugation and no competition between the ring oxygens, hence ≈ 8 pK units more acidic.")
    q(20, "Ethyl acetate is treated with 1 equiv NaOEt, then acid. Name the product. Why does ethyl 2,2-dimethylpropanoate (pivalate) with 1 equiv NaOEt not undergo a Claisen condensation, and why does ethyl isobutyrate fail under the same conditions?",
      None, "ethyl acetoacetate; pivalate has no α-H; isobutyrate gives a product without an acidic H", "Ethyl pivalate (t-BuCO<sub>2</sub>Et) has no α-hydrogen, so no enolate. Ethyl isobutyrate gives the condensation product ((CH<sub>3</sub>)<sub>2</sub>CH–CO–C(CH<sub>3</sub>)<sub>2</sub>CO<sub>2</sub>Et), which has no H between the two carbonyls and therefore cannot be deprotonated to drive the equilibrium: the (unfavourable) equilibrium lies on the side of starting materials. A stronger base (Ph<sub>3</sub>CNa, LDA) is needed.")
    q(21, "Give the products of the crossed aldol of benzaldehyde with (a) acetone (excess), (b) acetophenone, (c) cyclohexanone (1:1), under NaOH/EtOH, heat.",
      S([("(a)", "CC(=O)C=Cc1ccccc1"), ("(b)", "O=C(C=Cc1ccccc1)c1ccccc1"), ("(c)", "O=C1CCCCC1=Cc1ccccc1")]), "(a) benzalacetone; (b) chalcone; (c) 2-benzylidenecyclohexanone", "Benzaldehyde has no α-H and so cannot enolise; the ketone enolises and adds to PhCHO; E1cB dehydration gives a conjugated enone (Claisen–Schmidt). With excess PhCHO, acetone gives dibenzalacetone.")
    q(22, "How many different products (including the self-condensation products) can form when CH<sub>3</sub>CHO and CH<sub>3</sub>CH<sub>2</sub>CHO are mixed with dilute NaOH (aldol only, no dehydration, ignore stereoisomers)?",
      None, "4", "Each aldehyde can act as the enolate or as the electrophile: CH<sub>3</sub>CHO + CH<sub>3</sub>CHO; CH<sub>3</sub>CH<sub>2</sub>CHO + CH<sub>3</sub>CH<sub>2</sub>CHO; enolate of CH<sub>3</sub>CHO + CH<sub>3</sub>CH<sub>2</sub>CHO; enolate of CH<sub>3</sub>CH<sub>2</sub>CHO + CH<sub>3</sub>CHO. Four distinct β-hydroxy aldehydes (a statistical mixture, which is why crossed aldols with two enolisable partners are avoided).")
    q(23, "Complete: (a) CH<sub>3</sub>COCH<sub>3</sub> + I<sub>2</sub>/NaOH (excess), (b) C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + NaOCl, (c) CH<sub>3</sub>CH<sub>2</sub>OH + I<sub>2</sub>/NaOH. Which give a yellow precipitate?",
      None, "(a) CHI<sub>3</sub> + CH<sub>3</sub>COO<sup>−</sup>; (b) CHCl<sub>3</sub> + C<sub>6</sub>H<sub>5</sub>COO<sup>−</sup>; (c) CHI<sub>3</sub> + HCOO<sup>−</sup>; yellow CHI<sub>3</sub> from (a) and (c)", "Methyl ketones and ethanol (oxidised in situ to acetaldehyde) give the iodoform test; (b) with NaOCl gives chloroform (not yellow). The acid always has one carbon fewer than the methyl ketone.")
    q(24, "A Grignard reagent CH<sub>3</sub>MgI (excess) is added to each of (a) HOCH<sub>2</sub>CH<sub>2</sub>COCH<sub>3</sub>, (b) HC≡C–CH<sub>2</sub>–COOEt. Count moles of CH<sub>4</sub> evolved per mole of substrate before addition occurs.",
      None, "(a) 1; (b) 1", "Active hydrogens are protonated by CH<sub>3</sub><sup>−</sup>: (a) the O–H (1); (b) the acetylenic C–H (pK<sub>a</sub> 25), (the ester then reacts through addition, not acid–base): 1. The Zerewitinoff count gives the number of active H.")
    q(25, "Arrange in order of increasing acidity of the marked hydrogen: (a) CH<sub>3</sub>COCH<sub>3</sub>, (b) CH<sub>3</sub>COCH<sub>2</sub>COCH<sub>3</sub> (central), (c) CH<sub>3</sub>CN, (d) CH<sub>3</sub>NO<sub>2</sub>, (e) CH<sub>2</sub>(CN)<sub>2</sub>.",
      S([("a", "CC(C)=O"), ("b", "CC(=O)CC(C)=O"), ("c", "CC#N"), ("d", "C[N+](=O)[O-]"), ("e", "N#CCC#N")]), "c &lt; a &lt; d ≈ e &lt; b  (aqueous pKa ≈ 25, 19.3, 10.2, 11.2, 8.9)",
      "A single acceptor: nitrile (≈ 25) &lt; ketone (19) &lt; nitro (10). Two acceptors: malononitrile (11) and acetylacetone (9, aqueous). The DMSO ordering of the two close pairs is d (17.2) &lt; e (11.1) &lt; b (13.3) with the order of b and e depending on scale: check the scale given in the question.")
    q(26, "Why is the CH<sub>2</sub> between the two C=O groups of acetylacetone (pK<sub>a</sub> 9) more acidic than the CH<sub>3</sub> groups (≈ 20), and what does base then give on alkylation with 1 equiv CH<sub>3</sub>I?",
      None, "central position; 3-methylpentane-2,4-dione", "The central carbanion is delocalised over two C=O (and both oxygens carry charge), whereas a terminal carbanion is stabilised by only one. The central anion is the one formed and alkylated. With 2 equiv of a very strong base (the dianion) a terminal CH<sub>3</sub> would react first.")
    q(27, "State the product and the stereochemical outcome of the Wittig reaction of (a) benzaldehyde with Ph<sub>3</sub>P=CHCH<sub>3</sub> (salt-free), (b) benzaldehyde with Ph<sub>3</sub>P=CHCO<sub>2</sub>Et.",
      None, "(a) mainly (Z)-1-phenylpropene; (b) (E)-ethyl cinnamate", "(a) non-stabilised ylide: irreversible, kinetically controlled formation of the cis-oxaphosphetane leading to Z-alkene. (b) a stabilised ylide forms the oxaphosphetane reversibly, allowing the more stable trans (E) alkene to form.")
    q(28, "Cyclohexanone is converted into methylenecyclohexane in one step. Which reagent? Why will CH<sub>3</sub>MgI/H<sup>+</sup>/Δ not give a clean result?",
      S([("", "O=C1CCCCC1"), ("→", "C=C1CCCCC1")]), "Ph<sub>3</sub>P=CH<sub>2</sub> (Wittig)", "The Grignard route gives 1-methylcyclohexanol which dehydrates (E1) to the endocyclic, more substituted 1-methylcyclohexene, not the exocyclic alkene. The Wittig reaction puts the double bond exactly where the C=O was.")
    q(29, "An optically active ketone CH<sub>3</sub>CH(C<sub>2</sub>H<sub>5</sub>)COC<sub>6</sub>H<sub>5</sub> loses optical activity in NaOH/H<sub>2</sub>O. A second ketone, with a quaternary α-carbon, does not. Explain, and say what rate law governs the racemisation.",
      None, "planar enolate; rate = k[ketone][HO<sup>−</sup>], independent of any halogen", "The stereocentre carries an acidic α-H; the enolate is planar. The quaternary α-carbon has no H and cannot enolise at that carbon. Halogenation in base and racemisation have the same rate (zero order in halogen), proving the common enolate.")
    q(30, "Compare the products of the reaction of cyclohexanone with (a) CH<sub>3</sub>MgI then H<sub>3</sub>O<sup>+</sup>; (b) pyrrolidine then CH<sub>3</sub>I then H<sub>3</sub>O<sup>+</sup>; (c) LDA then CH<sub>3</sub>I; (d) NaOEt, CH<sub>3</sub>I (excess).",
      None, "(a) 1-methylcyclohexanol (C=O attack); (b) 2-methylcyclohexanone (Stork enamine alkylation at α-C); (c) 2-methylcyclohexanone; (d) mixture up to 2,2,6,6-tetramethylcyclohexanone", "The Grignard reagent attacks carbon of C=O; the enamine and enolate act as nucleophiles at the α-carbon. NaOEt is a weak equilibrating base so enolates alkylate repeatedly (polyalkylation); LDA/enamine give clean monoalkylation.")
    q(31, "Identify the electrophile and the carbanion in each of: (a) Perkin reaction, (b) Knoevenagel, (c) benzoin condensation, (d) Reformatsky, (e) Stork enamine alkylation, (f) Michael addition of diethyl malonate to acrylonitrile.",
      None, "see reasoning", "(a) enolate of acetic anhydride (from CH<sub>3</sub>COONa) + ArCHO; (b) CH<sub>2</sub>(CN)<sub>2</sub> carbanion + ArCHO; (c) cyanohydrin carbanion + ArCHO; (d) BrZn–CH<sub>2</sub>CO<sub>2</sub>Et + ketone; (e) enamine β-carbon + RX or enone; (f) malonate carbanion + CH<sub>2</sub>=CH–C≡N (1,4-addition giving NC–CH<sub>2</sub>CH<sub>2</sub>–CH(CO<sub>2</sub>Et)<sub>2</sub>).")
    q(32, "Which carbanion is most stable? Rank (a) PhCH<sub>2</sub><sup>−</sup>, (b) (Ph)<sub>3</sub>C<sup>−</sup>, (c) p-O<sub>2</sub>N–C<sub>6</sub>H<sub>4</sub>CH<sub>2</sub><sup>−</sup>, (d) cyclopentadienide, (e) CH<sub>3</sub><sup>−</sup>.",
      S([("a", "[CH2-]c1ccccc1"), ("b", "[C-](c1ccccc1)(c1ccccc1)c1ccccc1"), ("c", "[CH2-]c1ccc(cc1)[N+](=O)[O-]"), ("d", "[CH-]1C=CC=C1"), ("e", "[CH3-]")]), "d &gt; c &gt; b &gt; a &gt; e  (acid pK<sub>a</sub> ≈ 16, 20, 31, 41, 50)",
      "Cp<sup>−</sup> is aromatic; the p-nitrobenzyl anion delocalises onto NO<sub>2</sub> (−M); trityl has three phenyls, benzyl one; methyl has none. (⚑ the position of (c) relative to (b) is scale-dependent: the p-nitrobenzyl anion is more stable by ≈ 10 pK units than benzyl and comparable with trityl.)")
    q(33, "Which of the following reactions will proceed to completion? (A) CH<sub>3</sub>COOEt + EtO<sup>−</sup>; (B) CH<sub>3</sub>COCH<sub>2</sub>COOEt + EtO<sup>−</sup>; (C) PhC≡CH + HO<sup>−</sup>; (D) CH<sub>3</sub>NO<sub>2</sub> + HO<sup>−</sup>.",
      None, "(B) and (D)", "Use pK<sub>a</sub>: acetoacetate 10.7 and nitromethane 10.2 are much more acidic than EtOH (16) or water (15.7), so deprotonation is complete. Ethyl acetate (25.6) and phenylacetylene (≈ 29, DMSO) are not deprotonated appreciably.")
    q(34, "Chloroform reacts with solid KOH in a non-polar solvent with a phase-transfer catalyst (BnEt<sub>3</sub>N<sup>+</sup>Cl<sup>−</sup>) in the presence of cyclohexene. Name the product and the role of the catalyst.",
      S([("", "ClC1(Cl)C2CCCCC12")]), "7,7-dichlorobicyclo[4.1.0]heptane; the catalyst carries HO<sup>−</sup> (or CCl<sub>3</sub><sup>−</sup>) into the organic phase", "Makosza interfacial mechanism: HO<sup>−</sup> deprotonates CHCl<sub>3</sub> at the interface; Q<sup>+</sup>CCl<sub>3</sub><sup>−</sup> moves into the organic phase, loses Cl<sup>−</sup> to give :CCl<sub>2</sub>, which adds to the alkene.")
    q(35, "The conjugate acid of which base has a pK<sub>a</sub> high enough to deprotonate benzene? Which of NaOH, NaOEt, NaNH<sub>2</sub>, n-BuLi/TMEDA, LDA can do so?",
      None, "n-BuLi/TMEDA only (pK<sub>a</sub> of benzene ≈ 43)", "NH<sub>3</sub> (≈ 38) and diisopropylamine (36) are too weak as conjugate acids; butane (≈ 50) is strong enough. TMEDA breaks up the BuLi hexamer, making it kinetically capable.")
    q(36, "Racemic 2-bromobutane forms a Grignard reagent which is hydrolysed with D<sub>2</sub>O. Is the 2-deutero-butane optically active if one starts from enantiopure (S)-2-bromobutane?",
      None, "no, racemic", "Grignard formation proceeds through radical intermediates at the metal surface (single-electron transfer), which are planar and lose configuration; the secondary alkyl Grignard also inverts configurationally on the time scale of hours at room temperature. In contrast, vinyl and cyclopropyl Grignards and many organolithiums at −78 °C retain configuration.")
    q(37, "Which of the following do <b>not</b> take place? (a) CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>Li + CH<sub>3</sub>CH<sub>2</sub>OH → butane; (b) RMgBr + R′COOH → R–H; (c) RMgBr + aldehyde with a COOH group → alcohol (without protection); (d) PhMgBr + CO<sub>2</sub> → PhCOOH.",
      None, "(c) does not give the clean alcohol", "The Grignard reagent first deprotonates the COOH (acid–base is faster than addition) and consumes one equivalent; the carboxylate then does not react further, so addition to the aldehyde needs excess reagent or protection of the acid. (a), (b), (d) occur.")
    q(38, "Convert (i) CH<sub>3</sub>COCH<sub>3</sub> → (CH<sub>3</sub>)<sub>2</sub>C=CH–COCH<sub>3</sub> (mesityl oxide), (ii) CH<sub>3</sub>CHO → CH<sub>3</sub>CH=CH–CHO, (iii) HCHO + CH<sub>3</sub>CHO → ? (NaOH; crossed aldol), (iv) PhCHO + (CH<sub>3</sub>CO)<sub>2</sub>O/CH<sub>3</sub>COONa/Δ → ?",
      None, "(i) aldol then E1cB; (ii) crotonaldehyde; (iii) acrolein or (with excess HCHO) pentaerythritol precursors; (iv) cinnamic acid (Perkin)", "In (iii) formaldehyde has no α-H and is an excellent electrophile; with acetaldehyde in excess HCHO and base the three α-H are all hydroxymethylated and a final crossed Cannizzaro reduction by HCHO gives pentaerythritol C(CH<sub>2</sub>OH)<sub>4</sub>. (iv) The enolate of the anhydride attacks PhCHO and elimination/hydrolysis gives E-cinnamic acid.")
    q(39, "A student claims that carbanions rearrange like carbocations by 1,2-hydride and 1,2-alkyl shifts. Evaluate.",
      None, "incorrect", "A 1,2-shift needs a three-centre, two-electron TS with an <i>empty</i> orbital to receive the pair; the carbanion carbon already has a filled lone pair, so such a shift would require a four-electron three-centre TS (forbidden/high barrier). Aryl and vinyl groups migrate to carbanions through spiro/cyclopropane-like intermediates (Grovenstein–Zimmerman), by using their π systems.")
    q(40, "α-Elimination versus β-elimination: why does CHCl<sub>3</sub> + HO<sup>−</sup> give :CCl<sub>2</sub> while CH<sub>3</sub>CH<sub>2</sub>Cl + HO<sup>−</sup> gives CH<sub>2</sub>=CH<sub>2</sub>?",
      None, "no β-H in CHCl<sub>3</sub>; the anion CCl<sub>3</sub><sup>−</sup> is stable and eliminates from the same carbon", "Chloroform has only one carbon, so a β-elimination is impossible. Its carbanion is stabilised by three Cl (−I, polarisability), long-lived enough to lose Cl<sup>−</sup> (α). Ethyl chloride has a β-H and an E2 pathway.")
    q(41, "Using the Zimmerman–Traxler model, say which aldol diastereomer is formed by the Z-lithium enolate of 3-pentanone with benzaldehyde.",
      None, "the syn aldol", "In the chair six-membered TS the aldehyde Ph occupies the equatorial position; with a Z-enolate the two substituents that become the stereocentres end up syn in the zig-zag drawing. E-enolates give anti.")
    q(42, "Which has the more acidic C–H, 1,3-cyclopentadiene (≈ 16) or 1,3-cycloheptatriene (≈ 36)? Explain, and also predict where CH<sub>3</sub>Li would remove a proton from 1,3,5-cycloheptatriene.",
      S([("a", "C1C=CC=C1"), ("b", "C1C=CC=CC=C1")]), "cyclopentadiene; at the CH<sub>2</sub> (C-7)", "Cp<sup>−</sup> is aromatic; the cycloheptatrienyl anion would have 8π (antiaromatic) in a planar ring and is destabilised (the pK<sub>a</sub> of 36 corresponds to a non-planar, non-aromatic anion). Both lose H from the sp<sup>3</sup> carbon.")
    q(43, "A carbanion is generated from CH<sub>3</sub>COCH<sub>2</sub>CH<sub>3</sub> (2-butanone). Name the two possible enolates and the conditions that select each.",
      S([("A", "C=C(O)CC".replace("C=C(O)CC", "[CH2-]C(=O)CC")), ("B", "C[CH-]C(=O)C")]), "A: less substituted (kinetic, LDA −78 °C); B: more substituted (thermodynamic, NaOEt/EtOH)", "A arises from removal of a CH<sub>3</sub> hydrogen; B from the CH<sub>2</sub>. LDA gives mostly A (kinetic); thermodynamic conditions (equilibrating base) give mostly B, with E/Z isomers.")
    q(44, "Why is an α-C–H of an ester (pK<sub>a</sub> ≈ 25) less acidic than the α-C–H of the corresponding ketone (≈ 20), when the ester carbonyl carbon is the more electrophilic?",
      None, "OR lone-pair donation into C=O", "The ester C=O is already stabilised by resonance with the alkoxy oxygen (ROC=O ↔ RO<sup>+</sup>=C–O<sup>−</sup>); therefore its carbonyl accepts the carbanion’s charge less well than a ketone’s. The same effect makes amide α-H still less acidic (≈ 30).")
    q(45, "(JEE-type) How many of the following compounds will liberate methane on treatment with CH<sub>3</sub>MgI? CH<sub>3</sub>OH, CH<sub>3</sub>COOH, CH<sub>3</sub>CONH<sub>2</sub>, CH<sub>3</sub>COCH<sub>3</sub>, HC≡CH, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, CH<sub>3</sub>COOCH<sub>3</sub>, H<sub>2</sub>O.",
      None, "6  (CH<sub>3</sub>OH, CH<sub>3</sub>COOH, CH<sub>3</sub>CONH<sub>2</sub>, HC≡CH, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>, H<sub>2</sub>O)", "Each has an active H more acidic than CH<sub>4</sub>. Acetone does not liberate CH<sub>4</sub> because the Grignard adds to its C=O (a small amount of enolisation may occur), and the ester is attacked at C=O. Acetamide has two N–H (2 equivalents).")
