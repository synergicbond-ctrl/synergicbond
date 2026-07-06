import { Project, SyntaxKind } from "ts-morph";

const project = new Project();
project.addSourceFilesAtPaths("lib/pyq/questions/**/*.ts");

for (const sourceFile of project.getSourceFiles()) {
  let modified = false;
  
  const objectLiterals = sourceFile.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression);
  
  for (const obj of objectLiterals) {
    // Check if this object represents a PYQQuestion (it should have 'id' and 'exam' properties)
    const hasId = obj.getProperty("id");
    const hasExam = obj.getProperty("exam");
    const hasQuestion = obj.getProperty("question");
    
    if (hasId && hasExam && hasQuestion) {
      if (!obj.getProperty("authenticityStatus")) {
        obj.addPropertyAssignment({ name: "authenticityStatus", initializer: '"NEEDS_MANUAL_REVIEW"' });
        modified = true;
      }
      if (!obj.getProperty("source")) {
        obj.addPropertyAssignment({ name: "source", initializer: '"Pending Audit"' });
        modified = true;
      }
      if (!obj.getProperty("paperNumber")) {
        obj.addPropertyAssignment({ name: "paperNumber", initializer: "1" });
        modified = true;
      }
      if (!obj.getProperty("questionNumber")) {
        // If questionNo exists, use its value, otherwise 0
        const qNoProp = obj.getProperty("questionNo");
        let initializer = "0";
        if (qNoProp && qNoProp.isKind(SyntaxKind.PropertyAssignment)) {
           initializer = qNoProp.getInitializer()?.getText() || "0";
           // Remove questionNo as we consolidate
           qNoProp.remove();
        }
        obj.addPropertyAssignment({ name: "questionNumber", initializer });
        modified = true;
      } else {
        const qNoProp = obj.getProperty("questionNo");
        if (qNoProp) {
           qNoProp.remove();
           modified = true;
        }
      }
    }
  }
  
  if (modified) {
    sourceFile.saveSync();
    console.log(`Migrated ${sourceFile.getBaseName()}`);
  }
}
console.log("Migration complete.");
