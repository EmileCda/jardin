/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { TLang } from "../types/App.type";
import { firstCap } from "../lib/utils";
import { ModifySeed, Tseed, UpdateSeed, saveSeed } from "./Seed.store";

export const MIN_TEMP: number = -300;
export const ID_INIT: number = -1;
export const ID_SEED_INIT: number = -2;

export enum TfieldString {
  species = "species",
  gender = "gender",
  cultivar = "cultivar",
  seedName = "seedName",
  varietyName = "varietyName",
  remarks = "remarks",
  idFirebase = "idFirebase",
}

export enum TfieldNumber {
  idVariety = "idVariety",
  category = "category",
  rusticity = "rusticity",
  minGermTemp = "minGermTemp",
  maxGermTemp = "maxGermTemp",
  minGermTime = "minGermTime",
  maxGermTime = "maxGermTime",
  zeroVeg = "zeroVeg",
  minGrowTemp = "minGrowTemp",
  maxGrowTemp = "maxGrowTemp",
  minGrowTime = "minGrowTime",
  maxGrowTime = "maxGrowTime",
  minYield = "minYield",
  maxYield = "maxYield",
  calorie = "calorie",
  protein = "protein",
  lipid = "lipid",
  carbohydrate = "carbohydrate",
  tGW = "tGW",
  sowingDepth = "sowingDepth",
  seedSpacing = "seedSpacing",
  rowSpacing = "rowSpacing",
  height = "height",
  floorSpace = "floorSpace",
}

enum Color {
  Red,
  Green,
}

export type TvarietyInputCorrect = {
  isCorrectIdVariety: boolean;
  isCorrectCategory: boolean;
  isCorrectRusticite: boolean;
  isCorrectMinGermTemp: boolean;
  isCorrectMaxGermTemp: boolean;
  isCorrectMinGermTime: boolean;
  isCorrectMaxGermTime: boolean;
  isCorrectZeroVeg: boolean;
  isCorrectMinGrowTemp: boolean;
  isCorrectMaxGrowTemp: boolean;
  isCorrectMinGrowTime: boolean;
  isCorrectMaxGrowTime: boolean;
  isCorrectMinYield: boolean;
  isCorrectMaxYield: boolean;
  isCorrectCalorie: boolean;
  isCorrectProtein: boolean;
  isCorrectLipid: boolean;
  isCorrectCarbohydrate: boolean;
  isCorrectTGW: boolean;
  isCorrectSowingDepth: boolean;
  isCorrectSeedSpacing: boolean;
  isCorrectRowSpacing: boolean;
  isCorrectHeight: boolean;
  isCorrectFloorSpace: boolean;
  isCorrectSpecie: boolean;
  isCorrectVariety: boolean;
  isCorrectCultivar: boolean;
  isCorrectSeedName: boolean;
  isCorrectVarietyName: boolean;
  isCorrectRemarks: boolean;
  isCorrectIdFirebase: boolean;
};

const inputInit: TvarietyInputCorrect = {
  isCorrectIdVariety: false,
  isCorrectCategory: false,
  isCorrectRusticite: false,
  isCorrectMinGermTemp: false,
  isCorrectMaxGermTemp: false,
  isCorrectMinGermTime: false,
  isCorrectMaxGermTime: false,
  isCorrectZeroVeg: false,
  isCorrectMinGrowTemp: false,
  isCorrectMaxGrowTemp: false,
  isCorrectMinGrowTime: false,
  isCorrectMaxGrowTime: false,
  isCorrectMinYield: false,
  isCorrectMaxYield: false,
  isCorrectCalorie: false,
  isCorrectProtein: false,
  isCorrectLipid: false,
  isCorrectCarbohydrate: false,
  isCorrectTGW: false,
  isCorrectSowingDepth: false,
  isCorrectSeedSpacing: false,
  isCorrectRowSpacing: false,
  isCorrectHeight: false,
  isCorrectFloorSpace: false,
  isCorrectSpecie: false,
  isCorrectVariety: false,
  isCorrectCultivar: false,
  isCorrectSeedName: false,
  isCorrectVarietyName: false,
  isCorrectRemarks: false,
  isCorrectIdFirebase: false,
};

