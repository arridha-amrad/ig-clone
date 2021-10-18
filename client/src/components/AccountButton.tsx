import React from "react";
import styled from "styled-components";
import { FormGroup, Label } from "./InlineInput";

interface AccountButtonProps {
  text: string;
  size?: "big" | "small";
  isDisabled: boolean;
}

const AccountButton: React.FC<AccountButtonProps> = ({
  text,
  children,
  size = "small",
  isDisabled,
}) => {
  return (
    <FormGroup>
      <Label></Label>
      <ButtonArea>
        <Button
          width={size === "big" ? "150px" : "70px"}
          disabled={isDisabled}
          type="submit"
        >
          {text}
        </Button>
        {children && children}
      </ButtonArea>
    </FormGroup>
  );
};

export default AccountButton;

const ButtonArea = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

interface ButtonProps {
  width: string;
}

const Button = styled.button<ButtonProps>`
  background: var(--lightBlue);
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  width: ${(props) => props.width};
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: unset;
    background: #b8defb;
  }
`;
