import React from "react";
import PostJSON from "../data/posts.json";
import styled from "styled-components";
import Post from "./Post";

interface UserPostsProps {}

const UserPosts: React.FC<UserPostsProps> = () => {
   const showComment = (comment: string) => {
      let oComment: string;
      if (comment.length >= 25) {
         oComment = comment.slice(0, 20) + "...";
         return oComment;
      } else {
         return comment;
      }
   };
   return (
      <>
         {PostJSON.map((post, index) => (
            <PostCard key={index}>
               <Post
                  avatar={post.avatar}
                  imageURL={post.postImgURL}
                  isLiked={true}
                  postId="postId"
                  totalLikes={post.likes}
                  username={post.username}
                  description={post.username}
               />
               <CardComment>
                  <RecentComment>
                     <p className="username">{post.username}</p>
                     <p className="comment">
                        {showComment(post.captions).includes("...") && (
                           <span>
                              {showComment(post.captions)}
                              <MoreComment>more</MoreComment>
                           </span>
                        )}
                     </p>
                  </RecentComment>

                  <TotalComments>View all {post.comments.length} comments</TotalComments>

                  {post.comments.slice(0, 2).map((comment, index) => (
                     <SecondRecentComment key={index}>
                        <div className="user__comment">
                           <p className="username">{comment.username}</p>
                           <p className="comment">{comment.body}</p>
                        </div>
                        <i className="far fa-heart like__comment"></i>
                     </SecondRecentComment>
                  ))}
               </CardComment>

               <CardTime>9 hours ago</CardTime>

               <CardInputContainer>
                  <CardInput placeholder="Add a comment..." />
                  <CardInputButton disabled type="submit">
                     Post
                  </CardInputButton>
               </CardInputContainer>
            </PostCard>
         ))}
      </>
   );
};

export default UserPosts;

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

const CardComment = styled.div`
   padding: 0px 15px;
   position: relative;
`;

const CardTime = styled.p`
   text-transform: uppercase;
   font-size: 10px;
   font-weight: 500;
   color: #8e8e8e;
   margin: 10px 0px 5px 15px;
`;

const RecentComment = styled.div`
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

const MoreComment = styled.span`
   cursor: pointer;
   color: #8e8e8e;
   margin-left: 5px;
`;

const CardInputContainer = styled.div`
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

const CardInput = styled.input`
   border: none;
   outline: none;
   font-size: 15px;
   width: calc(100% - 50px);

   &::placeholder {
      color: #8e8e8e;
   }
`;

const CardInputButton = styled.button`
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

const TotalComments = styled.div`
   color: #8e8e8e;
   font-size: 15px;
   padding: 5px 0;
   cursor: pointer;
`;

const SecondRecentComment = styled(RecentComment)`
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
