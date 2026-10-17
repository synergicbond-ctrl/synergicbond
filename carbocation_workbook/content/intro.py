from .common import *
from engine import orb
from engine.orb import *
import math

RAD = lambda smi: smi


def gallery():
    """Five intermediates, orbital cartoons."""
    W, H, pw = 660, 150, 132
    P = []
    def panel(i, title):
        P.append(text(title, i * pw + pw / 2, 142, 12, weight="bold"))
    # 1 carbocation
    ox = 0; cx, cy = ox + 66, 70
    P += [line(cx, cy, cx - 42, cy + 12), line(cx, cy, cx + 42, cy + 12), wedge(cx, cy, cx + 6, cy + 38),
          lobe(cx, cy, -90, 40, 13, "#fff", dash=True), lobe(cx, cy, 90, 40, 13, "#fff", dash=True), text("+", cx + 12, cy - 6, 14)]
    P.append(text("empty p", cx + 38, cy - 30, 11, "start"))
    panel(0, "carbocation R₃C⁺")
    # 2 carbanion
    ox = pw; cx, cy = ox + 66, 78
    P += [line(cx, cy, cx - 40, cy + 18), line(cx, cy, cx + 40, cy + 18), wedge(cx, cy, cx + 4, cy + 36),
          lobe(cx, cy, -90, 44, 15, "#e8e0f4"), dot(cx - 4, cy - 26), dot(cx + 4, cy - 26), text("−", cx + 14, cy + 2, 15)]
    P.append(text("lone pair", cx + 20, cy - 38, 11, "start"))
    panel(1, "carbanion R₃C⁻")
    # 3 radical
    ox = 2 * pw; cx, cy = ox + 66, 70
    P += [line(cx, cy, cx - 42, cy + 12), line(cx, cy, cx + 42, cy + 12), wedge(cx, cy, cx + 6, cy + 38),
          lobe(cx, cy, -90, 40, 13, "#fbe9d0"), lobe(cx, cy, 90, 40, 13, "#fbe9d0"), dot(cx, cy - 20, 2)]
    P.append(text("one e⁻ in p", cx + 38, cy - 30, 11, "start"))
    panel(2, "free radical R₃C•")
    # 4 singlet carbene
    ox = 3 * pw; cx, cy = ox + 66, 88
    P += [line(cx, cy, cx - 28, cy + 30), line(cx, cy, cx + 28, cy + 30),
          lobe(cx, cy, -90, 44, 15, "#e8e0f4"), dot(cx - 4, cy - 28), dot(cx + 4, cy - 28),
          lobe(cx, cy, 0, 32, 10, "#fff", dash=True), lobe(cx, cy, 180, 32, 10, "#fff", dash=True)]
    P.append(text("sp² pair", cx + 20, cy - 40, 11, "start"))
    P.append(text("empty p", cx + 34, cy - 4, 11, "start"))
    panel(3, "singlet carbene")
    # 5 triplet carbene
    ox = 4 * pw; cx, cy = ox + 66, 88
    P += [line(cx, cy, cx - 36, cy + 22), line(cx, cy, cx + 36, cy + 22),
          lobe(cx, cy, -90, 40, 13, "#fbe9d0"), dot(cx, cy - 22, 2),
          lobe(cx, cy, 0, 32, 10, "#fbe9d0"), lobe(cx, cy, 180, 32, 10, "#fbe9d0"), dot(cx + 14, cy, 2)]
    panel(4, "triplet carbene")
    return wrap(P, W, H)


def planar_cation():
    P = []
    cx, cy = 150, 96
    P += [line(cx, cy, cx - 85, cy + 18), line(cx, cy, cx + 85, cy + 18), wedge(cx, cy, cx + 12, cy + 58),
          text("R", cx - 95, cy + 24, 14), text("R", cx + 95, cy + 24, 14), text("R", cx + 12, cy + 74, 14),
          lobe(cx, cy, -90, 66, 22, "#dfe6f2"), lobe(cx, cy, 90, 66, 22, "#dfe6f2"),
          text("+", cx - 14, cy - 2, 17), text("empty 2p orbital (LUMO), ⟂ to the R–C–R plane", cx + 40, cy - 56, 12, "start"),
          text("120°", cx - 50, cy + 40, 12), text("sp² σ framework, C is trigonal planar", cx + 40, cy + 98, 12, "start")]
    # angle arc
    P.append(f'<path d="M{cx-30},{cy+8} A32,32 0 0 0 {cx+8},{cy+36}" fill="none" stroke="{INK}" stroke-width="1"/>')
    return wrap(P, 460, 190)


