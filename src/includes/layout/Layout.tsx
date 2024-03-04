import React, { ReactNode } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";

interface DynamicLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<DynamicLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <div className="grid-2">
        <div className="col-1">
          <div className="sidebar">
            <SideBar />
          </div>
        </div>
        <div className="col-11">
          {props.children}
          <InfoSidebar />
        </div>
      </div>
    </>
  );
};

export default Layout;
