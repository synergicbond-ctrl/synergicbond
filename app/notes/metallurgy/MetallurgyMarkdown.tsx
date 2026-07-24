import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./metallurgy.css";
import OreClassificationGrid from "./OreClassificationGrid";

const ORE_GRID_MARKER = "[[ORE_CLASSIFICATION_GRID]]";

function MarkdownBlock({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        table: ({ children }) => <div className="table-scroll"><table>{children}</table></div>,
        blockquote: ({ children }) => <aside className="concept-box">{children}</aside>,
        img: ({ src = "", alt = "" }) => (
          <figure className="metallurgy-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="edu-diagram" src={src} alt={alt} loading="lazy" />
            {alt && <figcaption>{alt}</figcaption>}
          </figure>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default function MetallurgyMarkdown({ content }: { content: string }) {
  if (!content.includes(ORE_GRID_MARKER)) {
    return <article className="metallurgy-notes"><MarkdownBlock content={content} /></article>;
  }
  const markerIndex = content.indexOf(ORE_GRID_MARKER);
  const before = content.slice(0, markerIndex);
  const after = content.slice(markerIndex + ORE_GRID_MARKER.length);
  return (
    <article className="metallurgy-notes">
      <MarkdownBlock content={before} />
      <OreClassificationGrid />
      <MarkdownBlock content={after} />
    </article>
  );
}
