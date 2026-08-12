import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function UploadAnalysisEngine() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 max-w-3xl mx-auto space-y-12 animate-fadeIn">
      <nav className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <Link href="/" className="text-xs font-black tracking-widest text-indigo-400 uppercase">Synergic Bond</Link>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1">🧠 AI Document & DPP Engine</h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">Upload any DPP, assignment, textbook page, or question paper. The autonomous engine will instantly evaluate mechanisms, solve queries, or grade papers.</p>
        </div>
        <ThemeToggle />
      </nav>

      <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-3xl border-dashed border-slate-700 hover:border-indigo-500/50 transition duration-300 text-center space-y-6">
        <div className="max-w-md mx-auto space-y-2">
          <span className="text-4xl block">📄</span>
          <h3 className="font-extrabold text-sm tracking-tight text-slate-100">Drag & Drop Documents or Handwritten Diagrams</h3>
          <p className="text-[10px] text-slate-400 leading-relaxed">Supports PDF, PNG, JPEG, or TXT formats (DPPs, Question Papers, Olympiad problem sheets, textbook excerpts).</p>
        </div>

        <input 
          type="file" 
          multiple
          className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-400 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:tracking-widest file:uppercase file:bg-indigo-600/20 file:text-indigo-400 hover:file:bg-indigo-600/30 file:cursor-pointer transition w-full max-w-xl" 
        />

        <div className="space-y-3 max-w-xl mx-auto pt-4">
          <label className="text-[9px] font-extrabold tracking-widest uppercase text-slate-500 block">Select Engine Task</label>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-bold text-slate-300 hover:border-indigo-500/40 transition cursor-pointer">
              🤖 Solve DPP / Assignment
            </button>
            <button className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-bold text-slate-300 hover:border-indigo-500/40 transition cursor-pointer">
              ⚡ Grade Question Paper
            </button>
            <button className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-bold text-slate-300 hover:border-indigo-500/40 transition cursor-pointer">
              🔍 Explain Mechanism / Anomaly
            </button>
            <button className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-bold text-slate-300 hover:border-indigo-500/40 transition cursor-pointer">
              📖 Add Material to Vault
            </button>
          </div>
        </div>

        <button className="w-full max-w-xl py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-2xl shadow-sm transition tracking-widest uppercase cursor-pointer mt-4">
          Run Autonomous Analysis
        </button>
      </div>
    </main>
  );
}
