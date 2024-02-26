import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Tabs from "../../components/Tabs/Tabs";
import "./DashboardPage.scss";


function DashboardPage() {
  return (
    <div className="dashboard-page">
      <Header />
      <SideBar />
      <div className="divider">
        <Tabs />
      </div>
    </div>
  );
}
export default DashboardPage;
