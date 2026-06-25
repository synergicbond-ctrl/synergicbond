export const organic = [
  {
    id: "haloalkanes-haloarenes",
    title: "Haloalkanes and Haloarenes",
    category: "organic",
    difficulty: 4,
    estimatedHours: 7,
    exams: ["NEET", "JEE MAIN", "JEE ADVANCED"],
    pyqTags: ["SN1", "SN2", "Elimination", "Grignard"],
    concepts: [
      {
        id: "sn2-mechanism",
        title: "Nucleophilic Substitution Bimolecular (SN2)",
        description: "Kinetics, transition state, stereochemical inversion, and reactivity order of alkyl halides.",
        animations: [
          "Bimolecular concerted mechanism transition state.",
          "Walden inversion stereochemical flip."
        ]
      },
      {
        id: "sn1-mechanism",
        title: "Nucleophilic Substitution Unimolecular (SN1)",
        description: "Carbocation intermediate stability, protic solvent effects, and racemic mixture outcomes.",
        animations: [
          "Carbocation planarity formation step.",
          "Attack from both faces yielding racemic mixture."
        ]
      }
    ]
  }
];

export const organicMechanisms: Record<string, any[]> = {
  "haloalkanes-haloarenes": [
    {
      name: "SN2",
      steps: [
        "Step 1: Attacking nucleophile approaches from the back-side, opposite to the leaving group.",
        "Step 2: Transition state forms where C-Nu bond is forming and C-LG bond is breaking simultaneously.",
        "Step 3: Leaving group departs completely, resulting in inversion of configuration (Walden Inversion)."
      ],
      description: "A concerted, single-step bimolecular reaction mechanism highly favored in primary alkyl halides due to minimal steric hindrance."
    },
    {
      name: "SN1",
      steps: [
        "Step 1: Heterolytic cleavage of C-LG bond forms a planar carbocation intermediate (Rate Determining Step).",
        "Step 2: Nucleophile attacks the carbocation intermediate from either the top or bottom face.",
        "Step 3: Formation of an equimolar mixture of enantiomers resulting in racemization."
      ],
      description: "A two-step unimolecular reaction mechanism whose rate depends solely on the concentration of the alkyl halide. Favored in tertiary systems due to carbocation stability."
    }
  ]
};
