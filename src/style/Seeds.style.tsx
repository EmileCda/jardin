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

export const AddSeed = styled.div<{ isGeneric: boolean }>`

  display: ${(props) => (props.isGeneric ?  "flex" :"none")};
  input {
    width: 6rem;
  }
`;

export const Seed = styled.div`
  font-size: 1rem;
  margin: 0.2rem;
  padding: 0;
  border: 1px dashed yellow;
  min-width: 99vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${AppTheme.colors.medium};
  h1 {
    font-size: 1.5rem;
    padding: 0 0.6rem;
    color : ${AppTheme.colors.forground};
  }
`;

export const SeedId = styled.p`
  display: none;
`;

export const Delete = styled.div`
  cursor: pointer;
  i {
    font-size: 2rem;
    color ${AppTheme.colors.forground};
  }
`;
