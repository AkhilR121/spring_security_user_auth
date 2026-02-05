import { Navigate, redirect, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootLayout from "../layouts/root-layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: () => redirect("/home"),
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);
