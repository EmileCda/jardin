import { useStore } from "@nanostores/react";
import { textScreen } from "../lib/utils";
import {
  addCurrentSeed,
  addSeed,
  loadSeedList,
  newSeedStore,
  saveCurrentSeed,
  setInputNumber,
  setInputString,
  setIsLoaded,
  Tseed,
} from "../store/NewSeed.store";

/**
 * this function create a new generic
 */
export default function NewSeed() {
  const myTextScreen = textScreen("NewSeeds");
  const { input, seedList, isLoaded } = useStore(newSeedStore);

if (!isLoaded){
  loadSeedList();
  setIsLoaded(true);
}

  return (
    <>
      <h1>{myTextScreen.screenName}</h1>
      <input
        type="text"
        onChange={(e) => setInputString("name", e.currentTarget.value)}
        value={input.name}
        placeholder={myTextScreen.name}
      />
      <input
        type="text"
        onChange={(e) => setInputString("gender", e.currentTarget.value)}
        value={input.gender}
        placeholder={myTextScreen.gender}
      />

      <input
        type="text"
        onChange={(e) => setInputString("species", e.currentTarget.value)}
        value={input.species}
        placeholder={myTextScreen.species}
      />
      <h1>{myTextScreen.GerminationTemperature}</h1>
      <input
        type="number"
        onChange={(e) =>
          setInputNumber("germMin", parseInt(e.currentTarget.value))
        }
        value={input.germMin}
        placeholder={myTextScreen.MinTemp}
      />

      <input
        type="number"
        onChange={(e) =>
          setInputNumber("germMax", parseInt(e.currentTarget.value))
        }
        value={input.germMax}
        placeholder={myTextScreen.MaxTemp}
      />
      <h1>{myTextScreen.CultivationTemperature}</h1>
      <input
        type="number"
        onChange={(e) =>
          setInputNumber("cultMin", parseInt(e.currentTarget.value))
        }
        value={input.cultMin}
        placeholder={myTextScreen.MinTemp}
      />
      <input
        type="number"
        onChange={(e) =>
          setInputNumber("cultMax", parseInt(e.currentTarget.value))
        }
        value={input.cultMax}
        placeholder={myTextScreen.MaxTemp}
      />
      <button onClick={addSeed}>{myTextScreen.save}</button>

      <button onClick={loadSeedList}>Test</button>
{console.log(seedList)}
      <ul>
        {seedList.map((item: Tseed, index: number) => (
          <li key={index}>
            {item.name} {item.idFirebase}
          </li>
        ))}
        ,
      </ul>
    </>
  );
}
