import React, { useEffect } from "react";
import { RESET_MESSAGE } from "../redux/reduxReducers/MessageReducer";
import store from "../redux/Store";
import { MyContainer } from "../styledComponents/container-el";
import { VSpacer } from "../styledComponents/spacer-el";
import UserFooter from "./user/footer/UserFooter";
import AccountMenu from "./AccountMenu";
import styled from "styled-components";

interface AccountContainerProps { }

const AccountContainer: React.FC<AccountContainerProps> = ({ children }) => {
  useEffect(() => {
    store.dispatch({ type: RESET_MESSAGE });
    // eslint-disable-next-line
  }, []);
  return (
    <>
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

const AccountsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  background: #fff;
`;

const AccountsLeft = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  position: relative;

  .active {
    font-weight: 600;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 52px;
      width: 2px;
      background-color: #262626;
    }
  }
`;

const AccountsRight = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export default AccountContainer;
