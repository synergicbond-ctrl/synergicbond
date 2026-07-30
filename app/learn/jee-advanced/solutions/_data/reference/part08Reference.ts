import type { NoteBlock } from "../types";

export const part08Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Antoine equation and practical vapour-pressure interpolation",
    "paragraphs": [
      "Clausius–Clapeyron is physically transparent but assumes constant enthalpy of vaporisation. Practical vapour-pressure data are often correlated by the Antoine equation log₁₀p=A−B/(C+T), with constants valid only over a stated temperature interval and for specified pressure and temperature units.",
      "In a bubble-temperature calculation, evaluate p_A°(T) and p_B°(T) from the correlation and solve x_Ap_A°+x_Bp_B°=P. In a dew-temperature calculation, solve y_A/p_A°+y_B/p_B°=1/P. Bisection is robust because vapour pressure rises monotonically with temperature over the liquid range.",
      "A JEE problem may provide two vapour-pressure data points and ΔH_vap instead of Antoine constants. The same root-finding logic applies after Clausius–Clapeyron supplies each p_i°(T)."
    ],
    "equations": [
      "log₁₀p=A−B/(C+T)"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Reading a T–x–y diagram without reversing the phase regions",
    "paragraphs": [
      "At constant pressure, low temperature favours liquid and high temperature favours vapour. Therefore the liquid region lies below the bubble curve and the vapour region above the dew curve. This is opposite to the vertical ordering on a P–x–y diagram at constant temperature, where high pressure favours liquid.",
      "A heating path at fixed overall composition is vertical. The first bubble appears at the lower curve. Inside the envelope, the horizontal tie line gives liquid composition on the bubble boundary and vapour composition on the dew boundary. At the upper curve the last liquid disappears and the vapour composition equals the overall composition.",
      "At an azeotrope, the bubble and dew curves touch at an extremum and x=y. This contact point is not a critical point: liquid and vapour remain distinct phases, but their compositions coincide."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
