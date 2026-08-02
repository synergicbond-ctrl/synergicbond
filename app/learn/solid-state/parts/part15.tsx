import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 15,
  slug: "density-of-unit-cell",
  title: "Density of Unit Cell",
} as const;

const data = {
  "part": 15,
  "slug": "density-of-unit-cell",
  "title": "Density of Unit Cell",
  "sourcePages": "p. 20",
  "intro": "This part derives the theoretical density formula and combines it with a BCC surface-gap calculation.",
  "sections": [
    {
      "title": "1. Density Derivation",
      "blocks": [
        {
          "type": "p",
          "text": "Mass of one formula unit or atom of molar mass M is M/N_A. If a cell contains Z formula units/atoms, its mass is ZM/N_A."
        },
        {
          "type": "formula",
          "latex": "m_{cell}=\\\\frac{ZM}{N_A}",
          "display": "m_cell = ZM/N_A."
        },
        {
          "type": "p",
          "text": "For a cubic cell V=a³."
        },
        {
          "type": "formula",
          "latex": "\\\\rho=\\\\frac{ZM}{N_Aa^3}",
          "display": "ρ = ZM/(N_A a³)."
        }
      ]
    },
    {
      "title": "2. BCC Interfacial Separation Along an Edge",
      "blocks": [
        {
          "type": "p",
          "text": "In BCC, corner atoms do not touch along the edge. The surface-to-surface gap between adjacent corner atoms is a−2r."
        },
        {
          "type": "formula",
          "latex": "r=\\\\frac{\\\\sqrt3}{4}a",
          "display": "For BCC, r = (√3/4)a."
        },
        {
          "type": "formula",
          "latex": "a-2r=a\\\\left(1-\\\\frac{\\\\sqrt3}{2}\\\\right)\\\\approx0.134a",
          "display": "Edge gap = a(1−√3/2) ≈ 0.134a."
        }
      ]
    },
    {
      "title": "3. Unit Discipline",
      "blocks": [
        {
          "type": "bullets",
          "items": [
            "1 pm = 10⁻¹⁰ cm.",
            "1 Å = 10⁻⁸ cm.",
            "Use molar mass in g mol⁻¹ to obtain density in g cm⁻³ when a is converted to cm."
          ]
        }
      ]
    }
  ],
  "traps": [
    "Use Z for the same chemical unit whose molar mass M is used.",
    "Never insert a in pm directly into a formula expecting cm³.",
    "In BCC, edge gap is not zero; contact is along the body diagonal."
  ],
  "examples": [
    {
      "title": "Example 1 — numerical",
      "question": "A BCC metal has adjacent-corner surface gap 60.3 pm and atomic mass 48. Find density.",
      "steps": [
        "0.134a≈60.3 pm ⇒ a≈450 pm.",
        "Convert a=4.50×10⁻⁸ cm.",
        "Use Z=2 and ρ=ZM/(N_Aa³)."
      ],
      "answer": "ρ ≈ 1.75 g cm⁻³."
    },
    {
      "title": "Example 2",
      "question": "An FCC metal has M=108 g mol⁻¹ and a=408 pm. Estimate density.",
      "steps": [
        "Z=4.",
        "a=4.08×10⁻⁸ cm.",
        "Substitute in ρ=4M/(N_Aa³)."
      ],
      "answer": "ρ ≈ 10.6 g cm⁻³."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart15() {
  return <SolidStatePartPage data={data} />;
}
