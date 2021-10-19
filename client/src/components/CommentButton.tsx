import { FC } from "react";
import { Button, Icon } from "./LikeButton";

interface CommentButtonProps {
   postId: string;
}

const CommentButton: FC<CommentButtonProps> = ({ postId }) => {
   const openPost = () => {
      console.log(postId);
   };
   return (
      <Button onClick={openPost}>
         <Icon className="far fa-comment outlined"></Icon>
      </Button>
   );
};

export default CommentButton;
