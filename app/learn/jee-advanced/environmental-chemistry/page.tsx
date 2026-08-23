import Link from "next/link";
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
    <main className="min-h-screen bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <header className="relative overflow-hidden border-b border-[var(--border)] pb-9">
          <p className="relative text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm">
            JEE Advanced · Environmental Chemistry
          </p>
          <h1 className="relative mt-3 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Environmental Chemistry
          </h1>
          <div className="relative mt-5 h-[2px] w-36 bg-[var(--accent)]" />
        </header>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </main>
  );
}
