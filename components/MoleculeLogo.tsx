"use client";
import { useEffect, useRef } from "react";

/**
 * Compact animated atom for the navbar / top-left corner.
 * Transparent background, no text — just a spinning nucleus + orbiting electrons.
 */
export default function MoleculeLogo({ size = 36 }: { size?: number }) {
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
    let t = 0;
    let animId: number;

    const rings = [
      { rx: W * 0.42, ry: W * 0.15, tilt: 0,           speed: 2.2,  color: "#00F5D4" },
      { rx: W * 0.42, ry: W * 0.15, tilt: Math.PI / 3, speed: -1.8, color: "#00BBF9" },
      { rx: W * 0.42, ry: W * 0.15, tilt: -Math.PI / 3,speed: 2.6,  color: "#9B5DE5" },
    ];

    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.02;

      // Orbital rings + electrons
      rings.forEach((r) => {
        ctx.save();
        ctx.translate(CX, CY);
        ctx.rotate(r.tilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, r.rx, r.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = r.color + "55";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        const phase = t * r.speed;
        const ex = Math.cos(phase) * r.rx;
        const ey = Math.sin(phase) * r.ry;
        const g = ctx.createRadialGradient(ex, ey, 0, ex, ey, 3);
        g.addColorStop(0, r.color);
        g.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(ex, ey, 3, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ex, ey, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();
        ctx.restore();
      });

      // Pulsing nucleus
      const pulse = 0.85 + 0.15 * Math.sin(t * 3);
      const ng = ctx.createRadialGradient(CX, CY, 0, CX, CY, 4 * pulse);
      ng.addColorStop(0, "#ff6b6b");
      ng.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(CX, CY, 4 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = ng;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(CX, CY, 2, 0, Math.PI * 2);
      ctx.fillStyle = "#ff8787";
      ctx.fill();

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return <canvas ref={canvasRef} style={{ width: size, height: size }} />;
}
