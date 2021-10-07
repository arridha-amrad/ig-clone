import { FC, ReactNode } from "react";
import { LinkBold } from "../styledComponents/link-el";
import { VSpacer } from "../styledComponents/spacer-el";
import MyAuthCarousel from "./AuthCarousel";
import MyFooter from "./AuthFooter";
import AppPlayStore from "./auth/getApp/AppPlayStore";

import styled from "styled-components";

interface AuthPageProps {
  question: string;
  link: string;
  url: string;
  children: ReactNode;
  steps?: string[];
  isWithCarousel: boolean;
}

const AuthPage: FC<AuthPageProps> = ({
  children,
  link,
  question,
  url,
  isWithCarousel,
}) => {
  return (
    <AuthPageArea>
      <MainArea>
        <FormAuthAndCarouselContainer>
          {isWithCarousel && <MyAuthCarousel />}
          <FormAuth>
            <Paper>{children}</Paper>
            <VSpacer />
            <Paper>
              <AuthQuestion>
                {question}&nbsp;<LinkBold to={url}>{link}</LinkBold>
              </AuthQuestion>
            </Paper>
            <VSpacer aa_length="20px" />
            <AppPlayStore />
          </FormAuth>
        </FormAuthAndCarouselContainer>
      </MainArea>
      <MyFooter />
    </AuthPageArea>
  );
};

export default AuthPage;

export const AuthPageArea = styled.div`
  width: 100vw;
  min-height: 100%;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
`;

export const MainArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 32px 0;
  width: 100%;
  height: 100%;
`;

const FormAuthAndCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormAuth = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 940px) {
    padding: 0 30px;
  }
`;

const AuthQuestion = styled.div`
  display: flex;
  height: 63px;
  align-items: center;
  font-size: 15px;
`;

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 40px;
  justify-content: center;
  align-items: center;
  width: 350px;
  border: 1px solid #ccc;
  z-index: 99;
  background-color: #fff;

  form {
    width: 100%;
  }
`;

export const AuthTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 15px;

  p {
    width: 270px;
    text-align: center;

    span {
      color: #03a9f4;
      cursor: pointer;
    }
  }

  .title {
    font-weight: 500;
    font-size: 1.1rem;
    margin: 20px 0;
  }

  img {
    height: 50px;
  }
`;
