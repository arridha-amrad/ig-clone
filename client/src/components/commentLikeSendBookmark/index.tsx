import React from "react";
import { CardActions, CoLiSeWrapper } from "../home/posts/HomePost.elements";
import CommentIcon from "../../images/card/chat.svg";
import SendIcon from "../../images/card/send_plane.svg";
import BookmarkIcon from "../../images/card/bookmark.svg";
import LikeIcon from "../../images/card/heart.svg";

interface CommentLikeSendBookmarkProps { }

const CommentLikeSendBookmark: React.FC<CommentLikeSendBookmarkProps> = () => {
  return (
    <CardActions>
      <CoLiSeWrapper>
        <img src={LikeIcon} alt="like" />
        <img src={CommentIcon} alt="comment" />
        <img src={SendIcon} alt="send" />
      </CoLiSeWrapper>
      <img src={BookmarkIcon} alt="bookmark" />
    </CardActions>
  )
}

export default CommentLikeSendBookmark