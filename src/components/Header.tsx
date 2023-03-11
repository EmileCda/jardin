import { useStore } from "@nanostores/react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import {
  headerStore,
  setLang,
  toggleIsVisibleTossMenu,
} from "../store/Header.store";
import {
  HeaderContainer,
  LanguageBarContainer,
  Logo,
  MenuBuger,
  MenuNavContainer,
} from "../style/Header.style";
import { JsonLink, TLang } from "../types/App.type";
import jsonData from "./../data/localData.json";
export const localData: any = jsonData;

/**
 *
 * this function retrieve information about the display language
 * and define the langbar if multiple lang
 */

export type LangDesc = {
  id: TLang;
  name: string;
  description: string;
  urlFlag: string;
};

export function LanguageBar() {
  const { lang } = useStore(headerStore);
  const langList = localData.language;
  return (
    <LanguageBarContainer>
      {langList.map((item: LangDesc, index: number) => (
        <img
          className={lang === item.id ? "hide" : ""}
          key={index}
          src={item.urlFlag}
          alt={item.description}
          onClick={() => setLang(item.id)}
        />
      ))}
    </LanguageBarContainer>
  );
}



export function MenuNav() {
  const navBar = localData.navBar;
  const { lang } = useStore(headerStore);

  return (
    <LanguageBarContainer>
      <ul>
        {navBar.map((item: JsonLink, index: number) => (
          <li key={index} onClick={toggleIsVisibleTossMenu}>
            <Link to={item.link}>
              {lang === "fr" ? item.fr : lang === "en" ? item.en : item.es}
            </Link>
          </li>
        ))}
      </ul>
    </LanguageBarContainer>
  );
}

/**
 * this function do ...
 */
export default function Header() {
  const { isVisibleTossMenu } = useStore(headerStore);
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
        <MenuNavContainer isClicked={isVisibleTossMenu}>
          <MenuNav />
        </MenuNavContainer>
      </HeaderContainer>
    </>
  );
}
