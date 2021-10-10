import React from "react";
import HomeProfile from "../components/home/profile/HomeProfile";
import HomeFooter from "../components/home/footer/HomeFooter";
import SuggestionUser from "../components/home/suggestedUsers/SuggestedUsers";
import { VSpacer } from "../styledComponents/spacer-el";
import UserPost from "../components/home/posts/HomePost";
import { MyContainer } from "../styledComponents/container-el";
import Story from "../components/home/story/Story";
import {
  HomeGrid,
  WrapperLeft,
  WrapperRight,
  SuggestionBox,
} from "../components/home/home.elements";
import MainWrapper from "../components/MainWrapper";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <MainWrapper>
        <MyContainer>
          <HomeGrid>
            <WrapperLeft>
              <Story />
              <VSpacer aa_length="25px" />
              <UserPost />
            </WrapperLeft>
            <WrapperRight>
              <HomeProfile />
              <SuggestionBox>
                <div>Suggestions For You</div>
                <p>See All</p>
              </SuggestionBox>
              <VSpacer />
              <SuggestionUser />
              <HomeFooter />
            </WrapperRight>
          </HomeGrid>
        </MyContainer>
      </MainWrapper>
    </>
  );
};

export default Home;
