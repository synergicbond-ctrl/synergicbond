(function(){
const $=s=>document.querySelector(s);const IDX=window.QINDEX;let cur=null,state=null;
const done=new Set(JSON.parse(localStorage.getItem("iso_done")||"[]"));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function save(){try{localStorage.setItem("iso_done",JSON.stringify([...done]))}catch(e){}$("#prog").textContent=done.size+" / "+IDX.length+" solved"}
function toc(filter){const f=(filter||"").toLowerCase();const g={};IDX.forEach(q=>{if(f&&!(q.stem.toLowerCase().includes(f)||q.part.toLowerCase().includes(f)||String(q.n)===f))return;(g[q.part]=g[q.part]||[]).push(q)});
 $("#toc").innerHTML=Object.keys(g).map(p=>`<div class="part"><h3>${p}</h3><div class="qs">${g[p].map(q=>`<button data-n="${q.n}" class="${q.n===cur?'on':''} ${done.has(q.n)?'done':''}" title="${q.stem.replace(/"/g,'&quot;')}">${q.n}</button>`).join("")}</div></div>`).join("")||"<p>No match.</p>"}
$("#toc").addEventListener("click",e=>{const b=e.target.closest("button[data-n]");if(b){go(+b.dataset.n);$("#side").classList.remove("open")}});
$("#q").addEventListener("input",e=>toc(e.target.value));$("#menuBtn").onclick=()=>$("#side").classList.toggle("open");
$("#theme").onclick=()=>{const r=document.documentElement;r.dataset.theme=(r.dataset.theme==="dark"||(!r.dataset.theme&&matchMedia("(prefers-color-scheme:dark)").matches))?"light":"dark"};
function load(n){return new Promise(res=>{window.QDATA=window.QDATA||{};if(QDATA[n])return res(QDATA[n]);const s=document.createElement("script");s.src="data/q"+String(n).padStart(3,"0")+".js";s.onload=()=>res(QDATA[n]);document.head.appendChild(s)})}
function esc(t){return String(t).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}
async function go(n){cur=n;if(state)state.stop=true;const d=await load(n);history.replaceState(null,"","#q"+n);render(d);toc($("#q").value);window.scrollTo({top:0,behavior:"smooth"})}
function buildActions(d){const A=[];d.steps.forEach(t=>A.push({t:"step",x:t}));
 if(d.kind==="items")d.items.forEach((_,i)=>A.push({t:"item",i}));
 if(d.kind==="statements")d.statements.forEach((_,i)=>A.push({t:"st",i}));
 d.rest.forEach(x=>A.push({t:"rest",x}));A.push({t:"ans"});return A}
function render(d){
 const legend=`<div class="legend"><span><i style="background:var(--pink)"></i>bond toward you (wedge / Fischer horizontal / front carbon)</span><span><i style="background:var(--green)"></i>bond away from you (dash / Fischer vertical / back carbon)</span><span><i style="background:var(--blue)"></i>in the plane</span></div>`;
 const Z=1.45;d.items.forEach(i=>{i.svg=i.svg.replace(/width='(\d+)' height='(\d+)'/,(m,w,h)=>`width='${Math.round(w*Z)}' height='${Math.round(h*Z)}'`)});const maxw=Math.max(210,...d.items.map(i=>{const m=/width='(\d+)'/.exec(i.svg);return m?+m[1]+34:210}));
 const symHTML=it=>{const s=it.sym;if(!s)return"";const o=s.ov||{},np=(o.planes||[]).length+(o.sigmah?1:0),na=(o.axes||[]).length,hc=!!o.centre,hs=(o.sn||[]).length;
  return `<div class="pgl"><b>${s.pg}</b> – ${esc(s.full.split(" – ")[1]||s.full)}${s.sn.length?` · alternate axes: <b>${s.sn.join(", ")}</b>`:" · no alternate axis"}</div><div class="symbar"><button class="bp" data-k="p" ${np?"":"disabled"} title="Show planes of symmetry">▭ Planes${np?" ("+np+")":""}</button><button class="ba" data-k="a" ${na?"":"disabled"} title="Show axes of symmetry">⟋ Axes${na?" ("+na+")":""}</button><button class="bc" data-k="c" ${hc?"":"disabled"} title="Show centre of symmetry">● Centre</button><button class="bs" data-k="s" ${hs?"":"disabled"} title="Show alternate (Sn) axis">⟲ Sn</button><button class="bi" data-k="i" title="All elements of the point group">ⓘ Info</button></div><div class="info" hidden></div>`};
 const itemsHTML=d.items.map((it,k)=>`<div class="item" data-i="${k}"><span class="lb">(${it.label})</span><span class="chip"></span><div class="art">${it.svg}</div>${symHTML(it)}<div class="why"></div></div>`).join("");
 const stHTML=d.statements.map((s,k)=>`<div class="st" data-i="${k}"><span class="no">${k+1}</span><div class="sw">${esc(s.text)}<div class="wy"></div></div><span class="badge"></span></div>`).join("");
 const tagc=d.tags?`<div class="tagc">Enantiomers<b id="t-enantiomers">0</b></div><div class="tagc">Diastereomers<b id="t-diastereomers">0</b></div><div class="tagc">Identical<b id="t-identical">0</b></div><div class="tagc">Constitutional<b id="t-constitutional">0</b></div>`:"";
 const hasCount=d.kind==="items"&&d.items.some(i=>i.verdict||i.val!==null)||d.kind==="statements";
 $("#main").innerHTML=`<div class="qcard"><div class="qhead"><span class="num">Question ${d.n}</span><span class="part">${esc(d.part)}</span></div>
 <div class="stem">${esc(d.stem)}</div>
 <div class="ctrl"><button class="primary" id="play">▶ Play solution</button><button id="back">⏮ Back</button><button id="next">⏭ Step</button><button id="reset">↺ Reset</button><button id="skip">Show answer</button><label style="font-size:13px;color:var(--mut)">Speed <select id="spd"><option value="0.7">0.7×</option><option value="1" selected>1×</option><option value="1.5">1.5×</option><option value="2.2">2.2×</option></select></label></div>
 <div class="bar"><i id="bar"></i></div>
 <div class="score">${hasCount?`<div class="counter" id="cnt">${d.kind==="statements"?"Correct statements":(d.items.some(i=>i.val!==null)?"Running total":"Counted so far")}<b id="cv">0</b></div>`:""}${tagc}<div class="ans" id="ans">Answer<b id="av">?</b></div></div>${d.items.some(i=>i.svg.includes("e0457b")||i.svg.includes("2f9e44"))?legend:""}${d.items.some(i=>i.sym&&((i.sym.ov||{}).planes||(i.sym.ov||{}).axes))?`<div class="gbar"><span>Show on every structure:</span><button class="bp" data-g="p">▭ Planes</button><button class="ba" data-g="a">⟋ Axes</button><button class="bc" data-g="c">● Centres</button><button class="bs" data-g="s">⟲ Sn axes</button><button data-g="x">Clear</button></div>`:""}</div>
 <div class="layout ${d.kind==='numeric'?'single':''}"><div>${d.kind==='numeric'?'':''}${d.kind==="statements"?`<div class="sts">${stHTML}</div>`:`<div class="grid" id="grid" style="--cell:${Math.min(maxw,440)}px">${itemsHTML}</div>`}</div>
 <div class="side"><div class="panel"><h4>How to solve</h4><ol class="steps" id="steps"></ol></div><div class="panel" id="wp" style="display:none"><h4>Working</h4><div class="work" id="work"></div></div></div></div>
 <div class="navq"><button id="pv">← Previous question</button><button id="nx">Next question →</button></div>`;
 const A=buildActions(d);state={d,A,pos:0,stop:false,playing:false,speed:1,count:0,tags:{}};
 $("#main").onclick=e=>{const b=e.target.closest("[data-k]");if(b){const card=b.closest(".item");toggleOv(card,b.dataset.k,b);return}const g=e.target.closest("[data-g]");if(g){globalOv(g.dataset.g,g)}};
 $("#play").onclick=()=>state.playing?pause():play();$("#next").onclick=()=>{pause();stepOnce(false)};$("#back").onclick=()=>{pause();jump(Math.max(0,state.pos-1))};
 $("#reset").onclick=()=>{pause();jump(0)};$("#skip").onclick=()=>{pause();jump(A.length)};$("#spd").onchange=e=>state.speed=+e.target.value;
 $("#pv").onclick=()=>go(Math.max(IDX[0].n,cur-1));$("#nx").onclick=()=>go(Math.min(IDX[IDX.length-1].n,cur+1));
}
const NS="http://www.w3.org/2000/svg";
function mk(t,at){const e=document.createElementNS(NS,t);for(const k in at)e.setAttribute(k,at[k]);return e}
function ovGroup(card){const svg=card.querySelector(".art svg");let g=svg.querySelector(".ovg");if(!g){g=mk("g",{class:"ovg"});svg.appendChild(g)}return g}
function drawOv(card,kind){const it=state.d.items[+card.dataset.i],s=it.sym,o=s.ov||{},g=ovGroup(card);g.querySelectorAll(".ov-"+kind).forEach(e=>e.remove());const add=(el)=>{el.setAttribute("class","ov-"+kind);g.appendChild(el);el.animate([{opacity:0},{opacity:1}],{duration:500});return el};
 const lab=(x,y,t,c)=>{const e=mk("text",{x,y,"font-size":11,"font-family":"Helvetica,Arial,sans-serif",fill:c,"font-weight":700,"text-anchor":"middle"});e.textContent=t;return e};
 if(kind==="p"){(o.planes||[]).forEach(p=>{const l=p.l;const ln=add(mk("line",{x1:l[0],y1:l[1],x2:l[2],y2:l[3],stroke:"#c2255c","stroke-width":6,"stroke-opacity":.28,"stroke-linecap":"round"}));add(mk("line",{x1:l[0],y1:l[1],x2:l[2],y2:l[3],stroke:"#c2255c","stroke-width":1.8}));add(lab(l[2],l[3]-4,"σ","#c2255c"))});
  if(o.sigmah){const v=svgBox(card);add(mk("rect",{x:3,y:3,width:v[0]-6,height:v[1]-6,rx:10,fill:"#c2255c","fill-opacity":.07,stroke:"#c2255c","stroke-dasharray":"5 4","stroke-width":1.4}));add(lab(34,v[1]-8,"σh = plane of the paper","#c2255c"))}}
 if(kind==="a"){(o.axes||[]).forEach(p=>{if(p.l){const l=p.l;add(mk("line",{x1:l[0],y1:l[1],x2:l[2],y2:l[3],stroke:"#e8590c","stroke-width":2,"stroke-dasharray":"9 3 2 3"}));add(lab(l[2],l[3]-5,p.t.split(" ")[0],"#e8590c"))}
   else{add(mk("circle",{cx:p.p[0],cy:p.p[1],r:p.r||9,fill:"none",stroke:"#e8590c","stroke-width":2}));add(mk("circle",{cx:p.p[0],cy:p.p[1],r:2.4,fill:"#e8590c"}));add(lab(p.p[0],p.p[1]-(p.r||9)-4,p.t.split(" ")[0],"#e8590c"))}})}
 if(kind==="c"&&o.centre){add(mk("circle",{cx:o.centre[0],cy:o.centre[1],r:5,fill:"#7048e8"}));add(mk("circle",{cx:o.centre[0],cy:o.centre[1],r:11,fill:"none",stroke:"#7048e8","stroke-width":1.6}));add(lab(o.centre[0]+16,o.centre[1]-10,"i","#7048e8"))}
 if(kind==="s"){(o.sn||[]).forEach(p=>{add(mk("circle",{cx:p.p[0],cy:p.p[1],r:p.r||16,fill:"none",stroke:"#0c8599","stroke-width":2,"stroke-dasharray":"4 3"}));add(lab(p.p[0],p.p[1]+(p.r||16)+12,p.t,"#0c8599"))})}}
function svgBox(card){const v=card.querySelector(".art svg").viewBox.baseVal;return [v.width,v.height]}
function toggleOv(card,k,btn,force){if(k==="i"){const inf=card.querySelector(".info"),s=state.d.items[+card.dataset.i].sym;inf.hidden=force===undefined?!inf.hidden:!force;if(!inf.hidden)inf.innerHTML="<b>"+s.full+"</b><br>Elements: "+s.el.join("; ")+"<br>"+(s.sn.length?"Alternate axes (Sn, n ≥ 3) present: <b>"+s.sn.join(", ")+"</b>":"No alternate axis Sn (n ≥ 3) – S1 is a plane, S2 is a centre")+"<br><i>"+s.note+"</i>";btn.classList.toggle("on",!inf.hidden);return}
 const on=force===undefined?!btn.classList.contains("on"):force;btn.classList.toggle("on",on);const g=ovGroup(card);if(on)drawOv(card,k);else g.querySelectorAll(".ov-"+k).forEach(e=>e.remove())}
function globalOv(k,btn){if(k==="x"){document.querySelectorAll(".symbar button.on,.gbar button.on").forEach(b=>b.classList.remove("on"));document.querySelectorAll(".ovg").forEach(g=>g.remove());document.querySelectorAll(".info").forEach(i=>i.hidden=true);return}
 const on=!btn.classList.contains("on");btn.classList.toggle("on",on);document.querySelectorAll(".item").forEach(card=>{const b=card.querySelector(`.symbar [data-k=${k}]`);if(b&&!b.disabled)toggleOv(card,k,b,on)})}
function pause(){if(!state)return;state.playing=false;$("#play").textContent="▶ Play solution"}
async function play(){const s=state;if(s.pos>=s.A.length)jump(0);s.playing=true;$("#play").textContent="⏸ Pause";
 while(s.playing&&!s.stop&&s.pos<s.A.length){const ms=await stepOnce(true);await sleep(ms/s.speed)}if(!s.stop&&s.pos>=s.A.length)pause()}
function jump(k){const s=state;resetUI();s.pos=0;while(s.pos<k)apply(s.A[s.pos++],true);bar()}
function resetUI(){const s=state,d=s.d;s.count=0;s.tags={};$("#steps").innerHTML="";$("#work").innerHTML="";$("#wp").style.display="none";
 document.querySelectorAll(".item,.st").forEach(e=>{e.classList.remove("shown","active","yes","no","val","T","F","t-enantiomers","t-diastereomers","t-identical","t-constitutional");const w=e.querySelector(".why,.wy");if(w)w.textContent=""});
 const g=$("#grid");if(g)g.classList.remove("focus");const a=$("#ans");a.classList.remove("show");$("#av").textContent="?";const c=$("#cv");if(c)c.textContent="0";
 ["enantiomers","diastereomers","identical","constitutional"].forEach(t=>{const e=document.getElementById("t-"+t);if(e)e.textContent="0"})}
async function stepOnce(auto){const s=state;if(s.pos>=s.A.length){return 0}const a=s.A[s.pos++];const ms=await apply(a,false);bar();return ms}
function bar(){const s=state;$("#bar").style.width=(100*s.pos/s.A.length)+"%"}
function drawIn(el){el.querySelectorAll("path[class^='bond-'],line,circle").forEach((p,i)=>{try{const L=p.getTotalLength?p.getTotalLength():60;const filled=p.getAttribute("style")&&/fill:#(?!none)/.test(p.getAttribute("style"))&&!/fill:none/.test(p.getAttribute("style"));
  if(filled){p.animate([{opacity:0},{opacity:1}],{duration:500,delay:i*25,fill:"backwards"});return}
  p.style.strokeDasharray=L+"";p.animate([{strokeDashoffset:L},{strokeDashoffset:0}],{duration:650,delay:i*30,fill:"backwards",easing:"ease-out"}).onfinish=()=>{p.style.strokeDasharray=""}}catch(e){}});
 el.querySelectorAll("text,path[class^='atom-']").forEach((t,i)=>t.animate([{opacity:0},{opacity:1}],{duration:500,delay:300+i*10,fill:"backwards"}))}
async function type(el,text,instant,cps=75){if(instant){el.textContent=text;return}el.textContent="";const t0=performance.now();const s=state;
 return new Promise(res=>{(function f(){if(s.stop)return res();const n=Math.min(text.length,Math.floor((performance.now()-t0)/1000*cps*s.speed));el.textContent=text.slice(0,n);n<text.length?requestAnimationFrame(f):res()})()})}
function bumpCounter(){const c=$("#cnt");if(!c)return;$("#cv").textContent=fmt(state.count);c.classList.remove("pop");void c.offsetWidth;c.classList.add("pop")}
function fmt(x){return Number.isInteger(x)?x:(Math.round(x*100)/100)}
async function apply(a,instant){const s=state,d=s.d;
 if(a.t==="step"){const li=document.createElement("li");li.textContent=a.x;if(instant)li.style.cssText="opacity:1;transform:none;animation:none";$("#steps").appendChild(li);return 900+a.x.length*14}
 if(a.t==="rest"){$("#wp").style.display="";const dv=document.createElement("div");if(instant)dv.style.cssText="opacity:1;animation:none";$("#work").appendChild(dv);await type(dv,a.x,instant,90);return 700}
 if(a.t==="item"){const g=$("#grid"),el=g.children[a.i],it=d.items[a.i];g.classList.add("focus");g.querySelectorAll(".active").forEach(e=>e.classList.remove("active"));el.classList.add("active");
  if(!instant){el.scrollIntoView({behavior:"smooth",block:"center"});drawIn(el)}
  el.classList.add("shown");const chip=el.querySelector(".chip");
  if(it.verdict==="yes"){el.classList.add("yes");chip.textContent="✓ counts";s.count++}else if(it.verdict==="no"){el.classList.add("no");chip.textContent="✗ no"}
  else if(it.val!==null){el.classList.add("val");chip.textContent="+"+fmt(it.val);s.count+=it.val}
  else if(it.tag){el.classList.add("t-"+it.tag);chip.textContent=it.tag;s.tags[it.tag]=(s.tags[it.tag]||0)+1;const te=document.getElementById("t-"+it.tag);if(te)te.textContent=s.tags[it.tag]}
  if(it.verdict||it.val!==null)bumpCounter();await type(el.querySelector(".why"),it.why,instant,95);
  if(a.i===d.items.length-1&&!instant){g.classList.remove("focus");el.classList.remove("active")}
  return 900}
 if(a.t==="st"){const el=document.querySelectorAll(".st")[a.i],st=d.statements[a.i];document.querySelectorAll(".st.active").forEach(e=>e.classList.remove("active"));el.classList.add("active");if(!instant)el.scrollIntoView({behavior:"smooth",block:"center"});
  el.classList.add("shown",st.truth?"T":"F");el.querySelector(".badge").textContent=st.truth?"TRUE":"FALSE";if(st.truth){s.count++;bumpCounter()}await type(el.querySelector(".wy"),st.why,instant,90);if(a.i===d.statements.length-1)el.classList.remove("active");return 800}
 if(a.t==="ans"){const g=$("#grid");if(g)g.classList.remove("focus");document.querySelectorAll(".active").forEach(e=>e.classList.remove("active"));const an=$("#ans");an.classList.add("show");const av=$("#av"),v=d.answer;
  if(/^-?\d+(\.\d+)?$/.test(v)&&!instant){const T=+v,t0=performance.now();await new Promise(r=>{(function f(){const p=Math.min(1,(performance.now()-t0)/900);av.textContent=Number.isInteger(T)?Math.round(T*p):(T*p).toFixed(2);p<1?requestAnimationFrame(f):(av.textContent=v,r())})()})}else av.textContent=v;
  done.add(d.n);save();toc($("#q").value);return 0}}
document.addEventListener("keydown",e=>{if(!state||/INPUT|SELECT/.test(e.target.tagName))return;if(e.code==="Space"){e.preventDefault();state.playing?pause():play()}else if(e.key==="ArrowRight"){pause();stepOnce(false)}else if(e.key==="ArrowLeft"){pause();jump(Math.max(0,state.pos-1))}else if(e.key==="r"||e.key==="R"){pause();jump(0)}});
window.__iso={go,end:()=>{pause();jump(state.A.length)},st:()=>state};save();toc();const h=+(location.hash.replace("#q","")||IDX[0].n);go(h);
})();
