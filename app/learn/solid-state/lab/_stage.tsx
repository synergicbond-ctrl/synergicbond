"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export type V3 = [number, number, number];

export type StageAtom = {
  id: string;
  p: V3;
  r: number;
  color: string;
  /** 0–1 growth target; the engine springs towards it */
  scale?: number;
  opacity?: number;
  glow?: boolean;
  /** position the atom flies in from when it first appears */
  from?: V3;
};

export type StageBond = { id: string; a: V3; b: V3; r?: number; color?: string; scale?: number; opacity?: number };
export type StageLine = { id: string; a: V3; b: V3; color?: string; dashed?: boolean; opacity?: number };
export type StagePoly = { id: string; verts: V3[]; faces: number[][]; color: string; opacity?: number };
export type CameraPose = { key: string; az: number; el: number; dist: number; target?: V3 };

export type StageProps = {
  atoms: StageAtom[];
  bonds?: StageBond[];
  lines?: StageLine[];
  polys?: StagePoly[];
  /** half-size of a box (centred on clipCenter) that slices everything; null disables clipping */
  clip?: number | null;
  clipCenter?: V3;
  camera?: CameraPose;
  autoRotate?: boolean;
  height?: number;
  floorY?: number;
  label: string;
  hint?: string;
};

type Spring = { x: number; v: number };
const spring = (s: Spring, target: number, dt: number, k = 150, c = 17) => {
  const steps = 4;
  const h = dt / steps;
  for (let i = 0; i < steps; i++) {
    const a = k * (target - s.x) - c * s.v;
    s.v += a * h;
    s.x += s.v * h;
  }
};

type Ent = {
  kind: "atom" | "bond" | "line" | "poly";
  obj: THREE.Object3D;
  sc: Spring;
  op: Spring;
  px: Spring;
  py: Spring;
  pz: Spring;
  seen: boolean;
  baseR: number;
  clip: boolean;
  sig?: string;
  front?: THREE.Mesh;
  back?: THREE.Mesh;
  mats: THREE.Material[];
};

const polyPositions = (p: StagePoly) => {
  const pos: number[] = [];
  for (const f of p.faces) for (let i = 1; i < f.length - 1; i++) for (const k of [0, i, i + 1]) pos.push(...p.verts[f[k]]);
  return pos;
};

const COLOR_CACHE = new Map<string, THREE.Color>();
const col = (hex: string) => {
  let c = COLOR_CACHE.get(hex);
  if (!c) {
    c = new THREE.Color(hex);
    COLOR_CACHE.set(hex, c);
  }
  return c;
};

