import React from "react";
import { ForgotPasswordLink, FormGroup } from "./AccountForm.elements";

interface AccountLinkProps {
  text: string;
  link: string;
}

const AccountLink: React.FC<AccountLinkProps> = ({ text, link }) => {
  return (
    <FormGroup>
      <label></label>
      <ForgotPasswordLink to={link}>{text}</ForgotPasswordLink>
    </FormGroup>
  );
};

export default AccountLink;
