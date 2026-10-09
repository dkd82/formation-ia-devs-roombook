---
description: Revue de code d'un diff ou d'une branche
agent: ask
---
Fais la revue de : ${input:cible:branche, fichier ou « diff courant »}

Vérifie dans l'ordre :
1. Bugs et cas limites
2. Sécurité (secrets, injection, validation des entrées)
3. Tests manquants
4. Conventions décrites dans AGENTS.md

Réponds par une liste priorisée (grave, important, mineur), avec fichier:ligne pour chaque point.
Ne modifie aucun fichier.
