import React from "react";
import UserContainer from "../../components/user/container/UserContainer";

interface UserSavedProps { }

const UserSaved: React.FC<UserSavedProps> = () => {
  return (
    <UserContainer>
      <div>
        <h1>Profile Saved</h1>
      </div>
    </UserContainer>
  );
};

export default UserSaved;
