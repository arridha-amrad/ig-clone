import { FC } from "react";
import styled from "styled-components";
import { Button, Icon } from "./LikeButton";

interface BookMarkButtonProps {
   postId: string;
   isBookmark: boolean;
}

const BookmarkButton: FC<BookMarkButtonProps> = ({ postId, isBookmark }) => {
   const addToBookmark = () => {
      console.log("postId :", postId);
   };
   return (
      <Button2 onClick={addToBookmark}>
         {isBookmark ? (
            <Icon className="fas fa-bookmark"></Icon>
         ) : (
            <Icon className="far fa-bookmark outlined"></Icon>
         )}
      </Button2>
   );
};

export default BookmarkButton;

const Button2 = styled(Button)`
   margin-right: -10px;
`;
