import type { Metadata } from "next";
import SBlockMasterTextbook from "./SBlockMasterTextbook";

export const metadata: Metadata = {
  title: "s-Block Elements — Integrated Master Textbook | Synergic Bond",
  description:
    "JEE Advanced s-block elements: separate Group 1 alkali-metals and Group 2 alkaline-earth-metals textbook parts, periodic trends, energetics, reactions, oxides, peroxides, superoxides, hydroxides, hydrides, halides, oxoacid salts, sodium industrial chemistry, calcium and cement chemistry, water hardness, biological roles, and a full JEE Advanced worked-problem lab.",
};

export default function SBlockPage() {
  return <SBlockMasterTextbook />;
}
