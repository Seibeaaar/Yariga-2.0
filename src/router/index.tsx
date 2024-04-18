import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "@/pages/Login";
import SignUpScreen from "@/pages/SignUp";
import EmailSentScreen from "@/pages/EmailSent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: '/sign-up',
    element: <SignUpScreen />
  },
  {
    path: '/email-sent',
    element: <EmailSentScreen />
  }
]);

export default router;