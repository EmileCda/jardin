import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import {
  SeedStore,
  Tseed,
  deleteSeed,
  loadSeedList,
  newSeed,
  setIdCurrentSeed,
} from "../store/Seed.store";
import { MyButton, MyLink, Title } from "../style/Common.style";
import { Delete, Seed, SeedId, SeedMainContainer } from "../style/Seeds.style";

export type DisplaySeedProps = {
  item: Tseed;
  key: number;
};

// -----------------------------------------------------------------------
export function DisplaySeed({ item, key }: DisplaySeedProps) {
  return (
    <>
        <Seed key={key} onClick={() => setIdCurrentSeed(item.idFirebase)}>
        <MyLink to="/Variety">
          <h1>{item.seedName}
          </h1>
          <SeedId>{item.idFirebase}</SeedId>
          </MyLink>
          <Delete onClick={(e)=>deleteSeed(item)}>
              <i className="fa-solid fa-trash-can"></i>
          </Delete>
        </Seed>
    </>
  );
}
// -----------------------------------------------------------------------
/**
 * this function do ...
 */
export default function Seeds() {
  const myTextScreen = textScreen("Seeds");
  const { seedList, isLoaded } = useStore(SeedStore);

  if (!isLoaded) {
    loadSeedList();
  }

  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <SeedMainContainer>
        {seedList.map((item: Tseed, index: number) => (
          <DisplaySeed item={item} key={index} />
        ))}
      </SeedMainContainer>

      <MyLink to="/NewVariety">
        <MyButton onClick={newSeed}>{myTextScreen.newSeed}</MyButton>
      </MyLink>
    </>
  );
}
// -----------------------------------------------------------------------
