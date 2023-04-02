// defined  here ./doc/definition-table-seed.md

import { action, map } from "nanostores";
import {
  Tvariety,
  TvarietyInputCorrect,
  setIdFireBase,
  setVarietyIsLoaded,
  varietyNewSeed,
} from "./Variety.store";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { firebaseDb } from "../lib/Firebase";
import { seedCollection } from "../lib/commun";

export type Tseed = {
  idFirebase: string;
  seedName: string; //  seed common name
  gender: string; // latin name
  species: string; // latin name
  varietyList: Tvariety[];
};

export const seedInit = {
  idFirebase: "",
  seedName: "", //  seed common name
  gender: "", // latin name
  species: "", // latin name
  varietyList: [],
};

export type TSeedStore = {
  isBusy: boolean;
  isLoaded: boolean;
  currentSeedId: string;
  currentSeed: Tseed;
  seedList: Tseed[];
};

export const SeedStore = map<TSeedStore>({
  isBusy: false,
  isLoaded: false,
  currentSeedId: "",
  currentSeed: seedInit,
  seedList: [],
});

// ---------------------------------------------------------------------
export const setIsBusy = action(
  SeedStore,
  "setIsBusy",
  (store, value: boolean) => {
    store.setKey("isBusy", value);
  }
);
// ---------------------------------------------------------------------
export const setIsLoaded = action(
  SeedStore,
  "setIsLoaded",
  (store, load: boolean) => {
    store.setKey("isLoaded", load);
  }
);
// ---------------------------------------------------------------------
export const deleteSeed = action(
  SeedStore,
  "deleteSeed",
  async (store, seed: Tseed) => {
    const { seedList } = store.get();
    const newSeedList = seedList.filter(
      (item) => item.idFirebase !== seed.idFirebase
    );

    store.setKey("seedList", newSeedList);
  
    const myCollection = collection(firebaseDb, seedCollection);
    const myDoc = doc(myCollection, seed.idFirebase);
    const docRef = await deleteDoc(myDoc);
  
  console.log("deleteSeed");
  console.log(seed.idFirebase);
  }
);

// ---------------------------------------------------------------------
/** read from DataBase and refresh store */
export const loadSeedList = action(SeedStore, "loadSeedList", async (store) => {
  setIsBusy(true);

  const myCollection = collection(firebaseDb, seedCollection);
  // const myQuery = query(myCollection,seedCollection);
  const myQuerryDocSnapshot = await getDocs(myCollection);

  let newSeedList: Tseed[] = [];
  myQuerryDocSnapshot.forEach((oneDoc) => {
    const oneSeed: any = oneDoc.data();
    const newSeed: Tseed = { ...oneSeed, idFirebase: oneDoc.id };
    newSeedList.push(newSeed);
  });
  store.setKey("seedList", newSeedList);

  // saveSeedList();
  setIsBusy(false);
  setIsLoaded(true);
});

// ---------------------------------------------------------------------
export const newSeed = action(SeedStore, "setIsBusy", async (store) => {
  const mySeedCollection = collection(firebaseDb, seedCollection);
  // 1. prendre seedInit et ajouter les valeur seedName, gender et species initialisé avec des valeurs par défaut
  const newCurrentSeed = {
    ...seedInit,
    seedName: "no-name", //  seed common name
    gender: "no-gender", // latin name
    species: "no-species",
  };

  // 1. Ajouter un enregistrement dans la base (addDoc)
  const docRef = await addDoc(mySeedCollection, newCurrentSeed);
  // 1. Récuperer l'Id de Firebase : docRef.id

  // 1. modifier currentSeed avec les valeurs récupéré (seedInit + modification + idFirebase)
  const newNewCurrentSeed = { ...newCurrentSeed, idFirebase: docRef.id };
  // 1. ajouter CurrentSeed au la seedList
  store.setKey("currentSeed", newNewCurrentSeed);
  // 1. modifier currentSeedId avec l'Id de Firebase
  store.setKey("currentSeedId", docRef.id);

  varietyNewSeed(newNewCurrentSeed);
  // setVarietyIsLoaded(false);
});
// ---------------------------------------------------------------------
export const setIdCurrentSeed = action(
  SeedStore,
  "setIsBusy",
  (store, idFirebaseInput: string) => {
    store.setKey("currentSeedId", idFirebaseInput);
    const { seedList } = store.get();
    const newSeedList = seedList.filter(
      (seed) => seed.idFirebase === idFirebaseInput
    );
    const newCurrentSeed = { ...newSeedList[0], idFirebase: idFirebaseInput };
    store.setKey("currentSeed", newCurrentSeed);
    setVarietyIsLoaded(false);
  }
);

