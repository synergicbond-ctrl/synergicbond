"use client";
import { useEffect, useRef } from "react";

/**
 * Compact animated NETWORK molecule for the navbar / top-left corner.
 * Mini version of the hero network: rotating 3D node cluster with
 * connecting edges, colorful nodes, orbital ring + pulsing nucleus.
 * Transparent background, no text.
 */
export default function MoleculeLogo({ size = 44 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;
    const DPR = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    cv.width = size * DPR;
    cv.height = size * DPR;
    ctx.scale(DPR, DPR);

    const W = size, H = size, CX = W / 2, CY = H / 2;
    const R = size * 0.4;
    let t = 0;
    let animId: number;

    const palette = ["#00F5D4", "#00BBF9", "#9B5DE5", "#F472B6", "#FFD700", "#69F0AE"];

    // Icosahedron vertices + center
    const phi = (1 + Math.sqrt(5)) / 2;
    const raw = [
      [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
      [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
      [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1],
    ];
    const norm = Math.sqrt(1 + phi * phi);
    const nodes = raw.map((v, i) => ({
      x: (v[0] / norm) * R, y: (v[1] / norm) * R, z: (v[2] / norm) * R,
      color: palette[i % palette.length],
    }));

    // Edges between nearby vertices (icosahedron edges)
    const edges: [number, number][] = [];
    const thresh = R * 1.2;
    for (let i = 0; i < nodes.length; i++)
      for (let j = i + 1; j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y, nodes[i].z - nodes[j].z);
        if (d < thresh) edges.push([i, j]);
      }

    function rot(x: number, y: number, z: number, ax: number, ay: number) {
      const y1 = y * Math.cos(ax) - z * Math.sin(ax), z1 = y * Math.sin(ax) + z * Math.cos(ax);
      const x2 = x * Math.cos(ay) + z1 * Math.sin(ay), z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
      return [x2, y1, z2];
    }
    function proj(x: number, y: number, z: number) {
      const fov = size * 2.4, s = fov / (z + fov);
      return [x * s + CX, -y * s + CY, z];
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;
      const ax = t * 0.7, ay = t;

      const pts = nodes.map((n) => {
        const [rx, ry, rz] = rot(n.x, n.y, n.z, ax, ay);
        const [px, py] = proj(rx, ry, rz);
        return { px, py, z: rz, color: n.color };
      });

      // Edges
      edges.forEach(([i, j]) => {
        const a = pts[i], b = pts[j];
        const depth = Math.min(1, Math.max(0.15, (((a.z + b.z) / 2) + R) / (2 * R)));
        ctx.beginPath();
        ctx.moveTo(a.px, a.py);
        ctx.lineTo(b.px, b.py);
        ctx.strokeStyle = `rgba(120,200,255,${depth * 0.4})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      });

      // Nodes back-to-front
      pts.slice().sort((p, q) => p.z - q.z).forEach((p) => {
        const depth = Math.min(1, Math.max(0.3, (p.z + R) / (2 * R)));
        const r = 1.6 * depth + 0.4;
        const g = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, r * 2.5);
        g.addColorStop(0, p.color);
        g.addColorStop(1, "transparent");
        ctx.globalAlpha = depth;
        ctx.beginPath(); ctx.arc(p.px, p.py, r * 2.5, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(p.px, p.py, r, 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Pulsing nucleus
      const pulse = 0.85 + 0.15 * Math.sin(t * 3);
      const ng = ctx.createRadialGradient(CX, CY, 0, CX, CY, 4 * pulse);
      ng.addColorStop(0, "#ff6b6b");
      ng.addColorStop(1, "transparent");
      ctx.beginPath(); ctx.arc(CX, CY, 4 * pulse, 0, Math.PI * 2); ctx.fillStyle = ng; ctx.fill();
      ctx.beginPath(); ctx.arc(CX, CY, 1.6, 0, Math.PI * 2); ctx.fillStyle = "#ff8787"; ctx.fill();

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return <canvas ref={canvasRef} style={{ width: size, height: size }} />;
}
