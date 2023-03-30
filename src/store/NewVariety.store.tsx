/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { firstCap } from "../lib/utils";
import { TLang } from "../types/App.type";
import { tempMin } from "./NewSeed.store";
import { addVariety, Tvariety, varietyInit } from "./Variety.store";

export enum TfieldString {
  specie = "specie",
  variety = "variety",
  cultivar = "cultivar",
  name = "name",
  remarks = "remarks",
  idFirebase = "idFirebase",
}


export enum TfieldNumber {
  idVariety ="idVariety",
  category ="category",
  rusticity ="rusticity",
  minGermTemp ="minGermTemp",
  maxGermTemp ="maxGermTemp",
  minGermTime ="minGermTime",
  maxGermTime ="maxGermTime",
  zeroVeg ="zeroVeg",
  minGrowTemp ="minGrowTemp",
  maxGrowTemp ="maxGrowTemp",
  minGrowTime ="minGrowTime",
  maxGrowTime ="maxGrowTime",
  minYield ="minYield",
  maxYield ="maxYield",
  calorie ="calorie",
  protein ="protein",
  lipid ="lipid",
  carbohydrate ="carbohydrate",
  tGW ="tGW",
  sowingDepth ="sowingDepth",
  seedSpacing ="seedSpacing",
  rowSpacing ="rowSpacing",
  height ="height",
  floorSpace ="floorSpace"
} ;

  enum Color{
    Red, Green
}




export type TnewVarietyInputCorrect = {
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
  isCorrectName: boolean;
  isCorrectRemarks: boolean;
  isCorrectIdFirebase: boolean;
};

const inputInit: TnewVarietyInputCorrect = {
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
  isCorrectName: false,
  isCorrectRemarks: false,
  isCorrectIdFirebase: false,
};

export type NewVarietyStore = {
  isBusy: boolean;
  inputCorrect: TnewVarietyInputCorrect;
  variety: Tvariety;
};
export const newVarietyStore = map<NewVarietyStore>({
  isBusy: false,
  inputCorrect: { ...inputInit },
  variety: { ...varietyInit },
});

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const saveNewVarity = action(newVarietyStore, "saveVariety", (store) => {

  const {variety} = store.get();
  addVariety (variety);
  console.log("saveNewVarity");
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setInput = action(
  newVarietyStore,
  "setInput",
  (store, fieldName: string, value: string) => {
    const { variety } = store.get();
    const newInput = { ...variety, [fieldName]: value };
    const checkField = "isCorrect" + firstCap(fieldName);

    store.setKey("variety", newInput);
    setIsInputCorrect(checkField, value);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setSeedType = action(
  newVarietyStore,
  "setSeedType",
  (store, isSet:boolean, id: number) => {
    
    const {variety}=store.get();
    const modId = isSet ? id : -id ;
    console.log(modId);
    console.log(variety.seedType);
    const newSSeedType = variety.seedType + modId ;
    const newCurrentVariety = {...variety,seedType:newSSeedType};
    console.log(newSSeedType);
    store.setKey("variety", newCurrentVariety);
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setInputNumber = action(
  newVarietyStore,
  "setInput",
  (store, fieldName: TfieldNumber, value: string) => {
    const { variety } = store.get();
    const newInput = { ...variety, [fieldName]: parseInt(value) };
    const checkField = "isCorrect" + firstCap(TfieldNumber[fieldName]);

    store.setKey("variety", newInput);
    setIsInputCorrect(checkField, value);
  }
);

export const setIsInputCorrect = action(
  newVarietyStore,
  "setIsInputStringCorrect",
  (store, field: string, value: string) => {
    const { inputCorrect } = store.get();
    if (value !== "") {
      const newInputCorrect = { ...inputCorrect, [field]: true };

      store.setKey("inputCorrect", newInputCorrect);
    }
  }
);