// ---------------------------------------------------------------------
// update current seed and save into firebase
export const ModifySeed = action(
  SeedStore,
  "ModifySeed",
  async (store, varietyList: Tvariety[]) => {
    const { currentSeed } = store.get();
    const newCurrentSeed = {
      ...currentSeed,
      varietyList: varietyList,
      seedName: varietyList[0].seedName, //  seed common name
      gender: varietyList[0].gender, // latin name
      species: varietyList[0].species,
    };
    store.setKey("currentSeed", newCurrentSeed);
    const { seedList } = store.get();
    const newSeedList = seedList.map((seed) => {
      if (seed.idFirebase == currentSeed.idFirebase) return currentSeed;
      else return seed;
    });
    store.setKey("seedList", newSeedList);
    UpdateSeed();
  }
);

// ---------------------------------------------------------------------
// update to firebase one Seed (with array of variety)
export const UpdateSeed = action(SeedStore, "UpdateSeed", async (store) => {
  store.setKey("isBusy", true);
  console.log("UpdateSeed");
  const { currentSeed } = store.get();
  console.log(currentSeed.idFirebase);
  const myCollection = collection(firebaseDb, seedCollection);
  const myDoc = doc(myCollection, currentSeed.idFirebase);
  const docRef = await setDoc(myDoc, currentSeed);

  store.setKey("isBusy", false);
});
// ---------------------------------------------------------------------

export const saveSeed = action(
  SeedStore,
  "saveSeed",
  async (store, varietyList: Tvariety[]) => {
    store.setKey("isBusy", true);

    const { currentSeed, seedList } = store.get();

    // 1. update currentSeed with new varietyList
    const newSeed = {
      ...currentSeed,
      varietyList: varietyList,
      seedName: varietyList[0].seedName,
      gender: varietyList[0].gender,
      species: varietyList[0].species,
    };
    store.setKey("currentSeed", newSeed);

    // 1. save currentSeed dans firebase
    const myDocument = doc(firebaseDb, seedCollection, newSeed.idFirebase);
    const docRef = await setDoc(myDocument, newSeed);

    // 1. update listSeed with currentSeed
    const newSeedList = [newSeed, ...seedList];
    store.setKey("seedList", newSeedList);

    store.setKey("isBusy", false);
  }
);
// ---------------------------------------------------------------------

export const ZsaveSeed = action(
  SeedStore,
  "saveSeed",
  async (store, inputSeed: Tvariety) => {
    store.setKey("isBusy", true);
    console.log("saveSeed");
    const { currentSeed, seedList } = store.get();

    const newSeed = {
      ...currentSeed,
      varietyList: [inputSeed],
      seedName: inputSeed.seedName,
      gender: inputSeed.gender,
      species: inputSeed.species,
    };

    const mySeedCollection = collection(firebaseDb, seedCollection);
    const docRef = await addDoc(mySeedCollection, newSeed);

    const newCurrentSeed = { ...newSeed, idFirebase: docRef.id };
    store.setKey("currentSeed", newCurrentSeed);
    const newSeedList = [...seedList, newCurrentSeed];

    store.setKey("currentSeedId", docRef.id);
    setIdFireBase(docRef.id);
    store.setKey("seedList", newSeedList);
    console.log(newSeedList);
    setVarietyIsLoaded(false); // in order for screen varitety to reload varietyList
    store.setKey("isBusy", false);
  }
);

// ---------------------------------------------------------------------
