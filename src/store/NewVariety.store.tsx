/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { firstCap } from "../lib/utils";
import { TLang } from "../types/App.type";
import { tempMin } from "./NewSeed.store";
import { Tvariety, varietyInit } from "./Variety.store";

type TfieldString =
  | "Espece"
  | "variete"
  | "cultivar:"
  | "name"
  | "remarques"
  | "idFirebase";

type TfieldNumber =
  | "idVariety"
  | "categorie"
  | "rusticite"
  | "tempGermMin"
  | "tempGermMax"
  | "dureeGermMin"
  | "dureeGermMax"
  | "zeroVeg"
  | "tempCultMin"
  | "tempCultMax"
  | "dureeCultMin"
  | "dureeCultMax"
  | "rendementMin"
  | "rendementMax"
  | "calorie"
  | "proteide"
  | "lipide"
  | "glucide"
  | "poidsMilleGraine"
  | "profondeurSemis"
  | "distanceEntreGraine"
  | "distanceEntreRang"
  | "occupationHauteur"
  | "occupationSol";

export type TnewVarietyInputCorrect = {
  isCorrectIdFirebase: boolean;
  isCorrectIdVariety: boolean;
  isCorrectCategorie: boolean;
  isCorrectRusticite: boolean;
  isCorrectTempGermMin: boolean;
  isCorrectTempGermMax: boolean;
  isCorrectDureeGermMin: boolean;
  isCorrectDureeGermMax: boolean;
  isCorrectZeroVeg: boolean;
  isCorrectTempCultMin: boolean;
  isCorrectTempCultMax: boolean;
  isCorrectDureeCultMin: boolean;
  isCorrectDureeCultMax: boolean;
  isCorrectRendementMin: boolean;
  isCorrectRendementMax: boolean;
  isCorrectCalorie: boolean;
  isCorrectProteide: boolean;
  isCorrectLipide: boolean;
  isCorrectGlucide: boolean;
  isCorrectPoidsMilleGraine: boolean;
  isCorrectProfondeurSemis: boolean;
  isCorrectDistanceEntreGraine: boolean;
  isCorrectDistanceEntreRang: boolean;
  isCorrectOccupationHauteur: boolean;
  isCorrectOccupationSol: boolean;
  isCorrectEspece: boolean;
  isCorrectVariete: boolean;
  isCorrectCultivar: boolean;
  isCorrectName: boolean;
  isCorrectRemarques: boolean;
};

const inputInit: TnewVarietyInputCorrect = {
  isCorrectIdFirebase: false,
  isCorrectIdVariety: false,
  isCorrectCategorie: false,
  isCorrectRusticite: false,
  isCorrectTempGermMin: false,
  isCorrectTempGermMax: false,
  isCorrectDureeGermMin: false,
  isCorrectDureeGermMax: false,
  isCorrectZeroVeg: false,
  isCorrectTempCultMin: false,
  isCorrectTempCultMax: false,
  isCorrectDureeCultMin: false,
  isCorrectDureeCultMax: false,
  isCorrectRendementMin: false,
  isCorrectRendementMax: false,
  isCorrectCalorie: false,
  isCorrectProteide: false,
  isCorrectLipide: false,
  isCorrectGlucide: false,
  isCorrectPoidsMilleGraine: false,
  isCorrectProfondeurSemis: false,
  isCorrectDistanceEntreGraine: false,
  isCorrectDistanceEntreRang: false,
  isCorrectOccupationHauteur: false,
  isCorrectOccupationSol: false,
  isCorrectEspece: false,
  isCorrectVariete: false,
  isCorrectCultivar: false,
  isCorrectName: false,
  isCorrectRemarques: false,
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
export const saveVariety = action(newVarietyStore, "saveVariety", (store) => {
  console.log("saveVariety");
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setInputString = action(
  newVarietyStore,
  "setInputName",
  (store, stringFiedl: TfieldString, value: string) => {
    const { variety } = store.get();

    const newInput = { ...variety, [stringFiedl]: value };
    const checkField = "isCorrect" + firstCap(stringFiedl);

    store.setKey("variety", newInput);
    setIsInputStringCorrect(checkField, value);
  }
);

export const setInputNumber = action(
  newVarietyStore,
  "setInputNumber",
  (store, stringFiedl: TfieldNumber, value: number) => {
    const { variety } = store.get();

    const newInput = { ...variety, [stringFiedl]: value };
    const checkField = "isCorrect" + firstCap(stringFiedl);
    store.setKey("variety", newInput);
    setIsInputNumberCorrect(checkField, value);
  }
);

export const setIsInputStringCorrect = action(
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

export const setIsInputNumberCorrect = action(
  newVarietyStore,
  "setIsInputNumberCorrect",
  (store, field: string, value: number) => {
    const { inputCorrect } = store.get();
    if (value !== tempMin) {
      const newInputCorrect = { ...inputCorrect, [field]: true };
      store.setKey("inputCorrect", newInputCorrect);
    }
  }
);
