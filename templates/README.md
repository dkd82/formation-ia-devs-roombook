# Templates

Modèles prêts à copier dans votre projet. Les chemins de destination sont indiqués ci-dessous.
Adaptez-les : un template est un point de départ, pas une vérité.

> Les noms de fichiers et la syntaxe des commandes, agents, hooks et permissions évoluent selon les
> versions de Claude Code et de VS Code. En cas d'écart, consultez la documentation de votre version.

## Prompts (`prompts/`)

Gabarits en 4 blocs à copier dans le chat : exploration, fonctionnalité, bug, tests, refactoring,
revue, documentation, prompts de suivi, recadrage. Aucun fichier à installer.

## Claude Code (`claude/`)

| Template | Copier vers |
| --- | --- |
| `claude/CLAUDE.template.md` | `CLAUDE.md` (à la racine) |
| `claude/commands/*.md` | `.claude/commands/` (commandes `/review`, `/test-for`, `/commit`, `/explain`, `/plan`, `/bugfix`) |
| `claude/agents/*.md` | `.claude/agents/` (sous-agents) |
| `claude/hooks/*.mjs` | `.claude/hooks/` (scripts de hooks, en Node, portables Windows) |
| `claude/settings/*.json` | `.claude/settings.json` (choisir **un** fichier, voir ci-dessous) |

Fichiers de réglages :

- `settings.permissions-strict.json` : lecture et tests autorisés, tout le reste demande confirmation, secrets et commandes destructrices interdits.
- `settings.permissions-souple.json` : édition de fichiers acceptée automatiquement, mêmes interdictions.
- `settings.hooks.json` : uniquement les hooks (formatage, protection, tests avant de conclure).
- `settings.complet.json` : permissions strictes + hooks.

Ordre de priorité des règles de permission : `deny` l'emporte sur `ask`, qui l'emporte sur `allow`.
Les fichiers personnels (non partagés) vont dans `.claude/settings.local.json`, déjà ignoré par Git.

## GitHub Copilot (`copilot/`)

| Template | Copier vers |
| --- | --- |
| `copilot/copilot-instructions.template.md` | `.github/copilot-instructions.md` |
| `copilot/prompts/*.prompt.md` | `.github/prompts/` (prompt files, appelés avec `/nom` dans Chat) |
| `copilot/agents/*.agent.md` | `.github/agents/` (agents personnalisés) |
| `copilot/vscode/settings.example.jsonc` | à fusionner dans `.vscode/settings.json` (validation des commandes de terminal) |

Les listes d'outils (`tools`) des agents et le nom du paramètre de validation automatique dépendent de la
version de VS Code : vérifiez-les dans l'interface (menu des outils de Chat, recherche « autoApprove »
dans les paramètres).

## Commun aux deux outils (`shared/`)

| Template | Copier vers |
| --- | --- |
| `shared/AGENTS.template.md` | `AGENTS.md` (source unique des règles du projet) |
| `shared/pre-commit` | `.githooks/pre-commit`, puis `chmod +x .githooks/pre-commit` (macOS/Linux) et `git config core.hooksPath .githooks` |
| `shared/ci.yml` | `.github/workflows/ci.yml` |
| `shared/pull_request_template.md` | `.github/pull_request_template.md` |
| `shared/ticket.md` | `.github/ISSUE_TEMPLATE/ticket.md` |
