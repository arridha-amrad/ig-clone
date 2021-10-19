import React from "react";
import IGText from "../../images/ig2.svg";
import { Link } from "react-router-dom";
import { Nav, NavContainer } from "./AppBar";

interface AuthAppBarProps {}

const AuthAppBar: React.FC<AuthAppBarProps> = () => {
   return (
      <Nav>
         <NavContainer>
            <div>
               <Link to="/">
                  <img
                     src={IGText}
                     style={{ height: "30px" }}
                     alt="instagram"
                  />
               </Link>
            </div>
         </NavContainer>
      </Nav>
   );
};

export default AuthAppBar;
