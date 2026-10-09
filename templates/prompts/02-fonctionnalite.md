# Ajouter une fonctionnalité (plan d'abord)

Mode conseillé : plan pour la première étape, agent ensuite.

```text
Contexte :
[Projet, fichiers backend et frontend concernés, où sont les tests, quel fichier de contexte lire (AGENTS.md)]

Tâche :
Ajoute [fonctionnalité en une phrase]. Commence par proposer un plan en [5] étapes maximum et attends ma validation avant de coder.

Contraintes :
Suis le style existant. Aucune nouvelle dépendance. Ne modifie pas [fichiers ou comportements à préserver]. Un commit par étape.

Critères de succès :
[Comportement attendu, codes de retour, interface]. Ajoute [N] tests ; la commande [npm test] doit être verte. Montre-moi le diff final et ce que tu as vérifié.
```

Suite, une fois le plan relu : voir `08-suivi.md`.
