[< précédent](../README.md)

# Ajouter une nouvelle graine.

# définition

```js
export type Tseed = {
  idFirebase: string, // id given by firebase
  seedName: string, //  seed common name
  gender: string, // latin name
  species: string, // latin name
  varietyList: Tvariety[],
};
```

# démarche

# creation

nouvelle graine
## coté SeedStore
function : newSeed dans seedStore

1. prendre seedInit et ajouter les valeur seedName, gender et species initialisé avec des valeurs par défaut
1. Ajouter un enregistrement dans la base (addDoc)
1. Récuperer l'Id de Firebase
1. modifier currentSeed avec les valeurs récupéré (seedInit + modification + idFirebase)
1. ajouter CurrentSeed au la seedList
1. modifier currentSeedId avec l'Id de Firebase

1. call varietyNewSeed(currentSeed); from variety.store

## coté VarietyStore

varietyNewSeed : dans varietyStore

1. initialiser currentVariety une variété générique et idVariety= varietyList.lenght (O)
1. ajouter l'id firebase dans la currentVariety
1. ajouter currentVariety à VarietyList ;
1. remplir les information comme pour une variété dans currentVariety

# enregistrement :

saveVariety() varietyStore

## coté VarietyStore

1. ajouter currentVariety dans varietyList.
1. call saveSeed(newVarietyList) dans seedStore

## coté SeedStore
saveSeed(newVarietyList) Seedstore

1. update currentSeed avec la nouvelle liste de variété
1. save currentSeed dans firebase
1. update listSeed avec currentSeed

# delete seed

1. enlever de la seedList
1. supprimer de la base firebase
