import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { AuthPage } from "./pages/AuthPage";
import { postSignUpData } from "./api/signUp";

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
          throw redirect("/login");
        },
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/signin",
    action: async ({ request }) => {
      const formData = await request.formData();
      try {
        await postSignUpData(formData);
        return redirect("/home");
      } catch (error: any) {
        return {
          error: error.response?.data?.message + "ErrorVachindi" || "Sign in failed",
        };
      }
    },
  },
]);
