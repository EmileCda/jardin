import styled, { keyframes } from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for the open menu
 */

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





