import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { postLoginData, postSignUpData } from "./api/signUp";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

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
          const token = localStorage.getItem("token");
          if (!token) {
            return redirect("/login");
          }
          return null;
        },
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: async ({ request }) => {
      const formData = await request.formData();
      try {
        await postLoginData(
          formData.get("user_name") as string,
          formData.get("password") as string,
        );
        return redirect("/home");
      } catch (error: any) {
        return {
          error:
            error.response?.data?.message + "ErrorVachindi" || "Sign in failed",
        };
      }
    },
  },
  {
    path: "/signup",
    element: <SignUp />,
    action: async ({ request }) => {
      const formData = await request.formData();
      try {
        await postSignUpData(formData);
        return redirect("/login");
      } catch (error: any) {
        return {
          error: error.response?.data?.message + "ErrorVachindi" || "Sign in failed",
        };
      }
    },
  },
]);
