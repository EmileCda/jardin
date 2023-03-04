import { action, map } from "nanostores";

export type TScreenType =
  | "mobile"
  | "tablet"
  | "laptop"
  | "desktop"
  | "bigScreen";

export type TAppStore = {
  screenSize: TScreenType;
};

export const AppStore = map<TAppStore>({
  screenSize: "mobile",
});

export const setScreenSize = action(
  AppStore,
  "setScreenSize",
  (store, value) => {
    store.setKey("screenSize", value);
  }
);
