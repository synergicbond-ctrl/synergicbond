import type { NoteBlock } from "../types";

export const part02ReferenceBonus: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Gas solubility in lakes, oceans and pressurised systems",
    "paragraphs": [
      "Gas solubility controls oxygen availability in natural waters. Warming lowers equilibrium oxygen concentration while biological demand often rises, so warm stagnant water is vulnerable to oxygen depletion. Salinity further reduces solubility, and hydrostatic pressure increases it with depth. Actual dissolved oxygen can depart from equilibrium because photosynthesis, respiration, turbulence and mass-transfer rates act simultaneously.",
      "In pressure vessels, dissolved gas can become supersaturated when pressure is released. Bubble formation requires nucleation; a perfectly clean liquid may remain temporarily supersaturated. Scratches, dust and dissolved impurities provide nucleation sites. The rapid foam from a carbonated drink therefore combines equilibrium driving force with nucleation and transport kinetics.",
      "Industrial gas absorption uses tall columns in which gas and liquid flow countercurrently. Henry’s law gives the equilibrium line, while the difference between actual and equilibrium compositions drives mass transfer. High pressure, low temperature and a chemically compatible solvent improve absorption, but regeneration then requires energy or pressure reduction."
    ],
    "sourceLabel": "Extended reference-depth synthesis from standard solution thermodynamics and separation-process texts; wording and examples are original."
  }
];
