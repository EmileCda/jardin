import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AppTheme } from "./App.style";

/**
 * Container for the newVariety menu.
 * this container occupies le whole screen ( in mobile-display)
 */

export const NewVarietyContainer = styled.div`
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


export const InputGroup2Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 0 .3rem 0;
padding: .2rem;
background-color: ${AppTheme.colors.lessBG}; ;
border-bottom : 1px solid black;
input{
  width: 10rem;
} 
`;

export const InputGroup2Label = styled.div`
h1{
  font-size: 1rem;
  margin: 0;
  color:  ${AppTheme.colors.forground}; 
}
`;



export const InputGroup = styled.div`
display: flex;
justify-content: center;

`;

export const InputGroup3Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 0 0 .3rem 0;
padding: .2rem;
background-color: ${AppTheme.colors.lessBG}; ;
border-bottom : 1px solid black;
input{
  width: 7rem;
} 
`;

