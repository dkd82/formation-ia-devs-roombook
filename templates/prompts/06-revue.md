# Revue de code

Mode conseillé : lecture seule.

```text
Contexte :
Pull request / branche [nom] : [objectif en une phrase]. Conventions : voir AGENTS.md.

Tâche :
Fais la revue du diff entre [main] et [la branche].

Contraintes :
Lecture seule. Vérifie dans l'ordre : 1) bugs et cas limites, 2) sécurité (secrets, injection, validation), 3) tests manquants, 4) respect des conventions. Pas de remarque de pur style si Prettier s'en charge.

Critères de succès :
Liste priorisée (grave, important, mineur), avec fichier:ligne et une correction proposée pour chaque point grave. Dis explicitement si tu n'as rien trouvé dans une catégorie.
```
