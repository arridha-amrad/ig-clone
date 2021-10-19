import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IGText from "../../images/ig2.svg";
import NavDropDown from "./AppBarDropDown";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = () => {
   const [showDropDown, setShowDropDown] = useState(false);

   const avatar = useSelector(
      (state: RootState) => state.auth.authenticatedUser.imageURL
   );

   const {
      location: { pathname },
   } = useHistory();

   return (
      <>
         <Nav>
            {showDropDown && (
               <FixedLayer onClick={() => setShowDropDown(false)} />
            )}
            <NavContainer>
               <NavArea>
                  <NavTitle to="/home">
                     <img src={IGText} alt="instagram" />
                  </NavTitle>
                  <NavSearch />
                  <NavMenu>
                     <NavLink to="/home">
                        <Icon
                           isSolid={pathname === "/home"}
                           className="fas fa-home"
                        ></Icon>
                     </NavLink>

                     <NavLink to="/accounts/change-password">
                        <Icon
                           isSolid={pathname === "/accounts/change-password"}
                           className="fas fa-compass"
                        ></Icon>
                     </NavLink>

                     <NavLink to="/home">
                        <Icon
                           isSolid={pathname === "/message"}
                           className="fas fa-paper-plane"
                        ></Icon>
                     </NavLink>

                     <NavLink to="/accounts/edit">
                        <Icon
                           isSolid={pathname === "/accounts/edit"}
                           className="fas fa-heart"
                        ></Icon>
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
                        <img src={avatar} alt="avatar" />
                        <NavDropDown showDropDown={showDropDown} />
                     </NavbarProfile>
                  </NavMenu>
               </NavArea>
            </NavContainer>
         </Nav>
      </>
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
   z-index: 90;
   margin-bottom: 50px;
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

const NavLink = styled(Link)`
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

interface IconProps {
   isSolid: boolean;
}

const Icon = styled.i<IconProps>`
   font-size: 1.4rem;
   color: ${(props) => (props.isSolid ? "#000" : "transparent")};
   -webkit-text-stroke-width: ${(props) => (props.isSolid ? "0px" : "1px")};
   -webkit-text-stroke-color: ${(props) =>
      props.isSolid ? "transparent" : "#000"};
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
