import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/RegisterPage";
import DashboardLayout from "./Layout/DashboardLayout";
import BooksPage from "./pages/BooksPage";
import AuthLayout from "./Layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "book",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
