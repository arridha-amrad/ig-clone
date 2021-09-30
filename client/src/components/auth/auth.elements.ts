import styled from "styled-components";

export const Outer = styled.div`
  height: 100%;
  width: 100vw;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AuthContainer = styled.div`
  max-height: 650px;
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthWrapper = styled.div`
  display: flex;
  max-width: 935px;
  width: 100%;
  height: 650px;
`;

export const AuthWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 935px;
  width: 100%;
  height: 584px;
`;

export const AuthOrText = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  position: relative;
`;

interface OrTextProps {
  aa_bg?: string;
}
export const OrText = styled.span<OrTextProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.aa_bg || "#fff"};
  padding: 0 1rem;
  color: #ccc;
  font-size: 14px;
  font-weight: 600;
`;

export const AuthForm = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 100%;
  height: 100%;
  padding: 2rem 0px;

  @media (min-width: 940px) {
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 31px;
  }
`;
export const AuthForm2 = styled(AuthForm)`
  justify-content: center;
  @media (min-width: 940px) {
    align-items: center;
  }
`;

export const AuthQuestion = styled.div`
  display: flex;
  height: 63px;
  align-items: center;
  font-size: 15px;
`;

export const AuthFormOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  border: 1px solid #ccc;
  z-index: 99;
  background-color: #fff;
`;

export const AuthFormOuter2 = styled(AuthFormOuter)`
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

export const AuthTitle = styled.div`
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 50px;
  }
`;

export const AuthFormAreaOne = styled.div`
  padding: 20px 0px 10px 0;
  width: 270px;
`;

export const BackToLoginContainer = styled.div`
  border: 1px solid #ccc;
  width: 388px;
  border-radius: 0 0 3px 3px;
  z-index: 99;
  margin-top: -5px;
  background-color: #fafafa;
`;
