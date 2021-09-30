import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.p`
  display: none;
  color: #1a1a1b;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 12px;

  @media (min-width: 736px) {
    display: block;
    margin-left: 5px;
  }
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  margin: 0 2rem;
  position: relative;
`;

interface MenuWrapperProps {
  showFocus?: boolean;
}
export const MenuWrapper = styled.div<MenuWrapperProps>`
  display: flex;
  align-items: center;
  width: inherit;
  /* color: #8e8e8e; */

  &::before {
    content: "";
    border-top: 1px solid #333;
    position: absolute;
    width: 100%;
    top: -14px;
    display: none;

    @media (min-width: 736px) {
      top: -19px;
      display: ${(props) => (props.showFocus ? "block" : "none")};
    }
  }

  .on {
    color: #8e8e8e !important;
  }

  svg {
    width: 24px;
    @media (min-width: 736px) {
      width: 13px;
    }
  }

  .svg_focus {
    fill: #0095f6;
    @media (min-width: 736px) {
      fill: #1a1a1b;
    }
  }

  .svg_not_focus {
    fill: #8e8e8e;
  }

  .showOn736 {
    display: block;
    @media (min-width: 736px) {
      display: none;
    }
  }
`;

export const ProfileMenu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 736px) {
    justify-content: center;
  }
`;
