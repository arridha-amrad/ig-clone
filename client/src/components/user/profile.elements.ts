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

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;

  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 20px;
  }
  @media (min-width: 935px) {
    padding: 0 0px;
    gap: 27px;
  }
`;

export const PostWrapper = styled.div`
  height: 294px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
    cursor: pointer;
    .on-hover {
      display: inline-block;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const CommentLikeWrapper = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  width: 100%;
  z-index: 50;
`;

export const Comment = styled.div`
  display: none;
  margin-left: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  i {
    font-size: 23px;
    transform: rotateY(180deg);
    margin-right: 8px;
  }
`;

export const Likes = styled(Comment)`
  left: 10%;
  margin-left: 0;
  margin-right: 10px;
  @media (min-width: 736px) {
    left: 20%;
  }
  i {
    font-size: 23px;
    margin-left: 8px;
  }
`;

export const PostImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
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
