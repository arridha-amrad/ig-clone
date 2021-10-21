import { Link } from "react-router-dom";
import styled from "styled-components";

interface SettingsOptionsProps {
  isShow: boolean;
}

const SettingsOptions: React.FC<SettingsOptionsProps> = ({ isShow }) => {
  return (
    <>
      <ModalWrapper2 isShow={isShow}>
        <ButtonLink to="/create-new-post">Create New Post</ButtonLink>
        <Divider />
        <ButtonLink to="/accounts/change-password">Change Password</ButtonLink>
        <Divider />
        <ButtonLink to="/accounts/change-password">Name Tag</ButtonLink>
        <Divider />
        <ButtonLink to="/accounts/change-password">
          Apps and Websites
        </ButtonLink>
        <Divider />
        <ButtonLink to="/accounts/change-password">Notifications</ButtonLink>
        <Divider />
        <ButtonLink to="/accounts/change-password">
          Privacy and Security
        </ButtonLink>
        <Divider />
        <ButtonLink to="/accounts/change-password">Login Activity</ButtonLink>
        <Divider />

        <ButtonLink to="/accounts/change-password">
          Emails from Instagram
        </ButtonLink>
        <Divider />

        <ButtonLink to="/accounts/change-password">Report a Problem</ButtonLink>
        <Divider />

        <ButtonLink to="/accounts/change-password">Logout</ButtonLink>
      </ModalWrapper2>
    </>
  );
};

export default SettingsOptions;

interface ModalWrapper2Props {
  isShow: boolean;
}
const ModalWrapper2 = styled.div<ModalWrapper2Props>`
  width: 402px;
  background-color: #fff;
  border-radius: 10px;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ButtonLink = styled(Link)`
  display: block;
  width: 100%;
  height: 49px;
  text-align: center;
  padding-top: 16px;
  color: #262626;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;
