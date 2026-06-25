"use client";

import { useState } from "react";

export default function AiTutorBox({ chapter, concepts }: { chapter: string; concepts: string[] }) {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const triggerAction = async (actionType: string) => {
    setLoading(true);
    setResponse("");

    try {
      // Simulated Graph responses representing world-class educational payload
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      let replyText = "";
      if (actionType === "simple") {
        replyText = `💡 Explaining ${chapter} Simply: Atoms are like tiny solar systems. The center (nucleus) has heavy protons and neutrons, while super-light electrons orbit around in specific shells without falling in.`;
      } else if (actionType === "ncert") {
        replyText = `📖 NCERT Alignment: ${chapter} explores Bohr's stationary orbits, quantization of angular momentum, and how the Schrödinger wave equation treats electrons as waves, forming atomic orbitals.`;
      } else if (actionType === "neet") {
        replyText = `🎯 NEET Focus: Memorize the radius (r = 0.529 n²/Z Å) and velocity (v = 2.188×10⁶ Z/n m/s) formulas. Watch out for questions comparing the de Broglie wavelength of different particles.`;
      } else if (actionType === "jee") {
        replyText = `🚀 JEE Advanced Focus: Master multi-electron derivations, angular distribution nodes (Radial nodes = n - l - 1, Angular nodes = l), and radial probability distribution curves.`;
      } else if (actionType === "mistakes") {
        replyText = `⚠️ Common Mistakes: Don't forget to square the principal quantum number (n²) in radius and energy expressions. Remember that for hydrogenic ions, you MUST divide by Z².`;
      } else if (actionType === "trick") {
        replyText = `🧠 Memory Trick: To remember quantum numbers: "Please Ask My Sir" $\rightarrow$ **P**rincipal, **A**zimuthal, **M**agnetic, **S**pin.`;
      } else if (actionType === "viva") {
        replyText = `🎤 5 Viva Questions:\n1. Why can't we know both the position and momentum of an electron exactly?\n2. What is a radial node?\n3. Why is the total energy of an electron negative?\n4. What causes emission line spectra in hydrogen?\n5. Differentiate an orbit from an orbital.`;
      } else if (actionType === "challenge") {
        replyText = `⚔️ Challenge Mode:\nCalculate the exact wavelength of the photon emitted when an electron drops from the 4th orbit to the 2nd orbit in a Hydrogen atom. (Post your deduce in code or calculator).`;
      }

      setResponse(replyText);
    } catch (err) {
      setResponse("Error fetching contextual syllabus payload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 animate-fadeIn">
      <div>
        <h3 className="text-xl font-black text-slate-800 dark:text-slate-50">Syllabus-Grounded AI Tutor</h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Targeting: {chapter}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => triggerAction("simple")} className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] font-bold text-indigo-700 dark:text-indigo-400 hover:border-indigo-300 transition text-left">Explain Simply</button>
        <button onClick={() => triggerAction("ncert")} className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] font-bold text-indigo-700 dark:text-indigo-400 hover:border-indigo-300 transition text-left">Explain NCERT</button>
        <button onClick={() => triggerAction("neet")} className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] font-bold text-indigo-700 dark:text-indigo-400 hover:border-indigo-300 transition text-left">Target NEET</button>
        <button onClick={() => triggerAction("jee")} className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] font-bold text-indigo-700 dark:text-indigo-400 hover:border-indigo-300 transition text-left">Target JEE Adv</button>
        <button onClick={() => triggerAction("mistakes")} className="p-3 bg-amber-50/40 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900 rounded-xl text-[11px] font-bold text-amber-800 dark:text-amber-400 hover:border-amber-300 transition text-left col-span-2">Common Mistakes</button>
        <button onClick={() => triggerAction("trick")} className="p-3 bg-rose-50/40 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900 rounded-xl text-[11px] font-bold text-rose-800 dark:text-rose-400 hover:border-rose-300 transition text-left col-span-2">Memory Trick</button>
        <button onClick={() => triggerAction("viva")} className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] font-bold hover:border-slate-300 transition text-left">5 Viva Questions</button>
        <button onClick={() => triggerAction("challenge")} className="p-3 bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-800 rounded-xl text-[11px] font-bold text-emerald-800 dark:text-emerald-300 hover:border-emerald-400 transition text-left">Challenge Me</button>
      </div>

      {loading && (
        <div className="text-center py-4 text-xs font-bold text-indigo-600 animate-pulse">Loading verified context...</div>
      )}

      {response && (
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 text-xs font-medium leading-relaxed whitespace-pre-line animate-fadeIn">
          {response}
        </div>
      )}
    </div>
  );
}
