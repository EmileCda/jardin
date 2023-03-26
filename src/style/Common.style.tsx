import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for the open menu
 */


export const MyLink = styled(Link)`
  text-decoration: none;
  color: none;
  cursor: pointer;
`;


export const Title = styled.h1`
  min-width: 100vw;
  font-size: 1rem;
`;



export const ScreenHeader = styled.div`
  display: flex;
  min-width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: ${AppTheme.colors.background};
  a{
    text-decoration: none;
  }

`;


export const IconContainer = styled.div`
  font-size: 2rem;
  display: flex;
  flex-grow: 1;
  padding: 1rem;
  background-color: ${AppTheme.colors.background};
  i{
    color: ${AppTheme.colors.forground};

  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-grow: 2;

`;