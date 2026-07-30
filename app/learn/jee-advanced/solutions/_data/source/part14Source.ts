import type { NoteBlock } from "../types";

export const part14Source: NoteBlock[] = [
  {
    "kind": "theory",
    "title": "Diffusion and osmosis distinguished",
    "paragraphs": [
      "Diffusion is spontaneous net movement of particles from a region of higher chemical potential or concentration toward lower chemical potential until equilibrium is approached. Any species may diffuse if a path is available.",
      "Osmosis is the net movement of solvent through a semipermeable membrane from pure solvent or a more dilute solution toward a more concentrated solution. The membrane allows solvent to pass but blocks the solute on the experimental timescale.",
      "Both processes arise from molecular motion and chemical-potential differences, but osmosis is defined by membrane selectivity and solvent transfer. The source diagram places pure solvent outside a membrane pouch containing solution and shows solvent entering the pouch."
    ],
    "sourcePages": "Pages 65–66",
    "visual": "osmosis"
  },
  {
    "kind": "theory",
    "title": "Semipermeable membrane and selectivity",
    "paragraphs": [
      "A semipermeable membrane is selectively permeable: solvent molecules can cross while solute particles cannot. Selectivity depends on pore size, solubility in the membrane, diffusion coefficient, charge and specific interactions; it is not merely a mechanical sieve in every real membrane.",
      "The source gives an intuitive force picture. Solvent particles on the pure-solvent side experience a different escaping tendency from solvent particles in solution because solute lowers solvent chemical potential. The net transfer continues until pressure or concentration changes restore equality.",
      "An ideal semipermeable membrane is a theoretical limiting concept. Real membranes exhibit finite solute leakage, hydraulic resistance and concentration polarisation."
    ],
    "sourcePages": "Page 66"
  },
  {
    "kind": "theory",
    "title": "Theories of semipermeability retained from the notes",
    "paragraphs": [
      "The source lists a pore or sieve theory: membrane passages are large enough for solvent molecules but too small for solute particles. This model is useful for simple visualisation but fails for many dense polymer membranes with no fixed open pores.",
      "A capillary theory suggests that narrow channels or capillaries favour solvent transport through wetting and interfacial effects while excluding solute. A solution–diffusion interpretation, more general for modern membranes, treats solvent as dissolving in the membrane material and diffusing across it.",
      "The key operational condition is that the membrane permits a significant solvent flux while maintaining negligible solute flux during the experiment."
    ],
    "sourcePages": "Pages 66–67"
  },
  {
    "kind": "theory",
    "title": "Osmotic rise and hydrostatic balance",
    "paragraphs": [
      "When solution in a narrow tube is separated from pure solvent by a semipermeable membrane, solvent enters the solution and the liquid column rises. The hydrostatic pressure difference ρgh opposes further entry. At equilibrium, that pressure difference equals the osmotic pressure for the original concentration only if dilution during the rise is negligible or properly corrected.",
      "The source labels solution pressure greater than the surrounding solvent pressure and shows the final column height. In accurate work, density, gravitational acceleration and height must be expressed consistently.",
      "Osmotic pressure is not a pressure exerted by solute particles colliding with the membrane in a simple mechanical sense; it is the external pressure required to equalise solvent chemical potentials."
    ],
    "equations": [
      "π≈ρgh for a dilute solution in a narrow osmometer"
    ],
    "sourcePages": "Pages 67–68",
    "visual": "osmosis"
  },
  {
    "kind": "theory",
    "title": "Definition of osmotic pressure and reverse osmosis",
    "paragraphs": [
      "Osmotic pressure is the minimum excess pressure that must be applied on the solution side to stop net osmosis when solution and pure solvent are separated by an ideal semipermeable membrane. When an applied pressure greater than π is imposed on the solution, solvent is forced in the reverse direction; this is reverse osmosis.",
      "Reverse osmosis is used to desalinate water. The applied pressure must exceed the osmotic pressure plus additional losses caused by membrane resistance and concentration polarisation. The source notes the reversal condition qualitatively and connects it to water purification.",
      "At exactly π, the system is in dynamic equilibrium: solvent molecules cross in both directions at equal rates."
    ],
    "sourcePages": "Page 68",
    "visual": "osmosis"
  },
  {
    "kind": "theory",
    "title": "Temperature and concentration dependences of osmotic pressure",
    "paragraphs": [
      "The source introduces van’t Hoff’s empirical observations: at constant temperature, osmotic pressure is proportional to solute concentration; at constant concentration, it is proportional to absolute temperature. Combining them gives π=CRT for a dilute non-electrolyte solution.",
      "The constant is the universal gas constant when concentration is molar. One mole of an ideal nonvolatile solute in 22.414 L at 273.15 K has an osmotic pressure close to one atmosphere, paralleling an ideal gas.",
      "The analogy is formal and thermodynamic. Solute particles need not behave as a gas inside the liquid; the same mathematical form arises from ideal mixing and solvent chemical potential."
    ],
    "equations": [
      "π∝C at fixed T",
      "π∝T at fixed C",
      "π=CRT"
    ],
    "sourcePages": "Pages 68–69"
  }
];
