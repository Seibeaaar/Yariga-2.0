import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "@/pages/Login";
import SignUpScreen from "@/pages/SignUp";
import EmailSentScreen from "@/pages/EmailSent";
import EmailVerificationScreen from "@/pages/EmailVerification";

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
  },
  {
    path: '/email-verification',
    element: <EmailVerificationScreen />
  }
]);

export default router;