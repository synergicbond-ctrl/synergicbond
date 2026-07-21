import { notFound } from "next/navigation";
import Link from "next/link";
import MetallurgyMarkdown from "../MetallurgyMarkdown";
const loaders: Record<string,()=>Promise<{default:string}>>={
  "part-1":()=>import("../parts/part01"),
  "part-2":()=>import("../parts/part02"),
  "part-3":()=>import("../parts/part03"),
  "part-4":()=>import("../parts/part04"),
  "part-5":()=>import("../parts/part05"),
  "part-6":()=>import("../parts/part06"),
  "part-7":()=>import("../parts/part07"),
  "part-8":()=>import("../parts/part08"),
  "part-9":()=>import("../parts/part09"),
  "part-10":()=>import("../parts/part10"),
  "part-11":()=>import("../parts/part11"),
  "part-12":()=>import("../parts/part12"),
  "part-13":()=>import("../parts/part13"),
  "part-14":()=>import("../parts/part14"),
  "part-15":()=>import("../parts/part15"),
  "part-16":()=>import("../parts/part16"),
  "part-17":()=>import("../parts/part17"),
  "part-18":()=>import("../parts/part18")
};
export function generateStaticParams(){return Object.keys(loaders).map(part=>({part}));}
export default async function MetallurgyPartPage({params}:{params:Promise<{part:string}>}){const {part}=await params;const loader=loaders[part];if(!loader)notFound();const {default:content}=await loader();const n=Number(part.replace("part-",""));return <main className="metallurgy-shell"><nav className="part-nav"><Link href="/notes/metallurgy">← Metallurgy</Link><span>Part {n} of 18</span></nav><MetallurgyMarkdown content={content}/><nav className="part-nav bottom">{n>1?<Link href={`/notes/metallurgy/part-${n-1}`}>← Previous</Link>:<span/>}{n<18?<Link href={`/notes/metallurgy/part-${n+1}`}>Next →</Link>:<Link href="/notes/metallurgy">Chapter Hub →</Link>}</nav></main>}
