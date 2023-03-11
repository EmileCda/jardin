# installation Firebase

rendez-vous sur la page du projet fire base

## création du projet sur firebase

[Google Firebase](https://console.firebase.google.com/u/0/)

1. créer un projet

![firebase-create-project](./image/firebase-create-project.png)

projet name

![firebase-select-project-name](./image/firebase-select-project-name.png)

pas besoin de google analitics
![firebase-google-analitic](./image/firebase-google-analitic.png)

ensu
![firebase-project-created](./image/firebase-project-created.png)

ajouter firebase à l'application :

![firebase-add-app-web-2](./image/firebase-add-app-web-2.png)

click ici : ![firebase-add-app-web](./image/firebase-add-app-web.png)

ensuite remplir le questionnaire

![firebase-pseudo-app.png](./image/firebase-pseudo-app.png)
le hosting est a configuer plus tard lors de la mise en ligne

![firebase-install-app.png](./image/firebase-install-app.png)

installer la bibliothèque

```sh
npm install firebase
```

copier le script JS avec les clée d'accès

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "ABCDEF-1234",
  authDomain: "poterABCDEF-1234.firebaseapp.com",
  projectId: "ABCDEF-1234",
  storageBucket: "ABCDEF-1234.appspot.com",
  messagingSenderId: "8407739ABCDEF-123488397",
  appId: "1:ABCDEF-12347:web:6bcf30c9ABCDEF-1234514f16e08a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

ensuite créer la base de donnée$

![firebase-create-db.png](./image/firebase-create-db.png)

créer la base en mode test pour avoir toutes les fonctionnalités et ensuite le passer en prod en elevant les sécurités

![firebase-create-db-2.png](./image/firebase-create-db-2.png)

choisir la région du monde ou est stocké la base de donnée

![firebase-create-db-3.png](./image/firebase-create-db-3.png)

![firebase-create-db-4.png](./image/firebase-create-db-4.png)

c'est terminé : le projet est accessible par la console
