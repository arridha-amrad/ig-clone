import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { PostCard } from "../components/HomePost";
import MainWrapper from "../components/MainWrapper";
import Post from "../components/Post";
import axiosInstance from "../utils/AxiosInterceptors";

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
                  <Date>Uploaded at : {post.createdAt}</Date>
               </ImageArea>
               <DetailsArea></DetailsArea>
            </Flex>
         </Container>
      </MainWrapper>
   );
};
export default PostDetail;

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
   display: flex;
   flex-grow: 1;
   border-left: 1px solid #ccc;
`;

const Container = styled.div`
   display: block;
   margin: 0 auto;
   width: 100%;
   max-width: 1100px;
   border: 1px solid #ccc;
   margin-bottom: 2rem;
   overflow: auto;
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
