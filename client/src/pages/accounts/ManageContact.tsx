import React from "react";
import AccountContainer from "../../components/AccountContainer";

interface ManageContactProps { }

const ManageContact: React.FC<ManageContactProps> = () => {
  document.title = "Manage Contact";
  return (
    <AccountContainer>
      <div>Manage Contacts</div>
    </AccountContainer>
  );
};

export default ManageContact;
