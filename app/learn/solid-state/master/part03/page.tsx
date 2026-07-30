import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 03 — Stoichiometry, Coordination and Lower-Dimensional Packing | Synergic Bond", description: "Pages 21–30: formula from site occupancy, atom removal, coordination shells, packing efficiency, 1D/2D layers and repeat-unit selection." };

const data = {
  "part": 3,
  "title": "Stoichiometry, Coordination and Lower-Dimensional Packing",
  "subtitle": "Pages 21–30: formula from site occupancy, atom removal, coordination shells, packing efficiency, 1D/2D layers and repeat-unit selection.",
  "sourcePages": "Pages 21–30",
  "overview": "This part isolates the problem-solving material that was previously buried inside one long page. It includes coordinate bookkeeping and NCERT-style counting problems.",
  "modules": [
    {
      "part": 16,
      "slug": "crystal-stoichiometry-and-atom-removal-problems",
      "title": "Crystal Stoichiometry and Atom-Removal Problems",
      "sourcePages": "p. 21",
      "intro": "KOHINOOR gives a canonical unit-cell formula problem and then removes atoms along a face diagonal or from an entire face. Coordinate tracking is the safest method.",
      "sections": [
        {
          "title": "1. Base Cell",
          "blocks": [
            {
              "type": "p",
              "text": "Let A occupy all corners, B all face centres and C the body centre."
            },
            {
              "type": "formula",
              "latex": "A=8\\\\times\\\\frac18=1,\\\\quad B=6\\\\times\\\\frac12=3,\\\\quad C=1",
              "display": "A=1, B=3, C=1  ⇒  AB₃C."
            },
            {
              "type": "callout",
              "label": "Base result",
              "text": "Original effective formula = AB₃C.",
              "tone": "result"
            }
          ]
        },
        {
          "title": "2. Remove Atoms Along One Face Diagonal",
          "blocks": [
            {
              "type": "p",
              "text": "Choose the face z=0 and diagonal y=x. The occupied positions on that diagonal are A at (0,0,0) and (1,1,0), and B at (1/2,1/2,0)."
            },
            {
              "type": "bullets",
              "items": [
                "A removed = 2×1/8 = 1/4, so A remaining = 3/4.",
                "B removed = one face-centre contribution = 1/2, so B remaining = 5/2.",
                "C remains 1."
              ]
            },
            {
              "type": "formula",
              "latex": "\\\\frac34:\\\\frac52:1=3:10:4",
              "display": "A:B:C = 3/4 : 5/2 : 1 = 3 : 10 : 4."
            },
            {
              "type": "callout",
              "label": "Result",
              "text": "Modified formula = A₃B₁₀C₄.",
              "tone": "result"
            }
          ]
        },
        {
          "title": "3. Remove Atoms Along One Entire Face",
          "blocks": [
            {
              "type": "p",
              "text": "Again choose z=0. Remove four corner A contributions on that face and the B face-centre on that face."
            },
            {
              "type": "bullets",
              "items": [
                "A removed = 4×1/8 = 1/2 → A remaining = 1/2.",
                "B removed = 1/2 → B remaining = 5/2.",
                "C remains 1."
              ]
            },
            {
              "type": "formula",
              "latex": "\\\\frac12:\\\\frac52:1=1:5:2",
              "display": "A:B:C = 1/2 : 5/2 : 1 = 1 : 5 : 2."
            },
            {
              "type": "callout",
              "label": "Result",
              "text": "Modified formula = AB₅C₂.",
              "tone": "result"
            }
          ]
        },
        {
          "title": "4. Coordinate-Tracking Algorithm",
          "blocks": [
            {
              "type": "bullets",
              "items": [
                "Write the occupied fractional coordinates for every species.",
                "Write the geometrical equation of the removed line/plane/axis.",
                "Identify which occupied coordinates satisfy that equation.",
                "Subtract sharing-weighted contributions, not visible sphere counts.",
                "Only then reduce to the empirical ratio."
              ]
            }
          ]
        }
      ],
      "traps": [
        "“Remove a face” means remove contributions belonging to that specified boundary face, not every symmetry-equivalent face.",
        "A face diagonal can pass through a face-centred atom.",
        "Two corner atoms removed from one face diagonal reduce A by 2/8, not by 2 full atoms."
      ],
      "examples": [
        {
          "title": "Example 1 — Source reconstruction",
          "question": "For A(corners), B(face centres), C(body centre), remove one face diagonal.",
          "steps": [
            "A=1−2/8=3/4.",
            "B=3−1/2=5/2.",
            "C=1.",
            "Multiply by 4."
          ],
          "answer": "A₃B₁₀C₄."
        },
        {
          "title": "Example 2 — Plane removal",
          "question": "For the same cell, remove all atoms on one face.",
          "steps": [
            "A=1−4/8=1/2.",
            "B=3−1/2=5/2.",
            "C=1.",
            "Multiply by 2."
          ],
          "answer": "AB₅C₂."
        }
      ]
    }
  ],
  "sourceSections": [
    {
      "title": "Formula from site occupancy",
      "blocks": [
        {
          "type": "p",
          "text": "Count each species separately using its sharing factor. Only after obtaining the effective numbers should the ratio be reduced to the simplest formula."
        },
        {
          "type": "formula",
          "latex": "n_X=\\frac{N_{X,c}}8+\\frac{N_{X,e}}4+\\frac{N_{X,f}}2+N_{X,b}+N_{X,i}",
          "display": ""
        },
        {
          "type": "callout",
          "label": "Coordinate method",
          "text": "For atom-removal questions, list coordinates of affected sites. A face diagonal contains two corners and one face-centre position in an FCC description; a whole face contains four corner contributions and one face-centre contribution.",
          "tone": "info"
        }
      ]
    },
    {
      "title": "Packing efficiency of the three cubic lattices",
      "blocks": [
        {
          "type": "derivation",
          "title": "SC packing",
          "lines": [
            "Z=1,\\ r=a/2",
            "\\eta=\\frac{\\frac43\\pi r^3}{a^3}"
          ],
          "result": "\\eta_{SC}=\\frac\\pi6=0.5236"
        },
        {
          "type": "derivation",
          "title": "BCC packing",
          "lines": [
            "Z=2,\\ r=\\frac{\\sqrt3a}{4}",
            "\\eta=\\frac{2\\cdot\\frac43\\pi r^3}{a^3}"
          ],
          "result": "\\eta_{BCC}=\\frac{\\sqrt3\\pi}{8}=0.6802"
        },
        {
          "type": "derivation",
          "title": "FCC packing",
          "lines": [
            "Z=4,\\ r=\\frac{a}{2\\sqrt2}",
            "\\eta=\\frac{4\\cdot\\frac43\\pi r^3}{a^3}"
          ],
          "result": "\\eta_{FCC}=\\frac\\pi{3\\sqrt2}=0.7405"
        }
      ]
    },
    {
      "title": "One- and two-dimensional packing",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Arrangement",
            "2D coordination number",
            "Area occupied per particle in repeating cell",
            "Packing fraction"
          ],
          "rows": [
            [
              "Linear row",
              "2",
              "$2r$ per particle along line",
              "1D length fraction = 1"
            ],
            [
              "Square packing",
              "4",
              "$(2r)^2$",
              "$\\pi/4=78.54\\%$"
            ],
            [
              "Hexagonal packing",
              "6",
              "$2\\sqrt3r^2$",
              "$\\pi/(2\\sqrt3)=90.69\\%$"
            ]
          ]
        },
        {
          "type": "p",
          "text": "A close-packed triangular layer contains two kinds of triangular depression. When a second layer is placed in one set, the covered holes become tetrahedral sites and the aligned uncovered holes contribute to octahedral sites."
        }
      ]
    },
    {
      "title": "Choice of unit cell and repeat unit",
      "blocks": [
        {
          "type": "p",
          "text": "A valid unit cell must reproduce the entire pattern by pure translation. It need not be the visually smallest polygon. Different valid choices have the same composition and area/volume per lattice point."
        },
        {
          "type": "callout",
          "label": "NaCl 2D caution",
          "text": "A checkerboard fragment with correct local alternation may fail as a unit cell if translation changes the identity of the ion at an equivalent corner.",
          "tone": "trap"
        }
      ]
    }
  ],
  "enrichments": [
    {
      "id": "formula-unification",
      "title": "Advanced Extension 14 — Unified Geometry and Formula Strategy",
      "visual": "strategy",
      "intro": "Most difficult numerical questions reduce to a small sequence of geometric and stoichiometric decisions.",
      "paragraphs": [
        "First identify the lattice and the exact contact direction. In SC contact is along an edge, in BCC along a body diagonal and in FCC along a face diagonal. Do not use a memorized a–r formula until the contact line has been verified for the stated structure.",
        "Second count particles with sharing fractions, but distinguish number of lattice points, number of atoms and number of formula units. A basis can multiply the atom count without changing the Bravais lattice.",
        "Third convert every length to a consistent unit before applying density. The formula ρ = ZM/(N_A V_cell) uses molar mass per mole and cell volume in compatible units. For non-cubic cells use the correct geometrical volume.",
        "Fourth treat void occupancy algebraically. If N anions form a close-packed array, there are N octahedral and 2N tetrahedral holes. Occupying a fraction f_o and f_t gives cations N(f_o + 2f_t), from which stoichiometry follows immediately."
      ],
      "formulae": [
        "SC: a = 2r",
        "BCC: √3a = 4r",
        "FCC: √2a = 4r",
        "ρ = ZM/(N_A V_cell)",
        "close-packed N anions → N O-holes and 2N T-holes"
      ],
      "example": {
        "question": "Anions form CCP. Cations occupy 25% of tetrahedral holes and 50% of octahedral holes. Find the cation:anion ratio.",
        "steps": [
          "For N anions, tetrahedral holes = 2N and occupied tetrahedral holes = 0.25×2N = 0.5N.",
          "Octahedral holes = N and occupied octahedral holes = 0.50N.",
          "Total cations = N."
        ],
        "answer": "Cation:anion = 1:1, so the empirical type is MX."
      }
    }
  ],
  "figures": [
    "site-occupancy",
    "atom-removal",
    "coordination-shells",
    "packing-comparison",
    "one-d-packing",
    "square-packing",
    "hex-packing",
    "nacl-2d",
    "repeat-units"
  ],
  "examples": [
    {
      "title": "Formula from corners and faces",
      "question": "A occupies all corners and B occupies all face centres. Find the formula.",
      "steps": [
        "$n_A=8/8=1$.",
        "$n_B=6/2=3$."
      ],
      "answer": "The formula is $\\mathrm{AB_3}$."
    },
    {
      "title": "Removal from one face",
      "question": "An $\\mathrm{AB_3}$ cell has A at corners and B at face centres. All sites lying on one complete face are removed from the isolated cell. Find the remaining effective counts.",
      "steps": [
        "Removed A contribution: four corners on that face, each $1/8$, so $1/2$.",
        "Removed B contribution: one face centre contributes $1/2$; four edge/adjacent descriptions must be handled according to the original site specification.",
        "Starting counts are $A=1$, $B=3$."
      ],
      "answer": "For the stated corner/face-centre model, remaining effective counts are $A=1/2$, $B=5/2$, giving $\\mathrm{AB_5}$ after reduction."
    },
    {
      "title": "Square-layer packing fraction",
      "question": "Derive the 2D packing fraction of square packing.",
      "steps": [
        "One square cell of side $2r$ contains one effective circle.",
        "Circle area is $\\pi r^2$ and cell area is $4r^2$."
      ],
      "answer": "$\\eta=\\pi/4=78.54\\%$."
    },
    {
      "title": "Hexagonal-layer coordination",
      "question": "How many nearest neighbours touch a sphere in a 2D hexagonal layer?",
      "steps": [
        "The centres form an equilateral triangular lattice.",
        "Six equal spheres surround the central sphere at $60^\\circ$ intervals."
      ],
      "answer": "The coordination number is $6$."
    }
  ],
  "ncertExamples": [
    {
      "title": "Packing order",
      "question": "Arrange SC, BCC and FCC in increasing packing efficiency.",
      "steps": [
        "SC: $52.36\\%$.",
        "BCC: $68.02\\%$.",
        "FCC: $74.05\\%$."
      ],
      "answer": "$\\mathrm{SC<BCC<FCC}$."
    },
    {
      "title": "Void percentage",
      "question": "Calculate the void percentage in BCC.",
      "steps": [
        "Void percentage is $100(1-\\eta)$.",
        "Use $\\eta_{BCC}=0.6802$."
      ],
      "answer": "Void percentage $=31.98\\%\\approx32\\%$."
    }
  ],
  "pageAudit": [
    {
      "page": 21,
      "topic": "Stoichiometry from site occupancy, coordination shells and packing efficiency"
    },
    {
      "page": 22,
      "topic": "Stoichiometry from site occupancy, coordination shells and packing efficiency"
    },
    {
      "page": 23,
      "topic": "Stoichiometry from site occupancy, coordination shells and packing efficiency"
    },
    {
      "page": 24,
      "topic": "Stoichiometry from site occupancy, coordination shells and packing efficiency"
    },
    {
      "page": 25,
      "topic": "One- and two-dimensional packing; repeat-unit selection and NaCl representations"
    },
    {
      "page": 26,
      "topic": "One- and two-dimensional packing; repeat-unit selection and NaCl representations"
    },
    {
      "page": 27,
      "topic": "One- and two-dimensional packing; repeat-unit selection and NaCl representations"
    },
    {
      "page": 28,
      "topic": "One- and two-dimensional packing; repeat-unit selection and NaCl representations"
    },
    {
      "page": 29,
      "topic": "One- and two-dimensional packing; repeat-unit selection and NaCl representations"
    },
    {
      "page": 30,
      "topic": "One- and two-dimensional packing; repeat-unit selection and NaCl representations"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
