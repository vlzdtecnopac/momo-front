import LoginPage from "../pages/login/LoginPage";
import WelcomePage from "../pages/welcome/WelcomePage";
import ConectedPage from "../pages/conected/ConectedPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { createBrowserRouter } from "react-router-dom";
import Tabs from "../components/Tabs/Tabs";
import Table from "../components/Table/InventoryTable";
import InventoryTable from "../components/Table/InventoryTable";
import AlertsTable from "../components/Table/AlertsTable";

const BrowserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/success",
    element: <ConectedPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/inventory-table",
    element: <InventoryTable />,
  },
  {
    path: "/alerts-table",
    element: <AlertsTable />,
  },
]);

export default BrowserRoutes;
