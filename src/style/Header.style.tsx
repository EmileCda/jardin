import styled from "styled-components";
import { AppTheme, DevideMinSize } from "./App.style";

/**
 * Container for the open menu
 */
export const HeaderContainer = styled.div`
  background-color: ${AppTheme.colors.background};
  display: flex;
  justify-content: space-around;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 0px 10px;
  z-index: -1;

`;

export const Logo = styled.div`
  color: ${AppTheme.colors.forground};
  font-size: 2rem;
  font-family: ${AppTheme.font.Logo};
  min-height: 100px;
  min-width: 200px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-10deg);
  margin: -20px 10px 0px 10px;
  flex-grow: 30;
`;

export const LanguageBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  img {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;



export const MenuBuger = styled.div`
  background-color: ${AppTheme.colors.lessBG};
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 5px;
  display: none;
  @media (max-width: ${DevideMinSize.tableteLS}) {
    display: block;
    cursor: pointer;
  }
`;

export const MenuNavContainer = styled.div<{ isClicked: boolean }>`
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  top: 100px;
  margin-left: ${(props) => (props.isClicked ? "0%" : "200%")};
  font-size: 2rem;
  line-height: 3rem;
  transition: all 0.5s ease-out;
  opacity: 0.5;
  background-color: ${AppTheme.colors.lessFG};
  ul {
    list-style-type: none;
  }
  li a {
      text-decoration: none;
    }
  @media (min-width: ${DevideMinSize.tableteLS}) {
    margin-left: 0;
    font-size: 1rem;
    line-height: 2rem;
    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0px;
      padding: 0px;
    }
    li {
      margin: 0px 10px;
    }

  
  } ;
`;
