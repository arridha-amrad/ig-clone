import styled from "styled-components";

export const PostCard = styled.div`
  width: 100%;
  border: none;
  background-color: #fafafa;
  margin-bottom: 23px;

  @media (min-width: 600px) {
    border: 1px solid #ccc;
    background: #fff;
    margin-bottom: 63px;
  }
`;

export const PostImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 15px;

  img {
    height: 22px;
    cursor: pointer;
  }
`;

export const CoLiSeWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 22px;
    width: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const CardLikes = styled.div`
  padding: 0px 0px 10px 15px;
  font-size: 15px;
  font-weight: 600;
`;

export const CardComment = styled.div`
  padding: 0px 15px;
  position: relative;
`;

export const CardTime = styled.p`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  color: #8e8e8e;
  margin: 10px 0px 5px 15px;
`;

export const RecentComment = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;

  .username {
    font-weight: 600;
    font-size: 14px;
  }

  .comment {
    margin-left: 10px;
    font-size: 14px;
    color: #333;
    font-weight: 500;
    height: 20px;
  }
`;

export const MoreComment = styled.span`
  cursor: pointer;
  color: #8e8e8e;
  margin-left: 5px;
`;

export const CardInputContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;

  @media (min-width: 600px) {
    display: flex;
  }
`;

export const CardInput = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  width: calc(100% - 50px);

  &::placeholder {
    color: #8e8e8e;
  }
`;

export const CardInputButton = styled.button`
  color: #03a9f4;
  font-size: 14px;
  font-weight: 600;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    cursor: default;
    color: #93d7f9;
  }
`;

export const TotalComments = styled.div`
  color: #8e8e8e;
  font-size: 15px;
  padding: 5px 0;
  cursor: pointer;
`;

export const SecondRecentComment = styled(RecentComment)`
  justify-content: space-between;
  padding: 3px 0;
  .like__comment {
    cursor: pointer;
    height: 12px;
  }
  .user__comment {
    display: flex;
    overflow: hidden;
    align-items: baseline;
    text-overflow: hidden;
  }
`;
