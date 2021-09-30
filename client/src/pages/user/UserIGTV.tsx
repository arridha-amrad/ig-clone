import React from "react";
import UserContainer from "../../components/user/container/UserContainer";

interface ProfileIGTVProps { }

const UserIGTV: React.FC<ProfileIGTVProps> = () => {
  return (
    <UserContainer>
      <div>
        <h1>Profile IGTV</h1>
      </div>
    </UserContainer>
  );
};

export default UserIGTV;
