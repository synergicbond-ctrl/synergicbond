import { MasterPart, type MasterPartData } from "../_shared";

export const metadata = { title: "Solid State Part 06 — Radius-Ratio Derivations and Coordination Polyhedra | Synergic Bond", description: "Pages 60–63: limiting radius ratios for CN 2, 3, 4, 6 and 8, trigonal-prismatic geometry, higher polyhedra and general cell volumes." };

const data = {
  "part": 6,
  "title": "Radius-Ratio Derivations and Coordination Polyhedra",
  "subtitle": "Pages 60–63: limiting radius ratios for CN 2, 3, 4, 6 and 8, trigonal-prismatic geometry, higher polyhedra and general cell volumes.",
  "sourcePages": "Pages 60–63",
  "overview": "Every limiting ratio is now shown as a geometrical derivation with a labelled SVG. The rule is also presented with its limitations, as required for JEE Advanced.",
  "modules": [
    {
      "part": 19,
      "slug": "radius-ratio-and-limiting-geometry",
      "title": "Radius Ratio and Limiting Geometry",
      "sourcePages": "pp. 60–64",
      "intro": "KOHINOOR introduces the classical radius-ratio rule as a geometrical guide to the coordination environment of an ionic solid, then extends the idea to additional ideal polyhedra.",
      "sections": [
        {
          "title": "1. Classical Radius-Ratio Table",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "r⁺/r⁻ range",
                "Ideal coordination",
                "Geometry / void"
              ],
              "rows": [
                [
                  "<0.155",
                  "2",
                  "Linear"
                ],
                [
                  "0.155–0.225",
                  "3",
                  "Triangular"
                ],
                [
                  "0.225–0.414",
                  "4",
                  "Tetrahedral"
                ],
                [
                  "0.414–0.732",
                  "6",
                  "Octahedral"
                ],
                [
                  "0.732–1.000",
                  "8",
                  "Cubic"
                ]
              ]
            }
          ]
        },
        {
          "title": "2. CN=3 Triangular Limit",
          "blocks": [
            {
              "type": "p",
              "text": "Three anions of radius R touch at the vertices of an equilateral triangle of side 2R. The centroid-to-vertex distance is 2R/√3."
            },
            {
              "type": "formula",
              "latex": "R+r=\\\\frac{2R}{\\\\sqrt3}",
              "display": "R + r = 2R/√3."
            },
            {
              "type": "formula",
              "latex": "\\\\frac rR=\\\\frac2{\\\\sqrt3}-1=0.1547",
              "display": "r/R = 2/√3 − 1 = 0.1547 ≈ 0.155."
            }
          ]
        },
        {
          "title": "3. CN=4 Tetrahedral Limit",
          "blocks": [
            {
              "type": "p",
              "text": "Four anion centres form a regular tetrahedron of edge 2R. The tetrahedral circumradius is (√6/4)(2R)=R√(3/2)."
            },
            {
              "type": "formula",
              "latex": "\\\\frac rR=\\\\sqrt{\\\\frac32}-1=0.2247",
              "display": "r/R = √(3/2) − 1 = 0.2247 ≈ 0.225."
            }
          ]
        },
        {
          "title": "4. CN=6 Octahedral Limit",
          "blocks": [
            {
              "type": "p",
              "text": "Use the square cross-section through four surrounding anions. The square side is 2R and diagonal is 2R√2."
            },
            {
              "type": "formula",
              "latex": "2R+2r=2R\\\\sqrt2",
              "display": "2R + 2r = 2R√2."
            },
            {
              "type": "formula",
              "latex": "\\\\frac rR=\\\\sqrt2-1=0.4142",
              "display": "r/R = √2 − 1 = 0.4142."
            }
          ]
        },
        {
          "title": "5. CN=8 Cubic Limit",
          "blocks": [
            {
              "type": "p",
              "text": "Eight anions occupy cube corners; a central cation touches along the body diagonal. If the cube edge is 2R, the body diagonal is 2R√3."
            },
            {
              "type": "formula",
              "latex": "2R+2r=2R\\\\sqrt3",
              "display": "2R + 2r = 2R√3."
            },
            {
              "type": "formula",
              "latex": "\\\\frac rR=\\\\sqrt3-1=0.732",
              "display": "r/R = √3 − 1 = 0.732."
            }
          ]
        },
        {
          "title": "6. Extended Ideal Geometries Listed in the Source",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Coordination polyhedron",
                "CN",
                "Approx. limiting ratio"
              ],
              "rows": [
                [
                  "Trigonal prism",
                  "6",
                  "0.528"
                ],
                [
                  "Pentagonal bipyramid",
                  "7",
                  "0.592"
                ],
                [
                  "Dodecahedral environment",
                  "8",
                  "0.668"
                ],
                [
                  "Icosahedral",
                  "12",
                  "0.902"
                ],
                [
                  "Cuboctahedral / equal spheres",
                  "12",
                  "1.000"
                ]
              ]
            },
            {
              "type": "callout",
              "label": "Caution",
              "text": "These values are hard-sphere geometric limits. Real crystal structures also depend on electrostatics, polarization/covalency, lattice energy, pressure and temperature. Radius ratio is a guide, not an absolute law.",
              "tone": "trap"
            }
          ]
        },
        {
          "title": "7. Coordination Number and Stoichiometry Contact Count",
          "blocks": [
            {
              "type": "p",
              "text": "For AₓBᵧ, counting A–B contacts from both species gives x·CN(A)=y·CN(B)."
            },
            {
              "type": "formula",
              "latex": "x\\\\,CN_A=y\\\\,CN_B",
              "display": "x·CN_A = y·CN_B."
            }
          ]
        }
      ],
      "traps": [
        "At an exact boundary such as 0.414, the simple radius-ratio model is at a limiting geometry; real structure selection needs energetic information.",
        "A larger coordination number is generally favoured by a larger cation/anion radius ratio, but radius ratio alone is not a universal predictor.",
        "Do not confuse ionic radii used in the rule with covalent or metallic radii."
      ],
      "examples": [
        {
          "title": "Example 1",
          "question": "r⁺=72 pm and r⁻=180 pm. Predict the classical coordination.",
          "steps": [
            "Ratio=72/180=0.400.",
            "0.225<0.400<0.414."
          ],
          "answer": "Tetrahedral coordination, CN≈4."
        },
        {
          "title": "Example 2 — Contact counting",
          "question": "In A₂B₃, each A has 6 B neighbours. Find CN of B.",
          "steps": [
            "xCN_A=yCN_B.",
            "2×6=3×CN_B."
          ],
          "answer": "CN_B=4."
        }
      ]
    }
  ],
  "sourceSections": [
    {
      "title": "Classical radius-ratio ranges",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Radius ratio $r_+/r_-$",
            "Ideal coordination",
            "Geometry"
          ],
          "rows": [
            [
              "$<0.155$",
              "2",
              "Linear"
            ],
            [
              "$0.155$–$0.225$",
              "3",
              "Triangular planar"
            ],
            [
              "$0.225$–$0.414$",
              "4",
              "Tetrahedral"
            ],
            [
              "$0.414$–$0.732$",
              "6",
              "Octahedral"
            ],
            [
              "$0.732$–$1.000$",
              "8",
              "Cubic"
            ]
          ]
        }
      ]
    },
    {
      "title": "Limiting ratio derivations",
      "blocks": [
        {
          "type": "derivation",
          "title": "Triangular site, CN 3",
          "lines": [
            "\\cos30^\\circ=\\frac{r_-}{r_-+r_+}"
          ],
          "result": "\\frac{r_+}{r_-}=\\frac{2-\\sqrt3}{\\sqrt3}=0.1547"
        },
        {
          "type": "derivation",
          "title": "Tetrahedral site, CN 4",
          "lines": [
            "\\sin\\left(\\frac{109^\\circ28\\prime}{2}\\right)=\\frac{r_-}{r_-+r_+}"
          ],
          "result": "\\frac{r_+}{r_-}=\\sqrt{\\frac32}-1=0.2247"
        },
        {
          "type": "derivation",
          "title": "Octahedral site, CN 6",
          "lines": [
            "2(r_++r_-)\\cos45^\\circ=2r_-"
          ],
          "result": "\\frac{r_+}{r_-}=\\sqrt2-1=0.4142"
        },
        {
          "type": "derivation",
          "title": "Cubic site, CN 8",
          "lines": [
            "\\sqrt3(2r_-)=2(r_-+r_+)"
          ],
          "result": "\\frac{r_+}{r_-}=\\sqrt3-1=0.7321"
        }
      ]
    },
    {
      "title": "Trigonal-prismatic site",
      "blocks": [
        {
          "type": "derivation",
          "title": "Regular trigonal prism",
          "lines": [
            "AC=R+r,\\quad BC=R,\\quad AB=\\frac{2R}{\\sqrt3}",
            "(R+r)^2=R^2+\\left(\\frac{2R}{\\sqrt3}\\right)^2"
          ],
          "result": "\\frac rR=\\sqrt{\\frac73}-1=0.5275"
        }
      ]
    },
    {
      "title": "Unit-cell volume formulae",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "System",
            "Volume"
          ],
          "rows": [
            [
              "Cubic",
              "$a^3$"
            ],
            [
              "Tetragonal",
              "$a^2c$"
            ],
            [
              "Orthorhombic",
              "$abc$"
            ],
            [
              "Hexagonal",
              "$abc\\sin120^\\circ=(\\sqrt3/2)a^2c$ when $a=b$"
            ],
            [
              "Monoclinic",
              "$abc\\sin\\beta$"
            ],
            [
              "Trigonal",
              "$a^3\\sqrt{1-3\\cos^2\\alpha+2\\cos^3\\alpha}$"
            ],
            [
              "Triclinic",
              "$abc\\sqrt{1-\\cos^2\\alpha-\\cos^2\\beta-\\cos^2\\gamma+2\\cos\\alpha\\cos\\beta\\cos\\gamma}$"
            ]
          ]
        }
      ]
    },
    {
      "title": "Limitations of radius-ratio rule",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "Ions are not perfectly rigid spheres.",
            "Covalency, polarization and directional bonding can stabilize unexpected coordination.",
            "Real crystals may distort; coordination polyhedra need not be regular.",
            "Temperature and pressure can change coordination number.",
            "The rule predicts a plausible site, not a guaranteed structure."
          ]
        }
      ]
    }
  ],
  "enrichments": [
    {
      "id": "polyhedra",
      "title": "Advanced Extension 5 — Coordination Polyhedra and Site Connectivity",
      "visual": "polyhedra",
      "intro": "Unit cells are useful for counting; coordination polyhedra are often better for understanding connectivity and chemical behaviour.",
      "paragraphs": [
        "A coordination polyhedron joins the centres of the nearest neighbours around a selected ion. CN 4 commonly gives a tetrahedron, CN 6 an octahedron and CN 8 a cube or another eight-coordinate polyhedron. The same coordination number can correspond to different geometries, so CN alone does not uniquely determine structure.",
        "Polyhedra can share corners, edges or faces. Sharing more vertices brings central cations closer and often increases electrostatic repulsion. This qualitative idea helps explain why many highly charged cations favour corner-sharing frameworks.",
        "Rock salt can be viewed as an edge-sharing network of MX₆ octahedra. Zinc blende is a framework of corner-sharing MX₄ tetrahedra. Fluorite is naturally described using cation-centred eight-coordinate cubes or anion-centred tetrahedra.",
        "Site connectivity also governs migration. A high number of connected vacant sites can create pathways for ionic conduction, whereas isolated holes do not necessarily allow long-range transport."
      ],
      "formulae": [
        "CN 4 → often tetrahedral",
        "CN 6 → often octahedral",
        "CN 8 → cubic or related polyhedron"
      ],
      "example": {
        "question": "Two solids both have cation CN = 6. One contains isolated octahedra and the other a three-dimensional edge-sharing network. Must their properties be similar?",
        "steps": [
          "CN specifies only the number of nearest neighbours.",
          "Connectivity changes cation–cation distances, dimensionality and transport paths."
        ],
        "answer": "No. Coordination number alone is insufficient; polyhedral connectivity matters."
      }
    },
    {
      "id": "radius-limit",
      "title": "Advanced Extension 6 — Radius Ratio: Derivation, Use and Limitations",
      "visual": "radius",
      "intro": "The radius-ratio rule is a geometrical limiting model, not an inviolable law of crystal structure.",
      "paragraphs": [
        "At the limiting ratio, surrounding anions touch one another and the central cation just touches every anion. Geometry then gives thresholds such as 0.225 for tetrahedral coordination, √2−1 ≈ 0.414 for octahedral coordination and √3−1 ≈ 0.732 for cubic coordination.",
        "The model assumes rigid spherical ions, purely ionic bonding, a single radius for each ion and no polarization. Real ionic radii depend on oxidation state, coordination number and bonding environment. Covalency, directional bonding and lattice-energy competition can stabilize structures outside simple radius-ratio predictions.",
        "A ratio inside a range suggests that a coordination is geometrically possible; it does not prove that it is the thermodynamic ground state. Pressure can favour higher coordination because it rewards denser packing. Temperature may stabilize structures with greater vibrational entropy.",
        "Use the rule as a first filter, then verify stoichiometry, site availability, charge balance, known structure type and whether the proposed arrangement allows reasonable contacts."
      ],
      "formulae": [
        "tetrahedral limit: r⁺/r⁻ = √(3/2) − 1 ≈ 0.225",
        "octahedral limit: r⁺/r⁻ = √2 − 1 ≈ 0.414",
        "cubic limit: r⁺/r⁻ = √3 − 1 ≈ 0.732"
      ],
      "example": {
        "question": "For r⁺/r⁻ = 0.40, which coordination is suggested by the simple rule, and what caution is required?",
        "steps": [
          "0.40 lies between 0.225 and 0.414.",
          "The simple table therefore suggests tetrahedral CN 4.",
          "The prediction assumes hard spheres and does not include polarization or competing lattice energies."
        ],
        "answer": "CN 4 is the geometrical prediction, not an absolute structural proof."
      }
    }
  ],
  "figures": [
    "linear-void",
    "triangular-void",
    "tetrahedral-ratio",
    "octahedral-ratio",
    "cubic-ratio",
    "trigonal-prism",
    "polyhedra-series",
    "unit-cell-volumes"
  ],
  "examples": [
    {
      "title": "Predict coordination",
      "question": "A salt has $r_+/r_-=0.38$. Predict the classical coordination.",
      "steps": [
        "$0.225<0.38<0.414$.",
        "This interval corresponds to tetrahedral coordination."
      ],
      "answer": "Predicted CN $=4$."
    },
    {
      "title": "Octahedral threshold",
      "question": "Derive the limiting cation radius for an octahedral hole formed by anions of radius $180\\,\\mathrm{pm}$.",
      "steps": [
        "$r_+/r_-=\\sqrt2-1=0.4142$.",
        "$r_+=0.4142\\times180$."
      ],
      "answer": "$r_+=74.6\\,\\mathrm{pm}$."
    },
    {
      "title": "Trigonal-prism numerical",
      "question": "For $R=150\\,\\mathrm{pm}$, estimate the limiting central radius in a regular trigonal prism.",
      "steps": [
        "Use $r/R=0.5275$.",
        "$r=0.5275\\times150$."
      ],
      "answer": "$r=79.1\\,\\mathrm{pm}$."
    },
    {
      "title": "Triclinic volume",
      "question": "Evaluate the cell-volume expression for $a=b=c=1$ and $\\alpha=\\beta=\\gamma=60^\\circ$.",
      "steps": [
        "Substitute $\\cos60^\\circ=1/2$.",
        "Inside the square root: $1-3/4+2(1/8)=1/2$."
      ],
      "answer": "$V=1/\\sqrt2$ in cubic length units."
    }
  ],
  "ncertExamples": [
    {
      "title": "Radius-ratio use",
      "question": "What information does the radius-ratio rule provide?",
      "steps": [
        "It compares cation size with the surrounding anion size.",
        "The ratio is matched to a limiting coordination geometry."
      ],
      "answer": "It gives an approximate likely coordination number and void type."
    },
    {
      "title": "Pressure effect",
      "question": "Why can high pressure increase coordination number?",
      "steps": [
        "Pressure favours denser structures.",
        "Higher coordination often packs particles more compactly."
      ],
      "answer": "A phase transition to a higher-CN structure may occur."
    }
  ],
  "pageAudit": [
    {
      "page": 60,
      "topic": "Radius-ratio derivations, trigonal prism, higher coordination polyhedra and cell volumes"
    },
    {
      "page": 61,
      "topic": "Radius-ratio derivations, trigonal prism, higher coordination polyhedra and cell volumes"
    },
    {
      "page": 62,
      "topic": "Radius-ratio derivations, trigonal prism, higher coordination polyhedra and cell volumes"
    },
    {
      "page": 63,
      "topic": "Radius-ratio derivations, trigonal prism, higher coordination polyhedra and cell volumes"
    }
  ]
} satisfies MasterPartData;

export default function Page(){ return <MasterPart data={data}/>; }
