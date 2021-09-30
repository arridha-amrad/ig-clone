import { Link } from "react-router-dom";
import styled from "styled-components";

interface FormGroupProps {
  aa_bigInput?: boolean;
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
    font-size: ${(props) => (props.aa_bigInput ? "1rem" : "15px")};
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

interface ButtonProps {
  readonly aa_bg?: string;
  aa_width?: string;
  readonly aa_isFullWidth?: boolean;
  aa_height?: string;
  aa_isLoading?: boolean;
  aa_color?: string;
  aa_fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.aa_bg || "#03a9f4"};
  color: ${(props) => props.aa_color || "#fff"};
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  width: ${(props) =>
    props.aa_isFullWidth ? "100%" : props.aa_width ? props.aa_width : "120px"};
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: unset;
    background: #b8defb;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  text-decoration: none;
  color: #2f95f6;
  margin-left: 30px;
  font-weight: bold;
  font-size: 15px;
`;

export const SimilarAccountWarningArea = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 30px;

  p {
    width: 300px;
    font-weight: 600;
    margin-left: 10px;
    font-size: 15px;
  }
`;
