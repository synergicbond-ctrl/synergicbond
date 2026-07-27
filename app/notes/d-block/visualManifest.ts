export type Figure = {
  src: string;
  alt: string;
  caption: string;
  anchor: string;
  width: number;
  height: number;
};

export const FIGURES: Figure[] = [
  {
    src: "/notes/d-block/visuals/the-leaky-shield-in-lanthanoids.webp",
    alt: "Diagram showing weak shielding by 4f electrons during lanthanoid contraction",
    caption: "Read the poor shielding by 4f electrons as the cause of the extra contraction before the 5d series.",
    anchor: "p2-mechanism-of-lanthanoid-contraction",
    width: 1145,
    height: 1374,
  },
  {
    src: "/notes/d-block/visuals/density-profile-of-the-3d-series.webp",
    alt: "Density profile across the 3d transition series from scandium to zinc",
    caption: "Compare mass and atomic volume together: density rises overall across the 3d row before falling at zinc.",
    anchor: "p2-first-transition-series",
    width: 1774,
    height: 887,
  },
  {
    src: "/notes/d-block/visuals/the-heavyweight-champions-of-the-periodic-table.webp",
    alt: "Osmium and iridium highlighted as exceptionally dense elements",
    caption: "Use osmium and iridium as the extreme 5d-density examples created by large mass packed into compact volume.",
    anchor: "p2-high-density-of-5d-metals",
    width: 1774,
    height: 887,
  },
  {
    src: "/notes/d-block/visuals/ionization-energies-in-the-3d-series.webp",
    alt: "First, second, and third ionisation energies across the 3d series",
    caption: "Track the first three ionisation energies across the series; the trend is gentle and contains electronic irregularities.",
    anchor: "p3-ion-formation-chain",
    width: 1672,
    height: 941,
  },
  {
    src: "/notes/d-block/visuals/energetic-jumps-and-subshell-stability.webp",
    alt: "Energetic jumps associated with stable d5 and d10 subshells",
    caption: "Notice where further electron removal disrupts d5 or d10 arrangements and therefore costs disproportionately more energy.",
    anchor: "p3-ion-formation-chain",
    width: 1672,
    height: 941,
  },
  {
    src: "/notes/d-block/visuals/electrode-potentials-across-the-3d-series.webp",
    alt: "Standard M2+ to M electrode potentials across the 3d series",
    caption: "Read E°(M²⁺/M) as a trend in aqueous redox behaviour, not as a one-number measure of every kind of reactivity.",
    anchor: "p3-selected-first-row-values",
    width: 1672,
    height: 941,
  },
  {
    src: "/notes/d-block/visuals/redox-potentials-across-the-3d-series.webp",
    alt: "Redox-potential trend related to atomisation, ionisation, and hydration",
    caption: "Infer that atomisation, ionisation and hydration compete to produce the observed redox-potential pattern.",
    anchor: "p3-potential-is-not-a-universal-constant-of-reactivity",
    width: 1672,
    height: 941,
  },
  {
    src: "/notes/d-block/visuals/explaining-reactive-anomalies-in-metals.webp",
    alt: "Explanation of manganese, nickel, and zinc anomalies in 3d-series reactivity",
    caption: "Use the Mn, Ni and Zn deviations as reminders that electron configuration and energy balance interrupt a smooth trend.",
    anchor: "p3-selected-first-row-values",
    width: 1672,
    height: 941,
  },
  {
    src: "/notes/d-block/visuals/ligands-and-color-transitions-diagram.webp",
    alt: "Nickel complexes showing ligand-dependent colour changes",
    caption: "Compare the nickel complexes to see that ligand identity changes splitting and therefore the colour observed.",
    anchor: "p6-ligand-dependent-nickel-example",
    width: 1672,
    height: 941,
  },
];
