import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Tabs from "../../components/Tabs/Tabs";
import "./DashboardPage.scss";


function DashboardPage() {
  return (
    <>
     <Header />
       <div className="dashboard-page">
       <div className="sidebar">
          <SideBar />
        </div> 
        <div className="content">
          <Tabs />
        </div>
      </div>
    </>
  
  );
}
export default DashboardPage;
