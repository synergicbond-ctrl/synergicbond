import { SolidStatePartPage, type SolidStatePartData } from "./_shared";

export const partInfo = {
  part: 11,
  slug: "symmetry-of-a-cube",
  title: "Symmetry Elements of a Cube",
} as const;

const data = {
  "part": 11,
  "slug": "symmetry-of-a-cube",
  "title": "Symmetry Elements of a Cube",
  "sourcePages": "pp. 15–17",
  "intro": "KOHINOOR counts mirror planes, rotational axes and the centre of inversion of a cube, giving the classroom total of 23 geometrical symmetry elements.",
  "sections": [
    {
      "title": "1. Planes of Symmetry (POS): 9",
      "blocks": [
        {
          "type": "p",
          "text": "Take a cube 0≤x,y,z≤1. There are 3 central rectangular mirror planes and 6 diagonal mirror planes."
        },
        {
          "type": "bullets",
          "items": [
            "Central planes: x=1/2, y=1/2, z=1/2.",
            "Diagonal planes: x=y, x+y=1, y=z, y+z=1, z=x, z+x=1."
          ]
        },
        {
          "type": "formula",
          "latex": "3+6=9",
          "display": "Total planes of symmetry = 9."
        }
      ]
    },
    {
      "title": "2. Axes of Symmetry (AOS): 13",
      "blocks": [
        {
          "type": "table",
          "headers": [
            "Axis type",
            "Geometrical line",
            "Count"
          ],
          "rows": [
            [
              "C₄ / tetrad",
              "Through centres of opposite faces",
              "3"
            ],
            [
              "C₃ / triad",
              "Along body diagonals joining opposite corners",
              "4"
            ],
            [
              "C₂ / diad",
              "Through midpoints of opposite parallel edges",
              "6"
            ]
          ]
        },
        {
          "type": "formula",
          "latex": "3+4+6=13",
          "display": "Total rotational axes = 13."
        }
      ]
    },
    {
      "title": "3. Centre of Symmetry",
      "blocks": [
        {
          "type": "p",
          "text": "The inversion centre is the geometric centre of the cube: (1/2,1/2,1/2). Every point r relative to the centre maps to −r."
        },
        {
          "type": "formula",
          "latex": "9+13+1=23",
          "display": "Elementary geometrical-element count used in the notes: 9 + 13 + 1 = 23."
        }
      ]
    },
    {
      "title": "4. Coordinate Blueprint",
      "blocks": [
        {
          "type": "ascii",
          "text": "C₄ axes: x=1/2,y=1/2  (parallel z), and cyclic permutations\nC₃ axes: (t,t,t), (t,t,1−t), (t,1−t,t), (1−t,t,t)\nC₂ axes: lines through opposite edge midpoints\nMirror planes: x=1/2, y=1/2, z=1/2 and six diagonal planes\nInversion centre: (1/2,1/2,1/2)",
          "title": "Exact symmetry map"
        }
      ]
    }
  ],
  "traps": [
    "The “23” is an elementary count of geometrical symmetry elements used in the source, not the order (number of operations) of the full cubic point group.",
    "A body diagonal joins two opposite corners, so 8 corners give 4 body diagonals, not 8.",
    "A C₄ axis is counted as one axis even though 90°, 180° and 270° rotations are possible about it."
  ],
  "examples": [
    {
      "title": "Example 1 — Integer",
      "question": "How many C₃ axes does a cube possess?",
      "steps": [
        "C₃ axes lie along body diagonals.",
        "8 vertices pair into 4 opposite-vertex pairs."
      ],
      "answer": "4 C₃ axes."
    },
    {
      "title": "Example 2 — Total",
      "question": "Using the KOHINOOR geometrical-element convention, find the total symmetry elements.",
      "steps": [
        "Mirror planes = 9.",
        "Rotational axes = 13.",
        "Inversion centre = 1."
      ],
      "answer": "Total = 23."
    }
  ]
} satisfies SolidStatePartData;

export default function SolidStatePart11() {
  return <SolidStatePartPage data={data} />;
}
