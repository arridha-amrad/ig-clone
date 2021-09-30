import React, { useEffect } from "react";
import { RESET_MESSAGE } from "../../../redux/reduxReducers/MessageReducer";
import store from "../../../redux/Store";
import { MyContainer } from "../../../styledComponents/container-el";
import { VSpacer } from "../../../styledComponents/spacer-el";
import AppBar from "../../appBar/AppBar";
import UserFooter from "../../user/footer/UserFooter";
import AccountMenu from "../menu/AccountMenu";
import {
  AccountsWrapper,
  AccountsLeft,
  AccountsRight,
} from "./AccountContainer.elements";

interface AccountContainerProps {}

const AccountContainer: React.FC<AccountContainerProps> = ({ children }) => {
  useEffect(() => {
    store.dispatch({ type: RESET_MESSAGE });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AppBar />
      <VSpacer aa_length="90px" />
      <MyContainer>
        <AccountsWrapper>
          <AccountsLeft>
            <AccountMenu />
            <VSpacer aa_length="70px" />
          </AccountsLeft>
          <AccountsRight>{children}</AccountsRight>
        </AccountsWrapper>
        <UserFooter />
      </MyContainer>
    </>
  );
};

export default AccountContainer;
