import styled from "styled-components";

export const HomeFooterContainer = styled.div`
  margin-top: 20px;
  display: inline-flex;
  font-size: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: inherit;
  line-height: 1.8;
  color: #c7c7c7;

  .dot {
    margin: 0 5px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #c7c7c7;
  }
`;

export const CopyrightFooter = styled.div`
  font-size: 10px;
  color: #c7c7c7;
  text-transform: uppercase;
  margin-top: 20px;
`;
