import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 04 — Three-Dimensional Packing and Close-Packed Layers | Synergic Bond", description: "Pages 31–42: AAA, BCC layer placement, ABAB and ABCABC stacking, tetrahedral/octahedral holes and close-packed planes." };

const data = {
  "part": 4,
  "title": "Three-Dimensional Packing and Close-Packed Layers",
  "subtitle": "Pages 31–42: AAA, BCC layer placement, ABAB and ABCABC stacking, tetrahedral/octahedral holes and close-packed planes.",
  "sourcePages": "Pages 31–42",
  "overview": "All layer-by-layer diagrams from the handwritten notes are recreated as scalable SVGs. The construction is shown as geometry, not merely stated as HCP or CCP.",
  "modules": [
    {
      "part": 17,
      "slug": "packing-in-solids",
      "title": "Packing in Solids",
      "sourcePages": "pp. 23–45 and 50–54",
      "intro": "KOHINOOR develops packing fraction, 1D and 2D arrangements, then 3D SC/BCC/HCP/CCP stacking and the ideal HCP geometry.",
      "sections": [
        {
          "title": "1. Packing Fraction / Efficiency",
          "blocks": [
            {
              "type": "formula",
              "latex": "\\\\eta=\\\\frac{Z\\\\left(\\\\frac43\\\\pi r^3\\\\right)}{V_{cell}}\\\\times100",
              "display": "Packing efficiency = [Z(4/3 πr³)/V_cell] × 100."
            },
            {
              "type": "table",
              "headers": [
                "Structure",
                "Z",
                "a–r relation",
                "Packing fraction",
                "Void fraction"
              ],
              "rows": [
                [
                  "SC",
                  "1",
                  "a=2r",
                  "π/6 ≈ 0.524",
                  "≈47.6%"
                ],
                [
                  "BCC",
                  "2",
                  "a=4r/√3",
                  "√3π/8 ≈ 0.680",
                  "≈32.0%"
                ],
                [
                  "FCC/CCP",
                  "4",
                  "a=2√2r",
                  "π/(3√2) ≈ 0.7405",
                  "≈25.95%"
                ]
              ]
            }
          ]
        },
        {
          "title": "2. One-Dimensional Packing",
          "blocks": [
            {
              "type": "ascii",
              "text": "O—O—O—O—O—O",
              "title": "Only one linear close-packed arrangement"
            },
            {
              "type": "callout",
              "label": "Coordination",
              "text": "Each interior sphere touches two neighbours: CN = 2.",
              "tone": "result"
            }
          ]
        },
        {
          "title": "3. Two-Dimensional Packing",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "2D packing",
                "CN",
                "Primitive area efficiency"
              ],
              "rows": [
                [
                  "Square packing",
                  "4",
                  "π/4 ≈ 78.54%"
                ],
                [
                  "Hexagonal/triangular close packing",
                  "6",
                  "π/(2√3) ≈ 90.69%"
                ]
              ]
            },
            {
              "type": "ascii",
              "text": "Square:              Hexagonal:\nO O O O              O O O O\nO O O O               O O O O\nO O O O              O O O O",
              "title": "2D layer archetypes"
            }
          ]
        },
        {
          "title": "4. Three-Dimensional Packing from Square Layers",
          "blocks": [
            {
              "type": "bullets",
              "items": [
                "AAA stacking of square layers gives simple cubic: CN 6, PE ≈52%.",
                "A shifted square-layer arrangement gives BCC-like ABAB stacking: CN 8, PE ≈68%."
              ]
            }
          ]
        },
        {
          "title": "5. Three-Dimensional Packing from Hexagonal Close-Packed Layers",
          "blocks": [
            {
              "type": "p",
              "text": "Place layer B so its spheres occupy one set of triangular depressions of layer A. Between A and B, tetrahedral and octahedral voids are created."
            },
            {
              "type": "p",
              "text": "For the third layer there are two key possibilities:"
            },
            {
              "type": "table",
              "headers": [
                "Third-layer choice",
                "Sequence",
                "3D structure",
                "CN",
                "PE"
              ],
              "rows": [
                [
                  "Cover tetrahedral-hole positions so layer 3 repeats A",
                  "ABAB…",
                  "HCP",
                  "12",
                  "74.05%"
                ],
                [
                  "Occupy the alternate set so layer 3 is new C",
                  "ABCABC…",
                  "CCP = FCC",
                  "12",
                  "74.05%"
                ]
              ]
            },
            {
              "type": "ascii",
              "text": "HCP: A → B → A → B → A ...\nCCP: A → B → C → A → B → C ...",
              "title": "Layer-sequence memory"
            }
          ]
        },
        {
          "title": "6. Ideal HCP c/a and Volume Derivation",
          "blocks": [
            {
              "type": "formula",
              "latex": "\\\\frac ca=\\\\sqrt{\\\\frac83}=1.633",
              "display": "Ideal HCP c/a = √(8/3) ≈ 1.633."
            },
            {
              "type": "p",
              "text": "For touching spheres a=2r and c=4r√(2/3). The regular-hexagon base area is (3√3/2)a²=6√3r²."
            },
            {
              "type": "formula",
              "latex": "V_{HCP}=6\\\\sqrt3r^2\\\\cdot4r\\\\sqrt{\\\\frac23}=24\\\\sqrt2r^3",
              "display": "V_HCP = 24√2 r³."
            },
            {
              "type": "p",
              "text": "The conventional HCP prism contains 6 atoms, so occupied volume = 6(4/3πr³)=8πr³."
            },
            {
              "type": "formula",
              "latex": "\\\\eta_{HCP}=\\\\frac{8\\\\pi}{24\\\\sqrt2}=\\\\frac{\\\\pi}{3\\\\sqrt2}=0.7405",
              "display": "η_HCP = π/(3√2) = 0.7405 = 74.05%."
            }
          ]
        },
        {
          "title": "7. Diamond Packing Fraction",
          "blocks": [
            {
              "type": "p",
              "text": "The source also evaluates diamond as an FCC framework with half the tetrahedral sites occupied by identical carbon atoms. Z=8 and nearest-neighbour contact gives r=√3a/8."
            },
            {
              "type": "formula",
              "latex": "\\\\eta_{diamond}=\\\\frac{\\\\pi\\\\sqrt3}{16}\\\\approx0.34",
              "display": "Diamond packing fraction = π√3/16 ≈ 0.34, so void space ≈66%."
            }
          ]
        }
      ],
      "traps": [
        "HCP and CCP have the same packing efficiency and CN but different stacking sequences.",
        "BCC is not a maximum close-packed structure despite its relatively high coordination.",
        "2D hexagonal packing efficiency (~90.7% area) must not be confused with 3D HCP packing efficiency (~74.05% volume)."
      ],
      "examples": [
        {
          "title": "Example 1 — Integer/ratio",
          "question": "Find the ratio of FCC packing fraction to SC packing fraction.",
          "steps": [
            "FCC = π/(3√2).",
            "SC = π/6.",
            "Divide: [π/(3√2)]/(π/6)=2/√2."
          ],
          "answer": "Ratio = √2."
        },
        {
          "title": "Example 2 — Multi-correct",
          "question": "Which are correct? (A) HCP=ABAB (B) CCP=ABCABC (C) both CN=12 (D) HCP packs more efficiently than CCP.",
          "steps": [
            "A true.",
            "B true.",
            "C true.",
            "D false; both are 74.05%."
          ],
          "answer": "Correct: A, B, C."
        }
      ]
    }
  ],
  "sourceSections": [
    {
      "title": "Building three-dimensional packings",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Starting 2D layer",
            "Placement of next layers",
            "3D structure",
            "CN",
            "Packing efficiency"
          ],
          "rows": [
            [
              "Square layer",
              "AAA…",
              "Simple cubic",
              "6",
              "$52.36\\%$"
            ],
            [
              "Square layer shifted into alternate square depressions",
              "ABAB…",
              "Body-centred cubic",
              "8",
              "$68.02\\%$"
            ],
            [
              "Hexagonal close-packed layer",
              "ABAB…",
              "HCP",
              "12",
              "$74.05\\%$"
            ],
            [
              "Hexagonal close-packed layer",
              "ABCABC…",
              "CCP/FCC",
              "12",
              "$74.05\\%$"
            ]
          ]
        },
        {
          "type": "callout",
          "label": "Terminology",
          "text": "CCP describes the stacking sequence; FCC describes the conventional cubic unit cell of the same arrangement.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "Void generation in close packing",
      "blocks": [
        {
          "type": "p",
          "text": "For $N$ close-packed spheres, the number of octahedral holes is $N$ and the number of tetrahedral holes is $2N$."
        },
        {
          "type": "formula",
          "latex": "N_{\\rm oct}=N,\\qquad N_{\\rm tet}=2N",
          "display": ""
        },
        {
          "type": "p",
          "text": "A tetrahedral void is bounded by four sphere centres. An octahedral void is bounded by six sphere centres. The labels describe coordination polyhedra, not empty geometric solids with flat walls."
        }
      ]
    },
    {
      "title": "Layer sequence and local coordination",
      "blocks": [
        {
          "type": "p",
          "text": "Each sphere in HCP or CCP touches six neighbours in its own layer, three in the layer above and three in the layer below."
        },
        {
          "type": "formula",
          "latex": "\\mathrm{CN}=6+3+3=12",
          "display": ""
        },
        {
          "type": "callout",
          "label": "JEE trap",
          "text": "HCP and CCP have identical coordination number and packing efficiency but different third-layer positions and different long-range symmetry.",
          "tone": "trap"
        }
      ]
    },
    {
      "title": "Close-packed planes of FCC",
      "blocks": [
        {
          "type": "p",
          "text": "The close-packed planes in an FCC crystal are the $\\{111\\}$ family. There are four orientations, each perpendicular to one of the four body diagonals. The layer sequence along a $\\langle111\\rangle$ direction is ABCABC…."
        },
        {
          "type": "formula",
          "latex": "d_{111}=\\frac a{\\sqrt3}",
          "display": ""
        }
      ]
    }
  ],
  "enrichments": [
    {
      "id": "packing-polytypes",
      "title": "Advanced Extension 4 — Close Packing, Polytypes and Eutactic Arrays",
      "visual": "stacking",
      "intro": "HCP and CCP are the two simplest close-packed stackings, but the layer language also explains more complex real structures.",
      "paragraphs": [
        "A close-packed layer has six in-plane neighbours. Placing a second layer in one set of triangular depressions produces an AB pair. The third layer can return above A, producing ABAB… HCP, or occupy a new C position, producing ABCABC… CCP.",
        "Every sphere in ideal HCP or CCP has twelve touching neighbours: six in its own layer, three above and three below. The packing fraction is identical, π/(3√2), because the local contact geometry is identical even though the long-range stacking differs.",
        "Longer periodic sequences such as ABAC or ABCACB are called polytypes. They have the same composition and similar local coordination but differ in stacking order. Zinc sulfide illustrates this: sphalerite uses a cubic anion sequence, whereas wurtzite uses a hexagonal sequence.",
        "In many ionic structures the anions retain the topology of close packing but are pushed apart by cations. It is then safer to say that the array is close-packed-like or eutactic rather than claiming that every neighbouring anion touches."
      ],
      "formulae": [
        "HCP: ABAB…",
        "CCP/FCC: ABCABC…",
        "CN = 6 + 3 + 3 = 12",
        "packing fraction = π/(3√2) ≈ 0.7405"
      ],
      "example": {
        "question": "A stacking sequence is ABACABAC…. Is it HCP or CCP?",
        "steps": [
          "HCP requires strict AB repetition.",
          "CCP requires strict ABC repetition.",
          "ABAC has a four-layer repeat distinct from both."
        ],
        "answer": "It is a close-packed polytype, not ideal HCP or CCP."
      }
    }
  ],
  "figures": [
    "aaa-sc",
    "bcc-layers",
    "layer-a",
    "layer-ab",
    "tetra-octa-holes",
    "hcp-stack",
    "ccp-stack",
    "hcp-vs-ccp",
    "fcc-111",
    "layer-projection",
    "close-packed-planes"
  ],
  "examples": [
    {
      "title": "Void count",
      "question": "A CCP array contains $2.50\\times10^{23}$ spheres. Find the number of tetrahedral and octahedral voids.",
      "steps": [
        "$N_{oct}=N$.",
        "$N_{tet}=2N$."
      ],
      "answer": "$N_{oct}=2.50\\times10^{23}$ and $N_{tet}=5.00\\times10^{23}$."
    },
    {
      "title": "Layer identification",
      "question": "The third layer lies directly over the first. Identify the packing.",
      "steps": [
        "First two layers are A and B.",
        "Returning above A gives ABAB… stacking."
      ],
      "answer": "The structure is HCP."
    },
    {
      "title": "Coordination in close packing",
      "question": "A sphere in a perfect CCP lattice has how many touching neighbours above, within and below its layer?",
      "steps": [
        "Six lie in the same layer.",
        "Three touch from the layer above and three from below."
      ],
      "answer": "$3+6+3=12$."
    },
    {
      "title": "FCC plane spacing",
      "question": "For $a=408\\,\\mathrm{pm}$, calculate the separation of adjacent (111) planes.",
      "steps": [
        "Use $d_{111}=a/\\sqrt3$.",
        "$d=408/1.732$."
      ],
      "answer": "$d_{111}=235.6\\,\\mathrm{pm}$."
    }
  ],
  "ncertExamples": [
    {
      "title": "HCP versus CCP",
      "question": "State one similarity and one difference between HCP and CCP.",
      "steps": [
        "Both are close packed with CN 12 and $74\\%$ efficiency.",
        "HCP is ABAB…, while CCP is ABCABC…."
      ],
      "answer": "Same local packing; different stacking sequence."
    },
    {
      "title": "Octahedral holes",
      "question": "How many octahedral holes are present in a close-packed structure containing 400 spheres?",
      "steps": [
        "The number of octahedral holes equals the number of spheres."
      ],
      "answer": "There are $400$ octahedral holes."
    }
  ],
  "pageAudit": [
    {
      "page": 31,
      "topic": "Three-dimensional square-layer packing: simple cubic and body-centred cubic"
    },
    {
      "page": 32,
      "topic": "Three-dimensional square-layer packing: simple cubic and body-centred cubic"
    },
    {
      "page": 33,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 34,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 35,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 36,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 37,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 38,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 39,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 40,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 41,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    },
    {
      "page": 42,
      "topic": "Tetrahedral/octahedral holes, HCP/CCP layer construction and {111} planes"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
