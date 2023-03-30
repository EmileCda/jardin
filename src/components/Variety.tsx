/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { newSeedStore, Tseed } from "../store/NewSeed.store";
import { SeedStore } from "../store/Seed.store";
import {
  setIdCurrentVariety,
  Tvariety,
  varietyStore,
} from "../store/Variety.store";
import { MyLink, Title } from "../style/Common.style";
import { SeedId } from "../style/Seeds.style";
import { VarietyItem, VarietyMainContainer } from "../style/Variety.style";

export type DisplayVarietyProps = {
  item: Tvariety;
  index: number;
};

// -----------------------------------------------------------------------
export function DisplayVariety({ item, index }: DisplayVarietyProps) {
  return (
    <>
      <MyLink to="/ModVariety">
        <VarietyItem key={index} onClick={() => setIdCurrentVariety(index)}>
          <Title>{item.name}</Title>
          <SeedId>{item.idFirebase}</SeedId>
        </VarietyItem>
      </MyLink>
    </>
  );
}

export default function Variety() {
  const myTextScreen = textScreen("Variety");
  const { idCurrentSeed } = useStore(SeedStore);
  const { seedList } = useStore(newSeedStore);
  const { name, varietyList } = useStore(varietyStore);
  const mySeed: Tseed[] = seedList.filter(
    (item: Tseed) => item.idFirebase === idCurrentSeed
  );

  // -----------------------------------------------------------------------

  return (
    <>
      <Link to="/Seeds">
        <i className="fa-solid fa-chevron-left"></i>
      </Link>
      <h1>{myTextScreen.screenName}</h1>

      <VarietyMainContainer>
        {varietyList.map((item: Tvariety, index: number) => (
          <DisplayVariety item={item} index={index} />
        ))}
      </VarietyMainContainer>

      {/* <input type="text" value={name} onChange={(event) =>setName(event.currentTarget.value)}/> */}
      <Link to="/NewVariety">
        <button >{myTextScreen.addVariety} </button>
      </Link>
    </>
  );
}
