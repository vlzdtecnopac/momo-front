import AlertsTable from "../../components/Table/AlertsTable/AlertsTable";
import Layout from "../../includes/layout/Layout";
import "./AlertsPage.scss";
import "./../dashboard/DashboardPage.scss";

function AlertsPage() {
  return (
    <Layout>
      <AlertsTable />
    </Layout>
  );
}
export default AlertsPage;
