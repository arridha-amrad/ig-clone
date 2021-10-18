import { useState } from "react";
import AccountContainer from "../../components/AccountContainer";
import styled from "styled-components";

interface AppAndWebsitesProps {}

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

const AppWebSiteContainer = styled.div`
  margin: 68px 50px 38px 68px;

  p {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 38px;
  }
`;

const AppWebsiteMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  position: relative;
`;

interface AppMenuProps {
  isActive?: boolean;
}

const AppWebMenu = styled.div<AppMenuProps>`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  border-bottom: ${(props) => props.isActive && "1px solid #333"};
  padding-bottom: ${(props) => props.isActive && "16.5px"};
  z-index: 1;
  margin-top: ${(props) => (props.isActive ? "0px" : "-16px")};
`;

const HorizontalLine = styled.div`
  z-index: 0;
  position: absolute;
  top: 35px;
  width: 100%;
  height: 1px;
  background: #eee;
`;

interface InfoProps {
  aa_show?: boolean;
}

const Info = styled.span<InfoProps>`
  display: ${(props) => (props.aa_show ? "block" : "none")};
  font-size: 1rem;
  line-height: 1.4;
  letter-spacing: 1.5;
  font-weight: 300;
  margin-bottom: 40px;
`;

const InfoBold = styled.h4`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 400;
`;
