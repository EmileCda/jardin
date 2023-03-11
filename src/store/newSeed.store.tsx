import { addDoc, collection } from "firebase/firestore";
import { action, map } from "nanostores";
import { firebaseAuth, firebaseDb } from "../lib/Firebase";

export const tempMin = -300;
export const genericSeedCollection = "genericSeed";
export type TnewSeedStore = {
  inputName: string;
  inputGender: string;
  inputSpecies: string;
  inputGermMin: number;
  inputGermMax: number;
  inputCultMin: number;
  inputCultMax: number;
  seedType: number;
  isCorrectInputName: boolean;
  isCorrectInputGender: boolean;
  isCorrectInputSpecies: boolean;
  isCorrectInputGermMin: boolean;
  isCorrectInputGermMax: boolean;
  isCorrectInputCultMin: boolean;
  isCorrectInputCultMax: boolean;
  isCorrectSeedType: boolean;
  isBusy: boolean;
};

export const newSeedStore = map<TnewSeedStore>({
  inputName: "",
  inputGender: "",
  inputSpecies: "",
  inputGermMin: tempMin,
  inputGermMax: tempMin,
  inputCultMin: tempMin,
  inputCultMax: tempMin,
  seedType: tempMin,
  isCorrectInputName: false,
  isCorrectInputGender: false,
  isCorrectInputSpecies: false,
  isCorrectInputGermMin: false,
  isCorrectInputGermMax: false,
  isCorrectInputCultMin: false,
  isCorrectInputCultMax: false,
  isCorrectSeedType: true,
  isBusy: false,
});

export const setInputName = action(
  newSeedStore,
  "setInputName",
  (store, value: string) => {
    store.setKey("inputName", value);
    setIsCorrectInputName(value)
  }
);
export const setInputGender = action(
  newSeedStore,
  "setInputGender",
  (store, value: string) => {
    store.setKey("inputGender", value);
    setIsCorrectInputGender(value)
  }
);
export const setInputSpecies = action(
  newSeedStore,
  "setInputSpecies",
  (store, value: string) => {
    store.setKey("inputSpecies", value);
    setIsCorrectInputSpecies(value)
  }
);
export const setInputGermMin = action(
  newSeedStore,
  "setInputGermMin",
  (store, value: number) => {
    store.setKey("inputGermMin", value);
    setIsCorrectInputGermMin(value)
  }
);
export const setInputGermMax = action(
  newSeedStore,
  "setInputGermMax",
  (store, value: number) => {
    store.setKey("inputGermMax", value);
    setIsCorrectInputGermMax(value)
  }
);

export const setInputCultMin = action(
  newSeedStore,
  "setInputCultMin",
  (store, value: number) => {
    store.setKey("inputCultMin", value);
    setIsCorrectInputCultMin(value)
  }
);
export const setInputCultMax = action(
  newSeedStore,
  "setInputCultMax",
  (store, value: number) => {
    store.setKey("inputCultMax", value);
    setIsCorrectInputCultMax(value)
  }
);


export const setIsCorrectInputName = action(
  newSeedStore,
  "setIsCorrectInputName",
  (store, value: string) => {
    if (value !== "") {
      store.setKey("isCorrectInputName", true);
      console.log(value)
    }
    console.log(value)
}
);
export const setIsCorrectInputGender = action(
  newSeedStore,
  "setIsCorrectInputGender",
  (store, value: string) => {
    if (value !== "") {
      store.setKey("isCorrectInputGender", true);
    }
  }
);
export const setIsCorrectInputSpecies = action(
  newSeedStore,
  "setIsCorrectInputSpecies",
  (store, value: string) => {
    if (value !== "") {
      store.setKey("isCorrectInputSpecies", true);
    }
  }
);
export const setIsCorrectInputGermMin = action(
  newSeedStore,
  "setIsCorrectInputGermMin",
  (store, value: number) => {
    if (value > tempMin) {
      store.setKey("isCorrectInputGermMin", true);
    }
  }
);
export const setIsCorrectInputGermMax = action(
  newSeedStore,
  "setIsCorrectInputGermMax",
  (store, value: number) => {
    if (value > tempMin) {
      store.setKey("isCorrectInputGermMax", true);
    }
  }
);
export const setIsCorrectInputCultMin = action(
  newSeedStore,
  "setIsCorrectInputCultMin",
  (store, value: number) => {
    if (value > tempMin) {
      store.setKey("isCorrectInputCultMin", true);
    }
  }
);
export const setIsCorrectInputCultMax = action(
  newSeedStore,
  "setIsCorrectInputCultMax",
  (store, value: number) => {
    if (value > tempMin) {
      store.setKey("isCorrectInputCultMax", true);
    }
  }
);
export const setIsCorrectSeedType = action(
  newSeedStore,
  "setIsCorrectSeedType",
  (store, value: number) => {
    if (value > 0) {
      store.setKey("isCorrectSeedType", true);
    }
  }
);

// ---------------------------------------------------------------------

export const saveNewSeed = action(
  newSeedStore,
  "saveNewSeed",
  async (store) => {
    store.setKey("isBusy", true);
    console.log("debut")

    const {
      inputName,
      inputGender,
      inputSpecies,
      inputGermMin,
      inputGermMax,
      inputCultMin,
      inputCultMax,
      seedType,
      isCorrectInputName,
      isCorrectInputGender,
      isCorrectInputSpecies,
      isCorrectInputGermMin,
      isCorrectInputGermMax,
      isCorrectInputCultMin,
      isCorrectInputCultMax,
      isCorrectSeedType,
    } = store.get();

    console.log(isCorrectInputName)
    console.log(isCorrectInputGender)
    console.log(isCorrectInputSpecies)
    console.log(isCorrectInputGermMin)
    console.log(isCorrectInputGermMax)
    console.log(isCorrectInputCultMin)
    console.log(isCorrectInputCultMax)
    console.log(inputName)
    console.log(inputName)
    console.log(inputGender)
    console.log(inputSpecies)
    console.log(inputGermMin)
    console.log(inputGermMax)
    console.log(inputCultMin)
    console.log(inputCultMax)
    console.log(inputName)


    if (
      isCorrectInputName &&
      isCorrectInputGender &&
      isCorrectInputSpecies &&
      isCorrectInputGermMin &&
      isCorrectInputGermMax &&
      isCorrectInputCultMin &&
      isCorrectInputCultMax &&
      isCorrectSeedType
    ) {

        console.log("correct")
      const seedCollection = collection(firebaseDb, genericSeedCollection);

      const docRef = await addDoc(seedCollection, {
        name: inputName,
        gender: inputGender,
        species: inputSpecies,
        germMin: inputGermMin,
        germMax: inputGermMax,
        cultMin: inputCultMin,
        cultMax: inputCultMax,
        seeType: seedType,
      });
    }
    console.log("fin")

    store.setKey("isBusy", false);
  }
);
