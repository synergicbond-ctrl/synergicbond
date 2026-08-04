"""Build exact, editable SVG masters for the F-block visual atlas."""
from pathlib import Path
import html

OUT = Path(__file__).resolve().parents[1] / "public/images/f-block/source"
OUT.mkdir(parents=True, exist_ok=True)
W, H = 1600, 900
BG, PANEL, PANEL2 = "#07131f", "#0d2233", "#102b40"
INK, MUTED, GRID = "#f4faff", "#a6bdd0", "#29475c"
CYAN, TEAL, MAGENTA, AMBER, ORANGE, RED, GREEN = "#39d9ff", "#1ed6c0", "#ff4fd8", "#ffc857", "#ff8a3d", "#ff5a68", "#63e69b"

def esc(value): return html.escape(str(value))
def text(x, y, value, size=24, color=INK, weight=500, anchor="start"):
    return f'<text x="{x}" y="{y}" font-family="Aptos,Arial,sans-serif" font-size="{size}" fill="{color}" font-weight="{weight}" text-anchor="{anchor}">{esc(value)}</text>'
def rect(x, y, width, height, fill=PANEL, stroke=GRID, radius=14, opacity=1):
    return f'<rect x="{x}" y="{y}" width="{width}" height="{height}" rx="{radius}" fill="{fill}" fill-opacity="{opacity}" stroke="{stroke}" stroke-width="2"/>'
def line(x1, y1, x2, y2, color=GRID, width=2, dash=""):
    attr = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width}"{attr}/>'
def circle(x, y, radius, fill, stroke="none", width=0):
    return f'<circle cx="{x}" cy="{y}" r="{radius}" fill="{fill}" stroke="{stroke}" stroke-width="{width}"/>'
