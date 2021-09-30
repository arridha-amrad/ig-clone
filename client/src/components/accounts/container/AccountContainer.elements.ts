import styled from "styled-components";

export const AccountsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  background: #fff;
`;

export const AccountsLeft = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  position: relative;

  .active {
    font-weight: 600;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 52px;
      width: 2px;
      background-color: #262626;
    }
  }
`;

export const AccountsRight = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
