// Hook PostToolUse (matcher : Edit|Write)
// Formate avec Prettier le fichier que l'agent vient de modifier. Ne bloque jamais.
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}

const file = input.tool_input?.file_path;
if (!file || !/\.(js|mjs|cjs|json|html|css|md)$/.test(file)) process.exit(0);

try {
  execSync(`npx prettier --write "${file}"`, { stdio: "ignore", timeout: 8000 });
} catch {
  // Le formatage est un confort : on ne bloque pas l'agent
}
process.exit(0);
