import React from "react";
import AccountContainer from "../../components/accounts/container/AccountContainer";

interface PushNotificationsProps { }

const PushNotifications: React.FC<PushNotificationsProps> = () => {
  document.title = "Push Notifications";
  return (
    <AccountContainer>
      <div>Push notifications</div>
    </AccountContainer>
  );
};

export default PushNotifications;
