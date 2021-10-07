import { FC, ReactNode } from "react";
import AuthAppBar from "./auth/appBar/AuthAppBar";
import MyFooter from "./AuthFooter";
import { AuthPageArea, FormAuth, MainArea, Paper } from "./AuthPage";
import styled from "styled-components";
import { MyLinkTwo } from "../styledComponents/link-el";

interface AuthPageTwoProps {
  children: ReactNode;
}

const AuthPageTwo: FC<AuthPageTwoProps> = ({ children }) => {
  return (
    <>
      <AuthAppBar />
      <AuthPageArea>
        <MainArea>
          <FormAuthTwo>
            <PaperTwo>{children}</PaperTwo>
            <BackToLoginContainer>
              <MyLinkThree to="/">Back To Login</MyLinkThree>
            </BackToLoginContainer>
          </FormAuthTwo>
        </MainArea>
        <MyFooter />
      </AuthPageArea>
    </>
  );
};

export default AuthPageTwo;

const FormAuthTwo = styled(FormAuth)`
  justify-content: center;
  @media (min-width: 940px) {
    align-items: center;
  }
`;

const PaperTwo = styled(Paper)`
  flex-direction: column;
  width: 388px;
  padding: 20px 40px;
  margin-top: 50px;
  background: #fff;

  img {
    height: 100px;
  }

  p {
    color: #8e8e8e;
    font-size: 14px;
    text-align: center;
    width: 260px;
    line-height: 1.4;
    letter-spacing: 1.1;
  }

  h4 {
    font-weight: 600;
    padding: 10px 0;
  }
`;

const BackToLoginContainer = styled.div`
  border: 1px solid #ccc;
  width: 388px;
  border-radius: 0 0 3px 3px;
  z-index: 99;
  margin-top: -5px;
  background-color: #fafafa;
`;

const MyLinkThree = styled(MyLinkTwo)`
  display: block;
  text-align: center;
  width: inherit;
  padding: 10px 0;
  font-weight: 600;
`;
