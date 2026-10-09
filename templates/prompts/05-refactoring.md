# Refactorer sans changer le comportement

```text
Contexte :
[Code problématique : fichier, taille, responsabilités mélangées]. Les tests de [fichier] sont verts ([commande]).

Tâche :
Refactore en extrayant : [fonction A] dans [fichier A], puis [fonction B] dans [fichier B]. Procède en [deux] commits : un par extraction.

Contraintes :
Comportement strictement identique (mêmes codes HTTP, mêmes messages). Ne change rien d'autre : pas de renommage opportuniste, pas de reformatage hors des lignes touchées. Lance les tests après chaque extraction.

Critères de succès :
Tests verts après chaque extraction ; [critère mesurable, par exemple « le handler fait moins de 25 lignes »] ; fonctions pures (aucun accès au store) ; résumé en 5 lignes de ce qui a changé.
```
