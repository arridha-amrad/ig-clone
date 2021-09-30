import React from "react";
import AccountContainer from "../../components/accounts/container/AccountContainer";

interface LoginActivityProps { }

const LoginActivity: React.FC<LoginActivityProps> = () => {
  document.title = "Login Activity";
  return (
    <AccountContainer>
      <div>login activity</div>
    </AccountContainer>
  );
};

export default LoginActivity;
