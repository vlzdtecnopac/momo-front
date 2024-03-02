import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LazyLoginPage = lazy(() => import('../pages/login/LoginPage'));
const LazyWelcomePage = lazy(() => import('../pages/welcome/WelcomePage'));
const LazyConectedPage = lazy(() => import('../pages/conected/ConectedPage'));
const LazyDashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
const LazyInventoryPage = lazy(() => import('../pages/inventoryPage/InventoryPage'));
const LazyAlertsPage = lazy(() => import('../pages/alertsPage/AlertsPage'));
const LazyConfigPage = lazy(() => import('../pages/configPage/ConfigPage'));
const LazyFullScreen = lazy(() => import('../pages/fullScreen/FullScreen'));
const LazyFullScreenAlerts = lazy(() => import('../pages/fullScreenAlerts/FullScreenAlerts'));
const LazyAlertModal = lazy(() => import('../components/AlertModal/AlertModal'));
const LazyNotFound = lazy(() => import('../pages/404/404'));

const BrowserRoutes = createBrowserRouter([
  { path: "/", element: <Suspense fallback={<div>Loading...</div>}><LazyLoginPage /></Suspense> },
  { path: "/login", element: <Suspense fallback={<div>Loading...</div>}><LazyLoginPage /></Suspense> },
  { path: "/welcome", element: <Suspense fallback={<div>Loading...</div>}><LazyWelcomePage /></Suspense> },
  { path: "/success", element: <Suspense fallback={<div>Loading...</div>}><LazyConectedPage /></Suspense> },
  { path: "/dashboard", element: <Suspense fallback={<div>Loading...</div>}><LazyDashboardPage /></Suspense> },
  { path: "/config-page", element: <Suspense fallback={<div>Loading...</div>}><LazyConfigPage /></Suspense> },
  { path: "/alerts-page", element: <Suspense fallback={<div>Loading...</div>}><LazyAlertsPage /></Suspense> },
  { path: "/inventory-page", element: <Suspense fallback={<div>Loading...</div>}><LazyInventoryPage /></Suspense> },
  { path: "/full-screen", element: <Suspense fallback={<div>Loading...</div>}><LazyFullScreen /></Suspense> },
  { path: "/full-alerts", element: <Suspense fallback={<div>Loading...</div>}><LazyFullScreenAlerts /></Suspense> },
  {
    path: "/alert",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAlertModal units="5" product="Leche deslactosada santa clara 2 litros" state="danger" />
      </Suspense>
    ),
  },
  { path: "*", element: <Suspense fallback={<div>Loading...</div>}><LazyNotFound /></Suspense> },
]);

export default BrowserRoutes;