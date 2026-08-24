const fs = require("fs");
const H = require("./build_aem_notes.js");
require("./content.js");
const { Document, Packer, Paragraph, TextRun, Header, Footer, PageNumber, AlignmentType, children, numbering, FONT } = H;

const doc = new Document({
  numbering,
  styles: {
    default: {
      document: { run: { font: FONT, size: 21 } },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [new TextRun({ text: "Alkaline Earth Metals — JEE Advanced Notes", italics: true, size: 16, color: "888888" })],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: "Page ", size: 16, color: "888888" }),
                new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "888888" }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(__dirname + "/Alkaline_Earth_Metals_JEE_Advanced_Notes.docx", buf);
  console.log("Wrote docx, paragraphs:", children.length);
});
