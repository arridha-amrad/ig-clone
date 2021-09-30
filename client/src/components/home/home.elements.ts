import styled from "styled-components";

export const HomeGrid = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-gap: 32px;
    grid-template-areas: "wrapperLeft wrapperRight";
    overflow: hidden;
    grid-template-columns: 6fr 3fr;
  }
`;

export const WrapperLeft = styled.div`
  grid-area: wrapperLeft;
  overflow-x: auto;
`;

export const WrapperRight = styled.div`
  grid-area: wrapperRight;
  height: 100vh;
  display: none;
  padding: 0 5px;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const SuggestionBox = styled.div`
  height: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: #8e8e8e;
  font-weight: 600;

  p {
    color: #1a1a1b;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
  }
`;
