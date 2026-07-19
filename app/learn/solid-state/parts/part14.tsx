import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 14,
  slug: "coordination-number-and-neighbour-shells",
  title: "Coordination Number and Neighbour Shells",
} as const;

const data = {
  "part": 14,
  "slug": "coordination-number-and-neighbour-shells",
  "title": "Coordination Number and Neighbour Shells",
  "sourcePages": "pp. 19 and 21–23",
  "intro": "KOHINOOR first lists nearest-neighbour distances and then develops successive coordination shells for SC, FCC and BCC.",
  "sections": [
    {
      "title": "1. Distance from a Lattice Vector",
      "blocks": [
        {
          "type": "formula",
          "latex": "d=a\\\\sqrt{u^2+v^2+w^2}",
          "display": "For a cubic lattice vector a[u,v,w], d = a√(u²+v²+w²)."
        },
        {
          "type": "p",
          "text": "A coordination shell contains all equivalent neighbours at the same distance from the reference atom."
        }
      ]
    },
    {
      "title": "2. Simple Cubic — First Six Shells",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Shell",
            "Representative vector",
            "Distance",
            "Number"
          ],
          "rows": [
            [
              "1st",
              "[1,0,0]",
              "a",
              "6"
            ],
            [
              "2nd",
              "[1,1,0]",
              "√2 a",
              "12"
            ],
            [
              "3rd",
              "[1,1,1]",
              "√3 a",
              "8"
            ],
            [
              "4th",
              "[2,0,0]",
              "2a",
              "6"
            ],
            [
              "5th",
              "[2,1,0]",
              "√5 a",
              "24"
            ],
            [
              "6th",
              "[2,1,1]",
              "√6 a",
              "24"
            ]
          ]
        }
      ]
    },
    {
      "title": "3. FCC — Definitive Shell Table",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Shell",
            "Representative vector",
            "Distance",
            "Number"
          ],
          "rows": [
            [
              "1st",
              "[0,1/2,1/2]",
              "a/√2",
              "12"
            ],
            [
              "2nd",
              "[1,0,0]",
              "a",
              "6"
            ],
            [
              "3rd",
              "[1,1/2,1/2]",
              "√(3/2) a",
              "24"
            ],
            [
              "4th",
              "[1,1,0]",
              "√2 a",
              "12"
            ],
            [
              "5th",
              "[3/2,1/2,0]",
              "√(5/2) a",
              "24"
            ]
          ]
        },
        {
          "type": "p",
          "text": "The source also flags higher-shell multiplicities such as 48 and 72 for later shells; JEE problems are usually built from the first few shells."
        }
      ]
    },
    {
      "title": "4. BCC — First Six Shells",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Shell",
            "Representative vector",
            "Distance",
            "Number"
          ],
          "rows": [
            [
              "1st",
              "[1/2,1/2,1/2]",
              "(√3/2)a",
              "8"
            ],
            [
              "2nd",
              "[1,0,0]",
              "a",
              "6"
            ],
            [
              "3rd",
              "[1,1,0]",
              "√2 a",
              "12"
            ],
            [
              "4th",
              "[3/2,1/2,1/2]",
              "(√11/2)a",
              "24"
            ],
            [
              "5th",
              "[1,1,1]",
              "√3 a",
              "8"
            ],
            [
              "6th",
              "[2,0,0]",
              "2a",
              "6"
            ]
          ]
        }
      ]
    },
    {
      "title": "5. Coordination Number",
      "blocks": [
        {
          "type": "callout",
          "label": "First-shell CN",
          "text": "SC = 6, BCC = 8, FCC/CCP = 12. Coordination number normally means first-neighbour count unless a shell number is explicitly stated.",
          "tone": "result"
        }
      ]
    }
  ],
  "traps": [
    "Do not add different-distance shells together when asked for coordination number.",
    "For FCC, the nearest-neighbour distance is a/√2, not a.",
    "For BCC, nearest neighbours are the body-centre/corner pairs at √3 a/2."
  ],
  "examples": [
    {
      "title": "Example 1 — Source-style",
      "question": "An FCC metal has third-neighbour distance 400 pm. Find atomic radius.",
      "steps": [
        "d₃=√(3/2)a=400 pm.",
        "For FCC, a=2√2 r.",
        "Thus d₃=√(3/2)(2√2 r)=2√3 r.",
        "r=400/(2√3)."
      ],
      "answer": "r = 200/√3 ≈ 115.5 pm."
    },
    {
      "title": "Example 2 — Multi-correct",
      "question": "For BCC, identify correct pairs: (A) 1st shell 8 at √3a/2; (B) 2nd shell 6 at a; (C) 3rd shell 12 at √2a; (D) CN=12.",
      "steps": [
        "A, B and C match the shell table.",
        "Coordination number is first-shell count = 8."
      ],
      "answer": "Correct: A, B, C."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart14() {
  return <SolidStatePartPage data={data} />;
}
