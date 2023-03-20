import { getDownloadURL, getStorage, ref } from "firebase/storage";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive/types/Component";
import { firebaseStorage } from "../lib/Firebase";
import { textScreen } from "../lib/utils";
import { Slide, SlideContainer } from "../style/carousel.style";

import jsonData from "./../data/localData.json";
export const localData: any = jsonData;

const urlCarousel = localData.carousel;

export async function loadUrl(index: number) {

  const urlName = "images/carousel/" + urlCarousel[index];
  console.log(urlName);
  return await getDownloadURL(ref(firebaseStorage, urlName));
}

export default function Test() {
  const displayListInit = Array(urlCarousel.length).fill(false);
  const indexMax = urlCarousel.length - 1;
  const [picUrl, setPicUrl] = useState(urlCarousel);
  const [displayList, setdisplayList] = useState(displayListInit);

  const textReturn = textScreen("Test");

  function avance() {
    const index = displayList.find((value) => true);

    if (index < displayListInit.length) {
      const myArrayDebut = displayListInit.slice(0, index + 1);
      const myArrayFin = displayListInit.slice(
        index + 1,
        displayListInit.length
      );
      const arrayResult = [...myArrayDebut, true, ...myArrayFin];
      setdisplayList(arrayResult);
    } else {
      const myArrayFin = displayListInit.slice(1, displayListInit.length);
      const arrayResult = [true, ...myArrayFin];
      setdisplayList(arrayResult);
    }
  }

  function recule() {
    const index = displayList.find((value) => true);

    if (index > 0) {
      const myArrayDebut = displayListInit.slice(0, index);
      const myArrayFin = displayListInit.slice(
        index + 1,
        displayListInit.length
      );
      const arrayResult = [...myArrayDebut, true, ...myArrayFin];
      setdisplayList(arrayResult);
    } else {
      const myArrayDebut = displayListInit.slice(0, index);
      const arrayResult = [...myArrayDebut, true];
      setdisplayList(arrayResult);
    }
  }

  // setTimeout(avance, 10000);
  const titi = ["FF1", "F1", "S1", "V1", "D1", "Z1"];
  return (
    <>
      <h1>{textReturn.screenName}</h1>
      <ul>
        <li><img src={urlCarousel[0]} alt="" /></li>
      <li>{urlCarousel[0]}</li>
      <li>{urlCarousel[1]}</li>
      <li>{urlCarousel[2]}</li>
      <li>{urlCarousel[3]}</li>
      </ul>
      {/* <img src={picUrl[1]} alt="" />
      <img src={picUrl[2]} alt="" />
      <img src={picUrl[3]} alt="" />
      <img src={picUrl[4]} alt="" />
      <img src={picUrl[5]} alt="" /> */}
    </>
  );
}
