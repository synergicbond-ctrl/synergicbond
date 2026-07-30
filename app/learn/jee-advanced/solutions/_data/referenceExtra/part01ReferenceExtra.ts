import type { NoteBlock } from "../types";

export const part01ReferenceExtra: NoteBlock[] = [
  {
    "kind": "reference",
    "title": "Partial molar quantities and composition-dependent properties",
    "paragraphs": [
      "The volume, enthalpy or Gibbs energy contributed by one mole of a component in a mixture is a partial molar quantity. It is defined by differentiating the total extensive property with respect to the amount of that component while temperature, pressure and all other component amounts are held fixed. Partial molar quantities generally depend on composition because inserting a molecule into a mixture changes interactions and packing differently at different compositions.",
      "For an ideal solution, partial molar volume is often close to pure-component molar volume and partial molar enthalpy of mixing is zero, but partial molar Gibbs energy contains RTlnx_i. In a real solution, contraction or expansion on mixing means the total volume is not simply the sum of pure-component volumes. Density-based concentration conversions should therefore use measured solution density rather than assuming volume additivity.",
      "The Gibbs–Duhem equation links composition changes of the component chemical potentials. In a binary mixture at constant temperature and pressure, x_A dμ_A+x_B dμ_B=0. One component cannot show an arbitrary activity change independent of the other. This constraint later explains why an azeotropic pressure extremum coincides with equal liquid and vapour compositions."
    ],
    "sourceLabel": "Additional reference-depth synthesis from standard physical chemistry and solution-thermodynamics treatments; wording, examples and organisation are original.",
    "equations": [
      "X̄_i=(∂X/∂n_i)_{T,P,n_j}",
      "X=Σn_iX̄_i",
      "At fixed T,P: Σx_i dμ_i=0"
    ]
  }
];
