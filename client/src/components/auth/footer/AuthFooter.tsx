import React from "react";
import styled from "styled-components";

interface FooterProps {}

const MyFooter: React.FC<FooterProps> = () => {
  return (
    <Footer>
      <AuthFooter>
        <AuthFooterRow>
          <div>About</div>
          <div>Blog</div>
          <div>Jobs</div>
          <div>Help</div>
          <div>API</div>
          <div>Privacy</div>
          <div>Terms</div>
          <div>Top Accounts</div>
          <div>Hashtag</div>
          <div>Locations</div>
        </AuthFooterRow>
        <AuthFooterRow>
          <div>Beauty</div>
          <div>Dance & Performance</div>
          <div>Fitness</div>
          <div>Food & Drink</div>
          <div>Home & Garden</div>
          <div>Music</div>
          <div>Visual Arts</div>
        </AuthFooterRow>
        <AuthFooterRow>
          <div>
            English
            <select
              style={{ border: "none", color: "#ccc" }}
              name="select"
              id="select"
            ></select>
          </div>
          <div>&copy; InstagramClone from Arridha</div>
        </AuthFooterRow>
      </AuthFooter>
    </Footer>
  );
};

export default MyFooter;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  color: #8e8e8e;

  @media (min-height: 800px) {
    margin-bottom: 50px;
  }
`;

export const AuthFooter = styled.div`
  min-height: 99px;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const AuthFooterRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;

  @media (min-width: 600px) {
    width: 600px;
  }

  div {
    font-size: 10px;
    color: #8e8e8e;
    @media (min-width: 600px) {
      font-size: 12px;
    }
  }
`;
