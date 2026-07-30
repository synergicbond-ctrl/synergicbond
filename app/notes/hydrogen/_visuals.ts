export interface HydrogenVisual {
  src: string;
  alt: string;
  caption: string;
}

/** Four dark, carefully selected teaching visuals for every lesson. */
export const HYDROGEN_VISUALS: Record<number, HydrogenVisual[]> = {
  1: [
    { src: "/notes/hydrogen/01_periodic_position.svg", alt: "Hydrogen position and similarities in the periodic table", caption: "Periodic position: similarities to Groups 1 and 17, and the reasons hydrogen remains unique." },
    { src: "/notes/hydrogen/02_isotopes.svg", alt: "Protium deuterium and tritium comparison", caption: "The three isotopes compared through nuclear composition, abundance and chemical significance." },
    { src: "/notes/hydrogen/03_zero_point_energy.svg", alt: "Zero point energy and isotope effect", caption: "Lower zero-point energy of deuterated bonds explains their slightly greater strength." },
    { src: "/notes/hydrogen/26_h2_mo_energy.svg", alt: "Molecular orbital diagram of H2 H2 plus and He2", caption: "MOT connects orbital occupancy with bond order, stability and magnetic behaviour." },
  ],
  2: [
    { src: "/notes/hydrogen/15_atomic_hydrogen_torch.svg", alt: "Atomic hydrogen torch and reactive hydrogen", caption: "Atomic hydrogen, recombination energy and the high-temperature torch." },
    { src: "/notes/hydrogen/27_ortho_para_spin.svg", alt: "Ortho and para hydrogen nuclear spin states", caption: "Nuclear-spin symmetry, rotational parity and the temperature-dependent equilibrium composition." },
    { src: "/notes/hydrogen/16_ortho_para_temperature_graph.svg", alt: "Ortho para hydrogen composition versus temperature", caption: "Why para-hydrogen dominates at low temperature and normal hydrogen approaches a 3:1 ratio." },
    { src: "/notes/hydrogen/04_industrial_hydrogen.svg", alt: "Industrial preparation routes of hydrogen", caption: "Laboratory and industrial routes arranged as one preparation map." },
  ],
  3: [
    { src: "/notes/hydrogen/14_steam_reforming_shift.svg", alt: "Steam reforming and water gas shift process", caption: "Steam reforming, shift conversion and the conditions that control industrial hydrogen yield." },
    { src: "/notes/hydrogen/28_surface_hydrogen_activation.svg", alt: "Activation of dihydrogen on a metal catalyst", caption: "Sigma donation and back-donation weaken H–H before dissociative adsorption and surface reaction." },
    { src: "/notes/hydrogen/13_hydrogen_economy.svg", alt: "Hydrogen energy cycle and hydrogen economy", caption: "Production, storage, transport and energy conversion in the hydrogen economy." },
    { src: "/notes/hydrogen/17_hydride_periodic_map.svg", alt: "Periodic distribution of hydride types", caption: "A transition visual connecting dihydrogen chemistry to the periodic classification of hydrides." },
  ],
  4: [
    { src: "/notes/hydrogen/06_hydride_classification.svg", alt: "Classification of ionic covalent and metallic hydrides", caption: "Hydrides classified by bonding, electron count and physical behaviour." },
    { src: "/notes/hydrogen/07_diborane.svg", alt: "Diborane bridged structure", caption: "Four terminal bonds and two bridge B–H–B interactions in diborane." },
    { src: "/notes/hydrogen/29_diborane_3c2e_mo.svg", alt: "Molecular orbital model of the diborane three centre two electron bond", caption: "The three-orbital MO model gives bonding, nonbonding and antibonding combinations." },
    { src: "/notes/hydrogen/33_hydride_transfer_mechanism.svg", alt: "Hydride transfer mechanism to a carbonyl compound", caption: "Hydride donation into carbonyl pi-star, followed by protonation of the alkoxide." },
  ],
  5: [
    { src: "/notes/hydrogen/08_hydrogen_bonding.svg", alt: "Intermolecular and intramolecular hydrogen bonding", caption: "Geometry, strength and the distinction between inter- and intramolecular hydrogen bonding." },
    { src: "/notes/hydrogen/30_hbond_orbital_donation.svg", alt: "Lone pair to sigma star orbital model of hydrogen bonding", caption: "The donor–acceptor n to sigma-star interaction supplements the electrostatic model." },
    { src: "/notes/hydrogen/31_water_mo_geometry.svg", alt: "Water geometry lone pairs and molecular orbitals", caption: "Water is bent and polar because of its occupied bonding and lone-pair orbital pattern." },
    { src: "/notes/hydrogen/22_d2o_comparison.svg", alt: "Comparison of ordinary water and heavy water", caption: "Mass, bond strength and physical-property differences between H₂O and D₂O." },
  ],
  6: [
    { src: "/notes/hydrogen/23_h2o2_dihedral.svg", alt: "Non planar open book structure of hydrogen peroxide", caption: "Lone-pair repulsion produces the non-planar peroxide structure." },
    { src: "/notes/hydrogen/24_anthraquinone_process.svg", alt: "Anthraquinone process for hydrogen peroxide", caption: "The industrial cyclic preparation of hydrogen peroxide." },
    { src: "/notes/hydrogen/32_h2o2_redox_mechanism.svg", alt: "Hydrogen peroxide bonding and decomposition mechanisms", caption: "Peroxide-bond activation, Fenton chemistry and dual redox behaviour." },
    { src: "/notes/hydrogen/21_zeolite_column.svg", alt: "Zeolite water softening column", caption: "Ion exchange and regeneration in a practical water-softening system." },
  ],
  7: [
    { src: "/notes/hydrogen/26_h2_mo_energy.svg", alt: "H2 molecular orbital revision diagram", caption: "MOT reference for reaction and exception analysis." },
    { src: "/notes/hydrogen/29_diborane_3c2e_mo.svg", alt: "Diborane three centre two electron bonding revision diagram", caption: "Electron-deficient bonding reference for the reaction atlas." },
    { src: "/notes/hydrogen/33_hydride_transfer_mechanism.svg", alt: "Hydride transfer revision mechanism", caption: "Electron-flow reference for complex-hydride reductions." },
    { src: "/notes/hydrogen/32_h2o2_redox_mechanism.svg", alt: "Hydrogen peroxide reaction mechanism revision diagram", caption: "Mechanistic reference for peroxide oxidation, reduction and decomposition." },
  ],
  8: [
    { src: "/notes/hydrogen/01_periodic_position.svg", alt: "Hydrogen periodic position revision visual", caption: "Foundation checkpoint: periodic position and oxidation states." },
    { src: "/notes/hydrogen/14_steam_reforming_shift.svg", alt: "Industrial hydrogen preparation revision visual", caption: "Preparation checkpoint: reforming, shift conversion and conditions." },
    { src: "/notes/hydrogen/20_ice_3d_lattice.svg", alt: "Ice hydrogen bonded lattice revision visual", caption: "Structure checkpoint: open ice lattice and anomalous density." },
    { src: "/notes/hydrogen/25_h2o2_redox_map.svg", alt: "Hydrogen peroxide redox map revision visual", caption: "Redox checkpoint: peroxide as oxidising and reducing agent." },
  ],
};
