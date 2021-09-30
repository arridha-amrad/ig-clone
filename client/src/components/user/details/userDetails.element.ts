import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileFirstLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const PostFollowersFollowingsArea = styled(ProfileFirstLine)`
  display: none;
  @media (min-width: 736px) {
    display: flex;
  }
`;

export const ProfileUsername = styled.div`
  font-size: 28px;
  font-weight: 300;
  margin-right: 24px;
`;

export const EditProfileButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: #333;
  font-weight: 600;
  border: 1px solid #ccc;
  background: transparent;
  padding: 5px;
  width: 95px;
  border-radius: 5px;
  margin-right: 15px;
  cursor: pointer;
  display: none;

  &:focus {
    outline: none;
  }

  @media (min-width: 736px) {
    display: block;
  }
`;

export const EditProfileButton2 = styled(EditProfileButton)`
  display: block;
  width: 100%;
  margin-top: -10px;
  @media (min-width: 736px) {
    display: none;
  }
`;

export const SettingsIcon = styled.img`
  height: 20px;
  cursor: pointer;
  margin-left: -10px;

  @media (min-width: 736px) {
    height: 24px;
    margin-left: 0px;
  }
`;

export const Post = styled.p`
  font-size: 16px;
  span {
    font-weight: 700;
  }
  margin-right: 42px;
`;
export const Followers = styled(Post)``;
export const Followings = styled(Post)``;

export const AccountName = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.7;
`;

export const Bio = styled.p`
  font-size: 16px;
  line-height: 1.7;
  width: 400px;
  white-space: pre-line;
  word-wrap: break-word;
`;

export const Web = styled.p`
  font-size: 16px;
  color: #00376b;
  font-weight: 600;
`;

export const AccountDetails = styled.div`
  display: none;

  @media (min-width: 736px) {
    display: block;
  }
`;
