import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for the open menu
 */
export const SeedMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Seed = styled.div`
  font-size: 1rem;
  padding: 0 0.5rem;
  margin: 0.2rem;
  border: 1px dashed yellow;
  max-width: 99vw;
  background-color: ${AppTheme.colors.medium};
`;

export const Title = styled.h1`
  min-width: 100vw;
  font-size: 1rem;
`;

export const SeedId = styled.p`
display : none;

`;

export const MyLink = styled(Link)`
  text-decoration: none;
  color: none;
  cursor: pointer;
`;
