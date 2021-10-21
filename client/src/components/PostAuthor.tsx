import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface PostAuthorProps {
  avatar: string;
  username: string;
}

const PostAuthor: React.FC<PostAuthorProps> = ({ avatar, username }) => {
  return (
    <AuthorContainer>
      <AuthorWrapper>
        <AuthorImg src={avatar} alt="profile" />
        <AuthorUsername to="/home">{username}</AuthorUsername>
      </AuthorWrapper>
      {/* <AuthorOptions src={MenuImg} alt="menu" /> */}
      <Icon className="fas fa-ellipsis-h"></Icon>
    </AuthorContainer>
  );
};

export default PostAuthor;

const AuthorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
`;

const Icon = styled.i`
  height: 15px;
  width: 15px;
  cursor: pointer;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImg = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  object-fit: cover;
`;

const AuthorUsername = styled(Link)`
  color: #1a1a1a;
  text-decoration: none;
  margin-left: 15px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
