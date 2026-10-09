// Hook PreToolUse (matcher : Bash|Read|Edit|Write)
// Bloque les commandes destructrices et l'accès aux fichiers .env.
// Code de sortie 2 = action bloquée, le message sur stderr est renvoyé à l'agent.
import { readFileSync } from "node:fs";

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}

const cmd = input.tool_input?.command ?? "";
const file = input.tool_input?.file_path ?? "";

const dangerousCommand = [
  /\brm\s+-[a-z]*r[a-z]*f|\brm\s+-[a-z]*f[a-z]*r/,
  /\bgit\s+push\s+(.*\s)?(--force\b|-f\b)/,
  /\bgit\s+reset\s+--hard\b/,
  /\.env(?!\.example)(\.\w+)?\b/,
];
const secretFile = /(^|[\\/])\.env(\.(?!example$)[\w.-]+)?$/;

if (cmd && dangerousCommand.some((re) => re.test(cmd))) {
  console.error("Commande interdite par la politique de l'équipe (destructrice ou accès aux secrets).");
  process.exit(2);
}
if (file && secretFile.test(file)) {
  console.error("Accès interdit : les fichiers .env contiennent des secrets.");
  process.exit(2);
}
process.exit(0);
