import React from "react";
import { Profile, ProfileContainer, ProfileImg, ProfileInfo } from "./homeProfile.elements";

interface HomeProfileProps { }

const HomeProfile: React.FC<HomeProfileProps> = () => {
  return (
    <ProfileContainer>
      <Profile>
        <ProfileImg src="https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg?w=600&h=383&crop=1" />
        <ProfileInfo>
          <div>spongebob</div>
          <p>square_pants</p>
        </ProfileInfo>
      </Profile>
      <div className="switch">Switch</div>
    </ProfileContainer>
  );
};

export default HomeProfile;
