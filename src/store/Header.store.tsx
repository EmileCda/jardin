/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";
import { TLang } from "../types/App.type";

export type HeaderStore = {
  lang: TLang;
  isVisibleTossMenu: boolean;
};

export const headerStore = map<HeaderStore>({
  lang: "fr",
  isVisibleTossMenu: false,
});

export const setLang = action(
  headerStore,
  "setIndex",
  (store, newLang: TLang) => {
    store.setKey("lang", newLang);
  }
);

export const toggleIsVisibleTossMenu = action(
  headerStore,
  "toggleIsVisibleTossMenu",
  (store) => {
    const { isVisibleTossMenu } = store.get();
    store.setKey("isVisibleTossMenu", !isVisibleTossMenu);
  }
);
