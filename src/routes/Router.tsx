import LoginPage from "../pages/login/LoginPage";
import WelcomePage from "../pages/welcome/WelcomePage";
import ConectedPage from "../pages/conected/ConectedPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { createBrowserRouter } from "react-router-dom";

import InventoryPage from "../pages/inventoryPage/InventoryPage";
import AlertsPage from "../pages/alertsPage/AlertsPage";
import ConfigPage from "../pages/configPage/ConfigPage";

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
    path: "/config-page",
    element: <ConfigPage />,
  },
  {
    path: "/alerts-page",
    element: <AlertsPage />,
  },
  {
    path: "/inventory-page",
    element: <InventoryPage />,
  },
]);

export default BrowserRoutes;
