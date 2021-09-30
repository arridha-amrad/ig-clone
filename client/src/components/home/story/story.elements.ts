import styled from "styled-components";

export const HomeStoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 118px;
  background-color: #fff;
  border: 1px solid #ccc;
  overflow-x: auto;
  padding-right: 10px;
`;

export const StoryWrapper = styled.div`
  text-align: center;
  font-size: 12px;
  margin-left: 16px;
  width: 63px;
  p {
    line-height: 1.9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ImgStoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  border-radius: 100%;
  background-image: linear-gradient(45deg, orange, red);
`;

export const ImgStory = styled.img`
  height: 58px;
  width: 58px;
  background: #fff;
  position: relative;
  padding: 3px;
  object-fit: cover;
  border-radius: 100%;
  cursor: pointer;
`;
