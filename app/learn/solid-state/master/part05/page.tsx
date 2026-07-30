import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 05 — Voids, Diamond, HCP Geometry and FCC–CCP Relation | Synergic Bond", description: "Pages 43–59: exact void locations/counts, BCT, diamond packing, ideal HCP c/a and close-packed planes in FCC." };

const data = {
  "part": 5,
  "title": "Voids, Diamond, HCP Geometry and FCC–CCP Relation",
  "subtitle": "Pages 43–59: exact void locations/counts, BCT, diamond packing, ideal HCP c/a and close-packed planes in FCC.",
  "sourcePages": "Pages 43–59",
  "overview": "This part contains the densest visual geometry in the source. It restores the plane projections, HCP fractional heights and diamond derivations that were abbreviated in the previous deployment.",
  "modules": [
    {
      "part": 18,
      "slug": "voids-in-crystal-packing",
      "title": "Voids in Crystal Packing",
      "sourcePages": "pp. 33–50 and 55–57",
      "intro": "The source next counts tetrahedral and octahedral voids, locates them in FCC and HCP, and tracks them layer by layer.",
      "sections": [
        {
          "title": "1. Universal Close-Packing Count",
          "blocks": [
            {
              "type": "p",
              "text": "For N close-packed spheres:"
            },
            {
              "type": "formula",
              "latex": "N_{OV}=N,\\\\qquad N_{TV}=2N",
              "display": "Number of octahedral voids = N; tetrahedral voids = 2N."
            }
          ]
        },
        {
          "title": "2. FCC / CCP Void Locations",
          "blocks": [
            {
              "type": "p",
              "text": "An FCC conventional cell contains 4 close-packed spheres, therefore 4 octahedral voids and 8 tetrahedral voids."
            },
            {
              "type": "table",
              "headers": [
                "Void",
                "Fractional coordinates / location",
                "Effective number"
              ],
              "rows": [
                [
                  "Octahedral",
                  "Body centre (1/2,1/2,1/2) + 12 edge centres shared by 4 cells",
                  "1 + 12/4 = 4"
                ],
                [
                  "Tetrahedral",
                  "All 8 combinations (x,y,z) with x,y,z ∈ {1/4,3/4}",
                  "8"
                ]
              ]
            },
            {
              "type": "ascii",
              "text": "z=1/4:  T       T\n\n          T       T\n\nz=1/2:        O  at (1/2,1/2,1/2)\n\nz=3/4:  T       T\n\n          T       T",
              "title": "FCC fractional-height void slices"
            }
          ]
        },
        {
          "title": "3. How the Voids Arise Between Two Close-Packed Layers",
          "blocks": [
            {
              "type": "p",
              "text": "A tetrahedral void is surrounded by 4 spheres. An octahedral void is surrounded by 6 spheres. A triangular hole is a 2D depression; it becomes a 3D tetrahedral or octahedral void only after the next layer is added."
            }
          ]
        },
        {
          "title": "4. HCP Void Count and Layer Locations",
          "blocks": [
            {
              "type": "p",
              "text": "The conventional HCP cell contains 6 spheres, so it contains 12 tetrahedral and 6 octahedral voids."
            },
            {
              "type": "bullets",
              "items": [
                "Three effective octahedral voids occur between the lower A and middle B layers, and three between B and upper A.",
                "A careful boundary count gives 6 effective tetrahedral voids in each A–B interval, hence 12 total.",
                "The source tracks void planes at fractional heights such as h/8, 2h/8, 3h/8, …, 7h/8 to visualize alternating tetrahedral and octahedral sites."
              ]
            }
          ]
        },
        {
          "title": "5. Occupancy-to-Formula Method",
          "blocks": [
            {
              "type": "p",
              "text": "If a close-packed array contains N host anions, then it provides N octahedral and 2N tetrahedral sites. Multiply those counts by the occupied fractions to obtain cation number and hence the formula."
            }
          ]
        }
      ],
      "traps": [
        "A triangular hole is not the same as a tetrahedral void.",
        "FCC edge-centred octahedral voids contribute 1/4 each.",
        "“N tetrahedral voids” is wrong for a close-packed array; there are 2N."
      ],
      "examples": [
        {
          "title": "Example 1",
          "question": "A CCP anion array contains 200 anions. How many TV and OV are available?",
          "steps": [
            "TV=2N.",
            "OV=N."
          ],
          "answer": "TV=400; OV=200."
        },
        {
          "title": "Example 2 — Formula",
          "question": "A close-packed X array has 25% of TV and 50% of OV occupied by M. Find M:X.",
          "steps": [
            "TV contribution = 0.25×2N = 0.5N.",
            "OV contribution = 0.50×N = 0.5N.",
            "Total M=N."
          ],
          "answer": "M:X = 1:1, so MX."
        }
      ]
    }
  ],
  "sourceSections": [
    {
      "title": "Exact void locations in FCC",
      "blocks": [
        {
          "type": "p",
          "text": "In a conventional FCC cell with four spheres, there are four octahedral holes and eight tetrahedral holes."
        },
        {
          "type": "table",
          "headers": [
            "Void type",
            "Representative fractional coordinates",
            "Count in conventional FCC cell"
          ],
          "rows": [
            [
              "Octahedral",
              "$(1/2,1/2,1/2)$ and 12 edge centres shared by 4 cells",
              "4"
            ],
            [
              "Tetrahedral",
              "All combinations of $(1/4,1/4,1/4)$ and $(3/4,3/4,3/4)$",
              "8"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "N_{\\rm oct}=4,\\qquad N_{\\rm tet}=8",
          "display": ""
        }
      ]
    },
    {
      "title": "Ideal HCP c/a ratio derivation",
      "blocks": [
        {
          "type": "derivation",
          "title": "Regular tetrahedral geometry",
          "lines": [
            "a=2r",
            "h_{\\rm tet}=\\sqrt{a^2-\\left(\\frac a{\\sqrt3}\\right)^2}=a\\sqrt{\\frac23}",
            "c=2h_{\\rm tet}"
          ],
          "result": "\\frac ca=2\\sqrt{\\frac23}=\\sqrt{\\frac83}=1.633"
        }
      ]
    },
    {
      "title": "Diamond cubic structure",
      "blocks": [
        {
          "type": "p",
          "text": "Diamond is an FCC lattice with a two-atom basis at $(0,0,0)$ and $(1/4,1/4,1/4)$. Equivalently, it is two interpenetrating FCC sublattices displaced by one quarter of a body diagonal."
        },
        {
          "type": "table",
          "headers": [
            "Property",
            "Diamond cubic"
          ],
          "rows": [
            [
              "Atoms per conventional cell",
              "$8$"
            ],
            [
              "Coordination number",
              "$4$"
            ],
            [
              "Nearest-neighbour distance",
              "$\\sqrt3a/4$"
            ],
            [
              "Radius relation",
              "$2r=\\sqrt3a/4$"
            ],
            [
              "Packing efficiency",
              "$\\sqrt3\\pi/16=34.0\\%$"
            ]
          ]
        },
        {
          "type": "derivation",
          "title": "Packing efficiency of diamond",
          "lines": [
            "Z=8,\\quad r=\\frac{\\sqrt3a}{8}",
            "\\eta=\\frac{8\\cdot\\frac43\\pi r^3}{a^3}"
          ],
          "result": "\\eta=\\frac{\\sqrt3\\pi}{16}=0.3401"
        }
      ]
    },
    {
      "title": "BCT and FCC–CCP interpretation",
      "blocks": [
        {
          "type": "p",
          "text": "A body-centred tetragonal cell has $a=b\\ne c$. It can be viewed as a tetragonal distortion of BCC. The CCP layers in an FCC conventional cell are parallel to $\\{111\\}$, not to the square faces of the cube."
        },
        {
          "type": "callout",
          "label": "Projection caution",
          "text": "A projection may place atoms visually on top of one another even when they are at different heights. Always retain the layer label or fractional coordinate.",
          "tone": "trap"
        }
      ]
    }
  ],
  "enrichments": [],
  "figures": [
    "fcc-void-map",
    "hcp-void-heights",
    "tetrahedron-void",
    "octahedron-void",
    "bct",
    "diamond-two-fcc",
    "diamond-cell",
    "hcp-ca",
    "fcc-ccp-relation",
    "four-111-planes",
    "plane-one-two-three"
  ],
  "examples": [
    {
      "title": "Diamond radius",
      "question": "Diamond has $a=356.7\\,\\mathrm{pm}$. Find the covalent radius in the hard-sphere contact model.",
      "steps": [
        "Use $2r=\\sqrt3a/4$.",
        "$r=\\sqrt3a/8$."
      ],
      "answer": "$r=77.2\\,\\mathrm{pm}$."
    },
    {
      "title": "Diamond packing fraction",
      "question": "Calculate the percentage empty space in diamond.",
      "steps": [
        "Packing efficiency is $\\sqrt3\\pi/16=0.3401$.",
        "Void fraction is $1-0.3401$."
      ],
      "answer": "Empty space $=65.99\\%\\approx66\\%$."
    },
    {
      "title": "FCC void occupancy",
      "question": "An FCC anion lattice has half its tetrahedral holes occupied. Find the cation:anion ratio.",
      "steps": [
        "Four anions occur per cell.",
        "There are eight tetrahedral holes; half gives four cations."
      ],
      "answer": "Cation:anion $=4:4=1:1$."
    },
    {
      "title": "HCP cell height",
      "question": "An ideal HCP metal has $a=250\\,\\mathrm{pm}$. Find $c$.",
      "steps": [
        "Use $c/a=\\sqrt{8/3}$.",
        "$c=1.633a$."
      ],
      "answer": "$c=408.2\\,\\mathrm{pm}$."
    }
  ],
  "ncertExamples": [
    {
      "title": "Diamond coordination",
      "question": "Why is the coordination number of diamond 4 rather than 12?",
      "steps": [
        "Each carbon forms four directional $sp^3$ covalent bonds.",
        "The structure is not a close-packed array of touching spheres."
      ],
      "answer": "Each carbon has four tetrahedrally arranged nearest carbon neighbours."
    },
    {
      "title": "Void locations",
      "question": "How many tetrahedral holes occur in an FCC cell?",
      "steps": [
        "The FCC cell contains four close-packed particles.",
        "$N_{tet}=2N$."
      ],
      "answer": "There are $8$ tetrahedral holes."
    }
  ],
  "pageAudit": [
    {
      "page": 43,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 44,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 45,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 46,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 47,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 48,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 49,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 50,
      "topic": "Void counts, close-packed projections, HCP/FCC comparison and exact packing geometry"
    },
    {
      "page": 51,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 52,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 53,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 54,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 55,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 56,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 57,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 58,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    },
    {
      "page": 59,
      "topic": "BCT, diamond, ideal HCP c/a, HCP void heights and FCC–CCP relation"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
