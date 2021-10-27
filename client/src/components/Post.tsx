import { FC } from "react";
import styled from "styled-components";
import CommentLikeSendBookmark from "./CommentLikeSendBookmark";
import PostAuthor from "./PostAuthor";

interface PostProps {
   avatar: string;
   username: string;
   imageURL: string;
   isLiked: boolean;
   postId: string;
   totalLikes: string;
   description: string;
}

const Post: FC<PostProps> = ({ description, avatar, username, imageURL, isLiked, postId, totalLikes }) => {
   return (
      <>
         <PostAuthor avatar={avatar} username={username} />

         <PostImage src={imageURL} alt="post" />

         <CommentLikeSendBookmark isLiked={true} postId="postId" />

         <CardLikes>{totalLikes} likes</CardLikes>

         <Description>{description}</Description>
      </>
   );
};

export default Post;

const Description = styled.div`
   font-size: 0.94rem;
   line-height: 1.2;
   padding: 0px 20px 10px 15px;
   white-space: pre-line;
   word-wrap: break-word;
`;

const PostImage = styled.img`
   background-color: #cecece;
   height: auto;
   max-height: 500px;
   max-width: 100%;
   object-fit: contain;
`;

const CardLikes = styled.div`
   padding: 0px 0px 10px 15px;
   font-size: 15px;
   font-weight: 600;
`;
