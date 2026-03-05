import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "home",
        element: <Home />,
        loader: async () => {
          throw redirect('/login');
        },
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);
