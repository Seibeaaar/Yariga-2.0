import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "@/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  }
]);

export default router;