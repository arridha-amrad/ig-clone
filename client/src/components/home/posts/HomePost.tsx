import React from "react";
import {
   PostCard,
   PostImage,
   CardComment,
   CardInput,
   CardInputButton,
   CardInputContainer,
   CardLikes,
   CardTime,
   MoreComment,
   RecentComment,
   SecondRecentComment,
   TotalComments,
} from "./HomePost.elements";
import PostJSON from "../../../data/posts.json";
import CommentLikeSendBookmark from "../../CommentLikeSendBookmark";
import LikeIcon from "../../../images/card/heart.svg";
import PostAuthor from "../../postAuthor/PostAuthor";

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
               <PostAuthor avatar={post.avatar} username={post.username} />

               <PostImage src={post.postImgURL} alt="post" />

               <CommentLikeSendBookmark isLiked={true} postId="postId" />

               <CardLikes>{post.likes} likes</CardLikes>

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

                  <TotalComments>
                     View all {post.comments.length} comments
                  </TotalComments>

                  {post.comments.slice(0, 2).map((comment, index) => (
                     <SecondRecentComment key={index}>
                        <div className="user__comment">
                           <p className="username">{comment.username}</p>
                           <p className="comment">{comment.body}</p>
                        </div>
                        <img
                           className="like__comment"
                           src={LikeIcon}
                           alt="like__comment"
                        />
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
