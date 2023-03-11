import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { headerStore } from "../store/Header.store";

/**
 * this function do ...
 */
export default function Seeds() {

const myTextScreen = textScreen("Seeds");
  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <Link to="/NewSeed">
      <button>{myTextScreen.newSeed}</button></Link>
    </>
  );
}

