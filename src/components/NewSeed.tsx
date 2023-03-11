import { useStore } from "@nanostores/react";
import { textScreen } from "../lib/utils";
import { newSeedStore, saveNewSeed, setInputCultMax, setInputCultMin, setInputGender, setInputGermMax, setInputGermMin, setInputName, setInputSpecies } from "../store/newSeed.store";





/**
 * this function create a new generic 
 */
export default function NewSeed() {
    const myTextScreen = textScreen("NewSeeds");
    const {inputName,inputGender,inputSpecies,inputGermMin,inputGermMax ,inputCultMin,inputCultMax} = useStore(newSeedStore);


    return (
      <>
        <h1>{myTextScreen.screenName}</h1>
        <input type="text" onChange={(e) => setInputName(e.currentTarget.value)} value={inputName} placeholder={myTextScreen.name}/>
        <input type="text" onChange={(e) => setInputGender(e.currentTarget.value)} value={inputGender} placeholder={myTextScreen.gender}/>
        
        <input type="text" onChange={(e) => setInputSpecies(e.currentTarget.value)} value={inputSpecies} placeholder={myTextScreen.species}/>
        <h1>{myTextScreen.GerminationTemperature}</h1>
        <input type="number" onChange={(e) => setInputGermMin(parseInt(e.currentTarget.value))} value={inputGermMin} placeholder={myTextScreen.MinTemp}/>
        
        <input type="number" onChange={(e) => setInputGermMax(parseInt(e.currentTarget.value))} value={inputGermMax} placeholder={myTextScreen.MaxTemp}/>
        <h1>{myTextScreen.CultivationTemperature}</h1>
        <input type="number" onChange={(e) => setInputCultMin(parseInt(e.currentTarget.value))} value={inputCultMin} placeholder={myTextScreen.MinTemp}/>
        <input type="number" onChange={(e) => setInputCultMax(parseInt(e.currentTarget.value))} value={inputCultMax} placeholder={myTextScreen.MaxTemp}/>
        <button onClick={saveNewSeed}>{myTextScreen.save}</button>
      </>
    );
  }
  
  