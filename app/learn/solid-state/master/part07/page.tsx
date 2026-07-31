import { notFound } from "next/navigation";
import { getSolidStatePart } from "../_content";
import { SolidStatePartPage } from "../_shared";

export const metadata = {
  title: "Solid State Part 7 | JEE Advanced | Synergic Bond",
};

export default function Page() {
  const part = getSolidStatePart(7);
  if (!part) notFound();
  return <SolidStatePartPage part={part} />;
}
