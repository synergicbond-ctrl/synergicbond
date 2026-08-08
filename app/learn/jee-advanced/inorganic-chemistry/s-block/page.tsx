import type { Metadata } from "next";
import SBlockMasterTextbook from "./SBlockMasterTextbook";

export const metadata: Metadata = {
  title: "s-Block Elements — Integrated Master Textbook | Synergic Bond",
  description:
    "JEE Advanced s-block elements: Group 1 and Group 2 periodic trends, energetics, reactions, oxides/peroxides/superoxides, hydroxides, hydrides, halides, oxoacid salts, liquid ammonia solutions, crown ethers, organolithium and Grignard chemistry, the lithium and beryllium anomalies, sodium industrial chemistry, calcium and cement chemistry, complexometric water hardness, biological roles, and a full JEE Advanced worked-problem lab.",
};

export default function SBlockPage() {
  return <SBlockMasterTextbook />;
}
