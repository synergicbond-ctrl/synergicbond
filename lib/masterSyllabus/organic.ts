type OrganicMechanism = {
  name: string;
  steps: string[];
  description: string;
};

export const organic = [
  {
    id: "haloalkanes-haloarenes",
    title: "Haloalkanes and Haloarenes",
    category: "organic",
    difficulty: 4,
    estimatedHours: 7,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["SN1", "SN2", "Elimination", "Grignard", "Nucleophilicity"],
    concepts: [
      {
        id: "sn2-mechanism",
        title: "SN2 Mechanism",
        description: "Bimolecular concerted mechanism, back-side attack, Walden inversion, reactivity order: CH₃X > 1° > 2° > 3°.",
        animations: ["Walden inversion stereochemical flip."]
      },
      {
        id: "sn1-mechanism",
        title: "SN1 Mechanism",
        description: "Carbocation intermediate, protic solvent stabilization, racemization, reactivity order: 3° > 2° > 1°.",
        animations: ["Carbocation planarity and racemic product formation."]
      },
      {
        id: "elimination",
        title: "Elimination Reactions (E1 and E2)",
        description: "Zaitsev's rule, Hofmann's rule, E2 anti-periplanar requirement, competition between SN and E.",
        animations: ["Anti-periplanar arrangement in E2."]
      }
    ]
  },

  {
    id: "goc",
    title: "General Organic Chemistry (GOC)",
    category: "organic",
    difficulty: 4,
    estimatedHours: 10,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Inductive effect", "Resonance", "Hyperconjugation", "Acidity order", "Carbocation stability", "Reaction intermediates"],
    concepts: [
      {
        id: "electronic-effects",
        title: "Electronic Effects: Inductive and Electromeric",
        description: "Inductive effect along sigma bonds, +I and −I groups, permanent and temporary effects, electromeric effect in pi systems.",
        animations: ["Electron density shift through sigma framework."]
      },
      {
        id: "resonance",
        title: "Resonance and Mesomeric Effect",
        description: "Resonance structures, resonance energy, conditions for resonance, +M and −M groups, stability of resonating structures.",
        animations: ["Electron delocalization in benzene ring."]
      },
      {
        id: "hyperconjugation",
        title: "Hyperconjugation",
        description: "Conjugation of C−H sigma bond with adjacent pi system or empty orbital, stabilization of carbocations and alkenes.",
        animations: ["C−H sigma electrons overlapping with empty p orbital."]
      },
      {
        id: "reaction-intermediates",
        title: "Reaction Intermediates",
        description: "Carbocations (stability: 3° > 2° > 1°), carbanions (stability: 1° > 2° > 3°), free radicals, carbenes.",
        animations: ["Relative energy levels of carbocation types."]
      }
    ]
  },

  {
    id: "aldehydes-ketones",
    title: "Aldehydes, Ketones and Carboxylic Acids",
    category: "organic",
    difficulty: 4,
    estimatedHours: 10,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Nucleophilic addition", "Aldol condensation", "Cannizzaro reaction", "Clemmensen", "Acidity of carboxylic acids"],
    concepts: [
      {
        id: "nucleophilic-addition",
        title: "Nucleophilic Addition to Carbonyl",
        description: "Mechanism of nucleophilic addition to aldehyde/ketone. Reactions with HCN, NH₂OH, hydrazine, Grignard reagents.",
        animations: ["Nucleophile attacking electrophilic carbonyl carbon."]
      },
      {
        id: "aldol-condensation",
        title: "Aldol Condensation and Cannizzaro Reaction",
        description: "Aldol addition and dehydration, cross-aldol, Cannizzaro reaction of aldehydes without alpha-H.",
        animations: ["Enolate formation and aldol product cyclization."]
      },
      {
        id: "oxidation-reduction",
        title: "Oxidation-Reduction of Carbonyls",
        description: "Clemmensen (Zn/Hg, HCl), Wolff-Kishner (NH₂NH₂, KOH), Tollens' and Fehling's tests for aldehydes.",
        animations: ["Tollens' test: silver mirror formation."]
      },
      {
        id: "carboxylic-acids",
        title: "Carboxylic Acids and Derivatives",
        description: "Acidity factors (inductive, resonance), reactions of carboxylic acids, formation of acid chlorides, anhydrides, esters, amides.",
        animations: ["Resonance stabilization of carboxylate anion."]
      }
    ]
  },

  {
    id: "alcohols-phenols-ethers",
    title: "Alcohols, Phenols and Ethers",
    category: "organic",
    difficulty: 3,
    estimatedHours: 8,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Lucas test", "Esterification", "Williamson synthesis", "Acidity of phenol", "Kolbe reaction"],
    concepts: [
      {
        id: "alcohol-reactions",
        title: "Properties and Reactions of Alcohols",
        description: "Acidity order, Lucas test (ZnCl₂/HCl), esterification, dehydration, oxidation with PCC, K₂Cr₂O₇, reaction with sodium.",
        animations: ["Lucas test: turbidity in different alcohol types."]
      },
      {
        id: "phenol-reactions",
        title: "Phenol: Acidity and Reactions",
        description: "Phenol is more acidic than alcohol due to resonance stabilization of phenoxide. Electrophilic substitution: nitration, bromination. Kolbe reaction (sodium salicylate), Reimer-Tiemann reaction.",
        animations: ["Phenoxide resonance showing charge delocalization."]
      },
      {
        id: "ether-synthesis",
        title: "Ethers: Williamson Synthesis",
        description: "Williamson synthesis (R−O⁻ + R'−X → R−O−R'), properties of ethers, cleavage with HI.",
        animations: ["SN2 mechanism in Williamson ether synthesis."]
      }
    ]
  },

  {
    id: "amines",
    title: "Amines",
    category: "organic",
    difficulty: 3,
    estimatedHours: 7,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Basicity of amines", "Diazonium salts", "Coupling reaction", "Gabriel synthesis", "Hofmann degradation"],
    concepts: [
      {
        id: "basicity-amines",
        title: "Basicity of Amines",
        description: "Basicity order: aliphatic > NH₃ > aniline. Effect of electron-donating/withdrawing groups on basicity of aromatic amines.",
        animations: ["Lone pair donation of amine to proton."]
      },
      {
        id: "amine-reactions",
        title: "Reactions of Amines",
        description: "Acylation, benzoylation, reaction with nitrous acid (primary, secondary, tertiary), carbylamine reaction (isocyanide test), Gabriel synthesis, Hofmann degradation.",
        animations: ["Carbylamine reaction with CHCl₃ and KOH."]
      },
      {
        id: "diazonium-salts",
        title: "Diazonium Salts and Coupling Reactions",
        description: "Formation of aryl diazonium salts, Sandmeyer reactions (Cl, Br, CN, OH replacement), azo coupling to form dyes.",
        animations: ["Diazonium coupling with phenol to form azo dye."]
      }
    ]
  }
  ,
  // ── Added from verified JEE Main (NTA) + JEE Advanced 2026 syllabus PDFs. ──
  {
    id: "hydrocarbons",
    title: "Hydrocarbons",
    category: "organic",
    difficulty: 4,
    estimatedHours: 12,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Markownikoff Rule", "Peroxide Effect", "Ozonolysis", "Friedel-Crafts", "Newman Projections", "Electrophilic Substitution"],
    concepts: [
      {
        id: "alkanes",
        title: "Alkanes",
        description: "Homologous series and physical properties; conformations of ethane and butane (Newman projections); preparation from alkyl halides and carboxylic acids; combustion, halogenation (including allylic/benzylic) and oxidation; mechanism of halogenation."
      },
      {
        id: "alkenes",
        title: "Alkenes",
        description: "Geometrical isomerism; preparation by elimination; electrophilic addition with X₂, HX, HOX and water (Markownikoff and peroxide effect); acid-catalysed hydration; reactions with KMnO₄ and ozone (ozonolysis); reduction; polymerization."
      },
      {
        id: "alkynes",
        title: "Alkynes",
        description: "Acidic character and metal acetylides; addition of hydrogen, halogens, water and hydrogen halides; reduction; cyclic polymerization."
      },
      {
        id: "aromatic-hydrocarbons",
        title: "Aromatic Hydrocarbons (Benzene)",
        description: "Structure and aromaticity; mechanism of electrophilic substitution: halogenation, nitration, sulphonation, Friedel-Crafts alkylation and acylation; directive influence of substituents in monosubstituted benzene."
      }
    ]
  },
  {
    id: "biomolecules",
    title: "Biomolecules",
    category: "organic",
    difficulty: 2,
    estimatedHours: 6,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["Glucose Reactions", "Anomers", "Peptide Bond", "DNA RNA", "Reducing Sugars"],
    concepts: [
      {
        id: "carbohydrates",
        title: "Carbohydrates",
        description: "Classification (aldoses/ketoses); mono- and di-saccharides (glucose, fructose, sucrose, maltose, lactose); oxidation, reduction, glycoside formation and hydrolysis of disaccharides; anomers."
      },
      {
        id: "proteins",
        title: "Proteins & Amino Acids",
        description: "α-amino acids, peptide linkage and structure of peptides; primary to quaternary structure; fibrous vs globular proteins; denaturation; enzymes."
      },
      {
        id: "nucleic-acids-vitamins",
        title: "Nucleic Acids, Vitamins & Hormones",
        description: "Chemical composition and structure of DNA and RNA; vitamins (classification and functions) and hormones — JEE Main/NEET scope; JEE Advanced restricts to carbohydrates, proteins and nucleic acids."
      }
    ]
  },
  {
    id: "purification-characterisation",
    title: "Purification and Characterisation of Organic Compounds",
    category: "organic",
    difficulty: 2,
    estimatedHours: 5,
    exams: ["NEET", "JEE MAIN"],
    pyqTags: ["Chromatography", "Lassaigne Test", "Kjeldahl Method", "Empirical Formula", "Dumas Method"],
    concepts: [
      {
        id: "purification-methods",
        title: "Purification Methods",
        description: "Crystallization, sublimation, distillation, differential extraction and chromatography — principles and applications."
      },
      {
        id: "qualitative-organic",
        title: "Qualitative Analysis",
        description: "Detection of nitrogen, sulphur, phosphorus and halogens in organic compounds."
      },
      {
        id: "quantitative-organic",
        title: "Quantitative Analysis & Formulae",
        description: "Estimation of C, H, N, halogens, S and P (basic principles); calculation of empirical and molecular formulae (JEE Advanced: combustion method only)."
      }
    ]
  },
  // ── Advanced-only chapters (dropped from rationalized JEE Main / NEET). ──
  {
    id: "polymers",
    title: "Polymers",
    category: "organic",
    difficulty: 2,
    estimatedHours: 4,
    exams: ["JEE ADVANCED"],
    pyqTags: ["Addition Polymerization", "Condensation Polymerization", "Nylon", "Bakelite", "Natural Rubber"],
    concepts: [
      {
        id: "polymerization-types",
        title: "Types of Polymerization",
        description: "Addition and condensation polymerization; homopolymers and copolymers."
      },
      {
        id: "important-polymers",
        title: "Important Polymers",
        description: "Natural rubber, cellulose, nylon, teflon, bakelite, PVC; biodegradable polymers; applications."
      }
    ]
  },
  {
    id: "chemistry-in-everyday-life",
    title: "Chemistry in Everyday Life",
    category: "organic",
    difficulty: 1,
    estimatedHours: 3,
    exams: ["JEE ADVANCED"],
    pyqTags: ["Analgesics", "Antacids", "Artificial Sweeteners", "Soaps and Detergents"],
    concepts: [
      {
        id: "drugs",
        title: "Drugs & Therapeutic Action",
        description: "Drug–target interaction; therapeutic action with examples (structures excluded) of antacids, antihistamines, tranquilizers, analgesics, antimicrobials and antifertility drugs."
      },
      {
        id: "cleansing-sweeteners",
        title: "Cleansing Agents & Sweeteners",
        description: "Artificial sweeteners (names only); soaps, detergents and cleansing action."
      }
    ]
  }
];

