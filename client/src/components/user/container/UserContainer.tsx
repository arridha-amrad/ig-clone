import React, { useEffect, useState, useRef } from "react";
import AccountData from "../details/UserDetails";
import ProfileMenus from "../menu/Menu";
import { ProfileContainer, HorizontalLine } from "./userContainer.elements";
import UserFooter from "../footer/UserFooter";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { useDispatch } from "react-redux";
import { ProfilePageData } from "../../../dto/UserDTO";
import { uploadAvatar } from "../../../redux/reduxActions/AuthActions";
import MainWrapper from "../../../components/MainWrapper";
import Loading from "../../Loading";
import { useLocation, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/AxiosInterceptors";
import { AxiosResponse } from "axios";
import {
  LOADING_POST,
  SET_POSTS,
} from "../../../redux/reduxTypes/PostActionType";

interface UserContainerProps {
  children: React.ReactNode;
}

const UserContainer: React.FC<UserContainerProps> = ({ children }) => {
  const [userData, setUserData] = useState<ProfilePageData>({
    bio: "",
    username: "",
    isAuthenticatedUser: false,
    followers: 0,
    followings: 0,
    fullName: "",
    website: "",
    imageURL: "",
    posts: [],
  });

  const [loading, setLoading] = useState(false);

  const params = useParams<{ username: string }>();

  const { authenticatedUser, isBlocked } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    if (!isBlocked) {
      axiosInstance
        .get(`/user/${params.username}`)
        .then((res: AxiosResponse<ProfilePageData>) => {
          if (mounted) {
            setUserData({
              ...userData,
              ...res.data,
              posts: res.data.posts,
            });
            dispatch({ type: LOADING_POST });
            dispatch({
              type: SET_POSTS,
              payload: res.data.posts,
            });
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return function cleanup() {
      mounted = false;
    };
    // eslint-disable-next-line
  }, [location.pathname]);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const openInputFile = () => {
    inputFileRef.current?.click();
  };
  const handleImageChange = (e: any) => {
    const file = e.target?.files[0];
    const formData = new FormData();
    formData.append("avatarFile", file);
    dispatch(uploadAvatar(formData));
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <MainWrapper>
          <ProfileContainer>
            <Header>
              <AccountWrapper>
                <AvatarWrapper
                  onClick={
                    userData.username === authenticatedUser.username
                      ? openInputFile
                      : undefined
                  }
                >
                  <AccountAvatar
                    src={
                      userData.username === authenticatedUser.username
                        ? authenticatedUser.imageURL
                        : userData.imageURL
                    }
                    alt="profile"
                  />
                  <input
                    ref={inputFileRef}
                    type="file"
                    name="avatarFile"
                    id="fileInput"
                    hidden={true}
                    onChange={handleImageChange}
                  />
                </AvatarWrapper>
                <AccountDataWrapper>
                  <AccountData
                    isAuthenticatedUser={
                      userData.username === authenticatedUser.username
                    }
                    data={userData}
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
                  <Total2>{userData.posts.length}</Total2>
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

const AvatarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;

  @media (min-width: 736px) {
    justify-content: center;
  }
`;

const AccountAvatar = styled.img`
  height: 75px;
  width: 75px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;

  @media (min-width: 736px) {
    height: 150px;
    width: 150px;
  }
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
