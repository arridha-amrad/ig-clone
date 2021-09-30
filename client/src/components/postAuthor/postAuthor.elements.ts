import { Link } from "react-router-dom";
import styled from "styled-components"

export const AuthorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
`;

export const AuthorOptions = styled.img`
  height: 15px;
  width: 15px;
  object-fit: cover;
  cursor: pointer;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImg = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  object-fit: cover;
`;

export const AuthorUsername = styled(Link)`
  color: #1a1a1a;
  text-decoration: none;
  margin-left: 15px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;