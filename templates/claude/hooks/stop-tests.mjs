// Hook Stop
// Empêche l'agent de conclure tant que npm test échoue.
// stop_hook_active évite la boucle infinie : si le hook a déjà relancé l'agent, on laisse passer.
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

let input = {};
try {
  input = JSON.parse(readFileSync(0, "utf8"));
} catch {
  process.exit(0);
}
if (input.stop_hook_active) process.exit(0);

try {
  execSync("npm test", { cwd: input.cwd || process.cwd(), stdio: "pipe", timeout: 60000 });
  process.exit(0);
} catch (err) {
  const out = `${err.stdout ?? ""}${err.stderr ?? ""}`.split("\n").slice(-25).join("\n");
  console.error(`Les tests échouent, corrige avant de conclure :\n${out}`);
  process.exit(2);
}
