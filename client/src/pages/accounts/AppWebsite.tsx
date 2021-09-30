import React from "react";
import { useState } from "react";
import {
  AppWebMenu,
  AppWebSiteContainer,
  AppWebsiteMenuContainer,
  HorizontalLine,
  Info,
  InfoBold,
} from "../../components/accounts/accounts.elements";
import AccountContainer from "../../components/accounts/container/AccountContainer";

interface AppAndWebsitesProps { }

interface MyState {
  isActive?: boolean;
  isExpired?: boolean;
  isRemoved?: boolean;
}

const AppAndWebsites: React.FC<AppAndWebsitesProps> = () => {
  document.title = "App & Website";

  const [state, setState] = useState<MyState>({
    isActive: true,
    isExpired: false,
    isRemoved: false,
  });

  const setTab = ({
    isActive = false,
    isExpired = false,
    isRemoved = false,
  }: MyState) => {
    setState({
      ...state,
      isActive: isActive,
      isExpired: isExpired,
      isRemoved: isRemoved,
    });
  };

  return (
    <AccountContainer>
      <AppWebSiteContainer>
        <p>App and Websites</p>
        <AppWebsiteMenuContainer>
          <AppWebMenu
            onClick={() => setTab({ isActive: true })}
            isActive={state.isActive}
          >
            Active
          </AppWebMenu>
          <AppWebMenu
            onClick={() => setTab({ isExpired: true })}
            isActive={state.isExpired}
          >
            Expired
          </AppWebMenu>
          <AppWebMenu
            onClick={() => setTab({ isRemoved: true })}
            isActive={state.isRemoved}
          >
            Removed
          </AppWebMenu>
          <HorizontalLine />
        </AppWebsiteMenuContainer>
        <Info aa_show={state.isActive}>
          These are apps and websites you've used Instagram to log into and have
          recently used. They can request info you chose to share with them.
        </Info>
        <Info aa_show={state.isExpired}>
          These are apps and websites you've used Instagram to log into and may
          not have used in a while. They may still have access to info you
          previously shared, but their ability to make additional requests for
          private info has expired.
        </Info>
        <Info aa_show={state.isRemoved}>
          These are apps and websites you removed from your account. This means
          they may still have access to info you previously shared, but can't
          make additional requests for private info.
        </Info>
        <InfoBold>
          You have not authorized any applications to access your Instagram
          account.
        </InfoBold>
      </AppWebSiteContainer>
    </AccountContainer>
  );
};

export default AppAndWebsites;
