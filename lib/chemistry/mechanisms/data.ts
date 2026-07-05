import {
  MECHANISM_GEOMETRY_SCHEMA_VERSION,
  MechanismGeometrySchema,
  type MechanismGeometry,
} from "./schema";

const SN2: MechanismGeometry = MechanismGeometrySchema.parse({
  schemaVersion: MECHANISM_GEOMETRY_SCHEMA_VERSION,
  id: "sn2-bromomethane-hydroxide",
  name: "SN2: hydroxide with bromomethane",
  reactionClass: "SN2",
  scope: "Schematic backside attack on methyl bromide; qualitative geometry only.",
  coordinateSystem: "schematic-2d",
  sourceNotes: [
    "SN2 proceeds by concerted backside attack opposite the leaving group.",
    "The carbon-nucleophile bond forms while the carbon-leaving group bond breaks.",
    "Stereochemical consequence for chiral substrates is inversion of configuration.",
  ],
  steps: [
    {
      id: "sn2-concerted-step",
      title: "Backside attack and leaving-group departure",
      frames: [
        {
          id: "sn2-reactant",
          label: "Hydroxide approaches methyl bromide from backside",
          role: "reactant",
          atoms: [
            { id: "o-nu", element: "O", label: "HO-", position: { x: 0, y: 0 }, charge: -1 },
            { id: "c-alpha", element: "C", label: "CH3", position: { x: 120, y: 0 }, hydrogens: 3 },
            { id: "br-lg", element: "Br", label: "Br", position: { x: 240, y: 0 } },
          ],
          bonds: [
            { id: "bond-c-br", fromAtomId: "c-alpha", toAtomId: "br-lg", order: "single", state: "breaking" },
          ],
          lonePairs: [
            { id: "lp-o", atomId: "o-nu", electronCount: 2, positionHint: "right" },
            { id: "lp-br", atomId: "br-lg", electronCount: 2, positionHint: "right" },
          ],
          stereochemistry: [
            { id: "sn2-inversion-marker", atomId: "c-alpha", type: "inversion", description: "Backside attack gives Walden inversion for chiral alpha carbon." },
          ],
          orbitalOverlaps: [
            { id: "sn2-sigma-star", kind: "backside-sigma-star", participantAtomIds: ["o-nu", "c-alpha", "br-lg"], description: "Nucleophile lone pair overlaps with C-Br sigma-star orbital from the backside.", verified: true },
          ],
        },
        {
          id: "sn2-transition",
          label: "SN2 transition state",
          role: "transition-state",
          atoms: [
            { id: "o-nu", element: "O", label: "HO", position: { x: 0, y: 0 }, charge: -1 },
            { id: "c-alpha", element: "C", label: "CH3", position: { x: 120, y: 0 }, hydrogens: 3 },
            { id: "br-lg", element: "Br", label: "Br", position: { x: 240, y: 0 } },
          ],
          bonds: [
            { id: "bond-o-c", fromAtomId: "o-nu", toAtomId: "c-alpha", order: "partial", state: "forming" },
            { id: "bond-c-br", fromAtomId: "c-alpha", toAtomId: "br-lg", order: "partial", state: "breaking" },
          ],
          lonePairs: [],
          stereochemistry: [
            { id: "sn2-linear-marker", atomId: "c-alpha", type: "inversion", description: "Nucleophile, alpha carbon, and leaving group are represented collinear in this schematic." },
          ],
          orbitalOverlaps: [
            { id: "sn2-ts-overlap", kind: "backside-sigma-star", participantAtomIds: ["o-nu", "c-alpha", "br-lg"], description: "Partial O-C formation and C-Br cleavage in one transition state.", verified: true },
          ],
        },
        {
          id: "sn2-product",
          label: "Methanol plus bromide",
          role: "product",
          atoms: [
            { id: "o-prod", element: "O", label: "HO", position: { x: 80, y: 0 } },
            { id: "c-prod", element: "C", label: "CH3", position: { x: 180, y: 0 }, hydrogens: 3 },
            { id: "br-prod", element: "Br", label: "Br-", position: { x: 320, y: 0 }, charge: -1 },
          ],
          bonds: [
            { id: "bond-o-c-prod", fromAtomId: "o-prod", toAtomId: "c-prod", order: "single" },
          ],
          lonePairs: [
            { id: "lp-br-prod", atomId: "br-prod", electronCount: 2, positionHint: "right" },
          ],
          stereochemistry: [],
          orbitalOverlaps: [],
        },
      ],
      curvedArrows: [
        { id: "sn2-arrow-attack", electronCount: 2, from: { kind: "lone-pair", lonePairId: "lp-o" }, to: { kind: "new-bond", fromAtomId: "o-nu", toAtomId: "c-alpha" }, description: "Hydroxide lone pair attacks the alpha carbon from the side opposite bromine.", evidence: "Canonical SN2 backside attack electron flow.", verified: true },
        { id: "sn2-arrow-leaving", electronCount: 2, from: { kind: "bond", bondId: "bond-c-br" }, to: { kind: "leaving-group", atomId: "br-lg" }, description: "The C-Br sigma bond electrons move to bromine as bromide leaves.", evidence: "Concerted SN2 bond breaking.", verified: true },
      ],
      transitionState: {
        id: "sn2-ts",
        frameId: "sn2-transition",
        formingBondIds: ["bond-o-c"],
        breakingBondIds: ["bond-c-br"],
        geometryNote: "Linear backside approach is schematic; exact distances are intentionally not asserted.",
        verified: true,
      },
      electronFlowSummary: "Two-electron nucleophile attack and two-electron leaving-group departure occur in one concerted step.",
      verificationNotes: [
        "Atom coordinates are schematic for rendering only.",
        "Arrow sources and targets are verified; exact curved-arrow control points are not encoded.",
      ],
    },
  ],
  blockedVisualClaims: [
    "Exact transition-state bond lengths.",
    "Substrate-specific stereochemical drawing beyond the general inversion marker.",
  ],
});