export const organicMechanisms: Record<string, OrganicMechanism[]> = {
  "haloalkanes-haloarenes": [
    {
      name: "SN2",
      steps: [
        "Step 1: Nucleophile attacks from back-side, 180° opposite the leaving group.",
        "Step 2: Transition state forms with central carbon partially bonded to both nucleophile and leaving group (trigonal bipyramidal).",
        "Step 3: Leaving group departs — complete inversion of configuration (Walden Inversion)."
      ],
      description: "Concerted, single-step. Rate = k[substrate][nucleophile]. Favoured by primary alkyl halides."
    },
    {
      name: "SN1",
      steps: [
        "Step 1: C−LG bond breaks heterolytically forming planar carbocation (rate-determining step).",
        "Step 2: Nucleophile attacks carbocation from both faces equally.",
        "Step 3: Equal amounts of both enantiomers (racemization)."
      ],
      description: "Two-step. Rate = k[substrate]. Favoured by tertiary alkyl halides in polar protic solvents."
    }
  ],

  "aldehydes-ketones": [
    {
      name: "Nucleophilic Addition",
      steps: [
        "Step 1: Nucleophile attacks the electrophilic carbonyl carbon (δ+).",
        "Step 2: Tetrahedral alkoxide intermediate forms.",
        "Step 3: Protonation of alkoxide gives alcohol product."
      ],
      description: "Aldehydes react faster than ketones due to less steric hindrance and greater electrophilicity."
    },
    {
      name: "Aldol Condensation",
      steps: [
        "Step 1: Base removes α-hydrogen to form enolate ion.",
        "Step 2: Enolate attacks carbonyl carbon of second molecule (nucleophilic addition).",
        "Step 3: Protonation gives β-hydroxy carbonyl compound (aldol product).",
        "Step 4: Dehydration on heating gives α,β-unsaturated carbonyl compound."
      ],
      description: "Requires α-hydrogen. Product is a β-hydroxy aldehyde or ketone, which dehydrates to conjugated enone."
    }
  ]
};
