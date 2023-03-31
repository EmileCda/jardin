/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { TLang } from "../types/App.type";
import { updateVarietyList } from "./NewSeed.store";
import { setVariety } from "./NewVariety.store";

export const MIN_TEMP: number = -300;
export const ID_INIT: number = -1;

export type Tvariety = {
  idFirebase: string; // Id dans la table
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
  specie: string; // latin name
  variety: string; // latin name
  cultivar: string; // local name
  name: string; //  common name
  remarks: string; // free text
};

export const varietyInit: Tvariety = {
  idFirebase: "", // Id dans la table
  idVariety: ID_INIT,
  seedType: 0,
  category: MIN_TEMP, //
  rusticity: MIN_TEMP, // temps en °c
  minGermTemp: MIN_TEMP, // temps en °c
  maxGermTemp: MIN_TEMP, // temps en °c
  minGermTime: MIN_TEMP, // nb jour
  maxGermTime: MIN_TEMP, // nb jour
  zeroVeg: MIN_TEMP, // temp en °c
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
  specie: "", // latin name
  variety: "", // latin name
  cultivar: "", // local name
  name: "", //  common name
  remarks: "", // free text
};

export type VarietyStore = {
  name: string;
  isBusy: boolean;
  currentId: number;
  currentVariety: Tvariety;
  idSeed: string;
  varietyList: Tvariety[];
};

export const varietyStore = map<VarietyStore>({
  name: "",
  idSeed: "",
  isBusy: false,
  currentId: ID_INIT,
  currentVariety: { ...varietyInit },
  varietyList: [],
});

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const addNewVariety = action(
  varietyStore,
  "addNewVariety",
  (store) => {
    console.log("addNewVariety");
    store.setKey("currentVariety", varietyInit);
    store.setKey("currentId", ID_INIT);
    // save();
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const addVariety = action(
  varietyStore,
  "addVariety",
  (store, newVariety: Tvariety) => {
    const { varietyList } = store.get();
    if (newVariety.idVariety ===ID_INIT){
      newVariety.idVariety = varietyList.length;
      const newVarietyList = [newVariety, ...varietyList];
      store.setKey("varietyList", newVarietyList);
    } else{

      const newVarietyList  = varietyList.map((item : Tvariety, index : number)=>{
        if( item.idVariety ===newVariety.idVariety)
          return newVariety;
        else
          return item;
      })
      store.setKey("varietyList", newVarietyList);

    }
    store.setKey("currentVariety", newVariety);
    // save();
  }
);
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
    setVariety(currentVariety);
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
