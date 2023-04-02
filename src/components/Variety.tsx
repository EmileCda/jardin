/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { SeedStore } from "../store/Seed.store";
import {
  deleteVariety,
  loadVarietyList,
  newVariety,
  setIdCurrentVariety,
  Tvariety,
  varietyStore,
} from "../store/Variety.store";
import {  MyButton, MyLink, Title } from "../style/Common.style";
import {
  VarietyBlock,
  VarietyItem,
  VarietyMainContainer,
  VarietyScreen,
} from "../style/Variety.style";
import { HeaderScreen } from "./Common";
import { Delete } from "../style/Seeds.style";

export type DisplayVarietyProps = {
  item: Tvariety;
  key: number;
};

// -----------------------------------------------------------------------
export function DisplayVariety({ item, key }: DisplayVarietyProps) {
  return (
    <>
      <VarietyBlock>
        <MyLink to="/NewVariety">
          <VarietyItem
            key={key}
            onClick={() => setIdCurrentVariety(item.idVariety)}
          >
            <Title>{item.varietyName}</Title>
          </VarietyItem>
        </MyLink>
        <Delete onClick={(e) =>deleteVariety(item)}>
        <i className="fa-solid fa-trash-can"></i>
        </Delete>
      </VarietyBlock>
    </>
  );
}

export default function Variety() {
  const myTextScreen = textScreen("Variety");
  const { currentSeed } = useStore(SeedStore);
  const { isLoaded } = useStore(varietyStore);

  if (!isLoaded) {
    loadVarietyList(currentSeed);
  }
  // -----------------------------------------------------------------------
  const { varietyList } = useStore(varietyStore);
  return (
    <>
      <VarietyScreen>
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
        <MyLink to="/NewVariety">
          <MyButton onClick={newVariety}>{myTextScreen.newVariety} </MyButton>
        </MyLink>
      </VarietyScreen>
    </>
  );
}
