// lib/masterSyllabus/inorganic.ts
import { Chapter } from "./types";

export const inorganic: Chapter[] = [
  {
    id: "periodic-table",
    title: "Classification of Elements and Periodicity in Properties",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 2,
    estimatedHours: 8,
    prerequisites: ["atomic-structure"],
    searchKeywords: ["periodic table", "atomic radius", "ionization enthalpy", "electron gain enthalpy", "electronegativity"],
    ncert: { class: 11, unit: "3", chapter: "Classification of Elements and Periodicity in Properties" },
    pyqTags: ["ionization energy order", "electron gain enthalpy", "atomic radii variation"],
    concepts: [
      {
        id: "periodic-trends",
        title: "Periodic Trends in Properties of Elements",
        description: "Variation of atomic radius, ionic radius, ionization enthalpy, electron gain enthalpy, and electronegativity along periods and down groups.",
        keywords: ["atomic radius", "ionization enthalpy", "electronegativity"],
        formulas: [
          {
            id: "f-electronegativity",
            title: "Electronegativity Scales (Pauling)",
            expression: "xA - xB = 0.108 * sqrt(E_(A-B) - sqrt(E_(A-A) * E_(B-B)))",
            description: "Calculation of electronegativity difference."
          }
        ]
      }
    ]
  },
  {
    id: "chemical-bonding",
    title: "Chemical Bonding and Molecular Structure",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    estimatedHours: 18,
    prerequisites: ["atomic-structure", "periodic-table"],
    searchKeywords: ["lewis", "vespr", "hybridization", "molecular orbital theory", "dipole moment", "hydrogen bonding"],
    ncert: { class: 11, unit: "4", chapter: "Chemical Bonding and Molecular Structure" },
    pyqTags: ["hybridization state", "MOT bond order", "dipole moment comparison", "hydrogen bonding", "bent rule"],
    concepts: [
      {
        id: "vespr-theory",
        title: "VSEPR Theory and Shapes of Molecules",
        description: "Lewis structures, formal charge, VSEPR theory, and predicting shapes of simple polyatomic molecules.",
        keywords: ["vespr", "geometry", "lone pair", "bond angle"]
      },
      {
        id: "hybridization",
        title: "Hybridization and Valence Bond Theory",
        description: "Concept of hybridization involving s, p, and d orbitals, shapes of molecules like PCl5, SF6.",
        keywords: ["hybridization", "sp3d", "sp3d2", "pi bond"]
      },
      {
        id: "mot",
        title: "Molecular Orbital Theory (MOT)",
        description: "Formation of molecular orbitals, bond order, magnetic properties of homonuclear diatomic species.",
        keywords: ["mot", "bond order", "paramagnetic", "diamagnetic"],
        formulas: [
          {
            id: "f-bond-order",
            title: "Bond Order (MOT)",
            expression: "Bond Order = (N_b - N_a) / 2",
            description: "Stability and bond strength indicator where Nb is bonding and Na is antibonding electrons."
          }
        ]
      },
      {
        id: "dipole-moment",
        title: "Dipole Moment and Hydrogen Bonding",
        description: "Polarity of bonds, dipole moment calculations, and inter/intra-molecular hydrogen bonding.",
        keywords: ["dipole moment", "hydrogen bond", "polar molecule"]
      }
    ]
  },
  {
    id: "coordination-compounds",
    title: "Coordination Compounds",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 4,
    estimatedHours: 16,
    prerequisites: ["chemical-bonding", "d-block-elements"],
    searchKeywords: ["coordination", "ligand", "isomerism", "valence bond theory", "crystal field theory", "cft", "synergic bonding"],
    ncert: { class: 12, unit: "5", chapter: "Coordination Compounds" },
    pyqTags: ["IUPAC nomenclature", "CFT splitting", "magnetic moment", "isomerism in coordination", "synergic bonding"],
    concepts: [
      {
        id: "coordination-basics",
        title: "Introduction to Coordination Compounds",
        description: "Werner's theory, ligands, coordination number, denticity, IUPAC nomenclature.",
        keywords: ["ligand", "denticity", "iupac nomenclature", "coordination number"]
      },
      {
        id: "isomerism-coordination",
        title: "Isomerism in Coordination Compounds",
        description: "Geometric and optical isomerism in square planar and octahedral complexes.",
        keywords: ["optical isomerism", "geometrical isomerism", "fac mer isomerism"]
      },
      {
        id: "bonding-theories-coordination",
        title: "Theories of Coordination Compounds",
        description: "Valence Bond Theory (VBT) and Crystal Field Theory (CFT) in octahedral and tetrahedral complexes.",
        keywords: ["vbt", "cft", "crystal field splitting", "pairing energy", "magnetic moment"],
        formulas: [
          {
            id: "f-spin-only",
            title: "Spin-Only Magnetic Moment",
            expression: "μ = sqrt(n * (n + 2)) BM",
            description: "Calculates magnetic moment from number of unpaired electrons 'n'."
          }
        ]
      },
      {
        id: "organometallics",
        title: "Organometallic Compounds and Bonding",
        description: "Metal carbonyls and synergic bonding.",
        keywords: ["metal carbonyls", "synergic bonding"]
      }
    ]
  },
  {
    id: "p-block-elements",
    title: "p-Block Elements",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    estimatedHours: 14,
    prerequisites: ["periodic-table", "chemical-bonding"],
    searchKeywords: ["boron family", "carbon family", "nitrogen family", "oxygen family", "halogens", "noble gases", "borax", "silicates"],
    ncert: { class: 11, unit: "11", chapter: "The p-Block Elements" },
    pyqTags: ["boric acid structure", "interhalogen compounds", "xenon fluorides", "allotropes of carbon", "oxoacids of phosphorus"],
    concepts: [
      {
        id: "group-13-14",
        title: "Groups 13 and 14 (Boron and Carbon Family)",
        description: "Electronic configuration, anomalous properties, allotropes, structures of diborane, boric acid, silicones.",
        keywords: ["diborane", "borax bead test", "silicones", "inert pair effect"]
      },
      {
        id: "group-15-16",
        title: "Groups 15, 16, and 17 (Nitrogen, Oxygen, and Halogen Family)",
        description: "Oxoacids of nitrogen/phosphorus, allotropes of sulfur, interhalogen compounds, anomalous behavior of fluorine.",
        keywords: ["oxoacids", "halogens", "ozone", "ammonia contact process"]
      },
      {
        id: "group-18",
        title: "Group 18 Elements (Noble Gases)",
        description: "Noble gases, occurrences, and preparation/structures of xenon fluorides (XeF2, XeF4, XeF6).",
        keywords: ["xenon fluorides", "clathrates", "noble gases"]
      }
    ]
  },
  {
    id: "d-and-f-block-elements",
    title: "d- and f-Block Elements",
    category: "inorganic",
    exams: ["neet", "jeeMain", "jeeAdvanced"],
    difficulty: 3,
    estimatedHours: 12,
    prerequisites: ["atomic-structure", "periodic-table"],
    searchKeywords: ["transition metals", "lanthanoids", "actinoids", "kmno4", "k2cr2o7"],
    ncert: { class: 12, unit: "4", chapter: "The d- and f-Block Elements" },
    pyqTags: ["KMnO4 reactions", "K2Cr2O7 preparation", "lanthanoid contraction", "magnetic properties transition metals"],
    concepts: [
      {
        id: "transition-metals",
        title: "General Properties of Transition Elements (d-Block)",
        description: "Variation in atomic/ionic sizes, oxidation states, magnetic properties, interstitial compounds, alloy formation.",
        keywords: ["transition elements", "variable oxidation state", "mno4- ion", "cr2o72- ion"]
      },
      {
        id: "inner-transition-metals",
        title: "Inner Transition Elements (f-Block)",
        description: "Lanthanoids and actinoids, oxidation states, chemical reactivity, and lanthanoid contraction.",
        keywords: ["lanthanoids", "actinoids", "lanthanoid contraction"]
      }
    ]
  },
  {
    id: "hydrogen",
    title: "Hydrogen",
    category: "inorganic",
    exams: ["neet", "jeeMain"],
    difficulty: 2,
    estimatedHours: 6,
    prerequisites: ["atomic-structure", "chemical-bonding"],
    searchKeywords: ["hydrogen", "water", "hydrogen peroxide", "hydrides"],
    ncert: { class: 11, unit: "9", chapter: "Hydrogen" },
    pyqTags: ["hydrides classification", "hydrogen peroxide structure", "water hardness"],
    concepts: [
      {
        id: "hydrides",
        title: "Hydrides and Water",
        description: "Ionic, covalent, and interstitial hydrides; physical/chemical properties of water, heavy water.",
        keywords: ["saline hydride", "interstitial hydride", "heavy water"]
      },
      {
        id: "h2o2",
        title: "Hydrogen Peroxide",
        description: "Preparation, reactions, structure, and uses of hydrogen peroxide.",
        keywords: ["h2o2 structure", "volume strength", "bleaching agent"]
      }
    ]
  },
  {
    id: "s-block-elements",
    title: "s-Block Elements (Alkali and Alkaline Earth Metals)",
    category: "inorganic",
    exams: ["neet", "jeeMain"],
    difficulty: 2,
    estimatedHours: 10,
    prerequisites: ["periodic-table", "atomic-structure"],
    searchKeywords: ["alkali metals", "alkaline earth metals", "biological importance", "solvay process"],
    ncert: { class: 11, unit: "8", chapter: "The s-Block Elements" },
    pyqTags: ["diagonal relationship", "s-block flame test", "biological role of Na and K", "thermal stability carbonates"],
    concepts: [
      {
        id: "alkali-metals",
        title: "Group 1 Elements: Alkali Metals",
        description: "Electronic configuration, trends in properties, anomalous properties of lithium, solutions in liquid ammonia.",
        keywords: ["alkali metals", "liquid ammonia solution", "superoxides"]
      },
      {
        id: "alkaline-earth",
        title: "Group 2 Elements: Alkaline Earth Metals",
        description: "Electronic configuration, trends, anomalous behavior of beryllium, solubility and thermal stability of oxosalts.",
        keywords: ["alkaline earth metals", "gypsum", "plaster of paris", "solvay process"]
      }
    ]
  }
];