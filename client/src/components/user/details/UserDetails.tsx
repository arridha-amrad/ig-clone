import React, { useCallback, useEffect, useRef, useState } from "react";
import Setting from "./settings.svg";
import SettingsOptions from "../modal/settings/settingsModal";
import {
  ProfileFirstLine,
  ProfileUsername,
  EditProfileButton,
  SettingsIcon,
  Post,
  Followers,
  Followings,
  AccountName,
  Bio,
  Web,
  EditProfileButton2,
  AccountDetails,
  PostFollowersFollowingsArea,
} from "./userDetails.element";
import { ModalBackground2 } from "../modal/settings/settingsModal.element";
import { ProfilePageData } from "../../../dto/UserDTO";

interface ProfileDataProps {
  data: ProfilePageData;
  isAuthenticatedUser: boolean;
}

const ProfileData: React.FC<ProfileDataProps> = ({
  data,
  isAuthenticatedUser,
}) => {
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
        <ProfileUsername>{data.username}</ProfileUsername>
        {isAuthenticatedUser && (
          <>
            <EditProfileButton to="/accounts/edit">
              Edit Profile
            </EditProfileButton>
            <SettingsIcon
              onClick={() => setShow(true)}
              className="item"
              src={Setting}
            />
          </>
        )}
      </ProfileFirstLine>

      <EditProfileButton2 to="/accounts/edit">Edit Profile</EditProfileButton2>

      <PostFollowersFollowingsArea>
        <Post>
          <span>{data.totalPosts}</span> post
        </Post>
        <Followers>
          <span>{data.totalFollowers}</span> followers
        </Followers>
        <Followings>
          <span>{data.totalFollowings}</span> followings
        </Followings>
      </PostFollowersFollowingsArea>

      <AccountDetails>
        <AccountName>{data.fullName}</AccountName>
        <Bio>{data.bio}</Bio>
        <Web>{data.website}</Web>
      </AccountDetails>
    </>
  );
};

export default ProfileData;
