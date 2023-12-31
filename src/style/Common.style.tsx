import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for the open menu
 */

export const MyLink = styled(Link)`
  text-decoration: none;
  color: ${AppTheme.colors.background};
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
  border-bottom: 1px solid ${AppTheme.colors.lessBG};
  background-color: ${AppTheme.colors.background};
  a {
    text-decoration: none;
  }
`;

export const IconContainer = styled.div`
  font-size: 2rem;
  display: flex;
  flex-grow: 1;
  padding: 1rem;
  background-color: ${AppTheme.colors.background};
  i {
    color: ${AppTheme.colors.forground};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  h1 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    padding: 0;
    margin: 0;
  }
`;

export const MyButton = styled.div`
  min-width: 80vw;
  background-color: ${AppTheme.colors.forground};
  border-radius: 0.6rem;
  margin-bottom: 3rem;
  min-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;


