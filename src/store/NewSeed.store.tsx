import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { action, map } from "nanostores";
import { firebaseDb } from "../lib/Firebase";
import { firstCap } from "../lib/utils";
import { Tvariety } from "./Variety.store";

// defined  here ./doc/definition-table-seed.md

export const tempMin = -300;
export const seedCollection = "Seed";

type FieldString = "name" | "gender" | "species" | "idFirebase";
type FieldNumber =
  | "germMin"
  | "germMax"
  | "cultMin"
  | "cultMax"
  | "seedType";

export const seedInit: Tseed = {
  name: "",
  gender: "",
  species: "",
  germMin: tempMin,
  germMax: tempMin,
  cultMin: tempMin,
  cultMax: tempMin,
  seedType: 0,
  idFirebase: "",
  isValide: true,
  varietyList : [],

};

export type Tseed = {
  name: string;
  gender: string;
  species: string;
  germMin: number;
  germMax: number;
  cultMin: number;
  cultMax: number;
  seedType: number;
  idFirebase: string;
  isValide: boolean;
  varietyList : Tvariety[];
};

export type TseedCorrect = {
  isCorrectName: boolean;
  isCorrectGender: boolean;
  isCorrectSpecies: boolean;
  isCorrectGermMin: boolean;
  isCorrectGermMax: boolean;
  isCorrectCultMin: boolean;
  isCorrectCultMax: boolean;
  isCorrectSeedType: boolean;
};

export type TnewSeedStore = {
  input: Tseed;
  inputCorrect: TseedCorrect;
  isBusy: boolean;
  isSeedCorrect: boolean;
  currentSeed: Tseed;
  seedList: Tseed[];
  isLoaded:  boolean;
};

export const newSeedStore = map<TnewSeedStore>({
  input: { ...seedInit },

  inputCorrect: {
    isCorrectName: false,
    isCorrectGender: false,
    isCorrectSpecies: false,
    isCorrectGermMin: false,
    isCorrectGermMax: false,
    isCorrectCultMin: false,
    isCorrectCultMax: false,
    isCorrectSeedType: true,
  },
  isBusy: false,
  isSeedCorrect: false,
  isLoaded: false,
  currentSeed: { ...seedInit },
  seedList: [],
});

/** save the seed in firebase ,
 * retrieve the Id from dire base insert
 * add one seed at the begining of the list and
 */
