import type { ReactNode } from "react";
import "katex/dist/katex.min.css";

export default function SaltAnalysisLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="salt-analysis-dark-shell min-h-screen bg-[#02050a] text-slate-100">
      {children}

      <style>{`
        html:has(.salt-analysis-dark-shell),
        body:has(.salt-analysis-dark-shell) {
          background: #02050a !important;
        }

        .salt-analysis-dark-shell {
          min-height: 100vh;
          background: #02050a;
          color-scheme: dark;
        }

        .salt-analysis-dark-shell main,
        .salt-analysis-dark-shell article {
          background-color: #02050a !important;
          background-image: none !important;
        }

        .salt-analysis-dark-shell table,
        .salt-analysis-dark-shell thead,
        .salt-analysis-dark-shell tbody,
        .salt-analysis-dark-shell tr,
        .salt-analysis-dark-shell th,
        .salt-analysis-dark-shell td {
          background-color: #050a12 !important;
        }

        .salt-analysis-dark-shell aside,
        .salt-analysis-dark-shell code,
        .salt-analysis-dark-shell [class*="bg-white"],
        .salt-analysis-dark-shell [class*="bg-slate-50"],
        .salt-analysis-dark-shell [class*="bg-gray-50"],
        .salt-analysis-dark-shell [class*="bg-cyan-950"],
        .salt-analysis-dark-shell [class*="bg-sky-950"],
        .salt-analysis-dark-shell [class*="bg-blue-950"],
        .salt-analysis-dark-shell [class*="bg-indigo-950"],
        .salt-analysis-dark-shell [class*="bg-violet-950"],
        .salt-analysis-dark-shell [class*="bg-fuchsia-950"],
        .salt-analysis-dark-shell [class*="bg-pink-950"],
        .salt-analysis-dark-shell [class*="bg-rose-950"],
        .salt-analysis-dark-shell [class*="bg-orange-950"],
        .salt-analysis-dark-shell [class*="bg-amber-950"],
        .salt-analysis-dark-shell [class*="bg-lime-950"],
        .salt-analysis-dark-shell [class*="bg-emerald-950"],
        .salt-analysis-dark-shell [class*="bg-teal-950"] {
          background-color: #07101c !important;
        }

        .salt-analysis-dark-shell img,
        .salt-analysis-dark-shell svg,
        .salt-analysis-dark-shell canvas {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
