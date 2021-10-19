import { FC } from "react";
import styled from "styled-components";

interface LikeButtonProps {
   postId: string;
   isLiked: boolean;
}

const LikeButton: FC<LikeButtonProps> = ({ postId, isLiked }) => {
   const handleLike = () => {
      console.log("liked :", postId);
   };
   return (
      <Button onClick={handleLike}>
         {isLiked ? (
            <Icon className="fas fa-heart liked"></Icon>
         ) : (
            <Icon className="far fa-heart outlined"></Icon>
         )}
      </Button>
   );
};

export default LikeButton;

export const Button = styled.div`
   width: 40px;
   height: 30px;
   border: none;
   outline: none;
   background-color: transparent;
   cursor: pointer;

   .liked {
      color: #f825ca !important;
      -webkit-text-stroke-color: transparent !important;
      -webkit-text-stroke-width: 0px !important;
   }

   .outlined {
      -webkit-text-stroke-color: #eee;
      -webkit-text-stroke-width: 0.5px;
   }
`;

export const Icon = styled.i`
   font-size: 1.4rem;
`;
