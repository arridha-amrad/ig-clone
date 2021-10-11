import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const AccountMenuLink = styled(NavLink)`
  height: 52px;
  width: 100%;
  display: block;
  position: relative;
  text-decoration: none;
  text-align: start;
  color: #333;
  font-size: 1rem;
  padding-left: 2rem;
  padding-top: 16px;

  &:hover {
    background-color: #fbfbfb;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 52px;
      width: 2px;
      background-color: #ccc;
    }
  }
`;

export default AccountMenu;
