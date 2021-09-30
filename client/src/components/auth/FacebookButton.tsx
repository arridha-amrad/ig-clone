import React from "react";
import styled from "styled-components";

interface FacebookButtonProps {
  isRegisterPage?: boolean;
}
const FacebookButton: React.FC<FacebookButtonProps> = ({
  isRegisterPage = false,
}) => {
  return (
    <FButton isRegisterPage={isRegisterPage}>
      <i className="fab fa-facebook-square"></i>
      <p>Log in with Facebook</p>
    </FButton>
  );
};

export default FacebookButton;

interface FButtonProps {
  isRegisterPage?: boolean;
}

export const FButton = styled.div<FButtonProps>`
  display: flex;
  height: 35px;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) =>
    props.isRegisterPage ? "var(--lightBlue)" : "#fff"};
  justify-content: center;
  outline: none;
  border: none;
  margin: 12px 0;

  i {
    font-size: 25px;
    color: ${(props) => (props.isRegisterPage ? "#fff" : "var(--darkBlue)")};
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => (props.isRegisterPage ? "#fff" : "var(--darkBlue)")};
    margin-left: 8px;
  }
`;
