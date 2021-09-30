import React from "react";
import StoriesAPI from "../../../data/stories.json";
import {
  HomeStoryContainer,
  ImgStory,
  ImgStoryWrapper,
  StoryWrapper,
} from "./story.elements";

interface StoryProps { }

const Story: React.FC<StoryProps> = () => {
  return (
    <HomeStoryContainer>
      {StoriesAPI.map((story, index) => (
        <StoryWrapper key={index}>
          <ImgStoryWrapper>
            <ImgStory src={story.image} alt="story" />
          </ImgStoryWrapper>
          <p>{story.username}</p>
        </StoryWrapper>
      ))}
    </HomeStoryContainer>
  );
};

export default Story;
