import styled from "styled-components";
import { ProfileImg } from "../profile/homeProfile.elements";

export const LittleProfileImg = styled(ProfileImg)`
  width: 30px;
  height: 30px;
`;

export const SuggestionUserContainer = styled.div`
  display: flex;
  height: 50px;
  width: inherit;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonFollow = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #0095f6;
  font-weight: 600;
  font-size: 12px;
`;

export const LittleProfileInfo = styled.div`
  margin-left: 10px;
`;

export const Username = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Info = styled.p`
  font-size: 12px;
  color: #8e8e8e;
`;
