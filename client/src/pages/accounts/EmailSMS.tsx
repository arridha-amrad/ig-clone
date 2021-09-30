import React from "react";
import AccountContainer from "../../components/accounts/container/AccountContainer";
import EmailSMS from "../../components/accounts/emailSMS/EmailSMS";

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
