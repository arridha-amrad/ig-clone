import React from "react";
import UserContainer from "../../components/user/container/UserContainer";

interface UserTagProps { }

const UserTag: React.FC<UserTagProps> = () => {
  return (
    <UserContainer>
      <div>
        <h1>Tagged</h1>
      </div>
    </UserContainer>
  );
};

export default UserTag;
