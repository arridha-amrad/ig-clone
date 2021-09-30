import React from "react";
import { Button, ButtonArea, FormGroup } from "./AccountForm.elements";

interface AccountButtonProps {
  text: string;
  btnSize?: "big" | "small";
  isDisabled?: boolean;
}

const AccountButton: React.FC<AccountButtonProps> = ({
  text,
  children,
  btnSize,
  isDisabled = false,
}) => {
  return (
    <FormGroup>
      <label></label>
      <ButtonArea>
        <Button
          aa_fontSize="15px"
          aa_width={btnSize === "big" ? "150px" : "70px"}
          type="submit"
          disabled={isDisabled}
        >
          {text}
        </Button>
        {children && children}
      </ButtonArea>
    </FormGroup>
  );
};

export default AccountButton;
