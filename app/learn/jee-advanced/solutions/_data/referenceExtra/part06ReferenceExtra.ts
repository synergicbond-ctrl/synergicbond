import type { NoteBlock } from "../types";

export const part06ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Flash separation with heat effects",
    "paragraphs": [
      "The source piston problem is isothermal, so only phase equilibrium and material balance are required. In an adiabatic flash, temperature is unknown and an energy balance must be solved together with VLE. Feed enthalpy equals the sum of liquid and vapour outlet enthalpies, and latent heat determines how much material vaporises.",
      "An isenthalpic pressure drop through a valve can partially vaporise a liquid because the lower-pressure equilibrium requires a vapour fraction. This is flash evaporation. Conversely, compressing a vapour while removing heat can generate condensate. The phase envelope identifies possible states, but the energy balance identifies the actual temperature and phase fraction.",
      "JEE questions usually provide constant temperature or direct heat data, yet distinguishing isothermal, adiabatic and isenthalpic paths prevents inappropriate use of a single phase diagram."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "H_feed=Lh_L+Vh_V",
      "F=L+V"
    ]
  }
];
