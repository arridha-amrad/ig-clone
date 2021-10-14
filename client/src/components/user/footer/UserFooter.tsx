import React from "react";
import styled from "styled-components";

interface UserFooterProps {}

const UserFooter: React.FC<UserFooterProps> = () => {
  return (
    <Footer>
      <span>About</span>
      <span>Blog</span>
      <span>Jobs</span>
      <span>Help</span>
      <span>API</span>
      <span>Privacy</span>
      <span>Terms</span>
      <span>Top Accounts</span>
      <span>Hashtags</span>
      <span>Location</span>
      <CopyrightWrapper>
        <p>English</p>
        <Selection name="select" id="select"></Selection>
        <p>
          &copy; {new Date().getFullYear()} Instagram_clone from ArridhaAmrad
        </p>
      </CopyrightWrapper>
    </Footer>
  );
};

export default UserFooter;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  color: #8e8e8e;
  font-size: 12px;
  padding-top: 2rem;
  padding-bottom: 4rem;

  span {
    padding: 0 10px;
    line-height: 1.7;
  }
`;

const CopyrightWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const Selection = styled.select`
  border: none;
  outline: none;
  background-color: transparent;
  color: #8e8e8e;
  margin-right: 5px;
`;
