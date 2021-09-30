import styled from "styled-components";
import { Link } from "react-router-dom";

interface FormGroupProps {
  aa_bigInput?: boolean;
  aa_bigLabel?: string;
}

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  justify-content: start;
  margin: 15px 0;

  label {
    display: block;
    font-weight: 600;
    width: 200px;
    text-align: right;
    padding-top: 5px;
    font-size: ${(props) => (props.aa_bigLabel ? props.aa_bigLabel : "15px")};
  }
`;

export const ForgotPasswordLink = styled(Link)`
  text-decoration: none;
  color: #2f95f6;
  margin-left: 30px;
  font-weight: bold;
  font-size: 15px;
`;

export const ButtonArea = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    color: #0095f6;
    font-weight: bold;
    font-size: 15px;
  }
`;

interface InputAreaProps {
  aa_bigInput?: boolean;
}

export const InputArea = styled.div<InputAreaProps>`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 10px;
    font-size: 13px;
    color: #8e8e8e;
    margin-left: 30px;
    letter-spacing: 1.3;
    line-height: 1.4;

    span {
      font-weight: 600;
      display: block;
    }
  }

  input {
    outline: none;
    margin-left: 30px;
    display: block;
    font-size: ${(props) => (props.aa_bigInput ? "1.1rem" : "15px")};
    padding: ${(props) => (props.aa_bigInput ? "10px" : "8px")};
    width: 100%;
    border-radius: ${(props) => (props.aa_bigInput ? "10px" : "3px")};
    border: 1px solid #dbdbdb;

    &:focus {
      border-radius: ${(props) => (props.aa_bigInput ? "10px" : "3px")};
      border: 1px solid #aaa;
    }
  }

  textarea {
    margin-left: 30px;
    display: block;
    font-size: 15px;
    padding: 8px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    outline: none;

    &:focus {
      border: 1px solid #aaa;
    }
  }
`;

export const AppWebSiteContainer = styled.div`
  margin: 68px 50px 38px 68px;

  p {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 38px;
  }
`;

export const AppWebsiteMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  position: relative;
`;

interface AppMenuProps {
  isActive?: boolean;
}

export const AppWebMenu = styled.div<AppMenuProps>`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  border-bottom: ${(props) => props.isActive && "1px solid #333"};
  padding-bottom: ${(props) => props.isActive && "16.5px"};
  z-index: 1;
  margin-top: ${(props) => (props.isActive ? "0px" : "-16px")};
`;

export const HorizontalLine = styled.div`
  z-index: 0;
  position: absolute;
  top: 35px;
  width: 100%;
  height: 1px;
  background: #eee;
`;

interface InfoProps {
  aa_show?: boolean;
}

export const Info = styled.span<InfoProps>`
  display: ${(props) => (props.aa_show ? "block" : "none")};
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 1.5;
  font-weight: 300;
  margin-bottom: 40px;
`;

export const InfoBold = styled.h4`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 400;
`;
