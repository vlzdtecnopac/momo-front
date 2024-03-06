import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.tsx";
import "./index.scss";
import { SocketProvider } from "./context/SocketContext";
import { LoaderPage } from "./includes/loader/Loader.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SocketProvider>
    <React.Suspense fallback={<LoaderPage/>}>
      <RouterProvider router={router} />
      </React.Suspense>
    </SocketProvider>
  </React.StrictMode>
);
