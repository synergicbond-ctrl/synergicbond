"use client";
import { useEffect, useRef } from "react";
/** Renders one chapter section in an isolated frame with its own chapter styles; auto-sizes to content. */
export default function ModuleFrame({ html, title }: { html: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const f = ref.current; if (!f) return;
    const fit = () => { const d = f.contentDocument; if (d?.body) f.style.height = d.documentElement.scrollHeight + 8 + "px"; };
    f.addEventListener("load", fit);
    const id = window.setInterval(fit, 700); // sections with animations grow after scripts run
    return () => { f.removeEventListener("load", fit); window.clearInterval(id); };
  }, [html]);
  return <iframe ref={ref} title={title} srcDoc={html} style={{ width: "100%", border: "none", minHeight: 240 }} sandbox="allow-scripts allow-same-origin" />;
}
