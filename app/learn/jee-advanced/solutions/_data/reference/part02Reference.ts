import type { NoteBlock } from "../types";

export const part02Reference: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Thermodynamic origin of gas solubility and the sign of the temperature effect",
    "paragraphs": [
      "Dissolving a gas requires removal of a molecule from the gas phase, formation of a cavity in the liquid and creation of gas–solvent contacts. The net enthalpy can be negative or positive, but physical dissolution of many common gases in water is exothermic. The entropy change is usually negative because a freely translating gas molecule becomes confined and solvated. Consequently, the free energy of transfer becomes less favourable as temperature rises, and solubility decreases.",
      "A rigorous expression uses equality of gas and dissolved chemical potentials. At moderate pressure, gas fugacity replaces pressure and dissolved activity replaces mole fraction: f_i=H_i a_i. The familiar p_i=K_Hx_i follows when gas is ideal, solution is dilute and the selected Henry constant absorbs the standard-state terms.",
      "Different books tabulate Henry constants as p/x, x/p, concentration/pressure or pressure/concentration. A numerical value has meaning only with its definition and units. The safest practice is to write the law exactly as defined in the problem and check whether larger constant means larger or smaller solubility."
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  },
  {
    "kind": "reference",
    "title": "Salting out, physiological decompression and practical uses of Henry’s law",
    "paragraphs": [
      "Adding an electrolyte to water often reduces the solubility of a nonpolar gas. Hydrated ions organise and strongly bind surrounding water molecules, leaving less favourable free volume for gas solvation. This salting-out effect is represented empirically by the Setschenow relation, in which the logarithm of the solubility ratio varies with salt concentration. It explains why gases can be less soluble in seawater than in pure water at the same pressure and temperature.",
      "In deep diving, elevated ambient pressure increases the amount of nitrogen dissolved in blood and tissues. Rapid ascent lowers external pressure faster than nitrogen can be eliminated through the lungs, so bubbles may form. Controlled decompression allows dissolved gas to leave gradually. The phenomenon is an application of pressure-dependent solubility, though real physiology involves multiple tissues, perfusion rates and nonideal transport.",
      "Carbonated beverages are bottled under high CO₂ pressure and often at low temperature. Opening the container lowers CO₂ partial pressure; nucleation sites then allow supersaturated dissolved gas to form bubbles. Warming accelerates escape because solubility decreases and diffusion becomes faster."
    ],
    "equations": [
      "Typical salting-out form: log(S₀/S)=k_s c_salt"
    ],
    "sourceLabel": "Reference-depth synthesis from standard physical chemistry treatments including Atkins, Mortimer, Petrucci, Zumdahl and advanced JEE pedagogy; wording and organisation are original."
  }
];
