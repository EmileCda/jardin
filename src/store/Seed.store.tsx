
// defined  here ./doc/definition-table-seed.md

import { action, map } from "nanostores";


export type TSeedStore = {
  isBusy: boolean,
  idCurrentSeed : string,
};

export const SeedStore = map<TSeedStore>({
  isBusy: false,
  idCurrentSeed : "",
});



export const setIdCurrentSeed = action(
  SeedStore,
  "setIdCurrentSeed",
  (store, idSeed: string) => {
    setIsBusy(true);
    store.setKey("idCurrentSeed", idSeed)
  }
)

// ---------------------------------------------------------------------
export const setIsBusy = action(
  SeedStore,
  "setIsBusy",
  (store, value: boolean) => {
    store.setKey("isBusy", value);
  }
);


// ---------------------------------------------------------------------
