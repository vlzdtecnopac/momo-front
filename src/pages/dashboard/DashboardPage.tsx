import Header from "../../includes/Header/Header";
import InfoSidebar from "../../components/InfoSidebar/InfoSidebar";
import SideBar from "../../includes/SideBar/SideBar";
import Tabs from "../../components/Tabs/OrderTabs/OrderTabs";
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
