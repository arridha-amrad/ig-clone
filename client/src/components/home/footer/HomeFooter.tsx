import React from "react";
import styled from "styled-components";

interface HomeFooterProps {}

const HomeFooter: React.FC<HomeFooterProps> = () => {
  return (
    <>
      <HomeFooterContainer>
        <div>About</div>
        <div className="dot"></div>
        <div>Help</div>
        <div className="dot"></div>
        <div>Press</div>
        <div className="dot"></div>
        <div>API</div>
        <div className="dot"></div>
        <div>Jobs</div>
        <div className="dot"></div>
        <div>Privacy</div>
        <div className="dot"></div>
        <div>Terms</div>
        <div className="dot"></div>
        <div>Locations</div>
        <div className="dot"></div>
        <div>Top Accounts</div>
        <div className="dot"></div>
        <div>Hashtags</div>
        <div className="dot"></div>
        <div>Language</div>
      </HomeFooterContainer>
      <CopyrightFooter>&copy; instagram_Clone from amrad</CopyrightFooter>
    </>
  );
};

export default HomeFooter;

const HomeFooterContainer = styled.div`
  margin-top: 20px;
  display: inline-flex;
  font-size: 10px;
  align-items: center;
  flex-wrap: wrap;
  width: inherit;
  line-height: 1.8;
  color: #c7c7c7;

  .dot {
    margin: 0 5px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #c7c7c7;
  }
`;

const CopyrightFooter = styled.div`
  font-size: 10px;
  color: #c7c7c7;
  text-transform: uppercase;
  margin-top: 20px;
`;
