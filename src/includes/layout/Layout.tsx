import React, { ReactNode } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";

interface DynamicLayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<DynamicLayoutProps> = (props) => {
  return (
    <>
      <Header />
      <div className="dashboard-page">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">{props.children}</div>
        <InfoSidebar />
      </div>
    </>
  );
};

export default Layout;
