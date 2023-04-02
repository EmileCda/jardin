/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { SeedStore } from "../store/Seed.store";
import {
  loadVarietyList,
  newVariety,
  setIdCurrentVariety,
  Tvariety,
  varietyStore,
} from "../store/Variety.store";
import { MyLink, Title } from "../style/Common.style";
import { VarietyContainer, VarietyItem, VarietyMainContainer } from "../style/Variety.style";
import { HeaderScreen } from "./Common";

export type DisplayVarietyProps = {
  item: Tvariety;
  key: number;
};

// -----------------------------------------------------------------------
export function DisplayVariety({ item, key }: DisplayVarietyProps) {
  return (
    <>
      <MyLink to="/NewVariety">
        <VarietyItem key={key} onClick={() => setIdCurrentVariety(item.idVariety)}>
          
          <Title>{item.varietyName}</Title>
        </VarietyItem>
      </MyLink>
    </>
  );
}

export default function Variety() {
  const myTextScreen = textScreen("Variety");
  const { currentSeed } = useStore(SeedStore);
  const {  isLoaded } = useStore(varietyStore);
  
  if (!isLoaded){
    loadVarietyList(currentSeed);

  }
    // -----------------------------------------------------------------------
  const {  varietyList } = useStore(varietyStore);
  return (
    <>
    <VarietyContainer>
    <HeaderScreen
          link="/Seeds"
          icon="fa-solid fa-chevron-left"
          title={myTextScreen.screenName}
          info={`${currentSeed.seedName} : ${currentSeed.gender}-${currentSeed.species}`}
        />
      
      <VarietyMainContainer>
        {varietyList.map((item: Tvariety, index: number) => (
          <DisplayVariety item={item} key={index} />
        ))}
      </VarietyMainContainer>

      {/* <input type="text" value={name} onChange={(event) =>setName(event.currentTarget.value)}/> */}
      <Link to="/NewVariety">
        <button onClick={newVariety}>{myTextScreen.newVariety} </button>
      </Link>
      </VarietyContainer>
    </>
  );
}
