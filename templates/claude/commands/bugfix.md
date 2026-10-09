---
description: Corriger un bug en commençant par un test qui échoue
argument-hint: [description du bug]
allowed-tools: Read, Grep, Glob, Edit, Write, Bash(npm test:*)
---
Bug à corriger : $ARGUMENTS

1. Écris un test qui reproduit le bug et montre qu'il échoue.
2. Propose 2 hypothèses classées sur la cause.
3. Corrige la cause (pas le symptôme), avec la modification minimale.
4. Lance `npm test` : le nouveau test passe et les anciens restent verts.
Ni contournement, ni try/catch pour masquer l'erreur.
