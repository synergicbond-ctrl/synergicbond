"use client";

import { useState } from "react";

export default function ExamHubPage() {
  const [exam, setExam] = useState("neet");
  const [totalQuestions, setTotalQuestions] = useState(45);
  const [loading, setLoading] = useState(false);
  const [paperOutput, setPaperOutput] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPaperOutput("");

    try {
      const res = await aPIExamCall(exam, totalQuestions);
      setPaperOutput(JSON.stringify(res, null, 2));
    } catch (err) {
      setPaperOutput("Error generating mock paper via question engine.");
    } finally {
      setLoading(false);
    }
  };

  // Simulated API call to align with your aiQuestionEngine endpoint
  const aPIExamCall = (selectedExam: string, count: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          paperTitle: `${selectedExam.toUpperCase()} Mock Test (${count} Questions)`,
          syllabus: "Chemistry Knowledge Graph Hydrated",
          questions: Array.from({ length: Math.min(count, 3) }).map((_, i) => ({
            id: `q-${i + 1}`,
            text: `Mock ${selectedExam.toUpperCase()} Question ${i + 1}: Conceptual chemistry problem based on syllabus knowledge graph.`,
            options: ["A. Option analysis 1", "B. Option analysis 2", "C. Option analysis 3", "D. Option analysis 4"],
            answer: "A",
            solution: "Step-by-step master syllabus deduction resolving the problem rigorously."
          }))
        });
      }, 1500);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-4xl mx-auto space-y-10">
      
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Mock Exam Generator</h1>
        <p className="text-slate-600 text-sm">
          Generate highly tailored chapter tests, unit tests, or full NEET/JEE mock papers dynamically sourced from the syllabus database.
        </p>
      </header>

      {/* Configuration Form */}
      <form onSubmit={handleGenerate} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Target Exam</label>
            <select 
              value={exam} 
              onChange={(e) => setExam(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-slate-200 font-semibold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="neet">NEET Chemistry</option>
              <option value="jeeMain">JEE Main Chemistry</option>
              <option value="jeeAdvanced">JEE Advanced Chemistry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Question Count</label>
            <select 
              value={totalQuestions} 
              onChange={(e) => setTotalQuestions(Number(e.target.value))}
              className="w-full p-3.5 rounded-xl border border-slate-200 font-semibold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value={10}>10 Questions (Quick Chapter Drill)</option>
              <option value={25}>25 Questions (Unit Test Mock)</option>
              <option value={45}>45 Questions (NEET Full Mock)</option>
              <option value={75}>75 Questions (JEE Main Full Mock)</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-center rounded-xl shadow transition"
        >
          {loading ? "Generating Mock Paper via Knowledge Graph..." : "Generate Practice Test"}
        </button>

      </form>

      {/* Mock Paper Output Panel */}
      {paperOutput && (
        <section className="bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-800 shadow-lg font-mono text-xs overflow-x-auto space-y-4">
          <h3 className="font-bold text-indigo-400 text-sm border-b border-slate-700 pb-2">Paper Payload Generated:</h3>
          <pre>{paperOutput}</pre>
        </section>
      )}

    </div>
  );
}
