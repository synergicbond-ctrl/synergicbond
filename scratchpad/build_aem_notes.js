const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, AlignmentType, LevelFormat, PageBreak,
  Header, Footer, PageNumber, convertInchesToTwip, VerticalAlign, TabStopType, TabStopPosition
} = require("docx");

// ---------- palette ----------
const NAVY = "1F3864";
const TEAL = "0F6E5E";
const GOLD = "B7791F";
const RED = "9B2C2C";
const LIGHTGREY = "F2F2F2";
const TRAPBG = "FDEBD0";
const MOTBG = "E8F1FB";
const NCERTBG = "E9F7EF";
const BORDERGREY = "BFBFBF";

const FONT = "Georgia";
const HFONT = "Calibri";

// ---------- numbering ----------
const numbering = {
  config: [
    {
      reference: "bullets",
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "◦", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 900, hanging: 260 } } } },
      ],
    },
    {
      reference: "traps",
      levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 300 } } } },
      ],
    },
  ],
};

// ---------- helpers ----------
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 420, after: 200 },
    border: { bottom: { color: NAVY, space: 4, style: BorderStyle.SINGLE, size: 8 } },
    children: [new TextRun({ text, bold: true, color: NAVY, font: HFONT, size: 30 })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 140 },
    children: [new TextRun({ text, bold: true, color: TEAL, font: HFONT, size: 25 })],
  });
}
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, bold: true, color: GOLD, font: HFONT, size: 22 })],
  });
}
function p(runsOrText, opts = {}) {
  const children = typeof runsOrText === "string" ? [new TextRun({ text: runsOrText, font: FONT, size: 21 })] : runsOrText;
  return new Paragraph({ spacing: { after: 140, line: 300 }, children, ...opts });
}
function eq(text) {
  return new Paragraph({
    spacing: { before: 80, after: 140 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, italics: true, font: "Cambria Math", size: 21, color: "333333" })],
  });
}
function bulletsList(items) {
  return items.map((item) => {
    const children = typeof item === "string" ? [new TextRun({ text: item, font: FONT, size: 21 })] : item;
    return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 90, line: 290 }, children });
  });
}
function b(text) { return new TextRun({ text, bold: true, font: FONT, size: 21 }); }
function it(text) { return new TextRun({ text, italics: true, font: FONT, size: 21 }); }
function t(text) { return new TextRun({ text, font: FONT, size: 21 }); }
function bc(text, color) { return new TextRun({ text, bold: true, font: FONT, size: 21, color }); }

// coloured callout box built from a single-cell table
function calloutBox(label, labelColor, bgColor, bodyParagraphs) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: labelColor },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: labelColor },
      left: { style: BorderStyle.SINGLE, size: 6, color: labelColor },
      right: { style: BorderStyle.SINGLE, size: 6, color: labelColor },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            shading: { type: ShadingType.CLEAR, fill: bgColor },
            margins: { top: 140, bottom: 140, left: 200, right: 200 },
            children: [
              new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: label, bold: true, font: HFONT, size: 20, color: labelColor })] }),
              ...bodyParagraphs,
            ],
          }),
        ],
      }),
    ],
  });
}
function jeeTrap(items) {
  return calloutBox("⚠ JEE TRAP", RED, TRAPBG, bulletsList(items).map((x) => { x.spacing = { after: 60, line: 280 }; return x; }));
}
function motBox(title, paras) {
  return calloutBox("⚛ MOT / BONDING INSIGHT — " + title, "1A5276", MOTBG, paras);
}
function ncertBox(title, paras) {
  return calloutBox("✓ NCERT FOCUS — " + title, "1E7A46", NCERTBG, paras);
}
function spacer(h = 120) { return new Paragraph({ spacing: { after: h }, children: [] }); }

// data table
function dataTable(headers, rows, widths) {
  if (headers.length !== widths.length) {
    throw new Error(`dataTable width mismatch: headers=${headers.length} [${headers.join("|")}] widths=${widths.length}`);
  }
  const total = widths.reduce((a, b) => a + b, 0);
  const colW = widths.map((w) => Math.round((w / total) * 9350));
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((hd, i) => new TableCell({
      width: { size: colW[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: NAVY },
      verticalAlign: VerticalAlign.CENTER,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: hd, bold: true, color: "FFFFFF", font: HFONT, size: 18 })] })],
    })),
  });
  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((cell, ci) => new TableCell({
      width: { size: colW[ci], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: ri % 2 === 0 ? "FFFFFF" : LIGHTGREY },
      verticalAlign: VerticalAlign.CENTER,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({ alignment: ci === 0 ? AlignmentType.LEFT : AlignmentType.CENTER, children: [new TextRun({ text: String(cell), font: FONT, size: 18 })] })],
    })),
  }));
  return new Table({
    width: { size: 9350, type: WidthType.DXA },
    columnWidths: colW,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: BORDERGREY },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDERGREY },
      left: { style: BorderStyle.SINGLE, size: 4, color: BORDERGREY },
      right: { style: BorderStyle.SINGLE, size: 4, color: BORDERGREY },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: BORDERGREY },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: BORDERGREY },
    },
    rows: [headerRow, ...bodyRows],
  });
}

const children = [];
function add(...items) {
  items.forEach((i) => {
    if (Array.isArray(i)) children.push(...i);
    else children.push(i);
  });
}

module.exports = {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, AlignmentType, LevelFormat, PageBreak, Header, Footer, PageNumber,
  h1, h2, h3, p, eq, bulletsList, b, it, t, bc, calloutBox, jeeTrap, motBox, ncertBox, spacer, dataTable, add, children, numbering,
  FONT, HFONT, NAVY, TEAL, GOLD, RED, LIGHTGREY, TRAPBG, MOTBG, NCERTBG, BORDERGREY,
};
