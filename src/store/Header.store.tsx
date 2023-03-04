/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

 import { action, map } from "nanostores";
import { Lang } from "../types/App.type";
 
 export type HeaderStore = {
   lang: Lang;
   isVisibleTossMenu : boolean,
 };
 
 export const headerStore = map<HeaderStore>({
   lang: "fr",
   isVisibleTossMenu : false,
 });
 
 export const setLang = action(
   headerStore,
   "setIndex",
   (store, newLang: Lang) => {
     store.setKey("lang", newLang);
   }
 )
   

 
   export const toggleIsVisibleTossMenu= action(
     headerStore,
     "toggleIsVisibleTossMenu",
     (store) => {
       const {isVisibleTossMenu} =store.get();
       store.setKey("isVisibleTossMenu",   !isVisibleTossMenu );
         
     },
   );
 