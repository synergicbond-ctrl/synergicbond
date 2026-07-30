import type { NoteBlock } from "../types";

export const part08ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Numerical strategy for bubble and dew temperature problems",
    "paragraphs": [
      "When vapour pressures depend exponentially on temperature, direct algebra is rarely possible. First bracket the solution between plausible pure-component boiling points. Define a residual function: f_bub(T)=Σx_ip_i°(T)−P for bubble temperature or f_dew(T)=Σy_iP/p_i°(T)−1 for dew temperature.",
      "Evaluate the residual at the bracket endpoints. Because pure vapour pressures rise monotonically, the sign usually changes once. Bisection repeatedly halves the interval and cannot diverge. Newton iteration is faster but requires derivatives and a reasonable initial guess.",
      "In hand calculations, two or three trial temperatures with interpolation may be sufficient. Report the equation solved and the temperature interval; do not present a numerical root without showing how it satisfies total pressure or the dew summation."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original."
  }
];