const SN1: MechanismGeometry = MechanismGeometrySchema.parse({
  schemaVersion: MECHANISM_GEOMETRY_SCHEMA_VERSION,
  id: "sn1-tert-butyl-chloride-water",
  name: "SN1: tert-butyl chloride solvolysis",
  reactionClass: "SN1",
  scope: "Schematic ionisation to tert-butyl carbocation followed by water attack.",
  coordinateSystem: "schematic-2d",
  sourceNotes: [
    "SN1 proceeds through rate-determining leaving group departure.",
    "The carbocation intermediate is planar and can be attacked from either face.",
    "Racemization is expected when the reacting carbocation center is stereogenic.",
  ],
  steps: [
    {
      id: "sn1-ionization",
      title: "Leaving group ionisation",
      frames: [
        {
          id: "sn1-reactant",
          label: "tert-Butyl chloride",
          role: "reactant",
          atoms: [
            { id: "c-center", element: "C", label: "C", position: { x: 120, y: 0 } },
            { id: "cl-lg", element: "Cl", label: "Cl", position: { x: 240, y: 0 } },
            { id: "me-a", element: "C", label: "CH3", position: { x: 60, y: -70 }, hydrogens: 3 },
            { id: "me-b", element: "C", label: "CH3", position: { x: 60, y: 70 }, hydrogens: 3 },
            { id: "me-c", element: "C", label: "CH3", position: { x: 120, y: 105 }, hydrogens: 3 },
          ],
          bonds: [
            { id: "bond-c-cl", fromAtomId: "c-center", toAtomId: "cl-lg", order: "single", state: "breaking" },
            { id: "bond-c-me-a", fromAtomId: "c-center", toAtomId: "me-a", order: "single" },
            { id: "bond-c-me-b", fromAtomId: "c-center", toAtomId: "me-b", order: "single" },
            { id: "bond-c-me-c", fromAtomId: "c-center", toAtomId: "me-c", order: "single" },
          ],
          lonePairs: [
            { id: "lp-cl", atomId: "cl-lg", electronCount: 2, positionHint: "right" },
          ],
          stereochemistry: [],
          orbitalOverlaps: [],
        },
        {
          id: "sn1-carbocation",
          label: "Planar tert-butyl carbocation",
          role: "intermediate",
          atoms: [
            { id: "c-center", element: "C", label: "C+", position: { x: 120, y: 0 }, charge: 1 },
            { id: "cl-free", element: "Cl", label: "Cl-", position: { x: 300, y: 0 }, charge: -1 },
            { id: "me-a", element: "C", label: "CH3", position: { x: 60, y: -70 }, hydrogens: 3 },
            { id: "me-b", element: "C", label: "CH3", position: { x: 60, y: 70 }, hydrogens: 3 },
            { id: "me-c", element: "C", label: "CH3", position: { x: 180, y: 0 }, hydrogens: 3 },
          ],
          bonds: [
            { id: "bond-c-me-a", fromAtomId: "c-center", toAtomId: "me-a", order: "single" },
            { id: "bond-c-me-b", fromAtomId: "c-center", toAtomId: "me-b", order: "single" },
            { id: "bond-c-me-c", fromAtomId: "c-center", toAtomId: "me-c", order: "single" },
          ],
          lonePairs: [
            { id: "lp-cl-free", atomId: "cl-free", electronCount: 2, positionHint: "right" },
          ],
          stereochemistry: [
            { id: "sn1-planar", atomId: "c-center", type: "planar", description: "Carbocation center is trigonal planar and can be attacked from either face." },
            { id: "sn1-racemization", atomId: "c-center", type: "racemization", description: "If the carbocation center is stereogenic, attack from either face gives racemization tendency." },
          ],
          orbitalOverlaps: [
            { id: "sn1-empty-p", kind: "empty-p-orbital", participantAtomIds: ["c-center"], description: "The carbocation has an empty p orbital perpendicular to the trigonal plane.", verified: true },
          ],
        },
      ],
      curvedArrows: [
        { id: "sn1-arrow-ionization", electronCount: 2, from: { kind: "bond", bondId: "bond-c-cl" }, to: { kind: "leaving-group", atomId: "cl-lg" }, description: "The C-Cl bond electrons move to chlorine, generating chloride and a carbocation.", evidence: "Rate-determining ionisation step of SN1.", verified: true },
      ],
      electronFlowSummary: "The leaving group departs first; no nucleophile bond forms in the rate-determining step.",
      verificationNotes: [
        "The planar carbocation marker is verified for SN1.",
        "Exact solvation geometry is intentionally not represented.",
      ],
    },
    {
      id: "sn1-nucleophile-attack",
      title: "Water attack on planar carbocation",
      frames: [
        {
          id: "sn1-attack-frame",
          label: "Water approaches carbocation",
          role: "intermediate",
          atoms: [
            { id: "o-water", element: "O", label: "H2O", position: { x: 0, y: 0 } },
            { id: "c-center", element: "C", label: "C+", position: { x: 130, y: 0 }, charge: 1 },
          ],
          bonds: [],
          lonePairs: [
            { id: "lp-o-water", atomId: "o-water", electronCount: 2, positionHint: "right" },
          ],
          stereochemistry: [
            { id: "sn1-face-attack", atomId: "c-center", type: "racemization", description: "Attack may occur from either face of the planar carbocation." },
          ],
          orbitalOverlaps: [
            { id: "sn1-water-empty-p", kind: "empty-p-orbital", participantAtomIds: ["o-water", "c-center"], description: "Water lone pair donates into the empty p orbital at the carbocation center.", verified: true },
          ],
        },
      ],
      curvedArrows: [
        { id: "sn1-arrow-water", electronCount: 2, from: { kind: "lone-pair", lonePairId: "lp-o-water" }, to: { kind: "new-bond", fromAtomId: "o-water", toAtomId: "c-center" }, description: "Water lone pair forms the C-O bond at the carbocation center.", evidence: "Fast nucleophile capture of SN1 carbocation.", verified: true },
      ],
      electronFlowSummary: "Water donates a lone pair into the electron-deficient carbocation center.",
      verificationNotes: [
        "Attack-face choice is encoded qualitatively, not as product enantiomer geometry.",
      ],
    },
  ],
  blockedVisualClaims: [
    "Ion-pair solvent cage bias.",
    "Exact retention/inversion product ratio.",
  ],
});

