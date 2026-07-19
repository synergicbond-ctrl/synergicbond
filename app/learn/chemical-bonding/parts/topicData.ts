export type ChemicalBondingVisualKey = "potential" | "lattice" | "orbitals" | "overlap" | "hybrid" | "vsepr" | "inorganic" | "backbond" | "diborane" | "dipole" | "resonance" | "hbond" | "mo" | "mo-foundation" | "mo-h2" | "mo-bcn" | "mo-o2" | "mo-f2" | "mo-hetero" | "mo-co-no" | "mo-ligand" | "fajans" | "imf" | "carbon" | "silicate";

export type ChemicalBondingTopic = {
  number: number;
  title: string;
  part: number;
  paragraphs: string[];
  bullets?: string[];
  formula?: string;
  exam?: string;
  modern?: string;
  visual?: ChemicalBondingVisualKey;
};

export const chemicalBondingTopics: ChemicalBondingTopic[] = [
  {
    "number": 1,
    "title": "Chemical Bond and Chemical Bonding",
    "part": 1,
    "paragraphs": [
      "A chemical bond is the net attractive interaction that holds specified atoms or ions together in a stable aggregate. Chemical bonding is the broader subject that explains how electron distribution, nuclear attraction, orbital overlap and electrostatics produce that stability. A bond is therefore not a rigid stick: it is an energy-lowering electron–nuclear arrangement with measurable length, strength, polarity and directionality."
    ],
    "bullets": [
      "Bond formation must lower the total energy relative to separated fragments.",
      "Bonding ranges continuously from highly ionic to highly covalent/metallic; labels describe limiting models."
    ],
    "exam": "Do not define a bond only as ‘sharing of electrons’: ionic, metallic and multicentre bonds require broader language."
  },
  {
    "number": 2,
    "title": "Reasons for Chemical Bond Formation",
    "part": 1,
    "paragraphs": [
      "Atoms form bonds when the combined system can reach a lower total energy than the separated atoms. Attractive nucleus–electron interactions, favourable electron delocalisation and lattice/solvation stabilisation compete with nucleus–nucleus and electron–electron repulsions. Stability is governed by the minimum of total energy, not by an independent desire to ‘complete an octet’."
    ],
    "bullets": [
      "Octet attainment is often a useful consequence for main-group species, not the fundamental thermodynamic cause.",
      "Entropy and the environment also matter for whether a process is spontaneous, especially in solution or the gas phase."
    ],
    "exam": "In JEE reasoning, ‘lower energy’ is the universal answer; octet is a model that works only for selected species."
  },
  {
    "number": 3,
    "title": "Octet Rule",
    "part": 1,
    "paragraphs": [
      "The octet rule states that many main-group atoms form bonds so that eight electrons occupy the valence shell, corresponding to an ns²np⁶ pattern. Hydrogen and helium follow a duplet. The rule is most successful for second-period compounds of C, N, O and F and for simple ionic compounds that generate noble-gas configurations."
    ],
    "bullets": [
      "Count electrons around an atom in a Lewis structure: a bonding pair contributes two electrons to each bonded atom for octet bookkeeping.",
      "The rule predicts formulas and Lewis patterns but not energies, magnetic behaviour or many hypervalent/electron-deficient structures."
    ],
    "exam": "Use the octet rule as a first Lewis-structure filter, then test formal charge, resonance and known exceptions."
  },
  {
    "number": 4,
    "title": "Exceptions to the Octet Rule",
    "part": 1,
    "paragraphs": [
      "Octet exceptions fall into three exam-relevant classes. Incomplete-octet (hypovalent) species such as BeCl₂ and BF₃ have fewer than eight electrons around the central atom. Hypervalent species such as PF₅, SF₆ and XeF₄ are drawn with more than eight electrons in classical Lewis structures. Odd-electron species such as NO and NO₂ cannot give every atom a paired-electron octet because the total valence-electron count is odd."
    ],
    "bullets": [
      "Incomplete octet: electron-deficient centres often behave as Lewis acids.",
      "Expanded octet: common for heavier p-block centres in classical Lewis accounting.",
      "Odd-electron: radicals usually show paramagnetism and require resonance/MO thinking."
    ],
    "exam": "NO has 11 valence electrons (5 from N + 6 from O), not 15.",
    "modern": "Modern descriptions of hypervalent molecules do not require literal valence-shell d-orbital expansion. Three-centre-four-electron bonding, delocalisation and largely ionic resonance structures often give a better picture."
  },
  {
    "number": 5,
    "title": "Inert Gas Configuration",
    "part": 1,
    "paragraphs": [
      "An inert-gas configuration is the closed-shell electron configuration of a noble gas: He = 1s² and, for heavier noble gases, ns²np⁶. Simple s- and p-block ions often form by losing or gaining electrons to reach the nearest closed shell, e.g. Na⁺ = [Ne] and Cl⁻ = [Ar]. Closed shells are especially stable because all occupied subshells are filled and the next available orbital is significantly higher in energy."
    ],
    "exam": "Do not assume every species with a noble-gas configuration is chemically inert: charge density and environment still control reactivity."
  },
  {
    "number": 6,
    "title": "Pseudo-Inert Gas Configuration",
    "part": 1,
    "paragraphs": [
      "A pseudo-inert-gas configuration is a closed-shell arrangement that resembles a noble-gas core but includes a filled (n−1)d¹⁰ subshell, commonly represented as (n−1)d¹⁰ns⁰np⁰. Cations such as Cu⁺, Ag⁺, Zn²⁺, Cd²⁺ and Hg²⁺ are classic examples. The d¹⁰ electrons shield imperfectly, so these ions can have unexpectedly high polarising power compared with true noble-gas ions of similar size/charge."
    ],
    "bullets": [
      "Filled d electrons increase core size but do not shield outer regions as efficiently as an ideal spherical noble-gas core.",
      "Pseudo-noble-gas cations therefore often promote covalent character in their compounds."
    ],
    "exam": "This idea connects directly to Fajans’ rule; compare Na⁺ and Cu⁺ chlorides/iodides."
  },
  {
    "number": 7,
    "title": "Sugden’s Singlet-Linkage Bond Concept",
    "part": 1,
    "paragraphs": [
      "Sugden’s singlet-linkage concept is a historical electron-pair model in which a covalent linkage is treated as a paired-electron ‘singlet’ connection between atoms. It helped early chemists rationalise valency before modern quantum bonding theory matured. Its exam value is historical classification and terminology, not quantitative prediction of orbital energies or molecular magnetism."
    ],
    "exam": "When asked, state the concept and its historical role; do not use it to override VBT/MOT evidence.",
    "modern": "Use Sugden’s language only as a historical model. Modern covalent bonding is described by spin-paired electrons in molecular/valence-bond wavefunctions, not by an independent fundamental ‘singlet linkage’ law."
  },
  {
    "number": 8,
    "title": "Sidgwick’s Rule of Maximum Covalency",
    "part": 2,
    "paragraphs": [
      "Sidgwick’s rule of maximum covalency relates maximum covalency to the number of energetically accessible valence orbitals available for bond formation in the classical model. For second-period p-block elements, only 2s and three 2p orbitals are available, so classical covalency does not exceed four. Heavier main-group elements were historically assigned higher covalencies by invoking additional orbitals."
    ],
    "exam": "Maximum covalency is not the same as oxidation state: the two numbers can differ dramatically.",
    "modern": "The old ‘use vacant d orbitals to expand covalency’ picture is not a literal modern mechanism for many hypervalent molecules. Retain the classical counting rule for exam bookkeeping, but describe real bonding using delocalised/3c–4e and ionic resonance contributions where appropriate."
  },
  {
    "number": 9,
    "title": "Theories of Covalent Bond",
    "part": 2,
    "paragraphs": [
      "Major covalent-bond theories provide complementary levels of description. Lewis theory tracks electron pairs and formal charge; VBT localises bonds through overlap of atomic/hybrid orbitals; hybridisation is a geometry bookkeeping model; VSEPR predicts electron-domain geometry; MOT delocalises electrons over the entire molecule and explains bond order, magnetism and spectra. No single model is best for every question."
    ],
    "bullets": [
      "Use Lewis/formal charge for connectivity and resonance.",
      "Use VBT/hybridisation/VSEPR for local geometry and directional bonding.",
      "Use MOT for diatomic bond order, magnetism, delocalisation and frontier orbitals."
    ],
    "exam": "A strong solution chooses the simplest model that directly answers the property being asked."
  },
  {
    "number": 10,
    "title": "Born–Oppenheimer Approximation",
    "part": 2,
    "paragraphs": [
      "The Born–Oppenheimer approximation separates nuclear and electronic motion because nuclei are thousands of times heavier and move much more slowly than electrons. For a fixed nuclear geometry, we first solve the electronic problem and obtain an electronic energy; repeating this for many geometries gives a potential-energy surface on which the nuclei move."
    ],
    "bullets": [
      "This approximation underlies potential-energy curves, equilibrium bond lengths and vibrational analysis.",
      "It is an approximation, but extremely accurate for most ground-state molecular structure problems."
    ],
    "formula": "\\Psi_{total}\\approx\\Psi_{electronic}(r;R)\\,\\chi_{nuclear}(R)",
    "exam": "In a bond-energy curve, electronic energy is evaluated at effectively fixed internuclear distance R."
  },
  {
    "number": 11,
    "title": "Formation of Chemical Bond",
    "part": 2,
    "paragraphs": [
      "As two atoms approach from infinite separation, attractive nucleus–electron terms lower the energy while nucleus–nucleus and electron–electron repulsions rise. A stable bond forms only if the net interaction creates an energy minimum below the separated-atom limit. Electron pairing, overlap and charge redistribution determine the depth and location of that minimum."
    ],
    "bullets": [
      "At very large R: interaction ≈ 0.",
      "Near equilibrium Rₑ: attraction and repulsion balance; force = 0 and energy is minimum.",
      "At very small R: Pauli/electrostatic repulsion dominates and energy rises steeply."
    ],
    "visual": "potential"
  },
  {
    "number": 12,
    "title": "Potential-Energy Curve and Internuclear Distance",
    "part": 2,
    "paragraphs": [
      "A potential-energy curve plots molecular energy against internuclear distance. The minimum occurs at the equilibrium bond length Rₑ; the depth of the well relative to separated atoms corresponds approximately to bond dissociation energy (with zero-point corrections in real spectroscopy). The curvature near the minimum relates to bond stiffness and vibrational frequency."
    ],
    "bullets": [
      "Shorter is not automatically stronger across unrelated bond types; compare only chemically meaningful series.",
      "A shallower well means easier dissociation; a steeper curvature means a larger force constant."
    ],
    "formula": "F(R)=-\\frac{dV}{dR},\\qquad \\left.\\frac{dV}{dR}\\right|_{R_e}=0",
    "exam": "At R < Rₑ repulsion drives atoms apart; at R > Rₑ attraction pulls them together.",
    "visual": "potential"
  },
  {
    "number": 13,
    "title": "Classification of Chemical Bonds",
    "part": 2,
    "paragraphs": [
      "Chemical bonds are commonly classified into strong primary interactions and weaker secondary interactions. Strong bonding includes ionic, covalent, coordinate-covalent and metallic bonding; multicentre bonds are a covalent variant. Weak interactions include hydrogen bonding and van der Waals forces, although strong hydrogen bonds can overlap energetically with weak covalent interactions."
    ],
    "bullets": [
      "Primary bonds generally define molecular/crystal connectivity.",
      "Secondary interactions strongly control boiling point, solubility, crystal packing, biomolecular structure and supramolecular recognition."
    ],
    "exam": "Do not treat ‘weak’ as ‘unimportant’: collective intermolecular forces can dominate bulk properties."
  },
  {
    "number": 14,
    "title": "Ionic / Electrovalent Bond",
    "part": 3,
    "paragraphs": [
      "An ionic or electrovalent bond is the electrostatic attraction between oppositely charged ions after substantial electron transfer. In a crystal the interaction is non-directional and extends through the lattice; there are no isolated NaCl ‘molecules’ in ordinary solid NaCl. The lattice is stabilised by long-range Coulombic attraction opposed by short-range repulsion."
    ],
    "bullets": [
      "Cations usually arise from low-ionisation-energy electropositive atoms; anions from atoms with favourable electron gain.",
      "Real ionic compounds often retain some covalent character because ions polarise each other."
    ],
    "formula": "E_{Coulomb}\\propto -\\frac{z_+z_-}{r}",
    "exam": "Use ‘formula unit’ for an ionic crystal, not ‘molecule’."
  },
  {
    "number": 15,
    "title": "Conditions for Formation of Ionic Bond",
    "part": 3,
    "paragraphs": [
      "Ionic compound formation is favoured when the total thermochemical cycle is favourable: low ionisation enthalpy for cation formation, favourable electron-gain enthalpy for anion formation, and especially a large lattice-energy release. High charge and small ionic radii make the lattice term strongly stabilising. Entropy and hydration/solvation can reverse trends in solution."
    ],
    "bullets": [
      "Electron affinity alone never decides ionic stability.",
      "Formation of O²⁻(g) requires an endothermic second electron addition, yet MgO is stable because its 2+/2− lattice energy is enormous."
    ],
    "exam": "For MgO vs NaCl, emphasise charge product and lattice energy rather than claiming O²⁻ formation is intrinsically easy."
  },
  {
    "number": 16,
    "title": "Lattice Energy",
    "part": 3,
    "paragraphs": [
      "Lattice energy measures the strength of an ionic crystal. Two sign conventions occur: lattice enthalpy of formation is negative for gaseous ions → solid; lattice dissociation enthalpy is the equal positive magnitude for solid → gaseous ions. Always state the convention before comparing numbers. It cannot be measured directly and is commonly obtained from Born–Haber cycles."
    ],
    "bullets": [
      "Magnitude increases with charge product |z₊z₋| and decreases with interionic distance.",
      "Crystal structure enters through the Madelung constant."
    ],
    "exam": "JEE may quote ‘lattice energy’ as a positive magnitude; infer the convention from wording.",
    "visual": "lattice"
  },
  {
    "number": 17,
    "title": "Born–Landé Equation",
    "part": 3,
    "paragraphs": [
      "The Born–Landé equation models an ionic solid as point charges with Coulomb attraction plus short-range Born repulsion. The Madelung constant A accounts for the entire lattice geometry; r₀ is nearest-neighbour separation, n is the Born exponent, and z₊/z₋ are ionic charges. It explains why charge, size and structure control lattice energy."
    ],
    "bullets": [
      "Larger A and charge product increase |U|.",
      "Larger r₀ lowers |U|.",
      "n reflects steepness of repulsion and depends on ion electron configurations."
    ],
    "formula": "U=-\\frac{N_A A z_+z_- e^2}{4\\pi\\varepsilon_0 r_0}\\left(1-\\frac{1}{n}\\right)",
    "exam": "A good numerical fit does not prove a crystal is 100% ionic; covalency and model approximations can partly compensate."
  },
  {
    "number": 18,
    "title": "Kapustinskii Equation",
    "part": 3,
    "paragraphs": [
      "The Kapustinskii equation estimates lattice energy when the exact crystal structure/Madelung constant is unavailable. It replaces detailed lattice geometry with an empirical relation involving ionic charges, the number of ions per formula unit and the sum of ionic radii. It is especially useful for rapid comparisons across related salts."
    ],
    "bullets": [
      "ν = total number of ions in the empirical formula.",
      "K and d are empirical constants whose numerical values depend on the unit convention."
    ],
    "formula": "U\\approx K\\frac{\\nu |z_+z_-|}{r_++r_-}\\left(1-\\frac{d}{r_++r_-}\\right)",
    "exam": "Use Kapustinskii for estimation/trends; Born–Landé is structure-specific."
  },
  {
    "number": 19,
    "title": "Factors Affecting Lattice Energy",
    "part": 3,
    "paragraphs": [
      "Lattice-energy magnitude rises with larger ionic charges, smaller ionic radii and crystal structures with favourable Madelung constants. Polarisation/covalency can make purely ionic predictions deviate. Comparing MgO with NaCl illustrates the dominant charge effect; comparing LiF with CsI illustrates the size effect."
    ],
    "bullets": [
      "Charge product usually dominates: 2+/2− lattices are far stronger than 1+/1− analogues.",
      "For same charges, smaller r₊ + r₋ generally means larger lattice-energy magnitude.",
      "Do not confuse lattice energy with hydration energy; both favour small/high-charge ions but enter different processes."
    ],
    "visual": "lattice"
  },
  {
    "number": 20,
    "title": "Properties of Ionic Compounds",
    "part": 3,
    "paragraphs": [
      "Ionic solids are typically hard, crystalline, brittle and high-melting because separating ions requires overcoming strong electrostatic interactions. They do not conduct as solids because ions are fixed, but conduct when molten or dissolved if mobile ions are present. Solubility depends on the balance of lattice disruption, solvation/hydration and entropy rather than a simple ‘ionic = water soluble’ rule."
    ],
    "bullets": [
      "Brittleness arises because shear can bring like charges adjacent, producing strong repulsion and cleavage.",
      "Volatility is usually low; vapour may contain ion pairs or molecular species at very high temperature."
    ],
    "exam": "AgCl, CaF₂ and many carbonates show why ‘all ionic compounds are water soluble’ is false."
  },
  {
    "number": 21,
    "title": "Isomorphism",
    "part": 3,
    "paragraphs": [
      "Isomorphism is the ability of chemically analogous compounds to crystallise in the same or closely related crystal form because their ions have similar sizes, charges and stoichiometry. Isomorphous substances can form mixed crystals by substitution. Classic examples include alums and pairs such as K₂SO₄/K₂SeO₄."
    ],
    "bullets": [
      "Same crystal form does not imply identical chemistry.",
      "A common empirical clue is similar ionic radius and identical charge/coordination requirements."
    ],
    "exam": "Do not confuse isomorphism (same crystal type) with isoelectronicity (same electron count) or polymorphism (one substance, multiple crystal forms)."
  },
  {
    "number": 22,
    "title": "Lewis Dot Structures",
    "part": 4,
    "paragraphs": [
      "Lewis dot structures represent valence electrons as lone pairs, bonding pairs and formal charges. Procedure: count total valence electrons (adjust for charge), choose a skeleton, complete terminal octets, place remaining electrons on the central atom, then create multiple bonds if needed. Finally compare formal charges and resonance alternatives."
    ],
    "bullets": [
      "Hydrogen is terminal and follows a duplet; fluorine is almost always terminal.",
      "Third-period and heavier centres may be shown hypervalent in classical Lewis structures.",
      "Bracket ions and write the total charge."
    ],
    "exam": "Electron count is the first checksum: a beautiful drawing with the wrong total electrons is invalid."
  },
  {
    "number": 23,
    "title": "Covalent Bond",
    "part": 4,
    "paragraphs": [
      "A covalent bond forms when electron density is shared between nuclei, lowering energy through simultaneous attraction of bonding electrons to both nuclei. Directionality arises from orbital shape and overlap. Covalent bonds may be nonpolar or polar, localised or delocalised, and can form ordinary 2c–2e, multicentre or coordinate-covalent patterns."
    ],
    "bullets": [
      "Bond order and overlap affect length and strength.",
      "Electronegativity difference shifts electron density but does not create a sharp ionic/covalent boundary."
    ],
    "exam": "Coordinate bonds become ordinary covalent bonds after formation; origin of the electron pair does not create a permanently different bond type."
  },
  {
    "number": 24,
    "title": "Covalency and Maximum Covalency",
    "part": 4,
    "paragraphs": [
      "Covalency is the number of covalent linkages an atom forms in a chosen classical structure. Maximum covalency is a model-dependent upper limit based on available valence orbitals/electron pairs and should not be equated blindly with oxidation state or coordination number. Multiple bonds count as multiple shared electron pairs in classical covalency counting."
    ],
    "exam": "For resonance/delocalised molecules, covalency is a Lewis-model descriptor rather than a directly measurable integer property."
  },
  {
    "number": 25,
    "title": "Maximum Covalency of p-Block Elements",
    "part": 4,
    "paragraphs": [
      "For second-period p-block elements, the valence shell contains one s and three p orbitals, so the classical maximum covalency is four (e.g. carbon in CH₄). Heavier p-block elements form species with coordination/covalency above four such as PF₅, SF₆ and IF₇; traditional exam treatments invoke ‘expanded octets’."
    ],
    "exam": "Remember the exam distinction: period-2 elements cannot expand the octet in ordinary Lewis structures.",
    "modern": "Modern bonding descriptions of hypervalent p-block compounds generally do not require energetically high d-orbital hybridisation. Delocalised 3c–4e bonding and ionic resonance contributions are more realistic."
  },
  {
    "number": 26,
    "title": "Maximum Covalency of d-Block Elements",
    "part": 4,
    "paragraphs": [
      "Transition metals can display high coordination numbers and apparent covalencies because five d, one s and three p valence-region orbitals are close enough in energy to participate in ligand bonding descriptions. Values depend strongly on oxidation state, ligand size and metal radius; coordination numbers 4, 6, 7, 8 and 9 are common in suitable complexes."
    ],
    "exam": "Maximum covalency in d-block chemistry is not a single universal number fixed only by group number.",
    "modern": "Avoid interpreting ‘d²sp³ hybridisation’ as a literal measurable rearrangement in every complex. Ligand-field/MO theory provides the more rigorous description."
  },
  {
    "number": 27,
    "title": "Selection of Central Atom in Lewis Structures",
    "part": 4,
    "paragraphs": [
      "For a Lewis skeleton, choose as central atom the least electronegative atom capable of forming multiple bonds or accommodating the required connectivity; hydrogen and fluorine are terminal. In oxyacids the atom written between H and O connectivity often follows known acid structure (H attaches to O, not usually directly to the central electronegative atom). Symmetry and known functional groups can override a naive electronegativity rule."
    ],
    "bullets": [
      "CO₂: C central; SO₄²⁻: S central; HCN: C central.",
      "Peroxides contain O–O; do not force every oxygen terminal if the known connectivity requires an O–O bond."
    ],
    "exam": "After choosing the centre, verify formal charges and chemically known connectivity."
  },
  {
    "number": 28,
    "title": "Shapes and Properties of Atomic Orbitals",
    "part": 5,
    "paragraphs": [
      "Atomic orbitals are one-electron wavefunctions characterised by quantum numbers. s orbitals are spherical; p orbitals have two opposite-phase lobes separated by a nodal plane; d orbitals have more complex four-lobed or dz² shapes. Orbital phase (+/− sign of the wavefunction) is crucial for constructive vs destructive overlap, even though it is not electrical charge."
    ],
    "bullets": [
      "s: l = 0; p: l = 1; d: l = 2.",
      "Orbitals of the same subshell differ in orientation but are degenerate in an isolated atom (without external fields/fine structure)."
    ],
    "exam": "Never label the two p lobes as positive and negative electric charge; they indicate wavefunction phase.",
    "visual": "orbitals"
  },
  {
    "number": 29,
    "title": "Radial Nodes and Angular Nodes",
    "part": 5,
    "paragraphs": [
      "Nodes are regions where the wavefunction is zero. For a hydrogen-like orbital, total nodes = n−1; angular nodes = l; radial nodes = n−l−1. Angular nodes are planes or cones determined by angular functions, while radial nodes are spherical surfaces at specific radii."
    ],
    "bullets": [
      "2p: 1 angular, 0 radial nodes.",
      "3s: 0 angular, 2 radial nodes.",
      "3d: 2 angular, 0 radial nodes."
    ],
    "formula": "N_{total}=n-1,\\quad N_{angular}=l,\\quad N_{radial}=n-l-1",
    "exam": "A node is not simply ‘where electron probability is small’; the wavefunction is exactly zero there."
  },
  {
    "number": 30,
    "title": "Gerade and Ungerade Orbitals",
    "part": 5,
    "paragraphs": [
      "Gerade (g) and ungerade (u) classify orbitals in species with a centre of inversion. If inversion through the molecular centre leaves the wavefunction unchanged, it is gerade; if the sign reverses, it is ungerade. This parity label is central to homonuclear-diatomic MO notation such as σg and πu."
    ],
    "formula": "\\psi(-\\mathbf r)=+\\psi(\\mathbf r)\\;(g),\\qquad \\psi(-\\mathbf r)=-\\psi(\\mathbf r)\\;(u)",
    "exam": "g/u symmetry applies only when the molecule has an inversion centre; it is not a generic label for every heteronuclear diatomic."
  },
  {
    "number": 31,
    "title": "Unsöld’s Theorem",
    "part": 5,
    "paragraphs": [
      "Unsöld’s theorem states that a completely filled subshell has a spherically symmetric total electron-density distribution even though individual orbitals may be directional. Summing |ψ|² over all magnetic quantum-number components removes directional anisotropy. This helps explain why closed shells behave approximately isotropically."
    ],
    "bullets": [
      "A filled p⁶ or d¹⁰ subshell is spherically symmetric in total density.",
      "The theorem concerns total density, not the shape of each individual orbital."
    ],
    "exam": "Do not infer that a single p or d orbital becomes spherical when occupied."
  },
  {
    "number": 32,
    "title": "Angular Wave Functions and Angular Function Graphs",
    "part": 5,
    "paragraphs": [
      "Angular wavefunctions determine directional dependence and nodal geometry. Their signs generate orbital phases; their squared magnitude contributes to angular probability. Polar/angular plots show where electron density is concentrated but should not be confused with literal rigid orbital surfaces."
    ],
    "bullets": [
      "Y₀⁰ gives spherical s symmetry.",
      "p angular functions change sign across a nodal plane.",
      "d functions contain two angular nodes and characteristic lobes/rings."
    ],
    "exam": "Graphs of ψ can be negative; probability density |ψ|² cannot.",
    "visual": "orbitals"
  },
  {
    "number": 33,
    "title": "Radial Wave Functions and Radial Distribution",
    "part": 5,
    "paragraphs": [
      "The radial wavefunction Rₙₗ(r) controls how amplitude changes with distance from the nucleus. Radial probability is proportional to r²|R|², so it is zero at the nucleus for the radial distribution even when an s-orbital wavefunction is nonzero there. Peaks identify most-probable radial regions; nodes separate shells of opposite phase."
    ],
    "bullets": [
      "Penetration: s > p > d > f for comparable n, strongly affecting shielding and orbital energies.",
      "Radial distribution is not identical to R(r) or |ψ|² at one point."
    ],
    "formula": "P(r)\\,dr=4\\pi r^2|R_{nl}(r)|^2\\,dr",
    "exam": "Use penetration/shielding arguments later to rationalise overlap and periodic trends."
  },
  {
    "number": 34,
    "title": "Types of Covalent Bonds",
    "part": 6,
    "paragraphs": [
      "Covalent bonds can be classified by bond multiplicity (single, double, triple), polarity (nonpolar vs polar), and symmetry with respect to the internuclear axis (σ, π, δ). A single bond is ordinarily one σ bond; a double bond is one σ + one π; a triple bond is one σ + two mutually perpendicular π bonds. δ bonding appears mainly in metal–metal multiple bonds."
    ],
    "bullets": [
      "Polar covalent bonds have unequal electron sharing because of electronegativity and environment.",
      "Nonpolar does not mean ‘no bond dipole’ in every local bond; molecular polarity depends on vector cancellation."
    ],
    "exam": "Bond multiplicity and σ/π classification are different but related descriptions."
  },
  {
    "number": 35,
    "title": "Valence Bond Theory (VBT)",
    "part": 6,
    "paragraphs": [
      "Valence Bond Theory treats a covalent bond as overlap of half-filled atomic orbitals containing electrons with opposite spins. Greater effective overlap generally stabilises the bonding pair. VBT naturally explains directional localised bonds and, with hybridisation, familiar molecular geometries."
    ],
    "bullets": [
      "Core idea: localised electron pair between two atoms.",
      "Resonance supplements VBT when one Lewis/VB structure is insufficient.",
      "VBT by itself fails for O₂ paramagnetism and many delocalised excited-state properties."
    ],
    "exam": "Use VBT for overlap/geometry, MOT for magnetic behaviour and delocalised orbital energies."
  },
  {
    "number": 36,
    "title": "Heitler–London Theory",
    "part": 6,
    "paragraphs": [
      "The Heitler–London treatment of H₂ was the first successful quantum-mechanical valence-bond description. It combines covalent arrangements H_A(1)H_B(2) and H_A(2)H_B(1), antisymmetrises the total electronic wavefunction and shows that the spin-singlet spatially bonding combination is stabilised by exchange."
    ],
    "bullets": [
      "Parallel-spin triplet coupling corresponds to an antisymmetric spatial part and is not the stable H₂ ground-state bond.",
      "‘Exchange energy’ arises from quantum indistinguishability/interference, not classical electron swapping."
    ],
    "exam": "Heitler–London establishes why opposite-spin pairing plus overlap lowers energy in H₂."
  },
  {
    "number": 37,
    "title": "Pauling–Slater Extension of VBT",
    "part": 6,
    "paragraphs": [
      "Pauling and Slater generalised valence-bond ideas to polyatomic molecules using directed valence orbitals, resonance between structures and hybridisation. Equivalent hybrid orbitals provide a simple explanation for equivalent bonds in CH₄ and related molecules. Resonance allows several VB structures to contribute to one delocalised real state."
    ],
    "exam": "Pauling–Slater VBT links localised bonding, hybridisation and resonance.",
    "modern": "Hybrid orbitals are a useful localised representation, not uniquely observable physical objects. Different orbital transformations can describe the same total wavefunction."
  },
  {
    "number": 38,
    "title": "Orbital Overlapping",
    "part": 6,
    "paragraphs": [
      "Orbital overlap is the spatial interpenetration of two atomic orbitals. The overlap integral S measures signed wavefunction overlap; strong constructive overlap with appropriate energy matching increases bonding interaction. Mere geometric intersection is insufficient: phase, symmetry, orientation, radial extent and energy compatibility all matter."
    ],
    "bullets": [
      "Large |S| usually supports stronger splitting into bonding/antibonding combinations.",
      "Overlap is dimensionless and can be positive, negative or zero depending on phase convention and symmetry."
    ],
    "formula": "S=\\int \\psi_A^*\\psi_B\\,d\\tau",
    "exam": "For bond strength, discuss effective constructive overlap, not just ‘bigger orbitals overlap more’."
  },
  {
    "number": 39,
    "title": "Positive, Negative and Zero Overlap",
    "part": 6,
    "paragraphs": [
      "Positive, negative and zero overlap refer to the sign/cancellation of the overlap integral for chosen orbital phases. Same-phase lobes facing each other give constructive (positive by convention) overlap; opposite phases give destructive overlap and antibonding interaction. Symmetry can make positive and negative regions cancel exactly, giving zero net overlap and forbidding that interaction."
    ],
    "bullets": [
      "Changing the overall sign of one orbital reverses the sign of S but not observable physics; constructive vs destructive combination is what matters.",
      "Zero overlap often follows symmetry, e.g. orthogonal p orbitals for a σ interaction."
    ],
    "exam": "Do not equate negative overlap with negative charge."
  },
  {
    "number": 40,
    "title": "Axial / Head-on Overlapping",
    "part": 6,
    "paragraphs": [
      "Axial or head-on overlap occurs along the internuclear axis and produces σ symmetry: electron density is cylindrically concentrated around the axis with no nodal plane containing the axis. s–s, s–p and end-on p–p combinations can form σ bonds when symmetry and energy match."
    ],
    "bullets": [
      "Head-on overlap is usually stronger than comparable sideways overlap because the high-amplitude lobes meet directly.",
      "Rotation about an isolated σ bond does not destroy cylindrical overlap, which is why single bonds can often rotate."
    ],
    "exam": "Every single bond contains one σ bond; additional bonds between the same two atoms are π (or in special cases δ).",
    "visual": "overlap"
  },
  {
    "number": 41,
    "title": "Lateral / Sidewise Overlapping",
    "part": 7,
    "paragraphs": [
      "Lateral or sidewise overlap occurs between parallel orbitals oriented perpendicular to the internuclear axis. It creates a π bond with electron density in two regions above/below (or on two sides of) the axis and a nodal plane containing the axis. Because parallel alignment is required, rotation about a double bond breaks π overlap and is strongly hindered."
    ],
    "bullets": [
      "π overlap is weaker than comparable σ overlap because the lobes meet less directly.",
      "A π bond cannot exist alone between two atoms in ordinary main-group multiple bonding; a σ framework forms first."
    ],
    "exam": "Restricted rotation around C=C is a direct structural consequence of sidewise π overlap.",
    "visual": "overlap"
  },
  {
    "number": 42,
    "title": "s–s Overlapping",
    "part": 7,
    "paragraphs": [
      "s–s overlap is possible only in a head-on fashion because s orbitals are spherical. H₂ is the simplest example: two 1s orbitals combine constructively to make a σ bond. Strength depends strongly on internuclear distance and radial size matching."
    ],
    "bullets": [
      "Only σ symmetry is possible from s–s overlap.",
      "Too much compression raises repulsion despite larger geometric interpenetration."
    ],
    "exam": "Do not say ‘maximum overlap means atoms should be as close as possible’; the equilibrium distance balances attraction and repulsion."
  },
  {
    "number": 43,
    "title": "s–p Overlapping",
    "part": 7,
    "paragraphs": [
      "s–p overlap forms a σ bond when the p orbital is aligned along the internuclear axis and the approaching s orbital overlaps one lobe constructively. The opposite p lobe remains on the far side of the p-centred atom. H–Cl and idealised H–p interactions illustrate the directional character."
    ],
    "bullets": [
      "If the p orbital is perpendicular to the internuclear axis, symmetry gives zero net s–p overlap.",
      "Energy matching and radial size matter as much as orientation."
    ],
    "exam": "s–p sidewise overlap does not produce an ordinary π bond because the spherical s orbital cannot supply the required sign pattern."
  },
  {
    "number": 44,
    "title": "p–p Overlapping",
    "part": 7,
    "paragraphs": [
      "p–p overlap can be head-on (p orbitals aligned with the internuclear axis → σ) or sidewise (parallel p orbitals perpendicular to the axis → π). End-on overlap is generally stronger for the same pair of orbitals because the lobes point directly at one another."
    ],
    "bullets": [
      "pₓ–pₓ can be σ if x is chosen as the bond axis.",
      "pᵧ–pᵧ and p_z–p_z can then form two mutually perpendicular π bonds."
    ],
    "exam": "Coordinate labels are arbitrary; classify by symmetry relative to the bond axis, not by the letter x/y/z alone.",
    "visual": "overlap"
  },
  {
    "number": 45,
    "title": "p–d Overlapping",
    "part": 7,
    "paragraphs": [
      "p–d overlap occurs when a p orbital and a d orbital have compatible symmetry around the bond axis. Classical main-group descriptions invoked pπ–dπ overlap for bonds such as S–O or P–O; transition-metal chemistry also contains genuine ligand p–metal d π interactions when energies and symmetry match."
    ],
    "exam": "State whether the problem is using the traditional exam model or modern MO interpretation.",
    "modern": "For hypervalent main-group molecules, strong valence-shell d participation is usually overemphasised in older textbooks. Modern calculations often show mostly p-character plus ionic/delocalised bonding. In transition-metal complexes, d–p π interactions are genuinely central."
  },
  {
    "number": 46,
    "title": "d–d Overlapping",
    "part": 7,
    "paragraphs": [
      "d–d overlap supports σ, π and δ metal–metal bonding depending on orbital orientation. Head-on d overlap can give σ symmetry, sidewise overlap can give π, and face-to-face overlap of appropriate d orbitals can produce δ symmetry with two nodal planes containing the bond axis. Quadruple metal–metal bonds are often described as σ + 2π + δ."
    ],
    "bullets": [
      "δ overlap is weaker and more orientation-sensitive than σ.",
      "Main-group chemistry rarely uses important d–d δ bonds; they are characteristic of transition-metal multiple bonds."
    ],
    "exam": "δ bonding is defined by angular nodal symmetry, not simply by ‘overlap of two d orbitals’."
  },
  {
    "number": 47,
    "title": "Sigma, Pi and Delta Bond Formation",
    "part": 7,
    "paragraphs": [
      "σ, π and δ bonds are classified by the magnitude of the orbital angular-momentum projection/symmetry around the internuclear axis. σ has no nodal plane containing the axis, π has one, and δ has two. In ordinary multiple bonds, the first bond is σ and additional bonds are π; δ appears mainly in metal–metal multiple bonds."
    ],
    "bullets": [
      "σ: strongest and most cylindrically symmetric.",
      "π: sidewise density, one nodal plane through axis.",
      "δ: four-lobed distribution around axis, two nodal planes."
    ],
    "exam": "A C≡C triple bond is 1σ + 2π, not 3σ.",
    "visual": "overlap"
  },
  {
    "number": 48,
    "title": "Factors Affecting Bond Strength and Extent of Overlap",
    "part": 7,
    "paragraphs": [
      "Bond strength and extent of overlap depend on orbital size, radial diffuseness, energy matching, orientation, internuclear distance and symmetry. Orbitals that are too compact overlap poorly at realistic distances; orbitals that are very diffuse can have lower density in the bonding region. Good energy matching increases mixing and stabilisation."
    ],
    "bullets": [
      "For comparable bonds, greater effective overlap usually means shorter/stronger bond.",
      "2p–2p π overlap is often better than 3p–3p because the compact second-row orbitals can approach closely; however there is no universal ‘smaller always stronger’ rule."
    ],
    "exam": "Explain trends with both geometry and energy, not one slogan."
  },
  {
    "number": 49,
    "title": "Hybridisation",
    "part": 8,
    "paragraphs": [
      "Hybridisation is a mathematical mixing of atomic orbitals on the same atom to create an equivalent or directed set of hybrid orbitals useful for describing local σ bonds and lone pairs. The number of hybrid orbitals equals the number of atomic orbitals mixed. Hybridisation is inferred from a bonding model; it is not an independently measurable property."
    ],
    "bullets": [
      "Hybrid orbitals primarily describe the σ framework; unhybridised p/d orbitals can form π bonds.",
      "Steric-number shortcuts work well for many second-period main-group centres but fail or become model-dependent for hypervalent/transition-metal systems."
    ],
    "modern": "Treat hybridisation as a convenient orbital representation, not a literal pre-bonding promotion event that atoms must physically perform.",
    "visual": "hybrid"
  },
  {
    "number": 50,
    "title": "Characteristics of Hybridisation",
    "part": 8,
    "paragraphs": [
      "Key characteristics: hybrids on one centre are orthonormal combinations of parent orbitals, equal in number to those parents, and oriented to maximise separation/overlap. Their s-character strongly affects bond length, electronegativity of the hybridised atom and bond angle. More s-character places electron density closer to the nucleus."
    ],
    "bullets": [
      "sp: 50% s; sp²: 33⅓% s; sp³: 25% s.",
      "Within carbon hybrids: sp C–H is generally shorter/stronger and carbon is more electronegative than sp² or sp³ carbon."
    ],
    "exam": "Hybridisation does not change the total number of orbitals or electrons."
  },
  {
    "number": 51,
    "title": "sp Hybridisation",
    "part": 8,
    "paragraphs": [
      "sp hybridisation mixes one s and one p orbital to form two equivalent hybrids oriented 180° apart; two p orbitals remain unhybridised. It describes linear σ frameworks such as BeCl₂(g), CO₂ carbon, C₂H₂ carbons and nitrile carbon/nitrogen local geometry."
    ],
    "bullets": [
      "Two sp hybrids form σ bonds/lone-pair directions.",
      "Two remaining p orbitals can form two perpendicular π systems, enabling triple bonds."
    ],
    "formula": "1s+1p\\rightarrow2sp\\;(50\\%s,50\\%p)",
    "exam": "In CO₂ the carbon is sp, but each oxygen is better described locally with its own electron-domain picture; do not assign one hybridisation to the whole molecule.",
    "visual": "hybrid"
  },
  {
    "number": 52,
    "title": "sp² Hybridisation",
    "part": 8,
    "paragraphs": [
      "sp² hybridisation mixes one s and two p orbitals to give three coplanar hybrids 120° apart, leaving one unhybridised p orbital perpendicular to the plane. It describes trigonal-planar σ frameworks and supports one π bond, as in ethene carbon, BF₃ boron and carbonate/nitrate resonance frameworks."
    ],
    "bullets": [
      "Ideal angle = 120° before lone-pair/substituent distortions.",
      "The remaining p orbital is essential for π delocalisation."
    ],
    "formula": "1s+2p\\rightarrow3sp^2\\;(33\\tfrac13\\%s)",
    "exam": "Planarity often signals an unhybridised p orbital participating in conjugation/resonance.",
    "visual": "hybrid"
  },
  {
    "number": 53,
    "title": "sp³ Hybridisation",
    "part": 8,
    "paragraphs": [
      "sp³ hybridisation forms four directed hybrids from one s and three p orbitals, ideally tetrahedral at 109.47°. Depending on how many hybrids contain lone pairs, the molecular shape can be tetrahedral (CH₄), trigonal pyramidal (NH₃) or bent (H₂O). Lone pairs occupy hybrid directions but are not visible as atoms."
    ],
    "bullets": [
      "Repulsion order LP–LP > LP–BP > BP–BP compresses bond angles from CH₄ to NH₃ to H₂O.",
      "Equivalent sp³ is an idealisation; Bent’s rule allows unequal hybrid character."
    ],
    "formula": "1s+3p\\rightarrow4sp^3\\;(25\\%s)",
    "visual": "hybrid"
  },
  {
    "number": 54,
    "title": "sp³d Hybridisation",
    "part": 8,
    "paragraphs": [
      "The classical sp³d model combines one s, three p and one d orbital to generate five directions of trigonal-bipyramidal electron geometry. It is traditionally assigned to PF₅ and electron-domain sets such as SF₄, ClF₃ and XeF₂. Axial and equatorial sites are not equivalent: axial positions have three 90° interactions, equatorial only two."
    ],
    "exam": "Lone pairs prefer equatorial positions in trigonal bipyramidal electron geometry.",
    "modern": "For hypervalent main-group molecules, literal low-energy d-orbital hybridisation is not required by modern quantum chemistry; 3c–4e/delocalised descriptions are more realistic. The sp³d label remains useful as VSEPR geometry shorthand in exams."
  },
  {
    "number": 55,
    "title": "sp³d² Hybridisation",
    "part": 8,
    "paragraphs": [
      "The classical sp³d² model corresponds to six electron domains directed octahedrally at 90°. It is used as exam shorthand for SF₆, BrF₅ and XeF₄ electron-domain geometries. Removing one or two ligand positions for lone pairs gives square-pyramidal or square-planar molecular shapes."
    ],
    "exam": "For six domains all positions are equivalent in ideal octahedral geometry; two lone pairs prefer trans positions in XeF₄.",
    "modern": "As with sp³d, do not interpret main-group d-hybridisation literally; electron-domain geometry is reliable even when the hybrid-orbital story is only a bookkeeping model.",
    "visual": "hybrid"
  },
  {
    "number": 56,
    "title": "sp³d³ Hybridisation",
    "part": 8,
    "paragraphs": [
      "The classical sp³d³ assignment corresponds to seven electron domains in pentagonal-bipyramidal geometry, as in IF₇. Five equatorial positions form a pentagon (72° separations) and two axial positions are perpendicular to the plane. Species with lone pairs can adopt derived seven-domain shapes such as pentagonal planar in suitable cases."
    ],
    "modern": "Use sp³d³ mainly as an electron-domain/hybridisation convention. Real hypervalent bonding is better described by delocalised MOs and 3c–4e interactions.",
    "visual": "hybrid"
  },
  {
    "number": 57,
    "title": "Isovalent / Isoelectronic Bonding and Molecular Shapes",
    "part": 8,
    "paragraphs": [
      "Isovalent species have the same number of valence electrons around corresponding frameworks, while isoelectronic species have the same total electron count; both comparisons can suggest similar Lewis structures or shapes when the same number of electron domains is present. Examples include CO₂/N₂O (linear central framework) and NH₄⁺/CH₄ (tetrahedral electron-domain pattern)."
    ],
    "bullets": [
      "Isoelectronic does not guarantee identical bond lengths/angles because nuclear charges and electronegativities differ.",
      "Use electron-domain count plus connectivity, not electron count alone, to predict shape."
    ],
    "exam": "NH₃ and H₂O are not the same shape despite related valence-shell counts because the number of bonded atoms differs."
  },
  {
    "number": 58,
    "title": "Valence Shell Electron Pair Repulsion Theory (VSEPR)",
    "part": 9,
    "paragraphs": [
      "VSEPR theory predicts geometry by arranging regions of valence-shell electron density around a central atom to minimise repulsion. A multiple bond counts as one electron domain but repels somewhat more strongly than a single bond. Lone pairs occupy more space near the central atom and therefore exert stronger repulsion than bonding pairs."
    ],
    "bullets": [
      "First determine electron-domain geometry from steric number.",
      "Then ignore lone-pair positions when naming molecular shape.",
      "VSEPR is qualitative; it does not replace MO/ligand-field theory for all molecules."
    ],
    "exam": "Count domains, not individual bond lines: a double or triple bond is one VSEPR domain.",
    "visual": "vsepr"
  },
  {
    "number": 59,
    "title": "Bond Pair and Lone Pair Repulsions",
    "part": 9,
    "paragraphs": [
      "The usual repulsion order is LP–LP > LP–BP > BP–BP because lone-pair electron density is localised around one nucleus and occupies a broader angular region near the central atom. Multiple bonds can repel more strongly than single bonds. These unequal repulsions distort ideal bond angles and select preferred lone-pair sites."
    ],
    "bullets": [
      "TBP: lone pairs prefer equatorial sites to minimise 90° interactions.",
      "Octahedral AX₄E₂: lone pairs prefer trans arrangement, giving square planar XeF₄."
    ],
    "exam": "Repulsion order is a model; electronegativity, ligand size and π bonding can modify real angles."
  },
  {
    "number": 60,
    "title": "Steric Number",
    "part": 9,
    "paragraphs": [
      "Steric number (SN) is the number of σ-bond domains plus lone-pair domains on the chosen central atom in the simplest VSEPR treatment. For many main-group centres, SN 2, 3, 4, 5, 6 and 7 correspond to linear, trigonal-planar, tetrahedral, trigonal-bipyramidal, octahedral and pentagonal-bipyramidal electron geometries."
    ],
    "bullets": [
      "A multiple bond counts as one σ domain.",
      "For ions, adjust valence-electron count before assigning lone pairs."
    ],
    "formula": "SN=N_{\\sigma\\ domains}+N_{lone\\ pairs}",
    "exam": "Do not blindly use the shortcut SN = ½(V+M−C+A) unless its assumptions match the species."
  },
  {
    "number": 61,
    "title": "Molecular Geometry and Molecular Shape",
    "part": 9,
    "paragraphs": [
      "Electron geometry describes the arrangement of all electron domains (bonding + lone pairs); molecular shape describes positions of nuclei only. Thus NH₃ has tetrahedral electron geometry but trigonal-pyramidal molecular shape, while H₂O has tetrahedral electron geometry but bent molecular shape."
    ],
    "bullets": [
      "Geometry and shape coincide when there are no lone pairs on the central atom.",
      "State both when a question asks for ‘geometry around the central atom’ ambiguously."
    ],
    "exam": "XeF₄: electron geometry octahedral, molecular shape square planar."
  },
  {
    "number": 62,
    "title": "Regular and Irregular Geometries",
    "part": 9,
    "paragraphs": [
      "Regular geometries have equivalent bond directions and idealised angles, usually when ligands are identical and there are no stereochemically active lone pairs or strong competing effects. Irregular geometries arise from lone pairs, unequal ligands, multiple-bond domains, steric crowding, electronic degeneracy or state-dependent coordination."
    ],
    "bullets": [
      "CH₄ and SF₆ are near-regular.",
      "SF₄, ClF₃, BrF₅ and XeF₆ are distorted/derived geometries."
    ],
    "exam": "‘Hybridisation’ alone does not guarantee an undistorted ideal shape."
  },
  {
    "number": 63,
    "title": "Linear Geometry",
    "part": 9,
    "paragraphs": [
      "Linear geometry places two electron domains 180° apart (AX₂, SN 2) or can arise as a derived molecular shape when three equatorial lone pairs occupy a trigonal-bipyramidal electron set (AX₂E₃, XeF₂). CO₂ and BeCl₂(g) are AX₂ examples; XeF₂ illustrates why identical shape can arise from different electron geometries."
    ],
    "bullets": [
      "AX₂: linear electron and molecular geometry.",
      "AX₂E₃: TBP electron geometry, linear molecular shape."
    ],
    "exam": "Shape alone does not uniquely determine hybridisation/electron-domain count.",
    "visual": "vsepr"
  },
  {
    "number": 64,
    "title": "Trigonal Planar Geometry",
    "part": 9,
    "paragraphs": [
      "Trigonal-planar geometry (AX₃, SN 3) has three domains 120° apart in one plane. BF₃, gaseous BCl₃ and NO₃⁻/CO₃²⁻ central frameworks are standard examples. Delocalised π bonding often reinforces planarity in resonance systems."
    ],
    "bullets": [
      "Ideal angle 120°; unequal substituents or multiple-bond localisation can distort it.",
      "One lone pair in an SN 3 set gives a bent AX₂E shape rather than trigonal planar molecular shape."
    ],
    "visual": "vsepr"
  },
  {
    "number": 65,
    "title": "Bent / Angular Geometry",
    "part": 9,
    "paragraphs": [
      "Bent/angular shapes arise from at least two bonded atoms plus one or more lone pairs, e.g. SO₂ (approximately AX₂E, trigonal-planar electron set) and H₂O (AX₂E₂, tetrahedral electron set). The bond angle depends on lone-pair repulsion, ligand electronegativity, multiple bonding and hybrid character."
    ],
    "bullets": [
      "SO₂ angle is near but below 120° in a simple VSEPR picture.",
      "H₂O angle ≈ 104.5°, well below tetrahedral 109.47° because two lone pairs compress the bonds."
    ],
    "exam": "Both SO₂ and H₂O are bent, but their electron geometries and steric numbers differ."
  },
  {
    "number": 66,
    "title": "Tetrahedral Geometry",
    "part": 9,
    "paragraphs": [
      "Tetrahedral geometry (AX₄, SN 4) maximises separation of four electron domains at 109.47°. CH₄ and NH₄⁺ are classic near-ideal tetrahedral species. Four equivalent σ bonds can be represented by sp³ hybrids, although the same total wavefunction can be expressed without invoking literal preformed hybrids."
    ],
    "exam": "A tetrahedral molecule has no 90° bond angles; drawings on paper are perspective projections.",
    "visual": "vsepr"
  },
  {
    "number": 67,
    "title": "Trigonal Pyramidal Geometry",
    "part": 10,
    "paragraphs": [
      "Trigonal-pyramidal shape (AX₃E) derives from tetrahedral electron geometry with one lone pair, as in NH₃, PH₃ and many amines. The lone pair compresses bond angles relative to 109.47°, but the magnitude depends on hybridisation and ligand effects; NH₃ ≈ 107°, whereas PH₃ is near 93.5° and is poorly described as strongly sp³-hybridised."
    ],
    "exam": "Use Drago’s rule for heavier hydrides: near-90° angles often reflect bonds made mainly from p orbitals."
  },
  {
    "number": 68,
    "title": "Trigonal Bipyramidal Geometry",
    "part": 10,
    "paragraphs": [
      "Trigonal-bipyramidal geometry (AX₅) contains three equatorial positions 120° apart and two axial positions 180° apart, each axial bond at 90° to all three equatorial bonds. PCl₅(g) is the standard example. Axial bonds are often longer/weaker because they experience more 90° interactions."
    ],
    "bullets": [
      "Axial and equatorial positions are not equivalent.",
      "Lone pairs preferentially occupy equatorial sites."
    ],
    "exam": "PCl₅(s) can be ionic ([PCl₄]⁺[PCl₆]⁻), so solid-state ‘hybridisation’ differs from gaseous molecular PCl₅.",
    "visual": "vsepr"
  },
  {
    "number": 69,
    "title": "See-Saw Geometry",
    "part": 10,
    "paragraphs": [
      "See-saw geometry (AX₄E) derives from a trigonal-bipyramidal electron arrangement with the lone pair in an equatorial site. SF₄ is the classic example. Two axial and two equatorial bonds remain, giving unequal bond lengths/angles and a polar molecule."
    ],
    "bullets": [
      "Equatorial lone pair avoids an extra 90° interaction compared with an axial lone pair.",
      "Ideal 90°/120° values are distorted by the bulky lone pair."
    ],
    "visual": "vsepr"
  },
  {
    "number": 70,
    "title": "T-Shaped Geometry",
    "part": 10,
    "paragraphs": [
      "T-shaped geometry (AX₃E₂) also derives from trigonal-bipyramidal electron geometry. Both lone pairs occupy equatorial sites, leaving two axial bonds and one equatorial bond; ClF₃ and BrF₃ are examples. Strong lone-pair repulsions distort the ideal 90° angles."
    ],
    "exam": "AX₃E₂ is T-shaped, not trigonal planar, even though three atoms are bonded to the centre.",
    "visual": "vsepr"
  },
  {
    "number": 71,
    "title": "Octahedral Geometry",
    "part": 10,
    "paragraphs": [
      "Octahedral geometry (AX₆, SN 6) has six equivalent directions at 90° with opposite pairs at 180°. SF₆ is the textbook main-group example and many coordination complexes are octahedral. In ideal octahedral electron geometry, all six positions are symmetry-equivalent."
    ],
    "exam": "Unlike trigonal bipyramidal geometry, there is no axial/equatorial distinction among the six ideal octahedral sites.",
    "visual": "vsepr"
  },
  {
    "number": 72,
    "title": "Square Pyramidal Geometry",
    "part": 10,
    "paragraphs": [
      "Square-pyramidal shape (AX₅E) comes from octahedral electron geometry with one site occupied by a lone pair, leaving a square base and one axial ligand. BrF₅ and IF₅ are examples. The lone pair occupies the site opposite the axial bond direction and distorts basal/axial distances."
    ],
    "exam": "Square pyramidal is polar for identical ligands because the bond moments do not cancel completely.",
    "visual": "vsepr"
  },
  {
    "number": 73,
    "title": "Square Planar Geometry",
    "part": 10,
    "paragraphs": [
      "Square-planar shape (AX₄E₂ in main-group VSEPR) results when two lone pairs occupy opposite sites of an octahedral electron set, as in XeF₄. Four ligands remain in one plane at 90°/180°. In transition-metal complexes such as [PtCl₄]²⁻, square planarity arises from ligand-field/orbital energetics rather than simple AX₄E₂ VSEPR counting."
    ],
    "exam": "Do not apply one hybridisation explanation indiscriminately to XeF₄ and d⁸ metal complexes.",
    "visual": "vsepr"
  },
  {
    "number": 74,
    "title": "Pentagonal Bipyramidal Geometry",
    "part": 10,
    "paragraphs": [
      "Pentagonal-bipyramidal geometry (AX₇) contains five coplanar equatorial ligands forming a pentagon and two axial ligands perpendicular to that plane. IF₇ is the standard molecular example. Equatorial–equatorial angles are 72°, axial–equatorial 90° and axial–axial 180°."
    ],
    "exam": "Seven-coordinate geometry has more crowding; ligand size strongly affects distortions.",
    "visual": "vsepr"
  },
  {
    "number": 75,
    "title": "Pentagonal Planar Geometry",
    "part": 10,
    "paragraphs": [
      "Pentagonal-planar molecular shape can arise from a seven-domain arrangement when two axial positions are occupied by lone pairs (AX₅E₂) in a simplified VSEPR description. It is much less common than square planar and should be assigned only when electron count and known structure support it."
    ],
    "modern": "For highly hypervalent species, detailed structures may be fluxional or influenced by solid-state packing; VSEPR provides a first model, not always a complete electronic description.",
    "visual": "vsepr"
  },
  {
    "number": 76,
    "title": "Stereochemically Active and Inactive Lone Pairs",
    "part": 10,
    "paragraphs": [
      "A stereochemically active lone pair occupies a directional region that measurably distorts molecular geometry; an inactive lone pair is more s-like, delocalised or otherwise not expressed as a distinct lobe in the observed structure. Inert-pair effects, ligand electronegativity, π bonding and crystal-field/relativistic effects can change lone-pair activity."
    ],
    "bullets": [
      "Active LP examples: NH₃, H₂O, SF₄.",
      "Apparently inactive LP examples occur in some heavy p-block complexes where a regular high-coordinate geometry persists."
    ],
    "exam": "Do not decide activity from electron count alone; use experimental/known geometry and electronic context."
  },
  {
    "number": 77,
    "title": "Factors Causing Deviations in Molecular Geometry",
    "part": 10,
    "paragraphs": [
      "Deviations from ideal geometry arise from unequal domain repulsions, electron delocalisation, alternative bonding descriptions, ligand size/electronegativity, ionic character, π bonding, lone-pair activity and—in transition-metal compounds—ligand-field stabilisation. Lone-pair–lone-pair avoidance can dominate site selection."
    ],
    "bullets": [
      "Electron delocalisation can equalise bonds and enforce planarity.",
      "Strongly electronegative ligands pull bond density away from the centre, often reducing BP–BP repulsion.",
      "Crystal-field effects are relevant for d-block coordination geometry, not a universal VSEPR correction for main-group molecules."
    ],
    "exam": "When a real structure disagrees with naive hybridisation, explain the physical factor rather than forcing the label."
  },
  {
    "number": 78,
    "title": "Hybridisation in Solid and Aqueous States",
    "part": 11,
    "paragraphs": [
      "A species can adopt different structures in gas, solid and solution because association, ionisation, solvation and ligand substitution change coordination. PCl₅ is trigonal bipyramidal as a molecular gas but forms ionic [PCl₄]⁺[PCl₆]⁻ in many solids. BeCl₂ is polymeric/bridged in solid form but can form solvated complexes in donor solvents."
    ],
    "bullets": [
      "Assign hybridisation/shape to the actual species and phase specified.",
      "Hydration can change coordination number: metal aqua ions are not simply bare gaseous ions."
    ],
    "exam": "Never transfer a gas-phase VSEPR shape automatically to a crystal or aqueous species."
  },
  {
    "number": 79,
    "title": "Structure Drawing and Shape Determination",
    "part": 11,
    "paragraphs": [
      "A reliable structure-and-shape workflow is: (1) count valence electrons and charge, (2) choose connectivity, (3) draw valid Lewis/resonance forms, (4) count electron domains, (5) assign electron geometry and shape, (6) check multiple bonding/lone-pair activity/state, and (7) compare with known exceptions. Formal charge and experimental connectivity outrank a memorised hybridisation shortcut."
    ],
    "bullets": [
      "For radicals, hypervalent species and transition-metal complexes, hybridisation may be only a rough label.",
      "For resonance ions, use the real delocalised geometry, not one arbitrary contributor."
    ],
    "exam": "Write the species first: e.g. PCl₅(g) vs [PCl₄]⁺ vs [PCl₆]⁻ are three different geometry problems."
  },
  {
    "number": 80,
    "title": "Structures of Important Inorganic Molecules and Ions",
    "part": 11,
    "paragraphs": [
      "Important inorganic structures are best learned by connectivity and electron-domain logic rather than isolated pictures. Identify terminal =O/–OH groups, bridging O/H/halide atoms, rings/chains and symmetry. Oxyacids, oxides, borates, phosphazenes and interhalogens repeatedly test whether you can distinguish true connectivity from a flat textbook sketch."
    ],
    "bullets": [
      "Check which atom bears hydrogen in oxyacids (usually O–H).",
      "Mark bridges explicitly (μ-O, μ-H, μ-X) rather than drawing ambiguous crossing lines."
    ],
    "exam": "A correct formula does not guarantee a correct structure; connectivity is the scored information.",
    "visual": "inorganic"
  },
  {
    "number": 81,
    "title": "Oxyacids of Phosphorus",
    "part": 11,
    "paragraphs": [
      "Oxyacids of phosphorus contain P–O, P=O-like (strongly polar/delocalised) and P–OH linkages; basicity equals the number of ionisable O–H groups, not the number of total hydrogens. H₃PO₂ is monobasic (one P–OH, two P–H), H₃PO₃ is dibasic (two P–OH, one P–H), and H₃PO₄ is tribasic (three P–OH). P–H hydrogens are generally reducing/non-ionisable in acid-base counting."
    ],
    "bullets": [
      "H₄P₂O₇ contains a P–O–P bridge and four P–OH groups.",
      "Condensation of orthophosphoric acid forms pyro-/polyphosphoric structures by loss of water."
    ],
    "exam": "Basicity of H₃PO₂ = 1 and H₃PO₃ = 2 is a classic JEE trap.",
    "visual": "inorganic"
  },
  {
    "number": 82,
    "title": "Oxyacids of Sulfur",
    "part": 11,
    "paragraphs": [
      "Sulfur oxyacids are distinguished by O–H, S=O-like terminal bonds, S–O–S bridges, S–S bonds and peroxo O–O bonds. H₂SO₄ has two acidic O–H groups; oleum contains pyrosulfuric H₂S₂O₇ with an S–O–S bridge; peroxomonosulfuric H₂SO₅ and peroxodisulfuric H₂S₂O₈ contain O–O peroxide linkages that must not be drawn as ordinary S–O bonds."
    ],
    "bullets": [
      "Thiosulfuric H₂S₂O₃ conceptually replaces one O of sulfuric acid by S and is unstable as a free acid.",
      "Oxidation state alone does not reveal connectivity; explicitly locate peroxo and bridging groups."
    ],
    "exam": "In peroxo acids, each peroxide oxygen has oxidation state −1.",
    "visual": "inorganic"
  },
  {
    "number": 83,
    "title": "Oxides of Carbon",
    "part": 11,
    "paragraphs": [
      "CO is a heteronuclear diatomic with a strong multiple bond and a small dipole whose negative end is experimentally on carbon despite oxygen being more electronegative; MO mixing/formal-charge contributions explain this counterintuitive polarity. CO₂ is linear O=C=O and nonpolar because equal bond dipoles cancel. Suboxides and carbon suboxide C₃O₂ illustrate cumulated multiple bonding but are less common exam structures."
    ],
    "bullets": [
      "CO bond order is close to 3 and it is isoelectronic with N₂.",
      "CO₂ carbon is linear/sp in the localised picture; each C=O includes σ + π bonding."
    ],
    "exam": "Do not predict CO dipole direction from electronegativity alone.",
    "visual": "inorganic"
  },
  {
    "number": 84,
    "title": "Oxides of Phosphorus",
    "part": 11,
    "paragraphs": [
      "Phosphorus oxides form cage structures rather than simple flat P=O drawings. P₄O₆ has a P₄ tetrahedral skeleton with six bridging O atoms inserted along P–P edges and retains a lone pair on each P; P₄O₁₀ adds four terminal oxo oxygens, one on each P. These are commonly molecular cages in the vapour/solid molecular form."
    ],
    "bullets": [
      "P₄O₆: 6 bridging O, no terminal oxo O.",
      "P₄O₁₀: same six bridges + four terminal oxo groups."
    ],
    "exam": "Count bridges from the P₄ tetrahedron: six edges → six bridging O atoms.",
    "visual": "inorganic"
  },
  {
    "number": 85,
    "title": "Sulfur and Selenium Oxide Structures",
    "part": 11,
    "paragraphs": [
      "SO₂ is bent and has equivalent S–O bonds through delocalisation/resonance; SO₃ is trigonal planar and highly symmetric. Solid SO₃ can form cyclic/polymeric modifications. SeO₂ commonly forms polymeric chains in the solid with bridging oxygen atoms, while molecular gas-phase descriptions differ. Heavy chalcogen oxides therefore demonstrate strong state dependence."
    ],
    "bullets": [
      "SO₂ is AX₂E-like in VSEPR but bonding is delocalised.",
      "SO₃(g) is D₃h/trigonal planar with equivalent S–O distances."
    ],
    "exam": "Do not assume the isolated-molecule formula gives the solid-state connectivity.",
    "visual": "inorganic"
  },
  {
    "number": 86,
    "title": "Borax Structure",
    "part": 11,
    "paragraphs": [
      "Borax, Na₂B₄O₇·10H₂O, is better viewed in terms of the tetraborate ion and hydration rather than a simple chain of B–O single bonds. The tetraborate framework contains both trigonal BO₃ and tetrahedral BO₄ boron environments connected through oxygen bridges. In aqueous solution, borate speciation changes by hydrolysis, so the crystal anion should not be copied blindly into solution chemistry."
    ],
    "bullets": [
      "Boron readily switches between 3-coordinate planar and 4-coordinate tetrahedral environments.",
      "Hydrated sodium ions and water molecules complete the crystal structure."
    ],
    "exam": "Remember mixed BO₃/BO₄ environments in tetraborate structures.",
    "visual": "inorganic"
  },
  {
    "number": 87,
    "title": "Phosphazenes",
    "part": 11,
    "paragraphs": [
      "Phosphazenes contain alternating P and N atoms, commonly written as cyclic or polymeric –P=N– frameworks such as (NPCl₂)₃. The P–N bonds are shorter/equalised relative to simple single bonds because of delocalised π interaction; older texts describe pπ–dπ bonding, while modern treatments emphasise delocalised molecular orbitals with limited P 3d participation."
    ],
    "bullets": [
      "Cyclic trimer: six-membered alternating P/N ring.",
      "Substitution at P allows many functional derivatives and polymers."
    ],
    "modern": "Retain pπ–dπ terminology for historical/exam context, but do not present large valence-3d participation as the sole modern explanation.",
    "visual": "inorganic"
  },
  {
    "number": 88,
    "title": "Interhalogen Compounds",
    "part": 11,
    "paragraphs": [
      "Interhalogen compounds form between different halogens and include AX, AX₃, AX₅ and AX₇ types such as ICl, ClF₃, BrF₅ and IF₇. The larger, less electronegative halogen is usually central. VSEPR gives T-shaped AX₃E₂ for ClF₃, square-pyramidal AX₅E for BrF₅ and pentagonal-bipyramidal AX₇ for IF₇."
    ],
    "bullets": [
      "Interhalogens are generally more reactive than parent halogens except F₂ because bonds are polar and often weaker.",
      "Large central atoms accommodate higher coordination numbers."
    ],
    "exam": "Central atom selection: the larger/less electronegative halogen is central, never F.",
    "visual": "inorganic"
  },
  {
    "number": 89,
    "title": "Bond Angle",
    "part": 12,
    "paragraphs": [
      "Bond angle is the angle between two bonds sharing a central atom and reflects electron-domain geometry plus electronic/steric distortions. Ideal angles—180°, 120°, 109.47°, 90°—are reference values, not guaranteed experimental numbers. Lone pairs, multiple bonds, ligand electronegativity and hybrid character shift them."
    ],
    "exam": "State both ideal geometry and expected direction of deviation when exact values are not required."
  },
  {
    "number": 90,
    "title": "Factors Affecting Bond Angle",
    "part": 12,
    "paragraphs": [
      "Factors affecting bond angle include lone-pair number/activity, electronegativity of central and terminal atoms, s-character of bonding hybrids, multiple-bond repulsion, ligand size, steric crowding, back bonding and state/solvation. Lone pairs usually compress adjacent bond angles, but trends can reverse when bonding becomes largely unhybridised p-character or when steric effects dominate."
    ],
    "bullets": [
      "NH₃ > NF₃ in H/N–X angle because highly electronegative F pulls bond density away from N.",
      "CH₄ (109.5°) > NH₃ (~107°) > H₂O (~104.5°) within a related second-row set."
    ],
    "exam": "Avoid one-factor explanations when comparing unrelated central atoms."
  },
  {
    "number": 91,
    "title": "Percentage s- and p-Character from Bond Angle",
    "part": 12,
    "paragraphs": [
      "For two equivalent hybrid orbitals forming bonds with angle θ, orthogonality gives a useful relation between s and p coefficients. In an spⁿ hybrid model, the angle between equivalent hybrids satisfies approximately cosθ = −1/n; therefore n = −1/cosθ and s-character = 1/(1+n). This works best for idealised equivalent hybrids and should not be forced onto strongly distorted molecules."
    ],
    "formula": "\\cos\\theta=-\\frac{1}{n},\\quad sp^n:\\;\\%s=\\frac{100}{1+n}",
    "exam": "For θ = 180°, n = 1 → sp; 120° gives n = 2 → sp²; 109.47° gives n = 3 → sp³."
  },
  {
    "number": 92,
    "title": "Bent’s Rule",
    "part": 12,
    "paragraphs": [
      "Bent’s rule states that an atom directs hybrid orbitals with greater s-character toward electropositive substituents and greater p-character toward electronegative substituents. Because s-character is lower in energy and held closer to the nucleus, this redistribution minimises energy. The rule explains bond-angle and bond-strength trends in unsymmetrical molecules better than assigning identical hybrids to every bond."
    ],
    "bullets": [
      "More s-character in a bond generally shortens/strengthens it and increases the effective electronegativity of that hybrid orbital.",
      "Highly electronegative substituents tend to receive p-rich hybrids from the central atom."
    ],
    "exam": "Bent’s rule is about redistribution of hybrid character on the central atom, not simply ‘electronegative atoms make smaller angles’."
  },
  {
    "number": 93,
    "title": "Drago’s Rule",
    "part": 12,
    "paragraphs": [
      "Drago’s rule identifies cases where little hybridisation occurs: if the central atom has at least one lone pair, belongs to the third period or heavier, and bonded atoms are not very electronegative, bonding may use nearly pure p orbitals. Bond angles then approach 90° rather than the tetrahedral value. PH₃, AsH₃ and H₂S are classic examples."
    ],
    "bullets": [
      "PH₃ H–P–H ≈ 93.5°, much closer to 90° than 109.5°.",
      "The lone pair can remain largely s-like, reducing hybrid mixing."
    ],
    "exam": "Do not label every three-coordinate pyramidal molecule ‘sp³’ with equal confidence; heavier hydrides are the classic exception."
  },
  {
    "number": 94,
    "title": "Back Bonding",
    "part": 12,
    "paragraphs": [
      "Back bonding is electron donation from a filled orbital on one atom into an empty orbital on an adjacent atom, creating additional π/delocalised bond character opposite to the primary donor–acceptor direction. In BF₃, F lone-pair donation into empty B 2p orbitals is a classic pπ–pπ example; in metal carbonyls, metal dπ → ligand π* back-donation is a genuine and important synergic interaction."
    ],
    "bullets": [
      "Back donation shortens/strengthens the receiving bond and changes Lewis acidity/basicity.",
      "It requires symmetry-compatible orbitals and reasonable energy/size matching."
    ],
    "exam": "Distinguish ligand→central pπ donation in BF₃ from metal→CO π backbonding; both are ‘back bonding’ but different orbital directions.",
    "visual": "backbond"
  },
  {
    "number": 95,
    "title": "pπ–pπ and pπ–dπ Back Bonding",
    "part": 12,
    "paragraphs": [
      "pπ–pπ back bonding involves overlap of filled p and empty p orbitals of compatible orientation, as in F→B donation in BF₃. Traditional pπ–dπ language was used for O/S/P compounds and phosphazenes, but modern calculations often find much less main-group d participation than older hybridisation models claimed. Transition-metal p–d/d–p π interactions, however, are real and central to coordination chemistry."
    ],
    "modern": "In exam answers, state the traditional pπ–dπ label when explicitly asked, then add that modern MO descriptions emphasise delocalisation/ionic resonance and limited high-energy d contribution for many main-group species.",
    "visual": "backbond"
  },
  {
    "number": 96,
    "title": "Lewis Acidity of Boron Halides",
    "part": 12,
    "paragraphs": [
      "Lewis acidity of boron trihalides follows BF₃ < BCl₃ < BBr₃ < BI₃ in the usual gas-phase donor-complex trend. Although F is most electronegative, effective 2p(F)–2p(B) back donation is strongest in BF₃ because size/energy matching is best, partially reducing electron deficiency at B. Back donation weakens down the halogen group, so acceptor strength increases."
    ],
    "bullets": [
      "Inductive electron withdrawal alone would predict a misleading order.",
      "Steric/solvent/donor effects can modify measured orders, so state the context."
    ],
    "exam": "Classic JEE order: BF₃ is the weakest Lewis acid among BX₃ despite F being most electronegative."
  },
  {
    "number": 97,
    "title": "Effects of Back Bonding",
    "part": 12,
    "paragraphs": [
      "Back bonding can shorten bonds, increase partial multiple-bond character, reduce Lewis acidity at the acceptor, alter vibrational frequencies and redistribute charge. In metal carbonyls, stronger M→CO back-donation weakens the internal C–O bond and lowers νCO while strengthening M–C. In BF₃-type systems, donation gives partial B–F π character and shorter bonds."
    ],
    "bullets": [
      "More backbonding to CO → lower C–O stretching frequency.",
      "Backbonding is synergic with σ donation in many metal–ligand systems."
    ],
    "exam": "Always state which bond strengthens and which weakens; effects are not identical in every system."
  },
  {
    "number": 98,
    "title": "Multicentre Electron Bonding",
    "part": 13,
    "paragraphs": [
      "Multicentre bonding delocalises an electron pair over three or more nuclei instead of assigning every pair to one two-centre bond. It is essential for electron-deficient boranes and useful for hypervalent 3c–4e systems. Multicentre models preserve electron count without inventing impossible numbers of localised two-electron bonds."
    ],
    "bullets": [
      "Electron-deficient: 3c–2e bonding (e.g. B–H–B bridges).",
      "Hypervalent: often 3c–4e delocalised bonding along X–A–X units."
    ],
    "exam": "Multicentre does not mean weak or ‘half bonds’ in a simplistic sense; MO occupancy determines bond order distribution."
  },
  {
    "number": 99,
    "title": "Two-Centre Two-Electron (2c–2e) Bond",
    "part": 13,
    "paragraphs": [
      "A two-centre two-electron (2c–2e) bond is the ordinary localised covalent bond: one electron pair occupies a bonding combination connecting two nuclei. Terminal B–H bonds in diborane, C–H bonds in methane and H–H in H₂ are examples. Lewis single bonds are usually interpreted this way."
    ],
    "exam": "A 2c–2e label specifies electron/nuclear count, not whether the bond is polar or nonpolar."
  },
  {
    "number": 100,
    "title": "Three-Centre Two-Electron (3c–2e) Bond",
    "part": 13,
    "paragraphs": [
      "A three-centre two-electron (3c–2e) bond arises when two electrons occupy a bonding MO delocalised over three atoms, leaving nonbonding/antibonding combinations unoccupied. In B–H–B bridges of diborane, the pair binds both B centres to the bridging H without requiring two independent 2e B–H bonds."
    ],
    "bullets": [
      "Three AOs combine into three MOs: bonding, approximately nonbonding, antibonding.",
      "Only two electrons occupy the lowest bonding MO in a 3c–2e unit."
    ],
    "exam": "Do not count each dashed B–H bridge segment as a full conventional 2c–2e bond.",
    "visual": "diborane"
  },
  {
    "number": 101,
    "title": "Bridge / Banana Bonding",
    "part": 13,
    "paragraphs": [
      "Bridge or ‘banana’ bonding describes curved electron density connecting two atoms through a bridge, classically the B–H–B 3c–2e bonds of diborane. The term ‘banana bond’ is visual language: the electron density is bent away from a straight two-centre axis because one pair is shared across three centres."
    ],
    "exam": "In cyclopropane, ‘bent/banana’ C–C bonding is a different context from diborane 3c–2e bridges; do not equate their electron counts.",
    "visual": "diborane"
  },
  {
    "number": 102,
    "title": "Diborane and Electron-Deficient Bonding",
    "part": 13,
    "paragraphs": [
      "Diborane B₂H₆ has 12 valence electrons. Four terminal B–H bonds are ordinary 2c–2e bonds; two bridging hydrogens form two B–H–B 3c–2e bonds. There is no conventional 2c–2e B–B single bond required by this bonding picture. Each bridge delocalises one electron pair over B–H–B."
    ],
    "bullets": [
      "Electron-deficient means insufficient electrons to draw all connections as ordinary 2c–2e bonds.",
      "Terminal B–H bonds are shorter/stronger than bridge B–H contacts."
    ],
    "exam": "Count: 4 terminal 2c–2e bonds + 2 three-centre bridge bonds.",
    "visual": "diborane"
  },
  {
    "number": 103,
    "title": "Bridged Structures of Aluminium and Beryllium Compounds",
    "part": 13,
    "paragraphs": [
      "Al₂Cl₆ (vapour/dimer) and electron-deficient beryllium halides illustrate bridging beyond boranes. AlCl₃ dimerises through two bridging chlorides that donate lone-pair density into electron-deficient Al centres; solid AlCl₃ can adopt extended structures. BeCl₂ forms bridged chains/polymers in the solid and linear monomers at high temperature, while donor solvents can produce tetra-coordinate complexes."
    ],
    "bullets": [
      "Bridging halides use donor–acceptor/multicentre interactions rather than B–H–B 3c–2e bonding exactly.",
      "State dependence is essential: monomer, dimer and polymer structures differ."
    ],
    "exam": "Do not use one bonding model for every bridge: hydride bridges and halide bridges have different electron-donation descriptions.",
    "visual": "inorganic"
  },
  {
    "number": 104,
    "title": "Hybridisation in Odd-Electron Species",
    "part": 13,
    "paragraphs": [
      "Odd-electron species cannot always be assigned meaningful integer hybridisation by the same shortcut used for closed-shell molecules. NO is a diatomic where hybridisation language is largely unhelpful; NO₂ is bent with an odd electron and delocalised bonding, while ClO₂ is also an odd-electron bent molecule. In the corrected Lewis/resonance treatment of NO₂, the unpaired electron is principally associated with nitrogen; dimerisation pairs the nitrogen-centred radical electrons to give planar O₂N–NO₂ with a direct N–N bond, not an O–O-linked dimer. Use electron-domain/resonance/MO evidence first, then apply a hybridisation label only as a limited local model."
    ],
    "exam": "NO has 11 valence electrons. Never force a diatomic NO molecule into an sp²/sp³ hybridisation answer."
  },
  {
    "number": 105,
    "title": "Dipole Moment",
    "part": 14,
    "paragraphs": [
      "Dipole moment is a vector measure of charge separation. For two point charges ±q separated by distance r, μ = qr; molecular dipole is the vector sum of all bond and lone-pair/charge-distribution contributions. Unit: coulomb-metre (SI), commonly Debye in molecular chemistry; 1 D = 3.33564×10⁻³⁰ C m."
    ],
    "bullets": [
      "Magnitude depends on both charge separation and geometry.",
      "A molecule can contain polar bonds but have μ = 0 by symmetry."
    ],
    "formula": "\\vec\\mu=\\sum_i q_i\\vec r_i",
    "exam": "CO₂, BF₃, CCl₄, SF₆ and XeF₄ are classic vector-cancellation examples.",
    "visual": "dipole"
  },
  {
    "number": 106,
    "title": "Percentage Ionic Character from Dipole Moment",
    "part": 14,
    "paragraphs": [
      "Percentage ionic character compares observed dipole moment with the dipole expected for complete ±e charge separation at the measured bond length. The 100%-ionic dipole in Debye is approximately 4.80 × bond length in Å. This is an operational estimate, not a literal fraction of time spent ‘ionic’."
    ],
    "formula": "\\%\\ ionic=\\frac{\\mu_{obs}}{\\mu_{ionic}}\\times100,\\qquad \\mu_{ionic}(D)\\approx4.80\\,r(\\AA)",
    "exam": "Use the experimental bond length in the same molecule; unit conversion errors are common."
  },
  {
    "number": 107,
    "title": "Dipole Moment and Molecular Geometry",
    "part": 14,
    "paragraphs": [
      "Molecular geometry controls whether bond dipoles reinforce or cancel. Linear CO₂ and square-planar XeF₄ have zero net dipole for identical ligands; bent H₂O and see-saw SF₄ are polar. Dipole moment can therefore distinguish structural isomers or support geometry assignments, but zero μ alone does not uniquely identify one shape."
    ],
    "bullets": [
      "Vector cancellation requires both symmetry and equal corresponding bond moments.",
      "Unsymmetrical substitution can make an otherwise symmetric framework polar."
    ],
    "exam": "Check vectors, not the number of polar bonds.",
    "visual": "dipole"
  },
  {
    "number": 108,
    "title": "Bond-Pair Moment",
    "part": 14,
    "paragraphs": [
      "A bond-pair moment is the vector contribution associated with polarisation of a bonding electron pair along a bond. Its direction follows the actual charge distribution convention (chemists often draw the dipole arrow toward the negative end with a crossed positive tail). The molecular dipole is the vector sum of these and other contributions."
    ],
    "exam": "Do not confuse the physics vector p from negative→positive with the common chemistry arrow convention; state the convention used."
  },
  {
    "number": 109,
    "title": "Lone-Pair Moment",
    "part": 14,
    "paragraphs": [
      "Lone-pair moment describes the contribution of asymmetric nonbonding electron density to the molecular dipole. In NH₃, N–H bond moments and the lone-pair-related charge distribution reinforce the net dipole; in NF₃, N–F bond moments oppose the lone-pair direction, giving a much smaller net dipole. This explains the classic NH₃ > NF₃ dipole anomaly."
    ],
    "exam": "NH₃ (~1.47 D) has a larger dipole than NF₃ (~0.24 D) despite F being more electronegative.",
    "visual": "dipole"
  },
  {
    "number": 110,
    "title": "Intrinsic Homopolar Dipole",
    "part": 14,
    "paragraphs": [
      "An intrinsic homopolar dipole can arise even in a bond between identical atoms when the two atoms occupy electronically inequivalent environments in a larger molecule or when a homonuclear bond is polarised by substituents/charge distribution. It is not an isolated A–A electronegativity dipole; it reflects the molecular environment and asymmetric electron density."
    ],
    "exam": "For a free isolated homonuclear diatomic such as H₂ or N₂, permanent dipole moment is zero by inversion symmetry."
  },
  {
    "number": 111,
    "title": "Group Moment",
    "part": 14,
    "paragraphs": [
      "Group moment is a transferable-vector approximation: the dipole contribution of a functional group is treated as a vector that can be added to others to estimate molecular dipoles or compare isomers. It works best when local environments are similar and conformations are known. Strong conjugation, hydrogen bonding or conformational averaging can invalidate simple additivity."
    ],
    "bullets": [
      "Vector addition explains cis/trans dipole differences.",
      "Group moments are empirical approximations, not fundamental constants."
    ],
    "exam": "Use symmetry first; group-vector addition is especially useful for substituted benzenes and geometric isomers."
  },
  {
    "number": 112,
    "title": "Formal Charge",
    "part": 14,
    "paragraphs": [
      "Formal charge is a Lewis-bookkeeping charge obtained by assigning half of bonding electrons to each bonded atom and all lone-pair electrons to their host. FC = valence electrons − nonbonding electrons − ½(bonding electrons). The sum of all formal charges must equal the species charge."
    ],
    "bullets": [
      "Formal charge is not oxidation state and not equal to measured partial charge.",
      "Use it to rank Lewis contributors and check electron accounting."
    ],
    "formula": "FC=V-N-\\frac{B}{2}",
    "exam": "Always verify ΣFC = overall charge before comparing structures."
  },
  {
    "number": 113,
    "title": "Rules for Selecting the Best Lewis Structure",
    "part": 14,
    "paragraphs": [
      "Best Lewis structures usually minimise the magnitude/number of formal charges, place negative formal charge on more electronegative atoms, satisfy octets where reasonable, and avoid unnecessary charge separation. However these are ranking rules, not absolute laws: known connectivity, resonance, hypervalency and electron deficiency can override a simplistic ‘all FC = 0’ preference."
    ],
    "bullets": [
      "Equivalent resonance contributors must be retained even if no single one is ‘the structure’.",
      "Second-period atoms should not exceed an octet in standard Lewis structures."
    ],
    "exam": "Do not invent impossible multiple bonds solely to eliminate formal charge."
  },
  {
    "number": 114,
    "title": "Resonance",
    "part": 15,
    "paragraphs": [
      "Resonance is required when one Lewis/VB structure cannot represent the electron distribution while atomic positions remain essentially fixed. The real molecule is a single resonance hybrid with delocalised electron density; canonical structures are bookkeeping contributors, not rapidly interconverting molecules."
    ],
    "bullets": [
      "Only electrons move between resonance contributors, not nuclei.",
      "Contributors with lower charge separation, complete octets and favourable charge placement usually contribute more."
    ],
    "exam": "Resonance is not an equilibrium between structures.",
    "visual": "resonance"
  },
  {
    "number": 115,
    "title": "Resonance Structures and Resonance Hybrid",
    "part": 15,
    "paragraphs": [
      "Resonance structures have identical atomic connectivity and differ only in placement of π electrons, lone pairs and formal charges. The resonance hybrid has intermediate/equalised bond lengths and lower energy than any one contributor. Equivalent contributors contribute equally; nonequivalent contributors have unequal weights."
    ],
    "bullets": [
      "Benzene: six equal C–C bonds, not alternating single/double bonds in time.",
      "NO₃⁻: three equal N–O bonds in the real ion."
    ],
    "exam": "Do not move atoms or σ-bond skeletons when drawing resonance forms.",
    "visual": "resonance"
  },
  {
    "number": 116,
    "title": "Resonance Bond Order",
    "part": 15,
    "paragraphs": [
      "Resonance bond order can be estimated by averaging bond orders over equivalent canonical contributors when they contribute equally. For NO₃⁻ in the common Lewis model, each N–O bond has average order (2+1+1)/3 = 4/3. This predicts equal lengths intermediate between ordinary single and double bonds."
    ],
    "formula": "BO_{avg}=\\frac{\\sum BO_i}{N_{equivalent\\ contributors}}",
    "exam": "For nonequivalent contributors, a simple arithmetic average is only qualitative because weights differ."
  },
  {
    "number": 117,
    "title": "Bond Length",
    "part": 15,
    "paragraphs": [
      "Bond length is the equilibrium internuclear distance. Within a comparable pair of atoms, higher bond order generally means shorter bond: C–C > C=C > C≡C in length, while stronger overlap/s-character also shortens bonds. Atomic size, resonance, polarity and steric effects can override naive cross-family comparisons."
    ],
    "bullets": [
      "Bond order ↑ → length ↓ is most reliable for the same atom pair.",
      "Resonance equalises lengths toward intermediate values."
    ],
    "exam": "Correct preserved trend: r(N₂) < r(N₂⁺); removing a bonding electron from N₂ to make N₂⁺ lowers bond order from 3 to 2.5 and lengthens the bond."
  },
  {
    "number": 118,
    "title": "Bond Dissociation Energy",
    "part": 15,
    "paragraphs": [
      "Bond dissociation energy (BDE) is the enthalpy required for homolytic cleavage of a specified bond in a specified molecule, usually in the gas phase. Average bond enthalpy averages similar bonds across environments and should not be confused with a specific BDE. BDE generally increases with bond order and effective overlap, but radical stabilisation can strongly alter trends."
    ],
    "bullets": [
      "Successive bond dissociation enthalpies in the same polyatomic molecule are not identical.",
      "A weak bond can result from stabilised radicals even if the bond is not unusually long."
    ],
    "exam": "Specify homolytic vs heterolytic cleavage; BDE normally refers to homolysis."
  },
  {
    "number": 119,
    "title": "Inert Pair Effect",
    "part": 15,
    "paragraphs": [
      "The inert-pair effect is the increasing reluctance of the outer ns² pair of heavier p-block elements to participate in bonding, stabilising oxidation states two units below the group maximum (Tl⁺, Pb²⁺, Bi³⁺). Poor shielding by d/f electrons, relativistic contraction/stabilisation of ns orbitals and bond-energy factors contribute."
    ],
    "bullets": [
      "Down groups 13–16, lower oxidation states generally become more stable.",
      "The effect is not simply ‘the s pair is chemically inert’; it can be stereochemically active in some compounds."
    ],
    "exam": "Examples: Tl(I) more stable than Tl(III); Pb(II) more stable relative to Pb(IV) down the group; Bi(V) strongly oxidising/less stable than Bi(III)."
  },
  {
    "number": 120,
    "title": "Secondary Periodicity / Alternation Effect",
    "part": 15,
    "paragraphs": [
      "Secondary periodicity or alternation effect describes non-monotonic similarities and reversals caused by filled d/f shells, poor shielding, lanthanide contraction and relativistic effects. It explains why heavier congeners can resemble elements two periods above or show unexpected size/energy trends rather than smooth group behaviour."
    ],
    "bullets": [
      "d-block contraction makes Ga unusually small relative to Al; lanthanide contraction makes Zr and Hf very similar.",
      "Relativistic effects become important for 6p/6s elements and influence bonding/oxidation states."
    ],
    "exam": "Use the specific physical cause—poor shielding, contraction, relativistic stabilisation—rather than treating ‘secondary periodicity’ as a magic rule."
  },
  {
    "number": 121,
    "title": "Hydrogen Bonding",
    "part": 16,
    "paragraphs": [
      "Hydrogen bonding is an attractive interaction involving H covalently bound to an electronegative donor atom and an electron-rich acceptor, conventionally written D–H···A. It has electrostatic, charge-transfer, polarisation and dispersion components and is strongly directional. Classical donors are O–H, N–H and F–H, but weaker C–H···O and related interactions also exist."
    ],
    "bullets": [
      "Shorter, more linear D–H···A arrangements are usually stronger.",
      "Hydrogen bonds are weaker than typical covalent bonds but stronger than many dispersion contacts."
    ],
    "exam": "Hydrogen bonding is not a literal three-centre covalent bond in every case; its strength and character form a continuum.",
    "visual": "hbond"
  },
  {
    "number": 122,
    "title": "Intermolecular Hydrogen Bonding",
    "part": 16,
    "paragraphs": [
      "Intermolecular hydrogen bonding connects separate molecules and raises association, boiling point, viscosity and often water solubility. H₂O forms an extended network; HF forms chains/networks; alcohols associate strongly; carboxylic acids often dimerise through two reciprocal O–H···O hydrogen bonds in nonpolar media."
    ],
    "bullets": [
      "Intermolecular H-bonding generally raises boiling point by increasing cohesive energy.",
      "It can increase apparent molecular mass in vapour/nonpolar solution through association."
    ],
    "exam": "Compare o-nitrophenol vs p-nitrophenol: intermolecular association is stronger for p-isomer, giving higher boiling point.",
    "visual": "hbond"
  },
  {
    "number": 123,
    "title": "Intramolecular Hydrogen Bonding",
    "part": 16,
    "paragraphs": [
      "Intramolecular hydrogen bonding occurs within one molecule when donor and acceptor groups can form a favourable five- or six-membered pseudo-ring. It reduces intermolecular association, often lowers boiling point and water solubility, and can stabilise particular conformations or tautomers. o-Nitrophenol and salicylaldehyde are standard examples."
    ],
    "bullets": [
      "Intramolecular H-bonding can make a polar functional group less available to solvent.",
      "Geometry matters: ortho arrangement often enables a six-membered chelate-like H-bond."
    ],
    "exam": "o-Nitrophenol is steam volatile relative to p-nitrophenol because intramolecular H-bonding reduces intermolecular association.",
    "visual": "hbond"
  },
  {
    "number": 124,
    "title": "Chelation through Hydrogen Bonding",
    "part": 16,
    "paragraphs": [
      "Chelation through hydrogen bonding occurs when multiple donor/acceptor sites cooperate to form ring-like, often reinforced intramolecular or host–guest hydrogen-bond patterns. Cooperative preorganisation can strongly stabilise one conformation or complex even though each individual H bond is modest."
    ],
    "bullets": [
      "Five- and six-membered H-bonded rings are especially favourable.",
      "Chelation language here refers to multiple-point H-bond binding, distinct from metal–ligand chelation."
    ],
    "exam": "Identify whether the H-bond closes an internal ring or connects separate molecules before predicting boiling point/solubility."
  },
  {
    "number": 125,
    "title": "Strength of Hydrogen Bond",
    "part": 16,
    "paragraphs": [
      "Hydrogen-bond strength increases with donor acidity, acceptor basicity, favourable near-linear geometry, shorter H···A distance and polar environment effects. Charge-assisted H bonds (e.g. O–H···O⁻ or N–H⁺···O) can be much stronger than neutral ones. Very strong H bonds can become nearly symmetric when proton affinity of donor/acceptor is matched."
    ],
    "bullets": [
      "Typical neutral H bonds are roughly 10–40 kJ mol⁻¹, but the range is broad.",
      "F is highly electronegative, yet overall H-bond strength also depends on acceptor basicity and geometry."
    ],
    "exam": "Do not rank H-bond strength from electronegativity alone."
  },
  {
    "number": 126,
    "title": "Effects and Applications of Hydrogen Bonding",
    "part": 16,
    "paragraphs": [
      "Hydrogen bonding explains anomalously high boiling points of H₂O/HF/NH₃, water’s surface tension and heat capacity, protein/DNA recognition, solubility of polyols, crystal packing and many acid–base/conformational effects. It can either increase or decrease solubility depending on whether intermolecular bonding to solvent or intramolecular self-satisfaction dominates."
    ],
    "bullets": [
      "H-bond networks control many bulk properties collectively.",
      "Intramolecular H-bonding can lower water solubility by masking polar sites."
    ],
    "exam": "Always connect the property to whether H bonding is intra- or intermolecular."
  },
  {
    "number": 127,
    "title": "Extent of Hydrogen Bonding",
    "part": 16,
    "paragraphs": [
      "Extent of hydrogen bonding depends on number of donors/acceptors, geometry and network connectivity. Water can donate two and accept two, enabling a 3-D tetrahedral network; HF has one H donor but multiple lone pairs and tends toward chains; NH₃ has three donors but only one strong acceptor lone pair, giving a less extensive network than water."
    ],
    "bullets": [
      "More donor/acceptor sites do not automatically mean stronger individual H bonds.",
      "Network dimensionality and cooperativity matter for bulk properties."
    ],
    "exam": "Water’s unusually high boiling point reflects both strong interactions and an extensive network.",
    "visual": "hbond"
  },
  {
    "number": 128,
    "title": "Structure of Ice",
    "part": 16,
    "paragraphs": [
      "Ice Ih has an open tetrahedral hydrogen-bond network: each oxygen is approximately tetrahedrally coordinated to four neighbouring oxygens, donating two H bonds and accepting two. The open hexagonal framework leaves cavities, making ice less dense than liquid water. Melting partially collapses this open network before thermal expansion dominates at higher temperature."
    ],
    "bullets": [
      "Each H₂O has two short covalent O–H bonds and participates in four H-bond directions.",
      "Maximum density of water near 4 °C reflects competition between network opening and ordinary thermal contraction/expansion."
    ],
    "exam": "Ice floats because its open H-bonded lattice has lower density, not because individual O–H bonds expand dramatically.",
    "visual": "hbond"
  },
  {
    "number": 129,
    "title": "Hydrogen Bonding in DNA and RNA",
    "part": 16,
    "paragraphs": [
      "Hydrogen bonding provides specificity in nucleic-acid base pairing. In DNA, A pairs with T through two principal H bonds and G with C through three; RNA uses U instead of T. Base stacking and solvent/ionic effects also contribute greatly to duplex stability, so ‘three H bonds means GC stability is only due to one extra H bond’ is incomplete."
    ],
    "bullets": [
      "Watson–Crick pairing aligns donors/acceptors geometrically.",
      "H bonds encode recognition; stacking/solvation provide major thermodynamic stabilisation."
    ],
    "exam": "A–T = 2 canonical H bonds; G–C = 3 in standard Watson–Crick pairing."
  },
  {
    "number": 130,
    "title": "Special Cases of Hydrogen Bonding",
    "part": 16,
    "paragraphs": [
      "Special hydrogen-bond cases include bifurcated bonds, low-barrier/short strong H bonds, charge-assisted bonds, C–H···O/N/π interactions and dihydrogen bonding (X–H···H–M) in selected compounds. These broaden the classical F/O/N rule but should be invoked only when geometry and electronic context support them."
    ],
    "exam": "Recognise C–H···O as weaker but real; do not treat every close H···heteroatom contact as a hydrogen bond.",
    "modern": "The IUPAC concept of hydrogen bonding is broader than the old ‘H attached only to F/O/N’ school rule, but JEE questions usually focus on classical donors unless a special case is stated."
  },
  {
    "number": 131,
    "title": "Limitations of Valence Bond Theory",
    "part": 17,
    "paragraphs": [
      "Valence Bond Theory struggles with delocalised electrons, equivalent resonance bonds, electronic spectra and especially O₂ paramagnetism if restricted to a simple localised Lewis picture. It also does not naturally provide a single ordered set of orbitals spanning an entire molecule. MOT addresses these by forming molecular orbitals delocalised over the molecular framework."
    ],
    "bullets": [
      "VBT remains excellent for local bonding intuition and geometry.",
      "MOT is essential for bond order, magnetism and frontier-orbital reasoning."
    ],
    "exam": "The classic failure: simple Lewis/VBT predicts all electrons paired in O₂, but experiment shows two unpaired electrons."
  },
  {
    "number": 132,
    "title": "Molecular Orbital Theory (MOT)",
    "part": 17,
    "paragraphs": [
      "Molecular Orbital Theory treats electrons as occupying molecular orbitals extending over the molecule. Atomic orbitals combine according to symmetry and energy to give bonding, antibonding and sometimes nonbonding MOs. Electrons fill MOs by Aufbau, Pauli and Hund rules just as they fill atomic orbitals."
    ],
    "bullets": [
      "Number of MOs formed = number of AOs combined.",
      "Bonding MOs are lower in energy; antibonding MOs are marked * and are higher."
    ],
    "exam": "For diatomics, use the correct MO energy order and count valence electrons carefully.",
    "visual": "mo-foundation"
  },
  {
    "number": 133,
    "title": "Linear Combination of Atomic Orbitals (LCAO)",
    "part": 17,
    "paragraphs": [
      "LCAO constructs a molecular orbital as a linear combination of atomic orbitals: ψ = cAφA ± cBφB (and more terms in polyatomics). Constructive combination increases electron density between nuclei and lowers energy; destructive combination introduces a node between nuclei and raises energy."
    ],
    "bullets": [
      "Coefficients reflect each AO’s contribution; in heteronuclear molecules they are unequal.",
      "Normalisation and orthogonality constrain coefficients."
    ],
    "formula": "\\psi_{MO}=c_A\\phi_A+c_B\\phi_B+\\cdots",
    "visual": "mo"
  },
  {
    "number": 134,
    "title": "Conditions for Combination of Atomic Orbitals",
    "part": 17,
    "paragraphs": [
      "Atomic orbitals combine effectively when they have compatible symmetry, comparable energies and significant spatial overlap. If symmetry is wrong, the interaction integral vanishes; if energies are very different, mixing is weak and resulting MOs remain localised toward one atom."
    ],
    "bullets": [
      "Symmetry match is mandatory.",
      "Closer AO energies → stronger mixing/splitting.",
      "Greater overlap → larger bonding–antibonding separation, all else comparable."
    ],
    "exam": "Large geometric overlap cannot rescue symmetry-forbidden interaction."
  },
  {
    "number": 135,
    "title": "Bonding Molecular Orbitals (BMO)",
    "part": 17,
    "paragraphs": [
      "A bonding molecular orbital (BMO) results from constructive combination and concentrates electron density in the internuclear region, lowering energy relative to the parent AOs. Occupying a BMO increases bond order and stabilises the molecule."
    ],
    "bullets": [
      "σ bonding MOs have density along the bond axis.",
      "π bonding MOs have density above/below the axis with a nodal plane containing the axis."
    ],
    "visual": "mo"
  },
  {
    "number": 136,
    "title": "Antibonding Molecular Orbitals (ABMO)",
    "part": 17,
    "paragraphs": [
      "An antibonding molecular orbital (ABMO) results from destructive combination, contains an additional node between nuclei and is higher in energy than parent bonding combinations. Occupying it reduces bond order and destabilises the bond; notation uses an asterisk, e.g. σ* or π*."
    ],
    "bullets": [
      "Removing an antibonding electron strengthens/shortens a bond; adding one weakens/lengthens it.",
      "This explains O₂⁺ vs O₂ vs O₂⁻ trends."
    ],
    "exam": "Antibonding electrons count with a minus sign in the bond-order formula.",
    "visual": "mo"
  },
  {
    "number": 137,
    "title": "Non-Bonding Molecular Orbitals",
    "part": 17,
    "paragraphs": [
      "A nonbonding MO has little net bonding or antibonding effect because its electron density is localised or symmetry/energy prevents effective interaction. Its energy remains close to the parent AO. Lone pairs in many heteronuclear molecules are described as nonbonding MOs."
    ],
    "exam": "Nonbonding electrons contribute approximately zero to bond order; do not subtract them as antibonding."
  },
  {
    "number": 138,
    "title": "Formation of Molecular Orbitals",
    "part": 17,
    "paragraphs": [
      "When N atomic orbitals are combined, N molecular orbitals result. For two AOs, the simplest pair is one lower-energy bonding and one higher-energy antibonding MO. Energy splitting grows with interaction strength; heteronuclear coefficients shift bonding MOs toward the more electronegative/lower-energy AO and antibonding MOs toward the less electronegative/higher-energy AO."
    ],
    "exam": "Energy conservation is not ‘one goes down by exactly same amount as the other’ in every heteronuclear multi-orbital problem; the weighted centre and interactions matter.",
    "visual": "mo"
  },
  {
    "number": 139,
    "title": "Overlap Integral",
    "part": 17,
    "paragraphs": [
      "The overlap integral S = ∫φA*φB dτ quantifies spatial overlap of two normalised AOs. S = 0 for orthogonal/nonoverlapping functions; larger |S| usually increases interaction if symmetry and energy are favourable. Overlap alone is not the same as bond order or bond strength because Hamiltonian/energy terms also matter."
    ],
    "formula": "S_{AB}=\\int \\phi_A^*\\phi_B\\,d\\tau",
    "exam": "S is a mathematical overlap measure; it is not ‘percentage overlap’ unless a specific convention is defined."
  },
  {
    "number": 140,
    "title": "Angular Strength",
    "part": 17,
    "paragraphs": [
      "Angular strength describes how orbital orientation and angular lobes affect overlap along a chosen internuclear axis. Orbitals pointing directly toward one another usually give stronger σ overlap than sidewise π overlap, while nodes/sign changes can cancel interaction. For d orbitals, orientation determines whether σ, π or δ symmetry results."
    ],
    "bullets": [
      "Radial extent controls reach; angular part controls direction/symmetry.",
      "Both must be considered for qualitative MO/VBT overlap arguments."
    ],
    "exam": "Do not compare overlap from orbital labels alone without specifying orientation."
  },
  {
    "number": 141,
    "title": "σ, π and δ Molecular Orbitals",
    "part": 18,
    "paragraphs": [
      "Molecular orbitals are labelled σ, π or δ by symmetry about the internuclear axis. σ MOs have no nodal plane containing the axis; π have one; δ have two. Degenerate πx/πy pairs arise in linear molecules. δ MOs are especially relevant in transition-metal multiple bonds."
    ],
    "bullets": [
      "Asterisks denote antibonding counterparts.",
      "σ/π/δ symmetry is independent of whether an MO is bonding or antibonding."
    ],
    "visual": "mo"
  },
  {
    "number": 142,
    "title": "Gerade and Ungerade Molecular Orbitals",
    "part": 18,
    "paragraphs": [
      "For homonuclear diatomics with inversion symmetry, MOs are additionally labelled gerade (g) or ungerade (u). Inversion through the molecular centre either preserves (g) or changes (u) the wavefunction sign. Typical notation includes σg(1s), σu*(1s), πu(2p), πg*(2p)."
    ],
    "exam": "Heteronuclear diatomics such as CO and NO lack a centre of inversion, so g/u labels are not formally used."
  },
  {
    "number": 143,
    "title": "Bond Order in MOT",
    "part": 18,
    "paragraphs": [
      "MOT bond order is half the difference between electrons in bonding and antibonding MOs. Positive bond order indicates net bonding; larger bond order usually means shorter, stronger bonds within a related series. Fractional bond orders naturally arise in ions/radicals."
    ],
    "bullets": [
      "H₂: BO 1; He₂: BO 0.",
      "N₂: BO 3; O₂: BO 2; O₂⁺: 2.5; O₂⁻: 1.5; O₂²⁻: 1."
    ],
    "formula": "BO=\\frac{N_b-N_a}{2}",
    "exam": "Nonbonding electrons are excluded from Nb and Na."
  },
  {
    "number": 144,
    "title": "Magnetic Behaviour from MOT",
    "part": 18,
    "paragraphs": [
      "Magnetic behaviour follows unpaired-electron count in the MO configuration. Any unpaired electrons make a species paramagnetic; all paired electrons give diamagnetism. O₂ has two unpaired electrons in degenerate π* orbitals, a landmark success of MOT."
    ],
    "bullets": [
      "O₂, O₂⁺, O₂⁻ and B₂ are paramagnetic in their ground states.",
      "N₂, C₂, F₂ and O₂²⁻ are diamagnetic in the standard ground-state MO picture."
    ],
    "exam": "Do not infer magnetism from bond order alone; inspect orbital occupancy.",
    "visual": "mo"
  },
  {
    "number": 145,
    "title": "MO Diagrams of Homonuclear Diatomic Species",
    "part": 18,
    "paragraphs": [
      "Homonuclear diatomic MO diagrams combine equivalent AOs from identical atoms. Core 1s MOs often cancel in bond-order comparisons for second-row species, so valence diagrams focus on 2s/2p orbitals. The important ordering change occurs between B₂/C₂/N₂ and O₂/F₂ because s–p mixing is stronger in lighter species."
    ],
    "bullets": [
      "B₂–N₂ order: π(2p) below σ(2p) in the common valence diagram.",
      "O₂–F₂ order: σ(2p) below π(2p)."
    ],
    "exam": "Choose the correct ordering before filling electrons.",
    "visual": "mo"
  },
  {
    "number": 146,
    "title": "MO Diagrams of H₂, H₂⁺, He₂, He₂⁺, Li₂ and Be₂",
    "part": 18,
    "paragraphs": [
      "For H₂, two 1s electrons fill σ1s → BO 1, diamagnetic. H₂⁺ has one σ1s electron → BO 0.5, paramagnetic. He₂ would fill σ1s²σ*1s² → BO 0 (not stable as an ordinary ground-state molecule), while He₂⁺ has BO 0.5. Li₂ has valence σ2s² → BO 1; Be₂ has σ2s²σ*2s² → BO 0 in the simplest MO picture."
    ],
    "bullets": [
      "Ionisation from a bonding MO lowers BO by 0.5; ionisation from antibonding raises it by 0.5.",
      "Weak van der Waals/excited-state species are separate from simple ground-state bond-order predictions."
    ],
    "exam": "He₂⁺ can have net bonding even though neutral He₂ has BO 0 in the simple MO model.",
    "visual": "mo-h2"
  },
  {
    "number": 147,
    "title": "MO Diagrams of B₂, C₂ and N₂",
    "part": 18,
    "paragraphs": [
      "B₂, C₂ and N₂ use the lighter second-row ordering with π2p below σ2p because 2s–2p mixing is significant. B₂ places two electrons singly in degenerate π2p orbitals → BO 1 and paramagnetic. C₂ has π2p⁴ → BO 2, diamagnetic. N₂ adds σ2p² → BO 3, diamagnetic and very strongly bonded."
    ],
    "bullets": [
      "B₂ paramagnetism is a key Hund-rule/MO result.",
      "C₂’s bonding is not well represented by a naive ‘ordinary double bond’ picture alone; MO analysis gives BO 2 with unusual electron distribution."
    ],
    "exam": "Correct preserved trend: N₂ bond is shorter than N₂⁺ because N₂⁺ loses a bonding σ2p electron, BO 3 → 2.5.",
    "visual": "mo-bcn"
  },
  {
    "number": 148,
    "title": "MO Diagram of O₂ and Related Species",
    "part": 18,
    "paragraphs": [
      "O₂ uses the ordering σ2p below π2p; its two highest electrons occupy degenerate π*2p orbitals singly, giving BO 2 and paramagnetism. O₂⁺ removes one antibonding electron → BO 2.5; O₂⁻ adds one → BO 1.5; O₂²⁻ fills both π* pairs → BO 1 and diamagnetic."
    ],
    "bullets": [
      "Bond length: O₂⁺ < O₂ < O₂⁻ < O₂²⁻ in the simple BO trend.",
      "Magnetism: O₂⁺, O₂, O₂⁻ paramagnetic; peroxide O₂²⁻ diamagnetic."
    ],
    "exam": "This oxygen family is one of the highest-yield JEE MOT sets.",
    "visual": "mo-o2"
  },
  {
    "number": 149,
    "title": "MO Diagram of F₂ and Related Species",
    "part": 18,
    "paragraphs": [
      "F₂ has 14 valence electrons; after filling bonding and antibonding 2s/2p MOs, net bond order is 1 and all electrons are paired, so F₂ is diamagnetic. Related ions change bond order depending on whether the electron is removed from or added to a π* antibonding orbital."
    ],
    "exam": "F₂ has a single bond despite extensive MO occupancy because bonding and antibonding contributions largely cancel.",
    "visual": "mo-f2"
  },
  {
    "number": 150,
    "title": "s–p Mixing in Molecular Orbitals",
    "part": 18,
    "paragraphs": [
      "s–p mixing is interaction between σ MOs of the same symmetry derived mainly from ns and npz AOs. It is stronger when atomic ns and np energies are closer (B, C, N) and pushes the σ2p-like MO upward relative to π2p, producing the familiar π2p < σ2p order. In O₂/F₂ the 2s–2p energy gap is larger, mixing weakens and σ2p lies below π2p."
    ],
    "bullets": [
      "Only orbitals of same symmetry mix strongly; π2p does not mix with σ2s.",
      "Mixing causes level repulsion: interacting orbitals move farther apart."
    ],
    "exam": "Use s–p mixing to explain B₂ paramagnetism and the ordering switch across the second row."
  },
  {
    "number": 151,
    "title": "HOMO and LUMO",
    "part": 19,
    "paragraphs": [
      "HOMO is the highest occupied molecular orbital; LUMO is the lowest unoccupied molecular orbital. Their energies/symmetries govern frontier-orbital reactivity, electron donation/acceptance, photochemistry and redox behaviour. A small HOMO–LUMO gap generally means easier electronic excitation, though reactivity also depends on symmetry and environment."
    ],
    "bullets": [
      "Nucleophiles donate from a high-energy occupied orbital (often HOMO/lone pair).",
      "Electrophiles accept into a low-energy vacant orbital (often LUMO)."
    ],
    "exam": "HOMO/LUMO labels refer to a specific electron count and state; ionisation/reduction changes them."
  },
  {
    "number": 152,
    "title": "MO Diagrams of Heteronuclear Diatomic Species",
    "part": 19,
    "paragraphs": [
      "Heteronuclear diatomics combine AOs of unequal energies. The more electronegative atom has lower-energy valence AOs and contributes more to bonding MOs; the less electronegative atom contributes more to antibonding MOs. Symmetry remains important but g/u labels disappear because inversion no longer maps unlike nuclei onto equivalent centres."
    ],
    "bullets": [
      "MO coefficients are unequal.",
      "Large AO energy mismatch can leave nearly nonbonding orbitals localised on one atom."
    ],
    "exam": "Do not draw a heteronuclear MO diagram as perfectly symmetric in energy or coefficient size.",
    "visual": "mo-hetero"
  },
  {
    "number": 153,
    "title": "MO Diagram of CO",
    "part": 19,
    "paragraphs": [
      "CO has 10 valence electrons and is isoelectronic with N₂; its net bond order is near 3 and it is diamagnetic. The HOMO has strong carbon-centred σ lone-pair character, making carbon the principal σ donor to metals; low-lying π* LUMOs accept metal back-donation. This orbital distribution also helps rationalise CO’s small, unusual dipole direction."
    ],
    "bullets": [
      "CO binds metals through carbon in ordinary metal carbonyls.",
      "Strong σ donation + π backbonding makes CO a synergic ligand."
    ],
    "exam": "Do not place the donor lone pair primarily on oxygen simply because O is more electronegative.",
    "visual": "mo-co-no"
  },
  {
    "number": 154,
    "title": "MO Diagram of NO",
    "part": 19,
    "paragraphs": [
      "NO has 11 valence electrons: N contributes 5 and O contributes 6. Filling the valence MOs leaves one electron in a π* orbital, giving bond order approximately 2.5 and one unpaired electron, so NO is paramagnetic. The molecule is heteronuclear, so MO levels/coefficients are asymmetric."
    ],
    "bullets": [
      "NO⁺ removes the π* electron → BO ~3 and diamagnetic, isoelectronic with CO/N₂.",
      "NO⁻ adds another π* electron → lower BO and typically paramagnetic/triplet-related behaviour depending on state."
    ],
    "exam": "Critical correction: 15 is NO’s total electron count including core electrons; the valence-electron count used for valence MO filling is 11.",
    "visual": "mo-co-no"
  },
  {
    "number": 155,
    "title": "CO and N₂ as Ligands — MO View",
    "part": 19,
    "paragraphs": [
      "CO and N₂ are isoelectronic strong-field/π-acceptor ligands, but CO is much more common as a neutral ligand because its carbon-centred HOMO donates effectively and π* orbitals accept metal backbonding. N₂ can bind end-on and accept backbonding, which weakens N≡N and enables activation in nitrogen-fixation chemistry."
    ],
    "bullets": [
      "σ donation: ligand occupied orbital → metal.",
      "π back-donation: filled metal dπ → ligand π*; this lowers internal ligand bond order."
    ],
    "exam": "Backbonding lowers νCO and νNN while strengthening the metal–ligand bond.",
    "visual": "mo-ligand"
  },
  {
    "number": 156,
    "title": "Pseudohalides",
    "part": 19,
    "paragraphs": [
      "Pseudohalides are polyatomic anions that resemble halides in charge and reaction patterns, often forming acids, salts and covalent derivatives analogous to halogen chemistry. Examples include CN⁻, SCN⁻, OCN⁻, N₃⁻ and SeCN⁻. They frequently form insoluble silver salts and can act as ambidentate ligands."
    ],
    "bullets": [
      "SCN⁻ is singly charged, not 2−.",
      "Pseudohalide behaviour is functional analogy, not identical chemistry."
    ],
    "exam": "SCN⁻ has 16 valence electrons and net charge −1."
  },
  {
    "number": 157,
    "title": "Pseudohalogens",
    "part": 19,
    "paragraphs": [
      "Pseudohalogens are neutral molecular species analogous to halogens, often dimers or coupled forms of pseudohalide groups, such as (CN)₂ cyanogen and (SCN)₂ thiocyanogen. They can form pseudohalide ions on reduction and show halogen-like substitution/oxidation chemistry."
    ],
    "bullets": [
      "Pseudohalide = anion/group; pseudohalogen = neutral halogen-like molecule.",
      "Not every polyatomic anion qualifies; analogy in chemistry is required."
    ],
    "exam": "Distinguish CN⁻ (pseudohalide) from (CN)₂ (pseudohalogen)."
  },
  {
    "number": 158,
    "title": "Fajans’ Rule",
    "part": 20,
    "paragraphs": [
      "Fajans’ rule predicts covalent character in nominally ionic compounds from polarisation. A small, highly charged cation with high polarising power distorts the electron cloud of a large, highly charged/polarisable anion, increasing electron sharing and covalent character."
    ],
    "bullets": [
      "Polarising power ↑ with cation charge density.",
      "Polarisability ↑ with anion size and diffuse electron cloud.",
      "Pseudo-noble-gas d¹⁰ cations often polarise more than expected from size alone."
    ],
    "exam": "AgI is more covalent than AgF; LiI more covalent than LiF.",
    "visual": "fajans"
  },
  {
    "number": 159,
    "title": "Polarisation, Polarising Power and Polarisability",
    "part": 20,
    "paragraphs": [
      "Polarisation is distortion of an anion’s electron cloud by a neighbouring cation. Polarising power describes the cation’s ability to cause distortion; polarisability describes how easily the anion cloud is distorted. High charge and small radius increase cation field strength; large diffuse anions are most polarisable."
    ],
    "bullets": [
      "Cation: smaller/higher charge → stronger polariser.",
      "Anion: larger/higher charge/diffuse cloud → more polarisable."
    ],
    "formula": "polarising\\ power\\ roughly\\ increases\\ with\\ \\frac{z_+}{r_+^2}",
    "visual": "fajans"
  },
  {
    "number": 160,
    "title": "Factors Affecting Polarisation",
    "part": 20,
    "paragraphs": [
      "Polarisation increases with cation charge, decreasing cation radius, pseudo-inert-gas configurations, increasing anion charge and increasing anion size. For a fixed anion, Al³⁺ polarises more than Mg²⁺ > Na⁺. For a fixed cation, I⁻ is more polarisable than Br⁻ > Cl⁻ > F⁻."
    ],
    "bullets": [
      "High polarisation lowers the pure-ionic model’s accuracy.",
      "Covalent character often lowers melting point and changes solubility/thermal stability trends."
    ],
    "exam": "Compare LiCl vs CsCl: Li⁺ is smaller and more polarising, so LiCl has more covalent character."
  },
  {
    "number": 161,
    "title": "Applications of Fajans’ Rule",
    "part": 20,
    "paragraphs": [
      "Applications of Fajans’ rule include predicting relative covalent character, melting point, solubility in less-polar solvents, hydrolysis tendency, colour/polarisability effects and thermal decomposition patterns. More covalent halides often have lower melting points and greater volatility than highly ionic analogues, though lattice structure and molecular association must also be considered."
    ],
    "bullets": [
      "AlCl₃ is substantially covalent/molecular compared with ionic NaCl.",
      "BeCl₂ and LiI show stronger covalent character than simple charge-only intuition suggests."
    ],
    "exam": "Use Fajans as a qualitative trend rule, then check lattice/structure before predicting a bulk property absolutely."
  },
  {
    "number": 162,
    "title": "Covalent Character in Ionic Compounds",
    "part": 20,
    "paragraphs": [
      "Covalent character in ionic compounds is a continuum produced by partial electron sharing/polarisation. It increases when cation polarising power and anion polarisability are high. This modifies bond directionality, lattice type, melting point, electrical behaviour and solubility; no real compound is perfectly ionic in a strict quantum-mechanical sense."
    ],
    "bullets": [
      "High covalent character can favour molecular/dimeric structures such as Al₂Cl₆.",
      "Ionic character can be estimated by dipole/electronegativity models but depends on definition."
    ],
    "exam": "Avoid binary labels: compare relative ionic/covalent character."
  },
  {
    "number": 163,
    "title": "van der Waals Forces / Intermolecular Forces",
    "part": 21,
    "paragraphs": [
      "Intermolecular forces are attractions between molecules/particles arising from permanent charges, permanent dipoles, induced dipoles and dispersion. They are weaker per contact than ordinary covalent/ionic bonds but collectively determine boiling point, viscosity, surface tension, solubility and crystal packing. van der Waals forces usually refer to Keesom, Debye and London interactions, excluding full ionic and often hydrogen-bond interactions."
    ],
    "exam": "Do not call every intermolecular attraction ‘van der Waals’ when the question distinguishes hydrogen bonding or ion–dipole forces.",
    "visual": "imf"
  },
  {
    "number": 164,
    "title": "Dipole–Dipole Interaction / Keesom Forces",
    "part": 21,
    "paragraphs": [
      "Keesom forces are orientation-dependent attractions between permanent molecular dipoles. Thermal rotation partially averages them, so their effective strength decreases strongly with temperature and distance. More polar molecules generally show stronger dipole–dipole interactions when size/shape are comparable."
    ],
    "bullets": [
      "Requires permanent dipole moments.",
      "Alignment is statistical, not a rigid head-to-tail chain in a fluid."
    ],
    "exam": "HCl has dipole–dipole forces; Cl₂ does not, but Cl₂ still has London forces.",
    "visual": "imf"
  },
  {
    "number": 165,
    "title": "Dipole–Induced Dipole Interaction / Debye Forces",
    "part": 21,
    "paragraphs": [
      "Debye forces arise when a permanent dipole polarises a neighbouring nonpolar or less-polar molecule, inducing a dipole that is attracted to the original dipole. Strength grows with permanent dipole magnitude and polarisability of the induced partner."
    ],
    "bullets": [
      "Permanent dipole + induced dipole.",
      "Always attractive after induction/orientation averaging."
    ],
    "exam": "A polar molecule interacting with a noble-gas atom is a classic dipole–induced-dipole case.",
    "visual": "imf"
  },
  {
    "number": 166,
    "title": "London Dispersion Forces",
    "part": 21,
    "paragraphs": [
      "London dispersion forces arise from correlated instantaneous fluctuations in electron density that create transient dipoles and induced dipoles. They exist between all atoms and molecules, including nonpolar species, and grow with polarisability, electron count, contact surface and molecular shape. They can dominate in large heavy molecules."
    ],
    "bullets": [
      "I₂ has stronger dispersion than F₂ because its electron cloud is much more polarisable.",
      "Less-branched hydrocarbons often have higher boiling points than compact isomers due to larger contact surface."
    ],
    "exam": "Dispersion is not ‘weak only’: in large species it can be the dominant cohesive force.",
    "visual": "imf"
  },
  {
    "number": 167,
    "title": "Ion–Dipole Interaction",
    "part": 21,
    "paragraphs": [
      "Ion–dipole interactions occur between a full ionic charge and a permanent molecular dipole, central to hydration and solvation of ions. Water orients oxygen toward cations and hydrogens toward anions. Strength increases with ionic charge density and solvent dipole/ability to approach the ion."
    ],
    "bullets": [
      "Explains hydration shells around Na⁺, Mg²⁺, Cl⁻ etc.",
      "Small highly charged ions have very large hydration enthalpies."
    ],
    "exam": "Ion–dipole interactions help overcome lattice energy during dissolution.",
    "visual": "imf"
  },
  {
    "number": 168,
    "title": "Ion–Induced Dipole Interaction",
    "part": 21,
    "paragraphs": [
      "Ion–induced dipole interactions occur when an ion distorts a nearby neutral polarisable species, inducing a dipole. Strength increases with ion charge density and neutral-species polarisability. This interaction connects intermolecular-force language with Fajans-type polarisation ideas."
    ],
    "exam": "A cation near a nonpolar I₂ molecule can induce a dipole even though I₂ has no permanent dipole.",
    "visual": "imf"
  },
  {
    "number": 169,
    "title": "Relative Strength of Intermolecular Forces",
    "part": 21,
    "paragraphs": [
      "A rough strength hierarchy for similarly sized particles is ion–ion > ion–dipole > strong hydrogen bond > dipole–dipole > dipole-induced dipole, while London dispersion varies enormously and can exceed permanent-dipole interactions in large polarisable species. Therefore no universal fixed ranking applies without considering size, charge, distance and geometry."
    ],
    "bullets": [
      "Compare like with like; collective dispersion in heavy molecules is substantial.",
      "Hydrogen bonding is directional and chemically specific, not just ‘strong dipole–dipole’."
    ],
    "exam": "When ranking boiling points, combine interaction type with molecular size/polarisability and shape."
  },
  {
    "number": 170,
    "title": "Clathrates and Clathrate Hydrates",
    "part": 21,
    "paragraphs": [
      "Clathrates are host–guest inclusion solids in which a cage-like host lattice physically traps guest molecules without ordinary covalent bonding to them. Clathrate hydrates use hydrogen-bonded water cages around gases such as CH₄, CO₂ or noble gases. Stability depends on cage size, pressure and temperature."
    ],
    "bullets": [
      "Guest occupancy stabilises the otherwise open host framework.",
      "Methane hydrates are important in marine sediments and energy/climate discussions."
    ],
    "exam": "Clathrates are inclusion compounds; the guest is not usually chemically bonded to the cage.",
    "visual": "imf"
  },
  {
    "number": 171,
    "title": "Fullerenes",
    "part": 22,
    "paragraphs": [
      "Fullerenes are closed carbon cages composed mainly of pentagons and hexagons; C₆₀ is a truncated-icosahedral ‘soccer-ball’ cage with 12 pentagons and 20 hexagons. Carbon atoms are approximately sp²-like but curvature mixes σ/π character. Delocalised π electrons give distinctive redox and electronic properties."
    ],
    "bullets": [
      "C₆₀ has two types of C–C bonds because not all ring junctions are equivalent.",
      "Fullerenes can accept electrons and form endohedral/exohedral derivatives."
    ],
    "exam": "Do not draw C₆₀ as flat graphite; curvature is forced by pentagons.",
    "visual": "carbon"
  },
  {
    "number": 172,
    "title": "Allotropes of Carbon",
    "part": 22,
    "paragraphs": [
      "Major carbon allotropes differ by bonding/network dimensionality. Diamond is a 3-D tetrahedral sp³ covalent network: very hard, insulating (large band gap), high thermal conductivity. Graphite consists of sp² hexagonal sheets with delocalised π electrons, strong in-plane bonds and weak interlayer forces, making it conductive and lubricating. Fullerenes are finite molecular cages with curved sp²-like networks."
    ],
    "bullets": [
      "Diamond: each C bonded to 4 C.",
      "Graphite: each C σ-bonded to 3 C; one p electron participates in π bands.",
      "Fullerenes: molecular cages; properties differ from extended graphite."
    ],
    "exam": "Graphite conducts mainly within layers; diamond lacks mobile valence electrons in its filled bonding network.",
    "visual": "carbon"
  },
  {
    "number": 173,
    "title": "Dangling Bonds",
    "part": 22,
    "paragraphs": [
      "A dangling bond is an unsatisfied valence at a surface, edge, defect or under-coordinated atom where the bulk bonding network is interrupted. Dangling bonds create localised electronic states, increase surface reactivity and strongly affect semiconductor surfaces, graphene edges and nanomaterials."
    ],
    "bullets": [
      "Surface passivation terminates dangling bonds, e.g. with H or O-containing groups.",
      "They are not ordinary lone pairs; they arise from broken/incomplete network coordination."
    ],
    "exam": "Dangling-bond density often controls surface chemical reactivity.",
    "visual": "carbon"
  },
  {
    "number": 174,
    "title": "Melting Point of Ionic Compounds",
    "part": 22,
    "paragraphs": [
      "Melting an ionic solid requires enough thermal energy to disrupt its ordered lattice into a mobile liquid while retaining ions. Melting point therefore tends to rise with lattice-energy magnitude, but entropy of fusion, crystal structure, polarisation/covalency and packing can change the order. Very covalent ‘ionic’ halides may melt unusually low or sublime/molecularise."
    ],
    "bullets": [
      "Higher charge/smaller ions often increase mp through stronger lattice interactions.",
      "Greater covalent character can lower mp by reducing extended ionic-lattice character."
    ],
    "exam": "Do not equate lattice energy and melting point quantitatively; they correlate imperfectly."
  },
  {
    "number": 175,
    "title": "Factors Affecting Melting Point of Ionic Compounds",
    "part": 22,
    "paragraphs": [
      "Factors affecting ionic melting point include charge product, ionic radii, coordination/lattice structure, polarisation/covalent character, lattice defects and entropy change on melting. MgO melts far above NaCl largely because 2+/2− electrostatics are stronger; AlCl₃ is much lower-melting/volatile because of strong covalent molecular/dimeric character."
    ],
    "bullets": [
      "Lattice energy gives a major energetic trend.",
      "Structure/entropy explain exceptions."
    ],
    "exam": "Use Fajans’ rule together with lattice-energy reasoning for anomalous halide trends."
  },
  {
    "number": 176,
    "title": "Solubility of Ionic Compounds",
    "part": 22,
    "paragraphs": [
      "Solubility of an ionic solid is controlled by the free-energy change for dissolution, not by lattice energy alone. Breaking the lattice is endothermic (using dissociation convention); hydration/solvation is exothermic; entropy may favour or oppose dissolution depending on ordering of solvent and ions. A salt dissolves spontaneously when ΔGsoln < 0."
    ],
    "bullets": [
      "Large lattice energy can be offset by very large hydration energy for small/high-charge ions.",
      "Common-ion effects and equilibria control sparingly soluble salts beyond simple energy comparisons."
    ],
    "formula": "\\Delta G_{soln}=\\Delta H_{soln}-T\\Delta S_{soln}",
    "exam": "‘Like dissolves like’ is too crude for ionic-solubility trends."
  },
  {
    "number": 177,
    "title": "Lattice Energy vs Hydration Energy",
    "part": 22,
    "paragraphs": [
      "Lattice energy resists separation of ions; hydration energy stabilises separated aqueous ions. Both increase in magnitude for smaller, more highly charged ions, so trends can partially cancel. Solubility depends on their difference plus entropy. For some salts, a very strong lattice wins; for others, hydration is dominant."
    ],
    "bullets": [
      "Hydration enthalpy is more negative for high charge density ions.",
      "A large exothermic hydration enthalpy does not guarantee high solubility if lattice enthalpy is even larger."
    ],
    "exam": "Correct perchlorate trend: KClO₄, RbClO₄ and CsClO₄ are sparingly soluble; do not claim solubility simply increases down the alkali-metal group without checking the anion-specific balance."
  },
  {
    "number": 178,
    "title": "Thermodynamic Factors Governing Ionic Solubility",
    "part": 22,
    "paragraphs": [
      "Thermodynamic ionic solubility is governed by ΔG of dissolution. Enthalpy includes lattice dissociation and solvation/hydration; entropy includes crystal disorder gain and solvent ordering around ions. Temperature dependence follows how ΔH and ΔS change, so some salts become more soluble with temperature while others do not."
    ],
    "bullets": [
      "Spontaneous dissolution requires ΔG < 0, not necessarily ΔH < 0.",
      "Hydrophobic/structured-solvent effects can make ΔS non-intuitive."
    ],
    "formula": "\\Delta H_{soln}\\approx U_{lattice(diss)}+\\sum\\Delta H_{hydration}",
    "exam": "Use a full thermodynamic cycle for difficult solubility questions rather than one-factor slogans."
  },
  {
    "number": 179,
    "title": "Silicates",
    "part": 23,
    "paragraphs": [
      "Silicates are built primarily from SiO₄ tetrahedra: Si at the centre, four O at corners. Tetrahedra polymerise by sharing corner oxygens; they generally do not share edges/faces in the simplest structural classification because Si⁴⁺ centres would approach too closely. The number of shared oxygens controls Si:O ratio and dimensionality."
    ],
    "bullets": [
      "No sharing → isolated orthosilicate units.",
      "Increasing corner sharing produces dimers, rings, chains, sheets and 3-D frameworks."
    ],
    "exam": "Silicate classification is a connectivity problem: count shared corner oxygens per tetrahedron.",
    "visual": "silicate"
  },
  {
    "number": 180,
    "title": "Classification of Silicates",
    "part": 23,
    "paragraphs": [
      "Silicates are classified by how SiO₄ tetrahedra share corners: nesosilicates (isolated), sorosilicates (pairs), cyclosilicates (rings), inosilicates (single/double chains), phyllosilicates (sheets) and tectosilicates (3-D frameworks). Aluminosilicates replace some Si⁴⁺ by Al³⁺ and require charge-balancing cations."
    ],
    "exam": "Memorise the structural progression, then derive formulas from oxygen sharing rather than rote-learning every composition.",
    "visual": "silicate"
  },
  {
    "number": 181,
    "title": "Orthosilicates / Nesosilicates",
    "part": 23,
    "paragraphs": [
      "Orthosilicates/nesosilicates contain isolated [SiO₄]⁴⁻ tetrahedra with no shared oxygen corners, giving Si:O = 1:4. Cations occupy spaces between tetrahedra. Examples include olivine-type minerals such as Mg₂SiO₄ and zircon ZrSiO₄."
    ],
    "bullets": [
      "Shared O per tetrahedron = 0.",
      "Basic anionic unit = [SiO₄]⁴⁻."
    ],
    "exam": "Orthosilicate is the least polymerised silicate class.",
    "visual": "silicate"
  },
  {
    "number": 182,
    "title": "Pyrosilicates / Sorosilicates",
    "part": 23,
    "paragraphs": [
      "Pyrosilicates/sorosilicates contain two SiO₄ tetrahedra sharing one corner oxygen, giving [Si₂O₇]⁶⁻ and Si:O = 2:7. The shared oxygen belongs to both tetrahedra, reducing total oxygen count by one relative to two isolated units."
    ],
    "bullets": [
      "One shared corner per dimer.",
      "Derive: 2×4 − 1 shared duplicate = 7 O."
    ],
    "exam": "Pyro-/soro- means paired tetrahedra, not an infinite chain.",
    "visual": "silicate"
  },
  {
    "number": 183,
    "title": "Cyclic / Ring Silicates",
    "part": 23,
    "paragraphs": [
      "Cyclic/ring silicates (cyclosilicates) form closed rings of corner-sharing tetrahedra, commonly [Si₃O₉]⁶⁻ or [Si₆O₁₈]¹²⁻. Each tetrahedron shares two oxygens, so the empirical Si:O ratio is 1:3. Beryl contains six-membered silicate rings in a more complex framework with Be/Al."
    ],
    "bullets": [
      "Shared O per tetrahedron = 2.",
      "General ring unit often written [SiₙO₃ₙ]²ⁿ⁻."
    ],
    "exam": "Ring and single-chain silicates share Si:O = 1:3 but differ in topology.",
    "visual": "silicate"
  },
  {
    "number": 184,
    "title": "Chain Silicates / Pyroxenes",
    "part": 23,
    "paragraphs": [
      "Single-chain silicates/pyroxenes consist of infinite chains where each SiO₄ tetrahedron shares two corners with neighbours. The repeat composition is (SiO₃)ₙ²ⁿ⁻ (Si:O = 1:3). Pyroxenes such as MgSiO₃ and CaMgSi₂O₆ are representative."
    ],
    "bullets": [
      "Two shared O per tetrahedron.",
      "Chain topology, not only formula ratio, distinguishes them from ring silicates."
    ],
    "exam": "Common repeat: [SiO₃]ₙ²ⁿ⁻.",
    "visual": "silicate"
  },
  {
    "number": 185,
    "title": "Double-Chain Silicates / Amphiboles",
    "part": 23,
    "paragraphs": [
      "Double-chain silicates/amphiboles link two single chains by additional shared oxygens. Some tetrahedra share two and others three corners, giving an average Si:O ratio of 4:11 and common repeat [Si₄O₁₁]ₙ⁶ⁿ⁻. Amphibole minerals such as tremolite/asbestos-family structures illustrate this class."
    ],
    "bullets": [
      "Average shared corners > single chain but < sheet.",
      "Characteristic ratio Si₄O₁₁."
    ],
    "exam": "Distinguish pyroxene single-chain SiO₃ from amphibole double-chain Si₄O₁₁.",
    "visual": "silicate"
  },
  {
    "number": 186,
    "title": "Sheet / Phyllosilicates",
    "part": 23,
    "paragraphs": [
      "Sheet/phyllosilicates form 2-D layers in which each tetrahedron shares three corner oxygens. The ideal tetrahedral sheet has Si:O = 2:5, commonly represented (Si₂O₅)ₙ²ⁿ⁻ before incorporating octahedral metal-hydroxide layers. Micas, talc and clays are major examples."
    ],
    "bullets": [
      "Three shared O per tetrahedron.",
      "Strong covalent sheets + weaker interlayer interactions produce cleavage and layered properties."
    ],
    "exam": "Sheet silicate repeat ratio: Si₂O₅.",
    "visual": "silicate"
  },
  {
    "number": 187,
    "title": "Three-Dimensional / Tectosilicates",
    "part": 23,
    "paragraphs": [
      "Three-dimensional/tectosilicates share all four oxygens of each SiO₄ tetrahedron, producing a neutral SiO₂ framework when only Si is present. Quartz and related silica polymorphs are 3-D frameworks. Replacing Si by Al introduces negative framework charge that must be balanced by extra-framework cations."
    ],
    "bullets": [
      "Four shared O per tetrahedron.",
      "Effective Si:O = 1:2 because every O is shared by two tetrahedra."
    ],
    "exam": "Quartz is a giant covalent network, not discrete SiO₂ molecules.",
    "visual": "silicate"
  },
  {
    "number": 188,
    "title": "Aluminosilicates and Zeolites",
    "part": 23,
    "paragraphs": [
      "Aluminosilicates form when AlO₄ tetrahedra substitute for SiO₄ in a framework. Because Al³⁺ replaces Si⁴⁺, each substitution introduces one negative charge balanced by Na⁺, K⁺, Ca²⁺ or other cations. Zeolites are porous crystalline aluminosilicates with channels/cages that exchange cations and host water/guest molecules."
    ],
    "bullets": [
      "Zeolites: molecular sieves, ion exchangers and shape-selective catalysts.",
      "Pore size/topology controls which guests can enter."
    ],
    "exam": "Framework Al creates negative charge; charge-balancing cations are mobile/exchangeable.",
    "visual": "silicate"
  },
  {
    "number": 189,
    "title": "Uses of Silicates",
    "part": 23,
    "paragraphs": [
      "Silicates dominate rocks, ceramics, glass, cement and many functional materials. Quartz/silica is used in glass and electronics; clays in ceramics/adsorbents; zeolites in water softening, detergents, gas separation and petroleum catalysis; asbestos-like fibres have historical heat-resistant uses but severe health hazards. Structure determines mechanical, ion-exchange and adsorption properties."
    ],
    "bullets": [
      "3-D networks → hardness/thermal stability.",
      "Layered silicates → cleavage, swelling and adsorption.",
      "Zeolite pores → molecular sieving and catalytic selectivity."
    ],
    "exam": "Connect each use to structure rather than memorising an isolated list.",
    "visual": "silicate"
  }
];

export function topicsForPart(part: number) { return chemicalBondingTopics.filter((topic) => topic.part === part); }
