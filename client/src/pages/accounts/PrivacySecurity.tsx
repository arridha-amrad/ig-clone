import React from "react";
import AccountContainer from "../../components/accounts/container/AccountContainer";

interface PrivacySecurityProps { }

const PrivacySecurity: React.FC<PrivacySecurityProps> = () => {
  document.title = "Privacy and Security";
  return (
    <AccountContainer>
      <div>Privacy Security</div>
    </AccountContainer>
  );
};

export default PrivacySecurity;
