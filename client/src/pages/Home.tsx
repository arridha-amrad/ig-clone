import React from "react";
import HomeProfile from "../components/HomeProfile";
import HomeFooter from "../components/HomeFooter";
import SuggestionUser from "../components/HomeSuggestedUsers";
import { VSpacer } from "../styledComponents/spacer-el";
import UserPost from "../components/HomePost";
import { MyContainer } from "../styledComponents/container-el";
import Story from "../components/Story";
import MainWrapper from "../components/MainWrapper";
import styled from "styled-components";

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

const HomeGrid = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-gap: 32px;
    grid-template-areas: "wrapperLeft wrapperRight";
    overflow: hidden;
    grid-template-columns: 6fr 3fr;
  }
`;

const WrapperLeft = styled.div`
  grid-area: wrapperLeft;
  overflow-x: auto;
`;

const WrapperRight = styled.div`
  grid-area: wrapperRight;
  height: 100vh;
  display: none;
  padding: 0 5px;

  @media (min-width: 1000px) {
    display: block;
  }
`;

const SuggestionBox = styled.div`
  height: 28px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: #8e8e8e;
  font-weight: 600;

  p {
    color: #1a1a1b;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
  }
`;
