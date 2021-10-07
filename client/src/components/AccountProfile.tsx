import React from "react";
import styled from "styled-components";

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

 const ProfileImg = styled.div`
  width: 200px;
  display: block;
  text-align: right;

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    object-fit: cover;
  }
`;

 const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 20px;
  margin-bottom: 10px;
`;

 const UsernameArea = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  width: 400px;

  .un {
    font-size: 1.3rem;
  }

  .input {
    margin-top: 3px;
    color: #2f95f6;
    font-weight: bold;
    font-size: 15px;
  }
`;

export default AccountProfile;
