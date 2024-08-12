import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "@/pages/Login";
import SignUpScreen from "@/pages/SignUp";
import EmailSentScreen from "@/pages/EmailSent";
import EmailVerificationScreen from "@/pages/EmailVerification";
import ProfileCompleteScreen from "@/pages/ProfileComplete";
import ProfilePictureScreen from "@/pages/ProfilePicture";
import ClientPreferencesScreen from "@/pages/ClientPreferences";
import AddPropertyScreen from "@/pages/AddProperty";
import Dashboard from "@/pages/Dashboard";
import PropertyListScreen from "@/pages/Properties";
import PropertyInfoScreen from '@/pages/PropertyInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/sign-up",
    element: <SignUpScreen />,
  },
  {
    path: "/email-sent",
    element: <EmailSentScreen />,
  },
  {
    path: "/email-verification",
    element: <EmailVerificationScreen />,
  },
  {
    path: "/complete-profile",
    element: <ProfileCompleteScreen />,
  },
  {
    path: "/upload-profile-picture",
    element: <ProfilePictureScreen />,
  },
  {
    path: "/preferences",
    element: <ClientPreferencesScreen />,
  },
  {
    path: "/add-property",
    element: <AddPropertyScreen />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/properties",
    element: <PropertyListScreen />,
  },
  {
    path: "/property/:name",
    element: <PropertyInfoScreen />,
  },
]);

export default router;
