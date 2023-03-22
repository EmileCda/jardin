
/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { newSeedStore, Tseed } from "../store/newSeed.store";
import { SeedStore } from "../store/Seed.store";

export default function NewVariety() {
  const myTextScreen = textScreen("NewVariety");
  const { idCurrentSeed } = useStore(SeedStore);
  const { seedList } = useStore(newSeedStore);
  const mySeed : Tseed[]= seedList.filter((item: Tseed) =>(item.idFirebase === idCurrentSeed));
console.log (mySeed[0].name);
  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <p>{ mySeed[0].name}</p>
      <p>{ mySeed[0].gender}</p>
      <p>{ mySeed[0].species}</p>

      <Link to="/Variety">
        <button>{myTextScreen.addVariety}</button>
      </Link>
    </>
  );
}
