# jardin

# Installation

1. Cloner le repository
1. Installer les dépendances NPM : npm install
1. Copier / Coller le fichier .env en .env.local et éditer vos valeurs de configuration
1. Démarer le serveur : npm run dev

# Qu'il a t-il sous le capot ?

1. [dotenv](https://github.com/motdotla/dotenv#readme)
1. [react-router](https://github.com/remix-run/react-router#readme)
1. [styled-components](https://styled-components.com/)
1. [nanostores](https://github.com/nanostores/nanostores#readme)
1. [firebase](https://firebase.google.com/)
1. [typescript](https://www.typescriptlang.org/)
1. [vite](https://github.com/vitejs/vite/tree/main/#readme)
1. [react-responsive](http://github.com/contra/react-responsive)

1. [ckeditor4-react](https://ckeditor.com/docs/ckeditor4/latest/index.html)

```sh
npm install ckeditor4-react
```

# Organisation du code

![organisation du code](../doc/images/organisation-code.png)

1. `main.tsx` : Point d'entrée de l'application
1. `src` : Dossier contenant l'intégralité du code source
1. `src/components` : Dossier contenant tout les composants react (y compris l'App)
1. `src/types` : Dossier contenant les types typescript de l'application
1. `src/stores` : Dossier contenant les actions et les états des composants
1. `src/styles` : Dossier contenant le style de l'application (styled-components)
1. `src/images` : Dossier contenant les images l'application
1. `src/lib` : Dossier contenant tout le code externe à React
1. `src/data` : Dossier contenant le donnée propre : fichier json contenant les labels

## macro-fonction

1. [tronc commun](./doc/troncCommun.md)

1. [besoin en calorie](./doc/besoinsCalorie.md)

1. [repertoire des graines](./doc/RepertoireGraine.md)

1. [itinéraire technique](./doc/itinéraireTechnique.md)

1. [jardin/cluster/planche](./doc/planche.md)

1. [calendrier / semaine / mois / saison](./doc/periode.md)

1. [Configuration](./doc/config.md)

## coté technique

1. [création de l'application](./doc/creation.md)

1. [application en trois langue](./doc/app-langue.md)
1. [dark mode](./doc/app-dark-mode/md)

1. [Installation Firebase](./doc/firebase-install.md)

1. [choix technique](./doc/choixTechnique.md)

1. [les designs sont fait sur figma](https://www.figma.com/file/A1Ix7uxonfjNDaqDJaDkjr/Jardin?node-id=0%3A1&t=DDHOCgCufe2RZp3m-0)

## Spécification

1. [Ancien structure table](./doc/old-table_definition.md)
1. [collection Seeds](./doc/definition-table-seed.md)
1. [variete](./doc/variety.md)
1. [nouvelle Graine](./doc/new-seed.md)

# hosting

1. compiler le projet javascript

```sh
npm run build
```

1. deploiement

```sh
firebase deploy
```
# jardin
