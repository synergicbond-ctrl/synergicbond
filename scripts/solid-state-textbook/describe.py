"""Explanations printed under each Crystal Lab animation.

Every field is built from the real behaviour of the lab (content/solid-state-html/crystal-lab-src/src/lab.js)
and from standard values for each structure. Nothing here changes the lab itself.
"""

# name, how the cell is built, atoms per cell, coordination number, hard-sphere contact relation, packing fraction
STRUCT = {
    "sc": dict(name="simple cubic", build="one atom on each of the 8 corners", Z="1", CN="6",
               rel="a = 2r", pf="π/6 ≈ 52.36%", poly="octahedron", count="8 × 1/8 = 1"),
    "bcc": dict(name="body-centred cubic", build="atoms on the 8 corners plus one atom at the body centre", Z="2", CN="8",
                rel="√3 a = 4r", pf="√3π/8 ≈ 68.02%", poly="cube", count="8 × 1/8 + 1 = 2"),
    "fcc": dict(name="face-centred cubic (ccp)", build="atoms on the 8 corners plus one at the centre of each of the 6 faces", Z="4", CN="12",
                rel="√2 a = 4r", pf="π/(3√2) ≈ 74.05%", poly="cuboctahedron", count="8 × 1/8 + 6 × 1/2 = 4"),
    "hcp": dict(name="hexagonal close-packed", build="close-packed layers stacked A B A B in a hexagonal prism", Z="6", CN="12",
                rel="a = 2r in the layer; c/a = √(8/3) ≈ 1.633", pf="π/(3√2) ≈ 74.05%", poly="anticuboctahedron", count="12 × 1/6 + 2 × 1/2 + 3 = 6"),
    "nacl": dict(name="rock salt (NaCl)", build="Na⁺ ions on an fcc lattice with Cl⁻ ions in the octahedral holes", Z="4 Na⁺ and 4 Cl⁻", CN="6 : 6",
                 rel="a = 2(r₊ + r₋)", pf="", poly="octahedron", count="Na⁺: 8 × 1/8 + 6 × 1/2 = 4; Cl⁻: 12 × 1/4 + 1 = 4"),
    "cscl": dict(name="caesium chloride (CsCl)", build="Cs⁺ on the 8 corners and one Cl⁻ at the body centre", Z="1 Cs⁺ and 1 Cl⁻", CN="8 : 8",
                 rel="√3 a = 2(r₊ + r₋)", pf="", poly="cube", count="Cs⁺: 8 × 1/8 = 1; Cl⁻: 1"),
    "zns": dict(name="zinc blende (ZnS)", build="S²⁻ ions on an fcc lattice with Zn²⁺ ions in half of the tetrahedral holes", Z="4 Zn²⁺ and 4 S²⁻", CN="4 : 4",
                rel="√3 a = 4(r₊ + r₋)", pf="", poly="tetrahedron", count="S²⁻: 8 × 1/8 + 6 × 1/2 = 4; Zn²⁺: 4 inside = 4"),
    "diamond": dict(name="diamond", build="an fcc lattice of carbon atoms plus carbon atoms in half of the tetrahedral holes", Z="8", CN="4",
                    rel="√3 a = 8r", pf="π√3/16 ≈ 34.01%", poly="tetrahedron", count="8 × 1/8 + 6 × 1/2 + 4 = 8"),
}

INTERACT = ("Drag to rotate the cell and scroll or pinch to zoom. The buttons inside the model switch structure or view. "
            "Pause freezes the demonstration, Replay restarts it, Reset restores the starting view, Speed slows or speeds it, "
            "and Step moves it on a little at a time.")


