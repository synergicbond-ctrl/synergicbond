"use client";

import { useState } from "react";
import type { AiTutorResponse } from "@/lib/aiTutor";

type AiTutorBoxProps = {
  chapter: string;
  concepts?: string[];
};

type AiTutorApiError = {
  error?: string;
};

export default function AiTutorBox({ chapter, concepts = [] }: AiTutorBoxProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const askTutor = async () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setAnswer("");
      setError("Please enter a chemistry question first.");
      return;
    }

    setIsLoading(true);
    setAnswer("");
    setError("");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapter,
          question: trimmedQuestion,
        }),
      });

      const data = (await response.json()) as AiTutorResponse & AiTutorApiError;

      if (!response.ok) {
        throw new Error(data.error || "AI tutor request failed.");
      }

      setAnswer(data.answer);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to reach the AI tutor right now."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-6 border border-white/10 p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">AI Tutor</h2>
        <p className="mt-1 text-sm text-white/50">{chapter}</p>
      </div>

      {concepts.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {concepts.map((concept) => (
            <span key={concept} className="border border-white/10 px-2 py-1 text-xs text-white/70">
              {concept}
            </span>
          ))}
        </div>
      )}

      <textarea
        className="min-h-28 w-full border border-white/10 bg-black p-3 text-white outline-none focus:border-white/40"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="Ask a doubt, request a derivation, or ask for NEET/JEE shortcuts..."
      />

      <button
        onClick={askTutor}
        disabled={isLoading}
        className="mt-3 border border-white/20 px-4 py-2 text-sm font-medium disabled:opacity-50"
      >
        {isLoading ? "Thinking..." : "Ask AI Tutor"}
      </button>

      {error && (
        <div className="mt-4 border border-red-500/50 p-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {answer && (
        <div className="mt-4 whitespace-pre-wrap border border-white/10 p-4 leading-7 text-white/85">
          {answer}
        </div>
      )}
    </section>
  );
}
