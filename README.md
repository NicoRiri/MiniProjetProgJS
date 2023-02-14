# MiniProjetWeb

Bernardet Nicolas et Pellizzari Théo

L'objectif de ce mini-projet est de construire une application javascript vous permettant d'utiliser et
d'appliquer les notions abordées jusqu'ici : bases du langage, fonctions, objets et tableaux, DOM et
événements.
Le projet peut être réalisé en binôme. Il se compose de 4 étapes.
Description globale
L'objectif est de construire une application javascript permettant de prendre des notes et de
mémoriser ces notes.
Une note est composée d'un titre, d'un contenu et d'une date de création. L'application permet de
créer des notes, de modifier des notes existantes et de supprimer des notes.
La liste des notes déjà créées est affichée ; elle permet de sélectionner une note à afficher.
Un exemple d'affichage est fourni en annexe. Une vidéo de démonstration des fonctionnalités est
également disponible.
Le contenu d'une note peut être formaté en utilisant une syntaxe Markdown. Pour être affiché, la
note est convertie en un fragment de code html à l'aide de la librairie showdown.js
(http://showdownjs.com/) qui vous est fournie.
Pour que la liste de notes soit persistante, c'est à dire qu'elle soit conservée d'une exécution à l'autre,
elle sera stockée dans le localStorage du navigateur. Il s'agit d'un espace de stockage géré par le
navigateur et associé à une page web quelconque. plus d'information disponible ici :
https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
