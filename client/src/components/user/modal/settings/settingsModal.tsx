import { ButtonLink, Divider, ModalWrapper2 } from "./settingsModal.element";

interface SettingsOptionsProps {
  isShow: boolean;
}

const SettingsOptions: React.FC<SettingsOptionsProps> = ({ isShow }) => {
  return (
    <>
      <ModalWrapper2 isShow={isShow}>
        <ButtonLink to="/accounts/change-password">Change Password</ButtonLink>
        <Divider />
        <ButtonLink to="/accounts/change-password">Nametag</ButtonLink>
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
