import React, { ReactNode } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";
import "./Layout.scss";
interface DynamicLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<DynamicLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <div className="grid-2">
        <div className="col-1_sm-1_md-1_lg-1 padding">
          <div className="sidebar margin">
            <SideBar />
          </div>
        </div>
        <div className="col-11_sm-11_md_11_lg-11 pr-38">
          {props.children}
          <InfoSidebar />
        </div>
      </div>
    </>
  );
};

export default Layout;
