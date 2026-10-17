"use client";

import { useEffect, useRef } from "react";

export type Atom3 = {
  x: number;
  y: number;
  z: number;
  r: number;
  color: string;
  dim?: boolean;
  alpha?: number;
  label?: string;
};

export type Line3 = {
  a: [number, number, number];
  b: [number, number, number];
  color?: string;
  dash?: boolean;
};

type Props = {
  atoms: Atom3[];
  lines?: Line3[];
  height?: number;
  autoRotate?: boolean;
  label: string;
};

function shade(hex: string, k: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v * k)));
  return `rgb(${c((n >> 16) & 255)},${c((n >> 8) & 255)},${c(n & 255)})`;
}

/**
 * Small dependency-free 3D viewer: painter's-algorithm spheres and lines on a
 * canvas. Drag to rotate; it idles in a slow spin unless the viewer prefers
 * reduced motion.
 */
export function Scene3D({ atoms, lines = [], height = 360, autoRotate = true, label }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const atomsRef = useRef(atoms);
  const linesRef = useRef(lines);
  const spinRef = useRef(autoRotate);
  const view = useRef({ ay: 0.7, ax: 0.42, dragging: false, lx: 0, ly: 0 });

  useEffect(() => {
    atomsRef.current = atoms;
    linesRef.current = lines;
    spinRef.current = autoRotate;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(wrap);

    const FOCAL = 7;
    const project = (x: number, y: number, z: number) => {
      const { ay, ax } = view.current;
      const x1 = x * Math.cos(ay) + z * Math.sin(ay);
      const z1 = -x * Math.sin(ay) + z * Math.cos(ay);
      const y2 = y * Math.cos(ax) - z1 * Math.sin(ax);
      const z2 = y * Math.sin(ax) + z1 * Math.cos(ax);
      const p = FOCAL / (FOCAL - z2);
      const s = Math.min(w, h) / 4.4;
      return { sx: w / 2 + x1 * s * p, sy: h / 2 - y2 * s * p, z: z2, p, s };
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const v = view.current;
      if (spinRef.current && !reduce && !v.dragging) v.ay += 0.006;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      type Item =
        | { z: number; kind: "line"; l: Line3; a: ReturnType<typeof project>; b: ReturnType<typeof project> }
        | { z: number; kind: "atom"; at: Atom3; q: ReturnType<typeof project> };
      const items: Item[] = [];
      for (const l of linesRef.current) {
        const a = project(...l.a);
        const b = project(...l.b);
        items.push({ z: (a.z + b.z) / 2 - 0.02, kind: "line", l, a, b });
      }
      for (const at of atomsRef.current) {
        const q = project(at.x, at.y, at.z);
        items.push({ z: q.z, kind: "atom", at, q });
      }
      items.sort((m, n) => m.z - n.z);

      for (const it of items) {
        if (it.kind === "line") {
          ctx.save();
          ctx.globalAlpha = 0.35 + 0.35 * ((it.z + 2) / 4);
          ctx.strokeStyle = it.l.color ?? "#9bb8b3";
          ctx.lineWidth = 1.4;
          ctx.setLineDash(it.l.dash ? [5, 5] : []);
          ctx.beginPath();
          ctx.moveTo(it.a.sx, it.a.sy);
          ctx.lineTo(it.b.sx, it.b.sy);
          ctx.stroke();
          ctx.restore();
        } else {
          const { at, q } = it;
          const rad = Math.max(2, at.r * q.s * q.p);
          const depth = 0.72 + 0.28 * ((q.z + 2) / 4);
          ctx.save();
          ctx.globalAlpha = at.dim ? 0.16 : (at.alpha ?? 1);
          const g = ctx.createRadialGradient(q.sx - rad * 0.35, q.sy - rad * 0.35, rad * 0.1, q.sx, q.sy, rad);
          g.addColorStop(0, shade(at.color, 1.45 * depth));
          g.addColorStop(0.55, shade(at.color, depth));
          g.addColorStop(1, shade(at.color, 0.45 * depth));
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(q.sx, q.sy, rad, 0, Math.PI * 2);
          ctx.fill();
          if (at.label && !at.dim) {
            ctx.fillStyle = "#06100f";
            ctx.font = `700 ${Math.max(10, rad * 0.8)}px system-ui, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(at.label, q.sx, q.sy + 0.5);
          }
          ctx.restore();
        }
      }
    };
    frame();

    const down = (e: PointerEvent) => {
      view.current.dragging = true;
      view.current.lx = e.clientX;
      view.current.ly = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      const v = view.current;
      if (!v.dragging) return;
      v.ay += (e.clientX - v.lx) * 0.01;
      v.ax = Math.max(-1.4, Math.min(1.4, v.ax + (e.clientY - v.ly) * 0.01));
      v.lx = e.clientX;
      v.ly = e.clientY;
    };
    const up = () => {
      view.current.dragging = false;
    };
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden rounded-xl border border-[var(--border)]"
      style={{ height, background: "radial-gradient(ellipse at 50% 40%, #1b3a36 0%, #0c1a19 70%)" }}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label={label}
        className="block h-full w-full cursor-grab touch-none active:cursor-grabbing"
        style={{ width: "100%", height: "100%" }}
      />
      <span className="pointer-events-none absolute bottom-2 right-3 text-[11px] text-white/55">drag to rotate</span>
    </div>
  );
}
