import React from "react";
import {
  ProfileContainer,
  ProfileImg,
  UsernameArea,
} from "./AccountProfile.elements";

interface AccountProfileProps {
  username: string;
  imgUrl: string;
  enableChangeProfile?: boolean;
}

const AccountProfile: React.FC<AccountProfileProps> = ({
  username,
  imgUrl,
  enableChangeProfile = false,
}) => {
  return (
    <ProfileContainer>
      <ProfileImg>
        <img src={imgUrl} alt="profile" />
      </ProfileImg>
      <UsernameArea>
        <p className="un">{username}</p>
        {enableChangeProfile && <p className="input">Change Profile Photo</p>}
      </UsernameArea>
    </ProfileContainer>
  );
};

export default AccountProfile;
