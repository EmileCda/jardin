/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { TLang } from "../types/App.type";

export type VarietyStore = {
name : string ,
isBusy : boolean,
};

export const varietyStore = map<VarietyStore>({
  name : "" ,
  isBusy : false,
  });

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export const saveVariety = action(
  varietyStore,
  "setName",
  (store) => {
    console.log("saveVariety");
  }
);
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
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


