/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { textScreen } from "../lib/utils";
import { newSeedStore, Tseed } from "../store/newSeed.store";
import { SeedStore } from "../store/Seed.store";
import { saveVariety, setName, varietyStore } from "../store/variety.store";

export default function Variety() {
  const myTextScreen = textScreen("Variety");
  const { idCurrentSeed } = useStore(SeedStore);
  const { seedList } = useStore(newSeedStore);
  const { name } = useStore(varietyStore);
  const mySeed : Tseed[]= seedList.filter((item: Tseed) =>(item.idFirebase === idCurrentSeed));

  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <p>{idCurrentSeed}</p>
      <p>{ mySeed[0].name}</p>
      <p>{ mySeed[0].gender}</p>
      <p>{ mySeed[0].species}</p>

<input type="text" value={name} onChange={(event) =>setName(event.currentTarget.value)}/>

      <button onClick={saveVariety}>valider</button>

      <p>genre</p>
      <p>espece</p>
    </>
  );
}