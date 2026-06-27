"use client";
import { useEffect, useRef } from "react";

export default function MoleculeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;
    let animId: number;
    let t = 0;

    const W = cv.width, H = cv.height;

    const COLORS: Record<string, { fill: string; glow: string; r: number }> = {
      Mg: { fill: "#ff6b6b", glow: "rgba(255,100,100,0.55)", r: 13 },
      N:  { fill: "#00e5c4", glow: "rgba(0,229,196,0.45)",   r: 8  },
      C:  { fill: "#74c0fc", glow: "rgba(116,192,252,0.35)", r: 6.5 },
      O:  { fill: "#ff8787", glow: "rgba(255,120,120,0.4)",  r: 7.5 },
      S:  { fill: "#ffd43b", glow: "rgba(255,212,59,0.45)",  r: 9  },
      H:  { fill: "#ced4da", glow: "rgba(200,210,220,0.25)", r: 4.5 },
      P:  { fill: "#da77f2", glow: "rgba(218,119,242,0.45)", r: 8  },
    };

    type Atom = { x: number; y: number; z: number; tp: string };
    const atoms: Atom[] = [];
    function a(x: number, y: number, z: number, tp: string) { atoms.push({ x, y, z, tp }); }

    a(0, 0, 0, "Mg");

    const r1 = 2.0;
    a(r1,0,0,"N"); a(-r1,0,0,"N"); a(0,r1,0,"N"); a(0,-r1,0,"N"); a(0,0,r1,"N"); a(0,0,-r1,"N");

    const r2 = 2.75;
    [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]
      .forEach(v => a(v[0]*r2, v[1]*r2, v[2]*r2, "C"));

    const r3 = 4.3;
    a(r3,0,0,"O"); a(-r3,0,0,"O"); a(0,r3,0,"O"); a(0,-r3,0,"O"); a(0,0,r3,"O"); a(0,0,-r3,"O");

    const r4 = 5.8, phi = (1 + Math.sqrt(5)) / 2, scale4 = r4 / Math.sqrt(1 + phi * phi);
    [[0,1,phi],[0,-1,phi],[0,1,-phi],[0,-1,-phi],[1,phi,0],[-1,phi,0],[1,-phi,0],[-1,-phi,0],[phi,0,1],[-phi,0,1],[phi,0,-1],[-phi,0,-1]]
      .forEach(v => a(v[0]*scale4, v[1]*scale4, v[2]*scale4, "S"));

    const r5 = 7.0;
    [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1],[0.707,0.707,0],[-0.707,0.707,0],[0.707,0,0.707],[0,0.707,0.707],[0.707,-0.707,0],[0,0.707,-0.707]]
      .forEach(v => { const l = Math.sqrt(v[0]**2+v[1]**2+v[2]**2); a(v[0]/l*r5, v[1]/l*r5, v[2]/l*r5, "H"); });

    const r6 = 3.8;
    [[-1,-1,-1],[-1,-1,1],[-1,1,-1],[-1,1,1],[1,-1,-1],[1,-1,1],[1,1,-1],[1,1,1]]
      .forEach(v => { const l = Math.sqrt(3); a(v[0]/l*r6, v[1]/l*r6, v[2]/l*r6, "P"); });

    const bonds: [number,number][] = [];
    const thresh = 3.6;
    for (let i = 0; i < atoms.length; i++)
      for (let j = i + 1; j < atoms.length; j++) {
        const dx=atoms[i].x-atoms[j].x, dy=atoms[i].y-atoms[j].y, dz=atoms[i].z-atoms[j].z;
        const d = Math.sqrt(dx*dx+dy*dy+dz*dz);
        if (d < thresh && d > 0.4) bonds.push([i, j]);
      }

    function rot(x: number, y: number, z: number, ax: number, ay: number, az: number) {
      const y1=y*Math.cos(ax)-z*Math.sin(ax), z1=y*Math.sin(ax)+z*Math.cos(ax);
      const x2=x*Math.cos(ay)+z1*Math.sin(ay), z2=-x*Math.sin(ay)+z1*Math.cos(ay);
      const x3=x2*Math.cos(az)-y1*Math.sin(az), y3=x2*Math.sin(az)+y1*Math.cos(az);
      return [x3, y3, z2];
    }
    function proj(x: number, y: number, z: number) {
      const fov=900, zo=18, s=fov/(z+zo);
      return [x*s+W/2, -y*s+H/2, s, z];
    }
    function shadeHex(hex: string, amt: number) {
      const n = parseInt(hex.slice(1), 16);
      const r=Math.min(255,Math.max(0,(n>>16)+amt));
      const g=Math.min(255,Math.max(0,((n>>8)&255)+amt));
      const b=Math.min(255,Math.max(0,(n&255)+amt));
      return `rgb(${r},${g},${b})`;
    }

    const starPositions = Array.from({length:60}, () => [Math.random()*W, Math.random()*H, Math.random()*1.2+0.2, Math.random()*0.5+0.1]);

    const rings = [
      { rx:190, ry:50, tilt:0.4,  phase:0,   speed:1.2,  color:"rgba(0,229,196,0.55)",  ec:"#00e5c4" },
      { rx:160, ry:45, tilt:1.1,  phase:2.1, speed:-0.9, color:"rgba(116,192,252,0.5)", ec:"#74c0fc" },
      { rx:175, ry:38, tilt:2.0,  phase:4.2, speed:1.5,  color:"rgba(218,119,242,0.45)",ec:"#da77f2" },
      { rx:145, ry:55, tilt:0.8,  phase:1.0, speed:-0.7, color:"rgba(255,212,59,0.4)",  ec:"#ffd43b" },
      { rx:210, ry:42, tilt:1.6,  phase:3.0, speed:1.0,  color:"rgba(255,135,135,0.4)", ec:"#ff8787" },
      { rx:130, ry:60, tilt:2.6,  phase:5.0, speed:-1.1, color:"rgba(105,240,174,0.4)", ec:"#69f0ae" },
    ];

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Background
      const bgGrd = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.75);
      bgGrd.addColorStop(0, "#0e1e35");
      bgGrd.addColorStop(0.5, "#081428");
      bgGrd.addColorStop(1, "#040c18");
      ctx.fillStyle = bgGrd; ctx.fillRect(0, 0, W, H);

      // Nebula
      const nebGrd = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, 220);
      nebGrd.addColorStop(0, "rgba(0,60,80,0.4)");
      nebGrd.addColorStop(0.6, "rgba(0,30,60,0.15)");
      nebGrd.addColorStop(1, "transparent");
      ctx.fillStyle = nebGrd; ctx.fillRect(0, 0, W, H);

      // Stars
      starPositions.forEach(s => {
        ctx.globalAlpha = s[3] * (0.5 + 0.5 * Math.sin(t * 1.5 + s[0]));
        ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(s[0], s[1], s[2], 0, Math.PI*2); ctx.fill();
      });
      ctx.globalAlpha = 1;

      t += 0.007;
      const ax = t*0.65, ay = t*1.0, az = t*0.38;

      const proj3d = atoms.map(atom => {
        const [rx,ry,rz] = rot(atom.x, atom.y, atom.z, ax, ay, az);
        const [px,py,sc] = proj(rx, ry, rz);
        return { px, py, sc, rz, type: atom.tp };
      });

      // Bonds
      bonds.slice().sort((a,b) => {
        const za=(proj3d[a[0]].rz+proj3d[a[1]].rz)/2;
        const zb=(proj3d[b[0]].rz+proj3d[b[1]].rz)/2;
        return za-zb;
      }).forEach(([i,j]) => {
        const p1=proj3d[i], p2=proj3d[j];
        const avgZ=(p1.rz+p2.rz)/2;
        const depth=Math.min(1,Math.max(0.08,(avgZ+10)/20));
        ctx.beginPath(); ctx.moveTo(p1.px,p1.py); ctx.lineTo(p2.px,p2.py);
        ctx.strokeStyle=`rgba(80,180,230,${depth*0.35})`; ctx.lineWidth=depth*5+0.5; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(p1.px,p1.py); ctx.lineTo(p2.px,p2.py);
        ctx.strokeStyle=`rgba(180,230,255,${depth*0.9})`; ctx.lineWidth=Math.max(0.4,depth*1.5); ctx.stroke();
      });

      // Orbital rings
      rings.forEach(ring => {
        ctx.save(); ctx.translate(W/2, H/2); ctx.rotate(ring.tilt);
        ctx.beginPath(); ctx.ellipse(0,0,ring.rx,ring.ry,0,0,Math.PI*2);
        ctx.strokeStyle=ring.color; ctx.lineWidth=1.2; ctx.stroke();
        const phase = ring.phase + t * ring.speed;
        const ex=Math.cos(phase)*ring.rx, ey=Math.sin(phase)*ring.ry;
        // Trail
        for (let k=10;k>=1;k--) {
          const tp=phase-k*0.07;
          ctx.globalAlpha=(1-k/11)*0.4;
          ctx.beginPath(); ctx.arc(Math.cos(tp)*ring.rx,Math.sin(tp)*ring.ry,2.5,0,Math.PI*2);
          ctx.fillStyle=ring.ec; ctx.fill();
        }
        ctx.globalAlpha=1;
        const eGrd=ctx.createRadialGradient(ex,ey,0,ex,ey,11);
        eGrd.addColorStop(0,ring.ec); eGrd.addColorStop(1,"transparent");
        ctx.beginPath(); ctx.arc(ex,ey,11,0,Math.PI*2); ctx.fillStyle=eGrd; ctx.fill();
        ctx.beginPath(); ctx.arc(ex,ey,3.5,0,Math.PI*2); ctx.fillStyle=ring.ec; ctx.fill();
        ctx.restore();
      });

      // Atoms
      proj3d.slice().sort((a,b)=>a.rz-b.rz).forEach(a => {
        const C=COLORS[a.type];
        const depth=Math.min(1,Math.max(0.15,(a.rz+10)/20));
        const r=Math.max(2,C.r*(a.sc/55)*Math.pow(depth,0.4));
        const alpha=Math.min(1,Math.max(0.25,depth));
        ctx.globalAlpha=alpha;
        const gl=ctx.createRadialGradient(a.px,a.py,0,a.px,a.py,r*3.5);
        gl.addColorStop(0,C.glow); gl.addColorStop(1,"transparent");
        ctx.beginPath(); ctx.arc(a.px,a.py,r*3.5,0,Math.PI*2); ctx.fillStyle=gl; ctx.fill();
        const sp=ctx.createRadialGradient(a.px-r*0.35,a.py-r*0.35,r*0.05,a.px,a.py,r);
        sp.addColorStop(0,"rgba(255,255,255,0.92)");
        sp.addColorStop(0.25,C.fill); sp.addColorStop(0.75,C.fill);
        sp.addColorStop(1,shadeHex(C.fill,-55));
        ctx.beginPath(); ctx.arc(a.px,a.py,Math.max(1.5,r),0,Math.PI*2); ctx.fillStyle=sp; ctx.fill();
        ctx.globalAlpha=1;
      });

      // Nucleus pulse
      const pulse=0.85+0.15*Math.sin(t*3);
      const hue=(t*30)%360;
      const cg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,42*pulse);
      cg.addColorStop(0,`hsla(${hue},100%,65%,0.5)`);
      cg.addColorStop(0.5,`hsla(${hue+60},100%,60%,0.15)`);
      cg.addColorStop(1,"transparent");
      ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(W/2,H/2,42*pulse,0,Math.PI*2); ctx.fill();

      // Branding
      ctx.strokeStyle="rgba(0,229,196,0.15)"; ctx.lineWidth=0.8;
      ctx.beginPath(); ctx.moveTo(W/2-130,H-62); ctx.lineTo(W/2+130,H-62); ctx.stroke();

      const shimmerPos=((t*0.2)%1.6)*W-80;
      const shim=ctx.createLinearGradient(shimmerPos,0,shimmerPos+160,0);
      shim.addColorStop(0,"rgba(255,255,255,0)");
      shim.addColorStop(0.5,"rgba(255,255,255,0.35)");
      shim.addColorStop(1,"rgba(255,255,255,0)");

      ctx.textAlign="center";
      ctx.font='bold 28px Georgia,"Times New Roman",serif';
      ctx.shadowColor="#00e5c4"; ctx.shadowBlur=26;
      ctx.fillStyle="#ffffff";
      ctx.fillText("SYNERGIC BOND", W/2, H-38);
      ctx.fillStyle=shim;
      ctx.fillText("SYNERGIC BOND", W/2, H-38);

      // Gold dot
      const dp=0.8+0.2*Math.sin(t*3.5);
      const dg=ctx.createRadialGradient(W/2,H-62,0,W/2,H-62,8*dp);
      dg.addColorStop(0,"rgba(255,215,59,1)"); dg.addColorStop(1,"transparent");
      ctx.beginPath(); ctx.arc(W/2,H-62,8*dp,0,Math.PI*2); ctx.fillStyle=dg; ctx.fill();
      ctx.beginPath(); ctx.arc(W/2,H-62,2.5,0,Math.PI*2); ctx.fillStyle="#ffd43b"; ctx.fill();

      ctx.font='700 10px "Courier New",monospace';
      const subtitleHue=162+15*Math.sin(t*0.5);
      ctx.shadowColor=`hsl(${subtitleHue},100%,65%)`; ctx.shadowBlur=14;
      ctx.fillStyle=`hsl(${subtitleHue},90%,68%)`;
      ctx.fillText("C H E M I S T R Y   O S", W/2, H-16);
      ctx.shadowBlur=0;

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={580}
      height={580}
      className="mx-auto block"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}
