import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IUserData } from "./UserContainer";

interface ProfileMenuProps {
   data: IUserData;
}

const ProfileMenus: React.FC<ProfileMenuProps> = ({ data }) => {
   const { pathname } = useLocation();
   return (
      <ProfileMenu>
         <ProfileLink to={`/${data.username}`}>
            <MenuWrapper showFocus={pathname === `/${data.username}`}>
               <svg className={pathname === `/${data.username}` ? "svg_focus" : "svg_not_focus"} viewBox="0 0 48 48">
                  <path
                     clipRule="evenodd"
                     d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                     fillRule="evenodd"
                  ></path>
               </svg>

               <Menu className={pathname === `/${data.username}` ? "" : "on"}>Post</Menu>
            </MenuWrapper>
         </ProfileLink>
         <ProfileLink to={`/${data.username}/igtv`}>
            <MenuWrapper showFocus={pathname === `/${data.username}/igtv`}>
               <svg
                  className={pathname === `/${data.username}/igtv` ? "svg_focus" : "svg_not_focus"}
                  viewBox="0 0 48 48"
               >
                  <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
               </svg>
               <Menu className={pathname === `/${data.username}/igtv` ? "" : "on"}>IGTV</Menu>
            </MenuWrapper>
         </ProfileLink>

         <ProfileLink to={`/${data.username}/saved`}>
            <MenuWrapper showFocus={pathname === `/${data.username}/saved`}>
               <svg
                  className={pathname === `/${data.username}/saved` ? "svg_focus" : "svg_not_focus"}
                  viewBox="0 0 48 48"
               >
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
               </svg>
               <Menu className={pathname === `/${data.username}/saved` ? "" : "on"}>Saved</Menu>
            </MenuWrapper>
         </ProfileLink>
         <ProfileLink to={`/${data.username}/tagged`}>
            <MenuWrapper showFocus={pathname === `/${data.username}/tagged`}>
               <svg
                  className={pathname === `/${data.username}/tagged` ? "svg_focus" : "svg_not_focus"}
                  viewBox="0 0 48 48"
               >
                  <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
               </svg>

               <Menu className={pathname === `/${data.username}/tagged` ? "" : "on"}>Tagged</Menu>
            </MenuWrapper>
         </ProfileLink>
      </ProfileMenu>
   );
};

export default ProfileMenus;

const Menu = styled.p`
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

const ProfileLink = styled(Link)`
   text-decoration: none;
   margin: 0 2rem;
   position: relative;
`;

interface MenuWrapperProps {
   showFocus?: boolean;
}
const MenuWrapper = styled.div<MenuWrapperProps>`
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

const ProfileMenu = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-around;

   @media (min-width: 736px) {
      justify-content: center;
   }
`;
