import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "@/pages/Login";
import SignUpScreen from "@/pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: '/sign-up',
    element: <SignUpScreen />
  }
]);

export default router;