const E2: MechanismGeometry = MechanismGeometrySchema.parse({
  schemaVersion: MECHANISM_GEOMETRY_SCHEMA_VERSION,
  id: "e2-bromoethane-ethoxide",
  name: "E2: ethoxide-induced dehydrohalogenation",
  reactionClass: "E2",
  scope: "Schematic anti-periplanar beta-hydrogen abstraction and C-Br departure.",
  coordinateSystem: "schematic-2d",
  sourceNotes: [
    "E2 is concerted: base removes beta hydrogen while leaving group departs.",
    "The beta C-H bond and C-LG bond must be anti-periplanar for optimal orbital overlap.",
    "A pi bond forms between alpha and beta carbons.",
  ],
  steps: [
    {
      id: "e2-concerted-elimination",
      title: "Anti-periplanar elimination",
      frames: [
        {
          id: "e2-reactant",
          label: "Ethoxide abstracts beta hydrogen",
          role: "reactant",
          atoms: [
            { id: "o-base", element: "O", label: "EtO-", position: { x: 0, y: -80 }, charge: -1 },
            { id: "h-beta", element: "H", label: "Hβ", position: { x: 80, y: -40 } },
            { id: "c-beta", element: "C", label: "Cβ", position: { x: 120, y: 0 }, hydrogens: 2 },
            { id: "c-alpha", element: "C", label: "Cα", position: { x: 230, y: 0 }, hydrogens: 2 },
            { id: "br-lg", element: "Br", label: "Br", position: { x: 320, y: 50 } },
          ],
          bonds: [
            { id: "bond-h-cbeta", fromAtomId: "h-beta", toAtomId: "c-beta", order: "single", state: "breaking" },
            { id: "bond-cbeta-calpha", fromAtomId: "c-beta", toAtomId: "c-alpha", order: "single", state: "forming" },
            { id: "bond-calpha-br", fromAtomId: "c-alpha", toAtomId: "br-lg", order: "single", state: "breaking" },
          ],
          lonePairs: [
            { id: "lp-o-base", atomId: "o-base", electronCount: 2, positionHint: "right" },
            { id: "lp-br", atomId: "br-lg", electronCount: 2, positionHint: "right" },
          ],
          stereochemistry: [
            { id: "e2-anti", atomId: "c-beta", type: "anti-periplanar", description: "The beta C-H bond is represented anti-periplanar to the C-Br bond." },
          ],
          orbitalOverlaps: [
            { id: "e2-sigma-overlap", kind: "anti-periplanar-sigma", participantAtomIds: ["h-beta", "c-beta", "c-alpha", "br-lg"], description: "C-H sigma electrons align with C-Br sigma-star orbital during concerted elimination.", verified: true },
          ],
        },
        {
          id: "e2-transition",
          label: "E2 transition state",
          role: "transition-state",
          atoms: [
            { id: "o-base", element: "O", label: "EtO", position: { x: 0, y: -80 }, charge: -1 },
            { id: "h-beta", element: "H", label: "Hβ", position: { x: 70, y: -45 } },
            { id: "c-beta", element: "C", label: "Cβ", position: { x: 120, y: 0 } },
            { id: "c-alpha", element: "C", label: "Cα", position: { x: 230, y: 0 } },
            { id: "br-lg", element: "Br", label: "Br", position: { x: 320, y: 50 } },
          ],
          bonds: [
            { id: "bond-o-h", fromAtomId: "o-base", toAtomId: "h-beta", order: "partial", state: "forming" },
            { id: "bond-h-cbeta", fromAtomId: "h-beta", toAtomId: "c-beta", order: "partial", state: "breaking" },
            { id: "bond-cbeta-calpha", fromAtomId: "c-beta", toAtomId: "c-alpha", order: "partial", state: "forming" },
            { id: "bond-calpha-br", fromAtomId: "c-alpha", toAtomId: "br-lg", order: "partial", state: "breaking" },
          ],
          lonePairs: [],
          stereochemistry: [
            { id: "e2-ts-anti", atomId: "c-beta", type: "anti-periplanar", description: "Anti-periplanar alignment is preserved in the transition-state schematic." },
          ],
          orbitalOverlaps: [
            { id: "e2-ts-overlap", kind: "anti-periplanar-sigma", participantAtomIds: ["h-beta", "c-beta", "c-alpha", "br-lg"], description: "Concerted sigma-to-pi electron flow with simultaneous leaving group departure.", verified: true },
          ],
        },
      ],
      curvedArrows: [
        { id: "e2-arrow-base", electronCount: 2, from: { kind: "lone-pair", lonePairId: "lp-o-base" }, to: { kind: "new-bond", fromAtomId: "o-base", toAtomId: "h-beta" }, description: "Base lone pair forms O-H bond to the beta hydrogen.", evidence: "E2 base abstraction step.", verified: true },
        { id: "e2-arrow-pi", electronCount: 2, from: { kind: "bond", bondId: "bond-h-cbeta" }, to: { kind: "bond", bondId: "bond-cbeta-calpha" }, description: "C-H bond electrons form the C=C pi bond.", evidence: "Concerted alkene-forming electron flow in E2.", verified: true },
        { id: "e2-arrow-leaving", electronCount: 2, from: { kind: "bond", bondId: "bond-calpha-br" }, to: { kind: "leaving-group", atomId: "br-lg" }, description: "C-Br bond electrons move to bromine as bromide leaves.", evidence: "Concerted leaving-group departure in E2.", verified: true },
      ],
      transitionState: {
        id: "e2-ts",
        frameId: "e2-transition",
        formingBondIds: ["bond-o-h", "bond-cbeta-calpha"],
        breakingBondIds: ["bond-h-cbeta", "bond-calpha-br"],
        geometryNote: "Anti-periplanar alignment is qualitative; no exact dihedral angle measurement is asserted.",
        verified: true,
      },
      electronFlowSummary: "Base attack, C-H bond cleavage, pi-bond formation, and C-Br cleavage occur in one concerted step.",
      verificationNotes: [
        "Anti-periplanar requirement is verified.",
        "Coordinates are schematic and do not claim a full Newman projection.",
      ],
    },
  ],
  blockedVisualClaims: [
    "Exact conformer population.",
    "Substrate-specific Zaitsev/Hofmann product ratio.",
  ],
});

export const mechanismGeometrySamples = [SN1, SN2, E2] satisfies MechanismGeometry[];
