# Prompts de suivi

## Valider un plan et avancer par incréments

```text
Le plan me convient[, avec ce changement : ...]. Implémente uniquement l'étape [N] (backend et tests), lance [npm test] et montre-moi le résultat. N'attaque pas la suite avant mon accord.
```

## Retour factuel après un échec

```text
Le test [nom] échoue avec l'erreur suivante :
[collez la sortie complète]
Attendu : [attendu]. Obtenu : [obtenu]. Explique la cause avant de corriger, puis corrige uniquement ce qui est nécessaire.
```

## Demander des hypothèses plutôt qu'un correctif

```text
Ne corrige pas encore. Donne 3 hypothèses classées par probabilité, avec pour chacune le moyen de la vérifier en moins de 5 minutes.
```

## Reprendre dans une session propre

```text
Contexte : on travaille sur [tâche]. Déjà fait : [liste]. Ce qui a échoué et pourquoi : [liste]. Point de départ : la branche [nom], dernier commit [message].
Tâche : [prochaine étape précise].
```
