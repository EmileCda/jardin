import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { headerStore } from "../store/Header.store";
import { loadSeedList, newSeedStore, Tseed } from "../store/NewSeed.store";
import { setIdCurrentSeed } from "../store/Seed.store";
import { MyLink, Title } from "../style/Common.style";
import {  Seed, SeedId, SeedMainContainer } from "../style/Seeds.style";

export type DisplaySeedProps = {
  item: Tseed;
  index: number;
};

// -----------------------------------------------------------------------
export function DisplaySeed( {item, index} : DisplaySeedProps) {
  return (
    <>
    <MyLink to="/Variety">
      <Seed key={index} onClick={() => setIdCurrentSeed(item.idFirebase)}>
        <Title>{item.name}</Title>
        <SeedId>{item.idFirebase}</SeedId>
      </Seed>
      </MyLink>
    </>
  );
}
// -----------------------------------------------------------------------
/**
 * this function do ...
 */
export default function Seeds() {
  const myTextScreen = textScreen("Seeds");
  const { input, seedList, isLoaded } = useStore(newSeedStore);

  if (!isLoaded) {
    loadSeedList();
  }

  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <SeedMainContainer>
        {seedList.map((item: Tseed, index: number) => (
          <DisplaySeed item={item} index={index} />
        ))}
      </SeedMainContainer>

      <Link to="/NewSeed">
        <button>{myTextScreen.newSeed}</button>
      </Link>
    </>
  );
}
// -----------------------------------------------------------------------
