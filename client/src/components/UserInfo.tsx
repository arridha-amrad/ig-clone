import React, { useCallback, useEffect, useRef, useState } from "react";
import SettingsOptions from "./SettingsModal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IUserData } from "./UserContainer";
import { PostData } from "../dto/UserDTO";

interface ProfileDataProps {
   userData: IUserData;
   postsData: PostData[];
   isAuthenticatedUser: boolean;
}

const ProfileData: React.FC<ProfileDataProps> = ({ userData, isAuthenticatedUser, postsData }) => {
   const [isShow, setShow] = useState(false);
   const myRef = useRef();

   const ToggleModal = (e: any) => {
      if (myRef.current === e.target) {
         setShow(false);
      }
   };

   const keyPress = useCallback(
      (e: KeyboardEvent) => {
         if (e.key === "Escape" && isShow) {
            setShow(false);
         }
      },
      [setShow, isShow]
   );

   useEffect(() => {
      document.addEventListener("keydown", keyPress);
      return () => document.removeEventListener("keydown", keyPress);
   }, [keyPress]);

   return (
      <>
         <ModalBackground2 isShow={isShow} ref={myRef} onClick={ToggleModal}>
            <SettingsOptions isShow={isShow} />
         </ModalBackground2>

         <ProfileFirstLine>
            <ProfileUsername>{userData.username}</ProfileUsername>
            {isAuthenticatedUser && (
               <>
                  <EditProfileButton to="/accounts/edit">Edit Profile</EditProfileButton>
                  <Icon onClick={() => setShow(true)} className="fas fa-cog item"></Icon>
               </>
            )}
         </ProfileFirstLine>

         <EditProfileButton2 to="/accounts/edit">Edit Profile</EditProfileButton2>

         <PostFollowersFollowingsArea>
            <Post>
               <span>{postsData.length}</span> post
            </Post>
            <Followers>
               <span>{userData.followers}</span> followers
            </Followers>
            <Followings>
               <span>{userData.followings}</span> followings
            </Followings>
         </PostFollowersFollowingsArea>

         <AccountDetails>
            <AccountName>{userData.fullName}</AccountName>
            <Bio>{userData.bio}</Bio>
            <Web>{userData.website}</Web>
         </AccountDetails>
      </>
   );
};

export default ProfileData;

interface ModalBackground2Props {
   ref: any;
   isShow: boolean;
}
const ModalBackground2 = styled.div<ModalBackground2Props>`
   display: ${(props) => (props.isShow ? "flex" : "none")};
   justify-content: center;
   align-items: center;
   position: fixed;
   z-index: 91;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.7);
`;

const ProfileFirstLine = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;

const PostFollowersFollowingsArea = styled(ProfileFirstLine)`
   display: none;
   @media (min-width: 736px) {
      display: flex;
   }
`;

const ProfileUsername = styled.div`
   font-size: 28px;
   font-weight: 300;
   margin-right: 24px;
`;

const EditProfileButton = styled(Link)`
   text-decoration: none;
   text-align: center;
   color: #333;
   font-weight: 600;
   border: 1px solid #ccc;
   background: transparent;
   padding: 5px;
   width: 95px;
   border-radius: 5px;
   margin-right: 15px;
   cursor: pointer;
   display: none;

   &:focus {
      outline: none;
   }

   @media (min-width: 736px) {
      display: block;
   }
`;

const EditProfileButton2 = styled(EditProfileButton)`
   display: block;
   width: 100%;
   margin-top: -10px;
   @media (min-width: 736px) {
      display: none;
   }
`;

const Icon = styled.i`
   font-size: 20px;
   cursor: pointer;
   padding-top: 2px;

   @media (min-width: 736px) {
      height: 24px;
      margin-left: 0px;
   }
`;

const Post = styled.p`
   font-size: 16px;
   span {
      font-weight: 700;
   }
   margin-right: 42px;
`;
const Followers = styled(Post)``;
const Followings = styled(Post)``;

const AccountName = styled.p`
   font-size: 16px;
   font-weight: 600;
   line-height: 1.7;
`;

const Bio = styled.p`
   font-size: 16px;
   line-height: 1.7;
   width: 400px;
   white-space: pre-line;
   word-wrap: break-word;
`;

const Web = styled.p`
   font-size: 16px;
   color: #00376b;
   font-weight: 600;
`;

const AccountDetails = styled.div`
   display: none;

   @media (min-width: 736px) {
      display: block;
   }
`;
