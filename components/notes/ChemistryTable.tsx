import type { ReactNode } from "react";

export function ChemistryTable({
  headers,
  rows,
  className = "",
  ariaLabel = "Scrollable chemistry table",
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={`my-6 w-full overflow-x-auto rounded-[var(--sb-radius)] border border-[var(--sb-border)] bg-[var(--sb-surface-1)] ${className}`}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <table className="w-full min-w-[360px] border-collapse text-left text-sm text-[var(--sb-text-body)]">
        <thead>
          <tr className="border-b border-[var(--sb-border-strong)] bg-[var(--sb-surface-2)] font-semibold text-[var(--sb-text)]">
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-3.5">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[var(--sb-border)] last:border-none even:bg-[var(--sb-bg-grid)] hover:bg-[var(--sb-surface-2)]">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
