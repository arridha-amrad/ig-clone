import React, { useEffect, useState } from "react";
import AccountData from "./UserInfo";
import ProfileMenus from "./PostMenu";
import UserFooter from "./UserFooter";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { PostData } from "../dto/UserDTO";
import MainWrapper from "./MainWrapper";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/AxiosInterceptors";
import Avatar from "./Avatar";
import { MyContainer } from "../styledComponents/container-el";
import { SET_POSTS } from "../redux/reduxTypes/PostActionType";

interface UserContainerProps {
   children: React.ReactNode;
}

export interface IUserData {
   bio: string;
   username: string;
   isAuthenticatedUser: boolean;
   followers: number;
   followings: number;
   fullName: string;
   website: string;
   imageURL: string;
}

const UserContainer: React.FC<UserContainerProps> = ({ children }) => {
   const [userData, setUserData] = useState<IUserData>({
      bio: "",
      username: "",
      isAuthenticatedUser: false,
      followers: 0,
      followings: 0,
      fullName: "",
      website: "",
      imageURL: "",
   });

   const [posts, setPosts] = useState<PostData[]>([]);

   const [loading, setLoading] = useState(false);

   const params = useParams<{ username: string }>();

   const { authenticatedUser } = useSelector((state: RootState) => state.auth);

   const dispatch = useDispatch();

   useEffect(() => {
      let mounted = true;
      setLoading(true);
      async function fetchUserAndPosts() {
         try {
            const res = await axiosInstance.get(`/user/${params.username}`);
            if (mounted) {
               setUserData({
                  ...userData,
                  ...res.data.user,
               });
               setPosts(res.data.posts);
               dispatch({
                  type: SET_POSTS,
                  payload: res.data.posts,
               });
               setLoading(false);
            }
         } catch (err) {
            console.log(err);
            setLoading(false);
         }
      }
      fetchUserAndPosts();
      return function cleanup() {
         mounted = false;
      };
      // eslint-disable-next-line
   }, [params.username]);

   if (loading) {
      return <Loading />;
   } else {
      return (
         <>
            <MainWrapper>
               <ProfileContainer>
                  <Header>
                     <AccountWrapper>
                        <Avatar username={userData.username} imageURL={userData.imageURL} />
                        <AccountDataWrapper>
                           <AccountData
                              isAuthenticatedUser={userData.username === authenticatedUser.username}
                              userData={userData}
                              postsData={posts}
                           />
                        </AccountDataWrapper>
                     </AccountWrapper>

                     {/* This line appears for min-width 736px */}
                     <AccountWrapper2>
                        <Name>{userData.fullName}</Name>
                        <Bio>{userData.bio}</Bio>
                        <Web>{userData.website}</Web>
                     </AccountWrapper2>

                     <PostFollowerFollowingArea2>
                        <PostFoll2>
                           <Total2>{posts.length}</Total2>
                           <Menu2>Posts</Menu2>
                        </PostFoll2>
                        <PostFoll2>
                           <Total2>{userData.followers}</Total2>
                           <Menu2>Followers</Menu2>
                        </PostFoll2>
                        <PostFoll2>
                           <Total2>{userData.followings}</Total2>
                           <Menu2>Followings</Menu2>
                        </PostFoll2>
                     </PostFollowerFollowingArea2>
                     {/* This line appears for min-width 736px */}
                  </Header>

                  <HorizontalLine />
                  <ProfileMenus data={userData} />
                  {children}
                  <UserFooter />
               </ProfileContainer>
            </MainWrapper>
         </>
      );
   }
};

export default UserContainer;

export const ProfileContainer = styled(MyContainer)`
   @media (min-width: 600px) {
      width: 100%;
   }
`;

export const HorizontalLine = styled.div`
   height: 0px;
   width: 95%;
   background-color: #ccc;
   margin: 0 auto;
   position: relative;
   padding: 0 20px;

   @media (min-width: 736px) {
      height: 1px;
   }

   @media (min-width: 935px) {
      width: 100%;
   }
`;

const AccountWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 5fr;
   padding: 20px 20px;

   @media (min-width: 736px) {
      grid-template-columns: 2fr 4fr;
      padding: 0 0;
   }
`;

const AccountWrapper2 = styled.div`
   margin: 0px 20px 20px;
   display: block;

   @media (min-width: 736px) {
      display: none;
   }
`;

const Name = styled.p`
   font-weight: 600;
   line-height: 1.9;
   display: block;
`;

const Bio = styled.p`
   line-height: 1.6;
   display: block;
`;

const Web = styled.p`
   font-weight: 600;
   color: #00376b;
   display: block;
`;

const AccountDataWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
`;

const Header = styled.div`
   margin-bottom: 0;
   @media (min-width: 736px) {
      margin-bottom: 44px;
   }
`;

const PostFollowerFollowingArea2 = styled.div`
   height: 61px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   border: 1px solid #dbdbdb;

   @media (min-width: 736px) {
      display: none;
   }
`;

const PostFoll2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Total2 = styled.p`
   font-weight: 700;
`;

const Menu2 = styled.p`
   color: #8e8e8e;
`;
