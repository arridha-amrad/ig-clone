import styled from "styled-components";

export const AccountWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 5fr;
  padding: 20px 20px;

  @media (min-width: 736px) {
    grid-template-columns: 2fr 4fr;
    padding: 0 0;
  }
`;

export const AccountWrapper2 = styled.div`
  margin: 0px 20px 20px;
  display: block;

  @media (min-width: 736px) {
    display: none;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  line-height: 1.9;
  display: block;
`;

export const Bio = styled.p`
  line-height: 1.6;
  display: block;
`;

export const Web = styled.p`
  font-weight: 600;
  color: #00376b;
  display: block;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;

  @media (min-width: 736px) {
    justify-content: center;
  }
`;

export const AccountAvatar = styled.img`
  height: 75px;
  width: 75px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;

  @media (min-width: 736px) {
    height: 150px;
    width: 150px;
  }
`;

export const AccountDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const AccountHeader = styled.div`
  margin-bottom: 0;
  @media (min-width: 736px) {
    margin-bottom: 44px;
  }
`;

export const PostFollowerFollowingArea2 = styled.div`
  height: 61px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #dbdbdb;

  @media (min-width: 736px) {
    display: none;
  }
`;

export const PostFoll2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Total2 = styled.p`
  font-weight: 700;
`;

export const Menu2 = styled.p`
  color: #8e8e8e;
`;

export const Footer = styled.div`
  width: 100%;
  text-align: center;
  color: #8e8e8e;
  font-size: 12px;
  margin-top: 25px;
  margin-bottom: 65px;

  span {
    padding: 0 10px;
    line-height: 1.7;
  }
`;
