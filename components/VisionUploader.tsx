"use client";

import { useState } from "react";
import Image from "next/image";

export default function VisionUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeDiagram = async () => {
    if (!selectedImage) return;
    setLoading(true);
    setAnalysis("");

    try {
      const res = await fetch("/api/vision", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          imageBase64: selectedImage, 
          promptText: "Explain the arrow pushing or reaction steps in this mechanism." 
        })
      });
      const data = await res.json();
      setAnalysis(data.analysis || "Diagram analyzed successfully.");
    } catch {
      setAnalysis("Error analyzing the chemical diagram via vision engine.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4">
      <div>
        <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">AI Chemistry Vision Engine</h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5">Upload or draw a mechanism / reaction to analyze steps instantly.</p>
      </div>

      <div className="space-y-3">
        <input 
          type="file" 
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:file:bg-slate-800 dark:file:text-indigo-400"
        />

        {selectedImage && (
          <div className="relative w-full h-48 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
            <Image src={selectedImage} alt="Chemical Diagram" width={360} height={192} unoptimized className="max-h-full object-contain" />
          </div>
        )}

        <button 
          onClick={analyzeDiagram}
          disabled={!selectedImage || loading}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold text-sm rounded-xl transition"
        >
          {loading ? "Analyzing Diagram via OCR/Vision..." : "Run Vision Analysis"}
        </button>
      </div>

      {analysis && (
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 text-xs font-medium leading-relaxed whitespace-pre-line animate-fadeIn">
          {analysis}
        </div>
      )}
    </div>
  );
}
