import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docs = path.join(root, "docs/evaluation");
const header = path.join(docs, "evaluation.header.md");
const stepsDir = path.join(docs, "steps");

// Génère 2 fichiers : étudiant + formateur
const outStudent = path.join(docs, "workshop.md");

const projectReadme = path.join(root, "README.md");

function readText(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}

// IMPORTANT : ne jamais laisser '---' seul dans le contenu des steps,
// sinon MOAW croit que c'est un séparateur de page.
function sanitizeStepContent(md) {
  // Remplace toute ligne exactement "---" par "***" (HR markdown safe)
  return md.replace(/^\s*---\s*$/gm, "***").trim();
}

function downgradeHeadings(md, level = 1) {
  return md
    .split("\n")
    .map((line) => {
      const match = line.match(/^(#+)\s+/);
      if (!match) return line;

      const hashes = match[1].length + level;
      return "#".repeat(hashes) + line.slice(match[1].length);
    })
    .join("\n");
}

function injectReadme(md) {
  if (!md.includes("<!-- README:INCLUDE -->")) return md;

  const rawReadme = fs.readFileSync(projectReadme, "utf-8").trim();

  // On décale tous les titres d’un niveau
  const normalizedReadme = downgradeHeadings(rawReadme, 1);

  return md.replace(
    "<!-- README:INCLUDE -->",
    `## Consignes techniques (README du projet)\n\n${normalizedReadme}`
  );
}


function buildWorkshop({ outFile }) {
  const steps = fs
    .readdirSync(stepsDir)
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, "en"));

  const total = steps.length;
  const parts = [];
  parts.push(readText(header).trim());

  steps.forEach((file, idx) => {
    let content = sanitizeStepContent(readText(path.join(stepsDir, file)));
    content = injectReadme(content);

    // Séparateur MOAW entre steps
    parts.push("---\n\n" + content);
  });

  fs.writeFileSync(outFile, parts.join("\n\n"), "utf-8");
  console.log(
    `Generated: ${path.relative(root, outFile)} (${total} steps)`
  );
}

// Génération
buildWorkshop({ outFile: outStudent });