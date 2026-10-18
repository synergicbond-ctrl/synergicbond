from .common import *
from engine.orb import *
from . import intro


def resonance_fig(eid, start, steps, final=None):
    d = mech(eid, start, steps, expect_final=final, width=680)
    return d


def bridged_cpc():
    """cyclopropylcarbinyl / cyclobutyl / homoallyl family with product ratios."""
    f1 = Frag("[CH2+:1][CH:2]1[CH2:3][CH2:4]1", label="cyclopropylcarbinyl")
    f2 = Frag("[CH+:1]1[CH2:2][CH2:3][CH2:4]1", label="cyclobutyl")
    f3 = Frag("[CH2+:1][CH2:2][CH:3]=[CH2:4]", label="homoallyl (contributor)")
    svg, w, h = scheme([f1, Arrow('eq', ''), f2, Arrow('eq', ''), f3], width=680)
    return dict(svg=svg, w=w, h=h)


def nonclassical_norbornyl():
    f_cl = Frag("[CH:1]12[CH+:2][CH2:3][CH:4]([CH2:7]1)[CH2:5][CH2:6]2", label="classical (open) 2-norbornyl")
    # schematic only: skeleton of the carbon framework; H counts are not implied (3c-2e bond, + shared by C1, C2, C6)
    f_br = Frag("[CH:1]12[CH2:2][CH2:3][CH:4]([CH2:7]1)[CH2:5][CH2:6]2", dashed=[(2, 6)], label="σ-bridged (non-classical)",
                cnotes=[([1, 2, 6], "+", 0, 0)])
    svg, w, h = scheme([f_cl, Arrow('rxn', 'σ-delocalisation'), f_br], width=680)
    return dict(svg=svg, w=w, h=h)


