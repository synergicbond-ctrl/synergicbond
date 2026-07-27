import type { ReactNode } from "react";
import { AnchoredFigures } from "./AnchoredFigures";

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (node && typeof node === "object" && "props" in node) return textOf((node as { props: { children?: ReactNode } }).props.children);
  return "";
}

function headingId(part: number, children: ReactNode) {
  return `p${part}-${textOf(children)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export function createMarkdownComponents(part: number) {
  return {
    h1: (props: any) => <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl" {...props} id={headingId(part, props.children)} />,
    h2: (props: any) => {
      const id = headingId(part, props.children);
      return <><h3 className="mt-10 border-l-4 border-cyan-400 pl-4 text-2xl font-black text-white" {...props} id={id} /><AnchoredFigures anchor={id} /></>;
    },
    h3: (props: any) => {
      const id = headingId(part, props.children);
      return <><h4 className="mt-8 text-xl font-extrabold text-cyan-200" {...props} id={id} /><AnchoredFigures anchor={id} /></>;
    },
    p: (props: any) => <p className="mt-4 text-[1.02rem] leading-8 text-slate-200" {...props} />,
    strong: (props: any) => <strong className="font-extrabold text-white" {...props} />,
    em: (props: any) => <em className="text-cyan-100" {...props} />,
    ul: (props: any) => <ul className="mt-4 space-y-2 pl-6 text-slate-200 marker:text-cyan-300" {...props} />,
    ol: (props: any) => <ol className="mt-4 space-y-2 pl-6 text-slate-200 marker:font-bold marker:text-amber-300" {...props} />,
    li: (props: any) => <li className="leading-7" {...props} />,
    blockquote: (props: any) => <blockquote className="my-6 rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] px-5 py-4 text-amber-50 shadow-inner" {...props} />,
    table: (props: any) => <div className="my-7 overflow-x-auto rounded-2xl border border-white/10"><table className="min-w-full border-collapse text-left text-sm text-slate-200" {...props} /></div>,
    thead: (props: any) => <thead className="bg-cyan-400/10 text-cyan-100" {...props} />,
    th: (props: any) => <th className="whitespace-nowrap border-b border-r border-white/10 px-4 py-3 font-black last:border-r-0" {...props} />,
    td: (props: any) => <td className="border-b border-r border-white/10 px-4 py-3 align-top leading-6 last:border-r-0" {...props} />,
    code: (props: any) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-100" {...props} />,
    hr: () => <hr className="my-10 border-white/10" />,
  };
}
