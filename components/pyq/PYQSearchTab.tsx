"use client";

import { useMemo, useState } from "react";
import { ALL_PYQ_QUESTIONS, searchPYQ, filterPYQ } from "@/lib/pyq";
import type { PYQExam, PYQChapter, PYQDifficulty, PYQFilter } from "@/lib/pyq";
import QuestionCard from "./QuestionCard";

const EXAMS: PYQExam[] = ["JEE Main", "JEE Advanced", "NEET"];
const DIFFICULTIES: PYQDifficulty[] = ["Easy", "Moderate", "Hard", "Olympiad"];

export default function PYQSearchTab({ initialExam }: { initialExam?: PYQExam | null }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExam, setSelectedExam] = useState<PYQExam | null>(initialExam ?? null);
  const [selectedChapter, setSelectedChapter] = useState<PYQChapter | "">("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<PYQDifficulty | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | "">("");
  const [topic, setTopic] = useState("");

  const chapterList = useMemo(() => {
    return Array.from(new Set(ALL_PYQ_QUESTIONS.map((q) => q.chapter))).sort();
  }, []);

  const yearList = useMemo(() => {
    return Array.from(new Set(ALL_PYQ_QUESTIONS.map((q) => q.year))).sort((a, b) => b - a);
  }, []);

  const filter: PYQFilter = useMemo(() => {
    const f: PYQFilter = {};
    if (selectedExam) f.exam = selectedExam;
    if (selectedChapter) f.chapter = selectedChapter;
    if (selectedDifficulty) f.difficulty = selectedDifficulty;
    if (selectedYear) {
      f.yearFrom = selectedYear;
      f.yearTo = selectedYear;
    }
    if (topic.trim()) f.subtopic = topic.trim();
    return f;
  }, [selectedExam, selectedChapter, selectedDifficulty, selectedYear, topic]);

  const hasFilters = Object.keys(filter).length > 0;

  const results = useMemo(() => {
    if (searchQuery.trim()) {
      return searchPYQ(ALL_PYQ_QUESTIONS, searchQuery, hasFilters ? filter : undefined, 50).map(
        (r) => r.question
      );
    }
    return hasFilters ? filterPYQ(ALL_PYQ_QUESTIONS, filter) : ALL_PYQ_QUESTIONS.slice(0, 30);
  }, [searchQuery, filter, hasFilters]);

  const clearFilters = () => {
    setSelectedExam(null);
    setSelectedChapter("");
    setSelectedDifficulty(null);
    setSelectedYear("");
    setTopic("");
    setSearchQuery("");
  };

  return (
    <div className="space-y-6">
      {/* Search input */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Search by concept, reaction, reagent, exception..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500 transition"
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-white/50">
            {results.length} question{results.length !== 1 ? "s" : ""}
            {!searchQuery && !hasFilters ? " (showing first 30 — search or filter to refine)" : ""}
          </p>
          {(searchQuery || hasFilters) && (
            <button onClick={clearFilters} className="text-xs text-cyan-400 hover:text-cyan-300">
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Filters: Exam, Chapter, Topic, Difficulty, Year */}
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {EXAMS.map((exam) => (
            <button
              key={exam}
              onClick={() => setSelectedExam(selectedExam === exam ? null : exam)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                selectedExam === exam ? "bg-cyan-600 text-white" : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {exam}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {DIFFICULTIES.map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                selectedDifficulty === diff
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value as PYQChapter | "")}
            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 focus:outline-none focus:border-cyan-500"
          >
            <option value="">All Chapters</option>
            {chapterList.map((ch) => (
              <option key={ch} value={ch} className="bg-black">
                {ch}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : "")}
            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/80 focus:outline-none focus:border-cyan-500"
          >
            <option value="">All Years</option>
            {yearList.map((yr) => (
              <option key={yr} value={yr} className="bg-black">
                {yr}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Filter by topic / subtopic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {results.length === 0 ? (
          <div className="border border-white/10 rounded-lg p-8 text-center text-white/40">
            No questions found. Try a different search or filter combination.
          </div>
        ) : (
          results.map((q) => <QuestionCard key={q.id} question={q} />)
        )}
      </div>
    </div>
  );
}
