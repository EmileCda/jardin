/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
/**
 * color theme from coolor.co
 * for the whole application
 */
export const DevideMinSize = {
  mobile: "480px",
  tablet: "600px",
  tableteLS: "768px",
  laptop: "992px",
  screen: "1832x",
};

export const colorsInit= {
  dark: "#996433",
  lessDark: "#C1966E",
  medium: "#557859",
  lessLight: "CB9F77",
  light: "#F2CDAB",
};

export const AppTheme = {
  colors: {
    background: colorsInit.dark ,
    lessBG: colorsInit.lessDark ,
    medium:colorsInit.medium ,
    lessFG: colorsInit.lessLight ,
    forground: colorsInit.light ,
  },
  font: {
    regular: "Gloria Hallelujah, cursive",
    extra: "Poppins, sans-serif",
    Logo: "Lobster, cursive",
    Logo2: "Bilbo Swash Caps, cursive",
    fontSize: "24px",

  },
  BorderRadius: "0.6rem",
};

export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
`;

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color:${AppTheme.colors.background};
    text-decoration: none;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    font-size: 24px;
  }
  * {
    box-sizing: border-box;
  }
  .hide{
    display: none;
  }
`;
