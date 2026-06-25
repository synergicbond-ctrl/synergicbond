// lib/masterSyllabus/mechanisms.ts
import { Mechanism } from "./types";

export const organicMechanisms: Record<string, Mechanism[]> = {
  "haloalkanes-haloarenes": [
    {
      id: "mech-sn2",
      title: "SN2 Mechanism (Bimolecular Nucleophilic Substitution)",
      steps: [
        "The nucleophile attacks the carbon atom bearing the leaving group from the side opposite to the leaving group.",
        "A transition state is formed where both the incoming nucleophile and leaving group are partially bonded to the carbon atom.",
        "The leaving group departs as the nucleophile forms a full bond, resulting in an inversion of configuration (Walden Inversion)."
      ]
    },
    {
      id: "mech-sn1",
      title: "SN1 Mechanism (Unimolecular Nucleophilic Substitution)",
      steps: [
        "Step 1 (Rate Determining Step): The leaving group departs, generating a planar, sp2-hybridized carbocation intermediate.",
        "Step 2 (Fast Step): The nucleophile attacks the carbocation intermediate from either the top or bottom face.",
        "A racemic mixture is produced (equal amounts of retention and inversion products)."
      ]
    }
  ],
  "carbonyl-compounds": [
    {
      id: "mech-aldol",
      title: "Aldol Condensation Mechanism",
      steps: [
        "Base deprotonates an alpha-carbon of an aldehyde/ketone to form a resonance-stabilized enolate ion.",
        "The nucleophilic enolate attacks the electrophilic carbonyl carbon of another aldehyde/ketone molecule, forming an alkoxide intermediate.",
        "Protonation of the alkoxide yields a β-hydroxy aldehyde or β-hydroxy ketone (Aldol product).",
        "Heating causes dehydration (loss of water) via an E1cB mechanism to yield an α,β-unsaturated carbonyl compound."
      ]
    }
  ]
};