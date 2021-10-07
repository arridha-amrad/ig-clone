import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IGText from "../../images/ig2.svg";
import SearchResult from "./SearchResult";
import NavDropDown from "./AppBarDropDown";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = () => {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const {
    location: { pathname },
  } = useHistory();

  return (
    <Nav>
      {showDropDown && <FixedLayer onClick={() => setShowDropDown(false)} />}
      <NavContainer>
        <NavArea>
          <NavTitle to="/home">
            <img src={IGText} alt="instagram" />
          </NavTitle>

          <NavSearchArea>
            <NavSearch searchFocus={searchFocus}>
              <InputSearch
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="in"
                placeholder="Search"
              />
              <i className="fas fa-search search"></i>
              <i className="fas fa-times-circle times"></i>
              {search && <SearchResult />}
            </NavSearch>
          </NavSearchArea>

          <NavMenu>
            <NavLink to="/home">
              {pathname === "/home" ? (
                <svg
                  aria-label="Home"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
                </svg>
              ) : (
                <svg
                  aria-label="Home"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                </svg>
              )}
            </NavLink>
            <NavLink to="/">
              <svg
                aria-label="Messenger"
                fill="#262626"
                height="22"
                viewBox="0 0 48 48"
                width="22"
              >
                <path d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z"></path>
              </svg>
            </NavLink>
            <NavLink to="/accounts/change-password">
              {pathname === "/accounts/change-password" ? (
                <svg
                  aria-label="Find People"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-label="Find People"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              )}
            </NavLink>
            <NavLink to="/accounts/edit">
              {pathname === "/accounts/edit" ? (
                <svg
                  aria-label="Activity Feed"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              ) : (
                <svg
                  aria-label="Activity Feed"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              )}
            </NavLink>
            <NavbarProfile
              isFocus={
                pathname === "/profile/post" ||
                pathname === "/profile/saved" ||
                pathname === "/profile/tagged" ||
                pathname === "/profile/igtv"
              }
              onClick={() => setShowDropDown((prev) => !prev)}
            >
              <img
                src="https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg?w=600&h=383&crop=1"
                alt="profile"
              />
              <NavDropDown showDropDown={showDropDown} />
            </NavbarProfile>
          </NavMenu>
        </NavArea>
      </NavContainer>
    </Nav>
  );
};

export default AppBar;

export const Nav = styled.div`
  height: 52px;
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: fixed;
  z-index: 90;
`;

const NavArea = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 600px) {
    grid-template-columns: 1fr 2fr 2fr;
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NavContainer = styled.div`
  max-width: 935px;
  width: 100%;
`;

export const NavTitle = styled(Link)`
  display: block;
  align-self: center;
  height: 29px;
  margin-left: 1rem;

  img {
    height: 29px;
  }

  @media (min-width: 940px) {
    margin-left: 0;
  }
`;

export const NavSearchArea = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 600px) {
    display: flex;
  }
`;

interface NavSearchProps {
  searchFocus?: boolean;
}
export const NavSearch = styled.div<NavSearchProps>`
  height: 29px;
  width: 214px;
  position: relative;
  background-color: #fafafa;

  .search {
    position: absolute;
    top: 50%;
    left: ${(props) => (props.searchFocus ? "8%" : "40%")};
    transform: translate(-50%, -50%);
    color: #ccc;
    font-size: 12px;
  }

  .times {
    display: ${(props) => (props.searchFocus ? "block" : "none")};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ccc;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const InputSearch = styled.input`
  background-color: transparent;
  border: 1px solid #ccc;
  height: 100%;
  width: 100%;
  padding-left: 6rem;
  outline: none;
  &:focus {
    padding-left: 1.8rem;
  }
`;

interface NavAction768Props {
  aa_show: boolean;
}
export const NavAction768 = styled.div<NavAction768Props>`
  display: ${(props) => (props.aa_show ? "flex" : "none")};
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

export const NavActions = styled.div`
  position: relative;
  flex-grow: 1;
  align-items: center;
  flex-basis: 100%;
  height: inherit;
  justify-content: center;
  padding: 0rem 2rem;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  /* background: #544363; */

  @media (min-width: 940px) {
    padding-right: 0;
  }
`;

export const NavLink = styled(Link)`
  /* background: #766678; */
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  height: 45px;
  width: 45px;
  img {
    width: 29px;
    height: 29px;
  }
`;

interface NavbarProfileProps {
  isFocus: boolean;
}

export const NavbarProfile = styled.button<NavbarProfileProps>`
  border: ${(props) => (props.isFocus ? "1px solid #1a1a1a" : "transparent")};
  outline: none;
  height: 25px;
  width: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 50%;
  padding: 2px;

  &:focus {
    border: 1px solid #1a1a1a;
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface FixedLayerProps {
  ref?: any;
}
export const FixedLayer = styled.div<FixedLayerProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: -10;
`;
