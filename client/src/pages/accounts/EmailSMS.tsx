import React from "react";
import AccountContainer from "../../components/AccountContainer";
import EmailSMS from "../../components/EmailSMS";

interface EmailAndSMSProps {}

const EmailAndSMS: React.FC<EmailAndSMSProps> = () => {
  document.title = "Email and SMS";
  return (
    <AccountContainer>
      <EmailSMS />
    </AccountContainer>
  );
};

export default EmailAndSMS;
