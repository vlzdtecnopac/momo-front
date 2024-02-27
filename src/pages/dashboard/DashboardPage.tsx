import Header from "../../components/Header/Header";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";
import SideBar from "../../components/SideBar/SideBar";
import Tabs from "../../components/Tabs/Tabs";
import Layout from "../../includes/layout/Layout";
import "./DashboardPage.scss";


function DashboardPage() {
  return (
    <>
      <Layout>
          <Tabs />
      </Layout>
    </>
  
  );
}
export default DashboardPage;
