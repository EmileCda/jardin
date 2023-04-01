import styled, { keyframes } from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for the open menu
 */



export const VarietyContainer = styled.div`
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
  border: 1px dashed yellow;
  max-width: 99vw;
  background-color: ${AppTheme.colors.medium};
`;

export const VarietyMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;





