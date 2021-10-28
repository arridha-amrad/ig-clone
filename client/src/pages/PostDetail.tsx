import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { PostCard } from "../components/HomePost";
import MainWrapper from "../components/MainWrapper";
import Post from "../components/Post";
import axiosInstance from "../utils/AxiosInterceptors";
import Moment from "react-moment";
import { Link } from "react-router-dom";

interface ICop {
   _id: string;
   content: string;
   createdAt: string;
   likes: string[];
   comments: string[];
   user: IUser;
}

interface IUser {
   _id: string;
   username: string;
   imageURL: string;
}

interface IPost {
   _id: string;
   user: IUser;
   imageURL: string;
   description: string;
   comments: ICop[];
   likes: string[];
   createdAt: string;
}

const PostDetail = () => {
   const params = useParams<{ postId: string }>();

   const [post, setPost] = useState<IPost>({
      _id: "",
      comments: [],
      likes: [],
      user: {
         _id: "",
         imageURL: "",
         username: "",
      },
      description: "",
      imageURL: "",
      createdAt: "",
   });

   useEffect(() => {
      let mounted = true;
      async function fetchPostById() {
         try {
            const res = await axiosInstance.get(`/post/${params.postId}`);
            if (mounted) {
               setPost(res.data);
            }
         } catch (err) {
            console.log(err);
         }
      }
      fetchPostById();
      return function cleanup() {
         mounted = false;
      };
      // eslint-disable-next-line
   }, [params.postId]);
   return (
      <MainWrapper>
         <Container>
            <Flex>
               <ImageArea>
                  <Post
                     avatar={post.user.imageURL}
                     imageURL={post.imageURL}
                     isLiked={true}
                     postId={params.postId}
                     totalLikes={post.likes.length.toString()}
                     username={post.user.username}
                     description={post.description}
                  />
                  <Date>
                     Uploaded at : <Moment format="D MMM YYYY">{post.createdAt}</Moment>
                  </Date>
               </ImageArea>
               <DetailsArea>
                  <Comments>
                     {post.comments.map((comment) => (
                        <CommentWrapper key={comment._id}>
                           <UserWrapper>
                              <Avatar alt="avatar" src={comment.user.imageURL}></Avatar>
                              <Username to={`/${comment.user.username}`}>{comment.user.username}</Username>
                           </UserWrapper>
                           <Content>{comment.content}</Content>
                           <CommentDate>
                              <Moment format="D MMM YYYY">{comment.createdAt}</Moment>
                           </CommentDate>
                        </CommentWrapper>
                     ))}
                  </Comments>
                  <ComposeCommentArea>
                     <Input />
                     <Button type="submit">Send</Button>
                  </ComposeCommentArea>
               </DetailsArea>
            </Flex>
         </Container>
      </MainWrapper>
   );
};
export default PostDetail;

const Comments = styled.div`
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   height: 100%;
   overflow-y: scroll;
   height: calc(100% - 70px);
`;

const ComposeCommentArea = styled.div`
   height: 70px;
   display: flex;
   border-top: 1px solid #aaa;
`;

const Input = styled.textarea`
   width: 100%;
   display: block;
   padding: 8px;
   outline: none;
   border: none;
`;

const Button = styled.button`
   display: block;
   width: 60px;
   cursor: pointer;
   border: none;
   background-color: var(--lightBlue);
   color: var(--white);
`;

const CommentDate = styled.div`
   font-size: 0.65rem;
   color: var(--grey);
   margin-top: 1rem;
`;

const UserWrapper = styled.div`
   display: flex;
   align-items: center;
`;

const Avatar = styled.img`
   border-radius: 50%;
   width: 30px;
   height: 30px;
   object-fit: cover;
`;

const Username = styled(Link)`
   margin-left: 0.5rem;
   text-decoration: none;
   color: #333;
`;

const Content = styled.p`
   margin-top: 0.7rem;
`;

const CommentWrapper = styled.div`
   background-color: #eee;
   padding: 1rem;
   border-bottom: 1px solid #aaaaaa;
`;

const Date = styled.div`
   padding-left: 1rem;
   font-size: 0.88rem;
   color: var(--grey);
`;

const Flex = styled.div`
   width: 100%;
   display: flex;
`;

const DetailsArea = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   border-left: 1px solid #ccc;
`;

const Container = styled.div`
   display: block;
   margin: 0 auto;
   width: 100%;
   max-width: 1100px;
   border: 1px solid #ccc;
   overflow: auto;
   margin-bottom: 2rem;
`;

const ImageArea = styled(PostCard)`
   display: flex;
   height: 100%;
   max-height: 800px;
   flex-direction: column;
   border: none;
   max-width: 700px;
   width: 100%;
`;