def describe(struct, mode, way=None):
    """Return the five scientific fields for one lab view (the sixth, 'link to the theory', is written per placement)."""
    d = STRUCT[struct]
    nm = d["name"]
    if mode == "view":
        return dict(
            see=f"The unit cell of {nm}: {d['build']}. The grey box is the cell that repeats through the crystal.",
            interact=INTERACT,
            happens="The atoms sit at the sites of the chosen structure; switching structure sends them to new positions.",
            why="Every lattice is described by the same box. Only the positions of the atoms inside it differ.",
            concl=f"In this structure Z = {d['Z']} and the coordination number is {d['CN']}.")
    if mode == "pos":
        return dict(
            see=f"The cell of {nm} with every atom coloured and lettered by its kind of position (C corner, E edge centre, F face centre, B body centre).",
            interact=INTERACT + " Use Show labels to switch the letters on or off.",
            happens="The table below the model counts each kind of position and the share of that atom that belongs to this cell.",
            why="Atoms on the boundary of the cell are shared with neighbouring cells, so only a fraction of each belongs to this cell.",
            concl=f"Total belonging to this cell: {d['count']}.")
    if mode == "share":
        return dict(
            see=f"The cell of {nm}. The cell walls slice through the boundary atoms, and the tally counts what stays inside.",
            interact=INTERACT,
            happens="The tally adds up the fraction of each atom that lies inside the cell: corner 1/8, edge 1/4, face 1/2, inside 1.",
            why="A corner atom is shared by 8 cells, an edge atom by 4, a face atom by 2, and an atom inside belongs to one cell only.",
            concl=f"For {nm}: {d['count']}.")
    if mode == "pack":
        pf = d["pf"]
        if pf:
            concl = f"Contact condition: {d['rel']}. The spheres fill {pf} of the cell, so the rest is empty space."
        else:
            concl = f"The ions touch along the contact direction ({d['rel']}). The filled fraction depends on both radii."
        return dict(
            see=f"The atoms of {nm} drawn as hard spheres.",
            interact=INTERACT,
            happens="The spheres swell until neighbours touch along the contact direction, and the counter shows how much of the cell they fill.",
            why="Touching defines the largest possible radius for a given edge length, which fixes the packing fraction.",
            concl=concl)
    if mode == "cn":
        return dict(
            see=f"One atom of {nm} highlighted, with bonds drawn to its nearest neighbours.",
            interact=INTERACT,
            happens=f"Bonds grow from the highlighted particle to its nearest neighbours; together they outline a {d['poly']}.",
            why="The coordination number is the number of nearest neighbours that touch a particle, so each bond is one count.",
            concl=f"Coordination number {d['CN']}, with the neighbours forming a {d['poly']}.")
    if mode == "voids":
        if struct == "fcc":
            return dict(
                see="The fcc cell with its empty holes drawn: coral octahedra and gold tetrahedra.",
                interact=INTERACT,
                happens="Each void is shown as the polyhedron of atoms around it.",
                why="Close-packed spheres leave holes: an octahedral hole touches 6 atoms, a tetrahedral hole touches 4.",
                concl="4 octahedral voids (12 edge centres × 1/4 + 1 body centre) and 8 tetrahedral voids per cell, which is 1 and 2 per atom.")
        return dict(
            see="The hexagonal close-packed prism with its empty holes drawn.",
            interact=INTERACT,
            happens="Each void is shown as the polyhedron of atoms around it.",
            why="Close-packed spheres leave holes: an octahedral hole touches 6 atoms, a tetrahedral hole touches 4.",
            concl="6 octahedral and 12 tetrahedral voids per hexagonal prism, again 1 and 2 per atom.")
    if mode == "grow":
        return dict(
            see=f"Atoms of {nm} starting as a liquid with no order.",
            interact=INTERACT + " Melt, Cool slowly and Quench are inside the model; the temperature slider sets the vibration.",
            happens="Cooled slowly, the atoms find their lattice sites and the label changes to long-range order. Quenched, they freeze where they are and the label shows short-range order only.",
            why="Slow cooling gives particles time to reach the lowest-energy lattice positions. Quenching traps the disorder of the liquid.",
            concl="Slow cooling gives a crystal; quenching gives an amorphous solid.")
    if mode == "plane":
        return dict(
            see=f"A family of parallel (hkl) planes cutting the cell of {nm}.",
            interact=INTERACT + " Type h, k, l or press a preset such as (111).",
            happens="A plane sweeps through the cell. It cuts the axes at a/h, a/k and a/l, and a zero index means the plane is parallel to that axis.",
            why="Miller indices are the reciprocals of the intercepts, reduced to the smallest whole numbers.",
            concl="Neighbouring planes of a cubic crystal are d = a / √(h² + k² + l²) apart.")
    if mode == "layers":
        if way == "hcp":
            return dict(
                see="Close-packed (111) layers of atoms stacked A B C A to form the fcc cell.",
                interact=INTERACT + " Switch between the two ways inside the model.",
                happens="Four hexagonal layers appear one after another, corner to opposite corner.",
                why="Each atom touches 6 in its own layer, 3 below and 3 above.",
                concl="Coordination number 12 = 3 + 6 + 3.")
        return dict(
            see="Square-packed layers of atoms stacked A B A to form the fcc cell.",
            interact=INTERACT + " Switch between the two ways inside the model.",
            happens="Three square layers appear one after another.",
            why="Each atom touches 4 in its own layer, 4 below and 4 above.",
            concl="Coordination number 12 = 4 + 4 + 4.")
    raise ValueError(f"unknown mode {mode}")
