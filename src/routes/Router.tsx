import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoaderPage } from '../includes/loader/Loader';

export const alertPageRuta: string = "/alerts-page";
export const configPageRuta: string = "/config-page";
export const fullScreenPageAlertsRuta: string = "/full-alerts";
export const fullScreenPageRuta: string = "/full-screen";

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
  { path: "/", element: <Suspense fallback={<LoaderPage/>}><LazyLoginPage /></Suspense> },
  { path: "/login", element: <Suspense fallback={<LoaderPage/>}><LazyLoginPage /></Suspense> },
  { path: "/welcome", element: <Suspense fallback={<LoaderPage/>}><LazyWelcomePage /></Suspense> },
  { path: "/success", element: <Suspense fallback={<LoaderPage/>}><LazyConectedPage /></Suspense> },
  { path: "/dashboard", element: <Suspense fallback={<LoaderPage/>}><LazyDashboardPage /></Suspense> },
  { path: configPageRuta, element: <Suspense fallback={<LoaderPage/>}><LazyConfigPage /></Suspense> },
  { path: alertPageRuta, element: <Suspense fallback={<LoaderPage/>}><LazyAlertsPage /></Suspense> },
  { path: "/inventory-page", element: <Suspense fallback={<LoaderPage/>}><LazyInventoryPage /></Suspense> },
  { path: fullScreenPageRuta, element: <Suspense fallback={<LoaderPage/>}><LazyFullScreen /></Suspense> },
  { path: "/full-alerts", element: <Suspense fallback={<LoaderPage/>}><LazyFullScreenAlerts /></Suspense> },
  {
    path: "/alert",
    element: (
      <Suspense fallback={<LoaderPage/>}>
        <LazyAlertModal units="5" product="Leche deslactosada santa clara 2 litros" state="danger" />
      </Suspense>
    ),
  },
  { path: "*", element: <Suspense fallback={<LoaderPage/>}><LazyNotFound /></Suspense> },
]);

export default BrowserRoutes;