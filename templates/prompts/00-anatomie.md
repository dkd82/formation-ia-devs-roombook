# Anatomie d'un bon prompt

```text
Contexte :
[Projet, technologies et versions, fichiers concernés, situation actuelle]

Tâche :
[Un objectif précis et unique, formulé avec un verbe d'action]

Contraintes :
[Style et conventions, dépendances autorisées, ce qu'il ne faut pas toucher, granularité des commits]

Critères de succès :
[Tests à faire passer, comportement attendu, format de la réponse, comment vérifier]
```

## Avant d'envoyer

- Ai-je cité les fichiers utiles (`@fichier` dans Claude Code, `#file` dans Copilot) ?
- Mon objectif tient-il en une phrase ?
- Ai-je dit ce qu'il ne faut pas modifier ?
- Puis-je vérifier le résultat par un test ou une commande ?
- Ai-je demandé un plan avant le code si la tâche touche plusieurs fichiers ?
