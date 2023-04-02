import { useStore } from "@nanostores/react";
import { isHtmlElement } from "react-router-dom/dist/dom";
import { headerStore } from "../store/Header.store";
import { ThreeLang, TscreenText } from "../types/App.type";
import jsonData from "./../data/localData.json";
export const localData: any = jsonData;

export const px2vw = (size: number, width: number = 1440) =>
  `${(size / width) * 100}vw`;

/** this function take data from json and return it with language filter
 * json data are like : 
 * {
      "key": "newSeed",
      "fr": "Nouvelle graine",
      "en": "New seed",
      "es": "nueva semilla"
      
    },
 * 
 */
export function textScreen(screeNName: string) {
  const { lang } = useStore(headerStore);
  const textName = "screen" + screeNName;
  const dataScreen = localData[textName];

  return dataScreen.reduce(
    (obj: any, item: any) => Object.assign(obj, { [item.key]: item[lang] }),
    {}
  );
}

export function firstCap(myString: string) {
  return myString.charAt(0).toUpperCase() + myString.slice(1);
}



export function bitValue(value :number, length : number){
  
  const bitString = (value >>> 0).toString(2);
  let arrayInt : number[] = Array(length).fill(0);

  let index : number= 0;
  for (const letter  of bitString){

    arrayInt[bitString.length-index-1]= parseInt(letter) 
    index++ ;
  }

  return arrayInt; 

}