export type Tvariety = {
  idFirebase: string;
  idVariety: number;
  seedName: string; //  seed common name
  gender: string; // latin name
  species: string; // latin name
  cultivar: string; // local name
  varietyName: string; //  variety common name
  seedType: number;
  category: number; //
  rusticity: number; // temps en °c
  minGermTemp: number; // temps en °c
  maxGermTemp: number; // temps en °c
  minGermTime: number; // nb jour
  maxGermTime: number; // nb jour
  zeroVeg: number; // temp en °c
  minGrowTemp: number; // temp en °c
  maxGrowTemp: number; // temp en °c
  minGrowTime: number; // temp en °c
  maxGrowTime: number; // temp en °c
  minYield: number; //  kg/plant
  maxYield: number; // kg/plant
  calorie: number; // nb calories  / gramme
  protein: number; // % of calories
  lipid: number; // % of calories
  carbohydrate: number; // % of calories
  tGW: number; // thousand grain weight
  sowingDepth: number; // depth in mm
  seedSpacing: number; // in mm
  rowSpacing: number; // in mm
  height: number; // in mm
  floorSpace: number; // square m
  remarks: string; // free text
};

export const varietyInit: Tvariety = {
  idFirebase: "",
  idVariety: ID_INIT,
  seedName: "", //  seed common name
  gender: "", // latin name
  species: "", // latin name
  varietyName: "", //  variety common name
  cultivar: "", // local name
  seedType: 0,
  category: MIN_TEMP, //
  rusticity: MIN_TEMP, // temps en °c
  zeroVeg: MIN_TEMP, // temp en °c
  minGermTemp: MIN_TEMP, // temps en °c
  maxGermTemp: MIN_TEMP, // temps en °c
  minGermTime: MIN_TEMP, // nb jour
  maxGermTime: MIN_TEMP, // nb jour
  minGrowTemp: MIN_TEMP, // temp en °c
  maxGrowTemp: MIN_TEMP, // temp en °c
  minGrowTime: MIN_TEMP, // temp en °c
  maxGrowTime: MIN_TEMP, // temp en °c
  minYield: MIN_TEMP, //  kg/plant
  maxYield: MIN_TEMP, // kg/plant
  calorie: MIN_TEMP, // nb calories  / gramme
  protein: MIN_TEMP, // % of calories
  lipid: MIN_TEMP, // % of calories
  carbohydrate: MIN_TEMP, // % of calories
  tGW: MIN_TEMP, // thousand grain weight
  sowingDepth: MIN_TEMP, // depth in mm
  seedSpacing: MIN_TEMP, // in mm
  rowSpacing: MIN_TEMP, // in mm
  height: MIN_TEMP, // in mm
  floorSpace: MIN_TEMP, // square m
  remarks: "", // free text
};

export type VarietyStore = {
  name: string;
  idFirebase: string;
  isLoaded: boolean;
  isBusy: boolean;
  currentId: number;
  inputCorrect: TvarietyInputCorrect;
  currentVariety: Tvariety;
  idSeed: string;
  varietyList: Tvariety[];
};

