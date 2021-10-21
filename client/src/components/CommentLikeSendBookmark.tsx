import styled from "styled-components";
import BookmarkButton from "./BookmarkButton";
import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import SendButton from "./SendButton";

interface CommentLikeSendBookmarkProps {
  postId: string;
  isLiked: boolean;
}

const CommentLikeSendBookmark: React.FC<CommentLikeSendBookmarkProps> = ({
  postId,
  isLiked,
}) => {
  return (
    <CardActions>
      <CoLiSeWrapper>
        <LikeButton postId={postId} isLiked={isLiked} />
        <CommentButton postId={postId} />
        <SendButton />
      </CoLiSeWrapper>
      <BookmarkButton postId={postId} isBookmark={false} />
    </CardActions>
  );
};

export default CommentLikeSendBookmark;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 15px;
`;

const CoLiSeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
