import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reduxActions/AuthActions";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/Store";

interface NavDropDownProps {
  showDropDown: boolean;
}

const NavDropDown: React.FC<NavDropDownProps> = ({ showDropDown }) => {
  const dispatch = useDispatch();
  const username = useSelector(
    (state: RootState) => state.auth.authenticatedUser?.username
  );
  return (
    <NavbarProfileDropDown sc_isShow={showDropDown}>
      <Menu href={`/${username}`}>
        <i className="far fa-user-circle"></i>
        <p>Profile</p>
      </Menu>
      <ProfileDropDownMenu to="/user/saved">
        <i className="fas fa-tag"></i>
        <p>Saved</p>
      </ProfileDropDownMenu>
      <ProfileDropDownMenu to="/user/post">
        <i className="fas fa-cog"></i>
        <p>Settings</p>
      </ProfileDropDownMenu>
      <DropDownDivider />
      <NavbarLogoutButton onClick={() => dispatch(logout())}>
        Log Out
      </NavbarLogoutButton>
    </NavbarProfileDropDown>
  );
};

export default NavDropDown;

interface INavDropDown {
  sc_isShow: boolean;
}

const NavbarProfileDropDown = styled.div<INavDropDown>`
  &:before {
    content: "";
    display: ${(props) => (props.sc_isShow ? "block" : "none")};
    width: 20px;
    height: 20px;
    background: #fff;
    right: 20px;
    top: -10px;
    transform: rotate(45deg);
    position: absolute;
    z-index: -99;
    box-shadow: -2px -2px 2px 0px #ccc;
  }
  display: ${(props) => (props.sc_isShow ? "block" : "none")};
  position: absolute;
  top: 40px;
  right: -20px;
  height: 164px;
  width: 232px;
  z-index: 90;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px #ccc;
`;

const Menu = styled.a`
  display: flex;
  align-items: center;
  height: 37px;
  padding: 20px;
  width: 100%;
  text-decoration: none;
  color: #1a1a1a;
  cursor: pointer;

  p {
    margin-left: 10px;
    font-size: 14px;
  }

  &:hover {
    background: #efefef;
  }
`;

const ProfileDropDownMenu = styled(Link)`
  display: flex;
  align-items: center;
  height: 37px;
  padding: 20px;
  width: 100%;
  text-decoration: none;
  color: #1a1a1a;
  cursor: pointer;

  p {
    margin-left: 10px;
    font-size: 14px;
  }

  &:hover {
    background: #efefef;
  }
`;

const DropDownDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
`;

const NavbarLogoutButton = styled.div`
  width: 100%;
  height: 43px;
  text-align: start;
  padding-top: 12px;
  padding-left: 20px;
  font-size: 14px;
  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }
`;
