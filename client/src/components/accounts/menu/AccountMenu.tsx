import React from "react";
import { AccountMenuLink } from "./AccountMenu.elements";

interface AccountMenuProps {}

const AccountMenu: React.FC<AccountMenuProps> = () => {
  return (
    <>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/edit"
      >
        Edit Profile
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/change-password"
      >
        Change Password
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/app-websites"
      >
        App and Websites
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/email-sms"
      >
        Email and SMS
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/push-notifications"
      >
        Push Notifications
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/manage-contacts"
      >
        Manage Contacts
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/privacy-security"
      >
        Privacy and Security
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/login-activity"
      >
        Login Activity
      </AccountMenuLink>
      <AccountMenuLink
        className="item"
        activeClassName="active"
        to="/accounts/emails-from-instagram"
      >
        Emails from Instagram
      </AccountMenuLink>
    </>
  );
};

export default AccountMenu;
