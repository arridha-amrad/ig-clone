import { FC } from "react";
import AppBar from "./appBar/AppBar";

interface MainWrapperProps {
   children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
   return (
      <>
         <AppBar />
         {children}
      </>
   );
};
export default MainWrapper;
