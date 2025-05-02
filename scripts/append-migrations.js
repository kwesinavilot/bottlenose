const fs = require("fs");
const path = require("path");

const draftsDir = path.join(__dirname, "../prisma/migrations/");
const schemaPath = path.join(__dirname, "../prisma/schema.prisma");

if (!fs.existsSync(draftsDir)) {
  console.log("No drafts directory found. Skipping.");
  process.exit(0);
}

const draftFiles = fs.readdirSync(draftsDir).filter(f => f.endsWith(".prisma"));

if (draftFiles.length === 0) {
  console.log("No draft migration files found.");
  process.exit(0);
}

let draftsContent = "\n// --- BEGIN MIGRATION DRAFTS ---\n";
for (const file of draftFiles) {
  const content = fs.readFileSync(path.join(draftsDir, file), "utf8");
  draftsContent += `\n// File: ${file}\n${content}\n`;
}
draftsContent += "// --- END MIGRATION DRAFTS ---\n";

fs.appendFileSync(schemaPath, draftsContent);

console.log("Draft migrations appended to schema.prisma.");
