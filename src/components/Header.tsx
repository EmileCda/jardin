import { useStore } from "@nanostores/react";
import { headerStore, toggleIsVisibleTossMenu } from "../store/Header.store";
import {
  HeaderContainer,
  LanguageBarContainer,
  Logo,
  MenuBuger,
  MenuNavContainer,
} from "../style/Header.style";
import jsonData from "./../data/localData.json";
export const localData: any = jsonData;

/**
 *
 * this function retriecve information about the display language
 * and define the langbar if multiple lang
 */

export type LangDesc = {
  id: string;
  name: string;
  description: string;
  urlFlag: string;
};

export function LanguageBar() {
  const langList = localData.language;
  return (
    <LanguageBarContainer>
      {langList.map((item: LangDesc, index: number) => (
        <img key={index} src={item.urlFlag} alt={item.description} />
      ))}
    </LanguageBarContainer>
  );
}
export type TNavBar = {
  fr: string;
  en: string;
  es: string;
  link: string;
};

export function MenuNav() {
  const navBar = localData.navBar;
  const lang = "fr";

  return (
    <LanguageBarContainer>
      <ul>
        {navBar.map((item: TNavBar, index: number) => (
          <li key={index}>{item[lang]}</li>
        ))}
      </ul>
    </LanguageBarContainer>
  );
}

/**
 * this function do ...
 */
export default function Header() {
  const {isVisibleTossMenu } = useStore(headerStore);
  return (
    <>
      <HeaderContainer>
        <Logo>
          <p>{localData.AppName}</p>
        </Logo>
        <LanguageBar />
        <MenuBuger onClick={toggleIsVisibleTossMenu}>
          <i className="fa-solid fa-bars"></i>
          {/* <i className="fa-solid fa-rectangle-xmark"></i> */}
        </MenuBuger>
        <MenuNavContainer isClicked={isVisibleTossMenu} >
        <MenuNav />
        </MenuNavContainer>
      </HeaderContainer>
    </>
  );
}
