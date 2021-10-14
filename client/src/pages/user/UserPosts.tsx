import React, { useState } from "react";
import { Fragment } from "react";
import MyModalPost from "../../components/user/modal/post/PostModal";
import UserContainer from "../../components/user/container/UserContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import styled from "styled-components";

interface UserPostProps {}

const UserPost: React.FC<UserPostProps> = () => {
  const [isShow, setShow] = useState(false);
  const [imageShow, setImageShow] = useState("");

  const { loadingPost, posts } = useSelector((state: RootState) => state.post);

  return (
    <UserContainer>
      {loadingPost ? (
        <p>loading...</p>
      ) : (
        <PostGrid>
          {isShow && (
            <MyModalPost
              isShow={isShow}
              setShow={setShow}
              imageURL={imageShow}
            />
          )}
          {posts.map((post, index) => (
            <Fragment key={index}>
              <PostWrapper
                onClick={() => {
                  setShow(true);
                  setImageShow(post.imageURL);
                }}
              >
                <CommentLikeWrapper>
                  <Likes className="on-hover">
                    <i aria-hidden className="fas fa-heart"></i>
                    {post.likes.length}
                  </Likes>
                  <Comment className="on-hover">
                    <i aria-hidden className="fas fa-comment"></i>
                    {post.comments.length}
                  </Comment>
                </CommentLikeWrapper>
                <PostImg src={post.imageURL} />
              </PostWrapper>
            </Fragment>
          ))}
        </PostGrid>
      )}
    </UserContainer>
  );
};

export default UserPost;

const CommentLikeWrapper = styled.div`
  display: block;
  text-align: center;
  position: absolute;
  width: 100%;
  z-index: 50;
`;

const Comment = styled.div`
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

const Likes = styled(Comment)`
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

const PostImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PostGrid = styled.div`
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

const PostWrapper = styled.div`
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
