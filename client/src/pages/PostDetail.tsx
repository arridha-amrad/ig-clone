import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import MainWrapper from "../components/MainWrapper";
import axiosInstance from "../utils/AxiosInterceptors";

interface ICop {
   _id: string;
   content: string;
   createdAt: Date;
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
   createdAt: Date;
   comments: ICop[];
   likes: string[];
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
      createdAt: new Date(),
      description: "",
      imageURL: "",
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
            <ImageArea>
               <Image src={post.imageURL} alt="post" />
            </ImageArea>
         </Container>
      </MainWrapper>
   );
};
export default PostDetail;

const Container = styled.div`
   display: flex;
   margin: 0 auto;
   width: 100%;
   height: 100%;
   max-width: 1100px;
   background-color: aliceblue;
`;

const ImageArea = styled.div`
   display: block;
`;

const Image = styled.img`
   max-width: 100%;
   height: auto;
   object-fit: cover;
`;
