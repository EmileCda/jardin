import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { headerStore } from "../store/Header.store";
import { loadSeedList, newSeedStore, Tseed } from "../store/newSeed.store";

/**
 * this function do ...
 */
export default function Seeds() {

const myTextScreen = textScreen("Seeds");
const { input, seedList, isLoaded } = useStore(newSeedStore);

if (!isLoaded){
  loadSeedList()
}

  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <ul>
        {seedList.map((item: Tseed, index: number) => (
          <li key={index}>
            {item.name} {item.idFirebase}
          </li>
        ))}
        
      </ul>


      <Link to="/NewSeed">
      <button>{myTextScreen.newSeed}</button></Link>
    </>
  );
}

