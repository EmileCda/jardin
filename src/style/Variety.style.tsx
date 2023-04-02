import styled, { keyframes } from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for the open menu
 */



export const VarietyScreen = styled.div`
  position: absolute;
  left: 0rem;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border: 1px dashed red;
  display: flex;
  justify-content: flex-start;
  background-color: ${AppTheme.colors.background};
  ul{
    list-style: none;
    text-decoration: none;
    padding: 0;
  }
`;

export const VarietyItem = styled.div`
  font-size: 1rem;
  padding: 0 0.5rem;
  margin: 0.2rem;
  max-width: 50vw;
  color :  ${AppTheme.colors.forground};
`;

export const VarietyMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const VarietyBlock = styled.div`
  display: flex;
  min-width: 100vw;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px dashed yellow;
  background-color: ${AppTheme.colors.medium};
  MyLink{
    max-width : 50vw;
  }
  i{
    cursor: pointer;
    font-size : 2rem
  }

`;






