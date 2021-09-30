import React from "react";
import SuggestionUsers from "../../../data/suggestion_user.json";
import { Profile } from "../profile/homeProfile.elements";
import {
  LittleProfileInfo,
  SuggestionUserContainer,
  ButtonFollow,
  Username,
  Info,
  LittleProfileImg
} from "./SuggUser.elements";

interface SuggestionUserProps { }

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