export const addSeed = action(newSeedStore, "addSeed", (store) => {
  setIsBusy(true);
  checkSeed();
  const { isSeedCorrect } = store.get();
  if (isSeedCorrect) {
    addCurrentSeed();
    const { currentSeed, seedList } = store.get();
    const newSeedList = { ...seedList, ...currentSeed };
    store.setKey("seedList", newSeedList);
    {console.log(newSeedList)}
  }

  setIsBusy(false);
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const removeSeed = action(
  newSeedStore,
  "removeSeed",
  async (store, idSeed: string) => {
    setIsBusy(true);
    const { seedList } = store.get();

    const newSeedList = seedList.filter(
      (oneSeed: Tseed, index: number) => oneSeed.idFirebase !== idSeed
    );

    const deletedListSeed = seedList.filter(
      (oneSeed: Tseed, index: number) => oneSeed.idFirebase === idSeed
    );

    store.setKey("seedList", newSeedList);

    const deletedSeed = { ...deletedListSeed[0], isValide: false };

    const mySeedCollection = collection(firebaseDb, seedCollection);

    const myDoc = doc(mySeedCollection, deletedSeed.idFirebase);
    const status = await setDoc(myDoc, deletedSeed);
  }
);

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const updateVarietyList = action(
  newSeedStore,
  "updateVarietyList",
  (store, idSeed:string , varietyList: Tvariety[]) => {
  
  
  });
  
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const updateSeed = action(
  newSeedStore,
  "updateSeed",
  (store, updateSeed: Tseed, idSeed: number) => {
    setIsBusy(true);
    const { seedList } = store.get();

    const newSeedList = seedList.map((seed, index) => {
      if (index !== idSeed) {
        return seed;
      } else return updateSeed;
    });

    store.setKey("seedList", newSeedList);
    saveSeedList();

    setIsBusy(false);
  }
);

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
/** read from DataBase and refresh store */
export const loadSeedList = action(
  newSeedStore,
  "loadSeedList",
  async (store) => {
    setIsBusy(true);
    console.log("loadSeedList");

    const myCollection = collection(firebaseDb, seedCollection);
    // const myQuery = query(myCollection,seedCollection);
    const myQuerryDocSnapshot = await getDocs(myCollection);

    let newSeedList:Tseed[]=[];
    myQuerryDocSnapshot.forEach((oneDoc) => {
      const oneSeed: any = oneDoc.data();
      const newSeed: Tseed = {...oneSeed, idFirebase: oneDoc.id};
      newSeedList.push(newSeed);
    });
    store.setKey("seedList", newSeedList);

    // saveSeedList();
    setIsBusy(false);
    setIsLoaded(true);
  }
);

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

export const setIsBusy = action(
  newSeedStore,
  "setIsBusy",
  (store, value: boolean) => {
    store.setKey("isBusy", value);
  }
);

export const setInputString = action(
  newSeedStore,
  "setInputName",
  (store, stringFiedl: FieldString, value: string) => {
    const { input } = store.get();

    const newInput = { ...input, [stringFiedl]: value };
    const checkField = "isCorrect" + firstCap(stringFiedl);

    store.setKey("input", newInput);
    setIsInputStringCorrect(checkField, value);
  }
);

export const setInputNumber = action(
  newSeedStore,
  "setInputName",
  (store, stringFiedl: FieldNumber, value: number) => {
    const { input } = store.get();

    const newInput = { ...input, [stringFiedl]: value };
    const checkField = "isCorrect" + firstCap(stringFiedl);
    store.setKey("input", newInput);
    setIsInputNumberCorrect(checkField, value);
  }
);

export const setIsInputStringCorrect = action(
  newSeedStore,
  "setIsInputStringCorrect",
  (store, field: string, value: string) => {
    const { inputCorrect } = store.get();
    if (value !== "") {
      const newInputCorrect = { ...inputCorrect, [field]: true };

      store.setKey("inputCorrect", newInputCorrect);
    }
  }
);

export const setIsInputNumberCorrect = action(
  newSeedStore,
  "setIsInputNumberCorrect",
  (store, field: string, value: number) => {
    const { inputCorrect } = store.get();
    if (value !== tempMin) {
      const newInputCorrect = { ...inputCorrect, [field]: true };
      store.setKey("inputCorrect", newInputCorrect);
    }
  }
);




export const setIsLoaded = action(
  newSeedStore,
  "setIsBusy",
  (store, value: boolean) => {
    store.setKey("isLoaded", value);
  }
);

// ---------------------------------------------------------------------
export const saveSeedList = action(
  newSeedStore,
  "saveNewSeed",
  async (store) => {
    store.setKey("isBusy", true);

    // if ( )
    // .. <SetDoc></SetDoc>

    store.setKey("isBusy", false);
  }
);
// ---------------------------------------------------------------------

export const checkSeed = action(newSeedStore, "checkSeed", (store) => {
  store.setKey("isBusy", true);
  const { input, inputCorrect } = store.get();

  if (
    inputCorrect.isCorrectName &&
    inputCorrect.isCorrectGender &&
    inputCorrect.isCorrectSpecies &&
    inputCorrect.isCorrectGermMin &&
    inputCorrect.isCorrectGermMax &&
    inputCorrect.isCorrectCultMin &&
    inputCorrect.isCorrectCultMax &&
    inputCorrect.isCorrectSeedType
  ) {
    const newSeed = {
      name: input.name,
      gender: input.gender,
      species: input.species,
      germMin: input.germMin,
      germMax: input.germMax,
      cultMin: input.cultMin,
      cultMax: input.cultMax,
      seedType: input.seedType,
      idFirebase: input.idFirebase,
      isValide: true,
      varietyList : input.varietyList,

    };

    store.setKey("currentSeed", newSeed);
    store.setKey("isSeedCorrect", true);
    return true;
  }
  return false;
});

// ---------------------------------------------------------------------
export const saveCurrentSeed = action(
  newSeedStore,
  "saveSeed",
  async (store) => {
    store.setKey("isBusy", true);
    const { currentSeed } = store.get();

    const mySeedCollection = collection(firebaseDb, seedCollection);
    const myDoc = doc(mySeedCollection, currentSeed.idFirebase);
    const status = await setDoc(myDoc, currentSeed);
    store.setKey("isBusy", false);
  }
);
// ---------------------------------------------------------------------
export const addCurrentSeed = action(
  newSeedStore,
  "saveSeed",
  async (store) => {
    store.setKey("isBusy", true);
    const { currentSeed } = store.get();

    const mySeedCollection = collection(firebaseDb, seedCollection);
    const status = await addDoc(mySeedCollection, currentSeed);
    const newNewSeed = { ...currentSeed, idFirebase: status.id };

    store.setKey("currentSeed", newNewSeed);
    store.setKey("isBusy", false);
  }
);
// ---------------------------------------------------------------------
export const deleteSeed = action(
  newSeedStore,
  "saveSeed",
  async (store, idFirebase: string) => {
    store.setKey("isBusy", true);
    // .. <SetDoc></SetDoc>
    store.setKey("isBusy", false);
  }
);

// ---------------------------------------------------------------------
