import styled from "styled-components";
import { MyContainer } from "../../../styledComponents/container-el";

export const ProfileContainer = styled(MyContainer)`
  @media (min-width: 600px) {
    width: 100%;
  }
`;

export const HorizontalLine = styled.div`
  height: 0px;
  width: 95%;
  background-color: #ccc;
  margin: 0 auto;
  position: relative;
  padding: 0 20px;

  @media (min-width: 736px) {
    height: 1px;
  }

  @media (min-width: 935px) {
    width: 100%;
  }
`;
