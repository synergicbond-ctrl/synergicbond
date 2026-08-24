import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { environmentalChemistryParts } from "./index";

export const metadata = {
  title: "Environmental Chemistry - JEE Advanced | Synergic Bond",
  description:
    "Environmental Chemistry notes for JEE Advanced covering air, water and soil pollution, smog, acid rain, ozone depletion, waste management and green chemistry.",
};

const partThemes = [
  "border-[var(--chem-bond)] bg-[var(--surface)]",
  "border-[var(--chem-orbital)] bg-[var(--surface)]",
  "border-[var(--chem-energy)] bg-[var(--surface)]",
  "border-[var(--chem-rule)] bg-[var(--surface)]",
  "border-[var(--chem-trap)] bg-[var(--surface)]",
];

const labelThemes = ["text-[var(--chem-bond)]", "text-[var(--chem-orbital)]", "text-[var(--chem-energy)]", "text-[var(--chem-rule)]", "text-[var(--chem-trap)]"];
const lineThemes = [
  "bg-[var(--chem-bond)]",
  "bg-[var(--chem-orbital)]",
  "bg-[var(--chem-energy)]",
  "bg-[var(--chem-rule)]",
  "bg-[var(--chem-trap)]",
];

export default function EnvironmentalChemistryPage() {
  return (
    <AppShell
      discipline="JEE Advanced · Environmental Chemistry"
      chapterTitle="Environmental Chemistry"
      chapterSlug="environmental-chemistry"
      description="Environmental Chemistry notes for JEE Advanced covering air, water and soil pollution, smog, acid rain, ozone depletion, waste management and green chemistry."
      free={false}
    >
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {environmentalChemistryParts.map((part, index) => (
            <Link
              key={part.id}
              href={part.href}
              className={`group relative overflow-hidden rounded-lg border p-5 transition duration-200 hover:-translate-y-1 ${partThemes[index % partThemes.length]}`}
            >
              <div className={`absolute inset-x-0 top-0 h-[2px] ${lineThemes[index % lineThemes.length]}`} />
              <span className={`text-sm font-extrabold tracking-[0.16em] ${labelThemes[index % labelThemes.length]}`}>
                PART {String(part.id).padStart(2, "0")}
              </span>
              <span className="mt-3 block text-lg font-bold leading-7 text-[var(--foreground)] transition group-hover:text-[var(--foreground)]">
                {part.title}
              </span>
              <span className={`mt-5 block h-px w-full ${lineThemes[index % lineThemes.length]}`} />
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
