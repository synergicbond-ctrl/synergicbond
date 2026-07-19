import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 3,
  slug: "polycrystalline-solids",
  title: "Polycrystalline Solids",
} as const;

const data = {
  "part": 3,
  "slug": "polycrystalline-solids",
  "title": "Polycrystalline Solids",
  "sourcePages": "pp. 2–3",
  "intro": "KOHINOOR places polycrystalline solids immediately after the crystalline–amorphous comparison. The key idea is that a bulk specimen may be made of many tiny crystals with different orientations while each crystallite remains internally crystalline.",
  "sections": [
    {
      "title": "1. Crystallites, Grains and Grain Boundaries",
      "blocks": [
        {
          "type": "p",
          "text": "A polycrystalline solid is an aggregate of many small crystalline domains called grains or crystallites. Each grain possesses its own long-range periodic order and crystallographic orientation."
        },
        {
          "type": "p",
          "text": "Where two differently oriented crystallites meet, the periodic arrangements do not match perfectly. The interface is called a grain boundary."
        },
        {
          "type": "bullets",
          "items": [
            "Many ordinary metallic samples are polycrystalline.",
            "A grain is crystalline; a grain boundary is only the interfacial region between grains.",
            "A large visible piece can therefore contain an enormous number of microscopic crystals."
          ]
        }
      ]
    },
    {
      "title": "2. Orientation Averaging and Macroscopic Behaviour",
      "blocks": [
        {
          "type": "p",
          "text": "A single crystal can show direction-dependent properties. If a polycrystal contains very many randomly oriented grains, those directional effects may statistically average, making the bulk specimen approximately isotropic."
        },
        {
          "type": "callout",
          "label": "Precision",
          "text": "Polycrystalline does not mean amorphous. Long-range order exists inside every crystallite, although the orientation changes from grain to grain.",
          "tone": "result"
        }
      ]
    },
    {
      "title": "3. Spatial Map",
      "blocks": [
        {
          "type": "ascii",
          "text": "Grain A            Grain B\n////////// | \\\\\\\\\\\n////////// | \\\\\\\\\\\n-----------+-----------  ← grain boundary\n|||||||||| | /////////\n|||| Grain C /////////",
          "title": "Schematic orientation map"
        },
        {
          "type": "p",
          "text": "The line separating regions is a grain boundary; the stroke direction inside each region symbolizes a different crystallographic orientation."
        }
      ]
    }
  ],
  "traps": [
    "Polycrystalline ≠ amorphous.",
    "Macroscopic isotropy does not prove absence of crystallinity.",
    "A textured polycrystal can remain macroscopically anisotropic because the grain orientations are not random."
  ],
  "examples": [
    {
      "title": "Example 1 — Conceptual",
      "question": "A metal sample is isotropic in bulk but electron microscopy shows many ordered grains. Is the sample amorphous?",
      "steps": [
        "Ordered grains prove crystallinity inside each domain.",
        "Random orientation can average anisotropy at the macroscopic scale."
      ],
      "answer": "The sample is polycrystalline, not amorphous."
    },
    {
      "title": "Example 2 — Multi-correct",
      "question": "Select correct statements: (A) grain boundaries separate different orientations; (B) every polycrystal is isotropic; (C) each grain may be anisotropic; (D) polycrystals have no long-range order.",
      "steps": [
        "A is correct.",
        "B is false because texture can produce anisotropy.",
        "C is correct.",
        "D is false because each grain has long-range order."
      ],
      "answer": "Correct options: A and C."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart03() {
  return <SolidStatePartPage data={data} />;
}
