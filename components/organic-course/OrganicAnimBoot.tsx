"use client";
import { useEffect } from "react";

/** Starts the mechanism animations that are declared in the section HTML (.sb-anim placeholders). */
export default function OrganicAnimBoot({ src, sectionKey }: { src: string; sectionKey: string }) {
  useEffect(() => {
    if (!document.querySelector(".sb-anim")) return;
    const s = document.createElement("script");
    s.src = `${src}?k=${encodeURIComponent(sectionKey)}`;
    s.async = true;
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, [src, sectionKey]);
  return null;
}
