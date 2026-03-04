import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "./Layouts/RootLayout";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
        // loader: homeLoader,
        // action: homeAction,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);
