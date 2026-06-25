import Link from "next/link";

const exams = [
  {
    title: "NEET",
    color: "🟢",
    description: "NCERT-focused preparation",
    href: "/revision",
  },
  {
    title: "JEE",
    color: "🟡",
    description: "Advanced problem solving",
    href: "/dashboard",
  },
  {
    title: "Olympiad",
    color: "🔴",
    description: "National & International",
    href: "/olympiads",
  },
  {
    title: "GATE",
    color: "🔵",
    description: "Engineering Chemistry",
    href: "/dashboard",
  },
];

export default function ExamGrid() {
  return (
    <section className="mt-16 w-full">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {exams.map((exam) => (
          <Link
            key={exam.title}
            href={exam.href}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
          >
            <div className="text-4xl">
              {exam.color}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {exam.title}
            </h3>

            <p className="mt-3 text-white/60">
              {exam.description}
            </p>

            <div className="mt-8 flex items-center text-sm font-medium text-cyan-300 opacity-0 transition group-hover:opacity-100">
              Explore →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}