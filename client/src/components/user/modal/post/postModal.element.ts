import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgStoryWrapper } from "../../../home/story/story.elements";

interface ModalBackgroundProps {
  ref: any;
}

export const ModalBackground = styled.div<ModalBackgroundProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 91;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const CloseWrapper = styled.div`
  position: fixed;
  cursor: pointer;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 1.8rem;
`;

export const ModalWrapper = styled.div`
  max-width: 935px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  display: flex;
  z-index: 95;
  background-color: #fff;
`;

export const PostImageWrapper = styled.div`
  width: inherit;
  height: inherit;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostDetails = styled.div`
  width: 336px;
  height: 100%;
`;

export const PostAuthorWrapper = styled.div`
  height: 73px;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled(ImgStoryWrapper)`
  width: 44px;
  height: 44px;
  margin-right: 10px;
  padding: 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  padding: 2px;
  object-fit: cover;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
`;

export const Username = styled(Link)`
  color: #262626;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostBody = styled.div`
  padding: 16px 10px;
  overflow-y: auto;
  height: 375px;
  border-bottom: 1px solid #eee;
`;

export const CaptionArea = styled.div`
  display: flex;
`;

export const CommentArea = styled.div`
  display: flex;
  position: relative;
`;

export const Captions = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 10px;

  div {
    span {
      margin-left: 10px;
    }
  }

  p {
    color: #8e8e8e;
    line-height: 3;
    margin-right: 8px;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const CommentUsername = styled.div`
  display: inline;

  span {
    margin-left: 10px;
  }
`;

export const Comment = styled(Captions)`
  width: 220px;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 12px;
`;

export const TimeLikeReplyArea = styled.div`
  display: flex;

  p {
    color: #8e8e8e;
    line-height: 3;
    margin-right: 8px;
    font-size: 12px;
    font-weight: 400;
  }

  h5 {
    color: #8e8e8e;
    line-height: 3;
    margin-right: 8px;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const PostAction = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
`;

export const ButtonLike = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  margin-right: 10px;
`;

export const ButtonComment = styled(ButtonLike)``;
export const ButtonSend = styled(ButtonLike)``;
export const ButtonSaved = styled(ButtonLike)`
  margin-right: 0px;
`;

export const TotalLikes = styled.p`
  font-size: 14px;
  padding-left: 15px;
  margin-top: -4px;
  font-weight: 600;
`;

export const PostingDate = styled.p`
  color: #8e8e8e;
  margin: 10px 0;
  padding-left: 15px;
  font-size: 12px;
`;

export const InputArea = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
`;

export const EmojiArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding-left: 15px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  margin-left: 10px;
  margin-right: 10px;

  &::placeholder {
    padding-top: 8px;
  }
`;

export const Submitbutton = styled.button`
  cursor: pointer;
  padding-right: 15px;
  font-size: 14px;
  font-weight: 600;
  width: 50px;
  height: 50px;
  color: #0095f6;
  border: none;
  outline: none;
  background: transparent;
`;
