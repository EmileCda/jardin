/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { TLang } from "../types/App.type";

export type Tvariety = {
  idFirebase: string; // Id dans la table
  idVariety: number;
  categorie: number; // voir categorie
  rusticite: number; // temps en °c
  tempGermMin: number; // temps en °c
  tempGermMax: number; // temps en °c
  dureeGermMin: number; // nb jour
  dureeGermMax: number; // nb jour
  zeroVeg: number; // temps en °c
  tempCultMin: number; // temps en °c
  tempCultMax: number; // temps en °c
  dureeCultMin: number; // nb jour
  dureeCultMax: number; // nb jour
  rendementMin: number; // kg/plante
  rendementMax: number; // kg/plante
  calorie: number; // nb calorie/ gramme
  proteide: number; // en pourcentage
  lipide: number; // en pourcentage
  glucide: number; // en pourcentage
  poidsMilleGraine: number; // en gramme
  profondeurSemis: number; // en mm
  distanceEntreGraine: number; // en mm
  occupationHauteur: number; // en mm
  distanceEntreRang: number; // en mm
  occupationSol: number; // en m2
  Espece: string; // nom latin
  variete: string; // nom latin
  cultivar: string; // nom commun
  name: string; // nom commun
  remarques: string; // ; //}export type VarietyStore = {  name: string;
};

const texte = "mon texte";
console.log(typeof texte);


export const  varietyInit : Tvariety= {
  idFirebase: "" , // Id dans la table
  idVariety: -300,
  categorie: -300, // voir categorie
  rusticite: -300, // temps en °c
  tempGermMin: -300, // temps en °c
  tempGermMax: -300, // temps en °c
  dureeGermMin: -300, // nb jour
  dureeGermMax: -300, // nb jour
  zeroVeg: -300, // temps en °c
  tempCultMin: -300, // temps en °c
  tempCultMax: -300, // temps en °c
  dureeCultMin: -300, // nb jour
  dureeCultMax: -300, // nb jour
  rendementMin: -300, // kg/plante
  rendementMax: -300, // kg/plante
  calorie: -300, // nb calorie/ gramme
  proteide: -300, // en pourcentage
  lipide: -300, // en pourcentage
  glucide: -300, // en pourcentage
  poidsMilleGraine: -300, // en gramme
  profondeurSemis: -300, // en mm
  distanceEntreGraine: -300, // en mm
  distanceEntreRang: -300, // en mm
  occupationHauteur: -300, // en mm
  occupationSol: -300, // en m2
  Espece: "", // nom latin
  variete: "", // nom latin
  cultivar: "", // nom commun
  name: "", // nom commun
  remarques: "", // ; //}exp
}

export type VarietyStore = {
  name: string;
  isBusy: boolean;
  currentId: number;
  currentVariety : Tvariety;
  varietyList: Tvariety[];
};

export const varietyStore = map<VarietyStore>({
  name: "",
  isBusy: false,
  currentId: -1,
  currentVariety :{...varietyInit},
  varietyList: [],
});

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const saveVariety = action(varietyStore, "setName", (store) => {
  console.log("saveVariety");
});
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const setIdCurrentVariety = action(
  varietyStore,
  "setIdCurrentVariety",
  (store, id : number) => {
    store.setKey("currentId", id);
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
