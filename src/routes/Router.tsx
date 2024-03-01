import LoginPage from "../pages/login/LoginPage";
import WelcomePage from "../pages/welcome/WelcomePage";
import ConectedPage from "../pages/conected/ConectedPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { createBrowserRouter } from "react-router-dom";

import InventoryPage from "../pages/inventoryPage/InventoryPage";
import AlertsPage from "../pages/alertsPage/AlertsPage";
import ConfigPage from "../pages/configPage/ConfigPage";
import FullScreen from "../pages/fullScreen/FullScreen";
import FullScreenAlerts from "../pages/fullScreenAlerts/FullScreenAlerts";
import DisplayConfig from "../components/DisplayConfig/DisplayConfig";
import Nofound from "../pages/404/404";
import ConnectedKioskos from "../components/ConnectedKioskos/ConnectedKioskos";
import CongratsModal from "../components/Congrats/CongratsModal";
import AlertModal from "../components/AlertModal/AlertModal";

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
  {
    path: "/full-screen",
    element: <FullScreen />,
  },
  {
    path: "/full-alerts",
    element: <FullScreenAlerts />,
  },
  {
    path: "/display",
    element: <DisplayConfig />,
  },
  {
    path: "/congrats",
    element: <CongratsModal />,
  },
  {
    path: "/alert",
    element: (
      <AlertModal
        units="5"
        product="
        Leche deslactosada
        santa clara 2 litros "
        state="danger"
      />
    ),
  },
  {
    path: "*",
    element: <Nofound />,
  },
]);

export default BrowserRoutes;
