# Explorer une codebase (lecture seule)

Mode conseillé : Ask (Copilot) ou mode plan (Claude Code).

```text
Contexte :
Je découvre [nom du projet] : [description en une ligne]. Stack : [technologies]. Dossiers principaux : [liste].

Tâche :
Explique l'architecture, puis trace pas à pas [un parcours précis, par exemple « la création d'une réservation »] du début à la fin.

Contraintes :
Lecture seule : ne modifie aucun fichier. Cite pour chaque étape le fichier et la fonction. Si tu n'es pas sûr, dis-le au lieu de supposer.

Critères de succès :
Réponse en 3 parties : 1) carte des fichiers en [8] lignes maximum, 2) parcours numéroté avec fichier:fonction, 3) règles métier et [3] zones fragiles. Termine par 2 questions que tu te poses.
```