def base(title, subtitle):
    return [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">', rect(0,0,W,H,BG,BG,0), rect(0,0,W,118,"#091b2a","#091b2a",0), text(62,66,title,40,INK,800), text(62,101,subtitle,19,MUTED,450)]
def save(name, parts):
    parts.append("</svg>")
    (OUT / name).write_text("\n".join(parts), encoding="utf-8")

# 03 Aufbau filling and verified anchor configurations
p = base("Aufbau filling across the two f-series", "Use verified anchor atoms; near-degenerate f/d/s energies prevent a perfectly mechanical pattern")
lan = [("La","4f⁰5d¹"),("Ce","4f¹5d¹"),("Gd","4f⁷5d¹"),("Lu","4f¹⁴5d¹")]
act = [("Ac","5f⁰6d¹"),("Th","5f⁰6d²"),("Pa","5f²6d¹"),("U","5f³6d¹"),("Am","5f⁷"),("Cm","5f⁷6d¹"),("Lr","5f¹⁴7p¹*")]
for row,(label,items,color,y) in enumerate([("LANTHANOID ANCHORS",lan,CYAN,205),("ACTINOID ANCHORS",act,ORANGE,485)]):
    p += [text(75,y,label,22,color,800), line(75,y+24,1525,y+24,color,3)]
    gap = 1380/len(items)
    for i,(el,conf) in enumerate(items):
        x=95+i*gap; p += [rect(x,y+55,gap-24,140,PANEL2,color,18),text(x+(gap-24)/2,y+108,el,27,color,850,"middle"),text(x+(gap-24)/2,y+153,conf,21,INK,650,"middle"),text(x+(gap-24)/2,y+181,"outer ns² omitted",14,MUTED,500,"middle")]
p += [rect(255,785,1090,67,"#0a1d2b",AMBER,14),text(800,826,"*Modern Lr ground state uses 7p¹; many school tables retain the older 6d¹ convention.",19,AMBER,750,"middle")]
save("03-aufbau-filling-and-exceptions.svg", p)

# 06 consequences of lanthanoid contraction
p=base("Consequences of lanthanoid contraction", "One cause—poor 4f shielding—creates a connected family of JEE trends")
items=[("Separation","Neighbouring Ln³⁺ ions have almost identical charge and size",CYAN),("Zr ≈ Hf","Hf contracts to nearly the radius of Zr",AMBER),("Basicity ↓","La(OH)₃ > … > Lu(OH)₃",RED),("Complexing ↑","Smaller Ln³⁺ raises charge density for a fixed hard ligand",TEAL),("Density / hardness","Generally increase, with structural exceptions",GREEN),("5d similarity","4d/5d congeners become unusually close in size",MAGENTA)]
for i,(head,copy,color) in enumerate(items):
    x=65+(i%3)*510;y=180+(i//3)*295
    p += [rect(x,y,460,245,PANEL,color,20),circle(x+65,y+68,34,color),text(x+120,y+62,head,25,color,850),line(x+34,y+112,x+425,y+112,GRID,2),text(x+34,y+154,copy,17,INK,600),text(x+34,y+194,"La³⁺ → Lu³⁺: radius decreases",16,MUTED,500)]
p += [rect(330,806,940,50,"#0a1d2b",CYAN,12),text(800,838,"Z ↑ + weak 4f shielding → Zₑff ↑ → radius ↓ → polarising power ↑",20,CYAN,800,"middle")]
save("06-contraction-consequences.svg",p)

# 07 lanthanoid oxidation states
p=base("Lanthanoid oxidation-state map", "+3 dominates; selected +2 and +4 states gain support from f⁰, f⁷ or f¹⁴ counts and the chemical medium")
states={"La":[3],"Ce":[3,4],"Pr":[3,4],"Nd":[3],"Pm":[3],"Sm":[2,3],"Eu":[2,3],"Gd":[3],"Tb":[3,4],"Dy":[3],"Ho":[3],"Er":[3],"Tm":[2,3],"Yb":[2,3],"Lu":[3]}
for state,y in [(4,250),(3,430),(2,610)]: p += [text(70,y+8,f"+{state}",23,INK,800,"middle"),line(105,y,1535,y,GRID,2)]
for i,(el,values) in enumerate(states.items()):
    x=125+i*95;p += [text(x,700,el,19,INK,750,"middle")]
    for state in values:
        y={4:250,3:430,2:610}[state]; col=AMBER if state==4 else (CYAN if state==3 else TEAL)
        p += [rect(x-25,y-25,50,50,col,col,8),text(x,y+8,str(state),18,BG,850,"middle")]
p += [rect(260,770,1080,82,"#0a1d2b",AMBER,14),text(800,805,"Key anchors: Ce⁴⁺ = f⁰ · Eu²⁺ = f⁷ · Tb⁴⁺ = f⁷ · Yb²⁺ = f¹⁴",21,AMBER,800,"middle"),text(800,835,"Configuration helps; ionisation, hydration, lattice and redox energies decide actual stability.",17,MUTED,600,"middle")]
save("07-lanthanoid-oxidation-state-map.svg",p)

# 10 colour mechanism
p=base("Why lanthanoid ions are coloured", "Shielded 4f orbitals produce weak, sharp and comparatively ligand-insensitive absorption bands")
p += [rect(70,180,600,570,PANEL,CYAN,22),text(370,230,"f–f ABSORPTION",25,CYAN,850,"middle")]
for i,col in enumerate(["#694cff","#3187ff","#24d6d0","#73de77","#ffc857","#ff785a"]): p += [rect(135+i*78,300,52,300,col,col,4)]
p += [text(370,650,"narrow absorption bands",20,INK,750,"middle"),text(370,685,"outer 5s/5p shells shield the 4f levels",17,MUTED,550,"middle")]
p += [rect(740,180,790,570,PANEL2,MAGENTA,22),text(1135,230,"SELECTION-RULE LOGIC",25,MAGENTA,850,"middle")]
rules=[("Partially filled 4f","f–f transitions become possible",CYAN),("Laporte forbidden","bands are usually weak",RED),("4f shielded","ligand changes shift bands only slightly",TEAL),("f⁰ or f¹⁴","no f–f transition; charge transfer may still colour",AMBER)]
for i,(head,copy,col) in enumerate(rules):
    y=285+i*105;p += [circle(800,y,18,col),text(840,y-4,head,20,col,800),text(840,y+27,copy,17,INK,550)]
p += [rect(335,796,930,54,"#0a1d2b",RED,12),text(800,830,"Exam trap: “f⁰/f¹⁴ ion” does not guarantee a colourless compound if charge transfer occurs.",18,RED,750,"middle")]
save("10-lanthanoid-colour-mechanism.svg",p)

# 11 magnetism
p=base("Magnetism of Ln³⁺ ions", "Count unpaired electrons first; use L–S–J coupling because orbital angular momentum is not generally quenched")
unpaired=list(range(8))+list(range(6,-1,-1)); labels=["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"]
for i,(el,u) in enumerate(zip(labels,unpaired)):
    x=78+i*100;bh=u*55;y=620-bh;p += [rect(x,y,60,bh,AMBER if el=="Gd" else CYAN,"none",8),text(x+30,660,el,17,INK,750,"middle"),text(x+30,y-12,str(u),16,MUTED,700,"middle")]
p += [line(55,620,1540,620,INK,3),text(800,710,"unpaired count: n for fⁿ (n ≤ 7); 14 − n for n > 7",21,INK,750,"middle")]
p += [rect(70,760,700,95,PANEL,MAGENTA,14),text(95,797,"FREE-ION MOMENT",18,MAGENTA,800),text(95,830,"μeff = gJ √[J(J+1)] BM",24,INK,750),rect(830,760,700,95,PANEL,AMBER,14),text(855,797,"Gd³⁺ SPECIAL CASE",18,AMBER,800),text(855,830,"4f⁷: seven unpaired; ground-state L = 0",20,INK,700)]
save("11-lanthanoid-magnetism.svg",p)

# 12 actinoid colour/magnetism
p=base("Actinoid colour and magnetism", "Less-shielded 5f orbitals make spectra and magnetic behaviour more sensitive to bonding and the lattice")
cols=[("5f–5f transitions","Often broader and more ligand-sensitive than 4f–4f bands",MAGENTA),("Charge transfer","Can dominate colour in high oxidation states",ORANGE),("Spin–orbit coupling","Strong; simple spin-only predictions are unsafe",CYAN),("Crystal-field influence","Greater than for shielded lanthanoid 4f levels",TEAL),("Covalency","Changes orbital populations and magnetic response",AMBER),("Radioactivity","Self-heating and sample scarcity complicate measurements",RED)]
for i,(head,copy,col) in enumerate(cols):
    x=70+(i%2)*760;y=180+(i//2)*215;p += [rect(x,y,700,170,PANEL,col,18),circle(x+60,y+60,28,col),text(x+110,y+55,head,23,col,820),text(x+110,y+96,copy,18,INK,550)]
p += [rect(345,820,910,45,"#0a1d2b",CYAN,10),text(800,850,"5f is chemically available: bonding and spectroscopy cannot be treated as purely free-ion phenomena.",17,CYAN,750,"middle")]
save("12-actinoid-colour-and-magnetism.svg",p)

# 16 compounds/reactions
p=base("High-value F-block compounds and reactions", "Balanced, syllabus-relevant patterns—medium and oxidation state are part of every equation")
reactions=[("Oxidation of metal","4Ln + 3O₂ → 2Ln₂O₃","normal +3 oxide",CYAN),("Halogenation","2Ln + 3X₂ → 2LnX₃","X = F, Cl, Br, I",TEAL),("Water reaction","2Ln + 6H₂O → 2Ln(OH)₃ + 3H₂","electropositive metal",GREEN),("Ce(IV) redox","Ce⁴⁺ + e⁻ → Ce³⁺","one-electron oxidant",AMBER),("Ceria oxygen storage","2CeO₂ ⇌ Ce₂O₃ + ½O₂","Ce⁴⁺/Ce³⁺ cycle",ORANGE),("Uranium reduction","UO₃ + H₂ → UO₂ + H₂O","heat; U(VI) → U(IV)",MAGENTA)]
for i,(head,eq,note,col) in enumerate(reactions):
    x=65+(i%2)*760;y=170+(i//2)*225;p += [rect(x,y,710,180,PANEL,col,18),text(x+30,y+44,head,20,col,800),text(x+355,y+98,eq,24,INK,750,"middle"),text(x+355,y+140,note,16,MUTED,550,"middle")]
p += [rect(330,835,940,38,"#0a1d2b",RED,10),text(800,861,"Do not infer one universal product for carbides, hydrides or mixed-valence oxides.",17,RED,700,"middle")]
save("16-important-compounds-and-reactions.svg",p)

# 17 hydroxide basicity
p=base("Basicity of lanthanoid hydroxides", "Contraction increases Ln³⁺ polarising power, reduces ionic character and weakens basicity")
els=["La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu"]
for i,el in enumerate(els):
    x=75+i*99;h=330-i*15;y=650-h;col=CYAN if i<8 else TEAL;p += [rect(x,y,62,h,col,"none",7),text(x+31,690,el,17,INK,750,"middle")]
p += [line(55,650,1545,650,INK,3),text(800,745,"La(OH)₃  >  Ce(OH)₃  >  …  >  Lu(OH)₃",28,AMBER,850,"middle")]
p += [rect(100,790,1400,72,"#0a1d2b",TEAL,14),text(800,821,"radius ↓ → charge density ↑ → O–H / Ln–O polarisation ↑ → ionic character ↓",20,TEAL,800,"middle"),text(800,850,"The trend is relative: later hydroxides are less basic, not ordinary acidic hydroxides.",16,MUTED,550,"middle")]
save("17-hydroxide-basicity-trend.svg",p)

# 18 complex formation
p=base("Complex formation and coordination", "Hard-acid lanthanoids prefer oxygen donors; actinoids add stronger covalent and ligand-selective effects")
for cx,title,color,items in [(420,"Ln³⁺",CYAN,["hard Lewis acid","O/F donors preferred","coordination number often 8–10","bonding largely electrostatic"]),(1180,"An³⁺ / An⁴⁺",MAGENTA,["higher covalent contribution","O, N and softer donors possible","strong hydrolysis at high charge","actinyl equatorial coordination"] )]:
    p += [circle(cx,420,82,color),text(cx,430,title,28,BG,850,"middle")]
    for i,item in enumerate(items):
        y=210+i*145;p += [line(cx+(90 if cx<800 else -90),420,cx+(270 if cx<800 else -270),y+28,color,3),rect(cx+(120 if cx<800 else -470),y,350,58,PANEL,color,12),text(cx+(295 if cx<800 else -295),y+36,item,17,INK,650,"middle")]
p += [rect(280,800,1040,56,"#0a1d2b",AMBER,12),text(800,835,"Across Ln³⁺: smaller radius generally strengthens a fixed hard-donor complex; geometry still depends on ligand size.",17,AMBER,700,"middle")]
save("18-complex-formation.svg",p)

# 20 JEE trap map
p=base("JEE Advanced exception and trap map", "A final diagnostic screen for statements, orders, integer counts and assertion–reason questions")
traps=[("Placement","Detached rows still belong to Periods 6 and 7",CYAN),("Configuration","Neutral atom ≠ ion; remove outer ns electrons first",TEAL),("Colour","f⁰/f¹⁴ blocks f–f colour, not charge transfer",MAGENTA),("Magnetism","spin-only moment is generally insufficient",AMBER),("Contraction","compare equal charge and coordination number",ORANGE),("Oxidation states","f⁰/f⁷/f¹⁴ helps; medium decides stability",RED),("Actinoids","radioactivity is nuclear, not a redox state",GREEN),("Covalency","greater 5f participation is compound-specific",CYAN)]
for i,(head,copy,col) in enumerate(traps):
    x=65+(i%2)*760;y=165+(i//2)*165;p += [rect(x,y,710,130,PANEL,col,16),text(x+30,y+43,head,20,col,820),text(x+30,y+82,copy,17,INK,600)]
p += [rect(320,838,960,35,"#0a1d2b",AMBER,9),text(800,862,"Solve in this order: species → oxidation state → f count → medium → property.",17,AMBER,800,"middle")]
save("20-jee-exception-trap-map.svg",p)
print(f"Built {len(list(OUT.glob('*.svg')))} exact SVG masters in {OUT}")
