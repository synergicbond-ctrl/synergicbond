import type { NoteBlock } from "../types";

export const part10Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Thermodynamic condition for an azeotrope",
    "paragraphs": [
      "At vapour–liquid equilibrium, y_iP=x_iγ_ip_i° for a low-pressure liquid. At an azeotrope y_i=x_i for every component, so P=γ_ip_i° for each component. In a binary system this requires γ_Ap_A°=γ_Bp_B°. The activity coefficients therefore compensate for the difference in pure-component vapour pressures.",
      "The extremum condition follows from Gibbs–Duhem. Along an isothermal binary VLE curve, dP/dx_A is proportional to y_A−x_A. Hence dP/dx_A=0 when y_A=x_A. At constant pressure, the corresponding boiling-temperature curve has dT/dx_A=0.",
      "This explains why azeotropy is a collective property of nonideality and volatility. Strong deviation alone is not sufficient unless it produces the equality at an intermediate composition."
    ],
    "equations": [
      "y_iP=x_iγ_ip_i°",
      "At azeotrope: y_i=x_i and P=γ_ip_i°",
      "Binary condition: γ_Ap_A°=γ_Bp_B°"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "How azeotropes are broken in practice",
    "paragraphs": [
      "Ordinary fractional distillation cannot cross an azeotropic composition because vapour and liquid are identical there. Industrial methods alter the equilibrium rather than attempting more stages. Pressure-swing distillation uses the fact that azeotropic composition may change with pressure. A second pressure can create a different distillation path.",
      "Azeotropic or extractive distillation adds a third component that changes relative volatilities. The entrainer may form a new low-boiling azeotrope with one component or may selectively reduce the volatility of another. Membranes, adsorption and chemical reaction can also separate azeotropic mixtures.",
      "For JEE reasoning, the key statement is that the limitation belongs to a particular binary VLE at a particular pressure. Changing pressure or adding another component changes the phase equilibrium and may remove the barrier."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
