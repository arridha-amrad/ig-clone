import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/Store";

interface HomeProfileProps {}

const HomeProfile: React.FC<HomeProfileProps> = () => {
   const { username, imageURL, fullName } = useSelector((state: RootState) => state.auth.authenticatedUser);
   return (
      <ProfileContainer>
         <Link className="link" to={`/${username}`}>
            <Profile>
               <ProfileImg src={imageURL} alt="avatar" />
               <ProfileInfo>
                  <div>{username}</div>
                  <p>{fullName}</p>
               </ProfileInfo>
            </Profile>
         </Link>
         <div className="switch">Switch</div>
      </ProfileContainer>
   );
};

export default HomeProfile;

const ProfileContainer = styled.div`
   display: flex;
   height: 90px;
   align-items: center;
   justify-content: space-between;

   .link {
      text-decoration: none;
   }

   .switch {
      color: #03a9f4;
      font-weight: 600;
      font-size: 13px;
      border: none;
      background-color: transparent;
      cursor: pointer;
   }
`;

export const Profile = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
`;

export const ProfileImg = styled.img`
   border-radius: 50%;
   height: 55px;
   width: 55px;
   object-fit: cover;
`;

const ProfileInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   margin-left: 20px;
   font-size: 14px;

   div {
      font-weight: 600;
      line-height: 1.4;
      color: var(--black);
   }

   p {
      color: var(--grey);
   }
`;
