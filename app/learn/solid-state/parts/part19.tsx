import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 19,
  slug: "radius-ratio-and-limiting-geometry",
  title: "Radius Ratio and Limiting Geometry",
} as const;

const data = {
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
} satisfies SolidStatePartData;

export default function SolidStatePart19() {
  return <SolidStatePartPage data={data} />;
}
