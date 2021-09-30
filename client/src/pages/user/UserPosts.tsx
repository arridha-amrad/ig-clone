import React, { useState } from "react";
import {
  Likes,
  PostGrid,
  PostImg,
  PostWrapper,
  Comment,
  CommentLikeWrapper,
} from "../../components/user/profile.elements";
import Posts from "../../data/myPost.json";
import { Fragment } from "react";
import MyModalPost from "../../components/user/modal/post/PostModal";
import UserContainer from "../../components/user/container/UserContainer";

interface UserPostProps {}

const UserPost: React.FC<UserPostProps> = () => {
  const [isShow, setShow] = useState(false);
  const [imageShow, setImageShow] = useState("");

  return (
    <UserContainer>
      <PostGrid>
        {isShow && (
          <MyModalPost isShow={isShow} setShow={setShow} imageURL={imageShow} />
        )}
        {Posts.map((post, index) => (
          <Fragment key={index}>
            <PostWrapper
              onClick={() => {
                setShow(true);
                setImageShow(post.imgURL);
              }}
            >
              <CommentLikeWrapper>
                <Likes className="on-hover">
                  <i aria-hidden className="fas fa-heart"></i>
                  4.9k
                </Likes>
                <Comment className="on-hover">
                  <i aria-hidden className="fas fa-comment"></i>
                  2.5k
                </Comment>
              </CommentLikeWrapper>
              <PostImg src={post.imgURL} />
            </PostWrapper>
          </Fragment>
        ))}
      </PostGrid>
    </UserContainer>
  );
};

export default UserPost;