def build(B):
    B.part("Part 4", "Carbocation Stability: Complete Advanced Treatment")
    B.p("<b>What ‘stability’ means.</b> Four different observables are routinely mixed up and must be kept apart: "
        "(1) <i>gas-phase thermodynamic stability</i>, measured by the hydride ion affinity (HIA) R<sup>+</sup> + H<sup>−</sup> → R–H (smaller HIA = more stable cation) or the corresponding calculated energies – this reflects the <i>intrinsic electronic</i> stabilisation, free of solvent; "
        "(2) <i>stability in solution toward water</i>, pK<sub>R+</sub> = pH at which [R<sup>+</sup>] = [ROH], applicable only to very stable cations; "
        "(3) <i>substituent stabilisation</i> expressed by σ<sup>+</sup> constants (Brown–Okamoto), derived from the solvolysis of ArC(CH<sub>3</sub>)<sub>2</sub>Cl; "
        "(4) <i>ionisation rates</i> (solvolysis), which depend on the stability of the cation <i>and</i> on the leaving group, solvent, ion-pair return, nucleophilic solvent assistance (k<sub>s</sub>), neighbouring-group participation (k<sub>Δ</sub>) and strain relief, "
        "and therefore track the cation’s stability only when all of these are held constant and the transition state is late. Every problem in Part 5 states which observable is meant.")
    B.warn("Orders obtained in the gas phase can differ from, or even invert, orders in solution (alkyl-substituted benzyl cations: gas phase t-Bu &gt; i-Pr &gt; Et &gt; Me, solution Me ≳ Et &gt; i-Pr &gt; t-Bu – the Baker–Nathan order – because larger alkyl groups are solvated less effectively). "
           "Where an order below depends on the medium, the medium is stated.")
    # 4.1
    B.h2("4.1  Inductive effect")
    B.p("A σ-framework effect: electronegativity differences polarise σ bonds. <b>+I</b> (electron-donating) groups – alkyl groups, and especially more polarisable and more electropositive groups such as SiMe<sub>3</sub>, SnMe<sub>3</sub> – push electron density toward the cationic carbon and lower its energy; "
        "<b>−I</b> groups (F, Cl, OR, NR<sub>3</sub><sup>+</sup>, NO<sub>2</sub>, CN, CF<sub>3</sub>, C=O) pull density away and raise it. The effect falls off roughly by a factor of 2–3 per intervening bond, so it is dominant for α and β substituents, small for γ. "
        "The field (through-space) component is important in rigid frameworks (4-substituted bicyclo[2.2.2]octyl systems). "
        "<b>Important caveat:</b> −I groups attached by a lone-pair atom (OR, SR, NR<sub>2</sub>, Hal) at the α position are overall <i>stabilising</i> because the +M effect outweighs −I (CH<sub>3</sub>OCH<sub>2</sub><sup>+</sup> is far more stable than CH<sub>3</sub>CH<sub>2</sub><sup>+</sup>), while the same groups at β position are destabilising unless they can bridge. "
        "Strongly −I groups on the cationic carbon are dramatically destabilising: α-CF<sub>3</sub> and α-carbonyl groups reduce solvolysis rates of tertiary systems by many orders of magnitude (Tidwell).")
    # 4.2
    B.h2("4.2  Mesomeric (resonance) effects")
    B.p("A π-bond or lone pair attached to the cationic carbon delocalises the charge (π→p or n→p overlap). <b>+M</b> groups (NR<sub>2</sub> &gt; NHR &gt; OH ≈ OR &gt; SR &gt; aryl ≈ vinyl &gt; halogen) stabilise; <b>−M</b> groups (C=O, CN, NO<sub>2</sub>, SO<sub>2</sub>R, CF<sub>3</sub> by negative hyperconjugation/induction) destabilise by competing for the same orbital or by withdrawing π density. "
        "Resonance changes <i>only electron positions</i> and is shown with the double-headed arrow ↔; curved arrows show how to go from one contributor to the next.")
    B.fig(resonance_fig("4.2a", "[CH2+:1]" + Ph(2, para="[O:8][CH3:9]"),
        [St(A(('b', 2, 3), ('nb', 2, 1), 0.5), "", kind="res"), St(A(('b', 4, 5), ('nb', 4, 3), 0.5), "", kind="res"), St(A(('lp', 8), ('nb', 8, 5), 0.5), "", kind="res")]),
        "Figure 4.1  p-Methoxybenzyl cation: charge delocalised from CH<sub>2</sub> to the ortho/para carbons, and finally onto oxygen (an oxocarbenium contributor; every atom has an octet).")
    B.ul([
        "<b>Position matters.</b> Charge in a benzyl cation sits on the ortho and para carbons, not meta. A +M group at p (or o) conjugates directly with the charge (σ<sup>+</sup>(p-OMe) = −0.78) while at m only its −I effect operates (σ<sup>+</sup>(m-OMe) = +0.05). A −M group at p (σ<sup>+</sup>(p-NO<sub>2</sub>) = +0.79) is worse than at m (+0.67), because at p it is conjugated with the charge-bearing carbon.",
        "<b>Halogens</b> have strong −I but a real +M effect (lone-pair donation); at p-F the two nearly cancel (σ<sup>+</sup> = −0.07), at p-Cl −I wins slightly (+0.11), at m-Cl only −I operates (+0.40).",
        "<b>Resonance requires coplanarity.</b> A π donor can only help if its p orbitals can align with the empty p orbital: see 4.8 (steric inhibition of resonance) and the vinyl/aryl cations (empty orbital in the nodal plane of the π system: no resonance).",
        "<b>Resonance energy</b> is large for the first donor and levels off for successive ones: allyl ≈ 20+ kcal mol<sup>−1</sup> better than a localised secondary cation of the same substitution in the gas phase; each further vinyl unit adds less (pentadienyl, heptatrienyl).",
        "<b>The ranking of mesomeric donors</b> depends on orbital energy match and overlap: N (2p) &gt; O (2p) &gt; S (3p, poorer overlap but more polarisable) for the same carbon framework; in solution oxocarbenium ions are further stabilised by solvation."])
    # 4.3
    B.h2("4.3  Hyperconjugation")
    B.p("Donation of σ-bond electrons into the empty p orbital: <b>σ(C–H) → p</b> and <b>σ(C–C) → p</b> (and σ(C–M) → p for M = Si, Ge, Sn, which are much better donors because σ<sub>C–M</sub> lies higher in energy). "
        "The stabilisation scales with (i) the donor ability of the σ bond (C–C ≳ C–H in the gas phase; C–Sn &gt; C–Ge &gt; C–Si ≫ C–C), (ii) the number of aligned bonds and (iii) the alignment angle θ between the σ bond and the empty p orbital (overlap ∝ cos<sup>2</sup>θ; zero at 90°). "
        "In a freely rotating alkyl group on average ≈ 2 of the 3 C–H bonds are well aligned at any time; <b>simply counting α-hydrogens is not a valid ranking device</b> – t-Bu<sup>+</sup> (9 α-H) vs 2-adamantyl, bridgehead or conformationally locked cations show that orbital alignment, strain and polarisability also matter. "
        "Computations show that C–C hyperconjugation is as important as C–H; polarisability (stabilisation of the charge by larger alkyl groups) makes larger alkyl groups better in the gas phase (recalled HIA, kcal mol<sup>−1</sup>: t-Bu<sup>+</sup> ≈ 231 → t-amyl<sup>+</sup> ≈ 225 → Et<sub>3</sub>C<sup>+</sup> lower still).")
    B.fig(intro.hyperconj(), "Figure 4.2  σ(C–H) → p hyperconjugation (the C–H bond must lie roughly parallel to the p-orbital axis).")
    B.p("<b>Heteroatom hyperconjugation.</b> Lone pairs and σ bonds of heteroatoms attached β to the cation can also donate: β-silicon (C–Si anti-periplanar to the leaving group) stabilises a β-carbocation by ≈ 38 kcal mol<sup>−1</sup> relative to hydrogen in some computations (≈ 10<sup>12</sup> rate acceleration in rigid systems), "
        "β-Ge and β-Sn are even stronger; β-halogens at 3° carbons may bridge instead (4.6). Negative hyperconjugation (n→σ*, e.g. in α-sulfonyl carbanions) is the anionic analogue and does not apply to cations.")
    # 4.4
    B.h2("4.4  Aromaticity and antiaromaticity")
    items = []
    for lab, smi in [("cyclopropenium C₃H₃⁺  2π, aromatic", "C1=C[CH+]1"), ("cyclopentadienyl C₅H₅⁺  4π, antiaromatic", "C1=CC=C[CH+]1"),
                     ("tropylium C₇H₇⁺  6π, aromatic", "[CH+]1C=CC=CC=C1"), ("homotropylium C₈H₉⁺  homoaromatic", "[CH+]1C=CC=CC=CC1")]:
        items += [Frag(smi, label=lab), Gap(14)]
    svg, w, h = scheme(items[:-1], width=680, gap=0)
    B.fig(dict(svg=svg, w=w, h=h), "Figure 4.3  Cyclic cations with a planar array of p orbitals: (4n+2) π electrons stabilise (cyclopropenium, tropylium); 4n π electrons destabilise (cyclopentadienyl cation, a triplet-ground-state species that is far less stable than the allyl cation). Homotropylium is stabilised by through-space (homo)conjugation across one sp<sup>3</sup> carbon.")
    B.ul([
        "<b>Aromatic cations:</b> cyclopropenium (pK<sub>R+</sub> of C<sub>3</sub>Ph<sub>3</sub><sup>+</sup> +3.1; tris(dialkylamino)- and tricyclopropyl derivatives far higher), tropylium (pK<sub>R+</sub> +4.7: isolable as stable Br<sup>−</sup>, BF<sub>4</sub><sup>−</sup> salts, planar, all C–C equal), cyclooctatetraene dications.",
        "<b>Antiaromatic cations:</b> cyclopentadienyl cation and the 9-fluorenyl cation destabilised by 4π delocalisation. The 9-phenylfluorenyl cation (pK<sub>R+</sub> ≈ −10.8) is some 10<sup>4</sup> times less stable than trityl (−6.6) although the fluorenyl ring is planar – a clean demonstration of antiaromatic destabilisation. By contrast the 9-phenylxanthylium ion (pK<sub>R+</sub> ≈ +1.1) is strongly stabilised: the ring is planar and the oxygen lone pair donates without producing a 4π cycle.",
        "<b>Always check geometry and electron count</b> before declaring a cyclic conjugated cation aromatic: planarity may be unattainable (e.g. cyclooctatetraenyl cation puckers), and an sp<sup>3</sup> centre interrupts the cycle."])
    # 4.5
    B.h2("4.5  Cyclopropylcarbinyl stabilisation and ‘dancing resonance’")
    B.p("A cyclopropane C–C bond is a bent (‘banana’) σ bond with high p character and high-lying HOMO; the cyclopropyl group therefore behaves like a π donor towards an adjacent empty p orbital – <b>provided the cation adopts the <i>bisected</i> conformation</b>, in which the empty p orbital is parallel to the plane of the ring and overlaps the two vicinal ring bonds. "
        "In the perpendicular conformation the overlap is nil. As a donor the cyclopropyl group is better than phenyl (σ<sup>+</sup>: c-C<sub>3</sub>H<sub>5</sub> −0.41, C<sub>6</sub>H<sub>5</sub> −0.18) and, in tertiary systems, better than methyl: tricyclopropylcarbinyl cation (pK<sub>R+</sub> −2.3) is more stable than trityl (−6.6).")
    B.fig(intro.bisected(), "Figure 4.4  Cyclopropylcarbinyl cation: bisected (left, strongly stabilised) and perpendicular (right, no stabilisation) conformations. Orbital view; rings viewed edge-on.")
    B.fig(bridged_cpc(), "Figure 4.5  The C<sub>4</sub>H<sub>7</sub><sup>+</sup> manifold. The solvolysis of cyclopropylcarbinyl and of cyclobutyl derivatives gives, in water, cyclopropylcarbinol : cyclobutanol : homoallyl alcohol ≈ 48 : 47 : 5 (Roberts, Mazur). These are <b>product ratios</b>, not cation populations; the cation is better described as a single σ-delocalised ‘bicyclobutonium’-like structure than as a mixture of three distinct classical ions.")
    B.p("<b>‘Dancing resonance’</b> describes how, in this ion, the three CH<sub>2</sub> carbons exchange identity by rapid, degenerate rearrangement through the delocalised structure, so that the carbons become equivalent on the NMR timescale. "
        "It is not ordinary resonance, because the nuclei move. The textbook drawing of three localised cations connected by ⇌ arrows is therefore a <i>caricature</i>: calculations and superacid NMR place the bicyclobutonium-like (σ-bridged, C<sub>s</sub>) and the bisected cyclopropylcarbinyl structures within about 1 kcal mol<sup>−1</sup> of each other and the barrier between them is minute; the open homoallyl and the classical puckered cyclobutyl ions are not distinct, deep minima.")
    # 4.6
    B.h2("4.6  Neighbouring-group participation and bridged ions")
    B.p("A genuine bridged intermediate forms when a group with a lone pair, π bond or σ bond <b>displaces the leaving group from the rear</b> (anti-periplanar) and ends up bonded to <i>both</i> carbons. "
        "It differs from ordinary resonance in three ways: (i) the neighbour <b>moves</b> toward the cationic carbon and a new σ bond (3-membered or 5-membered ring) is formed; (ii) the stereochemical outcome is dictated by two successive inversions (net retention); (iii) the rate is higher than the intrinsic leaving-group ability suggests (anchimeric assistance).")
    items = []
    for lab, smi in [("episulfonium (S)", "C1C[S+](C)1"), ("bromonium (Br)", "C1C[Br+]1"), ("acetoxonium (O, 5-ring)", "CC1=[O+]CCO1"), ("phenonium (π, spiro)", "C1CC12C=CC=CC2".replace("C=CC=CC2", "C=C[CH+]C=C2")), ("aziridinium (N)", "C1C[N+](C)(C)1")]:
        items += [Frag(smi, label=lab), Gap(10)]
    svg, w, h = scheme(items[:-1], width=680, gap=0)
    B.fig(dict(svg=svg, w=w, h=h), "Figure 4.6  Bridged onium and phenonium ions. In each, positive charge is carried largely by the bridging heteroatom (or spread over the cyclohexadienyl ring in phenonium) and no open ‘primary’ cation exists.")
    B.ul([
        "<b>Order of anchimeric power</b> for a given leaving group: roughly S ≈ N (free lone pair) &gt; I &gt; Br &gt; Cl ≈ aryl &gt; O (ether) – a lone pair donates best when its atom is large/polarisable and not strongly bound to its own nucleus; the actual rate enhancement depends on solvent, ring size formed and conformation.",
        "<b>π participation:</b> an aryl ring attacks C from the rear through its π face to give phenonium (Cram, Winstein); a C=C does the same in anti-7-norbornenyl tosylate (≈ 10<sup>11</sup> faster than 7-norbornyl) and in homoallyl → cyclopropylcarbinyl systems.",
        "<b>σ participation:</b> a C–C or C–H σ bond (e.g. C1–C6 in exo-2-norbornyl; Wagner–Meerwein) acts as the nucleophile – see 4.9.",
        "<b>Test to separate bridging from resonance:</b> if two structures differ in the <i>position of atoms</i> (a ring closes), bridging is involved; if only electrons move, it is resonance."])
    # 4.7
    B.h2("4.7  d-Orbital resonance claims")
    B.p("Older textbooks explain the stabilisation of α-sulfonyl and α-phosphoryl carbanions, the planarity of silylamines, or the shortness of S–O bonds in sulfones/phosphates by <b>d<sub>π</sub>–p<sub>π</sub> bonding</b> (3d orbitals on S, P, Si accept electron density). Modern calculations show that 3d orbitals are too high in energy and too diffuse to participate significantly; d-functions in basis sets act as polarisation functions only. "
        "The effects are explained instead by: (i) <b>negative hyperconjugation</b> – donation of a lone pair into an antibonding σ*(S–O), σ*(S–C) or σ*(P–C) orbital; (ii) <b>polarisation</b> of the large, polarisable atom; (iii) strongly polarised ‘ylidic’ bonds (S<sup>+</sup>–O<sup>−</sup>, P<sup>+</sup>–C<sup>−</sup>) without a true double bond and with the octet intact. "
        "For <b>carbocations</b> the practical consequences are: α-silyl and α-sulfonyl substituents do <i>not</i> stabilise a cation (α-silyl cations are destabilised relative to alkyl; a sulfone is a strong −I group), whereas <b>β-silyl</b> stabilisation is σ-hyperconjugative and strong; and a sulfur lone pair (R–S–C<sup>+</sup>) donates through <i>p–p</i> overlap (thionium ions) without d orbitals. "
        "Hypervalent descriptions (sulfonium ylide S=C) are therefore teaching shorthand, not electronic reality.")
    # 4.8
    B.h2("4.8  Steric inhibition of resonance (SIR)")
    B.p("If bulky ortho (or flanking) groups force the π donor out of coplanarity with the cationic centre, overlap falls as cos θ (energy as cos<sup>2</sup>θ) and the resonance stabilisation is partly lost. "
        "The classic quantitative case: the dimethylamino group is an extreme π donor (σ<sup>+</sup> = −1.7) in 4-(dimethylamino)benzyl and trityl-type cations; but when two methyl groups flank the NMe<sub>2</sub> (3,5-dimethyl-4-dimethylamino) the amine is twisted ≈ 60–90° out of the ring plane, the n→π donation is largely switched off and the group behaves close to a simple inductive substituent (σ<sup>+</sup> much less negative; the nitrogen lone pair cannot reach the charge).")
    f1 = Frag("CN(C)C1=CC=C([CH2+])C=C1", label="planar, full +M")
    f2 = Frag("CC1=CC([CH2+])=CC(C)=C1N(C)C", label="NMe₂ twisted: SIR")
    svg, w, h = scheme([f1, Arrow('rxn', 'o,o′-Me₂ flank N'), f2], width=680)
    B.fig(dict(svg=svg, w=w, h=h), "Figure 4.7  Steric inhibition of resonance: the flanking methyls (3,5 to the CH<sub>2</sub><sup>+</sup>, ortho to N) twist the amine; the nitrogen lone pair then lies in the ring plane and cannot overlap with the π system.")
    B.warn("<b>No ranking by sterics alone.</b> SIR changes the <i>resonance</i> contribution only. Methyl groups at the same time exert +I/hyperconjugation and (in planar systems) can stabilise. Comparisons in Part 5 therefore always fix the other effects or state the observable.")
    # 4.9
    B.h2("4.9  Nonclassical carbocations")
    B.p("In a <b>classical</b> carbocation the charge is localised on one carbon (or delocalised by resonance only) and every bond is a 2c–2e bond. In a <b>nonclassical</b> ion σ electrons are delocalised over three or more nuclei by a 3c–2e bond, with <i>partial</i> bonds drawn as dotted lines. "
        "The best-established examples: 2-norbornyl, cyclopropylcarbinyl/bicyclobutonium, phenonium (aryl-bridged), protonated cyclopropane (C<sub>3</sub>H<sub>7</sub><sup>+</sup> corner-protonated form), halonium ions, and the carbonium ions CH<sub>5</sub><sup>+</sup>, C<sub>2</sub>H<sub>7</sub><sup>+</sup>.")
    B.fig(nonclassical_norbornyl(), "Figure 4.8  2-Norbornyl cation: classical structure (left, positive charge on C-2) and the σ-bridged non-classical structure (right, schematic: the C1–C6 σ bond delocalises toward C-2 – dotted line – and the positive charge is shared by C1, C2 and C6 inside the three-centre triangle). The two are <b>not</b> resonance forms (atoms move); the bridged structure is the better description of the real ion.")
    B.ul([
        "<b>Kinetic evidence</b> (Winstein, 1950s): exo-2-norbornyl brosylate solvolyses ≈ 350 times faster than the endo isomer; both give exo product only and the product from optically active exo is racemic, as expected if σ(C1–C6) assists ionisation anti-periplanar to the exo leaving group, producing a symmetric (C<sub>s</sub>) bridged ion that is attacked at either of two equivalent carbons.",
        "<b>Spectroscopic evidence</b> (Olah, 1960s–): in superacid at low temperature the <sup>13</sup>C NMR shows rapid 6,2- and 3,2-hydride shifts and Wagner–Meerwein exchange that average carbon signals; at very low temperature (−150 °C, solid-state studies) the signals match a bridged structure with a strongly deshielded pentacoordinate-type carbon environment.",
        "<b>Structural evidence:</b> a crystal structure of the 2-norbornyl cation with an [Al<sub>2</sub>Br<sub>7</sub>]<sup>−</sup> counterion (Scholz, Kramer, Sieber et al., <i>Science</i> 2013) shows the bridged geometry, with C–C distances between the three bridging carbons intermediate between single and bridged-cyclopropane values. (Recalled from the literature; the source was not accessible here.)",
        "<b>The classical side (H. C. Brown):</b> the high exo/endo ratio can be explained by steric hindrance to ionisation of the endo isomer and by rapid equilibration of classical ions. The consensus today is that the <b>parent 2-norbornyl cation is bridged</b>, whereas tertiary derivatives (2-methyl-2-norbornyl, 2-aryl-2-norbornyl) are <b>classical</b> because the substituent already supplies enough stabilisation.",
        "<b>General rule:</b> bridging is a ‘last resort’ stabilisation. It occurs when the classical ion would be primary or secondary and unstabilised and the geometry offers an anti-periplanar σ (or π, or lone-pair) donor; it disappears when an aryl, cyclopropyl or tertiary substitution stabilises the cation already."])
    # 4.10
    B.h2("4.10  Carbonium ions (hypercoordinate carbon)")
    B.p("CH<sub>5</sub><sup>+</sup> (Figure 1.4) is the prototype. It has <b>eight</b> valence electrons for <b>five</b> C–H connections, so at least one bond is 3c–2e; the structure is fluxional (all five H exchange) and has an H<sub>2</sub> unit loosely bound to CH<sub>3</sub><sup>+</sup>. "
        "C<sub>2</sub>H<sub>7</sub><sup>+</sup> (protonated ethane) has a C–C or C–H σ bond protonated. In superacid, alkanes are protonated to carbonium ions, which lose H<sub>2</sub> (→ carbenium) or CH<sub>4</sub>/alkanes (→ smaller carbenium ions: protolytic cracking, isomerisation). "
        "<b>Carbonium and carbenium ions are different bonding types and cannot be put on one stability scale by counting substituents.</b> Their relation is chemical, not energetic ranking: R<sub>3</sub>C–H + H<sup>+</sup> ⇌ [R<sub>3</sub>C(H<sub>2</sub>)]<sup>+</sup> → R<sub>3</sub>C<sup>+</sup> + H<sub>2</sub>.")
    # 4.11
    B.h2("4.11  Additional effects")
    B.ul([
        "<b>Ring strain and I-strain.</b> Ionisation changes carbon from sp<sup>3</sup> to sp<sup>2</sup>. H. C. Brown: 1-methylcyclopentyl chloride solvolyses ≈ 40× faster than t-BuCl, 1-methylcyclohexyl ≈ 3× slower (the six-membered ring loses a stable staggered arrangement and gains eclipsing strain), 1-methylcycloheptyl faster again; cyclopropyl and cyclobutyl cations are strained (bond angle 60°/90° versus 120°) and ionise only with ring-opening/participation.",
        "<b>Bridgehead constraint.</b> The cation must be able to flatten. Rates of solvolysis (80 % EtOH, 25 °C, relative to t-BuBr): 1-adamantyl ≈ 10<sup>−3</sup>, bicyclo[2.2.2]oct-1-yl smaller, bicyclo[2.2.1]hept-1-yl (norbornyl) ≈ 10<sup>−13</sup> (orders of magnitude recalled from Bingham–Schleyer; the sequence is secure) – a measure of the strain, not just of the cation’s intrinsic stability (Bartlett, Schleyer).",
        "<b>Geometry/alignment.</b> Anti-periplanar σ bonds (C–Si, C–C) and gauche vs anti hyperconjugation; bisected vs perpendicular cyclopropylcarbinyl; rigid frameworks fix the alignment.",
        "<b>Field effects</b> of remote polar groups; <b>counterion</b> and ion pairing (a tight, nucleophilic counterion such as Cl<sup>−</sup> can covalently collapse the cation; SbF<sub>6</sub><sup>−</sup> cannot); <b>solvation</b> (H-bond donors stabilise the incipient anion; ion-dipole solvation favours small, localised cations, which is why alkyl order inverts in solution relative to the gas phase).",
        "<b>Isotope effects.</b> A CD<sub>3</sub> group is a poorer hyperconjugative donor than CH<sub>3</sub> (zero-point-energy difference): β-d<sub>3</sub> substitution slows ionisation by a factor ≈ 1.3–2.4 per CD<sub>3</sub>, a probe of hyperconjugation in the transition state."])
    B.table(["Effect", "Acts through", "Strength guide", "Common error to avoid"],
        [["Resonance (+M)", "p(π)/n → p", "NR<sub>2</sub> &gt; OR &gt; SR &gt; aryl &gt; vinyl; strongest, needs coplanarity", "forgetting SIR; counting meta as conjugated"],
         ["Hyperconjugation", "σ → p", "C–Sn &gt; C–Ge &gt; C–Si &gt; C–C ≳ C–H; angle-dependent", "counting α-H blindly"],
         ["Induction/field", "σ framework, space", "−I destabilises; +I stabilises; falls ≈ 2–3× per bond", "overlooking +M of α-heteroatoms"],
         ["Aromaticity", "cyclic (4n+2) π", "very large (tropylium, cyclopropenium)", "calling 4n cations ‘stable’"],
         ["Ring strain", "rehybridisation", "I-strain (5 &gt; 6), bridgehead penalties", "ignoring conformational change on ionisation"],
         ["Bridging (σ/π/n)", "3c–2e or 3-ring onium", "large for secondary/primary systems only", "drawing both bridged and open ions as separate intermediates"],
         ["Solvent/ion pair", "electrostatics, H-bonding", "can invert gas-phase orders", "using solution rates as intrinsic stability"]])
