import InventoryTable from "../../components/Table/InventoryTable/InventoryTable";
import Layout from "../../includes/layout/Layout";
import "./../dashboard/DashboardPage.scss";

function InventoryPage() {
  return (
    <Layout>
      <InventoryTable />
    </Layout>
  );
}
export default InventoryPage;
