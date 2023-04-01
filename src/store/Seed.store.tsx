// defined  here ./doc/definition-table-seed.md

import { action, map } from "nanostores";
import { Tvariety, TvarietyInputCorrect, varietyInit } from "./Variety.store";
import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseDb } from "../lib/Firebase";
import { seedCollection } from "./NewSeed.store";

export type Tseed = {
  idFirebase: string;
  varietyList: Tvariety[];
};

export const seedInit = {
  idFirebase: "",
  varietyList: [],
};

export type TSeedStore = {
  isBusy: boolean;
  currentSeedId: string;
  currentSeed: Tseed;
  seedList: Tseed[];
};

export const SeedStore = map<TSeedStore>({
  isBusy: false,
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
export const newSeed = action(SeedStore, "setIsBusy", (store) => {
  store.setKey("currentSeed", seedInit);
});

// ---------------------------------------------------------------------
export const setIdCurrentSeed = action(
  SeedStore,
  "setIsBusy",
  (store, idFirebase: string) => {
    store.setKey("currentSeedId", idFirebase);
  }
);

// ---------------------------------------------------------------------
export const saveSeed = action(SeedStore, "saveSeed", async (store) => {
  store.setKey("isBusy", true);
  const { currentSeed } = store.get();
  const mySeedCollection = collection(firebaseDb, seedCollection);
  const myDoc = doc(mySeedCollection, currentSeed.idFirebase);
  const status = await setDoc(myDoc, newSeed);
  store.setKey("isBusy", false);
});

// ---------------------------------------------------------------------
