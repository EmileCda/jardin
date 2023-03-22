
/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { textScreen } from "../lib/utils";
import { SeedStore } from "../store/Seed.store";

export default function Variety() {
  const myTextScreen = textScreen("Variety");
  const { idCurrentSeed } = useStore(SeedStore);
  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <p>{idCurrentSeed}</p>
    </>
  );
}