def hyperconj():
    """σ(C-H) -> empty p, two views."""
    P = []
    # left: side view
    cx, cy = 100, 88
    P += [line(cx, cy, cx - 60, cy + 22), line(cx, cy, cx - 60, cy - 22) if False else "",
          lobe(cx, cy, -90, 52, 17, "#dfe6f2"), lobe(cx, cy, 90, 52, 17, "#dfe6f2"), text("+", cx + 12, cy + 2, 14)]
    # C+ with its two substituents (right side) and neighbouring C-H
    P += [line(cx, cy, cx + 70, cy + 20), line(cx, cy, cx, cy + 0), ]
    # neighbouring carbon to the left with one C-H aligned with p lobes
    nx, ny = cx - 62, cy + 18
    P += [line(cx, cy, nx, ny), text("C", nx - 8, ny + 14, 13),
          line(nx, ny, nx - 6, ny - 52, 1.5), text("H", nx - 6, ny - 58, 12),
          lobe(nx - 3, ny - 24, 90, 24, 9, "#fbe9d0", dash=True) if False else "",
          line(nx, ny, nx - 40, ny + 22), line(nx, ny, nx - 14, ny + 44)]
    P.append(text("C–H σ bond parallel to the empty p orbital: maximum overlap", 20, 150, 11.5, "start"))
    P.append(curved_path(nx - 6, ny - 40, cx - 8, cy - 40, nx + 14, ny - 72))
    return wrap(P, 340, 160)


def bisected():
    """Cyclopropylcarbinyl: bisected vs perpendicular."""
    P = []
    # left: bisected -> p orbital in plane bisecting ring (parallel to ring plane)
    def tri(x, y, s=22):
        return (f'<path d="M{x},{y-s} L{x-s*0.95},{y+s*0.6} L{x+s*0.95},{y+s*0.6} Z" fill="none" stroke="{INK}" stroke-width="1.5"/>')
    P.append(tri(60, 70))
    P.append(line(60 + 21, 70 + 13, 110, 83))
    P.append(lobe(110, 83, -90, 36, 12, "#dfe6f2")); P.append(lobe(110, 83, 90, 36, 12, "#dfe6f2"))
    P.append(text("+", 124, 82, 14))
    P.append(text("bisected: p ∥ ring plane — good overlap", 20, 150, 11.5, "start"))
    # right: perpendicular
    P.append(tri(300, 70))
    P.append(line(300 + 21, 70 + 13, 350, 83))
    P.append(lobe(350, 83, 0, 36, 12, "#fff", dash=True)); P.append(lobe(350, 83, 180, 36, 12, "#fff", dash=True))
    P.append(text("+", 360, 70, 14))
    P.append(text("perpendicular: poor overlap", 270, 150, 11.5, "start"))
    return wrap(P, 520, 160)


def ch5plus():
    P = []
    cx, cy = 130, 80
    P += [line(cx, cy, cx - 56, cy + 30), line(cx, cy, cx + 56, cy + 30), wedge(cx, cy, cx + 4, cy + 54),
          line(cx, cy, cx - 22, cy - 46, 1.5, dash="4,3"), line(cx, cy, cx + 22, cy - 46, 1.5, dash="4,3"),
          line(cx - 22, cy - 46, cx + 22, cy - 46, 1.2),
          text("H", cx - 66, cy + 38, 14), text("H", cx + 66, cy + 38, 14), text("H", cx + 8, cy + 72, 14),
          text("H", cx - 28, cy - 52, 14), text("H", cx + 28, cy - 52, 14), text("⁺", cx + 4, cy + 4, 14)]
    P.append(text("three 2-centre bonds + one 3-centre-2-electron bond (C···H···H)", 20, 150, 11.5, "start"))
    P.append(text("[CH₅]⁺ — carbonium ion", 260, 90, 13, "start"))
    return wrap(P, 520, 160)


