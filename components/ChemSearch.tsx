"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { chemistryIndex } from "@/lib/chemistryIndex";

export default function ChemSearch() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  const normalize = (text: string) =>
    text.toLowerCase().trim();

  const results = useMemo(() => {
    const q = normalize(query);

    if (!q) return [];

    return chemistryIndex
      .map((item) => {
        let score = 0;

        const keyword = normalize(item.keyword);

        if (keyword === q) score += 100;

        if (keyword.includes(q)) score += 70;

        if (q.includes(keyword)) score += 50;

        return {
          ...item,
          score,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

  }, [query]);

  const goTo = (route: string) => {
    router.push(route);

    setQuery("");
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 relative">

      <input
        className="w-full p-3 rounded-xl border border-white/20 bg-black text-white"

        placeholder="Search chemistry..."

        value={query}

        onChange={(e) => {
          setQuery(e.target.value);

          setActiveIndex(0);
        }}

        onKeyDown={(e) => {

          if (e.key === "Enter" && results[activeIndex]) {

            goTo(results[activeIndex].route);

          }

          if (e.key === "ArrowDown") {

            setActiveIndex((prev) =>
              Math.min(prev + 1, results.length - 1)
            );

          }

          if (e.key === "ArrowUp") {

            setActiveIndex((prev) =>
              Math.max(prev - 1, 0)
            );

          }

        }}
      />

      {results.length > 0 && (

        <div className="absolute w-full bg-black border border-white/10 mt-2 rounded-xl overflow-hidden">

          {results.map((item, index) => (

            <div
              key={item.keyword}

              onClick={() => goTo(item.route)}

              className={`p-3 cursor-pointer ${
                index === activeIndex ? "bg-white/10" : ""
              }`}
            >

              <p className="text-white">

                {item.keyword}

              </p>

              <p className="text-white/40 text-sm">

                {item.route}

              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}