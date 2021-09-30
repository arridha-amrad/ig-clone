import React, { useEffect, useState } from "react";
import AppBar from "../../appBar/AppBar";
import AccountData from "../details/UserDetails";
import ProfileMenus from "../menu/Menu";
import { SpacerFromNavbarProfile } from "../../../styledComponents/spacer-el";
import { ProfileContainer, HorizontalLine } from "./userContainer.elements";
import UserFooter from "../footer/UserFooter";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { findUserAndPostsByUsername } from "../../../redux/reduxActions/UserActions";
import { ProfilePageData } from "../../../dto/UserDTO";

interface UserContainerProps {}

const UserContainer: React.FC<UserContainerProps> = ({ children }) => {
  const [data, setData] = useState<ProfilePageData>({
    bio: "",
    username: "",
    isAuthenticatedUser: false,
    totalPosts: 0,
    totalFollowers: 0,
    totalFollowings: 0,
    fullName: "",
    website: "",
    imageURL: "",
  });

  const { authenticatedUser } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.user);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname.split("/")[1] !== authenticatedUser?.username) {
      dispatch(findUserAndPostsByUsername(location.pathname));
      setData({
        ...data,
        bio: user?.bio ?? "",
        username: user?.username ?? "",
        fullName: user?.fullName ?? "",
        isAuthenticatedUser: false,
        totalFollowers: user?.followers ?? 0,
        totalFollowings: user?.followings ?? 0,
        totalPosts: 0,
        website: user?.website ?? "",
      });
    } else {
      setData({
        ...data,
        bio: authenticatedUser.bio,
        username: authenticatedUser.username,
        fullName: authenticatedUser.fullName,
        isAuthenticatedUser: true,
        totalFollowers: authenticatedUser.followers,
        totalFollowings: authenticatedUser.followings,
        website: authenticatedUser.website,
        totalPosts: 0,
      });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AppBar />
      <SpacerFromNavbarProfile />
      <ProfileContainer>
        <AccountHeader>
          <AccountWrapper>
            <AvatarWrapper>
              <AccountAvatar src="https://deadline.com/wp-content/uploads/2016/05/spongebob.jpg?w=600&h=383&crop=1" />
            </AvatarWrapper>
            <AccountDataWrapper>
              <AccountData data={data} />
            </AccountDataWrapper>
          </AccountWrapper>

          {/* This line appears for min-width 736px */}
          <AccountWrapper2>
            <Name>{data.fullName}</Name>
            <Bio>{data.bio}</Bio>
            <Web>{data.website}</Web>
          </AccountWrapper2>

          <PostFollowerFollowingArea2>
            <PostFoll2>
              <Total2>{data.totalPosts}</Total2>
              <Menu2>Posts</Menu2>
            </PostFoll2>
            <PostFoll2>
              <Total2>{data.totalFollowers}</Total2>
              <Menu2>Followers</Menu2>
            </PostFoll2>
            <PostFoll2>
              <Total2>{data.totalFollowings}</Total2>
              <Menu2>Followings</Menu2>
            </PostFoll2>
          </PostFollowerFollowingArea2>
          {/* This line appears for min-width 736px */}
        </AccountHeader>

        <HorizontalLine />
        <ProfileMenus data={data} />
        {children}
        <UserFooter />
      </ProfileContainer>
    </>
  );
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

const AccountHeader = styled.div`
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
