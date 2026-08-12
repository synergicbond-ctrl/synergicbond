type ChapterHeroProps = {
  title: string;
  category: string;
  difficulty: number;
  exams: string[];
};

export default function ChapterHero({
  title,
  category,
  difficulty,
  exams,
}: ChapterHeroProps) {
  return (
    <section className="rounded-2xl border border-gray-800 bg-gradient-to-r from-slate-900 to-black p-8 mb-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            {category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {exams.map((exam) => (
              <span
                key={exam}
                className="rounded-full border border-cyan-500 px-3 py-1 text-sm"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-700 p-6 text-center min-w-[170px]">
          <p className="text-sm text-gray-400">
            Difficulty
          </p>

          <p className="mt-2 text-4xl font-bold text-cyan-400">
            {difficulty}/5
          </p>
        </div>
      </div>
    </section>
  );
}