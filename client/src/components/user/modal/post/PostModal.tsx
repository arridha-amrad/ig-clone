import React, { useRef, useCallback, useEffect } from "react";
import {
  // Author,
  // Avatar,
  // AvatarWrapper,
  // CaptionArea,
  // Captions,
  CloseWrapper,
  // CommentArea,
  ModalBackground,
  ModalWrapper,
  // PostAuthorWrapper,
  // PostBody,
  PostDetails,
  PostImage,
  PostImageWrapper,
  // Comment,
  // Username,
  // CommentUsername,
  // LikeButton,
  // TimeLikeReplyArea,
  // PostAction,
  // TotalLikes,
  // PostingDate,
  // InputArea,
  // EmojiArea,
  // Input,
  // Submitbutton,
  // ButtonLike,
  // ButtonComment,
  // ButtonSend,
  // ButtonSaved,
} from "./postModal.element";
// import SmileIcon from "./smile.svg";

interface MyModalPostProps {
  imageURL: string;
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyModalPost: React.FC<MyModalPostProps> = ({
  imageURL,
  setShow,
  isShow,
}) => {
  const modalRef = useRef();
  const ToggleModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShow(false);
    }
  };

  const keyPress = useCallback(
    (e: any) => {
      if (e.key === "Escape" && isShow) {
        setShow(false);
      }
    },
    [setShow, isShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {isShow && (
        <ModalBackground ref={modalRef} onClick={ToggleModal}>
          <CloseWrapper onClick={() => setShow(false)}>
            <i aria-hidden className="fas fa-times"></i>
          </CloseWrapper>

          <ModalWrapper>
            <PostImageWrapper>
              <PostImage src={imageURL} />
            </PostImageWrapper>
            <PostDetails></PostDetails>
          </ModalWrapper>

          {/* <PostImageWrapper>
              <PostImage src={imageURL} />
            </PostImageWrapper>
            <PostDetails>
              <PostAuthorWrapper>
                <Author>
                  <AvatarWrapper>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Yvw0rBQ-nbYP4LyPrOJE_dAvfu_bU5Hz2A&usqp=CAU" />
                  </AvatarWrapper>
                  <Username to="/">square_pants</Username>
                </Author>
                <i aria-hidden className="fas fa-ellipsis-h"></i>
              </PostAuthorWrapper>

              <PostBody>
                <CaptionArea>
                  <AvatarWrapper>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Yvw0rBQ-nbYP4LyPrOJE_dAvfu_bU5Hz2A&usqp=CAU" />
                  </AvatarWrapper>
                  <Captions>
                    <div>
                      <Username to="/">square_pants</Username>
                      <span>
                        Vestibulum molestie ex ac justo sollicitudin, eget
                        mollis nisi gravida. Quisque sit amet rhoncus nisl.
                        Praesent et convallis libero. Pellentesque viverra urna
                        arcu.
                      </span>
                    </div>
                    <p>9d</p>
                  </Captions>
                </CaptionArea>

                <CommentArea>
                  <AvatarWrapper>
                    <Avatar src="https://www.wikihow.com/images/e/e8/Draw-Sandy-Cheeks-from-SpongeBob-SquarePants-Step-9.jpg" />
                  </AvatarWrapper>
                  <Comment>
                    <CommentUsername>
                      <Username to="/">square_pants</Username>
                      <span>
                        Vestibulum molestie ex ac justo sollicitudin, eget
                        mollis nisi gravida. Quisque sit amet rhoncus nisl.
                        Praesent et convallis libero. Pellentesque viverra urna
                        arcu.
                      </span>
                    </CommentUsername>
                    <TimeLikeReplyArea>
                      <p>9d</p>
                      <h5>1 Like</h5>
                      <h5>Reply</h5>
                    </TimeLikeReplyArea>
                  </Comment>
                  <LikeButton>
                    <i aria-hidden className="far fa-heart"></i>
                  </LikeButton>
                </CommentArea>
                <CommentArea>
                  <AvatarWrapper>
                    <Avatar src="https://www.wikihow.com/images/e/e8/Draw-Sandy-Cheeks-from-SpongeBob-SquarePants-Step-9.jpg" />
                  </AvatarWrapper>
                  <Comment>
                    <CommentUsername>
                      <Username to="/">square_pants</Username>
                      <span>
                        Vestibulum molestie ex ac justo sollicitudin, eget
                        mollis nisi gravida. Quisque sit amet rhoncus nisl.
                        Praesent et convallis libero. Pellentesque viverra urna
                        arcu.
                      </span>
                    </CommentUsername>
                    <TimeLikeReplyArea>
                      <p>9d</p>
                      <h5>1 Like</h5>
                      <h5>Reply</h5>
                    </TimeLikeReplyArea>
                  </Comment>
                  <LikeButton>
                    <i aria-hidden className="far fa-heart"></i>
                  </LikeButton>
                </CommentArea>
                <CommentArea>
                  <AvatarWrapper>
                    <Avatar src="https://www.wikihow.com/images/e/e8/Draw-Sandy-Cheeks-from-SpongeBob-SquarePants-Step-9.jpg" />
                  </AvatarWrapper>
                  <Comment>
                    <CommentUsername>
                      <Username to="/">square_pants</Username>
                      <span>
                        Vestibulum molestie ex ac justo sollicitudin, eget
                        mollis nisi gravida. Quisque sit amet rhoncus nisl.
                        Praesent et convallis libero. Pellentesque viverra urna
                        arcu.
                      </span>
                    </CommentUsername>
                    <TimeLikeReplyArea>
                      <p>9d</p>
                      <h5>1 Like</h5>
                      <h5>Reply</h5>
                    </TimeLikeReplyArea>
                  </Comment>
                  <LikeButton>
                    <i aria-hidden className="far fa-heart"></i>
                  </LikeButton>
                </CommentArea>
              </PostBody>
              <PostAction>
                <div>
                  <ButtonLike>
                    <svg
                      aria-label="like"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#262626"
                      strokeWidth="1.5"
                      className="colise"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </ButtonLike>

                  <ButtonComment>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="colise"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </ButtonComment>

                  <ButtonSend>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="colise"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </ButtonSend>
                </div>

                <ButtonSaved>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#262626"
                      strokeWidth="1.5"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                </ButtonSaved>
              </PostAction>
              <TotalLikes>400 likes</TotalLikes>
              <PostingDate>4 days ago</PostingDate>
              <InputArea>
                <EmojiArea>
                  <img src={SmileIcon} alt="emoji" />
                </EmojiArea>
                <Input rows={2} placeholder="Add a comment..." />
                <Submitbutton>Post</Submitbutton>
              </InputArea>
            </PostDetails> */}
        </ModalBackground>
      )}
    </>
  );
};

export default MyModalPost;
