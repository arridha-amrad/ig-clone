import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import {
  Profile,
  ProfileContainer,
  ProfileImg,
  ProfileInfo,
} from "./homeProfile.elements";

interface HomeProfileProps {}

const HomeProfile: React.FC<HomeProfileProps> = () => {
  const { username, imageURL, fullName } = useSelector(
    (state: RootState) => state.auth.authenticatedUser
  );
  return (
    <ProfileContainer>
      <Profile>
        <ProfileImg src={imageURL} alt="avatar" />
        <ProfileInfo>
          <div>{username}</div>
          <p>{fullName}</p>
        </ProfileInfo>
      </Profile>
      <div className="switch">Switch</div>
    </ProfileContainer>
  );
};

export default HomeProfile;
