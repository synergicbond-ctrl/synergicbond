"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, NoteBlock, SourcePage } from "./_shared";

export default function Part49() {
  return (
    <AtomicPartShell part={49} title="3d vs 4d/5d, 4f vs 5f, and Orbital Shape Galleries" pages="154-156">
      <SourcePage page={154}>
        <NoteBlock title="3d orbitals vs 4d, 5d orbitals">
          <p>
            From radial probability distribution curve, it is evident that for the 3d-orbital, the maximum (i.e. r_max)
            lies within the maxima of 3s, 3p, 4s and 4p orbitals. Thus, the 3d-orbitals are deeply seated and they can not
            generally participate in making covalent bonds.
          </p>
          <p>
            In contrast, for the 4d and 5d series, the r_max of the d-orbitals relatively closer the r_max of relevent
            valence s- and p-orbitals. Because of relativistic expansion (caused by the contracted inner s- and
            p-orbitals) r_max of the (n−1)d orbitals of the heavy congeners increases. In fact, r_max of the 5d and 6s
            orbitals become comparable. Thus bonding ability of the 5d orbitals is increased. In other words, relativistic
            expansion increases attainment of higher oxidation state.
          </p>
          <FormulaLine math="\text{The relativistic expansion effect runs as: }5d>4d>3d" />
          <p>
            The effect of this phenomenon can be stated, in general, as follows: The d-orbital of the heavier congeners
            can participate better in bonding activites. In fact, this makes the higher oxidation state more common in the
            heavier congeners of the d-block elements.
          </p>
        </NoteBlock>
        <NoteBlock title="4f orbital vs 5f orbitals">
          <p>The 4f orbitals of the lanthanides are more deeply buried than the 5f orbitals of actinides.</p>
          <p>
            Thus the 5f-orbitals can participate better in bonding activites and this also favours the attainment of their
            higher oxidation states.
          </p>
          <DiagramBox title="RDF vs r for 4f/6s and 5f/7s (printed)">
            <p>
              (a) RDF vs distance: several small inner 4f humps (dotted) buried under a large outer 6s peak. (b) RDF vs
              distance: larger 5f humps (dotted) reaching out toward the 7s peak — the 5f density extends farther than the
              4f density.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={155}>
        <NoteBlock title="Shape of Orbitals — np series (printed)">
          <DiagramBox title="2p / 3p / 4p / 5p / 6p / 7p (printed)">
            <p>
              Six 3-D renderings of the np orbitals (2p through 7p), each shown as three mutually perpendicular dumbbells
              (one per axis) with orange (+) and white (−) lobes. As n increases, extra inner nodal shells appear nested
              inside the outer dumbbell lobes while the overall dumbbell orientation is preserved.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={156}>
        <NoteBlock title="Shape of Orbitals — nd series (printed)">
          <DiagramBox title="3d / 4d / 5d / 6d (printed)">
            <p>
              Four 3-D galleries of the five d orbitals (3d, 4d, 5d, 6d). Each set shows the dz² (two lobes plus an
              equatorial ring) and the four cloverleaf orbitals d(xy), d(yz), d(zx), d(x²−y²) with red/white sign lobes.
              As n increases, additional nested radial shells appear inside each lobe.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="154-156" unclear={0} />
    </AtomicPartShell>
  );
}
