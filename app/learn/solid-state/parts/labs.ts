/**
 * Which Crystal Lab animation goes on which page.
 * Keys: `hash` is the lab deep link (structure/mode, e.g. "fcc/view"); `caption` is shown under it.
 * Parts with no real geometry to animate (defects, electrical, magnetic) have no entry.
 */
export type LabSpec = { hash: string; title: string; caption: string };

/** 23-part chapter pages (keyed by part number). Part 17 already has its own fcc-layers animation. */
export const CHAPTER_LABS: Record<number, LabSpec[]> = {
  1: [{ hash: "fcc/view", title: "Animation: the fcc unit cell", caption: "Rotate the unit cell to see how one lattice repeats in space." }],
  4: [
    { hash: "nacl/view", title: "Animation: NaCl (ionic)", caption: "Ionic solid: Na⁺ and Cl⁻ alternate on one lattice." },
    { hash: "diamond/view", title: "Animation: diamond (covalent)", caption: "Covalent solid: each atom bonded to four neighbours." },
  ],
  5: [{ hash: "sc/view", title: "Animation: simple cubic lattice", caption: "The lattice points and the unit cell that repeats them." }],
  6: [{ hash: "sc/share", title: "Animation: atom sharing", caption: "Corner atoms are shared by 8 cells, so each counts as 1/8." }],
  7: [{ hash: "bcc/view", title: "Animation: body-centred cell", caption: "A primitive cell has atoms only at corners; a centred cell has one extra." }],
  8: [{ hash: "sc/grow", title: "Animation: building the lattice", caption: "Stacking cells in 1D, 2D and 3D to make the full crystal." }],
  10: [{ hash: "fcc/grow", title: "Animation: crystallising a lattice", caption: "Repeating one cell builds the 14 Bravais lattices." }],
  12: [{ hash: "fcc/share", title: "Animation: counting atoms per cell (Z)", caption: "Shared corner and face atoms, counted with 1/8 and 1/2." }],
  13: [{ hash: "fcc/pack", title: "Animation: atoms touching across the face", caption: "The edge length depends on how the atoms touch." }],
  14: [
    { hash: "fcc/cn", title: "Animation: coordination number (fcc)", caption: "Each atom in fcc touches 12 neighbours." },
    { hash: "bcc/cn", title: "Animation: coordination number (bcc)", caption: "Each atom in bcc touches 8 neighbours." },
  ],
  16: [{ hash: "nacl/share", title: "Animation: NaCl formula from atom sharing", caption: "Count the particles inside the cell to get the formula." }],
  17: [{ hash: "bcc/pack", title: "Animation: packing in bcc", caption: "bcc packs about 68% of the space. fcc and hcp pack 74%." }],
  18: [{ hash: "fcc/voids", title: "Animation: voids in fcc", caption: "Tetrahedral and octahedral holes between the atoms." }],
  19: [{ hash: "cscl/cn", title: "Animation: CsCl coordination", caption: "The 8-fold cube of neighbours around each ion." }],
  20: [
    { hash: "zns/view", title: "Animation: zinc blende (ZnS)", caption: "Zn and S in the zinc blende arrangement." },
    { hash: "cscl/view", title: "Animation: caesium chloride (CsCl)", caption: "Two interpenetrating simple cubic lattices." },
  ],
};

/** 10-part Master edition pages (keyed by master part number). */
export const MASTER_LABS: Record<number, LabSpec[]> = {
  1: [
    { hash: "fcc/view", title: "Animation: the unit cell", caption: "Rotate the cell to see the lattice that repeats in space." },
    { hash: "nacl/view", title: "Animation: NaCl structure", caption: "A real crystal: lattice plus basis gives the structure." },
  ],
  2: [
    { hash: "sc/share", title: "Animation: atom sharing", caption: "Count shared corner and face atoms with 1/8 and 1/2." },
    { hash: "fcc/grow", title: "Animation: crystallising a lattice", caption: "Repeat one cell to build the Bravais lattice." },
  ],
  3: [
    { hash: "fcc/cn", title: "Animation: coordination number (fcc)", caption: "Each atom in fcc touches 12 neighbours." },
    { hash: "fcc/pack", title: "Animation: contact along the face diagonal", caption: "Use the contact direction to relate edge length to radius." },
  ],
  4: [
    { hash: "fcc/layers/scp", title: "Animation: fcc built from square layers", caption: "Three square close-packed layers make the cube." },
    { hash: "bcc/pack", title: "Animation: packing in bcc", caption: "bcc fills about 68% of the space." },
  ],
  5: [{ hash: "fcc/voids", title: "Animation: voids in fcc", caption: "Tetrahedral and octahedral holes between the atoms." }],
  6: [{ hash: "cscl/cn", title: "Animation: radius-ratio geometry (CsCl)", caption: "The 8-fold cube of neighbours around each ion." }],
  7: [
    { hash: "nacl/view", title: "Animation: rock salt (NaCl)", caption: "Two interlocking fcc lattices of Na⁺ and Cl⁻." },
    { hash: "zns/view", title: "Animation: zinc blende (ZnS)", caption: "The tetrahedral arrangement of Zn and S." },
  ],
};
