import React from "react";
import styled from "styled-components";
import SuggestionUsers from "../data/suggestion_user.json";
import { Profile, ProfileImg } from "./HomeProfile";

interface SuggestionUserProps {}

const SuggestionUser: React.FC<SuggestionUserProps> = () => {
  return (
    <>
      {SuggestionUsers.map((su, index) => (
        <SuggestionUserContainer key={index}>
          <Profile>
            <LittleProfileImg src={su.image} alt="dp" />
            <LittleProfileInfo>
              <Username>{su.username}</Username>
              <Info>Follows you</Info>
            </LittleProfileInfo>
          </Profile>
          <ButtonFollow>Follow</ButtonFollow>
        </SuggestionUserContainer>
      ))}
    </>
  );
};

export default SuggestionUser;

const LittleProfileImg = styled(ProfileImg)`
  width: 30px;
  height: 30px;
`;

const SuggestionUserContainer = styled.div`
  display: flex;
  height: 50px;
  width: inherit;
  align-items: center;
  justify-content: space-between;
`;

const ButtonFollow = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #0095f6;
  font-weight: 600;
  font-size: 12px;
`;

const LittleProfileInfo = styled.div`
  margin-left: 10px;
`;

const Username = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const Info = styled.p`
  font-size: 12px;
  color: #8e8e8e;
`;