def build(B):
    # ----------------------------------------------------------------- PART 0
    B.part("Part 0", "Reaction Intermediates: Bond Fission, Intermediates, Electrophiles and Nucleophiles")
    B.h2("0.1  Homolytic and heterolytic bond fission")
    B.p("A covalent A–B bond can break in two ways. In <b>homolysis</b> the bonding pair is shared equally: each fragment keeps one electron, giving two radicals. "
        "Single-electron movement is shown with <b>fishhook</b> (half-headed) arrows. In <b>heterolysis</b> the whole pair goes to one fragment, giving a cation and an anion; the electron pair "
        "movement is shown with a <b>full-headed</b> curved arrow that starts at the bond and ends at the atom that keeps the pair. Reaction arrows (→, ⇌) are never used for electron flow.")
    with chem.allow_radicals():
        h1 = Frag("[Cl:1][Cl:2]", arrows=[{'from': ('b', 1, 2), 'to': ('a', 1), 'bend': 1.1, 'radical': True, 'p1': (4, -10)},
                                       {'from': ('b', 1, 2), 'to': ('a', 2), 'bend': -1.1, 'radical': True, 'p1': (-4, -10)}])
        h2 = Frag("[Cl:1].[Cl:2]")
        h3 = Frag("[CH3:1][O:2][O:3][CH3:4]", arrows=[{'from': ('b', 2, 3), 'to': ('a', 2), 'bend': 0.7, 'radical': True},
                                                   {'from': ('b', 2, 3), 'to': ('a', 3), 'bend': -0.7, 'radical': True}])
        h4 = Frag("[CH3:1][O:2].[O:3][CH3:4]")
    e1 = Frag("[CH3:1][C:2]([CH3:3])([CH3:4])[Cl:5]", arrows=[{'from': ('b', 2, 5), 'to': ('lpend', 5, 2), 'bend': -0.5}])
    e2 = Frag("[CH3:1][C+:2]([CH3:3])[CH3:4].[Cl-:5]")
    e3 = Frag("[CH3:1][Mg:2][Br:3]", arrows=[{'from': ('b', 1, 2), 'to': ('a', 1), 'bend': 0.5}])
    e4 = Frag("[CH3-:1].[Mg+:2][Br:3]")
    svg, w, h = scheme([h1, Arrow('rxn', 'hν'), h2, Gap(30), h3, Arrow('rxn', 'Δ'), h4, Br(), e1, Arrow('eq', 'polar solvent'), e2, Gap(30), e3, Arrow('rxn', ''), e4], width=680)
    B.fig(dict(svg=svg, w=w, h=h), "Figure 0.1  Homolysis (fishhook arrows; Cl<sub>2</sub> with light, a peroxide with heat) and heterolysis (full-headed arrows; an alkyl halide in a polar solvent, a C–metal bond).")
    B.ul([
        "<b>Homolysis</b> is favoured by non-polar bonds (Cl–Cl, O–O, C–C, N=N of azo compounds), non-polar solvents or the gas phase, heat or UV light, and by radical-stabilising substituents on the fragments. "
        "Typical bond dissociation enthalpies (kcal mol<sup>−1</sup>): Cl–Cl 58, Br–Br 46, I–I 36, HO–OH ≈ 51, RO–OR ≈ 38, CH<sub>3</sub>–CH<sub>3</sub> 90, H–CH<sub>3</sub> 105, H–C(CH<sub>3</sub>)<sub>3</sub> ≈ 96. Weaker bond ⇒ lower temperature needed.",
        "<b>Heterolysis</b> is favoured by polar bonds (large Δχ), polar protic solvents that solvate both ions (hydrogen bonding to the anion, dipole/lone-pair interaction with the cation), a stable cation and a stable anion, and Lewis-acid assistance. "
        "In the gas phase heterolysis costs far more energy than homolysis; the solvation energy is what makes it feasible in solution.",
        "<b>Direction of heterolysis</b>: the electron pair stays with the more electronegative atom / the better leaving group (R–X → R<sup>+</sup> + X<sup>−</sup>; R–MgBr → R<sup>−</sup> + MgBr<sup>+</sup> with carbon taking the pair because C is more electronegative than Mg).",
        "<b>Typical initiators of homolysis</b>: peroxides (benzoyl peroxide, di-tert-butyl peroxide), azobisisobutyronitrile (AIBN, loses N<sub>2</sub> at 60–80 °C), halogens with light, N-bromosuccinimide with light/peroxide."])
    B.h2("0.2  The reaction intermediates at a glance")
    B.fig(gallery(), "Figure 0.2  Orbital cartoons of the intermediates treated in this book (R = substituent). Solid lobes = occupied; dashed lobes = empty.")
    B.table(["Intermediate", "Valence e⁻ at the centre", "Shape / hybridisation", "Typical generation", "Characteristic fate"],
        [["Carbocation (carbenium)", "6 (sextet)", "planar, sp²; linear sp for vinyl, acylium", "heterolysis of R–X, ROH₂⁺; H⁺ + alkene; diazonium N₂ loss", "nucleophile capture, E1 (−H⁺), rearrangement, addition to π bonds"],
         ["Carbanion", "8 (3 bonds + lone pair)", "pyramidal sp³ (alkyl); planar when delocalised; sp (acetylide)", "deprotonation; metal–halogen exchange; decarboxylation; Grignard/organolithium C–M", "protonation, SN2, addition to C=O, E1cB, elimination"],
         ["Free radical", "7", "planar (or shallow pyramid), sp²; SOMO is a p orbital", "homolysis (heat/light/initiator); single-electron transfer", "chain propagation (abstraction/addition), recombination, disproportionation"],
         ["Carbene", "6 (2 bonds + 2 nonbonding e⁻)", "singlet: bent sp², pair + empty p; triplet: bent/linear, two unpaired e⁻", "α-elimination (CHCl₃/KOH); diazo or diazirine loss of N₂; carbenoid (Zn/Cu, CH₂I₂)", "cyclopropanation, C–H insertion, ylide formation, Wolff rearrangement"],
         ["Nitrene", "6 (1 bond + 2 lone-pair-type e⁻ sets)", "R–N: singlet or triplet (triplet usually ground state)", "azide photolysis/pyrolysis; α-elimination from N-haloamides (concerted in Hofmann/Curtius)", "insertion, aziridination, rearrangement, dimerisation"],
         ["Benzyne (aryne)", "ring C with in-plane 'third' bond", "strained, planar; extra bond from sp² overlap in plane", "ArX + NaNH₂/KNH₂; anthranilic acid + RONO; 2-(Me₃Si)C₆H₄OTf + F⁻", "nucleophilic addition, Diels–Alder, [2+2]"],
         ["Radical ion", "odd electron + charge", "delocalised SOMO in π* (anion) or π (cation)", "Na/NH₃ (Birch), Na + ketone/ nitrile, electrolysis, photo-induced ET", "protonation, dimerisation, fragmentation, further e⁻ transfer"]])
    B.h2("0.3  Electrophiles and nucleophiles (definitions)")
    B.p("A <b>nucleophile</b> is a species that donates an electron pair to form a new bond to an electron-poor atom (Lewis base character in a bond-forming step). "
        "An <b>electrophile</b> is a species that accepts an electron pair to form a new bond (Lewis acid character). In curved-arrow language, the arrow always leaves a nucleophile and arrives at an electrophile. "
        "Basicity and acidity refer to proton transfer (equilibrium); nucleophilicity and electrophilicity refer to bond formation to atoms other than H (rate). Only the <i>definitions and classification</i> are treated here; no ranking of nucleophilicity is attempted.")
    B.table(["Class", "Nucleophiles", "Electrophiles"],
        [["Anions", "HO⁻, RO⁻, X⁻, CN⁻, RS⁻, N₃⁻, R⁻ (carbanions, enolates), H⁻ (hydride donors)", "—"],
         ["Neutral with lone pair", "H₂O, ROH, NH₃, RNH₂, R₃N, R₂S, R₃P, ROR", "—"],
         ["π systems", "alkenes, alkynes, arenes, enols/enol ethers/enamines (C-nucleophiles)", "C=C bearing EWG (Michael acceptors), C≡C–EWG, arenes with NO₂ (SNAr)"],
         ["σ bonds", "C–M (M = Li, Mg, Zn), B–H, Al–H, Si–C (allyl-/aryl-silanes)", "polarised C–X (X = halogen, OTs) – carbon is electrophilic"],
         ["Cations", "—", "H⁺, R⁺, ArN₂⁺, NO₂⁺, NO⁺, X⁺ (from X₂), Hg²⁺, Ag⁺, acylium RCO⁺, iminium, oxocarbenium"],
         ["Neutral, electron-deficient", "—", "BF₃, AlCl₃, SO₃, FeBr₃, ZnCl₂ (Lewis acids); carbenes (singlet); R–C=O, C=N, C≡N carbon; CO₂; epoxides; α,β-unsaturated carbonyls"],
         ["Radicals", "•CR₂OH, •CH₂CH(OH)… (nucleophilic, SOMO high)", "•CF₃, •CCl₃, Br•, RC(=O)O•, •CH(CO₂R)₂ (electrophilic, SOMO low)"]])
    B.box("Ambident nucleophiles (two reactive sites)",
        "<ul><li>CN<sup>−</sup> (C or N), NO<sub>2</sub><sup>−</sup> (N or O), SCN<sup>−</sup> (S or N), enolates (C or O), phenoxide (O or ring C), thiourea/ thioamide (S or N). "
        "The site of attack depends on the electrophile and conditions (hard/soft, ion pairing, solvent); e.g. R–Br + KCN gives mainly R–CN, R–Br + AgCN gives mainly R–NC (isonitrile) because Ag<sup>+</sup> ties up the carbon end and pushes S<sub>N</sub>1-like attack through N; enolate + R–X (soft) gives C-alkylation; enolate + R<sub>3</sub>SiCl or RCOCl (hard) favours O.</li>"
        "<li>Ambident <i>electrophiles</i>: α,β-unsaturated carbonyls (C=O carbon, 1,2-attack; β-carbon, 1,4-attack), allyl halides (S<sub>N</sub>2 vs S<sub>N</sub>2′), epoxides, aldehyde/imine carbons.</li></ul>")
    B.p("<b>Identification routine.</b> (1) Draw lone pairs and π bonds; (2) mark atoms with δ<sup>+</sup> (attached to electronegative atoms) or an empty orbital; (3) join the most electron-rich site to the most electron-poor site; "
        "(4) check that every atom keeps a legal valence and the charges add up. Species such as carbenes are <i>ambiphilic</i> (singlet carbenes have a lone pair and an empty p orbital) and radicals can behave as either, "
        "according to the energy of the SOMO.")
    # ----------------------------------------------------------------- PART 1
    B.part("Part 1", "Carbocations: Definitions, Classification, Geometry and Bonding")
    B.h2("1.1  Definitions: carbocation, carbenium ion, carbonium ion")
    B.p("<b>Carbocation</b> is the general term for any species with a positively charged carbon atom. Two families are distinguished by the <i>coordination number</i> of that carbon:")
    B.ul([
        "<b>Carbenium ions</b> (classical, tricoordinate): the positive carbon has <b>three</b> substituents and an empty p orbital, e.g. CH<sub>3</sub><sup>+</sup>, (CH<sub>3</sub>)<sub>3</sub>C<sup>+</sup>, C<sub>6</sub>H<sub>5</sub>CH<sub>2</sub><sup>+</sup>. Formally they are derived from a neutral carbene or an alkane by removal of H<sup>−</sup>. These are the ions of ordinary organic mechanisms (S<sub>N</sub>1, E1, electrophilic addition).",
        "<b>Carbonium ions</b> (non-classical, hypercoordinate): the positive carbon is <b>five- (or higher)</b> coordinate through a three-centre two-electron (3c–2e) bond, e.g. CH<sub>5</sub><sup>+</sup>, C<sub>2</sub>H<sub>7</sub><sup>+</sup>; formally derived by protonation (or alkylation) of an alkane σ bond. The 2-norbornyl cation is a bridged (σ-delocalised) species of this bonding type.",
        "The older usage ‘carbonium ion’ for <i>every</i> carbocation (including t-Bu<sup>+</sup>) is obsolete; the two names must not be interchanged. In this book ‘carbocation’ is the generic term, ‘carbenium’ is used when precision is needed, and ‘carbonium’ always means a hypercoordinate (3c–2e) ion."])
    B.fig(one("[CH3+]", label="CH₃⁺ methyl"), None) if False else None
    items = []
    names = [("methyl", "[CH3+]"), ("primary (ethyl)", "C[CH2+]"), ("secondary (2-propyl)", "C[CH+]C"), ("tertiary (t-butyl)", "C[C+](C)C"),
             ("allyl", "C=C[CH2+]"), ("benzyl", "[CH2+]C1=CC=CC=C1"), ("vinyl", "C[C+]=C"), ("aryl (σ-cation)", "[C+]1=CC=CC=C1"),
             ("acylium", "CC#[O+]"), ("oxocarbenium", "C[O+]=C"), ("cyclopropylcarbinyl", "[CH2+]C1CC1"), ("tropylium", "[CH+]1C=CC=CC=C1"),
             ("1-adamantyl", "[C+]12CC3CC(CC(C3)C1)C2"), ("cyclopropyl", "[CH+]1CC1")]
    for lab, smi in names:
        items.append(Frag(smi, label=lab))
        items.append(Gap(10))
    svg, w, h = scheme(items[:-1], width=680, gap=0)
    B.fig(dict(svg=svg, w=w, h=h), "Figure 1.1  Gallery of carbocation types. The skeletal convention is used: hydrogens on carbon are not drawn; a symbol ‘C⁺’ is a cationic carbon with its implicit hydrogens (e.g. ‘C⁺’ in the ethyl cation is CH<sub>2</sub><sup>+</sup>).")
    B.fig(dict(svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>', w=1, h=1), None) if False else None
    B.h2("1.2  Geometry, hybridisation and the empty p orbital")
    B.fig(planar_cation(), "Figure 1.2  A carbenium ion: trigonal-planar σ framework (sp²), empty 2p orbital perpendicular to the plane.")
    B.ul([
        "<b>Planarity.</b> The three σ bonds use sp<sup>2</sup> hybrids (120°); the remaining p orbital is empty and is the LUMO. Planarity places the empty orbital in a position to be attacked from <i>either</i> face – the basis of racemisation in S<sub>N</sub>1.",
        "<b>Bond lengths.</b> C<sup>+</sup>–C bonds are shorter than normal C(sp<sup>3</sup>)–C(sp<sup>3</sup>) bonds because of greater s character and hyperconjugative double-bond character.",
        "<b>Linear cations.</b> Vinyl (R–C<sup>+</sup>=CR<sub>2</sub>) and acylium (R–C≡O<sup>+</sup>) cations have an sp carbon (180°); the vinyl cation's empty p orbital lies <i>in</i> the plane of the double bond, orthogonal to the π bond, so the π system cannot stabilise it by resonance. The phenyl (aryl) cation has its empty orbital in the plane of the ring, orthogonal to the aromatic π system – hence it is exceptionally unstable.",
        "<b>Pyramidalisation is penalised.</b> If the carbon is forced out of planarity (bridgehead of a small bicycle), overlap with substituent σ orbitals is poor and the p character is lost: 1-norbornyl (bicyclo[2.2.1]hept-1-yl) cations are very hard to form, whereas the larger, more flexible 1-adamantyl and bicyclo[2.2.2]oct-1-yl ions form far more easily.",
        "<b>Electrophilicity.</b> The empty orbital makes a carbocation a strong electrophile and Lewis acid: gas-phase hydride affinities (recalled, kcal mol<sup>−1</sup>, approximate): CH<sub>3</sub><sup>+</sup> ≈ 312, i-Pr<sup>+</sup> ≈ 249, t-Bu<sup>+</sup> ≈ 231, benzyl ≈ 238, allyl ≈ 256 – the smaller the hydride affinity, the more stable the cation relative to its hydrocarbon. In solution Mayr's E parameter ranks benzhydrylium ions from E ≈ −7 (strongly donor-substituted) to E ≈ +6 (Ph<sub>2</sub>CH<sup>+</sup>)."])
    B.h2("1.3  Orbital overlap requirements and delocalisation of charge")
    B.p("A cation is stabilised to the extent that electron density from neighbouring orbitals can flow into its empty p orbital. Three kinds of donor exist and each has a geometric requirement: "
        "(i) <b>lone pairs</b> (n → p) on an attached heteroatom (OR, NR<sub>2</sub>, SR, halogen): the lone-pair orbital must be parallel to the empty p orbital; "
        "(ii) <b>π bonds</b> (π → p) in an allyl, benzyl or vinyl system: the π orbitals must be parallel (coplanar σ frameworks); "
        "(iii) <b>σ bonds</b> (σ<sub>C–H</sub>, σ<sub>C–C</sub> → p) – hyperconjugation: the donor σ bond must be close to parallel to the empty p orbital, i.e. roughly perpendicular to the plane of the cation (dihedral angle near 0°; at 90° the overlap is zero).")
    B.fig(hyperconj(), "Figure 1.3  Hyperconjugation: the neighbouring σ(C–H) bond donates into the empty p orbital when the two are parallel.")
    B.p("<b>Localised versus delocalised charge.</b> In t-Bu<sup>+</sup> the charge is formally on one carbon but is shared with nine hydrogens by hyperconjugation; in allyl and benzyl cations resonance places partial positive charge on two or more carbons (shown with double-headed arrows between contributors, never with reaction arrows); "
        "in σ-bridged non-classical ions (2-norbornyl, cyclopropylcarbinyl, phenonium) the charge is spread over three or more carbons through <i>partial bonds</i> and no single Lewis structure is adequate. "
        "Resonance contributors differ only in electron positions; the nuclei do not move. If atoms move, the species are different (isomers, rapidly equilibrating or bridged).")
    B.h2("1.4  Hypercoordinate (carbonium) ions")
    B.fig(ch5plus(), "Figure 1.4  CH<sub>5</sub><sup>+</sup>: three ordinary C–H bonds and a three-centre two-electron C···H<sub>2</sub> unit (H<sub>2</sub> bound side-on to a CH<sub>3</sub><sup>+</sup> fragment).")
    B.p("Protonation of methane in a superacid or in a mass spectrometer ion source forms CH<sub>5</sub><sup>+</sup>. High-level calculations and gas-phase infrared spectra show a structure with a CH<sub>3</sub><sup>+</sup> unit and a bound H<sub>2</sub>, but with extremely facile exchange of all five hydrogens: it is a fluxional, hypercoordinate species with only <i>eight</i> valence electrons for five bonds. "
        "A carbonium ion is therefore <b>not</b> simply a ‘more substituted’ or ‘more stable’ carbenium ion; its 3c–2e bonding is a different bonding type. Their stability cannot be placed on the same 3° &gt; 2° &gt; 1° scale. Their usual fate is loss of H<sub>2</sub> (giving a carbenium ion; Part 2.E6), loss of a hydrocarbon fragment, or rapid proton scrambling.")
    B.h2("1.5  Ion pairs, solvent and counterion")
    B.p("Ionisation passes through <b>contact (intimate) ion pairs</b> R<sup>+</sup>X<sup>−</sup>, then <b>solvent-separated ion pairs</b> R<sup>+</sup>‖X<sup>−</sup>, then free ions (Winstein). "
        "Nucleophile capture from the contact pair is stereo-selective (the counterion shields one face), from the solvent-separated pair largely statistical. "
        "The solvent ionises the substrate by (a) hydrogen bonding to the leaving group (protic solvents, TFE, HFIP are best) and (b) a high dielectric constant that screens charge; the nucleophilicity of the solvent matters much less in S<sub>N</sub>1 than in S<sub>N</sub>2. "
        "A <b>non-nucleophilic, weakly coordinating counterion</b> (SbF<sub>6</sub><sup>−</sup>, B(C<sub>6</sub>F<sub>5</sub>)<sub>4</sub><sup>−</sup>, carboranes, Al(OC(CF<sub>3</sub>)<sub>3</sub>)<sub>4</sub><sup>−</sup>) and a non-basic solvent (SO<sub>2</sub>ClF, SO<sub>2</sub>, CH<sub>2</sub>Cl<sub>2</sub>) allow even tertiary cations to be observed (Olah, 1960s onward).")
    B.warn("<b>Scope and honesty note.</b> This book's definitions follow current IUPAC practice and standard physical-organic-chemistry usage. The IUPAC Gold Book, the textbooks listed in Part 17 and the archive.org page requested were <u>not accessible in this authoring environment</u>; where a numerical value is quoted from memory it is marked ‘recalled’ or given as an order only. See the Source Map for what was and was not consulted.")
