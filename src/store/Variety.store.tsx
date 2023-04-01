/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { TLang } from "../types/App.type";
import { updateVarietyList } from "./NewSeed.store";
import { firstCap } from "../lib/utils";
import { useStore } from "@nanostores/react";
import { SeedStore,saveSeed } from "./Seed.store";

export const MIN_TEMP: number = -300;
export const ID_INIT: number = -1;
export const ID_SEED_INIT: number = -2;

export enum TfieldString {
  species = "species",
  gender = "gender",
  cultivar = "cultivar",
  seedName = "seedName",
  varietyName = "namvarietyNamee",
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
  
  idVariety: number;
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
  gender: string; // latin name
  species: string; // latin name
  variety: string; // latin name
  cultivar: string; // local name
  seedName: "", //  seed common name
  varietyName: "", //  variety common name
  remarks: string; // free text
};

export const varietyInit: Tvariety = {
  
  idVariety: ID_INIT,
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
  gender: "", // latin name
  species: "", // latin name
  variety: "", // common name
  cultivar: "", // local name
  seedName: "", //  seed common name
  varietyName: "", //  variety common name
  remarks: "", // free text
};

export type VarietyStore = {
  name: string;
  isBusy: boolean;
  currentId: number;
  inputCorrect: TvarietyInputCorrect;
  currentVariety: Tvariety;
  idSeed: string;
  varietyList: Tvariety[];
};

export const varietyStore = map<VarietyStore>({
  name: "",
  idSeed: "",
  isBusy: false,
  currentId: ID_INIT,
  inputCorrect: { ...inputInit },
  currentVariety: { ...varietyInit },
  varietyList: [],
});



// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const saveVariety = action(varietyStore, "addVariety", (store) => {
  const { currentSeed } = useStore(SeedStore);

  console.log("saveVariety");
  const { varietyList, currentVariety } = store.get();
  if (currentVariety.idVariety === ID_INIT) {
    currentVariety.idVariety = varietyList.length;
    const newVarietyList = [currentVariety, ...varietyList];
    store.setKey("varietyList", newVarietyList);
    store.setKey("currentVariety", currentVariety); // in order to have idVariety included
  } else {
    const newVarietyList = varietyList.map((item: Tvariety, index: number) => {
      if (item.idVariety === currentVariety.idVariety) return currentVariety;
      else return item;
    });
    store.setKey("varietyList", newVarietyList);
  }


  if (currentSeed.idFirebase===""){
    saveSeed ();
  }

  // save();
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const newVariety= action(varietyStore, "newVariety", (store) => {

  store.setKey("currentVariety", varietyInit);
  store.setKey("currentId", ID_INIT);

});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const save = action(varietyStore, "save", (store) => {
  const { varietyList, idSeed } = store.get();
  updateVarietyList(idSeed, varietyList);
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setIdCurrentVariety = action(
  varietyStore,
  "setIdCurrentVariety",
  (store, id: number) => {
    store.setKey("currentId", id);
    const { varietyList } = store.get();
    const currentVariety = varietyList[id];
    store.setKey("currentVariety", currentVariety);
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
