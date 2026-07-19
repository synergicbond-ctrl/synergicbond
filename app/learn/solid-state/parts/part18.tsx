import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 18,
  slug: "voids-in-crystal-packing",
  title: "Voids in Crystal Packing",
} as const;

const data = {
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
} satisfies SolidStatePartData;

export default function SolidStatePart18() {
  return <SolidStatePartPage data={data} />;
}
