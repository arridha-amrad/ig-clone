import React from "react";
import { CopyrightWrapper, Selection, Footer } from "./userFooter.elements";

interface UserFooterProps { }

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
        <p>&copy; 2021 Instagram_clone from ArridhaAmrad</p>
      </CopyrightWrapper>
    </Footer>
  )
}

export default UserFooter