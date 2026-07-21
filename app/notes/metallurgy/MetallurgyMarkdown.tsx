import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./metallurgy.css";

export default function MetallurgyMarkdown({ content }: { content: string }) {
  return (
    <article className="metallurgy-notes">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          table: ({ children }) => <div className="table-scroll"><table>{children}</table></div>,
          blockquote: ({ children }) => <aside className="concept-box">{children}</aside>,
          img: ({ src = "", alt = "" }) => (
            // Source diagrams are redrawn as local SVGs in /public/notes/metallurgy.
            // eslint-disable-next-line @next/next/no-img-element
            <img className="edu-diagram" src={src} alt={alt} loading="lazy" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
