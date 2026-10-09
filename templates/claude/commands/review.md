---
description: Revue de code d'un diff ou d'une branche
argument-hint: [branche ou fichier]
allowed-tools: Read, Grep, Glob, Bash(git diff:*), Bash(git log:*), Bash(git status:*)
---
Fais la revue de : $ARGUMENTS (par défaut le diff courant).

Vérifie dans l'ordre :
1. Bugs et cas limites
2. Sécurité (secrets, injection, validation des entrées)
3. Tests manquants
4. Conventions décrites dans AGENTS.md

Réponds par une liste priorisée (grave, important, mineur), avec fichier:ligne pour chaque point.
Ne modifie aucun fichier.
