import styled from "styled-components";

export const Footer = styled.div`
  height: 100px;
  color: #8e8e8e;
`;

export const AuthFooter = styled.div`
  min-height: 99px;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const AuthFooterRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;

  @media (min-width: 600px) {
    width: 600px;
  }

  div {
    font-size: 10px;
    color: #8e8e8e;
    @media (min-width: 600px) {
      font-size: 12px;
    }
  }
`;
