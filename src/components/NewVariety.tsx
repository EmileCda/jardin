
/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { newSeedStore, Tseed } from "../store/NewSeed.store";
import { newVarietyStore, setInputNumber, setInputString } from "../store/NewVariety.store";
import { SeedStore } from "../store/Seed.store";
import { varietyStore } from "../store/Variety.store";
import { NewVarietyContainer } from "../style/NewVariety.style";

export default function NewVariety() {
  const myTextScreen = textScreen("NewVariety");
  const { variety } = useStore(newVarietyStore);
  return (
    <>
    <NewVarietyContainer>
       <Link to="/Seeds">
       <i className="fa-solid fa-chevron-left"></i>
      </Link>
      <h1>{myTextScreen.screenName}</h1>
      <input
        type="text"
        onChange={(e) => setInputString("name", e.currentTarget.value)}
        value={variety.name}
        placeholder={myTextScreen.nameLabel}
      />
      <p>{myTextScreen.germTemp}</p>
      <input
        type="text"
        onChange={(e) => setInputNumber("tempGermMin",parseInt(e.currentTarget.value))}
        value={variety.tempGermMin}
        placeholder={myTextScreen.tempGermMin}
      />

<input
        type="text"
        onChange={(e) => setInputNumber("tempGermMax",  parseInt(e.currentTarget.value))}
        value={variety.tempGermMax}
        placeholder={myTextScreen.tempGermMax}
      />


      <Link to="/Variety">
        <button>{myTextScreen.saveVariety}</button>
      </Link>
      </NewVarietyContainer>
    </>
  );
}
