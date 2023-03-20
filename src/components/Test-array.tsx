import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive/types/Component";
import { textScreen } from "../lib/utils";

import jsonData from "./../data/localData.json";
export const localData: any = jsonData;


export default function Test() {

const myArray = ["1A","2D","3E","4R","5T","6T",];

console.log (myArray)


const myArrayDebut = myArray.slice(0,3)
const myArrayFin = myArray.slice(3,myArray.length)
// const myArrayFin = myArray.slice(3,17)
const myArray1  = [...myArrayDebut, 'pas init', ...myArrayFin]

console.log (myArray)
console.log (myArray.length)
console.log (myArrayDebut)
console.log (myArrayFin)
console.log (myArray1)
console.log (myArray)

  return (
    <>
      {/* <h1>{textReturn.screenName}</h1> */}
    </>
  );
}
