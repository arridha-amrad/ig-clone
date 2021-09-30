import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AccountMenuLink = styled(NavLink)`
  height: 52px;
  width: 100%;
  display: block;
  position: relative;
  text-decoration: none;
  text-align: start;
  color: #333;
  font-size: 1rem;
  padding-left: 2rem;
  padding-top: 16px;

  &:hover {
    background-color: #fbfbfb;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 52px;
      width: 2px;
      background-color: #ccc;
    }
  }
`;
