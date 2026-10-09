# [Nom du projet]

[Une phrase de description.]

## Commandes

- Installer : `npm install` puis `npm --prefix backend install`
- Tests : `npm test`
- Lint / format : `npm run lint`
- Lancer l'API : `npm run back`
- Lancer le frontend : `npm run front`

## Architecture

- `backend/src/routes/` : routes Express
- `backend/src/data/` : stockage
- `backend/test/` : tests (node:test)
- `frontend/src/` : modules ES, appels réseau uniquement dans `api.js`

## Conventions

- JavaScript ESM, pas de framework côté frontend
- Format : Prettier (`npm run lint` doit passer)
- Un test par comportement ; les tests ne dépendent pas les uns des autres
- Messages de commit : `type: description` (feat, fix, test, refactor, docs, chore)

## Règles de test

- Tout changement de comportement s'accompagne d'un test
- Un bug se corrige en écrivant d'abord un test qui échoue

## À ne jamais faire

- Committer un fichier `.env` ou un secret
- Changer l'API publique sans mettre à jour les tests
- Ajouter une dépendance sans justification
- Modifier du code hors du périmètre demandé
