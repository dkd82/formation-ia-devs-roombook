# Écrire de bons tests

Deux temps : d'abord les cas, ensuite le code.

## Prompt 1 : lister les cas

```text
Contexte :
[Fonction ou route à tester, fichier, tests existants et leur style]

Tâche :
Avant d'écrire du code, liste sous forme de tableau les cas à couvrir (nominaux, limites, erreurs) avec le résultat attendu. Attends mon feu vert.

Contraintes :
Un test = un comportement. Même style que l'existant. Ne modifie pas le code de production. Aucune dépendance de test supplémentaire.

Critères de succès :
Tableau (cas, entrée, résultat attendu), au moins [8] cas, dont : [cas obligatoires].
```

## Prompt 2 : écrire et prouver l'utilité

```text
Le tableau est validé. Écris les tests et lance [npm test]. Ensuite, prouve leur utilité : casse volontairement [une ligne précise du code de production], montre qu'au moins un test devient rouge, puis annule cette modification.
```