function StageInner(props: StageProps & { onFail: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef(props);
  useEffect(() => {
    propsRef.current = props;
  });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      propsRef.current.onFail();
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;
    const canvas = renderer.domElement;
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.touchAction = "pan-y";
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", propsRef.current.label);
    wrap.appendChild(canvas);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    scene.environmentIntensity = 0.85;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.8;
    // OrbitControls claims every touch; keep vertical swipes for scrolling the page
    canvas.style.touchAction = "pan-y";

    const key = new THREE.DirectionalLight(0xffffff, 2.1);
    key.position.set(4.5, 7, 5.5);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    const sc = key.shadow.camera;
    sc.left = -5;
    sc.right = 5;
    sc.top = 5;
    sc.bottom = -5;
    sc.near = 1;
    sc.far = 24;
    key.shadow.bias = -0.0005;
    key.shadow.normalBias = 0.035;
    scene.add(key);
    scene.add(new THREE.HemisphereLight(0xcfe9ff, 0x0b1a18, 0.35));

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: 0.38 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const sphereGeo = new THREE.SphereGeometry(1, 40, 28);
    const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 28, 1, false);

    const planes = [
      new THREE.Plane(new THREE.Vector3(-1, 0, 0), 99),
      new THREE.Plane(new THREE.Vector3(1, 0, 0), 99),
      new THREE.Plane(new THREE.Vector3(0, -1, 0), 99),
      new THREE.Plane(new THREE.Vector3(0, 1, 0), 99),
      new THREE.Plane(new THREE.Vector3(0, 0, -1), 99),
      new THREE.Plane(new THREE.Vector3(0, 0, 1), 99),
    ];
    const clipH: Spring = { x: 99, v: 0 };

    const ents = new Map<string, Ent>();
    const group = new THREE.Group();
    scene.add(group);

    const up = new THREE.Vector3(0, 1, 0);
    const tmpA = new THREE.Vector3();
    const tmpB = new THREE.Vector3();

    const make = (kind: Ent["kind"], id: string, create: () => { obj: THREE.Object3D; front?: THREE.Mesh; back?: THREE.Mesh; mats: THREE.Material[] }, start: V3): Ent => {
      const made = create();
      const e: Ent = {
        kind,
        obj: made.obj,
        front: made.front,
        back: made.back,
        mats: made.mats,
        sc: { x: 0, v: 0 },
        op: { x: kind === "atom" || kind === "bond" ? 1 : 0, v: 0 },
        px: { x: start[0], v: 0 },
        py: { x: start[1], v: 0 },
        pz: { x: start[2], v: 0 },
        seen: true,
        baseR: 0,
        clip: false,
      };
      group.add(e.obj);
      ents.set(id, e);
      return e;
    };

    const dispose = (e: Ent) => {
      group.remove(e.obj);
      e.mats.forEach((m) => m.dispose());
      // atoms and bonds share geometry; lines and polyhedra own theirs
      if (e.kind === "line" || e.kind === "poly") {
        e.obj.traverse((o) => {
          const g = (o as THREE.Mesh).geometry as THREE.BufferGeometry | undefined;
          if (g && g !== cylGeo && g !== sphereGeo) g.dispose();
        });
      }
    };

    const camState = { az: { x: 0.7, v: 0 }, el: { x: 0.45, v: 0 }, dist: { x: 9, v: 0 }, tx: { x: 0, v: 0 }, ty: { x: 0, v: 0 }, tz: { x: 0, v: 0 } };
    let goal = { az: 0.7, el: 0.45, dist: 9, t: [0, 0, 0] as V3 };
    let poseKey = "";
    let flying = true;
    controls.addEventListener("start", () => {
      flying = false;
    });

    const applyClip = (m: THREE.Material, on: boolean) => {
      m.clippingPlanes = on ? planes : null;
      m.needsUpdate = true;
    };

    let w = 0;
    let h = 0;
    const resize = () => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let visible = true;
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
    });
    io.observe(wrap);

    let last = performance.now();
    let raf = 0;
    let clipOn = false;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) {
        last = now;
        return;
      }
      const dt = Math.min(1 / 8, (now - last) / 1000);
      last = now;
      const P = propsRef.current;
      const t = now / 1000;

      // ---- camera pose -----------------------------------------------------
      if (P.camera && P.camera.key !== poseKey) {
        poseKey = P.camera.key;
        goal = { az: P.camera.az, el: P.camera.el, dist: P.camera.dist, t: P.camera.target ?? [0, 0, 0] };
        flying = true;
        // take the shortest way round
        const d = ((goal.az - camState.az.x + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
        goal.az = camState.az.x + d;
      }
      if (flying) {
        const k = reduce ? 4000 : 55;
        const c = reduce ? 200 : 11;
        spring(camState.az, goal.az, dt, k, c);
        spring(camState.el, goal.el, dt, k, c);
        spring(camState.dist, goal.dist, dt, k, c);
        spring(camState.tx, goal.t[0], dt, k, c);
        spring(camState.ty, goal.t[1], dt, k, c);
        spring(camState.tz, goal.t[2], dt, k, c);
        const { az, el, dist } = { az: camState.az.x, el: camState.el.x, dist: camState.dist.x };
        controls.target.set(camState.tx.x, camState.ty.x, camState.tz.x);
        camera.position.set(
          controls.target.x + dist * Math.cos(el) * Math.sin(az),
          controls.target.y + dist * Math.sin(el),
          controls.target.z + dist * Math.cos(el) * Math.cos(az),
        );
      } else {
        // keep our model in sync so the next fly starts from where the user left it
        tmpA.copy(camera.position).sub(controls.target);
        const r = tmpA.length();
        camState.dist.x = r;
        camState.el.x = Math.asin(tmpA.y / r);
        camState.az.x = Math.atan2(tmpA.x, tmpA.z);
        camState.tx.x = controls.target.x;
        camState.ty.x = controls.target.y;
        camState.tz.x = controls.target.z;
        [camState.az, camState.el, camState.dist, camState.tx, camState.ty, camState.tz].forEach((s) => (s.v = 0));
      }
      controls.autoRotate = !!P.autoRotate && !reduce && !flying;
      controls.autoRotateSpeed = 1.1;
      controls.update();

      floor.position.y = P.floorY ?? -1.9;
      key.target.position.set(0, 0, 0);
      key.target.updateMatrixWorld();

      // ---- clipping --------------------------------------------------------
      const wantClip = P.clip !== null && P.clip !== undefined;
      spring(clipH, wantClip ? (P.clip as number) : 99, dt, reduce ? 4000 : 70, reduce ? 200 : 15);
      const cc = P.clipCenter ?? [0, 0, 0];
      const hh = Math.max(0.001, clipH.x);
      planes[0].constant = hh + cc[0];
      planes[1].constant = hh - cc[0];
      planes[2].constant = hh + cc[1];
      planes[3].constant = hh - cc[1];
      planes[4].constant = hh + cc[2];
      planes[5].constant = hh - cc[2];
      const nowClip = clipH.x < 40;
      const clipChanged = nowClip !== clipOn;
      clipOn = nowClip;

      // ---- diff declared scene --------------------------------------------
      ents.forEach((e) => (e.seen = false));
      const ids = new Set<string>();

      const kS = reduce ? 4000 : 160;
      const cS = reduce ? 200 : 15;

      for (const a of P.atoms) {
        const id = `a:${a.id}`;
        ids.add(id);
        let e = ents.get(id);
        if (!e) {
          const front = new THREE.Mesh(
            sphereGeo,
            new THREE.MeshPhysicalMaterial({ color: col(a.color), roughness: 0.34, metalness: 0.0, clearcoat: 0.4, clearcoatRoughness: 0.4, envMapIntensity: 0.9 }),
          );
          front.castShadow = true;
          front.receiveShadow = true;
          const back = new THREE.Mesh(sphereGeo, new THREE.MeshStandardMaterial({ color: col(a.color).clone().multiplyScalar(0.62), roughness: 0.9, side: THREE.BackSide }));
          const g = new THREE.Group();
          g.add(front, back);
          e = make("atom", id, () => ({ obj: g, front, back, mats: [front.material as THREE.Material, back.material as THREE.Material] }), a.from ?? a.p);
        }
        e.seen = true;
        const fm = e.front!.material as THREE.MeshPhysicalMaterial;
        if (!fm.color.equals(col(a.color))) {
          fm.color.copy(col(a.color));
          (e.back!.material as THREE.MeshStandardMaterial).color.copy(col(a.color)).multiplyScalar(0.62);
        }
        spring(e.sc, a.scale ?? 1, dt, kS, cS);
        spring(e.op, a.opacity ?? 1, dt, 120, 20);
        spring(e.px, a.p[0], dt, reduce ? 4000 : 70, reduce ? 200 : 13);
        spring(e.py, a.p[1], dt, reduce ? 4000 : 70, reduce ? 200 : 13);
        spring(e.pz, a.p[2], dt, reduce ? 4000 : 70, reduce ? 200 : 13);
        const pulse = a.glow ? 1 + 0.07 * Math.sin(t * 5) : 1;
        const r = Math.max(0, a.r * e.sc.x * pulse);
        e.obj.position.set(e.px.x, e.py.x, e.pz.x);
        e.front!.scale.setScalar(r);
        e.back!.scale.setScalar(r);
        fm.emissive.copy(col(a.color));
        fm.emissiveIntensity = a.glow ? 0.35 + 0.3 * (0.5 + 0.5 * Math.sin(t * 5)) : 0;
        const translucent = e.op.x < 0.985;
        if (fm.transparent !== translucent) {
          fm.transparent = translucent;
          fm.needsUpdate = true;
        }
        fm.opacity = Math.max(0, Math.min(1, e.op.x));
        fm.depthWrite = !translucent;
        e.front!.castShadow = !nowClip && !translucent;
        e.back!.visible = nowClip && !translucent;
        e.obj.visible = r > 0.002 && e.op.x > 0.01;
        e.baseR = a.r;
        if (e.clip !== nowClip || clipChanged) {
          e.clip = nowClip;
          e.mats.forEach((m) => applyClip(m, nowClip));
        }
      }

      for (const b of P.bonds ?? []) {
        const id = `b:${b.id}`;
        ids.add(id);
        let e = ents.get(id);
        if (!e) {
          const m = new THREE.MeshPhysicalMaterial({ color: col(b.color ?? "#cdd9d6"), roughness: 0.3, metalness: 0.25, clearcoat: 0.6, envMapIntensity: 1 });
          const mesh = new THREE.Mesh(cylGeo, m);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          e = make("bond", id, () => ({ obj: mesh, front: mesh, mats: [m] }), [0, 0, 0]);
        }
        e.seen = true;
        spring(e.sc, b.scale ?? 1, dt, kS, cS);
        spring(e.op, b.opacity ?? 1, dt, 120, 20);
        tmpA.set(...b.a);
        tmpB.set(...b.b);
        const dir = tmpB.clone().sub(tmpA);
        const len = dir.length();
        const mesh = e.obj as THREE.Mesh;
        mesh.position.copy(tmpA).addScaledVector(dir, 0.5);
        mesh.quaternion.setFromUnitVectors(up, dir.normalize());
        const rr = (b.r ?? 0.045) * Math.max(0, e.sc.x);
        mesh.scale.set(rr, len * Math.max(0.0001, Math.min(1, e.sc.x)), rr);
        const m = e.mats[0] as THREE.MeshPhysicalMaterial;
        m.transparent = e.op.x < 0.985;
        m.opacity = e.op.x;
        m.depthWrite = !m.transparent;
        mesh.visible = e.sc.x > 0.01 && e.op.x > 0.01;
        if (e.clip !== nowClip) {
          e.clip = nowClip;
          applyClip(m, nowClip);
        }
      }

      for (const l of P.lines ?? []) {
        const id = `l:${l.id}`;
        ids.add(id);
        let e = ents.get(id);
        if (!e) {
          if (l.dashed) {
            const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...l.a), new THREE.Vector3(...l.b)]);
            const m = new THREE.LineDashedMaterial({ color: col(l.color ?? "#9fc4bd"), dashSize: 0.1, gapSize: 0.08, transparent: true, opacity: 0 });
            const line = new THREE.Line(geo, m);
            line.computeLineDistances();
            e = make("line", id, () => ({ obj: line, mats: [m] }), [0, 0, 0]);
          } else {
            const m = new THREE.MeshStandardMaterial({ color: col(l.color ?? "#d9e6e3"), roughness: 0.4, metalness: 0.3, transparent: true, opacity: 0 });
            const mesh = new THREE.Mesh(cylGeo, m);
            e = make("line", id, () => ({ obj: mesh, front: mesh, mats: [m] }), [0, 0, 0]);
          }
        }
        e.seen = true;
        spring(e.op, l.opacity ?? 1, dt, 90, 16);
        const m = e.mats[0] as THREE.Material & { opacity: number };
        m.opacity = Math.max(0, Math.min(1, e.op.x));
        if (!l.dashed) {
          tmpA.set(...l.a);
          tmpB.set(...l.b);
          const dir = tmpB.clone().sub(tmpA);
          const len = dir.length();
          const mesh = e.obj as THREE.Mesh;
          mesh.position.copy(tmpA).addScaledVector(dir, 0.5);
          mesh.quaternion.setFromUnitVectors(up, dir.normalize());
          mesh.scale.set(0.014, len, 0.014);
        }
        e.obj.visible = e.op.x > 0.01;
      }

      for (const p of P.polys ?? []) {
        const id = `p:${p.id}`;
        ids.add(id);
        let e = ents.get(id);
        if (!e) {
          const geo = new THREE.BufferGeometry();
          geo.setAttribute("position", new THREE.Float32BufferAttribute(polyPositions(p), 3));
          geo.computeVertexNormals();
          const m = new THREE.MeshPhysicalMaterial({ color: col(p.color), transparent: true, opacity: 0, roughness: 0.15, metalness: 0, side: THREE.DoubleSide, depthWrite: false, clearcoat: 1 });
          const mesh = new THREE.Mesh(geo, m);
          const em = new THREE.LineBasicMaterial({ color: col(p.color).clone().lerp(new THREE.Color(0xffffff), 0.55), transparent: true, opacity: 0 });
          const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 12), em);
          const g = new THREE.Group();
          g.add(mesh, edges);
          e = make("poly", id, () => ({ obj: g, mats: [m, em] }), [0, 0, 0]);
        }
        e.seen = true;
        const sig = p.verts.map((v) => v.map((n) => n.toFixed(3)).join(",")).join("|");
        if (e.sig !== sig) {
          if (e.sig !== undefined) {
            const grp = e.obj as THREE.Group;
            const mesh = grp.children[0] as THREE.Mesh;
            const edges = grp.children[1] as THREE.LineSegments;
            mesh.geometry.setAttribute("position", new THREE.Float32BufferAttribute(polyPositions(p), 3));
            mesh.geometry.computeVertexNormals();
            edges.geometry.dispose();
            edges.geometry = new THREE.EdgesGeometry(mesh.geometry, 12);
          }
          e.sig = sig;
        }
        spring(e.op, p.opacity ?? 0.25, dt, 90, 16);
        (e.mats[0] as THREE.MeshPhysicalMaterial).opacity = Math.max(0, e.op.x);
        (e.mats[1] as THREE.LineBasicMaterial).opacity = Math.min(1, Math.max(0, e.op.x * 3.2));
        e.obj.visible = e.op.x > 0.005;
      }

      ents.forEach((e, id) => {
        if (ids.has(id)) return;
        // no longer declared: shrink / fade out, then free
        spring(e.sc, 0, dt, kS, cS);
        spring(e.op, 0, dt, 120, 20);
        if (e.kind === "atom") {
          const r = Math.max(0, e.baseR * e.sc.x);
          e.front!.scale.setScalar(r);
          e.back!.scale.setScalar(r);
          e.back!.visible = false;
          const mm = e.front!.material as THREE.MeshPhysicalMaterial;
          mm.transparent = true;
          mm.opacity = Math.max(0, e.op.x);
        } else {
          const mm = e.mats[0] as THREE.Material & { opacity: number };
          mm.transparent = true;
          mm.opacity = Math.max(0, e.op.x);
        }
        if (e.op.x < 0.01 && e.sc.x < 0.01) {
          dispose(e);
          ents.delete(id);
        }
      });

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      controls.dispose();
      ents.forEach((e) => dispose(e));
      ents.clear();
      sphereGeo.dispose();
      cylGeo.dispose();
      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (canvas.parentNode === wrap) wrap.removeChild(canvas);
    };
  }, []);

  return <div ref={wrapRef} className="h-full w-full" />;
}

/** Mounts the WebGL scene only while it is near the viewport, so a long page never exhausts browser GL contexts. */
export function Stage(props: StageProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => setActive(en.isIntersecting), { rootMargin: "320px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)]"
      style={{ height: props.height ?? 400, background: "radial-gradient(120% 90% at 50% 18%, #17433f 0%, #0c1f1e 52%, #060f0f 100%)" }}
    >
      {active && !failed ? <StageInner {...props} onFail={() => setFailed(true)} /> : null}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-white/70">
          3D view needs WebGL, which this browser has disabled. The explanation and the numbers on this page still apply.
        </div>
      )}
      {!active && !failed && <div className="absolute inset-0 flex items-center justify-center text-sm text-white/40">3D</div>}
      <span className="pointer-events-none absolute bottom-2.5 right-3.5 text-[11px] tracking-wide text-white/45">{props.hint ?? "drag to rotate"}</span>
    </div>
  );
}
