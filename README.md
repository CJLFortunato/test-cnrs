# CNRS - Profil utilisateur

Voici mon rendu pour le test que vous m'avez envoyé. Je vous remercie encore de l'intérêt que vous portez à ma candidature.

Clémence Fortunato

## Table des matières
* [Consignes du test](#consignes-du-test)
* [Fonctionnalités](#fonctionnalités)
* [Technologies](#technologies)
    - [React](#react)
    - [Typescript](#typescript)
    - [JSON Server](#json-server)
    - [SASS](#sass)
    - [Jest](#jest)
    - [Cypress](#cypress)
* [Lancer le projet](#lancer-le-projet)
* [Ressources externes](#ressources-externes)


## Consignes du test

Imaginez une page react permettant de renseigner dans le profil d'un utilisateur la ou les expertises disciplinaires de celui-ci.

* Une API permet de récupérer la liste des 27 disciplines dans lesquelles l'utilisateur doit faire son choix pour remplir cette partie de formulaire.
    - GET /topics
    - retourne un json {"anthro-bio","anthro-se","archeo","archi","art","class","demo","droit","eco","edu","envir","genre","geo","manag","hisphilso","hist","info","lang","litt","museo","musiq","phil","psy","relig","scipo","socio","stat"}

* Une API permet de récupérer la ou les items que l’utilisateur a déjà enregistré.
    - GET /users/{id}/topics [id est le login de l'utilisateur]
    - retourne un json {"art","litt"}

* Une API permet d’enregistrer la ou les disciplines sélectionnées par l’utilisateur.
    - PATCH /users/{id}/topics [id est le login de l'utilisateur]
    - attend un json



## Fonctionnalités

Cette page permet de sauvegarder les expertises disciplinaires de l'utilisateur.

Elle récupère les disciplines disponibles et les disciplines déjà enregistrées sur le serveur et les affiche sur une série de boutons. Les disciplines déjà enregistrées sur le compte de l'utilisateur sont enlevées de la liste des disciplines disponibles pour éviter que l'utilisateur sélectionne deux fois la même discipline. 

Il suffit de cliquer sur le ou les bouton(s) correspondant à la ou les discipline(s) souhaitée(s) puis de cliquer sur le bouton "Save" pour envoyer une requête PATCH vers le serveur qui enregistrera les modifications puis renverra la nouvelle liste de disciplines déjà enregistrées. 

Les disciplines que l'utilisateur aura sélectionnées seront retirées de la liste des disciplines disponibles.



## Technologies

Description de l'ensemble des technologies utilisées dans le projet. j'ai essayé autant que possible d'utiliser les technologies mentionnées dans l'offre d'emploi.

### React 

Version: 17.0.2
React-DOM version: 17.0.2
React-scripts version: 5.0.0

Ce projet a été créé avec create-react-app.

React testing library version: 12.1.2

Le serveur de test tourne sur localhost:3000.

### Typescript

Ce projet inclut Typescript version 4.5.4. 

### JSON Server

[Lien GitHub](https://github.com/typicode/json-server)

JSON Server est une fausse API REST pour les développeurs Front-end qui ont besoin de simuler une partie Back-end rapidement. Elle supporte les requêtes GET, POST, PUT, PATCH et DELETE. Les données sont rassemblées dans le fichier db.json.

Le serveur tourne sur localhost:5000 par défaut. Si cela ne vous convient pas, vous pouvez le changer dans la partie "scripts" du fichier package.json.

### SASS

Ce projet utilise SASS pour les feuilles de style, version 1.45.1.

### Jest

Les tests unitaires et d'intégration de ce projet tournent sous Jest version 27.4.5. 

Pour lancer ces test, tapez `npm run test` dans votre terminal

Au départ, je voulais également utiliser Enzyme, mais ce n'est pas encore compatible avec React 17.

### Cypress

Ce projet utilise Cypress version 9.2.0.

Pour lancer le test end-to-end, tapez `npx cypress open` dans votre terminal.



## Lancer le projet

pour lancer le projet, ouvrez un terminal dans le dossier "cnrs-test". Ensuite tapez `npm start` pour démarrer le serveur de développement React (partie Front-end) et `npm run server` pour démarrer le serveur Back-end. Vous devriez voir la page s'ouvrir dans votre navigateur. 

Si vous souhaitez inspecter et modifier le CSS, lancez la compilation SASS avec `npm run sass`.

Tous les scripts disponibles sont indiqués dans la partie "scripts" du fichier package.json.



## Ressources externes

L'image de fond de la Stadtbibliothek de Stuttgart est de [Max Langelott](https://unsplash.com/@freiburgermax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) téléchargée sur [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText). Elle est libre de droits. Plus de détails sur la licence [ici](https://unsplash.com/license).



## Captures d'écran

L'application version écran d'ordinateur

![Version ordinateur](src\Screenshot_desktop.png)

L'application version mobile

![Version mobile](src\Screenshot_mobile.png)







