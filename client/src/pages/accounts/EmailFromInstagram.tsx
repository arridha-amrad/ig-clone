import React from "react";
import AccountContainer from "../../components/AccountContainer";

interface EmailsFromInstagramProps {}

const EmailsFromInstagram: React.FC<EmailsFromInstagramProps> = () => {
  document.title = "Emails From Instagram";
  return (
    <AccountContainer>
      <div>Emails from instagram</div>
    </AccountContainer>
  );
};

export default EmailsFromInstagram;
