---
description: Proposer un message de commit conforme aux conventions
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*)
---
Diff indexé :
!`git diff --staged`

Propose un message de commit au format `type: description` (feat, fix, test, refactor, docs, chore),
description à l'impératif, 72 caractères maximum, avec un corps de 2 à 3 lignes si utile.
Si rien n'est indexé, dis-le. Attends ma validation avant de lancer `git commit`.
