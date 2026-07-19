import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 13,
  slug: "atomic-radius-edge-length-relations",
  title: "Atomic Radius–Edge Length Relations",
} as const;

const data = {
  "part": 13,
  "slug": "atomic-radius-edge-length-relations",
  "title": "Atomic Radius–Edge Length Relations",
  "sourcePages": "p. 18",
  "intro": "KOHINOOR next derives the contact geometry connecting cube edge length a and atomic radius r for SC, FCC and BCC.",
  "sections": [
    {
      "title": "1. Simple Cubic",
      "blocks": [
        {
          "type": "p",
          "text": "Nearest neighbours touch along an edge. One edge contains two radii."
        },
        {
          "type": "formula",
          "latex": "a=2r",
          "display": "a = 2r  ⇒  r = a/2."
        }
      ]
    },
    {
      "title": "2. Face-Centred Cubic",
      "blocks": [
        {
          "type": "p",
          "text": "Atoms touch along a face diagonal, not along an edge."
        },
        {
          "type": "formula",
          "latex": "d_{face}=\\\\sqrt{a^2+a^2}=a\\\\sqrt2",
          "display": "Face diagonal = a√2."
        },
        {
          "type": "formula",
          "latex": "4r=a\\\\sqrt2",
          "display": "4r = a√2  ⇒  a = 2√2 r  ⇒  r = a/(2√2)."
        },
        {
          "type": "ascii",
          "text": "corner ●───────● corner\n       ╲   ●   ╱\n        ╲ face╱\n         ╲ctr╱\ncontact chain along face diagonal: r + 2r + r = 4r",
          "title": "FCC contact line"
        }
      ]
    },
    {
      "title": "3. Body-Centred Cubic",
      "blocks": [
        {
          "type": "p",
          "text": "Atoms touch along the body diagonal."
        },
        {
          "type": "formula",
          "latex": "d_{body}=\\\\sqrt{a^2+(a\\\\sqrt2)^2}=a\\\\sqrt3",
          "display": "Body diagonal = a√3."
        },
        {
          "type": "formula",
          "latex": "4r=a\\\\sqrt3",
          "display": "4r = a√3  ⇒  a = 4r/√3  ⇒  r = (√3/4)a."
        },
        {
          "type": "ascii",
          "text": "(0,0,0)  ●────●  (1/2,1/2,1/2)  ────●  (1,1,1)",
          "title": "BCC body-diagonal contact"
        }
      ]
    }
  ],
  "traps": [
    "SC contact: edge; FCC contact: face diagonal; BCC contact: body diagonal.",
    "Corner atoms in FCC/BCC do not touch along the cube edge.",
    "Use centre-to-centre distances, not visible surface gaps, when deriving geometry."
  ],
  "examples": [
    {
      "title": "Example 1",
      "question": "A BCC metal has r=125 pm. Find a.",
      "steps": [
        "Use a=4r/√3.",
        "a=500/√3 pm."
      ],
      "answer": "a ≈ 288.7 pm."
    },
    {
      "title": "Example 2",
      "question": "An FCC face diagonal is 600 pm. Find r.",
      "steps": [
        "Along the face diagonal, total contact length = 4r.",
        "4r=600 pm."
      ],
      "answer": "r = 150 pm."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart13() {
  return <SolidStatePartPage data={data} />;
}
