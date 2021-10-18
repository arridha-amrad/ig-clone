import styled from "styled-components";
import MainWrapper from "../components/MainWrapper";

const PostDetail = () => {
  return (
    <MainWrapper>
      <Container></Container>
    </MainWrapper>
  );
};
export default PostDetail;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
`;