export const varietyStore = map<VarietyStore>({
  isLoaded: false,
  idFirebase: "",
  name: "",
  idSeed: "",
  isBusy: false,
  currentId: ID_INIT,
  inputCorrect: { ...inputInit },
  currentVariety: { ...varietyInit },
  varietyList: [],
});

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const varietyNewSeed = action(
  varietyStore,
  "varietyNewSeed",
  (store, newSeed: Tseed) => {
    // 1. créer une variété générique avec idVariety= varietyList.lenght (O)
    // 1. ajouter l'id firebase dans la varieté
    const newVariety = {
      ...varietyInit,
      idFirebase: newSeed.idFirebase,
      idVariety: newSeed.varietyList.length,
      varietyName: "Generic",
    };
    store.setKey("currentVariety", newVariety); // in order to have idVariety included
    const { currentVariety, varietyList } = store.get();
    // 1. ajouter currentVariety à VarietyList ;

    const newVarietyList = [currentVariety, ...varietyList];
    store.setKey("varietyList", newVarietyList); // in order to have idVariety included
  }
);

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const saveVariety = action(varietyStore, "save", (store) => {
  const { currentVariety, varietyList } = store.get();
  const newVarietyList = varietyList.map((variety) => {
    if (variety.idVariety === currentVariety.idVariety) {
      return currentVariety;
    } else {
      return variety;
    }
  });
  store.setKey("varietyList", newVarietyList); // in order to have idVariety included
  console.log(newVarietyList);
  console.log(varietyList);
  console.log(currentVariety);
  saveSeed(newVarietyList);
});

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const deleteVariety = action(
  varietyStore,
  "setVarietyIsLoaded",
  (store, deleteVariety: Tvariety) => {
    setIsBusy(true);
    const { varietyList } = store.get();
    // 1. delete from varietyList
    const newVarietyList = varietyList.filter(
      (variety) => variety.idVariety !== deleteVariety.idVariety
    );
    store.setKey("varietyList", newVarietyList);
    // 1. load newVarietyList to Seed
    // 1. saveSeed ()
    saveSeed(newVarietyList);
    setIsBusy(false);
  }
);

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setVarietyIsLoaded = action(
  varietyStore,
  "setVarietyIsLoaded",
  (store, load: boolean) => {
    store.setKey("isLoaded", load);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setIsLoaded = action(
  varietyStore,
  "setIsLoaded",
  (store, load: boolean) => {
    store.setKey("isLoaded", load);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const loadVarietyList = action(
  varietyStore,
  "loadVarietyList",
  (store, seed: Tseed) => {
    const newVarietyList = seed.varietyList;
    store.setKey("varietyList", newVarietyList);
    store.setKey("idFirebase", seed.idFirebase);
    setIsLoaded(true);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setIdFireBase = action(
  varietyStore,
  "setIdFireBase",
  (store, id: string) => {
    store.setKey("idFirebase", id);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const newVariety = action(varietyStore, "newVariety", (store) => {
  const { varietyList } = store.get();

  let maxIdVariety : number =   ID_INIT;
for (const variety  of varietyList ){
  if (maxIdVariety < variety.idVariety)
    maxIdVariety =  variety.idVariety
}

  const newVariete = {
    ...varietyList[0],
    varietyName: "",
    idVariety: maxIdVariety++,
  };
  console.log(varietyList);
  console.log(newVariete);
  store.setKey("currentVariety", newVariete);
  store.setKey("currentId", newVariete.idVariety);
  const newVarietyList = [newVariete, ...varietyList];
  store.setKey("varietyList", newVarietyList);
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setVarietyName = action(
  varietyStore,
  "newVariety",
  (store, varietyName: string) => {
    const { currentVariety } = store.get();
    const newCurentVariety = { ...currentVariety, varietyName: varietyName };
    store.setKey("currentVariety", newCurentVariety);
  }
);

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setIdCurrentVariety = action(
  varietyStore,
  "setIdCurrentVariety",
  (store, id: number) => {
    store.setKey("currentId", id);
    const { varietyList } = store.get();
    const currentVariety = varietyList.filter(
      (variety) => variety.idVariety === id
    );
    store.setKey("currentVariety", currentVariety[0]);
    console.log(varietyList);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setSeedType = action(
  varietyStore,
  "setSeedType",
  (store, isSet: boolean, id: number) => {
    const { currentVariety } = store.get();
    const modId = isSet ? id : -id;
    const newSSeedType = currentVariety.seedType + modId;

    const newCurrentVariety = { ...currentVariety, seedType: newSSeedType };
    store.setKey("currentVariety", newCurrentVariety);
    console.log(newCurrentVariety);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

export const setVarietyList = action(
  varietyStore,
  "setVarietyList",
  (store, value: Tvariety[]) => {
    store.setKey("varietyList", value);
  }
);
// --------------------------------------------------------
export const setName = action(
  varietyStore,
  "setName",
  (store, value: string) => {
    store.setKey("name", value);
  }
);
// --------------------------------------------------------
export const setIsBusy = action(
  varietyStore,
  "setIsBusy",
  (store, value: boolean) => {
    store.setKey("isBusy", value);
  }
);
// --------------------------------------------------------
export const setInput = action(
  varietyStore,
  "setInput",
  (store, fieldName: string, value: string) => {
    const { currentVariety } = store.get();
    const newInput = { ...currentVariety, [fieldName]: value };
    const checkField = "isCorrect" + firstCap(fieldName);

    store.setKey("currentVariety", newInput);
    setIsInputCorrect(checkField, value);
  }
);
// --------------------------------------------------------
export const setIsInputCorrect = action(
  varietyStore,
  "setIsInputCorrect",
  (store, field: string, value: string) => {
    const { inputCorrect } = store.get();
    if (value !== "") {
      const newInputCorrect = { ...inputCorrect, [field]: true };

      store.setKey("inputCorrect", newInputCorrect);
    }
  }
);
// --------------------------------------------------------
export const setInputNumber = action(
  varietyStore,
  "setInputNumber",
  (store, fieldName: TfieldNumber, value: string) => {
    const { currentVariety } = store.get();
    const newInput = { ...currentVariety, [fieldName]: parseInt(value) };
    const checkField = "isCorrect" + firstCap(TfieldNumber[fieldName]);

    store.setKey("currentVariety", newInput);
    setIsInputCorrect(checkField, value);
  }
);
