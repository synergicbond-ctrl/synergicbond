import type { NoteBlock } from "../types";

export const part14Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Osmosis as solvent chemical-potential equalisation",
    "paragraphs": [
      "Pure solvent has a higher chemical potential than solvent in a solution at the same temperature and pressure. A membrane permeable only to solvent allows transfer toward the solution. Accumulated hydrostatic pressure on the solution side raises its solvent chemical potential until the pressure effect exactly compensates the mixing effect.",
      "For small pressure differences, dμ₁=V̄₁dp. Equilibrium gives V̄₁π=−RTlnx₁. In the dilute limit this becomes πV=n₂RT. The pressure is therefore a thermodynamic consequence of solvent activity, not a unique mechanical force exerted by solute against the membrane.",
      "This viewpoint also handles two solutions: equilibrium requires equality of solvent chemical potential, so pressure difference depends on the difference in solvent activities. The simple Δπ=RTΔC form is the ideal-dilute limit."
    ],
    "equations": [
      "V̄₁π=−RTlnx₁",
      "Dilute limit: πV=n₂RT"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Reverse osmosis, membrane performance and energy demand",
    "paragraphs": [
      "A reverse-osmosis membrane is characterised by solvent permeability, solute rejection and mechanical stability. The solvent flux is often approximated as J_w=A(ΔP−Δπ), where ΔP is applied hydraulic pressure and Δπ is osmotic-pressure difference. Solute flux depends on a separate permeability and concentration difference.",
      "Applied pressure must exceed osmotic pressure, but practical operation requires an additional driving force to obtain useful flux. As water permeates, rejected salt accumulates near the membrane, increasing local Δπ in a phenomenon called concentration polarisation. Pretreatment reduces fouling by suspended solids, microbes and sparingly soluble salts.",
      "The minimum reversible work is linked to the free energy of mixing. Real plants consume more energy because of pump inefficiency, pressure losses and irreversible transport. These details deepen the simple JEE statement that pressure greater than π reverses osmosis."
    ],
    "equations": [
      "J_w≈A(ΔP−Δπ)"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
