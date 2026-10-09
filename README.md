# Formation « IA pour les devs » : RoomBook

Dépôt de travail de la formation **IA pour les devs, maîtrisez l'IA pour coder**.
Vous y faites évoluer **RoomBook**, une application de réservation de salles de réunion
(backend Node/Express + frontend JavaScript), ticket après ticket, avec **GitHub Copilot**
(VS Code) et **Claude Code** (CLI).

## Contenu

| Dossier                 | Rôle                                                                      |
| ----------------------- | ------------------------------------------------------------------------- |
| `backend/`, `frontend/` | L'application RoomBook (point de départ du jour 1 sur la branche `main`)  |
| `enonces/`              | Énoncés des TP : ouvrez les fichiers `.html` dans votre navigateur        |
| `templates/`            | Modèles à réutiliser : prompts, commandes, agents, permissions, hooks, CI |

## Branches

| Branche       | Contenu                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| `main`        | Point de départ du **jour 1** (contient un bug, c'est voulu)                                                       |
| `jour2-start` | Point de départ du **jour 2** pour qui n'a pas terminé le jour 1 : bug corrigé, annulation de réservation, 6 tests |

## Prérequis

- Node.js 20 ou plus, Git
- VS Code avec les extensions GitHub Copilot et GitHub Copilot Chat (connectées)
- Claude Code installé en ligne de commande : la commande `claude` doit répondre dans le terminal

## Démarrage

```bash
npm install
npm --prefix backend install
npm test            # 3 tests verts attendus au jour 1
npm run back        # API sur http://localhost:3000
npm run front       # interface sur http://localhost:5173 (2e terminal)
```

Ouvrez ensuite `enonces/TP-Jour1-participants.html` dans votre navigateur.

## Règles de travail

1. **Une branche par ticket** : `git switch -c ticket-1`, puis `ticket-2`, etc.
2. Écrivez votre prompt en **4 blocs** (contexte, tâche, contraintes, critères de succès) avant de lancer l'outil.
3. **Relisez chaque diff** (`git diff`) avant d'accepter : vous restez responsable du code.
4. Ne committez jamais de secret (`.env`).
5. Les modèles de `templates/` sont des références : tentez d'abord le ticket avec votre propre prompt.

## Aide-mémoire rapide

- Claude Code : `claude` pour démarrer, `@fichier` pour citer un fichier, `Shift+Tab` pour le mode plan, `/clear` pour repartir d'une session propre.
- Copilot Chat : modes Ask, Edit, Agent ; `#file` et `#codebase` pour le contexte.
