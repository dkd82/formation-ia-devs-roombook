# Corriger un bug

```text
Contexte :
Bug dans [projet] : [comportement observé, avec les données exactes]. Comportement attendu : [attendu]. Code concerné : [fichier(s)]. Tests : [fichier].

Tâche :
Étape 1 : écris d'abord un test qui reproduit le bug et montre qu'il échoue. Étape 2 : propose 2 hypothèses classées sur la cause, puis corrige la cause (pas le symptôme).

Contraintes :
Correction minimale, uniquement dans [zone]. Pas de try/catch ni de cas particulier pour masquer l'erreur. Ne change pas le contrat de l'API.

Critères de succès :
Le nouveau test échoue avant la correction et passe après. Les tests existants restent verts. [Cas voisin à ne pas casser]. Ajoute aussi le cas symétrique.
```
