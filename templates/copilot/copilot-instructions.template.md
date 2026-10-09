# Instructions pour GitHub Copilot

Les règles complètes du projet sont dans `AGENTS.md` : lis-le avant toute tâche.

## Rappel des essentiels

- Commandes : `npm test`, `npm run lint`, `npm run back`, `npm run front`
- JavaScript ESM, pas de framework côté frontend, appels réseau uniquement dans `frontend/src/api.js`
- Tout changement de comportement s'accompagne d'un test (node:test)
- Pour une tâche touchant plusieurs fichiers, propose un plan et attends ma validation
- Après une modification, lance les tests et montre le résultat

## À ne jamais faire

- Committer un fichier `.env` ou un secret
- Ajouter une dépendance sans justification
- Modifier du code hors du périmètre demandé
